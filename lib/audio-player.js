'use strict'

const { spawn } = require('child_process')
const path = require('path')
const fs = require('fs')

// Only allow alphanumeric, underscore, hyphen — protects against PowerShell
// command injection via crafted WS messages and against path traversal.
const SAFE_KEY = /^[a-zA-Z0-9_-]+$/

// One persistent PowerShell worker hosts all playback (WPF MediaPlayer).
// Spawning a PowerShell process takes 200-500ms — doing that per sound made
// every SFX/music change feel seconds late. The worker is spawned warm at
// construction and receives line commands over stdin:
//   MUSIC|<vol>|<loop:0|1>|<seekSec>|<path>   open + play music (seek applied once media opens)
//   STOPMUSIC / PAUSE / RESUME      music control
//   VOL|<vol>                       music volume
//   PRELOADSFX|<key>|<path>        open an SFX into a persistent player (instant replay)
//   SFX|<vol>|<key>|<path>          play effect (cached player if preloaded, else dynamic)
//   STOPALL                         stop music + all effects
//   EXIT                            quit worker
// The worker polls stdin asynchronously (ReadLineAsync) at 25ms so commands
// apply near-instantly, and loops music by position-polling (WPF MediaEnded
// events never fire without a dispatcher pump, so we don't rely on them).
const WORKER_SCRIPT = `
$ProgressPreference = 'SilentlyContinue'
Add-Type -AssemblyName PresentationCore
$ErrorActionPreference = 'SilentlyContinue'
$music = New-Object System.Windows.Media.MediaPlayer
$musicLoop = $false
$musicOpen = $false
$musicPaused = $false
$musicSeek = 0.0
$sfx = New-Object System.Collections.ArrayList
$sfxCache = @{}
$reader = New-Object System.IO.StreamReader([Console]::OpenStandardInput())
$task = $reader.ReadLineAsync()
:main while ($true) {
    while ($task.IsCompleted) {
        $line = $task.Result
        if ($null -eq $line) { break main }
        $parts = $line.Split('|')
        switch ($parts[0]) {
            'MUSIC' {
                $music.Stop()
                $music.Close()
                $music.Volume = [double]$parts[1]
                $musicLoop = ($parts[2] -eq '1')
                $musicSeek = [double]$parts[3]
                $music.Open([Uri]::new($parts[4]))
                $music.Play()
                $musicOpen = $true
                $musicPaused = $false
            }
            'STOPMUSIC' { $music.Stop(); $music.Close(); $musicOpen = $false; $musicPaused = $false; $musicSeek = 0.0 }
            'PAUSE'     { $music.Pause(); $musicPaused = $true }
            'RESUME'    { if ($musicOpen) { $music.Play() }; $musicPaused = $false }
            'VOL'       { $music.Volume = [double]$parts[1] }
            'PRELOADSFX' {
                if (-not $sfxCache.ContainsKey($parts[1])) {
                    $p = New-Object System.Windows.Media.MediaPlayer
                    $p.Open([Uri]::new($parts[2]))
                    $sfxCache[$parts[1]] = $p
                }
            }
            'SFX' {
                if ($sfxCache.ContainsKey($parts[2])) {
                    $p = $sfxCache[$parts[2]]
                    $p.Stop()
                    $p.Volume = [double]$parts[1]
                    $p.Play()
                } else {
                    $p = New-Object System.Windows.Media.MediaPlayer
                    $p.Volume = [double]$parts[1]
                    $p.Open([Uri]::new($parts[3]))
                    $p.Play()
                    [void]$sfx.Add(@{ p = $p; t = [DateTime]::UtcNow })
                }
            }
            'STOPALL' {
                $music.Stop(); $music.Close(); $musicOpen = $false; $musicPaused = $false; $musicSeek = 0.0
                foreach ($e in $sfx) { $e.p.Stop(); $e.p.Close() }
                $sfx.Clear()
                foreach ($p in $sfxCache.Values) { $p.Stop() }
            }
            'EXIT' { break main }
        }
        $task = $reader.ReadLineAsync()
    }
    if ($musicSeek -gt 0 -and $musicOpen -and $music.NaturalDuration.HasTimeSpan) {
        if ($musicSeek -lt $music.NaturalDuration.TimeSpan.TotalSeconds) {
            $music.Position = [TimeSpan]::FromSeconds($musicSeek)
        }
        $musicSeek = 0.0
    }
    if ($musicLoop -and $musicOpen -and (-not $musicPaused) -and $music.NaturalDuration.HasTimeSpan) {
        if ($music.Position -ge $music.NaturalDuration.TimeSpan) {
            $music.Position = [TimeSpan]::Zero
            $music.Play()
        }
    }
    if ($sfx.Count -gt 0) {
        $now = [DateTime]::UtcNow
        for ($i = $sfx.Count - 1; $i -ge 0; $i--) {
            $e = $sfx[$i]
            $done = $false
            if ($e.p.NaturalDuration.HasTimeSpan) {
                if ($e.p.Position -ge $e.p.NaturalDuration.TimeSpan) { $done = $true }
            }
            if (($now - $e.t).TotalSeconds -gt 10) { $done = $true }
            if ($done) { $e.p.Stop(); $e.p.Close(); $sfx.RemoveAt($i) }
        }
    }
    Start-Sleep -Milliseconds 10
}
$music.Stop(); $music.Close()
foreach ($e in $sfx) { $e.p.Stop(); $e.p.Close() }
foreach ($p in $sfxCache.Values) { $p.Stop(); $p.Close() }
`

class AudioPlayer {
    constructor(assetsDir) {
        this._assetsDir = assetsDir
        this._worker = null
        this._workerExiting = false
        this._respawnTimer = null
        this._volume = 0.8
        this._currentKey = null
        this._musicPaused = false
        this._sfxCooldowns = {}
        this._spawnWorker()
    }

    _spawnWorker() {
        if (this._worker || this._workerExiting) return
        try {
            const encoded = Buffer.from(WORKER_SCRIPT, 'utf16le').toString('base64')
            const proc = spawn('powershell.exe', [
                '-NoProfile', '-NoLogo', '-NonInteractive',
                '-EncodedCommand', encoded
            ], {
                stdio: ['pipe', 'ignore', 'ignore'],
                windowsHide: true
            })
            this._worker = proc
            proc.stdin.on('error', () => {})
            // Preload every SFX into a persistent player so playback is instant —
            // a cold MediaPlayer Open() costs 100-300ms per effect otherwise.
            try {
                const sfxDir = path.join(this._assetsDir, 'sfx')
                for (const f of fs.readdirSync(sfxDir)) {
                    if (f.endsWith('.ogg')) {
                        const sfxKey = f.slice(0, -4)
                        if (SAFE_KEY.test(sfxKey)) {
                            proc.stdin.write('PRELOADSFX|' + sfxKey + '|' + path.join(sfxDir, f) + '\n')
                        }
                    }
                }
            } catch (e) {}
            const onGone = () => {
                if (this._worker === proc) {
                    this._worker = null
                    this._currentKey = null
                    // Respawn so audio recovers if the worker dies unexpectedly
                    // (unless we're shutting down)
                    if (!this._workerExiting) this._respawnTimer = setTimeout(() => { this._respawnTimer = null; this._spawnWorker() }, 500)
                }
            }
            proc.on('exit', onGone)
            proc.on('error', onGone)
        } catch (e) {
            this._worker = null
        }
    }

    _send(line) {
        if (!this._worker) this._spawnWorker()
        const w = this._worker
        if (w && w.stdin && w.stdin.writable) {
            try { w.stdin.write(line + '\n'); return true } catch (e) {}
        }
        return false
    }

    _resolveMusic(key) {
        if (!SAFE_KEY.test(key)) return null
        const aliases = {
            'menu_music': 'menuLoop',
            'xstep': 'xStep'
        }
        let fileName = aliases[key]
        if (!fileName) {
            fileName = key.split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('')
        }
        // Music ships as AAC .m4a (96k) — ~22% smaller than the original MP3s;
        // WPF MediaPlayer plays it via Media Foundation
        return path.join(this._assetsDir, 'music', fileName + '.m4a')
    }

    _resolveSfx(key) {
        if (!SAFE_KEY.test(key)) return null
        return path.join(this._assetsDir, 'sfx', key + '.ogg')
    }

    playMusic(key, loop, seek) {
        if (typeof key !== 'string') return
        // Don't restart if already playing the same track
        if (this._currentKey === key && this._worker && !this._musicPaused) return
        const filePath = this._resolveMusic(key)
        if (!filePath || !fs.existsSync(filePath)) return
        this._currentKey = key
        this._musicPaused = false
        const seekSec = Math.max(0, Number(seek) || 0)
        this._send('MUSIC|' + this._volume + '|' + (loop !== false ? '1' : '0') + '|' + seekSec + '|' + filePath)
    }

    stopMusic() {
        this._currentKey = null
        this._musicPaused = false
        this._send('STOPMUSIC')
    }

    pauseMusic() {
        this._musicPaused = true
        this._send('PAUSE')
    }

    resumeMusic() {
        this._musicPaused = false
        this._send('RESUME')
    }

    setVolume(vol) {
        this._volume = Math.min(1, Math.max(0, Number(vol) || 0))
        this._send('VOL|' + this._volume)
    }

    playEffect(key, volume) {
        if (typeof key !== 'string') return
        // Debounce: don't replay the same SFX within 60ms (double-fire guard)
        const now = Date.now()
        if (this._sfxCooldowns[key] && now - this._sfxCooldowns[key] < 60) return
        this._sfxCooldowns[key] = now

        const filePath = this._resolveSfx(key)
        if (!filePath || !fs.existsSync(filePath)) return
        // SFX volume is independent of music volume — coupling them meant a faded/zeroed
        // music slider silenced all sound effects too
        const vol = Math.min(1, Math.max(0, volume != null ? Number(volume) || 0 : 0.8))
        this._send('SFX|' + vol + '|' + key + '|' + filePath)
    }

    stopAll() {
        this._currentKey = null
        this._musicPaused = false
        this._send('STOPALL')
    }

    destroy() {
        this._workerExiting = true
        if (this._respawnTimer) { clearTimeout(this._respawnTimer); this._respawnTimer = null }
        const w = this._worker
        this._worker = null
        if (w) {
            try {
                if (w.stdin && w.stdin.writable) {
                    w.stdin.write('EXIT\n')
                    w.stdin.end()
                }
            } catch (e) {}
            // Grace period for clean MediaPlayer COM shutdown, then force-kill
            setTimeout(() => { try { w.kill() } catch (e) {} }, 300)
        }
    }
}

module.exports = AudioPlayer
