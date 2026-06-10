const EventEmitter = require('events')
const { spawn, execSync } = require('child_process')
const fs = require('fs')
const path = require('path')

const TEMPLATE = `#ErrorStdOut
#NoTrayIcon
#MaxHotkeysPerInterval 2147483647
#HotkeyInterval 0
#SingleInstance Off

stdout := FileOpen("*", "w")

; Context-sensitive hotkeys: only registered while the TERA window is focused.
; When the user alt-tabs away, the keys pass through to other apps untouched
; (a bare $-hotkey would suppress them system-wide).
#If WinActive("ahk_pid {TERA_PID}")

$Up::
$Down::
$Space::
$z::
$x::
\tKey := StrReplace(A_ThisHotkey, "$")
\tstdout.Write(Key " down\`n")
\tstdout.Read(0)
\tKeyWait, %Key%
\tstdout.Write(Key " up\`n")
\tstdout.Read(0)
\tReturn

#If
`

class AHKHelper extends EventEmitter {
    constructor(scriptPath, ahkPath) {
        super()
        this.proc = spawn(ahkPath, [scriptPath])
        this.dead = false

        // Buffer partial stdout reads — without this, a line split across two
        // 'data' events ("Up do" + "wn\n") gets silently dropped. In a rhythm
        // game, even one missed keypress per session is a real bug.
        var lineBuf = ''
        this.proc.stdout.on('data', (data) => {
            lineBuf += data.toString()
            var nlIdx
            while ((nlIdx = lineBuf.indexOf('\n')) !== -1) {
                var line = lineBuf.substring(0, nlIdx).trim()
                lineBuf = lineBuf.substring(nlIdx + 1)
                if (!line) continue
                var spaceIdx = line.lastIndexOf(' ')
                if (spaceIdx === -1) continue
                var key = line.substring(0, spaceIdx).toLowerCase()
                var state = line.substring(spaceIdx + 1)
                if (state === 'down') this.emit('key_down', key)
                else if (state === 'up') this.emit('key_up', key)
            }
        })

        this.proc.stderr.on('data', (data) => {
            console.error('[geometry-dash AHK]', data.toString())
        })

        this.proc.on('error', (err) => {
            console.error('[geometry-dash AHK] spawn error:', err.message)
            this.dead = true
        })

        this.proc.on('exit', () => {
            this.dead = true
            this.emit('exit')
        })
    }

    destructor() {
        if (this.proc && !this.dead) {
            this.proc.kill()
            this.dead = true
        }
    }
}

AHKHelper.compile = function (destPath, teraPid) {
    var script = TEMPLATE.replace('{TERA_PID}', teraPid)
    // Skip write if file already has the exact content — avoids disk churn on every /dash toggle
    try {
        var existing = fs.readFileSync(destPath, 'utf8')
        if (existing === script) return destPath
    } catch (e) { /* file doesn't exist yet */ }
    fs.writeFileSync(destPath, script)
    return destPath
}

// Resolve the AutoHotkey executable. A user-configured path (config.json
// "ahkPath") wins; otherwise standard install locations on the default drive
// are tried. AHK v1 paths are preferred — the generated script uses v1 syntax.
AHKHelper.resolveAhkPath = function (configuredPath) {
    if (configuredPath) {
        if (fs.existsSync(configuredPath)) return configuredPath
        // A configured path that doesn't exist is a user error — report it,
        // don't silently fall through to auto-detection.
        return null
    }
    var systemDrive = process.env.SystemDrive || 'C:'
    // v1 paths ONLY — the generated script uses v1 syntax; AHK v2 rejects it
    // with an instant syntax-error exit and the user gets no useful message.
    // Better to fail resolution and show the "install AHK v1" instructions.
    var candidates = [
        '%ProgramFiles%\\AutoHotkey\\AutoHotkey.exe',
        '%ProgramFiles(x86)%\\AutoHotkey\\AutoHotkey.exe',
        systemDrive + '\\Program Files\\AutoHotkey\\AutoHotkey.exe',
        systemDrive + '\\Program Files (x86)\\AutoHotkey\\AutoHotkey.exe'
    ]
    for (var i = 0; i < candidates.length; i++) {
        var resolved = candidates[i].replace(/%(.+?)%/g, function (_, m) { return process.env[m] || _ })
        if (resolved.indexOf('%') === -1 && fs.existsSync(resolved)) return resolved
    }
    return null
}

AHKHelper.cleanStaleScripts = function (ahkDir, selfPid) {
    if (!fs.existsSync(ahkDir)) return
    fs.readdirSync(ahkDir)
        .filter(function (x) {
            if (path.extname(x) !== '.ahk') return false
            var match = /^output_(\d+)_\d+\.ahk$/.exec(x)
            return !match || match[1] != selfPid
        })
        .forEach(function (file) {
            try { fs.unlinkSync(path.join(ahkDir, file)) } catch (e) { }
        })
}

// Kill leftover AHK processes from previous Tera-Toolbox sessions.
// Without this, an AHK from a crashed/reloaded mod keeps capturing arrow keys
// while the user wonders why TERA character won't move.
// IMPORTANT: excludes scripts belonging to selfPid so a second toolbox instance
// (multi-client) never kills a live session's AHK.
AHKHelper.killZombieProcesses = function (ahkDir, selfPid) {
    if (!fs.existsSync(ahkDir)) return
    try {
        // PowerShell script via -EncodedCommand: avoids all cmd.exe quoting pitfalls
        var psScript =
            "$dir = '" + ahkDir.replace(/'/g, "''") + "';" +
            "$self = 'output_" + selfPid + "_';" +
            "Get-CimInstance Win32_Process -Filter \"Name='AutoHotkey.exe'\" | " +
            "Where-Object { $_.CommandLine -and $_.CommandLine.Contains($dir) -and -not $_.CommandLine.Contains($self) } | " +
            "ForEach-Object { Stop-Process -Id $_.ProcessId -Force -ErrorAction SilentlyContinue }"
        var encoded = Buffer.from(psScript, 'utf16le').toString('base64')
        execSync('powershell.exe -NoProfile -NonInteractive -EncodedCommand ' + encoded, {
            timeout: 5000, windowsHide: true, stdio: 'ignore'
        })
    } catch (e) { /* best effort */ }
}

module.exports = AHKHelper
