function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var PracticeMode = /*#__PURE__*/function () {
  "use strict";

  function PracticeMode() {
    _classCallCheck(this, PracticeMode);
    this.checkpoints = [];
    this.practiceMode = false;
    this.checkpointSprites = [];
  }
  return _createClass(PracticeMode, [{
    key: "togglePracticeMode",
    value: function togglePracticeMode() {
      this.practiceMode = !this.practiceMode;
      if (!this.practiceMode) {
        this.clearCheckpoints();
      }
      return this.practiceMode;
    }
  }, {
    key: "saveCheckpoint",
    value: function saveCheckpoint(playerState, playerWorldX, cameraX, scene) {
      if (!this.practiceMode) return false;
      var checkpoint = {
        x: playerWorldX,
        y: playerState.y,
        yVelocity: playerState.yVelocity,
        gravityFlipped: playerState.gravityFlipped,
        isMini: playerState.isMini,
        isCube: playerState.isCube,
        isShip: playerState.isShip,
        isBall: playerState.isBall,
        isUfo: playerState.isUfo,
        isWave: playerState.isWave,
        isSpider: playerState.isSpider,
        isBird: playerState.isBird,
        isDart: playerState.isDart,
        isRobot: playerState.isRobot,
        isSwing: playerState.isSwing,
        isJetpack: playerState.isJetpack,
        isFlying: playerState.isFlying,
        isJumping: playerState.isJumping,
        onGround: playerState.onGround,
        canJump: playerState.canJump,
        wasBoosted: playerState.wasBoosted,
        rotation: playerState.rotation,
        gravity: playerState.gravity,
        jumpPower: playerState.jumpPower,
        mirrored: playerState.mirrored,
        isDashing: playerState.isDashing,
        dashYVelocity: playerState.dashYVelocity,
        cameraX: cameraX,
        flyCeilingY: scene._level._flyCeilingY,
        flyGroundActive: scene._level._flyGroundActive,
        flyVisualOnly: scene._level._flyVisualOnly,
        groundTargetValue: scene._level._groundTargetValue,
        flyCameraTarget: scene._level.flyCameraTarget,
        groundAnimating: scene._level._groundAnimating,
        groundAnimFrom: scene._level._groundAnimFrom,
        groundAnimTo: scene._level._groundAnimTo,
        groundAnimTime: scene._level._groundAnimTime,
        groundAnimDuration: scene._level._groundAnimDuration,
        cameraY: scene._cameraY,
        groundStartScreenY: scene._level._groundStartScreenY,
        ceilingStartScreenY: scene._level._ceilingStartScreenY,
        groundY: scene._level._groundY,
        ceilingY: scene._level._ceilingY,
        speed: playerSpeed,
        timestamp: Date.now()
      };
      this.checkpoints.push(checkpoint);
      var checkpointSprite = scene.add.image(playerWorldX, b(playerState.y), "GJ_GameSheet02", "checkpoint_01_001.png").setOrigin(0.5, 0.5).setScrollFactor(1).setDepth(15).setScale(1.0);
      scene._level.topContainer.add(checkpointSprite);
      this.checkpointSprites.push(checkpointSprite);
      return true;
    }
  }, {
    key: "deleteLastCheckpoint",
    value: function deleteLastCheckpoint() {
      if (this.checkpoints.length > 0) {
        this.checkpoints.pop();
        if (this.checkpointSprites.length > 0) {
          var lastSprite = this.checkpointSprites.pop();
          if (lastSprite && lastSprite.destroy) {
            lastSprite.destroy();
          }
        }
        return true;
      }
      return false;
    }
  }, {
    key: "clearCheckpoints",
    value: function clearCheckpoints() {
      this.checkpoints = [];
      var _iterator = _createForOfIteratorHelper(this.checkpointSprites),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var sprite = _step.value;
          if (sprite && sprite.destroy) {
            sprite.destroy();
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      this.checkpointSprites = [];
    }
  }, {
    key: "loadLastCheckpoint",
    value: function loadLastCheckpoint() {
      if (this.checkpoints.length > 0) {
        return this.checkpoints[this.checkpoints.length - 1];
      }
      return null;
    }
  }]);
}();
var GameScene = /*#__PURE__*/function (_Phaser$Scene) {
  "use strict";

  function GameScene() {
    var _this;
    _classCallCheck(this, GameScene);
    _this = _callSuper(this, GameScene, [{
      key: "GameScene"
    }]);
    _defineProperty(_this, "_handleEditorCamera", function (delta) {
      var camSpeed = 15;
      var cursors = _this.input.keyboard.createCursorKeys();
      var wasd = _this.input.keyboard.addKeys('W,A,S,D');
      if (cursors.left.isDown || wasd.A.isDown) {
        _this._cameraX -= camSpeed;
      } else if (cursors.right.isDown || wasd.D.isDown) {
        _this._cameraX += camSpeed;
      }
      if (cursors.up.isDown || wasd.W.isDown) {
        _this._cameraY -= camSpeed;
      } else if (cursors.down.isDown || wasd.S.isDown) {
        _this._cameraY += camSpeed;
      }
      _this._level.container.x = -_this._cameraX;
      _this._level.container.y = -_this._cameraY;
      _this._level.additiveContainer.x = -_this._cameraX;
      _this._level.additiveContainer.y = -_this._cameraY;
      _this._level.topContainer.x = -_this._cameraX;
      _this._level.topContainer.y = -_this._cameraY;
      _this._bg.tilePositionX = _this._cameraX * 0.1;
      _this._bg.tilePositionY = _this._bgInitY + _this._cameraY * 0.1;
    });
    _defineProperty(_this, "_initEditorLogic", function () {
      if (_this._editorGridGraphics) _this._editorGridGraphics.destroy();
      _this._editorGridGraphics = _this.add.graphics().setDepth(5);
      _this._totalIds = 500; // just using the first 500 objects, could be expanded in the future when categories are added and shi but i aint doing all dat rn
      _this._editorPage = 0;
      _this._maxPerPage = 12;
      _this._isSwipeEnabled = false;
      _this._lastSwipeGridX;
      _this._lastSwipeGridY;
      _this._clickStartPos = {
        x: 0,
        y: 0
      };
      _this._isDragging = false;
      _this._editorTab = "build";
      window.editorSelectedObject = -1;
      _this.input.on('pointerdown', function (pointer) {
        _this._clickStartPos.x = pointer.x;
        _this._clickStartPos.y = pointer.y;
        _this._cameraStartX = _this._cameraX;
        _this._cameraStartY = _this._cameraY;
        _this._isDragging = false;
      });
      _this.input.on('pointerup', function (pointer) {
        if (!_this._isSwipeEnabled && !_this._isDragging && _this._hitObjects.length === 0) {
          _this._editorAction();
        }
        _this._lastSwipeGridX = -1;
        _this._lastSwipeGridY = -1;
        _this._isDragging = false;
      });
      _this._createEditorGui();
    });
    _defineProperty(_this, "_createEditorGui", function () {
      var centerX = screenWidth / 2;
      var bottomY = screenHeight - 100;
      _this._editorGui = _this.add.container(screenWidth - 40, 40).setScrollFactor(0).setDepth(1000);
      var editorPause = _this.add.image(0, 0, "GJ_GameSheet03", "GJ_pauseBtn_001.png").setInteractive().setFlipX(true);
      _this._deleteButton = _this.add.image(50, 40, "GJ_GameSheet03", "GJ_trashBtn_001.png").setInteractive();
      _this._editorGui.add(editorPause, _this._deleteButton);
      _this._makeBouncyButton(editorPause, 1.0, function () {
        return _this._showEditorPauseMenu(true);
      }, function () {
        return true;
      });
      _this._makeBouncyButton(_this._deleteButton, 0.9, function () {
        return _this._deleteSelectedObject();
      }, function () {
        return true;
      });
      _this._initEditorPauseMenu();
      _this._toolbox = _this.add.container(0, 0).setScrollFactor(0).setDepth(1000);
      var bg = _this.add.rectangle(0, screenHeight, screenWidth, 200, 0x000000).setOrigin(0, 1).setAlpha(0.75).setInteractive();
      _this._toolbox.add(bg);
      _this._leftArrow = _this.add.image(screenWidth / 2 - 330, screenHeight - 100, "GJ_GameSheet03", "GJ_arrow_02_001.png").setInteractive().setScale(0.7);
      _this._rightArrow = _this.add.image(screenWidth / 2 + 330, screenHeight - 100, "GJ_GameSheet03", "GJ_arrow_02_001.png").setInteractive().setScale(0.7).setFlipX(true);
      _this._toolbox.add([_this._leftArrow, _this._rightArrow]);
      var swipeX = centerX + 450;
      var swipeY = screenHeight - 100;
      _this._swipeContainer = _this.add.container(swipeX, swipeY).setDepth(1001);
      _this._toolbox.add(_this._swipeContainer);
      _this._swipeBg = _this.add.image(0, 0, "GJ_button01").setInteractive().setScale(0.8);
      _this._swipeText = _this.add.bitmapText(-1, -2, "bigFont", "swipe", 16).setOrigin(0.5);
      _this._swipeContainer.add([_this._swipeBg, _this._swipeText]);
      _this._makeBouncyButton(_this._swipeBg, 0.8, function () {
        _this._isSwipeEnabled = !_this._isSwipeEnabled;
        if (_this._isSwipeEnabled) {
          _this._swipeBg.setTexture("GJ_button02");
        } else {
          _this._swipeBg.setTexture("GJ_button01");
        }
      });
      var tabX = screenWidth / 2 - 475;
      var tabYStart = screenHeight - 150;
      var tabSpacing = 55;
      _this._separatorLeft = _this.add.image(tabX + 100, screenHeight - 100, "GJ_GameSheet03", "edit_vLine_001.png");
      _this._toolbox.add(_this._separatorLeft);
      _this._separatorRight = _this.add.image(centerX + 375, screenHeight - 100, "GJ_GameSheet03", "edit_vLine_001.png");
      _this._toolbox.add(_this._separatorRight);
      var tabs = [{
        id: "build",
        frame: "edit_buildBtn_001.png"
      }, {
        id: "edit",
        frame: "edit_editBtn_001.png"
      }, {
        id: "delete",
        frame: "edit_deleteBtn_001.png"
      }];
      _this._tabButtons = {};
      tabs.forEach(function (tab, i) {
        var btn = _this.add.image(tabX, tabYStart + i * tabSpacing, "GJ_GameSheet03", tab.frame).setInteractive();
        _this._toolbox.add(btn);
        _this._tabButtons[tab.id] = btn;
        _this._makeBouncyButton(btn, 1, function () {
          _this._editorTab = tab.id;
          _this._editorPage = 0;
          _this._updateTabVisuals();
          _this._buildObjectGrid();
        });
      });
      _this._sideButtons = _this.add.container(screenWidth - 48, 120).setScrollFactor(0).setDepth(1000);
      _this._copyPasteBtn = _this.add.image(0, 0, "GJ_GameSheet03", "GJ_duplicateObjectBtn2_001.png").setInteractive().setScale(1);
      _this._deselectBtn = _this.add.image(0, 75, "GJ_GameSheet03", "GJ_deSelBtn2_001.png").setInteractive().setScale(1);
      _this._sideButtons.add([_this._copyPasteBtn, _this._deselectBtn]);
      _this._makeBouncyButton(_this._copyPasteBtn, 1, function () {
        _this._duplicateSelectedObject();
      });
      _this._makeBouncyButton(_this._deselectBtn, 1, function () {
        _this._clearEditorSelection();
      });
      _this._updateEditorActionButtons();
      _this._updateTabVisuals();
      _this._buildObjectGrid();
    });
    _defineProperty(_this, "_updateTabVisuals", function () {
      Object.keys(_this._tabButtons).forEach(function (id) {
        var isSelected = _this._editorTab === id;
        var btn = _this._tabButtons[id];
        var frameName = btn.frame.name.replace("SBtn", "Btn");
        if (isSelected) {
          frameName = frameName.replace("Btn", "SBtn");
        }
        btn.setFrame(frameName);
      });
    });
    _defineProperty(_this, "_getSheetForFrameThingy", function (frameName) {
      var sheets = ["GJ_WebSheet", "GJ_GameSheet", "GJ_GameSheet02", "GJ_GameSheet03", "GJ_GameSheet04"];
      for (var _i = 0, _sheets = sheets; _i < _sheets.length; _i++) {
        var key = _sheets[_i];
        if (_this.textures.exists(key) && _this.textures.get(key).has(frameName)) {
          return key;
        }
      }
    });
    _defineProperty(_this, "_buildObjectGrid", function () {
      if (_this._gridContainer) _this._gridContainer.destroy();
      if (_this._pageDotsContainer) _this._pageDotsContainer.destroy();
      _this._gridContainer = _this.add.container(0, 0);
      _this._toolbox.add(_this._gridContainer);
      var itemsForGrid = [];
      if (_this._editorTab === "build") {
        for (var i = 1; i <= _this._totalIds; i++) {
          var def = getObjectFromId(i);
          if (def && def.frame) itemsForGrid.push({
            type: "object",
            id: i,
            frame: def.frame
          });
        }
      } else if (_this._editorTab === "edit") {
        var moveActions = [{
          dx: 0,
          dy: -3,
          icon: "edit_upBtn_001.png",
          angle: 0,
          scale: 1,
          flipX: false
        }, {
          dx: 0,
          dy: 3,
          icon: "edit_upBtn_001.png",
          angle: 180,
          scale: 1,
          flipX: false
        }, {
          dx: -3,
          dy: 0,
          icon: "edit_upBtn_001.png",
          angle: 270,
          scale: 1,
          flipX: false
        }, {
          dx: 3,
          dy: 0,
          icon: "edit_upBtn_001.png",
          angle: 90,
          scale: 1,
          flipX: false
        }, {
          dx: 0,
          dy: -60,
          icon: "edit_upBtn2_001.png",
          angle: 90,
          scale: 1,
          flipX: false
        }, {
          dx: 0,
          dy: 60,
          icon: "edit_upBtn2_001.png",
          angle: 270,
          scale: 1,
          flipX: false
        }, {
          dx: -60,
          dy: 0,
          icon: "edit_upBtn2_001.png",
          angle: 0,
          scale: 1,
          flipX: false
        }, {
          dx: 60,
          dy: 0,
          icon: "edit_upBtn2_001.png",
          angle: 180,
          scale: 1,
          flipX: false
        }, {
          dx: 0,
          dy: -300,
          icon: "edit_upBtn3_001.png",
          angle: 90,
          scale: 1,
          flipX: false
        }, {
          dx: 0,
          dy: 300,
          icon: "edit_upBtn3_001.png",
          angle: 270,
          scale: 1,
          flipX: false
        }, {
          dx: -300,
          dy: 0,
          icon: "edit_upBtn3_001.png",
          angle: 0,
          scale: 1,
          flipX: false
        }, {
          dx: 300,
          dy: 0,
          icon: "edit_upBtn3_001.png",
          angle: 180,
          scale: 1,
          flipX: false
        }, {
          dx: 0,
          dy: -1,
          icon: "edit_upBtn_001.png",
          angle: 0,
          scale: 0.7,
          flipX: false
        }, {
          dx: 0,
          dy: 1,
          icon: "edit_upBtn_001.png",
          angle: 180,
          scale: 0.7,
          flipX: false
        }, {
          dx: -1,
          dy: 0,
          icon: "edit_upBtn_001.png",
          angle: 270,
          scale: 0.7,
          flipX: false
        }, {
          dx: 1,
          dy: 0,
          icon: "edit_upBtn_001.png",
          angle: 90,
          scale: 0.7,
          flipX: false
        }, {
          dx: 0,
          dy: -30,
          icon: "edit_upBtn5_001.png",
          angle: 0,
          scale: 1,
          flipX: false
        }, {
          dx: 0,
          dy: 30,
          icon: "edit_upBtn5_001.png",
          angle: 180,
          scale: 1,
          flipX: false
        }, {
          dx: -30,
          dy: 0,
          icon: "edit_upBtn5_001.png",
          angle: 270,
          scale: 1,
          flipX: false
        }, {
          dx: 30,
          dy: 0,
          icon: "edit_upBtn5_001.png",
          angle: 90,
          scale: 1,
          flipX: false
        }];
        moveActions.forEach(function (a) {
          return itemsForGrid.push(_objectSpread({
            type: "action",
            subType: "move"
          }, a));
        });
        var flipActions = [{
          axis: "x",
          icon: "edit_flipYBtn_001.png",
          angle: 90,
          scale: 0.8,
          flipX: false
        }, {
          axis: "y",
          icon: "edit_flipXBtn_001.png",
          angle: 90,
          scale: 0.8,
          flipX: false
        }];
        flipActions.forEach(function (a) {
          return itemsForGrid.push(_objectSpread({
            type: "action",
            subType: "flip"
          }, a));
        });
        var rotateActions = [{
          degrees: 90,
          icon: "edit_ccwBtn_001.png",
          angle: 0,
          scale: 0.8,
          flipX: true
        }, {
          degrees: -90,
          icon: "edit_ccwBtn_001.png",
          angle: 0,
          scale: 0.8,
          flipX: false
        }, {
          degrees: 45,
          icon: "edit_rotate45rBtn_001.png",
          angle: 0,
          scale: 0.85,
          flipX: false
        }, {
          degrees: -45,
          icon: "edit_rotate45lBtn_001.png",
          angle: 0,
          scale: 0.85,
          flipX: false
        }];
        rotateActions.forEach(function (a) {
          return itemsForGrid.push(_objectSpread({
            type: "action",
            subType: "rotate"
          }, a));
        });
      } else if (_this._editorTab === "delete") {
        itemsForGrid.push({
          type: "delete",
          icon: "edit_delBtn_001.png"
        });
      }
      var totalPages = 1;
      if (_this._editorTab === "build") {
        totalPages = Math.ceil(itemsForGrid.length / _this._maxPerPage);
      } else if (_this._editorTab === "edit") {
        totalPages = 3;
      } else if (_this._editorTab === "delete") {
        totalPages = 1;
      }
      if (_this._editorPage >= totalPages) _this._editorPage = 0;
      var showArrows = _this._editorTab !== "delete";
      if (_this._leftArrow) {
        _this._leftArrow.setVisible(showArrows);
        _this._leftArrow.disableInteractive();
        if (showArrows) _this._leftArrow.setInteractive();
      }
      if (_this._rightArrow) {
        _this._rightArrow.setVisible(showArrows);
        _this._rightArrow.disableInteractive();
        if (showArrows) _this._rightArrow.setInteractive();
      }
      if (showArrows) {
        _this._makeBouncyButton(_this._leftArrow, 0.8, function () {
          if (_this._editorTab === "edit") {
            _this._editorPage = _this._editorPage > 0 ? _this._editorPage - 1 : 2;
          } else {
            _this._editorPage = _this._editorPage > 0 ? _this._editorPage - 1 : totalPages - 1;
          }
          _this._buildObjectGrid();
        });
        _this._makeBouncyButton(_this._rightArrow, 0.8, function () {
          _this._editorPage = _this._editorPage < totalPages - 1 ? _this._editorPage + 1 : 0;
          _this._buildObjectGrid();
        });
      }
      if (_this._editorTab !== "delete") {
        _this._pageDotsContainer = _this.add.container(0, 0);
        _this._toolbox.add(_this._pageDotsContainer);
        var dotSpacing = 18;
        var dotsStartX = screenWidth / 2 - (totalPages - 1) * dotSpacing / 2;
        var dotsY = screenHeight - 10;
        for (var _i2 = 0; _i2 < totalPages; _i2++) {
          var dot = _this.add.circle(dotsStartX + _i2 * dotSpacing, dotsY, 4, _i2 === _this._editorPage ? 0xffffff : 0x888888);
          if (_i2 === _this._editorPage) {
            dot.setStrokeStyle(1, 0xffffff, 0.5);
          }
          _this._pageDotsContainer.add(dot);
        }
      }
      var startIdx = _this._editorPage * _this._maxPerPage;
      var pageItems = _this._editorTab === "delete" ? itemsForGrid : itemsForGrid.slice(startIdx, startIdx + _this._maxPerPage);
      var paddingX = 90;
      var paddingY = 80;
      var cols = 6;
      var startX = screenWidth / 2 - (cols - 1) * paddingX / 2;
      var startY = screenHeight - 140;
      pageItems.forEach(function (item, index) {
        var col = index % cols;
        var row = Math.floor(index / cols);
        var x = startX + col * paddingX;
        var y = startY + row * paddingY;
        if (item.type === "object") {
          var btnBg = _this.add.image(x, y, "GJ_GameSheet03", "GJ_checkOff_001.png").setScale(1.2).setInteractive();
          var sheet = _this._getSheetForFrameThingy(item.frame);
          var icon = _this.add.image(x, y, sheet, item.frame);
          var targetSize = 64;
          var maxDim = Math.max(icon.width, icon.height);
          var scaleMultiplier = targetSize / maxDim;
          icon.setScale(Math.min(scaleMultiplier, 0.6));
          if (window.selectedObjId === item.id) btnBg.setTint(0x888888);
          _this._gridContainer.add([btnBg, icon]);
          _this._makeBouncyButton(btnBg, 1.2, function () {
            window.selectedObjId = item.id;
            _this._buildObjectGrid();
          });
        } else if (item.type === "action") {
          var btn = _this.add.image(x, y, "GJ_button01").setInteractive().setScale(0.92);
          var _icon = _this.add.image(x, y, "GJ_GameSheet03", item.icon).setAngle(item.angle).setScale(item.scale).setFlipX(item.flipX);
          _this._gridContainer.add([btn, _icon]);
          _this._makeBouncyButton(btn, 0.92, function () {
            if (item.subType === "move") {
              _this._moveObject(item.dx, item.dy);
            } else if (item.subType === "rotate") {
              _this._rotateObject(item.degrees);
            } else if (item.subType === "flip") {
              _this._flipObject(item.axis);
            }
          });
        } else if (item.type === "delete") {
          var _btnBg = _this.add.image(x, y, "GJ_GameSheet03", "GJ_checkOff_001.png").setScale(1.2).setInteractive();
          var _icon2 = _this.add.image(x, y, "GJ_GameSheet03", item.icon);
          _this._deleteGridButton = _btnBg;
          _this._gridContainer.add([_btnBg, _icon2]);
          _this._makeBouncyButton(_btnBg, 1.2, function () {
            _this._deleteSelectedObject();
          });
          _this._updateEditorActionButtons();
        }
      });
    });
    // Helper to keep grid logic clean
    _defineProperty(_this, "_moveObject", function (dx, dy) {
      var selectedIndex = window.editorSelectedObject;
      if (selectedIndex === -1) return;
      var collider = _this._level.objects[selectedIndex];
      var sprites = _this._level.objectSprites[selectedIndex];
      var saveObj = window.levelObjects[selectedIndex];
      if (!collider || !saveObj) return;
      collider.x += dx;
      collider.y += dy;
      collider._baseX += dx;
      collider._baseY += dy;
      collider._origBaseX += dx;
      collider._origBaseY += dy;
      saveObj.x += dx / 2;
      saveObj.y -= dy / 2;
      if (saveObj._raw) {
        saveObj._raw["2"] = String(saveObj.x);
        saveObj._raw["3"] = String(saveObj.y);
      }
      if (sprites) {
        var _iterator2 = _createForOfIteratorHelper(sprites),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var s = _step2.value;
            if (!s) continue;
            s.x += dx;
            s.y += dy;
            if (s._eeWorldX !== undefined) s._eeWorldX += dx;
            if (s._eeBaseY !== undefined) s._eeBaseY += dy;
            if (s._origWorldX !== undefined) s._origWorldX += dx;
            if (s._origBaseY !== undefined) s._origBaseY += dy;
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
    });
    _defineProperty(_this, "_rotateObject", function (degrees) {
      var selectedIndex = window.editorSelectedObject;
      if (selectedIndex === -1) return;
      var collider = _this._level.objects[selectedIndex];
      var sprites = _this._level.objectSprites[selectedIndex];
      var saveObj = window.levelObjects[selectedIndex];
      if (!saveObj) return;
      saveObj.rot = (saveObj.rot || 0) + degrees;
      if (saveObj._raw) {
        saveObj._raw["6"] = String(saveObj.rot);
      }
      if (collider) {
        collider.rotation = saveObj.rot;
      }
      if (sprites) {
        var _iterator3 = _createForOfIteratorHelper(sprites),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var s = _step3.value;
            if (!s) continue;
            s.angle += degrees;
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }
    });
    _defineProperty(_this, "_flipObject", function (axis) {
      var selectedIndex = window.editorSelectedObject;
      if (selectedIndex === -1) return;
      var sprites = _this._level.objectSprites[selectedIndex];
      var saveObj = window.levelObjects[selectedIndex];
      if (!saveObj) return;
      if (axis === "x") {
        saveObj.flipX = !saveObj.flipX;
        if (saveObj._raw) saveObj._raw["4"] = saveObj.flipX ? "1" : "0";
        if (sprites) {
          var _iterator4 = _createForOfIteratorHelper(sprites),
            _step4;
          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var s = _step4.value;
              if (!s) continue;
              s.setFlipX(!s.flipX);
              s.angle = -s.angle;
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
        }
      } else {
        saveObj.flipY = !saveObj.flipY;
        if (saveObj._raw) saveObj._raw["5"] = saveObj.flipY ? "1" : "0";
        if (sprites) {
          var _iterator5 = _createForOfIteratorHelper(sprites),
            _step5;
          try {
            for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
              var _s = _step5.value;
              if (!_s) continue;
              _s.setFlipY(!_s.flipY);
              _s.angle = -_s.angle;
            }
          } catch (err) {
            _iterator5.e(err);
          } finally {
            _iterator5.f();
          }
        }
      }
      saveObj.rot = -saveObj.rot;
    });
    _defineProperty(_this, "_clearEditorSelection", function () {
      if (_this._currentSelectedSprites) {
        var _iterator6 = _createForOfIteratorHelper(_this._currentSelectedSprites),
          _step6;
        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
            var spr = _step6.value;
            if (!spr) continue;
            if (spr._editorPrevTint !== undefined && spr._editorPrevTint !== null) {
              spr.setTint(spr._editorPrevTint);
            } else {
              spr.clearTint();
            }
            delete spr._editorPrevTint;
          }
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
        }
      }
      _this._currentSelectedSprites = [];
      _this._currentSelectedSprite = null;
      window.editorSelectedObject = -1;
      _this._updateEditorActionButtons();
    });
    _defineProperty(_this, "_selectEditorObjectByIndex", function (index) {
      _this._clearEditorSelection();
      var linkedSprites = _this._level.objectSprites[index];
      if (!linkedSprites || !linkedSprites.length) return;
      var _iterator7 = _createForOfIteratorHelper(linkedSprites),
        _step7;
      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var spr = _step7.value;
          if (!spr) continue;
          if (spr._editorPrevTint === undefined) {
            spr._editorPrevTint = spr.tintTopLeft !== undefined ? spr.tintTopLeft : null;
          }
          spr.setTint(0x00ff00);
          _this._currentSelectedSprites.push(spr);
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }
      _this._currentSelectedSprite = linkedSprites[0];
      window.editorSelectedObject = index;
      _this._updateEditorActionButtons();
    });
    _defineProperty(_this, "_duplicateSelectedObject", function () {
      var selectedIndex = window.editorSelectedObject;
      if (selectedIndex === -1) return;
      var src = window.levelObjects[selectedIndex];
      if (!src) return;
      var clone = JSON.parse(JSON.stringify(src));
      window.levelObjects.push(clone);
      _this._level._spawnObject(clone);
      var newIndex = _this._level.objects.length - 1;
      var newestSprites = _this._level.objectSprites[newIndex];
      if (newestSprites && newestSprites.length) {
        var depthBase = {
          "-3": -6,
          "-1": -3,
          0: 0,
          1: 3,
          3: 6,
          5: 9
        };
        var finalDepth = (depthBase[clone.zLayer] || 0) + clone.zOrder * 0.01;
        var _iterator8 = _createForOfIteratorHelper(newestSprites),
          _step8;
        try {
          for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
            var spr = _step8.value;
            if (!spr) continue;
            spr.setDepth((spr._eeZDepth || finalDepth) + 10);
            if (_this._level.container && !_this._level.container.exists(spr)) {
              _this._level.container.add(spr);
            }
          }
        } catch (err) {
          _iterator8.e(err);
        } finally {
          _iterator8.f();
        }
      }
      _this._selectEditorObjectByIndex(newIndex);
      _this._buildObjectGrid();
    });
    _defineProperty(_this, "_deleteSelectedObject", function () {
      var selectedIndex = window.editorSelectedObject;
      if (selectedIndex === -1) return;
      _this._clearEditorSelection();
      var sprites = _this._level.objectSprites[selectedIndex] || [];
      var _iterator9 = _createForOfIteratorHelper(sprites),
        _step9;
      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
          var _spr = _step9.value;
          if (_spr && _spr.destroy) _spr.destroy();
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }
      var collider = _this._level.objects[selectedIndex];
      if (collider && collider.destroy) collider.destroy();
      _this._level.objectSprites.splice(selectedIndex, 1);
      _this._level.objects.splice(selectedIndex, 1);
      window.levelObjects.splice(selectedIndex, 1);
      for (var i = selectedIndex; i < _this._level.objectSprites.length; i++) {
        var list = _this._level.objectSprites[i];
        if (!list || !list.length) continue;
        var _iterator0 = _createForOfIteratorHelper(list),
          _step0;
        try {
          for (_iterator0.s(); !(_step0 = _iterator0.n()).done;) {
            var spr = _step0.value;
            if (spr) spr._eeObjectId = i;
          }
        } catch (err) {
          _iterator0.e(err);
        } finally {
          _iterator0.f();
        }
      }
      _this._buildObjectGrid();
      _this._updateEditorActionButtons();
    });
    _defineProperty(_this, "_updateEditorActionButtons", function () {
      var hasSelection = window.editorSelectedObject !== -1;
      var alpha = hasSelection ? 1 : 0.5;
      if (_this._copyPasteBtn) {
        _this._copyPasteBtn.setAlpha(alpha);
        if (hasSelection) {
          _this._copyPasteBtn.setInteractive();
        } else {
          _this._copyPasteBtn.disableInteractive();
        }
      }
      if (_this._deselectBtn) {
        _this._deselectBtn.setAlpha(alpha);
        if (hasSelection) {
          _this._deselectBtn.setInteractive();
        } else {
          _this._deselectBtn.disableInteractive();
        }
      }
      if (_this._deleteButton) {
        _this._deleteButton.setAlpha(alpha);
        if (hasSelection) {
          _this._deleteButton.setInteractive();
        } else {
          _this._deleteButton.disableInteractive();
        }
      }
      if (_this._editorTab == "delete") {
        _this._deleteGridButton.setAlpha(alpha);
        if (hasSelection) {
          _this._deleteGridButton.setInteractive();
        } else {
          _this._deleteGridButton.disableInteractive();
        }
      }
    });
    _defineProperty(_this, "_updateEditorGrid", function () {
      if (!_this._editorGridGraphics) return;
      var g = _this._editorGridGraphics;
      g.clear();
      var gridSize = 60;
      g.lineStyle(1, 0x000000, 0.4);
      var offsetX = -_this._cameraX % gridSize;
      var offsetY = -_this._cameraY % gridSize - 20;
      for (var x = offsetX - gridSize; x < screenWidth + gridSize; x += gridSize) {
        g.lineBetween(x, 0, x, screenHeight);
      }
      for (var y = offsetY - gridSize; y < screenHeight + gridSize; y += gridSize) {
        g.lineBetween(0, y, screenWidth, y);
      }
      var startLineX = -_this._cameraX;
      if (startLineX >= -50 && startLineX <= screenWidth + 50) {
        g.lineStyle(1, 0xffffff, 1);
        g.lineBetween(startLineX, 0, startLineX, screenHeight);
      }
      var groundLineY = -20 + 60 * 8 - _this._cameraY;
      if (groundLineY >= -50 && groundLineY <= screenHeight + 50) {
        g.lineStyle(1, 0xffffff, 1);
        g.lineBetween(0, groundLineY, screenWidth, groundLineY);
      }
    });
    _defineProperty(_this, "_editorAction", function () {
      if (_this._editorTab === "build") {
        _this._placeObject();
      } else if (_this._editorTab === "edit") {
        _this._selectObjectAtPointer();
      } else if (_this._editorTab === "delete") {
        _this._deleteObjectAtPointer();
      }
    });
    _defineProperty(_this, "_placeObject", function () {
      var pointer = _this.input.activePointer;
      var worldX = pointer.x + _this._cameraX;
      var worldY = pointer.y + _this._cameraY;
      var snapX = Math.floor(worldX / 60) * 60;
      var snapY = Math.floor((worldY + 20) / 60) * 60;
      var transformedX = snapX / 2 + 15;
      var transformedY = -(snapY / 2) + 225;
      var objId = window.selectedObjId;
      var objectDef = getObjectFromId(objId);
      if (!objectDef) return;
      var saveData = {
        id: objId,
        x: transformedX,
        y: transformedY,
        flipX: false,
        flipY: false,
        rot: 0,
        scale: 1,
        zLayer: objectDef.default_z_layer || 0,
        zOrder: objectDef.default_z_order || 0,
        groups: "",
        color1: 0,
        color2: 0,
        gameMode: 0,
        miniMode: 0,
        speed: 0,
        mirrored: 0,
        flipGravity: false,
        _raw: {
          "1": String(objId),
          "2": String(transformedX),
          "3": String(transformedY),
          "4": "0",
          "5": "0",
          "6": "0",
          "21": "0",
          "22": "0",
          "24": String(objectDef.default_z_layer || 0),
          "25": String(objectDef.default_z_order || 0),
          "32": "1",
          "57": "",
          "kA2": "0",
          "kA3": "0",
          "kA4": "0",
          "kA28": "0",
          "kA11": "0"
        }
      };
      window.levelObjects.push(saveData);
      _this._level._spawnObject(saveData);
      var placedIndex = _this._level.objectSprites.length - 1;
      var newestSprites = _this._level.objectSprites[placedIndex];
      if (newestSprites && newestSprites.sprites) {
        var depthBase = {
          "-3": -6,
          "-1": -3,
          0: 0,
          1: 3,
          3: 6,
          5: 9
        };
        var finalDepth = (depthBase[saveData.zLayer] || 0) + saveData.zOrder * 0.01;
        var _iterator1 = _createForOfIteratorHelper(newestSprites.sprites),
          _step1;
        try {
          for (_iterator1.s(); !(_step1 = _iterator1.n()).done;) {
            var spr = _step1.value;
            if (!spr) continue;
            spr.setDepth((spr._eeZDepth || finalDepth) + 10);
            if (_this._level.container && !_this._level.container.exists(spr)) {
              _this._level.container.add(spr);
            }
          }
        } catch (err) {
          _iterator1.e(err);
        } finally {
          _iterator1.f();
        }
      }
      if (_this._currentSelectedSprites) {
        var _iterator10 = _createForOfIteratorHelper(_this._currentSelectedSprites),
          _step10;
        try {
          for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
            var _spr2 = _step10.value;
            if (!_spr2) continue;
            if (_spr2._editorPrevTint !== undefined && _spr2._editorPrevTint !== null) {
              _spr2.setTint(_spr2._editorPrevTint);
            } else {
              _spr2.clearTint();
            }
            delete _spr2._editorPrevTint;
          }
        } catch (err) {
          _iterator10.e(err);
        } finally {
          _iterator10.f();
        }
      }
      _this._currentSelectedSprites = [];
      if (newestSprites && newestSprites.length) {
        var _iterator11 = _createForOfIteratorHelper(newestSprites),
          _step11;
        try {
          for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
            var _spr3 = _step11.value;
            if (!_spr3) continue;
            if (_spr3._editorPrevTint === undefined) {
              _spr3._editorPrevTint = _spr3.tintTopLeft !== undefined ? _spr3.tintTopLeft : null;
            }
            _spr3.setTint(0x00ff00);
            _this._currentSelectedSprites.push(_spr3);
          }
        } catch (err) {
          _iterator11.e(err);
        } finally {
          _iterator11.f();
        }
        _this._currentSelectedSprite = newestSprites[0];
        window.editorSelectedObject = placedIndex;
      }
      _this._updateEditorActionButtons();
    });
    _defineProperty(_this, "_selectObjectAtPointer", function () {
      var pointer = _this.input.activePointer;
      if (_this._currentSelectedSprites) {
        var _iterator12 = _createForOfIteratorHelper(_this._currentSelectedSprites),
          _step12;
        try {
          for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
            var spr = _step12.value;
            if (!spr) continue;
            if (spr._editorPrevTint !== undefined && spr._editorPrevTint !== null) {
              spr.setTint(spr._editorPrevTint);
            } else {
              spr.clearTint();
            }
            delete spr._editorPrevTint;
          }
        } catch (err) {
          _iterator12.e(err);
        } finally {
          _iterator12.f();
        }
      }
      _this._currentSelectedSprites = [];
      _this._currentSelectedSprite = null;
      window.editorSelectedObject = -1;
      var foundObjectIndex = -1;
      for (var i = _this._level.objectSprites.length - 1; i >= 0; i--) {
        var spriteList = _this._level.objectSprites[i];
        if (!spriteList || !spriteList.length) continue;
        for (var j = spriteList.length - 1; j >= 0; j--) {
          var _spr4 = spriteList[j];
          if (!_spr4 || !_spr4.active || !_spr4.visible) continue;
          var bounds = _spr4.getBounds();
          if (bounds.contains(pointer.x, pointer.y)) {
            foundObjectIndex = i;
            break;
          }
        }
        if (foundObjectIndex !== -1) {
          break;
        }
      }
      if (foundObjectIndex === -1) {
        return;
      }
      var linkedSprites = _this._level.objectSprites[foundObjectIndex];
      if (!linkedSprites || !linkedSprites.length) {
        return;
      }
      var _iterator13 = _createForOfIteratorHelper(linkedSprites),
        _step13;
      try {
        for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
          var _spr5 = _step13.value;
          if (!_spr5) continue;
          if (_spr5._editorPrevTint === undefined) {
            _spr5._editorPrevTint = _spr5.tintTopLeft !== undefined ? _spr5.tintTopLeft : null;
          }
          _spr5.setTint(0x00ff00);
          _this._currentSelectedSprites.push(_spr5);
        }
      } catch (err) {
        _iterator13.e(err);
      } finally {
        _iterator13.f();
      }
      _this._currentSelectedSprite = linkedSprites[0];
      window.editorSelectedObject = foundObjectIndex;
      _this._updateEditorActionButtons();
    });
    _defineProperty(_this, "_deleteObjectAtPointer", function () {
      var pointer = _this.input.activePointer;
      var foundObjectIndex = -1;
      for (var i = _this._level.objectSprites.length - 1; i >= 0; i--) {
        var spriteList = _this._level.objectSprites[i];
        if (!spriteList || !spriteList.length) continue;
        for (var j = spriteList.length - 1; j >= 0; j--) {
          var spr = spriteList[j];
          if (!spr || !spr.active || !spr.visible) continue;
          var bounds = spr.getBounds();
          if (bounds.contains(pointer.x, pointer.y)) {
            foundObjectIndex = i;
            break;
          }
        }
        if (foundObjectIndex !== -1) break;
      }
      if (foundObjectIndex === -1) return;
      if (window.editorSelectedObject === foundObjectIndex) {
        _this._clearEditorSelection();
      }
      var linkedSprites = _this._level.objectSprites[foundObjectIndex];
      var collider = _this._level.objects[foundObjectIndex];
      if (linkedSprites && linkedSprites.length) {
        var _iterator14 = _createForOfIteratorHelper(linkedSprites),
          _step14;
        try {
          for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
            var _spr6 = _step14.value;
            if (_spr6 && _spr6.destroy) _spr6.destroy();
          }
        } catch (err) {
          _iterator14.e(err);
        } finally {
          _iterator14.f();
        }
      }
      if (collider && collider.destroy) {
        collider.destroy();
      }
      _this._level.objectSprites.splice(foundObjectIndex, 1);
      _this._level.objects.splice(foundObjectIndex, 1);
      window.levelObjects.splice(foundObjectIndex, 1);
      for (var _i3 = foundObjectIndex; _i3 < _this._level.objectSprites.length; _i3++) {
        var list = _this._level.objectSprites[_i3];
        if (!list || !list.length) continue;
        var _iterator15 = _createForOfIteratorHelper(list),
          _step15;
        try {
          for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
            var _spr7 = _step15.value;
            if (_spr7) _spr7._eeObjectId = _i3;
          }
        } catch (err) {
          _iterator15.e(err);
        } finally {
          _iterator15.f();
        }
      }
      window.editorSelectedObject = -1;
      _this._updateEditorActionButtons();
    });
    _defineProperty(_this, "_initEditorPauseMenu", function () {
      _this._editorMenuContainer = _this.add.container(0, 0).setDepth(2000).setVisible(false);
      var bgDim = _this.add.rectangle(0, 0, screenWidth, screenHeight, 0x000000, 0.6).setOrigin(0).setInteractive();
      _this._editorMenuContainer.add(bgDim);
      var buttonData = [{
        text: "Resume",
        cb: function cb() {
          return _this._showEditorPauseMenu(false);
        }
      }, {
        text: "Save and Play",
        cb: function () {
          var _cb = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
            return _regenerator().w(function (_context) {
              while (1) switch (_context.n) {
                case 0:
                  _this._saveEditorLevel();
                  _context.n = 1;
                  return _this._showLoadingBuffer("Loading...");
                case 1:
                  window.isEditor = false;
                  _this.game.registry.set("autoStartGame", true);
                  _this.scene.restart();
                case 2:
                  return _context.a(2);
              }
            }, _callee);
          }));
          function cb() {
            return _cb.apply(this, arguments);
          }
          return cb;
        }()
      }, {
        text: "Save and Exit",
        cb: function () {
          var _cb2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
            return _regenerator().w(function (_context2) {
              while (1) switch (_context2.n) {
                case 0:
                  _this._saveEditorLevel();
                  _context2.n = 1;
                  return _this._showLoadingBuffer("Loading...");
                case 1:
                  window.isEditor = false;
                  _this.scene.restart();
                case 2:
                  return _context2.a(2);
              }
            }, _callee2);
          }));
          function cb() {
            return _cb2.apply(this, arguments);
          }
          return cb;
        }()
      }, {
        text: "Save",
        cb: function cb() {
          return _this._saveEditorLevel();
        }
      }, {
        text: "Exit",
        cb: function cb() {
          window.isEditor = false;
          _this.scene.restart();
        }
      }];
      buttonData.forEach(function (data, i) {
        var x = screenWidth / 2;
        var y = screenHeight / 2 - 180 + i * 75;
        var btnImg = _this.add.nineslice(x, y, "GJ_button01", null, 450, 65, 24, 24, 24, 24).setScale(0.75).setInteractive();
        var label = _this.add.bitmapText(x, y - 2, "goldFont", data.text, 40).setOrigin(0.5, 0.5).setScale(0.8);
        _this._editorMenuContainer.add([btnImg, label]);
        _this._makeBouncyButton(btnImg, 0.75, function () {
          data.cb();
        }, function () {
          return true;
        });
      });
    });
    _defineProperty(_this, "_showLoadingBuffer", function (statusText) {
      return new Promise(function (resolve) {
        var overlay = _this.add.graphics().setDepth(2000).setScrollFactor(0);
        overlay.fillStyle(0x000000, 1);
        overlay.fillRect(0, 0, screenWidth, screenHeight);
        var loadingText = _this.add.bitmapText(screenWidth - 40, screenHeight - 20, "bigFont", statusText, 50).setOrigin(1).setDepth(2001).setScrollFactor(0);
        setTimeout(function () {
          resolve();
        }, 2500);
      });
    });
    _defineProperty(_this, "_showEditorPauseMenu", function (show) {
      _this._editorMenuContainer.setVisible(show);
      window.isEditorPaused = show;
    });
    _defineProperty(_this, "_saveEditorLevel", function () {
      var levelData = {
        objects: window.levelObjects,
        settings: window.settingslist
      };
      var newLevelString = _this._serializeLevel(levelData);
      var createdLevels = JSON.parse(localStorage.getItem("created_levels") || "[]");
      var levelIndex = createdLevels.findIndex(function (l) {
        return l.createdId === window.currentlevel[2];
      });
      if (levelIndex !== -1) {
        createdLevels[levelIndex].levelString = newLevelString;
        createdLevels[levelIndex].lastModified = Date.now();
        localStorage.setItem("created_levels", JSON.stringify(createdLevels));
        window._onlineLevelString = createdLevels[levelIndex].levelString;
        window._onlineLevelName = createdLevels[levelIndex].levelName;
        window._onlineLevelId = createdLevels[levelIndex].createdId;
      }
    });
    return _this;
  }
  _inherits(GameScene, _Phaser$Scene);
  return _createClass(GameScene, [{
    key: "create",
    value: function create() {
      var _this2 = this,
        _localStorage$getItem;
      this._bgSpeedX = 0.1;
      this._bgSpeedY = 0.1;
      this._menuCameraX = -centerX;
      this._prevCameraX = -centerX;
      this._bg = this.add.tileSprite(0, 0, screenWidth, screenHeight, "game_bg_01").setOrigin(0, 0).setScrollFactor(0).setDepth(-10);
      var _0x15d27a = this.textures.get("game_bg_01").source[0].height;
      this._bgInitY = _0x15d27a - screenHeight - o;
      this._cameraX = -centerX;
      this._cameraY = 0;
      this._cameraXRef = {
        get value() {
          return this._v;
        },
        _v: -centerX
      };
      this._state = new PlayerState();
      this._level = new window.LevelObject(this, this._cameraXRef);
      this._orbGfx = null;
      this._orbGfxTimer = 0;
      this._player = new PlayerObject(this, this._state, this._level);
      this._state2 = new PlayerState();
      this._player2 = new PlayerObject(this, this._state2, this._level);
      this._isDual = false;
      this._player2.setCubeVisible(false);
      this._player2.setShipVisible(false);
      this._player2.setBallVisible(false);
      this._player2.setWaveVisible(false);
      this._colorManager = new ColorManager();
      this._practicedMode = new PracticeMode();
      if (this._audio == null) {
        this._audio = new AudioManager(this);
      }
      if (window._onlineLevelString && window._onlineLevelId && window.currentlevel[2] === window._onlineLevelId) {
        try {
          this.cache.text.entries.set(window._onlineLevelId, window._onlineLevelString);
        } catch (e) {}
      }
      var _0x591888 = this.cache.text.get(window.currentlevel[2]);
      if (!_0x591888 && window._onlineLevelString && window.currentlevel[2] === window._onlineLevelId) {
        _0x591888 = window._onlineLevelString;
      }
      if (_0x591888) {
        this._level.loadLevel(_0x591888);
      }
      var _bgId = window._backgroundId || "01";
      var _bgKey = "game_bg_" + (parseInt(_bgId, 10) - 1);
      if (this.textures.exists(_bgKey)) {
        this._bg.setTexture(_bgKey);
        var _newBgH = this.textures.get(_bgKey).source[0].height;
        this._bgInitY = _newBgH - screenHeight - o;
      }
      this._level.applyGroundTexture();
      if (this._level._initialColors) {
        for (var chId in this._level._initialColors) {
          var col = this._level._initialColors[chId];
          this._colorManager.setInitialColor(parseInt(chId, 10), col);
        }
      }
      this._level.createEndPortal(this);
      this._glitterCenterX = 0;
      this._glitterCenterY = T;
      this._glitterEmitter = this.add.particles(0, 0, "GJ_WebSheet", {
        frame: "square.png",
        speed: 0,
        scale: {
          start: 0.375,
          end: 0
        },
        alpha: {
          start: 1,
          end: 0
        },
        lifespan: {
          min: 200,
          max: 1800
        },
        frequency: 60,
        blendMode: S,
        tint: window.mainColor,
        emitting: false,
        emitCallback: function emitCallback(_0x3c2a3e) {
          _0x3c2a3e.x = _this2._glitterCenterX + (Math.random() * 2 - 1) * (screenWidth / 1.8);
          _0x3c2a3e.y = _this2._glitterCenterY + (Math.random() * 2 - 1) * 320;
        }
      });
      this._level.additiveContainer.add(this._glitterEmitter);
      this._bg.setTint(this._colorManager.getHex(fs));
      this._level.setGroundColor(this._colorManager.getHex(gs));
      this._level.additiveContainer.setVisible(false);
      this._level.container.setVisible(false);
      this._level.topContainer.setVisible(false);
      this._attempts = parseInt(localStorage.getItem("gd_totalAttempts") || "1", 10);
      this._bestPercent = 0;
      this._lastPercent = 0;
      this._practiceBestPercent = parseFloat(localStorage.getItem("practiceBestPercent_" + (window.currentlevel[2] || "level_1")) || "0");
      this._endPortalGameY = 240;
      this._resetGameplayState();
      this._totalJumps = parseInt(localStorage.getItem("gd_totalJumps") || "0", 10);
      this._totalDeaths = parseInt(localStorage.getItem("gd_totalDeaths") || "0", 10);
      window._completedLevels = parseInt(localStorage.getItem("gd_completedLevels") || "0", 10);
      this._playTime = 0;
      this._menuActive = true;
      this._slideIn = false;
      this._slideGroundX = null;
      this._firstPlay = true;
      this._player.setCubeVisible(false);
      this._player.setShipVisible(false);
      this._player.setBallVisible(false);
      this._logo = this.add.image(0, 100, "GJ_WebSheet", "GJ_logo_001.png").setScrollFactor(0).setDepth(30);
      this._robLogo = this.add.image(160, 555, "GJ_WebSheet", "RobTopLogoBig_001.png").setScrollFactor(0).setDepth(30).setScale(0.9);
      this._copyrightText = this.add.text(0, 625, "© 2026 RobTop Games · geometrydash.com", {
        fontSize: "14px",
        color: "#ffffff",
        fontFamily: "Arial"
      }).setOrigin(1, 1).setScrollFactor(0).setDepth(30).setAlpha(0.3);
      // Web-port maker's GitHub/Discord "download" buttons and the "try me"
      // sticker removed — not relevant to the mod. All downstream references
      // are null/empty guarded.
      this._tryMeImg = null;
      this._downloadBtns = [];
      this._menuFsBtn = null;
      this._menuInfoBtn = this.add.image(screenWidth + 20, 33, "GJ_GameSheet03", "communityCreditsBtn_001.png").setScrollFactor(0).setDepth(30).setScale(0.64).setTint(Phaser.Display.Color.GetColor(255, 255, 255)).setInteractive();
      this._expandHitArea(this._menuInfoBtn, 1.5);
      this._makeBouncyButton(this._menuInfoBtn, 0.64, function () {
        _this2._buildInfoPopup();
      }, function () {
        return _this2._menuActive && !_this2._infoPopup;
      });
      // Update-log button removed (web-port changelog, not relevant to the mod)
      this._menuUpdateLogBtn = null;
      // Dead achievements button removed; settings + stats re-centered
      this._menuSettingsBtn = this.add.image(centerX + 66, screenHeight - 80, "GJ_GameSheet03", "GJ_optionsBtn_001.png").setScrollFactor(0).setDepth(30).setScale(0.8).setInteractive();
      this._expandHitArea(this._menuSettingsBtn, 1.2);
      this._makeBouncyButton(this._menuSettingsBtn, 0.8, function () {
        _this2._showSettingsScreen();
      }, function () {
        return _this2._menuActive && !_this2._settingsPopup;
      });
      this._menuStatsBtn = this.add.image(centerX + 156, screenHeight - 80, "GJ_GameSheet03", "GJ_statsBtn_001.png").setScrollFactor(0).setDepth(30).setScale(0.8).setInteractive();
      this._expandHitArea(this._menuStatsBtn, 1.2);
      this._makeBouncyButton(this._menuStatsBtn, 0.8, function () {
        _this2._showStatsScreen();
      }, function () {
        return _this2._menuActive;
      });
      this._menuAchievementsBtn = null;
      // Newgrounds button removed (external site promo, not relevant to the mod)
      this._menuNewgroundsBtn = null;
      this._menuGlitter = this.add.particles(0, 0, "GJ_WebSheet", {
        frame: "square.png",
        speed: 0,
        scale: {
          start: 0.5,
          end: 0
        },
        alpha: {
          start: 0.6,
          end: 0.2
        },
        lifespan: {
          min: 1000,
          max: 2000
        },
        frequency: 35,
        blendMode: S,
        tint: 20670,
        x: {
          min: -130,
          max: 130
        },
        y: {
          min: -100,
          max: 100
        }
      }).setScrollFactor(0).setDepth(29);
      this._playBtn = this.add.image(0, 0, "GJ_WebSheet", "GJ_playBtn_001.png").setScrollFactor(0).setDepth(30).setInteractive();
      this._playBtnPressed = false;
      this._makeBouncyButton(this._playBtn, 1, function () {
        _this2._openLevelSelect();
      }, function () {
        return _this2._menuActive && !_this2._playBtnPressed && !_this2._levelSelectOverlay;
      });
      // creator stuff
      this._creatorBtn = this.add.image(0, 0, "GJ_GameSheet04", "GJ_creatorBtn_001.png").setScrollFactor(0).setDepth(30).setInteractive().setScale(1);
      this._creatorOverlay = null;
      this._creatorOverlayObjects = null;
      this._openCreatorMenu = function () {
        if (_this2._creatorOverlay) return;
        _this2._creatorMenuOpen = true;
        var sw = screenWidth;
        var sh = screenHeight;
        var fadeIn = _this2.add.graphics().setScrollFactor(0).setDepth(200);
        fadeIn.fillStyle(0x000000, 1);
        fadeIn.fillRect(0, 0, sw, sh);
        _this2.tweens.add({
          targets: fadeIn,
          alpha: 0,
          duration: 300,
          ease: "Linear",
          onComplete: function onComplete() {
            return fadeIn.destroy();
          }
        });
        var overlay = _this2.add.graphics().setScrollFactor(0).setDepth(100);
        var gradientSteps = 80;
        for (var gi = 0; gi < gradientSteps; gi++) {
          var t = gi / (gradientSteps - 1);
          var r1 = Math.round(0x00 + (0x01 - 0x00) * t);
          var g1 = Math.round(0x65 + (0x2c - 0x65) * t);
          var b1 = Math.round(0xff + (0x71 - 0xff) * t);
          var bandColor = r1 << 16 | g1 << 8 | b1;
          var bandY = Math.floor(gi * sh / gradientSteps);
          var bandH = Math.ceil(sh / gradientSteps) + 1;
          overlay.fillStyle(bandColor, 1);
          overlay.fillRect(0, bandY, sw, bandH);
        }
        _this2._creatorOverlay = overlay;
        var blocker = _this2.add.zone(sw / 2, sh / 2, sw, sh).setScrollFactor(0).setDepth(101).setInteractive();
        var cornerTL = _this2.add.image(0, 0, "GJ_GameSheet03", "GJ_sideArt_001.png").setScrollFactor(0).setDepth(100).setOrigin(1, 0).setFlipX(false).setFlipY(true);
        var cornerBL = _this2.add.image(0, sh, "GJ_GameSheet03", "GJ_sideArt_001.png").setScrollFactor(0).setDepth(152).setOrigin(1, 1).setFlipY(true);
        var backBtn = _this2.add.image(50, 48, "GJ_GameSheet03", "GJ_arrow_03_001.png").setScrollFactor(0).setDepth(104).setFlipX(true).setFlipY(true).setRotation(Math.PI).setInteractive();
        _this2._makeBouncyButton(backBtn, 1, function () {
          return _this2._closeCreatorMenu();
        });
        _this2._creatorOverlayObjects = [overlay, blocker, cornerTL, cornerBL, backBtn];
        // Dead grid buttons removed (saved/highscore/challenge/versus/map/daily/
        // weekly/event/gauntlets/featured/lists/paths/mapPacks/search did nothing).
        // Only the working editor button remains, centered.
        var btnScale = 1;
        var editorBtn = _this2.add.image(sw / 2, sh / 2, "GJ_GameSheet04", "GJ_createBtn_001.png").setScrollFactor(0).setDepth(104).setScale(btnScale).setInteractive();
        _this2._makeBouncyButton(editorBtn, btnScale, function () {
          _this2._closeCreatorMenu(true);
          _this2._openEditorMenu();
        }, function () {
          return true;
        });
        _this2._creatorOverlayObjects.push(editorBtn);
      };
      this._searchOverlay = null;
      this._searchOverlayObjects = [];
      this._openEditorMenu = function () {
        if (_this2._editorOverlay) return;
        var sw = screenWidth;
        var sh = screenHeight;
        var centerX = sw / 2;
        var fadeIn = _this2.add.graphics().setScrollFactor(0).setDepth(200);
        fadeIn.fillStyle(0x000000, 1);
        fadeIn.fillRect(0, 0, sw, sh);
        _this2.tweens.add({
          targets: fadeIn,
          alpha: 0,
          duration: 300,
          ease: "Linear",
          onComplete: function onComplete() {
            return fadeIn.destroy();
          }
        });
        var overlay = _this2.add.graphics().setScrollFactor(0).setDepth(100);
        var gradientSteps = 80;
        for (var gi = 0; gi < gradientSteps; gi++) {
          var t = gi / (gradientSteps - 1);
          var r1 = Math.round(0x00 + (0x01 - 0x00) * t);
          var g1 = Math.round(0x65 + (0x2c - 0x65) * t);
          var b1 = Math.round(0xff + (0x71 - 0xff) * t);
          var bandColor = r1 << 16 | g1 << 8 | b1;
          overlay.fillStyle(bandColor, 1);
          overlay.fillRect(0, Math.floor(gi * sh / gradientSteps), sw, Math.ceil(sh / gradientSteps) + 1);
        }
        _this2._editorOverlay = overlay;
        var blocker = _this2.add.zone(centerX, sh / 2, sw, sh).setScrollFactor(0).setDepth(101).setInteractive();
        var container = _this2.add.container(0, 0).setScrollFactor(0).setDepth(102);
        var tableW = 712;
        var tableH = 460;
        var tableX = (sw - tableW) / 2;
        var tableY = 85;
        var rawData = localStorage.getItem("created_levels");
        var createdLevels = rawData ? JSON.parse(rawData) : [];
        createdLevels.sort(function (a, b) {
          var idA = parseInt(a.createdId.replace("local_", "")) || 0;
          var idB = parseInt(b.createdId.replace("local_", "")) || 0;
          return idB - idA;
        });
        var nameCounts = {};
        var levelRevisions = {};
        createdLevels.forEach(function (lvl) {
          var name = lvl.levelName;
          if (!nameCounts[name]) {
            nameCounts[name] = 1;
            levelRevisions[lvl.createdId] = "";
          } else {
            levelRevisions[lvl.createdId] = "Rev. ".concat(nameCounts[name]);
            nameCounts[name]++;
          }
        });
        var lengthValues = ["Tiny", "Short", "Medium", "Long", "XL"];
        var listContainer = _this2.add.container(0, 0);
        var maskShape = _this2.add.graphics().fillStyle(0xffffff).fillRect(tableX, tableY, tableW, tableH).setVisible(false);
        var mask = maskShape.createGeometryMask();
        listContainer.setMask(mask);
        container.add(_this2.add.graphics().setScrollFactor(0).setDepth(90).fillStyle(0xc2723e, 1).fillRect(tableX, tableY, tableW, tableH));
        container.add(listContainer);
        createdLevels.forEach(function (level, index) {
          var spacing = 100;
          var slotY = index * spacing + spacing / 2;
          var isOdd = index % 2 !== 0;
          var stripeColor = isOdd ? 0xc2723e : 0xa1582c;
          var bgStripe = _this2.add.rectangle(centerX, slotY, tableW - 10, spacing, stripeColor, 1);
          var separator = _this2.add.rectangle(centerX, slotY + spacing / 2, tableW - 10, 1, 0x502c16, 1);
          var nameTxt = _this2.add.bitmapText(tableX + 20, slotY - 22, "bigFont", level.levelName, 32).setOrigin(0, 0.5);
          var revLabel = levelRevisions[level.createdId];
          var revText = _this2.add.bitmapText(nameTxt.x + nameTxt.width + 10, nameTxt.y + 5, "goldFont", revLabel, 20).setOrigin(0, 0.5);
          var infoY = slotY + 18;
          var lenIcon = _this2.add.image(tableX + 35, infoY, "GJ_GameSheet03", "GJ_timeIcon_001.png").setScale(0.65);
          var lenTxt = _this2.add.bitmapText(lenIcon.x + 22, infoY, "bigFont", lengthValues[level.levelLength], 18).setOrigin(0, 0.5);
          var songIcon = _this2.add.image(tableX + 150, infoY, "GJ_GameSheet03", "GJ_musicIcon_001.png").setScale(0.65);
          var songTxt = _this2.add.bitmapText(songIcon.x + 22, infoY, "bigFont", level.song, 18).setOrigin(0, 0.5);
          var statusIcon = _this2.add.image(tableX + 380, infoY, "GJ_GameSheet03", "GJ_infoIcon_001.png").setScale(0.65);
          var statusTxt = _this2.add.bitmapText(statusIcon.x + 22, infoY, "bigFont", level.status, 18).setOrigin(0, 0.5);
          var viewBtn = _this2.add.nineslice(tableX + tableW - 80, slotY, "GJ_button01", null, 120, 60, 24, 24, 24, 24).setScale(0.75).setInteractive();
          var viewTxt = _this2.add.bitmapText(viewBtn.x - 2, viewBtn.y - 1, "bigFont", "View", 32).setOrigin(0.5).setScale(0.8);
          _this2._makeBouncyButton(viewBtn, 0.75, function () {
            _this2._closeEditorMenu(false);
            _this2._openLevelView(level);
          });
          listContainer.add([bgStripe, separator, nameTxt, revText, lenIcon, lenTxt, songIcon, songTxt, statusIcon, statusTxt, viewBtn, viewTxt]);
        });
        if (createdLevels.length === 0) {
          container.add(_this2.add.bitmapText(centerX, tableY + tableH / 2, "bigFont", "No Levels", 30).setOrigin(0.5).setAlpha(0.5));
        }
        var sideFrame = _this2.textures.getFrame("GJ_WebSheet", "GJ_table_side_001.png");
        var sideScaleY = tableH / sideFrame.height;
        container.add(_this2.add.image(tableX - 40, tableY, "GJ_WebSheet", "GJ_table_side_001.png").setOrigin(0, 0).setScale(1, sideScaleY));
        container.add(_this2.add.image(tableX + tableW + 40, tableY, "GJ_WebSheet", "GJ_table_side_001.png").setOrigin(1, 0).setFlipX(true).setScale(1, sideScaleY));
        container.add(_this2.add.image(centerX, tableY - 10, "GJ_WebSheet", "GJ_table_top_001.png"));
        container.add(_this2.add.image(centerX, tableY + tableH + 20, "GJ_WebSheet", "GJ_table_bottom_001.png"));
        container.add(_this2.add.bitmapText(centerX, tableY - 15, "bigFont", "My Levels", 42).setOrigin(0.5).setScale(1.1));
        var startY = tableY;
        var listHeight = createdLevels.length * 100;
        var minY = tableY - Math.max(0, listHeight - tableH) - 10;
        var maxY = tableY + 22;
        listContainer.y = maxY;
        _this2._scrollTargetY = maxY;
        _this2.input.on('wheel', function (pointer, gameObjects, deltaX, deltaY, deltaZ) {
          if (!_this2._editorOverlay) return;
          _this2._scrollTargetY -= deltaY;
          _this2._scrollTargetY = Phaser.Math.Clamp(_this2._scrollTargetY, minY, maxY);
          _this2.tweens.add({
            targets: listContainer,
            y: _this2._scrollTargetY,
            duration: 250,
            ease: 'Power2',
            overwrite: true
          });
        });
        blocker.on('pointerdown', function (pointer) {
          startY = pointer.y - listContainer.y;
        });
        blocker.on('pointermove', function (pointer) {
          if (pointer.isDown) {
            listContainer.y = pointer.y - startY;
            listContainer.y = Phaser.Math.Clamp(listContainer.y, minY, maxY);
          }
        });
        var newBtnX = sw - 60;
        var newBtnY = sh - 55;
        var newBtn = _this2.add.image(newBtnX, newBtnY, "GJ_GameSheet03", "GJ_newBtn_001.png").setScale(0.9).setInteractive();
        _this2._makeBouncyButton(newBtn, 0.9, function () {
          var rawData = localStorage.getItem("created_levels");
          var createdLevels = rawData ? JSON.parse(rawData) : [];
          var counter = 0;
          while (createdLevels.some(function (lvl) {
            return lvl.levelName === "Unnamed " + counter;
          })) {
            counter++;
          }
          var newName = "Unnamed " + counter;
          var newLevel = {
            levelName: newName,
            song: "Stereo Madness",
            songId: -1,
            levelId: null,
            levelString: "H4sIAAAAAAAACq1QwRHDMAhbyO0hwIlzfWWGDsAAXaHD10Z-9Ff3Ln4gG4GMeD2tFYRLaEBrWGitARCUwKTHDbEFRCT2wF3yBOrXvYVEC7wRKSi6JoirBY8FwdHB9iVJjZ5ckP1rlf19taIv7pLGh-wP43XROPq9z9mOtX1uS7LldcKKzPx41ZKwEbz0yPueUSfPF9qApx3kMlrGJE7PSBbCIlYpy5QVuheMciE0AgiaoFRUihk5I2ec0Knp1PTK9slxYDM2OIFmjL8bv-1mBmB6YrvO4UErHR4fJXMaP9sDAAA=",
            levelLength: 0,
            normalBest: 0,
            practiceBest: 0,
            description: "",
            version: 1,
            status: "Unverified",
            createdId: _this2._getNextLocalId()
          };
          createdLevels.push(newLevel);
          localStorage.setItem("created_levels", JSON.stringify(createdLevels));
          _this2._closeEditorMenu();
          _this2._openLevelView(newLevel);
          _this2._audio.playEffect("build_01", { volume: _this2._sfxVolume });
        });
        container.add(newBtn);
        var importBtn = _this2.add.image(newBtnX, newBtnY - 90, "import").setScale(0.3).setInteractive();
        _this2._makeBouncyButton(importBtn, 0.3, function () {
          _this2._importGMD();
        });
        container.add(importBtn);
        var backBtn = _this2.add.image(50, 48, "GJ_GameSheet03", "GJ_arrow_03_001.png").setScrollFactor(0).setDepth(104).setFlipX(true).setFlipY(true).setRotation(Math.PI).setInteractive();
        _this2._makeBouncyButton(backBtn, 1, function () {
          _this2._closeEditorMenu();
          _this2._openCreatorMenu();
        });
        _this2._editorObjects = [overlay, blocker, container, backBtn, maskShape];
      };
      this._importGMD = function () {
        var fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = '.gmd';
        fileInput.onchange = function (e) {
          var file = e.target.files[0];
          if (!file) return;
          var reader = new FileReader();
          reader.onload = function (event) {
            var content = event.target.result;
            try {
              var parser = new DOMParser();
              var xmlDoc = parser.parseFromString(content, "text/xml");
              var keys = xmlDoc.querySelectorAll("key, k");
              var extracted = {
                name: "Imported Level",
                data: "",
                version: 1,
                length: 0,
                id: "NA",
                desc: "",
                officialSongId: 0,
                customSongId: 0
              };
              keys.forEach(function (keyNode) {
                var k = keyNode.textContent;
                var v = keyNode.nextElementSibling;
                if (!v) return;
                var val = v.textContent;
                if (k === "k2") extracted.name = val;
                if (k === "k4") extracted.data = val;
                if (k === "k1") extracted.id = val;
                if (k === "k23") extracted.length = parseInt(val) || 0;
                if (k === "k16") extracted.version = parseInt(val) || 1;
                if (k === "k8") extracted.officialSongId = parseInt(val) || 0;
                if (k === "k45") extracted.customSongId = parseInt(val) || 0;
                if (k === "k3") {
                  try {
                    extracted.desc = atob(val);
                  } catch (e) {
                    extracted.desc = val;
                  }
                }
              });
              if (!extracted.data) throw new Error("No level string found.");
              var finalSongName = "Stereo Madness";
              var finalSongId = -1;
              if (extracted.customSongId > 0) {
                finalSongId = extracted.customSongId;
                finalSongName = "NG#".concat(extracted.customSongId);
              } else {
                finalSongId = -extracted.officialSongId - 1;
                try {
                  finalSongName = window.allLevels[extracted.officialSongId][0];
                } catch (e) {
                  finalSongName = "Unknown";
                }
              }
              var rawLevels = localStorage.getItem("created_levels");
              var createdLevels = rawLevels ? JSON.parse(rawLevels) : [];
              var newLevel = {
                levelName: extracted.name,
                song: finalSongName,
                songId: finalSongId,
                levelId: extracted.id === "0" || !extracted.id ? "NA" : extracted.id,
                levelString: extracted.data,
                levelLength: extracted.length,
                normalBest: 0,
                practiceBest: 0,
                description: extracted.desc || "",
                version: extracted.version,
                status: "Unverified",
                createdId: _this2._getNextLocalId()
              };
              createdLevels.push(newLevel);
              localStorage.setItem("created_levels", JSON.stringify(createdLevels));
              _this2._closeEditorMenu(false);
              _this2._openLevelView(newLevel);
            } catch (err) {
              console.error("GMD Import Error:", err);
              alert("Failed to parse .gmd: " + err.message);
            }
          };
          reader.readAsText(file);
        };
        fileInput.click();
      };
      this._exportGMD = function (level) {
        var encodedDesc = btoa(level.description || "");
        var authorName = "Web Dashers";
        var officialSong = level.songId < 0 ? Math.abs(level.songId) : 0;
        var customSong = level.songId > 0 ? level.songId : 0;
        var xml = '<?xml version="1.0"?>';
        xml += '<plist version="1.0" gjver="2.0">';
        xml += '<dict>';
        xml += '<k>kCEK</k><i>4</i>';
        xml += "<k>k1</k><i>".concat(level.levelId && level.levelId !== "NA" ? level.levelId.replace(/\D/g, "") : 0, "</i>");
        xml += "<k>k18</k><i>".concat(level.levelLength || 0, "</i>");
        xml += "<k>k23</k><i>".concat(level.levelLength || 0, "</i>");
        xml += "<k>k2</k><s>".concat(level.levelName, "</s>");
        xml += "<k>k4</k><s>".concat(level.levelString, "</s>");
        xml += "<k>k3</k><s>".concat(encodedDesc, "</s>");
        xml += "<k>k5</k><s>".concat(authorName, "</s>");
        xml += '<k>k101</k><s>0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0</s>';
        xml += "<k>k8</k><i>".concat(officialSong - 1, "</i>");
        xml += "<k>k45</k><i>".concat(customSong, "</i>");
        xml += "<k>k16</k><i>".concat(level.version || 1, "</i>");
        xml += '<k>k13</k><t/><k>k21</k><i>2</i><k>k50</k><i>47</i>';
        xml += '<k>kI1</k><r>0</r><k>kI2</k><r>0</r><k>kI3</k><r>0.1</r>';
        xml += '<k>kI6</k><d><k>0</k><s>0</s><k>1</k><s>0</s><k>2</k><s>0</s><k>3</k><s>0</s><k>4</k><s>0</s><k>5</k><s>0</s><k>6</k><s>0</s><k>7</k><s>0</s><k>8</k><s>0</s><k>9</k><s>0</s><k>10</k><s>0</s><k>11</k><s>0</s><k>12</k><s>0</s><k>13</k><s>0</s></d>';
        xml += '</dict></plist>';
        var blob = new Blob([xml], {
          type: 'text/xml'
        });
        var url = window.URL.createObjectURL(blob);
        var link = document.createElement('a');
        var fileName = "".concat(level.levelName.replace(/[^a-z0-9]/gi, '_'), ".gmd");
        link.href = url;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      };
      this._getNextLocalId = function () {
        var rawData = localStorage.getItem("created_levels");
        var levels = rawData ? JSON.parse(rawData) : [];
        var maxId = 0;
        levels.forEach(function (l) {
          if (l.createdId && typeof l.createdId === "string") {
            var idNum = parseInt(l.createdId.split('_')[1]);
            if (!isNaN(idNum) && idNum > maxId) {
              maxId = idNum;
            }
          }
        });
        return "local_" + (maxId + 1);
      };
      this._openLevelView = function (level) {
        var sw = screenWidth;
        var sh = screenHeight;
        var centerX = sw / 2;
        var saveToLS = function saveToLS(key, val) {
          var rawData = localStorage.getItem("created_levels");
          var levels = rawData ? JSON.parse(rawData) : [];
          var idx = levels.findIndex(function (l) {
            return l.createdId === level.createdId;
          });
          if (idx !== -1) {
            levels[idx][key] = val;
            localStorage.setItem("created_levels", JSON.stringify(levels));
          }
        };
        var deleteLevel = function deleteLevel() {
          if (!confirm("Are you sure you want to delete ".concat(level.levelName, "?"))) return;
          var rawData = localStorage.getItem("created_levels");
          var levels = rawData ? JSON.parse(rawData) : [];
          levels = levels.filter(function (l) {
            return l.createdId !== level.createdId;
          });
          localStorage.setItem("created_levels", JSON.stringify(levels));
          cleanup();
          _this2._openEditorMenu();
        };
        _this2._activeInput = null;
        var cursorVisible = true;
        var blocker = _this2.add.zone(centerX, sh / 2, sw, sh).setOrigin(0.5).setDepth(101).setInteractive();
        blocker.on('pointerdown', function () {
          _this2._activeInput = null;
        });
        var overlay = _this2.add.graphics().setScrollFactor(0).setDepth(102);
        var gradientSteps = 80;
        for (var gi = 0; gi < gradientSteps; gi++) {
          var t = gi / (gradientSteps - 1);
          var r1 = Math.round(0x00 + (0x01 - 0x00) * t);
          var g1 = Math.round(0x65 + (0x2c - 0x65) * t);
          var b1 = Math.round(0xff + (0x71 - 0xff) * t);
          var bandColor = r1 << 16 | g1 << 8 | b1;
          overlay.fillStyle(bandColor, 1);
          overlay.fillRect(0, Math.floor(gi * sh / gradientSteps), sw, Math.ceil(sh / gradientSteps) + 1);
        }
        var container = _this2.add.container(0, 0).setDepth(150);
        var boxWidth = sw * 0.6;
        var cornerRad = 18;
        var nameY = 50;
        var nameBox = _this2.add.graphics().setDepth(151).setInteractive(new Phaser.Geom.Rectangle(centerX - boxWidth / 2, nameY - 28, boxWidth, 70), Phaser.Geom.Rectangle.Contains);
        nameBox.fillStyle(0x000000, 0.3).fillRoundedRect(centerX - boxWidth / 2, nameY - 28, boxWidth, 70, cornerRad);
        var titleText = _this2.add.bitmapText(centerX, nameY + 5, "bigFont", level.levelName, 45).setOrigin(0.5).setDepth(152);
        var titleCursor = _this2.add.bitmapText(0, nameY + 5, "bigFont", "|", 45).setOrigin(0, 0.5).setDepth(153).setVisible(false);
        var descY = 180;
        var descH = 120;
        var descBox = _this2.add.graphics().setDepth(151).setInteractive(new Phaser.Geom.Rectangle(centerX - boxWidth / 2, descY - descH / 2, boxWidth, descH), Phaser.Geom.Rectangle.Contains);
        descBox.fillStyle(0x000000, 0.3).fillRoundedRect(centerX - boxWidth / 2, descY - descH / 2, boxWidth, descH, cornerRad);
        var descText = _this2.add.text(centerX, descY, level.description || "Description [Optional]", {
          fontFamily: "Helvetica, Arial, sans-serif",
          fontSize: "22px",
          color: "#ffffff",
          align: "center",
          lineSpacing: 4,
          wordWrap: {
            width: boxWidth - 40,
            useAdvancedWrap: true
          }
        }).setOrigin(0.5).setDepth(152);
        var descCursor = _this2.add.text(0, 0, "|", {
          fontFamily: "Helvetica",
          fontSize: "18px",
          color: "#ffffff"
        }).setOrigin(0.5).setDepth(153).setVisible(false);
        var updateDisplay = function updateDisplay() {
          titleText.setText(level.levelName);
          if (_this2._activeInput === 'title') {
            titleCursor.setPosition(titleText.x + titleText.width / 2 + 2, nameY + 5).setVisible(cursorVisible);
            descCursor.setVisible(false);
          } else if (_this2._activeInput === 'desc') {
            descText.setText(level.description || "");
            titleCursor.setVisible(false);
            var lines = descText.getWrappedText(level.description || "");
            var lineCount = lines.length;
            var lastLine = lines[lineCount - 1] || "";
            var metrics = descText.canvas.getContext('2d').measureText(lastLine);
            var lastLineWidth = metrics.width;
            var size = 22;
            var spacing = 4;
            var fullLineHeight = size + spacing;
            var totalHeight = lineCount * fullLineHeight - spacing;
            var topOfText = descY - totalHeight / 2;
            var cursorY = topOfText + (lineCount - 1) * fullLineHeight + size / 2;
            descCursor.setPosition(centerX + lastLineWidth / 2 + 2, cursorY).setVisible(cursorVisible);
          } else {
            descText.setText(level.description || "Description [Optional]");
            titleCursor.setVisible(false);
            descCursor.setVisible(false);
          }
        };
        var cursorInterval = setInterval(function () {
          cursorVisible = !cursorVisible;
          updateDisplay();
        }, 500);
        var keyHandler = function keyHandler(event) {
          if (!_this2._activeInput) return;
          if (event.key === "Backspace") {
            if (_this2._activeInput === 'title') level.levelName = level.levelName.slice(0, -1);else level.description = (level.description || "").slice(0, -1);
          } else if (event.key === "Enter") {
            _this2._activeInput = null;
          } else if (event.key.length === 1) {
            if (_this2._activeInput === 'title' && level.levelName.length < 20) {
              level.levelName += event.key;
            } else if (_this2._activeInput === 'desc' && (level.description || "").length < 150) {
              level.description = (level.description || "") + event.key;
            }
          }
          saveToLS(_this2._activeInput === 'title' ? "levelName" : "description", _this2._activeInput === 'title' ? level.levelName : level.description);
          cursorVisible = true;
          updateDisplay();
        };
        window.addEventListener('keydown', keyHandler);
        nameBox.on('pointerdown', function () {
          _this2._activeInput = 'title';
          updateDisplay();
        });
        descBox.on('pointerdown', function () {
          _this2._activeInput = 'desc';
          updateDisplay();
        });
        var cleanup = function cleanup() {
          clearInterval(cursorInterval);
          window.removeEventListener('keydown', keyHandler);
          container.destroy();
          overlay.destroy();
          blocker.destroy();
        };
        var btnY = sh * 0.58;
        var editBtn = _this2.add.image(centerX - 220, btnY, "GJ_GameSheet03", "GJ_editBtn_001.png").setInteractive().setScale(1.1);
        _this2._makeBouncyButton(editBtn, 1.1, function () {
          cleanup();
          _this2._startCreatedLevel(level, true);
        });
        var playBtn = _this2.add.image(centerX, btnY, "GJ_GameSheet03", "GJ_playBtn2_001.png").setInteractive().setScale(1.1);
        _this2._makeBouncyButton(playBtn, 1.1, function () {
          cleanup();
          _this2._startCreatedLevel(level, false);
        });
        var shareBtn = _this2.add.image(centerX + 220, btnY, "GJ_GameSheet03", "GJ_shareBtn_001.png").setInteractive().setScale(1.1);
        _this2._makeBouncyButton(shareBtn, 1.1, function () {
          _this2._exportGMD(level);
        });
        var backBtn = _this2.add.image(50, 48, "GJ_GameSheet03", "GJ_arrow_03_001.png").setFlipX(true).setFlipY(true).setRotation(Math.PI).setInteractive();
        _this2._makeBouncyButton(backBtn, 1, function () {
          cleanup();
          _this2._openEditorMenu();
        });
        var deleteBtn = _this2.add.image(sw - 50, 48, "GJ_GameSheet03", "GJ_deleteBtn_001.png").setInteractive().setScale(0.8);
        _this2._makeBouncyButton(deleteBtn, 0.8, function () {
          deleteLevel();
        });
        var footerY = sh - 100;
        var subFooterY = sh - 30;
        var lengthValues = ["Tiny", "Short", "Medium", "Long", "XL"];
        var lengthIcon = _this2.add.image(centerX - 350, footerY, "GJ_GameSheet03", "GJ_timeIcon_001.png").setScale(1).setDepth(152);
        var lengthLabel = _this2.add.bitmapText(centerX - 310, footerY, "bigFont", lengthValues[level.levelLength], 33).setOrigin(0, 0.5).setDepth(152);
        var songIcon = _this2.add.image(centerX - 160, footerY, "GJ_GameSheet03", "GJ_musicIcon_001.png").setScale(1).setDepth(152);
        var songLabel = _this2.add.bitmapText(centerX - 115, footerY, "bigFont", level.song, 29).setOrigin(0, 0.5).setDepth(152);
        var statusIcon = _this2.add.image(centerX + 200, footerY, "GJ_GameSheet03", "GJ_infoIcon_001.png").setScale(1).setDepth(152);
        var statusLabel = _this2.add.bitmapText(centerX + 245, footerY, "bigFont", level.status, 33).setOrigin(0, 0.5).setDepth(152);
        var versionText = _this2.add.bitmapText(centerX - 180, subFooterY, "goldFont", "Version: ".concat(level.version || 1), 30).setOrigin(0.5).setDepth(152);
        var idText = _this2.add.bitmapText(centerX + 180, subFooterY, "goldFont", "ID: ".concat(level.levelId || "na"), 30).setOrigin(0.5).setDepth(152);
        container.add([nameBox, titleText, titleCursor, descBox, descText, descCursor, playBtn, editBtn, shareBtn, backBtn, deleteBtn, lengthIcon, lengthLabel, songIcon, songLabel, statusIcon, statusLabel, versionText, idText]);
      };
      this._startCreatedLevel = /*#__PURE__*/function () {
        var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(level, isEditor) {
          var PROXY_BASE, songId, songKey, ngRes, ngText, ngParts, ngMap, i, songUrl, songArtist, songTitle, audioCtx, proxiedUrl, audioRes, arrayBuf, decoded, _t, _t2;
          return _regenerator().w(function (_context3) {
            while (1) switch (_context3.p = _context3.n) {
              case 0:
                PROXY_BASE = (window._gdProxyUrl || "").replace(/\/$/, "");
                window._onlineLevelString = level.levelString;
                window._onlineLevelName = level.levelName;
                window._onlineLevelId = level.createdId;
                window._onlineSongBuffer = null;
                window._onlineSongKey = null;
                window._onlineSongOffset = 0;
                if (isEditor) {
                  window.isEditor = true;
                }
                _this2.game.registry.set("autoStartGame", true);
                window.currentlevel = ["Placeholder", level.levelName, level.createdId, ["Local", "SongAuthor"]];
                if (!(level.songId < 0)) {
                  _context3.n = 1;
                  break;
                }
                window.currentlevel[0] = window.allLevels[Math.abs(level.songId) - 1][0];
                window.currentlevel[3] = ["Local", window.allLevels[Math.abs(level.songId) - 1][3]];
                _context3.n = 13;
                break;
              case 1:
                songId = level.songId;
                songKey = "ng_song_".concat(songId);
                window.currentlevel[0] = songKey;
                if (!(PROXY_BASE && songId > 0)) {
                  _context3.n = 13;
                  break;
                }
                _context3.p = 2;
                _context3.n = 3;
                return fetch("".concat(PROXY_BASE, "/getGJSongInfo.php"), {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                  },
                  body: "songID=".concat(songId, "&secret=Wmfd2893gb7")
                });
              case 3:
                ngRes = _context3.v;
                if (!ngRes.ok) {
                  _context3.n = 5;
                  break;
                }
                _context3.n = 4;
                return ngRes.text();
              case 4:
                _t = _context3.v;
                _context3.n = 6;
                break;
              case 5:
                _t = "-1";
              case 6:
                ngText = _t;
                if (!(ngText && ngText !== "-1")) {
                  _context3.n = 11;
                  break;
                }
                ngParts = ngText.split("~|~");
                ngMap = {};
                for (i = 0; i + 1 < ngParts.length; i += 2) ngMap[ngParts[i]] = ngParts[i + 1];
                songUrl = decodeURIComponent((ngMap["10"] || "").trim());
                songArtist = (ngMap["4"] || "Unknown").replace(/:$/, "").trim();
                songTitle = (ngMap["2"] || "Song #".concat(songId)).replace(/:$/, "").trim();
                if (!songUrl) {
                  _context3.n = 11;
                  break;
                }
                audioCtx = _this2.game.sound.context;
                if (!(audioCtx.state === "suspended")) {
                  _context3.n = 7;
                  break;
                }
                _context3.n = 7;
                return audioCtx.resume();
              case 7:
                proxiedUrl = "".concat(PROXY_BASE, "/audio-proxy?url=").concat(encodeURIComponent(songUrl));
                _context3.n = 8;
                return fetch(proxiedUrl);
              case 8:
                audioRes = _context3.v;
                _context3.n = 9;
                return audioRes.arrayBuffer();
              case 9:
                arrayBuf = _context3.v;
                _context3.n = 10;
                return audioCtx.decodeAudioData(arrayBuf);
              case 10:
                decoded = _context3.v;
                window._onlineSongBuffer = decoded;
                window._onlineSongKey = songKey;
                window._onlineSongTitle = songTitle;
                window._onlineSongArtist = songArtist;
                window.currentlevel[3] = ["Local", window._onlineSongArtist];
              case 11:
                _context3.n = 13;
                break;
              case 12:
                _context3.p = 12;
                _t2 = _context3.v;
                console.warn("Failed to load custom song", _t2);
              case 13:
                _this2.scene.restart();
              case 14:
                return _context3.a(2);
            }
          }, _callee3, null, [[2, 12]]);
        }));
        return function (_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }();
      this._closeEditorMenu = function () {
        if (_this2._editorObjects) {
          _this2._editorObjects.forEach(function (obj) {
            return obj.destroy();
          });
        }
        _this2._editorOverlay = null;
        _this2._editorObjects = null;
      };
      this._openSearchMenu = function () {
        if (_this2._searchOverlay) return;
        var sw = screenWidth;
        var sh = screenHeight;
        var fadeIn = _this2.add.graphics().setScrollFactor(0).setDepth(200);
        fadeIn.fillStyle(0x000000, 1);
        fadeIn.fillRect(0, 0, sw, sh);
        _this2.tweens.add({
          targets: fadeIn,
          alpha: 0,
          duration: 300,
          ease: "Linear",
          onComplete: function onComplete() {
            return fadeIn.destroy();
          }
        });
        var overlay = _this2.add.graphics().setScrollFactor(0).setDepth(100);
        var gradientSteps = 80;
        for (var gi = 0; gi < gradientSteps; gi++) {
          var t = gi / (gradientSteps - 1);
          var r1 = Math.round(0x00 + (0x01 - 0x00) * t);
          var g1 = Math.round(0x65 + (0x2c - 0x65) * t);
          var b1 = Math.round(0xff + (0x71 - 0xff) * t);
          var bandColor = r1 << 16 | g1 << 8 | b1;
          var bandY = Math.floor(gi * sh / gradientSteps);
          var bandH = Math.ceil(sh / gradientSteps) + 1;
          overlay.fillStyle(bandColor, 1);
          overlay.fillRect(0, bandY, sw, bandH);
        }
        _this2._searchOverlay = overlay;
        var blocker = _this2.add.zone(sw / 2, sh / 2, sw, sh).setScrollFactor(0).setDepth(101).setInteractive();
        var backBtn = _this2.add.image(50, 48, "GJ_GameSheet03", "GJ_arrow_03_001.png").setScrollFactor(0).setDepth(104).setFlipX(true).setFlipY(true).setRotation(Math.PI).setInteractive();
        _this2._makeBouncyButton(backBtn, 1, function () {
          _this2._closeSearchMenu(false, function () {
            return _this2._openCreatorMenu();
          });
        });
        var inputW = 320;
        var inputH = 44;
        var inputX = sw / 2 - inputW / 2;
        var inputY = sh / 2 - inputH / 2;
        var inputBg = _this2.add.graphics().setScrollFactor(0).setDepth(104);
        inputBg.fillStyle(0x000000, 0.5);
        inputBg.fillRoundedRect(inputX, inputY, inputW, inputH, 8);
        inputBg.lineStyle(2, 0xffffff, 0.4);
        var canvas = _this2.sys.game.canvas;
        var canvasRect = canvas.getBoundingClientRect();
        var scaleX = canvasRect.width / sw;
        var scaleY = canvasRect.height / sh;
        var htmlInput = document.createElement("input");
        htmlInput.type = "text";
        htmlInput.placeholder = "";
        htmlInput.maxLength = 20;
        htmlInput.style.cssText = "\n        position: fixed;\n        left: ".concat(canvasRect.left + inputX * scaleX, "px;\n        top: ").concat(canvasRect.top + inputY * scaleY, "px;\n        width: ").concat(inputW * scaleX, "px;\n        height: ").concat(inputH * scaleY, "px;\n        background: transparent;\n        border: none;\n        outline: none;\n        color: #ffffff;\n        font-size: ").concat(Math.round(20 * scaleY), "px;\n        font-family: Arial, sans-serif;\n        text-align: center;\n        z-index: 9999;\n        caret-color: #ffffff;\n      ");
        document.body.appendChild(htmlInput);
        setTimeout(function () {
          return htmlInput.focus();
        }, 50);
        var placeholderLabel = _this2.add.bitmapText(sw / 2, inputY + inputH / 2, "bigFont", "Enter a level, user or ID", 18).setScrollFactor(0).setDepth(105).setOrigin(0.5, 0.5).setTint(0xaaddff);
        var typedLabel = _this2.add.bitmapText(sw / 2, inputY + inputH / 2, "bigFont", "", 18).setScrollFactor(0).setDepth(105).setOrigin(0.5, 0.5).setTint(0xffffff);
        htmlInput.style.color = "transparent";
        htmlInput.style.caretColor = "#ffffff";
        htmlInput.addEventListener("input", function () {
          var val = htmlInput.value;
          placeholderLabel.setVisible(val.length === 0);
          typedLabel.setText(val);
        });
        var _repositionInput = function _repositionInput() {
          var r = canvas.getBoundingClientRect();
          var sx = r.width / sw;
          var sy = r.height / sh;
          htmlInput.style.left = "".concat(r.left + inputX * sx, "px");
          htmlInput.style.top = "".concat(r.top + inputY * sy, "px");
          htmlInput.style.width = "".concat(inputW * sx, "px");
          htmlInput.style.height = "".concat(inputH * sy, "px");
          htmlInput.style.fontSize = "".concat(Math.round(20 * sy), "px");
        };
        window.addEventListener("resize", _repositionInput);
        var statusText = _this2.add.text(sw / 2, inputY + inputH + 22, "", {
          fontSize: "16px",
          fontFamily: "Arial, sans-serif",
          color: "#ffffff",
          align: "center",
          wordWrap: {
            width: 420
          }
        }).setScrollFactor(0).setDepth(106).setOrigin(0.5, 0).setAlpha(0);
        _this2._searchOverlayObjects.push(statusText);
        var _showStatus = function _showStatus(msg) {
          var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "#ffffff";
          var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
          statusText.setText(msg);
          statusText.setColor(color);
          _this2.tweens.killTweensOf(statusText);
          statusText.setAlpha(1);
        };
        var _loading = false;
        var _doSearch = /*#__PURE__*/function () {
          var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
            var levelId, _t3;
            return _regenerator().w(function (_context4) {
              while (1) switch (_context4.p = _context4.n) {
                case 0:
                  if (!_loading) {
                    _context4.n = 1;
                    break;
                  }
                  return _context4.a(2);
                case 1:
                  levelId = htmlInput.value.trim().replace(/\D/g, "");
                  if (levelId) {
                    _context4.n = 2;
                    break;
                  }
                  _showStatus("enter a level id", "#ff6666", 3000);
                  return _context4.a(2);
                case 2:
                  _loading = true;
                  _context4.p = 3;
                  _context4.n = 4;
                  return _doSearchInner(levelId);
                case 4:
                  _context4.n = 6;
                  break;
                case 5:
                  _context4.p = 5;
                  _t3 = _context4.v;
                  _showStatus("error: " + _t3.message, "#ff5555");
                case 6:
                  _context4.p = 6;
                  _loading = false;
                  return _context4.f(6);
                case 7:
                  return _context4.a(2);
              }
            }, _callee4, null, [[3, 5, 6, 7]]);
          }));
          return function _doSearch() {
            return _ref2.apply(this, arguments);
          };
        }();
        var _doSearchInner = /*#__PURE__*/function () {
          var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(levelId) {
            var PROXY_BASE, formBody, res, rawResponse, gdMap, _gdMatches, i, valueStart, valueEnd, levelString, levelName, levelIdParsed, songIdRaw, isCustomSong, officialSongId, songKey, ngRes, ngText, ngParts, ngMap, _i4, rawUrl, songUrl, songArtist, songTitle, audioCtx, proxiedUrl, audioRes, arrayBuf, decoded, _t4, _t5;
            return _regenerator().w(function (_context5) {
              while (1) switch (_context5.p = _context5.n) {
                case 0:
                  _showStatus("fetching level", "#ffb700");
                  PROXY_BASE = (window._gdProxyUrl || "").replace(/\/$/, "");
                  if (PROXY_BASE) {
                    _context5.n = 1;
                    break;
                  }
                  _showStatus("no proxy configured. set window._gdProxyUrl first.", "#ff0000");
                  return _context5.a(2);
                case 1:
                  formBody = "levelID=".concat(levelId, "&secret=Wmfd2893gb7");
                  _context5.n = 2;
                  return fetch("".concat(PROXY_BASE, "/downloadGJLevel22.php"), {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/x-www-form-urlencoded"
                    },
                    body: formBody
                  });
                case 2:
                  res = _context5.v;
                  if (res.ok) {
                    _context5.n = 3;
                    break;
                  }
                  throw new Error("Proxy returned ".concat(res.status));
                case 3:
                  _context5.n = 4;
                  return res.text();
                case 4:
                  rawResponse = _context5.v;
                  if (!(!rawResponse || rawResponse === "-1" || !rawResponse.includes(":"))) {
                    _context5.n = 5;
                    break;
                  }
                  _showStatus("level not found from servers. check the id and try again.", "#ff0000");
                  return _context5.a(2);
                case 5:
                  gdMap = {};
                  _gdMatches = _toConsumableArray(rawResponse.matchAll(/(?:^|:)(\d+):/g));
                  for (i = 0; i < _gdMatches.length; i++) {
                    valueStart = _gdMatches[i].index + _gdMatches[i][0].length;
                    valueEnd = i + 1 < _gdMatches.length ? _gdMatches[i + 1].index : rawResponse.length;
                    gdMap[_gdMatches[i][1]] = rawResponse.slice(valueStart, valueEnd);
                  }
                  levelString = gdMap["4"] || null;
                  levelName = gdMap["2"] || "Online Level";
                  levelIdParsed = gdMap["1"] || levelId;
                  songIdRaw = (gdMap["35"] || "").trim();
                  isCustomSong = !!songIdRaw && songIdRaw !== "0";
                  officialSongId = gdMap["12"] || "0";
                  songKey = isCustomSong ? "ng_song_".concat(songIdRaw) : window.allLevels[officialSongId][0];
                  window.currentlevel[0] = songKey;
                  window._onlineSongOffset = parseFloat(gdMap["45"] || "0") || 0;
                  _showStatus("found \"".concat(levelName, "\"").concat(isCustomSong ? " \u2014 loading song #".concat(songIdRaw, "...") : ""), "#00ff00");
                  if (!isCustomSong) {
                    _context5.n = 19;
                    break;
                  }
                  window._onlineSongBuffer = null;
                  window._onlineSongKey = null;
                  _context5.p = 6;
                  _context5.n = 7;
                  return fetch("".concat(PROXY_BASE, "/getGJSongInfo.php"), {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/x-www-form-urlencoded"
                    },
                    body: "songID=".concat(songIdRaw, "&secret=Wmfd2893gb7")
                  });
                case 7:
                  ngRes = _context5.v;
                  if (!ngRes.ok) {
                    _context5.n = 9;
                    break;
                  }
                  _context5.n = 8;
                  return ngRes.text();
                case 8:
                  _t4 = _context5.v;
                  _context5.n = 10;
                  break;
                case 9:
                  _t4 = "-1";
                case 10:
                  ngText = _t4;
                  if (!(ngText && ngText !== "-1")) {
                    _context5.n = 16;
                    break;
                  }
                  ngParts = ngText.split("~|~");
                  ngMap = {};
                  for (_i4 = 0; _i4 + 1 < ngParts.length; _i4 += 2) ngMap[ngParts[_i4]] = ngParts[_i4 + 1];
                  rawUrl = (ngMap["10"] || "").trim();
                  songUrl = decodeURIComponent(rawUrl);
                  songArtist = (ngMap["4"] || "Unknown").replace(/:$/, "").trim();
                  songTitle = (ngMap["2"] || "Song #".concat(songIdRaw)).replace(/:$/, "").trim();
                  if (!songUrl) {
                    _context5.n = 16;
                    break;
                  }
                  _showStatus("loading \"".concat(songTitle, "\" by ").concat(songArtist, "..."), "#00ff00");
                  audioCtx = _this2.game.sound.context;
                  if (!(audioCtx.state === "suspended")) {
                    _context5.n = 11;
                    break;
                  }
                  _context5.n = 11;
                  return audioCtx.resume();
                case 11:
                  proxiedUrl = "".concat(PROXY_BASE, "/audio-proxy?url=").concat(encodeURIComponent(songUrl));
                  _context5.n = 12;
                  return fetch(proxiedUrl);
                case 12:
                  audioRes = _context5.v;
                  if (audioRes.ok) {
                    _context5.n = 13;
                    break;
                  }
                  throw new Error("audio proxy returned ".concat(audioRes.status));
                case 13:
                  _context5.n = 14;
                  return audioRes.arrayBuffer();
                case 14:
                  arrayBuf = _context5.v;
                  _context5.n = 15;
                  return audioCtx.decodeAudioData(arrayBuf);
                case 15:
                  decoded = _context5.v;
                  window._onlineSongBuffer = decoded;
                  window._onlineSongKey = songKey;
                  window._onlineSongTitle = songTitle;
                  window._onlineSongArtist = songArtist;
                case 16:
                  _context5.n = 18;
                  break;
                case 17:
                  _context5.p = 17;
                  _t5 = _context5.v;
                case 18:
                  _context5.n = 20;
                  break;
                case 19:
                  window._onlineSongBuffer = null;
                  window._onlineSongKey = null;
                  window._onlineSongArtist = null;
                case 20:
                  window._onlineLevelString = levelString;
                  window._onlineLevelName = levelName;
                  window._onlineLevelId = "online_" + levelIdParsed;
                  _this2.game.registry.set("autoStartGame", true);
                  window.currentlevel = [songKey, levelName, window._onlineLevelId, [window._onlineSongArtist || "Unknown"]];
                  _showStatus("loading string for \"".concat(levelName, "\""), "#00ff00");
                  _this2.time.delayedCall(600, function () {
                    htmlInput.remove();
                    window.removeEventListener("resize", _repositionInput);
                    _this2._closeSearchMenu(true);
                    _this2._closeLevelSelect && _this2._closeLevelSelect(true);
                    var flash = _this2.add.graphics().setScrollFactor(0).setDepth(300).setAlpha(0);
                    flash.fillStyle(0x000000, 1);
                    flash.fillRect(0, 0, sw, sh);
                    _this2.tweens.add({
                      targets: flash,
                      alpha: 1,
                      duration: 250,
                      ease: "Linear",
                      onComplete: function onComplete() {
                        return _this2.scene.restart();
                      }
                    });
                  });
                case 21:
                  return _context5.a(2);
              }
            }, _callee5, null, [[6, 17]]);
          }));
          return function _doSearchInner(_x3) {
            return _ref3.apply(this, arguments);
          };
        }();
        _this2._searchOverlayObjects = [overlay, blocker, backBtn, inputBg, statusText, placeholderLabel, typedLabel];
        if (window.levelID) {
          // if there's an ID parameter, load it directly
          htmlInput.remove();
          var loadingBg = _this2.add.graphics().setScrollFactor(0).setDepth(1000);
          loadingBg.fillStyle(0x000000, 1);
          loadingBg.fillRect(0, 0, sw, sh);
          var loadingText = _this2.add.bitmapText(sw / 2, sh / 2, "bigFont", "Loading level...", 30).setScrollFactor(0).setDepth(1001).setOrigin(0.5);
          _this2._searchOverlayObjects.push(loadingBg, loadingText);
          statusText.setDepth(1002).setY(sh / 2 + 50).setAlpha(1);
          _doSearchInner(window.levelID);
        }
        htmlInput.addEventListener("keydown", function (e) {
          if (e.key === "Enter") _doSearch();
          e.stopPropagation();
        });
        htmlInput.addEventListener("keyup", function (e) {
          return e.stopPropagation();
        });
        htmlInput.addEventListener("keypress", function (e) {
          return e.stopPropagation();
        });
        _this2._searchHtmlInput = htmlInput;
        _this2._searchInputResizeFn = _repositionInput;
      };
      this._closeSearchMenu = function () {
        var silent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var _onComplete = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        if (!_this2._searchOverlay) return;
        if (_this2._searchHtmlInput) {
          _this2._searchHtmlInput.remove();
          _this2._searchHtmlInput = null;
        }
        if (_this2._searchInputResizeFn) {
          window.removeEventListener("resize", _this2._searchInputResizeFn);
          _this2._searchInputResizeFn = null;
        }
        var destroy = function destroy() {
          var _iterator16 = _createForOfIteratorHelper(_this2._searchOverlayObjects),
            _step16;
          try {
            for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
              var obj = _step16.value;
              if (obj && obj.destroy) obj.destroy();
            }
          } catch (err) {
            _iterator16.e(err);
          } finally {
            _iterator16.f();
          }
          _this2._searchOverlayObjects = [];
          _this2._searchOverlay = null;
        };
        if (silent) {
          destroy();
          if (_onComplete) _onComplete();
          return;
        }
        var sw = screenWidth,
          sh = screenHeight;
        var fadeOut = _this2.add.graphics().setScrollFactor(0).setDepth(200).setAlpha(0);
        fadeOut.fillStyle(0x000000, 1);
        fadeOut.fillRect(0, 0, sw, sh);
        _this2.tweens.add({
          targets: fadeOut,
          alpha: 1,
          duration: 150,
          ease: "Linear",
          onComplete: function onComplete() {
            destroy();
            if (_onComplete) _onComplete();
            _this2.tweens.add({
              targets: fadeOut,
              alpha: 0,
              duration: 150,
              ease: "Linear",
              onComplete: function onComplete() {
                return fadeOut.destroy();
              }
            });
          }
        });
      };
      this._makeBouncyButton(this._creatorBtn, 1, function () {
        _this2._openCreatorMenu();
        if (_this2._creatorBtn) {
          _this2.tweens.killTweensOf(_this2._creatorBtn);
          _this2._creatorBtn.y = 320;
          _this2._creatorBtn.setScale(1);
          _this2.tweens.add({
            targets: _this2._creatorBtn,
            y: 324,
            duration: 750,
            ease: "Quad.InOut",
            yoyo: true,
            repeat: -1
          });
        }
      }, function () {
        return _this2._menuActive && !_this2._levelSelectOverlay;
      });
      //icon stufff
      this._iconBtn = this.add.image(0, 0, "GJ_GameSheet03", "GJ_garageBtn_001.png").setScrollFactor(0).setDepth(30).setInteractive().setScale(1);
      this._iconBtnSelected = false;
      this._makeBouncyButton(this._iconBtn, 1, function () {
        _this2._openIconSelector();
        if (_this2._iconBtn) {
          _this2.tweens.killTweensOf(_this2._iconBtn);
          _this2._iconBtn.y = 320;
          _this2._iconBtn.setScale(1);
          _this2.tweens.add({
            targets: _this2._iconBtn,
            y: 324,
            duration: 750,
            ease: "Quad.InOut",
            yoyo: true,
            repeat: -1
          });
        }
      }, function () {
        return _this2._menuActive && !_this2._levelSelectOverlay;
      });
      this._iconOverlay = null;
      var _iconFrameSets = {
        icon: ["player_01_001.png", "player_02_001.png", "player_03_001.png", "player_04_001.png", "player_05_001.png", "player_06_001.png", "player_07_001.png", "player_08_001.png", "player_09_001.png", "player_10_001.png", "player_11_001.png", "player_12_001.png", "player_13_001.png", "player_14_001.png", "player_15_001.png", "player_16_001.png", "player_17_001.png", "player_18_001.png", "player_19_001.png", "player_20_001.png", "player_21_001.png", "player_22_001.png", "player_23_001.png", "player_24_001.png", "player_25_001.png", "player_26_001.png", "player_27_001.png", "player_28_001.png", "player_29_001.png", "player_30_001.png", "player_31_001.png", "player_32_001.png", "player_33_001.png", "player_34_001.png", "player_35_001.png", "player_36_001.png", "player_37_001.png", "player_38_001.png", "player_39_001.png", "player_40_001.png", "player_41_001.png", "player_42_001.png", "player_43_001.png", "player_44_001.png", "player_45_001.png", "player_46_001.png", "player_47_001.png", "player_48_001.png", "player_49_001.png", "player_50_001.png", "player_51_001.png", "player_52_001.png", "player_53_001.png", "player_54_001.png", "player_55_001.png", "player_56_001.png", "player_57_001.png", "player_58_001.png", "player_59_001.png", "player_60_001.png", "player_61_001.png", "player_62_001.png", "player_63_001.png", "player_64_001.png", "player_65_001.png", "player_66_001.png", "player_67_001.png", "player_68_001.png", "player_69_001.png", "player_70_001.png", "player_71_001.png", "player_72_001.png", "player_73_001.png", "player_74_001.png", "player_75_001.png", "player_76_001.png", "player_77_001.png", "player_78_001.png", "player_79_001.png", "player_80_001.png", "player_81_001.png", "player_82_001.png", "player_83_001.png", "player_84_001.png", "player_85_001.png", "player_86_001.png", "player_87_001.png", "player_88_001.png", "player_89_001.png", "player_90_001.png", "player_91_001.png", "player_92_001.png", "player_93_001.png", "player_94_001.png", "player_95_001.png", "player_96_001.png", "player_97_001.png", "player_98_001.png", "player_99_001.png", "player_100_001.png", "player_101_001.png", "player_102_001.png", "player_103_001.png", "player_104_001.png", "player_105_001.png", "player_106_001.png", "player_107_001.png", "player_108_001.png", "player_109_001.png", "player_110_001.png", "player_111_001.png", "player_112_001.png", "player_113_001.png", "player_114_001.png", "player_115_001.png", "player_116_001.png", "player_117_001.png", "player_118_001.png", "player_119_001.png", "player_120_001.png", "player_121_001.png", "player_122_001.png", "player_123_001.png", "player_124_001.png", "player_125_001.png", "player_126_001.png", "player_127_001.png", "player_128_001.png", "player_129_001.png", "player_130_001.png", "player_131_001.png", "player_132_001.png", "player_133_001.png", "player_134_001.png", "player_135_001.png", "player_136_001.png", "player_137_001.png", "player_138_001.png", "player_139_001.png", "player_140_001.png", "player_141_001.png", "player_142_001.png", "player_143_001.png", "player_144_001.png", "player_145_001.png", "player_146_001.png", "player_147_001.png", "player_148_001.png", "player_149_001.png", "player_150_001.png", "player_151_001.png", "player_152_001.png", "player_153_001.png", "player_154_001.png", "player_155_001.png", "player_156_001.png", "player_157_001.png", "player_158_001.png", "player_159_001.png", "player_160_001.png", "player_161_001.png", "player_162_001.png", "player_163_001.png", "player_164_001.png", "player_165_001.png", "player_166_001.png", "player_167_001.png", "player_168_001.png", "player_169_001.png", "player_170_001.png", "player_171_001.png", "player_172_001.png", "player_173_001.png", "player_174_001.png", "player_175_001.png", "player_176_001.png", "player_177_001.png", "player_178_001.png", "player_179_001.png", "player_180_001.png", "player_181_001.png", "player_182_001.png", "player_183_001.png", "player_184_001.png", "player_185_001.png", "player_186_001.png", "player_187_001.png", "player_188_001.png", "player_189_001.png", "player_190_001.png", "player_191_001.png", "player_192_001.png", "player_193_001.png", "player_194_001.png", "player_195_001.png", "player_196_001.png", "player_197_001.png", "player_198_001.png", "player_199_001.png", "player_200_001.png", "player_201_001.png", "player_202_001.png", "player_203_001.png", "player_204_001.png", "player_205_001.png", "player_206_001.png", "player_207_001.png", "player_208_001.png", "player_209_001.png", "player_210_001.png", "player_211_001.png", "player_212_001.png", "player_213_001.png", "player_214_001.png", "player_215_001.png", "player_216_001.png", "player_217_001.png", "player_218_001.png", "player_219_001.png", "player_220_001.png", "player_221_001.png", "player_222_001.png", "player_223_001.png", "player_224_001.png", "player_225_001.png", "player_226_001.png", "player_227_001.png", "player_228_001.png", "player_229_001.png", "player_230_001.png", "player_231_001.png", "player_232_001.png", "player_233_001.png", "player_234_001.png", "player_235_001.png", "player_236_001.png", "player_237_001.png", "player_238_001.png", "player_239_001.png", "player_240_001.png", "player_241_001.png", "player_242_001.png", "player_243_001.png", "player_244_001.png", "player_245_001.png", "player_246_001.png", "player_247_001.png", "player_248_001.png"],
        ship: ["ship_01_001.png", "ship_02_001.png", "ship_03_001.png", "ship_04_001.png", "ship_05_001.png", "ship_06_001.png", "ship_07_001.png", "ship_08_001.png", "ship_09_001.png", "ship_10_001.png", "ship_11_001.png", "ship_12_001.png", "ship_13_001.png", "ship_14_001.png", "ship_15_001.png", "ship_16_001.png", "ship_17_001.png", "ship_18_001.png", "ship_19_001.png", "ship_20_001.png", "ship_21_001.png", "ship_22_001.png", "ship_23_001.png", "ship_24_001.png", "ship_25_001.png", "ship_26_001.png", "ship_27_001.png", "ship_28_001.png", "ship_29_001.png", "ship_30_001.png", "ship_31_001.png", "ship_32_001.png", "ship_33_001.png", "ship_34_001.png", "ship_35_001.png", "ship_36_001.png", "ship_37_001.png", "ship_38_001.png", "ship_39_001.png", "ship_40_001.png", "ship_41_001.png", "ship_42_001.png", "ship_43_001.png", "ship_44_001.png", "ship_45_001.png", "ship_46_001.png", "ship_47_001.png", "ship_48_001.png", "ship_49_001.png", "ship_50_001.png", "ship_51_001.png", "ship_52_001.png", "ship_53_001.png", "ship_54_001.png", "ship_55_001.png", "ship_56_001.png", "ship_57_001.png", "ship_58_001.png", "ship_59_001.png", "ship_60_001.png", "ship_61_001.png", "ship_62_001.png", "ship_63_001.png", "ship_64_001.png", "ship_65_001.png", "ship_66_001.png", "ship_67_001.png", "ship_68_001.png", "ship_69_001.png", "ship_70_001.png", "ship_71_001.png", "ship_72_001.png", "ship_73_001.png", "ship_74_001.png", "ship_75_001.png", "ship_76_001.png", "ship_77_001.png", "ship_78_001.png", "ship_79_001.png"],
        ball: ["player_ball_01_001.png", "player_ball_02_001.png", "player_ball_03_001.png", "player_ball_04_001.png", "player_ball_05_001.png", "player_ball_06_001.png", "player_ball_07_001.png", "player_ball_08_001.png", "player_ball_09_001.png", "player_ball_10_001.png", "player_ball_11_001.png", "player_ball_12_001.png", "player_ball_13_001.png", "player_ball_14_001.png", "player_ball_15_001.png", "player_ball_16_001.png", "player_ball_17_001.png", "player_ball_18_001.png", "player_ball_19_001.png", "player_ball_20_001.png", "player_ball_21_001.png", "player_ball_22_001.png", "player_ball_23_001.png", "player_ball_24_001.png", "player_ball_25_001.png", "player_ball_26_001.png", "player_ball_27_001.png", "player_ball_28_001.png", "player_ball_29_001.png", "player_ball_30_001.png", "player_ball_31_001.png", "player_ball_32_001.png", "player_ball_33_001.png", "player_ball_34_001.png", "player_ball_35_001.png", "player_ball_36_001.png", "player_ball_37_001.png", "player_ball_38_001.png", "player_ball_39_001.png", "player_ball_40_001.png", "player_ball_41_001.png", "player_ball_42_001.png", "player_ball_43_001.png", "player_ball_44_001.png", "player_ball_45_001.png", "player_ball_46_001.png", "player_ball_47_001.png", "player_ball_48_001.png", "player_ball_49_001.png", "player_ball_50_001.png", "player_ball_51_001.png", "player_ball_52_001.png"],
        wave: ["dart_01_001.png", "dart_02_001.png", "dart_03_001.png", "dart_04_001.png", "dart_05_001.png", "dart_06_001.png", "dart_07_001.png", "dart_08_001.png", "dart_09_001.png", "dart_10_001.png", "dart_11_001.png", "dart_12_001.png", "dart_13_001.png", "dart_14_001.png", "dart_15_001.png", "dart_16_001.png", "dart_17_001.png", "dart_18_001.png", "dart_19_001.png", "dart_20_001.png", "dart_21_001.png", "dart_22_001.png", "dart_23_001.png", "dart_24_001.png", "dart_25_001.png", "dart_26_001.png", "dart_27_001.png", "dart_28_001.png", "dart_29_001.png", "dart_30_001.png", "dart_31_001.png", "dart_32_001.png", "dart_33_001.png", "dart_34_001.png", "dart_35_001.png"],
        ufo: ["bird_01_001.png", "bird_02_001.png", "bird_03_001.png", "bird_04_001.png", "bird_05_001.png", "bird_06_001.png", "bird_07_001.png", "bird_08_001.png", "bird_09_001.png", "bird_10_001.png", "bird_11_001.png", "bird_12_001.png", "bird_13_001.png", "bird_14_001.png", "bird_15_001.png", "bird_16_001.png", "bird_17_001.png", "bird_18_001.png", "bird_19_001.png", "bird_20_001.png", "bird_21_001.png", "bird_22_001.png", "bird_23_001.png", "bird_24_001.png", "bird_25_001.png", "bird_26_001.png", "bird_27_001.png", "bird_28_001.png", "bird_29_001.png", "bird_30_001.png", "bird_31_001.png", "bird_32_001.png", "bird_33_001.png", "bird_34_001.png", "bird_35_001.png", "bird_36_001.png", "bird_37_001.png", "bird_38_001.png", "bird_39_001.png", "bird_40_001.png", "bird_41_001.png", "bird_42_001.png", "bird_43_001.png", "bird_44_001.png", "bird_45_001.png", "bird_46_001.png", "bird_47_001.png", "bird_48_001.png", "bird_49_001.png", "bird_50_001.png", "bird_51_001.png"]
      };
      var _iconWindowProps = {
        icon: "currentPlayer",
        ship: "currentShip",
        ball: "currentBall",
        wave: "currentWave",
        ufo: "currentBird"
      };
      var _iconAtlas = {
        icon: "GJ_GameSheetIcons",
        ship: "GJ_GameSheetIcons",
        ball: "GJ_GameSheetIcons",
        wave: "GJ_GameSheetIcons",
        ufo: "GJ_GameSheetIcons"
      };
      var _tabBtnFrames = {
        icon: {
          on: "gj_iconBtn_on_001.png",
          off: "gj_iconBtn_off_001.png"
        },
        ship: {
          on: "gj_shipBtn_on_001.png",
          off: "gj_shipBtn_off_001.png"
        },
        ball: {
          on: "gj_ballBtn_on_001.png",
          off: "gj_ballBtn_off_001.png"
        },
        wave: {
          on: "gj_dartBtn_on_001.png",
          off: "gj_dartBtn_off_001.png"
        },
        ufo: {
          on: "gj_birdBtn_on_001.png",
          off: "gj_birdBtn_off_001.png"
        }
      };
      this._openIconSelector = function () {
        var startTab = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "icon";
        if (_this2._iconOverlay) return;
        var sw = screenWidth;
        var sh = screenHeight;
        var fadeIn = _this2.add.graphics().setScrollFactor(0).setDepth(200);
        fadeIn.fillStyle(0x000000, 1);
        fadeIn.fillRect(0, 0, sw, sh);
        _this2.tweens.add({
          targets: fadeIn,
          alpha: 0,
          duration: 300,
          ease: "Linear",
          onComplete: function onComplete() {
            return fadeIn.destroy();
          }
        });
        var overlay = _this2.add.graphics().setScrollFactor(0).setDepth(100);
        var gradientSteps = 80;
        for (var gi = 0; gi < gradientSteps; gi++) {
          var t = gi / (gradientSteps - 1);
          var r1 = Math.round(0x92 + (0x3a - 0x92) * t);
          var g1 = Math.round(0x92 + (0x3a - 0x92) * t);
          var b1 = Math.round(0x92 + (0x3a - 0x92) * t);
          var bandColor = r1 << 16 | g1 << 8 | b1;
          var bandY = Math.floor(gi * sh / gradientSteps);
          var bandH = Math.ceil(sh / gradientSteps) + 1;
          overlay.fillStyle(bandColor, 1);
          overlay.fillRect(0, bandY, sw, bandH);
        }
        _this2._iconOverlay = overlay;
        var blocker = _this2.add.zone(sw / 2, sh / 2, sw, sh).setScrollFactor(0).setDepth(101).setInteractive();
        var titleTxt = _this2.add.bitmapText(sw / 2, 60, "goldFont", "Icon Selector", 32).setOrigin(0.5, 0.5).setScrollFactor(0).setDepth(105);
        _this2._iconOverlayObjects = [overlay, blocker, titleTxt];
        var backBtn = _this2.add.image(50, 48, "GJ_GameSheet03", "GJ_arrow_03_001.png").setScrollFactor(0).setDepth(104).setFlipX(true).setFlipY(true).setRotation(Math.PI).setInteractive();
        _this2._iconOverlayObjects.push(backBtn);
        _this2._makeBouncyButton(backBtn, 1, function () {
          return _this2._closeIconSelector();
        });
        var topBarHeight = 100;
        var lineY = topBarHeight + 100;
        var linePadding = 230;
        var topBar = _this2.add.graphics().setScrollFactor(0).setDepth(102);
        var lineSegments = 40;
        var lineStart = linePadding;
        var lineEnd = sw - linePadding;
        var lineWidth = lineEnd - lineStart;
        var fadeZone = lineWidth * 0.25;
        for (var li = 0; li < lineSegments; li++) {
          var t0 = li / lineSegments;
          var t1 = (li + 1) / lineSegments;
          var x0 = lineStart + t0 * lineWidth;
          var x1 = lineStart + t1 * lineWidth;
          var mid = (t0 + t1) / 2 * lineWidth;
          var alpha = void 0;
          if (mid < fadeZone) {
            alpha = mid / fadeZone;
          } else if (mid > lineWidth - fadeZone) {
            alpha = (lineWidth - mid) / fadeZone;
          } else {
            alpha = 1;
          }
          topBar.lineStyle(3, 0xFFFFFF, alpha);
          topBar.beginPath();
          topBar.moveTo(x0, lineY);
          topBar.lineTo(x1, lineY);
          topBar.strokePath();
        }
        _this2._iconOverlayObjects.push(topBar);
        var cols = 10;
        var iconSize = 60;
        var padding = 18;
        var containerPadding = 10;
        var rows = 3;
        var containerWidth = cols * iconSize + (cols - 1) * padding + 12;
        var containerHeight = rows * iconSize + (rows - 1) * padding + 12;
        var containerX = sw / 2 - containerWidth / 2;
        var containerY = sh - containerHeight - containerPadding - 130;
        var startX = containerX + 6 + iconSize / 2;
        var startY = containerY + 6 + iconSize / 2;
        var gridBg = _this2.add.graphics().setScrollFactor(0).setDepth(102);
        gridBg.fillStyle(0x454444, 1);
        gridBg.fillRoundedRect(containerX, containerY, containerWidth, containerHeight, 10);
        _this2._iconOverlayObjects.push(gridBg);
        var cornerTL = _this2.add.image(0, 0, "GJ_GameSheet03", "GJ_sideArt_001.png").setScrollFactor(0).setDepth(100).setOrigin(1, 0).setFlipX(false).setFlipY(true);
        var cornerTR = _this2.add.image(sw, 0, "GJ_GameSheet03", "GJ_sideArt_001.png").setScrollFactor(0).setDepth(103).setOrigin(0, 0).setFlipY(false).setFlipX(true);
        var cornerBR = _this2.add.image(sw, sh, "GJ_GameSheet03", "GJ_sideArt_001.png").setScrollFactor(0).setDepth(152).setOrigin(1, 0).setFlipY(false);
        var cornerBL = _this2.add.image(0, sh, "GJ_GameSheet03", "GJ_sideArt_001.png").setScrollFactor(0).setDepth(152).setOrigin(1, 1).setFlipY(true);
        _this2._iconOverlayObjects.push(cornerTL, cornerTR, cornerBR, cornerBL);
        var navDotSpacing = 35;
        var navDotY = containerY + containerHeight + 26;
        var navDot1 = _this2.add.image(sw / 2 - navDotSpacing / 2, navDotY, "GJ_GameSheet03", "gj_navDotBtn_on_001.png").setScrollFactor(0).setDepth(104).setScale(0.75);
        var navDot2 = _this2.add.image(sw / 2 + navDotSpacing / 2, navDotY, "GJ_GameSheet03", "gj_navDotBtn_off_001.png").setScrollFactor(0).setDepth(104).setScale(0.75);
        var navDot3 = _this2.add.image(sw / 2 + navDotSpacing / 2, navDotY, "GJ_GameSheet03", "gj_navDotBtn_off_001.png").setScrollFactor(0).setDepth(104).setScale(0.75).setVisible(false);
        var navDot4 = _this2.add.image(sw / 2 + navDotSpacing / 2, navDotY, "GJ_GameSheet03", "gj_navDotBtn_off_001.png").setScrollFactor(0).setDepth(104).setScale(0.75).setVisible(false);
        var navDot5 = _this2.add.image(sw / 2 + navDotSpacing / 2, navDotY, "GJ_GameSheet03", "gj_navDotBtn_off_001.png").setScrollFactor(0).setDepth(104).setScale(0.75).setVisible(false);
        var navDot6 = _this2.add.image(sw / 2 + navDotSpacing / 2, navDotY, "GJ_GameSheet03", "gj_navDotBtn_off_001.png").setScrollFactor(0).setDepth(104).setScale(0.75).setVisible(false);
        var navDot7 = _this2.add.image(sw / 2 + navDotSpacing / 2, navDotY, "GJ_GameSheet03", "gj_navDotBtn_off_001.png").setScrollFactor(0).setDepth(104).setScale(0.75).setVisible(false);
        var navDot8 = _this2.add.image(sw / 2 + navDotSpacing / 2, navDotY, "GJ_GameSheet03", "gj_navDotBtn_off_001.png").setScrollFactor(0).setDepth(104).setScale(0.75).setVisible(false);
        var navDot9 = _this2.add.image(sw / 2 + navDotSpacing / 2, navDotY, "GJ_GameSheet03", "gj_navDotBtn_off_001.png").setScrollFactor(0).setDepth(104).setScale(0.75).setVisible(false);
        _this2._iconOverlayObjects.push(navDot1, navDot2, navDot3, navDot4, navDot5, navDot6, navDot7, navDot8, navDot9);
        var _updateNavDots = function _updateNavDots(page, tab) {
          var isShip = (tab || startTab) === "ship";
          var isIcon = (tab || startTab) === "icon";
          var maxPages = _getMaxPages(tab);
          [navDot1, navDot2, navDot3, navDot4, navDot5, navDot6, navDot7, navDot8, navDot9].forEach(function (dot) {
            return dot.setVisible(false);
          });
          if (isShip || isIcon) {
            var dots = [navDot1, navDot2, navDot3, navDot4, navDot5, navDot6, navDot7, navDot8, navDot9];
            var totalDotsToShow = Math.min(maxPages, 9);
            var totalWidth = (totalDotsToShow - 1) * navDotSpacing;
            var _startX = sw / 2 - totalWidth / 2;
            for (var i = 0; i < totalDotsToShow; i++) {
              dots[i].setPosition(_startX + i * navDotSpacing, navDotY).setVisible(true);
              dots[i].setTexture("GJ_GameSheet03", page === i ? "gj_navDotBtn_on_001.png" : "gj_navDotBtn_off_001.png");
            }
          } else {
            navDot1.setPosition(sw / 2 - navDotSpacing / 2, navDotY).setVisible(true);
            navDot2.setPosition(sw / 2 + navDotSpacing / 2, navDotY).setVisible(true);
            navDot1.setTexture("GJ_GameSheet03", page === 0 ? "gj_navDotBtn_on_001.png" : "gj_navDotBtn_off_001.png");
            navDot2.setTexture("GJ_GameSheet03", page === 1 ? "gj_navDotBtn_on_001.png" : "gj_navDotBtn_off_001.png");
          }
        };
        var rainbowColors = [0xFF0000, 0xFF4500, 0xFF7F00, 0xFFAA00, 0xFFD700, 0xFFFF00, 0xAAFF00, 0x00FF00, 0x00FF7F, 0x00FFFF, 0x007FFF, 0x0000FF, 0x7F00FF, 0xFF00FF, 0xFF007F, 0xFFFFFF, 0xC0C0C0, 0x808080, 0x404040, 0x000000];
        var colorBtnSize = 35;
        var colorPadding = 4;
        var colorRowWidth = rainbowColors.length * (colorBtnSize + colorPadding) - colorPadding;
        var colorRow1Y = containerY + containerHeight + 70;
        var colorRow2Y = colorRow1Y + colorBtnSize + 10;
        var colorRowStartX = sw / 2 - colorRowWidth / 2 + colorBtnSize / 2;
        var colorLabel1 = _this2.add.text(sw / 2 - colorRowWidth / 2, colorRow1Y - 14, "", {
          fontSize: "11px",
          color: "#ffffff",
          fontFamily: "Arial"
        }).setScrollFactor(0).setDepth(104).setOrigin(0, 0.5).setAlpha(1);
        _this2._iconOverlayObjects.push(colorLabel1);
        var colorLabel2 = _this2.add.text(sw / 2 - colorRowWidth / 2, colorRow2Y - 14, "", {
          fontSize: "11px",
          color: "#ffffff",
          fontFamily: "Arial"
        }).setScrollFactor(0).setDepth(104).setOrigin(0, 0.5).setAlpha(1);
        _this2._iconOverlayObjects.push(colorLabel2);
        for (var ci = 0; ci < rainbowColors.length; ci++) {
          var cx = colorRowStartX + ci * (colorBtnSize + colorPadding);
          var btn1AtlasInfo = getAtlasFrame(_this2, "GJ_colorBtn_001.png");
          var btn1 = void 0;
          if (btn1AtlasInfo) {
            btn1 = _this2.add.image(cx, colorRow1Y, btn1AtlasInfo.atlas, btn1AtlasInfo.frame).setScrollFactor(0).setDepth(104).setTint(rainbowColors[ci]).setScale(0.5).setInteractive();
          } else {
            btn1 = _this2.add.rectangle(cx, colorRow1Y, colorBtnSize, colorBtnSize, rainbowColors[ci]).setScrollFactor(0).setDepth(104).setInteractive();
          }
          _this2._iconOverlayObjects.push(btn1);
          var btn2AtlasInfo = getAtlasFrame(_this2, "GJ_colorBtn_001.png");
          var btn2 = void 0;
          if (btn2AtlasInfo) {
            btn2 = _this2.add.image(cx, colorRow2Y, btn2AtlasInfo.atlas, btn2AtlasInfo.frame).setScrollFactor(0).setDepth(104).setTint(rainbowColors[ci]).setScale(0.5).setInteractive();
          } else {
            btn2 = _this2.add.rectangle(cx, colorRow2Y, colorBtnSize, colorBtnSize, rainbowColors[ci]).setScrollFactor(0).setDepth(104).setInteractive();
          }
          _this2._iconOverlayObjects.push(btn2);
          (function (color, b1, b2) {
            b1.on("pointerover", function () {
              return b1.setAlpha(0.7);
            });
            b1.on("pointerout", function () {
              return b1.setAlpha(1);
            });
            b1.on("pointerup", function () {
              window.mainColor = color;
              localStorage.setItem("iconMainColor", hexadecimalToHex(color));
              if (_this2._player) {
                var _this2$_player$_playe, _this2$_player$_shipS, _this2$_player$_ballS, _this2$_player$_waveS;
                var safeSetTint = function safeSetTint(sprite, color) {
                  if (sprite && sprite.setTint) {
                    try {
                      sprite.setTint(color);
                      if (_this2.renderer.type === Phaser.CANVAS && sprite.tintTopLeft !== undefined) {
                        if (sprite.tintTopLeft === 0xffffff && color !== 0xffffff) {}
                      }
                    } catch (e) {}
                  }
                };
                safeSetTint((_this2$_player$_playe = _this2._player._playerSpriteLayer) === null || _this2$_player$_playe === void 0 ? void 0 : _this2$_player$_playe.sprite, color);
                safeSetTint((_this2$_player$_shipS = _this2._player._shipSpriteLayer) === null || _this2$_player$_shipS === void 0 ? void 0 : _this2$_player$_shipS.sprite, color);
                safeSetTint((_this2$_player$_ballS = _this2._player._ballSpriteLayer) === null || _this2$_player$_ballS === void 0 ? void 0 : _this2$_player$_ballS.sprite, color);
                safeSetTint((_this2$_player$_waveS = _this2._player._waveSpriteLayer) === null || _this2$_player$_waveS === void 0 ? void 0 : _this2$_player$_waveS.sprite, color);
                if (_this2._player._particleEmitter) {
                  try {
                    _this2._player._particleEmitter.tint = color;
                  } catch (e) {}
                }
              }
              selectedIcon.setTint(color);
            });
            b2.on("pointerover", function () {
              return b2.setAlpha(0.7);
            });
            b2.on("pointerout", function () {
              return b2.setAlpha(1);
            });
            b2.on("pointerup", function () {
              window.secondaryColor = color;
              localStorage.setItem("iconSecondaryColor", hexadecimalToHex(color));
              if (_this2._player) {
                var _this2$_player$_playe2, _this2$_player$_playe3, _this2$_player$_shipG, _this2$_player$_shipO, _this2$_player$_ballG, _this2$_player$_ballO, _this2$_player$_waveG, _this2$_player$_waveO;
                var safeSetTint = function safeSetTint(sprite, color) {
                  if (sprite && sprite.setTint) {
                    try {
                      sprite.setTint(color);
                    } catch (e) {}
                  }
                };
                safeSetTint((_this2$_player$_playe2 = _this2._player._playerGlowLayer) === null || _this2$_player$_playe2 === void 0 ? void 0 : _this2$_player$_playe2.sprite, color);
                safeSetTint((_this2$_player$_playe3 = _this2._player._playerOverlayLayer) === null || _this2$_player$_playe3 === void 0 ? void 0 : _this2$_player$_playe3.sprite, color);
                safeSetTint((_this2$_player$_shipG = _this2._player._shipGlowLayer) === null || _this2$_player$_shipG === void 0 ? void 0 : _this2$_player$_shipG.sprite, color);
                safeSetTint((_this2$_player$_shipO = _this2._player._shipOverlayLayer) === null || _this2$_player$_shipO === void 0 ? void 0 : _this2$_player$_shipO.sprite, color);
                safeSetTint((_this2$_player$_ballG = _this2._player._ballGlowLayer) === null || _this2$_player$_ballG === void 0 ? void 0 : _this2$_player$_ballG.sprite, color);
                safeSetTint((_this2$_player$_ballO = _this2._player._ballOverlayLayer) === null || _this2$_player$_ballO === void 0 ? void 0 : _this2$_player$_ballO.sprite, color);
                safeSetTint((_this2$_player$_waveG = _this2._player._waveGlowLayer) === null || _this2$_player$_waveG === void 0 ? void 0 : _this2$_player$_waveG.sprite, color);
                safeSetTint((_this2$_player$_waveO = _this2._player._waveOverlayLayer) === null || _this2$_player$_waveO === void 0 ? void 0 : _this2$_player$_waveO.sprite, color);
                if (_this2._player._streak) {
                  try {
                    _this2._player._streak._color = color;
                  } catch (e) {}
                }
              }
              selectedIconExtra.setTint(window.secondaryColor);
              _refreshPreview(currentTab, _getPreviewFrame(currentTab));
            });
          })(rainbowColors[ci], btn1, btn2);
        }
        var previewY = lineY - 35;
        var selectedIconExtra = _this2.add.image(sw / 2, previewY, _iconAtlas[startTab], null).setScrollFactor(0).setDepth(102).setVisible(false);
        var selectedIcon = _this2.add.image(sw / 2, previewY, _iconAtlas[startTab], null).setScrollFactor(0).setDepth(103);
        var _getPreviewFrame = function _getPreviewFrame(tab) {
          var prop = _iconWindowProps[tab];
          var frames = _iconFrameSets[tab];
          var match = frames.find(function (f) {
            return f.replace("_001.png", "") === window[prop];
          });
          return match || frames[0];
        };
        var _refreshPreview = function _refreshPreview(tab, frame) {
          selectedIcon.setTexture(_iconAtlas[tab], frame);
          var s = Math.min(80 / (selectedIcon.width || 80), 80 / (selectedIcon.height || 80)) * 0.85;
          selectedIcon.setScale(s);
          selectedIcon.setTint(window.mainColor);
          var extraFrame = frame.replace("_001.png", "_2_001.png");
          var extraInfo = getAtlasFrame(_this2, extraFrame);
          if (extraInfo) {
            selectedIconExtra.setTexture(extraInfo.atlas, extraInfo.frame).setVisible(true).setScale(s).setTint(window.secondaryColor);
          } else {
            selectedIconExtra.setVisible(false);
          }
        };
        _refreshPreview(startTab, _getPreviewFrame(startTab));
        _this2._iconOverlayObjects.push(selectedIconExtra, selectedIcon);
        var tabBtnY = containerY - 40;
        var tabKeys = ["icon", "ship", "ball", "wave", "ufo"];
        var tabOffsets = [-218, -109, 0, 109, 218];
        var tabRotations = {
          icon: -Math.PI / 2,
          ship: 0,
          ball: -Math.PI / 2,
          wave: Math.PI / 2,
          ufo: Math.PI / 2
        };
        var tabFlipXStates = {
          icon: true,
          ship: false,
          ball: true,
          wave: false,
          ufo: false
        };
        var tabFlipYStates = {
          icon: false,
          ship: false,
          ball: false,
          wave: true,
          ufo: true
        };
        var tabBtnSprites = {};
        var _switchTab = function _switchTab(tab) {
          for (var _i5 = 0, _tabKeys = tabKeys; _i5 < _tabKeys.length; _i5++) {
            var k = _tabKeys[_i5];
            if (tabBtnSprites[k]) {
              tabBtnSprites[k].setTexture("GJ_GameSheet03", k === tab ? _tabBtnFrames[k].on : _tabBtnFrames[k].off);
            }
          }
          _refreshPreview(tab, _getPreviewFrame(tab));
          _buildGrid(tab);
        };
        tabKeys.forEach(function (tab, i) {
          var isActive = tab === startTab;
          var btn = _this2.add.image(sw / 2 + tabOffsets[i], tabBtnY, "GJ_GameSheet03", isActive ? _tabBtnFrames[tab].on : _tabBtnFrames[tab].off).setScrollFactor(0).setDepth(104).setScale(0.75).setRotation(tabRotations[tab]).setFlipX(tabFlipXStates[tab]).setFlipY(tabFlipYStates[tab]).setInteractive();
          tabBtnSprites[tab] = btn;
          _this2._iconOverlayObjects.push(btn);
          _this2._makeBouncyButton(btn, 0.75, function () {
            return _switchTab(tab);
          });
        });
        _this2._iconGridObjects = [];
        var selLabel = _this2.add.image(0, 0, "GJ_GameSheet03", "GJ_select_001.png").setScrollFactor(0).setDepth(106).setOrigin(0.5, 0.5).setVisible(false);
        _this2._iconOverlayObjects.push(selLabel);
        var iconsPerPage = cols * rows;
        var currentPage = 0;
        var arrowY = containerY + containerHeight / 2;
        var arrowMargin = 54;
        var prevArrow = _this2.add.image(containerX - arrowMargin, arrowY, "GJ_GameSheet03", "GJ_arrow_01_001.png").setScrollFactor(0).setDepth(106).setScale(0.8).setFlipX(false).setInteractive();
        var nextArrow = _this2.add.image(containerX + containerWidth + arrowMargin, arrowY, "GJ_GameSheet03", "GJ_arrow_01_001.png").setScrollFactor(0).setDepth(106).setScale(0.8).setInteractive().setFlipX(true);

        //bouncy buttons for arrows
        var _getMaxPages = function _getMaxPages(tab) {
          return Math.ceil(_iconFrameSets[tab].length / iconsPerPage);
        };
        var _prevPage = function _prevPage() {
          var maxPages = _getMaxPages(_currentTab);
          currentPage = (currentPage - 1 + maxPages) % maxPages;
          _updateNavDots(currentPage, _currentTab);
          _buildGrid(_currentTab, currentPage);
        };
        var _nextPage = function _nextPage() {
          var maxPages = _getMaxPages(_currentTab);
          currentPage = (currentPage + 1) % maxPages;
          _updateNavDots(currentPage, _currentTab);
          _buildGrid(_currentTab, currentPage);
        };
        _this2._makeBouncyButton(prevArrow, 0.8, _prevPage);
        _this2._makeBouncyButton(nextArrow, 0.8, _nextPage);
        _this2._iconOverlayObjects.push(prevArrow, nextArrow);
        var _buildGrid = function _buildGrid(tab) {
          var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var _iterator17 = _createForOfIteratorHelper(_this2._iconGridObjects),
            _step17;
          try {
            for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
              var _o = _step17.value;
              if (_o && _o.destroy) _o.destroy();
            }
          } catch (err) {
            _iterator17.e(err);
          } finally {
            _iterator17.f();
          }
          _this2._iconGridObjects = [];
          selLabel.setVisible(false);
          var allFrames = _iconFrameSets[tab];
          var frames = allFrames.slice(page * iconsPerPage, (page + 1) * iconsPerPage);
          var atlas = _iconAtlas[tab];
          var prop = _iconWindowProps[tab];
          frames.forEach(function (frame, idx) {
            var col = idx % cols;
            var row = Math.floor(idx / cols);
            var ix = startX + col * (iconSize + padding);
            var iy = startY + row * (iconSize + padding);
            var hitRect = _this2.add.rectangle(ix, iy, iconSize, iconSize, 0x000000, 0).setScrollFactor(0).setDepth(104).setInteractive();
            var iconImg = _this2.add.image(ix, iy, atlas, frame).setScrollFactor(0).setDepth(103).setTint(0xAFAFAF);
            var origScale = Math.min(iconSize / (iconImg.width || iconSize), iconSize / (iconImg.height || iconSize)) * 0.7;
            iconImg.setScale(origScale);
            var extraFrame = frame.replace("_001.png", "_2_001.png");
            var extraInfo = getAtlasFrame(_this2, extraFrame);
            var extraImg = extraInfo ? _this2.add.image(ix, iy, extraInfo.atlas, extraInfo.frame).setScrollFactor(0).setDepth(102).setScale(origScale) : null;
            if (extraImg) _this2._iconGridObjects.push(extraImg);
            _this2._iconGridObjects.push(iconImg, hitRect);
            if (frame.replace("_001.png", "") === window[prop]) {
              selLabel.setPosition(ix, iy).setScale(0.75).setVisible(true);
            }
            (function (capturedFrame, capturedImg, capturedExtra, capturedOrigScale) {
              hitRect.on("pointerover", function () {
                capturedImg.setAlpha(0.65);
                if (capturedExtra) capturedExtra.setAlpha(0.65);
              });
              hitRect.on("pointerout", function () {
                capturedImg.setAlpha(1);
                capturedImg.setScale(capturedOrigScale);
                if (capturedExtra) {
                  capturedExtra.setAlpha(1);
                  capturedExtra.setScale(capturedOrigScale);
                }
              });
              hitRect.on("pointerdown", function () {
                capturedImg.setScale(capturedOrigScale * 1.15);
                if (capturedExtra) capturedExtra.setScale(capturedOrigScale * 1.15);
              });
              hitRect.on("pointerup", function () {
                capturedImg.setScale(capturedOrigScale);
                capturedImg.setAlpha(1);
                if (capturedExtra) {
                  capturedExtra.setScale(capturedOrigScale);
                  capturedExtra.setAlpha(1);
                }
                if (!_this2._iconOverlay) return;
                selLabel.setPosition(capturedImg.x, capturedImg.y).setScale(0.75).setVisible(true);
                window[prop] = capturedFrame.replace("_001.png", "");
                localStorage.setItem("icon" + prop.charAt(0).toUpperCase() + prop.slice(1), window[prop]);
                if (tab === "icon" && _this2._player) {
                  var layerMap = [{
                    lp: "_playerSpriteLayer",
                    suffix: "_001.png",
                    tint: window.mainColor
                  }, {
                    lp: "_playerGlowLayer",
                    suffix: "_glow_001.png",
                    tint: window.secondaryColor
                  }, {
                    lp: "_playerOverlayLayer",
                    suffix: "_2_001.png",
                    tint: window.secondaryColor
                  }, {
                    lp: "_playerExtraLayer",
                    suffix: "_extra_001.png",
                    tint: window.mainColor
                  }];
                  for (var _i6 = 0, _layerMap = layerMap; _i6 < _layerMap.length; _i6++) {
                    var _layerMap$_i = _layerMap[_i6],
                      lp = _layerMap$_i.lp,
                      suffix = _layerMap$_i.suffix,
                      tint = _layerMap$_i.tint;
                    var layer = _this2._player[lp];
                    if (!layer || !layer.sprite) continue;
                    var found = getAtlasFrame(_this2, "".concat(window.currentPlayer).concat(suffix));
                    if (found) {
                      layer.sprite.setTexture(found.atlas, found.frame);
                      if (tint !== null) layer.sprite.setTint(tint);
                    }
                  }
                }
                if (tab === "ship" && _this2._player) {
                  var _layerMap2 = [{
                    lp: "_shipSpriteLayer",
                    suffix: "_001.png",
                    tint: window.mainColor
                  }, {
                    lp: "_shipGlowLayer",
                    suffix: "_glow_001.png",
                    tint: window.secondaryColor
                  }, {
                    lp: "_shipOverlayLayer",
                    suffix: "_2_001.png",
                    tint: window.secondaryColor
                  }, {
                    lp: "_shipExtraLayer",
                    suffix: "_2_001.png",
                    tint: window.secondaryColor
                  }];
                  for (var _i7 = 0, _layerMap3 = _layerMap2; _i7 < _layerMap3.length; _i7++) {
                    var _layerMap3$_i = _layerMap3[_i7],
                      _lp = _layerMap3$_i.lp,
                      _suffix = _layerMap3$_i.suffix,
                      _tint = _layerMap3$_i.tint;
                    var _layer = _this2._player[_lp];
                    if (!_layer || !_layer.sprite) continue;
                    var _found = getAtlasFrame(_this2, "".concat(window.currentShip).concat(_suffix));
                    if (_found) {
                      _layer.sprite.setTexture(_found.atlas, _found.frame);
                      if (_tint !== null) _layer.sprite.setTint(_tint);
                    }
                  }
                }
                if (tab === "ball" && _this2._player) {
                  var _layerMap4 = [{
                    lp: "_ballSpriteLayer",
                    suffix: "_001.png",
                    tint: window.mainColor
                  }, {
                    lp: "_ballGlowLayer",
                    suffix: "_glow_001.png",
                    tint: window.secondaryColor
                  }, {
                    lp: "_ballOverlayLayer",
                    suffix: "_2_001.png",
                    tint: window.secondaryColor
                  }];
                  for (var _i8 = 0, _layerMap5 = _layerMap4; _i8 < _layerMap5.length; _i8++) {
                    var _layerMap5$_i = _layerMap5[_i8],
                      _lp2 = _layerMap5$_i.lp,
                      _suffix2 = _layerMap5$_i.suffix,
                      _tint2 = _layerMap5$_i.tint;
                    var _layer2 = _this2._player[_lp2];
                    if (!_layer2 || !_layer2.sprite) continue;
                    var _found2 = getAtlasFrame(_this2, "".concat(window.currentBall).concat(_suffix2));
                    if (_found2) {
                      _layer2.sprite.setTexture(_found2.atlas, _found2.frame);
                      _layer2.sprite.setTint(_tint2);
                    }
                  }
                }
                if (tab === "wave" && _this2._player) {
                  var _layerMap6 = [{
                    lp: "_waveSpriteLayer",
                    suffix: "_001.png",
                    tint: window.mainColor
                  }, {
                    lp: "_waveGlowLayer",
                    suffix: "_glow_001.png",
                    tint: window.secondaryColor
                  }, {
                    lp: "_waveOverlayLayer",
                    suffix: "_2_001.png",
                    tint: window.secondaryColor
                  }];
                  for (var _i9 = 0, _layerMap7 = _layerMap6; _i9 < _layerMap7.length; _i9++) {
                    var _layerMap7$_i = _layerMap7[_i9],
                      _lp3 = _layerMap7$_i.lp,
                      _suffix3 = _layerMap7$_i.suffix,
                      _tint3 = _layerMap7$_i.tint;
                    var _layer3 = _this2._player[_lp3];
                    if (!_layer3 || !_layer3.sprite) continue;
                    var _found3 = getAtlasFrame(_this2, "".concat(window.currentWave).concat(_suffix3));
                    if (_found3) {
                      _layer3.sprite.setTexture(_found3.atlas, _found3.frame);
                      if (_tint3 !== null) _layer3.sprite.setTint(_tint3);
                    }
                  }
                }
                if (tab === "ufo" && _this2._player) {
                  var _layerMap8 = [{
                    lp: "_birdSpriteLayer",
                    suffix: "_001.png",
                    tint: window.mainColor
                  }, {
                    lp: "_birdGlowLayer",
                    suffix: "_2_001.png",
                    tint: window.secondaryColor
                  }, {
                    lp: "_birdOverlayLayer",
                    suffix: "_3_001.png",
                    tint: window.secondaryColor
                  }, {
                    lp: "_birdExtraLayer",
                    suffix: "_extra_001.png",
                    tint: window.mainColor
                  }];
                  for (var _i0 = 0, _layerMap9 = _layerMap8; _i0 < _layerMap9.length; _i0++) {
                    var _layerMap9$_i = _layerMap9[_i0],
                      _lp4 = _layerMap9$_i.lp,
                      _suffix4 = _layerMap9$_i.suffix,
                      _tint4 = _layerMap9$_i.tint;
                    var _layer4 = _this2._player[_lp4];
                    if (!_layer4 || !_layer4.sprite) continue;
                    var _found4 = getAtlasFrame(_this2, "".concat(window.currentBird).concat(_suffix4));
                    if (_found4) {
                      _layer4.sprite.setTexture(_found4.atlas, _found4.frame);
                      if (_tint4 !== null) _layer4.sprite.setTint(_tint4);
                    }
                  }
                }
                _refreshPreview(tab, capturedFrame);
              });
            })(frame, iconImg, extraImg, origScale);
          });
        };
        var _currentTab = startTab;
        var _switchTabOrig = _switchTab;
        var _switchTabPaged = function _switchTabPaged(tab) {
          _currentTab = tab;
          currentPage = 0;
          _updateNavDots(0, tab);
          for (var _i1 = 0, _tabKeys2 = tabKeys; _i1 < _tabKeys2.length; _i1++) {
            var k = _tabKeys2[_i1];
            if (tabBtnSprites[k]) {
              tabBtnSprites[k].setTexture("GJ_GameSheet03", k === tab ? _tabBtnFrames[k].on : _tabBtnFrames[k].off);
            }
          }
          _refreshPreview(tab, _getPreviewFrame(tab));
          _buildGrid(tab, 0);
        };
        tabKeys.forEach(function (tab) {
          var btn = tabBtnSprites[tab];
          if (btn) {
            btn.removeAllListeners("pointerup");
            btn.removeAllListeners("pointerdown");
            btn.removeAllListeners("pointerout");
            _this2._makeBouncyButton(btn, 0.75, function () {
              return _switchTabPaged(tab);
            });
          }
        });
        _updateNavDots(0, startTab);
        _buildGrid(startTab, 0);
      };
      this._closeIconSelector = function () {
        var silent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        if (!_this2._iconOverlay) return;
        var destroy = function destroy() {
          if (_this2._iconGridObjects) {
            var _iterator18 = _createForOfIteratorHelper(_this2._iconGridObjects),
              _step18;
            try {
              for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
                var obj = _step18.value;
                if (obj && obj.destroy) obj.destroy();
              }
            } catch (err) {
              _iterator18.e(err);
            } finally {
              _iterator18.f();
            }
            _this2._iconGridObjects = null;
          }
          if (_this2._iconOverlayObjects) {
            var _iterator19 = _createForOfIteratorHelper(_this2._iconOverlayObjects),
              _step19;
            try {
              for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
                var _obj = _step19.value;
                if (_obj && _obj.destroy) _obj.destroy();
              }
            } catch (err) {
              _iterator19.e(err);
            } finally {
              _iterator19.f();
            }
            _this2._iconOverlayObjects = null;
          }
          _this2._iconOverlay = null;
        };
        if (silent) {
          destroy();
          return;
        }
        var sw = screenWidth;
        var sh = screenHeight;
        var fadeOut = _this2.add.graphics().setScrollFactor(0).setDepth(200).setAlpha(0);
        fadeOut.fillStyle(0x000000, 1);
        fadeOut.fillRect(0, 0, sw, sh);
        _this2.tweens.add({
          targets: fadeOut,
          alpha: 1,
          duration: 150,
          ease: "Linear",
          onComplete: function onComplete() {
            destroy();
            _this2.tweens.add({
              targets: fadeOut,
              alpha: 0,
              duration: 150,
              ease: "Linear",
              onComplete: function onComplete() {
                return fadeOut.destroy();
              }
            });
          }
        });
      };
      this._closeCreatorMenu = function () {
        var silent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        if (!_this2._creatorOverlay) return;
        if (silent == false) _this2._creatorMenuOpen = false;
        var destroy = function destroy() {
          if (_this2._creatorOverlayObjects) {
            var _iterator20 = _createForOfIteratorHelper(_this2._creatorOverlayObjects),
              _step20;
            try {
              for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
                var obj = _step20.value;
                if (obj && obj.destroy) obj.destroy();
              }
            } catch (err) {
              _iterator20.e(err);
            } finally {
              _iterator20.f();
            }
            _this2._creatorOverlayObjects = null;
          }
          _this2._creatorOverlay = null;
        };
        if (silent) {
          destroy();
          return;
        }
        var sw = screenWidth;
        var sh = screenHeight;
        var fadeOut = _this2.add.graphics().setScrollFactor(0).setDepth(200).setAlpha(0);
        fadeOut.fillStyle(0x000000, 1);
        fadeOut.fillRect(0, 0, sw, sh);
        _this2.tweens.add({
          targets: fadeOut,
          alpha: 1,
          duration: 150,
          ease: "Linear",
          onComplete: function onComplete() {
            destroy();
            _this2.tweens.add({
              targets: fadeOut,
              alpha: 0,
              duration: 150,
              ease: "Linear",
              onComplete: function onComplete() {
                return fadeOut.destroy();
              }
            });
          }
        });
      };
      this._positionMenuItems();
      //icon stuff sequel
      if (this._iconBtn) {
        this._iconBtn.x = screenWidth / 2 - this._playBtn.width / 2 - 50 - this._iconBtn.width * this._iconBtn.scaleX / 2;
        this.tweens.killTweensOf(this._iconBtn, "y");
        this._iconBtn.y = 320;
        this.tweens.add({
          targets: this._iconBtn,
          y: 324,
          duration: 750,
          ease: "Quad.InOut",
          yoyo: true,
          repeat: -1
        });
      }
      // creator stuff the sequel
      if (this._creatorBtn) {
        this._creatorBtn.x = screenWidth / 2 + this._playBtn.width / 2 + 50 + this._creatorBtn.width * this._creatorBtn.scaleX / 2;
        this.tweens.killTweensOf(this._creatorBtn, "y");
        this._creatorBtn.y = 320;
        this.tweens.add({
          targets: this._creatorBtn,
          y: 324,
          duration: 750,
          ease: "Quad.InOut",
          yoyo: true,
          repeat: -1
        });
      }
      this._spaceWasDown = false;
      this._spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
      this._upKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
      this._wKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
      this._lKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.L);
      this._leftKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
      this._rightKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
      this._aKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
      this._dKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
      this._startPosIndex = -1;
      this.input.keyboard.on('keydown-Q', function () {
        if (!window.startPosSwitcher) return;
        _this2.changeStartPos(-1);
      });
      this.input.keyboard.on('keydown-E', function () {
        if (!window.startPosSwitcher) return;
        _this2.changeStartPos(1);
      });
      this._percentageLabel = this.add.bitmapText(screenWidth / 2, 20, "bigFont", "0%", 30).setOrigin(0.5, 0.5);
      this._percentageLabel.setVisible(false);
      this._percentageLabel.setDepth(100);
      this._noclipIndicator = this.add.bitmapText(10, 10, "bigFont", "Noclip", 20).setOrigin(0, 0).setAlpha(0.4).setDepth(100).setVisible(false);
      this._accuracyIndicator = this.add.bitmapText(10, 30, "bigFont", "100.00%", 20).setOrigin(0, 0).setAlpha(0.4).setDepth(100).setVisible(false);
      this._deathsIndicator = this.add.bitmapText(10, 50, "bigFont", "0 Deaths", 20).setOrigin(0, 0).setAlpha(0.4).setDepth(100).setVisible(false);
      this.noclipFlash = this.add.rectangle(this.cameras.main.centerX, this.cameras.main.centerY, this.cameras.main.width, this.cameras.main.height, 0xff0000);
      this.noclipFlash.setScrollFactor(0);
      this.noclipFlash.setDepth(99);
      this.noclipFlash.setAlpha(0);
      this._updatePracticeHUDBar = function () {};
      this._pauseBtn = this.add.image(screenWidth - 30, 30, "GJ_WebSheet", "GJ_pauseBtn_clean_001.png").setScrollFactor(0).setDepth(30).setAlpha(75 / 255).setVisible(false);
      this._pauseBtn.setInteractive();
      this._expandHitArea(this._pauseBtn, 2);
      this._pauseBtn.on("pointerdown", function () {
        return _this2._pauseGame();
      });
      this._escKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);
      this._escKey.on("down", function () {
        if (_this2._levelSelectOverlay) {
          _this2._closeLevelSelect();
          return;
        }
        if (_this2._iconOverlay) {
          _this2._closeIconSelector();
          return;
        }
        if (_this2._updateLogPopup) {
          _this2._closeUpdateLogPopup();
          return;
        }
        if (_this2._searchOverlay) {
          _this2._closeSearchMenu(true);
          _this2._openCreatorMenu();
          return;
        }
        if (_this2._onlineLevelsOverlay) {
          _this2._closeOnlineLevelsScene();
          return;
        }
        if (_this2._creatorOverlay) {
          _this2._closeCreatorMenu();
          return;
        }
        if (_this2._settingsPopup) {
          _this2._settingsPopup.destroy();
          _this2._settingsPopup = null;
          return;
        }
        if (_this2._settingsLayerOverlay) {
          if (!_this2._settingsScreenClosing) {
            _this2._hideSettingsScreen();
          }
          return;
        }
        if (_this2._infoPopup) {
          _this2._infoPopup.destroy();
          _this2._infoPopup = null;
          return;
        }
        if (_this2._newgroundsPopup) {
          _this2._closeNewgroundsPopup();
          return;
        }
        if (_this2._statsLayerOverlay) {
          _this2._hideStatsScreen();
          return;
        }
        if (_this2._paused) {
          _this2._audio.playEffect("quitSound_01", { volume: _this2._sfxVolume });
          _this2._audio.stopMusic();
          _this2._resumeGame();
          _this2.scene.restart();
        } else if (!_this2._menuActive && !_this2._slideIn && !_this2._levelWon) {
          _this2._pauseGame();
        } else if (_this2._menuActive && !window.isEditor && !_this2._editorOverlay) {
          // Main menu with nothing open: ESC pulls up the settings screen.
          // (A second ESC closes it via the _settingsLayerOverlay branch above.
          // _editorOverlay check: the editor level menu isn't in the branch
          // chain above, and settings must not layer on top of it.)
          _this2._showSettingsScreen();
        }
      });
      this._restartKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
      this._restartKey.on("down", function () {
        if (!_this2._menuActive && !_this2._slideIn && !_this2._levelWon && !_this2._menuActive) {
          _this2._restartLevel();
        }
      });
      this._practiceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.P);
      this._practiceKey.on("down", function () {
        if (!_this2._menuActive && !_this2._slideIn) {
          var isPracticeMode = _this2._practicedMode.togglePracticeMode();
          if (_this2._checkpointBtnContainer) {
            _this2._checkpointBtnContainer.setVisible(isPracticeMode);
          }
          if (_this2._practiceModeBarContainer) {
            _this2._practiceModeBarContainer.setVisible(isPracticeMode);
          }
          _this2._audio.startMusic();
        }
      });
      this._saveCheckpointKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);
      this._saveCheckpointKey.on("down", function () {
        if (!_this2._menuActive && !_this2._slideIn && _this2._practicedMode.practiceMode && !_this2._state.isDead) {
          var saved = _this2._practicedMode.saveCheckpoint(_this2._state, _this2._playerWorldX, _this2._cameraX, _this2);
          if (saved) {}
        }
      });
      this._deleteCheckpointKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.X);
      this._deleteCheckpointKey.on("down", function () {
        if (!_this2._menuActive && !_this2._slideIn && _this2._practicedMode.practiceMode) {
          var deleted = _this2._practicedMode.deleteLastCheckpoint();
        }
      });
      this._paused = false;
      this._pauseContainer = null;
      this._sfxVolume = (_localStorage$getItem = localStorage.getItem("userSfxVol")) !== null && _localStorage$getItem !== void 0 ? Number(_localStorage$getItem) : 1;
      this.input.on("pointerdown", function () {
        if (!_this2._menuActive && !_this2._paused && !_this2._levelSelectOverlay && !_this2._levelWon && !window.isEditor) {
          _this2._pushButton();
        }
      });
      this.input.on("pointerup", function () {
        if (!_this2._menuActive && !_this2._paused && !_this2._levelSelectOverlay && !_this2._levelWon && !window.isEditor) {
          _this2._releaseButton();
        }
      });
      // Set live scene reference so window-level handlers see the CURRENT scene
      // (not a stale closure to a destroyed one after scene.restart())
      window._gdActiveScene = this;
      if (!window.gdpointerup) {
        window.gdpointerup = true;
        window.addEventListener("pointerup", function () {
          var s = window._gdActiveScene;
          if (s && s._releaseButton) s._releaseButton();
        });
      }
      if (!window.gdtouchend) {
        window.gdtouchend = true;
        window.addEventListener("touchend", function () {
          var s = window._gdActiveScene;
          if (s && s._releaseButton) s._releaseButton();
        });
      }
      this.scale.on("enterfullscreen", function () {
        return _this2._onFullscreenChange(true);
      });
      this.scale.on("leavefullscreen", function () {
        return _this2._onFullscreenChange(false);
      });
      this._buildHUD();
      this._createStartPosGui();
      this._loadSettings();
      // visibilitychange — only install once globally; read live scene at fire time
      if (!window.gdvischange) {
        window.gdvischange = true;
        document.addEventListener("visibilitychange", function () {
          var s = window._gdActiveScene;
          if (!s || !s._audio) return;
          if (document.hidden) {
            s._audio.pauseMusic();
          } else if (!s._menuActive && !s._paused && s._state && !s._state.isDead && !s._levelWon) {
            s._audio.resumeMusic();
          }
        });
      }
      if (!window.gdorientationchange) {
        window.gdorientationchange = true;
        window.addEventListener("orientationchange", function () {
          var s = window._gdActiveScene;
          if (!s) return;
          s.time.delayedCall(100, function () {
            var s2 = window._gdActiveScene;
            if (s2 && s2.scale) s2.scale.refresh();
          });
        });
      }
      if (!window.gdresize) {
        window.gdresize = true;
        window.addEventListener("resize", function () {
          var s = window._gdActiveScene;
          if (s && s.scale) s.scale.refresh();
        });
      }
      if (this.game.registry.get("fadeInFromBlack")) {
        this.game.registry.remove("fadeInFromBlack");
        this.cameras.main.fadeIn(400, 0, 0, 0);
      }
      this._levelLabel = this.add.bitmapText(screenWidth - 565, 30, "bigFont", window.currentlevel[1], 30).setOrigin(0.5, 0.5).setVisible(false);
      this._levelLabel.setScale(Math.min(1, 220 / this._levelLabel.width));
      this._leftBtn = this.add.image(screenWidth - 700, 30, "GJ_GameSheet03", "edit_leftBtn_001.png").setScrollFactor(0).setDepth(30).setInteractive().setVisible(false);
      this._rightBtn = this.add.image(screenWidth - 429, 30, "GJ_GameSheet03", "edit_leftBtn_001.png").setScrollFactor(0).setDepth(30).setInteractive().setVisible(false);
      this._rightBtn.setRotation(Math.PI);
      window.scene = this.scene;
      window.rightbuttoncallback = function () {
        if (_this2._levelSelectOverlay && _this2._levelSelectSwitchLevel) {
          _this2._levelSelectSwitchLevel(1);
        }
      };
      window.leftbuttoncallback = function () {
        if (_this2._levelSelectOverlay && _this2._levelSelectSwitchLevel) {
          _this2._levelSelectSwitchLevel(-1);
        }
      };
      this._makeBouncyButton(this._leftBtn, 1, function () {
        window.leftbuttoncallback();
      }, function () {
        return _this2._menuActive;
      });
      this._makeBouncyButton(this._rightBtn, 1, function () {
        window.rightbuttoncallback();
      }, function () {
        return _this2._menuActive;
      });
      var menuMusicEnabled = localStorage.getItem("menuMusicEnabled");
      var shouldPlayMenuMusic = menuMusicEnabled === null ? true : menuMusicEnabled === "true";
      if (!this._audio.isplaying() && shouldPlayMenuMusic) {
        this._audio.startMenuMusic();
      } else if (this._audio.isplaying() && !shouldPlayMenuMusic) {
        this._audio.stopMusic();
      }
      // Update log popup disabled (per user request — too intrusive on game enter)
      window.updateLogShown = true;
      // window.levelID auto-open removed along with the online level search feature
      if (this.game.registry.get("autoStartGame")) {
        this.game.registry.remove("autoStartGame");
        this._levelLabel.setVisible(false);
        this._leftBtn.setVisible(false);
        this._rightBtn.setVisible(false);
        if (this._practiceModeBarContainer) {
          this._practiceModeBarContainer.setVisible(this._practicedMode && this._practicedMode.practiceMode);
        }
        this._startGame();
      }
    }
  }, {
    key: "_parseLevelColors",
    value: function _parseLevelColors(levelId) {
      var LEVEL_COLORS = [0x0100f5, 0xf902f8, 0xf90285, 0xfa0102, 0xfa8702, 0xfcfc06, 0x03fb03, 0x02fbfb, 0x007dff];
      var index = 0;
      if (window.allLevels) {
        index = window.allLevels.findIndex(function (l) {
          return l[2] === levelId;
        });
        if (index === -1) index = 0;
      }
      var bgHex = LEVEL_COLORS[index % LEVEL_COLORS.length];
      return {
        bgHex: bgHex,
        groundHex: bgHex
      };
    }
  }, {
    key: "_openLevelSelect",
    value: function _openLevelSelect() {
      var _this3 = this;
      if (this._levelSelectOverlay) return;
      var sw = screenWidth;
      var sh = screenHeight;
      var cx = sw / 2;
      var cy = sh / 2;
      var _this$_parseLevelColo = this._parseLevelColors(window.currentlevel[2]),
        bgHex = _this$_parseLevelColo.bgHex,
        groundHex = _this$_parseLevelColo.groundHex;
      var drawOverlay = function drawOverlay(gfx, colorHex) {
        var isEveryEnd = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        gfx.clear();
        var rRaw = colorHex >> 16 & 0xff;
        var gRaw = colorHex >> 8 & 0xff;
        var bRaw = colorHex & 0xff;
        var topMul = isEveryEnd ? 0.30 : 0.65;
        var botMul = isEveryEnd ? 0.18 : 0.42;
        var steps = 60;
        for (var i = 0; i < steps; i++) {
          var t = i / (steps - 1);
          var mul = topMul + (botMul - topMul) * t;
          var r2 = Math.min(255, Math.round(rRaw * mul));
          var g2 = Math.min(255, Math.round(gRaw * mul));
          var b2 = Math.min(255, Math.round(bRaw * mul));
          gfx.fillStyle(r2 << 16 | g2 << 8 | b2, 1);
          var y0 = Math.floor(i * sh / steps);
          gfx.fillRect(0, y0, sw, Math.ceil(sh / steps) + 1);
        }
      };
      var isEveryEnd = function isEveryEnd(levelId) {
        return levelId === "level_99";
      };
      var fadeIn = this.add.graphics().setScrollFactor(0).setDepth(200);
      fadeIn.fillStyle(0x000000, 1);
      fadeIn.fillRect(0, 0, sw, sh);
      this.tweens.add({
        targets: fadeIn,
        alpha: 0,
        duration: 300,
        ease: "Linear",
        onComplete: function onComplete() {
          return fadeIn.destroy();
        }
      });
      var overlay = this.add.graphics().setScrollFactor(0).setDepth(150);
      drawOverlay(overlay, bgHex, isEveryEnd(window.currentlevel[2]));
      this._levelSelectOverlay = overlay;
      var tableBottom = this.add.image(cx, -24, "GJ_GameSheet03", "GJ_table_bottom_001.png").setScrollFactor(0).setDepth(152).setOrigin(0.5, 0);
      var groundY = sh + 175;
      var groundId = window._groundId || "00";
      var groundFrame = this.textures.getFrame("groundSquare_" + groundId + "_001.png");
      var tileW = groundFrame ? groundFrame.width : 1012;
      var numTiles = Math.ceil(sw / tileW) + 2;
      var groundTintHex = function groundTintHex(colorHex) {
        var r = Math.round((colorHex >> 16 & 0xff) * 0.45);
        var g = Math.round((colorHex >> 8 & 0xff) * 0.45);
        var b = Math.round((colorHex & 0xff) * 0.45);
        return r << 16 | g << 8 | b;
      };
      var staticGroundTiles = [];
      for (var gi = 0; gi < numTiles; gi++) {
        var gt = this.add.image(gi * tileW, groundY, "groundSquare_" + groundId + "_001.png").setScrollFactor(0).setDepth(152).setOrigin(0, 1).setTint(groundTintHex(groundHex));
        staticGroundTiles.push(gt);
      }
      var floorLineFrame = this.textures.getFrame("GJ_WebSheet", "floorLine_01_001.png");
      var floorLineW = floorLineFrame ? floorLineFrame.width : 888;
      var floorLineScale = sw / floorLineW;
      var groundTileH = groundFrame ? groundFrame.height : 80;
      var staticFloorLine = this.add.image(cx, groundY - groundTileH, "GJ_WebSheet", "floorLine_01_001.png").setScrollFactor(0).setDepth(153).setOrigin(0.5, 0.5).setScale(floorLineScale, 1).setBlendMode(S);
      var cornerBL = this.add.image(0, sh, "GJ_GameSheet03", "GJ_sideArt_001.png").setScrollFactor(0).setDepth(152).setOrigin(1, 1).setFlipY(true);
      var cornerBR = this.add.image(sw, sh, "GJ_GameSheet03", "GJ_sideArt_001.png").setScrollFactor(0).setDepth(152).setOrigin(1, 0).setFlipY(false);
      var backBtn = this.add.image(50, 48, "GJ_GameSheet03", "GJ_arrow_01_001.png").setScrollFactor(0).setDepth(154).setFlipX(true).setScale(1, -1).setRotation(Math.PI).setInteractive();
      backBtn.on("pointerdown", function () {
        backBtn._pressed = true;
        _this3.tweens.killTweensOf(backBtn);
        _this3.tweens.add({
          targets: backBtn,
          scaleX: 1.26,
          scaleY: -1.26,
          duration: 300,
          ease: "Bounce.Out"
        });
      });
      backBtn.on("pointerout", function () {
        if (backBtn._pressed) {
          backBtn._pressed = false;
          _this3.tweens.killTweensOf(backBtn);
          _this3.tweens.add({
            targets: backBtn,
            scaleX: 1,
            scaleY: -1,
            duration: 400,
            ease: "Bounce.Out"
          });
        }
      });
      backBtn.on("pointerup", function () {
        if (backBtn._pressed) {
          backBtn._pressed = false;
          _this3.tweens.killTweensOf(backBtn);
          backBtn.setScale(1, -1);
          _this3._closeLevelSelect();
        }
      });
      var infoBtn = this.add.image(sw - 40, 40, "GJ_GameSheet03", "GJ_infoIcon_001.png").setScrollFactor(0).setDepth(154).setInteractive();
      var arrowL = this.add.image(55, cy - 25, "GJ_GameSheet03", "navArrowBtn_001.png").setScrollFactor(0).setDepth(154).setScale(1.1).setFlipX(true).setInteractive();
      var arrowR = this.add.image(sw - 55, cy - 25, "GJ_GameSheet03", "navArrowBtn_001.png").setScrollFactor(0).setDepth(154).setScale(1.1).setFlipX(false).setInteractive();
      var allLevels = window.allLevels || [];
      var dotY = sh - 36;
      var maxDots = Math.min(allLevels.length, 28);
      var dotSpacing = 27;
      var dotStartX = cx - (maxDots - 1) * dotSpacing / 2;
      var dotObjs = [];
      var refreshDots = function refreshDots() {
        for (var _i10 = 0, _dotObjs = dotObjs; _i10 < _dotObjs.length; _i10++) {
          var _d = _dotObjs[_i10];
          _d.destroy();
        }
        dotObjs.length = 0;
        var idx = allLevels.findIndex(function (l) {
          return l[2] === window.currentlevel[2];
        });
        for (var di = 0; di < maxDots; di++) {
          var active = di === idx;
          var _d2 = _this3.add.graphics().setScrollFactor(0).setDepth(153);
          _d2.fillStyle(0xffffff, active ? 1 : 0.3);
          _d2.fillCircle(dotStartX + di * dotSpacing, dotY, 7);
          dotObjs.push(_d2);
        }
      };
      refreshDots();
      var cardW = Math.min(700, sw - 180);
      var cardH = 180;
      var cardX = cx;
      var cardY = cy - 100;
      var cardSlideContainer = this.add.container(0, 0).setScrollFactor(0).setDepth(152);
      var cardBounceContainer = this.add.container(cardX, cardY).setScrollFactor(0).setDepth(0);
      cardSlideContainer.add(cardBounceContainer);
      var cardContainer = cardSlideContainer;
      var cardBg = this.add.graphics();
      var drawCardBg = function drawCardBg(colorHex) {
        var dark = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        cardBg.clear();
        var mul = dark ? 0.10 : 0.22;
        var r = Math.round((colorHex >> 16 & 0xff) * mul);
        var g = Math.round((colorHex >> 8 & 0xff) * mul);
        var b = Math.round((colorHex & 0xff) * mul);
        cardBg.fillStyle(r << 16 | g << 8 | b, 0.92);
        cardBg.fillRoundedRect(-cardW / 2, -cardH / 2, cardW, cardH, 14);
      };
      drawCardBg(bgHex, isEveryEnd(window.currentlevel[2]));
      cardBounceContainer.add(cardBg);
      var cardHit = this.add.zone(cardX, cardY, cardW, cardH).setScrollFactor(0).setDepth(156).setInteractive();
      var dragState = {
        pressed: false,
        dragging: false,
        startX: 0,
        lastX: 0,
        velSamples: [],
        get vel() {
          if (!this.velSamples.length) return 0;
          return this.velSamples.reduce(function (a, b) {
            return a + b;
          }, 0) / this.velSamples.length;
        },
        pushVel: function pushVel(v) {
          this.velSamples.push(v);
          if (this.velSamples.length > 5) this.velSamples.shift();
        },
        reset: function reset() {
          this.pressed = false;
          this.dragging = false;
          this.velSamples = [];
        }
      };
      var onDragStart = function onDragStart(ptr) {
        dragState.pressed = true;
        dragState.startX = ptr.x;
        dragState.lastX = ptr.x;
        dragState.dragging = false;
        dragState.velSamples = [];
      };
      cardHit.on("pointerdown", function (ptr) {
        onDragStart(ptr);
        _this3.tweens.killTweensOf(cardBounceContainer, "scale");
        _this3.tweens.add({
          targets: cardBounceContainer,
          scale: 1.26,
          duration: 300,
          ease: "Bounce.Out"
        });
      });
      var onDragMove = function onDragMove(ptr) {
        if (!dragState.pressed) return;
        var dx = ptr.x - dragState.startX;
        var frameDelta = ptr.x - dragState.lastX;
        dragState.pushVel(frameDelta);
        dragState.lastX = ptr.x;
        if (!dragState.dragging && Math.abs(dx) > 12) {
          dragState.dragging = true;
          _this3.tweens.killTweensOf(cardBounceContainer, "scale");
          _this3.tweens.add({
            targets: cardBounceContainer,
            scale: 1,
            duration: 200,
            ease: "Quad.Out"
          });
        }
        if (dragState.dragging) {
          cardContainer.x = dx;
        }
      };
      var onDragUp = function onDragUp(ptr) {
        if (!dragState.pressed) return;
        var wasDragging = dragState.dragging;
        var totalDx = ptr.x - dragState.startX;
        var vel = dragState.vel;
        dragState.reset();
        if (wasDragging) {
          var dragThreshold = cardW * 0.18;
          if (Math.abs(totalDx) > dragThreshold || Math.abs(vel) > 3) {
            var dir = totalDx < 0 ? 1 : -1;
            switchLevel(dir, cardContainer.x, vel);
          } else {
            if (_currentAnimUpdate) {
              _this3.events.off("preupdate", _currentAnimUpdate);
              _currentAnimUpdate = null;
            }
            var snapX = cardContainer.x;
            var snapVel = vel * 40;
            var _snapUpdate = function snapUpdate(time, delta) {
              var dt = Math.min(delta / 1000, 0.05);
              var tension = 400;
              var friction = 18;
              var force = -tension * snapX - friction * snapVel;
              snapVel += force * dt;
              snapX += snapVel * dt;
              if (Math.abs(snapX) < 0.5 && Math.abs(snapVel) < 5) {
                snapX = 0;
                _this3.events.off("preupdate", _snapUpdate);
                if (_currentAnimUpdate === _snapUpdate) _currentAnimUpdate = null;
              }
              cardContainer.x = snapX;
            };
            _currentAnimUpdate = _snapUpdate;
            _this3.events.on("preupdate", _snapUpdate);
          }
        } else {
          if (ptr.x >= cardX - cardW / 2 && ptr.x <= cardX + cardW / 2 && ptr.y >= cardY - cardH / 2 && ptr.y <= cardY + cardH / 2) {
            _this3.input.enabled = false;
            var lvl = window.currentlevel;
            var songID = lvl[0];
            var levelFileName = lvl[2];
            var songFileName = lvl[4] ? lvl[4] : lvl[1].replaceAll(" ", "");
            var loadingText = _this3.add.bitmapText(cx, cy, "goldFont", "Downloading Level Assets...", 20).setOrigin(0.5).setDepth(200);
            _this3.load.text(levelFileName, "assets/levels/" + levelFileName.split("_")[1] + ".txt");
            // Audio is played by the backend (PowerShell MediaPlayer via WebSocket), not the Phaser loader
            _this3.load.once("complete", function () {
              loadingText.destroy();
              _this3._audio.playEffect("playSound_01", {
                volume: _this3._sfxVolume
              });
              _this3._closeLevelSelect(true);
              _this3._audio.stopMusic();
              _this3.input.enabled = true;
              _this3.game.registry.set("autoStartGame", true);
              _this3.scene.restart();
            });
            _this3.load.start();
            _this3.tweens.killTweensOf(cardBounceContainer, "scale");
            cardBounceContainer.setScale(1);
          } else {
            _this3.tweens.killTweensOf(cardBounceContainer, "scale");
            _this3.tweens.add({
              targets: cardBounceContainer,
              scale: 1,
              duration: 200,
              ease: "Quad.Out"
            });
          }
        }
      };
      this.input.on("pointermove", onDragMove);
      this.input.on("pointerup", onDragUp);
      var _origClose = this._closeLevelSelect.bind(this);
      var _patchedClose = function _patchedClose(doTransition) {
        _this3.input.off("pointermove", onDragMove);
        _this3.input.off("pointerup", onDragUp);
        _this3._closeLevelSelect = _origClose;
        _origClose(doTransition);
      };
      this._closeLevelSelect = _patchedClose;
      var cardContentObjs = [];
      var buildCardContent = function buildCardContent() {
        for (var _i11 = 0, _cardContentObjs = cardContentObjs; _i11 < _cardContentObjs.length; _i11++) {
          var _o2 = _cardContentObjs[_i11];
          _this3.tweens.killTweensOf(_o2);
          _o2.destroy();
        }
        cardContentObjs.length = 0;
        var lvl = window.currentlevel;
        var levelId = lvl[2] || "level_1";
        var levelDifficultyMap = {
          "level_1": "diffIcon_01_btn_001",
          "level_2": "diffIcon_01_btn_001",
          "level_3": "diffIcon_02_btn_001",
          "level_4": "diffIcon_02_btn_001",
          "level_5": "diffIcon_03_btn_001",
          "level_6": "diffIcon_03_btn_001",
          "level_7": "diffIcon_04_btn_001",
          "level_8": "diffIcon_04_btn_001",
          "level_9": "diffIcon_04_btn_001",
          "level_10": "diffIcon_05_btn_001",
          "level_11": "diffIcon_05_btn_001",
          "level_12": "diffIcon_05_btn_001",
          "level_13": "diffIcon_05_btn_001",
          "level_14": "diffIcon_06_btn_001",
          "level_15": "diffIcon_05_btn_001",
          "level_16": "diffIcon_05_btn_001",
          "level_17": "diffIcon_04_btn_001",
          "level_18": "diffIcon_06_btn_001",
          "level_19": "diffIcon_04_btn_001",
          "level_20": "diffIcon_06_btn_001",
          "level_21": "diffIcon_05_btn_001",
          "level_22": "diffIcon_05_btn_001",
          "level_99": "diffIcon_10_btn_001",
          "level_100": "diffIcon_10_btn_001",
          "level_137409445": "diffIcon_00_btn_001",
          "level_5703070": "diffIcon_07_btn_001",
          "level_137677336": "diffIcon_00_btn_001",
          "level_116489424": "diffIcon_00_btn_001",
          "level_4284013": "diffIcon_06_btn_001",
          "level_56199846": "diffIcon_04_btn_001",
          "level_23": "diffIcon_10_btn_001"
        };
        var diffIconKey = levelDifficultyMap[levelId] || "diffIcon_05_btn_001";
        var diffFrame = diffIconKey + ".png";
        var iconX = cardX - cardW / 2 + 52;
        var isHardDemon = diffIconKey === "diffIcon_06_btn_001";
        var iconRotation = isHardDemon ? Math.PI / 2 : 0;
        var demonIcon = _this3.add.image(iconX - cardX, 0, "GJ_GameSheet03", diffFrame).setScrollFactor(0).setDepth(155).setScale(1).setOrigin(0.5, 0.5).setRotation(iconRotation).setFlipY(isHardDemon);
        cardContentObjs.push(demonIcon);
        cardBounceContainer.add(demonIcon);
        var maxIconH = cardH - 16;
        var maxIconW = 80;
        var iconFrame = _this3.textures.getFrame("GJ_GameSheet03", diffFrame);
        var finalIconScale = 1;
        if (iconFrame) {
          var scaleForH = maxIconH / iconFrame.height;
          var scaleForW = maxIconW / iconFrame.width;
          finalIconScale = Math.min(1, scaleForH, scaleForW);
          demonIcon.setScale(finalIconScale);
        }
        var iconDisplayW = (iconFrame ? iconFrame.width : 80) * finalIconScale;
        var iconDisplayH = (iconFrame ? iconFrame.height : 80) * finalIconScale;
        var nameLabel = _this3.add.bitmapText(0, 0, "bigFont", lvl[1], 50).setScrollFactor(0).setDepth(155).setOrigin(0, 0.5);
        var gap = 25;
        var naturalGroupW = iconDisplayW + gap + nameLabel.width;
        var naturalGroupH = Math.max(iconDisplayH, nameLabel.height);
        var cardPad = 16;
        var maxGroupW = cardW - cardPad * 2;
        var maxGroupH = cardH - cardPad * 2;
        var groupScale = Math.min(1, maxGroupW / naturalGroupW, maxGroupH / naturalGroupH);
        var scaledIconW = iconDisplayW * groupScale;
        var scaledLabelW = nameLabel.width * groupScale;
        var scaledGap = gap * groupScale;
        var totalW = scaledIconW + scaledGap + scaledLabelW;
        var groupStartX = cardX - totalW / 2;
        demonIcon.setScale(finalIconScale * groupScale);
        demonIcon.setPosition(groupStartX + scaledIconW / 2 - cardX, 0);
        nameLabel.setScale(groupScale);
        nameLabel.setPosition(groupStartX + scaledIconW + scaledGap - cardX, 0);
        cardContentObjs.push(nameLabel);
        cardBounceContainer.add(nameLabel);
      };
      var barAreaY = cardY + cardH / 2 + 100;
      var barW2 = Math.min(600, sw - 200);
      var barH2 = 36;
      var barX0 = cx - barW2 / 2;
      var barObjs = [];
      var buildBar = function buildBar() {
        for (var _i12 = 0, _barObjs = barObjs; _i12 < _barObjs.length; _i12++) {
          var _o3 = _barObjs[_i12];
          _this3.tweens.killTweensOf(_o3);
          _o3.destroy();
        }
        barObjs.length = 0;
        var bestNormal = parseFloat(localStorage.getItem("bestPercent_" + (window.currentlevel[2] || "level_1")) || "0");
        var modeLabel = _this3.add.bitmapText(cx, barAreaY - 40, "bigFont", "Normal Mode", 30).setScrollFactor(0).setDepth(155).setOrigin(0.5, 0.5);
        barObjs.push(modeLabel);
        cardContainer.add(modeLabel);
        var barBg = _this3.add.graphics().setScrollFactor(0).setDepth(154);
        barBg.fillStyle(0x000000, 0.6);
        barBg.fillRoundedRect(barX0, barAreaY - barH2 / 2, barW2, barH2, barH2 / 2);
        barObjs.push(barBg);
        cardContainer.add(barBg);
        var padding = 3;
        var innerH2 = barH2 - padding * 2;
        var innerW2 = barW2 - padding * 2;
        var innerRadius = innerH2 / 2;
        var fillW = Math.max(innerH2, innerW2 * bestNormal / 100);
        if (bestNormal > 0) {
          var barFg = _this3.add.graphics().setScrollFactor(0).setDepth(155);
          barFg.fillStyle(0x00FF00, 1);
          var rightR = bestNormal >= 100 ? innerRadius : 0;
          barFg.fillRoundedRect(barX0 + padding, barAreaY - barH2 / 2 + padding, fillW, innerH2, {
            tl: innerRadius,
            bl: innerRadius,
            tr: rightR,
            br: rightR
          });
          barObjs.push(barFg);
          cardContainer.add(barFg);
        }
        var pctLabel = _this3.add.bitmapText(cx, barAreaY, "bigFont", Math.round(bestNormal) + "%", 22).setScrollFactor(0).setDepth(156).setOrigin(0.5, 0.5);
        barObjs.push(pctLabel);
        cardContainer.add(pctLabel);
        var bestPractice = parseFloat(localStorage.getItem("practiceBestPercent_" + (window.currentlevel[2] || "level_1")) || "0");
        var practBarAreaY = barAreaY + barH2 + 48;
        var practModeLabel = _this3.add.bitmapText(cx, practBarAreaY - 40, "bigFont", "Practice Mode", 30).setScrollFactor(0).setDepth(155).setOrigin(0.5, 0.5);
        barObjs.push(practModeLabel);
        cardContainer.add(practModeLabel);
        var practBarBg = _this3.add.graphics().setScrollFactor(0).setDepth(154);
        practBarBg.fillStyle(0x000000, 0.6);
        practBarBg.fillRoundedRect(barX0, practBarAreaY - barH2 / 2, barW2, barH2, barH2 / 2);
        barObjs.push(practBarBg);
        cardContainer.add(practBarBg);
        if (bestPractice > 0) {
          var practFillW = Math.max(innerH2, innerW2 * bestPractice / 100);
          var practBarFg = _this3.add.graphics().setScrollFactor(0).setDepth(155);
          practBarFg.fillStyle(0x00FFFF, 1);
          var practRightR = bestPractice >= 100 ? innerRadius : 0;
          practBarFg.fillRoundedRect(barX0 + padding, practBarAreaY - barH2 / 2 + padding, practFillW, innerH2, {
            tl: innerRadius,
            bl: innerRadius,
            tr: practRightR,
            br: practRightR
          });
          barObjs.push(practBarFg);
          cardContainer.add(practBarFg);
        }
        var practPctLabel = _this3.add.bitmapText(cx, practBarAreaY, "bigFont", Math.round(bestPractice) + "%", 22).setScrollFactor(0).setDepth(156).setOrigin(0.5, 0.5);
        barObjs.push(practPctLabel);
        cardContainer.add(practPctLabel);
      };
      buildCardContent();
      buildBar();
      var _currentAnimUpdate = null;
      var switchLevel = function switchLevel(dir) {
        var startX = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var dragVel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        if (!window.allLevels || window.allLevels.length === 0) return;
        if (_currentAnimUpdate) {
          _this3.events.off("preupdate", _currentAnimUpdate);
          _currentAnimUpdate = null;
        }
        var idx = window.allLevels.findIndex(function (l) {
          return l[2] === window.currentlevel[2];
        });
        idx = (idx + dir + window.allLevels.length) % window.allLevels.length;
        window.currentlevel = _toConsumableArray(window.allLevels[idx]);
        var newColors = _this3._parseLevelColors(window.currentlevel[2]);
        var dark = isEveryEnd(window.currentlevel[2]);
        var slideDist = cardW - 200;
        var slideOutTarget = -dir * slideDist;
        var slideInStart = dir * slideDist;
        _this3.tweens.killTweensOf(cardContainer);
        var state = "out";
        var currentX = startX !== null ? startX : cardContainer.x;
        var dragSpeedBoost = Math.abs(dragVel) * 60;
        var slideOutSpeed = slideDist * 14 + dragSpeedBoost;
        var slideInVel = slideDist * 6 + dragSpeedBoost;
        var vel = 0;
        var _scrollAnimUpdate = function scrollAnimUpdate(time, delta) {
          var dt = Math.min(delta / 1000, 0.05);
          if (state === "out") {
            currentX += -dir * slideOutSpeed * dt;
            if (dir > 0 && currentX <= slideOutTarget || dir < 0 && currentX >= slideOutTarget) {
              for (var _i13 = 0, _cardContentObjs2 = cardContentObjs; _i13 < _cardContentObjs2.length; _i13++) {
                var _o4 = _cardContentObjs2[_i13];
                cardBounceContainer.remove(_o4, false);
                _o4.destroy();
              }
              for (var _i14 = 0, _barObjs2 = barObjs; _i14 < _barObjs2.length; _i14++) {
                var _o5 = _barObjs2[_i14];
                cardSlideContainer.remove(_o5, false);
                _o5.destroy();
              }
              cardContentObjs.length = 0;
              barObjs.length = 0;
              drawCardBg(newColors.bgHex, dark);
              buildCardContent();
              buildBar();
              drawOverlay(overlay, newColors.bgHex, dark);
              for (var _i15 = 0, _staticGroundTiles = staticGroundTiles; _i15 < _staticGroundTiles.length; _i15++) {
                var _gt = _staticGroundTiles[_i15];
                _gt.setTint(groundTintHex(newColors.groundHex));
              }
              refreshDots();
              state = "in";
              currentX = slideInStart;
              vel = -dir * slideInVel;
            }
          } else if (state === "in") {
            var tension = 300;
            var friction = 15;
            var force = -tension * currentX - friction * vel;
            vel += force * dt;
            currentX += vel * dt;
            if (Math.abs(currentX) < 1 && Math.abs(vel) < 15) {
              currentX = 0;
              _this3.events.off("preupdate", _scrollAnimUpdate);
              if (_currentAnimUpdate === _scrollAnimUpdate) _currentAnimUpdate = null;
            }
          }
          cardContainer.x = currentX;
        };
        _currentAnimUpdate = _scrollAnimUpdate;
        _this3.events.on("preupdate", _scrollAnimUpdate);
      };
      this._makeBouncyButton(arrowL, 1.1, function () {
        switchLevel(-1);
      });
      this._makeBouncyButton(arrowR, 1.1, function () {
        switchLevel(1);
      });
      var inputBlocker = this.add.zone(cx, cy, sw, sh).setScrollFactor(0).setDepth(151).setInteractive();
      inputBlocker.on("pointerdown", onDragStart);
      this._levelSelectStaticObjs = [overlay, inputBlocker, tableBottom].concat(staticGroundTiles, [staticFloorLine, cornerBL, cornerBR, backBtn, infoBtn, arrowL, arrowR, cardSlideContainer, cardHit]);
      this._levelSelectSwitchLevel = switchLevel;
      this._levelSelectDotObjs = dotObjs;
      this._levelSelectCardContent = cardContentObjs;
      this._levelSelectBarObjs = barObjs;
    }
  }, {
    key: "_closeLevelSelect",
    value: function _closeLevelSelect() {
      var _this4 = this;
      var silent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      if (!this._levelSelectOverlay) return;
      var destroy = function destroy() {
        var all = [].concat(_toConsumableArray(_this4._levelSelectStaticObjs || []), _toConsumableArray(_this4._levelSelectDotObjs || []), _toConsumableArray(_this4._levelSelectCardContent || []), _toConsumableArray(_this4._levelSelectBarObjs || []));
        var _iterator21 = _createForOfIteratorHelper(all),
          _step21;
        try {
          for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
            var _o6 = _step21.value;
            if (_o6 && _o6.destroy) {
              _this4.tweens.killTweensOf(_o6);
              _o6.destroy();
            }
          }
        } catch (err) {
          _iterator21.e(err);
        } finally {
          _iterator21.f();
        }
        _this4._levelSelectOverlay = null;
        _this4._levelSelectStaticObjs = null;
        _this4._levelSelectDotObjs = null;
        _this4._levelSelectCardContent = null;
        _this4._levelSelectBarObjs = null;
        _this4._levelSelectSwitchLevel = null;
      };
      if (silent) {
        destroy();
        return;
      }
      var sw = screenWidth;
      var sh = screenHeight;
      var fadeOut = this.add.graphics().setScrollFactor(0).setDepth(200).setAlpha(0);
      fadeOut.fillStyle(0x000000, 1);
      fadeOut.fillRect(0, 0, sw, sh);
      this.tweens.add({
        targets: fadeOut,
        alpha: 1,
        duration: 150,
        ease: "Linear",
        onComplete: function onComplete() {
          destroy();
          _this4.tweens.add({
            targets: fadeOut,
            alpha: 0,
            duration: 150,
            ease: "Linear",
            onComplete: function onComplete() {
              return fadeOut.destroy();
            }
          });
        }
      });
    }
  }, {
    key: "_buildHUD",
    value: function _buildHUD() {
      var _this5 = this;
      this._attemptsLabel = this.add.bitmapText(0, 0, "bigFont", "Attempt 1", 65).setOrigin(0.5, 0.5).setVisible(false);
      this._level.topContainer.add(this._attemptsLabel);
      this._positionAttemptsLabel();
      this._checkpointBtnContainer = this.add.container(screenWidth / 2, screenHeight - 60).setScrollFactor(0).setDepth(30).setVisible(false);
      this._checkpointBtn = this.add.image(-50, 0, "GJ_GameSheet03", "GJ_checkpointBtn_001.png").setOrigin(0.5, 0.5).setInteractive().setScale(0.8);
      this._makeBouncyButton(this._checkpointBtn, 0.8, function () {
        if (_this5._practicedMode.practiceMode && !_this5._state.isDead && !_this5._menuActive && !_this5._slideIn) {
          _this5._practicedMode.saveCheckpoint(_this5._state, _this5._playerWorldX, _this5._cameraX, _this5);
        }
      });
      this._expandHitArea(this._checkpointBtn, 2);
      this._clearCheckpointBtn = this.add.image(50, 0, "GJ_GameSheet03", "GJ_removeCheckBtn_001.png").setOrigin(0.5, 0.5).setInteractive().setScale(0.8);
      this._makeBouncyButton(this._clearCheckpointBtn, 0.8, function () {
        if (_this5._practicedMode.practiceMode && !_this5._state.isDead && !_this5._menuActive && !_this5._slideIn) {
          _this5._practicedMode.deleteLastCheckpoint();
        }
      });
      this._expandHitArea(this._clearCheckpointBtn, 1.5);
      this._checkpointBtnContainer.add([this._checkpointBtn, this._clearCheckpointBtn]);
      this._fpsText = this.add.text(screenWidth - 20, 10, "", {
        fontSize: "28px",
        fill: "#ffffff",
        fontFamily: "Arial"
      }).setOrigin(1, 0).setScrollFactor(0).setDepth(999).setVisible(false);
      this._fpsAccum = 0;
      this._fpsFrames = 0;
    }
  }, {
    key: "_createStartPosGui",
    value: function _createStartPosGui() {
      var _this6 = this;
      var centerX = screenWidth / 2;
      var bottomY = screenHeight - 60;
      this._startPosGui = this.add.container(centerX, bottomY).setScrollFactor(0).setDepth(100);
      this._startPosGui.setVisible(false);
      var leftArrow = this.add.image(-90, 0, "GJ_GameSheet03", "GJ_arrow_01_001.png").setScale(0.6).setInteractive();
      var rightArrow = this.add.image(90, 0, "GJ_GameSheet03", "GJ_arrow_01_001.png").setScale(0.6).setFlipX(true).setInteractive();
      var positions = this._level.getStartPositions();
      var total = positions.length;
      this._startPosText = this.add.bitmapText(0, 0, "bigFont", "0/".concat(total), 40).setOrigin(0.5);
      this._startPosGui.add([leftArrow, rightArrow, this._startPosText]);
      this._makeBouncyButton(leftArrow, 0.6, function () {
        return _this6.changeStartPos(-1);
      });
      this._makeBouncyButton(rightArrow, 0.6, function () {
        return _this6.changeStartPos(1);
      });
    }
  }, {
    key: "changeStartPos",
    value: function changeStartPos(direction) {
      if (this._paused || this._levelWon || this._menuActive || this._slideIn) return;
      var positions = this._level.getStartPositions();
      var totalPositions = positions.length;
      if (totalPositions === 0) return;
      this._startPosIndex += direction;
      if (this._startPosIndex < -1) {
        this._startPosIndex = totalPositions - 1;
      } else if (this._startPosIndex >= totalPositions) {
        this._startPosIndex = -1;
      }
      if (this._startPosText) {
        var currentId = this._startPosIndex === -1 ? 0 : this._startPosIndex + 1;
        this._startPosText.setText("".concat(currentId, "/").concat(totalPositions));
      }
      this._practicedMode.clearCheckpoints();
      this._restartLevel();
    }
  }, {
    key: "toggleGlitter",
    value: function toggleGlitter(_0x34c21a) {
      if (_0x34c21a) {
        this._glitterEmitter.start();
      } else {
        this._glitterEmitter.stop();
      }
    }
  }, {
    key: "_setParticleTimeScale",
    value: function _setParticleTimeScale(timeScale) {
      var _updateTimeScale = function updateTimeScale(object) {
        if (object && object.type === "ParticleEmitter") {
          object.timeScale = timeScale;
        }
        if (object && object.list) {
          object.list.forEach(_updateTimeScale);
        }
      };
      _updateTimeScale(this._level.container);
      _updateTimeScale(this._level.topContainer);
      if (this._glitterEmitter) {
        this._glitterEmitter.timeScale = timeScale;
      }
    }
  }, {
    key: "_pauseGame",
    value: function _pauseGame() {
      if (!this._paused && !this._menuActive && !this._slideIn && !this._state.isDead && !this._levelWon) {
        this._paused = true;
        this._pauseBtn.setVisible(false);
        this._audio.pauseMusic();
        this._setParticleTimeScale(0);
        this._buildPauseOverlay();
      }
    }
  }, {
    key: "_resumeGame",
    value: function _resumeGame() {
      if (this._paused) {
        this._setParticleTimeScale(1);
        this._paused = false;
        this._pauseBtn.setVisible(true).setAlpha(75 / 255);
        this._audio.resumeMusic();
        this._audio._ensureCorrectMusicMode();
        if (this._settingsPopup) {
          this._settingsPopup.destroy();
          this._settingsPopup = null;
        }
        if (this._pauseContainer) {
          this._pauseContainer.destroy();
          this._pauseContainer = null;
        }
      }
    }
  }, {
    key: "_createPauseToggleButton",
    value: function _createPauseToggleButton(_0x5376fd, _0x3b6200, _0x2b25c8, _0xe203c3, _0x268e2b, _0x2d04c4) {
      var _this7 = this;
      var _0x4864cc = this.add.container(_0x3b6200, _0x2b25c8);
      var pieceHeight = this.add.image(0, 0, "GJ_GameSheet03", _0x268e2b ? "GJ_checkOn_001.png" : "GJ_checkOff_001.png").setScale(0.7).setInteractive();
      var _0x15c0df = this.add.bitmapText(25 + 10, 0, "bigFont", _0xe203c3, 32).setOrigin(0, 0.5);
      _0x4864cc.add([pieceHeight, _0x15c0df]);
      _0x5376fd.add(_0x4864cc);
      var _0x232e51 = function _0x232e51(_0x1dce15) {
        pieceHeight.setTexture("GJ_GameSheet03", _0x1dce15 ? "GJ_checkOn_001.png" : "GJ_checkOff_001.png");
        _this7._expandHitArea(pieceHeight, 2);
        _0x2d04c4(_0x1dce15);
      };
      this._expandHitArea(pieceHeight, 2);
      this._makeBouncyButton(pieceHeight, 0.7, function () {
        _0x232e51(pieceHeight.frame.name === "GJ_checkOff_001.png");
      }, function () {
        return _this7._paused && !!_this7._pauseContainer;
      });
      _0x15c0df.setInteractive();
      _0x15c0df.on("pointerdown", function () {
        if (_this7._paused && _this7._pauseContainer) {
          _0x232e51(pieceHeight.frame.name === "GJ_checkOff_001.png");
        }
      });
      return _0x4864cc;
    }
  }, {
    key: "_buildPauseOverlay",
    value: function _buildPauseOverlay() {
      var _this8 = this;
      var textureY = screenWidth / 2;
      var _0xf70e04 = 320;
      var _0x4eb71b = screenWidth - 40;
      this._pauseContainer = this.add.container(0, 0).setScrollFactor(0).setDepth(100);
      var _0x505665 = this.add.rectangle(textureY, _0xf70e04, screenWidth, screenHeight, 0, 75 / 255);
      _0x505665.setInteractive();
      this._pauseContainer.add(_0x505665);
      var _0x103191 = this.textures.get("square04_001").source[0].width * 0.325;
      var _0x954813 = this._drawScale9(textureY, _0xf70e04, _0x4eb71b, 600, "square04_001", _0x103191, 0, 150 / 255);
      this._pauseContainer.add(_0x954813);
      // fullscreen button removed for Awesomium
      var settingsBtn = this.add.image(textureY + _0x4eb71b / 2 - 60, 80, 'GJ_GameSheet03', "GJ_optionsBtn_001.png").setScale(0.64).setInteractive();
      this._expandHitArea(settingsBtn, 2.5);
      this._pauseContainer.add(settingsBtn);
      this._makeBouncyButton(settingsBtn, 0.64, function () {
        return _this8._buildSettingsPopup();
      });
      this._pauseContainer.add(this.add.bitmapText(textureY, 65, "bigFont", window.currentlevel[1], 40).setOrigin(0.5, 0.5));
      var _0x21dacf = 170;
      var _0x46bab2 = this._bestPercent || 0;
      var _0x38b8d1 = this.add.image(textureY, _0x21dacf, "GJ_WebSheet", "GJ_progressBar_001.png").setTint(0).setAlpha(125 / 255);
      this._pauseContainer.add(_0x38b8d1);
      var _0x1d49a9 = this.textures.getFrame("GJ_WebSheet", "GJ_progressBar_001.png");
      var _0xb5ab6f = _0x1d49a9 ? _0x1d49a9.width : 680;
      var _0x1e6502 = _0x1d49a9 ? _0x1d49a9.height : 40;
      var _0x3782ca = Math.max(1, Math.floor(_0xb5ab6f * (_0x46bab2 / 100)));
      var _0x3d0987 = this.add.image(0, 0, "GJ_WebSheet", "GJ_progressBar_001.png").setTint(65280).setScale(0.992, 0.86).setOrigin(0, 0.5).setCrop(0, 0, _0x3782ca, _0x1e6502);
      _0x3d0987.setPosition(textureY - _0xb5ab6f * 0.992 / 2, _0x21dacf);
      this._pauseContainer.add(_0x3d0987);
      this._pauseContainer.add(this.add.bitmapText(textureY, _0x21dacf, "bigFont", _0x46bab2 + "%", 30).setOrigin(0.5, 0.5).setScale(0.7));
      this._pauseContainer.add(this.add.bitmapText(textureY, 130, "bigFont", "Normal Mode", 30).setOrigin(0.5, 0.5).setScale(0.78));
      var _pausePractPct = this._practiceBestPercent || 0;
      var _pausePractBarY = 255;
      var _pausePractBarImg = this.add.image(textureY, _pausePractBarY, "GJ_WebSheet", "GJ_progressBar_001.png").setTint(0).setAlpha(125 / 255);
      this._pauseContainer.add(_pausePractBarImg);
      var _pausePractFrame = this.textures.getFrame("GJ_WebSheet", "GJ_progressBar_001.png");
      var _pausePractBarW = _pausePractFrame ? _pausePractFrame.width : 680;
      var _pausePractBarH = _pausePractFrame ? _pausePractFrame.height : 40;
      var _pausePractFillW = Math.max(1, Math.floor(_pausePractBarW * (_pausePractPct / 100)));
      var _pausePractFg = this.add.image(0, 0, "GJ_WebSheet", "GJ_progressBar_001.png").setTint(0x00FFFF).setScale(0.992, 0.86).setOrigin(0, 0.5).setCrop(0, 0, _pausePractFillW, _pausePractBarH);
      _pausePractFg.setPosition(textureY - _pausePractBarW * 0.992 / 2, _pausePractBarY);
      this._pauseContainer.add(_pausePractFg);
      this._pauseContainer.add(this.add.bitmapText(textureY, _pausePractBarY, "bigFont", _pausePractPct + "%", 30).setOrigin(0.5, 0.5).setScale(0.7));
      this._pauseContainer.add(this.add.bitmapText(textureY, _pausePractBarY - 40, "bigFont", "Practice Mode", 30).setOrigin(0.5, 0.5).setScale(0.78));
      var _0x4791ac = [{
        frame: this._practicedMode.practiceMode ? "GJ_normalBtn_001.png" : "GJ_practiceBtn_001.png",
        atlas: "GJ_GameSheet03",
        action: null
      }, {
        frame: "GJ_playBtn2_001.png",
        atlas: "GJ_WebSheet",
        action: function action() {
          return _this8._resumeGame();
        }
      }, {
        frame: "GJ_menuBtn_001.png",
        atlas: "GJ_WebSheet",
        action: function action() {
          _this8._audio.playEffect("quitSound_01", { volume: _this8._sfxVolume });
          _this8._audio.stopMusic();
          _this8._resumeGame();
          _this8.scene.restart();
        }
      }, {
        frame: "GJ_replayBtn_001.png",
        atlas: "GJ_WebSheet",
        action: function action() {
          _this8._resumeGame();
          _this8._restartLevel();
        }
      }];
      var _0x25aa59 = _0x4791ac.map(function (btn) {
        var _this8$textures$getFr;
        return ((_this8$textures$getFr = _this8.textures.getFrame(btn.atlas, btn.frame)) === null || _this8$textures$getFr === void 0 ? void 0 : _this8$textures$getFr.width) || 123;
      });
      var _0x599a9b = textureY - (_0x25aa59.reduce(function (a, b) {
        return a + b;
      }, 0) + (_0x4791ac.length - 1) * 40) / 2;
      var _loop2 = function _loop2() {
        var item = _0x4791ac[i];
        var width = _0x25aa59[i];
        var btn = _this8.add.image(_0x599a9b + width / 2, 390, item.atlas, item.frame).setInteractive();
        if (item.action === null) {
          _this8._pausePracticeBtn = btn;
          _this8._makeBouncyButton(btn, 1, function () {
            var isPracticeMode = _this8._practicedMode.togglePracticeMode();
            btn.setTexture("GJ_GameSheet03", isPracticeMode ? "GJ_normalBtn_001.png" : "GJ_practiceBtn_001.png");
            if (_this8._checkpointBtnContainer) _this8._checkpointBtnContainer.setVisible(isPracticeMode);
            _this8._resumeGame();
            if (!isPracticeMode) {
              _this8._practicedMode.clearCheckpoints();
              _this8._restartLevel();
            }
          });
        } else {
          _this8._makeBouncyButton(btn, 1, item.action);
        }
        _this8._pauseContainer.add(btn);
        _0x599a9b += width + 40;
      };
      for (var i = 0; i < _0x4791ac.length; i++) {
        _loop2();
      }
      var _0x1008ae = 530;
      var _0x22b43a = 0.7;
      var _0x41925a = this.textures.getFrame("GJ_WebSheet", "slidergroove.png");
      var _0x372782 = _0x41925a ? _0x41925a.width : 420;
      var createSlider = function createSlider(posX, iconFrame, initialVal, setter) {
        _this8._pauseContainer.add(_this8.add.image(posX - 180 - 5, _0x1008ae, "GJ_WebSheet", iconFrame).setScale(1.2));
        var barMaxW = (_0x372782 - 8) * _0x22b43a;
        var barStartX = posX - _0x372782 * _0x22b43a / 2 + 2.8;
        var fillW = initialVal * barMaxW;
        var fillBar = _this8.add.tileSprite(barStartX, _0x1008ae, fillW > 0 ? fillW : 1, 11.2, "sliderBar").setOrigin(0, 0.5);
        _this8._pauseContainer.add(fillBar);
        var groove = _this8.add.image(posX, _0x1008ae, "GJ_WebSheet", "slidergroove.png").setScale(_0x22b43a).setInteractive();
        _this8._pauseContainer.add(groove);
        var thumb = _this8.add.image(barStartX + fillW, _0x1008ae, "GJ_WebSheet", "sliderthumb.png").setScale(_0x22b43a).setInteractive({
          draggable: true
        });
        _this8._pauseContainer.add(thumb);
        var updateSlider = function(newX) {
          thumb.x = Math.max(barStartX, Math.min(barStartX + barMaxW, newX));
          var pct = (thumb.x - barStartX) / barMaxW;
          fillBar.width = Math.max(1, pct * barMaxW);
          setter(pct < 0.03 ? 0 : pct);
        };
        thumb.on("drag", function (p, dragX) {
          updateSlider(dragX);
        });
        groove.on("pointerdown", function (p) {
          updateSlider(p.x);
        });
      };
      createSlider(textureY - 200, "gj_songIcon_001.png", this._audio.getUserMusicVolume(), function (v) {
        return _this8._audio.setUserMusicVolume(v);
      });
      createSlider(textureY + 200, "GJ_sfxIcon_001.png", this._sfxVolume, function (v) {
        _this8._sfxVolume = v;
        localStorage.setItem("userSfxVol", v);
      });
    }
  }, {
    key: "_buildSettingsPopup",
    value: function _buildSettingsPopup() {
      var _this9 = this;
      if (this._settingsPopup) return;
      var centerX = screenWidth / 2,
        centerY = 320,
        panelWidth = 800,
        panelHeight = 550;
      this._settingsPopup = this.add.container(0, 0).setScrollFactor(0).setDepth(250);
      var dim = this.add.rectangle(centerX, centerY, screenWidth, screenHeight, 0, 150 / 255).setInteractive();
      this._settingsPopup.add(dim);
      var corner = 0.325 * this.textures.get("GJ_square01").source[0].width;
      var panel = this._drawScale9(centerX, centerY, panelWidth, panelHeight, 'GJ_square01', corner, 16777215, 1);
      this._settingsPopup.add(panel);
      var closeBtn = this.add.image(centerX - panelWidth / 2 + 10, centerY - panelHeight / 2 + 10, 'GJ_WebSheet', "GJ_closeBtn_001.png").setScale(0.8).setInteractive();
      this._settingsPopup.add(closeBtn);
      this._makeBouncyButton(closeBtn, 0.8, function () {
        _this9._settingsPopup.destroy();
        _this9._settingsPopup = null;
      });
      var pages = ["Gameplay", "Visual"];
      var currentPage = 0;
      var pageTitle = this.add.bitmapText(centerX, centerY - panelHeight / 2 + 45, "bigFont", pages[currentPage], 40).setOrigin(0.5);
      this._settingsPopup.add(pageTitle);
      var leftArrow = this.add.image(centerX - panelWidth / 2 - 130, centerY, "GJ_GameSheet03", "GJ_arrow_01_001.png").setFlipX(false).setInteractive();
      this._settingsPopup.add(leftArrow);
      var rightArrow = this.add.image(centerX + panelWidth / 2 + 130, centerY, "GJ_GameSheet03", "GJ_arrow_01_001.png").setInteractive().setFlipX(true);
      this._settingsPopup.add(rightArrow);
      var column1X = centerX - 200;
      var column2X = centerX + 200;
      var checkOffset = -120;
      var textOffset = -70;
      var spacingY = 70;
      var startY = centerY - 150;
      var pageContainer = this.add.container(0, 0);
      this._settingsPopup.add(pageContainer);
      var createToggle = function createToggle(container, x, y, label, getVal, setVal) {
        var callback = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : null;
        var getTex = function getTex() {
          return getVal() ? "GJ_checkOn_001.png" : "GJ_checkOff_001.png";
        };
        var check = _this9.add.image(x + checkOffset, y, "GJ_GameSheet03", getTex()).setScale(0.8).setInteractive();
        var txt = _this9.add.bitmapText(x + textOffset, y, "bigFont", label, 25).setOrigin(0, 0.5);
        container.add([check, txt]);
        _this9._makeBouncyButton(check, 0.8, function () {
          setVal(!getVal());
          check.setTexture("GJ_GameSheet03", getTex());
          if (callback) callback(getVal());
          _this9._saveSettings();
        });
      };
      var buildGameplayPage = function buildGameplayPage(container) {
        createToggle(container, column1X, startY, "Show Percentage", function () {
          return window.showPercentage;
        }, function (v) {
          return window.showPercentage = v;
        }, function (v) {
          if (_this9._percentageLabel) _this9._percentageLabel.setVisible(v);
        });
        createToggle(container, column1X, startY + spacingY, "Percentage Decimals", function () {
          return window.percentageDecimals;
        }, function (v) {
          return window.percentageDecimals = v;
        });
        createToggle(container, column1X, startY + spacingY * 2, "StartPos Switcher", function () {
          return window.startPosSwitcher;
        }, function (v) {
          return window.startPosSwitcher = v;
        }, function (v) {
          if (!v) _this9._startPosIndex = -1;
          if (_this9._startPosGui) _this9._startPosGui.setVisible(v);
          var total = _this9._level.getStartPositions().length;
          if (_this9._startPosText) _this9._startPosText.setText("0/".concat(total));
        });
        createToggle(container, column1X, startY + spacingY * 3, "Noclip", function () {
          return window.noClip;
        }, function (v) {
          return window.noClip = v;
        }, function (v) {
          if (_this9._noclipIndicator) _this9._noclipIndicator.setVisible(v);
        });
        createToggle(container, column1X, startY + spacingY * 4, "Noclip Accuracy", function () {
          return window.noClipAccuracy;
        }, function (v) {
          return window.noClipAccuracy = v;
        });
      };
      var buildVisualPage = function buildVisualPage(container) {
        createToggle(container, column1X, startY, "Show Hitboxes", function () {
          return window.showHitboxes;
        }, function (v) {
          return window.showHitboxes = v;
        }, function (v) {
          if (!v) {
            _this9._player._hitboxGraphics.clear();
          } else {
            _this9._player.drawHitboxes(_this9._player._hitboxGraphics, _this9._cameraX, _this9._cameraY);
          }
        });
        createToggle(container, column1X, startY + spacingY, "Hitbox Trail", function () {
          return window.showHitboxTrail;
        }, function (v) {
          return window.showHitboxTrail = v;
        }, function (v) {
          if (window.showHitboxes) _this9._player.drawHitboxes(_this9._player._hitboxGraphics, _this9._cameraX, _this9._cameraY);
        });
        createToggle(container, column1X, startY + spacingY * 2, "Hitboxes on Death", function () {
          return window.hitboxesOnDeath;
        }, function (v) {
          return window.hitboxesOnDeath = v;
        });
        createToggle(container, column1X, startY + spacingY * 3, "Show FPS", function () {
          return _this9._fpsText.visible;
        }, function (v) {
          return _this9._fpsText.visible = v;
        }, function (v) {
          if (_this9._fpsText) _this9._fpsText.setVisible(v);
        });
        createToggle(container, column1X, startY + spacingY * 4, "Solid Wave Trail", function () {
          return window.solidWave;
        }, function (v) {
          return window.solidWave = v;
        });
      };
      var buildPage = function buildPage(idx) {
        pageContainer.destroy();
        pageContainer = _this9.add.container(0, 0);
        _this9._settingsPopup.add(pageContainer);
        pageTitle.setText(pages[idx]);
        if (idx === 0) buildGameplayPage(pageContainer);else if (idx === 1) buildVisualPage(pageContainer);
      };
      buildPage(0);
      this._makeBouncyButton(leftArrow, 1, function () {
        currentPage = (currentPage - 1 + pages.length) % pages.length;
        buildPage(currentPage);
      });
      this._makeBouncyButton(rightArrow, 1, function () {
        currentPage = (currentPage + 1) % pages.length;
        buildPage(currentPage);
      });
    }
  }, {
    key: "_saveSettings",
    value: function _saveSettings() {
      var settings = {
        noclip: window.noClip,
        showPercentage: window.showPercentage,
        percentDecimals: window.percentageDecimals,
        showHitboxes: window.showHitboxes,
        startPosSwitcher: window.startPosSwitcher,
        hitboxTrail: window.showHitboxTrail,
        showFPS: this._fpsText.visible,
        solidWaveTrail: window.solidWave,
        noclipAccuracy: window.noClipAccuracy,
        hitboxesOnDeath: window.hitboxesOnDeath
      };
      localStorage.setItem("gd_settings", JSON.stringify(settings));
    }
  }, {
    key: "_loadSettings",
    value: function _loadSettings() {
      var saved = localStorage.getItem("gd_settings");
      var defaults = {
        noclip: false,
        showPercentage: true,
        percentDecimals: false,
        showHitboxes: false,
        startPosSwitcher: false,
        hitboxTrail: false,
        showFPS: false,
        solidWaveTrail: false,
        noclipAccuracy: false,
        hitboxesOnDeath: false
      };
      var data = saved ? JSON.parse(saved) : defaults;
      window.noClip = data.noclip;
      window.showPercentage = data.showPercentage;
      window.percentageDecimals = data.percentDecimals;
      window.showHitboxes = data.showHitboxes;
      window.startPosSwitcher = data.startPosSwitcher;
      window.showHitboxTrail = data.hitboxTrail;
      this._fpsText.visible = data.showFPS;
      window.solidWave = data.solidWaveTrail;
      window.noClipAccuracy = data.noclipAccuracy;
      window.hitboxesOnDeath = data.hitboxesOnDeath;
    }
  }, {
    key: "_buildInfoPopup",
    value: function _buildInfoPopup() {
      var _this0 = this;
      if (this._infoPopup) {
        return;
      }
      var xPos = screenWidth / 2;
      var popupHeight = 320;
      var popupWidth = 336;
      this._infoPopup = this.add.container(0, 0).setScrollFactor(0).setDepth(1000);
      var background = this.add.rectangle(xPos, popupHeight, screenWidth, screenHeight, 0, 100 / 255);
      background.setInteractive();
      this._infoPopup.add(background);
      var bounceContainer = this.add.container(xPos, popupHeight).setScale(0);
      this._infoPopup.add(bounceContainer);
      var cornerRadius = this.textures.get("GJ_square02").source[0].width * 0.325;
      var popupBg = this._drawScale9(0, 0, 480, popupWidth, "GJ_square02", cornerRadius, 16777215, 1);
      bounceContainer.add(popupBg);
      var closeBtn = this.add.image(-240 + 20, -148, "GJ_WebSheet", "GJ_closeBtn_001.png").setScale(0.8).setInteractive();
      bounceContainer.add(closeBtn);
      this._expandHitArea(closeBtn, 2);
      this._makeBouncyButton(closeBtn, 0.8, function () {
        return _this0._closeInfoPopup();
      });
      var title = this.add.bitmapText(0, -124, "bigFont", "Credits", 30).setOrigin(0.5, 0.5);
      bounceContainer.add(title);
      var scrollAreaW = 420;
      var scrollAreaH = 230;
      var scrollAreaX = 0;
      var scrollAreaY = 20;
      var scrollFrameBg = this.add.graphics();
      scrollFrameBg.fillStyle(0x000000, 0.18);
      scrollFrameBg.fillRoundedRect(scrollAreaX - scrollAreaW / 2, scrollAreaY - scrollAreaH / 2, scrollAreaW, scrollAreaH, 8);
      bounceContainer.add(scrollFrameBg);
      var contentContainer = this.add.container(0, scrollAreaY - scrollAreaH / 2 + 8);
      bounceContainer.add(contentContainer);
      var creditsEntries = [{
        text: "Made by RobTop Games",
        scale: 0.8,
        font: "goldFont"
      }, {
        text: "Modded by:",
        scale: 0.9,
        font: "bigFont"
      }, {
        text: "breadbb, PinkDev, rohanis0000,",
        scale: 0.7,
        font: "goldFont"
      }, {
        text: "bog, AntiMatter, arbstro, aloaf",
        scale: 0.7,
        font: "goldFont"
      }, {
        text: "Contributors:",
        scale: 0.9,
        font: "bigFont"
      }, {
        text: "Itszar, t0nchi7 and Lasokar.",
        scale: 0.7,
        font: "goldFont"
      }, {
        text: "© 2026 RobTop Games. All rights reserved.",
        scale: 0.4,
        font: "Arial",
        color: 0x000000
      }];
      var yPos = 0;
      var lineItems = [];
      creditsEntries.forEach(function (entry) {
        var txt;
        if (entry.font === "Arial") {
          txt = _this0.add.text(0, yPos, entry.text, {
            fontSize: "".concat(Math.round(32 * (entry.scale || 0.65)), "px"),
            fontFamily: "Arial",
            color: entry.color ? "#".concat(entry.color.toString(16).padStart(6, '0')) : "#ffffff"
          }).setOrigin(0.5, 0);
        } else {
          txt = _this0.add.bitmapText(0, yPos, entry.font || "bigFont", entry.text, 32).setOrigin(0.5, 0).setScale(entry.scale || 0.65);
          if (entry.color != null) txt.setTint(entry.color);
        }
        contentContainer.add(txt);
        lineItems.push(txt);
        yPos += Math.round(32 * (entry.scale || 0.65)) + 10;
      });
      var totalContentH = yPos;
      var maxScrollDown = Math.max(0, totalContentH - scrollAreaH + 16);
      var maskGraphics = this.add.graphics();
      var maskShape = this.add.graphics();
      maskShape.fillStyle(0xffffff, 1);
      var updateMask = function updateMask() {
        if (!bounceContainer || !bounceContainer.active) return;
        var wx = xPos + bounceContainer.x - xPos;
        var s = bounceContainer.scaleX;
        var bwx = xPos;
        var bwy = popupHeight;
        maskShape.clear();
        maskShape.fillStyle(0xffffff, 1);
        maskShape.fillRect(bwx + (scrollAreaX - scrollAreaW / 2) * s, bwy + (scrollAreaY - scrollAreaH / 2) * s, scrollAreaW * s, scrollAreaH * s);
      };
      var geomMask = maskShape.createGeometryMask();
      contentContainer.setMask(geomMask);
      var maskUpdateEvent = this.events.on('postupdate', updateMask);
      var scrollY = 0;
      var baseContentY = scrollAreaY - scrollAreaH / 2 + 8;
      var applyScroll = function applyScroll() {
        contentContainer.y = baseContentY - scrollY;
      };
      applyScroll();
      var scrollZone = this.add.zone(scrollAreaX, scrollAreaY, scrollAreaW, scrollAreaH).setInteractive();
      bounceContainer.add(scrollZone);
      scrollZone.on('wheel', function (_p, _dx, deltaY) {
        scrollY = Phaser.Math.Clamp(scrollY + deltaY * 0.6, 0, maxScrollDown);
        applyScroll();
      });
      var dragStartY = 0;
      var dragStartScroll = 0;
      scrollZone.on('pointerdown', function (pointer) {
        dragStartY = pointer.y;
        dragStartScroll = scrollY;
      });
      scrollZone.on('pointermove', function (pointer) {
        if (pointer.isDown) {
          var dy = dragStartY - pointer.y;
          scrollY = Phaser.Math.Clamp(dragStartScroll + dy, 0, maxScrollDown);
          applyScroll();
        }
      });
      this._infoPopupCleanup = function () {
        _this0.events.off('postupdate', updateMask);
        maskShape.destroy();
        geomMask.destroy();
      };
      this.tweens.add({
        targets: bounceContainer,
        scale: {
          from: 0,
          to: 1
        },
        duration: 500,
        ease: "Bounce.Out"
      });
    }
  }, {
    key: "_closeInfoPopup",
    value: function _closeInfoPopup() {
      if (this._infoPopup) {
        if (this._infoPopupCleanup) {
          this._infoPopupCleanup();
          this._infoPopupCleanup = null;
        }
        this._infoPopup.destroy();
        this._infoPopup = null;
      }
    }
  }, {
    key: "_buildHowToPlayPopup",
    value: function _buildHowToPlayPopup() {
      var _this1 = this;
      if (this._howToPlayPopup) {
        return;
      }
      var TUTORIAL_PAGES = ["tutorial_01", "tutorial_02", "tutorial_03", "tutorial_04", "tutorial_05"];
      var GREEN = 0x00e719;
      var YELLOW = 0xf8ff00;
      var BLUE = 0x3cadf5;
      var TUTORIAL_DESCRIPTIONS = [{
        fontSize: 40,
        lines: [[{
          text: "TAP",
          color: GREEN
        }, {
          text: " the screen to jump."
        }], [{
          text: "HOLD",
          color: GREEN
        }, {
          text: " down to keep jumping."
        }]]
      }, {
        fontSize: 40,
        lines: [[{
          text: "Hold",
          color: GREEN
        }, {
          text: " to fly up."
        }], [{
          text: "Release",
          color: GREEN
        }, {
          text: " to fly down."
        }]]
      }, {
        fontSize: 35,
        lines: [[{
          text: "You can enter "
        }, {
          text: "practice mode",
          color: BLUE
        }, {
          text: " from"
        }], [{
          text: "the pause menu."
        }], [{
          text: "Practice mode lets you place"
        }], [{
          text: "checkpoints",
          color: GREEN
        }, {
          text: "."
        }]]
      }, {
        fontSize: 35,
        lines: [[{
          text: "You can place checkpoints manually, or"
        }], [{
          text: "use the auto-checkpoints feature."
        }], [{
          text: "Tap the delete button to remove your"
        }], [{
          text: "last checkpoint."
        }]]
      }, {
        fontSize: 35,
        lines: [[{
          text: "Jump Orbs",
          color: YELLOW
        }, {
          text: " activate when you are on"
        }], [{
          text: "top of them."
        }], [{
          text: "TAP",
          color: GREEN
        }, {
          text: " while touching an orb to"
        }], [{
          text: "interact with it and use its effect."
        }]]
      }];
      var TOTAL_PAGES = TUTORIAL_PAGES.length;
      var currentPage = 0;
      var xPos = screenWidth / 2;
      var _0x4c3182 = 320;
      this._howToPlayPopup = this.add.container(0, 0).setScrollFactor(0).setDepth(300);
      var _0x249eb7 = this.add.rectangle(xPos, _0x4c3182, screenWidth, screenHeight, 0, 100 / 255);
      _0x249eb7.setInteractive();
      this._howToPlayPopup.add(_0x249eb7);
      var _0x14e46f = this.textures.get("GJ_square01").source[0].width * 0.325;
      var panelContainer = this.add.container(xPos, _0x4c3182);
      this._howToPlayPopup.add(panelContainer);
      var _0x2c64c2 = this._drawScale9(0, 0, 830, 530, "GJ_square01", _0x14e46f, 16777215, 1);
      panelContainer.add(_0x2c64c2);
      var _0x5a0f88 = this.add.image(-240 - 160, 172 - _0x4c3182 - 110, "GJ_WebSheet", "GJ_closeBtn_001.png").setScale(0.8).setInteractive();
      this._expandHitArea(_0x5a0f88, 2);
      this._makeBouncyButton(_0x5a0f88, 0.8, function () {
        return _this1._closeHowToPlayPopup();
      });
      panelContainer.add(_0x5a0f88);
      var howToPlayTitle = this.add.bitmapText(0, -210, "bigFont", "How To Play", 62).setOrigin(0.5, 0.5);
      panelContainer.add(howToPlayTitle);
      var DESC_TOP_Y = -195;
      var DESC_BOT_Y = 15;
      var DESC_MAX_H = DESC_BOT_Y - DESC_TOP_Y;
      var descLineObjects = [];
      var _buildDescLines = function _buildDescLines(pageIndex) {
        for (var _i16 = 0, _descLineObjects = descLineObjects; _i16 < _descLineObjects.length; _i16++) {
          var obj = _descLineObjects[_i16];
          obj.destroy();
        }
        descLineObjects = [];
        var page = TUTORIAL_DESCRIPTIONS[pageIndex];
        if (!page || !page.lines.length) return;
        var fontSize = page.fontSize;
        var lineSpacing = 0.35;
        var lineH = fontSize * (1 + lineSpacing);
        var startY = DESC_TOP_Y + fontSize / 0.5;
        for (var i = 0; i < page.lines.length; i++) {
          var segments = page.lines[i];
          var lineY = startY + i * lineH;
          if (segments.length === 1 && !segments[0].color) {
            var _obj2 = _this1.add.bitmapText(0, lineY, "bigFont", segments[0].text, fontSize).setOrigin(0.5, 0.5);
            panelContainer.add(_obj2);
            descLineObjects.push(_obj2);
            continue;
          }
          var measured = segments.map(function (seg) {
            var tmp = _this1.add.bitmapText(0, -9999, "bigFont", seg.text, fontSize);
            var w = tmp.width;
            tmp.destroy();
            return w;
          });
          var totalW = measured.reduce(function (a, b) {
            return a + b;
          }, 0);
          var curX = -totalW / 2;
          for (var s = 0; s < segments.length; s++) {
            var seg = segments[s];
            var _obj3 = _this1.add.bitmapText(curX, lineY, "bigFont", seg.text, fontSize).setOrigin(0, 0.5);
            if (seg.color) _obj3.setTint(seg.color);
            panelContainer.add(_obj3);
            descLineObjects.push(_obj3);
            curX += measured[s];
          }
        }
      };
      _buildDescLines(0);
      var tutorialImage = this.add.image(-240 + 150, 155, TUTORIAL_PAGES[0]);
      panelContainer.add(tutorialImage);
      var nextGroup = this.add.container(-240 + 550, 165);
      var nextBtnW = 125,
        nextBtnH = 80;
      var nextBtnBorder = this.textures.get("GJ_button01").source[0].width * 0.3;
      var nextBtn9 = this._drawScale9(0, 0, nextBtnW, nextBtnH, "GJ_button01", nextBtnBorder, 0xffffff, 1);
      var nextBtn = this.add.rectangle(0, 0, nextBtnW, nextBtnH).setInteractive();
      var nextLabel = this.add.bitmapText(-5, -2.5, "bigFont", "Next", 35).setOrigin(0.5, 0.5);
      nextGroup.add(nextBtn9);
      nextGroup.add(nextBtn);
      nextGroup.add(nextLabel);
      panelContainer.add(nextGroup);
      nextBtn.on("pointerdown", function () {
        nextGroup._pressed = true;
        _this1.tweens.killTweensOf(nextGroup);
        _this1.tweens.add({
          targets: nextGroup,
          scaleX: 1.26,
          scaleY: 1.26,
          duration: 300,
          ease: "Bounce.Out"
        });
      });
      nextBtn.on("pointerout", function () {
        if (nextGroup._pressed) {
          nextGroup._pressed = false;
          _this1.tweens.killTweensOf(nextGroup);
          _this1.tweens.add({
            targets: nextGroup,
            scaleX: 1,
            scaleY: 1,
            duration: 400,
            ease: "Bounce.Out"
          });
        }
      });
      nextBtn.on("pointerup", function () {
        if (!nextGroup._pressed) return;
        nextGroup._pressed = false;
        _this1.tweens.killTweensOf(nextGroup);
        nextGroup.setScale(1);
        if (currentPage >= TOTAL_PAGES - 1) {
          _this1._closeHowToPlayPopup();
        } else {
          currentPage++;
          tutorialImage.setTexture(TUTORIAL_PAGES[currentPage]);
          _buildDescLines(currentPage);
          nextLabel.setText(currentPage >= TOTAL_PAGES - 1 ? "Exit" : "Next");
        }
      });
      panelContainer.setScale(0);
      this.tweens.add({
        targets: panelContainer,
        scale: 1,
        duration: 400,
        ease: "Bounce.Out"
      });
    }
  }, {
    key: "_closeHowToPlayPopup",
    value: function _closeHowToPlayPopup() {
      if (this._howToPlayPopup) {
        this._howToPlayPopup.destroy();
        this._howToPlayPopup = null;
      }
    }
  }, {
    key: "_buildUpdateLogPopup",
    value: function _buildUpdateLogPopup() {
      var _this10 = this;
      if (this._updateLogPopup || window.levelID) {
        return;
      }
      var xPos = screenWidth / 2;
      var popupHeight = 320;
      var popupWidth = 336;
      this._updateLogPopup = this.add.container(0, 0).setScrollFactor(0).setDepth(1000);
      var background = this.add.rectangle(xPos, popupHeight, screenWidth, screenHeight, 0, 100 / 255);
      background.setInteractive();
      this._updateLogPopup.add(background);
      var bounceContainer = this.add.container(xPos, popupHeight).setScale(0);
      this._updateLogPopup.add(bounceContainer);
      var cornerRadius = this.textures.get("GJ_square02").source[0].width * 0.325;
      var popupBg = this._drawScale9(0, 0, 480, popupWidth, "GJ_square02", cornerRadius, 16777215, 1);
      bounceContainer.add(popupBg);
      var closeBtn = this.add.image(-240 + 20, -148, "GJ_WebSheet", "GJ_closeBtn_001.png").setScale(0.8).setInteractive();
      bounceContainer.add(closeBtn);
      this._expandHitArea(closeBtn, 2);
      this._makeBouncyButton(closeBtn, 0.8, function () {
        return _this10._closeUpdateLogPopup();
      });
      var title = this.add.bitmapText(0, -124, "bigFont", "BETA (EXPECT BUGS)", 30).setOrigin(0.5, 0.5).setTint(0xff6666);
      bounceContainer.add(title);
      var scrollAreaW = 420;
      var scrollAreaH = 230;
      var scrollAreaX = 0;
      var scrollAreaY = 20;
      var scrollFrameBg = this.add.graphics();
      scrollFrameBg.fillStyle(0x000000, 0.18);
      scrollFrameBg.fillRoundedRect(scrollAreaX - scrollAreaW / 2, scrollAreaY - scrollAreaH / 2, scrollAreaW, scrollAreaH, 8);
      bounceContainer.add(scrollFrameBg);
      var contentContainer = this.add.container(0, scrollAreaY - scrollAreaH / 2 + 8);
      bounceContainer.add(contentContainer);
      /* colors for reference
        0xff6666
        0xff9944
        0xaaddff - fun messages from me :)
        0xff00ff - pink dev entries
      */
      var updateEntries = [{
        text: "Update Log",
        scale: 0.85,
        font: "goldFont"
      }, {
        text: "Accurate Featured tab demo.",
        scale: 0.65
      }, {
        text: "Info popups.",
        scale: 0.65
      }, {
        text: "Main menu buttons.",
        scale: 0.65
      }, {
        text: "Settings, Stats and Newgrounds.",
        scale: 0.65
      }, {
        text: "Fixed being able to go to the level selector while in menus.",
        scale: 0.35
      }, {
        text: "GD accurate loading screen.",
        scale: 0.65
      }, {
        text: "UI tweaks.",
        scale: 0.65
      }, {
        text: "Bug fixes.",
        scale: 0.65
      }, {
        text: "is this update finally out?",
        scale: 0.65,
        color: 0xaaddff
      }, {
        text: "- rohanis0000",
        scale: 0.65,
        color: 0xaaddff
      }];
      var yPos = 0;
      var lineItems = [];
      updateEntries.forEach(function (entry) {
        var txt = _this10.add.bitmapText(0, yPos, entry.font || "bigFont", entry.text, 32).setOrigin(0.5, 0).setScale(entry.scale || 0.65);
        if (entry.color != null) txt.setTint(entry.color);
        contentContainer.add(txt);
        lineItems.push(txt);
        yPos += Math.round(32 * (entry.scale || 0.65)) + 10;
      });
      var totalContentH = yPos;
      var maxScrollDown = Math.max(0, totalContentH - scrollAreaH + 16);
      var maskGraphics = this.add.graphics();
      var maskShape = this.add.graphics();
      maskShape.fillStyle(0xffffff, 1);
      var updateMask = function updateMask() {
        if (!bounceContainer || !bounceContainer.active) return;
        var wx = xPos + bounceContainer.x - xPos;
        var s = bounceContainer.scaleX;
        var bwx = xPos;
        var bwy = popupHeight;
        maskShape.clear();
        maskShape.fillStyle(0xffffff, 1);
        maskShape.fillRect(bwx + (scrollAreaX - scrollAreaW / 2) * s, bwy + (scrollAreaY - scrollAreaH / 2) * s, scrollAreaW * s, scrollAreaH * s);
      };
      var geomMask = maskShape.createGeometryMask();
      contentContainer.setMask(geomMask);
      var maskUpdateEvent = this.events.on('postupdate', updateMask);
      var scrollY = 0;
      var baseContentY = scrollAreaY - scrollAreaH / 2 + 8;
      var applyScroll = function applyScroll() {
        contentContainer.y = baseContentY - scrollY;
      };
      applyScroll();
      var scrollZone = this.add.zone(scrollAreaX, scrollAreaY, scrollAreaW, scrollAreaH).setInteractive();
      bounceContainer.add(scrollZone);
      scrollZone.on('wheel', function (_p, _dx, deltaY) {
        scrollY = Phaser.Math.Clamp(scrollY + deltaY * 0.6, 0, maxScrollDown);
        applyScroll();
      });
      var dragStartY = 0;
      var dragStartScroll = 0;
      scrollZone.on('pointerdown', function (pointer) {
        dragStartY = pointer.y;
        dragStartScroll = scrollY;
      });
      scrollZone.on('pointermove', function (pointer) {
        if (pointer.isDown) {
          var dy = dragStartY - pointer.y;
          scrollY = Phaser.Math.Clamp(dragStartScroll + dy, 0, maxScrollDown);
          applyScroll();
        }
      });
      this._updateLogPopupCleanup = function () {
        _this10.events.off('postupdate', updateMask);
        maskShape.destroy();
        geomMask.destroy();
      };
      this.tweens.add({
        targets: bounceContainer,
        scale: {
          from: 0,
          to: 1
        },
        duration: 500,
        ease: "Bounce.Out"
      });
    }
  }, {
    key: "_closeUpdateLogPopup",
    value: function _closeUpdateLogPopup() {
      if (this._updateLogPopup) {
        if (this._updateLogPopupCleanup) {
          this._updateLogPopupCleanup();
          this._updateLogPopupCleanup = null;
        }
        this._updateLogPopup.destroy();
        this._updateLogPopup = null;
      }
    }
  }, {
    key: "_buildNewgroundsPopup",
    value: function _buildNewgroundsPopup() {
      var _this11 = this;
      if (this._newgroundsPopup || window.levelID) return;
      var xPos = screenWidth / 2;
      var centerY = screenHeight / 2;
      this._newgroundsPopup = this.add.container(0, 0).setScrollFactor(0).setDepth(1000);
      var background = this.add.rectangle(xPos, centerY, screenWidth, screenHeight, 0, 100 / 255);
      background.setInteractive();
      this._newgroundsPopup.add(background);
      var bounceContainer = this.add.container(xPos, centerY).setScale(0);
      this._newgroundsPopup.add(bounceContainer);
      var cornerRadius = this.textures.get("square01_001").source[0].width * 0.325;
      var panelBg = this._drawScale9(0, 0, 460, 240, "square01_001", cornerRadius, 16777215, 1);
      bounceContainer.add(panelBg);
      var title = this.add.bitmapText(0, -76, "goldFont", "Newgrounds", 40).setOrigin(0.5, 0.5);
      bounceContainer.add(title);
      var body = this.add.text(0, -10, "Visit Newgrounds to find awesome\nmusic?", {
        fontSize: "25px",
        fontFamily: "Arial, sans-serif",
        color: "#ffffff",
        align: "center"
      }).setOrigin(0.5, 0.5);
      bounceContainer.add(body);
      var cancelGroup = this.add.container(-70, 65);
      var cancelBtnW = 165,
        cancelBtnH = 55;
      var cancelBtnBorder = this.textures.get("GJ_button01").source[0].width * 0.3;
      var cancelBtn9 = this._drawScale9(0, 0, cancelBtnW, cancelBtnH, "GJ_button01", cancelBtnBorder, 0xffffff, 1);
      var cancelBtn = this.add.rectangle(0, 0, cancelBtnW, cancelBtnH).setInteractive();
      cancelGroup.add(cancelBtn9);
      cancelGroup.add(cancelBtn);
      var cancelLabel = this.add.bitmapText(-2, -3, "goldFont", "Cancel", 38).setOrigin(0.5, 0.5);
      cancelGroup.add(cancelLabel);
      bounceContainer.add(cancelGroup);
      cancelBtn.on("pointerdown", function () {
        cancelGroup._pressed = true;
        _this11.tweens.killTweensOf(cancelGroup);
        _this11.tweens.add({
          targets: cancelGroup,
          scaleX: 1.26,
          scaleY: 1.26,
          duration: 300,
          ease: "Bounce.Out"
        });
      });
      cancelBtn.on("pointerout", function () {
        if (cancelGroup._pressed) {
          cancelGroup._pressed = false;
          _this11.tweens.killTweensOf(cancelGroup);
          _this11.tweens.add({
            targets: cancelGroup,
            scaleX: 1,
            scaleY: 1,
            duration: 400,
            ease: "Bounce.Out"
          });
        }
      });
      cancelBtn.on("pointerup", function () {
        if (cancelGroup._pressed) {
          cancelGroup._pressed = false;
          _this11.tweens.killTweensOf(cancelGroup);
          cancelGroup.setScale(1);
          _this11._closeNewgroundsPopup();
        }
      });
      var openGroup = this.add.container(90, 65);
      var openBtnW = 125,
        openBtnH = 55;
      var openBtnBorder = this.textures.get("GJ_button01").source[0].width * 0.3;
      var openBtn9 = this._drawScale9(0, 0, openBtnW, openBtnH, "GJ_button01", openBtnBorder, 0xffffff, 1);
      var openBtn = this.add.rectangle(0, 0, openBtnW, openBtnH).setInteractive();
      openGroup.add(openBtn9);
      openGroup.add(openBtn);
      var openLabel = this.add.bitmapText(-2, -3, "goldFont", "Open", 39).setOrigin(0.5, 0.5);
      openGroup.add(openLabel);
      bounceContainer.add(openGroup);
      openBtn.on("pointerdown", function () {
        openGroup._pressed = true;
        _this11.tweens.killTweensOf(openGroup);
        _this11.tweens.add({
          targets: openGroup,
          scaleX: 1.26,
          scaleY: 1.26,
          duration: 300,
          ease: "Bounce.Out"
        });
      });
      openBtn.on("pointerout", function () {
        if (openGroup._pressed) {
          openGroup._pressed = false;
          _this11.tweens.killTweensOf(openGroup);
          _this11.tweens.add({
            targets: openGroup,
            scaleX: 1,
            scaleY: 1,
            duration: 400,
            ease: "Bounce.Out"
          });
        }
      });
      openBtn.on("pointerup", function () {
        if (openGroup._pressed) {
          openGroup._pressed = false;
          _this11.tweens.killTweensOf(openGroup);
          openGroup.setScale(1);
          _this11._closeNewgroundsPopup();
          window.open("https://www.newgrounds.com/audio", "_blank");
        }
      });
      this.tweens.add({
        targets: bounceContainer,
        scale: {
          from: 0,
          to: 1
        },
        duration: 500,
        ease: "Bounce.Out"
      });
    }
  }, {
    key: "_closeNewgroundsPopup",
    value: function _closeNewgroundsPopup() {
      if (this._newgroundsPopup) {
        this._newgroundsPopup.destroy();
        this._newgroundsPopup = null;
      }
    }
  }, {
    key: "_buildFeaturedInfoPopup",
    value: function _buildFeaturedInfoPopup() {
      var _this12 = this;
      if (this._featuredInfoPopup) return;
      var xPos = screenWidth / 2;
      var centerY = screenHeight / 2;
      this._featuredInfoPopup = this.add.container(0, 0).setScrollFactor(0).setDepth(1000);
      var background = this.add.rectangle(xPos, centerY, screenWidth, screenHeight, 0, 100 / 255);
      background.setInteractive();
      this._featuredInfoPopup.add(background);
      var bounceContainer = this.add.container(xPos, centerY).setScale(0);
      this._featuredInfoPopup.add(bounceContainer);
      var cornerRadius = this.textures.get("square01_001").source[0].width * 0.325;
      var panelBg = this._drawScale9(0, 0, 560, 300, "square01_001", cornerRadius, 16777215, 1);
      bounceContainer.add(panelBg);
      var title = this.add.bitmapText(0, -98, "goldFont", "Featured", 42).setOrigin(0.5, 0.5);
      bounceContainer.add(title);
      var body = this.add.text(0, -5, "This menu is being worked on currently and is\nbeing constantly tested for bugs and better\nquality. The reason it is here is to show a demo\nof what it would look like.", {
        fontSize: "21px",
        fontFamily: "Arial, sans-serif",
        color: "#ffffff",
        align: "center",
        lineSpacing: 4
      }).setOrigin(0.5, 0.5);
      bounceContainer.add(body);
      var okGroup = this.add.container(-5, 95);
      var okBtnW = 90,
        okBtnH = 55;
      var okBtnBorder = this.textures.get("GJ_button01").source[0].width * 0.3;
      var okBtn9 = this._drawScale9(0, 0, okBtnW, okBtnH, "GJ_button01", okBtnBorder, 0xffffff, 1);
      var okBtn = this.add.rectangle(0, 0, okBtnW, okBtnH).setInteractive();
      okGroup.add(okBtn9);
      okGroup.add(okBtn);
      var okLabel = this.add.bitmapText(-3, -4, "goldFont", "OK", 44).setOrigin(0.5, 0.5);
      okGroup.add(okLabel);
      bounceContainer.add(okGroup);
      okBtn.on("pointerdown", function () {
        okGroup._pressed = true;
        _this12.tweens.killTweensOf(okGroup);
        _this12.tweens.add({
          targets: okGroup,
          scaleX: 1.26,
          scaleY: 1.26,
          duration: 300,
          ease: "Bounce.Out"
        });
      });
      okBtn.on("pointerout", function () {
        if (okGroup._pressed) {
          okGroup._pressed = false;
          _this12.tweens.killTweensOf(okGroup);
          _this12.tweens.add({
            targets: okGroup,
            scaleX: 1,
            scaleY: 1,
            duration: 400,
            ease: "Bounce.Out"
          });
        }
      });
      okBtn.on("pointerup", function () {
        if (okGroup._pressed) {
          okGroup._pressed = false;
          _this12.tweens.killTweensOf(okGroup);
          okGroup.setScale(1);
          _this12._closeFeaturedInfoPopup();
        }
      });
      this.tweens.add({
        targets: bounceContainer,
        scale: {
          from: 0,
          to: 1
        },
        duration: 500,
        ease: "Bounce.Out"
      });
    }
  }, {
    key: "_closeFeaturedInfoPopup",
    value: function _closeFeaturedInfoPopup() {
      if (this._featuredInfoPopup) {
        this._featuredInfoPopup.destroy();
        this._featuredInfoPopup = null;
      }
    }
  }, {
    key: "_expandHitArea",
    value: function _expandHitArea(_0x122213, _0x37180a) {
      var _0x46ea45 = _0x122213.width;
      var _0x43b461 = _0x122213.height;
      var _0x960250 = _0x46ea45 * (_0x37180a - 1) / 2;
      var _0x3f88a1 = _0x43b461 * (_0x37180a - 1) / 2;
      _0x122213.input.hitArea.setTo(-_0x960250, -_0x3f88a1, _0x46ea45 + _0x960250 * 2, _0x43b461 + _0x3f88a1 * 2);
    }
  }, {
    key: "_makeBouncyButton",
    value: function _makeBouncyButton(textureX, _0x57b645, _0x2f13d0, _0xda0c21) {
      var _this13 = this;
      var _0x396ca0 = _0x57b645 * 1.26;
      textureX.on("pointerdown", function () {
        if (!_0xda0c21 || !!_0xda0c21()) {
          textureX._pressed = true;
          _this13.tweens.killTweensOf(textureX, "scale");
          _this13.tweens.add({
            targets: textureX,
            scale: _0x396ca0,
            duration: 300,
            ease: "Bounce.Out"
          });
        }
      });
      textureX.on("pointerout", function (pointer) {
        if (textureX._pressed) {
          textureX._pressed = false;
          _this13.tweens.killTweensOf(textureX, "scale");
          _this13.tweens.add({
            targets: textureX,
            scale: _0x57b645,
            duration: 400,
            ease: "Bounce.Out"
          });
        }
      });
      textureX.on("pointerup", function () {
        if (textureX._pressed) {
          textureX._pressed = false;
          _this13.tweens.killTweensOf(textureX);
          textureX.setScale(_0x57b645);
          _0x2f13d0();
        }
      });
      return textureX;
    }
  }, {
    key: "_toggleFullscreen",
    value: function _toggleFullscreen() { return;
      if (this.scale.isFullscreen) {
        this.scale.stopFullscreen();
      } else {
        this.scale.startFullscreen();
        try {
          screen.orientation.lock("landscape")["catch"](function () {});
        } catch (_0x22124f) {}
      }
    }
  }, {
    key: "_drawScale9",
    value: function _drawScale9(_0x147730, _0x4c8cbf, scaleWidth, scaleHeight, _0x24a44b, borderSize, _0x590eba, _0x206735) {
      var _0x4080b2 = this.add.container(_0x147730, _0x4c8cbf);
      var _0x2522df = this.textures.get(_0x24a44b);
      var _0x401ec1 = _0x2522df.source[0];
      var _0x3f82ec = _0x401ec1.width;
      var _0x294746 = _0x401ec1.height;
      var _0x2b09f1 = scaleWidth - borderSize * 2;
      var _0x990515 = scaleHeight - borderSize * 2;
      var _0x1d065e = [{
        sx: 0,
        sy: 0,
        sw: borderSize,
        sh: borderSize,
        dx: -scaleWidth / 2,
        dy: -scaleHeight / 2,
        dw: borderSize,
        dh: borderSize
      }, {
        sx: borderSize,
        sy: 0,
        sw: _0x3f82ec - borderSize * 2,
        sh: borderSize,
        dx: -scaleWidth / 2 + borderSize,
        dy: -scaleHeight / 2,
        dw: _0x2b09f1,
        dh: borderSize
      }, {
        sx: _0x3f82ec - borderSize,
        sy: 0,
        sw: borderSize,
        sh: borderSize,
        dx: scaleWidth / 2 - borderSize,
        dy: -scaleHeight / 2,
        dw: borderSize,
        dh: borderSize
      }, {
        sx: 0,
        sy: borderSize,
        sw: borderSize,
        sh: _0x294746 - borderSize * 2,
        dx: -scaleWidth / 2,
        dy: -scaleHeight / 2 + borderSize,
        dw: borderSize,
        dh: _0x990515
      }, {
        sx: borderSize,
        sy: borderSize,
        sw: _0x3f82ec - borderSize * 2,
        sh: _0x294746 - borderSize * 2,
        dx: -scaleWidth / 2 + borderSize,
        dy: -scaleHeight / 2 + borderSize,
        dw: _0x2b09f1,
        dh: _0x990515
      }, {
        sx: _0x3f82ec - borderSize,
        sy: borderSize,
        sw: borderSize,
        sh: _0x294746 - borderSize * 2,
        dx: scaleWidth / 2 - borderSize,
        dy: -scaleHeight / 2 + borderSize,
        dw: borderSize,
        dh: _0x990515
      }, {
        sx: 0,
        sy: _0x294746 - borderSize,
        sw: borderSize,
        sh: borderSize,
        dx: -scaleWidth / 2,
        dy: scaleHeight / 2 - borderSize,
        dw: borderSize,
        dh: borderSize
      }, {
        sx: borderSize,
        sy: _0x294746 - borderSize,
        sw: _0x3f82ec - borderSize * 2,
        sh: borderSize,
        dx: -scaleWidth / 2 + borderSize,
        dy: scaleHeight / 2 - borderSize,
        dw: _0x2b09f1,
        dh: borderSize
      }, {
        sx: _0x3f82ec - borderSize,
        sy: _0x294746 - borderSize,
        sw: borderSize,
        sh: borderSize,
        dx: scaleWidth / 2 - borderSize,
        dy: scaleHeight / 2 - borderSize,
        dw: borderSize,
        dh: borderSize
      }];
      for (var _0x24f653 = 0; _0x24f653 < _0x1d065e.length; _0x24f653++) {
        var scale9Piece = _0x1d065e[_0x24f653];
        var _0xade586 = "_s9_" + _0x24f653;
        if (!_0x2522df.has(_0xade586)) {
          _0x2522df.add(_0xade586, 0, scale9Piece.sx, scale9Piece.sy, scale9Piece.sw, scale9Piece.sh);
        }
        var _0x1145e5 = this.add.image(scale9Piece.dx, scale9Piece.dy, _0x24a44b, _0xade586).setOrigin(0, 0).setDisplaySize(scale9Piece.dw, scale9Piece.dh);
        if (_0x590eba !== undefined) {
          _0x1145e5.setTint(_0x590eba);
        }
        if (_0x206735 !== undefined) {
          _0x1145e5.setAlpha(_0x206735);
        }
        _0x4080b2.add(_0x1145e5);
      }
      return _0x4080b2;
    }
  }, {
    key: "_startGame",
    value: function _startGame() {
      var _this14 = this;
      if (!this._menuActive) {
        return;
      }

      // Stop menu music immediately when entering a level
      this._audio.stopMusic();

      // fixed loading saved new best from local storage
      this._bestPercent = parseFloat(localStorage.getItem("bestPercent_" + (window.currentlevel[2] || "level_1")) || "0");
      this._practiceBestPercent = parseFloat(localStorage.getItem("practiceBestPercent_" + (window.currentlevel[2] || "level_1")) || "0");
      this._menuActive = false;
      this._slideIn = true;
      if (this._menuGlitter) {
        this._menuGlitter.destroy();
        this._menuGlitter = null;
      }
      if (this._menuUpdateLogBtn) {
        this._menuUpdateLogBtn.setVisible(false);
      }
      if (this._menuNewgroundsBtn) {
        this._menuNewgroundsBtn.setVisible(false);
      }
      if (this._menuSettingsBtn) {
        this._menuSettingsBtn.setVisible(false);
      }
      if (this._menuAchievementsBtn) {
        this._menuAchievementsBtn.setVisible(false);
      }
      if (this._menuStatsBtn) {
        this._menuStatsBtn.setVisible(false);
      }
      if (this._playBtn) {
        this.tweens.killTweensOf(this._playBtn);
        this.tweens.add({
          targets: this._playBtn,
          scale: 0.01,
          duration: 200,
          ease: "Quad.In",
          onComplete: function onComplete() {
            _this14._playBtn.destroy();
            _this14._playBtn = null;
          }
        });
      }
      //icon stuff the threequel
      if (this._iconBtn) {
        this._closeIconSelector && this._closeIconSelector(true);
        this.tweens.killTweensOf(this._iconBtn);
        this.tweens.add({
          targets: this._iconBtn,
          scale: 0.01,
          duration: 200,
          ease: "Quad.In",
          onComplete: function onComplete() {
            _this14._iconBtn.destroy();
            _this14._iconBtn = null;
          }
        });
      }
      //creator stuff the threequel
      if (this._creatorBtn) {
        this._closeCreatorMenu && this._closeCreatorMenu(true);
        this._closeSearchMenu && this._closeSearchMenu(true);
        this.tweens.killTweensOf(this._creatorBtn);
        this.tweens.add({
          targets: this._creatorBtn,
          scale: 0.01,
          duration: 200,
          ease: "Quad.In",
          onComplete: function onComplete() {
            _this14._creatorBtn.destroy();
            _this14._creatorBtn = null;
          }
        });
      }
      if (this._robLogo) {
        this.tweens.add({
          targets: this._robLogo,
          y: screenHeight + this._robLogo.height,
          duration: 300,
          ease: "Quad.In",
          onComplete: function onComplete() {
            _this14._robLogo.destroy();
            _this14._robLogo = null;
          }
        });
      }
      if (this._copyrightText) {
        this.tweens.add({
          targets: this._copyrightText,
          y: 680,
          duration: 300,
          ease: "Quad.In",
          onComplete: function onComplete() {
            _this14._copyrightText.destroy();
            _this14._copyrightText = null;
          }
        });
      }
      if (this._menuFsBtn) {
        this.tweens.add({
          targets: this._menuFsBtn,
          y: -this._menuFsBtn.height,
          duration: 300,
          ease: "Quad.In",
          onComplete: function onComplete() {
            _this14._menuFsBtn.destroy();
            _this14._menuFsBtn = null;
          }
        });
      }
      if (this._menuInfoBtn) {
        this.tweens.add({
          targets: this._menuInfoBtn,
          y: -this._menuInfoBtn.height,
          duration: 300,
          ease: "Quad.In",
          onComplete: function onComplete() {
            _this14._menuInfoBtn.destroy();
            _this14._menuInfoBtn = null;
          }
        });
      }
      this._closeInfoPopup();
      this._closeUpdateLogPopup();
      if (this._tryMeImg) {
        this.tweens.add({
          targets: this._tryMeImg,
          y: -this._tryMeImg.height,
          duration: 300,
          ease: "Quad.In",
          onComplete: function onComplete() {
            _this14._tryMeImg.destroy();
            _this14._tryMeImg = null;
          }
        });
      }
      if (this._downloadBtns) {
        var _iterator22 = _createForOfIteratorHelper(this._downloadBtns),
          _step22;
        try {
          var _loop3 = function _loop3() {
            var _0xaa3a95 = _step22.value;
            _this14.tweens.killTweensOf(_0xaa3a95);
            _this14.tweens.add({
              targets: _0xaa3a95,
              y: screenHeight + _0xaa3a95.height,
              duration: 300,
              ease: "Quad.In",
              onComplete: function onComplete() {
                return _0xaa3a95.destroy();
              }
            });
          };
          for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
            _loop3();
          }
        } catch (err) {
          _iterator22.e(err);
        } finally {
          _iterator22.f();
        }
        this._downloadBtns = null;
      }
      if (this._logo) {
        this.tweens.add({
          targets: this._logo,
          y: -this._logo.height,
          duration: 300,
          ease: "Quad.In",
          onComplete: function onComplete() {
            _this14._logo.destroy();
            _this14._logo = null;
          }
        });
      }
      if (window.isEditor) {
        this._cameraX = 0;
        this._cameraY = 0;
        this._playerWorldX = 0;
        this._level.additiveContainer.setVisible(true);
        this._level.container.setVisible(true);
        this._level.topContainer.setVisible(true);
        this._player.setCubeVisible(false);
        this._player2.setCubeVisible(false);
        this._attemptsLabel.setVisible(false);
        window.selectedObjId = 1;
        this._initEditorLogic();
        return;
      }
      this._cameraX = -centerX;
      this._cameraY = 0;
      this._cameraXRef._v = this._cameraX;
      this._prevCameraX = this._cameraX;
      var _0x22e36e = this._cameraX - (this._menuCameraX || 0);
      this._level.shiftGroundTiles(_0x22e36e);
      this._playerWorldX = this._cameraX;
      var speedKey = parseInt(window.settingsMap["kA4"] || "0");
      if (speedKey == 0) {
        playerSpeed = SpeedPortal.ONE_TIMES;
      } else if (speedKey == 1) {
        playerSpeed = SpeedPortal.HALF;
      } else if (speedKey == 2) {
        playerSpeed = SpeedPortal.TWO_TIMES;
      } else if (speedKey == 3) {
        playerSpeed = SpeedPortal.THREE_TIMES;
      } else if (speedKey == 4) {
        playerSpeed = SpeedPortal.FOUR_TIMES;
      }
      this._state.y = 30;
      this._state.onGround = true;
      this._level.additiveContainer.setVisible(true);
      this._level.container.setVisible(true);
      this._level.topContainer.setVisible(true);
      this._player.setCubeVisible(true);
      this._player.reset();
      this._isDual = false;
      this._state2.reset();
      this._player2.reset();
      this._player2.setCubeVisible(false);
      this._player2.setShipVisible(false);
      this._player2.setBallVisible(false);
      this._player2.setWaveVisible(false);
      this._levelAttempts = 1;
      this._attempts++;
      localStorage.setItem("gd_totalAttempts", this._attempts);
      this._attemptsLabel.setText("Attempt " + this._levelAttempts);
      this._attemptsLabel.setVisible(true);
      this._positionAttemptsLabel();
      var gamemode = parseInt(window.settingsMap["kA2"] || "0");
      if (gamemode == 1) {
        this._player.enterShipMode();
      } else if (gamemode == 2) {
        this._state.y = 30;
        this._player.enterBallMode({
          y: 30
        });
      } else if (gamemode == 3) {
        this._player.enterUfoMode();
      } else if (gamemode == 4) {
        this._player.enterWaveMode();
      }
    }
  }, {
    key: "_pushButton",
    value: function _pushButton() {
      var objectsUnderPointer = this.input.manager.hitTest(this.input.activePointer, this._startPosGui.list, this.cameras.main);
      var isOverUI = objectsUnderPointer.length > 0;
      var fromClick = this.input.activePointer.isDown;
      var cancelInput = isOverUI && fromClick;
      if (this._menuActive) {
        this._audio.playEffect("playSound_01", {
          volume: this._sfxVolume
        });
        this._startGame();
        return;
      }
      if (!this._slideIn && !this._state.isDead && !cancelInput) {
        this._state.upKeyDown = true;
        this._state.upKeyPressed = true;
        this._state.queuedHold = true;
        if (!this._state.isFlying && !this._state.isWave && !this._state.isUfo && this._state.canJump) {
          this._player.updateJump(0);
          this._totalJumps++;
          localStorage.setItem("gd_totalJumps", this._totalJumps);
        } else if (this._state.isUfo) {
          this._player.updateJump(0);
          this._totalJumps++;
          localStorage.setItem("gd_totalJumps", this._totalJumps);
        }
      }
    }
  }, {
    key: "_releaseButton",
    value: function _releaseButton() {
      this._state.upKeyDown = false;
      this._state.upKeyPressed = false;
      this._state.queuedHold = false;
    }
  }, {
    key: "_positionMenuItems",
    value: function _positionMenuItems() {
      var _0x1e5db8 = screenWidth / 2;
      if (this._logo) {
        this._logo.x = _0x1e5db8;
      }
      if (this._menuInfoBtn) {
        this._menuInfoBtn.x = screenWidth - 30 - 3;
      }
      if (this._copyrightText) {
        this._copyrightText.x = screenWidth - 20;
      }
      if (this._tryMeImg) {
        this._tryMeImg.x = _0x1e5db8 + 175;
      }
      if (this._menuGlitter) {
        this._menuGlitter.x = _0x1e5db8;
        this._menuGlitter.y = 320;
      }
      if (this._playBtn) {
        this._playBtn.x = _0x1e5db8;
        this.tweens.killTweensOf(this._playBtn, "y");
        this._playBtn.y = 320;
        this.tweens.add({
          targets: this._playBtn,
          y: 324,
          duration: 750,
          ease: "Quad.InOut",
          yoyo: true,
          repeat: -1
        });
      }
      if (this._downloadBtns) {
        var _0x285ef7 = screenWidth - 130;
        var _0x4a8263 = 570;
        var _0x23d03e = 60;
        for (var _0x1bdfae = 0; _0x1bdfae < this._downloadBtns.length; _0x1bdfae++) {
          var yOffset = _0x1bdfae === 1 ? -_0x23d03e : 0;
          this._downloadBtns[_0x1bdfae].setPosition(_0x285ef7, _0x4a8263 + yOffset);
        }
      }
      if (this._iconBtn && this._playBtn) {
        this._iconBtn.x = screenWidth / 2 - this._playBtn.width / 2 - 100 - this._iconBtn.width * this._iconBtn.scaleX / 2;
        this.tweens.killTweensOf(this._iconBtn, "y");
        this._iconBtn.y = 320;
        this.tweens.add({
          targets: this._iconBtn,
          y: 324,
          duration: 750,
          ease: "Quad.InOut",
          yoyo: true,
          repeat: -1
        });
      }
      if (this._creatorBtn && this._playBtn) {
        this._creatorBtn.x = screenWidth / 2 + this._playBtn.width / 2 + 100 + this._creatorBtn.width * this._creatorBtn.scaleX / 2;
        this.tweens.killTweensOf(this._creatorBtn, "y");
        this._creatorBtn.y = 320;
        this.tweens.add({
          targets: this._creatorBtn,
          y: 324,
          duration: 750,
          ease: "Quad.InOut",
          yoyo: true,
          repeat: -1
        });
      }
    }
  }, {
    key: "_positionAttemptsLabel",
    value: function _positionAttemptsLabel() {
      var _0xdbdd91 = this._cameraX + screenWidth / 2;
      if (this._levelAttempts > 1) {
        _0xdbdd91 += 100;
      }
      this._attemptsLabel.setPosition(_0xdbdd91, 150);
    }
  }, {
    key: "_resetGameplayState",
    value: function _resetGameplayState() {
      this._cameraX = -centerX;
      this._cameraY = 0;
      this._cameraXRef._v = -centerX;
      this._prevCameraX = -centerX;
      this._playerWorldX = 0;
      this._deltaBuffer = 0;
      this._deathTimer = 0;
      this._deathSoundPlayed = false;
      this._newBestShown = false;
      this._hadNewBest = false;
      this._levelWon = false;
      this._endCameraOverride = false;
      this._endCamTween = null;
      this._spaceWasDown = false;
    }
  }, {
    key: "_restartLevel",
    value: function _restartLevel() {
      this._attempts++;
      localStorage.setItem("gd_totalAttempts", this._attempts);
      this._levelAttempts++;
      var _0x2ba78a = this._cameraX;
      if (this._levelWon && this._practicedMode.practiceMode) {
        this._practicedMode.togglePracticeMode();
        this._practicedMode.clearCheckpoints();
        if (this._checkpointBtnContainer) {
          this._checkpointBtnContainer.setVisible(false);
        }
      }
      if (this._practicedMode.practiceMode) {
        var checkpoint = this._practicedMode.loadLastCheckpoint();
        if (checkpoint) {
          this._respawnFromCheckpoint();
          return;
        }
      }
      this._practicedMode.clearCheckpoints();
      this._resetGameplayState();
      this._state.reset();
      this._player.reset();
      this._isDual = false;
      this._state2.reset();
      this._player2.reset();
      this._player2.setCubeVisible(false);
      this._player2.setShipVisible(false);
      this._player2.setBallVisible(false);
      this._player2.setWaveVisible(false);
      this._glitterEmitter.stop();
      var speedKey = parseInt(window.settingsMap["kA4"] || "0");
      if (speedKey == 0) {
        playerSpeed = SpeedPortal.ONE_TIMES;
      } else if (speedKey == 1) {
        playerSpeed = SpeedPortal.HALF;
      } else if (speedKey == 2) {
        playerSpeed = SpeedPortal.TWO_TIMES;
      } else if (speedKey == 3) {
        playerSpeed = SpeedPortal.THREE_TIMES;
      } else if (speedKey == 4) {
        playerSpeed = SpeedPortal.FOUR_TIMES;
      }
      this._level.resetObjects();
      this._level.shiftGroundTiles(this._cameraX - _0x2ba78a);
      this._level.resetGroundState();
      this._level.resetColorTriggers();
      this._level.resetAlphaTriggers();
      this._level.resetRotateTriggers();
      this._level.resetPulseTriggers();
      this._level.resetEnterEffectTriggers();
      this._level.resetMoveTriggers();
      this._level.resetVisibility();
      if (this._orbGfx) {
        this._orbGfx.clear();
      }
      this._colorManager.reset();
      this._player.noclipStats.totalFrames = 0;
      this._player.noclipStats.deathFrames = 0;
      this._player.noclipStats.deaths = 0;
      var musicOffset = this._getStartPosMusicOffset();
      var startPositions = this._level.getStartPositions();
      if (this._startPosIndex !== -1 && startPositions[this._startPosIndex]) {
        var pos = startPositions[this._startPosIndex];
        this._playerWorldX = pos.x;
        this._state.y = pos.y;
        if (pos.gameMode == 1) {
          this._player.enterShipMode();
        } else if (pos.gameMode == 2) {
          this._state.y = 30;
          this._player.enterBallMode({
            y: 30
          });
        } else if (pos.gameMode == 3) {
          this._player.enterUfoMode();
        } else if (pos.gameMode == 4) {
          this._player.enterWaveMode();
        } else if (pos.gameMode == 6) {
          this._player.enterSpiderMode();
        }
        this._state.gravityFlipped = pos.gravityFlipped;
        this._state.isMini = pos.miniMode;
        playerSpeed = [SpeedPortal.ONE_TIMES, SpeedPortal.HALF, SpeedPortal.TWO_TIMES, SpeedPortal.THREE_TIMES, SpeedPortal.FOUR_TIMES][pos.speed];
        this._state.mirrored = pos.mirrored;
        this._level.fastForwardTriggers(pos.x, this._colorManager);
      }
      if (!this._practicedMode.practiceMode) {
        this._audio.reset();
        this._audio.startMusic(musicOffset);
      }
      this._paused = false;
      if (this._pauseContainer) {
        this._pauseContainer.destroy();
        this._pauseContainer = null;
      }
      this._pauseBtn.setVisible(true).setAlpha(75 / 255);
      if (this._practiceModeBarContainer) {
        this._practiceModeBarContainer.setVisible(this._practicedMode && this._practicedMode.practiceMode);
      }
      this._attemptsLabel.setText("Attempt " + this._levelAttempts);
      this._attemptsLabel.setVisible(true);
      this._positionAttemptsLabel();
      var gamemode = parseInt(window.settingsMap["kA2"] || "0");
      if (gamemode == 1) {
        this._player.enterShipMode();
      } else if (gamemode == 2) {
        this._state.y = 30;
        this._player.enterBallMode({
          y: 30
        });
      } else if (gamemode == 3) {
        this._player.enterUfoMode();
      } else if (gamemode == 4) {
        this._player.enterWaveMode();
      } else if (gamemode == 6) {
        this._player.enterSpiderMode();
      }
      if (this._player && this._player._hitboxTrail) {
        this._player._hitboxTrail = [];
      }
    }
  }, {
    key: "_getStartPosMusicOffset",
    value: function _getStartPosMusicOffset() {
      var startPositions = this._level.getStartPositions();
      var musicOffset = 0;
      if (this._startPosIndex !== -1 && startPositions[this._startPosIndex]) {
        musicOffset = startPositions[this._startPosIndex].x / 623.16;
      }
      return musicOffset;
    }
  }, {
    key: "_respawnFromCheckpoint",
    value: function _respawnFromCheckpoint() {
      var checkpoint = this._practicedMode.loadLastCheckpoint();
      if (!checkpoint) {
        this._restartLevel();
        return;
      }
      this._deathTimer = 0;
      this._deathSoundPlayed = false;
      this._newBestShown = false;
      this._state.isDead = false;
      this._slideIn = false;
      this._playerWorldX = checkpoint.x;
      this._cameraX = checkpoint.cameraX;
      this._cameraXRef._v = this._cameraX;
      this._state.y = checkpoint.y;
      this._state.yVelocity = checkpoint.yVelocity;
      this._state.gravityFlipped = checkpoint.gravityFlipped;
      this._state.isMini = checkpoint.isMini;
      this._state.isCube = checkpoint.isCube;
      this._state.isShip = checkpoint.isShip;
      this._state.isBall = checkpoint.isBall;
      this._state.isUfo = checkpoint.isUfo;
      this._state.isWave = checkpoint.isWave;
      this._state.isSpider = checkpoint.isSpider;
      this._state.isBird = checkpoint.isBird;
      this._state.isDart = checkpoint.isDart;
      this._state.isRobot = checkpoint.isRobot;
      this._state.isSwing = checkpoint.isSwing;
      this._state.isJetpack = checkpoint.isJetpack;
      this._state.isFlying = checkpoint.isFlying;
      this._state.isJumping = checkpoint.isJumping;
      this._state.onGround = checkpoint.onGround;
      this._state.canJump = checkpoint.canJump;
      this._state.wasBoosted = checkpoint.wasBoosted;
      this._state.rotation = checkpoint.rotation;
      this._state.gravity = checkpoint.gravity;
      this._state.jumpPower = checkpoint.jumpPower;
      this._state.mirrored = checkpoint.mirrored;
      this._state.isDashing = checkpoint.isDashing;
      this._state.dashYVelocity = checkpoint.dashYVelocity;
      this._player.reset();
      this._state.isFlying = false;
      this._state.isBall = false;
      this._state.isWave = false;
      this._state.isUfo = false;
      this._state.isSpider = false;
      this._state.isBird = false;
      if (checkpoint.isFlying) {
        this._player.enterShipMode(null, true);
      } else if (checkpoint.isBall) {
        this._player.enterBallMode();
      } else if (checkpoint.isUfo) {
        this._player.enterUfoMode(null, true);
      } else if (checkpoint.isWave) {
        this._player.enterWaveMode();
      } else if (checkpoint.isSpider) {
        this._player.enterSpiderMode();
      } else if (checkpoint.isBird) {
        this._player.setBirdVisible(true);
        this._player.setCubeVisible(true);
        var _iterator23 = _createForOfIteratorHelper(this._player._playerLayers),
          _step23;
        try {
          for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
            var layer = _step23.value;
            if (layer) {
              layer.sprite.setScale(0.55);
            }
          }
        } catch (err) {
          _iterator23.e(err);
        } finally {
          _iterator23.f();
        }
      } else {
        this._player.setCubeVisible(true);
      }
      this._state.isFlying = checkpoint.isFlying;
      this._state.isBall = checkpoint.isBall;
      this._state.isWave = checkpoint.isWave;
      this._state.isUfo = checkpoint.isUfo;
      this._state.isSpider = checkpoint.isSpider;
      this._state.isBird = checkpoint.isBird;
      this._state.ignorePortals = true;
      this._state2.ignorePortals = true;
      this._level.resetGroundTiles(this._cameraX);
      this._level.resetObjects();
      this._level._flyCeilingY = checkpoint.flyCeilingY;
      this._level._flyGroundActive = checkpoint.flyGroundActive;
      this._level._flyVisualOnly = checkpoint.flyVisualOnly;
      this._level._groundTargetValue = checkpoint.groundTargetValue;
      this._level.flyCameraTarget = checkpoint.flyCameraTarget;
      this._level._groundAnimating = checkpoint.groundAnimating;
      this._level._groundAnimFrom = checkpoint.groundAnimFrom;
      this._level._groundAnimTo = checkpoint.groundAnimTo;
      this._level._groundAnimTime = checkpoint.groundAnimTime;
      this._level._groundAnimDuration = checkpoint.groundAnimDuration;
      this._level._groundStartScreenY = checkpoint.groundStartScreenY !== undefined ? checkpoint.groundStartScreenY - (checkpoint.cameraY || 0) + this._cameraY : b(0) + this._cameraY;
      this._level._ceilingStartScreenY = checkpoint.ceilingStartScreenY - (checkpoint.cameraY || 0) + this._cameraY;
      this._level._groundY = checkpoint.groundY;
      this._level._ceilingY = checkpoint.ceilingY;
      if (typeof checkpoint.speed === "number") {
        playerSpeed = checkpoint.speed;
      } else {
        var speedKey = parseInt(window.settingsMap["kA4"] || "0");
        if (speedKey == 0) {
          playerSpeed = SpeedPortal.ONE_TIMES;
        } else if (speedKey == 1) {
          playerSpeed = SpeedPortal.HALF;
        } else if (speedKey == 2) {
          playerSpeed = SpeedPortal.TWO_TIMES;
        } else if (speedKey == 3) {
          playerSpeed = SpeedPortal.THREE_TIMES;
        } else if (speedKey == 4) {
          playerSpeed = SpeedPortal.FOUR_TIMES;
        }
      }
      this._level.resetColorTriggers();
      this._level.resetAlphaTriggers();
      this._level.resetRotateTriggers();
      this._level.resetPulseTriggers();
      this._level.resetEnterEffectTriggers();
      this._level.resetMoveTriggers();
      this._level.resetVisibility();
      this._level.additiveContainer.x = -this._cameraX;
      this._level.additiveContainer.y = this._cameraY;
      this._level.container.x = -this._cameraX;
      this._level.container.y = this._cameraY;
      this._level.topContainer.x = -this._cameraX;
      this._level.topContainer.y = this._cameraY;
      this._level.updateVisibility(this._cameraX);
      this._updateBackground();
      this._applyMirrorEffect();
      if (!this._audio.isplaying()) {
        this._audio.startMusic();
      }
      if (this._player && this._player._hitboxTrail) {
        this._player._hitboxTrail = [];
      }
    }
  }, {
    key: "_onFullscreenChange",
    value: function _onFullscreenChange(_0x310c5b) {
      var _this15 = this;
      if (!_0x310c5b) {
        l(1138);
      }
      this.time.delayedCall(200, function () {
        return _this15._applyScreenResize();
      });
    }
  }, {
    key: "_applyScreenResize",
    value: function _applyScreenResize() {
      if (this.scale.isFullscreen) {
        var _0x5bc34b = window.innerWidth / window.innerHeight;
        l(Math.round(screenHeight * _0x5bc34b));
      }
      this.scale.setGameSize(screenWidth, screenHeight);
      this.scale.refresh();
      this._bg.setSize(screenWidth, screenHeight);
      this._pauseBtn.x = screenWidth - 30;
      if (this._menuActive) {
        this._positionMenuItems();
      }
      if (this._paused && this._pauseContainer) {
        this._pauseContainer.destroy();
        this._pauseContainer = null;
        this._buildPauseOverlay();
      }
      this._level.resizeScreen();
      if (!this._menuActive) {
        var _0x56287b = this._cameraX;
        this._cameraX = this._playerWorldX - centerX;
        this._cameraXRef._v = this._cameraX;
        this._level.additiveContainer.x = -this._cameraX;
        this._level.additiveContainer.y = this._cameraY;
        this._level.container.x = -this._cameraX;
        this._level.container.y = this._cameraY;
        this._level.topContainer.x = -this._cameraX;
        this._level.topContainer.y = this._cameraY;
        this._level.shiftGroundTiles(this._cameraX - _0x56287b);
        this._level.updateGroundTiles(this._cameraY);
        this._level.updateVisibility(this._cameraX);
        this._level.applyEnterEffects(this._cameraX);
        var _0xde8a1a = this._playerWorldX - this._cameraX;
        this._player.syncSprites(this._cameraX, this._cameraY, 0, this._getMirrorXOffset(_0xde8a1a));
        this._applyMirrorEffect();
      }
    }
  }, {
    key: "_updateBackground",
    value: function _updateBackground() {
      this._bg.tilePositionX += (this._cameraX - this._prevCameraX) * this._bgSpeedX;
      this._prevCameraX = this._cameraX;
      this._bg.tilePositionY = this._bgInitY - this._cameraY * this._bgSpeedY;
    }
  }, {
    key: "_updateCameraY",
    value: function _updateCameraY(_0xc7c517) {
      var explosionPiece = this._cameraY;
      var _0x1a27be = explosionPiece;
      if (this._level.flyCameraTarget !== null) {
        _0x1a27be = this._level.flyCameraTarget;
      } else {
        var _0x2bc8fb = this._state.y;
        var _0x259956 = 140;
        var _0x5025ec = 80;
        var _0x1f7976 = explosionPiece - o + 320;
        if (this._state.gravityFlipped) {
          if (_0x2bc8fb > _0x1f7976 + _0x5025ec) {
            _0x1a27be = _0x2bc8fb - 320 - _0x5025ec + o;
          } else if (_0x2bc8fb < _0x1f7976 - _0x259956) {
            _0x1a27be = _0x2bc8fb - 320 + _0x259956 + o;
          }
        } else {
          if (_0x2bc8fb > _0x1f7976 + _0x259956) {
            _0x1a27be = _0x2bc8fb - 320 - _0x259956 + o;
          } else if (_0x2bc8fb < _0x1f7976 - _0x5025ec) {
            _0x1a27be = _0x2bc8fb - 320 + _0x5025ec + o;
          }
        }
      }
      if (_0x1a27be < 0) {
        _0x1a27be = 0;
      }
      if (_0xc7c517 !== 0) {
        explosionPiece += (_0x1a27be - explosionPiece) / (10 / _0xc7c517);
        if (explosionPiece < 0) {
          explosionPiece = 0;
        }
        this._cameraY = explosionPiece;
      }
    }
  }, {
    key: "_quantizeDelta",
    value: function _quantizeDelta(_0x654f39) {
      var _0x578d1b = _0x654f39 / 1000 + this._deltaBuffer;
      var _0x53e02e = Math.round(_0x578d1b / u);
      if (_0x53e02e < 0) {
        _0x53e02e = 0;
      }
      if (_0x53e02e > 60) {
        _0x53e02e = 60;
      }
      var _0xd8019e = _0x53e02e * u;
      this._deltaBuffer = _0x578d1b - _0xd8019e;
      return _0xd8019e * 60;
    }
  }, {
    key: "update",
    value: function update(_0x54fa47, deltaTime) {
      var _this16 = this;
      if (window.isEditor) {
        if (window.isEditorPaused) return;
        var pointer = this.input.activePointer;
        this._hitObjects = this.input.hitTestPointer(pointer);
        this._handleEditorCamera(deltaTime);
        this._updateEditorGrid();
        if (pointer.isDown) {
          if (this._isSwipeEnabled) {
            if (this._hitObjects.length !== 0) return;
            var currentGridX = Math.floor((pointer.x + this._cameraX) / 60) * 60;
            var currentGridY = Math.floor((pointer.y + this._cameraY + 20) / 60) * 60;
            if (currentGridX !== this._lastSwipeGridX || currentGridY !== this._lastSwipeGridY) {
              this._editorAction();
              this._lastSwipeGridX = currentGridX;
              this._lastSwipeGridY = currentGridY;
            }
          } else {
            if (!this._isDragging && this._hitObjects.length !== 0) return;
            var dragX = pointer.x - this._clickStartPos.x;
            var dragY = pointer.y - this._clickStartPos.y;
            var dragDistance = Math.sqrt(dragX * dragX + dragY * dragY);
            if (dragDistance > 10) {
              this._isDragging = true;
              this._cameraX = this._cameraStartX - dragX;
              this._cameraY = this._cameraStartY - dragY;
            }
          }
        }
        return;
      }
      var rawPercent = this._playerWorldX / this._level.endXPos * 100;
      rawPercent = Math.min(100, Math.max(0, rawPercent));
      var displayValue;
      if (this._levelWon) {
        var p = this._interpolatedPercent != null ? this._interpolatedPercent : rawPercent;
        if (window.percentageDecimals) {
          displayValue = p.toFixed(2) + "%";
        } else {
          displayValue = Math.floor(p) + "%";
        }
      } else if (window.percentageDecimals) {
        displayValue = rawPercent.toFixed(2) + "%";
      } else {
        displayValue = Math.floor(rawPercent) + "%";
      }
      // Only update text if value changed — setText() rebuilds the bitmap each call
      if (this._lastPctText !== displayValue) {
        this._percentageLabel.setText(displayValue);
        this._lastPctText = displayValue;
      }
      var _pctVis = window.showPercentage && !this._menuActive;
      if (this._percentageLabel.visible !== _pctVis) this._percentageLabel.setVisible(_pctVis);
      var _spVis = !!window.startPosSwitcher && !this._menuActive;
      if (this._startPosGui.visible !== _spVis) this._startPosGui.setVisible(_spVis);
      var _ncVis = !!window.noClip && !this._menuActive;
      if (this._noclipIndicator.visible !== _ncVis) this._noclipIndicator.setVisible(_ncVis);
      var _ncaVis = _ncVis && !!window.noClipAccuracy;
      if (this._accuracyIndicator.visible !== _ncaVis) this._accuracyIndicator.setVisible(_ncaVis);
      if (this._deathsIndicator.visible !== _ncaVis) this._deathsIndicator.setVisible(_ncaVis);
      // Skip noclip accuracy text rebuild unless visible
      if (_ncaVis) {
        var _accStr = this._player.noclipStats.accuracy.toFixed(2) + "%";
        if (this._lastAccText !== _accStr) { this._accuracyIndicator.setText(_accStr); this._lastAccText = _accStr; }
        var _dStr = this._player.noclipStats.deaths + " Deaths";
        if (this._lastDeathsText !== _dStr) { this._deathsIndicator.setText(_dStr); this._lastDeathsText = _dStr; }
      }
      this._fpsAccum += deltaTime;
      this._fpsFrames++;
      if (this._fpsAccum >= 250) {
        var _fpsVal = Math.round(this._fpsFrames * 1000 / this._fpsAccum);
        if (this._lastFps !== _fpsVal) {
          this._fpsText.setText(String(_fpsVal));
          this._lastFps = _fpsVal;
        }
        this._fpsAccum = 0;
        this._fpsFrames = 0;
      }
      if (this._paused) {
        // Guard with _resumeQueued so holding a key for ~75ms doesn't queue
        // dozens of timeouts at 240 FPS. Use Phaser's timer so scene.restart cleans it up.
        if (!this._updateLogPopup && (this._spaceKey.isDown || this._upKey.isDown || this._wKey.isDown || this._lKey.isDown) && !this._spaceWasDown && !this._settingsPopup && !this._resumeQueued) {
          this._resumeQueued = true;
          this.time.delayedCall(75, function () {
            _this16._resumeQueued = false;
            if (_this16._paused) _this16._resumeGame();
          });
        }
        this._deltaBuffer = 0;
        return;
      }
      if (this._menuActive) {
        var _anyOverlayOpen = this._iconOverlay || this._creatorOverlay || this._searchOverlay || this._onlineLevelsOverlay || this._settingsLayerOverlay || this._settingsPopup || this._infoPopup || this._newgroundsPopup || this._statsLayerOverlay || this._updateLogPopup;
        if (!_anyOverlayOpen && (this._spaceKey.isDown || this._upKey.isDown || this._wKey.isDown) && !this._spaceWasDown) {
          if (this._creatorMenuOpen) return;
          this._spaceWasDown = true;
          if (this._levelSelectOverlay) {
            this._audio.playEffect("playSound_01", {
              volume: this._sfxVolume
            });
            this._closeLevelSelect(true);
            this._audio.stopMusic();
            this.game.registry.set("autoStartGame", true);
            this.scene.restart();
            return;
          }
          this._openLevelSelect();
          return;
        }
        var _arrowLeft = this._leftKey.isDown || this._aKey.isDown;
        var _arrowRight = this._rightKey.isDown || this._dKey.isDown;
        if (!_anyOverlayOpen && (_arrowLeft || _arrowRight) && !this._arrowWasDown) {
          if (this._levelSelectOverlay) {
            if (_arrowLeft) window.leftbuttoncallback();else window.rightbuttoncallback();
          }
        }
        this._arrowWasDown = _arrowLeft || _arrowRight;
        this._spaceWasDown = this._spaceKey.isDown || this._upKey.isDown || this._wKey.isDown || this._lKey.isDown;
        var menuDelta = Math.min(deltaTime / 1000 * 60, 2);
        var menuSpeed = 0.65;
        this._menuCameraX = (this._menuCameraX || 0) + menuDelta * playerSpeed * d * menuSpeed;
        var _0x38afac = this._cameraX;
        this._cameraX = this._menuCameraX;
        this._updateBackground();
        this._cameraX = _0x38afac;
        this._prevCameraX = this._menuCameraX;
        this._cameraXRef._v = this._menuCameraX;
        this._level.stepGroundAnimation(deltaTime / 1000);
        this._level.updateGroundTiles(this._cameraY);
        if (this._menuRainbowTime === undefined) this._menuRainbowTime = 0;
        this._menuRainbowTime += deltaTime / 1000;
        var _rainbowHue = this._menuRainbowTime * 15 % 360;
        var _rainbowHex = Phaser.Display.Color.HSVToRGB(_rainbowHue / 360, 0.85, 0.9).color;
        var _groundHex = Phaser.Display.Color.HSVToRGB(_rainbowHue / 360, 0.85, 0.55).color;
        this._bg.setTint(_rainbowHex);
        this._level.setGroundColor(_groundHex);
        return;
      }
      if (this._slideIn) {
        var slideDelta = this._quantizeDelta(deltaTime);
        this._playerWorldX += slideDelta * playerSpeed * d;
        var slideGroundSpeed = 0.25;
        this._slideGroundX = (this._slideGroundX || this._cameraX) + slideDelta * playerSpeed * d * slideGroundSpeed;
        this._cameraXRef._v = this._slideGroundX;
        var slidePlayerScreenX = this._playerWorldX - this._cameraX;
        this._player.updateGroundRotation(slideDelta * d);
        this._player.syncSprites(this._cameraX, this._cameraY, deltaTime / 1000, this._getMirrorXOffset(slidePlayerScreenX));
        this._level.additiveContainer.x = -this._cameraX;
        this._level.additiveContainer.y = this._cameraY;
        this._level.container.x = -this._cameraX;
        this._level.container.y = this._cameraY;
        this._level.topContainer.x = -this._cameraX;
        this._level.topContainer.y = this._cameraY;
        this._level.updateVisibility(this._cameraX);
        this._updateBackground();
        this._level.stepGroundAnimation(deltaTime / 1000);
        this._level.updateGroundTiles(this._cameraY);
        this._applyMirrorEffect();
        if (this._playerWorldX >= 0) {
          this._slideIn = false;
          this._deltaBuffer = 0;
          this._playerWorldX = 0;
          this._cameraX = this._playerWorldX - centerX;
          this._cameraXRef._v = this._cameraX;
          var _0x490749 = this._cameraX - this._slideGroundX;
          this._level.shiftGroundTiles(_0x490749);
          if (this._firstPlay) {
            this._firstPlay = false;
            this._audio.startMusic();
          }
          this._pauseBtn.setVisible(true).setAlpha(0);
          this.tweens.add({
            targets: this._pauseBtn,
            alpha: 75 / 255,
            duration: 500
          });
          if (this._practiceModeBarContainer) {
            this._practiceModeBarContainer.setVisible(this._practicedMode && this._practicedMode.practiceMode);
          }
        }
        return;
      }
      var _0x368ad9 = this._spaceKey.isDown || this._upKey.isDown || this._wKey.isDown;
      if (!this._updateLogPopup && _0x368ad9 && (!this._spaceWasDown || !this._state.upKeyDown)) {
        this._pushButton();
      } else if (!_0x368ad9 && this._spaceWasDown) {
        this._releaseButton();
      }
      this._spaceWasDown = _0x368ad9;
      var objectsUnderPointer = this.input.manager.hitTest(this.input.activePointer, this._startPosGui.list, this.cameras.main);
      var isOverUI = objectsUnderPointer.length > 0;
      var fromClick = this.input.activePointer.isDown;
      var cancelInput = isOverUI && fromClick;
      if (!!this.input.activePointer.isDown && !this._state.upKeyDown && !this._state.isDead) {
        this._state.upKeyDown = true;
        this._state.queuedHold = true;
      }
      if (cancelInput) {
        this._state.upKeyDown = false;
        this._state.upKeyPressed = false;
        this._state.queuedHold = false;
      }
      this._level.updateEndPortalY(this._cameraY, this._state.isFlying || this._state.isWave || this._state.isUfo);
      if (!this._levelWon && !this._state.isDead && this._level.endXPos > 0) {
        var _0x448396 = 600;
        if (this._playerWorldX >= this._level.endXPos - _0x448396) {
          this._levelWon = true;
          this._endPortalGameY = this._level._endPortalGameY || 240;
          this._triggerEndPortal();
        }
      }
      if (this._levelWon) {
        this._deltaBuffer = 0;
        if (this._endCamTween) {
          var visMaxSection = this._endCamTween;
          this._cameraX = visMaxSection.fromX + (visMaxSection.toX - visMaxSection.fromX) * visMaxSection.p;
          this._cameraY = visMaxSection.fromY + (visMaxSection.toY - visMaxSection.fromY) * visMaxSection.p;
        }
        this._cameraXRef._v = this._cameraX;
        this._level.additiveContainer.x = -this._cameraX;
        this._level.additiveContainer.y = this._cameraY;
        this._level.container.x = -this._cameraX;
        this._level.container.y = this._cameraY;
        this._level.topContainer.x = -this._cameraX;
        this._level.topContainer.y = this._cameraY;
        this._updateBackground();
        this._level.stepGroundAnimation(deltaTime / 1000);
        this._level.updateGroundTiles(this._cameraY);
        this._applyMirrorEffect();
        return;
      }
      if (this._state.isDead) {
        if (!this._deathSoundPlayed) {
          if (!this._practicedMode.practiceMode) {
            this._audio.stopMusic();
          }
          this._audio.playEffect("explode_11", {
            volume: 0.65 * this._sfxVolume
          });
          this._deathSoundPlayed = true;
          this._totalDeaths++;
          localStorage.setItem("gd_totalDeaths", this._totalDeaths);
        }
        if (!this._newBestShown) {
          this._newBestShown = true;
          var _0x435587 = this._level.endXPos || 6000;
          var _0x169d53 = this._playerWorldX;
          this._lastPercent = Math.min(99, Math.max(0, Math.floor(_0x169d53 / _0x435587 * 100)));
          if (this._lastPercent > this._bestPercent && !this._practicedMode.practiceMode) {
            this._bestPercent = this._lastPercent;
            localStorage.setItem("bestPercent_" + (window.currentlevel[2] || "level_1"), this._bestPercent);
            this._hadNewBest = true;
            this._showNewBest();
          }
          if (this._practicedMode.practiceMode) {
            var pracKey = "practiceBestPercent_" + (window.currentlevel[2] || "level_1");
            var prevPracticeBest = parseFloat(localStorage.getItem(pracKey) || "0");
            if (this._lastPercent > prevPracticeBest) {
              localStorage.setItem(pracKey, this._lastPercent);
              this._practiceBestPercent = this._lastPercent;
              if (this._updatePracticeHUDBar) this._updatePracticeHUDBar();
            }
          }
        }
        this._player.updateExplosionPieces(deltaTime);
        this._deathTimer += deltaTime;
        var _0x237728 = this._hadNewBest ? 1400 : 1000;
        if (this._deathTimer > _0x237728) {
          if (this._practicedMode.practiceMode) {
            this._respawnFromCheckpoint();
          } else {
            this._restartLevel();
          }
        }
        return;
      }
      this._playTime += deltaTime / 1000;
      this._audio.update(deltaTime / 1000);
      window._animTimer += deltaTime;
      var _iterator24 = _createForOfIteratorHelper(window._animatedSprites),
        _step24;
      try {
        for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
          var _as = _step24.value;
          if (window._animTimer - (_as._lastAnimSwap || 0) >= _as._animInterval) {
            _as._lastAnimSwap = window._animTimer;
            _as._animIdx = (_as._animIdx + 1) % _as._animFrames.length;
            var _fr = getAtlasFrame(_as._animScene, _as._animFrames[_as._animIdx]);
            if (_fr) {
              try {
                _as.setTexture(_fr.atlas, _fr.frame);
              } catch (e) {}
            }
          }
        }
      } catch (err) {
        _iterator24.e(err);
      } finally {
        _iterator24.f();
      }
      if (this._level && this._level._sawSprites) {
        var sawRotation = deltaTime * 0.003;
        var _iterator25 = _createForOfIteratorHelper(this._level._sawSprites),
          _step25;
        try {
          for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
            var _saw = _step25.value;
            if (_saw && _saw.active) _saw.rotation += sawRotation;
          }
        } catch (err) {
          _iterator25.e(err);
        } finally {
          _iterator25.f();
        }
      }
      this._level.updateAudioScale(this._audio.getMeteringValue());
      if (!this._orbGfx) {
        this._orbGfx = this.add.graphics().setDepth(54).setBlendMode(S);
      }
      this._orbParticleAngle = ((this._orbParticleAngle || 0) + deltaTime * 0.004) % (Math.PI * 2);
      this._orbGfxTimer = (this._orbGfxTimer || 0) + deltaTime;
      if (this._orbGfxTimer > 33) {
        this._orbGfxTimer = 0;
        this._orbGfx.clear();
        if (this._level && this._level._orbSprites && this._level.container) {
          try {
            var _drawn = 0;
            var _orbTypeColorMap = {
              36: 0xfffb57,
              84: 0x58ffff,
              141: 0xff52f0,
              444: 0xff00d2,
              1022: 0x63ff5f,
              1330: 0xffffff,
              1333: 0xff6326,
              1594: 0x6cff6b,
              1704: 0x04ff04,
              1751: 0xff00d2
            };
            var _iterator26 = _createForOfIteratorHelper(this._level._orbSprites),
              _step26;
            try {
              for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
                var _oSpr = _step26.value;
                if (_drawn >= 4) break;
                if (!_oSpr || !_oSpr.visible || !_oSpr.active || !_oSpr.scene) continue;
                var _sx = _oSpr.x + this._level.container.x;
                var _sy = _oSpr.y + this._level.container.y;
                if (_sx < -40 || _sx > screenWidth + 40 || _sy < -40 || _sy > screenHeight + 40) continue;
                _drawn++;
                var _orbTypeTint = _orbTypeColorMap[_oSpr._orbId];
                for (var _pi = 0; _pi < 5; _pi++) {
                  var _orbitSpeed = 0.7 + _pi % 3 * 0.35;
                  var _orbitR = 34 + _pi * 5 % 17;
                  var _ang = this._orbParticleAngle * _orbitSpeed + _pi * Math.PI * 2 / 5;
                  var _px = _sx + Math.cos(_ang) * _orbitR;
                  var _py = _sy + Math.sin(_ang) * (_orbitR * 0.85);
                  var _size = (window.orbParticleSize || 3.5) + _pi % 3 * 1.0;
                  var _alpha = 0.5 + _pi % 4 * 0.12;
                  this._orbGfx.fillStyle(_orbTypeTint, _alpha);
                  this._orbGfx.fillRect(_px - _size, _py - _size, _size * 2, _size * 2);
                }
              }
            } catch (err) {
              _iterator26.e(err);
            } finally {
              _iterator26.f();
            }
          } catch (e) {}
        }
      }
      var quantizedDelta = this._quantizeDelta(deltaTime);
      var subSteps = quantizedDelta > 0 ? Math.max(1, Math.round(quantizedDelta * 4)) : 0;
      if (subSteps > 60) {
        subSteps = 60;
      }
      var subStepDelta = subSteps > 0 ? quantizedDelta / subSteps : 0;
      var verticalDelta = subStepDelta * d;
      var horizontalDelta = subStepDelta * playerSpeed * d;
      var initialY = this._state.y;
      for (var i = 0; i < subSteps; i++) {
        this._state.lastY = this._state.y;
        this._player.updateJump(verticalDelta);
        this._state.y += this._state.yVelocity * verticalDelta;
        this._player.checkCollisions(this._playerWorldX - centerX);
        this._playerWorldX += horizontalDelta;
        if (this._isDual && !this._state2.isDead) {
          this._state2.upKeyDown = this._state.upKeyDown;
          this._state2.upKeyPressed = this._state.upKeyPressed;
          this._state2.queuedHold = this._state.queuedHold;
          this._state2.lastY = this._state2.y;
          this._player2.updateJump(verticalDelta);
          this._state2.y += this._state2.yVelocity * verticalDelta;
          this._player2.checkCollisions(this._playerWorldX - centerX - horizontalDelta);
          if (this._state2.isDead && !this._state.isDead) {
            this._player.killPlayer();
          }
        }
        if (!this._state.isFlying && !this._state.isWave && !this._state.isUfo) {
          if (this._state.isBall) {
            var ballOnSurface = this._state.onGround || this._state.onCeiling;
            this._player.updateBallRoll(horizontalDelta, ballOnSurface);
          } else if (this._state.onGround) {
            this._player.updateGroundRotation(verticalDelta);
          } else if (this._player.rotateActionActive) {
            this._player.updateRotateAction(u);
          } else if (this._state.isDashing) {
            this._player.updateDashRotation(u);
          }
        }
      }
      this._state.lastY = initialY;
      this._state.ignorePortals = false;
      this._state2.ignorePortals = false;
      if (!this._endCameraOverride) {
        var cameraOffsetX = this._playerWorldX - centerX;
        if (this._level.endXPos > 0) {
          var maxCameraX = this._level.endXPos - screenWidth;
          if (cameraOffsetX >= maxCameraX - 200) {
            this._endCameraOverride = true;
            this._cameraX = cameraOffsetX;
            var endCameraY = -140 + (this._level._endPortalGameY || 240);
            var easingPower = 1.8;
            var easeInOutCubic = function easeInOutCubic(t) {
              return t < 0.5 ? Math.pow(t * 2, easingPower) / 2 : 1 - Math.pow((1 - t) * 2, easingPower) / 2;
            };
            this._endCamTween = {
              p: 0,
              fromX: this._cameraX,
              toX: maxCameraX,
              fromY: this._cameraY,
              toY: endCameraY
            };
            this.tweens.add({
              targets: this._endCamTween,
              p: 1,
              duration: 1200,
              ease: easeInOutCubic
            });
          } else {
            this._cameraX = cameraOffsetX;
          }
        } else {
          this._cameraX = cameraOffsetX;
        }
      }
      if (this._endCameraOverride && this._endCamTween) {
        var tween = this._endCamTween;
        this._cameraX = tween.fromX + (tween.toX - tween.fromX) * tween.p;
        this._cameraY = tween.fromY + (tween.toY - tween.fromY) * tween.p;
      }
      this._cameraXRef._v = this._cameraX;
      if (!this._endCameraOverride) {
        this._updateCameraY(quantizedDelta);
      }
      this._level.additiveContainer.x = -this._cameraX;
      this._level.additiveContainer.y = this._cameraY;
      this._level.container.x = -this._cameraX;
      this._level.container.y = this._cameraY;
      this._level.topContainer.x = -this._cameraX;
      this._level.topContainer.y = this._cameraY;
      var playerX = this._playerWorldX;
      var _iterator27 = _createForOfIteratorHelper(this._level.checkColorTriggers(playerX)),
        _step27;
      try {
        for (_iterator27.s(); !(_step27 = _iterator27.n()).done;) {
          var colorTrigger = _step27.value;
          this._colorManager.triggerColor(colorTrigger.index, colorTrigger.color, colorTrigger.duration);
          if (colorTrigger.tintGround) {
            this._colorManager.triggerColor(gs, colorTrigger.color, colorTrigger.duration);
          }
        }
      } catch (err) {
        _iterator27.e(err);
      } finally {
        _iterator27.f();
      }
      this._level.checkMoveTriggers(playerX);
      this._level.stepMoveTriggers(deltaTime / 1000);
      this._level.checkAlphaTriggers(playerX);
      this._level.stepAlphaTriggers(deltaTime / 1000);
      this._level.checkRotateTriggers(playerX);
      this._level.stepRotateTriggers(deltaTime / 1000);
      this._level.checkPulseTriggers(playerX);
      this._level.stepPulseTriggers(deltaTime / 1000, this._colorManager);
      this._colorManager.step(deltaTime / 1000);
      this._level.applyColorChannels(this._colorManager);
      this._bg.setTint(this._colorManager.getHex(fs));
      this._level.setGroundColor(this._colorManager.getHex(gs));
      this._level.updateVisibility(this._cameraX);
      this._level.checkEnterEffectTriggers(playerX);
      this._level.applyEnterEffects(this._cameraX);
      this._glitterCenterX = this._cameraX + screenWidth / 2;
      this._glitterCenterY = T - this._cameraY;
      this._updateBackground();
      this._level.stepGroundAnimation(deltaTime / 1000);
      this._level.updateGroundTiles(this._cameraY);
      if (this._state.isFlying) {
        this._player.updateShipRotation(quantizedDelta);
      }
      var playerScreenX = this._playerWorldX - this._cameraX;
      this._player.syncSprites(this._cameraX, this._cameraY, deltaTime / 1000, this._getMirrorXOffset(playerScreenX));
      if (this._isDual && !this._state2.isDead) {
        this._player2.syncSprites(this._cameraX, this._cameraY, deltaTime / 1000, this._getMirrorXOffset(playerScreenX));
      }
      this._applyMirrorEffect();
    }
  }, {
    key: "_serializeLevel",
    value: function _serializeLevel(levelData) {
      var settings = levelData.settings || "";
      var objectStrings = (levelData.objects || []).map(this._serializeObject).filter(Boolean);
      var decompressedString = [settings].concat(_toConsumableArray(objectStrings)).join(";");
      var compressed = pako.deflate(decompressedString);
      var binaryString = "";
      for (var i = 0; i < compressed.length; i++) {
        binaryString += String.fromCharCode(compressed[i]);
      }
      var base64 = btoa(binaryString);
      return base64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
    }
  }, {
    key: "_serializeObject",
    value: function _serializeObject(object) {
      var _object$x, _object$y, _object$rot, _object$scale, _object$zLayer, _object$zOrder, _object$groups, _object$color, _object$color2, _object$gameMode, _object$miniMode, _object$speed, _object$mirrored;
      if (!object || !object.id) {
        return "";
      }
      var objectData = _objectSpread({}, object._raw || {});
      objectData[1] = String(object.id);
      objectData[2] = String((_object$x = object.x) !== null && _object$x !== void 0 ? _object$x : 0);
      objectData[3] = String((_object$y = object.y) !== null && _object$y !== void 0 ? _object$y : 0);
      objectData[4] = object.flipX ? "1" : "0";
      objectData[5] = object.flipY ? "1" : "0";
      objectData[6] = String((_object$rot = object.rot) !== null && _object$rot !== void 0 ? _object$rot : 0);
      objectData[32] = String((_object$scale = object.scale) !== null && _object$scale !== void 0 ? _object$scale : 1);
      objectData[24] = String((_object$zLayer = object.zLayer) !== null && _object$zLayer !== void 0 ? _object$zLayer : 0);
      objectData[25] = String((_object$zOrder = object.zOrder) !== null && _object$zOrder !== void 0 ? _object$zOrder : 0);
      objectData[57] = (_object$groups = object.groups) !== null && _object$groups !== void 0 ? _object$groups : "";
      objectData[21] = String((_object$color = object.color1) !== null && _object$color !== void 0 ? _object$color : 0);
      objectData[22] = String((_object$color2 = object.color2) !== null && _object$color2 !== void 0 ? _object$color2 : 0);
      objectData["kA2"] = String((_object$gameMode = object.gameMode) !== null && _object$gameMode !== void 0 ? _object$gameMode : 0);
      objectData["kA3"] = String((_object$miniMode = object.miniMode) !== null && _object$miniMode !== void 0 ? _object$miniMode : 0);
      objectData["kA4"] = String((_object$speed = object.speed) !== null && _object$speed !== void 0 ? _object$speed : 0);
      objectData["kA28"] = String((_object$mirrored = object.mirrored) !== null && _object$mirrored !== void 0 ? _object$mirrored : 0);
      objectData["kA11"] = object.flipGravity ? "1" : "0";
      var parts = [];
      for (var key in objectData) {
        if (objectData[key] === undefined) continue;
        parts.push(key, String(objectData[key]));
      }
      return parts.join(",");
    }
  }, {
    key: "_applyMirrorEffect",
    value: function _applyMirrorEffect() {
      var isMirrored = this._state.mirrored;
      // Skip entirely if not mirrored AND last frame wasn't either — the tiles/containers
      // are already in the un-mirrored state, no work needed.
      if (!isMirrored && this._lastMirrorApplied === false) {
        return;
      }
      // When mirrored, container.x must track cameraX every frame.
      // When NOT mirrored (but was last frame), do the un-mirror once then cache.
      var containers = [this._level.additiveContainer, this._level.container, this._level.topContainer];
      var _gt = this._level._groundTiles;
      var _ct = this._level._ceilingTiles;
      var _tw = this._level._tileW;
      var _i, _len;
      if (isMirrored) {
        var _camWidth = this._cameraX + screenWidth;
        for (_i = 0, _len = containers.length; _i < _len; _i++) {
          containers[_i].scaleX = -1;
          containers[_i].x = _camWidth;
        }
        for (_i = 0, _len = _gt.length; _i < _len; _i++) {
          _gt[_i].x = screenWidth - _gt[_i].x - _tw;
          _gt[_i].setFlipX(true);
        }
        for (_i = 0, _len = _ct.length; _i < _len; _i++) {
          _ct[_i].x = screenWidth - _ct[_i].x - _tw;
          _ct[_i].setFlipX(true);
        }
      } else {
        for (_i = 0, _len = containers.length; _i < _len; _i++) {
          if (containers[_i].scaleX !== 1) containers[_i].scaleX = 1;
        }
        for (_i = 0, _len = _gt.length; _i < _len; _i++) _gt[_i].setFlipX(false);
        for (_i = 0, _len = _ct.length; _i < _len; _i++) _ct[_i].setFlipX(false);
      }
      this._bg.setFlipX(isMirrored);
      this._lastMirrorApplied = isMirrored;
    }
  }, {
    key: "_getMirrorXOffset",
    value: function _getMirrorXOffset(xOffset) {
      return this._state.mirrored ? screenWidth - xOffset : xOffset;
    }
  }, {
    key: "_enableDualMode",
    value: function _enableDualMode() {
      if (this._isDual) return;
      this._isDual = true;
      this._state2.reset();
      this._state2.y = this._state.y;
      this._state2.yVelocity = 0;
      this._state2.onGround = false;
      this._state2.gravityFlipped = !this._state.gravityFlipped;
      this._state2.isMini = this._state.isMini;
      this._state2.mirrored = this._state.mirrored;
      this._state2.isDead = false;
      this._player2.reset();
      if (this._state.isFlying) {
        this._player2.enterShipMode();
      } else if (this._state.isBall) {
        this._player2.enterBallMode();
      } else if (this._state.isWave) {
        this._player2.enterWaveMode();
      } else if (this._state.isUfo) {
        this._player2.enterUfoMode();
      } else if (this._state.isSpider) {
        this._player2.enterSpiderMode();
      } else {
        this._player2.setCubeVisible(true);
      }
      this._state2.gravityFlipped = !this._state.gravityFlipped;
    }
  }, {
    key: "_disableDualMode",
    value: function _disableDualMode() {
      if (!this._isDual) return;
      this._isDual = false;
      this._state2.isDead = true;
      this._player2.setCubeVisible(false);
      this._player2.setShipVisible(false);
      this._player2.setBallVisible(false);
      this._player2.setWaveVisible(false);
    }
  }, {
    key: "_showNewBest",
    value: function _showNewBest() {
      var _this17 = this;
      var _0x9f2437 = screenWidth / 2;
      var _0x12bde3 = this.add.image(0, 0, "GJ_WebSheet", "GJ_newBest_001.png").setOrigin(0.5, 1);
      var _0x544c9c = this.add.bitmapText(0, 2, "bigFont", this._lastPercent + "%", 65).setOrigin(0.5, 0).setScale(1.1);
      var _0x326cb9 = this.add.container(_0x9f2437, 300, [_0x12bde3, _0x544c9c]).setScrollFactor(0).setDepth(60).setScale(0.01);
      this.tweens.add({
        targets: _0x326cb9,
        scale: 1,
        duration: 400,
        ease: "Elastic.Out",
        easeParams: [1, 0.6],
        onComplete: function onComplete() {
          _this17.tweens.add({
            targets: _0x326cb9,
            scale: 0.01,
            duration: 200,
            delay: 700,
            ease: "Quad.In",
            onComplete: function onComplete() {
              _0x326cb9.setVisible(false);
              _0x326cb9.destroy();
            }
          });
        }
      });
    }
  }, {
    key: "_triggerEndPortal",
    value: function _triggerEndPortal() {
      var _this18 = this;
      this._player.playEndAnimation(this._level.endXPos, function () {
        return _this18._levelComplete();
      }, this._endPortalGameY);
    }
  }, {
    key: "_levelComplete",
    value: function _levelComplete() {
      var _this19 = this;
      if (!this._practicedMode.practiceMode) {
        this._bestPercent = 100;
        localStorage.setItem("bestPercent_" + (window.currentlevel[2] || "level_1"), 100);
        var completedKey = "gd_completedSet";
        var completedSet;
        try {
          completedSet = JSON.parse(localStorage.getItem(completedKey) || "[]");
        } catch (e) {
          completedSet = [];
        }
        var levelId = window.currentlevel[2] || "level_1";
        if (!completedSet.includes(levelId)) {
          completedSet.push(levelId);
          localStorage.setItem(completedKey, JSON.stringify(completedSet));
          window._completedLevels = completedSet.length;
          localStorage.setItem("gd_completedLevels", window._completedLevels);
        }
      } else {
        this._practiceBestPercent = 100;
        localStorage.setItem("practiceBestPercent_" + (window.currentlevel[2] || "level_1"), 100);
        if (this._updatePracticeHUDBar) this._updatePracticeHUDBar();
      }
      var _0x356782 = this._level.endXPos - this._cameraX;
      var _0x2d967b = b(this._endPortalGameY) + this._cameraY;
      for (var _0x481f7c = 0; _0x481f7c < 5; _0x481f7c++) {
        this.time.delayedCall(_0x481f7c * 50, function () {
          return circleEffect(_this19, _0x356782, _0x2d967b, 10, screenWidth, 500, false, true, window.mainColor);
        });
      }
      circleEffect(this, _0x356782, _0x2d967b, 10, 1000, 500, true, false, window.mainColor);
      this._showCompleteEffect();
    }
  }, {
    key: "_showCompleteEffect",
    value: function _showCompleteEffect() {
      var _this20 = this;
      this._audio.fadeOutMusic(1500);
      this._audio.playEffect("endStart_02", { volume: 0.8 * this._sfxVolume });
      (function (_0x3f5321, _0x8f5267, _0x2f1e2d, _0x4b5e5b) {
        var _0x29d856 = 2;
        var _0x1b2543 = 8;
        var _0x2cc21f = _0x29d856 * 1;
        var _0x26b2b1 = _0x29d856 * 30;
        var _0x6f49c1 = _0x29d856 * 20;
        var _0x232789 = Math.round(Math.sqrt(Math.pow(screenWidth, 2) + 102400)) + _0x29d856 * 32.5;
        var _0x1c105b = 180;
        var _0x586720 = 40;
        var _0x57b9ff = 195;
        var _0x2b6612 = 40;
        var _0x5ce50e = 40;
        var _0x4da54f = 155 / 255;
        var _0x20decf = 100 / 255;
        var _0x576e6f = 400;
        var _0x487fb1 = -135;
        var _0x323ded = 90 / _0x1b2543;
        var _0x44369e = Array.from({
          length: _0x1b2543
        }, function (_0x18e51d, _0x59ebd4) {
          return _0x487fb1 + _0x59ebd4 * _0x323ded;
        });
        for (var _0x59890f = _0x44369e.length - 1; _0x59890f > 0; _0x59890f--) {
          var _0x2bf73b = Math.floor(Math.random() * (_0x59890f + 1));
          var _ref4 = [_0x44369e[_0x2bf73b], _0x44369e[_0x59890f]];
          _0x44369e[_0x59890f] = _ref4[0];
          _0x44369e[_0x2bf73b] = _ref4[1];
        }
        var _0x594d69 = 0;
        var _0x116c8c = [];
        var _loop4 = function _loop4() {
          var _0x1a79fc = _0x104cbb * _0x57b9ff + _0x2b6612 + _0x5ce50e * (Math.random() * 2 - 1);
          var _0x6eb03a = _0x26b2b1 + _0x6f49c1 * (Math.random() * 2 - 1);
          var _0x2e9531 = _0x1c105b + _0x586720 * (Math.random() * 2 - 1);
          var _0x28e7b3 = Math.min(1, Math.max(0, _0x4da54f + _0x20decf * (Math.random() * 2 - 1)));
          var _0x34147c = _0x44369e[_0x104cbb] + _0x323ded * Math.random() + 180;
          var containerY = _0x3f5321.add.graphics().setScrollFactor(0).setDepth(-1).setBlendMode(S).setPosition(_0x8f5267, _0x2f1e2d).setAngle(_0x34147c).setAlpha(_0x28e7b3).setVisible(false);
          var _0x496d96 = {
            h: 1,
            w: _0x2cc21f
          };
          _0x3f5321.time.delayedCall(Math.max(0, _0x1a79fc), function () {
            containerY.setVisible(true);
            _0x3f5321.tweens.add({
              targets: _0x496d96,
              h: _0x232789,
              w: _0x6eb03a,
              duration: _0x2e9531,
              ease: "Quad.Out",
              onUpdate: function onUpdate() {
                var _0x2db3d7 = _0x2cc21f + (_0x496d96.w - _0x2cc21f) / 4;
                containerY.clear();
                containerY.fillStyle(_0x4b5e5b, 1);
                containerY.beginPath();
                containerY.moveTo(-_0x2db3d7 / 2, 0);
                containerY.lineTo(_0x2db3d7 / 2, 0);
                containerY.lineTo(_0x496d96.w / 2, _0x496d96.h);
                containerY.lineTo(-_0x496d96.w / 2, _0x496d96.h);
                containerY.closePath();
                containerY.fillPath();
              }
            });
          });
          if (_0x1a79fc > _0x594d69) {
            _0x594d69 = _0x1a79fc;
          }
          _0x116c8c.push(containerY);
        };
        for (var _0x104cbb = 0; _0x104cbb < _0x1b2543; _0x104cbb++) {
          _loop4();
        }
        _0x3f5321.time.delayedCall(_0x594d69 + _0x576e6f, function () {
          var _loop5 = function _loop5() {
            var _0x15b95e = _x116c8c[_i17];
            var _0x51b5fc = Math.random() * 200;
            var _0x3ed1de = 400 + (Math.random() * 2 - 1) * 100;
            _0x3f5321.tweens.add({
              targets: _0x15b95e,
              alpha: 0,
              delay: _0x51b5fc,
              duration: _0x3ed1de,
              onComplete: function onComplete() {
                return _0x15b95e.destroy();
              }
            });
          };
          for (var _i17 = 0, _x116c8c = _0x116c8c; _i17 < _x116c8c.length; _i17++) {
            _loop5();
          }
        });
      })(this, this._level.endXPos - this._cameraX + 60, b(this._endPortalGameY) + this._cameraY, window.mainColor);
      this.cameras.main.shake(1950, 0.004);
      this.time.delayedCall(1950, function () {
        return _this20._showCompleteText();
      });
    }
  }, {
    key: "_showCompleteText",
    value: function _showCompleteText() {
      var _this21 = this;
      var _0x56628c = screenWidth / 2;
      var _0x45ab26 = this.add.image(_0x56628c, 250, "GJ_WebSheet", "GJ_levelComplete_001.png").setScrollFactor(0).setDepth(60).setScale(0.01);
      this.tweens.add({
        targets: _0x45ab26,
        scale: 1.1,
        duration: 660,
        ease: "Elastic.Out",
        easeParams: [1, 0.6],
        onComplete: function onComplete() {
          _this21.tweens.add({
            targets: _0x45ab26,
            scale: 0.01,
            duration: 220,
            delay: 880,
            ease: "Quad.In",
            onComplete: function onComplete() {
              _0x45ab26.setVisible(false);
              _0x45ab26.destroy();
            }
          });
        }
      });
      var _0x2884ff = [window.mainColor, 16777215];
      for (var _0x5f16c8 = 0; _0x5f16c8 < 2; _0x5f16c8++) {
        this.add.particles(_0x56628c, 250, "GJ_WebSheet", {
          frame: "square.png",
          speed: {
            min: 300,
            max: 700
          },
          angle: {
            min: 0,
            max: 360
          },
          scale: {
            start: 0.4,
            end: 0.13
          },
          lifespan: {
            min: 0,
            max: 1000
          },
          quantity: 50,
          stopAfter: 200,
          blendMode: S,
          tint: _0x2884ff[_0x5f16c8],
          x: {
            min: -800,
            max: 800
          },
          y: {
            min: -80,
            max: 80
          }
        }).setScrollFactor(0).setDepth(59);
      }
      var _0x2eadf2 = this._level.endXPos - this._cameraX;
      var _0x380b24 = b(this._endPortalGameY) + this._cameraY;
      circleEffect(this, _0x2eadf2, _0x380b24, 10, screenWidth, 800, true, false, window.mainColor);
      circleEffect(this, _0x56628c, 250, 10, 1000, 800, true, false, window.mainColor);
      for (var _0x579e05 = 0; _0x579e05 < 5; _0x579e05++) {
        this.time.delayedCall(_0x579e05 * 50, function () {
          return circleEffect(_this21, _0x2eadf2, _0x380b24, 10, screenWidth, 500, false, true, window.mainColor);
        });
      }
      for (var _0x429722 = 0; _0x429722 < 10; _0x429722++) {
        var _0xbf7dd0 = _0x429722 * 150 + (Math.random() * 160 - 80);
        this.time.delayedCall(Math.max(0, _0xbf7dd0), function () {
          return particleEffect(_this21, window.mainColor, window.secondaryColor);
        });
      }
      this.time.delayedCall(1500, function () {
        return _this21._showEndLayer();
      });
    }
  }, {
    key: "_showEndLayer",
    value: function _showEndLayer() {
      var _this22 = this;
      if (this._pauseBtn) {
        this.tweens.add({
          targets: this._pauseBtn,
          alpha: 0,
          duration: 300
        });
      }
      var containerX = screenWidth / 2;
      var _0x1aa656 = 320;
      this._endLayerOverlay = this.add.rectangle(containerX, _0x1aa656, screenWidth, screenHeight, 0, 0).setScrollFactor(0).setDepth(200).setInteractive();
      this._endLayerInternal = this.add.container(0, -640).setScrollFactor(0).setDepth(201);
      this.tweens.add({
        targets: this._endLayerOverlay,
        alpha: 100 / 255,
        duration: 1000
      });
      var _0x59b9ab = {
        p: 0
      };
      this.tweens.add({
        targets: _0x59b9ab,
        p: 1,
        duration: 1000,
        ease: "Bounce.Out",
        onUpdate: function onUpdate() {
          _this22._endLayerInternal.y = _0x59b9ab.p * 650 - 640;
        },
        onComplete: function onComplete() {
          return _this22._playStarAward();
        }
      });
      var _0x595215 = 712;
      var _0x950c8d = 460;
      var _0x2a115c = (screenWidth - _0x595215) / 2;
      this._endLayerInternal.add(this.add.rectangle(_0x2a115c + 356, 310, _0x595215, _0x950c8d, 0, 180 / 255));
      var _0x43f2e3 = this.textures.getFrame("GJ_WebSheet", "GJ_table_side_001.png");
      var _0x3feccc = _0x43f2e3 ? _0x950c8d / _0x43f2e3.height : 1;
      this._endLayerInternal.add(this.add.image(_0x2a115c - 40, 80, "GJ_WebSheet", "GJ_table_side_001.png").setOrigin(0, 0).setScale(1, _0x3feccc));
      this._endLayerInternal.add(this.add.image(_0x2a115c + _0x595215 + 40, 80, "GJ_WebSheet", "GJ_table_side_001.png").setOrigin(1, 0).setFlipX(true).setScale(1, _0x3feccc));
      var _0x33b564 = this.add.image(_0x2a115c + 356, 70, "GJ_WebSheet", "GJ_table_top_001.png");
      this._endLayerInternal.add(_0x33b564);
      this._endLayerInternal.add(this.add.image(_0x2a115c + 356, 560, "GJ_WebSheet", "GJ_table_bottom_001.png"));
      var _0x3e9c79 = _0x33b564.y - 35;
      this._endLayerInternal.add(this.add.image(containerX - 312, _0x3e9c79, "GJ_WebSheet", "chain_01_001.png").setOrigin(0.5, 1));
      this._endLayerInternal.add(this.add.image(containerX + 312, _0x3e9c79, "GJ_WebSheet", "chain_01_001.png").setOrigin(0.5, 1));
      this._endLayerInternal.add(this.add.image(containerX, 170, "GJ_WebSheet", "GJ_levelComplete_001.png").setScale(0.8));
      var _0x45b6e4 = 0.8;
      var _0xe44f6d = 250;
      var _0x2de55e = this.add.bitmapText(containerX, _0xe44f6d, "goldFont", "Attempts: " + this._attempts, 40).setOrigin(0.5, 0.5).setScale(_0x45b6e4);
      this._endLayerInternal.add(_0x2de55e);
      _0xe44f6d += 48;
      this._endLayerInternal.add(this.add.bitmapText(containerX, _0xe44f6d, "goldFont", "Jumps: " + this._totalJumps, 40).setOrigin(0.5, 0.5).setScale(_0x45b6e4));
      _0xe44f6d += 48;
      var _0x596450 = Math.floor(this._playTime);
      var _0x30687e = Math.floor(_0x596450 / 3600);
      var _0x52f8ee = Math.floor(_0x596450 % 3600 / 60);
      var _0x2591d0 = _0x596450 % 60;
      var _0x2be782;
      _0x2be782 = _0x30687e > 0 ? String(_0x30687e).padStart(2, "0") + ":" + String(_0x52f8ee).padStart(2, "0") + ":" + String(_0x2591d0).padStart(2, "0") : String(_0x52f8ee).padStart(2, "0") + ":" + String(_0x2591d0).padStart(2, "0");
      var _0x241209 = _0xe44f6d;
      this._endLayerInternal.add(this.add.bitmapText(containerX, _0xe44f6d, "goldFont", "Time: " + _0x2be782, 40).setOrigin(0.5, 0.5).setScale(_0x45b6e4));
      var _0x452429 = ["Awesome!", "Good\nJob!", "Well\nDone!", "Impressive!", "Amazing!", "Incredible!", "Skillful!", "Brilliant!", "Not\nbad!", "Warp\nSpeed!", "Challenge\nBreaker!", "Reflex\nMaster!", "I am\nspeechless...", "You are...\nThe One!", "How is this\npossible!?", "You beat\nme..."];
      var _0x165c06 = _0x452429[Math.floor(Math.random() * _0x452429.length)];
      var _0x45540f = 225;
      this._endLayerInternal.add(this.add.bitmapText(containerX + _0x45540f, _0x241209, "bigFont", _0x165c06, 40).setOrigin(0.5, 0.5).setScale(0.8).setCenterAlign());
      // "Get it!" sticker + Discord/Steam download buttons removed from the
      // level-complete screen — external promo, not relevant to the mod.
      _0x2de55e.width;
      this._endStarX = containerX + _0x45540f;
      this._endStarY = _0x241209 - 77.5;
      var _0x45fc2b = [{
        frame: "GJ_replayBtn_001.png",
        dx: -200,
        action: function action() {
          return _this22._hideEndLayer(function () {
            return _this22._restartLevel();
          });
        }
      }, {
        frame: "GJ_menuBtn_001.png",
        dx: 200,
        action: function action() {
          _this22._audio.playEffect("quitSound_01", { volume: _this22._sfxVolume });
          _this22._audio.stopMusic();
          _this22.game.registry.set("fadeInFromBlack", true);
          _this22.cameras.main.fadeOut(400, 0, 0, 0, function (_0x53bf86, _0x15310d) {
            if (_0x15310d >= 1) {
              _this22.scene.restart();
            }
          });
        }
      }];
      for (var _i18 = 0, _x45fc2b = _0x45fc2b; _i18 < _x45fc2b.length; _i18++) {
        var _0x2d4335 = _x45fc2b[_i18];
        var _0xdde774 = this.add.image(containerX + _0x2d4335.dx, 555, "GJ_WebSheet", _0x2d4335.frame).setInteractive();
        this._endLayerInternal.add(_0xdde774);
        this._makeBouncyButton(_0xdde774, 1, _0x2d4335.action);
      }
    }
  }, {
    key: "_showSettingsScreen",
    value: function _showSettingsScreen() {
      var _this23 = this;
      if (this._settingsLayerOverlay) return; // already open — no double-build
      this._settingsScreenClosing = false;
      if (this._pauseBtn) {
        this.tweens.add({
          targets: this._pauseBtn,
          alpha: 0,
          duration: 300
        });
      }
      var containerX = screenWidth / 2;
      var _0x1aa656 = 320;
      this._settingsLayerOverlay = this.add.rectangle(containerX, _0x1aa656, screenWidth, screenHeight, 0, 0).setScrollFactor(0).setDepth(200).setInteractive();
      this._settingsLayerInternal = this.add.container(0, -640).setScrollFactor(0).setDepth(201);
      this._settingsScreenClosing = false;
      this.tweens.add({
        targets: this._settingsLayerOverlay,
        alpha: 180 / 255,
        duration: 400,
        ease: "Linear"
      });
      var _0x59b9ab = {
        p: 0
      };
      this.tweens.add({
        targets: _0x59b9ab,
        p: 1,
        duration: 500,
        ease: "Quad.Out",
        onUpdate: function onUpdate() {
          _this23._settingsLayerInternal.y = _0x59b9ab.p * 650 - 640;
        },
        onComplete: function onComplete() {}
      });
      var _0x595215 = 712;
      var _0x950c8d = 460;
      var _0x2a115c = (screenWidth - _0x595215) / 2;
      this._settingsLayerInternal.add(this.add.rectangle(_0x2a115c + 356, 310, _0x595215, _0x950c8d, 0, 180 / 255));
      var _0x43f2e3 = this.textures.getFrame("GJ_WebSheet", "GJ_table_side_001.png");
      var _0x3feccc = _0x43f2e3 ? _0x950c8d / _0x43f2e3.height : 1;
      this._settingsLayerInternal.add(this.add.image(_0x2a115c - 40, 80, "GJ_WebSheet", "GJ_table_side_001.png").setOrigin(0, 0).setScale(1, _0x3feccc));
      this._settingsLayerInternal.add(this.add.image(_0x2a115c + _0x595215 + 40, 80, "GJ_WebSheet", "GJ_table_side_001.png").setOrigin(1, 0).setFlipX(true).setScale(1, _0x3feccc));
      var _0x33b564 = this.add.image(_0x2a115c + 356, 70, "GJ_WebSheet", "GJ_table_top_001.png");
      this._settingsLayerInternal.add(_0x33b564);
      this._settingsLayerInternal.add(this.add.image(_0x2a115c + 356, 560, "GJ_WebSheet", "GJ_table_bottom_001.png"));
      var _0x3e9c79 = _0x33b564.y - 35;
      this._settingsLayerInternal.add(this.add.image(containerX - 312, _0x3e9c79, "GJ_WebSheet", "chain_01_001.png").setOrigin(0.5, 1));
      this._settingsLayerInternal.add(this.add.image(containerX + 312, _0x3e9c79, "GJ_WebSheet", "chain_01_001.png").setOrigin(0.5, 1));
      this._settingsLayerInternal.add(this.add.bitmapText(containerX, 65, "bigFont", "Settings", 55).setOrigin(0.5, 0.5));
      var _sBtnBorder = this.textures.get("GJ_button01").source[0].width * 0.3;
      var _sBtnH = 62;
      var _sBtnW2 = 310;
      var _sBtnW3 = 200;
      var _sGap = 18;
      var _sColL = containerX - _sBtnW2 / 2 - _sGap / 2;
      var _sColR = containerX + _sBtnW2 / 2 + _sGap / 2;
      var _sCol3L = containerX - _sBtnW3 - _sGap;
      var _sCol3M = containerX;
      var _sCol3R = containerX + _sBtnW3 + _sGap;
      var _sRow1Y = 155;
      var _sRow2Y = 235;
      var _sRow3Y = 312;
      var _makeSettingsBtn = function _makeSettingsBtn(cx, cy, label, btnW, isActive, action) {
        var grp = _this23.add.container(cx, cy);
        var tint = isActive ? 0xffffff : 0x666666;
        var btn9 = _this23._drawScale9(0, 0, btnW, _sBtnH, "GJ_button01", _sBtnBorder, tint, 1);
        grp.add(btn9);
        var fontSize = label === "How To Play" ? 41 : 50;
        var lbl = _this23.add.bitmapText(0, -5, "goldFont", label, fontSize).setOrigin(0.5, 0.5);
        if (!isActive) lbl.setTint(0x666666);
        grp.add(lbl);
        if (isActive && action) {
          var hitZone = _this23.add.zone(0, 0, btnW, _sBtnH).setInteractive();
          grp.add(hitZone);
          var baseScale = 1;
          var pressedScale = baseScale * 1.26;
          hitZone.on("pointerdown", function () {
            hitZone._pressed = true;
            _this23.tweens.killTweensOf(grp, "scale");
            _this23.tweens.add({
              targets: grp,
              scale: pressedScale,
              duration: 300,
              ease: "Bounce.Out"
            });
          });
          hitZone.on("pointerout", function () {
            if (hitZone._pressed) {
              hitZone._pressed = false;
              _this23.tweens.killTweensOf(grp, "scale");
              _this23.tweens.add({
                targets: grp,
                scale: baseScale,
                duration: 400,
                ease: "Bounce.Out"
              });
            }
          });
          hitZone.on("pointerup", function () {
            if (hitZone._pressed) {
              hitZone._pressed = false;
              _this23.tweens.killTweensOf(grp, "scale");
              grp.setScale(baseScale);
              action();
            }
          });
        }
        _this23._settingsLayerInternal.add(grp);
        return grp;
      };
      // Dead buttons removed (Account, Graphics, Rate, Songs, Help did nothing
      // when clicked). The two working buttons share row 1.
      _makeSettingsBtn(_sColL, _sRow1Y, "Options", _sBtnW2, true, function () {
        _this23._buildSettingsPopup();
      });
      _makeSettingsBtn(_sColR, _sRow1Y, "How To Play", _sBtnW2, true, function () {
        _this23._buildHowToPlayPopup();
      });
      // Vault lock icon removed — `_openVaultMenu` does not exist anywhere in
      // the codebase, so clicking it threw a TypeError (dead button).
      var _0x45b6e4 = 0.8;
      var _0xe44f6d = 250;
      // Moved up from 430 — rows 2/3 of buttons no longer exist
      var sliderStartY = 310;
      var _0x22b43a = 0.7;
      var _0x41925a = this.textures.getFrame("GJ_WebSheet", "slidergroove.png");
      var _0x372782 = _0x41925a ? _0x41925a.width : 420;
      var createSlider = function createSlider(posY, labelText, initialVal, setter) {
        _this23._settingsLayerInternal.add(_this23.add.bitmapText(containerX, posY - 37, "bigFont", labelText, 33).setOrigin(0.5, 0.5));
        var barMaxW = (_0x372782 - 8) * _0x22b43a * 1.3;
        var barStartX = containerX - barMaxW / 2 + 2.8;
        var fillW = initialVal * barMaxW;
        var fillBar = _this23.add.tileSprite(barStartX, posY, fillW > 0 ? fillW : 1, 18, "sliderBar").setOrigin(0, 0.5);
        _this23._settingsLayerInternal.add(fillBar);
        var groove = _this23.add.image(containerX, posY, "GJ_WebSheet", "slidergroove.png").setScale(_0x22b43a * 1.3).setInteractive();
        _this23._settingsLayerInternal.add(groove);
        var thumb = _this23.add.image(barStartX + fillW, posY, "GJ_WebSheet", "sliderthumb.png").setScale(_0x22b43a * 1.3).setInteractive({
          draggable: true
        });
        _this23._settingsLayerInternal.add(thumb);
        var updateSlider = function(newX) {
          thumb.x = Math.max(barStartX, Math.min(barStartX + barMaxW, newX));
          var pct = (thumb.x - barStartX) / barMaxW;
          fillBar.width = Math.max(1, pct * barMaxW);
          setter(pct < 0.03 ? 0 : pct);
        };
        thumb.on("drag", function (p, dragX) {
          updateSlider(dragX);
        });
        groove.on("pointerdown", function (p) {
          updateSlider(p.x);
        });
      };
      createSlider(sliderStartY - 15, "Music", this._audio.getUserMusicVolume(), function (v) {
        return _this23._audio.setUserMusicVolume(v);
      });
      createSlider(sliderStartY + 60, "SFX", this._sfxVolume, function (v) {
        _this23._sfxVolume = v;
        localStorage.setItem("userSfxVol", v);
      });
      var checkboxY = sliderStartY - 10;
      var checkboxX = containerX + 280;
      this._settingsLayerInternal.add(this.add.bitmapText(checkboxX, checkboxY - 42, "bigFont", "Menu", 20).setOrigin(0.5, 0.5));
      this._settingsLayerInternal.add(this.add.bitmapText(checkboxX, checkboxY - 22, "bigFont", "Music", 20).setOrigin(0.5, 0.5));
      var getMenuMusicEnabled = function getMenuMusicEnabled() {
        var saved = localStorage.getItem("menuMusicEnabled");
        return saved === null ? true : saved === "true";
      };
      var setMenuMusicEnabled = function setMenuMusicEnabled(value) {
        return localStorage.setItem("menuMusicEnabled", value);
      };
      var getTex = function getTex() {
        return getMenuMusicEnabled() ? "GJ_checkOn_001.png" : "GJ_checkOff_001.png";
      };
      var check = this.add.image(checkboxX, checkboxY + 15, "GJ_GameSheet03", getTex()).setScale(0.7).setInteractive();
      this._settingsLayerInternal.add(check);
      this._makeBouncyButton(check, 0.8, function () {
        var newState = !getMenuMusicEnabled();
        setMenuMusicEnabled(newState);
        check.setTexture("GJ_GameSheet03", getTex());
        if (newState) {
          if (!_this23._audio.isplaying()) {
            _this23._audio.startMenuMusic();
          }
        } else {
          if (_this23._audio.isplaying()) {
            _this23._audio.stopMusic();
          }
        }
      });
      var backArrow = this.add.image(containerX - 535, 30, "GJ_GameSheet03", "GJ_arrow_03_001.png").setInteractive();
      this._settingsLayerInternal.add(backArrow);
      this._makeBouncyButton(backArrow, 1, function () {
        return _this23._hideSettingsScreen();
      });
      var closeBtn = this.add.image(containerX + 535, 30, "GJ_WebSheet", "GJ_closeBtn_001.png").setScale(0.9).setInteractive();
      this._settingsLayerInternal.add(closeBtn);
      this._makeBouncyButton(closeBtn, 0.9, function () {
        return _this23._hideSettingsScreen();
      });
    }
  }, {
    key: "_playSettingsStarAward",
    value: function _playSettingsStarAward() {
      if (!this._settingsLayerInternal) {
        return;
      }
      var _0x4edc03 = screenWidth / 2; // was undefined `containerX` (latent ReferenceError)
      var _0x5a0e9 = 200;
      var _0x453043 = this.add.image(_0x4edc03, _0x5a0e9, "GJ_WebSheet", "GJ_bigStar_001.png").setScale(3).setAlpha(0);
      this._settingsLayerInternal.add(_0x453043);
      this.tweens.add({
        targets: _0x453043,
        scale: 0.8,
        alpha: 1,
        duration: 300,
        delay: 0,
        ease: "Bounce.Out"
      });
    }
  }, {
    key: "_hideSettingsScreen",
    value: function _hideSettingsScreen() {
      var _this24 = this;
      if (!this._settingsLayerInternal || this._settingsScreenClosing) {
        return;
      }
      this._settingsScreenClosing = true;
      var _0x272eb1 = function _0x272eb1() {
        _this24._settingsScreenClosing = false;
        if (_this24._settingsLayerOverlay) {
          _this24._settingsLayerOverlay.destroy();
          _this24._settingsLayerOverlay = null;
        }
        if (_this24._settingsLayerInternal) {
          _this24._settingsLayerInternal.destroy();
          _this24._settingsLayerInternal = null;
        }
        if (_this24._pauseBtn) {
          _this24.tweens.add({
            targets: _this24._pauseBtn,
            alpha: 1,
            duration: 300
          });
        }
      };
      this.tweens.add({
        targets: this._settingsLayerOverlay,
        alpha: 0,
        duration: 500,
        ease: "Linear"
      });
      var _0x59b9ab = {
        p: 1
      };
      this.tweens.add({
        targets: _0x59b9ab,
        p: 0,
        duration: 500,
        ease: "Quad.In",
        onUpdate: function onUpdate() {
          _this24._settingsLayerInternal.y = _0x59b9ab.p * 650 - 640;
        },
        onComplete: _0x272eb1
      });
    }
  }, {
    key: "_showStatsScreen",
    value: function _showStatsScreen() {
      var _this25 = this;
      if (this._pauseBtn) {
        this.tweens.add({
          targets: this._pauseBtn,
          alpha: 0,
          duration: 300
        });
      }
      if (this._statsLayerOverlay) return;
      var containerX = screenWidth / 2;
      var _0x1aa656 = 320;
      this._statsLayerOverlay = this.add.rectangle(containerX, _0x1aa656, screenWidth, screenHeight, 0, 0).setScrollFactor(0).setDepth(200).setInteractive();
      this._statsLayerInternal = this.add.container(0, -640).setScrollFactor(0).setDepth(201);
      this.tweens.add({
        targets: this._statsLayerOverlay,
        alpha: 100 / 255,
        duration: 1000
      });
      var _0x59b9ab = {
        p: 0
      };
      this.tweens.add({
        targets: _0x59b9ab,
        p: 1,
        duration: 500,
        ease: "Quad.Out",
        onUpdate: function onUpdate() {
          _this25._statsLayerInternal.y = _0x59b9ab.p * 650 - 640;
        }
      });
      var _0x595215 = 712;
      var _0x950c8d = 460;
      var _0x2a115c = (screenWidth - _0x595215) / 2;
      this._statsLayerInternal.add(this.add.rectangle(_0x2a115c + 356, 310, _0x595215, _0x950c8d, 0xac531e));
      var _0x43f2e3 = this.textures.getFrame("GJ_WebSheet", "GJ_table_side_001.png");
      var _0x3feccc = _0x43f2e3 ? _0x950c8d / _0x43f2e3.height : 1;
      this._statsLayerInternal.add(this.add.image(_0x2a115c - 40, 80, "GJ_WebSheet", "GJ_table_side_001.png").setOrigin(0, 0).setScale(1, _0x3feccc));
      this._statsLayerInternal.add(this.add.image(_0x2a115c + _0x595215 + 40, 80, "GJ_WebSheet", "GJ_table_side_001.png").setOrigin(1, 0).setFlipX(true).setScale(1, _0x3feccc));
      var _0x33b564 = this.add.image(_0x2a115c + 356, 70, "GJ_WebSheet", "GJ_table_top_001.png");
      this._statsLayerInternal.add(_0x33b564);
      this._statsLayerInternal.add(this.add.image(_0x2a115c + 356, 560, "GJ_WebSheet", "GJ_table_bottom_001.png"));
      var _0x3e9c79 = _0x33b564.y - 35;
      this._statsLayerInternal.add(this.add.image(containerX - 312, _0x3e9c79, "GJ_WebSheet", "chain_01_001.png").setOrigin(0.5, 1));
      this._statsLayerInternal.add(this.add.image(containerX + 312, _0x3e9c79, "GJ_WebSheet", "chain_01_001.png").setOrigin(0.5, 1));
      this._statsLayerInternal.add(this.add.bitmapText(containerX, 65, "bigFont", "Stats", 55).setOrigin(0.5, 0.5));
      var _rowPanelTop = 102;
      var _rowPanelBottom = 528;
      var _rowLeft = _0x2a115c + 7.8;
      var _rowRight = _0x2a115c + _0x595215 - 7.8;
      var _rowWidth = _rowRight - _rowLeft;
      var _rowCount = 6;
      var _rowH = (_rowPanelBottom - _rowPanelTop) / _rowCount;
      var rows = [{
        label: "Total Jumps:",
        value: String(this._totalJumps || 0)
      }, {
        label: "Total Attempts:",
        value: String(this._attempts || 1)
      }, {
        label: "Completed Levels:",
        value: String(window._completedLevels || 0)
      }, {
        label: "Total Deaths:",
        value: String(this._totalDeaths || 0)
      }, {
        label: "???:",
        value: String(window._totalDiamonds || '?')
      }, {
        label: "???:",
        value: String(window._totalOrbs || '?')
      }];
      rows.forEach(function (row, index) {
        var rowCenterY = _rowPanelTop + index * _rowH + _rowH / 2;
        var bgColor = index % 2 === 0 ? 0xac531e : 0xcf6d30;
        _this25._statsLayerInternal.add(_this25.add.rectangle(containerX, rowCenterY, _rowWidth, _rowH, bgColor).setOrigin(0.5, 0.5));
        if (index > 0) {
          _this25._statsLayerInternal.add(_this25.add.rectangle(containerX, _rowPanelTop + index * _rowH, _rowWidth, 0.5, 0x000000).setOrigin(0.5, 0.5));
        }
        _this25._statsLayerInternal.add(_this25.add.bitmapText(_rowLeft + 20, rowCenterY, "goldFont", row.label, 34).setOrigin(0, 0.5));
        _this25._statsLayerInternal.add(_this25.add.bitmapText(_rowRight - 20, rowCenterY, "goldFont", row.value, 34).setOrigin(1, 0.5));
      });
      var _0x45fc2b = [{
        frame: "GJ_arrow_03_001.png",
        dx: -535,
        action: function action() {
          return _this25._hideStatsScreen();
        }
      }];
      for (var _i20 = 0, _x45fc2b3 = _0x45fc2b; _i20 < _x45fc2b3.length; _i20++) {
        var _0x2d4335 = _x45fc2b3[_i20];
        var _0xdde774 = this.add.image(containerX + _0x2d4335.dx, 30, "GJ_GameSheet03", _0x2d4335.frame).setInteractive();
        this._statsLayerInternal.add(_0xdde774);
        this._makeBouncyButton(_0xdde774, 1, _0x2d4335.action);
      }
    }
  }, {
    key: "_hideStatsScreen",
    value: function _hideStatsScreen() {
      var _this26 = this;
      if (!this._statsLayerInternal) {
        return;
      }
      var _0x272eb1 = function _0x272eb1() {
        if (_this26._statsLayerOverlay) {
          _this26._statsLayerOverlay.destroy();
          _this26._statsLayerOverlay = null;
        }
        if (_this26._statsLayerInternal) {
          _this26._statsLayerInternal.destroy();
          _this26._statsLayerInternal = null;
        }
        if (_this26._pauseBtn) {
          _this26.tweens.add({
            targets: _this26._pauseBtn,
            alpha: 1,
            duration: 300
          });
        }
      };
      this.tweens.add({
        targets: this._statsLayerOverlay,
        alpha: 0,
        duration: 500,
        ease: "Linear"
      });
      var _0x59b9ab = {
        p: 1
      };
      this.tweens.add({
        targets: _0x59b9ab,
        p: 0,
        duration: 500,
        ease: "Quad.In",
        onUpdate: function onUpdate() {
          _this26._statsLayerInternal.y = _0x59b9ab.p * 650 - 640;
        },
        onComplete: _0x272eb1
      });
    }
  }, {
    key: "_playStarAward",
    value: function _playStarAward() {
      var _this27 = this;
      if (!this._endLayerInternal) {
        return;
      }
      var _0x4edc03 = this._endStarX;
      var _0x5a0e9 = this._endStarY;
      var _0x453043 = this.add.image(_0x4edc03, _0x5a0e9, "GJ_WebSheet", "GJ_bigStar_001.png").setScale(3).setAlpha(0);
      this._endLayerInternal.add(_0x453043);
      this.tweens.add({
        targets: _0x453043,
        scale: 0.8,
        alpha: 1,
        duration: 300,
        delay: 0,
        ease: "Bounce.Out"
      });
      this.time.delayedCall(100, function () {
        _this27._audio.playEffect("highscoreGet02", { volume: _this27._sfxVolume });
        var _0x1204d3 = _0x4edc03;
        var _0x96e3b2 = _0x5a0e9 + _this27._endLayerInternal.y;
        _this27.add.particles(_0x1204d3, _0x96e3b2, "GJ_WebSheet", {
          frame: "square.png",
          speed: {
            min: 200,
            max: 600
          },
          angle: {
            min: 0,
            max: 360
          },
          scale: {
            start: 0.5,
            end: 0
          },
          alpha: {
            start: 1,
            end: 0
          },
          lifespan: {
            min: 200,
            max: 600
          },
          quantity: 30,
          stopAfter: 30,
          blendMode: S,
          tint: 16776960
        }).setScrollFactor(0).setDepth(202);
        var _0x43203f = _this27.add.graphics().setScrollFactor(0).setDepth(202).setBlendMode(S);
        var _0x403316 = {
          t: 0
        };
        _this27.tweens.add({
          targets: _0x403316,
          t: 1,
          duration: 400,
          ease: "Quad.Out",
          onUpdate: function onUpdate() {
            _0x43203f.clear();
            _0x43203f.fillStyle(16776960, 1 - _0x403316.t);
            _0x43203f.fillCircle(_0x1204d3, _0x96e3b2, 20 + _0x403316.t * 200);
          },
          onComplete: function onComplete() {
            return _0x43203f.destroy();
          }
        });
      });
    }
  }, {
    key: "_openListScene",
    value: function _openListScene(title, rowHeight, onBack) {
      var _this28 = this;
      var sw = screenWidth;
      var sh = screenHeight;
      var objects = [];
      var fadeIn = this.add.graphics().setScrollFactor(0).setDepth(300);
      fadeIn.fillStyle(0x000000, 1);
      fadeIn.fillRect(0, 0, sw, sh);
      this.tweens.add({
        targets: fadeIn,
        alpha: 0,
        duration: 280,
        ease: "Linear",
        onComplete: function onComplete() {
          return fadeIn.destroy();
        }
      });
      var bgGfx = this.add.graphics().setScrollFactor(0).setDepth(200);
      var steps = 80;
      for (var i = 0; i < steps; i++) {
        var t = i / (steps - 1);
        var r = 0;
        var g = Math.round(0x66 * (1 - t) + 0x33 * t);
        var _b = Math.round(0xff * (1 - t) + 0x99 * t);
        bgGfx.fillStyle(r << 16 | g << 8 | _b, 1);
        bgGfx.fillRect(0, Math.floor(i * sh / steps), sw, Math.ceil(sh / steps) + 1);
      }
      objects.push(bgGfx);
      var blocker = this.add.zone(sw / 2, sh / 2, sw, sh).setScrollFactor(0).setDepth(200).setInteractive();
      objects.push(blocker);
      var cBL = this.add.image(0, sh, "GJ_GameSheet03", "GJ_sideArt_001.png").setScrollFactor(0).setDepth(201).setOrigin(1, 1).setFlipY(true);
      var cBR = this.add.image(sw, sh, "GJ_GameSheet03", "GJ_sideArt_001.png").setScrollFactor(0).setDepth(201).setOrigin(1, 0).setFlipY(false);
      objects.push(cBL, cBR);
      var panelW = 712;
      var panelH = 460;
      var panelCX = sw / 2;
      var panelCY = sh / 2;
      var panelBg = this.add.rectangle(panelCX, panelCY + 10, panelW, panelH, 0xC2723E).setScrollFactor(0).setDepth(201).setOrigin(0.5);
      objects.push(panelBg);
      var listLeft = panelCX - panelW / 2;
      var listTop = panelCY - panelH / 2 + 10;
      var stripesGfx = this.add.graphics().setScrollFactor(0).setDepth(202);
      objects.push(stripesGfx);
      var _rowCount = 0;
      var _redrawStripes = function _redrawStripes() {
        var offsetY = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        stripesGfx.clear();
        for (var ri = 0; ri < _rowCount; ri++) {
          var ry = listTop + 12 + ri * rowHeight - offsetY;
          var ryBottom = ry + rowHeight;
          if (ryBottom <= listTop + 12 || ry >= listTop + panelH) continue;
          var clampedY = Math.max(ry, listTop + 12);
          var clampedH = Math.min(ryBottom, listTop + panelH) - clampedY;
          stripesGfx.fillStyle(ri % 2 === 0 ? 0xB5652E : 0xC2723E, 1);
          stripesGfx.fillRect(listLeft, clampedY, panelW, clampedH);
        }
        if (_rowCount > 0) {
          var topDividerY = listTop + 12 - offsetY;
          if (topDividerY >= listTop + 12 && topDividerY < listTop + panelH) {
            stripesGfx.fillStyle(0x000000, 0.6);
            stripesGfx.fillRect(listLeft + 5, topDividerY, panelW - 10, 1.5);
          }
          var lastRowY = listTop + 12 + (_rowCount - 1) * rowHeight - offsetY;
          var bottomDividerY = lastRowY + rowHeight;
          if (bottomDividerY > listTop + 12 && bottomDividerY <= listTop + panelH) {
            stripesGfx.fillStyle(0x000000, 0.6);
            stripesGfx.fillRect(listLeft + 5, bottomDividerY, panelW - 10, 1.5);
          }
        }
      };
      var addRow = function addRow() {
        _rowCount++;
        _redrawStripes();
      };
      var clearRows = function clearRows() {
        _rowCount = 0;
        _redrawStripes();
      };
      var sideFrame = this.textures.getFrame("GJ_WebSheet", "GJ_table_side_001.png");
      var sideScaleY = sideFrame ? panelH / sideFrame.height : 1;
      var leftBorder = this.add.image(listLeft - 40, 90, "GJ_WebSheet", "GJ_table_side_001.png").setScrollFactor(0).setDepth(203).setOrigin(0, 0).setScale(1, sideScaleY);
      objects.push(leftBorder);
      var rightBorder = this.add.image(listLeft + panelW + 40, 90, "GJ_WebSheet", "GJ_table_side_001.png").setScrollFactor(0).setDepth(203).setOrigin(1, 0).setFlipX(true).setScale(1, sideScaleY);
      objects.push(rightBorder);
      var topBorder = this.add.image(panelCX, 80, "GJ_WebSheet", "GJ_table_top_001.png").setScrollFactor(0).setDepth(203).setOrigin(0.5);
      objects.push(topBorder);
      var bottomBorder = this.add.image(panelCX, 570, "GJ_WebSheet", "GJ_table_bottom_001.png").setScrollFactor(0).setDepth(203).setOrigin(0.5);
      objects.push(bottomBorder);
      if (title) {
        var titleTxt = this.add.bitmapText(panelCX, panelCY - 123, "bigFont", title, 26).setScrollFactor(0).setDepth(204).setOrigin(0.5, 0.5);
        objects.push(titleTxt);
      }
      var pageLbl = this.add.bitmapText(sw - 8, 3, "goldFont", "", 22).setScrollFactor(0).setDepth(204).setOrigin(1, 0).setVisible(false);
      objects.push(pageLbl);
      var backBtn = this.add.image(45, 45, "GJ_GameSheet03", "GJ_arrow_01_001.png").setScrollFactor(0).setDepth(204).setOrigin(0.5).setInteractive();
      objects.push(backBtn);
      var closeOverlay = function closeOverlay() {
        var fadeOut = _this28.add.graphics().setScrollFactor(0).setDepth(400).setAlpha(0);
        fadeOut.fillStyle(0x000000, 1);
        fadeOut.fillRect(0, 0, sw, sh);
        _this28.tweens.add({
          targets: fadeOut,
          alpha: 1,
          duration: 160,
          ease: "Linear",
          onComplete: function onComplete() {
            for (var _i21 = 0, _objects = objects; _i21 < _objects.length; _i21++) {
              var _o7 = _objects[_i21];
              if (_o7 && _o7.destroy) _o7.destroy();
            }
            if (onBack) onBack();
            _this28.tweens.add({
              targets: fadeOut,
              alpha: 0,
              duration: 160,
              ease: "Linear",
              onComplete: function onComplete() {
                return fadeOut.destroy();
              }
            });
          }
        });
      };
      this._makeBouncyButton(backBtn, 1, function () {
        return closeOverlay();
      });
      var prevBtn = this.add.image(40, sh / 2, "GJ_GameSheet03", "GJ_arrow_03_001.png").setScrollFactor(0).setDepth(204).setOrigin(0.5).setInteractive().setVisible(false);
      objects.push(prevBtn);
      this._makeBouncyButton(prevBtn, 1, function () {});
      var nextBtn = this.add.image(sw - 40, sh / 2, "GJ_GameSheet03", "GJ_arrow_03_001.png").setScrollFactor(0).setDepth(204).setOrigin(0.5).setInteractive().setFlipX(true).setVisible(false);
      objects.push(nextBtn);
      this._makeBouncyButton(nextBtn, 1, function () {});
      return {
        overlay: bgGfx,
        objects: objects,
        listLeft: listLeft,
        listTop: listTop,
        panelW: panelW,
        panelH: panelH,
        panelCX: panelCX,
        panelCY: panelCY,
        addRow: addRow,
        clearRows: clearRows,
        prevBtn: prevBtn,
        nextBtn: nextBtn,
        pageLbl: pageLbl,
        closeOverlay: closeOverlay,
        redrawStripes: _redrawStripes
      };
    }
  }, {
    key: "_openOnlineLevelsScene",
    value: function _openOnlineLevelsScene() {
      var _this29 = this;
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      if (this._onlineLevelsOverlay) return;
      var sw = screenWidth;
      var sh = screenHeight;
      var isFeatured = params.type === 6;
      var shell = this._openListScene(isFeatured ? "" : "Online Levels", 180, function () {
        _this29._onlineLevelsOverlay = null;
        _this29._openCreatorMenu();
      });
      var objects = shell.objects,
        listLeft = shell.listLeft,
        listTop = shell.listTop,
        panelW = shell.panelW,
        panelH = shell.panelH,
        panelCX = shell.panelCX,
        panelCY = shell.panelCY,
        addRow = shell.addRow,
        clearRows = shell.clearRows,
        prevBtn = shell.prevBtn,
        nextBtn = shell.nextBtn,
        pageLbl = shell.pageLbl,
        closeOverlay = shell.closeOverlay,
        redrawStripes = shell.redrawStripes;
      this._onlineLevelsOverlay = shell.overlay;
      this._closeOnlineLevelsOverlay = closeOverlay;
      if (isFeatured) {
        var header = this.add.image(sw / 2, sh / 2 - 265, "GJ_GameSheet03", "featuredLabel_001.png").setScrollFactor(0).setDepth(204).setOrigin(0.5);
        objects.push(header);
        var pageBtnGroup = this.add.container(sw - 35, sh / 2 - 240);
        var pageBtn = this.add.image(0, 0, "GJ_button02").setScale(0.7);
        var pageNum = this.add.bitmapText(-2, 0, "bigFont", "1", 35).setOrigin(0.5);
        pageBtnGroup.add(pageBtn);
        pageBtnGroup.add(pageNum);
        var _pageBtnFrame = this.textures.getFrame("GJ_button02");
        var _pageBtnW = (_pageBtnFrame ? _pageBtnFrame.realWidth : 100) * 0.7;
        var _pageBtnH = (_pageBtnFrame ? _pageBtnFrame.realHeight : 100) * 0.7;
        pageBtnGroup.setScrollFactor(0).setDepth(205).setInteractive(new Phaser.Geom.Rectangle(-_pageBtnW / 2, -_pageBtnH / 2, _pageBtnW, _pageBtnH), Phaser.Geom.Rectangle.Contains);
        objects.push(pageBtnGroup);
        this._makeBouncyButton(pageBtnGroup, 1, function () {
          if (!_loading) {
            var nextPage = (currentPage + 1) % 10;
            _setPage(nextPage);
          }
        }, function () {
          return true;
        });
        var updatePageNum = function updatePageNum(page) {
          pageNum.setText(String(page + 1));
        };
        this._featuredPageUpdate = updatePageNum;
      }
      var spinSprite = this.add.image(sw / 2, sh / 2, "loadingCircle").setScrollFactor(0).setDepth(205).setOrigin(0.5).setBlendMode(Phaser.BlendModes.ADD).setAlpha(0.5);
      objects.push(spinSprite);
      var spinTimer = this.time.addEvent({
        delay: 16,
        loop: true,
        callback: function callback() {
          if (!spinSprite.scene) {
            spinTimer.remove();
            return;
          }
          spinSprite.rotation += 0.1;
        }
      });
      objects.push({
        destroy: function destroy() {
          return spinTimer.remove();
        }
      });
      var infoBtn = this.add.image(60, sh - 60, "GJ_GameSheet03", "GJ_infoIcon_001.png").setScrollFactor(0).setDepth(204).setOrigin(0.5).setInteractive();
      objects.push(infoBtn);
      this._makeBouncyButton(infoBtn, 1, function () {
        _this29._buildFeaturedInfoPopup();
      });
      var refreshBtn = this.add.image(sw - 55, sh - 55, "GJ_GameSheet03", "GJ_updateBtn_001.png").setScrollFactor(0).setDepth(204).setOrigin(0.5).setInteractive();
      objects.push(refreshBtn);
      var currentPage = 0;
      var cache = {};
      var activeCellObjs = [];
      var _loading = false;
      var scrollOffsetY = 0;
      var _lastLevelStrs = null;
      var _lastLevelData = [];
      var _panelBoundaryTop = listTop + 12;
      var _panelBoundaryBottom = listTop + panelH - 22;
      var _panelMaskShape = this.add.graphics().setScrollFactor(0);
      _panelMaskShape.fillStyle(0xffffff);
      _panelMaskShape.fillRect(listLeft, _panelBoundaryTop, panelW, _panelBoundaryBottom - _panelBoundaryTop);
      var _panelMask = _panelMaskShape.createGeometryMask();
      objects.push(_panelMaskShape);
      var _buildLevelCell = function _buildLevelCell(levelData, rowIdx) {
        var rowH = 180;
        var rowY = _panelBoundaryTop + rowIdx * rowH - scrollOffsetY;
        var cellObjs = [];
        var rx = listLeft;
        var boundaryTop = _panelBoundaryTop;
        var boundaryBottom = _panelBoundaryBottom;
        if (rowIdx > 0 && rowY >= boundaryTop && rowY <= boundaryBottom) {
          var div = _this29.add.rectangle(rx + panelW / 2, rowY, panelW - 10, 1.5, 0x000000, 0.6).setScrollFactor(0).setDepth(203).setOrigin(0.5, 0.5);
          cellObjs.push(div);
        }
        return cellObjs;
      };
      var _parseKV = function _parseKV(str) {
        var m = {},
          p = str.split(":");
        for (var i = 0; i + 1 < p.length; i += 2) m[p[i]] = p[i + 1];
        return m;
      };
      var _setPage = /*#__PURE__*/function () {
        var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(page) {
          var _i22, _activeCellObjs, _o8, response, PROXY, body, retryCount, maxRetries, res, sections, levelStrs, playerStrs, songStrs, pageInfo, playerMap, _iterator34, _step34, ps, p, songMap, _iterator35, _step35, ss, sp, sm, i, total, offset, count, start, end, maxPages, hasNextPage, _t6;
          return _regenerator().w(function (_context6) {
            while (1) switch (_context6.p = _context6.n) {
              case 0:
                if (!_loading) {
                  _context6.n = 1;
                  break;
                }
                return _context6.a(2);
              case 1:
                _loading = true;
                currentPage = page;
                for (_i22 = 0, _activeCellObjs = activeCellObjs; _i22 < _activeCellObjs.length; _i22++) {
                  _o8 = _activeCellObjs[_i22];
                  if (_o8 && _o8.destroy) _o8.destroy();
                }
                activeCellObjs = [];
                clearRows();
                if (isFeatured && _this29._featuredPageUpdate) {
                  _this29._featuredPageUpdate(page);
                }
                spinSprite.setVisible(true);
                refreshBtn.setVisible(false);
                pageLbl.setVisible(false);
                _this29.tweens.killTweensOf(prevBtn, "scale");
                prevBtn.setScale(1);
                prevBtn._pressed = false;
                prevBtn.setVisible(false);
                _this29.tweens.killTweensOf(nextBtn, "scale");
                nextBtn.setScale(1);
                nextBtn._pressed = false;
                nextBtn.setVisible(false);
                _context6.p = 2;
                response = cache[page];
                if (response) {
                  _context6.n = 13;
                  break;
                }
                PROXY = (window._gdProxyUrl || "").replace(/\/$/, "");
                if (PROXY) {
                  _context6.n = 3;
                  break;
                }
                throw new Error("no proxy configured");
              case 3:
                body = Object.entries(_objectSpread({
                  secret: "Wmfd2893gb7",
                  page: page
                }, params)).map(function (_ref6) {
                  var _ref7 = _slicedToArray(_ref6, 2),
                    k = _ref7[0],
                    v = _ref7[1];
                  return "".concat(k, "=").concat(encodeURIComponent(v));
                }).join("&");
                retryCount = 0;
                maxRetries = 3;
              case 4:
                if (!(retryCount < maxRetries)) {
                  _context6.n = 9;
                  break;
                }
                _context6.n = 5;
                return fetch("".concat(PROXY, "/getGJLevels21.php"), {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                  },
                  body: body
                });
              case 5:
                res = _context6.v;
                if (!(res.status === 429)) {
                  _context6.n = 8;
                  break;
                }
                retryCount++;
                if (!(retryCount >= maxRetries)) {
                  _context6.n = 6;
                  break;
                }
                throw new Error("rate limited after ".concat(maxRetries, " retries"));
              case 6:
                _context6.n = 7;
                return new Promise(function (resolve) {
                  return setTimeout(resolve, 1000 * Math.pow(2, retryCount));
                });
              case 7:
                return _context6.a(3, 4);
              case 8:
                return _context6.a(3, 9);
              case 9:
                if (res.ok) {
                  _context6.n = 10;
                  break;
                }
                throw new Error("HTTP ".concat(res.status));
              case 10:
                _context6.n = 11;
                return res.text();
              case 11:
                response = _context6.v;
                if (!(!response || response === "-1")) {
                  _context6.n = 12;
                  break;
                }
                throw new Error("no results");
              case 12:
                cache[page] = response;
              case 13:
                spinSprite.setVisible(false);
                refreshBtn.setVisible(true);
                pageLbl.setVisible(true);
                prevBtn.setVisible(page > 0);
                nextBtn.setVisible(true);
                sections = response.split("#");
                levelStrs = (sections[0] || "").split("|").filter(Boolean);
                playerStrs = (sections[1] || "").split("|").filter(Boolean);
                songStrs = (sections[2] || "").split("~:~").filter(Boolean);
                pageInfo = (sections[3] || "0:0:10").split(":");
                playerMap = {};
                _iterator34 = _createForOfIteratorHelper(playerStrs);
                try {
                  for (_iterator34.s(); !(_step34 = _iterator34.n()).done;) {
                    ps = _step34.value;
                    p = ps.split(":");
                    if (p.length >= 2) playerMap[p[0]] = p[1];
                  }
                } catch (err) {
                  _iterator34.e(err);
                } finally {
                  _iterator34.f();
                }
                songMap = {};
                _iterator35 = _createForOfIteratorHelper(songStrs);
                try {
                  for (_iterator35.s(); !(_step35 = _iterator35.n()).done;) {
                    ss = _step35.value;
                    sp = ss.split("~|~"), sm = {};
                    for (i = 0; i + 1 < sp.length; i += 2) sm[sp[i]] = sp[i + 1];
                    if (sm["1"]) songMap[sm["1"]] = sm["2"] || "";
                  }
                } catch (err) {
                  _iterator35.e(err);
                } finally {
                  _iterator35.f();
                }
                total = parseInt(pageInfo[0]) || 0;
                offset = parseInt(pageInfo[1]) || 0;
                count = parseInt(pageInfo[2]) || 10;
                start = offset + 1;
                end = count * (page + 1);
                pageLbl.setText("".concat(start, " to ").concat(end, " of ").concat(total));
                maxPages = Math.ceil(total / count);
                hasNextPage = page + 1 < maxPages;
                nextBtn.setVisible(hasNextPage);
                scrollOffsetY = 0;
                // wip
                _lastLevelStrs = levelStrs;
                _lastLevelData = levelStrs.map(function (ls) {
                  var m = _parseKV(ls);
                  var rawLikes = parseInt(m["14"]) || 0;
                  var diffDenom = parseInt(m["8"]) || 0;
                  var isDemon = parseInt(m["17"]) === 1;
                  var isAuto = parseInt(m["25"]) === 1;
                  var diffIdx = 0;
                  if (isAuto) {
                    diffIdx = 11;
                  } else if (isDemon) {
                    var d9 = parseInt(m["9"]);
                    var d43 = parseInt(m["43"]);
                    if (!isNaN(d9) && d9 >= 1 && d9 <= 5) {
                      var _ref8;
                      diffIdx = (_ref8 = [6, 7, 8, 9, 10][d9 - 1]) !== null && _ref8 !== void 0 ? _ref8 : 8;
                    } else if (!isNaN(d43)) {
                      var demonMap43 = {
                        3: 6,
                        4: 7,
                        0: 8,
                        5: 9,
                        6: 10
                      };
                      diffIdx = demonMap43.hasOwnProperty(d43) ? demonMap43[d43] : 8;
                    } else {
                      diffIdx = 8;
                    }
                  } else {
                    var denomIdx = Math.min(6, Math.max(0, Math.round(diffDenom / 10)));
                    diffIdx = [0, 0, 1, 2, 3, 4, 5][denomIdx];
                  }
                  return {
                    id: m["1"] || null,
                    name: m["2"] || "Unknown",
                    author: playerMap[m["6"]] || "Player " + (m["6"] || "?"),
                    difficulty: diffIdx,
                    downloads: parseInt(m["10"]) || 0,
                    length: parseInt(m["15"]) || 0,
                    likes: rawLikes,
                    stars: parseInt(m["18"]) || 0,
                    coins: parseInt(m["37"]) || 0,
                    coinsVerified: m["38"] === "1",
                    songName: m["35"] ? songMap[m["35"]] || "Song #" + m["35"] : "Song #" + (m["12"] || "0")
                  };
                });
                _lastLevelData.forEach(function (levelData, idx) {
                  var _activeCellObjs2;
                  var cellObjs = _buildLevelCell(levelData, idx);
                  (_activeCellObjs2 = activeCellObjs).push.apply(_activeCellObjs2, _toConsumableArray(cellObjs));
                  addRow();
                });
                _context6.n = 15;
                break;
              case 14:
                _context6.p = 14;
                _t6 = _context6.v;
                spinSprite.setVisible(false);
                refreshBtn.setVisible(true);
              case 15:
                _loading = false;
              case 16:
                return _context6.a(2);
            }
          }, _callee6, null, [[2, 14]]);
        }));
        return function _setPage(_x4) {
          return _ref5.apply(this, arguments);
        };
      }();
      prevBtn.removeAllListeners("pointerup");
      nextBtn.removeAllListeners("pointerup");
      prevBtn.on("pointerup", function () {
        if (!_loading && currentPage > 0) _setPage(currentPage - 1);
      });
      nextBtn.on("pointerup", function () {
        if (!_loading) _setPage(currentPage + 1);
      });
      this._makeBouncyButton(refreshBtn, 1, function () {
        delete cache[currentPage];
        _setPage(currentPage);
      });
      var _onWheel = function _onWheel(pointer, gameObjects, deltaX, deltaY) {
        if (pointer.x < listLeft || pointer.x > listLeft + panelW) return;
        if (pointer.y < listTop || pointer.y > listTop + panelH) return;
        var maxScroll = Math.max(0, (_lastLevelStrs ? _lastLevelStrs.length : 0) * 180 - (panelH - 33));
        var newScrollOffset = Math.max(0, Math.min(scrollOffsetY + deltaY * 0.5, maxScroll));
        if (newScrollOffset !== scrollOffsetY) {
          scrollOffsetY = newScrollOffset;
          for (var _i23 = 0, _activeCellObjs3 = activeCellObjs; _i23 < _activeCellObjs3.length; _i23++) {
            var _o9 = _activeCellObjs3[_i23];
            if (_o9 && _o9.destroy) _o9.destroy();
          }
          activeCellObjs = [];
          if (_lastLevelData) _lastLevelData.forEach(function (levelData, idx) {
            var _activeCellObjs4;
            var cellObjs = _buildLevelCell(levelData, idx);
            (_activeCellObjs4 = activeCellObjs).push.apply(_activeCellObjs4, _toConsumableArray(cellObjs));
          });
          redrawStripes(scrollOffsetY);
        }
      };
      this.input.on("wheel", _onWheel);
      objects.push({
        destroy: function destroy() {
          return _this29.input.off("wheel", _onWheel);
        }
      });
      var isDragging = false;
      var dragStartY = 0;
      var dragStartScrollOffset = 0;
      var dragThreshold = 5;
      var bounceBackTween = null;
      var onDragStart = function onDragStart(pointer) {
        if (pointer.x < listLeft || pointer.x > listLeft + panelW) return;
        if (pointer.y < listTop || pointer.y > listTop + panelH) return;
        if (bounceBackTween) {
          bounceBackTween.destroy();
          bounceBackTween = null;
        }
        isDragging = true;
        dragStartY = pointer.y;
        dragStartScrollOffset = scrollOffsetY;
      };
      var onDragMove = function onDragMove(pointer) {
        if (!isDragging || !pointer.isDown) return;
        if (pointer.x < listLeft || pointer.x > listLeft + panelW) return;
        if (pointer.y < listTop || pointer.y > listTop + panelH) return;
        var deltaY = dragStartY - pointer.y;
        if (Math.abs(deltaY) < dragThreshold) return;
        var maxScroll = Math.max(0, (_lastLevelStrs ? _lastLevelStrs.length : 0) * 180 - (panelH - 33));
        var newScrollOffset = dragStartScrollOffset + deltaY * 0.5;
        var elasticLimit = 100;
        if (newScrollOffset < -elasticLimit) {
          newScrollOffset = -elasticLimit;
        } else if (newScrollOffset > maxScroll + elasticLimit) {
          newScrollOffset = maxScroll + elasticLimit;
        }
        if (newScrollOffset !== scrollOffsetY) {
          scrollOffsetY = newScrollOffset;
          for (var _i24 = 0, _activeCellObjs5 = activeCellObjs; _i24 < _activeCellObjs5.length; _i24++) {
            var _o0 = _activeCellObjs5[_i24];
            if (_o0 && _o0.destroy) _o0.destroy();
          }
          activeCellObjs = [];
          if (_lastLevelData) _lastLevelData.forEach(function (levelData, idx) {
            var _activeCellObjs6;
            var cellObjs = _buildLevelCell(levelData, idx);
            (_activeCellObjs6 = activeCellObjs).push.apply(_activeCellObjs6, _toConsumableArray(cellObjs));
          });
          redrawStripes(scrollOffsetY);
        }
      };
      var onDragEnd = function onDragEnd() {
        isDragging = false;
        var maxScroll = Math.max(0, (_lastLevelStrs ? _lastLevelStrs.length : 0) * 180 - (panelH - 33));
        var targetScrollOffset = scrollOffsetY;
        if (scrollOffsetY < 0) {
          targetScrollOffset = 0;
        } else if (scrollOffsetY > maxScroll) {
          targetScrollOffset = maxScroll;
        }
        if (targetScrollOffset !== scrollOffsetY) {
          var startOffset = scrollOffsetY;
          bounceBackTween = _this29.tweens.add({
            targets: {
              scrollOffset: startOffset
            },
            scrollOffset: targetScrollOffset,
            duration: 300,
            ease: "Quad.Out",
            onStart: function onStart() {
              isDragging = false;
            },
            onUpdate: function onUpdate() {
              scrollOffsetY = bounceBackTween.targets[0].scrollOffset;
              for (var _i25 = 0, _activeCellObjs7 = activeCellObjs; _i25 < _activeCellObjs7.length; _i25++) {
                var _o1 = _activeCellObjs7[_i25];
                if (_o1 && _o1.destroy) _o1.destroy();
              }
              activeCellObjs = [];
              if (_lastLevelData) _lastLevelData.forEach(function (levelData, idx) {
                var _activeCellObjs8;
                var cellObjs = _buildLevelCell(levelData, idx);
                (_activeCellObjs8 = activeCellObjs).push.apply(_activeCellObjs8, _toConsumableArray(cellObjs));
              });
              redrawStripes(scrollOffsetY);
            },
            onComplete: function onComplete() {
              bounceBackTween = null;
            }
          });
        }
      };
      this.input.on('pointerdown', onDragStart);
      this.input.on('pointermove', onDragMove);
      this.input.on('pointerup', onDragEnd);
      objects.push({
        destroy: function destroy() {
          return _this29.input.off('pointerdown', onDragStart);
        }
      });
      objects.push({
        destroy: function destroy() {
          return _this29.input.off('pointermove', onDragMove);
        }
      });
      objects.push({
        destroy: function destroy() {
          return _this29.input.off('pointerup', onDragEnd);
        }
      });
      objects.push({
        destroy: function destroy() {
          for (var _i26 = 0, _activeCellObjs9 = activeCellObjs; _i26 < _activeCellObjs9.length; _i26++) {
            var _o10 = _activeCellObjs9[_i26];
            if (_o10 && _o10.destroy) _o10.destroy();
          }
          activeCellObjs = [];
        }
      });
      _setPage(0);
    }
  }, {
    key: "_closeOnlineLevelsScene",
    value: function _closeOnlineLevelsScene() {
      if (this._onlineLevelsOverlay) {
        if (this._closeOnlineLevelsOverlay) {
          this._closeOnlineLevelsOverlay();
        }
        this._onlineLevelsOverlay = null;
      }
    }
  }, {
    key: "_hideEndLayer",
    value: function _hideEndLayer(_0x272eb1) {
      var _this30 = this;
      if (!this._endLayerInternal) {
        if (_0x272eb1) {
          _0x272eb1();
        }
        return;
      }
      var _0x1215e0 = {
        p: 0
      };
      this.tweens.add({
        targets: _0x1215e0,
        p: 1,
        duration: 500,
        ease: function ease(_0xc1c75) {
          return _0xc1c75 < 0.5 ? Math.pow(_0xc1c75 * 2, 2) / 2 : 1 - Math.pow((1 - _0xc1c75) * 2, 2) / 2;
        },
        onUpdate: function onUpdate() {
          _this30._endLayerInternal.y = _0x1215e0.p * -640;
        },
        onComplete: function onComplete() {
          _this30._endLayerInternal.destroy();
          _this30._endLayerInternal = null;
          if (_this30._endLayerOverlay) {
            _this30._endLayerOverlay.destroy();
            _this30._endLayerOverlay = null;
          }
          if (_0x272eb1) {
            _0x272eb1();
          }
        }
      });
      this.tweens.add({
        targets: this._endLayerOverlay,
        alpha: 0,
        duration: 500
      });
    }
  }]);
}(Phaser.Scene);