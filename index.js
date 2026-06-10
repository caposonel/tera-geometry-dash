const UI = require('../ui'),
    path = require('path'),
    fs = require('fs'),
    http = require('http'),
    ws = require('ws'),
    AHKHelper = require('./lib/ahk'),
    AudioPlayer = require('./lib/audio-player')

module.exports = function GeometryDash(mod) {
    const ui = new UI(mod),
        { command } = mod.require

    const ahkDir = path.join(__dirname, 'ahk')
    const selfPid = process.pid
    const teraPid = mod.clientInterface.info.pid
    const assetsDir = path.join(__dirname, 'build', 'assets')
    const settingsFile = path.join(__dirname, 'settings.json')
    const configFile = path.join(__dirname, 'config.json')

    // --- Mod config (AHK path etc.) ---
    // config.json: { "ahkPath": "" } — empty string means auto-detect from
    // standard install locations on the system drive.
    var modConfig = { ahkPath: '' }
    try {
        var parsedCfg = JSON.parse(fs.readFileSync(configFile, 'utf8'))
        if (parsedCfg && typeof parsedCfg === 'object') {
            modConfig = Object.assign(modConfig, parsedCfg)
        }
    } catch (e) {
        // Re-create the default config file if missing/corrupt so users can discover the option
        try { fs.writeFileSync(configFile, JSON.stringify(modConfig, null, 4), 'utf8') } catch (e2) {}
    }
    // Guard against non-string ahkPath (e.g. user typo'd a bare path without quotes)
    if (typeof modConfig.ahkPath !== 'string') modConfig.ahkPath = ''

    const AHK_HELP =
        'Geometry Dash requires AutoHotkey v1 (https://www.autohotkey.com/). ' +
        'Install it to the default location, or set "ahkPath" in mods/geometry-dash/config.json ' +
        'to the full path of AutoHotkey.exe.'

    // Resolve AHK at startup so the user sees the error immediately,
    // not on first /dash attempt.
    var resolvedAhkPath = AHKHelper.resolveAhkPath(modConfig.ahkPath)
    if (!resolvedAhkPath) {
        if (modConfig.ahkPath) {
            console.error('[geometry-dash] ERROR: configured ahkPath does not exist: ' + modConfig.ahkPath)
        } else {
            console.error('[geometry-dash] ERROR: AutoHotkey not found. ' + AHK_HELP)
        }
    }

    // --- Persistent settings (localStorage replacement) ---
    // Cache in memory; serialize writes through a promise chain so concurrent
    // POSTs don't race. Write to .tmp + rename for atomicity (crash-safe).
    var _settingsCache = null
    var _writeQueue = Promise.resolve()
    function loadSettings() {
        if (_settingsCache) return _settingsCache
        try { _settingsCache = JSON.parse(fs.readFileSync(settingsFile, 'utf8')) }
        catch (e) { _settingsCache = {} }
        return _settingsCache
    }
    function saveSettings(data) {
        _settingsCache = data
        _writeQueue = _writeQueue.then(function () {
            return new Promise(function (resolve) {
                var tmp = settingsFile + '.tmp'
                try {
                    fs.writeFileSync(tmp, JSON.stringify(data), 'utf8')
                    fs.renameSync(tmp, settingsFile)
                } catch (e) {}
                resolve()
            })
        })
    }

    if (!fs.existsSync(ahkDir)) fs.mkdirSync(ahkDir)
    AHKHelper.cleanStaleScripts(ahkDir, selfPid)
    // Kill any zombie AHK processes from previous Tera-Toolbox sessions —
    // otherwise they keep capturing the arrow keys after a mod reload.
    // (Excludes our own selfPid scripts so multi-client setups stay safe.)
    AHKHelper.killZombieProcesses(ahkDir, selfPid)

    ui.use(UI.static(path.join(__dirname, 'build')))

    // Bind WS server to the same loopback host the UI module serves pages from
    // (TeraToolbox UI uses 127.0.0.69 — see ../ui/config.json). The frontend
    // connects to window.location.hostname, so these MUST match or no input works.
    // Any 127.x.x.x address is loopback — unreachable remotely, so this still
    // blocks outside connections to the PowerShell-backed audio handler.
    var wsHost = '127.0.0.1'
    try {
        var uiConfig = require('../ui/config.json')
        if (uiConfig && typeof uiConfig.host === 'string' && uiConfig.host.indexOf('127.') === 0) {
            wsHost = uiConfig.host
        }
    } catch (e) { /* UI config missing — fall back to 127.0.0.1 */ }

    function isLoopback(addr) {
        if (!addr) return false
        if (addr === '::1') return true
        if (addr.indexOf('::ffff:') === 0) addr = addr.slice(7)
        return addr.indexOf('127.') === 0
    }

    var server = http.createServer().listen(0, wsHost)
    var wsServer = new ws.Server({
        server: server,
        verifyClient: function (info) {
            return isLoopback(info.req.socket.remoteAddress)
        }
    })
    var gameOpen = false
    var ahkProcess = null
    var audioPlayer = new AudioPlayer(assetsDir)
    var autoCloseTimer = null

    function heartbeat() { this.isAlive = true }

    wsServer.on('connection', function (socket) {
        // Cancel any pending auto-close — a new client just arrived (likely a reload)
        if (autoCloseTimer) { clearTimeout(autoCloseTimer); autoCloseTimer = null }

        socket.isAlive = true
        socket.on('pong', heartbeat)
        try { socket.send(JSON.stringify({ type: 'connected' })) } catch (e) {}

        socket.on('message', function (data) {
            try {
                if (data.length > 8192) return
                var msg = JSON.parse(data)
                if (msg.type === 'audio') {
                    var key = typeof msg.key === 'string' ? msg.key : null
                    switch (msg.action) {
                        case 'playMusic':
                            if (key) audioPlayer.playMusic(key, msg.loop, msg.seek)
                            break
                        case 'stopMusic':
                            audioPlayer.stopMusic()
                            break
                        case 'pauseMusic':
                            audioPlayer.pauseMusic()
                            break
                        case 'resumeMusic':
                            audioPlayer.resumeMusic()
                            break
                        case 'playEffect':
                            if (key) audioPlayer.playEffect(key, msg.volume)
                            break
                        case 'setVolume':
                            audioPlayer.setVolume(msg.volume)
                            break
                        case 'stopAll':
                            audioPlayer.stopAll()
                            break
                    }
                }
            } catch (e) {}
        })

        socket.on('close', function () {
            // Debounce auto-close — transient disconnect (page reload) should not
            // immediately kill the AHK script.
            setImmediate(function () {
                if (wsServer.clients.size === 0 && gameOpen) {
                    // Cut audio NOW — if this is just a reload, the frontend
                    // re-syncs music on reconnect (resyncToBackend), so there's
                    // no reason to let it keep playing through the debounce.
                    audioPlayer.stopAll()
                    if (autoCloseTimer) clearTimeout(autoCloseTimer)
                    autoCloseTimer = setTimeout(function () {
                        autoCloseTimer = null
                        if (wsServer.clients.size === 0 && gameOpen) closeGame()
                    }, 2000)
                }
            })
        })
    })

    var wsPing = setInterval(function () {
        wsServer.clients.forEach(function (client) {
            if (!client.isAlive) return client.terminate()
            client.isAlive = false
            try { client.ping(function () { }) } catch (e) {}
        })
    }, 2000)

    ui.get('/wsPort', function (req, res) {
        var addr = server.address()
        if (!addr) {
            // Server still binding — tell the client to retry (it already polls on failure)
            return res.status(503).json({ error: 'starting' })
        }
        res.json({ port: addr.port })
    })

    // Serve settings as a JS file (reliable in Coherent GT, no sync XHR needed)
    ui.get('/settings.js', function (req, res) {
        res.set('Content-Type', 'application/javascript')
        res.send('window._gdSettings=' + JSON.stringify(loadSettings()) + ';')
    })

    // POST settings — body capped at 64KB.
    ui.post('/settings', function (req, res) {
        req.setEncoding('utf8') // prevents multibyte UTF-8 corruption on chunk boundaries
        var body = ''
        var aborted = false
        req.on('data', function (chunk) {
            if (aborted) return
            body += chunk
            if (body.length > 65536) {
                aborted = true
                try { res.status(413).json({ error: 'too large' }) } catch (e) {}
                try { req.connection && req.connection.destroy() } catch (e) {}
            }
        })
        req.on('error', function () { aborted = true })
        req.on('end', function () {
            if (aborted) return
            try {
                var incoming = JSON.parse(body)
                if (!incoming || typeof incoming !== 'object') {
                    return res.status(400).json({ error: 'bad json' })
                }
                var current = Object.assign({}, loadSettings())
                Object.keys(incoming).forEach(function (k) {
                    if (incoming[k] === null) { delete current[k] } else { current[k] = incoming[k] }
                })
                saveSettings(current)
                res.json({ ok: true })
            } catch (e) {
                res.status(400).json({ error: 'bad json' })
            }
        })
    })

    function broadcast(obj) {
        var msg = JSON.stringify(obj)
        wsServer.clients.forEach(function (client) {
            if (client.readyState === ws.OPEN) {
                try { client.send(msg) } catch (e) {}
            }
        })
    }

    function broadcastKey(type, key) {
        broadcast({ type: type, key: key })
    }

    function openGame() {
        // Re-resolve in case the user installed AHK or fixed config.json since startup
        var ahkPath = resolvedAhkPath || AHKHelper.resolveAhkPath(modConfig.ahkPath)
        if (!ahkPath) {
            if (modConfig.ahkPath) {
                command.message('ERROR: configured ahkPath does not exist: ' + modConfig.ahkPath)
            } else {
                command.message('ERROR: AutoHotkey not found. ' + AHK_HELP)
            }
            return
        }
        resolvedAhkPath = ahkPath

        var scriptPath = path.join(ahkDir, 'output_' + selfPid + '_' + teraPid + '.ahk')
        AHKHelper.compile(scriptPath, teraPid)

        ahkProcess = new AHKHelper(scriptPath, ahkPath)
        var thisAhk = ahkProcess
        ahkProcess.on('key_down', function (key) { broadcastKey('keydown', key) })
        ahkProcess.on('key_up', function (key) { broadcastKey('keyup', key) })
        ahkProcess.on('exit', function () {
            if (ahkProcess !== thisAhk) return
            ahkProcess = null
            if (gameOpen) {
                gameOpen = false
                command.message('Geometry Dash AHK process exited.')
            }
        })

        gameOpen = true
        ui.open()
        command.message('Geometry Dash opened. Press Up or Space to jump!')
    }

    function closeGame() {
        if (ahkProcess) {
            ahkProcess.destructor()
            ahkProcess = null
        }
        audioPlayer.stopAll()
        gameOpen = false
        if (autoCloseTimer) { clearTimeout(autoCloseTimer); autoCloseTimer = null }
        command.message('Geometry Dash closed.')
    }

    command.add('dash', {
        $default() {
            if (!gameOpen) {
                openGame()
            } else {
                closeGame()
            }
        }
    })

    this.destructor = function () {
        command.remove(['dash'])
        if (ahkProcess) { ahkProcess.destructor(); ahkProcess = null }
        audioPlayer.destroy()
        clearInterval(wsPing)
        if (autoCloseTimer) { clearTimeout(autoCloseTimer); autoCloseTimer = null }
        wsServer.clients.forEach(function (client) {
            try { client.terminate() } catch (e) {}
        })
        wsServer.close()
        server.close()
        gameOpen = false
    }
}
