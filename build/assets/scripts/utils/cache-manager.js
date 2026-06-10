function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var GameCacheManager = /*#__PURE__*/function () {
  "use strict";

  function GameCacheManager() {
    _classCallCheck(this, GameCacheManager);
    this.CACHE_PREFIX = 'webdash_cache_';
    this.CACHE_VERSION_KEY = 'webdash_cache_version';
    this.CACHE_VERSION = '1.0.0';
    this.CACHE_EXPIRY = 7 * 24 * 60 * 60 * 1000;
    this.cachedFiles = new Map();
    this.loadingPromises = new Map();
  }
  return _createClass(GameCacheManager, [{
    key: "isCacheValid",
    value: function isCacheValid() {
      var cachedVersion = localStorage.getItem(this.CACHE_VERSION_KEY);
      return cachedVersion === this.CACHE_VERSION;
    }
  }, {
    key: "clearCache",
    value: function clearCache() {
      var _this = this;
      var keys = Object.keys(localStorage);
      keys.forEach(function (key) {
        if (key.startsWith(_this.CACHE_PREFIX)) {
          localStorage.removeItem(key);
        }
      });
      localStorage.removeItem(this.CACHE_VERSION_KEY);
    }
  }, {
    key: "getCacheKey",
    value: function getCacheKey(url) {
      return this.CACHE_PREFIX + btoa(url).replace(/[^a-zA-Z0-9]/g, '');
    }
  }, {
    key: "isFileCached",
    value: function isFileCached(url) {
      var cacheKey = this.getCacheKey(url);
      var cached = localStorage.getItem(cacheKey);
      if (!cached) return false;
      try {
        var data = JSON.parse(cached);
        return Date.now() - data.timestamp < this.CACHE_EXPIRY;
      } catch (e) {
        return false;
      }
    }
  }, {
    key: "getCachedFile",
    value: function getCachedFile(url) {
      var cacheKey = this.getCacheKey(url);
      var cached = localStorage.getItem(cacheKey);
      if (!cached) return null;
      try {
        var data = JSON.parse(cached);
        if (Date.now() - data.timestamp < this.CACHE_EXPIRY) {
          return data.content;
        } else {
          localStorage.removeItem(cacheKey);
          return null;
        }
      } catch (e) {
        localStorage.removeItem(cacheKey);
        return null;
      }
    }
  }, {
    key: "cacheFile",
    value: function cacheFile(url, content) {
      var cacheKey = this.getCacheKey(url);
      var data = {
        content: content,
        timestamp: Date.now(),
        url: url
      };
      try {
        localStorage.setItem(cacheKey, JSON.stringify(data));
      } catch (e) {
        console.warn('failed to cache file', url, e);
        if (e.name === 'QuotaExceededError') {
          this.clearOldestCache();
          try {
            localStorage.setItem(cacheKey, JSON.stringify(data));
          } catch (e2) {
            console.warn('still failed after cleanup', url);
          }
        }
      }
    }
  }, {
    key: "clearOldestCache",
    value: function clearOldestCache() {
      var _this2 = this;
      var keys = Object.keys(localStorage).filter(function (key) {
        return key.startsWith(_this2.CACHE_PREFIX);
      });
      var entries = keys.map(function (key) {
        try {
          var data = JSON.parse(localStorage.getItem(key));
          return {
            key: key,
            timestamp: data.timestamp
          };
        } catch (e) {
          return {
            key: key,
            timestamp: 0
          };
        }
      });
      entries.sort(function (a, b) {
        return a.timestamp - b.timestamp;
      });
      var toRemove = Math.ceil(entries.length * 0.25);
      for (var i = 0; i < toRemove; i++) {
        localStorage.removeItem(entries[i].key);
      }
    }
  }, {
    key: "loadFile",
    value: function () {
      var _loadFile = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(url) {
        var _this3 = this;
        var cached, promise;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              if (!this.isFileCached(url)) {
                _context.n = 1;
                break;
              }
              cached = this.getCachedFile(url);
              if (!cached) {
                _context.n = 1;
                break;
              }
              return _context.a(2, cached);
            case 1:
              if (!this.loadingPromises.has(url)) {
                _context.n = 2;
                break;
              }
              return _context.a(2, this.loadingPromises.get(url));
            case 2:
              promise = fetch(url).then(function (response) {
                if (!response.ok) {
                  throw new Error("Failed to load ".concat(url, ": ").concat(response.status));
                }
                var contentType = response.headers.get('content-type');
                if (contentType && contentType.includes('application/json')) {
                  return response.json().then(function (data) {
                    _this3.cacheFile(url, data);
                    return data;
                  });
                } else if (contentType && contentType.includes('text')) {
                  return response.text().then(function (data) {
                    _this3.cacheFile(url, data);
                    return data;
                  });
                } else {
                  return response.arrayBuffer().then(function (data) {
                    var base64 = _this3.arrayBufferToBase64(data);
                    _this3.cacheFile(url, base64);
                    return base64;
                  });
                }
              })["catch"](function (error) {
                console.error('Error loading file:', url, error);
                _this3.loadingPromises["delete"](url);
                throw error;
              })["finally"](function () {
                _this3.loadingPromises["delete"](url);
              });
              this.loadingPromises.set(url, promise);
              return _context.a(2, promise);
          }
        }, _callee, this);
      }));
      function loadFile(_x) {
        return _loadFile.apply(this, arguments);
      }
      return loadFile;
    }()
  }, {
    key: "arrayBufferToBase64",
    value: function arrayBufferToBase64(buffer) {
      var bytes = new Uint8Array(buffer);
      var binary = '';
      for (var i = 0; i < bytes.byteLength; i++) {
        binary += String.fromCharCode(bytes[i]);
      }
      return btoa(binary);
    }
  }, {
    key: "base64ToArrayBuffer",
    value: function base64ToArrayBuffer(base64) {
      var binaryString = atob(base64);
      var bytes = new Uint8Array(binaryString.length);
      for (var i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
      }
      return bytes.buffer;
    }
  }, {
    key: "init",
    value: function init() {
      if (!this.isCacheValid()) {
        this.clearCache();
        localStorage.setItem(this.CACHE_VERSION_KEY, this.CACHE_VERSION);
      }
    }
  }, {
    key: "getCacheStats",
    value: function getCacheStats() {
      var _this4 = this;
      var keys = Object.keys(localStorage).filter(function (key) {
        return key.startsWith(_this4.CACHE_PREFIX);
      });
      var totalSize = 0;
      var validEntries = 0;
      keys.forEach(function (key) {
        var size = localStorage.getItem(key).length;
        totalSize += size;
        try {
          var data = JSON.parse(localStorage.getItem(key));
          if (Date.now() - data.timestamp < _this4.CACHE_EXPIRY) {
            validEntries++;
          }
        } catch (e) {}
      });
      return {
        totalEntries: keys.length,
        validEntries: validEntries,
        totalSize: totalSize,
        totalSizeMB: (totalSize / (1024 * 1024)).toFixed(2)
      };
    }
  }]);
}();
window.gameCache = new GameCacheManager();