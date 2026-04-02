import {
  require_a_function,
  require_an_object,
  require_core,
  require_enum_bug_keys,
  require_export,
  require_fails,
  require_global,
  require_has,
  require_is_object,
  require_iter_create,
  require_object_create,
  require_object_dp,
  require_object_gopd,
  require_object_gops,
  require_object_gpo,
  require_object_keys_internal,
  require_property_desc,
  require_set_proto,
  require_to_primitive
} from "./chunk-KNIFT4MU.js";
import {
  __commonJS
} from "./chunk-4MWRP73S.js";

// ../../node_modules/core-js/modules/es6.reflect.apply.js
var require_es6_reflect_apply = __commonJS({
  "../../node_modules/core-js/modules/es6.reflect.apply.js"() {
    var $export = require_export();
    var aFunction = require_a_function();
    var anObject = require_an_object();
    var rApply = (require_global().Reflect || {}).apply;
    var fApply = Function.apply;
    $export($export.S + $export.F * !require_fails()(function() {
      rApply(function() {
      });
    }), "Reflect", {
      apply: function apply(target, thisArgument, argumentsList) {
        var T = aFunction(target);
        var L = anObject(argumentsList);
        return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
      }
    });
  }
});

// ../../node_modules/core-js/modules/_invoke.js
var require_invoke = __commonJS({
  "../../node_modules/core-js/modules/_invoke.js"(exports, module) {
    module.exports = function(fn, args, that) {
      var un = that === void 0;
      switch (args.length) {
        case 0:
          return un ? fn() : fn.call(that);
        case 1:
          return un ? fn(args[0]) : fn.call(that, args[0]);
        case 2:
          return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);
        case 3:
          return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);
        case 4:
          return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);
      }
      return fn.apply(that, args);
    };
  }
});

// ../../node_modules/core-js/modules/_bind.js
var require_bind = __commonJS({
  "../../node_modules/core-js/modules/_bind.js"(exports, module) {
    "use strict";
    var aFunction = require_a_function();
    var isObject = require_is_object();
    var invoke = require_invoke();
    var arraySlice = [].slice;
    var factories = {};
    var construct = function(F, len, args) {
      if (!(len in factories)) {
        for (var n = [], i = 0; i < len; i++) n[i] = "a[" + i + "]";
        factories[len] = Function("F,a", "return new F(" + n.join(",") + ")");
      }
      return factories[len](F, args);
    };
    module.exports = Function.bind || function bind(that) {
      var fn = aFunction(this);
      var partArgs = arraySlice.call(arguments, 1);
      var bound = function() {
        var args = partArgs.concat(arraySlice.call(arguments));
        return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
      };
      if (isObject(fn.prototype)) bound.prototype = fn.prototype;
      return bound;
    };
  }
});

// ../../node_modules/core-js/modules/es6.reflect.construct.js
var require_es6_reflect_construct = __commonJS({
  "../../node_modules/core-js/modules/es6.reflect.construct.js"() {
    var $export = require_export();
    var create = require_object_create();
    var aFunction = require_a_function();
    var anObject = require_an_object();
    var isObject = require_is_object();
    var fails = require_fails();
    var bind = require_bind();
    var rConstruct = (require_global().Reflect || {}).construct;
    var NEW_TARGET_BUG = fails(function() {
      function F() {
      }
      return !(rConstruct(function() {
      }, [], F) instanceof F);
    });
    var ARGS_BUG = !fails(function() {
      rConstruct(function() {
      });
    });
    $export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), "Reflect", {
      construct: function construct(Target, args) {
        aFunction(Target);
        anObject(args);
        var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
        if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);
        if (Target == newTarget) {
          switch (args.length) {
            case 0:
              return new Target();
            case 1:
              return new Target(args[0]);
            case 2:
              return new Target(args[0], args[1]);
            case 3:
              return new Target(args[0], args[1], args[2]);
            case 4:
              return new Target(args[0], args[1], args[2], args[3]);
          }
          var $args = [null];
          $args.push.apply($args, args);
          return new (bind.apply(Target, $args))();
        }
        var proto = newTarget.prototype;
        var instance = create(isObject(proto) ? proto : Object.prototype);
        var result = Function.apply.call(Target, instance, args);
        return isObject(result) ? result : instance;
      }
    });
  }
});

// ../../node_modules/core-js/modules/es6.reflect.define-property.js
var require_es6_reflect_define_property = __commonJS({
  "../../node_modules/core-js/modules/es6.reflect.define-property.js"() {
    var dP = require_object_dp();
    var $export = require_export();
    var anObject = require_an_object();
    var toPrimitive = require_to_primitive();
    $export($export.S + $export.F * require_fails()(function() {
      Reflect.defineProperty(dP.f({}, 1, { value: 1 }), 1, { value: 2 });
    }), "Reflect", {
      defineProperty: function defineProperty(target, propertyKey, attributes) {
        anObject(target);
        propertyKey = toPrimitive(propertyKey, true);
        anObject(attributes);
        try {
          dP.f(target, propertyKey, attributes);
          return true;
        } catch (e) {
          return false;
        }
      }
    });
  }
});

// ../../node_modules/core-js/modules/es6.reflect.delete-property.js
var require_es6_reflect_delete_property = __commonJS({
  "../../node_modules/core-js/modules/es6.reflect.delete-property.js"() {
    var $export = require_export();
    var gOPD = require_object_gopd().f;
    var anObject = require_an_object();
    $export($export.S, "Reflect", {
      deleteProperty: function deleteProperty(target, propertyKey) {
        var desc = gOPD(anObject(target), propertyKey);
        return desc && !desc.configurable ? false : delete target[propertyKey];
      }
    });
  }
});

// ../../node_modules/core-js/modules/es6.reflect.enumerate.js
var require_es6_reflect_enumerate = __commonJS({
  "../../node_modules/core-js/modules/es6.reflect.enumerate.js"() {
    "use strict";
    var $export = require_export();
    var anObject = require_an_object();
    var Enumerate = function(iterated) {
      this._t = anObject(iterated);
      this._i = 0;
      var keys = this._k = [];
      var key;
      for (key in iterated) keys.push(key);
    };
    require_iter_create()(Enumerate, "Object", function() {
      var that = this;
      var keys = that._k;
      var key;
      do {
        if (that._i >= keys.length) return { value: void 0, done: true };
      } while (!((key = keys[that._i++]) in that._t));
      return { value: key, done: false };
    });
    $export($export.S, "Reflect", {
      enumerate: function enumerate(target) {
        return new Enumerate(target);
      }
    });
  }
});

// ../../node_modules/core-js/modules/es6.reflect.get.js
var require_es6_reflect_get = __commonJS({
  "../../node_modules/core-js/modules/es6.reflect.get.js"() {
    var gOPD = require_object_gopd();
    var getPrototypeOf = require_object_gpo();
    var has = require_has();
    var $export = require_export();
    var isObject = require_is_object();
    var anObject = require_an_object();
    function get(target, propertyKey) {
      var receiver = arguments.length < 3 ? target : arguments[2];
      var desc, proto;
      if (anObject(target) === receiver) return target[propertyKey];
      if (desc = gOPD.f(target, propertyKey)) return has(desc, "value") ? desc.value : desc.get !== void 0 ? desc.get.call(receiver) : void 0;
      if (isObject(proto = getPrototypeOf(target))) return get(proto, propertyKey, receiver);
    }
    $export($export.S, "Reflect", { get });
  }
});

// ../../node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js
var require_es6_reflect_get_own_property_descriptor = __commonJS({
  "../../node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js"() {
    var gOPD = require_object_gopd();
    var $export = require_export();
    var anObject = require_an_object();
    $export($export.S, "Reflect", {
      getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
        return gOPD.f(anObject(target), propertyKey);
      }
    });
  }
});

// ../../node_modules/core-js/modules/es6.reflect.get-prototype-of.js
var require_es6_reflect_get_prototype_of = __commonJS({
  "../../node_modules/core-js/modules/es6.reflect.get-prototype-of.js"() {
    var $export = require_export();
    var getProto = require_object_gpo();
    var anObject = require_an_object();
    $export($export.S, "Reflect", {
      getPrototypeOf: function getPrototypeOf(target) {
        return getProto(anObject(target));
      }
    });
  }
});

// ../../node_modules/core-js/modules/es6.reflect.has.js
var require_es6_reflect_has = __commonJS({
  "../../node_modules/core-js/modules/es6.reflect.has.js"() {
    var $export = require_export();
    $export($export.S, "Reflect", {
      has: function has(target, propertyKey) {
        return propertyKey in target;
      }
    });
  }
});

// ../../node_modules/core-js/modules/es6.reflect.is-extensible.js
var require_es6_reflect_is_extensible = __commonJS({
  "../../node_modules/core-js/modules/es6.reflect.is-extensible.js"() {
    var $export = require_export();
    var anObject = require_an_object();
    var $isExtensible = Object.isExtensible;
    $export($export.S, "Reflect", {
      isExtensible: function isExtensible(target) {
        anObject(target);
        return $isExtensible ? $isExtensible(target) : true;
      }
    });
  }
});

// ../../node_modules/core-js/modules/_object-gopn.js
var require_object_gopn = __commonJS({
  "../../node_modules/core-js/modules/_object-gopn.js"(exports) {
    var $keys = require_object_keys_internal();
    var hiddenKeys = require_enum_bug_keys().concat("length", "prototype");
    exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
      return $keys(O, hiddenKeys);
    };
  }
});

// ../../node_modules/core-js/modules/_own-keys.js
var require_own_keys = __commonJS({
  "../../node_modules/core-js/modules/_own-keys.js"(exports, module) {
    var gOPN = require_object_gopn();
    var gOPS = require_object_gops();
    var anObject = require_an_object();
    var Reflect2 = require_global().Reflect;
    module.exports = Reflect2 && Reflect2.ownKeys || function ownKeys(it) {
      var keys = gOPN.f(anObject(it));
      var getSymbols = gOPS.f;
      return getSymbols ? keys.concat(getSymbols(it)) : keys;
    };
  }
});

// ../../node_modules/core-js/modules/es6.reflect.own-keys.js
var require_es6_reflect_own_keys = __commonJS({
  "../../node_modules/core-js/modules/es6.reflect.own-keys.js"() {
    var $export = require_export();
    $export($export.S, "Reflect", { ownKeys: require_own_keys() });
  }
});

// ../../node_modules/core-js/modules/es6.reflect.prevent-extensions.js
var require_es6_reflect_prevent_extensions = __commonJS({
  "../../node_modules/core-js/modules/es6.reflect.prevent-extensions.js"() {
    var $export = require_export();
    var anObject = require_an_object();
    var $preventExtensions = Object.preventExtensions;
    $export($export.S, "Reflect", {
      preventExtensions: function preventExtensions(target) {
        anObject(target);
        try {
          if ($preventExtensions) $preventExtensions(target);
          return true;
        } catch (e) {
          return false;
        }
      }
    });
  }
});

// ../../node_modules/core-js/modules/es6.reflect.set.js
var require_es6_reflect_set = __commonJS({
  "../../node_modules/core-js/modules/es6.reflect.set.js"() {
    var dP = require_object_dp();
    var gOPD = require_object_gopd();
    var getPrototypeOf = require_object_gpo();
    var has = require_has();
    var $export = require_export();
    var createDesc = require_property_desc();
    var anObject = require_an_object();
    var isObject = require_is_object();
    function set(target, propertyKey, V) {
      var receiver = arguments.length < 4 ? target : arguments[3];
      var ownDesc = gOPD.f(anObject(target), propertyKey);
      var existingDescriptor, proto;
      if (!ownDesc) {
        if (isObject(proto = getPrototypeOf(target))) {
          return set(proto, propertyKey, V, receiver);
        }
        ownDesc = createDesc(0);
      }
      if (has(ownDesc, "value")) {
        if (ownDesc.writable === false || !isObject(receiver)) return false;
        if (existingDescriptor = gOPD.f(receiver, propertyKey)) {
          if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false) return false;
          existingDescriptor.value = V;
          dP.f(receiver, propertyKey, existingDescriptor);
        } else dP.f(receiver, propertyKey, createDesc(0, V));
        return true;
      }
      return ownDesc.set === void 0 ? false : (ownDesc.set.call(receiver, V), true);
    }
    $export($export.S, "Reflect", { set });
  }
});

// ../../node_modules/core-js/modules/es6.reflect.set-prototype-of.js
var require_es6_reflect_set_prototype_of = __commonJS({
  "../../node_modules/core-js/modules/es6.reflect.set-prototype-of.js"() {
    var $export = require_export();
    var setProto = require_set_proto();
    if (setProto) $export($export.S, "Reflect", {
      setPrototypeOf: function setPrototypeOf(target, proto) {
        setProto.check(target, proto);
        try {
          setProto.set(target, proto);
          return true;
        } catch (e) {
          return false;
        }
      }
    });
  }
});

// ../../node_modules/core-js/es6/reflect.js
var require_reflect = __commonJS({
  "../../node_modules/core-js/es6/reflect.js"(exports, module) {
    require_es6_reflect_apply();
    require_es6_reflect_construct();
    require_es6_reflect_define_property();
    require_es6_reflect_delete_property();
    require_es6_reflect_enumerate();
    require_es6_reflect_get();
    require_es6_reflect_get_own_property_descriptor();
    require_es6_reflect_get_prototype_of();
    require_es6_reflect_has();
    require_es6_reflect_is_extensible();
    require_es6_reflect_own_keys();
    require_es6_reflect_prevent_extensions();
    require_es6_reflect_set();
    require_es6_reflect_set_prototype_of();
    module.exports = require_core().Reflect;
  }
});
export default require_reflect();
//# sourceMappingURL=core-js_es6_reflect.js.map
