// editable config stuff 

if (window.mainColor == null) {
  window.mainColor = parseInt(localStorage.getItem("iconMainColor") || "04FF00", 16);
}
if (window.secondaryColor == null) {
  window.secondaryColor = parseInt(localStorage.getItem("iconSecondaryColor") || "00FBFF", 16);
}
window.currentPlayer = localStorage.getItem("iconCurrentPlayer") || "player_01";
window.currentShip = localStorage.getItem("iconCurrentShip") || "ship_01";
window.currentBall = localStorage.getItem("iconCurrentBall") || "player_ball_01";
window.currentWave = localStorage.getItem("iconCurrentWave") || "dart_01";
window.currentSpider = localStorage.getItem("iconCurrentSpider") || "spider_01";
window.currentBird = localStorage.getItem("iconCurrentBird") || "bird_01";
window.currentlevel = ["stereo_madness",
// internal level name
"Stereo Madness",
// proper level name
"level_1",
// level id in assets/levels
["RobTop", "Forever Bound"] // person who made the song
];
window.orbClickScale = 2.0;
window.orbClickShrinkTime = 250;
window.orbParticleSize = 3.5;
var urlParams = new URLSearchParams(window.location.search);
if (urlParams.has('id')) {
  window.levelID = urlParams.get('id');
}

// -------------------------------

function hexToHexadecimal(str) {
  return parseInt(str, 16);
}
function hexadecimalToHex(num) {
  return num.toString(16).padStart(6, '0');
}
var screenWidth = window.innerWidth || document.documentElement.clientWidth || 1138;
var screenHeight = window.innerHeight || document.documentElement.clientHeight || 640;
var a = 60;
var o = 180;
var centerX = screenWidth / 2 - 150;
function l(screenWidth) {
  this.screenWidth = screenWidth;
  centerX = screenWidth / 2 - 150;
}
var u = 1 / 240;
var SpeedPortal = {
  HALF: 9.30222544655,
  ONE_TIMES: 11.540004,
  TWO_TIMES: 14.3488938625,
  THREE_TIMES: 17.3333393414,
  FOUR_TIMES: 21.3333407279
};
var playerSpeed = SpeedPortal.ONE_TIMES;
var d = 0.9;
var p = 1.916398;
var f = 600;
var g = a;
var jumpPadType = "jump_pad";
var jumpRingType = "jump_ring";
var T = 460;
function b(y) {
  return T - y;
}
var S = Phaser.BlendModes.ADD;
var E = Phaser.BlendModes.NORMAL;
var fs = 1000;
var gs = 1001;
var atlasList = ["GJ_WebSheet", "GJ_GameSheet", "GJ_GameSheet02", "GJ_GameSheet03", "GJ_GameSheet04", "GJ_GameSheetEditor", "GJ_GameSheetGlow", "GJ_GameSheetIcons", "GJ_LaunchSheet", "player_ball_00", "player_dart_00"];
function getAtlasFrame(scene, frameName) {
  if (frameName.startsWith("player_")) {
    var playerAtlasPriority = ["GJ_GameSheet03", "GJ_GameSheet", "GJ_GameSheet02", "GJ_GameSheet04", "GJ_GameSheetEditor", "GJ_GameSheetGlow", "GJ_GameSheetIcons", "GJ_WebSheet", "GJ_LaunchSheet", "player_ball_00", "player_dart_00"];
    for (var _i = 0, _playerAtlasPriority = playerAtlasPriority; _i < _playerAtlasPriority.length; _i++) {
      var atlasName = _playerAtlasPriority[_i];
      if (scene.textures.exists(atlasName)) {
        if (scene.textures.get(atlasName).has(frameName)) {
          return {
            atlas: atlasName,
            frame: frameName
          };
        }
      }
    }
  }
  for (var _i2 = 0, _atlasList = atlasList; _i2 < _atlasList.length; _i2++) {
    var _atlasName = _atlasList[_i2];
    if (scene.textures.exists(_atlasName)) {
      if (scene.textures.get(_atlasName).has(frameName)) {
        return {
          atlas: _atlasName,
          frame: frameName
        };
      }
    }
  }
  return null;
}
function addImageToScene(scene, x, y, textureName) {
  var textureInfo = getAtlasFrame(scene, textureName);
  if (textureInfo) {
    return scene.add.image(x, y, textureInfo.atlas, textureInfo.frame);
  } else if (scene.textures.exists(textureName)) {
    return scene.add.image(x, y, textureName);
  } else {
    return null;
  }
}