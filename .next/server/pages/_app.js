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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/overlayscrollbars/css/OverlayScrollbars.css":
/*!******************************************************************!*\
  !*** ./node_modules/overlayscrollbars/css/OverlayScrollbars.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/rc-collapse/assets/index.css":
/*!***************************************************!*\
  !*** ./node_modules/rc-collapse/assets/index.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/react-multi-carousel/lib/styles.css":
/*!**********************************************************!*\
  !*** ./node_modules/react-multi-carousel/lib/styles.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/typeface-open-sans/index.css":
/*!***************************************************!*\
  !*** ./node_modules/typeface-open-sans/index.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/assets/styles/index.css":
/*!*************************************!*\
  !*** ./src/assets/styles/index.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/assets/styles/rc-collapse.css":
/*!*******************************************!*\
  !*** ./src/assets/styles/rc-collapse.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/assets/styles/scrollbar.css":
/*!*****************************************!*\
  !*** ./src/assets/styles/scrollbar.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



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

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CustomApp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rc_collapse_assets_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rc-collapse/assets/index.css */ "./node_modules/rc-collapse/assets/index.css");
/* harmony import */ var rc_collapse_assets_index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rc_collapse_assets_index_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var overlayscrollbars_css_OverlayScrollbars_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! overlayscrollbars/css/OverlayScrollbars.css */ "./node_modules/overlayscrollbars/css/OverlayScrollbars.css");
/* harmony import */ var overlayscrollbars_css_OverlayScrollbars_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(overlayscrollbars_css_OverlayScrollbars_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-multi-carousel/lib/styles.css */ "./node_modules/react-multi-carousel/lib/styles.css");
/* harmony import */ var react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var assets_styles_scrollbar_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/styles/scrollbar.css */ "./src/assets/styles/scrollbar.css");
/* harmony import */ var assets_styles_scrollbar_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_styles_scrollbar_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var assets_styles_rc_collapse_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/styles/rc-collapse.css */ "./src/assets/styles/rc-collapse.css");
/* harmony import */ var assets_styles_rc_collapse_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_styles_rc_collapse_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var assets_styles_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/styles/index.css */ "./src/assets/styles/index.css");
/* harmony import */ var assets_styles_index_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_styles_index_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var contexts_cart_cart_provider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! contexts/cart/cart.provider */ "./src/contexts/cart/cart.provider.tsx");
/* harmony import */ var contexts_drawer_drawer_provider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! contexts/drawer/drawer.provider */ "./src/contexts/drawer/drawer.provider.tsx");
/* harmony import */ var contexts_search_use_search__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! contexts/search/use-search */ "./src/contexts/search/use-search.tsx");
/* harmony import */ var typeface_open_sans__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! typeface-open-sans */ "./node_modules/typeface-open-sans/index.css");
/* harmony import */ var typeface_open_sans__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(typeface_open_sans__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "C:\\Photoshop2021x64\\Github Repo\\Eternal\\src\\pages\\_app.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }










function CustomApp({
  Component,
  pageProps
}) {
  return __jsx(contexts_search_use_search__WEBPACK_IMPORTED_MODULE_9__["SearchProvider"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, __jsx(contexts_drawer_drawer_provider__WEBPACK_IMPORTED_MODULE_8__["DrawerProvider"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx(contexts_cart_cart_provider__WEBPACK_IMPORTED_MODULE_7__["CartProvider"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx(Component, _extends({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  })))));
}

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./src/pages/_app.tsx");


/***/ }),

/***/ "localforage":
/*!******************************!*\
  !*** external "localforage" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("localforage");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRleHRzL2NhcnQvY2FydC5wcm92aWRlci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRleHRzL2NhcnQvY2FydC5yZWR1Y2VyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGV4dHMvZHJhd2VyL2RyYXdlci5wcm92aWRlci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRleHRzL3NlYXJjaC91c2Utc2VhcmNoLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy91c2Utc3RvcmFnZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL19hcHAudHN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcImxvY2FsZm9yYWdlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiJdLCJuYW1lcyI6WyJDYXJ0Q29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJJTklUSUFMX1NUQVRFIiwiaXNPcGVuIiwiaXRlbXMiLCJjb3Vwb24iLCJ1c2VDYXJ0QWN0aW9ucyIsImluaXRpYWxDYXJ0IiwiX3N0YXRlJGl0ZW1zMyIsInN0YXRlIiwiZGlzcGF0Y2giLCJ1c2VSZWR1Y2VyIiwicmVkdWNlciIsImFkZEl0ZW1IYW5kbGVyIiwiaXRlbSIsInF1YW50aXR5IiwidHlwZSIsInBheWxvYWQiLCJfb2JqZWN0U3ByZWFkIiwicmVtb3ZlSXRlbUhhbmRsZXIiLCJjbGVhckl0ZW1Gcm9tQ2FydEhhbmRsZXIiLCJjbGVhckNhcnRIYW5kbGVyIiwidG9nZ2xlQ2FydEhhbmRsZXIiLCJjb3Vwb25IYW5kbGVyIiwicmVtb3ZlQ291cG9uSGFuZGxlciIsInJlaHlkcmF0ZUxvY2FsU3RhdGUiLCJpc0luQ2FydEhhbmRsZXIiLCJpZCIsIl9zdGF0ZSRpdGVtcyIsInNvbWUiLCJnZXRJdGVtSGFuZGxlciIsIl9zdGF0ZSRpdGVtczIiLCJmaW5kIiwiZ2V0Q2FydEl0ZW1zUHJpY2UiLCJjYXJ0SXRlbXNUb3RhbFByaWNlIiwidG9GaXhlZCIsImdldENhcnRJdGVtc1RvdGFsUHJpY2UiLCJnZXREaXNjb3VudCIsIl9zdGF0ZSRjb3Vwb24iLCJ0b3RhbCIsImRpc2NvdW50IiwiTnVtYmVyIiwiZGlzY291bnRJblBlcmNlbnQiLCJnZXRJdGVtc0NvdW50IiwicmVkdWNlIiwiYWNjIiwiQ2FydFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJfc3RhdGUkaXRlbXM0IiwicmVoeWRyYXRlZCIsImVycm9yIiwidXNlU3RvcmFnZSIsIl9fanN4IiwiUHJvdmlkZXIiLCJ2YWx1ZSIsImNhcnRJdGVtc0NvdW50IiwibGVuZ3RoIiwiaXRlbXNDb3VudCIsImFkZEl0ZW0iLCJyZW1vdmVJdGVtIiwicmVtb3ZlSXRlbUZyb21DYXJ0IiwiY2xlYXJDYXJ0IiwiaXNJbkNhcnQiLCJnZXRJdGVtIiwidG9nZ2xlQ2FydCIsImNhbGN1bGF0ZVByaWNlIiwiY2FsY3VsYXRlU3ViVG90YWxQcmljZSIsImFwcGx5Q291cG9uIiwicmVtb3ZlQ291cG9uIiwiY2FsY3VsYXRlRGlzY291bnQiLCJfX3NlbGYiLCJfX3NvdXJjZSIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsInVzZUNhcnQiLCJ1c2VDb250ZXh0IiwicHJpY2UiLCJwcm9kdWN0Iiwic2FsZVByaWNlIiwiYWRkSXRlbVRvQ2FydCIsImFjdGlvbiIsImV4aXN0aW5nQ2FydEl0ZW1JbmRleCIsImZpbmRJbmRleCIsIm5ld1N0YXRlIiwibmV3UXVhbnRpdHkiLCJjbGVhckl0ZW1Gcm9tQ2FydCIsImZpbHRlciIsIkVycm9yIiwiRHJhd2VyQ29udGV4dCIsInNob3dEZXRhaWxzIiwic2hvd0NhcnQiLCJzaG93Q2hlY2tvdXQiLCJtZW51Iiwib3BlbiIsIkRyYXdlclByb3ZpZGVyIiwic2VhcmNoQ29udGV4dCIsIlNlYXJjaFByb3ZpZGVyIiwic2VhcmNoVGVybSIsInNldFNlYXJjaFRlcm0iLCJ1c2VTdGF0ZSIsInVzZVNlYXJjaCIsImlzT2JqZWN0TGlrZWQiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJyZWh5ZHJhdGUiLCJkZWZhdWx0VmFsdWUiLCJwYXJzZSIsIkpTT04iLCJlcnIiLCJoeWRyYXRlIiwic3RyaW5naWZ5IiwiY3JlYXRlTWlncmF0aW9uIiwib3B0cyIsImRhdGEiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImtleSIsImxvY2FsRm9yYWdlIiwidmVyc2lvbiIsIm1pZ3JhdGUiLCJzZXRJdGVtIiwiY29uZmlnIiwic2V0U3RhdGUiLCJzZXRSZWh5ZHJhdGVkIiwic2V0RXJyb3IiLCJ1c2VFZmZlY3QiLCJpbml0IiwicmVzdG9yZWRWYWx1ZSIsInRoZW4iLCJDdXN0b21BcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJfZXh0ZW5kcyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7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Q2hDO0FBRWIsU0FBU2tGLFNBQVNBLENBQUM7RUFBRUMsU0FBUztFQUFFQztBQUFVLENBQUMsRUFBRTtFQUMxRCxPQUNFbEYsS0FBQSxDQUFDOEMseUVBQWM7SUFBQTVCLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUNidkIsS0FBQSxDQUFDNEMsOEVBQWM7SUFBQTFCLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUNidkIsS0FBQSxDQUFDTix3RUFBWTtJQUFBd0IsTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQ1h2QixLQUFBLENBQUNpRixTQUFTLEVBQUFFLFFBQUEsS0FBS0QsU0FBUztJQUFBaEUsTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEVBQUcsQ0FDZixDQUNBLENBQ0YsQ0FBQztBQUVyQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQyIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZHVjZXIsIHVzZUNvbnRleHQsIGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyByZWR1Y2VyLCBjYXJ0SXRlbXNUb3RhbFByaWNlIH0gZnJvbSAnLi9jYXJ0LnJlZHVjZXInO1xuaW1wb3J0IHsgdXNlU3RvcmFnZSB9IGZyb20gJ2hlbHBlcnMvdXNlLXN0b3JhZ2UnO1xuY29uc3QgQ2FydENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9IGFzIGFueSk7XG5jb25zdCBJTklUSUFMX1NUQVRFID0ge1xuICBpc09wZW46IGZhbHNlLFxuICBpdGVtczogW10sXG4gIGNvdXBvbjogbnVsbCxcbn07XG5cbmNvbnN0IHVzZUNhcnRBY3Rpb25zID0gKGluaXRpYWxDYXJ0ID0gSU5JVElBTF9TVEFURSkgPT4ge1xuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbENhcnQpO1xuXG4gIGNvbnN0IGFkZEl0ZW1IYW5kbGVyID0gKGl0ZW0sIHF1YW50aXR5ID0gMSkgPT4ge1xuICAgIGRpc3BhdGNoKHsgdHlwZTogJ0FERF9JVEVNJywgcGF5bG9hZDogeyAuLi5pdGVtLCBxdWFudGl0eSB9IH0pO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZUl0ZW1IYW5kbGVyID0gKGl0ZW0sIHF1YW50aXR5ID0gMSkgPT4ge1xuICAgIGRpc3BhdGNoKHsgdHlwZTogJ1JFTU9WRV9JVEVNJywgcGF5bG9hZDogeyAuLi5pdGVtLCBxdWFudGl0eSB9IH0pO1xuICB9O1xuXG4gIGNvbnN0IGNsZWFySXRlbUZyb21DYXJ0SGFuZGxlciA9IChpdGVtKSA9PiB7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiAnQ0xFQVJfSVRFTV9GUk9NX0NBUlQnLCBwYXlsb2FkOiBpdGVtIH0pO1xuICB9O1xuXG4gIGNvbnN0IGNsZWFyQ2FydEhhbmRsZXIgPSAoKSA9PiB7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiAnQ0xFQVJfQ0FSVCcgfSk7XG4gIH07XG4gIGNvbnN0IHRvZ2dsZUNhcnRIYW5kbGVyID0gKCkgPT4ge1xuICAgIGRpc3BhdGNoKHsgdHlwZTogJ1RPR0dMRV9DQVJUJyB9KTtcbiAgfTtcbiAgY29uc3QgY291cG9uSGFuZGxlciA9IChjb3Vwb24pID0+IHtcbiAgICBkaXNwYXRjaCh7IHR5cGU6ICdBUFBMWV9DT1VQT04nLCBwYXlsb2FkOiBjb3Vwb24gfSk7XG4gIH07XG4gIGNvbnN0IHJlbW92ZUNvdXBvbkhhbmRsZXIgPSAoKSA9PiB7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiAnUkVNT1ZFX0NPVVBPTicgfSk7XG4gIH07XG4gIGNvbnN0IHJlaHlkcmF0ZUxvY2FsU3RhdGUgPSAocGF5bG9hZCkgPT4ge1xuICAgIGRpc3BhdGNoKHsgdHlwZTogJ1JFSFlEUkFURScsIHBheWxvYWQgfSk7XG4gIH07XG4gIGNvbnN0IGlzSW5DYXJ0SGFuZGxlciA9IChpZCkgPT4ge1xuICAgIHJldHVybiBzdGF0ZS5pdGVtcz8uc29tZSgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gaWQpO1xuICB9O1xuICBjb25zdCBnZXRJdGVtSGFuZGxlciA9IChpZCkgPT4ge1xuICAgIHJldHVybiBzdGF0ZS5pdGVtcz8uZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gaWQpO1xuICB9O1xuICBjb25zdCBnZXRDYXJ0SXRlbXNQcmljZSA9ICgpID0+IGNhcnRJdGVtc1RvdGFsUHJpY2Uoc3RhdGUuaXRlbXMpLnRvRml4ZWQoMik7XG4gIGNvbnN0IGdldENhcnRJdGVtc1RvdGFsUHJpY2UgPSAoKSA9PlxuICAgIGNhcnRJdGVtc1RvdGFsUHJpY2Uoc3RhdGUuaXRlbXMsIHN0YXRlLmNvdXBvbikudG9GaXhlZCgyKTtcblxuICBjb25zdCBnZXREaXNjb3VudCA9ICgpID0+IHtcbiAgICBjb25zdCB0b3RhbCA9IGNhcnRJdGVtc1RvdGFsUHJpY2Uoc3RhdGUuaXRlbXMpO1xuICAgIGNvbnN0IGRpc2NvdW50ID0gc3RhdGUuY291cG9uXG4gICAgICA/ICh0b3RhbCAqIE51bWJlcihzdGF0ZS5jb3Vwb24/LmRpc2NvdW50SW5QZXJjZW50KSkgLyAxMDBcbiAgICAgIDogMDtcbiAgICByZXR1cm4gZGlzY291bnQudG9GaXhlZCgyKTtcbiAgfTtcbiAgY29uc3QgZ2V0SXRlbXNDb3VudCA9IHN0YXRlLml0ZW1zPy5yZWR1Y2UoXG4gICAgKGFjYywgaXRlbSkgPT4gYWNjICsgaXRlbS5xdWFudGl0eSxcbiAgICAwXG4gICk7XG4gIHJldHVybiB7XG4gICAgc3RhdGUsXG4gICAgZ2V0SXRlbXNDb3VudCxcbiAgICByZWh5ZHJhdGVMb2NhbFN0YXRlLFxuICAgIGFkZEl0ZW1IYW5kbGVyLFxuICAgIHJlbW92ZUl0ZW1IYW5kbGVyLFxuICAgIGNsZWFySXRlbUZyb21DYXJ0SGFuZGxlcixcbiAgICBjbGVhckNhcnRIYW5kbGVyLFxuICAgIGlzSW5DYXJ0SGFuZGxlcixcbiAgICBnZXRJdGVtSGFuZGxlcixcbiAgICB0b2dnbGVDYXJ0SGFuZGxlcixcbiAgICBnZXRDYXJ0SXRlbXNUb3RhbFByaWNlLFxuICAgIGdldENhcnRJdGVtc1ByaWNlLFxuICAgIGNvdXBvbkhhbmRsZXIsXG4gICAgcmVtb3ZlQ291cG9uSGFuZGxlcixcbiAgICBnZXREaXNjb3VudCxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBDYXJ0UHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IHtcbiAgICBzdGF0ZSxcbiAgICByZWh5ZHJhdGVMb2NhbFN0YXRlLFxuICAgIGdldEl0ZW1zQ291bnQsXG4gICAgYWRkSXRlbUhhbmRsZXIsXG4gICAgcmVtb3ZlSXRlbUhhbmRsZXIsXG4gICAgY2xlYXJJdGVtRnJvbUNhcnRIYW5kbGVyLFxuICAgIGNsZWFyQ2FydEhhbmRsZXIsXG4gICAgaXNJbkNhcnRIYW5kbGVyLFxuICAgIGdldEl0ZW1IYW5kbGVyLFxuICAgIHRvZ2dsZUNhcnRIYW5kbGVyLFxuICAgIGdldENhcnRJdGVtc1RvdGFsUHJpY2UsXG4gICAgY291cG9uSGFuZGxlcixcbiAgICByZW1vdmVDb3Vwb25IYW5kbGVyLFxuICAgIGdldENhcnRJdGVtc1ByaWNlLFxuICAgIGdldERpc2NvdW50LFxuICB9ID0gdXNlQ2FydEFjdGlvbnMoKTtcbiAgY29uc3QgeyByZWh5ZHJhdGVkLCBlcnJvciB9ID0gdXNlU3RvcmFnZShzdGF0ZSwgcmVoeWRyYXRlTG9jYWxTdGF0ZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q2FydENvbnRleHQuUHJvdmlkZXJcbiAgICAgIHZhbHVlPXt7XG4gICAgICAgIGlzT3Blbjogc3RhdGUuaXNPcGVuLFxuICAgICAgICBpdGVtczogc3RhdGUuaXRlbXMsXG4gICAgICAgIGNvdXBvbjogc3RhdGUuY291cG9uLFxuICAgICAgICBjYXJ0SXRlbXNDb3VudDogc3RhdGUuaXRlbXM/Lmxlbmd0aCxcbiAgICAgICAgaXRlbXNDb3VudDogZ2V0SXRlbXNDb3VudCxcbiAgICAgICAgYWRkSXRlbTogYWRkSXRlbUhhbmRsZXIsXG4gICAgICAgIHJlbW92ZUl0ZW06IHJlbW92ZUl0ZW1IYW5kbGVyLFxuICAgICAgICByZW1vdmVJdGVtRnJvbUNhcnQ6IGNsZWFySXRlbUZyb21DYXJ0SGFuZGxlcixcbiAgICAgICAgY2xlYXJDYXJ0OiBjbGVhckNhcnRIYW5kbGVyLFxuICAgICAgICBpc0luQ2FydDogaXNJbkNhcnRIYW5kbGVyLFxuICAgICAgICBnZXRJdGVtOiBnZXRJdGVtSGFuZGxlcixcbiAgICAgICAgdG9nZ2xlQ2FydDogdG9nZ2xlQ2FydEhhbmRsZXIsXG4gICAgICAgIGNhbGN1bGF0ZVByaWNlOiBnZXRDYXJ0SXRlbXNUb3RhbFByaWNlLFxuICAgICAgICBjYWxjdWxhdGVTdWJUb3RhbFByaWNlOiBnZXRDYXJ0SXRlbXNQcmljZSxcbiAgICAgICAgYXBwbHlDb3Vwb246IGNvdXBvbkhhbmRsZXIsXG4gICAgICAgIHJlbW92ZUNvdXBvbjogcmVtb3ZlQ291cG9uSGFuZGxlcixcbiAgICAgICAgY2FsY3VsYXRlRGlzY291bnQ6IGdldERpc2NvdW50LFxuICAgICAgfX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9DYXJ0Q29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VDYXJ0ID0gKCkgPT4gdXNlQ29udGV4dChDYXJ0Q29udGV4dCk7XG4iLCJleHBvcnQgY29uc3QgY2FydEl0ZW1zVG90YWxQcmljZSA9IChpdGVtcywgY291cG9uID0gbnVsbCkgPT4ge1xuICBsZXQgdG90YWwgPSBpdGVtcy5yZWR1Y2UoKHByaWNlLCBwcm9kdWN0KSA9PiB7XG4gICAgaWYgKHByb2R1Y3Quc2FsZVByaWNlKSB7XG4gICAgICByZXR1cm4gcHJpY2UgKyBwcm9kdWN0LnNhbGVQcmljZSAqIHByb2R1Y3QucXVhbnRpdHk7XG4gICAgfVxuICAgIHJldHVybiBwcmljZSArIHByb2R1Y3QucHJpY2UgKiBwcm9kdWN0LnF1YW50aXR5O1xuICB9LCAwKTtcbiAgY29uc3QgZGlzY291bnQgPSBjb3Vwb25cbiAgICA/ICh0b3RhbCAqIE51bWJlcihjb3Vwb24uZGlzY291bnRJblBlcmNlbnQpKSAvIDEwMFxuICAgIDogMDtcblxuICByZXR1cm4gdG90YWwgLSBkaXNjb3VudDtcbn07XG4vLyBjYXJ0SXRlbXMsIGNhcnRJdGVtVG9BZGRcbmNvbnN0IGFkZEl0ZW1Ub0NhcnQgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICBjb25zdCBleGlzdGluZ0NhcnRJdGVtSW5kZXggPSBzdGF0ZS5pdGVtcy5maW5kSW5kZXgoXG4gICAgKGl0ZW0pID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5wYXlsb2FkLmlkXG4gICk7XG5cbiAgaWYgKGV4aXN0aW5nQ2FydEl0ZW1JbmRleCA+IC0xKSB7XG4gICAgY29uc3QgbmV3U3RhdGUgPSBbLi4uc3RhdGUuaXRlbXNdO1xuICAgIG5ld1N0YXRlW2V4aXN0aW5nQ2FydEl0ZW1JbmRleF0ucXVhbnRpdHkgKz0gYWN0aW9uLnBheWxvYWQucXVhbnRpdHk7XG4gICAgcmV0dXJuIG5ld1N0YXRlO1xuICB9XG4gIHJldHVybiBbLi4uc3RhdGUuaXRlbXMsIGFjdGlvbi5wYXlsb2FkXTtcbn07XG5cbi8vIGNhcnRJdGVtcywgY2FydEl0ZW1Ub1JlbW92ZVxuY29uc3QgcmVtb3ZlSXRlbUZyb21DYXJ0ID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgcmV0dXJuIHN0YXRlLml0ZW1zLnJlZHVjZSgoYWNjLCBpdGVtKSA9PiB7XG4gICAgaWYgKGl0ZW0uaWQgPT09IGFjdGlvbi5wYXlsb2FkLmlkKSB7XG4gICAgICBjb25zdCBuZXdRdWFudGl0eSA9IGl0ZW0ucXVhbnRpdHkgLSBhY3Rpb24ucGF5bG9hZC5xdWFudGl0eTtcblxuICAgICAgcmV0dXJuIG5ld1F1YW50aXR5ID4gMFxuICAgICAgICA/IFsuLi5hY2MsIHsgLi4uaXRlbSwgcXVhbnRpdHk6IG5ld1F1YW50aXR5IH1dXG4gICAgICAgIDogWy4uLmFjY107XG4gICAgfVxuICAgIHJldHVybiBbLi4uYWNjLCBpdGVtXTtcbiAgfSwgW10pO1xufTtcblxuY29uc3QgY2xlYXJJdGVtRnJvbUNhcnQgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICByZXR1cm4gc3RhdGUuaXRlbXMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmlkICE9PSBhY3Rpb24ucGF5bG9hZC5pZCk7XG59O1xuXG5leHBvcnQgY29uc3QgcmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdSRUhZRFJBVEUnOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIC4uLmFjdGlvbi5wYXlsb2FkIH07XG4gICAgY2FzZSAnVE9HR0xFX0NBUlQnOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGlzT3BlbjogIXN0YXRlLmlzT3BlbiB9O1xuICAgIGNhc2UgJ0FERF9JVEVNJzpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBpdGVtczogYWRkSXRlbVRvQ2FydChzdGF0ZSwgYWN0aW9uKSB9O1xuICAgIGNhc2UgJ1JFTU9WRV9JVEVNJzpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBpdGVtczogcmVtb3ZlSXRlbUZyb21DYXJ0KHN0YXRlLCBhY3Rpb24pIH07XG4gICAgY2FzZSAnQ0xFQVJfSVRFTV9GUk9NX0NBUlQnOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGl0ZW1zOiBjbGVhckl0ZW1Gcm9tQ2FydChzdGF0ZSwgYWN0aW9uKSB9O1xuICAgIGNhc2UgJ0NMRUFSX0NBUlQnOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGl0ZW1zOiBbXSB9O1xuICAgIGNhc2UgJ0FQUExZX0NPVVBPTic6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgY291cG9uOiBhY3Rpb24ucGF5bG9hZCB9O1xuICAgIGNhc2UgJ1JFTU9WRV9DT1VQT04nOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGNvdXBvbjogbnVsbCB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gYWN0aW9uOiAke2FjdGlvbi50eXBlfWApO1xuICB9XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZHVjZXIsIGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5leHBvcnQgY29uc3QgRHJhd2VyQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8e1xuICBzdGF0ZT86IGFueTtcbiAgZGlzcGF0Y2g/OiBSZWFjdC5EaXNwYXRjaDxhbnk+O1xufT4oe30pO1xuXG5jb25zdCBJTklUSUFMX1NUQVRFID0ge1xuICBzaG93RGV0YWlsczogZmFsc2UsXG4gIHNob3dDYXJ0OiBmYWxzZSxcbiAgc2hvd0NoZWNrb3V0OiBmYWxzZSxcbiAgbWVudTogZmFsc2UsXG4gIG9wZW46IGZhbHNlLFxuICBpdGVtOiBbXSxcbn07XG5cbnR5cGUgQWN0aW9uVHlwZSA9XG4gIHwgeyB0eXBlOiAnU1RPUkVfUFJPRFVDVF9ERVRBSUwnOyBwYXlsb2FkOiBhbnkgfVxuICB8IHsgdHlwZTogJ1RPR0dMRV9QUk9EVUNUX0RFVEFJTCc7IHBheWxvYWQ6IGFueSB9XG4gIHwgeyB0eXBlOiAnVE9HR0xFX0NBUlRfVklFVyc7IHBheWxvYWQ6IGFueSB9XG4gIHwgeyB0eXBlOiAnVE9HR0xFX0NIRUNLT1VUX1ZJRVcnOyBwYXlsb2FkOiBhbnkgfVxuICB8IHsgdHlwZTogJ1NMSURFX0NBUlQnOyBwYXlsb2FkOiBhbnkgfVxuICB8IHsgdHlwZTogJ09QRU5fTUVOVSc7IHBheWxvYWQ6IGFueSB9O1xuXG50eXBlIFN0YXRlVHlwZSA9IHR5cGVvZiBJTklUSUFMX1NUQVRFO1xuXG5mdW5jdGlvbiByZWR1Y2VyKHN0YXRlOiBTdGF0ZVR5cGUsIGFjdGlvbjogQWN0aW9uVHlwZSkge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSAnU1RPUkVfUFJPRFVDVF9ERVRBSUwnOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGl0ZW06IGFjdGlvbi5wYXlsb2FkLml0ZW0sXG4gICAgICB9O1xuICAgIGNhc2UgJ1RPR0dMRV9QUk9EVUNUX0RFVEFJTCc6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgc2hvd0RldGFpbHM6IGFjdGlvbi5wYXlsb2FkLnNob3dEZXRhaWxzLFxuICAgICAgICBzaG93Q2FydDogZmFsc2UsXG4gICAgICAgIHNob3dDaGVja291dDogZmFsc2UsXG4gICAgICB9O1xuICAgIGNhc2UgJ1RPR0dMRV9DQVJUX1ZJRVcnOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHNob3dEZXRhaWxzOiBmYWxzZSxcbiAgICAgICAgc2hvd0NhcnQ6IGFjdGlvbi5wYXlsb2FkLnNob3dDYXJ0LFxuICAgICAgICBzaG93Q2hlY2tvdXQ6IGZhbHNlLFxuICAgICAgfTtcbiAgICBjYXNlICdUT0dHTEVfQ0hFQ0tPVVRfVklFVyc6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgc2hvd0RldGFpbHM6IGZhbHNlLFxuICAgICAgICBzaG93Q2FydDogZmFsc2UsXG4gICAgICAgIHNob3dDaGVja291dDogYWN0aW9uLnBheWxvYWQuc2hvd0NoZWNrb3V0LFxuICAgICAgfTtcbiAgICBjYXNlICdTTElERV9DQVJUJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBvcGVuOiBhY3Rpb24ucGF5bG9hZC5vcGVuLFxuICAgICAgfTtcbiAgICBjYXNlICdPUEVOX01FTlUnOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIG1lbnU6IGFjdGlvbi5wYXlsb2FkLm1lbnUsXG4gICAgICB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IERyYXdlclByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlciwgSU5JVElBTF9TVEFURSk7XG4gIHJldHVybiAoXG4gICAgPERyYXdlckNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgc3RhdGUsIGRpc3BhdGNoIH19PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvRHJhd2VyQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG4iLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcblxuY29uc3Qgc2VhcmNoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgYW55KTtcblxuZXhwb3J0IGNvbnN0IFNlYXJjaFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBbc2VhcmNoVGVybSwgc2V0U2VhcmNoVGVybV0gPSB1c2VTdGF0ZSgnJyk7XG4gIHJldHVybiAoXG4gICAgPHNlYXJjaENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgc2VhcmNoVGVybSwgc2V0U2VhcmNoVGVybSB9fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L3NlYXJjaENvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgdXNlU2VhcmNoID0gKCkgPT4gdXNlQ29udGV4dChzZWFyY2hDb250ZXh0KTtcbiIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgbG9jYWxGb3JhZ2UgZnJvbSAnbG9jYWxmb3JhZ2UnO1xuY29uc3QgaXNPYmplY3RMaWtlZCA9ICh2YWx1ZSkgPT5cbiAgdmFsdWUuY29uc3RydWN0b3IubmFtZSA9PT0gJ0FycmF5JyB8fCB2YWx1ZS5jb25zdHJ1Y3Rvci5uYW1lID09PSAnT2JqZWN0JztcblxuY29uc3QgcmVoeWRyYXRlID0gKHZhbHVlOiBhbnksIGRlZmF1bHRWYWx1ZT86IGFueSkgPT4ge1xuICBpZiAoIXZhbHVlKSByZXR1cm4gZGVmYXVsdFZhbHVlO1xuICAvLyBpZiAodmFsdWUgPT09ICdmYWxzZScpIHN0ciA9IGZhbHNlO1xuICAvLyBpZiAodmFsdWUgPT09ICd0cnVlJykgc3RyID0gdHJ1ZTtcbiAgaWYgKGlzT2JqZWN0TGlrZWQodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIHRyeSB7XG4gICAgY29uc3QgcGFyc2UgPSBKU09OLnBhcnNlKHZhbHVlKTtcbiAgICByZXR1cm4gcGFyc2U7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XG4gIH1cbn07XG5cbmNvbnN0IGh5ZHJhdGUgPSAodmFsdWUpID0+IHtcbiAgaWYgKCFpc09iamVjdExpa2VkKHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xufTtcbmNvbnN0IGNyZWF0ZU1pZ3JhdGlvbiA9IChvcHRzLCBkYXRhKSA9PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc3Qga2V5ID0gYCR7b3B0cy5rZXl9LXZlcnNpb25gO1xuICAgIGxvY2FsRm9yYWdlLmdldEl0ZW0oa2V5LCAoZXJyLCB2ZXJzaW9uKSA9PiB7XG4gICAgICBpZiAodmVyc2lvbiAhPT0gb3B0cy52ZXJzaW9uKSB7XG4gICAgICAgIGRhdGEgPSBvcHRzLm1pZ3JhdGUoZGF0YSk7XG4gICAgICAgIGxvY2FsRm9yYWdlLnNldEl0ZW0ob3B0cy5rZXksIHJlaHlkcmF0ZShkYXRhKSwgKGVycikgPT4ge1xuICAgICAgICAgIGlmIChlcnIpIHJldHVybiByZWplY3QoZXJyKTtcbiAgICAgICAgICBsb2NhbEZvcmFnZS5zZXRJdGVtKGtleSwgb3B0cy52ZXJzaW9uLCAoZXJyKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSByZXR1cm4gcmVqZWN0KGVycik7XG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShkYXRhKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXNvbHZlKGRhdGEpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn07XG5cbmNvbnN0IGNvbmZpZyA9IHtcbiAga2V5OiAnQHNlc3Npb24tbWVkc3knLFxuICB2ZXJzaW9uOiAxLFxuICBtaWdyYXRlOiAoc3RhdGUpID0+IHtcbiAgICByZXR1cm4geyAuLi5zdGF0ZSB9O1xuICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IHVzZVN0b3JhZ2UgPSAoc3RhdGUsIHNldFN0YXRlKSA9PiB7XG4gIGNvbnN0IFtyZWh5ZHJhdGVkLCBzZXRSZWh5ZHJhdGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICBhd2FpdCBsb2NhbEZvcmFnZS5nZXRJdGVtKGNvbmZpZy5rZXksIChlcnIsIHZhbHVlKSA9PiB7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICBzZXRSZWh5ZHJhdGVkKHRydWUpO1xuICAgICAgICAgIHJldHVybiBzZXRFcnJvcihlcnIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIE1pZ3JhdGUgcGVyc2lzdGVkIGRhdGFcbiAgICAgICAgY29uc3QgcmVzdG9yZWRWYWx1ZSA9IHJlaHlkcmF0ZSh2YWx1ZSk7XG4gICAgICAgIGlmICh0eXBlb2YgY29uZmlnLm1pZ3JhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBjcmVhdGVNaWdyYXRpb24oY29uZmlnLCByZXN0b3JlZFZhbHVlKVxuICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHNldFN0YXRlKGRhdGEpKVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4gc2V0UmVoeWRyYXRlZCh0cnVlKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2V0U3RhdGUocmVzdG9yZWRWYWx1ZSk7XG4gICAgICAgICAgc2V0UmVoeWRyYXRlZCh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIGluaXQoKTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gaWYgKGlzTmlsKHN0YXRlKSB8fCBpc0VtcHR5KHN0YXRlKSkge1xuICAgIC8vICAgbG9jYWxGb3JhZ2UucmVtb3ZlSXRlbShjb25maWcua2V5KTtcbiAgICAvLyB9XG4gICAgbG9jYWxGb3JhZ2Uuc2V0SXRlbShjb25maWcua2V5LCBoeWRyYXRlKHN0YXRlKSk7XG4gIH0sIFtzdGF0ZV0pO1xuXG4gIHJldHVybiB7XG4gICAgcmVoeWRyYXRlZCxcbiAgICBlcnJvcixcbiAgfTtcbn07XG4iLCJpbXBvcnQgJ3JjLWNvbGxhcHNlL2Fzc2V0cy9pbmRleC5jc3MnO1xuaW1wb3J0ICdvdmVybGF5c2Nyb2xsYmFycy9jc3MvT3ZlcmxheVNjcm9sbGJhcnMuY3NzJztcbmltcG9ydCAncmVhY3QtbXVsdGktY2Fyb3VzZWwvbGliL3N0eWxlcy5jc3MnO1xuaW1wb3J0ICdhc3NldHMvc3R5bGVzL3Njcm9sbGJhci5jc3MnO1xuaW1wb3J0ICdhc3NldHMvc3R5bGVzL3JjLWNvbGxhcHNlLmNzcyc7XG5pbXBvcnQgJ2Fzc2V0cy9zdHlsZXMvaW5kZXguY3NzJztcbmltcG9ydCB7IENhcnRQcm92aWRlciB9IGZyb20gJ2NvbnRleHRzL2NhcnQvY2FydC5wcm92aWRlcic7XG5pbXBvcnQgeyBEcmF3ZXJQcm92aWRlciB9IGZyb20gJ2NvbnRleHRzL2RyYXdlci9kcmF3ZXIucHJvdmlkZXInO1xuaW1wb3J0IHsgU2VhcmNoUHJvdmlkZXIgfSBmcm9tICdjb250ZXh0cy9zZWFyY2gvdXNlLXNlYXJjaCc7XG5pbXBvcnQgJ3R5cGVmYWNlLW9wZW4tc2Fucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEN1c3RvbUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8U2VhcmNoUHJvdmlkZXI+XG4gICAgICA8RHJhd2VyUHJvdmlkZXI+XG4gICAgICAgIDxDYXJ0UHJvdmlkZXI+XG4gICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICA8L0NhcnRQcm92aWRlcj5cbiAgICAgIDwvRHJhd2VyUHJvdmlkZXI+XG4gICAgPC9TZWFyY2hQcm92aWRlcj5cbiAgKTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvY2FsZm9yYWdlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=