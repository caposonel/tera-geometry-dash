function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var PlayerState = /*#__PURE__*/function () {
  "use strict";

  function PlayerState() {
    _classCallCheck(this, PlayerState);
    this.reset();
  }
  return _createClass(PlayerState, [{
    key: "reset",
    value: function reset() {
      this.y = 30;
      this.lastY = 30;
      this.lastGroundPosY = 30;
      this.yVelocity = 0;
      this.onGround = true;
      this.canJump = true;
      this.isJumping = false;
      this.gravityFlipped = false;
      this.isFlying = false;
      this.isBall = false;
      this.isWave = false;
      this.isUfo = false;
      this.isSpider = false;
      this.isBird = false;
      this.isDart = false;
      this.isRobot = false;
      this.isSwing = false;
      this.isJetpack = false;
      this.isMini = false;
      this.wasBoosted = false;
      this.pendingVelocity = null;
      this.collideTop = 0;
      this.collideBottom = 0;
      this.onCeiling = false;
      this.upKeyDown = false;
      this.upKeyPressed = false;
      this.queuedHold = false;
      this.isDead = false;
      this.mirrored = false;
      this.isDashing = false;
      this.dashYVelocity = 0;
      this.isDual = false;
      this.ignorePortals = false;
    }
  }]);
}();
var StreakManager = /*#__PURE__*/function () {
  "use strict";

  function StreakManager(_0x9c2356, _0x171c7f, _0x49d49a, _0xb01616, _0x5aac4b, _0x293ce3) {
    var _0x5c7bc5 = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 16777215;
    var _0x5a3e29 = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 1;
    _classCallCheck(this, StreakManager);
    this._color = _0x5c7bc5;
    this._opacity = _0x5a3e29;
    this._fadeDelta = 1 / _0x49d49a;
    this._minSegSq = _0xb01616 * _0xb01616;
    this._maxSeg = _0x293ce3;
    this._maxPoints = Math.floor(_0x49d49a * 60 + 2) * 5;
    this._stroke = _0x5aac4b;
    this._pts = [];
    this._posR = {
      x: 0,
      y: 0
    };
    this._posInit = false;
    this._active = false;
    var graphicsSettings = window.performanceOptimizer ? window.performanceOptimizer.getGraphicsSettings() : {
      enableGlow: true,
      blendMode: Phaser.BlendModes.ADD
    };
    this._gfx = _0x9c2356.add.graphics();
    this._gfx.setBlendMode(graphicsSettings.blendMode);
  }
  return _createClass(StreakManager, [{
    key: "addToContainer",
    value: function addToContainer(_0xa23240, _0x4b05db) {
      _0xa23240.add(this._gfx);
      this._gfx.setDepth(_0x4b05db);
    }
  }, {
    key: "setColor",
    value: function setColor(newColor) {
      this._color = newColor;
    }
  }, {
    key: "setPosition",
    value: function setPosition(_0x388397, _0x292e79) {
      this._posR.x = _0x388397;
      this._posR.y = _0x292e79;
      this._posInit = true;
    }
  }, {
    key: "start",
    value: function start() {
      this._active = true;
    }
  }, {
    key: "stop",
    value: function stop() {
      this._active = false;
    }
  }, {
    key: "reset",
    value: function reset() {
      this._pts = [];
      this._posInit = false;
      this._gfx.clear();
    }
  }, {
    key: "update",
    value: function update(_0x2acf4c) {
      if (!this._posInit) {
        this._gfx.clear();
        return;
      }
      var _0x1817b7 = _0x2acf4c * this._fadeDelta;
      var _0x56ab0b = 0;
      for (var _0x3ca060 = 0; _0x3ca060 < this._pts.length; _0x3ca060++) {
        this._pts[_0x3ca060].state -= _0x1817b7;
        if (this._pts[_0x3ca060].state > 0) {
          if (_0x56ab0b !== _0x3ca060) {
            this._pts[_0x56ab0b] = this._pts[_0x3ca060];
          }
          _0x56ab0b++;
        }
      }
      this._pts.length = _0x56ab0b;
      if (this._active && this._pts.length < this._maxPoints) {
        var _0x89a79d = this._pts.length;
        var _0x3d12ca = true;
        if (_0x89a79d > 0) {
          var _0x2748e4 = this._pts[_0x89a79d - 1];
          var _0x3a1a00 = this._posR.x - _0x2748e4.x;
          var _0x4c247a = this._posR.y - _0x2748e4.y;
          var _0x1f9fea = _0x3a1a00 * _0x3a1a00 + _0x4c247a * _0x4c247a;
          if (this._maxSeg > 0 && Math.sqrt(_0x1f9fea) > this._maxSeg) {
            this._pts.length = 0;
          } else if (_0x1f9fea < this._minSegSq) {
            _0x3d12ca = false;
          } else if (_0x89a79d > 1) {
            var _0x375c40 = this._pts[_0x89a79d - 2];
            var _0x14c0c1 = this._posR.x - _0x375c40.x;
            var _0x2d01f0 = this._posR.y - _0x375c40.y;
            if (_0x14c0c1 * _0x14c0c1 + _0x2d01f0 * _0x2d01f0 < this._minSegSq * 2) {
              _0x3d12ca = false;
            }
          }
        }
        if (_0x3d12ca) {
          this._pts.push({
            x: this._posR.x,
            y: this._posR.y,
            state: 1
          });
        }
      }
      this._gfx.clear();
      var _0x49dac5 = this._pts.length;
      if (!(_0x49dac5 < 2)) {
        for (var _0x27c164 = 0; _0x27c164 < _0x49dac5 - 1; _0x27c164++) {
          var _0x398b7b = this._pts[_0x27c164];
          var _0x3b4326 = this._pts[_0x27c164 + 1];
          var _0x1c4c9d = (_0x398b7b.state + _0x3b4326.state) * 0.5 * this._opacity;
          this._gfx.lineStyle(this._stroke, this._color, _0x1c4c9d);
          this._gfx.lineBetween(_0x398b7b.x, _0x398b7b.y, _0x3b4326.x, _0x3b4326.y);
        }
      }
    }
  }]);
}();
var WaveTrail = /*#__PURE__*/function () {
  "use strict";

  function WaveTrail(scene, color, glowColor) {
    _classCallCheck(this, WaveTrail);
    this._color = color;
    this._glowColor = glowColor;
    this._pts = [];
    this._active = false;
    this._posInit = false;
    this._pos = {
      x: 0,
      y: 0
    };
    this._maxAge = 0.6;
    this._minSegSq = 1.5 * 1.5;
    this._halfW = 7;
    this._glowHalfW = 14;
    this._gfx = scene.add.graphics();
    this._gfx.setBlendMode(Phaser.BlendModes.NORMAL);
    this._glowGfx = scene.add.graphics();
    this._glowGfx.setBlendMode(Phaser.BlendModes.ADD);
  }
  return _createClass(WaveTrail, [{
    key: "addToContainer",
    value: function addToContainer(container, depth) {
      container.add(this._glowGfx);
      this._glowGfx.setDepth(depth - 1);
      container.add(this._gfx);
      this._gfx.setDepth(depth);
    }
  }, {
    key: "setPosition",
    value: function setPosition(x, y) {
      this._pos.x = x;
      this._pos.y = y;
      this._posInit = true;
    }
  }, {
    key: "start",
    value: function start() {
      this._active = true;
    }
  }, {
    key: "stop",
    value: function stop() {
      this._active = false;
    }
  }, {
    key: "reset",
    value: function reset() {
      this._pts = [];
      this._posInit = false;
      this._gfx.clear();
      this._glowGfx.clear();
    }
  }, {
    key: "_intersect",
    value: function _intersect(p1, p2, p3, p4) {
      var d1x = p2.x - p1.x,
        d1y = p2.y - p1.y;
      var d2x = p4.x - p3.x,
        d2y = p4.y - p3.y;
      var denom = d1x * d2y - d1y * d2x;
      if (Math.abs(denom) < 1e-6) return {
        x: p2.x,
        y: p2.y
      };
      var t = ((p3.x - p1.x) * d2y - (p3.y - p1.y) * d2x) / denom;
      var tc = Math.max(-3, Math.min(3, t));
      return {
        x: p1.x + d1x * tc,
        y: p1.y + d1y * tc
      };
    }
  }, {
    key: "_buildEdges",
    value: function _buildEdges(pts, halfW) {
      var n = pts.length;
      var upper = new Array(n);
      var lower = new Array(n);

      // precompute per-segment normals
      var segNx = new Array(n - 1);
      var segNy = new Array(n - 1);
      for (var i = 0; i < n - 1; i++) {
        var dx = pts[i + 1].x - pts[i].x;
        var dy = pts[i + 1].y - pts[i].y;
        var len = Math.sqrt(dx * dx + dy * dy) || 1;
        segNx[i] = -dy / len;
        segNy[i] = dx / len;
      }
      for (var _i = 0; _i < n; _i++) {
        var _p = pts[_i];
        var nx = void 0,
          ny = void 0;
        if (_i === 0) {
          nx = segNx[0];
          ny = segNy[0];
        } else if (_i === n - 1) {
          nx = segNx[n - 2];
          ny = segNy[n - 2];
        } else {
          // miter: intersect the two offset edge lines for a sharp corner
          var n1x = segNx[_i - 1],
            n1y = segNy[_i - 1];
          var n2x = segNx[_i],
            n2y = segNy[_i];

          // upper edge intersection
          var u1 = {
            x: pts[_i - 1].x + n1x * halfW,
            y: pts[_i - 1].y + n1y * halfW
          };
          var u2 = {
            x: _p.x + n1x * halfW,
            y: _p.y + n1y * halfW
          };
          var u3 = {
            x: _p.x + n2x * halfW,
            y: _p.y + n2y * halfW
          };
          var u4 = {
            x: pts[_i + 1].x + n2x * halfW,
            y: pts[_i + 1].y + n2y * halfW
          };
          var mu = this._intersect(u1, u2, u3, u4);

          // lower edge intersection
          var l1 = {
            x: pts[_i - 1].x - n1x * halfW,
            y: pts[_i - 1].y - n1y * halfW
          };
          var l2 = {
            x: _p.x - n1x * halfW,
            y: _p.y - n1y * halfW
          };
          var l3 = {
            x: _p.x - n2x * halfW,
            y: _p.y - n2y * halfW
          };
          var l4 = {
            x: pts[_i + 1].x - n2x * halfW,
            y: pts[_i + 1].y - n2y * halfW
          };
          var ml = this._intersect(l1, l2, l3, l4);
          upper[_i] = mu;
          lower[_i] = ml;
          continue;
        }
        upper[_i] = {
          x: _p.x + nx * halfW,
          y: _p.y + ny * halfW
        };
        lower[_i] = {
          x: _p.x - nx * halfW,
          y: _p.y - ny * halfW
        };
      }
      return {
        upper: upper,
        lower: lower
      };
    }
  }, {
    key: "_drawRibbon",
    value: function _drawRibbon(gfx, pts, halfW, color, baseAlpha) {
      var antialias = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
      var n = pts.length;
      if (n < 2) return;
      var _this$_buildEdges = this._buildEdges(pts, halfW),
        upper = _this$_buildEdges.upper,
        lower = _this$_buildEdges.lower;
      if (antialias) {
        this._drawRibbon(gfx, pts, halfW + 0.5, color, baseAlpha * 0.5, false);
      }
      for (var i = 0; i < n - 1; i++) {
        var alpha = Math.max(0, 1 - (pts[i].age + pts[i + 1].age) * 0.5) * baseAlpha;
        if (alpha <= 0.01) continue;
        gfx.fillStyle(color, alpha);
        gfx.fillTriangle(upper[i].x, upper[i].y, upper[i + 1].x, upper[i + 1].y, lower[i].x, lower[i].y);
        gfx.fillTriangle(upper[i + 1].x, upper[i + 1].y, lower[i + 1].x, lower[i + 1].y, lower[i].x, lower[i].y);
      }
    }
  }, {
    key: "update",
    value: function update(delta) {
      if (!this._posInit) {
        this._gfx.clear();
        this._glowGfx.clear();
        return;
      }
      var decay = delta / 1000 / this._maxAge;
      var alive = 0;
      for (var i = 0; i < this._pts.length; i++) {
        this._pts[i].age += decay;
        if (this._pts[i].age < 1) this._pts[alive++] = this._pts[i];
      }
      this._pts.length = alive;
      if (this._active) {
        var n = this._pts.length;
        var add = true;
        if (n > 0) {
          var last = this._pts[n - 1];
          var dx = this._pos.x - last.x,
            dy = this._pos.y - last.y;
          if (dx * dx + dy * dy < this._minSegSq) add = false;
        }
        if (add) this._pts.push({
          x: this._pos.x,
          y: this._pos.y,
          age: 0
        });
      }
      this._gfx.clear();
      this._glowGfx.clear();
      if (this._pts.length < 2) return;
      var solid = window.solidWave === true;
      if (solid) {
        this._drawRibbon(this._gfx, this._pts, this._halfW, window.mainColor, 1.0);
      } else {
        this._drawRibbon(this._glowGfx, this._pts, this._glowHalfW, this._glowColor, 0.22);
        this._drawRibbon(this._gfx, this._pts, this._halfW, this._color, 0.95);
        this._drawRibbon(this._gfx, this._pts, Math.round(this._halfW * 0.32), 0xffffff, 0.5);
      }
    }
  }]);
}();
function ds(scene, x, y, frameName, depth, isVisible) {
  var atlasData = getAtlasFrame(scene, frameName);
  if (!atlasData) {
    return null;
  }
  var image = scene.add.image(x, y, atlasData.atlas, atlasData.frame);
  image.setDepth(depth);
  image.setVisible(isVisible);
  return {
    sprite: image
  };
}
var PlayerObject = /*#__PURE__*/function () {
  "use strict";

  function PlayerObject(scene, _0x3f50cc, _0x2811e1) {
    var _this = this;
    _classCallCheck(this, PlayerObject);
    this._scene = scene;
    this.p = _0x3f50cc;
    this._gameLayer = _0x2811e1;
    this._rotation = 0;
    this.rotateActionActive = false;
    this.rotateActionTime = 0;
    this.rotateActionDuration = 0;
    this.rotateActionStart = 0;
    this.rotateActionTotal = 0;
    this._lastLandObject = null;
    this._lastXOffset = 0;
    this._lastCameraX = 0;
    this._lastCameraY = 0;
    this._dashAnimationFrame = 0;
    this._dashAnimationTimer = 0;
    this._dashAnimationSprite = null;
    this._createSprites();
    this._hitboxGraphics = scene.add.graphics().setScrollFactor(0).setDepth(20);
    this._initParticles(scene);
    scene.events.on("shutdown", function () {
      return _this._cleanupExplosion();
    });
    this.noclipStats = {
      totalFrames: 0,
      deathFrames: 0,
      accuracy: 100,
      deaths: 0
    };
  }
  return _createClass(PlayerObject, [{
    key: "_createSprites",
    value: function _createSprites() {
      var spriteY = this._scene;
      var spriteX = b(this.p.y);
      var particleY = centerX;
      this._playerGlowLayer = ds(spriteY, particleY, spriteX, "".concat(window.currentPlayer, "_glow_001.png"), 9, false);
      this._playerSpriteLayer = ds(spriteY, particleY, spriteX, "".concat(window.currentPlayer, "_001.png"), 10, true);
      this._playerOverlayLayer = ds(spriteY, particleY, spriteX, "".concat(window.currentPlayer, "_2_001.png"), 8, true);
      this._playerExtraLayer = ds(spriteY, particleY, spriteX, "".concat(window.currentPlayer, "_extra_001.png"), 12, true);
      if (this._playerGlowLayer) {
        this._playerGlowLayer.sprite.setTint(window.secondaryColor);
        this._playerGlowLayer.sprite._glowEnabled = false;
      }
      if (this._playerSpriteLayer) {
        this._playerSpriteLayer.sprite.setTint(window.mainColor);
      } else {
        var _0x3aecd9 = spriteY.add.rectangle(particleY, spriteX, g, g, window.mainColor);
        _0x3aecd9.setDepth(10);
        this._playerSpriteLayer = {
          sprite: _0x3aecd9
        };
      }
      if (this._playerOverlayLayer) {
        this._playerOverlayLayer.sprite.setTint(window.secondaryColor);
      }
      this._shipGlowLayer = ds(spriteY, particleY, spriteX, "".concat(window.currentShip, "_glow_001.png"), 9, false);
      this._shipSpriteLayer = ds(spriteY, particleY, spriteX, "".concat(window.currentShip, "_001.png"), 10, false);
      this._shipOverlayLayer = ds(spriteY, particleY, spriteX, "".concat(window.currentShip, "_2_001.png"), 8, false);
      this._shipExtraLayer = ds(spriteY, particleY, spriteX, "".concat(window.currentShip, "_extra_001.png"), 12, false);
      if (this._shipGlowLayer) {
        this._shipGlowLayer.sprite.setTint(window.secondaryColor);
        this._shipGlowLayer.sprite._glowEnabled = false;
      }
      if (this._shipSpriteLayer) {
        this._shipSpriteLayer.sprite.setTint(window.mainColor);
      } else {
        var _0x100643 = spriteY.add.polygon(particleY, spriteX, [{
          x: -72,
          y: 40
        }, {
          x: 72,
          y: 0
        }, {
          x: -72,
          y: -40
        }, {
          x: -40,
          y: 0
        }], window.mainColor);
        _0x100643.setDepth(10).setVisible(false);
        this._shipSpriteLayer = {
          sprite: _0x100643
        };
      }
      if (this._shipOverlayLayer) {
        this._shipOverlayLayer.sprite.setTint(window.secondaryColor);
      }
      this._ballGlowLayer = ds(spriteY, particleY, spriteX, "".concat(window.currentBall, "_glow_001.png"), 9, false);
      this._ballSpriteLayer = ds(spriteY, particleY, spriteX, "".concat(window.currentBall, "_001.png"), 10, false);
      this._ballOverlayLayer = ds(spriteY, particleY, spriteX, "".concat(window.currentBall, "_2_001.png"), 8, false);
      if (this._ballGlowLayer) {
        this._ballGlowLayer.sprite.setTint(window.secondaryColor);
        this._ballGlowLayer.sprite._glowEnabled = false;
      }
      if (this._ballSpriteLayer) {
        this._ballSpriteLayer.sprite.setTint(window.mainColor);
      }
      if (this._ballOverlayLayer) {
        this._ballOverlayLayer.sprite.setTint(window.secondaryColor);
      }
      this._waveGlowLayer = ds(spriteY, particleY, spriteX, "".concat(window.currentWave, "_glow_001.png"), 9, false);
      this._waveOverlayLayer = ds(spriteY, particleY, spriteX, "".concat(window.currentWave, "_2_001.png"), 8, false);
      this._waveExtraLayer = null;
      this._waveSpriteLayer = ds(spriteY, particleY, spriteX, "".concat(window.currentWave, "_001.png"), 10, false);
      if (this._waveGlowLayer) {
        this._waveGlowLayer.sprite.setTint(window.secondaryColor);
        this._waveGlowLayer.sprite._glowEnabled = false;
      }
      if (this._waveSpriteLayer) {
        this._waveSpriteLayer.sprite.setTint(window.mainColor);
      }
      if (this._waveOverlayLayer) {
        this._waveOverlayLayer.sprite.setTint(window.secondaryColor);
      }
      this.playerSprite = this._playerSpriteLayer.sprite;
      this.shipSprite = this._shipSpriteLayer.sprite;
      this._playerLayers = [this._playerSpriteLayer, this._playerGlowLayer, this._playerOverlayLayer, this._playerExtraLayer];
      this._shipLayers = [this._shipSpriteLayer, this._shipGlowLayer, this._shipOverlayLayer, this._shipExtraLayer];
      this._ballLayers = [this._ballSpriteLayer, this._ballGlowLayer, this._ballOverlayLayer].filter(function (_0x37ad93) {
        return !!_0x37ad93;
      });
      this._waveLayers = [this._waveSpriteLayer, this._waveOverlayLayer, this._waveExtraLayer, this._waveGlowLayer].filter(function (_0x37ad93) {
        return !!_0x37ad93;
      });
      var _spiderBase = "".concat(window.currentSpider, "_01");
      this._spiderSpriteLayer = ds(spriteY, particleY, spriteX, "".concat(_spiderBase, "_001.png"), 10, false);
      this._spiderGlowLayer = ds(spriteY, particleY, spriteX, "".concat(_spiderBase, "_glow_001.png"), 9, false);
      this._spiderOverlayLayer = ds(spriteY, particleY, spriteX, "".concat(_spiderBase, "_2_001.png"), 8, false);
      this._spiderExtraLayer = ds(spriteY, particleY, spriteX, "".concat(_spiderBase, "_extra_001.png"), 12, false);
      if (this._spiderSpriteLayer) this._spiderSpriteLayer.sprite.setTint(window.mainColor);
      if (this._spiderOverlayLayer) this._spiderOverlayLayer.sprite.setTint(window.secondaryColor);
      if (this._spiderGlowLayer) {
        this._spiderGlowLayer.sprite.setTint(window.secondaryColor);
        this._spiderGlowLayer.sprite._glowEnabled = false;
      }
      this._spiderLayers = [this._spiderSpriteLayer, this._spiderGlowLayer, this._spiderOverlayLayer, this._spiderExtraLayer].filter(function (x) {
        return !!x;
      });
      this._birdSpriteLayer = ds(spriteY, particleY, spriteX, "".concat(window.currentBird, "_001.png"), 10, false);
      this._birdGlowLayer = ds(spriteY, particleY, spriteX, "".concat(window.currentBird, "_2_001.png"), 9, false);
      this._birdOverlayLayer = ds(spriteY, particleY, spriteX, "".concat(window.currentBird, "_3_001.png"), 8, false);
      this._birdExtraLayer = ds(spriteY, particleY, spriteX, "".concat(window.currentBird, "_extra_001.png"), 12, false);
      if (this._birdSpriteLayer) {
        this._birdSpriteLayer.sprite.setTint(window.mainColor);
      }
      if (this._birdGlowLayer) {
        this._birdGlowLayer.sprite.setTint(window.secondaryColor);
        this._birdGlowLayer.sprite._glowEnabled = false;
      }
      if (this._birdOverlayLayer) {
        this._birdOverlayLayer.sprite.setTint(window.secondaryColor);
      }
      this._birdLayers = [this._birdSpriteLayer, this._birdGlowLayer, this._birdOverlayLayer, this._birdExtraLayer].filter(function (x) {
        return !!x;
      });
      this._allLayers = [].concat(_toConsumableArray(this._playerLayers), _toConsumableArray(this._ballLayers), _toConsumableArray(this._waveLayers), _toConsumableArray(this._shipLayers), _toConsumableArray(this._spiderLayers), _toConsumableArray(this._birdLayers));
      this._dashAnimationSprite = spriteY.add.image(particleY, spriteX, "GJ_GameSheetGlow", "playerDash2_001.png");
      this._dashAnimationSprite.setDepth(7);
      this._dashAnimationSprite.setVisible(false);
      this._dashAnimationSprite.setTint(0xffffff);
      this._dashAnimationSprite.setBlendMode('ADD');
    }
  }, {
    key: "_updateDashAnimation",
    value: function _updateDashAnimation(deltaTime) {
      if (!this._dashAnimationSprite) return;
      if (this.p.isDashing) {
        this._dashAnimationSprite.setVisible(true);
        this._dashAnimationTimer += deltaTime;
        if (this._dashAnimationTimer >= 16.67) {
          this._dashAnimationTimer = 0;
          this._dashAnimationFrame = this._dashAnimationFrame % 12 + 1;
          var frameName = "playerDash2_".concat(String(this._dashAnimationFrame).padStart(3, '0'), ".png");
          this._dashAnimationSprite.setFrame(frameName);
        }
      } else {
        this._dashAnimationSprite.setVisible(false);
        this._dashAnimationFrame = 0;
        this._dashAnimationTimer = 0;
      }
    }
  }, {
    key: "_initParticles",
    value: function _initParticles(scene) {
      this._particleEmitter = scene.add.particles(0, 0, "GJ_WebSheet", {
        frame: "square.png",
        speed: {
          min: 110,
          max: 190
        },
        angle: {
          min: 225,
          max: 315
        },
        lifespan: {
          min: 150,
          max: 450
        },
        scale: {
          start: 0.5,
          end: 0
        },
        gravityY: 600,
        frequency: 1000 / 30,
        blendMode: "ADD",
        alpha: {
          start: 1,
          end: 0
        },
        tint: window.mainColor
      });
      this._particleEmitter.stop();
      this._particleEmitter.setDepth(9);
      this._gameLayer.container.add(this._particleEmitter);
      this._flyParticleEmitter = scene.add.particles(0, 0, "GJ_WebSheet", {
        frame: "square.png",
        speed: {
          min: 22,
          max: 38
        },
        angle: {
          min: 225,
          max: 315
        },
        lifespan: {
          min: 150,
          max: 450
        },
        scale: {
          start: 0.5,
          end: 0
        },
        gravityY: 600,
        frequency: 1000 / 30,
        blendMode: "ADD",
        tint: {
          start: 16737280,
          end: 16711680
        },
        alpha: {
          start: 1,
          end: 0
        }
      });
      this._flyParticleEmitter.stop();
      this._flyParticleEmitter.setDepth(9);
      this._gameLayer.container.add(this._flyParticleEmitter);
      this._flyParticle2Emitter = scene.add.particles(0, 0, "GJ_WebSheet", {
        frame: "square.png",
        speed: {
          min: 220,
          max: 380
        },
        angle: {
          min: 180,
          max: 360
        },
        lifespan: {
          min: 150,
          max: 450
        },
        scale: {
          start: 0.75,
          end: 0
        },
        gravityY: 600,
        frequency: 1000 / 30,
        blendMode: "ADD",
        tint: {
          start: 16760320,
          end: 16711680
        },
        alpha: {
          start: 1,
          end: 0
        }
      });
      this._flyParticle2Emitter.stop();
      this._flyParticle2Emitter.setDepth(9);
      this._gameLayer.container.add(this._flyParticle2Emitter);
      this._shipDragEmitter = scene.add.particles(0, 0, "GJ_WebSheet", {
        frame: "square.png",
        x: {
          min: -18,
          max: 18
        },
        speed: {
          min: 223.79999999999998,
          max: 343.79999999999995
        },
        angle: {
          min: 205,
          max: 295
        },
        lifespan: {
          min: 80,
          max: 220
        },
        scale: {
          start: 0.375,
          end: 0
        },
        gravityX: -700,
        gravityY: 600,
        frequency: 25,
        blendMode: "ADD",
        alpha: {
          start: 1,
          end: 0
        }
      });
      this._shipDragEmitter.stop();
      this._shipDragEmitter.setDepth(22);
      this._shipDragActive = false;
      this._particleActive = false;
      this._flyParticle2Active = false;
      this._flyParticleActive = false;
      var _0x57911a = {
        frame: "square.png",
        speed: {
          min: 250,
          max: 350
        },
        angle: {
          min: 210,
          max: 330
        },
        lifespan: {
          min: 50,
          max: 600
        },
        scale: {
          start: 0.625,
          end: 0
        },
        gravityY: 1000,
        blendMode: "ADD",
        alpha: {
          start: 1,
          end: 0
        },
        tint: window.mainColor,
        emitting: false
      };
      this._landEmitter1 = scene.add.particles(0, 0, "GJ_WebSheet", _objectSpread({}, _0x57911a));
      this._landEmitter2 = scene.add.particles(0, 0, "GJ_WebSheet", _objectSpread({}, _0x57911a));
      this._aboveContainer = scene.add.container(0, 0);
      this._aboveContainer.setDepth(13);
      this._gameLayer.topContainer.add(this._landEmitter1);
      this._gameLayer.topContainer.add(this._landEmitter2);
      this._landIdx = false;
      this._streak = new StreakManager(this._scene, "streak_01", 0.231, 10, 8, 100, window.secondaryColor, 0.7);
      this._streak.addToContainer(this._gameLayer.container, 8);
      this._waveTrail = new WaveTrail(this._scene, window.secondaryColor, window.secondaryColor);
      this._waveTrail.addToContainer(this._gameLayer.container, 9);
    }
  }, {
    key: "_updateParticles",
    value: function _updateParticles(_0xc43238, _0x52b718, _0x5af874) {
      if (this.p.isDead) {
        return;
      }
      var _0x119eb7 = this._scene._playerWorldX;
      var _0x519d38 = b(this.p.y);
      this._particleEmitter.particleX = _0x119eb7 - 20;
      this._particleEmitter.particleY = _0x519d38 + (this.p.gravityFlipped ? -26 + (this.p.isUfo ? -5 : 0) : 26 + (this.p.isUfo ? 5 : 0));
      var _0x4436ac = this.p.onGround && !this.p.isFlying && !this.p.isWave && !this.p.isSpider;
      if (_0x4436ac && !this._particleActive) {
        this._particleEmitter.start();
        this._particleActive = true;
      } else if (!_0x4436ac && this._particleActive) {
        this._particleEmitter.stop();
        this._particleActive = false;
      }
      {
        var _0xe76a85 = Math.cos(this._rotation);
        var _0x26ec65 = Math.sin(this._rotation);
        var _0x216018 = this.p.isWave ? 0 : this.p.isUfo ? 0 : -24;
        var _0x2baeac = (this.p.isWave ? 4 : this.p.isUfo ? 5 : 18) * (this.p.gravityFlipped ? -1 : 1);
        var _0x75c380 = _0x119eb7 + _0x216018 * _0xe76a85 - _0x2baeac * _0x26ec65;
        var _0x2b31d7 = _0x519d38 + _0x216018 * _0x26ec65 + _0x2baeac * _0xe76a85;
        var _0x5d66f4 = (Math.random() * 2 - 1) * 2 * 2;
        this._flyParticleEmitter.particleX = _0x75c380;
        this._flyParticleEmitter.particleY = _0x2b31d7 + _0x5d66f4;
        this._flyParticle2Emitter.particleX = _0x75c380;
        this._flyParticle2Emitter.particleY = _0x2b31d7 + _0x5d66f4;
        this._streak.setPosition(this.p.isWave ? _0x75c380 : this.p.isUfo ? _0x75c380 : _0x75c380 + 8, _0x2b31d7);
        this._waveTrail.setPosition(_0x119eb7, _0x519d38);
      }
      this._streak.update(_0x5af874);
      this._waveTrail.update(_0x5af874);
      var _0x3d69d2 = this.p.isFlying || this.p.isUfo;
      if (_0x3d69d2 && !this._flyParticleActive) {
        this._flyParticleEmitter.start();
        this._flyParticleActive = true;
      } else if (!_0x3d69d2 && this._flyParticleActive) {
        this._flyParticleEmitter.stop();
        this._flyParticleActive = false;
      }
      var _0x169e30 = this.p.isFlying && this.p.upKeyDown || this.p.isUfo && this.p.isJumping;
      if (_0x169e30 && !this._flyParticle2Active) {
        this._flyParticle2Emitter.start();
        this._flyParticle2Active = true;
      } else if (!_0x169e30 && this._flyParticle2Active) {
        this._flyParticle2Emitter.stop();
        this._flyParticle2Active = false;
      }
      var _0x2e5643 = _0xc43238 + this._scene._getMirrorXOffset(_0x119eb7 - _0xc43238);
      this._shipDragEmitter.x = _0x2e5643;
      this._shipDragEmitter.particleY = this.p.gravityFlipped ? b(this.p.y) + _0x52b718 + 10 : b(this.p.y) + _0x52b718 + 30;
      this._shipDragEmitter.setAngle(this.p.mirrored ? {
        min: 245,
        max: 335
      } : {
        min: 205,
        max: 295
      });
      this._shipDragEmitter.gravityX = this.p.mirrored ? 700 : -700;
      this._shipDragEmitter.setScale(this.p.gravityFlipped ? {
        x: -1,
        y: 1
      } : {
        x: 1,
        y: 1
      });
      var _0x2ac9d0 = this.p.isFlying && this.p.onGround && (this.p.gravityFlipped ? this.p.onCeiling : !this.p.onCeiling);
      if (_0x2ac9d0 && !this._shipDragActive) {
        this._shipDragEmitter.start();
        this._shipDragActive = true;
      } else if (!_0x2ac9d0 && this._shipDragActive) {
        this._shipDragEmitter.stop();
        this._shipDragActive = false;
      }
    }
  }, {
    key: "setCubeVisible",
    value: function setCubeVisible(_0x411813) {
      this._playerSpriteLayer.sprite.setVisible(_0x411813);
      if (this._playerGlowLayer) {
        this._playerGlowLayer.sprite.setVisible(_0x411813 && this._playerGlowLayer.sprite._glowEnabled);
      }
      if (this._playerOverlayLayer) {
        this._playerOverlayLayer.sprite.setVisible(_0x411813);
      }
      if (this._playerExtraLayer) {
        this._playerExtraLayer.sprite.setVisible(_0x411813);
      }
    }
  }, {
    key: "setShipVisible",
    value: function setShipVisible(_0x1c5620) {
      this._shipSpriteLayer.sprite.setVisible(_0x1c5620);
      if (this._shipGlowLayer) {
        this._shipGlowLayer.sprite.setVisible(_0x1c5620 && this._shipGlowLayer.sprite._glowEnabled);
      }
      if (this._shipOverlayLayer) {
        this._shipOverlayLayer.sprite.setVisible(_0x1c5620);
      }
      if (this._shipExtraLayer) {
        this._shipExtraLayer.sprite.setVisible(_0x1c5620);
      }
    }
  }, {
    key: "setBirdVisible",
    value: function setBirdVisible(v) {
      var _iterator = _createForOfIteratorHelper(this._birdLayers || []),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var layer = _step.value;
          if (layer === this._birdGlowLayer) {
            layer.sprite.setVisible(v && layer.sprite._glowEnabled);
          } else {
            layer.sprite.setVisible(v);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "setBallVisible",
    value: function setBallVisible(_0x5685cf) {
      if (this._ballSpriteLayer) {
        this._ballSpriteLayer.sprite.setVisible(_0x5685cf);
      }
      if (this._ballGlowLayer) {
        this._ballGlowLayer.sprite.setVisible(_0x5685cf && this._ballGlowLayer.sprite._glowEnabled);
      }
      if (this._ballOverlayLayer) {
        this._ballOverlayLayer.sprite.setVisible(_0x5685cf);
      }
    }
  }, {
    key: "setWaveVisible",
    value: function setWaveVisible(_0x2d078b) {
      if (this._waveSpriteLayer) {
        this._waveSpriteLayer.sprite.setVisible(_0x2d078b);
      }
      if (this._waveOverlayLayer) {
        this._waveOverlayLayer.sprite.setVisible(_0x2d078b);
      }
      if (this._waveExtraLayer) {
        this._waveExtraLayer.sprite.setVisible(_0x2d078b);
      }
      if (this._waveGlowLayer) {
        this._waveGlowLayer.sprite.setVisible(_0x2d078b && this._waveGlowLayer.sprite._glowEnabled);
      }
    }
  }, {
    key: "setSpiderVisible",
    value: function setSpiderVisible(v) {
      var _iterator2 = _createForOfIteratorHelper(this._spiderLayers || []),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var layer = _step2.value;
          if (layer === this._spiderGlowLayer) {
            layer.sprite.setVisible(v && layer.sprite._glowEnabled);
          } else {
            layer.sprite.setVisible(v);
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  }, {
    key: "syncSprites",
    value: function syncSprites(cameraX, cameraY, _0x3afedf, mirrorOffset) {
      if (this._endAnimating) {
        return;
      }
      var _0x7f0705 = mirrorOffset !== undefined ? mirrorOffset : centerX;
      var _0x1a433c = b(this.p.y) + cameraY;
      var playerRotation = this._rotation;
      this._lastCameraX = cameraX;
      this._lastCameraY = cameraY;
      this._aboveContainer.x = -cameraX;
      this._aboveContainer.y = cameraY;
      if (this.p.isFlying || this.p.isUfo) {
        var _0x3904f8 = 10;
        var _miniS = this.p.isMini ? 0.6 : 1;
        var playerOffset = this.p.gravityFlipped ? -30 * _miniS : 10 * _miniS;
        var cosRotation = Math.cos(playerRotation);
        var sinRotation = Math.sin(playerRotation);
        var mirrored = this.p.mirrored ? -1 : 1;
        var _0x1b1d28 = -_0x3904f8 * sinRotation * mirrored;
        var _0x185f91 = _0x3904f8 * cosRotation;
        var _0x562424 = playerOffset * sinRotation * mirrored;
        var _0x3011c9 = -playerOffset * cosRotation;
        var _ufoMode = this.p.isUfo && !this.p.isFlying;
        if (this.p.isFlying) {
          var _iterator3 = _createForOfIteratorHelper(this._shipLayers),
            _step3;
          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var layer = _step3.value;
              if (layer) {
                var _miniS2 = this.p.isMini ? 0.6 : 1;
                layer.sprite.x = _0x7f0705 + _0x1b1d28;
                layer.sprite.y = _0x1a433c + _0x185f91 + (this.p.gravityFlipped ? -20 * _miniS2 : 0);
                layer.sprite.rotation = this.p.mirrored ? -playerRotation : playerRotation;
                layer.sprite.scaleY = this.p.gravityFlipped ? -_miniS2 : _miniS2;
                layer.sprite.scaleX = this.p.mirrored ? -_miniS2 : _miniS2;
              }
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        }
        if (this.p.isUfo && !this.p.isDead) {
          var _iterator4 = _createForOfIteratorHelper(this._birdLayers),
            _step4;
          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var _layer2 = _step4.value;
              if (_layer2) {
                _layer2.sprite.setVisible(true);
                _layer2.sprite.x = _0x7f0705 + _0x1b1d28;
                _layer2.sprite.y = _0x1a433c + _0x185f91 + (this.p.gravityFlipped ? -15 : 5);
                _layer2.sprite.rotation = this.p.mirrored ? -playerRotation : playerRotation;
                var _miniS3 = this.p.isMini ? 0.6 : 1;
                _layer2.sprite.scaleY = this.p.gravityFlipped ? -_miniS3 : _miniS3;
                _layer2.sprite.scaleX = this.p.mirrored ? -_miniS3 : _miniS3;
              }
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
        }
        var _iterator5 = _createForOfIteratorHelper(this._playerLayers),
          _step5;
        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var _playerLayerItem = _step5.value;
            if (_playerLayerItem) {
              var _miniS4 = this.p.isMini ? 0.6 : 1;
              _playerLayerItem.sprite.x = _0x7f0705 + _0x562424;
              _playerLayerItem.sprite.y = _0x1a433c + _0x3011c9 + (this.p.isMini ? 8 * _miniS4 : 0) + (this.p.gravityFlipped ? -20 * _miniS4 : 0);
              _playerLayerItem.sprite.rotation = this.p.mirrored ? -playerRotation : playerRotation;
              var _shipCubeS = _miniS4 * 0.55;
              _playerLayerItem.sprite.scaleY = this.p.gravityFlipped ? -_shipCubeS : _shipCubeS;
              _playerLayerItem.sprite.scaleX = this.p.mirrored ? -_shipCubeS : _shipCubeS;
            }
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
        if (_ufoMode) {
          var _ufoTilt = Math.max(-0.05, Math.min(0.05, -(this.p.y - this.p.lastY) * 0.008));
          var _iterator6 = _createForOfIteratorHelper(this._birdLayers),
            _step6;
          try {
            for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
              var _layer3 = _step6.value;
              if (_layer3) {
                _layer3.sprite.rotation = this.p.mirrored ? -_ufoTilt : _ufoTilt;
              }
            }
          } catch (err) {
            _iterator6.e(err);
          } finally {
            _iterator6.f();
          }
          var _iterator7 = _createForOfIteratorHelper(this._playerLayers),
            _step7;
          try {
            for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
              var playerLayerItem = _step7.value;
              if (playerLayerItem) {
                playerLayerItem.sprite.rotation = this.p.mirrored ? -_ufoTilt : _ufoTilt;
              }
            }
          } catch (err) {
            _iterator7.e(err);
          } finally {
            _iterator7.f();
          }
        }
      } else {
        var _iterator8 = _createForOfIteratorHelper(this._spiderLayers),
          _step8;
        try {
          for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
            var _layer4 = _step8.value;
            if (_layer4) {
              _layer4.sprite.setVisible(false);
            }
          }
        } catch (err) {
          _iterator8.e(err);
        } finally {
          _iterator8.f();
        }
        var _iterator9 = _createForOfIteratorHelper(this._allLayers),
          _step9;
        try {
          for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
            var playerLayer = _step9.value;
            if (playerLayer) {
              playerLayer.sprite.x = _0x7f0705;
              playerLayer.sprite.y = _0x1a433c;
              var isBallLayer = this._ballLayers.includes(playerLayer);
              playerLayer.sprite.rotation = isBallLayer ? playerRotation : this.p.mirrored ? -playerRotation : playerRotation;
              var _miniS5 = this.p.isMini ? 0.6 : 1;
              if (this.p.isWave && this._waveLayers.includes(playerLayer)) {
                _miniS5 *= 0.94; //fix wave size
              }
              playerLayer.sprite.scaleY = this.p.gravityFlipped ? -_miniS5 : _miniS5;
              playerLayer.sprite.scaleX = this.p.mirrored ? -_miniS5 : _miniS5;
            }
          }
        } catch (err) {
          _iterator9.e(err);
        } finally {
          _iterator9.f();
        }
        var _iterator0 = _createForOfIteratorHelper(this._spiderLayers),
          _step0;
        try {
          for (_iterator0.s(); !(_step0 = _iterator0.n()).done;) {
            var _layer5 = _step0.value;
            if (_layer5) {
              _layer5.sprite.setVisible(false);
            }
          }
        } catch (err) {
          _iterator0.e(err);
        } finally {
          _iterator0.f();
        }
        var _iterator1 = _createForOfIteratorHelper(this._allLayers),
          _step1;
        try {
          for (_iterator1.s(); !(_step1 = _iterator1.n()).done;) {
            var _playerLayer = _step1.value;
            if (_playerLayer) {
              _playerLayer.sprite.x = _0x7f0705;
              _playerLayer.sprite.y = _0x1a433c;
              var _isBallLayer = this._ballLayers.includes(_playerLayer);
              _playerLayer.sprite.rotation = _isBallLayer ? playerRotation : this.p.mirrored ? -playerRotation : playerRotation;
              var _miniS6 = this.p.isMini ? 0.6 : 1;
              if (this.p.isWave && this._waveLayers.includes(_playerLayer)) {
                _miniS6 *= 0.94; //fix wave size
              }
              _playerLayer.sprite.scaleY = this.p.gravityFlipped ? -_miniS6 : _miniS6;
              _playerLayer.sprite.scaleX = this.p.mirrored ? -_miniS6 : _miniS6;
            }
          }
        } catch (err) {
          _iterator1.e(err);
        } finally {
          _iterator1.f();
        }
      }
      if (this.p.isWave && this._waveSpriteLayer) {
        var _0x3f036a = this.p.mirrored ? 1 : -1;
        this._waveSpriteLayer.sprite.x += 1.5 * _0x3f036a;
        this._waveSpriteLayer.sprite.y -= 1;
      }
      this._updateParticles(cameraX, cameraY, _0x3afedf);
      this._updateDashAnimation(_0x3afedf * 1000);
      if (this._dashAnimationSprite && this._dashAnimationSprite.visible) {
        this._dashAnimationSprite.x = _0x7f0705;
        this._dashAnimationSprite.y = _0x1a433c;
        var _miniS7 = this.p.isMini ? 0.6 : 1;
        this._dashAnimationSprite.scaleY = this.p.gravityFlipped ? -_miniS7 : _miniS7;
        this._dashAnimationSprite.scaleX = _miniS7;
      }
      if (!this._scene._slideIn) {
        if (!this._hitboxTrail) this._hitboxTrail = [];
        if (!this.p.isDead) {
          // Ring buffer to avoid O(n) shift() per frame at 240 FPS
          if (this._trailIdx === undefined) this._trailIdx = 0;
          var _tEntry = this._hitboxTrail[this._trailIdx % 180];
          if (!_tEntry) {
            this._hitboxTrail[this._trailIdx % 180] = { x: this._scene._playerWorldX, y: this.p.y };
          } else {
            _tEntry.x = this._scene._playerWorldX;
            _tEntry.y = this.p.y;
          }
          this._trailIdx++;
        }
        if (window.showHitboxes || this.p.isDead && window.hitboxesOnDeath) {
          this.drawHitboxes(this._hitboxGraphics, cameraX, cameraY);
        } else if (this._hitboxGraphics) {
          this._hitboxGraphics.clear();
        }
      }
    }
  }, {
    key: "enterShipMode",
    value: function enterShipMode() {
      var _0xeb37c6 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var fromCheckpoint = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (this.p.isFlying) {
        return;
      }
      this.exitBallMode();
      this.exitWaveMode();
      this.p.isFlying = true;
      this._scene.toggleGlitter(true);
      if (!fromCheckpoint) {
        this.p.yVelocity *= 0.5;
      }
      this.p.onGround = false;
      this.p.canJump = false;
      this.p.isJumping = false;
      this.stopRotation();
      this._rotation = 0;
      this._particleEmitter.stop();
      this._flyParticle2Active = false;
      this._streak.reset();
      this._streak.start();
      this.setWaveVisible(false);
      this.setShipVisible(true);
      var _iterator10 = _createForOfIteratorHelper(this._playerLayers),
        _step10;
      try {
        for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
          var layer = _step10.value;
          if (layer) {
            layer.sprite.setScale(0.55);
          }
        }
      } catch (err) {
        _iterator10.e(err);
      } finally {
        _iterator10.f();
      }
      var spawnY = this.p.y;
      if (_0xeb37c6) {
        spawnY = _0xeb37c6.portalY !== undefined ? _0xeb37c6.portalY : _0xeb37c6.y;
      }
      this._gameLayer.setFlyMode(true, spawnY, f, false);
    }
  }, {
    key: "exitShipMode",
    value: function exitShipMode() {
      if (this.p.isFlying) {
        this.p.isFlying = false;
        this._scene.toggleGlitter(false);
        this.p.yVelocity *= 0.5;
        this.p.onGround = false;
        this.p.canJump = false;
        this.p.isJumping = false;
        this.stopRotation();
        this._rotation = 0;
        this._flyParticleEmitter.stop();
        this._flyParticleActive = false;
        this._flyParticle2Emitter.stop();
        this._flyParticle2Active = false;
        this._shipDragEmitter.stop();
        this._shipDragActive = false;
        this._particleActive = false;
        this._streak.stop();
        this._streak.reset();
        this.setShipVisible(false);
        this.setCubeVisible(!this.p.isBall && !this.p.isWave);
        this.setBallVisible(this.p.isBall);
        this.setWaveVisible(this.p.isWave);
        this.setSpiderVisible(false);
        var _iterator11 = _createForOfIteratorHelper(this._playerLayers),
          _step11;
        try {
          for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
            var layer = _step11.value;
            if (layer) {
              layer.sprite.setScale(1);
            }
          }
        } catch (err) {
          _iterator11.e(err);
        } finally {
          _iterator11.f();
        }
        this._gameLayer.setFlyMode(false, 0);
      }
    }
  }, {
    key: "enterBallMode",
    value: function enterBallMode() {
      var _0x36bb3d = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      if (this.p.isBall) {
        return;
      }
      this.exitWaveMode();
      this.p.isBall = true;
      this.p.onGround = false;
      this.p.canJump = false;
      this.p.isJumping = false;
      this.stopRotation();
      this._rotation = 0;
      this.setCubeVisible(false);
      this.setWaveVisible(false);
      this.setBallVisible(true);
      var _0x18df19 = this.p.y;
      if (_0x36bb3d) {
        _0x18df19 = _0x36bb3d.portalY !== undefined ? _0x36bb3d.portalY : _0x36bb3d.y;
      }
      this._gameLayer.setFlyMode(true, _0x18df19 + a, f - a * 2, true);
    }
  }, {
    key: "exitBallMode",
    value: function exitBallMode() {
      if (!this.p.isBall) {
        return;
      }
      this.p.isBall = false;
      this.p.onGround = false;
      this.p.canJump = false;
      this.p.isJumping = false;
      this.stopRotation();
      this._rotation = 0;
      this.setBallVisible(false);
      this.setWaveVisible(false);
      this.setCubeVisible(true);
      this._gameLayer.setFlyMode(false, 0);
    }
  }, {
    key: "enterWaveMode",
    value: function enterWaveMode() {
      var _0x5a10cc = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      if (this.p.isWave) {
        return;
      }
      this.exitShipMode();
      this.exitBallMode();
      this.p.isWave = true;
      this.p.yVelocity = 0;
      this.p.onGround = false;
      this.p.canJump = false;
      this.p.isJumping = false;
      this.stopRotation();
      this._rotation = 0;
      this._streak.reset();
      this._streak.start();
      this._waveTrail.reset();
      this._waveTrail.start();
      this.setCubeVisible(false);
      this.setBallVisible(false);
      this.setShipVisible(false);
      this.setWaveVisible(true);
      var _0x38b484 = this.p.y;
      if (_0x5a10cc) {
        _0x38b484 = _0x5a10cc.portalY !== undefined ? _0x5a10cc.portalY : _0x5a10cc.y;
      }
      this._gameLayer.setFlyMode(true, _0x38b484, f, false);
    }
  }, {
    key: "exitWaveMode",
    value: function exitWaveMode() {
      if (!this.p.isWave) {
        return;
      }
      this.p.isWave = false;
      this.p.yVelocity = 0;
      this.p.onGround = false;
      this.p.canJump = false;
      this.p.isJumping = false;
      this.stopRotation();
      this._rotation = 0;
      this._streak.stop();
      this._streak.reset();
      this._waveTrail.stop();
      this._waveTrail.reset();
      this.setWaveVisible(false);
      this.setCubeVisible(!this.p.isBall && !this.p.isFlying);
      this.setBallVisible(this.p.isBall);
      this.setShipVisible(this.p.isFlying);
      this.setSpiderVisible(false);
      this._gameLayer.setFlyMode(false, 0);
    }
  }, {
    key: "enterSpiderMode",
    value: function enterSpiderMode() {
      var portal = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      if (this.p.isSpider) return;
      this.exitShipMode();
      this.exitBallMode();
      this.exitWaveMode();
      this.p.isSpider = true;
      this.p.yVelocity = 0;
      this.p.onGround = false;
      this.p.canJump = false;
      this.p.isJumping = false;
      this.p._spiderTeleportPending = false;
      this.stopRotation();
      this._rotation = 0;
      // use cube icon for spider mode (spider icon not ready yet)
      this.setCubeVisible(true);
      this.setBallVisible(false);
      this.setShipVisible(false);
      this.setWaveVisible(false);
      this.setSpiderVisible(false);
      var _y = this.p.y;
      if (portal) _y = portal.portalY !== undefined ? portal.portalY : portal.y;
      this._gameLayer.setFlyMode(true, _y + a, f - a * 2, true);
    }
  }, {
    key: "exitSpiderMode",
    value: function exitSpiderMode() {
      if (!this.p.isSpider) return;
      this.p.isSpider = false;
      this.p.yVelocity = 0;
      this.p.onGround = false;
      this.p.canJump = false;
      this.p.isJumping = false;
      this.p._spiderTeleportPending = false;
      this.stopRotation();
      this._rotation = 0;
      this.setSpiderVisible(false);
      this.setCubeVisible(true);
      this._gameLayer.setFlyMode(false, 0);
    }
  }, {
    key: "enterUfoMode",
    value: function enterUfoMode() {
      var _portal = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var fromCheckpoint = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (this.p.isUfo) return;
      this.exitBallMode();
      this.exitWaveMode();
      this.exitShipMode();
      this.p.isUfo = true;
      this._scene.toggleGlitter(true);
      if (!fromCheckpoint) {
        this.p.yVelocity *= 0.4;
      }
      this.p.onGround = false;
      this.p.canJump = false;
      this.p.isJumping = false;
      this.stopRotation();
      this._rotation = 0;
      this._particleEmitter.stop();
      this._streak.reset();
      this._streak.start();
      this.setBallVisible(false);
      this.setShipVisible(false);
      this.setWaveVisible(false);
      this.setSpiderVisible(false);
      this.setBirdVisible(true);
      this.setCubeVisible(true);
      var _iterator12 = _createForOfIteratorHelper(this._playerLayers),
        _step12;
      try {
        for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
          var _layer = _step12.value;
          if (_layer) {
            _layer.sprite.setScale(0.55);
          }
        }
      } catch (err) {
        _iterator12.e(err);
      } finally {
        _iterator12.f();
      }
      var _spawnY = this.p.y;
      if (_portal) {
        _spawnY = _portal.portalY !== undefined ? _portal.portalY : _portal.y;
      }
      this._gameLayer.setFlyMode(true, _spawnY, f, false);
    }
  }, {
    key: "exitUfoMode",
    value: function exitUfoMode() {
      if (!this.p.isUfo) return;
      this.p.isUfo = false;
      this._scene.toggleGlitter(false);
      this.p.yVelocity *= 0.5;
      this.p.onGround = false;
      this.p.canJump = false;
      this.p.isJumping = false;
      this.stopRotation();
      this._rotation = 0;
      this._flyParticleEmitter.stop();
      this.setCubeVisible(!this.p.isBall && !this.p.isFlying);
      this.setBallVisible(this.p.isBall);
      this.setShipVisible(this.p.isFlying);
      this.setWaveVisible(this.p.isWave);
      this.setBirdVisible(false);
      this.setSpiderVisible(false);
      var _iterator13 = _createForOfIteratorHelper(this._playerLayers),
        _step13;
      try {
        for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
          var _0xe1b715 = _step13.value;
          if (_0xe1b715) {
            _0xe1b715.sprite.setScale(1);
          }
        }
      } catch (err) {
        _iterator13.e(err);
      } finally {
        _iterator13.f();
      }
      this._gameLayer.setFlyMode(false, 0);
    }
  }, {
    key: "hitGround",
    value: function hitGround() {
      var _0x4a38a5 = !this.p.onGround;
      if (!this.p.isFlying && !this.p.isWave && !this.p.isUfo) {
        this.p.lastGroundY = this.p.y;
      }
      this.p.yVelocity = 0;
      this.p.onGround = true;
      this.p.canJump = true;
      this.p.isJumping = false;
      this.p.queuedHold = false;
      if (this.p.isBall) {
        if (_0x4a38a5) {
          this._rotation = Math.round(this._rotation / Math.PI) * Math.PI;
        }
      } else if (this.p.isSpider) {
        if (_0x4a38a5) {
          this._rotation = Math.round(this._rotation / Math.PI) * Math.PI;
        }
      } else if (this.p.isWave) {
        this._rotation = 0;
      }
      this.stopRotation();
      if (_0x4a38a5 && !this.p.isFlying && !this.p.isWave && !this.p.isSpider) {
        this._landIdx = !this._landIdx;
        var _0x31584b = this._landIdx ? this._landEmitter1 : this._landEmitter2;
        var _0x2248d5 = this._scene._playerWorldX;
        var _0x17e0bb = this.p.gravityFlipped ? b(this.p.y) - 30 : b(this.p.y) + 30;
        _0x31584b.explode(10, _0x2248d5, _0x17e0bb);
      }
    }
  }, {
    key: "killPlayer",
    value: function killPlayer() {
      if (this.p.isDead) {
        return;
      }
      this.p.isDead = true;
      this._scene.toggleGlitter(false);
      this._particleEmitter.stop();
      this._particleActive = false;
      this._flyParticleEmitter.stop();
      this._flyParticleActive = false;
      this._flyParticle2Emitter.stop();
      this._flyParticle2Active = false;
      this._shipDragEmitter.stop();
      this._shipDragActive = false;
      this._streak.stop();
      this._streak.reset();
      var _0x3f4b84 = this._scene;
      var _0x3f0446 = _0x3f4b84._getMirrorXOffset(_0x3f4b84._playerWorldX - _0x3f4b84._cameraX);
      var _0x53ac5b = b(this.p.y) + this._lastCameraY;
      var _0x281e43 = 0.9;
      _0x3f4b84.add.particles(_0x3f0446, _0x53ac5b, "GJ_WebSheet", {
        frame: "square.png",
        speed: {
          min: 200,
          max: 800
        },
        angle: {
          min: 0,
          max: 360
        },
        scale: {
          start: 18 / 32,
          end: 0
        },
        alpha: {
          start: 1,
          end: 0
        },
        lifespan: {
          min: 50,
          max: 800
        },
        quantity: 100,
        stopAfter: 100,
        blendMode: S,
        tint: window.mainColor,
        x: {
          min: -20,
          max: 20
        },
        y: {
          min: -20,
          max: 20
        }
      }).setScrollFactor(0).setDepth(15);
      var _0x438d80 = _0x3f4b84.add.graphics().setScrollFactor(0).setDepth(15).setBlendMode(S);
      var _0x4683eb = {
        t: 0
      };
      _0x3f4b84.tweens.add({
        targets: _0x4683eb,
        t: 1,
        duration: 500,
        ease: "Quad.Out",
        onUpdate: function onUpdate() {
          var _0x39f32 = 18 + _0x4683eb.t * 144;
          var _0xc8c1 = 1 - _0x4683eb.t;
          _0x438d80.clear();
          _0x438d80.fillStyle(window.mainColor, _0xc8c1);
          _0x438d80.fillCircle(_0x3f0446, _0x53ac5b, _0x39f32);
        },
        onComplete: function onComplete() {
          return _0x438d80.destroy();
        }
      });
      this._createExplosionPieces(_0x3f0446, _0x53ac5b, _0x281e43);
      this.setCubeVisible(false);
      this.setShipVisible(false);
      this.setBallVisible(false);
      this.setWaveVisible(false);
      this.setBirdVisible(false);
      this.setSpiderVisible(false);
    }
  }, {
    key: "_createExplosionPieces",
    value: function _createExplosionPieces(_0x49be85, _0x13b56e, _0x349a09) {
      var _this2 = this;
      var _0x44acaf = this._scene;
      var _0x4a9f23 = _0x349a09 * 40;
      var sliderBar = Math.round(_0x4a9f23 * 2);
      var _0x26dcbd = _0x44acaf.make.renderTexture({
        x: 0,
        y: 0,
        width: sliderBar,
        height: sliderBar,
        add: false
      });
      var _0x5c571a = [this._playerGlowLayer, this._playerOverlayLayer, this._ballGlowLayer, this._ballOverlayLayer, this._waveGlowLayer, this._waveOverlayLayer, this._waveExtraLayer, this._shipGlowLayer, this._shipOverlayLayer, this._playerSpriteLayer, this._playerExtraLayer, this._ballSpriteLayer, this._waveSpriteLayer, this._shipSpriteLayer, this._shipExtraLayer, this._birdSpriteLayer, this._birdGlowLayer, this._birdOverlayLayer, this._birdExtraLayer];
      for (var _i2 = 0, _x5c571a = _0x5c571a; _i2 < _x5c571a.length; _i2++) {
        var _0x1f09e3 = _x5c571a[_i2];
        if (!_0x1f09e3) {
          continue;
        }
        if (!_0x1f09e3.sprite.visible) {
          continue;
        }
        var _0x53102a = _0x1f09e3.sprite;
        _0x26dcbd.draw(_0x53102a, sliderBar / 2 + (_0x53102a.x - _0x49be85), sliderBar / 2 + (_0x53102a.y - _0x13b56e));
      }
      var _0xd0201e = "__deathRT_" + Date.now();
      _0x26dcbd.saveTexture(_0xd0201e);
      var _0x5a2621 = _0x44acaf.textures.get(_0xd0201e);
      var _0x28c600 = 2 + Math.round(Math.random() * 2);
      var _0x247253 = 2 + Math.round(Math.random() * 2);
      var _0x5b9267 = Math.random();
      if (_0x5b9267 > 0.95) {
        _0x28c600 = 1;
      } else if (_0x5b9267 > 0.9) {
        _0x247253 = 1;
      }
      var _0x1e8c09 = 7.4779225920000005;
      var _0x422587 = _0x1e8c09 * 0.5;
      var _0x1e87b0 = _0x1e8c09 * 1;
      var _0x4dd9c4 = 0.45;
      var _0x5e8097 = sliderBar / _0x28c600;
      var _0x5af9d3 = sliderBar / _0x247253;
      var _0xe9c860 = [];
      var _0x3215fa = [];
      var _0x416e63 = [0];
      var _0x57d0dc = [0];
      var _0x44e1e1 = 0;
      var _0x38011e = 0;
      for (var _0x3f4d44 = 0; _0x3f4d44 < _0x28c600 - 1; _0x3f4d44++) {
        var _0x5b2c12 = Math.round(_0x5e8097 * (0.55 + Math.random() * _0x4dd9c4 * 2));
        _0xe9c860.push(_0x5b2c12);
        _0x44e1e1 += _0x5b2c12;
        _0x416e63.push(_0x44e1e1);
      }
      _0xe9c860.push(sliderBar - _0x44e1e1);
      for (var _0x325ce1 = 0; _0x325ce1 < _0x247253 - 1; _0x325ce1++) {
        var _0x37f0ad = Math.round(_0x5af9d3 * (0.55 + Math.random() * _0x4dd9c4 * 2));
        _0x3215fa.push(_0x37f0ad);
        _0x38011e += _0x37f0ad;
        _0x57d0dc.push(_0x38011e);
      }
      _0x3215fa.push(sliderBar - _0x38011e);
      this._explosionPieces = [];
      this._explosionContainer = _0x44acaf.add.container(_0x49be85, _0x13b56e).setDepth(16);
      var _0x156c8b = 0;
      for (var _0x4cd06e = 0; _0x4cd06e < _0x28c600; _0x4cd06e++) {
        var _0x5c6aa9 = _0xe9c860[_0x4cd06e];
        var _0x43a4e9 = _0x416e63[_0x4cd06e];
        var _loop = function _loop() {
          var _0x20847a = _0x3215fa[_0x5b14cf];
          var _0x20396e = _0x57d0dc[_0x5b14cf];
          if (_0x5c6aa9 <= 0 || _0x20847a <= 0) {
            return 1; // continue
          }
          _0x156c8b++;
          var _0x526d03 = "piece_" + _0x4cd06e + "_" + _0x5b14cf;
          _0x5a2621.add(_0x526d03, 0, _0x43a4e9, _0x20396e, _0x5c6aa9, _0x20847a);
          var _0xba83f5 = _0x44acaf.add.image(0, 0, _0xd0201e, _0x526d03);
          _0xba83f5.x = _0x43a4e9 + _0x5c6aa9 / 2 - sliderBar / 2;
          _0xba83f5.y = -(_0x20396e + _0x20847a / 2 - sliderBar / 2);
          _this2._explosionContainer.add(_0xba83f5);
          var _0x298d34 = null;
          if (_0x156c8b % 2 == 0) {
            var _0x367bdb = 200 + Math.random() * 200;
            var _0x5e5fa8 = _0xba83f5;
            _0x298d34 = _0x44acaf.add.particles(0, 0, "GJ_WebSheet", {
              frame: "square.png",
              speed: 0,
              scale: {
                start: 0.5,
                end: 0
              },
              alpha: {
                start: 1,
                end: 0
              },
              lifespan: _0x367bdb,
              frequency: 25,
              quantity: 1,
              emitting: true,
              blendMode: S,
              tint: window.mainColor,
              emitCallback: function emitCallback(_0x2f7fc7) {
                _0x2f7fc7.x = _0x5e5fa8.x + (Math.random() * 2 - 1) * 3 * 2;
                _0x2f7fc7.y = _0x5e5fa8.y + (Math.random() * 2 - 1) * 3 * 2;
              }
            });
            _this2._explosionContainer.addAt(_0x298d34, 0);
          }
          var _0x159cfa = {
            spr: _0xba83f5,
            particle: _0x298d34,
            xVel: (_0x422587 + (Math.random() * 2 - 1) * _0x1e87b0) * (_this2.p.mirrored ? -1 : 1),
            yVel: -(12 + (Math.random() * 2 - 1) * 6),
            timer: 1.4,
            fadeTime: 0.5,
            rotDelta: (Math.random() * 2 - 1) * 360 / 60,
            halfSize: Math.min(_0x5c6aa9, _0x20847a) / 2
          };
          _this2._explosionPieces.push(_0x159cfa);
        };
        for (var _0x5b14cf = 0; _0x5b14cf < _0x247253; _0x5b14cf++) {
          if (_loop()) continue;
        }
      }
      this._explosionGroundSY = b(0) + this._lastCameraY;
      this._explosionRT = _0x26dcbd;
      this._explosionTexKey = _0xd0201e;
    }
  }, {
    key: "updateExplosionPieces",
    value: function updateExplosionPieces(_0x1c8c6d) {
      if (!this._explosionPieces || this._explosionPieces.length === 0) {
        return;
      }
      var _0x1ed0a8 = _0x1c8c6d / 1000;
      var _0x3e389c = Math.min(_0x1ed0a8 * 60 * 0.9, 2);
      var _0x59eafe = _0x3e389c * 0.5 * 2;
      var _0x5a7549 = this._explosionGroundSY - this._explosionContainer.y;
      var _0x4284b0 = 0;
      while (_0x4284b0 < this._explosionPieces.length) {
        var particleX = this._explosionPieces[_0x4284b0];
        particleX.timer -= _0x1ed0a8;
        if (particleX.timer > 0) {
          {
            particleX.yVel += _0x59eafe;
            particleX.xVel *= 0.98 + (1 - _0x3e389c) * 0.02;
            var _0x57034b = particleX.spr.x + particleX.xVel * _0x3e389c;
            var _0x4c0481 = particleX.spr.y + particleX.yVel * _0x3e389c;
            var _0x3f6377 = _0x5a7549 - particleX.halfSize;
            if (_0x4c0481 > _0x3f6377 && particleX.yVel > 0) {
              _0x4c0481 = _0x3f6377;
              particleX.yVel *= -0.8;
              if (Math.abs(particleX.yVel) < 3) {
                particleX.yVel = -3;
              }
            }
            particleX.spr.x = _0x57034b;
            particleX.spr.y = _0x4c0481;
            particleX.spr.angle += particleX.rotDelta * _0x3e389c;
            if (particleX.timer < particleX.fadeTime) {
              var _0x2d8b5f = particleX.timer / particleX.fadeTime;
              particleX.spr.setAlpha(_0x2d8b5f);
              if (particleX.particle) {
                particleX.particle.setAlpha(_0x2d8b5f);
              }
            }
          }
          _0x4284b0++;
        } else {
          if (particleX.particle) {
            particleX.particle.stop();
            particleX.particle.destroy();
          }
          particleX.spr.destroy();
          this._explosionPieces.splice(_0x4284b0, 1);
        }
      }
      if (this._explosionPieces.length === 0) {
        this._cleanupExplosion();
      }
    }
  }, {
    key: "_cleanupExplosion",
    value: function _cleanupExplosion() {
      if (this._explosionPieces) {
        var _iterator14 = _createForOfIteratorHelper(this._explosionPieces),
          _step14;
        try {
          for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
            var _0x59172d = _step14.value;
            if (_0x59172d.particle) {
              _0x59172d.particle.stop();
              _0x59172d.particle.destroy();
            }
            if (_0x59172d.spr) {
              _0x59172d.spr.destroy();
            }
          }
        } catch (err) {
          _iterator14.e(err);
        } finally {
          _iterator14.f();
        }
      }
      if (this._explosionContainer) {
        this._explosionContainer.destroy();
        this._explosionContainer = null;
      }
      if (this._explosionTexKey) {
        this._scene.textures.remove(this._explosionTexKey);
        this._explosionTexKey = null;
      }
      if (this._explosionRT) {
        this._explosionRT.destroy();
        this._explosionRT = null;
      }
      this._explosionPieces = null;
    }
  }, {
    key: "_playPortalShine",
    value: function _playPortalShine(_0x49e81f) {
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var _0x4ed8ff = this._scene;
      var _0xf31b0d = _0x49e81f.x;
      var _0x3824c0 = b(_0x49e81f.portalY);
      var typeStr = type === 1 ? "02" : "01";
      var _0x19c6b0 = ["portalshine_".concat(typeStr, "_front_001.png"), "portalshine_".concat(typeStr, "_back_001.png")];
      var _0x5d636a = [this._gameLayer.topContainer, this._gameLayer.container];
      var _loop2 = function _loop2() {
        var _0x4bfe30 = getAtlasFrame(_0x4ed8ff, _0x19c6b0[_0x34fd8c]);
        if (!_0x4bfe30) {
          return 1; // continue
        }
        var pieceSize = _0x4ed8ff.add.image(_0xf31b0d, _0x3824c0, _0x4bfe30.atlas, _0x4bfe30.frame);
        pieceSize.setBlendMode(S);
        pieceSize.setAlpha(0);
        pieceSize.angle = _0x49e81f.rotationDegrees;
        _0x5d636a[_0x34fd8c].add(pieceSize);
        _0x4ed8ff.tweens.add({
          targets: pieceSize,
          alpha: {
            from: 0,
            to: 1
          },
          duration: 50,
          onComplete: function onComplete() {
            _0x4ed8ff.tweens.add({
              targets: pieceSize,
              alpha: 0,
              duration: 400,
              onComplete: function onComplete() {
                return pieceSize.destroy();
              }
            });
          }
        });
      };
      for (var _0x34fd8c = 0; _0x34fd8c < 2; _0x34fd8c++) {
        if (_loop2()) continue;
      }
    }
  }, {
    key: "_checkSnapJump",
    value: function _checkSnapJump(_0x1f801b) {
      var _0x483058 = [{
        dx: 240,
        dy: 60
      }, {
        dx: 300,
        dy: -60
      }, {
        dx: 180,
        dy: 120
      }];
      var _0x2b806a = this._lastLandObject;
      if (_0x2b806a && _0x2b806a !== _0x1f801b && _0x2b806a.type === solidType) {
        var _0x34ef27 = _0x2b806a.x;
        var _0x4652bb = _0x2b806a.y;
        var _0x5de781 = _0x1f801b.x;
        var _0x21ad88 = _0x1f801b.y;
        var _0x1b1831 = this.p.gravityFlipped ? -1 : 1;
        var _0x372d4e = false;
        var _iterator15 = _createForOfIteratorHelper(_0x483058),
          _step15;
        try {
          for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
            var _0x31d5e4 = _step15.value;
            if (Math.abs(_0x5de781 - (_0x34ef27 + _0x31d5e4.dx)) <= 2 && Math.abs(_0x21ad88 - (_0x4652bb + _0x31d5e4.dy * _0x1b1831)) <= 2) {
              _0x372d4e = true;
              break;
            }
          }
        } catch (err) {
          _iterator15.e(err);
        } finally {
          _iterator15.f();
        }
        if (_0x372d4e) {
          var _0x4ca454 = _0x1f801b.x + this._lastXOffset;
          var _0x48aba3 = this._scene._playerWorldX;
          var _0x5f2847;
          _0x5f2847 = Math.abs(_0x4ca454 - _0x48aba3) <= 2 ? _0x4ca454 : _0x4ca454 > _0x48aba3 ? _0x48aba3 + 2 : _0x48aba3 - 2;
          this._scene._playerWorldX = _0x5f2847;
        }
      }
      this._lastLandObject = _0x1f801b;
      this._lastXOffset = this._scene._playerWorldX - _0x1f801b.x;
    }
  }, {
    key: "_isFallingPastThreshold",
    value: function _isFallingPastThreshold() {
      if (this.p.gravityFlipped) {
        return this.p.yVelocity > 0.25;
      } else {
        return this.p.yVelocity < -0.25;
      }
    }
  }, {
    key: "flipMod",
    value: function flipMod() {
      if (this.p.gravityFlipped) {
        return -1;
      } else {
        return 1;
      }
    }
  }, {
    key: "flipGravity",
    value: function flipGravity(flipped) {
      var _0x11bbde = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.5;
      if (this.p.gravityFlipped === flipped) {
        return;
      }
      this.p.gravityFlipped = flipped;
      this.p.yVelocity *= _0x11bbde;
      this.p.onGround = false;
      this.p.canJump = false;
    }
  }, {
    key: "runRotateAction",
    value: function runRotateAction() {
      this.rotateActionActive = true;
      this.rotateActionTime = 0;
      var _miniDurScale = this.p.isMini ? 1 / 1.4 : 1;
      this.rotateActionDuration = 0.39 / d * _miniDurScale;
      this.rotateActionStart = this._rotation;
      this.rotateActionTotal = Math.PI * this.flipMod();
    }
  }, {
    key: "updateDashRotation",
    value: function updateDashRotation(dt) {
      var spinSpeed = Math.PI * 6.0 * this.flipMod();
      this._rotation += spinSpeed * dt;
    }
  }, {
    key: "stopRotation",
    value: function stopRotation() {
      this.rotateActionActive = false;
    }
  }, {
    key: "updateRotateAction",
    value: function updateRotateAction(_0x98044d) {
      if (!this.rotateActionActive) {
        return;
      }
      this.rotateActionTime += _0x98044d;
      if (this.rotateActionTime >= this.rotateActionDuration) {
        this.rotateActionActive = false;
      }
      var _0xb1cb91 = Math.min(this.rotateActionTime / this.rotateActionDuration, 1);
      this._rotation = this.rotateActionStart + this.rotateActionTotal * _0xb1cb91;
    }
  }, {
    key: "convertToClosestRotation",
    value: function convertToClosestRotation() {
      var _0x5f531c = Math.PI / 2;
      return Math.round(this._rotation / _0x5f531c) * _0x5f531c;
    }
  }, {
    key: "slerp2D",
    value: function slerp2D(startAngle, endAngle, t) {
      var halfStart = startAngle * 0.5;
      var halfEnd = endAngle * 0.5;
      var cosStart = Math.cos(halfStart);
      var sinStart = Math.sin(halfStart);
      var cosEnd = Math.cos(halfEnd);
      var sinEnd = Math.sin(halfEnd);
      var dot = cosStart * cosEnd + sinStart * sinEnd;
      var weightStart, weightEnd;
      if (dot < 0.0) {
        dot = -dot;
        sinEnd = -sinEnd;
        cosEnd = -cosEnd;
      }
      if (1.0 - dot > 0.0001) {
        var theta = Math.acos(dot);
        var sinTheta = Math.sin(theta);
        weightStart = Math.sin(theta * (1.0 - t)) / sinTheta;
        weightEnd = Math.sin(theta * t) / sinTheta;
      } else {
        weightStart = 1.0 - t;
        weightEnd = t;
      }
      var interpSin = sinStart * weightStart + sinEnd * weightEnd;
      var interpCos = cosStart * weightStart + cosEnd * weightEnd;
      var out = Math.atan2(interpSin, interpCos);
      return out + out;
    }
  }, {
    key: "updateGroundRotation",
    value: function updateGroundRotation(_0x5c24f7) {
      if (this.p.isBall || this.p.isWave || this.p.isSpider) {
        return;
      }
      var _0x183c2a = this.convertToClosestRotation();
      var _0x108955 = 0.47250000000000003;
      var _0x17a9a6 = Math.min(_0x5c24f7 * 1, _0x108955 * _0x5c24f7);
      this._rotation = this.slerp2D(this._rotation, _0x183c2a, _0x17a9a6);
    }
  }, {
    key: "updateBallRoll",
    value: function updateBallRoll(_0x1dd8af, onSurface) {
      var gravityDir = this.p.gravityFlipped ? -1 : 1;
      var rollDir = this.p.mirrored ? -gravityDir : gravityDir;
      var speedFactor = onSurface ? 0.5 : 0.35;
      var miniRollScale = this.p.isMini ? 1 / 0.8 : 1;
      this._rotation += _0x1dd8af / (g / 2) * gravityDir * speedFactor * miniRollScale;
    }
  }, {
    key: "updateShipRotation",
    value: function updateShipRotation(_0x217ad3) {
      var _0x48f422 = -(this.p.y - this.p.lastY);
      var _0x58cb3a = _0x217ad3 * 10.3860036;
      if (_0x58cb3a * _0x58cb3a + _0x48f422 * _0x48f422 >= _0x217ad3 * 0.6) {
        var _0x5e6a2b = Math.atan2(_0x48f422, _0x58cb3a);
        var _0x2371ed = 0.15;
        var _0x1857d4 = Math.min(_0x217ad3 * 1, _0x2371ed * _0x217ad3);
        this._rotation = this.slerp2D(this._rotation, _0x5e6a2b, _0x1857d4);
      }
    }
  }, {
    key: "playerIsFalling",
    value: function playerIsFalling() {
      if (this.p.gravityFlipped) {
        return this.p.yVelocity > p;
      } else {
        return this.p.yVelocity < p;
      }
    }
  }, {
    key: "updateJump",
    value: function updateJump(_0x3d1c6f) {
      if (this.p.pendingVelocity !== null) {
        this.p.yVelocity = this.p.pendingVelocity;
        this.p.pendingVelocity = null;
      }
      if (this.p.isDashing) {
        if (!this.p.upKeyDown || this.p.onGround) {
          this.p.isDashing = false;
          this.p.dashYVelocity = 0;
        } else {
          this.p.yVelocity = this.p.dashYVelocity;
          return;
        }
      }
      if (this.p.isFlying) {
        this._updateFlyJump(_0x3d1c6f);
      } else if (this.p.isWave) {
        this._updateWaveJump();
      } else if (this.p.isBall) {
        this._updateBallJump(_0x3d1c6f);
      } else if (this.p.isUfo) {
        this._updateUfoJump(_0x3d1c6f);
      } else if (this.p.isSpider) {
        this._updateSpiderJump(_0x3d1c6f);
      } else if (this.p.upKeyDown && this.p.canJump && !this.p.touchingRing) {
        this.p.isJumping = true;
        this.p.onGround = false;
        this.p.canJump = false;
        this.p.upKeyPressed = false;
        this.p.queuedHold = false;
        this.p.yVelocity = this.flipMod() * 22.360064 * (this.p.isMini ? 0.8 : 1);
        this.runRotateAction();
      } else if (this.p.isJumping) {
        this.p.yVelocity -= p * _0x3d1c6f * this.flipMod();
        if (this.playerIsFalling()) {
          this.p.isJumping = false;
          this.p.onGround = false;
        }
      } else {
        if (this.playerIsFalling()) {
          this.p.canJump = false;
        }
        this.p.yVelocity -= p * _0x3d1c6f * this.flipMod();
        if (this.p.gravityFlipped) {
          this.p.yVelocity = Math.min(this.p.yVelocity, 30);
        } else {
          this.p.yVelocity = Math.max(this.p.yVelocity, -30);
        }
        if (this._isFallingPastThreshold() && !this.rotateActionActive) {
          this.runRotateAction();
        }
        if (this.playerIsFalling()) {
          var _0x47ed2a;
          _0x47ed2a = this.p.gravityFlipped ? this.p.yVelocity > p * 2 : this.p.yVelocity < -(p * 2);
          if (_0x47ed2a) {
            this.p.onGround = false;
          }
        }
      }
    }
  }, {
    key: "_updateFlyJump",
    value: function _updateFlyJump(_0x130c46) {
      var _shipMiniScale = this.p.isMini ? 1.176470588 : 1;
      var _0x203040 = 0.8;
      if (this.p.upKeyDown) {
        _0x203040 = -1;
      }
      if (!this.p.upKeyDown && !this.playerIsFalling()) {
        _0x203040 = 1.2;
      }
      var _0x2d237f = 0.4;
      if (this.p.upKeyDown && this.playerIsFalling()) {
        _0x2d237f = 0.5;
      }
      this.p.yVelocity -= p * _0x130c46 * this.flipMod() * _0x203040 * _0x2d237f * _shipMiniScale;
      if (this.p.upKeyDown) {
        this.p.onGround = false;
      }
      if (!this.p.wasBoosted) {
        if (this.p.gravityFlipped) {
          this.p.yVelocity = Math.max(this.p.yVelocity, -16 * _shipMiniScale);
          this.p.yVelocity = Math.min(this.p.yVelocity, 12.8 * _shipMiniScale);
        } else {
          this.p.yVelocity = Math.max(this.p.yVelocity, -12.8 * _shipMiniScale);
          this.p.yVelocity = Math.min(this.p.yVelocity, 16 * _shipMiniScale);
        }
      }
    }
  }, {
    key: "_updateBallJump",
    value: function _updateBallJump(_0x2fe319) {
      var _0x144266 = p * 0.6;
      if (this.p.upKeyPressed && this.p.canJump) {
        var _0x47d739 = this.flipMod();
        this.p.upKeyPressed = false;
        this.p.yVelocity = _0x47d739 * 22.360064 * (this.p.isMini ? 0.8 : 1);
        this.flipGravity(!this.p.gravityFlipped);
        this.p.onGround = false;
        this.p.canJump = false;
        this.p.yVelocity *= 0.6;
        return;
      }
      if (this.playerIsFalling()) {
        this.p.canJump = false;
      }
      this.p.yVelocity -= _0x144266 * _0x2fe319 * this.flipMod();
      if (this.p.gravityFlipped) {
        this.p.yVelocity = Math.min(this.p.yVelocity, 30);
      } else {
        this.p.yVelocity = Math.max(this.p.yVelocity, -30);
      }
      if (this.playerIsFalling()) {
        var _0x1439be = this.p.gravityFlipped ? this.p.yVelocity > p * 2 : this.p.yVelocity < -(p * 2);
        if (_0x1439be) {
          this.p.onGround = false;
        }
      }
    }
  }, {
    key: "_updateWaveJump",
    value: function _updateWaveJump() {
      var _baseSpeed = this.p.isMini ? 22.7720072 : 11.3860036;
      var _speedMod = playerSpeed / 11.540004;
      var _waveVel = _baseSpeed * _speedMod;
      var isPushingUp = this.p.upKeyDown;
      var _0x312a7f = (isPushingUp ? 1 : -1) * this.flipMod() * _waveVel;
      if (this.p.onGround || this.p.onCeiling) {
        var movingAwayFromCeiling = this.p.onCeiling && !isPushingUp;
        var movingAwayFromFloor = this.p.onGround && isPushingUp;
        if (movingAwayFromCeiling || movingAwayFromFloor) {
          this.p.onGround = false;
          this.p.onCeiling = false;
        } else {
          _0x312a7f = 0;
        }
      }
      this.p.yVelocity = _0x312a7f;
      this.p.canJump = false;
      this.p.isJumping = false;
      var _waveAngle = this.p.isMini ? Math.atan(0.5) : Math.PI / 4;
      this._rotation = _0x312a7f === 0 ? 0 : _0x312a7f > 0 ? -_waveAngle : _waveAngle;
    }
  }, {
    key: "_updateUfoJump",
    value: function _updateUfoJump(_dt) {
      var _ufoJump = this.p.isMini ? 13.296 : 13.742;
      var _ufoThreshold = 3.832796;
      var _ufoFastGrav = this.p.isMini ? 0.634524 : 0.540121;
      var _ufoSlowGrav = this.p.isMini ? 0.421624 : 0.359973;
      var _ufoUpVel = this.p.yVelocity * this.flipMod();
      var _ufoGrav = _ufoUpVel > _ufoThreshold ? _ufoFastGrav : _ufoSlowGrav;
      this.p.yVelocity -= p * _ufoGrav * _dt * this.flipMod();
      if (this.p.upKeyPressed) {
        this.p.upKeyPressed = false;
        this.p.yVelocity = _ufoJump * this.flipMod();
        this.p.onGround = false;
        this.p.canJump = false;
        this.p.isJumping = true;
        try {
          this._flyParticle2Emitter.explode(6, this._scene._playerWorldX, b(this.p.y) + (this.p.gravityFlipped ? -18 : 18));
        } catch (e) {}
      }
      if (!this.p.wasBoosted) {
        var _ufoMaxUp = this.p.isMini ? 18.824 : 16;
        var _ufoMaxFall = this.p.isMini ? 15.058 : 12.8;
        if (this.p.gravityFlipped) {
          this.p.yVelocity = Math.max(this.p.yVelocity, -_ufoMaxUp);
          this.p.yVelocity = Math.min(this.p.yVelocity, _ufoMaxFall);
        } else {
          this.p.yVelocity = Math.max(this.p.yVelocity, -_ufoMaxFall);
          this.p.yVelocity = Math.min(this.p.yVelocity, _ufoMaxUp);
        }
      }
      if (this.p.upKeyDown) {
        this.p.onGround = false;
      }
      if (this.p.isJumping && this.playerIsFalling()) {
        this.p.isJumping = false;
      }
    }
  }, {
    key: "_updateSpiderJump",
    value: function _updateSpiderJump(dt) {
      var playerSize = this.p.isMini ? 18 : 30;
      var _miniGrav = this.p.isMini ? 1.4 : 1;
      var _gravAmt = p * 0.6 * _miniGrav;
      if (this.p.upKeyPressed && this.p.canJump) {
        this.p.upKeyPressed = false;
        this.p.queuedHold = false;
        var _floorY = this._gameLayer.getFloorY();
        var _ceilY = this._gameLayer.getCeilingY();
        var nearestSurfaceY;
        if (!this.p.gravityFlipped) {
          nearestSurfaceY = _ceilY !== null ? _ceilY : Infinity;
          var playerWorldX = this._scene._playerWorldX;
          var nearbyObjects = this._gameLayer.getNearbySectionObjects(playerWorldX);
          var _iterator16 = _createForOfIteratorHelper(nearbyObjects),
            _step16;
          try {
            for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
              var obj = _step16.value;
              if (obj.type === "solid" && obj.y < this.p.y) {
                var objTop = obj.y - obj.h / 2;
                if (objTop > nearestSurfaceY || nearestSurfaceY === null) {
                  nearestSurfaceY = objTop;
                }
              }
            }
          } catch (err) {
            _iterator16.e(err);
          } finally {
            _iterator16.f();
          }
        } else {
          nearestSurfaceY = _floorY;
          var _playerWorldX = this._scene._playerWorldX;
          var _nearbyObjects = this._gameLayer.getNearbySectionObjects(_playerWorldX);
          var _iterator17 = _createForOfIteratorHelper(_nearbyObjects),
            _step17;
          try {
            for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
              var _obj = _step17.value;
              if (_obj.type === "solid" && _obj.y > this.p.y) {
                var objBottom = _obj.y + _obj.h / 2;
                if (objBottom < nearestSurfaceY || nearestSurfaceY === null) {
                  nearestSurfaceY = objBottom;
                }
              }
            }
          } catch (err) {
            _iterator17.e(err);
          } finally {
            _iterator17.f();
          }
        }
        if (!this.p.gravityFlipped) {
          if (isFinite(nearestSurfaceY)) {
            this.p.y = nearestSurfaceY - playerSize;
            this.flipGravity(true, 1.0);
            this.p.yVelocity = 0;
          } else {
            this.p.yVelocity = playerSpeed;
          }
        } else {
          if (isFinite(nearestSurfaceY)) {
            this.p.y = nearestSurfaceY + playerSize;
            this.flipGravity(false, 1.0);
            this.p.yVelocity = 0;
          } else {
            this.p.yVelocity = -playerSpeed;
          }
        }
        this.p.onGround = false;
        this.p.canJump = false;
        this.p.isJumping = false;
        this.runRotateAction();
        return;
      }
      if (this.playerIsFalling()) {
        this.p.canJump = false;
      }
      this.p.yVelocity -= _gravAmt * dt * this.flipMod();
      if (this.p.gravityFlipped) {
        this.p.yVelocity = Math.min(this.p.yVelocity, 30);
      } else {
        this.p.yVelocity = Math.max(this.p.yVelocity, -30);
      }
      if (this.playerIsFalling()) {
        var _pastThreshold = this.p.gravityFlipped ? this.p.yVelocity > p * 2 : this.p.yVelocity < -(p * 2);
        if (_pastThreshold) {
          this.p.onGround = false;
        }
      }
    }
  }, {
    key: "checkCollisions",
    value: function checkCollisions(_0x2f5078) {
      var _this3 = this;
      this.noclipStats.totalFrames++;
      this.p.diedThisFrame = false;
      var playerSize = this.p.isMini ? 18 : 30;
      var waveHitSize = this.p.isMini ? 6 : 9;
      var pieceWidth = _0x2f5078 + centerX;
      var playersY = this.p.y;
      var playersLastY = this.p.lastY;
      var gamemodeAddition = this.p.isFlying || this.p.isWave || this.p.isUfo ? 12 : 20;
      this.p.collideTop = 0;
      this.p.collideBottom = 0;
      this.p.onCeiling = false;
      this.p.touchingRing = false;
      var _0x30410f = false;
      var _boostedThisStep = false;
      var _0x198534 = this._gameLayer.getNearbySectionObjects(pieceWidth);
      // Hot path: 240 FPS × N nearby objects. Plain index loop avoids per-call
      // iterator+state allocation that Babel's _createForOfIteratorHelper does.
      var _step18 = { value: null };
      try {
        var _loop3 = function _loop3() {
            var gameObj = _step18.value;
            var halfW = gameObj.w / 2;
            var halfH = gameObj.h / 2;
            var left = gameObj.x - halfW;
            var right = gameObj.x + halfW;
            var top = gameObj.y - halfH;
            var bottom = gameObj.y + halfH;
            var _broadSize = _this3.p.isWave ? waveHitSize : playerSize;
            var _hasCircleHitbox = gameObj.hitbox_radius !== undefined && gameObj.hitbox_radius !== null;
            var _broadPhaseHit;
            if (_hasCircleHitbox) {
              var _dx = pieceWidth - gameObj.x;
              var _dy = playersY - gameObj.y;
              _broadPhaseHit = _dx * _dx + _dy * _dy <= (gameObj.hitbox_radius + _broadSize) * (gameObj.hitbox_radius + _broadSize);
            } else if (gameObj.rotationDegrees) {
              // Rotated rect: transform player into object's local frame for tight test
              // (avoids the over-conservative inflated AABB that caused ghost deaths)
              if (gameObj._cosCache === undefined) {
                var _rad = gameObj.rotationDegrees * Math.PI / 180;
                gameObj._cosCache = Math.cos(_rad);
                gameObj._sinCache = Math.sin(_rad);
              }
              var cos = gameObj._cosCache;
              var sin = gameObj._sinCache;
              var ldx = pieceWidth - gameObj.x;
              var ldy = playersY - gameObj.y;
              var localX = ldx * cos + ldy * sin;
              var localY = -ldx * sin + ldy * cos;
              // Player is an axis-aligned box in WORLD space; its half-extent along each
              // local axis is _broadSize*(|cos|+|sin|), not _broadSize (up to ~41% under at 45°)
              var _inflate = _broadSize * (Math.abs(cos) + Math.abs(sin));
              _broadPhaseHit = Math.abs(localX) <= halfW + _inflate && Math.abs(localY) <= halfH + _inflate;
            } else {
              _broadPhaseHit = !(pieceWidth + _broadSize <= left) && !(pieceWidth - _broadSize >= right) && !(playersY + _broadSize <= top) && !(playersY - _broadSize >= bottom);
            }
            if (_broadPhaseHit) {
              var _colType = gameObj.type;
              if (_this3.p.ignorePortals && (_colType.indexOf("portal_") === 0 || _colType === "speed")) {
                gameObj.activated = true;
                return 0; // continue — consume portals silently during checkpoint restore
              }
              if (_colType === "portal_fly") {
                if (!gameObj.activated) {
                  gameObj.activated = true;
                  _this3._playPortalShine(gameObj);
                  _this3.exitBallMode();
                  _this3.exitWaveMode();
                  _this3.exitShipMode();
                  _this3.exitUfoMode();
                  _this3.enterShipMode(gameObj);
                }
              } else if (_colType === portalWaveType) {
                if (!gameObj.activated) {
                  gameObj.activated = true;
                  _this3._playPortalShine(gameObj);
                  _this3.exitBallMode();
                  _this3.exitShipMode();
                  _this3.exitWaveMode();
                  _this3.exitUfoMode();
                  _this3.enterWaveMode(gameObj);
                }
              } else if (_colType === portalUfoType) {
                if (!gameObj.activated) {
                  gameObj.activated = true;
                  _this3._playPortalShine(gameObj);
                  _this3.exitBallMode();
                  _this3.exitWaveMode();
                  _this3.exitShipMode();
                  _this3.enterUfoMode(gameObj);
                }
              } else if (_colType === "portal_cube") {
                if (!gameObj.activated) {
                  gameObj.activated = true;
                  _this3._playPortalShine(gameObj);
                  _this3.exitShipMode();
                  _this3.exitBallMode();
                  _this3.exitWaveMode();
                  _this3.exitUfoMode();
                }
              } else if (_colType === "portal_ball") {
                if (!gameObj.activated) {
                  gameObj.activated = true;
                  _this3._playPortalShine(gameObj);
                  _this3.exitShipMode();
                  _this3.exitWaveMode();
                  _this3.exitUfoMode();
                  _this3.exitBallMode();
                  _this3.enterBallMode(gameObj);
                }
              } else if (_colType === "portal_spider") {
                if (!gameObj.activated) {
                  gameObj.activated = true;
                  _this3._playPortalShine(gameObj);
                  _this3.exitShipMode();
                  _this3.exitBallMode();
                  _this3.exitWaveMode();
                  _this3.exitUfoMode();
                  _this3.exitSpiderMode();
                  _this3.enterSpiderMode(gameObj);
                }
              } else if (_colType === "portal_gravity_down") {
                if (!gameObj.activated) {
                  gameObj.activated = true;
                  _this3._playPortalShine(gameObj, 2);
                  _this3.flipGravity(false, 0.5);
                }
              } else if (_colType === "portal_gravity_up") {
                if (!gameObj.activated) {
                  gameObj.activated = true;
                  _this3._playPortalShine(gameObj, 2);
                  _this3.flipGravity(true, 0.5);
                }
              } else if (_colType === "portal_gravity_toggle") {
                if (!gameObj.activated) {
                  gameObj.activated = true;
                  _this3._playPortalShine(gameObj, 2);
                  _this3.flipGravity(!_this3.p.gravityFlipped, 0.5);
                }
              } else if (_colType === "portal_mirror_on") {
                if (!gameObj.activated) {
                  gameObj.activated = true;
                  _this3._playPortalShine(gameObj);
                  _this3.p.mirrored = true;
                }
              } else if (_colType === "portal_mirror_off") {
                if (!gameObj.activated) {
                  gameObj.activated = true;
                  _this3._playPortalShine(gameObj);
                  _this3.p.mirrored = false;
                }
              } else if (_colType === "portal_mini_on") {
                if (!gameObj.activated) {
                  gameObj.activated = true;
                  _this3._playPortalShine(gameObj);
                  _this3.p.isMini = true;
                }
              } else if (_colType === "portal_mini_off") {
                if (!gameObj.activated) {
                  gameObj.activated = true;
                  _this3._playPortalShine(gameObj);
                  _this3.p.isMini = false;
                }
              } else if (_colType === "portal_dual_on") {
                if (!gameObj.activated) {
                  gameObj.activated = true;
                  _this3._playPortalShine(gameObj);
                  _this3._scene._enableDualMode();
                }
              } else if (_colType === "portal_dual_off") {
                if (!gameObj.activated) {
                  gameObj.activated = true;
                  _this3._playPortalShine(gameObj);
                  _this3._scene._disableDualMode();
                }
              } else if (_colType === speedType) {
                if (!gameObj.activated) {
                  gameObj.activated = true;
                  _this3._playPortalShine(gameObj);
                  if (typeof gameObj.speedValue === "number") {
                    playerSpeed = gameObj.speedValue;
                  }
                }
              } else if (_colType === jumpPadType) {
                if (!gameObj.activated) {
                  gameObj.activated = true;
                  var _padId = gameObj.padId;
                  if (_padId === 67) {
                    // Per-player cooldown so dual mode doesn't lose a pad bounce
                    // when both players hit blue pads within 20ms.
                    var now = Date.now();
                    if (!_this3._lastBluePadTime) _this3._lastBluePadTime = 0;
                    if (now - _this3._lastBluePadTime < 20) {
                      return 0; // continue
                    }
                    _this3._lastBluePadTime = now;
                  }
                  var _grav = 2;
                  var _fm = _this3.flipMod();
                  var _padVel = 0;
                  var _padFlip = false;
                  var _padNextTickVel = null;
                  if (_padId === 3005) {
                    var _spFloor = _this3._gameLayer.getFloorY();
                    var _spCeil = _this3._gameLayer.getCeilingY() || f;
                    if (!_this3.p.gravityFlipped) {
                      _this3.p.y = _spCeil - playerSize;
                    } else {
                      _this3.p.y = _spFloor + playerSize;
                    }
                    _this3.flipGravity(!_this3.p.gravityFlipped, 1.0);
                    _this3.p.yVelocity = 0;
                    _this3.p.onGround = false;
                    _this3.p.canJump = false;
                    _this3.p.isJumping = false;
                    _boostedThisStep = true;
                  } else {
                    if (_this3.p.isFlying) {
                      if (_padId === 35) {
                        _padVel = 16 * _grav;
                        _padNextTickVel = _fm * 8 * _grav;
                      } else if (_padId === 140) {
                        _padVel = 5.6 * _grav;
                      } else if (_padId === 1332) {
                        _padVel = 10.08 * _grav;
                      } else if (_padId === 67) {
                        _padVel = 15.0 * _grav;
                        _padFlip = true;
                      }
                    } else if (_this3.p.isUfo) {
                      if (_padId === 35) {
                        _padVel = _this3.p.isMini ? 25.6 : 16;
                      } else if (_padId === 140) {
                        _padVel = _this3.p.isMini ? 10.237037 : 12.8;
                      } else if (_padId === 1332) {
                        _padVel = _this3.p.isMini ? 25.6 : 16;
                      } else if (_padId === 67) {
                        _padVel = _this3.p.isMini ? 20.48 : 25.6;
                        _padFlip = true;
                      }
                    } else if (_this3.p.isBall) {
                      if (_padId === 35) {
                        _padVel = 9.6 * _grav;
                      } else if (_padId === 140) {
                        _padVel = 6.72 * _grav;
                      } else if (_padId === 1332) {
                        _padVel = 12 * _grav;
                      } else if (_padId === 67) {
                        _padVel = 10.0 * _grav;
                        _padFlip = true;
                      }
                      if (_this3.p.isMini) {
                        _padVel *= 0.8;
                      }
                    } else {
                      if (_padId === 35) {
                        _padVel = 16 * _grav;
                      } else if (_padId === 140) {
                        _padVel = 10.4 * _grav;
                      } else if (_padId === 1332) {
                        _padVel = 20 * _grav;
                      } else if (_padId === 67) {
                        _padVel = 15.0 * _grav;
                        _padFlip = true;
                      }
                      if (!_this3.p.isUfo && !_this3.p.isSpider && !_this3.p.isRobot && _this3.p.isMini) {
                        _padVel *= 0.8;
                      }
                    }
                    _this3.p.isJumping = true;
                    _this3.p.onGround = false;
                    _this3.p.canJump = false;
                    _this3.p.yVelocity = _fm * _padVel;
                    if (_padFlip) {
                      _this3.flipGravity(!_this3.p.gravityFlipped);
                    }
                    if (_padNextTickVel !== null) {
                      _this3.p.pendingVelocity = _padNextTickVel;
                    }
                    _this3.runRotateAction();
                    _boostedThisStep = true;
                  }
                }
              } else if (_colType === jumpRingType) {
                var _orbId = gameObj.orbId;
                var _isDash = _orbId === 1704 || _orbId === 1751;
                var justPressed = _this3.p.upKeyDown && !_this3.p.wasUpKeyDown;
                var _needsClick = _this3.p.isFlying || _this3.p.isUfo ? justPressed : justPressed || _this3.p.queuedHold && _this3.p.upKeyDown;
                _this3.p.touchingRing = true;
                if (!gameObj.activated && _needsClick) {
                  if (_isDash) {
                    gameObj._dashHoldTicks = (gameObj._dashHoldTicks || 0) + 1;
                    if (gameObj._dashHoldTicks < 2) {
                      gameObj.activated = true;
                      var _dashAngleDeg = gameObj.orbRotation || 0;
                      var _dashRad = _dashAngleDeg * Math.PI / 180;
                      var _maxSin = Math.sin(70 * Math.PI / 180);
                      var _rawSin = -Math.sin(_dashRad);
                      var _dashSin = Math.max(-_maxSin, Math.min(_maxSin, _rawSin));
                      var _dashSpeed = 18;
                      var _dashVelY = _dashSin * _dashSpeed * _this3.flipMod();
                      if (_orbId === 1751) {
                        _this3.flipGravity(!_this3.p.gravityFlipped);
                      }
                      _this3.p.isDashing = true;
                      _this3.p.dashYVelocity = _dashVelY;
                      _this3.p.yVelocity = _dashVelY;
                      _this3.p.onGround = false;
                      _this3.p.canJump = false;
                      _this3.p.isJumping = false;
                      _this3.p.upKeyPressed = false;
                      _this3.p.queuedHold = false;
                      _this3.runRotateAction();
                      _boostedThisStep = true;
                      try {
                        var _iterator19 = _createForOfIteratorHelper(_this3._gameLayer._orbSprites || []),
                          _step19;
                        try {
                          for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
                            var _orbSpr = _step19.value;
                            if (_orbSpr && _orbSpr._eeWorldX !== undefined && Math.abs(_orbSpr._eeWorldX - gameObj.x) < 10) {
                              _orbSpr._hitTime = Date.now();
                            }
                          }
                        } catch (err) {
                          _iterator19.e(err);
                        } finally {
                          _iterator19.f();
                        }
                      } catch (e) {}
                    }
                  } else {
                    gameObj.activated = true;
                    var _fm2 = _this3.flipMod();
                    var _cubeJump = 22.360064;
                    var _orbVel = 0;
                    var _flipBefore = false;
                    var _flipAfter = false;
                    if (_orbId === 1594) {
                      _this3.flipGravity(!_this3.p.gravityFlipped);
                      _this3.p.upKeyPressed = false;
                      _this3.p.queuedHold = false;
                      _boostedThisStep = true;
                    } else if (_orbId === 444) {
                      var _spPlayerSize = _this3.p.isMini ? 18 : 30;
                      var _spFloorY = _this3._gameLayer.getFloorY();
                      var _spCeilY = _this3._gameLayer.getCeilingY() || f;
                      _this3.p.upKeyPressed = false;
                      _this3.p.queuedHold = false;
                      if (!_this3.p.gravityFlipped) {
                        _this3.p.y = _spCeilY - _spPlayerSize;
                        _this3.flipGravity(true, 1.0);
                      } else {
                        _this3.p.y = _spFloorY + _spPlayerSize;
                        _this3.flipGravity(false, 1.0);
                      }
                      _this3.p.yVelocity = 0;
                      _this3.p.onGround = false;
                      _this3.p.canJump = false;
                      _this3.p.isJumping = false;
                      _this3.runRotateAction();
                      _boostedThisStep = true;
                      try {
                        var _iterator20 = _createForOfIteratorHelper(_this3._gameLayer._orbSprites || []),
                          _step20;
                        try {
                          for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
                            var _orbSpr2 = _step20.value;
                            if (_orbSpr2 && _orbSpr2._eeWorldX !== undefined && Math.abs(_orbSpr2._eeWorldX - gameObj.x) < 10) {
                              _orbSpr2._hitTime = Date.now();
                            }
                          }
                        } catch (err) {
                          _iterator20.e(err);
                        } finally {
                          _iterator20.f();
                        }
                      } catch (e) {}
                    } else if (_this3.p.isWave) {
                      if (_orbId === 84 || _orbId === 1022) {
                        _this3.flipGravity(!_this3.p.gravityFlipped);
                        _this3.p.upKeyPressed = false;
                        _this3.p.queuedHold = false;
                        _boostedThisStep = true;
                        try {
                          var _iterator21 = _createForOfIteratorHelper(_this3._gameLayer._orbSprites || []),
                            _step21;
                          try {
                            for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
                              var _orbSpr3 = _step21.value;
                              if (_orbSpr3 && _orbSpr3._eeWorldX !== undefined && Math.abs(_orbSpr3._eeWorldX - gameObj.x) < 10) {
                                _orbSpr3._hitTime = Date.now();
                              }
                            }
                          } catch (err) {
                            _iterator21.e(err);
                          } finally {
                            _iterator21.f();
                          }
                        } catch (e) {}
                      }
                    } else {
                      if (_this3.p.isFlying) {
                        if (_orbId === 36) {
                          _orbVel = 16;
                        } else if (_orbId === 141) {
                          _orbVel = _cubeJump * 0.37;
                        } else if (_orbId === 1333) {
                          _orbVel = _cubeJump;
                        } else if (_orbId === 84) {
                          _orbVel = _cubeJump * 0.4;
                          _flipAfter = true;
                        } else if (_orbId === 1022) {
                          _orbVel = _cubeJump * -0.7;
                          _flipAfter = true;
                        } else if (_orbId === 1330) {
                          _orbVel = -28;
                        }
                      } else if (_this3.p.isSwing) {
                        var _swingBase = _cubeJump * 0.6;
                        var _spiderBase = _cubeJump * 0.7;
                        if (_orbId === 36) {
                          _orbVel = _swingBase;
                        } else if (_orbId === 141) {
                          _orbVel = _swingBase * 0.72;
                        } else if (_orbId === 1333) {
                          _orbVel = _swingBase * 1.38;
                        } else if (_orbId === 84) {
                          _orbVel = _swingBase * 0.4;
                          _flipAfter = true;
                        } else if (_orbId === 1022) {
                          _orbVel = _spiderBase * -1;
                          _flipAfter = true;
                        } else if (_orbId === 1330) {
                          _orbVel = -28;
                        }
                      } else if (_this3.p.isBall) {
                        var _ballBase = _cubeJump * 0.7 * (_this3.p.isMini ? 0.8 : 1);
                        if (_orbId === 36) {
                          _orbVel = _ballBase;
                        } else if (_orbId === 141) {
                          _orbVel = _ballBase * 0.77;
                        } else if (_orbId === 1333) {
                          _orbVel = _ballBase * 1.34;
                        } else if (_orbId === 84) {
                          _orbVel = _ballBase * 0.4;
                          _flipAfter = true;
                        } else if (_orbId === 1022) {
                          _orbVel = _ballBase * -1;
                          _flipAfter = true;
                        } else if (_orbId === 1330) {
                          _orbVel = -30;
                        }
                      } else if (_this3.p.isUfo) {
                        var _ufoYellowOrb = _this3.p.isMini ? 17.888 : 22.36;
                        var _ufoPinkOrb = _this3.p.isMini ? 7.674 : 9.592;
                        var _ufoBlueOrb = (_this3.p.isMini ? -7.155 : -8.944) * 2;
                        if (_orbId === 36) {
                          _orbVel = _ufoYellowOrb;
                        } else if (_orbId === 141) {
                          _orbVel = _ufoPinkOrb;
                        } else if (_orbId === 1333) {
                          _orbVel = _cubeJump * 1.02;
                        } else if (_orbId === 84) {
                          _orbVel = _ufoBlueOrb;
                          _flipAfter = true;
                        } else if (_orbId === 1022) {
                          _orbVel = -_ufoYellowOrb * 2;
                          _flipAfter = true;
                        } else if (_orbId === 1330) {
                          _orbVel = -22.4;
                        }
                      } else if (_this3.p.isRobot) {
                        if (_orbId === 36) {
                          _orbVel = _cubeJump * 0.9;
                        } else if (_orbId === 141) {
                          _orbVel = _cubeJump * 0.72;
                        } else if (_orbId === 1333) {
                          _orbVel = _cubeJump * 1.28;
                        } else if (_orbId === 84) {
                          _orbVel = _cubeJump * 0.4;
                          _flipAfter = true;
                        } else if (_orbId === 1022) {
                          _orbVel = _cubeJump * -1;
                          _flipAfter = true;
                        } else if (_orbId === 1330) {
                          _orbVel = -30;
                        }
                      } else if (_this3.p.isSpider) {
                        var _spiderBase2 = _cubeJump * 0.7;
                        if (_orbId === 36) {
                          _orbVel = _spiderBase2;
                        } else if (_orbId === 141) {
                          _orbVel = _spiderBase2 * 0.77;
                        } else if (_orbId === 1333) {
                          _orbVel = _spiderBase2 * 1.34;
                        } else if (_orbId === 84) {
                          _orbVel = _spiderBase2 * 0.4;
                          _flipAfter = true;
                        } else if (_orbId === 1022) {
                          _orbVel = _spiderBase2 * -1;
                          _flipAfter = true;
                        } else if (_orbId === 1330) {
                          _orbVel = -30;
                        }
                      } else {
                        var _cubeOrbJump = _cubeJump * (_this3.p.isMini ? 0.8 : 1);
                        if (_orbId === 36) {
                          _orbVel = _cubeOrbJump;
                        } else if (_orbId === 141) {
                          _orbVel = _cubeOrbJump * 0.72;
                        } else if (_orbId === 1333) {
                          _orbVel = _cubeOrbJump * 1.38;
                        } else if (_orbId === 84) {
                          _orbVel = _cubeOrbJump;
                          _flipAfter = true;
                        } else if (_orbId === 1022) {
                          _orbVel = _cubeOrbJump * 1;
                          _flipBefore = true;
                        } else if (_orbId === 1330) {
                          _orbVel = -18;
                        }
                      }
                      _this3.p.isJumping = true;
                      _this3.p.onGround = false;
                      _this3.p.canJump = false;
                      _this3.p.upKeyPressed = false;
                      _this3.p.queuedHold = false;
                      if (_flipBefore) {
                        _this3.flipGravity(!_this3.p.gravityFlipped);
                        _this3.p.yVelocity = _this3.flipMod() * _orbVel;
                      } else {
                        _this3.p.yVelocity = _fm2 * _orbVel;
                      }
                      if (_orbId === 1330) {
                        _this3.p.wasBoosted = false;
                      }
                      _this3.runRotateAction();
                      _boostedThisStep = true;
                      if (_flipAfter) {
                        _this3.flipGravity(!_this3.p.gravityFlipped);
                      }
                      try {
                        var _iterator22 = _createForOfIteratorHelper(_this3._gameLayer._orbSprites || []),
                          _step22;
                        try {
                          for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
                            var _orbSpr4 = _step22.value;
                            if (_orbSpr4 && _orbSpr4._eeWorldX !== undefined && Math.abs(_orbSpr4._eeWorldX - gameObj.x) < 10) {
                              _orbSpr4._hitTime = Date.now();
                            }
                          }
                        } catch (err) {
                          _iterator22.e(err);
                        } finally {
                          _iterator22.f();
                        }
                      } catch (e) {}
                    }
                  }
                } else if (_isDash && !_this3.p.upKeyDown) {
                  gameObj._dashHoldTicks = 0;
                }
              } else if (_colType === coinType) {
                if (!gameObj.activated) {
                  gameObj.activated = true;
                  try {
                    var _coinSpr = _this3._gameLayer._coinSprites.find(function (s) {
                      return s && s.active && Math.abs(s._coinWorldX - gameObj.x) < 2 && Math.abs(s._coinWorldY - gameObj.y) < 2;
                    });
                    if (_coinSpr && _coinSpr.scene) {
                      var _startY = _coinSpr.y;
                      _coinSpr.scene.tweens.add({
                        targets: _coinSpr,
                        y: _startY - 70,
                        scaleX: (_coinSpr.scaleX || 1) * 1.3,
                        scaleY: (_coinSpr.scaleY || 1) * 1.3,
                        duration: 180,
                        ease: 'Quad.Out',
                        onComplete: function onComplete() {
                          if (!_coinSpr.scene) return;
                          _coinSpr.scene.tweens.add({
                            targets: _coinSpr,
                            y: _startY + 600,
                            alpha: 0,
                            duration: 1200,
                            ease: 'Quad.In',
                            onComplete: function onComplete() {
                              try {
                                _coinSpr.setVisible(false);
                              } catch (e) {}
                            }
                          });
                        }
                      });
                    }
                  } catch (e) {}
                }
              } else if (_colType === hazardType) {
                if (window.noClip) {
                  _this3.p.diedThisFrame = true;
                  return 0; // continue
                }
                if (_hasCircleHitbox) {
                  var _hdx = pieceWidth - gameObj.x;
                  var _hdy = playersY - gameObj.y;
                  var _hDistSq = _hdx * _hdx + _hdy * _hdy;
                  var _hMinDist = gameObj.hitbox_radius + (_this3.p.isWave ? waveHitSize : playerSize);
                  if (_hDistSq > _hMinDist * _hMinDist) return 0; // continue
                }
                _this3.killPlayer();
                return {
                  v: void 0
                };
              } else if (_colType === solidType) {
                var _0x146a97 = playersY - playerSize + gamemodeAddition;
                var _0x869e42 = playersLastY - playerSize + gamemodeAddition;
                var _0x3e7199 = playersY + playerSize - gamemodeAddition;
                var _0x135a9d = playersLastY + playerSize - gamemodeAddition;
                var _0x55559d = 9;
                var iscolliding;
                if (_hasCircleHitbox) {
                  var _sdx = pieceWidth - gameObj.x;
                  var _sdy = playersY - gameObj.y;
                  var _sDistSq = _sdx * _sdx + _sdy * _sdy;
                  var _sTightRadius = gameObj.hitbox_radius + _0x55559d;
                  iscolliding = _sDistSq <= _sTightRadius * _sTightRadius;
                  left = gameObj.x - gameObj.hitbox_radius;
                  right = gameObj.x + gameObj.hitbox_radius;
                  top = gameObj.y - gameObj.hitbox_radius;
                  bottom = gameObj.y + gameObj.hitbox_radius;
                } else {
                  iscolliding = pieceWidth + _0x55559d > left && pieceWidth - _0x55559d < right && playersY + _0x55559d > top && playersY - _0x55559d < bottom;
                }
                var _0xLandBot = (_this3.p.yVelocity <= 0 || _this3.p.onGround) && (_0x146a97 >= bottom || _0x869e42 >= bottom);
                var _0xLandTop = (_this3.p.yVelocity >= 0 || _this3.p.onGround) && (_0x3e7199 <= top || _0x135a9d <= top);
                var isstandingOnAPlatform = _this3.p.gravityFlipped ? _0xLandTop : _0xLandBot;
                if (iscolliding && !isstandingOnAPlatform) {
                  if (window.noClip) _this3.p.diedThisFrame = true;
                  if (window.noClip || gameObj.objid === 143) return 0; // continue
                  _this3.killPlayer();
                  return {
                    v: void 0
                  };
                }
                if (pieceWidth + playerSize - 5 > left && pieceWidth - playerSize + 5 < right) {
                  if (!_this3.p.gravityFlipped && (_0x146a97 >= bottom || _0x869e42 >= bottom) && (_this3.p.yVelocity <= 0 || _this3.p.onGround)) {
                    _this3.p.y = bottom + playerSize;
                    _this3.hitGround();
                    _0x30410f = true;
                    _this3.p.collideBottom = bottom;
                    if (!_this3.p.isFlying) {
                      _this3._checkSnapJump(gameObj);
                    }
                    return 0; // continue
                  }
                  if (_this3.p.gravityFlipped && !_this3.p.isFlying && (_0x3e7199 <= top || _0x135a9d <= top) && (_this3.p.yVelocity >= 0 || _this3.p.onGround)) {
                    _this3.p.y = top - playerSize;
                    _this3.hitGround();
                    _0x30410f = true;
                    _this3.p.onCeiling = true;
                    _this3.p.collideTop = top;
                    if (!_this3.p.isFlying) {
                      _this3._checkSnapJump(gameObj);
                    }
                    return 0; // continue
                  }
                  if (_this3.p.isUfo) {
                    if (!_this3.p.gravityFlipped && (_0x3e7199 <= top || _0x135a9d <= top) && (_this3.p.yVelocity >= 0 || _this3.p.onGround)) {
                      _this3.p.y = top - playerSize;
                      _this3.hitGround();
                      _this3.p.onCeiling = true;
                      _this3.p.collideTop = top;
                      return 0; // continue
                    }
                    if (_this3.p.gravityFlipped && (_0x146a97 >= bottom || _0x869e42 >= bottom) && (_this3.p.yVelocity <= 0 || _this3.p.onGround)) {
                      _this3.p.y = bottom + playerSize;
                      _this3.hitGround();
                      _0x30410f = true;
                      _this3.p.onCeiling = true;
                      _this3.p.collideTop = bottom;
                      return 0; // continue
                    }
                    return 0; // continue
                  }
                  if ((_0x3e7199 <= top || _0x135a9d <= top) && (_this3.p.yVelocity >= 0 || _this3.p.onGround) && _this3.p.isFlying) {
                    _this3.p.y = top - playerSize;
                    _this3.hitGround();
                    _this3.p.onCeiling = true;
                    _this3.p.collideTop = top;
                    return 0; // continue
                  }
                  if (!_this3.p.gravityFlipped && (_0x3e7199 <= top || _0x135a9d <= top) && _this3.p.yVelocity >= 0) {
                    if (iscolliding) {
                      if (window.noClip) _this3.p.diedThisFrame = true;
                      if (window.noClip || gameObj.objid === 143) return 0; // continue
                      _this3.killPlayer();
                      return {
                        v: void 0
                      };
                    }
                    return 0; // continue
                  }
                  if (_this3.p.gravityFlipped && (_0x146a97 >= bottom || _0x869e42 >= bottom) && (_this3.p.yVelocity <= 0 || _this3.p.onGround) && _this3.p.isFlying) {
                    _this3.p.y = bottom + playerSize;
                    _this3.hitGround();
                    _0x30410f = true;
                    _this3.p.onCeiling = true;
                    _this3.p.collideTop = bottom;
                    return 0; // continue
                  }
                }
              }
            }
          },
          _ret;
        for (var _i18 = 0, _len18 = _0x198534.length; _i18 < _len18; _i18++) {
          _step18.value = _0x198534[_i18];
          _ret = _loop3();
          if (_ret === 0) continue;
          if (_ret) return _ret.v;
        }
      } catch (err) {
        throw err; // propagate like the original — a swallowed error here silently disables collisions for the rest of the frame
      }
      if (this.p.collideTop !== 0 && this.p.collideBottom !== 0) {
        if (Math.abs(this.p.collideTop - this.p.collideBottom) < 48) {
          if (window.noClip) this.p.diedThisFrame = true;
          if (!window.noClip) {
            this.killPlayer();
            return;
          }
        }
      }
      var _0x3020c8 = this._gameLayer.getFloorY();
      var iscube = !this.p.isFlying && !this.p.isBall && !this.p.isWave && !this.p.isUfo && !this.p.isSpider;
      var _effectiveSize = this.p.isWave ? waveHitSize : playerSize;
      if (!_0x30410f && !_boostedThisStep) {
        var gravCeilY = this._gameLayer.getCeilingY();
        if (!_0x30410f && !_boostedThisStep) {
          if (this.p.y <= _0x3020c8 + _effectiveSize) {
            if (!this.p.gravityFlipped || !iscube) {
              this.p.y = _0x3020c8 + _effectiveSize;
              this.hitGround();
              if (this.p.gravityFlipped) this.p.onCeiling = true;
            } else if (this.p.gravityFlipped && iscube && this.p.yVelocity < -0.5) {
              if (window.noClip) {
                this.p.diedThisFrame = true;
              } else {
                this.killPlayer();
                return;
              }
            }
          }
          if (gravCeilY !== null) {
            if (this.p.y >= gravCeilY - _effectiveSize) {
              if (this.p.gravityFlipped) {
                this.p.y = gravCeilY - _effectiveSize;
                this.hitGround();
                this.p.onCeiling = true;
              }
            }
          }
        }
        if (!this.p.gravityFlipped && !window.noClip && this.p.y < _0x3020c8 - 30) {
          this.p.y = _0x3020c8 + _effectiveSize;
          this.p.yVelocity = 0;
          this.hitGround();
        }
        if (this.p.gravityFlipped) {
          var _gravCeilY = this._gameLayer.getCeilingY();
          if (_gravCeilY !== null) {
            if (this.p.y >= _gravCeilY - _effectiveSize) {
              this.p.y = _gravCeilY - _effectiveSize;
              this.hitGround();
              this.p.onCeiling = true;
            }
            if (!window.noClip && this.p.y > _gravCeilY + 30) {
              this.p.y = _gravCeilY - _effectiveSize;
              this.p.yVelocity = 0;
              this.hitGround();
              this.p.onCeiling = true;
            }
          }
        }
      }
      var _0x496456 = this._gameLayer.getCeilingY();
      if (_0x496456 !== null && this.p.y >= _0x496456 - _effectiveSize && !iscube) {
        this.p.y = _0x496456 - _effectiveSize;
        this.hitGround();
        this.p.onCeiling = true;
      }
      if (this.p.y > 1890 * 4) {
        this.killPlayer();
        return;
      }
      if (this.p.isFlying || this.p.isWave || this.p.isUfo || this.p.isSpider) {
        var _0x354b7c = this.p.y <= _0x3020c8 + _effectiveSize;
        var _0xdc296 = _0x496456 !== null && this.p.y >= _0x496456 - _effectiveSize;
        if (!_0x30410f && !_0x354b7c && this.p.collideTop === 0 && !_0xdc296) {
          this.p.onGround = false;
        }
      }
      this.p.wasUpKeyDown = this.p.upKeyDown;
      if (this.p.diedThisFrame == true && window.noClipAccuracy) {
        this.noclipStats.deathFrames++;
        this._scene.tweens.killTweensOf(this._scene.noclipFlash);
        this._scene.tweens.add({
          targets: this._scene.noclipFlash,
          alpha: {
            from: 0.5,
            to: 0
          },
          duration: 400,
          ease: 'Cubic.easeOut'
        });
        if (this.p.diedLastFrame == false) {
          this.noclipStats.deaths++;
        }
      }
      if (this.noclipStats.totalFrames > 0) {
        var safeFrames = this.noclipStats.totalFrames - this.noclipStats.deathFrames;
        this.noclipStats.accuracy = safeFrames / this.noclipStats.totalFrames * 100;
      }
      this.p.diedLastFrame = this.p.diedThisFrame;
    }
  }, {
    key: "drawHitboxes",
    value: function drawHitboxes(graphics, camX, camY) {
      var _this4 = this;
      graphics.clear();
      var playerSize = this.p.isMini ? 18 : 30;
      var hitboxsize = playerSize * 2;
      var isFlipped = this.p.mirrored;
      var camXCenter = camX + centerX;
      var playerY = this.p.y;
      var nearbyObjects = this._gameLayer.getNearbySectionObjects(camXCenter);
      var _iterator23 = _createForOfIteratorHelper(nearbyObjects),
        _step23;
      try {
        var _loop4 = function _loop4() {
          var nearObject = _step23.value;
          var objXCenter = nearObject.x - camX;
          var objYCenter = b(nearObject.y) + camY;
          var hitboxColor = 65280;
          if (nearObject.type === hazardType) {
            hitboxColor = 16729156;
          } else if (nearObject.type === "portal_fly" || nearObject.type === "portal_cube" || nearObject.type === "portal_ball" || nearObject.type === portalWaveType || nearObject.type === portalUfoType) {
            hitboxColor = 4491519;
          } else if (nearObject.type === "portal_gravity_down" || nearObject.type === "portal_gravity_up" || nearObject.type === "portal_gravity_toggle") {
            hitboxColor = 16776960;
          } else if (nearObject.type === "portal_mirror_on" || nearObject.type === "portal_mirror_off") {
            hitboxColor = 16744448;
          } else if (nearObject.type === "portal_mini_on" || nearObject.type === "portal_mini_off") {
            hitboxColor = 16711935;
          } else if (nearObject.type === jumpPadType) {
            hitboxColor = 16744192;
          } else if (nearObject.type === jumpRingType) {
            hitboxColor = 16711935;
          }
          var xPos = isFlipped ? screenWidth - objXCenter : objXCenter;
          graphics.lineStyle(2, hitboxColor, 0.7);
          if (nearObject.hitbox_radius !== undefined && nearObject.hitbox_radius !== null) {
            graphics.strokeCircle(xPos, objYCenter, nearObject.hitbox_radius);
          } else {
            var rot = Phaser.Math.DegToRad(nearObject.rotationDegrees);
            var cos = Math.cos(rot);
            var sin = Math.sin(rot);
            var negWidth = -nearObject.w / 2;
            var negHeight = -nearObject.h / 2;
            var posWidth = nearObject.w / 2;
            var posHeight = nearObject.h / 2;
            var points = [{
              x: negWidth,
              y: negHeight
            }, {
              x: posWidth,
              y: negHeight
            }, {
              x: posWidth,
              y: posHeight
            }, {
              x: negWidth,
              y: posHeight
            }];
            var rotations = points.map(function (p) {
              return {
                x: xPos + (isFlipped ? -(p.x * cos - p.y * sin) : p.x * cos - p.y * sin),
                y: objYCenter + (isFlipped ? -(p.x * sin + p.y * cos) : p.x * sin + p.y * cos)
              };
            });
            graphics.beginPath();
            graphics.moveTo(rotations[0].x, rotations[0].y);
            graphics.lineTo(rotations[1].x, rotations[1].y);
            graphics.lineTo(rotations[2].x, rotations[2].y);
            graphics.lineTo(rotations[3].x, rotations[3].y);
            graphics.closePath();
            graphics.strokePath();
          }
        };
        for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
          _loop4();
        }
      } catch (err) {
        _iterator23.e(err);
      } finally {
        _iterator23.f();
      }
      if (window.showHitboxTrail) {
        this._hitboxTrail.forEach(function (pos, index) {
          var trailXRaw = pos.x - camX;
          var trailX = isFlipped ? screenWidth - trailXRaw : trailXRaw;
          var trailY = b(pos.y) + camY;
          graphics.lineStyle(1, hexToHexadecimal("ff0000"), 1);
          if (!_this4.p.isWave) {
            // outer box (red)
            graphics.lineStyle(1, hexToHexadecimal("ff0000"), 0.5);
            graphics.strokeRect(trailX - playerSize, trailY - playerSize, hitboxsize, hitboxsize);

            // inner circle (dark red)
            graphics.lineStyle(1, hexToHexadecimal("b30001"), 0.5);
            graphics.strokeCircle(trailX - playerSize + hitboxsize / 2, trailY - playerSize + hitboxsize / 2, hitboxsize / 2);
            graphics.lineStyle(1, hexToHexadecimal("0000ff"), 1);
          }

          // inner hitbox
          graphics.strokeRect(trailX - 9, trailY - 9, 18, 18);
        });
      }

      // comments so its easier for other people to read ts
      var _0x1e788a = b(playerY) + camY;
      var _playerDrawX = isFlipped ? screenWidth - centerX : centerX;
      graphics.lineStyle(1, hexToHexadecimal("ff0000"), 1);
      if (!this.p.isWave) {
        // outer box (red)
        graphics.lineStyle(2, hexToHexadecimal("ff0000"), 0.8);
        graphics.strokeRect(_playerDrawX - playerSize, _0x1e788a - playerSize, hitboxsize, hitboxsize);
        // inner circle (dark red)
        graphics.lineStyle(2, hexToHexadecimal("b30001"), 0.8);
        graphics.strokeCircle(_playerDrawX - playerSize + hitboxsize / 2, _0x1e788a - playerSize + hitboxsize / 2, hitboxsize / 2);
        graphics.lineStyle(2, hexToHexadecimal("0000ff"), 1);
      }
      // inner hitbox
      graphics.strokeRect(_playerDrawX - 9, _0x1e788a - 9, 18, 18);
    }
  }, {
    key: "playEndAnimation",
    value: function playEndAnimation(_0x24408e, _0x281588, _0x54bbf4) {
      var _this5 = this;
      this._endAnimating = true;
      this._hitboxTrail = [];
      this._hitboxGraphics.clear();
      var _0x3729ef = this._scene;
      var _0x568b25 = _0x54bbf4 || 240;
      var _0x4a45d7 = _0x3729ef._playerWorldX;
      var _0x501b73 = this.p.y;
      var _0x457676 = _0x24408e + 100;
      var _0x3ade39 = _0x568b25 - 40;
      var _0x1295ea = _0x4a45d7;
      var _0x47ae60 = _0x501b73;
      var _0x1f2e19 = _0x4a45d7 + 80;
      var _0x8bc9f4 = _0x568b25 + 300;
      var _0x11b580 = [this._playerSpriteLayer, this._playerGlowLayer, this._playerOverlayLayer, this._playerExtraLayer, this._ballSpriteLayer, this._ballGlowLayer, this._ballOverlayLayer, this._waveSpriteLayer, this._waveOverlayLayer, this._waveExtraLayer, this._waveGlowLayer, this._shipSpriteLayer, this._shipGlowLayer, this._shipOverlayLayer, this._shipExtraLayer].filter(function (_0x3e9c62) {
        return _0x3e9c62 && _0x3e9c62.sprite.visible;
      }).map(function (_0x5cedeb) {
        return _0x5cedeb.sprite;
      });
      this._startPercent = this._scene._playerWorldX / this._scene._level.endXPos * 100;
      this._particleEmitter.stop();
      this._flyParticleEmitter.stop();
      this._flyParticle2Emitter.stop();
      this._shipDragEmitter.stop();
      var _0x154798 = this.p.isFlying;
      var _0x3793a4 = [this._shipSpriteLayer, this._shipGlowLayer, this._shipOverlayLayer, this._shipExtraLayer];
      var _0xbd676f = [this._playerSpriteLayer, this._playerGlowLayer, this._playerOverlayLayer, this._playerExtraLayer];
      var _0x3fc5a5 = _0x11b580.map(function (_0x5c0e81) {
        var _0x5cbb0a = 0;
        if (_0x154798) {
          var _0xff16eb = _0x3793a4.some(function (_0x40ef1e) {
            return _0x40ef1e && _0x40ef1e.sprite === _0x5c0e81;
          });
          var _0x4fdb53 = _0xbd676f.some(function (_0x4ef5b5) {
            return _0x4ef5b5 && _0x4ef5b5.sprite === _0x5c0e81;
          });
          if (_0xff16eb) {
            _0x5cbb0a = 10;
          } else if (_0x4fdb53) {
            _0x5cbb0a = -10;
          }
        }
        return {
          spr: _0x5c0e81,
          localY: _0x5cbb0a
        };
      });
      var _0x3e35e7 = this._streak;
      var _0x51c4a8 = {
        val: 0
      };
      _0x3729ef.tweens.add({
        targets: _0x51c4a8,
        val: 1,
        duration: 1000,
        ease: function ease(_0x23df59) {
          return Math.pow(_0x23df59, 1.2);
        },
        onUpdate: function onUpdate() {
          var spriteWidth = _0x51c4a8.val;
          var _0x2478d6 = Math.pow(1 - spriteWidth, 3) * _0x1295ea + Math.pow(1 - spriteWidth, 2) * 3 * spriteWidth * _0x1295ea + (1 - spriteWidth) * 3 * Math.pow(spriteWidth, 2) * _0x1f2e19 + Math.pow(spriteWidth, 3) * _0x457676;
          var _0x148e69 = Math.pow(1 - spriteWidth, 3) * _0x47ae60 + Math.pow(1 - spriteWidth, 2) * 3 * spriteWidth * _0x47ae60 + (1 - spriteWidth) * 3 * Math.pow(spriteWidth, 2) * _0x8bc9f4 + Math.pow(spriteWidth, 3) * _0x3ade39;
          var _0x3d0365 = _0x2478d6 - _0x3729ef._cameraX;
          var _0x3790a9 = b(_0x148e69) + _0x3729ef._cameraY;
          var _0x1cb4d3 = 1 - spriteWidth * spriteWidth;
          var _0x1d2e2f = _0x3fc5a5[0].spr.rotation;
          var _0xd3cb2a = Math.cos(_0x1d2e2f);
          var _0x2f86c2 = Math.sin(_0x1d2e2f);
          _this5._scene._interpolatedPercent = _this5._startPercent + (100 - _this5._startPercent) * spriteWidth;
          var _iterator24 = _createForOfIteratorHelper(_0x3fc5a5),
            _step24;
          try {
            for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
              var _0x2b394a = _step24.value;
              var _0xbd4f26 = -_0x2b394a.localY * _0x2f86c2;
              var _0x5b67fe = _0x2b394a.localY * _0xd3cb2a;
              _0x2b394a.spr.setPosition(_0x3d0365 + _0xbd4f26, _0x3790a9 + _0x5b67fe);
              _0x2b394a.spr.setAlpha(_0x1cb4d3);
            }
          } catch (err) {
            _iterator24.e(err);
          } finally {
            _iterator24.f();
          }
          _0x3e35e7.setPosition(_0x2478d6, b(_0x148e69));
          _0x3e35e7.update(_0x3729ef.game.loop.delta / 1000);
        },
        onComplete: function onComplete() {
          _this5._scene._interpolatedPercent = 100;
          var _iterator25 = _createForOfIteratorHelper(_0x3fc5a5),
            _step25;
          try {
            for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
              var _0x4fce42 = _step25.value;
              _0x4fce42.spr.setVisible(false);
            }
          } catch (err) {
            _iterator25.e(err);
          } finally {
            _iterator25.f();
          }
          _0x3e35e7.stop();
          _0x3e35e7.reset();
          _0x281588();
        }
      });
      var _iterator26 = _createForOfIteratorHelper(_0x11b580),
        _step26;
      try {
        for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
          var _0x25f8c5 = _step26.value;
          _0x3729ef.tweens.add({
            targets: _0x25f8c5,
            angle: _0x25f8c5.angle + 360,
            duration: 1000,
            ease: function ease(_0x228c03) {
              return Math.pow(_0x228c03, 1.5);
            }
          });
        }
      } catch (err) {
        _iterator26.e(err);
      } finally {
        _iterator26.f();
      }
    }
  }, {
    key: "reset",
    value: function reset() {
      this._cleanupExplosion();
      this._endAnimating = false;
      this._lastLandObject = null;
      this._lastXOffset = 0;
      this.stopRotation();
      this.rotateActionTime = 0;
      this._rotation = 0;
      this._lastCameraX = 0;
      this._lastCameraY = 0;
      this.setCubeVisible(true);
      this.setShipVisible(false);
      this.setBallVisible(false);
      this.setWaveVisible(false);
      this.setBirdVisible(false);
      this.setSpiderVisible(false);
      var _iterator27 = _createForOfIteratorHelper(this._allLayers),
        _step27;
      try {
        for (_iterator27.s(); !(_step27 = _iterator27.n()).done;) {
          var _0x5a0fa9 = _step27.value;
          if (_0x5a0fa9) {
            _0x5a0fa9.sprite.setAlpha(1);
            if (_0x5a0fa9.sprite.scaleY < 0) {
              _0x5a0fa9.sprite.scaleY = Math.abs(_0x5a0fa9.sprite.scaleY);
            }
          }
        }
      } catch (err) {
        _iterator27.e(err);
      } finally {
        _iterator27.f();
      }
      var _iterator28 = _createForOfIteratorHelper(this._playerLayers),
        _step28;
      try {
        for (_iterator28.s(); !(_step28 = _iterator28.n()).done;) {
          var _0x1e656c = _step28.value;
          if (_0x1e656c) {
            _0x1e656c.sprite.setScale(1);
          }
        }
      } catch (err) {
        _iterator28.e(err);
      } finally {
        _iterator28.f();
      }
      this._particleEmitter.stop();
      this._particleActive = false;
      this._flyParticleEmitter.stop();
      this._flyParticleActive = false;
      this._flyParticle2Emitter.stop();
      this._flyParticle2Active = false;
      this._shipDragEmitter.stop();
      this._shipDragActive = false;
      this._streak.stop();
      this._streak.reset();
      this._waveTrail.stop();
      this._waveTrail.reset();
    }
  }]);
}();