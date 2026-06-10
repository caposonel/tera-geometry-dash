function checkForAutoLoad() {
  var assetsLoaded = localStorage.getItem('webdash_assets_loaded') === 'true';
  var lastLoadTime = parseInt(localStorage.getItem('webdash_last_load_time') || '0');
  var now = Date.now();
  var hoursSinceLoad = (now - lastLoadTime) / (1000 * 60 * 60);
  if (assetsLoaded && hoursSinceLoad < 24 && window.gameCache.isCacheValid()) {
    var stats = window.gameCache.getCacheStats();
    if (stats.validEntries > 50) {
      console.log('auto loading from cache');
      return true;
    }
  }
  return false;
}
if (window.gameCache) {
  window.gameCache.init();
  var canAutoLoad = checkForAutoLoad();
  if (canAutoLoad) {
    var autoLoadIndicator = document.createElement('div');
    autoLoadIndicator.style.cssText = "\n      position: fixed;\n      top: 10px;\n      right: 10px;\n      background: #00ff00;\n      color: #000;\n      padding: 5px 10px;\n      border-radius: 5px;\n      font-family: Arial;\n      font-size: 12px;\n      z-index: 9999;\n    ";
    autoLoadIndicator.textContent = 'turbo loading';
    document.body.appendChild(autoLoadIndicator);
    setTimeout(function () {
      if (autoLoadIndicator.parentNode) {
        autoLoadIndicator.parentNode.removeChild(autoLoadIndicator);
      }
    }, 3000);
  }
}
var phaserConfig = {
  type: Phaser.CANVAS,
  width: screenWidth,
  height: screenHeight,
  resolution: 1,
  fps: {
    target: 240,
    forceSetTimeOut: false,
    smoothStep: false
  },
  backgroundColor: "#000000",
  parent: document.body,
  input: {
    windowEvents: false
  },
  render: {
    powerPreference: "default",
    // Canvas renderer wins from integer-pixel positioning: less subpixel
    // re-rasterization, fewer browser blur ops.
    roundPixels: true,
    antialias: false,
    pixelArt: false
  },
  scale: {
    mode: Phaser.Scale.NONE
  },
  audio: {
    noAudio: true
  },
  scene: [BootScene, GameScene]
};
var game = new Phaser.Game(phaserConfig);
window.game = game;
// In-game FPS text is built by game-scene.js; no duplicate DOM counter.

window.clearGameCache = function () {
  if (window.gameCache) {
    window.gameCache.clearCache();
    localStorage.removeItem('webdash_assets_loaded');
    localStorage.removeItem('webdash_last_load_time');
    console.log('Game cache cleared');
    location.reload();
  }
};
window.getCacheInfo = function () {
  if (window.gameCache) {
    return window.gameCache.getCacheStats();
  }
  return null;
};