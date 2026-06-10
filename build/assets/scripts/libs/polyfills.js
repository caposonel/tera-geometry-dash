// Polyfills for Coherent GT (Chrome 49)
(function () {
  // Canvas getContext("2d", options) throws NotSupportedError in Chrome 49
  var origGetContext = HTMLCanvasElement.prototype.getContext;
  HTMLCanvasElement.prototype.getContext = function (type, options) {
    if (type === '2d' && options) {
      return origGetContext.call(this, type);
    }
    return origGetContext.apply(this, arguments);
  };

  // getImageData throws NotSupportedError in Coherent GT — return blank data
  var origGetImageData = CanvasRenderingContext2D.prototype.getImageData;
  CanvasRenderingContext2D.prototype.getImageData = function () {
    try {
      return origGetImageData.apply(this, arguments);
    } catch (e) {
      var w = arguments[2] || 1, h = arguments[3] || 1;
      return new ImageData(w, h);
    }
  };

  // createPattern throws NotSupportedError in Coherent GT
  var origCreatePattern = CanvasRenderingContext2D.prototype.createPattern;
  CanvasRenderingContext2D.prototype.createPattern = function () {
    try {
      return origCreatePattern.apply(this, arguments);
    } catch (e) {
      return null;
    }
  };

  // String.prototype.replaceAll (Chrome 85+)
  if (!String.prototype.replaceAll) {
    String.prototype.replaceAll = function (search, replacement) {
      return this.split(search).join(replacement);
    };
  }

  // Object.assign (Chrome 45+)
  if (typeof Object.assign !== 'function') {
    Object.assign = function (target) {
      if (target == null) throw new TypeError('Cannot convert undefined or null to object');
      var to = Object(target);
      for (var i = 1; i < arguments.length; i++) {
        var src = arguments[i];
        if (src != null) {
          for (var key in src) {
            if (Object.prototype.hasOwnProperty.call(src, key)) {
              to[key] = src[key];
            }
          }
        }
      }
      return to;
    };
  }

  // Array.from (Chrome 45+)
  if (!Array.from) {
    Array.from = function (arrayLike, mapFn, thisArg) {
      var arr = [];
      var len = arrayLike.length >>> 0;
      for (var i = 0; i < len; i++) {
        arr.push(mapFn ? mapFn.call(thisArg, arrayLike[i], i) : arrayLike[i]);
      }
      return arr;
    };
  }

  // Array.of (Chrome 45+)
  if (!Array.of) {
    Array.of = function () {
      return Array.prototype.slice.call(arguments);
    };
  }

  // Array.prototype.find (Chrome 45+)
  if (!Array.prototype.find) {
    Array.prototype.find = function (predicate, thisArg) {
      for (var i = 0; i < this.length; i++) {
        if (predicate.call(thisArg, this[i], i, this)) return this[i];
      }
    };
  }

  // Array.prototype.findIndex (Chrome 45+)
  if (!Array.prototype.findIndex) {
    Array.prototype.findIndex = function (predicate, thisArg) {
      for (var i = 0; i < this.length; i++) {
        if (predicate.call(thisArg, this[i], i, this)) return i;
      }
      return -1;
    };
  }

  // Array.prototype.includes (Chrome 47+)
  if (!Array.prototype.includes) {
    Array.prototype.includes = function (val, from) {
      var start = from || 0;
      for (var i = start; i < this.length; i++) {
        if (this[i] === val || val !== val && this[i] !== this[i]) return true;
      }
      return false;
    };
  }

  // Array.prototype.fill (Chrome 45+)
  if (!Array.prototype.fill) {
    Array.prototype.fill = function (value, start, end) {
      var len = this.length >>> 0;
      var s = start >> 0 || 0;
      var e = end === undefined ? len : end >> 0;
      if (s < 0) s = Math.max(len + s, 0);
      if (e < 0) e = Math.max(len + e, 0);
      for (var i = s; i < Math.min(e, len); i++) this[i] = value;
      return this;
    };
  }

  // String.prototype.includes (Chrome 41+)
  if (!String.prototype.includes) {
    String.prototype.includes = function (search, start) {
      return this.indexOf(search, start || 0) !== -1;
    };
  }

  // String.prototype.startsWith (Chrome 41+)
  if (!String.prototype.startsWith) {
    String.prototype.startsWith = function (search, pos) {
      var p = pos || 0;
      return this.substr(p, search.length) === search;
    };
  }

  // String.prototype.endsWith (Chrome 41+)
  if (!String.prototype.endsWith) {
    String.prototype.endsWith = function (search, len) {
      var l = len === undefined ? this.length : len;
      return this.substring(l - search.length, l) === search;
    };
  }

  // String.prototype.repeat (Chrome 41+)
  if (!String.prototype.repeat) {
    String.prototype.repeat = function (count) {
      var str = '',
        n = count >>> 0;
      for (var i = 0; i < n; i++) str += this;
      return str;
    };
  }

  // String.prototype.padStart (Chrome 57+)
  if (!String.prototype.padStart) {
    String.prototype.padStart = function (len, fill) {
      var s = String(this);
      var f = fill === undefined ? ' ' : String(fill);
      while (s.length < len) s = f + s;
      return s.substring(0, Math.max(len, s.length));
    };
  }

  // String.prototype.padEnd (Chrome 57+)
  if (!String.prototype.padEnd) {
    String.prototype.padEnd = function (len, fill) {
      var s = String(this);
      var f = fill === undefined ? ' ' : String(fill);
      while (s.length < len) s = s + f;
      return s.substring(0, Math.max(len, s.length));
    };
  }

  // Number.isFinite (Chrome 19+ but just in case)
  if (!Number.isFinite) {
    Number.isFinite = function (v) {
      return typeof v === 'number' && isFinite(v);
    };
  }

  // Number.isInteger (Chrome 34+)
  if (!Number.isInteger) {
    Number.isInteger = function (v) {
      return typeof v === 'number' && isFinite(v) && Math.floor(v) === v;
    };
  }

  // Number.isNaN (Chrome 25+)
  if (!Number.isNaN) {
    Number.isNaN = function (v) {
      return typeof v === 'number' && v !== v;
    };
  }

  // Object.entries (Chrome 54+)
  if (!Object.entries) {
    Object.entries = function (obj) {
      var keys = Object.keys(obj),
        result = [];
      for (var i = 0; i < keys.length; i++) result.push([keys[i], obj[keys[i]]]);
      return result;
    };
  }

  // Object.values (Chrome 54+)
  if (!Object.values) {
    Object.values = function (obj) {
      var keys = Object.keys(obj),
        result = [];
      for (var i = 0; i < keys.length; i++) result.push(obj[keys[i]]);
      return result;
    };
  }

  // Object.getOwnPropertyDescriptors (Chrome 54+)
  if (!Object.getOwnPropertyDescriptors) {
    Object.getOwnPropertyDescriptors = function (obj) {
      var keys = Object.keys(obj),
        result = {};
      for (var i = 0; i < keys.length; i++) {
        result[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
      }
      return result;
    };
  }

  // URLSearchParams (Chrome 49+)
  if (typeof URLSearchParams === 'undefined') {
    window.URLSearchParams = function (search) {
      this._params = {};
      var query = (search || '').replace(/^\?/, '');
      if (!query) return;
      var pairs = query.split('&');
      for (var i = 0; i < pairs.length; i++) {
        var pair = pairs[i].split('=');
        this._params[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
      }
    };
    URLSearchParams.prototype.get = function (name) {
      return this._params.hasOwnProperty(name) ? this._params[name] : null;
    };
    URLSearchParams.prototype.has = function (name) {
      return this._params.hasOwnProperty(name);
    };
  }
})();