module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");
exports.__esModule = true;
exports.default = void 0;
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));
var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");
var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");
let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};
function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser
  if (!IntersectionObserver) {
    return undefined;
  }
  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }
      const cb = listeners.get(entry.target);
      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}
const listenToIntersections = (el, cb) => {
  const observer = getObserver();
  if (!observer) {
    return () => {};
  }
  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }
    listeners.delete(el);
  };
};
function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch
  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  }); // Join on an invalid URI character
  prefetched[href + '%' + as] = true;
}
function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey ||
  // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}
function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName
  } = e.currentTarget;
  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }
  e.preventDefault(); //  avoid scroll for urls with anchor refs
  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present
  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;
    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}
function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:
    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:
    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      if (key === 'as') {
        if (props[key] && typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: typeof props[key]
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && typeof props[key] !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const hasWarned = _react.default.useRef(false);
    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }
  const p = props.prefetch !== false;
  const [childElm, setChildElm] = _react.default.useState();
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';
  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const resolvedHref = (0, _router.resolveHref)(pathname, props.href);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedHref
    };
  }, [pathname, props.href, props.as]);
  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];
      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);
  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag
  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error
  const child = _react.Children.only(children);
  const childProps = {
    ref: el => {
      if (el) setChildElm(el);
      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }
      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };
  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;
      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }
      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user
  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)(as);
  }
  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}
var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0; /**
                                             * Removes the trailing slash of a path if there is one. Preserves the root path `/`.
                                             */
function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
} /**
  * Normalizes the trailing slash of a path according to the `trailingSlash` option
  * in `next.config.js`.
  */
const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");
var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));
exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;
var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");
var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));
exports.withRouter = _withRouter.default; /* global window */
const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],
  ready(cb) {
    if (this.router) return cb();
    if (false) {}
  }
}; // Create public properties and methods of the router in the singletonRouter
const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it
Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }
});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }
  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;
  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;
      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});
function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }
  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.
var _default = singletonRouter; // Reexport the withRoute HOC
exports.default = _default;
function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.
const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance
exports.createRouter = createRouter;
function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};
  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful
      continue;
    }
    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it
  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
exports.__esModule = true;
exports.default = withRouter;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");
function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }
  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;
  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }
  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/compiled/path-to-regexp/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/compiled/path-to-regexp/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at " + i);
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at " + j);
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern)
                throw new TypeError("Missing pattern at " + i);
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function () {
        var result = "";
        var value;
        // tslint:disable-next-line
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
exports.parse = parse;
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
exports.compile = compile;
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"" + token.name + "\" to not be empty");
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
        }
        return path;
    };
}
exports.tokensToFunction = tokensToFunction;
/**
 * Create path match function from `path-to-regexp` spec.
 */
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
exports.match = match;
/**
 * Create a path match function from `path-to-regexp` output.
 */
function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            // tslint:disable-next-line
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
exports.regexpToFunction = regexpToFunction;
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) {
        for (var i = 0; i < groups.length; i++) {
            keys.push({
                name: i,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            });
        }
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    }
                    else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                }
                else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            }
            else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict)
            route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
            : // tslint:disable-next-line
                endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
exports.tokensToRegexp = tokensToRegexp;
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
exports.pathToRegexp = pathToRegexp;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt; /*
                        MIT License
                        Copyright (c) Jason Miller (https://jasonformat.com/)
                        Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
                        The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
                        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
                        */ // This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file
function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },
    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },
    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;
var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");
var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");
var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));
var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");
var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");
var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");
var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js"));
var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");
var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} /* global __NEXT_DATA__ */ // tslint:disable:no-console
const basePath =  false || '';
function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}
function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}
function addBasePath(path) {
  // we only add the basepath on relative urls
  return basePath && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(basePath) : basePath + path : path;
}
function delBasePath(path) {
  return path.slice(basePath.length) || '/';
} /**
  * Detects whether a given url is routable by the Next.js router (browser only).
  */
function isLocalURL(url) {
  if (url.startsWith('/')) return true;
  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
} /**
  * Resolves a given hyperlink with a certain router state (basePath not included).
  * Preserves absolute urls.
  */
function resolveHref(currentPath, href) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);
  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname); // if the origin didn't change, it means we received a relative href
    return finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
  } catch (_) {
    return urlAsString;
  }
}
const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');
function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}
function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}
const manualScrollRestoration =  false && false;
function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }
      throw new Error(`Failed to load static props`);
    }
    return res.json();
  });
}
function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }
    throw err;
  });
}
class Router {
  /**
  * Map of all components loaded in `Router`
  */ // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    initialStyleSheets,
    err,
    subscription,
    isFallback
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.onPopState = e => {
      const state = e.state;
      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }
      if (!state.__N) {
        return;
      }
      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site
      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.
      if (this._bps && !this._bps(state)) {
        return;
      }
      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow
      }));
    }; // represents the current component key
    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)
    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.
    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        styleSheets: initialStyleSheets,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }
    this.components['/_app'] = {
      Component: App,
      styleSheets: [/* /_app does not need its stylesheets managed */]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch
    this.asPath =
    // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site
    this.isSsr = true;
    this.isFallback = isFallback;
    if (false) {}
  }
  reload() {
    window.location.reload();
  } /**
    * Go back in history
    */
  back() {
    window.history.back();
  } /**
    * Performs a `pushState` with arguments
    * @param url of the route
    * @param as masks `url` for the browser
    * @param options object you can define `shallow` and other options
    */
  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  } /**
    * Performs a `replaceState` with arguments
    * @param url of the route
    * @param as masks `url` for the browser
    * @param options object you can define `shallow` and other options
    */
  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }
  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }
    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry
    if (_utils.ST) {
      performance.mark('routeChange');
    }
    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }
    const cleanedAs = hasBasePath(as) ? delBasePath(as) : as;
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.
    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?
      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    } // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to
    const pages = await this.pageLoader.getPageList();
    const {
      __rewrites: rewrites
    } = await this.pageLoader.promisedBuildManifest;
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      searchParams
    } = parsed;
    parsed = this._resolveHref(parsed, pages);
    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    }
    const query = (0, _querystring.searchParamsToUrlQuery)(searchParams); // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1
    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url
    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }
    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly
    let resolvedAs = as;
    if (true) {
      resolvedAs = (0, _resolveRewrites.default)(as, pages, basePath, rewrites, query, p => this._resolveHref({
        pathname: p
      }, pages).pathname);
    }
    resolvedAs = delBasePath(resolvedAs);
    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const {
        pathname: asPathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      if (!routeMatch) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);
        if (missingParams.length > 0) {
          if (true) {
            console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }
          throw new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/vercel/next.js/incompatible-href-as`);
        }
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }
    Router.events.emit('routeChangeStart', as);
    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error
      } = routeInfo;
      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, as, options);
      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }
      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });
      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }
      if (false) {}
      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }
      throw err;
    }
  }
  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }
      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }
    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      },
      // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }
  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }
    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.
      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.
      throw buildCancellationError();
    }
    try {
      const {
        page: Component,
        styleSheets
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        styleSheets,
        err,
        error: err
      };
      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }
      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }
  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];
      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;
      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");
        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }
      let dataHref;
      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG);
      }
      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component,
      // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }
  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  } /**
    * Callback to execute before replacing router state
    * @param cb callback to be executed
    */
  beforePopState(cb) {
    this._bps = cb;
  }
  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same
    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change
    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.
    return oldHash !== newHash;
  }
  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value
    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found
    const idEl = document.getElementById(hash);
    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers
    const nameEl = document.getElementsByName(hash)[0];
    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }
  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  _resolveHref(parsedHref, pages) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _denormalizePagePath.denormalizePagePath)(delBasePath(pathname));
    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes
    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = addBasePath(page);
          return true;
        }
      });
    }
    return parsedHref;
  } /**
    * Prefetch page code, you may wait for the data during page rendering.
    * This feature only works in production!
    * @param url the href of prefetched page
    * @param asPath the as path of the prefetched page
    */
  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;
    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages);
    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries
    if (true) {
      return;
    }
    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }
  async fetchComponent(route) {
    let cancelled = false;
    const cancel = this.clc = () => {
      cancelled = true;
    };
    const componentResult = await this.pageLoader.loadPage(route);
    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }
    if (cancel === this.clc) {
      this.clc = null;
    }
    return componentResult;
  }
  _getData(fn) {
    let cancelled = false;
    const cancel = () => {
      cancelled = true;
    };
    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }
      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }
      return data;
    });
  }
  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);
    if (false) {}
    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }
  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }
  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];
    const AppTree = this._wrapApp(App);
    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }
  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }
  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }
}
exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;
var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));
function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();
  _getRequireWildcardCache = function () {
    return cache;
  };
  return cache;
}
function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }
  var cache = _getRequireWildcardCache();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
const slashedProtocols = /https?|ftp|gopher|file/;
function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';
  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);
    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }
  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }
  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';
  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }
  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string
const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;
function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;
var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");
const DUMMY_BASE = new URL(true ? 'http://n' : undefined); /**
                                                                                 * Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
                                                                                 * (e.g. `./hello`) then at least base must be.
                                                                                 * Absolute urls are rejected with one exception, in the browser, absolute urls that are on
                                                                                 * the current origin will be parsed as relative
                                                                                 */
function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);
  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }
  return {
    pathname,
    searchParams,
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/path-match.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
exports.__esModule = true;
exports.pathToRegexp = exports.default = exports.customRouteMatcherOptions = exports.matcherOptions = void 0;
var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));
exports.pathToRegexp = pathToRegexp;
function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();
  _getRequireWildcardCache = function () {
    return cache;
  };
  return cache;
}
function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }
  var cache = _getRequireWildcardCache();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
const matcherOptions = {
  sensitive: false,
  delimiter: '/',
  decode: decodeParam
};
exports.matcherOptions = matcherOptions;
const customRouteMatcherOptions = _objectSpread(_objectSpread({}, matcherOptions), {}, {
  strict: true
});
exports.customRouteMatcherOptions = customRouteMatcherOptions;
var _default = (customRoute = false) => {
  return path => {
    const keys = [];
    const matcherRegex = pathToRegexp.pathToRegexp(path, keys, customRoute ? customRouteMatcherOptions : matcherOptions);
    const matcher = pathToRegexp.regexpToFunction(matcherRegex, keys, matcherOptions);
    return (pathname, params) => {
      const res = pathname == null ? false : matcher(pathname);
      if (!res) {
        return false;
      }
      if (customRoute) {
        for (const key of keys) {
          // unnamed params should be removed as they
          // are not allowed to be used in the destination
          if (typeof key.name === 'number') {
            delete res.params[key.name];
          }
        }
      }
      return _objectSpread(_objectSpread({}, params), res.params);
    };
  };
};
exports.default = _default;
function decodeParam(param) {
  try {
    return decodeURIComponent(param);
  } catch (_) {
    const err = new Error('failed to decode param');
    err.code = 'DECODE_FAILED';
    throw err;
  }
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
exports.__esModule = true;
exports.default = prepareDestination;
var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
var _parseRelativeUrl = __webpack_require__(/*! ./parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");
var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));
function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();
  _getRequireWildcardCache = function () {
    return cache;
  };
  return cache;
}
function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }
  var cache = _getRequireWildcardCache();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
function prepareDestination(destination, params, query, appendParamsToQuery, basePath) {
  let parsedDestination = {};
  if (destination.startsWith('/')) {
    parsedDestination = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
  } else {
    const {
      pathname,
      searchParams,
      hash,
      hostname,
      port,
      protocol,
      search,
      href
    } = new URL(destination);
    parsedDestination = {
      pathname,
      searchParams,
      hash,
      protocol,
      hostname,
      port,
      search,
      href
    };
  }
  parsedDestination.query = (0, _querystring.searchParamsToUrlQuery)(parsedDestination.searchParams);
  const destQuery = parsedDestination.query;
  const destPath = `${parsedDestination.pathname}${parsedDestination.hash || ''}`;
  const destPathParamKeys = [];
  pathToRegexp.pathToRegexp(destPath, destPathParamKeys);
  const destPathParams = destPathParamKeys.map(key => key.name);
  let destinationCompiler = pathToRegexp.compile(destPath,
  // we don't validate while compiling the destination since we should
  // have already validated before we got to this point and validating
  // breaks compiling destinations with named pattern params from the source
  // e.g. /something:hello(.*) -> /another/:hello is broken with validation
  // since compile validation is meant for reversing and not for inserting
  // params from a separate path-regex into another
  {
    validate: false
  });
  let newUrl; // update any params in query values
  for (const [key, strOrArray] of Object.entries(destQuery)) {
    let value = Array.isArray(strOrArray) ? strOrArray[0] : strOrArray;
    if (value) {
      // the value needs to start with a forward-slash to be compiled
      // correctly
      value = `/${value}`;
      const queryCompiler = pathToRegexp.compile(value, {
        validate: false
      });
      value = queryCompiler(params).substr(1);
    }
    destQuery[key] = value;
  } // add path params to query if it's not a redirect and not
  // already defined in destination query or path
  const paramKeys = Object.keys(params);
  if (appendParamsToQuery && !paramKeys.some(key => destPathParams.includes(key))) {
    for (const key of paramKeys) {
      if (!(key in destQuery)) {
        destQuery[key] = params[key];
      }
    }
  }
  const shouldAddBasePath = destination.startsWith('/') && basePath;
  try {
    newUrl = `${shouldAddBasePath ? basePath : ''}${encodeURI(destinationCompiler(params))}`;
    const [pathname, hash] = newUrl.split('#');
    parsedDestination.pathname = pathname;
    parsedDestination.hash = `${hash ? '#' : ''}${hash || ''}`;
    delete parsedDestination.search;
    delete parsedDestination.searchParams;
  } catch (err) {
    if (err.message.match(/Expected .*? to not repeat, but got an array/)) {
      throw new Error(`To use a multi-match in the destination you must add \`*\` at the end of the param name to signify it should repeat. https://err.sh/vercel/next.js/invalid-multi-match`);
    }
    throw err;
  } // Query merge order lowest priority to highest
  // 1. initial URL query values
  // 2. path segment values
  // 3. destination specified query values
  parsedDestination.query = _objectSpread(_objectSpread({}, query), parsedDestination.query);
  return {
    newUrl,
    parsedDestination
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;
function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}
function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, item));
    } else {
      result.set(key, value);
    }
  });
  return result;
}
function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;
var _pathMatch = _interopRequireDefault(__webpack_require__(/*! ./path-match */ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js"));
var _prepareDestination = _interopRequireDefault(__webpack_require__(/*! ./prepare-destination */ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js"));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
const customRouteMatcher = (0, _pathMatch.default)(true);
function resolveRewrites(asPath, pages, basePath, rewrites, query, resolveHref) {
  if (!pages.includes(asPath)) {
    for (const rewrite of rewrites) {
      const matcher = customRouteMatcher(rewrite.source);
      const params = matcher(asPath);
      if (params) {
        if (!rewrite.destination) {
          // this is a proxied rewrite which isn't handled on the client
          break;
        }
        const destRes = (0, _prepareDestination.default)(rewrite.destination, params, query, true, rewrite.basePath === false ? '' : basePath);
        asPath = destRes.parsedDestination.pathname;
        Object.assign(query, destRes.parsedDestination.query);
        if (pages.includes(asPath)) {
          // check if we now match a page as this means we are done
          // resolving the rewrites
          break;
        } // check if we match a dynamic-route, if so we break the rewrites chain
        const resolvedHref = resolveHref(asPath);
        if (resolvedHref !== asPath && pages.includes(resolvedHref)) {
          break;
        }
      }
    }
  }
  return asPath;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;
function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);
    if (!routeMatch) {
      return false;
    }
    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];
      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes
function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}
function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');
  if (optional) {
    param = param.slice(1, -1);
  }
  const repeat = param.startsWith('...');
  if (repeat) {
    param = param.slice(3);
  }
  return {
    key: param,
    repeat,
    optional
  };
}
function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest
  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters
    const getSafeRouteKey = () => {
      let routeKey = '';
      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;
        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }
      return routeKey;
    };
    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex
        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key
        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }
        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }
        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }
        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }
  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;
var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js"); /**
                                                       * Utils
                                                       */
function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }
    return result;
  };
}
function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}
function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}
function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}
function isResSent(res) {
  return res.finished || res.headersSent;
}
async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;
    if ((_App$prototype = App.prototype) === null || _App$prototype === void 0 ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`
  const res = ctx.res || ctx.ctx && ctx.ctx.res;
  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }
    return {};
  }
  const props = await App.getInitialProps(ctx);
  if (res && isResSent(res)) {
    return props;
  }
  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }
  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }
  return props;
}
const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;
function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }
  return (0, _formatUrl.formatUrl)(url);
}
const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./src/assets/icons/arrow-left.tsx":
/*!*****************************************!*\
  !*** ./src/assets/icons/arrow-left.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Photoshop2021x64\\Github Repo\\Eternal\\src\\assets\\icons\\arrow-left.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], t.indexOf(o) >= 0 || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.indexOf(n) >= 0) continue; t[n] = r[n]; } return t; }
const ArrowLeft = _ref => {
  let {
      color = 'currentColor',
      width = '19px',
      height = '12px'
    } = _ref,
    props = _objectWithoutProperties(_ref, ["color", "width", "height"]);
  return __jsx("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18.738 12"
  }, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }), __jsx("path", {
    "data-name": "Path 17147",
    d: "M1252.468,501.849l5.7-5.922,1.5,1.567-3.395,3.143.091.214h14.849v2.108H1256.2l3.654,3.43-1.558,1.538Z",
    transform: "translate(-1252.468 -495.927)",
    fill: color,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (ArrowLeft);

/***/ }),

/***/ "./src/assets/icons/arrow-right.tsx":
/*!******************************************!*\
  !*** ./src/assets/icons/arrow-right.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Photoshop2021x64\\Github Repo\\Eternal\\src\\assets\\icons\\arrow-right.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
const ArrowRight = ({
  color = 'currentColor',
  width = '16px',
  height = '13px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 15.333 12.825",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx("g", {
    "data-name": "arrow-forward (1)",
    transform: "translate(-93 -110.588)",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, __jsx("path", {
    "data-name": "Path 16639",
    d: "M268,112l4.517,5L268,122",
    transform: "translate(-165.184 0)",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }), __jsx("line", {
    "data-name": "Line 6",
    x1: "12.308",
    transform: "translate(94 117)",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (ArrowRight);

/***/ }),

/***/ "./src/assets/icons/cart-icon.tsx":
/*!****************************************!*\
  !*** ./src/assets/icons/cart-icon.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Photoshop2021x64\\Github Repo\\Eternal\\src\\assets\\icons\\cart-icon.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
const CartIcon = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx("path", {
    d: "M4.7,3.8H17.3a.9.9,0,0,1,.9.9V17.3a.9.9,0,0,1-.9.9H4.7a.9.9,0,0,1-.9-.9V4.7A.9.9,0,0,1,4.7,3.8ZM2,4.7A2.7,2.7,0,0,1,4.7,2H17.3A2.7,2.7,0,0,1,20,4.7V17.3A2.7,2.7,0,0,1,17.3,20H4.7A2.7,2.7,0,0,1,2,17.3ZM11,11C8.515,11,6.5,8.582,6.5,5.6H8.3c0,2.309,1.5,3.6,2.7,3.6s2.7-1.291,2.7-3.6h1.8C15.5,8.582,13.485,11,11,11Z",
    transform: "translate(-2 -2)",
    fill: color,
    fillRule: "evenodd",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (CartIcon);

/***/ }),

/***/ "./src/assets/icons/chevron-left.tsx":
/*!*******************************************!*\
  !*** ./src/assets/icons/chevron-left.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Photoshop2021x64\\Github Repo\\Eternal\\src\\assets\\icons\\chevron-left.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
const ChevronLeft = ({
  color = 'currentColor',
  width = '8.5px',
  height = '14px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 8.4 14",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx("path", {
    id: "chevron-left",
    d: "M16.157,6.329l-1.4-1.4-7,7,7,7,1.4-1.4-5.6-5.6Z",
    transform: "translate(-7.757 -4.93)",
    fill: color,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (ChevronLeft);

/***/ }),

/***/ "./src/assets/icons/chevron-right.tsx":
/*!********************************************!*\
  !*** ./src/assets/icons/chevron-right.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Photoshop2021x64\\Github Repo\\Eternal\\src\\assets\\icons\\chevron-right.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
const ChevronRight = ({
  color = 'currentColor',
  width = '8.5px',
  height = '14px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 8.4 14",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx("path", {
    d: "M7.757,6.329l1.4-1.4,7,7-7,7-1.4-1.4,5.6-5.6Z",
    transform: "translate(-7.757 -4.929)",
    fill: color,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (ChevronRight);

/***/ }),

/***/ "./src/assets/icons/close.tsx":
/*!************************************!*\
  !*** ./src/assets/icons/close.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Photoshop2021x64\\Github Repo\\Eternal\\src\\assets\\icons\\close.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
const CloseIcon = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx("path", {
    d: "M6.572,4.87a1.2,1.2,0,0,0-1.7,1.7l6.947,6.947L4.87,20.465a1.2,1.2,0,1,0,1.7,1.7l6.946-6.946,6.946,6.946a1.2,1.2,0,0,0,1.7-1.7l-6.946-6.946,6.947-6.947a1.2,1.2,0,0,0-1.7-1.7l-6.946,6.947Z",
    transform: "translate(-4.518 -4.518)",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (CloseIcon);

/***/ }),

/***/ "./src/assets/icons/empty-svg.tsx":
/*!****************************************!*\
  !*** ./src/assets/icons/empty-svg.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Photoshop2021x64\\Github Repo\\Eternal\\src\\assets\\icons\\empty-svg.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
const EmptyCartSVG = ({
  color = 'currentColor',
  width = '166px',
  height = '210px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 165.759 210",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx("g", {
    "data-name": "empty cart",
    transform: "translate(-758 -414.992)",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, __jsx("g", {
    "data-name": "\xD1\xEB\xEE\xE9 2",
    transform: "translate(758 414.992)",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, __jsx("path", {
    "data-name": "Path 17149",
    d: "M761.008,613.9c-1.364,1.011-2.6,2.226-2.5,4.164.2,4.121,7.278,5.11,10.172,5.5,5.125.7,10.26.592,15.411.787q28.06,1.062,56.146.4,14.415-.321,28.818-1.047c8.434-.422,17.828.119,25.819-3.139a111.905,111.905,0,0,0,13.9-7c3.722-2.162,8.549-4.225,10.755-8.268,3.867-7.087-9.685-8.487-13.414-9.266-14.662-3.064-29.782-3.609-44.7-4.064a335.848,335.848,0,0,0-45.508,1.419c-18.947,2-39.206,8.411-54.681,20.353Z",
    transform: "translate(-758.001 -415.008)",
    fill: "#f7f7f7",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }), __jsx("g", {
    "data-name": "Group 3794",
    transform: "translate(1.474 98.965)",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }, __jsx("rect", {
    "data-name": "Rectangle 949",
    width: "108.56",
    height: "74.415",
    transform: "translate(40.615 18.313)",
    fill: "#f7f7f7",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }), __jsx("g", {
    "data-name": "Group 3788",
    transform: "translate(39.959)",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, __jsx("path", {
    "data-name": "Path 17150",
    d: "M908.654,532.279H800.094l14.369-16.609a3.511,3.511,0,0,1,2.656-1.214H922.08a.911.911,0,0,1,.689,1.507Z",
    transform: "translate(-799.438 -513.966)",
    fill: "#fff",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 15
    }
  }), __jsx("g", {
    "data-name": "Group 3787",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 15
    }
  }, __jsx("path", {
    "data-name": "Path 17151",
    d: "M908.708,531.8H801.8a5.278,5.278,0,0,0-1.464,0,.674.674,0,0,1-.19,0l.482.671,10.592-12.244c1.252-1.447,2.447-2.983,3.774-4.363.969-1.008,2.018-.936,3.235-.936H918.744a20.618,20.618,0,0,1,2.9,0c1.323.2.1,1.4-.409,1.99L909.116,530.93l-1,1.154c-.53.612.687.837,1.074.39L920.1,519.867l2.515-2.908c.418-.483,1.057-1.033,1.02-1.726-.069-1.33-1.418-1.255-2.375-1.255H819.609c-.775,0-1.556-.027-2.331,0-1.957.068-3.073,1.172-4.249,2.531l-12.393,14.327-1.081,1.249c-.338.391.118.671.482.671H904.164c1.4,0,2.852.117,4.246,0,.062-.005.127,0,.19,0C909.337,532.755,909.576,531.8,908.708,531.8Z",
    transform: "translate(-799.438 -513.966)",
    fill: "#262626",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  }))), __jsx("g", {
    "data-name": "Group 3791",
    transform: "translate(13.509 18.066)",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, __jsx("path", {
    "data-name": "Path 17152",
    d: "M800.252,532.281l-26.669,10.382v74.415l26.669-10Z",
    transform: "translate(-772.985 -532.034)",
    fill: "#f7f7f7",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 15
    }
  }), __jsx("g", {
    "data-name": "Group 3789",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 15
    }
  }, __jsx("path", {
    "data-name": "Path 17153",
    d: "M800.025,532.111,776.684,541.2l-3.328,1.3c-.843.328-.054.537.455.339l23.341-9.086,3.328-1.3C801.323,532.122,800.534,531.913,800.025,532.111Z",
    transform: "translate(-772.985 -532.034)",
    fill: "#262626",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  })), __jsx("g", {
    "data-name": "Group 3790",
    transform: "translate(26.627 3.446)",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 15
    }
  }, __jsx("path", {
    "data-name": "Path 17154",
    d: "M800.894,606.906V535.649c0-.347-1.279-.122-1.279.343v71.261c0,.347,1.279.122,1.279-.343Z",
    transform: "translate(-799.615 -535.48)",
    fill: "#262626",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 17
    }
  }))), __jsx("g", {
    "data-name": "Group 3793",
    transform: "translate(0 3.679)",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }
  }, __jsx("path", {
    "data-name": "Path 17155",
    d: "M800.251,532.28l-26.669,10.382L760.8,530.215a2.334,2.334,0,0,1,.809-3.857l21.859-8.2a2.335,2.335,0,0,1,2.425.492Z",
    transform: "translate(-759.475 -517.645)",
    fill: "#f2f2f2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 15
    }
  }), __jsx("path", {
    "data-name": "Path 17156",
    d: "M799.562,532.548l-25.98,10.113-10.859-10.774a2.334,2.334,0,0,1,.809-3.857l7.559-2.806c3.7-1.372,8.163-4.186,12.24-3.315C786.254,522.536,799.253,532.269,799.562,532.548Z",
    transform: "translate(-759.475 -517.645)",
    fill: "#fff",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 15
    }
  }), __jsx("g", {
    "data-name": "Group 3792",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 15
    }
  }, __jsx("path", {
    "data-name": "Path 17157",
    d: "M799.98,531.95l-23.341,9.086-3.328,1.3.859.061-9.8-9.54-2.283-2.223a3.945,3.945,0,0,1-1.288-1.683c-.587-2.18,2.286-2.714,3.741-3.259l15.545-5.827c1.193-.447,3.433-1.818,4.737-1.229a5.393,5.393,0,0,1,1.356,1.125l2.241,2.126,11.242,10.666c.378.359,1.588-.148,1.178-.537l-10.58-10.044c-1.251-1.187-2.457-2.471-3.777-3.583-1.631-1.374-3.324-.543-5.023.094l-16.38,6.141a27.105,27.105,0,0,0-4.192,1.623,2.715,2.715,0,0,0-.792,4.111,16.218,16.218,0,0,0,1.166,1.151l11.73,11.422a.8.8,0,0,0,.859.061l23.341-9.086,3.328-1.3C801.343,532.288,800.609,531.7,799.98,531.95Z",
    transform: "translate(-759.475 -517.645)",
    fill: "#262626",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 17
    }
  })))), __jsx("g", {
    "data-name": "Group 3807",
    transform: "translate(0 116.823)",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 11
    }
  }, __jsx("rect", {
    "data-name": "Rectangle 950",
    width: "108.897",
    height: "74.415",
    transform: "translate(15.083 10.837)",
    fill: "#f2f2f2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 13
    }
  }), __jsx("path", {
    "data-name": "Path 17158",
    d: "M881.982,544.206c-3.493,5.207-7.517,12.211-10.018,16.683a8.58,8.58,0,0,1-7.472,4.394l-91.407.2v51.6h108.9Z",
    transform: "translate(-758.002 -531.827)",
    fill: "#fff",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 13
    }
  }), __jsx("g", {
    "data-name": "Group 3796",
    transform: "translate(123.342 0.455)",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 13
    }
  }, __jsx("path", {
    "data-name": "Path 17159",
    d: "M908.662,532.281l-26.669,10.382v74.415l26.669-10Z",
    transform: "translate(-881.353 -532.281)",
    fill: "#f7f7f7",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 15
    }
  }), __jsx("path", {
    "data-name": "Path 17160",
    d: "M908.661,556.952l-8.856,3.555a7.255,7.255,0,0,1-8.5-2.373l-9.311-12.386V617.08l26.669-10Z",
    transform: "translate(-881.353 -532.282)",
    fill: "#f2f2f2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 15
    }
  }), __jsx("g", {
    "data-name": "Group 3795",
    transform: "translate(0 13.265)",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 15
    }
  }, __jsx("path", {
    "data-name": "Path 17161",
    d: "M881.353,546.016v68.459c0,.274,1.279.073,1.279-.343V545.673C882.632,545.4,881.353,545.6,881.353,546.016Z",
    transform: "translate(-881.353 -545.547)",
    fill: "#262626",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 17
    }
  }))), __jsx("g", {
    "data-name": "Group 3797",
    transform: "translate(14.477 0.182)",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 13
    }
  }, __jsx("path", {
    "data-name": "Path 17162",
    d: "M772.824,542.976H876.462c1.713,0,3.525.169,5.233,0a11.657,11.657,0,0,0,2.831-1l7.747-3.016,15.615-6.078,1-.391c.838-.326.062-.622-.475-.413l-11.987,4.667c-4.76,1.853-9.666,3.5-14.334,5.58-.633.281.058.015.083.03-.111-.065-.458,0-.584,0H793.8c-6.707,0-13.448-.2-20.153,0h-.3c-.417,0-1.378.625-.524.625Z",
    transform: "translate(-772.478 -532.008)",
    fill: "#262626",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 15
    }
  })), __jsx("g", {
    "data-name": "Group 3798",
    transform: "translate(14.435 23.11)",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 13
    }
  }, __jsx("path", {
    "data-name": "Path 17163",
    d: "M908,555.459v51.672l.364-.428-12.1,4.537c-4.744,1.779-9.611,3.373-14.276,5.352-.551.234.137.041-.037.018a4.837,4.837,0,0,0-.614,0H775.758a13.137,13.137,0,0,0-2.313,0,1.664,1.664,0,0,1-.3,0l.592.423V562.661c0-.671-1.3-.483-1.3.1v54.371c0,.332.309.423.592.423H876.545a40.671,40.671,0,0,0,5.341,0,13.265,13.265,0,0,0,2.64-.938l7.654-2.87,15.743-5.9,1.015-.38a.573.573,0,0,0,.364-.428V555.364c0-.671-1.3-.483-1.3.1Z",
    transform: "translate(-772.437 -554.938)",
    fill: "#262626",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 15
    }
  })), __jsx("g", {
    "data-name": "Group 3800",
    transform: "translate(0 10.396)",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 13
    }
  }, __jsx("path", {
    "data-name": "Path 17164",
    d: "M881.982,542.667h-108.9l-14.358,16.6a.742.742,0,0,0,.561,1.227H866.224a.742.742,0,0,0,.561-.257Z",
    transform: "translate(-758.001 -542.222)",
    fill: "#f2f2f2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 15
    }
  }), __jsx("path", {
    "data-name": "Path 17165",
    d: "M881.983,542.667H774.159c-1.659,3.206-3.253,6.454-5.006,9.61-1.077,1.94-1.284,5.1,1.864,5.1h92.468a6.948,6.948,0,0,0,4.741-1.869Z",
    transform: "translate(-758.001 -542.222)",
    fill: "#fff",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 15
    }
  }), __jsx("g", {
    "data-name": "Group 3799",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 15
    }
  }, __jsx("path", {
    "data-name": "Path 17166",
    d: "M882.217,542.251h-108.2a2.158,2.158,0,0,0-1.476.287,9.406,9.406,0,0,0-1.062,1.228l-2.241,2.592L758.574,558.69c-.759.878-.95,2.1.592,2.217.59.043,1.2,0,1.792,0H864.379c.519,0,1.049.033,1.567,0,1.256-.079,1.829-1.063,2.586-1.938l11.2-12.949,2.775-3.208c.512-.592-.718-.676-1.048-.294l-10.629,12.29c-1.489,1.721-2.928,3.507-4.476,5.174-.2.221.307.036-.113.1a6.843,6.843,0,0,1-.928,0H762.949a21.42,21.42,0,0,1-2.977,0c-.109-.016-.351.057-.447,0-.827-.484.428-1.478.71-1.8l12.293-14.214,1.08-1.248-.759.267H868.3c4.4,0,8.868.243,13.26,0h.19C882.294,543.079,883.079,542.251,882.217,542.251Z",
    transform: "translate(-758 -542.222)",
    fill: "#262626",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 17
    }
  }))), __jsx("g", {
    "data-name": "Group 3802",
    transform: "translate(123.35)",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 13
    }
  }, __jsx("path", {
    "data-name": "Path 17167",
    d: "M908.662,532.281l-26.669,10.381,14.889,14.388a1.167,1.167,0,0,0,1.221.253l24.273-9.1a1.167,1.167,0,0,0,.684-1.5,1.18,1.18,0,0,0-.272-.42Z",
    transform: "translate(-881.362 -531.826)",
    fill: "#f2f2f2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 15
    }
  }), __jsx("path", {
    "data-name": "Path 17168",
    d: "M907.794,532.619l-25.478,10.173,13.4,13.531a1.017,1.017,0,0,0,1.1.239l10.049-3.939,6.08-2.384c1.986-.779,4.765-1.719,4.523-4.4a5.448,5.448,0,0,0-1.742-3.06C914.813,541.813,908.239,533.081,907.794,532.619Z",
    transform: "translate(-881.362 -531.826)",
    fill: "#fff",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 15
    }
  }), __jsx("g", {
    "data-name": "Group 3801",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 15
    }
  }, __jsx("path", {
    "data-name": "Path 17169",
    d: "M908.373,531.881l-23.341,9.086-3.328,1.3a.463.463,0,0,0-.2.781l11,10.63a47.359,47.359,0,0,0,3.887,3.756c1.3.992,3.307-.216,4.622-.708l17.433-6.535a43.4,43.4,0,0,0,4.219-1.582c2.541-1.272.065-3.245-1.062-4.363L909.245,532c-.429-.425-1.635.112-1.167.576l10.239,10.149,2.716,2.692a7.653,7.653,0,0,1,1.158,1.146c.931,1.506-2.4,2.107-3.312,2.449l-16.75,6.279-2.972,1.114a4.614,4.614,0,0,1-1.323.5c-.43-.023-.932-.679-1.211-.948l-2.327-2.249-11.816-11.423-.2.781,23.341-9.086,3.328-1.3C909.763,532.361,909.05,531.618,908.373,531.881Z",
    transform: "translate(-881.362 -531.826)",
    fill: "#262626",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 17
    }
  }))), __jsx("g", {
    "data-name": "Group 3806",
    transform: "translate(115.627 29.87)",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 13
    }
  }, __jsx("g", {
    "data-name": "Group 3803",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 15
    }
  }, __jsx("path", {
    "data-name": "Path 17170",
    d: "M873.638,562.232v12.643c0,.691,1.3.519,1.3-.086V562.146C874.938,561.455,873.638,561.627,873.638,562.232Z",
    transform: "translate(-873.638 -561.698)",
    fill: "#262626",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 17
    }
  })), __jsx("g", {
    "data-name": "Group 3804",
    transform: "translate(0.01 15.423)",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 15
    }
  }, __jsx("path", {
    "data-name": "Path 17171",
    d: "M873.648,577.582v1.99c0,.536,1.279.268,1.279-.157v-1.994c0-.536-1.279-.268-1.279.158Z",
    transform: "translate(-873.648 -577.122)",
    fill: "#262626",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 17
    }
  })), __jsx("g", {
    "data-name": "Group 3805",
    transform: "translate(0.003 19.662)",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 15
    }
  }, __jsx("path", {
    "data-name": "Path 17172",
    d: "M873.641,581.874v5.193c0,.649,1.293.445,1.293-.107v-5.194C874.934,581.117,873.641,581.322,873.641,581.874Z",
    transform: "translate(-873.641 -581.362)",
    fill: "#262626",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 17
    }
  })))), __jsx("g", {
    "data-name": "Group 3816",
    transform: "translate(129.022 172.653)",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 11
    }
  }, __jsx("g", {
    "data-name": "Group 3815",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 13
    }
  }, __jsx("g", {
    "data-name": "Group 3808",
    transform: "translate(0.061 8.841)",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 15
    }
  }, __jsx("path", {
    "data-name": "Path 17173",
    d: "M887.8,601.133l11.545-3.729c.768-.248.553-1.109-.23-.856l-11.544,3.724c-.768.248-.554,1.109.229.857Z",
    transform: "translate(-887.095 -596.502)",
    fill: "#e6e6e6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 17
    }
  })), __jsx("g", {
    "data-name": "Group 3809",
    transform: "translate(0.079 4.4)",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 15
    }
  }, __jsx("path", {
    "data-name": "Path 17174",
    d: "M887.779,596.556l11.49-3.763c.748-.245.587-.929-.181-.677l-11.49,3.763C886.85,596.124,887.011,596.807,887.779,596.556Z",
    transform: "translate(-887.113 -592.061)",
    fill: "#e6e6e6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 17
    }
  })), __jsx("g", {
    "data-name": "Group 3810",
    transform: "translate(0.088)",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 15
    }
  }, __jsx("path", {
    "data-name": "Path 17175",
    d: "M887.768,592.116l11.438-3.8c.738-.245.6-.847-.159-.595l-11.438,3.8C886.871,591.766,887.009,592.368,887.768,592.116Z",
    transform: "translate(-887.122 -587.661)",
    fill: "#e6e6e6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 17
    }
  })), __jsx("g", {
    "data-name": "Group 3814",
    transform: "translate(0 12.368)",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 15
    }
  }, __jsx("g", {
    "data-name": "Group 3811",
    transform: "translate(0 2.779)",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 17
    }
  }, __jsx("path", {
    "data-name": "Path 17176",
    d: "M887.814,604.6l2.549-.814c.264-.084.6-.319.513-.643-.082-.307-.5-.384-.766-.3l-2.549.814c-.264.084-.6.318-.513.643C887.13,604.6,887.548,604.682,887.814,604.6Z",
    transform: "translate(-887.034 -602.809)",
    fill: "#e6e6e6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 19
    }
  })), __jsx("g", {
    "data-name": "Group 3812",
    transform: "translate(4.484 1.5)",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 17
    }
  }, __jsx("path", {
    "data-name": "Path 17177",
    d: "M892.241,602.984l2.572-.822c.166-.053.631-.2.562-.459s-.566-.164-.716-.116l-2.572.822c-.166.053-.631.2-.562.458s.565.164.716.116Z",
    transform: "translate(-891.518 -601.53)",
    fill: "#e6e6e6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 19
    }
  })), __jsx("g", {
    "data-name": "Group 3813",
    transform: "translate(8.996)",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 17
    }
  }, __jsx("path", {
    "data-name": "Path 17178",
    d: "M896.774,601.6l2.6-.829c.2-.064.622-.238.545-.522s-.542-.24-.733-.179l-2.6.829c-.2.064-.622.237-.546.522s.542.24.733.179Z",
    transform: "translate(-896.031 -600.03)",
    fill: "#e6e6e6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 19
    }
  }))))), __jsx("g", {
    "data-name": "Group 3818",
    transform: "translate(54.145 165.556)",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 11
    }
  }, __jsx("g", {
    "data-name": "Group 3817",
    transform: "translate(0 10.266)",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 13
    }
  }, __jsx("path", {
    "data-name": "Path 17179",
    d: "M813.36,598.282c3.4-3.962,9.024-6.258,14.142-6.472a21.9,21.9,0,0,1,11.223,2.587,20.11,20.11,0,0,1,3.959,2.77c.424.424,1.631-.11,1.168-.574a21.215,21.215,0,0,0-10.311-5.248A22.77,22.77,0,0,0,815.6,594.99a17.956,17.956,0,0,0-3.32,2.888c-.53.617.682.866,1.078.406Z",
    transform: "translate(-812.15 -590.829)",
    fill: "#262626",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 15
    }
  })), __jsx("path", {
    "data-name": "Path 17180",
    d: "M817.741,582.081a2.058,2.058,0,0,1-1.316,2.468,1.815,1.815,0,0,1-2.187-1.344c-.01-.041-.018-.082-.025-.124a2.058,2.058,0,0,1,1.316-2.468,1.815,1.815,0,0,1,2.187,1.344C817.726,582,817.734,582.039,817.741,582.081Z",
    transform: "translate(-812.15 -580.563)",
    fill: "#262626",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 13
    }
  }), __jsx("ellipse", {
    "data-name": "Ellipse 105",
    cx: "1.82",
    cy: "2.03",
    rx: "1.82",
    ry: "2.03",
    transform: "translate(27.194 0.674)",
    fill: "#262626",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 13
    }
  })), __jsx("g", {
    "data-name": "Group 3819",
    transform: "translate(36.623)",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 11
    }
  }, __jsx("path", {
    "data-name": "Path 17181",
    d: "M852.783,535.425c-5.86.7-12.166,1.474-17.745-.961-4.633-2.022-8.486-6.274-8.188-11.589.31-5.523,4.333-9.844,9.206-12a28.738,28.738,0,0,1,17.277-1.465c2.725.562,6.01,1.367,8.284,3.062,1.9,1.418,2.654,3.946.812,5.721a11.746,11.746,0,0,1-5.116,2.376c-1.843.506-3.714.978-5.6,1.3-9.6,1.67-20.5.084-28.031-6.515a18,18,0,0,1-6.352-13.145c-.016-5.151,2.893-9.841,6.8-13.019,7.819-6.359,18.692-8.17,28.488-8.215a89.692,89.692,0,0,1,14.461,1.162,27.467,27.467,0,0,1,7.559,1.913c2.377,1.132,4.79,3.5,4.158,6.38-.6,2.726-3.741,3.59-6.074,4.269a39.208,39.208,0,0,1-9.258,1.421,106.994,106.994,0,0,1-17.708-.908,95.443,95.443,0,0,1-16.359-3.342,35.589,35.589,0,0,1-10.945-5.19,17.785,17.785,0,0,1-6.667-9.423,21.317,21.317,0,0,1,.751-13.232c3.206-8.232,11.282-13.313,19.257-16.188a86.13,86.13,0,0,1,34.219-4.559,89.853,89.853,0,0,1,17.407,2.853,73.024,73.024,0,0,1,8.568,2.8c2.328.935,4.7,2,5.883,4.359,2.287,4.544-2.242,8.848-5.857,10.89-3.967,2.24-8.6,3.562-12.986,4.726a87.8,87.8,0,0,1-17.927,2.465c-5.75.3-11.522.509-17.281.416-11.091-.178-22.467-1.582-32.5-6.6-8.715-4.359-17.3-13.24-15.119-23.857,1.029-5.011,4.77-9.35,8.619-12.511a45.257,45.257,0,0,1,13.5-7.35c9.986-3.6,20.737-4.848,31.278-5.467a152.386,152.386,0,0,1,35.151,1.891,154.547,154.547,0,0,1,17.342,4.078c.361.107,1.511-.443,1.026-.587a155.349,155.349,0,0,0-74.177-3.462c-10.463,2.169-21.408,6.038-28.756,14.17-3.6,3.99-6.054,8.865-5.471,14.35a22.211,22.211,0,0,0,7.2,13.675c8.57,7.982,21.147,10.9,32.475,11.9a153.7,153.7,0,0,0,18.3.349,159.28,159.28,0,0,0,19.467-1.427,81.223,81.223,0,0,0,15.819-4.243c4.12-1.536,8.488-3.737,10.759-7.693a6.227,6.227,0,0,0,.246-6.356c-1.259-2.226-3.472-3.28-5.742-4.2a82.585,82.585,0,0,0-18.1-4.888,91.588,91.588,0,0,0-37.7,1.937c-8.957,2.375-18.449,6.388-23.855,14.327-5.058,7.429-5.356,18.257,1.033,25.009a28.549,28.549,0,0,0,11.087,6.737,82.551,82.551,0,0,0,15.727,3.809A118.8,118.8,0,0,0,861,496.857a48.333,48.333,0,0,0,9.035-.876,23.407,23.407,0,0,0,7.707-2.64,4.725,4.725,0,0,0,2.3-5.177c-.61-2.492-2.9-4.125-5.163-5.029a34.958,34.958,0,0,0-7.782-1.755q-3.861-.583-7.759-.855c-10.36-.718-21.315.217-30.7,4.994-4.564,2.324-8.737,5.623-11.021,10.31a15.921,15.921,0,0,0,.8,15.053c5.328,9.2,17.076,12.6,27.1,12.263,3.573-.118,23.491-2.145,18.636-9.733-1.466-2.291-4.691-3.195-7.146-3.919a34.493,34.493,0,0,0-8.423-1.406c-5.48-.209-11.329.9-15.988,3.909-4.272,2.758-7.47,7.491-6.99,12.75.477,5.22,4.824,9.055,9.516,10.743,5.591,2.011,11.716,1.275,17.477.583.595-.071,1.083-.754.191-.647Z",
    transform: "translate(-794.627 -414.992)",
    fill: "#262626",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 13
    }
  })))));
};
/* harmony default export */ __webpack_exports__["default"] = (EmptyCartSVG);

/***/ }),

/***/ "./src/assets/icons/logo.tsx":
/*!***********************************!*\
  !*** ./src/assets/icons/logo.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Photoshop2021x64\\Github Repo\\Eternal\\src\\assets\\icons\\logo.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], t.indexOf(o) >= 0 || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.indexOf(n) >= 0) continue; t[n] = r[n]; } return t; }
const PlusIcon = _ref => {
  let {
      id
    } = _ref,
    props = _objectWithoutProperties(_ref, ["id"]);
  return __jsx("svg", _extends({
    height: "31"
  }, props, {
    viewBox: "0 0 762 381",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 1
    }
  }), __jsx("path", {
    fillRule: "evenodd",
    "clip-rule": "evenodd",
    d: "M761.091 187.439C760.51 156.919 753.287 128.08 738.823 101.199C718.916 64.187 689.975 36.439 652.052 18.342C615.609 0.957033 577.266 -3.65595 537.552 2.75405C508.344 7.46705 482.144 19.141 458.678 37.107C437.959 52.982 421.041 72.371 405.78 93.378C404.805 94.738 405.23 95.569 405.898 96.718C415.012 112.355 424.113 128.017 433.209 143.674C433.796 144.666 434.396 145.646 435.169 146.976C435.956 145.759 436.599 144.797 437.217 143.824C448.092 126.52 459.927 109.965 474.361 95.388C484.948 84.695 496.69 75.512 510.092 68.57C526.859 59.875 544.726 55.604 563.534 54.656C589.352 53.364 613.661 58.7071 636.178 71.3101C687.847 100.201 714.597 155.79 704.502 214.089C697.859 252.493 677.591 282.444 645.279 304.094C625.703 317.216 603.947 324.388 580.388 326.017C559.732 327.441 539.705 324.837 520.529 316.834C497.382 307.171 479.491 290.884 463.846 271.808C447.055 251.332 433.608 228.647 420.66 205.65C404.117 176.31 387.981 146.727 370.946 117.668C358.792 96.93 344.397 77.653 327.742 60.187C297.59 28.556 261.596 7.93702 217.824 1.94402C194.795 -1.21498 171.897 -0.614962 149.187 4.41604C109.584 13.18 75.9942 32.569 48.7952 62.596C20.0552 94.321 3.96824 131.763 0.135237 174.424C-0.313763 179.437 0.379237 210.581 1.85824 220.314C5.52824 244.291 13.6812 266.757 26.1982 287.563C46.1612 320.787 73.6032 345.944 108.636 362.542C145.736 380.127 184.633 384.747 225.003 377.636C257.264 371.974 285.274 357.592 309.845 336.231C327.13 321.199 341.626 303.719 354.791 285.055C355.69 283.775 355.821 282.912 354.991 281.483C345.577 265.265 336.263 249.01 326.912 232.754C326.518 232.067 326.082 231.418 325.52 230.507C324.378 232.318 323.379 233.928 322.38 235.526C310.095 255.284 296.749 274.211 279.725 290.286C259.836 309.113 236.721 321.349 209.329 325.031C190.482 327.578 171.886 326.63 153.571 321.485C81.0642 301.123 38.3722 226.063 58.8602 154.162C71.0332 111.495 98.1442 81.555 138.995 64.357C158.953 55.936 179.94 53.232 201.539 54.893C221.865 56.454 240.81 62.159 258.189 72.872C278.303 85.276 293.922 102.311 307.805 121.108C323.561 142.439 336.514 165.486 349.299 188.671C365.917 218.803 381.692 249.423 400.918 278.051C415.631 299.949 431.999 320.438 452.188 337.642C483.957 364.722 520.731 379.017 562.393 380.678C593.943 381.939 624.056 375.996 652.553 362.363C684.365 347.137 710.066 324.77 729.561 295.399C748.788 266.428 759.013 234.448 760.923 199.757C761.072 196.921 761.11 188.319 761.091 187.439Z",
    fill: "black",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 1
    }
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (PlusIcon);

/***/ }),

/***/ "./src/assets/icons/minus-icon.tsx":
/*!*****************************************!*\
  !*** ./src/assets/icons/minus-icon.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Photoshop2021x64\\Github Repo\\Eternal\\src\\assets\\icons\\minus-icon.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
const MinusIcon = ({
  color = 'currentColor',
  width = '12px',
  height = '2px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 12 1.5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx("rect", {
    "data-name": "Rectangle 970",
    width: width,
    height: height,
    fill: color,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (MinusIcon);

/***/ }),

/***/ "./src/assets/icons/not-found.tsx":
/*!****************************************!*\
  !*** ./src/assets/icons/not-found.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Photoshop2021x64\\Github Repo\\Eternal\\src\\assets\\icons\\not-found.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const NotFound = props => {
  return __jsx("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "180",
    height: "309.722",
    viewBox: "0 0 180 309.722"
  }, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 5
    }
  }), __jsx("g", {
    "data-name": "no cart in bag",
    transform: "translate(-988 -7673)",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx("g", {
    "data-name": "no cart",
    transform: "translate(988 7673)",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx("g", {
    "data-name": "Group 5970",
    transform: "translate(0 0)",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }
  }, __jsx("g", {
    "data-name": "Group 5967",
    transform: "translate(17.408 92.119)",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, __jsx("path", {
    "data-name": "Path 17743",
    d: "M405.506,794.581l63.621-36.762L418.2,724.274Z",
    transform: "translate(-323.428 -576.978)",
    fill: "#ba8064",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 15
    }
  }), __jsx("path", {
    "data-name": "Path 17744",
    d: "M135.711,140.727l32.918-.12,1.287-20.225,79.451,45.843-34.42,1.084v19.165Z",
    transform: "translate(-118.988 -119.373)",
    fill: "#dba480",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 15
    }
  }), __jsx("path", {
    "data-name": "Path 17745",
    d: "M314.4,206.341,272,124.761l-2.279,22.008,1.4,59.572Z",
    transform: "translate(-220.537 -122.691)",
    fill: "#460100",
    opacity: "0.1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 15
    }
  }), __jsx("path", {
    "data-name": "Path 17746",
    d: "M141.237,253.056l-10.26-47.388,34.59-.126v37.243Z",
    transform: "translate(-115.402 -183.904)",
    fill: "#995b47",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 15
    }
  }), __jsx("path", {
    "data-name": "Path 17747",
    d: "M511.029,445.295l-49.136-22.179L460.8,385.489l1.089-72.515,35.954-1.133Z",
    transform: "translate(-365.33 -264.454)",
    fill: "#a96e56",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 15
    }
  }), __jsx("path", {
    "data-name": "Path 17748",
    d: "M148.755,398.756l9.58-70.307,4.9-79.149L81.161,201.911,66.677,351.368Z",
    transform: "translate(-66.677 -181.153)",
    fill: "#dba480",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 15
    }
  }), __jsx("path", {
    "data-name": "Path 17749",
    d: "M349.459,429.379c-.415,1.942-2.182,2.6-3.948,1.46a5.753,5.753,0,0,1-2.446-5.572c.414-1.942,2.182-2.6,3.948-1.46A5.753,5.753,0,0,1,349.459,429.379Z",
    transform: "translate(-276.046 -348.874)",
    fill: "#67251d",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 15
    }
  }), __jsx("path", {
    "data-name": "Path 17750",
    d: "M209.819,348.753c-.415,1.942-2.182,2.6-3.948,1.46a5.753,5.753,0,0,1-2.446-5.572c.415-1.942,2.182-2.6,3.948-1.46A5.753,5.753,0,0,1,209.819,348.753Z",
    transform: "translate(-170.233 -287.779)",
    fill: "#67251d",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 15
    }
  }), __jsx("g", {
    "data-name": "Group 5965",
    transform: "translate(31.503 60.166)",
    opacity: "0.2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 15
    }
  }, __jsx("path", {
    "data-name": "Path 17751",
    d: "M219.35,441.507a16.861,16.861,0,0,1-8.439-2.272A28.35,28.35,0,0,1,196.858,412l4.383-45.226a2.414,2.414,0,0,1,4.806.467l-4.383,45.226a23.483,23.483,0,0,0,11.608,22.554,12.055,12.055,0,0,0,18.081-9.247l3.819-39.41a2.414,2.414,0,0,1,4.806.467l-3.819,39.41a16.912,16.912,0,0,1-16.809,15.266Z",
    transform: "translate(-196.727 -364.591)",
    fill: "#460100",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 17
    }
  })), __jsx("path", {
    "data-name": "Path 17752",
    d: "M162.373,116.218,161.06,136.85l-34.59.126,82.078,47.388V164.738l35.954-1.132Zm44.968,47.351v18.7l-76.395-44.106,31.247-.113,1.261-19.819,76.774,44.3Z",
    transform: "translate(-111.986 -116.218)",
    fill: "#fcc89d",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 15
    }
  }), __jsx("g", {
    "data-name": "Group 5966",
    transform: "translate(29.24 57.45)",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 15
    }
  }, __jsx("path", {
    "data-name": "Path 17753",
    d: "M210.007,430.3a16.864,16.864,0,0,1-8.438-2.271,28.35,28.35,0,0,1-14.054-27.235l4.383-45.226a2.414,2.414,0,0,1,4.806.467l-4.383,45.226a23.483,23.483,0,0,0,11.608,22.554,12.055,12.055,0,0,0,18.081-9.247l3.819-39.41a2.414,2.414,0,0,1,4.806.467l-3.819,39.41A16.912,16.912,0,0,1,210.007,430.3Z",
    transform: "translate(-187.384 -353.38)",
    fill: "#995b47",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 17
    }
  })), __jsx("path", {
    "data-name": "Path 17754",
    d: "M405.506,546.991,419.99,488.05V397.534Z",
    transform: "translate(-323.428 -329.388)",
    fill: "#995b47",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 15
    }
  })), __jsx("g", {
    "data-name": "Group 5968",
    transform: "translate(0 0)",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 13
    }
  }, __jsx("path", {
    "data-name": "Path 17755",
    d: "M394.573,120.6c-.142-.5.244-.855.5-1.088a1.4,1.4,0,0,0,.271-.293,0,0,0,0,0,0,0,1.39,1.39,0,0,0-.384-.107c-.34-.065-.853-.162-1-.665s.244-.855.5-1.088a1.39,1.39,0,0,0,.271-.293,0,0,0,0,0,0,0,1.4,1.4,0,0,0-.384-.107c-.34-.064-.853-.162-1-.664s.244-.855.5-1.088l.009-.008a.9.9,0,0,0,.259-.482.391.391,0,0,1,.276-.292.41.41,0,0,1,.5.316,1.122,1.122,0,0,1-.51,1.046,1.4,1.4,0,0,0-.271.292,0,0,0,0,0,0,0,1.4,1.4,0,0,0,.384.107c.34.065.853.162,1,.665s-.244.855-.5,1.088a1.4,1.4,0,0,0-.271.293,0,0,0,0,0,0,0,1.391,1.391,0,0,0,.384.107c.34.065.853.162,1,.665s-.244.855-.5,1.088a1.257,1.257,0,0,0-.273.3,0,0,0,0,0,0,0,1.641,1.641,0,0,0,.387.1c.331.063.826.157.983.625a.416.416,0,0,1-.21.507.392.392,0,0,1-.456-.109.789.789,0,0,0-.464-.253h0C395.229,121.2,394.716,121.1,394.573,120.6Z",
    transform: "translate(-349.075 -37.518)",
    fill: "#212121",
    opacity: "0.3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 15
    }
  }), __jsx("path", {
    "data-name": "Path 17765",
    d: "M395.468,120.6c.142-.5-.244-.855-.5-1.088a1.4,1.4,0,0,1-.271-.293,0,0,0,0,1,0,0,1.39,1.39,0,0,1,.384-.107c.34-.065.853-.162,1-.665s-.244-.855-.5-1.088a1.389,1.389,0,0,1-.271-.293,0,0,0,0,1,0,0,1.4,1.4,0,0,1,.384-.107c.34-.064.853-.162,1-.664s-.244-.855-.5-1.088l-.009-.008a.9.9,0,0,1-.259-.482.391.391,0,0,0-.276-.292.41.41,0,0,0-.5.316,1.122,1.122,0,0,0,.51,1.046,1.4,1.4,0,0,1,.271.292,0,0,0,0,1,0,0,1.4,1.4,0,0,1-.384.107c-.34.065-.853.162-1,.664s.244.855.5,1.088a1.4,1.4,0,0,1,.271.293,0,0,0,0,1,0,0,1.39,1.39,0,0,1-.384.107c-.34.065-.853.162-1,.665s.244.855.5,1.088a1.257,1.257,0,0,1,.273.3,0,0,0,0,1,0,0,1.641,1.641,0,0,1-.387.1c-.331.063-.826.157-.983.625a.416.416,0,0,0,.21.507.392.392,0,0,0,.456-.109.789.789,0,0,1,.464-.253h0C394.812,121.2,395.326,121.1,395.468,120.6Z",
    transform: "translate(-262.76 -23.736)",
    fill: "#212121",
    opacity: "0.3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 15
    }
  }), __jsx("path", {
    "data-name": "Path 17756",
    d: "M375.447,179.277a2.539,2.539,0,1,1,3.346,1.3A2.542,2.542,0,0,1,375.447,179.277Zm3.737-1.643a1.543,1.543,0,1,0-.791,2.034A1.545,1.545,0,0,0,379.184,177.634Z",
    transform: "translate(-375.232 -52.408)",
    fill: "#212121",
    opacity: "0.3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 15
    }
  }), __jsx("path", {
    "data-name": "Path 17764",
    d: "M375.447,179.277a2.539,2.539,0,1,1,3.346,1.3A2.542,2.542,0,0,1,375.447,179.277Zm3.737-1.643a1.543,1.543,0,1,0-.791,2.034A1.545,1.545,0,0,0,379.184,177.634Z",
    transform: "translate(-333.888 -175.716)",
    fill: "#212121",
    opacity: "0.3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 15
    }
  }), __jsx("path", {
    "data-name": "Path 17757",
    d: "M350.086,264.8a1.852,1.852,0,0,1-2.682-2.547l-.868-.823a3.047,3.047,0,0,0,4.417,4.194Z",
    transform: "translate(-253.642 -206.302)",
    fill: "#212121",
    opacity: "0.3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 15
    }
  }), __jsx("path", {
    "data-name": "Path 17766",
    d: "M346.628,264.8a1.852,1.852,0,0,0,2.682-2.547l.867-.823a3.047,3.047,0,0,1-4.417,4.194Z",
    transform: "translate(-170.953 -110.557)",
    fill: "#212121",
    opacity: "0.15",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 15
    }
  }), __jsx("path", {
    "data-name": "Union 11",
    d: "M2.059,6.97l.989-3.048L0,2.933.283,2.06l3.049.989L4.321,0,5.2.284l-.99,3.048,3.047.989L6.97,5.2l-3.048-.99-.99,3.049Z",
    transform: "translate(6.528 48.598)",
    fill: "#212121",
    stroke: "rgba(0,0,0,0)",
    strokeMiterlimit: "10",
    strokeWidth: "1",
    opacity: "0.3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 15
    }
  }), __jsx("path", {
    "data-name": "Union 13",
    d: "M2.059,6.97l.989-3.048L0,2.933.283,2.06l3.049.989L4.321,0,5.2.284l-.99,3.048,3.047.989L6.97,5.2l-3.048-.99-.99,3.049Z",
    transform: "translate(94.294 121.132)",
    fill: "#212121",
    stroke: "rgba(0,0,0,0)",
    strokeMiterlimit: "10",
    strokeWidth: "1",
    opacity: "0.3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 15
    }
  }), __jsx("path", {
    "data-name": "Union 12",
    d: "M1.235,4.182l.593-1.829L0,1.759l.17-.524L2,1.829,2.592,0l.525.17L2.523,2l1.828.594-.17.523L2.353,2.523,1.759,4.352Z",
    transform: "translate(107.351 6.528)",
    fill: "#212121",
    stroke: "rgba(0,0,0,0)",
    strokeMiterlimit: "10",
    strokeWidth: "1",
    opacity: "0.3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 15
    }
  }))))));
};
/* harmony default export */ __webpack_exports__["default"] = (NotFound);

/***/ }),

/***/ "./src/assets/icons/phone.tsx":
/*!************************************!*\
  !*** ./src/assets/icons/phone.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Photoshop2021x64\\Github Repo\\Eternal\\src\\assets\\icons\\phone.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CloseIcon = props => {
  return __jsx("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "20.182",
    height: "20.851",
    viewBox: "0 0 20.182 20.851"
  }, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 5
    }
  }), __jsx("g", {
    "data-name": "contact icon",
    transform: "translate(-305.636 -1009.888)",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx("g", {
    "data-name": "Group 5517",
    transform: "translate(306.036 1013.959)",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx("path", {
    "data-name": "Path 17350",
    d: "M318.825,1107.377a12.789,12.789,0,0,1-12.789-12.789,3.584,3.584,0,0,1,5.564-3,.359.359,0,0,1,.156.243l.748,4.718a.359.359,0,0,1-.074.28,3.592,3.592,0,0,1-1.142.943,8.206,8.206,0,0,0,4.352,4.353,3.592,3.592,0,0,1,.942-1.142.36.36,0,0,1,.28-.074l4.718.748a.359.359,0,0,1,.243.156,3.547,3.547,0,0,1,.592,1.973A3.6,3.6,0,0,1,318.825,1107.377Zm-9.2-15.661a2.876,2.876,0,0,0-2.873,2.873,12.084,12.084,0,0,0,12.071,12.071,2.867,2.867,0,0,0,2.482-4.318l-4.395-.7a2.856,2.856,0,0,0-.755,1.073.359.359,0,0,1-.459.2,8.914,8.914,0,0,1-5.206-5.206.359.359,0,0,1,.2-.459,2.855,2.855,0,0,0,1.073-.755l-.7-4.395a2.826,2.826,0,0,0-1.445-.391Z",
    transform: "translate(-306.036 -1090.997)",
    fill: "currentColor",
    stroke: "currentColor",
    strokeWidth: "0.8",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }
  })), __jsx("g", {
    "data-name": "Group 5521",
    transform: "translate(315.367 1010.339)",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, __jsx("g", {
    "data-name": "Group 5518",
    transform: "translate(0.107 6.633)",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }, __jsx("path", {
    "data-name": "Path 17351",
    d: "M519.471,1161.367l-.693-.19a1.858,1.858,0,0,0-2.285-2.284l-.19-.693a2.576,2.576,0,0,1,3.168,3.166Z",
    transform: "translate(-516.303 -1158.109)",
    fill: "currentColor",
    stroke: "currentColor",
    strokeWidth: "0.8",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  })), __jsx("g", {
    "data-name": "Group 5519",
    transform: "translate(0 3.245)",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, __jsx("path", {
    "data-name": "Path 17352",
    d: "M520.487,1089.388l-.693-.19a4.621,4.621,0,0,0-5.683-5.678l-.19-.693a5.339,5.339,0,0,1,6.566,6.561Z",
    transform: "translate(-513.921 -1082.637)",
    fill: "currentColor",
    stroke: "currentColor",
    strokeWidth: "0.8",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  })), __jsx("g", {
    "data-name": "Group 5520",
    transform: "translate(0.398 0)",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }, __jsx("path", {
    "data-name": "Path 17353",
    d: "M532.121,1019.936l-.693-.19a6.872,6.872,0,0,0-8.451-8.444l-.19-.693a7.59,7.59,0,0,1,9.334,9.327Z",
    transform: "translate(-522.787 -1010.339)",
    fill: "currentColor",
    stroke: "currentColor",
    strokeWidth: "0.8",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  })))));
};
/* harmony default export */ __webpack_exports__["default"] = (CloseIcon);

/***/ }),

/***/ "./src/assets/icons/plus-icon.tsx":
/*!****************************************!*\
  !*** ./src/assets/icons/plus-icon.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Photoshop2021x64\\Github Repo\\Eternal\\src\\assets\\icons\\plus-icon.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
const PlusIcon = ({
  color = 'currentColor',
  width = '12px',
  height = '12px'
}) => {
  return __jsx("svg", {
    "data-name": "plus (2)",
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 12 12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx("g", {
    "data-name": "Group 5367",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, __jsx("path", {
    "data-name": "Path 17138",
    d: "M6.749,5.251V0h-1.5V5.251H0v1.5H5.251V12h1.5V6.749H12v-1.5Z",
    fill: color,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (PlusIcon);

/***/ }),

/***/ "./src/assets/icons/search-icon.tsx":
/*!******************************************!*\
  !*** ./src/assets/icons/search-icon.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Photoshop2021x64\\Github Repo\\Eternal\\src\\assets\\icons\\search-icon.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
const SearchIcon = ({
  color = 'currentColor',
  width = '14px',
  height = '14px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 14 14",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx("path", {
    d: "M14.771,12.752,11.32,9.286a5.519,5.519,0,0,0,1.374-3.634A5.763,5.763,0,0,0,6.839,0,5.763,5.763,0,0,0,.984,5.652,5.763,5.763,0,0,0,6.839,11.3a5.936,5.936,0,0,0,3.354-1.023l3.477,3.492a.783.783,0,0,0,1.08.02A.72.72,0,0,0,14.771,12.752ZM6.839,1.475a4.259,4.259,0,0,1,4.327,4.178A4.259,4.259,0,0,1,6.839,9.83,4.259,4.259,0,0,1,2.511,5.652,4.259,4.259,0,0,1,6.839,1.475Z",
    transform: "translate(-0.984)",
    fill: color,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (SearchIcon);

/***/ }),

/***/ "./src/assets/icons/social-icons.tsx":
/*!*******************************************!*\
  !*** ./src/assets/icons/social-icons.tsx ***!
  \*******************************************/
/*! exports provided: Facebook, Twitter, Youtube, Github, Instagram, Linkedin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Facebook", function() { return Facebook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Twitter", function() { return Twitter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Youtube", function() { return Youtube; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Github", function() { return Github; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Instagram", function() { return Instagram; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Linkedin", function() { return Linkedin; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Photoshop2021x64\\Github Repo\\Eternal\\src\\assets\\icons\\social-icons.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
const Facebook = ({
  color = 'currentColor',
  width = '15px',
  height = '15px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 15 15",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx("path", {
    "data-name": "Path 1079",
    d: "M77.227,64H64.773a.773.773,0,0,0-.773.773V77.227a.773.773,0,0,0,.773.773H71V72.458H69.327V70.417H71V68.907a2.66,2.66,0,0,1,2.869-2.793c.773,0,1.6.058,1.8.084v1.889H74.38c-.879,0-1.046.416-1.046,1.028v1.3h2.093l-.273,2.042H73.333V78h3.894A.773.773,0,0,0,78,77.227V64.773A.773.773,0,0,0,77.227,64Z",
    transform: "translate(-63.5 -63.5)",
    fill: color,
    stroke: "rgba(0,0,0,0)",
    strokeMiterlimit: "10",
    strokeWidth: "1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }));
};
const Twitter = ({
  color = 'currentColor',
  width = '21px',
  height = '16px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 20.64 15.339",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  }, __jsx("path", {
    "data-name": "Path 1080",
    d: "M37.3,65.659a7.136,7.136,0,0,1-2.027.558,3.542,3.542,0,0,0,1.553-1.954,7.014,7.014,0,0,1-2.242.857,3.529,3.529,0,0,0-6.107,2.414,3.456,3.456,0,0,0,.091.806A10,10,0,0,1,21.3,64.645a3.537,3.537,0,0,0,1.1,4.718,3.448,3.448,0,0,1-1.6-.441v.044a3.533,3.533,0,0,0,2.833,3.464,3.553,3.553,0,0,1-.93.124,3.33,3.33,0,0,1-.664-.066,3.535,3.535,0,0,0,3.3,2.454,7.077,7.077,0,0,1-4.386,1.513A7.153,7.153,0,0,1,20.1,76.4,9.866,9.866,0,0,0,25.5,78,9.983,9.983,0,0,0,35.555,67.945c0-.153,0-.306-.011-.456A7.185,7.185,0,0,0,37.3,65.659Z",
    transform: "translate(-18.034 -63.161)",
    fill: color,
    stroke: "rgba(0,0,0,0)",
    strokeMiterlimit: "10",
    strokeWidth: "1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }));
};
const Youtube = ({
  color = 'currentColor',
  width = '19px',
  height = '14px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18.664 14",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 5
    }
  }, __jsx("path", {
    "data-name": "logo-youtube (1)",
    d: "M18.538,67.091a2.834,2.834,0,0,0-2.7-2.96C13.82,64.036,11.76,64,9.655,64H9c-2.1,0-4.163.036-6.183.131A2.84,2.84,0,0,0,.122,67.1c-.091,1.3-.13,2.6-.128,3.893s.038,2.6.124,3.9a2.844,2.844,0,0,0,2.694,2.971c2.122.1,4.3.142,6.511.139s4.387-.039,6.511-.139a2.844,2.844,0,0,0,2.7-2.971c.087-1.3.128-2.6.124-3.9S18.625,68.392,18.538,67.091Zm-11,7.477V67.4l5.286,3.58Z",
    transform: "translate(0.006 -64)",
    fill: color,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }
  }));
};
const Github = ({
  color = 'currentColor',
  width = '14px',
  height = '14px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 14 14",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 5
    }
  }, __jsx("path", {
    d: "M39,32a7.092,7.092,0,0,0-7,7.178,7.164,7.164,0,0,0,4.787,6.809.549.549,0,0,0,.119.012.339.339,0,0,0,.359-.356c0-.172-.006-.622-.009-1.222a3.2,3.2,0,0,1-.706.084A1.626,1.626,0,0,1,34.9,43.459a1.9,1.9,0,0,0-.778-1.05c-.609-.428,0-.441.044-.441h0a1.5,1.5,0,0,1,1.072.744,1.374,1.374,0,0,0,1.237.784,1.969,1.969,0,0,0,.8-.187,1.551,1.551,0,0,1,.444-.959c-1.553-.181-3.187-.8-3.187-3.547a2.809,2.809,0,0,1,.719-1.925,2.642,2.642,0,0,1,.069-1.9.583.583,0,0,1,.156-.016,3.328,3.328,0,0,1,1.769.753,6.507,6.507,0,0,1,3.506,0,3.328,3.328,0,0,1,1.769-.753.583.583,0,0,1,.156.016,2.642,2.642,0,0,1,.069,1.9,2.821,2.821,0,0,1,.719,1.925c0,2.756-1.638,3.362-3.2,3.541a1.74,1.74,0,0,1,.475,1.328c0,.959-.009,1.734-.009,1.969a.337.337,0,0,0,.356.359.6.6,0,0,0,.125-.012A7.2,7.2,0,0,0,39,32Z",
    transform: "translate(-32 -32)",
    fill: color,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }
  }));
};
const Instagram = ({
  color = 'currentColor',
  width = '14px',
  height = '14px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 14 14",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 5
    }
  }, __jsx("path", {
    "data-name": "Path 1083",
    d: "M41.917,33.167a2.926,2.926,0,0,1,2.917,2.917v5.833a2.926,2.926,0,0,1-2.917,2.917H36.083a2.926,2.926,0,0,1-2.917-2.917V36.083a2.926,2.926,0,0,1,2.917-2.917h5.833m0-1.167H36.083A4.1,4.1,0,0,0,32,36.083v5.833A4.1,4.1,0,0,0,36.083,46h5.833A4.1,4.1,0,0,0,46,41.917V36.083A4.1,4.1,0,0,0,41.917,32Z",
    transform: "translate(-32 -32)",
    fill: color,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 7
    }
  }), __jsx("path", {
    "data-name": "Path 1084",
    d: "M350.2,108.42a.873.873,0,1,1,.619-.256A.875.875,0,0,1,350.2,108.42Z",
    transform: "translate(-339.413 -104.337)",
    fill: color,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 7
    }
  }), __jsx("path", {
    "data-name": "Path 1085",
    d: "M147.5,145.167a2.333,2.333,0,1,1-2.333,2.333,2.333,2.333,0,0,1,2.333-2.333m0-1.167a3.5,3.5,0,1,0,3.5,3.5A3.5,3.5,0,0,0,147.5,144Z",
    transform: "translate(-140.5 -140.5)",
    fill: color,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 7
    }
  }));
};
const Linkedin = ({
  color = 'currentColor',
  width = '14px',
  height = '14px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 14 14",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 5
    }
  }, __jsx("path", {
    d: "M44.88,32H33.2A1.142,1.142,0,0,0,32,33.09V44.8A1.232,1.232,0,0,0,33.2,46H44.877A1.169,1.169,0,0,0,46,44.8V33.09A1.073,1.073,0,0,0,44.88,32ZM36.34,43.67H34.334V37.434H36.34Zm-.933-7.184h-.014a1.09,1.09,0,1,1,.014,0ZM43.67,43.67H41.664V40.26c0-.817-.292-1.375-1.017-1.375a1.1,1.1,0,0,0-1.028.74,1.351,1.351,0,0,0-.069.493V43.67H37.543V37.434h2.006V38.3a2.031,2.031,0,0,1,1.809-1.014c1.317,0,2.312.868,2.312,2.739Z",
    transform: "translate(-32 -32)",
    fill: color,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 7
    }
  }));
};

/***/ }),

/***/ "./src/assets/icons/success-tick.tsx":
/*!*******************************************!*\
  !*** ./src/assets/icons/success-tick.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Photoshop2021x64\\Github Repo\\Eternal\\src\\assets\\icons\\success-tick.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SuccessIcon = props => {
  return __jsx("svg", _extends({
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    x: "0px",
    y: "0px",
    width: "20px",
    height: "100%",
    viewBox: "0 0 408.576 408.576"
  }, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 5
    }
  }), __jsx("g", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, __jsx("g", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, __jsx("path", {
    d: "M204.288,0C91.648,0,0,91.648,0,204.288s91.648,204.288,204.288,204.288s204.288-91.648,204.288-204.288 S316.928,0,204.288,0z M318.464,150.528l-130.56,129.536c-7.68,7.68-19.968,8.192-28.16,0.512L90.624,217.6 c-8.192-7.68-8.704-20.48-1.536-28.672c7.68-8.192,20.48-8.704,28.672-1.024l54.784,50.176L289.28,121.344 c8.192-8.192,20.992-8.192,29.184,0C326.656,129.536,326.656,142.336,318.464,150.528z",
    fill: "currentColor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }))), __jsx("g", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }), __jsx("g", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }), __jsx("g", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }), __jsx("g", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }), __jsx("g", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }), __jsx("g", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }), __jsx("g", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }), __jsx("g", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }), __jsx("g", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }), __jsx("g", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }), __jsx("g", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }), __jsx("g", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }), __jsx("g", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }), __jsx("g", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }), __jsx("g", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (SuccessIcon);

/***/ }),

/***/ "./src/assets/icons/trash.tsx":
/*!************************************!*\
  !*** ./src/assets/icons/trash.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Photoshop2021x64\\Github Repo\\Eternal\\src\\assets\\icons\\trash.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
const TrashIcon = ({
  color = 'currentColor',
  width = '12px',
  height = '12px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 11.344 12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx("g", {
    transform: "translate(-13.989)",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, __jsx("g", {
    "data-name": "Group 5372",
    transform: "translate(15.399 2.327)",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, __jsx("g", {
    "data-name": "Group 5371",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }, __jsx("path", {
    "data-name": "Path 17142",
    d: "M81.683,99.28l-.016,8.526a.166.166,0,0,1-.164.164h-6.2a.166.166,0,0,1-.164-.165l-.016-8.525-.984,0,.016,8.524a1.149,1.149,0,0,0,1.148,1.148h6.2a1.149,1.149,0,0,0,1.148-1.147l.016-8.525Z",
    transform: "translate(-74.142 -99.28)",
    fill: color,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }))), __jsx("g", {
    "data-name": "Group 5374",
    transform: "translate(13.989 1.836)",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, __jsx("g", {
    "data-name": "Group 5373",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }, __jsx("path", {
    "data-name": "Path 17143",
    d: "M24.841,78.339H14.481a.492.492,0,0,0,0,.984H24.841a.492.492,0,1,0,0-.984Z",
    transform: "translate(-13.989 -78.339)",
    fill: color,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }))), __jsx("g", {
    "data-name": "Group 5376",
    transform: "translate(17.514)",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, __jsx("g", {
    "data-name": "Group 5375",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, __jsx("path", {
    "data-name": "Path 17144",
    d: "M167.846,0h-2.656a.821.821,0,0,0-.82.82V2.328h.984V.984h2.328V2.328h.984V.82A.821.821,0,0,0,167.846,0Z",
    transform: "translate(-164.371)",
    fill: color,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }))), __jsx("g", {
    "data-name": "Group 5378",
    transform: "translate(18.005 4.393)",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, __jsx("g", {
    "data-name": "Group 5377",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }, __jsx("path", {
    "data-name": "Path 17145",
    d: "M185.847,187.454a.492.492,0,0,0-.492.492v3.967a.492.492,0,1,0,.984,0v-3.967A.492.492,0,0,0,185.847,187.454Z",
    transform: "translate(-185.355 -187.454)",
    fill: color,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }))), __jsx("g", {
    "data-name": "Group 5380",
    transform: "translate(20.333 4.393)",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, __jsx("g", {
    "data-name": "Group 5379",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }, __jsx("path", {
    "data-name": "Path 17146",
    d: "M285.169,187.454a.492.492,0,0,0-.492.492v3.967a.492.492,0,1,0,.984,0v-3.967A.492.492,0,0,0,285.169,187.454Z",
    transform: "translate(-284.677 -187.454)",
    fill: color,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  })))));
};
/* harmony default export */ __webpack_exports__["default"] = (TrashIcon);

/***/ }),

/***/ "./src/assets/image/CTA-image.png":
/*!****************************************!*\
  !*** ./src/assets/image/CTA-image.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/CTA-image-936a8a9dbab1bcfc66f8643b2b2c78b8.png";

/***/ }),

/***/ "./src/assets/image/coupon-card.png":
/*!******************************************!*\
  !*** ./src/assets/image/coupon-card.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/coupon-card-68da624ba5ebdebb76e9ac50edc3a238.png";

/***/ }),

/***/ "./src/assets/image/custom-order.png":
/*!*******************************************!*\
  !*** ./src/assets/image/custom-order.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/custom-order-425fa4b0a9ae0d3bd06b812e162a0374.png";

/***/ }),

/***/ "./src/assets/image/fast-delivery.png":
/*!********************************************!*\
  !*** ./src/assets/image/fast-delivery.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/fast-delivery-d1a2ae4a96283c574f087b65dea16637.png";

/***/ }),

/***/ "./src/assets/image/female-care.png":
/*!******************************************!*\
  !*** ./src/assets/image/female-care.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/female-care-087fe8665fae569c7a754591918f6878.png";

/***/ }),

/***/ "./src/components/active-link.tsx":
/*!****************************************!*\
  !*** ./src/components/active-link.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Photoshop2021x64\\Github Repo\\Eternal\\src\\components\\active-link.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], t.indexOf(o) >= 0 || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.indexOf(n) >= 0) continue; t[n] = r[n]; } return t; }



const ActiveLink = _ref => {
  let {
      children,
      activeClassName,
      href
    } = _ref,
    props = _objectWithoutProperties(_ref, ["children", "activeClassName", "href"]);
  const {
    pathname
  } = Object(next_router__WEBPACK_IMPORTED_MODULE_0__["useRouter"])();
  const child = react__WEBPACK_IMPORTED_MODULE_2__["Children"].only(children);
  const childClassName = child.props.className || '';
  const className = pathname === href ? `${childClassName} ${activeClassName}`.trim() : childClassName;
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, _extends({
    href: href
  }, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.cloneElement(child, {
    className: className || null
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (ActiveLink);

/***/ }),

/***/ "./src/components/button.tsx":
/*!***********************************!*\
  !*** ./src/components/button.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/theme */ "./src/components/utils/theme.ts");
var _jsxFileName = "C:\\Photoshop2021x64\\Github Repo\\Eternal\\src\\components\\button.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], t.indexOf(o) >= 0 || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.indexOf(n) >= 0) continue; t[n] = r[n]; } return t; }


const defaultProps = {
  variant: 'primary',
  size: 'normal',
  type: 'button',
  loading: false,
  disabled: false
};
const Button = _ref => {
  let {
      className,
      loading,
      variant,
      size,
      type,
      children,
      disabled,
      onClick
    } = _ref,
    props = _objectWithoutProperties(_ref, ["className", "loading", "variant", "size", "type", "children", "disabled", "onClick"]);
  const classNames = _utils_theme__WEBPACK_IMPORTED_MODULE_1__["ButtonBase"] + ' ' + (disabled === true ? _utils_theme__WEBPACK_IMPORTED_MODULE_1__["ButtonDisable"] : _utils_theme__WEBPACK_IMPORTED_MODULE_1__["ButtonVariant"][variant]) + ' ' + _utils_theme__WEBPACK_IMPORTED_MODULE_1__["ButtonSize"][size] + ' ' + className;
  const onClickHandler = event => {
    if (disabled || loading) return;
    onClick && onClick(event);
  };
  return __jsx("button", _extends({
    onClick: onClickHandler,
    className: classNames,
    disabled: disabled,
    type: type,
    "aria-label": type
  }, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 5
    }
  }), !loading && children, loading && __jsx("div", {
    className: "h-5 w-5 border-3px border-gray-800 border-t-3px rounded-full animate-spin",
    style: {
      borderTopColor: '#f1f1f1'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }));
};
Button.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./src/components/carousel/carousel.tsx":
/*!**********************************************!*\
  !*** ./src/components/carousel/carousel.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-multi-carousel */ "react-multi-carousel");
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var assets_icons_chevron_left__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/icons/chevron-left */ "./src/assets/icons/chevron-left.tsx");
/* harmony import */ var assets_icons_chevron_right__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/icons/chevron-right */ "./src/assets/icons/chevron-right.tsx");
/* harmony import */ var components_utils_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/utils/theme */ "./src/components/utils/theme.ts");
var _jsxFileName = "C:\\Photoshop2021x64\\Github Repo\\Eternal\\src\\components\\carousel\\carousel.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], t.indexOf(o) >= 0 || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.indexOf(n) >= 0) continue; t[n] = r[n]; } return t; }





const PrevButton = ({
  onClick,
  children
}) => {
  return __jsx("button", {
    onClick: e => {
      e.preventDefault();
      onClick(e);
    },
    "aria-label": "prev-button",
    className: components_utils_theme__WEBPACK_IMPORTED_MODULE_4__["ArrowButtonBase"] + ' ' + components_utils_theme__WEBPACK_IMPORTED_MODULE_4__["PrevButtonRadius"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }, children);
};
const NextButton = ({
  onClick,
  children
}) => {
  return __jsx("button", {
    onClick: e => {
      e.preventDefault();
      onClick(e);
    },
    "aria-label": "next-button",
    className: components_utils_theme__WEBPACK_IMPORTED_MODULE_4__["ArrowButtonBase"] + ' ' + components_utils_theme__WEBPACK_IMPORTED_MODULE_4__["NextButtonRadius"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 5
    }
  }, children);
};
const ButtonGroup = ({
  next,
  previous
}) => {
  return __jsx("div", {
    className: components_utils_theme__WEBPACK_IMPORTED_MODULE_4__["ButtonGroupBase"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 5
    }
  }, __jsx(PrevButton, {
    onClick: () => previous(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }
  }, __jsx(assets_icons_chevron_left__WEBPACK_IMPORTED_MODULE_2__["default"], {
    height: "12px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  })), __jsx(NextButton, {
    onClick: () => next(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }
  }, __jsx(assets_icons_chevron_right__WEBPACK_IMPORTED_MODULE_3__["default"], {
    height: "12px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  })));
};
const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1280
    },
    items: 4
  },
  smallScreen: {
    breakpoint: {
      max: 1279,
      min: 851
    },
    items: 3
  },
  tablet: {
    breakpoint: {
      max: 850,
      min: 601
    },
    items: 2
  },
  mobile: {
    breakpoint: {
      max: 600,
      min: 0
    },
    items: 1
  }
};
const Carousel = _ref => {
  let {
      data,
      autoPlay,
      infinite,
      itemClass,
      className
    } = _ref,
    props = _objectWithoutProperties(_ref, ["data", "autoPlay", "infinite", "itemClass", "className"]);
  return __jsx(react_multi_carousel__WEBPACK_IMPORTED_MODULE_1___default.a, _extends({
    arrows: false,
    responsive: responsive,
    ssr: true,
    showDots: false,
    slidesToSlide: 1,
    infinite: infinite,
    containerClass: "carousel-container",
    itemClass: itemClass,
    autoPlay: autoPlay,
    autoPlaySpeed: 3000,
    renderButtonGroupOutside: true,
    additionalTransfrom: 0,
    customButtonGroup: __jsx(ButtonGroup, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 26
      }
    }),
    className: className
  }, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 5
    }
  }), data.map((item, index) => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    key: index,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 9
    }
  }, item && item.link ? __jsx("a", {
    href: item.link,
    className: components_utils_theme__WEBPACK_IMPORTED_MODULE_4__["CarouselItemBase"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "sr-only",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 15
    }
  }, item.title), __jsx("img", {
    src: item.image,
    className: components_utils_theme__WEBPACK_IMPORTED_MODULE_4__["CarouselItemImage"],
    alt: item.title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 15
    }
  })) : __jsx("div", {
    className: components_utils_theme__WEBPACK_IMPORTED_MODULE_4__["CarouselItemBase"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: item.image,
    className: components_utils_theme__WEBPACK_IMPORTED_MODULE_4__["CarouselItemImage"],
    alt: item.title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 15
    }
  })))));
};
const defaultProps = {
  autoPlay: false,
  infinite: true,
  className: ''
};
Carousel.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (Carousel);

/***/ }),

/***/ "./src/components/cart-item.tsx":
/*!**************************************!*\
  !*** ./src/components/cart-item.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _counter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./counter */ "./src/components/counter.tsx");
/* harmony import */ var helpers_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! helpers/constants */ "./src/helpers/constants.tsx");
/* harmony import */ var contexts_cart_cart_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! contexts/cart/cart.provider */ "./src/contexts/cart/cart.provider.tsx");
/* harmony import */ var _utils_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/theme */ "./src/components/utils/theme.ts");
var _jsxFileName = "C:\\Photoshop2021x64\\Github Repo\\Eternal\\src\\components\\cart-item.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const CartItem = ({
  item
}) => {
  const {
    addItem,
    removeItem
  } = Object(contexts_cart_cart_provider__WEBPACK_IMPORTED_MODULE_3__["useCart"])();
  return __jsx("div", {
    className: _utils_theme__WEBPACK_IMPORTED_MODULE_4__["CartItemBase"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _utils_theme__WEBPACK_IMPORTED_MODULE_4__["CartItemImage"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: item.image,
    alt: item.name,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: _utils_theme__WEBPACK_IMPORTED_MODULE_4__["CartItemContent"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: _utils_theme__WEBPACK_IMPORTED_MODULE_4__["CartItemName"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, item.name), __jsx("span", {
    className: _utils_theme__WEBPACK_IMPORTED_MODULE_4__["CartItemSinglePrice"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, "Unit Price \xA0", helpers_constants__WEBPACK_IMPORTED_MODULE_2__["CURRENCY"], item.price), __jsx("div", {
    className: _utils_theme__WEBPACK_IMPORTED_MODULE_4__["CartItemTotalWrapper"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, __jsx(_counter__WEBPACK_IMPORTED_MODULE_1__["default"], {
    value: item.quantity,
    onIncrement: () => addItem(item),
    onDecrement: () => removeItem(item),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }), __jsx("span", {
    className: _utils_theme__WEBPACK_IMPORTED_MODULE_4__["CartItemTotalPrice"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }, helpers_constants__WEBPACK_IMPORTED_MODULE_2__["CURRENCY"], (item.price * item.quantity).toFixed(2)))));
};
/* harmony default export */ __webpack_exports__["default"] = (CartItem);

/***/ }),

/***/ "./src/components/counter.tsx":
/*!************************************!*\
  !*** ./src/components/counter.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var assets_icons_plus_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/icons/plus-icon */ "./src/assets/icons/plus-icon.tsx");
/* harmony import */ var assets_icons_minus_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/icons/minus-icon */ "./src/assets/icons/minus-icon.tsx");
/* harmony import */ var assets_icons_trash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/icons/trash */ "./src/assets/icons/trash.tsx");
/* harmony import */ var _icon_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icon-button */ "./src/components/icon-button.tsx");
/* harmony import */ var _utils_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/theme */ "./src/components/utils/theme.ts");
var _jsxFileName = "C:\\Photoshop2021x64\\Github Repo\\Eternal\\src\\components\\counter.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Counter = ({
  onDecrement,
  onIncrement,
  value,
  size = 'normal',
  className = ''
}) => {
  const classNames = _utils_theme__WEBPACK_IMPORTED_MODULE_5__["CounterBase"] + ' ' + _utils_theme__WEBPACK_IMPORTED_MODULE_5__["CounterSize"][size] + ' ' + className;
  return __jsx("div", {
    className: classNames,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, __jsx(_icon_button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: onDecrement,
    className: `h-full ${size === 'big' ? 'w-60px' : 'w-35px'} text-white bg-gray-900 transition duration-300 hover:bg-gray-3a focus:outline-none`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, value > 1 ? __jsx(assets_icons_minus_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 22
    }
  }) : __jsx(assets_icons_trash__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 34
    }
  })), __jsx("span", {
    className: _utils_theme__WEBPACK_IMPORTED_MODULE_5__["CounterValue"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, value), __jsx(_icon_button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: onIncrement,
    className: `h-full ${size === 'big' ? 'w-60px' : 'w-35px'} text-white bg-gray-900 transition duration-300 hover:bg-gray-3a focus:outline-none`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, __jsx(assets_icons_plus_icon__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (Counter);

/***/ }),

/***/ "./src/components/cta-block.tsx":
/*!**************************************!*\
  !*** ./src/components/cta-block.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/theme */ "./src/components/utils/theme.ts");
var _jsxFileName = "C:\\Photoshop2021x64\\Github Repo\\Eternal\\src\\components\\cta-block.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const CallToAction = ({
  background,
  children,
  parentClassName = '',
  childClassName = ''
}) => {
  const classNames = _utils_theme__WEBPACK_IMPORTED_MODULE_1__["CTABase"] + ' ' + parentClassName + ' ' + 'cta-base';
  const contentClassNames = _utils_theme__WEBPACK_IMPORTED_MODULE_1__["CTAContent"] + ' ' + childClassName;
  return __jsx("div", {
    className: classNames,
    style: {
      backgroundImage: `url(${background})`
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "component-overlay",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: contentClassNames,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, children));
};
/* harmony default export */ __webpack_exports__["default"] = (CallToAction);

/***/ }),

/***/ "./src/components/feature-block.tsx":
/*!******************************************!*\
  !*** ./src/components/feature-block.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/theme */ "./src/components/utils/theme.ts");
var _jsxFileName = "C:\\Photoshop2021x64\\Github Repo\\Eternal\\src\\components\\feature-block.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const FeatureBLock = ({
  title,
  description,
  className,
  counterBg,
  counter
}) => {
  const classNames = _utils_theme__WEBPACK_IMPORTED_MODULE_1__["FeatureBase"] + ' ' + className;
  return __jsx("div", {
    className: classNames,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }, __jsx("span", {
    className: _utils_theme__WEBPACK_IMPORTED_MODULE_1__["FeatureCounter"],
    style: {
      backgroundColor: counterBg
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, counter), __jsx("div", {
    className: _utils_theme__WEBPACK_IMPORTED_MODULE_1__["FeatureContent"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, __jsx("h3", {
    className: _utils_theme__WEBPACK_IMPORTED_MODULE_1__["FeatureTitle"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, title), __jsx("p", {
    className: _utils_theme__WEBPACK_IMPORTED_MODULE_1__["FeatureDetails"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, description)));
};
/* harmony default export */ __webpack_exports__["default"] = (FeatureBLock);

/***/ }),

/***/ "./src/components/icon-button.tsx":
/*!****************************************!*\
  !*** ./src/components/icon-button.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/theme */ "./src/components/utils/theme.ts");
var _jsxFileName = "C:\\Photoshop2021x64\\Github Repo\\Eternal\\src\\components\\icon-button.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const defaultProps = {
  className: '',
  disabled: false
};
const IconButton = ({
  className,
  children,
  disabled,
  onClick
}) => {
  const classNames = _utils_theme__WEBPACK_IMPORTED_MODULE_1__["IconBtnBase"] + ' ' + className;
  const onClickHandler = event => {
    if (disabled) return;
    onClick && onClick(event);
  };
  return __jsx("button", {
    onClick: onClickHandler,
    className: classNames,
    disabled: disabled,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, children);
};
IconButton.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (IconButton);

/***/ }),

/***/ "./src/components/input.tsx":
/*!**********************************!*\
  !*** ./src/components/input.tsx ***!
  \**********************************/
/*! exports provided: defaultProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultProps", function() { return defaultProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_utils_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/utils/theme */ "./src/components/utils/theme.ts");
var _jsxFileName = "C:\\Photoshop2021x64\\Github Repo\\Eternal\\src\\components\\input.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], t.indexOf(o) >= 0 || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.indexOf(n) >= 0) continue; t[n] = r[n]; } return t; }


const defaultProps = {
  disabled: false,
  readOnly: false,
  className: '',
  placeholder: '',
  initialValue: ''
};
const Input = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef((_ref, ref) => {
  let {
      className,
      id,
      value,
      name,
      initialValue,
      disabled,
      readOnly,
      placeholder,
      onChange,
      onFocus,
      onBlur
    } = _ref,
    props = _objectWithoutProperties(_ref, ["className", "id", "value", "name", "initialValue", "disabled", "readOnly", "placeholder", "onChange", "onFocus", "onBlur"]);
  const inputRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useImperativeHandle"])(ref, () => inputRef.current);
  const {
    0: initValue,
    1: setInitValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialValue);
  const changeHandler = event => {
    if (disabled || readOnly) return;
    setInitValue(event.target.value);
    onChange && onChange(event);
  };
  const focusHandler = e => {
    onFocus && onFocus(e);
  };
  const blurHandler = e => {
    onBlur && onBlur(e);
  };
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (value === undefined) return;
    setInitValue(value);
  }, [value]);
  const classNames = components_utils_theme__WEBPACK_IMPORTED_MODULE_1__["InputBase"] + ' ' + components_utils_theme__WEBPACK_IMPORTED_MODULE_1__["TextBoxCommonBase"] + ' ' + (disabled === true ? components_utils_theme__WEBPACK_IMPORTED_MODULE_1__["TextBoxDisable"] : components_utils_theme__WEBPACK_IMPORTED_MODULE_1__["TextBoxEnable"]) + ' ' + className;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }
  }, __jsx("label", {
    htmlFor: id,
    className: "sr-only",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 9
    }
  }, name), __jsx("input", _extends({
    ref: inputRef,
    type: "text",
    placeholder: placeholder,
    className: classNames,
    id: name,
    value: initValue,
    disabled: disabled,
    readOnly: readOnly,
    onChange: changeHandler,
    onFocus: focusHandler,
    onBlur: blurHandler,
    autoComplete: "off",
    name: name
  }, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 9
    }
  })));
});
Input.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (Input);

/***/ }),

/***/ "./src/components/item-card.tsx":
/*!**************************************!*\
  !*** ./src/components/item-card.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var helpers_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! helpers/constants */ "./src/helpers/constants.tsx");
/* harmony import */ var _utils_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/theme */ "./src/components/utils/theme.ts");
var _jsxFileName = "C:\\Photoshop2021x64\\Github Repo\\Eternal\\src\\components\\item-card.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


// height uthay dite hobe

const ItemCard = ({
  item,
  onClick
}) => {
  return __jsx("div", {
    className: _utils_theme__WEBPACK_IMPORTED_MODULE_2__["ItemCardBase"],
    onClick: onClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _utils_theme__WEBPACK_IMPORTED_MODULE_2__["ItemCardImage"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, __jsx("img", {
    className: "object-cover",
    src: item.image,
    alt: ' Alt ' + item.name,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: _utils_theme__WEBPACK_IMPORTED_MODULE_2__["ItemCardContent"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: _utils_theme__WEBPACK_IMPORTED_MODULE_2__["ItemCardPrice"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, helpers_constants__WEBPACK_IMPORTED_MODULE_1__["CURRENCY"], item.price), __jsx("span", {
    className: "text-13px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, item.name)));
};
/* harmony default export */ __webpack_exports__["default"] = (ItemCard);

/***/ }),

/***/ "./src/components/scrollbar.tsx":
/*!**************************************!*\
  !*** ./src/components/scrollbar.tsx ***!
  \**************************************/
/*! exports provided: Scrollbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scrollbar", function() { return Scrollbar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var overlayscrollbars_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! overlayscrollbars-react */ "overlayscrollbars-react");
/* harmony import */ var overlayscrollbars_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(overlayscrollbars_react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Photoshop2021x64\\Github Repo\\Eternal\\src\\components\\scrollbar.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], t.indexOf(o) >= 0 || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.indexOf(n) >= 0) continue; t[n] = r[n]; } return t; }

const Scrollbar = _ref => {
  let {
      children,
      className,
      options
    } = _ref,
    props = _objectWithoutProperties(_ref, ["children", "className", "options"]);
  return __jsx(overlayscrollbars_react__WEBPACK_IMPORTED_MODULE_1__["OverlayScrollbarsComponent"], _extends({
    options: _objectSpread({
      className: `${className} os-theme-thin`,
      scrollbars: {
        autoHide: 'never',
        touchSupport: false
      }
    }, options)
  }, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }), children);
};

/***/ }),

/***/ "./src/components/search.tsx":
/*!***********************************!*\
  !*** ./src/components/search.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var assets_icons_search_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/icons/search-icon */ "./src/assets/icons/search-icon.tsx");
/* harmony import */ var contexts_search_use_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! contexts/search/use-search */ "./src/contexts/search/use-search.tsx");
/* harmony import */ var components_utils_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/utils/theme */ "./src/components/utils/theme.ts");
var _jsxFileName = "C:\\Photoshop2021x64\\Github Repo\\Eternal\\src\\components\\search.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], t.indexOf(o) >= 0 || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.indexOf(n) >= 0) continue; t[n] = r[n]; } return t; }




const Search = _ref => {
  let {
      className
    } = _ref,
    props = _objectWithoutProperties(_ref, ["className"]);
  const {
    searchTerm,
    setSearchTerm
  } = Object(contexts_search_use_search__WEBPACK_IMPORTED_MODULE_2__["useSearch"])();
  const onSearch = e => {
    e.preventDefault();
    const {
      value
    } = e.currentTarget;
    setSearchTerm(value);
  };
  const onSubmit = e => e.preventDefault();
  const classNames = components_utils_theme__WEBPACK_IMPORTED_MODULE_3__["SearchBase"] + ' ' + className;
  return __jsx("form", {
    noValidate: true,
    role: "search",
    className: classNames,
    onSubmit: onSubmit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, __jsx("span", {
    className: components_utils_theme__WEBPACK_IMPORTED_MODULE_3__["SearchIconWrapper"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, __jsx(assets_icons_search_icon__WEBPACK_IMPORTED_MODULE_1__["default"], {
    color: "#999999",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  })), __jsx("label", {
    htmlFor: props.id || 'search-normal',
    className: "sr-only",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, props.id || 'search-normal'), __jsx("input", _extends({
    type: "search",
    placeholder: "Search your medicine here",
    className: components_utils_theme__WEBPACK_IMPORTED_MODULE_3__["SearchInput"],
    value: searchTerm,
    onChange: onSearch,
    id: props.id || 'search-normal',
    autoComplete: "off"
  }, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ }),

/***/ "./src/components/textarea.tsx":
/*!*************************************!*\
  !*** ./src/components/textarea.tsx ***!
  \*************************************/
/*! exports provided: defaultProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultProps", function() { return defaultProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/theme */ "./src/components/utils/theme.ts");
var _jsxFileName = "C:\\Photoshop2021x64\\Github Repo\\Eternal\\src\\components\\textarea.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], t.indexOf(o) >= 0 || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.indexOf(n) >= 0) continue; t[n] = r[n]; } return t; }


const defaultProps = {
  disabled: false,
  readOnly: false,
  className: '',
  placeholder: '',
  initialValue: ''
};
const Textarea = _ref => {
  let {
      className,
      value,
      initialValue,
      disabled,
      readOnly,
      placeholder,
      onChange,
      onFocus,
      onBlur
    } = _ref,
    props = _objectWithoutProperties(_ref, ["className", "value", "initialValue", "disabled", "readOnly", "placeholder", "onChange", "onFocus", "onBlur"]);
  const {
    0: initValue,
    1: setInitValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialValue);
  const changeHandler = event => {
    if (disabled || readOnly) return;
    setInitValue(event.target.value);
    onChange && onChange(event);
  };
  const focusHandler = e => {
    onFocus && onFocus(e);
  };
  const blurHandler = e => {
    onBlur && onBlur(e);
  };
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (value === undefined) return;
    setInitValue(value);
  }, [value]);
  const classNames = _utils_theme__WEBPACK_IMPORTED_MODULE_1__["TextBoxCommonBase"] + ' ' + _utils_theme__WEBPACK_IMPORTED_MODULE_1__["TextareaBase"] + ' ' + (disabled === true ? _utils_theme__WEBPACK_IMPORTED_MODULE_1__["TextBoxDisable"] : _utils_theme__WEBPACK_IMPORTED_MODULE_1__["TextBoxEnable"]) + ' ' + className;
  return __jsx("textarea", _extends({
    placeholder: placeholder,
    className: classNames,
    value: initValue,
    disabled: disabled,
    readOnly: readOnly,
    onChange: changeHandler,
    onFocus: focusHandler,
    onBlur: blurHandler,
    autoComplete: "off"
  }, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 5
    }
  }));
};
Textarea.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (Textarea);

/***/ }),

/***/ "./src/components/utils/theme.ts":
/*!***************************************!*\
  !*** ./src/components/utils/theme.ts ***!
  \***************************************/
/*! exports provided: ButtonBase, ButtonVariant, ButtonDisable, ButtonSize, IconBtnBase, CounterBase, CounterValue, CounterSize, TextBoxCommonBase, TextBoxDisable, TextBoxEnable, InputBase, TextareaBase, CartItemBase, CartItemImage, CartItemContent, CartItemName, CartItemSinglePrice, CartItemTotalWrapper, CartItemTotalPrice, FeatureBase, FeatureCounter, FeatureContent, FeatureTitle, FeatureDetails, CTABase, CTAContent, ItemCardBase, ItemCardImage, ItemCardContent, ItemCardPrice, SearchBase, SearchIconWrapper, SearchInput, SectionTitleBase, SectionTitleHeading, SectionTitleSubTitle, SectionTitleBarBase, SectionTitleBar, SectionTitleBarHeading, SectionTitleBarSubTitle, ButtonGroupBase, ArrowButtonBase, PrevButtonRadius, NextButtonRadius, ActiveDotsBase, CarouselItemBase, CarouselItemImage, TestimonialPrevButtonRadius, TestimonialNextButtonRadius, TestimonialBase, QuoteBase, TestimonialReview, TestimonialReviewerBase, TestimonialItemImageBase, ReviewerName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonBase", function() { return ButtonBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonVariant", function() { return ButtonVariant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonDisable", function() { return ButtonDisable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonSize", function() { return ButtonSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconBtnBase", function() { return IconBtnBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterBase", function() { return CounterBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterValue", function() { return CounterValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterSize", function() { return CounterSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextBoxCommonBase", function() { return TextBoxCommonBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextBoxDisable", function() { return TextBoxDisable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextBoxEnable", function() { return TextBoxEnable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputBase", function() { return InputBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextareaBase", function() { return TextareaBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartItemBase", function() { return CartItemBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartItemImage", function() { return CartItemImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartItemContent", function() { return CartItemContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartItemName", function() { return CartItemName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartItemSinglePrice", function() { return CartItemSinglePrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartItemTotalWrapper", function() { return CartItemTotalWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartItemTotalPrice", function() { return CartItemTotalPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureBase", function() { return FeatureBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureCounter", function() { return FeatureCounter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureContent", function() { return FeatureContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureTitle", function() { return FeatureTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureDetails", function() { return FeatureDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CTABase", function() { return CTABase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CTAContent", function() { return CTAContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemCardBase", function() { return ItemCardBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemCardImage", function() { return ItemCardImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemCardContent", function() { return ItemCardContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemCardPrice", function() { return ItemCardPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBase", function() { return SearchBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchIconWrapper", function() { return SearchIconWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchInput", function() { return SearchInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionTitleBase", function() { return SectionTitleBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionTitleHeading", function() { return SectionTitleHeading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionTitleSubTitle", function() { return SectionTitleSubTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionTitleBarBase", function() { return SectionTitleBarBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionTitleBar", function() { return SectionTitleBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionTitleBarHeading", function() { return SectionTitleBarHeading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionTitleBarSubTitle", function() { return SectionTitleBarSubTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonGroupBase", function() { return ButtonGroupBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrowButtonBase", function() { return ArrowButtonBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrevButtonRadius", function() { return PrevButtonRadius; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NextButtonRadius", function() { return NextButtonRadius; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveDotsBase", function() { return ActiveDotsBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselItemBase", function() { return CarouselItemBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselItemImage", function() { return CarouselItemImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonialPrevButtonRadius", function() { return TestimonialPrevButtonRadius; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonialNextButtonRadius", function() { return TestimonialNextButtonRadius; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonialBase", function() { return TestimonialBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteBase", function() { return QuoteBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonialReview", function() { return TestimonialReview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonialReviewerBase", function() { return TestimonialReviewerBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonialItemImageBase", function() { return TestimonialItemImageBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewerName", function() { return ReviewerName; });
// Add all of your components design and variations here

// -------
// Button
// -------
const ButtonBase = 'flex items-center justify-center flex-shrink-0 font-normal w-auto uppercase rounded outline-none transition duration-250 ease-in-out focus:outline-none';
const ButtonVariant = {
  // primary: 'text-white bg-primary hover:bg-primary-hover',
  primary: 'text-white bg-gray-900 hover:bg-gray-900',
  secondary: 'text-white bg-gray-900 hover:bg-gray-900',
  elevation: 'text-white bg-gray-900 hover:bg-gray-900 shadow-upside'
};
const ButtonDisable = 'text-gray-500 bg-gray-300 cursor-not-allowed hover:bg-gray-300';
const ButtonSize = {
  big: 'h-12 px-30px',
  normal: 'h-11 px-30px',
  small: 'h-9 text-13px px-20px'
};

// ------------
// Icon Button
// ------------
const IconBtnBase = 'flex items-center justify-center outline-none transition-colors duration-250 ease-in-out';

// --------
// Counter
// --------
const CounterBase = 'group flex items-center justify-between flex-shrink-0 rounded overflow-hidden bg-gray-900 shadow-floatingUp';
const CounterValue = 'font-semibold text-13px text-white flex items-center justify-center h-full w-40px transition-colors duration-250 ease-in-out cursor-default';
const CounterSize = {
  big: 'h-12',
  normal: 'h-35px'
};

// -----------------
// Input & Textarea
// -----------------
const TextBoxCommonBase = 'w-full h-12 px-4 placeholder-gray-500 border border-transparent rounded outline-none transition duration-200';
const TextBoxDisable = 'text-gray-500 bg-gray-300 cursor-not-allowed hover:bg-gray-300 hover:border-transparent focus:border-transparent focus:placeholder-gray-500';
const TextBoxEnable = 'text-gray-900 bg-gray-f7 hover:border-gray-400 focus:border-black focus:placeholder-gray-900';
const InputBase = 'h-12 px-4';
const TextareaBase = 'h-120px p-4 resize-none';

// ----------
// Cart Item
// ----------
const CartItemBase = 'w-full h-auto flex justify-start items-center bg-white px-30px py-6 border-b border-gray-200 relative last:border-b-0';
const CartItemImage = 'flex w-105px h-105px rounded overflow-hidden bg-gray-200 mr-15px flex-shrink-0 items-center';
const CartItemContent = 'flex flex-col w-full px-15px';
const CartItemName = 'text-13px text-gray-900';
const CartItemSinglePrice = 'text-13px text-gray-500 mt-5px mb-10px';
const CartItemTotalWrapper = 'flex items-center justify-between';
const CartItemTotalPrice = 'font-semibold text-16px text-gray-900 flex-shrink-0 ml-2';

// --------
// Feature
// --------
const FeatureBase = 'feature-block flex w-full items-start flex-row';
const FeatureCounter = 'flex items-center justify-center w-70px h-70px rounded-full mr-20px bg-gray-300 flex-shrink-0 text-24px font-semibold';
const FeatureContent = 'flex flex-col items-start';
const FeatureTitle = 'w-full text-18px font-semibold text-gray-900 mt-0 mb-2';
const FeatureDetails = 'w-full leading-6 text-14px';

// ---------------
// Call To Action
// ---------------
const CTABase = 'w-full flex flex-col items-start px-30px py-45px bg-cover bg-center bg-no-repeat bg-gray-100 border border-gray-300 rounded overflow-hidden relative xxl:py-60px xxl:px-80px';
const CTAContent = 'flex flex-col items-center lg:items-start relative z-10 w-full lg:max-w-half';

// ----------
// Item Card .... Height uthay dite hobe image theke
// ----------
const ItemCardBase = 'w-full flex flex-col items-start cursor-pointer';
const ItemCardImage = 'flex justify-center items-center w-full rounded overflow-hidden';
const ItemCardContent = 'flex flex-col items-start mt-3';
const ItemCardPrice = 'font-semibold text-gray-900 mb-2 text-16px';

// ----------
// SearchBox
// ----------
const SearchBase = 'flex items-center justify-center w-full lg:max-w-screen-md rounded relative overflow-hidden';
const SearchIconWrapper = 'absolute top-0 left-0 flex items-center justify-center h-full w-50px';
const SearchInput = 'w-full h-12 pl-12 px-4 text-gray-900 placeholder-gray-500 bg-gray-f7 border-2 border-transparent rounded outline-none transition duration-200 hover:border-gray-400 focus:border-black focus:placeholder-gray-900';

// --------------
// Section Title
// --------------
const SectionTitleBase = 'flex flex-col items-center';
const SectionTitleHeading = 'flex justify-center text-21px font-semibold text-center mb-2 text-gray-900 xxl:text-24px xxl:mb-10px';
const SectionTitleSubTitle = 'flex justify-center text-left xxl:text-center';

// -----------------------
// Section Title with Bar
// -----------------------
const SectionTitleBarBase = 'flex flex-col items-start relative pl-8';
const SectionTitleBar = 'flex w-5px h-full bg-primary absolute top-0 left-0';
const SectionTitleBarHeading = 'flex justify-start text-21px font-semibold text-left mb-2 text-gray-900 xxl:text-24px xxl:font-semibold xxl:mb-3';
const SectionTitleBarSubTitle = 'flex justify-start text-left';

// ---------
// Carousel
// ---------
const ButtonGroupBase = 'flex items-center absolute top-half w-full';
const ArrowButtonBase = 'w-30px h-30px flex items-center justify-center rounded-full text-gray-00 bg-white shadow-navigation absolute transition duration-250 hover:bg-gray-900 hover:text-white focus:outline-none';
const PrevButtonRadius = 'left-0 ml-24px ';
const NextButtonRadius = 'right-0 mr-24px';
const ActiveDotsBase = 'w-6 bg-primary';
const CarouselItemBase = 'overflow-hidden w-full flex rounded overflow-hidden';
const CarouselItemImage = 'w-full h-full object-cover';

// ------------
// Testimonial
// ------------
const TestimonialPrevButtonRadius = 'left-0 ml-10px lg:ml-35px';
const TestimonialNextButtonRadius = 'right-0 mr-10px lg:mr-35px';
const TestimonialBase = 'w-full bg-white flex flex-col rounded border border-gray-300 p-40px lg:p-50px pt-30px';
const QuoteBase = 'text-gray-200 flex justify-center mb-30px';
const TestimonialReview = 'text-16px text-gray-700 font-normal text-center mb-30px leading-7';
const TestimonialReviewerBase = 'flex items-center justify-center';
const TestimonialItemImageBase = 'overflow-hidden w-40px h-40px mr-15px bg-gray-100 flex rounded-full overflow-hidden shadow-floatingUp';
const ReviewerName = 'text-16px text-gray-900 font-semibold text-center';

/***/ }),

/***/ "./src/containers/call-to-action.tsx":
/*!*******************************************!*\
  !*** ./src/containers/call-to-action.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CallToAction; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_cta_block__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/cta-block */ "./src/components/cta-block.tsx");
/* harmony import */ var components_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/button */ "./src/components/button.tsx");
/* harmony import */ var assets_icons_arrow_right__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/icons/arrow-right */ "./src/assets/icons/arrow-right.tsx");
/* harmony import */ var assets_image_CTA_image_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/image/CTA-image.png */ "./src/assets/image/CTA-image.png");
/* harmony import */ var assets_image_CTA_image_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_image_CTA_image_png__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Photoshop2021x64\\Github Repo\\Eternal\\src\\containers\\call-to-action.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function CallToAction() {
  return __jsx(components_cta_block__WEBPACK_IMPORTED_MODULE_1__["default"], {
    background: assets_image_CTA_image_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx("h3", {
    className: "font-normal text-white text-24px sm:text-36px mb-6 text-center lg:text-left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, "Fast, Free Shipping,", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }), __jsx("span", {
    className: "font-semibold",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, "Contactless Delivery.")), __jsx("p", {
    className: "text-white text-center lg:text-left mb-10",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, "Try it for now, risk free!"), __jsx(components_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    variant: "elevation",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: "mr-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, "Shop Now"), " ", __jsx(assets_icons_arrow_right__WEBPACK_IMPORTED_MODULE_3__["default"], {
    width: "13px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 48
    }
  })));
}

/***/ }),

/***/ "./src/containers/drawer/drawer.tsx":
/*!******************************************!*\
  !*** ./src/containers/drawer/drawer.tsx ***!
  \******************************************/
/*! exports provided: CartDrawer, Drawer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartDrawer", function() { return CartDrawer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Drawer", function() { return Drawer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var contexts_drawer_drawer_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! contexts/drawer/drawer.provider */ "./src/contexts/drawer/drawer.provider.tsx");
/* harmony import */ var _views_product_details__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/product-details */ "./src/containers/drawer/views/product-details.tsx");
/* harmony import */ var _views_cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/cart */ "./src/containers/drawer/views/cart.tsx");
/* harmony import */ var _views_checkout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/checkout */ "./src/containers/drawer/views/checkout.tsx");
/* harmony import */ var _views_menus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/menus */ "./src/containers/drawer/views/menus.tsx");
var _jsxFileName = "C:\\Photoshop2021x64\\Github Repo\\Eternal\\src\\containers\\drawer\\drawer.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const CartDrawer = () => {
  const {
    state,
    dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(contexts_drawer_drawer_provider__WEBPACK_IMPORTED_MODULE_1__["DrawerContext"]);
  const handleClose = () => dispatch({
    type: 'SLIDE_CART',
    payload: {
      open: false
    }
  });
  const drawerComponent = state => {
    if ((state === null || state === void 0 ? void 0 : state.showDetails) === true) {
      return __jsx(_views_product_details__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 14
        }
      });
    }
    if ((state === null || state === void 0 ? void 0 : state.showCart) === true) {
      return __jsx(_views_cart__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 14
        }
      });
    }
    if ((state === null || state === void 0 ? void 0 : state.showCheckout) === true) {
      return __jsx(_views_checkout__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 14
        }
      });
    }
    return __jsx(_views_cart__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 12
      }
    });
  };
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }, (state === null || state === void 0 ? void 0 : state.open) === true ? __jsx("div", {
    className: "overlay",
    role: "button",
    onClick: handleClose,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }) : '', __jsx("div", {
    className: `drawer drawer-cart ${(state === null || state === void 0 ? void 0 : state.open) === true ? 'open' : ''}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, drawerComponent(state)));
};
const Drawer = () => {
  const {
    state,
    dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(contexts_drawer_drawer_provider__WEBPACK_IMPORTED_MODULE_1__["DrawerContext"]);
  const handleClose = () => dispatch({
    type: 'OPEN_MENU',
    payload: {
      menu: false
    }
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 5
    }
  }, (state === null || state === void 0 ? void 0 : state.menu) === true ? __jsx("div", {
    className: "overlay overlay-menu",
    role: "button",
    onClick: handleClose,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }) : '', __jsx("div", {
    className: `drawer drawer-menu ${(state === null || state === void 0 ? void 0 : state.menu) === true ? 'open' : ''}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }
  }, __jsx(_views_menus__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }
  })));
};

/***/ }),

/***/ "./src/containers/drawer/views/cart.tsx":
/*!**********************************************!*\
  !*** ./src/containers/drawer/views/cart.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Cart; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_scrollbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/scrollbar */ "./src/components/scrollbar.tsx");
/* harmony import */ var contexts_cart_cart_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! contexts/cart/cart.provider */ "./src/contexts/cart/cart.provider.tsx");
/* harmony import */ var contexts_drawer_drawer_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! contexts/drawer/drawer.provider */ "./src/contexts/drawer/drawer.provider.tsx");
/* harmony import */ var components_cart_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/cart-item */ "./src/components/cart-item.tsx");
/* harmony import */ var components_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/button */ "./src/components/button.tsx");
/* harmony import */ var _no_item__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./no-item */ "./src/containers/drawer/views/no-item.tsx");
/* harmony import */ var assets_icons_arrow_left__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assets/icons/arrow-left */ "./src/assets/icons/arrow-left.tsx");
/* harmony import */ var helpers_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! helpers/constants */ "./src/helpers/constants.tsx");
var _jsxFileName = "C:\\Photoshop2021x64\\Github Repo\\Eternal\\src\\containers\\drawer\\views\\cart.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









function Cart() {
  const {
    dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(contexts_drawer_drawer_provider__WEBPACK_IMPORTED_MODULE_3__["DrawerContext"]);
  const {
    items,
    calculatePrice
  } = Object(contexts_cart_cart_provider__WEBPACK_IMPORTED_MODULE_2__["useCart"])();
  const showCheckout = () => {
    dispatch({
      type: 'TOGGLE_CHECKOUT_VIEW',
      payload: {
        showCheckout: true
      }
    });
  };
  const hideCart = () => {
    dispatch({
      type: 'SLIDE_CART',
      payload: {
        open: false
      }
    });
  };
  return __jsx("div", {
    className: "flex flex-col w-full h-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, items.length ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "w-full flex justify-center relative px-30px py-20px border-b border-gray-200",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, __jsx("button", {
    className: "w-auto h-10 flex items-center justify-center text-gray-500 absolute top-half -mt-20px left-30px transition duration-300 focus:outline-none hover:text-gray-900",
    onClick: hideCart,
    "aria-label": "close",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, __jsx(assets_icons_arrow_left__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 15
    }
  })), __jsx("h2", {
    className: "font-bold text-24px m-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, "Your Basket")), __jsx(components_scrollbar__WEBPACK_IMPORTED_MODULE_1__["Scrollbar"], {
    className: "cart-scrollbar flex-grow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }, items.map(item => __jsx(components_cart_item__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: item,
    key: item.id,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 15
    }
  })))) : __jsx(_no_item__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "flex flex-col p-30px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "flex items-center justify-between",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }, __jsx("span", {
    className: "font-semibold text-gray-900",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 11
    }
  }, "Subtotal \xA0", __jsx("span", {
    className: "font-normal text-gray-700 text-13px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }, "(Incl. VAT)")), __jsx("span", {
    className: "font-semibold text-18px text-gray-900",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 11
    }
  }, helpers_constants__WEBPACK_IMPORTED_MODULE_8__["CURRENCY"], calculatePrice())), __jsx(components_button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "big mt-20px",
    disabled: !items.length ? true : false,
    onClick: showCheckout,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }
  }, "Confirm")));
}

/***/ }),

/***/ "./src/containers/drawer/views/checkout.tsx":
/*!**************************************************!*\
  !*** ./src/containers/drawer/views/checkout.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Checkout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-number-format */ "react-number-format");
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_number_format__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var contexts_drawer_drawer_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! contexts/drawer/drawer.provider */ "./src/contexts/drawer/drawer.provider.tsx");
/* harmony import */ var components_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/scrollbar */ "./src/components/scrollbar.tsx");
/* harmony import */ var assets_icons_arrow_left__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/icons/arrow-left */ "./src/assets/icons/arrow-left.tsx");
/* harmony import */ var components_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/input */ "./src/components/input.tsx");
/* harmony import */ var components_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/button */ "./src/components/button.tsx");
/* harmony import */ var contexts_cart_cart_provider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! contexts/cart/cart.provider */ "./src/contexts/cart/cart.provider.tsx");
/* harmony import */ var components_textarea__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/textarea */ "./src/components/textarea.tsx");
/* harmony import */ var _order_submit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./order-submit */ "./src/containers/drawer/views/order-submit.tsx");
/* harmony import */ var components_utils_theme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/utils/theme */ "./src/components/utils/theme.ts");
var _jsxFileName = "C:\\Photoshop2021x64\\Github Repo\\Eternal\\src\\containers\\drawer\\views\\checkout.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }











const initialState = {
  phone_number: '',
  name: '',
  address: '',
  postal_code: '',
  suite: ''
};
function Checkout() {
  const {
    dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(contexts_drawer_drawer_provider__WEBPACK_IMPORTED_MODULE_2__["DrawerContext"]);
  const {
    0: formData,
    1: setFormData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialState);
  const {
    0: success,
    1: setSuccess
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: error,
    1: setError
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    items,
    calculatePrice,
    clearCart
  } = Object(contexts_cart_cart_provider__WEBPACK_IMPORTED_MODULE_7__["useCart"])();
  const hideCheckout = () => {
    dispatch({
      type: 'TOGGLE_CHECKOUT_VIEW',
      payload: {
        showCheckout: false
      }
    });
  };
  const submitOrder = async () => {
    const {
      name,
      address,
      postal_code,
      suite,
      phone_number
    } = formData;
    if (!phone_number.trim()) {
      setError({
        field: 'phone_number',
        message: 'Phone number is required'
      });
      return;
    }
    setLoading(true);
    const res = await fetch('/api/order', {
      method: 'POST',
      body: JSON.stringify({
        items: items.map(item => `${item.name} - ${item.quantity}`).toString(),
        address: `${name} ${address} ${postal_code} ${suite}`,
        phone_number: phone_number,
        email: 'email@email.com',
        bill_amount: calculatePrice()
      })
    });
    if (res.status === 200) {
      setSuccess(true);
      clearCart();
      setLoading(false);
    } else {
      setError(true);
    }
  };
  const onChange = e => {
    const {
      value,
      name
    } = e.currentTarget;
    setFormData(_objectSpread(_objectSpread({}, formData), {}, {
      [name]: value
    }));
  };
  if (success) {
    return __jsx(_order_submit__WEBPACK_IMPORTED_MODULE_9__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 12
      }
    });
  }
  return __jsx("div", {
    className: "flex flex-col w-full h-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "w-full flex justify-center relative px-30px py-20px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }
  }, __jsx("button", {
    className: "w-auto h-10 flex items-center justify-center text-gray-500 absolute top-half -mt-20px left-30px transition duration-300 focus:outline-none hover:text-gray-900",
    onClick: hideCheckout,
    "aria-label": "close",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  }, __jsx(assets_icons_arrow_left__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 11
    }
  })), __jsx("h2", {
    className: "font-bold text-24px m-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 9
    }
  }, "Checkout")), __jsx(components_scrollbar__WEBPACK_IMPORTED_MODULE_3__["Scrollbar"], {
    className: "checkout-scrollbar flex-grow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "flex flex-col px-30px pt-20px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "flex flex-col mb-45px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 11
    }
  }, __jsx("span", {
    className: "flex font-semibold text-gray-900 text-18px mb-15px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 13
    }
  }, "Contact Information"), __jsx(react_number_format__WEBPACK_IMPORTED_MODULE_1___default.a, {
    format: "+91 (###) ###-####",
    mask: "_",
    placeholder: "Mobile Phone Number",
    className: `${components_utils_theme__WEBPACK_IMPORTED_MODULE_10__["InputBase"]} ${components_utils_theme__WEBPACK_IMPORTED_MODULE_10__["TextBoxCommonBase"]} ${components_utils_theme__WEBPACK_IMPORTED_MODULE_10__["TextBoxEnable"]}`,
    value: formData.phone_number,
    onValueChange: ({
      value
    }) => setFormData(_objectSpread(_objectSpread({}, formData), {}, {
      phone_number: value
    })),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 13
    }
  }), (error === null || error === void 0 ? void 0 : error.field) === 'phone_number' && __jsx("p", {
    className: "text-12px font-semibold text-error pt-10px pl-15px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 15
    }
  }, error.message)), __jsx("div", {
    className: "flex flex-col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 11
    }
  }, __jsx("span", {
    className: "flex font-semibold text-gray-900 text-18px mb-15px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 13
    }
  }, "Shipping Address"), __jsx(components_input__WEBPACK_IMPORTED_MODULE_5__["default"], {
    placeholder: "Name",
    className: "mb-10px",
    name: "name",
    value: formData.name,
    onChange: onChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 13
    }
  }), __jsx(components_textarea__WEBPACK_IMPORTED_MODULE_8__["default"], {
    placeholder: "Enter Address",
    className: "mb-10px",
    name: "address",
    value: formData.address,
    onChange: onChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "flex items-center mb-10px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 13
    }
  }, __jsx(components_input__WEBPACK_IMPORTED_MODULE_5__["default"], {
    placeholder: "Postal Code",
    style: {
      width: 'calc(50% - 5px)',
      marginRight: '5px'
    },
    name: "postal_code",
    value: formData.postal_code,
    onChange: onChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 15
    }
  }), __jsx(components_input__WEBPACK_IMPORTED_MODULE_5__["default"], {
    placeholder: "Apartment, Suite, etc.",
    style: {
      width: 'calc(50% - 5px)',
      marginLeft: '5px'
    },
    name: "suite",
    value: formData.suite,
    onChange: onChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 15
    }
  }))))), __jsx("div", {
    className: "flex flex-col p-30px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 7
    }
  }, __jsx(components_button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: "big w-full",
    onClick: submitOrder,
    loading: loading,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 9
    }
  }, "Order Now")));
}

/***/ }),

/***/ "./src/containers/drawer/views/menus.tsx":
/*!***********************************************!*\
  !*** ./src/containers/drawer/views/menus.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DrawerMenu; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_scrollbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/scrollbar */ "./src/components/scrollbar.tsx");
/* harmony import */ var components_active_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/active-link */ "./src/components/active-link.tsx");
/* harmony import */ var contexts_drawer_drawer_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! contexts/drawer/drawer.provider */ "./src/contexts/drawer/drawer.provider.tsx");
/* harmony import */ var assets_icons_close__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/icons/close */ "./src/assets/icons/close.tsx");
/* harmony import */ var assets_icons_logo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/icons/logo */ "./src/assets/icons/logo.tsx");
/* harmony import */ var assets_icons_social_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assets/icons/social-icons */ "./src/assets/icons/social-icons.tsx");
var _jsxFileName = "C:\\Photoshop2021x64\\Github Repo\\Eternal\\src\\containers\\drawer\\views\\menus.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const menus = [{
  id: 1,
  pathname: '/',
  title: ''
}, {
  id: 4,
  pathname: '/faq',
  title: 'FAQ'
}, {
  id: 5,
  pathname: '/terms',
  title: 'Terms & Conditions'
}];
const social = [{
  id: 0,
  link: '/',
  icon: __jsx(assets_icons_social_icons__WEBPACK_IMPORTED_MODULE_7__["Facebook"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }),
  className: 'facebook',
  title: 'facebook'
}, {
  id: 1,
  link: '/',
  icon: __jsx(assets_icons_social_icons__WEBPACK_IMPORTED_MODULE_7__["Twitter"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }),
  className: 'twitter',
  title: 'twitter'
}, {
  id: 2,
  link: '/',
  icon: __jsx(assets_icons_social_icons__WEBPACK_IMPORTED_MODULE_7__["Youtube"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }),
  className: 'youtube',
  title: 'youtube'
}, {
  id: 3,
  link: '/',
  icon: __jsx(assets_icons_social_icons__WEBPACK_IMPORTED_MODULE_7__["Github"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 11
    }
  }),
  className: 'github',
  title: 'github'
}, {
  id: 4,
  link: '/',
  icon: __jsx(assets_icons_social_icons__WEBPACK_IMPORTED_MODULE_7__["Instagram"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 11
    }
  }),
  className: 'instagram',
  title: 'instagram'
}, {
  id: 5,
  link: '/',
  icon: __jsx(assets_icons_social_icons__WEBPACK_IMPORTED_MODULE_7__["Linkedin"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 11
    }
  }),
  className: 'linkedin',
  title: 'linkedin'
}];
function DrawerMenu() {
  const {
    dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(contexts_drawer_drawer_provider__WEBPACK_IMPORTED_MODULE_4__["DrawerContext"]);
  const hideMenu = () => {
    dispatch({
      type: 'OPEN_MENU',
      payload: {
        menu: false
      }
    });
  };
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "flex flex-col w-full h-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "w-full h-90px bg-gray-100 flex justify-start items-center relative px-30px flex-shrink-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 11
    }
  }, __jsx("a", {
    className: "flex",
    onClick: hideMenu,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "sr-only",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 15
    }
  }, "Eternal"), __jsx(assets_icons_logo__WEBPACK_IMPORTED_MODULE_6__["default"], {
    width: "100px",
    id: "medsy-menu-logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 15
    }
  }))), __jsx("div", {
    className: "flex items-center justify-end ml-auto pl-30px pr-50px text-gray-700 flex-shrink-0 lg:hidden",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 11
    }
  }, __jsx("span", {
    className: "font-semibold text-base text-14px ml-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 13
    }
  }, "+91 9316464111")), __jsx("button", {
    className: "w-30px h-30px flex items-center justify-center text-gray-500 absolute right-25px focus:outline-none",
    onClick: hideMenu,
    "aria-label": "close",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 11
    }
  }, __jsx(assets_icons_close__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 13
    }
  }))), __jsx(components_scrollbar__WEBPACK_IMPORTED_MODULE_2__["Scrollbar"], {
    className: "menu-scrollbar flex-grow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "flex flex-col py-60px pb-40px lg:pb-60px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 11
    }
  }, menus.map((menu, index) => __jsx(components_active_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
    href: menu.pathname,
    activeClassName: "font-semibold active",
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 15
    }
  }, __jsx("a", {
    className: "menu-item relative text-gray-900 pl-30px pr-4 mb-8 transition duration-300 ease-in-out last:mb-0 hover:text-gray-900",
    onClick: hideMenu,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 17
    }
  }, menu.title))))), __jsx("div", {
    className: "flex items-center justify-start border-t border-gray-300 bg-gray-100 h-12 px-30px flex-shrink-0 lg:hidden",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 9
    }
  }, social.map((item, index) => __jsx("a", {
    href: item.link,
    className: `social ${item.className}`,
    target: "_blank",
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "sr-only",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 15
    }
  }, item.title), item.icon)))));
}

/***/ }),

/***/ "./src/containers/drawer/views/no-item.tsx":
/*!*************************************************!*\
  !*** ./src/containers/drawer/views/no-item.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NoItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var contexts_drawer_drawer_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! contexts/drawer/drawer.provider */ "./src/contexts/drawer/drawer.provider.tsx");
/* harmony import */ var assets_icons_arrow_left__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/icons/arrow-left */ "./src/assets/icons/arrow-left.tsx");
/* harmony import */ var assets_icons_empty_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/icons/empty-svg */ "./src/assets/icons/empty-svg.tsx");
var _jsxFileName = "C:\\Photoshop2021x64\\Github Repo\\Eternal\\src\\containers\\drawer\\views\\no-item.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function NoItem() {
  const {
    dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(contexts_drawer_drawer_provider__WEBPACK_IMPORTED_MODULE_1__["DrawerContext"]);
  const hideCart = () => {
    dispatch({
      type: 'SLIDE_CART',
      payload: {
        open: false
      }
    });
  };
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "w-full flex justify-center flex-shrink-0 relative px-30px py-20px mb-30px border-b border-gray-200",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, __jsx("button", {
    className: "w-auto h-10 flex items-center justify-center text-gray-500 absolute top-half -mt-20px left-30px transition duration-300 focus:outline-none hover:text-gray-900",
    onClick: hideCart,
    "aria-label": "close",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, __jsx(assets_icons_arrow_left__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  })), __jsx("h2", {
    className: "font-semibold text-21px m-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, "No items in Your Basket")), __jsx("div", {
    className: "flex-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, __jsx("p", {
    className: "text-center text-gray-900 px-10 leading-loose",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, "You haven't added anything in your cart yet. Start adding the products you like."), __jsx("div", {
    className: "flex items-center justify-center mt-40px md:mt-95px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, __jsx(assets_icons_empty_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }))));
}

/***/ }),

/***/ "./src/containers/drawer/views/order-submit.tsx":
/*!******************************************************!*\
  !*** ./src/containers/drawer/views/order-submit.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OrderSubmit; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var contexts_drawer_drawer_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! contexts/drawer/drawer.provider */ "./src/contexts/drawer/drawer.provider.tsx");
/* harmony import */ var assets_icons_arrow_left__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/icons/arrow-left */ "./src/assets/icons/arrow-left.tsx");
/* harmony import */ var assets_icons_success_tick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/icons/success-tick */ "./src/assets/icons/success-tick.tsx");
var _jsxFileName = "C:\\Photoshop2021x64\\Github Repo\\Eternal\\src\\containers\\drawer\\views\\order-submit.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function OrderSubmit() {
  const {
    dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(contexts_drawer_drawer_provider__WEBPACK_IMPORTED_MODULE_1__["DrawerContext"]);
  const hideCart = () => {
    dispatch({
      type: 'SLIDE_CART',
      payload: {
        open: false
      }
    });
  };
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "w-full flex px-30px relative",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, __jsx("button", {
    className: "w-auto h-10 flex items-center justify-center text-gray-500 absolute top-half mt-20px left-30px transition duration-300 focus:outline-none hover:text-gray-900",
    onClick: hideCart,
    "aria-label": "close",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, __jsx(assets_icons_arrow_left__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }))), __jsx("div", {
    className: "flex flex-col pb-60px flex-auto justify-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "flex items-center justify-center text-green",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, __jsx(assets_icons_success_tick__WEBPACK_IMPORTED_MODULE_3__["default"], {
    style: {
      width: 60
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "flex flex-col items-center px-40px md:px-80px mt-15px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, __jsx("h3", {
    className: "text-center text-18px font-semibold text-gray-900 mb-40px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, "Order Confirmation"), __jsx("p", {
    className: "text-center text-14px font-semibold text-gray-900 mb-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, "Thank you for your order."), __jsx("p", {
    className: "text-center text-13px text-gray-700",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }, "We've received your order and will contact you very soon."))));
}

/***/ }),

/***/ "./src/containers/drawer/views/product-details.tsx":
/*!*********************************************************!*\
  !*** ./src/containers/drawer/views/product-details.tsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProductDetails; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_scrollbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/scrollbar */ "./src/components/scrollbar.tsx");
/* harmony import */ var components_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/button */ "./src/components/button.tsx");
/* harmony import */ var helpers_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! helpers/constants */ "./src/helpers/constants.tsx");
/* harmony import */ var contexts_cart_cart_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! contexts/cart/cart.provider */ "./src/contexts/cart/cart.provider.tsx");
/* harmony import */ var contexts_drawer_drawer_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! contexts/drawer/drawer.provider */ "./src/contexts/drawer/drawer.provider.tsx");
/* harmony import */ var assets_icons_arrow_left__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/icons/arrow-left */ "./src/assets/icons/arrow-left.tsx");
/* harmony import */ var components_counter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/counter */ "./src/components/counter.tsx");
var _jsxFileName = "C:\\Photoshop2021x64\\Github Repo\\Eternal\\src\\containers\\drawer\\views\\product-details.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








function ProductDetails() {
  var _getItem;
  const {
    0: visibility,
    1: setVisibility
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    addItem,
    getItem,
    removeItem
  } = Object(contexts_cart_cart_provider__WEBPACK_IMPORTED_MODULE_4__["useCart"])();
  const {
    state,
    dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(contexts_drawer_drawer_provider__WEBPACK_IMPORTED_MODULE_5__["DrawerContext"]);
  const count = (_getItem = getItem(state.item.id)) === null || _getItem === void 0 ? void 0 : _getItem.quantity;
  const toggleVisibility = () => {
    setVisibility(!visibility);
  };
  const hideDetails = () => {
    dispatch({
      type: 'TOGGLE_PRODUCT_DETAIL',
      payload: {
        showDetails: false
      }
    });
    dispatch({
      type: 'SLIDE_CART',
      payload: {
        open: false
      }
    });
  };
  const addToCart = () => {
    addItem(state.item);
    dispatch({
      type: 'TOGGLE_CART_VIEW',
      payload: {
        showCart: true
      }
    });
  };
  return __jsx("div", {
    className: "flex flex-col w-full h-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "w-full flex justify-center relative px-30px py-20px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, __jsx("button", {
    className: "w-auto h-10 flex items-center justify-center text-gray-500 absolute top-half -mt-20px left-30px transition duration-300 focus:outline-none hover:text-gray-900",
    onClick: hideDetails,
    "aria-label": "close",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, __jsx(assets_icons_arrow_left__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  })), __jsx("h2", {
    className: "font-bold text-24px m-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }, "Details")), __jsx(components_scrollbar__WEBPACK_IMPORTED_MODULE_1__["Scrollbar"], {
    className: "details-scrollbar flex-grow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "flex flex-col p-30px pt-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "flex items-center justify-center w-full h-360px overflow-hidden rounded mb-30px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: state.item.image,
    alt: `${state.item.name}-img`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "flex flex-col items-start mb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 11
    }
  }, __jsx("span", {
    className: "text-gray-900 font-semibold mb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }, helpers_constants__WEBPACK_IMPORTED_MODULE_3__["CURRENCY"], state.item.price), __jsx("span", {
    className: "mb-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }, state.item.name), __jsx("p", {
    className: "flex items-center mb-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: " text-gray-500 text-11px capitalize",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 15
    }
  }, state.item.type), __jsx("span", {
    className: "flex bg-gray-500 w-3px h-3px rounded mx-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 15
    }
  }), __jsx("span", {
    className: " text-gray-500 text-11px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 15
    }
  }, state.item.quantity, ' ', state.item.quantity > 1 ? 'pieces' : 'piece')), visibility === true ? __jsx("p", {
    className: "my-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 15
    }
  }, state.item.description) : '', state.item.description && __jsx("button", {
    className: "font-semibold text-11px text-gray-800 mt-2 focus:outline-none",
    onClick: toggleVisibility,
    "aria-label": "details",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 15
    }
  }, visibility === true ? 'Less Details' : 'More Details')), __jsx("div", {
    className: "flex w-full flex-col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "flex flex-col justify-start full mt-10 pr-30px even:pr-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "text-gray-500 text-11px mb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 15
    }
  }, "Dosages Form"), __jsx("span", {
    className: "font-normal text-13px text-gray-900 capitalize",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 15
    }
  }, state.item.type)), __jsx("div", {
    className: "flex flex-col justify-start full mt-10 pr-30px even:pr-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "text-gray-500 text-11px mb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 15
    }
  }, "Dosages"), __jsx("span", {
    className: "font-normal text-13px text-gray-900 capitalize",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 15
    }
  }, state.item.dosage)), __jsx("div", {
    className: "flex flex-col justify-start full mt-10 pr-30px even:pr-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "text-gray-500 text-11px mb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 15
    }
  }, "Active Substance"), __jsx("span", {
    className: "font-normal text-13px text-gray-900 capitalize",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 15
    }
  }, state.item.substance)), __jsx("div", {
    className: "flex flex-col justify-start full mt-10 pr-30px even:pr-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "text-gray-500 text-11px mb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 15
    }
  }, "Manufacturer"), __jsx("span", {
    className: "font-normal text-13px text-gray-900 capitalize",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 15
    }
  }, state.item.manufacturer))))), __jsx("div", {
    className: "flex flex-col p-30px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 7
    }
  }, count > 0 ? __jsx(components_counter__WEBPACK_IMPORTED_MODULE_7__["default"], {
    value: count,
    className: "ml-auto w-full big",
    size: "big",
    onIncrement: () => {
      addItem(state.item);
    },
    onDecrement: () => removeItem(state.item),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 11
    }
  }) : __jsx(components_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "w-full big",
    onClick: addToCart,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 11
    }
  }, "Add To Cart")));
}

/***/ }),

/***/ "./src/containers/hero-block.tsx":
/*!***************************************!*\
  !*** ./src/containers/hero-block.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HeroBlock; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_carousel_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/carousel/carousel */ "./src/components/carousel/carousel.tsx");
/* harmony import */ var assets_image_coupon_card_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/image/coupon-card.png */ "./src/assets/image/coupon-card.png");
/* harmony import */ var assets_image_coupon_card_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(assets_image_coupon_card_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var assets_image_custom_order_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/image/custom-order.png */ "./src/assets/image/custom-order.png");
/* harmony import */ var assets_image_custom_order_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(assets_image_custom_order_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var assets_image_fast_delivery_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/image/fast-delivery.png */ "./src/assets/image/fast-delivery.png");
/* harmony import */ var assets_image_fast_delivery_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_image_fast_delivery_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var assets_image_female_care_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/image/female-care.png */ "./src/assets/image/female-care.png");
/* harmony import */ var assets_image_female_care_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_image_female_care_png__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Photoshop2021x64\\Github Repo\\Eternal\\src\\containers\\hero-block.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const data = [{
  id: 1,
  image: assets_image_fast_delivery_png__WEBPACK_IMPORTED_MODULE_4___default.a,
  link: '#',
  title: 'Fast delivery'
}, {
  id: 2,
  image: assets_image_coupon_card_png__WEBPACK_IMPORTED_MODULE_2___default.a,
  link: '#',
  title: 'Coupon savings'
}, {
  id: 3,
  image: assets_image_custom_order_png__WEBPACK_IMPORTED_MODULE_3___default.a,
  link: '#',
  title: 'Custom order'
}, {
  id: 4,
  image: assets_image_female_care_png__WEBPACK_IMPORTED_MODULE_5___default.a,
  link: '#',
  title: 'Female care'
}];
function HeroBlock() {
  return __jsx("div", {
    className: "w-full relative my-35px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, __jsx(components_carousel_carousel__WEBPACK_IMPORTED_MODULE_1__["default"], {
    data: data,
    itemClass: "px-5px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }));
}

/***/ }),

/***/ "./src/containers/how-it-works.tsx":
/*!*****************************************!*\
  !*** ./src/containers/how-it-works.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HowItWorks; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_feature_block__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/feature-block */ "./src/components/feature-block.tsx");
var _jsxFileName = "C:\\Photoshop2021x64\\Github Repo\\Eternal\\src\\containers\\how-it-works.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const data = [{
  id: 1,
  background: '#feeec8',
  title: 'Your Order',
  description: 'Add products to your cart, enter your details and confirm.'
}, {
  id: 2,
  background: '#ceeffe',
  title: 'Picking your order',
  description: 'Your order is being picked and now will be forwarded for packaging.'
}, {
  id: 3,
  background: '#d4f8c4',
  title: 'Packing Your Order',
  description: 'We are packing your order and will be out for delivery soon.'
}, {
  id: 4,
  background: '#d8dafe',
  title: 'Deliver',
  description: 'Your order has been prepared and out for delivery. It will be delivered soon.'
}];
function HowItWorks() {
  return __jsx("div", {
    className: "flex w-full px-20px md:p-30px py-40px rounded border border-gray-300 bg-white mb-10",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "feature-block-wrapper w-full grid grid-cols-1 gap-x-30px gap-y-40px md:grid-cols-2 xl:grid-cols-4 xxl:gap-30px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, data.map((item, index) => __jsx(components_feature_block__WEBPACK_IMPORTED_MODULE_1__["default"], {
    key: item.id,
    title: item.title,
    description: item.description,
    counterBg: item.background,
    counter: index + 1,
    className: "feature-block",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }))));
}

/***/ }),

/***/ "./src/containers/layout/footer.tsx":
/*!******************************************!*\
  !*** ./src/containers/layout/footer.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var assets_icons_social_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/icons/social-icons */ "./src/assets/icons/social-icons.tsx");
var _jsxFileName = "C:\\Photoshop2021x64\\Github Repo\\Eternal\\src\\containers\\layout\\footer.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const currentYear = new Date().getFullYear();
const social = [{
  id: 0,
  link: '/',
  icon: __jsx(assets_icons_social_icons__WEBPACK_IMPORTED_MODULE_1__["Facebook"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }),
  className: 'facebook',
  title: 'facebook'
}, {
  id: 1,
  link: '/',
  icon: __jsx(assets_icons_social_icons__WEBPACK_IMPORTED_MODULE_1__["Twitter"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }),
  className: 'twitter',
  title: 'twitter'
}, {
  id: 2,
  link: '/',
  icon: __jsx(assets_icons_social_icons__WEBPACK_IMPORTED_MODULE_1__["Youtube"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }),
  className: 'youtube',
  title: 'youtube'
}, {
  id: 3,
  link: '/',
  icon: __jsx(assets_icons_social_icons__WEBPACK_IMPORTED_MODULE_1__["Github"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }),
  className: 'github',
  title: 'github'
}, {
  id: 4,
  link: '/',
  icon: __jsx(assets_icons_social_icons__WEBPACK_IMPORTED_MODULE_1__["Instagram"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  }),
  className: 'instagram',
  title: 'instagram'
}, {
  id: 5,
  link: '/',
  icon: __jsx(assets_icons_social_icons__WEBPACK_IMPORTED_MODULE_1__["Linkedin"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }),
  className: 'linkedin',
  title: 'linkedin'
}];
const Footer = () => __jsx("footer", {
  className: "w-full flex items-center justify-center bg-white shadow-footer px-4 py-30px lg:px-35px lg:justify-between",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 3
  }
}, __jsx("p", {
  className: "text-gray-900",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 59,
    columnNumber: 5
  }
}, "Copyright \xA9 ", currentYear, ' ', __jsx("a", {
  className: "font-semibold transition-colors duration-200 ease-in-out hover:text-red-700",
  href: "#",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 61,
    columnNumber: 7
  }
}, "Eternal"), ' ', "All rights reserved"), __jsx("div", {
  className: "items-center hidden lg:flex",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 70,
    columnNumber: 5
  }
}, social.map((item, index) => __jsx("a", {
  href: item.link,
  className: `social ${item.className}`,
  key: index,
  target: "_blank",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 72,
    columnNumber: 9
  }
}, __jsx("span", {
  className: "sr-only",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 78,
    columnNumber: 11
  }
}, item.title), item.icon))));
/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/containers/layout/header.tsx":
/*!******************************************!*\
  !*** ./src/containers/layout/header.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var assets_icons_phone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/icons/phone */ "./src/assets/icons/phone.tsx");
/* harmony import */ var assets_icons_cart_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/icons/cart-icon */ "./src/assets/icons/cart-icon.tsx");
/* harmony import */ var assets_icons_logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/icons/logo */ "./src/assets/icons/logo.tsx");
/* harmony import */ var components_search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/search */ "./src/components/search.tsx");
/* harmony import */ var contexts_drawer_drawer_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! contexts/drawer/drawer.provider */ "./src/contexts/drawer/drawer.provider.tsx");
/* harmony import */ var contexts_cart_cart_provider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! contexts/cart/cart.provider */ "./src/contexts/cart/cart.provider.tsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "C:\\Photoshop2021x64\\Github Repo\\Eternal\\src\\containers\\layout\\header.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









function Header() {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_8__["useRouter"])();
  const {
    dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(contexts_drawer_drawer_provider__WEBPACK_IMPORTED_MODULE_6__["DrawerContext"]);
  const {
    itemsCount
  } = Object(contexts_cart_cart_provider__WEBPACK_IMPORTED_MODULE_7__["useCart"])();
  const showMenu = () => {
    dispatch({
      type: 'OPEN_MENU',
      payload: {
        menu: true
      }
    });
  };
  const showCart = () => {
    dispatch({
      type: 'SLIDE_CART',
      payload: {
        open: true
      }
    });
    dispatch({
      type: 'TOGGLE_CART_VIEW',
      payload: {
        showCart: true
      }
    });
  };
  const isHome = router.pathname === '/';
  return __jsx("header", {
    className: "flex items-center shadow-mobile text-gray-700 body-font fixed bg-white w-full h-90px z-20 lg:shadow-header pr-20px md:pr-30px lg:pr-40px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }
  }, __jsx("button", {
    "aria-label": "Menu",
    className: "menuBtn flex flex-col items-center justify-center w-50px flex-shrink-0 h-full outline-none focus:outline-none lg:w-90px",
    onClick: showMenu,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: "menuIcon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, __jsx("span", {
    className: "bar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }), __jsx("span", {
    className: "bar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }), __jsx("span", {
    className: "bar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  }))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  }, __jsx("a", {
    className: "hidden mx-auto lg:mr-10 lg:flex",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, __jsx("span", {
    className: "sr-only",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  }, "Eternal"), __jsx(assets_icons_logo__WEBPACK_IMPORTED_MODULE_4__["default"], {
    width: "110px",
    id: "medsy-header-logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 11
    }
  }))), __jsx("div", {
    className: "w-full ml-10px mr-20px lg:mr-10 lg:ml-auto lg:flex lg:justify-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }
  }, isHome && __jsx(components_search__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 20
    }
  })), __jsx("div", {
    className: "hidden items-center text-gray-900 mr-10 flex-shrink-0 lg:flex",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }
  }, __jsx(assets_icons_phone__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }), __jsx("span", {
    className: "font-semibold text-base text-14px ml-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }, "+91 9316464111")), __jsx("button", {
    className: "flex items-center justify-center flex-shrink-0 h-auto relative focus:outline-none",
    onClick: showCart,
    "aria-label": "cart-button",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }
  }, __jsx(assets_icons_cart_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
    width: "20px",
    height: "20px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 9
    }
  }), __jsx("span", {
    className: "w-18px h-18px flex items-center justify-center bg-gray-900 text-white absolute rounded-full",
    style: {
      fontSize: '10px',
      top: '-10px',
      right: '-10px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  }, itemsCount)));
}

/***/ }),

/***/ "./src/containers/layout/layout.tsx":
/*!******************************************!*\
  !*** ./src/containers/layout/layout.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ "./src/containers/layout/header.tsx");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer */ "./src/containers/layout/footer.tsx");
/* harmony import */ var containers_drawer_drawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! containers/drawer/drawer */ "./src/containers/drawer/drawer.tsx");
var _jsxFileName = "C:\\Photoshop2021x64\\Github Repo\\Eternal\\src\\containers\\layout\\layout.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



const Layout = props => __jsx("main", {
  className: "relative min-h-screen h-screen flex-grow overflow-y-auto",
  style: _objectSpread({
    minHeight: '-webkit-fill-available',
    WebkitOverflowScrolling: 'touch'
  }, props.style),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 3
  }
}, __jsx(containers_drawer_drawer__WEBPACK_IMPORTED_MODULE_3__["Drawer"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }
}), __jsx(_header__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }
}), __jsx("div", {
  className: "flex flex-col w-full h-full flex-grow",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }
}, __jsx("div", {
  className: "pt-90px px-3 pb-50px flex-auto md:px-35px",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 7
  }
}, props.children), __jsx(_footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 7
  }
})), __jsx(containers_drawer_drawer__WEBPACK_IMPORTED_MODULE_3__["CartDrawer"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }
}));
/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./src/containers/products.tsx":
/*!*************************************!*\
  !*** ./src/containers/products.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_item_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/item-card */ "./src/components/item-card.tsx");
/* harmony import */ var contexts_drawer_drawer_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! contexts/drawer/drawer.provider */ "./src/contexts/drawer/drawer.provider.tsx");
/* harmony import */ var contexts_search_use_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! contexts/search/use-search */ "./src/contexts/search/use-search.tsx");
/* harmony import */ var helpers_use_searchable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! helpers/use-searchable */ "./src/helpers/use-searchable.tsx");
/* harmony import */ var assets_icons_not_found__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/icons/not-found */ "./src/assets/icons/not-found.tsx");
var _jsxFileName = "C:\\Photoshop2021x64\\Github Repo\\Eternal\\src\\containers\\products.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Products = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(({
  items
}, ref) => {
  const {
    dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(contexts_drawer_drawer_provider__WEBPACK_IMPORTED_MODULE_2__["DrawerContext"]);
  const {
    searchTerm
  } = Object(contexts_search_use_search__WEBPACK_IMPORTED_MODULE_3__["useSearch"])();
  const searchableItems = Object(helpers_use_searchable__WEBPACK_IMPORTED_MODULE_4__["useSearchable"])(items, searchTerm, item => [item.name]);
  const showDetails = item => {
    dispatch({
      type: 'STORE_PRODUCT_DETAIL',
      payload: {
        item: item
      }
    });
    dispatch({
      type: 'SLIDE_CART',
      payload: {
        open: true
      }
    });
    dispatch({
      type: 'TOGGLE_PRODUCT_DETAIL',
      payload: {
        showDetails: true
      }
    });
  };
  return __jsx("div", {
    className: "w-full py-10",
    ref: ref,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, searchableItems.length ? __jsx("div", {
    className: "grid grid-cols-2 col-gap-3 row-gap-6 md:grid-cols-3 md:col-gap-4 md:row-gap-8 lg:grid-cols-4 lg:col-gap-4 lg:row-gap-10 xxl:grid-cols-5 xxl:col-gap-4 xxl:row-gap-12 2xxl:grid-cols-7 2xxl:col-gap-5 2xxl:row-gap-12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }, searchableItems.map(item => __jsx(components_item_card__WEBPACK_IMPORTED_MODULE_1__["default"], {
    key: item.id,
    item: item,
    onClick: () => showDetails(item),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 15
    }
  }))) : __jsx("div", {
    className: "pt-10px md:pt-40px lg:pt-20px pb-40px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  }, __jsx(assets_icons_not_found__WEBPACK_IMPORTED_MODULE_5__["default"], {
    width: "100%",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }), __jsx("h3", {
    className: "text-24px text-gray-900 font-bold mt-35px mb-0 text-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }, "No product found :(")));
});
/* harmony default export */ __webpack_exports__["default"] = (Products);

/***/ }),

/***/ "./src/contexts/cart/cart.provider.tsx":
/*!*********************************************!*\
  !*** ./src/contexts/cart/cart.provider.tsx ***!
  \*********************************************/
/*! exports provided: CartProvider, useCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartProvider", function() { return CartProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCart", function() { return useCart; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _cart_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart.reducer */ "./src/contexts/cart/cart.reducer.tsx");
/* harmony import */ var helpers_use_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! helpers/use-storage */ "./src/helpers/use-storage.tsx");
var _jsxFileName = "C:\\Photoshop2021x64\\Github Repo\\Eternal\\src\\contexts\\cart\\cart.provider.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



const CartContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({});
const INITIAL_STATE = {
  isOpen: false,
  items: [],
  coupon: null
};
const useCartActions = (initialCart = INITIAL_STATE) => {
  var _state$items3;
  const {
    0: state,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(_cart_reducer__WEBPACK_IMPORTED_MODULE_1__["reducer"], initialCart);
  const addItemHandler = (item, quantity = 1) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: _objectSpread(_objectSpread({}, item), {}, {
        quantity
      })
    });
  };
  const removeItemHandler = (item, quantity = 1) => {
    dispatch({
      type: 'REMOVE_ITEM',
      payload: _objectSpread(_objectSpread({}, item), {}, {
        quantity
      })
    });
  };
  const clearItemFromCartHandler = item => {
    dispatch({
      type: 'CLEAR_ITEM_FROM_CART',
      payload: item
    });
  };
  const clearCartHandler = () => {
    dispatch({
      type: 'CLEAR_CART'
    });
  };
  const toggleCartHandler = () => {
    dispatch({
      type: 'TOGGLE_CART'
    });
  };
  const couponHandler = coupon => {
    dispatch({
      type: 'APPLY_COUPON',
      payload: coupon
    });
  };
  const removeCouponHandler = () => {
    dispatch({
      type: 'REMOVE_COUPON'
    });
  };
  const rehydrateLocalState = payload => {
    dispatch({
      type: 'REHYDRATE',
      payload
    });
  };
  const isInCartHandler = id => {
    var _state$items;
    return (_state$items = state.items) === null || _state$items === void 0 ? void 0 : _state$items.some(item => item.id === id);
  };
  const getItemHandler = id => {
    var _state$items2;
    return (_state$items2 = state.items) === null || _state$items2 === void 0 ? void 0 : _state$items2.find(item => item.id === id);
  };
  const getCartItemsPrice = () => Object(_cart_reducer__WEBPACK_IMPORTED_MODULE_1__["cartItemsTotalPrice"])(state.items).toFixed(2);
  const getCartItemsTotalPrice = () => Object(_cart_reducer__WEBPACK_IMPORTED_MODULE_1__["cartItemsTotalPrice"])(state.items, state.coupon).toFixed(2);
  const getDiscount = () => {
    var _state$coupon;
    const total = Object(_cart_reducer__WEBPACK_IMPORTED_MODULE_1__["cartItemsTotalPrice"])(state.items);
    const discount = state.coupon ? total * Number((_state$coupon = state.coupon) === null || _state$coupon === void 0 ? void 0 : _state$coupon.discountInPercent) / 100 : 0;
    return discount.toFixed(2);
  };
  const getItemsCount = (_state$items3 = state.items) === null || _state$items3 === void 0 ? void 0 : _state$items3.reduce((acc, item) => acc + item.quantity, 0);
  return {
    state,
    getItemsCount,
    rehydrateLocalState,
    addItemHandler,
    removeItemHandler,
    clearItemFromCartHandler,
    clearCartHandler,
    isInCartHandler,
    getItemHandler,
    toggleCartHandler,
    getCartItemsTotalPrice,
    getCartItemsPrice,
    couponHandler,
    removeCouponHandler,
    getDiscount
  };
};
const CartProvider = ({
  children
}) => {
  var _state$items4;
  const {
    state,
    rehydrateLocalState,
    getItemsCount,
    addItemHandler,
    removeItemHandler,
    clearItemFromCartHandler,
    clearCartHandler,
    isInCartHandler,
    getItemHandler,
    toggleCartHandler,
    getCartItemsTotalPrice,
    couponHandler,
    removeCouponHandler,
    getCartItemsPrice,
    getDiscount
  } = useCartActions();
  const {
    rehydrated,
    error
  } = Object(helpers_use_storage__WEBPACK_IMPORTED_MODULE_2__["useStorage"])(state, rehydrateLocalState);
  return __jsx(CartContext.Provider, {
    value: {
      isOpen: state.isOpen,
      items: state.items,
      coupon: state.coupon,
      cartItemsCount: (_state$items4 = state.items) === null || _state$items4 === void 0 ? void 0 : _state$items4.length,
      itemsCount: getItemsCount,
      addItem: addItemHandler,
      removeItem: removeItemHandler,
      removeItemFromCart: clearItemFromCartHandler,
      clearCart: clearCartHandler,
      isInCart: isInCartHandler,
      getItem: getItemHandler,
      toggleCart: toggleCartHandler,
      calculatePrice: getCartItemsTotalPrice,
      calculateSubTotalPrice: getCartItemsPrice,
      applyCoupon: couponHandler,
      removeCoupon: removeCouponHandler,
      calculateDiscount: getDiscount
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 5
    }
  }, children);
};
const useCart = () => Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(CartContext);

/***/ }),

/***/ "./src/contexts/cart/cart.reducer.tsx":
/*!********************************************!*\
  !*** ./src/contexts/cart/cart.reducer.tsx ***!
  \********************************************/
/*! exports provided: cartItemsTotalPrice, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cartItemsTotalPrice", function() { return cartItemsTotalPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
const cartItemsTotalPrice = (items, coupon = null) => {
  let total = items.reduce((price, product) => {
    if (product.salePrice) {
      return price + product.salePrice * product.quantity;
    }
    return price + product.price * product.quantity;
  }, 0);
  const discount = coupon ? total * Number(coupon.discountInPercent) / 100 : 0;
  return total - discount;
};
// cartItems, cartItemToAdd
const addItemToCart = (state, action) => {
  const existingCartItemIndex = state.items.findIndex(item => item.id === action.payload.id);
  if (existingCartItemIndex > -1) {
    const newState = [...state.items];
    newState[existingCartItemIndex].quantity += action.payload.quantity;
    return newState;
  }
  return [...state.items, action.payload];
};

// cartItems, cartItemToRemove
const removeItemFromCart = (state, action) => {
  return state.items.reduce((acc, item) => {
    if (item.id === action.payload.id) {
      const newQuantity = item.quantity - action.payload.quantity;
      return newQuantity > 0 ? [...acc, _objectSpread(_objectSpread({}, item), {}, {
        quantity: newQuantity
      })] : [...acc];
    }
    return [...acc, item];
  }, []);
};
const clearItemFromCart = (state, action) => {
  return state.items.filter(item => item.id !== action.payload.id);
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'REHYDRATE':
      return _objectSpread(_objectSpread({}, state), action.payload);
    case 'TOGGLE_CART':
      return _objectSpread(_objectSpread({}, state), {}, {
        isOpen: !state.isOpen
      });
    case 'ADD_ITEM':
      return _objectSpread(_objectSpread({}, state), {}, {
        items: addItemToCart(state, action)
      });
    case 'REMOVE_ITEM':
      return _objectSpread(_objectSpread({}, state), {}, {
        items: removeItemFromCart(state, action)
      });
    case 'CLEAR_ITEM_FROM_CART':
      return _objectSpread(_objectSpread({}, state), {}, {
        items: clearItemFromCart(state, action)
      });
    case 'CLEAR_CART':
      return _objectSpread(_objectSpread({}, state), {}, {
        items: []
      });
    case 'APPLY_COUPON':
      return _objectSpread(_objectSpread({}, state), {}, {
        coupon: action.payload
      });
    case 'REMOVE_COUPON':
      return _objectSpread(_objectSpread({}, state), {}, {
        coupon: null
      });
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

/***/ }),

/***/ "./src/contexts/drawer/drawer.provider.tsx":
/*!*************************************************!*\
  !*** ./src/contexts/drawer/drawer.provider.tsx ***!
  \*************************************************/
/*! exports provided: DrawerContext, DrawerProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawerContext", function() { return DrawerContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawerProvider", function() { return DrawerProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Photoshop2021x64\\Github Repo\\Eternal\\src\\contexts\\drawer\\drawer.provider.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

const DrawerContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({});
const INITIAL_STATE = {
  showDetails: false,
  showCart: false,
  showCheckout: false,
  menu: false,
  open: false,
  item: []
};
function reducer(state, action) {
  switch (action.type) {
    case 'STORE_PRODUCT_DETAIL':
      return _objectSpread(_objectSpread({}, state), {}, {
        item: action.payload.item
      });
    case 'TOGGLE_PRODUCT_DETAIL':
      return _objectSpread(_objectSpread({}, state), {}, {
        showDetails: action.payload.showDetails,
        showCart: false,
        showCheckout: false
      });
    case 'TOGGLE_CART_VIEW':
      return _objectSpread(_objectSpread({}, state), {}, {
        showDetails: false,
        showCart: action.payload.showCart,
        showCheckout: false
      });
    case 'TOGGLE_CHECKOUT_VIEW':
      return _objectSpread(_objectSpread({}, state), {}, {
        showDetails: false,
        showCart: false,
        showCheckout: action.payload.showCheckout
      });
    case 'SLIDE_CART':
      return _objectSpread(_objectSpread({}, state), {}, {
        open: action.payload.open
      });
    case 'OPEN_MENU':
      return _objectSpread(_objectSpread({}, state), {}, {
        menu: action.payload.menu
      });
    default:
      return state;
  }
}
const DrawerProvider = ({
  children
}) => {
  const {
    0: state,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(reducer, INITIAL_STATE);
  return __jsx(DrawerContext.Provider, {
    value: {
      state,
      dispatch
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 5
    }
  }, children);
};

/***/ }),

/***/ "./src/contexts/search/use-search.tsx":
/*!********************************************!*\
  !*** ./src/contexts/search/use-search.tsx ***!
  \********************************************/
/*! exports provided: SearchProvider, useSearch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchProvider", function() { return SearchProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSearch", function() { return useSearch; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Photoshop2021x64\\Github Repo\\Eternal\\src\\contexts\\search\\use-search.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const searchContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({});
const SearchProvider = ({
  children
}) => {
  const {
    0: searchTerm,
    1: setSearchTerm
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  return __jsx(searchContext.Provider, {
    value: {
      searchTerm,
      setSearchTerm
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, children);
};
const useSearch = () => Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(searchContext);

/***/ }),

/***/ "./src/helpers/constants.tsx":
/*!***********************************!*\
  !*** ./src/helpers/constants.tsx ***!
  \***********************************/
/*! exports provided: CURRENCY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CURRENCY", function() { return CURRENCY; });
// CONSTANTS
const CURRENCY = '₹';

/***/ }),

/***/ "./src/helpers/get-products.tsx":
/*!**************************************!*\
  !*** ./src/helpers/get-products.tsx ***!
  \**************************************/
/*! exports provided: getProducts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProducts", function() { return getProducts; });
async function getProducts() {
  if (!(process.env.GOOGLE_SERVICE_ACCOUNT_CLIENT_EMAIL && process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY && process.env.GOOGLE_SPREADSHEET_ID_PRODUCT)) {
    throw new Error('GOOGLE credentials must be set as env vars `GOOGLE_SERVICE_ACCOUNT_CLIENT_EMAIL` ,`GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY` and `GOOGLE_SPREADSHEET_ID_PRODUCT`.');
  }
  const {
    GoogleSpreadsheet
  } = __webpack_require__(/*! google-spreadsheet */ "google-spreadsheet");
  const doc = new GoogleSpreadsheet(process.env.GOOGLE_SPREADSHEET_ID_PRODUCT);
  await doc.useServiceAccountAuth({
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY.replace(/\\n/gm, '\n')
  });
  await doc.loadInfo(); // loads document properties and worksheets
  const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id]
  // read rows
  const rows = await sheet.getRows(); // can pass in { limit, offset }
  const products = rows === null || rows === void 0 ? void 0 : rows.map(({
    id,
    name,
    image,
    description,
    price,
    manufacturer,
    type,
    quantity,
    dosage,
    substance
  }) => ({
    id,
    name,
    image,
    description,
    price,
    manufacturer,
    type,
    quantity,
    dosage,
    substance
  }));
  return products;
}

/***/ }),

/***/ "./src/helpers/use-ref-scroll.tsx":
/*!****************************************!*\
  !*** ./src/helpers/use-ref-scroll.tsx ***!
  \****************************************/
/*! exports provided: isClient, useRefScroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isClient", function() { return isClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRefScroll", function() { return useRefScroll; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

const isClient = !!( false && false);
// export enum ScrollDirections {
//   Horizontal,
//   Vertical
// }

function scrollToPercent(el, {
  container,
  percentOfElement,
  offsetPX,
  direction,
  percentOfContainer
}) {
  const rect = el.current.getClientRects()[0];
  const isVertical = direction === 'vertical';
  const refSize = isVertical ? rect.height : rect.width;
  const elemScroll = isVertical ? rect.y : rect.x;
  const scrollSize = container === window ? isVertical ? container.innerHeight : container.innerWidth : isVertical ? container.scrollHeight : container.scrollWidth;
  let addOffset = refSize * percentOfElement / 100;
  if (offsetPX) {
    addOffset += offsetPX;
  }
  const containerScroll = isVertical ? container.scrollY : container.scrollX;
  const newScroll = containerScroll + elemScroll + (scrollSize * percentOfContainer / 100 + addOffset);
  const scrollObj = isVertical ? {
    top: newScroll
  } : {
    left: newScroll
  };
  window.scrollTo(_objectSpread(_objectSpread({}, scrollObj), {}, {
    behavior: 'smooth'
  }));
}

// interface ScrollOpts {
//   /**
//    * Offset in percentage of the element's client dimentions
//    * default is to scroll to center the element in the scrolling pane, hence 50%
//    */
//   percentOfElement?: number;
//   /**
//    * The offset in pixels, whch will be added to the percentage of the element
//    */
//   offsetPX?: number;
//   /**
//    * Whether to run the scroll on mounting
//    */
//   onMount?: boolean;
//   /**
//    * The scrollable container in which the ref element is scrolling
//    */
//   container?: any;
//   // default is the center of the scrolling container, hence 50%
//   percentOfContainer?: number;
//   direction?: ScrollDirections;
// }

function useRefScroll({
  percentOfElement = 50,
  offsetPX = 0,
  onMount = false,
  container = isClient ? window : null,
  percentOfContainer = 50,
  direction = 'vertical'
}) {
  const elRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const scroll = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    if (elRef.current) {
      scrollToPercent(elRef, {
        percentOfElement,
        offsetPX,
        container,
        percentOfContainer,
        direction
      });
    }
  }, [elRef.current]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (onMount) {
      scroll();
    }
  }, []);
  return {
    elRef,
    scroll
  };
}

// function MyComponent() {
//   // using the hook without arguments will scroll the element to the center of the
//   // window's viewport
//   // alias elRef to myDiv for easier usage if having multiple elements
//   // in the same component

//   const { elRef: myDiv, scroll } = useRefScroller();

//   return (
//     <div>
//       <button onClick={scroll}>Scroll</button>

//       <div ref={myDiv}>
//         `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum efficitur, massa vitae consectetur egestas, justo magna
//         facilisis arcu, non accumsan lacus ipsum sit amet nisl.`
//       </div>
//     </div>
//   );
// }

/***/ }),

/***/ "./src/helpers/use-searchable.tsx":
/*!****************************************!*\
  !*** ./src/helpers/use-searchable.tsx ***!
  \****************************************/
/*! exports provided: useSearchable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSearchable", function() { return useSearchable; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useSearchable = (data, searchText, searchProps) => {
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
    const regex = new RegExp(searchText, 'i');
    return data.filter(item => searchProps(item).some(sp => regex.test(sp)));
  }, [data, searchText, searchProps]);
};
// const useSearchable = <T>(data: T[], searchText: string, searchProps: (item: T) => string[]) => {
//   return useMemo(() => {
//     const regex = new RegExp(searchText, "i");
//     return data.filter((item) =>
//       searchProps(item).some((sp) => regex.test(sp))
//     );
//   }, [data, searchText, searchProps]);
// };
// export default useSearchable;

/***/ }),

/***/ "./src/helpers/use-storage.tsx":
/*!*************************************!*\
  !*** ./src/helpers/use-storage.tsx ***!
  \*************************************/
/*! exports provided: useStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStorage", function() { return useStorage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! localforage */ "localforage");
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(localforage__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


const isObjectLiked = value => value.constructor.name === 'Array' || value.constructor.name === 'Object';
const rehydrate = (value, defaultValue) => {
  if (!value) return defaultValue;
  // if (value === 'false') str = false;
  // if (value === 'true') str = true;
  if (isObjectLiked(value)) {
    return value;
  }
  try {
    const parse = JSON.parse(value);
    return parse;
  } catch (err) {
    return defaultValue;
  }
};
const hydrate = value => {
  if (!isObjectLiked(value)) {
    return value;
  }
  return JSON.stringify(value);
};
const createMigration = (opts, data) => {
  return new Promise((resolve, reject) => {
    const key = `${opts.key}-version`;
    localforage__WEBPACK_IMPORTED_MODULE_1___default.a.getItem(key, (err, version) => {
      if (version !== opts.version) {
        data = opts.migrate(data);
        localforage__WEBPACK_IMPORTED_MODULE_1___default.a.setItem(opts.key, rehydrate(data), err => {
          if (err) return reject(err);
          localforage__WEBPACK_IMPORTED_MODULE_1___default.a.setItem(key, opts.version, err => {
            if (err) return reject(err);
            return resolve(data);
          });
        });
      } else {
        resolve(data);
      }
    });
  });
};
const config = {
  key: '@session-medsy',
  version: 1,
  migrate: state => {
    return _objectSpread({}, state);
  }
};
const useStorage = (state, setState) => {
  const {
    0: rehydrated,
    1: setRehydrated
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: error,
    1: setError
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    async function init() {
      await localforage__WEBPACK_IMPORTED_MODULE_1___default.a.getItem(config.key, (err, value) => {
        if (err) {
          setRehydrated(true);
          return setError(err);
        }
        // Migrate persisted data
        const restoredValue = rehydrate(value);
        if (typeof config.migrate === 'function') {
          createMigration(config, restoredValue).then(data => setState(data)).then(() => setRehydrated(true));
        } else {
          setState(restoredValue);
          setRehydrated(true);
        }
      });
    }
    init();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    // if (isNil(state) || isEmpty(state)) {
    //   localForage.removeItem(config.key);
    // }
    localforage__WEBPACK_IMPORTED_MODULE_1___default.a.setItem(config.key, hydrate(state));
  }, [state]);
  return {
    rehydrated,
    error
  };
};

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default, getServerSideProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var containers_layout_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! containers/layout/layout */ "./src/containers/layout/layout.tsx");
/* harmony import */ var containers_hero_block__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! containers/hero-block */ "./src/containers/hero-block.tsx");
/* harmony import */ var containers_products__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! containers/products */ "./src/containers/products.tsx");
/* harmony import */ var containers_call_to_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! containers/call-to-action */ "./src/containers/call-to-action.tsx");
/* harmony import */ var containers_how_it_works__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! containers/how-it-works */ "./src/containers/how-it-works.tsx");
/* harmony import */ var helpers_use_ref_scroll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! helpers/use-ref-scroll */ "./src/helpers/use-ref-scroll.tsx");
/* harmony import */ var contexts_search_use_search__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! contexts/search/use-search */ "./src/contexts/search/use-search.tsx");
/* harmony import */ var helpers_get_products__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! helpers/get-products */ "./src/helpers/get-products.tsx");
var _jsxFileName = "C:\\Photoshop2021x64\\Github Repo\\Eternal\\src\\pages\\index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










function Home({
  products
}) {
  const {
    elRef,
    scroll
  } = Object(helpers_use_ref_scroll__WEBPACK_IMPORTED_MODULE_7__["useRefScroll"])({
    percentOfElement: 0,
    percentOfContainer: 0,
    offsetPX: -100
  });
  const {
    searchTerm
  } = Object(contexts_search_use_search__WEBPACK_IMPORTED_MODULE_8__["useSearch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (searchTerm) return scroll();
  }, [searchTerm]);
  return __jsx(containers_layout_layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1, maximum-scale=1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "Description",
    content: "Put your description here.",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }), __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, "Eternal")), __jsx(containers_hero_block__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }), __jsx(containers_products__WEBPACK_IMPORTED_MODULE_4__["default"], {
    items: products,
    ref: elRef,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }), __jsx(containers_how_it_works__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }), __jsx(containers_call_to_action__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }));
}
async function getServerSideProps() {
  const products = await Object(helpers_get_products__WEBPACK_IMPORTED_MODULE_9__["getProducts"])();
  return {
    props: {
      products
    }
  };
}

/***/ }),

/***/ "google-spreadsheet":
/*!*************************************!*\
  !*** external "google-spreadsheet" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("google-spreadsheet");

/***/ }),

/***/ "localforage":
/*!******************************!*\
  !*** external "localforage" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("localforage");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "overlayscrollbars-react":
/*!******************************************!*\
  !*** external "overlayscrollbars-react" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("overlayscrollbars-react");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-multi-carousel":
/*!***************************************!*\
  !*** external "react-multi-carousel" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-multi-carousel");

/***/ }),

/***/ "react-number-format":
/*!**************************************!*\
  !*** external "react-number-format" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-number-format");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9taXR0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhdGgtbWF0Y2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcHJlcGFyZS1kZXN0aW5hdGlvbi50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yZXNvbHZlLXJld3JpdGVzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ljb25zL2Fycm93LWxlZnQudHN4Iiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaWNvbnMvYXJyb3ctcmlnaHQudHN4Iiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaWNvbnMvY2FydC1pY29uLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ljb25zL2NoZXZyb24tbGVmdC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pY29ucy9jaGV2cm9uLXJpZ2h0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ljb25zL2Nsb3NlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ljb25zL2VtcHR5LXN2Zy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pY29ucy9sb2dvLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ljb25zL21pbnVzLWljb24udHN4Iiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaWNvbnMvbm90LWZvdW5kLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ljb25zL3Bob25lLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ljb25zL3BsdXMtaWNvbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pY29ucy9zZWFyY2gtaWNvbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pY29ucy9zb2NpYWwtaWNvbnMudHN4Iiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaWNvbnMvc3VjY2Vzcy10aWNrLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ljb25zL3RyYXNoLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlL0NUQS1pbWFnZS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZS9jb3Vwb24tY2FyZC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZS9jdXN0b20tb3JkZXIucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2UvZmFzdC1kZWxpdmVyeS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZS9mZW1hbGUtY2FyZS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYWN0aXZlLWxpbmsudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2J1dHRvbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY2Fyb3VzZWwvY2Fyb3VzZWwudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NhcnQtaXRlbS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY291bnRlci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY3RhLWJsb2NrLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9mZWF0dXJlLWJsb2NrLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pY29uLWJ1dHRvbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5wdXQudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2l0ZW0tY2FyZC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2Nyb2xsYmFyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zZWFyY2gudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RleHRhcmVhLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy91dGlscy90aGVtZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9jYWxsLXRvLWFjdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lcnMvZHJhd2VyL2RyYXdlci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lcnMvZHJhd2VyL3ZpZXdzL2NhcnQudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb250YWluZXJzL2RyYXdlci92aWV3cy9jaGVja291dC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lcnMvZHJhd2VyL3ZpZXdzL21lbnVzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9kcmF3ZXIvdmlld3Mvbm8taXRlbS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lcnMvZHJhd2VyL3ZpZXdzL29yZGVyLXN1Ym1pdC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lcnMvZHJhd2VyL3ZpZXdzL3Byb2R1Y3QtZGV0YWlscy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lcnMvaGVyby1ibG9jay50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lcnMvaG93LWl0LXdvcmtzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9sYXlvdXQvZm9vdGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9sYXlvdXQvaGVhZGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9sYXlvdXQvbGF5b3V0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9wcm9kdWN0cy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRleHRzL2NhcnQvY2FydC5wcm92aWRlci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRleHRzL2NhcnQvY2FydC5yZWR1Y2VyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGV4dHMvZHJhd2VyL2RyYXdlci5wcm92aWRlci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRleHRzL3NlYXJjaC91c2Utc2VhcmNoLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy9jb25zdGFudHMudHN4Iiwid2VicGFjazovLy8uL3NyYy9oZWxwZXJzL2dldC1wcm9kdWN0cy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMvdXNlLXJlZi1zY3JvbGwudHN4Iiwid2VicGFjazovLy8uL3NyYy9oZWxwZXJzL3VzZS1zZWFyY2hhYmxlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy91c2Utc3RvcmFnZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJnb29nbGUtc3ByZWFkc2hlZXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2NhbGZvcmFnZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwib3ZlcmxheXNjcm9sbGJhcnMtcmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtbXVsdGktY2Fyb3VzZWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1udW1iZXItZm9ybWF0XCIiXSwibmFtZXMiOlsiY2FjaGVkT2JzZXJ2ZXIiLCJsaXN0ZW5lcnMiLCJNYXAiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsIndpbmRvdyIsInByZWZldGNoZWQiLCJnZXRPYnNlcnZlciIsInVuZGVmaW5lZCIsImVudHJpZXMiLCJmb3JFYWNoIiwiZW50cnkiLCJoYXMiLCJ0YXJnZXQiLCJjYiIsImdldCIsImlzSW50ZXJzZWN0aW5nIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJ1bm9ic2VydmUiLCJkZWxldGUiLCJyb290TWFyZ2luIiwibGlzdGVuVG9JbnRlcnNlY3Rpb25zIiwiZWwiLCJvYnNlcnZlciIsIm9ic2VydmUiLCJzZXQiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJwcmVmZXRjaCIsInJvdXRlciIsImhyZWYiLCJhcyIsIm9wdGlvbnMiLCJjYXRjaCIsImlzTW9kaWZpZWRFdmVudCIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsIm1ldGFLZXkiLCJjdHJsS2V5Iiwic2hpZnRLZXkiLCJhbHRLZXkiLCJuYXRpdmVFdmVudCIsIndoaWNoIiwibGlua0NsaWNrZWQiLCJlIiwicmVwbGFjZSIsInNoYWxsb3ciLCJzY3JvbGwiLCJub2RlTmFtZSIsInByZXZlbnREZWZhdWx0IiwiaW5kZXhPZiIsInRoZW4iLCJzdWNjZXNzIiwic2Nyb2xsVG8iLCJkb2N1bWVudCIsImJvZHkiLCJmb2N1cyIsIkxpbmsiLCJwcm9wcyIsImNyZWF0ZVByb3BFcnJvciIsImFyZ3MiLCJFcnJvciIsImtleSIsImV4cGVjdGVkIiwiYWN0dWFsIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsIk9iamVjdCIsImtleXMiLCJfIiwib3B0aW9uYWxQcm9wc0d1YXJkIiwicGFzc0hyZWYiLCJvcHRpb25hbFByb3BzIiwiaGFzV2FybmVkIiwiUmVhY3QiLCJ1c2VSZWYiLCJjdXJyZW50Iiwid2FybiIsInAiLCJjaGlsZEVsbSIsInNldENoaWxkRWxtIiwidXNlU3RhdGUiLCJwYXRobmFtZSIsInVzZU1lbW8iLCJyZXNvbHZlZEhyZWYiLCJ1c2VFZmZlY3QiLCJ0YWdOYW1lIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGRyZW4iLCJjaGlsZCIsIkNoaWxkcmVuIiwib25seSIsImNoaWxkUHJvcHMiLCJyZWYiLCJvbkNsaWNrIiwiZGVmYXVsdFByZXZlbnRlZCIsIm9uTW91c2VFbnRlciIsInByaW9yaXR5IiwidHlwZSIsImNsb25lRWxlbWVudCIsInJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoIiwicGF0aCIsImVuZHNXaXRoIiwic2xpY2UiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInByb2Nlc3MiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiZGVmaW5lUHJvcGVydHkiLCJSb3V0ZXIiLCJldmVudHMiLCJmaWVsZCIsImdldFJvdXRlciIsIm9uIiwiZXZlbnRGaWVsZCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic3Vic3RyaW5nIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsInVzZVJvdXRlciIsInVzZUNvbnRleHQiLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwibWFrZVB1YmxpY1JvdXRlckluc3RhbmNlIiwiX3JvdXRlciIsImluc3RhbmNlIiwicHJvcGVydHkiLCJhc3NpZ24iLCJ3aXRoUm91dGVyIiwiQ29tcG9zZWRDb21wb25lbnQiLCJXaXRoUm91dGVyV3JhcHBlciIsImdldEluaXRpYWxQcm9wcyIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJuYW1lIiwiZGlzcGxheU5hbWUiLCJtaXR0IiwiYWxsIiwiY3JlYXRlIiwiaGFuZGxlciIsInB1c2giLCJvZmYiLCJzcGxpY2UiLCJlbWl0IiwiZXZ0cyIsIm1hcCIsImJhc2VQYXRoIiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsImNhbmNlbGxlZCIsImhhc0Jhc2VQYXRoIiwic3RhcnRzV2l0aCIsImFkZEJhc2VQYXRoIiwiZGVsQmFzZVBhdGgiLCJsZW5ndGgiLCJpc0xvY2FsVVJMIiwidXJsIiwibG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsIlVSTCIsIm9yaWdpbiIsInJlc29sdmVIcmVmIiwiY3VycmVudFBhdGgiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJmaW5hbFVybCIsIlBBR0VfTE9BRF9FUlJPUiIsIlN5bWJvbCIsIm1hcmtMb2FkaW5nRXJyb3IiLCJwcmVwYXJlVXJsQXMiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsImZldGNoUmV0cnkiLCJhdHRlbXB0cyIsImNyZWRlbnRpYWxzIiwicmVzIiwib2siLCJzdGF0dXMiLCJqc29uIiwiZmV0Y2hOZXh0RGF0YSIsImRhdGFIcmVmIiwiaXNTZXJ2ZXJSZW5kZXIiLCJjb25zdHJ1Y3RvciIsInF1ZXJ5IiwiaW5pdGlhbFByb3BzIiwicGFnZUxvYWRlciIsIkFwcCIsIndyYXBBcHAiLCJDb21wb25lbnQiLCJpbml0aWFsU3R5bGVTaGVldHMiLCJzdWJzY3JpcHRpb24iLCJpc0ZhbGxiYWNrIiwicm91dGUiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic3ViIiwiY2xjIiwiX2JwcyIsIl93cmFwQXBwIiwiaXNTc3IiLCJfaW5GbGlnaHRSb3V0ZSIsIl9zaGFsbG93Iiwib25Qb3BTdGF0ZSIsInN0YXRlIiwiY2hhbmdlU3RhdGUiLCJfX04iLCJjaGFuZ2UiLCJzdHlsZVNoZWV0cyIsIl9fTl9TU0ciLCJfX05fU1NQIiwiX19ORVhUX0RBVEFfXyIsImF1dG9FeHBvcnQiLCJyZWxvYWQiLCJsb2NhdGlvbiIsImJhY2siLCJoaXN0b3J5IiwibWV0aG9kIiwiX2giLCJTVCIsInBlcmZvcm1hbmNlIiwibWFyayIsImFib3J0Q29tcG9uZW50TG9hZCIsImNsZWFuZWRBcyIsIm9ubHlBSGFzaENoYW5nZSIsInNjcm9sbFRvSGFzaCIsIm5vdGlmeSIsInBhZ2VzIiwiZ2V0UGFnZUxpc3QiLCJfX3Jld3JpdGVzIiwicmV3cml0ZXMiLCJwcm9taXNlZEJ1aWxkTWFuaWZlc3QiLCJwYXJzZWQiLCJzZWFyY2hQYXJhbXMiLCJfcmVzb2x2ZUhyZWYiLCJ1cmxJc05ldyIsInJlc29sdmVkQXMiLCJhc1BhdGhuYW1lIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJtaXNzaW5nUGFyYW1zIiwiZ3JvdXBzIiwiZmlsdGVyIiwicGFyYW0iLCJqb2luIiwicm91dGVJbmZvIiwiZ2V0Um91dGVJbmZvIiwiYXBwQ29tcCIsIm5leHQiLCJpc1ByZXJlbmRlcmVkIiwiaGFuZGxlUm91dGVJbmZvRXJyb3IiLCJsb2FkRXJyb3JGYWlsIiwicGFnZSIsImZldGNoQ29tcG9uZW50IiwiZ2lwRXJyIiwicm91dGVJbmZvRXJyIiwiY2FjaGVkUm91dGVJbmZvIiwibW9kIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwicmVxdWlyZSIsImdldERhdGFIcmVmIiwiX2dldERhdGEiLCJfZ2V0U3RhdGljRGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiZGF0YSIsImJlZm9yZVBvcFN0YXRlIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNwbGl0IiwibmV3VXJsTm9IYXNoIiwibmV3SGFzaCIsImhhc2giLCJpZEVsIiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JvbGxJbnRvVmlldyIsIm5hbWVFbCIsImdldEVsZW1lbnRzQnlOYW1lIiwicGFyc2VkSHJlZiIsImNsZWFuUGF0aG5hbWUiLCJpbmNsdWRlcyIsInNvbWUiLCJyZSIsInRlc3QiLCJQcm9taXNlIiwicHJlZmV0Y2hEYXRhIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwibG9hZFBhZ2UiLCJmbiIsImNhY2hlS2V5IiwiY3R4IiwiQXBwVHJlZSIsInNsYXNoZWRQcm90b2NvbHMiLCJmb3JtYXRVcmwiLCJ1cmxPYmoiLCJhdXRoIiwiaG9zdG5hbWUiLCJwcm90b2NvbCIsImhvc3QiLCJlbmNvZGVVUklDb21wb25lbnQiLCJwb3J0IiwiU3RyaW5nIiwicXVlcnlzdHJpbmciLCJ1cmxRdWVyeVRvU2VhcmNoUGFyYW1zIiwic2VhcmNoIiwic3Vic3RyIiwic2xhc2hlcyIsIlRFU1RfUk9VVEUiLCJpc0R5bmFtaWNSb3V0ZSIsIkRVTU1ZX0JBU0UiLCJwYXJzZVJlbGF0aXZlVXJsIiwicmVzb2x2ZWRCYXNlIiwibWF0Y2hlck9wdGlvbnMiLCJzZW5zaXRpdmUiLCJkZWxpbWl0ZXIiLCJkZWNvZGUiLCJkZWNvZGVQYXJhbSIsImN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMiLCJzdHJpY3QiLCJjdXN0b21Sb3V0ZSIsIm1hdGNoZXJSZWdleCIsInBhdGhUb1JlZ2V4cCIsIm1hdGNoZXIiLCJyZWdleHBUb0Z1bmN0aW9uIiwicGFyYW1zIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiY29kZSIsInByZXBhcmVEZXN0aW5hdGlvbiIsImRlc3RpbmF0aW9uIiwiYXBwZW5kUGFyYW1zVG9RdWVyeSIsInBhcnNlZERlc3RpbmF0aW9uIiwiZGVzdFF1ZXJ5IiwiZGVzdFBhdGgiLCJkZXN0UGF0aFBhcmFtS2V5cyIsImRlc3RQYXRoUGFyYW1zIiwiZGVzdGluYXRpb25Db21waWxlciIsImNvbXBpbGUiLCJ2YWxpZGF0ZSIsIm5ld1VybCIsInN0ck9yQXJyYXkiLCJ2YWx1ZSIsIkFycmF5IiwiaXNBcnJheSIsInF1ZXJ5Q29tcGlsZXIiLCJwYXJhbUtleXMiLCJzaG91bGRBZGRCYXNlUGF0aCIsImVuY29kZVVSSSIsIm1hdGNoIiwic2VhcmNoUGFyYW1zVG9VcmxRdWVyeSIsInVybFF1ZXJ5IiwicmVzdWx0IiwiVVJMU2VhcmNoUGFyYW1zIiwiaXRlbSIsImFwcGVuZCIsInNlYXJjaFBhcmFtc0xpc3QiLCJmcm9tIiwiY3VzdG9tUm91dGVNYXRjaGVyIiwicmVzb2x2ZVJld3JpdGVzIiwicmV3cml0ZSIsInNvdXJjZSIsImRlc3RSZXMiLCJnZXRSb3V0ZU1hdGNoZXIiLCJleGVjIiwic2x1Z05hbWUiLCJnIiwibSIsInBvcyIsInJlcGVhdCIsImVzY2FwZVJlZ2V4Iiwic3RyIiwicGFyc2VQYXJhbWV0ZXIiLCJvcHRpb25hbCIsImdldFJvdXRlUmVnZXgiLCJub3JtYWxpemVkUm91dGUiLCJzZWdtZW50cyIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJzZWdtZW50Iiwicm91dGVLZXlDaGFyQ29kZSIsInJvdXRlS2V5Q2hhckxlbmd0aCIsImdldFNhZmVSb3V0ZUtleSIsInJvdXRlS2V5IiwiaSIsImZyb21DaGFyQ29kZSIsInJvdXRlS2V5cyIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiY2xlYW5lZEtleSIsImludmFsaWRLZXkiLCJpc05hTiIsInBhcnNlSW50IiwiUmVnRXhwIiwibmFtZWRSZWdleCIsImV4ZWNPbmNlIiwidXNlZCIsImdldExvY2F0aW9uT3JpZ2luIiwiZ2V0VVJMIiwiZ2V0RGlzcGxheU5hbWUiLCJpc1Jlc1NlbnQiLCJmaW5pc2hlZCIsImhlYWRlcnNTZW50IiwibG9hZEdldEluaXRpYWxQcm9wcyIsInByb3RvdHlwZSIsInBhZ2VQcm9wcyIsInVybE9iamVjdEtleXMiLCJmb3JtYXRXaXRoVmFsaWRhdGlvbiIsIlNQIiwibWVhc3VyZSIsIkFycm93TGVmdCIsIl9yZWYiLCJjb2xvciIsIndpZHRoIiwiaGVpZ2h0IiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIiwiX19qc3giLCJfZXh0ZW5kcyIsInhtbG5zIiwidmlld0JveCIsIl9fc2VsZiIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwiZCIsInRyYW5zZm9ybSIsImZpbGwiLCJBcnJvd1JpZ2h0Iiwic3Ryb2tlIiwic3Ryb2tlTGluZWNhcCIsInN0cm9rZUxpbmVqb2luIiwic3Ryb2tlV2lkdGgiLCJ4MSIsIkNhcnRJY29uIiwiZmlsbFJ1bGUiLCJDaGV2cm9uTGVmdCIsImlkIiwiQ2hldnJvblJpZ2h0IiwiQ2xvc2VJY29uIiwiRW1wdHlDYXJ0U1ZHIiwiY3giLCJjeSIsInJ4IiwicnkiLCJQbHVzSWNvbiIsIk1pbnVzSWNvbiIsIk5vdEZvdW5kIiwib3BhY2l0eSIsInN0cm9rZU1pdGVybGltaXQiLCJTZWFyY2hJY29uIiwiRmFjZWJvb2siLCJUd2l0dGVyIiwiWW91dHViZSIsIkdpdGh1YiIsIkluc3RhZ3JhbSIsIkxpbmtlZGluIiwiU3VjY2Vzc0ljb24iLCJ2ZXJzaW9uIiwieCIsInkiLCJUcmFzaEljb24iLCJBY3RpdmVMaW5rIiwiYWN0aXZlQ2xhc3NOYW1lIiwiY2hpbGRDbGFzc05hbWUiLCJjbGFzc05hbWUiLCJ0cmltIiwiZGVmYXVsdFByb3BzIiwidmFyaWFudCIsInNpemUiLCJsb2FkaW5nIiwiZGlzYWJsZWQiLCJCdXR0b24iLCJjbGFzc05hbWVzIiwiQnV0dG9uQmFzZSIsIkJ1dHRvbkRpc2FibGUiLCJCdXR0b25WYXJpYW50IiwiQnV0dG9uU2l6ZSIsIm9uQ2xpY2tIYW5kbGVyIiwic3R5bGUiLCJib3JkZXJUb3BDb2xvciIsIlByZXZCdXR0b24iLCJBcnJvd0J1dHRvbkJhc2UiLCJQcmV2QnV0dG9uUmFkaXVzIiwiTmV4dEJ1dHRvbiIsIk5leHRCdXR0b25SYWRpdXMiLCJCdXR0b25Hcm91cCIsInByZXZpb3VzIiwiQnV0dG9uR3JvdXBCYXNlIiwicmVzcG9uc2l2ZSIsImRlc2t0b3AiLCJicmVha3BvaW50IiwibWF4IiwibWluIiwiaXRlbXMiLCJzbWFsbFNjcmVlbiIsInRhYmxldCIsIm1vYmlsZSIsIkNhcm91c2VsIiwiYXV0b1BsYXkiLCJpbmZpbml0ZSIsIml0ZW1DbGFzcyIsIk11bHRpQ2Fyb3VzZWwiLCJhcnJvd3MiLCJzc3IiLCJzaG93RG90cyIsInNsaWRlc1RvU2xpZGUiLCJjb250YWluZXJDbGFzcyIsImF1dG9QbGF5U3BlZWQiLCJyZW5kZXJCdXR0b25Hcm91cE91dHNpZGUiLCJhZGRpdGlvbmFsVHJhbnNmcm9tIiwiY3VzdG9tQnV0dG9uR3JvdXAiLCJpbmRleCIsIkZyYWdtZW50IiwibGluayIsIkNhcm91c2VsSXRlbUJhc2UiLCJ0aXRsZSIsInNyYyIsImltYWdlIiwiQ2Fyb3VzZWxJdGVtSW1hZ2UiLCJhbHQiLCJDYXJ0SXRlbSIsImFkZEl0ZW0iLCJyZW1vdmVJdGVtIiwidXNlQ2FydCIsIkNhcnRJdGVtQmFzZSIsIkNhcnRJdGVtSW1hZ2UiLCJDYXJ0SXRlbUNvbnRlbnQiLCJDYXJ0SXRlbU5hbWUiLCJDYXJ0SXRlbVNpbmdsZVByaWNlIiwiQ1VSUkVOQ1kiLCJwcmljZSIsIkNhcnRJdGVtVG90YWxXcmFwcGVyIiwiQ291bnRlciIsInF1YW50aXR5Iiwib25JbmNyZW1lbnQiLCJvbkRlY3JlbWVudCIsIkNhcnRJdGVtVG90YWxQcmljZSIsInRvRml4ZWQiLCJDb3VudGVyQmFzZSIsIkNvdW50ZXJTaXplIiwiSWNvbkJ1dHRvbiIsIk1pbnVzIiwiVHJhc2giLCJDb3VudGVyVmFsdWUiLCJQbHVzIiwiQ2FsbFRvQWN0aW9uIiwiYmFja2dyb3VuZCIsInBhcmVudENsYXNzTmFtZSIsIkNUQUJhc2UiLCJjb250ZW50Q2xhc3NOYW1lcyIsIkNUQUNvbnRlbnQiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJGZWF0dXJlQkxvY2siLCJkZXNjcmlwdGlvbiIsImNvdW50ZXJCZyIsImNvdW50ZXIiLCJGZWF0dXJlQmFzZSIsIkZlYXR1cmVDb3VudGVyIiwiYmFja2dyb3VuZENvbG9yIiwiRmVhdHVyZUNvbnRlbnQiLCJGZWF0dXJlVGl0bGUiLCJGZWF0dXJlRGV0YWlscyIsIkljb25CdG5CYXNlIiwicmVhZE9ubHkiLCJwbGFjZWhvbGRlciIsImluaXRpYWxWYWx1ZSIsIklucHV0IiwiZm9yd2FyZFJlZiIsIm9uQ2hhbmdlIiwib25Gb2N1cyIsIm9uQmx1ciIsImlucHV0UmVmIiwidXNlSW1wZXJhdGl2ZUhhbmRsZSIsImluaXRWYWx1ZSIsInNldEluaXRWYWx1ZSIsImNoYW5nZUhhbmRsZXIiLCJmb2N1c0hhbmRsZXIiLCJibHVySGFuZGxlciIsIklucHV0QmFzZSIsIlRleHRCb3hDb21tb25CYXNlIiwiVGV4dEJveERpc2FibGUiLCJUZXh0Qm94RW5hYmxlIiwiaHRtbEZvciIsImF1dG9Db21wbGV0ZSIsIkl0ZW1DYXJkIiwiSXRlbUNhcmRCYXNlIiwiSXRlbUNhcmRJbWFnZSIsIkl0ZW1DYXJkQ29udGVudCIsIkl0ZW1DYXJkUHJpY2UiLCJTY3JvbGxiYXIiLCJPdmVybGF5U2Nyb2xsYmFyc0NvbXBvbmVudCIsIl9vYmplY3RTcHJlYWQiLCJzY3JvbGxiYXJzIiwiYXV0b0hpZGUiLCJ0b3VjaFN1cHBvcnQiLCJTZWFyY2giLCJzZWFyY2hUZXJtIiwic2V0U2VhcmNoVGVybSIsInVzZVNlYXJjaCIsIm9uU2VhcmNoIiwib25TdWJtaXQiLCJTZWFyY2hCYXNlIiwibm9WYWxpZGF0ZSIsInJvbGUiLCJTZWFyY2hJY29uV3JhcHBlciIsIlNlYXJjaElucHV0IiwiVGV4dGFyZWEiLCJUZXh0YXJlYUJhc2UiLCJwcmltYXJ5Iiwic2Vjb25kYXJ5IiwiZWxldmF0aW9uIiwiYmlnIiwibm9ybWFsIiwic21hbGwiLCJTZWN0aW9uVGl0bGVCYXNlIiwiU2VjdGlvblRpdGxlSGVhZGluZyIsIlNlY3Rpb25UaXRsZVN1YlRpdGxlIiwiU2VjdGlvblRpdGxlQmFyQmFzZSIsIlNlY3Rpb25UaXRsZUJhciIsIlNlY3Rpb25UaXRsZUJhckhlYWRpbmciLCJTZWN0aW9uVGl0bGVCYXJTdWJUaXRsZSIsIkFjdGl2ZURvdHNCYXNlIiwiVGVzdGltb25pYWxQcmV2QnV0dG9uUmFkaXVzIiwiVGVzdGltb25pYWxOZXh0QnV0dG9uUmFkaXVzIiwiVGVzdGltb25pYWxCYXNlIiwiUXVvdGVCYXNlIiwiVGVzdGltb25pYWxSZXZpZXciLCJUZXN0aW1vbmlhbFJldmlld2VyQmFzZSIsIlRlc3RpbW9uaWFsSXRlbUltYWdlQmFzZSIsIlJldmlld2VyTmFtZSIsIkNUQUJsb2NrIiwiQ1RBSW1hZ2UiLCJDYXJ0RHJhd2VyIiwiZGlzcGF0Y2giLCJEcmF3ZXJDb250ZXh0IiwiaGFuZGxlQ2xvc2UiLCJwYXlsb2FkIiwib3BlbiIsImRyYXdlckNvbXBvbmVudCIsInNob3dEZXRhaWxzIiwiUHJvZHVjdERldGFpbHMiLCJzaG93Q2FydCIsIkNhcnQiLCJzaG93Q2hlY2tvdXQiLCJDaGVja291dCIsIkRyYXdlciIsIm1lbnUiLCJEcmF3ZXJNZW51IiwiY2FsY3VsYXRlUHJpY2UiLCJoaWRlQ2FydCIsIk5vSXRlbSIsImluaXRpYWxTdGF0ZSIsInBob25lX251bWJlciIsImFkZHJlc3MiLCJwb3N0YWxfY29kZSIsInN1aXRlIiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsInNldFN1Y2Nlc3MiLCJzZXRMb2FkaW5nIiwic2V0RXJyb3IiLCJjbGVhckNhcnQiLCJoaWRlQ2hlY2tvdXQiLCJzdWJtaXRPcmRlciIsImZldGNoIiwiSlNPTiIsInN0cmluZ2lmeSIsInRvU3RyaW5nIiwiZW1haWwiLCJiaWxsX2Ftb3VudCIsIk9yZGVyU3VibWl0IiwiTnVtYmVyRm9ybWF0IiwiZm9ybWF0IiwibWFzayIsIm9uVmFsdWVDaGFuZ2UiLCJtYXJnaW5SaWdodCIsIm1hcmdpbkxlZnQiLCJtZW51cyIsInNvY2lhbCIsImljb24iLCJoaWRlTWVudSIsIkxvZ28iLCJfZ2V0SXRlbSIsInZpc2liaWxpdHkiLCJzZXRWaXNpYmlsaXR5IiwiZ2V0SXRlbSIsImNvdW50IiwidG9nZ2xlVmlzaWJpbGl0eSIsImhpZGVEZXRhaWxzIiwiYWRkVG9DYXJ0IiwiZG9zYWdlIiwic3Vic3RhbmNlIiwibWFudWZhY3R1cmVyIiwiRGVsaXZlcnlJbWciLCJDb3Vwb25JbWciLCJPcmRlckltZyIsIkZlbWFsZUNhcmVJbWciLCJIZXJvQmxvY2siLCJIb3dJdFdvcmtzIiwiRmVhdHVyZUJsb2NrIiwiY3VycmVudFllYXIiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJGb290ZXIiLCJIZWFkZXIiLCJpdGVtc0NvdW50Iiwic2hvd01lbnUiLCJpc0hvbWUiLCJQaG9uZUljb24iLCJmb250U2l6ZSIsInRvcCIsInJpZ2h0IiwiTGF5b3V0IiwibWluSGVpZ2h0IiwiV2Via2l0T3ZlcmZsb3dTY3JvbGxpbmciLCJQcm9kdWN0cyIsInNlYXJjaGFibGVJdGVtcyIsInVzZVNlYXJjaGFibGUiLCJDYXJ0Q29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJJTklUSUFMX1NUQVRFIiwiaXNPcGVuIiwiY291cG9uIiwidXNlQ2FydEFjdGlvbnMiLCJpbml0aWFsQ2FydCIsIl9zdGF0ZSRpdGVtczMiLCJ1c2VSZWR1Y2VyIiwicmVkdWNlciIsImFkZEl0ZW1IYW5kbGVyIiwicmVtb3ZlSXRlbUhhbmRsZXIiLCJjbGVhckl0ZW1Gcm9tQ2FydEhhbmRsZXIiLCJjbGVhckNhcnRIYW5kbGVyIiwidG9nZ2xlQ2FydEhhbmRsZXIiLCJjb3Vwb25IYW5kbGVyIiwicmVtb3ZlQ291cG9uSGFuZGxlciIsInJlaHlkcmF0ZUxvY2FsU3RhdGUiLCJpc0luQ2FydEhhbmRsZXIiLCJfc3RhdGUkaXRlbXMiLCJnZXRJdGVtSGFuZGxlciIsIl9zdGF0ZSRpdGVtczIiLCJmaW5kIiwiZ2V0Q2FydEl0ZW1zUHJpY2UiLCJjYXJ0SXRlbXNUb3RhbFByaWNlIiwiZ2V0Q2FydEl0ZW1zVG90YWxQcmljZSIsImdldERpc2NvdW50IiwiX3N0YXRlJGNvdXBvbiIsInRvdGFsIiwiZGlzY291bnQiLCJOdW1iZXIiLCJkaXNjb3VudEluUGVyY2VudCIsImdldEl0ZW1zQ291bnQiLCJyZWR1Y2UiLCJhY2MiLCJDYXJ0UHJvdmlkZXIiLCJfc3RhdGUkaXRlbXM0IiwicmVoeWRyYXRlZCIsInVzZVN0b3JhZ2UiLCJQcm92aWRlciIsImNhcnRJdGVtc0NvdW50IiwicmVtb3ZlSXRlbUZyb21DYXJ0IiwiaXNJbkNhcnQiLCJ0b2dnbGVDYXJ0IiwiY2FsY3VsYXRlU3ViVG90YWxQcmljZSIsImFwcGx5Q291cG9uIiwicmVtb3ZlQ291cG9uIiwiY2FsY3VsYXRlRGlzY291bnQiLCJwcm9kdWN0Iiwic2FsZVByaWNlIiwiYWRkSXRlbVRvQ2FydCIsImFjdGlvbiIsImV4aXN0aW5nQ2FydEl0ZW1JbmRleCIsImZpbmRJbmRleCIsIm5ld1N0YXRlIiwibmV3UXVhbnRpdHkiLCJjbGVhckl0ZW1Gcm9tQ2FydCIsIkRyYXdlclByb3ZpZGVyIiwic2VhcmNoQ29udGV4dCIsIlNlYXJjaFByb3ZpZGVyIiwiZ2V0UHJvZHVjdHMiLCJlbnYiLCJHT09HTEVfU0VSVklDRV9BQ0NPVU5UX0NMSUVOVF9FTUFJTCIsIkdPT0dMRV9TRVJWSUNFX0FDQ09VTlRfUFJJVkFURV9LRVkiLCJHT09HTEVfU1BSRUFEU0hFRVRfSURfUFJPRFVDVCIsIkdvb2dsZVNwcmVhZHNoZWV0IiwiZG9jIiwidXNlU2VydmljZUFjY291bnRBdXRoIiwiY2xpZW50X2VtYWlsIiwicHJpdmF0ZV9rZXkiLCJsb2FkSW5mbyIsInNoZWV0Iiwic2hlZXRzQnlJbmRleCIsInJvd3MiLCJnZXRSb3dzIiwicHJvZHVjdHMiLCJpc0NsaWVudCIsInNjcm9sbFRvUGVyY2VudCIsImNvbnRhaW5lciIsInBlcmNlbnRPZkVsZW1lbnQiLCJvZmZzZXRQWCIsImRpcmVjdGlvbiIsInBlcmNlbnRPZkNvbnRhaW5lciIsInJlY3QiLCJnZXRDbGllbnRSZWN0cyIsImlzVmVydGljYWwiLCJyZWZTaXplIiwiZWxlbVNjcm9sbCIsInNjcm9sbFNpemUiLCJpbm5lckhlaWdodCIsImlubmVyV2lkdGgiLCJzY3JvbGxIZWlnaHQiLCJzY3JvbGxXaWR0aCIsImFkZE9mZnNldCIsImNvbnRhaW5lclNjcm9sbCIsInNjcm9sbFkiLCJzY3JvbGxYIiwibmV3U2Nyb2xsIiwic2Nyb2xsT2JqIiwibGVmdCIsImJlaGF2aW9yIiwidXNlUmVmU2Nyb2xsIiwib25Nb3VudCIsImVsUmVmIiwidXNlQ2FsbGJhY2siLCJzZWFyY2hUZXh0Iiwic2VhcmNoUHJvcHMiLCJyZWdleCIsInNwIiwiaXNPYmplY3RMaWtlZCIsInJlaHlkcmF0ZSIsImRlZmF1bHRWYWx1ZSIsInBhcnNlIiwiaHlkcmF0ZSIsImNyZWF0ZU1pZ3JhdGlvbiIsIm9wdHMiLCJyZXNvbHZlIiwicmVqZWN0IiwibG9jYWxGb3JhZ2UiLCJtaWdyYXRlIiwic2V0SXRlbSIsImNvbmZpZyIsInNldFN0YXRlIiwic2V0UmVoeWRyYXRlZCIsImluaXQiLCJyZXN0b3JlZFZhbHVlIiwiSG9tZSIsIkhlYWQiLCJjb250ZW50IiwiZ2V0U2VydmVyU2lkZVByb3BzIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUN4RkEsd0U7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3Qzs7Ozs7Ozs7Ozs7QUNOQSxjQUFjLG1CQUFPLENBQUMsMEVBQW1COztBQUV6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNB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O0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsQ0FBTSxDQUFDLEVBQ1BULEtBQUE7SUFBQUksTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLENBQU0sQ0FBQyxFQUNQVCxLQUFBO0lBQUFJLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxDQUFNLENBQUMsRUFDUFQsS0FBQTtJQUFBSSxNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsQ0FBTSxDQUFDLEVBQ1BULEtBQUE7SUFBQUksTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLENBQU0sQ0FBQyxFQUNQVCxLQUFBO0lBQUFJLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxDQUFNLENBQUMsRUFDUFQsS0FBQTtJQUFBSSxNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsQ0FBTSxDQUFDLEVBQ1BULEtBQUE7SUFBQUksTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLENBQU0sQ0FBQyxFQUNQVCxLQUFBO0lBQUFJLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxDQUFNLENBQUMsRUFDUFQsS0FBQTtJQUFBSSxNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFB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QUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLENBQ2IsQ0FDQSxDQUNGLENBQUMsRUFDSlQsS0FBQTtJQUFHLGFBQVUsWUFBWTtJQUFDVyxTQUFTLEVBQUMseUJBQXlCO0lBQUFQLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUMzRFQsS0FBQTtJQUFHLGFBQVUsWUFBWTtJQUFBSSxNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FDdkJULEtBQUE7SUFDRSxhQUFVLFlBQVk7SUFDdEJVLENBQUMsRUFBQyw2R0FBNkc7SUFDL0dDLFNBQVMsRUFBQyw4QkFBOEI7SUFDeENDLElBQUksRUFBRWhCLEtBQU07SUFBQVEsTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLENBQ2IsQ0FDQSxDQUNGLENBQUMsRUFDSlQsS0FBQTtJQUFHLGFBQVUsWUFBWTtJQUFDVyxTQUFTLEVBQUMseUJBQXlCO0lBQUFQLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUMzRFQsS0FBQTtJQUFHLGFBQVUsWUFBWTtJQUFBSSxNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FDdkJULEtBQUE7SUFDRSxhQUFVLFlBQVk7SUFDdEJVLENBQUMsRUFBQyw2R0FBNkc7SUFDL0dDLFNBQVMsRUFBQyw4QkFBOEI7SUFDeENDLElBQUksRUFBRWhCLEtBQU07SUFBQVEsTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLENBQ2IsQ0FDQSxDQUNG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WUFBQTtJQUFBO0VBQUEsQ0FBRSxDQUFDLEVBQ3pDVCxLQUFBLENBQUM0UiwrREFBVTtJQUFBeFIsTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLENBQUUsQ0FBQyxFQUNkVCxLQUFBLENBQUNtSSxpRUFBWTtJQUFBL0gsTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLENBQUUsQ0FDVCxDQUFDO0FBRWI7QUFFTyxlQUFld2Esa0JBQWtCQSxDQUFBLEVBQUc7RUFDekMsTUFBTXRELFFBQVEsR0FBRyxNQUFNZix3RUFBVyxDQUFDLENBQUM7RUFDcEMsT0FBTztJQUNMbHRCLEtBQUssRUFBRTtNQUNMaXVCO0lBQ0Y7RUFDRixDQUFDO0FBQ0gsQzs7Ozs7Ozs7Ozs7QUNoREEsK0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsaUQ7Ozs7Ozs7Ozs7O0FDQUEsZ0QiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9wYWdlcy9pbmRleC50c3hcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsImltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgYWRkQmFzZVBhdGgsXG4gIGlzTG9jYWxVUkwsXG4gIE5leHRSb3V0ZXIsXG4gIFByZWZldGNoT3B0aW9ucyxcbiAgcmVzb2x2ZUhyZWYsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG50eXBlIFJlcXVpcmVkS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gbmV2ZXIgOiBLXG59W2tleW9mIFRdXG50eXBlIE9wdGlvbmFsS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gSyA6IG5ldmVyXG59W2tleW9mIFRdXG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxufVxudHlwZSBMaW5rUHJvcHNSZXF1aXJlZCA9IFJlcXVpcmVkS2V5czxMaW5rUHJvcHM+XG50eXBlIExpbmtQcm9wc09wdGlvbmFsID0gT3B0aW9uYWxLZXlzPExpbmtQcm9wcz5cblxubGV0IGNhY2hlZE9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuY29uc3QgbGlzdGVuZXJzID0gbmV3IE1hcDxFbGVtZW50LCAoKSA9PiB2b2lkPigpXG5jb25zdCBJbnRlcnNlY3Rpb25PYnNlcnZlciA9XG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyIDogbnVsbFxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIGdldE9ic2VydmVyKCk6IEludGVyc2VjdGlvbk9ic2VydmVyIHwgdW5kZWZpbmVkIHtcbiAgLy8gUmV0dXJuIHNoYXJlZCBpbnN0YW5jZSBvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBhbHJlYWR5IGNyZWF0ZWRcbiAgaWYgKGNhY2hlZE9ic2VydmVyKSB7XG4gICAgcmV0dXJuIGNhY2hlZE9ic2VydmVyXG4gIH1cblxuICAvLyBPbmx5IGNyZWF0ZSBzaGFyZWQgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgc3VwcG9ydGVkIGluIGJyb3dzZXJcbiAgaWYgKCFJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIHJldHVybiAoY2FjaGVkT2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXG4gICAgKGVudHJpZXMpID0+IHtcbiAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgaWYgKCFsaXN0ZW5lcnMuaGFzKGVudHJ5LnRhcmdldCkpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNiID0gbGlzdGVuZXJzLmdldChlbnRyeS50YXJnZXQpIVxuICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwKSB7XG4gICAgICAgICAgY2FjaGVkT2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBsaXN0ZW5lcnMuZGVsZXRlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBjYigpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICB7IHJvb3RNYXJnaW46ICcyMDBweCcgfVxuICApKVxufVxuXG5jb25zdCBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMgPSAoZWw6IEVsZW1lbnQsIGNiOiAoKSA9PiB2b2lkKSA9PiB7XG4gIGNvbnN0IG9ic2VydmVyID0gZ2V0T2JzZXJ2ZXIoKVxuICBpZiAoIW9ic2VydmVyKSB7XG4gICAgcmV0dXJuICgpID0+IHt9XG4gIH1cblxuICBvYnNlcnZlci5vYnNlcnZlKGVsKVxuICBsaXN0ZW5lcnMuc2V0KGVsLCBjYilcbiAgcmV0dXJuICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgfVxuICAgIGxpc3RlbmVycy5kZWxldGUoZWwpXG4gIH1cbn1cblxuZnVuY3Rpb24gcHJlZmV0Y2goXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBvcHRpb25zPzogUHJlZmV0Y2hPcHRpb25zXG4pOiB2b2lkIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm5cbiAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfSlcbiAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXNdID0gdHJ1ZVxufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQpIHtcbiAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgcmV0dXJuIChcbiAgICAodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICBldmVudC5tZXRhS2V5IHx8XG4gICAgZXZlbnQuY3RybEtleSB8fFxuICAgIGV2ZW50LnNoaWZ0S2V5IHx8XG4gICAgZXZlbnQuYWx0S2V5IHx8IC8vIHRyaWdnZXJzIHJlc291cmNlIGRvd25sb2FkXG4gICAgKGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKVxuICApXG59XG5cbmZ1bmN0aW9uIGxpbmtDbGlja2VkKFxuICBlOiBSZWFjdC5Nb3VzZUV2ZW50LFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgcmVwbGFjZT86IGJvb2xlYW4sXG4gIHNoYWxsb3c/OiBib29sZWFuLFxuICBzY3JvbGw/OiBib29sZWFuXG4pOiB2b2lkIHtcbiAgY29uc3QgeyBub2RlTmFtZSB9ID0gZS5jdXJyZW50VGFyZ2V0XG5cbiAgaWYgKG5vZGVOYW1lID09PSAnQScgJiYgKGlzTW9kaWZpZWRFdmVudChlKSB8fCAhaXNMb2NhbFVSTChocmVmKSkpIHtcbiAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbiAgICByZXR1cm5cbiAgfVxuXG4gIGUucHJldmVudERlZmF1bHQoKVxuXG4gIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICBpZiAoc2Nyb2xsID09IG51bGwpIHtcbiAgICBzY3JvbGwgPSBhcy5pbmRleE9mKCcjJykgPCAwXG4gIH1cblxuICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgcm91dGVyW3JlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7IHNoYWxsb3cgfSkudGhlbihcbiAgICAoc3VjY2VzczogYm9vbGVhbikgPT4ge1xuICAgICAgaWYgKCFzdWNjZXNzKSByZXR1cm5cbiAgICAgIGlmIChzY3JvbGwpIHtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKVxuICAgICAgfVxuICAgIH1cbiAgKVxufVxuXG5mdW5jdGlvbiBMaW5rKHByb3BzOiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjxMaW5rUHJvcHM+KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3M6IHtcbiAgICAgIGtleTogc3RyaW5nXG4gICAgICBleHBlY3RlZDogc3RyaW5nXG4gICAgICBhY3R1YWw6IHN0cmluZ1xuICAgIH0pIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAgICAgIGBGYWlsZWQgcHJvcCB0eXBlOiBUaGUgcHJvcCBcXGAke2FyZ3Mua2V5fVxcYCBleHBlY3RzIGEgJHthcmdzLmV4cGVjdGVkfSBpbiBcXGA8TGluaz5cXGAsIGJ1dCBnb3QgXFxgJHthcmdzLmFjdHVhbH1cXGAgaW5zdGVhZC5gICtcbiAgICAgICAgICAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgID8gXCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiXG4gICAgICAgICAgICA6ICcnKVxuICAgICAgKVxuICAgIH1cblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzUmVxdWlyZWQsIHRydWU+ID0ge1xuICAgICAgaHJlZjogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wczogTGlua1Byb3BzUmVxdWlyZWRbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgcmVxdWlyZWRQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNSZXF1aXJlZFtdXG4gICAgcmVxdWlyZWRQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc1JlcXVpcmVkKSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSAnaHJlZicpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzW2tleV0gPT0gbnVsbCB8fFxuICAgICAgICAgICh0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnKVxuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHByb3BzW2tleV0gPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzT3B0aW9uYWwsIHRydWU+ID0ge1xuICAgICAgYXM6IHRydWUsXG4gICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgc2Nyb2xsOiB0cnVlLFxuICAgICAgc2hhbGxvdzogdHJ1ZSxcbiAgICAgIHBhc3NIcmVmOiB0cnVlLFxuICAgICAgcHJlZmV0Y2g6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHM6IExpbmtQcm9wc09wdGlvbmFsW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIG9wdGlvbmFsUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzT3B0aW9uYWxbXVxuICAgIG9wdGlvbmFsUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNPcHRpb25hbCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSAmJlxuICAgICAgICAgIHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJlxuICAgICAgICAgIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0J1xuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGtleSA9PT0gJ3JlcGxhY2UnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Njcm9sbCcgfHxcbiAgICAgICAga2V5ID09PSAnc2hhbGxvdycgfHxcbiAgICAgICAga2V5ID09PSAncGFzc0hyZWYnIHx8XG4gICAgICAgIGtleSA9PT0gJ3ByZWZldGNoJ1xuICAgICAgKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICE9IG51bGwgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdib29sZWFuJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2Bib29sZWFuYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBjb25zdCBoYXNXYXJuZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpXG4gICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgIClcbiAgICB9XG4gIH1cbiAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuXG4gIGNvbnN0IFtjaGlsZEVsbSwgc2V0Q2hpbGRFbG1dID0gUmVhY3QudXNlU3RhdGU8RWxlbWVudD4oKVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHBhdGhuYW1lID0gKHJvdXRlciAmJiByb3V0ZXIucGF0aG5hbWUpIHx8ICcvJ1xuXG4gIGNvbnN0IHsgaHJlZiwgYXMgfSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5ocmVmKVxuICAgIHJldHVybiB7XG4gICAgICBocmVmOiByZXNvbHZlZEhyZWYsXG4gICAgICBhczogcHJvcHMuYXMgPyByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuYXMpIDogcmVzb2x2ZWRIcmVmLFxuICAgIH1cbiAgfSwgW3BhdGhuYW1lLCBwcm9wcy5ocmVmLCBwcm9wcy5hc10pXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoXG4gICAgICBwICYmXG4gICAgICBJbnRlcnNlY3Rpb25PYnNlcnZlciAmJlxuICAgICAgY2hpbGRFbG0gJiZcbiAgICAgIGNoaWxkRWxtLnRhZ05hbWUgJiZcbiAgICAgIGlzTG9jYWxVUkwoaHJlZilcbiAgICApIHtcbiAgICAgIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gICAgICBjb25zdCBpc1ByZWZldGNoZWQgPSBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhc11cbiAgICAgIGlmICghaXNQcmVmZXRjaGVkKSB7XG4gICAgICAgIHJldHVybiBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMoY2hpbGRFbG0sICgpID0+IHtcbiAgICAgICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW3AsIGNoaWxkRWxtLCBocmVmLCBhcywgcm91dGVyXSlcblxuICBsZXQgeyBjaGlsZHJlbiwgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsIH0gPSBwcm9wc1xuICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICBjaGlsZHJlbiA9IDxhPntjaGlsZHJlbn08L2E+XG4gIH1cblxuICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgY29uc3QgY2hpbGQ6IGFueSA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gIGNvbnN0IGNoaWxkUHJvcHM6IHtcbiAgICBvbk1vdXNlRW50ZXI/OiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIG9uQ2xpY2s6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgaHJlZj86IHN0cmluZ1xuICAgIHJlZj86IGFueVxuICB9ID0ge1xuICAgIHJlZjogKGVsOiBhbnkpID0+IHtcbiAgICAgIGlmIChlbCkgc2V0Q2hpbGRFbG0oZWwpXG5cbiAgICAgIGlmIChjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZikge1xuICAgICAgICBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGQucmVmKGVsKVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGNoaWxkLnJlZi5jdXJyZW50ID0gZWxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICB9XG4gICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwpXG4gICAgICB9XG4gICAgfSxcbiAgfVxuXG4gIGlmIChwKSB7XG4gICAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKVxuICAgICAgfVxuICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywgeyBwcmlvcml0eTogdHJ1ZSB9KVxuICAgIH1cbiAgfVxuXG4gIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgaWYgKHByb3BzLnBhc3NIcmVmIHx8IChjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKSkge1xuICAgIGNoaWxkUHJvcHMuaHJlZiA9IGFkZEJhc2VQYXRoKGFzKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcylcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiLyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aFxufVxuXG4vKipcbiAqIE5vcm1hbGl6ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBhY2NvcmRpbmcgdG8gdGhlIGB0cmFpbGluZ1NsYXNoYCBvcHRpb25cbiAqIGluIGBuZXh0LmNvbmZpZy5qc2AuXG4gKi9cbmV4cG9ydCBjb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSFxuICA/IChwYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKVxuICAgICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nXG4gICAgICB9XG4gICAgfVxuICA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoXG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IFJvdXRlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQnXG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55XG5cbnR5cGUgUm91dGVyQXJncyA9IENsYXNzQXJndW1lbnRzPHR5cGVvZiBSb3V0ZXI+XG5cbnR5cGUgU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBSb3V0ZXIgfCBudWxsXG4gIHJlYWR5Q2FsbGJhY2tzOiBBcnJheTwoKSA9PiBhbnk+XG4gIHJlYWR5KGNiOiAoKSA9PiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCB7IFJvdXRlciwgTmV4dFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBOZXh0Um91dGVyXG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICdwYXRobmFtZScsXG4gICdyb3V0ZScsXG4gICdxdWVyeScsXG4gICdhc1BhdGgnLFxuICAnY29tcG9uZW50cycsXG4gICdpc0ZhbGxiYWNrJyxcbiAgJ2Jhc2VQYXRoJyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlLCB3ZSBuZWVkIHRvIHJldHVyblxuICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgZ2V0KCkge1xuICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSBhcyBzdHJpbmdcbiAgICB9LFxuICB9KVxufSlcblxuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICA7KHNpbmdsZXRvblJvdXRlciBhcyBhbnkpW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gIH1cbn0pXG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YClcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKHt9LCBfcm91dGVyW3Byb3BlcnR5XSkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KSB7XG4gICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCByb3V0ZXI9e3VzZVJvdXRlcigpfSB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuICA7KFdpdGhSb3V0ZXJXcmFwcGVyIGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wcyA9IChDb21wb3NlZENvbXBvbmVudCBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHNcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBuYW1lID1cbiAgICAgIENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWBcbiAgfVxuXG4gIHJldHVybiBXaXRoUm91dGVyV3JhcHBlclxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIFRva2VuaXplIGlucHV0IHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gbGV4ZXIoc3RyKSB7XG4gICAgdmFyIHRva2VucyA9IFtdO1xuICAgIHZhciBpID0gMDtcbiAgICB3aGlsZSAoaSA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoYXIgPSBzdHJbaV07XG4gICAgICAgIGlmIChjaGFyID09PSBcIipcIiB8fCBjaGFyID09PSBcIitcIiB8fCBjaGFyID09PSBcIj9cIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk1PRElGSUVSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJcXFxcXCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFU0NBUEVEX0NIQVJcIiwgaW5kZXg6IGkrKywgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwie1wiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiT1BFTlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwifVwiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiQ0xPU0VcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIjpcIikge1xuICAgICAgICAgICAgdmFyIG5hbWUgPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIHdoaWxlIChqIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHZhciBjb2RlID0gc3RyLmNoYXJDb2RlQXQoaik7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIC8vIGAwLTlgXG4gICAgICAgICAgICAgICAgKGNvZGUgPj0gNDggJiYgY29kZSA8PSA1NykgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYEEtWmBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gNjUgJiYgY29kZSA8PSA5MCkgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYGEtemBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gOTcgJiYgY29kZSA8PSAxMjIpIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBfYFxuICAgICAgICAgICAgICAgICAgICBjb2RlID09PSA5NSkge1xuICAgICAgICAgICAgICAgICAgICBuYW1lICs9IHN0cltqKytdO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIW5hbWUpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1pc3NpbmcgcGFyYW1ldGVyIG5hbWUgYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJOQU1FXCIsIGluZGV4OiBpLCB2YWx1ZTogbmFtZSB9KTtcbiAgICAgICAgICAgIGkgPSBqO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiKFwiKSB7XG4gICAgICAgICAgICB2YXIgY291bnQgPSAxO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm4gPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlBhdHRlcm4gY2Fubm90IHN0YXJ0IHdpdGggXFxcIj9cXFwiIGF0IFwiICsgaik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aGlsZSAoaiA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIlxcXFxcIikge1xuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdICsgc3RyW2orK107XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIilcIikge1xuICAgICAgICAgICAgICAgICAgICBjb3VudC0tO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY291bnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGorKztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHN0cltqXSA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0cltqICsgMV0gIT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2FwdHVyaW5nIGdyb3VwcyBhcmUgbm90IGFsbG93ZWQgYXQgXCIgKyBqKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvdW50KVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmJhbGFuY2VkIHBhdHRlcm4gYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIGlmICghcGF0dGVybilcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWlzc2luZyBwYXR0ZXJuIGF0IFwiICsgaSk7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiUEFUVEVSTlwiLCBpbmRleDogaSwgdmFsdWU6IHBhdHRlcm4gfSk7XG4gICAgICAgICAgICBpID0gajtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJDSEFSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgfVxuICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFTkRcIiwgaW5kZXg6IGksIHZhbHVlOiBcIlwiIH0pO1xuICAgIHJldHVybiB0b2tlbnM7XG59XG4vKipcbiAqIFBhcnNlIGEgc3RyaW5nIGZvciB0aGUgcmF3IHRva2Vucy5cbiAqL1xuZnVuY3Rpb24gcGFyc2Uoc3RyLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgdG9rZW5zID0gbGV4ZXIoc3RyKTtcbiAgICB2YXIgX2EgPSBvcHRpb25zLnByZWZpeGVzLCBwcmVmaXhlcyA9IF9hID09PSB2b2lkIDAgPyBcIi4vXCIgOiBfYTtcbiAgICB2YXIgZGVmYXVsdFBhdHRlcm4gPSBcIlteXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgXCIvIz9cIikgKyBcIl0rP1wiO1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIga2V5ID0gMDtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIHBhdGggPSBcIlwiO1xuICAgIHZhciB0cnlDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgaWYgKGkgPCB0b2tlbnMubGVuZ3RoICYmIHRva2Vuc1tpXS50eXBlID09PSB0eXBlKVxuICAgICAgICAgICAgcmV0dXJuIHRva2Vuc1tpKytdLnZhbHVlO1xuICAgIH07XG4gICAgdmFyIG11c3RDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdHJ5Q29uc3VtZSh0eXBlKTtcbiAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIHZhciBfYSA9IHRva2Vuc1tpXSwgbmV4dFR5cGUgPSBfYS50eXBlLCBpbmRleCA9IF9hLmluZGV4O1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5leHBlY3RlZCBcIiArIG5leHRUeXBlICsgXCIgYXQgXCIgKyBpbmRleCArIFwiLCBleHBlY3RlZCBcIiArIHR5cGUpO1xuICAgIH07XG4gICAgdmFyIGNvbnN1bWVUZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gXCJcIjtcbiAgICAgICAgdmFyIHZhbHVlO1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgd2hpbGUgKCh2YWx1ZSA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIikpKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIHdoaWxlIChpIDwgdG9rZW5zLmxlbmd0aCkge1xuICAgICAgICB2YXIgY2hhciA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpO1xuICAgICAgICB2YXIgbmFtZSA9IHRyeUNvbnN1bWUoXCJOQU1FXCIpO1xuICAgICAgICB2YXIgcGF0dGVybiA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpO1xuICAgICAgICBpZiAobmFtZSB8fCBwYXR0ZXJuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY2hhciB8fCBcIlwiO1xuICAgICAgICAgICAgaWYgKHByZWZpeGVzLmluZGV4T2YocHJlZml4KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHByZWZpeDtcbiAgICAgICAgICAgICAgICBwcmVmaXggPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgICAgICBwYXRoID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lIHx8IGtleSsrLFxuICAgICAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBwYXR0ZXJuIHx8IGRlZmF1bHRQYXR0ZXJuLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiB0cnlDb25zdW1lKFwiTU9ESUZJRVJcIikgfHwgXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdmFsdWUgPSBjaGFyIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIik7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgcGF0aCArPSB2YWx1ZTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgIHBhdGggPSBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIHZhciBvcGVuID0gdHJ5Q29uc3VtZShcIk9QRU5cIik7XG4gICAgICAgIGlmIChvcGVuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIHZhciBuYW1lXzEgPSB0cnlDb25zdW1lKFwiTkFNRVwiKSB8fCBcIlwiO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm5fMSA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpIHx8IFwiXCI7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIG11c3RDb25zdW1lKFwiQ0xPU0VcIik7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZV8xIHx8IChwYXR0ZXJuXzEgPyBrZXkrKyA6IFwiXCIpLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IG5hbWVfMSAmJiAhcGF0dGVybl8xID8gZGVmYXVsdFBhdHRlcm4gOiBwYXR0ZXJuXzEsXG4gICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBzdWZmaXgsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUoXCJNT0RJRklFUlwiKSB8fCBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIG11c3RDb25zdW1lKFwiRU5EXCIpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZXhwb3J0cy5wYXJzZSA9IHBhcnNlO1xuLyoqXG4gKiBDb21waWxlIGEgc3RyaW5nIHRvIGEgdGVtcGxhdGUgZnVuY3Rpb24gZm9yIHRoZSBwYXRoLlxuICovXG5mdW5jdGlvbiBjb21waWxlKHN0ciwgb3B0aW9ucykge1xuICAgIHJldHVybiB0b2tlbnNUb0Z1bmN0aW9uKHBhcnNlKHN0ciwgb3B0aW9ucyksIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5jb21waWxlID0gY29tcGlsZTtcbi8qKlxuICogRXhwb3NlIGEgbWV0aG9kIGZvciB0cmFuc2Zvcm1pbmcgdG9rZW5zIGludG8gdGhlIHBhdGggZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvRnVuY3Rpb24odG9rZW5zLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgcmVGbGFncyA9IGZsYWdzKG9wdGlvbnMpO1xuICAgIHZhciBfYSA9IG9wdGlvbnMuZW5jb2RlLCBlbmNvZGUgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfYSwgX2IgPSBvcHRpb25zLnZhbGlkYXRlLCB2YWxpZGF0ZSA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2I7XG4gICAgLy8gQ29tcGlsZSBhbGwgdGhlIHRva2VucyBpbnRvIHJlZ2V4cHMuXG4gICAgdmFyIG1hdGNoZXMgPSB0b2tlbnMubWFwKGZ1bmN0aW9uICh0b2tlbikge1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChcIl4oPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikkXCIsIHJlRmxhZ3MpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHZhciBwYXRoID0gXCJcIjtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc1tpXTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHZhbHVlID0gZGF0YSA/IGRhdGFbdG9rZW4ubmFtZV0gOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB2YXIgb3B0aW9uYWwgPSB0b2tlbi5tb2RpZmllciA9PT0gXCI/XCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiO1xuICAgICAgICAgICAgdmFyIHJlcGVhdCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIrXCI7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlcGVhdCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgcmVwZWF0LCBidXQgZ290IGFuIGFycmF5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25hbClcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgYmUgZW1wdHlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdmFsdWUubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUodmFsdWVbal0sIHRva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBhbGwgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBtYXRjaCBcXFwiXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCJcXFwiLCBidXQgZ290IFxcXCJcIiArIHNlZ21lbnQgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUoU3RyaW5nKHZhbHVlKSwgdG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG1hdGNoIFxcXCJcIiArIHRva2VuLnBhdHRlcm4gKyBcIlxcXCIsIGJ1dCBnb3QgXFxcIlwiICsgc2VnbWVudCArIFwiXFxcIlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbmFsKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgdmFyIHR5cGVPZk1lc3NhZ2UgPSByZXBlYXQgPyBcImFuIGFycmF5XCIgOiBcImEgc3RyaW5nXCI7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBiZSBcIiArIHR5cGVPZk1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH07XG59XG5leHBvcnRzLnRva2Vuc1RvRnVuY3Rpb24gPSB0b2tlbnNUb0Z1bmN0aW9uO1xuLyoqXG4gKiBDcmVhdGUgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgc3BlYy5cbiAqL1xuZnVuY3Rpb24gbWF0Y2goc3RyLCBvcHRpb25zKSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICB2YXIgcmUgPSBwYXRoVG9SZWdleHAoc3RyLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLm1hdGNoID0gbWF0Y2g7XG4vKipcbiAqIENyZWF0ZSBhIHBhdGggbWF0Y2ggZnVuY3Rpb24gZnJvbSBgcGF0aC10by1yZWdleHBgIG91dHB1dC5cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5kZWNvZGUsIGRlY29kZSA9IF9hID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9hO1xuICAgIHJldHVybiBmdW5jdGlvbiAocGF0aG5hbWUpIHtcbiAgICAgICAgdmFyIG0gPSByZS5leGVjKHBhdGhuYW1lKTtcbiAgICAgICAgaWYgKCFtKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB2YXIgcGF0aCA9IG1bMF0sIGluZGV4ID0gbS5pbmRleDtcbiAgICAgICAgdmFyIHBhcmFtcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgaWYgKG1baV0gPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJjb250aW51ZVwiO1xuICAgICAgICAgICAgdmFyIGtleSA9IGtleXNbaSAtIDFdO1xuICAgICAgICAgICAgaWYgKGtleS5tb2RpZmllciA9PT0gXCIqXCIgfHwga2V5Lm1vZGlmaWVyID09PSBcIitcIikge1xuICAgICAgICAgICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBtW2ldLnNwbGl0KGtleS5wcmVmaXggKyBrZXkuc3VmZml4KS5tYXAoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkZWNvZGUodmFsdWUsIGtleSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gZGVjb2RlKG1baV0sIGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgbS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgX2xvb3BfMShpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBwYXRoOiBwYXRoLCBpbmRleDogaW5kZXgsIHBhcmFtczogcGFyYW1zIH07XG4gICAgfTtcbn1cbmV4cG9ydHMucmVnZXhwVG9GdW5jdGlvbiA9IHJlZ2V4cFRvRnVuY3Rpb247XG4vKipcbiAqIEVzY2FwZSBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGVzY2FwZVN0cmluZyhzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbLisqPz1eIToke30oKVtcXF18L1xcXFxdKS9nLCBcIlxcXFwkMVwiKTtcbn1cbi8qKlxuICogR2V0IHRoZSBmbGFncyBmb3IgYSByZWdleHAgZnJvbSB0aGUgb3B0aW9ucy5cbiAqL1xuZnVuY3Rpb24gZmxhZ3Mob3B0aW9ucykge1xuICAgIHJldHVybiBvcHRpb25zICYmIG9wdGlvbnMuc2Vuc2l0aXZlID8gXCJcIiA6IFwiaVwiO1xufVxuLyoqXG4gKiBQdWxsIG91dCBrZXlzIGZyb20gYSByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpIHtcbiAgICBpZiAoIWtleXMpXG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIC8vIFVzZSBhIG5lZ2F0aXZlIGxvb2thaGVhZCB0byBtYXRjaCBvbmx5IGNhcHR1cmluZyBncm91cHMuXG4gICAgdmFyIGdyb3VwcyA9IHBhdGguc291cmNlLm1hdGNoKC9cXCgoPyFcXD8pL2cpO1xuICAgIGlmIChncm91cHMpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBncm91cHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGtleXMucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogaSxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiBcIlwiLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuLyoqXG4gKiBUcmFuc2Zvcm0gYW4gYXJyYXkgaW50byBhIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlUb1JlZ2V4cChwYXRocywga2V5cywgb3B0aW9ucykge1xuICAgIHZhciBwYXJ0cyA9IHBhdGhzLm1hcChmdW5jdGlvbiAocGF0aCkgeyByZXR1cm4gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpLnNvdXJjZTsgfSk7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoXCIoPzpcIiArIHBhcnRzLmpvaW4oXCJ8XCIpICsgXCIpXCIsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbi8qKlxuICogQ3JlYXRlIGEgcGF0aCByZWdleHAgZnJvbSBzdHJpbmcgaW5wdXQuXG4gKi9cbmZ1bmN0aW9uIHN0cmluZ1RvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdG9rZW5zVG9SZWdleHAocGFyc2UocGF0aCwgb3B0aW9ucyksIGtleXMsIG9wdGlvbnMpO1xufVxuLyoqXG4gKiBFeHBvc2UgYSBmdW5jdGlvbiBmb3IgdGFraW5nIHRva2VucyBhbmQgcmV0dXJuaW5nIGEgUmVnRXhwLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb1JlZ2V4cCh0b2tlbnMsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IG9wdGlvbnMuc3RyaWN0LCBzdHJpY3QgPSBfYSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfYSwgX2IgPSBvcHRpb25zLnN0YXJ0LCBzdGFydCA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2IsIF9jID0gb3B0aW9ucy5lbmQsIGVuZCA9IF9jID09PSB2b2lkIDAgPyB0cnVlIDogX2MsIF9kID0gb3B0aW9ucy5lbmNvZGUsIGVuY29kZSA9IF9kID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9kO1xuICAgIHZhciBlbmRzV2l0aCA9IFwiW1wiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZW5kc1dpdGggfHwgXCJcIikgKyBcIl18JFwiO1xuICAgIHZhciBkZWxpbWl0ZXIgPSBcIltcIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCBcIi8jP1wiKSArIFwiXVwiO1xuICAgIHZhciByb3V0ZSA9IHN0YXJ0ID8gXCJeXCIgOiBcIlwiO1xuICAgIC8vIEl0ZXJhdGUgb3ZlciB0aGUgdG9rZW5zIGFuZCBjcmVhdGUgb3VyIHJlZ2V4cCBzdHJpbmcuXG4gICAgZm9yICh2YXIgX2kgPSAwLCB0b2tlbnNfMSA9IHRva2VuczsgX2kgPCB0b2tlbnNfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zXzFbX2ldO1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICByb3V0ZSArPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbi5wcmVmaXgpKTtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuLnN1ZmZpeCkpO1xuICAgICAgICAgICAgaWYgKHRva2VuLnBhdHRlcm4pIHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5cylcbiAgICAgICAgICAgICAgICAgICAga2V5cy5wdXNoKHRva2VuKTtcbiAgICAgICAgICAgICAgICBpZiAocHJlZml4IHx8IHN1ZmZpeCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodG9rZW4ubW9kaWZpZXIgPT09IFwiK1wiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIipcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1vZCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiA/IFwiP1wiIDogXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIigoPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikoPzpcIiArIHN1ZmZpeCArIHByZWZpeCArIFwiKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpKSopXCIgKyBzdWZmaXggKyBcIilcIiArIG1vZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIihcIiArIHRva2VuLnBhdHRlcm4gKyBcIilcIiArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKFwiICsgdG9rZW4ucGF0dGVybiArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGVuZCkge1xuICAgICAgICBpZiAoIXN0cmljdClcbiAgICAgICAgICAgIHJvdXRlICs9IGRlbGltaXRlciArIFwiP1wiO1xuICAgICAgICByb3V0ZSArPSAhb3B0aW9ucy5lbmRzV2l0aCA/IFwiJFwiIDogXCIoPz1cIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgZW5kVG9rZW4gPSB0b2tlbnNbdG9rZW5zLmxlbmd0aCAtIDFdO1xuICAgICAgICB2YXIgaXNFbmREZWxpbWl0ZWQgPSB0eXBlb2YgZW5kVG9rZW4gPT09IFwic3RyaW5nXCJcbiAgICAgICAgICAgID8gZGVsaW1pdGVyLmluZGV4T2YoZW5kVG9rZW5bZW5kVG9rZW4ubGVuZ3RoIC0gMV0pID4gLTFcbiAgICAgICAgICAgIDogLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICAgICAgZW5kVG9rZW4gPT09IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKCFzdHJpY3QpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBkZWxpbWl0ZXIgKyBcIig/PVwiICsgZW5kc1dpdGggKyBcIikpP1wiO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNFbmREZWxpbWl0ZWQpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD89XCIgKyBkZWxpbWl0ZXIgKyBcInxcIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAocm91dGUsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbmV4cG9ydHMudG9rZW5zVG9SZWdleHAgPSB0b2tlbnNUb1JlZ2V4cDtcbi8qKlxuICogTm9ybWFsaXplIHRoZSBnaXZlbiBwYXRoIHN0cmluZywgcmV0dXJuaW5nIGEgcmVndWxhciBleHByZXNzaW9uLlxuICpcbiAqIEFuIGVtcHR5IGFycmF5IGNhbiBiZSBwYXNzZWQgaW4gZm9yIHRoZSBrZXlzLCB3aGljaCB3aWxsIGhvbGQgdGhlXG4gKiBwbGFjZWhvbGRlciBrZXkgZGVzY3JpcHRpb25zLiBGb3IgZXhhbXBsZSwgdXNpbmcgYC91c2VyLzppZGAsIGBrZXlzYCB3aWxsXG4gKiBjb250YWluIGBbeyBuYW1lOiAnaWQnLCBkZWxpbWl0ZXI6ICcvJywgb3B0aW9uYWw6IGZhbHNlLCByZXBlYXQ6IGZhbHNlIH1dYC5cbiAqL1xuZnVuY3Rpb24gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAocGF0aCBpbnN0YW5jZW9mIFJlZ0V4cClcbiAgICAgICAgcmV0dXJuIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHBhdGgpKVxuICAgICAgICByZXR1cm4gYXJyYXlUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLnBhdGhUb1JlZ2V4cCA9IHBhdGhUb1JlZ2V4cDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiLyogZ2xvYmFsIF9fTkVYVF9EQVRBX18gKi9cbi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCxcbiAgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5pbXBvcnQgeyBHb29kUGFnZUNhY2hlLCBTdHlsZVNoZWV0VHVwbGUgfSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcGFnZS1sb2FkZXInXG5pbXBvcnQgeyBkZW5vcm1hbGl6ZVBhZ2VQYXRoIH0gZnJvbSAnLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aCdcbmltcG9ydCBtaXR0LCB7IE1pdHRFbWl0dGVyIH0gZnJvbSAnLi4vbWl0dCdcbmltcG9ydCB7XG4gIEFwcENvbnRleHRUeXBlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0TG9jYXRpb25PcmlnaW4sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3V0aWxzL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHJlc29sdmVSZXdyaXRlcyBmcm9tICcuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMnXG5pbXBvcnQgeyBnZXRSb3V0ZU1hdGNoZXIgfSBmcm9tICcuL3V0aWxzL3JvdXRlLW1hdGNoZXInXG5pbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi91dGlscy9yb3V0ZS1yZWdleCdcblxuaW50ZXJmYWNlIFRyYW5zaXRpb25PcHRpb25zIHtcbiAgc2hhbGxvdz86IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIE5leHRIaXN0b3J5U3RhdGUge1xuICB1cmw6IHN0cmluZ1xuICBhczogc3RyaW5nXG4gIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG59XG5cbnR5cGUgSGlzdG9yeVN0YXRlID0gbnVsbCB8IHsgX19OOiBmYWxzZSB9IHwgKHsgX19OOiB0cnVlIH0gJiBOZXh0SGlzdG9yeVN0YXRlKVxuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSwge1xuICAgIGNhbmNlbGxlZDogdHJ1ZSxcbiAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0Jhc2VQYXRoKHBhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gcGF0aCA9PT0gYmFzZVBhdGggfHwgcGF0aC5zdGFydHNXaXRoKGJhc2VQYXRoICsgJy8nKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgLy8gd2Ugb25seSBhZGQgdGhlIGJhc2VwYXRoIG9uIHJlbGF0aXZlIHVybHNcbiAgcmV0dXJuIGJhc2VQYXRoICYmIHBhdGguc3RhcnRzV2l0aCgnLycpXG4gICAgPyBwYXRoID09PSAnLydcbiAgICAgID8gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goYmFzZVBhdGgpXG4gICAgICA6IGJhc2VQYXRoICsgcGF0aFxuICAgIDogcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKSB8fCAnLydcbn1cblxuLyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgcm91dGFibGUgYnkgdGhlIE5leHQuanMgcm91dGVyIChicm93c2VyIG9ubHkpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSkgcmV0dXJuIHRydWVcbiAgdHJ5IHtcbiAgICAvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbiAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbilcbiAgICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpbiAmJiBoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSlcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbi8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlSHJlZihjdXJyZW50UGF0aDogc3RyaW5nLCBocmVmOiBVcmwpOiBzdHJpbmcge1xuICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICBjb25zdCBiYXNlID0gbmV3IFVSTChjdXJyZW50UGF0aCwgJ2h0dHA6Ly9uJylcbiAgY29uc3QgdXJsQXNTdHJpbmcgPVxuICAgIHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiBmb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKVxuICB0cnkge1xuICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSlcbiAgICBmaW5hbFVybC5wYXRobmFtZSA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKVxuICAgIC8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG4gICAgcmV0dXJuIGZpbmFsVXJsLm9yaWdpbiA9PT0gYmFzZS5vcmlnaW5cbiAgICAgID8gZmluYWxVcmwuaHJlZi5zbGljZShmaW5hbFVybC5vcmlnaW4ubGVuZ3RoKVxuICAgICAgOiBmaW5hbFVybC5ocmVmXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gdXJsQXNTdHJpbmdcbiAgfVxufVxuXG5jb25zdCBQQUdFX0xPQURfRVJST1IgPSBTeW1ib2woJ1BBR0VfTE9BRF9FUlJPUicpXG5leHBvcnQgZnVuY3Rpb24gbWFya0xvYWRpbmdFcnJvcihlcnI6IEVycm9yKTogRXJyb3Ige1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgUEFHRV9MT0FEX0VSUk9SLCB7fSlcbn1cblxuZnVuY3Rpb24gcHJlcGFyZVVybEFzKHJvdXRlcjogTmV4dFJvdXRlciwgdXJsOiBVcmwsIGFzOiBVcmwpIHtcbiAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gIHJldHVybiB7XG4gICAgdXJsOiBhZGRCYXNlUGF0aChyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIHVybCkpLFxuICAgIGFzOiBhcyA/IGFkZEJhc2VQYXRoKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgYXMpKSA6IGFzLFxuICB9XG59XG5cbmV4cG9ydCB0eXBlIEJhc2VSb3V0ZXIgPSB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBOZXh0Um91dGVyID0gQmFzZVJvdXRlciAmXG4gIFBpY2s8XG4gICAgUm91dGVyLFxuICAgIHwgJ3B1c2gnXG4gICAgfCAncmVwbGFjZSdcbiAgICB8ICdyZWxvYWQnXG4gICAgfCAnYmFjaydcbiAgICB8ICdwcmVmZXRjaCdcbiAgICB8ICdiZWZvcmVQb3BTdGF0ZSdcbiAgICB8ICdldmVudHMnXG4gICAgfCAnaXNGYWxsYmFjaydcbiAgPlxuXG5leHBvcnQgdHlwZSBQcmVmZXRjaE9wdGlvbnMgPSB7XG4gIHByaW9yaXR5PzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBQcml2YXRlUm91dGVJbmZvID0ge1xuICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogUmVjb3JkPHN0cmluZywgYW55PlxuICBlcnI/OiBFcnJvclxuICBlcnJvcj86IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wcyA9IFBpY2s8UHJpdmF0ZVJvdXRlSW5mbywgJ0NvbXBvbmVudCcgfCAnZXJyJz4gJiB7XG4gIHJvdXRlcjogUm91dGVyXG59ICYgUmVjb3JkPHN0cmluZywgYW55PlxuZXhwb3J0IHR5cGUgQXBwQ29tcG9uZW50ID0gQ29tcG9uZW50VHlwZTxBcHBQcm9wcz5cblxudHlwZSBTdWJzY3JpcHRpb24gPSAoZGF0YTogUHJpdmF0ZVJvdXRlSW5mbywgQXBwOiBBcHBDb21wb25lbnQpID0+IFByb21pc2U8dm9pZD5cblxudHlwZSBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBOZXh0SGlzdG9yeVN0YXRlKSA9PiBib29sZWFuXG5cbnR5cGUgQ29tcG9uZW50TG9hZENhbmNlbCA9ICgoKSA9PiB2b2lkKSB8IG51bGxcblxudHlwZSBIaXN0b3J5TWV0aG9kID0gJ3JlcGxhY2VTdGF0ZScgfCAncHVzaFN0YXRlJ1xuXG5jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiA9XG4gIHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04gJiZcbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiB3aW5kb3cuaGlzdG9yeVxuXG5mdW5jdGlvbiBmZXRjaFJldHJ5KHVybDogc3RyaW5nLCBhdHRlbXB0czogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgIC8vXG4gICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgIC8vID4gb3B0aW9uLlxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAvL1xuICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgIGlmIChhdHRlbXB0cyA+IDEgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgcmV0dXJuIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cyAtIDEpXG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcy5qc29uKClcbiAgfSlcbn1cblxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZjogc3RyaW5nLCBpc1NlcnZlclJlbmRlcjogYm9vbGVhbikge1xuICByZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMSkuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgIC8vIGxvb3AuXG4gICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgbWFya0xvYWRpbmdFcnJvcihlcnIpXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBQcml2YXRlUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgX2luRmxpZ2h0Um91dGU/OiBzdHJpbmdcbiAgX3NoYWxsb3c/OiBib29sZWFuXG5cbiAgc3RhdGljIGV2ZW50czogTWl0dEVtaXR0ZXIgPSBtaXR0KClcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHtcbiAgICAgIGluaXRpYWxQcm9wcyxcbiAgICAgIHBhZ2VMb2FkZXIsXG4gICAgICBBcHAsXG4gICAgICB3cmFwQXBwLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgaW5pdGlhbFN0eWxlU2hlZXRzLFxuICAgICAgZXJyLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgaXNGYWxsYmFjayxcbiAgICB9OiB7XG4gICAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICAgICAgaW5pdGlhbFByb3BzOiBhbnlcbiAgICAgIHBhZ2VMb2FkZXI6IGFueVxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBpbml0aWFsU3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gICAgICBBcHA6IEFwcENvbXBvbmVudFxuICAgICAgd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgfVxuICApIHtcbiAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICB0aGlzLnJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fVxuICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzOiBpbml0aWFsU3R5bGVTaGVldHMsXG4gICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgIGVycixcbiAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0ge1xuICAgICAgQ29tcG9uZW50OiBBcHAgYXMgQ29tcG9uZW50VHlwZSxcbiAgICAgIHN0eWxlU2hlZXRzOiBbXG4gICAgICAgIC8qIC9fYXBwIGRvZXMgbm90IG5lZWQgaXRzIHN0eWxlc2hlZXRzIG1hbmFnZWQgKi9cbiAgICAgIF0sXG4gICAgfVxuXG4gICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlclxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICB0aGlzLmFzUGF0aCA9XG4gICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICBpc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0ID8gcGF0aG5hbWUgOiBhc1xuICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aFxuICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uXG4gICAgdGhpcy5jbGMgPSBudWxsXG4gICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHBcbiAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICB0aGlzLmlzU3NyID0gdHJ1ZVxuXG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFja1xuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgICBnZXRVUkwoKVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcblxuICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJ1xuXG4gICAgICAgICAgbGV0IHNjcm9sbERlYm91bmNlVGltZW91dDogdW5kZWZpbmVkIHwgTm9kZUpTLlRpbWVvdXRcblxuICAgICAgICAgIGNvbnN0IGRlYm91bmNlZFNjcm9sbFNhdmUgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KSBjbGVhclRpbWVvdXQoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KVxuXG4gICAgICAgICAgICBzY3JvbGxEZWJvdW5jZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgeyB1cmwsIGFzOiBjdXJBcywgb3B0aW9ucyB9ID0gaGlzdG9yeS5zdGF0ZVxuICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBjdXJBcyxcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICAgICAgICAgICAgICBfTl9YOiB3aW5kb3cuc2Nyb2xsWCxcbiAgICAgICAgICAgICAgICAgIF9OX1k6IHdpbmRvdy5zY3JvbGxZLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0sIDEwKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBkZWJvdW5jZWRTY3JvbGxTYXZlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZSA9IChlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlIGFzIEhpc3RvcnlTdGF0ZVxuXG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgZ2V0VVJMKClcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghc3RhdGUuX19OKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMgfSA9IHN0YXRlXG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgIGlmICh0aGlzLmlzU3NyICYmIGFzID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2UoXG4gICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgIHVybCxcbiAgICAgIGFzLFxuICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICBzaGFsbG93OiBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5fc2hhbGxvdyxcbiAgICAgIH0pXG4gICAgKVxuICB9XG5cbiAgcmVsb2FkKCk6IHZvaWQge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9cbiAgYmFjaygpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcHVzaCh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICByZXBsYWNlKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICBhc3luYyBjaGFuZ2UoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKHVybCkpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2gpIHtcbiAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZVxuICAgIH1cbiAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgaWYgKFNUKSB7XG4gICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUpXG4gICAgfVxuXG4gICAgY29uc3QgY2xlYW5lZEFzID0gaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXNcbiAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXNcblxuICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuXG4gICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSkge1xuICAgICAgdGhpcy5hc1BhdGggPSBjbGVhbmVkQXNcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMpXG4gICAgICAvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG4gICAgICB0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpXG4gICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0pXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4gICAgLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4gICAgLy8gd2hlbiByZXdyaXR0ZW4gdG9cbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG4gICAgY29uc3QgeyBfX3Jld3JpdGVzOiByZXdyaXRlcyB9ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLnByb21pc2VkQnVpbGRNYW5pZmVzdFxuXG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgbGV0IHsgcGF0aG5hbWUsIHNlYXJjaFBhcmFtcyB9ID0gcGFyc2VkXG5cbiAgICBwYXJzZWQgPSB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWQsIHBhZ2VzKSBhcyB0eXBlb2YgcGFyc2VkXG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICB9XG5cbiAgICBjb25zdCBxdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKVxuXG4gICAgLy8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuICAgIC8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbiAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxuICAgIHBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgID8gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVsQmFzZVBhdGgocGF0aG5hbWUpKVxuICAgICAgOiBwYXRobmFtZVxuXG4gICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgaWYgKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykpIHtcbiAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnXG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9uc1xuXG4gICAgLy8gd2UgbmVlZCB0byByZXNvbHZlIHRoZSBhcyB2YWx1ZSB1c2luZyByZXdyaXRlcyBmb3IgZHluYW1pYyBTU0dcbiAgICAvLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG4gICAgbGV0IHJlc29sdmVkQXMgPSBhc1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMpIHtcbiAgICAgIHJlc29sdmVkQXMgPSByZXNvbHZlUmV3cml0ZXMoXG4gICAgICAgIGFzLFxuICAgICAgICBwYWdlcyxcbiAgICAgICAgYmFzZVBhdGgsXG4gICAgICAgIHJld3JpdGVzLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgKHA6IHN0cmluZykgPT4gdGhpcy5fcmVzb2x2ZUhyZWYoeyBwYXRobmFtZTogcCB9LCBwYWdlcykucGF0aG5hbWUhXG4gICAgICApXG4gICAgfVxuICAgIHJlc29sdmVkQXMgPSBkZWxCYXNlUGF0aChyZXNvbHZlZEFzKVxuXG4gICAgaWYgKGlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgY29uc3QgeyBwYXRobmFtZTogYXNQYXRobmFtZSB9ID0gcGFyc2VSZWxhdGl2ZVVybChyZXNvbHZlZEFzKVxuICAgICAgY29uc3Qgcm91dGVSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gICAgICBjb25zdCByb3V0ZU1hdGNoID0gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpXG4gICAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoXG4gICAgICAgICAgKHBhcmFtKSA9PiAhcXVlcnlbcGFyYW1dXG4gICAgICAgIClcblxuICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgIGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGAgK1xuICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbmNvbXBhdGlibGUtaHJlZi1hc2BcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpXG4gICAgICB9XG4gICAgfVxuXG4gICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMpXG5cbiAgICB0cnkge1xuICAgICAgY29uc3Qgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICBzaGFsbG93XG4gICAgICApXG4gICAgICBsZXQgeyBlcnJvciB9ID0gcm91dGVJbmZvXG5cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzKVxuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IGFwcENvbXA6IGFueSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnRcbiAgICAgICAgOyh3aW5kb3cgYXMgYW55KS5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAhKHJvdXRlSW5mby5Db21wb25lbnQgYXMgYW55KS5nZXRJbml0aWFsUHJvcHNcbiAgICAgIH1cblxuICAgICAgYXdhaXQgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lISwgcXVlcnksIGNsZWFuZWRBcywgcm91dGVJbmZvKS5jYXRjaChcbiAgICAgICAgKGUpID0+IHtcbiAgICAgICAgICBpZiAoZS5jYW5jZWxsZWQpIGVycm9yID0gZXJyb3IgfHwgZVxuICAgICAgICAgIGVsc2UgdGhyb3cgZVxuICAgICAgICB9XG4gICAgICApXG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzKVxuICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gJiYgJ19OX1gnIGluIG9wdGlvbnMpIHtcbiAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oKG9wdGlvbnMgYXMgYW55KS5fTl9YLCAob3B0aW9ucyBhcyBhbnkpLl9OX1kpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzKVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB0aGlzLl9zaGFsbG93ID0gb3B0aW9ucy5zaGFsbG93XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgX19OOiB0cnVlLFxuICAgICAgICB9IGFzIEhpc3RvcnlTdGF0ZSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cblxuICAgIGlmIChQQUdFX0xPQURfRVJST1IgaW4gZXJyIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMpXG5cbiAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgcGFnZTogQ29tcG9uZW50LCBzdHlsZVNoZWV0cyB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChcbiAgICAgICAgJy9fZXJyb3InXG4gICAgICApXG4gICAgICBjb25zdCByb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHMsXG4gICAgICAgIGVycixcbiAgICAgICAgZXJyb3I6IGVycixcbiAgICAgIH1cblxuICAgICAgdHJ5IHtcbiAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgZXJyLFxuICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICB9IGFzIGFueSlcbiAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpXG4gICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKHJvdXRlSW5mb0VyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgdHJ1ZSlcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBzaGFsbG93OiBib29sZWFuID0gZmFsc2VcbiAgKTogUHJvbWlzZTxQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cblxuICAgICAgaWYgKHNoYWxsb3cgJiYgY2FjaGVkUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgIHJldHVybiBjYWNoZWRSb3V0ZUluZm9cbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgID8gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbigocmVzKSA9PiAoe1xuICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgIHN0eWxlU2hlZXRzOiByZXMuc3R5bGVTaGVldHMsXG4gICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgfSkpXG5cbiAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IGRhdGFIcmVmOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICBkYXRhSHJlZiA9IHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICBkZWxCYXNlUGF0aChhcyksXG4gICAgICAgICAgX19OX1NTR1xuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YTxQcml2YXRlUm91dGVJbmZvPigoKSA9PlxuICAgICAgICBfX05fU1NHXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoXG4gICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICApXG4gICAgICApXG4gICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzKVxuICAgIH1cbiAgfVxuXG4gIHNldChcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mb1xuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZVxuXG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgdGhpcy5hc1BhdGggPSBhc1xuICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWVcbiAgICBpZiAoaGFzaCA9PT0gJycpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIF9yZXNvbHZlSHJlZihwYXJzZWRIcmVmOiBVcmxPYmplY3QsIHBhZ2VzOiBzdHJpbmdbXSkge1xuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZEhyZWZcbiAgICBjb25zdCBjbGVhblBhdGhuYW1lID0gZGVub3JtYWxpemVQYWdlUGF0aChkZWxCYXNlUGF0aChwYXRobmFtZSEpKVxuXG4gICAgaWYgKGNsZWFuUGF0aG5hbWUgPT09ICcvNDA0JyB8fCBjbGVhblBhdGhuYW1lID09PSAnL19lcnJvcicpIHtcbiAgICAgIHJldHVybiBwYXJzZWRIcmVmXG4gICAgfVxuXG4gICAgLy8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuICAgIGlmICghcGFnZXMuaW5jbHVkZXMoY2xlYW5QYXRobmFtZSEpKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICBwYWdlcy5zb21lKChwYWdlKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBpc0R5bmFtaWNSb3V0ZShwYWdlKSAmJlxuICAgICAgICAgIGdldFJvdXRlUmVnZXgocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lISlcbiAgICAgICAgKSB7XG4gICAgICAgICAgcGFyc2VkSHJlZi5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhZ2UpXG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIGFzeW5jIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRcblxuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLnBhZ2VMb2FkZXIucHJlZmV0Y2hEYXRhKHVybCwgYXNQYXRoKSxcbiAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICBdKVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8R29vZFBhZ2VDYWNoZT4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9KVxuXG4gICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKVxuXG4gICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgY29uc3QgZXJyb3I6IGFueSA9IG5ldyBFcnJvcihcbiAgICAgICAgYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImBcbiAgICAgIClcbiAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuXG4gICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRSZXN1bHRcbiAgfVxuXG4gIF9nZXREYXRhPFQ+KGZuOiAoKSA9PiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH1cbiAgICB0aGlzLmNsYyA9IGNhbmNlbFxuICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgIGNvbnN0IGVycjogYW55ID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJylcbiAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIGNvbnN0IHsgaHJlZjogY2FjaGVLZXkgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuc2RjW2NhY2hlS2V5XSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pXG4gICAgfVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcilcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhcbiAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsXG4gICAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ11cbiAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHAgYXMgQXBwQ29tcG9uZW50KVxuICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZVxuICAgIHJldHVybiBsb2FkR2V0SW5pdGlhbFByb3BzPEFwcENvbnRleHRUeXBlPFJvdXRlcj4+KEFwcCwge1xuICAgICAgQXBwVHJlZSxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgIGN0eCxcbiAgICB9KVxuICB9XG5cbiAgYWJvcnRDb21wb25lbnRMb2FkKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSwgYXMpXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50IGFzIEFwcENvbXBvbmVudClcbiAgfVxufVxuIiwiLy8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCAqIGFzIHF1ZXJ5c3RyaW5nIGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHMgPSAvaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS9cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmo6IFVybE9iamVjdCkge1xuICBsZXQgeyBhdXRoLCBob3N0bmFtZSB9ID0gdXJsT2JqXG4gIGxldCBwcm90b2NvbCA9IHVybE9iai5wcm90b2NvbCB8fCAnJ1xuICBsZXQgcGF0aG5hbWUgPSB1cmxPYmoucGF0aG5hbWUgfHwgJydcbiAgbGV0IGhhc2ggPSB1cmxPYmouaGFzaCB8fCAnJ1xuICBsZXQgcXVlcnkgPSB1cmxPYmoucXVlcnkgfHwgJydcbiAgbGV0IGhvc3Q6IHN0cmluZyB8IGZhbHNlID0gZmFsc2VcblxuICBhdXRoID0gYXV0aCA/IGVuY29kZVVSSUNvbXBvbmVudChhdXRoKS5yZXBsYWNlKC8lM0EvaSwgJzonKSArICdAJyA6ICcnXG5cbiAgaWYgKHVybE9iai5ob3N0KSB7XG4gICAgaG9zdCA9IGF1dGggKyB1cmxPYmouaG9zdFxuICB9IGVsc2UgaWYgKGhvc3RuYW1lKSB7XG4gICAgaG9zdCA9IGF1dGggKyAofmhvc3RuYW1lLmluZGV4T2YoJzonKSA/IGBbJHtob3N0bmFtZX1dYCA6IGhvc3RuYW1lKVxuICAgIGlmICh1cmxPYmoucG9ydCkge1xuICAgICAgaG9zdCArPSAnOicgKyB1cmxPYmoucG9ydFxuICAgIH1cbiAgfVxuXG4gIGlmIChxdWVyeSAmJiB0eXBlb2YgcXVlcnkgPT09ICdvYmplY3QnKSB7XG4gICAgcXVlcnkgPSBTdHJpbmcocXVlcnlzdHJpbmcudXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhxdWVyeSBhcyBQYXJzZWRVcmxRdWVyeSkpXG4gIH1cblxuICBsZXQgc2VhcmNoID0gdXJsT2JqLnNlYXJjaCB8fCAocXVlcnkgJiYgYD8ke3F1ZXJ5fWApIHx8ICcnXG5cbiAgaWYgKHByb3RvY29sICYmIHByb3RvY29sLnN1YnN0cigtMSkgIT09ICc6JykgcHJvdG9jb2wgKz0gJzonXG5cbiAgaWYgKFxuICAgIHVybE9iai5zbGFzaGVzIHx8XG4gICAgKCghcHJvdG9jb2wgfHwgc2xhc2hlZFByb3RvY29scy50ZXN0KHByb3RvY29sKSkgJiYgaG9zdCAhPT0gZmFsc2UpXG4gICkge1xuICAgIGhvc3QgPSAnLy8nICsgKGhvc3QgfHwgJycpXG4gICAgaWYgKHBhdGhuYW1lICYmIHBhdGhuYW1lWzBdICE9PSAnLycpIHBhdGhuYW1lID0gJy8nICsgcGF0aG5hbWVcbiAgfSBlbHNlIGlmICghaG9zdCkge1xuICAgIGhvc3QgPSAnJ1xuICB9XG5cbiAgaWYgKGhhc2ggJiYgaGFzaFswXSAhPT0gJyMnKSBoYXNoID0gJyMnICsgaGFzaFxuICBpZiAoc2VhcmNoICYmIHNlYXJjaFswXSAhPT0gJz8nKSBzZWFyY2ggPSAnPycgKyBzZWFyY2hcblxuICBwYXRobmFtZSA9IHBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZywgZW5jb2RlVVJJQ29tcG9uZW50KVxuICBzZWFyY2ggPSBzZWFyY2gucmVwbGFjZSgnIycsICclMjMnKVxuXG4gIHJldHVybiBgJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YFxufVxuIiwiLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpXG59XG4iLCJpbXBvcnQgeyBnZXRMb2NhdGlvbk9yaWdpbiB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5jb25zdCBEVU1NWV9CQVNFID0gbmV3IFVSTChcbiAgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyAnaHR0cDovL24nIDogZ2V0TG9jYXRpb25PcmlnaW4oKVxuKVxuXG4vKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQgd2l0aCBvbmUgZXhjZXB0aW9uLCBpbiB0aGUgYnJvd3NlciwgYWJzb2x1dGUgdXJscyB0aGF0IGFyZSBvblxuICogdGhlIGN1cnJlbnQgb3JpZ2luIHdpbGwgYmUgcGFyc2VkIGFzIHJlbGF0aXZlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybDogc3RyaW5nLCBiYXNlPzogc3RyaW5nKSB7XG4gIGNvbnN0IHJlc29sdmVkQmFzZSA9IGJhc2UgPyBuZXcgVVJMKGJhc2UsIERVTU1ZX0JBU0UpIDogRFVNTVlfQkFTRVxuICBjb25zdCB7XG4gICAgcGF0aG5hbWUsXG4gICAgc2VhcmNoUGFyYW1zLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWYsXG4gICAgb3JpZ2luLFxuICAgIHByb3RvY29sLFxuICB9ID0gbmV3IFVSTCh1cmwsIHJlc29sdmVkQmFzZSlcbiAgaWYgKFxuICAgIG9yaWdpbiAhPT0gRFVNTVlfQkFTRS5vcmlnaW4gfHxcbiAgICAocHJvdG9jb2wgIT09ICdodHRwOicgJiYgcHJvdG9jb2wgIT09ICdodHRwczonKVxuICApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudDogaW52YWxpZCByZWxhdGl2ZSBVUkwnKVxuICB9XG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgc2VhcmNoUGFyYW1zLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWY6IGhyZWYuc2xpY2UoRFVNTVlfQkFTRS5vcmlnaW4ubGVuZ3RoKSxcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgcGF0aFRvUmVnZXhwIGZyb20gJ25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cCdcblxuZXhwb3J0IHsgcGF0aFRvUmVnZXhwIH1cblxuZXhwb3J0IGNvbnN0IG1hdGNoZXJPcHRpb25zID0ge1xuICBzZW5zaXRpdmU6IGZhbHNlLFxuICBkZWxpbWl0ZXI6ICcvJyxcbiAgZGVjb2RlOiBkZWNvZGVQYXJhbSxcbn1cblxuZXhwb3J0IGNvbnN0IGN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMgPSB7XG4gIC4uLm1hdGNoZXJPcHRpb25zLFxuICBzdHJpY3Q6IHRydWUsXG59XG5cbmV4cG9ydCBkZWZhdWx0IChjdXN0b21Sb3V0ZSA9IGZhbHNlKSA9PiB7XG4gIHJldHVybiAocGF0aDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3Qga2V5czogcGF0aFRvUmVnZXhwLktleVtdID0gW11cbiAgICBjb25zdCBtYXRjaGVyUmVnZXggPSBwYXRoVG9SZWdleHAucGF0aFRvUmVnZXhwKFxuICAgICAgcGF0aCxcbiAgICAgIGtleXMsXG4gICAgICBjdXN0b21Sb3V0ZSA/IGN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMgOiBtYXRjaGVyT3B0aW9uc1xuICAgIClcbiAgICBjb25zdCBtYXRjaGVyID0gcGF0aFRvUmVnZXhwLnJlZ2V4cFRvRnVuY3Rpb24oXG4gICAgICBtYXRjaGVyUmVnZXgsXG4gICAgICBrZXlzLFxuICAgICAgbWF0Y2hlck9wdGlvbnNcbiAgICApXG5cbiAgICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkLCBwYXJhbXM/OiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IHJlcyA9IHBhdGhuYW1lID09IG51bGwgPyBmYWxzZSA6IG1hdGNoZXIocGF0aG5hbWUpXG4gICAgICBpZiAoIXJlcykge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cblxuICAgICAgaWYgKGN1c3RvbVJvdXRlKSB7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgICAgICAvLyB1bm5hbWVkIHBhcmFtcyBzaG91bGQgYmUgcmVtb3ZlZCBhcyB0aGV5XG4gICAgICAgICAgLy8gYXJlIG5vdCBhbGxvd2VkIHRvIGJlIHVzZWQgaW4gdGhlIGRlc3RpbmF0aW9uXG4gICAgICAgICAgaWYgKHR5cGVvZiBrZXkubmFtZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGRlbGV0ZSAocmVzLnBhcmFtcyBhcyBhbnkpW2tleS5uYW1lXVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4geyAuLi5wYXJhbXMsIC4uLnJlcy5wYXJhbXMgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBkZWNvZGVQYXJhbShwYXJhbTogc3RyaW5nKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgfSBjYXRjaCAoXykge1xuICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcignZmFpbGVkIHRvIGRlY29kZSBwYXJhbScpXG4gICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCdcbiAgICB0aHJvdyBlcnJcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0ICogYXMgcGF0aFRvUmVnZXhwIGZyb20gJ25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cCdcblxudHlwZSBQYXJhbXMgPSB7IFtwYXJhbTogc3RyaW5nXTogYW55IH1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJlcGFyZURlc3RpbmF0aW9uKFxuICBkZXN0aW5hdGlvbjogc3RyaW5nLFxuICBwYXJhbXM6IFBhcmFtcyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICBhcHBlbmRQYXJhbXNUb1F1ZXJ5OiBib29sZWFuLFxuICBiYXNlUGF0aDogc3RyaW5nXG4pIHtcbiAgbGV0IHBhcnNlZERlc3RpbmF0aW9uOiB7XG4gICAgcXVlcnk/OiBQYXJzZWRVcmxRdWVyeVxuICAgIHByb3RvY29sPzogc3RyaW5nXG4gICAgaG9zdG5hbWU/OiBzdHJpbmdcbiAgICBwb3J0Pzogc3RyaW5nXG4gIH0gJiBSZXR1cm5UeXBlPHR5cGVvZiBwYXJzZVJlbGF0aXZlVXJsPiA9IHt9IGFzIGFueVxuXG4gIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICBwYXJzZWREZXN0aW5hdGlvbiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gIH0gZWxzZSB7XG4gICAgY29uc3Qge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBzZWFyY2hQYXJhbXMsXG4gICAgICBoYXNoLFxuICAgICAgaG9zdG5hbWUsXG4gICAgICBwb3J0LFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH0gPSBuZXcgVVJMKGRlc3RpbmF0aW9uKVxuXG4gICAgcGFyc2VkRGVzdGluYXRpb24gPSB7XG4gICAgICBwYXRobmFtZSxcbiAgICAgIHNlYXJjaFBhcmFtcyxcbiAgICAgIGhhc2gsXG4gICAgICBwcm90b2NvbCxcbiAgICAgIGhvc3RuYW1lLFxuICAgICAgcG9ydCxcbiAgICAgIHNlYXJjaCxcbiAgICAgIGhyZWYsXG4gICAgfVxuICB9XG5cbiAgcGFyc2VkRGVzdGluYXRpb24ucXVlcnkgPSBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KFxuICAgIHBhcnNlZERlc3RpbmF0aW9uLnNlYXJjaFBhcmFtc1xuICApXG4gIGNvbnN0IGRlc3RRdWVyeSA9IHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5XG4gIGNvbnN0IGRlc3RQYXRoID0gYCR7cGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUhfSR7XG4gICAgcGFyc2VkRGVzdGluYXRpb24uaGFzaCB8fCAnJ1xuICB9YFxuICBjb25zdCBkZXN0UGF0aFBhcmFtS2V5czogcGF0aFRvUmVnZXhwLktleVtdID0gW11cbiAgcGF0aFRvUmVnZXhwLnBhdGhUb1JlZ2V4cChkZXN0UGF0aCwgZGVzdFBhdGhQYXJhbUtleXMpXG5cbiAgY29uc3QgZGVzdFBhdGhQYXJhbXMgPSBkZXN0UGF0aFBhcmFtS2V5cy5tYXAoKGtleSkgPT4ga2V5Lm5hbWUpXG5cbiAgbGV0IGRlc3RpbmF0aW9uQ29tcGlsZXIgPSBwYXRoVG9SZWdleHAuY29tcGlsZShcbiAgICBkZXN0UGF0aCxcbiAgICAvLyB3ZSBkb24ndCB2YWxpZGF0ZSB3aGlsZSBjb21waWxpbmcgdGhlIGRlc3RpbmF0aW9uIHNpbmNlIHdlIHNob3VsZFxuICAgIC8vIGhhdmUgYWxyZWFkeSB2YWxpZGF0ZWQgYmVmb3JlIHdlIGdvdCB0byB0aGlzIHBvaW50IGFuZCB2YWxpZGF0aW5nXG4gICAgLy8gYnJlYWtzIGNvbXBpbGluZyBkZXN0aW5hdGlvbnMgd2l0aCBuYW1lZCBwYXR0ZXJuIHBhcmFtcyBmcm9tIHRoZSBzb3VyY2VcbiAgICAvLyBlLmcuIC9zb21ldGhpbmc6aGVsbG8oLiopIC0+IC9hbm90aGVyLzpoZWxsbyBpcyBicm9rZW4gd2l0aCB2YWxpZGF0aW9uXG4gICAgLy8gc2luY2UgY29tcGlsZSB2YWxpZGF0aW9uIGlzIG1lYW50IGZvciByZXZlcnNpbmcgYW5kIG5vdCBmb3IgaW5zZXJ0aW5nXG4gICAgLy8gcGFyYW1zIGZyb20gYSBzZXBhcmF0ZSBwYXRoLXJlZ2V4IGludG8gYW5vdGhlclxuICAgIHsgdmFsaWRhdGU6IGZhbHNlIH1cbiAgKVxuICBsZXQgbmV3VXJsXG5cbiAgLy8gdXBkYXRlIGFueSBwYXJhbXMgaW4gcXVlcnkgdmFsdWVzXG4gIGZvciAoY29uc3QgW2tleSwgc3RyT3JBcnJheV0gb2YgT2JqZWN0LmVudHJpZXMoZGVzdFF1ZXJ5KSkge1xuICAgIGxldCB2YWx1ZSA9IEFycmF5LmlzQXJyYXkoc3RyT3JBcnJheSkgPyBzdHJPckFycmF5WzBdIDogc3RyT3JBcnJheVxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgLy8gdGhlIHZhbHVlIG5lZWRzIHRvIHN0YXJ0IHdpdGggYSBmb3J3YXJkLXNsYXNoIHRvIGJlIGNvbXBpbGVkXG4gICAgICAvLyBjb3JyZWN0bHlcbiAgICAgIHZhbHVlID0gYC8ke3ZhbHVlfWBcbiAgICAgIGNvbnN0IHF1ZXJ5Q29tcGlsZXIgPSBwYXRoVG9SZWdleHAuY29tcGlsZSh2YWx1ZSwgeyB2YWxpZGF0ZTogZmFsc2UgfSlcbiAgICAgIHZhbHVlID0gcXVlcnlDb21waWxlcihwYXJhbXMpLnN1YnN0cigxKVxuICAgIH1cbiAgICBkZXN0UXVlcnlba2V5XSA9IHZhbHVlXG4gIH1cblxuICAvLyBhZGQgcGF0aCBwYXJhbXMgdG8gcXVlcnkgaWYgaXQncyBub3QgYSByZWRpcmVjdCBhbmQgbm90XG4gIC8vIGFscmVhZHkgZGVmaW5lZCBpbiBkZXN0aW5hdGlvbiBxdWVyeSBvciBwYXRoXG4gIGNvbnN0IHBhcmFtS2V5cyA9IE9iamVjdC5rZXlzKHBhcmFtcylcblxuICBpZiAoXG4gICAgYXBwZW5kUGFyYW1zVG9RdWVyeSAmJlxuICAgICFwYXJhbUtleXMuc29tZSgoa2V5KSA9PiBkZXN0UGF0aFBhcmFtcy5pbmNsdWRlcyhrZXkpKVxuICApIHtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBwYXJhbUtleXMpIHtcbiAgICAgIGlmICghKGtleSBpbiBkZXN0UXVlcnkpKSB7XG4gICAgICAgIGRlc3RRdWVyeVtrZXldID0gcGFyYW1zW2tleV1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCBzaG91bGRBZGRCYXNlUGF0aCA9IGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSAmJiBiYXNlUGF0aFxuXG4gIHRyeSB7XG4gICAgbmV3VXJsID0gYCR7c2hvdWxkQWRkQmFzZVBhdGggPyBiYXNlUGF0aCA6ICcnfSR7ZW5jb2RlVVJJKFxuICAgICAgZGVzdGluYXRpb25Db21waWxlcihwYXJhbXMpXG4gICAgKX1gXG5cbiAgICBjb25zdCBbcGF0aG5hbWUsIGhhc2hdID0gbmV3VXJsLnNwbGl0KCcjJylcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgcGFyc2VkRGVzdGluYXRpb24uaGFzaCA9IGAke2hhc2ggPyAnIycgOiAnJ30ke2hhc2ggfHwgJyd9YFxuICAgIGRlbGV0ZSBwYXJzZWREZXN0aW5hdGlvbi5zZWFyY2hcbiAgICBkZWxldGUgcGFyc2VkRGVzdGluYXRpb24uc2VhcmNoUGFyYW1zXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGlmIChlcnIubWVzc2FnZS5tYXRjaCgvRXhwZWN0ZWQgLio/IHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYW4gYXJyYXkvKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgVG8gdXNlIGEgbXVsdGktbWF0Y2ggaW4gdGhlIGRlc3RpbmF0aW9uIHlvdSBtdXN0IGFkZCBcXGAqXFxgIGF0IHRoZSBlbmQgb2YgdGhlIHBhcmFtIG5hbWUgdG8gc2lnbmlmeSBpdCBzaG91bGQgcmVwZWF0LiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbnZhbGlkLW11bHRpLW1hdGNoYFxuICAgICAgKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfVxuXG4gIC8vIFF1ZXJ5IG1lcmdlIG9yZGVyIGxvd2VzdCBwcmlvcml0eSB0byBoaWdoZXN0XG4gIC8vIDEuIGluaXRpYWwgVVJMIHF1ZXJ5IHZhbHVlc1xuICAvLyAyLiBwYXRoIHNlZ21lbnQgdmFsdWVzXG4gIC8vIDMuIGRlc3RpbmF0aW9uIHNwZWNpZmllZCBxdWVyeSB2YWx1ZXNcbiAgcGFyc2VkRGVzdGluYXRpb24ucXVlcnkgPSB7XG4gICAgLi4ucXVlcnksXG4gICAgLi4ucGFyc2VkRGVzdGluYXRpb24ucXVlcnksXG4gIH1cblxuICByZXR1cm4ge1xuICAgIG5ld1VybCxcbiAgICBwYXJzZWREZXN0aW5hdGlvbixcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoXG4gIHNlYXJjaFBhcmFtczogVVJMU2VhcmNoUGFyYW1zXG4pOiBQYXJzZWRVcmxRdWVyeSB7XG4gIGNvbnN0IHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG4gIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeVtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcXVlcnlba2V5XSA9IHZhbHVlXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKSB7XG4gICAgICA7KHF1ZXJ5W2tleV0gYXMgc3RyaW5nW10pLnB1c2godmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSBhcyBzdHJpbmcsIHZhbHVlXVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHF1ZXJ5XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cmxRdWVyeVRvU2VhcmNoUGFyYW1zKFxuICB1cmxRdWVyeTogUGFyc2VkVXJsUXVlcnlcbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxuICBPYmplY3QuZW50cmllcyh1cmxRdWVyeSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChpdGVtKSA9PiByZXN1bHQuYXBwZW5kKGtleSwgaXRlbSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5zZXQoa2V5LCB2YWx1ZSlcbiAgICB9XG4gIH0pXG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbihcbiAgdGFyZ2V0OiBVUkxTZWFyY2hQYXJhbXMsXG4gIC4uLnNlYXJjaFBhcmFtc0xpc3Q6IFVSTFNlYXJjaFBhcmFtc1tdXG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBzZWFyY2hQYXJhbXNMaXN0LmZvckVhY2goKHNlYXJjaFBhcmFtcykgPT4ge1xuICAgIEFycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaCgoa2V5KSA9PiB0YXJnZXQuZGVsZXRlKGtleSkpXG4gICAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHRhcmdldC5hcHBlbmQoa2V5LCB2YWx1ZSkpXG4gIH0pXG4gIHJldHVybiB0YXJnZXRcbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgcGF0aE1hdGNoIGZyb20gJy4vcGF0aC1tYXRjaCdcbmltcG9ydCBwcmVwYXJlRGVzdGluYXRpb24gZnJvbSAnLi9wcmVwYXJlLWRlc3RpbmF0aW9uJ1xuaW1wb3J0IHsgUmV3cml0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9sb2FkLWN1c3RvbS1yb3V0ZXMnXG5cbmNvbnN0IGN1c3RvbVJvdXRlTWF0Y2hlciA9IHBhdGhNYXRjaCh0cnVlKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXNvbHZlUmV3cml0ZXMoXG4gIGFzUGF0aDogc3RyaW5nLFxuICBwYWdlczogc3RyaW5nW10sXG4gIGJhc2VQYXRoOiBzdHJpbmcsXG4gIHJld3JpdGVzOiBSZXdyaXRlW10sXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgcmVzb2x2ZUhyZWY6IChwYXRoOiBzdHJpbmcpID0+IHN0cmluZ1xuKSB7XG4gIGlmICghcGFnZXMuaW5jbHVkZXMoYXNQYXRoKSkge1xuICAgIGZvciAoY29uc3QgcmV3cml0ZSBvZiByZXdyaXRlcykge1xuICAgICAgY29uc3QgbWF0Y2hlciA9IGN1c3RvbVJvdXRlTWF0Y2hlcihyZXdyaXRlLnNvdXJjZSlcbiAgICAgIGNvbnN0IHBhcmFtcyA9IG1hdGNoZXIoYXNQYXRoKVxuXG4gICAgICBpZiAocGFyYW1zKSB7XG4gICAgICAgIGlmICghcmV3cml0ZS5kZXN0aW5hdGlvbikge1xuICAgICAgICAgIC8vIHRoaXMgaXMgYSBwcm94aWVkIHJld3JpdGUgd2hpY2ggaXNuJ3QgaGFuZGxlZCBvbiB0aGUgY2xpZW50XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZXN0UmVzID0gcHJlcGFyZURlc3RpbmF0aW9uKFxuICAgICAgICAgIHJld3JpdGUuZGVzdGluYXRpb24sXG4gICAgICAgICAgcGFyYW1zLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIHRydWUsXG4gICAgICAgICAgcmV3cml0ZS5iYXNlUGF0aCA9PT0gZmFsc2UgPyAnJyA6IGJhc2VQYXRoXG4gICAgICAgIClcbiAgICAgICAgYXNQYXRoID0gZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSFcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5xdWVyeSlcblxuICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMoYXNQYXRoKSkge1xuICAgICAgICAgIC8vIGNoZWNrIGlmIHdlIG5vdyBtYXRjaCBhIHBhZ2UgYXMgdGhpcyBtZWFucyB3ZSBhcmUgZG9uZVxuICAgICAgICAgIC8vIHJlc29sdmluZyB0aGUgcmV3cml0ZXNcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY2hlY2sgaWYgd2UgbWF0Y2ggYSBkeW5hbWljLXJvdXRlLCBpZiBzbyB3ZSBicmVhayB0aGUgcmV3cml0ZXMgY2hhaW5cbiAgICAgICAgY29uc3QgcmVzb2x2ZWRIcmVmID0gcmVzb2x2ZUhyZWYoYXNQYXRoKVxuXG4gICAgICAgIGlmIChyZXNvbHZlZEhyZWYgIT09IGFzUGF0aCAmJiBwYWdlcy5pbmNsdWRlcyhyZXNvbHZlZEhyZWYpKSB7XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gYXNQYXRoXG59XG4iLCJpbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi9yb3V0ZS1yZWdleCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4OiBSZXR1cm5UeXBlPHR5cGVvZiBnZXRSb3V0ZVJlZ2V4Pikge1xuICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXhcbiAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByZS5leGVjKHBhdGhuYW1lISlcbiAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbTogc3RyaW5nKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKVxuICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICBjb25zdCBlcnI6IEVycm9yICYgeyBjb2RlPzogc3RyaW5nIH0gPSBuZXcgRXJyb3IoXG4gICAgICAgICAgJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nXG4gICAgICAgIClcbiAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCdcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHBhcmFtczogeyBbcGFyYW1OYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9ID0ge31cblxuICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV1cbiAgICAgIGNvbnN0IG0gPSByb3V0ZU1hdGNoW2cucG9zXVxuICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXJhbXNbc2x1Z05hbWVdID0gfm0uaW5kZXhPZignLycpXG4gICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKChlbnRyeSkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICA6IGcucmVwZWF0XG4gICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgIDogZGVjb2RlKG0pXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcGFyYW1zXG4gIH1cbn1cbiIsImludGVyZmFjZSBHcm91cCB7XG4gIHBvczogbnVtYmVyXG4gIHJlcGVhdDogYm9vbGVhblxuICBvcHRpb25hbDogYm9vbGVhblxufVxuXG4vLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csICdcXFxcJCYnKVxufVxuXG5mdW5jdGlvbiBwYXJzZVBhcmFtZXRlcihwYXJhbTogc3RyaW5nKSB7XG4gIGNvbnN0IG9wdGlvbmFsID0gcGFyYW0uc3RhcnRzV2l0aCgnWycpICYmIHBhcmFtLmVuZHNXaXRoKCddJylcbiAgaWYgKG9wdGlvbmFsKSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgxLCAtMSlcbiAgfVxuICBjb25zdCByZXBlYXQgPSBwYXJhbS5zdGFydHNXaXRoKCcuLi4nKVxuICBpZiAocmVwZWF0KSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgzKVxuICB9XG4gIHJldHVybiB7IGtleTogcGFyYW0sIHJlcGVhdCwgb3B0aW9uYWwgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVSZWdleChcbiAgbm9ybWFsaXplZFJvdXRlOiBzdHJpbmdcbik6IHtcbiAgcmU6IFJlZ0V4cFxuICBuYW1lZFJlZ2V4Pzogc3RyaW5nXG4gIHJvdXRlS2V5cz86IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfVxuICBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfVxufSB7XG4gIGNvbnN0IHNlZ21lbnRzID0gKG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJylcbiAgICAuc2xpY2UoMSlcbiAgICAuc3BsaXQoJy8nKVxuXG4gIGNvbnN0IGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9ID0ge31cbiAgbGV0IGdyb3VwSW5kZXggPSAxXG4gIGNvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgIGdyb3Vwc1trZXldID0geyBwb3M6IGdyb3VwSW5kZXgrKywgcmVwZWF0LCBvcHRpb25hbCB9XG4gICAgICAgIHJldHVybiByZXBlYXQgPyAob3B0aW9uYWwgPyAnKD86LyguKz8pKT8nIDogJy8oLis/KScpIDogJy8oW14vXSs/KSdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgfVxuICAgIH0pXG4gICAgLmpvaW4oJycpXG5cbiAgLy8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4gIC8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIGxldCByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICBsZXQgcm91dGVLZXlDaGFyTGVuZ3RoID0gMVxuXG4gICAgLy8gYnVpbGRzIGEgbWluaW1hbCByb3V0ZUtleSB1c2luZyBvbmx5IGEteiBhbmQgbWluaW1hbCBudW1iZXIgb2YgY2hhcmFjdGVyc1xuICAgIGNvbnN0IGdldFNhZmVSb3V0ZUtleSA9ICgpID0+IHtcbiAgICAgIGxldCByb3V0ZUtleSA9ICcnXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm91dGVLZXlDaGFyTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcm91dGVLZXkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShyb3V0ZUtleUNoYXJDb2RlKVxuICAgICAgICByb3V0ZUtleUNoYXJDb2RlKytcblxuICAgICAgICBpZiAocm91dGVLZXlDaGFyQ29kZSA+IDEyMikge1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckxlbmd0aCsrXG4gICAgICAgICAgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByb3V0ZUtleVxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlS2V5czogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9ID0ge31cblxuICAgIGxldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgICAgLy8gcmVwbGFjZSBhbnkgbm9uLXdvcmQgY2hhcmFjdGVycyBzaW5jZSB0aGV5IGNhbiBicmVha1xuICAgICAgICAgIC8vIHRoZSBuYW1lZCByZWdleFxuICAgICAgICAgIGxldCBjbGVhbmVkS2V5ID0ga2V5LnJlcGxhY2UoL1xcVy9nLCAnJylcbiAgICAgICAgICBsZXQgaW52YWxpZEtleSA9IGZhbHNlXG5cbiAgICAgICAgICAvLyBjaGVjayBpZiB0aGUga2V5IGlzIHN0aWxsIGludmFsaWQgYW5kIGZhbGxiYWNrIHRvIHVzaW5nIGEga25vd25cbiAgICAgICAgICAvLyBzYWZlIGtleVxuICAgICAgICAgIGlmIChjbGVhbmVkS2V5Lmxlbmd0aCA9PT0gMCB8fCBjbGVhbmVkS2V5Lmxlbmd0aCA+IDMwKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWlzTmFOKHBhcnNlSW50KGNsZWFuZWRLZXkuc3Vic3RyKDAsIDEpKSkpIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGludmFsaWRLZXkpIHtcbiAgICAgICAgICAgIGNsZWFuZWRLZXkgPSBnZXRTYWZlUm91dGVLZXkoKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJvdXRlS2V5c1tjbGVhbmVkS2V5XSA9IGtleVxuICAgICAgICAgIHJldHVybiByZXBlYXRcbiAgICAgICAgICAgID8gb3B0aW9uYWxcbiAgICAgICAgICAgICAgPyBgKD86Lyg/PCR7Y2xlYW5lZEtleX0+Lis/KSk/YFxuICAgICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT4uKz8pYFxuICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+W14vXSs/KWBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5qb2luKCcnKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgICAgZ3JvdXBzLFxuICAgICAgcm91dGVLZXlzLFxuICAgICAgbmFtZWRSZWdleDogYF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgLFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgZ3JvdXBzLFxuICB9XG59XG4iLCJpbXBvcnQgeyBJbmNvbWluZ01lc3NhZ2UsIFNlcnZlclJlc3BvbnNlIH0gZnJvbSAnaHR0cCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBmb3JtYXRVcmwgfSBmcm9tICcuL3JvdXRlci91dGlscy9mb3JtYXQtdXJsJ1xuaW1wb3J0IHsgTWFuaWZlc3RJdGVtIH0gZnJvbSAnLi4vc2VydmVyL2xvYWQtY29tcG9uZW50cydcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBFbnYgfSBmcm9tICcuLi8uLi9saWIvbG9hZC1lbnYtY29uZmlnJ1xuaW1wb3J0IHsgQnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL3NlcnZlci9nZXQtcGFnZS1maWxlcydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbi8qKlxuICogV2ViIHZpdGFscyBwcm92aWRlZCB0byBfYXBwLnJlcG9ydFdlYlZpdGFscyBieSBDb3JlIFdlYiBWaXRhbHMgcGx1Z2luIGRldmVsb3BlZCBieSBHb29nbGUgQ2hyb21lIHRlYW0uXG4gKiBodHRwczovL25leHRqcy5vcmcvYmxvZy9uZXh0LTktNCNpbnRlZ3JhdGVkLXdlYi12aXRhbHMtcmVwb3J0aW5nXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRXZWJWaXRhbHNNZXRyaWMgPSB7XG4gIGlkOiBzdHJpbmdcbiAgbGFiZWw6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgc3RhcnRUaW1lOiBudW1iZXJcbiAgdmFsdWU6IG51bWJlclxufVxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IHN0cmluZ1tdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxufVxuXG4vKipcbiAqIGBOZXh0YCBjb250ZXh0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dFBhZ2VDb250ZXh0IHtcbiAgLyoqXG4gICAqIEVycm9yIG9iamVjdCBpZiBlbmNvdW50ZXJlZCBkdXJpbmcgcmVuZGVyaW5nXG4gICAqL1xuICBlcnI/OiAoRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfSkgfCBudWxsXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVxdWVzdCBvYmplY3QuXG4gICAqL1xuICByZXE/OiBJbmNvbWluZ01lc3NhZ2VcbiAgLyoqXG4gICAqIGBIVFRQYCByZXNwb25zZSBvYmplY3QuXG4gICAqL1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICAvKipcbiAgICogUGF0aCBzZWN0aW9uIG9mIGBVUkxgLlxuICAgKi9cbiAgcGF0aG5hbWU6IHN0cmluZ1xuICAvKipcbiAgICogUXVlcnkgc3RyaW5nIHNlY3Rpb24gb2YgYFVSTGAgcGFyc2VkIGFzIGFuIG9iamVjdC5cbiAgICovXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICAvKipcbiAgICogYFN0cmluZ2Agb2YgdGhlIGFjdHVhbCBwYXRoIGluY2x1ZGluZyBxdWVyeS5cbiAgICovXG4gIGFzUGF0aD86IHN0cmluZ1xuICAvKipcbiAgICogYENvbXBvbmVudGAgdGhlIHRyZWUgb2YgdGhlIEFwcCB0byB1c2UgaWYgbmVlZGluZyB0byByZW5kZXIgc2VwYXJhdGVseVxuICAgKi9cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbn1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dFR5cGU8UiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyPiA9IHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQ+XG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG4gIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gIHJvdXRlcjogUlxufVxuXG5leHBvcnQgdHlwZSBBcHBJbml0aWFsUHJvcHMgPSB7XG4gIHBhZ2VQcm9wczogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzVHlwZTxcbiAgUiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyLFxuICBQID0ge31cbj4gPSBBcHBJbml0aWFsUHJvcHMgJiB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0LCBhbnksIFA+XG4gIHJvdXRlcjogUlxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudENvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQgJiB7XG4gIHJlbmRlclBhZ2U6IFJlbmRlclBhZ2Vcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRJbml0aWFsUHJvcHMgPSBSZW5kZXJQYWdlUmVzdWx0ICYge1xuICBzdHlsZXM/OiBSZWFjdC5SZWFjdEVsZW1lbnRbXSB8IFJlYWN0LlJlYWN0RnJhZ21lbnRcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRQcm9wcyA9IERvY3VtZW50SW5pdGlhbFByb3BzICYge1xuICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgZGFuZ2Vyb3VzQXNQYXRoOiBzdHJpbmdcbiAgZG9jQ29tcG9uZW50c1JlbmRlcmVkOiB7XG4gICAgSHRtbD86IGJvb2xlYW5cbiAgICBNYWluPzogYm9vbGVhblxuICAgIEhlYWQ/OiBib29sZWFuXG4gICAgTmV4dFNjcmlwdD86IGJvb2xlYW5cbiAgfVxuICBidWlsZE1hbmlmZXN0OiBCdWlsZE1hbmlmZXN0XG4gIGFtcFBhdGg6IHN0cmluZ1xuICBpbkFtcE1vZGU6IGJvb2xlYW5cbiAgaHlicmlkQW1wOiBib29sZWFuXG4gIGlzRGV2ZWxvcG1lbnQ6IGJvb2xlYW5cbiAgZHluYW1pY0ltcG9ydHM6IE1hbmlmZXN0SXRlbVtdXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIGNhbm9uaWNhbEJhc2U6IHN0cmluZ1xuICBoZWFkVGFnczogYW55W11cbiAgdW5zdGFibGVfcnVudGltZUpTPzogZmFsc2VcbiAgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmc6IHN0cmluZ1xufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgSW5jb21pbmdNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgcXVlcnlgIHZhbHVlcyBmcm9tIHVybFxuICAgKi9cbiAgcXVlcnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXVxuICB9XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYGNvb2tpZXNgIGZyb20gaGVhZGVyXG4gICAqL1xuICBjb29raWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH1cblxuICBib2R5OiBhbnlcblxuICBlbnY6IEVudlxuXG4gIHByZXZpZXc/OiBib29sZWFuXG4gIC8qKlxuICAgKiBQcmV2aWV3IGRhdGEgc2V0IG9uIHRoZSByZXF1ZXN0LCBpZiBhbnlcbiAgICogKi9cbiAgcHJldmlld0RhdGE/OiBhbnlcbn1cblxuLyoqXG4gKiBTZW5kIGJvZHkgb2YgcmVzcG9uc2VcbiAqL1xudHlwZSBTZW5kPFQ+ID0gKGJvZHk6IFQpID0+IHZvaWRcblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlSZXNwb25zZTxUID0gYW55PiA9IFNlcnZlclJlc3BvbnNlICYge1xuICAvKipcbiAgICogU2VuZCBkYXRhIGBhbnlgIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIHNlbmQ6IFNlbmQ8VD5cbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBganNvbmAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAganNvbjogU2VuZDxUPlxuICBzdGF0dXM6IChzdGF0dXNDb2RlOiBudW1iZXIpID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdCh1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdChzdGF0dXM6IG51bWJlciwgdXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cblxuICAvKipcbiAgICogU2V0IHByZXZpZXcgZGF0YSBmb3IgTmV4dC5qcycgcHJlcmVuZGVyIG1vZGVcbiAgICovXG4gIHNldFByZXZpZXdEYXRhOiAoXG4gICAgZGF0YTogb2JqZWN0IHwgc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIChpbiBzZWNvbmRzKSBmb3IgdGhlIHByZXZpZXcgc2Vzc2lvbiB0byBsYXN0IGZvci5cbiAgICAgICAqIFRoZSBnaXZlbiBudW1iZXIgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYW4gaW50ZWdlciBieSByb3VuZGluZyBkb3duLlxuICAgICAgICogQnkgZGVmYXVsdCwgbm8gbWF4aW11bSBhZ2UgaXMgc2V0IGFuZCB0aGUgcHJldmlldyBzZXNzaW9uIGZpbmlzaGVzXG4gICAgICAgKiB3aGVuIHRoZSBjbGllbnQgc2h1dHMgZG93biAoYnJvd3NlciBpcyBjbG9zZWQpLlxuICAgICAgICovXG4gICAgICBtYXhBZ2U/OiBudW1iZXJcbiAgICB9XG4gICkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIGNsZWFyUHJldmlld0RhdGE6ICgpID0+IE5leHRBcGlSZXNwb25zZTxUPlxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgaGFuZGxlclxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpSGFuZGxlcjxUID0gYW55PiA9IChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8VD5cbikgPT4gdm9pZCB8IFByb21pc2U8dm9pZD5cblxuLyoqXG4gKiBVdGlsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXhlY09uY2U8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gUmV0dXJuVHlwZTxUPj4oXG4gIGZuOiBUXG4pOiBUIHtcbiAgbGV0IHVzZWQgPSBmYWxzZVxuICBsZXQgcmVzdWx0OiBSZXR1cm5UeXBlPFQ+XG5cbiAgcmV0dXJuICgoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBpZiAoIXVzZWQpIHtcbiAgICAgIHVzZWQgPSB0cnVlXG4gICAgICByZXN1bHQgPSBmbiguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pIGFzIFRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uXG4gIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lPFA+KENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxQPikge1xuICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICA/IENvbXBvbmVudFxuICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNTZW50KHJlczogU2VydmVyUmVzcG9uc2UpIHtcbiAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHM8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+KEFwcDogTmV4dENvbXBvbmVudFR5cGU8QywgSVAsIFA+LCBjdHg6IEMpOiBQcm9taXNlPElQPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKEFwcC5wcm90b3R5cGU/LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgIEFwcFxuICAgICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKVxuXG4gIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt9IGFzIElQXG4gIH1cblxuICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuXG4gIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICByZXR1cm4gcHJvcHNcbiAgfVxuXG4gIGlmICghcHJvcHMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgIEFwcFxuICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYFxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgICBBcHBcbiAgICAgICAgKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzXG59XG5cbmV4cG9ydCBjb25zdCB1cmxPYmplY3RLZXlzID0gW1xuICAnYXV0aCcsXG4gICdoYXNoJyxcbiAgJ2hvc3QnLFxuICAnaG9zdG5hbWUnLFxuICAnaHJlZicsXG4gICdwYXRoJyxcbiAgJ3BhdGhuYW1lJyxcbiAgJ3BvcnQnLFxuICAncHJvdG9jb2wnLFxuICAncXVlcnknLFxuICAnc2VhcmNoJyxcbiAgJ3NsYXNoZXMnLFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsOiBVcmxPYmplY3QpOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9ybWF0VXJsKHVybClcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplUGF0aFNlcD1ub3JtYWxpemVQYXRoU2VwO2V4cG9ydHMuZGVub3JtYWxpemVQYWdlUGF0aD1kZW5vcm1hbGl6ZVBhZ2VQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZVBhdGhTZXAocGF0aCl7cmV0dXJuIHBhdGgucmVwbGFjZSgvXFxcXC9nLCcvJyk7fWZ1bmN0aW9uIGRlbm9ybWFsaXplUGFnZVBhdGgocGFnZSl7cGFnZT1ub3JtYWxpemVQYXRoU2VwKHBhZ2UpO2lmKHBhZ2Uuc3RhcnRzV2l0aCgnL2luZGV4LycpKXtwYWdlPXBhZ2Uuc2xpY2UoNik7fWVsc2UgaWYocGFnZT09PScvaW5kZXgnKXtwYWdlPScvJzt9cmV0dXJuIHBhZ2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsImNvbnN0IEFycm93TGVmdCA9ICh7XG4gIGNvbG9yID0gJ2N1cnJlbnRDb2xvcicsXG4gIHdpZHRoID0gJzE5cHgnLFxuICBoZWlnaHQgPSAnMTJweCcsXG4gIC4uLnByb3BzXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB3aWR0aD17d2lkdGh9XG4gICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgIHZpZXdCb3g9XCIwIDAgMTguNzM4IDEyXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBkYXRhLW5hbWU9XCJQYXRoIDE3MTQ3XCJcbiAgICAgICAgZD1cIk0xMjUyLjQ2OCw1MDEuODQ5bDUuNy01LjkyMiwxLjUsMS41NjctMy4zOTUsMy4xNDMuMDkxLjIxNGgxNC44NDl2Mi4xMDhIMTI1Ni4ybDMuNjU0LDMuNDMtMS41NTgsMS41MzhaXCJcbiAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0xMjUyLjQ2OCAtNDk1LjkyNylcIlxuICAgICAgICBmaWxsPXtjb2xvcn1cbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcnJvd0xlZnQ7XG4iLCJjb25zdCBBcnJvd1JpZ2h0ID0gKHtcbiAgY29sb3IgPSAnY3VycmVudENvbG9yJyxcbiAgd2lkdGggPSAnMTZweCcsXG4gIGhlaWdodCA9ICcxM3B4Jyxcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgdmlld0JveD1cIjAgMCAxNS4zMzMgMTIuODI1XCJcbiAgICA+XG4gICAgICA8ZyBkYXRhLW5hbWU9XCJhcnJvdy1mb3J3YXJkICgxKVwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtOTMgLTExMC41ODgpXCI+XG4gICAgICAgIDxwYXRoXG4gICAgICAgICAgZGF0YS1uYW1lPVwiUGF0aCAxNjYzOVwiXG4gICAgICAgICAgZD1cIk0yNjgsMTEybDQuNTE3LDVMMjY4LDEyMlwiXG4gICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0xNjUuMTg0IDApXCJcbiAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgc3Ryb2tlPXtjb2xvcn1cbiAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXG4gICAgICAgIC8+XG4gICAgICAgIDxsaW5lXG4gICAgICAgICAgZGF0YS1uYW1lPVwiTGluZSA2XCJcbiAgICAgICAgICB4MT1cIjEyLjMwOFwiXG4gICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDk0IDExNylcIlxuICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICBzdHJva2U9e2NvbG9yfVxuICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgc3Ryb2tlV2lkdGg9XCIyXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZz5cbiAgICA8L3N2Zz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFycm93UmlnaHQ7XG4iLCJjb25zdCBDYXJ0SWNvbiA9ICh7XG4gIGNvbG9yID0gJ2N1cnJlbnRDb2xvcicsXG4gIHdpZHRoID0gJzE4cHgnLFxuICBoZWlnaHQgPSAnMThweCcsXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB3aWR0aD17d2lkdGh9XG4gICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgIHZpZXdCb3g9XCIwIDAgMTggMThcIlxuICAgID5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNNC43LDMuOEgxNy4zYS45LjksMCwwLDEsLjkuOVYxNy4zYS45LjksMCwwLDEtLjkuOUg0LjdhLjkuOSwwLDAsMS0uOS0uOVY0LjdBLjkuOSwwLDAsMSw0LjcsMy44Wk0yLDQuN0EyLjcsMi43LDAsMCwxLDQuNywySDE3LjNBMi43LDIuNywwLDAsMSwyMCw0LjdWMTcuM0EyLjcsMi43LDAsMCwxLDE3LjMsMjBINC43QTIuNywyLjcsMCwwLDEsMiwxNy4zWk0xMSwxMUM4LjUxNSwxMSw2LjUsOC41ODIsNi41LDUuNkg4LjNjMCwyLjMwOSwxLjUsMy42LDIuNywzLjZzMi43LTEuMjkxLDIuNy0zLjZoMS44QzE1LjUsOC41ODIsMTMuNDg1LDExLDExLDExWlwiXG4gICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMiAtMilcIlxuICAgICAgICBmaWxsPXtjb2xvcn1cbiAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXJ0SWNvbjtcbiIsImNvbnN0IENoZXZyb25MZWZ0ID0gKHtcbiAgY29sb3IgPSAnY3VycmVudENvbG9yJyxcbiAgd2lkdGggPSAnOC41cHgnLFxuICBoZWlnaHQgPSAnMTRweCcsXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB3aWR0aD17d2lkdGh9XG4gICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgIHZpZXdCb3g9XCIwIDAgOC40IDE0XCJcbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBpZD1cImNoZXZyb24tbGVmdFwiXG4gICAgICAgIGQ9XCJNMTYuMTU3LDYuMzI5bC0xLjQtMS40LTcsNyw3LDcsMS40LTEuNC01LjYtNS42WlwiXG4gICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtNy43NTcgLTQuOTMpXCJcbiAgICAgICAgZmlsbD17Y29sb3J9XG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hldnJvbkxlZnQ7XG4iLCJjb25zdCBDaGV2cm9uUmlnaHQgPSAoe1xuICBjb2xvciA9ICdjdXJyZW50Q29sb3InLFxuICB3aWR0aCA9ICc4LjVweCcsXG4gIGhlaWdodCA9ICcxNHB4Jyxcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgdmlld0JveD1cIjAgMCA4LjQgMTRcIlxuICAgID5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNNy43NTcsNi4zMjlsMS40LTEuNCw3LDctNyw3LTEuNC0xLjQsNS42LTUuNlpcIlxuICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTcuNzU3IC00LjkyOSlcIlxuICAgICAgICBmaWxsPXtjb2xvcn1cbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDaGV2cm9uUmlnaHQ7XG4iLCJjb25zdCBDbG9zZUljb24gPSAoe1xuICBjb2xvciA9ICdjdXJyZW50Q29sb3InLFxuICB3aWR0aCA9ICcxOHB4JyxcbiAgaGVpZ2h0ID0gJzE4cHgnLFxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICB2aWV3Qm94PVwiMCAwIDE4IDE4XCJcbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTYuNTcyLDQuODdhMS4yLDEuMiwwLDAsMC0xLjcsMS43bDYuOTQ3LDYuOTQ3TDQuODcsMjAuNDY1YTEuMiwxLjIsMCwxLDAsMS43LDEuN2w2Ljk0Ni02Ljk0Niw2Ljk0Niw2Ljk0NmExLjIsMS4yLDAsMCwwLDEuNy0xLjdsLTYuOTQ2LTYuOTQ2LDYuOTQ3LTYuOTQ3YTEuMiwxLjIsMCwwLDAtMS43LTEuN2wtNi45NDYsNi45NDdaXCJcbiAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC00LjUxOCAtNC41MTgpXCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDbG9zZUljb247XG4iLCJjb25zdCBFbXB0eUNhcnRTVkcgPSAoe1xuICBjb2xvciA9ICdjdXJyZW50Q29sb3InLFxuICB3aWR0aCA9ICcxNjZweCcsXG4gIGhlaWdodCA9ICcyMTBweCcsXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB3aWR0aD17d2lkdGh9XG4gICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgIHZpZXdCb3g9XCIwIDAgMTY1Ljc1OSAyMTBcIlxuICAgID5cbiAgICAgIDxnIGRhdGEtbmFtZT1cImVtcHR5IGNhcnRcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTc1OCAtNDE0Ljk5MilcIj5cbiAgICAgICAgPGcgZGF0YS1uYW1lPVwiw5HDq8Ouw6kgMlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg3NTggNDE0Ljk5MilcIj5cbiAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgZGF0YS1uYW1lPVwiUGF0aCAxNzE0OVwiXG4gICAgICAgICAgICBkPVwiTTc2MS4wMDgsNjEzLjljLTEuMzY0LDEuMDExLTIuNiwyLjIyNi0yLjUsNC4xNjQuMiw0LjEyMSw3LjI3OCw1LjExLDEwLjE3Miw1LjUsNS4xMjUuNywxMC4yNi41OTIsMTUuNDExLjc4N3EyOC4wNiwxLjA2Miw1Ni4xNDYuNCwxNC40MTUtLjMyMSwyOC44MTgtMS4wNDdjOC40MzQtLjQyMiwxNy44MjguMTE5LDI1LjgxOS0zLjEzOWExMTEuOTA1LDExMS45MDUsMCwwLDAsMTMuOS03YzMuNzIyLTIuMTYyLDguNTQ5LTQuMjI1LDEwLjc1NS04LjI2OCwzLjg2Ny03LjA4Ny05LjY4NS04LjQ4Ny0xMy40MTQtOS4yNjYtMTQuNjYyLTMuMDY0LTI5Ljc4Mi0zLjYwOS00NC43LTQuMDY0YTMzNS44NDgsMzM1Ljg0OCwwLDAsMC00NS41MDgsMS40MTljLTE4Ljk0NywyLTM5LjIwNiw4LjQxMS01NC42ODEsMjAuMzUzWlwiXG4gICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTc1OC4wMDEgLTQxNS4wMDgpXCJcbiAgICAgICAgICAgIGZpbGw9XCIjZjdmN2Y3XCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxnIGRhdGEtbmFtZT1cIkdyb3VwIDM3OTRcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMS40NzQgOTguOTY1KVwiPlxuICAgICAgICAgICAgPHJlY3RcbiAgICAgICAgICAgICAgZGF0YS1uYW1lPVwiUmVjdGFuZ2xlIDk0OVwiXG4gICAgICAgICAgICAgIHdpZHRoPVwiMTA4LjU2XCJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiNzQuNDE1XCJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDQwLjYxNSAxOC4zMTMpXCJcbiAgICAgICAgICAgICAgZmlsbD1cIiNmN2Y3ZjdcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxnIGRhdGEtbmFtZT1cIkdyb3VwIDM3ODhcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMzkuOTU5KVwiPlxuICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGRhdGEtbmFtZT1cIlBhdGggMTcxNTBcIlxuICAgICAgICAgICAgICAgIGQ9XCJNOTA4LjY1NCw1MzIuMjc5SDgwMC4wOTRsMTQuMzY5LTE2LjYwOWEzLjUxMSwzLjUxMSwwLDAsMSwyLjY1Ni0xLjIxNEg5MjIuMDhhLjkxMS45MTEsMCwwLDEsLjY4OSwxLjUwN1pcIlxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtNzk5LjQzOCAtNTEzLjk2NilcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjZmZmXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGcgZGF0YS1uYW1lPVwiR3JvdXAgMzc4N1wiPlxuICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICBkYXRhLW5hbWU9XCJQYXRoIDE3MTUxXCJcbiAgICAgICAgICAgICAgICAgIGQ9XCJNOTA4LjcwOCw1MzEuOEg4MDEuOGE1LjI3OCw1LjI3OCwwLDAsMC0xLjQ2NCwwLC42NzQuNjc0LDAsMCwxLS4xOSwwbC40ODIuNjcxLDEwLjU5Mi0xMi4yNDRjMS4yNTItMS40NDcsMi40NDctMi45ODMsMy43NzQtNC4zNjMuOTY5LTEuMDA4LDIuMDE4LS45MzYsMy4yMzUtLjkzNkg5MTguNzQ0YTIwLjYxOCwyMC42MTgsMCwwLDEsMi45LDBjMS4zMjMuMi4xLDEuNC0uNDA5LDEuOTlMOTA5LjExNiw1MzAuOTNsLTEsMS4xNTRjLS41My42MTIuNjg3LjgzNywxLjA3NC4zOUw5MjAuMSw1MTkuODY3bDIuNTE1LTIuOTA4Yy40MTgtLjQ4MywxLjA1Ny0xLjAzMywxLjAyLTEuNzI2LS4wNjktMS4zMy0xLjQxOC0xLjI1NS0yLjM3NS0xLjI1NUg4MTkuNjA5Yy0uNzc1LDAtMS41NTYtLjAyNy0yLjMzMSwwLTEuOTU3LjA2OC0zLjA3MywxLjE3Mi00LjI0OSwyLjUzMWwtMTIuMzkzLDE0LjMyNy0xLjA4MSwxLjI0OWMtLjMzOC4zOTEuMTE4LjY3MS40ODIuNjcxSDkwNC4xNjRjMS40LDAsMi44NTIuMTE3LDQuMjQ2LDAsLjA2Mi0uMDA1LjEyNywwLC4xOSwwQzkwOS4zMzcsNTMyLjc1NSw5MDkuNTc2LDUzMS44LDkwOC43MDgsNTMxLjhaXCJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtNzk5LjQzOCAtNTEzLjk2NilcIlxuICAgICAgICAgICAgICAgICAgZmlsbD1cIiMyNjI2MjZcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgIDxnIGRhdGEtbmFtZT1cIkdyb3VwIDM3OTFcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTMuNTA5IDE4LjA2NilcIj5cbiAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkYXRhLW5hbWU9XCJQYXRoIDE3MTUyXCJcbiAgICAgICAgICAgICAgICBkPVwiTTgwMC4yNTIsNTMyLjI4MWwtMjYuNjY5LDEwLjM4MnY3NC40MTVsMjYuNjY5LTEwWlwiXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC03NzIuOTg1IC01MzIuMDM0KVwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiNmN2Y3ZjdcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8ZyBkYXRhLW5hbWU9XCJHcm91cCAzNzg5XCI+XG4gICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgIGRhdGEtbmFtZT1cIlBhdGggMTcxNTNcIlxuICAgICAgICAgICAgICAgICAgZD1cIk04MDAuMDI1LDUzMi4xMTEsNzc2LjY4NCw1NDEuMmwtMy4zMjgsMS4zYy0uODQzLjMyOC0uMDU0LjUzNy40NTUuMzM5bDIzLjM0MS05LjA4NiwzLjMyOC0xLjNDODAxLjMyMyw1MzIuMTIyLDgwMC41MzQsNTMxLjkxMyw4MDAuMDI1LDUzMi4xMTFaXCJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtNzcyLjk4NSAtNTMyLjAzNClcIlxuICAgICAgICAgICAgICAgICAgZmlsbD1cIiMyNjI2MjZcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgICAgPGcgZGF0YS1uYW1lPVwiR3JvdXAgMzc5MFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgyNi42MjcgMy40NDYpXCI+XG4gICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgIGRhdGEtbmFtZT1cIlBhdGggMTcxNTRcIlxuICAgICAgICAgICAgICAgICAgZD1cIk04MDAuODk0LDYwNi45MDZWNTM1LjY0OWMwLS4zNDctMS4yNzktLjEyMi0xLjI3OS4zNDN2NzEuMjYxYzAsLjM0NywxLjI3OS4xMjIsMS4yNzktLjM0M1pcIlxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC03OTkuNjE1IC01MzUuNDgpXCJcbiAgICAgICAgICAgICAgICAgIGZpbGw9XCIjMjYyNjI2XCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICA8ZyBkYXRhLW5hbWU9XCJHcm91cCAzNzkzXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDAgMy42NzkpXCI+XG4gICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZGF0YS1uYW1lPVwiUGF0aCAxNzE1NVwiXG4gICAgICAgICAgICAgICAgZD1cIk04MDAuMjUxLDUzMi4yOGwtMjYuNjY5LDEwLjM4Mkw3NjAuOCw1MzAuMjE1YTIuMzM0LDIuMzM0LDAsMCwxLC44MDktMy44NTdsMjEuODU5LTguMmEyLjMzNSwyLjMzNSwwLDAsMSwyLjQyNS40OTJaXCJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTc1OS40NzUgLTUxNy42NDUpXCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiI2YyZjJmMlwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZGF0YS1uYW1lPVwiUGF0aCAxNzE1NlwiXG4gICAgICAgICAgICAgICAgZD1cIk03OTkuNTYyLDUzMi41NDhsLTI1Ljk4LDEwLjExMy0xMC44NTktMTAuNzc0YTIuMzM0LDIuMzM0LDAsMCwxLC44MDktMy44NTdsNy41NTktMi44MDZjMy43LTEuMzcyLDguMTYzLTQuMTg2LDEyLjI0LTMuMzE1Qzc4Ni4yNTQsNTIyLjUzNiw3OTkuMjUzLDUzMi4yNjksNzk5LjU2Miw1MzIuNTQ4WlwiXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC03NTkuNDc1IC01MTcuNjQ1KVwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiNmZmZcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8ZyBkYXRhLW5hbWU9XCJHcm91cCAzNzkyXCI+XG4gICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgIGRhdGEtbmFtZT1cIlBhdGggMTcxNTdcIlxuICAgICAgICAgICAgICAgICAgZD1cIk03OTkuOTgsNTMxLjk1bC0yMy4zNDEsOS4wODYtMy4zMjgsMS4zLjg1OS4wNjEtOS44LTkuNTQtMi4yODMtMi4yMjNhMy45NDUsMy45NDUsMCwwLDEtMS4yODgtMS42ODNjLS41ODctMi4xOCwyLjI4Ni0yLjcxNCwzLjc0MS0zLjI1OWwxNS41NDUtNS44MjdjMS4xOTMtLjQ0NywzLjQzMy0xLjgxOCw0LjczNy0xLjIyOWE1LjM5Myw1LjM5MywwLDAsMSwxLjM1NiwxLjEyNWwyLjI0MSwyLjEyNiwxMS4yNDIsMTAuNjY2Yy4zNzguMzU5LDEuNTg4LS4xNDgsMS4xNzgtLjUzN2wtMTAuNTgtMTAuMDQ0Yy0xLjI1MS0xLjE4Ny0yLjQ1Ny0yLjQ3MS0zLjc3Ny0zLjU4My0xLjYzMS0xLjM3NC0zLjMyNC0uNTQzLTUuMDIzLjA5NGwtMTYuMzgsNi4xNDFhMjcuMTA1LDI3LjEwNSwwLDAsMC00LjE5MiwxLjYyMywyLjcxNSwyLjcxNSwwLDAsMC0uNzkyLDQuMTExLDE2LjIxOCwxNi4yMTgsMCwwLDAsMS4xNjYsMS4xNTFsMTEuNzMsMTEuNDIyYS44LjgsMCwwLDAsLjg1OS4wNjFsMjMuMzQxLTkuMDg2LDMuMzI4LTEuM0M4MDEuMzQzLDUzMi4yODgsODAwLjYwOSw1MzEuNyw3OTkuOTgsNTMxLjk1WlwiXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTc1OS40NzUgLTUxNy42NDUpXCJcbiAgICAgICAgICAgICAgICAgIGZpbGw9XCIjMjYyNjI2XCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICA8L2c+XG4gICAgICAgICAgPC9nPlxuICAgICAgICAgIDxnIGRhdGEtbmFtZT1cIkdyb3VwIDM4MDdcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMCAxMTYuODIzKVwiPlxuICAgICAgICAgICAgPHJlY3RcbiAgICAgICAgICAgICAgZGF0YS1uYW1lPVwiUmVjdGFuZ2xlIDk1MFwiXG4gICAgICAgICAgICAgIHdpZHRoPVwiMTA4Ljg5N1wiXG4gICAgICAgICAgICAgIGhlaWdodD1cIjc0LjQxNVwiXG4gICAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxNS4wODMgMTAuODM3KVwiXG4gICAgICAgICAgICAgIGZpbGw9XCIjZjJmMmYyXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICBkYXRhLW5hbWU9XCJQYXRoIDE3MTU4XCJcbiAgICAgICAgICAgICAgZD1cIk04ODEuOTgyLDU0NC4yMDZjLTMuNDkzLDUuMjA3LTcuNTE3LDEyLjIxMS0xMC4wMTgsMTYuNjgzYTguNTgsOC41OCwwLDAsMS03LjQ3Miw0LjM5NGwtOTEuNDA3LjJ2NTEuNmgxMDguOVpcIlxuICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTc1OC4wMDIgLTUzMS44MjcpXCJcbiAgICAgICAgICAgICAgZmlsbD1cIiNmZmZcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxnIGRhdGEtbmFtZT1cIkdyb3VwIDM3OTZcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTIzLjM0MiAwLjQ1NSlcIj5cbiAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkYXRhLW5hbWU9XCJQYXRoIDE3MTU5XCJcbiAgICAgICAgICAgICAgICBkPVwiTTkwOC42NjIsNTMyLjI4MWwtMjYuNjY5LDEwLjM4MnY3NC40MTVsMjYuNjY5LTEwWlwiXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC04ODEuMzUzIC01MzIuMjgxKVwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiNmN2Y3ZjdcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGRhdGEtbmFtZT1cIlBhdGggMTcxNjBcIlxuICAgICAgICAgICAgICAgIGQ9XCJNOTA4LjY2MSw1NTYuOTUybC04Ljg1NiwzLjU1NWE3LjI1NSw3LjI1NSwwLDAsMS04LjUtMi4zNzNsLTkuMzExLTEyLjM4NlY2MTcuMDhsMjYuNjY5LTEwWlwiXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC04ODEuMzUzIC01MzIuMjgyKVwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiNmMmYyZjJcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8ZyBkYXRhLW5hbWU9XCJHcm91cCAzNzk1XCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDAgMTMuMjY1KVwiPlxuICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICBkYXRhLW5hbWU9XCJQYXRoIDE3MTYxXCJcbiAgICAgICAgICAgICAgICAgIGQ9XCJNODgxLjM1Myw1NDYuMDE2djY4LjQ1OWMwLC4yNzQsMS4yNzkuMDczLDEuMjc5LS4zNDNWNTQ1LjY3M0M4ODIuNjMyLDU0NS40LDg4MS4zNTMsNTQ1LjYsODgxLjM1Myw1NDYuMDE2WlwiXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTg4MS4zNTMgLTU0NS41NDcpXCJcbiAgICAgICAgICAgICAgICAgIGZpbGw9XCIjMjYyNjI2XCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICA8ZyBkYXRhLW5hbWU9XCJHcm91cCAzNzk3XCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDE0LjQ3NyAwLjE4MilcIj5cbiAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkYXRhLW5hbWU9XCJQYXRoIDE3MTYyXCJcbiAgICAgICAgICAgICAgICBkPVwiTTc3Mi44MjQsNTQyLjk3Nkg4NzYuNDYyYzEuNzEzLDAsMy41MjUuMTY5LDUuMjMzLDBhMTEuNjU3LDExLjY1NywwLDAsMCwyLjgzMS0xbDcuNzQ3LTMuMDE2LDE1LjYxNS02LjA3OCwxLS4zOTFjLjgzOC0uMzI2LjA2Mi0uNjIyLS40NzUtLjQxM2wtMTEuOTg3LDQuNjY3Yy00Ljc2LDEuODUzLTkuNjY2LDMuNS0xNC4zMzQsNS41OC0uNjMzLjI4MS4wNTguMDE1LjA4My4wMy0uMTExLS4wNjUtLjQ1OCwwLS41ODQsMEg3OTMuOGMtNi43MDcsMC0xMy40NDgtLjItMjAuMTUzLDBoLS4zYy0uNDE3LDAtMS4zNzguNjI1LS41MjQuNjI1WlwiXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC03NzIuNDc4IC01MzIuMDA4KVwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiMyNjI2MjZcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgPGcgZGF0YS1uYW1lPVwiR3JvdXAgMzc5OFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxNC40MzUgMjMuMTEpXCI+XG4gICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZGF0YS1uYW1lPVwiUGF0aCAxNzE2M1wiXG4gICAgICAgICAgICAgICAgZD1cIk05MDgsNTU1LjQ1OXY1MS42NzJsLjM2NC0uNDI4LTEyLjEsNC41MzdjLTQuNzQ0LDEuNzc5LTkuNjExLDMuMzczLTE0LjI3Niw1LjM1Mi0uNTUxLjIzNC4xMzcuMDQxLS4wMzcuMDE4YTQuODM3LDQuODM3LDAsMCwwLS42MTQsMEg3NzUuNzU4YTEzLjEzNywxMy4xMzcsMCwwLDAtMi4zMTMsMCwxLjY2NCwxLjY2NCwwLDAsMS0uMywwbC41OTIuNDIzVjU2Mi42NjFjMC0uNjcxLTEuMy0uNDgzLTEuMy4xdjU0LjM3MWMwLC4zMzIuMzA5LjQyMy41OTIuNDIzSDg3Ni41NDVhNDAuNjcxLDQwLjY3MSwwLDAsMCw1LjM0MSwwLDEzLjI2NSwxMy4yNjUsMCwwLDAsMi42NC0uOTM4bDcuNjU0LTIuODcsMTUuNzQzLTUuOSwxLjAxNS0uMzhhLjU3My41NzMsMCwwLDAsLjM2NC0uNDI4VjU1NS4zNjRjMC0uNjcxLTEuMy0uNDgzLTEuMy4xWlwiXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC03NzIuNDM3IC01NTQuOTM4KVwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiMyNjI2MjZcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgPGcgZGF0YS1uYW1lPVwiR3JvdXAgMzgwMFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwIDEwLjM5NilcIj5cbiAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkYXRhLW5hbWU9XCJQYXRoIDE3MTY0XCJcbiAgICAgICAgICAgICAgICBkPVwiTTg4MS45ODIsNTQyLjY2N2gtMTA4LjlsLTE0LjM1OCwxNi42YS43NDIuNzQyLDAsMCwwLC41NjEsMS4yMjdIODY2LjIyNGEuNzQyLjc0MiwwLDAsMCwuNTYxLS4yNTdaXCJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTc1OC4wMDEgLTU0Mi4yMjIpXCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiI2YyZjJmMlwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZGF0YS1uYW1lPVwiUGF0aCAxNzE2NVwiXG4gICAgICAgICAgICAgICAgZD1cIk04ODEuOTgzLDU0Mi42NjdINzc0LjE1OWMtMS42NTksMy4yMDYtMy4yNTMsNi40NTQtNS4wMDYsOS42MS0xLjA3NywxLjk0LTEuMjg0LDUuMSwxLjg2NCw1LjFoOTIuNDY4YTYuOTQ4LDYuOTQ4LDAsMCwwLDQuNzQxLTEuODY5WlwiXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC03NTguMDAxIC01NDIuMjIyKVwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiNmZmZcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8ZyBkYXRhLW5hbWU9XCJHcm91cCAzNzk5XCI+XG4gICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgIGRhdGEtbmFtZT1cIlBhdGggMTcxNjZcIlxuICAgICAgICAgICAgICAgICAgZD1cIk04ODIuMjE3LDU0Mi4yNTFoLTEwOC4yYTIuMTU4LDIuMTU4LDAsMCwwLTEuNDc2LjI4Nyw5LjQwNiw5LjQwNiwwLDAsMC0xLjA2MiwxLjIyOGwtMi4yNDEsMi41OTJMNzU4LjU3NCw1NTguNjljLS43NTkuODc4LS45NSwyLjEuNTkyLDIuMjE3LjU5LjA0MywxLjIsMCwxLjc5MiwwSDg2NC4zNzljLjUxOSwwLDEuMDQ5LjAzMywxLjU2NywwLDEuMjU2LS4wNzksMS44MjktMS4wNjMsMi41ODYtMS45MzhsMTEuMi0xMi45NDksMi43NzUtMy4yMDhjLjUxMi0uNTkyLS43MTgtLjY3Ni0xLjA0OC0uMjk0bC0xMC42MjksMTIuMjljLTEuNDg5LDEuNzIxLTIuOTI4LDMuNTA3LTQuNDc2LDUuMTc0LS4yLjIyMS4zMDcuMDM2LS4xMTMuMWE2Ljg0Myw2Ljg0MywwLDAsMS0uOTI4LDBINzYyLjk0OWEyMS40MiwyMS40MiwwLDAsMS0yLjk3NywwYy0uMTA5LS4wMTYtLjM1MS4wNTctLjQ0NywwLS44MjctLjQ4NC40MjgtMS40NzguNzEtMS44bDEyLjI5My0xNC4yMTQsMS4wOC0xLjI0OC0uNzU5LjI2N0g4NjguM2M0LjQsMCw4Ljg2OC4yNDMsMTMuMjYsMGguMTlDODgyLjI5NCw1NDMuMDc5LDg4My4wNzksNTQyLjI1MSw4ODIuMjE3LDU0Mi4yNTFaXCJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtNzU4IC01NDIuMjIyKVwiXG4gICAgICAgICAgICAgICAgICBmaWxsPVwiIzI2MjYyNlwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgPGcgZGF0YS1uYW1lPVwiR3JvdXAgMzgwMlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxMjMuMzUpXCI+XG4gICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZGF0YS1uYW1lPVwiUGF0aCAxNzE2N1wiXG4gICAgICAgICAgICAgICAgZD1cIk05MDguNjYyLDUzMi4yODFsLTI2LjY2OSwxMC4zODEsMTQuODg5LDE0LjM4OGExLjE2NywxLjE2NywwLDAsMCwxLjIyMS4yNTNsMjQuMjczLTkuMWExLjE2NywxLjE2NywwLDAsMCwuNjg0LTEuNSwxLjE4LDEuMTgsMCwwLDAtLjI3Mi0uNDJaXCJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTg4MS4zNjIgLTUzMS44MjYpXCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiI2YyZjJmMlwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZGF0YS1uYW1lPVwiUGF0aCAxNzE2OFwiXG4gICAgICAgICAgICAgICAgZD1cIk05MDcuNzk0LDUzMi42MTlsLTI1LjQ3OCwxMC4xNzMsMTMuNCwxMy41MzFhMS4wMTcsMS4wMTcsMCwwLDAsMS4xLjIzOWwxMC4wNDktMy45MzksNi4wOC0yLjM4NGMxLjk4Ni0uNzc5LDQuNzY1LTEuNzE5LDQuNTIzLTQuNGE1LjQ0OCw1LjQ0OCwwLDAsMC0xLjc0Mi0zLjA2QzkxNC44MTMsNTQxLjgxMyw5MDguMjM5LDUzMy4wODEsOTA3Ljc5NCw1MzIuNjE5WlwiXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC04ODEuMzYyIC01MzEuODI2KVwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiNmZmZcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8ZyBkYXRhLW5hbWU9XCJHcm91cCAzODAxXCI+XG4gICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgIGRhdGEtbmFtZT1cIlBhdGggMTcxNjlcIlxuICAgICAgICAgICAgICAgICAgZD1cIk05MDguMzczLDUzMS44ODFsLTIzLjM0MSw5LjA4Ni0zLjMyOCwxLjNhLjQ2My40NjMsMCwwLDAtLjIuNzgxbDExLDEwLjYzYTQ3LjM1OSw0Ny4zNTksMCwwLDAsMy44ODcsMy43NTZjMS4zLjk5MiwzLjMwNy0uMjE2LDQuNjIyLS43MDhsMTcuNDMzLTYuNTM1YTQzLjQsNDMuNCwwLDAsMCw0LjIxOS0xLjU4MmMyLjU0MS0xLjI3Mi4wNjUtMy4yNDUtMS4wNjItNC4zNjNMOTA5LjI0NSw1MzJjLS40MjktLjQyNS0xLjYzNS4xMTItMS4xNjcuNTc2bDEwLjIzOSwxMC4xNDksMi43MTYsMi42OTJhNy42NTMsNy42NTMsMCwwLDEsMS4xNTgsMS4xNDZjLjkzMSwxLjUwNi0yLjQsMi4xMDctMy4zMTIsMi40NDlsLTE2Ljc1LDYuMjc5LTIuOTcyLDEuMTE0YTQuNjE0LDQuNjE0LDAsMCwxLTEuMzIzLjVjLS40My0uMDIzLS45MzItLjY3OS0xLjIxMS0uOTQ4bC0yLjMyNy0yLjI0OS0xMS44MTYtMTEuNDIzLS4yLjc4MSwyMy4zNDEtOS4wODYsMy4zMjgtMS4zQzkwOS43NjMsNTMyLjM2MSw5MDkuMDUsNTMxLjYxOCw5MDguMzczLDUzMS44ODFaXCJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtODgxLjM2MiAtNTMxLjgyNilcIlxuICAgICAgICAgICAgICAgICAgZmlsbD1cIiMyNjI2MjZcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgIDxnIGRhdGEtbmFtZT1cIkdyb3VwIDM4MDZcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTE1LjYyNyAyOS44NylcIj5cbiAgICAgICAgICAgICAgPGcgZGF0YS1uYW1lPVwiR3JvdXAgMzgwM1wiPlxuICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICBkYXRhLW5hbWU9XCJQYXRoIDE3MTcwXCJcbiAgICAgICAgICAgICAgICAgIGQ9XCJNODczLjYzOCw1NjIuMjMydjEyLjY0M2MwLC42OTEsMS4zLjUxOSwxLjMtLjA4NlY1NjIuMTQ2Qzg3NC45MzgsNTYxLjQ1NSw4NzMuNjM4LDU2MS42MjcsODczLjYzOCw1NjIuMjMyWlwiXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTg3My42MzggLTU2MS42OTgpXCJcbiAgICAgICAgICAgICAgICAgIGZpbGw9XCIjMjYyNjI2XCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICAgIDxnIGRhdGEtbmFtZT1cIkdyb3VwIDM4MDRcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMC4wMSAxNS40MjMpXCI+XG4gICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgIGRhdGEtbmFtZT1cIlBhdGggMTcxNzFcIlxuICAgICAgICAgICAgICAgICAgZD1cIk04NzMuNjQ4LDU3Ny41ODJ2MS45OWMwLC41MzYsMS4yNzkuMjY4LDEuMjc5LS4xNTd2LTEuOTk0YzAtLjUzNi0xLjI3OS0uMjY4LTEuMjc5LjE1OFpcIlxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC04NzMuNjQ4IC01NzcuMTIyKVwiXG4gICAgICAgICAgICAgICAgICBmaWxsPVwiIzI2MjYyNlwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgICA8ZyBkYXRhLW5hbWU9XCJHcm91cCAzODA1XCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDAuMDAzIDE5LjY2MilcIj5cbiAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgZGF0YS1uYW1lPVwiUGF0aCAxNzE3MlwiXG4gICAgICAgICAgICAgICAgICBkPVwiTTg3My42NDEsNTgxLjg3NHY1LjE5M2MwLC42NDksMS4yOTMuNDQ1LDEuMjkzLS4xMDd2LTUuMTk0Qzg3NC45MzQsNTgxLjExNyw4NzMuNjQxLDU4MS4zMjIsODczLjY0MSw1ODEuODc0WlwiXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTg3My42NDEgLTU4MS4zNjIpXCJcbiAgICAgICAgICAgICAgICAgIGZpbGw9XCIjMjYyNjI2XCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICA8L2c+XG4gICAgICAgICAgPC9nPlxuICAgICAgICAgIDxnIGRhdGEtbmFtZT1cIkdyb3VwIDM4MTZcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTI5LjAyMiAxNzIuNjUzKVwiPlxuICAgICAgICAgICAgPGcgZGF0YS1uYW1lPVwiR3JvdXAgMzgxNVwiPlxuICAgICAgICAgICAgICA8ZyBkYXRhLW5hbWU9XCJHcm91cCAzODA4XCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDAuMDYxIDguODQxKVwiPlxuICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICBkYXRhLW5hbWU9XCJQYXRoIDE3MTczXCJcbiAgICAgICAgICAgICAgICAgIGQ9XCJNODg3LjgsNjAxLjEzM2wxMS41NDUtMy43MjljLjc2OC0uMjQ4LjU1My0xLjEwOS0uMjMtLjg1NmwtMTEuNTQ0LDMuNzI0Yy0uNzY4LjI0OC0uNTU0LDEuMTA5LjIyOS44NTdaXCJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtODg3LjA5NSAtNTk2LjUwMilcIlxuICAgICAgICAgICAgICAgICAgZmlsbD1cIiNlNmU2ZTZcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgICAgPGcgZGF0YS1uYW1lPVwiR3JvdXAgMzgwOVwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwLjA3OSA0LjQpXCI+XG4gICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgIGRhdGEtbmFtZT1cIlBhdGggMTcxNzRcIlxuICAgICAgICAgICAgICAgICAgZD1cIk04ODcuNzc5LDU5Ni41NTZsMTEuNDktMy43NjNjLjc0OC0uMjQ1LjU4Ny0uOTI5LS4xODEtLjY3N2wtMTEuNDksMy43NjNDODg2Ljg1LDU5Ni4xMjQsODg3LjAxMSw1OTYuODA3LDg4Ny43NzksNTk2LjU1NlpcIlxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC04ODcuMTEzIC01OTIuMDYxKVwiXG4gICAgICAgICAgICAgICAgICBmaWxsPVwiI2U2ZTZlNlwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgICA8ZyBkYXRhLW5hbWU9XCJHcm91cCAzODEwXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDAuMDg4KVwiPlxuICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICBkYXRhLW5hbWU9XCJQYXRoIDE3MTc1XCJcbiAgICAgICAgICAgICAgICAgIGQ9XCJNODg3Ljc2OCw1OTIuMTE2bDExLjQzOC0zLjhjLjczOC0uMjQ1LjYtLjg0Ny0uMTU5LS41OTVsLTExLjQzOCwzLjhDODg2Ljg3MSw1OTEuNzY2LDg4Ny4wMDksNTkyLjM2OCw4ODcuNzY4LDU5Mi4xMTZaXCJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtODg3LjEyMiAtNTg3LjY2MSlcIlxuICAgICAgICAgICAgICAgICAgZmlsbD1cIiNlNmU2ZTZcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgICAgPGcgZGF0YS1uYW1lPVwiR3JvdXAgMzgxNFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwIDEyLjM2OClcIj5cbiAgICAgICAgICAgICAgICA8ZyBkYXRhLW5hbWU9XCJHcm91cCAzODExXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDAgMi43NzkpXCI+XG4gICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICBkYXRhLW5hbWU9XCJQYXRoIDE3MTc2XCJcbiAgICAgICAgICAgICAgICAgICAgZD1cIk04ODcuODE0LDYwNC42bDIuNTQ5LS44MTRjLjI2NC0uMDg0LjYtLjMxOS41MTMtLjY0My0uMDgyLS4zMDctLjUtLjM4NC0uNzY2LS4zbC0yLjU0OS44MTRjLS4yNjQuMDg0LS42LjMxOC0uNTEzLjY0M0M4ODcuMTMsNjA0LjYsODg3LjU0OCw2MDQuNjgyLDg4Ny44MTQsNjA0LjZaXCJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC04ODcuMDM0IC02MDIuODA5KVwiXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjZTZlNmU2XCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgICAgIDxnIGRhdGEtbmFtZT1cIkdyb3VwIDM4MTJcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNC40ODQgMS41KVwiPlxuICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1uYW1lPVwiUGF0aCAxNzE3N1wiXG4gICAgICAgICAgICAgICAgICAgIGQ9XCJNODkyLjI0MSw2MDIuOTg0bDIuNTcyLS44MjJjLjE2Ni0uMDUzLjYzMS0uMi41NjItLjQ1OXMtLjU2Ni0uMTY0LS43MTYtLjExNmwtMi41NzIuODIyYy0uMTY2LjA1My0uNjMxLjItLjU2Mi40NThzLjU2NS4xNjQuNzE2LjExNlpcIlxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTg5MS41MTggLTYwMS41MylcIlxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwiI2U2ZTZlNlwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgICAgICA8ZyBkYXRhLW5hbWU9XCJHcm91cCAzODEzXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDguOTk2KVwiPlxuICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1uYW1lPVwiUGF0aCAxNzE3OFwiXG4gICAgICAgICAgICAgICAgICAgIGQ9XCJNODk2Ljc3NCw2MDEuNmwyLjYtLjgyOWMuMi0uMDY0LjYyMi0uMjM4LjU0NS0uNTIycy0uNTQyLS4yNC0uNzMzLS4xNzlsLTIuNi44MjljLS4yLjA2NC0uNjIyLjIzNy0uNTQ2LjUyMnMuNTQyLjI0LjczMy4xNzlaXCJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC04OTYuMDMxIC02MDAuMDMpXCJcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiNlNmU2ZTZcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICA8L2c+XG4gICAgICAgICAgPGcgZGF0YS1uYW1lPVwiR3JvdXAgMzgxOFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg1NC4xNDUgMTY1LjU1NilcIj5cbiAgICAgICAgICAgIDxnIGRhdGEtbmFtZT1cIkdyb3VwIDM4MTdcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMCAxMC4yNjYpXCI+XG4gICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZGF0YS1uYW1lPVwiUGF0aCAxNzE3OVwiXG4gICAgICAgICAgICAgICAgZD1cIk04MTMuMzYsNTk4LjI4MmMzLjQtMy45NjIsOS4wMjQtNi4yNTgsMTQuMTQyLTYuNDcyYTIxLjksMjEuOSwwLDAsMSwxMS4yMjMsMi41ODcsMjAuMTEsMjAuMTEsMCwwLDEsMy45NTksMi43N2MuNDI0LjQyNCwxLjYzMS0uMTEsMS4xNjgtLjU3NGEyMS4yMTUsMjEuMjE1LDAsMCwwLTEwLjMxMS01LjI0OEEyMi43NywyMi43NywwLDAsMCw4MTUuNiw1OTQuOTlhMTcuOTU2LDE3Ljk1NiwwLDAsMC0zLjMyLDIuODg4Yy0uNTMuNjE3LjY4Mi44NjYsMS4wNzguNDA2WlwiXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC04MTIuMTUgLTU5MC44MjkpXCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiIzI2MjYyNlwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICBkYXRhLW5hbWU9XCJQYXRoIDE3MTgwXCJcbiAgICAgICAgICAgICAgZD1cIk04MTcuNzQxLDU4Mi4wODFhMi4wNTgsMi4wNTgsMCwwLDEtMS4zMTYsMi40NjgsMS44MTUsMS44MTUsMCwwLDEtMi4xODctMS4zNDRjLS4wMS0uMDQxLS4wMTgtLjA4Mi0uMDI1LS4xMjRhMi4wNTgsMi4wNTgsMCwwLDEsMS4zMTYtMi40NjgsMS44MTUsMS44MTUsMCwwLDEsMi4xODcsMS4zNDRDODE3LjcyNiw1ODIsODE3LjczNCw1ODIuMDM5LDgxNy43NDEsNTgyLjA4MVpcIlxuICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTgxMi4xNSAtNTgwLjU2MylcIlxuICAgICAgICAgICAgICBmaWxsPVwiIzI2MjYyNlwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGVsbGlwc2VcbiAgICAgICAgICAgICAgZGF0YS1uYW1lPVwiRWxsaXBzZSAxMDVcIlxuICAgICAgICAgICAgICBjeD1cIjEuODJcIlxuICAgICAgICAgICAgICBjeT1cIjIuMDNcIlxuICAgICAgICAgICAgICByeD1cIjEuODJcIlxuICAgICAgICAgICAgICByeT1cIjIuMDNcIlxuICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMjcuMTk0IDAuNjc0KVwiXG4gICAgICAgICAgICAgIGZpbGw9XCIjMjYyNjI2XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9nPlxuICAgICAgICAgIDxnIGRhdGEtbmFtZT1cIkdyb3VwIDM4MTlcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMzYuNjIzKVwiPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgZGF0YS1uYW1lPVwiUGF0aCAxNzE4MVwiXG4gICAgICAgICAgICAgIGQ9XCJNODUyLjc4Myw1MzUuNDI1Yy01Ljg2LjctMTIuMTY2LDEuNDc0LTE3Ljc0NS0uOTYxLTQuNjMzLTIuMDIyLTguNDg2LTYuMjc0LTguMTg4LTExLjU4OS4zMS01LjUyMyw0LjMzMy05Ljg0NCw5LjIwNi0xMmEyOC43MzgsMjguNzM4LDAsMCwxLDE3LjI3Ny0xLjQ2NWMyLjcyNS41NjIsNi4wMSwxLjM2Nyw4LjI4NCwzLjA2MiwxLjksMS40MTgsMi42NTQsMy45NDYuODEyLDUuNzIxYTExLjc0NiwxMS43NDYsMCwwLDEtNS4xMTYsMi4zNzZjLTEuODQzLjUwNi0zLjcxNC45NzgtNS42LDEuMy05LjYsMS42Ny0yMC41LjA4NC0yOC4wMzEtNi41MTVhMTgsMTgsMCwwLDEtNi4zNTItMTMuMTQ1Yy0uMDE2LTUuMTUxLDIuODkzLTkuODQxLDYuOC0xMy4wMTksNy44MTktNi4zNTksMTguNjkyLTguMTcsMjguNDg4LTguMjE1YTg5LjY5Miw4OS42OTIsMCwwLDEsMTQuNDYxLDEuMTYyLDI3LjQ2NywyNy40NjcsMCwwLDEsNy41NTksMS45MTNjMi4zNzcsMS4xMzIsNC43OSwzLjUsNC4xNTgsNi4zOC0uNiwyLjcyNi0zLjc0MSwzLjU5LTYuMDc0LDQuMjY5YTM5LjIwOCwzOS4yMDgsMCwwLDEtOS4yNTgsMS40MjEsMTA2Ljk5NCwxMDYuOTk0LDAsMCwxLTE3LjcwOC0uOTA4LDk1LjQ0Myw5NS40NDMsMCwwLDEtMTYuMzU5LTMuMzQyLDM1LjU4OSwzNS41ODksMCwwLDEtMTAuOTQ1LTUuMTksMTcuNzg1LDE3Ljc4NSwwLDAsMS02LjY2Ny05LjQyMywyMS4zMTcsMjEuMzE3LDAsMCwxLC43NTEtMTMuMjMyYzMuMjA2LTguMjMyLDExLjI4Mi0xMy4zMTMsMTkuMjU3LTE2LjE4OGE4Ni4xMyw4Ni4xMywwLDAsMSwzNC4yMTktNC41NTksODkuODUzLDg5Ljg1MywwLDAsMSwxNy40MDcsMi44NTMsNzMuMDI0LDczLjAyNCwwLDAsMSw4LjU2OCwyLjhjMi4zMjguOTM1LDQuNywyLDUuODgzLDQuMzU5LDIuMjg3LDQuNTQ0LTIuMjQyLDguODQ4LTUuODU3LDEwLjg5LTMuOTY3LDIuMjQtOC42LDMuNTYyLTEyLjk4Niw0LjcyNmE4Ny44LDg3LjgsMCwwLDEtMTcuOTI3LDIuNDY1Yy01Ljc1LjMtMTEuNTIyLjUwOS0xNy4yODEuNDE2LTExLjA5MS0uMTc4LTIyLjQ2Ny0xLjU4Mi0zMi41LTYuNi04LjcxNS00LjM1OS0xNy4zLTEzLjI0LTE1LjExOS0yMy44NTcsMS4wMjktNS4wMTEsNC43Ny05LjM1LDguNjE5LTEyLjUxMWE0NS4yNTcsNDUuMjU3LDAsMCwxLDEzLjUtNy4zNWM5Ljk4Ni0zLjYsMjAuNzM3LTQuODQ4LDMxLjI3OC01LjQ2N2ExNTIuMzg2LDE1Mi4zODYsMCwwLDEsMzUuMTUxLDEuODkxLDE1NC41NDcsMTU0LjU0NywwLDAsMSwxNy4zNDIsNC4wNzhjLjM2MS4xMDcsMS41MTEtLjQ0MywxLjAyNi0uNTg3YTE1NS4zNDksMTU1LjM0OSwwLDAsMC03NC4xNzctMy40NjJjLTEwLjQ2MywyLjE2OS0yMS40MDgsNi4wMzgtMjguNzU2LDE0LjE3LTMuNiwzLjk5LTYuMDU0LDguODY1LTUuNDcxLDE0LjM1YTIyLjIxMSwyMi4yMTEsMCwwLDAsNy4yLDEzLjY3NWM4LjU3LDcuOTgyLDIxLjE0NywxMC45LDMyLjQ3NSwxMS45YTE1My43LDE1My43LDAsMCwwLDE4LjMuMzQ5LDE1OS4yOCwxNTkuMjgsMCwwLDAsMTkuNDY3LTEuNDI3LDgxLjIyMyw4MS4yMjMsMCwwLDAsMTUuODE5LTQuMjQzYzQuMTItMS41MzYsOC40ODgtMy43MzcsMTAuNzU5LTcuNjkzYTYuMjI3LDYuMjI3LDAsMCwwLC4yNDYtNi4zNTZjLTEuMjU5LTIuMjI2LTMuNDcyLTMuMjgtNS43NDItNC4yYTgyLjU4NSw4Mi41ODUsMCwwLDAtMTguMS00Ljg4OCw5MS41ODgsOTEuNTg4LDAsMCwwLTM3LjcsMS45MzdjLTguOTU3LDIuMzc1LTE4LjQ0OSw2LjM4OC0yMy44NTUsMTQuMzI3LTUuMDU4LDcuNDI5LTUuMzU2LDE4LjI1NywxLjAzMywyNS4wMDlhMjguNTQ5LDI4LjU0OSwwLDAsMCwxMS4wODcsNi43MzcsODIuNTUxLDgyLjU1MSwwLDAsMCwxNS43MjcsMy44MDlBMTE4LjgsMTE4LjgsMCwwLDAsODYxLDQ5Ni44NTdhNDguMzMzLDQ4LjMzMywwLDAsMCw5LjAzNS0uODc2LDIzLjQwNywyMy40MDcsMCwwLDAsNy43MDctMi42NCw0LjcyNSw0LjcyNSwwLDAsMCwyLjMtNS4xNzdjLS42MS0yLjQ5Mi0yLjktNC4xMjUtNS4xNjMtNS4wMjlhMzQuOTU4LDM0Ljk1OCwwLDAsMC03Ljc4Mi0xLjc1NXEtMy44NjEtLjU4My03Ljc1OS0uODU1Yy0xMC4zNi0uNzE4LTIxLjMxNS4yMTctMzAuNyw0Ljk5NC00LjU2NCwyLjMyNC04LjczNyw1LjYyMy0xMS4wMjEsMTAuMzFhMTUuOTIxLDE1LjkyMSwwLDAsMCwuOCwxNS4wNTNjNS4zMjgsOS4yLDE3LjA3NiwxMi42LDI3LjEsMTIuMjYzLDMuNTczLS4xMTgsMjMuNDkxLTIuMTQ1LDE4LjYzNi05LjczMy0xLjQ2Ni0yLjI5MS00LjY5MS0zLjE5NS03LjE0Ni0zLjkxOWEzNC40OTMsMzQuNDkzLDAsMCwwLTguNDIzLTEuNDA2Yy01LjQ4LS4yMDktMTEuMzI5LjktMTUuOTg4LDMuOTA5LTQuMjcyLDIuNzU4LTcuNDcsNy40OTEtNi45OSwxMi43NS40NzcsNS4yMiw0LjgyNCw5LjA1NSw5LjUxNiwxMC43NDMsNS41OTEsMi4wMTEsMTEuNzE2LDEuMjc1LDE3LjQ3Ny41ODMuNTk1LS4wNzEsMS4wODMtLjc1NC4xOTEtLjY0N1pcIlxuICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTc5NC42MjcgLTQxNC45OTIpXCJcbiAgICAgICAgICAgICAgZmlsbD1cIiMyNjI2MjZcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2c+XG4gICAgICAgIDwvZz5cbiAgICAgIDwvZz5cbiAgICA8L3N2Zz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEVtcHR5Q2FydFNWRztcbiIsImNvbnN0IFBsdXNJY29uID0gKHsgaWQsIC4uLnByb3BzIH0pID0+IHtcbiAgcmV0dXJuIChcbjxzdmcgICBoZWlnaHQ9XCIzMVwiXG4gICAgICB7Li4ucHJvcHN9IHZpZXdCb3g9XCIwIDAgNzYyIDM4MVwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuPHBhdGggZmlsbFJ1bGU9XCJldmVub2RkXCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNNzYxLjA5MSAxODcuNDM5Qzc2MC41MSAxNTYuOTE5IDc1My4yODcgMTI4LjA4IDczOC44MjMgMTAxLjE5OUM3MTguOTE2IDY0LjE4NyA2ODkuOTc1IDM2LjQzOSA2NTIuMDUyIDE4LjM0MkM2MTUuNjA5IDAuOTU3MDMzIDU3Ny4yNjYgLTMuNjU1OTUgNTM3LjU1MiAyLjc1NDA1QzUwOC4zNDQgNy40NjcwNSA0ODIuMTQ0IDE5LjE0MSA0NTguNjc4IDM3LjEwN0M0MzcuOTU5IDUyLjk4MiA0MjEuMDQxIDcyLjM3MSA0MDUuNzggOTMuMzc4QzQwNC44MDUgOTQuNzM4IDQwNS4yMyA5NS41NjkgNDA1Ljg5OCA5Ni43MThDNDE1LjAxMiAxMTIuMzU1IDQyNC4xMTMgMTI4LjAxNyA0MzMuMjA5IDE0My42NzRDNDMzLjc5NiAxNDQuNjY2IDQzNC4zOTYgMTQ1LjY0NiA0MzUuMTY5IDE0Ni45NzZDNDM1Ljk1NiAxNDUuNzU5IDQzNi41OTkgMTQ0Ljc5NyA0MzcuMjE3IDE0My44MjRDNDQ4LjA5MiAxMjYuNTIgNDU5LjkyNyAxMDkuOTY1IDQ3NC4zNjEgOTUuMzg4QzQ4NC45NDggODQuNjk1IDQ5Ni42OSA3NS41MTIgNTEwLjA5MiA2OC41N0M1MjYuODU5IDU5Ljg3NSA1NDQuNzI2IDU1LjYwNCA1NjMuNTM0IDU0LjY1NkM1ODkuMzUyIDUzLjM2NCA2MTMuNjYxIDU4LjcwNzEgNjM2LjE3OCA3MS4zMTAxQzY4Ny44NDcgMTAwLjIwMSA3MTQuNTk3IDE1NS43OSA3MDQuNTAyIDIxNC4wODlDNjk3Ljg1OSAyNTIuNDkzIDY3Ny41OTEgMjgyLjQ0NCA2NDUuMjc5IDMwNC4wOTRDNjI1LjcwMyAzMTcuMjE2IDYwMy45NDcgMzI0LjM4OCA1ODAuMzg4IDMyNi4wMTdDNTU5LjczMiAzMjcuNDQxIDUzOS43MDUgMzI0LjgzNyA1MjAuNTI5IDMxNi44MzRDNDk3LjM4MiAzMDcuMTcxIDQ3OS40OTEgMjkwLjg4NCA0NjMuODQ2IDI3MS44MDhDNDQ3LjA1NSAyNTEuMzMyIDQzMy42MDggMjI4LjY0NyA0MjAuNjYgMjA1LjY1QzQwNC4xMTcgMTc2LjMxIDM4Ny45ODEgMTQ2LjcyNyAzNzAuOTQ2IDExNy42NjhDMzU4Ljc5MiA5Ni45MyAzNDQuMzk3IDc3LjY1MyAzMjcuNzQyIDYwLjE4N0MyOTcuNTkgMjguNTU2IDI2MS41OTYgNy45MzcwMiAyMTcuODI0IDEuOTQ0MDJDMTk0Ljc5NSAtMS4yMTQ5OCAxNzEuODk3IC0wLjYxNDk2MiAxNDkuMTg3IDQuNDE2MDRDMTA5LjU4NCAxMy4xOCA3NS45OTQyIDMyLjU2OSA0OC43OTUyIDYyLjU5NkMyMC4wNTUyIDk0LjMyMSAzLjk2ODI0IDEzMS43NjMgMC4xMzUyMzcgMTc0LjQyNEMtMC4zMTM3NjMgMTc5LjQzNyAwLjM3OTIzNyAyMTAuNTgxIDEuODU4MjQgMjIwLjMxNEM1LjUyODI0IDI0NC4yOTEgMTMuNjgxMiAyNjYuNzU3IDI2LjE5ODIgMjg3LjU2M0M0Ni4xNjEyIDMyMC43ODcgNzMuNjAzMiAzNDUuOTQ0IDEwOC42MzYgMzYyLjU0MkMxNDUuNzM2IDM4MC4xMjcgMTg0LjYzMyAzODQuNzQ3IDIyNS4wMDMgMzc3LjYzNkMyNTcuMjY0IDM3MS45NzQgMjg1LjI3NCAzNTcuNTkyIDMwOS44NDUgMzM2LjIzMUMzMjcuMTMgMzIxLjE5OSAzNDEuNjI2IDMwMy43MTkgMzU0Ljc5MSAyODUuMDU1QzM1NS42OSAyODMuNzc1IDM1NS44MjEgMjgyLjkxMiAzNTQuOTkxIDI4MS40ODNDMzQ1LjU3NyAyNjUuMjY1IDMzNi4yNjMgMjQ5LjAxIDMyNi45MTIgMjMyLjc1NEMzMjYuNTE4IDIzMi4wNjcgMzI2LjA4MiAyMzEuNDE4IDMyNS41MiAyMzAuNTA3QzMyNC4zNzggMjMyLjMxOCAzMjMuMzc5IDIzMy45MjggMzIyLjM4IDIzNS41MjZDMzEwLjA5NSAyNTUuMjg0IDI5Ni43NDkgMjc0LjIxMSAyNzkuNzI1IDI5MC4yODZDMjU5LjgzNiAzMDkuMTEzIDIzNi43MjEgMzIxLjM0OSAyMDkuMzI5IDMyNS4wMzFDMTkwLjQ4MiAzMjcuNTc4IDE3MS44ODYgMzI2LjYzIDE1My41NzEgMzIxLjQ4NUM4MS4wNjQyIDMwMS4xMjMgMzguMzcyMiAyMjYuMDYzIDU4Ljg2MDIgMTU0LjE2MkM3MS4wMzMyIDExMS40OTUgOTguMTQ0MiA4MS41NTUgMTM4Ljk5NSA2NC4zNTdDMTU4Ljk1MyA1NS45MzYgMTc5Ljk0IDUzLjIzMiAyMDEuNTM5IDU0Ljg5M0MyMjEuODY1IDU2LjQ1NCAyNDAuODEgNjIuMTU5IDI1OC4xODkgNzIuODcyQzI3OC4zMDMgODUuMjc2IDI5My45MjIgMTAyLjMxMSAzMDcuODA1IDEyMS4xMDhDMzIzLjU2MSAxNDIuNDM5IDMzNi41MTQgMTY1LjQ4NiAzNDkuMjk5IDE4OC42NzFDMzY1LjkxNyAyMTguODAzIDM4MS42OTIgMjQ5LjQyMyA0MDAuOTE4IDI3OC4wNTFDNDE1LjYzMSAyOTkuOTQ5IDQzMS45OTkgMzIwLjQzOCA0NTIuMTg4IDMzNy42NDJDNDgzLjk1NyAzNjQuNzIyIDUyMC43MzEgMzc5LjAxNyA1NjIuMzkzIDM4MC42NzhDNTkzLjk0MyAzODEuOTM5IDYyNC4wNTYgMzc1Ljk5NiA2NTIuNTUzIDM2Mi4zNjNDNjg0LjM2NSAzNDcuMTM3IDcxMC4wNjYgMzI0Ljc3IDcyOS41NjEgMjk1LjM5OUM3NDguNzg4IDI2Ni40MjggNzU5LjAxMyAyMzQuNDQ4IDc2MC45MjMgMTk5Ljc1N0M3NjEuMDcyIDE5Ni45MjEgNzYxLjExIDE4OC4zMTkgNzYxLjA5MSAxODcuNDM5WlwiIGZpbGw9XCJibGFja1wiLz5cbjwvc3ZnPlxuXG5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBsdXNJY29uO1xuIiwiY29uc3QgTWludXNJY29uID0gKHtcbiAgY29sb3IgPSAnY3VycmVudENvbG9yJyxcbiAgd2lkdGggPSAnMTJweCcsXG4gIGhlaWdodCA9ICcycHgnLFxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICB2aWV3Qm94PVwiMCAwIDEyIDEuNVwiXG4gICAgPlxuICAgICAgPHJlY3RcbiAgICAgICAgZGF0YS1uYW1lPVwiUmVjdGFuZ2xlIDk3MFwiXG4gICAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgIGZpbGw9e2NvbG9yfVxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1pbnVzSWNvbjtcbiIsImNvbnN0IE5vdEZvdW5kID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB3aWR0aD1cIjE4MFwiXG4gICAgICBoZWlnaHQ9XCIzMDkuNzIyXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMTgwIDMwOS43MjJcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxnIGRhdGEtbmFtZT1cIm5vIGNhcnQgaW4gYmFnXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC05ODggLTc2NzMpXCI+XG4gICAgICAgIDxnIGRhdGEtbmFtZT1cIm5vIGNhcnRcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoOTg4IDc2NzMpXCI+XG4gICAgICAgICAgPGcgZGF0YS1uYW1lPVwiR3JvdXAgNTk3MFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwIDApXCI+XG4gICAgICAgICAgICA8ZyBkYXRhLW5hbWU9XCJHcm91cCA1OTY3XCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDE3LjQwOCA5Mi4xMTkpXCI+XG4gICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZGF0YS1uYW1lPVwiUGF0aCAxNzc0M1wiXG4gICAgICAgICAgICAgICAgZD1cIk00MDUuNTA2LDc5NC41ODFsNjMuNjIxLTM2Ljc2Mkw0MTguMiw3MjQuMjc0WlwiXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0zMjMuNDI4IC01NzYuOTc4KVwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiNiYTgwNjRcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGRhdGEtbmFtZT1cIlBhdGggMTc3NDRcIlxuICAgICAgICAgICAgICAgIGQ9XCJNMTM1LjcxMSwxNDAuNzI3bDMyLjkxOC0uMTIsMS4yODctMjAuMjI1LDc5LjQ1MSw0NS44NDMtMzQuNDIsMS4wODR2MTkuMTY1WlwiXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0xMTguOTg4IC0xMTkuMzczKVwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiNkYmE0ODBcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGRhdGEtbmFtZT1cIlBhdGggMTc3NDVcIlxuICAgICAgICAgICAgICAgIGQ9XCJNMzE0LjQsMjA2LjM0MSwyNzIsMTI0Ljc2MWwtMi4yNzksMjIuMDA4LDEuNCw1OS41NzJaXCJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTIyMC41MzcgLTEyMi42OTEpXCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiIzQ2MDEwMFwiXG4gICAgICAgICAgICAgICAgb3BhY2l0eT1cIjAuMVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZGF0YS1uYW1lPVwiUGF0aCAxNzc0NlwiXG4gICAgICAgICAgICAgICAgZD1cIk0xNDEuMjM3LDI1My4wNTZsLTEwLjI2LTQ3LjM4OCwzNC41OS0uMTI2djM3LjI0M1pcIlxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMTE1LjQwMiAtMTgzLjkwNClcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjOTk1YjQ3XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkYXRhLW5hbWU9XCJQYXRoIDE3NzQ3XCJcbiAgICAgICAgICAgICAgICBkPVwiTTUxMS4wMjksNDQ1LjI5NWwtNDkuMTM2LTIyLjE3OUw0NjAuOCwzODUuNDg5bDEuMDg5LTcyLjUxNSwzNS45NTQtMS4xMzNaXCJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTM2NS4zMyAtMjY0LjQ1NClcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjYTk2ZTU2XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkYXRhLW5hbWU9XCJQYXRoIDE3NzQ4XCJcbiAgICAgICAgICAgICAgICBkPVwiTTE0OC43NTUsMzk4Ljc1Nmw5LjU4LTcwLjMwNyw0LjktNzkuMTQ5TDgxLjE2MSwyMDEuOTExLDY2LjY3NywzNTEuMzY4WlwiXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC02Ni42NzcgLTE4MS4xNTMpXCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiI2RiYTQ4MFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZGF0YS1uYW1lPVwiUGF0aCAxNzc0OVwiXG4gICAgICAgICAgICAgICAgZD1cIk0zNDkuNDU5LDQyOS4zNzljLS40MTUsMS45NDItMi4xODIsMi42LTMuOTQ4LDEuNDZhNS43NTMsNS43NTMsMCwwLDEtMi40NDYtNS41NzJjLjQxNC0xLjk0MiwyLjE4Mi0yLjYsMy45NDgtMS40NkE1Ljc1Myw1Ljc1MywwLDAsMSwzNDkuNDU5LDQyOS4zNzlaXCJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTI3Ni4wNDYgLTM0OC44NzQpXCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiIzY3MjUxZFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZGF0YS1uYW1lPVwiUGF0aCAxNzc1MFwiXG4gICAgICAgICAgICAgICAgZD1cIk0yMDkuODE5LDM0OC43NTNjLS40MTUsMS45NDItMi4xODIsMi42LTMuOTQ4LDEuNDZhNS43NTMsNS43NTMsMCwwLDEtMi40NDYtNS41NzJjLjQxNS0xLjk0MiwyLjE4Mi0yLjYsMy45NDgtMS40NkE1Ljc1Myw1Ljc1MywwLDAsMSwyMDkuODE5LDM0OC43NTNaXCJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTE3MC4yMzMgLTI4Ny43NzkpXCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiIzY3MjUxZFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxnXG4gICAgICAgICAgICAgICAgZGF0YS1uYW1lPVwiR3JvdXAgNTk2NVwiXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDMxLjUwMyA2MC4xNjYpXCJcbiAgICAgICAgICAgICAgICBvcGFjaXR5PVwiMC4yXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICBkYXRhLW5hbWU9XCJQYXRoIDE3NzUxXCJcbiAgICAgICAgICAgICAgICAgIGQ9XCJNMjE5LjM1LDQ0MS41MDdhMTYuODYxLDE2Ljg2MSwwLDAsMS04LjQzOS0yLjI3MkEyOC4zNSwyOC4zNSwwLDAsMSwxOTYuODU4LDQxMmw0LjM4My00NS4yMjZhMi40MTQsMi40MTQsMCwwLDEsNC44MDYuNDY3bC00LjM4Myw0NS4yMjZhMjMuNDgzLDIzLjQ4MywwLDAsMCwxMS42MDgsMjIuNTU0LDEyLjA1NSwxMi4wNTUsMCwwLDAsMTguMDgxLTkuMjQ3bDMuODE5LTM5LjQxYTIuNDE0LDIuNDE0LDAsMCwxLDQuODA2LjQ2N2wtMy44MTksMzkuNDFhMTYuOTEyLDE2LjkxMiwwLDAsMS0xNi44MDksMTUuMjY2WlwiXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTE5Ni43MjcgLTM2NC41OTEpXCJcbiAgICAgICAgICAgICAgICAgIGZpbGw9XCIjNDYwMTAwXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZGF0YS1uYW1lPVwiUGF0aCAxNzc1MlwiXG4gICAgICAgICAgICAgICAgZD1cIk0xNjIuMzczLDExNi4yMTgsMTYxLjA2LDEzNi44NWwtMzQuNTkuMTI2LDgyLjA3OCw0Ny4zODhWMTY0LjczOGwzNS45NTQtMS4xMzJabTQ0Ljk2OCw0Ny4zNTF2MTguN2wtNzYuMzk1LTQ0LjEwNiwzMS4yNDctLjExMywxLjI2MS0xOS44MTksNzYuNzc0LDQ0LjNaXCJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTExMS45ODYgLTExNi4yMTgpXCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiI2ZjYzg5ZFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxnIGRhdGEtbmFtZT1cIkdyb3VwIDU5NjZcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMjkuMjQgNTcuNDUpXCI+XG4gICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgIGRhdGEtbmFtZT1cIlBhdGggMTc3NTNcIlxuICAgICAgICAgICAgICAgICAgZD1cIk0yMTAuMDA3LDQzMC4zYTE2Ljg2NCwxNi44NjQsMCwwLDEtOC40MzgtMi4yNzEsMjguMzUsMjguMzUsMCwwLDEtMTQuMDU0LTI3LjIzNWw0LjM4My00NS4yMjZhMi40MTQsMi40MTQsMCwwLDEsNC44MDYuNDY3bC00LjM4Myw0NS4yMjZhMjMuNDgzLDIzLjQ4MywwLDAsMCwxMS42MDgsMjIuNTU0LDEyLjA1NSwxMi4wNTUsMCwwLDAsMTguMDgxLTkuMjQ3bDMuODE5LTM5LjQxYTIuNDE0LDIuNDE0LDAsMCwxLDQuODA2LjQ2N2wtMy44MTksMzkuNDFBMTYuOTEyLDE2LjkxMiwwLDAsMSwyMTAuMDA3LDQzMC4zWlwiXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTE4Ny4zODQgLTM1My4zOClcIlxuICAgICAgICAgICAgICAgICAgZmlsbD1cIiM5OTViNDdcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkYXRhLW5hbWU9XCJQYXRoIDE3NzU0XCJcbiAgICAgICAgICAgICAgICBkPVwiTTQwNS41MDYsNTQ2Ljk5MSw0MTkuOTksNDg4LjA1VjM5Ny41MzRaXCJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTMyMy40MjggLTMyOS4zODgpXCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiIzk5NWI0N1wiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICA8ZyBkYXRhLW5hbWU9XCJHcm91cCA1OTY4XCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDAgMClcIj5cbiAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkYXRhLW5hbWU9XCJQYXRoIDE3NzU1XCJcbiAgICAgICAgICAgICAgICBkPVwiTTM5NC41NzMsMTIwLjZjLS4xNDItLjUuMjQ0LS44NTUuNS0xLjA4OGExLjQsMS40LDAsMCwwLC4yNzEtLjI5MywwLDAsMCwwLDAsMCwwLDEuMzksMS4zOSwwLDAsMC0uMzg0LS4xMDdjLS4zNC0uMDY1LS44NTMtLjE2Mi0xLS42NjVzLjI0NC0uODU1LjUtMS4wODhhMS4zOSwxLjM5LDAsMCwwLC4yNzEtLjI5MywwLDAsMCwwLDAsMCwwLDEuNCwxLjQsMCwwLDAtLjM4NC0uMTA3Yy0uMzQtLjA2NC0uODUzLS4xNjItMS0uNjY0cy4yNDQtLjg1NS41LTEuMDg4bC4wMDktLjAwOGEuOS45LDAsMCwwLC4yNTktLjQ4Mi4zOTEuMzkxLDAsMCwxLC4yNzYtLjI5Mi40MS40MSwwLDAsMSwuNS4zMTYsMS4xMjIsMS4xMjIsMCwwLDEtLjUxLDEuMDQ2LDEuNCwxLjQsMCwwLDAtLjI3MS4yOTIsMCwwLDAsMCwwLDAsMCwxLjQsMS40LDAsMCwwLC4zODQuMTA3Yy4zNC4wNjUuODUzLjE2MiwxLC42NjVzLS4yNDQuODU1LS41LDEuMDg4YTEuNCwxLjQsMCwwLDAtLjI3MS4yOTMsMCwwLDAsMCwwLDAsMCwxLjM5MSwxLjM5MSwwLDAsMCwuMzg0LjEwN2MuMzQuMDY1Ljg1My4xNjIsMSwuNjY1cy0uMjQ0Ljg1NS0uNSwxLjA4OGExLjI1NywxLjI1NywwLDAsMC0uMjczLjMsMCwwLDAsMCwwLDAsMCwxLjY0MSwxLjY0MSwwLDAsMCwuMzg3LjFjLjMzMS4wNjMuODI2LjE1Ny45ODMuNjI1YS40MTYuNDE2LDAsMCwxLS4yMS41MDcuMzkyLjM5MiwwLDAsMS0uNDU2LS4xMDkuNzg5Ljc4OSwwLDAsMC0uNDY0LS4yNTNoMEMzOTUuMjI5LDEyMS4yLDM5NC43MTYsMTIxLjEsMzk0LjU3MywxMjAuNlpcIlxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMzQ5LjA3NSAtMzcuNTE4KVwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiMyMTIxMjFcIlxuICAgICAgICAgICAgICAgIG9wYWNpdHk9XCIwLjNcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGRhdGEtbmFtZT1cIlBhdGggMTc3NjVcIlxuICAgICAgICAgICAgICAgIGQ9XCJNMzk1LjQ2OCwxMjAuNmMuMTQyLS41LS4yNDQtLjg1NS0uNS0xLjA4OGExLjQsMS40LDAsMCwxLS4yNzEtLjI5MywwLDAsMCwwLDEsMCwwLDEuMzksMS4zOSwwLDAsMSwuMzg0LS4xMDdjLjM0LS4wNjUuODUzLS4xNjIsMS0uNjY1cy0uMjQ0LS44NTUtLjUtMS4wODhhMS4zODksMS4zODksMCwwLDEtLjI3MS0uMjkzLDAsMCwwLDAsMSwwLDAsMS40LDEuNCwwLDAsMSwuMzg0LS4xMDdjLjM0LS4wNjQuODUzLS4xNjIsMS0uNjY0cy0uMjQ0LS44NTUtLjUtMS4wODhsLS4wMDktLjAwOGEuOS45LDAsMCwxLS4yNTktLjQ4Mi4zOTEuMzkxLDAsMCwwLS4yNzYtLjI5Mi40MS40MSwwLDAsMC0uNS4zMTYsMS4xMjIsMS4xMjIsMCwwLDAsLjUxLDEuMDQ2LDEuNCwxLjQsMCwwLDEsLjI3MS4yOTIsMCwwLDAsMCwxLDAsMCwxLjQsMS40LDAsMCwxLS4zODQuMTA3Yy0uMzQuMDY1LS44NTMuMTYyLTEsLjY2NHMuMjQ0Ljg1NS41LDEuMDg4YTEuNCwxLjQsMCwwLDEsLjI3MS4yOTMsMCwwLDAsMCwxLDAsMCwxLjM5LDEuMzksMCwwLDEtLjM4NC4xMDdjLS4zNC4wNjUtLjg1My4xNjItMSwuNjY1cy4yNDQuODU1LjUsMS4wODhhMS4yNTcsMS4yNTcsMCwwLDEsLjI3My4zLDAsMCwwLDAsMSwwLDAsMS42NDEsMS42NDEsMCwwLDEtLjM4Ny4xYy0uMzMxLjA2My0uODI2LjE1Ny0uOTgzLjYyNWEuNDE2LjQxNiwwLDAsMCwuMjEuNTA3LjM5Mi4zOTIsMCwwLDAsLjQ1Ni0uMTA5Ljc4OS43ODksMCwwLDEsLjQ2NC0uMjUzaDBDMzk0LjgxMiwxMjEuMiwzOTUuMzI2LDEyMS4xLDM5NS40NjgsMTIwLjZaXCJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTI2Mi43NiAtMjMuNzM2KVwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiMyMTIxMjFcIlxuICAgICAgICAgICAgICAgIG9wYWNpdHk9XCIwLjNcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGRhdGEtbmFtZT1cIlBhdGggMTc3NTZcIlxuICAgICAgICAgICAgICAgIGQ9XCJNMzc1LjQ0NywxNzkuMjc3YTIuNTM5LDIuNTM5LDAsMSwxLDMuMzQ2LDEuM0EyLjU0MiwyLjU0MiwwLDAsMSwzNzUuNDQ3LDE3OS4yNzdabTMuNzM3LTEuNjQzYTEuNTQzLDEuNTQzLDAsMSwwLS43OTEsMi4wMzRBMS41NDUsMS41NDUsMCwwLDAsMzc5LjE4NCwxNzcuNjM0WlwiXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0zNzUuMjMyIC01Mi40MDgpXCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiIzIxMjEyMVwiXG4gICAgICAgICAgICAgICAgb3BhY2l0eT1cIjAuM1wiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZGF0YS1uYW1lPVwiUGF0aCAxNzc2NFwiXG4gICAgICAgICAgICAgICAgZD1cIk0zNzUuNDQ3LDE3OS4yNzdhMi41MzksMi41MzksMCwxLDEsMy4zNDYsMS4zQTIuNTQyLDIuNTQyLDAsMCwxLDM3NS40NDcsMTc5LjI3N1ptMy43MzctMS42NDNhMS41NDMsMS41NDMsMCwxLDAtLjc5MSwyLjAzNEExLjU0NSwxLjU0NSwwLDAsMCwzNzkuMTg0LDE3Ny42MzRaXCJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTMzMy44ODggLTE3NS43MTYpXCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiIzIxMjEyMVwiXG4gICAgICAgICAgICAgICAgb3BhY2l0eT1cIjAuM1wiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZGF0YS1uYW1lPVwiUGF0aCAxNzc1N1wiXG4gICAgICAgICAgICAgICAgZD1cIk0zNTAuMDg2LDI2NC44YTEuODUyLDEuODUyLDAsMCwxLTIuNjgyLTIuNTQ3bC0uODY4LS44MjNhMy4wNDcsMy4wNDcsMCwwLDAsNC40MTcsNC4xOTRaXCJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTI1My42NDIgLTIwNi4zMDIpXCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiIzIxMjEyMVwiXG4gICAgICAgICAgICAgICAgb3BhY2l0eT1cIjAuM1wiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZGF0YS1uYW1lPVwiUGF0aCAxNzc2NlwiXG4gICAgICAgICAgICAgICAgZD1cIk0zNDYuNjI4LDI2NC44YTEuODUyLDEuODUyLDAsMCwwLDIuNjgyLTIuNTQ3bC44NjctLjgyM2EzLjA0NywzLjA0NywwLDAsMS00LjQxNyw0LjE5NFpcIlxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMTcwLjk1MyAtMTEwLjU1NylcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjMjEyMTIxXCJcbiAgICAgICAgICAgICAgICBvcGFjaXR5PVwiMC4xNVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZGF0YS1uYW1lPVwiVW5pb24gMTFcIlxuICAgICAgICAgICAgICAgIGQ9XCJNMi4wNTksNi45N2wuOTg5LTMuMDQ4TDAsMi45MzMuMjgzLDIuMDZsMy4wNDkuOTg5TDQuMzIxLDAsNS4yLjI4NGwtLjk5LDMuMDQ4LDMuMDQ3Ljk4OUw2Ljk3LDUuMmwtMy4wNDgtLjk5LS45OSwzLjA0OVpcIlxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg2LjUyOCA0OC41OTgpXCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiIzIxMjEyMVwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlPVwicmdiYSgwLDAsMCwwKVwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlTWl0ZXJsaW1pdD1cIjEwXCJcbiAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjFcIlxuICAgICAgICAgICAgICAgIG9wYWNpdHk9XCIwLjNcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGRhdGEtbmFtZT1cIlVuaW9uIDEzXCJcbiAgICAgICAgICAgICAgICBkPVwiTTIuMDU5LDYuOTdsLjk4OS0zLjA0OEwwLDIuOTMzLjI4MywyLjA2bDMuMDQ5Ljk4OUw0LjMyMSwwLDUuMi4yODRsLS45OSwzLjA0OCwzLjA0Ny45ODlMNi45Nyw1LjJsLTMuMDQ4LS45OS0uOTksMy4wNDlaXCJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoOTQuMjk0IDEyMS4xMzIpXCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiIzIxMjEyMVwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlPVwicmdiYSgwLDAsMCwwKVwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlTWl0ZXJsaW1pdD1cIjEwXCJcbiAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjFcIlxuICAgICAgICAgICAgICAgIG9wYWNpdHk9XCIwLjNcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGRhdGEtbmFtZT1cIlVuaW9uIDEyXCJcbiAgICAgICAgICAgICAgICBkPVwiTTEuMjM1LDQuMTgybC41OTMtMS44MjlMMCwxLjc1OWwuMTctLjUyNEwyLDEuODI5LDIuNTkyLDBsLjUyNS4xN0wyLjUyMywybDEuODI4LjU5NC0uMTcuNTIzTDIuMzUzLDIuNTIzLDEuNzU5LDQuMzUyWlwiXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDEwNy4zNTEgNi41MjgpXCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiIzIxMjEyMVwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlPVwicmdiYSgwLDAsMCwwKVwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlTWl0ZXJsaW1pdD1cIjEwXCJcbiAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjFcIlxuICAgICAgICAgICAgICAgIG9wYWNpdHk9XCIwLjNcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9nPlxuICAgICAgICAgIDwvZz5cbiAgICAgICAgPC9nPlxuICAgICAgPC9nPlxuICAgIDwvc3ZnPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTm90Rm91bmQ7XG4iLCJjb25zdCBDbG9zZUljb24gPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHdpZHRoPVwiMjAuMTgyXCJcbiAgICAgIGhlaWdodD1cIjIwLjg1MVwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDIwLjE4MiAyMC44NTFcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxnIGRhdGEtbmFtZT1cImNvbnRhY3QgaWNvblwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMzA1LjYzNiAtMTAwOS44ODgpXCI+XG4gICAgICAgIDxnIGRhdGEtbmFtZT1cIkdyb3VwIDU1MTdcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMzA2LjAzNiAxMDEzLjk1OSlcIj5cbiAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgZGF0YS1uYW1lPVwiUGF0aCAxNzM1MFwiXG4gICAgICAgICAgICBkPVwiTTMxOC44MjUsMTEwNy4zNzdhMTIuNzg5LDEyLjc4OSwwLDAsMS0xMi43ODktMTIuNzg5LDMuNTg0LDMuNTg0LDAsMCwxLDUuNTY0LTMsLjM1OS4zNTksMCwwLDEsLjE1Ni4yNDNsLjc0OCw0LjcxOGEuMzU5LjM1OSwwLDAsMS0uMDc0LjI4LDMuNTkyLDMuNTkyLDAsMCwxLTEuMTQyLjk0Myw4LjIwNiw4LjIwNiwwLDAsMCw0LjM1Miw0LjM1MywzLjU5MiwzLjU5MiwwLDAsMSwuOTQyLTEuMTQyLjM2LjM2LDAsMCwxLC4yOC0uMDc0bDQuNzE4Ljc0OGEuMzU5LjM1OSwwLDAsMSwuMjQzLjE1NiwzLjU0NywzLjU0NywwLDAsMSwuNTkyLDEuOTczQTMuNiwzLjYsMCwwLDEsMzE4LjgyNSwxMTA3LjM3N1ptLTkuMi0xNS42NjFhMi44NzYsMi44NzYsMCwwLDAtMi44NzMsMi44NzMsMTIuMDg0LDEyLjA4NCwwLDAsMCwxMi4wNzEsMTIuMDcxLDIuODY3LDIuODY3LDAsMCwwLDIuNDgyLTQuMzE4bC00LjM5NS0uN2EyLjg1NiwyLjg1NiwwLDAsMC0uNzU1LDEuMDczLjM1OS4zNTksMCwwLDEtLjQ1OS4yLDguOTE0LDguOTE0LDAsMCwxLTUuMjA2LTUuMjA2LjM1OS4zNTksMCwwLDEsLjItLjQ1OSwyLjg1NSwyLjg1NSwwLDAsMCwxLjA3My0uNzU1bC0uNy00LjM5NWEyLjgyNiwyLjgyNiwwLDAsMC0xLjQ0NS0uMzkxWlwiXG4gICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTMwNi4wMzYgLTEwOTAuOTk3KVwiXG4gICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICBzdHJva2VXaWR0aD1cIjAuOFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9nPlxuICAgICAgICA8ZyBkYXRhLW5hbWU9XCJHcm91cCA1NTIxXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDMxNS4zNjcgMTAxMC4zMzkpXCI+XG4gICAgICAgICAgPGcgZGF0YS1uYW1lPVwiR3JvdXAgNTUxOFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwLjEwNyA2LjYzMylcIj5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgIGRhdGEtbmFtZT1cIlBhdGggMTczNTFcIlxuICAgICAgICAgICAgICBkPVwiTTUxOS40NzEsMTE2MS4zNjdsLS42OTMtLjE5YTEuODU4LDEuODU4LDAsMCwwLTIuMjg1LTIuMjg0bC0uMTktLjY5M2EyLjU3NiwyLjU3NiwwLDAsMSwzLjE2OCwzLjE2NlpcIlxuICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTUxNi4zMDMgLTExNTguMTA5KVwiXG4gICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjAuOFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZz5cbiAgICAgICAgICA8ZyBkYXRhLW5hbWU9XCJHcm91cCA1NTE5XCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDAgMy4yNDUpXCI+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICBkYXRhLW5hbWU9XCJQYXRoIDE3MzUyXCJcbiAgICAgICAgICAgICAgZD1cIk01MjAuNDg3LDEwODkuMzg4bC0uNjkzLS4xOWE0LjYyMSw0LjYyMSwwLDAsMC01LjY4My01LjY3OGwtLjE5LS42OTNhNS4zMzksNS4zMzksMCwwLDEsNi41NjYsNi41NjFaXCJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC01MTMuOTIxIC0xMDgyLjYzNylcIlxuICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIwLjhcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2c+XG4gICAgICAgICAgPGcgZGF0YS1uYW1lPVwiR3JvdXAgNTUyMFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwLjM5OCAwKVwiPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgZGF0YS1uYW1lPVwiUGF0aCAxNzM1M1wiXG4gICAgICAgICAgICAgIGQ9XCJNNTMyLjEyMSwxMDE5LjkzNmwtLjY5My0uMTlhNi44NzIsNi44NzIsMCwwLDAtOC40NTEtOC40NDRsLS4xOS0uNjkzYTcuNTksNy41OSwwLDAsMSw5LjMzNCw5LjMyN1pcIlxuICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTUyMi43ODcgLTEwMTAuMzM5KVwiXG4gICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjAuOFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZz5cbiAgICAgICAgPC9nPlxuICAgICAgPC9nPlxuICAgIDwvc3ZnPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2xvc2VJY29uO1xuIiwiY29uc3QgUGx1c0ljb24gPSAoe1xuICBjb2xvciA9ICdjdXJyZW50Q29sb3InLFxuICB3aWR0aCA9ICcxMnB4JyxcbiAgaGVpZ2h0ID0gJzEycHgnLFxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIGRhdGEtbmFtZT1cInBsdXMgKDIpXCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICB2aWV3Qm94PVwiMCAwIDEyIDEyXCJcbiAgICA+XG4gICAgICA8ZyBkYXRhLW5hbWU9XCJHcm91cCA1MzY3XCI+XG4gICAgICAgIDxwYXRoXG4gICAgICAgICAgZGF0YS1uYW1lPVwiUGF0aCAxNzEzOFwiXG4gICAgICAgICAgZD1cIk02Ljc0OSw1LjI1MVYwaC0xLjVWNS4yNTFIMHYxLjVINS4yNTFWMTJoMS41VjYuNzQ5SDEydi0xLjVaXCJcbiAgICAgICAgICBmaWxsPXtjb2xvcn1cbiAgICAgICAgLz5cbiAgICAgIDwvZz5cbiAgICA8L3N2Zz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBsdXNJY29uO1xuIiwiY29uc3QgU2VhcmNoSWNvbiA9ICh7XG4gIGNvbG9yID0gJ2N1cnJlbnRDb2xvcicsXG4gIHdpZHRoID0gJzE0cHgnLFxuICBoZWlnaHQgPSAnMTRweCcsXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB3aWR0aD17d2lkdGh9XG4gICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgIHZpZXdCb3g9XCIwIDAgMTQgMTRcIlxuICAgID5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMTQuNzcxLDEyLjc1MiwxMS4zMiw5LjI4NmE1LjUxOSw1LjUxOSwwLDAsMCwxLjM3NC0zLjYzNEE1Ljc2Myw1Ljc2MywwLDAsMCw2LjgzOSwwLDUuNzYzLDUuNzYzLDAsMCwwLC45ODQsNS42NTIsNS43NjMsNS43NjMsMCwwLDAsNi44MzksMTEuM2E1LjkzNiw1LjkzNiwwLDAsMCwzLjM1NC0xLjAyM2wzLjQ3NywzLjQ5MmEuNzgzLjc4MywwLDAsMCwxLjA4LjAyQS43Mi43MiwwLDAsMCwxNC43NzEsMTIuNzUyWk02LjgzOSwxLjQ3NWE0LjI1OSw0LjI1OSwwLDAsMSw0LjMyNyw0LjE3OEE0LjI1OSw0LjI1OSwwLDAsMSw2LjgzOSw5LjgzLDQuMjU5LDQuMjU5LDAsMCwxLDIuNTExLDUuNjUyLDQuMjU5LDQuMjU5LDAsMCwxLDYuODM5LDEuNDc1WlwiXG4gICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMC45ODQpXCJcbiAgICAgICAgZmlsbD17Y29sb3J9XG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoSWNvbjtcbiIsImV4cG9ydCBjb25zdCBGYWNlYm9vayA9ICh7XG4gIGNvbG9yID0gJ2N1cnJlbnRDb2xvcicsXG4gIHdpZHRoID0gJzE1cHgnLFxuICBoZWlnaHQgPSAnMTVweCcsXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB3aWR0aD17d2lkdGh9XG4gICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgIHZpZXdCb3g9XCIwIDAgMTUgMTVcIlxuICAgID5cbiAgICAgIDxwYXRoXG4gICAgICAgIGRhdGEtbmFtZT1cIlBhdGggMTA3OVwiXG4gICAgICAgIGQ9XCJNNzcuMjI3LDY0SDY0Ljc3M2EuNzczLjc3MywwLDAsMC0uNzczLjc3M1Y3Ny4yMjdhLjc3My43NzMsMCwwLDAsLjc3My43NzNINzFWNzIuNDU4SDY5LjMyN1Y3MC40MTdINzFWNjguOTA3YTIuNjYsMi42NiwwLDAsMSwyLjg2OS0yLjc5M2MuNzczLDAsMS42LjA1OCwxLjguMDg0djEuODg5SDc0LjM4Yy0uODc5LDAtMS4wNDYuNDE2LTEuMDQ2LDEuMDI4djEuM2gyLjA5M2wtLjI3MywyLjA0Mkg3My4zMzNWNzhoMy44OTRBLjc3My43NzMsMCwwLDAsNzgsNzcuMjI3VjY0Ljc3M0EuNzczLjc3MywwLDAsMCw3Ny4yMjcsNjRaXCJcbiAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC02My41IC02My41KVwiXG4gICAgICAgIGZpbGw9e2NvbG9yfVxuICAgICAgICBzdHJva2U9XCJyZ2JhKDAsMCwwLDApXCJcbiAgICAgICAgc3Ryb2tlTWl0ZXJsaW1pdD1cIjEwXCJcbiAgICAgICAgc3Ryb2tlV2lkdGg9XCIxXCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgVHdpdHRlciA9ICh7XG4gIGNvbG9yID0gJ2N1cnJlbnRDb2xvcicsXG4gIHdpZHRoID0gJzIxcHgnLFxuICBoZWlnaHQgPSAnMTZweCcsXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB3aWR0aD17d2lkdGh9XG4gICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgIHZpZXdCb3g9XCIwIDAgMjAuNjQgMTUuMzM5XCJcbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBkYXRhLW5hbWU9XCJQYXRoIDEwODBcIlxuICAgICAgICBkPVwiTTM3LjMsNjUuNjU5YTcuMTM2LDcuMTM2LDAsMCwxLTIuMDI3LjU1OCwzLjU0MiwzLjU0MiwwLDAsMCwxLjU1My0xLjk1NCw3LjAxNCw3LjAxNCwwLDAsMS0yLjI0Mi44NTcsMy41MjksMy41MjksMCwwLDAtNi4xMDcsMi40MTQsMy40NTYsMy40NTYsMCwwLDAsLjA5MS44MDZBMTAsMTAsMCwwLDEsMjEuMyw2NC42NDVhMy41MzcsMy41MzcsMCwwLDAsMS4xLDQuNzE4LDMuNDQ4LDMuNDQ4LDAsMCwxLTEuNi0uNDQxdi4wNDRhMy41MzMsMy41MzMsMCwwLDAsMi44MzMsMy40NjQsMy41NTMsMy41NTMsMCwwLDEtLjkzLjEyNCwzLjMzLDMuMzMsMCwwLDEtLjY2NC0uMDY2LDMuNTM1LDMuNTM1LDAsMCwwLDMuMywyLjQ1NCw3LjA3Nyw3LjA3NywwLDAsMS00LjM4NiwxLjUxM0E3LjE1Myw3LjE1MywwLDAsMSwyMC4xLDc2LjQsOS44NjYsOS44NjYsMCwwLDAsMjUuNSw3OCw5Ljk4Myw5Ljk4MywwLDAsMCwzNS41NTUsNjcuOTQ1YzAtLjE1MywwLS4zMDYtLjAxMS0uNDU2QTcuMTg1LDcuMTg1LDAsMCwwLDM3LjMsNjUuNjU5WlwiXG4gICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMTguMDM0IC02My4xNjEpXCJcbiAgICAgICAgZmlsbD17Y29sb3J9XG4gICAgICAgIHN0cm9rZT1cInJnYmEoMCwwLDAsMClcIlxuICAgICAgICBzdHJva2VNaXRlcmxpbWl0PVwiMTBcIlxuICAgICAgICBzdHJva2VXaWR0aD1cIjFcIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBZb3V0dWJlID0gKHtcbiAgY29sb3IgPSAnY3VycmVudENvbG9yJyxcbiAgd2lkdGggPSAnMTlweCcsXG4gIGhlaWdodCA9ICcxNHB4Jyxcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgdmlld0JveD1cIjAgMCAxOC42NjQgMTRcIlxuICAgID5cbiAgICAgIDxwYXRoXG4gICAgICAgIGRhdGEtbmFtZT1cImxvZ28teW91dHViZSAoMSlcIlxuICAgICAgICBkPVwiTTE4LjUzOCw2Ny4wOTFhMi44MzQsMi44MzQsMCwwLDAtMi43LTIuOTZDMTMuODIsNjQuMDM2LDExLjc2LDY0LDkuNjU1LDY0SDljLTIuMSwwLTQuMTYzLjAzNi02LjE4My4xMzFBMi44NCwyLjg0LDAsMCwwLC4xMjIsNjcuMWMtLjA5MSwxLjMtLjEzLDIuNi0uMTI4LDMuODkzcy4wMzgsMi42LjEyNCwzLjlhMi44NDQsMi44NDQsMCwwLDAsMi42OTQsMi45NzFjMi4xMjIuMSw0LjMuMTQyLDYuNTExLjEzOXM0LjM4Ny0uMDM5LDYuNTExLS4xMzlhMi44NDQsMi44NDQsMCwwLDAsMi43LTIuOTcxYy4wODctMS4zLjEyOC0yLjYuMTI0LTMuOVMxOC42MjUsNjguMzkyLDE4LjUzOCw2Ny4wOTFabS0xMSw3LjQ3N1Y2Ny40bDUuMjg2LDMuNThaXCJcbiAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDAuMDA2IC02NClcIlxuICAgICAgICBmaWxsPXtjb2xvcn1cbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgR2l0aHViID0gKHtcbiAgY29sb3IgPSAnY3VycmVudENvbG9yJyxcbiAgd2lkdGggPSAnMTRweCcsXG4gIGhlaWdodCA9ICcxNHB4Jyxcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgdmlld0JveD1cIjAgMCAxNCAxNFwiXG4gICAgPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0zOSwzMmE3LjA5Miw3LjA5MiwwLDAsMC03LDcuMTc4LDcuMTY0LDcuMTY0LDAsMCwwLDQuNzg3LDYuODA5LjU0OS41NDksMCwwLDAsLjExOS4wMTIuMzM5LjMzOSwwLDAsMCwuMzU5LS4zNTZjMC0uMTcyLS4wMDYtLjYyMi0uMDA5LTEuMjIyYTMuMiwzLjIsMCwwLDEtLjcwNi4wODRBMS42MjYsMS42MjYsMCwwLDEsMzQuOSw0My40NTlhMS45LDEuOSwwLDAsMC0uNzc4LTEuMDVjLS42MDktLjQyOCwwLS40NDEuMDQ0LS40NDFoMGExLjUsMS41LDAsMCwxLDEuMDcyLjc0NCwxLjM3NCwxLjM3NCwwLDAsMCwxLjIzNy43ODQsMS45NjksMS45NjksMCwwLDAsLjgtLjE4NywxLjU1MSwxLjU1MSwwLDAsMSwuNDQ0LS45NTljLTEuNTUzLS4xODEtMy4xODctLjgtMy4xODctMy41NDdhMi44MDksMi44MDksMCwwLDEsLjcxOS0xLjkyNSwyLjY0MiwyLjY0MiwwLDAsMSwuMDY5LTEuOS41ODMuNTgzLDAsMCwxLC4xNTYtLjAxNiwzLjMyOCwzLjMyOCwwLDAsMSwxLjc2OS43NTMsNi41MDcsNi41MDcsMCwwLDEsMy41MDYsMCwzLjMyOCwzLjMyOCwwLDAsMSwxLjc2OS0uNzUzLjU4My41ODMsMCwwLDEsLjE1Ni4wMTYsMi42NDIsMi42NDIsMCwwLDEsLjA2OSwxLjksMi44MjEsMi44MjEsMCwwLDEsLjcxOSwxLjkyNWMwLDIuNzU2LTEuNjM4LDMuMzYyLTMuMiwzLjU0MWExLjc0LDEuNzQsMCwwLDEsLjQ3NSwxLjMyOGMwLC45NTktLjAwOSwxLjczNC0uMDA5LDEuOTY5YS4zMzcuMzM3LDAsMCwwLC4zNTYuMzU5LjYuNiwwLDAsMCwuMTI1LS4wMTJBNy4yLDcuMiwwLDAsMCwzOSwzMlpcIlxuICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTMyIC0zMilcIlxuICAgICAgICBmaWxsPXtjb2xvcn1cbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgSW5zdGFncmFtID0gKHtcbiAgY29sb3IgPSAnY3VycmVudENvbG9yJyxcbiAgd2lkdGggPSAnMTRweCcsXG4gIGhlaWdodCA9ICcxNHB4Jyxcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgdmlld0JveD1cIjAgMCAxNCAxNFwiXG4gICAgPlxuICAgICAgPHBhdGhcbiAgICAgICAgZGF0YS1uYW1lPVwiUGF0aCAxMDgzXCJcbiAgICAgICAgZD1cIk00MS45MTcsMzMuMTY3YTIuOTI2LDIuOTI2LDAsMCwxLDIuOTE3LDIuOTE3djUuODMzYTIuOTI2LDIuOTI2LDAsMCwxLTIuOTE3LDIuOTE3SDM2LjA4M2EyLjkyNiwyLjkyNiwwLDAsMS0yLjkxNy0yLjkxN1YzNi4wODNhMi45MjYsMi45MjYsMCwwLDEsMi45MTctMi45MTdoNS44MzNtMC0xLjE2N0gzNi4wODNBNC4xLDQuMSwwLDAsMCwzMiwzNi4wODN2NS44MzNBNC4xLDQuMSwwLDAsMCwzNi4wODMsNDZoNS44MzNBNC4xLDQuMSwwLDAsMCw0Niw0MS45MTdWMzYuMDgzQTQuMSw0LjEsMCwwLDAsNDEuOTE3LDMyWlwiXG4gICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMzIgLTMyKVwiXG4gICAgICAgIGZpbGw9e2NvbG9yfVxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGRhdGEtbmFtZT1cIlBhdGggMTA4NFwiXG4gICAgICAgIGQ9XCJNMzUwLjIsMTA4LjQyYS44NzMuODczLDAsMSwxLC42MTktLjI1NkEuODc1Ljg3NSwwLDAsMSwzNTAuMiwxMDguNDJaXCJcbiAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0zMzkuNDEzIC0xMDQuMzM3KVwiXG4gICAgICAgIGZpbGw9e2NvbG9yfVxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGRhdGEtbmFtZT1cIlBhdGggMTA4NVwiXG4gICAgICAgIGQ9XCJNMTQ3LjUsMTQ1LjE2N2EyLjMzMywyLjMzMywwLDEsMS0yLjMzMywyLjMzMywyLjMzMywyLjMzMywwLDAsMSwyLjMzMy0yLjMzM20wLTEuMTY3YTMuNSwzLjUsMCwxLDAsMy41LDMuNUEzLjUsMy41LDAsMCwwLDE0Ny41LDE0NFpcIlxuICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTE0MC41IC0xNDAuNSlcIlxuICAgICAgICBmaWxsPXtjb2xvcn1cbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgTGlua2VkaW4gPSAoe1xuICBjb2xvciA9ICdjdXJyZW50Q29sb3InLFxuICB3aWR0aCA9ICcxNHB4JyxcbiAgaGVpZ2h0ID0gJzE0cHgnLFxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICB2aWV3Qm94PVwiMCAwIDE0IDE0XCJcbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTQ0Ljg4LDMySDMzLjJBMS4xNDIsMS4xNDIsMCwwLDAsMzIsMzMuMDlWNDQuOEExLjIzMiwxLjIzMiwwLDAsMCwzMy4yLDQ2SDQ0Ljg3N0ExLjE2OSwxLjE2OSwwLDAsMCw0Niw0NC44VjMzLjA5QTEuMDczLDEuMDczLDAsMCwwLDQ0Ljg4LDMyWk0zNi4zNCw0My42N0gzNC4zMzRWMzcuNDM0SDM2LjM0Wm0tLjkzMy03LjE4NGgtLjAxNGExLjA5LDEuMDksMCwxLDEsLjAxNCwwWk00My42Nyw0My42N0g0MS42NjRWNDAuMjZjMC0uODE3LS4yOTItMS4zNzUtMS4wMTctMS4zNzVhMS4xLDEuMSwwLDAsMC0xLjAyOC43NCwxLjM1MSwxLjM1MSwwLDAsMC0uMDY5LjQ5M1Y0My42N0gzNy41NDNWMzcuNDM0aDIuMDA2VjM4LjNhMi4wMzEsMi4wMzEsMCwwLDEsMS44MDktMS4wMTRjMS4zMTcsMCwyLjMxMi44NjgsMi4zMTIsMi43MzlaXCJcbiAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0zMiAtMzIpXCJcbiAgICAgICAgZmlsbD17Y29sb3J9XG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApO1xufTtcbiIsImNvbnN0IFN1Y2Nlc3NJY29uID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgdmVyc2lvbj1cIjEuMVwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHg9XCIwcHhcIlxuICAgICAgeT1cIjBweFwiXG4gICAgICB3aWR0aD1cIjIwcHhcIlxuICAgICAgaGVpZ2h0PVwiMTAwJVwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDQwOC41NzYgNDA4LjU3NlwiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPGc+XG4gICAgICAgIDxnPlxuICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICBkPVwiTTIwNC4yODgsMEM5MS42NDgsMCwwLDkxLjY0OCwwLDIwNC4yODhzOTEuNjQ4LDIwNC4yODgsMjA0LjI4OCwyMDQuMjg4czIwNC4yODgtOTEuNjQ4LDIwNC4yODgtMjA0LjI4OFxuXHRcdFx0UzMxNi45MjgsMCwyMDQuMjg4LDB6IE0zMTguNDY0LDE1MC41MjhsLTEzMC41NiwxMjkuNTM2Yy03LjY4LDcuNjgtMTkuOTY4LDguMTkyLTI4LjE2LDAuNTEyTDkwLjYyNCwyMTcuNlxuXHRcdFx0Yy04LjE5Mi03LjY4LTguNzA0LTIwLjQ4LTEuNTM2LTI4LjY3MmM3LjY4LTguMTkyLDIwLjQ4LTguNzA0LDI4LjY3Mi0xLjAyNGw1NC43ODQsNTAuMTc2TDI4OS4yOCwxMjEuMzQ0XG5cdFx0XHRjOC4xOTItOC4xOTIsMjAuOTkyLTguMTkyLDI5LjE4NCwwQzMyNi42NTYsMTI5LjUzNiwzMjYuNjU2LDE0Mi4zMzYsMzE4LjQ2NCwxNTAuNTI4elwiXG4gICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2c+XG4gICAgICA8L2c+XG4gICAgICA8Zz48L2c+XG4gICAgICA8Zz48L2c+XG4gICAgICA8Zz48L2c+XG4gICAgICA8Zz48L2c+XG4gICAgICA8Zz48L2c+XG4gICAgICA8Zz48L2c+XG4gICAgICA8Zz48L2c+XG4gICAgICA8Zz48L2c+XG4gICAgICA8Zz48L2c+XG4gICAgICA8Zz48L2c+XG4gICAgICA8Zz48L2c+XG4gICAgICA8Zz48L2c+XG4gICAgICA8Zz48L2c+XG4gICAgICA8Zz48L2c+XG4gICAgICA8Zz48L2c+XG4gICAgPC9zdmc+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdWNjZXNzSWNvbjtcbiIsImNvbnN0IFRyYXNoSWNvbiA9ICh7XG4gIGNvbG9yID0gJ2N1cnJlbnRDb2xvcicsXG4gIHdpZHRoID0gJzEycHgnLFxuICBoZWlnaHQgPSAnMTJweCcsXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB3aWR0aD17d2lkdGh9XG4gICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgIHZpZXdCb3g9XCIwIDAgMTEuMzQ0IDEyXCJcbiAgICA+XG4gICAgICA8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTEzLjk4OSlcIj5cbiAgICAgICAgPGcgZGF0YS1uYW1lPVwiR3JvdXAgNTM3MlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxNS4zOTkgMi4zMjcpXCI+XG4gICAgICAgICAgPGcgZGF0YS1uYW1lPVwiR3JvdXAgNTM3MVwiPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgZGF0YS1uYW1lPVwiUGF0aCAxNzE0MlwiXG4gICAgICAgICAgICAgIGQ9XCJNODEuNjgzLDk5LjI4bC0uMDE2LDguNTI2YS4xNjYuMTY2LDAsMCwxLS4xNjQuMTY0aC02LjJhLjE2Ni4xNjYsMCwwLDEtLjE2NC0uMTY1bC0uMDE2LTguNTI1LS45ODQsMCwuMDE2LDguNTI0YTEuMTQ5LDEuMTQ5LDAsMCwwLDEuMTQ4LDEuMTQ4aDYuMmExLjE0OSwxLjE0OSwwLDAsMCwxLjE0OC0xLjE0N2wuMDE2LTguNTI1WlwiXG4gICAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtNzQuMTQyIC05OS4yOClcIlxuICAgICAgICAgICAgICBmaWxsPXtjb2xvcn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9nPlxuICAgICAgICA8L2c+XG4gICAgICAgIDxnIGRhdGEtbmFtZT1cIkdyb3VwIDUzNzRcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTMuOTg5IDEuODM2KVwiPlxuICAgICAgICAgIDxnIGRhdGEtbmFtZT1cIkdyb3VwIDUzNzNcIj5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgIGRhdGEtbmFtZT1cIlBhdGggMTcxNDNcIlxuICAgICAgICAgICAgICBkPVwiTTI0Ljg0MSw3OC4zMzlIMTQuNDgxYS40OTIuNDkyLDAsMCwwLDAsLjk4NEgyNC44NDFhLjQ5Mi40OTIsMCwxLDAsMC0uOTg0WlwiXG4gICAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMTMuOTg5IC03OC4zMzkpXCJcbiAgICAgICAgICAgICAgZmlsbD17Y29sb3J9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZz5cbiAgICAgICAgPC9nPlxuICAgICAgICA8ZyBkYXRhLW5hbWU9XCJHcm91cCA1Mzc2XCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDE3LjUxNClcIj5cbiAgICAgICAgICA8ZyBkYXRhLW5hbWU9XCJHcm91cCA1Mzc1XCI+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICBkYXRhLW5hbWU9XCJQYXRoIDE3MTQ0XCJcbiAgICAgICAgICAgICAgZD1cIk0xNjcuODQ2LDBoLTIuNjU2YS44MjEuODIxLDAsMCwwLS44Mi44MlYyLjMyOGguOTg0Vi45ODRoMi4zMjhWMi4zMjhoLjk4NFYuODJBLjgyMS44MjEsMCwwLDAsMTY3Ljg0NiwwWlwiXG4gICAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMTY0LjM3MSlcIlxuICAgICAgICAgICAgICBmaWxsPXtjb2xvcn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9nPlxuICAgICAgICA8L2c+XG4gICAgICAgIDxnIGRhdGEtbmFtZT1cIkdyb3VwIDUzNzhcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTguMDA1IDQuMzkzKVwiPlxuICAgICAgICAgIDxnIGRhdGEtbmFtZT1cIkdyb3VwIDUzNzdcIj5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgIGRhdGEtbmFtZT1cIlBhdGggMTcxNDVcIlxuICAgICAgICAgICAgICBkPVwiTTE4NS44NDcsMTg3LjQ1NGEuNDkyLjQ5MiwwLDAsMC0uNDkyLjQ5MnYzLjk2N2EuNDkyLjQ5MiwwLDEsMCwuOTg0LDB2LTMuOTY3QS40OTIuNDkyLDAsMCwwLDE4NS44NDcsMTg3LjQ1NFpcIlxuICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTE4NS4zNTUgLTE4Ny40NTQpXCJcbiAgICAgICAgICAgICAgZmlsbD17Y29sb3J9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZz5cbiAgICAgICAgPC9nPlxuICAgICAgICA8ZyBkYXRhLW5hbWU9XCJHcm91cCA1MzgwXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDIwLjMzMyA0LjM5MylcIj5cbiAgICAgICAgICA8ZyBkYXRhLW5hbWU9XCJHcm91cCA1Mzc5XCI+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICBkYXRhLW5hbWU9XCJQYXRoIDE3MTQ2XCJcbiAgICAgICAgICAgICAgZD1cIk0yODUuMTY5LDE4Ny40NTRhLjQ5Mi40OTIsMCwwLDAtLjQ5Mi40OTJ2My45NjdhLjQ5Mi40OTIsMCwxLDAsLjk4NCwwdi0zLjk2N0EuNDkyLjQ5MiwwLDAsMCwyODUuMTY5LDE4Ny40NTRaXCJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0yODQuNjc3IC0xODcuNDU0KVwiXG4gICAgICAgICAgICAgIGZpbGw9e2NvbG9yfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2c+XG4gICAgICAgIDwvZz5cbiAgICAgIDwvZz5cbiAgICA8L3N2Zz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRyYXNoSWNvbjtcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9DVEEtaW1hZ2UtOTM2YThhOWRiYWIxYmNmYzY2Zjg2NDNiMmIyYzc4YjgucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2NvdXBvbi1jYXJkLTY4ZGE2MjRiYTVlYmRlYmI3NmU5YWM1MGVkYzNhMjM4LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9jdXN0b20tb3JkZXItNDI1ZmE0YjBhOWFlMGQzYmQwNmI4MTJlMTYyYTAzNzQucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2Zhc3QtZGVsaXZlcnktZDFhMmFlNGE5NjI4M2M1NzRmMDg3YjY1ZGVhMTY2MzcucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2ZlbWFsZS1jYXJlLTA4N2ZlODY2NWZhZTU2OWM3YTc1NDU5MTkxOGY2ODc4LnBuZ1wiOyIsImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IEFjdGl2ZUxpbmsgPSAoeyBjaGlsZHJlbiwgYWN0aXZlQ2xhc3NOYW1lLCBocmVmLCAuLi5wcm9wcyB9OiBhbnkpID0+IHtcbiAgY29uc3QgeyBwYXRobmFtZSB9ID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IGNoaWxkID0gQ2hpbGRyZW4ub25seShjaGlsZHJlbik7XG4gIGNvbnN0IGNoaWxkQ2xhc3NOYW1lID0gY2hpbGQucHJvcHMuY2xhc3NOYW1lIHx8ICcnO1xuXG4gIGNvbnN0IGNsYXNzTmFtZSA9XG4gICAgcGF0aG5hbWUgPT09IGhyZWZcbiAgICAgID8gYCR7Y2hpbGRDbGFzc05hbWV9ICR7YWN0aXZlQ2xhc3NOYW1lfWAudHJpbSgpXG4gICAgICA6IGNoaWxkQ2xhc3NOYW1lO1xuXG4gIHJldHVybiAoXG4gICAgPExpbmsgaHJlZj17aHJlZn0gey4uLnByb3BzfT5cbiAgICAgIHtSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUgfHwgbnVsbCxcbiAgICAgIH0pfVxuICAgIDwvTGluaz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFjdGl2ZUxpbms7XG4iLCJpbXBvcnQgUmVhY3QsIHsgTW91c2VFdmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJ1dHRvblZhcmlhbnRzLCBCdXR0b25TaXplcyB9IGZyb20gJy4vdXRpbHMvcHJvcC10eXBlcyc7XG5pbXBvcnQge1xuICBCdXR0b25CYXNlLFxuICBCdXR0b25EaXNhYmxlLFxuICBCdXR0b25WYXJpYW50LFxuICBCdXR0b25TaXplLFxufSBmcm9tICcuL3V0aWxzL3RoZW1lJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgdmFyaWFudD86IEJ1dHRvblZhcmlhbnRzO1xuICBzaXplPzogQnV0dG9uU2l6ZXM7XG4gIHR5cGU/OiBSZWFjdC5CdXR0b25IVE1MQXR0cmlidXRlczxhbnk+Wyd0eXBlJ107XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGUgfCB1bmRlZmluZWQ7XG4gIGxvYWRpbmc/OiBib29sZWFuO1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIG9uQ2xpY2s/OiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlcjxIVE1MQnV0dG9uRWxlbWVudD47XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbn1cblxuY29uc3QgZGVmYXVsdFByb3BzID0ge1xuICB2YXJpYW50OiAncHJpbWFyeScgYXMgQnV0dG9uVmFyaWFudHMsXG4gIHNpemU6ICdub3JtYWwnIGFzIEJ1dHRvblNpemVzLFxuICB0eXBlOiAnYnV0dG9uJyBhcyBSZWFjdC5CdXR0b25IVE1MQXR0cmlidXRlczxhbnk+Wyd0eXBlJ10sXG4gIGxvYWRpbmc6IGZhbHNlLFxuICBkaXNhYmxlZDogZmFsc2UsXG59O1xuXG50eXBlIE5hdGl2ZUF0dHJzID0gT21pdDxSZWFjdC5CdXR0b25IVE1MQXR0cmlidXRlczxhbnk+LCBrZXlvZiBQcm9wcz47XG5cbmV4cG9ydCB0eXBlIEJ1dHRvblByb3BzID0gUHJvcHMgJiBOYXRpdmVBdHRycztcblxuY29uc3QgQnV0dG9uOiBSZWFjdC5GQzxSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjxCdXR0b25Qcm9wcz4+ID0gKHtcbiAgY2xhc3NOYW1lLFxuICBsb2FkaW5nLFxuICB2YXJpYW50LFxuICBzaXplLFxuICB0eXBlLFxuICBjaGlsZHJlbixcbiAgZGlzYWJsZWQsXG4gIG9uQ2xpY2ssXG4gIC4uLnByb3BzXG59KSA9PiB7XG4gIGNvbnN0IGNsYXNzTmFtZXMgPVxuICAgIEJ1dHRvbkJhc2UgK1xuICAgICcgJyArXG4gICAgKGRpc2FibGVkID09PSB0cnVlID8gQnV0dG9uRGlzYWJsZSA6IEJ1dHRvblZhcmlhbnRbdmFyaWFudF0pICtcbiAgICAnICcgK1xuICAgIEJ1dHRvblNpemVbc2l6ZV0gK1xuICAgICcgJyArXG4gICAgY2xhc3NOYW1lO1xuXG4gIGNvbnN0IG9uQ2xpY2tIYW5kbGVyID0gKGV2ZW50OiBNb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50PikgPT4ge1xuICAgIGlmIChkaXNhYmxlZCB8fCBsb2FkaW5nKSByZXR1cm47XG4gICAgb25DbGljayAmJiBvbkNsaWNrKGV2ZW50KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxidXR0b25cbiAgICAgIG9uQ2xpY2s9e29uQ2xpY2tIYW5kbGVyfVxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzfVxuICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgdHlwZT17dHlwZX1cbiAgICAgIGFyaWEtbGFiZWw9e3R5cGV9XG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgeyFsb2FkaW5nICYmIGNoaWxkcmVufVxuICAgICAge2xvYWRpbmcgJiYgKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwiaC01IHctNSBib3JkZXItM3B4IGJvcmRlci1ncmF5LTgwMCBib3JkZXItdC0zcHggcm91bmRlZC1mdWxsIGFuaW1hdGUtc3BpblwiXG4gICAgICAgICAgc3R5bGU9e3sgYm9yZGVyVG9wQ29sb3I6ICcjZjFmMWYxJyB9fVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICA8L2J1dHRvbj5cbiAgKTtcbn07XG5cbkJ1dHRvbi5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTXVsdGlDYXJvdXNlbCBmcm9tICdyZWFjdC1tdWx0aS1jYXJvdXNlbCc7XG5pbXBvcnQgQ2hldnJvbkxlZnQgZnJvbSAnYXNzZXRzL2ljb25zL2NoZXZyb24tbGVmdCc7XG5pbXBvcnQgQ2hldnJvblJpZ2h0IGZyb20gJ2Fzc2V0cy9pY29ucy9jaGV2cm9uLXJpZ2h0JztcbmltcG9ydCB7XG4gIEJ1dHRvbkdyb3VwQmFzZSxcbiAgQXJyb3dCdXR0b25CYXNlLFxuICBQcmV2QnV0dG9uUmFkaXVzLFxuICBOZXh0QnV0dG9uUmFkaXVzLFxuICBDYXJvdXNlbEl0ZW1CYXNlLFxuICBDYXJvdXNlbEl0ZW1JbWFnZSxcbn0gZnJvbSAnY29tcG9uZW50cy91dGlscy90aGVtZSc7XG5cbnR5cGUgQ3VzdG9tQnV0dG9uUHJvcCA9IHtcbiAgb25DbGljaz86IChlOiBhbnkpID0+IHZvaWQ7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG59O1xuXG50eXBlIEJ1dHRvbkdyb3VwUHJvcHMgPSB7XG4gIG5leHQ/OiBGdW5jdGlvbjtcbiAgcHJldmlvdXM/OiBGdW5jdGlvbjtcbn07XG5cbmludGVyZmFjZSBDYXJvdXNlbEl0ZW1Qcm9wcyB7XG4gIGltYWdlOiBzdHJpbmc7XG4gIGxpbms/OiBzdHJpbmc7XG4gIHRpdGxlPzogc3RyaW5nO1xufVxuXG50eXBlIENhcm91c2VsUHJvcHMgPSB7XG4gIGRhdGE6IENhcm91c2VsSXRlbVByb3BzW107XG4gIGF1dG9QbGF5PzogYm9vbGVhbjtcbiAgaW5maW5pdGU/OiBib29sZWFuO1xuICBpdGVtQ2xhc3M/OiBzdHJpbmc7XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbn07XG5cbmNvbnN0IFByZXZCdXR0b246IFJlYWN0LkZDPEN1c3RvbUJ1dHRvblByb3A+ID0gKHsgb25DbGljaywgY2hpbGRyZW4gfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxidXR0b25cbiAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgb25DbGljayhlKTtcbiAgICAgIH19XG4gICAgICBhcmlhLWxhYmVsPVwicHJldi1idXR0b25cIlxuICAgICAgY2xhc3NOYW1lPXtBcnJvd0J1dHRvbkJhc2UgKyAnICcgKyBQcmV2QnV0dG9uUmFkaXVzfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2J1dHRvbj5cbiAgKTtcbn07XG5jb25zdCBOZXh0QnV0dG9uOiBSZWFjdC5GQzxDdXN0b21CdXR0b25Qcm9wPiA9ICh7IG9uQ2xpY2ssIGNoaWxkcmVuIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uXG4gICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIG9uQ2xpY2soZSk7XG4gICAgICB9fVxuICAgICAgYXJpYS1sYWJlbD1cIm5leHQtYnV0dG9uXCJcbiAgICAgIGNsYXNzTmFtZT17QXJyb3dCdXR0b25CYXNlICsgJyAnICsgTmV4dEJ1dHRvblJhZGl1c31cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9idXR0b24+XG4gICk7XG59O1xuXG5jb25zdCBCdXR0b25Hcm91cDogUmVhY3QuRkM8QnV0dG9uR3JvdXBQcm9wcz4gPSAoeyBuZXh0LCBwcmV2aW91cyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e0J1dHRvbkdyb3VwQmFzZX0+XG4gICAgICA8UHJldkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBwcmV2aW91cygpfT5cbiAgICAgICAgPENoZXZyb25MZWZ0IGhlaWdodD1cIjEycHhcIiAvPlxuICAgICAgPC9QcmV2QnV0dG9uPlxuICAgICAgPE5leHRCdXR0b24gb25DbGljaz17KCkgPT4gbmV4dCgpfT5cbiAgICAgICAgPENoZXZyb25SaWdodCBoZWlnaHQ9XCIxMnB4XCIgLz5cbiAgICAgIDwvTmV4dEJ1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IHJlc3BvbnNpdmUgPSB7XG4gIGRlc2t0b3A6IHtcbiAgICBicmVha3BvaW50OiB7IG1heDogMzAwMCwgbWluOiAxMjgwIH0sXG4gICAgaXRlbXM6IDQsXG4gIH0sXG4gIHNtYWxsU2NyZWVuOiB7XG4gICAgYnJlYWtwb2ludDogeyBtYXg6IDEyNzksIG1pbjogODUxIH0sXG4gICAgaXRlbXM6IDMsXG4gIH0sXG4gIHRhYmxldDoge1xuICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiA4NTAsIG1pbjogNjAxIH0sXG4gICAgaXRlbXM6IDIsXG4gIH0sXG4gIG1vYmlsZToge1xuICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiA2MDAsIG1pbjogMCB9LFxuICAgIGl0ZW1zOiAxLFxuICB9LFxufTtcblxuY29uc3QgQ2Fyb3VzZWw6IFJlYWN0LkZDPENhcm91c2VsUHJvcHM+ID0gKHtcbiAgZGF0YSxcbiAgYXV0b1BsYXksXG4gIGluZmluaXRlLFxuICBpdGVtQ2xhc3MsXG4gIGNsYXNzTmFtZSxcbiAgLi4ucHJvcHNcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8TXVsdGlDYXJvdXNlbFxuICAgICAgYXJyb3dzPXtmYWxzZX1cbiAgICAgIHJlc3BvbnNpdmU9e3Jlc3BvbnNpdmV9XG4gICAgICBzc3I9e3RydWV9XG4gICAgICBzaG93RG90cz17ZmFsc2V9XG4gICAgICBzbGlkZXNUb1NsaWRlPXsxfVxuICAgICAgaW5maW5pdGU9e2luZmluaXRlfVxuICAgICAgY29udGFpbmVyQ2xhc3M9XCJjYXJvdXNlbC1jb250YWluZXJcIlxuICAgICAgaXRlbUNsYXNzPXtpdGVtQ2xhc3N9XG4gICAgICBhdXRvUGxheT17YXV0b1BsYXl9XG4gICAgICBhdXRvUGxheVNwZWVkPXszMDAwfVxuICAgICAgcmVuZGVyQnV0dG9uR3JvdXBPdXRzaWRlPXt0cnVlfVxuICAgICAgYWRkaXRpb25hbFRyYW5zZnJvbT17MH1cbiAgICAgIGN1c3RvbUJ1dHRvbkdyb3VwPXs8QnV0dG9uR3JvdXAgLz59XG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgIHsuLi5wcm9wc31cbiAgICAgIC8vIHVzZSBkaXIgbHRyIHdoZW4gcnRsIHRydWVcbiAgICA+XG4gICAgICB7ZGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2luZGV4fT5cbiAgICAgICAgICB7aXRlbSAmJiBpdGVtLmxpbmsgPyAoXG4gICAgICAgICAgICA8YSBocmVmPXtpdGVtLmxpbmt9IGNsYXNzTmFtZT17Q2Fyb3VzZWxJdGVtQmFzZX0+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj57aXRlbS50aXRsZX08L3NwYW4+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBzcmM9e2l0ZW0uaW1hZ2V9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtDYXJvdXNlbEl0ZW1JbWFnZX1cbiAgICAgICAgICAgICAgICBhbHQ9e2l0ZW0udGl0bGV9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtDYXJvdXNlbEl0ZW1CYXNlfT5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIHNyYz17aXRlbS5pbWFnZX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e0Nhcm91c2VsSXRlbUltYWdlfVxuICAgICAgICAgICAgICAgIGFsdD17aXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICApKX1cbiAgICA8L011bHRpQ2Fyb3VzZWw+XG4gICk7XG59O1xuXG5jb25zdCBkZWZhdWx0UHJvcHMgPSB7XG4gIGF1dG9QbGF5OiBmYWxzZSxcbiAgaW5maW5pdGU6IHRydWUsXG4gIGNsYXNzTmFtZTogJycsXG59O1xuXG5DYXJvdXNlbC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5cbmV4cG9ydCBkZWZhdWx0IENhcm91c2VsO1xuIiwiaW1wb3J0IENvdW50ZXIgZnJvbSAnLi9jb3VudGVyJztcbmltcG9ydCB7IENVUlJFTkNZIH0gZnJvbSAnaGVscGVycy9jb25zdGFudHMnO1xuaW1wb3J0IHsgdXNlQ2FydCB9IGZyb20gJ2NvbnRleHRzL2NhcnQvY2FydC5wcm92aWRlcic7XG5pbXBvcnQge1xuICBDYXJ0SXRlbUJhc2UsXG4gIENhcnRJdGVtSW1hZ2UsXG4gIENhcnRJdGVtQ29udGVudCxcbiAgQ2FydEl0ZW1OYW1lLFxuICBDYXJ0SXRlbVNpbmdsZVByaWNlLFxuICBDYXJ0SXRlbVRvdGFsV3JhcHBlcixcbiAgQ2FydEl0ZW1Ub3RhbFByaWNlLFxufSBmcm9tICcuL3V0aWxzL3RoZW1lJztcblxudHlwZSBDYXJ0SXRlbVByb3BzID0ge1xuICBpdGVtOiBhbnk7XG59O1xuXG5jb25zdCBDYXJ0SXRlbTogUmVhY3QuRkM8Q2FydEl0ZW1Qcm9wcz4gPSAoeyBpdGVtIH0pID0+IHtcbiAgY29uc3QgeyBhZGRJdGVtLCByZW1vdmVJdGVtIH0gPSB1c2VDYXJ0KCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Q2FydEl0ZW1CYXNlfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtDYXJ0SXRlbUltYWdlfT5cbiAgICAgICAgPGltZyBzcmM9e2l0ZW0uaW1hZ2V9IGFsdD17aXRlbS5uYW1lfSAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtDYXJ0SXRlbUNvbnRlbnR9PlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e0NhcnRJdGVtTmFtZX0+e2l0ZW0ubmFtZX08L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Q2FydEl0ZW1TaW5nbGVQcmljZX0+XG4gICAgICAgICAgVW5pdCBQcmljZSAmbmJzcDtcbiAgICAgICAgICB7Q1VSUkVOQ1l9XG4gICAgICAgICAge2l0ZW0ucHJpY2V9XG4gICAgICAgIDwvc3Bhbj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Q2FydEl0ZW1Ub3RhbFdyYXBwZXJ9PlxuICAgICAgICAgIDxDb3VudGVyXG4gICAgICAgICAgICB2YWx1ZT17aXRlbS5xdWFudGl0eX1cbiAgICAgICAgICAgIG9uSW5jcmVtZW50PXsoKSA9PiBhZGRJdGVtKGl0ZW0pfVxuICAgICAgICAgICAgb25EZWNyZW1lbnQ9eygpID0+IHJlbW92ZUl0ZW0oaXRlbSl9XG4gICAgICAgICAgLz5cblxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Q2FydEl0ZW1Ub3RhbFByaWNlfT5cbiAgICAgICAgICAgIHtDVVJSRU5DWX1cbiAgICAgICAgICAgIHsoaXRlbS5wcmljZSAqIGl0ZW0ucXVhbnRpdHkpLnRvRml4ZWQoMil9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FydEl0ZW07XG4iLCJpbXBvcnQgUGx1cyBmcm9tICdhc3NldHMvaWNvbnMvcGx1cy1pY29uJztcbmltcG9ydCBNaW51cyBmcm9tICdhc3NldHMvaWNvbnMvbWludXMtaWNvbic7XG5pbXBvcnQgVHJhc2ggZnJvbSAnYXNzZXRzL2ljb25zL3RyYXNoJztcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJy4vaWNvbi1idXR0b24nO1xuaW1wb3J0IHsgQ291bnRlclNpemVzIH0gZnJvbSAnLi91dGlscy9wcm9wLXR5cGVzJztcbmltcG9ydCB7IENvdW50ZXJCYXNlLCBDb3VudGVyVmFsdWUsIENvdW50ZXJTaXplIH0gZnJvbSAnLi91dGlscy90aGVtZSc7XG5cbnR5cGUgQ291bnRlclByb3BzID0ge1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG4gIHZhbHVlOiBudW1iZXI7XG4gIHNpemU/OiBDb3VudGVyU2l6ZXM7XG4gIG9uRGVjcmVtZW50OiAoZTogYW55KSA9PiB2b2lkO1xuICBvbkluY3JlbWVudDogKGU6IGFueSkgPT4gdm9pZDtcbn07XG5cbmNvbnN0IENvdW50ZXI6IFJlYWN0LkZDPENvdW50ZXJQcm9wcz4gPSAoe1xuICBvbkRlY3JlbWVudCxcbiAgb25JbmNyZW1lbnQsXG4gIHZhbHVlLFxuICBzaXplID0gJ25vcm1hbCcsXG4gIGNsYXNzTmFtZSA9ICcnLFxufSkgPT4ge1xuICBjb25zdCBjbGFzc05hbWVzID0gQ291bnRlckJhc2UgKyAnICcgKyBDb3VudGVyU2l6ZVtzaXplXSArICcgJyArIGNsYXNzTmFtZTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lc30+XG4gICAgICA8SWNvbkJ1dHRvblxuICAgICAgICBvbkNsaWNrPXtvbkRlY3JlbWVudH1cbiAgICAgICAgY2xhc3NOYW1lPXtgaC1mdWxsICR7XG4gICAgICAgICAgc2l6ZSA9PT0gJ2JpZycgPyAndy02MHB4JyA6ICd3LTM1cHgnXG4gICAgICAgIH0gdGV4dC13aGl0ZSBiZy1ncmF5LTkwMCB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMCBob3ZlcjpiZy1ncmF5LTNhIGZvY3VzOm91dGxpbmUtbm9uZWB9XG4gICAgICA+XG4gICAgICAgIHt2YWx1ZSA+IDEgPyA8TWludXMgLz4gOiA8VHJhc2ggLz59XG4gICAgICA8L0ljb25CdXR0b24+XG5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17Q291bnRlclZhbHVlfT57dmFsdWV9PC9zcGFuPlxuXG4gICAgICA8SWNvbkJ1dHRvblxuICAgICAgICBvbkNsaWNrPXtvbkluY3JlbWVudH1cbiAgICAgICAgY2xhc3NOYW1lPXtgaC1mdWxsICR7XG4gICAgICAgICAgc2l6ZSA9PT0gJ2JpZycgPyAndy02MHB4JyA6ICd3LTM1cHgnXG4gICAgICAgIH0gdGV4dC13aGl0ZSBiZy1ncmF5LTkwMCB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMCBob3ZlcjpiZy1ncmF5LTNhIGZvY3VzOm91dGxpbmUtbm9uZWB9XG4gICAgICA+XG4gICAgICAgIDxQbHVzIC8+XG4gICAgICA8L0ljb25CdXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb3VudGVyO1xuIiwiaW1wb3J0IHsgQ1RBQmFzZSwgQ1RBQ29udGVudCB9IGZyb20gJy4vdXRpbHMvdGhlbWUnO1xuXG50eXBlIENhbGxUb0FjdGlvblByb3BzID0ge1xuICBiYWNrZ3JvdW5kPzogYW55O1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlIHwgdW5kZWZpbmVkO1xuICBwYXJlbnRDbGFzc05hbWU/OiBzdHJpbmc7XG4gIGNoaWxkQ2xhc3NOYW1lPzogc3RyaW5nO1xufTtcblxuY29uc3QgQ2FsbFRvQWN0aW9uOiBSZWFjdC5GQzxDYWxsVG9BY3Rpb25Qcm9wcz4gPSAoe1xuICBiYWNrZ3JvdW5kLFxuICBjaGlsZHJlbixcbiAgcGFyZW50Q2xhc3NOYW1lID0gJycsXG4gIGNoaWxkQ2xhc3NOYW1lID0gJycsXG59KSA9PiB7XG4gIGNvbnN0IGNsYXNzTmFtZXMgPSBDVEFCYXNlICsgJyAnICsgcGFyZW50Q2xhc3NOYW1lICsgJyAnICsgJ2N0YS1iYXNlJztcbiAgY29uc3QgY29udGVudENsYXNzTmFtZXMgPSBDVEFDb250ZW50ICsgJyAnICsgY2hpbGRDbGFzc05hbWU7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzfVxuICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7YmFja2dyb3VuZH0pYCB9fVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcG9uZW50LW92ZXJsYXlcIiAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NvbnRlbnRDbGFzc05hbWVzfT57Y2hpbGRyZW59PC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYWxsVG9BY3Rpb247XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtcbiAgRmVhdHVyZUJhc2UsXG4gIEZlYXR1cmVDb3VudGVyLFxuICBGZWF0dXJlQ29udGVudCxcbiAgRmVhdHVyZVRpdGxlLFxuICBGZWF0dXJlRGV0YWlscyxcbn0gZnJvbSAnLi91dGlscy90aGVtZSc7XG5cbnR5cGUgRmVhdHVyZUJMb2NrUHJvcHMgPSB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbiAgY291bnRlckJnPzogc3RyaW5nO1xuICBjb3VudGVyOiBudW1iZXI7XG59O1xuXG5jb25zdCBGZWF0dXJlQkxvY2s6IFJlYWN0LkZDPEZlYXR1cmVCTG9ja1Byb3BzPiA9ICh7XG4gIHRpdGxlLFxuICBkZXNjcmlwdGlvbixcbiAgY2xhc3NOYW1lLFxuICBjb3VudGVyQmcsXG4gIGNvdW50ZXIsXG59KSA9PiB7XG4gIGNvbnN0IGNsYXNzTmFtZXMgPSBGZWF0dXJlQmFzZSArICcgJyArIGNsYXNzTmFtZTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lc30+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9e0ZlYXR1cmVDb3VudGVyfSBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IGNvdW50ZXJCZyB9fT5cbiAgICAgICAge2NvdW50ZXJ9XG4gICAgICA8L3NwYW4+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17RmVhdHVyZUNvbnRlbnR9PlxuICAgICAgICA8aDMgY2xhc3NOYW1lPXtGZWF0dXJlVGl0bGV9Pnt0aXRsZX08L2gzPlxuXG4gICAgICAgIDxwIGNsYXNzTmFtZT17RmVhdHVyZURldGFpbHN9PntkZXNjcmlwdGlvbn08L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZlYXR1cmVCTG9jaztcbiIsImltcG9ydCBSZWFjdCwgeyBNb3VzZUV2ZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgSWNvbkJ0bkJhc2UgfSBmcm9tICcuL3V0aWxzL3RoZW1lJztcblxudHlwZSBQcm9wcyA9IHtcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlIHwgdW5kZWZpbmVkO1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIG9uQ2xpY2s/OiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlcjxIVE1MQnV0dG9uRWxlbWVudD47XG59O1xuXG5jb25zdCBkZWZhdWx0UHJvcHMgPSB7XG4gIGNsYXNzTmFtZTogJycsXG4gIGRpc2FibGVkOiBmYWxzZSxcbn07XG5cbnR5cGUgTmF0aXZlQXR0cnMgPSBPbWl0PFJlYWN0LkJ1dHRvbkhUTUxBdHRyaWJ1dGVzPGFueT4sIGtleW9mIFByb3BzPjtcblxuZXhwb3J0IHR5cGUgSWNvbkJ1dHRvblByb3BzID0gUHJvcHMgJiBOYXRpdmVBdHRycztcblxuY29uc3QgSWNvbkJ1dHRvbjogUmVhY3QuRkM8SWNvbkJ1dHRvblByb3BzPiA9ICh7XG4gIGNsYXNzTmFtZSxcbiAgY2hpbGRyZW4sXG4gIGRpc2FibGVkLFxuICBvbkNsaWNrLFxufSkgPT4ge1xuICBjb25zdCBjbGFzc05hbWVzID0gSWNvbkJ0bkJhc2UgKyAnICcgKyBjbGFzc05hbWU7XG5cbiAgY29uc3Qgb25DbGlja0hhbmRsZXIgPSAoZXZlbnQ6IE1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KSA9PiB7XG4gICAgaWYgKGRpc2FibGVkKSByZXR1cm47XG4gICAgb25DbGljayAmJiBvbkNsaWNrKGV2ZW50KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxidXR0b24gb25DbGljaz17b25DbGlja0hhbmRsZXJ9IGNsYXNzTmFtZT17Y2xhc3NOYW1lc30gZGlzYWJsZWQ9e2Rpc2FibGVkfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2J1dHRvbj5cbiAgKTtcbn07XG5cbkljb25CdXR0b24uZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuXG5leHBvcnQgZGVmYXVsdCBJY29uQnV0dG9uO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlSW1wZXJhdGl2ZUhhbmRsZSwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG4gIFRleHRCb3hDb21tb25CYXNlLFxuICBJbnB1dEJhc2UsXG4gIFRleHRCb3hEaXNhYmxlLFxuICBUZXh0Qm94RW5hYmxlLFxufSBmcm9tICdjb21wb25lbnRzL3V0aWxzL3RoZW1lJztcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XG4gIHZhbHVlPzogc3RyaW5nO1xuICBpbml0aWFsVmFsdWU/OiBzdHJpbmc7XG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuICByZWFkT25seT86IGJvb2xlYW47XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICBpZD86IHN0cmluZztcbiAgbmFtZT86IHN0cmluZztcbiAgb25DaGFuZ2U/OiAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHZvaWQ7XG4gIG9uRm9jdXM/OiAoZTogUmVhY3QuRm9jdXNFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4gdm9pZDtcbiAgb25CbHVyPzogKGU6IFJlYWN0LkZvY3VzRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHZvaWQ7XG4gIFtrZXk6IHN0cmluZ106IHVua25vd247XG59XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0UHJvcHMgPSB7XG4gIGRpc2FibGVkOiBmYWxzZSxcbiAgcmVhZE9ubHk6IGZhbHNlLFxuICBjbGFzc05hbWU6ICcnLFxuICBwbGFjZWhvbGRlcjogJycsXG4gIGluaXRpYWxWYWx1ZTogJycsXG59O1xuXG50eXBlIE5hdGl2ZUF0dHJzID0gT21pdDxSZWFjdC5JbnB1dEhUTUxBdHRyaWJ1dGVzPGFueT4sIGtleW9mIFByb3BzPjtcblxuZXhwb3J0IHR5cGUgSW5wdXRQcm9wc1R5cGUgPSBQcm9wcyAmIE5hdGl2ZUF0dHJzO1xuXG5jb25zdCBJbnB1dCA9IFJlYWN0LmZvcndhcmRSZWY8XG4gIEhUTUxJbnB1dEVsZW1lbnQsXG4gIFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPElucHV0UHJvcHNUeXBlPlxuPihcbiAgKFxuICAgIHtcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGlkLFxuICAgICAgdmFsdWUsXG4gICAgICBuYW1lLFxuICAgICAgaW5pdGlhbFZhbHVlLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICByZWFkT25seSxcbiAgICAgIHBsYWNlaG9sZGVyLFxuICAgICAgb25DaGFuZ2UsXG4gICAgICBvbkZvY3VzLFxuICAgICAgb25CbHVyLFxuICAgICAgLi4ucHJvcHNcbiAgICB9LFxuICAgIHJlZjogUmVhY3QuUmVmPEhUTUxJbnB1dEVsZW1lbnQgfCBudWxsPlxuICApID0+IHtcbiAgICBjb25zdCBpbnB1dFJlZiA9IHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PihudWxsKTtcbiAgICB1c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgKCkgPT4gaW5wdXRSZWYuY3VycmVudCk7XG5cbiAgICBjb25zdCBbaW5pdFZhbHVlLCBzZXRJbml0VmFsdWVdID0gdXNlU3RhdGU8c3RyaW5nPihpbml0aWFsVmFsdWUpO1xuXG4gICAgY29uc3QgY2hhbmdlSGFuZGxlciA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICAgIGlmIChkaXNhYmxlZCB8fCByZWFkT25seSkgcmV0dXJuO1xuICAgICAgc2V0SW5pdFZhbHVlKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICBvbkNoYW5nZSAmJiBvbkNoYW5nZShldmVudCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGZvY3VzSGFuZGxlciA9IChlOiBSZWFjdC5Gb2N1c0V2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgICBvbkZvY3VzICYmIG9uRm9jdXMoZSk7XG4gICAgfTtcbiAgICBjb25zdCBibHVySGFuZGxlciA9IChlOiBSZWFjdC5Gb2N1c0V2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgICBvbkJsdXIgJiYgb25CbHVyKGUpO1xuICAgIH07XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHJldHVybjtcbiAgICAgIHNldEluaXRWYWx1ZSh2YWx1ZSk7XG4gICAgfSwgW3ZhbHVlXSk7XG5cbiAgICBjb25zdCBjbGFzc05hbWVzID1cbiAgICAgIElucHV0QmFzZSArXG4gICAgICAnICcgK1xuICAgICAgVGV4dEJveENvbW1vbkJhc2UgK1xuICAgICAgJyAnICtcbiAgICAgIChkaXNhYmxlZCA9PT0gdHJ1ZSA/IFRleHRCb3hEaXNhYmxlIDogVGV4dEJveEVuYWJsZSkgK1xuICAgICAgJyAnICtcbiAgICAgIGNsYXNzTmFtZTtcblxuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPXtpZH0gY2xhc3NOYW1lPVwic3Itb25seVwiPlxuICAgICAgICAgIHtuYW1lfVxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICByZWY9e2lucHV0UmVmfVxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzfVxuICAgICAgICAgIGlkPXtuYW1lfVxuICAgICAgICAgIHZhbHVlPXtpbml0VmFsdWV9XG4gICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgIHJlYWRPbmx5PXtyZWFkT25seX1cbiAgICAgICAgICBvbkNoYW5nZT17Y2hhbmdlSGFuZGxlcn1cbiAgICAgICAgICBvbkZvY3VzPXtmb2N1c0hhbmRsZXJ9XG4gICAgICAgICAgb25CbHVyPXtibHVySGFuZGxlcn1cbiAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAvPlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApO1xuICB9XG4pO1xuXG5JbnB1dC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5cbmV4cG9ydCBkZWZhdWx0IElucHV0O1xuIiwiaW1wb3J0IHsgQ1VSUkVOQ1kgfSBmcm9tICdoZWxwZXJzL2NvbnN0YW50cyc7XG5pbXBvcnQge1xuICBJdGVtQ2FyZEJhc2UsXG4gIEl0ZW1DYXJkSW1hZ2UsXG4gIEl0ZW1DYXJkQ29udGVudCxcbiAgSXRlbUNhcmRQcmljZSxcbn0gZnJvbSAnLi91dGlscy90aGVtZSc7XG5cbmludGVyZmFjZSBJdGVtUHJvcHMge1xuICBpbWFnZTogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIHByaWNlOiBudW1iZXI7XG59XG5cbmludGVyZmFjZSBJdGVtQ2FyZFByb3BzIHtcbiAgaXRlbTogSXRlbVByb3BzO1xuICBvbkNsaWNrPzogKGU6IGFueSkgPT4gdm9pZDtcbn1cblxuLy8gaGVpZ2h0IHV0aGF5IGRpdGUgaG9iZVxuXG5jb25zdCBJdGVtQ2FyZDogUmVhY3QuRkM8SXRlbUNhcmRQcm9wcz4gPSAoeyBpdGVtLCBvbkNsaWNrIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17SXRlbUNhcmRCYXNlfSBvbkNsaWNrPXtvbkNsaWNrfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtJdGVtQ2FyZEltYWdlfT5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIGNsYXNzTmFtZT1cIm9iamVjdC1jb3ZlclwiXG4gICAgICAgICAgc3JjPXtpdGVtLmltYWdlfVxuICAgICAgICAgIGFsdD17JyBBbHQgJyArIGl0ZW0ubmFtZX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17SXRlbUNhcmRDb250ZW50fT5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtJdGVtQ2FyZFByaWNlfT5cbiAgICAgICAgICB7Q1VSUkVOQ1l9XG4gICAgICAgICAge2l0ZW0ucHJpY2V9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC0xM3B4XCI+e2l0ZW0ubmFtZX08L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEl0ZW1DYXJkO1xuIiwiaW1wb3J0IHsgT3ZlcmxheVNjcm9sbGJhcnNDb21wb25lbnQgfSBmcm9tICdvdmVybGF5c2Nyb2xsYmFycy1yZWFjdCc7XG5cbnR5cGUgU2Nyb2xsYmFyUHJvcHMgPSB7XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbiAgb3B0aW9ucz86IGFueTtcbn07XG5cbmV4cG9ydCBjb25zdCBTY3JvbGxiYXI6IFJlYWN0LkZDPFNjcm9sbGJhclByb3BzPiA9ICh7XG4gIGNoaWxkcmVuLFxuICBjbGFzc05hbWUsXG4gIG9wdGlvbnMsXG4gIC4uLnByb3BzXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPE92ZXJsYXlTY3JvbGxiYXJzQ29tcG9uZW50XG4gICAgICBvcHRpb25zPXt7XG4gICAgICAgIGNsYXNzTmFtZTogYCR7Y2xhc3NOYW1lfSBvcy10aGVtZS10aGluYCxcbiAgICAgICAgc2Nyb2xsYmFyczoge1xuICAgICAgICAgIGF1dG9IaWRlOiAnbmV2ZXInLFxuICAgICAgICAgIHRvdWNoU3VwcG9ydDogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICB9fVxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L092ZXJsYXlTY3JvbGxiYXJzQ29tcG9uZW50PlxuICApO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU2VhcmNoSWNvbiBmcm9tICdhc3NldHMvaWNvbnMvc2VhcmNoLWljb24nO1xuaW1wb3J0IHsgdXNlU2VhcmNoIH0gZnJvbSAnY29udGV4dHMvc2VhcmNoL3VzZS1zZWFyY2gnO1xuaW1wb3J0IHtcbiAgU2VhcmNoQmFzZSxcbiAgU2VhcmNoSWNvbldyYXBwZXIsXG4gIFNlYXJjaElucHV0LFxufSBmcm9tICdjb21wb25lbnRzL3V0aWxzL3RoZW1lJztcblxudHlwZSBTZWFyY2hQcm9wcyA9IHsgY2xhc3NOYW1lPzogc3RyaW5nOyBpZD86IHN0cmluZyB9O1xuXG5jb25zdCBTZWFyY2g6IFJlYWN0LkZDPFNlYXJjaFByb3BzPiA9ICh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSkgPT4ge1xuICBjb25zdCB7IHNlYXJjaFRlcm0sIHNldFNlYXJjaFRlcm0gfSA9IHVzZVNlYXJjaCgpO1xuICBjb25zdCBvblNlYXJjaCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHsgdmFsdWUgfSA9IGUuY3VycmVudFRhcmdldDtcbiAgICBzZXRTZWFyY2hUZXJtKHZhbHVlKTtcbiAgfTtcbiAgY29uc3Qgb25TdWJtaXQgPSAoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIGNvbnN0IGNsYXNzTmFtZXMgPSBTZWFyY2hCYXNlICsgJyAnICsgY2xhc3NOYW1lO1xuICByZXR1cm4gKFxuICAgIDxmb3JtIG5vVmFsaWRhdGUgcm9sZT1cInNlYXJjaFwiIGNsYXNzTmFtZT17Y2xhc3NOYW1lc30gb25TdWJtaXQ9e29uU3VibWl0fT5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17U2VhcmNoSWNvbldyYXBwZXJ9PlxuICAgICAgICA8U2VhcmNoSWNvbiBjb2xvcj1cIiM5OTk5OTlcIiAvPlxuICAgICAgPC9zcGFuPlxuICAgICAgPGxhYmVsIGh0bWxGb3I9e3Byb3BzLmlkIHx8ICdzZWFyY2gtbm9ybWFsJ30gY2xhc3NOYW1lPVwic3Itb25seVwiPlxuICAgICAgICB7cHJvcHMuaWQgfHwgJ3NlYXJjaC1ub3JtYWwnfVxuICAgICAgPC9sYWJlbD5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwic2VhcmNoXCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggeW91ciBtZWRpY2luZSBoZXJlXCJcbiAgICAgICAgY2xhc3NOYW1lPXtTZWFyY2hJbnB1dH1cbiAgICAgICAgdmFsdWU9e3NlYXJjaFRlcm19XG4gICAgICAgIG9uQ2hhbmdlPXtvblNlYXJjaH1cbiAgICAgICAgaWQ9e3Byb3BzLmlkIHx8ICdzZWFyY2gtbm9ybWFsJ31cbiAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgLz5cbiAgICA8L2Zvcm0+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2g7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG4gIFRleHRCb3hDb21tb25CYXNlLFxuICBUZXh0YXJlYUJhc2UsXG4gIFRleHRCb3hEaXNhYmxlLFxuICBUZXh0Qm94RW5hYmxlLFxufSBmcm9tICcuL3V0aWxzL3RoZW1lJztcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XG4gIHZhbHVlPzogc3RyaW5nO1xuICBpbml0aWFsVmFsdWU/OiBzdHJpbmc7XG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuICByZWFkT25seT86IGJvb2xlYW47XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICBvbkNoYW5nZT86IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MVGV4dEFyZWFFbGVtZW50PikgPT4gdm9pZDtcbiAgb25Gb2N1cz86IChlOiBSZWFjdC5Gb2N1c0V2ZW50PEhUTUxUZXh0QXJlYUVsZW1lbnQ+KSA9PiB2b2lkO1xuICBvbkJsdXI/OiAoZTogUmVhY3QuRm9jdXNFdmVudDxIVE1MVGV4dEFyZWFFbGVtZW50PikgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRQcm9wcyA9IHtcbiAgZGlzYWJsZWQ6IGZhbHNlLFxuICByZWFkT25seTogZmFsc2UsXG4gIGNsYXNzTmFtZTogJycsXG4gIHBsYWNlaG9sZGVyOiAnJyxcbiAgaW5pdGlhbFZhbHVlOiAnJyxcbn07XG5cbnR5cGUgTmF0aXZlQXR0cnMgPSBPbWl0PFJlYWN0LlRleHRhcmVhSFRNTEF0dHJpYnV0ZXM8YW55Piwga2V5b2YgUHJvcHM+O1xuXG5leHBvcnQgdHlwZSBUZXh0YXJlYVByb3BzVHlwZSA9IFByb3BzICYgTmF0aXZlQXR0cnM7XG5cbmNvbnN0IFRleHRhcmVhOiBSZWFjdC5GQzxSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjxUZXh0YXJlYVByb3BzVHlwZT4+ID0gKHtcbiAgY2xhc3NOYW1lLFxuICB2YWx1ZSxcbiAgaW5pdGlhbFZhbHVlLFxuICBkaXNhYmxlZCxcbiAgcmVhZE9ubHksXG4gIHBsYWNlaG9sZGVyLFxuICBvbkNoYW5nZSxcbiAgb25Gb2N1cyxcbiAgb25CbHVyLFxuICAuLi5wcm9wc1xufSkgPT4ge1xuICBjb25zdCBbaW5pdFZhbHVlLCBzZXRJbml0VmFsdWVdID0gdXNlU3RhdGU8c3RyaW5nPihpbml0aWFsVmFsdWUpO1xuXG4gIGNvbnN0IGNoYW5nZUhhbmRsZXIgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxUZXh0QXJlYUVsZW1lbnQ+KSA9PiB7XG4gICAgaWYgKGRpc2FibGVkIHx8IHJlYWRPbmx5KSByZXR1cm47XG4gICAgc2V0SW5pdFZhbHVlKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgb25DaGFuZ2UgJiYgb25DaGFuZ2UoZXZlbnQpO1xuICB9O1xuXG4gIGNvbnN0IGZvY3VzSGFuZGxlciA9IChlOiBSZWFjdC5Gb2N1c0V2ZW50PEhUTUxUZXh0QXJlYUVsZW1lbnQ+KSA9PiB7XG4gICAgb25Gb2N1cyAmJiBvbkZvY3VzKGUpO1xuICB9O1xuICBjb25zdCBibHVySGFuZGxlciA9IChlOiBSZWFjdC5Gb2N1c0V2ZW50PEhUTUxUZXh0QXJlYUVsZW1lbnQ+KSA9PiB7XG4gICAgb25CbHVyICYmIG9uQmx1cihlKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSByZXR1cm47XG4gICAgc2V0SW5pdFZhbHVlKHZhbHVlKTtcbiAgfSwgW3ZhbHVlXSk7XG5cbiAgY29uc3QgY2xhc3NOYW1lcyA9XG4gICAgVGV4dEJveENvbW1vbkJhc2UgK1xuICAgICcgJyArXG4gICAgVGV4dGFyZWFCYXNlICtcbiAgICAnICcgK1xuICAgIChkaXNhYmxlZCA9PT0gdHJ1ZSA/IFRleHRCb3hEaXNhYmxlIDogVGV4dEJveEVuYWJsZSkgK1xuICAgICcgJyArXG4gICAgY2xhc3NOYW1lO1xuXG4gIHJldHVybiAoXG4gICAgPHRleHRhcmVhXG4gICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXN9XG4gICAgICB2YWx1ZT17aW5pdFZhbHVlfVxuICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgcmVhZE9ubHk9e3JlYWRPbmx5fVxuICAgICAgb25DaGFuZ2U9e2NoYW5nZUhhbmRsZXJ9XG4gICAgICBvbkZvY3VzPXtmb2N1c0hhbmRsZXJ9XG4gICAgICBvbkJsdXI9e2JsdXJIYW5kbGVyfVxuICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICAvPlxuICApO1xufTtcblxuVGV4dGFyZWEuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuXG5leHBvcnQgZGVmYXVsdCBUZXh0YXJlYTtcbiIsIi8vIEFkZCBhbGwgb2YgeW91ciBjb21wb25lbnRzIGRlc2lnbiBhbmQgdmFyaWF0aW9ucyBoZXJlXG5cbi8vIC0tLS0tLS1cbi8vIEJ1dHRvblxuLy8gLS0tLS0tLVxuZXhwb3J0IGNvbnN0IEJ1dHRvbkJhc2UgPVxuICAnZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZmxleC1zaHJpbmstMCBmb250LW5vcm1hbCB3LWF1dG8gdXBwZXJjYXNlIHJvdW5kZWQgb3V0bGluZS1ub25lIHRyYW5zaXRpb24gZHVyYXRpb24tMjUwIGVhc2UtaW4tb3V0IGZvY3VzOm91dGxpbmUtbm9uZSc7XG5leHBvcnQgY29uc3QgQnV0dG9uVmFyaWFudCA9IHtcbiAgLy8gcHJpbWFyeTogJ3RleHQtd2hpdGUgYmctcHJpbWFyeSBob3ZlcjpiZy1wcmltYXJ5LWhvdmVyJyxcbiAgcHJpbWFyeTogJ3RleHQtd2hpdGUgYmctZ3JheS05MDAgaG92ZXI6YmctZ3JheS05MDAnLFxuICBzZWNvbmRhcnk6ICd0ZXh0LXdoaXRlIGJnLWdyYXktOTAwIGhvdmVyOmJnLWdyYXktOTAwJyxcbiAgZWxldmF0aW9uOiAndGV4dC13aGl0ZSBiZy1ncmF5LTkwMCBob3ZlcjpiZy1ncmF5LTkwMCBzaGFkb3ctdXBzaWRlJyxcbn07XG5leHBvcnQgY29uc3QgQnV0dG9uRGlzYWJsZSA9XG4gICd0ZXh0LWdyYXktNTAwIGJnLWdyYXktMzAwIGN1cnNvci1ub3QtYWxsb3dlZCBob3ZlcjpiZy1ncmF5LTMwMCc7XG5leHBvcnQgY29uc3QgQnV0dG9uU2l6ZSA9IHtcbiAgYmlnOiAnaC0xMiBweC0zMHB4JyxcbiAgbm9ybWFsOiAnaC0xMSBweC0zMHB4JyxcbiAgc21hbGw6ICdoLTkgdGV4dC0xM3B4IHB4LTIwcHgnLFxufTtcblxuLy8gLS0tLS0tLS0tLS0tXG4vLyBJY29uIEJ1dHRvblxuLy8gLS0tLS0tLS0tLS0tXG5leHBvcnQgY29uc3QgSWNvbkJ0bkJhc2UgPVxuICAnZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgb3V0bGluZS1ub25lIHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTI1MCBlYXNlLWluLW91dCc7XG5cbi8vIC0tLS0tLS0tXG4vLyBDb3VudGVyXG4vLyAtLS0tLS0tLVxuZXhwb3J0IGNvbnN0IENvdW50ZXJCYXNlID1cbiAgJ2dyb3VwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBmbGV4LXNocmluay0wIHJvdW5kZWQgb3ZlcmZsb3ctaGlkZGVuIGJnLWdyYXktOTAwIHNoYWRvdy1mbG9hdGluZ1VwJztcblxuZXhwb3J0IGNvbnN0IENvdW50ZXJWYWx1ZSA9XG4gICdmb250LXNlbWlib2xkIHRleHQtMTNweCB0ZXh0LXdoaXRlIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGgtZnVsbCB3LTQwcHggdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMjUwIGVhc2UtaW4tb3V0IGN1cnNvci1kZWZhdWx0JztcblxuZXhwb3J0IGNvbnN0IENvdW50ZXJTaXplID0ge1xuICBiaWc6ICdoLTEyJyxcbiAgbm9ybWFsOiAnaC0zNXB4Jyxcbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tXG4vLyBJbnB1dCAmIFRleHRhcmVhXG4vLyAtLS0tLS0tLS0tLS0tLS0tLVxuZXhwb3J0IGNvbnN0IFRleHRCb3hDb21tb25CYXNlID1cbiAgJ3ctZnVsbCBoLTEyIHB4LTQgcGxhY2Vob2xkZXItZ3JheS01MDAgYm9yZGVyIGJvcmRlci10cmFuc3BhcmVudCByb3VuZGVkIG91dGxpbmUtbm9uZSB0cmFuc2l0aW9uIGR1cmF0aW9uLTIwMCc7XG5cbmV4cG9ydCBjb25zdCBUZXh0Qm94RGlzYWJsZSA9XG4gICd0ZXh0LWdyYXktNTAwIGJnLWdyYXktMzAwIGN1cnNvci1ub3QtYWxsb3dlZCBob3ZlcjpiZy1ncmF5LTMwMCBob3Zlcjpib3JkZXItdHJhbnNwYXJlbnQgZm9jdXM6Ym9yZGVyLXRyYW5zcGFyZW50IGZvY3VzOnBsYWNlaG9sZGVyLWdyYXktNTAwJztcblxuZXhwb3J0IGNvbnN0IFRleHRCb3hFbmFibGUgPVxuICAndGV4dC1ncmF5LTkwMCBiZy1ncmF5LWY3IGhvdmVyOmJvcmRlci1ncmF5LTQwMCBmb2N1czpib3JkZXItYmxhY2sgZm9jdXM6cGxhY2Vob2xkZXItZ3JheS05MDAnO1xuXG5leHBvcnQgY29uc3QgSW5wdXRCYXNlID0gJ2gtMTIgcHgtNCc7XG5cbmV4cG9ydCBjb25zdCBUZXh0YXJlYUJhc2UgPSAnaC0xMjBweCBwLTQgcmVzaXplLW5vbmUnO1xuXG4vLyAtLS0tLS0tLS0tXG4vLyBDYXJ0IEl0ZW1cbi8vIC0tLS0tLS0tLS1cbmV4cG9ydCBjb25zdCBDYXJ0SXRlbUJhc2UgPVxuICAndy1mdWxsIGgtYXV0byBmbGV4IGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyIGJnLXdoaXRlIHB4LTMwcHggcHktNiBib3JkZXItYiBib3JkZXItZ3JheS0yMDAgcmVsYXRpdmUgbGFzdDpib3JkZXItYi0wJztcblxuZXhwb3J0IGNvbnN0IENhcnRJdGVtSW1hZ2UgPVxuICAnZmxleCB3LTEwNXB4IGgtMTA1cHggcm91bmRlZCBvdmVyZmxvdy1oaWRkZW4gYmctZ3JheS0yMDAgbXItMTVweCBmbGV4LXNocmluay0wIGl0ZW1zLWNlbnRlcic7XG5cbmV4cG9ydCBjb25zdCBDYXJ0SXRlbUNvbnRlbnQgPSAnZmxleCBmbGV4LWNvbCB3LWZ1bGwgcHgtMTVweCc7XG5cbmV4cG9ydCBjb25zdCBDYXJ0SXRlbU5hbWUgPSAndGV4dC0xM3B4IHRleHQtZ3JheS05MDAnO1xuXG5leHBvcnQgY29uc3QgQ2FydEl0ZW1TaW5nbGVQcmljZSA9ICd0ZXh0LTEzcHggdGV4dC1ncmF5LTUwMCBtdC01cHggbWItMTBweCc7XG5cbmV4cG9ydCBjb25zdCBDYXJ0SXRlbVRvdGFsV3JhcHBlciA9ICdmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4nO1xuXG5leHBvcnQgY29uc3QgQ2FydEl0ZW1Ub3RhbFByaWNlID1cbiAgJ2ZvbnQtc2VtaWJvbGQgdGV4dC0xNnB4IHRleHQtZ3JheS05MDAgZmxleC1zaHJpbmstMCBtbC0yJztcblxuLy8gLS0tLS0tLS1cbi8vIEZlYXR1cmVcbi8vIC0tLS0tLS0tXG5leHBvcnQgY29uc3QgRmVhdHVyZUJhc2UgPSAnZmVhdHVyZS1ibG9jayBmbGV4IHctZnVsbCBpdGVtcy1zdGFydCBmbGV4LXJvdyc7XG5leHBvcnQgY29uc3QgRmVhdHVyZUNvdW50ZXIgPVxuICAnZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdy03MHB4IGgtNzBweCByb3VuZGVkLWZ1bGwgbXItMjBweCBiZy1ncmF5LTMwMCBmbGV4LXNocmluay0wIHRleHQtMjRweCBmb250LXNlbWlib2xkJztcblxuZXhwb3J0IGNvbnN0IEZlYXR1cmVDb250ZW50ID0gJ2ZsZXggZmxleC1jb2wgaXRlbXMtc3RhcnQnO1xuXG5leHBvcnQgY29uc3QgRmVhdHVyZVRpdGxlID1cbiAgJ3ctZnVsbCB0ZXh0LTE4cHggZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktOTAwIG10LTAgbWItMic7XG5cbmV4cG9ydCBjb25zdCBGZWF0dXJlRGV0YWlscyA9ICd3LWZ1bGwgbGVhZGluZy02IHRleHQtMTRweCc7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLVxuLy8gQ2FsbCBUbyBBY3Rpb25cbi8vIC0tLS0tLS0tLS0tLS0tLVxuZXhwb3J0IGNvbnN0IENUQUJhc2UgPVxuICAndy1mdWxsIGZsZXggZmxleC1jb2wgaXRlbXMtc3RhcnQgcHgtMzBweCBweS00NXB4IGJnLWNvdmVyIGJnLWNlbnRlciBiZy1uby1yZXBlYXQgYmctZ3JheS0xMDAgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkIG92ZXJmbG93LWhpZGRlbiByZWxhdGl2ZSB4eGw6cHktNjBweCB4eGw6cHgtODBweCc7XG5cbmV4cG9ydCBjb25zdCBDVEFDb250ZW50ID1cbiAgJ2ZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGxnOml0ZW1zLXN0YXJ0IHJlbGF0aXZlIHotMTAgdy1mdWxsIGxnOm1heC13LWhhbGYnO1xuXG4vLyAtLS0tLS0tLS0tXG4vLyBJdGVtIENhcmQgLi4uLiBIZWlnaHQgdXRoYXkgZGl0ZSBob2JlIGltYWdlIHRoZWtlXG4vLyAtLS0tLS0tLS0tXG5leHBvcnQgY29uc3QgSXRlbUNhcmRCYXNlID0gJ3ctZnVsbCBmbGV4IGZsZXgtY29sIGl0ZW1zLXN0YXJ0IGN1cnNvci1wb2ludGVyJztcbmV4cG9ydCBjb25zdCBJdGVtQ2FyZEltYWdlID1cbiAgJ2ZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHctZnVsbCByb3VuZGVkIG92ZXJmbG93LWhpZGRlbic7XG5leHBvcnQgY29uc3QgSXRlbUNhcmRDb250ZW50ID0gJ2ZsZXggZmxleC1jb2wgaXRlbXMtc3RhcnQgbXQtMyc7XG5leHBvcnQgY29uc3QgSXRlbUNhcmRQcmljZSA9ICdmb250LXNlbWlib2xkIHRleHQtZ3JheS05MDAgbWItMiB0ZXh0LTE2cHgnO1xuXG4vLyAtLS0tLS0tLS0tXG4vLyBTZWFyY2hCb3hcbi8vIC0tLS0tLS0tLS1cbmV4cG9ydCBjb25zdCBTZWFyY2hCYXNlID1cbiAgJ2ZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHctZnVsbCBsZzptYXgtdy1zY3JlZW4tbWQgcm91bmRlZCByZWxhdGl2ZSBvdmVyZmxvdy1oaWRkZW4nO1xuXG5leHBvcnQgY29uc3QgU2VhcmNoSWNvbldyYXBwZXIgPVxuICAnYWJzb2x1dGUgdG9wLTAgbGVmdC0wIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGgtZnVsbCB3LTUwcHgnO1xuXG5leHBvcnQgY29uc3QgU2VhcmNoSW5wdXQgPVxuICAndy1mdWxsIGgtMTIgcGwtMTIgcHgtNCB0ZXh0LWdyYXktOTAwIHBsYWNlaG9sZGVyLWdyYXktNTAwIGJnLWdyYXktZjcgYm9yZGVyLTIgYm9yZGVyLXRyYW5zcGFyZW50IHJvdW5kZWQgb3V0bGluZS1ub25lIHRyYW5zaXRpb24gZHVyYXRpb24tMjAwIGhvdmVyOmJvcmRlci1ncmF5LTQwMCBmb2N1czpib3JkZXItYmxhY2sgZm9jdXM6cGxhY2Vob2xkZXItZ3JheS05MDAnO1xuXG4vLyAtLS0tLS0tLS0tLS0tLVxuLy8gU2VjdGlvbiBUaXRsZVxuLy8gLS0tLS0tLS0tLS0tLS1cbmV4cG9ydCBjb25zdCBTZWN0aW9uVGl0bGVCYXNlID0gJ2ZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyJztcblxuZXhwb3J0IGNvbnN0IFNlY3Rpb25UaXRsZUhlYWRpbmcgPVxuICAnZmxleCBqdXN0aWZ5LWNlbnRlciB0ZXh0LTIxcHggZm9udC1zZW1pYm9sZCB0ZXh0LWNlbnRlciBtYi0yIHRleHQtZ3JheS05MDAgeHhsOnRleHQtMjRweCB4eGw6bWItMTBweCc7XG5cbmV4cG9ydCBjb25zdCBTZWN0aW9uVGl0bGVTdWJUaXRsZSA9XG4gICdmbGV4IGp1c3RpZnktY2VudGVyIHRleHQtbGVmdCB4eGw6dGV4dC1jZW50ZXInO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gU2VjdGlvbiBUaXRsZSB3aXRoIEJhclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmV4cG9ydCBjb25zdCBTZWN0aW9uVGl0bGVCYXJCYXNlID0gJ2ZsZXggZmxleC1jb2wgaXRlbXMtc3RhcnQgcmVsYXRpdmUgcGwtOCc7XG5cbmV4cG9ydCBjb25zdCBTZWN0aW9uVGl0bGVCYXIgPVxuICAnZmxleCB3LTVweCBoLWZ1bGwgYmctcHJpbWFyeSBhYnNvbHV0ZSB0b3AtMCBsZWZ0LTAnO1xuXG5leHBvcnQgY29uc3QgU2VjdGlvblRpdGxlQmFySGVhZGluZyA9XG4gICdmbGV4IGp1c3RpZnktc3RhcnQgdGV4dC0yMXB4IGZvbnQtc2VtaWJvbGQgdGV4dC1sZWZ0IG1iLTIgdGV4dC1ncmF5LTkwMCB4eGw6dGV4dC0yNHB4IHh4bDpmb250LXNlbWlib2xkIHh4bDptYi0zJztcblxuZXhwb3J0IGNvbnN0IFNlY3Rpb25UaXRsZUJhclN1YlRpdGxlID0gJ2ZsZXgganVzdGlmeS1zdGFydCB0ZXh0LWxlZnQnO1xuXG4vLyAtLS0tLS0tLS1cbi8vIENhcm91c2VsXG4vLyAtLS0tLS0tLS1cbmV4cG9ydCBjb25zdCBCdXR0b25Hcm91cEJhc2UgPSAnZmxleCBpdGVtcy1jZW50ZXIgYWJzb2x1dGUgdG9wLWhhbGYgdy1mdWxsJztcblxuZXhwb3J0IGNvbnN0IEFycm93QnV0dG9uQmFzZSA9XG4gICd3LTMwcHggaC0zMHB4IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtZnVsbCB0ZXh0LWdyYXktMDAgYmctd2hpdGUgc2hhZG93LW5hdmlnYXRpb24gYWJzb2x1dGUgdHJhbnNpdGlvbiBkdXJhdGlvbi0yNTAgaG92ZXI6YmctZ3JheS05MDAgaG92ZXI6dGV4dC13aGl0ZSBmb2N1czpvdXRsaW5lLW5vbmUnO1xuXG5leHBvcnQgY29uc3QgUHJldkJ1dHRvblJhZGl1cyA9ICdsZWZ0LTAgbWwtMjRweCAnO1xuXG5leHBvcnQgY29uc3QgTmV4dEJ1dHRvblJhZGl1cyA9ICdyaWdodC0wIG1yLTI0cHgnO1xuXG5leHBvcnQgY29uc3QgQWN0aXZlRG90c0Jhc2UgPSAndy02IGJnLXByaW1hcnknO1xuXG5leHBvcnQgY29uc3QgQ2Fyb3VzZWxJdGVtQmFzZSA9XG4gICdvdmVyZmxvdy1oaWRkZW4gdy1mdWxsIGZsZXggcm91bmRlZCBvdmVyZmxvdy1oaWRkZW4nO1xuXG5leHBvcnQgY29uc3QgQ2Fyb3VzZWxJdGVtSW1hZ2UgPSAndy1mdWxsIGgtZnVsbCBvYmplY3QtY292ZXInO1xuXG4vLyAtLS0tLS0tLS0tLS1cbi8vIFRlc3RpbW9uaWFsXG4vLyAtLS0tLS0tLS0tLS1cbmV4cG9ydCBjb25zdCBUZXN0aW1vbmlhbFByZXZCdXR0b25SYWRpdXMgPSAnbGVmdC0wIG1sLTEwcHggbGc6bWwtMzVweCc7XG5cbmV4cG9ydCBjb25zdCBUZXN0aW1vbmlhbE5leHRCdXR0b25SYWRpdXMgPSAncmlnaHQtMCBtci0xMHB4IGxnOm1yLTM1cHgnO1xuXG5leHBvcnQgY29uc3QgVGVzdGltb25pYWxCYXNlID1cbiAgJ3ctZnVsbCBiZy13aGl0ZSBmbGV4IGZsZXgtY29sIHJvdW5kZWQgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBwLTQwcHggbGc6cC01MHB4IHB0LTMwcHgnO1xuXG5leHBvcnQgY29uc3QgUXVvdGVCYXNlID0gJ3RleHQtZ3JheS0yMDAgZmxleCBqdXN0aWZ5LWNlbnRlciBtYi0zMHB4JztcblxuZXhwb3J0IGNvbnN0IFRlc3RpbW9uaWFsUmV2aWV3ID1cbiAgJ3RleHQtMTZweCB0ZXh0LWdyYXktNzAwIGZvbnQtbm9ybWFsIHRleHQtY2VudGVyIG1iLTMwcHggbGVhZGluZy03JztcblxuZXhwb3J0IGNvbnN0IFRlc3RpbW9uaWFsUmV2aWV3ZXJCYXNlID0gJ2ZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyJztcblxuZXhwb3J0IGNvbnN0IFRlc3RpbW9uaWFsSXRlbUltYWdlQmFzZSA9XG4gICdvdmVyZmxvdy1oaWRkZW4gdy00MHB4IGgtNDBweCBtci0xNXB4IGJnLWdyYXktMTAwIGZsZXggcm91bmRlZC1mdWxsIG92ZXJmbG93LWhpZGRlbiBzaGFkb3ctZmxvYXRpbmdVcCc7XG5cbmV4cG9ydCBjb25zdCBSZXZpZXdlck5hbWUgPSAndGV4dC0xNnB4IHRleHQtZ3JheS05MDAgZm9udC1zZW1pYm9sZCB0ZXh0LWNlbnRlcic7XG4iLCJpbXBvcnQgQ1RBQmxvY2sgZnJvbSAnY29tcG9uZW50cy9jdGEtYmxvY2snO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdjb21wb25lbnRzL2J1dHRvbic7XG5pbXBvcnQgQXJyb3dSaWdodCBmcm9tICdhc3NldHMvaWNvbnMvYXJyb3ctcmlnaHQnO1xuaW1wb3J0IENUQUltYWdlIGZyb20gJ2Fzc2V0cy9pbWFnZS9DVEEtaW1hZ2UucG5nJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FsbFRvQWN0aW9uKCkge1xuICByZXR1cm4gKFxuICAgIDxDVEFCbG9jayBiYWNrZ3JvdW5kPXtDVEFJbWFnZX0+XG4gICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1ub3JtYWwgdGV4dC13aGl0ZSB0ZXh0LTI0cHggc206dGV4dC0zNnB4IG1iLTYgdGV4dC1jZW50ZXIgbGc6dGV4dC1sZWZ0XCI+XG4gICAgICAgIEZhc3QsIEZyZWUgU2hpcHBpbmcsXG4gICAgICAgIDxiciAvPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkXCI+Q29udGFjdGxlc3MgRGVsaXZlcnkuPC9zcGFuPlxuICAgICAgPC9oMz5cblxuICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LWNlbnRlciBsZzp0ZXh0LWxlZnQgbWItMTBcIj5cbiAgICAgICAgVHJ5IGl0IGZvciBub3csIHJpc2sgZnJlZSFcbiAgICAgIDwvcD5cblxuICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiZWxldmF0aW9uXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1yLTJcIj5TaG9wIE5vdzwvc3Bhbj4gPEFycm93UmlnaHQgd2lkdGg9XCIxM3B4XCIgLz5cbiAgICAgIDwvQnV0dG9uPlxuICAgIDwvQ1RBQmxvY2s+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IERyYXdlckNvbnRleHQgfSBmcm9tICdjb250ZXh0cy9kcmF3ZXIvZHJhd2VyLnByb3ZpZGVyJztcbmltcG9ydCBQcm9kdWN0RGV0YWlscyBmcm9tICcuL3ZpZXdzL3Byb2R1Y3QtZGV0YWlscyc7XG5pbXBvcnQgQ2FydCBmcm9tICcuL3ZpZXdzL2NhcnQnO1xuaW1wb3J0IENoZWNrb3V0IGZyb20gJy4vdmlld3MvY2hlY2tvdXQnO1xuaW1wb3J0IERyYXdlck1lbnUgZnJvbSAnLi92aWV3cy9tZW51cyc7XG5cbmV4cG9ydCBjb25zdCBDYXJ0RHJhd2VyID0gKCkgPT4ge1xuICBjb25zdCB7IHN0YXRlLCBkaXNwYXRjaCB9ID0gdXNlQ29udGV4dChEcmF3ZXJDb250ZXh0KTtcblxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogJ1NMSURFX0NBUlQnLFxuICAgICAgcGF5bG9hZDoge1xuICAgICAgICBvcGVuOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgY29uc3QgZHJhd2VyQ29tcG9uZW50ID0gKHN0YXRlKSA9PiB7XG4gICAgaWYgKHN0YXRlPy5zaG93RGV0YWlscyA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIDxQcm9kdWN0RGV0YWlscyAvPjtcbiAgICB9XG5cbiAgICBpZiAoc3RhdGU/LnNob3dDYXJ0ID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gPENhcnQgLz47XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlPy5zaG93Q2hlY2tvdXQgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiA8Q2hlY2tvdXQgLz47XG4gICAgfVxuXG4gICAgcmV0dXJuIDxDYXJ0IC8+O1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAge3N0YXRlPy5vcGVuID09PSB0cnVlID8gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJsYXlcIiByb2xlPVwiYnV0dG9uXCIgb25DbGljaz17aGFuZGxlQ2xvc2V9IC8+XG4gICAgICApIDogKFxuICAgICAgICAnJ1xuICAgICAgKX1cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtgZHJhd2VyIGRyYXdlci1jYXJ0ICR7c3RhdGU/Lm9wZW4gPT09IHRydWUgPyAnb3BlbicgOiAnJ31gfVxuICAgICAgPlxuICAgICAgICB7ZHJhd2VyQ29tcG9uZW50KHN0YXRlKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgRHJhd2VyID0gKCkgPT4ge1xuICBjb25zdCB7IHN0YXRlLCBkaXNwYXRjaCB9OiBhbnkgPSB1c2VDb250ZXh0KERyYXdlckNvbnRleHQpO1xuXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT5cbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiAnT1BFTl9NRU5VJyxcbiAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgbWVudTogZmFsc2UsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAge3N0YXRlPy5tZW51ID09PSB0cnVlID8gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwib3ZlcmxheSBvdmVybGF5LW1lbnVcIlxuICAgICAgICAgIHJvbGU9XCJidXR0b25cIlxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfVxuICAgICAgICAvPlxuICAgICAgKSA6IChcbiAgICAgICAgJydcbiAgICAgICl9XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17YGRyYXdlciBkcmF3ZXItbWVudSAke3N0YXRlPy5tZW51ID09PSB0cnVlID8gJ29wZW4nIDogJyd9YH1cbiAgICAgID5cbiAgICAgICAgPERyYXdlck1lbnUgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuIiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTY3JvbGxiYXIgfSBmcm9tICdjb21wb25lbnRzL3Njcm9sbGJhcic7XG5pbXBvcnQgeyB1c2VDYXJ0IH0gZnJvbSAnY29udGV4dHMvY2FydC9jYXJ0LnByb3ZpZGVyJztcbmltcG9ydCB7IERyYXdlckNvbnRleHQgfSBmcm9tICdjb250ZXh0cy9kcmF3ZXIvZHJhd2VyLnByb3ZpZGVyJztcbmltcG9ydCBDYXJ0SXRlbSBmcm9tICdjb21wb25lbnRzL2NhcnQtaXRlbSc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ2NvbXBvbmVudHMvYnV0dG9uJztcbmltcG9ydCBOb0l0ZW0gZnJvbSAnLi9uby1pdGVtJztcbmltcG9ydCBBcnJvd0xlZnQgZnJvbSAnYXNzZXRzL2ljb25zL2Fycm93LWxlZnQnO1xuaW1wb3J0IHsgQ1VSUkVOQ1kgfSBmcm9tICdoZWxwZXJzL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcnQoKSB7XG4gIGNvbnN0IHsgZGlzcGF0Y2ggfSA9IHVzZUNvbnRleHQoRHJhd2VyQ29udGV4dCk7XG5cbiAgY29uc3QgeyBpdGVtcywgY2FsY3VsYXRlUHJpY2UgfSA9IHVzZUNhcnQoKTtcblxuICBjb25zdCBzaG93Q2hlY2tvdXQgPSAoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogJ1RPR0dMRV9DSEVDS09VVF9WSUVXJyxcbiAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgc2hvd0NoZWNrb3V0OiB0cnVlLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBoaWRlQ2FydCA9ICgpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiAnU0xJREVfQ0FSVCcsXG4gICAgICBwYXlsb2FkOiB7XG4gICAgICAgIG9wZW46IGZhbHNlLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB3LWZ1bGwgaC1mdWxsXCI+XG4gICAgICB7aXRlbXMubGVuZ3RoID8gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXgganVzdGlmeS1jZW50ZXIgcmVsYXRpdmUgcHgtMzBweCBweS0yMHB4IGJvcmRlci1iIGJvcmRlci1ncmF5LTIwMFwiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWF1dG8gaC0xMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LWdyYXktNTAwIGFic29sdXRlIHRvcC1oYWxmIC1tdC0yMHB4IGxlZnQtMzBweCB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMCBmb2N1czpvdXRsaW5lLW5vbmUgaG92ZXI6dGV4dC1ncmF5LTkwMFwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hpZGVDYXJ0fVxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiY2xvc2VcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8QXJyb3dMZWZ0IC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LTI0cHggbS0wXCI+WW91ciBCYXNrZXQ8L2gyPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPFNjcm9sbGJhciBjbGFzc05hbWU9XCJjYXJ0LXNjcm9sbGJhciBmbGV4LWdyb3dcIj5cbiAgICAgICAgICAgIHtpdGVtcy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgPENhcnRJdGVtIGl0ZW09e2l0ZW19IGtleT17aXRlbS5pZH0gLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvU2Nyb2xsYmFyPlxuICAgICAgICA8Lz5cbiAgICAgICkgOiAoXG4gICAgICAgIDxOb0l0ZW0gLz5cbiAgICAgICl9XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBwLTMwcHhcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtZ3JheS05MDBcIj5cbiAgICAgICAgICAgIFN1YnRvdGFsICZuYnNwO1xuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ub3JtYWwgdGV4dC1ncmF5LTcwMCB0ZXh0LTEzcHhcIj5cbiAgICAgICAgICAgICAgKEluY2wuIFZBVClcbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtMThweCB0ZXh0LWdyYXktOTAwXCI+XG4gICAgICAgICAgICB7Q1VSUkVOQ1l9XG4gICAgICAgICAgICB7Y2FsY3VsYXRlUHJpY2UoKX1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9XCJiaWcgbXQtMjBweFwiXG4gICAgICAgICAgZGlzYWJsZWQ9eyFpdGVtcy5sZW5ndGggPyB0cnVlIDogZmFsc2V9XG4gICAgICAgICAgb25DbGljaz17c2hvd0NoZWNrb3V0fVxuICAgICAgICA+XG4gICAgICAgICAgQ29uZmlybVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwiaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTnVtYmVyRm9ybWF0IGZyb20gJ3JlYWN0LW51bWJlci1mb3JtYXQnO1xuaW1wb3J0IHsgRHJhd2VyQ29udGV4dCB9IGZyb20gJ2NvbnRleHRzL2RyYXdlci9kcmF3ZXIucHJvdmlkZXInO1xuaW1wb3J0IHsgU2Nyb2xsYmFyIH0gZnJvbSAnY29tcG9uZW50cy9zY3JvbGxiYXInO1xuaW1wb3J0IEFycm93TGVmdCBmcm9tICdhc3NldHMvaWNvbnMvYXJyb3ctbGVmdCc7XG5pbXBvcnQgSW5wdXQgZnJvbSAnY29tcG9uZW50cy9pbnB1dCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ2NvbXBvbmVudHMvYnV0dG9uJztcbmltcG9ydCB7IHVzZUNhcnQgfSBmcm9tICdjb250ZXh0cy9jYXJ0L2NhcnQucHJvdmlkZXInO1xuaW1wb3J0IFRleHRhcmVhIGZyb20gJ2NvbXBvbmVudHMvdGV4dGFyZWEnO1xuaW1wb3J0IE9yZGVyU3VibWl0IGZyb20gJy4vb3JkZXItc3VibWl0JztcbmltcG9ydCB7XG4gIElucHV0QmFzZSxcbiAgVGV4dEJveENvbW1vbkJhc2UsXG4gIFRleHRCb3hFbmFibGUsXG59IGZyb20gJ2NvbXBvbmVudHMvdXRpbHMvdGhlbWUnO1xuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBwaG9uZV9udW1iZXI6ICcnLFxuICBuYW1lOiAnJyxcbiAgYWRkcmVzczogJycsXG4gIHBvc3RhbF9jb2RlOiAnJyxcbiAgc3VpdGU6ICcnLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hlY2tvdXQoKSB7XG4gIGNvbnN0IHsgZGlzcGF0Y2ggfSA9IHVzZUNvbnRleHQoRHJhd2VyQ29udGV4dCk7XG4gIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoaW5pdGlhbFN0YXRlKTtcbiAgY29uc3QgW3N1Y2Nlc3MsIHNldFN1Y2Nlc3NdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IHsgaXRlbXMsIGNhbGN1bGF0ZVByaWNlLCBjbGVhckNhcnQgfSA9IHVzZUNhcnQoKTtcblxuICBjb25zdCBoaWRlQ2hlY2tvdXQgPSAoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogJ1RPR0dMRV9DSEVDS09VVF9WSUVXJyxcbiAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgc2hvd0NoZWNrb3V0OiBmYWxzZSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3Qgc3VibWl0T3JkZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgeyBuYW1lLCBhZGRyZXNzLCBwb3N0YWxfY29kZSwgc3VpdGUsIHBob25lX251bWJlciB9ID0gZm9ybURhdGE7XG4gICAgaWYgKCFwaG9uZV9udW1iZXIudHJpbSgpKSB7XG4gICAgICBzZXRFcnJvcih7XG4gICAgICAgIGZpZWxkOiAncGhvbmVfbnVtYmVyJyxcbiAgICAgICAgbWVzc2FnZTogJ1Bob25lIG51bWJlciBpcyByZXF1aXJlZCcsXG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJy9hcGkvb3JkZXInLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgaXRlbXM6IGl0ZW1zXG4gICAgICAgICAgLm1hcCgoaXRlbSkgPT4gYCR7aXRlbS5uYW1lfSAtICR7aXRlbS5xdWFudGl0eX1gKVxuICAgICAgICAgIC50b1N0cmluZygpLFxuICAgICAgICBhZGRyZXNzOiBgJHtuYW1lfSAke2FkZHJlc3N9ICR7cG9zdGFsX2NvZGV9ICR7c3VpdGV9YCxcbiAgICAgICAgcGhvbmVfbnVtYmVyOiBwaG9uZV9udW1iZXIsXG4gICAgICAgIGVtYWlsOiAnZW1haWxAZW1haWwuY29tJyxcbiAgICAgICAgYmlsbF9hbW91bnQ6IGNhbGN1bGF0ZVByaWNlKCksXG4gICAgICB9KSxcbiAgICB9KTtcbiAgICBpZiAocmVzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICBzZXRTdWNjZXNzKHRydWUpO1xuICAgICAgY2xlYXJDYXJ0KCk7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0RXJyb3IodHJ1ZSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IG9uQ2hhbmdlID0gKGUpID0+IHtcbiAgICBjb25zdCB7IHZhbHVlLCBuYW1lIH0gPSBlLmN1cnJlbnRUYXJnZXQ7XG4gICAgc2V0Rm9ybURhdGEoe1xuICAgICAgLi4uZm9ybURhdGEsXG4gICAgICBbbmFtZV06IHZhbHVlLFxuICAgIH0pO1xuICB9O1xuICBpZiAoc3VjY2Vzcykge1xuICAgIHJldHVybiA8T3JkZXJTdWJtaXQgLz47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB3LWZ1bGwgaC1mdWxsXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGp1c3RpZnktY2VudGVyIHJlbGF0aXZlIHB4LTMwcHggcHktMjBweFwiPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1hdXRvIGgtMTAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC1ncmF5LTUwMCBhYnNvbHV0ZSB0b3AtaGFsZiAtbXQtMjBweCBsZWZ0LTMwcHggdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDAgZm9jdXM6b3V0bGluZS1ub25lIGhvdmVyOnRleHQtZ3JheS05MDBcIlxuICAgICAgICAgIG9uQ2xpY2s9e2hpZGVDaGVja291dH1cbiAgICAgICAgICBhcmlhLWxhYmVsPVwiY2xvc2VcIlxuICAgICAgICA+XG4gICAgICAgICAgPEFycm93TGVmdCAvPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LTI0cHggbS0wXCI+Q2hlY2tvdXQ8L2gyPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxTY3JvbGxiYXIgY2xhc3NOYW1lPVwiY2hlY2tvdXQtc2Nyb2xsYmFyIGZsZXgtZ3Jvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgcHgtMzBweCBwdC0yMHB4XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG1iLTQ1cHhcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsZXggZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktOTAwIHRleHQtMThweCBtYi0xNXB4XCI+XG4gICAgICAgICAgICAgIENvbnRhY3QgSW5mb3JtYXRpb25cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxOdW1iZXJGb3JtYXRcbiAgICAgICAgICAgICAgZm9ybWF0PVwiKzkxICgjIyMpICMjIy0jIyMjXCJcbiAgICAgICAgICAgICAgbWFzaz1cIl9cIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk1vYmlsZSBQaG9uZSBOdW1iZXJcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake0lucHV0QmFzZX0gJHtUZXh0Qm94Q29tbW9uQmFzZX0gJHtUZXh0Qm94RW5hYmxlfWB9XG4gICAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5waG9uZV9udW1iZXJ9XG4gICAgICAgICAgICAgIG9uVmFsdWVDaGFuZ2U9eyh7IHZhbHVlIH0pID0+XG4gICAgICAgICAgICAgICAgc2V0Rm9ybURhdGEoe1xuICAgICAgICAgICAgICAgICAgLi4uZm9ybURhdGEsXG4gICAgICAgICAgICAgICAgICBwaG9uZV9udW1iZXI6IHZhbHVlLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7ZXJyb3I/LmZpZWxkID09PSAncGhvbmVfbnVtYmVyJyAmJiAoXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtMTJweCBmb250LXNlbWlib2xkIHRleHQtZXJyb3IgcHQtMTBweCBwbC0xNXB4XCI+XG4gICAgICAgICAgICAgICAge2Vycm9yLm1lc3NhZ2V9XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsZXggZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktOTAwIHRleHQtMThweCBtYi0xNXB4XCI+XG4gICAgICAgICAgICAgIFNoaXBwaW5nIEFkZHJlc3NcbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5hbWVcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYi0xMHB4XCJcbiAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEubmFtZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPFRleHRhcmVhXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgQWRkcmVzc1wiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1iLTEwcHhcIlxuICAgICAgICAgICAgICBuYW1lPVwiYWRkcmVzc1wiXG4gICAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5hZGRyZXNzfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICAgICAgICA+PC9UZXh0YXJlYT5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBtYi0xMHB4XCI+XG4gICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUG9zdGFsIENvZGVcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnY2FsYyg1MCUgLSA1cHgpJywgbWFyZ2luUmlnaHQ6ICc1cHgnIH19XG4gICAgICAgICAgICAgICAgbmFtZT1cInBvc3RhbF9jb2RlXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEucG9zdGFsX2NvZGV9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFwYXJ0bWVudCwgU3VpdGUsIGV0Yy5cIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnY2FsYyg1MCUgLSA1cHgpJywgbWFyZ2luTGVmdDogJzVweCcgfX1cbiAgICAgICAgICAgICAgICBuYW1lPVwic3VpdGVcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5zdWl0ZX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1Njcm9sbGJhcj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHAtMzBweFwiPlxuICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImJpZyB3LWZ1bGxcIiBvbkNsaWNrPXtzdWJtaXRPcmRlcn0gbG9hZGluZz17bG9hZGluZ30+XG4gICAgICAgICAgT3JkZXIgTm93XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCJpbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IFNjcm9sbGJhciB9IGZyb20gJ2NvbXBvbmVudHMvc2Nyb2xsYmFyJztcbmltcG9ydCBBY3RpdmVMaW5rIGZyb20gJ2NvbXBvbmVudHMvYWN0aXZlLWxpbmsnO1xuaW1wb3J0IHsgRHJhd2VyQ29udGV4dCB9IGZyb20gJ2NvbnRleHRzL2RyYXdlci9kcmF3ZXIucHJvdmlkZXInO1xuaW1wb3J0IENsb3NlSWNvbiBmcm9tICdhc3NldHMvaWNvbnMvY2xvc2UnO1xuaW1wb3J0IExvZ28gZnJvbSAnYXNzZXRzL2ljb25zL2xvZ28nO1xuaW1wb3J0IHtcbiAgRmFjZWJvb2ssXG4gIFR3aXR0ZXIsXG4gIFlvdXR1YmUsXG4gIEdpdGh1YixcbiAgSW5zdGFncmFtLFxuICBMaW5rZWRpbixcbn0gZnJvbSAnYXNzZXRzL2ljb25zL3NvY2lhbC1pY29ucyc7XG5cbmNvbnN0IG1lbnVzID0gW1xuICB7XG4gICAgaWQ6IDEsXG4gICAgcGF0aG5hbWU6ICcvJyxcbiAgICB0aXRsZTogJycsXG4gIH0sXG4gIHtcbiAgICBpZDogNCxcbiAgICBwYXRobmFtZTogJy9mYXEnLFxuICAgIHRpdGxlOiAnRkFRJyxcbiAgfSxcbiAge1xuICAgIGlkOiA1LFxuICAgIHBhdGhuYW1lOiAnL3Rlcm1zJyxcbiAgICB0aXRsZTogJ1Rlcm1zICYgQ29uZGl0aW9ucycsXG4gIH0sXG5dO1xuXG5jb25zdCBzb2NpYWwgPSBbXG4gIHtcbiAgICBpZDogMCxcbiAgICBsaW5rOiAnLycsXG4gICAgaWNvbjogPEZhY2Vib29rIC8+LFxuICAgIGNsYXNzTmFtZTogJ2ZhY2Vib29rJyxcbiAgICB0aXRsZTogJ2ZhY2Vib29rJyxcbiAgfSxcbiAge1xuICAgIGlkOiAxLFxuICAgIGxpbms6ICcvJyxcbiAgICBpY29uOiA8VHdpdHRlciAvPixcbiAgICBjbGFzc05hbWU6ICd0d2l0dGVyJyxcbiAgICB0aXRsZTogJ3R3aXR0ZXInLFxuICB9LFxuICB7XG4gICAgaWQ6IDIsXG4gICAgbGluazogJy8nLFxuICAgIGljb246IDxZb3V0dWJlIC8+LFxuICAgIGNsYXNzTmFtZTogJ3lvdXR1YmUnLFxuICAgIHRpdGxlOiAneW91dHViZScsXG4gIH0sXG4gIHtcbiAgICBpZDogMyxcbiAgICBsaW5rOiAnLycsXG4gICAgaWNvbjogPEdpdGh1YiAvPixcbiAgICBjbGFzc05hbWU6ICdnaXRodWInLFxuICAgIHRpdGxlOiAnZ2l0aHViJyxcbiAgfSxcbiAge1xuICAgIGlkOiA0LFxuICAgIGxpbms6ICcvJyxcbiAgICBpY29uOiA8SW5zdGFncmFtIC8+LFxuICAgIGNsYXNzTmFtZTogJ2luc3RhZ3JhbScsXG4gICAgdGl0bGU6ICdpbnN0YWdyYW0nLFxuICB9LFxuICB7XG4gICAgaWQ6IDUsXG4gICAgbGluazogJy8nLFxuICAgIGljb246IDxMaW5rZWRpbiAvPixcbiAgICBjbGFzc05hbWU6ICdsaW5rZWRpbicsXG4gICAgdGl0bGU6ICdsaW5rZWRpbicsXG4gIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEcmF3ZXJNZW51KCkge1xuICBjb25zdCB7IGRpc3BhdGNoIH0gPSB1c2VDb250ZXh0KERyYXdlckNvbnRleHQpO1xuICBjb25zdCBoaWRlTWVudSA9ICgpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiAnT1BFTl9NRU5VJyxcbiAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgbWVudTogZmFsc2UsXG4gICAgICB9LFxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB3LWZ1bGwgaC1mdWxsXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtOTBweCBiZy1ncmF5LTEwMCBmbGV4IGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyIHJlbGF0aXZlIHB4LTMwcHggZmxleC1zaHJpbmstMFwiPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJmbGV4XCIgb25DbGljaz17aGlkZU1lbnV9PlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+RXRlcm5hbDwvc3Bhbj5cbiAgICAgICAgICAgICAgPExvZ28gd2lkdGg9XCIxMDBweFwiIGlkPVwibWVkc3ktbWVudS1sb2dvXCIgLz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktZW5kIG1sLWF1dG8gcGwtMzBweCBwci01MHB4IHRleHQtZ3JheS03MDAgZmxleC1zaHJpbmstMCBsZzpoaWRkZW5cIj5cbiAgICAgICAgICAgIHsvKiA8UGhvbmVJY29uIC8+ICovfVxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LWJhc2UgdGV4dC0xNHB4IG1sLTNcIj5cbiAgICAgICAgICAgICAgKzkxIDkzMTY0NjQxMTFcbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMzBweCBoLTMwcHggZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC1ncmF5LTUwMCBhYnNvbHV0ZSByaWdodC0yNXB4IGZvY3VzOm91dGxpbmUtbm9uZVwiXG4gICAgICAgICAgICBvbkNsaWNrPXtoaWRlTWVudX1cbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJjbG9zZVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPENsb3NlSWNvbiAvPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8U2Nyb2xsYmFyIGNsYXNzTmFtZT1cIm1lbnUtc2Nyb2xsYmFyIGZsZXgtZ3Jvd1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBweS02MHB4IHBiLTQwcHggbGc6cGItNjBweFwiPlxuICAgICAgICAgICAge21lbnVzLm1hcCgobWVudSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPEFjdGl2ZUxpbmtcbiAgICAgICAgICAgICAgICBocmVmPXttZW51LnBhdGhuYW1lfVxuICAgICAgICAgICAgICAgIGFjdGl2ZUNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgYWN0aXZlXCJcbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1lbnUtaXRlbSByZWxhdGl2ZSB0ZXh0LWdyYXktOTAwIHBsLTMwcHggcHItNCBtYi04IHRyYW5zaXRpb24gZHVyYXRpb24tMzAwIGVhc2UtaW4tb3V0IGxhc3Q6bWItMCBob3Zlcjp0ZXh0LWdyYXktOTAwXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hpZGVNZW51fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHttZW51LnRpdGxlfVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9BY3RpdmVMaW5rPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvU2Nyb2xsYmFyPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1zdGFydCBib3JkZXItdCBib3JkZXItZ3JheS0zMDAgYmctZ3JheS0xMDAgaC0xMiBweC0zMHB4IGZsZXgtc2hyaW5rLTAgbGc6aGlkZGVuXCI+XG4gICAgICAgICAge3NvY2lhbC5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBocmVmPXtpdGVtLmxpbmt9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YHNvY2lhbCAke2l0ZW0uY2xhc3NOYW1lfWB9XG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj57aXRlbS50aXRsZX08L3NwYW4+XG4gICAgICAgICAgICAgIHtpdGVtLmljb259XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IERyYXdlckNvbnRleHQgfSBmcm9tICdjb250ZXh0cy9kcmF3ZXIvZHJhd2VyLnByb3ZpZGVyJztcbmltcG9ydCBBcnJvd0xlZnQgZnJvbSAnYXNzZXRzL2ljb25zL2Fycm93LWxlZnQnO1xuaW1wb3J0IEVtcHR5Q2FydFNWRyBmcm9tICdhc3NldHMvaWNvbnMvZW1wdHktc3ZnJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTm9JdGVtKCkge1xuICBjb25zdCB7IGRpc3BhdGNoIH0gPSB1c2VDb250ZXh0KERyYXdlckNvbnRleHQpO1xuICBjb25zdCBoaWRlQ2FydCA9ICgpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiAnU0xJREVfQ0FSVCcsXG4gICAgICBwYXlsb2FkOiB7XG4gICAgICAgIG9wZW46IGZhbHNlLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGp1c3RpZnktY2VudGVyIGZsZXgtc2hyaW5rLTAgcmVsYXRpdmUgcHgtMzBweCBweS0yMHB4IG1iLTMwcHggYm9yZGVyLWIgYm9yZGVyLWdyYXktMjAwXCI+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWF1dG8gaC0xMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LWdyYXktNTAwIGFic29sdXRlIHRvcC1oYWxmIC1tdC0yMHB4IGxlZnQtMzBweCB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMCBmb2N1czpvdXRsaW5lLW5vbmUgaG92ZXI6dGV4dC1ncmF5LTkwMFwiXG4gICAgICAgICAgb25DbGljaz17aGlkZUNhcnR9XG4gICAgICAgICAgYXJpYS1sYWJlbD1cImNsb3NlXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxBcnJvd0xlZnQgLz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtMjFweCBtLTBcIj5ObyBpdGVtcyBpbiBZb3VyIEJhc2tldDwvaDI+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWF1dG9cIj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1ncmF5LTkwMCBweC0xMCBsZWFkaW5nLWxvb3NlXCI+XG4gICAgICAgICAgWW91IGhhdmVuJ3QgYWRkZWQgYW55dGhpbmcgaW4geW91ciBjYXJ0IHlldC4gU3RhcnQgYWRkaW5nIHRoZSBwcm9kdWN0c1xuICAgICAgICAgIHlvdSBsaWtlLlxuICAgICAgICA8L3A+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtdC00MHB4IG1kOm10LTk1cHhcIj5cbiAgICAgICAgICA8RW1wdHlDYXJ0U1ZHIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG4iLCJpbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRHJhd2VyQ29udGV4dCB9IGZyb20gJ2NvbnRleHRzL2RyYXdlci9kcmF3ZXIucHJvdmlkZXInO1xuaW1wb3J0IEFycm93TGVmdCBmcm9tICdhc3NldHMvaWNvbnMvYXJyb3ctbGVmdCc7XG5pbXBvcnQgU3VjY2Vzc0ljb24gZnJvbSAnYXNzZXRzL2ljb25zL3N1Y2Nlc3MtdGljayc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE9yZGVyU3VibWl0KCkge1xuICBjb25zdCB7IGRpc3BhdGNoIH0gPSB1c2VDb250ZXh0KERyYXdlckNvbnRleHQpO1xuICBjb25zdCBoaWRlQ2FydCA9ICgpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiAnU0xJREVfQ0FSVCcsXG4gICAgICBwYXlsb2FkOiB7XG4gICAgICAgIG9wZW46IGZhbHNlLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IHB4LTMwcHggcmVsYXRpdmVcIj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT1cInctYXV0byBoLTEwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtZ3JheS01MDAgYWJzb2x1dGUgdG9wLWhhbGYgbXQtMjBweCBsZWZ0LTMwcHggdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDAgZm9jdXM6b3V0bGluZS1ub25lIGhvdmVyOnRleHQtZ3JheS05MDBcIlxuICAgICAgICAgIG9uQ2xpY2s9e2hpZGVDYXJ0fVxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJjbG9zZVwiXG4gICAgICAgID5cbiAgICAgICAgICA8QXJyb3dMZWZ0IC8+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBwYi02MHB4IGZsZXgtYXV0byBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtZ3JlZW5cIj5cbiAgICAgICAgICA8U3VjY2Vzc0ljb24gc3R5bGU9e3sgd2lkdGg6IDYwIH19IC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgcHgtNDBweCBtZDpweC04MHB4IG10LTE1cHhcIj5cbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC0xOHB4IGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTkwMCBtYi00MHB4XCI+XG4gICAgICAgICAgICBPcmRlciBDb25maXJtYXRpb25cbiAgICAgICAgICA8L2gzPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtMTRweCBmb250LXNlbWlib2xkIHRleHQtZ3JheS05MDAgbWItMVwiPlxuICAgICAgICAgICAgVGhhbmsgeW91IGZvciB5b3VyIG9yZGVyLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LTEzcHggdGV4dC1ncmF5LTcwMFwiPlxuICAgICAgICAgICAgV2UndmUgcmVjZWl2ZWQgeW91ciBvcmRlciBhbmQgd2lsbCBjb250YWN0IHlvdSB2ZXJ5IHNvb24uXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU2Nyb2xsYmFyIH0gZnJvbSAnY29tcG9uZW50cy9zY3JvbGxiYXInO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdjb21wb25lbnRzL2J1dHRvbic7XG5pbXBvcnQgeyBDVVJSRU5DWSB9IGZyb20gJ2hlbHBlcnMvY29uc3RhbnRzJztcbmltcG9ydCB7IHVzZUNhcnQgfSBmcm9tICdjb250ZXh0cy9jYXJ0L2NhcnQucHJvdmlkZXInO1xuaW1wb3J0IHsgRHJhd2VyQ29udGV4dCB9IGZyb20gJ2NvbnRleHRzL2RyYXdlci9kcmF3ZXIucHJvdmlkZXInO1xuaW1wb3J0IEFycm93TGVmdCBmcm9tICdhc3NldHMvaWNvbnMvYXJyb3ctbGVmdCc7XG5pbXBvcnQgQ291bnRlciBmcm9tICdjb21wb25lbnRzL2NvdW50ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0RGV0YWlscygpIHtcbiAgY29uc3QgW3Zpc2liaWxpdHksIHNldFZpc2liaWxpdHldID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCB7IGFkZEl0ZW0sIGdldEl0ZW0sIHJlbW92ZUl0ZW0gfSA9IHVzZUNhcnQoKTtcbiAgY29uc3QgeyBzdGF0ZSwgZGlzcGF0Y2ggfSA9IHVzZUNvbnRleHQoRHJhd2VyQ29udGV4dCk7XG5cbiAgY29uc3QgY291bnQgPSBnZXRJdGVtKHN0YXRlLml0ZW0uaWQpPy5xdWFudGl0eTtcblxuICBjb25zdCB0b2dnbGVWaXNpYmlsaXR5ID0gKCkgPT4ge1xuICAgIHNldFZpc2liaWxpdHkoIXZpc2liaWxpdHkpO1xuICB9O1xuXG4gIGNvbnN0IGhpZGVEZXRhaWxzID0gKCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6ICdUT0dHTEVfUFJPRFVDVF9ERVRBSUwnLFxuICAgICAgcGF5bG9hZDoge1xuICAgICAgICBzaG93RGV0YWlsczogZmFsc2UsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogJ1NMSURFX0NBUlQnLFxuICAgICAgcGF5bG9hZDoge1xuICAgICAgICBvcGVuOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgYWRkVG9DYXJ0ID0gKCkgPT4ge1xuICAgIGFkZEl0ZW0oc3RhdGUuaXRlbSk7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogJ1RPR0dMRV9DQVJUX1ZJRVcnLFxuICAgICAgcGF5bG9hZDoge1xuICAgICAgICBzaG93Q2FydDogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgdy1mdWxsIGgtZnVsbFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBqdXN0aWZ5LWNlbnRlciByZWxhdGl2ZSBweC0zMHB4IHB5LTIwcHhcIj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT1cInctYXV0byBoLTEwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtZ3JheS01MDAgYWJzb2x1dGUgdG9wLWhhbGYgLW10LTIwcHggbGVmdC0zMHB4IHRyYW5zaXRpb24gZHVyYXRpb24tMzAwIGZvY3VzOm91dGxpbmUtbm9uZSBob3Zlcjp0ZXh0LWdyYXktOTAwXCJcbiAgICAgICAgICBvbkNsaWNrPXtoaWRlRGV0YWlsc31cbiAgICAgICAgICBhcmlhLWxhYmVsPVwiY2xvc2VcIlxuICAgICAgICA+XG4gICAgICAgICAgPEFycm93TGVmdCAvPlxuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtMjRweCBtLTBcIj5EZXRhaWxzPC9oMj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8U2Nyb2xsYmFyIGNsYXNzTmFtZT1cImRldGFpbHMtc2Nyb2xsYmFyIGZsZXgtZ3Jvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgcC0zMHB4IHB0LTBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHctZnVsbCBoLTM2MHB4IG92ZXJmbG93LWhpZGRlbiByb3VuZGVkIG1iLTMwcHhcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtzdGF0ZS5pdGVtLmltYWdlfSBhbHQ9e2Ake3N0YXRlLml0ZW0ubmFtZX0taW1nYH0gLz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1zdGFydCBtYi00XCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktOTAwIGZvbnQtc2VtaWJvbGQgbWItMlwiPlxuICAgICAgICAgICAgICB7Q1VSUkVOQ1l9XG4gICAgICAgICAgICAgIHtzdGF0ZS5pdGVtLnByaWNlfVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWItM1wiPntzdGF0ZS5pdGVtLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgbWItNVwiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCIgdGV4dC1ncmF5LTUwMCB0ZXh0LTExcHggY2FwaXRhbGl6ZVwiPlxuICAgICAgICAgICAgICAgIHtzdGF0ZS5pdGVtLnR5cGV9XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxleCBiZy1ncmF5LTUwMCB3LTNweCBoLTNweCByb3VuZGVkIG14LTNcIiAvPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCIgdGV4dC1ncmF5LTUwMCB0ZXh0LTExcHhcIj5cbiAgICAgICAgICAgICAgICB7c3RhdGUuaXRlbS5xdWFudGl0eX17JyAnfVxuICAgICAgICAgICAgICAgIHtzdGF0ZS5pdGVtLnF1YW50aXR5ID4gMSA/ICdwaWVjZXMnIDogJ3BpZWNlJ31cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICB7dmlzaWJpbGl0eSA9PT0gdHJ1ZSA/IChcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXktNVwiPntzdGF0ZS5pdGVtLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICcnXG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgICB7c3RhdGUuaXRlbS5kZXNjcmlwdGlvbiAmJiAoXG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtMTFweCB0ZXh0LWdyYXktODAwIG10LTIgZm9jdXM6b3V0bGluZS1ub25lXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVWaXNpYmlsaXR5fVxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJkZXRhaWxzXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt2aXNpYmlsaXR5ID09PSB0cnVlID8gJ0xlc3MgRGV0YWlscycgOiAnTW9yZSBEZXRhaWxzJ31cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHctZnVsbCBmbGV4LWNvbFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktc3RhcnQgZnVsbCBtdC0xMCBwci0zMHB4IGV2ZW46cHItMFwiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwIHRleHQtMTFweCBtYi0yXCI+RG9zYWdlcyBGb3JtPC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LW5vcm1hbCB0ZXh0LTEzcHggdGV4dC1ncmF5LTkwMCBjYXBpdGFsaXplXCI+XG4gICAgICAgICAgICAgICAge3N0YXRlLml0ZW0udHlwZX1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LXN0YXJ0IGZ1bGwgbXQtMTAgcHItMzBweCBldmVuOnByLTBcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMCB0ZXh0LTExcHggbWItMlwiPkRvc2FnZXM8L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbm9ybWFsIHRleHQtMTNweCB0ZXh0LWdyYXktOTAwIGNhcGl0YWxpemVcIj5cbiAgICAgICAgICAgICAgICB7c3RhdGUuaXRlbS5kb3NhZ2V9XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1zdGFydCBmdWxsIG10LTEwIHByLTMwcHggZXZlbjpwci0wXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDAgdGV4dC0xMXB4IG1iLTJcIj5cbiAgICAgICAgICAgICAgICBBY3RpdmUgU3Vic3RhbmNlXG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ub3JtYWwgdGV4dC0xM3B4IHRleHQtZ3JheS05MDAgY2FwaXRhbGl6ZVwiPlxuICAgICAgICAgICAgICAgIHtzdGF0ZS5pdGVtLnN1YnN0YW5jZX1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LXN0YXJ0IGZ1bGwgbXQtMTAgcHItMzBweCBldmVuOnByLTBcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMCB0ZXh0LTExcHggbWItMlwiPk1hbnVmYWN0dXJlcjwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ub3JtYWwgdGV4dC0xM3B4IHRleHQtZ3JheS05MDAgY2FwaXRhbGl6ZVwiPlxuICAgICAgICAgICAgICAgIHtzdGF0ZS5pdGVtLm1hbnVmYWN0dXJlcn1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9TY3JvbGxiYXI+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBwLTMwcHhcIj5cbiAgICAgICAge2NvdW50ID4gMCA/IChcbiAgICAgICAgICA8Q291bnRlclxuICAgICAgICAgICAgdmFsdWU9e2NvdW50fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtYXV0byB3LWZ1bGwgYmlnXCJcbiAgICAgICAgICAgIHNpemU9XCJiaWdcIlxuICAgICAgICAgICAgb25JbmNyZW1lbnQ9eygpID0+IHtcbiAgICAgICAgICAgICAgYWRkSXRlbShzdGF0ZS5pdGVtKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvbkRlY3JlbWVudD17KCkgPT4gcmVtb3ZlSXRlbShzdGF0ZS5pdGVtKX1cbiAgICAgICAgICAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwidy1mdWxsIGJpZ1wiIG9uQ2xpY2s9e2FkZFRvQ2FydH0+XG4gICAgICAgICAgICBBZGQgVG8gQ2FydFxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IENhcm91c2VsIGZyb20gJ2NvbXBvbmVudHMvY2Fyb3VzZWwvY2Fyb3VzZWwnO1xuaW1wb3J0IENvdXBvbkltZyBmcm9tICdhc3NldHMvaW1hZ2UvY291cG9uLWNhcmQucG5nJztcbmltcG9ydCBPcmRlckltZyBmcm9tICdhc3NldHMvaW1hZ2UvY3VzdG9tLW9yZGVyLnBuZyc7XG5pbXBvcnQgRGVsaXZlcnlJbWcgZnJvbSAnYXNzZXRzL2ltYWdlL2Zhc3QtZGVsaXZlcnkucG5nJztcbmltcG9ydCBGZW1hbGVDYXJlSW1nIGZyb20gJ2Fzc2V0cy9pbWFnZS9mZW1hbGUtY2FyZS5wbmcnO1xuXG5jb25zdCBkYXRhID0gW1xuICB7XG4gICAgaWQ6IDEsXG4gICAgaW1hZ2U6IERlbGl2ZXJ5SW1nLFxuICAgIGxpbms6ICcjJyxcbiAgICB0aXRsZTogJ0Zhc3QgZGVsaXZlcnknLFxuICB9LFxuICB7XG4gICAgaWQ6IDIsXG4gICAgaW1hZ2U6IENvdXBvbkltZyxcbiAgICBsaW5rOiAnIycsXG4gICAgdGl0bGU6ICdDb3Vwb24gc2F2aW5ncycsXG4gIH0sXG4gIHtcbiAgICBpZDogMyxcbiAgICBpbWFnZTogT3JkZXJJbWcsXG4gICAgbGluazogJyMnLFxuICAgIHRpdGxlOiAnQ3VzdG9tIG9yZGVyJyxcbiAgfSxcbiAge1xuICAgIGlkOiA0LFxuICAgIGltYWdlOiBGZW1hbGVDYXJlSW1nLFxuICAgIGxpbms6ICcjJyxcbiAgICB0aXRsZTogJ0ZlbWFsZSBjYXJlJyxcbiAgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlcm9CbG9jaygpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCByZWxhdGl2ZSBteS0zNXB4XCI+XG4gICAgICA8Q2Fyb3VzZWwgZGF0YT17ZGF0YX0gaXRlbUNsYXNzPVwicHgtNXB4XCIgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRmVhdHVyZUJsb2NrIGZyb20gJ2NvbXBvbmVudHMvZmVhdHVyZS1ibG9jayc7XG5cbmNvbnN0IGRhdGEgPSBbXG4gIHtcbiAgICBpZDogMSxcbiAgICBiYWNrZ3JvdW5kOiAnI2ZlZWVjOCcsXG4gICAgdGl0bGU6ICdZb3VyIE9yZGVyJyxcbiAgICBkZXNjcmlwdGlvbjogJ0FkZCBwcm9kdWN0cyB0byB5b3VyIGNhcnQsIGVudGVyIHlvdXIgZGV0YWlscyBhbmQgY29uZmlybS4nLFxuICB9LFxuICB7XG4gICAgaWQ6IDIsXG4gICAgYmFja2dyb3VuZDogJyNjZWVmZmUnLFxuICAgIHRpdGxlOiAnUGlja2luZyB5b3VyIG9yZGVyJyxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdZb3VyIG9yZGVyIGlzIGJlaW5nIHBpY2tlZCBhbmQgbm93IHdpbGwgYmUgZm9yd2FyZGVkIGZvciBwYWNrYWdpbmcuJyxcbiAgfSxcbiAge1xuICAgIGlkOiAzLFxuICAgIGJhY2tncm91bmQ6ICcjZDRmOGM0JyxcbiAgICB0aXRsZTogJ1BhY2tpbmcgWW91ciBPcmRlcicsXG4gICAgZGVzY3JpcHRpb246ICdXZSBhcmUgcGFja2luZyB5b3VyIG9yZGVyIGFuZCB3aWxsIGJlIG91dCBmb3IgZGVsaXZlcnkgc29vbi4nLFxuICB9LFxuICB7XG4gICAgaWQ6IDQsXG4gICAgYmFja2dyb3VuZDogJyNkOGRhZmUnLFxuICAgIHRpdGxlOiAnRGVsaXZlcicsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnWW91ciBvcmRlciBoYXMgYmVlbiBwcmVwYXJlZCBhbmQgb3V0IGZvciBkZWxpdmVyeS4gSXQgd2lsbCBiZSBkZWxpdmVyZWQgc29vbi4nLFxuICB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG93SXRXb3JrcygpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdy1mdWxsIHB4LTIwcHggbWQ6cC0zMHB4IHB5LTQwcHggcm91bmRlZCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIGJnLXdoaXRlIG1iLTEwXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZlYXR1cmUtYmxvY2std3JhcHBlciB3LWZ1bGwgZ3JpZCBncmlkLWNvbHMtMSBnYXAteC0zMHB4IGdhcC15LTQwcHggbWQ6Z3JpZC1jb2xzLTIgeGw6Z3JpZC1jb2xzLTQgeHhsOmdhcC0zMHB4XCI+XG4gICAgICAgIHtkYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICA8RmVhdHVyZUJsb2NrXG4gICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XG4gICAgICAgICAgICB0aXRsZT17aXRlbS50aXRsZX1cbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtpdGVtLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgY291bnRlckJnPXtpdGVtLmJhY2tncm91bmR9XG4gICAgICAgICAgICBjb3VudGVyPXtpbmRleCArIDF9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmZWF0dXJlLWJsb2NrXCJcbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwiaW1wb3J0IHtcbiAgRmFjZWJvb2ssXG4gIFR3aXR0ZXIsXG4gIFlvdXR1YmUsXG4gIEdpdGh1YixcbiAgSW5zdGFncmFtLFxuICBMaW5rZWRpbixcbn0gZnJvbSAnYXNzZXRzL2ljb25zL3NvY2lhbC1pY29ucyc7XG5cbmNvbnN0IGN1cnJlbnRZZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xuXG5jb25zdCBzb2NpYWwgPSBbXG4gIHtcbiAgICBpZDogMCxcbiAgICBsaW5rOiAnLycsXG4gICAgaWNvbjogPEZhY2Vib29rIC8+LFxuICAgIGNsYXNzTmFtZTogJ2ZhY2Vib29rJyxcbiAgICB0aXRsZTogJ2ZhY2Vib29rJyxcbiAgfSxcbiAge1xuICAgIGlkOiAxLFxuICAgIGxpbms6ICcvJyxcbiAgICBpY29uOiA8VHdpdHRlciAvPixcbiAgICBjbGFzc05hbWU6ICd0d2l0dGVyJyxcbiAgICB0aXRsZTogJ3R3aXR0ZXInLFxuICB9LFxuICB7XG4gICAgaWQ6IDIsXG4gICAgbGluazogJy8nLFxuICAgIGljb246IDxZb3V0dWJlIC8+LFxuICAgIGNsYXNzTmFtZTogJ3lvdXR1YmUnLFxuICAgIHRpdGxlOiAneW91dHViZScsXG4gIH0sXG4gIHtcbiAgICBpZDogMyxcbiAgICBsaW5rOiAnLycsXG4gICAgaWNvbjogPEdpdGh1YiAvPixcbiAgICBjbGFzc05hbWU6ICdnaXRodWInLFxuICAgIHRpdGxlOiAnZ2l0aHViJyxcbiAgfSxcbiAge1xuICAgIGlkOiA0LFxuICAgIGxpbms6ICcvJyxcbiAgICBpY29uOiA8SW5zdGFncmFtIC8+LFxuICAgIGNsYXNzTmFtZTogJ2luc3RhZ3JhbScsXG4gICAgdGl0bGU6ICdpbnN0YWdyYW0nLFxuICB9LFxuICB7XG4gICAgaWQ6IDUsXG4gICAgbGluazogJy8nLFxuICAgIGljb246IDxMaW5rZWRpbiAvPixcbiAgICBjbGFzc05hbWU6ICdsaW5rZWRpbicsXG4gICAgdGl0bGU6ICdsaW5rZWRpbicsXG4gIH0sXG5dO1xuXG5jb25zdCBGb290ZXIgPSAoKSA9PiAoXG4gIDxmb290ZXIgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLXdoaXRlIHNoYWRvdy1mb290ZXIgcHgtNCBweS0zMHB4IGxnOnB4LTM1cHggbGc6anVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTkwMFwiPlxuICAgICAgQ29weXJpZ2h0ICZjb3B5OyB7Y3VycmVudFllYXJ9eycgJ31cbiAgICAgIDxhXG4gICAgICAgIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMjAwIGVhc2UtaW4tb3V0IGhvdmVyOnRleHQtcmVkLTcwMFwiXG4gICAgICAgIGhyZWY9XCIjXCJcbiAgICAgID5cbiAgICAgICAgRXRlcm5hbFxuICAgICAgPC9hPnsnICd9XG4gICAgICBBbGwgcmlnaHRzIHJlc2VydmVkXG4gICAgPC9wPlxuXG4gICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtcy1jZW50ZXIgaGlkZGVuIGxnOmZsZXhcIj5cbiAgICAgIHtzb2NpYWwubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICA8YVxuICAgICAgICAgIGhyZWY9e2l0ZW0ubGlua31cbiAgICAgICAgICBjbGFzc05hbWU9e2Bzb2NpYWwgJHtpdGVtLmNsYXNzTmFtZX1gfVxuICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj57aXRlbS50aXRsZX08L3NwYW4+XG4gICAgICAgICAge2l0ZW0uaWNvbn1cbiAgICAgICAgPC9hPlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gIDwvZm9vdGVyPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xuIiwiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgUGhvbmVJY29uIGZyb20gJ2Fzc2V0cy9pY29ucy9waG9uZSc7XG5pbXBvcnQgQ2FydEljb24gZnJvbSAnYXNzZXRzL2ljb25zL2NhcnQtaWNvbic7XG5pbXBvcnQgTG9nbyBmcm9tICdhc3NldHMvaWNvbnMvbG9nbyc7XG5pbXBvcnQgU2VhcmNoIGZyb20gJ2NvbXBvbmVudHMvc2VhcmNoJztcbmltcG9ydCB7IERyYXdlckNvbnRleHQgfSBmcm9tICdjb250ZXh0cy9kcmF3ZXIvZHJhd2VyLnByb3ZpZGVyJztcbmltcG9ydCB7IHVzZUNhcnQgfSBmcm9tICdjb250ZXh0cy9jYXJ0L2NhcnQucHJvdmlkZXInO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IGRpc3BhdGNoIH06IGFueSA9IHVzZUNvbnRleHQoRHJhd2VyQ29udGV4dCk7XG4gIGNvbnN0IHsgaXRlbXNDb3VudCB9ID0gdXNlQ2FydCgpO1xuXG4gIGNvbnN0IHNob3dNZW51ID0gKCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6ICdPUEVOX01FTlUnLFxuICAgICAgcGF5bG9hZDoge1xuICAgICAgICBtZW51OiB0cnVlLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBzaG93Q2FydCA9ICgpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiAnU0xJREVfQ0FSVCcsXG4gICAgICBwYXlsb2FkOiB7XG4gICAgICAgIG9wZW46IHRydWUsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6ICdUT0dHTEVfQ0FSVF9WSUVXJyxcbiAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgc2hvd0NhcnQ6IHRydWUsXG4gICAgICB9LFxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGlzSG9tZSA9IHJvdXRlci5wYXRobmFtZSA9PT0gJy8nO1xuXG4gIHJldHVybiAoXG4gICAgPGhlYWRlciBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBzaGFkb3ctbW9iaWxlIHRleHQtZ3JheS03MDAgYm9keS1mb250IGZpeGVkIGJnLXdoaXRlIHctZnVsbCBoLTkwcHggei0yMCBsZzpzaGFkb3ctaGVhZGVyIHByLTIwcHggbWQ6cHItMzBweCBsZzpwci00MHB4XCI+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIGFyaWEtbGFiZWw9XCJNZW51XCJcbiAgICAgICAgY2xhc3NOYW1lPVwibWVudUJ0biBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB3LTUwcHggZmxleC1zaHJpbmstMCBoLWZ1bGwgb3V0bGluZS1ub25lIGZvY3VzOm91dGxpbmUtbm9uZSBsZzp3LTkwcHhcIlxuICAgICAgICBvbkNsaWNrPXtzaG93TWVudX1cbiAgICAgID5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWVudUljb25cIj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiYXJcIiAvPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJhclwiIC8+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmFyXCIgLz5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9idXR0b24+XG5cbiAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cImhpZGRlbiBteC1hdXRvIGxnOm1yLTEwIGxnOmZsZXhcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+RXRlcm5hbDwvc3Bhbj5cbiAgICAgICAgICA8TG9nbyB3aWR0aD1cIjExMHB4XCIgaWQ9XCJtZWRzeS1oZWFkZXItbG9nb1wiIC8+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvTGluaz5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWwtMTBweCBtci0yMHB4IGxnOm1yLTEwIGxnOm1sLWF1dG8gbGc6ZmxleCBsZzpqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICB7aXNIb21lICYmIDxTZWFyY2ggLz59XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gaXRlbXMtY2VudGVyIHRleHQtZ3JheS05MDAgbXItMTAgZmxleC1zaHJpbmstMCBsZzpmbGV4XCI+XG4gICAgICAgIDxQaG9uZUljb24gLz5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LWJhc2UgdGV4dC0xNHB4IG1sLTNcIj5cbiAgICAgICAgICArOTEgOTMxNjQ2NDExMVxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGJ1dHRvblxuICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBmbGV4LXNocmluay0wIGgtYXV0byByZWxhdGl2ZSBmb2N1czpvdXRsaW5lLW5vbmVcIlxuICAgICAgICBvbkNsaWNrPXtzaG93Q2FydH1cbiAgICAgICAgYXJpYS1sYWJlbD1cImNhcnQtYnV0dG9uXCJcbiAgICAgID5cbiAgICAgICAgPENhcnRJY29uIHdpZHRoPVwiMjBweFwiIGhlaWdodD1cIjIwcHhcIiAvPlxuICAgICAgICA8c3BhblxuICAgICAgICAgIGNsYXNzTmFtZT1cInctMThweCBoLTE4cHggZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYmctZ3JheS05MDAgdGV4dC13aGl0ZSBhYnNvbHV0ZSByb3VuZGVkLWZ1bGxcIlxuICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiAnMTBweCcsIHRvcDogJy0xMHB4JywgcmlnaHQ6ICctMTBweCcgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHtpdGVtc0NvdW50fVxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2hlYWRlcj5cbiAgKTtcbn1cbiIsImltcG9ydCBIZWFkZXIgZnJvbSAnLi9oZWFkZXInO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuL2Zvb3Rlcic7XG5pbXBvcnQgeyBEcmF3ZXIsIENhcnREcmF3ZXIgfSBmcm9tICdjb250YWluZXJzL2RyYXdlci9kcmF3ZXInO1xuXG5jb25zdCBMYXlvdXQgPSAocHJvcHMpID0+IChcbiAgPG1haW5cbiAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSBtaW4taC1zY3JlZW4gaC1zY3JlZW4gZmxleC1ncm93IG92ZXJmbG93LXktYXV0b1wiXG4gICAgc3R5bGU9e3tcbiAgICAgIG1pbkhlaWdodDogJy13ZWJraXQtZmlsbC1hdmFpbGFibGUnLFxuICAgICAgV2Via2l0T3ZlcmZsb3dTY3JvbGxpbmc6ICd0b3VjaCcsXG4gICAgICAuLi5wcm9wcy5zdHlsZSxcbiAgICB9fVxuICA+XG4gICAgPERyYXdlciAvPlxuICAgIDxIZWFkZXIgLz5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgdy1mdWxsIGgtZnVsbCBmbGV4LWdyb3dcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtOTBweCBweC0zIHBiLTUwcHggZmxleC1hdXRvIG1kOnB4LTM1cHhcIj5cbiAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgPC9kaXY+XG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC9kaXY+XG4gICAgPENhcnREcmF3ZXIgLz5cbiAgPC9tYWluPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSXRlbUNhcmQgZnJvbSAnY29tcG9uZW50cy9pdGVtLWNhcmQnO1xuaW1wb3J0IHsgRHJhd2VyQ29udGV4dCB9IGZyb20gJ2NvbnRleHRzL2RyYXdlci9kcmF3ZXIucHJvdmlkZXInO1xuaW1wb3J0IHsgdXNlU2VhcmNoIH0gZnJvbSAnY29udGV4dHMvc2VhcmNoL3VzZS1zZWFyY2gnO1xuaW1wb3J0IHsgdXNlU2VhcmNoYWJsZSB9IGZyb20gJ2hlbHBlcnMvdXNlLXNlYXJjaGFibGUnO1xuaW1wb3J0IE5vdEZvdW5kIGZyb20gJ2Fzc2V0cy9pY29ucy9ub3QtZm91bmQnO1xuXG5jb25zdCBQcm9kdWN0cyA9IFJlYWN0LmZvcndhcmRSZWYoXG4gICh7IGl0ZW1zIH06IGFueSwgcmVmOiBSZWFjdC5SZWZPYmplY3Q8SFRNTERpdkVsZW1lbnQ+KSA9PiB7XG4gICAgY29uc3QgeyBkaXNwYXRjaCB9ID0gdXNlQ29udGV4dChEcmF3ZXJDb250ZXh0KTtcblxuICAgIGNvbnN0IHsgc2VhcmNoVGVybSB9ID0gdXNlU2VhcmNoKCk7XG4gICAgY29uc3Qgc2VhcmNoYWJsZUl0ZW1zID0gdXNlU2VhcmNoYWJsZShpdGVtcywgc2VhcmNoVGVybSwgKGl0ZW0pID0+IFtcbiAgICAgIGl0ZW0ubmFtZSxcbiAgICBdKTtcbiAgICBjb25zdCBzaG93RGV0YWlscyA9IChpdGVtKSA9PiB7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6ICdTVE9SRV9QUk9EVUNUX0RFVEFJTCcsXG4gICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICBpdGVtOiBpdGVtLFxuICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogJ1NMSURFX0NBUlQnLFxuICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgb3BlbjogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuXG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6ICdUT0dHTEVfUFJPRFVDVF9ERVRBSUwnLFxuICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgc2hvd0RldGFpbHM6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHB5LTEwXCIgcmVmPXtyZWZ9PlxuICAgICAgICB7c2VhcmNoYWJsZUl0ZW1zLmxlbmd0aCA/IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgY29sLWdhcC0zIHJvdy1nYXAtNiBtZDpncmlkLWNvbHMtMyBtZDpjb2wtZ2FwLTQgbWQ6cm93LWdhcC04IGxnOmdyaWQtY29scy00IGxnOmNvbC1nYXAtNCBsZzpyb3ctZ2FwLTEwIHh4bDpncmlkLWNvbHMtNSB4eGw6Y29sLWdhcC00IHh4bDpyb3ctZ2FwLTEyIDJ4eGw6Z3JpZC1jb2xzLTcgMnh4bDpjb2wtZ2FwLTUgMnh4bDpyb3ctZ2FwLTEyXCI+XG4gICAgICAgICAgICB7c2VhcmNoYWJsZUl0ZW1zLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICA8SXRlbUNhcmRcbiAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XG4gICAgICAgICAgICAgICAgaXRlbT17aXRlbX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzaG93RGV0YWlscyhpdGVtKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMTBweCBtZDpwdC00MHB4IGxnOnB0LTIwcHggcGItNDBweFwiPlxuICAgICAgICAgICAgPE5vdEZvdW5kIHdpZHRoPVwiMTAwJVwiIC8+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC0yNHB4IHRleHQtZ3JheS05MDAgZm9udC1ib2xkIG10LTM1cHggbWItMCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICBObyBwcm9kdWN0IGZvdW5kIDooXG4gICAgICAgICAgICA8L2gzPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuKTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdHM7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlUmVkdWNlciwgdXNlQ29udGV4dCwgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHJlZHVjZXIsIGNhcnRJdGVtc1RvdGFsUHJpY2UgfSBmcm9tICcuL2NhcnQucmVkdWNlcic7XG5pbXBvcnQgeyB1c2VTdG9yYWdlIH0gZnJvbSAnaGVscGVycy91c2Utc3RvcmFnZSc7XG5jb25zdCBDYXJ0Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgYW55KTtcbmNvbnN0IElOSVRJQUxfU1RBVEUgPSB7XG4gIGlzT3BlbjogZmFsc2UsXG4gIGl0ZW1zOiBbXSxcbiAgY291cG9uOiBudWxsLFxufTtcblxuY29uc3QgdXNlQ2FydEFjdGlvbnMgPSAoaW5pdGlhbENhcnQgPSBJTklUSUFMX1NUQVRFKSA9PiB7XG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsQ2FydCk7XG5cbiAgY29uc3QgYWRkSXRlbUhhbmRsZXIgPSAoaXRlbSwgcXVhbnRpdHkgPSAxKSA9PiB7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiAnQUREX0lURU0nLCBwYXlsb2FkOiB7IC4uLml0ZW0sIHF1YW50aXR5IH0gfSk7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlSXRlbUhhbmRsZXIgPSAoaXRlbSwgcXVhbnRpdHkgPSAxKSA9PiB7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiAnUkVNT1ZFX0lURU0nLCBwYXlsb2FkOiB7IC4uLml0ZW0sIHF1YW50aXR5IH0gfSk7XG4gIH07XG5cbiAgY29uc3QgY2xlYXJJdGVtRnJvbUNhcnRIYW5kbGVyID0gKGl0ZW0pID0+IHtcbiAgICBkaXNwYXRjaCh7IHR5cGU6ICdDTEVBUl9JVEVNX0ZST01fQ0FSVCcsIHBheWxvYWQ6IGl0ZW0gfSk7XG4gIH07XG5cbiAgY29uc3QgY2xlYXJDYXJ0SGFuZGxlciA9ICgpID0+IHtcbiAgICBkaXNwYXRjaCh7IHR5cGU6ICdDTEVBUl9DQVJUJyB9KTtcbiAgfTtcbiAgY29uc3QgdG9nZ2xlQ2FydEhhbmRsZXIgPSAoKSA9PiB7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiAnVE9HR0xFX0NBUlQnIH0pO1xuICB9O1xuICBjb25zdCBjb3Vwb25IYW5kbGVyID0gKGNvdXBvbikgPT4ge1xuICAgIGRpc3BhdGNoKHsgdHlwZTogJ0FQUExZX0NPVVBPTicsIHBheWxvYWQ6IGNvdXBvbiB9KTtcbiAgfTtcbiAgY29uc3QgcmVtb3ZlQ291cG9uSGFuZGxlciA9ICgpID0+IHtcbiAgICBkaXNwYXRjaCh7IHR5cGU6ICdSRU1PVkVfQ09VUE9OJyB9KTtcbiAgfTtcbiAgY29uc3QgcmVoeWRyYXRlTG9jYWxTdGF0ZSA9IChwYXlsb2FkKSA9PiB7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiAnUkVIWURSQVRFJywgcGF5bG9hZCB9KTtcbiAgfTtcbiAgY29uc3QgaXNJbkNhcnRIYW5kbGVyID0gKGlkKSA9PiB7XG4gICAgcmV0dXJuIHN0YXRlLml0ZW1zPy5zb21lKChpdGVtKSA9PiBpdGVtLmlkID09PSBpZCk7XG4gIH07XG4gIGNvbnN0IGdldEl0ZW1IYW5kbGVyID0gKGlkKSA9PiB7XG4gICAgcmV0dXJuIHN0YXRlLml0ZW1zPy5maW5kKChpdGVtKSA9PiBpdGVtLmlkID09PSBpZCk7XG4gIH07XG4gIGNvbnN0IGdldENhcnRJdGVtc1ByaWNlID0gKCkgPT4gY2FydEl0ZW1zVG90YWxQcmljZShzdGF0ZS5pdGVtcykudG9GaXhlZCgyKTtcbiAgY29uc3QgZ2V0Q2FydEl0ZW1zVG90YWxQcmljZSA9ICgpID0+XG4gICAgY2FydEl0ZW1zVG90YWxQcmljZShzdGF0ZS5pdGVtcywgc3RhdGUuY291cG9uKS50b0ZpeGVkKDIpO1xuXG4gIGNvbnN0IGdldERpc2NvdW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IHRvdGFsID0gY2FydEl0ZW1zVG90YWxQcmljZShzdGF0ZS5pdGVtcyk7XG4gICAgY29uc3QgZGlzY291bnQgPSBzdGF0ZS5jb3Vwb25cbiAgICAgID8gKHRvdGFsICogTnVtYmVyKHN0YXRlLmNvdXBvbj8uZGlzY291bnRJblBlcmNlbnQpKSAvIDEwMFxuICAgICAgOiAwO1xuICAgIHJldHVybiBkaXNjb3VudC50b0ZpeGVkKDIpO1xuICB9O1xuICBjb25zdCBnZXRJdGVtc0NvdW50ID0gc3RhdGUuaXRlbXM/LnJlZHVjZShcbiAgICAoYWNjLCBpdGVtKSA9PiBhY2MgKyBpdGVtLnF1YW50aXR5LFxuICAgIDBcbiAgKTtcbiAgcmV0dXJuIHtcbiAgICBzdGF0ZSxcbiAgICBnZXRJdGVtc0NvdW50LFxuICAgIHJlaHlkcmF0ZUxvY2FsU3RhdGUsXG4gICAgYWRkSXRlbUhhbmRsZXIsXG4gICAgcmVtb3ZlSXRlbUhhbmRsZXIsXG4gICAgY2xlYXJJdGVtRnJvbUNhcnRIYW5kbGVyLFxuICAgIGNsZWFyQ2FydEhhbmRsZXIsXG4gICAgaXNJbkNhcnRIYW5kbGVyLFxuICAgIGdldEl0ZW1IYW5kbGVyLFxuICAgIHRvZ2dsZUNhcnRIYW5kbGVyLFxuICAgIGdldENhcnRJdGVtc1RvdGFsUHJpY2UsXG4gICAgZ2V0Q2FydEl0ZW1zUHJpY2UsXG4gICAgY291cG9uSGFuZGxlcixcbiAgICByZW1vdmVDb3Vwb25IYW5kbGVyLFxuICAgIGdldERpc2NvdW50LFxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IENhcnRQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3Qge1xuICAgIHN0YXRlLFxuICAgIHJlaHlkcmF0ZUxvY2FsU3RhdGUsXG4gICAgZ2V0SXRlbXNDb3VudCxcbiAgICBhZGRJdGVtSGFuZGxlcixcbiAgICByZW1vdmVJdGVtSGFuZGxlcixcbiAgICBjbGVhckl0ZW1Gcm9tQ2FydEhhbmRsZXIsXG4gICAgY2xlYXJDYXJ0SGFuZGxlcixcbiAgICBpc0luQ2FydEhhbmRsZXIsXG4gICAgZ2V0SXRlbUhhbmRsZXIsXG4gICAgdG9nZ2xlQ2FydEhhbmRsZXIsXG4gICAgZ2V0Q2FydEl0ZW1zVG90YWxQcmljZSxcbiAgICBjb3Vwb25IYW5kbGVyLFxuICAgIHJlbW92ZUNvdXBvbkhhbmRsZXIsXG4gICAgZ2V0Q2FydEl0ZW1zUHJpY2UsXG4gICAgZ2V0RGlzY291bnQsXG4gIH0gPSB1c2VDYXJ0QWN0aW9ucygpO1xuICBjb25zdCB7IHJlaHlkcmF0ZWQsIGVycm9yIH0gPSB1c2VTdG9yYWdlKHN0YXRlLCByZWh5ZHJhdGVMb2NhbFN0YXRlKTtcblxuICByZXR1cm4gKFxuICAgIDxDYXJ0Q29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3tcbiAgICAgICAgaXNPcGVuOiBzdGF0ZS5pc09wZW4sXG4gICAgICAgIGl0ZW1zOiBzdGF0ZS5pdGVtcyxcbiAgICAgICAgY291cG9uOiBzdGF0ZS5jb3Vwb24sXG4gICAgICAgIGNhcnRJdGVtc0NvdW50OiBzdGF0ZS5pdGVtcz8ubGVuZ3RoLFxuICAgICAgICBpdGVtc0NvdW50OiBnZXRJdGVtc0NvdW50LFxuICAgICAgICBhZGRJdGVtOiBhZGRJdGVtSGFuZGxlcixcbiAgICAgICAgcmVtb3ZlSXRlbTogcmVtb3ZlSXRlbUhhbmRsZXIsXG4gICAgICAgIHJlbW92ZUl0ZW1Gcm9tQ2FydDogY2xlYXJJdGVtRnJvbUNhcnRIYW5kbGVyLFxuICAgICAgICBjbGVhckNhcnQ6IGNsZWFyQ2FydEhhbmRsZXIsXG4gICAgICAgIGlzSW5DYXJ0OiBpc0luQ2FydEhhbmRsZXIsXG4gICAgICAgIGdldEl0ZW06IGdldEl0ZW1IYW5kbGVyLFxuICAgICAgICB0b2dnbGVDYXJ0OiB0b2dnbGVDYXJ0SGFuZGxlcixcbiAgICAgICAgY2FsY3VsYXRlUHJpY2U6IGdldENhcnRJdGVtc1RvdGFsUHJpY2UsXG4gICAgICAgIGNhbGN1bGF0ZVN1YlRvdGFsUHJpY2U6IGdldENhcnRJdGVtc1ByaWNlLFxuICAgICAgICBhcHBseUNvdXBvbjogY291cG9uSGFuZGxlcixcbiAgICAgICAgcmVtb3ZlQ291cG9uOiByZW1vdmVDb3Vwb25IYW5kbGVyLFxuICAgICAgICBjYWxjdWxhdGVEaXNjb3VudDogZ2V0RGlzY291bnQsXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0NhcnRDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZUNhcnQgPSAoKSA9PiB1c2VDb250ZXh0KENhcnRDb250ZXh0KTtcbiIsImV4cG9ydCBjb25zdCBjYXJ0SXRlbXNUb3RhbFByaWNlID0gKGl0ZW1zLCBjb3Vwb24gPSBudWxsKSA9PiB7XG4gIGxldCB0b3RhbCA9IGl0ZW1zLnJlZHVjZSgocHJpY2UsIHByb2R1Y3QpID0+IHtcbiAgICBpZiAocHJvZHVjdC5zYWxlUHJpY2UpIHtcbiAgICAgIHJldHVybiBwcmljZSArIHByb2R1Y3Quc2FsZVByaWNlICogcHJvZHVjdC5xdWFudGl0eTtcbiAgICB9XG4gICAgcmV0dXJuIHByaWNlICsgcHJvZHVjdC5wcmljZSAqIHByb2R1Y3QucXVhbnRpdHk7XG4gIH0sIDApO1xuICBjb25zdCBkaXNjb3VudCA9IGNvdXBvblxuICAgID8gKHRvdGFsICogTnVtYmVyKGNvdXBvbi5kaXNjb3VudEluUGVyY2VudCkpIC8gMTAwXG4gICAgOiAwO1xuXG4gIHJldHVybiB0b3RhbCAtIGRpc2NvdW50O1xufTtcbi8vIGNhcnRJdGVtcywgY2FydEl0ZW1Ub0FkZFxuY29uc3QgYWRkSXRlbVRvQ2FydCA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIGNvbnN0IGV4aXN0aW5nQ2FydEl0ZW1JbmRleCA9IHN0YXRlLml0ZW1zLmZpbmRJbmRleChcbiAgICAoaXRlbSkgPT4gaXRlbS5pZCA9PT0gYWN0aW9uLnBheWxvYWQuaWRcbiAgKTtcblxuICBpZiAoZXhpc3RpbmdDYXJ0SXRlbUluZGV4ID4gLTEpIHtcbiAgICBjb25zdCBuZXdTdGF0ZSA9IFsuLi5zdGF0ZS5pdGVtc107XG4gICAgbmV3U3RhdGVbZXhpc3RpbmdDYXJ0SXRlbUluZGV4XS5xdWFudGl0eSArPSBhY3Rpb24ucGF5bG9hZC5xdWFudGl0eTtcbiAgICByZXR1cm4gbmV3U3RhdGU7XG4gIH1cbiAgcmV0dXJuIFsuLi5zdGF0ZS5pdGVtcywgYWN0aW9uLnBheWxvYWRdO1xufTtcblxuLy8gY2FydEl0ZW1zLCBjYXJ0SXRlbVRvUmVtb3ZlXG5jb25zdCByZW1vdmVJdGVtRnJvbUNhcnQgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICByZXR1cm4gc3RhdGUuaXRlbXMucmVkdWNlKChhY2MsIGl0ZW0pID0+IHtcbiAgICBpZiAoaXRlbS5pZCA9PT0gYWN0aW9uLnBheWxvYWQuaWQpIHtcbiAgICAgIGNvbnN0IG5ld1F1YW50aXR5ID0gaXRlbS5xdWFudGl0eSAtIGFjdGlvbi5wYXlsb2FkLnF1YW50aXR5O1xuXG4gICAgICByZXR1cm4gbmV3UXVhbnRpdHkgPiAwXG4gICAgICAgID8gWy4uLmFjYywgeyAuLi5pdGVtLCBxdWFudGl0eTogbmV3UXVhbnRpdHkgfV1cbiAgICAgICAgOiBbLi4uYWNjXTtcbiAgICB9XG4gICAgcmV0dXJuIFsuLi5hY2MsIGl0ZW1dO1xuICB9LCBbXSk7XG59O1xuXG5jb25zdCBjbGVhckl0ZW1Gcm9tQ2FydCA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHJldHVybiBzdGF0ZS5pdGVtcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaWQgIT09IGFjdGlvbi5wYXlsb2FkLmlkKTtcbn07XG5cbmV4cG9ydCBjb25zdCByZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ1JFSFlEUkFURSc6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgLi4uYWN0aW9uLnBheWxvYWQgfTtcbiAgICBjYXNlICdUT0dHTEVfQ0FSVCc6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgaXNPcGVuOiAhc3RhdGUuaXNPcGVuIH07XG4gICAgY2FzZSAnQUREX0lURU0nOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGl0ZW1zOiBhZGRJdGVtVG9DYXJ0KHN0YXRlLCBhY3Rpb24pIH07XG4gICAgY2FzZSAnUkVNT1ZFX0lURU0nOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGl0ZW1zOiByZW1vdmVJdGVtRnJvbUNhcnQoc3RhdGUsIGFjdGlvbikgfTtcbiAgICBjYXNlICdDTEVBUl9JVEVNX0ZST01fQ0FSVCc6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgaXRlbXM6IGNsZWFySXRlbUZyb21DYXJ0KHN0YXRlLCBhY3Rpb24pIH07XG4gICAgY2FzZSAnQ0xFQVJfQ0FSVCc6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgaXRlbXM6IFtdIH07XG4gICAgY2FzZSAnQVBQTFlfQ09VUE9OJzpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBjb3Vwb246IGFjdGlvbi5wYXlsb2FkIH07XG4gICAgY2FzZSAnUkVNT1ZFX0NPVVBPTic6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgY291cG9uOiBudWxsIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBhY3Rpb246ICR7YWN0aW9uLnR5cGV9YCk7XG4gIH1cbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlUmVkdWNlciwgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBjb25zdCBEcmF3ZXJDb250ZXh0ID0gY3JlYXRlQ29udGV4dDx7XG4gIHN0YXRlPzogYW55O1xuICBkaXNwYXRjaD86IFJlYWN0LkRpc3BhdGNoPGFueT47XG59Pih7fSk7XG5cbmNvbnN0IElOSVRJQUxfU1RBVEUgPSB7XG4gIHNob3dEZXRhaWxzOiBmYWxzZSxcbiAgc2hvd0NhcnQ6IGZhbHNlLFxuICBzaG93Q2hlY2tvdXQ6IGZhbHNlLFxuICBtZW51OiBmYWxzZSxcbiAgb3BlbjogZmFsc2UsXG4gIGl0ZW06IFtdLFxufTtcblxudHlwZSBBY3Rpb25UeXBlID1cbiAgfCB7IHR5cGU6ICdTVE9SRV9QUk9EVUNUX0RFVEFJTCc7IHBheWxvYWQ6IGFueSB9XG4gIHwgeyB0eXBlOiAnVE9HR0xFX1BST0RVQ1RfREVUQUlMJzsgcGF5bG9hZDogYW55IH1cbiAgfCB7IHR5cGU6ICdUT0dHTEVfQ0FSVF9WSUVXJzsgcGF5bG9hZDogYW55IH1cbiAgfCB7IHR5cGU6ICdUT0dHTEVfQ0hFQ0tPVVRfVklFVyc7IHBheWxvYWQ6IGFueSB9XG4gIHwgeyB0eXBlOiAnU0xJREVfQ0FSVCc7IHBheWxvYWQ6IGFueSB9XG4gIHwgeyB0eXBlOiAnT1BFTl9NRU5VJzsgcGF5bG9hZDogYW55IH07XG5cbnR5cGUgU3RhdGVUeXBlID0gdHlwZW9mIElOSVRJQUxfU1RBVEU7XG5cbmZ1bmN0aW9uIHJlZHVjZXIoc3RhdGU6IFN0YXRlVHlwZSwgYWN0aW9uOiBBY3Rpb25UeXBlKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdTVE9SRV9QUk9EVUNUX0RFVEFJTCc6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaXRlbTogYWN0aW9uLnBheWxvYWQuaXRlbSxcbiAgICAgIH07XG4gICAgY2FzZSAnVE9HR0xFX1BST0RVQ1RfREVUQUlMJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBzaG93RGV0YWlsczogYWN0aW9uLnBheWxvYWQuc2hvd0RldGFpbHMsXG4gICAgICAgIHNob3dDYXJ0OiBmYWxzZSxcbiAgICAgICAgc2hvd0NoZWNrb3V0OiBmYWxzZSxcbiAgICAgIH07XG4gICAgY2FzZSAnVE9HR0xFX0NBUlRfVklFVyc6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgc2hvd0RldGFpbHM6IGZhbHNlLFxuICAgICAgICBzaG93Q2FydDogYWN0aW9uLnBheWxvYWQuc2hvd0NhcnQsXG4gICAgICAgIHNob3dDaGVja291dDogZmFsc2UsXG4gICAgICB9O1xuICAgIGNhc2UgJ1RPR0dMRV9DSEVDS09VVF9WSUVXJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBzaG93RGV0YWlsczogZmFsc2UsXG4gICAgICAgIHNob3dDYXJ0OiBmYWxzZSxcbiAgICAgICAgc2hvd0NoZWNrb3V0OiBhY3Rpb24ucGF5bG9hZC5zaG93Q2hlY2tvdXQsXG4gICAgICB9O1xuICAgIGNhc2UgJ1NMSURFX0NBUlQnOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIG9wZW46IGFjdGlvbi5wYXlsb2FkLm9wZW4sXG4gICAgICB9O1xuICAgIGNhc2UgJ09QRU5fTUVOVSc6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbWVudTogYWN0aW9uLnBheWxvYWQubWVudSxcbiAgICAgIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgRHJhd2VyUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCBJTklUSUFMX1NUQVRFKTtcbiAgcmV0dXJuIChcbiAgICA8RHJhd2VyQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBzdGF0ZSwgZGlzcGF0Y2ggfX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9EcmF3ZXJDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcbiIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBzZWFyY2hDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSBhcyBhbnkpO1xuXG5leHBvcnQgY29uc3QgU2VhcmNoUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IFtzZWFyY2hUZXJtLCBzZXRTZWFyY2hUZXJtXSA9IHVzZVN0YXRlKCcnKTtcbiAgcmV0dXJuIChcbiAgICA8c2VhcmNoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBzZWFyY2hUZXJtLCBzZXRTZWFyY2hUZXJtIH19PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvc2VhcmNoQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VTZWFyY2ggPSAoKSA9PiB1c2VDb250ZXh0KHNlYXJjaENvbnRleHQpO1xuIiwiLy8gQ09OU1RBTlRTXG5leHBvcnQgY29uc3QgQ1VSUkVOQ1kgPSAn4oK5JztcbiIsImV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQcm9kdWN0cygpIHtcbiAgaWYgKFxuICAgICEoXG4gICAgICBwcm9jZXNzLmVudi5HT09HTEVfU0VSVklDRV9BQ0NPVU5UX0NMSUVOVF9FTUFJTCAmJlxuICAgICAgcHJvY2Vzcy5lbnYuR09PR0xFX1NFUlZJQ0VfQUNDT1VOVF9QUklWQVRFX0tFWSAmJlxuICAgICAgcHJvY2Vzcy5lbnYuR09PR0xFX1NQUkVBRFNIRUVUX0lEX1BST0RVQ1RcbiAgICApXG4gICkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICdHT09HTEUgY3JlZGVudGlhbHMgbXVzdCBiZSBzZXQgYXMgZW52IHZhcnMgYEdPT0dMRV9TRVJWSUNFX0FDQ09VTlRfQ0xJRU5UX0VNQUlMYCAsYEdPT0dMRV9TRVJWSUNFX0FDQ09VTlRfUFJJVkFURV9LRVlgIGFuZCBgR09PR0xFX1NQUkVBRFNIRUVUX0lEX1BST0RVQ1RgLidcbiAgICApO1xuICB9XG4gIGNvbnN0IHsgR29vZ2xlU3ByZWFkc2hlZXQgfSA9IHJlcXVpcmUoJ2dvb2dsZS1zcHJlYWRzaGVldCcpO1xuICBjb25zdCBkb2MgPSBuZXcgR29vZ2xlU3ByZWFkc2hlZXQocHJvY2Vzcy5lbnYuR09PR0xFX1NQUkVBRFNIRUVUX0lEX1BST0RVQ1QpO1xuICBhd2FpdCBkb2MudXNlU2VydmljZUFjY291bnRBdXRoKHtcbiAgICBjbGllbnRfZW1haWw6IHByb2Nlc3MuZW52LkdPT0dMRV9TRVJWSUNFX0FDQ09VTlRfQ0xJRU5UX0VNQUlMLFxuICAgIHByaXZhdGVfa2V5OiBwcm9jZXNzLmVudi5HT09HTEVfU0VSVklDRV9BQ0NPVU5UX1BSSVZBVEVfS0VZLnJlcGxhY2UoXG4gICAgICAvXFxcXG4vZ20sXG4gICAgICAnXFxuJ1xuICAgICksXG4gIH0pO1xuICBhd2FpdCBkb2MubG9hZEluZm8oKTsgLy8gbG9hZHMgZG9jdW1lbnQgcHJvcGVydGllcyBhbmQgd29ya3NoZWV0c1xuICBjb25zdCBzaGVldCA9IGRvYy5zaGVldHNCeUluZGV4WzBdOyAvLyBvciB1c2UgZG9jLnNoZWV0c0J5SWRbaWRdXG4gIC8vIHJlYWQgcm93c1xuICBjb25zdCByb3dzID0gYXdhaXQgc2hlZXQuZ2V0Um93cygpOyAvLyBjYW4gcGFzcyBpbiB7IGxpbWl0LCBvZmZzZXQgfVxuICBjb25zdCBwcm9kdWN0cyA9IHJvd3M/Lm1hcChcbiAgICAoe1xuICAgICAgaWQsXG4gICAgICBuYW1lLFxuICAgICAgaW1hZ2UsXG4gICAgICBkZXNjcmlwdGlvbixcbiAgICAgIHByaWNlLFxuICAgICAgbWFudWZhY3R1cmVyLFxuICAgICAgdHlwZSxcbiAgICAgIHF1YW50aXR5LFxuICAgICAgZG9zYWdlLFxuICAgICAgc3Vic3RhbmNlLFxuICAgIH0pID0+ICh7XG4gICAgICBpZCxcbiAgICAgIG5hbWUsXG4gICAgICBpbWFnZSxcbiAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgcHJpY2UsXG4gICAgICBtYW51ZmFjdHVyZXIsXG4gICAgICB0eXBlLFxuICAgICAgcXVhbnRpdHksXG4gICAgICBkb3NhZ2UsXG4gICAgICBzdWJzdGFuY2UsXG4gICAgfSlcbiAgKTtcbiAgcmV0dXJuIHByb2R1Y3RzO1xufVxuIiwiaW1wb3J0IHsgdXNlUmVmLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuZXhwb3J0IGNvbnN0IGlzQ2xpZW50ID0gISEoXG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gIHdpbmRvdy5kb2N1bWVudCAmJlxuICB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudFxuKTtcbi8vIGV4cG9ydCBlbnVtIFNjcm9sbERpcmVjdGlvbnMge1xuLy8gICBIb3Jpem9udGFsLFxuLy8gICBWZXJ0aWNhbFxuLy8gfVxuXG5mdW5jdGlvbiBzY3JvbGxUb1BlcmNlbnQoXG4gIGVsLFxuICB7IGNvbnRhaW5lciwgcGVyY2VudE9mRWxlbWVudCwgb2Zmc2V0UFgsIGRpcmVjdGlvbiwgcGVyY2VudE9mQ29udGFpbmVyIH1cbikge1xuICBjb25zdCByZWN0ID0gZWwuY3VycmVudC5nZXRDbGllbnRSZWN0cygpWzBdO1xuICBjb25zdCBpc1ZlcnRpY2FsID0gZGlyZWN0aW9uID09PSAndmVydGljYWwnO1xuICBjb25zdCByZWZTaXplID0gaXNWZXJ0aWNhbCA/IHJlY3QuaGVpZ2h0IDogcmVjdC53aWR0aDtcbiAgY29uc3QgZWxlbVNjcm9sbCA9IGlzVmVydGljYWwgPyByZWN0LnkgOiByZWN0Lng7XG5cbiAgY29uc3Qgc2Nyb2xsU2l6ZSA9XG4gICAgY29udGFpbmVyID09PSB3aW5kb3dcbiAgICAgID8gaXNWZXJ0aWNhbFxuICAgICAgICA/IGNvbnRhaW5lci5pbm5lckhlaWdodFxuICAgICAgICA6IGNvbnRhaW5lci5pbm5lcldpZHRoXG4gICAgICA6IGlzVmVydGljYWxcbiAgICAgID8gY29udGFpbmVyLnNjcm9sbEhlaWdodFxuICAgICAgOiBjb250YWluZXIuc2Nyb2xsV2lkdGg7XG5cbiAgbGV0IGFkZE9mZnNldCA9IChyZWZTaXplICogcGVyY2VudE9mRWxlbWVudCkgLyAxMDA7XG4gIGlmIChvZmZzZXRQWCkge1xuICAgIGFkZE9mZnNldCArPSBvZmZzZXRQWDtcbiAgfVxuXG4gIGNvbnN0IGNvbnRhaW5lclNjcm9sbCA9IGlzVmVydGljYWwgPyBjb250YWluZXIuc2Nyb2xsWSA6IGNvbnRhaW5lci5zY3JvbGxYO1xuICBjb25zdCBuZXdTY3JvbGwgPVxuICAgIGNvbnRhaW5lclNjcm9sbCArXG4gICAgZWxlbVNjcm9sbCArXG4gICAgKChzY3JvbGxTaXplICogcGVyY2VudE9mQ29udGFpbmVyKSAvIDEwMCArIGFkZE9mZnNldCk7XG5cbiAgY29uc3Qgc2Nyb2xsT2JqID0gaXNWZXJ0aWNhbCA/IHsgdG9wOiBuZXdTY3JvbGwgfSA6IHsgbGVmdDogbmV3U2Nyb2xsIH07XG5cbiAgd2luZG93LnNjcm9sbFRvKHtcbiAgICAuLi5zY3JvbGxPYmosXG4gICAgYmVoYXZpb3I6ICdzbW9vdGgnLFxuICB9KTtcbn1cblxuLy8gaW50ZXJmYWNlIFNjcm9sbE9wdHMge1xuLy8gICAvKipcbi8vICAgICogT2Zmc2V0IGluIHBlcmNlbnRhZ2Ugb2YgdGhlIGVsZW1lbnQncyBjbGllbnQgZGltZW50aW9uc1xuLy8gICAgKiBkZWZhdWx0IGlzIHRvIHNjcm9sbCB0byBjZW50ZXIgdGhlIGVsZW1lbnQgaW4gdGhlIHNjcm9sbGluZyBwYW5lLCBoZW5jZSA1MCVcbi8vICAgICovXG4vLyAgIHBlcmNlbnRPZkVsZW1lbnQ/OiBudW1iZXI7XG4vLyAgIC8qKlxuLy8gICAgKiBUaGUgb2Zmc2V0IGluIHBpeGVscywgd2hjaCB3aWxsIGJlIGFkZGVkIHRvIHRoZSBwZXJjZW50YWdlIG9mIHRoZSBlbGVtZW50XG4vLyAgICAqL1xuLy8gICBvZmZzZXRQWD86IG51bWJlcjtcbi8vICAgLyoqXG4vLyAgICAqIFdoZXRoZXIgdG8gcnVuIHRoZSBzY3JvbGwgb24gbW91bnRpbmdcbi8vICAgICovXG4vLyAgIG9uTW91bnQ/OiBib29sZWFuO1xuLy8gICAvKipcbi8vICAgICogVGhlIHNjcm9sbGFibGUgY29udGFpbmVyIGluIHdoaWNoIHRoZSByZWYgZWxlbWVudCBpcyBzY3JvbGxpbmdcbi8vICAgICovXG4vLyAgIGNvbnRhaW5lcj86IGFueTtcbi8vICAgLy8gZGVmYXVsdCBpcyB0aGUgY2VudGVyIG9mIHRoZSBzY3JvbGxpbmcgY29udGFpbmVyLCBoZW5jZSA1MCVcbi8vICAgcGVyY2VudE9mQ29udGFpbmVyPzogbnVtYmVyO1xuLy8gICBkaXJlY3Rpb24/OiBTY3JvbGxEaXJlY3Rpb25zO1xuLy8gfVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlUmVmU2Nyb2xsKHtcbiAgcGVyY2VudE9mRWxlbWVudCA9IDUwLFxuICBvZmZzZXRQWCA9IDAsXG4gIG9uTW91bnQgPSBmYWxzZSxcbiAgY29udGFpbmVyID0gaXNDbGllbnQgPyB3aW5kb3cgOiBudWxsLFxuICBwZXJjZW50T2ZDb250YWluZXIgPSA1MCxcbiAgZGlyZWN0aW9uID0gJ3ZlcnRpY2FsJyxcbn0pIHtcbiAgY29uc3QgZWxSZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgY29uc3Qgc2Nyb2xsID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmIChlbFJlZi5jdXJyZW50KSB7XG4gICAgICBzY3JvbGxUb1BlcmNlbnQoZWxSZWYsIHtcbiAgICAgICAgcGVyY2VudE9mRWxlbWVudCxcbiAgICAgICAgb2Zmc2V0UFgsXG4gICAgICAgIGNvbnRhaW5lcixcbiAgICAgICAgcGVyY2VudE9mQ29udGFpbmVyLFxuICAgICAgICBkaXJlY3Rpb24sXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIFtlbFJlZi5jdXJyZW50XSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAob25Nb3VudCkge1xuICAgICAgc2Nyb2xsKCk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgcmV0dXJuIHsgZWxSZWYsIHNjcm9sbCB9O1xufVxuXG4vLyBmdW5jdGlvbiBNeUNvbXBvbmVudCgpIHtcbi8vICAgLy8gdXNpbmcgdGhlIGhvb2sgd2l0aG91dCBhcmd1bWVudHMgd2lsbCBzY3JvbGwgdGhlIGVsZW1lbnQgdG8gdGhlIGNlbnRlciBvZiB0aGVcbi8vICAgLy8gd2luZG93J3Mgdmlld3BvcnRcbi8vICAgLy8gYWxpYXMgZWxSZWYgdG8gbXlEaXYgZm9yIGVhc2llciB1c2FnZSBpZiBoYXZpbmcgbXVsdGlwbGUgZWxlbWVudHNcbi8vICAgLy8gaW4gdGhlIHNhbWUgY29tcG9uZW50XG5cbi8vICAgY29uc3QgeyBlbFJlZjogbXlEaXYsIHNjcm9sbCB9ID0gdXNlUmVmU2Nyb2xsZXIoKTtcblxuLy8gICByZXR1cm4gKFxuLy8gICAgIDxkaXY+XG4vLyAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Njcm9sbH0+U2Nyb2xsPC9idXR0b24+XG5cbi8vICAgICAgIDxkaXYgcmVmPXtteURpdn0+XG4vLyAgICAgICAgIGBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBWZXN0aWJ1bHVtIGVmZmljaXR1ciwgbWFzc2Egdml0YWUgY29uc2VjdGV0dXIgZWdlc3RhcywganVzdG8gbWFnbmFcbi8vICAgICAgICAgZmFjaWxpc2lzIGFyY3UsIG5vbiBhY2N1bXNhbiBsYWN1cyBpcHN1bSBzaXQgYW1ldCBuaXNsLmBcbi8vICAgICAgIDwvZGl2PlxuLy8gICAgIDwvZGl2PlxuLy8gICApO1xuLy8gfVxuIiwiaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBjb25zdCB1c2VTZWFyY2hhYmxlID0gKGRhdGEsIHNlYXJjaFRleHQsIHNlYXJjaFByb3BzKSA9PiB7XG4gIHJldHVybiB1c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoc2VhcmNoVGV4dCwgJ2knKTtcbiAgICByZXR1cm4gZGF0YS5maWx0ZXIoKGl0ZW0pID0+XG4gICAgICBzZWFyY2hQcm9wcyhpdGVtKS5zb21lKChzcCkgPT4gcmVnZXgudGVzdChzcCkpXG4gICAgKTtcbiAgfSwgW2RhdGEsIHNlYXJjaFRleHQsIHNlYXJjaFByb3BzXSk7XG59O1xuLy8gY29uc3QgdXNlU2VhcmNoYWJsZSA9IDxUPihkYXRhOiBUW10sIHNlYXJjaFRleHQ6IHN0cmluZywgc2VhcmNoUHJvcHM6IChpdGVtOiBUKSA9PiBzdHJpbmdbXSkgPT4ge1xuLy8gICByZXR1cm4gdXNlTWVtbygoKSA9PiB7XG4vLyAgICAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKHNlYXJjaFRleHQsIFwiaVwiKTtcbi8vICAgICByZXR1cm4gZGF0YS5maWx0ZXIoKGl0ZW0pID0+XG4vLyAgICAgICBzZWFyY2hQcm9wcyhpdGVtKS5zb21lKChzcCkgPT4gcmVnZXgudGVzdChzcCkpXG4vLyAgICAgKTtcbi8vICAgfSwgW2RhdGEsIHNlYXJjaFRleHQsIHNlYXJjaFByb3BzXSk7XG4vLyB9O1xuLy8gZXhwb3J0IGRlZmF1bHQgdXNlU2VhcmNoYWJsZTtcbiIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgbG9jYWxGb3JhZ2UgZnJvbSAnbG9jYWxmb3JhZ2UnO1xuY29uc3QgaXNPYmplY3RMaWtlZCA9ICh2YWx1ZSkgPT5cbiAgdmFsdWUuY29uc3RydWN0b3IubmFtZSA9PT0gJ0FycmF5JyB8fCB2YWx1ZS5jb25zdHJ1Y3Rvci5uYW1lID09PSAnT2JqZWN0JztcblxuY29uc3QgcmVoeWRyYXRlID0gKHZhbHVlOiBhbnksIGRlZmF1bHRWYWx1ZT86IGFueSkgPT4ge1xuICBpZiAoIXZhbHVlKSByZXR1cm4gZGVmYXVsdFZhbHVlO1xuICAvLyBpZiAodmFsdWUgPT09ICdmYWxzZScpIHN0ciA9IGZhbHNlO1xuICAvLyBpZiAodmFsdWUgPT09ICd0cnVlJykgc3RyID0gdHJ1ZTtcbiAgaWYgKGlzT2JqZWN0TGlrZWQodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIHRyeSB7XG4gICAgY29uc3QgcGFyc2UgPSBKU09OLnBhcnNlKHZhbHVlKTtcbiAgICByZXR1cm4gcGFyc2U7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XG4gIH1cbn07XG5cbmNvbnN0IGh5ZHJhdGUgPSAodmFsdWUpID0+IHtcbiAgaWYgKCFpc09iamVjdExpa2VkKHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xufTtcbmNvbnN0IGNyZWF0ZU1pZ3JhdGlvbiA9IChvcHRzLCBkYXRhKSA9PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc3Qga2V5ID0gYCR7b3B0cy5rZXl9LXZlcnNpb25gO1xuICAgIGxvY2FsRm9yYWdlLmdldEl0ZW0oa2V5LCAoZXJyLCB2ZXJzaW9uKSA9PiB7XG4gICAgICBpZiAodmVyc2lvbiAhPT0gb3B0cy52ZXJzaW9uKSB7XG4gICAgICAgIGRhdGEgPSBvcHRzLm1pZ3JhdGUoZGF0YSk7XG4gICAgICAgIGxvY2FsRm9yYWdlLnNldEl0ZW0ob3B0cy5rZXksIHJlaHlkcmF0ZShkYXRhKSwgKGVycikgPT4ge1xuICAgICAgICAgIGlmIChlcnIpIHJldHVybiByZWplY3QoZXJyKTtcbiAgICAgICAgICBsb2NhbEZvcmFnZS5zZXRJdGVtKGtleSwgb3B0cy52ZXJzaW9uLCAoZXJyKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSByZXR1cm4gcmVqZWN0KGVycik7XG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShkYXRhKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXNvbHZlKGRhdGEpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn07XG5cbmNvbnN0IGNvbmZpZyA9IHtcbiAga2V5OiAnQHNlc3Npb24tbWVkc3knLFxuICB2ZXJzaW9uOiAxLFxuICBtaWdyYXRlOiAoc3RhdGUpID0+IHtcbiAgICByZXR1cm4geyAuLi5zdGF0ZSB9O1xuICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IHVzZVN0b3JhZ2UgPSAoc3RhdGUsIHNldFN0YXRlKSA9PiB7XG4gIGNvbnN0IFtyZWh5ZHJhdGVkLCBzZXRSZWh5ZHJhdGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICBhd2FpdCBsb2NhbEZvcmFnZS5nZXRJdGVtKGNvbmZpZy5rZXksIChlcnIsIHZhbHVlKSA9PiB7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICBzZXRSZWh5ZHJhdGVkKHRydWUpO1xuICAgICAgICAgIHJldHVybiBzZXRFcnJvcihlcnIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIE1pZ3JhdGUgcGVyc2lzdGVkIGRhdGFcbiAgICAgICAgY29uc3QgcmVzdG9yZWRWYWx1ZSA9IHJlaHlkcmF0ZSh2YWx1ZSk7XG4gICAgICAgIGlmICh0eXBlb2YgY29uZmlnLm1pZ3JhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBjcmVhdGVNaWdyYXRpb24oY29uZmlnLCByZXN0b3JlZFZhbHVlKVxuICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHNldFN0YXRlKGRhdGEpKVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4gc2V0UmVoeWRyYXRlZCh0cnVlKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2V0U3RhdGUocmVzdG9yZWRWYWx1ZSk7XG4gICAgICAgICAgc2V0UmVoeWRyYXRlZCh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIGluaXQoKTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gaWYgKGlzTmlsKHN0YXRlKSB8fCBpc0VtcHR5KHN0YXRlKSkge1xuICAgIC8vICAgbG9jYWxGb3JhZ2UucmVtb3ZlSXRlbShjb25maWcua2V5KTtcbiAgICAvLyB9XG4gICAgbG9jYWxGb3JhZ2Uuc2V0SXRlbShjb25maWcua2V5LCBoeWRyYXRlKHN0YXRlKSk7XG4gIH0sIFtzdGF0ZV0pO1xuXG4gIHJldHVybiB7XG4gICAgcmVoeWRyYXRlZCxcbiAgICBlcnJvcixcbiAgfTtcbn07XG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IExheW91dCBmcm9tICdjb250YWluZXJzL2xheW91dC9sYXlvdXQnO1xuaW1wb3J0IEhlcm9CbG9jayBmcm9tICdjb250YWluZXJzL2hlcm8tYmxvY2snO1xuaW1wb3J0IFByb2R1Y3RzIGZyb20gJ2NvbnRhaW5lcnMvcHJvZHVjdHMnO1xuaW1wb3J0IENhbGxUb0FjdGlvbiBmcm9tICdjb250YWluZXJzL2NhbGwtdG8tYWN0aW9uJztcbmltcG9ydCBIb3dJdFdvcmtzIGZyb20gJ2NvbnRhaW5lcnMvaG93LWl0LXdvcmtzJztcbmltcG9ydCB7IHVzZVJlZlNjcm9sbCB9IGZyb20gJ2hlbHBlcnMvdXNlLXJlZi1zY3JvbGwnO1xuaW1wb3J0IHsgdXNlU2VhcmNoIH0gZnJvbSAnY29udGV4dHMvc2VhcmNoL3VzZS1zZWFyY2gnO1xuaW1wb3J0IHsgZ2V0UHJvZHVjdHMgfSBmcm9tICdoZWxwZXJzL2dldC1wcm9kdWN0cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyBwcm9kdWN0cyB9KSB7XG4gIGNvbnN0IHsgZWxSZWYsIHNjcm9sbCB9ID0gdXNlUmVmU2Nyb2xsKHtcbiAgICBwZXJjZW50T2ZFbGVtZW50OiAwLFxuICAgIHBlcmNlbnRPZkNvbnRhaW5lcjogMCxcbiAgICBvZmZzZXRQWDogLTEwMCxcbiAgfSk7XG4gIGNvbnN0IHsgc2VhcmNoVGVybSB9ID0gdXNlU2VhcmNoKCk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHNlYXJjaFRlcm0pIHJldHVybiBzY3JvbGwoKTtcbiAgfSwgW3NlYXJjaFRlcm1dKTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPG1ldGFcbiAgICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxuICAgICAgICAgIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MSwgbWF4aW11bS1zY2FsZT0xXCJcbiAgICAgICAgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cIkRlc2NyaXB0aW9uXCIgY29udGVudD1cIlB1dCB5b3VyIGRlc2NyaXB0aW9uIGhlcmUuXCIgLz5cbiAgICAgICAgPHRpdGxlPkV0ZXJuYWw8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8SGVyb0Jsb2NrIC8+XG4gICAgICA8UHJvZHVjdHMgaXRlbXM9e3Byb2R1Y3RzfSByZWY9e2VsUmVmfSAvPlxuICAgICAgPEhvd0l0V29ya3MgLz5cbiAgICAgIDxDYWxsVG9BY3Rpb24gLz5cbiAgICA8L0xheW91dD5cbiAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcbiAgY29uc3QgcHJvZHVjdHMgPSBhd2FpdCBnZXRQcm9kdWN0cygpO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwcm9kdWN0cyxcbiAgICB9LFxuICB9O1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ29vZ2xlLXNwcmVhZHNoZWV0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvY2FsZm9yYWdlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJvdmVybGF5c2Nyb2xsYmFycy1yZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1tdWx0aS1jYXJvdXNlbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1udW1iZXItZm9ybWF0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=