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

/***/ "./components/MobilePrevent.js":
/*!*************************************!*\
  !*** ./components/MobilePrevent.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\off-saas\\components\\MobilePrevent.js";



const MobilePrevent = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "h-screen w-screen flex justify-center items-center bg-background text-primarydark",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "w-full px-4 smContainer:px-12 mdContainer:px-20 flex flex-col justify-center items-center",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: "/mobile-prevent/computer.svg",
        height: 250,
        width: 250
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "text-center text-lg mt-4",
          children: "Please open the application on your computer! \uD83C\uDF34"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "text-center text mt-2 text-gray px-4 smContainer:px-8 mdContainer:px-16",
        children: "In order to provide our users with the best possible experience, we have decided to disable the use of our app via mobile devices."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (MobilePrevent);

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

/***/ "./components/dashboard/MobileNavbar.js":
/*!**********************************************!*\
  !*** ./components/dashboard/MobileNavbar.js ***!
  \**********************************************/
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gsap */ "gsap");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next-themes */ "next-themes");
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-device-detect */ "react-device-detect");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_device_detect__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "C:\\off-saas\\components\\dashboard\\MobileNavbar.js";




 // import PDFDocument from './startup/PDFDocument';
// import CashFlowPDF from './startup/project/business-app/cash-flow/CashFlowPDF';
// import CompetitorsPDF from './startup/project/business-app/competitors/CompetitorsPDF';
// Theme

 // Mobile friendly



const MobileNavbar = ({
  children
}) => {
  const {
    theme,
    setTheme
  } = Object(next_themes__WEBPACK_IMPORTED_MODULE_6__["useTheme"])();
  const {
    0: menuHelper,
    1: setMenuHelper
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const manRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  const tl = gsap__WEBPACK_IMPORTED_MODULE_5___default.a.timeline({
    repeat: -1,
    yoyo: true
  });
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    tl.to(manRef.current, {
      duration: 3,
      y: 250,
      x: 175,
      ease: gsap__WEBPACK_IMPORTED_MODULE_5__["Power1"].easeInOut
    }).to(manRef.current, {
      duration: 3,
      y: 500,
      x: 350,
      ease: gsap__WEBPACK_IMPORTED_MODULE_5__["Power1"].easeInOut
    }).to(manRef.current, {
      duration: 3,
      y: 250,
      x: 175,
      ease: gsap__WEBPACK_IMPORTED_MODULE_5__["Power1"].easeInOut
    }).to(manRef.current, {
      duration: 3,
      y: 0,
      x: 0,
      ease: gsap__WEBPACK_IMPORTED_MODULE_5__["Power1"].easeInOut
    });
  }, []);

  const onMenuClick = () => {
    // pdf section
    const pdfSection = document.getElementById('pdfSection');
    const linkSection = document.getElementById('linkSection'); // elements

    const navbarMainContainer = document.getElementById('navbarMainContainer');
    const navbarIcon = document.getElementById('navbarIcon');
    const navbarContainer = document.getElementById('navbarContainer'); // heights

    const pdfSectionHeight = pdfSection.offsetHeight;
    console.log(pdfSectionHeight);
    const linkSectionHeight = linkSection.offsetHeight;
    const navBarContainerHeight = navbarIcon.offsetHeight;
    const navbarHeight = navBarContainerHeight + navbarContainer.offsetHeight + navbarIcon.offsetHeight;
    console.log(navbarContainer.offsetHeight);

    if (!menuHelper) {
      gsap__WEBPACK_IMPORTED_MODULE_5___default.a.to(navbarMainContainer, {
        height: navbarHeight,
        duration: 1,
        ease: gsap__WEBPACK_IMPORTED_MODULE_5__["Linear"]
      });
      setMenuHelper(true);
    } else if (menuHelper) {
      gsap__WEBPACK_IMPORTED_MODULE_5___default.a.to(navbarMainContainer, {
        height: 48,
        duration: 1,
        ease: gsap__WEBPACK_IMPORTED_MODULE_5__["Linear"]
      });
      setMenuHelper(false);
    }
  };

  const size = {
    width: window.innerWidth
  };
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "fixed right-0 z-50",
      style: {
        overflow: 'unset',
        height: 'fit-content'
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
        onClick: () => setTheme(theme === 'dark' ? 'light' : 'dark'),
        width: "100",
        height: "100",
        style: {
          overflow: 'unset',
          cursor: 'pointer'
        },
        viewBox: "0 0 770 772",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
            d: "M769.001 0H310.286C306.762 21.4871 304.994 43.2257 305.001 65C305.001 284.809 483.192 463 703.001 463C725.114 463.008 747.19 461.185 769.001 457.55V0Z",
            fill: "#0A1230"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
            d: "M574.849 248.809C567.965 248.815 561.135 247.582 554.687 245.17C554.318 245.032 553.98 244.822 553.692 244.553C553.404 244.284 553.172 243.961 553.009 243.603C552.846 243.244 552.755 242.857 552.742 242.463C552.728 242.07 552.792 241.677 552.931 241.308C553.069 240.939 553.278 240.601 553.547 240.313C553.816 240.025 554.139 239.793 554.498 239.63C554.856 239.467 555.244 239.376 555.637 239.363C556.031 239.349 556.424 239.414 556.792 239.552C565.341 242.711 574.566 243.586 583.557 242.09C592.547 240.594 600.991 236.779 608.056 231.021C586.018 231.255 564.461 220.84 553.737 204.128C546.842 193.385 544.588 180.744 547.216 167.57C549.229 158.017 553.36 149.037 559.305 141.293C547.954 144.905 538.184 152.302 531.628 162.248C525.072 172.193 522.126 184.087 523.282 195.943C523.322 196.336 523.284 196.733 523.171 197.111C523.057 197.489 522.871 197.841 522.621 198.147C522.371 198.453 522.063 198.706 521.715 198.893C521.367 199.08 520.986 199.196 520.593 199.235C520.2 199.274 519.804 199.235 519.426 199.12C519.048 199.005 518.697 198.817 518.392 198.566C518.087 198.316 517.834 198.007 517.649 197.658C517.463 197.31 517.349 196.928 517.311 196.535C515.854 181.619 520.223 166.716 529.504 154.948C538.784 143.18 552.258 135.457 567.103 133.397C567.724 133.311 568.356 133.421 568.911 133.713C569.466 134.004 569.915 134.462 570.197 135.021C570.478 135.581 570.577 136.215 570.48 136.835C570.382 137.454 570.094 138.027 569.654 138.473C554.31 154.059 544.999 179.402 558.786 200.888C569.664 217.837 593.069 227.532 615.714 224.468C616.322 224.386 616.94 224.491 617.485 224.771C618.031 225.051 618.478 225.491 618.765 226.032C619.053 226.574 619.168 227.19 619.095 227.799C619.022 228.407 618.764 228.979 618.356 229.436C612.873 235.542 606.164 240.422 598.667 243.76C591.171 247.098 583.055 248.818 574.849 248.809V248.809Z",
            fill: "#6C63FF"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
            d: "M527.001 250C522.65 250 518.397 248.71 514.779 246.292C511.161 243.875 508.341 240.439 506.676 236.419C505.011 232.399 504.575 227.976 505.424 223.708C506.273 219.44 508.368 215.52 511.445 212.444C514.522 209.367 518.442 207.272 522.709 206.423C526.977 205.574 531.401 206.01 535.421 207.675C539.441 209.34 542.876 212.16 545.294 215.777C547.711 219.395 549.001 223.649 549.001 228C548.995 233.833 546.675 239.425 542.551 243.549C538.426 247.673 532.834 249.993 527.001 250V250ZM527.001 212C523.837 212 520.744 212.938 518.112 214.697C515.481 216.455 513.43 218.953 512.219 221.877C511.008 224.801 510.692 228.018 511.309 231.121C511.926 234.225 513.45 237.076 515.688 239.314C517.925 241.551 520.776 243.075 523.88 243.693C526.984 244.31 530.201 243.993 533.124 242.782C536.048 241.571 538.547 239.52 540.305 236.889C542.063 234.258 543.001 231.165 543.001 228C542.997 223.758 541.309 219.691 538.31 216.692C535.31 213.692 531.243 212.005 527.001 212V212Z",
            fill: "#6C63FF"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 13
          }, undefined), !react_device_detect__WEBPACK_IMPORTED_MODULE_7__["isMobile"] && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
            ref: manRef,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              d: "M8.69074 567.078C7.24546 566.853 5.86504 566.321 4.64182 565.518C3.4186 564.716 2.38077 563.662 1.59771 562.427C0.814652 561.191 0.304423 559.802 0.101157 558.354C-0.102109 556.905 0.00627512 555.43 0.419044 554.026L8.20737 527.546L20.042 529.765L20.5508 556.732C20.5791 558.232 20.2788 559.719 19.6709 561.091C19.063 562.462 18.1623 563.683 17.032 564.669C15.9017 565.655 14.5693 566.382 13.1283 566.798C11.6873 567.214 10.1727 567.31 8.69074 567.078V567.078Z",
              fill: "#9F616A"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              d: "M76.996 736.132L62.203 733.913L65.901 589.678L45.191 651.81L34.096 739.091L20.042 735.393L17.083 644.414L33.356 537.162L114.719 555.654L76.996 736.132Z",
              fill: "#0A1230"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              d: "M70.2046 771.636C67.3209 771.636 64.5553 770.491 62.5163 768.452C60.4772 766.413 59.3317 763.647 59.3317 760.763C59.3317 760.408 59.3491 760.053 59.3839 759.699L61.6811 736.345C61.7365 735.787 61.9281 735.251 62.2391 734.784C62.5501 734.317 62.9709 733.933 63.4647 733.667C67.8254 731.315 72.3096 731.885 76.8994 734.955C77.3066 735.229 77.6497 735.588 77.9052 736.007C78.1607 736.427 78.3226 736.896 78.3799 737.384L81.0017 759.482C81.1827 761.008 81.0385 762.554 80.5785 764.02C80.1185 765.485 79.3533 766.836 78.3332 767.985C77.3131 769.133 76.0613 770.052 74.6602 770.682C73.2591 771.311 71.7406 771.636 70.2046 771.636H70.2046Z",
              fill: "#0A1230"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              d: "M9.82084 769.898C8.42675 769.387 7.16714 768.565 6.13726 767.496C5.10738 766.426 4.33419 765.136 3.87616 763.724C3.41814 762.311 3.28727 760.813 3.49344 759.343C3.69962 757.872 4.23745 756.468 5.06626 755.236L20.8463 731.779C26.5348 727.697 29.9657 729.685 31.2995 737.313L34.4898 729.32L36.8936 731.942C38.1133 733.273 38.823 734.992 38.8971 736.795C38.9712 738.599 38.4049 740.37 37.2984 741.796L20.9304 766.706C19.6567 768.348 17.8938 769.542 15.8967 770.116C13.8996 770.689 11.7717 770.613 9.82084 769.898V769.898Z",
              fill: "#0A1230"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              d: "M109.542 398.105C121.797 398.105 131.732 388.17 131.732 375.915C131.732 363.659 121.797 353.725 109.542 353.725C97.2865 353.725 87.3517 363.659 87.3517 375.915C87.3517 388.17 97.2865 398.105 109.542 398.105Z",
              fill: "#9F616A"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              d: "M123.595 416.596L85.8723 409.2C90.7313 398.836 94.6225 395.33 90.3103 384.051H120.637C117.962 395.733 120.547 406.698 123.595 416.596Z",
              fill: "#9F616A"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              d: "M119.157 566.009L30.3973 540.86C48.1761 501.731 51.9 458.769 46.6287 413.356C46.5034 412.285 46.5904 411.199 46.8847 410.16C47.1791 409.122 47.6751 408.152 48.3443 407.306C49.0135 406.459 49.843 405.753 50.7852 405.227C51.7275 404.701 52.7641 404.366 53.8359 404.24C53.9357 404.229 54.0356 404.219 54.1358 404.211C65.7137 403.257 77.7844 402.033 90.3104 400.324L104.364 409.939L120.637 406.241C125.858 408.772 131.118 410.877 135.864 412.975C140.191 414.893 143.649 418.354 145.563 422.683C147.476 427.012 147.709 431.898 146.215 436.389C131.752 480.066 122.071 523.329 119.157 566.009Z",
              fill: "#E6E6E6"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              d: "M22.261 532.724L5.24866 530.505L45.5508 414.38C47.6008 408.473 52.6848 405.276 58.8745 404.392L64.7918 405.131L60.3538 473.92L22.261 532.724Z",
              fill: "#E6E6E6"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 123,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              d: "M155.525 510.524C152.692 510.742 149.863 510.06 147.441 508.574C145.019 507.089 143.128 504.877 142.038 502.253L125.814 463.195L139.128 415.117L142.648 417.357C142.987 417.572 143.322 417.794 143.652 418.02C148.593 421.481 152.442 426.283 154.746 431.858C157.049 437.434 157.711 443.552 156.654 449.491L153.182 469.852L167.505 500.605C166.777 503.294 165.235 505.69 163.089 507.466C160.944 509.243 158.302 510.311 155.525 510.524V510.524Z",
              fill: "#E6E6E6"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 127,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              d: "M111.248 343.027C115.04 343.201 118.733 344.288 122.014 346.196C122.769 346.636 122.42 348.219 123.117 348.736C123.995 349.386 125.902 348.991 126.68 349.753C129.19 352.203 131.123 355.182 132.338 358.474C133.552 361.765 134.018 365.285 133.702 368.779L132.464 381.09L129.543 377.896C124.306 372.089 117.035 368.519 109.238 367.927C108.906 367.904 108.574 367.887 108.242 367.874L110.489 363.941L106.584 367.847C104.802 367.866 103.024 368.011 101.263 368.28L104.251 363.05L98.5171 368.784L98.5166 368.785C96.1716 369.3 93.9805 370.36 92.1198 371.877C90.2591 373.395 88.7808 375.328 87.8042 377.522L87.1675 378.933L86.4542 367.188C86.3177 360.911 88.6805 354.837 93.0226 350.302C97.3647 345.767 103.331 343.142 109.608 343.006C110.155 342.994 110.702 343.001 111.248 343.027Z",
              fill: "#2F2E41"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 131,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              d: "M131.877 384.438C132.861 384.438 133.659 382.543 133.659 380.205C133.659 377.867 132.861 375.972 131.877 375.972C130.892 375.972 130.094 377.867 130.094 380.205C130.094 382.543 130.892 384.438 131.877 384.438Z",
              fill: "#9F616A"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 135,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              d: "M87.3195 383.101C88.3038 383.101 89.1017 381.206 89.1017 378.868C89.1017 376.53 88.3038 374.635 87.3195 374.635C86.3351 374.635 85.5372 376.53 85.5372 378.868C85.5372 381.206 86.3351 383.101 87.3195 383.101Z",
              fill: "#9F616A"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 139,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              d: "M174.034 435.419C175.455 435.767 176.785 436.414 177.936 437.317C179.086 438.22 180.031 439.359 180.706 440.656C181.382 441.954 181.772 443.381 181.852 444.841C181.931 446.302 181.698 447.763 181.168 449.126L171.16 474.85L159.556 471.634L161.338 444.721C161.437 443.225 161.863 441.768 162.585 440.453C163.307 439.139 164.308 437.998 165.518 437.111C166.728 436.225 168.117 435.614 169.588 435.322C171.059 435.029 172.577 435.063 174.034 435.419H174.034Z",
              fill: "#9F616A"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 143,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              d: "M160.579 509.055L142.087 497.22L157.62 465.414L176.851 472.811L167.236 500.918L160.579 509.055Z",
              fill: "#E6E6E6"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 147,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              d: "M173.001 409.101V284H171.001V409.101C169.787 409.349 168.709 410.039 167.974 411.037C167.24 412.035 166.902 413.27 167.027 414.503C167.151 415.735 167.729 416.878 168.648 417.709C169.567 418.54 170.762 419 172.001 419C173.241 419 174.435 418.54 175.355 417.709C176.274 416.878 176.852 415.735 176.976 414.503C177.101 413.27 176.763 412.035 176.029 411.037C175.294 410.039 174.216 409.349 173.001 409.101V409.101ZM172.001 417C171.408 417 170.828 416.824 170.335 416.494C169.841 416.165 169.457 415.696 169.23 415.148C169.003 414.6 168.943 413.997 169.059 413.415C169.175 412.833 169.461 412.298 169.88 411.879C170.3 411.459 170.834 411.173 171.416 411.058C171.998 410.942 172.601 411.001 173.15 411.228C173.698 411.455 174.166 411.84 174.496 412.333C174.826 412.827 175.001 413.407 175.001 414C175.001 414.795 174.684 415.558 174.122 416.12C173.559 416.683 172.797 416.999 172.001 417V417Z",
              fill: "#0A1230"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 148,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              d: "M170.435 164.569C169.29 164.569 168.193 164.115 167.384 163.306C166.575 162.497 166.121 161.399 166.121 160.255V147.314C166.122 146.171 166.578 145.075 167.387 144.268C168.195 143.46 169.292 143.007 170.435 143.007C171.578 143.007 172.674 143.46 173.483 144.268C174.291 145.075 174.747 146.171 174.748 147.314V160.255C174.748 160.822 174.637 161.383 174.42 161.906C174.203 162.43 173.885 162.905 173.485 163.306C173.084 163.706 172.609 164.024 172.085 164.241C171.562 164.458 171.001 164.569 170.435 164.569V164.569Z",
              fill: "#6C63FF"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 152,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              d: "M170.435 263.787C169.868 263.787 169.307 263.676 168.784 263.459C168.26 263.242 167.785 262.925 167.384 262.524C166.984 262.123 166.666 261.648 166.449 261.124C166.232 260.601 166.121 260.04 166.121 259.474V246.532C166.12 245.965 166.231 245.403 166.447 244.879C166.664 244.355 166.981 243.879 167.382 243.477C167.783 243.076 168.258 242.758 168.782 242.541C169.306 242.323 169.867 242.212 170.435 242.212C171.002 242.212 171.563 242.323 172.087 242.541C172.611 242.758 173.087 243.076 173.487 243.477C173.888 243.879 174.206 244.355 174.422 244.879C174.638 245.403 174.749 245.965 174.748 246.532V259.474C174.748 260.04 174.637 260.601 174.42 261.124C174.203 261.648 173.886 262.123 173.485 262.524C173.084 262.925 172.609 263.242 172.085 263.459C171.562 263.676 171.001 263.787 170.435 263.787V263.787Z",
              fill: "#6C63FF"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 156,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              d: "M200.939 177.203C200.085 177.203 199.251 176.95 198.542 176.476C197.833 176.002 197.28 175.328 196.953 174.54C196.627 173.752 196.541 172.885 196.708 172.048C196.874 171.211 197.285 170.442 197.888 169.839L207.039 160.688C207.848 159.88 208.945 159.426 210.089 159.427C211.233 159.427 212.329 159.882 213.138 160.69C213.947 161.499 214.401 162.596 214.402 163.739C214.402 164.883 213.948 165.98 213.14 166.789L203.989 175.94C203.589 176.341 203.113 176.659 202.59 176.876C202.066 177.093 201.505 177.204 200.939 177.203V177.203Z",
              fill: "#6C63FF"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 160,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              d: "M130.78 247.362C129.926 247.362 129.092 247.109 128.383 246.635C127.674 246.161 127.121 245.488 126.794 244.699C126.468 243.911 126.382 243.044 126.549 242.207C126.715 241.37 127.126 240.602 127.729 239.998L136.88 230.848C137.689 230.039 138.786 229.584 139.93 229.584C141.074 229.584 142.172 230.038 142.981 230.847C143.79 231.656 144.244 232.754 144.244 233.898C144.244 235.042 143.79 236.139 142.981 236.948L133.83 246.099C133.43 246.5 132.954 246.818 132.431 247.035C131.907 247.252 131.346 247.363 130.78 247.362V247.362Z",
              fill: "#6C63FF"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 164,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              d: "M226.514 207.708H213.573C212.43 207.706 211.334 207.251 210.527 206.442C209.719 205.633 209.266 204.537 209.266 203.394C209.266 202.251 209.719 201.154 210.527 200.346C211.334 199.537 212.43 199.082 213.573 199.08H226.514C227.081 199.079 227.643 199.19 228.167 199.406C228.691 199.623 229.168 199.94 229.569 200.341C229.97 200.742 230.289 201.218 230.506 201.741C230.723 202.265 230.835 202.827 230.835 203.394C230.835 203.961 230.723 204.522 230.506 205.046C230.289 205.57 229.97 206.046 229.569 206.446C229.168 206.847 228.691 207.165 228.167 207.381C227.643 207.597 227.081 207.708 226.514 207.708V207.708Z",
              fill: "#6C63FF"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 168,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              d: "M127.296 207.708H114.355C113.788 207.708 113.226 207.597 112.702 207.381C112.178 207.165 111.701 206.847 111.3 206.446C110.899 206.046 110.581 205.57 110.363 205.046C110.146 204.522 110.034 203.961 110.034 203.394C110.034 202.827 110.146 202.265 110.363 201.741C110.581 201.218 110.899 200.742 111.3 200.341C111.701 199.94 112.178 199.623 112.702 199.406C113.226 199.19 113.788 199.079 114.355 199.08H127.296C128.439 199.082 129.535 199.537 130.342 200.346C131.15 201.154 131.604 202.251 131.604 203.394C131.604 204.537 131.15 205.633 130.342 206.442C129.535 207.251 128.439 207.706 127.296 207.708H127.296Z",
              fill: "#6C63FF"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 172,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              d: "M210.09 247.362C209.523 247.363 208.962 247.252 208.438 247.035C207.915 246.818 207.439 246.5 207.039 246.099L197.888 236.948C197.487 236.548 197.169 236.072 196.951 235.549C196.734 235.025 196.622 234.464 196.622 233.897C196.621 233.33 196.733 232.769 196.949 232.245C197.166 231.721 197.484 231.245 197.885 230.844C198.286 230.443 198.762 230.125 199.286 229.909C199.809 229.692 200.371 229.58 200.938 229.581C201.505 229.581 202.066 229.693 202.589 229.91C203.113 230.128 203.589 230.446 203.989 230.848L213.14 239.998C213.743 240.602 214.154 241.37 214.32 242.207C214.487 243.044 214.401 243.911 214.075 244.7C213.748 245.488 213.195 246.161 212.486 246.635C211.777 247.11 210.943 247.363 210.09 247.363V247.362Z",
              fill: "#6C63FF"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 176,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              d: "M139.93 177.203C139.364 177.204 138.803 177.093 138.279 176.876C137.756 176.659 137.28 176.341 136.88 175.94L127.729 166.789C127.329 166.389 127.011 165.913 126.794 165.39C126.577 164.866 126.466 164.305 126.466 163.739C126.466 163.172 126.577 162.611 126.794 162.088C127.011 161.564 127.329 161.089 127.729 160.688C128.13 160.288 128.605 159.97 129.129 159.753C129.652 159.536 130.213 159.425 130.78 159.425C131.346 159.425 131.907 159.536 132.43 159.753C132.954 159.97 133.429 160.288 133.83 160.688L142.981 169.839C143.584 170.442 143.995 171.211 144.161 172.048C144.328 172.885 144.242 173.752 143.916 174.54C143.589 175.329 143.036 176.002 142.327 176.476C141.617 176.95 140.783 177.203 139.93 177.203V177.203Z",
              fill: "#6C63FF"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 180,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              d: "M170.435 229.277C165.315 229.277 160.311 227.759 156.055 224.915C151.798 222.071 148.481 218.028 146.522 213.299C144.563 208.569 144.05 203.365 145.049 198.344C146.048 193.323 148.513 188.711 152.133 185.092C155.752 181.472 160.364 179.007 165.385 178.008C170.406 177.009 175.61 177.522 180.34 179.481C185.069 181.44 189.111 184.757 191.955 189.014C194.8 193.27 196.318 198.275 196.318 203.394C196.31 210.256 193.58 216.835 188.728 221.687C183.876 226.54 177.297 229.269 170.435 229.277V229.277ZM170.435 186.138C167.022 186.138 163.686 187.15 160.848 189.046C158.01 190.942 155.799 193.637 154.493 196.79C153.187 199.943 152.845 203.413 153.511 206.76C154.177 210.107 155.82 213.182 158.233 215.595C160.646 218.008 163.721 219.652 167.068 220.317C170.415 220.983 173.885 220.642 177.038 219.336C180.191 218.03 182.886 215.818 184.782 212.98C186.678 210.143 187.69 206.806 187.69 203.394C187.685 198.819 185.865 194.433 182.63 191.198C179.395 187.963 175.009 186.144 170.435 186.138V186.138Z",
              fill: "#6C63FF"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 184,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      id: "navbarMainContainer",
      className: "w-full bg-background text-primarydark dark:bg-secondary dark:text-background flex flex-wrap px-4 smContainer:px-8 h-12 overflow-hidden",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        id: "navbarIcon",
        className: "w-full flex justify-between items-center mt-6",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
          onClick: onMenuClick,
          src: "/mobile-navbar/menu.svg",
          height: 20,
          width: 20
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 198,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        id: "navbarContainer",
        className: "w-full flex flex-wrap",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          id: "pdfSection",
          className: "w-full justify-start items-center mt-4",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "Save as PDF:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 203,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 202,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          id: "linkSection",
          className: "w-full justify-start items-center mt-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "Share your work with this public link:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 210,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "w-full flex",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              value: "www.project.com",
              className: "bg-linkBackground text-sm px-2 py-1 dark:text-primarydark"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 212,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "/mobile-navbar/foreign.svg",
              height: 28,
              width: 28
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 213,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 211,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 209,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "w-full flex items-center mt-4 border-l border-primary pl-2",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
            href: "/dashboard/welcome",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
              // onClick={activeClassFn1}
              // onMouseEnter={() => setActiveHover1(true)}
              // onMouseLeave={() => setActiveHover1(false)}
              height: "36",
              width: "36",
              className: "fill-current text-primarydark dark:text-background" // className={`fill-current text-primarydark dark:text-background block m-auto opacity-50 hover:opacity-100 cursor-pointer ${
              //   activeClass1 ? 'opacity-100' : 'opacity-50'
              // }`}
              ,
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 128 128",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("defs", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("style", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 233,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 232,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
                children: "See You Soon"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 235,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
                id: "See_You_Soon",
                "data-name": "See You Soon",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                  className: "cls-1",
                  d: "M84.87,77.27l-7-41.18a6.6,6.6,0,0,0-13.1,1.58l1.83,24.6L56.93,36a6.73,6.73,0,0,0-12.78,4.17L51.82,67,40.57,48a6.45,6.45,0,0,0-11.41,6l8.33,18.24-4.57-6.45a6.48,6.48,0,0,0-10.9,7l21.25,36.71c.32.59,8,14.54,23.14,14.54,20.07,0,29.74-15.17,32.11-29.36,2.22-13.34,4.59-22,7.68-28.22C111.74,55.36,96.37,44.67,84.87,77.27Zm19.5-11.74c-3.18,6.36-5.61,15.24-7.87,28.79C94.28,107.69,85.2,122,66.41,122c-13.86,0-21.27-13.34-21.36-13.5L23.79,71.75A4.44,4.44,0,0,1,31.26,67L42.1,82.27a1,1,0,0,0,1.76-1L31,53.14a4.41,4.41,0,0,1,7.8-4.08L54.1,74.84A1,1,0,0,0,56,74L46.12,39.6A4.68,4.68,0,0,1,55,36.69L67.22,69.78a1,1,0,0,0,2-.43L66.84,37.52a4.56,4.56,0,0,1,9-1.09L83.55,81.7a1,1,0,0,0,2,.11c0-.17,5.17-17.84,12.54-22.75C104.93,54.49,106.48,61.32,104.37,65.53Z"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 237,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                  className: "cls-1",
                  d: "M127,67h-8a1,1,0,0,0,0,2h8A1,1,0,0,0,127,67Z"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 241,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                  className: "cls-1",
                  d: "M9,67H1a1,1,0,0,0,0,2H9A1,1,0,0,0,9,67Z"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 242,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                  className: "cls-1",
                  d: "M65,13V5a1,1,0,0,0-2,0v8A1,1,0,0,0,65,13Z"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 243,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                  className: "cls-1",
                  d: "M111.63,41.52c.39,0-.09.21,7.44-4.14a1,1,0,0,0-1-1.76l-6.93,4A1,1,0,0,0,111.63,41.52Z"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 244,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                  className: "cls-1",
                  d: "M15.86,94.62l-6.93,4a1,1,0,0,0,1,1.76l6.93-4A1,1,0,0,0,15.86,94.62Z"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 245,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                  className: "cls-1",
                  d: "M16.88,39.62l-6.93-4a1,1,0,0,0-1,1.76l6.93,4A1,1,0,0,0,16.88,39.62Z"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 246,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                  className: "cls-1",
                  d: "M119.07,98.62l-6.93-4a1,1,0,0,0-1,1.76l6.93,4A1,1,0,0,0,119.07,98.62Z"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 247,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                  className: "cls-1",
                  d: "M35.62,20.88a1,1,0,0,0,1.76-1l-4-6.93a1,1,0,0,0-1.76,1Z"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 248,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                  className: "cls-1",
                  d: "M92.38,20.88l4-6.93a1,1,0,0,0-1.76-1l-4,6.93A1,1,0,0,0,92.38,20.88Z"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 249,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 236,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 219,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 218,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
            href: "/dashboard/welcome",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "ml-4",
              children: "Welcome"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 254,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 253,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 217,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "w-full flex items-center mt-6 border-l border-primary pl-2",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
            href: "/dashboard/startup",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
              // onClick={activeClassFn2}
              // onMouseEnter={() => setActiveHover2(true)}
              // onMouseLeave={() => setActiveHover2(false)}
              className: "fill-current text-primarydark dark:text-background",
              height: "36",
              width: "36",
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 128 128",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("defs", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("style", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 271,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 270,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
                children: "Landing Success"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 273,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
                id: "Landing_Success",
                "data-name": "Landing Success",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                  className: "cls-1",
                  d: "M109.3,90.1A46,46,0,0,0,65,36V20.08c1.78-.62,7.21-2.14,12.57.23a19.33,19.33,0,0,0,14.82,0c.87-.38.61.31.61-17.93a1,1,0,0,0-1.43-.93c-.07,0-6.69,2.87-13.18,0A19.41,19.41,0,0,0,65,.93,1,1,0,0,0,63,1V36a45.86,45.86,0,0,0-28.66,10.8C16.18,40.48,4,40,.79,45.51-2.29,50.86,3.94,59.3,10,65.68A11,11,0,0,0,18,83c.81,38.41,46.08,59.2,75.66,34.21,8.53,3,29,9.15,33.55,1.31C130.39,113,123.86,102.65,109.3,90.1ZM77.59,3.31A19.39,19.39,0,0,0,91,3.83V18.68c-1.79.62-7.22,2.13-12.57-.23A19.19,19.19,0,0,0,65,17.93V3.08C66.81,2.46,72.24,1,77.59,3.31ZM65,45v-7c39.69.91,58,50.27,28.21,76.81C71.32,107,46,92.66,27.77,78.64a11,11,0,0,0-3.2-16.13A43.88,43.88,0,0,1,63,38.06V45A1,1,0,0,0,65,45ZM32.55,48.36a46.21,46.21,0,0,0-9.83,13.28,10.93,10.93,0,0,0-11.4,2.47C-8.39,43.23,5.23,39.08,32.55,48.36ZM10,72a9,9,0,1,1,9,9A9,9,0,0,1,10,72Zm10,11a11,11,0,0,0,6.34-2.82c18.45,14.21,43.45,28.35,65.05,36.22C63,139.16,20.83,119.1,20.05,83Zm105.4,34.5c-2.51,4.35-14,3.62-30-1.85a45.61,45.61,0,0,0,13.42-23.21C121.59,103.58,128,113.12,125.45,117.47Z"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 275,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 274,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 260,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 259,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
            href: "/dashboard/startup",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "ml-4",
              children: "Startup idea"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 283,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 282,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 258,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "w-full flex items-center mt-6 border-l border-primary pl-2",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
            //   onClick={activeClassFn3}
            //   onMouseEnter={() => setActiveHover3(true)}
            //   onMouseLeave={() => setActiveHover3(false)}
            className: "fill-current text-primarydark dark:text-background",
            height: "36",
            width: "36" //   className={`fill-current text-primarydark dark:text-background block m-auto opacity-50 hover:opacity-100 cursor-pointer ${
            //     activeClass3 ? 'opacity-100' : 'opacity-50'
            //   }`}
            ,
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 128 128",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("defs", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("style", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 302,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 301,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
              children: "Searching"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 304,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
              id: "Searching",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                className: "cls-1",
                d: "M79.57,36.43a22,22,0,1,0,0,31.14A22,22,0,0,0,79.57,36.43Zm-1.44,29.7a20,20,0,1,1,0-28.26A20,20,0,0,1,78.13,66.13Z"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 306,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                className: "cls-1",
                d: "M117,0H31A11,11,0,0,0,20,11v97H1a1,1,0,0,0-1,1v8a11,11,0,0,0,11,11H97a11,11,0,0,0,11-11V104a3.42,3.42,0,0,0,2.41-1c4.71-4.71,5.59-5.13,5.59-7s-.66-2.08-8-9.42V20h19a1,1,0,0,0,1-1V11A11,11,0,0,0,117,0ZM90.62,126H11a9,9,0,0,1-9-9v-7H86C86,116.29,85,122,90.62,126ZM114,96c0,.79,0,.61-5,5.57a1.43,1.43,0,0,1-2,0L86.43,81a1.38,1.38,0,0,1,0-2c5.07-5.07,4.8-5,5.57-5s-.17-.75,14.28,13.7C113.87,95.31,114,95.11,114,96ZM82.37,70.37a26,26,0,1,1,0-36.74A26,26,0,0,1,82.37,70.37Zm2.79,0,3.52,3.52-2.8,2.8-3.52-3.52A26.44,26.44,0,0,0,85.16,70.36ZM94.43,73a3.53,3.53,0,0,0-4.23-.47l-3.75-3.75C100.27,50.28,87,24,64,24A28,28,0,0,0,36,52c0,23.37,26.71,36,44.79,22.45l3.73,3.74A3.41,3.41,0,0,0,85,82.43c22.22,22.23,20.57,20.61,21,20.92V117a9,9,0,0,1-18,0v-8a1,1,0,0,0-1-1H22V11a9,9,0,0,1,9-9c85.6,0,79.74-.08,79.41.17a11,11,0,0,0-4.14,6.32c-.41,1.77-.29-4.19-.29,76ZM126,18H108V11a9,9,0,0,1,18,0Z"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 310,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 305,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 288,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "ml-4",
            children: "Motivational stories"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 316,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 287,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "w-full flex items-center mt-6 border-l border-primary pl-2",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
            href: "/dashboard/account",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
              className: "fill-current text-primarydark dark:text-background" //   onClick={activeClassFn4}
              //   onMouseEnter={() => setActiveHover4(true)}
              //   onMouseLeave={() => setActiveHover4(false)}
              ,
              height: "36",
              width: "36" //   className={`fill-current text-primarydark dark:text-background block m-auto opacity-50 hover:opacity-100 cursor-pointer ${
              //     activeClass4 ? 'opacity-100' : 'opacity-50'
              //   }`}
              ,
              id: "Data_User",
              "data-name": "Data User",
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 128 128",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("defs", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("style", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 337,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 336,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
                children: "Data User"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 339,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                className: "cls-1",
                d: "M109,0H23a9,9,0,0,0-9,9c0,118,0,110,0,110.64A9.22,9.22,0,0,0,23.31,128H109a5,5,0,0,0,5-5V5A5,5,0,0,0,109,0Zm3,5V107a3,3,0,0,1-3,3H26V2h83A3,3,0,0,1,112,5ZM16,9a7,7,0,0,1,7-7h1V110H23a9,9,0,0,0-6.94,3.26C16,113.34,16,118.28,16,9Zm96,114a3,3,0,0,1-3,3H23.31c-6.13,0-9.56-6.94-5.68-11.43A6.91,6.91,0,0,1,23,112c90.91,0,87.06.44,89-1Z"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 340,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                className: "cls-1",
                d: "M56.15,75.81A33,33,0,1,0,35,45,33.05,33.05,0,0,0,56.15,75.81Zm-7.53-6.68c5.89-22.82,32.86-22.83,38.76,0A30.88,30.88,0,0,1,48.62,69.13ZM68,14c28.07,0,41.61,34.51,21.09,53.65C86.56,59,80.82,52.83,73.57,50.75a13,13,0,1,0-11.14,0c-7.25,2.08-13,8.24-15.52,16.92C26.45,48.69,39.8,14,68,14Zm0,36A11,11,0,1,1,79,39,11,11,0,0,1,68,50Z"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 344,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                className: "cls-1",
                d: "M96.5,87h-56a1,1,0,0,0,0,2h56A1,1,0,0,0,96.5,87Z"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 348,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                className: "cls-1",
                d: "M96.5,99h-56a1,1,0,0,0,0,2h56A1,1,0,0,0,96.5,99Z"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 349,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 321,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 320,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
            href: "/dashboard/account",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "ml-4",
              children: "Account"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 353,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 352,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 319,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "w-full flex items-center mt-6 border-l border-primary pl-2",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
            className: "fill-current text-primarydark dark:text-background" //   onClick={activeClassFn5}
            //   onMouseEnter={() => setActiveHover5(true)}
            //   onMouseLeave={() => setActiveHover5(false)}
            ,
            height: "36",
            width: "36" //   className={`fill-current text-primarydark dark:text-background block m-auto opacity-50 hover:opacity-100 cursor-pointer ${
            //     activeClass5 ? 'opacity-100' : 'opacity-50'
            //   }`}
            ,
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 128 128",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("defs", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("style", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 372,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 371,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
              children: "Log Out"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 374,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
              id: "Log_Out",
              "data-name": "Log Out",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                className: "cls-1",
                d: "M44,61v6a1,1,0,0,0,2,0V61A1,1,0,0,0,44,61Z"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 376,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                className: "cls-1",
                d: "M113,113H86V75h6v9a1,1,0,0,0,1,1c.64,0-.83,1.26,20.72-20.3a1,1,0,0,0,0-1.44l-20-20A1,1,0,0,0,92,44v9H86V14a1,1,0,0,0-1-1H54V1a1,1,0,0,0-1.35-1l-38,13A1,1,0,0,0,14,14c0,106.58-.38,100.6.69,101C55.34,128.88,52.74,128,53,128a1,1,0,0,0,1-1V115h59A1,1,0,0,0,113,113ZM93,55a1,1,0,0,0,1-1V46.46L111.56,64,94,81.54V74a1,1,0,0,0-1-1H54V55ZM54,21H77V53H54Zm30-6V53H79V20a1,1,0,0,0-1-1H54V15ZM52,125.57l-36-12.3V14.73L52,2.43ZM54,75H77v38H54Zm25,38V75h5v38Z"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 377,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 375,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 358,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "ml-4",
            children: "Log out"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 383,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 357,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 7
    }, undefined), children]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 70,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (MobileNavbar);

/***/ }),

/***/ "./components/dashboard/Navbar.js":
/*!****************************************!*\
  !*** ./components/dashboard/Navbar.js ***!
  \****************************************/
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
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ "gsap");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-themes */ "next-themes");
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_newAuth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib/newAuth */ "./lib/newAuth.js");
/* harmony import */ var _utils_useWindowSize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/useWindowSize */ "./utils/useWindowSize.js");
/* harmony import */ var _MobileNavbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./MobileNavbar */ "./components/dashboard/MobileNavbar.js");
/* harmony import */ var _DesktopNavbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./DesktopNavbar */ "./components/dashboard/DesktopNavbar.js");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-device-detect */ "react-device-detect");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_device_detect__WEBPACK_IMPORTED_MODULE_10__);


var _jsxFileName = "C:\\off-saas\\components\\dashboard\\Navbar.js";





 // Mobile friendly






const Navbar = ({
  children
}) => {
  // Mobile friendly
  // const size = useWindowSize();
  const size = {
    width: window.innerWidth
  };
  console.log(size);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: react_device_detect__WEBPACK_IMPORTED_MODULE_10__["isMobile"] ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_MobileNavbar__WEBPACK_IMPORTED_MODULE_8__["default"], {
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 24
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_DesktopNavbar__WEBPACK_IMPORTED_MODULE_9__["default"], {
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 63
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

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

/***/ "./next-seo.config.js":
/*!****************************!*\
  !*** ./next-seo.config.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const title = 'Number #1 startup planning and analysis tool';
const description = 'By using ****** you can easily grow your business idea to the next level';
const SEO = {
  title,
  description,
  canonical: 'https://supersweetchilli.online',
  // This one is for google to know, what the major place of the content found somewhere is ??
  openGraph: {
    // To jest takie, jak wysyła się linka i pojawia się potem taki obrazek (chyba), no w każdym bądź razie, must have!
    type: 'website',
    locale: 'en_IE',
    url: 'https://supersweetchilli.online',
    title,
    description,
    images: [{
      url: 'https://supersweetchilli.online/images/openGrapImage.png...',
      // Tutaj możesz sobie podejrzeć na swojej stronie, jak wygląda zdjęcie, które będzie w Twoim openGraph'ie
      alt: title,
      width: 1280,
      height: 720
    }]
  }
};
/* harmony default export */ __webpack_exports__["default"] = (SEO);

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

/***/ "./node_modules/tailwindcss/tailwind.css":
/*!***********************************************!*\
  !*** ./node_modules/tailwindcss/tailwind.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tailwindcss/tailwind.css */ "./node_modules/tailwindcss/tailwind.css");
/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/global.css */ "./styles/global.css");
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_newAuth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/newAuth */ "./lib/newAuth.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-themes */ "next-themes");
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_dashboard_Navbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/dashboard/Navbar */ "./components/dashboard/Navbar.js");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next-seo */ "next-seo");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _next_seo_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../next-seo.config */ "./next-seo.config.js");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-device-detect */ "react-device-detect");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_device_detect__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_MobilePrevent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/MobilePrevent */ "./components/MobilePrevent.js");

var _jsxFileName = "C:\\off-saas\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












function MyApp({
  Component,
  pageProps
}) {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  const directRoute = router.pathname; // Jeśli w url jest /dashboard, to NavBar ten z boku, mają wszystkie komponenty (czyli cały dashboard, bez strony początkowej)

  if (directRoute.includes('/dashboard')) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_lib_newAuth__WEBPACK_IMPORTED_MODULE_3__["AuthProvider"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_themes__WEBPACK_IMPORTED_MODULE_5__["ThemeProvider"], {
        attribute: "class",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "bg-background dark:bg-secondary",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_dashboard_Navbar__WEBPACK_IMPORTED_MODULE_6__["default"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_seo__WEBPACK_IMPORTED_MODULE_7__["DefaultSeo"], _objectSpread({}, _next_seo_config__WEBPACK_IMPORTED_MODULE_8__["default"]), void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this) // <>
    //   {isMobile ? (
    //     <MobilePrevent />
    //   ) : (
    //     <AuthProvider>
    //       <ThemeProvider attribute="class">
    //         <div className="bg-background dark:bg-secondary">
    //           <Navbar>
    //             <DefaultSeo {...SEO} />
    //             <Component {...pageProps} />
    //           </Navbar>
    //         </div>
    //       </ThemeProvider>
    //     </AuthProvider>
    //   )}
    // </>
    ;
  } else if (react_device_detect__WEBPACK_IMPORTED_MODULE_9__["isMobile"] && (directRoute.includes('/signup') || directRoute.includes('/login'))) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_MobilePrevent__WEBPACK_IMPORTED_MODULE_10__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 12
    }, this);
  } else {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_lib_newAuth__WEBPACK_IMPORTED_MODULE_3__["AuthProvider"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, this);
  } // else {
  //   return (
  //     <>
  //       {isMobile &&
  //         (directRoute.includes('/signup') || directRoute.includes('/login') ? (
  //           <MobilePrevent />
  //         ) : (
  //           <AuthProvider>
  //             <Component {...pageProps} />
  //           </AuthProvider>
  //         ))}
  //     </>
  //   );

}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./styles/global.css":
/*!***************************!*\
  !*** ./styles/global.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {



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

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


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

/***/ "next-seo":
/*!***************************!*\
  !*** external "next-seo" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-seo");

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

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjQuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2ltYWdlLWNvbmZpZy5qc1wiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTW9iaWxlUHJldmVudC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Rhc2hib2FyZC9EZXNrdG9wTmF2YmFyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZGFzaGJvYXJkL01vYmlsZU5hdmJhci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Rhc2hib2FyZC9OYXZiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2ZpcmViYXNlLmpzIiwid2VicGFjazovLy8uL2xpYi9uZXdBdXRoLmpzIiwid2VicGFjazovLy8uL25leHQtc2VvLmNvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2ltYWdlLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvdXNlLWludGVyc2VjdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC93aXRoLXJvdXRlci50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcy1ub29wLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvdXNlV2luZG93U2l6ZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9hcHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9hdXRoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2UvZnVuY3Rpb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2Uvc3RvcmFnZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImdzYXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqcy1jb29raWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXNlb1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtdGhlbWVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRldmljZS1kZXRlY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIk1vYmlsZVByZXZlbnQiLCJJc0FjdGl2ZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiRGVza3RvcE5hdmJhciIsImNoaWxkcmVuIiwibG9nT3V0IiwidXNlQXV0aCIsInRoZW1lIiwic2V0VGhlbWUiLCJ1c2VUaGVtZSIsImFjdGl2ZSIsInNldEFjdGl2ZSIsInVzZVN0YXRlIiwibmF2UmVmIiwidXNlUmVmIiwicm91dGVyIiwidXNlUm91dGVyIiwibWFuUmVmIiwidGwiLCJnc2FwIiwidGltZWxpbmUiLCJyZXBlYXQiLCJ5b3lvIiwidXNlRWZmZWN0IiwidG8iLCJjdXJyZW50IiwiZHVyYXRpb24iLCJ5IiwieCIsImVhc2UiLCJQb3dlcjEiLCJlYXNlSW5PdXQiLCJhY3RpdmVDbGFzczEiLCJzZXRBY3RpdmVDbGFzczEiLCJhY3RpdmVDbGFzczIiLCJzZXRBY3RpdmVDbGFzczIiLCJhY3RpdmVDbGFzczMiLCJzZXRBY3RpdmVDbGFzczMiLCJhY3RpdmVDbGFzczQiLCJzZXRBY3RpdmVDbGFzczQiLCJhY3RpdmVDbGFzczUiLCJzZXRBY3RpdmVDbGFzczUiLCJhY3RpdmVIb3ZlcjEiLCJzZXRBY3RpdmVIb3ZlcjEiLCJhY3RpdmVIb3ZlcjIiLCJzZXRBY3RpdmVIb3ZlcjIiLCJhY3RpdmVIb3ZlcjMiLCJzZXRBY3RpdmVIb3ZlcjMiLCJhY3RpdmVIb3ZlcjQiLCJzZXRBY3RpdmVIb3ZlcjQiLCJhY3RpdmVIb3ZlcjUiLCJzZXRBY3RpdmVIb3ZlcjUiLCJwYXRobmFtZSIsImluY2x1ZGVzIiwiYWN0aXZlQ2xhc3NGbjEiLCJhY3RpdmVDbGFzc0ZuMiIsImFjdGl2ZUNsYXNzRm4zIiwiYWN0aXZlQ2xhc3NGbjQiLCJhY3RpdmVDbGFzc0ZuNSIsIm1vdXNlRW50ZXJOYXYiLCJ3aWR0aCIsIlBvd2VyNCIsImVhc2VPdXQiLCJtb3VzZUxlYXZlTmF2Iiwib3ZlcmZsb3ciLCJoZWlnaHQiLCJjdXJzb3IiLCJNb2JpbGVOYXZiYXIiLCJtZW51SGVscGVyIiwic2V0TWVudUhlbHBlciIsIm9uTWVudUNsaWNrIiwicGRmU2VjdGlvbiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJsaW5rU2VjdGlvbiIsIm5hdmJhck1haW5Db250YWluZXIiLCJuYXZiYXJJY29uIiwibmF2YmFyQ29udGFpbmVyIiwicGRmU2VjdGlvbkhlaWdodCIsIm9mZnNldEhlaWdodCIsImNvbnNvbGUiLCJsb2ciLCJsaW5rU2VjdGlvbkhlaWdodCIsIm5hdkJhckNvbnRhaW5lckhlaWdodCIsIm5hdmJhckhlaWdodCIsIkxpbmVhciIsInNpemUiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaXNNb2JpbGUiLCJOYXZiYXIiLCJmaXJlYmFzZSIsImFwcHMiLCJsZW5ndGgiLCJpbml0aWFsaXplQXBwIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwibWVhc3VyZW1lbnRJZCIsImF1dGgiLCJkYiIsImZpcmVzdG9yZSIsInN0b3JhZ2UiLCJBdXRoQ29udGV4dCIsInVzZUNvbnRleHQiLCJBdXRoUHJvdmlkZXIiLCJjdXJyZW50VXNlciIsInNldEN1cnJlbnRVc2VyIiwibG9hZGluZyIsInNldExvYWRpbmciLCJoYW5kbGVVc2VyIiwidXNlciIsIkNvb2tpZXMiLCJzZXQiLCJ1aWQiLCJmb3JtYXRlZFVzZXIiLCJmb3JtYXRVc2VyIiwiY29sbGVjdGlvbiIsImRvYyIsIm1lcmdlIiwicmVtb3ZlIiwic2lnblVwIiwiZW1haWwiLCJwYXNzd29yZCIsImNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCIsInRoZW4iLCJyZXNwb25zZSIsImxvZ0luIiwic2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJzaWduT3V0IiwidW5zdWJzY3JpYmUiLCJvbklkVG9rZW5DaGFuZ2VkIiwidmFsdWUiLCJnZXRTdHJpcGVSb2xlIiwiZ2V0SWRUb2tlbiIsImRlY29kZWRUb2tlbiIsImdldElkVG9rZW5SZXN1bHQiLCJjbGFpbXMiLCJzdHJpcGVSb2xlIiwidG9rZW4iLCJwcm92aWRlciIsInByb3ZpZGVyRGF0YSIsInByb3ZpZGVySWQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiU0VPIiwiY2Fub25pY2FsIiwib3BlbkdyYXBoIiwidHlwZSIsImxvY2FsZSIsInVybCIsImltYWdlcyIsImFsdCIsImdsb2JhbCIsIlZBTElEX0xPQURJTkdfVkFMVUVTIiwibG9hZGVycyIsIlZBTElEX0xBWU9VVF9WQUxVRVMiLCJkZXZpY2VTaXplcyIsImltYWdlU2l6ZXMiLCJsb2FkZXIiLCJwYXRoIiwiZG9tYWlucyIsInByb2Nlc3MiLCJpbWFnZUNvbmZpZ0RlZmF1bHQiLCJhbGxTaXplcyIsImNvbmZpZ0RldmljZVNpemVzIiwiYSIsInNpemVzIiwibGF5b3V0IiwicGVyY2VudFNpemVzIiwibSIsInBhcnNlSW50Iiwic21hbGxlc3RSYXRpbyIsIk1hdGgiLCJ3aWR0aHMiLCJzIiwia2luZCIsInciLCJwIiwic3JjU2V0IiwiZ2V0V2lkdGhzIiwibGFzdCIsImkiLCJzcmMiLCJsb2FkIiwicm9vdCIsIlZBTElEX0xPQURFUlMiLCJjb25maWdMb2FkZXIiLCJ1bm9wdGltaXplZCIsInByaW9yaXR5IiwiYWxsIiwicmVzdCIsInVuc2l6ZWQiLCJCb29sZWFuIiwiSlNPTiIsImlzTGF6eSIsInJvb3RNYXJnaW4iLCJkaXNhYmxlZCIsImlzVmlzaWJsZSIsIndpZHRoSW50IiwiZ2V0SW50IiwiaGVpZ2h0SW50IiwicXVhbGl0eUludCIsImltZ1N0eWxlIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwiYm90dG9tIiwicmlnaHQiLCJib3hTaXppbmciLCJwYWRkaW5nIiwiYm9yZGVyIiwibWFyZ2luIiwiZGlzcGxheSIsIm1pbldpZHRoIiwibWF4V2lkdGgiLCJtaW5IZWlnaHQiLCJtYXhIZWlnaHQiLCJxdW90aWVudCIsInBhZGRpbmdUb3AiLCJpc05hTiIsIndyYXBwZXJTdHlsZSIsInNpemVyU3R5bGUiLCJzaXplclN2ZyIsImltZ0F0dHJpYnV0ZXMiLCJnZW5lcmF0ZUltZ0F0dHJzIiwicXVhbGl0eSIsInBhcmFtcyIsInBhcmFtc1N0cmluZyIsIm5vcm1hbGl6ZVNyYyIsIm1pc3NpbmdWYWx1ZXMiLCJwYXJzZWRTcmMiLCJjb25maWdEb21haW5zIiwiaG9zdG5hbWUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJwcmVmZXRjaGVkIiwiZXJyIiwiY3VyTG9jYWxlIiwib3B0aW9ucyIsImhyZWYiLCJldmVudCIsInRhcmdldCIsImUiLCJub2RlTmFtZSIsImlzTW9kaWZpZWRFdmVudCIsInNjcm9sbCIsImFzIiwicmVwbGFjZSIsImFyZ3MiLCJrZXkiLCJleHBlY3RlZCIsImFjdHVhbCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJPYmplY3QiLCJwcm9wcyIsImNyZWF0ZVByb3BFcnJvciIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJzaGFsbG93IiwicGFzc0hyZWYiLCJwcmVmZXRjaCIsIm9wdGlvbmFsUHJvcHMiLCJ2YWxUeXBlIiwiaGFzV2FybmVkIiwiUmVhY3QiLCJyZXNvbHZlZEFzIiwiY2hpbGQiLCJDaGlsZHJlbiIsImNoaWxkUmVmIiwic2V0UmVmIiwiZWwiLCJzZXRJbnRlcnNlY3Rpb25SZWYiLCJzaG91bGRQcmVmZXRjaCIsImlzUHJlZmV0Y2hlZCIsImNoaWxkUHJvcHMiLCJyZWYiLCJvbkNsaWNrIiwibGlua0NsaWNrZWQiLCJsb2NhbGVEb21haW4iLCJMaW5rIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwic2VsZiIsInN0YXJ0IiwiRGF0ZSIsInNldFRpbWVvdXQiLCJjYiIsImRpZFRpbWVvdXQiLCJ0aW1lUmVtYWluaW5nIiwiY2FuY2VsSWRsZUNhbGxiYWNrIiwiY2xlYXJUaW1lb3V0IiwiTVNfTUFYX0lETEVfREVMQVkiLCJlbnRyeSIsIm1hcCIsIlByb21pc2UiLCJwcm9tIiwicmVzb2x2ZSIsInJlc29sdmVyIiwiZnV0dXJlIiwiZ2VuZXJhdG9yIiwibGluayIsImNhblByZWZldGNoIiwiaGFzUHJlZmV0Y2giLCJyZXMiLCJBU1NFVF9MT0FEX0VSUk9SIiwiU3ltYm9sIiwic2NyaXB0IiwicmVqZWN0IiwibWFya0Fzc2V0RXJyb3IiLCJjYW5jZWxsZWQiLCJyIiwib25CdWlsZE1hbmlmZXN0IiwicmVzb2x2ZVByb21pc2VXaXRoVGltZW91dCIsInNjcmlwdHMiLCJhc3NldFByZWZpeCIsImVuY29kZVVSSSIsImNzcyIsImdldENsaWVudEJ1aWxkTWFuaWZlc3QiLCJtYW5pZmVzdCIsInJvdXRlIiwiYWxsRmlsZXMiLCJ2IiwiZW50cnlwb2ludHMiLCJsb2FkZWRTY3JpcHRzIiwic3R5bGVTaGVldHMiLCJyb3V0ZXMiLCJhcHBlbmRTY3JpcHQiLCJmZXRjaCIsInRleHQiLCJjb250ZW50Iiwid2hlbkVudHJ5cG9pbnQiLCJ3aXRoRnV0dXJlIiwib25FbnRyeXBvaW50IiwiZm4iLCJleHBvcnRzIiwiY29tcG9uZW50IiwiZXJyb3IiLCJpbnB1dCIsIm9sZCIsImxvYWRSb3V0ZSIsImdldEZpbGVzRm9yUm91dGUiLCJlbnRyeXBvaW50Iiwic3R5bGVzIiwiY24iLCJuYXZpZ2F0b3IiLCJvdXRwdXQiLCJwcmVmZXRjaFZpYURvbSIsImNyZWF0ZVJvdXRlTG9hZGVyIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImdldCIsIlJvdXRlciIsImZpZWxkIiwiZ2V0Um91dGVyIiwiZXZlbnRGaWVsZCIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiX3JvdXRlciIsImluc3RhbmNlIiwiQXJyYXkiLCJoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciIsImlzRGlzYWJsZWQiLCJ1bm9ic2VydmUiLCJvYnNlcnZlIiwic2V0VmlzaWJsZSIsImlkbGVDYWxsYmFjayIsImNyZWF0ZU9ic2VydmVyIiwiZWxlbWVudHMiLCJvYnNlcnZlciIsIm9ic2VydmVycyIsImlkIiwiZW50cmllcyIsImNhbGxiYWNrIiwiQ29tcG9zZWRDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJXaXRoUm91dGVyV3JhcHBlciIsIm5hbWUiLCJwYXRobmFtZVBhcnRzIiwibG9jYWxlcyIsImRldGVjdGVkTG9jYWxlIiwib24iLCJvZmYiLCJlbWl0IiwiaGFuZGxlciIsImJhc2VQYXRoIiwicHJlZml4IiwicGF0aE5vUXVlcnlIYXNoIiwicXVlcnlJbmRleCIsImhhc2hJbmRleCIsImFkZFBhdGhQcmVmaXgiLCJsb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwiaGFzQmFzZVBhdGgiLCJpbnRlcnBvbGF0ZWRSb3V0ZSIsImR5bmFtaWNSZWdleCIsImR5bmFtaWNHcm91cHMiLCJkeW5hbWljTWF0Y2hlcyIsImFzUGF0aG5hbWUiLCJwYXJhbSIsInJlcGxhY2VkIiwib3B0aW9uYWwiLCJzZWdtZW50IiwicmVzdWx0IiwiZmlsdGVyZWRRdWVyeSIsInF1ZXJ5IiwiYmFzZSIsInVybEFzU3RyaW5nIiwiaXNMb2NhbFVSTCIsInJlc29sdmVBcyIsImZpbmFsVXJsIiwiaW50ZXJwb2xhdGVkQXMiLCJpbnRlcnBvbGF0ZUFzIiwiaGFzaCIsIm9taXRQYXJtc0Zyb21RdWVyeSIsInJlc29sdmVkSHJlZiIsIm9yaWdpbiIsInJlc29sdmVIcmVmIiwiaHJlZkhhZE9yaWdpbiIsImFzSGFkT3JpZ2luIiwic3RyaXBPcmlnaW4iLCJwcmVwYXJlZFVybCIsImFkZEJhc2VQYXRoIiwicHJlcGFyZWRBcyIsImNsZWFuUGF0aG5hbWUiLCJwYWdlcyIsInBhZ2UiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsIlNTR19EQVRBX05PVF9GT1VORCIsImNyZWRlbnRpYWxzIiwiYXR0ZW1wdHMiLCJmZXRjaFJldHJ5IiwiZGF0YSIsIm5vdEZvdW5kIiwiaXNTZXJ2ZXJSZW5kZXIiLCJjb25zdHJ1Y3RvciIsImFzUGF0aCIsImNvbXBvbmVudHMiLCJzZGMiLCJzZHIiLCJzdWIiLCJjbGMiLCJwYWdlTG9hZGVyIiwiX2JwcyIsImV2ZW50cyIsIl93cmFwQXBwIiwiaXNTc3IiLCJpc0ZhbGxiYWNrIiwiX2luRmxpZ2h0Um91dGUiLCJfc2hhbGxvdyIsImRlZmF1bHRMb2NhbGUiLCJkb21haW5Mb2NhbGVzIiwiaXNSZWFkeSIsImlzUHJldmlldyIsImlzTG9jYWxlRG9tYWluIiwiX2lkeCIsInN0YXRlIiwiaW5pdGlhbCIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwiQ29tcG9uZW50IiwiYXV0b0V4cG9ydER5bmFtaWMiLCJyZWxvYWQiLCJiYWNrIiwicHVzaCIsInByZXBhcmVVcmxBcyIsImxvY2FsZUNoYW5nZSIsIlNUIiwicGVyZm9ybWFuY2UiLCJyb3V0ZVByb3BzIiwiYWRkTG9jYWxlIiwiZGVsQmFzZVBhdGgiLCJjbGVhbmVkQXMiLCJkZWxMb2NhbGUiLCJwYXJzZWQiLCJfX3Jld3JpdGVzIiwibWV0aG9kIiwicmVzb2x2ZUR5bmFtaWNSb3V0ZSIsInBhcnNlZEFzIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJzaG91bGRJbnRlcnBvbGF0ZSIsIm1pc3NpbmdQYXJhbXMiLCJyb3V0ZUluZm8iLCJkZXN0aW5hdGlvbiIsInBhcnNlZEhyZWYiLCJub3RGb3VuZFJvdXRlIiwiYXBwQ29tcCIsImlzVmFsaWRTaGFsbG93Um91dGUiLCJmb3JjZWRTY3JvbGwiLCJjaGFuZ2VTdGF0ZSIsIl9fTiIsImlkeCIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJleGlzdGluZ1JvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsInJlcXVpcmUiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJkYXRhSHJlZiIsImJlZm9yZVBvcFN0YXRlIiwib25seUFIYXNoQ2hhbmdlIiwibmV3SGFzaCIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJzY3JvbGxUb0hhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJpc1NzZyIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsIl9nZXREYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJmZXRjaE5leHREYXRhIiwiX2dldFNlcnZlckRhdGEiLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5Iiwic2xhc2hlZFByb3RvY29scyIsInByb3RvY29sIiwidXJsT2JqIiwiaG9zdCIsIlN0cmluZyIsInF1ZXJ5c3RyaW5nIiwic2VhcmNoIiwiVEVTVF9ST1VURSIsImdsb2JhbEJhc2UiLCJyZXNvbHZlZEJhc2UiLCJzZWFyY2hQYXJhbXMiLCJpdGVtIiwic3RyaW5naWZ5VXJsUXVlcnlQYXJhbSIsInNlYXJjaFBhcmFtc0xpc3QiLCJyZSIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsInNsdWdOYW1lIiwiZyIsImdyb3VwcyIsInN0ciIsInNlZ21lbnRzIiwibm9ybWFsaXplZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsInBhcnNlUGFyYW1ldGVyIiwicG9zIiwiZXNjYXBlUmVnZXgiLCJyb3V0ZUtleUNoYXJDb2RlIiwicm91dGVLZXlDaGFyTGVuZ3RoIiwiZ2V0U2FmZVJvdXRlS2V5Iiwicm91dGVLZXkiLCJyb3V0ZUtleXMiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImNsZWFuZWRLZXkiLCJpbnZhbGlkS2V5IiwibmFtZWRSZWdleCIsInVzZWQiLCJwb3J0IiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJBcHAiLCJnZXREaXNwbGF5TmFtZSIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJpc1Jlc1NlbnQiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJNeUFwcCIsImRpcmVjdFJvdXRlIiwidXNlV2luZG93U2l6ZSIsIndpbmRvd1NpemUiLCJzZXRXaW5kb3dTaXplIiwidW5kZWZpbmVkIiwiaGFuZGxlUmVzaXplIiwiaW5uZXJIZWlnaHQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDeEZBLDhEOzs7Ozs7Ozs7OztBQ0FBLHdFOzs7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Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsZ0Q7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvaW1hZ2UtY29uZmlnLmpzXCIpOyIsImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IE1vYmlsZVByZXZlbnQgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1zY3JlZW4gdy1zY3JlZW4gZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgYmctYmFja2dyb3VuZCB0ZXh0LXByaW1hcnlkYXJrXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTQgc21Db250YWluZXI6cHgtMTIgbWRDb250YWluZXI6cHgtMjAgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICA8aW1nIHNyYz1cIi9tb2JpbGUtcHJldmVudC9jb21wdXRlci5zdmdcIiBoZWlnaHQ9ezI1MH0gd2lkdGg9ezI1MH0gLz5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1sZyBtdC00XCI+XHJcbiAgICAgICAgICAgIFBsZWFzZSBvcGVuIHRoZSBhcHBsaWNhdGlvbiBvbiB5b3VyIGNvbXB1dGVyISDwn4y0XHJcbiAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1ibG9jayByZWxhdGl2ZSBsZWZ0LTIgdG9wLTAuNVwiPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiL21vYmlsZS1wcmV2ZW50L3JvY2tldC5zdmdcIiBoZWlnaHQ9ezIwfSB3aWR0aD17MjB9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0IG10LTIgdGV4dC1ncmF5IHB4LTQgc21Db250YWluZXI6cHgtOCBtZENvbnRhaW5lcjpweC0xNlwiPlxyXG4gICAgICAgICAgSW4gb3JkZXIgdG8gcHJvdmlkZSBvdXIgdXNlcnMgd2l0aCB0aGUgYmVzdCBwb3NzaWJsZSBleHBlcmllbmNlLCB3ZSBoYXZlIGRlY2lkZWQgdG8gZGlzYWJsZSB0aGUgdXNlIG9mIG91ciBhcHAgdmlhIG1vYmlsZSBkZXZpY2VzLlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9iaWxlUHJldmVudDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlU3RhdGUsIGNyZWF0ZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IGdzYXAsIHsgUG93ZXIxLCBQb3dlcjQgfSBmcm9tICdnc2FwJztcclxuXHJcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSAnbmV4dC10aGVtZXMnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tICcuLi8uLi9saWIvbmV3QXV0aCc7XHJcblxyXG5leHBvcnQgY29uc3QgSXNBY3RpdmVDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuY29uc3QgRGVza3RvcE5hdmJhciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCB7IGxvZ091dCB9ID0gdXNlQXV0aCgpO1xyXG5cclxuICBjb25zdCB7IHRoZW1lLCBzZXRUaGVtZSB9ID0gdXNlVGhlbWUoKTtcclxuICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IG5hdlJlZiA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgbWFuUmVmID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IHRsID0gZ3NhcC50aW1lbGluZSh7IHJlcGVhdDogLTEsIHlveW86IHRydWUgfSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB0bC50byhtYW5SZWYuY3VycmVudCwge1xyXG4gICAgICBkdXJhdGlvbjogMyxcclxuICAgICAgeTogMjUwLFxyXG4gICAgICB4OiAxNzUsXHJcbiAgICAgIGVhc2U6IFBvd2VyMS5lYXNlSW5PdXQsXHJcbiAgICB9KVxyXG4gICAgICAudG8obWFuUmVmLmN1cnJlbnQsIHtcclxuICAgICAgICBkdXJhdGlvbjogMyxcclxuICAgICAgICB5OiA1MDAsXHJcbiAgICAgICAgeDogMzUwLFxyXG4gICAgICAgIGVhc2U6IFBvd2VyMS5lYXNlSW5PdXQsXHJcbiAgICAgIH0pXHJcbiAgICAgIC50byhtYW5SZWYuY3VycmVudCwge1xyXG4gICAgICAgIGR1cmF0aW9uOiAzLFxyXG4gICAgICAgIHk6IDI1MCxcclxuICAgICAgICB4OiAxNzUsXHJcbiAgICAgICAgZWFzZTogUG93ZXIxLmVhc2VJbk91dCxcclxuICAgICAgfSlcclxuICAgICAgLnRvKG1hblJlZi5jdXJyZW50LCB7IGR1cmF0aW9uOiAzLCB5OiAwLCB4OiAwLCBlYXNlOiBQb3dlcjEuZWFzZUluT3V0IH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgW2FjdGl2ZUNsYXNzMSwgc2V0QWN0aXZlQ2xhc3MxXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbYWN0aXZlQ2xhc3MyLCBzZXRBY3RpdmVDbGFzczJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFthY3RpdmVDbGFzczMsIHNldEFjdGl2ZUNsYXNzM10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2FjdGl2ZUNsYXNzNCwgc2V0QWN0aXZlQ2xhc3M0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbYWN0aXZlQ2xhc3M1LCBzZXRBY3RpdmVDbGFzczVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBbYWN0aXZlSG92ZXIxLCBzZXRBY3RpdmVIb3ZlcjFdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFthY3RpdmVIb3ZlcjIsIHNldEFjdGl2ZUhvdmVyMl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2FjdGl2ZUhvdmVyMywgc2V0QWN0aXZlSG92ZXIzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbYWN0aXZlSG92ZXI0LCBzZXRBY3RpdmVIb3ZlcjRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFthY3RpdmVIb3ZlcjUsIHNldEFjdGl2ZUhvdmVyNV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAocm91dGVyLnBhdGhuYW1lLmluY2x1ZGVzKCd3ZWxjb21lJykpIHtcclxuICAgICAgc2V0QWN0aXZlQ2xhc3MxKHRydWUpO1xyXG4gICAgfSBlbHNlIGlmIChyb3V0ZXIucGF0aG5hbWUuaW5jbHVkZXMoJ3N0YXJ0dXAnKSkge1xyXG4gICAgICBzZXRBY3RpdmVDbGFzczIodHJ1ZSk7XHJcbiAgICB9IGVsc2UgaWYgKHJvdXRlci5wYXRobmFtZS5pbmNsdWRlcygnYnVzaW5lc3MnKSkge1xyXG4gICAgICAvLyBUZWdvIHJvdXRlcidhIGplc3pjemUgbmllIG1hXHJcbiAgICAgIHNldEFjdGl2ZUNsYXNzMyh0cnVlKTtcclxuICAgIH0gZWxzZSBpZiAocm91dGVyLnBhdGhuYW1lLmluY2x1ZGVzKCdhY2NvdW50JykpIHtcclxuICAgICAgLy8gVGVnbyByb3V0ZXInYSBqZXN6Y3plIG5pZSBtYVxyXG4gICAgICBzZXRBY3RpdmVDbGFzczQodHJ1ZSk7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBhY3RpdmVDbGFzc0ZuMSA9ICgpID0+IHtcclxuICAgIHNldEFjdGl2ZUNsYXNzMSh0cnVlKTtcclxuICAgIHNldEFjdGl2ZUNsYXNzMihmYWxzZSk7XHJcbiAgICBzZXRBY3RpdmVDbGFzczMoZmFsc2UpO1xyXG4gICAgc2V0QWN0aXZlQ2xhc3M0KGZhbHNlKTtcclxuICAgIHNldEFjdGl2ZUNsYXNzNShmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYWN0aXZlQ2xhc3NGbjIgPSAoKSA9PiB7XHJcbiAgICBzZXRBY3RpdmVDbGFzczEoZmFsc2UpO1xyXG4gICAgc2V0QWN0aXZlQ2xhc3MyKHRydWUpO1xyXG4gICAgc2V0QWN0aXZlQ2xhc3MzKGZhbHNlKTtcclxuICAgIHNldEFjdGl2ZUNsYXNzNChmYWxzZSk7XHJcbiAgICBzZXRBY3RpdmVDbGFzczUoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGFjdGl2ZUNsYXNzRm4zID0gKCkgPT4ge1xyXG4gICAgc2V0QWN0aXZlQ2xhc3MxKGZhbHNlKTtcclxuICAgIHNldEFjdGl2ZUNsYXNzMihmYWxzZSk7XHJcbiAgICBzZXRBY3RpdmVDbGFzczModHJ1ZSk7XHJcbiAgICBzZXRBY3RpdmVDbGFzczQoZmFsc2UpO1xyXG4gICAgc2V0QWN0aXZlQ2xhc3M1KGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBhY3RpdmVDbGFzc0ZuNCA9ICgpID0+IHtcclxuICAgIHNldEFjdGl2ZUNsYXNzMShmYWxzZSk7XHJcbiAgICBzZXRBY3RpdmVDbGFzczIoZmFsc2UpO1xyXG4gICAgc2V0QWN0aXZlQ2xhc3MzKGZhbHNlKTtcclxuICAgIHNldEFjdGl2ZUNsYXNzNCh0cnVlKTtcclxuICAgIHNldEFjdGl2ZUNsYXNzNShmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYWN0aXZlQ2xhc3NGbjUgPSAoKSA9PiB7XHJcbiAgICBzZXRBY3RpdmVDbGFzczEoZmFsc2UpO1xyXG4gICAgc2V0QWN0aXZlQ2xhc3MyKGZhbHNlKTtcclxuICAgIHNldEFjdGl2ZUNsYXNzMyhmYWxzZSk7XHJcbiAgICBzZXRBY3RpdmVDbGFzczQoZmFsc2UpO1xyXG4gICAgc2V0QWN0aXZlQ2xhc3M1KHRydWUpO1xyXG4gICAgbG9nT3V0KCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbW91c2VFbnRlck5hdiA9ICgpID0+IHtcclxuICAgIHNldEFjdGl2ZSh0cnVlKTtcclxuXHJcbiAgICBnc2FwLnRvKG5hdlJlZi5jdXJyZW50LCB7XHJcbiAgICAgIHdpZHRoOiAnMjA4cHgnLFxyXG4gICAgICBlYXNlOiBQb3dlcjQuZWFzZU91dCxcclxuICAgICAgZHVyYXRpb246IDEsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBtb3VzZUxlYXZlTmF2ID0gKCkgPT4ge1xyXG4gICAgc2V0QWN0aXZlKGZhbHNlKTtcclxuXHJcbiAgICBnc2FwLnRvKG5hdlJlZi5jdXJyZW50LCB7IHdpZHRoOiAnODBweCcsIGVhc2U6IFBvd2VyNC5lYXNlT3V0IH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8SXNBY3RpdmVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXthY3RpdmV9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIHJpZ2h0LTAgei01MFwiIHN0eWxlPXt7IG92ZXJmbG93OiAndW5zZXQnLCBoZWlnaHQ6IDE3NSB9fT5cclxuICAgICAgICA8c3ZnIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgc3R5bGU9e3sgb3ZlcmZsb3c6ICd1bnNldCcgfX0gdmlld0JveD1cIjAgMCA3NzAgNzcyXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgICAgICAgPGc+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRUaGVtZSh0aGVtZSA9PT0gJ2RhcmsnID8gJ2xpZ2h0JyA6ICdkYXJrJyl9XHJcbiAgICAgICAgICAgICAgZD1cIk03NjkuMDAxIDBIMzEwLjI4NkMzMDYuNzYyIDIxLjQ4NzEgMzA0Ljk5NCA0My4yMjU3IDMwNS4wMDEgNjVDMzA1LjAwMSAyODQuODA5IDQ4My4xOTIgNDYzIDcwMy4wMDEgNDYzQzcyNS4xMTQgNDYzLjAwOCA3NDcuMTkgNDYxLjE4NSA3NjkuMDAxIDQ1Ny41NVYwWlwiXHJcbiAgICAgICAgICAgICAgZmlsbD1cIiMwQTEyMzBcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0VGhlbWUodGhlbWUgPT09ICdkYXJrJyA/ICdsaWdodCcgOiAnZGFyaycpfVxyXG4gICAgICAgICAgICAgIGQ9XCJNNTc0Ljg0OSAyNDguODA5QzU2Ny45NjUgMjQ4LjgxNSA1NjEuMTM1IDI0Ny41ODIgNTU0LjY4NyAyNDUuMTdDNTU0LjMxOCAyNDUuMDMyIDU1My45OCAyNDQuODIyIDU1My42OTIgMjQ0LjU1M0M1NTMuNDA0IDI0NC4yODQgNTUzLjE3MiAyNDMuOTYxIDU1My4wMDkgMjQzLjYwM0M1NTIuODQ2IDI0My4yNDQgNTUyLjc1NSAyNDIuODU3IDU1Mi43NDIgMjQyLjQ2M0M1NTIuNzI4IDI0Mi4wNyA1NTIuNzkyIDI0MS42NzcgNTUyLjkzMSAyNDEuMzA4QzU1My4wNjkgMjQwLjkzOSA1NTMuMjc4IDI0MC42MDEgNTUzLjU0NyAyNDAuMzEzQzU1My44MTYgMjQwLjAyNSA1NTQuMTM5IDIzOS43OTMgNTU0LjQ5OCAyMzkuNjNDNTU0Ljg1NiAyMzkuNDY3IDU1NS4yNDQgMjM5LjM3NiA1NTUuNjM3IDIzOS4zNjNDNTU2LjAzMSAyMzkuMzQ5IDU1Ni40MjQgMjM5LjQxNCA1NTYuNzkyIDIzOS41NTJDNTY1LjM0MSAyNDIuNzExIDU3NC41NjYgMjQzLjU4NiA1ODMuNTU3IDI0Mi4wOUM1OTIuNTQ3IDI0MC41OTQgNjAwLjk5MSAyMzYuNzc5IDYwOC4wNTYgMjMxLjAyMUM1ODYuMDE4IDIzMS4yNTUgNTY0LjQ2MSAyMjAuODQgNTUzLjczNyAyMDQuMTI4QzU0Ni44NDIgMTkzLjM4NSA1NDQuNTg4IDE4MC43NDQgNTQ3LjIxNiAxNjcuNTdDNTQ5LjIyOSAxNTguMDE3IDU1My4zNiAxNDkuMDM3IDU1OS4zMDUgMTQxLjI5M0M1NDcuOTU0IDE0NC45MDUgNTM4LjE4NCAxNTIuMzAyIDUzMS42MjggMTYyLjI0OEM1MjUuMDcyIDE3Mi4xOTMgNTIyLjEyNiAxODQuMDg3IDUyMy4yODIgMTk1Ljk0M0M1MjMuMzIyIDE5Ni4zMzYgNTIzLjI4NCAxOTYuNzMzIDUyMy4xNzEgMTk3LjExMUM1MjMuMDU3IDE5Ny40ODkgNTIyLjg3MSAxOTcuODQxIDUyMi42MjEgMTk4LjE0N0M1MjIuMzcxIDE5OC40NTMgNTIyLjA2MyAxOTguNzA2IDUyMS43MTUgMTk4Ljg5M0M1MjEuMzY3IDE5OS4wOCA1MjAuOTg2IDE5OS4xOTYgNTIwLjU5MyAxOTkuMjM1QzUyMC4yIDE5OS4yNzQgNTE5LjgwNCAxOTkuMjM1IDUxOS40MjYgMTk5LjEyQzUxOS4wNDggMTk5LjAwNSA1MTguNjk3IDE5OC44MTcgNTE4LjM5MiAxOTguNTY2QzUxOC4wODcgMTk4LjMxNiA1MTcuODM0IDE5OC4wMDcgNTE3LjY0OSAxOTcuNjU4QzUxNy40NjMgMTk3LjMxIDUxNy4zNDkgMTk2LjkyOCA1MTcuMzExIDE5Ni41MzVDNTE1Ljg1NCAxODEuNjE5IDUyMC4yMjMgMTY2LjcxNiA1MjkuNTA0IDE1NC45NDhDNTM4Ljc4NCAxNDMuMTggNTUyLjI1OCAxMzUuNDU3IDU2Ny4xMDMgMTMzLjM5N0M1NjcuNzI0IDEzMy4zMTEgNTY4LjM1NiAxMzMuNDIxIDU2OC45MTEgMTMzLjcxM0M1NjkuNDY2IDEzNC4wMDQgNTY5LjkxNSAxMzQuNDYyIDU3MC4xOTcgMTM1LjAyMUM1NzAuNDc4IDEzNS41ODEgNTcwLjU3NyAxMzYuMjE1IDU3MC40OCAxMzYuODM1QzU3MC4zODIgMTM3LjQ1NCA1NzAuMDk0IDEzOC4wMjcgNTY5LjY1NCAxMzguNDczQzU1NC4zMSAxNTQuMDU5IDU0NC45OTkgMTc5LjQwMiA1NTguNzg2IDIwMC44ODhDNTY5LjY2NCAyMTcuODM3IDU5My4wNjkgMjI3LjUzMiA2MTUuNzE0IDIyNC40NjhDNjE2LjMyMiAyMjQuMzg2IDYxNi45NCAyMjQuNDkxIDYxNy40ODUgMjI0Ljc3MUM2MTguMDMxIDIyNS4wNTEgNjE4LjQ3OCAyMjUuNDkxIDYxOC43NjUgMjI2LjAzMkM2MTkuMDUzIDIyNi41NzQgNjE5LjE2OCAyMjcuMTkgNjE5LjA5NSAyMjcuNzk5QzYxOS4wMjIgMjI4LjQwNyA2MTguNzY0IDIyOC45NzkgNjE4LjM1NiAyMjkuNDM2QzYxMi44NzMgMjM1LjU0MiA2MDYuMTY0IDI0MC40MjIgNTk4LjY2NyAyNDMuNzZDNTkxLjE3MSAyNDcuMDk4IDU4My4wNTUgMjQ4LjgxOCA1NzQuODQ5IDI0OC44MDlWMjQ4LjgwOVpcIlxyXG4gICAgICAgICAgICAgIGZpbGw9XCIjNkM2M0ZGXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFRoZW1lKHRoZW1lID09PSAnZGFyaycgPyAnbGlnaHQnIDogJ2RhcmsnKX1cclxuICAgICAgICAgICAgICBkPVwiTTUyNy4wMDEgMjUwQzUyMi42NSAyNTAgNTE4LjM5NyAyNDguNzEgNTE0Ljc3OSAyNDYuMjkyQzUxMS4xNjEgMjQzLjg3NSA1MDguMzQxIDI0MC40MzkgNTA2LjY3NiAyMzYuNDE5QzUwNS4wMTEgMjMyLjM5OSA1MDQuNTc1IDIyNy45NzYgNTA1LjQyNCAyMjMuNzA4QzUwNi4yNzMgMjE5LjQ0IDUwOC4zNjggMjE1LjUyIDUxMS40NDUgMjEyLjQ0NEM1MTQuNTIyIDIwOS4zNjcgNTE4LjQ0MiAyMDcuMjcyIDUyMi43MDkgMjA2LjQyM0M1MjYuOTc3IDIwNS41NzQgNTMxLjQwMSAyMDYuMDEgNTM1LjQyMSAyMDcuNjc1QzUzOS40NDEgMjA5LjM0IDU0Mi44NzYgMjEyLjE2IDU0NS4yOTQgMjE1Ljc3N0M1NDcuNzExIDIxOS4zOTUgNTQ5LjAwMSAyMjMuNjQ5IDU0OS4wMDEgMjI4QzU0OC45OTUgMjMzLjgzMyA1NDYuNjc1IDIzOS40MjUgNTQyLjU1MSAyNDMuNTQ5QzUzOC40MjYgMjQ3LjY3MyA1MzIuODM0IDI0OS45OTMgNTI3LjAwMSAyNTBWMjUwWk01MjcuMDAxIDIxMkM1MjMuODM3IDIxMiA1MjAuNzQ0IDIxMi45MzggNTE4LjExMiAyMTQuNjk3QzUxNS40ODEgMjE2LjQ1NSA1MTMuNDMgMjE4Ljk1MyA1MTIuMjE5IDIyMS44NzdDNTExLjAwOCAyMjQuODAxIDUxMC42OTIgMjI4LjAxOCA1MTEuMzA5IDIzMS4xMjFDNTExLjkyNiAyMzQuMjI1IDUxMy40NSAyMzcuMDc2IDUxNS42ODggMjM5LjMxNEM1MTcuOTI1IDI0MS41NTEgNTIwLjc3NiAyNDMuMDc1IDUyMy44OCAyNDMuNjkzQzUyNi45ODQgMjQ0LjMxIDUzMC4yMDEgMjQzLjk5MyA1MzMuMTI0IDI0Mi43ODJDNTM2LjA0OCAyNDEuNTcxIDUzOC41NDcgMjM5LjUyIDU0MC4zMDUgMjM2Ljg4OUM1NDIuMDYzIDIzNC4yNTggNTQzLjAwMSAyMzEuMTY1IDU0My4wMDEgMjI4QzU0Mi45OTcgMjIzLjc1OCA1NDEuMzA5IDIxOS42OTEgNTM4LjMxIDIxNi42OTJDNTM1LjMxIDIxMy42OTIgNTMxLjI0MyAyMTIuMDA1IDUyNy4wMDEgMjEyVjIxMlpcIlxyXG4gICAgICAgICAgICAgIGZpbGw9XCIjNkM2M0ZGXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGcgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX0gb25DbGljaz17KCkgPT4gc2V0VGhlbWUodGhlbWUgPT09ICdkYXJrJyA/ICdsaWdodCcgOiAnZGFyaycpfSByZWY9e21hblJlZn0+XHJcbiAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIGQ9XCJNOC42OTA3NCA1NjcuMDc4QzcuMjQ1NDYgNTY2Ljg1MyA1Ljg2NTA0IDU2Ni4zMjEgNC42NDE4MiA1NjUuNTE4QzMuNDE4NiA1NjQuNzE2IDIuMzgwNzcgNTYzLjY2MiAxLjU5NzcxIDU2Mi40MjdDMC44MTQ2NTIgNTYxLjE5MSAwLjMwNDQyMyA1NTkuODAyIDAuMTAxMTU3IDU1OC4zNTRDLTAuMTAyMTA5IDU1Ni45MDUgMC4wMDYyNzUxMiA1NTUuNDMgMC40MTkwNDQgNTU0LjAyNkw4LjIwNzM3IDUyNy41NDZMMjAuMDQyIDUyOS43NjVMMjAuNTUwOCA1NTYuNzMyQzIwLjU3OTEgNTU4LjIzMiAyMC4yNzg4IDU1OS43MTkgMTkuNjcwOSA1NjEuMDkxQzE5LjA2MyA1NjIuNDYyIDE4LjE2MjMgNTYzLjY4MyAxNy4wMzIgNTY0LjY2OUMxNS45MDE3IDU2NS42NTUgMTQuNTY5MyA1NjYuMzgyIDEzLjEyODMgNTY2Ljc5OEMxMS42ODczIDU2Ny4yMTQgMTAuMTcyNyA1NjcuMzEgOC42OTA3NCA1NjcuMDc4VjU2Ny4wNzhaXCJcclxuICAgICAgICAgICAgICAgIGZpbGw9XCIjOUY2MTZBXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICBkPVwiTTc2Ljk5NiA3MzYuMTMyTDYyLjIwMyA3MzMuOTEzTDY1LjkwMSA1ODkuNjc4TDQ1LjE5MSA2NTEuODFMMzQuMDk2IDczOS4wOTFMMjAuMDQyIDczNS4zOTNMMTcuMDgzIDY0NC40MTRMMzMuMzU2IDUzNy4xNjJMMTE0LjcxOSA1NTUuNjU0TDc2Ljk5NiA3MzYuMTMyWlwiXHJcbiAgICAgICAgICAgICAgICBmaWxsPVwiIzBBMTIzMFwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgZD1cIk03MC4yMDQ2IDc3MS42MzZDNjcuMzIwOSA3NzEuNjM2IDY0LjU1NTMgNzcwLjQ5MSA2Mi41MTYzIDc2OC40NTJDNjAuNDc3MiA3NjYuNDEzIDU5LjMzMTcgNzYzLjY0NyA1OS4zMzE3IDc2MC43NjNDNTkuMzMxNyA3NjAuNDA4IDU5LjM0OTEgNzYwLjA1MyA1OS4zODM5IDc1OS42OTlMNjEuNjgxMSA3MzYuMzQ1QzYxLjczNjUgNzM1Ljc4NyA2MS45MjgxIDczNS4yNTEgNjIuMjM5MSA3MzQuNzg0QzYyLjU1MDEgNzM0LjMxNyA2Mi45NzA5IDczMy45MzMgNjMuNDY0NyA3MzMuNjY3QzY3LjgyNTQgNzMxLjMxNSA3Mi4zMDk2IDczMS44ODUgNzYuODk5NCA3MzQuOTU1Qzc3LjMwNjYgNzM1LjIyOSA3Ny42NDk3IDczNS41ODggNzcuOTA1MiA3MzYuMDA3Qzc4LjE2MDcgNzM2LjQyNyA3OC4zMjI2IDczNi44OTYgNzguMzc5OSA3MzcuMzg0TDgxLjAwMTcgNzU5LjQ4MkM4MS4xODI3IDc2MS4wMDggODEuMDM4NSA3NjIuNTU0IDgwLjU3ODUgNzY0LjAyQzgwLjExODUgNzY1LjQ4NSA3OS4zNTMzIDc2Ni44MzYgNzguMzMzMiA3NjcuOTg1Qzc3LjMxMzEgNzY5LjEzMyA3Ni4wNjEzIDc3MC4wNTIgNzQuNjYwMiA3NzAuNjgyQzczLjI1OTEgNzcxLjMxMSA3MS43NDA2IDc3MS42MzYgNzAuMjA0NiA3NzEuNjM2SDcwLjIwNDZaXCJcclxuICAgICAgICAgICAgICAgIGZpbGw9XCIjMEExMjMwXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICBkPVwiTTkuODIwODQgNzY5Ljg5OEM4LjQyNjc1IDc2OS4zODcgNy4xNjcxNCA3NjguNTY1IDYuMTM3MjYgNzY3LjQ5NkM1LjEwNzM4IDc2Ni40MjYgNC4zMzQxOSA3NjUuMTM2IDMuODc2MTYgNzYzLjcyNEMzLjQxODE0IDc2Mi4zMTEgMy4yODcyNyA3NjAuODEzIDMuNDkzNDQgNzU5LjM0M0MzLjY5OTYyIDc1Ny44NzIgNC4yMzc0NSA3NTYuNDY4IDUuMDY2MjYgNzU1LjIzNkwyMC44NDYzIDczMS43NzlDMjYuNTM0OCA3MjcuNjk3IDI5Ljk2NTcgNzI5LjY4NSAzMS4yOTk1IDczNy4zMTNMMzQuNDg5OCA3MjkuMzJMMzYuODkzNiA3MzEuOTQyQzM4LjExMzMgNzMzLjI3MyAzOC44MjMgNzM0Ljk5MiAzOC44OTcxIDczNi43OTVDMzguOTcxMiA3MzguNTk5IDM4LjQwNDkgNzQwLjM3IDM3LjI5ODQgNzQxLjc5NkwyMC45MzA0IDc2Ni43MDZDMTkuNjU2NyA3NjguMzQ4IDE3Ljg5MzggNzY5LjU0MiAxNS44OTY3IDc3MC4xMTZDMTMuODk5NiA3NzAuNjg5IDExLjc3MTcgNzcwLjYxMyA5LjgyMDg0IDc2OS44OThWNzY5Ljg5OFpcIlxyXG4gICAgICAgICAgICAgICAgZmlsbD1cIiMwQTEyMzBcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIGQ9XCJNMTA5LjU0MiAzOTguMTA1QzEyMS43OTcgMzk4LjEwNSAxMzEuNzMyIDM4OC4xNyAxMzEuNzMyIDM3NS45MTVDMTMxLjczMiAzNjMuNjU5IDEyMS43OTcgMzUzLjcyNSAxMDkuNTQyIDM1My43MjVDOTcuMjg2NSAzNTMuNzI1IDg3LjM1MTcgMzYzLjY1OSA4Ny4zNTE3IDM3NS45MTVDODcuMzUxNyAzODguMTcgOTcuMjg2NSAzOTguMTA1IDEwOS41NDIgMzk4LjEwNVpcIlxyXG4gICAgICAgICAgICAgICAgZmlsbD1cIiM5RjYxNkFcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIGQ9XCJNMTIzLjU5NSA0MTYuNTk2TDg1Ljg3MjMgNDA5LjJDOTAuNzMxMyAzOTguODM2IDk0LjYyMjUgMzk1LjMzIDkwLjMxMDMgMzg0LjA1MUgxMjAuNjM3QzExNy45NjIgMzk1LjczMyAxMjAuNTQ3IDQwNi42OTggMTIzLjU5NSA0MTYuNTk2WlwiXHJcbiAgICAgICAgICAgICAgICBmaWxsPVwiIzlGNjE2QVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgZD1cIk0xMTkuMTU3IDU2Ni4wMDlMMzAuMzk3MyA1NDAuODZDNDguMTc2MSA1MDEuNzMxIDUxLjkgNDU4Ljc2OSA0Ni42Mjg3IDQxMy4zNTZDNDYuNTAzNCA0MTIuMjg1IDQ2LjU5MDQgNDExLjE5OSA0Ni44ODQ3IDQxMC4xNkM0Ny4xNzkxIDQwOS4xMjIgNDcuNjc1MSA0MDguMTUyIDQ4LjM0NDMgNDA3LjMwNkM0OS4wMTM1IDQwNi40NTkgNDkuODQzIDQwNS43NTMgNTAuNzg1MiA0MDUuMjI3QzUxLjcyNzUgNDA0LjcwMSA1Mi43NjQxIDQwNC4zNjYgNTMuODM1OSA0MDQuMjRDNTMuOTM1NyA0MDQuMjI5IDU0LjAzNTYgNDA0LjIxOSA1NC4xMzU4IDQwNC4yMTFDNjUuNzEzNyA0MDMuMjU3IDc3Ljc4NDQgNDAyLjAzMyA5MC4zMTA0IDQwMC4zMjRMMTA0LjM2NCA0MDkuOTM5TDEyMC42MzcgNDA2LjI0MUMxMjUuODU4IDQwOC43NzIgMTMxLjExOCA0MTAuODc3IDEzNS44NjQgNDEyLjk3NUMxNDAuMTkxIDQxNC44OTMgMTQzLjY0OSA0MTguMzU0IDE0NS41NjMgNDIyLjY4M0MxNDcuNDc2IDQyNy4wMTIgMTQ3LjcwOSA0MzEuODk4IDE0Ni4yMTUgNDM2LjM4OUMxMzEuNzUyIDQ4MC4wNjYgMTIyLjA3MSA1MjMuMzI5IDExOS4xNTcgNTY2LjAwOVpcIlxyXG4gICAgICAgICAgICAgICAgZmlsbD1cIiNFNkU2RTZcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIGQ9XCJNMjIuMjYxIDUzMi43MjRMNS4yNDg2NiA1MzAuNTA1TDQ1LjU1MDggNDE0LjM4QzQ3LjYwMDggNDA4LjQ3MyA1Mi42ODQ4IDQwNS4yNzYgNTguODc0NSA0MDQuMzkyTDY0Ljc5MTggNDA1LjEzMUw2MC4zNTM4IDQ3My45MkwyMi4yNjEgNTMyLjcyNFpcIlxyXG4gICAgICAgICAgICAgICAgZmlsbD1cIiNFNkU2RTZcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIGQ9XCJNMTU1LjUyNSA1MTAuNTI0QzE1Mi42OTIgNTEwLjc0MiAxNDkuODYzIDUxMC4wNiAxNDcuNDQxIDUwOC41NzRDMTQ1LjAxOSA1MDcuMDg5IDE0My4xMjggNTA0Ljg3NyAxNDIuMDM4IDUwMi4yNTNMMTI1LjgxNCA0NjMuMTk1TDEzOS4xMjggNDE1LjExN0wxNDIuNjQ4IDQxNy4zNTdDMTQyLjk4NyA0MTcuNTcyIDE0My4zMjIgNDE3Ljc5NCAxNDMuNjUyIDQxOC4wMkMxNDguNTkzIDQyMS40ODEgMTUyLjQ0MiA0MjYuMjgzIDE1NC43NDYgNDMxLjg1OEMxNTcuMDQ5IDQzNy40MzQgMTU3LjcxMSA0NDMuNTUyIDE1Ni42NTQgNDQ5LjQ5MUwxNTMuMTgyIDQ2OS44NTJMMTY3LjUwNSA1MDAuNjA1QzE2Ni43NzcgNTAzLjI5NCAxNjUuMjM1IDUwNS42OSAxNjMuMDg5IDUwNy40NjZDMTYwLjk0NCA1MDkuMjQzIDE1OC4zMDIgNTEwLjMxMSAxNTUuNTI1IDUxMC41MjRWNTEwLjUyNFpcIlxyXG4gICAgICAgICAgICAgICAgZmlsbD1cIiNFNkU2RTZcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIGQ9XCJNMTExLjI0OCAzNDMuMDI3QzExNS4wNCAzNDMuMjAxIDExOC43MzMgMzQ0LjI4OCAxMjIuMDE0IDM0Ni4xOTZDMTIyLjc2OSAzNDYuNjM2IDEyMi40MiAzNDguMjE5IDEyMy4xMTcgMzQ4LjczNkMxMjMuOTk1IDM0OS4zODYgMTI1LjkwMiAzNDguOTkxIDEyNi42OCAzNDkuNzUzQzEyOS4xOSAzNTIuMjAzIDEzMS4xMjMgMzU1LjE4MiAxMzIuMzM4IDM1OC40NzRDMTMzLjU1MiAzNjEuNzY1IDEzNC4wMTggMzY1LjI4NSAxMzMuNzAyIDM2OC43NzlMMTMyLjQ2NCAzODEuMDlMMTI5LjU0MyAzNzcuODk2QzEyNC4zMDYgMzcyLjA4OSAxMTcuMDM1IDM2OC41MTkgMTA5LjIzOCAzNjcuOTI3QzEwOC45MDYgMzY3LjkwNCAxMDguNTc0IDM2Ny44ODcgMTA4LjI0MiAzNjcuODc0TDExMC40ODkgMzYzLjk0MUwxMDYuNTg0IDM2Ny44NDdDMTA0LjgwMiAzNjcuODY2IDEwMy4wMjQgMzY4LjAxMSAxMDEuMjYzIDM2OC4yOEwxMDQuMjUxIDM2My4wNUw5OC41MTcxIDM2OC43ODRMOTguNTE2NiAzNjguNzg1Qzk2LjE3MTYgMzY5LjMgOTMuOTgwNSAzNzAuMzYgOTIuMTE5OCAzNzEuODc3QzkwLjI1OTEgMzczLjM5NSA4OC43ODA4IDM3NS4zMjggODcuODA0MiAzNzcuNTIyTDg3LjE2NzUgMzc4LjkzM0w4Ni40NTQyIDM2Ny4xODhDODYuMzE3NyAzNjAuOTExIDg4LjY4MDUgMzU0LjgzNyA5My4wMjI2IDM1MC4zMDJDOTcuMzY0NyAzNDUuNzY3IDEwMy4zMzEgMzQzLjE0MiAxMDkuNjA4IDM0My4wMDZDMTEwLjE1NSAzNDIuOTk0IDExMC43MDIgMzQzLjAwMSAxMTEuMjQ4IDM0My4wMjdaXCJcclxuICAgICAgICAgICAgICAgIGZpbGw9XCIjMkYyRTQxXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICBkPVwiTTEzMS44NzcgMzg0LjQzOEMxMzIuODYxIDM4NC40MzggMTMzLjY1OSAzODIuNTQzIDEzMy42NTkgMzgwLjIwNUMxMzMuNjU5IDM3Ny44NjcgMTMyLjg2MSAzNzUuOTcyIDEzMS44NzcgMzc1Ljk3MkMxMzAuODkyIDM3NS45NzIgMTMwLjA5NCAzNzcuODY3IDEzMC4wOTQgMzgwLjIwNUMxMzAuMDk0IDM4Mi41NDMgMTMwLjg5MiAzODQuNDM4IDEzMS44NzcgMzg0LjQzOFpcIlxyXG4gICAgICAgICAgICAgICAgZmlsbD1cIiM5RjYxNkFcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIGQ9XCJNODcuMzE5NSAzODMuMTAxQzg4LjMwMzggMzgzLjEwMSA4OS4xMDE3IDM4MS4yMDYgODkuMTAxNyAzNzguODY4Qzg5LjEwMTcgMzc2LjUzIDg4LjMwMzggMzc0LjYzNSA4Ny4zMTk1IDM3NC42MzVDODYuMzM1MSAzNzQuNjM1IDg1LjUzNzIgMzc2LjUzIDg1LjUzNzIgMzc4Ljg2OEM4NS41MzcyIDM4MS4yMDYgODYuMzM1MSAzODMuMTAxIDg3LjMxOTUgMzgzLjEwMVpcIlxyXG4gICAgICAgICAgICAgICAgZmlsbD1cIiM5RjYxNkFcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIGQ9XCJNMTc0LjAzNCA0MzUuNDE5QzE3NS40NTUgNDM1Ljc2NyAxNzYuNzg1IDQzNi40MTQgMTc3LjkzNiA0MzcuMzE3QzE3OS4wODYgNDM4LjIyIDE4MC4wMzEgNDM5LjM1OSAxODAuNzA2IDQ0MC42NTZDMTgxLjM4MiA0NDEuOTU0IDE4MS43NzIgNDQzLjM4MSAxODEuODUyIDQ0NC44NDFDMTgxLjkzMSA0NDYuMzAyIDE4MS42OTggNDQ3Ljc2MyAxODEuMTY4IDQ0OS4xMjZMMTcxLjE2IDQ3NC44NUwxNTkuNTU2IDQ3MS42MzRMMTYxLjMzOCA0NDQuNzIxQzE2MS40MzcgNDQzLjIyNSAxNjEuODYzIDQ0MS43NjggMTYyLjU4NSA0NDAuNDUzQzE2My4zMDcgNDM5LjEzOSAxNjQuMzA4IDQzNy45OTggMTY1LjUxOCA0MzcuMTExQzE2Ni43MjggNDM2LjIyNSAxNjguMTE3IDQzNS42MTQgMTY5LjU4OCA0MzUuMzIyQzE3MS4wNTkgNDM1LjAyOSAxNzIuNTc3IDQzNS4wNjMgMTc0LjAzNCA0MzUuNDE5SDE3NC4wMzRaXCJcclxuICAgICAgICAgICAgICAgIGZpbGw9XCIjOUY2MTZBXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTYwLjU3OSA1MDkuMDU1TDE0Mi4wODcgNDk3LjIyTDE1Ny42MiA0NjUuNDE0TDE3Ni44NTEgNDcyLjgxMUwxNjcuMjM2IDUwMC45MThMMTYwLjU3OSA1MDkuMDU1WlwiIGZpbGw9XCIjRTZFNkU2XCIgLz5cclxuICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgZD1cIk0xNzMuMDAxIDQwOS4xMDFWMjg0SDE3MS4wMDFWNDA5LjEwMUMxNjkuNzg3IDQwOS4zNDkgMTY4LjcwOSA0MTAuMDM5IDE2Ny45NzQgNDExLjAzN0MxNjcuMjQgNDEyLjAzNSAxNjYuOTAyIDQxMy4yNyAxNjcuMDI3IDQxNC41MDNDMTY3LjE1MSA0MTUuNzM1IDE2Ny43MjkgNDE2Ljg3OCAxNjguNjQ4IDQxNy43MDlDMTY5LjU2NyA0MTguNTQgMTcwLjc2MiA0MTkgMTcyLjAwMSA0MTlDMTczLjI0MSA0MTkgMTc0LjQzNSA0MTguNTQgMTc1LjM1NSA0MTcuNzA5QzE3Ni4yNzQgNDE2Ljg3OCAxNzYuODUyIDQxNS43MzUgMTc2Ljk3NiA0MTQuNTAzQzE3Ny4xMDEgNDEzLjI3IDE3Ni43NjMgNDEyLjAzNSAxNzYuMDI5IDQxMS4wMzdDMTc1LjI5NCA0MTAuMDM5IDE3NC4yMTYgNDA5LjM0OSAxNzMuMDAxIDQwOS4xMDFWNDA5LjEwMVpNMTcyLjAwMSA0MTdDMTcxLjQwOCA0MTcgMTcwLjgyOCA0MTYuODI0IDE3MC4zMzUgNDE2LjQ5NEMxNjkuODQxIDQxNi4xNjUgMTY5LjQ1NyA0MTUuNjk2IDE2OS4yMyA0MTUuMTQ4QzE2OS4wMDMgNDE0LjYgMTY4Ljk0MyA0MTMuOTk3IDE2OS4wNTkgNDEzLjQxNUMxNjkuMTc1IDQxMi44MzMgMTY5LjQ2MSA0MTIuMjk4IDE2OS44OCA0MTEuODc5QzE3MC4zIDQxMS40NTkgMTcwLjgzNCA0MTEuMTczIDE3MS40MTYgNDExLjA1OEMxNzEuOTk4IDQxMC45NDIgMTcyLjYwMSA0MTEuMDAxIDE3My4xNSA0MTEuMjI4QzE3My42OTggNDExLjQ1NSAxNzQuMTY2IDQxMS44NCAxNzQuNDk2IDQxMi4zMzNDMTc0LjgyNiA0MTIuODI3IDE3NS4wMDEgNDEzLjQwNyAxNzUuMDAxIDQxNEMxNzUuMDAxIDQxNC43OTUgMTc0LjY4NCA0MTUuNTU4IDE3NC4xMjIgNDE2LjEyQzE3My41NTkgNDE2LjY4MyAxNzIuNzk3IDQxNi45OTkgMTcyLjAwMSA0MTdWNDE3WlwiXHJcbiAgICAgICAgICAgICAgICBmaWxsPVwiIzBBMTIzMFwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgZD1cIk0xNzAuNDM1IDE2NC41NjlDMTY5LjI5IDE2NC41NjkgMTY4LjE5MyAxNjQuMTE1IDE2Ny4zODQgMTYzLjMwNkMxNjYuNTc1IDE2Mi40OTcgMTY2LjEyMSAxNjEuMzk5IDE2Ni4xMjEgMTYwLjI1NVYxNDcuMzE0QzE2Ni4xMjIgMTQ2LjE3MSAxNjYuNTc4IDE0NS4wNzUgMTY3LjM4NyAxNDQuMjY4QzE2OC4xOTUgMTQzLjQ2IDE2OS4yOTIgMTQzLjAwNyAxNzAuNDM1IDE0My4wMDdDMTcxLjU3OCAxNDMuMDA3IDE3Mi42NzQgMTQzLjQ2IDE3My40ODMgMTQ0LjI2OEMxNzQuMjkxIDE0NS4wNzUgMTc0Ljc0NyAxNDYuMTcxIDE3NC43NDggMTQ3LjMxNFYxNjAuMjU1QzE3NC43NDggMTYwLjgyMiAxNzQuNjM3IDE2MS4zODMgMTc0LjQyIDE2MS45MDZDMTc0LjIwMyAxNjIuNDMgMTczLjg4NSAxNjIuOTA1IDE3My40ODUgMTYzLjMwNkMxNzMuMDg0IDE2My43MDYgMTcyLjYwOSAxNjQuMDI0IDE3Mi4wODUgMTY0LjI0MUMxNzEuNTYyIDE2NC40NTggMTcxLjAwMSAxNjQuNTY5IDE3MC40MzUgMTY0LjU2OVYxNjQuNTY5WlwiXHJcbiAgICAgICAgICAgICAgICBmaWxsPVwiIzZDNjNGRlwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgZD1cIk0xNzAuNDM1IDI2My43ODdDMTY5Ljg2OCAyNjMuNzg3IDE2OS4zMDcgMjYzLjY3NiAxNjguNzg0IDI2My40NTlDMTY4LjI2IDI2My4yNDIgMTY3Ljc4NSAyNjIuOTI1IDE2Ny4zODQgMjYyLjUyNEMxNjYuOTg0IDI2Mi4xMjMgMTY2LjY2NiAyNjEuNjQ4IDE2Ni40NDkgMjYxLjEyNEMxNjYuMjMyIDI2MC42MDEgMTY2LjEyMSAyNjAuMDQgMTY2LjEyMSAyNTkuNDc0VjI0Ni41MzJDMTY2LjEyIDI0NS45NjUgMTY2LjIzMSAyNDUuNDAzIDE2Ni40NDcgMjQ0Ljg3OUMxNjYuNjY0IDI0NC4zNTUgMTY2Ljk4MSAyNDMuODc5IDE2Ny4zODIgMjQzLjQ3N0MxNjcuNzgzIDI0My4wNzYgMTY4LjI1OCAyNDIuNzU4IDE2OC43ODIgMjQyLjU0MUMxNjkuMzA2IDI0Mi4zMjMgMTY5Ljg2NyAyNDIuMjEyIDE3MC40MzUgMjQyLjIxMkMxNzEuMDAyIDI0Mi4yMTIgMTcxLjU2MyAyNDIuMzIzIDE3Mi4wODcgMjQyLjU0MUMxNzIuNjExIDI0Mi43NTggMTczLjA4NyAyNDMuMDc2IDE3My40ODcgMjQzLjQ3N0MxNzMuODg4IDI0My44NzkgMTc0LjIwNiAyNDQuMzU1IDE3NC40MjIgMjQ0Ljg3OUMxNzQuNjM4IDI0NS40MDMgMTc0Ljc0OSAyNDUuOTY1IDE3NC43NDggMjQ2LjUzMlYyNTkuNDc0QzE3NC43NDggMjYwLjA0IDE3NC42MzcgMjYwLjYwMSAxNzQuNDIgMjYxLjEyNEMxNzQuMjAzIDI2MS42NDggMTczLjg4NiAyNjIuMTIzIDE3My40ODUgMjYyLjUyNEMxNzMuMDg0IDI2Mi45MjUgMTcyLjYwOSAyNjMuMjQyIDE3Mi4wODUgMjYzLjQ1OUMxNzEuNTYyIDI2My42NzYgMTcxLjAwMSAyNjMuNzg3IDE3MC40MzUgMjYzLjc4N1YyNjMuNzg3WlwiXHJcbiAgICAgICAgICAgICAgICBmaWxsPVwiIzZDNjNGRlwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgZD1cIk0yMDAuOTM5IDE3Ny4yMDNDMjAwLjA4NSAxNzcuMjAzIDE5OS4yNTEgMTc2Ljk1IDE5OC41NDIgMTc2LjQ3NkMxOTcuODMzIDE3Ni4wMDIgMTk3LjI4IDE3NS4zMjggMTk2Ljk1MyAxNzQuNTRDMTk2LjYyNyAxNzMuNzUyIDE5Ni41NDEgMTcyLjg4NSAxOTYuNzA4IDE3Mi4wNDhDMTk2Ljg3NCAxNzEuMjExIDE5Ny4yODUgMTcwLjQ0MiAxOTcuODg4IDE2OS44MzlMMjA3LjAzOSAxNjAuNjg4QzIwNy44NDggMTU5Ljg4IDIwOC45NDUgMTU5LjQyNiAyMTAuMDg5IDE1OS40MjdDMjExLjIzMyAxNTkuNDI3IDIxMi4zMjkgMTU5Ljg4MiAyMTMuMTM4IDE2MC42OUMyMTMuOTQ3IDE2MS40OTkgMjE0LjQwMSAxNjIuNTk2IDIxNC40MDIgMTYzLjczOUMyMTQuNDAyIDE2NC44ODMgMjEzLjk0OCAxNjUuOTggMjEzLjE0IDE2Ni43ODlMMjAzLjk4OSAxNzUuOTRDMjAzLjU4OSAxNzYuMzQxIDIwMy4xMTMgMTc2LjY1OSAyMDIuNTkgMTc2Ljg3NkMyMDIuMDY2IDE3Ny4wOTMgMjAxLjUwNSAxNzcuMjA0IDIwMC45MzkgMTc3LjIwM1YxNzcuMjAzWlwiXHJcbiAgICAgICAgICAgICAgICBmaWxsPVwiIzZDNjNGRlwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgZD1cIk0xMzAuNzggMjQ3LjM2MkMxMjkuOTI2IDI0Ny4zNjIgMTI5LjA5MiAyNDcuMTA5IDEyOC4zODMgMjQ2LjYzNUMxMjcuNjc0IDI0Ni4xNjEgMTI3LjEyMSAyNDUuNDg4IDEyNi43OTQgMjQ0LjY5OUMxMjYuNDY4IDI0My45MTEgMTI2LjM4MiAyNDMuMDQ0IDEyNi41NDkgMjQyLjIwN0MxMjYuNzE1IDI0MS4zNyAxMjcuMTI2IDI0MC42MDIgMTI3LjcyOSAyMzkuOTk4TDEzNi44OCAyMzAuODQ4QzEzNy42ODkgMjMwLjAzOSAxMzguNzg2IDIyOS41ODQgMTM5LjkzIDIyOS41ODRDMTQxLjA3NCAyMjkuNTg0IDE0Mi4xNzIgMjMwLjAzOCAxNDIuOTgxIDIzMC44NDdDMTQzLjc5IDIzMS42NTYgMTQ0LjI0NCAyMzIuNzU0IDE0NC4yNDQgMjMzLjg5OEMxNDQuMjQ0IDIzNS4wNDIgMTQzLjc5IDIzNi4xMzkgMTQyLjk4MSAyMzYuOTQ4TDEzMy44MyAyNDYuMDk5QzEzMy40MyAyNDYuNSAxMzIuOTU0IDI0Ni44MTggMTMyLjQzMSAyNDcuMDM1QzEzMS45MDcgMjQ3LjI1MiAxMzEuMzQ2IDI0Ny4zNjMgMTMwLjc4IDI0Ny4zNjJWMjQ3LjM2MlpcIlxyXG4gICAgICAgICAgICAgICAgZmlsbD1cIiM2QzYzRkZcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIGQ9XCJNMjI2LjUxNCAyMDcuNzA4SDIxMy41NzNDMjEyLjQzIDIwNy43MDYgMjExLjMzNCAyMDcuMjUxIDIxMC41MjcgMjA2LjQ0MkMyMDkuNzE5IDIwNS42MzMgMjA5LjI2NiAyMDQuNTM3IDIwOS4yNjYgMjAzLjM5NEMyMDkuMjY2IDIwMi4yNTEgMjA5LjcxOSAyMDEuMTU0IDIxMC41MjcgMjAwLjM0NkMyMTEuMzM0IDE5OS41MzcgMjEyLjQzIDE5OS4wODIgMjEzLjU3MyAxOTkuMDhIMjI2LjUxNEMyMjcuMDgxIDE5OS4wNzkgMjI3LjY0MyAxOTkuMTkgMjI4LjE2NyAxOTkuNDA2QzIyOC42OTEgMTk5LjYyMyAyMjkuMTY4IDE5OS45NCAyMjkuNTY5IDIwMC4zNDFDMjI5Ljk3IDIwMC43NDIgMjMwLjI4OSAyMDEuMjE4IDIzMC41MDYgMjAxLjc0MUMyMzAuNzIzIDIwMi4yNjUgMjMwLjgzNSAyMDIuODI3IDIzMC44MzUgMjAzLjM5NEMyMzAuODM1IDIwMy45NjEgMjMwLjcyMyAyMDQuNTIyIDIzMC41MDYgMjA1LjA0NkMyMzAuMjg5IDIwNS41NyAyMjkuOTcgMjA2LjA0NiAyMjkuNTY5IDIwNi40NDZDMjI5LjE2OCAyMDYuODQ3IDIyOC42OTEgMjA3LjE2NSAyMjguMTY3IDIwNy4zODFDMjI3LjY0MyAyMDcuNTk3IDIyNy4wODEgMjA3LjcwOCAyMjYuNTE0IDIwNy43MDhWMjA3LjcwOFpcIlxyXG4gICAgICAgICAgICAgICAgZmlsbD1cIiM2QzYzRkZcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIGQ9XCJNMTI3LjI5NiAyMDcuNzA4SDExNC4zNTVDMTEzLjc4OCAyMDcuNzA4IDExMy4yMjYgMjA3LjU5NyAxMTIuNzAyIDIwNy4zODFDMTEyLjE3OCAyMDcuMTY1IDExMS43MDEgMjA2Ljg0NyAxMTEuMyAyMDYuNDQ2QzExMC44OTkgMjA2LjA0NiAxMTAuNTgxIDIwNS41NyAxMTAuMzYzIDIwNS4wNDZDMTEwLjE0NiAyMDQuNTIyIDExMC4wMzQgMjAzLjk2MSAxMTAuMDM0IDIwMy4zOTRDMTEwLjAzNCAyMDIuODI3IDExMC4xNDYgMjAyLjI2NSAxMTAuMzYzIDIwMS43NDFDMTEwLjU4MSAyMDEuMjE4IDExMC44OTkgMjAwLjc0MiAxMTEuMyAyMDAuMzQxQzExMS43MDEgMTk5Ljk0IDExMi4xNzggMTk5LjYyMyAxMTIuNzAyIDE5OS40MDZDMTEzLjIyNiAxOTkuMTkgMTEzLjc4OCAxOTkuMDc5IDExNC4zNTUgMTk5LjA4SDEyNy4yOTZDMTI4LjQzOSAxOTkuMDgyIDEyOS41MzUgMTk5LjUzNyAxMzAuMzQyIDIwMC4zNDZDMTMxLjE1IDIwMS4xNTQgMTMxLjYwNCAyMDIuMjUxIDEzMS42MDQgMjAzLjM5NEMxMzEuNjA0IDIwNC41MzcgMTMxLjE1IDIwNS42MzMgMTMwLjM0MiAyMDYuNDQyQzEyOS41MzUgMjA3LjI1MSAxMjguNDM5IDIwNy43MDYgMTI3LjI5NiAyMDcuNzA4SDEyNy4yOTZaXCJcclxuICAgICAgICAgICAgICAgIGZpbGw9XCIjNkM2M0ZGXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICBkPVwiTTIxMC4wOSAyNDcuMzYyQzIwOS41MjMgMjQ3LjM2MyAyMDguOTYyIDI0Ny4yNTIgMjA4LjQzOCAyNDcuMDM1QzIwNy45MTUgMjQ2LjgxOCAyMDcuNDM5IDI0Ni41IDIwNy4wMzkgMjQ2LjA5OUwxOTcuODg4IDIzNi45NDhDMTk3LjQ4NyAyMzYuNTQ4IDE5Ny4xNjkgMjM2LjA3MiAxOTYuOTUxIDIzNS41NDlDMTk2LjczNCAyMzUuMDI1IDE5Ni42MjIgMjM0LjQ2NCAxOTYuNjIyIDIzMy44OTdDMTk2LjYyMSAyMzMuMzMgMTk2LjczMyAyMzIuNzY5IDE5Ni45NDkgMjMyLjI0NUMxOTcuMTY2IDIzMS43MjEgMTk3LjQ4NCAyMzEuMjQ1IDE5Ny44ODUgMjMwLjg0NEMxOTguMjg2IDIzMC40NDMgMTk4Ljc2MiAyMzAuMTI1IDE5OS4yODYgMjI5LjkwOUMxOTkuODA5IDIyOS42OTIgMjAwLjM3MSAyMjkuNTggMjAwLjkzOCAyMjkuNTgxQzIwMS41MDUgMjI5LjU4MSAyMDIuMDY2IDIyOS42OTMgMjAyLjU4OSAyMjkuOTFDMjAzLjExMyAyMzAuMTI4IDIwMy41ODkgMjMwLjQ0NiAyMDMuOTg5IDIzMC44NDhMMjEzLjE0IDIzOS45OThDMjEzLjc0MyAyNDAuNjAyIDIxNC4xNTQgMjQxLjM3IDIxNC4zMiAyNDIuMjA3QzIxNC40ODcgMjQzLjA0NCAyMTQuNDAxIDI0My45MTEgMjE0LjA3NSAyNDQuN0MyMTMuNzQ4IDI0NS40ODggMjEzLjE5NSAyNDYuMTYxIDIxMi40ODYgMjQ2LjYzNUMyMTEuNzc3IDI0Ny4xMSAyMTAuOTQzIDI0Ny4zNjMgMjEwLjA5IDI0Ny4zNjNWMjQ3LjM2MlpcIlxyXG4gICAgICAgICAgICAgICAgZmlsbD1cIiM2QzYzRkZcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIGQ9XCJNMTM5LjkzIDE3Ny4yMDNDMTM5LjM2NCAxNzcuMjA0IDEzOC44MDMgMTc3LjA5MyAxMzguMjc5IDE3Ni44NzZDMTM3Ljc1NiAxNzYuNjU5IDEzNy4yOCAxNzYuMzQxIDEzNi44OCAxNzUuOTRMMTI3LjcyOSAxNjYuNzg5QzEyNy4zMjkgMTY2LjM4OSAxMjcuMDExIDE2NS45MTMgMTI2Ljc5NCAxNjUuMzlDMTI2LjU3NyAxNjQuODY2IDEyNi40NjYgMTY0LjMwNSAxMjYuNDY2IDE2My43MzlDMTI2LjQ2NiAxNjMuMTcyIDEyNi41NzcgMTYyLjYxMSAxMjYuNzk0IDE2Mi4wODhDMTI3LjAxMSAxNjEuNTY0IDEyNy4zMjkgMTYxLjA4OSAxMjcuNzI5IDE2MC42ODhDMTI4LjEzIDE2MC4yODggMTI4LjYwNSAxNTkuOTcgMTI5LjEyOSAxNTkuNzUzQzEyOS42NTIgMTU5LjUzNiAxMzAuMjEzIDE1OS40MjUgMTMwLjc4IDE1OS40MjVDMTMxLjM0NiAxNTkuNDI1IDEzMS45MDcgMTU5LjUzNiAxMzIuNDMgMTU5Ljc1M0MxMzIuOTU0IDE1OS45NyAxMzMuNDI5IDE2MC4yODggMTMzLjgzIDE2MC42ODhMMTQyLjk4MSAxNjkuODM5QzE0My41ODQgMTcwLjQ0MiAxNDMuOTk1IDE3MS4yMTEgMTQ0LjE2MSAxNzIuMDQ4QzE0NC4zMjggMTcyLjg4NSAxNDQuMjQyIDE3My43NTIgMTQzLjkxNiAxNzQuNTRDMTQzLjU4OSAxNzUuMzI5IDE0My4wMzYgMTc2LjAwMiAxNDIuMzI3IDE3Ni40NzZDMTQxLjYxNyAxNzYuOTUgMTQwLjc4MyAxNzcuMjAzIDEzOS45MyAxNzcuMjAzVjE3Ny4yMDNaXCJcclxuICAgICAgICAgICAgICAgIGZpbGw9XCIjNkM2M0ZGXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICBkPVwiTTE3MC40MzUgMjI5LjI3N0MxNjUuMzE1IDIyOS4yNzcgMTYwLjMxMSAyMjcuNzU5IDE1Ni4wNTUgMjI0LjkxNUMxNTEuNzk4IDIyMi4wNzEgMTQ4LjQ4MSAyMTguMDI4IDE0Ni41MjIgMjEzLjI5OUMxNDQuNTYzIDIwOC41NjkgMTQ0LjA1IDIwMy4zNjUgMTQ1LjA0OSAxOTguMzQ0QzE0Ni4wNDggMTkzLjMyMyAxNDguNTEzIDE4OC43MTEgMTUyLjEzMyAxODUuMDkyQzE1NS43NTIgMTgxLjQ3MiAxNjAuMzY0IDE3OS4wMDcgMTY1LjM4NSAxNzguMDA4QzE3MC40MDYgMTc3LjAwOSAxNzUuNjEgMTc3LjUyMiAxODAuMzQgMTc5LjQ4MUMxODUuMDY5IDE4MS40NCAxODkuMTExIDE4NC43NTcgMTkxLjk1NSAxODkuMDE0QzE5NC44IDE5My4yNyAxOTYuMzE4IDE5OC4yNzUgMTk2LjMxOCAyMDMuMzk0QzE5Ni4zMSAyMTAuMjU2IDE5My41OCAyMTYuODM1IDE4OC43MjggMjIxLjY4N0MxODMuODc2IDIyNi41NCAxNzcuMjk3IDIyOS4yNjkgMTcwLjQzNSAyMjkuMjc3VjIyOS4yNzdaTTE3MC40MzUgMTg2LjEzOEMxNjcuMDIyIDE4Ni4xMzggMTYzLjY4NiAxODcuMTUgMTYwLjg0OCAxODkuMDQ2QzE1OC4wMSAxOTAuOTQyIDE1NS43OTkgMTkzLjYzNyAxNTQuNDkzIDE5Ni43OUMxNTMuMTg3IDE5OS45NDMgMTUyLjg0NSAyMDMuNDEzIDE1My41MTEgMjA2Ljc2QzE1NC4xNzcgMjEwLjEwNyAxNTUuODIgMjEzLjE4MiAxNTguMjMzIDIxNS41OTVDMTYwLjY0NiAyMTguMDA4IDE2My43MjEgMjE5LjY1MiAxNjcuMDY4IDIyMC4zMTdDMTcwLjQxNSAyMjAuOTgzIDE3My44ODUgMjIwLjY0MiAxNzcuMDM4IDIxOS4zMzZDMTgwLjE5MSAyMTguMDMgMTgyLjg4NiAyMTUuODE4IDE4NC43ODIgMjEyLjk4QzE4Ni42NzggMjEwLjE0MyAxODcuNjkgMjA2LjgwNiAxODcuNjkgMjAzLjM5NEMxODcuNjg1IDE5OC44MTkgMTg1Ljg2NSAxOTQuNDMzIDE4Mi42MyAxOTEuMTk4QzE3OS4zOTUgMTg3Ljk2MyAxNzUuMDA5IDE4Ni4xNDQgMTcwLjQzNSAxODYuMTM4VjE4Ni4xMzhaXCJcclxuICAgICAgICAgICAgICAgIGZpbGw9XCIjNkM2M0ZGXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICA8L2c+XHJcbiAgICAgICAgPC9zdmc+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7cm91dGVyLnBhdGhuYW1lLmluY2x1ZGVzKCcvc3RhcnR1cC1pZGVhJykgfHxcclxuICAgICAgcm91dGVyLnBhdGhuYW1lLmluY2x1ZGVzKCcvYnVzaW5lc3MtcGxhbicpIHx8XHJcbiAgICAgIHJvdXRlci5wYXRobmFtZS5pbmNsdWRlcygnL2Nhc2gtZmxvdycpIHx8XHJcbiAgICAgIHJvdXRlci5wYXRobmFtZS5pbmNsdWRlcygnL2NvbXBldGl0b3JzJykgPyAoXHJcbiAgICAgICAgLy8gPGRpdiBjbGFzc05hbWU9XCJoLWZ1bGwgdy1mdWxsIG92ZXJmbG93LWhpZGRlbiBiZy1iYWNrZ3JvdW5kIGRhcms6Ymctc2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgLy8gICB7JyAnfVxyXG4gICAgICAgIC8vICAgPGRpdiBjbGFzc05hbWU9XCJoLXNjcmVlbiB3LTIwIGJnLWJhY2tncm91bmQgZGFyazpiZy1zZWNvbmRhcnkgZml4ZWQgei0wIG92ZXJmbG93LWhpZGRlblwiPjwvZGl2PlxyXG4gICAgICAgIC8vIDwvZGl2PlxyXG4gICAgICAgIDw+PC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLWZ1bGwgdy1mdWxsIG92ZXJmbG93LWhpZGRlbiBiZy1iYWNrZ3JvdW5kIGRhcms6Ymctc2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIHJlZj17bmF2UmVmfVxyXG4gICAgICAgICAgICBvbk1vdXNlRW50ZXI9e21vdXNlRW50ZXJOYXZ9XHJcbiAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17bW91c2VMZWF2ZU5hdn1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC1zY3JlZW4gdy0yMCBiZy1iYWNrZ3JvdW5kIGRhcms6Ymctc2Vjb25kYXJ5IGZpeGVkIHotMCBvdmVyZmxvdy1oaWRkZW5cIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTYgdy01MiBncmlkIGdyaWQtY29scy04MHB4IGl0ZW1zLWNlbnRlciBob3ZlcjpvcGFjaXR5LTEwMFwiPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZGFzaGJvYXJkL3dlbGNvbWVcIj5cclxuICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17YWN0aXZlQ2xhc3NGbjF9XHJcbiAgICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0QWN0aXZlSG92ZXIxKHRydWUpfVxyXG4gICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldEFjdGl2ZUhvdmVyMShmYWxzZSl9XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjQ1XCJcclxuICAgICAgICAgICAgICAgICAgd2lkdGg9XCI0NVwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZpbGwtY3VycmVudCB0ZXh0LXByaW1hcnlkYXJrIGRhcms6dGV4dC1iYWNrZ3JvdW5kIGJsb2NrIG0tYXV0byBvcGFjaXR5LTUwIGhvdmVyOm9wYWNpdHktMTAwIGN1cnNvci1wb2ludGVyICR7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlQ2xhc3MxID8gJ29wYWNpdHktMTAwJyA6ICdvcGFjaXR5LTUwJ1xyXG4gICAgICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTI4IDEyOFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxkZWZzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdHlsZT48L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgICA8L2RlZnM+XHJcbiAgICAgICAgICAgICAgICAgIDx0aXRsZT5TZWUgWW91IFNvb248L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgICA8ZyBpZD1cIlNlZV9Zb3VfU29vblwiIGRhdGEtbmFtZT1cIlNlZSBZb3UgU29vblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbHMtMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkPVwiTTg0Ljg3LDc3LjI3bC03LTQxLjE4YTYuNiw2LjYsMCwwLDAtMTMuMSwxLjU4bDEuODMsMjQuNkw1Ni45MywzNmE2LjczLDYuNzMsMCwwLDAtMTIuNzgsNC4xN0w1MS44Miw2Nyw0MC41Nyw0OGE2LjQ1LDYuNDUsMCwwLDAtMTEuNDEsNmw4LjMzLDE4LjI0LTQuNTctNi40NWE2LjQ4LDYuNDgsMCwwLDAtMTAuOSw3bDIxLjI1LDM2LjcxYy4zMi41OSw4LDE0LjU0LDIzLjE0LDE0LjU0LDIwLjA3LDAsMjkuNzQtMTUuMTcsMzIuMTEtMjkuMzYsMi4yMi0xMy4zNCw0LjU5LTIyLDcuNjgtMjguMjJDMTExLjc0LDU1LjM2LDk2LjM3LDQ0LjY3LDg0Ljg3LDc3LjI3Wm0xOS41LTExLjc0Yy0zLjE4LDYuMzYtNS42MSwxNS4yNC03Ljg3LDI4Ljc5Qzk0LjI4LDEwNy42OSw4NS4yLDEyMiw2Ni40MSwxMjJjLTEzLjg2LDAtMjEuMjctMTMuMzQtMjEuMzYtMTMuNUwyMy43OSw3MS43NUE0LjQ0LDQuNDQsMCwwLDEsMzEuMjYsNjdMNDIuMSw4Mi4yN2ExLDEsMCwwLDAsMS43Ni0xTDMxLDUzLjE0YTQuNDEsNC40MSwwLDAsMSw3LjgtNC4wOEw1NC4xLDc0Ljg0QTEsMSwwLDAsMCw1Niw3NEw0Ni4xMiwzOS42QTQuNjgsNC42OCwwLDAsMSw1NSwzNi42OUw2Ny4yMiw2OS43OGExLDEsMCwwLDAsMi0uNDNMNjYuODQsMzcuNTJhNC41Niw0LjU2LDAsMCwxLDktMS4wOUw4My41NSw4MS43YTEsMSwwLDAsMCwyLC4xMWMwLS4xNyw1LjE3LTE3Ljg0LDEyLjU0LTIyLjc1QzEwNC45Myw1NC40OSwxMDYuNDgsNjEuMzIsMTA0LjM3LDY1LjUzWlwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBjbGFzc05hbWU9XCJjbHMtMVwiIGQ9XCJNMTI3LDY3aC04YTEsMSwwLDAsMCwwLDJoOEExLDEsMCwwLDAsMTI3LDY3WlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3NOYW1lPVwiY2xzLTFcIiBkPVwiTTksNjdIMWExLDEsMCwwLDAsMCwySDlBMSwxLDAsMCwwLDksNjdaXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBjbGFzc05hbWU9XCJjbHMtMVwiIGQ9XCJNNjUsMTNWNWExLDEsMCwwLDAtMiwwdjhBMSwxLDAsMCwwLDY1LDEzWlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3NOYW1lPVwiY2xzLTFcIiBkPVwiTTExMS42Myw0MS41MmMuMzksMC0uMDkuMjEsNy40NC00LjE0YTEsMSwwLDAsMC0xLTEuNzZsLTYuOTMsNEExLDEsMCwwLDAsMTExLjYzLDQxLjUyWlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3NOYW1lPVwiY2xzLTFcIiBkPVwiTTE1Ljg2LDk0LjYybC02LjkzLDRhMSwxLDAsMCwwLDEsMS43Nmw2LjkzLTRBMSwxLDAsMCwwLDE1Ljg2LDk0LjYyWlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3NOYW1lPVwiY2xzLTFcIiBkPVwiTTE2Ljg4LDM5LjYybC02LjkzLTRhMSwxLDAsMCwwLTEsMS43Nmw2LjkzLDRBMSwxLDAsMCwwLDE2Ljg4LDM5LjYyWlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3NOYW1lPVwiY2xzLTFcIiBkPVwiTTExOS4wNyw5OC42MmwtNi45My00YTEsMSwwLDAsMC0xLDEuNzZsNi45Myw0QTEsMSwwLDAsMCwxMTkuMDcsOTguNjJaXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBjbGFzc05hbWU9XCJjbHMtMVwiIGQ9XCJNMzUuNjIsMjAuODhhMSwxLDAsMCwwLDEuNzYtMWwtNC02LjkzYTEsMSwwLDAsMC0xLjc2LDFaXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBjbGFzc05hbWU9XCJjbHMtMVwiIGQ9XCJNOTIuMzgsMjAuODhsNC02LjkzYTEsMSwwLDAsMC0xLjc2LTFsLTQsNi45M0ExLDEsMCwwLDAsOTIuMzgsMjAuODhaXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZGFzaGJvYXJkL3dlbGNvbWVcIj5cclxuICAgICAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2FjdGl2ZUNsYXNzRm4xfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B0ZXh0LXByaW1hcnlkYXJrIGRhcms6dGV4dC1iYWNrZ3JvdW5kIG1sLTEgY3Vyc29yLXBvaW50ZXIgb3BhY2l0eS01MCAke1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZUhvdmVyMSA/ICdvcGFjaXR5LTEwMCcgOiAnb3BhY2l0eS01MCdcclxuICAgICAgICAgICAgICAgICAgfSAke2FjdGl2ZUNsYXNzMSA/ICdvcGFjaXR5LTEwMCcgOiAnb3BhY2l0eS01MCd9YH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgV2VsY29tZVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNiB3LTUyIGdyaWQgZ3JpZC1jb2xzLTgwcHggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9kYXNoYm9hcmQvc3RhcnR1cFwiPlxyXG4gICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXthY3RpdmVDbGFzc0ZuMn1cclxuICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRBY3RpdmVIb3ZlcjIodHJ1ZSl9XHJcbiAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0QWN0aXZlSG92ZXIyKGZhbHNlKX1cclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiNDVcIlxyXG4gICAgICAgICAgICAgICAgICB3aWR0aD1cIjQ1XCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmlsbC1jdXJyZW50IHRleHQtcHJpbWFyeWRhcmsgZGFyazp0ZXh0LWJhY2tncm91bmQgYmxvY2sgbS1hdXRvIG9wYWNpdHktNTAgaG92ZXI6b3BhY2l0eS0xMDAgY3Vyc29yLXBvaW50ZXIgJHtcclxuICAgICAgICAgICAgICAgICAgICBhY3RpdmVDbGFzczIgPyAnb3BhY2l0eS0xMDAnIDogJ29wYWNpdHktNTAnXHJcbiAgICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxMjggMTI4XCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGRlZnM+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN0eWxlPjwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGVmcz5cclxuICAgICAgICAgICAgICAgICAgPHRpdGxlPkxhbmRpbmcgU3VjY2VzczwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgIDxnIGlkPVwiTGFuZGluZ19TdWNjZXNzXCIgZGF0YS1uYW1lPVwiTGFuZGluZyBTdWNjZXNzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNscy0xXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTA5LjMsOTAuMUE0Niw0NiwwLDAsMCw2NSwzNlYyMC4wOGMxLjc4LS42Miw3LjIxLTIuMTQsMTIuNTcuMjNhMTkuMzMsMTkuMzMsMCwwLDAsMTQuODIsMGMuODctLjM4LjYxLjMxLjYxLTE3LjkzYTEsMSwwLDAsMC0xLjQzLS45M2MtLjA3LDAtNi42OSwyLjg3LTEzLjE4LDBBMTkuNDEsMTkuNDEsMCwwLDAsNjUsLjkzLDEsMSwwLDAsMCw2MywxVjM2YTQ1Ljg2LDQ1Ljg2LDAsMCwwLTI4LjY2LDEwLjhDMTYuMTgsNDAuNDgsNCw0MCwuNzksNDUuNTEtMi4yOSw1MC44NiwzLjk0LDU5LjMsMTAsNjUuNjhBMTEsMTEsMCwwLDAsMTgsODNjLjgxLDM4LjQxLDQ2LjA4LDU5LjIsNzUuNjYsMzQuMjEsOC41MywzLDI5LDkuMTUsMzMuNTUsMS4zMUMxMzAuMzksMTEzLDEyMy44NiwxMDIuNjUsMTA5LjMsOTAuMVpNNzcuNTksMy4zMUExOS4zOSwxOS4zOSwwLDAsMCw5MSwzLjgzVjE4LjY4Yy0xLjc5LjYyLTcuMjIsMi4xMy0xMi41Ny0uMjNBMTkuMTksMTkuMTksMCwwLDAsNjUsMTcuOTNWMy4wOEM2Ni44MSwyLjQ2LDcyLjI0LDEsNzcuNTksMy4zMVpNNjUsNDV2LTdjMzkuNjkuOTEsNTgsNTAuMjcsMjguMjEsNzYuODFDNzEuMzIsMTA3LDQ2LDkyLjY2LDI3Ljc3LDc4LjY0YTExLDExLDAsMCwwLTMuMi0xNi4xM0E0My44OCw0My44OCwwLDAsMSw2MywzOC4wNlY0NUExLDEsMCwwLDAsNjUsNDVaTTMyLjU1LDQ4LjM2YTQ2LjIxLDQ2LjIxLDAsMCwwLTkuODMsMTMuMjgsMTAuOTMsMTAuOTMsMCwwLDAtMTEuNCwyLjQ3Qy04LjM5LDQzLjIzLDUuMjMsMzkuMDgsMzIuNTUsNDguMzZaTTEwLDcyYTksOSwwLDEsMSw5LDlBOSw5LDAsMCwxLDEwLDcyWm0xMCwxMWExMSwxMSwwLDAsMCw2LjM0LTIuODJjMTguNDUsMTQuMjEsNDMuNDUsMjguMzUsNjUuMDUsMzYuMjJDNjMsMTM5LjE2LDIwLjgzLDExOS4xLDIwLjA1LDgzWm0xMDUuNCwzNC41Yy0yLjUxLDQuMzUtMTQsMy42Mi0zMC0xLjg1YTQ1LjYxLDQ1LjYxLDAsMCwwLDEzLjQyLTIzLjIxQzEyMS41OSwxMDMuNTgsMTI4LDExMy4xMiwxMjUuNDUsMTE3LjQ3WlwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZGFzaGJvYXJkL3N0YXJ0dXBcIj5cclxuICAgICAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2FjdGl2ZUNsYXNzRm4yfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B0ZXh0LXByaW1hcnlkYXJrIGRhcms6dGV4dC1iYWNrZ3JvdW5kIG1sLTEgY3Vyc29yLXBvaW50ZXIgb3BhY2l0eS01MCAke1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZUhvdmVyMiA/ICdvcGFjaXR5LTEwMCcgOiAnb3BhY2l0eS01MCdcclxuICAgICAgICAgICAgICAgICAgfSAke2FjdGl2ZUNsYXNzMiA/ICdvcGFjaXR5LTEwMCcgOiAnb3BhY2l0eS01MCd9YH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgU3RhcnR1cCBpZGVhXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC02IHctNTIgZ3JpZCBncmlkLWNvbHMtODBweCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXthY3RpdmVDbGFzc0ZuM31cclxuICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0QWN0aXZlSG92ZXIzKHRydWUpfVxyXG4gICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRBY3RpdmVIb3ZlcjMoZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiNDVcIlxyXG4gICAgICAgICAgICAgICAgd2lkdGg9XCI0NVwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmaWxsLWN1cnJlbnQgdGV4dC1wcmltYXJ5ZGFyayBkYXJrOnRleHQtYmFja2dyb3VuZCBibG9jayBtLWF1dG8gb3BhY2l0eS01MCBob3ZlcjpvcGFjaXR5LTEwMCBjdXJzb3ItcG9pbnRlciAke1xyXG4gICAgICAgICAgICAgICAgICBhY3RpdmVDbGFzczMgPyAnb3BhY2l0eS0xMDAnIDogJ29wYWNpdHktNTAnXHJcbiAgICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxMjggMTI4XCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGVmcz5cclxuICAgICAgICAgICAgICAgICAgPHN0eWxlPjwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8L2RlZnM+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+U2VhcmNoaW5nPC90aXRsZT5cclxuICAgICAgICAgICAgICAgIDxnIGlkPVwiU2VhcmNoaW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xzLTFcIlxyXG4gICAgICAgICAgICAgICAgICAgIGQ9XCJNNzkuNTcsMzYuNDNhMjIsMjIsMCwxLDAsMCwzMS4xNEEyMiwyMiwwLDAsMCw3OS41NywzNi40M1ptLTEuNDQsMjkuN2EyMCwyMCwwLDEsMSwwLTI4LjI2QTIwLDIwLDAsMCwxLDc4LjEzLDY2LjEzWlwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xzLTFcIlxyXG4gICAgICAgICAgICAgICAgICAgIGQ9XCJNMTE3LDBIMzFBMTEsMTEsMCwwLDAsMjAsMTF2OTdIMWExLDEsMCwwLDAtMSwxdjhhMTEsMTEsMCwwLDAsMTEsMTFIOTdhMTEsMTEsMCwwLDAsMTEtMTFWMTA0YTMuNDIsMy40MiwwLDAsMCwyLjQxLTFjNC43MS00LjcxLDUuNTktNS4xMyw1LjU5LTdzLS42Ni0yLjA4LTgtOS40MlYyMGgxOWExLDEsMCwwLDAsMS0xVjExQTExLDExLDAsMCwwLDExNywwWk05MC42MiwxMjZIMTFhOSw5LDAsMCwxLTktOXYtN0g4NkM4NiwxMTYuMjksODUsMTIyLDkwLjYyLDEyNlpNMTE0LDk2YzAsLjc5LDAsLjYxLTUsNS41N2ExLjQzLDEuNDMsMCwwLDEtMiwwTDg2LjQzLDgxYTEuMzgsMS4zOCwwLDAsMSwwLTJjNS4wNy01LjA3LDQuOC01LDUuNTctNXMtLjE3LS43NSwxNC4yOCwxMy43QzExMy44Nyw5NS4zMSwxMTQsOTUuMTEsMTE0LDk2Wk04Mi4zNyw3MC4zN2EyNiwyNiwwLDEsMSwwLTM2Ljc0QTI2LDI2LDAsMCwxLDgyLjM3LDcwLjM3Wm0yLjc5LDAsMy41MiwzLjUyLTIuOCwyLjgtMy41Mi0zLjUyQTI2LjQ0LDI2LjQ0LDAsMCwwLDg1LjE2LDcwLjM2Wk05NC40Myw3M2EzLjUzLDMuNTMsMCwwLDAtNC4yMy0uNDdsLTMuNzUtMy43NUMxMDAuMjcsNTAuMjgsODcsMjQsNjQsMjRBMjgsMjgsMCwwLDAsMzYsNTJjMCwyMy4zNywyNi43MSwzNiw0NC43OSwyMi40NWwzLjczLDMuNzRBMy40MSwzLjQxLDAsMCwwLDg1LDgyLjQzYzIyLjIyLDIyLjIzLDIwLjU3LDIwLjYxLDIxLDIwLjkyVjExN2E5LDksMCwwLDEtMTgsMHYtOGExLDEsMCwwLDAtMS0xSDIyVjExYTksOSwwLDAsMSw5LTljODUuNiwwLDc5Ljc0LS4wOCw3OS40MS4xN2ExMSwxMSwwLDAsMC00LjE0LDYuMzJjLS40MSwxLjc3LS4yOS00LjE5LS4yOSw3NlpNMTI2LDE4SDEwOFYxMWE5LDksMCwwLDEsMTgsMFpcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXthY3RpdmVDbGFzc0ZuM31cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHRleHQtcHJpbWFyeWRhcmsgZGFyazp0ZXh0LWJhY2tncm91bmQgbWwtMSBjdXJzb3ItcG9pbnRlciBvcGFjaXR5LTUwICR7XHJcbiAgICAgICAgICAgICAgICAgIGFjdGl2ZUhvdmVyMyA/ICdvcGFjaXR5LTEwMCcgOiAnb3BhY2l0eS01MCdcclxuICAgICAgICAgICAgICAgIH0gJHthY3RpdmVDbGFzczMgPyAnb3BhY2l0eS0xMDAnIDogJ29wYWNpdHktNTAnfWB9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgQnVzaW5lc3MgcGxhblxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNiB3LTUyIGdyaWQgZ3JpZC1jb2xzLTgwcHggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgey8qIDxMaW5rIGhyZWY9Jy9kYXNoYm9hcmQvYWNjb3VudCc+ICovfVxyXG4gICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2FjdGl2ZUNsYXNzRm40fVxyXG4gICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRBY3RpdmVIb3ZlcjQodHJ1ZSl9XHJcbiAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldEFjdGl2ZUhvdmVyNChmYWxzZSl9XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCI0NVwiXHJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjQ1XCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZpbGwtY3VycmVudCB0ZXh0LXByaW1hcnlkYXJrIGRhcms6dGV4dC1iYWNrZ3JvdW5kIGJsb2NrIG0tYXV0byBvcGFjaXR5LTUwIGhvdmVyOm9wYWNpdHktMTAwIGN1cnNvci1wb2ludGVyICR7XHJcbiAgICAgICAgICAgICAgICAgIGFjdGl2ZUNsYXNzNCA/ICdvcGFjaXR5LTEwMCcgOiAnb3BhY2l0eS01MCdcclxuICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgICAgaWQ9XCJEYXRhX1VzZXJcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1uYW1lPVwiRGF0YSBVc2VyXCJcclxuICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxMjggMTI4XCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGVmcz5cclxuICAgICAgICAgICAgICAgICAgPHN0eWxlPjwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8L2RlZnM+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+RGF0YSBVc2VyPC90aXRsZT5cclxuICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNscy0xXCJcclxuICAgICAgICAgICAgICAgICAgZD1cIk0xMDksMEgyM2E5LDksMCwwLDAtOSw5YzAsMTE4LDAsMTEwLDAsMTEwLjY0QTkuMjIsOS4yMiwwLDAsMCwyMy4zMSwxMjhIMTA5YTUsNSwwLDAsMCw1LTVWNUE1LDUsMCwwLDAsMTA5LDBabTMsNVYxMDdhMywzLDAsMCwxLTMsM0gyNlYyaDgzQTMsMywwLDAsMSwxMTIsNVpNMTYsOWE3LDcsMCwwLDEsNy03aDFWMTEwSDIzYTksOSwwLDAsMC02Ljk0LDMuMjZDMTYsMTEzLjM0LDE2LDExOC4yOCwxNiw5Wm05NiwxMTRhMywzLDAsMCwxLTMsM0gyMy4zMWMtNi4xMywwLTkuNTYtNi45NC01LjY4LTExLjQzQTYuOTEsNi45MSwwLDAsMSwyMywxMTJjOTAuOTEsMCw4Ny4wNi40NCw4OS0xWlwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xzLTFcIlxyXG4gICAgICAgICAgICAgICAgICBkPVwiTTU2LjE1LDc1LjgxQTMzLDMzLDAsMSwwLDM1LDQ1LDMzLjA1LDMzLjA1LDAsMCwwLDU2LjE1LDc1LjgxWm0tNy41My02LjY4YzUuODktMjIuODIsMzIuODYtMjIuODMsMzguNzYsMEEzMC44OCwzMC44OCwwLDAsMSw0OC42Miw2OS4xM1pNNjgsMTRjMjguMDcsMCw0MS42MSwzNC41MSwyMS4wOSw1My42NUM4Ni41Niw1OSw4MC44Miw1Mi44Myw3My41Nyw1MC43NWExMywxMywwLDEsMC0xMS4xNCwwYy03LjI1LDIuMDgtMTMsOC4yNC0xNS41MiwxNi45MkMyNi40NSw0OC42OSwzOS44LDE0LDY4LDE0Wm0wLDM2QTExLDExLDAsMSwxLDc5LDM5LDExLDExLDAsMCwxLDY4LDUwWlwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPHBhdGggY2xhc3NOYW1lPVwiY2xzLTFcIiBkPVwiTTk2LjUsODdoLTU2YTEsMSwwLDAsMCwwLDJoNTZBMSwxLDAsMCwwLDk2LjUsODdaXCIgLz5cclxuICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzTmFtZT1cImNscy0xXCIgZD1cIk05Ni41LDk5aC01NmExLDEsMCwwLDAsMCwyaDU2QTEsMSwwLDAsMCw5Ni41LDk5WlwiIC8+XHJcbiAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgey8qIDwvTGluaz4gKi99XHJcbiAgICAgICAgICAgICAgey8qIDxMaW5rIGhyZWY9Jy9kYXNoYm9hcmQvYWNjb3VudCc+ICovfVxyXG4gICAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXthY3RpdmVDbGFzc0ZuNH1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHRleHQtcHJpbWFyeWRhcmsgZGFyazp0ZXh0LWJhY2tncm91bmQgbWwtMSBjdXJzb3ItcG9pbnRlciBvcGFjaXR5LTUwICR7XHJcbiAgICAgICAgICAgICAgICAgIGFjdGl2ZUhvdmVyNCA/ICdvcGFjaXR5LTEwMCcgOiAnb3BhY2l0eS01MCdcclxuICAgICAgICAgICAgICAgIH0gJHthY3RpdmVDbGFzczQgPyAnb3BhY2l0eS0xMDAnIDogJ29wYWNpdHktNTAnfWB9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgQWNjb3VudFxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICB7LyogPC9MaW5rPiAqL31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNiB3LTUyIGdyaWQgZ3JpZC1jb2xzLTgwcHggaXRlbXMtY2VudGVyIGFic29sdXRlIGJvdHRvbS00XCI+XHJcbiAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgb25DbGljaz17YWN0aXZlQ2xhc3NGbjV9XHJcbiAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHNldEFjdGl2ZUhvdmVyNSh0cnVlKX1cclxuICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0QWN0aXZlSG92ZXI1KGZhbHNlKX1cclxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjQ1XCJcclxuICAgICAgICAgICAgICAgIHdpZHRoPVwiNDVcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmlsbC1jdXJyZW50IHRleHQtcHJpbWFyeWRhcmsgZGFyazp0ZXh0LWJhY2tncm91bmQgYmxvY2sgbS1hdXRvIG9wYWNpdHktNTAgaG92ZXI6b3BhY2l0eS0xMDAgY3Vyc29yLXBvaW50ZXIgJHtcclxuICAgICAgICAgICAgICAgICAgYWN0aXZlQ2xhc3M1ID8gJ29wYWNpdHktMTAwJyA6ICdvcGFjaXR5LTUwJ1xyXG4gICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTI4IDEyOFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRlZnM+XHJcbiAgICAgICAgICAgICAgICAgIDxzdHlsZT48L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgPC9kZWZzPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPkxvZyBPdXQ8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPGcgaWQ9XCJMb2dfT3V0XCIgZGF0YS1uYW1lPVwiTG9nIE91dFwiPlxyXG4gICAgICAgICAgICAgICAgICA8cGF0aCBjbGFzc05hbWU9XCJjbHMtMVwiIGQ9XCJNNDQsNjF2NmExLDEsMCwwLDAsMiwwVjYxQTEsMSwwLDAsMCw0NCw2MVpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNscy0xXCJcclxuICAgICAgICAgICAgICAgICAgICBkPVwiTTExMywxMTNIODZWNzVoNnY5YTEsMSwwLDAsMCwxLDFjLjY0LDAtLjgzLDEuMjYsMjAuNzItMjAuM2ExLDEsMCwwLDAsMC0xLjQ0bC0yMC0yMEExLDEsMCwwLDAsOTIsNDR2OUg4NlYxNGExLDEsMCwwLDAtMS0xSDU0VjFhMSwxLDAsMCwwLTEuMzUtMWwtMzgsMTNBMSwxLDAsMCwwLDE0LDE0YzAsMTA2LjU4LS4zOCwxMDAuNi42OSwxMDFDNTUuMzQsMTI4Ljg4LDUyLjc0LDEyOCw1MywxMjhhMSwxLDAsMCwwLDEtMVYxMTVoNTlBMSwxLDAsMCwwLDExMywxMTNaTTkzLDU1YTEsMSwwLDAsMCwxLTFWNDYuNDZMMTExLjU2LDY0LDk0LDgxLjU0Vjc0YTEsMSwwLDAsMC0xLTFINTRWNTVaTTU0LDIxSDc3VjUzSDU0Wm0zMC02VjUzSDc5VjIwYTEsMSwwLDAsMC0xLTFINTRWMTVaTTUyLDEyNS41N2wtMzYtMTIuM1YxNC43M0w1MiwyLjQzWk01NCw3NUg3N3YzOEg1NFptMjUsMzhWNzVoNXYzOFpcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXthY3RpdmVDbGFzc0ZuNX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHRleHQtcHJpbWFyeWRhcmsgZGFyazp0ZXh0LWJhY2tncm91bmQgbWwtMSBjdXJzb3ItcG9pbnRlciBvcGFjaXR5LTUwICR7XHJcbiAgICAgICAgICAgICAgICAgIGFjdGl2ZUhvdmVyNSA/ICdvcGFjaXR5LTEwMCcgOiAnb3BhY2l0eS01MCdcclxuICAgICAgICAgICAgICAgIH0gJHthY3RpdmVDbGFzczUgPyAnb3BhY2l0eS0xMDAnIDogJ29wYWNpdHktNTAnfWB9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgTG9nIG91dFxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9Jc0FjdGl2ZUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERlc2t0b3BOYXZiYXI7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBnc2FwLCB7IExpbmVhciwgUG93ZXIxIH0gZnJvbSAnZ3NhcCc7XHJcbi8vIGltcG9ydCBQREZEb2N1bWVudCBmcm9tICcuL3N0YXJ0dXAvUERGRG9jdW1lbnQnO1xyXG4vLyBpbXBvcnQgQ2FzaEZsb3dQREYgZnJvbSAnLi9zdGFydHVwL3Byb2plY3QvYnVzaW5lc3MtYXBwL2Nhc2gtZmxvdy9DYXNoRmxvd1BERic7XHJcbi8vIGltcG9ydCBDb21wZXRpdG9yc1BERiBmcm9tICcuL3N0YXJ0dXAvcHJvamVjdC9idXNpbmVzcy1hcHAvY29tcGV0aXRvcnMvQ29tcGV0aXRvcnNQREYnO1xyXG4vLyBUaGVtZVxyXG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gJ25leHQtdGhlbWVzJztcclxuLy8gTW9iaWxlIGZyaWVuZGx5XHJcbmltcG9ydCB7IGlzTW9iaWxlIH0gZnJvbSAncmVhY3QtZGV2aWNlLWRldGVjdCc7XHJcblxyXG5jb25zdCBNb2JpbGVOYXZiYXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgeyB0aGVtZSwgc2V0VGhlbWUgfSA9IHVzZVRoZW1lKCk7XHJcbiAgY29uc3QgW21lbnVIZWxwZXIsIHNldE1lbnVIZWxwZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBtYW5SZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgdGwgPSBnc2FwLnRpbWVsaW5lKHsgcmVwZWF0OiAtMSwgeW95bzogdHJ1ZSB9KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHRsLnRvKG1hblJlZi5jdXJyZW50LCB7XHJcbiAgICAgIGR1cmF0aW9uOiAzLFxyXG4gICAgICB5OiAyNTAsXHJcbiAgICAgIHg6IDE3NSxcclxuICAgICAgZWFzZTogUG93ZXIxLmVhc2VJbk91dCxcclxuICAgIH0pXHJcbiAgICAgIC50byhtYW5SZWYuY3VycmVudCwge1xyXG4gICAgICAgIGR1cmF0aW9uOiAzLFxyXG4gICAgICAgIHk6IDUwMCxcclxuICAgICAgICB4OiAzNTAsXHJcbiAgICAgICAgZWFzZTogUG93ZXIxLmVhc2VJbk91dCxcclxuICAgICAgfSlcclxuICAgICAgLnRvKG1hblJlZi5jdXJyZW50LCB7XHJcbiAgICAgICAgZHVyYXRpb246IDMsXHJcbiAgICAgICAgeTogMjUwLFxyXG4gICAgICAgIHg6IDE3NSxcclxuICAgICAgICBlYXNlOiBQb3dlcjEuZWFzZUluT3V0LFxyXG4gICAgICB9KVxyXG4gICAgICAudG8obWFuUmVmLmN1cnJlbnQsIHsgZHVyYXRpb246IDMsIHk6IDAsIHg6IDAsIGVhc2U6IFBvd2VyMS5lYXNlSW5PdXQgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBvbk1lbnVDbGljayA9ICgpID0+IHtcclxuICAgIC8vIHBkZiBzZWN0aW9uXHJcbiAgICBjb25zdCBwZGZTZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BkZlNlY3Rpb24nKTtcclxuICAgIGNvbnN0IGxpbmtTZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpbmtTZWN0aW9uJyk7XHJcbiAgICAvLyBlbGVtZW50c1xyXG4gICAgY29uc3QgbmF2YmFyTWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXZiYXJNYWluQ29udGFpbmVyJyk7XHJcbiAgICBjb25zdCBuYXZiYXJJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdmJhckljb24nKTtcclxuICAgIGNvbnN0IG5hdmJhckNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXZiYXJDb250YWluZXInKTtcclxuICAgIC8vIGhlaWdodHNcclxuICAgIGNvbnN0IHBkZlNlY3Rpb25IZWlnaHQgPSBwZGZTZWN0aW9uLm9mZnNldEhlaWdodDtcclxuICAgIGNvbnNvbGUubG9nKHBkZlNlY3Rpb25IZWlnaHQpO1xyXG4gICAgY29uc3QgbGlua1NlY3Rpb25IZWlnaHQgPSBsaW5rU2VjdGlvbi5vZmZzZXRIZWlnaHQ7XHJcbiAgICBjb25zdCBuYXZCYXJDb250YWluZXJIZWlnaHQgPSBuYXZiYXJJY29uLm9mZnNldEhlaWdodDtcclxuICAgIGNvbnN0IG5hdmJhckhlaWdodCA9IG5hdkJhckNvbnRhaW5lckhlaWdodCArIG5hdmJhckNvbnRhaW5lci5vZmZzZXRIZWlnaHQgKyBuYXZiYXJJY29uLm9mZnNldEhlaWdodDtcclxuICAgIGNvbnNvbGUubG9nKG5hdmJhckNvbnRhaW5lci5vZmZzZXRIZWlnaHQpO1xyXG4gICAgaWYgKCFtZW51SGVscGVyKSB7XHJcbiAgICAgIGdzYXAudG8obmF2YmFyTWFpbkNvbnRhaW5lciwgeyBoZWlnaHQ6IG5hdmJhckhlaWdodCwgZHVyYXRpb246IDEsIGVhc2U6IExpbmVhciB9KTtcclxuICAgICAgc2V0TWVudUhlbHBlcih0cnVlKTtcclxuICAgIH0gZWxzZSBpZiAobWVudUhlbHBlcikge1xyXG4gICAgICBnc2FwLnRvKG5hdmJhck1haW5Db250YWluZXIsIHsgaGVpZ2h0OiA0OCwgZHVyYXRpb246IDEsIGVhc2U6IExpbmVhciB9KTtcclxuICAgICAgc2V0TWVudUhlbHBlcihmYWxzZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2l6ZSA9IHsgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIHJpZ2h0LTAgei01MFwiIHN0eWxlPXt7IG92ZXJmbG93OiAndW5zZXQnLCBoZWlnaHQ6ICdmaXQtY29udGVudCcgfX0+XHJcbiAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0VGhlbWUodGhlbWUgPT09ICdkYXJrJyA/ICdsaWdodCcgOiAnZGFyaycpfVxyXG4gICAgICAgICAgd2lkdGg9XCIxMDBcIlxyXG4gICAgICAgICAgaGVpZ2h0PVwiMTAwXCJcclxuICAgICAgICAgIHN0eWxlPXt7IG92ZXJmbG93OiAndW5zZXQnLCBjdXJzb3I6ICdwb2ludGVyJyB9fVxyXG4gICAgICAgICAgdmlld0JveD1cIjAgMCA3NzAgNzcyXCJcclxuICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxnPlxyXG4gICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgIGQ9XCJNNzY5LjAwMSAwSDMxMC4yODZDMzA2Ljc2MiAyMS40ODcxIDMwNC45OTQgNDMuMjI1NyAzMDUuMDAxIDY1QzMwNS4wMDEgMjg0LjgwOSA0ODMuMTkyIDQ2MyA3MDMuMDAxIDQ2M0M3MjUuMTE0IDQ2My4wMDggNzQ3LjE5IDQ2MS4xODUgNzY5LjAwMSA0NTcuNTVWMFpcIlxyXG4gICAgICAgICAgICAgIGZpbGw9XCIjMEExMjMwXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICBkPVwiTTU3NC44NDkgMjQ4LjgwOUM1NjcuOTY1IDI0OC44MTUgNTYxLjEzNSAyNDcuNTgyIDU1NC42ODcgMjQ1LjE3QzU1NC4zMTggMjQ1LjAzMiA1NTMuOTggMjQ0LjgyMiA1NTMuNjkyIDI0NC41NTNDNTUzLjQwNCAyNDQuMjg0IDU1My4xNzIgMjQzLjk2MSA1NTMuMDA5IDI0My42MDNDNTUyLjg0NiAyNDMuMjQ0IDU1Mi43NTUgMjQyLjg1NyA1NTIuNzQyIDI0Mi40NjNDNTUyLjcyOCAyNDIuMDcgNTUyLjc5MiAyNDEuNjc3IDU1Mi45MzEgMjQxLjMwOEM1NTMuMDY5IDI0MC45MzkgNTUzLjI3OCAyNDAuNjAxIDU1My41NDcgMjQwLjMxM0M1NTMuODE2IDI0MC4wMjUgNTU0LjEzOSAyMzkuNzkzIDU1NC40OTggMjM5LjYzQzU1NC44NTYgMjM5LjQ2NyA1NTUuMjQ0IDIzOS4zNzYgNTU1LjYzNyAyMzkuMzYzQzU1Ni4wMzEgMjM5LjM0OSA1NTYuNDI0IDIzOS40MTQgNTU2Ljc5MiAyMzkuNTUyQzU2NS4zNDEgMjQyLjcxMSA1NzQuNTY2IDI0My41ODYgNTgzLjU1NyAyNDIuMDlDNTkyLjU0NyAyNDAuNTk0IDYwMC45OTEgMjM2Ljc3OSA2MDguMDU2IDIzMS4wMjFDNTg2LjAxOCAyMzEuMjU1IDU2NC40NjEgMjIwLjg0IDU1My43MzcgMjA0LjEyOEM1NDYuODQyIDE5My4zODUgNTQ0LjU4OCAxODAuNzQ0IDU0Ny4yMTYgMTY3LjU3QzU0OS4yMjkgMTU4LjAxNyA1NTMuMzYgMTQ5LjAzNyA1NTkuMzA1IDE0MS4yOTNDNTQ3Ljk1NCAxNDQuOTA1IDUzOC4xODQgMTUyLjMwMiA1MzEuNjI4IDE2Mi4yNDhDNTI1LjA3MiAxNzIuMTkzIDUyMi4xMjYgMTg0LjA4NyA1MjMuMjgyIDE5NS45NDNDNTIzLjMyMiAxOTYuMzM2IDUyMy4yODQgMTk2LjczMyA1MjMuMTcxIDE5Ny4xMTFDNTIzLjA1NyAxOTcuNDg5IDUyMi44NzEgMTk3Ljg0MSA1MjIuNjIxIDE5OC4xNDdDNTIyLjM3MSAxOTguNDUzIDUyMi4wNjMgMTk4LjcwNiA1MjEuNzE1IDE5OC44OTNDNTIxLjM2NyAxOTkuMDggNTIwLjk4NiAxOTkuMTk2IDUyMC41OTMgMTk5LjIzNUM1MjAuMiAxOTkuMjc0IDUxOS44MDQgMTk5LjIzNSA1MTkuNDI2IDE5OS4xMkM1MTkuMDQ4IDE5OS4wMDUgNTE4LjY5NyAxOTguODE3IDUxOC4zOTIgMTk4LjU2NkM1MTguMDg3IDE5OC4zMTYgNTE3LjgzNCAxOTguMDA3IDUxNy42NDkgMTk3LjY1OEM1MTcuNDYzIDE5Ny4zMSA1MTcuMzQ5IDE5Ni45MjggNTE3LjMxMSAxOTYuNTM1QzUxNS44NTQgMTgxLjYxOSA1MjAuMjIzIDE2Ni43MTYgNTI5LjUwNCAxNTQuOTQ4QzUzOC43ODQgMTQzLjE4IDU1Mi4yNTggMTM1LjQ1NyA1NjcuMTAzIDEzMy4zOTdDNTY3LjcyNCAxMzMuMzExIDU2OC4zNTYgMTMzLjQyMSA1NjguOTExIDEzMy43MTNDNTY5LjQ2NiAxMzQuMDA0IDU2OS45MTUgMTM0LjQ2MiA1NzAuMTk3IDEzNS4wMjFDNTcwLjQ3OCAxMzUuNTgxIDU3MC41NzcgMTM2LjIxNSA1NzAuNDggMTM2LjgzNUM1NzAuMzgyIDEzNy40NTQgNTcwLjA5NCAxMzguMDI3IDU2OS42NTQgMTM4LjQ3M0M1NTQuMzEgMTU0LjA1OSA1NDQuOTk5IDE3OS40MDIgNTU4Ljc4NiAyMDAuODg4QzU2OS42NjQgMjE3LjgzNyA1OTMuMDY5IDIyNy41MzIgNjE1LjcxNCAyMjQuNDY4QzYxNi4zMjIgMjI0LjM4NiA2MTYuOTQgMjI0LjQ5MSA2MTcuNDg1IDIyNC43NzFDNjE4LjAzMSAyMjUuMDUxIDYxOC40NzggMjI1LjQ5MSA2MTguNzY1IDIyNi4wMzJDNjE5LjA1MyAyMjYuNTc0IDYxOS4xNjggMjI3LjE5IDYxOS4wOTUgMjI3Ljc5OUM2MTkuMDIyIDIyOC40MDcgNjE4Ljc2NCAyMjguOTc5IDYxOC4zNTYgMjI5LjQzNkM2MTIuODczIDIzNS41NDIgNjA2LjE2NCAyNDAuNDIyIDU5OC42NjcgMjQzLjc2QzU5MS4xNzEgMjQ3LjA5OCA1ODMuMDU1IDI0OC44MTggNTc0Ljg0OSAyNDguODA5VjI0OC44MDlaXCJcclxuICAgICAgICAgICAgICBmaWxsPVwiIzZDNjNGRlwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgZD1cIk01MjcuMDAxIDI1MEM1MjIuNjUgMjUwIDUxOC4zOTcgMjQ4LjcxIDUxNC43NzkgMjQ2LjI5MkM1MTEuMTYxIDI0My44NzUgNTA4LjM0MSAyNDAuNDM5IDUwNi42NzYgMjM2LjQxOUM1MDUuMDExIDIzMi4zOTkgNTA0LjU3NSAyMjcuOTc2IDUwNS40MjQgMjIzLjcwOEM1MDYuMjczIDIxOS40NCA1MDguMzY4IDIxNS41MiA1MTEuNDQ1IDIxMi40NDRDNTE0LjUyMiAyMDkuMzY3IDUxOC40NDIgMjA3LjI3MiA1MjIuNzA5IDIwNi40MjNDNTI2Ljk3NyAyMDUuNTc0IDUzMS40MDEgMjA2LjAxIDUzNS40MjEgMjA3LjY3NUM1MzkuNDQxIDIwOS4zNCA1NDIuODc2IDIxMi4xNiA1NDUuMjk0IDIxNS43NzdDNTQ3LjcxMSAyMTkuMzk1IDU0OS4wMDEgMjIzLjY0OSA1NDkuMDAxIDIyOEM1NDguOTk1IDIzMy44MzMgNTQ2LjY3NSAyMzkuNDI1IDU0Mi41NTEgMjQzLjU0OUM1MzguNDI2IDI0Ny42NzMgNTMyLjgzNCAyNDkuOTkzIDUyNy4wMDEgMjUwVjI1MFpNNTI3LjAwMSAyMTJDNTIzLjgzNyAyMTIgNTIwLjc0NCAyMTIuOTM4IDUxOC4xMTIgMjE0LjY5N0M1MTUuNDgxIDIxNi40NTUgNTEzLjQzIDIxOC45NTMgNTEyLjIxOSAyMjEuODc3QzUxMS4wMDggMjI0LjgwMSA1MTAuNjkyIDIyOC4wMTggNTExLjMwOSAyMzEuMTIxQzUxMS45MjYgMjM0LjIyNSA1MTMuNDUgMjM3LjA3NiA1MTUuNjg4IDIzOS4zMTRDNTE3LjkyNSAyNDEuNTUxIDUyMC43NzYgMjQzLjA3NSA1MjMuODggMjQzLjY5M0M1MjYuOTg0IDI0NC4zMSA1MzAuMjAxIDI0My45OTMgNTMzLjEyNCAyNDIuNzgyQzUzNi4wNDggMjQxLjU3MSA1MzguNTQ3IDIzOS41MiA1NDAuMzA1IDIzNi44ODlDNTQyLjA2MyAyMzQuMjU4IDU0My4wMDEgMjMxLjE2NSA1NDMuMDAxIDIyOEM1NDIuOTk3IDIyMy43NTggNTQxLjMwOSAyMTkuNjkxIDUzOC4zMSAyMTYuNjkyQzUzNS4zMSAyMTMuNjkyIDUzMS4yNDMgMjEyLjAwNSA1MjcuMDAxIDIxMlYyMTJaXCJcclxuICAgICAgICAgICAgICBmaWxsPVwiIzZDNjNGRlwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIHshaXNNb2JpbGUgJiYgKFxyXG4gICAgICAgICAgICAgIDxnIHJlZj17bWFuUmVmfT5cclxuICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgIGQ9XCJNOC42OTA3NCA1NjcuMDc4QzcuMjQ1NDYgNTY2Ljg1MyA1Ljg2NTA0IDU2Ni4zMjEgNC42NDE4MiA1NjUuNTE4QzMuNDE4NiA1NjQuNzE2IDIuMzgwNzcgNTYzLjY2MiAxLjU5NzcxIDU2Mi40MjdDMC44MTQ2NTIgNTYxLjE5MSAwLjMwNDQyMyA1NTkuODAyIDAuMTAxMTU3IDU1OC4zNTRDLTAuMTAyMTA5IDU1Ni45MDUgMC4wMDYyNzUxMiA1NTUuNDMgMC40MTkwNDQgNTU0LjAyNkw4LjIwNzM3IDUyNy41NDZMMjAuMDQyIDUyOS43NjVMMjAuNTUwOCA1NTYuNzMyQzIwLjU3OTEgNTU4LjIzMiAyMC4yNzg4IDU1OS43MTkgMTkuNjcwOSA1NjEuMDkxQzE5LjA2MyA1NjIuNDYyIDE4LjE2MjMgNTYzLjY4MyAxNy4wMzIgNTY0LjY2OUMxNS45MDE3IDU2NS42NTUgMTQuNTY5MyA1NjYuMzgyIDEzLjEyODMgNTY2Ljc5OEMxMS42ODczIDU2Ny4yMTQgMTAuMTcyNyA1NjcuMzEgOC42OTA3NCA1NjcuMDc4VjU2Ny4wNzhaXCJcclxuICAgICAgICAgICAgICAgICAgZmlsbD1cIiM5RjYxNkFcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgIGQ9XCJNNzYuOTk2IDczNi4xMzJMNjIuMjAzIDczMy45MTNMNjUuOTAxIDU4OS42NzhMNDUuMTkxIDY1MS44MUwzNC4wOTYgNzM5LjA5MUwyMC4wNDIgNzM1LjM5M0wxNy4wODMgNjQ0LjQxNEwzMy4zNTYgNTM3LjE2MkwxMTQuNzE5IDU1NS42NTRMNzYuOTk2IDczNi4xMzJaXCJcclxuICAgICAgICAgICAgICAgICAgZmlsbD1cIiMwQTEyMzBcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgIGQ9XCJNNzAuMjA0NiA3NzEuNjM2QzY3LjMyMDkgNzcxLjYzNiA2NC41NTUzIDc3MC40OTEgNjIuNTE2MyA3NjguNDUyQzYwLjQ3NzIgNzY2LjQxMyA1OS4zMzE3IDc2My42NDcgNTkuMzMxNyA3NjAuNzYzQzU5LjMzMTcgNzYwLjQwOCA1OS4zNDkxIDc2MC4wNTMgNTkuMzgzOSA3NTkuNjk5TDYxLjY4MTEgNzM2LjM0NUM2MS43MzY1IDczNS43ODcgNjEuOTI4MSA3MzUuMjUxIDYyLjIzOTEgNzM0Ljc4NEM2Mi41NTAxIDczNC4zMTcgNjIuOTcwOSA3MzMuOTMzIDYzLjQ2NDcgNzMzLjY2N0M2Ny44MjU0IDczMS4zMTUgNzIuMzA5NiA3MzEuODg1IDc2Ljg5OTQgNzM0Ljk1NUM3Ny4zMDY2IDczNS4yMjkgNzcuNjQ5NyA3MzUuNTg4IDc3LjkwNTIgNzM2LjAwN0M3OC4xNjA3IDczNi40MjcgNzguMzIyNiA3MzYuODk2IDc4LjM3OTkgNzM3LjM4NEw4MS4wMDE3IDc1OS40ODJDODEuMTgyNyA3NjEuMDA4IDgxLjAzODUgNzYyLjU1NCA4MC41Nzg1IDc2NC4wMkM4MC4xMTg1IDc2NS40ODUgNzkuMzUzMyA3NjYuODM2IDc4LjMzMzIgNzY3Ljk4NUM3Ny4zMTMxIDc2OS4xMzMgNzYuMDYxMyA3NzAuMDUyIDc0LjY2MDIgNzcwLjY4MkM3My4yNTkxIDc3MS4zMTEgNzEuNzQwNiA3NzEuNjM2IDcwLjIwNDYgNzcxLjYzNkg3MC4yMDQ2WlwiXHJcbiAgICAgICAgICAgICAgICAgIGZpbGw9XCIjMEExMjMwXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICBkPVwiTTkuODIwODQgNzY5Ljg5OEM4LjQyNjc1IDc2OS4zODcgNy4xNjcxNCA3NjguNTY1IDYuMTM3MjYgNzY3LjQ5NkM1LjEwNzM4IDc2Ni40MjYgNC4zMzQxOSA3NjUuMTM2IDMuODc2MTYgNzYzLjcyNEMzLjQxODE0IDc2Mi4zMTEgMy4yODcyNyA3NjAuODEzIDMuNDkzNDQgNzU5LjM0M0MzLjY5OTYyIDc1Ny44NzIgNC4yMzc0NSA3NTYuNDY4IDUuMDY2MjYgNzU1LjIzNkwyMC44NDYzIDczMS43NzlDMjYuNTM0OCA3MjcuNjk3IDI5Ljk2NTcgNzI5LjY4NSAzMS4yOTk1IDczNy4zMTNMMzQuNDg5OCA3MjkuMzJMMzYuODkzNiA3MzEuOTQyQzM4LjExMzMgNzMzLjI3MyAzOC44MjMgNzM0Ljk5MiAzOC44OTcxIDczNi43OTVDMzguOTcxMiA3MzguNTk5IDM4LjQwNDkgNzQwLjM3IDM3LjI5ODQgNzQxLjc5NkwyMC45MzA0IDc2Ni43MDZDMTkuNjU2NyA3NjguMzQ4IDE3Ljg5MzggNzY5LjU0MiAxNS44OTY3IDc3MC4xMTZDMTMuODk5NiA3NzAuNjg5IDExLjc3MTcgNzcwLjYxMyA5LjgyMDg0IDc2OS44OThWNzY5Ljg5OFpcIlxyXG4gICAgICAgICAgICAgICAgICBmaWxsPVwiIzBBMTIzMFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgZD1cIk0xMDkuNTQyIDM5OC4xMDVDMTIxLjc5NyAzOTguMTA1IDEzMS43MzIgMzg4LjE3IDEzMS43MzIgMzc1LjkxNUMxMzEuNzMyIDM2My42NTkgMTIxLjc5NyAzNTMuNzI1IDEwOS41NDIgMzUzLjcyNUM5Ny4yODY1IDM1My43MjUgODcuMzUxNyAzNjMuNjU5IDg3LjM1MTcgMzc1LjkxNUM4Ny4zNTE3IDM4OC4xNyA5Ny4yODY1IDM5OC4xMDUgMTA5LjU0MiAzOTguMTA1WlwiXHJcbiAgICAgICAgICAgICAgICAgIGZpbGw9XCIjOUY2MTZBXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICBkPVwiTTEyMy41OTUgNDE2LjU5Nkw4NS44NzIzIDQwOS4yQzkwLjczMTMgMzk4LjgzNiA5NC42MjI1IDM5NS4zMyA5MC4zMTAzIDM4NC4wNTFIMTIwLjYzN0MxMTcuOTYyIDM5NS43MzMgMTIwLjU0NyA0MDYuNjk4IDEyMy41OTUgNDE2LjU5NlpcIlxyXG4gICAgICAgICAgICAgICAgICBmaWxsPVwiIzlGNjE2QVwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgZD1cIk0xMTkuMTU3IDU2Ni4wMDlMMzAuMzk3MyA1NDAuODZDNDguMTc2MSA1MDEuNzMxIDUxLjkgNDU4Ljc2OSA0Ni42Mjg3IDQxMy4zNTZDNDYuNTAzNCA0MTIuMjg1IDQ2LjU5MDQgNDExLjE5OSA0Ni44ODQ3IDQxMC4xNkM0Ny4xNzkxIDQwOS4xMjIgNDcuNjc1MSA0MDguMTUyIDQ4LjM0NDMgNDA3LjMwNkM0OS4wMTM1IDQwNi40NTkgNDkuODQzIDQwNS43NTMgNTAuNzg1MiA0MDUuMjI3QzUxLjcyNzUgNDA0LjcwMSA1Mi43NjQxIDQwNC4zNjYgNTMuODM1OSA0MDQuMjRDNTMuOTM1NyA0MDQuMjI5IDU0LjAzNTYgNDA0LjIxOSA1NC4xMzU4IDQwNC4yMTFDNjUuNzEzNyA0MDMuMjU3IDc3Ljc4NDQgNDAyLjAzMyA5MC4zMTA0IDQwMC4zMjRMMTA0LjM2NCA0MDkuOTM5TDEyMC42MzcgNDA2LjI0MUMxMjUuODU4IDQwOC43NzIgMTMxLjExOCA0MTAuODc3IDEzNS44NjQgNDEyLjk3NUMxNDAuMTkxIDQxNC44OTMgMTQzLjY0OSA0MTguMzU0IDE0NS41NjMgNDIyLjY4M0MxNDcuNDc2IDQyNy4wMTIgMTQ3LjcwOSA0MzEuODk4IDE0Ni4yMTUgNDM2LjM4OUMxMzEuNzUyIDQ4MC4wNjYgMTIyLjA3MSA1MjMuMzI5IDExOS4xNTcgNTY2LjAwOVpcIlxyXG4gICAgICAgICAgICAgICAgICBmaWxsPVwiI0U2RTZFNlwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgZD1cIk0yMi4yNjEgNTMyLjcyNEw1LjI0ODY2IDUzMC41MDVMNDUuNTUwOCA0MTQuMzhDNDcuNjAwOCA0MDguNDczIDUyLjY4NDggNDA1LjI3NiA1OC44NzQ1IDQwNC4zOTJMNjQuNzkxOCA0MDUuMTMxTDYwLjM1MzggNDczLjkyTDIyLjI2MSA1MzIuNzI0WlwiXHJcbiAgICAgICAgICAgICAgICAgIGZpbGw9XCIjRTZFNkU2XCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICBkPVwiTTE1NS41MjUgNTEwLjUyNEMxNTIuNjkyIDUxMC43NDIgMTQ5Ljg2MyA1MTAuMDYgMTQ3LjQ0MSA1MDguNTc0QzE0NS4wMTkgNTA3LjA4OSAxNDMuMTI4IDUwNC44NzcgMTQyLjAzOCA1MDIuMjUzTDEyNS44MTQgNDYzLjE5NUwxMzkuMTI4IDQxNS4xMTdMMTQyLjY0OCA0MTcuMzU3QzE0Mi45ODcgNDE3LjU3MiAxNDMuMzIyIDQxNy43OTQgMTQzLjY1MiA0MTguMDJDMTQ4LjU5MyA0MjEuNDgxIDE1Mi40NDIgNDI2LjI4MyAxNTQuNzQ2IDQzMS44NThDMTU3LjA0OSA0MzcuNDM0IDE1Ny43MTEgNDQzLjU1MiAxNTYuNjU0IDQ0OS40OTFMMTUzLjE4MiA0NjkuODUyTDE2Ny41MDUgNTAwLjYwNUMxNjYuNzc3IDUwMy4yOTQgMTY1LjIzNSA1MDUuNjkgMTYzLjA4OSA1MDcuNDY2QzE2MC45NDQgNTA5LjI0MyAxNTguMzAyIDUxMC4zMTEgMTU1LjUyNSA1MTAuNTI0VjUxMC41MjRaXCJcclxuICAgICAgICAgICAgICAgICAgZmlsbD1cIiNFNkU2RTZcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgIGQ9XCJNMTExLjI0OCAzNDMuMDI3QzExNS4wNCAzNDMuMjAxIDExOC43MzMgMzQ0LjI4OCAxMjIuMDE0IDM0Ni4xOTZDMTIyLjc2OSAzNDYuNjM2IDEyMi40MiAzNDguMjE5IDEyMy4xMTcgMzQ4LjczNkMxMjMuOTk1IDM0OS4zODYgMTI1LjkwMiAzNDguOTkxIDEyNi42OCAzNDkuNzUzQzEyOS4xOSAzNTIuMjAzIDEzMS4xMjMgMzU1LjE4MiAxMzIuMzM4IDM1OC40NzRDMTMzLjU1MiAzNjEuNzY1IDEzNC4wMTggMzY1LjI4NSAxMzMuNzAyIDM2OC43NzlMMTMyLjQ2NCAzODEuMDlMMTI5LjU0MyAzNzcuODk2QzEyNC4zMDYgMzcyLjA4OSAxMTcuMDM1IDM2OC41MTkgMTA5LjIzOCAzNjcuOTI3QzEwOC45MDYgMzY3LjkwNCAxMDguNTc0IDM2Ny44ODcgMTA4LjI0MiAzNjcuODc0TDExMC40ODkgMzYzLjk0MUwxMDYuNTg0IDM2Ny44NDdDMTA0LjgwMiAzNjcuODY2IDEwMy4wMjQgMzY4LjAxMSAxMDEuMjYzIDM2OC4yOEwxMDQuMjUxIDM2My4wNUw5OC41MTcxIDM2OC43ODRMOTguNTE2NiAzNjguNzg1Qzk2LjE3MTYgMzY5LjMgOTMuOTgwNSAzNzAuMzYgOTIuMTE5OCAzNzEuODc3QzkwLjI1OTEgMzczLjM5NSA4OC43ODA4IDM3NS4zMjggODcuODA0MiAzNzcuNTIyTDg3LjE2NzUgMzc4LjkzM0w4Ni40NTQyIDM2Ny4xODhDODYuMzE3NyAzNjAuOTExIDg4LjY4MDUgMzU0LjgzNyA5My4wMjI2IDM1MC4zMDJDOTcuMzY0NyAzNDUuNzY3IDEwMy4zMzEgMzQzLjE0MiAxMDkuNjA4IDM0My4wMDZDMTEwLjE1NSAzNDIuOTk0IDExMC43MDIgMzQzLjAwMSAxMTEuMjQ4IDM0My4wMjdaXCJcclxuICAgICAgICAgICAgICAgICAgZmlsbD1cIiMyRjJFNDFcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgIGQ9XCJNMTMxLjg3NyAzODQuNDM4QzEzMi44NjEgMzg0LjQzOCAxMzMuNjU5IDM4Mi41NDMgMTMzLjY1OSAzODAuMjA1QzEzMy42NTkgMzc3Ljg2NyAxMzIuODYxIDM3NS45NzIgMTMxLjg3NyAzNzUuOTcyQzEzMC44OTIgMzc1Ljk3MiAxMzAuMDk0IDM3Ny44NjcgMTMwLjA5NCAzODAuMjA1QzEzMC4wOTQgMzgyLjU0MyAxMzAuODkyIDM4NC40MzggMTMxLjg3NyAzODQuNDM4WlwiXHJcbiAgICAgICAgICAgICAgICAgIGZpbGw9XCIjOUY2MTZBXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICBkPVwiTTg3LjMxOTUgMzgzLjEwMUM4OC4zMDM4IDM4My4xMDEgODkuMTAxNyAzODEuMjA2IDg5LjEwMTcgMzc4Ljg2OEM4OS4xMDE3IDM3Ni41MyA4OC4zMDM4IDM3NC42MzUgODcuMzE5NSAzNzQuNjM1Qzg2LjMzNTEgMzc0LjYzNSA4NS41MzcyIDM3Ni41MyA4NS41MzcyIDM3OC44NjhDODUuNTM3MiAzODEuMjA2IDg2LjMzNTEgMzgzLjEwMSA4Ny4zMTk1IDM4My4xMDFaXCJcclxuICAgICAgICAgICAgICAgICAgZmlsbD1cIiM5RjYxNkFcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgIGQ9XCJNMTc0LjAzNCA0MzUuNDE5QzE3NS40NTUgNDM1Ljc2NyAxNzYuNzg1IDQzNi40MTQgMTc3LjkzNiA0MzcuMzE3QzE3OS4wODYgNDM4LjIyIDE4MC4wMzEgNDM5LjM1OSAxODAuNzA2IDQ0MC42NTZDMTgxLjM4MiA0NDEuOTU0IDE4MS43NzIgNDQzLjM4MSAxODEuODUyIDQ0NC44NDFDMTgxLjkzMSA0NDYuMzAyIDE4MS42OTggNDQ3Ljc2MyAxODEuMTY4IDQ0OS4xMjZMMTcxLjE2IDQ3NC44NUwxNTkuNTU2IDQ3MS42MzRMMTYxLjMzOCA0NDQuNzIxQzE2MS40MzcgNDQzLjIyNSAxNjEuODYzIDQ0MS43NjggMTYyLjU4NSA0NDAuNDUzQzE2My4zMDcgNDM5LjEzOSAxNjQuMzA4IDQzNy45OTggMTY1LjUxOCA0MzcuMTExQzE2Ni43MjggNDM2LjIyNSAxNjguMTE3IDQzNS42MTQgMTY5LjU4OCA0MzUuMzIyQzE3MS4wNTkgNDM1LjAyOSAxNzIuNTc3IDQzNS4wNjMgMTc0LjAzNCA0MzUuNDE5SDE3NC4wMzRaXCJcclxuICAgICAgICAgICAgICAgICAgZmlsbD1cIiM5RjYxNkFcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTYwLjU3OSA1MDkuMDU1TDE0Mi4wODcgNDk3LjIyTDE1Ny42MiA0NjUuNDE0TDE3Ni44NTEgNDcyLjgxMUwxNjcuMjM2IDUwMC45MThMMTYwLjU3OSA1MDkuMDU1WlwiIGZpbGw9XCIjRTZFNkU2XCIgLz5cclxuICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgIGQ9XCJNMTczLjAwMSA0MDkuMTAxVjI4NEgxNzEuMDAxVjQwOS4xMDFDMTY5Ljc4NyA0MDkuMzQ5IDE2OC43MDkgNDEwLjAzOSAxNjcuOTc0IDQxMS4wMzdDMTY3LjI0IDQxMi4wMzUgMTY2LjkwMiA0MTMuMjcgMTY3LjAyNyA0MTQuNTAzQzE2Ny4xNTEgNDE1LjczNSAxNjcuNzI5IDQxNi44NzggMTY4LjY0OCA0MTcuNzA5QzE2OS41NjcgNDE4LjU0IDE3MC43NjIgNDE5IDE3Mi4wMDEgNDE5QzE3My4yNDEgNDE5IDE3NC40MzUgNDE4LjU0IDE3NS4zNTUgNDE3LjcwOUMxNzYuMjc0IDQxNi44NzggMTc2Ljg1MiA0MTUuNzM1IDE3Ni45NzYgNDE0LjUwM0MxNzcuMTAxIDQxMy4yNyAxNzYuNzYzIDQxMi4wMzUgMTc2LjAyOSA0MTEuMDM3QzE3NS4yOTQgNDEwLjAzOSAxNzQuMjE2IDQwOS4zNDkgMTczLjAwMSA0MDkuMTAxVjQwOS4xMDFaTTE3Mi4wMDEgNDE3QzE3MS40MDggNDE3IDE3MC44MjggNDE2LjgyNCAxNzAuMzM1IDQxNi40OTRDMTY5Ljg0MSA0MTYuMTY1IDE2OS40NTcgNDE1LjY5NiAxNjkuMjMgNDE1LjE0OEMxNjkuMDAzIDQxNC42IDE2OC45NDMgNDEzLjk5NyAxNjkuMDU5IDQxMy40MTVDMTY5LjE3NSA0MTIuODMzIDE2OS40NjEgNDEyLjI5OCAxNjkuODggNDExLjg3OUMxNzAuMyA0MTEuNDU5IDE3MC44MzQgNDExLjE3MyAxNzEuNDE2IDQxMS4wNThDMTcxLjk5OCA0MTAuOTQyIDE3Mi42MDEgNDExLjAwMSAxNzMuMTUgNDExLjIyOEMxNzMuNjk4IDQxMS40NTUgMTc0LjE2NiA0MTEuODQgMTc0LjQ5NiA0MTIuMzMzQzE3NC44MjYgNDEyLjgyNyAxNzUuMDAxIDQxMy40MDcgMTc1LjAwMSA0MTRDMTc1LjAwMSA0MTQuNzk1IDE3NC42ODQgNDE1LjU1OCAxNzQuMTIyIDQxNi4xMkMxNzMuNTU5IDQxNi42ODMgMTcyLjc5NyA0MTYuOTk5IDE3Mi4wMDEgNDE3VjQxN1pcIlxyXG4gICAgICAgICAgICAgICAgICBmaWxsPVwiIzBBMTIzMFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgZD1cIk0xNzAuNDM1IDE2NC41NjlDMTY5LjI5IDE2NC41NjkgMTY4LjE5MyAxNjQuMTE1IDE2Ny4zODQgMTYzLjMwNkMxNjYuNTc1IDE2Mi40OTcgMTY2LjEyMSAxNjEuMzk5IDE2Ni4xMjEgMTYwLjI1NVYxNDcuMzE0QzE2Ni4xMjIgMTQ2LjE3MSAxNjYuNTc4IDE0NS4wNzUgMTY3LjM4NyAxNDQuMjY4QzE2OC4xOTUgMTQzLjQ2IDE2OS4yOTIgMTQzLjAwNyAxNzAuNDM1IDE0My4wMDdDMTcxLjU3OCAxNDMuMDA3IDE3Mi42NzQgMTQzLjQ2IDE3My40ODMgMTQ0LjI2OEMxNzQuMjkxIDE0NS4wNzUgMTc0Ljc0NyAxNDYuMTcxIDE3NC43NDggMTQ3LjMxNFYxNjAuMjU1QzE3NC43NDggMTYwLjgyMiAxNzQuNjM3IDE2MS4zODMgMTc0LjQyIDE2MS45MDZDMTc0LjIwMyAxNjIuNDMgMTczLjg4NSAxNjIuOTA1IDE3My40ODUgMTYzLjMwNkMxNzMuMDg0IDE2My43MDYgMTcyLjYwOSAxNjQuMDI0IDE3Mi4wODUgMTY0LjI0MUMxNzEuNTYyIDE2NC40NTggMTcxLjAwMSAxNjQuNTY5IDE3MC40MzUgMTY0LjU2OVYxNjQuNTY5WlwiXHJcbiAgICAgICAgICAgICAgICAgIGZpbGw9XCIjNkM2M0ZGXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICBkPVwiTTE3MC40MzUgMjYzLjc4N0MxNjkuODY4IDI2My43ODcgMTY5LjMwNyAyNjMuNjc2IDE2OC43ODQgMjYzLjQ1OUMxNjguMjYgMjYzLjI0MiAxNjcuNzg1IDI2Mi45MjUgMTY3LjM4NCAyNjIuNTI0QzE2Ni45ODQgMjYyLjEyMyAxNjYuNjY2IDI2MS42NDggMTY2LjQ0OSAyNjEuMTI0QzE2Ni4yMzIgMjYwLjYwMSAxNjYuMTIxIDI2MC4wNCAxNjYuMTIxIDI1OS40NzRWMjQ2LjUzMkMxNjYuMTIgMjQ1Ljk2NSAxNjYuMjMxIDI0NS40MDMgMTY2LjQ0NyAyNDQuODc5QzE2Ni42NjQgMjQ0LjM1NSAxNjYuOTgxIDI0My44NzkgMTY3LjM4MiAyNDMuNDc3QzE2Ny43ODMgMjQzLjA3NiAxNjguMjU4IDI0Mi43NTggMTY4Ljc4MiAyNDIuNTQxQzE2OS4zMDYgMjQyLjMyMyAxNjkuODY3IDI0Mi4yMTIgMTcwLjQzNSAyNDIuMjEyQzE3MS4wMDIgMjQyLjIxMiAxNzEuNTYzIDI0Mi4zMjMgMTcyLjA4NyAyNDIuNTQxQzE3Mi42MTEgMjQyLjc1OCAxNzMuMDg3IDI0My4wNzYgMTczLjQ4NyAyNDMuNDc3QzE3My44ODggMjQzLjg3OSAxNzQuMjA2IDI0NC4zNTUgMTc0LjQyMiAyNDQuODc5QzE3NC42MzggMjQ1LjQwMyAxNzQuNzQ5IDI0NS45NjUgMTc0Ljc0OCAyNDYuNTMyVjI1OS40NzRDMTc0Ljc0OCAyNjAuMDQgMTc0LjYzNyAyNjAuNjAxIDE3NC40MiAyNjEuMTI0QzE3NC4yMDMgMjYxLjY0OCAxNzMuODg2IDI2Mi4xMjMgMTczLjQ4NSAyNjIuNTI0QzE3My4wODQgMjYyLjkyNSAxNzIuNjA5IDI2My4yNDIgMTcyLjA4NSAyNjMuNDU5QzE3MS41NjIgMjYzLjY3NiAxNzEuMDAxIDI2My43ODcgMTcwLjQzNSAyNjMuNzg3VjI2My43ODdaXCJcclxuICAgICAgICAgICAgICAgICAgZmlsbD1cIiM2QzYzRkZcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgIGQ9XCJNMjAwLjkzOSAxNzcuMjAzQzIwMC4wODUgMTc3LjIwMyAxOTkuMjUxIDE3Ni45NSAxOTguNTQyIDE3Ni40NzZDMTk3LjgzMyAxNzYuMDAyIDE5Ny4yOCAxNzUuMzI4IDE5Ni45NTMgMTc0LjU0QzE5Ni42MjcgMTczLjc1MiAxOTYuNTQxIDE3Mi44ODUgMTk2LjcwOCAxNzIuMDQ4QzE5Ni44NzQgMTcxLjIxMSAxOTcuMjg1IDE3MC40NDIgMTk3Ljg4OCAxNjkuODM5TDIwNy4wMzkgMTYwLjY4OEMyMDcuODQ4IDE1OS44OCAyMDguOTQ1IDE1OS40MjYgMjEwLjA4OSAxNTkuNDI3QzIxMS4yMzMgMTU5LjQyNyAyMTIuMzI5IDE1OS44ODIgMjEzLjEzOCAxNjAuNjlDMjEzLjk0NyAxNjEuNDk5IDIxNC40MDEgMTYyLjU5NiAyMTQuNDAyIDE2My43MzlDMjE0LjQwMiAxNjQuODgzIDIxMy45NDggMTY1Ljk4IDIxMy4xNCAxNjYuNzg5TDIwMy45ODkgMTc1Ljk0QzIwMy41ODkgMTc2LjM0MSAyMDMuMTEzIDE3Ni42NTkgMjAyLjU5IDE3Ni44NzZDMjAyLjA2NiAxNzcuMDkzIDIwMS41MDUgMTc3LjIwNCAyMDAuOTM5IDE3Ny4yMDNWMTc3LjIwM1pcIlxyXG4gICAgICAgICAgICAgICAgICBmaWxsPVwiIzZDNjNGRlwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgZD1cIk0xMzAuNzggMjQ3LjM2MkMxMjkuOTI2IDI0Ny4zNjIgMTI5LjA5MiAyNDcuMTA5IDEyOC4zODMgMjQ2LjYzNUMxMjcuNjc0IDI0Ni4xNjEgMTI3LjEyMSAyNDUuNDg4IDEyNi43OTQgMjQ0LjY5OUMxMjYuNDY4IDI0My45MTEgMTI2LjM4MiAyNDMuMDQ0IDEyNi41NDkgMjQyLjIwN0MxMjYuNzE1IDI0MS4zNyAxMjcuMTI2IDI0MC42MDIgMTI3LjcyOSAyMzkuOTk4TDEzNi44OCAyMzAuODQ4QzEzNy42ODkgMjMwLjAzOSAxMzguNzg2IDIyOS41ODQgMTM5LjkzIDIyOS41ODRDMTQxLjA3NCAyMjkuNTg0IDE0Mi4xNzIgMjMwLjAzOCAxNDIuOTgxIDIzMC44NDdDMTQzLjc5IDIzMS42NTYgMTQ0LjI0NCAyMzIuNzU0IDE0NC4yNDQgMjMzLjg5OEMxNDQuMjQ0IDIzNS4wNDIgMTQzLjc5IDIzNi4xMzkgMTQyLjk4MSAyMzYuOTQ4TDEzMy44MyAyNDYuMDk5QzEzMy40MyAyNDYuNSAxMzIuOTU0IDI0Ni44MTggMTMyLjQzMSAyNDcuMDM1QzEzMS45MDcgMjQ3LjI1MiAxMzEuMzQ2IDI0Ny4zNjMgMTMwLjc4IDI0Ny4zNjJWMjQ3LjM2MlpcIlxyXG4gICAgICAgICAgICAgICAgICBmaWxsPVwiIzZDNjNGRlwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgZD1cIk0yMjYuNTE0IDIwNy43MDhIMjEzLjU3M0MyMTIuNDMgMjA3LjcwNiAyMTEuMzM0IDIwNy4yNTEgMjEwLjUyNyAyMDYuNDQyQzIwOS43MTkgMjA1LjYzMyAyMDkuMjY2IDIwNC41MzcgMjA5LjI2NiAyMDMuMzk0QzIwOS4yNjYgMjAyLjI1MSAyMDkuNzE5IDIwMS4xNTQgMjEwLjUyNyAyMDAuMzQ2QzIxMS4zMzQgMTk5LjUzNyAyMTIuNDMgMTk5LjA4MiAyMTMuNTczIDE5OS4wOEgyMjYuNTE0QzIyNy4wODEgMTk5LjA3OSAyMjcuNjQzIDE5OS4xOSAyMjguMTY3IDE5OS40MDZDMjI4LjY5MSAxOTkuNjIzIDIyOS4xNjggMTk5Ljk0IDIyOS41NjkgMjAwLjM0MUMyMjkuOTcgMjAwLjc0MiAyMzAuMjg5IDIwMS4yMTggMjMwLjUwNiAyMDEuNzQxQzIzMC43MjMgMjAyLjI2NSAyMzAuODM1IDIwMi44MjcgMjMwLjgzNSAyMDMuMzk0QzIzMC44MzUgMjAzLjk2MSAyMzAuNzIzIDIwNC41MjIgMjMwLjUwNiAyMDUuMDQ2QzIzMC4yODkgMjA1LjU3IDIyOS45NyAyMDYuMDQ2IDIyOS41NjkgMjA2LjQ0NkMyMjkuMTY4IDIwNi44NDcgMjI4LjY5MSAyMDcuMTY1IDIyOC4xNjcgMjA3LjM4MUMyMjcuNjQzIDIwNy41OTcgMjI3LjA4MSAyMDcuNzA4IDIyNi41MTQgMjA3LjcwOFYyMDcuNzA4WlwiXHJcbiAgICAgICAgICAgICAgICAgIGZpbGw9XCIjNkM2M0ZGXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICBkPVwiTTEyNy4yOTYgMjA3LjcwOEgxMTQuMzU1QzExMy43ODggMjA3LjcwOCAxMTMuMjI2IDIwNy41OTcgMTEyLjcwMiAyMDcuMzgxQzExMi4xNzggMjA3LjE2NSAxMTEuNzAxIDIwNi44NDcgMTExLjMgMjA2LjQ0NkMxMTAuODk5IDIwNi4wNDYgMTEwLjU4MSAyMDUuNTcgMTEwLjM2MyAyMDUuMDQ2QzExMC4xNDYgMjA0LjUyMiAxMTAuMDM0IDIwMy45NjEgMTEwLjAzNCAyMDMuMzk0QzExMC4wMzQgMjAyLjgyNyAxMTAuMTQ2IDIwMi4yNjUgMTEwLjM2MyAyMDEuNzQxQzExMC41ODEgMjAxLjIxOCAxMTAuODk5IDIwMC43NDIgMTExLjMgMjAwLjM0MUMxMTEuNzAxIDE5OS45NCAxMTIuMTc4IDE5OS42MjMgMTEyLjcwMiAxOTkuNDA2QzExMy4yMjYgMTk5LjE5IDExMy43ODggMTk5LjA3OSAxMTQuMzU1IDE5OS4wOEgxMjcuMjk2QzEyOC40MzkgMTk5LjA4MiAxMjkuNTM1IDE5OS41MzcgMTMwLjM0MiAyMDAuMzQ2QzEzMS4xNSAyMDEuMTU0IDEzMS42MDQgMjAyLjI1MSAxMzEuNjA0IDIwMy4zOTRDMTMxLjYwNCAyMDQuNTM3IDEzMS4xNSAyMDUuNjMzIDEzMC4zNDIgMjA2LjQ0MkMxMjkuNTM1IDIwNy4yNTEgMTI4LjQzOSAyMDcuNzA2IDEyNy4yOTYgMjA3LjcwOEgxMjcuMjk2WlwiXHJcbiAgICAgICAgICAgICAgICAgIGZpbGw9XCIjNkM2M0ZGXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICBkPVwiTTIxMC4wOSAyNDcuMzYyQzIwOS41MjMgMjQ3LjM2MyAyMDguOTYyIDI0Ny4yNTIgMjA4LjQzOCAyNDcuMDM1QzIwNy45MTUgMjQ2LjgxOCAyMDcuNDM5IDI0Ni41IDIwNy4wMzkgMjQ2LjA5OUwxOTcuODg4IDIzNi45NDhDMTk3LjQ4NyAyMzYuNTQ4IDE5Ny4xNjkgMjM2LjA3MiAxOTYuOTUxIDIzNS41NDlDMTk2LjczNCAyMzUuMDI1IDE5Ni42MjIgMjM0LjQ2NCAxOTYuNjIyIDIzMy44OTdDMTk2LjYyMSAyMzMuMzMgMTk2LjczMyAyMzIuNzY5IDE5Ni45NDkgMjMyLjI0NUMxOTcuMTY2IDIzMS43MjEgMTk3LjQ4NCAyMzEuMjQ1IDE5Ny44ODUgMjMwLjg0NEMxOTguMjg2IDIzMC40NDMgMTk4Ljc2MiAyMzAuMTI1IDE5OS4yODYgMjI5LjkwOUMxOTkuODA5IDIyOS42OTIgMjAwLjM3MSAyMjkuNTggMjAwLjkzOCAyMjkuNTgxQzIwMS41MDUgMjI5LjU4MSAyMDIuMDY2IDIyOS42OTMgMjAyLjU4OSAyMjkuOTFDMjAzLjExMyAyMzAuMTI4IDIwMy41ODkgMjMwLjQ0NiAyMDMuOTg5IDIzMC44NDhMMjEzLjE0IDIzOS45OThDMjEzLjc0MyAyNDAuNjAyIDIxNC4xNTQgMjQxLjM3IDIxNC4zMiAyNDIuMjA3QzIxNC40ODcgMjQzLjA0NCAyMTQuNDAxIDI0My45MTEgMjE0LjA3NSAyNDQuN0MyMTMuNzQ4IDI0NS40ODggMjEzLjE5NSAyNDYuMTYxIDIxMi40ODYgMjQ2LjYzNUMyMTEuNzc3IDI0Ny4xMSAyMTAuOTQzIDI0Ny4zNjMgMjEwLjA5IDI0Ny4zNjNWMjQ3LjM2MlpcIlxyXG4gICAgICAgICAgICAgICAgICBmaWxsPVwiIzZDNjNGRlwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgZD1cIk0xMzkuOTMgMTc3LjIwM0MxMzkuMzY0IDE3Ny4yMDQgMTM4LjgwMyAxNzcuMDkzIDEzOC4yNzkgMTc2Ljg3NkMxMzcuNzU2IDE3Ni42NTkgMTM3LjI4IDE3Ni4zNDEgMTM2Ljg4IDE3NS45NEwxMjcuNzI5IDE2Ni43ODlDMTI3LjMyOSAxNjYuMzg5IDEyNy4wMTEgMTY1LjkxMyAxMjYuNzk0IDE2NS4zOUMxMjYuNTc3IDE2NC44NjYgMTI2LjQ2NiAxNjQuMzA1IDEyNi40NjYgMTYzLjczOUMxMjYuNDY2IDE2My4xNzIgMTI2LjU3NyAxNjIuNjExIDEyNi43OTQgMTYyLjA4OEMxMjcuMDExIDE2MS41NjQgMTI3LjMyOSAxNjEuMDg5IDEyNy43MjkgMTYwLjY4OEMxMjguMTMgMTYwLjI4OCAxMjguNjA1IDE1OS45NyAxMjkuMTI5IDE1OS43NTNDMTI5LjY1MiAxNTkuNTM2IDEzMC4yMTMgMTU5LjQyNSAxMzAuNzggMTU5LjQyNUMxMzEuMzQ2IDE1OS40MjUgMTMxLjkwNyAxNTkuNTM2IDEzMi40MyAxNTkuNzUzQzEzMi45NTQgMTU5Ljk3IDEzMy40MjkgMTYwLjI4OCAxMzMuODMgMTYwLjY4OEwxNDIuOTgxIDE2OS44MzlDMTQzLjU4NCAxNzAuNDQyIDE0My45OTUgMTcxLjIxMSAxNDQuMTYxIDE3Mi4wNDhDMTQ0LjMyOCAxNzIuODg1IDE0NC4yNDIgMTczLjc1MiAxNDMuOTE2IDE3NC41NEMxNDMuNTg5IDE3NS4zMjkgMTQzLjAzNiAxNzYuMDAyIDE0Mi4zMjcgMTc2LjQ3NkMxNDEuNjE3IDE3Ni45NSAxNDAuNzgzIDE3Ny4yMDMgMTM5LjkzIDE3Ny4yMDNWMTc3LjIwM1pcIlxyXG4gICAgICAgICAgICAgICAgICBmaWxsPVwiIzZDNjNGRlwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgZD1cIk0xNzAuNDM1IDIyOS4yNzdDMTY1LjMxNSAyMjkuMjc3IDE2MC4zMTEgMjI3Ljc1OSAxNTYuMDU1IDIyNC45MTVDMTUxLjc5OCAyMjIuMDcxIDE0OC40ODEgMjE4LjAyOCAxNDYuNTIyIDIxMy4yOTlDMTQ0LjU2MyAyMDguNTY5IDE0NC4wNSAyMDMuMzY1IDE0NS4wNDkgMTk4LjM0NEMxNDYuMDQ4IDE5My4zMjMgMTQ4LjUxMyAxODguNzExIDE1Mi4xMzMgMTg1LjA5MkMxNTUuNzUyIDE4MS40NzIgMTYwLjM2NCAxNzkuMDA3IDE2NS4zODUgMTc4LjAwOEMxNzAuNDA2IDE3Ny4wMDkgMTc1LjYxIDE3Ny41MjIgMTgwLjM0IDE3OS40ODFDMTg1LjA2OSAxODEuNDQgMTg5LjExMSAxODQuNzU3IDE5MS45NTUgMTg5LjAxNEMxOTQuOCAxOTMuMjcgMTk2LjMxOCAxOTguMjc1IDE5Ni4zMTggMjAzLjM5NEMxOTYuMzEgMjEwLjI1NiAxOTMuNTggMjE2LjgzNSAxODguNzI4IDIyMS42ODdDMTgzLjg3NiAyMjYuNTQgMTc3LjI5NyAyMjkuMjY5IDE3MC40MzUgMjI5LjI3N1YyMjkuMjc3Wk0xNzAuNDM1IDE4Ni4xMzhDMTY3LjAyMiAxODYuMTM4IDE2My42ODYgMTg3LjE1IDE2MC44NDggMTg5LjA0NkMxNTguMDEgMTkwLjk0MiAxNTUuNzk5IDE5My42MzcgMTU0LjQ5MyAxOTYuNzlDMTUzLjE4NyAxOTkuOTQzIDE1Mi44NDUgMjAzLjQxMyAxNTMuNTExIDIwNi43NkMxNTQuMTc3IDIxMC4xMDcgMTU1LjgyIDIxMy4xODIgMTU4LjIzMyAyMTUuNTk1QzE2MC42NDYgMjE4LjAwOCAxNjMuNzIxIDIxOS42NTIgMTY3LjA2OCAyMjAuMzE3QzE3MC40MTUgMjIwLjk4MyAxNzMuODg1IDIyMC42NDIgMTc3LjAzOCAyMTkuMzM2QzE4MC4xOTEgMjE4LjAzIDE4Mi44ODYgMjE1LjgxOCAxODQuNzgyIDIxMi45OEMxODYuNjc4IDIxMC4xNDMgMTg3LjY5IDIwNi44MDYgMTg3LjY5IDIwMy4zOTRDMTg3LjY4NSAxOTguODE5IDE4NS44NjUgMTk0LjQzMyAxODIuNjMgMTkxLjE5OEMxNzkuMzk1IDE4Ny45NjMgMTc1LjAwOSAxODYuMTQ0IDE3MC40MzUgMTg2LjEzOFYxODYuMTM4WlwiXHJcbiAgICAgICAgICAgICAgICAgIGZpbGw9XCIjNkM2M0ZGXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9nPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGlkPVwibmF2YmFyTWFpbkNvbnRhaW5lclwiXHJcbiAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWJhY2tncm91bmQgdGV4dC1wcmltYXJ5ZGFyayBkYXJrOmJnLXNlY29uZGFyeSBkYXJrOnRleHQtYmFja2dyb3VuZCBmbGV4IGZsZXgtd3JhcCBweC00IHNtQ29udGFpbmVyOnB4LTggaC0xMiBvdmVyZmxvdy1oaWRkZW5cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBpZD1cIm5hdmJhckljb25cIiBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIG10LTZcIj5cclxuICAgICAgICAgIDxJbWFnZSBvbkNsaWNrPXtvbk1lbnVDbGlja30gc3JjPVwiL21vYmlsZS1uYXZiYXIvbWVudS5zdmdcIiBoZWlnaHQ9ezIwfSB3aWR0aD17MjB9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBpZD1cIm5hdmJhckNvbnRhaW5lclwiIGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGZsZXgtd3JhcFwiPlxyXG4gICAgICAgICAgey8qIFBERiBTZWN0aW9uICovfVxyXG4gICAgICAgICAgPGRpdiBpZD1cInBkZlNlY3Rpb25cIiBjbGFzc05hbWU9XCJ3LWZ1bGwganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXIgbXQtNFwiPlxyXG4gICAgICAgICAgICA8cD5TYXZlIGFzIFBERjo8L3A+XHJcbiAgICAgICAgICAgIHsvKiB7Um91dGVyLnBhdGhuYW1lLmluY2x1ZGVzKCdidXNpbmVzcy1wbGFuJykgJiYgPFBERkRvY3VtZW50IC8+fVxyXG4gICAgICAgICAgICB7Um91dGVyLnBhdGhuYW1lLmluY2x1ZGVzKCdjYXNoLWZsb3cnKSAmJiA8Q2FzaEZsb3dQREYgLz59XHJcbiAgICAgICAgICAgIHtSb3V0ZXIucGF0aG5hbWUuaW5jbHVkZXMoJ2NvbXBldGl0b3JzJykgJiYgPENvbXBldGl0b3JzUERGIC8+fSAqL31cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgey8qIFNoYXJlIGxpbmsgc2VjdGlvbiAqL31cclxuICAgICAgICAgIDxkaXYgaWQ9XCJsaW5rU2VjdGlvblwiIGNsYXNzTmFtZT1cInctZnVsbCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlciBtdC00XCI+XHJcbiAgICAgICAgICAgIDxwPlNoYXJlIHlvdXIgd29yayB3aXRoIHRoaXMgcHVibGljIGxpbms6PC9wPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4XCI+XHJcbiAgICAgICAgICAgICAgPGlucHV0IHZhbHVlPVwid3d3LnByb2plY3QuY29tXCIgY2xhc3NOYW1lPVwiYmctbGlua0JhY2tncm91bmQgdGV4dC1zbSBweC0yIHB5LTEgZGFyazp0ZXh0LXByaW1hcnlkYXJrXCIgLz5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9tb2JpbGUtbmF2YmFyL2ZvcmVpZ24uc3ZnXCIgaGVpZ2h0PXsyOH0gd2lkdGg9ezI4fSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgey8qIFdlbGNvbWUgKi99XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBtdC00IGJvcmRlci1sIGJvcmRlci1wcmltYXJ5IHBsLTJcIj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9kYXNoYm9hcmQvd2VsY29tZVwiPlxyXG4gICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgIC8vIG9uQ2xpY2s9e2FjdGl2ZUNsYXNzRm4xfVxyXG4gICAgICAgICAgICAgICAgLy8gb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRBY3RpdmVIb3ZlcjEodHJ1ZSl9XHJcbiAgICAgICAgICAgICAgICAvLyBvbk1vdXNlTGVhdmU9eygpID0+IHNldEFjdGl2ZUhvdmVyMShmYWxzZSl9XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCIzNlwiXHJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjM2XCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZpbGwtY3VycmVudCB0ZXh0LXByaW1hcnlkYXJrIGRhcms6dGV4dC1iYWNrZ3JvdW5kXCJcclxuICAgICAgICAgICAgICAgIC8vIGNsYXNzTmFtZT17YGZpbGwtY3VycmVudCB0ZXh0LXByaW1hcnlkYXJrIGRhcms6dGV4dC1iYWNrZ3JvdW5kIGJsb2NrIG0tYXV0byBvcGFjaXR5LTUwIGhvdmVyOm9wYWNpdHktMTAwIGN1cnNvci1wb2ludGVyICR7XHJcbiAgICAgICAgICAgICAgICAvLyAgIGFjdGl2ZUNsYXNzMSA/ICdvcGFjaXR5LTEwMCcgOiAnb3BhY2l0eS01MCdcclxuICAgICAgICAgICAgICAgIC8vIH1gfVxyXG4gICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDEyOCAxMjhcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkZWZzPlxyXG4gICAgICAgICAgICAgICAgICA8c3R5bGU+PC9zdHlsZT5cclxuICAgICAgICAgICAgICAgIDwvZGVmcz5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5TZWUgWW91IFNvb248L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPGcgaWQ9XCJTZWVfWW91X1Nvb25cIiBkYXRhLW5hbWU9XCJTZWUgWW91IFNvb25cIj5cclxuICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbHMtMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZD1cIk04NC44Nyw3Ny4yN2wtNy00MS4xOGE2LjYsNi42LDAsMCwwLTEzLjEsMS41OGwxLjgzLDI0LjZMNTYuOTMsMzZhNi43Myw2LjczLDAsMCwwLTEyLjc4LDQuMTdMNTEuODIsNjcsNDAuNTcsNDhhNi40NSw2LjQ1LDAsMCwwLTExLjQxLDZsOC4zMywxOC4yNC00LjU3LTYuNDVhNi40OCw2LjQ4LDAsMCwwLTEwLjksN2wyMS4yNSwzNi43MWMuMzIuNTksOCwxNC41NCwyMy4xNCwxNC41NCwyMC4wNywwLDI5Ljc0LTE1LjE3LDMyLjExLTI5LjM2LDIuMjItMTMuMzQsNC41OS0yMiw3LjY4LTI4LjIyQzExMS43NCw1NS4zNiw5Ni4zNyw0NC42Nyw4NC44Nyw3Ny4yN1ptMTkuNS0xMS43NGMtMy4xOCw2LjM2LTUuNjEsMTUuMjQtNy44NywyOC43OUM5NC4yOCwxMDcuNjksODUuMiwxMjIsNjYuNDEsMTIyYy0xMy44NiwwLTIxLjI3LTEzLjM0LTIxLjM2LTEzLjVMMjMuNzksNzEuNzVBNC40NCw0LjQ0LDAsMCwxLDMxLjI2LDY3TDQyLjEsODIuMjdhMSwxLDAsMCwwLDEuNzYtMUwzMSw1My4xNGE0LjQxLDQuNDEsMCwwLDEsNy44LTQuMDhMNTQuMSw3NC44NEExLDEsMCwwLDAsNTYsNzRMNDYuMTIsMzkuNkE0LjY4LDQuNjgsMCwwLDEsNTUsMzYuNjlMNjcuMjIsNjkuNzhhMSwxLDAsMCwwLDItLjQzTDY2Ljg0LDM3LjUyYTQuNTYsNC41NiwwLDAsMSw5LTEuMDlMODMuNTUsODEuN2ExLDEsMCwwLDAsMiwuMTFjMC0uMTcsNS4xNy0xNy44NCwxMi41NC0yMi43NUMxMDQuOTMsNTQuNDksMTA2LjQ4LDYxLjMyLDEwNC4zNyw2NS41M1pcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8cGF0aCBjbGFzc05hbWU9XCJjbHMtMVwiIGQ9XCJNMTI3LDY3aC04YTEsMSwwLDAsMCwwLDJoOEExLDEsMCwwLDAsMTI3LDY3WlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzTmFtZT1cImNscy0xXCIgZD1cIk05LDY3SDFhMSwxLDAsMCwwLDAsMkg5QTEsMSwwLDAsMCw5LDY3WlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzTmFtZT1cImNscy0xXCIgZD1cIk02NSwxM1Y1YTEsMSwwLDAsMC0yLDB2OEExLDEsMCwwLDAsNjUsMTNaXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3NOYW1lPVwiY2xzLTFcIiBkPVwiTTExMS42Myw0MS41MmMuMzksMC0uMDkuMjEsNy40NC00LjE0YTEsMSwwLDAsMC0xLTEuNzZsLTYuOTMsNEExLDEsMCwwLDAsMTExLjYzLDQxLjUyWlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzTmFtZT1cImNscy0xXCIgZD1cIk0xNS44Niw5NC42MmwtNi45Myw0YTEsMSwwLDAsMCwxLDEuNzZsNi45My00QTEsMSwwLDAsMCwxNS44Niw5NC42MlpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8cGF0aCBjbGFzc05hbWU9XCJjbHMtMVwiIGQ9XCJNMTYuODgsMzkuNjJsLTYuOTMtNGExLDEsMCwwLDAtMSwxLjc2bDYuOTMsNEExLDEsMCwwLDAsMTYuODgsMzkuNjJaXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3NOYW1lPVwiY2xzLTFcIiBkPVwiTTExOS4wNyw5OC42MmwtNi45My00YTEsMSwwLDAsMC0xLDEuNzZsNi45Myw0QTEsMSwwLDAsMCwxMTkuMDcsOTguNjJaXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3NOYW1lPVwiY2xzLTFcIiBkPVwiTTM1LjYyLDIwLjg4YTEsMSwwLDAsMCwxLjc2LTFsLTQtNi45M2ExLDEsMCwwLDAtMS43NiwxWlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzTmFtZT1cImNscy0xXCIgZD1cIk05Mi4zOCwyMC44OGw0LTYuOTNhMSwxLDAsMCwwLTEuNzYtMWwtNCw2LjkzQTEsMSwwLDAsMCw5Mi4zOCwyMC44OFpcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZGFzaGJvYXJkL3dlbGNvbWVcIj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtbC00XCI+V2VsY29tZTwvcD5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7LyogU3RhcnR1cCAqL31cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXggaXRlbXMtY2VudGVyIG10LTYgYm9yZGVyLWwgYm9yZGVyLXByaW1hcnkgcGwtMlwiPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2Rhc2hib2FyZC9zdGFydHVwXCI+XHJcbiAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgLy8gb25DbGljaz17YWN0aXZlQ2xhc3NGbjJ9XHJcbiAgICAgICAgICAgICAgICAvLyBvbk1vdXNlRW50ZXI9eygpID0+IHNldEFjdGl2ZUhvdmVyMih0cnVlKX1cclxuICAgICAgICAgICAgICAgIC8vIG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0QWN0aXZlSG92ZXIyKGZhbHNlKX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZpbGwtY3VycmVudCB0ZXh0LXByaW1hcnlkYXJrIGRhcms6dGV4dC1iYWNrZ3JvdW5kXCJcclxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjM2XCJcclxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMzZcIlxyXG4gICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDEyOCAxMjhcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkZWZzPlxyXG4gICAgICAgICAgICAgICAgICA8c3R5bGU+PC9zdHlsZT5cclxuICAgICAgICAgICAgICAgIDwvZGVmcz5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5MYW5kaW5nIFN1Y2Nlc3M8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPGcgaWQ9XCJMYW5kaW5nX1N1Y2Nlc3NcIiBkYXRhLW5hbWU9XCJMYW5kaW5nIFN1Y2Nlc3NcIj5cclxuICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbHMtMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZD1cIk0xMDkuMyw5MC4xQTQ2LDQ2LDAsMCwwLDY1LDM2VjIwLjA4YzEuNzgtLjYyLDcuMjEtMi4xNCwxMi41Ny4yM2ExOS4zMywxOS4zMywwLDAsMCwxNC44MiwwYy44Ny0uMzguNjEuMzEuNjEtMTcuOTNhMSwxLDAsMCwwLTEuNDMtLjkzYy0uMDcsMC02LjY5LDIuODctMTMuMTgsMEExOS40MSwxOS40MSwwLDAsMCw2NSwuOTMsMSwxLDAsMCwwLDYzLDFWMzZhNDUuODYsNDUuODYsMCwwLDAtMjguNjYsMTAuOEMxNi4xOCw0MC40OCw0LDQwLC43OSw0NS41MS0yLjI5LDUwLjg2LDMuOTQsNTkuMywxMCw2NS42OEExMSwxMSwwLDAsMCwxOCw4M2MuODEsMzguNDEsNDYuMDgsNTkuMiw3NS42NiwzNC4yMSw4LjUzLDMsMjksOS4xNSwzMy41NSwxLjMxQzEzMC4zOSwxMTMsMTIzLjg2LDEwMi42NSwxMDkuMyw5MC4xWk03Ny41OSwzLjMxQTE5LjM5LDE5LjM5LDAsMCwwLDkxLDMuODNWMTguNjhjLTEuNzkuNjItNy4yMiwyLjEzLTEyLjU3LS4yM0ExOS4xOSwxOS4xOSwwLDAsMCw2NSwxNy45M1YzLjA4QzY2LjgxLDIuNDYsNzIuMjQsMSw3Ny41OSwzLjMxWk02NSw0NXYtN2MzOS42OS45MSw1OCw1MC4yNywyOC4yMSw3Ni44MUM3MS4zMiwxMDcsNDYsOTIuNjYsMjcuNzcsNzguNjRhMTEsMTEsMCwwLDAtMy4yLTE2LjEzQTQzLjg4LDQzLjg4LDAsMCwxLDYzLDM4LjA2VjQ1QTEsMSwwLDAsMCw2NSw0NVpNMzIuNTUsNDguMzZhNDYuMjEsNDYuMjEsMCwwLDAtOS44MywxMy4yOCwxMC45MywxMC45MywwLDAsMC0xMS40LDIuNDdDLTguMzksNDMuMjMsNS4yMywzOS4wOCwzMi41NSw0OC4zNlpNMTAsNzJhOSw5LDAsMSwxLDksOUE5LDksMCwwLDEsMTAsNzJabTEwLDExYTExLDExLDAsMCwwLDYuMzQtMi44MmMxOC40NSwxNC4yMSw0My40NSwyOC4zNSw2NS4wNSwzNi4yMkM2MywxMzkuMTYsMjAuODMsMTE5LjEsMjAuMDUsODNabTEwNS40LDM0LjVjLTIuNTEsNC4zNS0xNCwzLjYyLTMwLTEuODVhNDUuNjEsNDUuNjEsMCwwLDAsMTMuNDItMjMuMjFDMTIxLjU5LDEwMy41OCwxMjgsMTEzLjEyLDEyNS40NSwxMTcuNDdaXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2Rhc2hib2FyZC9zdGFydHVwXCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWwtNFwiPlN0YXJ0dXAgaWRlYTwvcD5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7LyogTW90aXZhdGlvbmFsIHN0b3JpZXMgKi99XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBtdC02IGJvcmRlci1sIGJvcmRlci1wcmltYXJ5IHBsLTJcIj5cclxuICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgIC8vICAgb25DbGljaz17YWN0aXZlQ2xhc3NGbjN9XHJcbiAgICAgICAgICAgICAgLy8gICBvbk1vdXNlRW50ZXI9eygpID0+IHNldEFjdGl2ZUhvdmVyMyh0cnVlKX1cclxuICAgICAgICAgICAgICAvLyAgIG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0QWN0aXZlSG92ZXIzKGZhbHNlKX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmaWxsLWN1cnJlbnQgdGV4dC1wcmltYXJ5ZGFyayBkYXJrOnRleHQtYmFja2dyb3VuZFwiXHJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMzZcIlxyXG4gICAgICAgICAgICAgIHdpZHRoPVwiMzZcIlxyXG4gICAgICAgICAgICAgIC8vICAgY2xhc3NOYW1lPXtgZmlsbC1jdXJyZW50IHRleHQtcHJpbWFyeWRhcmsgZGFyazp0ZXh0LWJhY2tncm91bmQgYmxvY2sgbS1hdXRvIG9wYWNpdHktNTAgaG92ZXI6b3BhY2l0eS0xMDAgY3Vyc29yLXBvaW50ZXIgJHtcclxuICAgICAgICAgICAgICAvLyAgICAgYWN0aXZlQ2xhc3MzID8gJ29wYWNpdHktMTAwJyA6ICdvcGFjaXR5LTUwJ1xyXG4gICAgICAgICAgICAgIC8vICAgfWB9XHJcbiAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxMjggMTI4XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkZWZzPlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlPjwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgPC9kZWZzPlxyXG4gICAgICAgICAgICAgIDx0aXRsZT5TZWFyY2hpbmc8L3RpdGxlPlxyXG4gICAgICAgICAgICAgIDxnIGlkPVwiU2VhcmNoaW5nXCI+XHJcbiAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbHMtMVwiXHJcbiAgICAgICAgICAgICAgICAgIGQ9XCJNNzkuNTcsMzYuNDNhMjIsMjIsMCwxLDAsMCwzMS4xNEEyMiwyMiwwLDAsMCw3OS41NywzNi40M1ptLTEuNDQsMjkuN2EyMCwyMCwwLDEsMSwwLTI4LjI2QTIwLDIwLDAsMCwxLDc4LjEzLDY2LjEzWlwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xzLTFcIlxyXG4gICAgICAgICAgICAgICAgICBkPVwiTTExNywwSDMxQTExLDExLDAsMCwwLDIwLDExdjk3SDFhMSwxLDAsMCwwLTEsMXY4YTExLDExLDAsMCwwLDExLDExSDk3YTExLDExLDAsMCwwLDExLTExVjEwNGEzLjQyLDMuNDIsMCwwLDAsMi40MS0xYzQuNzEtNC43MSw1LjU5LTUuMTMsNS41OS03cy0uNjYtMi4wOC04LTkuNDJWMjBoMTlhMSwxLDAsMCwwLDEtMVYxMUExMSwxMSwwLDAsMCwxMTcsMFpNOTAuNjIsMTI2SDExYTksOSwwLDAsMS05LTl2LTdIODZDODYsMTE2LjI5LDg1LDEyMiw5MC42MiwxMjZaTTExNCw5NmMwLC43OSwwLC42MS01LDUuNTdhMS40MywxLjQzLDAsMCwxLTIsMEw4Ni40Myw4MWExLjM4LDEuMzgsMCwwLDEsMC0yYzUuMDctNS4wNyw0LjgtNSw1LjU3LTVzLS4xNy0uNzUsMTQuMjgsMTMuN0MxMTMuODcsOTUuMzEsMTE0LDk1LjExLDExNCw5NlpNODIuMzcsNzAuMzdhMjYsMjYsMCwxLDEsMC0zNi43NEEyNiwyNiwwLDAsMSw4Mi4zNyw3MC4zN1ptMi43OSwwLDMuNTIsMy41Mi0yLjgsMi44LTMuNTItMy41MkEyNi40NCwyNi40NCwwLDAsMCw4NS4xNiw3MC4zNlpNOTQuNDMsNzNhMy41MywzLjUzLDAsMCwwLTQuMjMtLjQ3bC0zLjc1LTMuNzVDMTAwLjI3LDUwLjI4LDg3LDI0LDY0LDI0QTI4LDI4LDAsMCwwLDM2LDUyYzAsMjMuMzcsMjYuNzEsMzYsNDQuNzksMjIuNDVsMy43MywzLjc0QTMuNDEsMy40MSwwLDAsMCw4NSw4Mi40M2MyMi4yMiwyMi4yMywyMC41NywyMC42MSwyMSwyMC45MlYxMTdhOSw5LDAsMCwxLTE4LDB2LThhMSwxLDAsMCwwLTEtMUgyMlYxMWE5LDksMCwwLDEsOS05Yzg1LjYsMCw3OS43NC0uMDgsNzkuNDEuMTdhMTEsMTEsMCwwLDAtNC4xNCw2LjMyYy0uNDEsMS43Ny0uMjktNC4xOS0uMjksNzZaTTEyNiwxOEgxMDhWMTFhOSw5LDAsMCwxLDE4LDBaXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWwtNFwiPk1vdGl2YXRpb25hbCBzdG9yaWVzPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7LyogQWNjb3VudCAqL31cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXggaXRlbXMtY2VudGVyIG10LTYgYm9yZGVyLWwgYm9yZGVyLXByaW1hcnkgcGwtMlwiPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2Rhc2hib2FyZC9hY2NvdW50XCI+XHJcbiAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmlsbC1jdXJyZW50IHRleHQtcHJpbWFyeWRhcmsgZGFyazp0ZXh0LWJhY2tncm91bmRcIlxyXG4gICAgICAgICAgICAgICAgLy8gICBvbkNsaWNrPXthY3RpdmVDbGFzc0ZuNH1cclxuICAgICAgICAgICAgICAgIC8vICAgb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRBY3RpdmVIb3ZlcjQodHJ1ZSl9XHJcbiAgICAgICAgICAgICAgICAvLyAgIG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0QWN0aXZlSG92ZXI0KGZhbHNlKX1cclxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjM2XCJcclxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMzZcIlxyXG4gICAgICAgICAgICAgICAgLy8gICBjbGFzc05hbWU9e2BmaWxsLWN1cnJlbnQgdGV4dC1wcmltYXJ5ZGFyayBkYXJrOnRleHQtYmFja2dyb3VuZCBibG9jayBtLWF1dG8gb3BhY2l0eS01MCBob3ZlcjpvcGFjaXR5LTEwMCBjdXJzb3ItcG9pbnRlciAke1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGFjdGl2ZUNsYXNzNCA/ICdvcGFjaXR5LTEwMCcgOiAnb3BhY2l0eS01MCdcclxuICAgICAgICAgICAgICAgIC8vICAgfWB9XHJcbiAgICAgICAgICAgICAgICBpZD1cIkRhdGFfVXNlclwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLW5hbWU9XCJEYXRhIFVzZXJcIlxyXG4gICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDEyOCAxMjhcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkZWZzPlxyXG4gICAgICAgICAgICAgICAgICA8c3R5bGU+PC9zdHlsZT5cclxuICAgICAgICAgICAgICAgIDwvZGVmcz5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5EYXRhIFVzZXI8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xzLTFcIlxyXG4gICAgICAgICAgICAgICAgICBkPVwiTTEwOSwwSDIzYTksOSwwLDAsMC05LDljMCwxMTgsMCwxMTAsMCwxMTAuNjRBOS4yMiw5LjIyLDAsMCwwLDIzLjMxLDEyOEgxMDlhNSw1LDAsMCwwLDUtNVY1QTUsNSwwLDAsMCwxMDksMFptMyw1VjEwN2EzLDMsMCwwLDEtMywzSDI2VjJoODNBMywzLDAsMCwxLDExMiw1Wk0xNiw5YTcsNywwLDAsMSw3LTdoMVYxMTBIMjNhOSw5LDAsMCwwLTYuOTQsMy4yNkMxNiwxMTMuMzQsMTYsMTE4LjI4LDE2LDlabTk2LDExNGEzLDMsMCwwLDEtMywzSDIzLjMxYy02LjEzLDAtOS41Ni02Ljk0LTUuNjgtMTEuNDNBNi45MSw2LjkxLDAsMCwxLDIzLDExMmM5MC45MSwwLDg3LjA2LjQ0LDg5LTFaXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbHMtMVwiXHJcbiAgICAgICAgICAgICAgICAgIGQ9XCJNNTYuMTUsNzUuODFBMzMsMzMsMCwxLDAsMzUsNDUsMzMuMDUsMzMuMDUsMCwwLDAsNTYuMTUsNzUuODFabS03LjUzLTYuNjhjNS44OS0yMi44MiwzMi44Ni0yMi44MywzOC43NiwwQTMwLjg4LDMwLjg4LDAsMCwxLDQ4LjYyLDY5LjEzWk02OCwxNGMyOC4wNywwLDQxLjYxLDM0LjUxLDIxLjA5LDUzLjY1Qzg2LjU2LDU5LDgwLjgyLDUyLjgzLDczLjU3LDUwLjc1YTEzLDEzLDAsMSwwLTExLjE0LDBjLTcuMjUsMi4wOC0xMyw4LjI0LTE1LjUyLDE2LjkyQzI2LjQ1LDQ4LjY5LDM5LjgsMTQsNjgsMTRabTAsMzZBMTEsMTEsMCwxLDEsNzksMzksMTEsMTEsMCwwLDEsNjgsNTBaXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8cGF0aCBjbGFzc05hbWU9XCJjbHMtMVwiIGQ9XCJNOTYuNSw4N2gtNTZhMSwxLDAsMCwwLDAsMmg1NkExLDEsMCwwLDAsOTYuNSw4N1pcIiAvPlxyXG4gICAgICAgICAgICAgICAgPHBhdGggY2xhc3NOYW1lPVwiY2xzLTFcIiBkPVwiTTk2LjUsOTloLTU2YTEsMSwwLDAsMCwwLDJoNTZBMSwxLDAsMCwwLDk2LjUsOTlaXCIgLz5cclxuICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2Rhc2hib2FyZC9hY2NvdW50XCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWwtNFwiPkFjY291bnQ8L3A+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgey8qIExvZyBvdXQgKi99XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBtdC02IGJvcmRlci1sIGJvcmRlci1wcmltYXJ5IHBsLTJcIj5cclxuICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZpbGwtY3VycmVudCB0ZXh0LXByaW1hcnlkYXJrIGRhcms6dGV4dC1iYWNrZ3JvdW5kXCJcclxuICAgICAgICAgICAgICAvLyAgIG9uQ2xpY2s9e2FjdGl2ZUNsYXNzRm41fVxyXG4gICAgICAgICAgICAgIC8vICAgb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRBY3RpdmVIb3ZlcjUodHJ1ZSl9XHJcbiAgICAgICAgICAgICAgLy8gICBvbk1vdXNlTGVhdmU9eygpID0+IHNldEFjdGl2ZUhvdmVyNShmYWxzZSl9XHJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMzZcIlxyXG4gICAgICAgICAgICAgIHdpZHRoPVwiMzZcIlxyXG4gICAgICAgICAgICAgIC8vICAgY2xhc3NOYW1lPXtgZmlsbC1jdXJyZW50IHRleHQtcHJpbWFyeWRhcmsgZGFyazp0ZXh0LWJhY2tncm91bmQgYmxvY2sgbS1hdXRvIG9wYWNpdHktNTAgaG92ZXI6b3BhY2l0eS0xMDAgY3Vyc29yLXBvaW50ZXIgJHtcclxuICAgICAgICAgICAgICAvLyAgICAgYWN0aXZlQ2xhc3M1ID8gJ29wYWNpdHktMTAwJyA6ICdvcGFjaXR5LTUwJ1xyXG4gICAgICAgICAgICAgIC8vICAgfWB9XHJcbiAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxMjggMTI4XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkZWZzPlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlPjwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgPC9kZWZzPlxyXG4gICAgICAgICAgICAgIDx0aXRsZT5Mb2cgT3V0PC90aXRsZT5cclxuICAgICAgICAgICAgICA8ZyBpZD1cIkxvZ19PdXRcIiBkYXRhLW5hbWU9XCJMb2cgT3V0XCI+XHJcbiAgICAgICAgICAgICAgICA8cGF0aCBjbGFzc05hbWU9XCJjbHMtMVwiIGQ9XCJNNDQsNjF2NmExLDEsMCwwLDAsMiwwVjYxQTEsMSwwLDAsMCw0NCw2MVpcIiAvPlxyXG4gICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xzLTFcIlxyXG4gICAgICAgICAgICAgICAgICBkPVwiTTExMywxMTNIODZWNzVoNnY5YTEsMSwwLDAsMCwxLDFjLjY0LDAtLjgzLDEuMjYsMjAuNzItMjAuM2ExLDEsMCwwLDAsMC0xLjQ0bC0yMC0yMEExLDEsMCwwLDAsOTIsNDR2OUg4NlYxNGExLDEsMCwwLDAtMS0xSDU0VjFhMSwxLDAsMCwwLTEuMzUtMWwtMzgsMTNBMSwxLDAsMCwwLDE0LDE0YzAsMTA2LjU4LS4zOCwxMDAuNi42OSwxMDFDNTUuMzQsMTI4Ljg4LDUyLjc0LDEyOCw1MywxMjhhMSwxLDAsMCwwLDEtMVYxMTVoNTlBMSwxLDAsMCwwLDExMywxMTNaTTkzLDU1YTEsMSwwLDAsMCwxLTFWNDYuNDZMMTExLjU2LDY0LDk0LDgxLjU0Vjc0YTEsMSwwLDAsMC0xLTFINTRWNTVaTTU0LDIxSDc3VjUzSDU0Wm0zMC02VjUzSDc5VjIwYTEsMSwwLDAsMC0xLTFINTRWMTVaTTUyLDEyNS41N2wtMzYtMTIuM1YxNC43M0w1MiwyLjQzWk01NCw3NUg3N3YzOEg1NFptMjUsMzhWNzVoNXYzOFpcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtbC00XCI+TG9nIG91dDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vYmlsZU5hdmJhcjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlU3RhdGUsIGNyZWF0ZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IGdzYXAsIHsgUG93ZXIxLCBQb3dlcjQgfSBmcm9tICdnc2FwJztcclxuXHJcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSAnbmV4dC10aGVtZXMnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tICcuLi8uLi9saWIvbmV3QXV0aCc7XHJcblxyXG4vLyBNb2JpbGUgZnJpZW5kbHlcclxuaW1wb3J0IHsgdXNlV2luZG93U2l6ZSB9IGZyb20gJy4uLy4uL3V0aWxzL3VzZVdpbmRvd1NpemUnO1xyXG5pbXBvcnQgTW9iaWxlTmF2YmFyIGZyb20gJy4vTW9iaWxlTmF2YmFyJztcclxuaW1wb3J0IERlc2t0b3BOYXZiYXIgZnJvbSAnLi9EZXNrdG9wTmF2YmFyJztcclxuaW1wb3J0IHsgaXNNb2JpbGUgfSBmcm9tICdyZWFjdC1kZXZpY2UtZGV0ZWN0JztcclxuXHJcbmNvbnN0IE5hdmJhciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICAvLyBNb2JpbGUgZnJpZW5kbHlcclxuICAvLyBjb25zdCBzaXplID0gdXNlV2luZG93U2l6ZSgpO1xyXG4gIGNvbnN0IHNpemUgPSB7IHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCB9O1xyXG4gIGNvbnNvbGUubG9nKHNpemUpO1xyXG5cclxuICByZXR1cm4gPD57aXNNb2JpbGUgPyA8TW9iaWxlTmF2YmFyIGNoaWxkcmVuPXtjaGlsZHJlbn0gLz4gOiA8RGVza3RvcE5hdmJhciBjaGlsZHJlbj17Y2hpbGRyZW59IC8+fTwvPjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcclxuIiwiaW1wb3J0IGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlL2FwcCc7XHJcbmltcG9ydCAnZmlyZWJhc2UvYXV0aCc7XHJcbmltcG9ydCAnZmlyZWJhc2UvZmlyZXN0b3JlJztcclxuaW1wb3J0ICdmaXJlYmFzZS9zdG9yYWdlJztcclxuaW1wb3J0ICdmaXJlYmFzZS9mdW5jdGlvbnMnO1xyXG5cclxuaWYgKCFmaXJlYmFzZS5hcHBzLmxlbmd0aCkge1xyXG4gIGZpcmViYXNlLmluaXRpYWxpemVBcHAoe1xyXG4gICAgLy8gYXBpS2V5OiAnQUl6YVN5Q3hfVDBEcWl4TDNBWF9RTGwtajhYRHlnR3A5MUMtMy1RJyxcclxuICAgIC8vIGF1dGhEb21haW46ICdzdGFydHVwLXRlc3QtNGQ2MjUuZmlyZWJhc2VhcHAuY29tJyxcclxuICAgIC8vIHByb2plY3RJZDogJ3N0YXJ0dXAtdGVzdC00ZDYyNScsXHJcbiAgICAvLyBzdG9yYWdlQnVja2V0OiAnc3RhcnR1cC10ZXN0LTRkNjI1LmFwcHNwb3QuY29tJyxcclxuICAgIC8vIG1lc3NhZ2luZ1NlbmRlcklkOiAnNDcyNDE2MTUwMjQwJyxcclxuICAgIC8vIGFwcElkOiAnMTo0NzI0MTYxNTAyNDA6d2ViOmIyYTEyOGFkMjdhZmZmZGRmM2U2ODUnLFxyXG4gICAgYXBpS2V5OiAnQUl6YVN5Qk9TZnVBZjdWQUs5WWVjMjBsR3JEXzZicTVNTlJtOXNFJyxcclxuICAgIGF1dGhEb21haW46ICdzYWFzLXN0YXJ0dXAtYTVhMzQuZmlyZWJhc2VhcHAuY29tJyxcclxuICAgIHByb2plY3RJZDogJ3NhYXMtc3RhcnR1cC1hNWEzNCcsXHJcbiAgICBzdG9yYWdlQnVja2V0OiAnc2Fhcy1zdGFydHVwLWE1YTM0LmFwcHNwb3QuY29tJyxcclxuICAgIG1lc3NhZ2luZ1NlbmRlcklkOiAnODY0MjE3NTc0NjI1JyxcclxuICAgIGFwcElkOiAnMTo4NjQyMTc1NzQ2MjU6d2ViOjE5Y2Y1OTAxMDllZjUwZGQ5MzViYTAnLFxyXG4gICAgbWVhc3VyZW1lbnRJZDogJ0ctUUtaSlBUS01TNCcsXHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZpcmViYXNlO1xyXG5leHBvcnQgY29uc3QgYXV0aCA9IGZpcmViYXNlLmF1dGgoKTtcclxuZXhwb3J0IGNvbnN0IGRiID0gZmlyZWJhc2UuZmlyZXN0b3JlKCk7XHJcbmV4cG9ydCBjb25zdCBzdG9yYWdlID0gZmlyZWJhc2Uuc3RvcmFnZSgpO1xyXG4iLCJpbXBvcnQgZmlyZWJhc2UsIHsgYXV0aCwgZGIgfSBmcm9tICcuLi9saWIvZmlyZWJhc2UnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgY3JlYXRlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpOyAvLyBUdXRhaiBtb8W8bmEgdW1pZcWbY2nEhyBkZWZhdWx0IFZhbHVlXHJcblxyXG5leHBvcnQgY29uc3QgdXNlQXV0aCA9ICgpID0+IHtcclxuICByZXR1cm4gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgQXV0aFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IFtjdXJyZW50VXNlciwgc2V0Q3VycmVudFVzZXJdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlVXNlciA9IGFzeW5jICh1c2VyKSA9PiB7XHJcbiAgICBpZiAodXNlcikge1xyXG4gICAgICBDb29raWVzLnNldCgndWlkJywgdXNlci51aWQsIHRydWUpO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZygndXNlciAtICcsIHVzZXIpO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZygndXNlciBuYW1lIC0gJywgbmFtZSk7XHJcbiAgICAgIGNvbnN0IGZvcm1hdGVkVXNlciA9IGF3YWl0IGZvcm1hdFVzZXIodXNlcik7XHJcblxyXG4gICAgICAvLyBjb25zdCBkZWNvZGVkVG9rZW4gPSBhd2FpdCBmaXJlYmFzZS5hdXRoKCkuY3VycmVudFVzZXIuZ2V0SWRUb2tlblJlc3VsdCgpO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhkZWNvZGVkVG9rZW4uY2xhaW1zLnN0cmlwZVJvbGUpO1xyXG5cclxuICAgICAgZGIuY29sbGVjdGlvbigndXNlcnMnKS5kb2ModXNlci51aWQpLnNldCh7IGZvcm1hdGVkVXNlciB9LCB7IG1lcmdlOiB0cnVlIH0pO1xyXG5cclxuICAgICAgc2V0Q3VycmVudFVzZXIoZm9ybWF0ZWRVc2VyKTtcclxuICAgICAgLy8gQ29va2llcy5zZXQoJ3Rva2VuJywgdXNlci56YSwgdHJ1ZSk7XHJcblxyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgcmV0dXJuIGZvcm1hdGVkVXNlcjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldEN1cnJlbnRVc2VyKGZhbHNlKTtcclxuICAgICAgLy8gQ29va2llcy5yZW1vdmUoJ3Rva2VuJywgdXNlci56YSk7XHJcbiAgICAgIENvb2tpZXMucmVtb3ZlKCd1aWQnKTtcclxuXHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2lnblVwID0gYXN5bmMgKGVtYWlsLCBwYXNzd29yZCkgPT4ge1xyXG4gICAgcmV0dXJuIGF3YWl0IGF1dGguY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIGhhbmRsZVVzZXIocmVzcG9uc2UudXNlcik7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBsb2dJbiA9IChlbWFpbCwgcGFzc3dvcmQpID0+IHtcclxuICAgIHJldHVybiBhdXRoLnNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbG9nT3V0ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIGF1dGguc2lnbk91dCgpO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB1bnN1YnNjcmliZSA9IGF1dGgub25JZFRva2VuQ2hhbmdlZChoYW5kbGVVc2VyKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4gdW5zdWJzY3JpYmUoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IHZhbHVlID0ge1xyXG4gICAgY3VycmVudFVzZXIsXHJcbiAgICBzaWduVXAsXHJcbiAgICBsb2dJbixcclxuICAgIGxvZ091dCxcclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRTdHJpcGVSb2xlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgYXdhaXQgZmlyZWJhc2UuYXV0aCgpLmN1cnJlbnRVc2VyLmdldElkVG9rZW4odHJ1ZSk7XHJcbiAgICBjb25zdCBkZWNvZGVkVG9rZW4gPSBhd2FpdCBmaXJlYmFzZS5hdXRoKCkuY3VycmVudFVzZXIuZ2V0SWRUb2tlblJlc3VsdCgpO1xyXG4gICAgcmV0dXJuIGRlY29kZWRUb2tlbi5jbGFpbXMuc3RyaXBlUm9sZSB8fCAnZnJlZSc7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZm9ybWF0VXNlciA9IGFzeW5jICh1c2VyKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnT0ZGIC0gJywgdXNlcik7XHJcbiAgICBjb25zdCB0b2tlbiA9IGF3YWl0IHVzZXIuZ2V0SWRUb2tlbigpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdWlkOiB1c2VyLnVpZCxcclxuICAgICAgZW1haWw6IHVzZXIuZW1haWwsXHJcbiAgICAgIC8vIG5hbWUsXHJcbiAgICAgIC8vIHRva2VuOiB1c2VyLnphLCAvLyB0b2tlbiBKV1QsIGdlbmVyb3dhbnkgYXV0b21hdHljem5pZSBwcnpleiBmaXJlYmFzZSBwcnp5IHpha8WCYWRhbml1IGtvbnRhXHJcbiAgICAgIHByb3ZpZGVyOiB1c2VyLnByb3ZpZGVyRGF0YVswXS5wcm92aWRlcklkLFxyXG4gICAgICBzdHJpcGVSb2xlOiBhd2FpdCBnZXRTdHJpcGVSb2xlKCksXHJcbiAgICAgIHRva2VuLFxyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gPEF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt2YWx1ZX0+eyFsb2FkaW5nICYmIGNoaWxkcmVufTwvQXV0aENvbnRleHQuUHJvdmlkZXI+O1xyXG59O1xyXG4iLCJjb25zdCB0aXRsZSA9ICdOdW1iZXIgIzEgc3RhcnR1cCBwbGFubmluZyBhbmQgYW5hbHlzaXMgdG9vbCc7XHJcbmNvbnN0IGRlc2NyaXB0aW9uID0gJ0J5IHVzaW5nICoqKioqKiB5b3UgY2FuIGVhc2lseSBncm93IHlvdXIgYnVzaW5lc3MgaWRlYSB0byB0aGUgbmV4dCBsZXZlbCc7XHJcblxyXG5jb25zdCBTRU8gPSB7XHJcbiAgdGl0bGUsXHJcbiAgZGVzY3JpcHRpb24sXHJcbiAgY2Fub25pY2FsOiAnaHR0cHM6Ly9zdXBlcnN3ZWV0Y2hpbGxpLm9ubGluZScsIC8vIFRoaXMgb25lIGlzIGZvciBnb29nbGUgdG8ga25vdywgd2hhdCB0aGUgbWFqb3IgcGxhY2Ugb2YgdGhlIGNvbnRlbnQgZm91bmQgc29tZXdoZXJlIGlzID8/XHJcbiAgb3BlbkdyYXBoOiB7XHJcbiAgICAvLyBUbyBqZXN0IHRha2llLCBqYWsgd3lzecWCYSBzacSZIGxpbmthIGkgcG9qYXdpYSBzacSZIHBvdGVtIHRha2kgb2JyYXplayAoY2h5YmEpLCBubyB3IGthxbxkeW0gYsSFZMW6IHJhemllLCBtdXN0IGhhdmUhXHJcbiAgICB0eXBlOiAnd2Vic2l0ZScsXHJcbiAgICBsb2NhbGU6ICdlbl9JRScsXHJcbiAgICB1cmw6ICdodHRwczovL3N1cGVyc3dlZXRjaGlsbGkub25saW5lJyxcclxuICAgIHRpdGxlLFxyXG4gICAgZGVzY3JpcHRpb24sXHJcbiAgICBpbWFnZXM6IFtcclxuICAgICAge1xyXG4gICAgICAgIHVybDogJ2h0dHBzOi8vc3VwZXJzd2VldGNoaWxsaS5vbmxpbmUvaW1hZ2VzL29wZW5HcmFwSW1hZ2UucG5nLi4uJywgLy8gVHV0YWogbW/FvGVzeiBzb2JpZSBwb2RlanJ6ZcSHIG5hIHN3b2plaiBzdHJvbmllLCBqYWsgd3lnbMSFZGEgemRqxJljaWUsIGt0w7NyZSBixJlkemllIHcgVHdvaW0gb3BlbkdyYXBoJ2llXHJcbiAgICAgICAgYWx0OiB0aXRsZSxcclxuICAgICAgICB3aWR0aDogMTI4MCxcclxuICAgICAgICBoZWlnaHQ6IDcyMCxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNFTztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL2hlYWQnXG5pbXBvcnQgeyB0b0Jhc2U2NCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0J1xuaW1wb3J0IHtcbiAgSW1hZ2VDb25maWcsXG4gIGltYWdlQ29uZmlnRGVmYXVsdCxcbiAgTG9hZGVyVmFsdWUsXG4gIFZBTElEX0xPQURFUlMsXG59IGZyb20gJy4uL25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcnXG5pbXBvcnQgeyB1c2VJbnRlcnNlY3Rpb24gfSBmcm9tICcuL3VzZS1pbnRlcnNlY3Rpb24nXG5cbmlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICA7KGdsb2JhbCBhcyBhbnkpLl9fTkVYVF9JTUFHRV9JTVBPUlRFRCA9IHRydWVcbn1cblxuY29uc3QgVkFMSURfTE9BRElOR19WQUxVRVMgPSBbJ2xhenknLCAnZWFnZXInLCB1bmRlZmluZWRdIGFzIGNvbnN0XG50eXBlIExvYWRpbmdWYWx1ZSA9IHR5cGVvZiBWQUxJRF9MT0FESU5HX1ZBTFVFU1tudW1iZXJdXG5cbmV4cG9ydCB0eXBlIEltYWdlTG9hZGVyID0gKHJlc29sdmVyUHJvcHM6IEltYWdlTG9hZGVyUHJvcHMpID0+IHN0cmluZ1xuXG5leHBvcnQgdHlwZSBJbWFnZUxvYWRlclByb3BzID0ge1xuICBzcmM6IHN0cmluZ1xuICB3aWR0aDogbnVtYmVyXG4gIHF1YWxpdHk/OiBudW1iZXJcbn1cblxudHlwZSBEZWZhdWx0SW1hZ2VMb2FkZXJQcm9wcyA9IEltYWdlTG9hZGVyUHJvcHMgJiB7IHJvb3Q6IHN0cmluZyB9XG5cbmNvbnN0IGxvYWRlcnMgPSBuZXcgTWFwPFxuICBMb2FkZXJWYWx1ZSxcbiAgKHByb3BzOiBEZWZhdWx0SW1hZ2VMb2FkZXJQcm9wcykgPT4gc3RyaW5nXG4+KFtcbiAgWydpbWdpeCcsIGltZ2l4TG9hZGVyXSxcbiAgWydjbG91ZGluYXJ5JywgY2xvdWRpbmFyeUxvYWRlcl0sXG4gIFsnYWthbWFpJywgYWthbWFpTG9hZGVyXSxcbiAgWydkZWZhdWx0JywgZGVmYXVsdExvYWRlcl0sXG5dKVxuXG5jb25zdCBWQUxJRF9MQVlPVVRfVkFMVUVTID0gW1xuICAnZmlsbCcsXG4gICdmaXhlZCcsXG4gICdpbnRyaW5zaWMnLFxuICAncmVzcG9uc2l2ZScsXG4gIHVuZGVmaW5lZCxcbl0gYXMgY29uc3RcbnR5cGUgTGF5b3V0VmFsdWUgPSB0eXBlb2YgVkFMSURfTEFZT1VUX1ZBTFVFU1tudW1iZXJdXG5cbnR5cGUgSW1nRWxlbWVudFN0eWxlID0gTm9uTnVsbGFibGU8SlNYLkludHJpbnNpY0VsZW1lbnRzWydpbWcnXVsnc3R5bGUnXT5cblxuZXhwb3J0IHR5cGUgSW1hZ2VQcm9wcyA9IE9taXQ8XG4gIEpTWC5JbnRyaW5zaWNFbGVtZW50c1snaW1nJ10sXG4gICdzcmMnIHwgJ3NyY1NldCcgfCAncmVmJyB8ICd3aWR0aCcgfCAnaGVpZ2h0JyB8ICdsb2FkaW5nJyB8ICdzdHlsZSdcbj4gJiB7XG4gIHNyYzogc3RyaW5nXG4gIGxvYWRlcj86IEltYWdlTG9hZGVyXG4gIHF1YWxpdHk/OiBudW1iZXIgfCBzdHJpbmdcbiAgcHJpb3JpdHk/OiBib29sZWFuXG4gIGxvYWRpbmc/OiBMb2FkaW5nVmFsdWVcbiAgdW5vcHRpbWl6ZWQ/OiBib29sZWFuXG4gIG9iamVjdEZpdD86IEltZ0VsZW1lbnRTdHlsZVsnb2JqZWN0Rml0J11cbiAgb2JqZWN0UG9zaXRpb24/OiBJbWdFbGVtZW50U3R5bGVbJ29iamVjdFBvc2l0aW9uJ11cbn0gJiAoXG4gICAgfCB7XG4gICAgICAgIHdpZHRoPzogbmV2ZXJcbiAgICAgICAgaGVpZ2h0PzogbmV2ZXJcbiAgICAgICAgLyoqIEBkZXByZWNhdGVkIFVzZSBgbGF5b3V0PVwiZmlsbFwiYCBpbnN0ZWFkICovXG4gICAgICAgIHVuc2l6ZWQ6IHRydWVcbiAgICAgIH1cbiAgICB8IHsgd2lkdGg/OiBuZXZlcjsgaGVpZ2h0PzogbmV2ZXI7IGxheW91dDogJ2ZpbGwnIH1cbiAgICB8IHtcbiAgICAgICAgd2lkdGg6IG51bWJlciB8IHN0cmluZ1xuICAgICAgICBoZWlnaHQ6IG51bWJlciB8IHN0cmluZ1xuICAgICAgICBsYXlvdXQ/OiBFeGNsdWRlPExheW91dFZhbHVlLCAnZmlsbCc+XG4gICAgICB9XG4gIClcblxuY29uc3Qge1xuICBkZXZpY2VTaXplczogY29uZmlnRGV2aWNlU2l6ZXMsXG4gIGltYWdlU2l6ZXM6IGNvbmZpZ0ltYWdlU2l6ZXMsXG4gIGxvYWRlcjogY29uZmlnTG9hZGVyLFxuICBwYXRoOiBjb25maWdQYXRoLFxuICBkb21haW5zOiBjb25maWdEb21haW5zLFxufSA9XG4gICgocHJvY2Vzcy5lbnYuX19ORVhUX0lNQUdFX09QVFMgYXMgYW55KSBhcyBJbWFnZUNvbmZpZykgfHwgaW1hZ2VDb25maWdEZWZhdWx0XG4vLyBzb3J0IHNtYWxsZXN0IHRvIGxhcmdlc3RcbmNvbnN0IGFsbFNpemVzID0gWy4uLmNvbmZpZ0RldmljZVNpemVzLCAuLi5jb25maWdJbWFnZVNpemVzXVxuY29uZmlnRGV2aWNlU2l6ZXMuc29ydCgoYSwgYikgPT4gYSAtIGIpXG5hbGxTaXplcy5zb3J0KChhLCBiKSA9PiBhIC0gYilcblxuZnVuY3Rpb24gZ2V0V2lkdGhzKFxuICB3aWR0aDogbnVtYmVyIHwgdW5kZWZpbmVkLFxuICBsYXlvdXQ6IExheW91dFZhbHVlLFxuICBzaXplczogc3RyaW5nIHwgdW5kZWZpbmVkXG4pOiB7IHdpZHRoczogbnVtYmVyW107IGtpbmQ6ICd3JyB8ICd4JyB9IHtcbiAgaWYgKHNpemVzICYmIChsYXlvdXQgPT09ICdmaWxsJyB8fCBsYXlvdXQgPT09ICdyZXNwb25zaXZlJykpIHtcbiAgICAvLyBGaW5kIGFsbCB0aGUgXCJ2d1wiIHBlcmNlbnQgc2l6ZXMgdXNlZCBpbiB0aGUgc2l6ZXMgcHJvcFxuICAgIGNvbnN0IHBlcmNlbnRTaXplcyA9IFsuLi5zaXplcy5tYXRjaEFsbCgvKF58XFxzKSgxP1xcZD9cXGQpdncvZyldLm1hcCgobSkgPT5cbiAgICAgIHBhcnNlSW50KG1bMl0pXG4gICAgKVxuICAgIGlmIChwZXJjZW50U2l6ZXMubGVuZ3RoKSB7XG4gICAgICBjb25zdCBzbWFsbGVzdFJhdGlvID0gTWF0aC5taW4oLi4ucGVyY2VudFNpemVzKSAqIDAuMDFcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdpZHRoczogYWxsU2l6ZXMuZmlsdGVyKFxuICAgICAgICAgIChzKSA9PiBzID49IGNvbmZpZ0RldmljZVNpemVzWzBdICogc21hbGxlc3RSYXRpb1xuICAgICAgICApLFxuICAgICAgICBraW5kOiAndycsXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7IHdpZHRoczogYWxsU2l6ZXMsIGtpbmQ6ICd3JyB9XG4gIH1cbiAgaWYgKFxuICAgIHR5cGVvZiB3aWR0aCAhPT0gJ251bWJlcicgfHxcbiAgICBsYXlvdXQgPT09ICdmaWxsJyB8fFxuICAgIGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnXG4gICkge1xuICAgIHJldHVybiB7IHdpZHRoczogY29uZmlnRGV2aWNlU2l6ZXMsIGtpbmQ6ICd3JyB9XG4gIH1cblxuICBjb25zdCB3aWR0aHMgPSBbXG4gICAgLi4ubmV3IFNldChcbiAgICAgIC8vID4gVGhpcyBtZWFucyB0aGF0IG1vc3QgT0xFRCBzY3JlZW5zIHRoYXQgc2F5IHRoZXkgYXJlIDN4IHJlc29sdXRpb24sXG4gICAgICAvLyA+IGFyZSBhY3R1YWxseSAzeCBpbiB0aGUgZ3JlZW4gY29sb3IsIGJ1dCBvbmx5IDEuNXggaW4gdGhlIHJlZCBhbmRcbiAgICAgIC8vID4gYmx1ZSBjb2xvcnMuIFNob3dpbmcgYSAzeCByZXNvbHV0aW9uIGltYWdlIGluIHRoZSBhcHAgdnMgYSAyeFxuICAgICAgLy8gPiByZXNvbHV0aW9uIGltYWdlIHdpbGwgYmUgdmlzdWFsbHkgdGhlIHNhbWUsIHRob3VnaCB0aGUgM3ggaW1hZ2VcbiAgICAgIC8vID4gdGFrZXMgc2lnbmlmaWNhbnRseSBtb3JlIGRhdGEuIEV2ZW4gdHJ1ZSAzeCByZXNvbHV0aW9uIHNjcmVlbnMgYXJlXG4gICAgICAvLyA+IHdhc3RlZnVsIGFzIHRoZSBodW1hbiBleWUgY2Fubm90IHNlZSB0aGF0IGxldmVsIG9mIGRldGFpbCB3aXRob3V0XG4gICAgICAvLyA+IHNvbWV0aGluZyBsaWtlIGEgbWFnbmlmeWluZyBnbGFzcy5cbiAgICAgIC8vIGh0dHBzOi8vYmxvZy50d2l0dGVyLmNvbS9lbmdpbmVlcmluZy9lbl91cy90b3BpY3MvaW5mcmFzdHJ1Y3R1cmUvMjAxOS9jYXBwaW5nLWltYWdlLWZpZGVsaXR5LW9uLXVsdHJhLWhpZ2gtcmVzb2x1dGlvbi1kZXZpY2VzLmh0bWxcbiAgICAgIFt3aWR0aCwgd2lkdGggKiAyIC8qLCB3aWR0aCAqIDMqL10ubWFwKFxuICAgICAgICAodykgPT4gYWxsU2l6ZXMuZmluZCgocCkgPT4gcCA+PSB3KSB8fCBhbGxTaXplc1thbGxTaXplcy5sZW5ndGggLSAxXVxuICAgICAgKVxuICAgICksXG4gIF1cbiAgcmV0dXJuIHsgd2lkdGhzLCBraW5kOiAneCcgfVxufVxuXG50eXBlIEdlbkltZ0F0dHJzRGF0YSA9IHtcbiAgc3JjOiBzdHJpbmdcbiAgdW5vcHRpbWl6ZWQ6IGJvb2xlYW5cbiAgbGF5b3V0OiBMYXlvdXRWYWx1ZVxuICBsb2FkZXI6IEltYWdlTG9hZGVyXG4gIHdpZHRoPzogbnVtYmVyXG4gIHF1YWxpdHk/OiBudW1iZXJcbiAgc2l6ZXM/OiBzdHJpbmdcbn1cblxudHlwZSBHZW5JbWdBdHRyc1Jlc3VsdCA9IHtcbiAgc3JjOiBzdHJpbmdcbiAgc3JjU2V0OiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgc2l6ZXM6IHN0cmluZyB8IHVuZGVmaW5lZFxufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUltZ0F0dHJzKHtcbiAgc3JjLFxuICB1bm9wdGltaXplZCxcbiAgbGF5b3V0LFxuICB3aWR0aCxcbiAgcXVhbGl0eSxcbiAgc2l6ZXMsXG4gIGxvYWRlcixcbn06IEdlbkltZ0F0dHJzRGF0YSk6IEdlbkltZ0F0dHJzUmVzdWx0IHtcbiAgaWYgKHVub3B0aW1pemVkKSB7XG4gICAgcmV0dXJuIHsgc3JjLCBzcmNTZXQ6IHVuZGVmaW5lZCwgc2l6ZXM6IHVuZGVmaW5lZCB9XG4gIH1cblxuICBjb25zdCB7IHdpZHRocywga2luZCB9ID0gZ2V0V2lkdGhzKHdpZHRoLCBsYXlvdXQsIHNpemVzKVxuICBjb25zdCBsYXN0ID0gd2lkdGhzLmxlbmd0aCAtIDFcblxuICByZXR1cm4ge1xuICAgIHNpemVzOiAhc2l6ZXMgJiYga2luZCA9PT0gJ3cnID8gJzEwMHZ3JyA6IHNpemVzLFxuICAgIHNyY1NldDogd2lkdGhzXG4gICAgICAubWFwKFxuICAgICAgICAodywgaSkgPT5cbiAgICAgICAgICBgJHtsb2FkZXIoeyBzcmMsIHF1YWxpdHksIHdpZHRoOiB3IH0pfSAke1xuICAgICAgICAgICAga2luZCA9PT0gJ3cnID8gdyA6IGkgKyAxXG4gICAgICAgICAgfSR7a2luZH1gXG4gICAgICApXG4gICAgICAuam9pbignLCAnKSxcblxuICAgIC8vIEl0J3MgaW50ZW5kZWQgdG8ga2VlcCBgc3JjYCB0aGUgbGFzdCBhdHRyaWJ1dGUgYmVjYXVzZSBSZWFjdCB1cGRhdGVzXG4gICAgLy8gYXR0cmlidXRlcyBpbiBvcmRlci4gSWYgd2Uga2VlcCBgc3JjYCB0aGUgZmlyc3Qgb25lLCBTYWZhcmkgd2lsbFxuICAgIC8vIGltbWVkaWF0ZWx5IHN0YXJ0IHRvIGZldGNoIGBzcmNgLCBiZWZvcmUgYHNpemVzYCBhbmQgYHNyY1NldGAgYXJlIGV2ZW5cbiAgICAvLyB1cGRhdGVkIGJ5IFJlYWN0LiBUaGF0IGNhdXNlcyBtdWx0aXBsZSB1bm5lY2Vzc2FyeSByZXF1ZXN0cyBpZiBgc3JjU2V0YFxuICAgIC8vIGFuZCBgc2l6ZXNgIGFyZSBkZWZpbmVkLlxuICAgIC8vIFRoaXMgYnVnIGNhbm5vdCBiZSByZXByb2R1Y2VkIGluIENocm9tZSBvciBGaXJlZm94LlxuICAgIHNyYzogbG9hZGVyKHsgc3JjLCBxdWFsaXR5LCB3aWR0aDogd2lkdGhzW2xhc3RdIH0pLFxuICB9XG59XG5cbmZ1bmN0aW9uIGdldEludCh4OiB1bmtub3duKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgaWYgKHR5cGVvZiB4ID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiB4XG4gIH1cbiAgaWYgKHR5cGVvZiB4ID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBwYXJzZUludCh4LCAxMClcbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkXG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRJbWFnZUxvYWRlcihsb2FkZXJQcm9wczogSW1hZ2VMb2FkZXJQcm9wcykge1xuICBjb25zdCBsb2FkID0gbG9hZGVycy5nZXQoY29uZmlnTG9hZGVyKVxuICBpZiAobG9hZCkge1xuICAgIHJldHVybiBsb2FkKHsgcm9vdDogY29uZmlnUGF0aCwgLi4ubG9hZGVyUHJvcHMgfSlcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgYFVua25vd24gXCJsb2FkZXJcIiBmb3VuZCBpbiBcIm5leHQuY29uZmlnLmpzXCIuIEV4cGVjdGVkOiAke1ZBTElEX0xPQURFUlMuam9pbihcbiAgICAgICcsICdcbiAgICApfS4gUmVjZWl2ZWQ6ICR7Y29uZmlnTG9hZGVyfWBcbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbWFnZSh7XG4gIHNyYyxcbiAgc2l6ZXMsXG4gIHVub3B0aW1pemVkID0gZmFsc2UsXG4gIHByaW9yaXR5ID0gZmFsc2UsXG4gIGxvYWRpbmcsXG4gIGNsYXNzTmFtZSxcbiAgcXVhbGl0eSxcbiAgd2lkdGgsXG4gIGhlaWdodCxcbiAgb2JqZWN0Rml0LFxuICBvYmplY3RQb3NpdGlvbixcbiAgbG9hZGVyID0gZGVmYXVsdEltYWdlTG9hZGVyLFxuICAuLi5hbGxcbn06IEltYWdlUHJvcHMpIHtcbiAgbGV0IHJlc3Q6IFBhcnRpYWw8SW1hZ2VQcm9wcz4gPSBhbGxcbiAgbGV0IGxheW91dDogTm9uTnVsbGFibGU8TGF5b3V0VmFsdWU+ID0gc2l6ZXMgPyAncmVzcG9uc2l2ZScgOiAnaW50cmluc2ljJ1xuICBsZXQgdW5zaXplZCA9IGZhbHNlXG4gIGlmICgndW5zaXplZCcgaW4gcmVzdCkge1xuICAgIHVuc2l6ZWQgPSBCb29sZWFuKHJlc3QudW5zaXplZClcbiAgICAvLyBSZW1vdmUgcHJvcGVydHkgc28gaXQncyBub3Qgc3ByZWFkIGludG8gaW1hZ2U6XG4gICAgZGVsZXRlIHJlc3RbJ3Vuc2l6ZWQnXVxuICB9IGVsc2UgaWYgKCdsYXlvdXQnIGluIHJlc3QpIHtcbiAgICAvLyBPdmVycmlkZSBkZWZhdWx0IGxheW91dCBpZiB0aGUgdXNlciBzcGVjaWZpZWQgb25lOlxuICAgIGlmIChyZXN0LmxheW91dCkgbGF5b3V0ID0gcmVzdC5sYXlvdXRcblxuICAgIC8vIFJlbW92ZSBwcm9wZXJ0eSBzbyBpdCdzIG5vdCBzcHJlYWQgaW50byBpbWFnZTpcbiAgICBkZWxldGUgcmVzdFsnbGF5b3V0J11cbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKCFzcmMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIGlzIG1pc3NpbmcgcmVxdWlyZWQgXCJzcmNcIiBwcm9wZXJ0eS4gTWFrZSBzdXJlIHlvdSBwYXNzIFwic3JjXCIgaW4gcHJvcHMgdG8gdGhlIFxcYG5leHQvaW1hZ2VcXGAgY29tcG9uZW50LiBSZWNlaXZlZDogJHtKU09OLnN0cmluZ2lmeShcbiAgICAgICAgICB7IHdpZHRoLCBoZWlnaHQsIHF1YWxpdHkgfVxuICAgICAgICApfWBcbiAgICAgIClcbiAgICB9XG4gICAgaWYgKCFWQUxJRF9MQVlPVVRfVkFMVUVTLmluY2x1ZGVzKGxheW91dCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJsYXlvdXRcIiBwcm9wZXJ0eS4gUHJvdmlkZWQgXCIke2xheW91dH1cIiBzaG91bGQgYmUgb25lIG9mICR7VkFMSURfTEFZT1VUX1ZBTFVFUy5tYXAoXG4gICAgICAgICAgU3RyaW5nXG4gICAgICAgICkuam9pbignLCcpfS5gXG4gICAgICApXG4gICAgfVxuICAgIGlmICghVkFMSURfTE9BRElOR19WQUxVRVMuaW5jbHVkZXMobG9hZGluZykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJsb2FkaW5nXCIgcHJvcGVydHkuIFByb3ZpZGVkIFwiJHtsb2FkaW5nfVwiIHNob3VsZCBiZSBvbmUgb2YgJHtWQUxJRF9MT0FESU5HX1ZBTFVFUy5tYXAoXG4gICAgICAgICAgU3RyaW5nXG4gICAgICAgICkuam9pbignLCcpfS5gXG4gICAgICApXG4gICAgfVxuICAgIGlmIChwcmlvcml0eSAmJiBsb2FkaW5nID09PSAnbGF6eScpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGJvdGggXCJwcmlvcml0eVwiIGFuZCBcImxvYWRpbmc9J2xhenknXCIgcHJvcGVydGllcy4gT25seSBvbmUgc2hvdWxkIGJlIHVzZWQuYFxuICAgICAgKVxuICAgIH1cbiAgICBpZiAodW5zaXplZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgZGVwcmVjYXRlZCBcInVuc2l6ZWRcIiBwcm9wZXJ0eSwgd2hpY2ggd2FzIHJlbW92ZWQgaW4gZmF2b3Igb2YgdGhlIFwibGF5b3V0PSdmaWxsJ1wiIHByb3BlcnR5YFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGxldCBpc0xhenkgPVxuICAgICFwcmlvcml0eSAmJiAobG9hZGluZyA9PT0gJ2xhenknIHx8IHR5cGVvZiBsb2FkaW5nID09PSAndW5kZWZpbmVkJylcbiAgaWYgKHNyYyAmJiBzcmMuc3RhcnRzV2l0aCgnZGF0YTonKSkge1xuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUVFAvQmFzaWNzX29mX0hUVFAvRGF0YV9VUklzXG4gICAgdW5vcHRpbWl6ZWQgPSB0cnVlXG4gICAgaXNMYXp5ID0gZmFsc2VcbiAgfVxuXG4gIGNvbnN0IFtzZXRSZWYsIGlzSW50ZXJzZWN0ZWRdID0gdXNlSW50ZXJzZWN0aW9uPEhUTUxJbWFnZUVsZW1lbnQ+KHtcbiAgICByb290TWFyZ2luOiAnMjAwcHgnLFxuICAgIGRpc2FibGVkOiAhaXNMYXp5LFxuICB9KVxuICBjb25zdCBpc1Zpc2libGUgPSAhaXNMYXp5IHx8IGlzSW50ZXJzZWN0ZWRcblxuICBjb25zdCB3aWR0aEludCA9IGdldEludCh3aWR0aClcbiAgY29uc3QgaGVpZ2h0SW50ID0gZ2V0SW50KGhlaWdodClcbiAgY29uc3QgcXVhbGl0eUludCA9IGdldEludChxdWFsaXR5KVxuXG4gIGxldCB3cmFwcGVyU3R5bGU6IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snZGl2J11bJ3N0eWxlJ10gfCB1bmRlZmluZWRcbiAgbGV0IHNpemVyU3R5bGU6IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snZGl2J11bJ3N0eWxlJ10gfCB1bmRlZmluZWRcbiAgbGV0IHNpemVyU3ZnOiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgbGV0IGltZ1N0eWxlOiBJbWdFbGVtZW50U3R5bGUgfCB1bmRlZmluZWQgPSB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiAwLFxuICAgIGxlZnQ6IDAsXG4gICAgYm90dG9tOiAwLFxuICAgIHJpZ2h0OiAwLFxuXG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgcGFkZGluZzogMCxcbiAgICBib3JkZXI6ICdub25lJyxcbiAgICBtYXJnaW46ICdhdXRvJyxcblxuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgd2lkdGg6IDAsXG4gICAgaGVpZ2h0OiAwLFxuICAgIG1pbldpZHRoOiAnMTAwJScsXG4gICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICBtaW5IZWlnaHQ6ICcxMDAlJyxcbiAgICBtYXhIZWlnaHQ6ICcxMDAlJyxcblxuICAgIG9iamVjdEZpdCxcbiAgICBvYmplY3RQb3NpdGlvbixcbiAgfVxuICBpZiAoXG4gICAgdHlwZW9mIHdpZHRoSW50ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIHR5cGVvZiBoZWlnaHRJbnQgIT09ICd1bmRlZmluZWQnICYmXG4gICAgbGF5b3V0ICE9PSAnZmlsbCdcbiAgKSB7XG4gICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiAvPlxuICAgIGNvbnN0IHF1b3RpZW50ID0gaGVpZ2h0SW50IC8gd2lkdGhJbnRcbiAgICBjb25zdCBwYWRkaW5nVG9wID0gaXNOYU4ocXVvdGllbnQpID8gJzEwMCUnIDogYCR7cXVvdGllbnQgKiAxMDB9JWBcbiAgICBpZiAobGF5b3V0ID09PSAncmVzcG9uc2l2ZScpIHtcbiAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwicmVzcG9uc2l2ZVwiIC8+XG4gICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG5cbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgIG1hcmdpbjogMCxcbiAgICAgIH1cbiAgICAgIHNpemVyU3R5bGUgPSB7IGRpc3BsYXk6ICdibG9jaycsIGJveFNpemluZzogJ2JvcmRlci1ib3gnLCBwYWRkaW5nVG9wIH1cbiAgICB9IGVsc2UgaWYgKGxheW91dCA9PT0gJ2ludHJpbnNpYycpIHtcbiAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwiaW50cmluc2ljXCIgLz5cbiAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICBtYXJnaW46IDAsXG4gICAgICB9XG4gICAgICBzaXplclN0eWxlID0ge1xuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgIH1cbiAgICAgIHNpemVyU3ZnID0gYDxzdmcgd2lkdGg9XCIke3dpZHRoSW50fVwiIGhlaWdodD1cIiR7aGVpZ2h0SW50fVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2ZXJzaW9uPVwiMS4xXCIvPmBcbiAgICB9IGVsc2UgaWYgKGxheW91dCA9PT0gJ2ZpeGVkJykge1xuICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJmaXhlZFwiIC8+XG4gICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgd2lkdGg6IHdpZHRoSW50LFxuICAgICAgICBoZWlnaHQ6IGhlaWdodEludCxcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAoXG4gICAgdHlwZW9mIHdpZHRoSW50ID09PSAndW5kZWZpbmVkJyAmJlxuICAgIHR5cGVvZiBoZWlnaHRJbnQgPT09ICd1bmRlZmluZWQnICYmXG4gICAgbGF5b3V0ID09PSAnZmlsbCdcbiAgKSB7XG4gICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgbGF5b3V0PVwiZmlsbFwiIC8+XG4gICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcblxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICB0b3A6IDAsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgYm90dG9tOiAwLFxuICAgICAgcmlnaHQ6IDAsXG5cbiAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgbWFyZ2luOiAwLFxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiAvPlxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIG11c3QgdXNlIFwid2lkdGhcIiBhbmQgXCJoZWlnaHRcIiBwcm9wZXJ0aWVzIG9yIFwibGF5b3V0PSdmaWxsJ1wiIHByb3BlcnR5LmBcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBsZXQgaW1nQXR0cmlidXRlczogR2VuSW1nQXR0cnNSZXN1bHQgPSB7XG4gICAgc3JjOlxuICAgICAgJ2RhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEFRQUJBSUFBQUFBQUFQLy8veUg1QkFFQUFBQUFMQUFBQUFBQkFBRUFBQUlCUkFBNycsXG4gICAgc3JjU2V0OiB1bmRlZmluZWQsXG4gICAgc2l6ZXM6IHVuZGVmaW5lZCxcbiAgfVxuXG4gIGlmIChpc1Zpc2libGUpIHtcbiAgICBpbWdBdHRyaWJ1dGVzID0gZ2VuZXJhdGVJbWdBdHRycyh7XG4gICAgICBzcmMsXG4gICAgICB1bm9wdGltaXplZCxcbiAgICAgIGxheW91dCxcbiAgICAgIHdpZHRoOiB3aWR0aEludCxcbiAgICAgIHF1YWxpdHk6IHF1YWxpdHlJbnQsXG4gICAgICBzaXplcyxcbiAgICAgIGxvYWRlcixcbiAgICB9KVxuICB9XG5cbiAgaWYgKHVuc2l6ZWQpIHtcbiAgICB3cmFwcGVyU3R5bGUgPSB1bmRlZmluZWRcbiAgICBzaXplclN0eWxlID0gdW5kZWZpbmVkXG4gICAgaW1nU3R5bGUgPSB1bmRlZmluZWRcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3dyYXBwZXJTdHlsZX0+XG4gICAgICB7c2l6ZXJTdHlsZSA/IChcbiAgICAgICAgPGRpdiBzdHlsZT17c2l6ZXJTdHlsZX0+XG4gICAgICAgICAge3NpemVyU3ZnID8gKFxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAsXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgYXJpYS1oaWRkZW49e3RydWV9XG4gICAgICAgICAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxuICAgICAgICAgICAgICBzcmM9e2BkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LCR7dG9CYXNlNjQoc2l6ZXJTdmcpfWB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiBudWxsfVxuICAgICAgeyFpc1Zpc2libGUgJiYgKFxuICAgICAgICA8bm9zY3JpcHQ+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgICAgICB7Li4uZ2VuZXJhdGVJbWdBdHRycyh7XG4gICAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgICAgdW5vcHRpbWl6ZWQsXG4gICAgICAgICAgICAgIGxheW91dCxcbiAgICAgICAgICAgICAgd2lkdGg6IHdpZHRoSW50LFxuICAgICAgICAgICAgICBxdWFsaXR5OiBxdWFsaXR5SW50LFxuICAgICAgICAgICAgICBzaXplcyxcbiAgICAgICAgICAgICAgbG9hZGVyLFxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICBzcmM9e3NyY31cbiAgICAgICAgICAgIGRlY29kaW5nPVwiYXN5bmNcIlxuICAgICAgICAgICAgc2l6ZXM9e3NpemVzfVxuICAgICAgICAgICAgc3R5bGU9e2ltZ1N0eWxlfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9ub3NjcmlwdD5cbiAgICAgICl9XG4gICAgICA8aW1nXG4gICAgICAgIHsuLi5yZXN0fVxuICAgICAgICB7Li4uaW1nQXR0cmlidXRlc31cbiAgICAgICAgZGVjb2Rpbmc9XCJhc3luY1wiXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICByZWY9e3NldFJlZn1cbiAgICAgICAgc3R5bGU9e2ltZ1N0eWxlfVxuICAgICAgLz5cbiAgICAgIHtwcmlvcml0eSA/IChcbiAgICAgICAgLy8gTm90ZSBob3cgd2Ugb21pdCB0aGUgYGhyZWZgIGF0dHJpYnV0ZSwgYXMgaXQgd291bGQgb25seSBiZSByZWxldmFudFxuICAgICAgICAvLyBmb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBgaW1hZ2VzcmNzZXRgLCBhbmQgaW4gdGhvc2UgY2FzZXNcbiAgICAgICAgLy8gaXQgd291bGQgbGlrZWx5IGNhdXNlIHRoZSBpbmNvcnJlY3QgaW1hZ2UgdG8gYmUgcHJlbG9hZGVkLlxuICAgICAgICAvL1xuICAgICAgICAvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9zZW1hbnRpY3MuaHRtbCNhdHRyLWxpbmstaW1hZ2VzcmNzZXRcbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgIGtleT17XG4gICAgICAgICAgICAgICdfX25pbWctJyArXG4gICAgICAgICAgICAgIGltZ0F0dHJpYnV0ZXMuc3JjICtcbiAgICAgICAgICAgICAgaW1nQXR0cmlidXRlcy5zcmNTZXQgK1xuICAgICAgICAgICAgICBpbWdBdHRyaWJ1dGVzLnNpemVzXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZWw9XCJwcmVsb2FkXCJcbiAgICAgICAgICAgIGFzPVwiaW1hZ2VcIlxuICAgICAgICAgICAgaHJlZj17aW1nQXR0cmlidXRlcy5zcmNTZXQgPyB1bmRlZmluZWQgOiBpbWdBdHRyaWJ1dGVzLnNyY31cbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmU6IGltYWdlc3Jjc2V0IGlzIG5vdCB5ZXQgaW4gdGhlIGxpbmsgZWxlbWVudCB0eXBlXG4gICAgICAgICAgICBpbWFnZXNyY3NldD17aW1nQXR0cmlidXRlcy5zcmNTZXR9XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlOiBpbWFnZXNpemVzIGlzIG5vdCB5ZXQgaW4gdGhlIGxpbmsgZWxlbWVudCB0eXBlXG4gICAgICAgICAgICBpbWFnZXNpemVzPXtpbWdBdHRyaWJ1dGVzLnNpemVzfVxuICAgICAgICAgID48L2xpbms+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICkgOiBudWxsfVxuICAgIDwvZGl2PlxuICApXG59XG5cbi8vQlVJTFQgSU4gTE9BREVSU1xuXG5mdW5jdGlvbiBub3JtYWxpemVTcmMoc3JjOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gc3JjWzBdID09PSAnLycgPyBzcmMuc2xpY2UoMSkgOiBzcmNcbn1cblxuZnVuY3Rpb24gaW1naXhMb2FkZXIoe1xuICByb290LFxuICBzcmMsXG4gIHdpZHRoLFxuICBxdWFsaXR5LFxufTogRGVmYXVsdEltYWdlTG9hZGVyUHJvcHMpOiBzdHJpbmcge1xuICAvLyBEZW1vOiBodHRwczovL3N0YXRpYy5pbWdpeC5uZXQvZGFpc3kucG5nP2Zvcm1hdD1hdXRvJmZpdD1tYXgmdz0zMDBcbiAgY29uc3QgcGFyYW1zID0gWydhdXRvPWZvcm1hdCcsICdmaXQ9bWF4JywgJ3c9JyArIHdpZHRoXVxuICBsZXQgcGFyYW1zU3RyaW5nID0gJydcbiAgaWYgKHF1YWxpdHkpIHtcbiAgICBwYXJhbXMucHVzaCgncT0nICsgcXVhbGl0eSlcbiAgfVxuXG4gIGlmIChwYXJhbXMubGVuZ3RoKSB7XG4gICAgcGFyYW1zU3RyaW5nID0gJz8nICsgcGFyYW1zLmpvaW4oJyYnKVxuICB9XG4gIHJldHVybiBgJHtyb290fSR7bm9ybWFsaXplU3JjKHNyYyl9JHtwYXJhbXNTdHJpbmd9YFxufVxuXG5mdW5jdGlvbiBha2FtYWlMb2FkZXIoeyByb290LCBzcmMsIHdpZHRoIH06IERlZmF1bHRJbWFnZUxvYWRlclByb3BzKTogc3RyaW5nIHtcbiAgcmV0dXJuIGAke3Jvb3R9JHtub3JtYWxpemVTcmMoc3JjKX0/aW13aWR0aD0ke3dpZHRofWBcbn1cblxuZnVuY3Rpb24gY2xvdWRpbmFyeUxvYWRlcih7XG4gIHJvb3QsXG4gIHNyYyxcbiAgd2lkdGgsXG4gIHF1YWxpdHksXG59OiBEZWZhdWx0SW1hZ2VMb2FkZXJQcm9wcyk6IHN0cmluZyB7XG4gIC8vIERlbW86IGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2RlbW8vaW1hZ2UvdXBsb2FkL3dfMzAwLGNfbGltaXQscV9hdXRvL3R1cnRsZXMuanBnXG4gIGNvbnN0IHBhcmFtcyA9IFsnZl9hdXRvJywgJ2NfbGltaXQnLCAnd18nICsgd2lkdGgsICdxXycgKyAocXVhbGl0eSB8fCAnYXV0bycpXVxuICBsZXQgcGFyYW1zU3RyaW5nID0gcGFyYW1zLmpvaW4oJywnKSArICcvJ1xuICByZXR1cm4gYCR7cm9vdH0ke3BhcmFtc1N0cmluZ30ke25vcm1hbGl6ZVNyYyhzcmMpfWBcbn1cblxuZnVuY3Rpb24gZGVmYXVsdExvYWRlcih7XG4gIHJvb3QsXG4gIHNyYyxcbiAgd2lkdGgsXG4gIHF1YWxpdHksXG59OiBEZWZhdWx0SW1hZ2VMb2FkZXJQcm9wcyk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbWlzc2luZ1ZhbHVlcyA9IFtdXG5cbiAgICAvLyB0aGVzZSBzaG91bGQgYWx3YXlzIGJlIHByb3ZpZGVkIGJ1dCBtYWtlIHN1cmUgdGhleSBhcmVcbiAgICBpZiAoIXNyYykgbWlzc2luZ1ZhbHVlcy5wdXNoKCdzcmMnKVxuICAgIGlmICghd2lkdGgpIG1pc3NpbmdWYWx1ZXMucHVzaCgnd2lkdGgnKVxuXG4gICAgaWYgKG1pc3NpbmdWYWx1ZXMubGVuZ3RoID4gMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgTmV4dCBJbWFnZSBPcHRpbWl6YXRpb24gcmVxdWlyZXMgJHttaXNzaW5nVmFsdWVzLmpvaW4oXG4gICAgICAgICAgJywgJ1xuICAgICAgICApfSB0byBiZSBwcm92aWRlZC4gTWFrZSBzdXJlIHlvdSBwYXNzIHRoZW0gYXMgcHJvcHMgdG8gdGhlIFxcYG5leHQvaW1hZ2VcXGAgY29tcG9uZW50LiBSZWNlaXZlZDogJHtKU09OLnN0cmluZ2lmeShcbiAgICAgICAgICB7IHNyYywgd2lkdGgsIHF1YWxpdHkgfVxuICAgICAgICApfWBcbiAgICAgIClcbiAgICB9XG5cbiAgICBpZiAoc3JjLnN0YXJ0c1dpdGgoJy8vJykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCB0byBwYXJzZSBzcmMgXCIke3NyY31cIiBvbiBcXGBuZXh0L2ltYWdlXFxgLCBwcm90b2NvbC1yZWxhdGl2ZSBVUkwgKC8vKSBtdXN0IGJlIGNoYW5nZWQgdG8gYW4gYWJzb2x1dGUgVVJMIChodHRwOi8vIG9yIGh0dHBzOi8vKWBcbiAgICAgIClcbiAgICB9XG5cbiAgICBpZiAoIXNyYy5zdGFydHNXaXRoKCcvJykgJiYgY29uZmlnRG9tYWlucykge1xuICAgICAgbGV0IHBhcnNlZFNyYzogVVJMXG4gICAgICB0cnkge1xuICAgICAgICBwYXJzZWRTcmMgPSBuZXcgVVJMKHNyYylcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBGYWlsZWQgdG8gcGFyc2Ugc3JjIFwiJHtzcmN9XCIgb24gXFxgbmV4dC9pbWFnZVxcYCwgaWYgdXNpbmcgcmVsYXRpdmUgaW1hZ2UgaXQgbXVzdCBzdGFydCB3aXRoIGEgbGVhZGluZyBzbGFzaCBcIi9cIiBvciBiZSBhbiBhYnNvbHV0ZSBVUkwgKGh0dHA6Ly8gb3IgaHR0cHM6Ly8pYFxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGlmICghY29uZmlnRG9tYWlucy5pbmNsdWRlcyhwYXJzZWRTcmMuaG9zdG5hbWUpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgSW52YWxpZCBzcmMgcHJvcCAoJHtzcmN9KSBvbiBcXGBuZXh0L2ltYWdlXFxgLCBob3N0bmFtZSBcIiR7cGFyc2VkU3JjLmhvc3RuYW1lfVwiIGlzIG5vdCBjb25maWd1cmVkIHVuZGVyIGltYWdlcyBpbiB5b3VyIFxcYG5leHQuY29uZmlnLmpzXFxgXFxuYCArXG4gICAgICAgICAgICBgU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbmV4dC1pbWFnZS11bmNvbmZpZ3VyZWQtaG9zdGBcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBgJHtyb290fT91cmw9JHtlbmNvZGVVUklDb21wb25lbnQoc3JjKX0mdz0ke3dpZHRofSZxPSR7cXVhbGl0eSB8fCA3NX1gXG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4sIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgYWRkQmFzZVBhdGgsXG4gIGFkZExvY2FsZSxcbiAgZ2V0RG9tYWluTG9jYWxlLFxuICBpc0xvY2FsVVJMLFxuICBOZXh0Um91dGVyLFxuICBQcmVmZXRjaE9wdGlvbnMsXG4gIHJlc29sdmVIcmVmLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuaW1wb3J0IHsgdXNlSW50ZXJzZWN0aW9uIH0gZnJvbSAnLi91c2UtaW50ZXJzZWN0aW9uJ1xuXG50eXBlIFVybCA9IHN0cmluZyB8IFVybE9iamVjdFxudHlwZSBSZXF1aXJlZEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IG5ldmVyIDogS1xufVtrZXlvZiBUXVxudHlwZSBPcHRpb25hbEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IEsgOiBuZXZlclxufVtrZXlvZiBUXVxuXG5leHBvcnQgdHlwZSBMaW5rUHJvcHMgPSB7XG4gIGhyZWY6IFVybFxuICBhcz86IFVybFxuICByZXBsYWNlPzogYm9vbGVhblxuICBzY3JvbGw/OiBib29sZWFuXG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIHBhc3NIcmVmPzogYm9vbGVhblxuICBwcmVmZXRjaD86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbn1cbnR5cGUgTGlua1Byb3BzUmVxdWlyZWQgPSBSZXF1aXJlZEtleXM8TGlua1Byb3BzPlxudHlwZSBMaW5rUHJvcHNPcHRpb25hbCA9IE9wdGlvbmFsS2V5czxMaW5rUHJvcHM+XG5cbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBwcmVmZXRjaChcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIG9wdGlvbnM/OiBQcmVmZXRjaE9wdGlvbnNcbik6IHZvaWQge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgIXJvdXRlcikgcmV0dXJuXG4gIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycikgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH0pXG4gIGNvbnN0IGN1ckxvY2FsZSA9XG4gICAgb3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgIT09ICd1bmRlZmluZWQnXG4gICAgICA/IG9wdGlvbnMubG9jYWxlXG4gICAgICA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlXG5cbiAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXSA9IHRydWVcbn1cblxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50KTogYm9vbGVhbiB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50XG4gIHJldHVybiAoXG4gICAgKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgZXZlbnQubWV0YUtleSB8fFxuICAgIGV2ZW50LmN0cmxLZXkgfHxcbiAgICBldmVudC5zaGlmdEtleSB8fFxuICAgIGV2ZW50LmFsdEtleSB8fCAvLyB0cmlnZ2VycyByZXNvdXJjZSBkb3dubG9hZFxuICAgIChldmVudC5uYXRpdmVFdmVudCAmJiBldmVudC5uYXRpdmVFdmVudC53aGljaCA9PT0gMilcbiAgKVxufVxuXG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChcbiAgZTogUmVhY3QuTW91c2VFdmVudCxcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIHJlcGxhY2U/OiBib29sZWFuLFxuICBzaGFsbG93PzogYm9vbGVhbixcbiAgc2Nyb2xsPzogYm9vbGVhbixcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbik6IHZvaWQge1xuICBjb25zdCB7IG5vZGVOYW1lIH0gPSBlLmN1cnJlbnRUYXJnZXRcblxuICBpZiAobm9kZU5hbWUgPT09ICdBJyAmJiAoaXNNb2RpZmllZEV2ZW50KGUpIHx8ICFpc0xvY2FsVVJMKGhyZWYpKSkge1xuICAgIC8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxuICAgIHJldHVyblxuICB9XG5cbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gIGlmIChzY3JvbGwgPT0gbnVsbCkge1xuICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgfVxuXG4gIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHtcbiAgICBzaGFsbG93LFxuICAgIGxvY2FsZSxcbiAgICBzY3JvbGwsXG4gIH0pXG59XG5cbmZ1bmN0aW9uIExpbmsocHJvcHM6IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPExpbmtQcm9wcz4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJnczoge1xuICAgICAga2V5OiBzdHJpbmdcbiAgICAgIGV4cGVjdGVkOiBzdHJpbmdcbiAgICAgIGFjdHVhbDogc3RyaW5nXG4gICAgfSkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmAgK1xuICAgICAgICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgPyBcIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCJcbiAgICAgICAgICAgIDogJycpXG4gICAgICApXG4gICAgfVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCByZXF1aXJlZFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNSZXF1aXJlZCwgdHJ1ZT4gPSB7XG4gICAgICBocmVmOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCByZXF1aXJlZFByb3BzOiBMaW5rUHJvcHNSZXF1aXJlZFtdID0gT2JqZWN0LmtleXMoXG4gICAgICByZXF1aXJlZFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc1JlcXVpcmVkW11cbiAgICByZXF1aXJlZFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzUmVxdWlyZWQpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdocmVmJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSA9PSBudWxsIHx8XG4gICAgICAgICAgKHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCcpXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogcHJvcHNba2V5XSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCBvcHRpb25hbFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNPcHRpb25hbCwgdHJ1ZT4gPSB7XG4gICAgICBhczogdHJ1ZSxcbiAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICBzY3JvbGw6IHRydWUsXG4gICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgcGFzc0hyZWY6IHRydWUsXG4gICAgICBwcmVmZXRjaDogdHJ1ZSxcbiAgICAgIGxvY2FsZTogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wczogTGlua1Byb3BzT3B0aW9uYWxbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgb3B0aW9uYWxQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNPcHRpb25hbFtdXG4gICAgb3B0aW9uYWxQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc09wdGlvbmFsKSA9PiB7XG4gICAgICBjb25zdCB2YWxUeXBlID0gdHlwZW9mIHByb3BzW2tleV1cblxuICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJyAmJiB2YWxUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2xvY2FsZScpIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAga2V5ID09PSAncmVwbGFjZScgfHxcbiAgICAgICAga2V5ID09PSAnc2Nyb2xsJyB8fFxuICAgICAgICBrZXkgPT09ICdzaGFsbG93JyB8fFxuICAgICAgICBrZXkgPT09ICdwYXNzSHJlZicgfHxcbiAgICAgICAga2V5ID09PSAncHJlZmV0Y2gnXG4gICAgICApIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gIT0gbnVsbCAmJiB2YWxUeXBlICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBjb25zdCBoYXNXYXJuZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpXG4gICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgIClcbiAgICB9XG4gIH1cbiAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHBhdGhuYW1lID0gKHJvdXRlciAmJiByb3V0ZXIucGF0aG5hbWUpIHx8ICcvJ1xuXG4gIGNvbnN0IHsgaHJlZiwgYXMgfSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmhyZWYsIHRydWUpXG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgIGFzOiBwcm9wcy5hc1xuICAgICAgICA/IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5hcylcbiAgICAgICAgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZixcbiAgICB9XG4gIH0sIFtwYXRobmFtZSwgcHJvcHMuaHJlZiwgcHJvcHMuYXNdKVxuXG4gIGxldCB7IGNoaWxkcmVuLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSB9ID0gcHJvcHNcblxuICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICBjaGlsZHJlbiA9IDxhPntjaGlsZHJlbn08L2E+XG4gIH1cblxuICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgY29uc3QgY2hpbGQ6IGFueSA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gIGNvbnN0IGNoaWxkUmVmOiBhbnkgPSBjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZlxuXG4gIGNvbnN0IFtzZXRJbnRlcnNlY3Rpb25SZWYsIGlzVmlzaWJsZV0gPSB1c2VJbnRlcnNlY3Rpb24oe1xuICAgIHJvb3RNYXJnaW46ICcyMDBweCcsXG4gIH0pXG4gIGNvbnN0IHNldFJlZiA9IFJlYWN0LnVzZUNhbGxiYWNrKFxuICAgIChlbDogRWxlbWVudCkgPT4ge1xuICAgICAgc2V0SW50ZXJzZWN0aW9uUmVmKGVsKVxuICAgICAgaWYgKGNoaWxkUmVmKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkUmVmKGVsKVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY2hpbGRSZWYuY3VycmVudCA9IGVsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFtjaGlsZFJlZiwgc2V0SW50ZXJzZWN0aW9uUmVmXVxuICApXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc2hvdWxkUHJlZmV0Y2ggPSBpc1Zpc2libGUgJiYgcCAmJiBpc0xvY2FsVVJMKGhyZWYpXG4gICAgY29uc3QgY3VyTG9jYWxlID1cbiAgICAgIHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGVcbiAgICBjb25zdCBpc1ByZWZldGNoZWQgPVxuICAgICAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXVxuICAgIGlmIChzaG91bGRQcmVmZXRjaCAmJiAhaXNQcmVmZXRjaGVkKSB7XG4gICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7XG4gICAgICAgIGxvY2FsZTogY3VyTG9jYWxlLFxuICAgICAgfSlcbiAgICB9XG4gIH0sIFthcywgaHJlZiwgaXNWaXNpYmxlLCBsb2NhbGUsIHAsIHJvdXRlcl0pXG5cbiAgY29uc3QgY2hpbGRQcm9wczoge1xuICAgIG9uTW91c2VFbnRlcj86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBocmVmPzogc3RyaW5nXG4gICAgcmVmPzogYW55XG4gIH0gPSB7XG4gICAgcmVmOiBzZXRSZWYsXG4gICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICB9XG4gICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSlcbiAgICAgIH1cbiAgICB9LFxuICB9XG5cbiAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKVxuICAgIH1cbiAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7IHByaW9yaXR5OiB0cnVlIH0pXG4gIH1cblxuICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gIGlmIChwcm9wcy5wYXNzSHJlZiB8fCAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkpIHtcbiAgICBjb25zdCBjdXJMb2NhbGUgPVxuICAgICAgdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZVxuXG4gICAgLy8gd2Ugb25seSByZW5kZXIgZG9tYWluIGxvY2FsZXMgaWYgd2UgYXJlIGN1cnJlbnRseSBvbiBhIGRvbWFpbiBsb2NhbGVcbiAgICAvLyBzbyB0aGF0IGxvY2FsZSBsaW5rcyBhcmUgc3RpbGwgdmlzaXRhYmxlIGluIGRldmVsb3BtZW50L3ByZXZpZXcgZW52c1xuICAgIGNvbnN0IGxvY2FsZURvbWFpbiA9XG4gICAgICByb3V0ZXIgJiZcbiAgICAgIHJvdXRlci5pc0xvY2FsZURvbWFpbiAmJlxuICAgICAgZ2V0RG9tYWluTG9jYWxlKFxuICAgICAgICBhcyxcbiAgICAgICAgY3VyTG9jYWxlLFxuICAgICAgICByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZXMsXG4gICAgICAgIHJvdXRlciAmJiByb3V0ZXIuZG9tYWluTG9jYWxlc1xuICAgICAgKVxuXG4gICAgY2hpbGRQcm9wcy5ocmVmID1cbiAgICAgIGxvY2FsZURvbWFpbiB8fFxuICAgICAgYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGFzLCBjdXJMb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIuZGVmYXVsdExvY2FsZSkpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCIvKipcbiAqIFJlbW92ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBpZiB0aGVyZSBpcyBvbmUuIFByZXNlcnZlcyB0aGUgcm9vdCBwYXRoIGAvYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoXG59XG5cbi8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIXG4gID8gKHBhdGg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpXG4gICAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gcGF0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLydcbiAgICAgIH1cbiAgICB9XG4gIDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2hcbiIsInR5cGUgUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSA9IGFueVxudHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrT3B0aW9ucyA9IHtcbiAgdGltZW91dDogbnVtYmVyXG59XG50eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSA9IHtcbiAgcmVhZG9ubHkgZGlkVGltZW91dDogYm9vbGVhblxuICB0aW1lUmVtYWluaW5nOiAoKSA9PiBudW1iZXJcbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICByZXF1ZXN0SWRsZUNhbGxiYWNrOiAoXG4gICAgICBjYWxsYmFjazogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWQsXG4gICAgICBvcHRzPzogUmVxdWVzdElkbGVDYWxsYmFja09wdGlvbnNcbiAgICApID0+IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGVcbiAgICBjYW5jZWxJZGxlQ2FsbGJhY2s6IChpZDogUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSkgPT4gdm9pZFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrID1cbiAgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2spIHx8XG4gIGZ1bmN0aW9uIChcbiAgICBjYjogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWRcbiAgKTogTm9kZUpTLlRpbWVvdXQge1xuICAgIGxldCBzdGFydCA9IERhdGUubm93KClcbiAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBjYih7XG4gICAgICAgIGRpZFRpbWVvdXQ6IGZhbHNlLFxuICAgICAgICB0aW1lUmVtYWluaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIE1hdGgubWF4KDAsIDUwIC0gKERhdGUubm93KCkgLSBzdGFydCkpXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgIH0sIDEpXG4gIH1cblxuZXhwb3J0IGNvbnN0IGNhbmNlbElkbGVDYWxsYmFjayA9XG4gICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2spIHx8XG4gIGZ1bmN0aW9uIChpZDogUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSkge1xuICAgIHJldHVybiBjbGVhclRpbWVvdXQoaWQpXG4gIH1cbiIsImltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IENsaWVudEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9idWlsZC93ZWJwYWNrL3BsdWdpbnMvYnVpbGQtbWFuaWZlc3QtcGx1Z2luJ1xuaW1wb3J0IGdldEFzc2V0UGF0aEZyb21Sb3V0ZSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUnXG5pbXBvcnQgeyByZXF1ZXN0SWRsZUNhbGxiYWNrIH0gZnJvbSAnLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2snXG5cbi8vIDMuOHMgd2FzIGFyYml0cmFyaWx5IGNob3NlbiBhcyBpdCdzIHdoYXQgaHR0cHM6Ly93ZWIuZGV2L2ludGVyYWN0aXZlXG4vLyBjb25zaWRlcnMgYXMgXCJHb29kXCIgdGltZS10by1pbnRlcmFjdGl2ZS4gV2UgbXVzdCBhc3N1bWUgc29tZXRoaW5nIHdlbnRcbi8vIHdyb25nIGJleW9uZCB0aGlzIHBvaW50LCBhbmQgdGhlbiBmYWxsLWJhY2sgdG8gYSBmdWxsIHBhZ2UgdHJhbnNpdGlvbiB0b1xuLy8gc2hvdyB0aGUgdXNlciBzb21ldGhpbmcgb2YgdmFsdWUuXG5jb25zdCBNU19NQVhfSURMRV9ERUxBWSA9IDM4MDBcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBfX0JVSUxEX01BTklGRVNUPzogQ2xpZW50QnVpbGRNYW5pZmVzdFxuICAgIF9fQlVJTERfTUFOSUZFU1RfQ0I/OiBGdW5jdGlvblxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkRW50cnlwb2ludFN1Y2Nlc3Mge1xuICBjb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgZXhwb3J0czogYW55XG59XG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZEVudHJ5cG9pbnRGYWlsdXJlIHtcbiAgZXJyb3I6IHVua25vd25cbn1cbmV4cG9ydCB0eXBlIFJvdXRlRW50cnlwb2ludCA9IExvYWRlZEVudHJ5cG9pbnRTdWNjZXNzIHwgTG9hZGVkRW50cnlwb2ludEZhaWx1cmVcblxuZXhwb3J0IGludGVyZmFjZSBSb3V0ZVN0eWxlU2hlZXQge1xuICBocmVmOiBzdHJpbmdcbiAgY29udGVudDogc3RyaW5nXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkUm91dGVTdWNjZXNzIGV4dGVuZHMgTG9hZGVkRW50cnlwb2ludFN1Y2Nlc3Mge1xuICBzdHlsZXM6IFJvdXRlU3R5bGVTaGVldFtdXG59XG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZFJvdXRlRmFpbHVyZSB7XG4gIGVycm9yOiB1bmtub3duXG59XG5leHBvcnQgdHlwZSBSb3V0ZUxvYWRlckVudHJ5ID0gTG9hZGVkUm91dGVTdWNjZXNzIHwgTG9hZGVkUm91dGVGYWlsdXJlXG5cbmV4cG9ydCB0eXBlIEZ1dHVyZTxWPiA9IHtcbiAgcmVzb2x2ZTogKGVudHJ5cG9pbnQ6IFYpID0+IHZvaWRcbiAgZnV0dXJlOiBQcm9taXNlPFY+XG59XG5mdW5jdGlvbiB3aXRoRnV0dXJlPFQ+KFxuICBrZXk6IHN0cmluZyxcbiAgbWFwOiBNYXA8c3RyaW5nLCBGdXR1cmU8VD4gfCBUPixcbiAgZ2VuZXJhdG9yPzogKCkgPT4gUHJvbWlzZTxUPlxuKTogUHJvbWlzZTxUPiB7XG4gIGxldCBlbnRyeTogRnV0dXJlPFQ+IHwgVCB8IHVuZGVmaW5lZCA9IG1hcC5nZXQoa2V5KVxuICBpZiAoZW50cnkpIHtcbiAgICBpZiAoJ2Z1dHVyZScgaW4gZW50cnkpIHtcbiAgICAgIHJldHVybiBlbnRyeS5mdXR1cmVcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShlbnRyeSlcbiAgfVxuICBsZXQgcmVzb2x2ZXI6IChlbnRyeXBvaW50OiBUKSA9PiB2b2lkXG4gIGNvbnN0IHByb206IFByb21pc2U8VD4gPSBuZXcgUHJvbWlzZTxUPigocmVzb2x2ZSkgPT4ge1xuICAgIHJlc29sdmVyID0gcmVzb2x2ZVxuICB9KVxuICBtYXAuc2V0KGtleSwgKGVudHJ5ID0geyByZXNvbHZlOiByZXNvbHZlciEsIGZ1dHVyZTogcHJvbSB9KSlcbiAgcmV0dXJuIGdlbmVyYXRvclxuICAgID8gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgZ2VuZXJhdG9yKCkudGhlbigodmFsdWUpID0+IChyZXNvbHZlcih2YWx1ZSksIHZhbHVlKSlcbiAgICA6IHByb21cbn1cblxuZXhwb3J0IGludGVyZmFjZSBSb3V0ZUxvYWRlciB7XG4gIHdoZW5FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPFJvdXRlRW50cnlwb2ludD5cbiAgb25FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcsIGV4ZWN1dGU6ICgpID0+IHVua25vd24pOiB2b2lkXG4gIGxvYWRSb3V0ZShyb3V0ZTogc3RyaW5nLCBwcmVmZXRjaD86IGJvb2xlYW4pOiBQcm9taXNlPFJvdXRlTG9hZGVyRW50cnk+XG4gIHByZWZldGNoKHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+XG59XG5cbmZ1bmN0aW9uIGhhc1ByZWZldGNoKGxpbms/OiBIVE1MTGlua0VsZW1lbnQpOiBib29sZWFuIHtcbiAgdHJ5IHtcbiAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpXG4gICAgcmV0dXJuIChcbiAgICAgIC8vIGRldGVjdCBJRTExIHNpbmNlIGl0IHN1cHBvcnRzIHByZWZldGNoIGJ1dCBpc24ndCBkZXRlY3RlZFxuICAgICAgLy8gd2l0aCByZWxMaXN0LnN1cHBvcnRcbiAgICAgICghIXdpbmRvdy5NU0lucHV0TWV0aG9kQ29udGV4dCAmJiAhIShkb2N1bWVudCBhcyBhbnkpLmRvY3VtZW50TW9kZSkgfHxcbiAgICAgIGxpbmsucmVsTGlzdC5zdXBwb3J0cygncHJlZmV0Y2gnKVxuICAgIClcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuY29uc3QgY2FuUHJlZmV0Y2g6IGJvb2xlYW4gPSBoYXNQcmVmZXRjaCgpXG5cbmZ1bmN0aW9uIHByZWZldGNoVmlhRG9tKFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIGxpbms/OiBIVE1MTGlua0VsZW1lbnRcbik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGlua1tyZWw9XCJwcmVmZXRjaFwiXVtocmVmXj1cIiR7aHJlZn1cIl1gKSkge1xuICAgICAgcmV0dXJuIHJlcygpXG4gICAgfVxuXG4gICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKVxuXG4gICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbDpcbiAgICBpZiAoYXMpIGxpbmshLmFzID0gYXNcbiAgICBsaW5rIS5yZWwgPSBgcHJlZmV0Y2hgXG4gICAgbGluayEuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOIVxuICAgIGxpbmshLm9ubG9hZCA9IHJlc1xuICAgIGxpbmshLm9uZXJyb3IgPSByZWpcblxuICAgIC8vIGBocmVmYCBzaG91bGQgYWx3YXlzIGJlIGxhc3Q6XG4gICAgbGluayEuaHJlZiA9IGhyZWZcblxuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluaylcbiAgfSlcbn1cblxuY29uc3QgQVNTRVRfTE9BRF9FUlJPUiA9IFN5bWJvbCgnQVNTRVRfTE9BRF9FUlJPUicpXG4vLyBUT0RPOiB1bmV4cG9ydFxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtBc3NldEVycm9yKGVycjogRXJyb3IpOiBFcnJvciB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCBBU1NFVF9MT0FEX0VSUk9SLCB7fSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQXNzZXRFcnJvcihlcnI/OiBFcnJvcik6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICByZXR1cm4gZXJyICYmIEFTU0VUX0xPQURfRVJST1IgaW4gZXJyXG59XG5cbmZ1bmN0aW9uIGFwcGVuZFNjcmlwdChcbiAgc3JjOiBzdHJpbmcsXG4gIHNjcmlwdD86IEhUTUxTY3JpcHRFbGVtZW50XG4pOiBQcm9taXNlPHVua25vd24+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKVxuXG4gICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbC5cbiAgICAvLyAxLiBTZXR1cCBzdWNjZXNzL2ZhaWx1cmUgaG9va3MgaW4gY2FzZSB0aGUgYnJvd3NlciBzeW5jaHJvbm91c2x5XG4gICAgLy8gICAgZXhlY3V0ZXMgd2hlbiBgc3JjYCBpcyBzZXQuXG4gICAgc2NyaXB0Lm9ubG9hZCA9IHJlc29sdmVcbiAgICBzY3JpcHQub25lcnJvciA9ICgpID0+XG4gICAgICByZWplY3QobWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzY3JpcHQ6ICR7c3JjfWApKSlcblxuICAgIC8vIDIuIENvbmZpZ3VyZSB0aGUgY3Jvc3Mtb3JpZ2luIGF0dHJpYnV0ZSBiZWZvcmUgc2V0dGluZyBgc3JjYCBpbiBjYXNlIHRoZVxuICAgIC8vICAgIGJyb3dzZXIgYmVnaW5zIHRvIGZldGNoLlxuICAgIHNjcmlwdC5jcm9zc09yaWdpbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU4hXG5cbiAgICAvLyAzLiBGaW5hbGx5LCBzZXQgdGhlIHNvdXJjZSBhbmQgaW5qZWN0IGludG8gdGhlIERPTSBpbiBjYXNlIHRoZSBjaGlsZFxuICAgIC8vICAgIG11c3QgYmUgYXBwZW5kZWQgZm9yIGZldGNoaW5nIHRvIHN0YXJ0LlxuICAgIHNjcmlwdC5zcmMgPSBzcmNcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdClcbiAgfSlcbn1cblxuLy8gUmVzb2x2ZSBhIHByb21pc2UgdGhhdCB0aW1lcyBvdXQgYWZ0ZXIgZ2l2ZW4gYW1vdW50IG9mIG1pbGxpc2Vjb25kcy5cbmZ1bmN0aW9uIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQ8VD4oXG4gIHA6IFByb21pc2U8VD4sXG4gIG1zOiBudW1iZXIsXG4gIGVycjogRXJyb3Jcbik6IFByb21pc2U8VD4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuXG4gICAgcC50aGVuKChyKSA9PiB7XG4gICAgICAvLyBSZXNvbHZlZCwgY2FuY2VsIHRoZSB0aW1lb3V0XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgICByZXNvbHZlKHIpXG4gICAgfSkuY2F0Y2gocmVqZWN0KVxuXG4gICAgcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PlxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlmICghY2FuY2VsbGVkKSB7XG4gICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgfVxuICAgICAgfSwgbXMpXG4gICAgKVxuICB9KVxufVxuXG4vLyBUT0RPOiBzdG9wIGV4cG9ydGluZyBvciBjYWNoZSB0aGUgZmFpbHVyZVxuLy8gSXQnZCBiZSBiZXN0IHRvIHN0b3AgZXhwb3J0aW5nIHRoaXMuIEl0J3MgYW4gaW1wbGVtZW50YXRpb24gZGV0YWlsLiBXZSdyZVxuLy8gb25seSBleHBvcnRpbmcgaXQgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsdHkgd2l0aCB0aGUgYHBhZ2UtbG9hZGVyYC5cbi8vIE9ubHkgY2FjaGUgdGhpcyByZXNwb25zZSBhcyBhIGxhc3QgcmVzb3J0IGlmIHdlIGNhbm5vdCBlbGltaW5hdGUgYWxsIG90aGVyXG4vLyBjb2RlIGJyYW5jaGVzIHRoYXQgdXNlIHRoZSBCdWlsZCBNYW5pZmVzdCBDYWxsYmFjayBhbmQgcHVzaCB0aGVtIHRocm91Z2hcbi8vIHRoZSBSb3V0ZSBMb2FkZXIgaW50ZXJmYWNlLlxuZXhwb3J0IGZ1bmN0aW9uIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKTogUHJvbWlzZTxDbGllbnRCdWlsZE1hbmlmZXN0PiB7XG4gIGlmIChzZWxmLl9fQlVJTERfTUFOSUZFU1QpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVClcbiAgfVxuXG4gIGNvbnN0IG9uQnVpbGRNYW5pZmVzdDogUHJvbWlzZTxDbGllbnRCdWlsZE1hbmlmZXN0PiA9IG5ldyBQcm9taXNlPFxuICAgIENsaWVudEJ1aWxkTWFuaWZlc3RcbiAgPigocmVzb2x2ZSkgPT4ge1xuICAgIC8vIE1hbmRhdG9yeSBiZWNhdXNlIHRoaXMgaXMgbm90IGNvbmN1cnJlbnQgc2FmZTpcbiAgICBjb25zdCBjYiA9IHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQlxuICAgIHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQiA9ICgpID0+IHtcbiAgICAgIHJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUISlcbiAgICAgIGNiICYmIGNiKClcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQ8Q2xpZW50QnVpbGRNYW5pZmVzdD4oXG4gICAgb25CdWlsZE1hbmlmZXN0LFxuICAgIE1TX01BWF9JRExFX0RFTEFZLFxuICAgIG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcignRmFpbGVkIHRvIGxvYWQgY2xpZW50IGJ1aWxkIG1hbmlmZXN0JykpXG4gIClcbn1cblxuaW50ZXJmYWNlIFJvdXRlRmlsZXMge1xuICBzY3JpcHRzOiBzdHJpbmdbXVxuICBjc3M6IHN0cmluZ1tdXG59XG5mdW5jdGlvbiBnZXRGaWxlc0ZvclJvdXRlKFxuICBhc3NldFByZWZpeDogc3RyaW5nLFxuICByb3V0ZTogc3RyaW5nXG4pOiBQcm9taXNlPFJvdXRlRmlsZXM+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7XG4gICAgICBzY3JpcHRzOiBbXG4gICAgICAgIGFzc2V0UHJlZml4ICtcbiAgICAgICAgICAnL19uZXh0L3N0YXRpYy9jaHVua3MvcGFnZXMnICtcbiAgICAgICAgICBlbmNvZGVVUkkoZ2V0QXNzZXRQYXRoRnJvbVJvdXRlKHJvdXRlLCAnLmpzJykpLFxuICAgICAgXSxcbiAgICAgIC8vIFN0eWxlcyBhcmUgaGFuZGxlZCBieSBgc3R5bGUtbG9hZGVyYCBpbiBkZXZlbG9wbWVudDpcbiAgICAgIGNzczogW10sXG4gICAgfSlcbiAgfVxuICByZXR1cm4gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpLnRoZW4oKG1hbmlmZXN0KSA9PiB7XG4gICAgaWYgKCEocm91dGUgaW4gbWFuaWZlc3QpKSB7XG4gICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb29rdXAgcm91dGU6ICR7cm91dGV9YCkpXG4gICAgfVxuICAgIGNvbnN0IGFsbEZpbGVzID0gbWFuaWZlc3Rbcm91dGVdLm1hcChcbiAgICAgIChlbnRyeSkgPT4gYXNzZXRQcmVmaXggKyAnL19uZXh0LycgKyBlbmNvZGVVUkkoZW50cnkpXG4gICAgKVxuICAgIHJldHVybiB7XG4gICAgICBzY3JpcHRzOiBhbGxGaWxlcy5maWx0ZXIoKHYpID0+IHYuZW5kc1dpdGgoJy5qcycpKSxcbiAgICAgIGNzczogYWxsRmlsZXMuZmlsdGVyKCh2KSA9PiB2LmVuZHNXaXRoKCcuY3NzJykpLFxuICAgIH1cbiAgfSlcbn1cblxuZnVuY3Rpb24gY3JlYXRlUm91dGVMb2FkZXIoYXNzZXRQcmVmaXg6IHN0cmluZyk6IFJvdXRlTG9hZGVyIHtcbiAgY29uc3QgZW50cnlwb2ludHM6IE1hcDxcbiAgICBzdHJpbmcsXG4gICAgRnV0dXJlPFJvdXRlRW50cnlwb2ludD4gfCBSb3V0ZUVudHJ5cG9pbnRcbiAgPiA9IG5ldyBNYXAoKVxuICBjb25zdCBsb2FkZWRTY3JpcHRzOiBNYXA8c3RyaW5nLCBQcm9taXNlPHVua25vd24+PiA9IG5ldyBNYXAoKVxuICBjb25zdCBzdHlsZVNoZWV0czogTWFwPHN0cmluZywgUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+PiA9IG5ldyBNYXAoKVxuICBjb25zdCByb3V0ZXM6IE1hcDxcbiAgICBzdHJpbmcsXG4gICAgRnV0dXJlPFJvdXRlTG9hZGVyRW50cnk+IHwgUm91dGVMb2FkZXJFbnRyeVxuICA+ID0gbmV3IE1hcCgpXG5cbiAgZnVuY3Rpb24gbWF5YmVFeGVjdXRlU2NyaXB0KHNyYzogc3RyaW5nKTogUHJvbWlzZTx1bmtub3duPiB7XG4gICAgbGV0IHByb206IFByb21pc2U8dW5rbm93bj4gfCB1bmRlZmluZWQgPSBsb2FkZWRTY3JpcHRzLmdldChzcmMpXG4gICAgaWYgKHByb20pIHtcbiAgICAgIHJldHVybiBwcm9tXG4gICAgfVxuXG4gICAgLy8gU2tpcCBleGVjdXRpbmcgc2NyaXB0IGlmIGl0J3MgYWxyZWFkeSBpbiB0aGUgRE9NOlxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBzY3JpcHRbc3JjXj1cIiR7c3JjfVwiXWApKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgICB9XG5cbiAgICBsb2FkZWRTY3JpcHRzLnNldChzcmMsIChwcm9tID0gYXBwZW5kU2NyaXB0KHNyYykpKVxuICAgIHJldHVybiBwcm9tXG4gIH1cblxuICBmdW5jdGlvbiBmZXRjaFN0eWxlU2hlZXQoaHJlZjogc3RyaW5nKTogUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+IHtcbiAgICBsZXQgcHJvbTogUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+IHwgdW5kZWZpbmVkID0gc3R5bGVTaGVldHMuZ2V0KGhyZWYpXG4gICAgaWYgKHByb20pIHtcbiAgICAgIHJldHVybiBwcm9tXG4gICAgfVxuXG4gICAgc3R5bGVTaGVldHMuc2V0KFxuICAgICAgaHJlZixcbiAgICAgIChwcm9tID0gZmV0Y2goaHJlZilcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0eWxlc2hlZXQ6ICR7aHJlZn1gKVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcmVzLnRleHQoKS50aGVuKCh0ZXh0KSA9PiAoeyBocmVmOiBocmVmLCBjb250ZW50OiB0ZXh0IH0pKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIHRocm93IG1hcmtBc3NldEVycm9yKGVycilcbiAgICAgICAgfSkpXG4gICAgKVxuICAgIHJldHVybiBwcm9tXG4gIH1cblxuICByZXR1cm4ge1xuICAgIHdoZW5FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcpIHtcbiAgICAgIHJldHVybiB3aXRoRnV0dXJlKHJvdXRlLCBlbnRyeXBvaW50cylcbiAgICB9LFxuICAgIG9uRW50cnlwb2ludChyb3V0ZTogc3RyaW5nLCBleGVjdXRlOiAoKSA9PiB1bmtub3duKSB7XG4gICAgICBQcm9taXNlLnJlc29sdmUoZXhlY3V0ZSlcbiAgICAgICAgLnRoZW4oKGZuKSA9PiBmbigpKVxuICAgICAgICAudGhlbihcbiAgICAgICAgICAoZXhwb3J0czogYW55KSA9PiAoe1xuICAgICAgICAgICAgY29tcG9uZW50OiAoZXhwb3J0cyAmJiBleHBvcnRzLmRlZmF1bHQpIHx8IGV4cG9ydHMsXG4gICAgICAgICAgICBleHBvcnRzOiBleHBvcnRzLFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIChlcnIpID0+ICh7IGVycm9yOiBlcnIgfSlcbiAgICAgICAgKVxuICAgICAgICAudGhlbigoaW5wdXQ6IFJvdXRlRW50cnlwb2ludCkgPT4ge1xuICAgICAgICAgIGNvbnN0IG9sZCA9IGVudHJ5cG9pbnRzLmdldChyb3V0ZSlcbiAgICAgICAgICBlbnRyeXBvaW50cy5zZXQocm91dGUsIGlucHV0KVxuICAgICAgICAgIGlmIChvbGQgJiYgJ3Jlc29sdmUnIGluIG9sZCkgb2xkLnJlc29sdmUoaW5wdXQpXG4gICAgICAgIH0pXG4gICAgfSxcbiAgICBsb2FkUm91dGUocm91dGU6IHN0cmluZywgcHJlZmV0Y2g/OiBib29sZWFuKSB7XG4gICAgICByZXR1cm4gd2l0aEZ1dHVyZTxSb3V0ZUxvYWRlckVudHJ5Pihyb3V0ZSwgcm91dGVzLCAoKSA9PiB7XG4gICAgICAgIHJldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KFxuICAgICAgICAgIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKVxuICAgICAgICAgICAgLnRoZW4oKHsgc2NyaXB0cywgY3NzIH0pID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgICAgICBlbnRyeXBvaW50cy5oYXMocm91dGUpXG4gICAgICAgICAgICAgICAgICA/IFtdXG4gICAgICAgICAgICAgICAgICA6IFByb21pc2UuYWxsKHNjcmlwdHMubWFwKG1heWJlRXhlY3V0ZVNjcmlwdCkpLFxuICAgICAgICAgICAgICAgIFByb21pc2UuYWxsKGNzcy5tYXAoZmV0Y2hTdHlsZVNoZWV0KSksXG4gICAgICAgICAgICAgIF0gYXMgY29uc3QpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy53aGVuRW50cnlwb2ludChyb3V0ZSkudGhlbigoZW50cnlwb2ludCkgPT4gKHtcbiAgICAgICAgICAgICAgICBlbnRyeXBvaW50LFxuICAgICAgICAgICAgICAgIHN0eWxlczogcmVzWzFdLFxuICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgIE1TX01BWF9JRExFX0RFTEFZLFxuICAgICAgICAgIG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgUm91dGUgZGlkIG5vdCBjb21wbGV0ZSBsb2FkaW5nOiAke3JvdXRlfWApKVxuICAgICAgICApXG4gICAgICAgICAgLnRoZW4oKHsgZW50cnlwb2ludCwgc3R5bGVzIH0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlczogUm91dGVMb2FkZXJFbnRyeSA9IE9iamVjdC5hc3NpZ248XG4gICAgICAgICAgICAgIHsgc3R5bGVzOiBSb3V0ZVN0eWxlU2hlZXRbXSB9LFxuICAgICAgICAgICAgICBSb3V0ZUVudHJ5cG9pbnRcbiAgICAgICAgICAgID4oeyBzdHlsZXM6IHN0eWxlcyEgfSwgZW50cnlwb2ludClcbiAgICAgICAgICAgIHJldHVybiAnZXJyb3InIGluIGVudHJ5cG9pbnQgPyBlbnRyeXBvaW50IDogcmVzXG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgaWYgKHByZWZldGNoKSB7XG4gICAgICAgICAgICAgIC8vIHdlIGRvbid0IHdhbnQgdG8gY2FjaGUgZXJyb3JzIGR1cmluZyBwcmVmZXRjaFxuICAgICAgICAgICAgICB0aHJvdyBlcnJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7IGVycm9yOiBlcnIgfVxuICAgICAgICAgIH0pXG4gICAgICB9KVxuICAgIH0sXG4gICAgcHJlZmV0Y2gocm91dGU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZUxhYnMvcXVpY2tsaW5rL2Jsb2IvNDUzYTY2MWZhMWZhOTQwZTJkMmUwNDQ0NTIzOThlMzhjNjdhOThmYi9zcmMvaW5kZXgubWpzI0wxMTUtTDExOFxuICAgICAgLy8gTGljZW5zZTogQXBhY2hlIDIuMFxuICAgICAgbGV0IGNuXG4gICAgICBpZiAoKGNuID0gKG5hdmlnYXRvciBhcyBhbnkpLmNvbm5lY3Rpb24pKSB7XG4gICAgICAgIC8vIERvbid0IHByZWZldGNoIGlmIHVzaW5nIDJHIG9yIGlmIFNhdmUtRGF0YSBpcyBlbmFibGVkLlxuICAgICAgICBpZiAoY24uc2F2ZURhdGEgfHwgLzJnLy50ZXN0KGNuLmVmZmVjdGl2ZVR5cGUpKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgICAgIH1cbiAgICAgIHJldHVybiBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSlcbiAgICAgICAgLnRoZW4oKG91dHB1dCkgPT5cbiAgICAgICAgICBQcm9taXNlLmFsbChcbiAgICAgICAgICAgIGNhblByZWZldGNoXG4gICAgICAgICAgICAgID8gb3V0cHV0LnNjcmlwdHMubWFwKChzY3JpcHQpID0+IHByZWZldGNoVmlhRG9tKHNjcmlwdCwgJ3NjcmlwdCcpKVxuICAgICAgICAgICAgICA6IFtdXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+IHRoaXMubG9hZFJvdXRlKHJvdXRlLCB0cnVlKS5jYXRjaCgoKSA9PiB7fSkpXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChcbiAgICAgICAgICAvLyBzd2FsbG93IHByZWZldGNoIGVycm9yc1xuICAgICAgICAgICgpID0+IHt9XG4gICAgICAgIClcbiAgICB9LFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVJvdXRlTG9hZGVyXG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IFJvdXRlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQnXG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55XG5cbnR5cGUgUm91dGVyQXJncyA9IENsYXNzQXJndW1lbnRzPHR5cGVvZiBSb3V0ZXI+XG5cbnR5cGUgU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBSb3V0ZXIgfCBudWxsXG4gIHJlYWR5Q2FsbGJhY2tzOiBBcnJheTwoKSA9PiBhbnk+XG4gIHJlYWR5KGNiOiAoKSA9PiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCB7IFJvdXRlciwgTmV4dFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBOZXh0Um91dGVyXG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICdwYXRobmFtZScsXG4gICdyb3V0ZScsXG4gICdxdWVyeScsXG4gICdhc1BhdGgnLFxuICAnY29tcG9uZW50cycsXG4gICdpc0ZhbGxiYWNrJyxcbiAgJ2Jhc2VQYXRoJyxcbiAgJ2xvY2FsZScsXG4gICdsb2NhbGVzJyxcbiAgJ2RlZmF1bHRMb2NhbGUnLFxuICAnaXNSZWFkeScsXG4gICdpc1ByZXZpZXcnLFxuICAnaXNMb2NhbGVEb21haW4nLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkOiBzdHJpbmcpID0+IHtcbiAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbiAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0gYXMgc3RyaW5nXG4gICAgfSxcbiAgfSlcbn0pXG5cbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQ6IHN0cmluZykgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICA7KHNpbmdsZXRvblJvdXRlciBhcyBhbnkpW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gIH1cbn0pXG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudDogc3RyaW5nKSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogUm91dGVyIHtcbiAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICguLi5hcmdzOiBSb3V0ZXJBcmdzKTogUm91dGVyID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBSb3V0ZXIoLi4uYXJncylcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXVxuXG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyOiBSb3V0ZXIpOiBOZXh0Um91dGVyIHtcbiAgY29uc3QgX3JvdXRlciA9IHJvdXRlciBhcyBhbnlcbiAgY29uc3QgaW5zdGFuY2UgPSB7fSBhcyBhbnlcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgIEFycmF5LmlzQXJyYXkoX3JvdXRlcltwcm9wZXJ0eV0pID8gW10gOiB7fSxcbiAgICAgICAgX3JvdXRlcltwcm9wZXJ0eV1cbiAgICAgICkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gIHJlcXVlc3RJZGxlQ2FsbGJhY2ssXG4gIGNhbmNlbElkbGVDYWxsYmFjayxcbn0gZnJvbSAnLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2snXG5cbnR5cGUgVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0ID0gUGljazxJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQsICdyb290TWFyZ2luJz5cbnR5cGUgVXNlSW50ZXJzZWN0aW9uID0geyBkaXNhYmxlZD86IGJvb2xlYW4gfSAmIFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdFxudHlwZSBPYnNlcnZlQ2FsbGJhY2sgPSAoaXNWaXNpYmxlOiBib29sZWFuKSA9PiB2b2lkXG50eXBlIE9ic2VydmVyID0ge1xuICBpZDogc3RyaW5nXG4gIG9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuICBlbGVtZW50czogTWFwPEVsZW1lbnQsIE9ic2VydmVDYWxsYmFjaz5cbn1cblxuY29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSB0eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb248VCBleHRlbmRzIEVsZW1lbnQ+KHtcbiAgcm9vdE1hcmdpbixcbiAgZGlzYWJsZWQsXG59OiBVc2VJbnRlcnNlY3Rpb24pOiBbKGVsZW1lbnQ6IFQgfCBudWxsKSA9PiB2b2lkLCBib29sZWFuXSB7XG4gIGNvbnN0IGlzRGlzYWJsZWQ6IGJvb2xlYW4gPSBkaXNhYmxlZCB8fCAhaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcblxuICBjb25zdCB1bm9ic2VydmUgPSB1c2VSZWY8RnVuY3Rpb24+KClcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3Qgc2V0UmVmID0gdXNlQ2FsbGJhY2soXG4gICAgKGVsOiBUIHwgbnVsbCkgPT4ge1xuICAgICAgaWYgKHVub2JzZXJ2ZS5jdXJyZW50KSB7XG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50KClcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSB1bmRlZmluZWRcbiAgICAgIH1cblxuICAgICAgaWYgKGlzRGlzYWJsZWQgfHwgdmlzaWJsZSkgcmV0dXJuXG5cbiAgICAgIGlmIChlbCAmJiBlbC50YWdOYW1lKSB7XG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gb2JzZXJ2ZShcbiAgICAgICAgICBlbCxcbiAgICAgICAgICAoaXNWaXNpYmxlKSA9PiBpc1Zpc2libGUgJiYgc2V0VmlzaWJsZShpc1Zpc2libGUpLFxuICAgICAgICAgIHsgcm9vdE1hcmdpbiB9XG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9LFxuICAgIFtpc0Rpc2FibGVkLCByb290TWFyZ2luLCB2aXNpYmxlXVxuICApXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgICBpZiAoIXZpc2libGUpIHtcbiAgICAgICAgY29uc3QgaWRsZUNhbGxiYWNrID0gcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiBzZXRWaXNpYmxlKHRydWUpKVxuICAgICAgICByZXR1cm4gKCkgPT4gY2FuY2VsSWRsZUNhbGxiYWNrKGlkbGVDYWxsYmFjaylcbiAgICAgIH1cbiAgICB9XG4gIH0sIFt2aXNpYmxlXSlcblxuICByZXR1cm4gW3NldFJlZiwgdmlzaWJsZV1cbn1cblxuZnVuY3Rpb24gb2JzZXJ2ZShcbiAgZWxlbWVudDogRWxlbWVudCxcbiAgY2FsbGJhY2s6IE9ic2VydmVDYWxsYmFjayxcbiAgb3B0aW9uczogVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0XG4pOiAoKSA9PiB2b2lkIHtcbiAgY29uc3QgeyBpZCwgb2JzZXJ2ZXIsIGVsZW1lbnRzIH0gPSBjcmVhdGVPYnNlcnZlcihvcHRpb25zKVxuICBlbGVtZW50cy5zZXQoZWxlbWVudCwgY2FsbGJhY2spXG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KVxuICByZXR1cm4gZnVuY3Rpb24gdW5vYnNlcnZlKCk6IHZvaWQge1xuICAgIGVsZW1lbnRzLmRlbGV0ZShlbGVtZW50KVxuICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KVxuXG4gICAgLy8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuICAgIGlmIChlbGVtZW50cy5zaXplID09PSAwKSB7XG4gICAgICBvYnNlcnZlci5kaXNjb25uZWN0KClcbiAgICAgIG9ic2VydmVycy5kZWxldGUoaWQpXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IG9ic2VydmVycyA9IG5ldyBNYXA8c3RyaW5nLCBPYnNlcnZlcj4oKVxuZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIob3B0aW9uczogVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0KTogT2JzZXJ2ZXIge1xuICBjb25zdCBpZCA9IG9wdGlvbnMucm9vdE1hcmdpbiB8fCAnJ1xuICBsZXQgaW5zdGFuY2UgPSBvYnNlcnZlcnMuZ2V0KGlkKVxuICBpZiAoaW5zdGFuY2UpIHtcbiAgICByZXR1cm4gaW5zdGFuY2VcbiAgfVxuXG4gIGNvbnN0IGVsZW1lbnRzID0gbmV3IE1hcDxFbGVtZW50LCBPYnNlcnZlQ2FsbGJhY2s+KClcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICBjb25zdCBjYWxsYmFjayA9IGVsZW1lbnRzLmdldChlbnRyeS50YXJnZXQpXG4gICAgICBjb25zdCBpc1Zpc2libGUgPSBlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDBcbiAgICAgIGlmIChjYWxsYmFjayAmJiBpc1Zpc2libGUpIHtcbiAgICAgICAgY2FsbGJhY2soaXNWaXNpYmxlKVxuICAgICAgfVxuICAgIH0pXG4gIH0sIG9wdGlvbnMpXG5cbiAgb2JzZXJ2ZXJzLnNldChcbiAgICBpZCxcbiAgICAoaW5zdGFuY2UgPSB7XG4gICAgICBpZCxcbiAgICAgIG9ic2VydmVyLFxuICAgICAgZWxlbWVudHMsXG4gICAgfSlcbiAgKVxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KTogSlNYLkVsZW1lbnQge1xuICAgIHJldHVybiA8Q29tcG9zZWRDb21wb25lbnQgcm91dGVyPXt1c2VSb3V0ZXIoKX0gey4uLnByb3BzfSAvPlxuICB9XG5cbiAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbiAgOyhXaXRoUm91dGVyV3JhcHBlciBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHMgPSAoQ29tcG9zZWRDb21wb25lbnQgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbmFtZSA9XG4gICAgICBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgXG4gIH1cblxuICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXJcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVMb2NhbGVQYXRoKFxuICBwYXRobmFtZTogc3RyaW5nLFxuICBsb2NhbGVzPzogc3RyaW5nW11cbik6IHtcbiAgZGV0ZWN0ZWRMb2NhbGU/OiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xufSB7XG4gIGxldCBkZXRlY3RlZExvY2FsZTogc3RyaW5nIHwgdW5kZWZpbmVkXG4gIC8vIGZpcnN0IGl0ZW0gd2lsbCBiZSBlbXB0eSBzdHJpbmcgZnJvbSBzcGxpdHRpbmcgYXQgZmlyc3QgY2hhclxuICBjb25zdCBwYXRobmFtZVBhcnRzID0gcGF0aG5hbWUuc3BsaXQoJy8nKVxuXG4gIDsobG9jYWxlcyB8fCBbXSkuc29tZSgobG9jYWxlKSA9PiB7XG4gICAgaWYgKHBhdGhuYW1lUGFydHNbMV0udG9Mb3dlckNhc2UoKSA9PT0gbG9jYWxlLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgIGRldGVjdGVkTG9jYWxlID0gbG9jYWxlXG4gICAgICBwYXRobmFtZVBhcnRzLnNwbGljZSgxLCAxKVxuICAgICAgcGF0aG5hbWUgPSBwYXRobmFtZVBhcnRzLmpvaW4oJy8nKSB8fCAnLydcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9KVxuXG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgZGV0ZWN0ZWRMb2NhbGUsXG4gIH1cbn1cbiIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoLFxuICByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCxcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaCdcbmltcG9ydCB7IEdvb2RQYWdlQ2FjaGUsIFN0eWxlU2hlZXRUdXBsZSB9IGZyb20gJy4uLy4uLy4uL2NsaWVudC9wYWdlLWxvYWRlcidcbmltcG9ydCB7XG4gIGdldENsaWVudEJ1aWxkTWFuaWZlc3QsXG4gIGlzQXNzZXRFcnJvcixcbiAgbWFya0Fzc2V0RXJyb3IsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9yb3V0ZS1sb2FkZXInXG5pbXBvcnQgeyBEb21haW5Mb2NhbGVzIH0gZnJvbSAnLi4vLi4vc2VydmVyL2NvbmZpZydcbmltcG9ydCB7IGRlbm9ybWFsaXplUGFnZVBhdGggfSBmcm9tICcuLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoJ1xuaW1wb3J0IHsgbm9ybWFsaXplTG9jYWxlUGF0aCB9IGZyb20gJy4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoJ1xuaW1wb3J0IG1pdHQsIHsgTWl0dEVtaXR0ZXIgfSBmcm9tICcuLi9taXR0J1xuaW1wb3J0IHtcbiAgQXBwQ29udGV4dFR5cGUsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRMb2NhdGlvbk9yaWdpbixcbiAgZ2V0VVJMLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBOZXh0UGFnZUNvbnRleHQsXG4gIFNULFxuICBORVhUX0RBVEEsXG59IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgaXNEeW5hbWljUm91dGUgfSBmcm9tICcuL3V0aWxzL2lzLWR5bmFtaWMnXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi91dGlscy9xdWVyeXN0cmluZydcbmltcG9ydCByZXNvbHZlUmV3cml0ZXMgZnJvbSAnLi91dGlscy9yZXNvbHZlLXJld3JpdGVzJ1xuaW1wb3J0IHsgZ2V0Um91dGVNYXRjaGVyIH0gZnJvbSAnLi91dGlscy9yb3V0ZS1tYXRjaGVyJ1xuaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vdXRpbHMvcm91dGUtcmVnZXgnXG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgLyogcHJvZCAqL1xuICAgIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICB9XG59XG5cbmludGVyZmFjZSBSb3V0ZVByb3BlcnRpZXMge1xuICBzaGFsbG93OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBUcmFuc2l0aW9uT3B0aW9ucyB7XG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG4gIHNjcm9sbD86IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIE5leHRIaXN0b3J5U3RhdGUge1xuICB1cmw6IHN0cmluZ1xuICBhczogc3RyaW5nXG4gIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG59XG5cbnR5cGUgSGlzdG9yeVN0YXRlID1cbiAgfCBudWxsXG4gIHwgeyBfX046IGZhbHNlIH1cbiAgfCAoeyBfX046IHRydWU7IGlkeDogbnVtYmVyIH0gJiBOZXh0SGlzdG9yeVN0YXRlKVxuXG5sZXQgZGV0ZWN0RG9tYWluTG9jYWxlOiB0eXBlb2YgaW1wb3J0KCcuLi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlJykuZGV0ZWN0RG9tYWluTG9jYWxlXG5cbmlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gIGRldGVjdERvbWFpbkxvY2FsZSA9IHJlcXVpcmUoJy4uL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUnKVxuICAgIC5kZXRlY3REb21haW5Mb2NhbGVcbn1cblxuY29uc3QgYmFzZVBhdGggPSAocHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCBhcyBzdHJpbmcpIHx8ICcnXG5cbmZ1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyksIHtcbiAgICBjYW5jZWxsZWQ6IHRydWUsXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aDogc3RyaW5nLCBwcmVmaXg/OiBzdHJpbmcpIHtcbiAgcmV0dXJuIHByZWZpeCAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nKVxuICAgID8gcGF0aCA9PT0gJy8nXG4gICAgICA/IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKHByZWZpeClcbiAgICAgIDogYCR7cHJlZml4fSR7cGF0aE5vUXVlcnlIYXNoKHBhdGgpID09PSAnLycgPyBwYXRoLnN1YnN0cmluZygxKSA6IHBhdGh9YFxuICAgIDogcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RG9tYWluTG9jYWxlKFxuICBwYXRoOiBzdHJpbmcsXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlLFxuICBsb2NhbGVzPzogc3RyaW5nW10sXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICBsb2NhbGUgPSBsb2NhbGUgfHwgbm9ybWFsaXplTG9jYWxlUGF0aChwYXRoLCBsb2NhbGVzKS5kZXRlY3RlZExvY2FsZVxuXG4gICAgY29uc3QgZGV0ZWN0ZWREb21haW4gPSBkZXRlY3REb21haW5Mb2NhbGUoZG9tYWluTG9jYWxlcywgdW5kZWZpbmVkLCBsb2NhbGUpXG5cbiAgICBpZiAoZGV0ZWN0ZWREb21haW4pIHtcbiAgICAgIHJldHVybiBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7XG4gICAgICAgIGJhc2VQYXRoIHx8ICcnXG4gICAgICB9JHtsb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGUgPyAnJyA6IGAvJHtsb2NhbGV9YH0ke3BhdGh9YFxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHJldHVybiBmYWxzZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkTG9jYWxlKFxuICBwYXRoOiBzdHJpbmcsXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlLFxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICBjb25zdCBwYXRobmFtZSA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKVxuICAgIGNvbnN0IHBhdGhMb3dlciA9IHBhdGhuYW1lLnRvTG93ZXJDYXNlKClcbiAgICBjb25zdCBsb2NhbGVMb3dlciA9IGxvY2FsZSAmJiBsb2NhbGUudG9Mb3dlckNhc2UoKVxuXG4gICAgcmV0dXJuIGxvY2FsZSAmJlxuICAgICAgbG9jYWxlICE9PSBkZWZhdWx0TG9jYWxlICYmXG4gICAgICAhcGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlTG93ZXIgKyAnLycpICYmXG4gICAgICBwYXRoTG93ZXIgIT09ICcvJyArIGxvY2FsZUxvd2VyXG4gICAgICA/IGFkZFBhdGhQcmVmaXgocGF0aCwgJy8nICsgbG9jYWxlKVxuICAgICAgOiBwYXRoXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbExvY2FsZShwYXRoOiBzdHJpbmcsIGxvY2FsZT86IHN0cmluZykge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIGNvbnN0IHBhdGhuYW1lID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpXG4gICAgY29uc3QgcGF0aExvd2VyID0gcGF0aG5hbWUudG9Mb3dlckNhc2UoKVxuICAgIGNvbnN0IGxvY2FsZUxvd2VyID0gbG9jYWxlICYmIGxvY2FsZS50b0xvd2VyQ2FzZSgpXG5cbiAgICByZXR1cm4gbG9jYWxlICYmXG4gICAgICAocGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlTG93ZXIgKyAnLycpIHx8XG4gICAgICAgIHBhdGhMb3dlciA9PT0gJy8nICsgbG9jYWxlTG93ZXIpXG4gICAgICA/IChwYXRobmFtZS5sZW5ndGggPT09IGxvY2FsZS5sZW5ndGggKyAxID8gJy8nIDogJycpICtcbiAgICAgICAgICBwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoICsgMSlcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmZ1bmN0aW9uIHBhdGhOb1F1ZXJ5SGFzaChwYXRoOiBzdHJpbmcpIHtcbiAgY29uc3QgcXVlcnlJbmRleCA9IHBhdGguaW5kZXhPZignPycpXG4gIGNvbnN0IGhhc2hJbmRleCA9IHBhdGguaW5kZXhPZignIycpXG5cbiAgaWYgKHF1ZXJ5SW5kZXggPiAtMSB8fCBoYXNoSW5kZXggPiAtMSkge1xuICAgIHBhdGggPSBwYXRoLnN1YnN0cmluZygwLCBxdWVyeUluZGV4ID4gLTEgPyBxdWVyeUluZGV4IDogaGFzaEluZGV4KVxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcGF0aCA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKVxuICByZXR1cm4gcGF0aCA9PT0gYmFzZVBhdGggfHwgcGF0aC5zdGFydHNXaXRoKGJhc2VQYXRoICsgJy8nKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgLy8gd2Ugb25seSBhZGQgdGhlIGJhc2VwYXRoIG9uIHJlbGF0aXZlIHVybHNcbiAgcmV0dXJuIGFkZFBhdGhQcmVmaXgocGF0aCwgYmFzZVBhdGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICBwYXRoID0gcGF0aC5zbGljZShiYXNlUGF0aC5sZW5ndGgpXG4gIGlmICghcGF0aC5zdGFydHNXaXRoKCcvJykpIHBhdGggPSBgLyR7cGF0aH1gXG4gIHJldHVybiBwYXRoXG59XG5cbi8qKlxuICogRGV0ZWN0cyB3aGV0aGVyIGEgZ2l2ZW4gdXJsIGlzIHJvdXRhYmxlIGJ5IHRoZSBOZXh0LmpzIHJvdXRlciAoYnJvd3NlciBvbmx5KS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTG9jYWxVUkwodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgLy8gcHJldmVudCBhIGh5ZHJhdGlvbiBtaXNtYXRjaCBvbiBocmVmIGZvciB1cmwgd2l0aCBhbmNob3IgcmVmc1xuICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSB8fCB1cmwuc3RhcnRzV2l0aCgnIycpKSByZXR1cm4gdHJ1ZVxuICB0cnkge1xuICAgIC8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuICAgIGNvbnN0IGxvY2F0aW9uT3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICAgIGNvbnN0IHJlc29sdmVkID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uT3JpZ2luKVxuICAgIHJldHVybiByZXNvbHZlZC5vcmlnaW4gPT09IGxvY2F0aW9uT3JpZ2luICYmIGhhc0Jhc2VQYXRoKHJlc29sdmVkLnBhdGhuYW1lKVxuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxudHlwZSBVcmwgPSBVcmxPYmplY3QgfCBzdHJpbmdcblxuZXhwb3J0IGZ1bmN0aW9uIGludGVycG9sYXRlQXMoXG4gIHJvdXRlOiBzdHJpbmcsXG4gIGFzUGF0aG5hbWU6IHN0cmluZyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pIHtcbiAgbGV0IGludGVycG9sYXRlZFJvdXRlID0gJydcblxuICBjb25zdCBkeW5hbWljUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICBjb25zdCBkeW5hbWljR3JvdXBzID0gZHluYW1pY1JlZ2V4Lmdyb3Vwc1xuICBjb25zdCBkeW5hbWljTWF0Y2hlcyA9XG4gICAgLy8gVHJ5IHRvIG1hdGNoIHRoZSBkeW5hbWljIHJvdXRlIGFnYWluc3QgdGhlIGFzUGF0aFxuICAgIChhc1BhdGhuYW1lICE9PSByb3V0ZSA/IGdldFJvdXRlTWF0Y2hlcihkeW5hbWljUmVnZXgpKGFzUGF0aG5hbWUpIDogJycpIHx8XG4gICAgLy8gRmFsbCBiYWNrIHRvIHJlYWRpbmcgdGhlIHZhbHVlcyBmcm9tIHRoZSBocmVmXG4gICAgLy8gVE9ETzogc2hvdWxkIHRoaXMgdGFrZSBwcmlvcml0eTsgYWxzbyBuZWVkIHRvIGNoYW5nZSBpbiB0aGUgcm91dGVyLlxuICAgIHF1ZXJ5XG5cbiAgaW50ZXJwb2xhdGVkUm91dGUgPSByb3V0ZVxuICBjb25zdCBwYXJhbXMgPSBPYmplY3Qua2V5cyhkeW5hbWljR3JvdXBzKVxuXG4gIGlmIChcbiAgICAhcGFyYW1zLmV2ZXJ5KChwYXJhbSkgPT4ge1xuICAgICAgbGV0IHZhbHVlID0gZHluYW1pY01hdGNoZXNbcGFyYW1dIHx8ICcnXG4gICAgICBjb25zdCB7IHJlcGVhdCwgb3B0aW9uYWwgfSA9IGR5bmFtaWNHcm91cHNbcGFyYW1dXG5cbiAgICAgIC8vIHN1cHBvcnQgc2luZ2xlLWxldmVsIGNhdGNoLWFsbFxuICAgICAgLy8gVE9ETzogbW9yZSByb2J1c3QgaGFuZGxpbmcgZm9yIHVzZXItZXJyb3IgKHBhc3NpbmcgYC9gKVxuICAgICAgbGV0IHJlcGxhY2VkID0gYFske3JlcGVhdCA/ICcuLi4nIDogJyd9JHtwYXJhbX1dYFxuICAgICAgaWYgKG9wdGlvbmFsKSB7XG4gICAgICAgIHJlcGxhY2VkID0gYCR7IXZhbHVlID8gJy8nIDogJyd9WyR7cmVwbGFjZWR9XWBcbiAgICAgIH1cbiAgICAgIGlmIChyZXBlYXQgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB2YWx1ZSA9IFt2YWx1ZV1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgKG9wdGlvbmFsIHx8IHBhcmFtIGluIGR5bmFtaWNNYXRjaGVzKSAmJlxuICAgICAgICAvLyBJbnRlcnBvbGF0ZSBncm91cCBpbnRvIGRhdGEgVVJMIGlmIHByZXNlbnRcbiAgICAgICAgKGludGVycG9sYXRlZFJvdXRlID1cbiAgICAgICAgICBpbnRlcnBvbGF0ZWRSb3V0ZSEucmVwbGFjZShcbiAgICAgICAgICAgIHJlcGxhY2VkLFxuICAgICAgICAgICAgcmVwZWF0XG4gICAgICAgICAgICAgID8gKHZhbHVlIGFzIHN0cmluZ1tdKVxuICAgICAgICAgICAgICAgICAgLm1hcChcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlc2UgdmFsdWVzIHNob3VsZCBiZSBmdWxseSBlbmNvZGVkIGluc3RlYWQgb2YganVzdFxuICAgICAgICAgICAgICAgICAgICAvLyBwYXRoIGRlbGltaXRlciBlc2NhcGVkIHNpbmNlIHRoZXkgYXJlIGJlaW5nIGluc2VydGVkXG4gICAgICAgICAgICAgICAgICAgIC8vIGludG8gdGhlIFVSTCBhbmQgd2UgZXhwZWN0IFVSTCBlbmNvZGVkIHNlZ21lbnRzXG4gICAgICAgICAgICAgICAgICAgIC8vIHdoZW4gcGFyc2luZyBkeW5hbWljIHJvdXRlIHBhcmFtc1xuICAgICAgICAgICAgICAgICAgICAoc2VnbWVudCkgPT4gZW5jb2RlVVJJQ29tcG9uZW50KHNlZ21lbnQpXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAuam9pbignLycpXG4gICAgICAgICAgICAgIDogZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlIGFzIHN0cmluZylcbiAgICAgICAgICApIHx8ICcvJylcbiAgICAgIClcbiAgICB9KVxuICApIHtcbiAgICBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnIC8vIGRpZCBub3Qgc2F0aXNmeSBhbGwgcmVxdWlyZW1lbnRzXG5cbiAgICAvLyBuLmIuIFdlIGlnbm9yZSB0aGlzIGVycm9yIGJlY2F1c2Ugd2UgaGFuZGxlIHdhcm5pbmcgZm9yIHRoaXMgY2FzZSBpblxuICAgIC8vIGRldmVsb3BtZW50IGluIHRoZSBgPExpbms+YCBjb21wb25lbnQgZGlyZWN0bHkuXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXJhbXMsXG4gICAgcmVzdWx0OiBpbnRlcnBvbGF0ZWRSb3V0ZSxcbiAgfVxufVxuXG5mdW5jdGlvbiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnk6IFBhcnNlZFVybFF1ZXJ5LCBwYXJhbXM6IHN0cmluZ1tdKSB7XG4gIGNvbnN0IGZpbHRlcmVkUXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cblxuICBPYmplY3Qua2V5cyhxdWVyeSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgaWYgKCFwYXJhbXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgZmlsdGVyZWRRdWVyeVtrZXldID0gcXVlcnlba2V5XVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIGZpbHRlcmVkUXVlcnlcbn1cblxuLyoqXG4gKiBSZXNvbHZlcyBhIGdpdmVuIGh5cGVybGluayB3aXRoIGEgY2VydGFpbiByb3V0ZXIgc3RhdGUgKGJhc2VQYXRoIG5vdCBpbmNsdWRlZCkuXG4gKiBQcmVzZXJ2ZXMgYWJzb2x1dGUgdXJscy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVIcmVmKFxuICBjdXJyZW50UGF0aDogc3RyaW5nLFxuICBocmVmOiBVcmwsXG4gIHJlc29sdmVBcz86IGJvb2xlYW5cbik6IHN0cmluZyB7XG4gIC8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG4gIGNvbnN0IGJhc2UgPSBuZXcgVVJMKGN1cnJlbnRQYXRoLCAnaHR0cDovL24nKVxuICBjb25zdCB1cmxBc1N0cmluZyA9XG4gICAgdHlwZW9mIGhyZWYgPT09ICdzdHJpbmcnID8gaHJlZiA6IGZvcm1hdFdpdGhWYWxpZGF0aW9uKGhyZWYpXG4gIC8vIFJldHVybiBiZWNhdXNlIGl0IGNhbm5vdCBiZSByb3V0ZWQgYnkgdGhlIE5leHQuanMgcm91dGVyXG4gIGlmICghaXNMb2NhbFVSTCh1cmxBc1N0cmluZykpIHtcbiAgICByZXR1cm4gKHJlc29sdmVBcyA/IFt1cmxBc1N0cmluZ10gOiB1cmxBc1N0cmluZykgYXMgc3RyaW5nXG4gIH1cbiAgdHJ5IHtcbiAgICBjb25zdCBmaW5hbFVybCA9IG5ldyBVUkwodXJsQXNTdHJpbmcsIGJhc2UpXG4gICAgZmluYWxVcmwucGF0aG5hbWUgPSBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChmaW5hbFVybC5wYXRobmFtZSlcbiAgICBsZXQgaW50ZXJwb2xhdGVkQXMgPSAnJ1xuXG4gICAgaWYgKFxuICAgICAgaXNEeW5hbWljUm91dGUoZmluYWxVcmwucGF0aG5hbWUpICYmXG4gICAgICBmaW5hbFVybC5zZWFyY2hQYXJhbXMgJiZcbiAgICAgIHJlc29sdmVBc1xuICAgICkge1xuICAgICAgY29uc3QgcXVlcnkgPSBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KGZpbmFsVXJsLnNlYXJjaFBhcmFtcylcblxuICAgICAgY29uc3QgeyByZXN1bHQsIHBhcmFtcyB9ID0gaW50ZXJwb2xhdGVBcyhcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBxdWVyeVxuICAgICAgKVxuXG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIGludGVycG9sYXRlZEFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgIHBhdGhuYW1lOiByZXN1bHQsXG4gICAgICAgICAgaGFzaDogZmluYWxVcmwuaGFzaCxcbiAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBwYXJhbXMpLFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG4gICAgY29uc3QgcmVzb2x2ZWRIcmVmID1cbiAgICAgIGZpbmFsVXJsLm9yaWdpbiA9PT0gYmFzZS5vcmlnaW5cbiAgICAgICAgPyBmaW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpXG4gICAgICAgIDogZmluYWxVcmwuaHJlZlxuXG4gICAgcmV0dXJuIChyZXNvbHZlQXNcbiAgICAgID8gW3Jlc29sdmVkSHJlZiwgaW50ZXJwb2xhdGVkQXMgfHwgcmVzb2x2ZWRIcmVmXVxuICAgICAgOiByZXNvbHZlZEhyZWYpIGFzIHN0cmluZ1xuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIChyZXNvbHZlQXMgPyBbdXJsQXNTdHJpbmddIDogdXJsQXNTdHJpbmcpIGFzIHN0cmluZ1xuICB9XG59XG5cbmZ1bmN0aW9uIHN0cmlwT3JpZ2luKHVybDogc3RyaW5nKSB7XG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcblxuICByZXR1cm4gdXJsLnN0YXJ0c1dpdGgob3JpZ2luKSA/IHVybC5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aCkgOiB1cmxcbn1cblxuZnVuY3Rpb24gcHJlcGFyZVVybEFzKHJvdXRlcjogTmV4dFJvdXRlciwgdXJsOiBVcmwsIGFzPzogVXJsKSB7XG4gIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICBsZXQgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSByZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIHVybCwgdHJ1ZSlcbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICBjb25zdCBocmVmSGFkT3JpZ2luID0gcmVzb2x2ZWRIcmVmLnN0YXJ0c1dpdGgob3JpZ2luKVxuICBjb25zdCBhc0hhZE9yaWdpbiA9IHJlc29sdmVkQXMgJiYgcmVzb2x2ZWRBcy5zdGFydHNXaXRoKG9yaWdpbilcblxuICByZXNvbHZlZEhyZWYgPSBzdHJpcE9yaWdpbihyZXNvbHZlZEhyZWYpXG4gIHJlc29sdmVkQXMgPSByZXNvbHZlZEFzID8gc3RyaXBPcmlnaW4ocmVzb2x2ZWRBcykgOiByZXNvbHZlZEFzXG5cbiAgY29uc3QgcHJlcGFyZWRVcmwgPSBocmVmSGFkT3JpZ2luID8gcmVzb2x2ZWRIcmVmIDogYWRkQmFzZVBhdGgocmVzb2x2ZWRIcmVmKVxuICBjb25zdCBwcmVwYXJlZEFzID0gYXNcbiAgICA/IHN0cmlwT3JpZ2luKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgYXMpKVxuICAgIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWZcblxuICByZXR1cm4ge1xuICAgIHVybDogcHJlcGFyZWRVcmwsXG4gICAgYXM6IGFzSGFkT3JpZ2luID8gcHJlcGFyZWRBcyA6IGFkZEJhc2VQYXRoKHByZXBhcmVkQXMpLFxuICB9XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWU6IHN0cmluZywgcGFnZXM6IHN0cmluZ1tdKSB7XG4gIGNvbnN0IGNsZWFuUGF0aG5hbWUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhdGhuYW1lISkpXG5cbiAgaWYgKGNsZWFuUGF0aG5hbWUgPT09ICcvNDA0JyB8fCBjbGVhblBhdGhuYW1lID09PSAnL19lcnJvcicpIHtcbiAgICByZXR1cm4gcGF0aG5hbWVcbiAgfVxuXG4gIC8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbiAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lISkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgcGFnZXMuc29tZSgocGFnZSkgPT4ge1xuICAgICAgaWYgKGlzRHluYW1pY1JvdXRlKHBhZ2UpICYmIGdldFJvdXRlUmVnZXgocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lISkpIHtcbiAgICAgICAgcGF0aG5hbWUgPSBwYWdlXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfSlcbiAgfVxuICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG59XG5cbmV4cG9ydCB0eXBlIEJhc2VSb3V0ZXIgPSB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbiAgaXNMb2NhbGVEb21haW46IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgTmV4dFJvdXRlciA9IEJhc2VSb3V0ZXIgJlxuICBQaWNrPFxuICAgIFJvdXRlcixcbiAgICB8ICdwdXNoJ1xuICAgIHwgJ3JlcGxhY2UnXG4gICAgfCAncmVsb2FkJ1xuICAgIHwgJ2JhY2snXG4gICAgfCAncHJlZmV0Y2gnXG4gICAgfCAnYmVmb3JlUG9wU3RhdGUnXG4gICAgfCAnZXZlbnRzJ1xuICAgIHwgJ2lzRmFsbGJhY2snXG4gICAgfCAnaXNSZWFkeSdcbiAgICB8ICdpc1ByZXZpZXcnXG4gID5cblxuZXhwb3J0IHR5cGUgUHJlZmV0Y2hPcHRpb25zID0ge1xuICBwcmlvcml0eT86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbn1cblxuZXhwb3J0IHR5cGUgUHJpdmF0ZVJvdXRlSW5mbyA9XG4gIHwgKE9taXQ8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvLCAnc3R5bGVTaGVldHMnPiAmIHsgaW5pdGlhbDogdHJ1ZSB9KVxuICB8IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mb1xuXG5leHBvcnQgdHlwZSBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzID0gUGljazxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8sICdDb21wb25lbnQnIHwgJ2Vycic+ICYge1xuICByb3V0ZXI6IFJvdXRlclxufSAmIFJlY29yZDxzdHJpbmcsIGFueT5cbmV4cG9ydCB0eXBlIEFwcENvbXBvbmVudCA9IENvbXBvbmVudFR5cGU8QXBwUHJvcHM+XG5cbnR5cGUgU3Vic2NyaXB0aW9uID0gKFxuICBkYXRhOiBQcml2YXRlUm91dGVJbmZvLFxuICBBcHA6IEFwcENvbXBvbmVudCxcbiAgcmVzZXRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGxcbikgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IE5leHRIaXN0b3J5U3RhdGUpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID1cbiAgcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJlxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5ICYmXG4gICEhKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgbGV0IHYgPSAnX19uZXh0J1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgcmV0dXJuIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0odiwgdiksIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0odiksIHRydWVcbiAgICB9IGNhdGNoIChuKSB7fVxuICB9KSgpXG5cbmNvbnN0IFNTR19EQVRBX05PVF9GT1VORCA9IFN5bWJvbCgnU1NHX0RBVEFfTk9UX0ZPVU5EJylcblxuZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmw6IHN0cmluZywgYXR0ZW1wdHM6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAvL1xuICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAvLyA+IG9wdGlvbi5cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgLy9cbiAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgIGlmICghcmVzLm9rKSB7XG4gICAgICBpZiAoYXR0ZW1wdHMgPiAxICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgIHJldHVybiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMgLSAxKVxuICAgICAgfVxuICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDQwNCkge1xuICAgICAgICByZXR1cm4gcmVzLmpzb24oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgaWYgKGRhdGEubm90Rm91bmQpIHtcbiAgICAgICAgICAgIHJldHVybiB7IG5vdEZvdW5kOiBTU0dfREFUQV9OT1RfRk9VTkQgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgfVxuICAgIHJldHVybiByZXMuanNvbigpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWY6IHN0cmluZywgaXNTZXJ2ZXJSZW5kZXI6IGJvb2xlYW4pIHtcbiAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG4gICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAvLyBsb29wLlxuXG4gICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgbWFya0Fzc2V0RXJyb3IoZXJyKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyIGltcGxlbWVudHMgQmFzZVJvdXRlciB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuXG4gIC8qKlxuICAgKiBNYXAgb2YgYWxsIGNvbXBvbmVudHMgbG9hZGVkIGluIGBSb3V0ZXJgXG4gICAqL1xuICBjb21wb25lbnRzOiB7IFtwYXRobmFtZTogc3RyaW5nXTogUHJpdmF0ZVJvdXRlSW5mbyB9XG4gIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gIHNkYzogeyBbYXNQYXRoOiBzdHJpbmddOiBvYmplY3QgfSA9IHt9XG4gIC8vIEluLWZsaWdodCBTZXJ2ZXIgRGF0YSBSZXF1ZXN0cywgZm9yIGRlZHVwaW5nXG4gIHNkcjogeyBbYXNQYXRoOiBzdHJpbmddOiBQcm9taXNlPG9iamVjdD4gfSA9IHt9XG5cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgX2luRmxpZ2h0Um91dGU/OiBzdHJpbmdcbiAgX3NoYWxsb3c/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuICBpc1JlYWR5OiBib29sZWFuXG4gIGlzUHJldmlldzogYm9vbGVhblxuICBpc0xvY2FsZURvbWFpbjogYm9vbGVhblxuXG4gIHByaXZhdGUgX2lkeDogbnVtYmVyID0gMFxuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgICBsb2NhbGUsXG4gICAgICBsb2NhbGVzLFxuICAgICAgZGVmYXVsdExvY2FsZSxcbiAgICAgIGRvbWFpbkxvY2FsZXMsXG4gICAgICBpc1ByZXZpZXcsXG4gICAgfToge1xuICAgICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb25cbiAgICAgIGluaXRpYWxQcm9wczogYW55XG4gICAgICBwYWdlTG9hZGVyOiBhbnlcbiAgICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgQXBwOiBBcHBDb21wb25lbnRcbiAgICAgIHdyYXBBcHA6IChXcmFwQXBwQ29tcG9uZW50OiBBcHBDb21wb25lbnQpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICAgIGxvY2FsZT86IHN0cmluZ1xuICAgICAgbG9jYWxlcz86IHN0cmluZ1tdXG4gICAgICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gICAgICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuICAgICAgaXNQcmV2aWV3PzogYm9vbGVhblxuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBpbml0aWFsOiB0cnVlLFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHtcbiAgICAgIENvbXBvbmVudDogQXBwIGFzIENvbXBvbmVudFR5cGUsXG4gICAgICBzdHlsZVNoZWV0czogW1xuICAgICAgICAvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXG4gICAgICBdLFxuICAgIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgY29uc3QgYXV0b0V4cG9ydER5bmFtaWMgPVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIHNlbGYuX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0XG5cbiAgICB0aGlzLmFzUGF0aCA9IGF1dG9FeHBvcnREeW5hbWljID8gcGF0aG5hbWUgOiBhc1xuICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aFxuICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uXG4gICAgdGhpcy5jbGMgPSBudWxsXG4gICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHBcbiAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICB0aGlzLmlzU3NyID0gdHJ1ZVxuXG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFja1xuXG4gICAgdGhpcy5pc1JlYWR5ID0gISEoXG4gICAgICBzZWxmLl9fTkVYVF9EQVRBX18uZ3NzcCB8fFxuICAgICAgc2VsZi5fX05FWFRfREFUQV9fLmdpcCB8fFxuICAgICAgKCFhdXRvRXhwb3J0RHluYW1pYyAmJlxuICAgICAgICAhc2VsZi5sb2NhdGlvbi5zZWFyY2ggJiZcbiAgICAgICAgIXByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMpXG4gICAgKVxuICAgIHRoaXMuaXNQcmV2aWV3ID0gISFpc1ByZXZpZXdcbiAgICB0aGlzLmlzTG9jYWxlRG9tYWluID0gZmFsc2VcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVxuICAgICAgdGhpcy5sb2NhbGVzID0gbG9jYWxlc1xuICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlID0gZGVmYXVsdExvY2FsZVxuICAgICAgdGhpcy5kb21haW5Mb2NhbGVzID0gZG9tYWluTG9jYWxlc1xuICAgICAgdGhpcy5pc0xvY2FsZURvbWFpbiA9ICEhZGV0ZWN0RG9tYWluTG9jYWxlKFxuICAgICAgICBkb21haW5Mb2NhbGVzLFxuICAgICAgICBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lXG4gICAgICApXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgICBnZXRVUkwoKSxcbiAgICAgICAgICB7IGxvY2FsZSB9XG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKVxuXG4gICAgICAvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuICAgICAgLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvblBvcFN0YXRlID0gKGU6IFBvcFN0YXRlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBjb25zdCBzdGF0ZSA9IGUuc3RhdGUgYXMgSGlzdG9yeVN0YXRlXG5cbiAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgLy9cbiAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXNcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICBnZXRVUkwoKVxuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFzdGF0ZS5fX04pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCBmb3JjZWRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IHVuZGVmaW5lZFxuICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucywgaWR4IH0gPSBzdGF0ZVxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgaWYgKHRoaXMuX2lkeCAhPT0gaWR4KSB7XG4gICAgICAgICAgLy8gU25hcHNob3QgY3VycmVudCBzY3JvbGwgcG9zaXRpb246XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICAgICdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsXG4gICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHsgeDogc2VsZi5wYWdlWE9mZnNldCwgeTogc2VsZi5wYWdlWU9mZnNldCB9KVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0gY2F0Y2gge31cblxuICAgICAgICAgIC8vIFJlc3RvcmUgb2xkIHNjcm9sbCBwb3NpdGlvbjpcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgdiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyArIGlkeClcbiAgICAgICAgICAgIGZvcmNlZFNjcm9sbCA9IEpTT04ucGFyc2UodiEpXG4gICAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSB7IHg6IDAsIHk6IDAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9pZHggPSBpZHhcblxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgaWYgKHRoaXMuaXNTc3IgJiYgYXMgPT09IHRoaXMuYXNQYXRoICYmIHBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoc3RhdGUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmNoYW5nZShcbiAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgdXJsLFxuICAgICAgYXMsXG4gICAgICBPYmplY3QuYXNzaWduPHt9LCBUcmFuc2l0aW9uT3B0aW9ucywgVHJhbnNpdGlvbk9wdGlvbnM+KHt9LCBvcHRpb25zLCB7XG4gICAgICAgIHNoYWxsb3c6IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLl9zaGFsbG93LFxuICAgICAgICBsb2NhbGU6IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZSxcbiAgICAgIH0pLFxuICAgICAgZm9yY2VkU2Nyb2xsXG4gICAgKVxuICB9XG5cbiAgcmVsb2FkKCk6IHZvaWQge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9cbiAgYmFjaygpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcHVzaCh1cmw6IFVybCwgYXM/OiBVcmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgLy8gVE9ETzogcmVtb3ZlIGluIHRoZSBmdXR1cmUgd2hlbiB3ZSB1cGRhdGUgaGlzdG9yeSBiZWZvcmUgcm91dGUgY2hhbmdlXG4gICAgICAvLyBpcyBjb21wbGV0ZSwgYXMgdGhlIHBvcHN0YXRlIGV2ZW50IHNob3VsZCBoYW5kbGUgdGhpcyBjYXB0dXJlLlxuICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gU25hcHNob3Qgc2Nyb2xsIHBvc2l0aW9uIHJpZ2h0IGJlZm9yZSBuYXZpZ2F0aW5nIHRvIGEgbmV3IHBhZ2U6XG4gICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgICAgICdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7IHg6IHNlbGYucGFnZVhPZmZzZXQsIHk6IHNlbGYucGFnZVlPZmZzZXQgfSlcbiAgICAgICAgICApXG4gICAgICAgIH0gY2F0Y2gge31cbiAgICAgIH1cbiAgICB9XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHJlcGxhY2UodXJsOiBVcmwsIGFzPzogVXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGNoYW5nZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyxcbiAgICBmb3JjZWRTY3JvbGw/OiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH1cbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKHVybCkpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBmb3Igc3RhdGljIHBhZ2VzIHdpdGggcXVlcnkgcGFyYW1zIGluIHRoZSBVUkwgd2UgZGVsYXlcbiAgICAvLyBtYXJraW5nIHRoZSByb3V0ZXIgcmVhZHkgdW50aWwgYWZ0ZXIgdGhlIHF1ZXJ5IGlzIHVwZGF0ZWRcbiAgICBpZiAoKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1JlYWR5ID0gdHJ1ZVxuICAgIH1cblxuICAgIC8vIERlZmF1bHQgdG8gc2Nyb2xsIHJlc2V0IGJlaGF2aW9yIHVubGVzcyBleHBsaWNpdGx5IHNwZWNpZmllZCB0byBiZVxuICAgIC8vIGBmYWxzZWAhIFRoaXMgbWFrZXMgdGhlIGJlaGF2aW9yIGJldHdlZW4gdXNpbmcgYFJvdXRlciNwdXNoYCBhbmQgYVxuICAgIC8vIGA8TGluayAvPmAgY29uc2lzdGVudC5cbiAgICBvcHRpb25zLnNjcm9sbCA9ICEhKG9wdGlvbnMuc2Nyb2xsID8/IHRydWUpXG5cbiAgICBsZXQgbG9jYWxlQ2hhbmdlID0gb3B0aW9ucy5sb2NhbGUgIT09IHRoaXMubG9jYWxlXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgdGhpcy5sb2NhbGUgPVxuICAgICAgICBvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2VcbiAgICAgICAgICA/IHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICAgIDogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5sb2NhbGVcblxuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmxvY2FsZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSB0aGlzLmxvY2FsZVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwoaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMpXG4gICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUsXG4gICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgKVxuXG4gICAgICBpZiAobG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSkge1xuICAgICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGVcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYXJzZWRBcy5wYXRobmFtZSlcbiAgICAgICAgYXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcylcbiAgICAgICAgdXJsID0gYWRkQmFzZVBhdGgoXG4gICAgICAgICAgbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgICAgICAgICAgIGhhc0Jhc2VQYXRoKHVybCkgPyBkZWxCYXNlUGF0aCh1cmwpIDogdXJsLFxuICAgICAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICAgICAgKS5wYXRobmFtZVxuICAgICAgICApXG4gICAgICB9XG4gICAgICBsZXQgZGlkTmF2aWdhdGUgPSBmYWxzZVxuXG4gICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgIC8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgLy8gaWYgdGhlIGxvY2FsZSBpc24ndCBjb25maWd1cmVkIGhhcmQgbmF2aWdhdGUgdG8gc2hvdyA0MDQgcGFnZVxuICAgICAgICBpZiAoIXRoaXMubG9jYWxlcz8uaW5jbHVkZXModGhpcy5sb2NhbGUhKSkge1xuICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gYWRkTG9jYWxlKHBhcnNlZEFzLnBhdGhuYW1lLCB0aGlzLmxvY2FsZSlcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKVxuICAgICAgICAgIC8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4gICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBkZXRlY3RlZERvbWFpbiA9IGRldGVjdERvbWFpbkxvY2FsZShcbiAgICAgICAgdGhpcy5kb21haW5Mb2NhbGVzLFxuICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgIHRoaXMubG9jYWxlXG4gICAgICApXG5cbiAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAvLyBpZiB3ZSBhcmUgbmF2aWdhdGluZyB0byBhIGRvbWFpbiBsb2NhbGUgZW5zdXJlIHdlIHJlZGlyZWN0IHRvIHRoZVxuICAgICAgICAvLyBjb3JyZWN0IGRvbWFpblxuICAgICAgICBpZiAoXG4gICAgICAgICAgIWRpZE5hdmlnYXRlICYmXG4gICAgICAgICAgZGV0ZWN0ZWREb21haW4gJiZcbiAgICAgICAgICB0aGlzLmlzTG9jYWxlRG9tYWluICYmXG4gICAgICAgICAgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSAhPT0gZGV0ZWN0ZWREb21haW4uZG9tYWluXG4gICAgICAgICkge1xuICAgICAgICAgIGNvbnN0IGFzTm9CYXNlUGF0aCA9IGRlbEJhc2VQYXRoKGFzKVxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHAgPyAnJyA6ICdzJ306Ly8ke1xuICAgICAgICAgICAgZGV0ZWN0ZWREb21haW4uZG9tYWluXG4gICAgICAgICAgfSR7YWRkQmFzZVBhdGgoXG4gICAgICAgICAgICBgJHtcbiAgICAgICAgICAgICAgdGhpcy5sb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgICAgICAgICA/ICcnXG4gICAgICAgICAgICAgICAgOiBgLyR7dGhpcy5sb2NhbGV9YFxuICAgICAgICAgICAgfSR7YXNOb0Jhc2VQYXRoID09PSAnLycgPyAnJyA6IGFzTm9CYXNlUGF0aH1gIHx8ICcvJ1xuICAgICAgICAgICl9YFxuICAgICAgICAgIC8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4gICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZGlkTmF2aWdhdGUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpID0+IHt9KVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgfVxuICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICBpZiAoU1QpIHtcbiAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJylcbiAgICB9XG5cbiAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9uc1xuICAgIGNvbnN0IHJvdXRlUHJvcHMgPSB7IHNoYWxsb3cgfVxuXG4gICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUsIHJvdXRlUHJvcHMpXG4gICAgfVxuXG4gICAgYXMgPSBhZGRCYXNlUGF0aChcbiAgICAgIGFkZExvY2FsZShcbiAgICAgICAgaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsXG4gICAgICAgIG9wdGlvbnMubG9jYWxlLFxuICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgIClcbiAgICApXG4gICAgY29uc3QgY2xlYW5lZEFzID0gZGVsTG9jYWxlKFxuICAgICAgaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsXG4gICAgICB0aGlzLmxvY2FsZVxuICAgIClcbiAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXNcblxuICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuXG4gICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSkge1xuICAgICAgdGhpcy5hc1BhdGggPSBjbGVhbmVkQXNcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMsIHJvdXRlUHJvcHMpXG4gICAgICAvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG4gICAgICB0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpXG4gICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0sIG51bGwpXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG4gICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSBwYXJzZWRcblxuICAgIC8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbiAgICAvLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbiAgICAvLyB3aGVuIHJld3JpdHRlbiB0b1xuICAgIGxldCBwYWdlczogYW55LCByZXdyaXRlczogYW55XG4gICAgdHJ5IHtcbiAgICAgIHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcbiAgICAgIDsoeyBfX3Jld3JpdGVzOiByZXdyaXRlcyB9ID0gYXdhaXQgZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgLy8gSWYgd2UgZmFpbCB0byByZXNvbHZlIHRoZSBwYWdlIGxpc3Qgb3IgY2xpZW50LWJ1aWxkIG1hbmlmZXN0LCB3ZSBtdXN0XG4gICAgICAvLyBkbyBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb246XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSAmJiAhbG9jYWxlQ2hhbmdlKSB7XG4gICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJ1xuICAgIH1cblxuICAgIC8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4gICAgLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxuICAgIGxldCByZXNvbHZlZEFzID0gYXNcblxuICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAvLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4gICAgLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICA/IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSlcbiAgICAgIDogcGF0aG5hbWVcblxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyAmJiBhcy5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgY29uc3QgcmV3cml0ZXNSZXN1bHQgPSByZXNvbHZlUmV3cml0ZXMoXG4gICAgICAgICAgYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGNsZWFuZWRBcywgdGhpcy5sb2NhbGUpKSxcbiAgICAgICAgICBwYWdlcyxcbiAgICAgICAgICByZXdyaXRlcyxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAocDogc3RyaW5nKSA9PiByZXNvbHZlRHluYW1pY1JvdXRlKHAsIHBhZ2VzKSxcbiAgICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgICAgKVxuICAgICAgICByZXNvbHZlZEFzID0gcmV3cml0ZXNSZXN1bHQuYXNQYXRoXG5cbiAgICAgICAgaWYgKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlICYmIHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZikge1xuICAgICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICAgIHBhdGhuYW1lID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmXG4gICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWUsIHBhZ2VzKVxuXG4gICAgICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgaWYgKCFpc0xvY2FsVVJMKGFzKSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBJbnZhbGlkIGhyZWY6IFwiJHt1cmx9XCIgYW5kIGFzOiBcIiR7YXN9XCIsIHJlY2VpdmVkIHJlbGF0aXZlIGhyZWYgYW5kIGV4dGVybmFsIGFzYCArXG4gICAgICAgICAgICBgXFxuU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvaW52YWxpZC1yZWxhdGl2ZS11cmwtZXh0ZXJuYWwtYXNgXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSwgdGhpcy5sb2NhbGUpXG5cbiAgICBpZiAoaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICBjb25zdCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwocmVzb2x2ZWRBcylcbiAgICAgIGNvbnN0IGFzUGF0aG5hbWUgPSBwYXJzZWRBcy5wYXRobmFtZVxuXG4gICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgIGNvbnN0IHNob3VsZEludGVycG9sYXRlID0gcm91dGUgPT09IGFzUGF0aG5hbWVcbiAgICAgIGNvbnN0IGludGVycG9sYXRlZEFzID0gc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgPyBpbnRlcnBvbGF0ZUFzKHJvdXRlLCBhc1BhdGhuYW1lLCBxdWVyeSlcbiAgICAgICAgOiAoe30gYXMgeyByZXN1bHQ6IHVuZGVmaW5lZDsgcGFyYW1zOiB1bmRlZmluZWQgfSlcblxuICAgICAgaWYgKCFyb3V0ZU1hdGNoIHx8IChzaG91bGRJbnRlcnBvbGF0ZSAmJiAhaW50ZXJwb2xhdGVkQXMucmVzdWx0KSkge1xuICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihcbiAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICBgJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyBgSW50ZXJwb2xhdGluZyBocmVmYFxuICAgICAgICAgICAgICAgICAgOiBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGBgXG4gICAgICAgICAgICAgIH0gZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgKHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgID8gYFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSkgdG8gYmUgaW50ZXJwb2xhdGVkIHByb3Blcmx5LiBgXG4gICAgICAgICAgICAgIDogYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCkgK1xuICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy8ke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/ICdocmVmLWludGVycG9sYXRpb24tZmFpbGVkJ1xuICAgICAgICAgICAgICAgICAgOiAnaW5jb21wYXRpYmxlLWhyZWYtYXMnXG4gICAgICAgICAgICAgIH1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHNob3VsZEludGVycG9sYXRlKSB7XG4gICAgICAgIGFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcGFyc2VkQXMsIHtcbiAgICAgICAgICAgIHBhdGhuYW1lOiBpbnRlcnBvbGF0ZWRBcy5yZXN1bHQsXG4gICAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBpbnRlcnBvbGF0ZWRBcy5wYXJhbXMhKSxcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKVxuICAgICAgfVxuICAgIH1cblxuICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKVxuXG4gICAgdHJ5IHtcbiAgICAgIGxldCByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgIHJvdXRlUHJvcHNcbiAgICAgIClcbiAgICAgIGxldCB7IGVycm9yLCBwcm9wcywgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIC8vIGhhbmRsZSByZWRpcmVjdCBvbiBjbGllbnQtdHJhbnNpdGlvblxuICAgICAgaWYgKChfX05fU1NHIHx8IF9fTl9TU1ApICYmIHByb3BzKSB7XG4gICAgICAgIGlmICgocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMgJiYgKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVCkge1xuICAgICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVFxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcbiAgICAgICAgICAvLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXG4gICAgICAgICAgLy8gaXQncyBub3RcbiAgICAgICAgICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJzZWRIcmVmID0gcGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbilcbiAgICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUgPSByZXNvbHZlRHluYW1pY1JvdXRlKFxuICAgICAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lLFxuICAgICAgICAgICAgICBwYWdlc1xuICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocGFyc2VkSHJlZi5wYXRobmFtZSkpIHtcbiAgICAgICAgICAgICAgY29uc3QgeyB1cmw6IG5ld1VybCwgYXM6IG5ld0FzIH0gPSBwcmVwYXJlVXJsQXMoXG4gICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbixcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvblxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5nZShtZXRob2QsIG5ld1VybCwgbmV3QXMsIG9wdGlvbnMpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkZXN0aW5hdGlvblxuICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKSA9PiB7fSlcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaXNQcmV2aWV3ID0gISFwcm9wcy5fX05fUFJFVklFV1xuXG4gICAgICAgIC8vIGhhbmRsZSBTU0cgZGF0YSA0MDRcbiAgICAgICAgaWYgKHByb3BzLm5vdEZvdW5kID09PSBTU0dfREFUQV9OT1RfRk9VTkQpIHtcbiAgICAgICAgICBsZXQgbm90Rm91bmRSb3V0ZVxuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy80MDQnKVxuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSA9ICcvNDA0J1xuICAgICAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUgPSAnL19lcnJvcidcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUsXG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlLFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICBhcyxcbiAgICAgICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgICAgICB7IHNoYWxsb3c6IGZhbHNlIH1cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMsIHJvdXRlUHJvcHMpXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgfVxuXG4gICAgICAvLyBzaGFsbG93IHJvdXRpbmcgaXMgb25seSBhbGxvd2VkIGZvciBzYW1lIHBhZ2UgVVJMIGNoYW5nZXMuXG4gICAgICBjb25zdCBpc1ZhbGlkU2hhbGxvd1JvdXRlID0gb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMucm91dGUgPT09IHJvdXRlXG5cbiAgICAgIGlmIChcbiAgICAgICAgKG9wdGlvbnMgYXMgYW55KS5faCAmJlxuICAgICAgICBwYXRobmFtZSA9PT0gJy9fZXJyb3InICYmXG4gICAgICAgIHNlbGYuX19ORVhUX0RBVEFfXy5wcm9wcz8ucGFnZVByb3BzPy5zdGF0dXNDb2RlID09PSA1MDAgJiZcbiAgICAgICAgcHJvcHM/LnBhZ2VQcm9wc1xuICAgICAgKSB7XG4gICAgICAgIC8vIGVuc3VyZSBzdGF0dXNDb2RlIGlzIHN0aWxsIGNvcnJlY3QgZm9yIHN0YXRpYyA1MDAgcGFnZVxuICAgICAgICAvLyB3aGVuIHVwZGF0aW5nIHF1ZXJ5IGluZm9ybWF0aW9uXG4gICAgICAgIHByb3BzLnBhZ2VQcm9wcy5zdGF0dXNDb2RlID0gNTAwXG4gICAgICB9XG5cbiAgICAgIGF3YWl0IHRoaXMuc2V0KFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUhLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgY2xlYW5lZEFzLFxuICAgICAgICByb3V0ZUluZm8sXG4gICAgICAgIGZvcmNlZFNjcm9sbCB8fFxuICAgICAgICAgIChpc1ZhbGlkU2hhbGxvd1JvdXRlIHx8ICFvcHRpb25zLnNjcm9sbCA/IG51bGwgOiB7IHg6IDAsIHk6IDAgfSlcbiAgICAgICkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgaWYgKGUuY2FuY2VsbGVkKSBlcnJvciA9IGVycm9yIHx8IGVcbiAgICAgICAgZWxzZSB0aHJvdyBlXG4gICAgICB9KVxuXG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGNsZWFuZWRBcywgcm91dGVQcm9wcylcbiAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgIH1cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgaWYgKHRoaXMubG9jYWxlKSB7XG4gICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmxhbmcgPSB0aGlzLmxvY2FsZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcylcblxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9XG5cbiAgY2hhbmdlU3RhdGUoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fVxuICApOiB2b2lkIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8IGdldFVSTCgpICE9PSBhcykge1xuICAgICAgdGhpcy5fc2hhbGxvdyA9IG9wdGlvbnMuc2hhbGxvd1xuICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXShcbiAgICAgICAge1xuICAgICAgICAgIHVybCxcbiAgICAgICAgICBhcyxcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgIF9fTjogdHJ1ZSxcbiAgICAgICAgICBpZHg6IHRoaXMuX2lkeCA9IG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgPyB0aGlzLl9pZHggOiB0aGlzLl9pZHggKyAxLFxuICAgICAgICB9IGFzIEhpc3RvcnlTdGF0ZSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICByb3V0ZVByb3BzOiBSb3V0ZVByb3BlcnRpZXMsXG4gICAgbG9hZEVycm9yRmFpbD86IGJvb2xlYW5cbiAgKTogUHJvbWlzZTxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cblxuICAgIGlmIChpc0Fzc2V0RXJyb3IoZXJyKSB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnIsIGFzLCByb3V0ZVByb3BzKVxuXG4gICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcblxuICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG5cbiAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgIHRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBsZXQgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBsZXQgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gICAgICBsZXQgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT4gfCB1bmRlZmluZWRcblxuICAgICAgaWYgKFxuICAgICAgICB0eXBlb2YgQ29tcG9uZW50ISA9PT0gJ3VuZGVmaW5lZCcgfHxcbiAgICAgICAgdHlwZW9mIHN0eWxlU2hlZXRzISA9PT0gJ3VuZGVmaW5lZCdcbiAgICAgICkge1xuICAgICAgICA7KHsgcGFnZTogQ29tcG9uZW50LCBzdHlsZVNoZWV0cyB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChcbiAgICAgICAgICAnL19lcnJvcidcbiAgICAgICAgKSlcbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gPSB7XG4gICAgICAgIHByb3BzLFxuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzLFxuICAgICAgICBlcnIsXG4gICAgICAgIGVycm9yOiBlcnIsXG4gICAgICB9XG5cbiAgICAgIGlmICghcm91dGVJbmZvLnByb3BzKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIH0gYXMgYW55KVxuICAgICAgICB9IGNhdGNoIChnaXBFcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpXG4gICAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge31cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihcbiAgICAgICAgcm91dGVJbmZvRXJyLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICByb3V0ZVByb3BzLFxuICAgICAgICB0cnVlXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0Um91dGVJbmZvKFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgcmVzb2x2ZWRBczogc3RyaW5nLFxuICAgIHJvdXRlUHJvcHM6IFJvdXRlUHJvcGVydGllc1xuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZXhpc3RpbmdSb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gfCB1bmRlZmluZWQgPSB0aGlzLmNvbXBvbmVudHNbXG4gICAgICAgIHJvdXRlXG4gICAgICBdXG4gICAgICBpZiAocm91dGVQcm9wcy5zaGFsbG93ICYmIGV4aXN0aW5nUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgIHJldHVybiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgfVxuXG4gICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm86IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyB8IHVuZGVmaW5lZCA9XG4gICAgICAgIGV4aXN0aW5nUm91dGVJbmZvICYmICdpbml0aWFsJyBpbiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgICAgID8gdW5kZWZpbmVkXG4gICAgICAgICAgOiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgY29uc3Qgcm91dGVJbmZvOiBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gPSBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgPyBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgOiBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKChyZXMpID0+ICh7XG4gICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgc3R5bGVTaGVldHM6IHJlcy5zdHlsZVNoZWV0cyxcbiAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICB9KSlcblxuICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKVxuICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgZGF0YUhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoX19OX1NTRyB8fCBfX05fU1NQKSB7XG4gICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgICAgX19OX1NTRyxcbiAgICAgICAgICB0aGlzLmxvY2FsZVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YTxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8+KCgpID0+XG4gICAgICAgIF9fTl9TU0dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhcbiAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgfSBhcyBhbnlcbiAgICAgICAgICAgIClcbiAgICAgIClcblxuICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm9cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVQcm9wcylcbiAgICB9XG4gIH1cblxuICBzZXQoXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sXG4gICAgcmVzZXRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGxcbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2VcblxuICAgIHRoaXMucm91dGUgPSByb3V0ZVxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSwgcmVzZXRTY3JvbGwpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGJlZm9yZVBvcFN0YXRlKGNiOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5fYnBzID0gY2JcbiAgfVxuXG4gIG9ubHlBSGFzaENoYW5nZShhczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpXG4gICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpXG5cbiAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoXG4gIH1cblxuICBzY3JvbGxUb0hhc2goYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKVxuICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZSBvciBgI3RvcGBcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBpZiAoaGFzaCA9PT0gJycgfHwgaGFzaCA9PT0gJ3RvcCcpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIGFzeW5jIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICBpZiAob3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlKSB7XG4gICAgICAgIHBhdGhuYW1lID0gbm9ybWFsaXplTG9jYWxlUGF0aCEocGF0aG5hbWUsIHRoaXMubG9jYWxlcykucGF0aG5hbWVcbiAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuXG4gICAgICAgIGxldCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwoYXNQYXRoKVxuICAgICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gbm9ybWFsaXplTG9jYWxlUGF0aCEoXG4gICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUsXG4gICAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICAgIClcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBsb2NhbGVQYXRoUmVzdWx0LnBhdGhuYW1lXG4gICAgICAgIG9wdGlvbnMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgYXNQYXRoID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuICAgIGxldCByZXNvbHZlZEFzID0gYXNQYXRoXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyAmJiBhc1BhdGguc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICBsZXQgcmV3cml0ZXM6IGFueVxuICAgICAgOyh7IF9fcmV3cml0ZXM6IHJld3JpdGVzIH0gPSBhd2FpdCBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkpXG5cbiAgICAgIGNvbnN0IHJld3JpdGVzUmVzdWx0ID0gcmVzb2x2ZVJld3JpdGVzKFxuICAgICAgICBhZGRCYXNlUGF0aChhZGRMb2NhbGUoYXNQYXRoLCB0aGlzLmxvY2FsZSkpLFxuICAgICAgICBwYWdlcyxcbiAgICAgICAgcmV3cml0ZXMsXG4gICAgICAgIHBhcnNlZC5xdWVyeSxcbiAgICAgICAgKHA6IHN0cmluZykgPT4gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwLCBwYWdlcyksXG4gICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgKVxuICAgICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXdyaXRlc1Jlc3VsdC5hc1BhdGgpLCB0aGlzLmxvY2FsZSlcblxuICAgICAgaWYgKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlICYmIHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZikge1xuICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgIHBhdGhuYW1lID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmXG4gICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWQucGF0aG5hbWUsIHBhZ2VzKVxuXG4gICAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIHRoaXMucGFnZUxvYWRlci5faXNTc2cocm91dGUpLnRoZW4oKGlzU3NnOiBib29sZWFuKSA9PiB7XG4gICAgICAgIHJldHVybiBpc1NzZ1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShcbiAgICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICByZXNvbHZlZEFzLFxuICAgICAgICAgICAgICAgIHRydWUsXG4gICAgICAgICAgICAgICAgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgICAgICAgPyBvcHRpb25zLmxvY2FsZVxuICAgICAgICAgICAgICAgICAgOiB0aGlzLmxvY2FsZVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgOiBmYWxzZVxuICAgICAgfSksXG4gICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgXSlcbiAgfVxuXG4gIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPEdvb2RQYWdlQ2FjaGU+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IGNhY2hlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAoXG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmXG4gICAgICAhdGhpcy5pc1ByZXZpZXcgJiZcbiAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XVxuICAgICkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pXG4gICAgfVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IHJlc291cmNlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAodGhpcy5zZHJbcmVzb3VyY2VLZXldKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZHJbcmVzb3VyY2VLZXldXG4gICAgfVxuICAgIHJldHVybiAodGhpcy5zZHJbcmVzb3VyY2VLZXldID0gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcilcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV1cbiAgICAgICAgcmV0dXJuIGRhdGFcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfSkpXG4gIH1cblxuICBnZXRJbml0aWFsUHJvcHMoXG4gICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlLFxuICAgIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddXG4gICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwIGFzIEFwcENvbXBvbmVudClcbiAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWVcbiAgICByZXR1cm4gbG9hZEdldEluaXRpYWxQcm9wczxBcHBDb250ZXh0VHlwZTxSb3V0ZXI+PihBcHAsIHtcbiAgICAgIEFwcFRyZWUsXG4gICAgICBDb21wb25lbnQsXG4gICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICBjdHgsXG4gICAgfSlcbiAgfVxuXG4gIGFib3J0Q29tcG9uZW50TG9hZChhczogc3RyaW5nLCByb3V0ZVByb3BzOiBSb3V0ZVByb3BlcnRpZXMpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdChcbiAgICAgICAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAgICAgICBidWlsZENhbmNlbGxhdGlvbkVycm9yKCksXG4gICAgICAgIGFzLFxuICAgICAgICByb3V0ZVByb3BzXG4gICAgICApXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoXG4gICAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyxcbiAgICByZXNldFNjcm9sbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgbnVsbFxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdWIoXG4gICAgICBkYXRhLFxuICAgICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCBhcyBBcHBDb21wb25lbnQsXG4gICAgICByZXNldFNjcm9sbFxuICAgIClcbiAgfVxufVxuIiwiLy8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCAqIGFzIHF1ZXJ5c3RyaW5nIGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHMgPSAvaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS9cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmo6IFVybE9iamVjdCkge1xuICBsZXQgeyBhdXRoLCBob3N0bmFtZSB9ID0gdXJsT2JqXG4gIGxldCBwcm90b2NvbCA9IHVybE9iai5wcm90b2NvbCB8fCAnJ1xuICBsZXQgcGF0aG5hbWUgPSB1cmxPYmoucGF0aG5hbWUgfHwgJydcbiAgbGV0IGhhc2ggPSB1cmxPYmouaGFzaCB8fCAnJ1xuICBsZXQgcXVlcnkgPSB1cmxPYmoucXVlcnkgfHwgJydcbiAgbGV0IGhvc3Q6IHN0cmluZyB8IGZhbHNlID0gZmFsc2VcblxuICBhdXRoID0gYXV0aCA/IGVuY29kZVVSSUNvbXBvbmVudChhdXRoKS5yZXBsYWNlKC8lM0EvaSwgJzonKSArICdAJyA6ICcnXG5cbiAgaWYgKHVybE9iai5ob3N0KSB7XG4gICAgaG9zdCA9IGF1dGggKyB1cmxPYmouaG9zdFxuICB9IGVsc2UgaWYgKGhvc3RuYW1lKSB7XG4gICAgaG9zdCA9IGF1dGggKyAofmhvc3RuYW1lLmluZGV4T2YoJzonKSA/IGBbJHtob3N0bmFtZX1dYCA6IGhvc3RuYW1lKVxuICAgIGlmICh1cmxPYmoucG9ydCkge1xuICAgICAgaG9zdCArPSAnOicgKyB1cmxPYmoucG9ydFxuICAgIH1cbiAgfVxuXG4gIGlmIChxdWVyeSAmJiB0eXBlb2YgcXVlcnkgPT09ICdvYmplY3QnKSB7XG4gICAgcXVlcnkgPSBTdHJpbmcocXVlcnlzdHJpbmcudXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhxdWVyeSBhcyBQYXJzZWRVcmxRdWVyeSkpXG4gIH1cblxuICBsZXQgc2VhcmNoID0gdXJsT2JqLnNlYXJjaCB8fCAocXVlcnkgJiYgYD8ke3F1ZXJ5fWApIHx8ICcnXG5cbiAgaWYgKHByb3RvY29sICYmIHByb3RvY29sLnN1YnN0cigtMSkgIT09ICc6JykgcHJvdG9jb2wgKz0gJzonXG5cbiAgaWYgKFxuICAgIHVybE9iai5zbGFzaGVzIHx8XG4gICAgKCghcHJvdG9jb2wgfHwgc2xhc2hlZFByb3RvY29scy50ZXN0KHByb3RvY29sKSkgJiYgaG9zdCAhPT0gZmFsc2UpXG4gICkge1xuICAgIGhvc3QgPSAnLy8nICsgKGhvc3QgfHwgJycpXG4gICAgaWYgKHBhdGhuYW1lICYmIHBhdGhuYW1lWzBdICE9PSAnLycpIHBhdGhuYW1lID0gJy8nICsgcGF0aG5hbWVcbiAgfSBlbHNlIGlmICghaG9zdCkge1xuICAgIGhvc3QgPSAnJ1xuICB9XG5cbiAgaWYgKGhhc2ggJiYgaGFzaFswXSAhPT0gJyMnKSBoYXNoID0gJyMnICsgaGFzaFxuICBpZiAoc2VhcmNoICYmIHNlYXJjaFswXSAhPT0gJz8nKSBzZWFyY2ggPSAnPycgKyBzZWFyY2hcblxuICBwYXRobmFtZSA9IHBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZywgZW5jb2RlVVJJQ29tcG9uZW50KVxuICBzZWFyY2ggPSBzZWFyY2gucmVwbGFjZSgnIycsICclMjMnKVxuXG4gIHJldHVybiBgJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YFxufVxuIiwiLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpXG59XG4iLCJpbXBvcnQgeyBnZXRMb2NhdGlvbk9yaWdpbiB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbi8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZCB3aXRoIG9uZSBleGNlcHRpb24sIGluIHRoZSBicm93c2VyLCBhYnNvbHV0ZSB1cmxzIHRoYXQgYXJlIG9uXG4gKiB0aGUgY3VycmVudCBvcmlnaW4gd2lsbCBiZSBwYXJzZWQgYXMgcmVsYXRpdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsOiBzdHJpbmcsIGJhc2U/OiBzdHJpbmcpIHtcbiAgY29uc3QgZ2xvYmFsQmFzZSA9IG5ldyBVUkwoXG4gICAgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyAnaHR0cDovL24nIDogZ2V0TG9jYXRpb25PcmlnaW4oKVxuICApXG4gIGNvbnN0IHJlc29sdmVkQmFzZSA9IGJhc2UgPyBuZXcgVVJMKGJhc2UsIGdsb2JhbEJhc2UpIDogZ2xvYmFsQmFzZVxuICBjb25zdCB7IHBhdGhuYW1lLCBzZWFyY2hQYXJhbXMsIHNlYXJjaCwgaGFzaCwgaHJlZiwgb3JpZ2luIH0gPSBuZXcgVVJMKFxuICAgIHVybCxcbiAgICByZXNvbHZlZEJhc2VcbiAgKVxuICBpZiAob3JpZ2luICE9PSBnbG9iYWxCYXNlLm9yaWdpbikge1xuICAgIHRocm93IG5ldyBFcnJvcihgaW52YXJpYW50OiBpbnZhbGlkIHJlbGF0aXZlIFVSTCwgcm91dGVyIHJlY2VpdmVkICR7dXJsfWApXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBxdWVyeTogc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWY6IGhyZWYuc2xpY2UoZ2xvYmFsQmFzZS5vcmlnaW4ubGVuZ3RoKSxcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoXG4gIHNlYXJjaFBhcmFtczogVVJMU2VhcmNoUGFyYW1zXG4pOiBQYXJzZWRVcmxRdWVyeSB7XG4gIGNvbnN0IHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG4gIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeVtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcXVlcnlba2V5XSA9IHZhbHVlXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKSB7XG4gICAgICA7KHF1ZXJ5W2tleV0gYXMgc3RyaW5nW10pLnB1c2godmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSBhcyBzdHJpbmcsIHZhbHVlXVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHF1ZXJ5XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0ocGFyYW06IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmIChcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdzdHJpbmcnIHx8XG4gICAgKHR5cGVvZiBwYXJhbSA9PT0gJ251bWJlcicgJiYgIWlzTmFOKHBhcmFtKSkgfHxcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdib29sZWFuJ1xuICApIHtcbiAgICByZXR1cm4gU3RyaW5nKHBhcmFtKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAnJ1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cmxRdWVyeVRvU2VhcmNoUGFyYW1zKFxuICB1cmxRdWVyeTogUGFyc2VkVXJsUXVlcnlcbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxuICBPYmplY3QuZW50cmllcyh1cmxRdWVyeSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChpdGVtKSA9PiByZXN1bHQuYXBwZW5kKGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShpdGVtKSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5zZXQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHZhbHVlKSlcbiAgICB9XG4gIH0pXG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbihcbiAgdGFyZ2V0OiBVUkxTZWFyY2hQYXJhbXMsXG4gIC4uLnNlYXJjaFBhcmFtc0xpc3Q6IFVSTFNlYXJjaFBhcmFtc1tdXG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBzZWFyY2hQYXJhbXNMaXN0LmZvckVhY2goKHNlYXJjaFBhcmFtcykgPT4ge1xuICAgIEFycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaCgoa2V5KSA9PiB0YXJnZXQuZGVsZXRlKGtleSkpXG4gICAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHRhcmdldC5hcHBlbmQoa2V5LCB2YWx1ZSkpXG4gIH0pXG4gIHJldHVybiB0YXJnZXRcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlc29sdmVSZXdyaXRlcygpIHt9XG4iLCJpbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi9yb3V0ZS1yZWdleCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4OiBSZXR1cm5UeXBlPHR5cGVvZiBnZXRSb3V0ZVJlZ2V4Pikge1xuICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXhcbiAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByZS5leGVjKHBhdGhuYW1lISlcbiAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbTogc3RyaW5nKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKVxuICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICBjb25zdCBlcnI6IEVycm9yICYgeyBjb2RlPzogc3RyaW5nIH0gPSBuZXcgRXJyb3IoXG4gICAgICAgICAgJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nXG4gICAgICAgIClcbiAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCdcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHBhcmFtczogeyBbcGFyYW1OYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9ID0ge31cblxuICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV1cbiAgICAgIGNvbnN0IG0gPSByb3V0ZU1hdGNoW2cucG9zXVxuICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXJhbXNbc2x1Z05hbWVdID0gfm0uaW5kZXhPZignLycpXG4gICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKChlbnRyeSkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICA6IGcucmVwZWF0XG4gICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgIDogZGVjb2RlKG0pXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcGFyYW1zXG4gIH1cbn1cbiIsImV4cG9ydCBpbnRlcmZhY2UgR3JvdXAge1xuICBwb3M6IG51bWJlclxuICByZXBlYXQ6IGJvb2xlYW5cbiAgb3B0aW9uYWw6IGJvb2xlYW5cbn1cblxuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW06IHN0cmluZykge1xuICBjb25zdCBvcHRpb25hbCA9IHBhcmFtLnN0YXJ0c1dpdGgoJ1snKSAmJiBwYXJhbS5lbmRzV2l0aCgnXScpXG4gIGlmIChvcHRpb25hbCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMSwgLTEpXG4gIH1cbiAgY29uc3QgcmVwZWF0ID0gcGFyYW0uc3RhcnRzV2l0aCgnLi4uJylcbiAgaWYgKHJlcGVhdCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMylcbiAgfVxuICByZXR1cm4geyBrZXk6IHBhcmFtLCByZXBlYXQsIG9wdGlvbmFsIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICByb3V0ZUtleXM/OiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH1cbiAgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH1cbn0ge1xuICBjb25zdCBzZWdtZW50cyA9IChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG4gICAgLnNsaWNlKDEpXG4gICAgLnNwbGl0KCcvJylcblxuICBjb25zdCBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfSA9IHt9XG4gIGxldCBncm91cEluZGV4ID0gMVxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICBncm91cHNba2V5XSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdCwgb3B0aW9uYWwgfVxuICAgICAgICByZXR1cm4gcmVwZWF0ID8gKG9wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgIH1cbiAgICB9KVxuICAgIC5qb2luKCcnKVxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsZXQgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgbGV0IHJvdXRlS2V5Q2hhckxlbmd0aCA9IDFcblxuICAgIC8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbiAgICBjb25zdCBnZXRTYWZlUm91dGVLZXkgPSAoKSA9PiB7XG4gICAgICBsZXQgcm91dGVLZXkgPSAnJ1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlS2V5Q2hhckxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJvdXRlS2V5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocm91dGVLZXlDaGFyQ29kZSlcbiAgICAgICAgcm91dGVLZXlDaGFyQ29kZSsrXG5cbiAgICAgICAgaWYgKHJvdXRlS2V5Q2hhckNvZGUgPiAxMjIpIHtcbiAgICAgICAgICByb3V0ZUtleUNoYXJMZW5ndGgrK1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcm91dGVLZXlcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZUtleXM6IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9XG5cbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICAgIC8vIHJlcGxhY2UgYW55IG5vbi13b3JkIGNoYXJhY3RlcnMgc2luY2UgdGhleSBjYW4gYnJlYWtcbiAgICAgICAgICAvLyB0aGUgbmFtZWQgcmVnZXhcbiAgICAgICAgICBsZXQgY2xlYW5lZEtleSA9IGtleS5yZXBsYWNlKC9cXFcvZywgJycpXG4gICAgICAgICAgbGV0IGludmFsaWRLZXkgPSBmYWxzZVxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4gICAgICAgICAgLy8gc2FmZSBrZXlcbiAgICAgICAgICBpZiAoY2xlYW5lZEtleS5sZW5ndGggPT09IDAgfHwgY2xlYW5lZEtleS5sZW5ndGggPiAzMCkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc05hTihwYXJzZUludChjbGVhbmVkS2V5LnN1YnN0cigwLCAxKSkpKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbnZhbGlkS2V5KSB7XG4gICAgICAgICAgICBjbGVhbmVkS2V5ID0gZ2V0U2FmZVJvdXRlS2V5KClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUtleXNbY2xlYW5lZEtleV0gPSBrZXlcbiAgICAgICAgICByZXR1cm4gcmVwZWF0XG4gICAgICAgICAgICA/IG9wdGlvbmFsXG4gICAgICAgICAgICAgID8gYCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2BcbiAgICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWBcbiAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuam9pbignJylcblxuICAgIHJldHVybiB7XG4gICAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICAgIGdyb3VwcyxcbiAgICAgIHJvdXRlS2V5cyxcbiAgICAgIG5hbWVkUmVnZXg6IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCxcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgIGdyb3VwcyxcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgZm9ybWF0VXJsIH0gZnJvbSAnLi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybCdcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBFbnYgfSBmcm9tICdAbmV4dC9lbnYnXG5pbXBvcnQgeyBCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vc2VydmVyL2dldC1wYWdlLWZpbGVzJ1xuaW1wb3J0IHsgRG9tYWluTG9jYWxlcyB9IGZyb20gJy4uL3NlcnZlci9jb25maWcnXG5pbXBvcnQgeyBQcmV2aWV3RGF0YSB9IGZyb20gJ25leHQvdHlwZXMnXG5cbi8qKlxuICogVHlwZXMgdXNlZCBieSBib3RoIG5leHQgYW5kIG5leHQtc2VydmVyXG4gKi9cblxuZXhwb3J0IHR5cGUgTmV4dENvbXBvbmVudFR5cGU8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCA9IE5leHRQYWdlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+ID0gQ29tcG9uZW50VHlwZTxQPiAmIHtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIGluaXRpYWwgcGFnZSBsb2FkIGRhdGEgcG9wdWxhdGlvbi4gRGF0YSByZXR1cm5lZCBmcm9tIGBnZXRJbml0aWFsUHJvcHNgIGlzIHNlcmlhbGl6ZWQgd2hlbiBzZXJ2ZXIgcmVuZGVyZWQuXG4gICAqIE1ha2Ugc3VyZSB0byByZXR1cm4gcGxhaW4gYE9iamVjdGAgd2l0aG91dCB1c2luZyBgRGF0ZWAsIGBNYXBgLCBgU2V0YC5cbiAgICogQHBhcmFtIGN0eCBDb250ZXh0IG9mIGBwYWdlYFxuICAgKi9cbiAgZ2V0SW5pdGlhbFByb3BzPyhjb250ZXh0OiBDKTogSVAgfCBQcm9taXNlPElQPlxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wc1xuPiAmIHtcbiAgcmVuZGVyRG9jdW1lbnQoXG4gICAgRG9jdW1lbnQ6IERvY3VtZW50VHlwZSxcbiAgICBwcm9wczogRG9jdW1lbnRQcm9wc1xuICApOiBSZWFjdC5SZWFjdEVsZW1lbnRcbn1cblxuZXhwb3J0IHR5cGUgQXBwVHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGVcbj5cblxuZXhwb3J0IHR5cGUgQXBwVHJlZVR5cGUgPSBDb21wb25lbnRUeXBlPFxuICBBcHBJbml0aWFsUHJvcHMgJiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfVxuPlxuXG4vKipcbiAqIFdlYiB2aXRhbHMgcHJvdmlkZWQgdG8gX2FwcC5yZXBvcnRXZWJWaXRhbHMgYnkgQ29yZSBXZWIgVml0YWxzIHBsdWdpbiBkZXZlbG9wZWQgYnkgR29vZ2xlIENocm9tZSB0ZWFtLlxuICogaHR0cHM6Ly9uZXh0anMub3JnL2Jsb2cvbmV4dC05LTQjaW50ZWdyYXRlZC13ZWItdml0YWxzLXJlcG9ydGluZ1xuICovXG5leHBvcnQgdHlwZSBOZXh0V2ViVml0YWxzTWV0cmljID0ge1xuICBpZDogc3RyaW5nXG4gIGxhYmVsOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIHN0YXJ0VGltZTogbnVtYmVyXG4gIHZhbHVlOiBudW1iZXJcbn1cblxuZXhwb3J0IHR5cGUgRW5oYW5jZXI8Qz4gPSAoQ29tcG9uZW50OiBDKSA9PiBDXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudHNFbmhhbmNlciA9XG4gIHwge1xuICAgICAgZW5oYW5jZUFwcD86IEVuaGFuY2VyPEFwcFR5cGU+XG4gICAgICBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG4gICAgfVxuICB8IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmdcbiAgaGVhZD86IEFycmF5PEpTWC5FbGVtZW50IHwgbnVsbD5cbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChcbiAgb3B0aW9ucz86IENvbXBvbmVudHNFbmhhbmNlclxuKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PlxuXG5leHBvcnQgdHlwZSBCYXNlQ29udGV4dCA9IHtcbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBORVhUX0RBVEEgPSB7XG4gIHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIHBhZ2U6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYnVpbGRJZDogc3RyaW5nXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIHJ1bnRpbWVDb25maWc/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gIG5leHRFeHBvcnQ/OiBib29sZWFuXG4gIGF1dG9FeHBvcnQ/OiBib29sZWFuXG4gIGlzRmFsbGJhY2s/OiBib29sZWFuXG4gIGR5bmFtaWNJZHM/OiAoc3RyaW5nIHwgbnVtYmVyKVtdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbiAgc2NyaXB0TG9hZGVyPzogYW55W11cbiAgaXNQcmV2aWV3PzogYm9vbGVhblxufVxuXG4vKipcbiAqIGBOZXh0YCBjb250ZXh0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dFBhZ2VDb250ZXh0IHtcbiAgLyoqXG4gICAqIEVycm9yIG9iamVjdCBpZiBlbmNvdW50ZXJlZCBkdXJpbmcgcmVuZGVyaW5nXG4gICAqL1xuICBlcnI/OiAoRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfSkgfCBudWxsXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVxdWVzdCBvYmplY3QuXG4gICAqL1xuICByZXE/OiBJbmNvbWluZ01lc3NhZ2VcbiAgLyoqXG4gICAqIGBIVFRQYCByZXNwb25zZSBvYmplY3QuXG4gICAqL1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICAvKipcbiAgICogUGF0aCBzZWN0aW9uIG9mIGBVUkxgLlxuICAgKi9cbiAgcGF0aG5hbWU6IHN0cmluZ1xuICAvKipcbiAgICogUXVlcnkgc3RyaW5nIHNlY3Rpb24gb2YgYFVSTGAgcGFyc2VkIGFzIGFuIG9iamVjdC5cbiAgICovXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICAvKipcbiAgICogYFN0cmluZ2Agb2YgdGhlIGFjdHVhbCBwYXRoIGluY2x1ZGluZyBxdWVyeS5cbiAgICovXG4gIGFzUGF0aD86IHN0cmluZ1xuICAvKipcbiAgICogYENvbXBvbmVudGAgdGhlIHRyZWUgb2YgdGhlIEFwcCB0byB1c2UgaWYgbmVlZGluZyB0byByZW5kZXIgc2VwYXJhdGVseVxuICAgKi9cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbn1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dFR5cGU8UiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyPiA9IHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQ+XG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG4gIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gIHJvdXRlcjogUlxufVxuXG5leHBvcnQgdHlwZSBBcHBJbml0aWFsUHJvcHMgPSB7XG4gIHBhZ2VQcm9wczogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzVHlwZTxcbiAgUiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyLFxuICBQID0ge31cbj4gPSBBcHBJbml0aWFsUHJvcHMgJiB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0LCBhbnksIFA+XG4gIHJvdXRlcjogUlxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudENvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQgJiB7XG4gIHJlbmRlclBhZ2U6IFJlbmRlclBhZ2Vcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRJbml0aWFsUHJvcHMgPSBSZW5kZXJQYWdlUmVzdWx0ICYge1xuICBzdHlsZXM/OiBSZWFjdC5SZWFjdEVsZW1lbnRbXSB8IFJlYWN0LlJlYWN0RnJhZ21lbnRcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRQcm9wcyA9IERvY3VtZW50SW5pdGlhbFByb3BzICYge1xuICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgZGFuZ2Vyb3VzQXNQYXRoOiBzdHJpbmdcbiAgZG9jQ29tcG9uZW50c1JlbmRlcmVkOiB7XG4gICAgSHRtbD86IGJvb2xlYW5cbiAgICBNYWluPzogYm9vbGVhblxuICAgIEhlYWQ/OiBib29sZWFuXG4gICAgTmV4dFNjcmlwdD86IGJvb2xlYW5cbiAgfVxuICBidWlsZE1hbmlmZXN0OiBCdWlsZE1hbmlmZXN0XG4gIGFtcFBhdGg6IHN0cmluZ1xuICBpbkFtcE1vZGU6IGJvb2xlYW5cbiAgaHlicmlkQW1wOiBib29sZWFuXG4gIGlzRGV2ZWxvcG1lbnQ6IGJvb2xlYW5cbiAgZHluYW1pY0ltcG9ydHM6IHN0cmluZ1tdXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIGNhbm9uaWNhbEJhc2U6IHN0cmluZ1xuICBoZWFkVGFnczogYW55W11cbiAgdW5zdGFibGVfcnVudGltZUpTPzogZmFsc2VcbiAgdW5zdGFibGVfSnNQcmVsb2FkPzogZmFsc2VcbiAgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmc6IHN0cmluZ1xuICBzY3JpcHRMb2FkZXI6IHsgZGVmZXI/OiBzdHJpbmdbXTsgZWFnZXI/OiBhbnlbXSB9XG4gIGxvY2FsZT86IHN0cmluZ1xufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgSW5jb21pbmdNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgcXVlcnlgIHZhbHVlcyBmcm9tIHVybFxuICAgKi9cbiAgcXVlcnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXVxuICB9XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYGNvb2tpZXNgIGZyb20gaGVhZGVyXG4gICAqL1xuICBjb29raWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH1cblxuICBib2R5OiBhbnlcblxuICBlbnY6IEVudlxuXG4gIHByZXZpZXc/OiBib29sZWFuXG4gIC8qKlxuICAgKiBQcmV2aWV3IGRhdGEgc2V0IG9uIHRoZSByZXF1ZXN0LCBpZiBhbnlcbiAgICogKi9cbiAgcHJldmlld0RhdGE/OiBQcmV2aWV3RGF0YVxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHN0YXR1czogbnVtYmVyLCB1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuXG4gIC8qKlxuICAgKiBTZXQgcHJldmlldyBkYXRhIGZvciBOZXh0LmpzJyBwcmVyZW5kZXIgbW9kZVxuICAgKi9cbiAgc2V0UHJldmlld0RhdGE6IChcbiAgICBkYXRhOiBvYmplY3QgfCBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgKGluIHNlY29uZHMpIGZvciB0aGUgcHJldmlldyBzZXNzaW9uIHRvIGxhc3QgZm9yLlxuICAgICAgICogVGhlIGdpdmVuIG51bWJlciB3aWxsIGJlIGNvbnZlcnRlZCB0byBhbiBpbnRlZ2VyIGJ5IHJvdW5kaW5nIGRvd24uXG4gICAgICAgKiBCeSBkZWZhdWx0LCBubyBtYXhpbXVtIGFnZSBpcyBzZXQgYW5kIHRoZSBwcmV2aWV3IHNlc3Npb24gZmluaXNoZXNcbiAgICAgICAqIHdoZW4gdGhlIGNsaWVudCBzaHV0cyBkb3duIChicm93c2VyIGlzIGNsb3NlZCkuXG4gICAgICAgKi9cbiAgICAgIG1heEFnZT86IG51bWJlclxuICAgIH1cbiAgKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgY2xlYXJQcmV2aWV3RGF0YTogKCkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlIYW5kbGVyPFQgPSBhbnk+ID0gKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxUPlxuKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuXG4vKipcbiAqIFV0aWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjT25jZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgZm46IFRcbik6IFQge1xuICBsZXQgdXNlZCA9IGZhbHNlXG4gIGxldCByZXN1bHQ6IFJldHVyblR5cGU8VD5cblxuICByZXR1cm4gKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmICghdXNlZCkge1xuICAgICAgdXNlZCA9IHRydWVcbiAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSkgYXMgVFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb25cbiAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMKCkge1xuICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvblxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWU8UD4oQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPFA+KSB7XG4gIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgID8gQ29tcG9uZW50XG4gICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc1NlbnQocmVzOiBTZXJ2ZXJSZXNwb25zZSkge1xuICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wczxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4oQXBwOiBOZXh0Q29tcG9uZW50VHlwZTxDLCBJUCwgUD4sIGN0eDogQyk6IFByb21pc2U8SVA+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoQXBwLnByb3RvdHlwZT8uZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgQXBwXG4gICAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpXG5cbiAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge30gYXMgSVBcbiAgfVxuXG4gIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG5cbiAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgIHJldHVybiBwcm9wc1xuICB9XG5cbiAgaWYgKCFwcm9wcykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgQXBwXG4gICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGAke2dldERpc3BsYXlOYW1lKFxuICAgICAgICAgIEFwcFxuICAgICAgICApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2BcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHNcbn1cblxuZXhwb3J0IGNvbnN0IHVybE9iamVjdEtleXMgPSBbXG4gICdhdXRoJyxcbiAgJ2hhc2gnLFxuICAnaG9zdCcsXG4gICdob3N0bmFtZScsXG4gICdocmVmJyxcbiAgJ3BhdGgnLFxuICAncGF0aG5hbWUnLFxuICAncG9ydCcsXG4gICdwcm90b2NvbCcsXG4gICdxdWVyeScsXG4gICdzZWFyY2gnLFxuICAnc2xhc2hlcycsXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmw6IFVybE9iamVjdCk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXRVcmwodXJsKVxufVxuXG5leHBvcnQgY29uc3QgU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgU1QgPVxuICBTUCAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJ1xuIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVQYXRoU2VwPW5vcm1hbGl6ZVBhdGhTZXA7ZXhwb3J0cy5kZW5vcm1hbGl6ZVBhZ2VQYXRoPWRlbm9ybWFsaXplUGFnZVBhdGg7ZnVuY3Rpb24gbm9ybWFsaXplUGF0aFNlcChwYXRoKXtyZXR1cm4gcGF0aC5yZXBsYWNlKC9cXFxcL2csJy8nKTt9ZnVuY3Rpb24gZGVub3JtYWxpemVQYWdlUGF0aChwYWdlKXtwYWdlPW5vcm1hbGl6ZVBhdGhTZXAocGFnZSk7aWYocGFnZS5zdGFydHNXaXRoKCcvaW5kZXgvJykpe3BhZ2U9cGFnZS5zbGljZSg2KTt9ZWxzZSBpZihwYWdlPT09Jy9pbmRleCcpe3BhZ2U9Jy8nO31yZXR1cm4gcGFnZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMubWFwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2ltYWdlJylcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsImZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZXh0ZW5kczsiLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJpbXBvcnQgJ3RhaWx3aW5kY3NzL3RhaWx3aW5kLmNzcyc7XHJcbmltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbC5jc3MnO1xyXG5pbXBvcnQgeyBBdXRoUHJvdmlkZXIgfSBmcm9tICcuLi9saWIvbmV3QXV0aCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ25leHQtdGhlbWVzJztcclxuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9jb21wb25lbnRzL2Rhc2hib2FyZC9OYXZiYXInO1xyXG5pbXBvcnQgeyBEZWZhdWx0U2VvIH0gZnJvbSAnbmV4dC1zZW8nO1xyXG5pbXBvcnQgU0VPIGZyb20gJy4uL25leHQtc2VvLmNvbmZpZyc7XHJcbmltcG9ydCB7IGlzTW9iaWxlIH0gZnJvbSAncmVhY3QtZGV2aWNlLWRldGVjdCc7XHJcbmltcG9ydCBNb2JpbGVQcmV2ZW50IGZyb20gJy4uL2NvbXBvbmVudHMvTW9iaWxlUHJldmVudCc7XHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBkaXJlY3RSb3V0ZSA9IHJvdXRlci5wYXRobmFtZTtcclxuXHJcbiAgLy8gSmXFm2xpIHcgdXJsIGplc3QgL2Rhc2hib2FyZCwgdG8gTmF2QmFyIHRlbiB6IGJva3UsIG1hasSFIHdzenlzdGtpZSBrb21wb25lbnR5IChjenlsaSBjYcWCeSBkYXNoYm9hcmQsIGJleiBzdHJvbnkgcG9jesSFdGtvd2VqKVxyXG5cclxuICBpZiAoZGlyZWN0Um91dGUuaW5jbHVkZXMoJy9kYXNoYm9hcmQnKSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEF1dGhQcm92aWRlcj5cclxuICAgICAgICA8VGhlbWVQcm92aWRlciBhdHRyaWJ1dGU9XCJjbGFzc1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1iYWNrZ3JvdW5kIGRhcms6Ymctc2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgIDxOYXZiYXI+XHJcbiAgICAgICAgICAgICAgPERlZmF1bHRTZW8gey4uLlNFT30gLz5cclxuICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgICAgIDwvTmF2YmFyPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9UaGVtZVByb3ZpZGVyPlxyXG4gICAgICA8L0F1dGhQcm92aWRlcj5cclxuICAgICAgLy8gPD5cclxuICAgICAgLy8gICB7aXNNb2JpbGUgPyAoXHJcbiAgICAgIC8vICAgICA8TW9iaWxlUHJldmVudCAvPlxyXG4gICAgICAvLyAgICkgOiAoXHJcbiAgICAgIC8vICAgICA8QXV0aFByb3ZpZGVyPlxyXG4gICAgICAvLyAgICAgICA8VGhlbWVQcm92aWRlciBhdHRyaWJ1dGU9XCJjbGFzc1wiPlxyXG4gICAgICAvLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctYmFja2dyb3VuZCBkYXJrOmJnLXNlY29uZGFyeVwiPlxyXG4gICAgICAvLyAgICAgICAgICAgPE5hdmJhcj5cclxuICAgICAgLy8gICAgICAgICAgICAgPERlZmF1bHRTZW8gey4uLlNFT30gLz5cclxuICAgICAgLy8gICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAvLyAgICAgICAgICAgPC9OYXZiYXI+XHJcbiAgICAgIC8vICAgICAgICAgPC9kaXY+XHJcbiAgICAgIC8vICAgICAgIDwvVGhlbWVQcm92aWRlcj5cclxuICAgICAgLy8gICAgIDwvQXV0aFByb3ZpZGVyPlxyXG4gICAgICAvLyAgICl9XHJcbiAgICAgIC8vIDwvPlxyXG4gICAgKTtcclxuICB9IGVsc2UgaWYgKGlzTW9iaWxlICYmIChkaXJlY3RSb3V0ZS5pbmNsdWRlcygnL3NpZ251cCcpIHx8IGRpcmVjdFJvdXRlLmluY2x1ZGVzKCcvbG9naW4nKSkpIHtcclxuICAgIHJldHVybiA8TW9iaWxlUHJldmVudCAvPjtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEF1dGhQcm92aWRlcj5cclxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgIDwvQXV0aFByb3ZpZGVyPlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8vIGVsc2Uge1xyXG4gIC8vICAgcmV0dXJuIChcclxuICAvLyAgICAgPD5cclxuICAvLyAgICAgICB7aXNNb2JpbGUgJiZcclxuICAvLyAgICAgICAgIChkaXJlY3RSb3V0ZS5pbmNsdWRlcygnL3NpZ251cCcpIHx8IGRpcmVjdFJvdXRlLmluY2x1ZGVzKCcvbG9naW4nKSA/IChcclxuICAvLyAgICAgICAgICAgPE1vYmlsZVByZXZlbnQgLz5cclxuICAvLyAgICAgICAgICkgOiAoXHJcbiAgLy8gICAgICAgICAgIDxBdXRoUHJvdmlkZXI+XHJcbiAgLy8gICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gIC8vICAgICAgICAgICA8L0F1dGhQcm92aWRlcj5cclxuICAvLyAgICAgICAgICkpfVxyXG4gIC8vICAgICA8Lz5cclxuICAvLyAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xyXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG4vLyBVc2FnZVxyXG5mdW5jdGlvbiBBcHAoKSB7XHJcbiAgY29uc3Qgc2l6ZSA9IHVzZVdpbmRvd1NpemUoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAge3NpemUud2lkdGh9cHggLyB7c2l6ZS5oZWlnaHR9cHhcclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuLy8gSG9va1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlV2luZG93U2l6ZSgpIHtcclxuICAvLyBJbml0aWFsaXplIHN0YXRlIHdpdGggdW5kZWZpbmVkIHdpZHRoL2hlaWdodCBzbyBzZXJ2ZXIgYW5kIGNsaWVudCByZW5kZXJzIG1hdGNoXHJcbiAgLy8gTGVhcm4gbW9yZSBoZXJlOiBodHRwczovL2pvc2h3Y29tZWF1LmNvbS9yZWFjdC90aGUtcGVyaWxzLW9mLXJlaHlkcmF0aW9uL1xyXG4gIGNvbnN0IFt3aW5kb3dTaXplLCBzZXRXaW5kb3dTaXplXSA9IHVzZVN0YXRlKHtcclxuICAgIHdpZHRoOiB1bmRlZmluZWQsXHJcbiAgICBoZWlnaHQ6IHVuZGVmaW5lZCxcclxuICB9KTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gSGFuZGxlciB0byBjYWxsIG9uIHdpbmRvdyByZXNpemVcclxuICAgIGZ1bmN0aW9uIGhhbmRsZVJlc2l6ZSgpIHtcclxuICAgICAgLy8gU2V0IHdpbmRvdyB3aWR0aC9oZWlnaHQgdG8gc3RhdGVcclxuICAgICAgc2V0V2luZG93U2l6ZSh7XHJcbiAgICAgICAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxyXG4gICAgICAgIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIC8vIEFkZCBldmVudCBsaXN0ZW5lclxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSk7XHJcbiAgICAvLyBDYWxsIGhhbmRsZXIgcmlnaHQgYXdheSBzbyBzdGF0ZSBnZXRzIHVwZGF0ZWQgd2l0aCBpbml0aWFsIHdpbmRvdyBzaXplXHJcbiAgICBoYW5kbGVSZXNpemUoKTtcclxuICAgIC8vIFJlbW92ZSBldmVudCBsaXN0ZW5lciBvbiBjbGVhbnVwXHJcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSk7XHJcbiAgfSwgW10pOyAvLyBFbXB0eSBhcnJheSBlbnN1cmVzIHRoYXQgZWZmZWN0IGlzIG9ubHkgcnVuIG9uIG1vdW50XHJcbiAgcmV0dXJuIHdpbmRvd1NpemU7XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvYXBwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2F1dGhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvZmlyZXN0b3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2Z1bmN0aW9uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9zdG9yYWdlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImdzYXBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianMtY29va2llXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtc2VvXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtdGhlbWVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRldmljZS1kZXRlY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=