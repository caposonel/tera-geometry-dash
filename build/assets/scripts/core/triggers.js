function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Easing = /*#__PURE__*/function () {
  "use strict";

  function Easing() {
    _classCallCheck(this, Easing);
  }
  return _createClass(Easing, null, [{
    key: "sample",
    value: function sample(type, rate, x) {
      if (x === 0 || x === 1) return x;
      switch (type) {
        case 0:
          return x;
        case 1:
          return this._easeInOut(x, rate);
        case 2:
          return this._easeIn(x, rate);
        case 3:
          return this._easeOut(x, rate);
        case 4:
          return this._elasticInOut(x, rate);
        case 5:
          return this._elasticIn(x, rate);
        case 6:
          return this._elasticOut(x, rate);
        case 7:
          return this._bounceInOut(x);
        case 8:
          return this._bounceIn(x);
        case 9:
          return this._bounceOut(x);
        case 10:
          return this._expInOut(x);
        case 11:
          return this._expIn(x);
        case 12:
          return this._expOut(x);
        case 13:
          return this._sineInOut(x);
        case 14:
          return this._sineIn(x);
        case 15:
          return this._sineOut(x);
        case 16:
          return this._backInOut(x);
        case 17:
          return this._backIn(x);
        case 18:
          return this._backOut(x);
        default:
          return x;
      }
    }
  }, {
    key: "_easeInOut",
    value: function _easeInOut(x, r) {
      var t = x * 2;
      return t < 1 ? 0.5 * Math.pow(t, r) : 1 - 0.5 * Math.pow(2 - t, r);
    }
  }, {
    key: "_easeIn",
    value: function _easeIn(x, r) {
      return Math.pow(x, r);
    }
  }, {
    key: "_easeOut",
    value: function _easeOut(x, r) {
      if (!r || r <= 0) return x;
      return Math.pow(x, 1 / r);
    }
  }, {
    key: "_elasticInOut",
    value: function _elasticInOut(x, p) {
      var period = p || 0.3 * 1.5;
      var s = period / 4;
      var t = x - 1;
      return t < 0 ? -0.5 * Math.pow(2, 10 * t) * Math.sin((t - s) * (2 * Math.PI) / period) : Math.pow(2, -10 * t) * Math.sin((t - s) * (2 * Math.PI) / period) * 0.5 + 1;
    }
  }, {
    key: "_elasticIn",
    value: function _elasticIn(x, p) {
      if (!p || p <= 0) p = 0.3;
      var s = p / 4;
      var t = x - 1;
      return -Math.pow(2, 10 * t) * Math.sin((t - s) * (2 * Math.PI) / p);
    }
  }, {
    key: "_elasticOut",
    value: function _elasticOut(x, p) {
      if (!p || p <= 0) p = 0.3;
      var s = p / 4;
      return Math.pow(2, -10 * x) * Math.sin((x - s) * (2 * Math.PI) / p) + 1;
    }
  }, {
    key: "_bounceTime",
    value: function _bounceTime(x) {
      if (x < 1 / 2.75) return 7.5625 * x * x;else if (x < 2 / 2.75) {
        var t = x - 1.5 / 2.75;
        return 7.5625 * t * t + 0.75;
      } else if (x < 2.5 / 2.75) {
        var _t = x - 2.25 / 2.75;
        return 7.5625 * _t * _t + 0.9375;
      } else {
        var _t2 = x - 2.625 / 2.75;
        return 7.5625 * _t2 * _t2 + 0.984375;
      }
    }
  }, {
    key: "_bounceInOut",
    value: function _bounceInOut(x) {
      return x < 0.5 ? (1 - this._bounceTime(1 - x * 2)) * 0.5 : this._bounceTime(x * 2 - 1) * 0.5 + 0.5;
    }
  }, {
    key: "_bounceIn",
    value: function _bounceIn(x) {
      return 1 - this._bounceTime(1 - x);
    }
  }, {
    key: "_bounceOut",
    value: function _bounceOut(x) {
      return this._bounceTime(x);
    }
  }, {
    key: "_expInOut",
    value: function _expInOut(x) {
      return x < 0.5 ? 0.5 * Math.pow(2, 10 * (x * 2 - 1)) : 0.5 * (-Math.pow(2, -10 * (x * 2 - 1)) + 2);
    }
  }, {
    key: "_expIn",
    value: function _expIn(x) {
      return Math.pow(2, 10 * (x - 1)) - 0.001;
    }
  }, {
    key: "_expOut",
    value: function _expOut(x) {
      return -Math.pow(2, -10 * x) + 1;
    }
  }, {
    key: "_sineInOut",
    value: function _sineInOut(x) {
      return -0.5 * (Math.cos(x * Math.PI) - 1);
    }
  }, {
    key: "_sineIn",
    value: function _sineIn(x) {
      return 1 - Math.cos(x * Math.PI / 2);
    }
  }, {
    key: "_sineOut",
    value: function _sineOut(x) {
      return Math.sin(x * Math.PI / 2);
    }
  }, {
    key: "_backInOut",
    value: function _backInOut(x) {
      var ov = 1.70158 * 1.525;
      var t = x * 2;
      return t < 1 ? t * t * ((ov + 1) * t - ov) / 2 : (t - 2) * (t - 2) * ((ov + 1) * (t - 2) + ov) / 2 + 1;
    }
  }, {
    key: "_backIn",
    value: function _backIn(x) {
      var ov = 1.70158;
      return x * x * ((ov + 1) * x - ov);
    }
  }, {
    key: "_backOut",
    value: function _backOut(x) {
      var ov = 1.70158;
      var t = x - 1;
      return t * t * ((ov + 1) * t + ov) + 1;
    }
  }]);
}();
;
var TriggerStepper = /*#__PURE__*/function () {
  "use strict";

  function TriggerStepper(oldColor, newColor, triggerDuration) {
    _classCallCheck(this, TriggerStepper);
    // Store from/to as primitive fields — avoids object spread overhead
    this.fromR = oldColor.r; this.fromG = oldColor.g; this.fromB = oldColor.b;
    this.toR = newColor.r; this.toG = newColor.g; this.toB = newColor.b;
    this.duration = triggerDuration;
    this.elapsed = 0;
    this.done = triggerDuration <= 0;
    // current is a fixed object — mutated in place, never reallocated
    var src = triggerDuration <= 0 ? newColor : oldColor;
    this.current = { r: src.r, g: src.g, b: src.b };
  }
  return _createClass(TriggerStepper, [{
    key: "step",
    value: function step(timeMillis) {
      if (this.done) {
        return;
      }
      this.elapsed += timeMillis;
      var progress = this.duration > 0 ? Math.min(this.elapsed / this.duration, 1) : 1;
      // Mutate current in place — no per-frame allocation
      if (progress >= 1) {
        this.current.r = this.toR;
        this.current.g = this.toG;
        this.current.b = this.toB;
        this.done = true;
      } else {
        this.current.r = Math.round(this.fromR + (this.toR - this.fromR) * progress);
        this.current.g = Math.round(this.fromG + (this.toG - this.fromG) * progress);
        this.current.b = Math.round(this.fromB + (this.toB - this.fromB) * progress);
      }
    }
  }]);
}();
var ColorManager = /*#__PURE__*/function () {
  "use strict";

  function ColorManager() {
    _classCallCheck(this, ColorManager);
    this._initialColors = {};
    this.reset();
  }
  return _createClass(ColorManager, [{
    key: "setInitialColor",
    value: function setInitialColor(channelId, color) {
      this._initialColors[channelId] = _objectSpread({}, color);
      this._colors[channelId] = _objectSpread({}, color);
    }
  }, {
    key: "reset",
    value: function reset() {
      this._colors = _defineProperty(_defineProperty({}, fs, {
        r: 0,
        g: 102,
        b: 255
      }), gs, {
        r: 0,
        g: 68,
        b: 170
      });
      for (var chId in this._initialColors) {
        this._colors[chId] = _objectSpread({}, this._initialColors[chId]);
      }
      this._actions = {};
    }
  }, {
    key: "triggerColor",
    value: function triggerColor(index, newColor, duration) {
      var oldColor = _objectSpread({}, this.getColor(index));
      this._actions[index] = new TriggerStepper(oldColor, newColor, duration);
      if (duration <= 0) {
        this._colors[index] = _objectSpread({}, newColor);
      }
    }
  }, {
    key: "step",
    value: function step(timeMillis) {
      // Mutate target color in place — no per-frame allocation
      for (var actionIndex in this._actions) {
        var action = this._actions[actionIndex];
        action.step(timeMillis);
        var target = this._colors[actionIndex];
        if (!target) {
          this._colors[actionIndex] = { r: action.current.r, g: action.current.g, b: action.current.b };
        } else {
          target.r = action.current.r;
          target.g = action.current.g;
          target.b = action.current.b;
        }
        if (action.done) {
          delete this._actions[actionIndex];
        }
      }
    }
  }, {
    key: "getColor",
    value: function getColor(index) {
      return this._colors[index] || {
        r: 255,
        g: 255,
        b: 255
      };
    }
  }, {
    key: "getHex",
    value: function getHex(index) {
      var color = this.getColor(index);
      return color.r << 16 | color.g << 8 | color.b;
    }
  }]);
}();
function circleEffect(gameScene, xPos, yPos, radius, radius2, duration) {
  var filled = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;
  var _0x550b4a /*idk what this is*/ = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;
  var color = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 16777215;
  var graphics = gameScene.add.graphics().setScrollFactor(0).setDepth(55).setBlendMode(S);
  var targets = {
    r: radius,
    t: 0
  };
  gameScene.tweens.add({
    targets: targets,
    r: radius2,
    t: 1,
    duration: duration,
    ease: filled && !_0x550b4a ? "Quad.Out" : "Linear",
    onUpdate: function onUpdate() {
      var alpha = _0x550b4a ? targets.t < 0.5 ? targets.t * 2 : (1 - targets.t) * 2 : 1 - targets.t;
      graphics.clear();
      if (filled) {
        graphics.fillStyle(color, Math.max(0, alpha));
        graphics.fillCircle(xPos, yPos, targets.r);
      } else {
        graphics.lineStyle(4, color, Math.max(0, alpha));
        graphics.strokeCircle(xPos, yPos, targets.r);
      }
    },
    onComplete: function onComplete() {
      return graphics.destroy();
    }
  });
}
function particleEffect(gameScene) {
  var color1 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 16777215;
  var color2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 16777215;
  var basePos = 200;
  var xPos = basePos + (screenWidth - 400) * Math.random();
  var yPos = basePos + Math.random() * 240;
  circleEffect(gameScene, xPos, yPos, 40, 140 + Math.random() * 60, 500, true, true, color2);
  gameScene.add.particles(xPos, yPos, "GJ_WebSheet", {
    frame: "square.png",
    speed: {
      min: 520,
      max: 920
    },
    angle: {
      min: 0,
      max: 360
    },
    scale: {
      start: 0.4,
      end: 0.13
    },
    alpha: {
      start: 1,
      end: 0
    },
    lifespan: {
      min: 0,
      max: 500
    },
    stopAfter: 25,
    blendMode: S,
    tint: color1,
    x: {
      min: -20,
      max: 20
    },
    y: {
      min: -20,
      max: 20
    }
  }).setScrollFactor(0).setDepth(57);
}