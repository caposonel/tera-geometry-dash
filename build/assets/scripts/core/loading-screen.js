function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function loadFont(scene, fontName, fontData) {
  var texture = scene.textures.get(fontName);
  var image = texture.source[0];
  var imageWidth = image.width;
  var imageHeight = image.height;
  var fontConfig = {
    font: fontName,
    size: 0,
    lineHeight: 0,
    chars: {}
  };
  var kerningPairs = [];
  var _iterator = _createForOfIteratorHelper(fontData.split("\n")),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var line = _step.value;
      var lineParts = line.trim().split(/\s+/);
      if (!lineParts.length) continue;
      var lineType = lineParts[0];
      var properties = {};
      for (var i = 1; i < lineParts.length; i++) {
        var equalIndex = lineParts[i].indexOf("=");
        if (equalIndex >= 0) {
          properties[lineParts[i].slice(0, equalIndex)] = lineParts[i].slice(equalIndex + 1).replace(/^"|"$/g, "");
        }
      }
      if (lineType === "info") {
        fontConfig.size = parseInt(properties.size, 10);
      } else if (lineType === "common") {
        fontConfig.lineHeight = parseInt(properties.lineHeight, 10);
      } else if (lineType === "char") {
        var charId = parseInt(properties.id, 10);
        var charX = parseInt(properties.x, 10);
        var charY = parseInt(properties.y, 10);
        var charWidth = parseInt(properties.width, 10);
        var charHeight = parseInt(properties.height, 10);
        var u0 = charX / imageWidth;
        var v0 = charY / imageHeight;
        var u1 = (charX + charWidth) / imageWidth;
        var v1 = (charY + charHeight) / imageHeight;
        fontConfig.chars[charId] = {
          x: charX,
          y: charY,
          width: charWidth,
          height: charHeight,
          centerX: Math.floor(charWidth / 2),
          centerY: Math.floor(charHeight / 2),
          xOffset: parseInt(properties.xoffset, 10),
          yOffset: parseInt(properties.yoffset, 10),
          xAdvance: parseInt(properties.xadvance, 10),
          data: {},
          kerning: {},
          u0: u0,
          v0: v0,
          u1: u1,
          v1: v1
        };
        if (charWidth !== 0 && charHeight !== 0) {
          var charCode = String.fromCharCode(charId);
          var frame = texture.add(charCode, 0, charX, charY, charWidth, charHeight);
          if (frame) frame.setUVs(charWidth, charHeight, u0, v0, u1, v1);
        }
      } else if (lineType === "kerning") {
        kerningPairs.push({
          first: parseInt(properties.first, 10),
          second: parseInt(properties.second, 10),
          amount: parseInt(properties.amount, 10)
        });
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  for (var _i = 0, _kerningPairs = kerningPairs; _i < _kerningPairs.length; _i++) {
    var kerningPair = _kerningPairs[_i];
    if (fontConfig.chars[kerningPair.second]) {
      fontConfig.chars[kerningPair.second].kerning[kerningPair.first] = kerningPair.amount;
    }
  }
  scene.cache.bitmapFont.add(fontName, {
    data: fontConfig,
    texture: fontName,
    frame: null
  });
}
var BootScene = /*#__PURE__*/function (_Phaser$Scene) {
  "use strict";

  function BootScene() {
    _classCallCheck(this, BootScene);
    return _callSuper(this, BootScene, [{
      key: "BootScene"
    }]);
  }
  _inherits(BootScene, _Phaser$Scene);
  return _createClass(BootScene, [{
    key: "preload",
    value: function preload() {
      var _this = this;
      if (window.gameCache) window.gameCache.init();
      (function (game) {
        if (game.renderer.type === Phaser.WEBGL) {
          try {
            var gl = game.renderer.gl;
            if (gl && gl.isContextLost()) {
              console.warn('WebGL context lost now using blend modes');
              window.S = Phaser.BlendModes.ADD;
              window.E = Phaser.BlendModes.MULTIPLY;
            } else {
              window.S = game.renderer.addBlendMode([gl.SRC_ALPHA, gl.ONE], gl.FUNC_ADD);
              window.E = game.renderer.addBlendMode([gl.DST_COLOR, gl.ONE_MINUS_SRC_ALPHA], gl.FUNC_ADD);
            }
          } catch (e) {
            window.S = Phaser.BlendModes.ADD;
            window.E = Phaser.BlendModes.MULTIPLY;
          }
        } else {
          console.log('using Canvas renderer setting blend modes');
          window.S = Phaser.BlendModes.ADD;
          window.E = Phaser.BlendModes.MULTIPLY;
        }
        if (game.canvas) {
          game.canvas.addEventListener('webglcontextlost', function (e) {
            console.warn('WebGL context lost');
            e.preventDefault();
            window.S = Phaser.BlendModes.ADD;
            window.E = Phaser.BlendModes.MULTIPLY;
          });
          game.canvas.addEventListener('webglcontextrestored', function (e) {
            console.log('WebGL context is back');
            if (game.renderer.type === Phaser.WEBGL && game.renderer.gl) {
              try {
                var _gl = game.renderer.gl;
                window.S = game.renderer.addBlendMode([_gl.SRC_ALPHA, _gl.ONE], _gl.FUNC_ADD);
                window.E = game.renderer.addBlendMode([_gl.DST_COLOR, _gl.ONE_MINUS_SRC_ALPHA], _gl.FUNC_ADD);
              } catch (e) {
                console.warn('failed to bring back WebGL blend modes:', e);
                window.S = Phaser.BlendModes.ADD;
                window.E = Phaser.BlendModes.MULTIPLY;
              }
            }
          });
        }
      })(this.game);
      var W = this.cameras.main.width;
      var H = this.cameras.main.height;
      var cx = W / 2;
      var cy = H / 2;
      var LOADING_MESSAGES = ["Only one?", "Listen to the music to help time your jumps", "Back for more are ya?", "Use practice mode to learn the layout of a level", "If at first you don't succeed, try, try again...", "Customize your character's icon and color!", "You can download all songs from the level select page!", "Spikes are not your friends. don't forget to jump", "Build your own levels using the level editor", "Go online to play other players levels!", "Can you beat them all?", "Here be dragons...", "Pro tip: Don't crash", "Hold down to keep jumping", "The spikes whisper to me...", "Looking for pixels", "Loading awesome soundtracks...", "What if the spikes are the good guys?", "Pro tip: Jump", "Does anyone even read this?", "Collecting scrap metal", "Waiting for planets to align", "Starting the flux capacitor", "Wandering around aimlessly", "Where did I put that coin...", "Loading the progressbar", "Calculating chance of success", "Hiding secrets", "Drawing pretty pictures", "Programmer is sleeping, please wait", "Web is Love, Dasher is Life", "Play, Crash, Rage, Quit, Repeat", "Only one button required to crash", "Such wow, very amaze.", "Fus Ro DASH!", "Loading Rage Cannon", "Counting to 1337", "It's all in the timing", "Fake spikes are fake", "Spikes... OF DOOM!", "Why don't you go outside?", "Loading will be finished... soon", "This seems like a good place to hide a secret...", "The vault Keeper's name is 'Spooky'...", "Hop the big guy doesn't wakt up...", "Shhhh! You're gonna wake the big one!", "I have been expecting you.", "A wild WebDasher appeared!", "So many secrets...", "Hiding rocket launcher", "It's Over 9000!", "Programming amazing AI", "Hiding secret vault", "Spooky doesn't get out much", "Rohan was here", "Warp Speed", "So, what's up?", "Hold on, reading the manual", "I don't know how this works...", "Why u have to be mad?", "It is only game...", "Unlock new icons and colors by completing achievements"];
      var sliderOriginX = cx - 105;
      var sliderOriginY = cy + 110;
      var sliderFill = null;
      this.load.image("game_bg_01", "assets/game-bg/game_bg_01_001-hd.png");
      this.load.image("sliderBar", "assets/sprites/sliderBar.png");
      this.load.atlas("GJ_WebSheet", "assets/sheets/GJ_WebSheet.png", "assets/sheets/GJ_WebSheet.json");
      this.load.atlas("GJ_LaunchSheet", "assets/sheets/GJ_LaunchSheet.png", "assets/sheets/GJ_LaunchSheet.json");
      this.load.image("goldFont", "assets/fonts/goldFont.png");
      this.load.text("goldFontFnt", "assets/fonts/goldFont.fnt");
      this.load.once("complete", function () {
        var tex = _this.textures.get("game_bg_01");
        var s = Math.max(W / tex.source[0].width, H / tex.source[0].height);
        var bg = _this.add.image(cx, cy, "game_bg_01").setScale(s).setTint(0x0066ff);
        _this.children.sendToBack(bg);
        // Rectangle, not TileSprite: GT can't createPattern (TileSprites render black)
        sliderFill = _this.add.rectangle(sliderOriginX - 100, sliderOriginY - 2, 380, 14, 0x00aaff);
        sliderFill.setOrigin(0, 0.5);
        sliderFill.scaleX = 0;
        _this.add.image(sliderOriginX + 105, sliderOriginY, "GJ_WebSheet", "slidergroove.png").setOrigin(0.5, 0.5);
        var goldFontData = _this.cache.text.get("goldFontFnt");
        if (goldFontData && !_this.cache.bitmapFont.has("goldFont")) {
          loadFont(_this, "goldFont", goldFontData);
        }
        var msg = LOADING_MESSAGES[Math.floor(Math.random() * LOADING_MESSAGES.length)];
        _this.add.bitmapText(cx, cy + 187, "goldFont", msg, 30).setOrigin(0.5);
        var robtopLogo = _this.add.image(cx, cy - 120, "GJ_LaunchSheet", "RobTopLogoBig_001.png").setOrigin(0.5).setScale(0.8);
        var gjLogo = _this.add.image(cx, cy, "GJ_WebSheet", "GJ_logo_001.png").setOrigin(0.5);
        _this.children.bringToTop(robtopLogo);
        _this.children.bringToTop(gjLogo);
        // XHR cache override disabled — causes stalls with large local assets
        _this.load.atlas("GJ_GameSheet", "assets/sheets/GJ_GameSheet.png", "assets/sheets/GJ_GameSheet.json");
        _this.load.atlas("GJ_GameSheet02", "assets/sheets/GJ_GameSheet02.png", "assets/sheets/GJ_GameSheet02.json");
        _this.load.atlas("GJ_GameSheet03", "assets/sheets/GJ_GameSheet03.png", "assets/sheets/GJ_GameSheet03.json");
        _this.load.atlas("GJ_GameSheet04", "assets/sheets/GJ_GameSheet04.png", "assets/sheets/GJ_GameSheet04.json");
        _this.load.atlas("GJ_GameSheetEditor", "assets/sheets/GJ_GameSheetEditor.png", "assets/sheets/GJ_GameSheetEditor.json");
        _this.load.atlas("GJ_GameSheetGlow", "assets/sheets/GJ_GameSheetGlow.png", "assets/sheets/GJ_GameSheetGlow.json");
        _this.load.atlas("GJ_GameSheetIcons", "assets/sheets/GJ_GameSheetIcons.png", "assets/sheets/GJ_GameSheetIcons.json");
        _this.load.atlas("GJ_LaunchSheet", "assets/sheets/GJ_LaunchSheet.png", "assets/sheets/GJ_LaunchSheet.json");
        _this.load.atlas("player_ball_00", "assets/sheets/player_ball_00.png", "assets/sheets/player_ball_00.json");
        _this.load.atlas("player_dart_00", "assets/sheets/player_dart_00.png", "assets/sheets/player_dart_00.json");
        _this.load.image("bigFont", "assets/fonts/bigFont.png");
        _this.load.text("bigFontFnt", "assets/fonts/bigFont.fnt");
        _this.load.image("square04_001", "assets/sprites/square04_001.png");
        _this.load.image("GJ_square02", "assets/sprites/GJ_square02.png");
        _this.load.image("GJ_square01", "assets/sprites/GJ_square01.png");
        _this.load.image("square01_001", "assets/sprites/square01_001.png");
        _this.load.image("loadingCircle", "assets/sprites/loadingCircle.png");
        _this.load.image("GJ_button01", "assets/sprites/GJ_button_01.png");
        _this.load.image("GJ_button02", "assets/sprites/GJ_button_02.png");
        _this.load.image("import", "assets/sprites/import.png");
        _this.load.image("export", "assets/sprites/export.png");
        _this.load.image("tutorial_01", "assets/sprites/tutorial_01.png");
        _this.load.image("tutorial_02", "assets/sprites/tutorial_02.png");
        _this.load.image("tutorial_03", "assets/sprites/tutorial_03.png");
        _this.load.image("tutorial_04", "assets/sprites/tutorial_04.png");
        _this.load.image("tutorial_05", "assets/sprites/tutorial_05.png");
        for (var i = 1; i < 23; i++) {
          var index = i - 1;
          i = String(i);
          if (i.length < 2) i = "0" + i;
          var paddedIndex = String(index);
          if (paddedIndex.length < 2) paddedIndex = "0" + paddedIndex;
          _this.load.image("groundSquare_" + paddedIndex + "_001.png", "assets/game-ground/groundSquare_" + i + "_001.png");
        }
        for (var _i2 = 1; _i2 < 60; _i2++) {
          var _index = _i2 - 1;
          _i2 = String(_i2);
          if (_i2.length < 2) _i2 = "0" + _i2;
          _this.load.image("game_bg_" + _index, "assets/game-bg/game_bg_" + _i2 + "_001-hd.png");
        }
        for (var _lvl = 0; _lvl < window.allLevels.length; _lvl++) {
          var lvlarray = window.allLevels[_lvl];
          _this.load.text(lvlarray[2], "assets/levels/" + lvlarray[2].split("_")[1] + ".txt");
        }
        // Audio loading skipped — Coherent GT cannot decode audio via Phaser loader.
        // AudioManager sends play commands over the WebSocket to the mod backend,
        // which plays MP3/OGG natively via PowerShell MediaPlayer.
        _this.load.on("progress", function (value) {
          if (sliderFill) sliderFill.scaleX = value;
        });
        _this.load.on("loaderror", function () {});
        _this.load.once("complete", function () {
          if (sliderFill) sliderFill.scaleX = 1;
          _this.time.delayedCall(200, function () {
            var bigFontData = _this.cache.text.get("bigFontFnt");
            if (bigFontData) loadFont(_this, "bigFont", bigFontData);
            var gfd = _this.cache.text.get("goldFontFnt");
            if (gfd && !_this.cache.bitmapFont.has("goldFont")) loadFont(_this, "goldFont", gfd);
            if (window.gameCache) console.log('stats:', window.gameCache.getCacheStats());
            localStorage.setItem('webdash_assets_loaded', 'true');
            localStorage.setItem('webdash_last_load_time', Date.now().toString());
            // Fix rotated atlas frames for CANVAS renderer.
            // TexturePacker stores rotated sprites 90deg CW in the spritesheet.
            // frame.w/h in the JSON are ORIGINAL (pre-rotation) dimensions.
            // WebGL handles this via UV mapping; CANVAS cannot.
            // We monkey-patch the Canvas renderer's batchSprite to un-rotate
            // on-the-fly during drawing — the most reliable approach.
            if (_this.game.renderer.type === Phaser.CANVAS) {
              var renderer = _this.game.renderer;
              var _origBatchSprite = renderer.batchSprite.bind(renderer);
              // ── Canvas tinting (Phaser CANVAS ignores setTint entirely) ──
              // Detection: NEVER trust globalCompositeOperation readback (Coherent GT
              // echoes assigned strings without implementing the blend). Instead trust
              // pixel reads only if they demonstrably work (GT's getImageData is
              // polyfilled to blank), then pixel-verify 'multiply' for real.
              var pixelReadsWork = (function () {
                try {
                  var c = document.createElement('canvas');
                  c.width = c.height = 1;
                  var x = c.getContext('2d');
                  x.fillStyle = '#ff0000';
                  x.fillRect(0, 0, 1, 1);
                  var d = x.getImageData(0, 0, 1, 1).data;
                  return d[0] === 255 && d[3] === 255;
                } catch (e) { return false; }
              })();
              var multiplyWorks = pixelReadsWork && (function () {
                try {
                  var c = document.createElement('canvas');
                  c.width = c.height = 1;
                  var x = c.getContext('2d');
                  x.fillStyle = '#ffffff';
                  x.fillRect(0, 0, 1, 1);
                  x.globalCompositeOperation = 'multiply';
                  x.fillStyle = '#102030';
                  x.fillRect(0, 0, 1, 1);
                  var d = x.getImageData(0, 0, 1, 1).data;
                  return d[0] === 16 && d[1] === 32 && d[2] === 48;
                } catch (e) { return false; }
              })();
              // gd_tint_mode: off | auto | multiply | silhouette. DEFAULT IS OFF —
              // the user prefers the original untinted look; the bake machinery stays
              // available behind the localStorage switch for future experiments.
              var tintMode = (function () { try { return localStorage.getItem('gd_tint_mode') || 'off'; } catch (e) { return 'off'; } })();
              var useMultiply = tintMode === 'multiply' || (tintMode === 'auto' && multiplyWorks);
              var tintEnabled = tintMode !== 'off';
              // Expose for game code: with tinting off, per-frame setTint sweeps over
              // every level sprite (applyColorChannels) are pure waste — skip them.
              window._gdTintEnabled = tintEnabled;
              // Low Detail Mode: glow sprites are ADD-blend canvas draws (expensive in
              // Coherent GT; early levels + The Nightmare create 600-2250 of them).
              // Default ON in GT (no pixel reads = GT), OFF on desktop.
              // Override: localStorage gd_low_detail = '1' | '0'.
              var ldOverride = (function () { try { return localStorage.getItem('gd_low_detail'); } catch (e) { return null; } })();
              window._gdLowDetail = ldOverride !== null ? ldOverride === '1' : !pixelReadsWork;
              console.log('Canvas tint mode: ' + (tintEnabled ? (useMultiply ? 'multiply (pixel-verified)' : 'silhouette (Porter-Duff only)') : 'OFF') + ' | low detail: ' + (window._gdLowDetail ? 'ON' : 'off'));
              var tintCache = {};
              var tintCacheOrder = [];
              var TINT_CACHE_MAX = 512;
              var quantTint = function (tint) {
                var r = (tint >> 16) & 0xff, g = (tint >> 8) & 0xff, b = tint & 0xff;
                r = r >= 248 ? 255 : (r & 0xf8);
                g = g >= 248 ? 255 : (g & 0xf8);
                b = b >= 248 ? 255 : (b & 0xf8);
                return (r << 16) | (g << 8) | b;
              };
              // Bake a tinted (and un-rotated, if needed) copy of the frame.
              // multiply path (desktop): src × tint, exact shading preserved.
              // silhouette path (GT): fill tint, clip to frame alpha via
              // 'destination-in' (proven working in GT) — exact for the white-art
              // pixels GD textures are mostly made of.
              var bakeTintedFrame = function (frame, tint) {
                var unrotate = !!frame.rotated;
                var key = frame.source.texture.key + '|' + frame.name + '|' + tint + (unrotate ? 'r' : '');
                var hit = tintCache[key];
                if (hit) return hit;
                var cd = frame.canvasData;
                if (!cd || !frame.source.image) return null;
                var outW = Math.max(1, frame.cutWidth);
                var outH = Math.max(1, frame.cutHeight);
                var storedW = unrotate ? frame.cutHeight : frame.cutWidth;
                var storedH = unrotate ? frame.cutWidth : frame.cutHeight;
                var cv = document.createElement('canvas');
                cv.width = outW;
                cv.height = outH;
                var bctx = cv.getContext('2d');
                var drawSrc = function (op) {
                  bctx.globalCompositeOperation = op;
                  if (unrotate) {
                    bctx.save();
                    bctx.translate(0, outH);
                    bctx.rotate(-Math.PI / 2);
                    bctx.drawImage(frame.source.image, cd.x, cd.y, storedW, storedH, 0, 0, outH, outW);
                    bctx.restore();
                  } else {
                    bctx.drawImage(frame.source.image, cd.x, cd.y, storedW, storedH, 0, 0, outW, outH);
                  }
                };
                var hex = '#' + ('00000' + (tint >>> 0).toString(16)).slice(-6);
                if (useMultiply) {
                  drawSrc('source-over');
                  bctx.globalCompositeOperation = 'multiply';
                  bctx.fillStyle = hex;
                  bctx.fillRect(0, 0, outW, outH);
                  drawSrc('destination-in');
                } else {
                  bctx.globalCompositeOperation = 'source-over';
                  bctx.fillStyle = hex;
                  bctx.fillRect(0, 0, outW, outH);
                  drawSrc('destination-in');
                }
                bctx.globalCompositeOperation = 'source-over';
                tintCache[key] = cv;
                tintCacheOrder.push(key);
                if (tintCacheOrder.length > TINT_CACHE_MAX) delete tintCache[tintCacheOrder.shift()];
                return cv;
              };
              renderer.batchSprite = function (gameObject, frame, camera, parentMatrix) {
                var spriteTint = gameObject.tintTopLeft;
                var isTinted = tintEnabled && spriteTint !== undefined && spriteTint !== 0xffffff && !gameObject.tintFill && !gameObject.isCropped;
                if (!frame.rotated && !isTinted) {
                  return _origBatchSprite(gameObject, frame, camera, parentMatrix);
                }
                if (gameObject.tintFill && !frame.rotated) {
                  return _origBatchSprite(gameObject, frame, camera, parentMatrix);
                }
                // cutWidth/cutHeight = un-rotated dims from JSON (NOT stored dims).
                // Stored dims = cutHeight x cutWidth (swapped).
                var alpha = camera.alpha * gameObject.alpha;
                if (alpha === 0) return;
                var ctx = renderer.currentContext;
                var cd = frame.canvasData;
                if (!cd) return _origBatchSprite(gameObject, frame, camera, parentMatrix);
                var srcX = cd.x;
                var srcY = cd.y;
                // Stored region in atlas has swapped dimensions
                var storedW = frame.cutHeight;
                var storedH = frame.cutWidth;
                var res = frame.source.resolution;
                var srcImg = frame.source.image;
                var displayOriginX = gameObject.displayOriginX;
                var displayOriginY = gameObject.displayOriginY;
                var dx = -displayOriginX + frame.x;
                var dy = -displayOriginY + frame.y;
                if (gameObject.isCropped) {
                  // Fall back to original for cropped sprites
                  return _origBatchSprite(gameObject, frame, camera, parentMatrix);
                }
                var baked = null;
                if (isTinted) {
                  baked = bakeTintedFrame(frame, quantTint(spriteTint));
                  if (!baked && !frame.rotated) {
                    return _origBatchSprite(gameObject, frame, camera, parentMatrix);
                  }
                }
                var flipScaleX = 1;
                var flipScaleY = 1;
                if (gameObject.flipX) {
                  if (!frame.customPivot) dx += -(frame.realWidth - 2 * displayOriginX);
                  flipScaleX = -1;
                }
                if (gameObject.flipY) {
                  if (!frame.customPivot) dy += -(frame.realHeight - 2 * displayOriginY);
                  flipScaleY = -1;
                }
                var _tempMatrix1 = renderer._tempMatrix1;
                var _tempMatrix2 = renderer._tempMatrix2;
                var gx = gameObject.x;
                var gy = gameObject.y;
                if (camera.roundPixels) { gx = Math.floor(gx); gy = Math.floor(gy); }
                _tempMatrix2.applyITRS(gx, gy, gameObject.rotation, gameObject.scaleX * flipScaleX, gameObject.scaleY * flipScaleY);
                _tempMatrix1.copyFrom(camera.matrix);
                if (parentMatrix) {
                  _tempMatrix1.multiplyWithOffset(parentMatrix, -camera.scrollX * gameObject.scrollFactorX, -camera.scrollY * gameObject.scrollFactorY);
                  _tempMatrix2.e = gx;
                  _tempMatrix2.f = gy;
                } else {
                  _tempMatrix2.e -= camera.scrollX * gameObject.scrollFactorX;
                  _tempMatrix2.f -= camera.scrollY * gameObject.scrollFactorY;
                }
                _tempMatrix1.multiply(_tempMatrix2);
                if (camera.renderRoundPixels) {
                  _tempMatrix1.e = Math.floor(_tempMatrix1.e + 0.5);
                  _tempMatrix1.f = Math.floor(_tempMatrix1.f + 0.5);
                }
                ctx.save();
                _tempMatrix1.setToContext(ctx);
                ctx.globalCompositeOperation = renderer.blendModes[gameObject.blendMode];
                ctx.globalAlpha = alpha;
                ctx.imageSmoothingEnabled = !frame.source.scaleMode;
                if (gameObject.mask) gameObject.mask.preRenderCanvas(renderer, gameObject, camera);
                if (baked) {
                  // Baked canvas is already un-rotated and tinted — plain draw
                  var bDrawW = frame.cutWidth / res;
                  var bDrawH = frame.cutHeight / res;
                  if (camera.roundPixels) {
                    dx = Math.floor(dx + 0.5);
                    dy = Math.floor(dy + 0.5);
                    bDrawW += 0.5;
                    bDrawH += 0.5;
                  }
                  ctx.drawImage(baked, 0, 0, baked.width, baked.height, dx, dy, bDrawW, bDrawH);
                } else if (storedW > 0 && storedH > 0) {
                  // Un-rotate: translate+rotate to counteract the 90deg CW storage
                  var drawW = frame.cutWidth / res;
                  var drawH = frame.cutHeight / res;
                  if (camera.roundPixels) {
                    dx = Math.floor(dx + 0.5);
                    dy = Math.floor(dy + 0.5);
                    drawW += 0.5;
                    drawH += 0.5;
                  }
                  ctx.translate(dx, dy + drawH);
                  ctx.rotate(-Math.PI / 2);
                  ctx.drawImage(srcImg, srcX, srcY, storedW, storedH, 0, 0, drawH, drawW);
                }
                if (gameObject.mask) gameObject.mask.postRenderCanvas(renderer, gameObject, camera);
                ctx.restore();
              };
              console.log('Patched Canvas renderer: rotated frames + tint baking');
            }
            _this.scene.start("GameScene");
          });
        });
        _this.load.start();
      });
    }
  }, {
    key: "create",
    value: function create() {}
  }]);
}(Phaser.Scene);