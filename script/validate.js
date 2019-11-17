(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = global || self, global.Trava = factory());
  }(this, (function () { 'use strict';
  
    /** Checks if value is string */
    function isString(str) {
      return typeof str === 'string' || str instanceof String;
    }
    function asValueAccessor(fn) {
      fn.__valueAccessor = true;
      return fn;
    }
    function isValueAccessor(fn) {
      return '__valueAccessor' in fn;
    }
    function prepareErrorMessage(errorMsg) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
  
      if (typeof errorMsg === 'function') return errorMsg.apply(void 0, args);
      return errorMsg;
    }
    /* eslint-disable no-undef */
  
    var g = typeof window !== 'undefined' && window || typeof global !== 'undefined' && global.global === global && global || typeof self !== 'undefined' && self.self === self && self || {};
    /* eslint-enable no-undef */
  
    function _typeof(obj) {
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function (obj) {
          return typeof obj;
        };
      } else {
        _typeof = function (obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
      }
  
      return _typeof(obj);
    }
  
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
  
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
  
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      if (staticProps) _defineProperties(Constructor, staticProps);
      return Constructor;
    }
  
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
  
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          writable: true,
          configurable: true
        }
      });
      if (superClass) _setPrototypeOf(subClass, superClass);
    }
  
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
      return _getPrototypeOf(o);
    }
  
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
      };
  
      return _setPrototypeOf(o, p);
    }
  
    function isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if (typeof Proxy === "function") return true;
  
      try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
        return true;
      } catch (e) {
        return false;
      }
    }
  
    function _construct(Parent, args, Class) {
      if (isNativeReflectConstruct()) {
        _construct = Reflect.construct;
      } else {
        _construct = function _construct(Parent, args, Class) {
          var a = [null];
          a.push.apply(a, args);
          var Constructor = Function.bind.apply(Parent, a);
          var instance = new Constructor();
          if (Class) _setPrototypeOf(instance, Class.prototype);
          return instance;
        };
      }
  
      return _construct.apply(null, arguments);
    }
  
    function _isNativeFunction(fn) {
      return Function.toString.call(fn).indexOf("[native code]") !== -1;
    }
  
    function _wrapNativeSuper(Class) {
      var _cache = typeof Map === "function" ? new Map() : undefined;
  
      _wrapNativeSuper = function _wrapNativeSuper(Class) {
        if (Class === null || !_isNativeFunction(Class)) return Class;
  
        if (typeof Class !== "function") {
          throw new TypeError("Super expression must either be null or a function");
        }
  
        if (typeof _cache !== "undefined") {
          if (_cache.has(Class)) return _cache.get(Class);
  
          _cache.set(Class, Wrapper);
        }
  
        function Wrapper() {
          return _construct(Class, arguments, _getPrototypeOf(this).constructor);
        }
  
        Wrapper.prototype = Object.create(Class.prototype, {
          constructor: {
            value: Wrapper,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        return _setPrototypeOf(Wrapper, Class);
      };
  
      return _wrapNativeSuper(Class);
    }
  
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
  
      return self;
    }
  
    function _possibleConstructorReturn(self, call) {
      if (call && (typeof call === "object" || typeof call === "function")) {
        return call;
      }
  
      return _assertThisInitialized(self);
    }
  
    var ValidationError =
    /*#__PURE__*/
    function (_Error) {
      _inherits(ValidationError, _Error);
  
      _createClass(ValidationError, null, [{
        key: "extractData",
        value: function extractData(error) {
          if (error instanceof ValidationError) return error.data;
          return String(error);
        }
      }, {
        key: "stringify",
        value: function stringify(error) {
          if (error instanceof ValidationError) return ValidationError.stringify(error.data);
          if (error instanceof Error) return error.message;
          if (isString(error)) return error;
  
          try {
            return JSON.stringify(error);
          } catch (e) {}
  
          try {
            return String(error);
          } catch (e) {}
  
          return '';
        }
      }]);
  
      function ValidationError(data) {
        var _this;
  
        _classCallCheck(this, ValidationError);
  
        _this = _possibleConstructorReturn(this, _getPrototypeOf(ValidationError).call(this, ValidationError.stringify(data)));
        _this.name = 'ValidationError';
        _this.data = data;
        return _this;
      }
  
      return ValidationError;
    }(_wrapNativeSuper(Error));
  
    function Compose() {
      var mv = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (v) {
        return v;
      };
  
      if (!Array.isArray(mv)) {
        if (mv && _typeof(mv) === 'object') return g.Trava.Keys(mv);
        return mv;
      }
  
      var vs = mv.map(Compose);
      return function (value) {
        var res = value;
  
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }
  
        for (var i = 0; i < vs.length; ++i) {
          res = vs[i].apply(vs, [res].concat(args));
          if (res instanceof Error) break;
        }
  
        return res;
      };
    }
  
    function Required(vs) {
      var errorMsg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Required.ErrorMessage;
      var v = Compose(vs);
      return asValueAccessor(function (value) {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }
  
        if (value === undefined) return new ValidationError(prepareErrorMessage.apply(void 0, [errorMsg, value].concat(args)));
        return v.apply(void 0, [value].concat(args));
      });
    }
    Required.ErrorMessage = "Value is required";
  
    // TODO Currently works only for Arrays
    function Each(mv) {
      var eachOpts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Each.DEFAULTS;
      var v = Compose(mv); // make keys required by default
  
      if (!isValueAccessor(v)) v = Required(v, eachOpts.requiredMessage);
      return function (coll) {
        var errors;
        var valid = [];
  
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }
  
        for (var i = 0; i < coll.length; i++) {
          var res = v.apply(void 0, [coll[i], i, coll].concat(args));
  
          if (res instanceof Error) {
            var errorData = ValidationError.extractData(res);
  
            if (eachOpts.errorsTo === Array) {
              if (!errors) errors = [];
              errors.push(errorData);
            } else {
              if (!errors) errors = {};
              errors[i] = errorData;
            }
          } else {
            valid.push(res);
          }
        }
  
        return errors ? new ValidationError(errors) : valid;
      };
    }
    Each.DEFAULTS = {
      errorsTo: Object
    };
  
    function Keys(vMap) {
      return function (coll) {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }
  
        var errors;
        var valid = {};
        Object.keys(vMap).forEach(function (k) {
          var validator = Compose(vMap[k]); // make keys required by default
  
          if (!isValueAccessor(validator)) validator = Required(validator);
          var res = validator.apply(void 0, [coll[k], k, coll].concat(args));
  
          if (res instanceof Error) {
            if (!errors) errors = {};
            errors[k] = ValidationError.extractData(res);
          } else if (k in coll || res !== undefined) {
            valid[k] = res;
          }
        });
        return errors ? new ValidationError(errors) : valid;
      };
    }
  
    function Optional(vs, defaultValue) {
      var v = Compose(vs);
      return asValueAccessor(function (value) {
        if (value === undefined) return defaultValue;
  
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }
  
        return v.apply(void 0, [value].concat(args));
      });
    }
  
    function Nullable(vs) {
      var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var v = Compose(vs);
      return asValueAccessor(function (value) {
        if (value == null) return defaultValue;
  
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }
  
        return v.apply(void 0, [value].concat(args));
      });
    }
  
    function Check(fn) {
      var errorMsg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Check.ErrorMessage;
      return function (value) {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }
  
        return fn.apply(void 0, [value].concat(args)) ? value : new ValidationError(prepareErrorMessage.apply(void 0, [errorMsg, value].concat(args)));
      };
    }
    Check.ErrorMessage = "Incorrect value";
  
    function Enum(values) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
  
      return Check.apply(void 0, [function (value) {
        return values.indexOf(value) >= 0;
      }].concat(args));
    }
  
    function Some(mv) {
      var vs = mv.map(Compose);
      return function (value) {
        var res;
  
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }
  
        for (var i = 0; i < vs.length; ++i) {
          res = vs[i].apply(vs, [value].concat(args));
          if (!(res instanceof Error)) break;
        }
  
        return res;
      };
    }
  
    function Const(v) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
  
      return Check.apply(void 0, [function (value) {
        return value === v;
      }].concat(args));
    }
  
    var Trava = function Trava(scheme) {
      var vs = Compose(scheme);
  
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
  
      if (!args.length) return vs; // possible opts to implement:
      // - skipErrors - return just valid fields, skip errors
      // - wrapExceptions - treat exceptions like validation errors
  
      return vs.apply(void 0, args);
    };
  
    Trava.Each = Each;
    Trava.Keys = Keys;
    Trava.Required = Required;
    Trava.Optional = Optional;
    Trava.Nullable = Nullable;
    Trava.Check = Check;
    Trava.Enum = Enum;
    Trava.Compose = Compose;
    Trava.Some = Some;
    Trava.Const = Const;
    Trava.ValidationError = ValidationError;
    Trava.asValueAccessor = asValueAccessor;
    Trava.isValueAccessor = isValueAccessor;
    g.Trava = Trava;
  
    return Trava;
  
  })));
  //# sourceMappingURL=trava.js.map