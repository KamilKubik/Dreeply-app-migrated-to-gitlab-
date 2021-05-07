module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/dashboard/projects/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/head":
/*!****************************************************!*\
  !*** external "next/dist/next-server/lib/head.js" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/head.js");

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "../next-server/lib/to-base-64":
/*!**********************************************************!*\
  !*** external "next/dist/next-server/lib/to-base-64.js" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/to-base-64.js");

/***/ }),

/***/ "../next-server/server/image-config":
/*!***************************************************************!*\
  !*** external "next/dist/next-server/server/image-config.js" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/image-config.js");

/***/ }),

/***/ "./components/BounceLoader.js":
/*!************************************!*\
  !*** ./components/BounceLoader.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/react */ "@emotion/react");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_spinners_BounceLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-spinners/BounceLoader */ "react-spinners/BounceLoader");
/* harmony import */ var react_spinners_BounceLoader__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_spinners_BounceLoader__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\off-saas\\components\\BounceLoader.js";




const BounceLoaderComponent = () => {
  const bounceStyles = _emotion_react__WEBPACK_IMPORTED_MODULE_2__["css"]`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "relative h-screen w-full",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_spinners_BounceLoader__WEBPACK_IMPORTED_MODULE_3___default.a, {
      color: '#6C63FF',
      css: bounceStyles
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (BounceLoaderComponent);

/***/ }),

/***/ "./components/dashboard/DesktopNavbar.js":
/*!***********************************************!*\
  !*** ./components/dashboard/DesktopNavbar.js ***!
  \***********************************************/
/*! exports provided: IsActiveContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsActiveContext", function() { return IsActiveContext; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ "gsap");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-themes */ "next-themes");
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_newAuth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib/newAuth */ "./lib/newAuth.js");


var _jsxFileName = "C:\\off-saas\\components\\dashboard\\DesktopNavbar.js";






const IsActiveContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])();

const DesktopNavbar = ({
  children
}) => {
  const {
    logOut
  } = Object(_lib_newAuth__WEBPACK_IMPORTED_MODULE_6__["useAuth"])();
  const {
    theme,
    setTheme
  } = Object(next_themes__WEBPACK_IMPORTED_MODULE_4__["useTheme"])();
  const {
    0: active,
    1: setActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const navRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  const manRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  const tl = gsap__WEBPACK_IMPORTED_MODULE_3___default.a.timeline({
    repeat: -1,
    yoyo: true
  });
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    tl.to(manRef.current, {
      duration: 3,
      y: 250,
      x: 175,
      ease: gsap__WEBPACK_IMPORTED_MODULE_3__["Power1"].easeInOut
    }).to(manRef.current, {
      duration: 3,
      y: 500,
      x: 350,
      ease: gsap__WEBPACK_IMPORTED_MODULE_3__["Power1"].easeInOut
    }).to(manRef.current, {
      duration: 3,
      y: 250,
      x: 175,
      ease: gsap__WEBPACK_IMPORTED_MODULE_3__["Power1"].easeInOut
    }).to(manRef.current, {
      duration: 3,
      y: 0,
      x: 0,
      ease: gsap__WEBPACK_IMPORTED_MODULE_3__["Power1"].easeInOut
    });
  }, []);
  const {
    0: activeClass1,
    1: setActiveClass1
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: activeClass2,
    1: setActiveClass2
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: activeClass3,
    1: setActiveClass3
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: activeClass4,
    1: setActiveClass4
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: activeClass5,
    1: setActiveClass5
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: activeHover1,
    1: setActiveHover1
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: activeHover2,
    1: setActiveHover2
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: activeHover3,
    1: setActiveHover3
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: activeHover4,
    1: setActiveHover4
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: activeHover5,
    1: setActiveHover5
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (router.pathname.includes('welcome')) {
      setActiveClass1(true);
    } else if (router.pathname.includes('startup')) {
      setActiveClass2(true);
    } else if (router.pathname.includes('business')) {
      // Tego router'a jeszcze nie ma
      setActiveClass3(true);
    } else if (router.pathname.includes('account')) {
      // Tego router'a jeszcze nie ma
      setActiveClass4(true);
    }
  }, []);

  const activeClassFn1 = () => {
    setActiveClass1(true);
    setActiveClass2(false);
    setActiveClass3(false);
    setActiveClass4(false);
    setActiveClass5(false);
  };

  const activeClassFn2 = () => {
    setActiveClass1(false);
    setActiveClass2(true);
    setActiveClass3(false);
    setActiveClass4(false);
    setActiveClass5(false);
  };

  const activeClassFn3 = () => {
    setActiveClass1(false);
    setActiveClass2(false);
    setActiveClass3(true);
    setActiveClass4(false);
    setActiveClass5(false);
  };

  const activeClassFn4 = () => {
    setActiveClass1(false);
    setActiveClass2(false);
    setActiveClass3(false);
    setActiveClass4(true);
    setActiveClass5(false);
  };

  const activeClassFn5 = () => {
    setActiveClass1(false);
    setActiveClass2(false);
    setActiveClass3(false);
    setActiveClass4(false);
    setActiveClass5(true);
    logOut();
  };

  const mouseEnterNav = () => {
    setActive(true);
    gsap__WEBPACK_IMPORTED_MODULE_3___default.a.to(navRef.current, {
      width: '208px',
      ease: gsap__WEBPACK_IMPORTED_MODULE_3__["Power4"].easeOut,
      duration: 1
    });
  };

  const mouseLeaveNav = () => {
    setActive(false);
    gsap__WEBPACK_IMPORTED_MODULE_3___default.a.to(navRef.current, {
      width: '80px',
      ease: gsap__WEBPACK_IMPORTED_MODULE_3__["Power4"].easeOut
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(IsActiveContext.Provider, {
    value: active,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "fixed right-0 z-50",
      style: {
        overflow: 'unset',
        height: 175
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
        width: "100",
        height: "100",
        style: {
          overflow: 'unset'
        },
        viewBox: "0 0 770 772",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
            style: {
              cursor: 'pointer'
            },
            onClick: () => setTheme(theme === 'dark' ? 'light' : 'dark'),
            d: "M769.001 0H310.286C306.762 21.4871 304.994 43.2257 305.001 65C305.001 284.809 483.192 463 703.001 463C725.114 463.008 747.19 461.185 769.001 457.55V0Z",
            fill: "#0A1230"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
            style: {
              cursor: 'pointer'
            },
            onClick: () => setTheme(theme === 'dark' ? 'light' : 'dark'),
            d: "M574.849 248.809C567.965 248.815 561.135 247.582 554.687 245.17C554.318 245.032 553.98 244.822 553.692 244.553C553.404 244.284 553.172 243.961 553.009 243.603C552.846 243.244 552.755 242.857 552.742 242.463C552.728 242.07 552.792 241.677 552.931 241.308C553.069 240.939 553.278 240.601 553.547 240.313C553.816 240.025 554.139 239.793 554.498 239.63C554.856 239.467 555.244 239.376 555.637 239.363C556.031 239.349 556.424 239.414 556.792 239.552C565.341 242.711 574.566 243.586 583.557 242.09C592.547 240.594 600.991 236.779 608.056 231.021C586.018 231.255 564.461 220.84 553.737 204.128C546.842 193.385 544.588 180.744 547.216 167.57C549.229 158.017 553.36 149.037 559.305 141.293C547.954 144.905 538.184 152.302 531.628 162.248C525.072 172.193 522.126 184.087 523.282 195.943C523.322 196.336 523.284 196.733 523.171 197.111C523.057 197.489 522.871 197.841 522.621 198.147C522.371 198.453 522.063 198.706 521.715 198.893C521.367 199.08 520.986 199.196 520.593 199.235C520.2 199.274 519.804 199.235 519.426 199.12C519.048 199.005 518.697 198.817 518.392 198.566C518.087 198.316 517.834 198.007 517.649 197.658C517.463 197.31 517.349 196.928 517.311 196.535C515.854 181.619 520.223 166.716 529.504 154.948C538.784 143.18 552.258 135.457 567.103 133.397C567.724 133.311 568.356 133.421 568.911 133.713C569.466 134.004 569.915 134.462 570.197 135.021C570.478 135.581 570.577 136.215 570.48 136.835C570.382 137.454 570.094 138.027 569.654 138.473C554.31 154.059 544.999 179.402 558.786 200.888C569.664 217.837 593.069 227.532 615.714 224.468C616.322 224.386 616.94 224.491 617.485 224.771C618.031 225.051 618.478 225.491 618.765 226.032C619.053 226.574 619.168 227.19 619.095 227.799C619.022 228.407 618.764 228.979 618.356 229.436C612.873 235.542 606.164 240.422 598.667 243.76C591.171 247.098 583.055 248.818 574.849 248.809V248.809Z",
            fill: "#6C63FF"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
            style: {
              cursor: 'pointer'
            },
            onClick: () => setTheme(theme === 'dark' ? 'light' : 'dark'),
            d: "M527.001 250C522.65 250 518.397 248.71 514.779 246.292C511.161 243.875 508.341 240.439 506.676 236.419C505.011 232.399 504.575 227.976 505.424 223.708C506.273 219.44 508.368 215.52 511.445 212.444C514.522 209.367 518.442 207.272 522.709 206.423C526.977 205.574 531.401 206.01 535.421 207.675C539.441 209.34 542.876 212.16 545.294 215.777C547.711 219.395 549.001 223.649 549.001 228C548.995 233.833 546.675 239.425 542.551 243.549C538.426 247.673 532.834 249.993 527.001 250V250ZM527.001 212C523.837 212 520.744 212.938 518.112 214.697C515.481 216.455 513.43 218.953 512.219 221.877C511.008 224.801 510.692 228.018 511.309 231.121C511.926 234.225 513.45 237.076 515.688 239.314C517.925 241.551 520.776 243.075 523.88 243.693C526.984 244.31 530.201 243.993 533.124 242.782C536.048 241.571 538.547 239.52 540.305 236.889C542.063 234.258 543.001 231.165 543.001 228C542.997 223.758 541.309 219.691 538.31 216.692C535.31 213.692 531.243 212.005 527.001 212V212Z",
            fill: "#6C63FF"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 144,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
            style: {
              cursor: 'pointer'
            },
            onClick: () => setTheme(theme === 'dark' ? 'light' : 'dark'),
            ref: manRef,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              d: "M8.69074 567.078C7.24546 566.853 5.86504 566.321 4.64182 565.518C3.4186 564.716 2.38077 563.662 1.59771 562.427C0.814652 561.191 0.304423 559.802 0.101157 558.354C-0.102109 556.905 0.00627512 555.43 0.419044 554.026L8.20737 527.546L20.042 529.765L20.5508 556.732C20.5791 558.232 20.2788 559.719 19.6709 561.091C19.063 562.462 18.1623 563.683 17.032 564.669C15.9017 565.655 14.5693 566.382 13.1283 566.798C11.6873 567.214 10.1727 567.31 8.69074 567.078V567.078Z",
              fill: "#9F616A"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 151,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              d: "M76.996 736.132L62.203 733.913L65.901 589.678L45.191 651.81L34.096 739.091L20.042 735.393L17.083 644.414L33.356 537.162L114.719 555.654L76.996 736.132Z",
              fill: "#0A1230"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 155,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              d: "M70.2046 771.636C67.3209 771.636 64.5553 770.491 62.5163 768.452C60.4772 766.413 59.3317 763.647 59.3317 760.763C59.3317 760.408 59.3491 760.053 59.3839 759.699L61.6811 736.345C61.7365 735.787 61.9281 735.251 62.2391 734.784C62.5501 734.317 62.9709 733.933 63.4647 733.667C67.8254 731.315 72.3096 731.885 76.8994 734.955C77.3066 735.229 77.6497 735.588 77.9052 736.007C78.1607 736.427 78.3226 736.896 78.3799 737.384L81.0017 759.482C81.1827 761.008 81.0385 762.554 80.5785 764.02C80.1185 765.485 79.3533 766.836 78.3332 767.985C77.3131 769.133 76.0613 770.052 74.6602 770.682C73.2591 771.311 71.7406 771.636 70.2046 771.636H70.2046Z",
              fill: "#0A1230"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 159,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              d: "M9.82084 769.898C8.42675 769.387 7.16714 768.565 6.13726 767.496C5.10738 766.426 4.33419 765.136 3.87616 763.724C3.41814 762.311 3.28727 760.813 3.49344 759.343C3.69962 757.872 4.23745 756.468 5.06626 755.236L20.8463 731.779C26.5348 727.697 29.9657 729.685 31.2995 737.313L34.4898 729.32L36.8936 731.942C38.1133 733.273 38.823 734.992 38.8971 736.795C38.9712 738.599 38.4049 740.37 37.2984 741.796L20.9304 766.706C19.6567 768.348 17.8938 769.542 15.8967 770.116C13.8996 770.689 11.7717 770.613 9.82084 769.898V769.898Z",
              fill: "#0A1230"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 163,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              d: "M109.542 398.105C121.797 398.105 131.732 388.17 131.732 375.915C131.732 363.659 121.797 353.725 109.542 353.725C97.2865 353.725 87.3517 363.659 87.3517 375.915C87.3517 388.17 97.2865 398.105 109.542 398.105Z",
              fill: "#9F616A"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 167,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              d: "M123.595 416.596L85.8723 409.2C90.7313 398.836 94.6225 395.33 90.3103 384.051H120.637C117.962 395.733 120.547 406.698 123.595 416.596Z",
              fill: "#9F616A"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 171,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              d: "M119.157 566.009L30.3973 540.86C48.1761 501.731 51.9 458.769 46.6287 413.356C46.5034 412.285 46.5904 411.199 46.8847 410.16C47.1791 409.122 47.6751 408.152 48.3443 407.306C49.0135 406.459 49.843 405.753 50.7852 405.227C51.7275 404.701 52.7641 404.366 53.8359 404.24C53.9357 404.229 54.0356 404.219 54.1358 404.211C65.7137 403.257 77.7844 402.033 90.3104 400.324L104.364 409.939L120.637 406.241C125.858 408.772 131.118 410.877 135.864 412.975C140.191 414.893 143.649 418.354 145.563 422.683C147.476 427.012 147.709 431.898 146.215 436.389C131.752 480.066 122.071 523.329 119.157 566.009Z",
              fill: "#E6E6E6"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 175,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              d: "M22.261 532.724L5.24866 530.505L45.5508 414.38C47.6008 408.473 52.6848 405.276 58.8745 404.392L64.7918 405.131L60.3538 473.92L22.261 532.724Z",
              fill: "#E6E6E6"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 179,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              d: "M155.525 510.524C152.692 510.742 149.863 510.06 147.441 508.574C145.019 507.089 143.128 504.877 142.038 502.253L125.814 463.195L139.128 415.117L142.648 417.357C142.987 417.572 143.322 417.794 143.652 418.02C148.593 421.481 152.442 426.283 154.746 431.858C157.049 437.434 157.711 443.552 156.654 449.491L153.182 469.852L167.505 500.605C166.777 503.294 165.235 505.69 163.089 507.466C160.944 509.243 158.302 510.311 155.525 510.524V510.524Z",
              fill: "#E6E6E6"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 183,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              d: "M111.248 343.027C115.04 343.201 118.733 344.288 122.014 346.196C122.769 346.636 122.42 348.219 123.117 348.736C123.995 349.386 125.902 348.991 126.68 349.753C129.19 352.203 131.123 355.182 132.338 358.474C133.552 361.765 134.018 365.285 133.702 368.779L132.464 381.09L129.543 377.896C124.306 372.089 117.035 368.519 109.238 367.927C108.906 367.904 108.574 367.887 108.242 367.874L110.489 363.941L106.584 367.847C104.802 367.866 103.024 368.011 101.263 368.28L104.251 363.05L98.5171 368.784L98.5166 368.785C96.1716 369.3 93.9805 370.36 92.1198 371.877C90.2591 373.395 88.7808 375.328 87.8042 377.522L87.1675 378.933L86.4542 367.188C86.3177 360.911 88.6805 354.837 93.0226 350.302C97.3647 345.767 103.331 343.142 109.608 343.006C110.155 342.994 110.702 343.001 111.248 343.027Z",
              fill: "#2F2E41"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 187,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              d: "M131.877 384.438C132.861 384.438 133.659 382.543 133.659 380.205C133.659 377.867 132.861 375.972 131.877 375.972C130.892 375.972 130.094 377.867 130.094 380.205C130.094 382.543 130.892 384.438 131.877 384.438Z",
              fill: "#9F616A"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 191,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              d: "M87.3195 383.101C88.3038 383.101 89.1017 381.206 89.1017 378.868C89.1017 376.53 88.3038 374.635 87.3195 374.635C86.3351 374.635 85.5372 376.53 85.5372 378.868C85.5372 381.206 86.3351 383.101 87.3195 383.101Z",
              fill: "#9F616A"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 195,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              d: "M174.034 435.419C175.455 435.767 176.785 436.414 177.936 437.317C179.086 438.22 180.031 439.359 180.706 440.656C181.382 441.954 181.772 443.381 181.852 444.841C181.931 446.302 181.698 447.763 181.168 449.126L171.16 474.85L159.556 471.634L161.338 444.721C161.437 443.225 161.863 441.768 162.585 440.453C163.307 439.139 164.308 437.998 165.518 437.111C166.728 436.225 168.117 435.614 169.588 435.322C171.059 435.029 172.577 435.063 174.034 435.419H174.034Z",
              fill: "#9F616A"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 199,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              d: "M160.579 509.055L142.087 497.22L157.62 465.414L176.851 472.811L167.236 500.918L160.579 509.055Z",
              fill: "#E6E6E6"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 203,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              d: "M173.001 409.101V284H171.001V409.101C169.787 409.349 168.709 410.039 167.974 411.037C167.24 412.035 166.902 413.27 167.027 414.503C167.151 415.735 167.729 416.878 168.648 417.709C169.567 418.54 170.762 419 172.001 419C173.241 419 174.435 418.54 175.355 417.709C176.274 416.878 176.852 415.735 176.976 414.503C177.101 413.27 176.763 412.035 176.029 411.037C175.294 410.039 174.216 409.349 173.001 409.101V409.101ZM172.001 417C171.408 417 170.828 416.824 170.335 416.494C169.841 416.165 169.457 415.696 169.23 415.148C169.003 414.6 168.943 413.997 169.059 413.415C169.175 412.833 169.461 412.298 169.88 411.879C170.3 411.459 170.834 411.173 171.416 411.058C171.998 410.942 172.601 411.001 173.15 411.228C173.698 411.455 174.166 411.84 174.496 412.333C174.826 412.827 175.001 413.407 175.001 414C175.001 414.795 174.684 415.558 174.122 416.12C173.559 416.683 172.797 416.999 172.001 417V417Z",
              fill: "#0A1230"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 204,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              d: "M170.435 164.569C169.29 164.569 168.193 164.115 167.384 163.306C166.575 162.497 166.121 161.399 166.121 160.255V147.314C166.122 146.171 166.578 145.075 167.387 144.268C168.195 143.46 169.292 143.007 170.435 143.007C171.578 143.007 172.674 143.46 173.483 144.268C174.291 145.075 174.747 146.171 174.748 147.314V160.255C174.748 160.822 174.637 161.383 174.42 161.906C174.203 162.43 173.885 162.905 173.485 163.306C173.084 163.706 172.609 164.024 172.085 164.241C171.562 164.458 171.001 164.569 170.435 164.569V164.569Z",
              fill: "#6C63FF"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 208,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              d: "M170.435 263.787C169.868 263.787 169.307 263.676 168.784 263.459C168.26 263.242 167.785 262.925 167.384 262.524C166.984 262.123 166.666 261.648 166.449 261.124C166.232 260.601 166.121 260.04 166.121 259.474V246.532C166.12 245.965 166.231 245.403 166.447 244.879C166.664 244.355 166.981 243.879 167.382 243.477C167.783 243.076 168.258 242.758 168.782 242.541C169.306 242.323 169.867 242.212 170.435 242.212C171.002 242.212 171.563 242.323 172.087 242.541C172.611 242.758 173.087 243.076 173.487 243.477C173.888 243.879 174.206 244.355 174.422 244.879C174.638 245.403 174.749 245.965 174.748 246.532V259.474C174.748 260.04 174.637 260.601 174.42 261.124C174.203 261.648 173.886 262.123 173.485 262.524C173.084 262.925 172.609 263.242 172.085 263.459C171.562 263.676 171.001 263.787 170.435 263.787V263.787Z",
              fill: "#6C63FF"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 212,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              d: "M200.939 177.203C200.085 177.203 199.251 176.95 198.542 176.476C197.833 176.002 197.28 175.328 196.953 174.54C196.627 173.752 196.541 172.885 196.708 172.048C196.874 171.211 197.285 170.442 197.888 169.839L207.039 160.688C207.848 159.88 208.945 159.426 210.089 159.427C211.233 159.427 212.329 159.882 213.138 160.69C213.947 161.499 214.401 162.596 214.402 163.739C214.402 164.883 213.948 165.98 213.14 166.789L203.989 175.94C203.589 176.341 203.113 176.659 202.59 176.876C202.066 177.093 201.505 177.204 200.939 177.203V177.203Z",
              fill: "#6C63FF"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 216,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              d: "M130.78 247.362C129.926 247.362 129.092 247.109 128.383 246.635C127.674 246.161 127.121 245.488 126.794 244.699C126.468 243.911 126.382 243.044 126.549 242.207C126.715 241.37 127.126 240.602 127.729 239.998L136.88 230.848C137.689 230.039 138.786 229.584 139.93 229.584C141.074 229.584 142.172 230.038 142.981 230.847C143.79 231.656 144.244 232.754 144.244 233.898C144.244 235.042 143.79 236.139 142.981 236.948L133.83 246.099C133.43 246.5 132.954 246.818 132.431 247.035C131.907 247.252 131.346 247.363 130.78 247.362V247.362Z",
              fill: "#6C63FF"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 220,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              d: "M226.514 207.708H213.573C212.43 207.706 211.334 207.251 210.527 206.442C209.719 205.633 209.266 204.537 209.266 203.394C209.266 202.251 209.719 201.154 210.527 200.346C211.334 199.537 212.43 199.082 213.573 199.08H226.514C227.081 199.079 227.643 199.19 228.167 199.406C228.691 199.623 229.168 199.94 229.569 200.341C229.97 200.742 230.289 201.218 230.506 201.741C230.723 202.265 230.835 202.827 230.835 203.394C230.835 203.961 230.723 204.522 230.506 205.046C230.289 205.57 229.97 206.046 229.569 206.446C229.168 206.847 228.691 207.165 228.167 207.381C227.643 207.597 227.081 207.708 226.514 207.708V207.708Z",
              fill: "#6C63FF"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 224,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              d: "M127.296 207.708H114.355C113.788 207.708 113.226 207.597 112.702 207.381C112.178 207.165 111.701 206.847 111.3 206.446C110.899 206.046 110.581 205.57 110.363 205.046C110.146 204.522 110.034 203.961 110.034 203.394C110.034 202.827 110.146 202.265 110.363 201.741C110.581 201.218 110.899 200.742 111.3 200.341C111.701 199.94 112.178 199.623 112.702 199.406C113.226 199.19 113.788 199.079 114.355 199.08H127.296C128.439 199.082 129.535 199.537 130.342 200.346C131.15 201.154 131.604 202.251 131.604 203.394C131.604 204.537 131.15 205.633 130.342 206.442C129.535 207.251 128.439 207.706 127.296 207.708H127.296Z",
              fill: "#6C63FF"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 228,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              d: "M210.09 247.362C209.523 247.363 208.962 247.252 208.438 247.035C207.915 246.818 207.439 246.5 207.039 246.099L197.888 236.948C197.487 236.548 197.169 236.072 196.951 235.549C196.734 235.025 196.622 234.464 196.622 233.897C196.621 233.33 196.733 232.769 196.949 232.245C197.166 231.721 197.484 231.245 197.885 230.844C198.286 230.443 198.762 230.125 199.286 229.909C199.809 229.692 200.371 229.58 200.938 229.581C201.505 229.581 202.066 229.693 202.589 229.91C203.113 230.128 203.589 230.446 203.989 230.848L213.14 239.998C213.743 240.602 214.154 241.37 214.32 242.207C214.487 243.044 214.401 243.911 214.075 244.7C213.748 245.488 213.195 246.161 212.486 246.635C211.777 247.11 210.943 247.363 210.09 247.363V247.362Z",
              fill: "#6C63FF"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 232,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              d: "M139.93 177.203C139.364 177.204 138.803 177.093 138.279 176.876C137.756 176.659 137.28 176.341 136.88 175.94L127.729 166.789C127.329 166.389 127.011 165.913 126.794 165.39C126.577 164.866 126.466 164.305 126.466 163.739C126.466 163.172 126.577 162.611 126.794 162.088C127.011 161.564 127.329 161.089 127.729 160.688C128.13 160.288 128.605 159.97 129.129 159.753C129.652 159.536 130.213 159.425 130.78 159.425C131.346 159.425 131.907 159.536 132.43 159.753C132.954 159.97 133.429 160.288 133.83 160.688L142.981 169.839C143.584 170.442 143.995 171.211 144.161 172.048C144.328 172.885 144.242 173.752 143.916 174.54C143.589 175.329 143.036 176.002 142.327 176.476C141.617 176.95 140.783 177.203 139.93 177.203V177.203Z",
              fill: "#6C63FF"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 236,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              d: "M170.435 229.277C165.315 229.277 160.311 227.759 156.055 224.915C151.798 222.071 148.481 218.028 146.522 213.299C144.563 208.569 144.05 203.365 145.049 198.344C146.048 193.323 148.513 188.711 152.133 185.092C155.752 181.472 160.364 179.007 165.385 178.008C170.406 177.009 175.61 177.522 180.34 179.481C185.069 181.44 189.111 184.757 191.955 189.014C194.8 193.27 196.318 198.275 196.318 203.394C196.31 210.256 193.58 216.835 188.728 221.687C183.876 226.54 177.297 229.269 170.435 229.277V229.277ZM170.435 186.138C167.022 186.138 163.686 187.15 160.848 189.046C158.01 190.942 155.799 193.637 154.493 196.79C153.187 199.943 152.845 203.413 153.511 206.76C154.177 210.107 155.82 213.182 158.233 215.595C160.646 218.008 163.721 219.652 167.068 220.317C170.415 220.983 173.885 220.642 177.038 219.336C180.191 218.03 182.886 215.818 184.782 212.98C186.678 210.143 187.69 206.806 187.69 203.394C187.685 198.819 185.865 194.433 182.63 191.198C179.395 187.963 175.009 186.144 170.435 186.138V186.138Z",
              fill: "#6C63FF"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 240,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 150,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 7
    }, undefined), router.pathname.includes('/startup-idea') || router.pathname.includes('/business-plan') || router.pathname.includes('/cash-flow') || router.pathname.includes('/competitors') ?
    /*#__PURE__*/
    // <div className="h-full w-full overflow-hidden bg-background dark:bg-secondary">
    //   {' '}
    //   <div className="h-screen w-20 bg-background dark:bg-secondary fixed z-0 overflow-hidden"></div>
    // </div>
    Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "h-full w-full overflow-hidden bg-background dark:bg-secondary",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        ref: navRef,
        onMouseEnter: mouseEnterNav,
        onMouseLeave: mouseLeaveNav,
        className: "h-screen w-20 bg-background dark:bg-secondary fixed z-0 overflow-hidden",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "mt-6 w-52 grid grid-cols-80px items-center hover:opacity-100",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
            href: "/dashboard/welcome",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
              onClick: activeClassFn1,
              onMouseEnter: () => setActiveHover1(true),
              onMouseLeave: () => setActiveHover1(false),
              height: "45",
              width: "45",
              className: `fill-current text-primarydark dark:text-background block m-auto opacity-50 hover:opacity-100 cursor-pointer ${activeClass1 ? 'opacity-100' : 'opacity-50'}`,
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 128 128",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("defs", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("style", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 280,
                  columnNumber: 21
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 279,
                columnNumber: 19
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
                children: "See You Soon"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 282,
                columnNumber: 19
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
                id: "See_You_Soon",
                "data-name": "See You Soon",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                  className: "cls-1",
                  d: "M84.87,77.27l-7-41.18a6.6,6.6,0,0,0-13.1,1.58l1.83,24.6L56.93,36a6.73,6.73,0,0,0-12.78,4.17L51.82,67,40.57,48a6.45,6.45,0,0,0-11.41,6l8.33,18.24-4.57-6.45a6.48,6.48,0,0,0-10.9,7l21.25,36.71c.32.59,8,14.54,23.14,14.54,20.07,0,29.74-15.17,32.11-29.36,2.22-13.34,4.59-22,7.68-28.22C111.74,55.36,96.37,44.67,84.87,77.27Zm19.5-11.74c-3.18,6.36-5.61,15.24-7.87,28.79C94.28,107.69,85.2,122,66.41,122c-13.86,0-21.27-13.34-21.36-13.5L23.79,71.75A4.44,4.44,0,0,1,31.26,67L42.1,82.27a1,1,0,0,0,1.76-1L31,53.14a4.41,4.41,0,0,1,7.8-4.08L54.1,74.84A1,1,0,0,0,56,74L46.12,39.6A4.68,4.68,0,0,1,55,36.69L67.22,69.78a1,1,0,0,0,2-.43L66.84,37.52a4.56,4.56,0,0,1,9-1.09L83.55,81.7a1,1,0,0,0,2,.11c0-.17,5.17-17.84,12.54-22.75C104.93,54.49,106.48,61.32,104.37,65.53Z"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 284,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                  className: "cls-1",
                  d: "M127,67h-8a1,1,0,0,0,0,2h8A1,1,0,0,0,127,67Z"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 288,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                  className: "cls-1",
                  d: "M9,67H1a1,1,0,0,0,0,2H9A1,1,0,0,0,9,67Z"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 289,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                  className: "cls-1",
                  d: "M65,13V5a1,1,0,0,0-2,0v8A1,1,0,0,0,65,13Z"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 290,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                  className: "cls-1",
                  d: "M111.63,41.52c.39,0-.09.21,7.44-4.14a1,1,0,0,0-1-1.76l-6.93,4A1,1,0,0,0,111.63,41.52Z"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 291,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                  className: "cls-1",
                  d: "M15.86,94.62l-6.93,4a1,1,0,0,0,1,1.76l6.93-4A1,1,0,0,0,15.86,94.62Z"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 292,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                  className: "cls-1",
                  d: "M16.88,39.62l-6.93-4a1,1,0,0,0-1,1.76l6.93,4A1,1,0,0,0,16.88,39.62Z"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 293,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                  className: "cls-1",
                  d: "M119.07,98.62l-6.93-4a1,1,0,0,0-1,1.76l6.93,4A1,1,0,0,0,119.07,98.62Z"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 294,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                  className: "cls-1",
                  d: "M35.62,20.88a1,1,0,0,0,1.76-1l-4-6.93a1,1,0,0,0-1.76,1Z"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 295,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                  className: "cls-1",
                  d: "M92.38,20.88l4-6.93a1,1,0,0,0-1.76-1l-4,6.93A1,1,0,0,0,92.38,20.88Z"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 296,
                  columnNumber: 21
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 283,
                columnNumber: 19
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 267,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 266,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
            href: "/dashboard/welcome",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              onClick: activeClassFn1,
              className: `text-primarydark dark:text-background ml-1 cursor-pointer opacity-50 ${activeHover1 ? 'opacity-100' : 'opacity-50'} ${activeClass1 ? 'opacity-100' : 'opacity-50'}`,
              children: "Welcome"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 301,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 300,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 265,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "mt-6 w-52 grid grid-cols-80px items-center",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
            href: "/dashboard/startup",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
              onClick: activeClassFn2,
              onMouseEnter: () => setActiveHover2(true),
              onMouseLeave: () => setActiveHover2(false),
              height: "45",
              width: "45",
              className: `fill-current text-primarydark dark:text-background block m-auto opacity-50 hover:opacity-100 cursor-pointer ${activeClass2 ? 'opacity-100' : 'opacity-50'}`,
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 128 128",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("defs", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("style", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 326,
                  columnNumber: 21
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 325,
                columnNumber: 19
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
                children: "Landing Success"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 328,
                columnNumber: 19
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
                id: "Landing_Success",
                "data-name": "Landing Success",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                  className: "cls-1",
                  d: "M109.3,90.1A46,46,0,0,0,65,36V20.08c1.78-.62,7.21-2.14,12.57.23a19.33,19.33,0,0,0,14.82,0c.87-.38.61.31.61-17.93a1,1,0,0,0-1.43-.93c-.07,0-6.69,2.87-13.18,0A19.41,19.41,0,0,0,65,.93,1,1,0,0,0,63,1V36a45.86,45.86,0,0,0-28.66,10.8C16.18,40.48,4,40,.79,45.51-2.29,50.86,3.94,59.3,10,65.68A11,11,0,0,0,18,83c.81,38.41,46.08,59.2,75.66,34.21,8.53,3,29,9.15,33.55,1.31C130.39,113,123.86,102.65,109.3,90.1ZM77.59,3.31A19.39,19.39,0,0,0,91,3.83V18.68c-1.79.62-7.22,2.13-12.57-.23A19.19,19.19,0,0,0,65,17.93V3.08C66.81,2.46,72.24,1,77.59,3.31ZM65,45v-7c39.69.91,58,50.27,28.21,76.81C71.32,107,46,92.66,27.77,78.64a11,11,0,0,0-3.2-16.13A43.88,43.88,0,0,1,63,38.06V45A1,1,0,0,0,65,45ZM32.55,48.36a46.21,46.21,0,0,0-9.83,13.28,10.93,10.93,0,0,0-11.4,2.47C-8.39,43.23,5.23,39.08,32.55,48.36ZM10,72a9,9,0,1,1,9,9A9,9,0,0,1,10,72Zm10,11a11,11,0,0,0,6.34-2.82c18.45,14.21,43.45,28.35,65.05,36.22C63,139.16,20.83,119.1,20.05,83Zm105.4,34.5c-2.51,4.35-14,3.62-30-1.85a45.61,45.61,0,0,0,13.42-23.21C121.59,103.58,128,113.12,125.45,117.47Z"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 330,
                  columnNumber: 21
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 329,
                columnNumber: 19
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 313,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 312,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
            href: "/dashboard/startup",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              onClick: activeClassFn2,
              className: `text-primarydark dark:text-background ml-1 cursor-pointer opacity-50 ${activeHover2 ? 'opacity-100' : 'opacity-50'} ${activeClass2 ? 'opacity-100' : 'opacity-50'}`,
              children: "Startup idea"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 338,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 337,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 311,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "mt-6 w-52 grid grid-cols-80px items-center",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
            onClick: activeClassFn3,
            onMouseEnter: () => setActiveHover3(true),
            onMouseLeave: () => setActiveHover3(false),
            height: "45",
            width: "45",
            className: `fill-current text-primarydark dark:text-background block m-auto opacity-50 hover:opacity-100 cursor-pointer ${activeClass3 ? 'opacity-100' : 'opacity-50'}`,
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 128 128",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("defs", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("style", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 362,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 361,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
              children: "Searching"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 364,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
              id: "Searching",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                className: "cls-1",
                d: "M79.57,36.43a22,22,0,1,0,0,31.14A22,22,0,0,0,79.57,36.43Zm-1.44,29.7a20,20,0,1,1,0-28.26A20,20,0,0,1,78.13,66.13Z"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 366,
                columnNumber: 19
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                className: "cls-1",
                d: "M117,0H31A11,11,0,0,0,20,11v97H1a1,1,0,0,0-1,1v8a11,11,0,0,0,11,11H97a11,11,0,0,0,11-11V104a3.42,3.42,0,0,0,2.41-1c4.71-4.71,5.59-5.13,5.59-7s-.66-2.08-8-9.42V20h19a1,1,0,0,0,1-1V11A11,11,0,0,0,117,0ZM90.62,126H11a9,9,0,0,1-9-9v-7H86C86,116.29,85,122,90.62,126ZM114,96c0,.79,0,.61-5,5.57a1.43,1.43,0,0,1-2,0L86.43,81a1.38,1.38,0,0,1,0-2c5.07-5.07,4.8-5,5.57-5s-.17-.75,14.28,13.7C113.87,95.31,114,95.11,114,96ZM82.37,70.37a26,26,0,1,1,0-36.74A26,26,0,0,1,82.37,70.37Zm2.79,0,3.52,3.52-2.8,2.8-3.52-3.52A26.44,26.44,0,0,0,85.16,70.36ZM94.43,73a3.53,3.53,0,0,0-4.23-.47l-3.75-3.75C100.27,50.28,87,24,64,24A28,28,0,0,0,36,52c0,23.37,26.71,36,44.79,22.45l3.73,3.74A3.41,3.41,0,0,0,85,82.43c22.22,22.23,20.57,20.61,21,20.92V117a9,9,0,0,1-18,0v-8a1,1,0,0,0-1-1H22V11a9,9,0,0,1,9-9c85.6,0,79.74-.08,79.41.17a11,11,0,0,0-4.14,6.32c-.41,1.77-.29-4.19-.29,76ZM126,18H108V11a9,9,0,0,1,18,0Z"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 370,
                columnNumber: 19
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 365,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 349,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            onClick: activeClassFn3,
            className: `text-primarydark dark:text-background ml-1 cursor-pointer opacity-50 ${activeHover3 ? 'opacity-100' : 'opacity-50'} ${activeClass3 ? 'opacity-100' : 'opacity-50'}`,
            children: "Business plan"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 376,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 348,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "mt-6 w-52 grid grid-cols-80px items-center",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
            onClick: activeClassFn4,
            onMouseEnter: () => setActiveHover4(true),
            onMouseLeave: () => setActiveHover4(false),
            height: "45",
            width: "45",
            className: `fill-current text-primarydark dark:text-background block m-auto opacity-50 hover:opacity-100 cursor-pointer ${activeClass4 ? 'opacity-100' : 'opacity-50'}`,
            id: "Data_User",
            "data-name": "Data User",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 128 128",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("defs", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("style", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 402,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 401,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
              children: "Data User"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 404,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              className: "cls-1",
              d: "M109,0H23a9,9,0,0,0-9,9c0,118,0,110,0,110.64A9.22,9.22,0,0,0,23.31,128H109a5,5,0,0,0,5-5V5A5,5,0,0,0,109,0Zm3,5V107a3,3,0,0,1-3,3H26V2h83A3,3,0,0,1,112,5ZM16,9a7,7,0,0,1,7-7h1V110H23a9,9,0,0,0-6.94,3.26C16,113.34,16,118.28,16,9Zm96,114a3,3,0,0,1-3,3H23.31c-6.13,0-9.56-6.94-5.68-11.43A6.91,6.91,0,0,1,23,112c90.91,0,87.06.44,89-1Z"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 405,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              className: "cls-1",
              d: "M56.15,75.81A33,33,0,1,0,35,45,33.05,33.05,0,0,0,56.15,75.81Zm-7.53-6.68c5.89-22.82,32.86-22.83,38.76,0A30.88,30.88,0,0,1,48.62,69.13ZM68,14c28.07,0,41.61,34.51,21.09,53.65C86.56,59,80.82,52.83,73.57,50.75a13,13,0,1,0-11.14,0c-7.25,2.08-13,8.24-15.52,16.92C26.45,48.69,39.8,14,68,14Zm0,36A11,11,0,1,1,79,39,11,11,0,0,1,68,50Z"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 409,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              className: "cls-1",
              d: "M96.5,87h-56a1,1,0,0,0,0,2h56A1,1,0,0,0,96.5,87Z"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 413,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              className: "cls-1",
              d: "M96.5,99h-56a1,1,0,0,0,0,2h56A1,1,0,0,0,96.5,99Z"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 414,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 387,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            onClick: activeClassFn4,
            className: `text-primarydark dark:text-background ml-1 cursor-pointer opacity-50 ${activeHover4 ? 'opacity-100' : 'opacity-50'} ${activeClass4 ? 'opacity-100' : 'opacity-50'}`,
            children: "Account"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 418,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 385,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "mt-6 w-52 grid grid-cols-80px items-center absolute bottom-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
            onClick: activeClassFn5,
            onMouseEnter: () => setActiveHover5(true),
            onMouseLeave: () => setActiveHover5(false),
            height: "45",
            width: "45",
            className: `fill-current text-primarydark dark:text-background block m-auto opacity-50 hover:opacity-100 cursor-pointer ${activeClass5 ? 'opacity-100' : 'opacity-50'}`,
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 128 128",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("defs", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("style", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 442,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 441,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
              children: "Log Out"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 444,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
              id: "Log_Out",
              "data-name": "Log Out",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                className: "cls-1",
                d: "M44,61v6a1,1,0,0,0,2,0V61A1,1,0,0,0,44,61Z"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 446,
                columnNumber: 19
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                className: "cls-1",
                d: "M113,113H86V75h6v9a1,1,0,0,0,1,1c.64,0-.83,1.26,20.72-20.3a1,1,0,0,0,0-1.44l-20-20A1,1,0,0,0,92,44v9H86V14a1,1,0,0,0-1-1H54V1a1,1,0,0,0-1.35-1l-38,13A1,1,0,0,0,14,14c0,106.58-.38,100.6.69,101C55.34,128.88,52.74,128,53,128a1,1,0,0,0,1-1V115h59A1,1,0,0,0,113,113ZM93,55a1,1,0,0,0,1-1V46.46L111.56,64,94,81.54V74a1,1,0,0,0-1-1H54V55ZM54,21H77V53H54Zm30-6V53H79V20a1,1,0,0,0-1-1H54V15ZM52,125.57l-36-12.3V14.73L52,2.43ZM54,75H77v38H54Zm25,38V75h5v38Z"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 447,
                columnNumber: 19
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 445,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 429,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            onClick: activeClassFn5,
            className: `text-primarydark dark:text-background ml-1 cursor-pointer opacity-50 ${activeHover5 ? 'opacity-100' : 'opacity-50'} ${activeClass5 ? 'opacity-100' : 'opacity-50'}`,
            children: "Log out"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 453,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 428,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 259,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 9
    }, undefined), children]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 128,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (DesktopNavbar);

/***/ }),

/***/ "./components/dashboard/MembersCode.js":
/*!*********************************************!*\
  !*** ./components/dashboard/MembersCode.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/firebase */ "./lib/firebase.js");
/* harmony import */ var _lib_newAuth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/newAuth */ "./lib/newAuth.js");
/* harmony import */ var _startup_project_business_app_tippys_ManagerTippy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./startup/project/business-app/tippys/ManagerTippy */ "./components/dashboard/startup/project/business-app/tippys/ManagerTippy.js");
/* harmony import */ var react_spinners_BounceLoader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-spinners/BounceLoader */ "react-spinners/BounceLoader");
/* harmony import */ var react_spinners_BounceLoader__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_spinners_BounceLoader__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "C:\\off-saas\\components\\dashboard\\MembersCode.js";







const MembersCodeComponent = () => {
  const {
    0: projectIdInputValue,
    1: setProjectIdInputValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: projectLoading,
    1: setProjectLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    currentUser
  } = Object(_lib_newAuth__WEBPACK_IMPORTED_MODULE_4__["useAuth"])();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();

  const onNewProjectAdd = async () => {
    // Fetch particular project
    try {
      const data = await _lib_firebase__WEBPACK_IMPORTED_MODULE_3__["db"].collection('projects').doc(projectIdInputValue).get();
      const projectData = data.data();

      if (projectData.uid === currentUser.uid) {
        alert('You are already a member of this project!');
        return;
      } else {
        setProjectLoading(true); // Fetch particular user

        const usersData = await _lib_firebase__WEBPACK_IMPORTED_MODULE_3__["db"].collection('users').doc(currentUser.uid).get();
        const {
          name,
          userCountry,
          formatedUser
        } = usersData.data(); // Update particular project users

        const newUsersArray = projectData.projectUsers;
        newUsersArray.push({
          email: formatedUser.email,
          stripeRole: formatedUser.stripeRole,
          token: formatedUser.token,
          userUid: formatedUser.uid,
          userName: name,
          userCountry
        }); // Update firebase

        await _lib_firebase__WEBPACK_IMPORTED_MODULE_3__["db"].collection('projects').doc(projectIdInputValue).update({
          projectUsers: newUsersArray
        }); // Page reload

        router.reload();
        setProjectLoading(false);
      }
    } catch {
      alert('Your project code is invalid');
      return;
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "z-50 text-primarydark rounded-2xl mb-32 flex flex-col",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "flex",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "text-lg dark:text-background",
        children: "Become a project member"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_startup_project_business_app_tippys_ManagerTippy__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "py-8 px-8 mt-1 w-full flex justify-between items-center border-r-6 rounded-2xl bg-white dark:bg-background",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        value: projectIdInputValue,
        onChange: e => setProjectIdInputValue(e.target.value),
        placeholder: "project code",
        className: "w-8/12 bg-white text-base focus:outline-none text-gray"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, undefined), projectLoading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_spinners_BounceLoader__WEBPACK_IMPORTED_MODULE_6___default.a, {
        color: '#6C63FF',
        size: 38
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 11
      }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: onNewProjectAdd,
        className: "hover:bg-primary hover:text-white dark:hover:bg-primarydark dark:hover:text-background focus:outline-none border border-primary text-primary text-sm font-light py-2 px-6 rounded-2xl dark:text-primarydark dark:border-primarydark",
        children: "Add Project"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (MembersCodeComponent);

/***/ }),

/***/ "./components/dashboard/NavbarTemplate.js":
/*!************************************************!*\
  !*** ./components/dashboard/NavbarTemplate.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_newAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/newAuth */ "./lib/newAuth.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _DesktopNavbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DesktopNavbar */ "./components/dashboard/DesktopNavbar.js");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gsap */ "gsap");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_useWindowSize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/useWindowSize */ "./utils/useWindowSize.js");


var _jsxFileName = "C:\\off-saas\\components\\dashboard\\NavbarTemplate.js";







const Redirect = ({
  to
}) => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    router.push(to);
  }, [to]);
  return null;
};

const NavbarTemplate = ({
  children
}) => {
  // Mobile friendly
  const size = Object(_utils_useWindowSize__WEBPACK_IMPORTED_MODULE_6__["useWindowSize"])();
  const activeHover = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_DesktopNavbar__WEBPACK_IMPORTED_MODULE_4__["IsActiveContext"]);
  const {
    currentUser
  } = Object(_lib_newAuth__WEBPACK_IMPORTED_MODULE_2__["useAuth"])();
  const contentRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  const activeClass = activeHover ? 'ml-52' : 'ml-20';

  if (activeHover) {
    gsap__WEBPACK_IMPORTED_MODULE_5___default.a.to(contentRef.current, {
      marginLeft: '208px',
      ease: gsap__WEBPACK_IMPORTED_MODULE_5__["Power4"].easeOut // duration: 1

    });
  } else {
    gsap__WEBPACK_IMPORTED_MODULE_5___default.a.to(contentRef.current, {
      marginLeft: '80px',
      ease: gsap__WEBPACK_IMPORTED_MODULE_5__["Power4"].easeOut
    });
  }

  if (!currentUser) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Redirect, {
      to: "/"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 12
    }, undefined);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: size.width < 860 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: children
    }, void 0, false) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      ref: contentRef,
      className: `relative h-full ${activeClass} bg-background dark:bg-secondary`,
      style: {
        transitionTimingFunction: 'linear',
        transitionDuration: '200ms',
        transitionProperty: 'width, margin-left'
      },
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (NavbarTemplate);

/***/ }),

/***/ "./components/dashboard/Tippy.js":
/*!***************************************!*\
  !*** ./components/dashboard/Tippy.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "gsap");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tippyjs_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tippyjs/react */ "@tippyjs/react");
/* harmony import */ var _tippyjs_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tippyjs_react__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\off-saas\\components\\dashboard\\Tippy.js";




const TippyMonster = ({
  setTippyHelper,
  setWrongNameTippyHelper,
  wrongName,
  projectCreator,
  cashFlow,
  businessPlan,
  projectManager,
  contentClass,
  contentText,
  contentText1,
  startups,
  market,
  model,
  success,
  tippyMonster,
  setTippyMonster,
  setCurrentTippy,
  emptyInput,
  initialModal,
  vision,
  product,
  finances,
  welcome
}) => {
  const {
    0: visible,
    1: setVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const contentRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  const tippyRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(); // const [emptyInput, setEmptyInput] = useState(false);

  const show = () => {
    gsap__WEBPACK_IMPORTED_MODULE_2___default.a.fromTo(tippyRef.current, {
      autoAlpha: 0,
      scale: 0
    }, {
      autoAlpha: 1,
      scale: 1,
      duration: 1,
      transformOrigin: 'bottom right',
      ease: gsap__WEBPACK_IMPORTED_MODULE_2__["Power4"].easeOut
    });
    setVisible(true);
    emptyInput && setCurrentTippy(true);
  };

  const hide = async () => {
    await gsap__WEBPACK_IMPORTED_MODULE_2___default.a.to(tippyRef.current, {
      autoAlpha: 0,
      scale: 0,
      duration: 1,
      transformOrigin: 'bottom right',
      ease: gsap__WEBPACK_IMPORTED_MODULE_2__["Power4"].easeIn
    });
    emptyInput && setTippyMonster(false);
    setVisible(false);
    emptyInput && setCurrentTippy(false);
    tippyMonster && setTippyHelper(false);
    wrongName && setWrongNameTippyHelper(false);
  };

  const onImageClick = () => {
    if (!tippyMonster) {
      visible ? hide() : show();
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    // GSAP
    gsap__WEBPACK_IMPORTED_MODULE_2___default.a.fromTo(contentRef.current, {
      autoAlpha: 0
    }, {
      autoAlpha: 1,
      duration: 2,
      transformOrigin: 'bottom right',
      ease: gsap__WEBPACK_IMPORTED_MODULE_2__["Power4"].easeOut
    }); // TIPPY

    setVisible(true);
    emptyInput && setCurrentTippy(true);
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_tippyjs_react__WEBPACK_IMPORTED_MODULE_3___default.a // trigger={tippyMonster}
  , {
    zIndex: visible || tippyMonster ? 40 : 0,
    onShow: show,
    animation: "fade",
    duration: 500,
    touch: true,
    visible: visible || tippyMonster,
    onClickOutside: hide,
    offset: market || model || success || tippyMonster || wrongName ? [-265, -65] : [-220, -65] // placement='left-end'
    ,
    interactive: true,
    content: wrongName && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      ref: tippyRef,
      className: "h-16 w-96 shadow-lg rounded-2xl bg-red flex justify-center items-center focus:outline-none",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "p-4 text-sm text-center text-white flex justify-center items-center",
        children: "Ops, unfortunately you already have a project with that name!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex items-center justify-center flex-wrap gap-2 mt-2"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 11
    }, undefined) || tippyMonster && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      ref: tippyRef,
      className: "h-12 w-96 shadow-lg rounded-2xl bg-red flex justify-center items-center focus:outline-none",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "py-4 px-2 text-sm text-center text-white flex justify-center items-center",
        children: ["Oops, you have to provide all the information", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "/project-create/sad.svg",
          height: 18,
          width: 18,
          className: "ml-2 inline-block relative"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 15
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex items-center justify-center flex-wrap gap-2 mt-2"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 11
    }, undefined) || /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      ref: tippyRef,
      className: `focus:outline-none ${contentClass}`,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "text-primarydark p-4 text-sm text-center text-white",
        children: [contentText, startups && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/emojis/cocount.svg",
            height: 22,
            width: 22,
            className: "inline-block"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 19
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "inline-block",
            children: "."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 19
          }, undefined)]
        }, void 0, true), initialModal && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/emojis/hammer.svg",
            height: 22,
            width: 22,
            className: "inline-block"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 19
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "inline-block",
            children: "."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 19
          }, undefined)]
        }, void 0, true), vision && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/emojis/desert.svg",
            height: 22,
            width: 22,
            className: "inline-block relative bottom-0.5"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 19
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "inline-block",
            children: "."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 19
          }, undefined)]
        }, void 0, true), product && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/emojis/ox.svg",
            height: 22,
            width: 22,
            className: "inline-block relative bottom-0.5"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 19
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "inline-block",
            children: "."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 19
          }, undefined)]
        }, void 0, true), market && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/emojis/whale.svg",
            height: 22,
            width: 22,
            className: "inline-block"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 19
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "inline-block",
            children: "."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 19
          }, undefined)]
        }, void 0, true), finances && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/emojis/unicorn.svg",
            height: 22,
            width: 22,
            className: "inline-block relative bottom-0.5"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 19
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "inline-block",
            children: "."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 19
          }, undefined)]
        }, void 0, true), model && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/emojis/pirat.svg",
            height: 22,
            width: 22,
            className: "inline-block"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 19
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "inline-block",
            children: "."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 148,
            columnNumber: 19
          }, undefined)]
        }, void 0, true), success && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/emojis/star.svg",
            height: 22,
            width: 22,
            className: "inline-block"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 153,
            columnNumber: 19
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "inline-block",
            children: "!"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 154,
            columnNumber: 19
          }, undefined)]
        }, void 0, true), welcome && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/gifs/hello-hand.gif",
            height: 22,
            width: 22,
            className: "inline-block"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 159,
            columnNumber: 19
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "inline-block",
            children: "."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 160,
            columnNumber: 19
          }, undefined)]
        }, void 0, true), projectManager && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/project-manager/octopus.svg",
            height: 20,
            width: 20,
            className: "inline-block relative bottom-0.5"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 165,
            columnNumber: 19
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "inline-block",
            children: "."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 166,
            columnNumber: 19
          }, undefined)]
        }, void 0, true), businessPlan && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/business-model/grow.svg",
            height: 20,
            width: 20,
            className: "inline-block relative bottom-0.5 left-1"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 171,
            columnNumber: 19
          }, undefined)
        }, void 0, false), cashFlow && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/cash-flow/tippy.svg",
            height: 20,
            width: 20,
            className: "inline-block relative bottom-0.5 left-1"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 177,
            columnNumber: 19
          }, undefined)
        }, void 0, false), projectCreator && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/project-create/bulb.svg",
            height: 20,
            width: 20,
            className: "inline-block relative bottom-0.5 left-1"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 183,
            columnNumber: 19
          }, undefined)
        }, void 0, false), contentText1 && contentText1, startups && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/emojis/balloon.svg",
            height: 22,
            width: 22,
            className: "inline-block"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 193,
            columnNumber: 19
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "inline-block",
            children: "."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 194,
            columnNumber: 19
          }, undefined)]
        }, void 0, true), vision && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/emojis/camel.svg",
            height: 22,
            width: 22,
            className: "inline-block"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 199,
            columnNumber: 19
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "inline-block",
            children: "."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 200,
            columnNumber: 19
          }, undefined)]
        }, void 0, true), product && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/emojis/map.svg",
            height: 22,
            width: 22,
            className: "inline-block"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 205,
            columnNumber: 19
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "inline-block",
            children: "."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 206,
            columnNumber: 19
          }, undefined)]
        }, void 0, true), market && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/emojis/island.svg",
            height: 22,
            width: 22,
            className: "inline-block"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 211,
            columnNumber: 19
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "inline-block",
            children: "."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 212,
            columnNumber: 19
          }, undefined)]
        }, void 0, true), finances && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/emojis/construction.svg",
            height: 22,
            width: 22,
            className: "inline-block"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 217,
            columnNumber: 19
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "inline-block",
            children: "."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 218,
            columnNumber: 19
          }, undefined)]
        }, void 0, true), model && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/emojis/popper.svg",
            height: 22,
            width: 22,
            className: "inline-block relative bottom-0.5"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 223,
            columnNumber: 19
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "inline-block",
            children: "!"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 224,
            columnNumber: 19
          }, undefined)]
        }, void 0, true), welcome && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/gifs/rocket.gif",
            height: 22,
            width: 22,
            className: "inline-block"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 229,
            columnNumber: 19
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "inline-block",
            children: "!"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 230,
            columnNumber: 19
          }, undefined)]
        }, void 0, true), projectManager && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/project-manager/flower.svg",
            height: 18,
            width: 18,
            className: "inline-block relative bottom-0.5"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 235,
            columnNumber: 19
          }, undefined)
        }, void 0, false)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex items-center justify-center flex-wrap gap-2 mt-2"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 241,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 11
    }, undefined),
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "fixed flex flex-wrap m-2 bottom-4 right-2 z-50",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: "/monsters/monster-two.svg",
        height: 66,
        width: 60,
        className: "cursor-pointer z-50",
        onClick: onImageClick
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 247,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 75,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (TippyMonster);

/***/ }),

/***/ "./components/dashboard/startup/AnimatedBackground.js":
/*!************************************************************!*\
  !*** ./components/dashboard/startup/AnimatedBackground.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\off-saas\\components\\dashboard\\startup\\AnimatedBackground.js";


const AnimatedBackground = ({
  children
}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
  className: "area",
  children: [children, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
    className: "circles",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 4,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (AnimatedBackground);

/***/ }),

/***/ "./components/dashboard/startup/EmptyStartup.js":
/*!******************************************************!*\
  !*** ./components/dashboard/startup/EmptyStartup.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\off-saas\\components\\dashboard\\startup\\EmptyStartup.js";




const EmptyStartup = ({
  onProjectCreate
}) => {
  // useEffect(() => {
  //   gsap.fromTo(
  //     containerRef.current,
  //     { autoAlpha: 0 },
  //     { autoAlpha: 1, duration: 2, ease: Power4.easeOut }
  //   );
  // }, [])
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "w-full flex flex-col justify-center items-center border-r-6 rounded-2xl bg-white mt-8 dark:bg-background",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
      height: 200,
      width: 200,
      src: "/launch-maker.svg"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      className: "text-secondary text-base text-gray",
      children: "It looks like you have no any startups yet \uD83D\uDD0E"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "p-4",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/dashboard/startup/creator",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          onClick: onProjectCreate,
          className: "hover:bg-primary hover:text-white dark:hover:bg-primarydark dark:hover:text-background focus:outline-none border border-primary text-primary dark:text-primarydark dark:border-primarydark text-sm font-light py-2 px-6 rounded-2xl m-2",
          children: "Create your first startup"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (EmptyStartup);

/***/ }),

/***/ "./components/dashboard/startup/ExitComponent.js":
/*!*******************************************************!*\
  !*** ./components/dashboard/startup/ExitComponent.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-device-detect */ "react-device-detect");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_device_detect__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ "gsap");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\off-saas\\components\\dashboard\\startup\\ExitComponent.js";





const ExitComponent = () => {
  const exitImage = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (!react_device_detect__WEBPACK_IMPORTED_MODULE_2__["isMobile"]) {
      exitImage.current.addEventListener('mouseenter', () => {
        gsap__WEBPACK_IMPORTED_MODULE_3___default.a.to(exitImage.current, {
          rotation: '180_cw',
          duration: 0.5,
          ease: gsap__WEBPACK_IMPORTED_MODULE_3__["Linear"].easeIn
        });
      });
      exitImage.current.addEventListener('mouseleave', () => {
        gsap__WEBPACK_IMPORTED_MODULE_3___default.a.to(exitImage.current, {
          rotation: '0_cw',
          duration: 0.5,
          ease: gsap__WEBPACK_IMPORTED_MODULE_3__["Linear"].easeIn
        });
      });
    }
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
    ref: exitImage,
    onClick: () => next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push(`/dashboard/projects/${next_router__WEBPACK_IMPORTED_MODULE_4___default.a.query.project}`),
    src: "/business-model/back4.svg",
    height: 28,
    width: 28,
    className: "fixed left-6 top-3 cursor-pointer z-50"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ExitComponent);

/***/ }),

/***/ "./components/dashboard/startup/PDFDocument.js":
/*!*****************************************************!*\
  !*** ./components/dashboard/startup/PDFDocument.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! file-saver */ "file-saver");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-pdf/renderer */ "@react-pdf/renderer");
/* harmony import */ var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\off-saas\\components\\dashboard\\startup\\PDFDocument.js";

 // const image = avatarExists != 'blank' ? avatarExists : imageNameExists;
// console.log(image);

const MyDocument1 = ({
  data
}) => {
  console.log('data --> ', data);
  _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Font"].register({
    src: '/fonts/poppins.ttf',
    family: 'Poppins'
  });
  _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Font"].register({
    src: '/fonts/comfortaa.ttf',
    family: 'Comfortaa'
  });
  const styles = _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["StyleSheet"].create({
    // START HOMEPAGE SECTION
    homePage: {
      fontFamily: 'Comfortaa',
      backgroundColor: '#f8f9fb',
      flexDirection: 'row'
    },
    homePageTitleSection: {
      width: '100%',
      textAlign: 'center',
      marginTop: 40
    },
    homePageTitle: {
      fontSize: 26,
      color: '#0a1230'
    },
    homePageDesc: {
      fontSize: 16,
      color: '#a0aec0'
    },
    image: {
      height: '200px',
      width: '200px',
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 22
    },
    leftDescBlock: {
      width: '75%',
      backgroundColor: '#6C63FF',
      textAlign: 'left',
      marginTop: '32px',
      borderTopRightRadius: 50
    },
    leftDescBlockText: {
      fontSize: 14,
      padding: 32,
      lineHeight: 1.4,
      color: '#f8f9fb'
    },
    rightBar: {
      height: '100vh',
      width: '15px',
      backgroundColor: '#6C63FF',
      position: 'absolute',
      right: '5%'
    },
    rightBarContact: {
      color: '#f8f9fb',
      fontSize: 14,
      width: '50%',
      backgroundColor: '#6C63FF',
      position: 'absolute',
      bottom: '10%',
      right: '5%',
      padding: 32,
      borderTopLeftRadius: 50
    },
    countryText: {
      marginTop: 6
    },
    emailText: {
      marginTop: 6
    },
    phoneNumberText: {
      marginTop: 6
    },
    grayBarOne: {
      height: '25%',
      width: '2px',
      backgroundColor: '#a0aec0',
      position: 'absolute',
      bottom: '3%',
      left: '10%'
    },
    grayBarTwo: {
      height: '2px',
      width: '20%',
      backgroundColor: '#a0aec0',
      position: 'absolute',
      bottom: '5%',
      left: '5%'
    },
    // END START HOMEPAGE SECTION
    // START OVERVIEW SECTION
    overviewPage: {
      fontFamily: 'Comfortaa',
      backgroundColor: '#f8f9fb',
      paddingTop: 35,
      paddingBottom: 35
    },
    overviewHeading: {
      fontSize: 22,
      color: '#0a1230',
      marginLeft: 28
    },
    overviewSubtitle: {
      fontSize: 14,
      color: '#a0aec0'
    },
    overviewImage: {
      height: '20px',
      width: '20px',
      position: 'absolute',
      top: 37,
      left: 30
    },
    overviewSection: {
      // padding: '5%',
      // paddingTop: '5%',
      paddingBottom: '5%',
      paddingLeft: '5%',
      paddingRight: '5%'
    },
    sectionContainerOne: {
      marginTop: 30
    },
    sectionHeadingOne: {
      color: '#0a1230',
      fontSize: 16
    },
    sectionText: {
      color: '#0a1230',
      fontSize: 12,
      paddingTop: 8,
      paddingRight: 50
    },
    sectionContainerTwo: {
      paddingTop: 30
    },
    sectionHeadingTwo: {
      color: '#0a1230',
      fontSize: 16
    },
    sectionContainerThree: {
      paddingTop: 36,
      paddingBottom: 26
    },
    sectionHeadingThree: {
      color: '#0a1230',
      fontSize: 16
    },
    // END OVERVIEW SECTION
    // START TABLE OF CONTENTS SECTION
    contentsPage: {
      fontFamily: 'Comfortaa'
    },
    contentsLeftBar: {
      height: '100%',
      width: '40%',
      backgroundColor: '#6C63FF',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'baseline',
      color: '#f8f9fb',
      paddingLeft: 35,
      fontSize: 20,
      lineHeight: 4,
      position: 'relative'
    },
    contentsBarOne: {
      width: 200,
      height: 2,
      backgroundColor: '#a0aec0',
      position: 'absolute',
      top: '37%',
      left: '100%',
      transform: 'translate(-50%, -50%)'
    },
    contentsBarTwo: {
      width: 200,
      height: 2,
      backgroundColor: '#a0aec0',
      position: 'absolute',
      top: '46.5%',
      left: '100%',
      transform: 'translate(-50%, -50%)'
    },
    contentsBarThree: {
      width: 200,
      height: 2,
      backgroundColor: '#a0aec0',
      position: 'absolute',
      top: '56%',
      left: '100%',
      transform: 'translate(-50%, -50%)'
    },
    contentsBarFour: {
      width: 200,
      height: 2,
      backgroundColor: '#a0aec0',
      position: 'absolute',
      top: '65.5%',
      left: '100%',
      transform: 'translate(-50%, -50%)'
    },
    contentsBarFive: {
      width: 200,
      height: 2,
      backgroundColor: '#a0aec0',
      position: 'absolute',
      top: '74.75%',
      left: '100%',
      transform: 'translate(-50%, -50%)'
    },
    contentsRightBar: {
      height: '100%',
      width: '60%',
      position: 'absolute',
      right: '0',
      display: 'flex',
      alignItems: 'center',
      fontSize: 12,
      color: '#0a1230',
      // paddingHorizontal: 64,
      paddingRight: 80,
      paddingLeft: 32
    },
    contentsRightTextOne: {
      position: 'absolute',
      top: '26.75%'
    },
    contentsRightTextTwo: {
      position: 'absolute',
      top: '36%'
    },
    contentsRightTextThree: {
      position: 'absolute',
      top: '45.5%'
    },
    contentsRightTextFour: {
      position: 'absolute',
      top: '55%'
    },
    contentsRightTextFive: {
      position: 'absolute',
      top: '64.25%'
    }
  }); //   const data = {
  //     ideaName,
  //     ideaDesc,
  //     ideaCountry,
  //     startupField,
  //     startupEmail,
  //     startupPhone,
  //     imageNameExists,
  //     marketProblemSection,
  //     marketSolutionSection,
  //     foundersSection,
  //     productOverviewSection,
  //     productPromotionSection,
  //     productBenefitsSection,
  //     marketOverviewSection,
  //     competitorsSection,
  //     targetCustomersSection,
  //     competitionDistinguishSection,
  //     startupCostsSection,
  //     runningCostsSection,
  //     financingSection,
  //     businessModelOverviewSection,
  //     businessGrowSection,
  //     whySuccessSection,
  //   };

  const image = data.avatarExists != null ? data.avatarExists : `/png/${data.imageNameExists}.png`;
  console.log('data - ', data);
  console.log('dataMarketProblem - ', data.marketProblemSection);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Document"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Page"], {
      size: "A4",
      style: styles.homePage,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["View"], {
        style: styles.homePageTitleSection,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
          style: styles.homePageTitle,
          children: "Startup idea plan"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 288,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
          style: styles.homePageDesc,
          children: data.ideaName
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 289,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Image"], {
          src: image,
          style: styles.image,
          height: "250px",
          width: "250px"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 290,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["View"], {
          style: styles.leftDescBlock,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
            style: styles.leftDescBlockText,
            children: data.ideaDesc
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 292,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 291,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 287,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["View"], {
        style: styles.rightBar
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 295,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["View"], {
        style: styles.rightBarContact,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
          children: data.startupField
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 297,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
          style: styles.countryText,
          children: data.ideaCountry
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 298,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
          style: styles.emailText,
          children: data.startupEmail
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 299,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
          style: styles.phoneNumberText,
          children: data.startupPhone
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 300,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 296,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["View"], {
        style: styles.grayBarOne
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 302,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["View"], {
        style: styles.grayBarTwo
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 303,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Page"], {
      style: styles.contentsPage,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["View"], {
        style: styles.rightBar,
        fixed: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 307,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["View"], {
        style: styles.contentsLeftBar,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
          children: "Startup overview"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 309,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
          children: "Product"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 310,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
          children: "Market analysis"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 311,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
          children: "Finances"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 312,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
          children: "Business model"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 313,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["View"], {
          style: styles.contentsBarOne
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 314,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["View"], {
          style: styles.contentsBarTwo
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 315,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["View"], {
          style: styles.contentsBarThree
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 316,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["View"], {
          style: styles.contentsBarFour
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 317,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["View"], {
          style: styles.contentsBarFive
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 318,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 308,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["View"], {
        style: styles.contentsRightBar,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
          style: styles.contentsRightTextOne,
          children: "01. This section will help you better understand the startup vision"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 321,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
          style: styles.contentsRightTextTwo,
          children: "02. This section will introduce you to the vision of the product"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 322,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
          style: styles.contentsRightTextThree,
          children: "03. This section will reveal all the cards of the market"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 323,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
          style: styles.contentsRightTextFour,
          children: "04. Discover the costs of implementing our idea"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 324,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
          style: styles.contentsRightTextFive,
          children: "05. In the final section, you will discover the startup's business model"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 325,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 320,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 306,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Page"], {
      style: styles.overviewPage,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["View"], {
        style: styles.rightBar,
        fixed: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 330,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Image"], {
        style: styles.overviewImage,
        src: "/pdf/idea.png",
        height: 20,
        width: 20
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 331,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["View"], {
        style: styles.overviewSection,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
          style: styles.overviewHeading,
          children: "Startup overview"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 333,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
          style: styles.overviewSubtitle,
          children: "This section will help you better understand the startup vision"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 334,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["View"], {
          style: styles.sectionContainerOne,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
            style: styles.sectionHeadingOne,
            children: "Market problem that needs to be solved."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 336,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
            style: styles.sectionText,
            children: data.marketProblemSection
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 337,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 335,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["View"], {
          style: styles.sectionContainerTwo,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
            style: styles.sectionHeadingTwo,
            children: "Solution that solves this market problem."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 340,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
            style: styles.sectionText,
            children: data.marketSolutionSection
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 341,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 339,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["View"], {
          style: styles.sectionContainerThree,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
            style: styles.sectionHeadingThree,
            children: "Who is behind the foundation of the future company?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 344,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
            style: styles.sectionText,
            children: data.foundersSection
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 345,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 343,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 332,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 329,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Page"], {
      style: styles.overviewPage,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["View"], {
        style: styles.rightBar,
        fixed: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 351,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Image"], {
        style: styles.overviewImage,
        src: "/pdf/blueprint.png",
        height: 20,
        width: 20
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 352,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["View"], {
        style: styles.overviewSection,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
          style: styles.overviewHeading,
          children: "Product"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 354,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
          style: styles.overviewSubtitle,
          children: "This section will introduce you to the vision of the product"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 355,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["View"], {
          style: styles.sectionContainerOne,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
            style: styles.sectionHeadingOne,
            children: "Detailed description of the product vision."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 357,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
            style: styles.sectionText,
            children: data.productOverviewSection
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 358,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 356,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["View"], {
          style: styles.sectionContainerTwo,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
            style: styles.sectionHeadingTwo,
            children: "How will other people find out about the product?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 361,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
            style: styles.sectionText,
            children: data.productPromotionSection
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 362,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 360,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["View"], {
          style: styles.sectionContainerThree,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
            style: styles.sectionHeadingThree,
            children: "What benefits will this product brings to customers?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 365,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
            style: styles.sectionText,
            children: data.productBenefitsSection
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 366,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 364,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 353,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 350,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Page"], {
      style: styles.overviewPage,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["View"], {
        style: styles.rightBar,
        fixed: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 372,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Image"], {
        style: styles.overviewImage,
        src: "/pdf/unicorn.png",
        height: 20,
        width: 20
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 373,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["View"], {
        style: styles.overviewSection,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
          style: styles.overviewHeading,
          children: "Market analysis"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 375,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
          style: styles.overviewSubtitle,
          children: "This section will reveal all the cards of the market"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 376,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["View"], {
          style: styles.sectionContainerOne,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
            style: styles.sectionHeadingOne,
            children: "General insight into the market."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 378,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
            style: styles.sectionText,
            children: data.marketOverviewSection
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 379,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 377,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["View"], {
          style: styles.sectionContainerTwo,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
            style: styles.sectionHeadingTwo,
            children: "Who are the major competitors in the market?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 382,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
            style: styles.sectionText,
            children: data.competitorsSection
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 383,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 381,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["View"], {
          style: styles.sectionContainerTwo,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
            style: styles.sectionHeadingTwo,
            children: "What makes this startup stand out from the competition?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 386,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
            style: styles.sectionText,
            children: data.competitionDistinguishSection
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 387,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 385,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["View"], {
          style: styles.sectionContainerThree,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
            style: styles.sectionHeadingThree,
            children: "Target group of startup customers."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 390,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
            style: styles.sectionText,
            children: data.targetCustomersSection
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 391,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 389,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 374,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 371,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Page"], {
      style: styles.overviewPage,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["View"], {
        style: styles.rightBar,
        fixed: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 397,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Image"], {
        style: styles.overviewImage,
        src: "/pdf/budget.png",
        height: 20,
        width: 20
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 398,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["View"], {
        style: styles.overviewSection,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
          style: styles.overviewHeading,
          children: "Finances"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 400,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
          style: styles.overviewSubtitle,
          children: "Discover the costs of implementing our idea"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 401,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["View"], {
          style: styles.sectionContainerOne,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
            style: styles.sectionHeadingOne,
            children: "How much money will it take to launch the startup?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 403,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
            style: styles.sectionText,
            children: data.startupCostsSection
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 404,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 402,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["View"], {
          style: styles.sectionContainerTwo,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
            style: styles.sectionHeadingTwo,
            children: "Approximate running costs, based on startup growth."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 407,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
            style: styles.sectionText,
            children: data.runningCostsSection
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 408,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 406,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["View"], {
          style: styles.sectionContainerThree,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
            style: styles.sectionHeadingThree,
            children: "How does the idea will be fund?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 411,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
            style: styles.sectionText,
            children: data.financingSection
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 412,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 410,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 399,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 396,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Page"], {
      style: styles.overviewPage,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["View"], {
        style: styles.rightBar,
        fixed: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 418,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Image"], {
        style: styles.overviewImage,
        src: "/pdf/startup.png",
        height: 20,
        width: 20
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 419,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["View"], {
        style: styles.overviewSection,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
          style: styles.overviewHeading,
          children: "Business model"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 421,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
          style: styles.overviewSubtitle,
          children: "In the final section, you will discover the startup's business model"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 422,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["View"], {
          style: styles.sectionContainerOne,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
            style: styles.sectionHeadingOne,
            children: "Startup business model and legal structure overview."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 424,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
            style: styles.sectionText,
            children: data.businessModelOverviewSection
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 425,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 423,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["View"], {
          style: styles.sectionContainerTwo,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
            style: styles.sectionHeadingTwo,
            children: "Predictions for startup growth."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 428,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
            style: styles.sectionText,
            children: data.businessGrowSection
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 429,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 427,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["View"], {
          style: styles.sectionContainerThree,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
            style: styles.sectionHeadingThree,
            children: "Why will this particular startup succeed?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 432,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
            style: styles.sectionText,
            children: data.whySuccessSection
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 433,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 431,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 420,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 417,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 285,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (MyDocument1);

/***/ }),

/***/ "./components/dashboard/startup/StartupSuccess.js":
/*!********************************************************!*\
  !*** ./components/dashboard/startup/StartupSuccess.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib/firebase */ "./lib/firebase.js");
/* harmony import */ var _lib_newAuth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../lib/newAuth */ "./lib/newAuth.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gsap */ "gsap");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! file-saver */ "file-saver");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @react-pdf/renderer */ "@react-pdf/renderer");
/* harmony import */ var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Tippy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Tippy */ "./components/dashboard/Tippy.js");
/* harmony import */ var _PDFDocument__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./PDFDocument */ "./components/dashboard/startup/PDFDocument.js");
/* harmony import */ var _AnimatedBackground__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./AnimatedBackground */ "./components/dashboard/startup/AnimatedBackground.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _ExitComponent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ExitComponent */ "./components/dashboard/startup/ExitComponent.js");


var _jsxFileName = "C:\\off-saas\\components\\dashboard\\startup\\StartupSuccess.js";













const StartupSuccess = ({
  managerPage
}) => {
  const {
    0: projectId,
    1: setProjectId
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(); // STARTER

  const {
    0: ideaName,
    1: setIdeaName
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: ideaDesc,
    1: setIdeaDesc
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: ideaCountry,
    1: setIdeaCountry
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: startupField,
    1: setStartupField
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: startupEmail,
    1: setStartupEmail
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: startupPhone,
    1: setStartupPhone
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''); // IMAGE

  const {
    0: imageNameExists,
    1: setImageNameExists
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: avatarExists,
    1: setAvatarExists
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''); // OVERVIEW

  const {
    0: marketProblemSection,
    1: setMarketProblemSection
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: marketSolutionSection,
    1: setMarketSolutionSection
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: foundersSection,
    1: setFoundersSection
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''); // PRODUCT

  const {
    0: productOverviewSection,
    1: setProductOverviewSection
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: productPromotionSection,
    1: setProductPromotionSection
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: productBenefitsSection,
    1: setProductBenefitsSection
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''); // MARKET

  const {
    0: marketOverviewSection,
    1: setMarketOverviewSection
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: competitorsSection,
    1: setCompetitorsSection
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: competitionDistinguishSection,
    1: setCompetitionDistinguishSection
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: targetCustomersSection,
    1: setTargetCustomersSection
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''); // FINANCES

  const {
    0: startupCostsSection,
    1: setStartupCostsSection
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: runningCostsSection,
    1: setRunningCostsSection
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: financingSection,
    1: setFinancingSection
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''); // BUSINESS MODEL

  const {
    0: businessModelOverviewSection,
    1: setBusinessModelOverviewSection
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: businessGrowSection,
    1: setBusinessGrowSection
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: whySuccessSection,
    1: setWhySuccessSection
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    currentUser
  } = Object(_lib_newAuth__WEBPACK_IMPORTED_MODULE_3__["useAuth"])();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  const contentRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(); // Data fetch

  const {
    0: loadingHelper,
    1: setLoadingHelper
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: documentId,
    1: setDocumentId
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const userUid = js_cookie__WEBPACK_IMPORTED_MODULE_11___default.a.get('uid');
    gsap__WEBPACK_IMPORTED_MODULE_5___default.a.fromTo(contentRef.current, {
      autoAlpha: 0
    }, {
      autoAlpha: 1,
      duration: 1,
      ease: gsap__WEBPACK_IMPORTED_MODULE_5__["Linear"].easeIn
    });

    if (userUid && router.query.project) {
      const data = _lib_firebase__WEBPACK_IMPORTED_MODULE_2__["db"].collection('projects').where('uid', '==', userUid);
      data.where('projectName', '==', router.query.project).get().then(querySnapshot => {
        querySnapshot.forEach(async doc1 => {
          const initialData = doc1.data();
          setProjectId(initialData.projectId); // STARTER;

          setIdeaName(initialData.projectName);
          setIdeaDesc(initialData.projectDescription);
          setIdeaCountry(initialData.projectCountry);
          setStartupField(initialData.projectField);
          setStartupEmail(initialData.projectEmail);
          setStartupPhone(initialData.projectNumber); // IMAGE

          setImageNameExists(initialData.imageName);
          setAvatarExists(initialData.imageFileUrl);
          _lib_firebase__WEBPACK_IMPORTED_MODULE_2__["db"].collection('projects').doc(initialData.projectId).collection('startupIdea').doc(router.query.project).collection('inputs').onSnapshot(serverUpdate => {
            serverUpdate.docs.map(doc => {
              console.log(doc.data());
              const data = doc.data();
              setDocumentId(doc.id); // OVERVIEW

              setMarketProblemSection(data.marketProblemSectionData);
              setMarketSolutionSection(data.marketSolutionSectionData);
              setFoundersSection(data.foundersSectionData); // PRODUCT

              setProductOverviewSection(data.productOverviewSectionData);
              setProductPromotionSection(data.productPromotionSectionData);
              setProductBenefitsSection(data.productBenefitsSectionData); // MARKET

              setMarketOverviewSection(data.marketOverviewSectionData);
              setCompetitorsSection(data.competitorsSectionData);
              setCompetitionDistinguishSection(data.competitionDistinguishSectionData);
              setTargetCustomersSection(data.targetCustomersSectionData); // FINANCES

              setStartupCostsSection(data.startupCostsSectionData);
              setRunningCostsSection(data.runningCostsSectionData);
              setFinancingSection(data.financingSectionData); // BUSINESS MODEL

              setBusinessModelOverviewSection(data.businessModelOverviewSectionData);
              setBusinessGrowSection(data.businessGrowSectionData);
              setWhySuccessSection(data.whySuccessSectionData);
              setLoadingHelper(false);
            });
          });
        });
      });
    } else {
      console.log('Loading failed');
      setLoadingHelper(true);
    }
  }, [loadingHelper, router.query.project]);
  const image = avatarExists != 'blank' ? avatarExists : imageNameExists;
  console.log(image);
  const data = {
    ideaName,
    ideaDesc,
    ideaCountry,
    startupField,
    startupEmail,
    startupPhone,
    imageNameExists,
    avatarExists,
    marketProblemSection,
    marketSolutionSection,
    foundersSection,
    productOverviewSection,
    productPromotionSection,
    productBenefitsSection,
    marketOverviewSection,
    competitorsSection,
    targetCustomersSection,
    competitionDistinguishSection,
    startupCostsSection,
    runningCostsSection,
    financingSection,
    businessModelOverviewSection,
    businessGrowSection,
    whySuccessSection
  };

  const onProjectLeave = async e => {
    e.preventDefault();
    gsap__WEBPACK_IMPORTED_MODULE_5___default.a.to(contentRef.current, {
      autoAlpha: 0,
      duration: 1,
      ease: gsap__WEBPACK_IMPORTED_MODULE_5__["Linear"].easeOut
    });
    setTimeout(() => {
      router.push(`/dashboard/projects/${router.query.project}/startup-idea/business-model`);
    }, 1200);
  }; // ------------------------------------------------------------- PDF -----------------------------------------------------------------
  // const delay = (t) => new Promise((resolve) => setTimeout(resolve, t));
  // async function getProps() {
  //   await delay(1_000);
  //   return {
  //     someString: 'You waited 1 second for this',
  //   };
  // }


  _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["Font"].register({
    src: '/fonts/poppins.ttf',
    family: 'Poppins'
  });
  _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["Font"].register({
    src: '/fonts/comfortaa.ttf',
    family: 'Comfortaa'
  });
  const styles = _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["StyleSheet"].create({
    // START HOMEPAGE SECTION
    homePage: {
      fontFamily: 'Comfortaa',
      backgroundColor: '#f8f9fb',
      flexDirection: 'row'
    },
    homePageTitleSection: {
      width: '100%',
      textAlign: 'center',
      marginTop: 40
    },
    homePageTitle: {
      fontSize: 26,
      color: '#0a1230'
    },
    homePageDesc: {
      fontSize: 16,
      color: '#a0aec0'
    },
    image: {
      height: '200px',
      width: '200px',
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 22
    },
    leftDescBlock: {
      width: '75%',
      backgroundColor: '#6C63FF',
      textAlign: 'left',
      marginTop: '32px',
      borderTopRightRadius: 50
    },
    leftDescBlockText: {
      fontSize: 14,
      padding: 32,
      lineHeight: 1.4,
      color: '#f8f9fb'
    },
    rightBar: {
      height: '100vh',
      width: '15px',
      backgroundColor: '#6C63FF',
      position: 'absolute',
      right: '5%'
    },
    rightBarContact: {
      color: '#f8f9fb',
      fontSize: 14,
      width: '50%',
      backgroundColor: '#6C63FF',
      position: 'absolute',
      bottom: '10%',
      right: '5%',
      padding: 32,
      borderTopLeftRadius: 50
    },
    countryText: {
      marginTop: 6
    },
    emailText: {
      marginTop: 6
    },
    phoneNumberText: {
      marginTop: 6
    },
    grayBarOne: {
      height: '25%',
      width: '2px',
      backgroundColor: '#a0aec0',
      position: 'absolute',
      bottom: '3%',
      left: '10%'
    },
    grayBarTwo: {
      height: '2px',
      width: '20%',
      backgroundColor: '#a0aec0',
      position: 'absolute',
      bottom: '5%',
      left: '5%'
    },
    // END START HOMEPAGE SECTION
    // START OVERVIEW SECTION
    overviewPage: {
      fontFamily: 'Comfortaa',
      backgroundColor: '#f8f9fb',
      paddingTop: 35,
      paddingBottom: 35
    },
    overviewHeading: {
      fontSize: 22,
      color: '#0a1230',
      marginLeft: 28
    },
    overviewSubtitle: {
      fontSize: 14,
      color: '#a0aec0'
    },
    overviewImage: {
      height: '20px',
      width: '20px',
      position: 'absolute',
      top: 37,
      left: 30
    },
    overviewSection: {
      // padding: '5%',
      // paddingTop: '5%',
      paddingBottom: '5%',
      paddingLeft: '5%',
      paddingRight: '5%'
    },
    sectionContainerOne: {
      marginTop: 30
    },
    sectionHeadingOne: {
      color: '#0a1230',
      fontSize: 16
    },
    sectionText: {
      color: '#0a1230',
      fontSize: 12,
      paddingTop: 8,
      paddingRight: 50
    },
    sectionContainerTwo: {
      paddingTop: 30
    },
    sectionHeadingTwo: {
      color: '#0a1230',
      fontSize: 16
    },
    sectionContainerThree: {
      paddingTop: 36,
      paddingBottom: 26
    },
    sectionHeadingThree: {
      color: '#0a1230',
      fontSize: 16
    },
    // END OVERVIEW SECTION
    // START TABLE OF CONTENTS SECTION
    contentsPage: {
      fontFamily: 'Comfortaa'
    },
    contentsLeftBar: {
      height: '100%',
      width: '40%',
      backgroundColor: '#6C63FF',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'baseline',
      color: '#f8f9fb',
      paddingLeft: 35,
      fontSize: 20,
      lineHeight: 4,
      position: 'relative'
    },
    contentsBarOne: {
      width: 200,
      height: 2,
      backgroundColor: '#a0aec0',
      position: 'absolute',
      top: '37%',
      left: '100%',
      transform: 'translate(-50%, -50%)'
    },
    contentsBarTwo: {
      width: 200,
      height: 2,
      backgroundColor: '#a0aec0',
      position: 'absolute',
      top: '46.5%',
      left: '100%',
      transform: 'translate(-50%, -50%)'
    },
    contentsBarThree: {
      width: 200,
      height: 2,
      backgroundColor: '#a0aec0',
      position: 'absolute',
      top: '56%',
      left: '100%',
      transform: 'translate(-50%, -50%)'
    },
    contentsBarFour: {
      width: 200,
      height: 2,
      backgroundColor: '#a0aec0',
      position: 'absolute',
      top: '65.5%',
      left: '100%',
      transform: 'translate(-50%, -50%)'
    },
    contentsBarFive: {
      width: 200,
      height: 2,
      backgroundColor: '#a0aec0',
      position: 'absolute',
      top: '74.75%',
      left: '100%',
      transform: 'translate(-50%, -50%)'
    },
    contentsRightBar: {
      height: '100%',
      width: '60%',
      position: 'absolute',
      right: '0',
      display: 'flex',
      alignItems: 'center',
      fontSize: 12,
      color: '#0a1230',
      // paddingHorizontal: 64,
      paddingRight: 80,
      paddingLeft: 32
    },
    contentsRightTextOne: {
      position: 'absolute',
      top: '26.75%'
    },
    contentsRightTextTwo: {
      position: 'absolute',
      top: '36%'
    },
    contentsRightTextThree: {
      position: 'absolute',
      top: '45.5%'
    },
    contentsRightTextFour: {
      position: 'absolute',
      top: '55%'
    },
    contentsRightTextFive: {
      position: 'absolute',
      top: '64.25%'
    }
  });

  const MyDocument = props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["Document"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["Page"], {
      size: "A4",
      style: styles.homePage,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["View"], {
        style: styles.homePageTitleSection,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["Text"], {
          style: styles.homePageTitle,
          children: "Startup idea plan"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 423,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["Text"], {
          style: styles.homePageDesc,
          children: "Just a simple startup about tech field"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 424,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["Image"], {
          src: image,
          style: styles.image,
          height: "250px",
          width: "250px"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 425,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["View"], {
          style: styles.leftDescBlock,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["Text"], {
            style: styles.leftDescBlockText,
            children: ideaDesc
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 427,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 426,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 422,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["View"], {
        style: styles.rightBar
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 430,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["View"], {
        style: styles.rightBarContact,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["Text"], {
          children: startupField
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 432,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["Text"], {
          style: styles.countryText,
          children: ideaCountry
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 433,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["Text"], {
          style: styles.emailText,
          children: startupEmail
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 434,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["Text"], {
          style: styles.phoneNumberText,
          children: startupPhone
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 435,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 431,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["View"], {
        style: styles.grayBarOne
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 437,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["View"], {
        style: styles.grayBarTwo
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 438,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 421,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["Page"], {
      style: styles.contentsPage,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["View"], {
        style: styles.rightBar,
        fixed: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 442,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["View"], {
        style: styles.contentsLeftBar,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["Text"], {
          children: "Startup overview"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 444,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["Text"], {
          children: "Product"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 445,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["Text"], {
          children: "Market analysis"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 446,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["Text"], {
          children: "Finances"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 447,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["Text"], {
          children: "Business model"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 448,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["View"], {
          style: styles.contentsBarOne
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 449,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["View"], {
          style: styles.contentsBarTwo
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 450,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["View"], {
          style: styles.contentsBarThree
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 451,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["View"], {
          style: styles.contentsBarFour
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 452,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["View"], {
          style: styles.contentsBarFive
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 453,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 443,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["View"], {
        style: styles.contentsRightBar,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["Text"], {
          style: styles.contentsRightTextOne,
          children: "01. This section will help you better understand the startup vision"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 456,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["Text"], {
          style: styles.contentsRightTextTwo,
          children: "02. This section will introduce you to the vision of the product"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 457,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["Text"], {
          style: styles.contentsRightTextThree,
          children: "03. This section will reveal all the cards of the market"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 458,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["Text"], {
          style: styles.contentsRightTextFour,
          children: "04. Discover the costs of implementing our idea"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 459,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["Text"], {
          style: styles.contentsRightTextFive,
          children: "05. In the final section, you will discover the startup's business model"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 460,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 455,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 441,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["Page"], {
      style: styles.overviewPage,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["View"], {
        style: styles.rightBar,
        fixed: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 465,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["Image"], {
        style: styles.overviewImage,
        src: "/pdf/idea.png",
        height: 20,
        width: 20
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 466,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["View"], {
        style: styles.overviewSection,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["Text"], {
          style: styles.overviewHeading,
          children: "Startup overview"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 468,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["Text"], {
          style: styles.overviewSubtitle,
          children: "This section will help you better understand the startup vision"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 469,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["View"], {
          style: styles.sectionContainerOne,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["Text"], {
            style: styles.sectionHeadingOne,
            children: "Market problem that needs to be solved"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 471,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["Text"], {
            style: styles.sectionText,
            children: marketProblemSection
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 472,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 470,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["View"], {
          style: styles.sectionContainerTwo,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["Text"], {
            style: styles.sectionHeadingTwo,
            children: "Our startup solution for this problem"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 475,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["Text"], {
            style: styles.sectionText,
            children: marketSolutionSection
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 476,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 474,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["View"], {
          style: styles.sectionContainerThree,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["Text"], {
            style: styles.sectionHeadingThree,
            children: "Who is behind the foundation of the future company?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 479,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["Text"], {
            style: styles.sectionText,
            children: foundersSection
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 480,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 478,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 467,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 464,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["Page"], {
      style: styles.overviewPage,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["View"], {
        style: styles.rightBar,
        fixed: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 486,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["Image"], {
        style: styles.overviewImage,
        src: "/pdf/blueprint.png",
        height: 20,
        width: 20
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 487,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["View"], {
        style: styles.overviewSection,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["Text"], {
          style: styles.overviewHeading,
          children: "Product"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 489,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["Text"], {
          style: styles.overviewSubtitle,
          children: "This section will introduce you to the vision of the product"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 490,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["View"], {
          style: styles.sectionContainerOne,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["Text"], {
            style: styles.sectionHeadingOne,
            children: "What does the perfect version of the product look like?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 492,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["Text"], {
            style: styles.sectionText,
            children: productOverviewSection
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 493,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 491,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["View"], {
          style: styles.sectionContainerTwo,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["Text"], {
            style: styles.sectionHeadingTwo,
            children: "How will other people find out about the product?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 496,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["Text"], {
            style: styles.sectionText,
            children: productPromotionSection
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 497,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 495,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["View"], {
          style: styles.sectionContainerThree,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["Text"], {
            style: styles.sectionHeadingThree,
            children: "What benefits will this product brings to customers?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 500,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["Text"], {
            style: styles.sectionText,
            children: productBenefitsSection
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 501,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 499,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 488,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 485,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["Page"], {
      style: styles.overviewPage,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["View"], {
        style: styles.rightBar,
        fixed: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 507,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["Image"], {
        style: styles.overviewImage,
        src: "/pdf/unicorn.png",
        height: 20,
        width: 20
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 508,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["View"], {
        style: styles.overviewSection,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["Text"], {
          style: styles.overviewHeading,
          children: "Market analysis"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 510,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["Text"], {
          style: styles.overviewSubtitle,
          children: "This section will reveal all the cards of the market"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 511,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["View"], {
          style: styles.sectionContainerOne,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["Text"], {
            style: styles.sectionHeadingOne,
            children: "A general view of the market that can be obtained"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 513,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["Text"], {
            style: styles.sectionText,
            children: marketOverviewSection
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 514,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 512,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["View"], {
          style: styles.sectionContainerTwo,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["Text"], {
            style: styles.sectionHeadingTwo,
            children: "What is the main competition on the market?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 517,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["Text"], {
            style: styles.sectionText,
            children: competitorsSection
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 518,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 516,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["View"], {
          style: styles.sectionContainerTwo,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["Text"], {
            style: styles.sectionHeadingTwo,
            children: "What makes a startup stand out from the competition?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 521,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["Text"], {
            style: styles.sectionText,
            children: competitionDistinguishSection
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 522,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 520,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["View"], {
          style: styles.sectionContainerThree,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["Text"], {
            style: styles.sectionHeadingThree,
            children: "Who are the target customers of the startup?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 525,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["Text"], {
            style: styles.sectionText,
            children: targetCustomersSection
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 526,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 524,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 509,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 506,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["Page"], {
      style: styles.overviewPage,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["View"], {
        style: styles.rightBar,
        fixed: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 532,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["Image"], {
        style: styles.overviewImage,
        src: "/pdf/budget.png",
        height: 20,
        width: 20
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 533,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["View"], {
        style: styles.overviewSection,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["Text"], {
          style: styles.overviewHeading,
          children: "Finances"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 535,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["Text"], {
          style: styles.overviewSubtitle,
          children: "Discover the costs of implementing our idea"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 536,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["View"], {
          style: styles.sectionContainerOne,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["Text"], {
            style: styles.sectionHeadingOne,
            children: "How much money will it take to launch the startup?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 538,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["Text"], {
            style: styles.sectionText,
            children: startupCostsSection
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 539,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 537,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["View"], {
          style: styles.sectionContainerTwo,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["Text"], {
            style: styles.sectionHeadingTwo,
            children: "Approximate costs of maintaining a startup"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 542,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["Text"], {
            style: styles.sectionText,
            children: runningCostsSection
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 543,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 541,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["View"], {
          style: styles.sectionContainerThree,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["Text"], {
            style: styles.sectionHeadingThree,
            children: "How does the idea will be fund?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 546,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["Text"], {
            style: styles.sectionText,
            children: financingSection
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 547,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 545,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 534,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 531,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["Page"], {
      style: styles.overviewPage,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["View"], {
        style: styles.rightBar,
        fixed: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 553,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["Image"], {
        style: styles.overviewImage,
        src: "/pdf/startup.png",
        height: 20,
        width: 20
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 554,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["View"], {
        style: styles.overviewSection,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["Text"], {
          style: styles.overviewHeading,
          children: "Business model"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 556,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["Text"], {
          style: styles.overviewSubtitle,
          children: "In the final section, you will discover the startup's business model"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 557,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["View"], {
          style: styles.sectionContainerOne,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["Text"], {
            style: styles.sectionHeadingOne,
            children: "What will the startup's business model look like?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 559,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["Text"], {
            style: styles.sectionText,
            children: businessModelOverviewSection
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 560,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 558,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["View"], {
          style: styles.sectionContainerTwo,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["Text"], {
            style: styles.sectionHeadingTwo,
            children: "Predictions for startup growth"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 563,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["Text"], {
            style: styles.sectionText,
            children: businessGrowSection
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 564,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 562,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["View"], {
          style: styles.sectionContainerThree,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["Text"], {
            style: styles.sectionHeadingThree,
            children: "Why is it that startup that will conquer the world?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 567,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["Text"], {
            style: styles.sectionText,
            children: whySuccessSection
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 568,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 566,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 555,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 552,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 420,
    columnNumber: 5
  }, undefined); // const [numPages, setNumPages] = useState(null);
  // const MyDocument = (props) => (
  //   <Document
  //     file={props.data}
  //     onLoadSuccess={({ numPages }) => setNumPages(numPages)}
  //   >
  //     {Array.apply(null, Array(numPages))
  //       .map((x, i) => i + 1)
  //       .map((page) => (
  //         <Page pageNumber={page} style={styles.page}>
  //           <View style={styles.section}>
  //           </View>
  //         </Page>
  //       ))}
  //   </Document>
  // );


  return Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(() => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: managerPage ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "flex",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        className: "mr-2",
        src: "/mobile-navbar/pdf.svg",
        onClick: async e => {
          e.preventDefault();

          const doc = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_PDFDocument__WEBPACK_IMPORTED_MODULE_9__["default"], {
            data: data
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 603,
            columnNumber: 29
          }, undefined);

          const asPdf = Object(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["pdf"])([]); // {} is important, throws without an argument

          asPdf.updateContainer(doc);
          const blob = await asPdf.toBlob();
          Object(file_saver__WEBPACK_IMPORTED_MODULE_6__["saveAs"])(blob, `${ideaName}/idea-plan.pdf`);
        },
        height: 24,
        width: 24
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 598,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        className: "cursor-pointer",
        src: "/mobile-navbar/foreign.svg",
        height: 24,
        width: 24,
        className: "h-full"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 612,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 597,
      columnNumber: 11
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ExitComponent__WEBPACK_IMPORTED_MODULE_12__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 616,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        ref: contentRef,
        className: "h-screen w-full relative flex flex-col items-center justify-center",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
          className: "circles",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 619,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 620,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 621,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 622,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 623,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 624,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 625,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 626,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 627,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 628,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 630,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 631,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 632,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 633,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 634,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 635,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 636,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 637,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 638,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 639,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 640,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 641,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 642,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 643,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 644,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 645,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 646,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 647,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 648,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 649,
            columnNumber: 17
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 618,
          columnNumber: 15
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "flex flex-col items-center justify-center w-full max-w-screen-md relative pl-6 pr-6 mt-16 pb-24",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "text-primarydark text-2xl normal:text-3xl mt-2 pl-2 dark:text-background text-center",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "/gifs/popper.gif",
              height: 60,
              width: 60,
              className: "inline-block relative bottom-4 left-3"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 653,
              columnNumber: 19
            }, undefined), "Congratulations!"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 652,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "text-gray text-base normal:text-lg pl-2 dark:text-background text-center",
            children: "Now you can save your idea and set off to conquer the world"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 656,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/success.svg",
            height: 200,
            width: 200,
            className: "mt-4"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 659,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              className: "z-10 mr-4 mt-6 hover:bg-primary hover:text-white dark:hover:bg-primarydark dark:hover:text-background focus:outline-none border border-primary text-primary text-sm font-light py-2 px-8 rounded-2xl dark:text-primarydark dark:border-primarydark",
              onClick: onProjectLeave,
              children: "Back"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 661,
              columnNumber: 19
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              className: "z-10 ml-4 mt-6 hover:bg-primary hover:text-white dark:hover:bg-primarydark dark:hover:text-background focus:outline-none border border-primary text-primary text-sm font-light py-2 px-8 rounded-2xl dark:text-primarydark dark:border-primarydark",
              onClick: async e => {
                e.preventDefault();

                const doc = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_PDFDocument__WEBPACK_IMPORTED_MODULE_9__["default"], {
                  data: data
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 671,
                  columnNumber: 35
                }, undefined);

                const asPdf = Object(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["pdf"])([]); // {} is important, throws without an argument

                asPdf.updateContainer(doc);
                const blob = await asPdf.toBlob();
                Object(file_saver__WEBPACK_IMPORTED_MODULE_6__["saveAs"])(blob, `${ideaName}/idea-plan.pdf`);
              },
              children: "Save"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 667,
              columnNumber: 19
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 660,
            columnNumber: 17
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 651,
          columnNumber: 15
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 617,
        columnNumber: 13
      }, undefined)]
    }, void 0, true)
  }, void 0, false), [data]);
};

/* harmony default export */ __webpack_exports__["default"] = (StartupSuccess);

/***/ }),

/***/ "./components/dashboard/startup/project/business-app/tippys/ManagerTippy.js":
/*!**********************************************************************************!*\
  !*** ./components/dashboard/startup/project/business-app/tippys/ManagerTippy.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "gsap");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tippyjs_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tippyjs/react */ "@tippyjs/react");
/* harmony import */ var _tippyjs_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tippyjs_react__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\off-saas\\components\\dashboard\\startup\\project\\business-app\\tippys\\ManagerTippy.js";




const ManagerTippy = () => {
  const {
    0: visible,
    1: setVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const contentRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  const tippyRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();

  const show = () => {
    gsap__WEBPACK_IMPORTED_MODULE_2___default.a.fromTo(tippyRef.current, {
      autoAlpha: 0,
      scale: 0
    }, {
      autoAlpha: 1,
      scale: 1,
      duration: 1,
      transformOrigin: 'bottom left',
      ease: gsap__WEBPACK_IMPORTED_MODULE_2__["Power4"].easeOut
    });
    setVisible(true);
  };

  const hide = async () => {
    await gsap__WEBPACK_IMPORTED_MODULE_2___default.a.to(tippyRef.current, {
      autoAlpha: 0,
      scale: 0,
      duration: 1,
      transformOrigin: 'bottom left',
      ease: gsap__WEBPACK_IMPORTED_MODULE_2__["Power4"].easeIn
    });
    setVisible(false);
  };

  const onImageClick = () => {
    if (!visible || visible) {
      visible ? hide() : show();
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    // GSAP
    gsap__WEBPACK_IMPORTED_MODULE_2___default.a.fromTo(contentRef.current, {
      autoAlpha: 0
    }, {
      autoAlpha: 1,
      duration: 2,
      transformOrigin: 'bottom left',
      ease: gsap__WEBPACK_IMPORTED_MODULE_2__["Power4"].easeOut
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_tippyjs_react__WEBPACK_IMPORTED_MODULE_3___default.a // trigger={tippyMonster}
  , {
    zIndex: visible ? 40 : 0,
    onShow: show,
    animation: "fade",
    duration: 500,
    touch: true,
    visible: visible,
    onClickOutside: hide,
    offset: [180, -25] // placement="right-start"
    ,
    interactive: true,
    content: // Project manager start
    visible && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      ref: tippyRef,
      className: "h-28 w-80 shadow-lg rounded-2xl bg-primary flex justify-center items-center focus:outline-none",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "p-4 text-sm text-center text-white flex justify-center items-center",
        children: "Manage your team whenever you want! Remember, if you are the only person working on a project, your removal will delete the entire project."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }, undefined),
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      onClick: onImageClick,
      className: "cursor-pointer ml-2 relative bottom-0.5",
      src: "/members/bulb.svg",
      height: 24,
      width: 24
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ManagerTippy);

/***/ }),

/***/ "./lib/firebase.js":
/*!*************************!*\
  !*** ./lib/firebase.js ***!
  \*************************/
/*! exports provided: default, auth, db, storage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auth", function() { return auth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "db", function() { return db; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storage", function() { return storage; });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "firebase/app");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ "firebase/auth");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ "firebase/firestore");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/storage */ "firebase/storage");
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_storage__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var firebase_functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/functions */ "firebase/functions");
/* harmony import */ var firebase_functions__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_functions__WEBPACK_IMPORTED_MODULE_4__);






if (!firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.apps.length) {
  firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp({
    // apiKey: 'AIzaSyCx_T0DqixL3AX_QLl-j8XDygGp91C-3-Q',
    // authDomain: 'startup-test-4d625.firebaseapp.com',
    // projectId: 'startup-test-4d625',
    // storageBucket: 'startup-test-4d625.appspot.com',
    // messagingSenderId: '472416150240',
    // appId: '1:472416150240:web:b2a128ad27afffddf3e685',
    apiKey: 'AIzaSyBOSfuAf7VAK9Yec20lGrD_6bq5MNRm9sE',
    authDomain: 'saas-startup-a5a34.firebaseapp.com',
    projectId: 'saas-startup-a5a34',
    storageBucket: 'saas-startup-a5a34.appspot.com',
    messagingSenderId: '864217574625',
    appId: '1:864217574625:web:19cf590109ef50dd935ba0',
    measurementId: 'G-QKZJPTKMS4'
  });
}

/* harmony default export */ __webpack_exports__["default"] = (firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a);
const auth = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.auth();
const db = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.firestore();
const storage = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.storage();

/***/ }),

/***/ "./lib/newAuth.js":
/*!************************!*\
  !*** ./lib/newAuth.js ***!
  \************************/
/*! exports provided: AuthContext, useAuth, AuthProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthContext", function() { return AuthContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAuth", function() { return useAuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthProvider", function() { return AuthProvider; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/firebase */ "./lib/firebase.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\off-saas\\lib\\newAuth.js";




const AuthContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__["createContext"])(); // Tutaj można umieścić default Value

const useAuth = () => {
  return Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(AuthContext);
};
const AuthProvider = ({
  children
}) => {
  const {
    0: currentUser,
    1: setCurrentUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])();
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true);

  const handleUser = async user => {
    if (user) {
      js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set('uid', user.uid, true); // console.log('user - ', user);
      // console.log('user name - ', name);

      const formatedUser = await formatUser(user); // const decodedToken = await firebase.auth().currentUser.getIdTokenResult();
      // console.log(decodedToken.claims.stripeRole);

      _lib_firebase__WEBPACK_IMPORTED_MODULE_1__["db"].collection('users').doc(user.uid).set({
        formatedUser
      }, {
        merge: true
      });
      setCurrentUser(formatedUser); // Cookies.set('token', user.za, true);

      setLoading(false);
      return formatedUser;
    } else {
      setCurrentUser(false); // Cookies.remove('token', user.za);

      js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.remove('uid');
      setLoading(false);
      return false;
    }
  };

  const signUp = async (email, password) => {
    return await _lib_firebase__WEBPACK_IMPORTED_MODULE_1__["auth"].createUserWithEmailAndPassword(email, password).then(response => {
      return handleUser(response.user);
    });
  };

  const logIn = (email, password) => {
    return _lib_firebase__WEBPACK_IMPORTED_MODULE_1__["auth"].signInWithEmailAndPassword(email, password);
  };

  const logOut = () => {
    return _lib_firebase__WEBPACK_IMPORTED_MODULE_1__["auth"].signOut();
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    const unsubscribe = _lib_firebase__WEBPACK_IMPORTED_MODULE_1__["auth"].onIdTokenChanged(handleUser);
    return () => unsubscribe();
  }, []);
  const value = {
    currentUser,
    signUp,
    logIn,
    logOut
  };

  const getStripeRole = async () => {
    await _lib_firebase__WEBPACK_IMPORTED_MODULE_1__["default"].auth().currentUser.getIdToken(true);
    const decodedToken = await _lib_firebase__WEBPACK_IMPORTED_MODULE_1__["default"].auth().currentUser.getIdTokenResult();
    return decodedToken.claims.stripeRole || 'free';
  };

  const formatUser = async user => {
    console.log('OFF - ', user);
    const token = await user.getIdToken();
    return {
      uid: user.uid,
      email: user.email,
      // name,
      // token: user.za, // token JWT, generowany automatycznie przez firebase przy zakładaniu konta
      provider: user.providerData[0].providerId,
      stripeRole: await getStripeRole(),
      token
    };
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(AuthContext.Provider, {
    value: value,
    children: !loading && children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 90,
    columnNumber: 10
  }, undefined);
};

/***/ }),

/***/ "./node_modules/next/dist/client/image.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/client/image.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = Image;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/next/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/next/node_modules/@babel/runtime/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _head = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/head */ "../next-server/lib/head"));

var _toBase = __webpack_require__(/*! ../next-server/lib/to-base-64 */ "../next-server/lib/to-base-64");

var _imageConfig = __webpack_require__(/*! ../next-server/server/image-config */ "../next-server/server/image-config");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

if (true) {
  ;
  global.__NEXT_IMAGE_IMPORTED = true;
}

const VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
const loaders = new Map([['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['default', defaultLoader]]);
const VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined];
const {
  deviceSizes: configDeviceSizes,
  imageSizes: configImageSizes,
  loader: configLoader,
  path: configPath,
  domains: configDomains
} = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","domains":[]} || _imageConfig.imageConfigDefault; // sort smallest to largest

const allSizes = [...configDeviceSizes, ...configImageSizes];
configDeviceSizes.sort((a, b) => a - b);
allSizes.sort((a, b) => a - b);

function getWidths(width, layout, sizes) {
  if (sizes && (layout === 'fill' || layout === 'responsive')) {
    // Find all the "vw" percent sizes used in the sizes prop
    const percentSizes = [...sizes.matchAll(/(^|\s)(1?\d?\d)vw/g)].map(m => parseInt(m[2]));

    if (percentSizes.length) {
      const smallestRatio = Math.min(...percentSizes) * 0.01;
      return {
        widths: allSizes.filter(s => s >= configDeviceSizes[0] * smallestRatio),
        kind: 'w'
      };
    }

    return {
      widths: allSizes,
      kind: 'w'
    };
  }

  if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
    return {
      widths: configDeviceSizes,
      kind: 'w'
    };
  }

  const widths = [...new Set( // > This means that most OLED screens that say they are 3x resolution,
  // > are actually 3x in the green color, but only 1.5x in the red and
  // > blue colors. Showing a 3x resolution image in the app vs a 2x
  // > resolution image will be visually the same, though the 3x image
  // > takes significantly more data. Even true 3x resolution screens are
  // > wasteful as the human eye cannot see that level of detail without
  // > something like a magnifying glass.
  // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
  [width, width * 2
  /*, width * 3*/
  ].map(w => allSizes.find(p => p >= w) || allSizes[allSizes.length - 1]))];
  return {
    widths,
    kind: 'x'
  };
}

function generateImgAttrs({
  src,
  unoptimized,
  layout,
  width,
  quality,
  sizes,
  loader
}) {
  if (unoptimized) {
    return {
      src,
      srcSet: undefined,
      sizes: undefined
    };
  }

  const {
    widths,
    kind
  } = getWidths(width, layout, sizes);
  const last = widths.length - 1;
  return {
    sizes: !sizes && kind === 'w' ? '100vw' : sizes,
    srcSet: widths.map((w, i) => `${loader({
      src,
      quality,
      width: w
    })} ${kind === 'w' ? w : i + 1}${kind}`).join(', '),
    // It's intended to keep `src` the last attribute because React updates
    // attributes in order. If we keep `src` the first one, Safari will
    // immediately start to fetch `src`, before `sizes` and `srcSet` are even
    // updated by React. That causes multiple unnecessary requests if `srcSet`
    // and `sizes` are defined.
    // This bug cannot be reproduced in Chrome or Firefox.
    src: loader({
      src,
      quality,
      width: widths[last]
    })
  };
}

function getInt(x) {
  if (typeof x === 'number') {
    return x;
  }

  if (typeof x === 'string') {
    return parseInt(x, 10);
  }

  return undefined;
}

function defaultImageLoader(loaderProps) {
  const load = loaders.get(configLoader);

  if (load) {
    return load((0, _extends2.default)({
      root: configPath
    }, loaderProps));
  }

  throw new Error(`Unknown "loader" found in "next.config.js". Expected: ${_imageConfig.VALID_LOADERS.join(', ')}. Received: ${configLoader}`);
}

function Image(_ref) {
  let {
    src,
    sizes,
    unoptimized = false,
    priority = false,
    loading,
    className,
    quality,
    width,
    height,
    objectFit,
    objectPosition,
    loader = defaultImageLoader
  } = _ref,
      all = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["src", "sizes", "unoptimized", "priority", "loading", "className", "quality", "width", "height", "objectFit", "objectPosition", "loader"]);
  let rest = all;
  let layout = sizes ? 'responsive' : 'intrinsic';
  let unsized = false;

  if ('unsized' in rest) {
    unsized = Boolean(rest.unsized); // Remove property so it's not spread into image:

    delete rest['unsized'];
  } else if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread into image:

    delete rest['layout'];
  }

  if (true) {
    if (!src) {
      throw new Error(`Image is missing required "src" property. Make sure you pass "src" in props to the \`next/image\` component. Received: ${JSON.stringify({
        width,
        height,
        quality
      })}`);
    }

    if (!VALID_LAYOUT_VALUES.includes(layout)) {
      throw new Error(`Image with src "${src}" has invalid "layout" property. Provided "${layout}" should be one of ${VALID_LAYOUT_VALUES.map(String).join(',')}.`);
    }

    if (!VALID_LOADING_VALUES.includes(loading)) {
      throw new Error(`Image with src "${src}" has invalid "loading" property. Provided "${loading}" should be one of ${VALID_LOADING_VALUES.map(String).join(',')}.`);
    }

    if (priority && loading === 'lazy') {
      throw new Error(`Image with src "${src}" has both "priority" and "loading='lazy'" properties. Only one should be used.`);
    }

    if (unsized) {
      throw new Error(`Image with src "${src}" has deprecated "unsized" property, which was removed in favor of the "layout='fill'" property`);
    }
  }

  let isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src && src.startsWith('data:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  const [setRef, isIntersected] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px',
    disabled: !isLazy
  });
  const isVisible = !isLazy || isIntersected;
  const widthInt = getInt(width);
  const heightInt = getInt(height);
  const qualityInt = getInt(quality);
  let wrapperStyle;
  let sizerStyle;
  let sizerSvg;
  let imgStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    objectFit,
    objectPosition
  };

  if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined' && layout !== 'fill') {
    // <Image src="i.png" width="100" height="100" />
    const quotient = heightInt / widthInt;
    const paddingTop = isNaN(quotient) ? '100%' : `${quotient * 100}%`;

    if (layout === 'responsive') {
      // <Image src="i.png" width="100" height="100" layout="responsive" />
      wrapperStyle = {
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        display: 'block',
        boxSizing: 'border-box',
        paddingTop
      };
    } else if (layout === 'intrinsic') {
      // <Image src="i.png" width="100" height="100" layout="intrinsic" />
      wrapperStyle = {
        display: 'inline-block',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        boxSizing: 'border-box',
        display: 'block',
        maxWidth: '100%'
      };
      sizerSvg = `<svg width="${widthInt}" height="${heightInt}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`;
    } else if (layout === 'fixed') {
      // <Image src="i.png" width="100" height="100" layout="fixed" />
      wrapperStyle = {
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'inline-block',
        position: 'relative',
        width: widthInt,
        height: heightInt
      };
    }
  } else if (typeof widthInt === 'undefined' && typeof heightInt === 'undefined' && layout === 'fill') {
    // <Image src="i.png" layout="fill" />
    wrapperStyle = {
      display: 'block',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxSizing: 'border-box',
      margin: 0
    };
  } else {
    // <Image src="i.png" />
    if (true) {
      throw new Error(`Image with src "${src}" must use "width" and "height" properties or "layout='fill'" property.`);
    }
  }

  let imgAttributes = {
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    srcSet: undefined,
    sizes: undefined
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      src,
      unoptimized,
      layout,
      width: widthInt,
      quality: qualityInt,
      sizes,
      loader
    });
  }

  if (unsized) {
    wrapperStyle = undefined;
    sizerStyle = undefined;
    imgStyle = undefined;
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    style: wrapperStyle
  }, sizerStyle ? /*#__PURE__*/_react.default.createElement("div", {
    style: sizerStyle
  }, sizerSvg ? /*#__PURE__*/_react.default.createElement("img", {
    style: {
      maxWidth: '100%',
      display: 'block',
      margin: 0,
      border: 'none',
      padding: 0
    },
    alt: "",
    "aria-hidden": true,
    role: "presentation",
    src: `data:image/svg+xml;base64,${(0, _toBase.toBase64)(sizerSvg)}`
  }) : null) : null, !isVisible && /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, generateImgAttrs({
    src,
    unoptimized,
    layout,
    width: widthInt,
    quality: qualityInt,
    sizes,
    loader
  }), {
    src: src,
    decoding: "async",
    sizes: sizes,
    style: imgStyle,
    className: className
  }))), /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    className: className,
    ref: setRef,
    style: imgStyle
  })), priority ?
  /*#__PURE__*/
  // Note how we omit the `href` attribute, as it would only be relevant
  // for browsers that do not support `imagesrcset`, and in those cases
  // it would likely cause the incorrect image to be preloaded.
  //
  // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
  _react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("link", {
    key: '__nimg-' + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
    rel: "preload",
    as: "image",
    href: imgAttributes.srcSet ? undefined : imgAttributes.src // @ts-ignore: imagesrcset is not yet in the link element type
    ,
    imagesrcset: imgAttributes.srcSet // @ts-ignore: imagesizes is not yet in the link element type
    ,
    imagesizes: imgAttributes.sizes
  })) : null);
} //BUILT IN LOADERS


function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://static.imgix.net/daisy.png?format=auto&fit=max&w=300
  const params = ['auto=format', 'fit=max', 'w=' + width];
  let paramsString = '';

  if (quality) {
    params.push('q=' + quality);
  }

  if (params.length) {
    paramsString = '?' + params.join('&');
  }

  return `${root}${normalizeSrc(src)}${paramsString}`;
}

function akamaiLoader({
  root,
  src,
  width
}) {
  return `${root}${normalizeSrc(src)}?imwidth=${width}`;
}

function cloudinaryLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
  const params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
  let paramsString = params.join(',') + '/';
  return `${root}${paramsString}${normalizeSrc(src)}`;
}

function defaultLoader({
  root,
  src,
  width,
  quality
}) {
  if (true) {
    const missingValues = []; // these should always be provided but make sure they are

    if (!src) missingValues.push('src');
    if (!width) missingValues.push('width');

    if (missingValues.length > 0) {
      throw new Error(`Next Image Optimization requires ${missingValues.join(', ')} to be provided. Make sure you pass them as props to the \`next/image\` component. Received: ${JSON.stringify({
        src,
        width,
        quality
      })}`);
    }

    if (src.startsWith('//')) {
      throw new Error(`Failed to parse src "${src}" on \`next/image\`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)`);
    }

    if (!src.startsWith('/') && configDomains) {
      let parsedSrc;

      try {
        parsedSrc = new URL(src);
      } catch (err) {
        console.error(err);
        throw new Error(`Failed to parse src "${src}" on \`next/image\`, if using relative image it must start with a leading slash "/" or be an absolute URL (http:// or https://)`);
      }

      if (!configDomains.includes(parsedSrc.hostname)) {
        throw new Error(`Invalid src prop (${src}) on \`next/image\`, hostname "${parsedSrc.hostname}" is not configured under images in your \`next.config.js\`\n` + `See more info: https://nextjs.org/docs/messages/next-image-unconfigured-host`);
      }
    }
  }

  return `${root}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

const prefetched = {};

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
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
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
    shallow,
    locale,
    scroll
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
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
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
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
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
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/router/utils/get-asset-path-from-route */ "../next-server/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js"); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // Resolve a promise that times out after given amount of milliseconds.


function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject);
    (0, _requestIdleCallback.requestIdleCallback)(() => setTimeout(() => {
      if (!cancelled) {
        reject(err);
      }
    }, ms));
  });
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute.default)(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route, prefetch) {
      return withFuture(route, routes, () => {
        return resolvePromiseWithTimeout(getFilesForRoute(assetPrefix, route).then(({
          scripts,
          css
        }) => {
          return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
        }).then(res => {
          return this.whenEntrypoint(route).then(entrypoint => ({
            entrypoint,
            styles: res[1]
          }));
        }), MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`))).then(({
          entrypoint,
          styles
        }) => {
          const res = Object.assign({
            styles: styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        }).catch(err => {
          if (prefetch) {
            // we don't want to cache errors during prefetch
            throw err;
          }

          return {
            error: err
          };
        });
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.requestIdleCallback)(() => this.loadRoute(route, true).catch(() => {}));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

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

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain'];
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
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

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

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
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


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

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

/***/ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
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
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router.pathname, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router.pathname, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

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

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
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
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  // In-flight Server Data Requests, for deduping
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sdr = {};
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
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this.isPreview = void 0;
    this.isLocaleDomain = void 0;
    this._idx = 0;

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

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
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
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search && !false);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    var _options$scroll;

    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    } // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated


    if (options._h) {
      this.isReady = true;
    } // Default to scroll reset behavior unless explicitly specified to be
    // `false`! This makes the behavior between using `Router#push` and a
    // `<Link />` consistent.


    options.scroll = !!((_options$scroll = options.scroll) != null ? _options$scroll : true);
    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname;

    if (pathname !== '/_error') {
      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname, pages);

        if (parsed.pathname !== pathname) {
          pathname = parsed.pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://nextjs.org/docs/messages/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var _self$__NEXT_DATA__$p, _self$__NEXT_DATA__$p2;

      let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);

            if (pages.includes(parsedHref.pathname)) {
              const {
                url: newUrl,
                as: newAs
              } = prepareUrlAs(this, destination, destination);
              return this.change(method, newUrl, newAs, options);
            }
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      } // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;

      if (options._h && pathname === '/_error' && ((_self$__NEXT_DATA__$p = self.__NEXT_DATA__.props) == null ? void 0 : (_self$__NEXT_DATA__$p2 = _self$__NEXT_DATA__$p.pageProps) == null ? void 0 : _self$__NEXT_DATA__$p2.statusCode) === 500 && props != null && props.pageProps) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll || (isValidShallowRoute || !options.scroll ? null : {
        x: 0,
        y: 0
      })).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
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
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
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
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
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
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
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
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
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
  /**
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

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname) {
        pathname = parsed.pathname;
        url = (0, _utils.formatWithValidation)(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (true) {
      return;
    }

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
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
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err => {
      delete this.sdr[resourceKey];
      throw err;
    });
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

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
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

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
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

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
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

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

function resolveRewrites() {}

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

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
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

    if ((_App$prototype = App.prototype) != null && _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.`;
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
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps`);
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

/***/ "./node_modules/next/image.js":
/*!************************************!*\
  !*** ./node_modules/next/image.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/image */ "./node_modules/next/dist/client/image.js")


/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/extends.js":
/*!**************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/extends.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

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

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
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

/***/ "./pages/dashboard/projects/index.js":
/*!*******************************************!*\
  !*** ./pages/dashboard/projects/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-plugin-superjson-next/tools */ "babel-plugin-superjson-next/tools");
/* harmony import */ var babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cookie */ "cookie");
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../lib/firebase */ "./lib/firebase.js");
/* harmony import */ var _components_dashboard_Tippy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/dashboard/Tippy */ "./components/dashboard/Tippy.js");
/* harmony import */ var _components_dashboard_NavbarTemplate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/dashboard/NavbarTemplate */ "./components/dashboard/NavbarTemplate.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! gsap */ "gsap");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _lib_newAuth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../lib/newAuth */ "./lib/newAuth.js");
/* harmony import */ var _components_BounceLoader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/BounceLoader */ "./components/BounceLoader.js");
/* harmony import */ var _components_dashboard_startup_EmptyStartup__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../components/dashboard/startup/EmptyStartup */ "./components/dashboard/startup/EmptyStartup.js");
/* harmony import */ var _components_dashboard_startup_StartupSuccess__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../components/dashboard/startup/StartupSuccess */ "./components/dashboard/startup/StartupSuccess.js");
/* harmony import */ var _components_dashboard_MembersCode__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../components/dashboard/MembersCode */ "./components/dashboard/MembersCode.js");



var _jsxFileName = "C:\\off-saas\\pages\\dashboard\\projects\\index.js";














const ProjectsManager = () => {
  const {
    0: projects,
    1: setProjects
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(async () => {
    const projectsArray = [];
    const userUid = js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.get('uid');
    _lib_firebase__WEBPACK_IMPORTED_MODULE_5__["db"].collection('projects').onSnapshot(querySnapshot => {
      querySnapshot.docs.map(doc => {
        const data = doc.data();
        data.projectUsers.map(user => {
          if (user.userUid === userUid) {
            projectsArray.push(data);
          }
        });
      });
      setProjects(projectsArray);
    }); // let ref = db.collection('projects');
    // const snapshot = await ref.get();
    // snapshot.forEach((doc) => {
    //   const data = doc.data();
    //   data.projectUsers.map((user) => {
    //     if (user.userUid === userUid) {
    //       projectsArray.push({ ...data });
    //     }
    //   });
    //   setProjects(projectsArray);
    // });
  }, []);
  console.log(projects);
  console.log(projects.length);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_8__["useRouter"])();
  const containerRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  const {
    currentUser
  } = Object(_lib_newAuth__WEBPACK_IMPORTED_MODULE_10__["useAuth"])();
  console.log(currentUser);

  const onProjectCreate = e => {
    e.preventDefault();
    gsap__WEBPACK_IMPORTED_MODULE_9___default.a.to(containerRef.current, {
      autoAlpha: 0,
      duration: 1,
      ease: gsap__WEBPACK_IMPORTED_MODULE_9__["Power4"].easeOut
    }); // setTimeout(() => {

    router.push('/dashboard/projects/new-startup'); // }, 1200);
  };

  const {
    0: activeClass,
    1: setActiveClass
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);

  const chooseClassesClick = index => {
    const menuDots = document.getElementById(`menu${index}`);

    if (activeClass) {
      gsap__WEBPACK_IMPORTED_MODULE_9___default.a.to(menuDots, {
        autoAlpha: 0
      });
      setActiveClass(false);
    } else {
      gsap__WEBPACK_IMPORTED_MODULE_9___default.a.to(menuDots, {
        autoAlpha: 1
      });
      setActiveClass(true);
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_dashboard_Tippy__WEBPACK_IMPORTED_MODULE_6__["default"], {
      startups: true,
      contentClass: "h-36 w-80 shadow-lg rounded-2xl bg-primary flex justify-center items-center",
      contentText: "This is a place where magical things happen ",
      contentText1: " Just start creating your startup and bring your idea into reality. Once you've done that, you can manage it from the main panel. Feel free to edit, save or delete your idea"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_dashboard_NavbarTemplate__WEBPACK_IMPORTED_MODULE_7__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        ref: containerRef,
        className: "min-h-screen w-full relative flex flex-col items-center text-primarydark",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "w-full sm:max-w-smContainer md:max-w-mdContainer lg:max-w-lgContainer xl:max-w-xlContainer 2xl:max-w-xxlContainer normal:max-w-normalContainer relative mt-12",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "grid grid-cols-2 grid-rows-1 grid-flow-col",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "flex items-center",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                height: "30",
                width: "30",
                className: "fill-current text-primary dark:text-primarydark",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 128 128",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
                  children: "Landing Success"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 95,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
                  id: "Landing_Success",
                  "data-name": "Landing Success",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                    className: "cls-1",
                    d: "M109.3,90.1A46,46,0,0,0,65,36V20.08c1.78-.62,7.21-2.14,12.57.23a19.33,19.33,0,0,0,14.82,0c.87-.38.61.31.61-17.93a1,1,0,0,0-1.43-.93c-.07,0-6.69,2.87-13.18,0A19.41,19.41,0,0,0,65,.93,1,1,0,0,0,63,1V36a45.86,45.86,0,0,0-28.66,10.8C16.18,40.48,4,40,.79,45.51-2.29,50.86,3.94,59.3,10,65.68A11,11,0,0,0,18,83c.81,38.41,46.08,59.2,75.66,34.21,8.53,3,29,9.15,33.55,1.31C130.39,113,123.86,102.65,109.3,90.1ZM77.59,3.31A19.39,19.39,0,0,0,91,3.83V18.68c-1.79.62-7.22,2.13-12.57-.23A19.19,19.19,0,0,0,65,17.93V3.08C66.81,2.46,72.24,1,77.59,3.31ZM65,45v-7c39.69.91,58,50.27,28.21,76.81C71.32,107,46,92.66,27.77,78.64a11,11,0,0,0-3.2-16.13A43.88,43.88,0,0,1,63,38.06V45A1,1,0,0,0,65,45ZM32.55,48.36a46.21,46.21,0,0,0-9.83,13.28,10.93,10.93,0,0,0-11.4,2.47C-8.39,43.23,5.23,39.08,32.55,48.36ZM10,72a9,9,0,1,1,9,9A9,9,0,0,1,10,72Zm10,11a11,11,0,0,0,6.34-2.82c18.45,14.21,43.45,28.35,65.05,36.22C63,139.16,20.83,119.1,20.05,83Zm105.4,34.5c-2.51,4.35-14,3.62-30-1.85a45.61,45.61,0,0,0,13.42-23.21C121.59,103.58,128,113.12,125.45,117.47Z"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 97,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 96,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 88,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "self-end text-2xl pl-2 dark:text-background",
                children: "Startups"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 103,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "flex justify-end",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                onClick: e => onProjectCreate(e),
                className: "hover:bg-primary hover:text-white dark:hover:bg-primarydark dark:hover:text-background focus:outline-none border border-primary text-primary text-base font-light py-2 px-6 rounded-2xl dark:text-primarydark dark:border-primarydark",
                children: "New startup"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 106,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 105,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
              className: "text-secondary text-md text-gray",
              children: "Bring your idea into reality"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "text-lg mt-10 -mb-6 dark:text-background",
              children: "Ideas you invented"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 118,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "w-full grid sm:grid-cols-1 md:grid-cols-2fr lg:grid-cols-3fr 2xl:grid-cols-4fr gap-8 border-r-6 rounded-2xl bg-white mt-8 mb-8 dark:bg-background p-8 text-center",
            children: projects ? projects.length == 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_dashboard_startup_EmptyStartup__WEBPACK_IMPORTED_MODULE_12__["default"], {
              onProjectCreate: onProjectCreate
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 123,
              columnNumber: 19
            }, undefined) : projects.map(({
              imageName,
              imageFileUrl,
              projectName,
              projectDescription,
              projectId
            }, index) => {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "shadow rounded-2xl flex flex-wrap justify-center items-center flex-col hover:shadow-lg transform hover:scale-105 hover:-translate-y-2 hover:-translate-x-2 transition duration-500 ease-in-out",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "relative inline-block text-right w-4/5 top-4 right-2",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    onClick: () => chooseClassesClick(index),
                    src: "/dots-menu2.svg",
                    height: 26,
                    width: 26,
                    className: "cursor-pointer"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 130,
                    columnNumber: 27
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    id: `menu${index}`,
                    className: "origin-top-right absolute left-1/2 transform -translate-x-1/2 w-44 lg:w-48 shadow-xl bg-white focus:outline-none invisible rounded-2xl",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "pt-1 text-left",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "transition duration-500 ease-in-out flex items-center justify-between hover:bg-primary",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                          //   onClick={(e) => onProjectEdit(e, image)}
                          href: "#",
                          className: "block px-4 py-2 2xl:py-3 text-sm text-primarydark transition duration-500 ease-in-out hover:text-background",
                          children: "Edit"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 143,
                          columnNumber: 33
                        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                          className: "mr-3 flex justify-center items-center relative bottom-1",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                            src: "/gifs/whale.gif",
                            height: 30,
                            width: 30
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 151,
                            columnNumber: 35
                          }, undefined)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 150,
                          columnNumber: 33
                        }, undefined)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 142,
                        columnNumber: 31
                      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "transition duration-500 ease-in-out flex items-center justify-between hover:bg-primary rounded-bl-2xl rounded-br-2xl",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                          //   onClick={(e) => onProjectDelete(e, image.projectId)}
                          href: "#",
                          className: "block px-4 py-2 2xl:py-3 text-sm text-primarydark transition duration-500 ease-in-out hover:text-background",
                          children: "Remove"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 155,
                          columnNumber: 33
                        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                          className: "mr-3 flex justify-center items-center relative bottom-1",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                            src: "/gifs/bomb.gif",
                            height: 30,
                            width: 30
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 163,
                            columnNumber: 35
                          }, undefined)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 162,
                          columnNumber: 33
                        }, undefined)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 154,
                        columnNumber: 31
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 141,
                      columnNumber: 29
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 137,
                    columnNumber: 27
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 129,
                  columnNumber: 25
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: imageFileUrl == null ? `/modal/${imageName}.svg` : imageFileUrl,
                  className: " h-40 w-40 p-4 border-b border-primary"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 170,
                  columnNumber: 25
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  style: {
                    height: 180
                  },
                  className: " overflow-scroll mt-2",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    className: "bg-white text-center",
                    value: projectName
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 175,
                    columnNumber: 27
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    className: "text-center mt-1 text-sm text-gray",
                    children: projectDescription
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 176,
                    columnNumber: 27
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 174,
                  columnNumber: 25
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 127,
                columnNumber: 23
              }, undefined);
            }) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_BounceLoader__WEBPACK_IMPORTED_MODULE_11__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 183,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_dashboard_MembersCode__WEBPACK_IMPORTED_MODULE_14__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 186,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
}; // export const getServerSideProps = async (context) => {
//   const cookies = await context.req.headers.cookie;
//   const parsedCookies = cookie.parse(cookies);
//   const projects = [];
//   let ref = db.collection('projects');
//   const snapshot = await ref.get();
//   snapshot.forEach((doc) => {
//     const data = doc.data();
//     data.projectUsers.map((user) => {
//       if (user.userUid === parsedCookies.uid) {
//         projects.push({ ...data });
//       }
//     });
//   });
//   return {
//     props: { projects },
//   };
// };


/* harmony default export */ __webpack_exports__["default"] = (Object(babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_1__["withSuperJSONPage"])(ProjectsManager));

/***/ }),

/***/ "./utils/useWindowSize.js":
/*!********************************!*\
  !*** ./utils/useWindowSize.js ***!
  \********************************/
/*! exports provided: useWindowSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useWindowSize", function() { return useWindowSize; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\off-saas\\utils\\useWindowSize.js";
 // Usage

function App() {
  const size = useWindowSize();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [size.width, "px / ", size.height, "px"]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
} // Hook


function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const {
    0: windowSize,
    1: setWindowSize
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    width: undefined,
    height: undefined
  });
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    } // Add event listener


    window.addEventListener('resize', handleResize); // Call handler right away so state gets updated with initial window size

    handleResize(); // Remove event listener on cleanup

    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
}

/***/ }),

/***/ "@emotion/react":
/*!*********************************!*\
  !*** external "@emotion/react" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@emotion/react");

/***/ }),

/***/ "@react-pdf/renderer":
/*!**************************************!*\
  !*** external "@react-pdf/renderer" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@react-pdf/renderer");

/***/ }),

/***/ "@tippyjs/react":
/*!*********************************!*\
  !*** external "@tippyjs/react" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@tippyjs/react");

/***/ }),

/***/ "babel-plugin-superjson-next/tools":
/*!****************************************************!*\
  !*** external "babel-plugin-superjson-next/tools" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-superjson-next/tools");

/***/ }),

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cookie");

/***/ }),

/***/ "file-saver":
/*!*****************************!*\
  !*** external "file-saver" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("file-saver");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/auth");

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/firestore");

/***/ }),

/***/ "firebase/functions":
/*!*************************************!*\
  !*** external "firebase/functions" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/functions");

/***/ }),

/***/ "firebase/storage":
/*!***********************************!*\
  !*** external "firebase/storage" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/storage");

/***/ }),

/***/ "gsap":
/*!***********************!*\
  !*** external "gsap" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("gsap");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "next-themes":
/*!******************************!*\
  !*** external "next-themes" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-themes");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-device-detect":
/*!**************************************!*\
  !*** external "react-device-detect" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-device-detect");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-spinners/BounceLoader":
/*!**********************************************!*\
  !*** external "react-spinners/BounceLoader" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-spinners/BounceLoader");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjQuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2ltYWdlLWNvbmZpZy5qc1wiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQm91bmNlTG9hZGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZGFzaGJvYXJkL0Rlc2t0b3BOYXZiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9kYXNoYm9hcmQvTWVtYmVyc0NvZGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9kYXNoYm9hcmQvTmF2YmFyVGVtcGxhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9kYXNoYm9hcmQvVGlwcHkuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9kYXNoYm9hcmQvc3RhcnR1cC9BbmltYXRlZEJhY2tncm91bmQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9kYXNoYm9hcmQvc3RhcnR1cC9FbXB0eVN0YXJ0dXAuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9kYXNoYm9hcmQvc3RhcnR1cC9FeGl0Q29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZGFzaGJvYXJkL3N0YXJ0dXAvUERGRG9jdW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9kYXNoYm9hcmQvc3RhcnR1cC9TdGFydHVwU3VjY2Vzcy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Rhc2hib2FyZC9zdGFydHVwL3Byb2plY3QvYnVzaW5lc3MtYXBwL3RpcHB5cy9NYW5hZ2VyVGlwcHkuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2ZpcmViYXNlLmpzIiwid2VicGFjazovLy8uL2xpYi9uZXdBdXRoLmpzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvaW1hZ2UudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbGluay50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2sudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yb3V0ZS1sb2FkZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3dpdGgtcm91dGVyLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvbWl0dC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yZXNvbHZlLXJld3JpdGVzLW5vb3AudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9pbWFnZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvZGFzaGJvYXJkL3Byb2plY3RzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3V0aWxzL3VzZVdpbmRvd1NpemUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGVtb3Rpb24vcmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcmVhY3QtcGRmL3JlbmRlcmVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHRpcHB5anMvcmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWJlbC1wbHVnaW4tc3VwZXJqc29uLW5leHQvdG9vbHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb29raWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaWxlLXNhdmVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2UvYXBwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2UvYXV0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL2ZpcmVzdG9yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL2Z1bmN0aW9uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL3N0b3JhZ2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJnc2FwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianMtY29va2llXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC10aGVtZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZGV2aWNlLWRldGVjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc3Bpbm5lcnMvQm91bmNlTG9hZGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiQm91bmNlTG9hZGVyQ29tcG9uZW50IiwiYm91bmNlU3R5bGVzIiwiY3NzIiwiSXNBY3RpdmVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkRlc2t0b3BOYXZiYXIiLCJjaGlsZHJlbiIsImxvZ091dCIsInVzZUF1dGgiLCJ0aGVtZSIsInNldFRoZW1lIiwidXNlVGhlbWUiLCJhY3RpdmUiLCJzZXRBY3RpdmUiLCJ1c2VTdGF0ZSIsIm5hdlJlZiIsInVzZVJlZiIsInJvdXRlciIsInVzZVJvdXRlciIsIm1hblJlZiIsInRsIiwiZ3NhcCIsInRpbWVsaW5lIiwicmVwZWF0IiwieW95byIsInVzZUVmZmVjdCIsInRvIiwiY3VycmVudCIsImR1cmF0aW9uIiwieSIsIngiLCJlYXNlIiwiUG93ZXIxIiwiZWFzZUluT3V0IiwiYWN0aXZlQ2xhc3MxIiwic2V0QWN0aXZlQ2xhc3MxIiwiYWN0aXZlQ2xhc3MyIiwic2V0QWN0aXZlQ2xhc3MyIiwiYWN0aXZlQ2xhc3MzIiwic2V0QWN0aXZlQ2xhc3MzIiwiYWN0aXZlQ2xhc3M0Iiwic2V0QWN0aXZlQ2xhc3M0IiwiYWN0aXZlQ2xhc3M1Iiwic2V0QWN0aXZlQ2xhc3M1IiwiYWN0aXZlSG92ZXIxIiwic2V0QWN0aXZlSG92ZXIxIiwiYWN0aXZlSG92ZXIyIiwic2V0QWN0aXZlSG92ZXIyIiwiYWN0aXZlSG92ZXIzIiwic2V0QWN0aXZlSG92ZXIzIiwiYWN0aXZlSG92ZXI0Iiwic2V0QWN0aXZlSG92ZXI0IiwiYWN0aXZlSG92ZXI1Iiwic2V0QWN0aXZlSG92ZXI1IiwicGF0aG5hbWUiLCJpbmNsdWRlcyIsImFjdGl2ZUNsYXNzRm4xIiwiYWN0aXZlQ2xhc3NGbjIiLCJhY3RpdmVDbGFzc0ZuMyIsImFjdGl2ZUNsYXNzRm40IiwiYWN0aXZlQ2xhc3NGbjUiLCJtb3VzZUVudGVyTmF2Iiwid2lkdGgiLCJQb3dlcjQiLCJlYXNlT3V0IiwibW91c2VMZWF2ZU5hdiIsIm92ZXJmbG93IiwiaGVpZ2h0IiwiY3Vyc29yIiwiTWVtYmVyc0NvZGVDb21wb25lbnQiLCJwcm9qZWN0SWRJbnB1dFZhbHVlIiwic2V0UHJvamVjdElkSW5wdXRWYWx1ZSIsInByb2plY3RMb2FkaW5nIiwic2V0UHJvamVjdExvYWRpbmciLCJjdXJyZW50VXNlciIsIm9uTmV3UHJvamVjdEFkZCIsImRhdGEiLCJkYiIsImNvbGxlY3Rpb24iLCJkb2MiLCJnZXQiLCJwcm9qZWN0RGF0YSIsInVpZCIsImFsZXJ0IiwidXNlcnNEYXRhIiwibmFtZSIsInVzZXJDb3VudHJ5IiwiZm9ybWF0ZWRVc2VyIiwibmV3VXNlcnNBcnJheSIsInByb2plY3RVc2VycyIsInB1c2giLCJlbWFpbCIsInN0cmlwZVJvbGUiLCJ0b2tlbiIsInVzZXJVaWQiLCJ1c2VyTmFtZSIsInVwZGF0ZSIsInJlbG9hZCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIlJlZGlyZWN0IiwiTmF2YmFyVGVtcGxhdGUiLCJzaXplIiwidXNlV2luZG93U2l6ZSIsImFjdGl2ZUhvdmVyIiwidXNlQ29udGV4dCIsImNvbnRlbnRSZWYiLCJhY3RpdmVDbGFzcyIsIm1hcmdpbkxlZnQiLCJ0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb24iLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJ0cmFuc2l0aW9uUHJvcGVydHkiLCJUaXBweU1vbnN0ZXIiLCJzZXRUaXBweUhlbHBlciIsInNldFdyb25nTmFtZVRpcHB5SGVscGVyIiwid3JvbmdOYW1lIiwicHJvamVjdENyZWF0b3IiLCJjYXNoRmxvdyIsImJ1c2luZXNzUGxhbiIsInByb2plY3RNYW5hZ2VyIiwiY29udGVudENsYXNzIiwiY29udGVudFRleHQiLCJjb250ZW50VGV4dDEiLCJzdGFydHVwcyIsIm1hcmtldCIsIm1vZGVsIiwic3VjY2VzcyIsInRpcHB5TW9uc3RlciIsInNldFRpcHB5TW9uc3RlciIsInNldEN1cnJlbnRUaXBweSIsImVtcHR5SW5wdXQiLCJpbml0aWFsTW9kYWwiLCJ2aXNpb24iLCJwcm9kdWN0IiwiZmluYW5jZXMiLCJ3ZWxjb21lIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJ0aXBweVJlZiIsInNob3ciLCJmcm9tVG8iLCJhdXRvQWxwaGEiLCJzY2FsZSIsInRyYW5zZm9ybU9yaWdpbiIsImhpZGUiLCJlYXNlSW4iLCJvbkltYWdlQ2xpY2siLCJBbmltYXRlZEJhY2tncm91bmQiLCJFbXB0eVN0YXJ0dXAiLCJvblByb2plY3RDcmVhdGUiLCJFeGl0Q29tcG9uZW50IiwiZXhpdEltYWdlIiwiaXNNb2JpbGUiLCJhZGRFdmVudExpc3RlbmVyIiwicm90YXRpb24iLCJMaW5lYXIiLCJSb3V0ZXIiLCJxdWVyeSIsInByb2plY3QiLCJNeURvY3VtZW50MSIsImNvbnNvbGUiLCJsb2ciLCJGb250IiwicmVnaXN0ZXIiLCJzcmMiLCJmYW1pbHkiLCJzdHlsZXMiLCJTdHlsZVNoZWV0IiwiY3JlYXRlIiwiaG9tZVBhZ2UiLCJmb250RmFtaWx5IiwiYmFja2dyb3VuZENvbG9yIiwiZmxleERpcmVjdGlvbiIsImhvbWVQYWdlVGl0bGVTZWN0aW9uIiwidGV4dEFsaWduIiwibWFyZ2luVG9wIiwiaG9tZVBhZ2VUaXRsZSIsImZvbnRTaXplIiwiY29sb3IiLCJob21lUGFnZURlc2MiLCJpbWFnZSIsImRpc3BsYXkiLCJtYXJnaW5SaWdodCIsImxlZnREZXNjQmxvY2siLCJib3JkZXJUb3BSaWdodFJhZGl1cyIsImxlZnREZXNjQmxvY2tUZXh0IiwicGFkZGluZyIsImxpbmVIZWlnaHQiLCJyaWdodEJhciIsInBvc2l0aW9uIiwicmlnaHQiLCJyaWdodEJhckNvbnRhY3QiLCJib3R0b20iLCJib3JkZXJUb3BMZWZ0UmFkaXVzIiwiY291bnRyeVRleHQiLCJlbWFpbFRleHQiLCJwaG9uZU51bWJlclRleHQiLCJncmF5QmFyT25lIiwibGVmdCIsImdyYXlCYXJUd28iLCJvdmVydmlld1BhZ2UiLCJwYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRvbSIsIm92ZXJ2aWV3SGVhZGluZyIsIm92ZXJ2aWV3U3VidGl0bGUiLCJvdmVydmlld0ltYWdlIiwidG9wIiwib3ZlcnZpZXdTZWN0aW9uIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJzZWN0aW9uQ29udGFpbmVyT25lIiwic2VjdGlvbkhlYWRpbmdPbmUiLCJzZWN0aW9uVGV4dCIsInNlY3Rpb25Db250YWluZXJUd28iLCJzZWN0aW9uSGVhZGluZ1R3byIsInNlY3Rpb25Db250YWluZXJUaHJlZSIsInNlY3Rpb25IZWFkaW5nVGhyZWUiLCJjb250ZW50c1BhZ2UiLCJjb250ZW50c0xlZnRCYXIiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJjb250ZW50c0Jhck9uZSIsInRyYW5zZm9ybSIsImNvbnRlbnRzQmFyVHdvIiwiY29udGVudHNCYXJUaHJlZSIsImNvbnRlbnRzQmFyRm91ciIsImNvbnRlbnRzQmFyRml2ZSIsImNvbnRlbnRzUmlnaHRCYXIiLCJjb250ZW50c1JpZ2h0VGV4dE9uZSIsImNvbnRlbnRzUmlnaHRUZXh0VHdvIiwiY29udGVudHNSaWdodFRleHRUaHJlZSIsImNvbnRlbnRzUmlnaHRUZXh0Rm91ciIsImNvbnRlbnRzUmlnaHRUZXh0Rml2ZSIsImF2YXRhckV4aXN0cyIsImltYWdlTmFtZUV4aXN0cyIsIm1hcmtldFByb2JsZW1TZWN0aW9uIiwiaWRlYU5hbWUiLCJpZGVhRGVzYyIsInN0YXJ0dXBGaWVsZCIsImlkZWFDb3VudHJ5Iiwic3RhcnR1cEVtYWlsIiwic3RhcnR1cFBob25lIiwibWFya2V0U29sdXRpb25TZWN0aW9uIiwiZm91bmRlcnNTZWN0aW9uIiwicHJvZHVjdE92ZXJ2aWV3U2VjdGlvbiIsInByb2R1Y3RQcm9tb3Rpb25TZWN0aW9uIiwicHJvZHVjdEJlbmVmaXRzU2VjdGlvbiIsIm1hcmtldE92ZXJ2aWV3U2VjdGlvbiIsImNvbXBldGl0b3JzU2VjdGlvbiIsImNvbXBldGl0aW9uRGlzdGluZ3Vpc2hTZWN0aW9uIiwidGFyZ2V0Q3VzdG9tZXJzU2VjdGlvbiIsInN0YXJ0dXBDb3N0c1NlY3Rpb24iLCJydW5uaW5nQ29zdHNTZWN0aW9uIiwiZmluYW5jaW5nU2VjdGlvbiIsImJ1c2luZXNzTW9kZWxPdmVydmlld1NlY3Rpb24iLCJidXNpbmVzc0dyb3dTZWN0aW9uIiwid2h5U3VjY2Vzc1NlY3Rpb24iLCJTdGFydHVwU3VjY2VzcyIsIm1hbmFnZXJQYWdlIiwicHJvamVjdElkIiwic2V0UHJvamVjdElkIiwic2V0SWRlYU5hbWUiLCJzZXRJZGVhRGVzYyIsInNldElkZWFDb3VudHJ5Iiwic2V0U3RhcnR1cEZpZWxkIiwic2V0U3RhcnR1cEVtYWlsIiwic2V0U3RhcnR1cFBob25lIiwic2V0SW1hZ2VOYW1lRXhpc3RzIiwic2V0QXZhdGFyRXhpc3RzIiwic2V0TWFya2V0UHJvYmxlbVNlY3Rpb24iLCJzZXRNYXJrZXRTb2x1dGlvblNlY3Rpb24iLCJzZXRGb3VuZGVyc1NlY3Rpb24iLCJzZXRQcm9kdWN0T3ZlcnZpZXdTZWN0aW9uIiwic2V0UHJvZHVjdFByb21vdGlvblNlY3Rpb24iLCJzZXRQcm9kdWN0QmVuZWZpdHNTZWN0aW9uIiwic2V0TWFya2V0T3ZlcnZpZXdTZWN0aW9uIiwic2V0Q29tcGV0aXRvcnNTZWN0aW9uIiwic2V0Q29tcGV0aXRpb25EaXN0aW5ndWlzaFNlY3Rpb24iLCJzZXRUYXJnZXRDdXN0b21lcnNTZWN0aW9uIiwic2V0U3RhcnR1cENvc3RzU2VjdGlvbiIsInNldFJ1bm5pbmdDb3N0c1NlY3Rpb24iLCJzZXRGaW5hbmNpbmdTZWN0aW9uIiwic2V0QnVzaW5lc3NNb2RlbE92ZXJ2aWV3U2VjdGlvbiIsInNldEJ1c2luZXNzR3Jvd1NlY3Rpb24iLCJzZXRXaHlTdWNjZXNzU2VjdGlvbiIsImxvYWRpbmdIZWxwZXIiLCJzZXRMb2FkaW5nSGVscGVyIiwiZG9jdW1lbnRJZCIsInNldERvY3VtZW50SWQiLCJDb29raWVzIiwid2hlcmUiLCJ0aGVuIiwicXVlcnlTbmFwc2hvdCIsImZvckVhY2giLCJkb2MxIiwiaW5pdGlhbERhdGEiLCJwcm9qZWN0TmFtZSIsInByb2plY3REZXNjcmlwdGlvbiIsInByb2plY3RDb3VudHJ5IiwicHJvamVjdEZpZWxkIiwicHJvamVjdEVtYWlsIiwicHJvamVjdE51bWJlciIsImltYWdlTmFtZSIsImltYWdlRmlsZVVybCIsIm9uU25hcHNob3QiLCJzZXJ2ZXJVcGRhdGUiLCJkb2NzIiwibWFwIiwiaWQiLCJtYXJrZXRQcm9ibGVtU2VjdGlvbkRhdGEiLCJtYXJrZXRTb2x1dGlvblNlY3Rpb25EYXRhIiwiZm91bmRlcnNTZWN0aW9uRGF0YSIsInByb2R1Y3RPdmVydmlld1NlY3Rpb25EYXRhIiwicHJvZHVjdFByb21vdGlvblNlY3Rpb25EYXRhIiwicHJvZHVjdEJlbmVmaXRzU2VjdGlvbkRhdGEiLCJtYXJrZXRPdmVydmlld1NlY3Rpb25EYXRhIiwiY29tcGV0aXRvcnNTZWN0aW9uRGF0YSIsImNvbXBldGl0aW9uRGlzdGluZ3Vpc2hTZWN0aW9uRGF0YSIsInRhcmdldEN1c3RvbWVyc1NlY3Rpb25EYXRhIiwic3RhcnR1cENvc3RzU2VjdGlvbkRhdGEiLCJydW5uaW5nQ29zdHNTZWN0aW9uRGF0YSIsImZpbmFuY2luZ1NlY3Rpb25EYXRhIiwiYnVzaW5lc3NNb2RlbE92ZXJ2aWV3U2VjdGlvbkRhdGEiLCJidXNpbmVzc0dyb3dTZWN0aW9uRGF0YSIsIndoeVN1Y2Nlc3NTZWN0aW9uRGF0YSIsIm9uUHJvamVjdExlYXZlIiwicHJldmVudERlZmF1bHQiLCJzZXRUaW1lb3V0IiwiTXlEb2N1bWVudCIsInByb3BzIiwidXNlTWVtbyIsImFzUGRmIiwicGRmIiwidXBkYXRlQ29udGFpbmVyIiwiYmxvYiIsInRvQmxvYiIsInNhdmVBcyIsIk1hbmFnZXJUaXBweSIsImZpcmViYXNlIiwiYXBwcyIsImxlbmd0aCIsImluaXRpYWxpemVBcHAiLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJtZWFzdXJlbWVudElkIiwiYXV0aCIsImZpcmVzdG9yZSIsInN0b3JhZ2UiLCJBdXRoQ29udGV4dCIsIkF1dGhQcm92aWRlciIsInNldEN1cnJlbnRVc2VyIiwibG9hZGluZyIsInNldExvYWRpbmciLCJoYW5kbGVVc2VyIiwidXNlciIsInNldCIsImZvcm1hdFVzZXIiLCJtZXJnZSIsInJlbW92ZSIsInNpZ25VcCIsInBhc3N3b3JkIiwiY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkIiwicmVzcG9uc2UiLCJsb2dJbiIsInNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwic2lnbk91dCIsInVuc3Vic2NyaWJlIiwib25JZFRva2VuQ2hhbmdlZCIsImdldFN0cmlwZVJvbGUiLCJnZXRJZFRva2VuIiwiZGVjb2RlZFRva2VuIiwiZ2V0SWRUb2tlblJlc3VsdCIsImNsYWltcyIsInByb3ZpZGVyIiwicHJvdmlkZXJEYXRhIiwicHJvdmlkZXJJZCIsImdsb2JhbCIsIlZBTElEX0xPQURJTkdfVkFMVUVTIiwibG9hZGVycyIsIlZBTElEX0xBWU9VVF9WQUxVRVMiLCJkZXZpY2VTaXplcyIsImltYWdlU2l6ZXMiLCJsb2FkZXIiLCJwYXRoIiwiZG9tYWlucyIsInByb2Nlc3MiLCJpbWFnZUNvbmZpZ0RlZmF1bHQiLCJhbGxTaXplcyIsImNvbmZpZ0RldmljZVNpemVzIiwiYSIsInNpemVzIiwibGF5b3V0IiwicGVyY2VudFNpemVzIiwibSIsInBhcnNlSW50Iiwic21hbGxlc3RSYXRpbyIsIk1hdGgiLCJ3aWR0aHMiLCJzIiwia2luZCIsInciLCJwIiwic3JjU2V0IiwiZ2V0V2lkdGhzIiwibGFzdCIsImkiLCJsb2FkIiwicm9vdCIsIlZBTElEX0xPQURFUlMiLCJjb25maWdMb2FkZXIiLCJ1bm9wdGltaXplZCIsInByaW9yaXR5IiwiYWxsIiwicmVzdCIsInVuc2l6ZWQiLCJCb29sZWFuIiwiSlNPTiIsImlzTGF6eSIsInJvb3RNYXJnaW4iLCJkaXNhYmxlZCIsImlzVmlzaWJsZSIsIndpZHRoSW50IiwiZ2V0SW50IiwiaGVpZ2h0SW50IiwicXVhbGl0eUludCIsImltZ1N0eWxlIiwiYm94U2l6aW5nIiwiYm9yZGVyIiwibWFyZ2luIiwibWluV2lkdGgiLCJtYXhXaWR0aCIsIm1pbkhlaWdodCIsIm1heEhlaWdodCIsInF1b3RpZW50IiwiaXNOYU4iLCJ3cmFwcGVyU3R5bGUiLCJzaXplclN0eWxlIiwic2l6ZXJTdmciLCJpbWdBdHRyaWJ1dGVzIiwiZ2VuZXJhdGVJbWdBdHRycyIsInF1YWxpdHkiLCJwYXJhbXMiLCJwYXJhbXNTdHJpbmciLCJub3JtYWxpemVTcmMiLCJtaXNzaW5nVmFsdWVzIiwicGFyc2VkU3JjIiwiY29uZmlnRG9tYWlucyIsImhvc3RuYW1lIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicHJlZmV0Y2hlZCIsImVyciIsImN1ckxvY2FsZSIsIm9wdGlvbnMiLCJocmVmIiwiZXZlbnQiLCJub2RlTmFtZSIsImlzTW9kaWZpZWRFdmVudCIsInNjcm9sbCIsImFzIiwicmVwbGFjZSIsImFyZ3MiLCJrZXkiLCJleHBlY3RlZCIsImFjdHVhbCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJPYmplY3QiLCJjcmVhdGVQcm9wRXJyb3IiLCJfIiwib3B0aW9uYWxQcm9wc0d1YXJkIiwic2hhbGxvdyIsInBhc3NIcmVmIiwicHJlZmV0Y2giLCJsb2NhbGUiLCJvcHRpb25hbFByb3BzIiwidmFsVHlwZSIsImhhc1dhcm5lZCIsIlJlYWN0IiwicmVzb2x2ZWRBcyIsImNoaWxkIiwiQ2hpbGRyZW4iLCJjaGlsZFJlZiIsInNldFJlZiIsImVsIiwic2V0SW50ZXJzZWN0aW9uUmVmIiwic2hvdWxkUHJlZmV0Y2giLCJpc1ByZWZldGNoZWQiLCJjaGlsZFByb3BzIiwicmVmIiwib25DbGljayIsImxpbmtDbGlja2VkIiwibG9jYWxlRG9tYWluIiwiTGluayIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwicmVxdWVzdElkbGVDYWxsYmFjayIsInNlbGYiLCJzdGFydCIsIkRhdGUiLCJjYiIsImRpZFRpbWVvdXQiLCJ0aW1lUmVtYWluaW5nIiwiY2FuY2VsSWRsZUNhbGxiYWNrIiwiY2xlYXJUaW1lb3V0IiwiTVNfTUFYX0lETEVfREVMQVkiLCJlbnRyeSIsIlByb21pc2UiLCJwcm9tIiwicmVzb2x2ZSIsInJlc29sdmVyIiwiZnV0dXJlIiwiZ2VuZXJhdG9yIiwibGluayIsImRvY3VtZW50Iiwid2luZG93IiwiY2FuUHJlZmV0Y2giLCJoYXNQcmVmZXRjaCIsInJlcyIsIkFTU0VUX0xPQURfRVJST1IiLCJTeW1ib2wiLCJzY3JpcHQiLCJyZWplY3QiLCJtYXJrQXNzZXRFcnJvciIsImNhbmNlbGxlZCIsInIiLCJvbkJ1aWxkTWFuaWZlc3QiLCJyZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0Iiwic2NyaXB0cyIsImFzc2V0UHJlZml4IiwiZW5jb2RlVVJJIiwiZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCIsIm1hbmlmZXN0Iiwicm91dGUiLCJhbGxGaWxlcyIsInYiLCJlbnRyeXBvaW50cyIsImxvYWRlZFNjcmlwdHMiLCJzdHlsZVNoZWV0cyIsInJvdXRlcyIsImFwcGVuZFNjcmlwdCIsImZldGNoIiwidGV4dCIsImNvbnRlbnQiLCJ3aGVuRW50cnlwb2ludCIsIndpdGhGdXR1cmUiLCJvbkVudHJ5cG9pbnQiLCJmbiIsImV4cG9ydHMiLCJjb21wb25lbnQiLCJlcnJvciIsImlucHV0Iiwib2xkIiwibG9hZFJvdXRlIiwiZ2V0RmlsZXNGb3JSb3V0ZSIsImVudHJ5cG9pbnQiLCJjbiIsIm5hdmlnYXRvciIsIm91dHB1dCIsInByZWZldGNoVmlhRG9tIiwiY3JlYXRlUm91dGVMb2FkZXIiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJldmVudEZpZWxkIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJfcm91dGVyIiwiaW5zdGFuY2UiLCJBcnJheSIsImhhc0ludGVyc2VjdGlvbk9ic2VydmVyIiwiaXNEaXNhYmxlZCIsInVub2JzZXJ2ZSIsIm9ic2VydmUiLCJpZGxlQ2FsbGJhY2siLCJjcmVhdGVPYnNlcnZlciIsImVsZW1lbnRzIiwib2JzZXJ2ZXIiLCJvYnNlcnZlcnMiLCJlbnRyaWVzIiwiY2FsbGJhY2siLCJDb21wb3NlZENvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsIldpdGhSb3V0ZXJXcmFwcGVyIiwicGF0aG5hbWVQYXJ0cyIsImxvY2FsZXMiLCJkZXRlY3RlZExvY2FsZSIsIm9uIiwib2ZmIiwiZW1pdCIsImhhbmRsZXIiLCJiYXNlUGF0aCIsInByZWZpeCIsInBhdGhOb1F1ZXJ5SGFzaCIsInF1ZXJ5SW5kZXgiLCJoYXNoSW5kZXgiLCJhZGRQYXRoUHJlZml4IiwidXJsIiwibG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsImhhc0Jhc2VQYXRoIiwiaW50ZXJwb2xhdGVkUm91dGUiLCJkeW5hbWljUmVnZXgiLCJkeW5hbWljR3JvdXBzIiwiZHluYW1pY01hdGNoZXMiLCJhc1BhdGhuYW1lIiwicGFyYW0iLCJyZXBsYWNlZCIsIm9wdGlvbmFsIiwic2VnbWVudCIsInJlc3VsdCIsImZpbHRlcmVkUXVlcnkiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJpc0xvY2FsVVJMIiwicmVzb2x2ZUFzIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsImludGVycG9sYXRlQXMiLCJoYXNoIiwib21pdFBhcm1zRnJvbVF1ZXJ5IiwicmVzb2x2ZWRIcmVmIiwib3JpZ2luIiwicmVzb2x2ZUhyZWYiLCJocmVmSGFkT3JpZ2luIiwiYXNIYWRPcmlnaW4iLCJzdHJpcE9yaWdpbiIsInByZXBhcmVkVXJsIiwiYWRkQmFzZVBhdGgiLCJwcmVwYXJlZEFzIiwiY2xlYW5QYXRobmFtZSIsInBhZ2VzIiwicGFnZSIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiU1NHX0RBVEFfTk9UX0ZPVU5EIiwiY3JlZGVudGlhbHMiLCJhdHRlbXB0cyIsImZldGNoUmV0cnkiLCJub3RGb3VuZCIsImlzU2VydmVyUmVuZGVyIiwiY29uc3RydWN0b3IiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic2RyIiwic3ViIiwiY2xjIiwicGFnZUxvYWRlciIsIl9icHMiLCJldmVudHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiaXNGYWxsYmFjayIsIl9pbkZsaWdodFJvdXRlIiwiX3NoYWxsb3ciLCJkZWZhdWx0TG9jYWxlIiwiZG9tYWluTG9jYWxlcyIsImlzUmVhZHkiLCJpc1ByZXZpZXciLCJpc0xvY2FsZURvbWFpbiIsIl9pZHgiLCJzdGF0ZSIsImluaXRpYWwiLCJfX05fU1NHIiwiaW5pdGlhbFByb3BzIiwiX19OX1NTUCIsIkNvbXBvbmVudCIsImF1dG9FeHBvcnREeW5hbWljIiwiYmFjayIsInByZXBhcmVVcmxBcyIsImxvY2FsZUNoYW5nZSIsIlNUIiwicGVyZm9ybWFuY2UiLCJyb3V0ZVByb3BzIiwiYWRkTG9jYWxlIiwiZGVsQmFzZVBhdGgiLCJjbGVhbmVkQXMiLCJkZWxMb2NhbGUiLCJwYXJzZWQiLCJfX3Jld3JpdGVzIiwibWV0aG9kIiwicmVzb2x2ZUR5bmFtaWNSb3V0ZSIsInBhcnNlZEFzIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJzaG91bGRJbnRlcnBvbGF0ZSIsIm1pc3NpbmdQYXJhbXMiLCJyb3V0ZUluZm8iLCJkZXN0aW5hdGlvbiIsInBhcnNlZEhyZWYiLCJub3RGb3VuZFJvdXRlIiwiYXBwQ29tcCIsImlzVmFsaWRTaGFsbG93Um91dGUiLCJmb3JjZWRTY3JvbGwiLCJjaGFuZ2VTdGF0ZSIsIl9fTiIsImlkeCIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJleGlzdGluZ1JvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsInJlcXVpcmUiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJkYXRhSHJlZiIsImJlZm9yZVBvcFN0YXRlIiwib25seUFIYXNoQ2hhbmdlIiwibmV3SGFzaCIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJzY3JvbGxUb0hhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJpc1NzZyIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsIl9nZXREYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJmZXRjaE5leHREYXRhIiwiX2dldFNlcnZlckRhdGEiLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5Iiwic2xhc2hlZFByb3RvY29scyIsInByb3RvY29sIiwidXJsT2JqIiwiaG9zdCIsIlN0cmluZyIsInF1ZXJ5c3RyaW5nIiwic2VhcmNoIiwiVEVTVF9ST1VURSIsImdsb2JhbEJhc2UiLCJyZXNvbHZlZEJhc2UiLCJzZWFyY2hQYXJhbXMiLCJpdGVtIiwic3RyaW5naWZ5VXJsUXVlcnlQYXJhbSIsInNlYXJjaFBhcmFtc0xpc3QiLCJyZSIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsInNsdWdOYW1lIiwiZyIsImdyb3VwcyIsInN0ciIsInNlZ21lbnRzIiwibm9ybWFsaXplZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsInBhcnNlUGFyYW1ldGVyIiwicG9zIiwiZXNjYXBlUmVnZXgiLCJyb3V0ZUtleUNoYXJDb2RlIiwicm91dGVLZXlDaGFyTGVuZ3RoIiwiZ2V0U2FmZVJvdXRlS2V5Iiwicm91dGVLZXkiLCJyb3V0ZUtleXMiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImNsZWFuZWRLZXkiLCJpbnZhbGlkS2V5IiwibmFtZWRSZWdleCIsInVzZWQiLCJwb3J0IiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJBcHAiLCJnZXREaXNwbGF5TmFtZSIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJpc1Jlc1NlbnQiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJQcm9qZWN0c01hbmFnZXIiLCJwcm9qZWN0cyIsInNldFByb2plY3RzIiwicHJvamVjdHNBcnJheSIsImNvbnRhaW5lclJlZiIsInNldEFjdGl2ZUNsYXNzIiwiY2hvb3NlQ2xhc3Nlc0NsaWNrIiwiaW5kZXgiLCJtZW51RG90cyIsImdldEVsZW1lbnRCeUlkIiwid2luZG93U2l6ZSIsInNldFdpbmRvd1NpemUiLCJ1bmRlZmluZWQiLCJoYW5kbGVSZXNpemUiLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJyZW1vdmVFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUN4RkEsOEQ7Ozs7Ozs7Ozs7O0FDQUEsd0U7Ozs7Ozs7Ozs7O0FDQUEsZ0c7Ozs7Ozs7Ozs7O0FDQUEsb0U7Ozs7Ozs7Ozs7O0FDQUEseUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFD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Q3J0QixVQUFNLEVBQUVxdEI7QUFGbUMsR0FBRCxDQUE1QztBQUlBL3ZCLHlEQUFTLENBQUMsTUFBTTtBQUNkO0FBQ0EsYUFBU2d3QixZQUFULEdBQXdCO0FBQ3RCO0FBQ0FGLG1CQUFhLENBQUM7QUFDWnp0QixhQUFLLEVBQUV1YyxNQUFNLENBQUNxUixVQURGO0FBRVp2dEIsY0FBTSxFQUFFa2MsTUFBTSxDQUFDc1I7QUFGSCxPQUFELENBQWI7QUFJRCxLQVJhLENBU2Q7OztBQUNBdFIsVUFBTSxDQUFDM1csZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0MrbkIsWUFBbEMsRUFWYyxDQVdkOztBQUNBQSxnQkFBWSxHQVpFLENBYWQ7O0FBQ0EsV0FBTyxNQUFNcFIsTUFBTSxDQUFDdVIsbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUNILFlBQXJDLENBQWI7QUFDRCxHQWZRLEVBZU4sRUFmTSxDQUFULENBUDhCLENBc0J0Qjs7QUFDUixTQUFPSCxVQUFQO0FBQ0QsQzs7Ozs7Ozs7Ozs7QUNuQ0QsMkM7Ozs7Ozs7Ozs7O0FDQUEsZ0Q7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsOEQ7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsZ0Q7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvZGFzaGJvYXJkL3Byb2plY3RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9kYXNoYm9hcmQvcHJvamVjdHMvaW5kZXguanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2hlYWQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdG8tYmFzZS02NC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2ltYWdlLWNvbmZpZy5qc1wiKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XHJcbmltcG9ydCBCb3VuY2VMb2FkZXIgZnJvbSAncmVhY3Qtc3Bpbm5lcnMvQm91bmNlTG9hZGVyJztcclxuXHJcbmNvbnN0IEJvdW5jZUxvYWRlckNvbXBvbmVudCA9ICgpID0+IHtcclxuICBjb25zdCBib3VuY2VTdHlsZXMgPSBjc3NgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIGA7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgaC1zY3JlZW4gdy1mdWxsXCI+XHJcbiAgICAgIDxCb3VuY2VMb2FkZXIgY29sb3I9eycjNkM2M0ZGJ30gY3NzPXtib3VuY2VTdHlsZXN9IC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQm91bmNlTG9hZGVyQ29tcG9uZW50O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VTdGF0ZSwgY3JlYXRlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgZ3NhcCwgeyBQb3dlcjEsIFBvd2VyNCB9IGZyb20gJ2dzYXAnO1xyXG5cclxuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tICduZXh0LXRoZW1lcyc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gJy4uLy4uL2xpYi9uZXdBdXRoJztcclxuXHJcbmV4cG9ydCBjb25zdCBJc0FjdGl2ZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5jb25zdCBEZXNrdG9wTmF2YmFyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IHsgbG9nT3V0IH0gPSB1c2VBdXRoKCk7XHJcblxyXG4gIGNvbnN0IHsgdGhlbWUsIHNldFRoZW1lIH0gPSB1c2VUaGVtZSgpO1xyXG4gIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgbmF2UmVmID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBtYW5SZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgdGwgPSBnc2FwLnRpbWVsaW5lKHsgcmVwZWF0OiAtMSwgeW95bzogdHJ1ZSB9KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHRsLnRvKG1hblJlZi5jdXJyZW50LCB7XHJcbiAgICAgIGR1cmF0aW9uOiAzLFxyXG4gICAgICB5OiAyNTAsXHJcbiAgICAgIHg6IDE3NSxcclxuICAgICAgZWFzZTogUG93ZXIxLmVhc2VJbk91dCxcclxuICAgIH0pXHJcbiAgICAgIC50byhtYW5SZWYuY3VycmVudCwge1xyXG4gICAgICAgIGR1cmF0aW9uOiAzLFxyXG4gICAgICAgIHk6IDUwMCxcclxuICAgICAgICB4OiAzNTAsXHJcbiAgICAgICAgZWFzZTogUG93ZXIxLmVhc2VJbk91dCxcclxuICAgICAgfSlcclxuICAgICAgLnRvKG1hblJlZi5jdXJyZW50LCB7XHJcbiAgICAgICAgZHVyYXRpb246IDMsXHJcbiAgICAgICAgeTogMjUwLFxyXG4gICAgICAgIHg6IDE3NSxcclxuICAgICAgICBlYXNlOiBQb3dlcjEuZWFzZUluT3V0LFxyXG4gICAgICB9KVxyXG4gICAgICAudG8obWFuUmVmLmN1cnJlbnQsIHsgZHVyYXRpb246IDMsIHk6IDAsIHg6IDAsIGVhc2U6IFBvd2VyMS5lYXNlSW5PdXQgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBbYWN0aXZlQ2xhc3MxLCBzZXRBY3RpdmVDbGFzczFdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFthY3RpdmVDbGFzczIsIHNldEFjdGl2ZUNsYXNzMl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2FjdGl2ZUNsYXNzMywgc2V0QWN0aXZlQ2xhc3MzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbYWN0aXZlQ2xhc3M0LCBzZXRBY3RpdmVDbGFzczRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFthY3RpdmVDbGFzczUsIHNldEFjdGl2ZUNsYXNzNV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IFthY3RpdmVIb3ZlcjEsIHNldEFjdGl2ZUhvdmVyMV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2FjdGl2ZUhvdmVyMiwgc2V0QWN0aXZlSG92ZXIyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbYWN0aXZlSG92ZXIzLCBzZXRBY3RpdmVIb3ZlcjNdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFthY3RpdmVIb3ZlcjQsIHNldEFjdGl2ZUhvdmVyNF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2FjdGl2ZUhvdmVyNSwgc2V0QWN0aXZlSG92ZXI1XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChyb3V0ZXIucGF0aG5hbWUuaW5jbHVkZXMoJ3dlbGNvbWUnKSkge1xyXG4gICAgICBzZXRBY3RpdmVDbGFzczEodHJ1ZSk7XHJcbiAgICB9IGVsc2UgaWYgKHJvdXRlci5wYXRobmFtZS5pbmNsdWRlcygnc3RhcnR1cCcpKSB7XHJcbiAgICAgIHNldEFjdGl2ZUNsYXNzMih0cnVlKTtcclxuICAgIH0gZWxzZSBpZiAocm91dGVyLnBhdGhuYW1lLmluY2x1ZGVzKCdidXNpbmVzcycpKSB7XHJcbiAgICAgIC8vIFRlZ28gcm91dGVyJ2EgamVzemN6ZSBuaWUgbWFcclxuICAgICAgc2V0QWN0aXZlQ2xhc3MzKHRydWUpO1xyXG4gICAgfSBlbHNlIGlmIChyb3V0ZXIucGF0aG5hbWUuaW5jbHVkZXMoJ2FjY291bnQnKSkge1xyXG4gICAgICAvLyBUZWdvIHJvdXRlcidhIGplc3pjemUgbmllIG1hXHJcbiAgICAgIHNldEFjdGl2ZUNsYXNzNCh0cnVlKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGFjdGl2ZUNsYXNzRm4xID0gKCkgPT4ge1xyXG4gICAgc2V0QWN0aXZlQ2xhc3MxKHRydWUpO1xyXG4gICAgc2V0QWN0aXZlQ2xhc3MyKGZhbHNlKTtcclxuICAgIHNldEFjdGl2ZUNsYXNzMyhmYWxzZSk7XHJcbiAgICBzZXRBY3RpdmVDbGFzczQoZmFsc2UpO1xyXG4gICAgc2V0QWN0aXZlQ2xhc3M1KGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBhY3RpdmVDbGFzc0ZuMiA9ICgpID0+IHtcclxuICAgIHNldEFjdGl2ZUNsYXNzMShmYWxzZSk7XHJcbiAgICBzZXRBY3RpdmVDbGFzczIodHJ1ZSk7XHJcbiAgICBzZXRBY3RpdmVDbGFzczMoZmFsc2UpO1xyXG4gICAgc2V0QWN0aXZlQ2xhc3M0KGZhbHNlKTtcclxuICAgIHNldEFjdGl2ZUNsYXNzNShmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYWN0aXZlQ2xhc3NGbjMgPSAoKSA9PiB7XHJcbiAgICBzZXRBY3RpdmVDbGFzczEoZmFsc2UpO1xyXG4gICAgc2V0QWN0aXZlQ2xhc3MyKGZhbHNlKTtcclxuICAgIHNldEFjdGl2ZUNsYXNzMyh0cnVlKTtcclxuICAgIHNldEFjdGl2ZUNsYXNzNChmYWxzZSk7XHJcbiAgICBzZXRBY3RpdmVDbGFzczUoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGFjdGl2ZUNsYXNzRm40ID0gKCkgPT4ge1xyXG4gICAgc2V0QWN0aXZlQ2xhc3MxKGZhbHNlKTtcclxuICAgIHNldEFjdGl2ZUNsYXNzMihmYWxzZSk7XHJcbiAgICBzZXRBY3RpdmVDbGFzczMoZmFsc2UpO1xyXG4gICAgc2V0QWN0aXZlQ2xhc3M0KHRydWUpO1xyXG4gICAgc2V0QWN0aXZlQ2xhc3M1KGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBhY3RpdmVDbGFzc0ZuNSA9ICgpID0+IHtcclxuICAgIHNldEFjdGl2ZUNsYXNzMShmYWxzZSk7XHJcbiAgICBzZXRBY3RpdmVDbGFzczIoZmFsc2UpO1xyXG4gICAgc2V0QWN0aXZlQ2xhc3MzKGZhbHNlKTtcclxuICAgIHNldEFjdGl2ZUNsYXNzNChmYWxzZSk7XHJcbiAgICBzZXRBY3RpdmVDbGFzczUodHJ1ZSk7XHJcbiAgICBsb2dPdXQoKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBtb3VzZUVudGVyTmF2ID0gKCkgPT4ge1xyXG4gICAgc2V0QWN0aXZlKHRydWUpO1xyXG5cclxuICAgIGdzYXAudG8obmF2UmVmLmN1cnJlbnQsIHtcclxuICAgICAgd2lkdGg6ICcyMDhweCcsXHJcbiAgICAgIGVhc2U6IFBvd2VyNC5lYXNlT3V0LFxyXG4gICAgICBkdXJhdGlvbjogMSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG1vdXNlTGVhdmVOYXYgPSAoKSA9PiB7XHJcbiAgICBzZXRBY3RpdmUoZmFsc2UpO1xyXG5cclxuICAgIGdzYXAudG8obmF2UmVmLmN1cnJlbnQsIHsgd2lkdGg6ICc4MHB4JywgZWFzZTogUG93ZXI0LmVhc2VPdXQgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxJc0FjdGl2ZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2FjdGl2ZX0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgcmlnaHQtMCB6LTUwXCIgc3R5bGU9e3sgb3ZlcmZsb3c6ICd1bnNldCcsIGhlaWdodDogMTc1IH19PlxyXG4gICAgICAgIDxzdmcgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBzdHlsZT17eyBvdmVyZmxvdzogJ3Vuc2V0JyB9fSB2aWV3Qm94PVwiMCAwIDc3MCA3NzJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICAgICAgICA8Zz5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFRoZW1lKHRoZW1lID09PSAnZGFyaycgPyAnbGlnaHQnIDogJ2RhcmsnKX1cclxuICAgICAgICAgICAgICBkPVwiTTc2OS4wMDEgMEgzMTAuMjg2QzMwNi43NjIgMjEuNDg3MSAzMDQuOTk0IDQzLjIyNTcgMzA1LjAwMSA2NUMzMDUuMDAxIDI4NC44MDkgNDgzLjE5MiA0NjMgNzAzLjAwMSA0NjNDNzI1LjExNCA0NjMuMDA4IDc0Ny4xOSA0NjEuMTg1IDc2OS4wMDEgNDU3LjU1VjBaXCJcclxuICAgICAgICAgICAgICBmaWxsPVwiIzBBMTIzMFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRUaGVtZSh0aGVtZSA9PT0gJ2RhcmsnID8gJ2xpZ2h0JyA6ICdkYXJrJyl9XHJcbiAgICAgICAgICAgICAgZD1cIk01NzQuODQ5IDI0OC44MDlDNTY3Ljk2NSAyNDguODE1IDU2MS4xMzUgMjQ3LjU4MiA1NTQuNjg3IDI0NS4xN0M1NTQuMzE4IDI0NS4wMzIgNTUzLjk4IDI0NC44MjIgNTUzLjY5MiAyNDQuNTUzQzU1My40MDQgMjQ0LjI4NCA1NTMuMTcyIDI0My45NjEgNTUzLjAwOSAyNDMuNjAzQzU1Mi44NDYgMjQzLjI0NCA1NTIuNzU1IDI0Mi44NTcgNTUyLjc0MiAyNDIuNDYzQzU1Mi43MjggMjQyLjA3IDU1Mi43OTIgMjQxLjY3NyA1NTIuOTMxIDI0MS4zMDhDNTUzLjA2OSAyNDAuOTM5IDU1My4yNzggMjQwLjYwMSA1NTMuNTQ3IDI0MC4zMTNDNTUzLjgxNiAyNDAuMDI1IDU1NC4xMzkgMjM5Ljc5MyA1NTQuNDk4IDIzOS42M0M1NTQuODU2IDIzOS40NjcgNTU1LjI0NCAyMzkuMzc2IDU1NS42MzcgMjM5LjM2M0M1NTYuMDMxIDIzOS4zNDkgNTU2LjQyNCAyMzkuNDE0IDU1Ni43OTIgMjM5LjU1MkM1NjUuMzQxIDI0Mi43MTEgNTc0LjU2NiAyNDMuNTg2IDU4My41NTcgMjQyLjA5QzU5Mi41NDcgMjQwLjU5NCA2MDAuOTkxIDIzNi43NzkgNjA4LjA1NiAyMzEuMDIxQzU4Ni4wMTggMjMxLjI1NSA1NjQuNDYxIDIyMC44NCA1NTMuNzM3IDIwNC4xMjhDNTQ2Ljg0MiAxOTMuMzg1IDU0NC41ODggMTgwLjc0NCA1NDcuMjE2IDE2Ny41N0M1NDkuMjI5IDE1OC4wMTcgNTUzLjM2IDE0OS4wMzcgNTU5LjMwNSAxNDEuMjkzQzU0Ny45NTQgMTQ0LjkwNSA1MzguMTg0IDE1Mi4zMDIgNTMxLjYyOCAxNjIuMjQ4QzUyNS4wNzIgMTcyLjE5MyA1MjIuMTI2IDE4NC4wODcgNTIzLjI4MiAxOTUuOTQzQzUyMy4zMjIgMTk2LjMzNiA1MjMuMjg0IDE5Ni43MzMgNTIzLjE3MSAxOTcuMTExQzUyMy4wNTcgMTk3LjQ4OSA1MjIuODcxIDE5Ny44NDEgNTIyLjYyMSAxOTguMTQ3QzUyMi4zNzEgMTk4LjQ1MyA1MjIuMDYzIDE5OC43MDYgNTIxLjcxNSAxOTguODkzQzUyMS4zNjcgMTk5LjA4IDUyMC45ODYgMTk5LjE5NiA1MjAuNTkzIDE5OS4yMzVDNTIwLjIgMTk5LjI3NCA1MTkuODA0IDE5OS4yMzUgNTE5LjQyNiAxOTkuMTJDNTE5LjA0OCAxOTkuMDA1IDUxOC42OTcgMTk4LjgxNyA1MTguMzkyIDE5OC41NjZDNTE4LjA4NyAxOTguMzE2IDUxNy44MzQgMTk4LjAwNyA1MTcuNjQ5IDE5Ny42NThDNTE3LjQ2MyAxOTcuMzEgNTE3LjM0OSAxOTYuOTI4IDUxNy4zMTEgMTk2LjUzNUM1MTUuODU0IDE4MS42MTkgNTIwLjIyMyAxNjYuNzE2IDUyOS41MDQgMTU0Ljk0OEM1MzguNzg0IDE0My4xOCA1NTIuMjU4IDEzNS40NTcgNTY3LjEwMyAxMzMuMzk3QzU2Ny43MjQgMTMzLjMxMSA1NjguMzU2IDEzMy40MjEgNTY4LjkxMSAxMzMuNzEzQzU2OS40NjYgMTM0LjAwNCA1NjkuOTE1IDEzNC40NjIgNTcwLjE5NyAxMzUuMDIxQzU3MC40NzggMTM1LjU4MSA1NzAuNTc3IDEzNi4yMTUgNTcwLjQ4IDEzNi44MzVDNTcwLjM4MiAxMzcuNDU0IDU3MC4wOTQgMTM4LjAyNyA1NjkuNjU0IDEzOC40NzNDNTU0LjMxIDE1NC4wNTkgNTQ0Ljk5OSAxNzkuNDAyIDU1OC43ODYgMjAwLjg4OEM1NjkuNjY0IDIxNy44MzcgNTkzLjA2OSAyMjcuNTMyIDYxNS43MTQgMjI0LjQ2OEM2MTYuMzIyIDIyNC4zODYgNjE2Ljk0IDIyNC40OTEgNjE3LjQ4NSAyMjQuNzcxQzYxOC4wMzEgMjI1LjA1MSA2MTguNDc4IDIyNS40OTEgNjE4Ljc2NSAyMjYuMDMyQzYxOS4wNTMgMjI2LjU3NCA2MTkuMTY4IDIyNy4xOSA2MTkuMDk1IDIyNy43OTlDNjE5LjAyMiAyMjguNDA3IDYxOC43NjQgMjI4Ljk3OSA2MTguMzU2IDIyOS40MzZDNjEyLjg3MyAyMzUuNTQyIDYwNi4xNjQgMjQwLjQyMiA1OTguNjY3IDI0My43NkM1OTEuMTcxIDI0Ny4wOTggNTgzLjA1NSAyNDguODE4IDU3NC44NDkgMjQ4LjgwOVYyNDguODA5WlwiXHJcbiAgICAgICAgICAgICAgZmlsbD1cIiM2QzYzRkZcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0VGhlbWUodGhlbWUgPT09ICdkYXJrJyA/ICdsaWdodCcgOiAnZGFyaycpfVxyXG4gICAgICAgICAgICAgIGQ9XCJNNTI3LjAwMSAyNTBDNTIyLjY1IDI1MCA1MTguMzk3IDI0OC43MSA1MTQuNzc5IDI0Ni4yOTJDNTExLjE2MSAyNDMuODc1IDUwOC4zNDEgMjQwLjQzOSA1MDYuNjc2IDIzNi40MTlDNTA1LjAxMSAyMzIuMzk5IDUwNC41NzUgMjI3Ljk3NiA1MDUuNDI0IDIyMy43MDhDNTA2LjI3MyAyMTkuNDQgNTA4LjM2OCAyMTUuNTIgNTExLjQ0NSAyMTIuNDQ0QzUxNC41MjIgMjA5LjM2NyA1MTguNDQyIDIwNy4yNzIgNTIyLjcwOSAyMDYuNDIzQzUyNi45NzcgMjA1LjU3NCA1MzEuNDAxIDIwNi4wMSA1MzUuNDIxIDIwNy42NzVDNTM5LjQ0MSAyMDkuMzQgNTQyLjg3NiAyMTIuMTYgNTQ1LjI5NCAyMTUuNzc3QzU0Ny43MTEgMjE5LjM5NSA1NDkuMDAxIDIyMy42NDkgNTQ5LjAwMSAyMjhDNTQ4Ljk5NSAyMzMuODMzIDU0Ni42NzUgMjM5LjQyNSA1NDIuNTUxIDI0My41NDlDNTM4LjQyNiAyNDcuNjczIDUzMi44MzQgMjQ5Ljk5MyA1MjcuMDAxIDI1MFYyNTBaTTUyNy4wMDEgMjEyQzUyMy44MzcgMjEyIDUyMC43NDQgMjEyLjkzOCA1MTguMTEyIDIxNC42OTdDNTE1LjQ4MSAyMTYuNDU1IDUxMy40MyAyMTguOTUzIDUxMi4yMTkgMjIxLjg3N0M1MTEuMDA4IDIyNC44MDEgNTEwLjY5MiAyMjguMDE4IDUxMS4zMDkgMjMxLjEyMUM1MTEuOTI2IDIzNC4yMjUgNTEzLjQ1IDIzNy4wNzYgNTE1LjY4OCAyMzkuMzE0QzUxNy45MjUgMjQxLjU1MSA1MjAuNzc2IDI0My4wNzUgNTIzLjg4IDI0My42OTNDNTI2Ljk4NCAyNDQuMzEgNTMwLjIwMSAyNDMuOTkzIDUzMy4xMjQgMjQyLjc4MkM1MzYuMDQ4IDI0MS41NzEgNTM4LjU0NyAyMzkuNTIgNTQwLjMwNSAyMzYuODg5QzU0Mi4wNjMgMjM0LjI1OCA1NDMuMDAxIDIzMS4xNjUgNTQzLjAwMSAyMjhDNTQyLjk5NyAyMjMuNzU4IDU0MS4zMDkgMjE5LjY5MSA1MzguMzEgMjE2LjY5MkM1MzUuMzEgMjEzLjY5MiA1MzEuMjQzIDIxMi4wMDUgNTI3LjAwMSAyMTJWMjEyWlwiXHJcbiAgICAgICAgICAgICAgZmlsbD1cIiM2QzYzRkZcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8ZyBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fSBvbkNsaWNrPXsoKSA9PiBzZXRUaGVtZSh0aGVtZSA9PT0gJ2RhcmsnID8gJ2xpZ2h0JyA6ICdkYXJrJyl9IHJlZj17bWFuUmVmfT5cclxuICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgZD1cIk04LjY5MDc0IDU2Ny4wNzhDNy4yNDU0NiA1NjYuODUzIDUuODY1MDQgNTY2LjMyMSA0LjY0MTgyIDU2NS41MThDMy40MTg2IDU2NC43MTYgMi4zODA3NyA1NjMuNjYyIDEuNTk3NzEgNTYyLjQyN0MwLjgxNDY1MiA1NjEuMTkxIDAuMzA0NDIzIDU1OS44MDIgMC4xMDExNTcgNTU4LjM1NEMtMC4xMDIxMDkgNTU2LjkwNSAwLjAwNjI3NTEyIDU1NS40MyAwLjQxOTA0NCA1NTQuMDI2TDguMjA3MzcgNTI3LjU0NkwyMC4wNDIgNTI5Ljc2NUwyMC41NTA4IDU1Ni43MzJDMjAuNTc5MSA1NTguMjMyIDIwLjI3ODggNTU5LjcxOSAxOS42NzA5IDU2MS4wOTFDMTkuMDYzIDU2Mi40NjIgMTguMTYyMyA1NjMuNjgzIDE3LjAzMiA1NjQuNjY5QzE1LjkwMTcgNTY1LjY1NSAxNC41NjkzIDU2Ni4zODIgMTMuMTI4MyA1NjYuNzk4QzExLjY4NzMgNTY3LjIxNCAxMC4xNzI3IDU2Ny4zMSA4LjY5MDc0IDU2Ny4wNzhWNTY3LjA3OFpcIlxyXG4gICAgICAgICAgICAgICAgZmlsbD1cIiM5RjYxNkFcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIGQ9XCJNNzYuOTk2IDczNi4xMzJMNjIuMjAzIDczMy45MTNMNjUuOTAxIDU4OS42NzhMNDUuMTkxIDY1MS44MUwzNC4wOTYgNzM5LjA5MUwyMC4wNDIgNzM1LjM5M0wxNy4wODMgNjQ0LjQxNEwzMy4zNTYgNTM3LjE2MkwxMTQuNzE5IDU1NS42NTRMNzYuOTk2IDczNi4xMzJaXCJcclxuICAgICAgICAgICAgICAgIGZpbGw9XCIjMEExMjMwXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICBkPVwiTTcwLjIwNDYgNzcxLjYzNkM2Ny4zMjA5IDc3MS42MzYgNjQuNTU1MyA3NzAuNDkxIDYyLjUxNjMgNzY4LjQ1MkM2MC40NzcyIDc2Ni40MTMgNTkuMzMxNyA3NjMuNjQ3IDU5LjMzMTcgNzYwLjc2M0M1OS4zMzE3IDc2MC40MDggNTkuMzQ5MSA3NjAuMDUzIDU5LjM4MzkgNzU5LjY5OUw2MS42ODExIDczNi4zNDVDNjEuNzM2NSA3MzUuNzg3IDYxLjkyODEgNzM1LjI1MSA2Mi4yMzkxIDczNC43ODRDNjIuNTUwMSA3MzQuMzE3IDYyLjk3MDkgNzMzLjkzMyA2My40NjQ3IDczMy42NjdDNjcuODI1NCA3MzEuMzE1IDcyLjMwOTYgNzMxLjg4NSA3Ni44OTk0IDczNC45NTVDNzcuMzA2NiA3MzUuMjI5IDc3LjY0OTcgNzM1LjU4OCA3Ny45MDUyIDczNi4wMDdDNzguMTYwNyA3MzYuNDI3IDc4LjMyMjYgNzM2Ljg5NiA3OC4zNzk5IDczNy4zODRMODEuMDAxNyA3NTkuNDgyQzgxLjE4MjcgNzYxLjAwOCA4MS4wMzg1IDc2Mi41NTQgODAuNTc4NSA3NjQuMDJDODAuMTE4NSA3NjUuNDg1IDc5LjM1MzMgNzY2LjgzNiA3OC4zMzMyIDc2Ny45ODVDNzcuMzEzMSA3NjkuMTMzIDc2LjA2MTMgNzcwLjA1MiA3NC42NjAyIDc3MC42ODJDNzMuMjU5MSA3NzEuMzExIDcxLjc0MDYgNzcxLjYzNiA3MC4yMDQ2IDc3MS42MzZINzAuMjA0NlpcIlxyXG4gICAgICAgICAgICAgICAgZmlsbD1cIiMwQTEyMzBcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIGQ9XCJNOS44MjA4NCA3NjkuODk4QzguNDI2NzUgNzY5LjM4NyA3LjE2NzE0IDc2OC41NjUgNi4xMzcyNiA3NjcuNDk2QzUuMTA3MzggNzY2LjQyNiA0LjMzNDE5IDc2NS4xMzYgMy44NzYxNiA3NjMuNzI0QzMuNDE4MTQgNzYyLjMxMSAzLjI4NzI3IDc2MC44MTMgMy40OTM0NCA3NTkuMzQzQzMuNjk5NjIgNzU3Ljg3MiA0LjIzNzQ1IDc1Ni40NjggNS4wNjYyNiA3NTUuMjM2TDIwLjg0NjMgNzMxLjc3OUMyNi41MzQ4IDcyNy42OTcgMjkuOTY1NyA3MjkuNjg1IDMxLjI5OTUgNzM3LjMxM0wzNC40ODk4IDcyOS4zMkwzNi44OTM2IDczMS45NDJDMzguMTEzMyA3MzMuMjczIDM4LjgyMyA3MzQuOTkyIDM4Ljg5NzEgNzM2Ljc5NUMzOC45NzEyIDczOC41OTkgMzguNDA0OSA3NDAuMzcgMzcuMjk4NCA3NDEuNzk2TDIwLjkzMDQgNzY2LjcwNkMxOS42NTY3IDc2OC4zNDggMTcuODkzOCA3NjkuNTQyIDE1Ljg5NjcgNzcwLjExNkMxMy44OTk2IDc3MC42ODkgMTEuNzcxNyA3NzAuNjEzIDkuODIwODQgNzY5Ljg5OFY3NjkuODk4WlwiXHJcbiAgICAgICAgICAgICAgICBmaWxsPVwiIzBBMTIzMFwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgZD1cIk0xMDkuNTQyIDM5OC4xMDVDMTIxLjc5NyAzOTguMTA1IDEzMS43MzIgMzg4LjE3IDEzMS43MzIgMzc1LjkxNUMxMzEuNzMyIDM2My42NTkgMTIxLjc5NyAzNTMuNzI1IDEwOS41NDIgMzUzLjcyNUM5Ny4yODY1IDM1My43MjUgODcuMzUxNyAzNjMuNjU5IDg3LjM1MTcgMzc1LjkxNUM4Ny4zNTE3IDM4OC4xNyA5Ny4yODY1IDM5OC4xMDUgMTA5LjU0MiAzOTguMTA1WlwiXHJcbiAgICAgICAgICAgICAgICBmaWxsPVwiIzlGNjE2QVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgZD1cIk0xMjMuNTk1IDQxNi41OTZMODUuODcyMyA0MDkuMkM5MC43MzEzIDM5OC44MzYgOTQuNjIyNSAzOTUuMzMgOTAuMzEwMyAzODQuMDUxSDEyMC42MzdDMTE3Ljk2MiAzOTUuNzMzIDEyMC41NDcgNDA2LjY5OCAxMjMuNTk1IDQxNi41OTZaXCJcclxuICAgICAgICAgICAgICAgIGZpbGw9XCIjOUY2MTZBXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICBkPVwiTTExOS4xNTcgNTY2LjAwOUwzMC4zOTczIDU0MC44NkM0OC4xNzYxIDUwMS43MzEgNTEuOSA0NTguNzY5IDQ2LjYyODcgNDEzLjM1NkM0Ni41MDM0IDQxMi4yODUgNDYuNTkwNCA0MTEuMTk5IDQ2Ljg4NDcgNDEwLjE2QzQ3LjE3OTEgNDA5LjEyMiA0Ny42NzUxIDQwOC4xNTIgNDguMzQ0MyA0MDcuMzA2QzQ5LjAxMzUgNDA2LjQ1OSA0OS44NDMgNDA1Ljc1MyA1MC43ODUyIDQwNS4yMjdDNTEuNzI3NSA0MDQuNzAxIDUyLjc2NDEgNDA0LjM2NiA1My44MzU5IDQwNC4yNEM1My45MzU3IDQwNC4yMjkgNTQuMDM1NiA0MDQuMjE5IDU0LjEzNTggNDA0LjIxMUM2NS43MTM3IDQwMy4yNTcgNzcuNzg0NCA0MDIuMDMzIDkwLjMxMDQgNDAwLjMyNEwxMDQuMzY0IDQwOS45MzlMMTIwLjYzNyA0MDYuMjQxQzEyNS44NTggNDA4Ljc3MiAxMzEuMTE4IDQxMC44NzcgMTM1Ljg2NCA0MTIuOTc1QzE0MC4xOTEgNDE0Ljg5MyAxNDMuNjQ5IDQxOC4zNTQgMTQ1LjU2MyA0MjIuNjgzQzE0Ny40NzYgNDI3LjAxMiAxNDcuNzA5IDQzMS44OTggMTQ2LjIxNSA0MzYuMzg5QzEzMS43NTIgNDgwLjA2NiAxMjIuMDcxIDUyMy4zMjkgMTE5LjE1NyA1NjYuMDA5WlwiXHJcbiAgICAgICAgICAgICAgICBmaWxsPVwiI0U2RTZFNlwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgZD1cIk0yMi4yNjEgNTMyLjcyNEw1LjI0ODY2IDUzMC41MDVMNDUuNTUwOCA0MTQuMzhDNDcuNjAwOCA0MDguNDczIDUyLjY4NDggNDA1LjI3NiA1OC44NzQ1IDQwNC4zOTJMNjQuNzkxOCA0MDUuMTMxTDYwLjM1MzggNDczLjkyTDIyLjI2MSA1MzIuNzI0WlwiXHJcbiAgICAgICAgICAgICAgICBmaWxsPVwiI0U2RTZFNlwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgZD1cIk0xNTUuNTI1IDUxMC41MjRDMTUyLjY5MiA1MTAuNzQyIDE0OS44NjMgNTEwLjA2IDE0Ny40NDEgNTA4LjU3NEMxNDUuMDE5IDUwNy4wODkgMTQzLjEyOCA1MDQuODc3IDE0Mi4wMzggNTAyLjI1M0wxMjUuODE0IDQ2My4xOTVMMTM5LjEyOCA0MTUuMTE3TDE0Mi42NDggNDE3LjM1N0MxNDIuOTg3IDQxNy41NzIgMTQzLjMyMiA0MTcuNzk0IDE0My42NTIgNDE4LjAyQzE0OC41OTMgNDIxLjQ4MSAxNTIuNDQyIDQyNi4yODMgMTU0Ljc0NiA0MzEuODU4QzE1Ny4wNDkgNDM3LjQzNCAxNTcuNzExIDQ0My41NTIgMTU2LjY1NCA0NDkuNDkxTDE1My4xODIgNDY5Ljg1MkwxNjcuNTA1IDUwMC42MDVDMTY2Ljc3NyA1MDMuMjk0IDE2NS4yMzUgNTA1LjY5IDE2My4wODkgNTA3LjQ2NkMxNjAuOTQ0IDUwOS4yNDMgMTU4LjMwMiA1MTAuMzExIDE1NS41MjUgNTEwLjUyNFY1MTAuNTI0WlwiXHJcbiAgICAgICAgICAgICAgICBmaWxsPVwiI0U2RTZFNlwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgZD1cIk0xMTEuMjQ4IDM0My4wMjdDMTE1LjA0IDM0My4yMDEgMTE4LjczMyAzNDQuMjg4IDEyMi4wMTQgMzQ2LjE5NkMxMjIuNzY5IDM0Ni42MzYgMTIyLjQyIDM0OC4yMTkgMTIzLjExNyAzNDguNzM2QzEyMy45OTUgMzQ5LjM4NiAxMjUuOTAyIDM0OC45OTEgMTI2LjY4IDM0OS43NTNDMTI5LjE5IDM1Mi4yMDMgMTMxLjEyMyAzNTUuMTgyIDEzMi4zMzggMzU4LjQ3NEMxMzMuNTUyIDM2MS43NjUgMTM0LjAxOCAzNjUuMjg1IDEzMy43MDIgMzY4Ljc3OUwxMzIuNDY0IDM4MS4wOUwxMjkuNTQzIDM3Ny44OTZDMTI0LjMwNiAzNzIuMDg5IDExNy4wMzUgMzY4LjUxOSAxMDkuMjM4IDM2Ny45MjdDMTA4LjkwNiAzNjcuOTA0IDEwOC41NzQgMzY3Ljg4NyAxMDguMjQyIDM2Ny44NzRMMTEwLjQ4OSAzNjMuOTQxTDEwNi41ODQgMzY3Ljg0N0MxMDQuODAyIDM2Ny44NjYgMTAzLjAyNCAzNjguMDExIDEwMS4yNjMgMzY4LjI4TDEwNC4yNTEgMzYzLjA1TDk4LjUxNzEgMzY4Ljc4NEw5OC41MTY2IDM2OC43ODVDOTYuMTcxNiAzNjkuMyA5My45ODA1IDM3MC4zNiA5Mi4xMTk4IDM3MS44NzdDOTAuMjU5MSAzNzMuMzk1IDg4Ljc4MDggMzc1LjMyOCA4Ny44MDQyIDM3Ny41MjJMODcuMTY3NSAzNzguOTMzTDg2LjQ1NDIgMzY3LjE4OEM4Ni4zMTc3IDM2MC45MTEgODguNjgwNSAzNTQuODM3IDkzLjAyMjYgMzUwLjMwMkM5Ny4zNjQ3IDM0NS43NjcgMTAzLjMzMSAzNDMuMTQyIDEwOS42MDggMzQzLjAwNkMxMTAuMTU1IDM0Mi45OTQgMTEwLjcwMiAzNDMuMDAxIDExMS4yNDggMzQzLjAyN1pcIlxyXG4gICAgICAgICAgICAgICAgZmlsbD1cIiMyRjJFNDFcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIGQ9XCJNMTMxLjg3NyAzODQuNDM4QzEzMi44NjEgMzg0LjQzOCAxMzMuNjU5IDM4Mi41NDMgMTMzLjY1OSAzODAuMjA1QzEzMy42NTkgMzc3Ljg2NyAxMzIuODYxIDM3NS45NzIgMTMxLjg3NyAzNzUuOTcyQzEzMC44OTIgMzc1Ljk3MiAxMzAuMDk0IDM3Ny44NjcgMTMwLjA5NCAzODAuMjA1QzEzMC4wOTQgMzgyLjU0MyAxMzAuODkyIDM4NC40MzggMTMxLjg3NyAzODQuNDM4WlwiXHJcbiAgICAgICAgICAgICAgICBmaWxsPVwiIzlGNjE2QVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgZD1cIk04Ny4zMTk1IDM4My4xMDFDODguMzAzOCAzODMuMTAxIDg5LjEwMTcgMzgxLjIwNiA4OS4xMDE3IDM3OC44NjhDODkuMTAxNyAzNzYuNTMgODguMzAzOCAzNzQuNjM1IDg3LjMxOTUgMzc0LjYzNUM4Ni4zMzUxIDM3NC42MzUgODUuNTM3MiAzNzYuNTMgODUuNTM3MiAzNzguODY4Qzg1LjUzNzIgMzgxLjIwNiA4Ni4zMzUxIDM4My4xMDEgODcuMzE5NSAzODMuMTAxWlwiXHJcbiAgICAgICAgICAgICAgICBmaWxsPVwiIzlGNjE2QVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgZD1cIk0xNzQuMDM0IDQzNS40MTlDMTc1LjQ1NSA0MzUuNzY3IDE3Ni43ODUgNDM2LjQxNCAxNzcuOTM2IDQzNy4zMTdDMTc5LjA4NiA0MzguMjIgMTgwLjAzMSA0MzkuMzU5IDE4MC43MDYgNDQwLjY1NkMxODEuMzgyIDQ0MS45NTQgMTgxLjc3MiA0NDMuMzgxIDE4MS44NTIgNDQ0Ljg0MUMxODEuOTMxIDQ0Ni4zMDIgMTgxLjY5OCA0NDcuNzYzIDE4MS4xNjggNDQ5LjEyNkwxNzEuMTYgNDc0Ljg1TDE1OS41NTYgNDcxLjYzNEwxNjEuMzM4IDQ0NC43MjFDMTYxLjQzNyA0NDMuMjI1IDE2MS44NjMgNDQxLjc2OCAxNjIuNTg1IDQ0MC40NTNDMTYzLjMwNyA0MzkuMTM5IDE2NC4zMDggNDM3Ljk5OCAxNjUuNTE4IDQzNy4xMTFDMTY2LjcyOCA0MzYuMjI1IDE2OC4xMTcgNDM1LjYxNCAxNjkuNTg4IDQzNS4zMjJDMTcxLjA1OSA0MzUuMDI5IDE3Mi41NzcgNDM1LjA2MyAxNzQuMDM0IDQzNS40MTlIMTc0LjAzNFpcIlxyXG4gICAgICAgICAgICAgICAgZmlsbD1cIiM5RjYxNkFcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHBhdGggZD1cIk0xNjAuNTc5IDUwOS4wNTVMMTQyLjA4NyA0OTcuMjJMMTU3LjYyIDQ2NS40MTRMMTc2Ljg1MSA0NzIuODExTDE2Ny4yMzYgNTAwLjkxOEwxNjAuNTc5IDUwOS4wNTVaXCIgZmlsbD1cIiNFNkU2RTZcIiAvPlxyXG4gICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICBkPVwiTTE3My4wMDEgNDA5LjEwMVYyODRIMTcxLjAwMVY0MDkuMTAxQzE2OS43ODcgNDA5LjM0OSAxNjguNzA5IDQxMC4wMzkgMTY3Ljk3NCA0MTEuMDM3QzE2Ny4yNCA0MTIuMDM1IDE2Ni45MDIgNDEzLjI3IDE2Ny4wMjcgNDE0LjUwM0MxNjcuMTUxIDQxNS43MzUgMTY3LjcyOSA0MTYuODc4IDE2OC42NDggNDE3LjcwOUMxNjkuNTY3IDQxOC41NCAxNzAuNzYyIDQxOSAxNzIuMDAxIDQxOUMxNzMuMjQxIDQxOSAxNzQuNDM1IDQxOC41NCAxNzUuMzU1IDQxNy43MDlDMTc2LjI3NCA0MTYuODc4IDE3Ni44NTIgNDE1LjczNSAxNzYuOTc2IDQxNC41MDNDMTc3LjEwMSA0MTMuMjcgMTc2Ljc2MyA0MTIuMDM1IDE3Ni4wMjkgNDExLjAzN0MxNzUuMjk0IDQxMC4wMzkgMTc0LjIxNiA0MDkuMzQ5IDE3My4wMDEgNDA5LjEwMVY0MDkuMTAxWk0xNzIuMDAxIDQxN0MxNzEuNDA4IDQxNyAxNzAuODI4IDQxNi44MjQgMTcwLjMzNSA0MTYuNDk0QzE2OS44NDEgNDE2LjE2NSAxNjkuNDU3IDQxNS42OTYgMTY5LjIzIDQxNS4xNDhDMTY5LjAwMyA0MTQuNiAxNjguOTQzIDQxMy45OTcgMTY5LjA1OSA0MTMuNDE1QzE2OS4xNzUgNDEyLjgzMyAxNjkuNDYxIDQxMi4yOTggMTY5Ljg4IDQxMS44NzlDMTcwLjMgNDExLjQ1OSAxNzAuODM0IDQxMS4xNzMgMTcxLjQxNiA0MTEuMDU4QzE3MS45OTggNDEwLjk0MiAxNzIuNjAxIDQxMS4wMDEgMTczLjE1IDQxMS4yMjhDMTczLjY5OCA0MTEuNDU1IDE3NC4xNjYgNDExLjg0IDE3NC40OTYgNDEyLjMzM0MxNzQuODI2IDQxMi44MjcgMTc1LjAwMSA0MTMuNDA3IDE3NS4wMDEgNDE0QzE3NS4wMDEgNDE0Ljc5NSAxNzQuNjg0IDQxNS41NTggMTc0LjEyMiA0MTYuMTJDMTczLjU1OSA0MTYuNjgzIDE3Mi43OTcgNDE2Ljk5OSAxNzIuMDAxIDQxN1Y0MTdaXCJcclxuICAgICAgICAgICAgICAgIGZpbGw9XCIjMEExMjMwXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICBkPVwiTTE3MC40MzUgMTY0LjU2OUMxNjkuMjkgMTY0LjU2OSAxNjguMTkzIDE2NC4xMTUgMTY3LjM4NCAxNjMuMzA2QzE2Ni41NzUgMTYyLjQ5NyAxNjYuMTIxIDE2MS4zOTkgMTY2LjEyMSAxNjAuMjU1VjE0Ny4zMTRDMTY2LjEyMiAxNDYuMTcxIDE2Ni41NzggMTQ1LjA3NSAxNjcuMzg3IDE0NC4yNjhDMTY4LjE5NSAxNDMuNDYgMTY5LjI5MiAxNDMuMDA3IDE3MC40MzUgMTQzLjAwN0MxNzEuNTc4IDE0My4wMDcgMTcyLjY3NCAxNDMuNDYgMTczLjQ4MyAxNDQuMjY4QzE3NC4yOTEgMTQ1LjA3NSAxNzQuNzQ3IDE0Ni4xNzEgMTc0Ljc0OCAxNDcuMzE0VjE2MC4yNTVDMTc0Ljc0OCAxNjAuODIyIDE3NC42MzcgMTYxLjM4MyAxNzQuNDIgMTYxLjkwNkMxNzQuMjAzIDE2Mi40MyAxNzMuODg1IDE2Mi45MDUgMTczLjQ4NSAxNjMuMzA2QzE3My4wODQgMTYzLjcwNiAxNzIuNjA5IDE2NC4wMjQgMTcyLjA4NSAxNjQuMjQxQzE3MS41NjIgMTY0LjQ1OCAxNzEuMDAxIDE2NC41NjkgMTcwLjQzNSAxNjQuNTY5VjE2NC41NjlaXCJcclxuICAgICAgICAgICAgICAgIGZpbGw9XCIjNkM2M0ZGXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICBkPVwiTTE3MC40MzUgMjYzLjc4N0MxNjkuODY4IDI2My43ODcgMTY5LjMwNyAyNjMuNjc2IDE2OC43ODQgMjYzLjQ1OUMxNjguMjYgMjYzLjI0MiAxNjcuNzg1IDI2Mi45MjUgMTY3LjM4NCAyNjIuNTI0QzE2Ni45ODQgMjYyLjEyMyAxNjYuNjY2IDI2MS42NDggMTY2LjQ0OSAyNjEuMTI0QzE2Ni4yMzIgMjYwLjYwMSAxNjYuMTIxIDI2MC4wNCAxNjYuMTIxIDI1OS40NzRWMjQ2LjUzMkMxNjYuMTIgMjQ1Ljk2NSAxNjYuMjMxIDI0NS40MDMgMTY2LjQ0NyAyNDQuODc5QzE2Ni42NjQgMjQ0LjM1NSAxNjYuOTgxIDI0My44NzkgMTY3LjM4MiAyNDMuNDc3QzE2Ny43ODMgMjQzLjA3NiAxNjguMjU4IDI0Mi43NTggMTY4Ljc4MiAyNDIuNTQxQzE2OS4zMDYgMjQyLjMyMyAxNjkuODY3IDI0Mi4yMTIgMTcwLjQzNSAyNDIuMjEyQzE3MS4wMDIgMjQyLjIxMiAxNzEuNTYzIDI0Mi4zMjMgMTcyLjA4NyAyNDIuNTQxQzE3Mi42MTEgMjQyLjc1OCAxNzMuMDg3IDI0My4wNzYgMTczLjQ4NyAyNDMuNDc3QzE3My44ODggMjQzLjg3OSAxNzQuMjA2IDI0NC4zNTUgMTc0LjQyMiAyNDQuODc5QzE3NC42MzggMjQ1LjQwMyAxNzQuNzQ5IDI0NS45NjUgMTc0Ljc0OCAyNDYuNTMyVjI1OS40NzRDMTc0Ljc0OCAyNjAuMDQgMTc0LjYzNyAyNjAuNjAxIDE3NC40MiAyNjEuMTI0QzE3NC4yMDMgMjYxLjY0OCAxNzMuODg2IDI2Mi4xMjMgMTczLjQ4NSAyNjIuNTI0QzE3My4wODQgMjYyLjkyNSAxNzIuNjA5IDI2My4yNDIgMTcyLjA4NSAyNjMuNDU5QzE3MS41NjIgMjYzLjY3NiAxNzEuMDAxIDI2My43ODcgMTcwLjQzNSAyNjMuNzg3VjI2My43ODdaXCJcclxuICAgICAgICAgICAgICAgIGZpbGw9XCIjNkM2M0ZGXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICBkPVwiTTIwMC45MzkgMTc3LjIwM0MyMDAuMDg1IDE3Ny4yMDMgMTk5LjI1MSAxNzYuOTUgMTk4LjU0MiAxNzYuNDc2QzE5Ny44MzMgMTc2LjAwMiAxOTcuMjggMTc1LjMyOCAxOTYuOTUzIDE3NC41NEMxOTYuNjI3IDE3My43NTIgMTk2LjU0MSAxNzIuODg1IDE5Ni43MDggMTcyLjA0OEMxOTYuODc0IDE3MS4yMTEgMTk3LjI4NSAxNzAuNDQyIDE5Ny44ODggMTY5LjgzOUwyMDcuMDM5IDE2MC42ODhDMjA3Ljg0OCAxNTkuODggMjA4Ljk0NSAxNTkuNDI2IDIxMC4wODkgMTU5LjQyN0MyMTEuMjMzIDE1OS40MjcgMjEyLjMyOSAxNTkuODgyIDIxMy4xMzggMTYwLjY5QzIxMy45NDcgMTYxLjQ5OSAyMTQuNDAxIDE2Mi41OTYgMjE0LjQwMiAxNjMuNzM5QzIxNC40MDIgMTY0Ljg4MyAyMTMuOTQ4IDE2NS45OCAyMTMuMTQgMTY2Ljc4OUwyMDMuOTg5IDE3NS45NEMyMDMuNTg5IDE3Ni4zNDEgMjAzLjExMyAxNzYuNjU5IDIwMi41OSAxNzYuODc2QzIwMi4wNjYgMTc3LjA5MyAyMDEuNTA1IDE3Ny4yMDQgMjAwLjkzOSAxNzcuMjAzVjE3Ny4yMDNaXCJcclxuICAgICAgICAgICAgICAgIGZpbGw9XCIjNkM2M0ZGXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICBkPVwiTTEzMC43OCAyNDcuMzYyQzEyOS45MjYgMjQ3LjM2MiAxMjkuMDkyIDI0Ny4xMDkgMTI4LjM4MyAyNDYuNjM1QzEyNy42NzQgMjQ2LjE2MSAxMjcuMTIxIDI0NS40ODggMTI2Ljc5NCAyNDQuNjk5QzEyNi40NjggMjQzLjkxMSAxMjYuMzgyIDI0My4wNDQgMTI2LjU0OSAyNDIuMjA3QzEyNi43MTUgMjQxLjM3IDEyNy4xMjYgMjQwLjYwMiAxMjcuNzI5IDIzOS45OThMMTM2Ljg4IDIzMC44NDhDMTM3LjY4OSAyMzAuMDM5IDEzOC43ODYgMjI5LjU4NCAxMzkuOTMgMjI5LjU4NEMxNDEuMDc0IDIyOS41ODQgMTQyLjE3MiAyMzAuMDM4IDE0Mi45ODEgMjMwLjg0N0MxNDMuNzkgMjMxLjY1NiAxNDQuMjQ0IDIzMi43NTQgMTQ0LjI0NCAyMzMuODk4QzE0NC4yNDQgMjM1LjA0MiAxNDMuNzkgMjM2LjEzOSAxNDIuOTgxIDIzNi45NDhMMTMzLjgzIDI0Ni4wOTlDMTMzLjQzIDI0Ni41IDEzMi45NTQgMjQ2LjgxOCAxMzIuNDMxIDI0Ny4wMzVDMTMxLjkwNyAyNDcuMjUyIDEzMS4zNDYgMjQ3LjM2MyAxMzAuNzggMjQ3LjM2MlYyNDcuMzYyWlwiXHJcbiAgICAgICAgICAgICAgICBmaWxsPVwiIzZDNjNGRlwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgZD1cIk0yMjYuNTE0IDIwNy43MDhIMjEzLjU3M0MyMTIuNDMgMjA3LjcwNiAyMTEuMzM0IDIwNy4yNTEgMjEwLjUyNyAyMDYuNDQyQzIwOS43MTkgMjA1LjYzMyAyMDkuMjY2IDIwNC41MzcgMjA5LjI2NiAyMDMuMzk0QzIwOS4yNjYgMjAyLjI1MSAyMDkuNzE5IDIwMS4xNTQgMjEwLjUyNyAyMDAuMzQ2QzIxMS4zMzQgMTk5LjUzNyAyMTIuNDMgMTk5LjA4MiAyMTMuNTczIDE5OS4wOEgyMjYuNTE0QzIyNy4wODEgMTk5LjA3OSAyMjcuNjQzIDE5OS4xOSAyMjguMTY3IDE5OS40MDZDMjI4LjY5MSAxOTkuNjIzIDIyOS4xNjggMTk5Ljk0IDIyOS41NjkgMjAwLjM0MUMyMjkuOTcgMjAwLjc0MiAyMzAuMjg5IDIwMS4yMTggMjMwLjUwNiAyMDEuNzQxQzIzMC43MjMgMjAyLjI2NSAyMzAuODM1IDIwMi44MjcgMjMwLjgzNSAyMDMuMzk0QzIzMC44MzUgMjAzLjk2MSAyMzAuNzIzIDIwNC41MjIgMjMwLjUwNiAyMDUuMDQ2QzIzMC4yODkgMjA1LjU3IDIyOS45NyAyMDYuMDQ2IDIyOS41NjkgMjA2LjQ0NkMyMjkuMTY4IDIwNi44NDcgMjI4LjY5MSAyMDcuMTY1IDIyOC4xNjcgMjA3LjM4MUMyMjcuNjQzIDIwNy41OTcgMjI3LjA4MSAyMDcuNzA4IDIyNi41MTQgMjA3LjcwOFYyMDcuNzA4WlwiXHJcbiAgICAgICAgICAgICAgICBmaWxsPVwiIzZDNjNGRlwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgZD1cIk0xMjcuMjk2IDIwNy43MDhIMTE0LjM1NUMxMTMuNzg4IDIwNy43MDggMTEzLjIyNiAyMDcuNTk3IDExMi43MDIgMjA3LjM4MUMxMTIuMTc4IDIwNy4xNjUgMTExLjcwMSAyMDYuODQ3IDExMS4zIDIwNi40NDZDMTEwLjg5OSAyMDYuMDQ2IDExMC41ODEgMjA1LjU3IDExMC4zNjMgMjA1LjA0NkMxMTAuMTQ2IDIwNC41MjIgMTEwLjAzNCAyMDMuOTYxIDExMC4wMzQgMjAzLjM5NEMxMTAuMDM0IDIwMi44MjcgMTEwLjE0NiAyMDIuMjY1IDExMC4zNjMgMjAxLjc0MUMxMTAuNTgxIDIwMS4yMTggMTEwLjg5OSAyMDAuNzQyIDExMS4zIDIwMC4zNDFDMTExLjcwMSAxOTkuOTQgMTEyLjE3OCAxOTkuNjIzIDExMi43MDIgMTk5LjQwNkMxMTMuMjI2IDE5OS4xOSAxMTMuNzg4IDE5OS4wNzkgMTE0LjM1NSAxOTkuMDhIMTI3LjI5NkMxMjguNDM5IDE5OS4wODIgMTI5LjUzNSAxOTkuNTM3IDEzMC4zNDIgMjAwLjM0NkMxMzEuMTUgMjAxLjE1NCAxMzEuNjA0IDIwMi4yNTEgMTMxLjYwNCAyMDMuMzk0QzEzMS42MDQgMjA0LjUzNyAxMzEuMTUgMjA1LjYzMyAxMzAuMzQyIDIwNi40NDJDMTI5LjUzNSAyMDcuMjUxIDEyOC40MzkgMjA3LjcwNiAxMjcuMjk2IDIwNy43MDhIMTI3LjI5NlpcIlxyXG4gICAgICAgICAgICAgICAgZmlsbD1cIiM2QzYzRkZcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIGQ9XCJNMjEwLjA5IDI0Ny4zNjJDMjA5LjUyMyAyNDcuMzYzIDIwOC45NjIgMjQ3LjI1MiAyMDguNDM4IDI0Ny4wMzVDMjA3LjkxNSAyNDYuODE4IDIwNy40MzkgMjQ2LjUgMjA3LjAzOSAyNDYuMDk5TDE5Ny44ODggMjM2Ljk0OEMxOTcuNDg3IDIzNi41NDggMTk3LjE2OSAyMzYuMDcyIDE5Ni45NTEgMjM1LjU0OUMxOTYuNzM0IDIzNS4wMjUgMTk2LjYyMiAyMzQuNDY0IDE5Ni42MjIgMjMzLjg5N0MxOTYuNjIxIDIzMy4zMyAxOTYuNzMzIDIzMi43NjkgMTk2Ljk0OSAyMzIuMjQ1QzE5Ny4xNjYgMjMxLjcyMSAxOTcuNDg0IDIzMS4yNDUgMTk3Ljg4NSAyMzAuODQ0QzE5OC4yODYgMjMwLjQ0MyAxOTguNzYyIDIzMC4xMjUgMTk5LjI4NiAyMjkuOTA5QzE5OS44MDkgMjI5LjY5MiAyMDAuMzcxIDIyOS41OCAyMDAuOTM4IDIyOS41ODFDMjAxLjUwNSAyMjkuNTgxIDIwMi4wNjYgMjI5LjY5MyAyMDIuNTg5IDIyOS45MUMyMDMuMTEzIDIzMC4xMjggMjAzLjU4OSAyMzAuNDQ2IDIwMy45ODkgMjMwLjg0OEwyMTMuMTQgMjM5Ljk5OEMyMTMuNzQzIDI0MC42MDIgMjE0LjE1NCAyNDEuMzcgMjE0LjMyIDI0Mi4yMDdDMjE0LjQ4NyAyNDMuMDQ0IDIxNC40MDEgMjQzLjkxMSAyMTQuMDc1IDI0NC43QzIxMy43NDggMjQ1LjQ4OCAyMTMuMTk1IDI0Ni4xNjEgMjEyLjQ4NiAyNDYuNjM1QzIxMS43NzcgMjQ3LjExIDIxMC45NDMgMjQ3LjM2MyAyMTAuMDkgMjQ3LjM2M1YyNDcuMzYyWlwiXHJcbiAgICAgICAgICAgICAgICBmaWxsPVwiIzZDNjNGRlwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgZD1cIk0xMzkuOTMgMTc3LjIwM0MxMzkuMzY0IDE3Ny4yMDQgMTM4LjgwMyAxNzcuMDkzIDEzOC4yNzkgMTc2Ljg3NkMxMzcuNzU2IDE3Ni42NTkgMTM3LjI4IDE3Ni4zNDEgMTM2Ljg4IDE3NS45NEwxMjcuNzI5IDE2Ni43ODlDMTI3LjMyOSAxNjYuMzg5IDEyNy4wMTEgMTY1LjkxMyAxMjYuNzk0IDE2NS4zOUMxMjYuNTc3IDE2NC44NjYgMTI2LjQ2NiAxNjQuMzA1IDEyNi40NjYgMTYzLjczOUMxMjYuNDY2IDE2My4xNzIgMTI2LjU3NyAxNjIuNjExIDEyNi43OTQgMTYyLjA4OEMxMjcuMDExIDE2MS41NjQgMTI3LjMyOSAxNjEuMDg5IDEyNy43MjkgMTYwLjY4OEMxMjguMTMgMTYwLjI4OCAxMjguNjA1IDE1OS45NyAxMjkuMTI5IDE1OS43NTNDMTI5LjY1MiAxNTkuNTM2IDEzMC4yMTMgMTU5LjQyNSAxMzAuNzggMTU5LjQyNUMxMzEuMzQ2IDE1OS40MjUgMTMxLjkwNyAxNTkuNTM2IDEzMi40MyAxNTkuNzUzQzEzMi45NTQgMTU5Ljk3IDEzMy40MjkgMTYwLjI4OCAxMzMuODMgMTYwLjY4OEwxNDIuOTgxIDE2OS44MzlDMTQzLjU4NCAxNzAuNDQyIDE0My45OTUgMTcxLjIxMSAxNDQuMTYxIDE3Mi4wNDhDMTQ0LjMyOCAxNzIuODg1IDE0NC4yNDIgMTczLjc1MiAxNDMuOTE2IDE3NC41NEMxNDMuNTg5IDE3NS4zMjkgMTQzLjAzNiAxNzYuMDAyIDE0Mi4zMjcgMTc2LjQ3NkMxNDEuNjE3IDE3Ni45NSAxNDAuNzgzIDE3Ny4yMDMgMTM5LjkzIDE3Ny4yMDNWMTc3LjIwM1pcIlxyXG4gICAgICAgICAgICAgICAgZmlsbD1cIiM2QzYzRkZcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIGQ9XCJNMTcwLjQzNSAyMjkuMjc3QzE2NS4zMTUgMjI5LjI3NyAxNjAuMzExIDIyNy43NTkgMTU2LjA1NSAyMjQuOTE1QzE1MS43OTggMjIyLjA3MSAxNDguNDgxIDIxOC4wMjggMTQ2LjUyMiAyMTMuMjk5QzE0NC41NjMgMjA4LjU2OSAxNDQuMDUgMjAzLjM2NSAxNDUuMDQ5IDE5OC4zNDRDMTQ2LjA0OCAxOTMuMzIzIDE0OC41MTMgMTg4LjcxMSAxNTIuMTMzIDE4NS4wOTJDMTU1Ljc1MiAxODEuNDcyIDE2MC4zNjQgMTc5LjAwNyAxNjUuMzg1IDE3OC4wMDhDMTcwLjQwNiAxNzcuMDA5IDE3NS42MSAxNzcuNTIyIDE4MC4zNCAxNzkuNDgxQzE4NS4wNjkgMTgxLjQ0IDE4OS4xMTEgMTg0Ljc1NyAxOTEuOTU1IDE4OS4wMTRDMTk0LjggMTkzLjI3IDE5Ni4zMTggMTk4LjI3NSAxOTYuMzE4IDIwMy4zOTRDMTk2LjMxIDIxMC4yNTYgMTkzLjU4IDIxNi44MzUgMTg4LjcyOCAyMjEuNjg3QzE4My44NzYgMjI2LjU0IDE3Ny4yOTcgMjI5LjI2OSAxNzAuNDM1IDIyOS4yNzdWMjI5LjI3N1pNMTcwLjQzNSAxODYuMTM4QzE2Ny4wMjIgMTg2LjEzOCAxNjMuNjg2IDE4Ny4xNSAxNjAuODQ4IDE4OS4wNDZDMTU4LjAxIDE5MC45NDIgMTU1Ljc5OSAxOTMuNjM3IDE1NC40OTMgMTk2Ljc5QzE1My4xODcgMTk5Ljk0MyAxNTIuODQ1IDIwMy40MTMgMTUzLjUxMSAyMDYuNzZDMTU0LjE3NyAyMTAuMTA3IDE1NS44MiAyMTMuMTgyIDE1OC4yMzMgMjE1LjU5NUMxNjAuNjQ2IDIxOC4wMDggMTYzLjcyMSAyMTkuNjUyIDE2Ny4wNjggMjIwLjMxN0MxNzAuNDE1IDIyMC45ODMgMTczLjg4NSAyMjAuNjQyIDE3Ny4wMzggMjE5LjMzNkMxODAuMTkxIDIxOC4wMyAxODIuODg2IDIxNS44MTggMTg0Ljc4MiAyMTIuOThDMTg2LjY3OCAyMTAuMTQzIDE4Ny42OSAyMDYuODA2IDE4Ny42OSAyMDMuMzk0QzE4Ny42ODUgMTk4LjgxOSAxODUuODY1IDE5NC40MzMgMTgyLjYzIDE5MS4xOThDMTc5LjM5NSAxODcuOTYzIDE3NS4wMDkgMTg2LjE0NCAxNzAuNDM1IDE4Ni4xMzhWMTg2LjEzOFpcIlxyXG4gICAgICAgICAgICAgICAgZmlsbD1cIiM2QzYzRkZcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgIDwvZz5cclxuICAgICAgICA8L3N2Zz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtyb3V0ZXIucGF0aG5hbWUuaW5jbHVkZXMoJy9zdGFydHVwLWlkZWEnKSB8fFxyXG4gICAgICByb3V0ZXIucGF0aG5hbWUuaW5jbHVkZXMoJy9idXNpbmVzcy1wbGFuJykgfHxcclxuICAgICAgcm91dGVyLnBhdGhuYW1lLmluY2x1ZGVzKCcvY2FzaC1mbG93JykgfHxcclxuICAgICAgcm91dGVyLnBhdGhuYW1lLmluY2x1ZGVzKCcvY29tcGV0aXRvcnMnKSA/IChcclxuICAgICAgICAvLyA8ZGl2IGNsYXNzTmFtZT1cImgtZnVsbCB3LWZ1bGwgb3ZlcmZsb3ctaGlkZGVuIGJnLWJhY2tncm91bmQgZGFyazpiZy1zZWNvbmRhcnlcIj5cclxuICAgICAgICAvLyAgIHsnICd9XHJcbiAgICAgICAgLy8gICA8ZGl2IGNsYXNzTmFtZT1cImgtc2NyZWVuIHctMjAgYmctYmFja2dyb3VuZCBkYXJrOmJnLXNlY29uZGFyeSBmaXhlZCB6LTAgb3ZlcmZsb3ctaGlkZGVuXCI+PC9kaXY+XHJcbiAgICAgICAgLy8gPC9kaXY+XHJcbiAgICAgICAgPD48Lz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtZnVsbCB3LWZ1bGwgb3ZlcmZsb3ctaGlkZGVuIGJnLWJhY2tncm91bmQgZGFyazpiZy1zZWNvbmRhcnlcIj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgcmVmPXtuYXZSZWZ9XHJcbiAgICAgICAgICAgIG9uTW91c2VFbnRlcj17bW91c2VFbnRlck5hdn1cclxuICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXttb3VzZUxlYXZlTmF2fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJoLXNjcmVlbiB3LTIwIGJnLWJhY2tncm91bmQgZGFyazpiZy1zZWNvbmRhcnkgZml4ZWQgei0wIG92ZXJmbG93LWhpZGRlblwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNiB3LTUyIGdyaWQgZ3JpZC1jb2xzLTgwcHggaXRlbXMtY2VudGVyIGhvdmVyOm9wYWNpdHktMTAwXCI+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9kYXNoYm9hcmQvd2VsY29tZVwiPlxyXG4gICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXthY3RpdmVDbGFzc0ZuMX1cclxuICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRBY3RpdmVIb3ZlcjEodHJ1ZSl9XHJcbiAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0QWN0aXZlSG92ZXIxKGZhbHNlKX1cclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiNDVcIlxyXG4gICAgICAgICAgICAgICAgICB3aWR0aD1cIjQ1XCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmlsbC1jdXJyZW50IHRleHQtcHJpbWFyeWRhcmsgZGFyazp0ZXh0LWJhY2tncm91bmQgYmxvY2sgbS1hdXRvIG9wYWNpdHktNTAgaG92ZXI6b3BhY2l0eS0xMDAgY3Vyc29yLXBvaW50ZXIgJHtcclxuICAgICAgICAgICAgICAgICAgICBhY3RpdmVDbGFzczEgPyAnb3BhY2l0eS0xMDAnIDogJ29wYWNpdHktNTAnXHJcbiAgICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxMjggMTI4XCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGRlZnM+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN0eWxlPjwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGVmcz5cclxuICAgICAgICAgICAgICAgICAgPHRpdGxlPlNlZSBZb3UgU29vbjwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgIDxnIGlkPVwiU2VlX1lvdV9Tb29uXCIgZGF0YS1uYW1lPVwiU2VlIFlvdSBTb29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNscy0xXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNODQuODcsNzcuMjdsLTctNDEuMThhNi42LDYuNiwwLDAsMC0xMy4xLDEuNThsMS44MywyNC42TDU2LjkzLDM2YTYuNzMsNi43MywwLDAsMC0xMi43OCw0LjE3TDUxLjgyLDY3LDQwLjU3LDQ4YTYuNDUsNi40NSwwLDAsMC0xMS40MSw2bDguMzMsMTguMjQtNC41Ny02LjQ1YTYuNDgsNi40OCwwLDAsMC0xMC45LDdsMjEuMjUsMzYuNzFjLjMyLjU5LDgsMTQuNTQsMjMuMTQsMTQuNTQsMjAuMDcsMCwyOS43NC0xNS4xNywzMi4xMS0yOS4zNiwyLjIyLTEzLjM0LDQuNTktMjIsNy42OC0yOC4yMkMxMTEuNzQsNTUuMzYsOTYuMzcsNDQuNjcsODQuODcsNzcuMjdabTE5LjUtMTEuNzRjLTMuMTgsNi4zNi01LjYxLDE1LjI0LTcuODcsMjguNzlDOTQuMjgsMTA3LjY5LDg1LjIsMTIyLDY2LjQxLDEyMmMtMTMuODYsMC0yMS4yNy0xMy4zNC0yMS4zNi0xMy41TDIzLjc5LDcxLjc1QTQuNDQsNC40NCwwLDAsMSwzMS4yNiw2N0w0Mi4xLDgyLjI3YTEsMSwwLDAsMCwxLjc2LTFMMzEsNTMuMTRhNC40MSw0LjQxLDAsMCwxLDcuOC00LjA4TDU0LjEsNzQuODRBMSwxLDAsMCwwLDU2LDc0TDQ2LjEyLDM5LjZBNC42OCw0LjY4LDAsMCwxLDU1LDM2LjY5TDY3LjIyLDY5Ljc4YTEsMSwwLDAsMCwyLS40M0w2Ni44NCwzNy41MmE0LjU2LDQuNTYsMCwwLDEsOS0xLjA5TDgzLjU1LDgxLjdhMSwxLDAsMCwwLDIsLjExYzAtLjE3LDUuMTctMTcuODQsMTIuNTQtMjIuNzVDMTA0LjkzLDU0LjQ5LDEwNi40OCw2MS4zMiwxMDQuMzcsNjUuNTNaXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzTmFtZT1cImNscy0xXCIgZD1cIk0xMjcsNjdoLThhMSwxLDAsMCwwLDAsMmg4QTEsMSwwLDAsMCwxMjcsNjdaXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBjbGFzc05hbWU9XCJjbHMtMVwiIGQ9XCJNOSw2N0gxYTEsMSwwLDAsMCwwLDJIOUExLDEsMCwwLDAsOSw2N1pcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzTmFtZT1cImNscy0xXCIgZD1cIk02NSwxM1Y1YTEsMSwwLDAsMC0yLDB2OEExLDEsMCwwLDAsNjUsMTNaXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBjbGFzc05hbWU9XCJjbHMtMVwiIGQ9XCJNMTExLjYzLDQxLjUyYy4zOSwwLS4wOS4yMSw3LjQ0LTQuMTRhMSwxLDAsMCwwLTEtMS43NmwtNi45Myw0QTEsMSwwLDAsMCwxMTEuNjMsNDEuNTJaXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBjbGFzc05hbWU9XCJjbHMtMVwiIGQ9XCJNMTUuODYsOTQuNjJsLTYuOTMsNGExLDEsMCwwLDAsMSwxLjc2bDYuOTMtNEExLDEsMCwwLDAsMTUuODYsOTQuNjJaXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBjbGFzc05hbWU9XCJjbHMtMVwiIGQ9XCJNMTYuODgsMzkuNjJsLTYuOTMtNGExLDEsMCwwLDAtMSwxLjc2bDYuOTMsNEExLDEsMCwwLDAsMTYuODgsMzkuNjJaXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBjbGFzc05hbWU9XCJjbHMtMVwiIGQ9XCJNMTE5LjA3LDk4LjYybC02LjkzLTRhMSwxLDAsMCwwLTEsMS43Nmw2LjkzLDRBMSwxLDAsMCwwLDExOS4wNyw5OC42MlpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzTmFtZT1cImNscy0xXCIgZD1cIk0zNS42MiwyMC44OGExLDEsMCwwLDAsMS43Ni0xbC00LTYuOTNhMSwxLDAsMCwwLTEuNzYsMVpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzTmFtZT1cImNscy0xXCIgZD1cIk05Mi4zOCwyMC44OGw0LTYuOTNhMSwxLDAsMCwwLTEuNzYtMWwtNCw2LjkzQTEsMSwwLDAsMCw5Mi4zOCwyMC44OFpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9kYXNoYm9hcmQvd2VsY29tZVwiPlxyXG4gICAgICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17YWN0aXZlQ2xhc3NGbjF9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHRleHQtcHJpbWFyeWRhcmsgZGFyazp0ZXh0LWJhY2tncm91bmQgbWwtMSBjdXJzb3ItcG9pbnRlciBvcGFjaXR5LTUwICR7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlSG92ZXIxID8gJ29wYWNpdHktMTAwJyA6ICdvcGFjaXR5LTUwJ1xyXG4gICAgICAgICAgICAgICAgICB9ICR7YWN0aXZlQ2xhc3MxID8gJ29wYWNpdHktMTAwJyA6ICdvcGFjaXR5LTUwJ31gfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBXZWxjb21lXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC02IHctNTIgZ3JpZCBncmlkLWNvbHMtODBweCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Rhc2hib2FyZC9zdGFydHVwXCI+XHJcbiAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2FjdGl2ZUNsYXNzRm4yfVxyXG4gICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHNldEFjdGl2ZUhvdmVyMih0cnVlKX1cclxuICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRBY3RpdmVIb3ZlcjIoZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9XCI0NVwiXHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPVwiNDVcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmaWxsLWN1cnJlbnQgdGV4dC1wcmltYXJ5ZGFyayBkYXJrOnRleHQtYmFja2dyb3VuZCBibG9jayBtLWF1dG8gb3BhY2l0eS01MCBob3ZlcjpvcGFjaXR5LTEwMCBjdXJzb3ItcG9pbnRlciAke1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZUNsYXNzMiA/ICdvcGFjaXR5LTEwMCcgOiAnb3BhY2l0eS01MCdcclxuICAgICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDEyOCAxMjhcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8ZGVmcz5cclxuICAgICAgICAgICAgICAgICAgICA8c3R5bGU+PC9zdHlsZT5cclxuICAgICAgICAgICAgICAgICAgPC9kZWZzPlxyXG4gICAgICAgICAgICAgICAgICA8dGl0bGU+TGFuZGluZyBTdWNjZXNzPC90aXRsZT5cclxuICAgICAgICAgICAgICAgICAgPGcgaWQ9XCJMYW5kaW5nX1N1Y2Nlc3NcIiBkYXRhLW5hbWU9XCJMYW5kaW5nIFN1Y2Nlc3NcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xzLTFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZD1cIk0xMDkuMyw5MC4xQTQ2LDQ2LDAsMCwwLDY1LDM2VjIwLjA4YzEuNzgtLjYyLDcuMjEtMi4xNCwxMi41Ny4yM2ExOS4zMywxOS4zMywwLDAsMCwxNC44MiwwYy44Ny0uMzguNjEuMzEuNjEtMTcuOTNhMSwxLDAsMCwwLTEuNDMtLjkzYy0uMDcsMC02LjY5LDIuODctMTMuMTgsMEExOS40MSwxOS40MSwwLDAsMCw2NSwuOTMsMSwxLDAsMCwwLDYzLDFWMzZhNDUuODYsNDUuODYsMCwwLDAtMjguNjYsMTAuOEMxNi4xOCw0MC40OCw0LDQwLC43OSw0NS41MS0yLjI5LDUwLjg2LDMuOTQsNTkuMywxMCw2NS42OEExMSwxMSwwLDAsMCwxOCw4M2MuODEsMzguNDEsNDYuMDgsNTkuMiw3NS42NiwzNC4yMSw4LjUzLDMsMjksOS4xNSwzMy41NSwxLjMxQzEzMC4zOSwxMTMsMTIzLjg2LDEwMi42NSwxMDkuMyw5MC4xWk03Ny41OSwzLjMxQTE5LjM5LDE5LjM5LDAsMCwwLDkxLDMuODNWMTguNjhjLTEuNzkuNjItNy4yMiwyLjEzLTEyLjU3LS4yM0ExOS4xOSwxOS4xOSwwLDAsMCw2NSwxNy45M1YzLjA4QzY2LjgxLDIuNDYsNzIuMjQsMSw3Ny41OSwzLjMxWk02NSw0NXYtN2MzOS42OS45MSw1OCw1MC4yNywyOC4yMSw3Ni44MUM3MS4zMiwxMDcsNDYsOTIuNjYsMjcuNzcsNzguNjRhMTEsMTEsMCwwLDAtMy4yLTE2LjEzQTQzLjg4LDQzLjg4LDAsMCwxLDYzLDM4LjA2VjQ1QTEsMSwwLDAsMCw2NSw0NVpNMzIuNTUsNDguMzZhNDYuMjEsNDYuMjEsMCwwLDAtOS44MywxMy4yOCwxMC45MywxMC45MywwLDAsMC0xMS40LDIuNDdDLTguMzksNDMuMjMsNS4yMywzOS4wOCwzMi41NSw0OC4zNlpNMTAsNzJhOSw5LDAsMSwxLDksOUE5LDksMCwwLDEsMTAsNzJabTEwLDExYTExLDExLDAsMCwwLDYuMzQtMi44MmMxOC40NSwxNC4yMSw0My40NSwyOC4zNSw2NS4wNSwzNi4yMkM2MywxMzkuMTYsMjAuODMsMTE5LjEsMjAuMDUsODNabTEwNS40LDM0LjVjLTIuNTEsNC4zNS0xNCwzLjYyLTMwLTEuODVhNDUuNjEsNDUuNjEsMCwwLDAsMTMuNDItMjMuMjFDMTIxLjU5LDEwMy41OCwxMjgsMTEzLjEyLDEyNS40NSwxMTcuNDdaXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9kYXNoYm9hcmQvc3RhcnR1cFwiPlxyXG4gICAgICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17YWN0aXZlQ2xhc3NGbjJ9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHRleHQtcHJpbWFyeWRhcmsgZGFyazp0ZXh0LWJhY2tncm91bmQgbWwtMSBjdXJzb3ItcG9pbnRlciBvcGFjaXR5LTUwICR7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlSG92ZXIyID8gJ29wYWNpdHktMTAwJyA6ICdvcGFjaXR5LTUwJ1xyXG4gICAgICAgICAgICAgICAgICB9ICR7YWN0aXZlQ2xhc3MyID8gJ29wYWNpdHktMTAwJyA6ICdvcGFjaXR5LTUwJ31gfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBTdGFydHVwIGlkZWFcclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTYgdy01MiBncmlkIGdyaWQtY29scy04MHB4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2FjdGl2ZUNsYXNzRm4zfVxyXG4gICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRBY3RpdmVIb3ZlcjModHJ1ZSl9XHJcbiAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldEFjdGl2ZUhvdmVyMyhmYWxzZSl9XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCI0NVwiXHJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjQ1XCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZpbGwtY3VycmVudCB0ZXh0LXByaW1hcnlkYXJrIGRhcms6dGV4dC1iYWNrZ3JvdW5kIGJsb2NrIG0tYXV0byBvcGFjaXR5LTUwIGhvdmVyOm9wYWNpdHktMTAwIGN1cnNvci1wb2ludGVyICR7XHJcbiAgICAgICAgICAgICAgICAgIGFjdGl2ZUNsYXNzMyA/ICdvcGFjaXR5LTEwMCcgOiAnb3BhY2l0eS01MCdcclxuICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDEyOCAxMjhcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkZWZzPlxyXG4gICAgICAgICAgICAgICAgICA8c3R5bGU+PC9zdHlsZT5cclxuICAgICAgICAgICAgICAgIDwvZGVmcz5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5TZWFyY2hpbmc8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPGcgaWQ9XCJTZWFyY2hpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbHMtMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZD1cIk03OS41NywzNi40M2EyMiwyMiwwLDEsMCwwLDMxLjE0QTIyLDIyLDAsMCwwLDc5LjU3LDM2LjQzWm0tMS40NCwyOS43YTIwLDIwLDAsMSwxLDAtMjguMjZBMjAsMjAsMCwwLDEsNzguMTMsNjYuMTNaXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbHMtMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZD1cIk0xMTcsMEgzMUExMSwxMSwwLDAsMCwyMCwxMXY5N0gxYTEsMSwwLDAsMC0xLDF2OGExMSwxMSwwLDAsMCwxMSwxMUg5N2ExMSwxMSwwLDAsMCwxMS0xMVYxMDRhMy40MiwzLjQyLDAsMCwwLDIuNDEtMWM0LjcxLTQuNzEsNS41OS01LjEzLDUuNTktN3MtLjY2LTIuMDgtOC05LjQyVjIwaDE5YTEsMSwwLDAsMCwxLTFWMTFBMTEsMTEsMCwwLDAsMTE3LDBaTTkwLjYyLDEyNkgxMWE5LDksMCwwLDEtOS05di03SDg2Qzg2LDExNi4yOSw4NSwxMjIsOTAuNjIsMTI2Wk0xMTQsOTZjMCwuNzksMCwuNjEtNSw1LjU3YTEuNDMsMS40MywwLDAsMS0yLDBMODYuNDMsODFhMS4zOCwxLjM4LDAsMCwxLDAtMmM1LjA3LTUuMDcsNC44LTUsNS41Ny01cy0uMTctLjc1LDE0LjI4LDEzLjdDMTEzLjg3LDk1LjMxLDExNCw5NS4xMSwxMTQsOTZaTTgyLjM3LDcwLjM3YTI2LDI2LDAsMSwxLDAtMzYuNzRBMjYsMjYsMCwwLDEsODIuMzcsNzAuMzdabTIuNzksMCwzLjUyLDMuNTItMi44LDIuOC0zLjUyLTMuNTJBMjYuNDQsMjYuNDQsMCwwLDAsODUuMTYsNzAuMzZaTTk0LjQzLDczYTMuNTMsMy41MywwLDAsMC00LjIzLS40N2wtMy43NS0zLjc1QzEwMC4yNyw1MC4yOCw4NywyNCw2NCwyNEEyOCwyOCwwLDAsMCwzNiw1MmMwLDIzLjM3LDI2LjcxLDM2LDQ0Ljc5LDIyLjQ1bDMuNzMsMy43NEEzLjQxLDMuNDEsMCwwLDAsODUsODIuNDNjMjIuMjIsMjIuMjMsMjAuNTcsMjAuNjEsMjEsMjAuOTJWMTE3YTksOSwwLDAsMS0xOCwwdi04YTEsMSwwLDAsMC0xLTFIMjJWMTFhOSw5LDAsMCwxLDktOWM4NS42LDAsNzkuNzQtLjA4LDc5LjQxLjE3YTExLDExLDAsMCwwLTQuMTQsNi4zMmMtLjQxLDEuNzctLjI5LTQuMTktLjI5LDc2Wk0xMjYsMThIMTA4VjExYTksOSwwLDAsMSwxOCwwWlwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2FjdGl2ZUNsYXNzRm4zfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdGV4dC1wcmltYXJ5ZGFyayBkYXJrOnRleHQtYmFja2dyb3VuZCBtbC0xIGN1cnNvci1wb2ludGVyIG9wYWNpdHktNTAgJHtcclxuICAgICAgICAgICAgICAgICAgYWN0aXZlSG92ZXIzID8gJ29wYWNpdHktMTAwJyA6ICdvcGFjaXR5LTUwJ1xyXG4gICAgICAgICAgICAgICAgfSAke2FjdGl2ZUNsYXNzMyA/ICdvcGFjaXR5LTEwMCcgOiAnb3BhY2l0eS01MCd9YH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBCdXNpbmVzcyBwbGFuXHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC02IHctNTIgZ3JpZCBncmlkLWNvbHMtODBweCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICB7LyogPExpbmsgaHJlZj0nL2Rhc2hib2FyZC9hY2NvdW50Jz4gKi99XHJcbiAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgb25DbGljaz17YWN0aXZlQ2xhc3NGbjR9XHJcbiAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHNldEFjdGl2ZUhvdmVyNCh0cnVlKX1cclxuICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0QWN0aXZlSG92ZXI0KGZhbHNlKX1cclxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjQ1XCJcclxuICAgICAgICAgICAgICAgIHdpZHRoPVwiNDVcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmlsbC1jdXJyZW50IHRleHQtcHJpbWFyeWRhcmsgZGFyazp0ZXh0LWJhY2tncm91bmQgYmxvY2sgbS1hdXRvIG9wYWNpdHktNTAgaG92ZXI6b3BhY2l0eS0xMDAgY3Vyc29yLXBvaW50ZXIgJHtcclxuICAgICAgICAgICAgICAgICAgYWN0aXZlQ2xhc3M0ID8gJ29wYWNpdHktMTAwJyA6ICdvcGFjaXR5LTUwJ1xyXG4gICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgICBpZD1cIkRhdGFfVXNlclwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLW5hbWU9XCJEYXRhIFVzZXJcIlxyXG4gICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDEyOCAxMjhcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkZWZzPlxyXG4gICAgICAgICAgICAgICAgICA8c3R5bGU+PC9zdHlsZT5cclxuICAgICAgICAgICAgICAgIDwvZGVmcz5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5EYXRhIFVzZXI8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xzLTFcIlxyXG4gICAgICAgICAgICAgICAgICBkPVwiTTEwOSwwSDIzYTksOSwwLDAsMC05LDljMCwxMTgsMCwxMTAsMCwxMTAuNjRBOS4yMiw5LjIyLDAsMCwwLDIzLjMxLDEyOEgxMDlhNSw1LDAsMCwwLDUtNVY1QTUsNSwwLDAsMCwxMDksMFptMyw1VjEwN2EzLDMsMCwwLDEtMywzSDI2VjJoODNBMywzLDAsMCwxLDExMiw1Wk0xNiw5YTcsNywwLDAsMSw3LTdoMVYxMTBIMjNhOSw5LDAsMCwwLTYuOTQsMy4yNkMxNiwxMTMuMzQsMTYsMTE4LjI4LDE2LDlabTk2LDExNGEzLDMsMCwwLDEtMywzSDIzLjMxYy02LjEzLDAtOS41Ni02Ljk0LTUuNjgtMTEuNDNBNi45MSw2LjkxLDAsMCwxLDIzLDExMmM5MC45MSwwLDg3LjA2LjQ0LDg5LTFaXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbHMtMVwiXHJcbiAgICAgICAgICAgICAgICAgIGQ9XCJNNTYuMTUsNzUuODFBMzMsMzMsMCwxLDAsMzUsNDUsMzMuMDUsMzMuMDUsMCwwLDAsNTYuMTUsNzUuODFabS03LjUzLTYuNjhjNS44OS0yMi44MiwzMi44Ni0yMi44MywzOC43NiwwQTMwLjg4LDMwLjg4LDAsMCwxLDQ4LjYyLDY5LjEzWk02OCwxNGMyOC4wNywwLDQxLjYxLDM0LjUxLDIxLjA5LDUzLjY1Qzg2LjU2LDU5LDgwLjgyLDUyLjgzLDczLjU3LDUwLjc1YTEzLDEzLDAsMSwwLTExLjE0LDBjLTcuMjUsMi4wOC0xMyw4LjI0LTE1LjUyLDE2LjkyQzI2LjQ1LDQ4LjY5LDM5LjgsMTQsNjgsMTRabTAsMzZBMTEsMTEsMCwxLDEsNzksMzksMTEsMTEsMCwwLDEsNjgsNTBaXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8cGF0aCBjbGFzc05hbWU9XCJjbHMtMVwiIGQ9XCJNOTYuNSw4N2gtNTZhMSwxLDAsMCwwLDAsMmg1NkExLDEsMCwwLDAsOTYuNSw4N1pcIiAvPlxyXG4gICAgICAgICAgICAgICAgPHBhdGggY2xhc3NOYW1lPVwiY2xzLTFcIiBkPVwiTTk2LjUsOTloLTU2YTEsMSwwLDAsMCwwLDJoNTZBMSwxLDAsMCwwLDk2LjUsOTlaXCIgLz5cclxuICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICB7LyogPC9MaW5rPiAqL31cclxuICAgICAgICAgICAgICB7LyogPExpbmsgaHJlZj0nL2Rhc2hib2FyZC9hY2NvdW50Jz4gKi99XHJcbiAgICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2FjdGl2ZUNsYXNzRm40fVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdGV4dC1wcmltYXJ5ZGFyayBkYXJrOnRleHQtYmFja2dyb3VuZCBtbC0xIGN1cnNvci1wb2ludGVyIG9wYWNpdHktNTAgJHtcclxuICAgICAgICAgICAgICAgICAgYWN0aXZlSG92ZXI0ID8gJ29wYWNpdHktMTAwJyA6ICdvcGFjaXR5LTUwJ1xyXG4gICAgICAgICAgICAgICAgfSAke2FjdGl2ZUNsYXNzNCA/ICdvcGFjaXR5LTEwMCcgOiAnb3BhY2l0eS01MCd9YH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBBY2NvdW50XHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIHsvKiA8L0xpbms+ICovfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC02IHctNTIgZ3JpZCBncmlkLWNvbHMtODBweCBpdGVtcy1jZW50ZXIgYWJzb2x1dGUgYm90dG9tLTRcIj5cclxuICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXthY3RpdmVDbGFzc0ZuNX1cclxuICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0QWN0aXZlSG92ZXI1KHRydWUpfVxyXG4gICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRBY3RpdmVIb3ZlcjUoZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiNDVcIlxyXG4gICAgICAgICAgICAgICAgd2lkdGg9XCI0NVwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmaWxsLWN1cnJlbnQgdGV4dC1wcmltYXJ5ZGFyayBkYXJrOnRleHQtYmFja2dyb3VuZCBibG9jayBtLWF1dG8gb3BhY2l0eS01MCBob3ZlcjpvcGFjaXR5LTEwMCBjdXJzb3ItcG9pbnRlciAke1xyXG4gICAgICAgICAgICAgICAgICBhY3RpdmVDbGFzczUgPyAnb3BhY2l0eS0xMDAnIDogJ29wYWNpdHktNTAnXHJcbiAgICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxMjggMTI4XCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGVmcz5cclxuICAgICAgICAgICAgICAgICAgPHN0eWxlPjwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8L2RlZnM+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+TG9nIE91dDwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8ZyBpZD1cIkxvZ19PdXRcIiBkYXRhLW5hbWU9XCJMb2cgT3V0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzTmFtZT1cImNscy0xXCIgZD1cIk00NCw2MXY2YTEsMSwwLDAsMCwyLDBWNjFBMSwxLDAsMCwwLDQ0LDYxWlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xzLTFcIlxyXG4gICAgICAgICAgICAgICAgICAgIGQ9XCJNMTEzLDExM0g4NlY3NWg2djlhMSwxLDAsMCwwLDEsMWMuNjQsMC0uODMsMS4yNiwyMC43Mi0yMC4zYTEsMSwwLDAsMCwwLTEuNDRsLTIwLTIwQTEsMSwwLDAsMCw5Miw0NHY5SDg2VjE0YTEsMSwwLDAsMC0xLTFINTRWMWExLDEsMCwwLDAtMS4zNS0xbC0zOCwxM0ExLDEsMCwwLDAsMTQsMTRjMCwxMDYuNTgtLjM4LDEwMC42LjY5LDEwMUM1NS4zNCwxMjguODgsNTIuNzQsMTI4LDUzLDEyOGExLDEsMCwwLDAsMS0xVjExNWg1OUExLDEsMCwwLDAsMTEzLDExM1pNOTMsNTVhMSwxLDAsMCwwLDEtMVY0Ni40NkwxMTEuNTYsNjQsOTQsODEuNTRWNzRhMSwxLDAsMCwwLTEtMUg1NFY1NVpNNTQsMjFINzdWNTNINTRabTMwLTZWNTNINzlWMjBhMSwxLDAsMCwwLTEtMUg1NFYxNVpNNTIsMTI1LjU3bC0zNi0xMi4zVjE0LjczTDUyLDIuNDNaTTU0LDc1SDc3djM4SDU0Wm0yNSwzOFY3NWg1djM4WlwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2FjdGl2ZUNsYXNzRm41fVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdGV4dC1wcmltYXJ5ZGFyayBkYXJrOnRleHQtYmFja2dyb3VuZCBtbC0xIGN1cnNvci1wb2ludGVyIG9wYWNpdHktNTAgJHtcclxuICAgICAgICAgICAgICAgICAgYWN0aXZlSG92ZXI1ID8gJ29wYWNpdHktMTAwJyA6ICdvcGFjaXR5LTUwJ1xyXG4gICAgICAgICAgICAgICAgfSAke2FjdGl2ZUNsYXNzNSA/ICdvcGFjaXR5LTEwMCcgOiAnb3BhY2l0eS01MCd9YH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBMb2cgb3V0XHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0lzQWN0aXZlQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGVza3RvcE5hdmJhcjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IGRiIH0gZnJvbSAnLi4vLi4vbGliL2ZpcmViYXNlJztcclxuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gJy4uLy4uL2xpYi9uZXdBdXRoJztcclxuaW1wb3J0IE1hbmFnZXJUaXBweSBmcm9tICcuL3N0YXJ0dXAvcHJvamVjdC9idXNpbmVzcy1hcHAvdGlwcHlzL01hbmFnZXJUaXBweSc7XHJcbmltcG9ydCBCb3VuY2VMb2FkZXIgZnJvbSAncmVhY3Qtc3Bpbm5lcnMvQm91bmNlTG9hZGVyJztcclxuXHJcbmNvbnN0IE1lbWJlcnNDb2RlQ29tcG9uZW50ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtwcm9qZWN0SWRJbnB1dFZhbHVlLCBzZXRQcm9qZWN0SWRJbnB1dFZhbHVlXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbcHJvamVjdExvYWRpbmcsIHNldFByb2plY3RMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCB7IGN1cnJlbnRVc2VyIH0gPSB1c2VBdXRoKCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IG9uTmV3UHJvamVjdEFkZCA9IGFzeW5jICgpID0+IHtcclxuICAgIC8vIEZldGNoIHBhcnRpY3VsYXIgcHJvamVjdFxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oJ3Byb2plY3RzJykuZG9jKHByb2plY3RJZElucHV0VmFsdWUpLmdldCgpO1xyXG4gICAgICBjb25zdCBwcm9qZWN0RGF0YSA9IGRhdGEuZGF0YSgpO1xyXG4gICAgICBpZiAocHJvamVjdERhdGEudWlkID09PSBjdXJyZW50VXNlci51aWQpIHtcclxuICAgICAgICBhbGVydCgnWW91IGFyZSBhbHJlYWR5IGEgbWVtYmVyIG9mIHRoaXMgcHJvamVjdCEnKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0UHJvamVjdExvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgLy8gRmV0Y2ggcGFydGljdWxhciB1c2VyXHJcbiAgICAgICAgY29uc3QgdXNlcnNEYXRhID0gYXdhaXQgZGIuY29sbGVjdGlvbigndXNlcnMnKS5kb2MoY3VycmVudFVzZXIudWlkKS5nZXQoKTtcclxuICAgICAgICBjb25zdCB7IG5hbWUsIHVzZXJDb3VudHJ5LCBmb3JtYXRlZFVzZXIgfSA9IHVzZXJzRGF0YS5kYXRhKCk7XHJcbiAgICAgICAgLy8gVXBkYXRlIHBhcnRpY3VsYXIgcHJvamVjdCB1c2Vyc1xyXG4gICAgICAgIGNvbnN0IG5ld1VzZXJzQXJyYXkgPSBwcm9qZWN0RGF0YS5wcm9qZWN0VXNlcnM7XHJcbiAgICAgICAgbmV3VXNlcnNBcnJheS5wdXNoKHtcclxuICAgICAgICAgIGVtYWlsOiBmb3JtYXRlZFVzZXIuZW1haWwsXHJcbiAgICAgICAgICBzdHJpcGVSb2xlOiBmb3JtYXRlZFVzZXIuc3RyaXBlUm9sZSxcclxuICAgICAgICAgIHRva2VuOiBmb3JtYXRlZFVzZXIudG9rZW4sXHJcbiAgICAgICAgICB1c2VyVWlkOiBmb3JtYXRlZFVzZXIudWlkLFxyXG4gICAgICAgICAgdXNlck5hbWU6IG5hbWUsXHJcbiAgICAgICAgICB1c2VyQ291bnRyeSxcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBVcGRhdGUgZmlyZWJhc2VcclxuICAgICAgICBhd2FpdCBkYi5jb2xsZWN0aW9uKCdwcm9qZWN0cycpLmRvYyhwcm9qZWN0SWRJbnB1dFZhbHVlKS51cGRhdGUoeyBwcm9qZWN0VXNlcnM6IG5ld1VzZXJzQXJyYXkgfSk7XHJcbiAgICAgICAgLy8gUGFnZSByZWxvYWRcclxuICAgICAgICByb3V0ZXIucmVsb2FkKCk7XHJcbiAgICAgICAgc2V0UHJvamVjdExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIHtcclxuICAgICAgYWxlcnQoJ1lvdXIgcHJvamVjdCBjb2RlIGlzIGludmFsaWQnKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInotNTAgdGV4dC1wcmltYXJ5ZGFyayByb3VuZGVkLTJ4bCBtYi0zMiBmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgZGFyazp0ZXh0LWJhY2tncm91bmRcIj5CZWNvbWUgYSBwcm9qZWN0IG1lbWJlcjwvcD5cclxuICAgICAgICA8TWFuYWdlclRpcHB5IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTggcHgtOCBtdC0xIHctZnVsbCBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgYm9yZGVyLXItNiByb3VuZGVkLTJ4bCBiZy13aGl0ZSBkYXJrOmJnLWJhY2tncm91bmRcIj5cclxuICAgICAgICB7LyogPHA+UGFzdGUgdGhlIHByb2plY3QgY29kZSBoZXJlOjwvcD4gKi99XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB2YWx1ZT17cHJvamVjdElkSW5wdXRWYWx1ZX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UHJvamVjdElkSW5wdXRWYWx1ZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cInByb2plY3QgY29kZVwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LTgvMTIgYmctd2hpdGUgdGV4dC1iYXNlIGZvY3VzOm91dGxpbmUtbm9uZSB0ZXh0LWdyYXlcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAge3Byb2plY3RMb2FkaW5nID8gKFxyXG4gICAgICAgICAgPEJvdW5jZUxvYWRlciBjb2xvcj17JyM2QzYzRkYnfSBzaXplPXszOH0gLz5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBvbkNsaWNrPXtvbk5ld1Byb2plY3RBZGR9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImhvdmVyOmJnLXByaW1hcnkgaG92ZXI6dGV4dC13aGl0ZSBkYXJrOmhvdmVyOmJnLXByaW1hcnlkYXJrIGRhcms6aG92ZXI6dGV4dC1iYWNrZ3JvdW5kIGZvY3VzOm91dGxpbmUtbm9uZSBib3JkZXIgYm9yZGVyLXByaW1hcnkgdGV4dC1wcmltYXJ5IHRleHQtc20gZm9udC1saWdodCBweS0yIHB4LTYgcm91bmRlZC0yeGwgZGFyazp0ZXh0LXByaW1hcnlkYXJrIGRhcms6Ym9yZGVyLXByaW1hcnlkYXJrXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgQWRkIFByb2plY3RcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lbWJlcnNDb2RlQ29tcG9uZW50O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tICcuLi8uLi9saWIvbmV3QXV0aCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgSXNBY3RpdmVDb250ZXh0IH0gZnJvbSAnLi9EZXNrdG9wTmF2YmFyJztcclxuaW1wb3J0IGdzYXAsIHsgUG93ZXI0IH0gZnJvbSAnZ3NhcCc7XHJcbmltcG9ydCB7IHVzZVdpbmRvd1NpemUgfSBmcm9tICcuLi8uLi91dGlscy91c2VXaW5kb3dTaXplJztcclxuXHJcbmNvbnN0IFJlZGlyZWN0ID0gKHsgdG8gfSkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgcm91dGVyLnB1c2godG8pO1xyXG4gIH0sIFt0b10pO1xyXG5cclxuICByZXR1cm4gbnVsbDtcclxufTtcclxuXHJcbmNvbnN0IE5hdmJhclRlbXBsYXRlID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIC8vIE1vYmlsZSBmcmllbmRseVxyXG4gIGNvbnN0IHNpemUgPSB1c2VXaW5kb3dTaXplKCk7XHJcblxyXG4gIGNvbnN0IGFjdGl2ZUhvdmVyID0gdXNlQ29udGV4dChJc0FjdGl2ZUNvbnRleHQpO1xyXG4gIGNvbnN0IHsgY3VycmVudFVzZXIgfSA9IHVzZUF1dGgoKTtcclxuICBjb25zdCBjb250ZW50UmVmID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICBjb25zdCBhY3RpdmVDbGFzcyA9IGFjdGl2ZUhvdmVyID8gJ21sLTUyJyA6ICdtbC0yMCc7XHJcblxyXG4gIGlmIChhY3RpdmVIb3Zlcikge1xyXG4gICAgZ3NhcC50byhjb250ZW50UmVmLmN1cnJlbnQsIHtcclxuICAgICAgbWFyZ2luTGVmdDogJzIwOHB4JyxcclxuICAgICAgZWFzZTogUG93ZXI0LmVhc2VPdXQsXHJcbiAgICAgIC8vIGR1cmF0aW9uOiAxXHJcbiAgICB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgZ3NhcC50byhjb250ZW50UmVmLmN1cnJlbnQsIHsgbWFyZ2luTGVmdDogJzgwcHgnLCBlYXNlOiBQb3dlcjQuZWFzZU91dCB9KTtcclxuICB9XHJcblxyXG4gIGlmICghY3VycmVudFVzZXIpIHtcclxuICAgIHJldHVybiA8UmVkaXJlY3QgdG89XCIvXCIgLz47XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge3NpemUud2lkdGggPCA4NjAgPyAoXHJcbiAgICAgICAgPD57Y2hpbGRyZW59PC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgcmVmPXtjb250ZW50UmVmfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgcmVsYXRpdmUgaC1mdWxsICR7YWN0aXZlQ2xhc3N9IGJnLWJhY2tncm91bmQgZGFyazpiZy1zZWNvbmRhcnlgfVxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgdHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uOiAnbGluZWFyJyxcclxuICAgICAgICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uOiAnMjAwbXMnLFxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uUHJvcGVydHk6ICd3aWR0aCwgbWFyZ2luLWxlZnQnLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyVGVtcGxhdGU7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBnc2FwLCB7IFBvd2VyNCB9IGZyb20gJ2dzYXAnO1xyXG5pbXBvcnQgVGlwcHkgZnJvbSAnQHRpcHB5anMvcmVhY3QnO1xyXG5cclxuY29uc3QgVGlwcHlNb25zdGVyID0gKHtcclxuICBzZXRUaXBweUhlbHBlcixcclxuICBzZXRXcm9uZ05hbWVUaXBweUhlbHBlcixcclxuICB3cm9uZ05hbWUsXHJcbiAgcHJvamVjdENyZWF0b3IsXHJcbiAgY2FzaEZsb3csXHJcbiAgYnVzaW5lc3NQbGFuLFxyXG4gIHByb2plY3RNYW5hZ2VyLFxyXG4gIGNvbnRlbnRDbGFzcyxcclxuICBjb250ZW50VGV4dCxcclxuICBjb250ZW50VGV4dDEsXHJcbiAgc3RhcnR1cHMsXHJcbiAgbWFya2V0LFxyXG4gIG1vZGVsLFxyXG4gIHN1Y2Nlc3MsXHJcbiAgdGlwcHlNb25zdGVyLFxyXG4gIHNldFRpcHB5TW9uc3RlcixcclxuICBzZXRDdXJyZW50VGlwcHksXHJcbiAgZW1wdHlJbnB1dCxcclxuICBpbml0aWFsTW9kYWwsXHJcbiAgdmlzaW9uLFxyXG4gIHByb2R1Y3QsXHJcbiAgZmluYW5jZXMsXHJcbiAgd2VsY29tZSxcclxufSkgPT4ge1xyXG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBjb250ZW50UmVmID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IHRpcHB5UmVmID0gdXNlUmVmKCk7XHJcblxyXG4gIC8vIGNvbnN0IFtlbXB0eUlucHV0LCBzZXRFbXB0eUlucHV0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3Qgc2hvdyA9ICgpID0+IHtcclxuICAgIGdzYXAuZnJvbVRvKFxyXG4gICAgICB0aXBweVJlZi5jdXJyZW50LFxyXG4gICAgICB7IGF1dG9BbHBoYTogMCwgc2NhbGU6IDAgfSxcclxuICAgICAgeyBhdXRvQWxwaGE6IDEsIHNjYWxlOiAxLCBkdXJhdGlvbjogMSwgdHJhbnNmb3JtT3JpZ2luOiAnYm90dG9tIHJpZ2h0JywgZWFzZTogUG93ZXI0LmVhc2VPdXQgfVxyXG4gICAgKTtcclxuICAgIHNldFZpc2libGUodHJ1ZSk7XHJcbiAgICBlbXB0eUlucHV0ICYmIHNldEN1cnJlbnRUaXBweSh0cnVlKTtcclxuICB9O1xyXG4gIGNvbnN0IGhpZGUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBhd2FpdCBnc2FwLnRvKHRpcHB5UmVmLmN1cnJlbnQsIHtcclxuICAgICAgYXV0b0FscGhhOiAwLFxyXG4gICAgICBzY2FsZTogMCxcclxuICAgICAgZHVyYXRpb246IDEsXHJcbiAgICAgIHRyYW5zZm9ybU9yaWdpbjogJ2JvdHRvbSByaWdodCcsXHJcbiAgICAgIGVhc2U6IFBvd2VyNC5lYXNlSW4sXHJcbiAgICB9KTtcclxuICAgIGVtcHR5SW5wdXQgJiYgc2V0VGlwcHlNb25zdGVyKGZhbHNlKTtcclxuICAgIHNldFZpc2libGUoZmFsc2UpO1xyXG4gICAgZW1wdHlJbnB1dCAmJiBzZXRDdXJyZW50VGlwcHkoZmFsc2UpO1xyXG4gICAgdGlwcHlNb25zdGVyICYmIHNldFRpcHB5SGVscGVyKGZhbHNlKTtcclxuICAgIHdyb25nTmFtZSAmJiBzZXRXcm9uZ05hbWVUaXBweUhlbHBlcihmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25JbWFnZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgaWYgKCF0aXBweU1vbnN0ZXIpIHtcclxuICAgICAgdmlzaWJsZSA/IGhpZGUoKSA6IHNob3coKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gR1NBUFxyXG4gICAgZ3NhcC5mcm9tVG8oY29udGVudFJlZi5jdXJyZW50LCB7IGF1dG9BbHBoYTogMCB9LCB7IGF1dG9BbHBoYTogMSwgZHVyYXRpb246IDIsIHRyYW5zZm9ybU9yaWdpbjogJ2JvdHRvbSByaWdodCcsIGVhc2U6IFBvd2VyNC5lYXNlT3V0IH0pO1xyXG4gICAgLy8gVElQUFlcclxuICAgIHNldFZpc2libGUodHJ1ZSk7XHJcbiAgICBlbXB0eUlucHV0ICYmIHNldEN1cnJlbnRUaXBweSh0cnVlKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8VGlwcHlcclxuICAgICAgLy8gdHJpZ2dlcj17dGlwcHlNb25zdGVyfVxyXG4gICAgICB6SW5kZXg9e3Zpc2libGUgfHwgdGlwcHlNb25zdGVyID8gNDAgOiAwfVxyXG4gICAgICBvblNob3c9e3Nob3d9XHJcbiAgICAgIGFuaW1hdGlvbj1cImZhZGVcIlxyXG4gICAgICBkdXJhdGlvbj17NTAwfVxyXG4gICAgICB0b3VjaD17dHJ1ZX1cclxuICAgICAgdmlzaWJsZT17dmlzaWJsZSB8fCB0aXBweU1vbnN0ZXJ9XHJcbiAgICAgIG9uQ2xpY2tPdXRzaWRlPXtoaWRlfVxyXG4gICAgICBvZmZzZXQ9e21hcmtldCB8fCBtb2RlbCB8fCBzdWNjZXNzIHx8IHRpcHB5TW9uc3RlciB8fCB3cm9uZ05hbWUgPyBbLTI2NSwgLTY1XSA6IFstMjIwLCAtNjVdfVxyXG4gICAgICAvLyBwbGFjZW1lbnQ9J2xlZnQtZW5kJ1xyXG4gICAgICBpbnRlcmFjdGl2ZT17dHJ1ZX1cclxuICAgICAgY29udGVudD17XHJcbiAgICAgICAgKHdyb25nTmFtZSAmJiAoXHJcbiAgICAgICAgICA8ZGl2IHJlZj17dGlwcHlSZWZ9IGNsYXNzTmFtZT1cImgtMTYgdy05NiBzaGFkb3ctbGcgcm91bmRlZC0yeGwgYmctcmVkIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGZvY3VzOm91dGxpbmUtbm9uZVwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwLTQgdGV4dC1zbSB0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgT3BzLCB1bmZvcnR1bmF0ZWx5IHlvdSBhbHJlYWR5IGhhdmUgYSBwcm9qZWN0IHdpdGggdGhhdCBuYW1lIVxyXG4gICAgICAgICAgICAgIHsvKiA8aW1nIHNyYz1cIi9lbW9qaXMvY3J5aW5nLnN2Z1wiIGhlaWdodD17MjV9IHdpZHRoPXsyNX0gY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHJlbGF0aXZlXCIgLz4gKi99XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBmbGV4LXdyYXAgZ2FwLTIgbXQtMlwiPjwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSkgfHxcclxuICAgICAgICAodGlwcHlNb25zdGVyICYmIChcclxuICAgICAgICAgIDxkaXYgcmVmPXt0aXBweVJlZn0gY2xhc3NOYW1lPVwiaC0xMiB3LTk2IHNoYWRvdy1sZyByb3VuZGVkLTJ4bCBiZy1yZWQgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgZm9jdXM6b3V0bGluZS1ub25lXCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInB5LTQgcHgtMiB0ZXh0LXNtIHRleHQtY2VudGVyIHRleHQtd2hpdGUgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICBPb3BzLCB5b3UgaGF2ZSB0byBwcm92aWRlIGFsbCB0aGUgaW5mb3JtYXRpb25cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9wcm9qZWN0LWNyZWF0ZS9zYWQuc3ZnXCIgaGVpZ2h0PXsxOH0gd2lkdGg9ezE4fSBjbGFzc05hbWU9XCJtbC0yIGlubGluZS1ibG9jayByZWxhdGl2ZVwiIC8+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBmbGV4LXdyYXAgZ2FwLTIgbXQtMlwiPjwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSkgfHwgKFxyXG4gICAgICAgICAgPGRpdiByZWY9e3RpcHB5UmVmfSBjbGFzc05hbWU9e2Bmb2N1czpvdXRsaW5lLW5vbmUgJHtjb250ZW50Q2xhc3N9YH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5ZGFyayBwLTQgdGV4dC1zbSB0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAge2NvbnRlbnRUZXh0fVxyXG4gICAgICAgICAgICAgIHtzdGFydHVwcyAmJiAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9lbW9qaXMvY29jb3VudC5zdmdcIiBoZWlnaHQ9ezIyfSB3aWR0aD17MjJ9IGNsYXNzTmFtZT1cImlubGluZS1ibG9ja1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImlubGluZS1ibG9ja1wiPi48L3A+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIHtpbml0aWFsTW9kYWwgJiYgKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvZW1vamlzL2hhbW1lci5zdmdcIiBoZWlnaHQ9ezIyfSB3aWR0aD17MjJ9IGNsYXNzTmFtZT1cImlubGluZS1ibG9ja1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImlubGluZS1ibG9ja1wiPi48L3A+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIHt2aXNpb24gJiYgKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvZW1vamlzL2Rlc2VydC5zdmdcIiBoZWlnaHQ9ezIyfSB3aWR0aD17MjJ9IGNsYXNzTmFtZT1cImlubGluZS1ibG9jayByZWxhdGl2ZSBib3R0b20tMC41XCIgLz5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrXCI+LjwvcD5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAge3Byb2R1Y3QgJiYgKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvZW1vamlzL294LnN2Z1wiIGhlaWdodD17MjJ9IHdpZHRoPXsyMn0gY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHJlbGF0aXZlIGJvdHRvbS0wLjVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2tcIj4uPC9wPlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICB7bWFya2V0ICYmIChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2Vtb2ppcy93aGFsZS5zdmdcIiBoZWlnaHQ9ezIyfSB3aWR0aD17MjJ9IGNsYXNzTmFtZT1cImlubGluZS1ibG9ja1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImlubGluZS1ibG9ja1wiPi48L3A+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIHtmaW5hbmNlcyAmJiAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9lbW9qaXMvdW5pY29ybi5zdmdcIiBoZWlnaHQ9ezIyfSB3aWR0aD17MjJ9IGNsYXNzTmFtZT1cImlubGluZS1ibG9jayByZWxhdGl2ZSBib3R0b20tMC41XCIgLz5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrXCI+LjwvcD5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAge21vZGVsICYmIChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2Vtb2ppcy9waXJhdC5zdmdcIiBoZWlnaHQ9ezIyfSB3aWR0aD17MjJ9IGNsYXNzTmFtZT1cImlubGluZS1ibG9ja1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImlubGluZS1ibG9ja1wiPi48L3A+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIHtzdWNjZXNzICYmIChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2Vtb2ppcy9zdGFyLnN2Z1wiIGhlaWdodD17MjJ9IHdpZHRoPXsyMn0gY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrXCI+ITwvcD5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAge3dlbGNvbWUgJiYgKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvZ2lmcy9oZWxsby1oYW5kLmdpZlwiIGhlaWdodD17MjJ9IHdpZHRoPXsyMn0gY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrXCI+LjwvcD5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAge3Byb2plY3RNYW5hZ2VyICYmIChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3Byb2plY3QtbWFuYWdlci9vY3RvcHVzLnN2Z1wiIGhlaWdodD17MjB9IHdpZHRoPXsyMH0gY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHJlbGF0aXZlIGJvdHRvbS0wLjVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2tcIj4uPC9wPlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICB7YnVzaW5lc3NQbGFuICYmIChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2J1c2luZXNzLW1vZGVsL2dyb3cuc3ZnXCIgaGVpZ2h0PXsyMH0gd2lkdGg9ezIwfSBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgcmVsYXRpdmUgYm90dG9tLTAuNSBsZWZ0LTFcIiAvPlxyXG4gICAgICAgICAgICAgICAgICB7LyogPHAgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrXCI+LjwvcD4gKi99XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIHtjYXNoRmxvdyAmJiAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9jYXNoLWZsb3cvdGlwcHkuc3ZnXCIgaGVpZ2h0PXsyMH0gd2lkdGg9ezIwfSBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgcmVsYXRpdmUgYm90dG9tLTAuNSBsZWZ0LTFcIiAvPlxyXG4gICAgICAgICAgICAgICAgICB7LyogPHAgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrXCI+LjwvcD4gKi99XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIHtwcm9qZWN0Q3JlYXRvciAmJiAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9wcm9qZWN0LWNyZWF0ZS9idWxiLnN2Z1wiIGhlaWdodD17MjB9IHdpZHRoPXsyMH0gY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHJlbGF0aXZlIGJvdHRvbS0wLjUgbGVmdC0xXCIgLz5cclxuICAgICAgICAgICAgICAgICAgey8qIDxwIGNsYXNzTmFtZT1cImlubGluZS1ibG9ja1wiPi48L3A+ICovfVxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICB7LyogUHJvamVjdCBtYW5hZ2VyIHN0YXJ0ICovfVxyXG4gICAgICAgICAgICAgIHsvKiBQcm9qZWN0IG1hbmFnZXIgZW5kICovfVxyXG4gICAgICAgICAgICAgIHsvKiBURVhUIDEgKi99XHJcbiAgICAgICAgICAgICAge2NvbnRlbnRUZXh0MSAmJiBjb250ZW50VGV4dDF9XHJcbiAgICAgICAgICAgICAge3N0YXJ0dXBzICYmIChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2Vtb2ppcy9iYWxsb29uLnN2Z1wiIGhlaWdodD17MjJ9IHdpZHRoPXsyMn0gY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrXCI+LjwvcD5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAge3Zpc2lvbiAmJiAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9lbW9qaXMvY2FtZWwuc3ZnXCIgaGVpZ2h0PXsyMn0gd2lkdGg9ezIyfSBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2tcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2tcIj4uPC9wPlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICB7cHJvZHVjdCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9lbW9qaXMvbWFwLnN2Z1wiIGhlaWdodD17MjJ9IHdpZHRoPXsyMn0gY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrXCI+LjwvcD5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAge21hcmtldCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9lbW9qaXMvaXNsYW5kLnN2Z1wiIGhlaWdodD17MjJ9IHdpZHRoPXsyMn0gY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrXCI+LjwvcD5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAge2ZpbmFuY2VzICYmIChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2Vtb2ppcy9jb25zdHJ1Y3Rpb24uc3ZnXCIgaGVpZ2h0PXsyMn0gd2lkdGg9ezIyfSBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2tcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2tcIj4uPC9wPlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICB7bW9kZWwgJiYgKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvZW1vamlzL3BvcHBlci5zdmdcIiBoZWlnaHQ9ezIyfSB3aWR0aD17MjJ9IGNsYXNzTmFtZT1cImlubGluZS1ibG9jayByZWxhdGl2ZSBib3R0b20tMC41XCIgLz5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrXCI+ITwvcD5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAge3dlbGNvbWUgJiYgKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvZ2lmcy9yb2NrZXQuZ2lmXCIgaGVpZ2h0PXsyMn0gd2lkdGg9ezIyfSBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2tcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2tcIj4hPC9wPlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICB7cHJvamVjdE1hbmFnZXIgJiYgKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvcHJvamVjdC1tYW5hZ2VyL2Zsb3dlci5zdmdcIiBoZWlnaHQ9ezE4fSB3aWR0aD17MTh9IGNsYXNzTmFtZT1cImlubGluZS1ibG9jayByZWxhdGl2ZSBib3R0b20tMC41XCIgLz5cclxuICAgICAgICAgICAgICAgICAgey8qIDxwIGNsYXNzTmFtZT1cImlubGluZS1ibG9ja1wiPiE8L3A+ICovfVxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICB7LyogPGltZyBzcmM9Jy9lbW9qaXMvYmFsbG9vbi5zdmcnIGhlaWdodD17MjJ9IHdpZHRoPXsyMn0gY2xhc3NOYW1lPSdpbmxpbmUtYmxvY2snIC8+LiAqL31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZmxleC13cmFwIGdhcC0yIG10LTJcIj48L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgICAgfVxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIGZsZXggZmxleC13cmFwIG0tMiBib3R0b20tNCByaWdodC0yIHotNTBcIj5cclxuICAgICAgICA8aW1nIHNyYz1cIi9tb25zdGVycy9tb25zdGVyLXR3by5zdmdcIiBoZWlnaHQ9ezY2fSB3aWR0aD17NjB9IGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyIHotNTBcIiBvbkNsaWNrPXtvbkltYWdlQ2xpY2t9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9UaXBweT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGlwcHlNb25zdGVyO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgQW5pbWF0ZWRCYWNrZ3JvdW5kID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPSdhcmVhJz5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPHVsIGNsYXNzTmFtZT0nY2lyY2xlcyc+XHJcbiAgICAgIDxsaT48L2xpPlxyXG4gICAgICA8bGk+PC9saT5cclxuICAgICAgPGxpPjwvbGk+XHJcbiAgICAgIDxsaT48L2xpPlxyXG4gICAgICA8bGk+PC9saT5cclxuICAgICAgPGxpPjwvbGk+XHJcbiAgICAgIDxsaT48L2xpPlxyXG4gICAgICA8bGk+PC9saT5cclxuICAgICAgPGxpPjwvbGk+XHJcbiAgICAgIDxsaT48L2xpPlxyXG4gICAgPC91bD5cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFuaW1hdGVkQmFja2dyb3VuZDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5cclxuY29uc3QgRW1wdHlTdGFydHVwID0gKHsgb25Qcm9qZWN0Q3JlYXRlIH0pID0+IHtcclxuXHJcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAvLyAgIGdzYXAuZnJvbVRvKFxyXG4gIC8vICAgICBjb250YWluZXJSZWYuY3VycmVudCxcclxuICAvLyAgICAgeyBhdXRvQWxwaGE6IDAgfSxcclxuICAvLyAgICAgeyBhdXRvQWxwaGE6IDEsIGR1cmF0aW9uOiAyLCBlYXNlOiBQb3dlcjQuZWFzZU91dCB9XHJcbiAgLy8gICApO1xyXG4gIC8vIH0sIFtdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J3ctZnVsbCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBib3JkZXItci02IHJvdW5kZWQtMnhsIGJnLXdoaXRlIG10LTggZGFyazpiZy1iYWNrZ3JvdW5kJz5cclxuICAgICAgPEltYWdlIGhlaWdodD17MjAwfSB3aWR0aD17MjAwfSBzcmM9Jy9sYXVuY2gtbWFrZXIuc3ZnJyAvPlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPSd0ZXh0LXNlY29uZGFyeSB0ZXh0LWJhc2UgdGV4dC1ncmF5Jz5cclxuICAgICAgICBJdCBsb29rcyBsaWtlIHlvdSBoYXZlIG5vIGFueSBzdGFydHVwcyB5ZXQg8J+UjlxyXG4gICAgICA8L2gxPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncC00Jz5cclxuICAgICAgICA8TGluayBocmVmPScvZGFzaGJvYXJkL3N0YXJ0dXAvY3JlYXRvcic+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uUHJvamVjdENyZWF0ZX0gY2xhc3NOYW1lPSdob3ZlcjpiZy1wcmltYXJ5IGhvdmVyOnRleHQtd2hpdGUgZGFyazpob3ZlcjpiZy1wcmltYXJ5ZGFyayBkYXJrOmhvdmVyOnRleHQtYmFja2dyb3VuZCBmb2N1czpvdXRsaW5lLW5vbmUgYm9yZGVyIGJvcmRlci1wcmltYXJ5IHRleHQtcHJpbWFyeSBkYXJrOnRleHQtcHJpbWFyeWRhcmsgZGFyazpib3JkZXItcHJpbWFyeWRhcmsgdGV4dC1zbSBmb250LWxpZ2h0IHB5LTIgcHgtNiByb3VuZGVkLTJ4bCBtLTInPlxyXG4gICAgICAgICAgICBDcmVhdGUgeW91ciBmaXJzdCBzdGFydHVwXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVtcHR5U3RhcnR1cDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBpc01vYmlsZSB9IGZyb20gJ3JlYWN0LWRldmljZS1kZXRlY3QnO1xyXG5pbXBvcnQgZ3NhcCwgeyBMaW5lYXIgfSBmcm9tICdnc2FwJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5jb25zdCBFeGl0Q29tcG9uZW50ID0gKCkgPT4ge1xyXG4gIGNvbnN0IGV4aXRJbWFnZSA9IHVzZVJlZigpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIWlzTW9iaWxlKSB7XHJcbiAgICAgIGV4aXRJbWFnZS5jdXJyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoKSA9PiB7XHJcbiAgICAgICAgZ3NhcC50byhleGl0SW1hZ2UuY3VycmVudCwgeyByb3RhdGlvbjogJzE4MF9jdycsIGR1cmF0aW9uOiAwLjUsIGVhc2U6IExpbmVhci5lYXNlSW4gfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBleGl0SW1hZ2UuY3VycmVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xyXG4gICAgICAgIGdzYXAudG8oZXhpdEltYWdlLmN1cnJlbnQsIHsgcm90YXRpb246ICcwX2N3JywgZHVyYXRpb246IDAuNSwgZWFzZTogTGluZWFyLmVhc2VJbiB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8aW1nXHJcbiAgICAgIHJlZj17ZXhpdEltYWdlfVxyXG4gICAgICBvbkNsaWNrPXsoKSA9PiBSb3V0ZXIucHVzaChgL2Rhc2hib2FyZC9wcm9qZWN0cy8ke1JvdXRlci5xdWVyeS5wcm9qZWN0fWApfVxyXG4gICAgICBzcmM9XCIvYnVzaW5lc3MtbW9kZWwvYmFjazQuc3ZnXCJcclxuICAgICAgaGVpZ2h0PXsyOH1cclxuICAgICAgd2lkdGg9ezI4fVxyXG4gICAgICBjbGFzc05hbWU9XCJmaXhlZCBsZWZ0LTYgdG9wLTMgY3Vyc29yLXBvaW50ZXIgei01MFwiXHJcbiAgICAvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFeGl0Q29tcG9uZW50O1xyXG4iLCJpbXBvcnQgeyBzYXZlQXMgfSBmcm9tICdmaWxlLXNhdmVyJztcclxuXHJcbmltcG9ydCB7IEZvbnQsIHBkZiwgUGFnZSwgVGV4dCwgVmlldywgSW1hZ2UsIERvY3VtZW50LCBTdHlsZVNoZWV0LCBQREZWaWV3ZXIsIFBERkRvd25sb2FkTGluayB9IGZyb20gJ0ByZWFjdC1wZGYvcmVuZGVyZXInO1xyXG5cclxuLy8gY29uc3QgaW1hZ2UgPSBhdmF0YXJFeGlzdHMgIT0gJ2JsYW5rJyA/IGF2YXRhckV4aXN0cyA6IGltYWdlTmFtZUV4aXN0cztcclxuLy8gY29uc29sZS5sb2coaW1hZ2UpO1xyXG5cclxuY29uc3QgTXlEb2N1bWVudDEgPSAoeyBkYXRhIH0pID0+IHtcclxuICBjb25zb2xlLmxvZygnZGF0YSAtLT4gJywgZGF0YSk7XHJcbiAgRm9udC5yZWdpc3Rlcih7IHNyYzogJy9mb250cy9wb3BwaW5zLnR0ZicsIGZhbWlseTogJ1BvcHBpbnMnIH0pO1xyXG4gIEZvbnQucmVnaXN0ZXIoeyBzcmM6ICcvZm9udHMvY29tZm9ydGFhLnR0ZicsIGZhbWlseTogJ0NvbWZvcnRhYScgfSk7XHJcblxyXG4gIGNvbnN0IHN0eWxlcyA9IFN0eWxlU2hlZXQuY3JlYXRlKHtcclxuICAgIC8vIFNUQVJUIEhPTUVQQUdFIFNFQ1RJT05cclxuICAgIGhvbWVQYWdlOiB7XHJcbiAgICAgIGZvbnRGYW1pbHk6ICdDb21mb3J0YWEnLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZjhmOWZiJyxcclxuICAgICAgZmxleERpcmVjdGlvbjogJ3JvdycsXHJcbiAgICB9LFxyXG4gICAgaG9tZVBhZ2VUaXRsZVNlY3Rpb246IHtcclxuICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgbWFyZ2luVG9wOiA0MCxcclxuICAgIH0sXHJcbiAgICBob21lUGFnZVRpdGxlOiB7XHJcbiAgICAgIGZvbnRTaXplOiAyNixcclxuICAgICAgY29sb3I6ICcjMGExMjMwJyxcclxuICAgIH0sXHJcbiAgICBob21lUGFnZURlc2M6IHtcclxuICAgICAgZm9udFNpemU6IDE2LFxyXG4gICAgICBjb2xvcjogJyNhMGFlYzAnLFxyXG4gICAgfSxcclxuICAgIGltYWdlOiB7XHJcbiAgICAgIGhlaWdodDogJzIwMHB4JyxcclxuICAgICAgd2lkdGg6ICcyMDBweCcsXHJcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICAgIG1hcmdpbkxlZnQ6ICdhdXRvJyxcclxuICAgICAgbWFyZ2luUmlnaHQ6ICdhdXRvJyxcclxuICAgICAgbWFyZ2luVG9wOiAyMixcclxuICAgIH0sXHJcbiAgICBsZWZ0RGVzY0Jsb2NrOiB7XHJcbiAgICAgIHdpZHRoOiAnNzUlJyxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzZDNjNGRicsXHJcbiAgICAgIHRleHRBbGlnbjogJ2xlZnQnLFxyXG4gICAgICBtYXJnaW5Ub3A6ICczMnB4JyxcclxuICAgICAgYm9yZGVyVG9wUmlnaHRSYWRpdXM6IDUwLFxyXG4gICAgfSxcclxuICAgIGxlZnREZXNjQmxvY2tUZXh0OiB7XHJcbiAgICAgIGZvbnRTaXplOiAxNCxcclxuICAgICAgcGFkZGluZzogMzIsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IDEuNCxcclxuICAgICAgY29sb3I6ICcjZjhmOWZiJyxcclxuICAgIH0sXHJcbiAgICByaWdodEJhcjoge1xyXG4gICAgICBoZWlnaHQ6ICcxMDB2aCcsXHJcbiAgICAgIHdpZHRoOiAnMTVweCcsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyM2QzYzRkYnLFxyXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgcmlnaHQ6ICc1JScsXHJcbiAgICB9LFxyXG4gICAgcmlnaHRCYXJDb250YWN0OiB7XHJcbiAgICAgIGNvbG9yOiAnI2Y4ZjlmYicsXHJcbiAgICAgIGZvbnRTaXplOiAxNCxcclxuICAgICAgd2lkdGg6ICc1MCUnLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjNkM2M0ZGJyxcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgIGJvdHRvbTogJzEwJScsXHJcbiAgICAgIHJpZ2h0OiAnNSUnLFxyXG4gICAgICBwYWRkaW5nOiAzMixcclxuICAgICAgYm9yZGVyVG9wTGVmdFJhZGl1czogNTAsXHJcbiAgICB9LFxyXG4gICAgY291bnRyeVRleHQ6IHtcclxuICAgICAgbWFyZ2luVG9wOiA2LFxyXG4gICAgfSxcclxuICAgIGVtYWlsVGV4dDoge1xyXG4gICAgICBtYXJnaW5Ub3A6IDYsXHJcbiAgICB9LFxyXG4gICAgcGhvbmVOdW1iZXJUZXh0OiB7XHJcbiAgICAgIG1hcmdpblRvcDogNixcclxuICAgIH0sXHJcbiAgICBncmF5QmFyT25lOiB7XHJcbiAgICAgIGhlaWdodDogJzI1JScsXHJcbiAgICAgIHdpZHRoOiAnMnB4JyxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2EwYWVjMCcsXHJcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICBib3R0b206ICczJScsXHJcbiAgICAgIGxlZnQ6ICcxMCUnLFxyXG4gICAgfSxcclxuICAgIGdyYXlCYXJUd286IHtcclxuICAgICAgaGVpZ2h0OiAnMnB4JyxcclxuICAgICAgd2lkdGg6ICcyMCUnLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjYTBhZWMwJyxcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgIGJvdHRvbTogJzUlJyxcclxuICAgICAgbGVmdDogJzUlJyxcclxuICAgIH0sXHJcbiAgICAvLyBFTkQgU1RBUlQgSE9NRVBBR0UgU0VDVElPTlxyXG4gICAgLy8gU1RBUlQgT1ZFUlZJRVcgU0VDVElPTlxyXG4gICAgb3ZlcnZpZXdQYWdlOiB7XHJcbiAgICAgIGZvbnRGYW1pbHk6ICdDb21mb3J0YWEnLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZjhmOWZiJyxcclxuICAgICAgcGFkZGluZ1RvcDogMzUsXHJcbiAgICAgIHBhZGRpbmdCb3R0b206IDM1LFxyXG4gICAgfSxcclxuICAgIG92ZXJ2aWV3SGVhZGluZzoge1xyXG4gICAgICBmb250U2l6ZTogMjIsXHJcbiAgICAgIGNvbG9yOiAnIzBhMTIzMCcsXHJcbiAgICAgIG1hcmdpbkxlZnQ6IDI4LFxyXG4gICAgfSxcclxuICAgIG92ZXJ2aWV3U3VidGl0bGU6IHtcclxuICAgICAgZm9udFNpemU6IDE0LFxyXG4gICAgICBjb2xvcjogJyNhMGFlYzAnLFxyXG4gICAgfSxcclxuICAgIG92ZXJ2aWV3SW1hZ2U6IHtcclxuICAgICAgaGVpZ2h0OiAnMjBweCcsXHJcbiAgICAgIHdpZHRoOiAnMjBweCcsXHJcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICB0b3A6IDM3LFxyXG4gICAgICBsZWZ0OiAzMCxcclxuICAgIH0sXHJcbiAgICBvdmVydmlld1NlY3Rpb246IHtcclxuICAgICAgLy8gcGFkZGluZzogJzUlJyxcclxuICAgICAgLy8gcGFkZGluZ1RvcDogJzUlJyxcclxuICAgICAgcGFkZGluZ0JvdHRvbTogJzUlJyxcclxuICAgICAgcGFkZGluZ0xlZnQ6ICc1JScsXHJcbiAgICAgIHBhZGRpbmdSaWdodDogJzUlJyxcclxuICAgIH0sXHJcbiAgICBzZWN0aW9uQ29udGFpbmVyT25lOiB7XHJcbiAgICAgIG1hcmdpblRvcDogMzAsXHJcbiAgICB9LFxyXG4gICAgc2VjdGlvbkhlYWRpbmdPbmU6IHtcclxuICAgICAgY29sb3I6ICcjMGExMjMwJyxcclxuICAgICAgZm9udFNpemU6IDE2LFxyXG4gICAgfSxcclxuICAgIHNlY3Rpb25UZXh0OiB7XHJcbiAgICAgIGNvbG9yOiAnIzBhMTIzMCcsXHJcbiAgICAgIGZvbnRTaXplOiAxMixcclxuICAgICAgcGFkZGluZ1RvcDogOCxcclxuICAgICAgcGFkZGluZ1JpZ2h0OiA1MCxcclxuICAgIH0sXHJcbiAgICBzZWN0aW9uQ29udGFpbmVyVHdvOiB7XHJcbiAgICAgIHBhZGRpbmdUb3A6IDMwLFxyXG4gICAgfSxcclxuICAgIHNlY3Rpb25IZWFkaW5nVHdvOiB7XHJcbiAgICAgIGNvbG9yOiAnIzBhMTIzMCcsXHJcbiAgICAgIGZvbnRTaXplOiAxNixcclxuICAgIH0sXHJcbiAgICBzZWN0aW9uQ29udGFpbmVyVGhyZWU6IHtcclxuICAgICAgcGFkZGluZ1RvcDogMzYsXHJcbiAgICAgIHBhZGRpbmdCb3R0b206IDI2LFxyXG4gICAgfSxcclxuICAgIHNlY3Rpb25IZWFkaW5nVGhyZWU6IHtcclxuICAgICAgY29sb3I6ICcjMGExMjMwJyxcclxuICAgICAgZm9udFNpemU6IDE2LFxyXG4gICAgfSxcclxuICAgIC8vIEVORCBPVkVSVklFVyBTRUNUSU9OXHJcbiAgICAvLyBTVEFSVCBUQUJMRSBPRiBDT05URU5UUyBTRUNUSU9OXHJcbiAgICBjb250ZW50c1BhZ2U6IHtcclxuICAgICAgZm9udEZhbWlseTogJ0NvbWZvcnRhYScsXHJcbiAgICB9LFxyXG4gICAgY29udGVudHNMZWZ0QmFyOiB7XHJcbiAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgICB3aWR0aDogJzQwJScsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyM2QzYzRkYnLFxyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgYWxpZ25JdGVtczogJ2Jhc2VsaW5lJyxcclxuICAgICAgY29sb3I6ICcjZjhmOWZiJyxcclxuICAgICAgcGFkZGluZ0xlZnQ6IDM1LFxyXG4gICAgICBmb250U2l6ZTogMjAsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IDQsXHJcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgfSxcclxuICAgIGNvbnRlbnRzQmFyT25lOiB7XHJcbiAgICAgIHdpZHRoOiAyMDAsXHJcbiAgICAgIGhlaWdodDogMixcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2EwYWVjMCcsXHJcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICB0b3A6ICczNyUnLFxyXG4gICAgICBsZWZ0OiAnMTAwJScsXHJcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScsXHJcbiAgICB9LFxyXG4gICAgY29udGVudHNCYXJUd286IHtcclxuICAgICAgd2lkdGg6IDIwMCxcclxuICAgICAgaGVpZ2h0OiAyLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjYTBhZWMwJyxcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgIHRvcDogJzQ2LjUlJyxcclxuICAgICAgbGVmdDogJzEwMCUnLFxyXG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknLFxyXG4gICAgfSxcclxuICAgIGNvbnRlbnRzQmFyVGhyZWU6IHtcclxuICAgICAgd2lkdGg6IDIwMCxcclxuICAgICAgaGVpZ2h0OiAyLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjYTBhZWMwJyxcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgIHRvcDogJzU2JScsXHJcbiAgICAgIGxlZnQ6ICcxMDAlJyxcclxuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpJyxcclxuICAgIH0sXHJcbiAgICBjb250ZW50c0JhckZvdXI6IHtcclxuICAgICAgd2lkdGg6IDIwMCxcclxuICAgICAgaGVpZ2h0OiAyLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjYTBhZWMwJyxcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgIHRvcDogJzY1LjUlJyxcclxuICAgICAgbGVmdDogJzEwMCUnLFxyXG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknLFxyXG4gICAgfSxcclxuICAgIGNvbnRlbnRzQmFyRml2ZToge1xyXG4gICAgICB3aWR0aDogMjAwLFxyXG4gICAgICBoZWlnaHQ6IDIsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNhMGFlYzAnLFxyXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgdG9wOiAnNzQuNzUlJyxcclxuICAgICAgbGVmdDogJzEwMCUnLFxyXG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknLFxyXG4gICAgfSxcclxuICAgIGNvbnRlbnRzUmlnaHRCYXI6IHtcclxuICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgIHdpZHRoOiAnNjAlJyxcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgIHJpZ2h0OiAnMCcsXHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgIGZvbnRTaXplOiAxMixcclxuICAgICAgY29sb3I6ICcjMGExMjMwJyxcclxuICAgICAgLy8gcGFkZGluZ0hvcml6b250YWw6IDY0LFxyXG4gICAgICBwYWRkaW5nUmlnaHQ6IDgwLFxyXG4gICAgICBwYWRkaW5nTGVmdDogMzIsXHJcbiAgICB9LFxyXG4gICAgY29udGVudHNSaWdodFRleHRPbmU6IHtcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgIHRvcDogJzI2Ljc1JScsXHJcbiAgICB9LFxyXG4gICAgY29udGVudHNSaWdodFRleHRUd286IHtcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgIHRvcDogJzM2JScsXHJcbiAgICB9LFxyXG4gICAgY29udGVudHNSaWdodFRleHRUaHJlZToge1xyXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgdG9wOiAnNDUuNSUnLFxyXG4gICAgfSxcclxuICAgIGNvbnRlbnRzUmlnaHRUZXh0Rm91cjoge1xyXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgdG9wOiAnNTUlJyxcclxuICAgIH0sXHJcbiAgICBjb250ZW50c1JpZ2h0VGV4dEZpdmU6IHtcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgIHRvcDogJzY0LjI1JScsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuICAvLyAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgLy8gICAgIGlkZWFOYW1lLFxyXG4gIC8vICAgICBpZGVhRGVzYyxcclxuICAvLyAgICAgaWRlYUNvdW50cnksXHJcbiAgLy8gICAgIHN0YXJ0dXBGaWVsZCxcclxuICAvLyAgICAgc3RhcnR1cEVtYWlsLFxyXG4gIC8vICAgICBzdGFydHVwUGhvbmUsXHJcbiAgLy8gICAgIGltYWdlTmFtZUV4aXN0cyxcclxuICAvLyAgICAgbWFya2V0UHJvYmxlbVNlY3Rpb24sXHJcbiAgLy8gICAgIG1hcmtldFNvbHV0aW9uU2VjdGlvbixcclxuICAvLyAgICAgZm91bmRlcnNTZWN0aW9uLFxyXG4gIC8vICAgICBwcm9kdWN0T3ZlcnZpZXdTZWN0aW9uLFxyXG4gIC8vICAgICBwcm9kdWN0UHJvbW90aW9uU2VjdGlvbixcclxuICAvLyAgICAgcHJvZHVjdEJlbmVmaXRzU2VjdGlvbixcclxuICAvLyAgICAgbWFya2V0T3ZlcnZpZXdTZWN0aW9uLFxyXG4gIC8vICAgICBjb21wZXRpdG9yc1NlY3Rpb24sXHJcbiAgLy8gICAgIHRhcmdldEN1c3RvbWVyc1NlY3Rpb24sXHJcbiAgLy8gICAgIGNvbXBldGl0aW9uRGlzdGluZ3Vpc2hTZWN0aW9uLFxyXG4gIC8vICAgICBzdGFydHVwQ29zdHNTZWN0aW9uLFxyXG4gIC8vICAgICBydW5uaW5nQ29zdHNTZWN0aW9uLFxyXG4gIC8vICAgICBmaW5hbmNpbmdTZWN0aW9uLFxyXG4gIC8vICAgICBidXNpbmVzc01vZGVsT3ZlcnZpZXdTZWN0aW9uLFxyXG4gIC8vICAgICBidXNpbmVzc0dyb3dTZWN0aW9uLFxyXG4gIC8vICAgICB3aHlTdWNjZXNzU2VjdGlvbixcclxuICAvLyAgIH07XHJcblxyXG4gIGNvbnN0IGltYWdlID0gZGF0YS5hdmF0YXJFeGlzdHMgIT0gbnVsbCA/IGRhdGEuYXZhdGFyRXhpc3RzIDogYC9wbmcvJHtkYXRhLmltYWdlTmFtZUV4aXN0c30ucG5nYDtcclxuICBjb25zb2xlLmxvZygnZGF0YSAtICcsIGRhdGEpO1xyXG4gIGNvbnNvbGUubG9nKCdkYXRhTWFya2V0UHJvYmxlbSAtICcsIGRhdGEubWFya2V0UHJvYmxlbVNlY3Rpb24pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPERvY3VtZW50PlxyXG4gICAgICA8UGFnZSBzaXplPVwiQTRcIiBzdHlsZT17c3R5bGVzLmhvbWVQYWdlfT5cclxuICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLmhvbWVQYWdlVGl0bGVTZWN0aW9ufT5cclxuICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuaG9tZVBhZ2VUaXRsZX0+U3RhcnR1cCBpZGVhIHBsYW48L1RleHQ+XHJcbiAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLmhvbWVQYWdlRGVzY30+e2RhdGEuaWRlYU5hbWV9PC9UZXh0PlxyXG4gICAgICAgICAgPEltYWdlIHNyYz17aW1hZ2V9IHN0eWxlPXtzdHlsZXMuaW1hZ2V9IGhlaWdodD1cIjI1MHB4XCIgd2lkdGg9XCIyNTBweFwiIC8+XHJcbiAgICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLmxlZnREZXNjQmxvY2t9PlxyXG4gICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLmxlZnREZXNjQmxvY2tUZXh0fT57ZGF0YS5pZGVhRGVzY308L1RleHQ+XHJcbiAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMucmlnaHRCYXJ9PjwvVmlldz5cclxuICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLnJpZ2h0QmFyQ29udGFjdH0+XHJcbiAgICAgICAgICA8VGV4dD57ZGF0YS5zdGFydHVwRmllbGR9PC9UZXh0PlxyXG4gICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5jb3VudHJ5VGV4dH0+e2RhdGEuaWRlYUNvdW50cnl9PC9UZXh0PlxyXG4gICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5lbWFpbFRleHR9PntkYXRhLnN0YXJ0dXBFbWFpbH08L1RleHQ+XHJcbiAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnBob25lTnVtYmVyVGV4dH0+e2RhdGEuc3RhcnR1cFBob25lfTwvVGV4dD5cclxuICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5ncmF5QmFyT25lfT48L1ZpZXc+XHJcbiAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5ncmF5QmFyVHdvfT48L1ZpZXc+XHJcbiAgICAgIDwvUGFnZT5cclxuICAgICAgey8qIFRBQkxFIE9GIENPTlRFTlRTICovfVxyXG4gICAgICA8UGFnZSBzdHlsZT17c3R5bGVzLmNvbnRlbnRzUGFnZX0+XHJcbiAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5yaWdodEJhcn0gZml4ZWQ+PC9WaWV3PlxyXG4gICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuY29udGVudHNMZWZ0QmFyfT5cclxuICAgICAgICAgIDxUZXh0PlN0YXJ0dXAgb3ZlcnZpZXc8L1RleHQ+XHJcbiAgICAgICAgICA8VGV4dD5Qcm9kdWN0PC9UZXh0PlxyXG4gICAgICAgICAgPFRleHQ+TWFya2V0IGFuYWx5c2lzPC9UZXh0PlxyXG4gICAgICAgICAgPFRleHQ+RmluYW5jZXM8L1RleHQ+XHJcbiAgICAgICAgICA8VGV4dD5CdXNpbmVzcyBtb2RlbDwvVGV4dD5cclxuICAgICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuY29udGVudHNCYXJPbmV9PjwvVmlldz5cclxuICAgICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuY29udGVudHNCYXJUd299PjwvVmlldz5cclxuICAgICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuY29udGVudHNCYXJUaHJlZX0+PC9WaWV3PlxyXG4gICAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5jb250ZW50c0JhckZvdXJ9PjwvVmlldz5cclxuICAgICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuY29udGVudHNCYXJGaXZlfT48L1ZpZXc+XHJcbiAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuY29udGVudHNSaWdodEJhcn0+XHJcbiAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLmNvbnRlbnRzUmlnaHRUZXh0T25lfT4wMS4gVGhpcyBzZWN0aW9uIHdpbGwgaGVscCB5b3UgYmV0dGVyIHVuZGVyc3RhbmQgdGhlIHN0YXJ0dXAgdmlzaW9uPC9UZXh0PlxyXG4gICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5jb250ZW50c1JpZ2h0VGV4dFR3b30+MDIuIFRoaXMgc2VjdGlvbiB3aWxsIGludHJvZHVjZSB5b3UgdG8gdGhlIHZpc2lvbiBvZiB0aGUgcHJvZHVjdDwvVGV4dD5cclxuICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuY29udGVudHNSaWdodFRleHRUaHJlZX0+MDMuIFRoaXMgc2VjdGlvbiB3aWxsIHJldmVhbCBhbGwgdGhlIGNhcmRzIG9mIHRoZSBtYXJrZXQ8L1RleHQ+XHJcbiAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLmNvbnRlbnRzUmlnaHRUZXh0Rm91cn0+MDQuIERpc2NvdmVyIHRoZSBjb3N0cyBvZiBpbXBsZW1lbnRpbmcgb3VyIGlkZWE8L1RleHQ+XHJcbiAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLmNvbnRlbnRzUmlnaHRUZXh0Rml2ZX0+MDUuIEluIHRoZSBmaW5hbCBzZWN0aW9uLCB5b3Ugd2lsbCBkaXNjb3ZlciB0aGUgc3RhcnR1cCdzIGJ1c2luZXNzIG1vZGVsPC9UZXh0PlxyXG4gICAgICAgIDwvVmlldz5cclxuICAgICAgPC9QYWdlPlxyXG4gICAgICB7LyogT1ZFUlZJRVcgU0VDVElPTiAqL31cclxuICAgICAgPFBhZ2Ugc3R5bGU9e3N0eWxlcy5vdmVydmlld1BhZ2V9PlxyXG4gICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMucmlnaHRCYXJ9IGZpeGVkPjwvVmlldz5cclxuICAgICAgICA8SW1hZ2Ugc3R5bGU9e3N0eWxlcy5vdmVydmlld0ltYWdlfSBzcmM9XCIvcGRmL2lkZWEucG5nXCIgaGVpZ2h0PXsyMH0gd2lkdGg9ezIwfSAvPlxyXG4gICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMub3ZlcnZpZXdTZWN0aW9ufT5cclxuICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMub3ZlcnZpZXdIZWFkaW5nfT5TdGFydHVwIG92ZXJ2aWV3PC9UZXh0PlxyXG4gICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5vdmVydmlld1N1YnRpdGxlfT5UaGlzIHNlY3Rpb24gd2lsbCBoZWxwIHlvdSBiZXR0ZXIgdW5kZXJzdGFuZCB0aGUgc3RhcnR1cCB2aXNpb248L1RleHQ+XHJcbiAgICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLnNlY3Rpb25Db250YWluZXJPbmV9PlxyXG4gICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnNlY3Rpb25IZWFkaW5nT25lfT5NYXJrZXQgcHJvYmxlbSB0aGF0IG5lZWRzIHRvIGJlIHNvbHZlZC48L1RleHQ+XHJcbiAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuc2VjdGlvblRleHR9PntkYXRhLm1hcmtldFByb2JsZW1TZWN0aW9ufTwvVGV4dD5cclxuICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuc2VjdGlvbkNvbnRhaW5lclR3b30+XHJcbiAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuc2VjdGlvbkhlYWRpbmdUd299PlNvbHV0aW9uIHRoYXQgc29sdmVzIHRoaXMgbWFya2V0IHByb2JsZW0uPC9UZXh0PlxyXG4gICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnNlY3Rpb25UZXh0fT57ZGF0YS5tYXJrZXRTb2x1dGlvblNlY3Rpb259PC9UZXh0PlxyXG4gICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5zZWN0aW9uQ29udGFpbmVyVGhyZWV9PlxyXG4gICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnNlY3Rpb25IZWFkaW5nVGhyZWV9PldobyBpcyBiZWhpbmQgdGhlIGZvdW5kYXRpb24gb2YgdGhlIGZ1dHVyZSBjb21wYW55PzwvVGV4dD5cclxuICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5zZWN0aW9uVGV4dH0+e2RhdGEuZm91bmRlcnNTZWN0aW9ufTwvVGV4dD5cclxuICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICA8L1ZpZXc+XHJcbiAgICAgIDwvUGFnZT5cclxuICAgICAgey8qIFBST0RVQ1QgU0VDVElPTiAqL31cclxuICAgICAgPFBhZ2Ugc3R5bGU9e3N0eWxlcy5vdmVydmlld1BhZ2V9PlxyXG4gICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMucmlnaHRCYXJ9IGZpeGVkPjwvVmlldz5cclxuICAgICAgICA8SW1hZ2Ugc3R5bGU9e3N0eWxlcy5vdmVydmlld0ltYWdlfSBzcmM9XCIvcGRmL2JsdWVwcmludC5wbmdcIiBoZWlnaHQ9ezIwfSB3aWR0aD17MjB9IC8+XHJcbiAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5vdmVydmlld1NlY3Rpb259PlxyXG4gICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5vdmVydmlld0hlYWRpbmd9PlByb2R1Y3Q8L1RleHQ+XHJcbiAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLm92ZXJ2aWV3U3VidGl0bGV9PlRoaXMgc2VjdGlvbiB3aWxsIGludHJvZHVjZSB5b3UgdG8gdGhlIHZpc2lvbiBvZiB0aGUgcHJvZHVjdDwvVGV4dD5cclxuICAgICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuc2VjdGlvbkNvbnRhaW5lck9uZX0+XHJcbiAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuc2VjdGlvbkhlYWRpbmdPbmV9PkRldGFpbGVkIGRlc2NyaXB0aW9uIG9mIHRoZSBwcm9kdWN0IHZpc2lvbi48L1RleHQ+XHJcbiAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuc2VjdGlvblRleHR9PntkYXRhLnByb2R1Y3RPdmVydmlld1NlY3Rpb259PC9UZXh0PlxyXG4gICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5zZWN0aW9uQ29udGFpbmVyVHdvfT5cclxuICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5zZWN0aW9uSGVhZGluZ1R3b30+SG93IHdpbGwgb3RoZXIgcGVvcGxlIGZpbmQgb3V0IGFib3V0IHRoZSBwcm9kdWN0PzwvVGV4dD5cclxuICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5zZWN0aW9uVGV4dH0+e2RhdGEucHJvZHVjdFByb21vdGlvblNlY3Rpb259PC9UZXh0PlxyXG4gICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5zZWN0aW9uQ29udGFpbmVyVGhyZWV9PlxyXG4gICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnNlY3Rpb25IZWFkaW5nVGhyZWV9PldoYXQgYmVuZWZpdHMgd2lsbCB0aGlzIHByb2R1Y3QgYnJpbmdzIHRvIGN1c3RvbWVycz88L1RleHQ+XHJcbiAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuc2VjdGlvblRleHR9PntkYXRhLnByb2R1Y3RCZW5lZml0c1NlY3Rpb259PC9UZXh0PlxyXG4gICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgIDwvVmlldz5cclxuICAgICAgPC9QYWdlPlxyXG4gICAgICB7LyogTUFSS0VUIFNFQ1RJT04gKi99XHJcbiAgICAgIDxQYWdlIHN0eWxlPXtzdHlsZXMub3ZlcnZpZXdQYWdlfT5cclxuICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLnJpZ2h0QmFyfSBmaXhlZD48L1ZpZXc+XHJcbiAgICAgICAgPEltYWdlIHN0eWxlPXtzdHlsZXMub3ZlcnZpZXdJbWFnZX0gc3JjPVwiL3BkZi91bmljb3JuLnBuZ1wiIGhlaWdodD17MjB9IHdpZHRoPXsyMH0gLz5cclxuICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLm92ZXJ2aWV3U2VjdGlvbn0+XHJcbiAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLm92ZXJ2aWV3SGVhZGluZ30+TWFya2V0IGFuYWx5c2lzPC9UZXh0PlxyXG4gICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5vdmVydmlld1N1YnRpdGxlfT5UaGlzIHNlY3Rpb24gd2lsbCByZXZlYWwgYWxsIHRoZSBjYXJkcyBvZiB0aGUgbWFya2V0PC9UZXh0PlxyXG4gICAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5zZWN0aW9uQ29udGFpbmVyT25lfT5cclxuICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5zZWN0aW9uSGVhZGluZ09uZX0+R2VuZXJhbCBpbnNpZ2h0IGludG8gdGhlIG1hcmtldC48L1RleHQ+XHJcbiAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuc2VjdGlvblRleHR9PntkYXRhLm1hcmtldE92ZXJ2aWV3U2VjdGlvbn08L1RleHQ+XHJcbiAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLnNlY3Rpb25Db250YWluZXJUd299PlxyXG4gICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnNlY3Rpb25IZWFkaW5nVHdvfT5XaG8gYXJlIHRoZSBtYWpvciBjb21wZXRpdG9ycyBpbiB0aGUgbWFya2V0PzwvVGV4dD5cclxuICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5zZWN0aW9uVGV4dH0+e2RhdGEuY29tcGV0aXRvcnNTZWN0aW9ufTwvVGV4dD5cclxuICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuc2VjdGlvbkNvbnRhaW5lclR3b30+XHJcbiAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuc2VjdGlvbkhlYWRpbmdUd299PldoYXQgbWFrZXMgdGhpcyBzdGFydHVwIHN0YW5kIG91dCBmcm9tIHRoZSBjb21wZXRpdGlvbj88L1RleHQ+XHJcbiAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuc2VjdGlvblRleHR9PntkYXRhLmNvbXBldGl0aW9uRGlzdGluZ3Vpc2hTZWN0aW9ufTwvVGV4dD5cclxuICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuc2VjdGlvbkNvbnRhaW5lclRocmVlfT5cclxuICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5zZWN0aW9uSGVhZGluZ1RocmVlfT5UYXJnZXQgZ3JvdXAgb2Ygc3RhcnR1cCBjdXN0b21lcnMuPC9UZXh0PlxyXG4gICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnNlY3Rpb25UZXh0fT57ZGF0YS50YXJnZXRDdXN0b21lcnNTZWN0aW9ufTwvVGV4dD5cclxuICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICA8L1ZpZXc+XHJcbiAgICAgIDwvUGFnZT5cclxuICAgICAgey8qIEZJTkFOQ0VTIFNFQ1RJT04gKi99XHJcbiAgICAgIDxQYWdlIHN0eWxlPXtzdHlsZXMub3ZlcnZpZXdQYWdlfT5cclxuICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLnJpZ2h0QmFyfSBmaXhlZD48L1ZpZXc+XHJcbiAgICAgICAgPEltYWdlIHN0eWxlPXtzdHlsZXMub3ZlcnZpZXdJbWFnZX0gc3JjPVwiL3BkZi9idWRnZXQucG5nXCIgaGVpZ2h0PXsyMH0gd2lkdGg9ezIwfSAvPlxyXG4gICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMub3ZlcnZpZXdTZWN0aW9ufT5cclxuICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMub3ZlcnZpZXdIZWFkaW5nfT5GaW5hbmNlczwvVGV4dD5cclxuICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMub3ZlcnZpZXdTdWJ0aXRsZX0+RGlzY292ZXIgdGhlIGNvc3RzIG9mIGltcGxlbWVudGluZyBvdXIgaWRlYTwvVGV4dD5cclxuICAgICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuc2VjdGlvbkNvbnRhaW5lck9uZX0+XHJcbiAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuc2VjdGlvbkhlYWRpbmdPbmV9PkhvdyBtdWNoIG1vbmV5IHdpbGwgaXQgdGFrZSB0byBsYXVuY2ggdGhlIHN0YXJ0dXA/PC9UZXh0PlxyXG4gICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnNlY3Rpb25UZXh0fT57ZGF0YS5zdGFydHVwQ29zdHNTZWN0aW9ufTwvVGV4dD5cclxuICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuc2VjdGlvbkNvbnRhaW5lclR3b30+XHJcbiAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuc2VjdGlvbkhlYWRpbmdUd299PkFwcHJveGltYXRlIHJ1bm5pbmcgY29zdHMsIGJhc2VkIG9uIHN0YXJ0dXAgZ3Jvd3RoLjwvVGV4dD5cclxuICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5zZWN0aW9uVGV4dH0+e2RhdGEucnVubmluZ0Nvc3RzU2VjdGlvbn08L1RleHQ+XHJcbiAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLnNlY3Rpb25Db250YWluZXJUaHJlZX0+XHJcbiAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuc2VjdGlvbkhlYWRpbmdUaHJlZX0+SG93IGRvZXMgdGhlIGlkZWEgd2lsbCBiZSBmdW5kPzwvVGV4dD5cclxuICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5zZWN0aW9uVGV4dH0+e2RhdGEuZmluYW5jaW5nU2VjdGlvbn08L1RleHQ+XHJcbiAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgPC9WaWV3PlxyXG4gICAgICA8L1BhZ2U+XHJcbiAgICAgIHsvKiBCVVNJTkVTUyBNT0RFTCBTRUNUSU9OICovfVxyXG4gICAgICA8UGFnZSBzdHlsZT17c3R5bGVzLm92ZXJ2aWV3UGFnZX0+XHJcbiAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5yaWdodEJhcn0gZml4ZWQ+PC9WaWV3PlxyXG4gICAgICAgIDxJbWFnZSBzdHlsZT17c3R5bGVzLm92ZXJ2aWV3SW1hZ2V9IHNyYz1cIi9wZGYvc3RhcnR1cC5wbmdcIiBoZWlnaHQ9ezIwfSB3aWR0aD17MjB9IC8+XHJcbiAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5vdmVydmlld1NlY3Rpb259PlxyXG4gICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5vdmVydmlld0hlYWRpbmd9PkJ1c2luZXNzIG1vZGVsPC9UZXh0PlxyXG4gICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5vdmVydmlld1N1YnRpdGxlfT5JbiB0aGUgZmluYWwgc2VjdGlvbiwgeW91IHdpbGwgZGlzY292ZXIgdGhlIHN0YXJ0dXAncyBidXNpbmVzcyBtb2RlbDwvVGV4dD5cclxuICAgICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuc2VjdGlvbkNvbnRhaW5lck9uZX0+XHJcbiAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuc2VjdGlvbkhlYWRpbmdPbmV9PlN0YXJ0dXAgYnVzaW5lc3MgbW9kZWwgYW5kIGxlZ2FsIHN0cnVjdHVyZSBvdmVydmlldy48L1RleHQ+XHJcbiAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuc2VjdGlvblRleHR9PntkYXRhLmJ1c2luZXNzTW9kZWxPdmVydmlld1NlY3Rpb259PC9UZXh0PlxyXG4gICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5zZWN0aW9uQ29udGFpbmVyVHdvfT5cclxuICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5zZWN0aW9uSGVhZGluZ1R3b30+UHJlZGljdGlvbnMgZm9yIHN0YXJ0dXAgZ3Jvd3RoLjwvVGV4dD5cclxuICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5zZWN0aW9uVGV4dH0+e2RhdGEuYnVzaW5lc3NHcm93U2VjdGlvbn08L1RleHQ+XHJcbiAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLnNlY3Rpb25Db250YWluZXJUaHJlZX0+XHJcbiAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuc2VjdGlvbkhlYWRpbmdUaHJlZX0+V2h5IHdpbGwgdGhpcyBwYXJ0aWN1bGFyIHN0YXJ0dXAgc3VjY2VlZD88L1RleHQ+XHJcbiAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuc2VjdGlvblRleHR9PntkYXRhLndoeVN1Y2Nlc3NTZWN0aW9ufTwvVGV4dD5cclxuICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICA8L1ZpZXc+XHJcbiAgICAgIDwvUGFnZT5cclxuICAgIDwvRG9jdW1lbnQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15RG9jdW1lbnQxO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBkYiB9IGZyb20gJy4uLy4uLy4uL2xpYi9maXJlYmFzZSc7XHJcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tICcuLi8uLi8uLi9saWIvbmV3QXV0aCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IGdzYXAsIHsgUG93ZXI0LCBMaW5lYXIgfSBmcm9tICdnc2FwJztcclxuaW1wb3J0IHsgc2F2ZUFzIH0gZnJvbSAnZmlsZS1zYXZlcic7XHJcblxyXG5pbXBvcnQgeyBGb250LCBwZGYsIFBhZ2UsIFRleHQsIFZpZXcsIEltYWdlLCBEb2N1bWVudCwgU3R5bGVTaGVldCwgUERGVmlld2VyLCBQREZEb3dubG9hZExpbmsgfSBmcm9tICdAcmVhY3QtcGRmL3JlbmRlcmVyJztcclxuaW1wb3J0IFRpcHB5TW9uc3RlciBmcm9tICcuLi9UaXBweSc7XHJcbmltcG9ydCBNeURvY3VtZW50MSBmcm9tICcuL1BERkRvY3VtZW50JztcclxuaW1wb3J0IEFuaW1hdGVkQmFja2dyb3VuZCBmcm9tICcuL0FuaW1hdGVkQmFja2dyb3VuZCc7XHJcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XHJcbmltcG9ydCBFeGl0Q29tcG9uZW50IGZyb20gJy4vRXhpdENvbXBvbmVudCc7XHJcblxyXG5jb25zdCBTdGFydHVwU3VjY2VzcyA9ICh7IG1hbmFnZXJQYWdlIH0pID0+IHtcclxuICBjb25zdCBbcHJvamVjdElkLCBzZXRQcm9qZWN0SWRdID0gdXNlU3RhdGUoKTtcclxuICAvLyBTVEFSVEVSXHJcbiAgY29uc3QgW2lkZWFOYW1lLCBzZXRJZGVhTmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2lkZWFEZXNjLCBzZXRJZGVhRGVzY10gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2lkZWFDb3VudHJ5LCBzZXRJZGVhQ291bnRyeV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3N0YXJ0dXBGaWVsZCwgc2V0U3RhcnR1cEZpZWxkXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbc3RhcnR1cEVtYWlsLCBzZXRTdGFydHVwRW1haWxdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtzdGFydHVwUGhvbmUsIHNldFN0YXJ0dXBQaG9uZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgLy8gSU1BR0VcclxuICBjb25zdCBbaW1hZ2VOYW1lRXhpc3RzLCBzZXRJbWFnZU5hbWVFeGlzdHNdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFthdmF0YXJFeGlzdHMsIHNldEF2YXRhckV4aXN0c10gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIC8vIE9WRVJWSUVXXHJcbiAgY29uc3QgW21hcmtldFByb2JsZW1TZWN0aW9uLCBzZXRNYXJrZXRQcm9ibGVtU2VjdGlvbl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW21hcmtldFNvbHV0aW9uU2VjdGlvbiwgc2V0TWFya2V0U29sdXRpb25TZWN0aW9uXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZm91bmRlcnNTZWN0aW9uLCBzZXRGb3VuZGVyc1NlY3Rpb25dID0gdXNlU3RhdGUoJycpO1xyXG4gIC8vIFBST0RVQ1RcclxuICBjb25zdCBbcHJvZHVjdE92ZXJ2aWV3U2VjdGlvbiwgc2V0UHJvZHVjdE92ZXJ2aWV3U2VjdGlvbl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3Byb2R1Y3RQcm9tb3Rpb25TZWN0aW9uLCBzZXRQcm9kdWN0UHJvbW90aW9uU2VjdGlvbl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3Byb2R1Y3RCZW5lZml0c1NlY3Rpb24sIHNldFByb2R1Y3RCZW5lZml0c1NlY3Rpb25dID0gdXNlU3RhdGUoJycpO1xyXG4gIC8vIE1BUktFVFxyXG4gIGNvbnN0IFttYXJrZXRPdmVydmlld1NlY3Rpb24sIHNldE1hcmtldE92ZXJ2aWV3U2VjdGlvbl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2NvbXBldGl0b3JzU2VjdGlvbiwgc2V0Q29tcGV0aXRvcnNTZWN0aW9uXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbY29tcGV0aXRpb25EaXN0aW5ndWlzaFNlY3Rpb24sIHNldENvbXBldGl0aW9uRGlzdGluZ3Vpc2hTZWN0aW9uXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbdGFyZ2V0Q3VzdG9tZXJzU2VjdGlvbiwgc2V0VGFyZ2V0Q3VzdG9tZXJzU2VjdGlvbl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgLy8gRklOQU5DRVNcclxuICBjb25zdCBbc3RhcnR1cENvc3RzU2VjdGlvbiwgc2V0U3RhcnR1cENvc3RzU2VjdGlvbl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3J1bm5pbmdDb3N0c1NlY3Rpb24sIHNldFJ1bm5pbmdDb3N0c1NlY3Rpb25dID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtmaW5hbmNpbmdTZWN0aW9uLCBzZXRGaW5hbmNpbmdTZWN0aW9uXSA9IHVzZVN0YXRlKCcnKTtcclxuICAvLyBCVVNJTkVTUyBNT0RFTFxyXG4gIGNvbnN0IFtidXNpbmVzc01vZGVsT3ZlcnZpZXdTZWN0aW9uLCBzZXRCdXNpbmVzc01vZGVsT3ZlcnZpZXdTZWN0aW9uXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbYnVzaW5lc3NHcm93U2VjdGlvbiwgc2V0QnVzaW5lc3NHcm93U2VjdGlvbl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3doeVN1Y2Nlc3NTZWN0aW9uLCBzZXRXaHlTdWNjZXNzU2VjdGlvbl0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIGNvbnN0IHsgY3VycmVudFVzZXIgfSA9IHVzZUF1dGgoKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBjb250ZW50UmVmID0gdXNlUmVmKCk7XHJcblxyXG4gIC8vIERhdGEgZmV0Y2hcclxuICBjb25zdCBbbG9hZGluZ0hlbHBlciwgc2V0TG9hZGluZ0hlbHBlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2RvY3VtZW50SWQsIHNldERvY3VtZW50SWRdID0gdXNlU3RhdGUoJycpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB1c2VyVWlkID0gQ29va2llcy5nZXQoJ3VpZCcpO1xyXG4gICAgZ3NhcC5mcm9tVG8oY29udGVudFJlZi5jdXJyZW50LCB7IGF1dG9BbHBoYTogMCB9LCB7IGF1dG9BbHBoYTogMSwgZHVyYXRpb246IDEsIGVhc2U6IExpbmVhci5lYXNlSW4gfSk7XHJcbiAgICBpZiAodXNlclVpZCAmJiByb3V0ZXIucXVlcnkucHJvamVjdCkge1xyXG4gICAgICBjb25zdCBkYXRhID0gZGIuY29sbGVjdGlvbigncHJvamVjdHMnKS53aGVyZSgndWlkJywgJz09JywgdXNlclVpZCk7XHJcbiAgICAgIGRhdGFcclxuICAgICAgICAud2hlcmUoJ3Byb2plY3ROYW1lJywgJz09Jywgcm91dGVyLnF1ZXJ5LnByb2plY3QpXHJcbiAgICAgICAgLmdldCgpXHJcbiAgICAgICAgLnRoZW4oKHF1ZXJ5U25hcHNob3QpID0+IHtcclxuICAgICAgICAgIHF1ZXJ5U25hcHNob3QuZm9yRWFjaChhc3luYyAoZG9jMSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpbml0aWFsRGF0YSA9IGRvYzEuZGF0YSgpO1xyXG4gICAgICAgICAgICBzZXRQcm9qZWN0SWQoaW5pdGlhbERhdGEucHJvamVjdElkKTtcclxuICAgICAgICAgICAgLy8gU1RBUlRFUjtcclxuICAgICAgICAgICAgc2V0SWRlYU5hbWUoaW5pdGlhbERhdGEucHJvamVjdE5hbWUpO1xyXG4gICAgICAgICAgICBzZXRJZGVhRGVzYyhpbml0aWFsRGF0YS5wcm9qZWN0RGVzY3JpcHRpb24pO1xyXG4gICAgICAgICAgICBzZXRJZGVhQ291bnRyeShpbml0aWFsRGF0YS5wcm9qZWN0Q291bnRyeSk7XHJcbiAgICAgICAgICAgIHNldFN0YXJ0dXBGaWVsZChpbml0aWFsRGF0YS5wcm9qZWN0RmllbGQpO1xyXG4gICAgICAgICAgICBzZXRTdGFydHVwRW1haWwoaW5pdGlhbERhdGEucHJvamVjdEVtYWlsKTtcclxuICAgICAgICAgICAgc2V0U3RhcnR1cFBob25lKGluaXRpYWxEYXRhLnByb2plY3ROdW1iZXIpO1xyXG4gICAgICAgICAgICAvLyBJTUFHRVxyXG4gICAgICAgICAgICBzZXRJbWFnZU5hbWVFeGlzdHMoaW5pdGlhbERhdGEuaW1hZ2VOYW1lKTtcclxuICAgICAgICAgICAgc2V0QXZhdGFyRXhpc3RzKGluaXRpYWxEYXRhLmltYWdlRmlsZVVybCk7XHJcblxyXG4gICAgICAgICAgICBkYi5jb2xsZWN0aW9uKCdwcm9qZWN0cycpXHJcbiAgICAgICAgICAgICAgLmRvYyhpbml0aWFsRGF0YS5wcm9qZWN0SWQpXHJcbiAgICAgICAgICAgICAgLmNvbGxlY3Rpb24oJ3N0YXJ0dXBJZGVhJylcclxuICAgICAgICAgICAgICAuZG9jKHJvdXRlci5xdWVyeS5wcm9qZWN0KVxyXG4gICAgICAgICAgICAgIC5jb2xsZWN0aW9uKCdpbnB1dHMnKVxyXG4gICAgICAgICAgICAgIC5vblNuYXBzaG90KChzZXJ2ZXJVcGRhdGUpID0+IHtcclxuICAgICAgICAgICAgICAgIHNlcnZlclVwZGF0ZS5kb2NzLm1hcCgoZG9jKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRvYy5kYXRhKCkpO1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gZG9jLmRhdGEoKTtcclxuICAgICAgICAgICAgICAgICAgc2V0RG9jdW1lbnRJZChkb2MuaWQpO1xyXG4gICAgICAgICAgICAgICAgICAvLyBPVkVSVklFV1xyXG4gICAgICAgICAgICAgICAgICBzZXRNYXJrZXRQcm9ibGVtU2VjdGlvbihkYXRhLm1hcmtldFByb2JsZW1TZWN0aW9uRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgIHNldE1hcmtldFNvbHV0aW9uU2VjdGlvbihkYXRhLm1hcmtldFNvbHV0aW9uU2VjdGlvbkRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICBzZXRGb3VuZGVyc1NlY3Rpb24oZGF0YS5mb3VuZGVyc1NlY3Rpb25EYXRhKTtcclxuICAgICAgICAgICAgICAgICAgLy8gUFJPRFVDVFxyXG4gICAgICAgICAgICAgICAgICBzZXRQcm9kdWN0T3ZlcnZpZXdTZWN0aW9uKGRhdGEucHJvZHVjdE92ZXJ2aWV3U2VjdGlvbkRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICBzZXRQcm9kdWN0UHJvbW90aW9uU2VjdGlvbihkYXRhLnByb2R1Y3RQcm9tb3Rpb25TZWN0aW9uRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgIHNldFByb2R1Y3RCZW5lZml0c1NlY3Rpb24oZGF0YS5wcm9kdWN0QmVuZWZpdHNTZWN0aW9uRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgIC8vIE1BUktFVFxyXG4gICAgICAgICAgICAgICAgICBzZXRNYXJrZXRPdmVydmlld1NlY3Rpb24oZGF0YS5tYXJrZXRPdmVydmlld1NlY3Rpb25EYXRhKTtcclxuICAgICAgICAgICAgICAgICAgc2V0Q29tcGV0aXRvcnNTZWN0aW9uKGRhdGEuY29tcGV0aXRvcnNTZWN0aW9uRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgIHNldENvbXBldGl0aW9uRGlzdGluZ3Vpc2hTZWN0aW9uKGRhdGEuY29tcGV0aXRpb25EaXN0aW5ndWlzaFNlY3Rpb25EYXRhKTtcclxuICAgICAgICAgICAgICAgICAgc2V0VGFyZ2V0Q3VzdG9tZXJzU2VjdGlvbihkYXRhLnRhcmdldEN1c3RvbWVyc1NlY3Rpb25EYXRhKTtcclxuICAgICAgICAgICAgICAgICAgLy8gRklOQU5DRVNcclxuICAgICAgICAgICAgICAgICAgc2V0U3RhcnR1cENvc3RzU2VjdGlvbihkYXRhLnN0YXJ0dXBDb3N0c1NlY3Rpb25EYXRhKTtcclxuICAgICAgICAgICAgICAgICAgc2V0UnVubmluZ0Nvc3RzU2VjdGlvbihkYXRhLnJ1bm5pbmdDb3N0c1NlY3Rpb25EYXRhKTtcclxuICAgICAgICAgICAgICAgICAgc2V0RmluYW5jaW5nU2VjdGlvbihkYXRhLmZpbmFuY2luZ1NlY3Rpb25EYXRhKTtcclxuICAgICAgICAgICAgICAgICAgLy8gQlVTSU5FU1MgTU9ERUxcclxuICAgICAgICAgICAgICAgICAgc2V0QnVzaW5lc3NNb2RlbE92ZXJ2aWV3U2VjdGlvbihkYXRhLmJ1c2luZXNzTW9kZWxPdmVydmlld1NlY3Rpb25EYXRhKTtcclxuICAgICAgICAgICAgICAgICAgc2V0QnVzaW5lc3NHcm93U2VjdGlvbihkYXRhLmJ1c2luZXNzR3Jvd1NlY3Rpb25EYXRhKTtcclxuICAgICAgICAgICAgICAgICAgc2V0V2h5U3VjY2Vzc1NlY3Rpb24oZGF0YS53aHlTdWNjZXNzU2VjdGlvbkRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICBzZXRMb2FkaW5nSGVscGVyKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZygnTG9hZGluZyBmYWlsZWQnKTtcclxuICAgICAgc2V0TG9hZGluZ0hlbHBlcih0cnVlKTtcclxuICAgIH1cclxuICB9LCBbbG9hZGluZ0hlbHBlciwgcm91dGVyLnF1ZXJ5LnByb2plY3RdKTtcclxuXHJcbiAgY29uc3QgaW1hZ2UgPSBhdmF0YXJFeGlzdHMgIT0gJ2JsYW5rJyA/IGF2YXRhckV4aXN0cyA6IGltYWdlTmFtZUV4aXN0cztcclxuICBjb25zb2xlLmxvZyhpbWFnZSk7XHJcblxyXG4gIGNvbnN0IGRhdGEgPSB7XHJcbiAgICBpZGVhTmFtZSxcclxuICAgIGlkZWFEZXNjLFxyXG4gICAgaWRlYUNvdW50cnksXHJcbiAgICBzdGFydHVwRmllbGQsXHJcbiAgICBzdGFydHVwRW1haWwsXHJcbiAgICBzdGFydHVwUGhvbmUsXHJcbiAgICBpbWFnZU5hbWVFeGlzdHMsXHJcbiAgICBhdmF0YXJFeGlzdHMsXHJcbiAgICBtYXJrZXRQcm9ibGVtU2VjdGlvbixcclxuICAgIG1hcmtldFNvbHV0aW9uU2VjdGlvbixcclxuICAgIGZvdW5kZXJzU2VjdGlvbixcclxuICAgIHByb2R1Y3RPdmVydmlld1NlY3Rpb24sXHJcbiAgICBwcm9kdWN0UHJvbW90aW9uU2VjdGlvbixcclxuICAgIHByb2R1Y3RCZW5lZml0c1NlY3Rpb24sXHJcbiAgICBtYXJrZXRPdmVydmlld1NlY3Rpb24sXHJcbiAgICBjb21wZXRpdG9yc1NlY3Rpb24sXHJcbiAgICB0YXJnZXRDdXN0b21lcnNTZWN0aW9uLFxyXG4gICAgY29tcGV0aXRpb25EaXN0aW5ndWlzaFNlY3Rpb24sXHJcbiAgICBzdGFydHVwQ29zdHNTZWN0aW9uLFxyXG4gICAgcnVubmluZ0Nvc3RzU2VjdGlvbixcclxuICAgIGZpbmFuY2luZ1NlY3Rpb24sXHJcbiAgICBidXNpbmVzc01vZGVsT3ZlcnZpZXdTZWN0aW9uLFxyXG4gICAgYnVzaW5lc3NHcm93U2VjdGlvbixcclxuICAgIHdoeVN1Y2Nlc3NTZWN0aW9uLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uUHJvamVjdExlYXZlID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGdzYXAudG8oY29udGVudFJlZi5jdXJyZW50LCB7XHJcbiAgICAgIGF1dG9BbHBoYTogMCxcclxuICAgICAgZHVyYXRpb246IDEsXHJcbiAgICAgIGVhc2U6IExpbmVhci5lYXNlT3V0LFxyXG4gICAgfSk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgcm91dGVyLnB1c2goYC9kYXNoYm9hcmQvcHJvamVjdHMvJHtyb3V0ZXIucXVlcnkucHJvamVjdH0vc3RhcnR1cC1pZGVhL2J1c2luZXNzLW1vZGVsYCk7XHJcbiAgICB9LCAxMjAwKTtcclxuICB9O1xyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFBERiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICAvLyBjb25zdCBkZWxheSA9ICh0KSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCB0KSk7XHJcblxyXG4gIC8vIGFzeW5jIGZ1bmN0aW9uIGdldFByb3BzKCkge1xyXG4gIC8vICAgYXdhaXQgZGVsYXkoMV8wMDApO1xyXG4gIC8vICAgcmV0dXJuIHtcclxuICAvLyAgICAgc29tZVN0cmluZzogJ1lvdSB3YWl0ZWQgMSBzZWNvbmQgZm9yIHRoaXMnLFxyXG4gIC8vICAgfTtcclxuICAvLyB9XHJcblxyXG4gIEZvbnQucmVnaXN0ZXIoeyBzcmM6ICcvZm9udHMvcG9wcGlucy50dGYnLCBmYW1pbHk6ICdQb3BwaW5zJyB9KTtcclxuICBGb250LnJlZ2lzdGVyKHsgc3JjOiAnL2ZvbnRzL2NvbWZvcnRhYS50dGYnLCBmYW1pbHk6ICdDb21mb3J0YWEnIH0pO1xyXG5cclxuICBjb25zdCBzdHlsZXMgPSBTdHlsZVNoZWV0LmNyZWF0ZSh7XHJcbiAgICAvLyBTVEFSVCBIT01FUEFHRSBTRUNUSU9OXHJcbiAgICBob21lUGFnZToge1xyXG4gICAgICBmb250RmFtaWx5OiAnQ29tZm9ydGFhJyxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2Y4ZjlmYicsXHJcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxyXG4gICAgfSxcclxuICAgIGhvbWVQYWdlVGl0bGVTZWN0aW9uOiB7XHJcbiAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgIG1hcmdpblRvcDogNDAsXHJcbiAgICB9LFxyXG4gICAgaG9tZVBhZ2VUaXRsZToge1xyXG4gICAgICBmb250U2l6ZTogMjYsXHJcbiAgICAgIGNvbG9yOiAnIzBhMTIzMCcsXHJcbiAgICB9LFxyXG4gICAgaG9tZVBhZ2VEZXNjOiB7XHJcbiAgICAgIGZvbnRTaXplOiAxNixcclxuICAgICAgY29sb3I6ICcjYTBhZWMwJyxcclxuICAgIH0sXHJcbiAgICBpbWFnZToge1xyXG4gICAgICBoZWlnaHQ6ICcyMDBweCcsXHJcbiAgICAgIHdpZHRoOiAnMjAwcHgnLFxyXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgICBtYXJnaW5MZWZ0OiAnYXV0bycsXHJcbiAgICAgIG1hcmdpblJpZ2h0OiAnYXV0bycsXHJcbiAgICAgIG1hcmdpblRvcDogMjIsXHJcbiAgICB9LFxyXG4gICAgbGVmdERlc2NCbG9jazoge1xyXG4gICAgICB3aWR0aDogJzc1JScsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyM2QzYzRkYnLFxyXG4gICAgICB0ZXh0QWxpZ246ICdsZWZ0JyxcclxuICAgICAgbWFyZ2luVG9wOiAnMzJweCcsXHJcbiAgICAgIGJvcmRlclRvcFJpZ2h0UmFkaXVzOiA1MCxcclxuICAgIH0sXHJcbiAgICBsZWZ0RGVzY0Jsb2NrVGV4dDoge1xyXG4gICAgICBmb250U2l6ZTogMTQsXHJcbiAgICAgIHBhZGRpbmc6IDMyLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAxLjQsXHJcbiAgICAgIGNvbG9yOiAnI2Y4ZjlmYicsXHJcbiAgICB9LFxyXG4gICAgcmlnaHRCYXI6IHtcclxuICAgICAgaGVpZ2h0OiAnMTAwdmgnLFxyXG4gICAgICB3aWR0aDogJzE1cHgnLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjNkM2M0ZGJyxcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgIHJpZ2h0OiAnNSUnLFxyXG4gICAgfSxcclxuICAgIHJpZ2h0QmFyQ29udGFjdDoge1xyXG4gICAgICBjb2xvcjogJyNmOGY5ZmInLFxyXG4gICAgICBmb250U2l6ZTogMTQsXHJcbiAgICAgIHdpZHRoOiAnNTAlJyxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzZDNjNGRicsXHJcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICBib3R0b206ICcxMCUnLFxyXG4gICAgICByaWdodDogJzUlJyxcclxuICAgICAgcGFkZGluZzogMzIsXHJcbiAgICAgIGJvcmRlclRvcExlZnRSYWRpdXM6IDUwLFxyXG4gICAgfSxcclxuICAgIGNvdW50cnlUZXh0OiB7XHJcbiAgICAgIG1hcmdpblRvcDogNixcclxuICAgIH0sXHJcbiAgICBlbWFpbFRleHQ6IHtcclxuICAgICAgbWFyZ2luVG9wOiA2LFxyXG4gICAgfSxcclxuICAgIHBob25lTnVtYmVyVGV4dDoge1xyXG4gICAgICBtYXJnaW5Ub3A6IDYsXHJcbiAgICB9LFxyXG4gICAgZ3JheUJhck9uZToge1xyXG4gICAgICBoZWlnaHQ6ICcyNSUnLFxyXG4gICAgICB3aWR0aDogJzJweCcsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNhMGFlYzAnLFxyXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgYm90dG9tOiAnMyUnLFxyXG4gICAgICBsZWZ0OiAnMTAlJyxcclxuICAgIH0sXHJcbiAgICBncmF5QmFyVHdvOiB7XHJcbiAgICAgIGhlaWdodDogJzJweCcsXHJcbiAgICAgIHdpZHRoOiAnMjAlJyxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2EwYWVjMCcsXHJcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICBib3R0b206ICc1JScsXHJcbiAgICAgIGxlZnQ6ICc1JScsXHJcbiAgICB9LFxyXG4gICAgLy8gRU5EIFNUQVJUIEhPTUVQQUdFIFNFQ1RJT05cclxuICAgIC8vIFNUQVJUIE9WRVJWSUVXIFNFQ1RJT05cclxuICAgIG92ZXJ2aWV3UGFnZToge1xyXG4gICAgICBmb250RmFtaWx5OiAnQ29tZm9ydGFhJyxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2Y4ZjlmYicsXHJcbiAgICAgIHBhZGRpbmdUb3A6IDM1LFxyXG4gICAgICBwYWRkaW5nQm90dG9tOiAzNSxcclxuICAgIH0sXHJcbiAgICBvdmVydmlld0hlYWRpbmc6IHtcclxuICAgICAgZm9udFNpemU6IDIyLFxyXG4gICAgICBjb2xvcjogJyMwYTEyMzAnLFxyXG4gICAgICBtYXJnaW5MZWZ0OiAyOCxcclxuICAgIH0sXHJcbiAgICBvdmVydmlld1N1YnRpdGxlOiB7XHJcbiAgICAgIGZvbnRTaXplOiAxNCxcclxuICAgICAgY29sb3I6ICcjYTBhZWMwJyxcclxuICAgIH0sXHJcbiAgICBvdmVydmlld0ltYWdlOiB7XHJcbiAgICAgIGhlaWdodDogJzIwcHgnLFxyXG4gICAgICB3aWR0aDogJzIwcHgnLFxyXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgdG9wOiAzNyxcclxuICAgICAgbGVmdDogMzAsXHJcbiAgICB9LFxyXG4gICAgb3ZlcnZpZXdTZWN0aW9uOiB7XHJcbiAgICAgIC8vIHBhZGRpbmc6ICc1JScsXHJcbiAgICAgIC8vIHBhZGRpbmdUb3A6ICc1JScsXHJcbiAgICAgIHBhZGRpbmdCb3R0b206ICc1JScsXHJcbiAgICAgIHBhZGRpbmdMZWZ0OiAnNSUnLFxyXG4gICAgICBwYWRkaW5nUmlnaHQ6ICc1JScsXHJcbiAgICB9LFxyXG4gICAgc2VjdGlvbkNvbnRhaW5lck9uZToge1xyXG4gICAgICBtYXJnaW5Ub3A6IDMwLFxyXG4gICAgfSxcclxuICAgIHNlY3Rpb25IZWFkaW5nT25lOiB7XHJcbiAgICAgIGNvbG9yOiAnIzBhMTIzMCcsXHJcbiAgICAgIGZvbnRTaXplOiAxNixcclxuICAgIH0sXHJcbiAgICBzZWN0aW9uVGV4dDoge1xyXG4gICAgICBjb2xvcjogJyMwYTEyMzAnLFxyXG4gICAgICBmb250U2l6ZTogMTIsXHJcbiAgICAgIHBhZGRpbmdUb3A6IDgsXHJcbiAgICAgIHBhZGRpbmdSaWdodDogNTAsXHJcbiAgICB9LFxyXG4gICAgc2VjdGlvbkNvbnRhaW5lclR3bzoge1xyXG4gICAgICBwYWRkaW5nVG9wOiAzMCxcclxuICAgIH0sXHJcbiAgICBzZWN0aW9uSGVhZGluZ1R3bzoge1xyXG4gICAgICBjb2xvcjogJyMwYTEyMzAnLFxyXG4gICAgICBmb250U2l6ZTogMTYsXHJcbiAgICB9LFxyXG4gICAgc2VjdGlvbkNvbnRhaW5lclRocmVlOiB7XHJcbiAgICAgIHBhZGRpbmdUb3A6IDM2LFxyXG4gICAgICBwYWRkaW5nQm90dG9tOiAyNixcclxuICAgIH0sXHJcbiAgICBzZWN0aW9uSGVhZGluZ1RocmVlOiB7XHJcbiAgICAgIGNvbG9yOiAnIzBhMTIzMCcsXHJcbiAgICAgIGZvbnRTaXplOiAxNixcclxuICAgIH0sXHJcbiAgICAvLyBFTkQgT1ZFUlZJRVcgU0VDVElPTlxyXG4gICAgLy8gU1RBUlQgVEFCTEUgT0YgQ09OVEVOVFMgU0VDVElPTlxyXG4gICAgY29udGVudHNQYWdlOiB7XHJcbiAgICAgIGZvbnRGYW1pbHk6ICdDb21mb3J0YWEnLFxyXG4gICAgfSxcclxuICAgIGNvbnRlbnRzTGVmdEJhcjoge1xyXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgICAgd2lkdGg6ICc0MCUnLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjNkM2M0ZGJyxcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgIGFsaWduSXRlbXM6ICdiYXNlbGluZScsXHJcbiAgICAgIGNvbG9yOiAnI2Y4ZjlmYicsXHJcbiAgICAgIHBhZGRpbmdMZWZ0OiAzNSxcclxuICAgICAgZm9udFNpemU6IDIwLFxyXG4gICAgICBsaW5lSGVpZ2h0OiA0LFxyXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIH0sXHJcbiAgICBjb250ZW50c0Jhck9uZToge1xyXG4gICAgICB3aWR0aDogMjAwLFxyXG4gICAgICBoZWlnaHQ6IDIsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNhMGFlYzAnLFxyXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgdG9wOiAnMzclJyxcclxuICAgICAgbGVmdDogJzEwMCUnLFxyXG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknLFxyXG4gICAgfSxcclxuICAgIGNvbnRlbnRzQmFyVHdvOiB7XHJcbiAgICAgIHdpZHRoOiAyMDAsXHJcbiAgICAgIGhlaWdodDogMixcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2EwYWVjMCcsXHJcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICB0b3A6ICc0Ni41JScsXHJcbiAgICAgIGxlZnQ6ICcxMDAlJyxcclxuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpJyxcclxuICAgIH0sXHJcbiAgICBjb250ZW50c0JhclRocmVlOiB7XHJcbiAgICAgIHdpZHRoOiAyMDAsXHJcbiAgICAgIGhlaWdodDogMixcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2EwYWVjMCcsXHJcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICB0b3A6ICc1NiUnLFxyXG4gICAgICBsZWZ0OiAnMTAwJScsXHJcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScsXHJcbiAgICB9LFxyXG4gICAgY29udGVudHNCYXJGb3VyOiB7XHJcbiAgICAgIHdpZHRoOiAyMDAsXHJcbiAgICAgIGhlaWdodDogMixcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2EwYWVjMCcsXHJcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICB0b3A6ICc2NS41JScsXHJcbiAgICAgIGxlZnQ6ICcxMDAlJyxcclxuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpJyxcclxuICAgIH0sXHJcbiAgICBjb250ZW50c0JhckZpdmU6IHtcclxuICAgICAgd2lkdGg6IDIwMCxcclxuICAgICAgaGVpZ2h0OiAyLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjYTBhZWMwJyxcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgIHRvcDogJzc0Ljc1JScsXHJcbiAgICAgIGxlZnQ6ICcxMDAlJyxcclxuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpJyxcclxuICAgIH0sXHJcbiAgICBjb250ZW50c1JpZ2h0QmFyOiB7XHJcbiAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgICB3aWR0aDogJzYwJScsXHJcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICByaWdodDogJzAnLFxyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICBmb250U2l6ZTogMTIsXHJcbiAgICAgIGNvbG9yOiAnIzBhMTIzMCcsXHJcbiAgICAgIC8vIHBhZGRpbmdIb3Jpem9udGFsOiA2NCxcclxuICAgICAgcGFkZGluZ1JpZ2h0OiA4MCxcclxuICAgICAgcGFkZGluZ0xlZnQ6IDMyLFxyXG4gICAgfSxcclxuICAgIGNvbnRlbnRzUmlnaHRUZXh0T25lOiB7XHJcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICB0b3A6ICcyNi43NSUnLFxyXG4gICAgfSxcclxuICAgIGNvbnRlbnRzUmlnaHRUZXh0VHdvOiB7XHJcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICB0b3A6ICczNiUnLFxyXG4gICAgfSxcclxuICAgIGNvbnRlbnRzUmlnaHRUZXh0VGhyZWU6IHtcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgIHRvcDogJzQ1LjUlJyxcclxuICAgIH0sXHJcbiAgICBjb250ZW50c1JpZ2h0VGV4dEZvdXI6IHtcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgIHRvcDogJzU1JScsXHJcbiAgICB9LFxyXG4gICAgY29udGVudHNSaWdodFRleHRGaXZlOiB7XHJcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICB0b3A6ICc2NC4yNSUnLFxyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgTXlEb2N1bWVudCA9IChwcm9wcykgPT4gKFxyXG4gICAgPERvY3VtZW50PlxyXG4gICAgICA8UGFnZSBzaXplPVwiQTRcIiBzdHlsZT17c3R5bGVzLmhvbWVQYWdlfT5cclxuICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLmhvbWVQYWdlVGl0bGVTZWN0aW9ufT5cclxuICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuaG9tZVBhZ2VUaXRsZX0+U3RhcnR1cCBpZGVhIHBsYW48L1RleHQ+XHJcbiAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLmhvbWVQYWdlRGVzY30+SnVzdCBhIHNpbXBsZSBzdGFydHVwIGFib3V0IHRlY2ggZmllbGQ8L1RleHQ+XHJcbiAgICAgICAgICA8SW1hZ2Ugc3JjPXtpbWFnZX0gc3R5bGU9e3N0eWxlcy5pbWFnZX0gaGVpZ2h0PVwiMjUwcHhcIiB3aWR0aD1cIjI1MHB4XCIgLz5cclxuICAgICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMubGVmdERlc2NCbG9ja30+XHJcbiAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMubGVmdERlc2NCbG9ja1RleHR9PntpZGVhRGVzY308L1RleHQ+XHJcbiAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMucmlnaHRCYXJ9PjwvVmlldz5cclxuICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLnJpZ2h0QmFyQ29udGFjdH0+XHJcbiAgICAgICAgICA8VGV4dD57c3RhcnR1cEZpZWxkfTwvVGV4dD5cclxuICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuY291bnRyeVRleHR9PntpZGVhQ291bnRyeX08L1RleHQ+XHJcbiAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLmVtYWlsVGV4dH0+e3N0YXJ0dXBFbWFpbH08L1RleHQ+XHJcbiAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnBob25lTnVtYmVyVGV4dH0+e3N0YXJ0dXBQaG9uZX08L1RleHQ+XHJcbiAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuZ3JheUJhck9uZX0+PC9WaWV3PlxyXG4gICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuZ3JheUJhclR3b30+PC9WaWV3PlxyXG4gICAgICA8L1BhZ2U+XHJcbiAgICAgIHsvKiBUQUJMRSBPRiBDT05URU5UUyAqL31cclxuICAgICAgPFBhZ2Ugc3R5bGU9e3N0eWxlcy5jb250ZW50c1BhZ2V9PlxyXG4gICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMucmlnaHRCYXJ9IGZpeGVkPjwvVmlldz5cclxuICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLmNvbnRlbnRzTGVmdEJhcn0+XHJcbiAgICAgICAgICA8VGV4dD5TdGFydHVwIG92ZXJ2aWV3PC9UZXh0PlxyXG4gICAgICAgICAgPFRleHQ+UHJvZHVjdDwvVGV4dD5cclxuICAgICAgICAgIDxUZXh0Pk1hcmtldCBhbmFseXNpczwvVGV4dD5cclxuICAgICAgICAgIDxUZXh0PkZpbmFuY2VzPC9UZXh0PlxyXG4gICAgICAgICAgPFRleHQ+QnVzaW5lc3MgbW9kZWw8L1RleHQ+XHJcbiAgICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLmNvbnRlbnRzQmFyT25lfT48L1ZpZXc+XHJcbiAgICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLmNvbnRlbnRzQmFyVHdvfT48L1ZpZXc+XHJcbiAgICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLmNvbnRlbnRzQmFyVGhyZWV9PjwvVmlldz5cclxuICAgICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuY29udGVudHNCYXJGb3VyfT48L1ZpZXc+XHJcbiAgICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLmNvbnRlbnRzQmFyRml2ZX0+PC9WaWV3PlxyXG4gICAgICAgIDwvVmlldz5cclxuICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLmNvbnRlbnRzUmlnaHRCYXJ9PlxyXG4gICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5jb250ZW50c1JpZ2h0VGV4dE9uZX0+MDEuIFRoaXMgc2VjdGlvbiB3aWxsIGhlbHAgeW91IGJldHRlciB1bmRlcnN0YW5kIHRoZSBzdGFydHVwIHZpc2lvbjwvVGV4dD5cclxuICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuY29udGVudHNSaWdodFRleHRUd299PjAyLiBUaGlzIHNlY3Rpb24gd2lsbCBpbnRyb2R1Y2UgeW91IHRvIHRoZSB2aXNpb24gb2YgdGhlIHByb2R1Y3Q8L1RleHQ+XHJcbiAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLmNvbnRlbnRzUmlnaHRUZXh0VGhyZWV9PjAzLiBUaGlzIHNlY3Rpb24gd2lsbCByZXZlYWwgYWxsIHRoZSBjYXJkcyBvZiB0aGUgbWFya2V0PC9UZXh0PlxyXG4gICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5jb250ZW50c1JpZ2h0VGV4dEZvdXJ9PjA0LiBEaXNjb3ZlciB0aGUgY29zdHMgb2YgaW1wbGVtZW50aW5nIG91ciBpZGVhPC9UZXh0PlxyXG4gICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5jb250ZW50c1JpZ2h0VGV4dEZpdmV9PjA1LiBJbiB0aGUgZmluYWwgc2VjdGlvbiwgeW91IHdpbGwgZGlzY292ZXIgdGhlIHN0YXJ0dXAncyBidXNpbmVzcyBtb2RlbDwvVGV4dD5cclxuICAgICAgICA8L1ZpZXc+XHJcbiAgICAgIDwvUGFnZT5cclxuICAgICAgey8qIE9WRVJWSUVXIFNFQ1RJT04gKi99XHJcbiAgICAgIDxQYWdlIHN0eWxlPXtzdHlsZXMub3ZlcnZpZXdQYWdlfT5cclxuICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLnJpZ2h0QmFyfSBmaXhlZD48L1ZpZXc+XHJcbiAgICAgICAgPEltYWdlIHN0eWxlPXtzdHlsZXMub3ZlcnZpZXdJbWFnZX0gc3JjPVwiL3BkZi9pZGVhLnBuZ1wiIGhlaWdodD17MjB9IHdpZHRoPXsyMH0gLz5cclxuICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLm92ZXJ2aWV3U2VjdGlvbn0+XHJcbiAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLm92ZXJ2aWV3SGVhZGluZ30+U3RhcnR1cCBvdmVydmlldzwvVGV4dD5cclxuICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMub3ZlcnZpZXdTdWJ0aXRsZX0+VGhpcyBzZWN0aW9uIHdpbGwgaGVscCB5b3UgYmV0dGVyIHVuZGVyc3RhbmQgdGhlIHN0YXJ0dXAgdmlzaW9uPC9UZXh0PlxyXG4gICAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5zZWN0aW9uQ29udGFpbmVyT25lfT5cclxuICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5zZWN0aW9uSGVhZGluZ09uZX0+TWFya2V0IHByb2JsZW0gdGhhdCBuZWVkcyB0byBiZSBzb2x2ZWQ8L1RleHQ+XHJcbiAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuc2VjdGlvblRleHR9PnttYXJrZXRQcm9ibGVtU2VjdGlvbn08L1RleHQ+XHJcbiAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLnNlY3Rpb25Db250YWluZXJUd299PlxyXG4gICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnNlY3Rpb25IZWFkaW5nVHdvfT5PdXIgc3RhcnR1cCBzb2x1dGlvbiBmb3IgdGhpcyBwcm9ibGVtPC9UZXh0PlxyXG4gICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnNlY3Rpb25UZXh0fT57bWFya2V0U29sdXRpb25TZWN0aW9ufTwvVGV4dD5cclxuICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuc2VjdGlvbkNvbnRhaW5lclRocmVlfT5cclxuICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5zZWN0aW9uSGVhZGluZ1RocmVlfT5XaG8gaXMgYmVoaW5kIHRoZSBmb3VuZGF0aW9uIG9mIHRoZSBmdXR1cmUgY29tcGFueT88L1RleHQ+XHJcbiAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuc2VjdGlvblRleHR9Pntmb3VuZGVyc1NlY3Rpb259PC9UZXh0PlxyXG4gICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgIDwvVmlldz5cclxuICAgICAgPC9QYWdlPlxyXG4gICAgICB7LyogUFJPRFVDVCBTRUNUSU9OICovfVxyXG4gICAgICA8UGFnZSBzdHlsZT17c3R5bGVzLm92ZXJ2aWV3UGFnZX0+XHJcbiAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5yaWdodEJhcn0gZml4ZWQ+PC9WaWV3PlxyXG4gICAgICAgIDxJbWFnZSBzdHlsZT17c3R5bGVzLm92ZXJ2aWV3SW1hZ2V9IHNyYz1cIi9wZGYvYmx1ZXByaW50LnBuZ1wiIGhlaWdodD17MjB9IHdpZHRoPXsyMH0gLz5cclxuICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLm92ZXJ2aWV3U2VjdGlvbn0+XHJcbiAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLm92ZXJ2aWV3SGVhZGluZ30+UHJvZHVjdDwvVGV4dD5cclxuICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMub3ZlcnZpZXdTdWJ0aXRsZX0+VGhpcyBzZWN0aW9uIHdpbGwgaW50cm9kdWNlIHlvdSB0byB0aGUgdmlzaW9uIG9mIHRoZSBwcm9kdWN0PC9UZXh0PlxyXG4gICAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5zZWN0aW9uQ29udGFpbmVyT25lfT5cclxuICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5zZWN0aW9uSGVhZGluZ09uZX0+V2hhdCBkb2VzIHRoZSBwZXJmZWN0IHZlcnNpb24gb2YgdGhlIHByb2R1Y3QgbG9vayBsaWtlPzwvVGV4dD5cclxuICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5zZWN0aW9uVGV4dH0+e3Byb2R1Y3RPdmVydmlld1NlY3Rpb259PC9UZXh0PlxyXG4gICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5zZWN0aW9uQ29udGFpbmVyVHdvfT5cclxuICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5zZWN0aW9uSGVhZGluZ1R3b30+SG93IHdpbGwgb3RoZXIgcGVvcGxlIGZpbmQgb3V0IGFib3V0IHRoZSBwcm9kdWN0PzwvVGV4dD5cclxuICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5zZWN0aW9uVGV4dH0+e3Byb2R1Y3RQcm9tb3Rpb25TZWN0aW9ufTwvVGV4dD5cclxuICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuc2VjdGlvbkNvbnRhaW5lclRocmVlfT5cclxuICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5zZWN0aW9uSGVhZGluZ1RocmVlfT5XaGF0IGJlbmVmaXRzIHdpbGwgdGhpcyBwcm9kdWN0IGJyaW5ncyB0byBjdXN0b21lcnM/PC9UZXh0PlxyXG4gICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnNlY3Rpb25UZXh0fT57cHJvZHVjdEJlbmVmaXRzU2VjdGlvbn08L1RleHQ+XHJcbiAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgPC9WaWV3PlxyXG4gICAgICA8L1BhZ2U+XHJcbiAgICAgIHsvKiBNQVJLRVQgU0VDVElPTiAqL31cclxuICAgICAgPFBhZ2Ugc3R5bGU9e3N0eWxlcy5vdmVydmlld1BhZ2V9PlxyXG4gICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMucmlnaHRCYXJ9IGZpeGVkPjwvVmlldz5cclxuICAgICAgICA8SW1hZ2Ugc3R5bGU9e3N0eWxlcy5vdmVydmlld0ltYWdlfSBzcmM9XCIvcGRmL3VuaWNvcm4ucG5nXCIgaGVpZ2h0PXsyMH0gd2lkdGg9ezIwfSAvPlxyXG4gICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMub3ZlcnZpZXdTZWN0aW9ufT5cclxuICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMub3ZlcnZpZXdIZWFkaW5nfT5NYXJrZXQgYW5hbHlzaXM8L1RleHQ+XHJcbiAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLm92ZXJ2aWV3U3VidGl0bGV9PlRoaXMgc2VjdGlvbiB3aWxsIHJldmVhbCBhbGwgdGhlIGNhcmRzIG9mIHRoZSBtYXJrZXQ8L1RleHQ+XHJcbiAgICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLnNlY3Rpb25Db250YWluZXJPbmV9PlxyXG4gICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnNlY3Rpb25IZWFkaW5nT25lfT5BIGdlbmVyYWwgdmlldyBvZiB0aGUgbWFya2V0IHRoYXQgY2FuIGJlIG9idGFpbmVkPC9UZXh0PlxyXG4gICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnNlY3Rpb25UZXh0fT57bWFya2V0T3ZlcnZpZXdTZWN0aW9ufTwvVGV4dD5cclxuICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuc2VjdGlvbkNvbnRhaW5lclR3b30+XHJcbiAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuc2VjdGlvbkhlYWRpbmdUd299PldoYXQgaXMgdGhlIG1haW4gY29tcGV0aXRpb24gb24gdGhlIG1hcmtldD88L1RleHQ+XHJcbiAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuc2VjdGlvblRleHR9Pntjb21wZXRpdG9yc1NlY3Rpb259PC9UZXh0PlxyXG4gICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5zZWN0aW9uQ29udGFpbmVyVHdvfT5cclxuICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5zZWN0aW9uSGVhZGluZ1R3b30+V2hhdCBtYWtlcyBhIHN0YXJ0dXAgc3RhbmQgb3V0IGZyb20gdGhlIGNvbXBldGl0aW9uPzwvVGV4dD5cclxuICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5zZWN0aW9uVGV4dH0+e2NvbXBldGl0aW9uRGlzdGluZ3Vpc2hTZWN0aW9ufTwvVGV4dD5cclxuICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuc2VjdGlvbkNvbnRhaW5lclRocmVlfT5cclxuICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5zZWN0aW9uSGVhZGluZ1RocmVlfT5XaG8gYXJlIHRoZSB0YXJnZXQgY3VzdG9tZXJzIG9mIHRoZSBzdGFydHVwPzwvVGV4dD5cclxuICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5zZWN0aW9uVGV4dH0+e3RhcmdldEN1c3RvbWVyc1NlY3Rpb259PC9UZXh0PlxyXG4gICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgIDwvVmlldz5cclxuICAgICAgPC9QYWdlPlxyXG4gICAgICB7LyogRklOQU5DRVMgU0VDVElPTiAqL31cclxuICAgICAgPFBhZ2Ugc3R5bGU9e3N0eWxlcy5vdmVydmlld1BhZ2V9PlxyXG4gICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMucmlnaHRCYXJ9IGZpeGVkPjwvVmlldz5cclxuICAgICAgICA8SW1hZ2Ugc3R5bGU9e3N0eWxlcy5vdmVydmlld0ltYWdlfSBzcmM9XCIvcGRmL2J1ZGdldC5wbmdcIiBoZWlnaHQ9ezIwfSB3aWR0aD17MjB9IC8+XHJcbiAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5vdmVydmlld1NlY3Rpb259PlxyXG4gICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5vdmVydmlld0hlYWRpbmd9PkZpbmFuY2VzPC9UZXh0PlxyXG4gICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5vdmVydmlld1N1YnRpdGxlfT5EaXNjb3ZlciB0aGUgY29zdHMgb2YgaW1wbGVtZW50aW5nIG91ciBpZGVhPC9UZXh0PlxyXG4gICAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5zZWN0aW9uQ29udGFpbmVyT25lfT5cclxuICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5zZWN0aW9uSGVhZGluZ09uZX0+SG93IG11Y2ggbW9uZXkgd2lsbCBpdCB0YWtlIHRvIGxhdW5jaCB0aGUgc3RhcnR1cD88L1RleHQ+XHJcbiAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuc2VjdGlvblRleHR9PntzdGFydHVwQ29zdHNTZWN0aW9ufTwvVGV4dD5cclxuICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuc2VjdGlvbkNvbnRhaW5lclR3b30+XHJcbiAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuc2VjdGlvbkhlYWRpbmdUd299PkFwcHJveGltYXRlIGNvc3RzIG9mIG1haW50YWluaW5nIGEgc3RhcnR1cDwvVGV4dD5cclxuICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5zZWN0aW9uVGV4dH0+e3J1bm5pbmdDb3N0c1NlY3Rpb259PC9UZXh0PlxyXG4gICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5zZWN0aW9uQ29udGFpbmVyVGhyZWV9PlxyXG4gICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnNlY3Rpb25IZWFkaW5nVGhyZWV9PkhvdyBkb2VzIHRoZSBpZGVhIHdpbGwgYmUgZnVuZD88L1RleHQ+XHJcbiAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuc2VjdGlvblRleHR9PntmaW5hbmNpbmdTZWN0aW9ufTwvVGV4dD5cclxuICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICA8L1ZpZXc+XHJcbiAgICAgIDwvUGFnZT5cclxuICAgICAgey8qIEJVU0lORVNTIE1PREVMIFNFQ1RJT04gKi99XHJcbiAgICAgIDxQYWdlIHN0eWxlPXtzdHlsZXMub3ZlcnZpZXdQYWdlfT5cclxuICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLnJpZ2h0QmFyfSBmaXhlZD48L1ZpZXc+XHJcbiAgICAgICAgPEltYWdlIHN0eWxlPXtzdHlsZXMub3ZlcnZpZXdJbWFnZX0gc3JjPVwiL3BkZi9zdGFydHVwLnBuZ1wiIGhlaWdodD17MjB9IHdpZHRoPXsyMH0gLz5cclxuICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLm92ZXJ2aWV3U2VjdGlvbn0+XHJcbiAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLm92ZXJ2aWV3SGVhZGluZ30+QnVzaW5lc3MgbW9kZWw8L1RleHQ+XHJcbiAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLm92ZXJ2aWV3U3VidGl0bGV9PkluIHRoZSBmaW5hbCBzZWN0aW9uLCB5b3Ugd2lsbCBkaXNjb3ZlciB0aGUgc3RhcnR1cCdzIGJ1c2luZXNzIG1vZGVsPC9UZXh0PlxyXG4gICAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5zZWN0aW9uQ29udGFpbmVyT25lfT5cclxuICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5zZWN0aW9uSGVhZGluZ09uZX0+V2hhdCB3aWxsIHRoZSBzdGFydHVwJ3MgYnVzaW5lc3MgbW9kZWwgbG9vayBsaWtlPzwvVGV4dD5cclxuICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5zZWN0aW9uVGV4dH0+e2J1c2luZXNzTW9kZWxPdmVydmlld1NlY3Rpb259PC9UZXh0PlxyXG4gICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5zZWN0aW9uQ29udGFpbmVyVHdvfT5cclxuICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5zZWN0aW9uSGVhZGluZ1R3b30+UHJlZGljdGlvbnMgZm9yIHN0YXJ0dXAgZ3Jvd3RoPC9UZXh0PlxyXG4gICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnNlY3Rpb25UZXh0fT57YnVzaW5lc3NHcm93U2VjdGlvbn08L1RleHQ+XHJcbiAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLnNlY3Rpb25Db250YWluZXJUaHJlZX0+XHJcbiAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuc2VjdGlvbkhlYWRpbmdUaHJlZX0+V2h5IGlzIGl0IHRoYXQgc3RhcnR1cCB0aGF0IHdpbGwgY29ucXVlciB0aGUgd29ybGQ/PC9UZXh0PlxyXG4gICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnNlY3Rpb25UZXh0fT57d2h5U3VjY2Vzc1NlY3Rpb259PC9UZXh0PlxyXG4gICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgIDwvVmlldz5cclxuICAgICAgPC9QYWdlPlxyXG4gICAgPC9Eb2N1bWVudD5cclxuICApO1xyXG5cclxuICAvLyBjb25zdCBbbnVtUGFnZXMsIHNldE51bVBhZ2VzXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAvLyBjb25zdCBNeURvY3VtZW50ID0gKHByb3BzKSA9PiAoXHJcbiAgLy8gICA8RG9jdW1lbnRcclxuICAvLyAgICAgZmlsZT17cHJvcHMuZGF0YX1cclxuICAvLyAgICAgb25Mb2FkU3VjY2Vzcz17KHsgbnVtUGFnZXMgfSkgPT4gc2V0TnVtUGFnZXMobnVtUGFnZXMpfVxyXG4gIC8vICAgPlxyXG4gIC8vICAgICB7QXJyYXkuYXBwbHkobnVsbCwgQXJyYXkobnVtUGFnZXMpKVxyXG4gIC8vICAgICAgIC5tYXAoKHgsIGkpID0+IGkgKyAxKVxyXG4gIC8vICAgICAgIC5tYXAoKHBhZ2UpID0+IChcclxuICAvLyAgICAgICAgIDxQYWdlIHBhZ2VOdW1iZXI9e3BhZ2V9IHN0eWxlPXtzdHlsZXMucGFnZX0+XHJcbiAgLy8gICAgICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuc2VjdGlvbn0+XHJcbiAgLy8gICAgICAgICAgIDwvVmlldz5cclxuICAvLyAgICAgICAgIDwvUGFnZT5cclxuICAvLyAgICAgICApKX1cclxuICAvLyAgIDwvRG9jdW1lbnQ+XHJcbiAgLy8gKTtcclxuXHJcbiAgcmV0dXJuIHVzZU1lbW8oXHJcbiAgICAoKSA9PiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAge21hbmFnZXJQYWdlID8gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtci0yXCJcclxuICAgICAgICAgICAgICBzcmM9XCIvbW9iaWxlLW5hdmJhci9wZGYuc3ZnXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXthc3luYyAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZG9jID0gPE15RG9jdW1lbnQxIGRhdGE9e2RhdGF9IC8+O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYXNQZGYgPSBwZGYoW10pOyAvLyB7fSBpcyBpbXBvcnRhbnQsIHRocm93cyB3aXRob3V0IGFuIGFyZ3VtZW50XHJcbiAgICAgICAgICAgICAgICBhc1BkZi51cGRhdGVDb250YWluZXIoZG9jKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJsb2IgPSBhd2FpdCBhc1BkZi50b0Jsb2IoKTtcclxuICAgICAgICAgICAgICAgIHNhdmVBcyhibG9iLCBgJHtpZGVhTmFtZX0vaWRlYS1wbGFuLnBkZmApO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgaGVpZ2h0PXsyNH1cclxuICAgICAgICAgICAgICB3aWR0aD17MjR9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIiBzcmM9XCIvbW9iaWxlLW5hdmJhci9mb3JlaWduLnN2Z1wiIGhlaWdodD17MjR9IHdpZHRoPXsyNH0gY2xhc3NOYW1lPVwiaC1mdWxsXCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8RXhpdENvbXBvbmVudCAvPlxyXG4gICAgICAgICAgICA8ZGl2IHJlZj17Y29udGVudFJlZn0gY2xhc3NOYW1lPVwiaC1zY3JlZW4gdy1mdWxsIHJlbGF0aXZlIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImNpcmNsZXNcIj5cclxuICAgICAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICAgICAgey8qIDEwICovfVxyXG4gICAgICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdy1mdWxsIG1heC13LXNjcmVlbi1tZCByZWxhdGl2ZSBwbC02IHByLTYgbXQtMTYgcGItMjRcIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeWRhcmsgdGV4dC0yeGwgbm9ybWFsOnRleHQtM3hsIG10LTIgcGwtMiBkYXJrOnRleHQtYmFja2dyb3VuZCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9naWZzL3BvcHBlci5naWZcIiBoZWlnaHQ9ezYwfSB3aWR0aD17NjB9IGNsYXNzTmFtZT1cImlubGluZS1ibG9jayByZWxhdGl2ZSBib3R0b20tNCBsZWZ0LTNcIiAvPlxyXG4gICAgICAgICAgICAgICAgICBDb25ncmF0dWxhdGlvbnMhXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXkgdGV4dC1iYXNlIG5vcm1hbDp0ZXh0LWxnIHBsLTIgZGFyazp0ZXh0LWJhY2tncm91bmQgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgTm93IHlvdSBjYW4gc2F2ZSB5b3VyIGlkZWEgYW5kIHNldCBvZmYgdG8gY29ucXVlciB0aGUgd29ybGRcclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N1Y2Nlc3Muc3ZnXCIgaGVpZ2h0PXsyMDB9IHdpZHRoPXsyMDB9IGNsYXNzTmFtZT1cIm10LTRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInotMTAgbXItNCBtdC02IGhvdmVyOmJnLXByaW1hcnkgaG92ZXI6dGV4dC13aGl0ZSBkYXJrOmhvdmVyOmJnLXByaW1hcnlkYXJrIGRhcms6aG92ZXI6dGV4dC1iYWNrZ3JvdW5kIGZvY3VzOm91dGxpbmUtbm9uZSBib3JkZXIgYm9yZGVyLXByaW1hcnkgdGV4dC1wcmltYXJ5IHRleHQtc20gZm9udC1saWdodCBweS0yIHB4LTggcm91bmRlZC0yeGwgZGFyazp0ZXh0LXByaW1hcnlkYXJrIGRhcms6Ym9yZGVyLXByaW1hcnlkYXJrXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvblByb2plY3RMZWF2ZX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIEJhY2tcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ6LTEwIG1sLTQgbXQtNiBob3ZlcjpiZy1wcmltYXJ5IGhvdmVyOnRleHQtd2hpdGUgZGFyazpob3ZlcjpiZy1wcmltYXJ5ZGFyayBkYXJrOmhvdmVyOnRleHQtYmFja2dyb3VuZCBmb2N1czpvdXRsaW5lLW5vbmUgYm9yZGVyIGJvcmRlci1wcmltYXJ5IHRleHQtcHJpbWFyeSB0ZXh0LXNtIGZvbnQtbGlnaHQgcHktMiBweC04IHJvdW5kZWQtMnhsIGRhcms6dGV4dC1wcmltYXJ5ZGFyayBkYXJrOmJvcmRlci1wcmltYXJ5ZGFya1wiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17YXN5bmMgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRvYyA9IDxNeURvY3VtZW50MSBkYXRhPXtkYXRhfSAvPjtcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFzUGRmID0gcGRmKFtdKTsgLy8ge30gaXMgaW1wb3J0YW50LCB0aHJvd3Mgd2l0aG91dCBhbiBhcmd1bWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgYXNQZGYudXBkYXRlQ29udGFpbmVyKGRvYyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBibG9iID0gYXdhaXQgYXNQZGYudG9CbG9iKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzYXZlQXMoYmxvYiwgYCR7aWRlYU5hbWV9L2lkZWEtcGxhbi5wZGZgKTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgU2F2ZVxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvPlxyXG4gICAgKSxcclxuICAgIFtkYXRhXVxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdGFydHVwU3VjY2VzcztcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGdzYXAsIHsgUG93ZXI0IH0gZnJvbSAnZ3NhcCc7XHJcbmltcG9ydCBUaXBweSBmcm9tICdAdGlwcHlqcy9yZWFjdCc7XHJcblxyXG5jb25zdCBNYW5hZ2VyVGlwcHkgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGNvbnRlbnRSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgdGlwcHlSZWYgPSB1c2VSZWYoKTtcclxuXHJcbiAgY29uc3Qgc2hvdyA9ICgpID0+IHtcclxuICAgIGdzYXAuZnJvbVRvKFxyXG4gICAgICB0aXBweVJlZi5jdXJyZW50LFxyXG4gICAgICB7IGF1dG9BbHBoYTogMCwgc2NhbGU6IDAgfSxcclxuICAgICAgeyBhdXRvQWxwaGE6IDEsIHNjYWxlOiAxLCBkdXJhdGlvbjogMSwgdHJhbnNmb3JtT3JpZ2luOiAnYm90dG9tIGxlZnQnLCBlYXNlOiBQb3dlcjQuZWFzZU91dCB9XHJcbiAgICApO1xyXG4gICAgc2V0VmlzaWJsZSh0cnVlKTtcclxuICB9O1xyXG4gIGNvbnN0IGhpZGUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBhd2FpdCBnc2FwLnRvKHRpcHB5UmVmLmN1cnJlbnQsIHtcclxuICAgICAgYXV0b0FscGhhOiAwLFxyXG4gICAgICBzY2FsZTogMCxcclxuICAgICAgZHVyYXRpb246IDEsXHJcbiAgICAgIHRyYW5zZm9ybU9yaWdpbjogJ2JvdHRvbSBsZWZ0JyxcclxuICAgICAgZWFzZTogUG93ZXI0LmVhc2VJbixcclxuICAgIH0pO1xyXG4gICAgc2V0VmlzaWJsZShmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25JbWFnZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgaWYgKCF2aXNpYmxlIHx8IHZpc2libGUpIHtcclxuICAgICAgdmlzaWJsZSA/IGhpZGUoKSA6IHNob3coKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gR1NBUFxyXG4gICAgZ3NhcC5mcm9tVG8oY29udGVudFJlZi5jdXJyZW50LCB7IGF1dG9BbHBoYTogMCB9LCB7IGF1dG9BbHBoYTogMSwgZHVyYXRpb246IDIsIHRyYW5zZm9ybU9yaWdpbjogJ2JvdHRvbSBsZWZ0JywgZWFzZTogUG93ZXI0LmVhc2VPdXQgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFRpcHB5XHJcbiAgICAgIC8vIHRyaWdnZXI9e3RpcHB5TW9uc3Rlcn1cclxuICAgICAgekluZGV4PXt2aXNpYmxlID8gNDAgOiAwfVxyXG4gICAgICBvblNob3c9e3Nob3d9XHJcbiAgICAgIGFuaW1hdGlvbj1cImZhZGVcIlxyXG4gICAgICBkdXJhdGlvbj17NTAwfVxyXG4gICAgICB0b3VjaD17dHJ1ZX1cclxuICAgICAgdmlzaWJsZT17dmlzaWJsZX1cclxuICAgICAgb25DbGlja091dHNpZGU9e2hpZGV9XHJcbiAgICAgIG9mZnNldD17WzE4MCwgLTI1XX1cclxuICAgICAgLy8gcGxhY2VtZW50PVwicmlnaHQtc3RhcnRcIlxyXG4gICAgICBpbnRlcmFjdGl2ZT17dHJ1ZX1cclxuICAgICAgY29udGVudD17XHJcbiAgICAgICAgLy8gUHJvamVjdCBtYW5hZ2VyIHN0YXJ0XHJcbiAgICAgICAgdmlzaWJsZSAmJiAoXHJcbiAgICAgICAgICA8ZGl2IHJlZj17dGlwcHlSZWZ9IGNsYXNzTmFtZT1cImgtMjggdy04MCBzaGFkb3ctbGcgcm91bmRlZC0yeGwgYmctcHJpbWFyeSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBmb2N1czpvdXRsaW5lLW5vbmVcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicC00IHRleHQtc20gdGV4dC1jZW50ZXIgdGV4dC13aGl0ZSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIE1hbmFnZSB5b3VyIHRlYW0gd2hlbmV2ZXIgeW91IHdhbnQhIFJlbWVtYmVyLCBpZiB5b3UgYXJlIHRoZSBvbmx5IHBlcnNvbiB3b3JraW5nIG9uIGEgcHJvamVjdCwgeW91ciByZW1vdmFsIHdpbGwgZGVsZXRlIHRoZVxyXG4gICAgICAgICAgICAgIGVudGlyZSBwcm9qZWN0LlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICAgIH1cclxuICAgID5cclxuICAgICAgPGltZyBvbkNsaWNrPXtvbkltYWdlQ2xpY2t9IGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyIG1sLTIgcmVsYXRpdmUgYm90dG9tLTAuNVwiIHNyYz1cIi9tZW1iZXJzL2J1bGIuc3ZnXCIgaGVpZ2h0PXsyNH0gd2lkdGg9ezI0fSAvPlxyXG4gICAgPC9UaXBweT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFuYWdlclRpcHB5O1xyXG4iLCJpbXBvcnQgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UvYXBwJztcclxuaW1wb3J0ICdmaXJlYmFzZS9hdXRoJztcclxuaW1wb3J0ICdmaXJlYmFzZS9maXJlc3RvcmUnO1xyXG5pbXBvcnQgJ2ZpcmViYXNlL3N0b3JhZ2UnO1xyXG5pbXBvcnQgJ2ZpcmViYXNlL2Z1bmN0aW9ucyc7XHJcblxyXG5pZiAoIWZpcmViYXNlLmFwcHMubGVuZ3RoKSB7XHJcbiAgZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcCh7XHJcbiAgICAvLyBhcGlLZXk6ICdBSXphU3lDeF9UMERxaXhMM0FYX1FMbC1qOFhEeWdHcDkxQy0zLVEnLFxyXG4gICAgLy8gYXV0aERvbWFpbjogJ3N0YXJ0dXAtdGVzdC00ZDYyNS5maXJlYmFzZWFwcC5jb20nLFxyXG4gICAgLy8gcHJvamVjdElkOiAnc3RhcnR1cC10ZXN0LTRkNjI1JyxcclxuICAgIC8vIHN0b3JhZ2VCdWNrZXQ6ICdzdGFydHVwLXRlc3QtNGQ2MjUuYXBwc3BvdC5jb20nLFxyXG4gICAgLy8gbWVzc2FnaW5nU2VuZGVySWQ6ICc0NzI0MTYxNTAyNDAnLFxyXG4gICAgLy8gYXBwSWQ6ICcxOjQ3MjQxNjE1MDI0MDp3ZWI6YjJhMTI4YWQyN2FmZmZkZGYzZTY4NScsXHJcbiAgICBhcGlLZXk6ICdBSXphU3lCT1NmdUFmN1ZBSzlZZWMyMGxHckRfNmJxNU1OUm05c0UnLFxyXG4gICAgYXV0aERvbWFpbjogJ3NhYXMtc3RhcnR1cC1hNWEzNC5maXJlYmFzZWFwcC5jb20nLFxyXG4gICAgcHJvamVjdElkOiAnc2Fhcy1zdGFydHVwLWE1YTM0JyxcclxuICAgIHN0b3JhZ2VCdWNrZXQ6ICdzYWFzLXN0YXJ0dXAtYTVhMzQuYXBwc3BvdC5jb20nLFxyXG4gICAgbWVzc2FnaW5nU2VuZGVySWQ6ICc4NjQyMTc1NzQ2MjUnLFxyXG4gICAgYXBwSWQ6ICcxOjg2NDIxNzU3NDYyNTp3ZWI6MTljZjU5MDEwOWVmNTBkZDkzNWJhMCcsXHJcbiAgICBtZWFzdXJlbWVudElkOiAnRy1RS1pKUFRLTVM0JyxcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZmlyZWJhc2U7XHJcbmV4cG9ydCBjb25zdCBhdXRoID0gZmlyZWJhc2UuYXV0aCgpO1xyXG5leHBvcnQgY29uc3QgZGIgPSBmaXJlYmFzZS5maXJlc3RvcmUoKTtcclxuZXhwb3J0IGNvbnN0IHN0b3JhZ2UgPSBmaXJlYmFzZS5zdG9yYWdlKCk7XHJcbiIsImltcG9ydCBmaXJlYmFzZSwgeyBhdXRoLCBkYiB9IGZyb20gJy4uL2xpYi9maXJlYmFzZSc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCBjcmVhdGVDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5leHBvcnQgY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7IC8vIFR1dGFqIG1vxbxuYSB1bWllxZtjacSHIGRlZmF1bHQgVmFsdWVcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VBdXRoID0gKCkgPT4ge1xyXG4gIHJldHVybiB1c2VDb250ZXh0KEF1dGhDb250ZXh0KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBBdXRoUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgW2N1cnJlbnRVc2VyLCBzZXRDdXJyZW50VXNlcl0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICBjb25zdCBoYW5kbGVVc2VyID0gYXN5bmMgKHVzZXIpID0+IHtcclxuICAgIGlmICh1c2VyKSB7XHJcbiAgICAgIENvb2tpZXMuc2V0KCd1aWQnLCB1c2VyLnVpZCwgdHJ1ZSk7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKCd1c2VyIC0gJywgdXNlcik7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKCd1c2VyIG5hbWUgLSAnLCBuYW1lKTtcclxuICAgICAgY29uc3QgZm9ybWF0ZWRVc2VyID0gYXdhaXQgZm9ybWF0VXNlcih1c2VyKTtcclxuXHJcbiAgICAgIC8vIGNvbnN0IGRlY29kZWRUb2tlbiA9IGF3YWl0IGZpcmViYXNlLmF1dGgoKS5jdXJyZW50VXNlci5nZXRJZFRva2VuUmVzdWx0KCk7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGRlY29kZWRUb2tlbi5jbGFpbXMuc3RyaXBlUm9sZSk7XHJcblxyXG4gICAgICBkYi5jb2xsZWN0aW9uKCd1c2VycycpLmRvYyh1c2VyLnVpZCkuc2V0KHsgZm9ybWF0ZWRVc2VyIH0sIHsgbWVyZ2U6IHRydWUgfSk7XHJcblxyXG4gICAgICBzZXRDdXJyZW50VXNlcihmb3JtYXRlZFVzZXIpO1xyXG4gICAgICAvLyBDb29raWVzLnNldCgndG9rZW4nLCB1c2VyLnphLCB0cnVlKTtcclxuXHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICByZXR1cm4gZm9ybWF0ZWRVc2VyO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0Q3VycmVudFVzZXIoZmFsc2UpO1xyXG4gICAgICAvLyBDb29raWVzLnJlbW92ZSgndG9rZW4nLCB1c2VyLnphKTtcclxuICAgICAgQ29va2llcy5yZW1vdmUoJ3VpZCcpO1xyXG5cclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBzaWduVXAgPSBhc3luYyAoZW1haWwsIHBhc3N3b3JkKSA9PiB7XHJcbiAgICByZXR1cm4gYXdhaXQgYXV0aC5jcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gaGFuZGxlVXNlcihyZXNwb25zZS51c2VyKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGxvZ0luID0gKGVtYWlsLCBwYXNzd29yZCkgPT4ge1xyXG4gICAgcmV0dXJuIGF1dGguc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBsb2dPdXQgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gYXV0aC5zaWduT3V0KCk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHVuc3Vic2NyaWJlID0gYXV0aC5vbklkVG9rZW5DaGFuZ2VkKGhhbmRsZVVzZXIpO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB1bnN1YnNjcmliZSgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgdmFsdWUgPSB7XHJcbiAgICBjdXJyZW50VXNlcixcclxuICAgIHNpZ25VcCxcclxuICAgIGxvZ0luLFxyXG4gICAgbG9nT3V0LFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldFN0cmlwZVJvbGUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBhd2FpdCBmaXJlYmFzZS5hdXRoKCkuY3VycmVudFVzZXIuZ2V0SWRUb2tlbih0cnVlKTtcclxuICAgIGNvbnN0IGRlY29kZWRUb2tlbiA9IGF3YWl0IGZpcmViYXNlLmF1dGgoKS5jdXJyZW50VXNlci5nZXRJZFRva2VuUmVzdWx0KCk7XHJcbiAgICByZXR1cm4gZGVjb2RlZFRva2VuLmNsYWltcy5zdHJpcGVSb2xlIHx8ICdmcmVlJztcclxuICB9O1xyXG5cclxuICBjb25zdCBmb3JtYXRVc2VyID0gYXN5bmMgKHVzZXIpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdPRkYgLSAnLCB1c2VyKTtcclxuICAgIGNvbnN0IHRva2VuID0gYXdhaXQgdXNlci5nZXRJZFRva2VuKCk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB1aWQ6IHVzZXIudWlkLFxyXG4gICAgICBlbWFpbDogdXNlci5lbWFpbCxcclxuICAgICAgLy8gbmFtZSxcclxuICAgICAgLy8gdG9rZW46IHVzZXIuemEsIC8vIHRva2VuIEpXVCwgZ2VuZXJvd2FueSBhdXRvbWF0eWN6bmllIHByemV6IGZpcmViYXNlIHByenkgemFrxYJhZGFuaXUga29udGFcclxuICAgICAgcHJvdmlkZXI6IHVzZXIucHJvdmlkZXJEYXRhWzBdLnByb3ZpZGVySWQsXHJcbiAgICAgIHN0cmlwZVJvbGU6IGF3YWl0IGdldFN0cmlwZVJvbGUoKSxcclxuICAgICAgdG9rZW4sXHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIHJldHVybiA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3ZhbHVlfT57IWxvYWRpbmcgJiYgY2hpbGRyZW59PC9BdXRoQ29udGV4dC5Qcm92aWRlcj47XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9oZWFkJ1xuaW1wb3J0IHsgdG9CYXNlNjQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdG8tYmFzZS02NCdcbmltcG9ydCB7XG4gIEltYWdlQ29uZmlnLFxuICBpbWFnZUNvbmZpZ0RlZmF1bHQsXG4gIExvYWRlclZhbHVlLFxuICBWQUxJRF9MT0FERVJTLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9zZXJ2ZXIvaW1hZ2UtY29uZmlnJ1xuaW1wb3J0IHsgdXNlSW50ZXJzZWN0aW9uIH0gZnJvbSAnLi91c2UtaW50ZXJzZWN0aW9uJ1xuXG5pZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgOyhnbG9iYWwgYXMgYW55KS5fX05FWFRfSU1BR0VfSU1QT1JURUQgPSB0cnVlXG59XG5cbmNvbnN0IFZBTElEX0xPQURJTkdfVkFMVUVTID0gWydsYXp5JywgJ2VhZ2VyJywgdW5kZWZpbmVkXSBhcyBjb25zdFxudHlwZSBMb2FkaW5nVmFsdWUgPSB0eXBlb2YgVkFMSURfTE9BRElOR19WQUxVRVNbbnVtYmVyXVxuXG5leHBvcnQgdHlwZSBJbWFnZUxvYWRlciA9IChyZXNvbHZlclByb3BzOiBJbWFnZUxvYWRlclByb3BzKSA9PiBzdHJpbmdcblxuZXhwb3J0IHR5cGUgSW1hZ2VMb2FkZXJQcm9wcyA9IHtcbiAgc3JjOiBzdHJpbmdcbiAgd2lkdGg6IG51bWJlclxuICBxdWFsaXR5PzogbnVtYmVyXG59XG5cbnR5cGUgRGVmYXVsdEltYWdlTG9hZGVyUHJvcHMgPSBJbWFnZUxvYWRlclByb3BzICYgeyByb290OiBzdHJpbmcgfVxuXG5jb25zdCBsb2FkZXJzID0gbmV3IE1hcDxcbiAgTG9hZGVyVmFsdWUsXG4gIChwcm9wczogRGVmYXVsdEltYWdlTG9hZGVyUHJvcHMpID0+IHN0cmluZ1xuPihbXG4gIFsnaW1naXgnLCBpbWdpeExvYWRlcl0sXG4gIFsnY2xvdWRpbmFyeScsIGNsb3VkaW5hcnlMb2FkZXJdLFxuICBbJ2FrYW1haScsIGFrYW1haUxvYWRlcl0sXG4gIFsnZGVmYXVsdCcsIGRlZmF1bHRMb2FkZXJdLFxuXSlcblxuY29uc3QgVkFMSURfTEFZT1VUX1ZBTFVFUyA9IFtcbiAgJ2ZpbGwnLFxuICAnZml4ZWQnLFxuICAnaW50cmluc2ljJyxcbiAgJ3Jlc3BvbnNpdmUnLFxuICB1bmRlZmluZWQsXG5dIGFzIGNvbnN0XG50eXBlIExheW91dFZhbHVlID0gdHlwZW9mIFZBTElEX0xBWU9VVF9WQUxVRVNbbnVtYmVyXVxuXG50eXBlIEltZ0VsZW1lbnRTdHlsZSA9IE5vbk51bGxhYmxlPEpTWC5JbnRyaW5zaWNFbGVtZW50c1snaW1nJ11bJ3N0eWxlJ10+XG5cbmV4cG9ydCB0eXBlIEltYWdlUHJvcHMgPSBPbWl0PFxuICBKU1guSW50cmluc2ljRWxlbWVudHNbJ2ltZyddLFxuICAnc3JjJyB8ICdzcmNTZXQnIHwgJ3JlZicgfCAnd2lkdGgnIHwgJ2hlaWdodCcgfCAnbG9hZGluZycgfCAnc3R5bGUnXG4+ICYge1xuICBzcmM6IHN0cmluZ1xuICBsb2FkZXI/OiBJbWFnZUxvYWRlclxuICBxdWFsaXR5PzogbnVtYmVyIHwgc3RyaW5nXG4gIHByaW9yaXR5PzogYm9vbGVhblxuICBsb2FkaW5nPzogTG9hZGluZ1ZhbHVlXG4gIHVub3B0aW1pemVkPzogYm9vbGVhblxuICBvYmplY3RGaXQ/OiBJbWdFbGVtZW50U3R5bGVbJ29iamVjdEZpdCddXG4gIG9iamVjdFBvc2l0aW9uPzogSW1nRWxlbWVudFN0eWxlWydvYmplY3RQb3NpdGlvbiddXG59ICYgKFxuICAgIHwge1xuICAgICAgICB3aWR0aD86IG5ldmVyXG4gICAgICAgIGhlaWdodD86IG5ldmVyXG4gICAgICAgIC8qKiBAZGVwcmVjYXRlZCBVc2UgYGxheW91dD1cImZpbGxcImAgaW5zdGVhZCAqL1xuICAgICAgICB1bnNpemVkOiB0cnVlXG4gICAgICB9XG4gICAgfCB7IHdpZHRoPzogbmV2ZXI7IGhlaWdodD86IG5ldmVyOyBsYXlvdXQ6ICdmaWxsJyB9XG4gICAgfCB7XG4gICAgICAgIHdpZHRoOiBudW1iZXIgfCBzdHJpbmdcbiAgICAgICAgaGVpZ2h0OiBudW1iZXIgfCBzdHJpbmdcbiAgICAgICAgbGF5b3V0PzogRXhjbHVkZTxMYXlvdXRWYWx1ZSwgJ2ZpbGwnPlxuICAgICAgfVxuICApXG5cbmNvbnN0IHtcbiAgZGV2aWNlU2l6ZXM6IGNvbmZpZ0RldmljZVNpemVzLFxuICBpbWFnZVNpemVzOiBjb25maWdJbWFnZVNpemVzLFxuICBsb2FkZXI6IGNvbmZpZ0xvYWRlcixcbiAgcGF0aDogY29uZmlnUGF0aCxcbiAgZG9tYWluczogY29uZmlnRG9tYWlucyxcbn0gPVxuICAoKHByb2Nlc3MuZW52Ll9fTkVYVF9JTUFHRV9PUFRTIGFzIGFueSkgYXMgSW1hZ2VDb25maWcpIHx8IGltYWdlQ29uZmlnRGVmYXVsdFxuLy8gc29ydCBzbWFsbGVzdCB0byBsYXJnZXN0XG5jb25zdCBhbGxTaXplcyA9IFsuLi5jb25maWdEZXZpY2VTaXplcywgLi4uY29uZmlnSW1hZ2VTaXplc11cbmNvbmZpZ0RldmljZVNpemVzLnNvcnQoKGEsIGIpID0+IGEgLSBiKVxuYWxsU2l6ZXMuc29ydCgoYSwgYikgPT4gYSAtIGIpXG5cbmZ1bmN0aW9uIGdldFdpZHRocyhcbiAgd2lkdGg6IG51bWJlciB8IHVuZGVmaW5lZCxcbiAgbGF5b3V0OiBMYXlvdXRWYWx1ZSxcbiAgc2l6ZXM6IHN0cmluZyB8IHVuZGVmaW5lZFxuKTogeyB3aWR0aHM6IG51bWJlcltdOyBraW5kOiAndycgfCAneCcgfSB7XG4gIGlmIChzaXplcyAmJiAobGF5b3V0ID09PSAnZmlsbCcgfHwgbGF5b3V0ID09PSAncmVzcG9uc2l2ZScpKSB7XG4gICAgLy8gRmluZCBhbGwgdGhlIFwidndcIiBwZXJjZW50IHNpemVzIHVzZWQgaW4gdGhlIHNpemVzIHByb3BcbiAgICBjb25zdCBwZXJjZW50U2l6ZXMgPSBbLi4uc2l6ZXMubWF0Y2hBbGwoLyhefFxccykoMT9cXGQ/XFxkKXZ3L2cpXS5tYXAoKG0pID0+XG4gICAgICBwYXJzZUludChtWzJdKVxuICAgIClcbiAgICBpZiAocGVyY2VudFNpemVzLmxlbmd0aCkge1xuICAgICAgY29uc3Qgc21hbGxlc3RSYXRpbyA9IE1hdGgubWluKC4uLnBlcmNlbnRTaXplcykgKiAwLjAxXG4gICAgICByZXR1cm4ge1xuICAgICAgICB3aWR0aHM6IGFsbFNpemVzLmZpbHRlcihcbiAgICAgICAgICAocykgPT4gcyA+PSBjb25maWdEZXZpY2VTaXplc1swXSAqIHNtYWxsZXN0UmF0aW9cbiAgICAgICAgKSxcbiAgICAgICAga2luZDogJ3cnLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4geyB3aWR0aHM6IGFsbFNpemVzLCBraW5kOiAndycgfVxuICB9XG4gIGlmIChcbiAgICB0eXBlb2Ygd2lkdGggIT09ICdudW1iZXInIHx8XG4gICAgbGF5b3V0ID09PSAnZmlsbCcgfHxcbiAgICBsYXlvdXQgPT09ICdyZXNwb25zaXZlJ1xuICApIHtcbiAgICByZXR1cm4geyB3aWR0aHM6IGNvbmZpZ0RldmljZVNpemVzLCBraW5kOiAndycgfVxuICB9XG5cbiAgY29uc3Qgd2lkdGhzID0gW1xuICAgIC4uLm5ldyBTZXQoXG4gICAgICAvLyA+IFRoaXMgbWVhbnMgdGhhdCBtb3N0IE9MRUQgc2NyZWVucyB0aGF0IHNheSB0aGV5IGFyZSAzeCByZXNvbHV0aW9uLFxuICAgICAgLy8gPiBhcmUgYWN0dWFsbHkgM3ggaW4gdGhlIGdyZWVuIGNvbG9yLCBidXQgb25seSAxLjV4IGluIHRoZSByZWQgYW5kXG4gICAgICAvLyA+IGJsdWUgY29sb3JzLiBTaG93aW5nIGEgM3ggcmVzb2x1dGlvbiBpbWFnZSBpbiB0aGUgYXBwIHZzIGEgMnhcbiAgICAgIC8vID4gcmVzb2x1dGlvbiBpbWFnZSB3aWxsIGJlIHZpc3VhbGx5IHRoZSBzYW1lLCB0aG91Z2ggdGhlIDN4IGltYWdlXG4gICAgICAvLyA+IHRha2VzIHNpZ25pZmljYW50bHkgbW9yZSBkYXRhLiBFdmVuIHRydWUgM3ggcmVzb2x1dGlvbiBzY3JlZW5zIGFyZVxuICAgICAgLy8gPiB3YXN0ZWZ1bCBhcyB0aGUgaHVtYW4gZXllIGNhbm5vdCBzZWUgdGhhdCBsZXZlbCBvZiBkZXRhaWwgd2l0aG91dFxuICAgICAgLy8gPiBzb21ldGhpbmcgbGlrZSBhIG1hZ25pZnlpbmcgZ2xhc3MuXG4gICAgICAvLyBodHRwczovL2Jsb2cudHdpdHRlci5jb20vZW5naW5lZXJpbmcvZW5fdXMvdG9waWNzL2luZnJhc3RydWN0dXJlLzIwMTkvY2FwcGluZy1pbWFnZS1maWRlbGl0eS1vbi11bHRyYS1oaWdoLXJlc29sdXRpb24tZGV2aWNlcy5odG1sXG4gICAgICBbd2lkdGgsIHdpZHRoICogMiAvKiwgd2lkdGggKiAzKi9dLm1hcChcbiAgICAgICAgKHcpID0+IGFsbFNpemVzLmZpbmQoKHApID0+IHAgPj0gdykgfHwgYWxsU2l6ZXNbYWxsU2l6ZXMubGVuZ3RoIC0gMV1cbiAgICAgIClcbiAgICApLFxuICBdXG4gIHJldHVybiB7IHdpZHRocywga2luZDogJ3gnIH1cbn1cblxudHlwZSBHZW5JbWdBdHRyc0RhdGEgPSB7XG4gIHNyYzogc3RyaW5nXG4gIHVub3B0aW1pemVkOiBib29sZWFuXG4gIGxheW91dDogTGF5b3V0VmFsdWVcbiAgbG9hZGVyOiBJbWFnZUxvYWRlclxuICB3aWR0aD86IG51bWJlclxuICBxdWFsaXR5PzogbnVtYmVyXG4gIHNpemVzPzogc3RyaW5nXG59XG5cbnR5cGUgR2VuSW1nQXR0cnNSZXN1bHQgPSB7XG4gIHNyYzogc3RyaW5nXG4gIHNyY1NldDogc3RyaW5nIHwgdW5kZWZpbmVkXG4gIHNpemVzOiBzdHJpbmcgfCB1bmRlZmluZWRcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVJbWdBdHRycyh7XG4gIHNyYyxcbiAgdW5vcHRpbWl6ZWQsXG4gIGxheW91dCxcbiAgd2lkdGgsXG4gIHF1YWxpdHksXG4gIHNpemVzLFxuICBsb2FkZXIsXG59OiBHZW5JbWdBdHRyc0RhdGEpOiBHZW5JbWdBdHRyc1Jlc3VsdCB7XG4gIGlmICh1bm9wdGltaXplZCkge1xuICAgIHJldHVybiB7IHNyYywgc3JjU2V0OiB1bmRlZmluZWQsIHNpemVzOiB1bmRlZmluZWQgfVxuICB9XG5cbiAgY29uc3QgeyB3aWR0aHMsIGtpbmQgfSA9IGdldFdpZHRocyh3aWR0aCwgbGF5b3V0LCBzaXplcylcbiAgY29uc3QgbGFzdCA9IHdpZHRocy5sZW5ndGggLSAxXG5cbiAgcmV0dXJuIHtcbiAgICBzaXplczogIXNpemVzICYmIGtpbmQgPT09ICd3JyA/ICcxMDB2dycgOiBzaXplcyxcbiAgICBzcmNTZXQ6IHdpZHRoc1xuICAgICAgLm1hcChcbiAgICAgICAgKHcsIGkpID0+XG4gICAgICAgICAgYCR7bG9hZGVyKHsgc3JjLCBxdWFsaXR5LCB3aWR0aDogdyB9KX0gJHtcbiAgICAgICAgICAgIGtpbmQgPT09ICd3JyA/IHcgOiBpICsgMVxuICAgICAgICAgIH0ke2tpbmR9YFxuICAgICAgKVxuICAgICAgLmpvaW4oJywgJyksXG5cbiAgICAvLyBJdCdzIGludGVuZGVkIHRvIGtlZXAgYHNyY2AgdGhlIGxhc3QgYXR0cmlidXRlIGJlY2F1c2UgUmVhY3QgdXBkYXRlc1xuICAgIC8vIGF0dHJpYnV0ZXMgaW4gb3JkZXIuIElmIHdlIGtlZXAgYHNyY2AgdGhlIGZpcnN0IG9uZSwgU2FmYXJpIHdpbGxcbiAgICAvLyBpbW1lZGlhdGVseSBzdGFydCB0byBmZXRjaCBgc3JjYCwgYmVmb3JlIGBzaXplc2AgYW5kIGBzcmNTZXRgIGFyZSBldmVuXG4gICAgLy8gdXBkYXRlZCBieSBSZWFjdC4gVGhhdCBjYXVzZXMgbXVsdGlwbGUgdW5uZWNlc3NhcnkgcmVxdWVzdHMgaWYgYHNyY1NldGBcbiAgICAvLyBhbmQgYHNpemVzYCBhcmUgZGVmaW5lZC5cbiAgICAvLyBUaGlzIGJ1ZyBjYW5ub3QgYmUgcmVwcm9kdWNlZCBpbiBDaHJvbWUgb3IgRmlyZWZveC5cbiAgICBzcmM6IGxvYWRlcih7IHNyYywgcXVhbGl0eSwgd2lkdGg6IHdpZHRoc1tsYXN0XSB9KSxcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRJbnQoeDogdW5rbm93bik6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gIGlmICh0eXBlb2YgeCA9PT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4geFxuICB9XG4gIGlmICh0eXBlb2YgeCA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gcGFyc2VJbnQoeCwgMTApXG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZFxufVxuXG5mdW5jdGlvbiBkZWZhdWx0SW1hZ2VMb2FkZXIobG9hZGVyUHJvcHM6IEltYWdlTG9hZGVyUHJvcHMpIHtcbiAgY29uc3QgbG9hZCA9IGxvYWRlcnMuZ2V0KGNvbmZpZ0xvYWRlcilcbiAgaWYgKGxvYWQpIHtcbiAgICByZXR1cm4gbG9hZCh7IHJvb3Q6IGNvbmZpZ1BhdGgsIC4uLmxvYWRlclByb3BzIH0pXG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKFxuICAgIGBVbmtub3duIFwibG9hZGVyXCIgZm91bmQgaW4gXCJuZXh0LmNvbmZpZy5qc1wiLiBFeHBlY3RlZDogJHtWQUxJRF9MT0FERVJTLmpvaW4oXG4gICAgICAnLCAnXG4gICAgKX0uIFJlY2VpdmVkOiAke2NvbmZpZ0xvYWRlcn1gXG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW1hZ2Uoe1xuICBzcmMsXG4gIHNpemVzLFxuICB1bm9wdGltaXplZCA9IGZhbHNlLFxuICBwcmlvcml0eSA9IGZhbHNlLFxuICBsb2FkaW5nLFxuICBjbGFzc05hbWUsXG4gIHF1YWxpdHksXG4gIHdpZHRoLFxuICBoZWlnaHQsXG4gIG9iamVjdEZpdCxcbiAgb2JqZWN0UG9zaXRpb24sXG4gIGxvYWRlciA9IGRlZmF1bHRJbWFnZUxvYWRlcixcbiAgLi4uYWxsXG59OiBJbWFnZVByb3BzKSB7XG4gIGxldCByZXN0OiBQYXJ0aWFsPEltYWdlUHJvcHM+ID0gYWxsXG4gIGxldCBsYXlvdXQ6IE5vbk51bGxhYmxlPExheW91dFZhbHVlPiA9IHNpemVzID8gJ3Jlc3BvbnNpdmUnIDogJ2ludHJpbnNpYydcbiAgbGV0IHVuc2l6ZWQgPSBmYWxzZVxuICBpZiAoJ3Vuc2l6ZWQnIGluIHJlc3QpIHtcbiAgICB1bnNpemVkID0gQm9vbGVhbihyZXN0LnVuc2l6ZWQpXG4gICAgLy8gUmVtb3ZlIHByb3BlcnR5IHNvIGl0J3Mgbm90IHNwcmVhZCBpbnRvIGltYWdlOlxuICAgIGRlbGV0ZSByZXN0Wyd1bnNpemVkJ11cbiAgfSBlbHNlIGlmICgnbGF5b3V0JyBpbiByZXN0KSB7XG4gICAgLy8gT3ZlcnJpZGUgZGVmYXVsdCBsYXlvdXQgaWYgdGhlIHVzZXIgc3BlY2lmaWVkIG9uZTpcbiAgICBpZiAocmVzdC5sYXlvdXQpIGxheW91dCA9IHJlc3QubGF5b3V0XG5cbiAgICAvLyBSZW1vdmUgcHJvcGVydHkgc28gaXQncyBub3Qgc3ByZWFkIGludG8gaW1hZ2U6XG4gICAgZGVsZXRlIHJlc3RbJ2xheW91dCddXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmICghc3JjKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBJbWFnZSBpcyBtaXNzaW5nIHJlcXVpcmVkIFwic3JjXCIgcHJvcGVydHkuIE1ha2Ugc3VyZSB5b3UgcGFzcyBcInNyY1wiIGluIHByb3BzIHRvIHRoZSBcXGBuZXh0L2ltYWdlXFxgIGNvbXBvbmVudC4gUmVjZWl2ZWQ6ICR7SlNPTi5zdHJpbmdpZnkoXG4gICAgICAgICAgeyB3aWR0aCwgaGVpZ2h0LCBxdWFsaXR5IH1cbiAgICAgICAgKX1gXG4gICAgICApXG4gICAgfVxuICAgIGlmICghVkFMSURfTEFZT1VUX1ZBTFVFUy5pbmNsdWRlcyhsYXlvdXQpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBpbnZhbGlkIFwibGF5b3V0XCIgcHJvcGVydHkuIFByb3ZpZGVkIFwiJHtsYXlvdXR9XCIgc2hvdWxkIGJlIG9uZSBvZiAke1ZBTElEX0xBWU9VVF9WQUxVRVMubWFwKFxuICAgICAgICAgIFN0cmluZ1xuICAgICAgICApLmpvaW4oJywnKX0uYFxuICAgICAgKVxuICAgIH1cbiAgICBpZiAoIVZBTElEX0xPQURJTkdfVkFMVUVTLmluY2x1ZGVzKGxvYWRpbmcpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBpbnZhbGlkIFwibG9hZGluZ1wiIHByb3BlcnR5LiBQcm92aWRlZCBcIiR7bG9hZGluZ31cIiBzaG91bGQgYmUgb25lIG9mICR7VkFMSURfTE9BRElOR19WQUxVRVMubWFwKFxuICAgICAgICAgIFN0cmluZ1xuICAgICAgICApLmpvaW4oJywnKX0uYFxuICAgICAgKVxuICAgIH1cbiAgICBpZiAocHJpb3JpdHkgJiYgbG9hZGluZyA9PT0gJ2xhenknKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBib3RoIFwicHJpb3JpdHlcIiBhbmQgXCJsb2FkaW5nPSdsYXp5J1wiIHByb3BlcnRpZXMuIE9ubHkgb25lIHNob3VsZCBiZSB1c2VkLmBcbiAgICAgIClcbiAgICB9XG4gICAgaWYgKHVuc2l6ZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGRlcHJlY2F0ZWQgXCJ1bnNpemVkXCIgcHJvcGVydHksIHdoaWNoIHdhcyByZW1vdmVkIGluIGZhdm9yIG9mIHRoZSBcImxheW91dD0nZmlsbCdcIiBwcm9wZXJ0eWBcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBsZXQgaXNMYXp5ID1cbiAgICAhcHJpb3JpdHkgJiYgKGxvYWRpbmcgPT09ICdsYXp5JyB8fCB0eXBlb2YgbG9hZGluZyA9PT0gJ3VuZGVmaW5lZCcpXG4gIGlmIChzcmMgJiYgc3JjLnN0YXJ0c1dpdGgoJ2RhdGE6JykpIHtcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVFRQL0Jhc2ljc19vZl9IVFRQL0RhdGFfVVJJc1xuICAgIHVub3B0aW1pemVkID0gdHJ1ZVxuICAgIGlzTGF6eSA9IGZhbHNlXG4gIH1cblxuICBjb25zdCBbc2V0UmVmLCBpc0ludGVyc2VjdGVkXSA9IHVzZUludGVyc2VjdGlvbjxIVE1MSW1hZ2VFbGVtZW50Pih7XG4gICAgcm9vdE1hcmdpbjogJzIwMHB4JyxcbiAgICBkaXNhYmxlZDogIWlzTGF6eSxcbiAgfSlcbiAgY29uc3QgaXNWaXNpYmxlID0gIWlzTGF6eSB8fCBpc0ludGVyc2VjdGVkXG5cbiAgY29uc3Qgd2lkdGhJbnQgPSBnZXRJbnQod2lkdGgpXG4gIGNvbnN0IGhlaWdodEludCA9IGdldEludChoZWlnaHQpXG4gIGNvbnN0IHF1YWxpdHlJbnQgPSBnZXRJbnQocXVhbGl0eSlcblxuICBsZXQgd3JhcHBlclN0eWxlOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddWydzdHlsZSddIHwgdW5kZWZpbmVkXG4gIGxldCBzaXplclN0eWxlOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddWydzdHlsZSddIHwgdW5kZWZpbmVkXG4gIGxldCBzaXplclN2Zzogc3RyaW5nIHwgdW5kZWZpbmVkXG4gIGxldCBpbWdTdHlsZTogSW1nRWxlbWVudFN0eWxlIHwgdW5kZWZpbmVkID0ge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogMCxcbiAgICBsZWZ0OiAwLFxuICAgIGJvdHRvbTogMCxcbiAgICByaWdodDogMCxcblxuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgIHBhZGRpbmc6IDAsXG4gICAgYm9yZGVyOiAnbm9uZScsXG4gICAgbWFyZ2luOiAnYXV0bycsXG5cbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIHdpZHRoOiAwLFxuICAgIGhlaWdodDogMCxcbiAgICBtaW5XaWR0aDogJzEwMCUnLFxuICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgbWluSGVpZ2h0OiAnMTAwJScsXG4gICAgbWF4SGVpZ2h0OiAnMTAwJScsXG5cbiAgICBvYmplY3RGaXQsXG4gICAgb2JqZWN0UG9zaXRpb24sXG4gIH1cbiAgaWYgKFxuICAgIHR5cGVvZiB3aWR0aEludCAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICB0eXBlb2YgaGVpZ2h0SW50ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIGxheW91dCAhPT0gJ2ZpbGwnXG4gICkge1xuICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgLz5cbiAgICBjb25zdCBxdW90aWVudCA9IGhlaWdodEludCAvIHdpZHRoSW50XG4gICAgY29uc3QgcGFkZGluZ1RvcCA9IGlzTmFOKHF1b3RpZW50KSA/ICcxMDAlJyA6IGAke3F1b3RpZW50ICogMTAwfSVgXG4gICAgaWYgKGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnKSB7XG4gICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cInJlc3BvbnNpdmVcIiAvPlxuICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuXG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICBtYXJnaW46IDAsXG4gICAgICB9XG4gICAgICBzaXplclN0eWxlID0geyBkaXNwbGF5OiAnYmxvY2snLCBib3hTaXppbmc6ICdib3JkZXItYm94JywgcGFkZGluZ1RvcCB9XG4gICAgfSBlbHNlIGlmIChsYXlvdXQgPT09ICdpbnRyaW5zaWMnKSB7XG4gICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cImludHJpbnNpY1wiIC8+XG4gICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgfVxuICAgICAgc2l6ZXJTdHlsZSA9IHtcbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICB9XG4gICAgICBzaXplclN2ZyA9IGA8c3ZnIHdpZHRoPVwiJHt3aWR0aEludH1cIiBoZWlnaHQ9XCIke2hlaWdodEludH1cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmVyc2lvbj1cIjEuMVwiLz5gXG4gICAgfSBlbHNlIGlmIChsYXlvdXQgPT09ICdmaXhlZCcpIHtcbiAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwiZml4ZWRcIiAvPlxuICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgIHdpZHRoOiB3aWR0aEludCxcbiAgICAgICAgaGVpZ2h0OiBoZWlnaHRJbnQsXG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKFxuICAgIHR5cGVvZiB3aWR0aEludCA9PT0gJ3VuZGVmaW5lZCcgJiZcbiAgICB0eXBlb2YgaGVpZ2h0SW50ID09PSAndW5kZWZpbmVkJyAmJlxuICAgIGxheW91dCA9PT0gJ2ZpbGwnXG4gICkge1xuICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIGxheW91dD1cImZpbGxcIiAvPlxuICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG5cbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgdG9wOiAwLFxuICAgICAgbGVmdDogMCxcbiAgICAgIGJvdHRvbTogMCxcbiAgICAgIHJpZ2h0OiAwLFxuXG4gICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgIG1hcmdpbjogMCxcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgLz5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBtdXN0IHVzZSBcIndpZHRoXCIgYW5kIFwiaGVpZ2h0XCIgcHJvcGVydGllcyBvciBcImxheW91dD0nZmlsbCdcIiBwcm9wZXJ0eS5gXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgbGV0IGltZ0F0dHJpYnV0ZXM6IEdlbkltZ0F0dHJzUmVzdWx0ID0ge1xuICAgIHNyYzpcbiAgICAgICdkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhBUUFCQUlBQUFBQUFBUC8vL3lINUJBRUFBQUFBTEFBQUFBQUJBQUVBQUFJQlJBQTcnLFxuICAgIHNyY1NldDogdW5kZWZpbmVkLFxuICAgIHNpemVzOiB1bmRlZmluZWQsXG4gIH1cblxuICBpZiAoaXNWaXNpYmxlKSB7XG4gICAgaW1nQXR0cmlidXRlcyA9IGdlbmVyYXRlSW1nQXR0cnMoe1xuICAgICAgc3JjLFxuICAgICAgdW5vcHRpbWl6ZWQsXG4gICAgICBsYXlvdXQsXG4gICAgICB3aWR0aDogd2lkdGhJbnQsXG4gICAgICBxdWFsaXR5OiBxdWFsaXR5SW50LFxuICAgICAgc2l6ZXMsXG4gICAgICBsb2FkZXIsXG4gICAgfSlcbiAgfVxuXG4gIGlmICh1bnNpemVkKSB7XG4gICAgd3JhcHBlclN0eWxlID0gdW5kZWZpbmVkXG4gICAgc2l6ZXJTdHlsZSA9IHVuZGVmaW5lZFxuICAgIGltZ1N0eWxlID0gdW5kZWZpbmVkXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt3cmFwcGVyU3R5bGV9PlxuICAgICAge3NpemVyU3R5bGUgPyAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3NpemVyU3R5bGV9PlxuICAgICAgICAgIHtzaXplclN2ZyA/IChcbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgICAgICAgICAgIGJvcmRlcjogJ25vbmUnLFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgIGFyaWEtaGlkZGVuPXt0cnVlfVxuICAgICAgICAgICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcbiAgICAgICAgICAgICAgc3JjPXtgZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCwke3RvQmFzZTY0KHNpemVyU3ZnKX1gfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogbnVsbH1cbiAgICAgIHshaXNWaXNpYmxlICYmIChcbiAgICAgICAgPG5vc2NyaXB0PlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHsuLi5yZXN0fVxuICAgICAgICAgICAgey4uLmdlbmVyYXRlSW1nQXR0cnMoe1xuICAgICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICAgIHVub3B0aW1pemVkLFxuICAgICAgICAgICAgICBsYXlvdXQsXG4gICAgICAgICAgICAgIHdpZHRoOiB3aWR0aEludCxcbiAgICAgICAgICAgICAgcXVhbGl0eTogcXVhbGl0eUludCxcbiAgICAgICAgICAgICAgc2l6ZXMsXG4gICAgICAgICAgICAgIGxvYWRlcixcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgc3JjPXtzcmN9XG4gICAgICAgICAgICBkZWNvZGluZz1cImFzeW5jXCJcbiAgICAgICAgICAgIHNpemVzPXtzaXplc31cbiAgICAgICAgICAgIHN0eWxlPXtpbWdTdHlsZX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvbm9zY3JpcHQ+XG4gICAgICApfVxuICAgICAgPGltZ1xuICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgey4uLmltZ0F0dHJpYnV0ZXN9XG4gICAgICAgIGRlY29kaW5nPVwiYXN5bmNcIlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgICAgcmVmPXtzZXRSZWZ9XG4gICAgICAgIHN0eWxlPXtpbWdTdHlsZX1cbiAgICAgIC8+XG4gICAgICB7cHJpb3JpdHkgPyAoXG4gICAgICAgIC8vIE5vdGUgaG93IHdlIG9taXQgdGhlIGBocmVmYCBhdHRyaWJ1dGUsIGFzIGl0IHdvdWxkIG9ubHkgYmUgcmVsZXZhbnRcbiAgICAgICAgLy8gZm9yIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgYGltYWdlc3Jjc2V0YCwgYW5kIGluIHRob3NlIGNhc2VzXG4gICAgICAgIC8vIGl0IHdvdWxkIGxpa2VseSBjYXVzZSB0aGUgaW5jb3JyZWN0IGltYWdlIHRvIGJlIHByZWxvYWRlZC5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2Uvc2VtYW50aWNzLmh0bWwjYXR0ci1saW5rLWltYWdlc3Jjc2V0XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICBrZXk9e1xuICAgICAgICAgICAgICAnX19uaW1nLScgK1xuICAgICAgICAgICAgICBpbWdBdHRyaWJ1dGVzLnNyYyArXG4gICAgICAgICAgICAgIGltZ0F0dHJpYnV0ZXMuc3JjU2V0ICtcbiAgICAgICAgICAgICAgaW1nQXR0cmlidXRlcy5zaXplc1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVsPVwicHJlbG9hZFwiXG4gICAgICAgICAgICBhcz1cImltYWdlXCJcbiAgICAgICAgICAgIGhyZWY9e2ltZ0F0dHJpYnV0ZXMuc3JjU2V0ID8gdW5kZWZpbmVkIDogaW1nQXR0cmlidXRlcy5zcmN9XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlOiBpbWFnZXNyY3NldCBpcyBub3QgeWV0IGluIHRoZSBsaW5rIGVsZW1lbnQgdHlwZVxuICAgICAgICAgICAgaW1hZ2VzcmNzZXQ9e2ltZ0F0dHJpYnV0ZXMuc3JjU2V0fVxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZTogaW1hZ2VzaXplcyBpcyBub3QgeWV0IGluIHRoZSBsaW5rIGVsZW1lbnQgdHlwZVxuICAgICAgICAgICAgaW1hZ2VzaXplcz17aW1nQXR0cmlidXRlcy5zaXplc31cbiAgICAgICAgICA+PC9saW5rPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICApIDogbnVsbH1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG4vL0JVSUxUIElOIExPQURFUlNcblxuZnVuY3Rpb24gbm9ybWFsaXplU3JjKHNyYzogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHNyY1swXSA9PT0gJy8nID8gc3JjLnNsaWNlKDEpIDogc3JjXG59XG5cbmZ1bmN0aW9uIGltZ2l4TG9hZGVyKHtcbiAgcm9vdCxcbiAgc3JjLFxuICB3aWR0aCxcbiAgcXVhbGl0eSxcbn06IERlZmF1bHRJbWFnZUxvYWRlclByb3BzKTogc3RyaW5nIHtcbiAgLy8gRGVtbzogaHR0cHM6Ly9zdGF0aWMuaW1naXgubmV0L2RhaXN5LnBuZz9mb3JtYXQ9YXV0byZmaXQ9bWF4Jnc9MzAwXG4gIGNvbnN0IHBhcmFtcyA9IFsnYXV0bz1mb3JtYXQnLCAnZml0PW1heCcsICd3PScgKyB3aWR0aF1cbiAgbGV0IHBhcmFtc1N0cmluZyA9ICcnXG4gIGlmIChxdWFsaXR5KSB7XG4gICAgcGFyYW1zLnB1c2goJ3E9JyArIHF1YWxpdHkpXG4gIH1cblxuICBpZiAocGFyYW1zLmxlbmd0aCkge1xuICAgIHBhcmFtc1N0cmluZyA9ICc/JyArIHBhcmFtcy5qb2luKCcmJylcbiAgfVxuICByZXR1cm4gYCR7cm9vdH0ke25vcm1hbGl6ZVNyYyhzcmMpfSR7cGFyYW1zU3RyaW5nfWBcbn1cblxuZnVuY3Rpb24gYWthbWFpTG9hZGVyKHsgcm9vdCwgc3JjLCB3aWR0aCB9OiBEZWZhdWx0SW1hZ2VMb2FkZXJQcm9wcyk6IHN0cmluZyB7XG4gIHJldHVybiBgJHtyb290fSR7bm9ybWFsaXplU3JjKHNyYyl9P2ltd2lkdGg9JHt3aWR0aH1gXG59XG5cbmZ1bmN0aW9uIGNsb3VkaW5hcnlMb2FkZXIoe1xuICByb290LFxuICBzcmMsXG4gIHdpZHRoLFxuICBxdWFsaXR5LFxufTogRGVmYXVsdEltYWdlTG9hZGVyUHJvcHMpOiBzdHJpbmcge1xuICAvLyBEZW1vOiBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9kZW1vL2ltYWdlL3VwbG9hZC93XzMwMCxjX2xpbWl0LHFfYXV0by90dXJ0bGVzLmpwZ1xuICBjb25zdCBwYXJhbXMgPSBbJ2ZfYXV0bycsICdjX2xpbWl0JywgJ3dfJyArIHdpZHRoLCAncV8nICsgKHF1YWxpdHkgfHwgJ2F1dG8nKV1cbiAgbGV0IHBhcmFtc1N0cmluZyA9IHBhcmFtcy5qb2luKCcsJykgKyAnLydcbiAgcmV0dXJuIGAke3Jvb3R9JHtwYXJhbXNTdHJpbmd9JHtub3JtYWxpemVTcmMoc3JjKX1gXG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRMb2FkZXIoe1xuICByb290LFxuICBzcmMsXG4gIHdpZHRoLFxuICBxdWFsaXR5LFxufTogRGVmYXVsdEltYWdlTG9hZGVyUHJvcHMpOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG1pc3NpbmdWYWx1ZXMgPSBbXVxuXG4gICAgLy8gdGhlc2Ugc2hvdWxkIGFsd2F5cyBiZSBwcm92aWRlZCBidXQgbWFrZSBzdXJlIHRoZXkgYXJlXG4gICAgaWYgKCFzcmMpIG1pc3NpbmdWYWx1ZXMucHVzaCgnc3JjJylcbiAgICBpZiAoIXdpZHRoKSBtaXNzaW5nVmFsdWVzLnB1c2goJ3dpZHRoJylcblxuICAgIGlmIChtaXNzaW5nVmFsdWVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYE5leHQgSW1hZ2UgT3B0aW1pemF0aW9uIHJlcXVpcmVzICR7bWlzc2luZ1ZhbHVlcy5qb2luKFxuICAgICAgICAgICcsICdcbiAgICAgICAgKX0gdG8gYmUgcHJvdmlkZWQuIE1ha2Ugc3VyZSB5b3UgcGFzcyB0aGVtIGFzIHByb3BzIHRvIHRoZSBcXGBuZXh0L2ltYWdlXFxgIGNvbXBvbmVudC4gUmVjZWl2ZWQ6ICR7SlNPTi5zdHJpbmdpZnkoXG4gICAgICAgICAgeyBzcmMsIHdpZHRoLCBxdWFsaXR5IH1cbiAgICAgICAgKX1gXG4gICAgICApXG4gICAgfVxuXG4gICAgaWYgKHNyYy5zdGFydHNXaXRoKCcvLycpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBGYWlsZWQgdG8gcGFyc2Ugc3JjIFwiJHtzcmN9XCIgb24gXFxgbmV4dC9pbWFnZVxcYCwgcHJvdG9jb2wtcmVsYXRpdmUgVVJMICgvLykgbXVzdCBiZSBjaGFuZ2VkIHRvIGFuIGFic29sdXRlIFVSTCAoaHR0cDovLyBvciBodHRwczovLylgXG4gICAgICApXG4gICAgfVxuXG4gICAgaWYgKCFzcmMuc3RhcnRzV2l0aCgnLycpICYmIGNvbmZpZ0RvbWFpbnMpIHtcbiAgICAgIGxldCBwYXJzZWRTcmM6IFVSTFxuICAgICAgdHJ5IHtcbiAgICAgICAgcGFyc2VkU3JjID0gbmV3IFVSTChzcmMpXG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgRmFpbGVkIHRvIHBhcnNlIHNyYyBcIiR7c3JjfVwiIG9uIFxcYG5leHQvaW1hZ2VcXGAsIGlmIHVzaW5nIHJlbGF0aXZlIGltYWdlIGl0IG11c3Qgc3RhcnQgd2l0aCBhIGxlYWRpbmcgc2xhc2ggXCIvXCIgb3IgYmUgYW4gYWJzb2x1dGUgVVJMIChodHRwOi8vIG9yIGh0dHBzOi8vKWBcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBpZiAoIWNvbmZpZ0RvbWFpbnMuaW5jbHVkZXMocGFyc2VkU3JjLmhvc3RuYW1lKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYEludmFsaWQgc3JjIHByb3AgKCR7c3JjfSkgb24gXFxgbmV4dC9pbWFnZVxcYCwgaG9zdG5hbWUgXCIke3BhcnNlZFNyYy5ob3N0bmFtZX1cIiBpcyBub3QgY29uZmlndXJlZCB1bmRlciBpbWFnZXMgaW4geW91ciBcXGBuZXh0LmNvbmZpZy5qc1xcYFxcbmAgK1xuICAgICAgICAgICAgYFNlZSBtb3JlIGluZm86IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL25leHQtaW1hZ2UtdW5jb25maWd1cmVkLWhvc3RgXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gYCR7cm9vdH0/dXJsPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHNyYyl9Jnc9JHt3aWR0aH0mcT0ke3F1YWxpdHkgfHwgNzV9YFxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIGFkZEJhc2VQYXRoLFxuICBhZGRMb2NhbGUsXG4gIGdldERvbWFpbkxvY2FsZSxcbiAgaXNMb2NhbFVSTCxcbiAgTmV4dFJvdXRlcixcbiAgUHJlZmV0Y2hPcHRpb25zLFxuICByZXNvbHZlSHJlZixcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcbmltcG9ydCB7IHVzZUludGVyc2VjdGlvbiB9IGZyb20gJy4vdXNlLWludGVyc2VjdGlvbidcblxudHlwZSBVcmwgPSBzdHJpbmcgfCBVcmxPYmplY3RcbnR5cGUgUmVxdWlyZWRLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBuZXZlciA6IEtcbn1ba2V5b2YgVF1cbnR5cGUgT3B0aW9uYWxLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBLIDogbmV2ZXJcbn1ba2V5b2YgVF1cblxuZXhwb3J0IHR5cGUgTGlua1Byb3BzID0ge1xuICBocmVmOiBVcmxcbiAgYXM/OiBVcmxcbiAgcmVwbGFjZT86IGJvb2xlYW5cbiAgc2Nyb2xsPzogYm9vbGVhblxuICBzaGFsbG93PzogYm9vbGVhblxuICBwYXNzSHJlZj86IGJvb2xlYW5cbiAgcHJlZmV0Y2g/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG59XG50eXBlIExpbmtQcm9wc1JlcXVpcmVkID0gUmVxdWlyZWRLZXlzPExpbmtQcm9wcz5cbnR5cGUgTGlua1Byb3BzT3B0aW9uYWwgPSBPcHRpb25hbEtleXM8TGlua1Byb3BzPlxuXG5jb25zdCBwcmVmZXRjaGVkOiB7IFtjYWNoZUtleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge31cblxuZnVuY3Rpb24gcHJlZmV0Y2goXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBvcHRpb25zPzogUHJlZmV0Y2hPcHRpb25zXG4pOiB2b2lkIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8ICFyb3V0ZXIpIHJldHVyblxuICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICByb3V0ZXIucHJlZmV0Y2goaHJlZiwgYXMsIG9wdGlvbnMpLmNhdGNoKChlcnIpID0+IHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9KVxuICBjb25zdCBjdXJMb2NhbGUgPVxuICAgIG9wdGlvbnMgJiYgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgPyBvcHRpb25zLmxvY2FsZVxuICAgICAgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZVxuXG4gIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzICsgKGN1ckxvY2FsZSA/ICclJyArIGN1ckxvY2FsZSA6ICcnKV0gPSB0cnVlXG59XG5cbmZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudDogUmVhY3QuTW91c2VFdmVudCk6IGJvb2xlYW4ge1xuICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudFxuICByZXR1cm4gKFxuICAgICh0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnKSB8fFxuICAgIGV2ZW50Lm1ldGFLZXkgfHxcbiAgICBldmVudC5jdHJsS2V5IHx8XG4gICAgZXZlbnQuc2hpZnRLZXkgfHxcbiAgICBldmVudC5hbHRLZXkgfHwgLy8gdHJpZ2dlcnMgcmVzb3VyY2UgZG93bmxvYWRcbiAgICAoZXZlbnQubmF0aXZlRXZlbnQgJiYgZXZlbnQubmF0aXZlRXZlbnQud2hpY2ggPT09IDIpXG4gIClcbn1cblxuZnVuY3Rpb24gbGlua0NsaWNrZWQoXG4gIGU6IFJlYWN0Lk1vdXNlRXZlbnQsXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICByZXBsYWNlPzogYm9vbGVhbixcbiAgc2hhbGxvdz86IGJvb2xlYW4sXG4gIHNjcm9sbD86IGJvb2xlYW4sXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG4pOiB2b2lkIHtcbiAgY29uc3QgeyBub2RlTmFtZSB9ID0gZS5jdXJyZW50VGFyZ2V0XG5cbiAgaWYgKG5vZGVOYW1lID09PSAnQScgJiYgKGlzTW9kaWZpZWRFdmVudChlKSB8fCAhaXNMb2NhbFVSTChocmVmKSkpIHtcbiAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbiAgICByZXR1cm5cbiAgfVxuXG4gIGUucHJldmVudERlZmF1bHQoKVxuXG4gIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICBpZiAoc2Nyb2xsID09IG51bGwpIHtcbiAgICBzY3JvbGwgPSBhcy5pbmRleE9mKCcjJykgPCAwXG4gIH1cblxuICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgcm91dGVyW3JlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7XG4gICAgc2hhbGxvdyxcbiAgICBsb2NhbGUsXG4gICAgc2Nyb2xsLFxuICB9KVxufVxuXG5mdW5jdGlvbiBMaW5rKHByb3BzOiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjxMaW5rUHJvcHM+KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3M6IHtcbiAgICAgIGtleTogc3RyaW5nXG4gICAgICBleHBlY3RlZDogc3RyaW5nXG4gICAgICBhY3R1YWw6IHN0cmluZ1xuICAgIH0pIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAgICAgIGBGYWlsZWQgcHJvcCB0eXBlOiBUaGUgcHJvcCBcXGAke2FyZ3Mua2V5fVxcYCBleHBlY3RzIGEgJHthcmdzLmV4cGVjdGVkfSBpbiBcXGA8TGluaz5cXGAsIGJ1dCBnb3QgXFxgJHthcmdzLmFjdHVhbH1cXGAgaW5zdGVhZC5gICtcbiAgICAgICAgICAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgID8gXCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiXG4gICAgICAgICAgICA6ICcnKVxuICAgICAgKVxuICAgIH1cblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzUmVxdWlyZWQsIHRydWU+ID0ge1xuICAgICAgaHJlZjogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wczogTGlua1Byb3BzUmVxdWlyZWRbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgcmVxdWlyZWRQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNSZXF1aXJlZFtdXG4gICAgcmVxdWlyZWRQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc1JlcXVpcmVkKSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSAnaHJlZicpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzW2tleV0gPT0gbnVsbCB8fFxuICAgICAgICAgICh0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnKVxuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHByb3BzW2tleV0gPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzT3B0aW9uYWwsIHRydWU+ID0ge1xuICAgICAgYXM6IHRydWUsXG4gICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgc2Nyb2xsOiB0cnVlLFxuICAgICAgc2hhbGxvdzogdHJ1ZSxcbiAgICAgIHBhc3NIcmVmOiB0cnVlLFxuICAgICAgcHJlZmV0Y2g6IHRydWUsXG4gICAgICBsb2NhbGU6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHM6IExpbmtQcm9wc09wdGlvbmFsW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIG9wdGlvbmFsUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzT3B0aW9uYWxbXVxuICAgIG9wdGlvbmFsUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNPcHRpb25hbCkgPT4ge1xuICAgICAgY29uc3QgdmFsVHlwZSA9IHR5cGVvZiBwcm9wc1trZXldXG5cbiAgICAgIGlmIChrZXkgPT09ICdhcycpIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycgJiYgdmFsVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdsb2NhbGUnKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2AnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGtleSA9PT0gJ3JlcGxhY2UnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Njcm9sbCcgfHxcbiAgICAgICAga2V5ID09PSAnc2hhbGxvdycgfHxcbiAgICAgICAga2V5ID09PSAncGFzc0hyZWYnIHx8XG4gICAgICAgIGtleSA9PT0gJ3ByZWZldGNoJ1xuICAgICAgKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICE9IG51bGwgJiYgdmFsVHlwZSAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYGJvb2xlYW5gJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgY29uc3QgaGFzV2FybmVkID0gUmVhY3QudXNlUmVmKGZhbHNlKVxuICAgIGlmIChwcm9wcy5wcmVmZXRjaCAmJiAhaGFzV2FybmVkLmN1cnJlbnQpIHtcbiAgICAgIGhhc1dhcm5lZC5jdXJyZW50ID0gdHJ1ZVxuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnXG4gICAgICApXG4gICAgfVxuICB9XG4gIGNvbnN0IHAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2VcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBwYXRobmFtZSA9IChyb3V0ZXIgJiYgcm91dGVyLnBhdGhuYW1lKSB8fCAnLydcblxuICBjb25zdCB7IGhyZWYsIGFzIH0gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5ocmVmLCB0cnVlKVxuICAgIHJldHVybiB7XG4gICAgICBocmVmOiByZXNvbHZlZEhyZWYsXG4gICAgICBhczogcHJvcHMuYXNcbiAgICAgICAgPyByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuYXMpXG4gICAgICAgIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWYsXG4gICAgfVxuICB9LCBbcGF0aG5hbWUsIHByb3BzLmhyZWYsIHByb3BzLmFzXSlcblxuICBsZXQgeyBjaGlsZHJlbiwgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUgfSA9IHByb3BzXG5cbiAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgY2hpbGRyZW4gPSA8YT57Y2hpbGRyZW59PC9hPlxuICB9XG5cbiAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gIGNvbnN0IGNoaWxkOiBhbnkgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICBjb25zdCBjaGlsZFJlZjogYW55ID0gY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWZcblxuICBjb25zdCBbc2V0SW50ZXJzZWN0aW9uUmVmLCBpc1Zpc2libGVdID0gdXNlSW50ZXJzZWN0aW9uKHtcbiAgICByb290TWFyZ2luOiAnMjAwcHgnLFxuICB9KVxuICBjb25zdCBzZXRSZWYgPSBSZWFjdC51c2VDYWxsYmFjayhcbiAgICAoZWw6IEVsZW1lbnQpID0+IHtcbiAgICAgIHNldEludGVyc2VjdGlvblJlZihlbClcbiAgICAgIGlmIChjaGlsZFJlZikge1xuICAgICAgICBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZFJlZihlbClcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGNoaWxkUmVmLmN1cnJlbnQgPSBlbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBbY2hpbGRSZWYsIHNldEludGVyc2VjdGlvblJlZl1cbiAgKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHNob3VsZFByZWZldGNoID0gaXNWaXNpYmxlICYmIHAgJiYgaXNMb2NhbFVSTChocmVmKVxuICAgIGNvbnN0IGN1ckxvY2FsZSA9XG4gICAgICB0eXBlb2YgbG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlXG4gICAgY29uc3QgaXNQcmVmZXRjaGVkID1cbiAgICAgIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzICsgKGN1ckxvY2FsZSA/ICclJyArIGN1ckxvY2FsZSA6ICcnKV1cbiAgICBpZiAoc2hvdWxkUHJlZmV0Y2ggJiYgIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywge1xuICAgICAgICBsb2NhbGU6IGN1ckxvY2FsZSxcbiAgICAgIH0pXG4gICAgfVxuICB9LCBbYXMsIGhyZWYsIGlzVmlzaWJsZSwgbG9jYWxlLCBwLCByb3V0ZXJdKVxuXG4gIGNvbnN0IGNoaWxkUHJvcHM6IHtcbiAgICBvbk1vdXNlRW50ZXI/OiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIG9uQ2xpY2s6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgaHJlZj86IHN0cmluZ1xuICAgIHJlZj86IGFueVxuICB9ID0ge1xuICAgIHJlZjogc2V0UmVmLFxuICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKVxuICAgICAgfVxuICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUpXG4gICAgICB9XG4gICAgfSxcbiAgfVxuXG4gIGNoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSlcbiAgICB9XG4gICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywgeyBwcmlvcml0eTogdHJ1ZSB9KVxuICB9XG5cbiAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICBpZiAocHJvcHMucGFzc0hyZWYgfHwgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpKSB7XG4gICAgY29uc3QgY3VyTG9jYWxlID1cbiAgICAgIHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGVcblxuICAgIC8vIHdlIG9ubHkgcmVuZGVyIGRvbWFpbiBsb2NhbGVzIGlmIHdlIGFyZSBjdXJyZW50bHkgb24gYSBkb21haW4gbG9jYWxlXG4gICAgLy8gc28gdGhhdCBsb2NhbGUgbGlua3MgYXJlIHN0aWxsIHZpc2l0YWJsZSBpbiBkZXZlbG9wbWVudC9wcmV2aWV3IGVudnNcbiAgICBjb25zdCBsb2NhbGVEb21haW4gPVxuICAgICAgcm91dGVyICYmXG4gICAgICByb3V0ZXIuaXNMb2NhbGVEb21haW4gJiZcbiAgICAgIGdldERvbWFpbkxvY2FsZShcbiAgICAgICAgYXMsXG4gICAgICAgIGN1ckxvY2FsZSxcbiAgICAgICAgcm91dGVyICYmIHJvdXRlci5sb2NhbGVzLFxuICAgICAgICByb3V0ZXIgJiYgcm91dGVyLmRvbWFpbkxvY2FsZXNcbiAgICAgIClcblxuICAgIGNoaWxkUHJvcHMuaHJlZiA9XG4gICAgICBsb2NhbGVEb21haW4gfHxcbiAgICAgIGFkZEJhc2VQYXRoKGFkZExvY2FsZShhcywgY3VyTG9jYWxlLCByb3V0ZXIgJiYgcm91dGVyLmRlZmF1bHRMb2NhbGUpKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcylcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiLyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aFxufVxuXG4vKipcbiAqIE5vcm1hbGl6ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBhY2NvcmRpbmcgdG8gdGhlIGB0cmFpbGluZ1NsYXNoYCBvcHRpb25cbiAqIGluIGBuZXh0LmNvbmZpZy5qc2AuXG4gKi9cbmV4cG9ydCBjb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSFxuICA/IChwYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKVxuICAgICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nXG4gICAgICB9XG4gICAgfVxuICA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoXG4iLCJ0eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGUgPSBhbnlcbnR5cGUgUmVxdWVzdElkbGVDYWxsYmFja09wdGlvbnMgPSB7XG4gIHRpbWVvdXQ6IG51bWJlclxufVxudHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUgPSB7XG4gIHJlYWRvbmx5IGRpZFRpbWVvdXQ6IGJvb2xlYW5cbiAgdGltZVJlbWFpbmluZzogKCkgPT4gbnVtYmVyXG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgcmVxdWVzdElkbGVDYWxsYmFjazogKFxuICAgICAgY2FsbGJhY2s6IChkZWFkbGluZTogUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lKSA9PiB2b2lkLFxuICAgICAgb3B0cz86IFJlcXVlc3RJZGxlQ2FsbGJhY2tPcHRpb25zXG4gICAgKSA9PiBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlXG4gICAgY2FuY2VsSWRsZUNhbGxiYWNrOiAoaWQ6IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGUpID0+IHZvaWRcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgcmVxdWVzdElkbGVDYWxsYmFjayA9XG4gICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrKSB8fFxuICBmdW5jdGlvbiAoXG4gICAgY2I6IChkZWFkbGluZTogUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lKSA9PiB2b2lkXG4gICk6IE5vZGVKUy5UaW1lb3V0IHtcbiAgICBsZXQgc3RhcnQgPSBEYXRlLm5vdygpXG4gICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgY2Ioe1xuICAgICAgICBkaWRUaW1lb3V0OiBmYWxzZSxcbiAgICAgICAgdGltZVJlbWFpbmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBNYXRoLm1heCgwLCA1MCAtIChEYXRlLm5vdygpIC0gc3RhcnQpKVxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICB9LCAxKVxuICB9XG5cbmV4cG9ydCBjb25zdCBjYW5jZWxJZGxlQ2FsbGJhY2sgPVxuICAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrKSB8fFxuICBmdW5jdGlvbiAoaWQ6IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGUpIHtcbiAgICByZXR1cm4gY2xlYXJUaW1lb3V0KGlkKVxuICB9XG4iLCJpbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBDbGllbnRCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vYnVpbGQvd2VicGFjay9wbHVnaW5zL2J1aWxkLW1hbmlmZXN0LXBsdWdpbidcbmltcG9ydCBnZXRBc3NldFBhdGhGcm9tUm91dGUgZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlJ1xuaW1wb3J0IHsgcmVxdWVzdElkbGVDYWxsYmFjayB9IGZyb20gJy4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrJ1xuXG4vLyAzLjhzIHdhcyBhcmJpdHJhcmlseSBjaG9zZW4gYXMgaXQncyB3aGF0IGh0dHBzOi8vd2ViLmRldi9pbnRlcmFjdGl2ZVxuLy8gY29uc2lkZXJzIGFzIFwiR29vZFwiIHRpbWUtdG8taW50ZXJhY3RpdmUuIFdlIG11c3QgYXNzdW1lIHNvbWV0aGluZyB3ZW50XG4vLyB3cm9uZyBiZXlvbmQgdGhpcyBwb2ludCwgYW5kIHRoZW4gZmFsbC1iYWNrIHRvIGEgZnVsbCBwYWdlIHRyYW5zaXRpb24gdG9cbi8vIHNob3cgdGhlIHVzZXIgc29tZXRoaW5nIG9mIHZhbHVlLlxuY29uc3QgTVNfTUFYX0lETEVfREVMQVkgPSAzODAwXG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgX19CVUlMRF9NQU5JRkVTVD86IENsaWVudEJ1aWxkTWFuaWZlc3RcbiAgICBfX0JVSUxEX01BTklGRVNUX0NCPzogRnVuY3Rpb25cbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZEVudHJ5cG9pbnRTdWNjZXNzIHtcbiAgY29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIGV4cG9ydHM6IGFueVxufVxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRFbnRyeXBvaW50RmFpbHVyZSB7XG4gIGVycm9yOiB1bmtub3duXG59XG5leHBvcnQgdHlwZSBSb3V0ZUVudHJ5cG9pbnQgPSBMb2FkZWRFbnRyeXBvaW50U3VjY2VzcyB8IExvYWRlZEVudHJ5cG9pbnRGYWlsdXJlXG5cbmV4cG9ydCBpbnRlcmZhY2UgUm91dGVTdHlsZVNoZWV0IHtcbiAgaHJlZjogc3RyaW5nXG4gIGNvbnRlbnQ6IHN0cmluZ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZFJvdXRlU3VjY2VzcyBleHRlbmRzIExvYWRlZEVudHJ5cG9pbnRTdWNjZXNzIHtcbiAgc3R5bGVzOiBSb3V0ZVN0eWxlU2hlZXRbXVxufVxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRSb3V0ZUZhaWx1cmUge1xuICBlcnJvcjogdW5rbm93blxufVxuZXhwb3J0IHR5cGUgUm91dGVMb2FkZXJFbnRyeSA9IExvYWRlZFJvdXRlU3VjY2VzcyB8IExvYWRlZFJvdXRlRmFpbHVyZVxuXG5leHBvcnQgdHlwZSBGdXR1cmU8Vj4gPSB7XG4gIHJlc29sdmU6IChlbnRyeXBvaW50OiBWKSA9PiB2b2lkXG4gIGZ1dHVyZTogUHJvbWlzZTxWPlxufVxuZnVuY3Rpb24gd2l0aEZ1dHVyZTxUPihcbiAga2V5OiBzdHJpbmcsXG4gIG1hcDogTWFwPHN0cmluZywgRnV0dXJlPFQ+IHwgVD4sXG4gIGdlbmVyYXRvcj86ICgpID0+IFByb21pc2U8VD5cbik6IFByb21pc2U8VD4ge1xuICBsZXQgZW50cnk6IEZ1dHVyZTxUPiB8IFQgfCB1bmRlZmluZWQgPSBtYXAuZ2V0KGtleSlcbiAgaWYgKGVudHJ5KSB7XG4gICAgaWYgKCdmdXR1cmUnIGluIGVudHJ5KSB7XG4gICAgICByZXR1cm4gZW50cnkuZnV0dXJlXG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZW50cnkpXG4gIH1cbiAgbGV0IHJlc29sdmVyOiAoZW50cnlwb2ludDogVCkgPT4gdm9pZFxuICBjb25zdCBwcm9tOiBQcm9taXNlPFQ+ID0gbmV3IFByb21pc2U8VD4oKHJlc29sdmUpID0+IHtcbiAgICByZXNvbHZlciA9IHJlc29sdmVcbiAgfSlcbiAgbWFwLnNldChrZXksIChlbnRyeSA9IHsgcmVzb2x2ZTogcmVzb2x2ZXIhLCBmdXR1cmU6IHByb20gfSkpXG4gIHJldHVybiBnZW5lcmF0b3JcbiAgICA/IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgIGdlbmVyYXRvcigpLnRoZW4oKHZhbHVlKSA9PiAocmVzb2x2ZXIodmFsdWUpLCB2YWx1ZSkpXG4gICAgOiBwcm9tXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUm91dGVMb2FkZXIge1xuICB3aGVuRW50cnlwb2ludChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxSb3V0ZUVudHJ5cG9pbnQ+XG4gIG9uRW50cnlwb2ludChyb3V0ZTogc3RyaW5nLCBleGVjdXRlOiAoKSA9PiB1bmtub3duKTogdm9pZFxuICBsb2FkUm91dGUocm91dGU6IHN0cmluZywgcHJlZmV0Y2g/OiBib29sZWFuKTogUHJvbWlzZTxSb3V0ZUxvYWRlckVudHJ5PlxuICBwcmVmZXRjaChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPlxufVxuXG5mdW5jdGlvbiBoYXNQcmVmZXRjaChsaW5rPzogSFRNTExpbmtFbGVtZW50KTogYm9vbGVhbiB7XG4gIHRyeSB7XG4gICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKVxuICAgIHJldHVybiAoXG4gICAgICAvLyBkZXRlY3QgSUUxMSBzaW5jZSBpdCBzdXBwb3J0cyBwcmVmZXRjaCBidXQgaXNuJ3QgZGV0ZWN0ZWRcbiAgICAgIC8vIHdpdGggcmVsTGlzdC5zdXBwb3J0XG4gICAgICAoISF3aW5kb3cuTVNJbnB1dE1ldGhvZENvbnRleHQgJiYgISEoZG9jdW1lbnQgYXMgYW55KS5kb2N1bWVudE1vZGUpIHx8XG4gICAgICBsaW5rLnJlbExpc3Quc3VwcG9ydHMoJ3ByZWZldGNoJylcbiAgICApXG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbmNvbnN0IGNhblByZWZldGNoOiBib29sZWFuID0gaGFzUHJlZmV0Y2goKVxuXG5mdW5jdGlvbiBwcmVmZXRjaFZpYURvbShcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBsaW5rPzogSFRNTExpbmtFbGVtZW50XG4pOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxpbmtbcmVsPVwicHJlZmV0Y2hcIl1baHJlZl49XCIke2hyZWZ9XCJdYCkpIHtcbiAgICAgIHJldHVybiByZXMoKVxuICAgIH1cblxuICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJylcblxuICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWw6XG4gICAgaWYgKGFzKSBsaW5rIS5hcyA9IGFzXG4gICAgbGluayEucmVsID0gYHByZWZldGNoYFxuICAgIGxpbmshLmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTiFcbiAgICBsaW5rIS5vbmxvYWQgPSByZXNcbiAgICBsaW5rIS5vbmVycm9yID0gcmVqXG5cbiAgICAvLyBgaHJlZmAgc2hvdWxkIGFsd2F5cyBiZSBsYXN0OlxuICAgIGxpbmshLmhyZWYgPSBocmVmXG5cbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspXG4gIH0pXG59XG5cbmNvbnN0IEFTU0VUX0xPQURfRVJST1IgPSBTeW1ib2woJ0FTU0VUX0xPQURfRVJST1InKVxuLy8gVE9ETzogdW5leHBvcnRcbmV4cG9ydCBmdW5jdGlvbiBtYXJrQXNzZXRFcnJvcihlcnI6IEVycm9yKTogRXJyb3Ige1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgQVNTRVRfTE9BRF9FUlJPUiwge30pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0Fzc2V0RXJyb3IoZXJyPzogRXJyb3IpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgcmV0dXJuIGVyciAmJiBBU1NFVF9MT0FEX0VSUk9SIGluIGVyclxufVxuXG5mdW5jdGlvbiBhcHBlbmRTY3JpcHQoXG4gIHNyYzogc3RyaW5nLFxuICBzY3JpcHQ/OiBIVE1MU2NyaXB0RWxlbWVudFxuKTogUHJvbWlzZTx1bmtub3duPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0JylcblxuICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWwuXG4gICAgLy8gMS4gU2V0dXAgc3VjY2Vzcy9mYWlsdXJlIGhvb2tzIGluIGNhc2UgdGhlIGJyb3dzZXIgc3luY2hyb25vdXNseVxuICAgIC8vICAgIGV4ZWN1dGVzIHdoZW4gYHNyY2AgaXMgc2V0LlxuICAgIHNjcmlwdC5vbmxvYWQgPSByZXNvbHZlXG4gICAgc2NyaXB0Lm9uZXJyb3IgPSAoKSA9PlxuICAgICAgcmVqZWN0KG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc2NyaXB0OiAke3NyY31gKSkpXG5cbiAgICAvLyAyLiBDb25maWd1cmUgdGhlIGNyb3NzLW9yaWdpbiBhdHRyaWJ1dGUgYmVmb3JlIHNldHRpbmcgYHNyY2AgaW4gY2FzZSB0aGVcbiAgICAvLyAgICBicm93c2VyIGJlZ2lucyB0byBmZXRjaC5cbiAgICBzY3JpcHQuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOIVxuXG4gICAgLy8gMy4gRmluYWxseSwgc2V0IHRoZSBzb3VyY2UgYW5kIGluamVjdCBpbnRvIHRoZSBET00gaW4gY2FzZSB0aGUgY2hpbGRcbiAgICAvLyAgICBtdXN0IGJlIGFwcGVuZGVkIGZvciBmZXRjaGluZyB0byBzdGFydC5cbiAgICBzY3JpcHQuc3JjID0gc3JjXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpXG4gIH0pXG59XG5cbi8vIFJlc29sdmUgYSBwcm9taXNlIHRoYXQgdGltZXMgb3V0IGFmdGVyIGdpdmVuIGFtb3VudCBvZiBtaWxsaXNlY29uZHMuXG5mdW5jdGlvbiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0PFQ+KFxuICBwOiBQcm9taXNlPFQ+LFxuICBtczogbnVtYmVyLFxuICBlcnI6IEVycm9yXG4pOiBQcm9taXNlPFQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcblxuICAgIHAudGhlbigocikgPT4ge1xuICAgICAgLy8gUmVzb2x2ZWQsIGNhbmNlbCB0aGUgdGltZW91dFxuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgcmVzb2x2ZShyKVxuICAgIH0pLmNhdGNoKHJlamVjdClcblxuICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpZiAoIWNhbmNlbGxlZCkge1xuICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgIH1cbiAgICAgIH0sIG1zKVxuICAgIClcbiAgfSlcbn1cblxuLy8gVE9ETzogc3RvcCBleHBvcnRpbmcgb3IgY2FjaGUgdGhlIGZhaWx1cmVcbi8vIEl0J2QgYmUgYmVzdCB0byBzdG9wIGV4cG9ydGluZyB0aGlzLiBJdCdzIGFuIGltcGxlbWVudGF0aW9uIGRldGFpbC4gV2UncmVcbi8vIG9ubHkgZXhwb3J0aW5nIGl0IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbHR5IHdpdGggdGhlIGBwYWdlLWxvYWRlcmAuXG4vLyBPbmx5IGNhY2hlIHRoaXMgcmVzcG9uc2UgYXMgYSBsYXN0IHJlc29ydCBpZiB3ZSBjYW5ub3QgZWxpbWluYXRlIGFsbCBvdGhlclxuLy8gY29kZSBicmFuY2hlcyB0aGF0IHVzZSB0aGUgQnVpbGQgTWFuaWZlc3QgQ2FsbGJhY2sgYW5kIHB1c2ggdGhlbSB0aHJvdWdoXG4vLyB0aGUgUm91dGUgTG9hZGVyIGludGVyZmFjZS5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCk6IFByb21pc2U8Q2xpZW50QnVpbGRNYW5pZmVzdD4ge1xuICBpZiAoc2VsZi5fX0JVSUxEX01BTklGRVNUKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpXG4gIH1cblxuICBjb25zdCBvbkJ1aWxkTWFuaWZlc3Q6IFByb21pc2U8Q2xpZW50QnVpbGRNYW5pZmVzdD4gPSBuZXcgUHJvbWlzZTxcbiAgICBDbGllbnRCdWlsZE1hbmlmZXN0XG4gID4oKHJlc29sdmUpID0+IHtcbiAgICAvLyBNYW5kYXRvcnkgYmVjYXVzZSB0aGlzIGlzIG5vdCBjb25jdXJyZW50IHNhZmU6XG4gICAgY29uc3QgY2IgPSBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0JcbiAgICBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0IgPSAoKSA9PiB7XG4gICAgICByZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVCEpXG4gICAgICBjYiAmJiBjYigpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0PENsaWVudEJ1aWxkTWFuaWZlc3Q+KFxuICAgIG9uQnVpbGRNYW5pZmVzdCxcbiAgICBNU19NQVhfSURMRV9ERUxBWSxcbiAgICBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoJ0ZhaWxlZCB0byBsb2FkIGNsaWVudCBidWlsZCBtYW5pZmVzdCcpKVxuICApXG59XG5cbmludGVyZmFjZSBSb3V0ZUZpbGVzIHtcbiAgc2NyaXB0czogc3RyaW5nW11cbiAgY3NzOiBzdHJpbmdbXVxufVxuZnVuY3Rpb24gZ2V0RmlsZXNGb3JSb3V0ZShcbiAgYXNzZXRQcmVmaXg6IHN0cmluZyxcbiAgcm91dGU6IHN0cmluZ1xuKTogUHJvbWlzZTxSb3V0ZUZpbGVzPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoe1xuICAgICAgc2NyaXB0czogW1xuICAgICAgICBhc3NldFByZWZpeCArXG4gICAgICAgICAgJy9fbmV4dC9zdGF0aWMvY2h1bmtzL3BhZ2VzJyArXG4gICAgICAgICAgZW5jb2RlVVJJKGdldEFzc2V0UGF0aEZyb21Sb3V0ZShyb3V0ZSwgJy5qcycpKSxcbiAgICAgIF0sXG4gICAgICAvLyBTdHlsZXMgYXJlIGhhbmRsZWQgYnkgYHN0eWxlLWxvYWRlcmAgaW4gZGV2ZWxvcG1lbnQ6XG4gICAgICBjc3M6IFtdLFxuICAgIH0pXG4gIH1cbiAgcmV0dXJuIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKS50aGVuKChtYW5pZmVzdCkgPT4ge1xuICAgIGlmICghKHJvdXRlIGluIG1hbmlmZXN0KSkge1xuICAgICAgdGhyb3cgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9va3VwIHJvdXRlOiAke3JvdXRlfWApKVxuICAgIH1cbiAgICBjb25zdCBhbGxGaWxlcyA9IG1hbmlmZXN0W3JvdXRlXS5tYXAoXG4gICAgICAoZW50cnkpID0+IGFzc2V0UHJlZml4ICsgJy9fbmV4dC8nICsgZW5jb2RlVVJJKGVudHJ5KVxuICAgIClcbiAgICByZXR1cm4ge1xuICAgICAgc2NyaXB0czogYWxsRmlsZXMuZmlsdGVyKCh2KSA9PiB2LmVuZHNXaXRoKCcuanMnKSksXG4gICAgICBjc3M6IGFsbEZpbGVzLmZpbHRlcigodikgPT4gdi5lbmRzV2l0aCgnLmNzcycpKSxcbiAgICB9XG4gIH0pXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlTG9hZGVyKGFzc2V0UHJlZml4OiBzdHJpbmcpOiBSb3V0ZUxvYWRlciB7XG4gIGNvbnN0IGVudHJ5cG9pbnRzOiBNYXA8XG4gICAgc3RyaW5nLFxuICAgIEZ1dHVyZTxSb3V0ZUVudHJ5cG9pbnQ+IHwgUm91dGVFbnRyeXBvaW50XG4gID4gPSBuZXcgTWFwKClcbiAgY29uc3QgbG9hZGVkU2NyaXB0czogTWFwPHN0cmluZywgUHJvbWlzZTx1bmtub3duPj4gPSBuZXcgTWFwKClcbiAgY29uc3Qgc3R5bGVTaGVldHM6IE1hcDxzdHJpbmcsIFByb21pc2U8Um91dGVTdHlsZVNoZWV0Pj4gPSBuZXcgTWFwKClcbiAgY29uc3Qgcm91dGVzOiBNYXA8XG4gICAgc3RyaW5nLFxuICAgIEZ1dHVyZTxSb3V0ZUxvYWRlckVudHJ5PiB8IFJvdXRlTG9hZGVyRW50cnlcbiAgPiA9IG5ldyBNYXAoKVxuXG4gIGZ1bmN0aW9uIG1heWJlRXhlY3V0ZVNjcmlwdChzcmM6IHN0cmluZyk6IFByb21pc2U8dW5rbm93bj4ge1xuICAgIGxldCBwcm9tOiBQcm9taXNlPHVua25vd24+IHwgdW5kZWZpbmVkID0gbG9hZGVkU2NyaXB0cy5nZXQoc3JjKVxuICAgIGlmIChwcm9tKSB7XG4gICAgICByZXR1cm4gcHJvbVxuICAgIH1cblxuICAgIC8vIFNraXAgZXhlY3V0aW5nIHNjcmlwdCBpZiBpdCdzIGFscmVhZHkgaW4gdGhlIERPTTpcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihgc2NyaXB0W3NyY149XCIke3NyY31cIl1gKSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gICAgfVxuXG4gICAgbG9hZGVkU2NyaXB0cy5zZXQoc3JjLCAocHJvbSA9IGFwcGVuZFNjcmlwdChzcmMpKSlcbiAgICByZXR1cm4gcHJvbVxuICB9XG5cbiAgZnVuY3Rpb24gZmV0Y2hTdHlsZVNoZWV0KGhyZWY6IHN0cmluZyk6IFByb21pc2U8Um91dGVTdHlsZVNoZWV0PiB7XG4gICAgbGV0IHByb206IFByb21pc2U8Um91dGVTdHlsZVNoZWV0PiB8IHVuZGVmaW5lZCA9IHN0eWxlU2hlZXRzLmdldChocmVmKVxuICAgIGlmIChwcm9tKSB7XG4gICAgICByZXR1cm4gcHJvbVxuICAgIH1cblxuICAgIHN0eWxlU2hlZXRzLnNldChcbiAgICAgIGhyZWYsXG4gICAgICAocHJvbSA9IGZldGNoKGhyZWYpXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdHlsZXNoZWV0OiAke2hyZWZ9YClcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHJlcy50ZXh0KCkudGhlbigodGV4dCkgPT4gKHsgaHJlZjogaHJlZiwgY29udGVudDogdGV4dCB9KSlcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihlcnIpXG4gICAgICAgIH0pKVxuICAgIClcbiAgICByZXR1cm4gcHJvbVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB3aGVuRW50cnlwb2ludChyb3V0ZTogc3RyaW5nKSB7XG4gICAgICByZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSwgZW50cnlwb2ludHMpXG4gICAgfSxcbiAgICBvbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZywgZXhlY3V0ZTogKCkgPT4gdW5rbm93bikge1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKGV4ZWN1dGUpXG4gICAgICAgIC50aGVuKChmbikgPT4gZm4oKSlcbiAgICAgICAgLnRoZW4oXG4gICAgICAgICAgKGV4cG9ydHM6IGFueSkgPT4gKHtcbiAgICAgICAgICAgIGNvbXBvbmVudDogKGV4cG9ydHMgJiYgZXhwb3J0cy5kZWZhdWx0KSB8fCBleHBvcnRzLFxuICAgICAgICAgICAgZXhwb3J0czogZXhwb3J0cyxcbiAgICAgICAgICB9KSxcbiAgICAgICAgICAoZXJyKSA9PiAoeyBlcnJvcjogZXJyIH0pXG4gICAgICAgIClcbiAgICAgICAgLnRoZW4oKGlucHV0OiBSb3V0ZUVudHJ5cG9pbnQpID0+IHtcbiAgICAgICAgICBjb25zdCBvbGQgPSBlbnRyeXBvaW50cy5nZXQocm91dGUpXG4gICAgICAgICAgZW50cnlwb2ludHMuc2V0KHJvdXRlLCBpbnB1dClcbiAgICAgICAgICBpZiAob2xkICYmICdyZXNvbHZlJyBpbiBvbGQpIG9sZC5yZXNvbHZlKGlucHV0KVxuICAgICAgICB9KVxuICAgIH0sXG4gICAgbG9hZFJvdXRlKHJvdXRlOiBzdHJpbmcsIHByZWZldGNoPzogYm9vbGVhbikge1xuICAgICAgcmV0dXJuIHdpdGhGdXR1cmU8Um91dGVMb2FkZXJFbnRyeT4ocm91dGUsIHJvdXRlcywgKCkgPT4ge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChcbiAgICAgICAgICBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSlcbiAgICAgICAgICAgIC50aGVuKCh7IHNjcmlwdHMsIGNzcyB9KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICAgICAgZW50cnlwb2ludHMuaGFzKHJvdXRlKVxuICAgICAgICAgICAgICAgICAgPyBbXVxuICAgICAgICAgICAgICAgICAgOiBQcm9taXNlLmFsbChzY3JpcHRzLm1hcChtYXliZUV4ZWN1dGVTY3JpcHQpKSxcbiAgICAgICAgICAgICAgICBQcm9taXNlLmFsbChjc3MubWFwKGZldGNoU3R5bGVTaGVldCkpLFxuICAgICAgICAgICAgICBdIGFzIGNvbnN0KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMud2hlbkVudHJ5cG9pbnQocm91dGUpLnRoZW4oKGVudHJ5cG9pbnQpID0+ICh7XG4gICAgICAgICAgICAgICAgZW50cnlwb2ludCxcbiAgICAgICAgICAgICAgICBzdHlsZXM6IHJlc1sxXSxcbiAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICBNU19NQVhfSURMRV9ERUxBWSxcbiAgICAgICAgICBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYFJvdXRlIGRpZCBub3QgY29tcGxldGUgbG9hZGluZzogJHtyb3V0ZX1gKSlcbiAgICAgICAgKVxuICAgICAgICAgIC50aGVuKCh7IGVudHJ5cG9pbnQsIHN0eWxlcyB9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXM6IFJvdXRlTG9hZGVyRW50cnkgPSBPYmplY3QuYXNzaWduPFxuICAgICAgICAgICAgICB7IHN0eWxlczogUm91dGVTdHlsZVNoZWV0W10gfSxcbiAgICAgICAgICAgICAgUm91dGVFbnRyeXBvaW50XG4gICAgICAgICAgICA+KHsgc3R5bGVzOiBzdHlsZXMhIH0sIGVudHJ5cG9pbnQpXG4gICAgICAgICAgICByZXR1cm4gJ2Vycm9yJyBpbiBlbnRyeXBvaW50ID8gZW50cnlwb2ludCA6IHJlc1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIGlmIChwcmVmZXRjaCkge1xuICAgICAgICAgICAgICAvLyB3ZSBkb24ndCB3YW50IHRvIGNhY2hlIGVycm9ycyBkdXJpbmcgcHJlZmV0Y2hcbiAgICAgICAgICAgICAgdGhyb3cgZXJyXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4geyBlcnJvcjogZXJyIH1cbiAgICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9LFxuICAgIHByZWZldGNoKHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWVMYWJzL3F1aWNrbGluay9ibG9iLzQ1M2E2NjFmYTFmYTk0MGUyZDJlMDQ0NDUyMzk4ZTM4YzY3YTk4ZmIvc3JjL2luZGV4Lm1qcyNMMTE1LUwxMThcbiAgICAgIC8vIExpY2Vuc2U6IEFwYWNoZSAyLjBcbiAgICAgIGxldCBjblxuICAgICAgaWYgKChjbiA9IChuYXZpZ2F0b3IgYXMgYW55KS5jb25uZWN0aW9uKSkge1xuICAgICAgICAvLyBEb24ndCBwcmVmZXRjaCBpZiB1c2luZyAyRyBvciBpZiBTYXZlLURhdGEgaXMgZW5hYmxlZC5cbiAgICAgICAgaWYgKGNuLnNhdmVEYXRhIHx8IC8yZy8udGVzdChjbi5lZmZlY3RpdmVUeXBlKSkgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gICAgICB9XG4gICAgICByZXR1cm4gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpXG4gICAgICAgIC50aGVuKChvdXRwdXQpID0+XG4gICAgICAgICAgUHJvbWlzZS5hbGwoXG4gICAgICAgICAgICBjYW5QcmVmZXRjaFxuICAgICAgICAgICAgICA/IG91dHB1dC5zY3JpcHRzLm1hcCgoc2NyaXB0KSA9PiBwcmVmZXRjaFZpYURvbShzY3JpcHQsICdzY3JpcHQnKSlcbiAgICAgICAgICAgICAgOiBbXVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiB0aGlzLmxvYWRSb3V0ZShyb3V0ZSwgdHJ1ZSkuY2F0Y2goKCkgPT4ge30pKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goXG4gICAgICAgICAgLy8gc3dhbGxvdyBwcmVmZXRjaCBlcnJvcnNcbiAgICAgICAgICAoKSA9PiB7fVxuICAgICAgICApXG4gICAgfSxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVSb3V0ZUxvYWRlclxuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciwgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0J1xuXG50eXBlIENsYXNzQXJndW1lbnRzPFQ+ID0gVCBleHRlbmRzIG5ldyAoLi4uYXJnczogaW5mZXIgVSkgPT4gYW55ID8gVSA6IGFueVxuXG50eXBlIFJvdXRlckFyZ3MgPSBDbGFzc0FyZ3VtZW50czx0eXBlb2YgUm91dGVyPlxuXG50eXBlIFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogUm91dGVyIHwgbnVsbFxuICByZWFkeUNhbGxiYWNrczogQXJyYXk8KCkgPT4gYW55PlxuICByZWFkeShjYjogKCkgPT4gYW55KTogdm9pZFxufVxuXG5leHBvcnQgeyBSb3V0ZXIsIE5leHRSb3V0ZXIgfVxuXG5leHBvcnQgdHlwZSBTaW5nbGV0b25Sb3V0ZXIgPSBTaW5nbGV0b25Sb3V0ZXJCYXNlICYgTmV4dFJvdXRlclxuXG5jb25zdCBzaW5nbGV0b25Sb3V0ZXI6IFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogbnVsbCwgLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbiAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICByZWFkeShjYjogKCkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKClcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYilcbiAgICB9XG4gIH0sXG59XG5cbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAncGF0aG5hbWUnLFxuICAncm91dGUnLFxuICAncXVlcnknLFxuICAnYXNQYXRoJyxcbiAgJ2NvbXBvbmVudHMnLFxuICAnaXNGYWxsYmFjaycsXG4gICdiYXNlUGF0aCcsXG4gICdsb2NhbGUnLFxuICAnbG9jYWxlcycsXG4gICdkZWZhdWx0TG9jYWxlJyxcbiAgJ2lzUmVhZHknLFxuICAnaXNQcmV2aWV3JyxcbiAgJ2lzTG9jYWxlRG9tYWluJyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZDogc3RyaW5nKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkOiBzdHJpbmcpID0+IHtcbiAgLy8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbiAgOyhzaW5nbGV0b25Sb3V0ZXIgYXMgYW55KVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICB9XG59KVxuXG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQ6IHN0cmluZykgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YClcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKFxuICAgICAgICBBcnJheS5pc0FycmF5KF9yb3V0ZXJbcHJvcGVydHldKSA/IFtdIDoge30sXG4gICAgICAgIF9yb3V0ZXJbcHJvcGVydHldXG4gICAgICApIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXJbcHJvcGVydHldXG4gIH1cblxuICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gIGluc3RhbmNlLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICByZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICByZXF1ZXN0SWRsZUNhbGxiYWNrLFxuICBjYW5jZWxJZGxlQ2FsbGJhY2ssXG59IGZyb20gJy4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrJ1xuXG50eXBlIFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdCA9IFBpY2s8SW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0LCAncm9vdE1hcmdpbic+XG50eXBlIFVzZUludGVyc2VjdGlvbiA9IHsgZGlzYWJsZWQ/OiBib29sZWFuIH0gJiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXRcbnR5cGUgT2JzZXJ2ZUNhbGxiYWNrID0gKGlzVmlzaWJsZTogYm9vbGVhbikgPT4gdm9pZFxudHlwZSBPYnNlcnZlciA9IHtcbiAgaWQ6IHN0cmluZ1xuICBvYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbiAgZWxlbWVudHM6IE1hcDxFbGVtZW50LCBPYnNlcnZlQ2FsbGJhY2s+XG59XG5cbmNvbnN0IGhhc0ludGVyc2VjdGlvbk9ic2VydmVyID0gdHlwZW9mIEludGVyc2VjdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlSW50ZXJzZWN0aW9uPFQgZXh0ZW5kcyBFbGVtZW50Pih7XG4gIHJvb3RNYXJnaW4sXG4gIGRpc2FibGVkLFxufTogVXNlSW50ZXJzZWN0aW9uKTogWyhlbGVtZW50OiBUIHwgbnVsbCkgPT4gdm9pZCwgYm9vbGVhbl0ge1xuICBjb25zdCBpc0Rpc2FibGVkOiBib29sZWFuID0gZGlzYWJsZWQgfHwgIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyXG5cbiAgY29uc3QgdW5vYnNlcnZlID0gdXNlUmVmPEZ1bmN0aW9uPigpXG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IHNldFJlZiA9IHVzZUNhbGxiYWNrKFxuICAgIChlbDogVCB8IG51bGwpID0+IHtcbiAgICAgIGlmICh1bm9ic2VydmUuY3VycmVudCkge1xuICAgICAgICB1bm9ic2VydmUuY3VycmVudCgpXG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gdW5kZWZpbmVkXG4gICAgICB9XG5cbiAgICAgIGlmIChpc0Rpc2FibGVkIHx8IHZpc2libGUpIHJldHVyblxuXG4gICAgICBpZiAoZWwgJiYgZWwudGFnTmFtZSkge1xuICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IG9ic2VydmUoXG4gICAgICAgICAgZWwsXG4gICAgICAgICAgKGlzVmlzaWJsZSkgPT4gaXNWaXNpYmxlICYmIHNldFZpc2libGUoaXNWaXNpYmxlKSxcbiAgICAgICAgICB7IHJvb3RNYXJnaW4gfVxuICAgICAgICApXG4gICAgICB9XG4gICAgfSxcbiAgICBbaXNEaXNhYmxlZCwgcm9vdE1hcmdpbiwgdmlzaWJsZV1cbiAgKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgICAgaWYgKCF2aXNpYmxlKSB7XG4gICAgICAgIGNvbnN0IGlkbGVDYWxsYmFjayA9IHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4gc2V0VmlzaWJsZSh0cnVlKSlcbiAgICAgICAgcmV0dXJuICgpID0+IGNhbmNlbElkbGVDYWxsYmFjayhpZGxlQ2FsbGJhY2spXG4gICAgICB9XG4gICAgfVxuICB9LCBbdmlzaWJsZV0pXG5cbiAgcmV0dXJuIFtzZXRSZWYsIHZpc2libGVdXG59XG5cbmZ1bmN0aW9uIG9ic2VydmUoXG4gIGVsZW1lbnQ6IEVsZW1lbnQsXG4gIGNhbGxiYWNrOiBPYnNlcnZlQ2FsbGJhY2ssXG4gIG9wdGlvbnM6IFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdFxuKTogKCkgPT4gdm9pZCB7XG4gIGNvbnN0IHsgaWQsIG9ic2VydmVyLCBlbGVtZW50cyB9ID0gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucylcbiAgZWxlbWVudHMuc2V0KGVsZW1lbnQsIGNhbGxiYWNrKVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudClcbiAgcmV0dXJuIGZ1bmN0aW9uIHVub2JzZXJ2ZSgpOiB2b2lkIHtcbiAgICBlbGVtZW50cy5kZWxldGUoZWxlbWVudClcbiAgICBvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudClcblxuICAgIC8vIERlc3Ryb3kgb2JzZXJ2ZXIgd2hlbiB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byB3YXRjaDpcbiAgICBpZiAoZWxlbWVudHMuc2l6ZSA9PT0gMCkge1xuICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpXG4gICAgICBvYnNlcnZlcnMuZGVsZXRlKGlkKVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBvYnNlcnZlcnMgPSBuZXcgTWFwPHN0cmluZywgT2JzZXJ2ZXI+KClcbmZ1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKG9wdGlvbnM6IFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdCk6IE9ic2VydmVyIHtcbiAgY29uc3QgaWQgPSBvcHRpb25zLnJvb3RNYXJnaW4gfHwgJydcbiAgbGV0IGluc3RhbmNlID0gb2JzZXJ2ZXJzLmdldChpZClcbiAgaWYgKGluc3RhbmNlKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlXG4gIH1cblxuICBjb25zdCBlbGVtZW50cyA9IG5ldyBNYXA8RWxlbWVudCwgT2JzZXJ2ZUNhbGxiYWNrPigpXG4gIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG4gICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgY29uc3QgY2FsbGJhY2sgPSBlbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KVxuICAgICAgY29uc3QgaXNWaXNpYmxlID0gZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwXG4gICAgICBpZiAoY2FsbGJhY2sgJiYgaXNWaXNpYmxlKSB7XG4gICAgICAgIGNhbGxiYWNrKGlzVmlzaWJsZSlcbiAgICAgIH1cbiAgICB9KVxuICB9LCBvcHRpb25zKVxuXG4gIG9ic2VydmVycy5zZXQoXG4gICAgaWQsXG4gICAgKGluc3RhbmNlID0ge1xuICAgICAgaWQsXG4gICAgICBvYnNlcnZlcixcbiAgICAgIGVsZW1lbnRzLFxuICAgIH0pXG4gIClcbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFdpdGhSb3V0ZXJQcm9wcyA9IHtcbiAgcm91dGVyOiBOZXh0Um91dGVyXG59XG5cbmV4cG9ydCB0eXBlIEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPiA9IFBpY2s8XG4gIFAsXG4gIEV4Y2x1ZGU8a2V5b2YgUCwga2V5b2YgV2l0aFJvdXRlclByb3BzPlxuPlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUm91dGVyPFxuICBQIGV4dGVuZHMgV2l0aFJvdXRlclByb3BzLFxuICBDID0gTmV4dFBhZ2VDb250ZXh0XG4+KFxuICBDb21wb3NlZENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8QywgYW55LCBQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxFeGNsdWRlUm91dGVyUHJvcHM8UD4+IHtcbiAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHM6IGFueSk6IEpTWC5FbGVtZW50IHtcbiAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHJvdXRlcj17dXNlUm91dGVyKCl9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIDsoV2l0aFJvdXRlcldyYXBwZXIgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzID0gKENvbXBvc2VkQ29tcG9uZW50IGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCJleHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgcGF0aG5hbWU6IHN0cmluZyxcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4pOiB7XG4gIGRldGVjdGVkTG9jYWxlPzogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbn0ge1xuICBsZXQgZGV0ZWN0ZWRMb2NhbGU6IHN0cmluZyB8IHVuZGVmaW5lZFxuICAvLyBmaXJzdCBpdGVtIHdpbGwgYmUgZW1wdHkgc3RyaW5nIGZyb20gc3BsaXR0aW5nIGF0IGZpcnN0IGNoYXJcbiAgY29uc3QgcGF0aG5hbWVQYXJ0cyA9IHBhdGhuYW1lLnNwbGl0KCcvJylcblxuICA7KGxvY2FsZXMgfHwgW10pLnNvbWUoKGxvY2FsZSkgPT4ge1xuICAgIGlmIChwYXRobmFtZVBhcnRzWzFdLnRvTG93ZXJDYXNlKCkgPT09IGxvY2FsZS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICBkZXRlY3RlZExvY2FsZSA9IGxvY2FsZVxuICAgICAgcGF0aG5hbWVQYXJ0cy5zcGxpY2UoMSwgMSlcbiAgICAgIHBhdGhuYW1lID0gcGF0aG5hbWVQYXJ0cy5qb2luKCcvJykgfHwgJy8nXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfSlcblxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lLFxuICAgIGRldGVjdGVkTG9jYWxlLFxuICB9XG59XG4iLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcblxudHlwZSBIYW5kbGVyID0gKC4uLmV2dHM6IGFueVtdKSA9PiB2b2lkXG5cbmV4cG9ydCB0eXBlIE1pdHRFbWl0dGVyID0ge1xuICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSk6IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl0dCgpOiBNaXR0RW1pdHRlciB7XG4gIGNvbnN0IGFsbDogeyBbczogc3RyaW5nXTogSGFuZGxlcltdIH0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgcmV0dXJuIHtcbiAgICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIDsoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcilcbiAgICB9LFxuXG4gICAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIDsoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcjogSGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKC4uLmV2dHMpXG4gICAgICB9KVxuICAgIH0sXG4gIH1cbn1cbiIsIi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCxcbiAgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5pbXBvcnQgeyBHb29kUGFnZUNhY2hlLCBTdHlsZVNoZWV0VHVwbGUgfSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcGFnZS1sb2FkZXInXG5pbXBvcnQge1xuICBnZXRDbGllbnRCdWlsZE1hbmlmZXN0LFxuICBpc0Fzc2V0RXJyb3IsXG4gIG1hcmtBc3NldEVycm9yLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyJ1xuaW1wb3J0IHsgRG9tYWluTG9jYWxlcyB9IGZyb20gJy4uLy4uL3NlcnZlci9jb25maWcnXG5pbXBvcnQgeyBkZW5vcm1hbGl6ZVBhZ2VQYXRoIH0gZnJvbSAnLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aCdcbmltcG9ydCB7IG5vcm1hbGl6ZUxvY2FsZVBhdGggfSBmcm9tICcuLi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aCdcbmltcG9ydCBtaXR0LCB7IE1pdHRFbWl0dGVyIH0gZnJvbSAnLi4vbWl0dCdcbmltcG9ydCB7XG4gIEFwcENvbnRleHRUeXBlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0TG9jYXRpb25PcmlnaW4sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbiAgTkVYVF9EQVRBLFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSAnLi91dGlscy9pcy1keW5hbWljJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vdXRpbHMvcXVlcnlzdHJpbmcnXG5pbXBvcnQgcmVzb2x2ZVJld3JpdGVzIGZyb20gJy4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIC8qIHByb2QgKi9cbiAgICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgfVxufVxuXG5pbnRlcmZhY2UgUm91dGVQcm9wZXJ0aWVzIHtcbiAgc2hhbGxvdzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgVHJhbnNpdGlvbk9wdGlvbnMge1xuICBzaGFsbG93PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxuICBzY3JvbGw/OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBOZXh0SGlzdG9yeVN0YXRlIHtcbiAgdXJsOiBzdHJpbmdcbiAgYXM6IHN0cmluZ1xuICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xufVxuXG50eXBlIEhpc3RvcnlTdGF0ZSA9XG4gIHwgbnVsbFxuICB8IHsgX19OOiBmYWxzZSB9XG4gIHwgKHsgX19OOiB0cnVlOyBpZHg6IG51bWJlciB9ICYgTmV4dEhpc3RvcnlTdGF0ZSlcblxubGV0IGRldGVjdERvbWFpbkxvY2FsZTogdHlwZW9mIGltcG9ydCgnLi4vaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZScpLmRldGVjdERvbWFpbkxvY2FsZVxuXG5pZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICBkZXRlY3REb21haW5Mb2NhbGUgPSByZXF1aXJlKCcuLi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlJylcbiAgICAuZGV0ZWN0RG9tYWluTG9jYWxlXG59XG5cbmNvbnN0IGJhc2VQYXRoID0gKHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggYXMgc3RyaW5nKSB8fCAnJ1xuXG5mdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgY2FuY2VsbGVkOiB0cnVlLFxuICB9KVxufVxuXG5mdW5jdGlvbiBhZGRQYXRoUHJlZml4KHBhdGg6IHN0cmluZywgcHJlZml4Pzogc3RyaW5nKSB7XG4gIHJldHVybiBwcmVmaXggJiYgcGF0aC5zdGFydHNXaXRoKCcvJylcbiAgICA/IHBhdGggPT09ICcvJ1xuICAgICAgPyBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChwcmVmaXgpXG4gICAgICA6IGAke3ByZWZpeH0ke3BhdGhOb1F1ZXJ5SGFzaChwYXRoKSA9PT0gJy8nID8gcGF0aC5zdWJzdHJpbmcoMSkgOiBwYXRofWBcbiAgICA6IHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERvbWFpbkxvY2FsZShcbiAgcGF0aDogc3RyaW5nLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZSxcbiAgbG9jYWxlcz86IHN0cmluZ1tdLFxuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgbG9jYWxlID0gbG9jYWxlIHx8IG5vcm1hbGl6ZUxvY2FsZVBhdGgocGF0aCwgbG9jYWxlcykuZGV0ZWN0ZWRMb2NhbGVcblxuICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsIHVuZGVmaW5lZCwgbG9jYWxlKVxuXG4gICAgaWYgKGRldGVjdGVkRG9tYWluKSB7XG4gICAgICByZXR1cm4gYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHAgPyAnJyA6ICdzJ306Ly8ke2RldGVjdGVkRG9tYWluLmRvbWFpbn0ke1xuICAgICAgICBiYXNlUGF0aCB8fCAnJ1xuICAgICAgfSR7bG9jYWxlID09PSBkZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlID8gJycgOiBgLyR7bG9jYWxlfWB9JHtwYXRofWBcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICByZXR1cm4gZmFsc2Vcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZExvY2FsZShcbiAgcGF0aDogc3RyaW5nLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZSxcbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgY29uc3QgcGF0aG5hbWUgPSBwYXRoTm9RdWVyeUhhc2gocGF0aClcbiAgICBjb25zdCBwYXRoTG93ZXIgPSBwYXRobmFtZS50b0xvd2VyQ2FzZSgpXG4gICAgY29uc3QgbG9jYWxlTG93ZXIgPSBsb2NhbGUgJiYgbG9jYWxlLnRvTG93ZXJDYXNlKClcblxuICAgIHJldHVybiBsb2NhbGUgJiZcbiAgICAgIGxvY2FsZSAhPT0gZGVmYXVsdExvY2FsZSAmJlxuICAgICAgIXBhdGhMb3dlci5zdGFydHNXaXRoKCcvJyArIGxvY2FsZUxvd2VyICsgJy8nKSAmJlxuICAgICAgcGF0aExvd2VyICE9PSAnLycgKyBsb2NhbGVMb3dlclxuICAgICAgPyBhZGRQYXRoUHJlZml4KHBhdGgsICcvJyArIGxvY2FsZSlcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxMb2NhbGUocGF0aDogc3RyaW5nLCBsb2NhbGU/OiBzdHJpbmcpIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICBjb25zdCBwYXRobmFtZSA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKVxuICAgIGNvbnN0IHBhdGhMb3dlciA9IHBhdGhuYW1lLnRvTG93ZXJDYXNlKClcbiAgICBjb25zdCBsb2NhbGVMb3dlciA9IGxvY2FsZSAmJiBsb2NhbGUudG9Mb3dlckNhc2UoKVxuXG4gICAgcmV0dXJuIGxvY2FsZSAmJlxuICAgICAgKHBhdGhMb3dlci5zdGFydHNXaXRoKCcvJyArIGxvY2FsZUxvd2VyICsgJy8nKSB8fFxuICAgICAgICBwYXRoTG93ZXIgPT09ICcvJyArIGxvY2FsZUxvd2VyKVxuICAgICAgPyAocGF0aG5hbWUubGVuZ3RoID09PSBsb2NhbGUubGVuZ3RoICsgMSA/ICcvJyA6ICcnKSArXG4gICAgICAgICAgcGF0aC5zdWJzdHIobG9jYWxlLmxlbmd0aCArIDEpXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5mdW5jdGlvbiBwYXRoTm9RdWVyeUhhc2gocGF0aDogc3RyaW5nKSB7XG4gIGNvbnN0IHF1ZXJ5SW5kZXggPSBwYXRoLmluZGV4T2YoJz8nKVxuICBjb25zdCBoYXNoSW5kZXggPSBwYXRoLmluZGV4T2YoJyMnKVxuXG4gIGlmIChxdWVyeUluZGV4ID4gLTEgfHwgaGFzaEluZGV4ID4gLTEpIHtcbiAgICBwYXRoID0gcGF0aC5zdWJzdHJpbmcoMCwgcXVlcnlJbmRleCA+IC0xID8gcXVlcnlJbmRleCA6IGhhc2hJbmRleClcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHBhdGggPSBwYXRoTm9RdWVyeUhhc2gocGF0aClcbiAgcmV0dXJuIHBhdGggPT09IGJhc2VQYXRoIHx8IHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCArICcvJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gIHJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsIGJhc2VQYXRoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcGF0aCA9IHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKVxuICBpZiAoIXBhdGguc3RhcnRzV2l0aCgnLycpKSBwYXRoID0gYC8ke3BhdGh9YFxuICByZXR1cm4gcGF0aFxufVxuXG4vKipcbiAqIERldGVjdHMgd2hldGhlciBhIGdpdmVuIHVybCBpcyByb3V0YWJsZSBieSB0aGUgTmV4dC5qcyByb3V0ZXIgKGJyb3dzZXIgb25seSkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0xvY2FsVVJMKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIC8vIHByZXZlbnQgYSBoeWRyYXRpb24gbWlzbWF0Y2ggb24gaHJlZiBmb3IgdXJsIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHVybC5zdGFydHNXaXRoKCcvJykgfHwgdXJsLnN0YXJ0c1dpdGgoJyMnKSkgcmV0dXJuIHRydWVcbiAgdHJ5IHtcbiAgICAvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbiAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbilcbiAgICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpbiAmJiBoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSlcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKFxuICByb3V0ZTogc3RyaW5nLFxuICBhc1BhdGhuYW1lOiBzdHJpbmcsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKSB7XG4gIGxldCBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnXG5cbiAgY29uc3QgZHluYW1pY1JlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgY29uc3QgZHluYW1pY0dyb3VwcyA9IGR5bmFtaWNSZWdleC5ncm91cHNcbiAgY29uc3QgZHluYW1pY01hdGNoZXMgPVxuICAgIC8vIFRyeSB0byBtYXRjaCB0aGUgZHluYW1pYyByb3V0ZSBhZ2FpbnN0IHRoZSBhc1BhdGhcbiAgICAoYXNQYXRobmFtZSAhPT0gcm91dGUgPyBnZXRSb3V0ZU1hdGNoZXIoZHluYW1pY1JlZ2V4KShhc1BhdGhuYW1lKSA6ICcnKSB8fFxuICAgIC8vIEZhbGwgYmFjayB0byByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaHJlZlxuICAgIC8vIFRPRE86IHNob3VsZCB0aGlzIHRha2UgcHJpb3JpdHk7IGFsc28gbmVlZCB0byBjaGFuZ2UgaW4gdGhlIHJvdXRlci5cbiAgICBxdWVyeVxuXG4gIGludGVycG9sYXRlZFJvdXRlID0gcm91dGVcbiAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmtleXMoZHluYW1pY0dyb3VwcylcblxuICBpZiAoXG4gICAgIXBhcmFtcy5ldmVyeSgocGFyYW0pID0+IHtcbiAgICAgIGxldCB2YWx1ZSA9IGR5bmFtaWNNYXRjaGVzW3BhcmFtXSB8fCAnJ1xuICAgICAgY29uc3QgeyByZXBlYXQsIG9wdGlvbmFsIH0gPSBkeW5hbWljR3JvdXBzW3BhcmFtXVxuXG4gICAgICAvLyBzdXBwb3J0IHNpbmdsZS1sZXZlbCBjYXRjaC1hbGxcbiAgICAgIC8vIFRPRE86IG1vcmUgcm9idXN0IGhhbmRsaW5nIGZvciB1c2VyLWVycm9yIChwYXNzaW5nIGAvYClcbiAgICAgIGxldCByZXBsYWNlZCA9IGBbJHtyZXBlYXQgPyAnLi4uJyA6ICcnfSR7cGFyYW19XWBcbiAgICAgIGlmIChvcHRpb25hbCkge1xuICAgICAgICByZXBsYWNlZCA9IGAkeyF2YWx1ZSA/ICcvJyA6ICcnfVske3JlcGxhY2VkfV1gXG4gICAgICB9XG4gICAgICBpZiAocmVwZWF0ICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkgdmFsdWUgPSBbdmFsdWVdXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIChvcHRpb25hbCB8fCBwYXJhbSBpbiBkeW5hbWljTWF0Y2hlcykgJiZcbiAgICAgICAgLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG4gICAgICAgIChpbnRlcnBvbGF0ZWRSb3V0ZSA9XG4gICAgICAgICAgaW50ZXJwb2xhdGVkUm91dGUhLnJlcGxhY2UoXG4gICAgICAgICAgICByZXBsYWNlZCxcbiAgICAgICAgICAgIHJlcGVhdFxuICAgICAgICAgICAgICA/ICh2YWx1ZSBhcyBzdHJpbmdbXSlcbiAgICAgICAgICAgICAgICAgIC5tYXAoXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZXNlIHZhbHVlcyBzaG91bGQgYmUgZnVsbHkgZW5jb2RlZCBpbnN0ZWFkIG9mIGp1c3RcbiAgICAgICAgICAgICAgICAgICAgLy8gcGF0aCBkZWxpbWl0ZXIgZXNjYXBlZCBzaW5jZSB0aGV5IGFyZSBiZWluZyBpbnNlcnRlZFxuICAgICAgICAgICAgICAgICAgICAvLyBpbnRvIHRoZSBVUkwgYW5kIHdlIGV4cGVjdCBVUkwgZW5jb2RlZCBzZWdtZW50c1xuICAgICAgICAgICAgICAgICAgICAvLyB3aGVuIHBhcnNpbmcgZHluYW1pYyByb3V0ZSBwYXJhbXNcbiAgICAgICAgICAgICAgICAgICAgKHNlZ21lbnQpID0+IGVuY29kZVVSSUNvbXBvbmVudChzZWdtZW50KVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgLmpvaW4oJy8nKVxuICAgICAgICAgICAgICA6IGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSBhcyBzdHJpbmcpXG4gICAgICAgICAgKSB8fCAnLycpXG4gICAgICApXG4gICAgfSlcbiAgKSB7XG4gICAgaW50ZXJwb2xhdGVkUm91dGUgPSAnJyAvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuXG4gICAgLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbiAgICAvLyBkZXZlbG9wbWVudCBpbiB0aGUgYDxMaW5rPmAgY29tcG9uZW50IGRpcmVjdGx5LlxuICB9XG4gIHJldHVybiB7XG4gICAgcGFyYW1zLFxuICAgIHJlc3VsdDogaW50ZXJwb2xhdGVkUm91dGUsXG4gIH1cbn1cblxuZnVuY3Rpb24gb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSwgcGFyYW1zOiBzdHJpbmdbXSkge1xuICBjb25zdCBmaWx0ZXJlZFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG5cbiAgT2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGlmICghcGFyYW1zLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgIGZpbHRlcmVkUXVlcnlba2V5XSA9IHF1ZXJ5W2tleV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBmaWx0ZXJlZFF1ZXJ5XG59XG5cbi8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlSHJlZihcbiAgY3VycmVudFBhdGg6IHN0cmluZyxcbiAgaHJlZjogVXJsLFxuICByZXNvbHZlQXM/OiBib29sZWFuXG4pOiBzdHJpbmcge1xuICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICBjb25zdCBiYXNlID0gbmV3IFVSTChjdXJyZW50UGF0aCwgJ2h0dHA6Ly9uJylcbiAgY29uc3QgdXJsQXNTdHJpbmcgPVxuICAgIHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiBmb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKVxuICAvLyBSZXR1cm4gYmVjYXVzZSBpdCBjYW5ub3QgYmUgcm91dGVkIGJ5IHRoZSBOZXh0LmpzIHJvdXRlclxuICBpZiAoIWlzTG9jYWxVUkwodXJsQXNTdHJpbmcpKSB7XG4gICAgcmV0dXJuIChyZXNvbHZlQXMgPyBbdXJsQXNTdHJpbmddIDogdXJsQXNTdHJpbmcpIGFzIHN0cmluZ1xuICB9XG4gIHRyeSB7XG4gICAgY29uc3QgZmluYWxVcmwgPSBuZXcgVVJMKHVybEFzU3RyaW5nLCBiYXNlKVxuICAgIGZpbmFsVXJsLnBhdGhuYW1lID0gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goZmluYWxVcmwucGF0aG5hbWUpXG4gICAgbGV0IGludGVycG9sYXRlZEFzID0gJydcblxuICAgIGlmIChcbiAgICAgIGlzRHluYW1pY1JvdXRlKGZpbmFsVXJsLnBhdGhuYW1lKSAmJlxuICAgICAgZmluYWxVcmwuc2VhcmNoUGFyYW1zICYmXG4gICAgICByZXNvbHZlQXNcbiAgICApIHtcbiAgICAgIGNvbnN0IHF1ZXJ5ID0gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShmaW5hbFVybC5zZWFyY2hQYXJhbXMpXG5cbiAgICAgIGNvbnN0IHsgcmVzdWx0LCBwYXJhbXMgfSA9IGludGVycG9sYXRlQXMoXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgcXVlcnlcbiAgICAgIClcblxuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICBpbnRlcnBvbGF0ZWRBcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICBwYXRobmFtZTogcmVzdWx0LFxuICAgICAgICAgIGhhc2g6IGZpbmFsVXJsLmhhc2gsXG4gICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgcGFyYW1zKSxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9XG4gICAgICBmaW5hbFVybC5vcmlnaW4gPT09IGJhc2Uub3JpZ2luXG4gICAgICAgID8gZmluYWxVcmwuaHJlZi5zbGljZShmaW5hbFVybC5vcmlnaW4ubGVuZ3RoKVxuICAgICAgICA6IGZpbmFsVXJsLmhyZWZcblxuICAgIHJldHVybiAocmVzb2x2ZUFzXG4gICAgICA/IFtyZXNvbHZlZEhyZWYsIGludGVycG9sYXRlZEFzIHx8IHJlc29sdmVkSHJlZl1cbiAgICAgIDogcmVzb2x2ZWRIcmVmKSBhcyBzdHJpbmdcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiAocmVzb2x2ZUFzID8gW3VybEFzU3RyaW5nXSA6IHVybEFzU3RyaW5nKSBhcyBzdHJpbmdcbiAgfVxufVxuXG5mdW5jdGlvbiBzdHJpcE9yaWdpbih1cmw6IHN0cmluZykge1xuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG5cbiAgcmV0dXJuIHVybC5zdGFydHNXaXRoKG9yaWdpbikgPyB1cmwuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpIDogdXJsXG59XG5cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXI6IE5leHRSb3V0ZXIsIHVybDogVXJsLCBhcz86IFVybCkge1xuICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgbGV0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCB1cmwsIHRydWUpXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgY29uc3QgaHJlZkhhZE9yaWdpbiA9IHJlc29sdmVkSHJlZi5zdGFydHNXaXRoKG9yaWdpbilcbiAgY29uc3QgYXNIYWRPcmlnaW4gPSByZXNvbHZlZEFzICYmIHJlc29sdmVkQXMuc3RhcnRzV2l0aChvcmlnaW4pXG5cbiAgcmVzb2x2ZWRIcmVmID0gc3RyaXBPcmlnaW4ocmVzb2x2ZWRIcmVmKVxuICByZXNvbHZlZEFzID0gcmVzb2x2ZWRBcyA/IHN0cmlwT3JpZ2luKHJlc29sdmVkQXMpIDogcmVzb2x2ZWRBc1xuXG4gIGNvbnN0IHByZXBhcmVkVXJsID0gaHJlZkhhZE9yaWdpbiA/IHJlc29sdmVkSHJlZiA6IGFkZEJhc2VQYXRoKHJlc29sdmVkSHJlZilcbiAgY29uc3QgcHJlcGFyZWRBcyA9IGFzXG4gICAgPyBzdHJpcE9yaWdpbihyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIGFzKSlcbiAgICA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmXG5cbiAgcmV0dXJuIHtcbiAgICB1cmw6IHByZXBhcmVkVXJsLFxuICAgIGFzOiBhc0hhZE9yaWdpbiA/IHByZXBhcmVkQXMgOiBhZGRCYXNlUGF0aChwcmVwYXJlZEFzKSxcbiAgfVxufVxuXG5mdW5jdGlvbiByZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lOiBzdHJpbmcsIHBhZ2VzOiBzdHJpbmdbXSkge1xuICBjb25zdCBjbGVhblBhdGhuYW1lID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVub3JtYWxpemVQYWdlUGF0aChwYXRobmFtZSEpKVxuXG4gIGlmIChjbGVhblBhdGhuYW1lID09PSAnLzQwNCcgfHwgY2xlYW5QYXRobmFtZSA9PT0gJy9fZXJyb3InKSB7XG4gICAgcmV0dXJuIHBhdGhuYW1lXG4gIH1cblxuICAvLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG4gIGlmICghcGFnZXMuaW5jbHVkZXMoY2xlYW5QYXRobmFtZSEpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgIHBhZ2VzLnNvbWUoKHBhZ2UpID0+IHtcbiAgICAgIGlmIChpc0R5bmFtaWNSb3V0ZShwYWdlKSAmJiBnZXRSb3V0ZVJlZ2V4KHBhZ2UpLnJlLnRlc3QoY2xlYW5QYXRobmFtZSEpKSB7XG4gICAgICAgIHBhdGhuYW1lID0gcGFnZVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxufVxuXG5leHBvcnQgdHlwZSBCYXNlUm91dGVyID0ge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4gIGlzTG9jYWxlRG9tYWluOiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICAgIHwgJ2lzUmVhZHknXG4gICAgfCAnaXNQcmV2aWV3J1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG59XG5cbmV4cG9ydCB0eXBlIFByaXZhdGVSb3V0ZUluZm8gPVxuICB8IChPbWl0PENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbywgJ3N0eWxlU2hlZXRzJz4gJiB7IGluaXRpYWw6IHRydWUgfSlcbiAgfCBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm9cblxuZXhwb3J0IHR5cGUgQ29tcGxldGVQcml2YXRlUm91dGVJbmZvID0ge1xuICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogUmVjb3JkPHN0cmluZywgYW55PlxuICBlcnI/OiBFcnJvclxuICBlcnJvcj86IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wcyA9IFBpY2s8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvLCAnQ29tcG9uZW50JyB8ICdlcnInPiAmIHtcbiAgcm91dGVyOiBSb3V0ZXJcbn0gJiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG5leHBvcnQgdHlwZSBBcHBDb21wb25lbnQgPSBDb21wb25lbnRUeXBlPEFwcFByb3BzPlxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChcbiAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyxcbiAgQXBwOiBBcHBDb21wb25lbnQsXG4gIHJlc2V0U2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCBudWxsXG4pID0+IFByb21pc2U8dm9pZD5cblxudHlwZSBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBOZXh0SGlzdG9yeVN0YXRlKSA9PiBib29sZWFuXG5cbnR5cGUgQ29tcG9uZW50TG9hZENhbmNlbCA9ICgoKSA9PiB2b2lkKSB8IG51bGxcblxudHlwZSBIaXN0b3J5TWV0aG9kID0gJ3JlcGxhY2VTdGF0ZScgfCAncHVzaFN0YXRlJ1xuXG5jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiA9XG4gIHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04gJiZcbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiB3aW5kb3cuaGlzdG9yeSAmJlxuICAhIShmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCB2ID0gJ19fbmV4dCdcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgIHJldHVybiBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHYsIHYpLCBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKHYpLCB0cnVlXG4gICAgfSBjYXRjaCAobikge31cbiAgfSkoKVxuXG5jb25zdCBTU0dfREFUQV9OT1RfRk9VTkQgPSBTeW1ib2woJ1NTR19EQVRBX05PVF9GT1VORCcpXG5cbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsOiBzdHJpbmcsIGF0dGVtcHRzOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgLy9cbiAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgLy8gPiBvcHRpb24uXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgIC8vXG4gICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICB9KS50aGVuKChyZXMpID0+IHtcbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSlcbiAgICAgIH1cbiAgICAgIGlmIChyZXMuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIGlmIChkYXRhLm5vdEZvdW5kKSB7XG4gICAgICAgICAgICByZXR1cm4geyBub3RGb3VuZDogU1NHX0RBVEFfTk9UX0ZPVU5EIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgIH1cbiAgICByZXR1cm4gcmVzLmpzb24oKVxuICB9KVxufVxuXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmOiBzdHJpbmcsIGlzU2VydmVyUmVuZGVyOiBib29sZWFuKSB7XG4gIHJldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlciA/IDMgOiAxKS5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgLy8gbG9vcC5cblxuICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgIG1hcmtBc3NldEVycm9yKGVycilcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciBpbXBsZW1lbnRzIEJhc2VSb3V0ZXIge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcblxuICAvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi9cbiAgY29tcG9uZW50czogeyBbcGF0aG5hbWU6IHN0cmluZ106IFByaXZhdGVSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICAvLyBJbi1mbGlnaHQgU2VydmVyIERhdGEgUmVxdWVzdHMsIGZvciBkZWR1cGluZ1xuICBzZHI6IHsgW2FzUGF0aDogc3RyaW5nXTogUHJvbWlzZTxvYmplY3Q+IH0gPSB7fVxuXG4gIHN1YjogU3Vic2NyaXB0aW9uXG4gIGNsYzogQ29tcG9uZW50TG9hZENhbmNlbFxuICBwYWdlTG9hZGVyOiBhbnlcbiAgX2JwczogQmVmb3JlUG9wU3RhdGVDYWxsYmFjayB8IHVuZGVmaW5lZFxuICBldmVudHM6IE1pdHRFbWl0dGVyXG4gIF93cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICBpc1NzcjogYm9vbGVhblxuICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gIF9pbkZsaWdodFJvdXRlPzogc3RyaW5nXG4gIF9zaGFsbG93PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbiAgaXNSZWFkeTogYm9vbGVhblxuICBpc1ByZXZpZXc6IGJvb2xlYW5cbiAgaXNMb2NhbGVEb21haW46IGJvb2xlYW5cblxuICBwcml2YXRlIF9pZHg6IG51bWJlciA9IDBcblxuICBzdGF0aWMgZXZlbnRzOiBNaXR0RW1pdHRlciA9IG1pdHQoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAge1xuICAgICAgaW5pdGlhbFByb3BzLFxuICAgICAgcGFnZUxvYWRlcixcbiAgICAgIEFwcCxcbiAgICAgIHdyYXBBcHAsXG4gICAgICBDb21wb25lbnQsXG4gICAgICBlcnIsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBpc0ZhbGxiYWNrLFxuICAgICAgbG9jYWxlLFxuICAgICAgbG9jYWxlcyxcbiAgICAgIGRlZmF1bHRMb2NhbGUsXG4gICAgICBkb21haW5Mb2NhbGVzLFxuICAgICAgaXNQcmV2aWV3LFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIEFwcDogQXBwQ29tcG9uZW50XG4gICAgICB3cmFwQXBwOiAoV3JhcEFwcENvbXBvbmVudDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgICBsb2NhbGU/OiBzdHJpbmdcbiAgICAgIGxvY2FsZXM/OiBzdHJpbmdbXVxuICAgICAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICAgICAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbiAgICAgIGlzUHJldmlldz86IGJvb2xlYW5cbiAgICB9XG4gICkge1xuICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgIHRoaXMucm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9XG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgaW5pdGlhbDogdHJ1ZSxcbiAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgZXJyLFxuICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7XG4gICAgICBDb21wb25lbnQ6IEFwcCBhcyBDb21wb25lbnRUeXBlLFxuICAgICAgc3R5bGVTaGVldHM6IFtcbiAgICAgICAgLyogL19hcHAgZG9lcyBub3QgbmVlZCBpdHMgc3R5bGVzaGVldHMgbWFuYWdlZCAqL1xuICAgICAgXSxcbiAgICB9XG5cbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgIGNvbnN0IGF1dG9FeHBvcnREeW5hbWljID1cbiAgICAgIGlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBzZWxmLl9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydFxuXG4gICAgdGhpcy5hc1BhdGggPSBhdXRvRXhwb3J0RHluYW1pYyA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIHRoaXMuaXNSZWFkeSA9ICEhKFxuICAgICAgc2VsZi5fX05FWFRfREFUQV9fLmdzc3AgfHxcbiAgICAgIHNlbGYuX19ORVhUX0RBVEFfXy5naXAgfHxcbiAgICAgICghYXV0b0V4cG9ydER5bmFtaWMgJiZcbiAgICAgICAgIXNlbGYubG9jYXRpb24uc2VhcmNoICYmXG4gICAgICAgICFwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTKVxuICAgIClcbiAgICB0aGlzLmlzUHJldmlldyA9ICEhaXNQcmV2aWV3XG4gICAgdGhpcy5pc0xvY2FsZURvbWFpbiA9IGZhbHNlXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVcbiAgICAgIHRoaXMubG9jYWxlcyA9IGxvY2FsZXNcbiAgICAgIHRoaXMuZGVmYXVsdExvY2FsZSA9IGRlZmF1bHRMb2NhbGVcbiAgICAgIHRoaXMuZG9tYWluTG9jYWxlcyA9IGRvbWFpbkxvY2FsZXNcbiAgICAgIHRoaXMuaXNMb2NhbGVEb21haW4gPSAhIWRldGVjdERvbWFpbkxvY2FsZShcbiAgICAgICAgZG9tYWluTG9jYWxlcyxcbiAgICAgICAgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZVxuICAgICAgKVxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgICAgZ2V0VVJMKCksXG4gICAgICAgICAgeyBsb2NhbGUgfVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcblxuICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZSA9IChlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlIGFzIEhpc3RvcnlTdGF0ZVxuXG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgZ2V0VVJMKClcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghc3RhdGUuX19OKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXQgZm9yY2VkU2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCB1bmRlZmluZWRcbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMsIGlkeCB9ID0gc3RhdGVcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgIGlmICh0aGlzLl9pZHggIT09IGlkeCkge1xuICAgICAgICAgIC8vIFNuYXBzaG90IGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uOlxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICAgICAgICAnX19uZXh0X3Njcm9sbF8nICsgdGhpcy5faWR4LFxuICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7IHg6IHNlbGYucGFnZVhPZmZzZXQsIHk6IHNlbGYucGFnZVlPZmZzZXQgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9IGNhdGNoIHt9XG5cbiAgICAgICAgICAvLyBSZXN0b3JlIG9sZCBzY3JvbGwgcG9zaXRpb246XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHYgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdfX25leHRfc2Nyb2xsXycgKyBpZHgpXG4gICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSBKU09OLnBhcnNlKHYhKVxuICAgICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgZm9yY2VkU2Nyb2xsID0geyB4OiAwLCB5OiAwIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5faWR4ID0gaWR4XG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgIGlmICh0aGlzLmlzU3NyICYmIGFzID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2UoXG4gICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgIHVybCxcbiAgICAgIGFzLFxuICAgICAgT2JqZWN0LmFzc2lnbjx7fSwgVHJhbnNpdGlvbk9wdGlvbnMsIFRyYW5zaXRpb25PcHRpb25zPih7fSwgb3B0aW9ucywge1xuICAgICAgICBzaGFsbG93OiBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5fc2hhbGxvdyxcbiAgICAgICAgbG9jYWxlOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGUsXG4gICAgICB9KSxcbiAgICAgIGZvcmNlZFNjcm9sbFxuICAgIClcbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzPzogVXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgIC8vIFRPRE86IHJlbW92ZSBpbiB0aGUgZnV0dXJlIHdoZW4gd2UgdXBkYXRlIGhpc3RvcnkgYmVmb3JlIHJvdXRlIGNoYW5nZVxuICAgICAgLy8gaXMgY29tcGxldGUsIGFzIHRoZSBwb3BzdGF0ZSBldmVudCBzaG91bGQgaGFuZGxlIHRoaXMgY2FwdHVyZS5cbiAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFNuYXBzaG90IHNjcm9sbCBwb3NpdGlvbiByaWdodCBiZWZvcmUgbmF2aWdhdGluZyB0byBhIG5ldyBwYWdlOlxuICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICAnX19uZXh0X3Njcm9sbF8nICsgdGhpcy5faWR4LFxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoeyB4OiBzZWxmLnBhZ2VYT2Zmc2V0LCB5OiBzZWxmLnBhZ2VZT2Zmc2V0IH0pXG4gICAgICAgICAgKVxuICAgICAgICB9IGNhdGNoIHt9XG4gICAgICB9XG4gICAgfVxuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICByZXBsYWNlKHVybDogVXJsLCBhcz86IFVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBjaGFuZ2UoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMsXG4gICAgZm9yY2VkU2Nyb2xsPzogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9XG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmICghaXNMb2NhbFVSTCh1cmwpKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybFxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gZm9yIHN0YXRpYyBwYWdlcyB3aXRoIHF1ZXJ5IHBhcmFtcyBpbiB0aGUgVVJMIHdlIGRlbGF5XG4gICAgLy8gbWFya2luZyB0aGUgcm91dGVyIHJlYWR5IHVudGlsIGFmdGVyIHRoZSBxdWVyeSBpcyB1cGRhdGVkXG4gICAgaWYgKChvcHRpb25zIGFzIGFueSkuX2gpIHtcbiAgICAgIHRoaXMuaXNSZWFkeSA9IHRydWVcbiAgICB9XG5cbiAgICAvLyBEZWZhdWx0IHRvIHNjcm9sbCByZXNldCBiZWhhdmlvciB1bmxlc3MgZXhwbGljaXRseSBzcGVjaWZpZWQgdG8gYmVcbiAgICAvLyBgZmFsc2VgISBUaGlzIG1ha2VzIHRoZSBiZWhhdmlvciBiZXR3ZWVuIHVzaW5nIGBSb3V0ZXIjcHVzaGAgYW5kIGFcbiAgICAvLyBgPExpbmsgLz5gIGNvbnNpc3RlbnQuXG4gICAgb3B0aW9ucy5zY3JvbGwgPSAhIShvcHRpb25zLnNjcm9sbCA/PyB0cnVlKVxuXG4gICAgbGV0IGxvY2FsZUNoYW5nZSA9IG9wdGlvbnMubG9jYWxlICE9PSB0aGlzLmxvY2FsZVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgIHRoaXMubG9jYWxlID1cbiAgICAgICAgb3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlXG4gICAgICAgICAgPyB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgICA6IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMubG9jYWxlXG5cbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG9wdGlvbnMubG9jYWxlID0gdGhpcy5sb2NhbGVcbiAgICAgIH1cblxuICAgICAgY29uc3QgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzKVxuICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9IG5vcm1hbGl6ZUxvY2FsZVBhdGgoXG4gICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lLFxuICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgIClcblxuICAgICAgaWYgKGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUpIHtcbiAgICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlXG4gICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gYWRkQmFzZVBhdGgocGFyc2VkQXMucGF0aG5hbWUpXG4gICAgICAgIGFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpXG4gICAgICAgIHVybCA9IGFkZEJhc2VQYXRoKFxuICAgICAgICAgIG5vcm1hbGl6ZUxvY2FsZVBhdGgoXG4gICAgICAgICAgICBoYXNCYXNlUGF0aCh1cmwpID8gZGVsQmFzZVBhdGgodXJsKSA6IHVybCxcbiAgICAgICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgICAgICkucGF0aG5hbWVcbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgbGV0IGRpZE5hdmlnYXRlID0gZmFsc2VcblxuICAgICAgLy8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAvLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIC8vIGlmIHRoZSBsb2NhbGUgaXNuJ3QgY29uZmlndXJlZCBoYXJkIG5hdmlnYXRlIHRvIHNob3cgNDA0IHBhZ2VcbiAgICAgICAgaWYgKCF0aGlzLmxvY2FsZXM/LmluY2x1ZGVzKHRoaXMubG9jYWxlISkpIHtcbiAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGFkZExvY2FsZShwYXJzZWRBcy5wYXRobmFtZSwgdGhpcy5sb2NhbGUpXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcylcbiAgICAgICAgICAvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuICAgICAgICAgIC8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgZGlkTmF2aWdhdGUgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgZGV0ZWN0ZWREb21haW4gPSBkZXRlY3REb21haW5Mb2NhbGUoXG4gICAgICAgIHRoaXMuZG9tYWluTG9jYWxlcyxcbiAgICAgICAgdW5kZWZpbmVkLFxuICAgICAgICB0aGlzLmxvY2FsZVxuICAgICAgKVxuXG4gICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgIC8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgLy8gaWYgd2UgYXJlIG5hdmlnYXRpbmcgdG8gYSBkb21haW4gbG9jYWxlIGVuc3VyZSB3ZSByZWRpcmVjdCB0byB0aGVcbiAgICAgICAgLy8gY29ycmVjdCBkb21haW5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICFkaWROYXZpZ2F0ZSAmJlxuICAgICAgICAgIGRldGVjdGVkRG9tYWluICYmXG4gICAgICAgICAgdGhpcy5pc0xvY2FsZURvbWFpbiAmJlxuICAgICAgICAgIHNlbGYubG9jYXRpb24uaG9zdG5hbWUgIT09IGRldGVjdGVkRG9tYWluLmRvbWFpblxuICAgICAgICApIHtcbiAgICAgICAgICBjb25zdCBhc05vQmFzZVBhdGggPSBkZWxCYXNlUGF0aChhcylcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwID8gJycgOiAncyd9Oi8vJHtcbiAgICAgICAgICAgIGRldGVjdGVkRG9tYWluLmRvbWFpblxuICAgICAgICAgIH0ke2FkZEJhc2VQYXRoKFxuICAgICAgICAgICAgYCR7XG4gICAgICAgICAgICAgIHRoaXMubG9jYWxlID09PSBkZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlXG4gICAgICAgICAgICAgICAgPyAnJ1xuICAgICAgICAgICAgICAgIDogYC8ke3RoaXMubG9jYWxlfWBcbiAgICAgICAgICAgIH0ke2FzTm9CYXNlUGF0aCA9PT0gJy8nID8gJycgOiBhc05vQmFzZVBhdGh9YCB8fCAnLydcbiAgICAgICAgICApfWBcbiAgICAgICAgICAvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuICAgICAgICAgIC8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgZGlkTmF2aWdhdGUgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGRpZE5hdmlnYXRlKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKSA9PiB7fSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2gpIHtcbiAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZVxuICAgIH1cbiAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgaWYgKFNUKSB7XG4gICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpXG4gICAgfVxuXG4gICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnNcbiAgICBjb25zdCByb3V0ZVByb3BzID0geyBzaGFsbG93IH1cblxuICAgIGlmICh0aGlzLl9pbkZsaWdodFJvdXRlKSB7XG4gICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlLCByb3V0ZVByb3BzKVxuICAgIH1cblxuICAgIGFzID0gYWRkQmFzZVBhdGgoXG4gICAgICBhZGRMb2NhbGUoXG4gICAgICAgIGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLFxuICAgICAgICBvcHRpb25zLmxvY2FsZSxcbiAgICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICApXG4gICAgKVxuICAgIGNvbnN0IGNsZWFuZWRBcyA9IGRlbExvY2FsZShcbiAgICAgIGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLFxuICAgICAgdGhpcy5sb2NhbGVcbiAgICApXG4gICAgdGhpcy5faW5GbGlnaHRSb3V0ZSA9IGFzXG5cbiAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cblxuICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykpIHtcbiAgICAgIHRoaXMuYXNQYXRoID0gY2xlYW5lZEFzXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKVxuICAgICAgLy8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuICAgICAgdGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKVxuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdLCBudWxsKVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcylcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuICAgIGxldCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gcGFyc2VkXG5cbiAgICAvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4gICAgLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4gICAgLy8gd2hlbiByZXdyaXR0ZW4gdG9cbiAgICBsZXQgcGFnZXM6IGFueSwgcmV3cml0ZXM6IGFueVxuICAgIHRyeSB7XG4gICAgICBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG4gICAgICA7KHsgX19yZXdyaXRlczogcmV3cml0ZXMgfSA9IGF3YWl0IGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKSlcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIC8vIElmIHdlIGZhaWwgdG8gcmVzb2x2ZSB0aGUgcGFnZSBsaXN0IG9yIGNsaWVudC1idWlsZCBtYW5pZmVzdCwgd2UgbXVzdFxuICAgICAgLy8gZG8gYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uOlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgaWYgKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykgJiYgIWxvY2FsZUNoYW5nZSkge1xuICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICB9XG5cbiAgICAvLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuICAgIC8vIHBhZ2VzIHRvIGFsbG93IGJ1aWxkaW5nIHRoZSBkYXRhIFVSTCBjb3JyZWN0bHlcbiAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzXG5cbiAgICAvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4gICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgIC8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgPyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZWxCYXNlUGF0aChwYXRobmFtZSkpXG4gICAgICA6IHBhdGhuYW1lXG5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMgJiYgYXMuc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgIGNvbnN0IHJld3JpdGVzUmVzdWx0ID0gcmVzb2x2ZVJld3JpdGVzKFxuICAgICAgICAgIGFkZEJhc2VQYXRoKGFkZExvY2FsZShjbGVhbmVkQXMsIHRoaXMubG9jYWxlKSksXG4gICAgICAgICAgcGFnZXMsXG4gICAgICAgICAgcmV3cml0ZXMsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgICAgKHA6IHN0cmluZykgPT4gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwLCBwYWdlcyksXG4gICAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICAgIClcbiAgICAgICAgcmVzb2x2ZWRBcyA9IHJld3JpdGVzUmVzdWx0LmFzUGF0aFxuXG4gICAgICAgIGlmIChyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSAmJiByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpIHtcbiAgICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgICBwYXRobmFtZSA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZlxuICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSByZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lLCBwYWdlcylcblxuICAgICAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIGlmICghaXNMb2NhbFVSTChhcykpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgSW52YWxpZCBocmVmOiBcIiR7dXJsfVwiIGFuZCBhczogXCIke2FzfVwiLCByZWNlaXZlZCByZWxhdGl2ZSBocmVmIGFuZCBleHRlcm5hbCBhc2AgK1xuICAgICAgICAgICAgYFxcblNlZSBtb3JlIGluZm86IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2ludmFsaWQtcmVsYXRpdmUtdXJsLWV4dGVybmFsLWFzYFxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmVzb2x2ZWRBcyksIHRoaXMubG9jYWxlKVxuXG4gICAgaWYgKGlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgY29uc3QgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKHJlc29sdmVkQXMpXG4gICAgICBjb25zdCBhc1BhdGhuYW1lID0gcGFyc2VkQXMucGF0aG5hbWVcblxuICAgICAgY29uc3Qgcm91dGVSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gICAgICBjb25zdCByb3V0ZU1hdGNoID0gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpXG4gICAgICBjb25zdCBzaG91bGRJbnRlcnBvbGF0ZSA9IHJvdXRlID09PSBhc1BhdGhuYW1lXG4gICAgICBjb25zdCBpbnRlcnBvbGF0ZWRBcyA9IHNob3VsZEludGVycG9sYXRlXG4gICAgICAgID8gaW50ZXJwb2xhdGVBcyhyb3V0ZSwgYXNQYXRobmFtZSwgcXVlcnkpXG4gICAgICAgIDogKHt9IGFzIHsgcmVzdWx0OiB1bmRlZmluZWQ7IHBhcmFtczogdW5kZWZpbmVkIH0pXG5cbiAgICAgIGlmICghcm91dGVNYXRjaCB8fCAoc2hvdWxkSW50ZXJwb2xhdGUgJiYgIWludGVycG9sYXRlZEFzLnJlc3VsdCkpIHtcbiAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoXG4gICAgICAgICAgKHBhcmFtKSA9PiAhcXVlcnlbcGFyYW1dXG4gICAgICAgIClcblxuICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgYCR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gYEludGVycG9sYXRpbmcgaHJlZmBcbiAgICAgICAgICAgICAgICAgIDogYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgYFxuICAgICAgICAgICAgICB9IGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIChzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICA/IGBUaGUgcHJvdmlkZWQgXFxgaHJlZlxcYCAoJHt1cmx9KSB2YWx1ZSBpcyBtaXNzaW5nIHF1ZXJ5IHZhbHVlcyAoJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0pIHRvIGJlIGludGVycG9sYXRlZCBwcm9wZXJseS4gYFxuICAgICAgICAgICAgICA6IGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGApICtcbiAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyAnaHJlZi1pbnRlcnBvbGF0aW9uLWZhaWxlZCdcbiAgICAgICAgICAgICAgICAgIDogJ2luY29tcGF0aWJsZS1ocmVmLWFzJ1xuICAgICAgICAgICAgICB9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChzaG91bGRJbnRlcnBvbGF0ZSkge1xuICAgICAgICBhcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKFxuICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHBhcnNlZEFzLCB7XG4gICAgICAgICAgICBwYXRobmFtZTogaW50ZXJwb2xhdGVkQXMucmVzdWx0LFxuICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgaW50ZXJwb2xhdGVkQXMucGFyYW1zISksXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcywgcm91dGVQcm9wcylcblxuICAgIHRyeSB7XG4gICAgICBsZXQgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICByZXNvbHZlZEFzLFxuICAgICAgICByb3V0ZVByb3BzXG4gICAgICApXG4gICAgICBsZXQgeyBlcnJvciwgcHJvcHMsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICAvLyBoYW5kbGUgcmVkaXJlY3Qgb24gY2xpZW50LXRyYW5zaXRpb25cbiAgICAgIGlmICgoX19OX1NTRyB8fCBfX05fU1NQKSAmJiBwcm9wcykge1xuICAgICAgICBpZiAoKHByb3BzIGFzIGFueSkucGFnZVByb3BzICYmIChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1QpIHtcbiAgICAgICAgICBjb25zdCBkZXN0aW5hdGlvbiA9IChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1RcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIGRlc3RpbmF0aW9uIGlzIGludGVybmFsIChyZXNvbHZlcyB0byBhIHBhZ2UpIGFuZCBhdHRlbXB0XG4gICAgICAgICAgLy8gY2xpZW50LW5hdmlnYXRpb24gaWYgaXQgaXMgZmFsbGluZyBiYWNrIHRvIGhhcmQgbmF2aWdhdGlvbiBpZlxuICAgICAgICAgIC8vIGl0J3Mgbm90XG4gICAgICAgICAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgICAgY29uc3QgcGFyc2VkSHJlZiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gICAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShcbiAgICAgICAgICAgICAgcGFyc2VkSHJlZi5wYXRobmFtZSxcbiAgICAgICAgICAgICAgcGFnZXNcbiAgICAgICAgICAgIClcblxuICAgICAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHBhcnNlZEhyZWYucGF0aG5hbWUpKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgdXJsOiBuZXdVcmwsIGFzOiBuZXdBcyB9ID0gcHJlcGFyZVVybEFzKFxuICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb24sXG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb25cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UobWV0aG9kLCBuZXdVcmwsIG5ld0FzLCBvcHRpb25zKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZGVzdGluYXRpb25cbiAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge30pXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmlzUHJldmlldyA9ICEhcHJvcHMuX19OX1BSRVZJRVdcblxuICAgICAgICAvLyBoYW5kbGUgU1NHIGRhdGEgNDA0XG4gICAgICAgIGlmIChwcm9wcy5ub3RGb3VuZCA9PT0gU1NHX0RBVEFfTk9UX0ZPVU5EKSB7XG4gICAgICAgICAgbGV0IG5vdEZvdW5kUm91dGVcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvNDA0JylcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUgPSAnLzQwNCdcbiAgICAgICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlID0gJy9fZXJyb3InXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlLFxuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSxcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgYXMsXG4gICAgICAgICAgICByZXNvbHZlZEFzLFxuICAgICAgICAgICAgeyBzaGFsbG93OiBmYWxzZSB9XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzLCByb3V0ZVByb3BzKVxuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IGFwcENvbXA6IGFueSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnRcbiAgICAgICAgOyh3aW5kb3cgYXMgYW55KS5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAhKHJvdXRlSW5mby5Db21wb25lbnQgYXMgYW55KS5nZXRJbml0aWFsUHJvcHNcbiAgICAgIH1cblxuICAgICAgLy8gc2hhbGxvdyByb3V0aW5nIGlzIG9ubHkgYWxsb3dlZCBmb3Igc2FtZSBwYWdlIFVSTCBjaGFuZ2VzLlxuICAgICAgY29uc3QgaXNWYWxpZFNoYWxsb3dSb3V0ZSA9IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZVxuXG4gICAgICBpZiAoXG4gICAgICAgIChvcHRpb25zIGFzIGFueSkuX2ggJiZcbiAgICAgICAgcGF0aG5hbWUgPT09ICcvX2Vycm9yJyAmJlxuICAgICAgICBzZWxmLl9fTkVYVF9EQVRBX18ucHJvcHM/LnBhZ2VQcm9wcz8uc3RhdHVzQ29kZSA9PT0gNTAwICYmXG4gICAgICAgIHByb3BzPy5wYWdlUHJvcHNcbiAgICAgICkge1xuICAgICAgICAvLyBlbnN1cmUgc3RhdHVzQ29kZSBpcyBzdGlsbCBjb3JyZWN0IGZvciBzdGF0aWMgNTAwIHBhZ2VcbiAgICAgICAgLy8gd2hlbiB1cGRhdGluZyBxdWVyeSBpbmZvcm1hdGlvblxuICAgICAgICBwcm9wcy5wYWdlUHJvcHMuc3RhdHVzQ29kZSA9IDUwMFxuICAgICAgfVxuXG4gICAgICBhd2FpdCB0aGlzLnNldChcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lISxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGNsZWFuZWRBcyxcbiAgICAgICAgcm91dGVJbmZvLFxuICAgICAgICBmb3JjZWRTY3JvbGwgfHxcbiAgICAgICAgICAoaXNWYWxpZFNoYWxsb3dSb3V0ZSB8fCAhb3B0aW9ucy5zY3JvbGwgPyBudWxsIDogeyB4OiAwLCB5OiAwIH0pXG4gICAgICApLmNhdGNoKChlKSA9PiB7XG4gICAgICAgIGlmIChlLmNhbmNlbGxlZCkgZXJyb3IgPSBlcnJvciB8fCBlXG4gICAgICAgIGVsc2UgdGhyb3cgZVxuICAgICAgfSlcblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMsIHJvdXRlUHJvcHMpXG4gICAgICAgIHRocm93IGVycm9yXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIGlmICh0aGlzLmxvY2FsZSkge1xuICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5sYW5nID0gdGhpcy5sb2NhbGVcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMsIHJvdXRlUHJvcHMpXG5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfVxuXG4gIGNoYW5nZVN0YXRlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge31cbiAgKTogdm9pZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCBnZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgIHRoaXMuX3NoYWxsb3cgPSBvcHRpb25zLnNoYWxsb3dcbiAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oXG4gICAgICAgIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgICAgaWR4OiB0aGlzLl9pZHggPSBtZXRob2QgIT09ICdwdXNoU3RhdGUnID8gdGhpcy5faWR4IDogdGhpcy5faWR4ICsgMSxcbiAgICAgICAgfSBhcyBIaXN0b3J5U3RhdGUsXG4gICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAnJyxcbiAgICAgICAgYXNcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhc3luYyBoYW5kbGVSb3V0ZUluZm9FcnJvcihcbiAgICBlcnI6IEVycm9yICYgeyBjb2RlOiBhbnk7IGNhbmNlbGxlZDogYm9vbGVhbiB9LFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgcm91dGVQcm9wczogUm91dGVQcm9wZXJ0aWVzLFxuICAgIGxvYWRFcnJvckZhaWw/OiBib29sZWFuXG4gICk6IFByb21pc2U8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgIC8vIGJ1YmJsZSB1cCBjYW5jZWxsYXRpb24gZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG5cbiAgICBpZiAoaXNBc3NldEVycm9yKGVycikgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyLCBhcywgcm91dGVQcm9wcylcblxuICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG5cbiAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgIC8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICB0aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKClcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgbGV0IENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgbGV0IHN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICAgICAgbGV0IHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+IHwgdW5kZWZpbmVkXG5cbiAgICAgIGlmIChcbiAgICAgICAgdHlwZW9mIENvbXBvbmVudCEgPT09ICd1bmRlZmluZWQnIHx8XG4gICAgICAgIHR5cGVvZiBzdHlsZVNoZWV0cyEgPT09ICd1bmRlZmluZWQnXG4gICAgICApIHtcbiAgICAgICAgOyh7IHBhZ2U6IENvbXBvbmVudCwgc3R5bGVTaGVldHMgfSA9IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoXG4gICAgICAgICAgJy9fZXJyb3InXG4gICAgICAgICkpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogQ29tcGxldGVQcml2YXRlUm91dGVJbmZvID0ge1xuICAgICAgICBwcm9wcyxcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0cyxcbiAgICAgICAgZXJyLFxuICAgICAgICBlcnJvcjogZXJyLFxuICAgICAgfVxuXG4gICAgICBpZiAoIXJvdXRlSW5mby5wcm9wcykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IGF3YWl0IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwge1xuICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICB9IGFzIGFueSlcbiAgICAgICAgfSBjYXRjaCAoZ2lwRXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKVxuICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKHJvdXRlSW5mb0Vycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgICAgIHJvdXRlSW5mb0VycixcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhcyxcbiAgICAgICAgcm91dGVQcm9wcyxcbiAgICAgICAgdHJ1ZVxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGdldFJvdXRlSW5mbyhcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIHJlc29sdmVkQXM6IHN0cmluZyxcbiAgICByb3V0ZVByb3BzOiBSb3V0ZVByb3BlcnRpZXNcbiAgKTogUHJvbWlzZTxQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGV4aXN0aW5nUm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvIHwgdW5kZWZpbmVkID0gdGhpcy5jb21wb25lbnRzW1xuICAgICAgICByb3V0ZVxuICAgICAgXVxuICAgICAgaWYgKHJvdXRlUHJvcHMuc2hhbGxvdyAmJiBleGlzdGluZ1JvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICByZXR1cm4gZXhpc3RpbmdSb3V0ZUluZm9cbiAgICAgIH1cblxuICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvOiBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gfCB1bmRlZmluZWQgPVxuICAgICAgICBleGlzdGluZ1JvdXRlSW5mbyAmJiAnaW5pdGlhbCcgaW4gZXhpc3RpbmdSb3V0ZUluZm9cbiAgICAgICAgICA/IHVuZGVmaW5lZFxuICAgICAgICAgIDogZXhpc3RpbmdSb3V0ZUluZm9cbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogQ29tcGxldGVQcml2YXRlUm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgID8gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbigocmVzKSA9PiAoe1xuICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgIHN0eWxlU2hlZXRzOiByZXMuc3R5bGVTaGVldHMsXG4gICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgfSkpXG5cbiAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IGRhdGFIcmVmOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICBkYXRhSHJlZiA9IHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICByZXNvbHZlZEFzLFxuICAgICAgICAgIF9fTl9TU0csXG4gICAgICAgICAgdGhpcy5sb2NhbGVcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldERhdGE8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvPigoKSA9PlxuICAgICAgICBfX05fU1NHXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoXG4gICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICApXG4gICAgICApXG5cbiAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlUHJvcHMpXG4gICAgfVxuICB9XG5cbiAgc2V0KFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBQcml2YXRlUm91dGVJbmZvLFxuICAgIHJlc2V0U2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCBudWxsXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlXG5cbiAgICB0aGlzLnJvdXRlID0gcm91dGVcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEsIHJlc2V0U2Nyb2xsKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWUgb3IgYCN0b3BgXG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgaWYgKGhhc2ggPT09ICcnIHx8IGhhc2ggPT09ICd0b3AnKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpXG4gICAgaWYgKGlkRWwpIHtcbiAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdXG4gICAgaWYgKG5hbWVFbCkge1xuICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KClcbiAgICB9XG4gIH1cblxuICB1cmxJc05ldyhhc1BhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBhc3luYyBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSB9ID0gcGFyc2VkXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgaWYgKG9wdGlvbnMubG9jYWxlID09PSBmYWxzZSkge1xuICAgICAgICBwYXRobmFtZSA9IG5vcm1hbGl6ZUxvY2FsZVBhdGghKHBhdGhuYW1lLCB0aGlzLmxvY2FsZXMpLnBhdGhuYW1lXG4gICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcblxuICAgICAgICBsZXQgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKGFzUGF0aClcbiAgICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9IG5vcm1hbGl6ZUxvY2FsZVBhdGghKFxuICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lLFxuICAgICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgICApXG4gICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gbG9jYWxlUGF0aFJlc3VsdC5wYXRobmFtZVxuICAgICAgICBvcHRpb25zLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUgfHwgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgIGFzUGF0aCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcbiAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzUGF0aFxuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMgJiYgYXNQYXRoLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgbGV0IHJld3JpdGVzOiBhbnlcbiAgICAgIDsoeyBfX3Jld3JpdGVzOiByZXdyaXRlcyB9ID0gYXdhaXQgZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpKVxuXG4gICAgICBjb25zdCByZXdyaXRlc1Jlc3VsdCA9IHJlc29sdmVSZXdyaXRlcyhcbiAgICAgICAgYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGFzUGF0aCwgdGhpcy5sb2NhbGUpKSxcbiAgICAgICAgcGFnZXMsXG4gICAgICAgIHJld3JpdGVzLFxuICAgICAgICBwYXJzZWQucXVlcnksXG4gICAgICAgIChwOiBzdHJpbmcpID0+IHJlc29sdmVEeW5hbWljUm91dGUocCwgcGFnZXMpLFxuICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgIClcbiAgICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmV3cml0ZXNSZXN1bHQuYXNQYXRoKSwgdGhpcy5sb2NhbGUpXG5cbiAgICAgIGlmIChyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSAmJiByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpIHtcbiAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICBwYXRobmFtZSA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZlxuICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkLnBhdGhuYW1lLCBwYWdlcylcblxuICAgICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLnBhZ2VMb2FkZXIuX2lzU3NnKHJvdXRlKS50aGVuKChpc1NzZzogYm9vbGVhbikgPT4ge1xuICAgICAgICByZXR1cm4gaXNTc2dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoXG4gICAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgICAgICAgICB0cnVlLFxuICAgICAgICAgICAgICAgIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgICAgICAgID8gb3B0aW9ucy5sb2NhbGVcbiAgICAgICAgICAgICAgICAgIDogdGhpcy5sb2NhbGVcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIDogZmFsc2VcbiAgICAgIH0pLFxuICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgIF0pXG4gIH1cblxuICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxHb29kUGFnZUNhY2hlPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH0pXG5cbiAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpXG5cbiAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICBjb25zdCBlcnJvcjogYW55ID0gbmV3IEVycm9yKFxuICAgICAgICBgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYFxuICAgICAgKVxuICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG5cbiAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdFxuICB9XG5cbiAgX2dldERhdGE8VD4oZm46ICgpID0+IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfVxuICAgIHRoaXMuY2xjID0gY2FuY2VsXG4gICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgY29uc3QgZXJyOiBhbnkgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKVxuICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFN0YXRpY0RhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiBjYWNoZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKFxuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJlxuICAgICAgIXRoaXMuaXNQcmV2aWV3ICYmXG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV1cbiAgICApIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKVxuICAgIH1cbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5zZGNbY2FjaGVLZXldID0gZGF0YVxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFNlcnZlckRhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiByZXNvdXJjZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKHRoaXMuc2RyW3Jlc291cmNlS2V5XSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XVxuICAgIH1cbiAgICByZXR1cm4gKHRoaXMuc2RyW3Jlc291cmNlS2V5XSA9IGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldXG4gICAgICAgIHJldHVybiBkYXRhXG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH0pKVxuICB9XG5cbiAgZ2V0SW5pdGlhbFByb3BzKFxuICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZSxcbiAgICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXVxuICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcCBhcyBBcHBDb21wb25lbnQpXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZywgcm91dGVQcm9wczogUm91dGVQcm9wZXJ0aWVzKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoXG4gICAgICAgICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgICAgICAgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLFxuICAgICAgICBhcyxcbiAgICAgICAgcm91dGVQcm9wc1xuICAgICAgKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KFxuICAgIGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sXG4gICAgcmVzZXRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGxcbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViKFxuICAgICAgZGF0YSxcbiAgICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQgYXMgQXBwQ29tcG9uZW50LFxuICAgICAgcmVzZXRTY3JvbGxcbiAgICApXG4gIH1cbn1cbiIsIi8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgKiBhcyBxdWVyeXN0cmluZyBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzID0gL2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRVcmwodXJsT2JqOiBVcmxPYmplY3QpIHtcbiAgbGV0IHsgYXV0aCwgaG9zdG5hbWUgfSA9IHVybE9ialxuICBsZXQgcHJvdG9jb2wgPSB1cmxPYmoucHJvdG9jb2wgfHwgJydcbiAgbGV0IHBhdGhuYW1lID0gdXJsT2JqLnBhdGhuYW1lIHx8ICcnXG4gIGxldCBoYXNoID0gdXJsT2JqLmhhc2ggfHwgJydcbiAgbGV0IHF1ZXJ5ID0gdXJsT2JqLnF1ZXJ5IHx8ICcnXG4gIGxldCBob3N0OiBzdHJpbmcgfCBmYWxzZSA9IGZhbHNlXG5cbiAgYXV0aCA9IGF1dGggPyBlbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksICc6JykgKyAnQCcgOiAnJ1xuXG4gIGlmICh1cmxPYmouaG9zdCkge1xuICAgIGhvc3QgPSBhdXRoICsgdXJsT2JqLmhvc3RcbiAgfSBlbHNlIGlmIChob3N0bmFtZSkge1xuICAgIGhvc3QgPSBhdXRoICsgKH5ob3N0bmFtZS5pbmRleE9mKCc6JykgPyBgWyR7aG9zdG5hbWV9XWAgOiBob3N0bmFtZSlcbiAgICBpZiAodXJsT2JqLnBvcnQpIHtcbiAgICAgIGhvc3QgKz0gJzonICsgdXJsT2JqLnBvcnRcbiAgICB9XG4gIH1cblxuICBpZiAocXVlcnkgJiYgdHlwZW9mIHF1ZXJ5ID09PSAnb2JqZWN0Jykge1xuICAgIHF1ZXJ5ID0gU3RyaW5nKHF1ZXJ5c3RyaW5nLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMocXVlcnkgYXMgUGFyc2VkVXJsUXVlcnkpKVxuICB9XG5cbiAgbGV0IHNlYXJjaCA9IHVybE9iai5zZWFyY2ggfHwgKHF1ZXJ5ICYmIGA/JHtxdWVyeX1gKSB8fCAnJ1xuXG4gIGlmIChwcm90b2NvbCAmJiBwcm90b2NvbC5zdWJzdHIoLTEpICE9PSAnOicpIHByb3RvY29sICs9ICc6J1xuXG4gIGlmIChcbiAgICB1cmxPYmouc2xhc2hlcyB8fFxuICAgICgoIXByb3RvY29sIHx8IHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpICYmIGhvc3QgIT09IGZhbHNlKVxuICApIHtcbiAgICBob3N0ID0gJy8vJyArIChob3N0IHx8ICcnKVxuICAgIGlmIChwYXRobmFtZSAmJiBwYXRobmFtZVswXSAhPT0gJy8nKSBwYXRobmFtZSA9ICcvJyArIHBhdGhuYW1lXG4gIH0gZWxzZSBpZiAoIWhvc3QpIHtcbiAgICBob3N0ID0gJydcbiAgfVxuXG4gIGlmIChoYXNoICYmIGhhc2hbMF0gIT09ICcjJykgaGFzaCA9ICcjJyArIGhhc2hcbiAgaWYgKHNlYXJjaCAmJiBzZWFyY2hbMF0gIT09ICc/Jykgc2VhcmNoID0gJz8nICsgc2VhcmNoXG5cbiAgcGF0aG5hbWUgPSBwYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csIGVuY29kZVVSSUNvbXBvbmVudClcbiAgc2VhcmNoID0gc2VhcmNoLnJlcGxhY2UoJyMnLCAnJTIzJylcblxuICByZXR1cm4gYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWBcbn1cbiIsIi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKVxufVxuIiwiaW1wb3J0IHsgZ2V0TG9jYXRpb25PcmlnaW4gfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG4vKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQgd2l0aCBvbmUgZXhjZXB0aW9uLCBpbiB0aGUgYnJvd3NlciwgYWJzb2x1dGUgdXJscyB0aGF0IGFyZSBvblxuICogdGhlIGN1cnJlbnQgb3JpZ2luIHdpbGwgYmUgcGFyc2VkIGFzIHJlbGF0aXZlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybDogc3RyaW5nLCBiYXNlPzogc3RyaW5nKSB7XG4gIGNvbnN0IGdsb2JhbEJhc2UgPSBuZXcgVVJMKFxuICAgIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gJ2h0dHA6Ly9uJyA6IGdldExvY2F0aW9uT3JpZ2luKClcbiAgKVxuICBjb25zdCByZXNvbHZlZEJhc2UgPSBiYXNlID8gbmV3IFVSTChiYXNlLCBnbG9iYWxCYXNlKSA6IGdsb2JhbEJhc2VcbiAgY29uc3QgeyBwYXRobmFtZSwgc2VhcmNoUGFyYW1zLCBzZWFyY2gsIGhhc2gsIGhyZWYsIG9yaWdpbiB9ID0gbmV3IFVSTChcbiAgICB1cmwsXG4gICAgcmVzb2x2ZWRCYXNlXG4gIClcbiAgaWYgKG9yaWdpbiAhPT0gZ2xvYmFsQmFzZS5vcmlnaW4pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYGludmFyaWFudDogaW52YWxpZCByZWxhdGl2ZSBVUkwsIHJvdXRlciByZWNlaXZlZCAke3VybH1gKVxuICB9XG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgcXVlcnk6IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKSxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmOiBocmVmLnNsaWNlKGdsb2JhbEJhc2Uub3JpZ2luLmxlbmd0aCksXG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5cbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KFxuICBzZWFyY2hQYXJhbXM6IFVSTFNlYXJjaFBhcmFtc1xuKTogUGFyc2VkVXJsUXVlcnkge1xuICBjb25zdCBxdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgIGlmICh0eXBlb2YgcXVlcnlba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSB2YWx1ZVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSkge1xuICAgICAgOyhxdWVyeVtrZXldIGFzIHN0cmluZ1tdKS5wdXNoKHZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBxdWVyeVtrZXldID0gW3F1ZXJ5W2tleV0gYXMgc3RyaW5nLCB2YWx1ZV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBxdWVyeVxufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHBhcmFtOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoXG4gICAgdHlwZW9mIHBhcmFtID09PSAnc3RyaW5nJyB8fFxuICAgICh0eXBlb2YgcGFyYW0gPT09ICdudW1iZXInICYmICFpc05hTihwYXJhbSkpIHx8XG4gICAgdHlwZW9mIHBhcmFtID09PSAnYm9vbGVhbidcbiAgKSB7XG4gICAgcmV0dXJuIFN0cmluZyhwYXJhbSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJydcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhcbiAgdXJsUXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBjb25zdCByZXN1bHQgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKClcbiAgT2JqZWN0LmVudHJpZXModXJsUXVlcnkpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSkgPT4gcmVzdWx0LmFwcGVuZChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0oaXRlbSkpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQuc2V0KGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbSh2YWx1ZSkpXG4gICAgfVxuICB9KVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ24oXG4gIHRhcmdldDogVVJMU2VhcmNoUGFyYW1zLFxuICAuLi5zZWFyY2hQYXJhbXNMaXN0OiBVUkxTZWFyY2hQYXJhbXNbXVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgc2VhcmNoUGFyYW1zTGlzdC5mb3JFYWNoKChzZWFyY2hQYXJhbXMpID0+IHtcbiAgICBBcnJheS5mcm9tKHNlYXJjaFBhcmFtcy5rZXlzKCkpLmZvckVhY2goKGtleSkgPT4gdGFyZ2V0LmRlbGV0ZShrZXkpKVxuICAgIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB0YXJnZXQuYXBwZW5kKGtleSwgdmFsdWUpKVxuICB9KVxuICByZXR1cm4gdGFyZ2V0XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXNvbHZlUmV3cml0ZXMoKSB7fVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCJleHBvcnQgaW50ZXJmYWNlIEdyb3VwIHtcbiAgcG9zOiBudW1iZXJcbiAgcmVwZWF0OiBib29sZWFuXG4gIG9wdGlvbmFsOiBib29sZWFuXG59XG5cbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpXG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKHBhcmFtOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3B0aW9uYWwgPSBwYXJhbS5zdGFydHNXaXRoKCdbJykgJiYgcGFyYW0uZW5kc1dpdGgoJ10nKVxuICBpZiAob3B0aW9uYWwpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDEsIC0xKVxuICB9XG4gIGNvbnN0IHJlcGVhdCA9IHBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpXG4gIGlmIChyZXBlYXQpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDMpXG4gIH1cbiAgcmV0dXJuIHsga2V5OiBwYXJhbSwgcmVwZWF0LCBvcHRpb25hbCB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KFxuICBub3JtYWxpemVkUm91dGU6IHN0cmluZ1xuKToge1xuICByZTogUmVnRXhwXG4gIG5hbWVkUmVnZXg/OiBzdHJpbmdcbiAgcm91dGVLZXlzPzogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9XG4gIGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9XG59IHtcbiAgY29uc3Qgc2VnbWVudHMgPSAobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuICAgIC5zbGljZSgxKVxuICAgIC5zcGxpdCgnLycpXG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH0gPSB7fVxuICBsZXQgZ3JvdXBJbmRleCA9IDFcbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgZ3JvdXBzW2tleV0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQsIG9wdGlvbmFsIH1cbiAgICAgICAgcmV0dXJuIHJlcGVhdCA/IChvcHRpb25hbCA/ICcoPzovKC4rPykpPycgOiAnLyguKz8pJykgOiAnLyhbXi9dKz8pJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICB9XG4gICAgfSlcbiAgICAuam9pbignJylcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbGV0IHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgIGxldCByb3V0ZUtleUNoYXJMZW5ndGggPSAxXG5cbiAgICAvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG4gICAgY29uc3QgZ2V0U2FmZVJvdXRlS2V5ID0gKCkgPT4ge1xuICAgICAgbGV0IHJvdXRlS2V5ID0gJydcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3V0ZUtleUNoYXJMZW5ndGg7IGkrKykge1xuICAgICAgICByb3V0ZUtleSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpXG4gICAgICAgIHJvdXRlS2V5Q2hhckNvZGUrK1xuXG4gICAgICAgIGlmIChyb3V0ZUtleUNoYXJDb2RlID4gMTIyKSB7XG4gICAgICAgICAgcm91dGVLZXlDaGFyTGVuZ3RoKytcbiAgICAgICAgICByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJvdXRlS2V5XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGVLZXlzOiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH0gPSB7fVxuXG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgICAvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4gICAgICAgICAgLy8gdGhlIG5hbWVkIHJlZ2V4XG4gICAgICAgICAgbGV0IGNsZWFuZWRLZXkgPSBrZXkucmVwbGFjZSgvXFxXL2csICcnKVxuICAgICAgICAgIGxldCBpbnZhbGlkS2V5ID0gZmFsc2VcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBrZXkgaXMgc3RpbGwgaW52YWxpZCBhbmQgZmFsbGJhY2sgdG8gdXNpbmcgYSBrbm93blxuICAgICAgICAgIC8vIHNhZmUga2V5XG4gICAgICAgICAgaWYgKGNsZWFuZWRLZXkubGVuZ3RoID09PSAwIHx8IGNsZWFuZWRLZXkubGVuZ3RoID4gMzApIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwgMSkpKSkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW52YWxpZEtleSkge1xuICAgICAgICAgICAgY2xlYW5lZEtleSA9IGdldFNhZmVSb3V0ZUtleSgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVLZXlzW2NsZWFuZWRLZXldID0ga2V5XG4gICAgICAgICAgcmV0dXJuIHJlcGVhdFxuICAgICAgICAgICAgPyBvcHRpb25hbFxuICAgICAgICAgICAgICA/IGAoPzovKD88JHtjbGVhbmVkS2V5fT4uKz8pKT9gXG4gICAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgXG4gICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmpvaW4oJycpXG5cbiAgICByZXR1cm4ge1xuICAgICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgICBncm91cHMsXG4gICAgICByb3V0ZUtleXMsXG4gICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICBncm91cHMsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IGZvcm1hdFVybCB9IGZyb20gJy4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwnXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgRW52IH0gZnJvbSAnQG5leHQvZW52J1xuaW1wb3J0IHsgQnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL3NlcnZlci9nZXQtcGFnZS1maWxlcydcbmltcG9ydCB7IERvbWFpbkxvY2FsZXMgfSBmcm9tICcuLi9zZXJ2ZXIvY29uZmlnJ1xuaW1wb3J0IHsgUHJldmlld0RhdGEgfSBmcm9tICduZXh0L3R5cGVzJ1xuXG4vKipcbiAqIFR5cGVzIHVzZWQgYnkgYm90aCBuZXh0IGFuZCBuZXh0LXNlcnZlclxuICovXG5cbmV4cG9ydCB0eXBlIE5leHRDb21wb25lbnRUeXBlPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPiA9IENvbXBvbmVudFR5cGU8UD4gJiB7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBpbml0aWFsIHBhZ2UgbG9hZCBkYXRhIHBvcHVsYXRpb24uIERhdGEgcmV0dXJuZWQgZnJvbSBgZ2V0SW5pdGlhbFByb3BzYCBpcyBzZXJpYWxpemVkIHdoZW4gc2VydmVyIHJlbmRlcmVkLlxuICAgKiBNYWtlIHN1cmUgdG8gcmV0dXJuIHBsYWluIGBPYmplY3RgIHdpdGhvdXQgdXNpbmcgYERhdGVgLCBgTWFwYCwgYFNldGAuXG4gICAqIEBwYXJhbSBjdHggQ29udGV4dCBvZiBgcGFnZWBcbiAgICovXG4gIGdldEluaXRpYWxQcm9wcz8oY29udGV4dDogQyk6IElQIHwgUHJvbWlzZTxJUD5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIERvY3VtZW50Q29udGV4dCxcbiAgRG9jdW1lbnRJbml0aWFsUHJvcHMsXG4gIERvY3VtZW50UHJvcHNcbj4gJiB7XG4gIHJlbmRlckRvY3VtZW50KFxuICAgIERvY3VtZW50OiBEb2N1bWVudFR5cGUsXG4gICAgcHJvcHM6IERvY3VtZW50UHJvcHNcbiAgKTogUmVhY3QuUmVhY3RFbGVtZW50XG59XG5cbmV4cG9ydCB0eXBlIEFwcFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlXG4+XG5cbmV4cG9ydCB0eXBlIEFwcFRyZWVUeXBlID0gQ29tcG9uZW50VHlwZTxcbiAgQXBwSW5pdGlhbFByb3BzICYgeyBbbmFtZTogc3RyaW5nXTogYW55IH1cbj5cblxuLyoqXG4gKiBXZWIgdml0YWxzIHByb3ZpZGVkIHRvIF9hcHAucmVwb3J0V2ViVml0YWxzIGJ5IENvcmUgV2ViIFZpdGFscyBwbHVnaW4gZGV2ZWxvcGVkIGJ5IEdvb2dsZSBDaHJvbWUgdGVhbS5cbiAqIGh0dHBzOi8vbmV4dGpzLm9yZy9ibG9nL25leHQtOS00I2ludGVncmF0ZWQtd2ViLXZpdGFscy1yZXBvcnRpbmdcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dFdlYlZpdGFsc01ldHJpYyA9IHtcbiAgaWQ6IHN0cmluZ1xuICBsYWJlbDogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICBzdGFydFRpbWU6IG51bWJlclxuICB2YWx1ZTogbnVtYmVyXG59XG5cbmV4cG9ydCB0eXBlIEVuaGFuY2VyPEM+ID0gKENvbXBvbmVudDogQykgPT4gQ1xuXG5leHBvcnQgdHlwZSBDb21wb25lbnRzRW5oYW5jZXIgPVxuICB8IHtcbiAgICAgIGVuaGFuY2VBcHA/OiBFbmhhbmNlcjxBcHBUeXBlPlxuICAgICAgZW5oYW5jZUNvbXBvbmVudD86IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuICAgIH1cbiAgfCBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZVJlc3VsdCA9IHtcbiAgaHRtbDogc3RyaW5nXG4gIGhlYWQ/OiBBcnJheTxKU1guRWxlbWVudCB8IG51bGw+XG59XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2UgPSAoXG4gIG9wdGlvbnM/OiBDb21wb25lbnRzRW5oYW5jZXJcbikgPT4gUmVuZGVyUGFnZVJlc3VsdCB8IFByb21pc2U8UmVuZGVyUGFnZVJlc3VsdD5cblxuZXhwb3J0IHR5cGUgQmFzZUNvbnRleHQgPSB7XG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIFtrOiBzdHJpbmddOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgTkVYVF9EQVRBID0ge1xuICBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PlxuICBwYWdlOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGJ1aWxkSWQ6IHN0cmluZ1xuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBydW50aW1lQ29uZmlnPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfVxuICBuZXh0RXhwb3J0PzogYm9vbGVhblxuICBhdXRvRXhwb3J0PzogYm9vbGVhblxuICBpc0ZhbGxiYWNrPzogYm9vbGVhblxuICBkeW5hbWljSWRzPzogKHN0cmluZyB8IG51bWJlcilbXVxuICBlcnI/OiBFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9XG4gIGdzcD86IGJvb2xlYW5cbiAgZ3NzcD86IGJvb2xlYW5cbiAgY3VzdG9tU2VydmVyPzogYm9vbGVhblxuICBnaXA/OiBib29sZWFuXG4gIGFwcEdpcD86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4gIHNjcmlwdExvYWRlcj86IGFueVtdXG4gIGlzUHJldmlldz86IGJvb2xlYW5cbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGRvY0NvbXBvbmVudHNSZW5kZXJlZDoge1xuICAgIEh0bWw/OiBib29sZWFuXG4gICAgTWFpbj86IGJvb2xlYW5cbiAgICBIZWFkPzogYm9vbGVhblxuICAgIE5leHRTY3JpcHQ/OiBib29sZWFuXG4gIH1cbiAgYnVpbGRNYW5pZmVzdDogQnVpbGRNYW5pZmVzdFxuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGR5bmFtaWNJbXBvcnRzOiBzdHJpbmdbXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG4gIHVuc3RhYmxlX0pzUHJlbG9hZD86IGZhbHNlXG4gIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nOiBzdHJpbmdcbiAgc2NyaXB0TG9hZGVyOiB7IGRlZmVyPzogc3RyaW5nW107IGVhZ2VyPzogYW55W10gfVxuICBsb2NhbGU/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlcXVlc3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0QXBpUmVxdWVzdCBleHRlbmRzIEluY29taW5nTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYHF1ZXJ5YCB2YWx1ZXMgZnJvbSB1cmxcbiAgICovXG4gIHF1ZXJ5OiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW11cbiAgfVxuICAvKipcbiAgICogT2JqZWN0IG9mIGBjb29raWVzYCBmcm9tIGhlYWRlclxuICAgKi9cbiAgY29va2llczoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9XG5cbiAgYm9keTogYW55XG5cbiAgZW52OiBFbnZcblxuICBwcmV2aWV3PzogYm9vbGVhblxuICAvKipcbiAgICogUHJldmlldyBkYXRhIHNldCBvbiB0aGUgcmVxdWVzdCwgaWYgYW55XG4gICAqICovXG4gIHByZXZpZXdEYXRhPzogUHJldmlld0RhdGFcbn1cblxuLyoqXG4gKiBTZW5kIGJvZHkgb2YgcmVzcG9uc2VcbiAqL1xudHlwZSBTZW5kPFQ+ID0gKGJvZHk6IFQpID0+IHZvaWRcblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlSZXNwb25zZTxUID0gYW55PiA9IFNlcnZlclJlc3BvbnNlICYge1xuICAvKipcbiAgICogU2VuZCBkYXRhIGBhbnlgIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIHNlbmQ6IFNlbmQ8VD5cbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBganNvbmAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAganNvbjogU2VuZDxUPlxuICBzdGF0dXM6IChzdGF0dXNDb2RlOiBudW1iZXIpID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdCh1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdChzdGF0dXM6IG51bWJlciwgdXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cblxuICAvKipcbiAgICogU2V0IHByZXZpZXcgZGF0YSBmb3IgTmV4dC5qcycgcHJlcmVuZGVyIG1vZGVcbiAgICovXG4gIHNldFByZXZpZXdEYXRhOiAoXG4gICAgZGF0YTogb2JqZWN0IHwgc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIChpbiBzZWNvbmRzKSBmb3IgdGhlIHByZXZpZXcgc2Vzc2lvbiB0byBsYXN0IGZvci5cbiAgICAgICAqIFRoZSBnaXZlbiBudW1iZXIgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYW4gaW50ZWdlciBieSByb3VuZGluZyBkb3duLlxuICAgICAgICogQnkgZGVmYXVsdCwgbm8gbWF4aW11bSBhZ2UgaXMgc2V0IGFuZCB0aGUgcHJldmlldyBzZXNzaW9uIGZpbmlzaGVzXG4gICAgICAgKiB3aGVuIHRoZSBjbGllbnQgc2h1dHMgZG93biAoYnJvd3NlciBpcyBjbG9zZWQpLlxuICAgICAgICovXG4gICAgICBtYXhBZ2U/OiBudW1iZXJcbiAgICB9XG4gICkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIGNsZWFyUHJldmlld0RhdGE6ICgpID0+IE5leHRBcGlSZXNwb25zZTxUPlxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgaGFuZGxlclxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpSGFuZGxlcjxUID0gYW55PiA9IChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8VD5cbikgPT4gdm9pZCB8IFByb21pc2U8dm9pZD5cblxuLyoqXG4gKiBVdGlsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXhlY09uY2U8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gUmV0dXJuVHlwZTxUPj4oXG4gIGZuOiBUXG4pOiBUIHtcbiAgbGV0IHVzZWQgPSBmYWxzZVxuICBsZXQgcmVzdWx0OiBSZXR1cm5UeXBlPFQ+XG5cbiAgcmV0dXJuICgoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBpZiAoIXVzZWQpIHtcbiAgICAgIHVzZWQgPSB0cnVlXG4gICAgICByZXN1bHQgPSBmbiguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pIGFzIFRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uXG4gIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lPFA+KENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxQPikge1xuICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICA/IENvbXBvbmVudFxuICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNTZW50KHJlczogU2VydmVyUmVzcG9uc2UpIHtcbiAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHM8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+KEFwcDogTmV4dENvbXBvbmVudFR5cGU8QywgSVAsIFA+LCBjdHg6IEMpOiBQcm9taXNlPElQPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKEFwcC5wcm90b3R5cGU/LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgIEFwcFxuICAgICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKVxuXG4gIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt9IGFzIElQXG4gIH1cblxuICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuXG4gIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICByZXR1cm4gcHJvcHNcbiAgfVxuXG4gIGlmICghcHJvcHMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgIEFwcFxuICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYFxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgICBBcHBcbiAgICAgICAgKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzXG59XG5cbmV4cG9ydCBjb25zdCB1cmxPYmplY3RLZXlzID0gW1xuICAnYXV0aCcsXG4gICdoYXNoJyxcbiAgJ2hvc3QnLFxuICAnaG9zdG5hbWUnLFxuICAnaHJlZicsXG4gICdwYXRoJyxcbiAgJ3BhdGhuYW1lJyxcbiAgJ3BvcnQnLFxuICAncHJvdG9jb2wnLFxuICAncXVlcnknLFxuICAnc2VhcmNoJyxcbiAgJ3NsYXNoZXMnLFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsOiBVcmxPYmplY3QpOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9ybWF0VXJsKHVybClcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplUGF0aFNlcD1ub3JtYWxpemVQYXRoU2VwO2V4cG9ydHMuZGVub3JtYWxpemVQYWdlUGF0aD1kZW5vcm1hbGl6ZVBhZ2VQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZVBhdGhTZXAocGF0aCl7cmV0dXJuIHBhdGgucmVwbGFjZSgvXFxcXC9nLCcvJyk7fWZ1bmN0aW9uIGRlbm9ybWFsaXplUGFnZVBhdGgocGFnZSl7cGFnZT1ub3JtYWxpemVQYXRoU2VwKHBhZ2UpO2lmKHBhZ2Uuc3RhcnRzV2l0aCgnL2luZGV4LycpKXtwYWdlPXBhZ2Uuc2xpY2UoNik7fWVsc2UgaWYocGFnZT09PScvaW5kZXgnKXtwYWdlPScvJzt9cmV0dXJuIHBhZ2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9pbWFnZScpXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJmdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2V4dGVuZHM7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcclxuaW1wb3J0IGNvb2tpZSBmcm9tICdjb29raWUnO1xyXG5pbXBvcnQgeyBkYiB9IGZyb20gJy4uLy4uLy4uL2xpYi9maXJlYmFzZSc7XHJcbmltcG9ydCBUaXBweU1vbnN0ZXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9kYXNoYm9hcmQvVGlwcHknO1xyXG5pbXBvcnQgTmF2YmFyVGVtcGxhdGUgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9kYXNoYm9hcmQvTmF2YmFyVGVtcGxhdGUnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBnc2FwLCB7IFBvd2VyNCB9IGZyb20gJ2dzYXAnO1xyXG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSAnLi4vLi4vLi4vbGliL25ld0F1dGgnO1xyXG5pbXBvcnQgQm91bmNlTG9hZGVyQ29tcG9uZW50IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvQm91bmNlTG9hZGVyJztcclxuaW1wb3J0IEVtcHR5U3RhcnR1cCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2Rhc2hib2FyZC9zdGFydHVwL0VtcHR5U3RhcnR1cCc7XHJcbmltcG9ydCBTdGFydHVwU3VjY2VzcyBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2Rhc2hib2FyZC9zdGFydHVwL1N0YXJ0dXBTdWNjZXNzJztcclxuaW1wb3J0IE1lbWJlcnNDb2RlIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvZGFzaGJvYXJkL01lbWJlcnNDb2RlJztcclxuXHJcbmNvbnN0IFByb2plY3RzTWFuYWdlciA9ICgpID0+IHtcclxuICBjb25zdCBbcHJvamVjdHMsIHNldFByb2plY3RzXSA9IHVzZVN0YXRlKFtdKTtcclxuICB1c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgcHJvamVjdHNBcnJheSA9IFtdO1xyXG4gICAgY29uc3QgdXNlclVpZCA9IENvb2tpZXMuZ2V0KCd1aWQnKTtcclxuICAgIGRiLmNvbGxlY3Rpb24oJ3Byb2plY3RzJykub25TbmFwc2hvdCgocXVlcnlTbmFwc2hvdCkgPT4ge1xyXG4gICAgICBxdWVyeVNuYXBzaG90LmRvY3MubWFwKChkb2MpID0+IHtcclxuICAgICAgICBjb25zdCBkYXRhID0gZG9jLmRhdGEoKTtcclxuICAgICAgICBkYXRhLnByb2plY3RVc2Vycy5tYXAoKHVzZXIpID0+IHtcclxuICAgICAgICAgIGlmICh1c2VyLnVzZXJVaWQgPT09IHVzZXJVaWQpIHtcclxuICAgICAgICAgICAgcHJvamVjdHNBcnJheS5wdXNoKGRhdGEpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgICAgc2V0UHJvamVjdHMocHJvamVjdHNBcnJheSk7XHJcbiAgICB9KTtcclxuICAgIC8vIGxldCByZWYgPSBkYi5jb2xsZWN0aW9uKCdwcm9qZWN0cycpO1xyXG4gICAgLy8gY29uc3Qgc25hcHNob3QgPSBhd2FpdCByZWYuZ2V0KCk7XHJcbiAgICAvLyBzbmFwc2hvdC5mb3JFYWNoKChkb2MpID0+IHtcclxuICAgIC8vICAgY29uc3QgZGF0YSA9IGRvYy5kYXRhKCk7XHJcbiAgICAvLyAgIGRhdGEucHJvamVjdFVzZXJzLm1hcCgodXNlcikgPT4ge1xyXG4gICAgLy8gICAgIGlmICh1c2VyLnVzZXJVaWQgPT09IHVzZXJVaWQpIHtcclxuICAgIC8vICAgICAgIHByb2plY3RzQXJyYXkucHVzaCh7IC4uLmRhdGEgfSk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICB9KTtcclxuICAgIC8vICAgc2V0UHJvamVjdHMocHJvamVjdHNBcnJheSk7XHJcbiAgICAvLyB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnNvbGUubG9nKHByb2plY3RzKTtcclxuICBjb25zb2xlLmxvZyhwcm9qZWN0cy5sZW5ndGgpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IGNvbnRhaW5lclJlZiA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IHsgY3VycmVudFVzZXIgfSA9IHVzZUF1dGgoKTtcclxuICBjb25zb2xlLmxvZyhjdXJyZW50VXNlcik7XHJcblxyXG4gIGNvbnN0IG9uUHJvamVjdENyZWF0ZSA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBnc2FwLnRvKGNvbnRhaW5lclJlZi5jdXJyZW50LCB7XHJcbiAgICAgIGF1dG9BbHBoYTogMCxcclxuICAgICAgZHVyYXRpb246IDEsXHJcbiAgICAgIGVhc2U6IFBvd2VyNC5lYXNlT3V0LFxyXG4gICAgfSk7XHJcbiAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIHJvdXRlci5wdXNoKCcvZGFzaGJvYXJkL3Byb2plY3RzL25ldy1zdGFydHVwJyk7XHJcbiAgICAvLyB9LCAxMjAwKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBbYWN0aXZlQ2xhc3MsIHNldEFjdGl2ZUNsYXNzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgY2hvb3NlQ2xhc3Nlc0NsaWNrID0gKGluZGV4KSA9PiB7XHJcbiAgICBjb25zdCBtZW51RG90cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBtZW51JHtpbmRleH1gKTtcclxuICAgIGlmIChhY3RpdmVDbGFzcykge1xyXG4gICAgICBnc2FwLnRvKG1lbnVEb3RzLCB7IGF1dG9BbHBoYTogMCB9KTtcclxuICAgICAgc2V0QWN0aXZlQ2xhc3MoZmFsc2UpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZ3NhcC50byhtZW51RG90cywgeyBhdXRvQWxwaGE6IDEgfSk7XHJcbiAgICAgIHNldEFjdGl2ZUNsYXNzKHRydWUpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxUaXBweU1vbnN0ZXJcclxuICAgICAgICBzdGFydHVwc1xyXG4gICAgICAgIGNvbnRlbnRDbGFzcz1cImgtMzYgdy04MCBzaGFkb3ctbGcgcm91bmRlZC0yeGwgYmctcHJpbWFyeSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiXHJcbiAgICAgICAgY29udGVudFRleHQ9XCJUaGlzIGlzIGEgcGxhY2Ugd2hlcmUgbWFnaWNhbCB0aGluZ3MgaGFwcGVuIFwiXHJcbiAgICAgICAgY29udGVudFRleHQxPVwiIEp1c3Qgc3RhcnQgY3JlYXRpbmcgeW91ciBzdGFydHVwIGFuZCBicmluZyB5b3VyIGlkZWEgaW50byByZWFsaXR5LiBPbmNlIHlvdSd2ZSBkb25lIHRoYXQsIHlvdSBjYW4gbWFuYWdlIGl0IGZyb20gdGhlIG1haW4gcGFuZWwuIEZlZWwgZnJlZSB0byBlZGl0LCBzYXZlIG9yIGRlbGV0ZSB5b3VyIGlkZWFcIlxyXG4gICAgICAvPlxyXG4gICAgICA8TmF2YmFyVGVtcGxhdGU+XHJcbiAgICAgICAgPGRpdiByZWY9e2NvbnRhaW5lclJlZn0gY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIHctZnVsbCByZWxhdGl2ZSBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciB0ZXh0LXByaW1hcnlkYXJrXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBzbTptYXgtdy1zbUNvbnRhaW5lciBtZDptYXgtdy1tZENvbnRhaW5lciBsZzptYXgtdy1sZ0NvbnRhaW5lciB4bDptYXgtdy14bENvbnRhaW5lciAyeGw6bWF4LXcteHhsQ29udGFpbmVyIG5vcm1hbDptYXgtdy1ub3JtYWxDb250YWluZXIgcmVsYXRpdmUgbXQtMTJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIGdyaWQtcm93cy0xIGdyaWQtZmxvdy1jb2xcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjMwXCJcclxuICAgICAgICAgICAgICAgICAgd2lkdGg9XCIzMFwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZpbGwtY3VycmVudCB0ZXh0LXByaW1hcnkgZGFyazp0ZXh0LXByaW1hcnlkYXJrXCJcclxuICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTI4IDEyOFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDx0aXRsZT5MYW5kaW5nIFN1Y2Nlc3M8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgICA8ZyBpZD1cIkxhbmRpbmdfU3VjY2Vzc1wiIGRhdGEtbmFtZT1cIkxhbmRpbmcgU3VjY2Vzc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbHMtMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkPVwiTTEwOS4zLDkwLjFBNDYsNDYsMCwwLDAsNjUsMzZWMjAuMDhjMS43OC0uNjIsNy4yMS0yLjE0LDEyLjU3LjIzYTE5LjMzLDE5LjMzLDAsMCwwLDE0LjgyLDBjLjg3LS4zOC42MS4zMS42MS0xNy45M2ExLDEsMCwwLDAtMS40My0uOTNjLS4wNywwLTYuNjksMi44Ny0xMy4xOCwwQTE5LjQxLDE5LjQxLDAsMCwwLDY1LC45MywxLDEsMCwwLDAsNjMsMVYzNmE0NS44Niw0NS44NiwwLDAsMC0yOC42NiwxMC44QzE2LjE4LDQwLjQ4LDQsNDAsLjc5LDQ1LjUxLTIuMjksNTAuODYsMy45NCw1OS4zLDEwLDY1LjY4QTExLDExLDAsMCwwLDE4LDgzYy44MSwzOC40MSw0Ni4wOCw1OS4yLDc1LjY2LDM0LjIxLDguNTMsMywyOSw5LjE1LDMzLjU1LDEuMzFDMTMwLjM5LDExMywxMjMuODYsMTAyLjY1LDEwOS4zLDkwLjFaTTc3LjU5LDMuMzFBMTkuMzksMTkuMzksMCwwLDAsOTEsMy44M1YxOC42OGMtMS43OS42Mi03LjIyLDIuMTMtMTIuNTctLjIzQTE5LjE5LDE5LjE5LDAsMCwwLDY1LDE3LjkzVjMuMDhDNjYuODEsMi40Niw3Mi4yNCwxLDc3LjU5LDMuMzFaTTY1LDQ1di03YzM5LjY5LjkxLDU4LDUwLjI3LDI4LjIxLDc2LjgxQzcxLjMyLDEwNyw0Niw5Mi42NiwyNy43Nyw3OC42NGExMSwxMSwwLDAsMC0zLjItMTYuMTNBNDMuODgsNDMuODgsMCwwLDEsNjMsMzguMDZWNDVBMSwxLDAsMCwwLDY1LDQ1Wk0zMi41NSw0OC4zNmE0Ni4yMSw0Ni4yMSwwLDAsMC05LjgzLDEzLjI4LDEwLjkzLDEwLjkzLDAsMCwwLTExLjQsMi40N0MtOC4zOSw0My4yMyw1LjIzLDM5LjA4LDMyLjU1LDQ4LjM2Wk0xMCw3MmE5LDksMCwxLDEsOSw5QTksOSwwLDAsMSwxMCw3MlptMTAsMTFhMTEsMTEsMCwwLDAsNi4zNC0yLjgyYzE4LjQ1LDE0LjIxLDQzLjQ1LDI4LjM1LDY1LjA1LDM2LjIyQzYzLDEzOS4xNiwyMC44MywxMTkuMSwyMC4wNSw4M1ptMTA1LjQsMzQuNWMtMi41MSw0LjM1LTE0LDMuNjItMzAtMS44NWE0NS42MSw0NS42MSwwLDAsMCwxMy40Mi0yMy4yMUMxMjEuNTksMTAzLjU4LDEyOCwxMTMuMTIsMTI1LjQ1LDExNy40N1pcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic2VsZi1lbmQgdGV4dC0yeGwgcGwtMiBkYXJrOnRleHQtYmFja2dyb3VuZFwiPlN0YXJ0dXBzPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWVuZFwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gb25Qcm9qZWN0Q3JlYXRlKGUpfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJob3ZlcjpiZy1wcmltYXJ5IGhvdmVyOnRleHQtd2hpdGUgZGFyazpob3ZlcjpiZy1wcmltYXJ5ZGFyayBkYXJrOmhvdmVyOnRleHQtYmFja2dyb3VuZCBmb2N1czpvdXRsaW5lLW5vbmUgYm9yZGVyIGJvcmRlci1wcmltYXJ5IHRleHQtcHJpbWFyeSB0ZXh0LWJhc2UgZm9udC1saWdodCBweS0yIHB4LTYgcm91bmRlZC0yeGwgZGFyazp0ZXh0LXByaW1hcnlkYXJrIGRhcms6Ym9yZGVyLXByaW1hcnlkYXJrXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgTmV3IHN0YXJ0dXBcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1zZWNvbmRhcnkgdGV4dC1tZCB0ZXh0LWdyYXlcIj5CcmluZyB5b3VyIGlkZWEgaW50byByZWFsaXR5PC9oMT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyBtdC0xMCAtbWItNiBkYXJrOnRleHQtYmFja2dyb3VuZFwiPklkZWFzIHlvdSBpbnZlbnRlZDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGdyaWQgc206Z3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTJmciBsZzpncmlkLWNvbHMtM2ZyIDJ4bDpncmlkLWNvbHMtNGZyIGdhcC04IGJvcmRlci1yLTYgcm91bmRlZC0yeGwgYmctd2hpdGUgbXQtOCBtYi04IGRhcms6YmctYmFja2dyb3VuZCBwLTggdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICB7cHJvamVjdHMgPyAoXHJcbiAgICAgICAgICAgICAgICBwcm9qZWN0cy5sZW5ndGggPT0gMCA/IChcclxuICAgICAgICAgICAgICAgICAgPEVtcHR5U3RhcnR1cCBvblByb2plY3RDcmVhdGU9e29uUHJvamVjdENyZWF0ZX0gLz5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgIHByb2plY3RzLm1hcCgoeyBpbWFnZU5hbWUsIGltYWdlRmlsZVVybCwgcHJvamVjdE5hbWUsIHByb2plY3REZXNjcmlwdGlvbiwgcHJvamVjdElkIH0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93IHJvdW5kZWQtMnhsIGZsZXggZmxleC13cmFwIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBmbGV4LWNvbCBob3ZlcjpzaGFkb3ctbGcgdHJhbnNmb3JtIGhvdmVyOnNjYWxlLTEwNSBob3ZlcjotdHJhbnNsYXRlLXktMiBob3ZlcjotdHJhbnNsYXRlLXgtMiB0cmFuc2l0aW9uIGR1cmF0aW9uLTUwMCBlYXNlLWluLW91dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBEUk9QRE9XTiBTVEFSVCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBpbmxpbmUtYmxvY2sgdGV4dC1yaWdodCB3LTQvNSB0b3AtNCByaWdodC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY2hvb3NlQ2xhc3Nlc0NsaWNrKGluZGV4KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9kb3RzLW1lbnUyLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezI2fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezI2fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2BtZW51JHtpbmRleH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib3JpZ2luLXRvcC1yaWdodCBhYnNvbHV0ZSBsZWZ0LTEvMiB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS14LTEvMiB3LTQ0IGxnOnctNDggc2hhZG93LXhsIGJnLXdoaXRlIGZvY3VzOm91dGxpbmUtbm9uZSBpbnZpc2libGUgcm91bmRlZC0yeGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMSB0ZXh0LWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cmFuc2l0aW9uIGR1cmF0aW9uLTUwMCBlYXNlLWluLW91dCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gaG92ZXI6YmctcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIG9uQ2xpY2s9eyhlKSA9PiBvblByb2plY3RFZGl0KGUsIGltYWdlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHB4LTQgcHktMiAyeGw6cHktMyB0ZXh0LXNtIHRleHQtcHJpbWFyeWRhcmsgdHJhbnNpdGlvbiBkdXJhdGlvbi01MDAgZWFzZS1pbi1vdXQgaG92ZXI6dGV4dC1iYWNrZ3JvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFZGl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1yLTMgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgcmVsYXRpdmUgYm90dG9tLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2dpZnMvd2hhbGUuZ2lmXCIgaGVpZ2h0PXszMH0gd2lkdGg9ezMwfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJhbnNpdGlvbiBkdXJhdGlvbi01MDAgZWFzZS1pbi1vdXQgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGhvdmVyOmJnLXByaW1hcnkgcm91bmRlZC1ibC0yeGwgcm91bmRlZC1ici0yeGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICBvbkNsaWNrPXsoZSkgPT4gb25Qcm9qZWN0RGVsZXRlKGUsIGltYWdlLnByb2plY3RJZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayBweC00IHB5LTIgMnhsOnB5LTMgdGV4dC1zbSB0ZXh0LXByaW1hcnlkYXJrIHRyYW5zaXRpb24gZHVyYXRpb24tNTAwIGVhc2UtaW4tb3V0IGhvdmVyOnRleHQtYmFja2dyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVtb3ZlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1yLTMgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgcmVsYXRpdmUgYm90dG9tLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2dpZnMvYm9tYi5naWZcIiBoZWlnaHQ9ezMwfSB3aWR0aD17MzB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2ltYWdlRmlsZVVybCA9PSBudWxsID8gYC9tb2RhbC8ke2ltYWdlTmFtZX0uc3ZnYCA6IGltYWdlRmlsZVVybH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgaC00MCB3LTQwIHAtNCBib3JkZXItYiBib3JkZXItcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiAxODAgfX0gY2xhc3NOYW1lPVwiIG92ZXJmbG93LXNjcm9sbCBtdC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImJnLXdoaXRlIHRleHQtY2VudGVyXCIgdmFsdWU9e3Byb2plY3ROYW1lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG10LTEgdGV4dC1zbSB0ZXh0LWdyYXlcIj57cHJvamVjdERlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8Qm91bmNlTG9hZGVyQ29tcG9uZW50IC8+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxNZW1iZXJzQ29kZSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvTmF2YmFyVGVtcGxhdGU+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuLy8gZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7XHJcbi8vICAgY29uc3QgY29va2llcyA9IGF3YWl0IGNvbnRleHQucmVxLmhlYWRlcnMuY29va2llO1xyXG4vLyAgIGNvbnN0IHBhcnNlZENvb2tpZXMgPSBjb29raWUucGFyc2UoY29va2llcyk7XHJcbi8vICAgY29uc3QgcHJvamVjdHMgPSBbXTtcclxuLy8gICBsZXQgcmVmID0gZGIuY29sbGVjdGlvbigncHJvamVjdHMnKTtcclxuXHJcbi8vICAgY29uc3Qgc25hcHNob3QgPSBhd2FpdCByZWYuZ2V0KCk7XHJcblxyXG4vLyAgIHNuYXBzaG90LmZvckVhY2goKGRvYykgPT4ge1xyXG4vLyAgICAgY29uc3QgZGF0YSA9IGRvYy5kYXRhKCk7XHJcbi8vICAgICBkYXRhLnByb2plY3RVc2Vycy5tYXAoKHVzZXIpID0+IHtcclxuLy8gICAgICAgaWYgKHVzZXIudXNlclVpZCA9PT0gcGFyc2VkQ29va2llcy51aWQpIHtcclxuLy8gICAgICAgICBwcm9qZWN0cy5wdXNoKHsgLi4uZGF0YSB9KTtcclxuLy8gICAgICAgfVxyXG4vLyAgICAgfSk7XHJcbi8vICAgfSk7XHJcbi8vICAgcmV0dXJuIHtcclxuLy8gICAgIHByb3BzOiB7IHByb2plY3RzIH0sXHJcbi8vICAgfTtcclxuLy8gfTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2plY3RzTWFuYWdlcjtcclxuIiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuLy8gVXNhZ2VcclxuZnVuY3Rpb24gQXBwKCkge1xyXG4gIGNvbnN0IHNpemUgPSB1c2VXaW5kb3dTaXplKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHtzaXplLndpZHRofXB4IC8ge3NpemUuaGVpZ2h0fXB4XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbi8vIEhvb2tcclxuZXhwb3J0IGZ1bmN0aW9uIHVzZVdpbmRvd1NpemUoKSB7XHJcbiAgLy8gSW5pdGlhbGl6ZSBzdGF0ZSB3aXRoIHVuZGVmaW5lZCB3aWR0aC9oZWlnaHQgc28gc2VydmVyIGFuZCBjbGllbnQgcmVuZGVycyBtYXRjaFxyXG4gIC8vIExlYXJuIG1vcmUgaGVyZTogaHR0cHM6Ly9qb3Nod2NvbWVhdS5jb20vcmVhY3QvdGhlLXBlcmlscy1vZi1yZWh5ZHJhdGlvbi9cclxuICBjb25zdCBbd2luZG93U2l6ZSwgc2V0V2luZG93U2l6ZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICB3aWR0aDogdW5kZWZpbmVkLFxyXG4gICAgaGVpZ2h0OiB1bmRlZmluZWQsXHJcbiAgfSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIEhhbmRsZXIgdG8gY2FsbCBvbiB3aW5kb3cgcmVzaXplXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVSZXNpemUoKSB7XHJcbiAgICAgIC8vIFNldCB3aW5kb3cgd2lkdGgvaGVpZ2h0IHRvIHN0YXRlXHJcbiAgICAgIHNldFdpbmRvd1NpemUoe1xyXG4gICAgICAgIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcclxuICAgICAgICBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvLyBBZGQgZXZlbnQgbGlzdGVuZXJcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUpO1xyXG4gICAgLy8gQ2FsbCBoYW5kbGVyIHJpZ2h0IGF3YXkgc28gc3RhdGUgZ2V0cyB1cGRhdGVkIHdpdGggaW5pdGlhbCB3aW5kb3cgc2l6ZVxyXG4gICAgaGFuZGxlUmVzaXplKCk7XHJcbiAgICAvLyBSZW1vdmUgZXZlbnQgbGlzdGVuZXIgb24gY2xlYW51cFxyXG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUpO1xyXG4gIH0sIFtdKTsgLy8gRW1wdHkgYXJyYXkgZW5zdXJlcyB0aGF0IGVmZmVjdCBpcyBvbmx5IHJ1biBvbiBtb3VudFxyXG4gIHJldHVybiB3aW5kb3dTaXplO1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBlbW90aW9uL3JlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByZWFjdC1wZGYvcmVuZGVyZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHRpcHB5anMvcmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmFiZWwtcGx1Z2luLXN1cGVyanNvbi1uZXh0L3Rvb2xzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvb2tpZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaWxlLXNhdmVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2FwcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9hdXRoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2ZpcmVzdG9yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9mdW5jdGlvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2Uvc3RvcmFnZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJnc2FwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXRoZW1lc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kZXZpY2UtZGV0ZWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXNwaW5uZXJzL0JvdW5jZUxvYWRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==