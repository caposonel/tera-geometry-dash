var AudioManager = (function () {
  "use strict";

  // Get the WebSocket connection (set up in index.html)
  function _getSocket() {
    return window._gdAudioSocket || null;
  }

  function _sendAudio(msg) {
    var s = _getSocket();
    if (s && s.readyState === 1) {
      s.send(JSON.stringify(msg));
    }
  }

  function AudioManager(scene) {
    var _localStorage$getItem;
    this._scene = scene;
    this._music = null;
    this._currentKey = null;
    this._musicPlaying = false;
    this._musicPaused = false;
    this._userMusicVol = (_localStorage$getItem = localStorage.getItem("userMusicVol")) !== null && _localStorage$getItem !== void 0 ? Number(_localStorage$getItem) : 1;
    this._meteringEnabled = false;
    this._analyser = null;
    this._meterBuffer = null;
    this._meterValue = 0.1;
    this._lastAudio = 0.1;
    this._lastPeak = 0;
    this._silenceCounter = 0;
  }

  AudioManager.prototype._effectiveVolume = function () {
    return this._userMusicVol * 0.8;
  };

  AudioManager.prototype.startMusic = function () {
    var StartPosOffset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    this.stopMusic();
    var key;
    if (this._scene._practicedMode && this._scene._practicedMode.practiceMode) {
      key = "StayInsideMe";
    } else {
      key = window.currentlevel[0];
    }
    this._currentKey = key;
    this._musicPlaying = true;
    this._musicPaused = false;
    _sendAudio({ type: 'audio', action: 'setVolume', volume: this._effectiveVolume() });
    _sendAudio({ type: 'audio', action: 'playMusic', key: key, loop: true });
  };

  AudioManager.prototype.startMenuMusic = function () {
    this.stopMusic();
    this._currentKey = "menu_music";
    this._musicPlaying = true;
    this._musicPaused = false;
    _sendAudio({ type: 'audio', action: 'setVolume', volume: this._effectiveVolume() });
    _sendAudio({ type: 'audio', action: 'playMusic', key: 'menu_music', loop: true });
  };

  AudioManager.prototype.stopMusic = function () {
    // Clear any running fade interval
    if (this._fadeInterval) {
      clearInterval(this._fadeInterval);
      this._fadeInterval = null;
    }
    if (this._musicPlaying || this._currentKey) {
      _sendAudio({ type: 'audio', action: 'stopMusic' });
    }
    this._currentKey = null;
    this._musicPlaying = false;
    this._musicPaused = false;
    this._music = null;
  };

  AudioManager.prototype.isplaying = function () {
    return this._musicPlaying && !this._musicPaused;
  };

  AudioManager.prototype.pauseMusic = function () {
    if (this._musicPlaying && !this._musicPaused) {
      _sendAudio({ type: 'audio', action: 'pauseMusic' });
      this._musicPaused = true;
    }
  };

  AudioManager.prototype.resumeMusic = function () {
    if (this._musicPaused) {
      _sendAudio({ type: 'audio', action: 'resumeMusic' });
      this._musicPaused = false;
    }
  };

  AudioManager.prototype.getUserMusicVolume = function () {
    return this._userMusicVol;
  };

  AudioManager.prototype.setUserMusicVolume = function (newVolume) {
    this._userMusicVol = Number(newVolume);
    localStorage.setItem("userMusicVol", newVolume);
    _sendAudio({ type: 'audio', action: 'setVolume', volume: this._effectiveVolume() });
  };

  AudioManager.prototype.getMusicVolume = function () {
    return this._effectiveVolume();
  };

  AudioManager.prototype.setMusicVolume = function (newVolume) {
    this.setUserMusicVolume(Math.min(1, Math.max(0, newVolume / 0.8)));
  };

  AudioManager.prototype.fadeInMusic = function (durationMillis) {
    this.startMusic(0);
  };

  AudioManager.prototype.fadeOutMusic = function (durationMillis) {
    var self = this;
    var dur = durationMillis || 1500;
    if (!this._musicPlaying) return;
    // Clear any existing fade interval to prevent stacking
    if (this._fadeInterval) {
      clearInterval(this._fadeInterval);
      this._fadeInterval = null;
    }
    var startVol = this._effectiveVolume();
    var steps = 15;
    var stepTime = dur / steps;
    var step = 0;
    this._fadeInterval = setInterval(function () {
      step++;
      if (step >= steps || !self._musicPlaying) {
        clearInterval(self._fadeInterval);
        self._fadeInterval = null;
        self.stopMusic();
        return;
      }
      var vol = Math.max(0, startVol * (1 - step / steps));
      _sendAudio({ type: 'audio', action: 'setVolume', volume: vol });
    }, stepTime);
  };

  AudioManager.prototype.playEffect = function (soundEffect) {
    var volumeObj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var vol = volumeObj.volume != null ? volumeObj.volume : 0.8;
    _sendAudio({ type: 'audio', action: 'playEffect', key: soundEffect, volume: vol });
  };

  AudioManager.prototype._setupAnalyser = function () {
    // No Web Audio in Coherent GT
  };

  AudioManager.prototype._ensureCorrectMusicMode = function () {
    if (!this._musicPlaying) return; // original: `if (!this._music) return;` — without this, exiting a level restarts level music
    var isPracticeMode = this._scene._practicedMode && this._scene._practicedMode.practiceMode;
    var expectedKey = isPracticeMode ? "StayInsideMe" : window.currentlevel[0];
    if (this._currentKey !== expectedKey) {
      var offset = this._scene._getStartPosMusicOffset ? this._scene._getStartPosMusicOffset() : 0;
      this.startMusic(offset);
    }
  };

  AudioManager.prototype.update = function (timeSeconds) {
    this._meterValue = 0.1;
  };

  AudioManager.prototype.getMeteringValue = function () {
    return this._meterValue;
  };

  AudioManager.prototype.reset = function () {
    this._meterValue = 0.1;
    this._lastAudio = 0.1;
    this._lastPeak = 0;
    this._silenceCounter = 0;
    this.stopMusic();
  };

  // Compatibility: code that accesses this._music directly.
  // Memoize the proxy object — previously this getter allocated a new object
  // with 8 closures on EVERY read, including from hot paths.
  Object.defineProperty(AudioManager.prototype, "_music", {
    get: function () {
      if (!this._musicPlaying) return null;
      if (!this._musicProxy) {
        var self = this;
        this._musicProxy = {
          get isPlaying() { return self._musicPlaying && !self._musicPaused; },
          get isPaused() { return self._musicPaused; },
          get key() { return self._currentKey; },
          stop: function () { self.stopMusic(); },
          destroy: function () { self.stopMusic(); },
          pause: function () { self.pauseMusic(); },
          resume: function () { self.resumeMusic(); },
          setLoop: function () {},
          get volume() { return self._effectiveVolume(); },
          set volume(v) { self.setMusicVolume(v); },
          get seek() { return 0; },
          set seek(v) {}
        };
      }
      return this._musicProxy;
    },
    set: function () {}
  });

  return AudioManager;
})();
