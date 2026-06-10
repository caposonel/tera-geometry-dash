# Geometry Dash for TeraToolbox

A playable Geometry Dash clone that runs inside TERA's in-game browser (Coherent GT).
Type `/8 dash` in chat to open or close the game.

## Requirements

- **AutoHotkey v1** — **required**, the game cannot receive keyboard input without it.
  Download from <https://www.autohotkey.com/> and install to the default location
  (`C:\Program Files\AutoHotkey\AutoHotkey.exe`).

  TERA captures all keyboard input before the in-game browser sees it. This mod uses a
  small AutoHotkey script to intercept the game keys and forward them to the browser.
  Keys are only intercepted while the TERA window is focused and the game is open;
  closing the game with `/8 dash` returns all keys to TERA.

- TeraToolbox with the `ui` module (used by most UI mods; usually already present).

## Installation

1. Install AutoHotkey v1 (see above).
2. Drop the `geometry-dash` folder into your TeraToolbox `mods` directory.
3. Start TeraToolbox and TERA, then type `/8 dash` in any chat channel.

If AutoHotkey is installed somewhere other than the default location, set the full
path in `config.json` (in the mod folder, next to this README):

```json
{
    "ahkPath": "D:\\Tools\\AutoHotkey\\AutoHotkey.exe"
}
```

Leave `ahkPath` empty (`""`) to auto-detect from the standard install locations on
the system drive. Restart TeraToolbox after editing `config.json`. If AutoHotkey
cannot be found, the mod logs an error at startup and `/8 dash` shows instructions
instead of opening the game.

## Controls

| Key | Action |
|-----|--------|
| Up / Space | Jump · fly · interact |
| Down | Down actions in applicable game modes |
| Z | Save checkpoint (practice mode) |
| X | Delete last checkpoint (practice mode) |
| Mouse | Menus, level editor |

## Features

- 24 levels (main levels + a selection of community demons) with practice mode and checkpoints
- Level editor with save/share (.gmd export)
- Icon customization, stats, persistent progress
- Music and SFX through a native PowerShell audio backend (the in-game browser has no audio support)

## Files

- `settings.json` — saved progress and settings (auto-created; delete to reset progress)
- `config.json` — mod options, currently just `ahkPath` (ships with the mod; re-created with defaults if deleted)
- `ahk/` — runtime-generated AutoHotkey scripts (auto-cleaned)

## Troubleshooting

- **"AutoHotkey not found"** — install AutoHotkey v1 or set `ahkPath` in `config.json`.
- **Keys do nothing in the game** — make sure the TERA window is focused; reopen with
  `/8 dash`. Check the toolbox log for AHK errors.
- **Arrow keys stuck / character won't move after a crash** — the mod kills leftover
  AHK processes on next startup, or end `AutoHotkey.exe` in Task Manager.
- **No sound** — sound is played by short-lived PowerShell processes; check that
  PowerShell is not blocked by policy on your system.
