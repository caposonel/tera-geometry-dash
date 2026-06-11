function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Collider = /*#__PURE__*/function () {
  "use strict";

  function Collider(objType, xPos, yPos, width, height) {
    var rotation = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
    _classCallCheck(this, Collider);
    this.type = objType;
    this.x = xPos;
    this.y = yPos;
    this.w = width;
    this.h = height;
    this.activated = false;
    this.rotationDegrees = rotation;
    this.slopeAngleDeg = 0;
    this.slopeDir = 1;
    this.slopeIsFilled = false;
    this.slopeFlipY = false;
  }
  return _createClass(Collider, [{
    key: "getSlopeSurfaceY",
    value: function getSlopeSurfaceY(worldX) {
      if (this.type !== slopeType) return null;
      var halfW = this.w / 2;
      var left = this.x - halfW;
      var right = this.x + halfW;
      if (worldX < left || worldX > right) return null;
      var frac = (worldX - left) / (right - left);
      var surfaceFrac = this.slopeDir > 0 ? frac : 1 - frac;
      if (this.slopeFlipY) surfaceFrac = 1 - surfaceFrac;
      return this.y - this.h / 2 + surfaceFrac * this.h;
    }
  }, {
    key: "getSlopeAngleRad",
    value: function getSlopeAngleRad() {
      var angleDeg = this.slopeAngleDeg;
      if (this.slopeDir < 0) angleDeg = -angleDeg;
      if (this.slopeFlipY) angleDeg = -angleDeg;
      return angleDeg * Math.PI / 180;
    }
  }]);
}();
function parseObject(objectString) {
  var objectParts = objectString.split(",");
  var objectData = {};
  for (var index = 0; index + 1 < objectParts.length; index += 2) {
    var key = objectParts[index];
    var value = objectParts[index + 1];
    objectData[key] = value;
  }
  var objectId = parseInt(objectData[1] || "0", 10);
  if (objectId === 0) {
    return null;
  } else {
    var _objectData$kA, _objectData$kA2, _objectData$kA3, _objectData$kA4, _objectData$kA5;
    return {
      id: objectId,
      x: parseFloat(objectData[2] || "0"),
      y: parseFloat(objectData[3] || "0"),
      flipX: objectData[4] === "1",
      flipY: objectData[5] === "1",
      rot: parseFloat(objectData[6] || "0"),
      scale: parseFloat(objectData[32] || "1"),
      zLayer: parseInt(objectData[24] || "0", 10),
      zOrder: parseInt(objectData[25] || "0", 10),
      groups: objectData[57] || "",
      color1: parseInt(objectData[21] || "0", 10),
      color2: parseInt(objectData[22] || "0", 10),
      // Following are for startpos
      gameMode: parseInt((_objectData$kA = objectData['kA2']) !== null && _objectData$kA !== void 0 ? _objectData$kA : '0', 10),
      miniMode: parseInt((_objectData$kA2 = objectData['kA3']) !== null && _objectData$kA2 !== void 0 ? _objectData$kA2 : '0', 10),
      speed: parseInt((_objectData$kA3 = objectData['kA4']) !== null && _objectData$kA3 !== void 0 ? _objectData$kA3 : '0', 10),
      mirrored: parseInt((_objectData$kA4 = objectData['kA28']) !== null && _objectData$kA4 !== void 0 ? _objectData$kA4 : '0', 10),
      flipGravity: '1' === ((_objectData$kA5 = objectData['kA11']) !== null && _objectData$kA5 !== void 0 ? _objectData$kA5 : '0'),
      _raw: objectData
    };
  }
}
function parseLevel(levelString) {
  var decompressedString = function (compressedString) {
    var getBase64 = function (compressedString) {
      var lessCluttered = compressedString.replace(/-/g, "+").replace(/_/g, "/");
      while (lessCluttered.length % 4 != 0) {
        lessCluttered += "=";
      }
      return lessCluttered;
    }(compressedString.trim());
    var decryptedString = atob(getBase64);
    var rawBytes = new Uint8Array(decryptedString.length);
    for (var byteStr = 0; byteStr < decryptedString.length; byteStr++) {
      rawBytes[byteStr] = decryptedString.charCodeAt(byteStr);
    }
    var inflatedBytes = pako.inflate(rawBytes);
    return new TextDecoder().decode(inflatedBytes);
  }(levelString);
  var stringParts = decompressedString.split(";");
  var settings = stringParts.length > 0 ? stringParts[0] : "";
  var objects = [];
  for (var id = 1; id < stringParts.length; id++) {
    if (stringParts[id].length === 0) {
      continue;
    }
    var object = parseObject(stringParts[id]);
    if (object) {
      objects.push(object);
    }
  }
  return {
    settings: settings,
    objects: objects
  };
}
function getGroundTextureId(groundSetting) {
  var parsedGroundId = parseInt(String(groundSetting !== null && groundSetting !== void 0 ? groundSetting : "0"), 10);
  var textureIndex = isNaN(parsedGroundId) || parsedGroundId <= 1 ? 0 : parsedGroundId - 1;
  return String(textureIndex).padStart(2, "0");
}
var solidType = "solid";
var hazardType = "hazard";
var decoType = "deco";
var coinType = "coin";
var portalType = "portal";
var padType = "pad";
var ringType = "ring";
var triggerType = "trigger";
var speedType = "speed";
var slopeType = "slope";
// ── Slope ID registry ──
var _SLOPE_DATA = {
  289: {
    gw: 1,
    gh: 1,
    angle: 45,
    sq: false
  },
  291: {
    gw: 2,
    gh: 1,
    angle: 22.5,
    sq: false
  },
  294: {
    gw: 1,
    gh: 1,
    angle: 45,
    sq: false
  },
  295: {
    gw: 2,
    gh: 1,
    angle: 22.5,
    sq: false
  },
  296: {
    gw: 0.367,
    gh: 0.433,
    angle: 45,
    sq: true
  },
  297: {
    gw: 0.967,
    gh: 0.45,
    angle: 45,
    sq: true
  },
  299: {
    gw: 1,
    gh: 1,
    angle: 45,
    sq: false
  },
  301: {
    gw: 2,
    gh: 1,
    angle: 22.5,
    sq: false
  },
  309: {
    gw: 1,
    gh: 1,
    angle: 45,
    sq: false
  },
  311: {
    gw: 2,
    gh: 1,
    angle: 22.5,
    sq: false
  },
  315: {
    gw: 1,
    gh: 1,
    angle: 45,
    sq: false
  },
  317: {
    gw: 2,
    gh: 1,
    angle: 22.5,
    sq: false
  },
  321: {
    gw: 1,
    gh: 1,
    angle: 45,
    sq: false
  },
  323: {
    gw: 2,
    gh: 1,
    angle: 22.5,
    sq: false
  },
  324: {
    gw: 1,
    gh: 1,
    angle: 45,
    sq: true
  },
  325: {
    gw: 1,
    gh: 1,
    angle: 45,
    sq: true
  },
  326: {
    gw: 1,
    gh: 1,
    angle: 45,
    sq: false
  },
  327: {
    gw: 2,
    gh: 1,
    angle: 22.5,
    sq: false
  },
  328: {
    gw: 0.733,
    gh: 0.733,
    angle: 45,
    sq: true
  },
  329: {
    gw: 1.433,
    gh: 0.733,
    angle: 22.5,
    sq: true
  },
  331: {
    gw: 1,
    gh: 1,
    angle: 45,
    sq: false
  },
  333: {
    gw: 2,
    gh: 1,
    angle: 22.5,
    sq: false
  },
  337: {
    gw: 1,
    gh: 1,
    angle: 45,
    sq: false
  },
  339: {
    gw: 2,
    gh: 1,
    angle: 22.5,
    sq: false
  },
  343: {
    gw: 1,
    gh: 1,
    angle: 45,
    sq: false
  },
  345: {
    gw: 2,
    gh: 1,
    angle: 22.5,
    sq: false
  },
  353: {
    gw: 1,
    gh: 1,
    angle: 45,
    sq: false
  },
  355: {
    gw: 2,
    gh: 1,
    angle: 22.5,
    sq: false
  },
  358: {
    gw: 1,
    gh: 1,
    angle: 45,
    sq: true
  },
  363: {
    gw: 1,
    gh: 1,
    angle: 45,
    sq: false
  },
  364: {
    gw: 2,
    gh: 1,
    angle: 22.5,
    sq: false
  },
  366: {
    gw: 1,
    gh: 1,
    angle: 45,
    sq: false
  },
  367: {
    gw: 2,
    gh: 1,
    angle: 22.5,
    sq: false
  },
  371: {
    gw: 1,
    gh: 1,
    angle: 45,
    sq: false
  },
  372: {
    gw: 2,
    gh: 1,
    angle: 22.5,
    sq: false
  },
  483: {
    gw: 1,
    gh: 1,
    angle: 45,
    sq: false
  },
  484: {
    gw: 2,
    gh: 1,
    angle: 22.5,
    sq: false
  },
  492: {
    gw: 1,
    gh: 1,
    angle: 45,
    sq: false
  },
  493: {
    gw: 2,
    gh: 1,
    angle: 22.5,
    sq: false
  },
  651: {
    gw: 1,
    gh: 1,
    angle: 45,
    sq: false
  },
  652: {
    gw: 2,
    gh: 1,
    angle: 22.5,
    sq: false
  },
  665: {
    gw: 1,
    gh: 1,
    angle: 45,
    sq: false
  },
  666: {
    gw: 2,
    gh: 1,
    angle: 22.5,
    sq: false
  },
  681: {
    gw: 1,
    gh: 1,
    angle: 45,
    sq: false
  },
  682: {
    gw: 2,
    gh: 1,
    angle: 22.5,
    sq: false
  },
  683: {
    gw: 1,
    gh: 1,
    angle: 45,
    sq: false
  },
  684: {
    gw: 2,
    gh: 1,
    angle: 22.5,
    sq: false
  },
  685: {
    gw: 0.85,
    gh: 0.85,
    angle: 45,
    sq: false
  },
  686: {
    gw: 1.85,
    gh: 0.933,
    angle: 22.5,
    sq: false
  },
  687: {
    gw: 1,
    gh: 1,
    angle: 45,
    sq: false
  },
  688: {
    gw: 2,
    gh: 1,
    angle: 22.5,
    sq: false
  },
  689: {
    gw: 1,
    gh: 1,
    angle: 45,
    sq: false
  },
  690: {
    gw: 2,
    gh: 1,
    angle: 22.5,
    sq: false
  },
  691: {
    gw: 1,
    gh: 1,
    angle: 45,
    sq: false
  },
  692: {
    gw: 2,
    gh: 1,
    angle: 22.5,
    sq: false
  },
  693: {
    gw: 1,
    gh: 1,
    angle: 45,
    sq: false
  },
  694: {
    gw: 2,
    gh: 1,
    angle: 22.5,
    sq: false
  },
  695: {
    gw: 1,
    gh: 1,
    angle: 45,
    sq: false
  },
  696: {
    gw: 2,
    gh: 1,
    angle: 22.5,
    sq: false
  },
  697: {
    gw: 1,
    gh: 1,
    angle: 45,
    sq: false
  },
  698: {
    gw: 2,
    gh: 1,
    angle: 22.5,
    sq: false
  },
  699: {
    gw: 0.85,
    gh: 0.85,
    angle: 45,
    sq: false
  },
  700: {
    gw: 1.85,
    gh: 0.933,
    angle: 22.5,
    sq: false
  },
  701: {
    gw: 1,
    gh: 1,
    angle: 45,
    sq: false
  },
  702: {
    gw: 2,
    gh: 1,
    angle: 22.5,
    sq: false
  },
  703: {
    gw: 1,
    gh: 1,
    angle: 45,
    sq: false
  },
  704: {
    gw: 2,
    gh: 1,
    angle: 22.5,
    sq: false
  },
  705: {
    gw: 0.767,
    gh: 0.767,
    angle: 45,
    sq: false
  },
  706: {
    gw: 1.733,
    gh: 0.883,
    angle: 22.5,
    sq: false
  },
  707: {
    gw: 1,
    gh: 1,
    angle: 45,
    sq: false
  },
  708: {
    gw: 2,
    gh: 1,
    angle: 22.5,
    sq: false
  },
  709: {
    gw: 1,
    gh: 1,
    angle: 45,
    sq: false
  },
  710: {
    gw: 2,
    gh: 1,
    angle: 22.5,
    sq: false
  },
  711: {
    gw: 1,
    gh: 1,
    angle: 45,
    sq: false
  },
  712: {
    gw: 2,
    gh: 1,
    angle: 22.5,
    sq: false
  },
  713: {
    gw: 1,
    gh: 1,
    angle: 45,
    sq: false
  },
  714: {
    gw: 2,
    gh: 1,
    angle: 22.5,
    sq: false
  },
  715: {
    gw: 1,
    gh: 1,
    angle: 45,
    sq: false
  },
  716: {
    gw: 2,
    gh: 1,
    angle: 22.5,
    sq: false
  },
  726: {
    gw: 1,
    gh: 1,
    angle: 45,
    sq: false
  },
  727: {
    gw: 2,
    gh: 1,
    angle: 22.5,
    sq: false
  },
  728: {
    gw: 1,
    gh: 1,
    angle: 45,
    sq: false
  },
  729: {
    gw: 2,
    gh: 1,
    angle: 22.5,
    sq: false
  },
  730: {
    gw: 1,
    gh: 1,
    angle: 45,
    sq: false
  },
  731: {
    gw: 2,
    gh: 1,
    angle: 22.5,
    sq: false
  },
  732: {
    gw: 1,
    gh: 1,
    angle: 45,
    sq: false
  },
  733: {
    gw: 2,
    gh: 1,
    angle: 22.5,
    sq: false
  },
  762: {
    gw: 0.617,
    gh: 0.583,
    angle: 45,
    sq: false
  },
  763: {
    gw: 1.283,
    gh: 0.6,
    angle: 22.5,
    sq: false
  },
  764: {
    gw: 1,
    gh: 1,
    angle: 45,
    sq: true
  },
  765: {
    gw: 1,
    gh: 1,
    angle: 45,
    sq: true
  },
  766: {
    gw: 1,
    gh: 1,
    angle: 45,
    sq: true
  },
  771: {
    gw: 0.617,
    gh: 0.583,
    angle: 45,
    sq: false
  },
  772: {
    gw: 1.283,
    gh: 0.6,
    angle: 22.5,
    sq: false
  },
  773: {
    gw: 0.9,
    gh: 0.817,
    angle: 45,
    sq: true
  },
  774: {
    gw: 1,
    gh: 0.85,
    angle: 45,
    sq: true
  },
  775: {
    gw: 0.867,
    gh: 0.35,
    angle: 22.5,
    sq: true
  },
  826: {
    gw: 1,
    gh: 1,
    angle: 45,
    sq: false
  },
  827: {
    gw: 1,
    gh: 1,
    angle: 45,
    sq: false
  },
  828: {
    gw: 2,
    gh: 1,
    angle: 22.5,
    sq: false
  },
  829: {
    gw: 2,
    gh: 1,
    angle: 22.5,
    sq: false
  },
  830: {
    gw: 1,
    gh: 1,
    angle: 45,
    sq: true
  },
  831: {
    gw: 1,
    gh: 1,
    angle: 45,
    sq: true
  },
  832: {
    gw: 1,
    gh: 1,
    angle: 45,
    sq: true
  },
  833: {
    gw: 1,
    gh: 1,
    angle: 45,
    sq: true
  },
  877: {
    gw: 1,
    gh: 1,
    angle: 45,
    sq: false
  },
  878: {
    gw: 2,
    gh: 1,
    angle: 22.5,
    sq: false
  },
  886: {
    gw: 1,
    gh: 1,
    angle: 45,
    sq: false
  },
  887: {
    gw: 2,
    gh: 1,
    angle: 22.5,
    sq: false
  },
  888: {
    gw: 1,
    gh: 1,
    angle: 45,
    sq: false
  },
  889: {
    gw: 2,
    gh: 1,
    angle: 22.5,
    sq: false
  },
  895: {
    gw: 1,
    gh: 1,
    angle: 45,
    sq: false
  },
  896: {
    gw: 2,
    gh: 1,
    angle: 22.5,
    sq: false
  },
  960: {
    gw: 0.617,
    gh: 0.583,
    angle: 45,
    sq: false
  },
  961: {
    gw: 1.283,
    gh: 0.6,
    angle: 22.5,
    sq: false
  },
  964: {
    gw: 1,
    gh: 1,
    angle: 45,
    sq: true
  },
  965: {
    gw: 1,
    gh: 1,
    angle: 45,
    sq: true
  },
  966: {
    gw: 1,
    gh: 1,
    angle: 45,
    sq: true
  },
  969: {
    gw: 0.617,
    gh: 0.583,
    angle: 45,
    sq: false
  },
  970: {
    gw: 1.283,
    gh: 0.6,
    angle: 22.5,
    sq: false
  },
  971: {
    gw: 0.9,
    gh: 0.817,
    angle: 45,
    sq: true
  },
  972: {
    gw: 1,
    gh: 0.85,
    angle: 45,
    sq: true
  },
  973: {
    gw: 0.867,
    gh: 0.35,
    angle: 22.5,
    sq: true
  },
  1014: {
    gw: 1,
    gh: 1,
    angle: 45,
    sq: false
  },
  1015: {
    gw: 2,
    gh: 1,
    angle: 22.5,
    sq: false
  },
  1016: {
    gw: 1,
    gh: 1,
    angle: 45,
    sq: true
  },
  1017: {
    gw: 1.008,
    gh: 1,
    angle: 45,
    sq: true
  },
  1018: {
    gw: 1,
    gh: 0.517,
    angle: 22.5,
    sq: true
  },
  1033: {
    gw: 0.617,
    gh: 0.583,
    angle: 45,
    sq: false
  },
  1034: {
    gw: 1.283,
    gh: 0.6,
    angle: 22.5,
    sq: false
  },
  1035: {
    gw: 1,
    gh: 1,
    angle: 45,
    sq: true
  },
  1036: {
    gw: 1,
    gh: 1,
    angle: 45,
    sq: true
  },
  1037: {
    gw: 0.617,
    gh: 0.583,
    angle: 45,
    sq: false
  },
  1038: {
    gw: 1.283,
    gh: 0.6,
    angle: 22.5,
    sq: false
  },
  1039: {
    gw: 1,
    gh: 1,
    angle: 45,
    sq: true
  },
  1040: {
    gw: 1,
    gh: 1,
    angle: 45,
    sq: true
  },
  1041: {
    gw: 1,
    gh: 1,
    angle: 45,
    sq: false
  },
  1042: {
    gw: 2,
    gh: 1,
    angle: 22.5,
    sq: false
  },
  1043: {
    gw: 1,
    gh: 1,
    angle: 45,
    sq: false
  },
  1044: {
    gw: 2,
    gh: 1,
    angle: 22.5,
    sq: false
  },
  1091: {
    gw: 1,
    gh: 1,
    angle: 45,
    sq: false
  },
  1092: {
    gw: 2,
    gh: 1,
    angle: 22.5,
    sq: false
  },
  1093: {
    gw: 1,
    gh: 1,
    angle: 45,
    sq: true
  },
  1094: {
    gw: 1,
    gh: 1,
    angle: 45,
    sq: true
  },
  1108: {
    gw: 2,
    gh: 1,
    angle: 22.5,
    sq: false
  },
  1187: {
    gw: 0.767,
    gh: 0.767,
    angle: 45,
    sq: false
  },
  1188: {
    gw: 1.517,
    gh: 0.767,
    angle: 22.5,
    sq: false
  },
  1189: {
    gw: 1,
    gh: 1,
    angle: 45,
    sq: true
  },
  1190: {
    gw: 1,
    gh: 1,
    angle: 45,
    sq: true
  },
  1198: {
    gw: 1,
    gh: 1,
    angle: 45,
    sq: false
  },
  1199: {
    gw: 2,
    gh: 1,
    angle: 22.5,
    sq: false
  },
  1200: {
    gw: 0.267,
    gh: 0.267,
    angle: 45,
    sq: true
  },
  1201: {
    gw: 0.517,
    gh: 0.267,
    angle: 22.5,
    sq: true
  },
  1256: {
    gw: 1,
    gh: 1,
    angle: 45,
    sq: false
  },
  1257: {
    gw: 2,
    gh: 1,
    angle: 22.5,
    sq: false
  },
  1258: {
    gw: 1,
    gh: 1,
    angle: 45,
    sq: false
  },
  1259: {
    gw: 2,
    gh: 1,
    angle: 22.5,
    sq: false
  },
  1305: {
    gw: 0.617,
    gh: 0.583,
    angle: 45,
    sq: false
  },
  1306: {
    gw: 1.3,
    gh: 0.6,
    angle: 22.5,
    sq: false
  },
  1307: {
    gw: 0.683,
    gh: 0.6,
    angle: 45,
    sq: true
  },
  1308: {
    gw: 1,
    gh: 0.617,
    angle: 45,
    sq: true
  },
  1309: {
    gw: 0.267,
    gh: 0.117,
    angle: 22.5,
    sq: true
  },
  1316: {
    gw: 0.617,
    gh: 0.583,
    angle: 45,
    sq: false
  },
  1317: {
    gw: 1.3,
    gh: 0.6,
    angle: 22.5,
    sq: false
  },
  1318: {
    gw: 0.683,
    gh: 0.6,
    angle: 45,
    sq: true
  },
  1319: {
    gw: 1,
    gh: 0.617,
    angle: 45,
    sq: true
  },
  1320: {
    gw: 0.267,
    gh: 0.117,
    angle: 22.5,
    sq: true
  },
  1325: {
    gw: 1,
    gh: 1,
    angle: 45,
    sq: true
  },
  1326: {
    gw: 1,
    gh: 1,
    angle: 45,
    sq: true
  },
  1338: {
    gw: 1,
    gh: 1,
    angle: 45,
    sq: false
  },
  1339: {
    gw: 2,
    gh: 1,
    angle: 22.5,
    sq: false
  },
  1341: {
    gw: 1,
    gh: 1,
    angle: 45,
    sq: false
  },
  1342: {
    gw: 2,
    gh: 1,
    angle: 22.5,
    sq: false
  },
  1344: {
    gw: 1,
    gh: 1,
    angle: 45,
    sq: false
  },
  1345: {
    gw: 2,
    gh: 1,
    angle: 22.5,
    sq: false
  },
  1717: {
    gw: 1,
    gh: 1,
    angle: 45,
    sq: false
  },
  1718: {
    gw: 2,
    gh: 1,
    angle: 22.5,
    sq: false
  },
  1723: {
    gw: 1,
    gh: 1,
    angle: 45,
    sq: false
  },
  1724: {
    gw: 2,
    gh: 1,
    angle: 22.5,
    sq: false
  },
  1743: {
    gw: 1,
    gh: 1,
    angle: 45,
    sq: false
  },
  1744: {
    gw: 2,
    gh: 1,
    angle: 22.5,
    sq: false
  },
  1745: {
    gw: 1,
    gh: 1,
    angle: 45,
    sq: false
  },
  1746: {
    gw: 2,
    gh: 1,
    angle: 22.5,
    sq: false
  },
  1747: {
    gw: 1,
    gh: 1,
    angle: 45,
    sq: false
  },
  1748: {
    gw: 2,
    gh: 1,
    angle: 22.5,
    sq: false
  },
  1749: {
    gw: 1,
    gh: 1,
    angle: 45,
    sq: false
  },
  1750: {
    gw: 2,
    gh: 1,
    angle: 22.5,
    sq: false
  },
  1758: {
    gw: 1,
    gh: 1,
    angle: 45,
    sq: false
  },
  1759: {
    gw: 2,
    gh: 1,
    angle: 22.5,
    sq: false
  },
  1760: {
    gw: 1,
    gh: 1,
    angle: 45,
    sq: false
  },
  1761: {
    gw: 2,
    gh: 1,
    angle: 22.5,
    sq: false
  },
  1762: {
    gw: 1,
    gh: 1,
    angle: 45,
    sq: false
  },
  1763: {
    gw: 2,
    gh: 1,
    angle: 22.5,
    sq: false
  },
  1773: {
    gw: 2,
    gh: 1,
    angle: 22.5,
    sq: false
  },
  1774: {
    gw: 2,
    gh: 1,
    angle: 22.5,
    sq: false
  },
  1775: {
    gw: 2,
    gh: 1,
    angle: 22.5,
    sq: false
  },
  1776: {
    gw: 2,
    gh: 1,
    angle: 22.5,
    sq: false
  },
  1785: {
    gw: 2,
    gh: 1,
    angle: 22.5,
    sq: false
  },
  1786: {
    gw: 2,
    gh: 1,
    angle: 22.5,
    sq: false
  },
  1787: {
    gw: 2,
    gh: 1,
    angle: 22.5,
    sq: false
  },
  1788: {
    gw: 2,
    gh: 1,
    angle: 22.5,
    sq: false
  },
  1789: {
    gw: 2,
    gh: 1,
    angle: 22.5,
    sq: false
  },
  1790: {
    gw: 2,
    gh: 1,
    angle: 22.5,
    sq: false
  },
  1791: {
    gw: 2,
    gh: 1,
    angle: 22.5,
    sq: false
  },
  1792: {
    gw: 2,
    gh: 1,
    angle: 22.5,
    sq: false
  },
  1794: {
    gw: 2,
    gh: 1,
    angle: 22.5,
    sq: false
  },
  1796: {
    gw: 2,
    gh: 1,
    angle: 22.5,
    sq: false
  },
  1798: {
    gw: 2,
    gh: 1,
    angle: 22.5,
    sq: false
  },
  1800: {
    gw: 2,
    gh: 1,
    angle: 22.5,
    sq: false
  },
  1802: {
    gw: 2,
    gh: 1,
    angle: 22.5,
    sq: false
  },
  1804: {
    gw: 2,
    gh: 1,
    angle: 22.5,
    sq: false
  },
  1806: {
    gw: 2,
    gh: 1,
    angle: 22.5,
    sq: false
  },
  1808: {
    gw: 2,
    gh: 1,
    angle: 22.5,
    sq: false
  },
  1810: {
    gw: 2,
    gh: 1,
    angle: 22.5,
    sq: false
  },
  1899: {
    gw: 1,
    gh: 1,
    angle: 45,
    sq: false
  },
  1900: {
    gw: 2,
    gh: 1,
    angle: 22.5,
    sq: false
  },
  1901: {
    gw: 0.367,
    gh: 0.433,
    angle: 45,
    sq: true
  },
  1902: {
    gw: 0.967,
    gh: 0.45,
    angle: 45,
    sq: true
  },
  1906: {
    gw: 1,
    gh: 1,
    angle: 45,
    sq: false
  },
  1907: {
    gw: 2,
    gh: 1,
    angle: 22.5,
    sq: false
  }
};
var flyPortal = "fly";
var cubePortal = "cube";
var portalWaveType = "portal_wave";
var portalUfoType = "portal_ufo";
var allObjects = window.allobjects();
if (!allObjects[1331]) {
  allObjects[1331] = {
    "can_color": false,
    "default_base_color_channel": 0,
    "frame": "portal_17_front_001.png",
    "glow_frame": "portal_17_front_glow_001.png",
    "gridH": 2.866666555404663,
    "gridW": 1.1333333253860474,
    "spritesheet": "GJ_GameSheet02-uhd",
    "type": "portal",
    "z": 10,
    "portalParticle": true,
    "portalParticleColor": 0x00ffff
  };
}
var _speedPortalIds = [200, 201, 202, 203, 1334];
for (var _i = 0, _speedPortalIds2 = _speedPortalIds; _i < _speedPortalIds2.length; _i++) {
  var _spId = _speedPortalIds2[_i];
  if (!allObjects[_spId] || allObjects[_spId].type !== "speed") {
    allObjects[_spId] = Object.assign({
      gridW: 1,
      gridH: 1
    }, allObjects[_spId] || {}, {
      type: "speed"
    });
  }
}
var objsWithGlow = [1, 2, 3, 4, 6, 7, 83, 8, 39, 103, 392, 35, 36, 40, 140, 141, 62, 65, 66, 68, 195, 196, 1022, 1594];
for (var _i2 = 0, _objsWithGlow = objsWithGlow; _i2 < _objsWithGlow.length; _i2++) {
  var obj = _objsWithGlow[_i2];
  if (allObjects[obj]) {
    allObjects[obj].glow = true;
  }
}
window._animatedSprites = [];
window._animTimer = 0;
function getObjectFromId(id) {
  return allObjects[id] || null;
}
window.LevelObject = /*#__PURE__*/function () {
  "use strict";

  function LevelObject(scene, cameraXRef) {
    _classCallCheck(this, LevelObject);
    this._scene = scene;
    this._cameraXRef = cameraXRef;
    this.additiveContainer = scene.add.container(0, 0).setDepth(-1);
    this.container = scene.add.container(0, 0);
    this.topContainer = scene.add.container(0, 0).setDepth(13);
    this.objects = [];
    this.endXPos = 0;
    this._groundY = 0;
    this._ceilingY = null;
    this._flyGroundActive = false;
    this._groundAnimFrom = 0;
    this._groundAnimTo = 0;
    this._groundAnimTime = 0;
    this._groundAnimDuration = 0;
    this._groundAnimating = false;
    this._groundTargetValue = 0;
    this._flyFloorY = 0;
    this._flyCeilingY = null;
    this._flyVisualOnly = false;
    this.flyCameraTarget = null;
    this._colorTriggers = [];
    this._colorTriggerIdx = 0;
    this._audioScaleSprites = [];
    this._orbSprites = [];
    this._coinSprites = [];
    this._sawSprites = [];
    this._enterEffectTriggers = [];
    this._enterEffectTriggerIdx = 0;
    this._activeEnterEffect = 0;
    this._activeExitEffect = 0;
    this._moveTriggers = [];
    this._moveTriggerIdx = 0;
    this._activeMoveTweens = [];
    this._alphaTriggers = [];
    this._alphaTriggerIdx = 0;
    this._activeAlphaTweens = [];
    this._rotateTriggers = [];
    this._rotateTriggerIdx = 0;
    this._activeRotateTweens = [];
    this._pulseTriggers = [];
    this._pulseTriggerIdx = 0;
    this._activePulses = [];
    this._colorChannelSprites = {};
    this._groupSprites = {};
    this._groupOffsets = {};
    this._groupOpacity = {};
    this._groupColliders = {};
    this._sections = [];
    this._sectionContainers = [];
    this._collisionSections = [];
    this._nearbyBuffer = [];
    this._visMinSec = -1;
    this._visMaxSec = -1;
    this._groundStartScreenY = b(0);
    this._ceilingStartScreenY = 0;
    this._activeStartPosIndex = -1;
    this._startPositions = [];
    this._buildGround();
  }
  return _createClass(LevelObject, [{
    key: "getStartPositions",
    value: function getStartPositions() {
      return this._startPositions.slice().sort(function (a, b) {
        return a.x - b.x;
      });
    }
  }, {
    key: "fastForwardTriggers",
    value: function fastForwardTriggers(targetX, colorManager) {
      var triggers = this._colorTriggers.sort(function (a, b) {
        return a.x - b.x;
      });
      var _iterator = _createForOfIteratorHelper(triggers),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var trigger = _step.value;
          if (trigger.x <= targetX) {
            colorManager.triggerColor(trigger.index, trigger.color, 0);
          } else {
            break;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "loadLevel",
    value: function loadLevel(levelData) {
      var _parseLevel = parseLevel(levelData),
        levelObjects = _parseLevel.objects,
        settingslist = _parseLevel.settings;
      this._spawnLevelObjects(levelObjects);
      this._setUpSettings(settingslist);
      window.levelObjects = levelObjects;
      window.settingslist = settingslist;
    }
  }, {
    key: "_setUpSettings",
    value: function _setUpSettings(settingsStr) {
      this._initialColors = {};
      this._backgroundId = null;
      this._groundId = null;
      if (!settingsStr) return;
      var pairs = settingsStr.split(",");
      window.settingsMap = {};
      for (var i = 0; i + 1 < pairs.length; i += 2) {
        settingsMap[pairs[i]] = pairs[i + 1];
      }
      var colorStr = settingsMap["kS38"];
      window._backgroundId = settingsMap["kA6"] ? settingsMap["kA6"] : "01";
      if (window._backgroundId.length < 2) {
        window._backgroundId = "0" + window._backgroundId;
      }
      window._groundId = getGroundTextureId(settingsMap["kA7"]);
      if (colorStr) {
        var channels = colorStr.split("|");
        var _iterator2 = _createForOfIteratorHelper(channels),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var ch = _step2.value;
            if (!ch) continue;
            var props = ch.split("_");
            var colorProps = {};
            for (var j = 0; j + 1 < props.length; j += 2) {
              colorProps[parseInt(props[j], 10)] = props[j + 1];
            }
            var channelId = parseInt(colorProps[6], 10);
            if (!isNaN(channelId)) {
              this._initialColors[channelId] = {
                r: parseInt(colorProps[1] || "255", 10),
                g: parseInt(colorProps[2] || "255", 10),
                b: parseInt(colorProps[3] || "255", 10)
              };
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
      var parseColorEntry = function parseColorEntry(str) {
        if (!str) return null;
        var props = str.split("_");
        var cp = {};
        for (var _j = 0; _j + 1 < props.length; _j += 2) {
          cp[parseInt(props[_j], 10)] = props[_j + 1];
        }
        return {
          r: parseInt(cp[1] || "255", 10),
          g: parseInt(cp[2] || "255", 10),
          b: parseInt(cp[3] || "255", 10)
        };
      };
      if (!this._initialColors[1000] && settingsMap["kS29"]) {
        var col = parseColorEntry(settingsMap["kS29"]);
        if (col) this._initialColors[1000] = col;
      }
      if (!this._initialColors[1001] && settingsMap["kS30"]) {
        var _col = parseColorEntry(settingsMap["kS30"]);
        if (_col) this._initialColors[1001] = _col;
      }
    }
  }, {
    key: "_buildGround",
    value: function _buildGround() {
      if (window.isEditor) return; // not dealing with ts rn
      var scene = this._scene;
      window._groundId = window._groundId ? window._groundId : "00";
      var groundFrame = scene.textures.getFrame("groundSquare_" + window._groundId + "_001.png");
      this._tileW = groundFrame ? groundFrame.width : 1012;
      this._groundTiles = [];
      this._ceilingTiles = [];
      var tileCount = Math.ceil(screenWidth / this._tileW) + 2;
      var groundY = b(0);
      var startX = -centerX;
      for (var i = 0; i < tileCount; i++) {
        var tileX = startX + i * this._tileW;
        var groundTile = scene.add.image(0, groundY, "groundSquare_" + window._groundId + "_001.png");
        groundTile.setOrigin(0, 0);
        groundTile.setTint(17578);
        groundTile.setDepth(20);
        groundTile._worldX = tileX;
        this._groundTiles.push(groundTile);
        var ceilingTile = scene.add.image(0, groundY, "groundSquare_" + window._groundId + "_001.png");
        ceilingTile.setOrigin(0, 1);
        ceilingTile.setFlipY(true);
        ceilingTile.setTint(17578);
        ceilingTile.setDepth(20);
        ceilingTile.setVisible(false);
        ceilingTile._worldX = tileX;
        this._ceilingTiles.push(ceilingTile);
      }
      this._maxGroundWorldX = startX + (tileCount - 1) * this._tileW;
      var floorLineFrame = scene.textures.getFrame("GJ_WebSheet", "floorLine_01_001.png");
      var floorLineWidth = floorLineFrame ? floorLineFrame.width : 888;
      var floorLineScale = screenWidth / floorLineWidth;
      this._groundLine = scene.add.image(screenWidth / 2, groundY - 1, "GJ_WebSheet", "floorLine_01_001.png").setOrigin(0.5, 0).setScale(floorLineScale, 1).setBlendMode(S).setDepth(21).setScrollFactor(0);
      this._ceilingLine = scene.add.image(screenWidth / 2, groundY + 1, "GJ_WebSheet", "floorLine_01_001.png").setOrigin(0.5, 1).setScale(floorLineScale, 1).setFlipY(true).setBlendMode(S).setDepth(21).setScrollFactor(0).setVisible(false);
      var shadowAlpha = 100 / 255;
      this._groundShadowL = scene.add.image(-1, groundY, "GJ_WebSheet", "groundSquareShadow_001.png").setOrigin(0, 0).setScrollFactor(0).setDepth(22).setAlpha(shadowAlpha).setScale(0.7, 1).setBlendMode(E);
      this._groundShadowR = scene.add.image(screenWidth + 1, groundY, "GJ_WebSheet", "groundSquareShadow_001.png").setOrigin(1, 0).setScrollFactor(0).setDepth(22).setAlpha(shadowAlpha).setScale(0.7, 1).setFlipX(true).setBlendMode(E);
      this._ceilingShadowL = scene.add.image(-1, groundY, "GJ_WebSheet", "groundSquareShadow_001.png").setOrigin(0, 1).setScrollFactor(0).setDepth(22).setAlpha(shadowAlpha).setScale(0.7, 1).setFlipY(true).setBlendMode(E).setVisible(false);
      this._ceilingShadowR = scene.add.image(screenWidth + 1, groundY, "GJ_WebSheet", "groundSquareShadow_001.png").setOrigin(1, 1).setScrollFactor(0).setDepth(22).setAlpha(shadowAlpha).setScale(0.7, 1).setFlipX(true).setFlipY(true).setBlendMode(E).setVisible(false);
    }
  }, {
    key: "applyGroundTexture",
    value: function applyGroundTexture() {
      if (window.isEditor) return; // not dealing with ts rn
      var gId = window._groundId || "00";
      var texKey = "groundSquare_" + gId + "_001.png";
      if (!this._scene.textures.exists(texKey)) return;
      var groundFrame = this._scene.textures.getFrame(texKey);
      this._tileW = groundFrame ? groundFrame.width : this._tileW;
      var _iterator3 = _createForOfIteratorHelper(this._groundTiles),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var tile = _step3.value;
          tile.setTexture(texKey);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      var _iterator4 = _createForOfIteratorHelper(this._ceilingTiles),
        _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var _tile = _step4.value;
          _tile.setTexture(texKey);
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
    }
  }, {
    key: "resizeScreen",
    value: function resizeScreen() {
      var newTile;
      var newCeilingTile;
      var scene = this._scene;
      var tileWidth = this._tileW;
      var requiredTileCount = Math.ceil(screenWidth / tileWidth) + 2;
      var groundY = b(0);
      while (this._groundTiles.length < requiredTileCount) {
        var newTileX = this._maxGroundWorldX + tileWidth;
        var newGroundTile = scene.add.image(0, groundY, "groundSquare_" + window._groundId + "_001.png");
        newGroundTile.setOrigin(0, 0).setTint(((newTile = this._groundTiles[0]) == null ? undefined : newTile.tintTopLeft) || 17578).setDepth(20);
        newGroundTile._worldX = newTileX;
        this._groundTiles.push(newGroundTile);
        var _newCeilingTile = scene.add.image(0, groundY, "groundSquare_" + window._groundId + "_001.png");
        _newCeilingTile.setOrigin(0, 1).setFlipY(true).setTint(((_newCeilingTile = this._groundTiles[0]) == null ? undefined : _newCeilingTile.tintTopLeft) || 17578).setDepth(20).setVisible(false);
        _newCeilingTile._worldX = newTileX;
        this._ceilingTiles.push(_newCeilingTile);
        this._maxGroundWorldX = newTileX;
      }
      var floorLineFrame = this._scene.textures.getFrame("GJ_WebSheet", "floorLine_01_001.png");
      var floorLineScale = screenWidth / (floorLineFrame ? floorLineFrame.width : 888);
      this._groundLine.x = screenWidth / 2;
      this._groundLine.setScale(floorLineScale, 1);
      this._ceilingLine.x = screenWidth / 2;
      this._ceilingLine.setScale(floorLineScale, 1);
      this._groundShadowR.x = screenWidth + 1;
      this._ceilingShadowR.x = screenWidth + 1;
    }
  }, {
    key: "updateGroundTiles",
    value: function updateGroundTiles() {
      var cameraY = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var cameraX = this._cameraXRef.value;
      var tileWidth = this._tileW;
      var leftTileIndex;
      var rightTileIndex;
      var maxWorldX = this._maxGroundWorldX || -Infinity;
      var ceilingActive = !this._flyGroundActive && this._flyCeilingY !== null;
      if (this._flyVisualOnly && this._flyCeilingY !== null) {
        leftTileIndex = b(0) + cameraY;
        rightTileIndex = b(this._flyCeilingY) + cameraY;
      } else if (this._flyGroundActive && this._groundTargetValue > 0.001) {
        var groundTarget = this._groundTargetValue;
        var targetGroundY = 620;
        var targetCeilingY = 20;
        leftTileIndex = this._groundStartScreenY + (targetGroundY - this._groundStartScreenY) * groundTarget;
        rightTileIndex = this._ceilingStartScreenY + (targetCeilingY - this._ceilingStartScreenY) * groundTarget;
        var groundScreenY = b(0) + cameraY;
        if (leftTileIndex > groundScreenY) {
          leftTileIndex = groundScreenY;
        }
      } else {
        leftTileIndex = b(0) + cameraY;
        rightTileIndex = ceilingActive ? 20 : 0;
      }
      for (var i = 0; i < this._groundTiles.length; i++) {
        var groundTile = this._groundTiles[i];
        var ceilingTile = this._ceilingTiles[i];
        if (groundTile._worldX + tileWidth <= cameraX) {
          groundTile._worldX = maxWorldX + tileWidth;
          ceilingTile._worldX = groundTile._worldX;
          maxWorldX = groundTile._worldX;
          this._maxGroundWorldX = maxWorldX;
        }
        var tileScreenX = groundTile._worldX - cameraX;
        groundTile.x = tileScreenX;
        groundTile.y = leftTileIndex;
        ceilingTile.x = tileScreenX;
        ceilingTile.y = rightTileIndex;
        ceilingTile.setVisible(this._flyGroundActive && this._groundTargetValue > 0 || ceilingActive);
      }
      this._groundLine.y = leftTileIndex;
      if (this._flyGroundActive && this._groundTargetValue > 0 || ceilingActive) {
        this._ceilingLine.y = rightTileIndex;
        this._ceilingLine.setVisible(true);
      } else {
        this._ceilingLine.setVisible(false);
      }
      this._groundShadowL.y = leftTileIndex;
      this._groundShadowR.y = leftTileIndex;
      var ceilingVisible = this._flyGroundActive && this._groundTargetValue > 0 || ceilingActive;
      this._ceilingShadowL.y = rightTileIndex;
      this._ceilingShadowR.y = rightTileIndex;
      this._ceilingShadowL.setVisible(ceilingVisible);
      this._ceilingShadowR.setVisible(ceilingVisible);
    }
  }, {
    key: "shiftGroundTiles",
    value: function shiftGroundTiles(shiftAmount) {
      for (var i = 0; i < this._groundTiles.length; i++) {
        this._groundTiles[i]._worldX += shiftAmount;
        this._ceilingTiles[i]._worldX += shiftAmount;
      }
      this._maxGroundWorldX += shiftAmount;
    }
  }, {
    key: "resetGroundTiles",
    value: function resetGroundTiles(cameraX) {
      var tileWidth = this._tileW;
      for (var i = 0; i < this._groundTiles.length; i++) {
        this._groundTiles[i]._worldX = cameraX + i * tileWidth;
        this._ceilingTiles[i]._worldX = cameraX + i * tileWidth;
      }
      this._maxGroundWorldX = cameraX + (this._groundTiles.length - 1) * tileWidth;
      this.resetGroundState();
    }
  }, {
    key: "resetGroundState",
    value: function resetGroundState() {
      this._flyGroundActive = false;
      this._groundTargetValue = 0;
      this._groundAnimating = false;
      this._groundY = 0;
      this._ceilingY = null;
      this._flyCeilingY = null;
      this._flyVisualOnly = false;
      this.flyCameraTarget = null;
    }
  }, {
    key: "_computeFlyBounds",
    value: function _computeFlyBounds(centerY) {
      var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : f;
      var isPortal = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var floorY;
      if (isPortal) {
        floorY = centerY - f / 2;
      } else {
        floorY = centerY - height / 2;
      }
      floorY = Math.floor(floorY / a) * a;
      floorY = Math.max(0, floorY);
      return {
        floorY: floorY,
        ceilingY: floorY + height
      };
    }
  }, {
    key: "setFlyMode",
    value: function setFlyMode(enabled, centerY) {
      var height = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : f;
      var visualOnly = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      if (enabled) {
        var bounds = this._computeFlyBounds(centerY, height, visualOnly);
        this._flyFloorY = bounds.floorY;
        this._flyCeilingY = bounds.ceilingY;
        this._flyVisualOnly = visualOnly;
        if (visualOnly) {
          this._flyGroundActive = true;
        } else {
          this._flyGroundActive = true;
        }
        var flyCenter = this._flyFloorY + height / 2;
        this.flyCameraTarget = flyCenter - 320 + o;
        if (this.flyCameraTarget < 0) {
          this.flyCameraTarget = 0;
        }
        var currentCameraY = this._scene && this._scene._cameraY || 0;
        this._groundStartScreenY = b(0) + currentCameraY;
        this._ceilingStartScreenY = 0;
        this._groundAnimFrom = this._groundTargetValue;
        this._groundAnimTo = 1;
        this._groundAnimTime = 0;
        this._groundAnimDuration = 0.5;
        this._groundAnimating = true;
      } else {
        this.flyCameraTarget = null;
        this._flyCeilingY = null;
        this._flyFloorY = null;
        this._flyVisualOnly = false;
        if (this._flyGroundActive) {
          this._groundAnimFrom = this._groundTargetValue;
          this._groundAnimTo = 0;
          this._groundAnimTime = 0;
          this._groundAnimDuration = 0.5;
          this._groundAnimating = true;
          this._flyGroundActive = false;
        } else {
          this._groundAnimating = false;
          this._groundTargetValue = 0;
        }
      }
    }
  }, {
    key: "stepGroundAnimation",
    value: function stepGroundAnimation(deltaTime) {
      if (!this._groundAnimating) {
        return;
      }
      this._groundAnimTime += deltaTime;
      var progress = this._groundAnimDuration > 0 ? Math.min(this._groundAnimTime / this._groundAnimDuration, 1) : 1;
      this._groundTargetValue = this._groundAnimFrom + (this._groundAnimTo - this._groundAnimFrom) * progress;
      if (progress >= 1) {
        this._groundAnimating = false;
        this._groundTargetValue = this._groundAnimTo;
        if (this._groundAnimTo === 0) {
          this._flyGroundActive = false;
        }
      }
    }
  }, {
    key: "getFloorY",
    value: function getFloorY() {
      if (this._flyGroundActive) {
        if (this._flyVisualOnly) {
          return 0;
        }
        return this._flyFloorY;
      } else {
        return 0;
      }
    }
  }, {
    key: "getCeilingY",
    value: function getCeilingY() {
      if (this._flyCeilingY !== null) {
        return this._flyCeilingY;
      } else {
        return null;
      }
    }
  }, {
    key: "_applyVisualProps",
    value: function _applyVisualProps(scene, sprite, frameName, objectData) {
      var colorData = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
      if (!sprite) {
        return;
      }
      var _ref = function (scene, frameName) {
          var textureInfo = getAtlasFrame(scene, frameName);
          if (!textureInfo) {
            return {
              dx: 0,
              dy: 0
            };
          }
          var frame = scene.textures.get(textureInfo.atlas).get(textureInfo.frame);
          if (!frame) {
            return {
              dx: 0,
              dy: 0
            };
          }
          var customData = frame.customData || {};
          if (customData.gjSpriteOffset) {
            return {
              dx: customData.gjSpriteOffset.x || 0,
              dy: -(customData.gjSpriteOffset.y || 0)
            };
          }
          var realWidth = frame.realWidth;
          var realHeight = frame.realHeight;
          var frameWidth = frame.width;
          var frameHeight = frame.height;
          var sourceX = 0;
          var sourceY = 0;
          if (customData.spriteSourceSize) {
            sourceX = customData.spriteSourceSize.x || 0;
            sourceY = customData.spriteSourceSize.y || 0;
          }
          return {
            dx: realWidth / 2 - (sourceX + frameWidth / 2),
            dy: realHeight / 2 - (sourceY + frameHeight / 2)
          };
        }(scene, frameName),
        offsetX = _ref.dx,
        offsetY = _ref.dy;
      if (objectData.flipX) {
        sprite.setFlipX(true);
        offsetX = -offsetX;
      }
      if (objectData.flipY) {
        sprite.setFlipY(true);
        offsetY = -offsetY;
      }
      var totalRotation = (sprite.getData("gjBaseRotationDeg") || 0) + objectData.rot;
      if (totalRotation !== 0) {
        sprite.setAngle(totalRotation);
        var rad = totalRotation * Math.PI / 180;
        var cosR = Math.cos(rad);
        var sinR = Math.sin(rad);
        var rx = offsetX * cosR - offsetY * sinR;
        var ry = offsetX * sinR + offsetY * cosR;
        offsetX = rx;
        offsetY = ry;
      }
      sprite.x += offsetX;
      sprite.y += offsetY;
      if (objectData.scale !== 1) {
        sprite.setScale(objectData.scale);
      }
      if (colorData) {
        if (colorData.tint !== undefined) {
          sprite.setTint(colorData.tint);
        } else if (colorData.black) {
          sprite.setTint(0);
        }
      }
    }
  }, {
    key: "_addVisualSprite",
    value: function _addVisualSprite(sprite) {
      var objectData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      if (sprite) {
        if (objectData && objectData.blend === "additive") {
          sprite.setBlendMode(S);
          sprite._eeLayer = 0;
        } else if (objectData && objectData._portalFront) {
          sprite._eeLayer = 2;
        } else if (objectData && objectData.z !== undefined && objectData.z < 0) {
          sprite._eeLayer = 0;
        } else {
          sprite._eeLayer = 1;
        }
      }
    }
  }, {
    key: "_getGlowFrameName",
    value: function _getGlowFrameName(frameName) {
      if (frameName && frameName.endsWith("_001.png")) {
        return frameName.replace("_001.png", "_glow_001.png");
      } else {
        return null;
      }
    }
  }, {
    key: "_addGlowSprite",
    value: function _addGlowSprite(scene, x, y, frameName, objectData, worldX) {
      // Low Detail Mode: skip glow sprites entirely — they're ADD-blend canvas
      // draws (expensive in Coherent GT; up to ~2250 per level)
      if (window._gdLowDetail) return;
      var glowFrameName = this._getGlowFrameName(frameName);
      if (!glowFrameName) {
        return;
      }
      if (!getAtlasFrame(scene, glowFrameName) && !scene.textures.exists(glowFrameName)) {
        return;
      }
      var glowSprite = addImageToScene(scene, x, y, glowFrameName);
      if (glowSprite) {
        this._applyVisualProps(scene, glowSprite, glowFrameName, objectData);
        glowSprite.setBlendMode(S);
        glowSprite._eeLayer = 0;
        if (worldX !== undefined) {
          glowSprite._eeWorldX = worldX;
          glowSprite._eeBaseY = y;
          this._addToSection(glowSprite);
        }
        return glowSprite;
      }
      return null;
    }
  }, {
    key: "_spawnObject",
    value: function _spawnObject(levelObj) {
      var _this = this;
      this.objectSprites = this.objectSprites || [];
      var scene = this._scene;
      var objectDef = getObjectFromId(levelObj.id);
      if (objectDef && objectDef.type === triggerType) {
        if (levelObj.id === 29 || levelObj.id === 30) {
          var _levelObj$_raw$, _levelObj$_raw$2, _levelObj$_raw$3, _levelObj$_raw$4;
          this._colorTriggers.push({
            x: levelObj.x * 2,
            index: levelObj.id === 29 ? 1000 : 1001,
            color: {
              r: parseInt((_levelObj$_raw$ = levelObj._raw[7]) !== null && _levelObj$_raw$ !== void 0 ? _levelObj$_raw$ : 255, 10),
              g: parseInt((_levelObj$_raw$2 = levelObj._raw[8]) !== null && _levelObj$_raw$2 !== void 0 ? _levelObj$_raw$2 : 255, 10),
              b: parseInt((_levelObj$_raw$3 = levelObj._raw[9]) !== null && _levelObj$_raw$3 !== void 0 ? _levelObj$_raw$3 : 255, 10)
            },
            duration: parseFloat((_levelObj$_raw$4 = levelObj._raw[10]) !== null && _levelObj$_raw$4 !== void 0 ? _levelObj$_raw$4 : 0),
            tintGround: levelObj._raw[14] === "1"
          });
        }
        if (objectDef.enterEffect) {
          this._enterEffectTriggers.push({
            x: levelObj.x * 2,
            effect: objectDef.enterEffect
          });
        }
        if (levelObj.id === 901) {
          var _raw$, _raw$2, _raw$3, _raw$4, _raw$5, _raw$6;
          var _raw = levelObj._raw;
          this._moveTriggers.push({
            x: levelObj.x * 2,
            duration: parseFloat((_raw$ = _raw[10]) !== null && _raw$ !== void 0 ? _raw$ : 0),
            easingType: parseInt((_raw$2 = _raw[30]) !== null && _raw$2 !== void 0 ? _raw$2 : 0, 10),
            easingRate: parseFloat((_raw$3 = _raw[85]) !== null && _raw$3 !== void 0 ? _raw$3 : 2),
            targetGroup: parseInt((_raw$4 = _raw[51]) !== null && _raw$4 !== void 0 ? _raw$4 : 0, 10),
            offsetX: parseFloat((_raw$5 = _raw[28]) !== null && _raw$5 !== void 0 ? _raw$5 : 0) * 2,
            offsetY: parseFloat((_raw$6 = _raw[29]) !== null && _raw$6 !== void 0 ? _raw$6 : 0) * 2,
            lockX: _raw[58] === "1",
            lockY: _raw[59] === "1"
          });
        }
        if (levelObj.id === 1007) {
          var _raw2$, _raw2$2, _raw2$3;
          var _raw2 = levelObj._raw;
          this._alphaTriggers.push({
            x: levelObj.x * 2,
            duration: parseFloat((_raw2$ = _raw2[10]) !== null && _raw2$ !== void 0 ? _raw2$ : 0),
            targetGroup: parseInt((_raw2$2 = _raw2[51]) !== null && _raw2$2 !== void 0 ? _raw2$2 : 0, 10),
            targetOpacity: Math.max(0, Math.min(1, parseFloat((_raw2$3 = _raw2[35]) !== null && _raw2$3 !== void 0 ? _raw2$3 : 1)))
          });
        }
        if (levelObj.id === 899) {
          var _raw3$;
          var _raw3 = levelObj._raw;
          var targetChannel = parseInt((_raw3$ = _raw3[23]) !== null && _raw3$ !== void 0 ? _raw3$ : 0, 10);
          if (targetChannel > 0) {
            var _raw3$2, _raw3$3, _raw3$4, _raw3$5, _raw3$6;
            this._colorTriggers.push({
              x: levelObj.x * 2,
              index: targetChannel,
              color: {
                r: parseInt((_raw3$2 = _raw3[7]) !== null && _raw3$2 !== void 0 ? _raw3$2 : 255, 10),
                g: parseInt((_raw3$3 = _raw3[8]) !== null && _raw3$3 !== void 0 ? _raw3$3 : 255, 10),
                b: parseInt((_raw3$4 = _raw3[9]) !== null && _raw3$4 !== void 0 ? _raw3$4 : 255, 10)
              },
              duration: parseFloat((_raw3$5 = _raw3[10]) !== null && _raw3$5 !== void 0 ? _raw3$5 : 0),
              tintGround: _raw3[14] === "1",
              opacity: parseFloat((_raw3$6 = _raw3[35]) !== null && _raw3$6 !== void 0 ? _raw3$6 : 1)
            });
          }
        }
        if (levelObj.id === 1346) {
          var _raw4$, _raw4$2, _raw4$3, _raw4$4, _raw4$5, _raw4$6, _raw4$7;
          var _raw4 = levelObj._raw;
          this._rotateTriggers.push({
            x: levelObj.x * 2,
            targetGroup: parseInt((_raw4$ = _raw4[51]) !== null && _raw4$ !== void 0 ? _raw4$ : 0, 10),
            degrees: parseFloat((_raw4$2 = _raw4[68]) !== null && _raw4$2 !== void 0 ? _raw4$2 : 0),
            duration: parseFloat((_raw4$3 = _raw4[10]) !== null && _raw4$3 !== void 0 ? _raw4$3 : 0),
            easingType: parseInt((_raw4$4 = _raw4[30]) !== null && _raw4$4 !== void 0 ? _raw4$4 : 0, 10),
            easingRate: parseFloat((_raw4$5 = _raw4[85]) !== null && _raw4$5 !== void 0 ? _raw4$5 : 2),
            lockRotation: _raw4[70] === "1",
            times360: parseInt((_raw4$6 = _raw4[69]) !== null && _raw4$6 !== void 0 ? _raw4$6 : 0, 10),
            centerGroup: parseInt((_raw4$7 = _raw4[71]) !== null && _raw4$7 !== void 0 ? _raw4$7 : 0, 10)
          });
        }
        if (levelObj.id === 1006) {
          var _raw5$, _raw5$2, _raw5$3, _raw5$4, _raw5$5, _raw5$6, _raw5$7, _raw5$8, _raw5$9;
          var _raw5 = levelObj._raw;
          var targetType = parseInt((_raw5$ = _raw5[52]) !== null && _raw5$ !== void 0 ? _raw5$ : 0, 10);
          this._pulseTriggers.push({
            x: levelObj.x * 2,
            targetGroup: targetType === 1 ? parseInt((_raw5$2 = _raw5[51]) !== null && _raw5$2 !== void 0 ? _raw5$2 : 0, 10) : 0,
            targetChannel: targetType === 0 ? parseInt((_raw5$3 = _raw5[51]) !== null && _raw5$3 !== void 0 ? _raw5$3 : 0, 10) : 0,
            targetType: targetType,
            color: {
              r: parseInt((_raw5$4 = _raw5[7]) !== null && _raw5$4 !== void 0 ? _raw5$4 : 255, 10),
              g: parseInt((_raw5$5 = _raw5[8]) !== null && _raw5$5 !== void 0 ? _raw5$5 : 255, 10),
              b: parseInt((_raw5$6 = _raw5[9]) !== null && _raw5$6 !== void 0 ? _raw5$6 : 255, 10)
            },
            fadeIn: parseFloat((_raw5$7 = _raw5[45]) !== null && _raw5$7 !== void 0 ? _raw5$7 : 0),
            hold: parseFloat((_raw5$8 = _raw5[46]) !== null && _raw5$8 !== void 0 ? _raw5$8 : 0),
            fadeOut: parseFloat((_raw5$9 = _raw5[47]) !== null && _raw5$9 !== void 0 ? _raw5$9 : 0)
          });
        }
        if (levelObj.id === 31) {
          this._startPositions.push({
            x: 2 * levelObj.x,
            y: 2 * levelObj.y,
            gameMode: levelObj.gameMode,
            miniMode: levelObj.miniMode,
            speed: levelObj.speed,
            mirrored: levelObj.mirrored,
            gravityFlipped: levelObj.flipGravity
          });
        }
        return objectDef;
      }
      if (this._nextObjectId === undefined) {
        this._nextObjectId = 0;
      }
      var linkedObjectId = this._nextObjectId++;
      var hasCollisionEntry = false;
      var worldX = levelObj.x * 2;
      var worldY = levelObj.y * 2;
      if (worldX > this._lastObjectX) {
        this._lastObjectX = worldX;
      }
      var frameName = objectDef ? objectDef.frame : null;
      if (objectDef && objectDef.randomFrames) {
        frameName = objectDef.randomFrames[Math.floor(Math.random() * objectDef.randomFrames.length)];
      }
      var registerObjectSprite = function registerObjectSprite(spr) {
        if (!spr) return;
        spr._eeObjectId = linkedObjectId;
        if (!_this.objectSprites[linkedObjectId]) _this.objectSprites[linkedObjectId] = [];
        _this.objectSprites[linkedObjectId].push(spr);
      };
      if (frameName) {
        var spriteWorldX = worldX;
        var baseY = b(worldY);
        var isPortalFront = (objectDef.type === portalType || objectDef.type === speedType) && frameName.includes("_front_");
        var zLayer = levelObj.zLayer || (objectDef.default_z_layer !== undefined ? objectDef.default_z_layer : 0);
        var zOrd = levelObj.zOrder || (objectDef.default_z_order !== undefined ? objectDef.default_z_order : 0);
        var depthBase = {
          "-3": -6,
          "-1": -3,
          0: 0,
          1: 3,
          3: 6,
          5: 9
        };
        var objZDepth = (depthBase[zLayer] !== undefined ? depthBase[zLayer] : 0) + zOrd * 0.01;
        var col1 = levelObj.color1 || (objectDef.default_base_color_channel !== undefined ? objectDef.default_base_color_channel : 0);
        if (col1 === 0 && (objectDef.type === solidType || objectDef.type === hazardType)) col1 = 1;
        var col2 = levelObj.color2 || (objectDef.default_detail_color_channel !== undefined ? objectDef.default_detail_color_channel : -1);
        var canColor = objectDef.can_color !== false;
        var registerColor = function registerColor(spr, ch) {
          if (ch > 0 && canColor && spr && !spr._isSaw) {
            spr._eeColorChannel = ch;
            if (!_this._colorChannelSprites[ch]) _this._colorChannelSprites[ch] = [];
            _this._colorChannelSprites[ch].push(spr);
          }
        };
        var objGids = levelObj.groups ? levelObj.groups.split(".").map(Number).filter(function (n) {
          return n > 0;
        }) : null;
        var registerToGroups = function registerToGroups(spr, baseWorldX, baseBaseY) {
          if (!objGids || !objGids.length || !spr) return;
          spr._origWorldX = baseWorldX;
          spr._origBaseY = baseBaseY;
          var _iterator5 = _createForOfIteratorHelper(objGids),
            _step5;
          try {
            for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
              var gid = _step5.value;
              if (!_this._groupSprites[gid]) _this._groupSprites[gid] = [];
              _this._groupSprites[gid].push(spr);
            }
          } catch (err) {
            _iterator5.e(err);
          } finally {
            _iterator5.f();
          }
        };
        var portalBackSprite = null;
        if (isPortalFront) {
          var backFrame = frameName.replace("_front_", "_back_");
          portalBackSprite = addImageToScene(scene, spriteWorldX, baseY, backFrame);
          if (portalBackSprite) {
            this._applyVisualProps(scene, portalBackSprite, backFrame, levelObj);
            portalBackSprite._eeLayer = 1;
            portalBackSprite._eeWorldX = worldX;
            portalBackSprite._eeBaseY = baseY;
            portalBackSprite._eeZDepth = objZDepth - 0.005;
            portalBackSprite._eeOrigAlpha = 1;
            this._addToSection(portalBackSprite);
            registerToGroups(portalBackSprite, worldX, baseY);
            registerColor(portalBackSprite, col1);
            registerObjectSprite(portalBackSprite);
          }
        }
        var orbGlow = null;
        if (objectDef.glow) {
          orbGlow = this._addGlowSprite(scene, spriteWorldX, baseY, frameName, levelObj, worldX);
          if (orbGlow) {
            orbGlow._eeZDepth = objZDepth - 0.003;
            orbGlow._eeOrigAlpha = 1;
            registerToGroups(orbGlow, worldX, baseY);
            registerObjectSprite(orbGlow);
          }
        }
        var visualDef = isPortalFront ? _objectSpread(_objectSpread({}, objectDef), {}, {
          _portalFront: true
        }) : objectDef;
        var sprite = addImageToScene(scene, spriteWorldX, baseY, frameName);
        if (sprite) {
          this._applyVisualProps(scene, sprite, frameName, levelObj, objectDef);
          if (portalBackSprite) {
            portalBackSprite.x = sprite.x;
            portalBackSprite.y = sprite.y;
          }
          this._addVisualSprite(sprite, visualDef);
          sprite._eeWorldX = worldX;
          sprite._eeBaseY = baseY;
          sprite._eeZDepth = objZDepth;
          sprite._eeOrigAlpha = 1;
          registerColor(sprite, col1);
          this._addToSection(sprite);
          registerObjectSprite(sprite);
          if (objGids && objGids.length) {
            sprite._eeGroups = objGids;
            registerToGroups(sprite, sprite._eeWorldX, sprite._eeBaseY);
          }
          if (objectDef && objectDef.animFrames) {
            sprite._animFrames = objectDef.animFrames;
            sprite._animInterval = objectDef.animInterval || 100;
            sprite._animIdx = 0;
            sprite._animScene = scene;
            window._animatedSprites.push(sprite);
          }
          if (objectDef && objectDef.type === ringType) {
            sprite.setScale(0.75);
            sprite._eeAudioScale = true;
            sprite._orbId = levelObj.id;
            this._orbSprites.push(sprite);
            if (orbGlow) {
              orbGlow.setScale(0.75);
              orbGlow._eeAudioScale = true;
              orbGlow._orbId = levelObj.id;
              this._orbSprites.push(orbGlow);
            }
          }
          if (objectDef && objectDef.type === coinType) {
            sprite._coinWorldX = worldX;
            sprite._coinWorldY = worldY;
            sprite._coinBaseScale = sprite.scaleX || 1;
            this._coinSprites.push(sprite);
          }
          if (frameName.indexOf("sawblade") >= 0) {
            sprite.setTint(0x000000);
            sprite._isSaw = true;
            this._sawSprites.push(sprite);
            var sawMirror = addImageToScene(scene, spriteWorldX, baseY, frameName);
            if (sawMirror) {
              this._applyVisualProps(scene, sawMirror, frameName, levelObj, objectDef);
              sawMirror.setTint(0x000000);
              sawMirror.rotation = sprite.rotation + Math.PI;
              sawMirror._isSaw = true;
              sawMirror._eeWorldX = worldX;
              sawMirror._eeBaseY = baseY;
              this._addToSection(sawMirror);
              this._addVisualSprite(sawMirror);
              this._sawSprites.push(sawMirror);
              registerToGroups(sawMirror, worldX, baseY);
              registerObjectSprite(sawMirror);
            }
          }
        }
        if (objectDef && (objectDef.type === solidType || objectDef.type === hazardType)) {
          var overlayFrame = frameName.replace("_001.png", "_2_001.png");
          var overlaySprite = getAtlasFrame(scene, overlayFrame) ? addImageToScene(scene, spriteWorldX, baseY, overlayFrame) : null;
          if (overlaySprite) {
            this._applyVisualProps(scene, overlaySprite, overlayFrame, levelObj);
            this._addVisualSprite(overlaySprite);
            overlaySprite._eeWorldX = worldX;
            overlaySprite._eeBaseY = baseY;
            overlaySprite._eeZDepth = objZDepth + 0.002;
            overlaySprite._eeOrigAlpha = 1;
            var oc2 = col2;
            if (oc2 <= 0) oc2 = 2;
            registerColor(overlaySprite, oc2);
            this._addToSection(overlaySprite);
            registerToGroups(overlaySprite, worldX, baseY);
            registerObjectSprite(overlaySprite);
          }
        }
        if (objectDef.children) {
          var _iterator6 = _createForOfIteratorHelper(objectDef.children),
            _step6;
          try {
            for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
              var childDef = _step6.value;
              var childDx = childDef.dx || 0;
              var childDy = childDef.dy || 0;
              if (childDef.localDx !== undefined || childDef.localDy !== undefined) {
                var localDx = childDef.localDx || 0;
                var localDy = childDef.localDy || 0;
                if (levelObj.flipX) {
                  localDx = -localDx;
                }
                if (levelObj.flipY) {
                  localDy = -localDy;
                }
                var rot = (levelObj.rot || 0) * Math.PI / 180;
                childDx = localDx * Math.cos(rot) - localDy * Math.sin(rot);
                childDy = localDx * Math.sin(rot) + localDy * Math.cos(rot);
              }
              var childWorldX = worldX + childDx;
              var childBaseY = baseY + childDy;
              var childSprite = addImageToScene(scene, spriteWorldX + childDx, baseY + childDy, childDef.frame);
              if (childSprite) {
                this._applyVisualProps(scene, childSprite, childDef.frame, levelObj, childDef);
                if (childDef.audioScale) {
                  childSprite.setScale(0.1);
                  childSprite.setAlpha(0.9);
                  childSprite._eeAudioScale = true;
                  this._audioScaleSprites.push(childSprite);
                }
                if ((childDef.z !== undefined ? childDef.z : -1) < 0) {
                  childSprite._eeLayer = 1;
                  childSprite._eeBehindParent = true;
                } else {
                  this._addVisualSprite(childSprite, childDef);
                }
                childSprite._eeWorldX = childWorldX;
                childSprite._eeBaseY = childBaseY;
                childSprite._eeZDepth = objZDepth + ((childDef.z !== undefined ? childDef.z : -1) < 0 ? -0.003 : 0.001);
                childSprite._eeOrigAlpha = 1;
                registerColor(childSprite, col1);
                this._addToSection(childSprite);
                registerToGroups(childSprite, childWorldX, childBaseY);
                registerObjectSprite(childSprite);
                if (frameName.indexOf("sawblade") >= 0) {
                  childSprite.setTint(0x000000);
                  childSprite._isSaw = true;
                  this._sawSprites.push(childSprite);
                  var childMirror = addImageToScene(scene, spriteWorldX + childDx, baseY + childDy, childDef.frame);
                  if (childMirror) {
                    this._applyVisualProps(scene, childMirror, childDef.frame, levelObj, childDef);
                    childMirror.setTint(0x000000);
                    childMirror.rotation = childSprite.rotation + Math.PI;
                    childMirror._isSaw = true;
                    childMirror._eeWorldX = childWorldX;
                    childMirror._eeBaseY = childBaseY;
                    this._addToSection(childMirror);
                    this._sawSprites.push(childMirror);
                    registerToGroups(childMirror, childWorldX, childBaseY);
                    registerObjectSprite(childMirror);
                  }
                }
              }
            }
          } catch (err) {
            _iterator6.e(err);
          } finally {
            _iterator6.f();
          }
        }
      } else if (objectDef && objectDef.portalParticle && frameName) {
        var particleWorldX = worldX;
        var particleWorldY = b(worldY);
        var radiusFactor = 2;
        var particleX = particleWorldX - radiusFactor * 5;
        var particleY = particleWorldY;
        var portalRot = (levelObj.rot || 0) * Math.PI / 180;
        var source = {
          getRandomPoint: function getRandomPoint(p) {
            var angle = (Math.random() * 190 + 85) * Math.PI / 180;
            var dist = radiusFactor * 20 + Math.random() * 40 * radiusFactor;
            var rx = Math.cos(angle) * dist;
            var ry = Math.sin(angle) * dist;
            p.x = rx * Math.cos(portalRot) - ry * Math.sin(portalRot);
            p.y = rx * Math.sin(portalRot) + ry * Math.cos(portalRot);
            return p;
          }
        };
        var maxDistance = 20;
        var particles = scene.add.particles(particleX, particleY, "GJ_WebSheet", {
          frame: "square.png",
          lifespan: {
            min: 200,
            max: 1000
          },
          speed: 0,
          scale: {
            start: 0.75,
            end: 0.125
          },
          alpha: {
            start: 0.5,
            end: 0
          },
          tint: objectDef.portalParticleColor,
          blendMode: Phaser.BlendModes.ADD,
          frequency: 20,
          maxParticles: 0,
          emitting: true,
          emitZone: {
            type: "random",
            source: source
          },
          emitCallback: function emitCallback(particle) {
            var vx = -particle.x;
            var vy = -particle.y;
            var len = Math.sqrt(vx * vx + vy * vy) || 1;
            var lifeSeconds = particle.life / 1000;
            var speed = (len - maxDistance) / (lifeSeconds || 0.3);
            particle.velocityX = vx / len * speed;
            particle.velocityY = vy / len * speed;
          }
        });
        particles.setDepth(14);
        particles._eeLayer = 2;
        particles._eeWorldX = worldX;
        particles._eeBaseY = particleY;
        this._addToSection(particles);
      }
      if (objectDef) {
        var registerCollider = function registerCollider(col) {
          col._baseX = col.x;
          col._baseY = col.y;
          col._origBaseX = col.x;
          col._origBaseY = col.y;
          col._eeObjectId = linkedObjectId;
          if (!_this.objectSprites[linkedObjectId]) {
            _this.objectSprites[linkedObjectId] = [];
          }
          if (levelObj.groups) {
            var cgids = levelObj.groups.split(".").map(Number).filter(function (n) {
              return n > 0;
            });
            col._eeGroups = cgids;
            var _iterator7 = _createForOfIteratorHelper(cgids),
              _step7;
            try {
              for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                var cgid = _step7.value;
                if (!_this._groupColliders[cgid]) _this._groupColliders[cgid] = [];
                _this._groupColliders[cgid].push(col);
              }
            } catch (err) {
              _iterator7.e(err);
            } finally {
              _iterator7.f();
            }
          }
        };
        // Slopes intentionally have NO colliders (upstream parity): levels are
        // authored around pass-through slopes — routes bypass them via pads/orbs.
        if (objectDef.type === solidType && objectDef.gridW > 0 && objectDef.gridH > 0) {
          var w = objectDef.gridW * a;
          var h = objectDef.gridH * a;
          var collider = new Collider(solidType, worldX, worldY, w, h, levelObj.rot || 0);
          collider.objid = levelObj.id;
          registerCollider(collider);
          this.objects.push(collider);
          hasCollisionEntry = true;
          this._addCollisionToSection(collider);
        } else if (objectDef.type === hazardType) {
          var hitW = 0;
          var hitH = 0;
          if (objectDef.spriteW > 0 && objectDef.spriteH > 0 && objectDef.hitboxScaleX !== undefined && objectDef.hitboxScaleY !== undefined) {
            hitW = objectDef.spriteW * objectDef.hitboxScaleX * 2;
            hitH = objectDef.spriteH * objectDef.hitboxScaleY * 2;
          } else if (objectDef.gridW > 0 && objectDef.gridH > 0) {
            hitW = objectDef.gridW * 12;
            hitH = objectDef.gridH * 24;
          }
          var hasHitboxRadius = objectDef.hitbox_radius !== undefined && objectDef.hitbox_radius !== null;
          var worldHitboxRadius = hasHitboxRadius ? objectDef.hitbox_radius * 2 : 0;
          if (hasHitboxRadius && hitW === 0) {
            hitW = worldHitboxRadius * 2;
            hitH = worldHitboxRadius * 2;
          }
          if (hitW > 0 && hitH > 0) {
            var _collider = new Collider(hazardType, worldX, worldY, hitW, hitH, levelObj.rot || 0);
            if (hasHitboxRadius) _collider.hitbox_radius = worldHitboxRadius;
            registerCollider(_collider);
            this.objects.push(_collider);
            hasCollisionEntry = true;
            this._addCollisionToSection(_collider);
          }
        } else if (objectDef.type === portalType) {
          var _gravity_flip$gravity;
          var portalW = objectDef.gridW * a;
          var portalH = objectDef.gridH * a;
          var portalSub = objectDef.sub || {
            10: "gravity_flip",
            11: "gravity_normal",
            12: "cube",
            13: "fly",
            45: "mirrora",
            46: "mirrorb",
            47: "ball",
            660: "wave",
            111: "ufo",
            1331: "spider",
            286: "dual_on",
            287: "dual_off"
          }[levelObj.id];
          var portalColliderType = (_gravity_flip$gravity = {
            gravity_flip: "portal_gravity_down",
            gravity_normal: "portal_gravity_up",
            gravity_toggle: "portal_gravity_toggle"
          }, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_gravity_flip$gravity, flyPortal, "portal_fly"), "fly", "portal_fly"), cubePortal, "portal_cube"), "cube", "portal_cube"), "ball", "portal_ball"), "wave", portalWaveType), "ufo", portalUfoType), "spider", "portal_spider"), "mirrora", "portal_mirror_on"), "mirrorb", "portal_mirror_off"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_gravity_flip$gravity, "shrink", "portal_mini_on"), "grow", "portal_mini_off"), "dual_on", "portal_dual_on"), "dual_off", "portal_dual_off"))[portalSub] || null;
          if (portalColliderType) {
            var _collider2 = new Collider(portalColliderType, worldX, worldY, portalW, portalH, levelObj.rot || 0);
            _collider2.portalY = worldY;
            registerCollider(_collider2);
            this.objects.push(_collider2);
            hasCollisionEntry = true;
            this._addCollisionToSection(_collider2);
          }
        } else if (objectDef.type === padType) {
          var padW = objectDef.gridW * a;
          var padH = objectDef.gridH * a;
          var padObj = new Collider(jumpPadType, worldX, worldY, padW, padH, levelObj.rot || 0);
          padObj.padId = levelObj.id;
          registerCollider(padObj);
          this.objects.push(padObj);
          hasCollisionEntry = true;
          this._addCollisionToSection(padObj);
        } else if (objectDef.type === ringType) {
          var orbW = objectDef.gridW * a;
          var orbH = objectDef.gridH * a;
          var orbObj = new Collider(jumpRingType, worldX, worldY, orbW, orbH, levelObj.rot || 0);
          orbObj.orbId = levelObj.id;
          orbObj.orbRotation = levelObj.rot || 0;
          orbObj._dashHoldTicks = 0;
          registerCollider(orbObj);
          this.objects.push(orbObj);
          hasCollisionEntry = true;
          this._addCollisionToSection(orbObj);
        } else if (objectDef.type === coinType) {
          var coinW = (objectDef.gridW || 1) * a;
          var coinH = (objectDef.gridH || 1) * a;
          var coinObj = new Collider(coinType, worldX, worldY, coinW, coinH, levelObj.rot || 0);
          coinObj.coinId = levelObj.id;
          registerCollider(coinObj);
          this.objects.push(coinObj);
          hasCollisionEntry = true;
          this._addCollisionToSection(coinObj);
        } else if (objectDef.type === speedType) {
          var _speedMap$levelObj$id;
          var speedW = (objectDef.gridW || 1) * a;
          var speedH = (objectDef.gridH || 1) * a;
          var speedObj = new Collider(speedType, worldX, worldY, speedW, speedH, levelObj.rot || 0);
          speedObj.portalY = worldY;
          var speedMap = {
            200: SpeedPortal.HALF,
            201: SpeedPortal.ONE_TIMES,
            202: SpeedPortal.TWO_TIMES,
            203: SpeedPortal.THREE_TIMES,
            1334: SpeedPortal.FOUR_TIMES
          };
          speedObj.speedValue = (_speedMap$levelObj$id = speedMap[levelObj.id]) !== null && _speedMap$levelObj$id !== void 0 ? _speedMap$levelObj$id : SpeedPortal.ONE_TIMES;
          speedObj.speedId = levelObj.id;
          registerCollider(speedObj);
          this.objects.push(speedObj);
          hasCollisionEntry = true;
          this._addCollisionToSection(speedObj);
        }
        if (!hasCollisionEntry) {
          this.objects.push({
            type: objectDef.type || decoType,
            activated: false,
            x: 0,
            y: 0
          });
        }
      }
      return objectDef;
    }
  }, {
    key: "_spawnLevelObjects",
    value: function _spawnLevelObjects(_0x35f1ae) {
      var unknownObjectIds = new Set();
      this._lastObjectX = 0;
      this._nextObjectId = 0;
      var _iterator8 = _createForOfIteratorHelper(_0x35f1ae),
        _step8;
      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
          var levelObj = _step8.value;
          var objectDef = this._spawnObject(levelObj);
          if (!objectDef) {
            unknownObjectIds.add(levelObj.id);
          }
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }
      unknownObjectIds.size;
      if (unknownObjectIds.size > 0) {}
      var colTypeCounts = {};
      var _iterator9 = _createForOfIteratorHelper(this.objects),
        _step9;
      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
          var _obj = _step9.value;
          colTypeCounts[_obj.type] = (colTypeCounts[_obj.type] || 0) + 1;
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }
      this._colorTriggers.sort(function (a, b) {
        return a.x - b.x;
      });
      this._enterEffectTriggers.sort(function (a, b) {
        return a.x - b.x;
      });
      this._moveTriggers.sort(function (a, b) {
        return a.x - b.x;
      });
      this._alphaTriggers.sort(function (a, b) {
        return a.x - b.x;
      });
      this._rotateTriggers.sort(function (a, b) {
        return a.x - b.x;
      });
      this._pulseTriggers.sort(function (a, b) {
        return a.x - b.x;
      });
      for (var si = 0; si < this._sectionContainers.length; si++) {
        var sc = this._sectionContainers[si];
        if (sc) {
          if (sc.normal && sc.normal.list && sc.normal.list.length > 1) sc.normal.sort("depth");
          if (sc.additive && sc.additive.list && sc.additive.list.length > 1) sc.additive.sort("depth");
        }
      }
      this.endXPos = Math.max(screenWidth + 1200, this._lastObjectX + 680);
    }
  }, {
    key: "createEndPortal",
    value: function createEndPortal(_0x41fbdb) {
      if (window.isEditor) return; // not dealing with ts rn
      var _0x400605;
      if (this.endXPos <= 0) {
        return;
      }
      var _0x3b56d4 = this.endXPos;
      var _0x1c3aea = b(240);
      var _0x46064b = Math.round(16);
      this._endPortalContainer = _0x41fbdb.add.container(_0x3b56d4, _0x1c3aea);
      for (var _0x2a327c = 0; _0x2a327c < _0x46064b; _0x2a327c++) {
        var _0xacf7ef = _0x41fbdb.add.image(0, (_0x2a327c - Math.floor(_0x46064b / 2)) * a, "GJ_WebSheet", "square_02_001.png").setAngle(-90);
        this._endPortalContainer.add(_0xacf7ef);
      }
      this.container.add(this._endPortalContainer);
      this._endPortalShine = _0x41fbdb.add.image(_0x3b56d4 - 58, _0x1c3aea, "GJ_WebSheet", "gradientBar.png");
      var _0x3e25a9 = ((_0x400605 = _0x41fbdb.textures.getFrame("GJ_WebSheet", "gradientBar.png")) == null ? undefined : _0x400605.height) || 64;
      this._endPortalShine.setBlendMode(S);
      this._endPortalShine.setTint(window.mainColor);
      this._endPortalShine.setScale(1, 960 / _0x3e25a9);
      this.additiveContainer.add(this._endPortalShine);
      var _0x58cedb = _0x3b56d4 - 30;
      var _0x4f52b7 = {
        getRandomPoint: function getRandomPoint(_0x4f04dd) {
          var _0x53ec71 = (85 + Math.random() * 190) * Math.PI / 180;
          var _0x42e60c = 320 + (Math.random() * 2 - 1) * 80;
          _0x4f04dd.x = Math.cos(_0x53ec71) * _0x42e60c;
          _0x4f04dd.y = Math.sin(_0x53ec71) * _0x42e60c;
          return _0x4f04dd;
        }
      };
      this._endPortalEmitter = _0x41fbdb.add.particles(_0x58cedb, _0x1c3aea, "GJ_WebSheet", {
        frame: "square.png",
        lifespan: {
          min: 200,
          max: 1000
        },
        speed: 0,
        scale: {
          start: 0.75,
          end: 0.125
        },
        alpha: {
          start: 1,
          end: 0
        },
        tint: window.mainColor,
        blendMode: Phaser.BlendModes.ADD,
        frequency: 10,
        maxParticles: 100,
        emitting: true,
        emitZone: {
          type: "random",
          source: _0x4f52b7
        },
        emitCallback: function emitCallback(_0x2daff4) {
          var _0x5e30d8 = -_0x2daff4.x;
          var _0x17ba71 = -_0x2daff4.y;
          var _0x3c5c52 = Math.sqrt(_0x5e30d8 * _0x5e30d8 + _0x17ba71 * _0x17ba71) || 1;
          var _0x279521 = (_0x3c5c52 - 20) / (_0x2daff4.life / 1000 || 0.3);
          _0x2daff4.velocityX = _0x5e30d8 / _0x3c5c52 * _0x279521;
          _0x2daff4.velocityY = _0x17ba71 / _0x3c5c52 * _0x279521;
        }
      });
      this._endPortalEmitter.setDepth(14);
      this.topContainer.add(this._endPortalEmitter);
      this._endPortalGameY = 240;
    }
  }, {
    key: "updateEndPortalY",
    value: function updateEndPortalY(_0x26f0ab, _0x43c4d1) {
      if (!this._endPortalContainer) {
        return;
      }
      var _0x50aa7d = 140 + _0x26f0ab;
      var _0x1be4c3;
      _0x1be4c3 = _0x43c4d1 ? _0x50aa7d : Math.max(240, _0x50aa7d);
      var _0x32e645 = b(_0x1be4c3);
      this._endPortalContainer.y = _0x32e645;
      this._endPortalShine.y = _0x32e645;
      this._endPortalEmitter.y = _0x32e645;
      this._endPortalGameY = _0x1be4c3;
    }
  }, {
    key: "checkColorTriggers",
    value: function checkColorTriggers(_0x2b00ce) {
      var _0x24b030 = [];
      while (this._colorTriggerIdx < this._colorTriggers.length) {
        var _0x39c924 = this._colorTriggers[this._colorTriggerIdx];
        if (!(_0x39c924.x <= _0x2b00ce)) {
          break;
        }
        _0x24b030.push(_0x39c924);
        this._colorTriggerIdx++;
      }
      return _0x24b030;
    }
  }, {
    key: "resetColorTriggers",
    value: function resetColorTriggers() {
      this._colorTriggerIdx = 0;
    }
  }, {
    key: "_addToSection",
    value: function _addToSection(sliderWidth) {
      var _this$_sections;
      var _0x4ac40a = Math.max(0, Math.floor(sliderWidth._eeWorldX / 400));
      (_this$_sections = this._sections)[_0x4ac40a] || (_this$_sections[_0x4ac40a] = []);
      this._sections[_0x4ac40a].push(sliderWidth);
      if (sliderWidth._eeZDepth !== undefined) {
        sliderWidth.depth = sliderWidth._eeZDepth;
      }
      var _0x14d5f7 = sliderWidth._eeLayer !== undefined ? sliderWidth._eeLayer : 1;
      if (_0x14d5f7 === 2) {
        this.topContainer.add(sliderWidth);
        return;
      }
      if (!this._sectionContainers[_0x4ac40a]) {
        var _0xc1a93d = {
          additive: this._scene.add.container(0, 0),
          normal: this._scene.add.container(0, 0)
        };
        this.additiveContainer.add(_0xc1a93d.additive);
        this.container.add(_0xc1a93d.normal);
        this._sectionContainers[_0x4ac40a] = _0xc1a93d;
      }
      var _0x2157d3 = this._sectionContainers[_0x4ac40a];
      if (_0x14d5f7 === 0) {
        _0x2157d3.additive.add(sliderWidth);
      } else if (sliderWidth._eeBehindParent) {
        _0x2157d3.normal.addAt(sliderWidth, 0);
      } else {
        _0x2157d3.normal.add(sliderWidth);
      }
    }
  }, {
    key: "_addCollisionToSection",
    value: function _addCollisionToSection(_0x3dce4b) {
      var _this$_collisionSecti;
      var _0x5cad3c = Math.max(0, Math.floor(_0x3dce4b.x / 400));
      (_this$_collisionSecti = this._collisionSections)[_0x5cad3c] || (_this$_collisionSecti[_0x5cad3c] = []);
      this._collisionSections[_0x5cad3c].push(_0x3dce4b);
    }
  }, {
    key: "_setSectionVisible",
    value: function _setSectionVisible(_0x2b0fa1, _0x488507) {
      var _0x141e9c = this._sectionContainers[_0x2b0fa1];
      if (_0x141e9c) {
        _0x141e9c.additive.visible = _0x488507;
        _0x141e9c.normal.visible = _0x488507;
      }
    }
  }, {
    key: "updateVisibility",
    value: function updateVisibility(_0xa5f1e1) {
      var _0x1dce22 = this._sectionContainers.length - 1;
      if (_0x1dce22 < 0) {
        return;
      }
      var particleScale = Math.max(0, Math.floor((_0xa5f1e1 - 200) / 400));
      var sliderHeight = Math.min(_0x1dce22, Math.floor((_0xa5f1e1 + screenWidth + 200) / 400));
      var _0x1800fc = this._visMinSec;
      var _0xc31046 = this._visMaxSec;
      if (_0x1800fc < 0) {
        for (var _0x47dbe1 = 0; _0x47dbe1 <= _0x1dce22; _0x47dbe1++) {
          this._setSectionVisible(_0x47dbe1, _0x47dbe1 >= particleScale && _0x47dbe1 <= sliderHeight);
        }
        this._visMinSec = particleScale;
        this._visMaxSec = sliderHeight;
        return;
      }
      if (particleScale !== _0x1800fc || sliderHeight !== _0xc31046) {
        if (particleScale > _0x1800fc) {
          for (var _0x7da5df = _0x1800fc; _0x7da5df <= Math.min(particleScale - 1, _0xc31046); _0x7da5df++) {
            this._setSectionVisible(_0x7da5df, false);
          }
        }
        if (sliderHeight < _0xc31046) {
          for (var _0x5b2d47 = Math.max(sliderHeight + 1, _0x1800fc); _0x5b2d47 <= _0xc31046; _0x5b2d47++) {
            this._setSectionVisible(_0x5b2d47, false);
          }
        }
        if (particleScale < _0x1800fc) {
          for (var _0x3caab6 = particleScale; _0x3caab6 <= Math.min(_0x1800fc - 1, sliderHeight); _0x3caab6++) {
            this._setSectionVisible(_0x3caab6, true);
          }
        }
        if (sliderHeight > _0xc31046) {
          for (var _0x347412 = Math.max(_0xc31046 + 1, particleScale); _0x347412 <= sliderHeight; _0x347412++) {
            this._setSectionVisible(_0x347412, true);
          }
        }
        this._visMinSec = particleScale;
        this._visMaxSec = sliderHeight;
      }
    }
  }, {
    key: "getNearbySectionObjects",
    value: function getNearbySectionObjects(_0x2e85c7) {
      var _0x55d1b7 = Math.max(0, Math.floor(_0x2e85c7 / 400));
      var _0x31c345 = Math.max(0, _0x55d1b7 - 1);
      var _0x5f1907 = Math.min(this._collisionSections.length - 1, _0x55d1b7 + 1);
      var _0x28a7c0 = this._nearbyBuffer;
      _0x28a7c0.length = 0;
      for (var _0xe2cbfa = _0x31c345; _0xe2cbfa <= _0x5f1907; _0xe2cbfa++) {
        var _0x2171db = this._collisionSections[_0xe2cbfa];
        if (_0x2171db) {
          for (var _0x5cdca9 = 0; _0x5cdca9 < _0x2171db.length; _0x5cdca9++) {
            _0x28a7c0.push(_0x2171db[_0x5cdca9]);
          }
        }
      }
      return _0x28a7c0;
    }
  }, {
    key: "checkEnterEffectTriggers",
    value: function checkEnterEffectTriggers(_0x5d0838) {
      while (this._enterEffectTriggerIdx < this._enterEffectTriggers.length) {
        var _0x937c72 = this._enterEffectTriggers[this._enterEffectTriggerIdx];
        if (!(_0x937c72.x <= _0x5d0838)) {
          break;
        }
        this._activeEnterEffect = _0x937c72.effect;
        this._activeExitEffect = _0x937c72.effect;
        this._enterEffectTriggerIdx++;
      }
    }
  }, {
    key: "checkMoveTriggers",
    value: function checkMoveTriggers(playerX) {
      while (this._moveTriggerIdx < this._moveTriggers.length) {
        var trig = this._moveTriggers[this._moveTriggerIdx];
        if (trig.x > playerX) break;
        this._activeMoveTweens.push({
          trig: trig,
          elapsed: 0,
          prevProgress: 0
        });
        if (!this._groupOffsets[trig.targetGroup]) {
          this._groupOffsets[trig.targetGroup] = {
            x: 0,
            y: 0
          };
        }
        this._moveTriggerIdx++;
      }
    }
  }, {
    key: "stepMoveTriggers",
    value: function stepMoveTriggers(dt) {
      var i = 0;
      while (i < this._activeMoveTweens.length) {
        var anim = this._activeMoveTweens[i];
        var trig = anim.trig;
        var dur = trig.duration > 0 ? trig.duration : 0;
        anim.elapsed += dt;
        var progress = dur > 0 ? Math.min(anim.elapsed / dur, 1) : 1;
        var prevProgress = anim.prevProgress;
        var curSample = Easing.sample(trig.easingType, trig.easingRate, progress);
        var prevSample = Easing.sample(trig.easingType, trig.easingRate, prevProgress);
        var amount = curSample - prevSample;
        anim.prevProgress = progress;
        var deltaX = trig.offsetX * amount;
        var deltaY = -(trig.offsetY * amount);
        var sprites = this._groupSprites[trig.targetGroup];
        var colliders = this._groupColliders[trig.targetGroup];
        if (sprites || colliders) {
          var off = this._groupOffsets[trig.targetGroup];
          off.x += deltaX;
          off.y += deltaY;
          if (sprites) {
            var _iterator0 = _createForOfIteratorHelper(sprites),
              _step0;
            try {
              for (_iterator0.s(); !(_step0 = _iterator0.n()).done;) {
                var spr = _step0.value;
                if (!spr || !spr.active) continue;
                spr.x = spr._origWorldX + off.x;
                spr.y = spr._origBaseY + off.y;
                spr._eeWorldX = spr.x;
                spr._eeBaseY = spr.y;
                if (spr._coinWorldX !== undefined) {
                  spr._coinWorldX = (spr._origWorldX + off.x) / 2;
                }
                if (spr._coinWorldY !== undefined) {
                  spr._coinWorldY = (460 - (spr._origBaseY + off.y)) / 2;
                }
              }
            } catch (err) {
              _iterator0.e(err);
            } finally {
              _iterator0.f();
            }
          }
          if (colliders) {
            var _iterator1 = _createForOfIteratorHelper(colliders),
              _step1;
            try {
              for (_iterator1.s(); !(_step1 = _iterator1.n()).done;) {
                var col = _step1.value;
                col.x = col._origBaseX + off.x;
                col.y = col._origBaseY - off.y;
                col._baseX = col.x;
                col._baseY = col.y;
              }
            } catch (err) {
              _iterator1.e(err);
            } finally {
              _iterator1.f();
            }
          }
        }
        if (progress >= 1) {
          this._activeMoveTweens.splice(i, 1);
        } else {
          i++;
        }
      }
    }
  }, {
    key: "resetMoveTriggers",
    value: function resetMoveTriggers() {
      this._moveTriggerIdx = 0;
      this._activeMoveTweens = [];
      this._groupOffsets = {};
      for (var gid in this._groupSprites) {
        var _iterator10 = _createForOfIteratorHelper(this._groupSprites[gid]),
          _step10;
        try {
          for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
            var spr = _step10.value;
            if (!spr || !spr.active) continue;
            spr.x = spr._origWorldX;
            spr.y = spr._origBaseY;
            spr._eeWorldX = spr._origWorldX;
            spr._eeBaseY = spr._origBaseY;
          }
        } catch (err) {
          _iterator10.e(err);
        } finally {
          _iterator10.f();
        }
      }
      for (var _gid in this._groupColliders) {
        var _iterator11 = _createForOfIteratorHelper(this._groupColliders[_gid]),
          _step11;
        try {
          for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
            var col = _step11.value;
            col.x = col._origBaseX;
            col.y = col._origBaseY;
            col._baseX = col._origBaseX;
            col._baseY = col._origBaseY;
          }
        } catch (err) {
          _iterator11.e(err);
        } finally {
          _iterator11.f();
        }
      }
    }
  }, {
    key: "checkAlphaTriggers",
    value: function checkAlphaTriggers(playerX) {
      while (this._alphaTriggerIdx < this._alphaTriggers.length) {
        var _this$_groupOpacity$t;
        var trig = this._alphaTriggers[this._alphaTriggerIdx];
        if (trig.x > playerX) break;
        var currentOpacity = (_this$_groupOpacity$t = this._groupOpacity[trig.targetGroup]) !== null && _this$_groupOpacity$t !== void 0 ? _this$_groupOpacity$t : 1;
        this._activeAlphaTweens.push({
          trig: trig,
          elapsed: 0,
          startOpacity: currentOpacity
        });
        this._alphaTriggerIdx++;
      }
    }
  }, {
    key: "stepAlphaTriggers",
    value: function stepAlphaTriggers(dt) {
      var i = 0;
      while (i < this._activeAlphaTweens.length) {
        var anim = this._activeAlphaTweens[i];
        var trig = anim.trig;
        var dur = trig.duration > 0 ? trig.duration : 0;
        anim.elapsed += dt;
        var progress = dur > 0 ? Math.min(anim.elapsed / dur, 1) : 1;
        var newOpacity = anim.startOpacity + (trig.targetOpacity - anim.startOpacity) * progress;
        this._groupOpacity[trig.targetGroup] = Math.max(0, Math.min(1, newOpacity));
        if (progress >= 1) {
          this._activeAlphaTweens.splice(i, 1);
        } else {
          i++;
        }
      }
      for (var gid in this._groupOpacity) {
        var sprites = this._groupSprites[gid];
        if (!sprites) continue;
        var op = this._groupOpacity[gid];
        var _iterator12 = _createForOfIteratorHelper(sprites),
          _step12;
        try {
          for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
            var spr = _step12.value;
            if (!spr || !spr.active) continue;
            if (spr._eeActive) continue;
            spr.setAlpha(op);
          }
        } catch (err) {
          _iterator12.e(err);
        } finally {
          _iterator12.f();
        }
      }
    }
  }, {
    key: "resetAlphaTriggers",
    value: function resetAlphaTriggers() {
      this._alphaTriggerIdx = 0;
      this._activeAlphaTweens = [];
      this._groupOpacity = {};
      for (var gid in this._groupSprites) {
        var _iterator13 = _createForOfIteratorHelper(this._groupSprites[gid]),
          _step13;
        try {
          for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
            var spr = _step13.value;
            if (!spr || !spr.active) continue;
            if (spr._eeActive) continue;
            spr.setAlpha(1);
            spr._eeOrigAlpha = 1;
          }
        } catch (err) {
          _iterator13.e(err);
        } finally {
          _iterator13.f();
        }
      }
    }
  }, {
    key: "checkRotateTriggers",
    value: function checkRotateTriggers(playerX) {
      while (this._rotateTriggerIdx < this._rotateTriggers.length) {
        var trig = this._rotateTriggers[this._rotateTriggerIdx];
        if (trig.x > playerX) break;
        var totalDeg = trig.degrees + trig.times360 * 360;
        this._activeRotateTweens.push({
          trig: trig,
          elapsed: 0,
          prevProgress: 0,
          totalRad: totalDeg * Math.PI / 180
        });
        this._rotateTriggerIdx++;
      }
    }
  }, {
    key: "stepRotateTriggers",
    value: function stepRotateTriggers(dt) {
      var i = 0;
      while (i < this._activeRotateTweens.length) {
        var anim = this._activeRotateTweens[i];
        var trig = anim.trig;
        var dur = trig.duration > 0 ? trig.duration : 0;
        anim.elapsed += dt;
        var progress = dur > 0 ? Math.min(anim.elapsed / dur, 1) : 1;
        var curSample = Easing.sample(trig.easingType, trig.easingRate, progress);
        var prevSample = Easing.sample(trig.easingType, trig.easingRate, anim.prevProgress);
        var deltaRot = (curSample - prevSample) * anim.totalRad;
        anim.prevProgress = progress;
        var sprites = this._groupSprites[trig.targetGroup];
        var colliders = this._groupColliders[trig.targetGroup];
        if (trig.centerGroup > 0) {
          var centerSprites = this._groupSprites[trig.centerGroup];
          if (centerSprites && centerSprites.length > 0) {
            var cx = 0,
              cy = 0,
              cn = 0;
            var _iterator14 = _createForOfIteratorHelper(centerSprites),
              _step14;
            try {
              for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
                var cs = _step14.value;
                if (!cs || !cs.active) continue;
                cx += cs.x;
                cy += cs.y;
                cn++;
              }
            } catch (err) {
              _iterator14.e(err);
            } finally {
              _iterator14.f();
            }
            if (cn > 0) {
              cx /= cn;
              cy /= cn;
              var cosD = Math.cos(deltaRot),
                sinD = Math.sin(deltaRot);
              if (sprites) {
                var _iterator15 = _createForOfIteratorHelper(sprites),
                  _step15;
                try {
                  for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
                    var spr = _step15.value;
                    if (!spr || !spr.active) continue;
                    var dx = spr.x - cx,
                      dy = spr.y - cy;
                    spr.x = cx + dx * cosD - dy * sinD;
                    spr.y = cy + dx * sinD + dy * cosD;
                    spr._eeWorldX = spr.x;
                    spr._eeBaseY = spr.y;
                    if (spr._origWorldX !== undefined) {
                      spr._origWorldX = spr.x;
                      spr._origBaseY = spr.y;
                    }
                    if (!trig.lockRotation) spr.rotation += deltaRot;
                  }
                } catch (err) {
                  _iterator15.e(err);
                } finally {
                  _iterator15.f();
                }
              }
              if (colliders) {
                var _iterator16 = _createForOfIteratorHelper(colliders),
                  _step16;
                try {
                  for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
                    var col = _step16.value;
                    var _dx = col.x - cx,
                      _dy = col.y - cy;
                    col.x = cx + _dx * cosD - _dy * sinD;
                    col.y = cy + _dx * sinD + _dy * cosD;
                    col._baseX = col.x;
                    col._baseY = col.y;
                    if (col._origBaseX !== undefined) {
                      col._origBaseX = col.x;
                      col._origBaseY = col.y;
                    }
                  }
                } catch (err) {
                  _iterator16.e(err);
                } finally {
                  _iterator16.f();
                }
              }
            }
          }
        } else {
          if (sprites) {
            var _iterator17 = _createForOfIteratorHelper(sprites),
              _step17;
            try {
              for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
                var _spr = _step17.value;
                if (!_spr || !_spr.active) continue;
                _spr.rotation += deltaRot;
              }
            } catch (err) {
              _iterator17.e(err);
            } finally {
              _iterator17.f();
            }
          }
        }
        if (progress >= 1) {
          this._activeRotateTweens.splice(i, 1);
        } else {
          i++;
        }
      }
    }
  }, {
    key: "resetRotateTriggers",
    value: function resetRotateTriggers() {
      this._rotateTriggerIdx = 0;
      this._activeRotateTweens = [];
    }
  }, {
    key: "checkPulseTriggers",
    value: function checkPulseTriggers(playerX) {
      while (this._pulseTriggerIdx < this._pulseTriggers.length) {
        var trig = this._pulseTriggers[this._pulseTriggerIdx];
        if (trig.x > playerX) break;
        var totalDur = trig.fadeIn + trig.hold + trig.fadeOut;
        this._activePulses.push({
          trig: trig,
          elapsed: 0,
          totalDuration: totalDur > 0 ? totalDur : 0.01
        });
        this._pulseTriggerIdx++;
      }
    }
  }, {
    key: "stepPulseTriggers",
    value: function stepPulseTriggers(dt, colorManager) {
      var i = 0;
      while (i < this._activePulses.length) {
        var pulse = this._activePulses[i];
        var trig = pulse.trig;
        pulse.elapsed += dt;
        var fadeIn = trig.fadeIn,
          hold = trig.hold,
          fadeOut = trig.fadeOut;
        var intensity = 0;
        var t = pulse.elapsed;
        if (t < fadeIn) {
          intensity = fadeIn > 0 ? t / fadeIn : 1;
        } else if (t < fadeIn + hold) {
          intensity = 1;
        } else if (t < fadeIn + hold + fadeOut) {
          intensity = fadeOut > 0 ? 1 - (t - fadeIn - hold) / fadeOut : 0;
        }
        if (trig.targetType === 1 && trig.targetGroup > 0) {
          var sprites = this._groupSprites[trig.targetGroup];
          if (sprites) {
            var pr = Math.round(trig.color.r * intensity);
            var pg = Math.round(trig.color.g * intensity);
            var pb = Math.round(trig.color.b * intensity);
            var pulseHex = pr << 16 | pg << 8 | pb;
            var _iterator18 = _createForOfIteratorHelper(sprites),
              _step18;
            try {
              for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
                var spr = _step18.value;
                if (!spr || !spr.active) continue;
                if (intensity > 0.01) {
                  spr.setTint(pulseHex);
                  spr._eePulsed = true;
                } else {
                  spr.clearTint();
                  spr._eePulsed = false;
                }
              }
            } catch (err) {
              _iterator18.e(err);
            } finally {
              _iterator18.f();
            }
          }
        } else if (trig.targetType === 0 && trig.targetChannel > 0 && colorManager) {
          if (intensity > 0.01) {
            var baseColor = colorManager.getColor(trig.targetChannel);
            var pulsed = {
              r: Math.min(255, Math.round(baseColor.r + (trig.color.r - baseColor.r) * intensity)),
              g: Math.min(255, Math.round(baseColor.g + (trig.color.g - baseColor.g) * intensity)),
              b: Math.min(255, Math.round(baseColor.b + (trig.color.b - baseColor.b) * intensity))
            };
            var _pulseHex = pulsed.r << 16 | pulsed.g << 8 | pulsed.b;
            var chSprites = this._colorChannelSprites[trig.targetChannel];
            if (chSprites) {
              var _iterator19 = _createForOfIteratorHelper(chSprites),
                _step19;
              try {
                for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
                  var _spr2 = _step19.value;
                  if (!_spr2 || !_spr2.active) continue;
                  _spr2.setTint(_pulseHex);
                  _spr2._eePulsed = true;
                }
              } catch (err) {
                _iterator19.e(err);
              } finally {
                _iterator19.f();
              }
            }
          }
        }
        if (pulse.elapsed >= pulse.totalDuration) {
          if (trig.targetType === 1 && trig.targetGroup > 0) {
            var _sprites = this._groupSprites[trig.targetGroup];
            if (_sprites) {
              var _iterator20 = _createForOfIteratorHelper(_sprites),
                _step20;
              try {
                for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
                  var _spr3 = _step20.value;
                  if (_spr3 && _spr3.active) {
                    _spr3.clearTint();
                    _spr3._eePulsed = false;
                  }
                }
              } catch (err) {
                _iterator20.e(err);
              } finally {
                _iterator20.f();
              }
            }
          }
          if (trig.targetType === 0 && trig.targetChannel > 0) {
            var _chSprites = this._colorChannelSprites[trig.targetChannel];
            if (_chSprites) {
              var _iterator21 = _createForOfIteratorHelper(_chSprites),
                _step21;
              try {
                for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
                  var _spr4 = _step21.value;
                  if (_spr4 && _spr4.active) _spr4._eePulsed = false;
                }
              } catch (err) {
                _iterator21.e(err);
              } finally {
                _iterator21.f();
              }
            }
          }
          this._activePulses.splice(i, 1);
        } else {
          i++;
        }
      }
    }
  }, {
    key: "resetPulseTriggers",
    value: function resetPulseTriggers() {
      this._pulseTriggerIdx = 0;
      this._activePulses = [];
    }
  }, {
    key: "applyColorChannels",
    value: function applyColorChannels(colorManager) {
      // Hot per-frame path: skip iterator allocation; cache hex per channel
      for (var chId in this._colorChannelSprites) {
        var sprites = this._colorChannelSprites[chId];
        if (!sprites || !sprites.length) continue;
        var hex = colorManager.getHex(parseInt(chId, 10));
        for (var i = 0, len = sprites.length; i < len; i++) {
          var spr = sprites[i];
          if (!spr || !spr.active) continue;
          if (spr._eePulsed) continue;
          if (spr._isSaw) continue;
          if (spr._eeAudioScale) continue;
          spr.setTint(hex);
        }
      }
    }
  }, {
    key: "resetEnterEffectTriggers",
    value: function resetEnterEffectTriggers() {
      this._enterEffectTriggerIdx = 0;
      this._activeEnterEffect = 0;
      this._activeExitEffect = 0;
      for (var _0x17a21d = 0; _0x17a21d < this._sections.length; _0x17a21d++) {
        this._setSectionVisible(_0x17a21d, true);
        var _0x14a035 = this._sections[_0x17a21d];
        if (_0x14a035) {
          for (var _0x13e116 = 0; _0x13e116 < _0x14a035.length; _0x13e116++) {
            var visMinSection = _0x14a035[_0x13e116];
            visMinSection._eeActive = false;
            visMinSection.visible = true;
            visMinSection.x = visMinSection._eeWorldX;
            visMinSection.y = visMinSection._eeBaseY;
            if (!visMinSection._eeAudioScale) {
              visMinSection.setScale(1);
            }
            visMinSection.setAlpha(this._getGroupOpacityForSprite(visMinSection));
          }
        }
      }
    }
  }, {
    key: "_getGroupOpacityForSprite",
    value: function _getGroupOpacityForSprite(spr) {
      var groups = spr && spr._eeGroups;
      if (!groups || !groups.length) return 1;
      var op = 1;
      var _iterator23 = _createForOfIteratorHelper(groups),
        _step23;
      try {
        for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
          var gid = _step23.value;
          var g = this._groupOpacity[gid];
          if (g !== undefined && g < op) op = g;
        }
      } catch (err) {
        _iterator23.e(err);
      } finally {
        _iterator23.f();
      }
      return op;
    }
  }, {
    key: "applyEnterEffects",
    value: function applyEnterEffects(_0x2f36ed) {
      var _0x221c93 = 400;
      var _0xa24372 = 140;
      var _0x5e9f2a = 200;
      var _0x29a51b = _0x2f36ed;
      var _0x548004 = _0x2f36ed + screenWidth;
      var _0x49c6d8 = _0x2f36ed + screenWidth / 2;
      var _0x2d8f53 = Math.max(0, Math.floor((_0x29a51b - _0xa24372) / _0x221c93));
      var _0x2b19db = Math.min(this._sections.length - 1, Math.floor((_0x548004 + _0xa24372) / _0x221c93));
      for (var _0x1bd44f = _0x2d8f53; _0x1bd44f <= _0x2b19db; _0x1bd44f++) {
        var _0x2cff29 = this._sections[_0x1bd44f];
        if (!_0x2cff29) {
          continue;
        }
        var _0x20a3bb = _0x1bd44f * _0x221c93;
        var _0x8f9d56 = _0x20a3bb >= _0x29a51b + _0xa24372 && _0x20a3bb + _0x221c93 <= _0x548004 - _0xa24372;
        for (var _0x54aba7 = 0; _0x54aba7 < _0x2cff29.length; _0x54aba7++) {
          var effectSprite = _0x2cff29[_0x54aba7];
          if (_0x8f9d56) {
            if (effectSprite._eeActive) {
              effectSprite._eeActive = false;
              effectSprite.y = effectSprite._eeBaseY;
              effectSprite.x = effectSprite._eeWorldX;
              if (!effectSprite._eeAudioScale) {
                effectSprite.setScale(1);
              }
              effectSprite.setAlpha(this._getGroupOpacityForSprite(effectSprite));
            }
            continue;
          }
          var _0xeded99 = effectSprite._eeWorldX;
          var _0x1b2883 = _0xeded99 > _0x49c6d8;
          var _0x289aa2 = void 0;
          _0x289aa2 = _0x1b2883 ? Math.max(0, Math.min(1, (_0x548004 - _0xeded99) / _0xa24372)) : Math.max(0, Math.min(1, (_0xeded99 - _0x29a51b) / _0xa24372));
          if (_0x289aa2 >= 1) {
            if (effectSprite._eeActive) {
              effectSprite._eeActive = false;
              effectSprite.y = effectSprite._eeBaseY;
              effectSprite.x = effectSprite._eeWorldX;
              if (!effectSprite._eeAudioScale) {
                effectSprite.setScale(1);
              }
              effectSprite.setAlpha(this._getGroupOpacityForSprite(effectSprite));
            }
            continue;
          }
          effectSprite._eeActive = true;
          var _0x453353 = _0x1b2883 ? this._activeEnterEffect : this._activeExitEffect;
          var _0x20804e = 1 - _0x289aa2;
          var _0x50e6d9 = effectSprite._eeBaseY;
          var _0x17437c = effectSprite._eeWorldX;
          var _0x2128bf = _0x289aa2;
          var _0x127ace = 1;
          switch (_0x453353) {
            case 0:
              break;
            case 1:
              _0x50e6d9 = effectSprite._eeBaseY + _0x5e9f2a * _0x20804e;
              break;
            case 2:
              _0x50e6d9 = effectSprite._eeBaseY - _0x5e9f2a * _0x20804e;
              break;
            case 3:
              _0x17437c = effectSprite._eeWorldX - _0x5e9f2a * _0x20804e;
              break;
            case 4:
              _0x17437c = effectSprite._eeWorldX + _0x5e9f2a * _0x20804e;
              break;
            case 5:
              if (!effectSprite._eeAudioScale) {
                _0x127ace = _0x289aa2;
              }
              break;
            case 6:
              if (!effectSprite._eeAudioScale) {
                _0x127ace = 1 + _0x20804e * 0.75;
              }
          }
          if (effectSprite.x !== _0x17437c) {
            effectSprite.x = _0x17437c;
          }
          if (effectSprite.y !== _0x50e6d9) {
            effectSprite.y = _0x50e6d9;
          }
          var _eeFinalAlpha = _0x2128bf * this._getGroupOpacityForSprite(effectSprite);
          if (effectSprite.alpha !== _eeFinalAlpha) {
            effectSprite.alpha = _eeFinalAlpha;
          }
          if (!effectSprite._eeAudioScale && effectSprite.scaleX !== _0x127ace) {
            effectSprite.setScale(_0x127ace);
          }
        }
      }
    }
  }, {
    key: "setGroundColor",
    value: function setGroundColor(_0x3958eb) {
      if (window.isEditor) return; // not dealing with ts rn
      var _iterator24 = _createForOfIteratorHelper(this._groundTiles),
        _step24;
      try {
        for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
          var _0x46c21a = _step24.value;
          _0x46c21a.setTint(_0x3958eb);
        }
      } catch (err) {
        _iterator24.e(err);
      } finally {
        _iterator24.f();
      }
      var _iterator25 = _createForOfIteratorHelper(this._ceilingTiles),
        _step25;
      try {
        for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
          var _0x251562 = _step25.value;
          _0x251562.setTint(_0x3958eb);
        }
      } catch (err) {
        _iterator25.e(err);
      } finally {
        _iterator25.f();
      }
    }
  }, {
    key: "updateAudioScale",
    value: function updateAudioScale(_0x337bf7) {
      var _iterator26 = _createForOfIteratorHelper(this._audioScaleSprites),
        _step26;
      try {
        for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
          var _0x24afdb = _step26.value;
          _0x24afdb.setScale(_0x337bf7);
        }
      } catch (err) {
        _iterator26.e(err);
      } finally {
        _iterator26.f();
      }
      var _now = Date.now();
      var _clickMult = window.orbClickScale || 2.0;
      var _shrinkMs = window.orbClickShrinkTime || 250;
      var _iterator27 = _createForOfIteratorHelper(this._orbSprites),
        _step27;
      try {
        for (_iterator27.s(); !(_step27 = _iterator27.n()).done;) {
          var _0xOrbSpr = _step27.value;
          var _baseScale = 0.75 + _0x337bf7 * 0.15;
          if (_0xOrbSpr._hitTime) {
            var _elapsed = _now - _0xOrbSpr._hitTime;
            if (_elapsed < 80) {
              var _t = _elapsed / 80;
              _0xOrbSpr.setScale(_baseScale + _baseScale * (_clickMult - 1) * _t);
            } else if (_elapsed < 80 + _shrinkMs) {
              var _t2 = (_elapsed - 80) / _shrinkMs;
              var _peak = _baseScale * _clickMult;
              _0xOrbSpr.setScale(_peak + (_baseScale - _peak) * _t2);
            } else {
              _0xOrbSpr._hitTime = null;
              _0xOrbSpr.setScale(_baseScale);
            }
          } else {
            _0xOrbSpr.setScale(_baseScale);
          }
        }
      } catch (err) {
        _iterator27.e(err);
      } finally {
        _iterator27.f();
      }
    }
  }, {
    key: "resetVisibility",
    value: function resetVisibility() {
      this._visMinSec = -1;
      this._visMaxSec = -1;
    }
  }, {
    key: "resetObjects",
    value: function resetObjects() {
      var _iterator28 = _createForOfIteratorHelper(this.objects),
        _step28;
      try {
        for (_iterator28.s(); !(_step28 = _iterator28.n()).done;) {
          var _0x3d473e = _step28.value;
          if (!_0x3d473e) {
            continue;
          }
          _0x3d473e.activated = false;
          if (_0x3d473e._dashHoldTicks !== undefined) {
            _0x3d473e._dashHoldTicks = 0;
          }
        }
      } catch (err) {
        _iterator28.e(err);
      } finally {
        _iterator28.f();
      }
      var _iterator29 = _createForOfIteratorHelper(this._audioScaleSprites),
        _step29;
      try {
        for (_iterator29.s(); !(_step29 = _iterator29.n()).done;) {
          var _0x5c5d9a = _step29.value;
          _0x5c5d9a.setScale(0.1);
        }
      } catch (err) {
        _iterator29.e(err);
      } finally {
        _iterator29.f();
      }
      var _iterator30 = _createForOfIteratorHelper(this._coinSprites),
        _step30;
      try {
        for (_iterator30.s(); !(_step30 = _iterator30.n()).done;) {
          var _cs = _step30.value;
          if (_cs) {
            _cs.setVisible(true);
            _cs.setAlpha(1);
            _cs.setScale(_cs._coinBaseScale || 1);
            if (_cs._coinWorldY !== undefined) {
              _cs.y = b(_cs._coinWorldY);
            }
          }
        }
      } catch (err) {
        _iterator30.e(err);
      } finally {
        _iterator30.f();
      }
    }
  }]);
}();