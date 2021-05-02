module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/dashboard/projects/[project]/index.js");
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
            lineNumber: 139,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
            d: "M574.849 248.809C567.965 248.815 561.135 247.582 554.687 245.17C554.318 245.032 553.98 244.822 553.692 244.553C553.404 244.284 553.172 243.961 553.009 243.603C552.846 243.244 552.755 242.857 552.742 242.463C552.728 242.07 552.792 241.677 552.931 241.308C553.069 240.939 553.278 240.601 553.547 240.313C553.816 240.025 554.139 239.793 554.498 239.63C554.856 239.467 555.244 239.376 555.637 239.363C556.031 239.349 556.424 239.414 556.792 239.552C565.341 242.711 574.566 243.586 583.557 242.09C592.547 240.594 600.991 236.779 608.056 231.021C586.018 231.255 564.461 220.84 553.737 204.128C546.842 193.385 544.588 180.744 547.216 167.57C549.229 158.017 553.36 149.037 559.305 141.293C547.954 144.905 538.184 152.302 531.628 162.248C525.072 172.193 522.126 184.087 523.282 195.943C523.322 196.336 523.284 196.733 523.171 197.111C523.057 197.489 522.871 197.841 522.621 198.147C522.371 198.453 522.063 198.706 521.715 198.893C521.367 199.08 520.986 199.196 520.593 199.235C520.2 199.274 519.804 199.235 519.426 199.12C519.048 199.005 518.697 198.817 518.392 198.566C518.087 198.316 517.834 198.007 517.649 197.658C517.463 197.31 517.349 196.928 517.311 196.535C515.854 181.619 520.223 166.716 529.504 154.948C538.784 143.18 552.258 135.457 567.103 133.397C567.724 133.311 568.356 133.421 568.911 133.713C569.466 134.004 569.915 134.462 570.197 135.021C570.478 135.581 570.577 136.215 570.48 136.835C570.382 137.454 570.094 138.027 569.654 138.473C554.31 154.059 544.999 179.402 558.786 200.888C569.664 217.837 593.069 227.532 615.714 224.468C616.322 224.386 616.94 224.491 617.485 224.771C618.031 225.051 618.478 225.491 618.765 226.032C619.053 226.574 619.168 227.19 619.095 227.799C619.022 228.407 618.764 228.979 618.356 229.436C612.873 235.542 606.164 240.422 598.667 243.76C591.171 247.098 583.055 248.818 574.849 248.809V248.809Z",
            fill: "#6C63FF"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
            d: "M527.001 250C522.65 250 518.397 248.71 514.779 246.292C511.161 243.875 508.341 240.439 506.676 236.419C505.011 232.399 504.575 227.976 505.424 223.708C506.273 219.44 508.368 215.52 511.445 212.444C514.522 209.367 518.442 207.272 522.709 206.423C526.977 205.574 531.401 206.01 535.421 207.675C539.441 209.34 542.876 212.16 545.294 215.777C547.711 219.395 549.001 223.649 549.001 228C548.995 233.833 546.675 239.425 542.551 243.549C538.426 247.673 532.834 249.993 527.001 250V250ZM527.001 212C523.837 212 520.744 212.938 518.112 214.697C515.481 216.455 513.43 218.953 512.219 221.877C511.008 224.801 510.692 228.018 511.309 231.121C511.926 234.225 513.45 237.076 515.688 239.314C517.925 241.551 520.776 243.075 523.88 243.693C526.984 244.31 530.201 243.993 533.124 242.782C536.048 241.571 538.547 239.52 540.305 236.889C542.063 234.258 543.001 231.165 543.001 228C542.997 223.758 541.309 219.691 538.31 216.692C535.31 213.692 531.243 212.005 527.001 212V212Z",
            fill: "#6C63FF"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
            ref: manRef,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              d: "M8.69074 567.078C7.24546 566.853 5.86504 566.321 4.64182 565.518C3.4186 564.716 2.38077 563.662 1.59771 562.427C0.814652 561.191 0.304423 559.802 0.101157 558.354C-0.102109 556.905 0.00627512 555.43 0.419044 554.026L8.20737 527.546L20.042 529.765L20.5508 556.732C20.5791 558.232 20.2788 559.719 19.6709 561.091C19.063 562.462 18.1623 563.683 17.032 564.669C15.9017 565.655 14.5693 566.382 13.1283 566.798C11.6873 567.214 10.1727 567.31 8.69074 567.078V567.078Z",
              fill: "#9F616A"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 152,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              d: "M76.996 736.132L62.203 733.913L65.901 589.678L45.191 651.81L34.096 739.091L20.042 735.393L17.083 644.414L33.356 537.162L114.719 555.654L76.996 736.132Z",
              fill: "#0A1230"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 156,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              d: "M70.2046 771.636C67.3209 771.636 64.5553 770.491 62.5163 768.452C60.4772 766.413 59.3317 763.647 59.3317 760.763C59.3317 760.408 59.3491 760.053 59.3839 759.699L61.6811 736.345C61.7365 735.787 61.9281 735.251 62.2391 734.784C62.5501 734.317 62.9709 733.933 63.4647 733.667C67.8254 731.315 72.3096 731.885 76.8994 734.955C77.3066 735.229 77.6497 735.588 77.9052 736.007C78.1607 736.427 78.3226 736.896 78.3799 737.384L81.0017 759.482C81.1827 761.008 81.0385 762.554 80.5785 764.02C80.1185 765.485 79.3533 766.836 78.3332 767.985C77.3131 769.133 76.0613 770.052 74.6602 770.682C73.2591 771.311 71.7406 771.636 70.2046 771.636H70.2046Z",
              fill: "#0A1230"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 160,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              d: "M9.82084 769.898C8.42675 769.387 7.16714 768.565 6.13726 767.496C5.10738 766.426 4.33419 765.136 3.87616 763.724C3.41814 762.311 3.28727 760.813 3.49344 759.343C3.69962 757.872 4.23745 756.468 5.06626 755.236L20.8463 731.779C26.5348 727.697 29.9657 729.685 31.2995 737.313L34.4898 729.32L36.8936 731.942C38.1133 733.273 38.823 734.992 38.8971 736.795C38.9712 738.599 38.4049 740.37 37.2984 741.796L20.9304 766.706C19.6567 768.348 17.8938 769.542 15.8967 770.116C13.8996 770.689 11.7717 770.613 9.82084 769.898V769.898Z",
              fill: "#0A1230"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 164,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              d: "M109.542 398.105C121.797 398.105 131.732 388.17 131.732 375.915C131.732 363.659 121.797 353.725 109.542 353.725C97.2865 353.725 87.3517 363.659 87.3517 375.915C87.3517 388.17 97.2865 398.105 109.542 398.105Z",
              fill: "#9F616A"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 168,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              d: "M123.595 416.596L85.8723 409.2C90.7313 398.836 94.6225 395.33 90.3103 384.051H120.637C117.962 395.733 120.547 406.698 123.595 416.596Z",
              fill: "#9F616A"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 172,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              d: "M119.157 566.009L30.3973 540.86C48.1761 501.731 51.9 458.769 46.6287 413.356C46.5034 412.285 46.5904 411.199 46.8847 410.16C47.1791 409.122 47.6751 408.152 48.3443 407.306C49.0135 406.459 49.843 405.753 50.7852 405.227C51.7275 404.701 52.7641 404.366 53.8359 404.24C53.9357 404.229 54.0356 404.219 54.1358 404.211C65.7137 403.257 77.7844 402.033 90.3104 400.324L104.364 409.939L120.637 406.241C125.858 408.772 131.118 410.877 135.864 412.975C140.191 414.893 143.649 418.354 145.563 422.683C147.476 427.012 147.709 431.898 146.215 436.389C131.752 480.066 122.071 523.329 119.157 566.009Z",
              fill: "#E6E6E6"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 176,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              d: "M22.261 532.724L5.24866 530.505L45.5508 414.38C47.6008 408.473 52.6848 405.276 58.8745 404.392L64.7918 405.131L60.3538 473.92L22.261 532.724Z",
              fill: "#E6E6E6"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 180,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              d: "M155.525 510.524C152.692 510.742 149.863 510.06 147.441 508.574C145.019 507.089 143.128 504.877 142.038 502.253L125.814 463.195L139.128 415.117L142.648 417.357C142.987 417.572 143.322 417.794 143.652 418.02C148.593 421.481 152.442 426.283 154.746 431.858C157.049 437.434 157.711 443.552 156.654 449.491L153.182 469.852L167.505 500.605C166.777 503.294 165.235 505.69 163.089 507.466C160.944 509.243 158.302 510.311 155.525 510.524V510.524Z",
              fill: "#E6E6E6"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 184,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              d: "M111.248 343.027C115.04 343.201 118.733 344.288 122.014 346.196C122.769 346.636 122.42 348.219 123.117 348.736C123.995 349.386 125.902 348.991 126.68 349.753C129.19 352.203 131.123 355.182 132.338 358.474C133.552 361.765 134.018 365.285 133.702 368.779L132.464 381.09L129.543 377.896C124.306 372.089 117.035 368.519 109.238 367.927C108.906 367.904 108.574 367.887 108.242 367.874L110.489 363.941L106.584 367.847C104.802 367.866 103.024 368.011 101.263 368.28L104.251 363.05L98.5171 368.784L98.5166 368.785C96.1716 369.3 93.9805 370.36 92.1198 371.877C90.2591 373.395 88.7808 375.328 87.8042 377.522L87.1675 378.933L86.4542 367.188C86.3177 360.911 88.6805 354.837 93.0226 350.302C97.3647 345.767 103.331 343.142 109.608 343.006C110.155 342.994 110.702 343.001 111.248 343.027Z",
              fill: "#2F2E41"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 188,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              d: "M131.877 384.438C132.861 384.438 133.659 382.543 133.659 380.205C133.659 377.867 132.861 375.972 131.877 375.972C130.892 375.972 130.094 377.867 130.094 380.205C130.094 382.543 130.892 384.438 131.877 384.438Z",
              fill: "#9F616A"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 192,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              d: "M87.3195 383.101C88.3038 383.101 89.1017 381.206 89.1017 378.868C89.1017 376.53 88.3038 374.635 87.3195 374.635C86.3351 374.635 85.5372 376.53 85.5372 378.868C85.5372 381.206 86.3351 383.101 87.3195 383.101Z",
              fill: "#9F616A"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 196,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              d: "M174.034 435.419C175.455 435.767 176.785 436.414 177.936 437.317C179.086 438.22 180.031 439.359 180.706 440.656C181.382 441.954 181.772 443.381 181.852 444.841C181.931 446.302 181.698 447.763 181.168 449.126L171.16 474.85L159.556 471.634L161.338 444.721C161.437 443.225 161.863 441.768 162.585 440.453C163.307 439.139 164.308 437.998 165.518 437.111C166.728 436.225 168.117 435.614 169.588 435.322C171.059 435.029 172.577 435.063 174.034 435.419H174.034Z",
              fill: "#9F616A"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 200,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              d: "M160.579 509.055L142.087 497.22L157.62 465.414L176.851 472.811L167.236 500.918L160.579 509.055Z",
              fill: "#E6E6E6"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 204,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              d: "M173.001 409.101V284H171.001V409.101C169.787 409.349 168.709 410.039 167.974 411.037C167.24 412.035 166.902 413.27 167.027 414.503C167.151 415.735 167.729 416.878 168.648 417.709C169.567 418.54 170.762 419 172.001 419C173.241 419 174.435 418.54 175.355 417.709C176.274 416.878 176.852 415.735 176.976 414.503C177.101 413.27 176.763 412.035 176.029 411.037C175.294 410.039 174.216 409.349 173.001 409.101V409.101ZM172.001 417C171.408 417 170.828 416.824 170.335 416.494C169.841 416.165 169.457 415.696 169.23 415.148C169.003 414.6 168.943 413.997 169.059 413.415C169.175 412.833 169.461 412.298 169.88 411.879C170.3 411.459 170.834 411.173 171.416 411.058C171.998 410.942 172.601 411.001 173.15 411.228C173.698 411.455 174.166 411.84 174.496 412.333C174.826 412.827 175.001 413.407 175.001 414C175.001 414.795 174.684 415.558 174.122 416.12C173.559 416.683 172.797 416.999 172.001 417V417Z",
              fill: "#0A1230"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 205,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              d: "M170.435 164.569C169.29 164.569 168.193 164.115 167.384 163.306C166.575 162.497 166.121 161.399 166.121 160.255V147.314C166.122 146.171 166.578 145.075 167.387 144.268C168.195 143.46 169.292 143.007 170.435 143.007C171.578 143.007 172.674 143.46 173.483 144.268C174.291 145.075 174.747 146.171 174.748 147.314V160.255C174.748 160.822 174.637 161.383 174.42 161.906C174.203 162.43 173.885 162.905 173.485 163.306C173.084 163.706 172.609 164.024 172.085 164.241C171.562 164.458 171.001 164.569 170.435 164.569V164.569Z",
              fill: "#6C63FF"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 209,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              d: "M170.435 263.787C169.868 263.787 169.307 263.676 168.784 263.459C168.26 263.242 167.785 262.925 167.384 262.524C166.984 262.123 166.666 261.648 166.449 261.124C166.232 260.601 166.121 260.04 166.121 259.474V246.532C166.12 245.965 166.231 245.403 166.447 244.879C166.664 244.355 166.981 243.879 167.382 243.477C167.783 243.076 168.258 242.758 168.782 242.541C169.306 242.323 169.867 242.212 170.435 242.212C171.002 242.212 171.563 242.323 172.087 242.541C172.611 242.758 173.087 243.076 173.487 243.477C173.888 243.879 174.206 244.355 174.422 244.879C174.638 245.403 174.749 245.965 174.748 246.532V259.474C174.748 260.04 174.637 260.601 174.42 261.124C174.203 261.648 173.886 262.123 173.485 262.524C173.084 262.925 172.609 263.242 172.085 263.459C171.562 263.676 171.001 263.787 170.435 263.787V263.787Z",
              fill: "#6C63FF"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 213,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              d: "M200.939 177.203C200.085 177.203 199.251 176.95 198.542 176.476C197.833 176.002 197.28 175.328 196.953 174.54C196.627 173.752 196.541 172.885 196.708 172.048C196.874 171.211 197.285 170.442 197.888 169.839L207.039 160.688C207.848 159.88 208.945 159.426 210.089 159.427C211.233 159.427 212.329 159.882 213.138 160.69C213.947 161.499 214.401 162.596 214.402 163.739C214.402 164.883 213.948 165.98 213.14 166.789L203.989 175.94C203.589 176.341 203.113 176.659 202.59 176.876C202.066 177.093 201.505 177.204 200.939 177.203V177.203Z",
              fill: "#6C63FF"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 217,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              d: "M130.78 247.362C129.926 247.362 129.092 247.109 128.383 246.635C127.674 246.161 127.121 245.488 126.794 244.699C126.468 243.911 126.382 243.044 126.549 242.207C126.715 241.37 127.126 240.602 127.729 239.998L136.88 230.848C137.689 230.039 138.786 229.584 139.93 229.584C141.074 229.584 142.172 230.038 142.981 230.847C143.79 231.656 144.244 232.754 144.244 233.898C144.244 235.042 143.79 236.139 142.981 236.948L133.83 246.099C133.43 246.5 132.954 246.818 132.431 247.035C131.907 247.252 131.346 247.363 130.78 247.362V247.362Z",
              fill: "#6C63FF"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 221,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              d: "M226.514 207.708H213.573C212.43 207.706 211.334 207.251 210.527 206.442C209.719 205.633 209.266 204.537 209.266 203.394C209.266 202.251 209.719 201.154 210.527 200.346C211.334 199.537 212.43 199.082 213.573 199.08H226.514C227.081 199.079 227.643 199.19 228.167 199.406C228.691 199.623 229.168 199.94 229.569 200.341C229.97 200.742 230.289 201.218 230.506 201.741C230.723 202.265 230.835 202.827 230.835 203.394C230.835 203.961 230.723 204.522 230.506 205.046C230.289 205.57 229.97 206.046 229.569 206.446C229.168 206.847 228.691 207.165 228.167 207.381C227.643 207.597 227.081 207.708 226.514 207.708V207.708Z",
              fill: "#6C63FF"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 225,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              d: "M127.296 207.708H114.355C113.788 207.708 113.226 207.597 112.702 207.381C112.178 207.165 111.701 206.847 111.3 206.446C110.899 206.046 110.581 205.57 110.363 205.046C110.146 204.522 110.034 203.961 110.034 203.394C110.034 202.827 110.146 202.265 110.363 201.741C110.581 201.218 110.899 200.742 111.3 200.341C111.701 199.94 112.178 199.623 112.702 199.406C113.226 199.19 113.788 199.079 114.355 199.08H127.296C128.439 199.082 129.535 199.537 130.342 200.346C131.15 201.154 131.604 202.251 131.604 203.394C131.604 204.537 131.15 205.633 130.342 206.442C129.535 207.251 128.439 207.706 127.296 207.708H127.296Z",
              fill: "#6C63FF"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 229,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              d: "M210.09 247.362C209.523 247.363 208.962 247.252 208.438 247.035C207.915 246.818 207.439 246.5 207.039 246.099L197.888 236.948C197.487 236.548 197.169 236.072 196.951 235.549C196.734 235.025 196.622 234.464 196.622 233.897C196.621 233.33 196.733 232.769 196.949 232.245C197.166 231.721 197.484 231.245 197.885 230.844C198.286 230.443 198.762 230.125 199.286 229.909C199.809 229.692 200.371 229.58 200.938 229.581C201.505 229.581 202.066 229.693 202.589 229.91C203.113 230.128 203.589 230.446 203.989 230.848L213.14 239.998C213.743 240.602 214.154 241.37 214.32 242.207C214.487 243.044 214.401 243.911 214.075 244.7C213.748 245.488 213.195 246.161 212.486 246.635C211.777 247.11 210.943 247.363 210.09 247.363V247.362Z",
              fill: "#6C63FF"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 233,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              d: "M139.93 177.203C139.364 177.204 138.803 177.093 138.279 176.876C137.756 176.659 137.28 176.341 136.88 175.94L127.729 166.789C127.329 166.389 127.011 165.913 126.794 165.39C126.577 164.866 126.466 164.305 126.466 163.739C126.466 163.172 126.577 162.611 126.794 162.088C127.011 161.564 127.329 161.089 127.729 160.688C128.13 160.288 128.605 159.97 129.129 159.753C129.652 159.536 130.213 159.425 130.78 159.425C131.346 159.425 131.907 159.536 132.43 159.753C132.954 159.97 133.429 160.288 133.83 160.688L142.981 169.839C143.584 170.442 143.995 171.211 144.161 172.048C144.328 172.885 144.242 173.752 143.916 174.54C143.589 175.329 143.036 176.002 142.327 176.476C141.617 176.95 140.783 177.203 139.93 177.203V177.203Z",
              fill: "#6C63FF"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 237,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              d: "M170.435 229.277C165.315 229.277 160.311 227.759 156.055 224.915C151.798 222.071 148.481 218.028 146.522 213.299C144.563 208.569 144.05 203.365 145.049 198.344C146.048 193.323 148.513 188.711 152.133 185.092C155.752 181.472 160.364 179.007 165.385 178.008C170.406 177.009 175.61 177.522 180.34 179.481C185.069 181.44 189.111 184.757 191.955 189.014C194.8 193.27 196.318 198.275 196.318 203.394C196.31 210.256 193.58 216.835 188.728 221.687C183.876 226.54 177.297 229.269 170.435 229.277V229.277ZM170.435 186.138C167.022 186.138 163.686 187.15 160.848 189.046C158.01 190.942 155.799 193.637 154.493 196.79C153.187 199.943 152.845 203.413 153.511 206.76C154.177 210.107 155.82 213.182 158.233 215.595C160.646 218.008 163.721 219.652 167.068 220.317C170.415 220.983 173.885 220.642 177.038 219.336C180.191 218.03 182.886 215.818 184.782 212.98C186.678 210.143 187.69 206.806 187.69 203.394C187.685 198.819 185.865 194.433 182.63 191.198C179.395 187.963 175.009 186.144 170.435 186.138V186.138Z",
              fill: "#6C63FF"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 241,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 138,
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
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
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
                  lineNumber: 271,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 270,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
                children: "See You Soon"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 273,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
                id: "See_You_Soon",
                "data-name": "See You Soon",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                  className: "cls-1",
                  d: "M84.87,77.27l-7-41.18a6.6,6.6,0,0,0-13.1,1.58l1.83,24.6L56.93,36a6.73,6.73,0,0,0-12.78,4.17L51.82,67,40.57,48a6.45,6.45,0,0,0-11.41,6l8.33,18.24-4.57-6.45a6.48,6.48,0,0,0-10.9,7l21.25,36.71c.32.59,8,14.54,23.14,14.54,20.07,0,29.74-15.17,32.11-29.36,2.22-13.34,4.59-22,7.68-28.22C111.74,55.36,96.37,44.67,84.87,77.27Zm19.5-11.74c-3.18,6.36-5.61,15.24-7.87,28.79C94.28,107.69,85.2,122,66.41,122c-13.86,0-21.27-13.34-21.36-13.5L23.79,71.75A4.44,4.44,0,0,1,31.26,67L42.1,82.27a1,1,0,0,0,1.76-1L31,53.14a4.41,4.41,0,0,1,7.8-4.08L54.1,74.84A1,1,0,0,0,56,74L46.12,39.6A4.68,4.68,0,0,1,55,36.69L67.22,69.78a1,1,0,0,0,2-.43L66.84,37.52a4.56,4.56,0,0,1,9-1.09L83.55,81.7a1,1,0,0,0,2,.11c0-.17,5.17-17.84,12.54-22.75C104.93,54.49,106.48,61.32,104.37,65.53Z"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 275,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                  className: "cls-1",
                  d: "M127,67h-8a1,1,0,0,0,0,2h8A1,1,0,0,0,127,67Z"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 279,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                  className: "cls-1",
                  d: "M9,67H1a1,1,0,0,0,0,2H9A1,1,0,0,0,9,67Z"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 280,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                  className: "cls-1",
                  d: "M65,13V5a1,1,0,0,0-2,0v8A1,1,0,0,0,65,13Z"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 281,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                  className: "cls-1",
                  d: "M111.63,41.52c.39,0-.09.21,7.44-4.14a1,1,0,0,0-1-1.76l-6.93,4A1,1,0,0,0,111.63,41.52Z"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 282,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                  className: "cls-1",
                  d: "M15.86,94.62l-6.93,4a1,1,0,0,0,1,1.76l6.93-4A1,1,0,0,0,15.86,94.62Z"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 283,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                  className: "cls-1",
                  d: "M16.88,39.62l-6.93-4a1,1,0,0,0-1,1.76l6.93,4A1,1,0,0,0,16.88,39.62Z"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 284,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                  className: "cls-1",
                  d: "M119.07,98.62l-6.93-4a1,1,0,0,0-1,1.76l6.93,4A1,1,0,0,0,119.07,98.62Z"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 285,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                  className: "cls-1",
                  d: "M35.62,20.88a1,1,0,0,0,1.76-1l-4-6.93a1,1,0,0,0-1.76,1Z"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 286,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                  className: "cls-1",
                  d: "M92.38,20.88l4-6.93a1,1,0,0,0-1.76-1l-4,6.93A1,1,0,0,0,92.38,20.88Z"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 287,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 274,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 258,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 257,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
            href: "/dashboard/welcome",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              onClick: activeClassFn1,
              className: `text-primarydark dark:text-background ml-1 cursor-pointer opacity-50 ${activeHover1 ? 'opacity-100' : 'opacity-50'} ${activeClass1 ? 'opacity-100' : 'opacity-50'}`,
              children: "Welcome"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 292,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 291,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 256,
          columnNumber: 11
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
                  lineNumber: 317,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 316,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
                children: "Landing Success"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 319,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
                id: "Landing_Success",
                "data-name": "Landing Success",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                  className: "cls-1",
                  d: "M109.3,90.1A46,46,0,0,0,65,36V20.08c1.78-.62,7.21-2.14,12.57.23a19.33,19.33,0,0,0,14.82,0c.87-.38.61.31.61-17.93a1,1,0,0,0-1.43-.93c-.07,0-6.69,2.87-13.18,0A19.41,19.41,0,0,0,65,.93,1,1,0,0,0,63,1V36a45.86,45.86,0,0,0-28.66,10.8C16.18,40.48,4,40,.79,45.51-2.29,50.86,3.94,59.3,10,65.68A11,11,0,0,0,18,83c.81,38.41,46.08,59.2,75.66,34.21,8.53,3,29,9.15,33.55,1.31C130.39,113,123.86,102.65,109.3,90.1ZM77.59,3.31A19.39,19.39,0,0,0,91,3.83V18.68c-1.79.62-7.22,2.13-12.57-.23A19.19,19.19,0,0,0,65,17.93V3.08C66.81,2.46,72.24,1,77.59,3.31ZM65,45v-7c39.69.91,58,50.27,28.21,76.81C71.32,107,46,92.66,27.77,78.64a11,11,0,0,0-3.2-16.13A43.88,43.88,0,0,1,63,38.06V45A1,1,0,0,0,65,45ZM32.55,48.36a46.21,46.21,0,0,0-9.83,13.28,10.93,10.93,0,0,0-11.4,2.47C-8.39,43.23,5.23,39.08,32.55,48.36ZM10,72a9,9,0,1,1,9,9A9,9,0,0,1,10,72Zm10,11a11,11,0,0,0,6.34-2.82c18.45,14.21,43.45,28.35,65.05,36.22C63,139.16,20.83,119.1,20.05,83Zm105.4,34.5c-2.51,4.35-14,3.62-30-1.85a45.61,45.61,0,0,0,13.42-23.21C121.59,103.58,128,113.12,125.45,117.47Z"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 321,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 320,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 304,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 303,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
            href: "/dashboard/startup",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              onClick: activeClassFn2,
              className: `text-primarydark dark:text-background ml-1 cursor-pointer opacity-50 ${activeHover2 ? 'opacity-100' : 'opacity-50'} ${activeClass2 ? 'opacity-100' : 'opacity-50'}`,
              children: "Startup idea"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 329,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 328,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 302,
          columnNumber: 11
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
                lineNumber: 353,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 352,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
              children: "Searching"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 355,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
              id: "Searching",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                className: "cls-1",
                d: "M79.57,36.43a22,22,0,1,0,0,31.14A22,22,0,0,0,79.57,36.43Zm-1.44,29.7a20,20,0,1,1,0-28.26A20,20,0,0,1,78.13,66.13Z"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 357,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                className: "cls-1",
                d: "M117,0H31A11,11,0,0,0,20,11v97H1a1,1,0,0,0-1,1v8a11,11,0,0,0,11,11H97a11,11,0,0,0,11-11V104a3.42,3.42,0,0,0,2.41-1c4.71-4.71,5.59-5.13,5.59-7s-.66-2.08-8-9.42V20h19a1,1,0,0,0,1-1V11A11,11,0,0,0,117,0ZM90.62,126H11a9,9,0,0,1-9-9v-7H86C86,116.29,85,122,90.62,126ZM114,96c0,.79,0,.61-5,5.57a1.43,1.43,0,0,1-2,0L86.43,81a1.38,1.38,0,0,1,0-2c5.07-5.07,4.8-5,5.57-5s-.17-.75,14.28,13.7C113.87,95.31,114,95.11,114,96ZM82.37,70.37a26,26,0,1,1,0-36.74A26,26,0,0,1,82.37,70.37Zm2.79,0,3.52,3.52-2.8,2.8-3.52-3.52A26.44,26.44,0,0,0,85.16,70.36ZM94.43,73a3.53,3.53,0,0,0-4.23-.47l-3.75-3.75C100.27,50.28,87,24,64,24A28,28,0,0,0,36,52c0,23.37,26.71,36,44.79,22.45l3.73,3.74A3.41,3.41,0,0,0,85,82.43c22.22,22.23,20.57,20.61,21,20.92V117a9,9,0,0,1-18,0v-8a1,1,0,0,0-1-1H22V11a9,9,0,0,1,9-9c85.6,0,79.74-.08,79.41.17a11,11,0,0,0-4.14,6.32c-.41,1.77-.29-4.19-.29,76ZM126,18H108V11a9,9,0,0,1,18,0Z"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 361,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 356,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 340,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            onClick: activeClassFn3,
            className: `text-primarydark dark:text-background ml-1 cursor-pointer opacity-50 ${activeHover3 ? 'opacity-100' : 'opacity-50'} ${activeClass3 ? 'opacity-100' : 'opacity-50'}`,
            children: "Business plan"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 367,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 339,
          columnNumber: 11
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
                lineNumber: 393,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 392,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
              children: "Data User"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 395,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              className: "cls-1",
              d: "M109,0H23a9,9,0,0,0-9,9c0,118,0,110,0,110.64A9.22,9.22,0,0,0,23.31,128H109a5,5,0,0,0,5-5V5A5,5,0,0,0,109,0Zm3,5V107a3,3,0,0,1-3,3H26V2h83A3,3,0,0,1,112,5ZM16,9a7,7,0,0,1,7-7h1V110H23a9,9,0,0,0-6.94,3.26C16,113.34,16,118.28,16,9Zm96,114a3,3,0,0,1-3,3H23.31c-6.13,0-9.56-6.94-5.68-11.43A6.91,6.91,0,0,1,23,112c90.91,0,87.06.44,89-1Z"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 396,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              className: "cls-1",
              d: "M56.15,75.81A33,33,0,1,0,35,45,33.05,33.05,0,0,0,56.15,75.81Zm-7.53-6.68c5.89-22.82,32.86-22.83,38.76,0A30.88,30.88,0,0,1,48.62,69.13ZM68,14c28.07,0,41.61,34.51,21.09,53.65C86.56,59,80.82,52.83,73.57,50.75a13,13,0,1,0-11.14,0c-7.25,2.08-13,8.24-15.52,16.92C26.45,48.69,39.8,14,68,14Zm0,36A11,11,0,1,1,79,39,11,11,0,0,1,68,50Z"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 400,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              className: "cls-1",
              d: "M96.5,87h-56a1,1,0,0,0,0,2h56A1,1,0,0,0,96.5,87Z"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 404,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              className: "cls-1",
              d: "M96.5,99h-56a1,1,0,0,0,0,2h56A1,1,0,0,0,96.5,99Z"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 405,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 378,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            onClick: activeClassFn4,
            className: `text-primarydark dark:text-background ml-1 cursor-pointer opacity-50 ${activeHover4 ? 'opacity-100' : 'opacity-50'} ${activeClass4 ? 'opacity-100' : 'opacity-50'}`,
            children: "Account"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 409,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 376,
          columnNumber: 11
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
                lineNumber: 433,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 432,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
              children: "Log Out"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 435,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
              id: "Log_Out",
              "data-name": "Log Out",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                className: "cls-1",
                d: "M44,61v6a1,1,0,0,0,2,0V61A1,1,0,0,0,44,61Z"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 437,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                className: "cls-1",
                d: "M113,113H86V75h6v9a1,1,0,0,0,1,1c.64,0-.83,1.26,20.72-20.3a1,1,0,0,0,0-1.44l-20-20A1,1,0,0,0,92,44v9H86V14a1,1,0,0,0-1-1H54V1a1,1,0,0,0-1.35-1l-38,13A1,1,0,0,0,14,14c0,106.58-.38,100.6.69,101C55.34,128.88,52.74,128,53,128a1,1,0,0,0,1-1V115h59A1,1,0,0,0,113,113ZM93,55a1,1,0,0,0,1-1V46.46L111.56,64,94,81.54V74a1,1,0,0,0-1-1H54V55ZM54,21H77V53H54Zm30-6V53H79V20a1,1,0,0,0-1-1H54V15ZM52,125.57l-36-12.3V14.73L52,2.43ZM54,75H77v38H54Zm25,38V75h5v38Z"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 438,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 436,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 420,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            onClick: activeClassFn5,
            className: `text-primarydark dark:text-background ml-1 cursor-pointer opacity-50 ${activeHover5 ? 'opacity-100' : 'opacity-50'} ${activeClass5 ? 'opacity-100' : 'opacity-50'}`,
            children: "Log out"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 444,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 419,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 250,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 7
    }, undefined), children]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 128,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (DesktopNavbar);

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
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "C:\\off-saas\\components\\dashboard\\Tippy.js";





const TippyMonster = ({
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
    emptyInput && setCurrentTippy(true); // current tippy jest częścią obsługi problemu, kiedy mamy otwartego tooltipa normalnego i wciskamy, żeby wyświetlić czerwonego
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
  console.log('tm - ', tippyMonster);
  console.log('visible - ', visible);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_tippyjs_react__WEBPACK_IMPORTED_MODULE_3___default.a // trigger={tippyMonster}
  , {
    zIndex: visible || tippyMonster ? 22 : 0,
    onShow: show,
    animation: "fade",
    duration: 500,
    touch: true,
    visible: visible || tippyMonster,
    onClickOutside: hide,
    offset: market || model || success || tippyMonster ? [-265, -65] : [-220, -65] // placement='left-end'
    ,
    interactive: true,
    content: tippyMonster ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      ref: tippyRef,
      className: "h-12 w-96 shadow-lg rounded-2xl bg-red flex justify-center items-center focus:outline-none",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "text-primarydark py-4 px-2 text-sm text-center text-white flex justify-center items-center",
        children: ["Oops, you have to provide all the information", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "/emojis/crying.svg",
          height: 25,
          width: 25,
          className: "inline-block relative"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 13
        }, undefined), "."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex items-center justify-center flex-wrap gap-2 mt-2"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 11
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
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
            lineNumber: 104,
            columnNumber: 30
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "inline-block",
            children: "."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 111
          }, undefined)]
        }, void 0, true), initialModal && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/emojis/hammer.svg",
            height: 22,
            width: 22,
            className: "inline-block"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 34
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "inline-block",
            children: "."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 114
          }, undefined)]
        }, void 0, true), vision && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/emojis/desert.svg",
            height: 22,
            width: 22,
            className: "inline-block relative bottom-0.5"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 28
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "inline-block",
            children: "."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 128
          }, undefined)]
        }, void 0, true), product && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/emojis/ox.svg",
            height: 22,
            width: 22,
            className: "inline-block relative bottom-0.5"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 29
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "inline-block",
            children: "."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 125
          }, undefined)]
        }, void 0, true), market && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/emojis/whale.svg",
            height: 22,
            width: 22,
            className: "inline-block"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 28
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "inline-block",
            children: "."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 107
          }, undefined)]
        }, void 0, true), finances && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/emojis/unicorn.svg",
            height: 22,
            width: 22,
            className: "inline-block relative bottom-0.5"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 30
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "inline-block",
            children: "."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 131
          }, undefined)]
        }, void 0, true), model && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/emojis/pirat.svg",
            height: 22,
            width: 22,
            className: "inline-block"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 27
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "inline-block",
            children: "."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 106
          }, undefined)]
        }, void 0, true), success && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/emojis/star.svg",
            height: 22,
            width: 22,
            className: "inline-block"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 29
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "inline-block",
            children: "!"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 107
          }, undefined)]
        }, void 0, true), welcome && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/gifs/hello-hand.gif",
            height: 22,
            width: 22,
            className: "inline-block"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 29
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "inline-block",
            children: "."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 111
          }, undefined)]
        }, void 0, true), contentText1 && contentText1, startups && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/emojis/balloon.svg",
            height: 22,
            width: 22,
            className: "inline-block"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 30
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "inline-block",
            children: "."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 111
          }, undefined)]
        }, void 0, true), vision && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/emojis/camel.svg",
            height: 22,
            width: 22,
            className: "inline-block"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 28
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "inline-block",
            children: "."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 107
          }, undefined)]
        }, void 0, true), product && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/emojis/map.svg",
            height: 22,
            width: 22,
            className: "inline-block"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 29
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "inline-block",
            children: "."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 106
          }, undefined)]
        }, void 0, true), market && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/emojis/island.svg",
            height: 22,
            width: 22,
            className: "inline-block"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 28
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "inline-block",
            children: "."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 108
          }, undefined)]
        }, void 0, true), finances && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/emojis/construction.svg",
            height: 22,
            width: 22,
            className: "inline-block"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 30
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "inline-block",
            children: "."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 116
          }, undefined)]
        }, void 0, true), model && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/emojis/popper.svg",
            height: 22,
            width: 22,
            className: "inline-block relative bottom-0.5"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 27
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "inline-block",
            children: "!"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 127
          }, undefined)]
        }, void 0, true), welcome && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/gifs/rocket.gif",
            height: 22,
            width: 22,
            className: "inline-block"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 29
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "inline-block",
            children: "!"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 107
          }, undefined)]
        }, void 0, true)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex items-center justify-center flex-wrap gap-2 mt-2"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 11
    }, undefined),
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "fixed flex flex-wrap m-2 bottom-4 right-4 z-50",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_4___default.a, {
        src: "/monsters/monster-two.svg",
        height: 66,
        width: 60,
        className: "cursor-pointer z-50",
        onClick: onImageClick
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 74,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (TippyMonster);

/***/ }),

/***/ "./lib/firebase-admin.js":
/*!*******************************!*\
  !*** ./lib/firebase-admin.js ***!
  \*******************************/
/*! exports provided: auth, db */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auth", function() { return auth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "db", function() { return db; });
/* harmony import */ var firebase_admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase-admin */ "firebase-admin");
/* harmony import */ var firebase_admin__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_admin__WEBPACK_IMPORTED_MODULE_0__);


if (!firebase_admin__WEBPACK_IMPORTED_MODULE_0__["apps"].length) {
  firebase_admin__WEBPACK_IMPORTED_MODULE_0__["initializeApp"]({
    credential: firebase_admin__WEBPACK_IMPORTED_MODULE_0__["credential"].cert({
      client_email: 'firebase-adminsdk-ef8mp@saas-startup-a5a34.iam.gserviceaccount.com',
      private_key: '-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQClZWkim9PKKr52\nD0ZDEuv4ITBHUrI/rTpXOYzqJns4Y4bBEPKe202o5MwMbu/egWIfmeL5I+RPg6Gq\nnjAFqLmaxYvf0wMWowDiNVx7PcujR3dU8A/GYoyTUQpX/qv6754SuJxnm+AA6LkY\nkv5HtyvQ1WYLsCB2MF5ia/73wBuH8+UkomX5GJ0CFgexk4qAnvhHxtv8WZxX3dlF\nDXx4Ex8/uyc9i/I51D/NhDknAG/s8TGbOuuTu7oBnpp8jivJRNEf+pvjatbwOh8R\n782Rnmnwsu0PzINCc5boztqmaJEW6pKl8kNlm9FvpKcwcYO2IrfRGWwXLF4oK88z\ncM3XAZldAgMBAAECggEAHB7SUbqJtzEuQbdWHFhOu1i1MyMpwC7NIQBdZ4AUaiFt\ny0x826pwmTsRQDnqWXvI+ZN55h8GlchNB8uuYX/u0pQstGjVeRdMsqkc6K04frHL\nZasNG48s1G0uY4iep+LujsNJgEoduznWIon3Zq0La42ktG8FDeMqYPR4nJnSdHoq\nm3pWfJir+qnMHsiP5QVRc4gISUueK77699EL8rFyM4dWCbRfi7Y0BAu/rkcFboiP\n1HHXEJ/cViGKqVHLwrsSjceA42SP+nAiDUxyLqLhZMoeWAMko1COZ2XNjcEWDBm5\nCd7RCA0KTDPWrc0BhjRVwwPtC7QV1Y+kuikct7ayQQKBgQDXc5ei5m0b/hD7DoS5\nSWCtpKq9Bjmt6sprfv9OMyauC9lybP6KjkY/hRGlZJH2wxMt33rS+XQx5pJg4KRQ\nCcvkFr9brvxe/yrUCJh32sRk3F6Lv7CUFHUBfigZpfBvjiZPyymGg1KXay1M38Oa\nc8/dszni5rELlqlithFLiuDMfQKBgQDEhikIUkXZUwNjfhBUWxFu7gVA4GpcJZLs\nluAts2nL92MrYG+Zux1WZkBtx/PQ4ZZ2N9iw0zDAtHpuCpjVulRsZuNbEKkRyGoL\ngw1Ah4KQf/e38AEtJPvYN77MaFwDl+mangqTQY/myNqtRme83cmxBIb//Zmx2q+H\nXRXUpOT2YQKBgHsM48//9tUD+ELK+faw9+x0naczxQGVlWJrt/i7sh25WsnFgmMz\n+t8QaxGhLNRYeb27Y3TXUAun+nYmFvI3hiGQ9F2yxSSka5uKBTp+0aghTEZYhsss\nG99sZA6x/W5ZK3xrNh5DJoqghdDgA+FUv6WJVUhIJVnPBJMCFUKl4NopAoGAV9ol\no6urv/AlNqfXQu6HB5Dt1ke8JD9Dw/Hae3OV2vFXar+shAuqnMIPEURukTUXXveu\nLbXrOGo1xNWF5x1puh/wiPgUrHdsOIM4PF2Xl2MtaROoYvcCgnDBIX2RjKWvb0gx\nMA0B+EhXwVgU7dAz5qdAdlV3DJPXHesV5D5mgGECgYB5xR0eaeD5UjLsdi9+sQVR\nJvwrsVmQJjdbobD6Uju70M5h6gAyXZXajX9nb97sUtnjWYFLWcCOYuOVaf4+5vZF\nVb/k+kfmZKPsQIdt8cWvK+tVTiljxGUjf/+cg/6fwcV4jGhPFZDWLBjC5j5OZZIZ\n5ovF+rOXON7XT99FDbeDFQ==\n-----END PRIVATE KEY-----\n',
      project_id: 'saas-startup-a5a34'
    }),
    databaseURL: 'https://saas-startup.firebaseio.com'
  });
}

const auth = firebase_admin__WEBPACK_IMPORTED_MODULE_0__["auth"]();
const db = firebase_admin__WEBPACK_IMPORTED_MODULE_0__["firestore"]();


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
      // console.log('user - ', user);
      // console.log('user name - ', name);
      const formatedUser = await formatUser(user); // const decodedToken = await firebase.auth().currentUser.getIdTokenResult();
      // console.log(decodedToken.claims.stripeRole);

      _lib_firebase__WEBPACK_IMPORTED_MODULE_1__["db"].collection('users').doc(user.uid).set({
        formatedUser
      }, {
        merge: true
      });
      setCurrentUser(formatedUser); // Cookies.set('token', user.za, true);

      js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set('uid', user.uid);
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

/***/ "./pages/dashboard/projects/[project]/index.js":
/*!*****************************************************!*\
  !*** ./pages/dashboard/projects/[project]/index.js ***!
  \*****************************************************/
/*! exports provided: getStaticPaths, getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticPaths", function() { return getStaticPaths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_firebase_admin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../lib/firebase-admin */ "./lib/firebase-admin.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../lib/firebase */ "./lib/firebase.js");
/* harmony import */ var _lib_newAuth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../lib/newAuth */ "./lib/newAuth.js");
/* harmony import */ var _components_dashboard_NavbarTemplate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/dashboard/NavbarTemplate */ "./components/dashboard/NavbarTemplate.js");
/* harmony import */ var _components_dashboard_Tippy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/dashboard/Tippy */ "./components/dashboard/Tippy.js");


var _jsxFileName = "C:\\off-saas\\pages\\dashboard\\projects\\[project]\\index.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








 // import ProjectNav from '../../../../components/dashboard/startup/project/ProjectNav';

const ProjectPage = ({
  projects
}) => {
  const {
    0: selectedProject,
    1: setSelectedProject
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const containerRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  const {
    currentUser
  } = Object(_lib_newAuth__WEBPACK_IMPORTED_MODULE_6__["useAuth"])();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const uid = js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.get('uid');
    const filteredArray = projects && projects.filter(project => project.uid == uid);
    console.log(filteredArray);
    filteredArray && filteredArray.length == 1 && setSelectedProject(filteredArray[0]);
  }, [projects]);
  console.log(projects);
  console.log(selectedProject); // BUSINESS PLAN CREATE

  const onBusinessPlanCreate = async () => {
    await _lib_firebase__WEBPACK_IMPORTED_MODULE_5__["db"].collection('projects').doc(selectedProject.projectId).collection('businessPlan').doc(router.query.project).set({
      uid: currentUser.uid,
      projectId: selectedProject.projectId,
      pathName: selectedProject.projectName
    });
    await _lib_firebase__WEBPACK_IMPORTED_MODULE_5__["db"].collection('projects').doc(selectedProject.projectId).update({
      isBusinessPlanCreated: true
    });
    router.push(`/dashboard/projects/${router.query.project}/business-plan`);
  };

  console.log('CURRENT PROJECT --> ', selectedProject);

  const onCashFlowAnalysisCreate = async () => {
    await _lib_firebase__WEBPACK_IMPORTED_MODULE_5__["db"].collection('projects').doc(selectedProject.projectId).collection('cashFlow').doc(router.query.project).collection('inputs').doc().set({
      uid: currentUser.uid,
      projectId: selectedProject.projectId,
      pathName: selectedProject.projectName,
      revenueElements: [],
      costsElements: [],
      budgetElements: [],
      globalStartDate: '',
      globalEndDate: '',
      periods: [],
      tax: '0'
    });
    await _lib_firebase__WEBPACK_IMPORTED_MODULE_5__["db"].collection('projects').doc(selectedProject.projectId).update({
      isCashflowCreated: true
    });
    router.push(`/dashboard/projects/${router.query.project}/cash-flow`);
  };

  const onCompetitorsAnalysisCreate = async () => {
    await _lib_firebase__WEBPACK_IMPORTED_MODULE_5__["db"].collection('projects').doc(selectedProject.projectId).collection('competitors').doc(router.query.project).collection('inputs').doc().set({
      uid: currentUser.uid,
      projectId: selectedProject.projectId,
      pathName: selectedProject.projectName,
      competitorsArray: []
    });
    await _lib_firebase__WEBPACK_IMPORTED_MODULE_5__["db"].collection('projects').doc(selectedProject.projectId).update({
      isCompetitorsAnalysisCreated: true
    });
    router.push(`/dashboard/projects/${router.query.project}/competitors`);
  };

  if (router.isFallback) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "Loading..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }, undefined);
  }

  return (
    /*#__PURE__*/
    // <div className="w-full h-full justify-center items-center">
    //   <h2 className="text-center">Welcome to the project page! Project name:</h2>
    //   {selectedProject !== null && (
    //     <>
    //       <p className="text-center">{selectedProject.projectName}</p>
    //       <p className="text-center">{selectedProject.uid}</p>
    //     </>
    //   )}
    // </div>
    Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_dashboard_Tippy__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 7
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_dashboard_NavbarTemplate__WEBPACK_IMPORTED_MODULE_7__["default"], {
        children: selectedProject ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          ref: containerRef,
          className: "min-h-screen w-full relative flex flex-col items-center",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "w-full sm:max-w-smContainer md:max-w-mdContainer lg:max-w-lgContainer xl:max-w-xlContainer 2xl:max-w-xxlContainer normal:max-w-normalContainer relative mt-16",
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
                    lineNumber: 114,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
                    id: "Landing_Success",
                    "data-name": "Landing Success",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                      className: "cls-1",
                      d: "M109.3,90.1A46,46,0,0,0,65,36V20.08c1.78-.62,7.21-2.14,12.57.23a19.33,19.33,0,0,0,14.82,0c.87-.38.61.31.61-17.93a1,1,0,0,0-1.43-.93c-.07,0-6.69,2.87-13.18,0A19.41,19.41,0,0,0,65,.93,1,1,0,0,0,63,1V36a45.86,45.86,0,0,0-28.66,10.8C16.18,40.48,4,40,.79,45.51-2.29,50.86,3.94,59.3,10,65.68A11,11,0,0,0,18,83c.81,38.41,46.08,59.2,75.66,34.21,8.53,3,29,9.15,33.55,1.31C130.39,113,123.86,102.65,109.3,90.1ZM77.59,3.31A19.39,19.39,0,0,0,91,3.83V18.68c-1.79.62-7.22,2.13-12.57-.23A19.19,19.19,0,0,0,65,17.93V3.08C66.81,2.46,72.24,1,77.59,3.31ZM65,45v-7c39.69.91,58,50.27,28.21,76.81C71.32,107,46,92.66,27.77,78.64a11,11,0,0,0-3.2-16.13A43.88,43.88,0,0,1,63,38.06V45A1,1,0,0,0,65,45ZM32.55,48.36a46.21,46.21,0,0,0-9.83,13.28,10.93,10.93,0,0,0-11.4,2.47C-8.39,43.23,5.23,39.08,32.55,48.36ZM10,72a9,9,0,1,1,9,9A9,9,0,0,1,10,72Zm10,11a11,11,0,0,0,6.34-2.82c18.45,14.21,43.45,28.35,65.05,36.22C63,139.16,20.83,119.1,20.05,83Zm105.4,34.5c-2.51,4.35-14,3.62-30-1.85a45.61,45.61,0,0,0,13.42-23.21C121.59,103.58,128,113.12,125.45,117.47Z"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 116,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 115,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 107,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "text-primarydark text-2xl mt-2 pl-2 dark:text-background",
                  children: selectedProject && selectedProject.projectName
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 122,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 106,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "flex justify-end",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  onClick: () => router.push(`/dashboard/startup/${router.query.project}/edit`),
                  className: "hover:bg-primary hover:text-white dark:hover:bg-primarydark dark:hover:text-background focus:outline-none border border-primary text-primary text-sm font-light py-2 px-8 rounded-2xl mt-2 dark:text-primarydark dark:border-primarydark",
                  children: "Settings"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 128,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 126,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 105,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                className: "text-secondary text-md text-gray",
                children: "This is the best startup in the tech field"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 137,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 136,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "grid grid-cols-2fr grid-rows-3fr mt-20 gap-16 mb-32",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "rounded-2xl transform hover:scale-105 hover:-translate-y-2 hover:-translate-x-2 transition duration-500 ease-in-out",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                  className: "text-primarydark text-lg dark:text-background",
                  children: "Startup idea"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 143,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  // style={{ maxHeight: 330 }}
                  className: "shadow-lg mt-1 w-full flex flex-col justify-center items-center border-r-6 rounded-2xl bg-white dark:bg-background",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    height: 200,
                    width: 200,
                    src: "/launch-maker.svg"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 148,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                    className: "text-base text-gray text-center px-8",
                    children: "Startup idea will guide you through the process of creating your business plan. \uD83D\uDD0E"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 149,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "p-4",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                      className: "hover:bg-primary hover:text-white dark:hover:bg-primarydark dark:hover:text-background focus:outline-none border border-primary text-primary dark:text-primarydark dark:border-primarydark text-sm font-light py-2 px-6 rounded-2xl m-2",
                      children: "Create your startup idea"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 153,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 152,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 144,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 142,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "rounded-2xl transform hover:scale-105 hover:-translate-y-2 hover:-translate-x-2 transition duration-500 ease-in-out",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                  className: "text-primarydark text-lg dark:text-background",
                  children: "Business plan"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 161,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  // style={{ maxHeight: 330 }}
                  className: "shadow-lg mt-1 w-full flex flex-col justify-center items-center border-r-6 rounded-2xl bg-white dark:bg-background",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    height: 200,
                    width: 200,
                    src: "/main-sections/business-plan.svg"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 166,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                    className: "text-base text-gray text-center px-8",
                    children: "Let's create your business plan, which will be the core of your startup presentation. \uD83D\uDD0E"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 167,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "p-4",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                      onClick: onBusinessPlanCreate,
                      className: "hover:bg-primary hover:text-white dark:hover:bg-primarydark dark:hover:text-background focus:outline-none border border-primary text-primary dark:text-primarydark dark:border-primarydark text-sm font-light py-2 px-6 rounded-2xl m-2",
                      children: "Create your business plan"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 171,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 170,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 162,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 160,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "rounded-2xl transform hover:scale-105 hover:-translate-y-2 hover:-translate-x-2 transition duration-500 ease-in-out",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                  className: "text-primarydark text-lg dark:text-background",
                  children: "Cash flow analysis"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 182,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  // style={{ maxHeight: 330 }}
                  className: "shadow-lg mt-1 w-full flex flex-col justify-center items-center border-r-6 rounded-2xl bg-white dark:bg-background",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    height: 200,
                    width: 200,
                    src: "/main-sections/cash-flow2.svg"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 187,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                    className: " text-base text-gray text-center px-8",
                    children: "Cash flow analysis will allow you to analyze the liquidity of your startup. \uD83D\uDD0E"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 188,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "p-4",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                      onClick: onCashFlowAnalysisCreate,
                      className: "hover:bg-primary hover:text-white dark:hover:bg-primarydark dark:hover:text-background focus:outline-none border border-primary text-primary dark:text-primarydark dark:border-primarydark text-sm font-light py-2 px-6 rounded-2xl m-2",
                      children: "Create your startup cash flow"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 192,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 191,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 183,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 181,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "rounded-2xl transform hover:scale-105 hover:-translate-y-2 hover:-translate-x-2 transition duration-500 ease-in-out",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                  className: "text-primarydark text-lg dark:text-background",
                  children: "Competitors analysis"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 203,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  // style={{ maxHeight: 330 }}
                  className: "shadow-lg mt-1 w-full flex flex-col justify-center items-center border-r-6 rounded-2xl bg-white dark:bg-background",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    height: 200,
                    width: 200,
                    src: "/main-sections/competitors.svg"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 208,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                    className: "text-base text-gray text-center px-8",
                    children: "Competitor analysis will help you better prepare to enter a given market. \uD83D\uDD0E"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 209,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "p-4",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                      onClick: onCompetitorsAnalysisCreate,
                      className: "hover:bg-primary hover:text-white dark:hover:bg-primarydark dark:hover:text-background focus:outline-none border border-primary text-primary dark:text-primarydark dark:border-primarydark text-sm font-light py-2 px-6 rounded-2xl m-2",
                      children: "Analyze your startup competitors"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 213,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 212,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 204,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 202,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "rounded-2xl transform hover:scale-105 hover:-translate-y-2 hover:-translate-x-2 transition duration-500 ease-in-out",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                  className: "text-primarydark text-lg dark:text-background",
                  children: "Startup members"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 224,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  // style={{ maxHeight: 330 }}
                  className: "shadow-lg mt-1 w-full flex flex-col justify-center items-center border-r-6 rounded-2xl bg-white dark:bg-background",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    height: 200,
                    width: 200,
                    src: "/main-sections/members1.svg"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 229,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                    className: "text-base text-gray text-center px-8",
                    children: "Identify the roles of your team and the people who will have access to this project. \uD83D\uDD0E"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 230,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "p-4",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                      onClick: onCompetitorsAnalysisCreate,
                      className: "hover:bg-primary hover:text-white dark:hover:bg-primarydark dark:hover:text-background focus:outline-none border border-primary text-primary dark:text-primarydark dark:border-primarydark text-sm font-light py-2 px-6 rounded-2xl m-2",
                      children: "Manage your startup members"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 234,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 233,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 225,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 223,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 140,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 11
        }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "h-screen w-full flex justify-center items-center",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "text-primarydark text-lg",
            children: "...Loading"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 248,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 247,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 7
      }, undefined)]
    }, void 0, true)
  );
};

const getStaticPaths = async () => {
  // const { projects } = await getAllProjects();
  const snapshot = await _lib_firebase_admin__WEBPACK_IMPORTED_MODULE_2__["db"].collection('projects').get();
  const projects = [];
  snapshot.forEach(doc => {
    projects.push(doc.data());
  });
  const paths = projects.map(project => ({
    params: {
      project: project.projectName.toString()
    }
  }));
  return {
    paths: paths,
    fallback: true
  };
};
const getStaticProps = async ({
  params
}) => {
  // const { projects } = await getParticularProject(params.work);
  // const uid = Cookies.get('uid');
  let ref = _lib_firebase_admin__WEBPACK_IMPORTED_MODULE_2__["db"].collection('projects').where('projectName', '==', params.project);
  const snapshot = await ref.get();
  const projects = [];
  snapshot.forEach(doc => {
    projects.push(_objectSpread({
      id: doc.id
    }, doc.data()));
  });
  return {
    props: {
      projects
    },
    revalidate: 1
  };
}; // export const getServerSideProps = async ({ params }) => {
//   let ref = db.collection('projects').where('projectName', '==', params.project);
//   const snapshot = await ref.get();
//   const projects = [];
//   snapshot.forEach((doc) => {
//     projects.push({ id: doc.id, ...doc.data() });
//   });
//   return {
//     props: { projects },
//   };
// };

/* harmony default export */ __webpack_exports__["default"] = (ProjectPage);

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

/***/ "@tippyjs/react":
/*!*********************************!*\
  !*** external "@tippyjs/react" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@tippyjs/react");

/***/ }),

/***/ "firebase-admin":
/*!*********************************!*\
  !*** external "firebase-admin" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase-admin");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjQuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2ltYWdlLWNvbmZpZy5qc1wiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZGFzaGJvYXJkL0Rlc2t0b3BOYXZiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9kYXNoYm9hcmQvTmF2YmFyVGVtcGxhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9kYXNoYm9hcmQvVGlwcHkuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2ZpcmViYXNlLWFkbWluLmpzIiwid2VicGFjazovLy8uL2xpYi9maXJlYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvbmV3QXV0aC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2ltYWdlLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvdXNlLWludGVyc2VjdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC93aXRoLXJvdXRlci50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcy1ub29wLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2Rhc2hib2FyZC9wcm9qZWN0cy9bcHJvamVjdF0vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvdXNlV2luZG93U2l6ZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAdGlwcHlqcy9yZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlLWFkbWluXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2UvYXBwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2UvYXV0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL2ZpcmVzdG9yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL2Z1bmN0aW9uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL3N0b3JhZ2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJnc2FwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianMtY29va2llXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC10aGVtZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJJc0FjdGl2ZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiRGVza3RvcE5hdmJhciIsImNoaWxkcmVuIiwibG9nT3V0IiwidXNlQXV0aCIsInRoZW1lIiwic2V0VGhlbWUiLCJ1c2VUaGVtZSIsImFjdGl2ZSIsInNldEFjdGl2ZSIsInVzZVN0YXRlIiwibmF2UmVmIiwidXNlUmVmIiwicm91dGVyIiwidXNlUm91dGVyIiwibWFuUmVmIiwidGwiLCJnc2FwIiwidGltZWxpbmUiLCJyZXBlYXQiLCJ5b3lvIiwidXNlRWZmZWN0IiwidG8iLCJjdXJyZW50IiwiZHVyYXRpb24iLCJ5IiwieCIsImVhc2UiLCJQb3dlcjEiLCJlYXNlSW5PdXQiLCJhY3RpdmVDbGFzczEiLCJzZXRBY3RpdmVDbGFzczEiLCJhY3RpdmVDbGFzczIiLCJzZXRBY3RpdmVDbGFzczIiLCJhY3RpdmVDbGFzczMiLCJzZXRBY3RpdmVDbGFzczMiLCJhY3RpdmVDbGFzczQiLCJzZXRBY3RpdmVDbGFzczQiLCJhY3RpdmVDbGFzczUiLCJzZXRBY3RpdmVDbGFzczUiLCJhY3RpdmVIb3ZlcjEiLCJzZXRBY3RpdmVIb3ZlcjEiLCJhY3RpdmVIb3ZlcjIiLCJzZXRBY3RpdmVIb3ZlcjIiLCJhY3RpdmVIb3ZlcjMiLCJzZXRBY3RpdmVIb3ZlcjMiLCJhY3RpdmVIb3ZlcjQiLCJzZXRBY3RpdmVIb3ZlcjQiLCJhY3RpdmVIb3ZlcjUiLCJzZXRBY3RpdmVIb3ZlcjUiLCJwYXRobmFtZSIsImluY2x1ZGVzIiwiYWN0aXZlQ2xhc3NGbjEiLCJhY3RpdmVDbGFzc0ZuMiIsImFjdGl2ZUNsYXNzRm4zIiwiYWN0aXZlQ2xhc3NGbjQiLCJhY3RpdmVDbGFzc0ZuNSIsIm1vdXNlRW50ZXJOYXYiLCJ3aWR0aCIsIlBvd2VyNCIsImVhc2VPdXQiLCJtb3VzZUxlYXZlTmF2Iiwib3ZlcmZsb3ciLCJoZWlnaHQiLCJjdXJzb3IiLCJSZWRpcmVjdCIsInB1c2giLCJOYXZiYXJUZW1wbGF0ZSIsInNpemUiLCJ1c2VXaW5kb3dTaXplIiwiYWN0aXZlSG92ZXIiLCJ1c2VDb250ZXh0IiwiY3VycmVudFVzZXIiLCJjb250ZW50UmVmIiwiYWN0aXZlQ2xhc3MiLCJtYXJnaW5MZWZ0IiwidHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uIiwidHJhbnNpdGlvbkR1cmF0aW9uIiwidHJhbnNpdGlvblByb3BlcnR5IiwiVGlwcHlNb25zdGVyIiwiY29udGVudENsYXNzIiwiY29udGVudFRleHQiLCJjb250ZW50VGV4dDEiLCJzdGFydHVwcyIsIm1hcmtldCIsIm1vZGVsIiwic3VjY2VzcyIsInRpcHB5TW9uc3RlciIsInNldFRpcHB5TW9uc3RlciIsInNldEN1cnJlbnRUaXBweSIsImVtcHR5SW5wdXQiLCJpbml0aWFsTW9kYWwiLCJ2aXNpb24iLCJwcm9kdWN0IiwiZmluYW5jZXMiLCJ3ZWxjb21lIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJ0aXBweVJlZiIsInNob3ciLCJmcm9tVG8iLCJhdXRvQWxwaGEiLCJzY2FsZSIsInRyYW5zZm9ybU9yaWdpbiIsImhpZGUiLCJlYXNlSW4iLCJvbkltYWdlQ2xpY2siLCJjb25zb2xlIiwibG9nIiwiYWRtaW4iLCJsZW5ndGgiLCJjcmVkZW50aWFsIiwiY2VydCIsImNsaWVudF9lbWFpbCIsInByaXZhdGVfa2V5IiwicHJvamVjdF9pZCIsImRhdGFiYXNlVVJMIiwiYXV0aCIsImRiIiwiZmlyZWJhc2UiLCJhcHBzIiwiaW5pdGlhbGl6ZUFwcCIsImFwaUtleSIsImF1dGhEb21haW4iLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsIm1lYXN1cmVtZW50SWQiLCJmaXJlc3RvcmUiLCJzdG9yYWdlIiwiQXV0aENvbnRleHQiLCJBdXRoUHJvdmlkZXIiLCJzZXRDdXJyZW50VXNlciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiaGFuZGxlVXNlciIsInVzZXIiLCJmb3JtYXRlZFVzZXIiLCJmb3JtYXRVc2VyIiwiY29sbGVjdGlvbiIsImRvYyIsInVpZCIsInNldCIsIm1lcmdlIiwiQ29va2llcyIsInJlbW92ZSIsInNpZ25VcCIsImVtYWlsIiwicGFzc3dvcmQiLCJjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJ0aGVuIiwicmVzcG9uc2UiLCJsb2dJbiIsInNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwic2lnbk91dCIsInVuc3Vic2NyaWJlIiwib25JZFRva2VuQ2hhbmdlZCIsInZhbHVlIiwiZ2V0U3RyaXBlUm9sZSIsImdldElkVG9rZW4iLCJkZWNvZGVkVG9rZW4iLCJnZXRJZFRva2VuUmVzdWx0IiwiY2xhaW1zIiwic3RyaXBlUm9sZSIsInRva2VuIiwicHJvdmlkZXIiLCJwcm92aWRlckRhdGEiLCJwcm92aWRlcklkIiwiZ2xvYmFsIiwiVkFMSURfTE9BRElOR19WQUxVRVMiLCJsb2FkZXJzIiwiVkFMSURfTEFZT1VUX1ZBTFVFUyIsImRldmljZVNpemVzIiwiaW1hZ2VTaXplcyIsImxvYWRlciIsInBhdGgiLCJkb21haW5zIiwicHJvY2VzcyIsImltYWdlQ29uZmlnRGVmYXVsdCIsImFsbFNpemVzIiwiY29uZmlnRGV2aWNlU2l6ZXMiLCJhIiwic2l6ZXMiLCJsYXlvdXQiLCJwZXJjZW50U2l6ZXMiLCJtIiwicGFyc2VJbnQiLCJzbWFsbGVzdFJhdGlvIiwiTWF0aCIsIndpZHRocyIsInMiLCJraW5kIiwidyIsInAiLCJzcmNTZXQiLCJnZXRXaWR0aHMiLCJsYXN0IiwiaSIsInNyYyIsImxvYWQiLCJyb290IiwiVkFMSURfTE9BREVSUyIsImNvbmZpZ0xvYWRlciIsInVub3B0aW1pemVkIiwicHJpb3JpdHkiLCJhbGwiLCJyZXN0IiwidW5zaXplZCIsIkJvb2xlYW4iLCJKU09OIiwiaXNMYXp5Iiwicm9vdE1hcmdpbiIsImRpc2FibGVkIiwiaXNWaXNpYmxlIiwid2lkdGhJbnQiLCJnZXRJbnQiLCJoZWlnaHRJbnQiLCJxdWFsaXR5SW50IiwiaW1nU3R5bGUiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJib3R0b20iLCJyaWdodCIsImJveFNpemluZyIsInBhZGRpbmciLCJib3JkZXIiLCJtYXJnaW4iLCJkaXNwbGF5IiwibWluV2lkdGgiLCJtYXhXaWR0aCIsIm1pbkhlaWdodCIsIm1heEhlaWdodCIsInF1b3RpZW50IiwicGFkZGluZ1RvcCIsImlzTmFOIiwid3JhcHBlclN0eWxlIiwic2l6ZXJTdHlsZSIsInNpemVyU3ZnIiwiaW1nQXR0cmlidXRlcyIsImdlbmVyYXRlSW1nQXR0cnMiLCJxdWFsaXR5IiwicGFyYW1zIiwicGFyYW1zU3RyaW5nIiwibm9ybWFsaXplU3JjIiwibWlzc2luZ1ZhbHVlcyIsInBhcnNlZFNyYyIsImNvbmZpZ0RvbWFpbnMiLCJob3N0bmFtZSIsImVuY29kZVVSSUNvbXBvbmVudCIsInByZWZldGNoZWQiLCJlcnIiLCJjdXJMb2NhbGUiLCJvcHRpb25zIiwiaHJlZiIsImV2ZW50IiwidGFyZ2V0IiwiZSIsIm5vZGVOYW1lIiwiaXNNb2RpZmllZEV2ZW50Iiwic2Nyb2xsIiwiYXMiLCJyZXBsYWNlIiwiYXJncyIsImtleSIsImV4cGVjdGVkIiwiYWN0dWFsIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsIk9iamVjdCIsInByb3BzIiwiY3JlYXRlUHJvcEVycm9yIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInNoYWxsb3ciLCJwYXNzSHJlZiIsInByZWZldGNoIiwibG9jYWxlIiwib3B0aW9uYWxQcm9wcyIsInZhbFR5cGUiLCJoYXNXYXJuZWQiLCJSZWFjdCIsInJlc29sdmVkQXMiLCJjaGlsZCIsIkNoaWxkcmVuIiwiY2hpbGRSZWYiLCJzZXRSZWYiLCJlbCIsInNldEludGVyc2VjdGlvblJlZiIsInNob3VsZFByZWZldGNoIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGRQcm9wcyIsInJlZiIsIm9uQ2xpY2siLCJsaW5rQ2xpY2tlZCIsImxvY2FsZURvbWFpbiIsIkxpbmsiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInJlcXVlc3RJZGxlQ2FsbGJhY2siLCJzZWxmIiwic3RhcnQiLCJEYXRlIiwic2V0VGltZW91dCIsImNiIiwiZGlkVGltZW91dCIsInRpbWVSZW1haW5pbmciLCJjYW5jZWxJZGxlQ2FsbGJhY2siLCJjbGVhclRpbWVvdXQiLCJNU19NQVhfSURMRV9ERUxBWSIsImVudHJ5IiwibWFwIiwiUHJvbWlzZSIsInByb20iLCJyZXNvbHZlIiwicmVzb2x2ZXIiLCJmdXR1cmUiLCJnZW5lcmF0b3IiLCJsaW5rIiwiZG9jdW1lbnQiLCJ3aW5kb3ciLCJjYW5QcmVmZXRjaCIsImhhc1ByZWZldGNoIiwicmVzIiwiQVNTRVRfTE9BRF9FUlJPUiIsIlN5bWJvbCIsInNjcmlwdCIsInJlamVjdCIsIm1hcmtBc3NldEVycm9yIiwiY2FuY2VsbGVkIiwiciIsIm9uQnVpbGRNYW5pZmVzdCIsInJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQiLCJzY3JpcHRzIiwiYXNzZXRQcmVmaXgiLCJlbmNvZGVVUkkiLCJjc3MiLCJnZXRDbGllbnRCdWlsZE1hbmlmZXN0IiwibWFuaWZlc3QiLCJyb3V0ZSIsImFsbEZpbGVzIiwidiIsImVudHJ5cG9pbnRzIiwibG9hZGVkU2NyaXB0cyIsInN0eWxlU2hlZXRzIiwicm91dGVzIiwiYXBwZW5kU2NyaXB0IiwiZmV0Y2giLCJ0ZXh0IiwiY29udGVudCIsIndoZW5FbnRyeXBvaW50Iiwid2l0aEZ1dHVyZSIsIm9uRW50cnlwb2ludCIsImZuIiwiZXhwb3J0cyIsImNvbXBvbmVudCIsImVycm9yIiwiaW5wdXQiLCJvbGQiLCJsb2FkUm91dGUiLCJnZXRGaWxlc0ZvclJvdXRlIiwiZW50cnlwb2ludCIsInN0eWxlcyIsImNuIiwibmF2aWdhdG9yIiwib3V0cHV0IiwicHJlZmV0Y2hWaWFEb20iLCJjcmVhdGVSb3V0ZUxvYWRlciIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJnZXQiLCJSb3V0ZXIiLCJmaWVsZCIsImdldFJvdXRlciIsImV2ZW50RmllbGQiLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsIl9yb3V0ZXIiLCJpbnN0YW5jZSIsIkFycmF5IiwiaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJpc0Rpc2FibGVkIiwidW5vYnNlcnZlIiwib2JzZXJ2ZSIsImlkbGVDYWxsYmFjayIsImNyZWF0ZU9ic2VydmVyIiwiZWxlbWVudHMiLCJvYnNlcnZlciIsIm9ic2VydmVycyIsImlkIiwiZW50cmllcyIsImNhbGxiYWNrIiwiQ29tcG9zZWRDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJXaXRoUm91dGVyV3JhcHBlciIsIm5hbWUiLCJwYXRobmFtZVBhcnRzIiwibG9jYWxlcyIsImRldGVjdGVkTG9jYWxlIiwib24iLCJvZmYiLCJlbWl0IiwiaGFuZGxlciIsImJhc2VQYXRoIiwicHJlZml4IiwicGF0aE5vUXVlcnlIYXNoIiwicXVlcnlJbmRleCIsImhhc2hJbmRleCIsImFkZFBhdGhQcmVmaXgiLCJ1cmwiLCJsb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwiaGFzQmFzZVBhdGgiLCJpbnRlcnBvbGF0ZWRSb3V0ZSIsImR5bmFtaWNSZWdleCIsImR5bmFtaWNHcm91cHMiLCJkeW5hbWljTWF0Y2hlcyIsImFzUGF0aG5hbWUiLCJwYXJhbSIsInJlcGxhY2VkIiwib3B0aW9uYWwiLCJzZWdtZW50IiwicmVzdWx0IiwiZmlsdGVyZWRRdWVyeSIsInF1ZXJ5IiwiYmFzZSIsInVybEFzU3RyaW5nIiwiaXNMb2NhbFVSTCIsInJlc29sdmVBcyIsImZpbmFsVXJsIiwiaW50ZXJwb2xhdGVkQXMiLCJpbnRlcnBvbGF0ZUFzIiwiaGFzaCIsIm9taXRQYXJtc0Zyb21RdWVyeSIsInJlc29sdmVkSHJlZiIsIm9yaWdpbiIsInJlc29sdmVIcmVmIiwiaHJlZkhhZE9yaWdpbiIsImFzSGFkT3JpZ2luIiwic3RyaXBPcmlnaW4iLCJwcmVwYXJlZFVybCIsImFkZEJhc2VQYXRoIiwicHJlcGFyZWRBcyIsImNsZWFuUGF0aG5hbWUiLCJwYWdlcyIsInBhZ2UiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsIlNTR19EQVRBX05PVF9GT1VORCIsImNyZWRlbnRpYWxzIiwiYXR0ZW1wdHMiLCJmZXRjaFJldHJ5IiwiZGF0YSIsIm5vdEZvdW5kIiwiaXNTZXJ2ZXJSZW5kZXIiLCJjb25zdHJ1Y3RvciIsImFzUGF0aCIsImNvbXBvbmVudHMiLCJzZGMiLCJzZHIiLCJzdWIiLCJjbGMiLCJwYWdlTG9hZGVyIiwiX2JwcyIsImV2ZW50cyIsIl93cmFwQXBwIiwiaXNTc3IiLCJpc0ZhbGxiYWNrIiwiX2luRmxpZ2h0Um91dGUiLCJfc2hhbGxvdyIsImRlZmF1bHRMb2NhbGUiLCJkb21haW5Mb2NhbGVzIiwiaXNSZWFkeSIsImlzUHJldmlldyIsImlzTG9jYWxlRG9tYWluIiwiX2lkeCIsInN0YXRlIiwiaW5pdGlhbCIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwiQ29tcG9uZW50IiwiYXV0b0V4cG9ydER5bmFtaWMiLCJyZWxvYWQiLCJiYWNrIiwicHJlcGFyZVVybEFzIiwibG9jYWxlQ2hhbmdlIiwiU1QiLCJwZXJmb3JtYW5jZSIsInJvdXRlUHJvcHMiLCJhZGRMb2NhbGUiLCJkZWxCYXNlUGF0aCIsImNsZWFuZWRBcyIsImRlbExvY2FsZSIsInBhcnNlZCIsIl9fcmV3cml0ZXMiLCJtZXRob2QiLCJyZXNvbHZlRHluYW1pY1JvdXRlIiwicGFyc2VkQXMiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsInNob3VsZEludGVycG9sYXRlIiwibWlzc2luZ1BhcmFtcyIsInJvdXRlSW5mbyIsImRlc3RpbmF0aW9uIiwicGFyc2VkSHJlZiIsIm5vdEZvdW5kUm91dGUiLCJhcHBDb21wIiwiaXNWYWxpZFNoYWxsb3dSb3V0ZSIsImZvcmNlZFNjcm9sbCIsImNoYW5nZVN0YXRlIiwiX19OIiwiaWR4IiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsImV4aXN0aW5nUm91dGVJbmZvIiwiY2FjaGVkUm91dGVJbmZvIiwicmVxdWlyZSIsImlzVmFsaWRFbGVtZW50VHlwZSIsImRhdGFIcmVmIiwiYmVmb3JlUG9wU3RhdGUiLCJvbmx5QUhhc2hDaGFuZ2UiLCJuZXdIYXNoIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNjcm9sbFRvSGFzaCIsImlkRWwiLCJuYW1lRWwiLCJ1cmxJc05ldyIsImlzU3NnIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwiX2dldERhdGEiLCJfZ2V0U3RhdGljRGF0YSIsImZldGNoTmV4dERhdGEiLCJfZ2V0U2VydmVyRGF0YSIsIkFwcFRyZWUiLCJjdHgiLCJhYm9ydENvbXBvbmVudExvYWQiLCJub3RpZnkiLCJzbGFzaGVkUHJvdG9jb2xzIiwicHJvdG9jb2wiLCJ1cmxPYmoiLCJob3N0IiwiU3RyaW5nIiwicXVlcnlzdHJpbmciLCJzZWFyY2giLCJURVNUX1JPVVRFIiwiZ2xvYmFsQmFzZSIsInJlc29sdmVkQmFzZSIsInNlYXJjaFBhcmFtcyIsIml0ZW0iLCJzdHJpbmdpZnlVcmxRdWVyeVBhcmFtIiwic2VhcmNoUGFyYW1zTGlzdCIsInJlIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50Iiwic2x1Z05hbWUiLCJnIiwiZ3JvdXBzIiwic3RyIiwic2VnbWVudHMiLCJub3JtYWxpemVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwicGFyc2VQYXJhbWV0ZXIiLCJwb3MiLCJlc2NhcGVSZWdleCIsInJvdXRlS2V5Q2hhckNvZGUiLCJyb3V0ZUtleUNoYXJMZW5ndGgiLCJnZXRTYWZlUm91dGVLZXkiLCJyb3V0ZUtleSIsInJvdXRlS2V5cyIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiY2xlYW5lZEtleSIsImludmFsaWRLZXkiLCJuYW1lZFJlZ2V4IiwidXNlZCIsInBvcnQiLCJnZXRMb2NhdGlvbk9yaWdpbiIsIkFwcCIsImdldERpc3BsYXlOYW1lIiwicGFnZVByb3BzIiwibG9hZEdldEluaXRpYWxQcm9wcyIsImlzUmVzU2VudCIsInVybE9iamVjdEtleXMiLCJTUCIsIlByb2plY3RQYWdlIiwicHJvamVjdHMiLCJzZWxlY3RlZFByb2plY3QiLCJzZXRTZWxlY3RlZFByb2plY3QiLCJjb250YWluZXJSZWYiLCJmaWx0ZXJlZEFycmF5IiwiZmlsdGVyIiwicHJvamVjdCIsIm9uQnVzaW5lc3NQbGFuQ3JlYXRlIiwiZGJDbGllbnQiLCJwYXRoTmFtZSIsInByb2plY3ROYW1lIiwidXBkYXRlIiwiaXNCdXNpbmVzc1BsYW5DcmVhdGVkIiwib25DYXNoRmxvd0FuYWx5c2lzQ3JlYXRlIiwicmV2ZW51ZUVsZW1lbnRzIiwiY29zdHNFbGVtZW50cyIsImJ1ZGdldEVsZW1lbnRzIiwiZ2xvYmFsU3RhcnREYXRlIiwiZ2xvYmFsRW5kRGF0ZSIsInBlcmlvZHMiLCJ0YXgiLCJpc0Nhc2hmbG93Q3JlYXRlZCIsIm9uQ29tcGV0aXRvcnNBbmFseXNpc0NyZWF0ZSIsImNvbXBldGl0b3JzQXJyYXkiLCJpc0NvbXBldGl0b3JzQW5hbHlzaXNDcmVhdGVkIiwiZ2V0U3RhdGljUGF0aHMiLCJzbmFwc2hvdCIsImZvckVhY2giLCJwYXRocyIsInRvU3RyaW5nIiwiZmFsbGJhY2siLCJnZXRTdGF0aWNQcm9wcyIsIndoZXJlIiwicmV2YWxpZGF0ZSIsIndpbmRvd1NpemUiLCJzZXRXaW5kb3dTaXplIiwidW5kZWZpbmVkIiwiaGFuZGxlUmVzaXplIiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ3hGQSw4RDs7Ozs7Ozs7Ozs7QUNBQSx3RTs7Ozs7Ozs7Ozs7QUNBQSxnRzs7Ozs7Ozs7Ozs7QUNBQSxvRTs7Ozs7Ozs7Ozs7QUNBQSx5RTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFTyxNQUFNQSxlQUFlLGdCQUFHQywyREFBYSxFQUFyQzs7QUFFUCxNQUFNQyxhQUFhLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBa0I7QUFDdEMs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cm9qZWN0XS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvZGFzaGJvYXJkL3Byb2plY3RzL1twcm9qZWN0XS9pbmRleC5qc1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvaW1hZ2UtY29uZmlnLmpzXCIpOyIsImltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZVN0YXRlLCBjcmVhdGVDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBnc2FwLCB7IFBvd2VyMSwgUG93ZXI0IH0gZnJvbSAnZ3NhcCc7XHJcblxyXG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gJ25leHQtdGhlbWVzJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSAnLi4vLi4vbGliL25ld0F1dGgnO1xyXG5cclxuZXhwb3J0IGNvbnN0IElzQWN0aXZlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmNvbnN0IERlc2t0b3BOYXZiYXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgeyBsb2dPdXQgfSA9IHVzZUF1dGgoKTtcclxuXHJcbiAgY29uc3QgeyB0aGVtZSwgc2V0VGhlbWUgfSA9IHVzZVRoZW1lKCk7XHJcbiAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBuYXZSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IG1hblJlZiA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCB0bCA9IGdzYXAudGltZWxpbmUoeyByZXBlYXQ6IC0xLCB5b3lvOiB0cnVlIH0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgdGwudG8obWFuUmVmLmN1cnJlbnQsIHtcclxuICAgICAgZHVyYXRpb246IDMsXHJcbiAgICAgIHk6IDI1MCxcclxuICAgICAgeDogMTc1LFxyXG4gICAgICBlYXNlOiBQb3dlcjEuZWFzZUluT3V0LFxyXG4gICAgfSlcclxuICAgICAgLnRvKG1hblJlZi5jdXJyZW50LCB7XHJcbiAgICAgICAgZHVyYXRpb246IDMsXHJcbiAgICAgICAgeTogNTAwLFxyXG4gICAgICAgIHg6IDM1MCxcclxuICAgICAgICBlYXNlOiBQb3dlcjEuZWFzZUluT3V0LFxyXG4gICAgICB9KVxyXG4gICAgICAudG8obWFuUmVmLmN1cnJlbnQsIHtcclxuICAgICAgICBkdXJhdGlvbjogMyxcclxuICAgICAgICB5OiAyNTAsXHJcbiAgICAgICAgeDogMTc1LFxyXG4gICAgICAgIGVhc2U6IFBvd2VyMS5lYXNlSW5PdXQsXHJcbiAgICAgIH0pXHJcbiAgICAgIC50byhtYW5SZWYuY3VycmVudCwgeyBkdXJhdGlvbjogMywgeTogMCwgeDogMCwgZWFzZTogUG93ZXIxLmVhc2VJbk91dCB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IFthY3RpdmVDbGFzczEsIHNldEFjdGl2ZUNsYXNzMV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2FjdGl2ZUNsYXNzMiwgc2V0QWN0aXZlQ2xhc3MyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbYWN0aXZlQ2xhc3MzLCBzZXRBY3RpdmVDbGFzczNdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFthY3RpdmVDbGFzczQsIHNldEFjdGl2ZUNsYXNzNF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2FjdGl2ZUNsYXNzNSwgc2V0QWN0aXZlQ2xhc3M1XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgW2FjdGl2ZUhvdmVyMSwgc2V0QWN0aXZlSG92ZXIxXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbYWN0aXZlSG92ZXIyLCBzZXRBY3RpdmVIb3ZlcjJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFthY3RpdmVIb3ZlcjMsIHNldEFjdGl2ZUhvdmVyM10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2FjdGl2ZUhvdmVyNCwgc2V0QWN0aXZlSG92ZXI0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbYWN0aXZlSG92ZXI1LCBzZXRBY3RpdmVIb3ZlcjVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHJvdXRlci5wYXRobmFtZS5pbmNsdWRlcygnd2VsY29tZScpKSB7XHJcbiAgICAgIHNldEFjdGl2ZUNsYXNzMSh0cnVlKTtcclxuICAgIH0gZWxzZSBpZiAocm91dGVyLnBhdGhuYW1lLmluY2x1ZGVzKCdzdGFydHVwJykpIHtcclxuICAgICAgc2V0QWN0aXZlQ2xhc3MyKHRydWUpO1xyXG4gICAgfSBlbHNlIGlmIChyb3V0ZXIucGF0aG5hbWUuaW5jbHVkZXMoJ2J1c2luZXNzJykpIHtcclxuICAgICAgLy8gVGVnbyByb3V0ZXInYSBqZXN6Y3plIG5pZSBtYVxyXG4gICAgICBzZXRBY3RpdmVDbGFzczModHJ1ZSk7XHJcbiAgICB9IGVsc2UgaWYgKHJvdXRlci5wYXRobmFtZS5pbmNsdWRlcygnYWNjb3VudCcpKSB7XHJcbiAgICAgIC8vIFRlZ28gcm91dGVyJ2EgamVzemN6ZSBuaWUgbWFcclxuICAgICAgc2V0QWN0aXZlQ2xhc3M0KHRydWUpO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgYWN0aXZlQ2xhc3NGbjEgPSAoKSA9PiB7XHJcbiAgICBzZXRBY3RpdmVDbGFzczEodHJ1ZSk7XHJcbiAgICBzZXRBY3RpdmVDbGFzczIoZmFsc2UpO1xyXG4gICAgc2V0QWN0aXZlQ2xhc3MzKGZhbHNlKTtcclxuICAgIHNldEFjdGl2ZUNsYXNzNChmYWxzZSk7XHJcbiAgICBzZXRBY3RpdmVDbGFzczUoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGFjdGl2ZUNsYXNzRm4yID0gKCkgPT4ge1xyXG4gICAgc2V0QWN0aXZlQ2xhc3MxKGZhbHNlKTtcclxuICAgIHNldEFjdGl2ZUNsYXNzMih0cnVlKTtcclxuICAgIHNldEFjdGl2ZUNsYXNzMyhmYWxzZSk7XHJcbiAgICBzZXRBY3RpdmVDbGFzczQoZmFsc2UpO1xyXG4gICAgc2V0QWN0aXZlQ2xhc3M1KGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBhY3RpdmVDbGFzc0ZuMyA9ICgpID0+IHtcclxuICAgIHNldEFjdGl2ZUNsYXNzMShmYWxzZSk7XHJcbiAgICBzZXRBY3RpdmVDbGFzczIoZmFsc2UpO1xyXG4gICAgc2V0QWN0aXZlQ2xhc3MzKHRydWUpO1xyXG4gICAgc2V0QWN0aXZlQ2xhc3M0KGZhbHNlKTtcclxuICAgIHNldEFjdGl2ZUNsYXNzNShmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYWN0aXZlQ2xhc3NGbjQgPSAoKSA9PiB7XHJcbiAgICBzZXRBY3RpdmVDbGFzczEoZmFsc2UpO1xyXG4gICAgc2V0QWN0aXZlQ2xhc3MyKGZhbHNlKTtcclxuICAgIHNldEFjdGl2ZUNsYXNzMyhmYWxzZSk7XHJcbiAgICBzZXRBY3RpdmVDbGFzczQodHJ1ZSk7XHJcbiAgICBzZXRBY3RpdmVDbGFzczUoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGFjdGl2ZUNsYXNzRm41ID0gKCkgPT4ge1xyXG4gICAgc2V0QWN0aXZlQ2xhc3MxKGZhbHNlKTtcclxuICAgIHNldEFjdGl2ZUNsYXNzMihmYWxzZSk7XHJcbiAgICBzZXRBY3RpdmVDbGFzczMoZmFsc2UpO1xyXG4gICAgc2V0QWN0aXZlQ2xhc3M0KGZhbHNlKTtcclxuICAgIHNldEFjdGl2ZUNsYXNzNSh0cnVlKTtcclxuICAgIGxvZ091dCgpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG1vdXNlRW50ZXJOYXYgPSAoKSA9PiB7XHJcbiAgICBzZXRBY3RpdmUodHJ1ZSk7XHJcblxyXG4gICAgZ3NhcC50byhuYXZSZWYuY3VycmVudCwge1xyXG4gICAgICB3aWR0aDogJzIwOHB4JyxcclxuICAgICAgZWFzZTogUG93ZXI0LmVhc2VPdXQsXHJcbiAgICAgIGR1cmF0aW9uOiAxLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbW91c2VMZWF2ZU5hdiA9ICgpID0+IHtcclxuICAgIHNldEFjdGl2ZShmYWxzZSk7XHJcblxyXG4gICAgZ3NhcC50byhuYXZSZWYuY3VycmVudCwgeyB3aWR0aDogJzgwcHgnLCBlYXNlOiBQb3dlcjQuZWFzZU91dCB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPElzQWN0aXZlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17YWN0aXZlfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCByaWdodC0wIHotNTBcIiBzdHlsZT17eyBvdmVyZmxvdzogJ3Vuc2V0JywgaGVpZ2h0OiAnZml0LWNvbnRlbnQnIH19PlxyXG4gICAgICAgIDxzdmdcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFRoZW1lKHRoZW1lID09PSAnZGFyaycgPyAnbGlnaHQnIDogJ2RhcmsnKX1cclxuICAgICAgICAgIHdpZHRoPVwiMTAwXCJcclxuICAgICAgICAgIGhlaWdodD1cIjEwMFwiXHJcbiAgICAgICAgICBzdHlsZT17eyBvdmVyZmxvdzogJ3Vuc2V0JywgY3Vyc29yOiAncG9pbnRlcicgfX1cclxuICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNzcwIDc3MlwiXHJcbiAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8Zz5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICBkPVwiTTc2OS4wMDEgMEgzMTAuMjg2QzMwNi43NjIgMjEuNDg3MSAzMDQuOTk0IDQzLjIyNTcgMzA1LjAwMSA2NUMzMDUuMDAxIDI4NC44MDkgNDgzLjE5MiA0NjMgNzAzLjAwMSA0NjNDNzI1LjExNCA0NjMuMDA4IDc0Ny4xOSA0NjEuMTg1IDc2OS4wMDEgNDU3LjU1VjBaXCJcclxuICAgICAgICAgICAgICBmaWxsPVwiIzBBMTIzMFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgZD1cIk01NzQuODQ5IDI0OC44MDlDNTY3Ljk2NSAyNDguODE1IDU2MS4xMzUgMjQ3LjU4MiA1NTQuNjg3IDI0NS4xN0M1NTQuMzE4IDI0NS4wMzIgNTUzLjk4IDI0NC44MjIgNTUzLjY5MiAyNDQuNTUzQzU1My40MDQgMjQ0LjI4NCA1NTMuMTcyIDI0My45NjEgNTUzLjAwOSAyNDMuNjAzQzU1Mi44NDYgMjQzLjI0NCA1NTIuNzU1IDI0Mi44NTcgNTUyLjc0MiAyNDIuNDYzQzU1Mi43MjggMjQyLjA3IDU1Mi43OTIgMjQxLjY3NyA1NTIuOTMxIDI0MS4zMDhDNTUzLjA2OSAyNDAuOTM5IDU1My4yNzggMjQwLjYwMSA1NTMuNTQ3IDI0MC4zMTNDNTUzLjgxNiAyNDAuMDI1IDU1NC4xMzkgMjM5Ljc5MyA1NTQuNDk4IDIzOS42M0M1NTQuODU2IDIzOS40NjcgNTU1LjI0NCAyMzkuMzc2IDU1NS42MzcgMjM5LjM2M0M1NTYuMDMxIDIzOS4zNDkgNTU2LjQyNCAyMzkuNDE0IDU1Ni43OTIgMjM5LjU1MkM1NjUuMzQxIDI0Mi43MTEgNTc0LjU2NiAyNDMuNTg2IDU4My41NTcgMjQyLjA5QzU5Mi41NDcgMjQwLjU5NCA2MDAuOTkxIDIzNi43NzkgNjA4LjA1NiAyMzEuMDIxQzU4Ni4wMTggMjMxLjI1NSA1NjQuNDYxIDIyMC44NCA1NTMuNzM3IDIwNC4xMjhDNTQ2Ljg0MiAxOTMuMzg1IDU0NC41ODggMTgwLjc0NCA1NDcuMjE2IDE2Ny41N0M1NDkuMjI5IDE1OC4wMTcgNTUzLjM2IDE0OS4wMzcgNTU5LjMwNSAxNDEuMjkzQzU0Ny45NTQgMTQ0LjkwNSA1MzguMTg0IDE1Mi4zMDIgNTMxLjYyOCAxNjIuMjQ4QzUyNS4wNzIgMTcyLjE5MyA1MjIuMTI2IDE4NC4wODcgNTIzLjI4MiAxOTUuOTQzQzUyMy4zMjIgMTk2LjMzNiA1MjMuMjg0IDE5Ni43MzMgNTIzLjE3MSAxOTcuMTExQzUyMy4wNTcgMTk3LjQ4OSA1MjIuODcxIDE5Ny44NDEgNTIyLjYyMSAxOTguMTQ3QzUyMi4zNzEgMTk4LjQ1MyA1MjIuMDYzIDE5OC43MDYgNTIxLjcxNSAxOTguODkzQzUyMS4zNjcgMTk5LjA4IDUyMC45ODYgMTk5LjE5NiA1MjAuNTkzIDE5OS4yMzVDNTIwLjIgMTk5LjI3NCA1MTkuODA0IDE5OS4yMzUgNTE5LjQyNiAxOTkuMTJDNTE5LjA0OCAxOTkuMDA1IDUxOC42OTcgMTk4LjgxNyA1MTguMzkyIDE5OC41NjZDNTE4LjA4NyAxOTguMzE2IDUxNy44MzQgMTk4LjAwNyA1MTcuNjQ5IDE5Ny42NThDNTE3LjQ2MyAxOTcuMzEgNTE3LjM0OSAxOTYuOTI4IDUxNy4zMTEgMTk2LjUzNUM1MTUuODU0IDE4MS42MTkgNTIwLjIyMyAxNjYuNzE2IDUyOS41MDQgMTU0Ljk0OEM1MzguNzg0IDE0My4xOCA1NTIuMjU4IDEzNS40NTcgNTY3LjEwMyAxMzMuMzk3QzU2Ny43MjQgMTMzLjMxMSA1NjguMzU2IDEzMy40MjEgNTY4LjkxMSAxMzMuNzEzQzU2OS40NjYgMTM0LjAwNCA1NjkuOTE1IDEzNC40NjIgNTcwLjE5NyAxMzUuMDIxQzU3MC40NzggMTM1LjU4MSA1NzAuNTc3IDEzNi4yMTUgNTcwLjQ4IDEzNi44MzVDNTcwLjM4MiAxMzcuNDU0IDU3MC4wOTQgMTM4LjAyNyA1NjkuNjU0IDEzOC40NzNDNTU0LjMxIDE1NC4wNTkgNTQ0Ljk5OSAxNzkuNDAyIDU1OC43ODYgMjAwLjg4OEM1NjkuNjY0IDIxNy44MzcgNTkzLjA2OSAyMjcuNTMyIDYxNS43MTQgMjI0LjQ2OEM2MTYuMzIyIDIyNC4zODYgNjE2Ljk0IDIyNC40OTEgNjE3LjQ4NSAyMjQuNzcxQzYxOC4wMzEgMjI1LjA1MSA2MTguNDc4IDIyNS40OTEgNjE4Ljc2NSAyMjYuMDMyQzYxOS4wNTMgMjI2LjU3NCA2MTkuMTY4IDIyNy4xOSA2MTkuMDk1IDIyNy43OTlDNjE5LjAyMiAyMjguNDA3IDYxOC43NjQgMjI4Ljk3OSA2MTguMzU2IDIyOS40MzZDNjEyLjg3MyAyMzUuNTQyIDYwNi4xNjQgMjQwLjQyMiA1OTguNjY3IDI0My43NkM1OTEuMTcxIDI0Ny4wOTggNTgzLjA1NSAyNDguODE4IDU3NC44NDkgMjQ4LjgwOVYyNDguODA5WlwiXHJcbiAgICAgICAgICAgICAgZmlsbD1cIiM2QzYzRkZcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgIGQ9XCJNNTI3LjAwMSAyNTBDNTIyLjY1IDI1MCA1MTguMzk3IDI0OC43MSA1MTQuNzc5IDI0Ni4yOTJDNTExLjE2MSAyNDMuODc1IDUwOC4zNDEgMjQwLjQzOSA1MDYuNjc2IDIzNi40MTlDNTA1LjAxMSAyMzIuMzk5IDUwNC41NzUgMjI3Ljk3NiA1MDUuNDI0IDIyMy43MDhDNTA2LjI3MyAyMTkuNDQgNTA4LjM2OCAyMTUuNTIgNTExLjQ0NSAyMTIuNDQ0QzUxNC41MjIgMjA5LjM2NyA1MTguNDQyIDIwNy4yNzIgNTIyLjcwOSAyMDYuNDIzQzUyNi45NzcgMjA1LjU3NCA1MzEuNDAxIDIwNi4wMSA1MzUuNDIxIDIwNy42NzVDNTM5LjQ0MSAyMDkuMzQgNTQyLjg3NiAyMTIuMTYgNTQ1LjI5NCAyMTUuNzc3QzU0Ny43MTEgMjE5LjM5NSA1NDkuMDAxIDIyMy42NDkgNTQ5LjAwMSAyMjhDNTQ4Ljk5NSAyMzMuODMzIDU0Ni42NzUgMjM5LjQyNSA1NDIuNTUxIDI0My41NDlDNTM4LjQyNiAyNDcuNjczIDUzMi44MzQgMjQ5Ljk5MyA1MjcuMDAxIDI1MFYyNTBaTTUyNy4wMDEgMjEyQzUyMy44MzcgMjEyIDUyMC43NDQgMjEyLjkzOCA1MTguMTEyIDIxNC42OTdDNTE1LjQ4MSAyMTYuNDU1IDUxMy40MyAyMTguOTUzIDUxMi4yMTkgMjIxLjg3N0M1MTEuMDA4IDIyNC44MDEgNTEwLjY5MiAyMjguMDE4IDUxMS4zMDkgMjMxLjEyMUM1MTEuOTI2IDIzNC4yMjUgNTEzLjQ1IDIzNy4wNzYgNTE1LjY4OCAyMzkuMzE0QzUxNy45MjUgMjQxLjU1MSA1MjAuNzc2IDI0My4wNzUgNTIzLjg4IDI0My42OTNDNTI2Ljk4NCAyNDQuMzEgNTMwLjIwMSAyNDMuOTkzIDUzMy4xMjQgMjQyLjc4MkM1MzYuMDQ4IDI0MS41NzEgNTM4LjU0NyAyMzkuNTIgNTQwLjMwNSAyMzYuODg5QzU0Mi4wNjMgMjM0LjI1OCA1NDMuMDAxIDIzMS4xNjUgNTQzLjAwMSAyMjhDNTQyLjk5NyAyMjMuNzU4IDU0MS4zMDkgMjE5LjY5MSA1MzguMzEgMjE2LjY5MkM1MzUuMzEgMjEzLjY5MiA1MzEuMjQzIDIxMi4wMDUgNTI3LjAwMSAyMTJWMjEyWlwiXHJcbiAgICAgICAgICAgICAgZmlsbD1cIiM2QzYzRkZcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8ZyByZWY9e21hblJlZn0+XHJcbiAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIGQ9XCJNOC42OTA3NCA1NjcuMDc4QzcuMjQ1NDYgNTY2Ljg1MyA1Ljg2NTA0IDU2Ni4zMjEgNC42NDE4MiA1NjUuNTE4QzMuNDE4NiA1NjQuNzE2IDIuMzgwNzcgNTYzLjY2MiAxLjU5NzcxIDU2Mi40MjdDMC44MTQ2NTIgNTYxLjE5MSAwLjMwNDQyMyA1NTkuODAyIDAuMTAxMTU3IDU1OC4zNTRDLTAuMTAyMTA5IDU1Ni45MDUgMC4wMDYyNzUxMiA1NTUuNDMgMC40MTkwNDQgNTU0LjAyNkw4LjIwNzM3IDUyNy41NDZMMjAuMDQyIDUyOS43NjVMMjAuNTUwOCA1NTYuNzMyQzIwLjU3OTEgNTU4LjIzMiAyMC4yNzg4IDU1OS43MTkgMTkuNjcwOSA1NjEuMDkxQzE5LjA2MyA1NjIuNDYyIDE4LjE2MjMgNTYzLjY4MyAxNy4wMzIgNTY0LjY2OUMxNS45MDE3IDU2NS42NTUgMTQuNTY5MyA1NjYuMzgyIDEzLjEyODMgNTY2Ljc5OEMxMS42ODczIDU2Ny4yMTQgMTAuMTcyNyA1NjcuMzEgOC42OTA3NCA1NjcuMDc4VjU2Ny4wNzhaXCJcclxuICAgICAgICAgICAgICAgIGZpbGw9XCIjOUY2MTZBXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICBkPVwiTTc2Ljk5NiA3MzYuMTMyTDYyLjIwMyA3MzMuOTEzTDY1LjkwMSA1ODkuNjc4TDQ1LjE5MSA2NTEuODFMMzQuMDk2IDczOS4wOTFMMjAuMDQyIDczNS4zOTNMMTcuMDgzIDY0NC40MTRMMzMuMzU2IDUzNy4xNjJMMTE0LjcxOSA1NTUuNjU0TDc2Ljk5NiA3MzYuMTMyWlwiXHJcbiAgICAgICAgICAgICAgICBmaWxsPVwiIzBBMTIzMFwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgZD1cIk03MC4yMDQ2IDc3MS42MzZDNjcuMzIwOSA3NzEuNjM2IDY0LjU1NTMgNzcwLjQ5MSA2Mi41MTYzIDc2OC40NTJDNjAuNDc3MiA3NjYuNDEzIDU5LjMzMTcgNzYzLjY0NyA1OS4zMzE3IDc2MC43NjNDNTkuMzMxNyA3NjAuNDA4IDU5LjM0OTEgNzYwLjA1MyA1OS4zODM5IDc1OS42OTlMNjEuNjgxMSA3MzYuMzQ1QzYxLjczNjUgNzM1Ljc4NyA2MS45MjgxIDczNS4yNTEgNjIuMjM5MSA3MzQuNzg0QzYyLjU1MDEgNzM0LjMxNyA2Mi45NzA5IDczMy45MzMgNjMuNDY0NyA3MzMuNjY3QzY3LjgyNTQgNzMxLjMxNSA3Mi4zMDk2IDczMS44ODUgNzYuODk5NCA3MzQuOTU1Qzc3LjMwNjYgNzM1LjIyOSA3Ny42NDk3IDczNS41ODggNzcuOTA1MiA3MzYuMDA3Qzc4LjE2MDcgNzM2LjQyNyA3OC4zMjI2IDczNi44OTYgNzguMzc5OSA3MzcuMzg0TDgxLjAwMTcgNzU5LjQ4MkM4MS4xODI3IDc2MS4wMDggODEuMDM4NSA3NjIuNTU0IDgwLjU3ODUgNzY0LjAyQzgwLjExODUgNzY1LjQ4NSA3OS4zNTMzIDc2Ni44MzYgNzguMzMzMiA3NjcuOTg1Qzc3LjMxMzEgNzY5LjEzMyA3Ni4wNjEzIDc3MC4wNTIgNzQuNjYwMiA3NzAuNjgyQzczLjI1OTEgNzcxLjMxMSA3MS43NDA2IDc3MS42MzYgNzAuMjA0NiA3NzEuNjM2SDcwLjIwNDZaXCJcclxuICAgICAgICAgICAgICAgIGZpbGw9XCIjMEExMjMwXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICBkPVwiTTkuODIwODQgNzY5Ljg5OEM4LjQyNjc1IDc2OS4zODcgNy4xNjcxNCA3NjguNTY1IDYuMTM3MjYgNzY3LjQ5NkM1LjEwNzM4IDc2Ni40MjYgNC4zMzQxOSA3NjUuMTM2IDMuODc2MTYgNzYzLjcyNEMzLjQxODE0IDc2Mi4zMTEgMy4yODcyNyA3NjAuODEzIDMuNDkzNDQgNzU5LjM0M0MzLjY5OTYyIDc1Ny44NzIgNC4yMzc0NSA3NTYuNDY4IDUuMDY2MjYgNzU1LjIzNkwyMC44NDYzIDczMS43NzlDMjYuNTM0OCA3MjcuNjk3IDI5Ljk2NTcgNzI5LjY4NSAzMS4yOTk1IDczNy4zMTNMMzQuNDg5OCA3MjkuMzJMMzYuODkzNiA3MzEuOTQyQzM4LjExMzMgNzMzLjI3MyAzOC44MjMgNzM0Ljk5MiAzOC44OTcxIDczNi43OTVDMzguOTcxMiA3MzguNTk5IDM4LjQwNDkgNzQwLjM3IDM3LjI5ODQgNzQxLjc5NkwyMC45MzA0IDc2Ni43MDZDMTkuNjU2NyA3NjguMzQ4IDE3Ljg5MzggNzY5LjU0MiAxNS44OTY3IDc3MC4xMTZDMTMuODk5NiA3NzAuNjg5IDExLjc3MTcgNzcwLjYxMyA5LjgyMDg0IDc2OS44OThWNzY5Ljg5OFpcIlxyXG4gICAgICAgICAgICAgICAgZmlsbD1cIiMwQTEyMzBcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIGQ9XCJNMTA5LjU0MiAzOTguMTA1QzEyMS43OTcgMzk4LjEwNSAxMzEuNzMyIDM4OC4xNyAxMzEuNzMyIDM3NS45MTVDMTMxLjczMiAzNjMuNjU5IDEyMS43OTcgMzUzLjcyNSAxMDkuNTQyIDM1My43MjVDOTcuMjg2NSAzNTMuNzI1IDg3LjM1MTcgMzYzLjY1OSA4Ny4zNTE3IDM3NS45MTVDODcuMzUxNyAzODguMTcgOTcuMjg2NSAzOTguMTA1IDEwOS41NDIgMzk4LjEwNVpcIlxyXG4gICAgICAgICAgICAgICAgZmlsbD1cIiM5RjYxNkFcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIGQ9XCJNMTIzLjU5NSA0MTYuNTk2TDg1Ljg3MjMgNDA5LjJDOTAuNzMxMyAzOTguODM2IDk0LjYyMjUgMzk1LjMzIDkwLjMxMDMgMzg0LjA1MUgxMjAuNjM3QzExNy45NjIgMzk1LjczMyAxMjAuNTQ3IDQwNi42OTggMTIzLjU5NSA0MTYuNTk2WlwiXHJcbiAgICAgICAgICAgICAgICBmaWxsPVwiIzlGNjE2QVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgZD1cIk0xMTkuMTU3IDU2Ni4wMDlMMzAuMzk3MyA1NDAuODZDNDguMTc2MSA1MDEuNzMxIDUxLjkgNDU4Ljc2OSA0Ni42Mjg3IDQxMy4zNTZDNDYuNTAzNCA0MTIuMjg1IDQ2LjU5MDQgNDExLjE5OSA0Ni44ODQ3IDQxMC4xNkM0Ny4xNzkxIDQwOS4xMjIgNDcuNjc1MSA0MDguMTUyIDQ4LjM0NDMgNDA3LjMwNkM0OS4wMTM1IDQwNi40NTkgNDkuODQzIDQwNS43NTMgNTAuNzg1MiA0MDUuMjI3QzUxLjcyNzUgNDA0LjcwMSA1Mi43NjQxIDQwNC4zNjYgNTMuODM1OSA0MDQuMjRDNTMuOTM1NyA0MDQuMjI5IDU0LjAzNTYgNDA0LjIxOSA1NC4xMzU4IDQwNC4yMTFDNjUuNzEzNyA0MDMuMjU3IDc3Ljc4NDQgNDAyLjAzMyA5MC4zMTA0IDQwMC4zMjRMMTA0LjM2NCA0MDkuOTM5TDEyMC42MzcgNDA2LjI0MUMxMjUuODU4IDQwOC43NzIgMTMxLjExOCA0MTAuODc3IDEzNS44NjQgNDEyLjk3NUMxNDAuMTkxIDQxNC44OTMgMTQzLjY0OSA0MTguMzU0IDE0NS41NjMgNDIyLjY4M0MxNDcuNDc2IDQyNy4wMTIgMTQ3LjcwOSA0MzEuODk4IDE0Ni4yMTUgNDM2LjM4OUMxMzEuNzUyIDQ4MC4wNjYgMTIyLjA3MSA1MjMuMzI5IDExOS4xNTcgNTY2LjAwOVpcIlxyXG4gICAgICAgICAgICAgICAgZmlsbD1cIiNFNkU2RTZcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIGQ9XCJNMjIuMjYxIDUzMi43MjRMNS4yNDg2NiA1MzAuNTA1TDQ1LjU1MDggNDE0LjM4QzQ3LjYwMDggNDA4LjQ3MyA1Mi42ODQ4IDQwNS4yNzYgNTguODc0NSA0MDQuMzkyTDY0Ljc5MTggNDA1LjEzMUw2MC4zNTM4IDQ3My45MkwyMi4yNjEgNTMyLjcyNFpcIlxyXG4gICAgICAgICAgICAgICAgZmlsbD1cIiNFNkU2RTZcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIGQ9XCJNMTU1LjUyNSA1MTAuNTI0QzE1Mi42OTIgNTEwLjc0MiAxNDkuODYzIDUxMC4wNiAxNDcuNDQxIDUwOC41NzRDMTQ1LjAxOSA1MDcuMDg5IDE0My4xMjggNTA0Ljg3NyAxNDIuMDM4IDUwMi4yNTNMMTI1LjgxNCA0NjMuMTk1TDEzOS4xMjggNDE1LjExN0wxNDIuNjQ4IDQxNy4zNTdDMTQyLjk4NyA0MTcuNTcyIDE0My4zMjIgNDE3Ljc5NCAxNDMuNjUyIDQxOC4wMkMxNDguNTkzIDQyMS40ODEgMTUyLjQ0MiA0MjYuMjgzIDE1NC43NDYgNDMxLjg1OEMxNTcuMDQ5IDQzNy40MzQgMTU3LjcxMSA0NDMuNTUyIDE1Ni42NTQgNDQ5LjQ5MUwxNTMuMTgyIDQ2OS44NTJMMTY3LjUwNSA1MDAuNjA1QzE2Ni43NzcgNTAzLjI5NCAxNjUuMjM1IDUwNS42OSAxNjMuMDg5IDUwNy40NjZDMTYwLjk0NCA1MDkuMjQzIDE1OC4zMDIgNTEwLjMxMSAxNTUuNTI1IDUxMC41MjRWNTEwLjUyNFpcIlxyXG4gICAgICAgICAgICAgICAgZmlsbD1cIiNFNkU2RTZcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIGQ9XCJNMTExLjI0OCAzNDMuMDI3QzExNS4wNCAzNDMuMjAxIDExOC43MzMgMzQ0LjI4OCAxMjIuMDE0IDM0Ni4xOTZDMTIyLjc2OSAzNDYuNjM2IDEyMi40MiAzNDguMjE5IDEyMy4xMTcgMzQ4LjczNkMxMjMuOTk1IDM0OS4zODYgMTI1LjkwMiAzNDguOTkxIDEyNi42OCAzNDkuNzUzQzEyOS4xOSAzNTIuMjAzIDEzMS4xMjMgMzU1LjE4MiAxMzIuMzM4IDM1OC40NzRDMTMzLjU1MiAzNjEuNzY1IDEzNC4wMTggMzY1LjI4NSAxMzMuNzAyIDM2OC43NzlMMTMyLjQ2NCAzODEuMDlMMTI5LjU0MyAzNzcuODk2QzEyNC4zMDYgMzcyLjA4OSAxMTcuMDM1IDM2OC41MTkgMTA5LjIzOCAzNjcuOTI3QzEwOC45MDYgMzY3LjkwNCAxMDguNTc0IDM2Ny44ODcgMTA4LjI0MiAzNjcuODc0TDExMC40ODkgMzYzLjk0MUwxMDYuNTg0IDM2Ny44NDdDMTA0LjgwMiAzNjcuODY2IDEwMy4wMjQgMzY4LjAxMSAxMDEuMjYzIDM2OC4yOEwxMDQuMjUxIDM2My4wNUw5OC41MTcxIDM2OC43ODRMOTguNTE2NiAzNjguNzg1Qzk2LjE3MTYgMzY5LjMgOTMuOTgwNSAzNzAuMzYgOTIuMTE5OCAzNzEuODc3QzkwLjI1OTEgMzczLjM5NSA4OC43ODA4IDM3NS4zMjggODcuODA0MiAzNzcuNTIyTDg3LjE2NzUgMzc4LjkzM0w4Ni40NTQyIDM2Ny4xODhDODYuMzE3NyAzNjAuOTExIDg4LjY4MDUgMzU0LjgzNyA5My4wMjI2IDM1MC4zMDJDOTcuMzY0NyAzNDUuNzY3IDEwMy4zMzEgMzQzLjE0MiAxMDkuNjA4IDM0My4wMDZDMTEwLjE1NSAzNDIuOTk0IDExMC43MDIgMzQzLjAwMSAxMTEuMjQ4IDM0My4wMjdaXCJcclxuICAgICAgICAgICAgICAgIGZpbGw9XCIjMkYyRTQxXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICBkPVwiTTEzMS44NzcgMzg0LjQzOEMxMzIuODYxIDM4NC40MzggMTMzLjY1OSAzODIuNTQzIDEzMy42NTkgMzgwLjIwNUMxMzMuNjU5IDM3Ny44NjcgMTMyLjg2MSAzNzUuOTcyIDEzMS44NzcgMzc1Ljk3MkMxMzAuODkyIDM3NS45NzIgMTMwLjA5NCAzNzcuODY3IDEzMC4wOTQgMzgwLjIwNUMxMzAuMDk0IDM4Mi41NDMgMTMwLjg5MiAzODQuNDM4IDEzMS44NzcgMzg0LjQzOFpcIlxyXG4gICAgICAgICAgICAgICAgZmlsbD1cIiM5RjYxNkFcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIGQ9XCJNODcuMzE5NSAzODMuMTAxQzg4LjMwMzggMzgzLjEwMSA4OS4xMDE3IDM4MS4yMDYgODkuMTAxNyAzNzguODY4Qzg5LjEwMTcgMzc2LjUzIDg4LjMwMzggMzc0LjYzNSA4Ny4zMTk1IDM3NC42MzVDODYuMzM1MSAzNzQuNjM1IDg1LjUzNzIgMzc2LjUzIDg1LjUzNzIgMzc4Ljg2OEM4NS41MzcyIDM4MS4yMDYgODYuMzM1MSAzODMuMTAxIDg3LjMxOTUgMzgzLjEwMVpcIlxyXG4gICAgICAgICAgICAgICAgZmlsbD1cIiM5RjYxNkFcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIGQ9XCJNMTc0LjAzNCA0MzUuNDE5QzE3NS40NTUgNDM1Ljc2NyAxNzYuNzg1IDQzNi40MTQgMTc3LjkzNiA0MzcuMzE3QzE3OS4wODYgNDM4LjIyIDE4MC4wMzEgNDM5LjM1OSAxODAuNzA2IDQ0MC42NTZDMTgxLjM4MiA0NDEuOTU0IDE4MS43NzIgNDQzLjM4MSAxODEuODUyIDQ0NC44NDFDMTgxLjkzMSA0NDYuMzAyIDE4MS42OTggNDQ3Ljc2MyAxODEuMTY4IDQ0OS4xMjZMMTcxLjE2IDQ3NC44NUwxNTkuNTU2IDQ3MS42MzRMMTYxLjMzOCA0NDQuNzIxQzE2MS40MzcgNDQzLjIyNSAxNjEuODYzIDQ0MS43NjggMTYyLjU4NSA0NDAuNDUzQzE2My4zMDcgNDM5LjEzOSAxNjQuMzA4IDQzNy45OTggMTY1LjUxOCA0MzcuMTExQzE2Ni43MjggNDM2LjIyNSAxNjguMTE3IDQzNS42MTQgMTY5LjU4OCA0MzUuMzIyQzE3MS4wNTkgNDM1LjAyOSAxNzIuNTc3IDQzNS4wNjMgMTc0LjAzNCA0MzUuNDE5SDE3NC4wMzRaXCJcclxuICAgICAgICAgICAgICAgIGZpbGw9XCIjOUY2MTZBXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTYwLjU3OSA1MDkuMDU1TDE0Mi4wODcgNDk3LjIyTDE1Ny42MiA0NjUuNDE0TDE3Ni44NTEgNDcyLjgxMUwxNjcuMjM2IDUwMC45MThMMTYwLjU3OSA1MDkuMDU1WlwiIGZpbGw9XCIjRTZFNkU2XCIgLz5cclxuICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgZD1cIk0xNzMuMDAxIDQwOS4xMDFWMjg0SDE3MS4wMDFWNDA5LjEwMUMxNjkuNzg3IDQwOS4zNDkgMTY4LjcwOSA0MTAuMDM5IDE2Ny45NzQgNDExLjAzN0MxNjcuMjQgNDEyLjAzNSAxNjYuOTAyIDQxMy4yNyAxNjcuMDI3IDQxNC41MDNDMTY3LjE1MSA0MTUuNzM1IDE2Ny43MjkgNDE2Ljg3OCAxNjguNjQ4IDQxNy43MDlDMTY5LjU2NyA0MTguNTQgMTcwLjc2MiA0MTkgMTcyLjAwMSA0MTlDMTczLjI0MSA0MTkgMTc0LjQzNSA0MTguNTQgMTc1LjM1NSA0MTcuNzA5QzE3Ni4yNzQgNDE2Ljg3OCAxNzYuODUyIDQxNS43MzUgMTc2Ljk3NiA0MTQuNTAzQzE3Ny4xMDEgNDEzLjI3IDE3Ni43NjMgNDEyLjAzNSAxNzYuMDI5IDQxMS4wMzdDMTc1LjI5NCA0MTAuMDM5IDE3NC4yMTYgNDA5LjM0OSAxNzMuMDAxIDQwOS4xMDFWNDA5LjEwMVpNMTcyLjAwMSA0MTdDMTcxLjQwOCA0MTcgMTcwLjgyOCA0MTYuODI0IDE3MC4zMzUgNDE2LjQ5NEMxNjkuODQxIDQxNi4xNjUgMTY5LjQ1NyA0MTUuNjk2IDE2OS4yMyA0MTUuMTQ4QzE2OS4wMDMgNDE0LjYgMTY4Ljk0MyA0MTMuOTk3IDE2OS4wNTkgNDEzLjQxNUMxNjkuMTc1IDQxMi44MzMgMTY5LjQ2MSA0MTIuMjk4IDE2OS44OCA0MTEuODc5QzE3MC4zIDQxMS40NTkgMTcwLjgzNCA0MTEuMTczIDE3MS40MTYgNDExLjA1OEMxNzEuOTk4IDQxMC45NDIgMTcyLjYwMSA0MTEuMDAxIDE3My4xNSA0MTEuMjI4QzE3My42OTggNDExLjQ1NSAxNzQuMTY2IDQxMS44NCAxNzQuNDk2IDQxMi4zMzNDMTc0LjgyNiA0MTIuODI3IDE3NS4wMDEgNDEzLjQwNyAxNzUuMDAxIDQxNEMxNzUuMDAxIDQxNC43OTUgMTc0LjY4NCA0MTUuNTU4IDE3NC4xMjIgNDE2LjEyQzE3My41NTkgNDE2LjY4MyAxNzIuNzk3IDQxNi45OTkgMTcyLjAwMSA0MTdWNDE3WlwiXHJcbiAgICAgICAgICAgICAgICBmaWxsPVwiIzBBMTIzMFwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgZD1cIk0xNzAuNDM1IDE2NC41NjlDMTY5LjI5IDE2NC41NjkgMTY4LjE5MyAxNjQuMTE1IDE2Ny4zODQgMTYzLjMwNkMxNjYuNTc1IDE2Mi40OTcgMTY2LjEyMSAxNjEuMzk5IDE2Ni4xMjEgMTYwLjI1NVYxNDcuMzE0QzE2Ni4xMjIgMTQ2LjE3MSAxNjYuNTc4IDE0NS4wNzUgMTY3LjM4NyAxNDQuMjY4QzE2OC4xOTUgMTQzLjQ2IDE2OS4yOTIgMTQzLjAwNyAxNzAuNDM1IDE0My4wMDdDMTcxLjU3OCAxNDMuMDA3IDE3Mi42NzQgMTQzLjQ2IDE3My40ODMgMTQ0LjI2OEMxNzQuMjkxIDE0NS4wNzUgMTc0Ljc0NyAxNDYuMTcxIDE3NC43NDggMTQ3LjMxNFYxNjAuMjU1QzE3NC43NDggMTYwLjgyMiAxNzQuNjM3IDE2MS4zODMgMTc0LjQyIDE2MS45MDZDMTc0LjIwMyAxNjIuNDMgMTczLjg4NSAxNjIuOTA1IDE3My40ODUgMTYzLjMwNkMxNzMuMDg0IDE2My43MDYgMTcyLjYwOSAxNjQuMDI0IDE3Mi4wODUgMTY0LjI0MUMxNzEuNTYyIDE2NC40NTggMTcxLjAwMSAxNjQuNTY5IDE3MC40MzUgMTY0LjU2OVYxNjQuNTY5WlwiXHJcbiAgICAgICAgICAgICAgICBmaWxsPVwiIzZDNjNGRlwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgZD1cIk0xNzAuNDM1IDI2My43ODdDMTY5Ljg2OCAyNjMuNzg3IDE2OS4zMDcgMjYzLjY3NiAxNjguNzg0IDI2My40NTlDMTY4LjI2IDI2My4yNDIgMTY3Ljc4NSAyNjIuOTI1IDE2Ny4zODQgMjYyLjUyNEMxNjYuOTg0IDI2Mi4xMjMgMTY2LjY2NiAyNjEuNjQ4IDE2Ni40NDkgMjYxLjEyNEMxNjYuMjMyIDI2MC42MDEgMTY2LjEyMSAyNjAuMDQgMTY2LjEyMSAyNTkuNDc0VjI0Ni41MzJDMTY2LjEyIDI0NS45NjUgMTY2LjIzMSAyNDUuNDAzIDE2Ni40NDcgMjQ0Ljg3OUMxNjYuNjY0IDI0NC4zNTUgMTY2Ljk4MSAyNDMuODc5IDE2Ny4zODIgMjQzLjQ3N0MxNjcuNzgzIDI0My4wNzYgMTY4LjI1OCAyNDIuNzU4IDE2OC43ODIgMjQyLjU0MUMxNjkuMzA2IDI0Mi4zMjMgMTY5Ljg2NyAyNDIuMjEyIDE3MC40MzUgMjQyLjIxMkMxNzEuMDAyIDI0Mi4yMTIgMTcxLjU2MyAyNDIuMzIzIDE3Mi4wODcgMjQyLjU0MUMxNzIuNjExIDI0Mi43NTggMTczLjA4NyAyNDMuMDc2IDE3My40ODcgMjQzLjQ3N0MxNzMuODg4IDI0My44NzkgMTc0LjIwNiAyNDQuMzU1IDE3NC40MjIgMjQ0Ljg3OUMxNzQuNjM4IDI0NS40MDMgMTc0Ljc0OSAyNDUuOTY1IDE3NC43NDggMjQ2LjUzMlYyNTkuNDc0QzE3NC43NDggMjYwLjA0IDE3NC42MzcgMjYwLjYwMSAxNzQuNDIgMjYxLjEyNEMxNzQuMjAzIDI2MS42NDggMTczLjg4NiAyNjIuMTIzIDE3My40ODUgMjYyLjUyNEMxNzMuMDg0IDI2Mi45MjUgMTcyLjYwOSAyNjMuMjQyIDE3Mi4wODUgMjYzLjQ1OUMxNzEuNTYyIDI2My42NzYgMTcxLjAwMSAyNjMuNzg3IDE3MC40MzUgMjYzLjc4N1YyNjMuNzg3WlwiXHJcbiAgICAgICAgICAgICAgICBmaWxsPVwiIzZDNjNGRlwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgZD1cIk0yMDAuOTM5IDE3Ny4yMDNDMjAwLjA4NSAxNzcuMjAzIDE5OS4yNTEgMTc2Ljk1IDE5OC41NDIgMTc2LjQ3NkMxOTcuODMzIDE3Ni4wMDIgMTk3LjI4IDE3NS4zMjggMTk2Ljk1MyAxNzQuNTRDMTk2LjYyNyAxNzMuNzUyIDE5Ni41NDEgMTcyLjg4NSAxOTYuNzA4IDE3Mi4wNDhDMTk2Ljg3NCAxNzEuMjExIDE5Ny4yODUgMTcwLjQ0MiAxOTcuODg4IDE2OS44MzlMMjA3LjAzOSAxNjAuNjg4QzIwNy44NDggMTU5Ljg4IDIwOC45NDUgMTU5LjQyNiAyMTAuMDg5IDE1OS40MjdDMjExLjIzMyAxNTkuNDI3IDIxMi4zMjkgMTU5Ljg4MiAyMTMuMTM4IDE2MC42OUMyMTMuOTQ3IDE2MS40OTkgMjE0LjQwMSAxNjIuNTk2IDIxNC40MDIgMTYzLjczOUMyMTQuNDAyIDE2NC44ODMgMjEzLjk0OCAxNjUuOTggMjEzLjE0IDE2Ni43ODlMMjAzLjk4OSAxNzUuOTRDMjAzLjU4OSAxNzYuMzQxIDIwMy4xMTMgMTc2LjY1OSAyMDIuNTkgMTc2Ljg3NkMyMDIuMDY2IDE3Ny4wOTMgMjAxLjUwNSAxNzcuMjA0IDIwMC45MzkgMTc3LjIwM1YxNzcuMjAzWlwiXHJcbiAgICAgICAgICAgICAgICBmaWxsPVwiIzZDNjNGRlwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgZD1cIk0xMzAuNzggMjQ3LjM2MkMxMjkuOTI2IDI0Ny4zNjIgMTI5LjA5MiAyNDcuMTA5IDEyOC4zODMgMjQ2LjYzNUMxMjcuNjc0IDI0Ni4xNjEgMTI3LjEyMSAyNDUuNDg4IDEyNi43OTQgMjQ0LjY5OUMxMjYuNDY4IDI0My45MTEgMTI2LjM4MiAyNDMuMDQ0IDEyNi41NDkgMjQyLjIwN0MxMjYuNzE1IDI0MS4zNyAxMjcuMTI2IDI0MC42MDIgMTI3LjcyOSAyMzkuOTk4TDEzNi44OCAyMzAuODQ4QzEzNy42ODkgMjMwLjAzOSAxMzguNzg2IDIyOS41ODQgMTM5LjkzIDIyOS41ODRDMTQxLjA3NCAyMjkuNTg0IDE0Mi4xNzIgMjMwLjAzOCAxNDIuOTgxIDIzMC44NDdDMTQzLjc5IDIzMS42NTYgMTQ0LjI0NCAyMzIuNzU0IDE0NC4yNDQgMjMzLjg5OEMxNDQuMjQ0IDIzNS4wNDIgMTQzLjc5IDIzNi4xMzkgMTQyLjk4MSAyMzYuOTQ4TDEzMy44MyAyNDYuMDk5QzEzMy40MyAyNDYuNSAxMzIuOTU0IDI0Ni44MTggMTMyLjQzMSAyNDcuMDM1QzEzMS45MDcgMjQ3LjI1MiAxMzEuMzQ2IDI0Ny4zNjMgMTMwLjc4IDI0Ny4zNjJWMjQ3LjM2MlpcIlxyXG4gICAgICAgICAgICAgICAgZmlsbD1cIiM2QzYzRkZcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIGQ9XCJNMjI2LjUxNCAyMDcuNzA4SDIxMy41NzNDMjEyLjQzIDIwNy43MDYgMjExLjMzNCAyMDcuMjUxIDIxMC41MjcgMjA2LjQ0MkMyMDkuNzE5IDIwNS42MzMgMjA5LjI2NiAyMDQuNTM3IDIwOS4yNjYgMjAzLjM5NEMyMDkuMjY2IDIwMi4yNTEgMjA5LjcxOSAyMDEuMTU0IDIxMC41MjcgMjAwLjM0NkMyMTEuMzM0IDE5OS41MzcgMjEyLjQzIDE5OS4wODIgMjEzLjU3MyAxOTkuMDhIMjI2LjUxNEMyMjcuMDgxIDE5OS4wNzkgMjI3LjY0MyAxOTkuMTkgMjI4LjE2NyAxOTkuNDA2QzIyOC42OTEgMTk5LjYyMyAyMjkuMTY4IDE5OS45NCAyMjkuNTY5IDIwMC4zNDFDMjI5Ljk3IDIwMC43NDIgMjMwLjI4OSAyMDEuMjE4IDIzMC41MDYgMjAxLjc0MUMyMzAuNzIzIDIwMi4yNjUgMjMwLjgzNSAyMDIuODI3IDIzMC44MzUgMjAzLjM5NEMyMzAuODM1IDIwMy45NjEgMjMwLjcyMyAyMDQuNTIyIDIzMC41MDYgMjA1LjA0NkMyMzAuMjg5IDIwNS41NyAyMjkuOTcgMjA2LjA0NiAyMjkuNTY5IDIwNi40NDZDMjI5LjE2OCAyMDYuODQ3IDIyOC42OTEgMjA3LjE2NSAyMjguMTY3IDIwNy4zODFDMjI3LjY0MyAyMDcuNTk3IDIyNy4wODEgMjA3LjcwOCAyMjYuNTE0IDIwNy43MDhWMjA3LjcwOFpcIlxyXG4gICAgICAgICAgICAgICAgZmlsbD1cIiM2QzYzRkZcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIGQ9XCJNMTI3LjI5NiAyMDcuNzA4SDExNC4zNTVDMTEzLjc4OCAyMDcuNzA4IDExMy4yMjYgMjA3LjU5NyAxMTIuNzAyIDIwNy4zODFDMTEyLjE3OCAyMDcuMTY1IDExMS43MDEgMjA2Ljg0NyAxMTEuMyAyMDYuNDQ2QzExMC44OTkgMjA2LjA0NiAxMTAuNTgxIDIwNS41NyAxMTAuMzYzIDIwNS4wNDZDMTEwLjE0NiAyMDQuNTIyIDExMC4wMzQgMjAzLjk2MSAxMTAuMDM0IDIwMy4zOTRDMTEwLjAzNCAyMDIuODI3IDExMC4xNDYgMjAyLjI2NSAxMTAuMzYzIDIwMS43NDFDMTEwLjU4MSAyMDEuMjE4IDExMC44OTkgMjAwLjc0MiAxMTEuMyAyMDAuMzQxQzExMS43MDEgMTk5Ljk0IDExMi4xNzggMTk5LjYyMyAxMTIuNzAyIDE5OS40MDZDMTEzLjIyNiAxOTkuMTkgMTEzLjc4OCAxOTkuMDc5IDExNC4zNTUgMTk5LjA4SDEyNy4yOTZDMTI4LjQzOSAxOTkuMDgyIDEyOS41MzUgMTk5LjUzNyAxMzAuMzQyIDIwMC4zNDZDMTMxLjE1IDIwMS4xNTQgMTMxLjYwNCAyMDIuMjUxIDEzMS42MDQgMjAzLjM5NEMxMzEuNjA0IDIwNC41MzcgMTMxLjE1IDIwNS42MzMgMTMwLjM0MiAyMDYuNDQyQzEyOS41MzUgMjA3LjI1MSAxMjguNDM5IDIwNy43MDYgMTI3LjI5NiAyMDcuNzA4SDEyNy4yOTZaXCJcclxuICAgICAgICAgICAgICAgIGZpbGw9XCIjNkM2M0ZGXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICBkPVwiTTIxMC4wOSAyNDcuMzYyQzIwOS41MjMgMjQ3LjM2MyAyMDguOTYyIDI0Ny4yNTIgMjA4LjQzOCAyNDcuMDM1QzIwNy45MTUgMjQ2LjgxOCAyMDcuNDM5IDI0Ni41IDIwNy4wMzkgMjQ2LjA5OUwxOTcuODg4IDIzNi45NDhDMTk3LjQ4NyAyMzYuNTQ4IDE5Ny4xNjkgMjM2LjA3MiAxOTYuOTUxIDIzNS41NDlDMTk2LjczNCAyMzUuMDI1IDE5Ni42MjIgMjM0LjQ2NCAxOTYuNjIyIDIzMy44OTdDMTk2LjYyMSAyMzMuMzMgMTk2LjczMyAyMzIuNzY5IDE5Ni45NDkgMjMyLjI0NUMxOTcuMTY2IDIzMS43MjEgMTk3LjQ4NCAyMzEuMjQ1IDE5Ny44ODUgMjMwLjg0NEMxOTguMjg2IDIzMC40NDMgMTk4Ljc2MiAyMzAuMTI1IDE5OS4yODYgMjI5LjkwOUMxOTkuODA5IDIyOS42OTIgMjAwLjM3MSAyMjkuNTggMjAwLjkzOCAyMjkuNTgxQzIwMS41MDUgMjI5LjU4MSAyMDIuMDY2IDIyOS42OTMgMjAyLjU4OSAyMjkuOTFDMjAzLjExMyAyMzAuMTI4IDIwMy41ODkgMjMwLjQ0NiAyMDMuOTg5IDIzMC44NDhMMjEzLjE0IDIzOS45OThDMjEzLjc0MyAyNDAuNjAyIDIxNC4xNTQgMjQxLjM3IDIxNC4zMiAyNDIuMjA3QzIxNC40ODcgMjQzLjA0NCAyMTQuNDAxIDI0My45MTEgMjE0LjA3NSAyNDQuN0MyMTMuNzQ4IDI0NS40ODggMjEzLjE5NSAyNDYuMTYxIDIxMi40ODYgMjQ2LjYzNUMyMTEuNzc3IDI0Ny4xMSAyMTAuOTQzIDI0Ny4zNjMgMjEwLjA5IDI0Ny4zNjNWMjQ3LjM2MlpcIlxyXG4gICAgICAgICAgICAgICAgZmlsbD1cIiM2QzYzRkZcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIGQ9XCJNMTM5LjkzIDE3Ny4yMDNDMTM5LjM2NCAxNzcuMjA0IDEzOC44MDMgMTc3LjA5MyAxMzguMjc5IDE3Ni44NzZDMTM3Ljc1NiAxNzYuNjU5IDEzNy4yOCAxNzYuMzQxIDEzNi44OCAxNzUuOTRMMTI3LjcyOSAxNjYuNzg5QzEyNy4zMjkgMTY2LjM4OSAxMjcuMDExIDE2NS45MTMgMTI2Ljc5NCAxNjUuMzlDMTI2LjU3NyAxNjQuODY2IDEyNi40NjYgMTY0LjMwNSAxMjYuNDY2IDE2My43MzlDMTI2LjQ2NiAxNjMuMTcyIDEyNi41NzcgMTYyLjYxMSAxMjYuNzk0IDE2Mi4wODhDMTI3LjAxMSAxNjEuNTY0IDEyNy4zMjkgMTYxLjA4OSAxMjcuNzI5IDE2MC42ODhDMTI4LjEzIDE2MC4yODggMTI4LjYwNSAxNTkuOTcgMTI5LjEyOSAxNTkuNzUzQzEyOS42NTIgMTU5LjUzNiAxMzAuMjEzIDE1OS40MjUgMTMwLjc4IDE1OS40MjVDMTMxLjM0NiAxNTkuNDI1IDEzMS45MDcgMTU5LjUzNiAxMzIuNDMgMTU5Ljc1M0MxMzIuOTU0IDE1OS45NyAxMzMuNDI5IDE2MC4yODggMTMzLjgzIDE2MC42ODhMMTQyLjk4MSAxNjkuODM5QzE0My41ODQgMTcwLjQ0MiAxNDMuOTk1IDE3MS4yMTEgMTQ0LjE2MSAxNzIuMDQ4QzE0NC4zMjggMTcyLjg4NSAxNDQuMjQyIDE3My43NTIgMTQzLjkxNiAxNzQuNTRDMTQzLjU4OSAxNzUuMzI5IDE0My4wMzYgMTc2LjAwMiAxNDIuMzI3IDE3Ni40NzZDMTQxLjYxNyAxNzYuOTUgMTQwLjc4MyAxNzcuMjAzIDEzOS45MyAxNzcuMjAzVjE3Ny4yMDNaXCJcclxuICAgICAgICAgICAgICAgIGZpbGw9XCIjNkM2M0ZGXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICBkPVwiTTE3MC40MzUgMjI5LjI3N0MxNjUuMzE1IDIyOS4yNzcgMTYwLjMxMSAyMjcuNzU5IDE1Ni4wNTUgMjI0LjkxNUMxNTEuNzk4IDIyMi4wNzEgMTQ4LjQ4MSAyMTguMDI4IDE0Ni41MjIgMjEzLjI5OUMxNDQuNTYzIDIwOC41NjkgMTQ0LjA1IDIwMy4zNjUgMTQ1LjA0OSAxOTguMzQ0QzE0Ni4wNDggMTkzLjMyMyAxNDguNTEzIDE4OC43MTEgMTUyLjEzMyAxODUuMDkyQzE1NS43NTIgMTgxLjQ3MiAxNjAuMzY0IDE3OS4wMDcgMTY1LjM4NSAxNzguMDA4QzE3MC40MDYgMTc3LjAwOSAxNzUuNjEgMTc3LjUyMiAxODAuMzQgMTc5LjQ4MUMxODUuMDY5IDE4MS40NCAxODkuMTExIDE4NC43NTcgMTkxLjk1NSAxODkuMDE0QzE5NC44IDE5My4yNyAxOTYuMzE4IDE5OC4yNzUgMTk2LjMxOCAyMDMuMzk0QzE5Ni4zMSAyMTAuMjU2IDE5My41OCAyMTYuODM1IDE4OC43MjggMjIxLjY4N0MxODMuODc2IDIyNi41NCAxNzcuMjk3IDIyOS4yNjkgMTcwLjQzNSAyMjkuMjc3VjIyOS4yNzdaTTE3MC40MzUgMTg2LjEzOEMxNjcuMDIyIDE4Ni4xMzggMTYzLjY4NiAxODcuMTUgMTYwLjg0OCAxODkuMDQ2QzE1OC4wMSAxOTAuOTQyIDE1NS43OTkgMTkzLjYzNyAxNTQuNDkzIDE5Ni43OUMxNTMuMTg3IDE5OS45NDMgMTUyLjg0NSAyMDMuNDEzIDE1My41MTEgMjA2Ljc2QzE1NC4xNzcgMjEwLjEwNyAxNTUuODIgMjEzLjE4MiAxNTguMjMzIDIxNS41OTVDMTYwLjY0NiAyMTguMDA4IDE2My43MjEgMjE5LjY1MiAxNjcuMDY4IDIyMC4zMTdDMTcwLjQxNSAyMjAuOTgzIDE3My44ODUgMjIwLjY0MiAxNzcuMDM4IDIxOS4zMzZDMTgwLjE5MSAyMTguMDMgMTgyLjg4NiAyMTUuODE4IDE4NC43ODIgMjEyLjk4QzE4Ni42NzggMjEwLjE0MyAxODcuNjkgMjA2LjgwNiAxODcuNjkgMjAzLjM5NEMxODcuNjg1IDE5OC44MTkgMTg1Ljg2NSAxOTQuNDMzIDE4Mi42MyAxOTEuMTk4QzE3OS4zOTUgMTg3Ljk2MyAxNzUuMDA5IDE4Ni4xNDQgMTcwLjQzNSAxODYuMTM4VjE4Ni4xMzhaXCJcclxuICAgICAgICAgICAgICAgIGZpbGw9XCIjNkM2M0ZGXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICA8L2c+XHJcbiAgICAgICAgPC9zdmc+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtZnVsbCB3LWZ1bGwgb3ZlcmZsb3ctaGlkZGVuIGJnLWJhY2tncm91bmQgZGFyazpiZy1zZWNvbmRhcnlcIj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICByZWY9e25hdlJlZn1cclxuICAgICAgICAgIG9uTW91c2VFbnRlcj17bW91c2VFbnRlck5hdn1cclxuICAgICAgICAgIG9uTW91c2VMZWF2ZT17bW91c2VMZWF2ZU5hdn1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImgtc2NyZWVuIHctMjAgYmctYmFja2dyb3VuZCBkYXJrOmJnLXNlY29uZGFyeSBmaXhlZCB6LTAgb3ZlcmZsb3ctaGlkZGVuXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTYgdy01MiBncmlkIGdyaWQtY29scy04MHB4IGl0ZW1zLWNlbnRlciBob3ZlcjpvcGFjaXR5LTEwMFwiPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2Rhc2hib2FyZC93ZWxjb21lXCI+XHJcbiAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgb25DbGljaz17YWN0aXZlQ2xhc3NGbjF9XHJcbiAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHNldEFjdGl2ZUhvdmVyMSh0cnVlKX1cclxuICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0QWN0aXZlSG92ZXIxKGZhbHNlKX1cclxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjQ1XCJcclxuICAgICAgICAgICAgICAgIHdpZHRoPVwiNDVcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmlsbC1jdXJyZW50IHRleHQtcHJpbWFyeWRhcmsgZGFyazp0ZXh0LWJhY2tncm91bmQgYmxvY2sgbS1hdXRvIG9wYWNpdHktNTAgaG92ZXI6b3BhY2l0eS0xMDAgY3Vyc29yLXBvaW50ZXIgJHtcclxuICAgICAgICAgICAgICAgICAgYWN0aXZlQ2xhc3MxID8gJ29wYWNpdHktMTAwJyA6ICdvcGFjaXR5LTUwJ1xyXG4gICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTI4IDEyOFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRlZnM+XHJcbiAgICAgICAgICAgICAgICAgIDxzdHlsZT48L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgPC9kZWZzPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPlNlZSBZb3UgU29vbjwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8ZyBpZD1cIlNlZV9Zb3VfU29vblwiIGRhdGEtbmFtZT1cIlNlZSBZb3UgU29vblwiPlxyXG4gICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNscy0xXCJcclxuICAgICAgICAgICAgICAgICAgICBkPVwiTTg0Ljg3LDc3LjI3bC03LTQxLjE4YTYuNiw2LjYsMCwwLDAtMTMuMSwxLjU4bDEuODMsMjQuNkw1Ni45MywzNmE2LjczLDYuNzMsMCwwLDAtMTIuNzgsNC4xN0w1MS44Miw2Nyw0MC41Nyw0OGE2LjQ1LDYuNDUsMCwwLDAtMTEuNDEsNmw4LjMzLDE4LjI0LTQuNTctNi40NWE2LjQ4LDYuNDgsMCwwLDAtMTAuOSw3bDIxLjI1LDM2LjcxYy4zMi41OSw4LDE0LjU0LDIzLjE0LDE0LjU0LDIwLjA3LDAsMjkuNzQtMTUuMTcsMzIuMTEtMjkuMzYsMi4yMi0xMy4zNCw0LjU5LTIyLDcuNjgtMjguMjJDMTExLjc0LDU1LjM2LDk2LjM3LDQ0LjY3LDg0Ljg3LDc3LjI3Wm0xOS41LTExLjc0Yy0zLjE4LDYuMzYtNS42MSwxNS4yNC03Ljg3LDI4Ljc5Qzk0LjI4LDEwNy42OSw4NS4yLDEyMiw2Ni40MSwxMjJjLTEzLjg2LDAtMjEuMjctMTMuMzQtMjEuMzYtMTMuNUwyMy43OSw3MS43NUE0LjQ0LDQuNDQsMCwwLDEsMzEuMjYsNjdMNDIuMSw4Mi4yN2ExLDEsMCwwLDAsMS43Ni0xTDMxLDUzLjE0YTQuNDEsNC40MSwwLDAsMSw3LjgtNC4wOEw1NC4xLDc0Ljg0QTEsMSwwLDAsMCw1Niw3NEw0Ni4xMiwzOS42QTQuNjgsNC42OCwwLDAsMSw1NSwzNi42OUw2Ny4yMiw2OS43OGExLDEsMCwwLDAsMi0uNDNMNjYuODQsMzcuNTJhNC41Niw0LjU2LDAsMCwxLDktMS4wOUw4My41NSw4MS43YTEsMSwwLDAsMCwyLC4xMWMwLS4xNyw1LjE3LTE3Ljg0LDEyLjU0LTIyLjc1QzEwNC45Myw1NC40OSwxMDYuNDgsNjEuMzIsMTA0LjM3LDY1LjUzWlwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzTmFtZT1cImNscy0xXCIgZD1cIk0xMjcsNjdoLThhMSwxLDAsMCwwLDAsMmg4QTEsMSwwLDAsMCwxMjcsNjdaXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3NOYW1lPVwiY2xzLTFcIiBkPVwiTTksNjdIMWExLDEsMCwwLDAsMCwySDlBMSwxLDAsMCwwLDksNjdaXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3NOYW1lPVwiY2xzLTFcIiBkPVwiTTY1LDEzVjVhMSwxLDAsMCwwLTIsMHY4QTEsMSwwLDAsMCw2NSwxM1pcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8cGF0aCBjbGFzc05hbWU9XCJjbHMtMVwiIGQ9XCJNMTExLjYzLDQxLjUyYy4zOSwwLS4wOS4yMSw3LjQ0LTQuMTRhMSwxLDAsMCwwLTEtMS43NmwtNi45Myw0QTEsMSwwLDAsMCwxMTEuNjMsNDEuNTJaXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3NOYW1lPVwiY2xzLTFcIiBkPVwiTTE1Ljg2LDk0LjYybC02LjkzLDRhMSwxLDAsMCwwLDEsMS43Nmw2LjkzLTRBMSwxLDAsMCwwLDE1Ljg2LDk0LjYyWlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzTmFtZT1cImNscy0xXCIgZD1cIk0xNi44OCwzOS42MmwtNi45My00YTEsMSwwLDAsMC0xLDEuNzZsNi45Myw0QTEsMSwwLDAsMCwxNi44OCwzOS42MlpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8cGF0aCBjbGFzc05hbWU9XCJjbHMtMVwiIGQ9XCJNMTE5LjA3LDk4LjYybC02LjkzLTRhMSwxLDAsMCwwLTEsMS43Nmw2LjkzLDRBMSwxLDAsMCwwLDExOS4wNyw5OC42MlpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8cGF0aCBjbGFzc05hbWU9XCJjbHMtMVwiIGQ9XCJNMzUuNjIsMjAuODhhMSwxLDAsMCwwLDEuNzYtMWwtNC02LjkzYTEsMSwwLDAsMC0xLjc2LDFaXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3NOYW1lPVwiY2xzLTFcIiBkPVwiTTkyLjM4LDIwLjg4bDQtNi45M2ExLDEsMCwwLDAtMS43Ni0xbC00LDYuOTNBMSwxLDAsMCwwLDkyLjM4LDIwLjg4WlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9kYXNoYm9hcmQvd2VsY29tZVwiPlxyXG4gICAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXthY3RpdmVDbGFzc0ZuMX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHRleHQtcHJpbWFyeWRhcmsgZGFyazp0ZXh0LWJhY2tncm91bmQgbWwtMSBjdXJzb3ItcG9pbnRlciBvcGFjaXR5LTUwICR7XHJcbiAgICAgICAgICAgICAgICAgIGFjdGl2ZUhvdmVyMSA/ICdvcGFjaXR5LTEwMCcgOiAnb3BhY2l0eS01MCdcclxuICAgICAgICAgICAgICAgIH0gJHthY3RpdmVDbGFzczEgPyAnb3BhY2l0eS0xMDAnIDogJ29wYWNpdHktNTAnfWB9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgV2VsY29tZVxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTYgdy01MiBncmlkIGdyaWQtY29scy04MHB4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2Rhc2hib2FyZC9zdGFydHVwXCI+XHJcbiAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgb25DbGljaz17YWN0aXZlQ2xhc3NGbjJ9XHJcbiAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHNldEFjdGl2ZUhvdmVyMih0cnVlKX1cclxuICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0QWN0aXZlSG92ZXIyKGZhbHNlKX1cclxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjQ1XCJcclxuICAgICAgICAgICAgICAgIHdpZHRoPVwiNDVcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmlsbC1jdXJyZW50IHRleHQtcHJpbWFyeWRhcmsgZGFyazp0ZXh0LWJhY2tncm91bmQgYmxvY2sgbS1hdXRvIG9wYWNpdHktNTAgaG92ZXI6b3BhY2l0eS0xMDAgY3Vyc29yLXBvaW50ZXIgJHtcclxuICAgICAgICAgICAgICAgICAgYWN0aXZlQ2xhc3MyID8gJ29wYWNpdHktMTAwJyA6ICdvcGFjaXR5LTUwJ1xyXG4gICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTI4IDEyOFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRlZnM+XHJcbiAgICAgICAgICAgICAgICAgIDxzdHlsZT48L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgPC9kZWZzPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPkxhbmRpbmcgU3VjY2VzczwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8ZyBpZD1cIkxhbmRpbmdfU3VjY2Vzc1wiIGRhdGEtbmFtZT1cIkxhbmRpbmcgU3VjY2Vzc1wiPlxyXG4gICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNscy0xXCJcclxuICAgICAgICAgICAgICAgICAgICBkPVwiTTEwOS4zLDkwLjFBNDYsNDYsMCwwLDAsNjUsMzZWMjAuMDhjMS43OC0uNjIsNy4yMS0yLjE0LDEyLjU3LjIzYTE5LjMzLDE5LjMzLDAsMCwwLDE0LjgyLDBjLjg3LS4zOC42MS4zMS42MS0xNy45M2ExLDEsMCwwLDAtMS40My0uOTNjLS4wNywwLTYuNjksMi44Ny0xMy4xOCwwQTE5LjQxLDE5LjQxLDAsMCwwLDY1LC45MywxLDEsMCwwLDAsNjMsMVYzNmE0NS44Niw0NS44NiwwLDAsMC0yOC42NiwxMC44QzE2LjE4LDQwLjQ4LDQsNDAsLjc5LDQ1LjUxLTIuMjksNTAuODYsMy45NCw1OS4zLDEwLDY1LjY4QTExLDExLDAsMCwwLDE4LDgzYy44MSwzOC40MSw0Ni4wOCw1OS4yLDc1LjY2LDM0LjIxLDguNTMsMywyOSw5LjE1LDMzLjU1LDEuMzFDMTMwLjM5LDExMywxMjMuODYsMTAyLjY1LDEwOS4zLDkwLjFaTTc3LjU5LDMuMzFBMTkuMzksMTkuMzksMCwwLDAsOTEsMy44M1YxOC42OGMtMS43OS42Mi03LjIyLDIuMTMtMTIuNTctLjIzQTE5LjE5LDE5LjE5LDAsMCwwLDY1LDE3LjkzVjMuMDhDNjYuODEsMi40Niw3Mi4yNCwxLDc3LjU5LDMuMzFaTTY1LDQ1di03YzM5LjY5LjkxLDU4LDUwLjI3LDI4LjIxLDc2LjgxQzcxLjMyLDEwNyw0Niw5Mi42NiwyNy43Nyw3OC42NGExMSwxMSwwLDAsMC0zLjItMTYuMTNBNDMuODgsNDMuODgsMCwwLDEsNjMsMzguMDZWNDVBMSwxLDAsMCwwLDY1LDQ1Wk0zMi41NSw0OC4zNmE0Ni4yMSw0Ni4yMSwwLDAsMC05LjgzLDEzLjI4LDEwLjkzLDEwLjkzLDAsMCwwLTExLjQsMi40N0MtOC4zOSw0My4yMyw1LjIzLDM5LjA4LDMyLjU1LDQ4LjM2Wk0xMCw3MmE5LDksMCwxLDEsOSw5QTksOSwwLDAsMSwxMCw3MlptMTAsMTFhMTEsMTEsMCwwLDAsNi4zNC0yLjgyYzE4LjQ1LDE0LjIxLDQzLjQ1LDI4LjM1LDY1LjA1LDM2LjIyQzYzLDEzOS4xNiwyMC44MywxMTkuMSwyMC4wNSw4M1ptMTA1LjQsMzQuNWMtMi41MSw0LjM1LTE0LDMuNjItMzAtMS44NWE0NS42MSw0NS42MSwwLDAsMCwxMy40Mi0yMy4yMUMxMjEuNTksMTAzLjU4LDEyOCwxMTMuMTIsMTI1LjQ1LDExNy40N1pcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZGFzaGJvYXJkL3N0YXJ0dXBcIj5cclxuICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17YWN0aXZlQ2xhc3NGbjJ9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B0ZXh0LXByaW1hcnlkYXJrIGRhcms6dGV4dC1iYWNrZ3JvdW5kIG1sLTEgY3Vyc29yLXBvaW50ZXIgb3BhY2l0eS01MCAke1xyXG4gICAgICAgICAgICAgICAgICBhY3RpdmVIb3ZlcjIgPyAnb3BhY2l0eS0xMDAnIDogJ29wYWNpdHktNTAnXHJcbiAgICAgICAgICAgICAgICB9ICR7YWN0aXZlQ2xhc3MyID8gJ29wYWNpdHktMTAwJyA6ICdvcGFjaXR5LTUwJ31gfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFN0YXJ0dXAgaWRlYVxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTYgdy01MiBncmlkIGdyaWQtY29scy04MHB4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgb25DbGljaz17YWN0aXZlQ2xhc3NGbjN9XHJcbiAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRBY3RpdmVIb3ZlcjModHJ1ZSl9XHJcbiAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRBY3RpdmVIb3ZlcjMoZmFsc2UpfVxyXG4gICAgICAgICAgICAgIGhlaWdodD1cIjQ1XCJcclxuICAgICAgICAgICAgICB3aWR0aD1cIjQ1XCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmaWxsLWN1cnJlbnQgdGV4dC1wcmltYXJ5ZGFyayBkYXJrOnRleHQtYmFja2dyb3VuZCBibG9jayBtLWF1dG8gb3BhY2l0eS01MCBob3ZlcjpvcGFjaXR5LTEwMCBjdXJzb3ItcG9pbnRlciAke1xyXG4gICAgICAgICAgICAgICAgYWN0aXZlQ2xhc3MzID8gJ29wYWNpdHktMTAwJyA6ICdvcGFjaXR5LTUwJ1xyXG4gICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTI4IDEyOFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGVmcz5cclxuICAgICAgICAgICAgICAgIDxzdHlsZT48L3N0eWxlPlxyXG4gICAgICAgICAgICAgIDwvZGVmcz5cclxuICAgICAgICAgICAgICA8dGl0bGU+U2VhcmNoaW5nPC90aXRsZT5cclxuICAgICAgICAgICAgICA8ZyBpZD1cIlNlYXJjaGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xzLTFcIlxyXG4gICAgICAgICAgICAgICAgICBkPVwiTTc5LjU3LDM2LjQzYTIyLDIyLDAsMSwwLDAsMzEuMTRBMjIsMjIsMCwwLDAsNzkuNTcsMzYuNDNabS0xLjQ0LDI5LjdhMjAsMjAsMCwxLDEsMC0yOC4yNkEyMCwyMCwwLDAsMSw3OC4xMyw2Ni4xM1pcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNscy0xXCJcclxuICAgICAgICAgICAgICAgICAgZD1cIk0xMTcsMEgzMUExMSwxMSwwLDAsMCwyMCwxMXY5N0gxYTEsMSwwLDAsMC0xLDF2OGExMSwxMSwwLDAsMCwxMSwxMUg5N2ExMSwxMSwwLDAsMCwxMS0xMVYxMDRhMy40MiwzLjQyLDAsMCwwLDIuNDEtMWM0LjcxLTQuNzEsNS41OS01LjEzLDUuNTktN3MtLjY2LTIuMDgtOC05LjQyVjIwaDE5YTEsMSwwLDAsMCwxLTFWMTFBMTEsMTEsMCwwLDAsMTE3LDBaTTkwLjYyLDEyNkgxMWE5LDksMCwwLDEtOS05di03SDg2Qzg2LDExNi4yOSw4NSwxMjIsOTAuNjIsMTI2Wk0xMTQsOTZjMCwuNzksMCwuNjEtNSw1LjU3YTEuNDMsMS40MywwLDAsMS0yLDBMODYuNDMsODFhMS4zOCwxLjM4LDAsMCwxLDAtMmM1LjA3LTUuMDcsNC44LTUsNS41Ny01cy0uMTctLjc1LDE0LjI4LDEzLjdDMTEzLjg3LDk1LjMxLDExNCw5NS4xMSwxMTQsOTZaTTgyLjM3LDcwLjM3YTI2LDI2LDAsMSwxLDAtMzYuNzRBMjYsMjYsMCwwLDEsODIuMzcsNzAuMzdabTIuNzksMCwzLjUyLDMuNTItMi44LDIuOC0zLjUyLTMuNTJBMjYuNDQsMjYuNDQsMCwwLDAsODUuMTYsNzAuMzZaTTk0LjQzLDczYTMuNTMsMy41MywwLDAsMC00LjIzLS40N2wtMy43NS0zLjc1QzEwMC4yNyw1MC4yOCw4NywyNCw2NCwyNEEyOCwyOCwwLDAsMCwzNiw1MmMwLDIzLjM3LDI2LjcxLDM2LDQ0Ljc5LDIyLjQ1bDMuNzMsMy43NEEzLjQxLDMuNDEsMCwwLDAsODUsODIuNDNjMjIuMjIsMjIuMjMsMjAuNTcsMjAuNjEsMjEsMjAuOTJWMTE3YTksOSwwLDAsMS0xOCwwdi04YTEsMSwwLDAsMC0xLTFIMjJWMTFhOSw5LDAsMCwxLDktOWM4NS42LDAsNzkuNzQtLjA4LDc5LjQxLjE3YTExLDExLDAsMCwwLTQuMTQsNi4zMmMtLjQxLDEuNzctLjI5LTQuMTktLjI5LDc2Wk0xMjYsMThIMTA4VjExYTksOSwwLDAsMSwxOCwwWlwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgb25DbGljaz17YWN0aXZlQ2xhc3NGbjN9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdGV4dC1wcmltYXJ5ZGFyayBkYXJrOnRleHQtYmFja2dyb3VuZCBtbC0xIGN1cnNvci1wb2ludGVyIG9wYWNpdHktNTAgJHtcclxuICAgICAgICAgICAgICAgIGFjdGl2ZUhvdmVyMyA/ICdvcGFjaXR5LTEwMCcgOiAnb3BhY2l0eS01MCdcclxuICAgICAgICAgICAgICB9ICR7YWN0aXZlQ2xhc3MzID8gJ29wYWNpdHktMTAwJyA6ICdvcGFjaXR5LTUwJ31gfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgQnVzaW5lc3MgcGxhblxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNiB3LTUyIGdyaWQgZ3JpZC1jb2xzLTgwcHggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIHsvKiA8TGluayBocmVmPScvZGFzaGJvYXJkL2FjY291bnQnPiAqL31cclxuICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2FjdGl2ZUNsYXNzRm40fVxyXG4gICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0QWN0aXZlSG92ZXI0KHRydWUpfVxyXG4gICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0QWN0aXZlSG92ZXI0KGZhbHNlKX1cclxuICAgICAgICAgICAgICBoZWlnaHQ9XCI0NVwiXHJcbiAgICAgICAgICAgICAgd2lkdGg9XCI0NVwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmlsbC1jdXJyZW50IHRleHQtcHJpbWFyeWRhcmsgZGFyazp0ZXh0LWJhY2tncm91bmQgYmxvY2sgbS1hdXRvIG9wYWNpdHktNTAgaG92ZXI6b3BhY2l0eS0xMDAgY3Vyc29yLXBvaW50ZXIgJHtcclxuICAgICAgICAgICAgICAgIGFjdGl2ZUNsYXNzNCA/ICdvcGFjaXR5LTEwMCcgOiAnb3BhY2l0eS01MCdcclxuICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICBpZD1cIkRhdGFfVXNlclwiXHJcbiAgICAgICAgICAgICAgZGF0YS1uYW1lPVwiRGF0YSBVc2VyXCJcclxuICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDEyOCAxMjhcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRlZnM+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGU+PC9zdHlsZT5cclxuICAgICAgICAgICAgICA8L2RlZnM+XHJcbiAgICAgICAgICAgICAgPHRpdGxlPkRhdGEgVXNlcjwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNscy0xXCJcclxuICAgICAgICAgICAgICAgIGQ9XCJNMTA5LDBIMjNhOSw5LDAsMCwwLTksOWMwLDExOCwwLDExMCwwLDExMC42NEE5LjIyLDkuMjIsMCwwLDAsMjMuMzEsMTI4SDEwOWE1LDUsMCwwLDAsNS01VjVBNSw1LDAsMCwwLDEwOSwwWm0zLDVWMTA3YTMsMywwLDAsMS0zLDNIMjZWMmg4M0EzLDMsMCwwLDEsMTEyLDVaTTE2LDlhNyw3LDAsMCwxLDctN2gxVjExMEgyM2E5LDksMCwwLDAtNi45NCwzLjI2QzE2LDExMy4zNCwxNiwxMTguMjgsMTYsOVptOTYsMTE0YTMsMywwLDAsMS0zLDNIMjMuMzFjLTYuMTMsMC05LjU2LTYuOTQtNS42OC0xMS40M0E2LjkxLDYuOTEsMCwwLDEsMjMsMTEyYzkwLjkxLDAsODcuMDYuNDQsODktMVpcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNscy0xXCJcclxuICAgICAgICAgICAgICAgIGQ9XCJNNTYuMTUsNzUuODFBMzMsMzMsMCwxLDAsMzUsNDUsMzMuMDUsMzMuMDUsMCwwLDAsNTYuMTUsNzUuODFabS03LjUzLTYuNjhjNS44OS0yMi44MiwzMi44Ni0yMi44MywzOC43NiwwQTMwLjg4LDMwLjg4LDAsMCwxLDQ4LjYyLDY5LjEzWk02OCwxNGMyOC4wNywwLDQxLjYxLDM0LjUxLDIxLjA5LDUzLjY1Qzg2LjU2LDU5LDgwLjgyLDUyLjgzLDczLjU3LDUwLjc1YTEzLDEzLDAsMSwwLTExLjE0LDBjLTcuMjUsMi4wOC0xMyw4LjI0LTE1LjUyLDE2LjkyQzI2LjQ1LDQ4LjY5LDM5LjgsMTQsNjgsMTRabTAsMzZBMTEsMTEsMCwxLDEsNzksMzksMTEsMTEsMCwwLDEsNjgsNTBaXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxwYXRoIGNsYXNzTmFtZT1cImNscy0xXCIgZD1cIk05Ni41LDg3aC01NmExLDEsMCwwLDAsMCwyaDU2QTEsMSwwLDAsMCw5Ni41LDg3WlwiIC8+XHJcbiAgICAgICAgICAgICAgPHBhdGggY2xhc3NOYW1lPVwiY2xzLTFcIiBkPVwiTTk2LjUsOTloLTU2YTEsMSwwLDAsMCwwLDJoNTZBMSwxLDAsMCwwLDk2LjUsOTlaXCIgLz5cclxuICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgIHsvKiA8L0xpbms+ICovfVxyXG4gICAgICAgICAgICB7LyogPExpbmsgaHJlZj0nL2Rhc2hib2FyZC9hY2NvdW50Jz4gKi99XHJcbiAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgb25DbGljaz17YWN0aXZlQ2xhc3NGbjR9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdGV4dC1wcmltYXJ5ZGFyayBkYXJrOnRleHQtYmFja2dyb3VuZCBtbC0xIGN1cnNvci1wb2ludGVyIG9wYWNpdHktNTAgJHtcclxuICAgICAgICAgICAgICAgIGFjdGl2ZUhvdmVyNCA/ICdvcGFjaXR5LTEwMCcgOiAnb3BhY2l0eS01MCdcclxuICAgICAgICAgICAgICB9ICR7YWN0aXZlQ2xhc3M0ID8gJ29wYWNpdHktMTAwJyA6ICdvcGFjaXR5LTUwJ31gfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgQWNjb3VudFxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIHsvKiA8L0xpbms+ICovfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTYgdy01MiBncmlkIGdyaWQtY29scy04MHB4IGl0ZW1zLWNlbnRlciBhYnNvbHV0ZSBib3R0b20tNFwiPlxyXG4gICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgb25DbGljaz17YWN0aXZlQ2xhc3NGbjV9XHJcbiAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRBY3RpdmVIb3ZlcjUodHJ1ZSl9XHJcbiAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRBY3RpdmVIb3ZlcjUoZmFsc2UpfVxyXG4gICAgICAgICAgICAgIGhlaWdodD1cIjQ1XCJcclxuICAgICAgICAgICAgICB3aWR0aD1cIjQ1XCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmaWxsLWN1cnJlbnQgdGV4dC1wcmltYXJ5ZGFyayBkYXJrOnRleHQtYmFja2dyb3VuZCBibG9jayBtLWF1dG8gb3BhY2l0eS01MCBob3ZlcjpvcGFjaXR5LTEwMCBjdXJzb3ItcG9pbnRlciAke1xyXG4gICAgICAgICAgICAgICAgYWN0aXZlQ2xhc3M1ID8gJ29wYWNpdHktMTAwJyA6ICdvcGFjaXR5LTUwJ1xyXG4gICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTI4IDEyOFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGVmcz5cclxuICAgICAgICAgICAgICAgIDxzdHlsZT48L3N0eWxlPlxyXG4gICAgICAgICAgICAgIDwvZGVmcz5cclxuICAgICAgICAgICAgICA8dGl0bGU+TG9nIE91dDwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgPGcgaWQ9XCJMb2dfT3V0XCIgZGF0YS1uYW1lPVwiTG9nIE91dFwiPlxyXG4gICAgICAgICAgICAgICAgPHBhdGggY2xhc3NOYW1lPVwiY2xzLTFcIiBkPVwiTTQ0LDYxdjZhMSwxLDAsMCwwLDIsMFY2MUExLDEsMCwwLDAsNDQsNjFaXCIgLz5cclxuICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNscy0xXCJcclxuICAgICAgICAgICAgICAgICAgZD1cIk0xMTMsMTEzSDg2Vjc1aDZ2OWExLDEsMCwwLDAsMSwxYy42NCwwLS44MywxLjI2LDIwLjcyLTIwLjNhMSwxLDAsMCwwLDAtMS40NGwtMjAtMjBBMSwxLDAsMCwwLDkyLDQ0djlIODZWMTRhMSwxLDAsMCwwLTEtMUg1NFYxYTEsMSwwLDAsMC0xLjM1LTFsLTM4LDEzQTEsMSwwLDAsMCwxNCwxNGMwLDEwNi41OC0uMzgsMTAwLjYuNjksMTAxQzU1LjM0LDEyOC44OCw1Mi43NCwxMjgsNTMsMTI4YTEsMSwwLDAsMCwxLTFWMTE1aDU5QTEsMSwwLDAsMCwxMTMsMTEzWk05Myw1NWExLDEsMCwwLDAsMS0xVjQ2LjQ2TDExMS41Niw2NCw5NCw4MS41NFY3NGExLDEsMCwwLDAtMS0xSDU0VjU1Wk01NCwyMUg3N1Y1M0g1NFptMzAtNlY1M0g3OVYyMGExLDEsMCwwLDAtMS0xSDU0VjE1Wk01MiwxMjUuNTdsLTM2LTEyLjNWMTQuNzNMNTIsMi40M1pNNTQsNzVINzd2MzhINTRabTI1LDM4Vjc1aDV2MzhaXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICBvbkNsaWNrPXthY3RpdmVDbGFzc0ZuNX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2B0ZXh0LXByaW1hcnlkYXJrIGRhcms6dGV4dC1iYWNrZ3JvdW5kIG1sLTEgY3Vyc29yLXBvaW50ZXIgb3BhY2l0eS01MCAke1xyXG4gICAgICAgICAgICAgICAgYWN0aXZlSG92ZXI1ID8gJ29wYWNpdHktMTAwJyA6ICdvcGFjaXR5LTUwJ1xyXG4gICAgICAgICAgICAgIH0gJHthY3RpdmVDbGFzczUgPyAnb3BhY2l0eS0xMDAnIDogJ29wYWNpdHktNTAnfWB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBMb2cgb3V0XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9Jc0FjdGl2ZUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERlc2t0b3BOYXZiYXI7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gJy4uLy4uL2xpYi9uZXdBdXRoJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBJc0FjdGl2ZUNvbnRleHQgfSBmcm9tICcuL0Rlc2t0b3BOYXZiYXInO1xyXG5pbXBvcnQgZ3NhcCwgeyBQb3dlcjQgfSBmcm9tICdnc2FwJztcclxuaW1wb3J0IHsgdXNlV2luZG93U2l6ZSB9IGZyb20gJy4uLy4uL3V0aWxzL3VzZVdpbmRvd1NpemUnO1xyXG5cclxuY29uc3QgUmVkaXJlY3QgPSAoeyB0byB9KSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICByb3V0ZXIucHVzaCh0byk7XHJcbiAgfSwgW3RvXSk7XHJcblxyXG4gIHJldHVybiBudWxsO1xyXG59O1xyXG5cclxuY29uc3QgTmF2YmFyVGVtcGxhdGUgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgLy8gTW9iaWxlIGZyaWVuZGx5XHJcbiAgY29uc3Qgc2l6ZSA9IHVzZVdpbmRvd1NpemUoKTtcclxuXHJcbiAgY29uc3QgYWN0aXZlSG92ZXIgPSB1c2VDb250ZXh0KElzQWN0aXZlQ29udGV4dCk7XHJcbiAgY29uc3QgeyBjdXJyZW50VXNlciB9ID0gdXNlQXV0aCgpO1xyXG4gIGNvbnN0IGNvbnRlbnRSZWYgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gIGNvbnN0IGFjdGl2ZUNsYXNzID0gYWN0aXZlSG92ZXIgPyAnbWwtNTInIDogJ21sLTIwJztcclxuXHJcbiAgaWYgKGFjdGl2ZUhvdmVyKSB7XHJcbiAgICBnc2FwLnRvKGNvbnRlbnRSZWYuY3VycmVudCwge1xyXG4gICAgICBtYXJnaW5MZWZ0OiAnMjA4cHgnLFxyXG4gICAgICBlYXNlOiBQb3dlcjQuZWFzZU91dCxcclxuICAgICAgLy8gZHVyYXRpb246IDFcclxuICAgIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBnc2FwLnRvKGNvbnRlbnRSZWYuY3VycmVudCwgeyBtYXJnaW5MZWZ0OiAnODBweCcsIGVhc2U6IFBvd2VyNC5lYXNlT3V0IH0pO1xyXG4gIH1cclxuXHJcbiAgaWYgKCFjdXJyZW50VXNlcikge1xyXG4gICAgcmV0dXJuIDxSZWRpcmVjdCB0bz1cIi9cIiAvPjtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7c2l6ZS53aWR0aCA8IDg2MCA/IChcclxuICAgICAgICA8PntjaGlsZHJlbn08Lz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICByZWY9e2NvbnRlbnRSZWZ9XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2ByZWxhdGl2ZSBoLWZ1bGwgJHthY3RpdmVDbGFzc30gYmctYmFja2dyb3VuZCBkYXJrOmJnLXNlY29uZGFyeWB9XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb246ICdsaW5lYXInLFxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uRHVyYXRpb246ICcyMDBtcycsXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb25Qcm9wZXJ0eTogJ3dpZHRoLCBtYXJnaW4tbGVmdCcsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXJUZW1wbGF0ZTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGdzYXAsIHsgUG93ZXI0IH0gZnJvbSAnZ3NhcCc7XHJcbmltcG9ydCBUaXBweSBmcm9tICdAdGlwcHlqcy9yZWFjdCc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuXHJcbmNvbnN0IFRpcHB5TW9uc3RlciA9ICh7XHJcbiAgY29udGVudENsYXNzLFxyXG4gIGNvbnRlbnRUZXh0LFxyXG4gIGNvbnRlbnRUZXh0MSxcclxuICBzdGFydHVwcyxcclxuICBtYXJrZXQsXHJcbiAgbW9kZWwsXHJcbiAgc3VjY2VzcyxcclxuICB0aXBweU1vbnN0ZXIsXHJcbiAgc2V0VGlwcHlNb25zdGVyLFxyXG4gIHNldEN1cnJlbnRUaXBweSxcclxuICBlbXB0eUlucHV0LFxyXG4gIGluaXRpYWxNb2RhbCxcclxuICB2aXNpb24sXHJcbiAgcHJvZHVjdCxcclxuICBmaW5hbmNlcyxcclxuICB3ZWxjb21lXHJcbn0pID0+IHtcclxuICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgY29udGVudFJlZiA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCB0aXBweVJlZiA9IHVzZVJlZigpO1xyXG5cclxuICAvLyBjb25zdCBbZW1wdHlJbnB1dCwgc2V0RW1wdHlJbnB1dF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IHNob3cgPSAoKSA9PiB7XHJcbiAgICBnc2FwLmZyb21UbyhcclxuICAgICAgdGlwcHlSZWYuY3VycmVudCxcclxuICAgICAgeyBhdXRvQWxwaGE6IDAsIHNjYWxlOiAwIH0sXHJcbiAgICAgIHsgYXV0b0FscGhhOiAxLCBzY2FsZTogMSwgZHVyYXRpb246IDEsIHRyYW5zZm9ybU9yaWdpbjogJ2JvdHRvbSByaWdodCcsIGVhc2U6IFBvd2VyNC5lYXNlT3V0IH1cclxuICAgICk7XHJcbiAgICBzZXRWaXNpYmxlKHRydWUpO1xyXG4gICAgZW1wdHlJbnB1dCAmJiBzZXRDdXJyZW50VGlwcHkodHJ1ZSk7IC8vIGN1cnJlbnQgdGlwcHkgamVzdCBjesSZxZtjacSFIG9ic8WCdWdpIHByb2JsZW11LCBraWVkeSBtYW15IG90d2FydGVnbyB0b29sdGlwYSBub3JtYWxuZWdvIGkgd2Npc2thbXksIMW8ZWJ5IHd5xZt3aWV0bGnEhyBjemVyd29uZWdvXHJcbiAgfTtcclxuICBjb25zdCBoaWRlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgYXdhaXQgZ3NhcC50byh0aXBweVJlZi5jdXJyZW50LCB7XHJcbiAgICAgIGF1dG9BbHBoYTogMCxcclxuICAgICAgc2NhbGU6IDAsXHJcbiAgICAgIGR1cmF0aW9uOiAxLFxyXG4gICAgICB0cmFuc2Zvcm1PcmlnaW46ICdib3R0b20gcmlnaHQnLFxyXG4gICAgICBlYXNlOiBQb3dlcjQuZWFzZUluLFxyXG4gICAgfSk7XHJcbiAgICBlbXB0eUlucHV0ICYmIHNldFRpcHB5TW9uc3RlcihmYWxzZSk7XHJcbiAgICBzZXRWaXNpYmxlKGZhbHNlKTtcclxuICAgIGVtcHR5SW5wdXQgJiYgc2V0Q3VycmVudFRpcHB5KGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkltYWdlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBpZiAoIXRpcHB5TW9uc3Rlcikge1xyXG4gICAgICB2aXNpYmxlID8gaGlkZSgpIDogc2hvdygpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBHU0FQXHJcbiAgICBnc2FwLmZyb21UbyhcclxuICAgICAgY29udGVudFJlZi5jdXJyZW50LFxyXG4gICAgICB7IGF1dG9BbHBoYTogMCB9LFxyXG4gICAgICB7IGF1dG9BbHBoYTogMSwgZHVyYXRpb246IDIsIHRyYW5zZm9ybU9yaWdpbjogJ2JvdHRvbSByaWdodCcsIGVhc2U6IFBvd2VyNC5lYXNlT3V0IH1cclxuICAgICk7XHJcbiAgICAvLyBUSVBQWVxyXG4gICAgc2V0VmlzaWJsZSh0cnVlKTtcclxuICAgIGVtcHR5SW5wdXQgJiYgc2V0Q3VycmVudFRpcHB5KHRydWUpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc29sZS5sb2coJ3RtIC0gJywgdGlwcHlNb25zdGVyKTtcclxuICBjb25zb2xlLmxvZygndmlzaWJsZSAtICcsIHZpc2libGUpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFRpcHB5XHJcbiAgICAgIC8vIHRyaWdnZXI9e3RpcHB5TW9uc3Rlcn1cclxuICAgICAgekluZGV4PXt2aXNpYmxlIHx8IHRpcHB5TW9uc3RlciA/IDIyIDogMH1cclxuICAgICAgb25TaG93PXtzaG93fVxyXG4gICAgICBhbmltYXRpb249J2ZhZGUnXHJcbiAgICAgIGR1cmF0aW9uPXs1MDB9XHJcbiAgICAgIHRvdWNoPXt0cnVlfVxyXG4gICAgICB2aXNpYmxlPXt2aXNpYmxlIHx8IHRpcHB5TW9uc3Rlcn1cclxuICAgICAgb25DbGlja091dHNpZGU9e2hpZGV9XHJcbiAgICAgIG9mZnNldD17bWFya2V0IHx8IG1vZGVsIHx8IHN1Y2Nlc3MgfHwgdGlwcHlNb25zdGVyID8gWy0yNjUsIC02NV0gOiBbLTIyMCwgLTY1XX1cclxuICAgICAgLy8gcGxhY2VtZW50PSdsZWZ0LWVuZCdcclxuICAgICAgaW50ZXJhY3RpdmU9e3RydWV9XHJcbiAgICAgIGNvbnRlbnQ9e1xyXG4gICAgICAgIHRpcHB5TW9uc3RlciA/IChcclxuICAgICAgICAgIDxkaXYgcmVmPXt0aXBweVJlZn0gY2xhc3NOYW1lPSdoLTEyIHctOTYgc2hhZG93LWxnIHJvdW5kZWQtMnhsIGJnLXJlZCBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBmb2N1czpvdXRsaW5lLW5vbmUnPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtcHJpbWFyeWRhcmsgcHktNCBweC0yIHRleHQtc20gdGV4dC1jZW50ZXIgdGV4dC13aGl0ZSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlcic+XHJcbiAgICAgICAgICAgIE9vcHMsIHlvdSBoYXZlIHRvIHByb3ZpZGUgYWxsIHRoZSBpbmZvcm1hdGlvblxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgc3JjPScvZW1vamlzL2NyeWluZy5zdmcnXHJcbiAgICAgICAgICAgICAgaGVpZ2h0PXsyNX1cclxuICAgICAgICAgICAgICB3aWR0aD17MjV9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdpbmxpbmUtYmxvY2sgcmVsYXRpdmUnXHJcbiAgICAgICAgICAvPi5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZmxleC13cmFwIGdhcC0yIG10LTInPjwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxkaXYgcmVmPXt0aXBweVJlZn0gY2xhc3NOYW1lPXtgZm9jdXM6b3V0bGluZS1ub25lICR7Y29udGVudENsYXNzfWB9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1wcmltYXJ5ZGFyayBwLTQgdGV4dC1zbSB0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlJz5cclxuICAgICAgICAgICAge2NvbnRlbnRUZXh0fVxyXG4gICAgICAgICAgICB7c3RhcnR1cHMgJiYgKCA8PjxpbWcgc3JjPScvZW1vamlzL2NvY291bnQuc3ZnJyBoZWlnaHQ9ezIyfSB3aWR0aD17MjJ9IGNsYXNzTmFtZT0naW5saW5lLWJsb2NrJyAvPjxwIGNsYXNzTmFtZT0naW5saW5lLWJsb2NrJz4uPC9wPjwvPiApfVxyXG4gICAgICAgICAgICB7aW5pdGlhbE1vZGFsICYmICggPD48aW1nIHNyYz0nL2Vtb2ppcy9oYW1tZXIuc3ZnJyBoZWlnaHQ9ezIyfSB3aWR0aD17MjJ9IGNsYXNzTmFtZT0naW5saW5lLWJsb2NrJyAvPjxwIGNsYXNzTmFtZT0naW5saW5lLWJsb2NrJz4uPC9wPjwvPiApfVxyXG4gICAgICAgICAgICB7dmlzaW9uICYmICggPD48aW1nIHNyYz0nL2Vtb2ppcy9kZXNlcnQuc3ZnJyBoZWlnaHQ9ezIyfSB3aWR0aD17MjJ9IGNsYXNzTmFtZT0naW5saW5lLWJsb2NrIHJlbGF0aXZlIGJvdHRvbS0wLjUnIC8+PHAgY2xhc3NOYW1lPSdpbmxpbmUtYmxvY2snPi48L3A+PC8+ICl9XHJcbiAgICAgICAgICAgIHtwcm9kdWN0ICYmICggPD48aW1nIHNyYz0nL2Vtb2ppcy9veC5zdmcnIGhlaWdodD17MjJ9IHdpZHRoPXsyMn0gY2xhc3NOYW1lPSdpbmxpbmUtYmxvY2sgcmVsYXRpdmUgYm90dG9tLTAuNScgLz48cCBjbGFzc05hbWU9J2lubGluZS1ibG9jayc+LjwvcD48Lz4gKX1cclxuICAgICAgICAgICAge21hcmtldCAmJiAoIDw+PGltZyBzcmM9Jy9lbW9qaXMvd2hhbGUuc3ZnJyBoZWlnaHQ9ezIyfSB3aWR0aD17MjJ9IGNsYXNzTmFtZT0naW5saW5lLWJsb2NrJyAvPjxwIGNsYXNzTmFtZT0naW5saW5lLWJsb2NrJz4uPC9wPjwvPiApfVxyXG4gICAgICAgICAgICB7ZmluYW5jZXMgJiYgKCA8PjxpbWcgc3JjPScvZW1vamlzL3VuaWNvcm4uc3ZnJyBoZWlnaHQ9ezIyfSB3aWR0aD17MjJ9IGNsYXNzTmFtZT0naW5saW5lLWJsb2NrIHJlbGF0aXZlIGJvdHRvbS0wLjUnIC8+PHAgY2xhc3NOYW1lPSdpbmxpbmUtYmxvY2snPi48L3A+PC8+ICl9XHJcbiAgICAgICAgICAgIHttb2RlbCAmJiAoIDw+PGltZyBzcmM9Jy9lbW9qaXMvcGlyYXQuc3ZnJyBoZWlnaHQ9ezIyfSB3aWR0aD17MjJ9IGNsYXNzTmFtZT0naW5saW5lLWJsb2NrJyAvPjxwIGNsYXNzTmFtZT0naW5saW5lLWJsb2NrJz4uPC9wPjwvPiApfVxyXG4gICAgICAgICAgICB7c3VjY2VzcyAmJiAoIDw+PGltZyBzcmM9Jy9lbW9qaXMvc3Rhci5zdmcnIGhlaWdodD17MjJ9IHdpZHRoPXsyMn0gY2xhc3NOYW1lPSdpbmxpbmUtYmxvY2snIC8+PHAgY2xhc3NOYW1lPSdpbmxpbmUtYmxvY2snPiE8L3A+PC8+ICl9XHJcbiAgICAgICAgICAgIHt3ZWxjb21lICYmICggPD48aW1nIHNyYz0nL2dpZnMvaGVsbG8taGFuZC5naWYnIGhlaWdodD17MjJ9IHdpZHRoPXsyMn0gY2xhc3NOYW1lPSdpbmxpbmUtYmxvY2snIC8+PHAgY2xhc3NOYW1lPSdpbmxpbmUtYmxvY2snPi48L3A+PC8+ICl9XHJcbiAgICAgICAgICAgIHsvKiA8aW1nIHNyYz0nL2Vtb2ppcy9jb2NvdW50LnN2ZycgaGVpZ2h0PXsyMn0gd2lkdGg9ezIyfSBjbGFzc05hbWU9J2lubGluZS1ibG9jaycgLz4uICovfVxyXG5cclxuICAgICAgICAgICAgey8qIFRFWFQgMSAqL31cclxuICAgICAgICAgICAge2NvbnRlbnRUZXh0MSAmJiBjb250ZW50VGV4dDF9XHJcbiAgICAgICAgICAgIHtzdGFydHVwcyAmJiAoIDw+PGltZyBzcmM9Jy9lbW9qaXMvYmFsbG9vbi5zdmcnIGhlaWdodD17MjJ9IHdpZHRoPXsyMn0gY2xhc3NOYW1lPSdpbmxpbmUtYmxvY2snIC8+PHAgY2xhc3NOYW1lPSdpbmxpbmUtYmxvY2snPi48L3A+PC8+ICl9XHJcbiAgICAgICAgICAgIHt2aXNpb24gJiYgKCA8PjxpbWcgc3JjPScvZW1vamlzL2NhbWVsLnN2ZycgaGVpZ2h0PXsyMn0gd2lkdGg9ezIyfSBjbGFzc05hbWU9J2lubGluZS1ibG9jaycgLz48cCBjbGFzc05hbWU9J2lubGluZS1ibG9jayc+LjwvcD48Lz4gKX1cclxuICAgICAgICAgICAge3Byb2R1Y3QgJiYgKCA8PjxpbWcgc3JjPScvZW1vamlzL21hcC5zdmcnIGhlaWdodD17MjJ9IHdpZHRoPXsyMn0gY2xhc3NOYW1lPSdpbmxpbmUtYmxvY2snIC8+PHAgY2xhc3NOYW1lPSdpbmxpbmUtYmxvY2snPi48L3A+PC8+ICl9XHJcbiAgICAgICAgICAgIHttYXJrZXQgJiYgKCA8PjxpbWcgc3JjPScvZW1vamlzL2lzbGFuZC5zdmcnIGhlaWdodD17MjJ9IHdpZHRoPXsyMn0gY2xhc3NOYW1lPSdpbmxpbmUtYmxvY2snIC8+PHAgY2xhc3NOYW1lPSdpbmxpbmUtYmxvY2snPi48L3A+PC8+ICl9XHJcbiAgICAgICAgICAgIHtmaW5hbmNlcyAmJiAoIDw+PGltZyBzcmM9Jy9lbW9qaXMvY29uc3RydWN0aW9uLnN2ZycgaGVpZ2h0PXsyMn0gd2lkdGg9ezIyfSBjbGFzc05hbWU9J2lubGluZS1ibG9jaycgLz48cCBjbGFzc05hbWU9J2lubGluZS1ibG9jayc+LjwvcD48Lz4gKX1cclxuICAgICAgICAgICAge21vZGVsICYmICggPD48aW1nIHNyYz0nL2Vtb2ppcy9wb3BwZXIuc3ZnJyBoZWlnaHQ9ezIyfSB3aWR0aD17MjJ9IGNsYXNzTmFtZT0naW5saW5lLWJsb2NrIHJlbGF0aXZlIGJvdHRvbS0wLjUnIC8+PHAgY2xhc3NOYW1lPSdpbmxpbmUtYmxvY2snPiE8L3A+PC8+ICl9XHJcbiAgICAgICAgICAgIHt3ZWxjb21lICYmICggPD48aW1nIHNyYz0nL2dpZnMvcm9ja2V0LmdpZicgaGVpZ2h0PXsyMn0gd2lkdGg9ezIyfSBjbGFzc05hbWU9J2lubGluZS1ibG9jaycgLz48cCBjbGFzc05hbWU9J2lubGluZS1ibG9jayc+ITwvcD48Lz4gKX1cclxuICAgICAgICAgICAgey8qIDxpbWcgc3JjPScvZW1vamlzL2JhbGxvb24uc3ZnJyBoZWlnaHQ9ezIyfSB3aWR0aD17MjJ9IGNsYXNzTmFtZT0naW5saW5lLWJsb2NrJyAvPi4gKi99XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZmxleC13cmFwIGdhcC0yIG10LTInPjwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgICB9XHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaXhlZCBmbGV4IGZsZXgtd3JhcCBtLTIgYm90dG9tLTQgcmlnaHQtNCB6LTUwJz5cclxuICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgIHNyYz0nL21vbnN0ZXJzL21vbnN0ZXItdHdvLnN2ZydcclxuICAgICAgICAgIGhlaWdodD17NjZ9XHJcbiAgICAgICAgICB3aWR0aD17NjB9XHJcbiAgICAgICAgICBjbGFzc05hbWU9J2N1cnNvci1wb2ludGVyIHotNTAnXHJcbiAgICAgICAgICBvbkNsaWNrPXtvbkltYWdlQ2xpY2t9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L1RpcHB5PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUaXBweU1vbnN0ZXI7XHJcbiIsImltcG9ydCAqIGFzIGFkbWluIGZyb20gJ2ZpcmViYXNlLWFkbWluJztcclxuXHJcbmlmICghYWRtaW4uYXBwcy5sZW5ndGgpIHtcclxuICBhZG1pbi5pbml0aWFsaXplQXBwKHtcclxuICAgIGNyZWRlbnRpYWw6IGFkbWluLmNyZWRlbnRpYWwuY2VydCh7XHJcbiAgICAgIGNsaWVudF9lbWFpbDogJ2ZpcmViYXNlLWFkbWluc2RrLWVmOG1wQHNhYXMtc3RhcnR1cC1hNWEzNC5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbScsXHJcbiAgICAgIHByaXZhdGVfa2V5OlxyXG4gICAgICAgICctLS0tLUJFR0lOIFBSSVZBVEUgS0VZLS0tLS1cXG5NSUlFdkFJQkFEQU5CZ2txaGtpRzl3MEJBUUVGQUFTQ0JLWXdnZ1NpQWdFQUFvSUJBUUNsWldraW05UEtLcjUyXFxuRDBaREV1djRJVEJIVXJJL3JUcFhPWXpxSm5zNFk0YkJFUEtlMjAybzVNd01idS9lZ1dJZm1lTDVJK1JQZzZHcVxcbm5qQUZxTG1heFl2ZjB3TVdvd0RpTlZ4N1BjdWpSM2RVOEEvR1lveVRVUXBYL3F2Njc1NFN1SnhubStBQTZMa1lcXG5rdjVIdHl2UTFXWUxzQ0IyTUY1aWEvNzN3QnVIOCtVa29tWDVHSjBDRmdleGs0cUFudmhIeHR2OFdaeFgzZGxGXFxuRFh4NEV4OC91eWM5aS9JNTFEL05oRGtuQUcvczhUR2JPdXVUdTdvQm5wcDhqaXZKUk5FZitwdmphdGJ3T2g4Ulxcbjc4MlJubW53c3UwUHpJTkNjNWJvenRxbWFKRVc2cEtsOGtObG05RnZwS2N3Y1lPMklyZlJHV3dYTEY0b0s4OHpcXG5jTTNYQVpsZEFnTUJBQUVDZ2dFQUhCN1NVYnFKdHpFdVFiZFdIRmhPdTFpMU15TXB3QzdOSVFCZFo0QVVhaUZ0XFxueTB4ODI2cHdtVHNSUURucVdYdkkrWk41NWg4R2xjaE5COHV1WVgvdTBwUXN0R2pWZVJkTXNxa2M2SzA0ZnJITFxcblphc05HNDhzMUcwdVk0aWVwK0x1anNOSmdFb2R1em5XSW9uM1pxMExhNDJrdEc4RkRlTXFZUFI0bkpuU2RIb3FcXG5tM3BXZkppcitxbk1Ic2lQNVFWUmM0Z0lTVXVlSzc3Njk5RUw4ckZ5TTRkV0NiUmZpN1kwQkF1L3JrY0Zib2lQXFxuMUhIWEVKL2NWaUdLcVZITHdyc1NqY2VBNDJTUCtuQWlEVXh5THFMaFpNb2VXQU1rbzFDT1oyWE5qY0VXREJtNVxcbkNkN1JDQTBLVERQV3JjMEJoalJWd3dQdEM3UVYxWStrdWlrY3Q3YXlRUUtCZ1FEWGM1ZWk1bTBiL2hEN0RvUzVcXG5TV0N0cEtxOUJqbXQ2c3ByZnY5T015YXVDOWx5YlA2S2prWS9oUkdsWkpIMnd4TXQzM3JTK1hReDVwSmc0S1JRXFxuQ2N2a0ZyOWJydnhlL3lyVUNKaDMyc1JrM0Y2THY3Q1VGSFVCZmlnWnBmQnZqaVpQeXltR2cxS1hheTFNMzhPYVxcbmM4L2Rzem5pNXJFTGxxbGl0aEZMaXVETWZRS0JnUURFaGlrSVVrWFpVd05qZmhCVVd4RnU3Z1ZBNEdwY0paTHNcXG5sdUF0czJuTDkyTXJZRytadXgxV1prQnR4L1BRNFpaMk45aXcwekRBdEhwdUNwalZ1bFJzWnVOYkVLa1J5R29MXFxuZ3cxQWg0S1FmL2UzOEFFdEpQdllONzdNYUZ3RGwrbWFuZ3FUUVkvbXlOcXRSbWU4M2NteEJJYi8vWm14MnErSFxcblhSWFVwT1QyWVFLQmdIc000OC8vOXRVRCtFTEsrZmF3OSt4MG5hY3p4UUdWbFdKcnQvaTdzaDI1V3NuRmdtTXpcXG4rdDhRYXhHaExOUlllYjI3WTNUWFVBdW4rblltRnZJM2hpR1E5RjJ5eFNTa2E1dUtCVHArMGFnaFRFWlloc3NzXFxuRzk5c1pBNngvVzVaSzN4ck5oNURKb3FnaGREZ0ErRlV2NldKVlVoSUpWblBCSk1DRlVLbDROb3BBb0dBVjlvbFxcbm82dXJ2L0FsTnFmWFF1NkhCNUR0MWtlOEpEOUR3L0hhZTNPVjJ2RlhhcitzaEF1cW5NSVBFVVJ1a1RVWFh2ZXVcXG5MYlhyT0dvMXhOV0Y1eDFwdWgvd2lQZ1VySGRzT0lNNFBGMlhsMk10YVJPb1l2Y0NnbkRCSVgyUmpLV3ZiMGd4XFxuTUEwQitFaFh3VmdVN2RBejVxZEFkbFYzREpQWEhlc1Y1RDVtZ0dFQ2dZQjV4UjBlYWVENVVqTHNkaTkrc1FWUlxcbkp2d3JzVm1RSmpkYm9iRDZVanU3ME01aDZnQXlYWlhhalg5bmI5N3NVdG5qV1lGTFdjQ09ZdU9WYWY0KzV2WkZcXG5WYi9rK2tmbVpLUHNRSWR0OGNXdksrdFZUaWxqeEdVamYvK2NnLzZmd2NWNGpHaFBGWkRXTEJqQzVqNU9aWklaXFxuNW92RityT1hPTjdYVDk5RkRiZURGUT09XFxuLS0tLS1FTkQgUFJJVkFURSBLRVktLS0tLVxcbicsXHJcbiAgICAgIHByb2plY3RfaWQ6ICdzYWFzLXN0YXJ0dXAtYTVhMzQnLFxyXG4gICAgfSksXHJcbiAgICBkYXRhYmFzZVVSTDogJ2h0dHBzOi8vc2Fhcy1zdGFydHVwLmZpcmViYXNlaW8uY29tJyxcclxuICB9KTtcclxufVxyXG5cclxuY29uc3QgYXV0aCA9IGFkbWluLmF1dGgoKTtcclxuY29uc3QgZGIgPSBhZG1pbi5maXJlc3RvcmUoKTtcclxuXHJcbmV4cG9ydCB7IGF1dGgsIGRiIH07XHJcbiIsImltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZS9hcHAnO1xyXG5pbXBvcnQgJ2ZpcmViYXNlL2F1dGgnO1xyXG5pbXBvcnQgJ2ZpcmViYXNlL2ZpcmVzdG9yZSc7XHJcbmltcG9ydCAnZmlyZWJhc2Uvc3RvcmFnZSc7XHJcbmltcG9ydCAnZmlyZWJhc2UvZnVuY3Rpb25zJztcclxuXHJcbmlmICghZmlyZWJhc2UuYXBwcy5sZW5ndGgpIHtcclxuICBmaXJlYmFzZS5pbml0aWFsaXplQXBwKHtcclxuICAgIC8vIGFwaUtleTogJ0FJemFTeUN4X1QwRHFpeEwzQVhfUUxsLWo4WER5Z0dwOTFDLTMtUScsXHJcbiAgICAvLyBhdXRoRG9tYWluOiAnc3RhcnR1cC10ZXN0LTRkNjI1LmZpcmViYXNlYXBwLmNvbScsXHJcbiAgICAvLyBwcm9qZWN0SWQ6ICdzdGFydHVwLXRlc3QtNGQ2MjUnLFxyXG4gICAgLy8gc3RvcmFnZUJ1Y2tldDogJ3N0YXJ0dXAtdGVzdC00ZDYyNS5hcHBzcG90LmNvbScsXHJcbiAgICAvLyBtZXNzYWdpbmdTZW5kZXJJZDogJzQ3MjQxNjE1MDI0MCcsXHJcbiAgICAvLyBhcHBJZDogJzE6NDcyNDE2MTUwMjQwOndlYjpiMmExMjhhZDI3YWZmZmRkZjNlNjg1JyxcclxuICAgIGFwaUtleTogJ0FJemFTeUJPU2Z1QWY3VkFLOVllYzIwbEdyRF82YnE1TU5SbTlzRScsXHJcbiAgICBhdXRoRG9tYWluOiAnc2Fhcy1zdGFydHVwLWE1YTM0LmZpcmViYXNlYXBwLmNvbScsXHJcbiAgICBwcm9qZWN0SWQ6ICdzYWFzLXN0YXJ0dXAtYTVhMzQnLFxyXG4gICAgc3RvcmFnZUJ1Y2tldDogJ3NhYXMtc3RhcnR1cC1hNWEzNC5hcHBzcG90LmNvbScsXHJcbiAgICBtZXNzYWdpbmdTZW5kZXJJZDogJzg2NDIxNzU3NDYyNScsXHJcbiAgICBhcHBJZDogJzE6ODY0MjE3NTc0NjI1OndlYjoxOWNmNTkwMTA5ZWY1MGRkOTM1YmEwJyxcclxuICAgIG1lYXN1cmVtZW50SWQ6ICdHLVFLWkpQVEtNUzQnLFxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmaXJlYmFzZTtcclxuZXhwb3J0IGNvbnN0IGF1dGggPSBmaXJlYmFzZS5hdXRoKCk7XHJcbmV4cG9ydCBjb25zdCBkYiA9IGZpcmViYXNlLmZpcmVzdG9yZSgpO1xyXG5leHBvcnQgY29uc3Qgc3RvcmFnZSA9IGZpcmViYXNlLnN0b3JhZ2UoKTtcclxuIiwiaW1wb3J0IGZpcmViYXNlLCB7IGF1dGgsIGRiIH0gZnJvbSAnLi4vbGliL2ZpcmViYXNlJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIGNyZWF0ZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmV4cG9ydCBjb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTsgLy8gVHV0YWogbW/FvG5hIHVtaWXFm2NpxIcgZGVmYXVsdCBWYWx1ZVxyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUF1dGggPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IEF1dGhQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBbY3VycmVudFVzZXIsIHNldEN1cnJlbnRVc2VyXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVVzZXIgPSBhc3luYyAodXNlcikgPT4ge1xyXG4gICAgaWYgKHVzZXIpIHtcclxuICAgICAgLy8gY29uc29sZS5sb2coJ3VzZXIgLSAnLCB1c2VyKTtcclxuICAgICAgLy8gY29uc29sZS5sb2coJ3VzZXIgbmFtZSAtICcsIG5hbWUpO1xyXG4gICAgICBjb25zdCBmb3JtYXRlZFVzZXIgPSBhd2FpdCBmb3JtYXRVc2VyKHVzZXIpO1xyXG5cclxuICAgICAgLy8gY29uc3QgZGVjb2RlZFRva2VuID0gYXdhaXQgZmlyZWJhc2UuYXV0aCgpLmN1cnJlbnRVc2VyLmdldElkVG9rZW5SZXN1bHQoKTtcclxuICAgICAgLy8gY29uc29sZS5sb2coZGVjb2RlZFRva2VuLmNsYWltcy5zdHJpcGVSb2xlKTtcclxuXHJcbiAgICAgIGRiLmNvbGxlY3Rpb24oJ3VzZXJzJykuZG9jKHVzZXIudWlkKS5zZXQoeyBmb3JtYXRlZFVzZXIgfSwgeyBtZXJnZTogdHJ1ZSB9KTtcclxuXHJcbiAgICAgIHNldEN1cnJlbnRVc2VyKGZvcm1hdGVkVXNlcik7XHJcbiAgICAgIC8vIENvb2tpZXMuc2V0KCd0b2tlbicsIHVzZXIuemEsIHRydWUpO1xyXG4gICAgICBDb29raWVzLnNldCgndWlkJywgdXNlci51aWQpO1xyXG5cclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIHJldHVybiBmb3JtYXRlZFVzZXI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRDdXJyZW50VXNlcihmYWxzZSk7XHJcbiAgICAgIC8vIENvb2tpZXMucmVtb3ZlKCd0b2tlbicsIHVzZXIuemEpO1xyXG4gICAgICBDb29raWVzLnJlbW92ZSgndWlkJyk7XHJcblxyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNpZ25VcCA9IGFzeW5jIChlbWFpbCwgcGFzc3dvcmQpID0+IHtcclxuICAgIHJldHVybiBhd2FpdCBhdXRoLmNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiBoYW5kbGVVc2VyKHJlc3BvbnNlLnVzZXIpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbG9nSW4gPSAoZW1haWwsIHBhc3N3b3JkKSA9PiB7XHJcbiAgICByZXR1cm4gYXV0aC5zaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGxvZ091dCA9ICgpID0+IHtcclxuICAgIHJldHVybiBhdXRoLnNpZ25PdXQoKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdW5zdWJzY3JpYmUgPSBhdXRoLm9uSWRUb2tlbkNoYW5nZWQoaGFuZGxlVXNlcik7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHVuc3Vic2NyaWJlKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCB2YWx1ZSA9IHtcclxuICAgIGN1cnJlbnRVc2VyLFxyXG4gICAgc2lnblVwLFxyXG4gICAgbG9nSW4sXHJcbiAgICBsb2dPdXQsXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0U3RyaXBlUm9sZSA9IGFzeW5jICgpID0+IHtcclxuICAgIGF3YWl0IGZpcmViYXNlLmF1dGgoKS5jdXJyZW50VXNlci5nZXRJZFRva2VuKHRydWUpO1xyXG4gICAgY29uc3QgZGVjb2RlZFRva2VuID0gYXdhaXQgZmlyZWJhc2UuYXV0aCgpLmN1cnJlbnRVc2VyLmdldElkVG9rZW5SZXN1bHQoKTtcclxuICAgIHJldHVybiBkZWNvZGVkVG9rZW4uY2xhaW1zLnN0cmlwZVJvbGUgfHwgJ2ZyZWUnO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZvcm1hdFVzZXIgPSBhc3luYyAodXNlcikgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ09GRiAtICcsIHVzZXIpO1xyXG4gICAgY29uc3QgdG9rZW4gPSBhd2FpdCB1c2VyLmdldElkVG9rZW4oKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHVpZDogdXNlci51aWQsXHJcbiAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxyXG4gICAgICAvLyBuYW1lLFxyXG4gICAgICAvLyB0b2tlbjogdXNlci56YSwgLy8gdG9rZW4gSldULCBnZW5lcm93YW55IGF1dG9tYXR5Y3puaWUgcHJ6ZXogZmlyZWJhc2UgcHJ6eSB6YWvFgmFkYW5pdSBrb250YVxyXG4gICAgICBwcm92aWRlcjogdXNlci5wcm92aWRlckRhdGFbMF0ucHJvdmlkZXJJZCxcclxuICAgICAgc3RyaXBlUm9sZTogYXdhaXQgZ2V0U3RyaXBlUm9sZSgpLFxyXG4gICAgICB0b2tlbixcclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17dmFsdWV9PnshbG9hZGluZyAmJiBjaGlsZHJlbn08L0F1dGhDb250ZXh0LlByb3ZpZGVyPjtcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL2hlYWQnXG5pbXBvcnQgeyB0b0Jhc2U2NCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0J1xuaW1wb3J0IHtcbiAgSW1hZ2VDb25maWcsXG4gIGltYWdlQ29uZmlnRGVmYXVsdCxcbiAgTG9hZGVyVmFsdWUsXG4gIFZBTElEX0xPQURFUlMsXG59IGZyb20gJy4uL25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcnXG5pbXBvcnQgeyB1c2VJbnRlcnNlY3Rpb24gfSBmcm9tICcuL3VzZS1pbnRlcnNlY3Rpb24nXG5cbmlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICA7KGdsb2JhbCBhcyBhbnkpLl9fTkVYVF9JTUFHRV9JTVBPUlRFRCA9IHRydWVcbn1cblxuY29uc3QgVkFMSURfTE9BRElOR19WQUxVRVMgPSBbJ2xhenknLCAnZWFnZXInLCB1bmRlZmluZWRdIGFzIGNvbnN0XG50eXBlIExvYWRpbmdWYWx1ZSA9IHR5cGVvZiBWQUxJRF9MT0FESU5HX1ZBTFVFU1tudW1iZXJdXG5cbmV4cG9ydCB0eXBlIEltYWdlTG9hZGVyID0gKHJlc29sdmVyUHJvcHM6IEltYWdlTG9hZGVyUHJvcHMpID0+IHN0cmluZ1xuXG5leHBvcnQgdHlwZSBJbWFnZUxvYWRlclByb3BzID0ge1xuICBzcmM6IHN0cmluZ1xuICB3aWR0aDogbnVtYmVyXG4gIHF1YWxpdHk/OiBudW1iZXJcbn1cblxudHlwZSBEZWZhdWx0SW1hZ2VMb2FkZXJQcm9wcyA9IEltYWdlTG9hZGVyUHJvcHMgJiB7IHJvb3Q6IHN0cmluZyB9XG5cbmNvbnN0IGxvYWRlcnMgPSBuZXcgTWFwPFxuICBMb2FkZXJWYWx1ZSxcbiAgKHByb3BzOiBEZWZhdWx0SW1hZ2VMb2FkZXJQcm9wcykgPT4gc3RyaW5nXG4+KFtcbiAgWydpbWdpeCcsIGltZ2l4TG9hZGVyXSxcbiAgWydjbG91ZGluYXJ5JywgY2xvdWRpbmFyeUxvYWRlcl0sXG4gIFsnYWthbWFpJywgYWthbWFpTG9hZGVyXSxcbiAgWydkZWZhdWx0JywgZGVmYXVsdExvYWRlcl0sXG5dKVxuXG5jb25zdCBWQUxJRF9MQVlPVVRfVkFMVUVTID0gW1xuICAnZmlsbCcsXG4gICdmaXhlZCcsXG4gICdpbnRyaW5zaWMnLFxuICAncmVzcG9uc2l2ZScsXG4gIHVuZGVmaW5lZCxcbl0gYXMgY29uc3RcbnR5cGUgTGF5b3V0VmFsdWUgPSB0eXBlb2YgVkFMSURfTEFZT1VUX1ZBTFVFU1tudW1iZXJdXG5cbnR5cGUgSW1nRWxlbWVudFN0eWxlID0gTm9uTnVsbGFibGU8SlNYLkludHJpbnNpY0VsZW1lbnRzWydpbWcnXVsnc3R5bGUnXT5cblxuZXhwb3J0IHR5cGUgSW1hZ2VQcm9wcyA9IE9taXQ8XG4gIEpTWC5JbnRyaW5zaWNFbGVtZW50c1snaW1nJ10sXG4gICdzcmMnIHwgJ3NyY1NldCcgfCAncmVmJyB8ICd3aWR0aCcgfCAnaGVpZ2h0JyB8ICdsb2FkaW5nJyB8ICdzdHlsZSdcbj4gJiB7XG4gIHNyYzogc3RyaW5nXG4gIGxvYWRlcj86IEltYWdlTG9hZGVyXG4gIHF1YWxpdHk/OiBudW1iZXIgfCBzdHJpbmdcbiAgcHJpb3JpdHk/OiBib29sZWFuXG4gIGxvYWRpbmc/OiBMb2FkaW5nVmFsdWVcbiAgdW5vcHRpbWl6ZWQ/OiBib29sZWFuXG4gIG9iamVjdEZpdD86IEltZ0VsZW1lbnRTdHlsZVsnb2JqZWN0Rml0J11cbiAgb2JqZWN0UG9zaXRpb24/OiBJbWdFbGVtZW50U3R5bGVbJ29iamVjdFBvc2l0aW9uJ11cbn0gJiAoXG4gICAgfCB7XG4gICAgICAgIHdpZHRoPzogbmV2ZXJcbiAgICAgICAgaGVpZ2h0PzogbmV2ZXJcbiAgICAgICAgLyoqIEBkZXByZWNhdGVkIFVzZSBgbGF5b3V0PVwiZmlsbFwiYCBpbnN0ZWFkICovXG4gICAgICAgIHVuc2l6ZWQ6IHRydWVcbiAgICAgIH1cbiAgICB8IHsgd2lkdGg/OiBuZXZlcjsgaGVpZ2h0PzogbmV2ZXI7IGxheW91dDogJ2ZpbGwnIH1cbiAgICB8IHtcbiAgICAgICAgd2lkdGg6IG51bWJlciB8IHN0cmluZ1xuICAgICAgICBoZWlnaHQ6IG51bWJlciB8IHN0cmluZ1xuICAgICAgICBsYXlvdXQ/OiBFeGNsdWRlPExheW91dFZhbHVlLCAnZmlsbCc+XG4gICAgICB9XG4gIClcblxuY29uc3Qge1xuICBkZXZpY2VTaXplczogY29uZmlnRGV2aWNlU2l6ZXMsXG4gIGltYWdlU2l6ZXM6IGNvbmZpZ0ltYWdlU2l6ZXMsXG4gIGxvYWRlcjogY29uZmlnTG9hZGVyLFxuICBwYXRoOiBjb25maWdQYXRoLFxuICBkb21haW5zOiBjb25maWdEb21haW5zLFxufSA9XG4gICgocHJvY2Vzcy5lbnYuX19ORVhUX0lNQUdFX09QVFMgYXMgYW55KSBhcyBJbWFnZUNvbmZpZykgfHwgaW1hZ2VDb25maWdEZWZhdWx0XG4vLyBzb3J0IHNtYWxsZXN0IHRvIGxhcmdlc3RcbmNvbnN0IGFsbFNpemVzID0gWy4uLmNvbmZpZ0RldmljZVNpemVzLCAuLi5jb25maWdJbWFnZVNpemVzXVxuY29uZmlnRGV2aWNlU2l6ZXMuc29ydCgoYSwgYikgPT4gYSAtIGIpXG5hbGxTaXplcy5zb3J0KChhLCBiKSA9PiBhIC0gYilcblxuZnVuY3Rpb24gZ2V0V2lkdGhzKFxuICB3aWR0aDogbnVtYmVyIHwgdW5kZWZpbmVkLFxuICBsYXlvdXQ6IExheW91dFZhbHVlLFxuICBzaXplczogc3RyaW5nIHwgdW5kZWZpbmVkXG4pOiB7IHdpZHRoczogbnVtYmVyW107IGtpbmQ6ICd3JyB8ICd4JyB9IHtcbiAgaWYgKHNpemVzICYmIChsYXlvdXQgPT09ICdmaWxsJyB8fCBsYXlvdXQgPT09ICdyZXNwb25zaXZlJykpIHtcbiAgICAvLyBGaW5kIGFsbCB0aGUgXCJ2d1wiIHBlcmNlbnQgc2l6ZXMgdXNlZCBpbiB0aGUgc2l6ZXMgcHJvcFxuICAgIGNvbnN0IHBlcmNlbnRTaXplcyA9IFsuLi5zaXplcy5tYXRjaEFsbCgvKF58XFxzKSgxP1xcZD9cXGQpdncvZyldLm1hcCgobSkgPT5cbiAgICAgIHBhcnNlSW50KG1bMl0pXG4gICAgKVxuICAgIGlmIChwZXJjZW50U2l6ZXMubGVuZ3RoKSB7XG4gICAgICBjb25zdCBzbWFsbGVzdFJhdGlvID0gTWF0aC5taW4oLi4ucGVyY2VudFNpemVzKSAqIDAuMDFcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdpZHRoczogYWxsU2l6ZXMuZmlsdGVyKFxuICAgICAgICAgIChzKSA9PiBzID49IGNvbmZpZ0RldmljZVNpemVzWzBdICogc21hbGxlc3RSYXRpb1xuICAgICAgICApLFxuICAgICAgICBraW5kOiAndycsXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7IHdpZHRoczogYWxsU2l6ZXMsIGtpbmQ6ICd3JyB9XG4gIH1cbiAgaWYgKFxuICAgIHR5cGVvZiB3aWR0aCAhPT0gJ251bWJlcicgfHxcbiAgICBsYXlvdXQgPT09ICdmaWxsJyB8fFxuICAgIGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnXG4gICkge1xuICAgIHJldHVybiB7IHdpZHRoczogY29uZmlnRGV2aWNlU2l6ZXMsIGtpbmQ6ICd3JyB9XG4gIH1cblxuICBjb25zdCB3aWR0aHMgPSBbXG4gICAgLi4ubmV3IFNldChcbiAgICAgIC8vID4gVGhpcyBtZWFucyB0aGF0IG1vc3QgT0xFRCBzY3JlZW5zIHRoYXQgc2F5IHRoZXkgYXJlIDN4IHJlc29sdXRpb24sXG4gICAgICAvLyA+IGFyZSBhY3R1YWxseSAzeCBpbiB0aGUgZ3JlZW4gY29sb3IsIGJ1dCBvbmx5IDEuNXggaW4gdGhlIHJlZCBhbmRcbiAgICAgIC8vID4gYmx1ZSBjb2xvcnMuIFNob3dpbmcgYSAzeCByZXNvbHV0aW9uIGltYWdlIGluIHRoZSBhcHAgdnMgYSAyeFxuICAgICAgLy8gPiByZXNvbHV0aW9uIGltYWdlIHdpbGwgYmUgdmlzdWFsbHkgdGhlIHNhbWUsIHRob3VnaCB0aGUgM3ggaW1hZ2VcbiAgICAgIC8vID4gdGFrZXMgc2lnbmlmaWNhbnRseSBtb3JlIGRhdGEuIEV2ZW4gdHJ1ZSAzeCByZXNvbHV0aW9uIHNjcmVlbnMgYXJlXG4gICAgICAvLyA+IHdhc3RlZnVsIGFzIHRoZSBodW1hbiBleWUgY2Fubm90IHNlZSB0aGF0IGxldmVsIG9mIGRldGFpbCB3aXRob3V0XG4gICAgICAvLyA+IHNvbWV0aGluZyBsaWtlIGEgbWFnbmlmeWluZyBnbGFzcy5cbiAgICAgIC8vIGh0dHBzOi8vYmxvZy50d2l0dGVyLmNvbS9lbmdpbmVlcmluZy9lbl91cy90b3BpY3MvaW5mcmFzdHJ1Y3R1cmUvMjAxOS9jYXBwaW5nLWltYWdlLWZpZGVsaXR5LW9uLXVsdHJhLWhpZ2gtcmVzb2x1dGlvbi1kZXZpY2VzLmh0bWxcbiAgICAgIFt3aWR0aCwgd2lkdGggKiAyIC8qLCB3aWR0aCAqIDMqL10ubWFwKFxuICAgICAgICAodykgPT4gYWxsU2l6ZXMuZmluZCgocCkgPT4gcCA+PSB3KSB8fCBhbGxTaXplc1thbGxTaXplcy5sZW5ndGggLSAxXVxuICAgICAgKVxuICAgICksXG4gIF1cbiAgcmV0dXJuIHsgd2lkdGhzLCBraW5kOiAneCcgfVxufVxuXG50eXBlIEdlbkltZ0F0dHJzRGF0YSA9IHtcbiAgc3JjOiBzdHJpbmdcbiAgdW5vcHRpbWl6ZWQ6IGJvb2xlYW5cbiAgbGF5b3V0OiBMYXlvdXRWYWx1ZVxuICBsb2FkZXI6IEltYWdlTG9hZGVyXG4gIHdpZHRoPzogbnVtYmVyXG4gIHF1YWxpdHk/OiBudW1iZXJcbiAgc2l6ZXM/OiBzdHJpbmdcbn1cblxudHlwZSBHZW5JbWdBdHRyc1Jlc3VsdCA9IHtcbiAgc3JjOiBzdHJpbmdcbiAgc3JjU2V0OiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgc2l6ZXM6IHN0cmluZyB8IHVuZGVmaW5lZFxufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUltZ0F0dHJzKHtcbiAgc3JjLFxuICB1bm9wdGltaXplZCxcbiAgbGF5b3V0LFxuICB3aWR0aCxcbiAgcXVhbGl0eSxcbiAgc2l6ZXMsXG4gIGxvYWRlcixcbn06IEdlbkltZ0F0dHJzRGF0YSk6IEdlbkltZ0F0dHJzUmVzdWx0IHtcbiAgaWYgKHVub3B0aW1pemVkKSB7XG4gICAgcmV0dXJuIHsgc3JjLCBzcmNTZXQ6IHVuZGVmaW5lZCwgc2l6ZXM6IHVuZGVmaW5lZCB9XG4gIH1cblxuICBjb25zdCB7IHdpZHRocywga2luZCB9ID0gZ2V0V2lkdGhzKHdpZHRoLCBsYXlvdXQsIHNpemVzKVxuICBjb25zdCBsYXN0ID0gd2lkdGhzLmxlbmd0aCAtIDFcblxuICByZXR1cm4ge1xuICAgIHNpemVzOiAhc2l6ZXMgJiYga2luZCA9PT0gJ3cnID8gJzEwMHZ3JyA6IHNpemVzLFxuICAgIHNyY1NldDogd2lkdGhzXG4gICAgICAubWFwKFxuICAgICAgICAodywgaSkgPT5cbiAgICAgICAgICBgJHtsb2FkZXIoeyBzcmMsIHF1YWxpdHksIHdpZHRoOiB3IH0pfSAke1xuICAgICAgICAgICAga2luZCA9PT0gJ3cnID8gdyA6IGkgKyAxXG4gICAgICAgICAgfSR7a2luZH1gXG4gICAgICApXG4gICAgICAuam9pbignLCAnKSxcblxuICAgIC8vIEl0J3MgaW50ZW5kZWQgdG8ga2VlcCBgc3JjYCB0aGUgbGFzdCBhdHRyaWJ1dGUgYmVjYXVzZSBSZWFjdCB1cGRhdGVzXG4gICAgLy8gYXR0cmlidXRlcyBpbiBvcmRlci4gSWYgd2Uga2VlcCBgc3JjYCB0aGUgZmlyc3Qgb25lLCBTYWZhcmkgd2lsbFxuICAgIC8vIGltbWVkaWF0ZWx5IHN0YXJ0IHRvIGZldGNoIGBzcmNgLCBiZWZvcmUgYHNpemVzYCBhbmQgYHNyY1NldGAgYXJlIGV2ZW5cbiAgICAvLyB1cGRhdGVkIGJ5IFJlYWN0LiBUaGF0IGNhdXNlcyBtdWx0aXBsZSB1bm5lY2Vzc2FyeSByZXF1ZXN0cyBpZiBgc3JjU2V0YFxuICAgIC8vIGFuZCBgc2l6ZXNgIGFyZSBkZWZpbmVkLlxuICAgIC8vIFRoaXMgYnVnIGNhbm5vdCBiZSByZXByb2R1Y2VkIGluIENocm9tZSBvciBGaXJlZm94LlxuICAgIHNyYzogbG9hZGVyKHsgc3JjLCBxdWFsaXR5LCB3aWR0aDogd2lkdGhzW2xhc3RdIH0pLFxuICB9XG59XG5cbmZ1bmN0aW9uIGdldEludCh4OiB1bmtub3duKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgaWYgKHR5cGVvZiB4ID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiB4XG4gIH1cbiAgaWYgKHR5cGVvZiB4ID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBwYXJzZUludCh4LCAxMClcbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkXG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRJbWFnZUxvYWRlcihsb2FkZXJQcm9wczogSW1hZ2VMb2FkZXJQcm9wcykge1xuICBjb25zdCBsb2FkID0gbG9hZGVycy5nZXQoY29uZmlnTG9hZGVyKVxuICBpZiAobG9hZCkge1xuICAgIHJldHVybiBsb2FkKHsgcm9vdDogY29uZmlnUGF0aCwgLi4ubG9hZGVyUHJvcHMgfSlcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgYFVua25vd24gXCJsb2FkZXJcIiBmb3VuZCBpbiBcIm5leHQuY29uZmlnLmpzXCIuIEV4cGVjdGVkOiAke1ZBTElEX0xPQURFUlMuam9pbihcbiAgICAgICcsICdcbiAgICApfS4gUmVjZWl2ZWQ6ICR7Y29uZmlnTG9hZGVyfWBcbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbWFnZSh7XG4gIHNyYyxcbiAgc2l6ZXMsXG4gIHVub3B0aW1pemVkID0gZmFsc2UsXG4gIHByaW9yaXR5ID0gZmFsc2UsXG4gIGxvYWRpbmcsXG4gIGNsYXNzTmFtZSxcbiAgcXVhbGl0eSxcbiAgd2lkdGgsXG4gIGhlaWdodCxcbiAgb2JqZWN0Rml0LFxuICBvYmplY3RQb3NpdGlvbixcbiAgbG9hZGVyID0gZGVmYXVsdEltYWdlTG9hZGVyLFxuICAuLi5hbGxcbn06IEltYWdlUHJvcHMpIHtcbiAgbGV0IHJlc3Q6IFBhcnRpYWw8SW1hZ2VQcm9wcz4gPSBhbGxcbiAgbGV0IGxheW91dDogTm9uTnVsbGFibGU8TGF5b3V0VmFsdWU+ID0gc2l6ZXMgPyAncmVzcG9uc2l2ZScgOiAnaW50cmluc2ljJ1xuICBsZXQgdW5zaXplZCA9IGZhbHNlXG4gIGlmICgndW5zaXplZCcgaW4gcmVzdCkge1xuICAgIHVuc2l6ZWQgPSBCb29sZWFuKHJlc3QudW5zaXplZClcbiAgICAvLyBSZW1vdmUgcHJvcGVydHkgc28gaXQncyBub3Qgc3ByZWFkIGludG8gaW1hZ2U6XG4gICAgZGVsZXRlIHJlc3RbJ3Vuc2l6ZWQnXVxuICB9IGVsc2UgaWYgKCdsYXlvdXQnIGluIHJlc3QpIHtcbiAgICAvLyBPdmVycmlkZSBkZWZhdWx0IGxheW91dCBpZiB0aGUgdXNlciBzcGVjaWZpZWQgb25lOlxuICAgIGlmIChyZXN0LmxheW91dCkgbGF5b3V0ID0gcmVzdC5sYXlvdXRcblxuICAgIC8vIFJlbW92ZSBwcm9wZXJ0eSBzbyBpdCdzIG5vdCBzcHJlYWQgaW50byBpbWFnZTpcbiAgICBkZWxldGUgcmVzdFsnbGF5b3V0J11cbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKCFzcmMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIGlzIG1pc3NpbmcgcmVxdWlyZWQgXCJzcmNcIiBwcm9wZXJ0eS4gTWFrZSBzdXJlIHlvdSBwYXNzIFwic3JjXCIgaW4gcHJvcHMgdG8gdGhlIFxcYG5leHQvaW1hZ2VcXGAgY29tcG9uZW50LiBSZWNlaXZlZDogJHtKU09OLnN0cmluZ2lmeShcbiAgICAgICAgICB7IHdpZHRoLCBoZWlnaHQsIHF1YWxpdHkgfVxuICAgICAgICApfWBcbiAgICAgIClcbiAgICB9XG4gICAgaWYgKCFWQUxJRF9MQVlPVVRfVkFMVUVTLmluY2x1ZGVzKGxheW91dCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJsYXlvdXRcIiBwcm9wZXJ0eS4gUHJvdmlkZWQgXCIke2xheW91dH1cIiBzaG91bGQgYmUgb25lIG9mICR7VkFMSURfTEFZT1VUX1ZBTFVFUy5tYXAoXG4gICAgICAgICAgU3RyaW5nXG4gICAgICAgICkuam9pbignLCcpfS5gXG4gICAgICApXG4gICAgfVxuICAgIGlmICghVkFMSURfTE9BRElOR19WQUxVRVMuaW5jbHVkZXMobG9hZGluZykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJsb2FkaW5nXCIgcHJvcGVydHkuIFByb3ZpZGVkIFwiJHtsb2FkaW5nfVwiIHNob3VsZCBiZSBvbmUgb2YgJHtWQUxJRF9MT0FESU5HX1ZBTFVFUy5tYXAoXG4gICAgICAgICAgU3RyaW5nXG4gICAgICAgICkuam9pbignLCcpfS5gXG4gICAgICApXG4gICAgfVxuICAgIGlmIChwcmlvcml0eSAmJiBsb2FkaW5nID09PSAnbGF6eScpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGJvdGggXCJwcmlvcml0eVwiIGFuZCBcImxvYWRpbmc9J2xhenknXCIgcHJvcGVydGllcy4gT25seSBvbmUgc2hvdWxkIGJlIHVzZWQuYFxuICAgICAgKVxuICAgIH1cbiAgICBpZiAodW5zaXplZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgZGVwcmVjYXRlZCBcInVuc2l6ZWRcIiBwcm9wZXJ0eSwgd2hpY2ggd2FzIHJlbW92ZWQgaW4gZmF2b3Igb2YgdGhlIFwibGF5b3V0PSdmaWxsJ1wiIHByb3BlcnR5YFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGxldCBpc0xhenkgPVxuICAgICFwcmlvcml0eSAmJiAobG9hZGluZyA9PT0gJ2xhenknIHx8IHR5cGVvZiBsb2FkaW5nID09PSAndW5kZWZpbmVkJylcbiAgaWYgKHNyYyAmJiBzcmMuc3RhcnRzV2l0aCgnZGF0YTonKSkge1xuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUVFAvQmFzaWNzX29mX0hUVFAvRGF0YV9VUklzXG4gICAgdW5vcHRpbWl6ZWQgPSB0cnVlXG4gICAgaXNMYXp5ID0gZmFsc2VcbiAgfVxuXG4gIGNvbnN0IFtzZXRSZWYsIGlzSW50ZXJzZWN0ZWRdID0gdXNlSW50ZXJzZWN0aW9uPEhUTUxJbWFnZUVsZW1lbnQ+KHtcbiAgICByb290TWFyZ2luOiAnMjAwcHgnLFxuICAgIGRpc2FibGVkOiAhaXNMYXp5LFxuICB9KVxuICBjb25zdCBpc1Zpc2libGUgPSAhaXNMYXp5IHx8IGlzSW50ZXJzZWN0ZWRcblxuICBjb25zdCB3aWR0aEludCA9IGdldEludCh3aWR0aClcbiAgY29uc3QgaGVpZ2h0SW50ID0gZ2V0SW50KGhlaWdodClcbiAgY29uc3QgcXVhbGl0eUludCA9IGdldEludChxdWFsaXR5KVxuXG4gIGxldCB3cmFwcGVyU3R5bGU6IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snZGl2J11bJ3N0eWxlJ10gfCB1bmRlZmluZWRcbiAgbGV0IHNpemVyU3R5bGU6IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snZGl2J11bJ3N0eWxlJ10gfCB1bmRlZmluZWRcbiAgbGV0IHNpemVyU3ZnOiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgbGV0IGltZ1N0eWxlOiBJbWdFbGVtZW50U3R5bGUgfCB1bmRlZmluZWQgPSB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiAwLFxuICAgIGxlZnQ6IDAsXG4gICAgYm90dG9tOiAwLFxuICAgIHJpZ2h0OiAwLFxuXG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgcGFkZGluZzogMCxcbiAgICBib3JkZXI6ICdub25lJyxcbiAgICBtYXJnaW46ICdhdXRvJyxcblxuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgd2lkdGg6IDAsXG4gICAgaGVpZ2h0OiAwLFxuICAgIG1pbldpZHRoOiAnMTAwJScsXG4gICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICBtaW5IZWlnaHQ6ICcxMDAlJyxcbiAgICBtYXhIZWlnaHQ6ICcxMDAlJyxcblxuICAgIG9iamVjdEZpdCxcbiAgICBvYmplY3RQb3NpdGlvbixcbiAgfVxuICBpZiAoXG4gICAgdHlwZW9mIHdpZHRoSW50ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIHR5cGVvZiBoZWlnaHRJbnQgIT09ICd1bmRlZmluZWQnICYmXG4gICAgbGF5b3V0ICE9PSAnZmlsbCdcbiAgKSB7XG4gICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiAvPlxuICAgIGNvbnN0IHF1b3RpZW50ID0gaGVpZ2h0SW50IC8gd2lkdGhJbnRcbiAgICBjb25zdCBwYWRkaW5nVG9wID0gaXNOYU4ocXVvdGllbnQpID8gJzEwMCUnIDogYCR7cXVvdGllbnQgKiAxMDB9JWBcbiAgICBpZiAobGF5b3V0ID09PSAncmVzcG9uc2l2ZScpIHtcbiAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwicmVzcG9uc2l2ZVwiIC8+XG4gICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG5cbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgIG1hcmdpbjogMCxcbiAgICAgIH1cbiAgICAgIHNpemVyU3R5bGUgPSB7IGRpc3BsYXk6ICdibG9jaycsIGJveFNpemluZzogJ2JvcmRlci1ib3gnLCBwYWRkaW5nVG9wIH1cbiAgICB9IGVsc2UgaWYgKGxheW91dCA9PT0gJ2ludHJpbnNpYycpIHtcbiAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwiaW50cmluc2ljXCIgLz5cbiAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICBtYXJnaW46IDAsXG4gICAgICB9XG4gICAgICBzaXplclN0eWxlID0ge1xuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgIH1cbiAgICAgIHNpemVyU3ZnID0gYDxzdmcgd2lkdGg9XCIke3dpZHRoSW50fVwiIGhlaWdodD1cIiR7aGVpZ2h0SW50fVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2ZXJzaW9uPVwiMS4xXCIvPmBcbiAgICB9IGVsc2UgaWYgKGxheW91dCA9PT0gJ2ZpeGVkJykge1xuICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJmaXhlZFwiIC8+XG4gICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgd2lkdGg6IHdpZHRoSW50LFxuICAgICAgICBoZWlnaHQ6IGhlaWdodEludCxcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAoXG4gICAgdHlwZW9mIHdpZHRoSW50ID09PSAndW5kZWZpbmVkJyAmJlxuICAgIHR5cGVvZiBoZWlnaHRJbnQgPT09ICd1bmRlZmluZWQnICYmXG4gICAgbGF5b3V0ID09PSAnZmlsbCdcbiAgKSB7XG4gICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgbGF5b3V0PVwiZmlsbFwiIC8+XG4gICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcblxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICB0b3A6IDAsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgYm90dG9tOiAwLFxuICAgICAgcmlnaHQ6IDAsXG5cbiAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgbWFyZ2luOiAwLFxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiAvPlxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIG11c3QgdXNlIFwid2lkdGhcIiBhbmQgXCJoZWlnaHRcIiBwcm9wZXJ0aWVzIG9yIFwibGF5b3V0PSdmaWxsJ1wiIHByb3BlcnR5LmBcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBsZXQgaW1nQXR0cmlidXRlczogR2VuSW1nQXR0cnNSZXN1bHQgPSB7XG4gICAgc3JjOlxuICAgICAgJ2RhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEFRQUJBSUFBQUFBQUFQLy8veUg1QkFFQUFBQUFMQUFBQUFBQkFBRUFBQUlCUkFBNycsXG4gICAgc3JjU2V0OiB1bmRlZmluZWQsXG4gICAgc2l6ZXM6IHVuZGVmaW5lZCxcbiAgfVxuXG4gIGlmIChpc1Zpc2libGUpIHtcbiAgICBpbWdBdHRyaWJ1dGVzID0gZ2VuZXJhdGVJbWdBdHRycyh7XG4gICAgICBzcmMsXG4gICAgICB1bm9wdGltaXplZCxcbiAgICAgIGxheW91dCxcbiAgICAgIHdpZHRoOiB3aWR0aEludCxcbiAgICAgIHF1YWxpdHk6IHF1YWxpdHlJbnQsXG4gICAgICBzaXplcyxcbiAgICAgIGxvYWRlcixcbiAgICB9KVxuICB9XG5cbiAgaWYgKHVuc2l6ZWQpIHtcbiAgICB3cmFwcGVyU3R5bGUgPSB1bmRlZmluZWRcbiAgICBzaXplclN0eWxlID0gdW5kZWZpbmVkXG4gICAgaW1nU3R5bGUgPSB1bmRlZmluZWRcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3dyYXBwZXJTdHlsZX0+XG4gICAgICB7c2l6ZXJTdHlsZSA/IChcbiAgICAgICAgPGRpdiBzdHlsZT17c2l6ZXJTdHlsZX0+XG4gICAgICAgICAge3NpemVyU3ZnID8gKFxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAsXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgYXJpYS1oaWRkZW49e3RydWV9XG4gICAgICAgICAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxuICAgICAgICAgICAgICBzcmM9e2BkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LCR7dG9CYXNlNjQoc2l6ZXJTdmcpfWB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiBudWxsfVxuICAgICAgeyFpc1Zpc2libGUgJiYgKFxuICAgICAgICA8bm9zY3JpcHQ+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgICAgICB7Li4uZ2VuZXJhdGVJbWdBdHRycyh7XG4gICAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgICAgdW5vcHRpbWl6ZWQsXG4gICAgICAgICAgICAgIGxheW91dCxcbiAgICAgICAgICAgICAgd2lkdGg6IHdpZHRoSW50LFxuICAgICAgICAgICAgICBxdWFsaXR5OiBxdWFsaXR5SW50LFxuICAgICAgICAgICAgICBzaXplcyxcbiAgICAgICAgICAgICAgbG9hZGVyLFxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICBzcmM9e3NyY31cbiAgICAgICAgICAgIGRlY29kaW5nPVwiYXN5bmNcIlxuICAgICAgICAgICAgc2l6ZXM9e3NpemVzfVxuICAgICAgICAgICAgc3R5bGU9e2ltZ1N0eWxlfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9ub3NjcmlwdD5cbiAgICAgICl9XG4gICAgICA8aW1nXG4gICAgICAgIHsuLi5yZXN0fVxuICAgICAgICB7Li4uaW1nQXR0cmlidXRlc31cbiAgICAgICAgZGVjb2Rpbmc9XCJhc3luY1wiXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICByZWY9e3NldFJlZn1cbiAgICAgICAgc3R5bGU9e2ltZ1N0eWxlfVxuICAgICAgLz5cbiAgICAgIHtwcmlvcml0eSA/IChcbiAgICAgICAgLy8gTm90ZSBob3cgd2Ugb21pdCB0aGUgYGhyZWZgIGF0dHJpYnV0ZSwgYXMgaXQgd291bGQgb25seSBiZSByZWxldmFudFxuICAgICAgICAvLyBmb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBgaW1hZ2VzcmNzZXRgLCBhbmQgaW4gdGhvc2UgY2FzZXNcbiAgICAgICAgLy8gaXQgd291bGQgbGlrZWx5IGNhdXNlIHRoZSBpbmNvcnJlY3QgaW1hZ2UgdG8gYmUgcHJlbG9hZGVkLlxuICAgICAgICAvL1xuICAgICAgICAvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9zZW1hbnRpY3MuaHRtbCNhdHRyLWxpbmstaW1hZ2VzcmNzZXRcbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgIGtleT17XG4gICAgICAgICAgICAgICdfX25pbWctJyArXG4gICAgICAgICAgICAgIGltZ0F0dHJpYnV0ZXMuc3JjICtcbiAgICAgICAgICAgICAgaW1nQXR0cmlidXRlcy5zcmNTZXQgK1xuICAgICAgICAgICAgICBpbWdBdHRyaWJ1dGVzLnNpemVzXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZWw9XCJwcmVsb2FkXCJcbiAgICAgICAgICAgIGFzPVwiaW1hZ2VcIlxuICAgICAgICAgICAgaHJlZj17aW1nQXR0cmlidXRlcy5zcmNTZXQgPyB1bmRlZmluZWQgOiBpbWdBdHRyaWJ1dGVzLnNyY31cbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmU6IGltYWdlc3Jjc2V0IGlzIG5vdCB5ZXQgaW4gdGhlIGxpbmsgZWxlbWVudCB0eXBlXG4gICAgICAgICAgICBpbWFnZXNyY3NldD17aW1nQXR0cmlidXRlcy5zcmNTZXR9XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlOiBpbWFnZXNpemVzIGlzIG5vdCB5ZXQgaW4gdGhlIGxpbmsgZWxlbWVudCB0eXBlXG4gICAgICAgICAgICBpbWFnZXNpemVzPXtpbWdBdHRyaWJ1dGVzLnNpemVzfVxuICAgICAgICAgID48L2xpbms+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICkgOiBudWxsfVxuICAgIDwvZGl2PlxuICApXG59XG5cbi8vQlVJTFQgSU4gTE9BREVSU1xuXG5mdW5jdGlvbiBub3JtYWxpemVTcmMoc3JjOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gc3JjWzBdID09PSAnLycgPyBzcmMuc2xpY2UoMSkgOiBzcmNcbn1cblxuZnVuY3Rpb24gaW1naXhMb2FkZXIoe1xuICByb290LFxuICBzcmMsXG4gIHdpZHRoLFxuICBxdWFsaXR5LFxufTogRGVmYXVsdEltYWdlTG9hZGVyUHJvcHMpOiBzdHJpbmcge1xuICAvLyBEZW1vOiBodHRwczovL3N0YXRpYy5pbWdpeC5uZXQvZGFpc3kucG5nP2Zvcm1hdD1hdXRvJmZpdD1tYXgmdz0zMDBcbiAgY29uc3QgcGFyYW1zID0gWydhdXRvPWZvcm1hdCcsICdmaXQ9bWF4JywgJ3c9JyArIHdpZHRoXVxuICBsZXQgcGFyYW1zU3RyaW5nID0gJydcbiAgaWYgKHF1YWxpdHkpIHtcbiAgICBwYXJhbXMucHVzaCgncT0nICsgcXVhbGl0eSlcbiAgfVxuXG4gIGlmIChwYXJhbXMubGVuZ3RoKSB7XG4gICAgcGFyYW1zU3RyaW5nID0gJz8nICsgcGFyYW1zLmpvaW4oJyYnKVxuICB9XG4gIHJldHVybiBgJHtyb290fSR7bm9ybWFsaXplU3JjKHNyYyl9JHtwYXJhbXNTdHJpbmd9YFxufVxuXG5mdW5jdGlvbiBha2FtYWlMb2FkZXIoeyByb290LCBzcmMsIHdpZHRoIH06IERlZmF1bHRJbWFnZUxvYWRlclByb3BzKTogc3RyaW5nIHtcbiAgcmV0dXJuIGAke3Jvb3R9JHtub3JtYWxpemVTcmMoc3JjKX0/aW13aWR0aD0ke3dpZHRofWBcbn1cblxuZnVuY3Rpb24gY2xvdWRpbmFyeUxvYWRlcih7XG4gIHJvb3QsXG4gIHNyYyxcbiAgd2lkdGgsXG4gIHF1YWxpdHksXG59OiBEZWZhdWx0SW1hZ2VMb2FkZXJQcm9wcyk6IHN0cmluZyB7XG4gIC8vIERlbW86IGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2RlbW8vaW1hZ2UvdXBsb2FkL3dfMzAwLGNfbGltaXQscV9hdXRvL3R1cnRsZXMuanBnXG4gIGNvbnN0IHBhcmFtcyA9IFsnZl9hdXRvJywgJ2NfbGltaXQnLCAnd18nICsgd2lkdGgsICdxXycgKyAocXVhbGl0eSB8fCAnYXV0bycpXVxuICBsZXQgcGFyYW1zU3RyaW5nID0gcGFyYW1zLmpvaW4oJywnKSArICcvJ1xuICByZXR1cm4gYCR7cm9vdH0ke3BhcmFtc1N0cmluZ30ke25vcm1hbGl6ZVNyYyhzcmMpfWBcbn1cblxuZnVuY3Rpb24gZGVmYXVsdExvYWRlcih7XG4gIHJvb3QsXG4gIHNyYyxcbiAgd2lkdGgsXG4gIHF1YWxpdHksXG59OiBEZWZhdWx0SW1hZ2VMb2FkZXJQcm9wcyk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbWlzc2luZ1ZhbHVlcyA9IFtdXG5cbiAgICAvLyB0aGVzZSBzaG91bGQgYWx3YXlzIGJlIHByb3ZpZGVkIGJ1dCBtYWtlIHN1cmUgdGhleSBhcmVcbiAgICBpZiAoIXNyYykgbWlzc2luZ1ZhbHVlcy5wdXNoKCdzcmMnKVxuICAgIGlmICghd2lkdGgpIG1pc3NpbmdWYWx1ZXMucHVzaCgnd2lkdGgnKVxuXG4gICAgaWYgKG1pc3NpbmdWYWx1ZXMubGVuZ3RoID4gMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgTmV4dCBJbWFnZSBPcHRpbWl6YXRpb24gcmVxdWlyZXMgJHttaXNzaW5nVmFsdWVzLmpvaW4oXG4gICAgICAgICAgJywgJ1xuICAgICAgICApfSB0byBiZSBwcm92aWRlZC4gTWFrZSBzdXJlIHlvdSBwYXNzIHRoZW0gYXMgcHJvcHMgdG8gdGhlIFxcYG5leHQvaW1hZ2VcXGAgY29tcG9uZW50LiBSZWNlaXZlZDogJHtKU09OLnN0cmluZ2lmeShcbiAgICAgICAgICB7IHNyYywgd2lkdGgsIHF1YWxpdHkgfVxuICAgICAgICApfWBcbiAgICAgIClcbiAgICB9XG5cbiAgICBpZiAoc3JjLnN0YXJ0c1dpdGgoJy8vJykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCB0byBwYXJzZSBzcmMgXCIke3NyY31cIiBvbiBcXGBuZXh0L2ltYWdlXFxgLCBwcm90b2NvbC1yZWxhdGl2ZSBVUkwgKC8vKSBtdXN0IGJlIGNoYW5nZWQgdG8gYW4gYWJzb2x1dGUgVVJMIChodHRwOi8vIG9yIGh0dHBzOi8vKWBcbiAgICAgIClcbiAgICB9XG5cbiAgICBpZiAoIXNyYy5zdGFydHNXaXRoKCcvJykgJiYgY29uZmlnRG9tYWlucykge1xuICAgICAgbGV0IHBhcnNlZFNyYzogVVJMXG4gICAgICB0cnkge1xuICAgICAgICBwYXJzZWRTcmMgPSBuZXcgVVJMKHNyYylcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBGYWlsZWQgdG8gcGFyc2Ugc3JjIFwiJHtzcmN9XCIgb24gXFxgbmV4dC9pbWFnZVxcYCwgaWYgdXNpbmcgcmVsYXRpdmUgaW1hZ2UgaXQgbXVzdCBzdGFydCB3aXRoIGEgbGVhZGluZyBzbGFzaCBcIi9cIiBvciBiZSBhbiBhYnNvbHV0ZSBVUkwgKGh0dHA6Ly8gb3IgaHR0cHM6Ly8pYFxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGlmICghY29uZmlnRG9tYWlucy5pbmNsdWRlcyhwYXJzZWRTcmMuaG9zdG5hbWUpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgSW52YWxpZCBzcmMgcHJvcCAoJHtzcmN9KSBvbiBcXGBuZXh0L2ltYWdlXFxgLCBob3N0bmFtZSBcIiR7cGFyc2VkU3JjLmhvc3RuYW1lfVwiIGlzIG5vdCBjb25maWd1cmVkIHVuZGVyIGltYWdlcyBpbiB5b3VyIFxcYG5leHQuY29uZmlnLmpzXFxgXFxuYCArXG4gICAgICAgICAgICBgU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbmV4dC1pbWFnZS11bmNvbmZpZ3VyZWQtaG9zdGBcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBgJHtyb290fT91cmw9JHtlbmNvZGVVUklDb21wb25lbnQoc3JjKX0mdz0ke3dpZHRofSZxPSR7cXVhbGl0eSB8fCA3NX1gXG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4sIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgYWRkQmFzZVBhdGgsXG4gIGFkZExvY2FsZSxcbiAgZ2V0RG9tYWluTG9jYWxlLFxuICBpc0xvY2FsVVJMLFxuICBOZXh0Um91dGVyLFxuICBQcmVmZXRjaE9wdGlvbnMsXG4gIHJlc29sdmVIcmVmLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuaW1wb3J0IHsgdXNlSW50ZXJzZWN0aW9uIH0gZnJvbSAnLi91c2UtaW50ZXJzZWN0aW9uJ1xuXG50eXBlIFVybCA9IHN0cmluZyB8IFVybE9iamVjdFxudHlwZSBSZXF1aXJlZEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IG5ldmVyIDogS1xufVtrZXlvZiBUXVxudHlwZSBPcHRpb25hbEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IEsgOiBuZXZlclxufVtrZXlvZiBUXVxuXG5leHBvcnQgdHlwZSBMaW5rUHJvcHMgPSB7XG4gIGhyZWY6IFVybFxuICBhcz86IFVybFxuICByZXBsYWNlPzogYm9vbGVhblxuICBzY3JvbGw/OiBib29sZWFuXG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIHBhc3NIcmVmPzogYm9vbGVhblxuICBwcmVmZXRjaD86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbn1cbnR5cGUgTGlua1Byb3BzUmVxdWlyZWQgPSBSZXF1aXJlZEtleXM8TGlua1Byb3BzPlxudHlwZSBMaW5rUHJvcHNPcHRpb25hbCA9IE9wdGlvbmFsS2V5czxMaW5rUHJvcHM+XG5cbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBwcmVmZXRjaChcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIG9wdGlvbnM/OiBQcmVmZXRjaE9wdGlvbnNcbik6IHZvaWQge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgIXJvdXRlcikgcmV0dXJuXG4gIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycikgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH0pXG4gIGNvbnN0IGN1ckxvY2FsZSA9XG4gICAgb3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgIT09ICd1bmRlZmluZWQnXG4gICAgICA/IG9wdGlvbnMubG9jYWxlXG4gICAgICA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlXG5cbiAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXSA9IHRydWVcbn1cblxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50KTogYm9vbGVhbiB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50XG4gIHJldHVybiAoXG4gICAgKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgZXZlbnQubWV0YUtleSB8fFxuICAgIGV2ZW50LmN0cmxLZXkgfHxcbiAgICBldmVudC5zaGlmdEtleSB8fFxuICAgIGV2ZW50LmFsdEtleSB8fCAvLyB0cmlnZ2VycyByZXNvdXJjZSBkb3dubG9hZFxuICAgIChldmVudC5uYXRpdmVFdmVudCAmJiBldmVudC5uYXRpdmVFdmVudC53aGljaCA9PT0gMilcbiAgKVxufVxuXG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChcbiAgZTogUmVhY3QuTW91c2VFdmVudCxcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIHJlcGxhY2U/OiBib29sZWFuLFxuICBzaGFsbG93PzogYm9vbGVhbixcbiAgc2Nyb2xsPzogYm9vbGVhbixcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbik6IHZvaWQge1xuICBjb25zdCB7IG5vZGVOYW1lIH0gPSBlLmN1cnJlbnRUYXJnZXRcblxuICBpZiAobm9kZU5hbWUgPT09ICdBJyAmJiAoaXNNb2RpZmllZEV2ZW50KGUpIHx8ICFpc0xvY2FsVVJMKGhyZWYpKSkge1xuICAgIC8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxuICAgIHJldHVyblxuICB9XG5cbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gIGlmIChzY3JvbGwgPT0gbnVsbCkge1xuICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgfVxuXG4gIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHtcbiAgICBzaGFsbG93LFxuICAgIGxvY2FsZSxcbiAgICBzY3JvbGwsXG4gIH0pXG59XG5cbmZ1bmN0aW9uIExpbmsocHJvcHM6IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPExpbmtQcm9wcz4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJnczoge1xuICAgICAga2V5OiBzdHJpbmdcbiAgICAgIGV4cGVjdGVkOiBzdHJpbmdcbiAgICAgIGFjdHVhbDogc3RyaW5nXG4gICAgfSkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmAgK1xuICAgICAgICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgPyBcIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCJcbiAgICAgICAgICAgIDogJycpXG4gICAgICApXG4gICAgfVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCByZXF1aXJlZFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNSZXF1aXJlZCwgdHJ1ZT4gPSB7XG4gICAgICBocmVmOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCByZXF1aXJlZFByb3BzOiBMaW5rUHJvcHNSZXF1aXJlZFtdID0gT2JqZWN0LmtleXMoXG4gICAgICByZXF1aXJlZFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc1JlcXVpcmVkW11cbiAgICByZXF1aXJlZFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzUmVxdWlyZWQpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdocmVmJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSA9PSBudWxsIHx8XG4gICAgICAgICAgKHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCcpXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogcHJvcHNba2V5XSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCBvcHRpb25hbFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNPcHRpb25hbCwgdHJ1ZT4gPSB7XG4gICAgICBhczogdHJ1ZSxcbiAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICBzY3JvbGw6IHRydWUsXG4gICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgcGFzc0hyZWY6IHRydWUsXG4gICAgICBwcmVmZXRjaDogdHJ1ZSxcbiAgICAgIGxvY2FsZTogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wczogTGlua1Byb3BzT3B0aW9uYWxbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgb3B0aW9uYWxQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNPcHRpb25hbFtdXG4gICAgb3B0aW9uYWxQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc09wdGlvbmFsKSA9PiB7XG4gICAgICBjb25zdCB2YWxUeXBlID0gdHlwZW9mIHByb3BzW2tleV1cblxuICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJyAmJiB2YWxUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2xvY2FsZScpIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAga2V5ID09PSAncmVwbGFjZScgfHxcbiAgICAgICAga2V5ID09PSAnc2Nyb2xsJyB8fFxuICAgICAgICBrZXkgPT09ICdzaGFsbG93JyB8fFxuICAgICAgICBrZXkgPT09ICdwYXNzSHJlZicgfHxcbiAgICAgICAga2V5ID09PSAncHJlZmV0Y2gnXG4gICAgICApIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gIT0gbnVsbCAmJiB2YWxUeXBlICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBjb25zdCBoYXNXYXJuZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpXG4gICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgIClcbiAgICB9XG4gIH1cbiAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHBhdGhuYW1lID0gKHJvdXRlciAmJiByb3V0ZXIucGF0aG5hbWUpIHx8ICcvJ1xuXG4gIGNvbnN0IHsgaHJlZiwgYXMgfSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmhyZWYsIHRydWUpXG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgIGFzOiBwcm9wcy5hc1xuICAgICAgICA/IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5hcylcbiAgICAgICAgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZixcbiAgICB9XG4gIH0sIFtwYXRobmFtZSwgcHJvcHMuaHJlZiwgcHJvcHMuYXNdKVxuXG4gIGxldCB7IGNoaWxkcmVuLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSB9ID0gcHJvcHNcblxuICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICBjaGlsZHJlbiA9IDxhPntjaGlsZHJlbn08L2E+XG4gIH1cblxuICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgY29uc3QgY2hpbGQ6IGFueSA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gIGNvbnN0IGNoaWxkUmVmOiBhbnkgPSBjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZlxuXG4gIGNvbnN0IFtzZXRJbnRlcnNlY3Rpb25SZWYsIGlzVmlzaWJsZV0gPSB1c2VJbnRlcnNlY3Rpb24oe1xuICAgIHJvb3RNYXJnaW46ICcyMDBweCcsXG4gIH0pXG4gIGNvbnN0IHNldFJlZiA9IFJlYWN0LnVzZUNhbGxiYWNrKFxuICAgIChlbDogRWxlbWVudCkgPT4ge1xuICAgICAgc2V0SW50ZXJzZWN0aW9uUmVmKGVsKVxuICAgICAgaWYgKGNoaWxkUmVmKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkUmVmKGVsKVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY2hpbGRSZWYuY3VycmVudCA9IGVsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFtjaGlsZFJlZiwgc2V0SW50ZXJzZWN0aW9uUmVmXVxuICApXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc2hvdWxkUHJlZmV0Y2ggPSBpc1Zpc2libGUgJiYgcCAmJiBpc0xvY2FsVVJMKGhyZWYpXG4gICAgY29uc3QgY3VyTG9jYWxlID1cbiAgICAgIHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGVcbiAgICBjb25zdCBpc1ByZWZldGNoZWQgPVxuICAgICAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXVxuICAgIGlmIChzaG91bGRQcmVmZXRjaCAmJiAhaXNQcmVmZXRjaGVkKSB7XG4gICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7XG4gICAgICAgIGxvY2FsZTogY3VyTG9jYWxlLFxuICAgICAgfSlcbiAgICB9XG4gIH0sIFthcywgaHJlZiwgaXNWaXNpYmxlLCBsb2NhbGUsIHAsIHJvdXRlcl0pXG5cbiAgY29uc3QgY2hpbGRQcm9wczoge1xuICAgIG9uTW91c2VFbnRlcj86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBocmVmPzogc3RyaW5nXG4gICAgcmVmPzogYW55XG4gIH0gPSB7XG4gICAgcmVmOiBzZXRSZWYsXG4gICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICB9XG4gICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSlcbiAgICAgIH1cbiAgICB9LFxuICB9XG5cbiAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKVxuICAgIH1cbiAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7IHByaW9yaXR5OiB0cnVlIH0pXG4gIH1cblxuICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gIGlmIChwcm9wcy5wYXNzSHJlZiB8fCAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkpIHtcbiAgICBjb25zdCBjdXJMb2NhbGUgPVxuICAgICAgdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZVxuXG4gICAgLy8gd2Ugb25seSByZW5kZXIgZG9tYWluIGxvY2FsZXMgaWYgd2UgYXJlIGN1cnJlbnRseSBvbiBhIGRvbWFpbiBsb2NhbGVcbiAgICAvLyBzbyB0aGF0IGxvY2FsZSBsaW5rcyBhcmUgc3RpbGwgdmlzaXRhYmxlIGluIGRldmVsb3BtZW50L3ByZXZpZXcgZW52c1xuICAgIGNvbnN0IGxvY2FsZURvbWFpbiA9XG4gICAgICByb3V0ZXIgJiZcbiAgICAgIHJvdXRlci5pc0xvY2FsZURvbWFpbiAmJlxuICAgICAgZ2V0RG9tYWluTG9jYWxlKFxuICAgICAgICBhcyxcbiAgICAgICAgY3VyTG9jYWxlLFxuICAgICAgICByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZXMsXG4gICAgICAgIHJvdXRlciAmJiByb3V0ZXIuZG9tYWluTG9jYWxlc1xuICAgICAgKVxuXG4gICAgY2hpbGRQcm9wcy5ocmVmID1cbiAgICAgIGxvY2FsZURvbWFpbiB8fFxuICAgICAgYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGFzLCBjdXJMb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIuZGVmYXVsdExvY2FsZSkpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCIvKipcbiAqIFJlbW92ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBpZiB0aGVyZSBpcyBvbmUuIFByZXNlcnZlcyB0aGUgcm9vdCBwYXRoIGAvYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoXG59XG5cbi8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIXG4gID8gKHBhdGg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpXG4gICAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gcGF0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLydcbiAgICAgIH1cbiAgICB9XG4gIDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2hcbiIsInR5cGUgUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSA9IGFueVxudHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrT3B0aW9ucyA9IHtcbiAgdGltZW91dDogbnVtYmVyXG59XG50eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSA9IHtcbiAgcmVhZG9ubHkgZGlkVGltZW91dDogYm9vbGVhblxuICB0aW1lUmVtYWluaW5nOiAoKSA9PiBudW1iZXJcbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICByZXF1ZXN0SWRsZUNhbGxiYWNrOiAoXG4gICAgICBjYWxsYmFjazogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWQsXG4gICAgICBvcHRzPzogUmVxdWVzdElkbGVDYWxsYmFja09wdGlvbnNcbiAgICApID0+IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGVcbiAgICBjYW5jZWxJZGxlQ2FsbGJhY2s6IChpZDogUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSkgPT4gdm9pZFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrID1cbiAgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2spIHx8XG4gIGZ1bmN0aW9uIChcbiAgICBjYjogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWRcbiAgKTogTm9kZUpTLlRpbWVvdXQge1xuICAgIGxldCBzdGFydCA9IERhdGUubm93KClcbiAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBjYih7XG4gICAgICAgIGRpZFRpbWVvdXQ6IGZhbHNlLFxuICAgICAgICB0aW1lUmVtYWluaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIE1hdGgubWF4KDAsIDUwIC0gKERhdGUubm93KCkgLSBzdGFydCkpXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgIH0sIDEpXG4gIH1cblxuZXhwb3J0IGNvbnN0IGNhbmNlbElkbGVDYWxsYmFjayA9XG4gICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2spIHx8XG4gIGZ1bmN0aW9uIChpZDogUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSkge1xuICAgIHJldHVybiBjbGVhclRpbWVvdXQoaWQpXG4gIH1cbiIsImltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IENsaWVudEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9idWlsZC93ZWJwYWNrL3BsdWdpbnMvYnVpbGQtbWFuaWZlc3QtcGx1Z2luJ1xuaW1wb3J0IGdldEFzc2V0UGF0aEZyb21Sb3V0ZSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUnXG5pbXBvcnQgeyByZXF1ZXN0SWRsZUNhbGxiYWNrIH0gZnJvbSAnLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2snXG5cbi8vIDMuOHMgd2FzIGFyYml0cmFyaWx5IGNob3NlbiBhcyBpdCdzIHdoYXQgaHR0cHM6Ly93ZWIuZGV2L2ludGVyYWN0aXZlXG4vLyBjb25zaWRlcnMgYXMgXCJHb29kXCIgdGltZS10by1pbnRlcmFjdGl2ZS4gV2UgbXVzdCBhc3N1bWUgc29tZXRoaW5nIHdlbnRcbi8vIHdyb25nIGJleW9uZCB0aGlzIHBvaW50LCBhbmQgdGhlbiBmYWxsLWJhY2sgdG8gYSBmdWxsIHBhZ2UgdHJhbnNpdGlvbiB0b1xuLy8gc2hvdyB0aGUgdXNlciBzb21ldGhpbmcgb2YgdmFsdWUuXG5jb25zdCBNU19NQVhfSURMRV9ERUxBWSA9IDM4MDBcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBfX0JVSUxEX01BTklGRVNUPzogQ2xpZW50QnVpbGRNYW5pZmVzdFxuICAgIF9fQlVJTERfTUFOSUZFU1RfQ0I/OiBGdW5jdGlvblxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkRW50cnlwb2ludFN1Y2Nlc3Mge1xuICBjb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgZXhwb3J0czogYW55XG59XG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZEVudHJ5cG9pbnRGYWlsdXJlIHtcbiAgZXJyb3I6IHVua25vd25cbn1cbmV4cG9ydCB0eXBlIFJvdXRlRW50cnlwb2ludCA9IExvYWRlZEVudHJ5cG9pbnRTdWNjZXNzIHwgTG9hZGVkRW50cnlwb2ludEZhaWx1cmVcblxuZXhwb3J0IGludGVyZmFjZSBSb3V0ZVN0eWxlU2hlZXQge1xuICBocmVmOiBzdHJpbmdcbiAgY29udGVudDogc3RyaW5nXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkUm91dGVTdWNjZXNzIGV4dGVuZHMgTG9hZGVkRW50cnlwb2ludFN1Y2Nlc3Mge1xuICBzdHlsZXM6IFJvdXRlU3R5bGVTaGVldFtdXG59XG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZFJvdXRlRmFpbHVyZSB7XG4gIGVycm9yOiB1bmtub3duXG59XG5leHBvcnQgdHlwZSBSb3V0ZUxvYWRlckVudHJ5ID0gTG9hZGVkUm91dGVTdWNjZXNzIHwgTG9hZGVkUm91dGVGYWlsdXJlXG5cbmV4cG9ydCB0eXBlIEZ1dHVyZTxWPiA9IHtcbiAgcmVzb2x2ZTogKGVudHJ5cG9pbnQ6IFYpID0+IHZvaWRcbiAgZnV0dXJlOiBQcm9taXNlPFY+XG59XG5mdW5jdGlvbiB3aXRoRnV0dXJlPFQ+KFxuICBrZXk6IHN0cmluZyxcbiAgbWFwOiBNYXA8c3RyaW5nLCBGdXR1cmU8VD4gfCBUPixcbiAgZ2VuZXJhdG9yPzogKCkgPT4gUHJvbWlzZTxUPlxuKTogUHJvbWlzZTxUPiB7XG4gIGxldCBlbnRyeTogRnV0dXJlPFQ+IHwgVCB8IHVuZGVmaW5lZCA9IG1hcC5nZXQoa2V5KVxuICBpZiAoZW50cnkpIHtcbiAgICBpZiAoJ2Z1dHVyZScgaW4gZW50cnkpIHtcbiAgICAgIHJldHVybiBlbnRyeS5mdXR1cmVcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShlbnRyeSlcbiAgfVxuICBsZXQgcmVzb2x2ZXI6IChlbnRyeXBvaW50OiBUKSA9PiB2b2lkXG4gIGNvbnN0IHByb206IFByb21pc2U8VD4gPSBuZXcgUHJvbWlzZTxUPigocmVzb2x2ZSkgPT4ge1xuICAgIHJlc29sdmVyID0gcmVzb2x2ZVxuICB9KVxuICBtYXAuc2V0KGtleSwgKGVudHJ5ID0geyByZXNvbHZlOiByZXNvbHZlciEsIGZ1dHVyZTogcHJvbSB9KSlcbiAgcmV0dXJuIGdlbmVyYXRvclxuICAgID8gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgZ2VuZXJhdG9yKCkudGhlbigodmFsdWUpID0+IChyZXNvbHZlcih2YWx1ZSksIHZhbHVlKSlcbiAgICA6IHByb21cbn1cblxuZXhwb3J0IGludGVyZmFjZSBSb3V0ZUxvYWRlciB7XG4gIHdoZW5FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPFJvdXRlRW50cnlwb2ludD5cbiAgb25FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcsIGV4ZWN1dGU6ICgpID0+IHVua25vd24pOiB2b2lkXG4gIGxvYWRSb3V0ZShyb3V0ZTogc3RyaW5nLCBwcmVmZXRjaD86IGJvb2xlYW4pOiBQcm9taXNlPFJvdXRlTG9hZGVyRW50cnk+XG4gIHByZWZldGNoKHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+XG59XG5cbmZ1bmN0aW9uIGhhc1ByZWZldGNoKGxpbms/OiBIVE1MTGlua0VsZW1lbnQpOiBib29sZWFuIHtcbiAgdHJ5IHtcbiAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpXG4gICAgcmV0dXJuIChcbiAgICAgIC8vIGRldGVjdCBJRTExIHNpbmNlIGl0IHN1cHBvcnRzIHByZWZldGNoIGJ1dCBpc24ndCBkZXRlY3RlZFxuICAgICAgLy8gd2l0aCByZWxMaXN0LnN1cHBvcnRcbiAgICAgICghIXdpbmRvdy5NU0lucHV0TWV0aG9kQ29udGV4dCAmJiAhIShkb2N1bWVudCBhcyBhbnkpLmRvY3VtZW50TW9kZSkgfHxcbiAgICAgIGxpbmsucmVsTGlzdC5zdXBwb3J0cygncHJlZmV0Y2gnKVxuICAgIClcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuY29uc3QgY2FuUHJlZmV0Y2g6IGJvb2xlYW4gPSBoYXNQcmVmZXRjaCgpXG5cbmZ1bmN0aW9uIHByZWZldGNoVmlhRG9tKFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIGxpbms/OiBIVE1MTGlua0VsZW1lbnRcbik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGlua1tyZWw9XCJwcmVmZXRjaFwiXVtocmVmXj1cIiR7aHJlZn1cIl1gKSkge1xuICAgICAgcmV0dXJuIHJlcygpXG4gICAgfVxuXG4gICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKVxuXG4gICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbDpcbiAgICBpZiAoYXMpIGxpbmshLmFzID0gYXNcbiAgICBsaW5rIS5yZWwgPSBgcHJlZmV0Y2hgXG4gICAgbGluayEuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOIVxuICAgIGxpbmshLm9ubG9hZCA9IHJlc1xuICAgIGxpbmshLm9uZXJyb3IgPSByZWpcblxuICAgIC8vIGBocmVmYCBzaG91bGQgYWx3YXlzIGJlIGxhc3Q6XG4gICAgbGluayEuaHJlZiA9IGhyZWZcblxuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluaylcbiAgfSlcbn1cblxuY29uc3QgQVNTRVRfTE9BRF9FUlJPUiA9IFN5bWJvbCgnQVNTRVRfTE9BRF9FUlJPUicpXG4vLyBUT0RPOiB1bmV4cG9ydFxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtBc3NldEVycm9yKGVycjogRXJyb3IpOiBFcnJvciB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCBBU1NFVF9MT0FEX0VSUk9SLCB7fSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQXNzZXRFcnJvcihlcnI/OiBFcnJvcik6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICByZXR1cm4gZXJyICYmIEFTU0VUX0xPQURfRVJST1IgaW4gZXJyXG59XG5cbmZ1bmN0aW9uIGFwcGVuZFNjcmlwdChcbiAgc3JjOiBzdHJpbmcsXG4gIHNjcmlwdD86IEhUTUxTY3JpcHRFbGVtZW50XG4pOiBQcm9taXNlPHVua25vd24+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKVxuXG4gICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbC5cbiAgICAvLyAxLiBTZXR1cCBzdWNjZXNzL2ZhaWx1cmUgaG9va3MgaW4gY2FzZSB0aGUgYnJvd3NlciBzeW5jaHJvbm91c2x5XG4gICAgLy8gICAgZXhlY3V0ZXMgd2hlbiBgc3JjYCBpcyBzZXQuXG4gICAgc2NyaXB0Lm9ubG9hZCA9IHJlc29sdmVcbiAgICBzY3JpcHQub25lcnJvciA9ICgpID0+XG4gICAgICByZWplY3QobWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzY3JpcHQ6ICR7c3JjfWApKSlcblxuICAgIC8vIDIuIENvbmZpZ3VyZSB0aGUgY3Jvc3Mtb3JpZ2luIGF0dHJpYnV0ZSBiZWZvcmUgc2V0dGluZyBgc3JjYCBpbiBjYXNlIHRoZVxuICAgIC8vICAgIGJyb3dzZXIgYmVnaW5zIHRvIGZldGNoLlxuICAgIHNjcmlwdC5jcm9zc09yaWdpbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU4hXG5cbiAgICAvLyAzLiBGaW5hbGx5LCBzZXQgdGhlIHNvdXJjZSBhbmQgaW5qZWN0IGludG8gdGhlIERPTSBpbiBjYXNlIHRoZSBjaGlsZFxuICAgIC8vICAgIG11c3QgYmUgYXBwZW5kZWQgZm9yIGZldGNoaW5nIHRvIHN0YXJ0LlxuICAgIHNjcmlwdC5zcmMgPSBzcmNcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdClcbiAgfSlcbn1cblxuLy8gUmVzb2x2ZSBhIHByb21pc2UgdGhhdCB0aW1lcyBvdXQgYWZ0ZXIgZ2l2ZW4gYW1vdW50IG9mIG1pbGxpc2Vjb25kcy5cbmZ1bmN0aW9uIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQ8VD4oXG4gIHA6IFByb21pc2U8VD4sXG4gIG1zOiBudW1iZXIsXG4gIGVycjogRXJyb3Jcbik6IFByb21pc2U8VD4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuXG4gICAgcC50aGVuKChyKSA9PiB7XG4gICAgICAvLyBSZXNvbHZlZCwgY2FuY2VsIHRoZSB0aW1lb3V0XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgICByZXNvbHZlKHIpXG4gICAgfSkuY2F0Y2gocmVqZWN0KVxuXG4gICAgcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PlxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlmICghY2FuY2VsbGVkKSB7XG4gICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgfVxuICAgICAgfSwgbXMpXG4gICAgKVxuICB9KVxufVxuXG4vLyBUT0RPOiBzdG9wIGV4cG9ydGluZyBvciBjYWNoZSB0aGUgZmFpbHVyZVxuLy8gSXQnZCBiZSBiZXN0IHRvIHN0b3AgZXhwb3J0aW5nIHRoaXMuIEl0J3MgYW4gaW1wbGVtZW50YXRpb24gZGV0YWlsLiBXZSdyZVxuLy8gb25seSBleHBvcnRpbmcgaXQgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsdHkgd2l0aCB0aGUgYHBhZ2UtbG9hZGVyYC5cbi8vIE9ubHkgY2FjaGUgdGhpcyByZXNwb25zZSBhcyBhIGxhc3QgcmVzb3J0IGlmIHdlIGNhbm5vdCBlbGltaW5hdGUgYWxsIG90aGVyXG4vLyBjb2RlIGJyYW5jaGVzIHRoYXQgdXNlIHRoZSBCdWlsZCBNYW5pZmVzdCBDYWxsYmFjayBhbmQgcHVzaCB0aGVtIHRocm91Z2hcbi8vIHRoZSBSb3V0ZSBMb2FkZXIgaW50ZXJmYWNlLlxuZXhwb3J0IGZ1bmN0aW9uIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKTogUHJvbWlzZTxDbGllbnRCdWlsZE1hbmlmZXN0PiB7XG4gIGlmIChzZWxmLl9fQlVJTERfTUFOSUZFU1QpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVClcbiAgfVxuXG4gIGNvbnN0IG9uQnVpbGRNYW5pZmVzdDogUHJvbWlzZTxDbGllbnRCdWlsZE1hbmlmZXN0PiA9IG5ldyBQcm9taXNlPFxuICAgIENsaWVudEJ1aWxkTWFuaWZlc3RcbiAgPigocmVzb2x2ZSkgPT4ge1xuICAgIC8vIE1hbmRhdG9yeSBiZWNhdXNlIHRoaXMgaXMgbm90IGNvbmN1cnJlbnQgc2FmZTpcbiAgICBjb25zdCBjYiA9IHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQlxuICAgIHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQiA9ICgpID0+IHtcbiAgICAgIHJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUISlcbiAgICAgIGNiICYmIGNiKClcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQ8Q2xpZW50QnVpbGRNYW5pZmVzdD4oXG4gICAgb25CdWlsZE1hbmlmZXN0LFxuICAgIE1TX01BWF9JRExFX0RFTEFZLFxuICAgIG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcignRmFpbGVkIHRvIGxvYWQgY2xpZW50IGJ1aWxkIG1hbmlmZXN0JykpXG4gIClcbn1cblxuaW50ZXJmYWNlIFJvdXRlRmlsZXMge1xuICBzY3JpcHRzOiBzdHJpbmdbXVxuICBjc3M6IHN0cmluZ1tdXG59XG5mdW5jdGlvbiBnZXRGaWxlc0ZvclJvdXRlKFxuICBhc3NldFByZWZpeDogc3RyaW5nLFxuICByb3V0ZTogc3RyaW5nXG4pOiBQcm9taXNlPFJvdXRlRmlsZXM+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7XG4gICAgICBzY3JpcHRzOiBbXG4gICAgICAgIGFzc2V0UHJlZml4ICtcbiAgICAgICAgICAnL19uZXh0L3N0YXRpYy9jaHVua3MvcGFnZXMnICtcbiAgICAgICAgICBlbmNvZGVVUkkoZ2V0QXNzZXRQYXRoRnJvbVJvdXRlKHJvdXRlLCAnLmpzJykpLFxuICAgICAgXSxcbiAgICAgIC8vIFN0eWxlcyBhcmUgaGFuZGxlZCBieSBgc3R5bGUtbG9hZGVyYCBpbiBkZXZlbG9wbWVudDpcbiAgICAgIGNzczogW10sXG4gICAgfSlcbiAgfVxuICByZXR1cm4gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpLnRoZW4oKG1hbmlmZXN0KSA9PiB7XG4gICAgaWYgKCEocm91dGUgaW4gbWFuaWZlc3QpKSB7XG4gICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb29rdXAgcm91dGU6ICR7cm91dGV9YCkpXG4gICAgfVxuICAgIGNvbnN0IGFsbEZpbGVzID0gbWFuaWZlc3Rbcm91dGVdLm1hcChcbiAgICAgIChlbnRyeSkgPT4gYXNzZXRQcmVmaXggKyAnL19uZXh0LycgKyBlbmNvZGVVUkkoZW50cnkpXG4gICAgKVxuICAgIHJldHVybiB7XG4gICAgICBzY3JpcHRzOiBhbGxGaWxlcy5maWx0ZXIoKHYpID0+IHYuZW5kc1dpdGgoJy5qcycpKSxcbiAgICAgIGNzczogYWxsRmlsZXMuZmlsdGVyKCh2KSA9PiB2LmVuZHNXaXRoKCcuY3NzJykpLFxuICAgIH1cbiAgfSlcbn1cblxuZnVuY3Rpb24gY3JlYXRlUm91dGVMb2FkZXIoYXNzZXRQcmVmaXg6IHN0cmluZyk6IFJvdXRlTG9hZGVyIHtcbiAgY29uc3QgZW50cnlwb2ludHM6IE1hcDxcbiAgICBzdHJpbmcsXG4gICAgRnV0dXJlPFJvdXRlRW50cnlwb2ludD4gfCBSb3V0ZUVudHJ5cG9pbnRcbiAgPiA9IG5ldyBNYXAoKVxuICBjb25zdCBsb2FkZWRTY3JpcHRzOiBNYXA8c3RyaW5nLCBQcm9taXNlPHVua25vd24+PiA9IG5ldyBNYXAoKVxuICBjb25zdCBzdHlsZVNoZWV0czogTWFwPHN0cmluZywgUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+PiA9IG5ldyBNYXAoKVxuICBjb25zdCByb3V0ZXM6IE1hcDxcbiAgICBzdHJpbmcsXG4gICAgRnV0dXJlPFJvdXRlTG9hZGVyRW50cnk+IHwgUm91dGVMb2FkZXJFbnRyeVxuICA+ID0gbmV3IE1hcCgpXG5cbiAgZnVuY3Rpb24gbWF5YmVFeGVjdXRlU2NyaXB0KHNyYzogc3RyaW5nKTogUHJvbWlzZTx1bmtub3duPiB7XG4gICAgbGV0IHByb206IFByb21pc2U8dW5rbm93bj4gfCB1bmRlZmluZWQgPSBsb2FkZWRTY3JpcHRzLmdldChzcmMpXG4gICAgaWYgKHByb20pIHtcbiAgICAgIHJldHVybiBwcm9tXG4gICAgfVxuXG4gICAgLy8gU2tpcCBleGVjdXRpbmcgc2NyaXB0IGlmIGl0J3MgYWxyZWFkeSBpbiB0aGUgRE9NOlxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBzY3JpcHRbc3JjXj1cIiR7c3JjfVwiXWApKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgICB9XG5cbiAgICBsb2FkZWRTY3JpcHRzLnNldChzcmMsIChwcm9tID0gYXBwZW5kU2NyaXB0KHNyYykpKVxuICAgIHJldHVybiBwcm9tXG4gIH1cblxuICBmdW5jdGlvbiBmZXRjaFN0eWxlU2hlZXQoaHJlZjogc3RyaW5nKTogUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+IHtcbiAgICBsZXQgcHJvbTogUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+IHwgdW5kZWZpbmVkID0gc3R5bGVTaGVldHMuZ2V0KGhyZWYpXG4gICAgaWYgKHByb20pIHtcbiAgICAgIHJldHVybiBwcm9tXG4gICAgfVxuXG4gICAgc3R5bGVTaGVldHMuc2V0KFxuICAgICAgaHJlZixcbiAgICAgIChwcm9tID0gZmV0Y2goaHJlZilcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0eWxlc2hlZXQ6ICR7aHJlZn1gKVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcmVzLnRleHQoKS50aGVuKCh0ZXh0KSA9PiAoeyBocmVmOiBocmVmLCBjb250ZW50OiB0ZXh0IH0pKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIHRocm93IG1hcmtBc3NldEVycm9yKGVycilcbiAgICAgICAgfSkpXG4gICAgKVxuICAgIHJldHVybiBwcm9tXG4gIH1cblxuICByZXR1cm4ge1xuICAgIHdoZW5FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcpIHtcbiAgICAgIHJldHVybiB3aXRoRnV0dXJlKHJvdXRlLCBlbnRyeXBvaW50cylcbiAgICB9LFxuICAgIG9uRW50cnlwb2ludChyb3V0ZTogc3RyaW5nLCBleGVjdXRlOiAoKSA9PiB1bmtub3duKSB7XG4gICAgICBQcm9taXNlLnJlc29sdmUoZXhlY3V0ZSlcbiAgICAgICAgLnRoZW4oKGZuKSA9PiBmbigpKVxuICAgICAgICAudGhlbihcbiAgICAgICAgICAoZXhwb3J0czogYW55KSA9PiAoe1xuICAgICAgICAgICAgY29tcG9uZW50OiAoZXhwb3J0cyAmJiBleHBvcnRzLmRlZmF1bHQpIHx8IGV4cG9ydHMsXG4gICAgICAgICAgICBleHBvcnRzOiBleHBvcnRzLFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIChlcnIpID0+ICh7IGVycm9yOiBlcnIgfSlcbiAgICAgICAgKVxuICAgICAgICAudGhlbigoaW5wdXQ6IFJvdXRlRW50cnlwb2ludCkgPT4ge1xuICAgICAgICAgIGNvbnN0IG9sZCA9IGVudHJ5cG9pbnRzLmdldChyb3V0ZSlcbiAgICAgICAgICBlbnRyeXBvaW50cy5zZXQocm91dGUsIGlucHV0KVxuICAgICAgICAgIGlmIChvbGQgJiYgJ3Jlc29sdmUnIGluIG9sZCkgb2xkLnJlc29sdmUoaW5wdXQpXG4gICAgICAgIH0pXG4gICAgfSxcbiAgICBsb2FkUm91dGUocm91dGU6IHN0cmluZywgcHJlZmV0Y2g/OiBib29sZWFuKSB7XG4gICAgICByZXR1cm4gd2l0aEZ1dHVyZTxSb3V0ZUxvYWRlckVudHJ5Pihyb3V0ZSwgcm91dGVzLCAoKSA9PiB7XG4gICAgICAgIHJldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KFxuICAgICAgICAgIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKVxuICAgICAgICAgICAgLnRoZW4oKHsgc2NyaXB0cywgY3NzIH0pID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgICAgICBlbnRyeXBvaW50cy5oYXMocm91dGUpXG4gICAgICAgICAgICAgICAgICA/IFtdXG4gICAgICAgICAgICAgICAgICA6IFByb21pc2UuYWxsKHNjcmlwdHMubWFwKG1heWJlRXhlY3V0ZVNjcmlwdCkpLFxuICAgICAgICAgICAgICAgIFByb21pc2UuYWxsKGNzcy5tYXAoZmV0Y2hTdHlsZVNoZWV0KSksXG4gICAgICAgICAgICAgIF0gYXMgY29uc3QpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy53aGVuRW50cnlwb2ludChyb3V0ZSkudGhlbigoZW50cnlwb2ludCkgPT4gKHtcbiAgICAgICAgICAgICAgICBlbnRyeXBvaW50LFxuICAgICAgICAgICAgICAgIHN0eWxlczogcmVzWzFdLFxuICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgIE1TX01BWF9JRExFX0RFTEFZLFxuICAgICAgICAgIG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgUm91dGUgZGlkIG5vdCBjb21wbGV0ZSBsb2FkaW5nOiAke3JvdXRlfWApKVxuICAgICAgICApXG4gICAgICAgICAgLnRoZW4oKHsgZW50cnlwb2ludCwgc3R5bGVzIH0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlczogUm91dGVMb2FkZXJFbnRyeSA9IE9iamVjdC5hc3NpZ248XG4gICAgICAgICAgICAgIHsgc3R5bGVzOiBSb3V0ZVN0eWxlU2hlZXRbXSB9LFxuICAgICAgICAgICAgICBSb3V0ZUVudHJ5cG9pbnRcbiAgICAgICAgICAgID4oeyBzdHlsZXM6IHN0eWxlcyEgfSwgZW50cnlwb2ludClcbiAgICAgICAgICAgIHJldHVybiAnZXJyb3InIGluIGVudHJ5cG9pbnQgPyBlbnRyeXBvaW50IDogcmVzXG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgaWYgKHByZWZldGNoKSB7XG4gICAgICAgICAgICAgIC8vIHdlIGRvbid0IHdhbnQgdG8gY2FjaGUgZXJyb3JzIGR1cmluZyBwcmVmZXRjaFxuICAgICAgICAgICAgICB0aHJvdyBlcnJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7IGVycm9yOiBlcnIgfVxuICAgICAgICAgIH0pXG4gICAgICB9KVxuICAgIH0sXG4gICAgcHJlZmV0Y2gocm91dGU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZUxhYnMvcXVpY2tsaW5rL2Jsb2IvNDUzYTY2MWZhMWZhOTQwZTJkMmUwNDQ0NTIzOThlMzhjNjdhOThmYi9zcmMvaW5kZXgubWpzI0wxMTUtTDExOFxuICAgICAgLy8gTGljZW5zZTogQXBhY2hlIDIuMFxuICAgICAgbGV0IGNuXG4gICAgICBpZiAoKGNuID0gKG5hdmlnYXRvciBhcyBhbnkpLmNvbm5lY3Rpb24pKSB7XG4gICAgICAgIC8vIERvbid0IHByZWZldGNoIGlmIHVzaW5nIDJHIG9yIGlmIFNhdmUtRGF0YSBpcyBlbmFibGVkLlxuICAgICAgICBpZiAoY24uc2F2ZURhdGEgfHwgLzJnLy50ZXN0KGNuLmVmZmVjdGl2ZVR5cGUpKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgICAgIH1cbiAgICAgIHJldHVybiBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSlcbiAgICAgICAgLnRoZW4oKG91dHB1dCkgPT5cbiAgICAgICAgICBQcm9taXNlLmFsbChcbiAgICAgICAgICAgIGNhblByZWZldGNoXG4gICAgICAgICAgICAgID8gb3V0cHV0LnNjcmlwdHMubWFwKChzY3JpcHQpID0+IHByZWZldGNoVmlhRG9tKHNjcmlwdCwgJ3NjcmlwdCcpKVxuICAgICAgICAgICAgICA6IFtdXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+IHRoaXMubG9hZFJvdXRlKHJvdXRlLCB0cnVlKS5jYXRjaCgoKSA9PiB7fSkpXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChcbiAgICAgICAgICAvLyBzd2FsbG93IHByZWZldGNoIGVycm9yc1xuICAgICAgICAgICgpID0+IHt9XG4gICAgICAgIClcbiAgICB9LFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVJvdXRlTG9hZGVyXG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IFJvdXRlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQnXG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55XG5cbnR5cGUgUm91dGVyQXJncyA9IENsYXNzQXJndW1lbnRzPHR5cGVvZiBSb3V0ZXI+XG5cbnR5cGUgU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBSb3V0ZXIgfCBudWxsXG4gIHJlYWR5Q2FsbGJhY2tzOiBBcnJheTwoKSA9PiBhbnk+XG4gIHJlYWR5KGNiOiAoKSA9PiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCB7IFJvdXRlciwgTmV4dFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBOZXh0Um91dGVyXG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICdwYXRobmFtZScsXG4gICdyb3V0ZScsXG4gICdxdWVyeScsXG4gICdhc1BhdGgnLFxuICAnY29tcG9uZW50cycsXG4gICdpc0ZhbGxiYWNrJyxcbiAgJ2Jhc2VQYXRoJyxcbiAgJ2xvY2FsZScsXG4gICdsb2NhbGVzJyxcbiAgJ2RlZmF1bHRMb2NhbGUnLFxuICAnaXNSZWFkeScsXG4gICdpc1ByZXZpZXcnLFxuICAnaXNMb2NhbGVEb21haW4nLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkOiBzdHJpbmcpID0+IHtcbiAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbiAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0gYXMgc3RyaW5nXG4gICAgfSxcbiAgfSlcbn0pXG5cbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQ6IHN0cmluZykgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICA7KHNpbmdsZXRvblJvdXRlciBhcyBhbnkpW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gIH1cbn0pXG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudDogc3RyaW5nKSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogUm91dGVyIHtcbiAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICguLi5hcmdzOiBSb3V0ZXJBcmdzKTogUm91dGVyID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBSb3V0ZXIoLi4uYXJncylcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXVxuXG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyOiBSb3V0ZXIpOiBOZXh0Um91dGVyIHtcbiAgY29uc3QgX3JvdXRlciA9IHJvdXRlciBhcyBhbnlcbiAgY29uc3QgaW5zdGFuY2UgPSB7fSBhcyBhbnlcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgIEFycmF5LmlzQXJyYXkoX3JvdXRlcltwcm9wZXJ0eV0pID8gW10gOiB7fSxcbiAgICAgICAgX3JvdXRlcltwcm9wZXJ0eV1cbiAgICAgICkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gIHJlcXVlc3RJZGxlQ2FsbGJhY2ssXG4gIGNhbmNlbElkbGVDYWxsYmFjayxcbn0gZnJvbSAnLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2snXG5cbnR5cGUgVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0ID0gUGljazxJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQsICdyb290TWFyZ2luJz5cbnR5cGUgVXNlSW50ZXJzZWN0aW9uID0geyBkaXNhYmxlZD86IGJvb2xlYW4gfSAmIFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdFxudHlwZSBPYnNlcnZlQ2FsbGJhY2sgPSAoaXNWaXNpYmxlOiBib29sZWFuKSA9PiB2b2lkXG50eXBlIE9ic2VydmVyID0ge1xuICBpZDogc3RyaW5nXG4gIG9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuICBlbGVtZW50czogTWFwPEVsZW1lbnQsIE9ic2VydmVDYWxsYmFjaz5cbn1cblxuY29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSB0eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb248VCBleHRlbmRzIEVsZW1lbnQ+KHtcbiAgcm9vdE1hcmdpbixcbiAgZGlzYWJsZWQsXG59OiBVc2VJbnRlcnNlY3Rpb24pOiBbKGVsZW1lbnQ6IFQgfCBudWxsKSA9PiB2b2lkLCBib29sZWFuXSB7XG4gIGNvbnN0IGlzRGlzYWJsZWQ6IGJvb2xlYW4gPSBkaXNhYmxlZCB8fCAhaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcblxuICBjb25zdCB1bm9ic2VydmUgPSB1c2VSZWY8RnVuY3Rpb24+KClcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3Qgc2V0UmVmID0gdXNlQ2FsbGJhY2soXG4gICAgKGVsOiBUIHwgbnVsbCkgPT4ge1xuICAgICAgaWYgKHVub2JzZXJ2ZS5jdXJyZW50KSB7XG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50KClcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSB1bmRlZmluZWRcbiAgICAgIH1cblxuICAgICAgaWYgKGlzRGlzYWJsZWQgfHwgdmlzaWJsZSkgcmV0dXJuXG5cbiAgICAgIGlmIChlbCAmJiBlbC50YWdOYW1lKSB7XG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gb2JzZXJ2ZShcbiAgICAgICAgICBlbCxcbiAgICAgICAgICAoaXNWaXNpYmxlKSA9PiBpc1Zpc2libGUgJiYgc2V0VmlzaWJsZShpc1Zpc2libGUpLFxuICAgICAgICAgIHsgcm9vdE1hcmdpbiB9XG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9LFxuICAgIFtpc0Rpc2FibGVkLCByb290TWFyZ2luLCB2aXNpYmxlXVxuICApXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgICBpZiAoIXZpc2libGUpIHtcbiAgICAgICAgY29uc3QgaWRsZUNhbGxiYWNrID0gcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiBzZXRWaXNpYmxlKHRydWUpKVxuICAgICAgICByZXR1cm4gKCkgPT4gY2FuY2VsSWRsZUNhbGxiYWNrKGlkbGVDYWxsYmFjaylcbiAgICAgIH1cbiAgICB9XG4gIH0sIFt2aXNpYmxlXSlcblxuICByZXR1cm4gW3NldFJlZiwgdmlzaWJsZV1cbn1cblxuZnVuY3Rpb24gb2JzZXJ2ZShcbiAgZWxlbWVudDogRWxlbWVudCxcbiAgY2FsbGJhY2s6IE9ic2VydmVDYWxsYmFjayxcbiAgb3B0aW9uczogVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0XG4pOiAoKSA9PiB2b2lkIHtcbiAgY29uc3QgeyBpZCwgb2JzZXJ2ZXIsIGVsZW1lbnRzIH0gPSBjcmVhdGVPYnNlcnZlcihvcHRpb25zKVxuICBlbGVtZW50cy5zZXQoZWxlbWVudCwgY2FsbGJhY2spXG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KVxuICByZXR1cm4gZnVuY3Rpb24gdW5vYnNlcnZlKCk6IHZvaWQge1xuICAgIGVsZW1lbnRzLmRlbGV0ZShlbGVtZW50KVxuICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KVxuXG4gICAgLy8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuICAgIGlmIChlbGVtZW50cy5zaXplID09PSAwKSB7XG4gICAgICBvYnNlcnZlci5kaXNjb25uZWN0KClcbiAgICAgIG9ic2VydmVycy5kZWxldGUoaWQpXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IG9ic2VydmVycyA9IG5ldyBNYXA8c3RyaW5nLCBPYnNlcnZlcj4oKVxuZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIob3B0aW9uczogVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0KTogT2JzZXJ2ZXIge1xuICBjb25zdCBpZCA9IG9wdGlvbnMucm9vdE1hcmdpbiB8fCAnJ1xuICBsZXQgaW5zdGFuY2UgPSBvYnNlcnZlcnMuZ2V0KGlkKVxuICBpZiAoaW5zdGFuY2UpIHtcbiAgICByZXR1cm4gaW5zdGFuY2VcbiAgfVxuXG4gIGNvbnN0IGVsZW1lbnRzID0gbmV3IE1hcDxFbGVtZW50LCBPYnNlcnZlQ2FsbGJhY2s+KClcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICBjb25zdCBjYWxsYmFjayA9IGVsZW1lbnRzLmdldChlbnRyeS50YXJnZXQpXG4gICAgICBjb25zdCBpc1Zpc2libGUgPSBlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDBcbiAgICAgIGlmIChjYWxsYmFjayAmJiBpc1Zpc2libGUpIHtcbiAgICAgICAgY2FsbGJhY2soaXNWaXNpYmxlKVxuICAgICAgfVxuICAgIH0pXG4gIH0sIG9wdGlvbnMpXG5cbiAgb2JzZXJ2ZXJzLnNldChcbiAgICBpZCxcbiAgICAoaW5zdGFuY2UgPSB7XG4gICAgICBpZCxcbiAgICAgIG9ic2VydmVyLFxuICAgICAgZWxlbWVudHMsXG4gICAgfSlcbiAgKVxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KTogSlNYLkVsZW1lbnQge1xuICAgIHJldHVybiA8Q29tcG9zZWRDb21wb25lbnQgcm91dGVyPXt1c2VSb3V0ZXIoKX0gey4uLnByb3BzfSAvPlxuICB9XG5cbiAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbiAgOyhXaXRoUm91dGVyV3JhcHBlciBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHMgPSAoQ29tcG9zZWRDb21wb25lbnQgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbmFtZSA9XG4gICAgICBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgXG4gIH1cblxuICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXJcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVMb2NhbGVQYXRoKFxuICBwYXRobmFtZTogc3RyaW5nLFxuICBsb2NhbGVzPzogc3RyaW5nW11cbik6IHtcbiAgZGV0ZWN0ZWRMb2NhbGU/OiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xufSB7XG4gIGxldCBkZXRlY3RlZExvY2FsZTogc3RyaW5nIHwgdW5kZWZpbmVkXG4gIC8vIGZpcnN0IGl0ZW0gd2lsbCBiZSBlbXB0eSBzdHJpbmcgZnJvbSBzcGxpdHRpbmcgYXQgZmlyc3QgY2hhclxuICBjb25zdCBwYXRobmFtZVBhcnRzID0gcGF0aG5hbWUuc3BsaXQoJy8nKVxuXG4gIDsobG9jYWxlcyB8fCBbXSkuc29tZSgobG9jYWxlKSA9PiB7XG4gICAgaWYgKHBhdGhuYW1lUGFydHNbMV0udG9Mb3dlckNhc2UoKSA9PT0gbG9jYWxlLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgIGRldGVjdGVkTG9jYWxlID0gbG9jYWxlXG4gICAgICBwYXRobmFtZVBhcnRzLnNwbGljZSgxLCAxKVxuICAgICAgcGF0aG5hbWUgPSBwYXRobmFtZVBhcnRzLmpvaW4oJy8nKSB8fCAnLydcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9KVxuXG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgZGV0ZWN0ZWRMb2NhbGUsXG4gIH1cbn1cbiIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoLFxuICByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCxcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaCdcbmltcG9ydCB7IEdvb2RQYWdlQ2FjaGUsIFN0eWxlU2hlZXRUdXBsZSB9IGZyb20gJy4uLy4uLy4uL2NsaWVudC9wYWdlLWxvYWRlcidcbmltcG9ydCB7XG4gIGdldENsaWVudEJ1aWxkTWFuaWZlc3QsXG4gIGlzQXNzZXRFcnJvcixcbiAgbWFya0Fzc2V0RXJyb3IsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9yb3V0ZS1sb2FkZXInXG5pbXBvcnQgeyBEb21haW5Mb2NhbGVzIH0gZnJvbSAnLi4vLi4vc2VydmVyL2NvbmZpZydcbmltcG9ydCB7IGRlbm9ybWFsaXplUGFnZVBhdGggfSBmcm9tICcuLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoJ1xuaW1wb3J0IHsgbm9ybWFsaXplTG9jYWxlUGF0aCB9IGZyb20gJy4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoJ1xuaW1wb3J0IG1pdHQsIHsgTWl0dEVtaXR0ZXIgfSBmcm9tICcuLi9taXR0J1xuaW1wb3J0IHtcbiAgQXBwQ29udGV4dFR5cGUsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRMb2NhdGlvbk9yaWdpbixcbiAgZ2V0VVJMLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBOZXh0UGFnZUNvbnRleHQsXG4gIFNULFxuICBORVhUX0RBVEEsXG59IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgaXNEeW5hbWljUm91dGUgfSBmcm9tICcuL3V0aWxzL2lzLWR5bmFtaWMnXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi91dGlscy9xdWVyeXN0cmluZydcbmltcG9ydCByZXNvbHZlUmV3cml0ZXMgZnJvbSAnLi91dGlscy9yZXNvbHZlLXJld3JpdGVzJ1xuaW1wb3J0IHsgZ2V0Um91dGVNYXRjaGVyIH0gZnJvbSAnLi91dGlscy9yb3V0ZS1tYXRjaGVyJ1xuaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vdXRpbHMvcm91dGUtcmVnZXgnXG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgLyogcHJvZCAqL1xuICAgIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICB9XG59XG5cbmludGVyZmFjZSBSb3V0ZVByb3BlcnRpZXMge1xuICBzaGFsbG93OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBUcmFuc2l0aW9uT3B0aW9ucyB7XG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG4gIHNjcm9sbD86IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIE5leHRIaXN0b3J5U3RhdGUge1xuICB1cmw6IHN0cmluZ1xuICBhczogc3RyaW5nXG4gIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG59XG5cbnR5cGUgSGlzdG9yeVN0YXRlID1cbiAgfCBudWxsXG4gIHwgeyBfX046IGZhbHNlIH1cbiAgfCAoeyBfX046IHRydWU7IGlkeDogbnVtYmVyIH0gJiBOZXh0SGlzdG9yeVN0YXRlKVxuXG5sZXQgZGV0ZWN0RG9tYWluTG9jYWxlOiB0eXBlb2YgaW1wb3J0KCcuLi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlJykuZGV0ZWN0RG9tYWluTG9jYWxlXG5cbmlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gIGRldGVjdERvbWFpbkxvY2FsZSA9IHJlcXVpcmUoJy4uL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUnKVxuICAgIC5kZXRlY3REb21haW5Mb2NhbGVcbn1cblxuY29uc3QgYmFzZVBhdGggPSAocHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCBhcyBzdHJpbmcpIHx8ICcnXG5cbmZ1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyksIHtcbiAgICBjYW5jZWxsZWQ6IHRydWUsXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aDogc3RyaW5nLCBwcmVmaXg/OiBzdHJpbmcpIHtcbiAgcmV0dXJuIHByZWZpeCAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nKVxuICAgID8gcGF0aCA9PT0gJy8nXG4gICAgICA/IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKHByZWZpeClcbiAgICAgIDogYCR7cHJlZml4fSR7cGF0aE5vUXVlcnlIYXNoKHBhdGgpID09PSAnLycgPyBwYXRoLnN1YnN0cmluZygxKSA6IHBhdGh9YFxuICAgIDogcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RG9tYWluTG9jYWxlKFxuICBwYXRoOiBzdHJpbmcsXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlLFxuICBsb2NhbGVzPzogc3RyaW5nW10sXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICBsb2NhbGUgPSBsb2NhbGUgfHwgbm9ybWFsaXplTG9jYWxlUGF0aChwYXRoLCBsb2NhbGVzKS5kZXRlY3RlZExvY2FsZVxuXG4gICAgY29uc3QgZGV0ZWN0ZWREb21haW4gPSBkZXRlY3REb21haW5Mb2NhbGUoZG9tYWluTG9jYWxlcywgdW5kZWZpbmVkLCBsb2NhbGUpXG5cbiAgICBpZiAoZGV0ZWN0ZWREb21haW4pIHtcbiAgICAgIHJldHVybiBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7XG4gICAgICAgIGJhc2VQYXRoIHx8ICcnXG4gICAgICB9JHtsb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGUgPyAnJyA6IGAvJHtsb2NhbGV9YH0ke3BhdGh9YFxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHJldHVybiBmYWxzZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkTG9jYWxlKFxuICBwYXRoOiBzdHJpbmcsXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlLFxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICBjb25zdCBwYXRobmFtZSA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKVxuICAgIGNvbnN0IHBhdGhMb3dlciA9IHBhdGhuYW1lLnRvTG93ZXJDYXNlKClcbiAgICBjb25zdCBsb2NhbGVMb3dlciA9IGxvY2FsZSAmJiBsb2NhbGUudG9Mb3dlckNhc2UoKVxuXG4gICAgcmV0dXJuIGxvY2FsZSAmJlxuICAgICAgbG9jYWxlICE9PSBkZWZhdWx0TG9jYWxlICYmXG4gICAgICAhcGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlTG93ZXIgKyAnLycpICYmXG4gICAgICBwYXRoTG93ZXIgIT09ICcvJyArIGxvY2FsZUxvd2VyXG4gICAgICA/IGFkZFBhdGhQcmVmaXgocGF0aCwgJy8nICsgbG9jYWxlKVxuICAgICAgOiBwYXRoXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbExvY2FsZShwYXRoOiBzdHJpbmcsIGxvY2FsZT86IHN0cmluZykge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIGNvbnN0IHBhdGhuYW1lID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpXG4gICAgY29uc3QgcGF0aExvd2VyID0gcGF0aG5hbWUudG9Mb3dlckNhc2UoKVxuICAgIGNvbnN0IGxvY2FsZUxvd2VyID0gbG9jYWxlICYmIGxvY2FsZS50b0xvd2VyQ2FzZSgpXG5cbiAgICByZXR1cm4gbG9jYWxlICYmXG4gICAgICAocGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlTG93ZXIgKyAnLycpIHx8XG4gICAgICAgIHBhdGhMb3dlciA9PT0gJy8nICsgbG9jYWxlTG93ZXIpXG4gICAgICA/IChwYXRobmFtZS5sZW5ndGggPT09IGxvY2FsZS5sZW5ndGggKyAxID8gJy8nIDogJycpICtcbiAgICAgICAgICBwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoICsgMSlcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmZ1bmN0aW9uIHBhdGhOb1F1ZXJ5SGFzaChwYXRoOiBzdHJpbmcpIHtcbiAgY29uc3QgcXVlcnlJbmRleCA9IHBhdGguaW5kZXhPZignPycpXG4gIGNvbnN0IGhhc2hJbmRleCA9IHBhdGguaW5kZXhPZignIycpXG5cbiAgaWYgKHF1ZXJ5SW5kZXggPiAtMSB8fCBoYXNoSW5kZXggPiAtMSkge1xuICAgIHBhdGggPSBwYXRoLnN1YnN0cmluZygwLCBxdWVyeUluZGV4ID4gLTEgPyBxdWVyeUluZGV4IDogaGFzaEluZGV4KVxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcGF0aCA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKVxuICByZXR1cm4gcGF0aCA9PT0gYmFzZVBhdGggfHwgcGF0aC5zdGFydHNXaXRoKGJhc2VQYXRoICsgJy8nKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgLy8gd2Ugb25seSBhZGQgdGhlIGJhc2VwYXRoIG9uIHJlbGF0aXZlIHVybHNcbiAgcmV0dXJuIGFkZFBhdGhQcmVmaXgocGF0aCwgYmFzZVBhdGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICBwYXRoID0gcGF0aC5zbGljZShiYXNlUGF0aC5sZW5ndGgpXG4gIGlmICghcGF0aC5zdGFydHNXaXRoKCcvJykpIHBhdGggPSBgLyR7cGF0aH1gXG4gIHJldHVybiBwYXRoXG59XG5cbi8qKlxuICogRGV0ZWN0cyB3aGV0aGVyIGEgZ2l2ZW4gdXJsIGlzIHJvdXRhYmxlIGJ5IHRoZSBOZXh0LmpzIHJvdXRlciAoYnJvd3NlciBvbmx5KS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTG9jYWxVUkwodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgLy8gcHJldmVudCBhIGh5ZHJhdGlvbiBtaXNtYXRjaCBvbiBocmVmIGZvciB1cmwgd2l0aCBhbmNob3IgcmVmc1xuICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSB8fCB1cmwuc3RhcnRzV2l0aCgnIycpKSByZXR1cm4gdHJ1ZVxuICB0cnkge1xuICAgIC8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuICAgIGNvbnN0IGxvY2F0aW9uT3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICAgIGNvbnN0IHJlc29sdmVkID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uT3JpZ2luKVxuICAgIHJldHVybiByZXNvbHZlZC5vcmlnaW4gPT09IGxvY2F0aW9uT3JpZ2luICYmIGhhc0Jhc2VQYXRoKHJlc29sdmVkLnBhdGhuYW1lKVxuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxudHlwZSBVcmwgPSBVcmxPYmplY3QgfCBzdHJpbmdcblxuZXhwb3J0IGZ1bmN0aW9uIGludGVycG9sYXRlQXMoXG4gIHJvdXRlOiBzdHJpbmcsXG4gIGFzUGF0aG5hbWU6IHN0cmluZyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pIHtcbiAgbGV0IGludGVycG9sYXRlZFJvdXRlID0gJydcblxuICBjb25zdCBkeW5hbWljUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICBjb25zdCBkeW5hbWljR3JvdXBzID0gZHluYW1pY1JlZ2V4Lmdyb3Vwc1xuICBjb25zdCBkeW5hbWljTWF0Y2hlcyA9XG4gICAgLy8gVHJ5IHRvIG1hdGNoIHRoZSBkeW5hbWljIHJvdXRlIGFnYWluc3QgdGhlIGFzUGF0aFxuICAgIChhc1BhdGhuYW1lICE9PSByb3V0ZSA/IGdldFJvdXRlTWF0Y2hlcihkeW5hbWljUmVnZXgpKGFzUGF0aG5hbWUpIDogJycpIHx8XG4gICAgLy8gRmFsbCBiYWNrIHRvIHJlYWRpbmcgdGhlIHZhbHVlcyBmcm9tIHRoZSBocmVmXG4gICAgLy8gVE9ETzogc2hvdWxkIHRoaXMgdGFrZSBwcmlvcml0eTsgYWxzbyBuZWVkIHRvIGNoYW5nZSBpbiB0aGUgcm91dGVyLlxuICAgIHF1ZXJ5XG5cbiAgaW50ZXJwb2xhdGVkUm91dGUgPSByb3V0ZVxuICBjb25zdCBwYXJhbXMgPSBPYmplY3Qua2V5cyhkeW5hbWljR3JvdXBzKVxuXG4gIGlmIChcbiAgICAhcGFyYW1zLmV2ZXJ5KChwYXJhbSkgPT4ge1xuICAgICAgbGV0IHZhbHVlID0gZHluYW1pY01hdGNoZXNbcGFyYW1dIHx8ICcnXG4gICAgICBjb25zdCB7IHJlcGVhdCwgb3B0aW9uYWwgfSA9IGR5bmFtaWNHcm91cHNbcGFyYW1dXG5cbiAgICAgIC8vIHN1cHBvcnQgc2luZ2xlLWxldmVsIGNhdGNoLWFsbFxuICAgICAgLy8gVE9ETzogbW9yZSByb2J1c3QgaGFuZGxpbmcgZm9yIHVzZXItZXJyb3IgKHBhc3NpbmcgYC9gKVxuICAgICAgbGV0IHJlcGxhY2VkID0gYFske3JlcGVhdCA/ICcuLi4nIDogJyd9JHtwYXJhbX1dYFxuICAgICAgaWYgKG9wdGlvbmFsKSB7XG4gICAgICAgIHJlcGxhY2VkID0gYCR7IXZhbHVlID8gJy8nIDogJyd9WyR7cmVwbGFjZWR9XWBcbiAgICAgIH1cbiAgICAgIGlmIChyZXBlYXQgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB2YWx1ZSA9IFt2YWx1ZV1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgKG9wdGlvbmFsIHx8IHBhcmFtIGluIGR5bmFtaWNNYXRjaGVzKSAmJlxuICAgICAgICAvLyBJbnRlcnBvbGF0ZSBncm91cCBpbnRvIGRhdGEgVVJMIGlmIHByZXNlbnRcbiAgICAgICAgKGludGVycG9sYXRlZFJvdXRlID1cbiAgICAgICAgICBpbnRlcnBvbGF0ZWRSb3V0ZSEucmVwbGFjZShcbiAgICAgICAgICAgIHJlcGxhY2VkLFxuICAgICAgICAgICAgcmVwZWF0XG4gICAgICAgICAgICAgID8gKHZhbHVlIGFzIHN0cmluZ1tdKVxuICAgICAgICAgICAgICAgICAgLm1hcChcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlc2UgdmFsdWVzIHNob3VsZCBiZSBmdWxseSBlbmNvZGVkIGluc3RlYWQgb2YganVzdFxuICAgICAgICAgICAgICAgICAgICAvLyBwYXRoIGRlbGltaXRlciBlc2NhcGVkIHNpbmNlIHRoZXkgYXJlIGJlaW5nIGluc2VydGVkXG4gICAgICAgICAgICAgICAgICAgIC8vIGludG8gdGhlIFVSTCBhbmQgd2UgZXhwZWN0IFVSTCBlbmNvZGVkIHNlZ21lbnRzXG4gICAgICAgICAgICAgICAgICAgIC8vIHdoZW4gcGFyc2luZyBkeW5hbWljIHJvdXRlIHBhcmFtc1xuICAgICAgICAgICAgICAgICAgICAoc2VnbWVudCkgPT4gZW5jb2RlVVJJQ29tcG9uZW50KHNlZ21lbnQpXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAuam9pbignLycpXG4gICAgICAgICAgICAgIDogZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlIGFzIHN0cmluZylcbiAgICAgICAgICApIHx8ICcvJylcbiAgICAgIClcbiAgICB9KVxuICApIHtcbiAgICBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnIC8vIGRpZCBub3Qgc2F0aXNmeSBhbGwgcmVxdWlyZW1lbnRzXG5cbiAgICAvLyBuLmIuIFdlIGlnbm9yZSB0aGlzIGVycm9yIGJlY2F1c2Ugd2UgaGFuZGxlIHdhcm5pbmcgZm9yIHRoaXMgY2FzZSBpblxuICAgIC8vIGRldmVsb3BtZW50IGluIHRoZSBgPExpbms+YCBjb21wb25lbnQgZGlyZWN0bHkuXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXJhbXMsXG4gICAgcmVzdWx0OiBpbnRlcnBvbGF0ZWRSb3V0ZSxcbiAgfVxufVxuXG5mdW5jdGlvbiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnk6IFBhcnNlZFVybFF1ZXJ5LCBwYXJhbXM6IHN0cmluZ1tdKSB7XG4gIGNvbnN0IGZpbHRlcmVkUXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cblxuICBPYmplY3Qua2V5cyhxdWVyeSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgaWYgKCFwYXJhbXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgZmlsdGVyZWRRdWVyeVtrZXldID0gcXVlcnlba2V5XVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIGZpbHRlcmVkUXVlcnlcbn1cblxuLyoqXG4gKiBSZXNvbHZlcyBhIGdpdmVuIGh5cGVybGluayB3aXRoIGEgY2VydGFpbiByb3V0ZXIgc3RhdGUgKGJhc2VQYXRoIG5vdCBpbmNsdWRlZCkuXG4gKiBQcmVzZXJ2ZXMgYWJzb2x1dGUgdXJscy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVIcmVmKFxuICBjdXJyZW50UGF0aDogc3RyaW5nLFxuICBocmVmOiBVcmwsXG4gIHJlc29sdmVBcz86IGJvb2xlYW5cbik6IHN0cmluZyB7XG4gIC8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG4gIGNvbnN0IGJhc2UgPSBuZXcgVVJMKGN1cnJlbnRQYXRoLCAnaHR0cDovL24nKVxuICBjb25zdCB1cmxBc1N0cmluZyA9XG4gICAgdHlwZW9mIGhyZWYgPT09ICdzdHJpbmcnID8gaHJlZiA6IGZvcm1hdFdpdGhWYWxpZGF0aW9uKGhyZWYpXG4gIC8vIFJldHVybiBiZWNhdXNlIGl0IGNhbm5vdCBiZSByb3V0ZWQgYnkgdGhlIE5leHQuanMgcm91dGVyXG4gIGlmICghaXNMb2NhbFVSTCh1cmxBc1N0cmluZykpIHtcbiAgICByZXR1cm4gKHJlc29sdmVBcyA/IFt1cmxBc1N0cmluZ10gOiB1cmxBc1N0cmluZykgYXMgc3RyaW5nXG4gIH1cbiAgdHJ5IHtcbiAgICBjb25zdCBmaW5hbFVybCA9IG5ldyBVUkwodXJsQXNTdHJpbmcsIGJhc2UpXG4gICAgZmluYWxVcmwucGF0aG5hbWUgPSBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChmaW5hbFVybC5wYXRobmFtZSlcbiAgICBsZXQgaW50ZXJwb2xhdGVkQXMgPSAnJ1xuXG4gICAgaWYgKFxuICAgICAgaXNEeW5hbWljUm91dGUoZmluYWxVcmwucGF0aG5hbWUpICYmXG4gICAgICBmaW5hbFVybC5zZWFyY2hQYXJhbXMgJiZcbiAgICAgIHJlc29sdmVBc1xuICAgICkge1xuICAgICAgY29uc3QgcXVlcnkgPSBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KGZpbmFsVXJsLnNlYXJjaFBhcmFtcylcblxuICAgICAgY29uc3QgeyByZXN1bHQsIHBhcmFtcyB9ID0gaW50ZXJwb2xhdGVBcyhcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBxdWVyeVxuICAgICAgKVxuXG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIGludGVycG9sYXRlZEFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgIHBhdGhuYW1lOiByZXN1bHQsXG4gICAgICAgICAgaGFzaDogZmluYWxVcmwuaGFzaCxcbiAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBwYXJhbXMpLFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG4gICAgY29uc3QgcmVzb2x2ZWRIcmVmID1cbiAgICAgIGZpbmFsVXJsLm9yaWdpbiA9PT0gYmFzZS5vcmlnaW5cbiAgICAgICAgPyBmaW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpXG4gICAgICAgIDogZmluYWxVcmwuaHJlZlxuXG4gICAgcmV0dXJuIChyZXNvbHZlQXNcbiAgICAgID8gW3Jlc29sdmVkSHJlZiwgaW50ZXJwb2xhdGVkQXMgfHwgcmVzb2x2ZWRIcmVmXVxuICAgICAgOiByZXNvbHZlZEhyZWYpIGFzIHN0cmluZ1xuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIChyZXNvbHZlQXMgPyBbdXJsQXNTdHJpbmddIDogdXJsQXNTdHJpbmcpIGFzIHN0cmluZ1xuICB9XG59XG5cbmZ1bmN0aW9uIHN0cmlwT3JpZ2luKHVybDogc3RyaW5nKSB7XG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcblxuICByZXR1cm4gdXJsLnN0YXJ0c1dpdGgob3JpZ2luKSA/IHVybC5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aCkgOiB1cmxcbn1cblxuZnVuY3Rpb24gcHJlcGFyZVVybEFzKHJvdXRlcjogTmV4dFJvdXRlciwgdXJsOiBVcmwsIGFzPzogVXJsKSB7XG4gIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICBsZXQgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSByZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIHVybCwgdHJ1ZSlcbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICBjb25zdCBocmVmSGFkT3JpZ2luID0gcmVzb2x2ZWRIcmVmLnN0YXJ0c1dpdGgob3JpZ2luKVxuICBjb25zdCBhc0hhZE9yaWdpbiA9IHJlc29sdmVkQXMgJiYgcmVzb2x2ZWRBcy5zdGFydHNXaXRoKG9yaWdpbilcblxuICByZXNvbHZlZEhyZWYgPSBzdHJpcE9yaWdpbihyZXNvbHZlZEhyZWYpXG4gIHJlc29sdmVkQXMgPSByZXNvbHZlZEFzID8gc3RyaXBPcmlnaW4ocmVzb2x2ZWRBcykgOiByZXNvbHZlZEFzXG5cbiAgY29uc3QgcHJlcGFyZWRVcmwgPSBocmVmSGFkT3JpZ2luID8gcmVzb2x2ZWRIcmVmIDogYWRkQmFzZVBhdGgocmVzb2x2ZWRIcmVmKVxuICBjb25zdCBwcmVwYXJlZEFzID0gYXNcbiAgICA/IHN0cmlwT3JpZ2luKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgYXMpKVxuICAgIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWZcblxuICByZXR1cm4ge1xuICAgIHVybDogcHJlcGFyZWRVcmwsXG4gICAgYXM6IGFzSGFkT3JpZ2luID8gcHJlcGFyZWRBcyA6IGFkZEJhc2VQYXRoKHByZXBhcmVkQXMpLFxuICB9XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWU6IHN0cmluZywgcGFnZXM6IHN0cmluZ1tdKSB7XG4gIGNvbnN0IGNsZWFuUGF0aG5hbWUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhdGhuYW1lISkpXG5cbiAgaWYgKGNsZWFuUGF0aG5hbWUgPT09ICcvNDA0JyB8fCBjbGVhblBhdGhuYW1lID09PSAnL19lcnJvcicpIHtcbiAgICByZXR1cm4gcGF0aG5hbWVcbiAgfVxuXG4gIC8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbiAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lISkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgcGFnZXMuc29tZSgocGFnZSkgPT4ge1xuICAgICAgaWYgKGlzRHluYW1pY1JvdXRlKHBhZ2UpICYmIGdldFJvdXRlUmVnZXgocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lISkpIHtcbiAgICAgICAgcGF0aG5hbWUgPSBwYWdlXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfSlcbiAgfVxuICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG59XG5cbmV4cG9ydCB0eXBlIEJhc2VSb3V0ZXIgPSB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbiAgaXNMb2NhbGVEb21haW46IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgTmV4dFJvdXRlciA9IEJhc2VSb3V0ZXIgJlxuICBQaWNrPFxuICAgIFJvdXRlcixcbiAgICB8ICdwdXNoJ1xuICAgIHwgJ3JlcGxhY2UnXG4gICAgfCAncmVsb2FkJ1xuICAgIHwgJ2JhY2snXG4gICAgfCAncHJlZmV0Y2gnXG4gICAgfCAnYmVmb3JlUG9wU3RhdGUnXG4gICAgfCAnZXZlbnRzJ1xuICAgIHwgJ2lzRmFsbGJhY2snXG4gICAgfCAnaXNSZWFkeSdcbiAgICB8ICdpc1ByZXZpZXcnXG4gID5cblxuZXhwb3J0IHR5cGUgUHJlZmV0Y2hPcHRpb25zID0ge1xuICBwcmlvcml0eT86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbn1cblxuZXhwb3J0IHR5cGUgUHJpdmF0ZVJvdXRlSW5mbyA9XG4gIHwgKE9taXQ8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvLCAnc3R5bGVTaGVldHMnPiAmIHsgaW5pdGlhbDogdHJ1ZSB9KVxuICB8IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mb1xuXG5leHBvcnQgdHlwZSBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzID0gUGljazxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8sICdDb21wb25lbnQnIHwgJ2Vycic+ICYge1xuICByb3V0ZXI6IFJvdXRlclxufSAmIFJlY29yZDxzdHJpbmcsIGFueT5cbmV4cG9ydCB0eXBlIEFwcENvbXBvbmVudCA9IENvbXBvbmVudFR5cGU8QXBwUHJvcHM+XG5cbnR5cGUgU3Vic2NyaXB0aW9uID0gKFxuICBkYXRhOiBQcml2YXRlUm91dGVJbmZvLFxuICBBcHA6IEFwcENvbXBvbmVudCxcbiAgcmVzZXRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGxcbikgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IE5leHRIaXN0b3J5U3RhdGUpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID1cbiAgcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJlxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5ICYmXG4gICEhKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgbGV0IHYgPSAnX19uZXh0J1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgcmV0dXJuIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0odiwgdiksIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0odiksIHRydWVcbiAgICB9IGNhdGNoIChuKSB7fVxuICB9KSgpXG5cbmNvbnN0IFNTR19EQVRBX05PVF9GT1VORCA9IFN5bWJvbCgnU1NHX0RBVEFfTk9UX0ZPVU5EJylcblxuZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmw6IHN0cmluZywgYXR0ZW1wdHM6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAvL1xuICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAvLyA+IG9wdGlvbi5cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgLy9cbiAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgIGlmICghcmVzLm9rKSB7XG4gICAgICBpZiAoYXR0ZW1wdHMgPiAxICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgIHJldHVybiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMgLSAxKVxuICAgICAgfVxuICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDQwNCkge1xuICAgICAgICByZXR1cm4gcmVzLmpzb24oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgaWYgKGRhdGEubm90Rm91bmQpIHtcbiAgICAgICAgICAgIHJldHVybiB7IG5vdEZvdW5kOiBTU0dfREFUQV9OT1RfRk9VTkQgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgfVxuICAgIHJldHVybiByZXMuanNvbigpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWY6IHN0cmluZywgaXNTZXJ2ZXJSZW5kZXI6IGJvb2xlYW4pIHtcbiAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG4gICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAvLyBsb29wLlxuXG4gICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgbWFya0Fzc2V0RXJyb3IoZXJyKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyIGltcGxlbWVudHMgQmFzZVJvdXRlciB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuXG4gIC8qKlxuICAgKiBNYXAgb2YgYWxsIGNvbXBvbmVudHMgbG9hZGVkIGluIGBSb3V0ZXJgXG4gICAqL1xuICBjb21wb25lbnRzOiB7IFtwYXRobmFtZTogc3RyaW5nXTogUHJpdmF0ZVJvdXRlSW5mbyB9XG4gIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gIHNkYzogeyBbYXNQYXRoOiBzdHJpbmddOiBvYmplY3QgfSA9IHt9XG4gIC8vIEluLWZsaWdodCBTZXJ2ZXIgRGF0YSBSZXF1ZXN0cywgZm9yIGRlZHVwaW5nXG4gIHNkcjogeyBbYXNQYXRoOiBzdHJpbmddOiBQcm9taXNlPG9iamVjdD4gfSA9IHt9XG5cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgX2luRmxpZ2h0Um91dGU/OiBzdHJpbmdcbiAgX3NoYWxsb3c/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuICBpc1JlYWR5OiBib29sZWFuXG4gIGlzUHJldmlldzogYm9vbGVhblxuICBpc0xvY2FsZURvbWFpbjogYm9vbGVhblxuXG4gIHByaXZhdGUgX2lkeDogbnVtYmVyID0gMFxuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgICBsb2NhbGUsXG4gICAgICBsb2NhbGVzLFxuICAgICAgZGVmYXVsdExvY2FsZSxcbiAgICAgIGRvbWFpbkxvY2FsZXMsXG4gICAgICBpc1ByZXZpZXcsXG4gICAgfToge1xuICAgICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb25cbiAgICAgIGluaXRpYWxQcm9wczogYW55XG4gICAgICBwYWdlTG9hZGVyOiBhbnlcbiAgICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgQXBwOiBBcHBDb21wb25lbnRcbiAgICAgIHdyYXBBcHA6IChXcmFwQXBwQ29tcG9uZW50OiBBcHBDb21wb25lbnQpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICAgIGxvY2FsZT86IHN0cmluZ1xuICAgICAgbG9jYWxlcz86IHN0cmluZ1tdXG4gICAgICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gICAgICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuICAgICAgaXNQcmV2aWV3PzogYm9vbGVhblxuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBpbml0aWFsOiB0cnVlLFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHtcbiAgICAgIENvbXBvbmVudDogQXBwIGFzIENvbXBvbmVudFR5cGUsXG4gICAgICBzdHlsZVNoZWV0czogW1xuICAgICAgICAvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXG4gICAgICBdLFxuICAgIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgY29uc3QgYXV0b0V4cG9ydER5bmFtaWMgPVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIHNlbGYuX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0XG5cbiAgICB0aGlzLmFzUGF0aCA9IGF1dG9FeHBvcnREeW5hbWljID8gcGF0aG5hbWUgOiBhc1xuICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aFxuICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uXG4gICAgdGhpcy5jbGMgPSBudWxsXG4gICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHBcbiAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICB0aGlzLmlzU3NyID0gdHJ1ZVxuXG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFja1xuXG4gICAgdGhpcy5pc1JlYWR5ID0gISEoXG4gICAgICBzZWxmLl9fTkVYVF9EQVRBX18uZ3NzcCB8fFxuICAgICAgc2VsZi5fX05FWFRfREFUQV9fLmdpcCB8fFxuICAgICAgKCFhdXRvRXhwb3J0RHluYW1pYyAmJlxuICAgICAgICAhc2VsZi5sb2NhdGlvbi5zZWFyY2ggJiZcbiAgICAgICAgIXByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMpXG4gICAgKVxuICAgIHRoaXMuaXNQcmV2aWV3ID0gISFpc1ByZXZpZXdcbiAgICB0aGlzLmlzTG9jYWxlRG9tYWluID0gZmFsc2VcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVxuICAgICAgdGhpcy5sb2NhbGVzID0gbG9jYWxlc1xuICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlID0gZGVmYXVsdExvY2FsZVxuICAgICAgdGhpcy5kb21haW5Mb2NhbGVzID0gZG9tYWluTG9jYWxlc1xuICAgICAgdGhpcy5pc0xvY2FsZURvbWFpbiA9ICEhZGV0ZWN0RG9tYWluTG9jYWxlKFxuICAgICAgICBkb21haW5Mb2NhbGVzLFxuICAgICAgICBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lXG4gICAgICApXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgICBnZXRVUkwoKSxcbiAgICAgICAgICB7IGxvY2FsZSB9XG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKVxuXG4gICAgICAvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuICAgICAgLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvblBvcFN0YXRlID0gKGU6IFBvcFN0YXRlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBjb25zdCBzdGF0ZSA9IGUuc3RhdGUgYXMgSGlzdG9yeVN0YXRlXG5cbiAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgLy9cbiAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXNcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICBnZXRVUkwoKVxuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFzdGF0ZS5fX04pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCBmb3JjZWRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IHVuZGVmaW5lZFxuICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucywgaWR4IH0gPSBzdGF0ZVxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgaWYgKHRoaXMuX2lkeCAhPT0gaWR4KSB7XG4gICAgICAgICAgLy8gU25hcHNob3QgY3VycmVudCBzY3JvbGwgcG9zaXRpb246XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICAgICdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsXG4gICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHsgeDogc2VsZi5wYWdlWE9mZnNldCwgeTogc2VsZi5wYWdlWU9mZnNldCB9KVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0gY2F0Y2gge31cblxuICAgICAgICAgIC8vIFJlc3RvcmUgb2xkIHNjcm9sbCBwb3NpdGlvbjpcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgdiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyArIGlkeClcbiAgICAgICAgICAgIGZvcmNlZFNjcm9sbCA9IEpTT04ucGFyc2UodiEpXG4gICAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSB7IHg6IDAsIHk6IDAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9pZHggPSBpZHhcblxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgaWYgKHRoaXMuaXNTc3IgJiYgYXMgPT09IHRoaXMuYXNQYXRoICYmIHBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoc3RhdGUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmNoYW5nZShcbiAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgdXJsLFxuICAgICAgYXMsXG4gICAgICBPYmplY3QuYXNzaWduPHt9LCBUcmFuc2l0aW9uT3B0aW9ucywgVHJhbnNpdGlvbk9wdGlvbnM+KHt9LCBvcHRpb25zLCB7XG4gICAgICAgIHNoYWxsb3c6IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLl9zaGFsbG93LFxuICAgICAgICBsb2NhbGU6IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZSxcbiAgICAgIH0pLFxuICAgICAgZm9yY2VkU2Nyb2xsXG4gICAgKVxuICB9XG5cbiAgcmVsb2FkKCk6IHZvaWQge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9cbiAgYmFjaygpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcHVzaCh1cmw6IFVybCwgYXM/OiBVcmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgLy8gVE9ETzogcmVtb3ZlIGluIHRoZSBmdXR1cmUgd2hlbiB3ZSB1cGRhdGUgaGlzdG9yeSBiZWZvcmUgcm91dGUgY2hhbmdlXG4gICAgICAvLyBpcyBjb21wbGV0ZSwgYXMgdGhlIHBvcHN0YXRlIGV2ZW50IHNob3VsZCBoYW5kbGUgdGhpcyBjYXB0dXJlLlxuICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gU25hcHNob3Qgc2Nyb2xsIHBvc2l0aW9uIHJpZ2h0IGJlZm9yZSBuYXZpZ2F0aW5nIHRvIGEgbmV3IHBhZ2U6XG4gICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgICAgICdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7IHg6IHNlbGYucGFnZVhPZmZzZXQsIHk6IHNlbGYucGFnZVlPZmZzZXQgfSlcbiAgICAgICAgICApXG4gICAgICAgIH0gY2F0Y2gge31cbiAgICAgIH1cbiAgICB9XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHJlcGxhY2UodXJsOiBVcmwsIGFzPzogVXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGNoYW5nZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyxcbiAgICBmb3JjZWRTY3JvbGw/OiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH1cbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKHVybCkpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBmb3Igc3RhdGljIHBhZ2VzIHdpdGggcXVlcnkgcGFyYW1zIGluIHRoZSBVUkwgd2UgZGVsYXlcbiAgICAvLyBtYXJraW5nIHRoZSByb3V0ZXIgcmVhZHkgdW50aWwgYWZ0ZXIgdGhlIHF1ZXJ5IGlzIHVwZGF0ZWRcbiAgICBpZiAoKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1JlYWR5ID0gdHJ1ZVxuICAgIH1cblxuICAgIC8vIERlZmF1bHQgdG8gc2Nyb2xsIHJlc2V0IGJlaGF2aW9yIHVubGVzcyBleHBsaWNpdGx5IHNwZWNpZmllZCB0byBiZVxuICAgIC8vIGBmYWxzZWAhIFRoaXMgbWFrZXMgdGhlIGJlaGF2aW9yIGJldHdlZW4gdXNpbmcgYFJvdXRlciNwdXNoYCBhbmQgYVxuICAgIC8vIGA8TGluayAvPmAgY29uc2lzdGVudC5cbiAgICBvcHRpb25zLnNjcm9sbCA9ICEhKG9wdGlvbnMuc2Nyb2xsID8/IHRydWUpXG5cbiAgICBsZXQgbG9jYWxlQ2hhbmdlID0gb3B0aW9ucy5sb2NhbGUgIT09IHRoaXMubG9jYWxlXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgdGhpcy5sb2NhbGUgPVxuICAgICAgICBvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2VcbiAgICAgICAgICA/IHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICAgIDogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5sb2NhbGVcblxuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmxvY2FsZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSB0aGlzLmxvY2FsZVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwoaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMpXG4gICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUsXG4gICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgKVxuXG4gICAgICBpZiAobG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSkge1xuICAgICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGVcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYXJzZWRBcy5wYXRobmFtZSlcbiAgICAgICAgYXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcylcbiAgICAgICAgdXJsID0gYWRkQmFzZVBhdGgoXG4gICAgICAgICAgbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgICAgICAgICAgIGhhc0Jhc2VQYXRoKHVybCkgPyBkZWxCYXNlUGF0aCh1cmwpIDogdXJsLFxuICAgICAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICAgICAgKS5wYXRobmFtZVxuICAgICAgICApXG4gICAgICB9XG4gICAgICBsZXQgZGlkTmF2aWdhdGUgPSBmYWxzZVxuXG4gICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgIC8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgLy8gaWYgdGhlIGxvY2FsZSBpc24ndCBjb25maWd1cmVkIGhhcmQgbmF2aWdhdGUgdG8gc2hvdyA0MDQgcGFnZVxuICAgICAgICBpZiAoIXRoaXMubG9jYWxlcz8uaW5jbHVkZXModGhpcy5sb2NhbGUhKSkge1xuICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gYWRkTG9jYWxlKHBhcnNlZEFzLnBhdGhuYW1lLCB0aGlzLmxvY2FsZSlcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKVxuICAgICAgICAgIC8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4gICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBkZXRlY3RlZERvbWFpbiA9IGRldGVjdERvbWFpbkxvY2FsZShcbiAgICAgICAgdGhpcy5kb21haW5Mb2NhbGVzLFxuICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgIHRoaXMubG9jYWxlXG4gICAgICApXG5cbiAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAvLyBpZiB3ZSBhcmUgbmF2aWdhdGluZyB0byBhIGRvbWFpbiBsb2NhbGUgZW5zdXJlIHdlIHJlZGlyZWN0IHRvIHRoZVxuICAgICAgICAvLyBjb3JyZWN0IGRvbWFpblxuICAgICAgICBpZiAoXG4gICAgICAgICAgIWRpZE5hdmlnYXRlICYmXG4gICAgICAgICAgZGV0ZWN0ZWREb21haW4gJiZcbiAgICAgICAgICB0aGlzLmlzTG9jYWxlRG9tYWluICYmXG4gICAgICAgICAgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSAhPT0gZGV0ZWN0ZWREb21haW4uZG9tYWluXG4gICAgICAgICkge1xuICAgICAgICAgIGNvbnN0IGFzTm9CYXNlUGF0aCA9IGRlbEJhc2VQYXRoKGFzKVxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHAgPyAnJyA6ICdzJ306Ly8ke1xuICAgICAgICAgICAgZGV0ZWN0ZWREb21haW4uZG9tYWluXG4gICAgICAgICAgfSR7YWRkQmFzZVBhdGgoXG4gICAgICAgICAgICBgJHtcbiAgICAgICAgICAgICAgdGhpcy5sb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgICAgICAgICA/ICcnXG4gICAgICAgICAgICAgICAgOiBgLyR7dGhpcy5sb2NhbGV9YFxuICAgICAgICAgICAgfSR7YXNOb0Jhc2VQYXRoID09PSAnLycgPyAnJyA6IGFzTm9CYXNlUGF0aH1gIHx8ICcvJ1xuICAgICAgICAgICl9YFxuICAgICAgICAgIC8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4gICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZGlkTmF2aWdhdGUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpID0+IHt9KVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgfVxuICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICBpZiAoU1QpIHtcbiAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJylcbiAgICB9XG5cbiAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9uc1xuICAgIGNvbnN0IHJvdXRlUHJvcHMgPSB7IHNoYWxsb3cgfVxuXG4gICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUsIHJvdXRlUHJvcHMpXG4gICAgfVxuXG4gICAgYXMgPSBhZGRCYXNlUGF0aChcbiAgICAgIGFkZExvY2FsZShcbiAgICAgICAgaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsXG4gICAgICAgIG9wdGlvbnMubG9jYWxlLFxuICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgIClcbiAgICApXG4gICAgY29uc3QgY2xlYW5lZEFzID0gZGVsTG9jYWxlKFxuICAgICAgaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsXG4gICAgICB0aGlzLmxvY2FsZVxuICAgIClcbiAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXNcblxuICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuXG4gICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSkge1xuICAgICAgdGhpcy5hc1BhdGggPSBjbGVhbmVkQXNcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMsIHJvdXRlUHJvcHMpXG4gICAgICAvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG4gICAgICB0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpXG4gICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0sIG51bGwpXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG4gICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSBwYXJzZWRcblxuICAgIC8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbiAgICAvLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbiAgICAvLyB3aGVuIHJld3JpdHRlbiB0b1xuICAgIGxldCBwYWdlczogYW55LCByZXdyaXRlczogYW55XG4gICAgdHJ5IHtcbiAgICAgIHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcbiAgICAgIDsoeyBfX3Jld3JpdGVzOiByZXdyaXRlcyB9ID0gYXdhaXQgZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgLy8gSWYgd2UgZmFpbCB0byByZXNvbHZlIHRoZSBwYWdlIGxpc3Qgb3IgY2xpZW50LWJ1aWxkIG1hbmlmZXN0LCB3ZSBtdXN0XG4gICAgICAvLyBkbyBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb246XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSAmJiAhbG9jYWxlQ2hhbmdlKSB7XG4gICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJ1xuICAgIH1cblxuICAgIC8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4gICAgLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxuICAgIGxldCByZXNvbHZlZEFzID0gYXNcblxuICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAvLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4gICAgLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICA/IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSlcbiAgICAgIDogcGF0aG5hbWVcblxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyAmJiBhcy5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgY29uc3QgcmV3cml0ZXNSZXN1bHQgPSByZXNvbHZlUmV3cml0ZXMoXG4gICAgICAgICAgYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGNsZWFuZWRBcywgdGhpcy5sb2NhbGUpKSxcbiAgICAgICAgICBwYWdlcyxcbiAgICAgICAgICByZXdyaXRlcyxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAocDogc3RyaW5nKSA9PiByZXNvbHZlRHluYW1pY1JvdXRlKHAsIHBhZ2VzKSxcbiAgICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgICAgKVxuICAgICAgICByZXNvbHZlZEFzID0gcmV3cml0ZXNSZXN1bHQuYXNQYXRoXG5cbiAgICAgICAgaWYgKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlICYmIHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZikge1xuICAgICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICAgIHBhdGhuYW1lID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmXG4gICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWUsIHBhZ2VzKVxuXG4gICAgICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgaWYgKCFpc0xvY2FsVVJMKGFzKSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBJbnZhbGlkIGhyZWY6IFwiJHt1cmx9XCIgYW5kIGFzOiBcIiR7YXN9XCIsIHJlY2VpdmVkIHJlbGF0aXZlIGhyZWYgYW5kIGV4dGVybmFsIGFzYCArXG4gICAgICAgICAgICBgXFxuU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvaW52YWxpZC1yZWxhdGl2ZS11cmwtZXh0ZXJuYWwtYXNgXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSwgdGhpcy5sb2NhbGUpXG5cbiAgICBpZiAoaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICBjb25zdCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwocmVzb2x2ZWRBcylcbiAgICAgIGNvbnN0IGFzUGF0aG5hbWUgPSBwYXJzZWRBcy5wYXRobmFtZVxuXG4gICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgIGNvbnN0IHNob3VsZEludGVycG9sYXRlID0gcm91dGUgPT09IGFzUGF0aG5hbWVcbiAgICAgIGNvbnN0IGludGVycG9sYXRlZEFzID0gc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgPyBpbnRlcnBvbGF0ZUFzKHJvdXRlLCBhc1BhdGhuYW1lLCBxdWVyeSlcbiAgICAgICAgOiAoe30gYXMgeyByZXN1bHQ6IHVuZGVmaW5lZDsgcGFyYW1zOiB1bmRlZmluZWQgfSlcblxuICAgICAgaWYgKCFyb3V0ZU1hdGNoIHx8IChzaG91bGRJbnRlcnBvbGF0ZSAmJiAhaW50ZXJwb2xhdGVkQXMucmVzdWx0KSkge1xuICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihcbiAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICBgJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyBgSW50ZXJwb2xhdGluZyBocmVmYFxuICAgICAgICAgICAgICAgICAgOiBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGBgXG4gICAgICAgICAgICAgIH0gZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgKHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgID8gYFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSkgdG8gYmUgaW50ZXJwb2xhdGVkIHByb3Blcmx5LiBgXG4gICAgICAgICAgICAgIDogYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCkgK1xuICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy8ke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/ICdocmVmLWludGVycG9sYXRpb24tZmFpbGVkJ1xuICAgICAgICAgICAgICAgICAgOiAnaW5jb21wYXRpYmxlLWhyZWYtYXMnXG4gICAgICAgICAgICAgIH1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHNob3VsZEludGVycG9sYXRlKSB7XG4gICAgICAgIGFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcGFyc2VkQXMsIHtcbiAgICAgICAgICAgIHBhdGhuYW1lOiBpbnRlcnBvbGF0ZWRBcy5yZXN1bHQsXG4gICAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBpbnRlcnBvbGF0ZWRBcy5wYXJhbXMhKSxcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKVxuICAgICAgfVxuICAgIH1cblxuICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKVxuXG4gICAgdHJ5IHtcbiAgICAgIGxldCByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgIHJvdXRlUHJvcHNcbiAgICAgIClcbiAgICAgIGxldCB7IGVycm9yLCBwcm9wcywgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIC8vIGhhbmRsZSByZWRpcmVjdCBvbiBjbGllbnQtdHJhbnNpdGlvblxuICAgICAgaWYgKChfX05fU1NHIHx8IF9fTl9TU1ApICYmIHByb3BzKSB7XG4gICAgICAgIGlmICgocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMgJiYgKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVCkge1xuICAgICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVFxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcbiAgICAgICAgICAvLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXG4gICAgICAgICAgLy8gaXQncyBub3RcbiAgICAgICAgICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJzZWRIcmVmID0gcGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbilcbiAgICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUgPSByZXNvbHZlRHluYW1pY1JvdXRlKFxuICAgICAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lLFxuICAgICAgICAgICAgICBwYWdlc1xuICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocGFyc2VkSHJlZi5wYXRobmFtZSkpIHtcbiAgICAgICAgICAgICAgY29uc3QgeyB1cmw6IG5ld1VybCwgYXM6IG5ld0FzIH0gPSBwcmVwYXJlVXJsQXMoXG4gICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbixcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvblxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5nZShtZXRob2QsIG5ld1VybCwgbmV3QXMsIG9wdGlvbnMpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkZXN0aW5hdGlvblxuICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKSA9PiB7fSlcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaXNQcmV2aWV3ID0gISFwcm9wcy5fX05fUFJFVklFV1xuXG4gICAgICAgIC8vIGhhbmRsZSBTU0cgZGF0YSA0MDRcbiAgICAgICAgaWYgKHByb3BzLm5vdEZvdW5kID09PSBTU0dfREFUQV9OT1RfRk9VTkQpIHtcbiAgICAgICAgICBsZXQgbm90Rm91bmRSb3V0ZVxuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy80MDQnKVxuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSA9ICcvNDA0J1xuICAgICAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUgPSAnL19lcnJvcidcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUsXG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlLFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICBhcyxcbiAgICAgICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgICAgICB7IHNoYWxsb3c6IGZhbHNlIH1cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMsIHJvdXRlUHJvcHMpXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgfVxuXG4gICAgICAvLyBzaGFsbG93IHJvdXRpbmcgaXMgb25seSBhbGxvd2VkIGZvciBzYW1lIHBhZ2UgVVJMIGNoYW5nZXMuXG4gICAgICBjb25zdCBpc1ZhbGlkU2hhbGxvd1JvdXRlID0gb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMucm91dGUgPT09IHJvdXRlXG5cbiAgICAgIGlmIChcbiAgICAgICAgKG9wdGlvbnMgYXMgYW55KS5faCAmJlxuICAgICAgICBwYXRobmFtZSA9PT0gJy9fZXJyb3InICYmXG4gICAgICAgIHNlbGYuX19ORVhUX0RBVEFfXy5wcm9wcz8ucGFnZVByb3BzPy5zdGF0dXNDb2RlID09PSA1MDAgJiZcbiAgICAgICAgcHJvcHM/LnBhZ2VQcm9wc1xuICAgICAgKSB7XG4gICAgICAgIC8vIGVuc3VyZSBzdGF0dXNDb2RlIGlzIHN0aWxsIGNvcnJlY3QgZm9yIHN0YXRpYyA1MDAgcGFnZVxuICAgICAgICAvLyB3aGVuIHVwZGF0aW5nIHF1ZXJ5IGluZm9ybWF0aW9uXG4gICAgICAgIHByb3BzLnBhZ2VQcm9wcy5zdGF0dXNDb2RlID0gNTAwXG4gICAgICB9XG5cbiAgICAgIGF3YWl0IHRoaXMuc2V0KFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUhLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgY2xlYW5lZEFzLFxuICAgICAgICByb3V0ZUluZm8sXG4gICAgICAgIGZvcmNlZFNjcm9sbCB8fFxuICAgICAgICAgIChpc1ZhbGlkU2hhbGxvd1JvdXRlIHx8ICFvcHRpb25zLnNjcm9sbCA/IG51bGwgOiB7IHg6IDAsIHk6IDAgfSlcbiAgICAgICkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgaWYgKGUuY2FuY2VsbGVkKSBlcnJvciA9IGVycm9yIHx8IGVcbiAgICAgICAgZWxzZSB0aHJvdyBlXG4gICAgICB9KVxuXG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGNsZWFuZWRBcywgcm91dGVQcm9wcylcbiAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgIH1cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgaWYgKHRoaXMubG9jYWxlKSB7XG4gICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmxhbmcgPSB0aGlzLmxvY2FsZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcylcblxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9XG5cbiAgY2hhbmdlU3RhdGUoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fVxuICApOiB2b2lkIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8IGdldFVSTCgpICE9PSBhcykge1xuICAgICAgdGhpcy5fc2hhbGxvdyA9IG9wdGlvbnMuc2hhbGxvd1xuICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXShcbiAgICAgICAge1xuICAgICAgICAgIHVybCxcbiAgICAgICAgICBhcyxcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgIF9fTjogdHJ1ZSxcbiAgICAgICAgICBpZHg6IHRoaXMuX2lkeCA9IG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgPyB0aGlzLl9pZHggOiB0aGlzLl9pZHggKyAxLFxuICAgICAgICB9IGFzIEhpc3RvcnlTdGF0ZSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICByb3V0ZVByb3BzOiBSb3V0ZVByb3BlcnRpZXMsXG4gICAgbG9hZEVycm9yRmFpbD86IGJvb2xlYW5cbiAgKTogUHJvbWlzZTxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cblxuICAgIGlmIChpc0Fzc2V0RXJyb3IoZXJyKSB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnIsIGFzLCByb3V0ZVByb3BzKVxuXG4gICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcblxuICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG5cbiAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgIHRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBsZXQgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBsZXQgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gICAgICBsZXQgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT4gfCB1bmRlZmluZWRcblxuICAgICAgaWYgKFxuICAgICAgICB0eXBlb2YgQ29tcG9uZW50ISA9PT0gJ3VuZGVmaW5lZCcgfHxcbiAgICAgICAgdHlwZW9mIHN0eWxlU2hlZXRzISA9PT0gJ3VuZGVmaW5lZCdcbiAgICAgICkge1xuICAgICAgICA7KHsgcGFnZTogQ29tcG9uZW50LCBzdHlsZVNoZWV0cyB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChcbiAgICAgICAgICAnL19lcnJvcidcbiAgICAgICAgKSlcbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gPSB7XG4gICAgICAgIHByb3BzLFxuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzLFxuICAgICAgICBlcnIsXG4gICAgICAgIGVycm9yOiBlcnIsXG4gICAgICB9XG5cbiAgICAgIGlmICghcm91dGVJbmZvLnByb3BzKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIH0gYXMgYW55KVxuICAgICAgICB9IGNhdGNoIChnaXBFcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpXG4gICAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge31cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihcbiAgICAgICAgcm91dGVJbmZvRXJyLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICByb3V0ZVByb3BzLFxuICAgICAgICB0cnVlXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0Um91dGVJbmZvKFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgcmVzb2x2ZWRBczogc3RyaW5nLFxuICAgIHJvdXRlUHJvcHM6IFJvdXRlUHJvcGVydGllc1xuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZXhpc3RpbmdSb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gfCB1bmRlZmluZWQgPSB0aGlzLmNvbXBvbmVudHNbXG4gICAgICAgIHJvdXRlXG4gICAgICBdXG4gICAgICBpZiAocm91dGVQcm9wcy5zaGFsbG93ICYmIGV4aXN0aW5nUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgIHJldHVybiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgfVxuXG4gICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm86IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyB8IHVuZGVmaW5lZCA9XG4gICAgICAgIGV4aXN0aW5nUm91dGVJbmZvICYmICdpbml0aWFsJyBpbiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgICAgID8gdW5kZWZpbmVkXG4gICAgICAgICAgOiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgY29uc3Qgcm91dGVJbmZvOiBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gPSBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgPyBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgOiBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKChyZXMpID0+ICh7XG4gICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgc3R5bGVTaGVldHM6IHJlcy5zdHlsZVNoZWV0cyxcbiAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICB9KSlcblxuICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKVxuICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgZGF0YUhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoX19OX1NTRyB8fCBfX05fU1NQKSB7XG4gICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgICAgX19OX1NTRyxcbiAgICAgICAgICB0aGlzLmxvY2FsZVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YTxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8+KCgpID0+XG4gICAgICAgIF9fTl9TU0dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhcbiAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgfSBhcyBhbnlcbiAgICAgICAgICAgIClcbiAgICAgIClcblxuICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm9cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVQcm9wcylcbiAgICB9XG4gIH1cblxuICBzZXQoXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sXG4gICAgcmVzZXRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGxcbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2VcblxuICAgIHRoaXMucm91dGUgPSByb3V0ZVxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSwgcmVzZXRTY3JvbGwpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGJlZm9yZVBvcFN0YXRlKGNiOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5fYnBzID0gY2JcbiAgfVxuXG4gIG9ubHlBSGFzaENoYW5nZShhczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpXG4gICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpXG5cbiAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoXG4gIH1cblxuICBzY3JvbGxUb0hhc2goYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKVxuICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZSBvciBgI3RvcGBcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBpZiAoaGFzaCA9PT0gJycgfHwgaGFzaCA9PT0gJ3RvcCcpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIGFzeW5jIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICBpZiAob3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlKSB7XG4gICAgICAgIHBhdGhuYW1lID0gbm9ybWFsaXplTG9jYWxlUGF0aCEocGF0aG5hbWUsIHRoaXMubG9jYWxlcykucGF0aG5hbWVcbiAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuXG4gICAgICAgIGxldCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwoYXNQYXRoKVxuICAgICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gbm9ybWFsaXplTG9jYWxlUGF0aCEoXG4gICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUsXG4gICAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICAgIClcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBsb2NhbGVQYXRoUmVzdWx0LnBhdGhuYW1lXG4gICAgICAgIG9wdGlvbnMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgYXNQYXRoID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuICAgIGxldCByZXNvbHZlZEFzID0gYXNQYXRoXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyAmJiBhc1BhdGguc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICBsZXQgcmV3cml0ZXM6IGFueVxuICAgICAgOyh7IF9fcmV3cml0ZXM6IHJld3JpdGVzIH0gPSBhd2FpdCBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkpXG5cbiAgICAgIGNvbnN0IHJld3JpdGVzUmVzdWx0ID0gcmVzb2x2ZVJld3JpdGVzKFxuICAgICAgICBhZGRCYXNlUGF0aChhZGRMb2NhbGUoYXNQYXRoLCB0aGlzLmxvY2FsZSkpLFxuICAgICAgICBwYWdlcyxcbiAgICAgICAgcmV3cml0ZXMsXG4gICAgICAgIHBhcnNlZC5xdWVyeSxcbiAgICAgICAgKHA6IHN0cmluZykgPT4gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwLCBwYWdlcyksXG4gICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgKVxuICAgICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXdyaXRlc1Jlc3VsdC5hc1BhdGgpLCB0aGlzLmxvY2FsZSlcblxuICAgICAgaWYgKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlICYmIHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZikge1xuICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgIHBhdGhuYW1lID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmXG4gICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWQucGF0aG5hbWUsIHBhZ2VzKVxuXG4gICAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIHRoaXMucGFnZUxvYWRlci5faXNTc2cocm91dGUpLnRoZW4oKGlzU3NnOiBib29sZWFuKSA9PiB7XG4gICAgICAgIHJldHVybiBpc1NzZ1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShcbiAgICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICByZXNvbHZlZEFzLFxuICAgICAgICAgICAgICAgIHRydWUsXG4gICAgICAgICAgICAgICAgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgICAgICAgPyBvcHRpb25zLmxvY2FsZVxuICAgICAgICAgICAgICAgICAgOiB0aGlzLmxvY2FsZVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgOiBmYWxzZVxuICAgICAgfSksXG4gICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgXSlcbiAgfVxuXG4gIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPEdvb2RQYWdlQ2FjaGU+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IGNhY2hlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAoXG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmXG4gICAgICAhdGhpcy5pc1ByZXZpZXcgJiZcbiAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XVxuICAgICkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pXG4gICAgfVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IHJlc291cmNlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAodGhpcy5zZHJbcmVzb3VyY2VLZXldKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZHJbcmVzb3VyY2VLZXldXG4gICAgfVxuICAgIHJldHVybiAodGhpcy5zZHJbcmVzb3VyY2VLZXldID0gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcilcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV1cbiAgICAgICAgcmV0dXJuIGRhdGFcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfSkpXG4gIH1cblxuICBnZXRJbml0aWFsUHJvcHMoXG4gICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlLFxuICAgIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddXG4gICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwIGFzIEFwcENvbXBvbmVudClcbiAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWVcbiAgICByZXR1cm4gbG9hZEdldEluaXRpYWxQcm9wczxBcHBDb250ZXh0VHlwZTxSb3V0ZXI+PihBcHAsIHtcbiAgICAgIEFwcFRyZWUsXG4gICAgICBDb21wb25lbnQsXG4gICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICBjdHgsXG4gICAgfSlcbiAgfVxuXG4gIGFib3J0Q29tcG9uZW50TG9hZChhczogc3RyaW5nLCByb3V0ZVByb3BzOiBSb3V0ZVByb3BlcnRpZXMpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdChcbiAgICAgICAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAgICAgICBidWlsZENhbmNlbGxhdGlvbkVycm9yKCksXG4gICAgICAgIGFzLFxuICAgICAgICByb3V0ZVByb3BzXG4gICAgICApXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoXG4gICAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyxcbiAgICByZXNldFNjcm9sbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgbnVsbFxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdWIoXG4gICAgICBkYXRhLFxuICAgICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCBhcyBBcHBDb21wb25lbnQsXG4gICAgICByZXNldFNjcm9sbFxuICAgIClcbiAgfVxufVxuIiwiLy8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCAqIGFzIHF1ZXJ5c3RyaW5nIGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHMgPSAvaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS9cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmo6IFVybE9iamVjdCkge1xuICBsZXQgeyBhdXRoLCBob3N0bmFtZSB9ID0gdXJsT2JqXG4gIGxldCBwcm90b2NvbCA9IHVybE9iai5wcm90b2NvbCB8fCAnJ1xuICBsZXQgcGF0aG5hbWUgPSB1cmxPYmoucGF0aG5hbWUgfHwgJydcbiAgbGV0IGhhc2ggPSB1cmxPYmouaGFzaCB8fCAnJ1xuICBsZXQgcXVlcnkgPSB1cmxPYmoucXVlcnkgfHwgJydcbiAgbGV0IGhvc3Q6IHN0cmluZyB8IGZhbHNlID0gZmFsc2VcblxuICBhdXRoID0gYXV0aCA/IGVuY29kZVVSSUNvbXBvbmVudChhdXRoKS5yZXBsYWNlKC8lM0EvaSwgJzonKSArICdAJyA6ICcnXG5cbiAgaWYgKHVybE9iai5ob3N0KSB7XG4gICAgaG9zdCA9IGF1dGggKyB1cmxPYmouaG9zdFxuICB9IGVsc2UgaWYgKGhvc3RuYW1lKSB7XG4gICAgaG9zdCA9IGF1dGggKyAofmhvc3RuYW1lLmluZGV4T2YoJzonKSA/IGBbJHtob3N0bmFtZX1dYCA6IGhvc3RuYW1lKVxuICAgIGlmICh1cmxPYmoucG9ydCkge1xuICAgICAgaG9zdCArPSAnOicgKyB1cmxPYmoucG9ydFxuICAgIH1cbiAgfVxuXG4gIGlmIChxdWVyeSAmJiB0eXBlb2YgcXVlcnkgPT09ICdvYmplY3QnKSB7XG4gICAgcXVlcnkgPSBTdHJpbmcocXVlcnlzdHJpbmcudXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhxdWVyeSBhcyBQYXJzZWRVcmxRdWVyeSkpXG4gIH1cblxuICBsZXQgc2VhcmNoID0gdXJsT2JqLnNlYXJjaCB8fCAocXVlcnkgJiYgYD8ke3F1ZXJ5fWApIHx8ICcnXG5cbiAgaWYgKHByb3RvY29sICYmIHByb3RvY29sLnN1YnN0cigtMSkgIT09ICc6JykgcHJvdG9jb2wgKz0gJzonXG5cbiAgaWYgKFxuICAgIHVybE9iai5zbGFzaGVzIHx8XG4gICAgKCghcHJvdG9jb2wgfHwgc2xhc2hlZFByb3RvY29scy50ZXN0KHByb3RvY29sKSkgJiYgaG9zdCAhPT0gZmFsc2UpXG4gICkge1xuICAgIGhvc3QgPSAnLy8nICsgKGhvc3QgfHwgJycpXG4gICAgaWYgKHBhdGhuYW1lICYmIHBhdGhuYW1lWzBdICE9PSAnLycpIHBhdGhuYW1lID0gJy8nICsgcGF0aG5hbWVcbiAgfSBlbHNlIGlmICghaG9zdCkge1xuICAgIGhvc3QgPSAnJ1xuICB9XG5cbiAgaWYgKGhhc2ggJiYgaGFzaFswXSAhPT0gJyMnKSBoYXNoID0gJyMnICsgaGFzaFxuICBpZiAoc2VhcmNoICYmIHNlYXJjaFswXSAhPT0gJz8nKSBzZWFyY2ggPSAnPycgKyBzZWFyY2hcblxuICBwYXRobmFtZSA9IHBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZywgZW5jb2RlVVJJQ29tcG9uZW50KVxuICBzZWFyY2ggPSBzZWFyY2gucmVwbGFjZSgnIycsICclMjMnKVxuXG4gIHJldHVybiBgJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YFxufVxuIiwiLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpXG59XG4iLCJpbXBvcnQgeyBnZXRMb2NhdGlvbk9yaWdpbiB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbi8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZCB3aXRoIG9uZSBleGNlcHRpb24sIGluIHRoZSBicm93c2VyLCBhYnNvbHV0ZSB1cmxzIHRoYXQgYXJlIG9uXG4gKiB0aGUgY3VycmVudCBvcmlnaW4gd2lsbCBiZSBwYXJzZWQgYXMgcmVsYXRpdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsOiBzdHJpbmcsIGJhc2U/OiBzdHJpbmcpIHtcbiAgY29uc3QgZ2xvYmFsQmFzZSA9IG5ldyBVUkwoXG4gICAgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyAnaHR0cDovL24nIDogZ2V0TG9jYXRpb25PcmlnaW4oKVxuICApXG4gIGNvbnN0IHJlc29sdmVkQmFzZSA9IGJhc2UgPyBuZXcgVVJMKGJhc2UsIGdsb2JhbEJhc2UpIDogZ2xvYmFsQmFzZVxuICBjb25zdCB7IHBhdGhuYW1lLCBzZWFyY2hQYXJhbXMsIHNlYXJjaCwgaGFzaCwgaHJlZiwgb3JpZ2luIH0gPSBuZXcgVVJMKFxuICAgIHVybCxcbiAgICByZXNvbHZlZEJhc2VcbiAgKVxuICBpZiAob3JpZ2luICE9PSBnbG9iYWxCYXNlLm9yaWdpbikge1xuICAgIHRocm93IG5ldyBFcnJvcihgaW52YXJpYW50OiBpbnZhbGlkIHJlbGF0aXZlIFVSTCwgcm91dGVyIHJlY2VpdmVkICR7dXJsfWApXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBxdWVyeTogc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWY6IGhyZWYuc2xpY2UoZ2xvYmFsQmFzZS5vcmlnaW4ubGVuZ3RoKSxcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoXG4gIHNlYXJjaFBhcmFtczogVVJMU2VhcmNoUGFyYW1zXG4pOiBQYXJzZWRVcmxRdWVyeSB7XG4gIGNvbnN0IHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG4gIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeVtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcXVlcnlba2V5XSA9IHZhbHVlXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKSB7XG4gICAgICA7KHF1ZXJ5W2tleV0gYXMgc3RyaW5nW10pLnB1c2godmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSBhcyBzdHJpbmcsIHZhbHVlXVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHF1ZXJ5XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0ocGFyYW06IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmIChcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdzdHJpbmcnIHx8XG4gICAgKHR5cGVvZiBwYXJhbSA9PT0gJ251bWJlcicgJiYgIWlzTmFOKHBhcmFtKSkgfHxcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdib29sZWFuJ1xuICApIHtcbiAgICByZXR1cm4gU3RyaW5nKHBhcmFtKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAnJ1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cmxRdWVyeVRvU2VhcmNoUGFyYW1zKFxuICB1cmxRdWVyeTogUGFyc2VkVXJsUXVlcnlcbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxuICBPYmplY3QuZW50cmllcyh1cmxRdWVyeSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChpdGVtKSA9PiByZXN1bHQuYXBwZW5kKGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShpdGVtKSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5zZXQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHZhbHVlKSlcbiAgICB9XG4gIH0pXG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbihcbiAgdGFyZ2V0OiBVUkxTZWFyY2hQYXJhbXMsXG4gIC4uLnNlYXJjaFBhcmFtc0xpc3Q6IFVSTFNlYXJjaFBhcmFtc1tdXG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBzZWFyY2hQYXJhbXNMaXN0LmZvckVhY2goKHNlYXJjaFBhcmFtcykgPT4ge1xuICAgIEFycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaCgoa2V5KSA9PiB0YXJnZXQuZGVsZXRlKGtleSkpXG4gICAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHRhcmdldC5hcHBlbmQoa2V5LCB2YWx1ZSkpXG4gIH0pXG4gIHJldHVybiB0YXJnZXRcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlc29sdmVSZXdyaXRlcygpIHt9XG4iLCJpbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi9yb3V0ZS1yZWdleCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4OiBSZXR1cm5UeXBlPHR5cGVvZiBnZXRSb3V0ZVJlZ2V4Pikge1xuICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXhcbiAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByZS5leGVjKHBhdGhuYW1lISlcbiAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbTogc3RyaW5nKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKVxuICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICBjb25zdCBlcnI6IEVycm9yICYgeyBjb2RlPzogc3RyaW5nIH0gPSBuZXcgRXJyb3IoXG4gICAgICAgICAgJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nXG4gICAgICAgIClcbiAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCdcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHBhcmFtczogeyBbcGFyYW1OYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9ID0ge31cblxuICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV1cbiAgICAgIGNvbnN0IG0gPSByb3V0ZU1hdGNoW2cucG9zXVxuICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXJhbXNbc2x1Z05hbWVdID0gfm0uaW5kZXhPZignLycpXG4gICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKChlbnRyeSkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICA6IGcucmVwZWF0XG4gICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgIDogZGVjb2RlKG0pXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcGFyYW1zXG4gIH1cbn1cbiIsImV4cG9ydCBpbnRlcmZhY2UgR3JvdXAge1xuICBwb3M6IG51bWJlclxuICByZXBlYXQ6IGJvb2xlYW5cbiAgb3B0aW9uYWw6IGJvb2xlYW5cbn1cblxuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW06IHN0cmluZykge1xuICBjb25zdCBvcHRpb25hbCA9IHBhcmFtLnN0YXJ0c1dpdGgoJ1snKSAmJiBwYXJhbS5lbmRzV2l0aCgnXScpXG4gIGlmIChvcHRpb25hbCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMSwgLTEpXG4gIH1cbiAgY29uc3QgcmVwZWF0ID0gcGFyYW0uc3RhcnRzV2l0aCgnLi4uJylcbiAgaWYgKHJlcGVhdCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMylcbiAgfVxuICByZXR1cm4geyBrZXk6IHBhcmFtLCByZXBlYXQsIG9wdGlvbmFsIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICByb3V0ZUtleXM/OiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH1cbiAgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH1cbn0ge1xuICBjb25zdCBzZWdtZW50cyA9IChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG4gICAgLnNsaWNlKDEpXG4gICAgLnNwbGl0KCcvJylcblxuICBjb25zdCBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfSA9IHt9XG4gIGxldCBncm91cEluZGV4ID0gMVxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICBncm91cHNba2V5XSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdCwgb3B0aW9uYWwgfVxuICAgICAgICByZXR1cm4gcmVwZWF0ID8gKG9wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgIH1cbiAgICB9KVxuICAgIC5qb2luKCcnKVxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsZXQgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgbGV0IHJvdXRlS2V5Q2hhckxlbmd0aCA9IDFcblxuICAgIC8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbiAgICBjb25zdCBnZXRTYWZlUm91dGVLZXkgPSAoKSA9PiB7XG4gICAgICBsZXQgcm91dGVLZXkgPSAnJ1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlS2V5Q2hhckxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJvdXRlS2V5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocm91dGVLZXlDaGFyQ29kZSlcbiAgICAgICAgcm91dGVLZXlDaGFyQ29kZSsrXG5cbiAgICAgICAgaWYgKHJvdXRlS2V5Q2hhckNvZGUgPiAxMjIpIHtcbiAgICAgICAgICByb3V0ZUtleUNoYXJMZW5ndGgrK1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcm91dGVLZXlcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZUtleXM6IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9XG5cbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICAgIC8vIHJlcGxhY2UgYW55IG5vbi13b3JkIGNoYXJhY3RlcnMgc2luY2UgdGhleSBjYW4gYnJlYWtcbiAgICAgICAgICAvLyB0aGUgbmFtZWQgcmVnZXhcbiAgICAgICAgICBsZXQgY2xlYW5lZEtleSA9IGtleS5yZXBsYWNlKC9cXFcvZywgJycpXG4gICAgICAgICAgbGV0IGludmFsaWRLZXkgPSBmYWxzZVxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4gICAgICAgICAgLy8gc2FmZSBrZXlcbiAgICAgICAgICBpZiAoY2xlYW5lZEtleS5sZW5ndGggPT09IDAgfHwgY2xlYW5lZEtleS5sZW5ndGggPiAzMCkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc05hTihwYXJzZUludChjbGVhbmVkS2V5LnN1YnN0cigwLCAxKSkpKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbnZhbGlkS2V5KSB7XG4gICAgICAgICAgICBjbGVhbmVkS2V5ID0gZ2V0U2FmZVJvdXRlS2V5KClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUtleXNbY2xlYW5lZEtleV0gPSBrZXlcbiAgICAgICAgICByZXR1cm4gcmVwZWF0XG4gICAgICAgICAgICA/IG9wdGlvbmFsXG4gICAgICAgICAgICAgID8gYCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2BcbiAgICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWBcbiAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuam9pbignJylcblxuICAgIHJldHVybiB7XG4gICAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICAgIGdyb3VwcyxcbiAgICAgIHJvdXRlS2V5cyxcbiAgICAgIG5hbWVkUmVnZXg6IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCxcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgIGdyb3VwcyxcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgZm9ybWF0VXJsIH0gZnJvbSAnLi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybCdcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBFbnYgfSBmcm9tICdAbmV4dC9lbnYnXG5pbXBvcnQgeyBCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vc2VydmVyL2dldC1wYWdlLWZpbGVzJ1xuaW1wb3J0IHsgRG9tYWluTG9jYWxlcyB9IGZyb20gJy4uL3NlcnZlci9jb25maWcnXG5pbXBvcnQgeyBQcmV2aWV3RGF0YSB9IGZyb20gJ25leHQvdHlwZXMnXG5cbi8qKlxuICogVHlwZXMgdXNlZCBieSBib3RoIG5leHQgYW5kIG5leHQtc2VydmVyXG4gKi9cblxuZXhwb3J0IHR5cGUgTmV4dENvbXBvbmVudFR5cGU8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCA9IE5leHRQYWdlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+ID0gQ29tcG9uZW50VHlwZTxQPiAmIHtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIGluaXRpYWwgcGFnZSBsb2FkIGRhdGEgcG9wdWxhdGlvbi4gRGF0YSByZXR1cm5lZCBmcm9tIGBnZXRJbml0aWFsUHJvcHNgIGlzIHNlcmlhbGl6ZWQgd2hlbiBzZXJ2ZXIgcmVuZGVyZWQuXG4gICAqIE1ha2Ugc3VyZSB0byByZXR1cm4gcGxhaW4gYE9iamVjdGAgd2l0aG91dCB1c2luZyBgRGF0ZWAsIGBNYXBgLCBgU2V0YC5cbiAgICogQHBhcmFtIGN0eCBDb250ZXh0IG9mIGBwYWdlYFxuICAgKi9cbiAgZ2V0SW5pdGlhbFByb3BzPyhjb250ZXh0OiBDKTogSVAgfCBQcm9taXNlPElQPlxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wc1xuPiAmIHtcbiAgcmVuZGVyRG9jdW1lbnQoXG4gICAgRG9jdW1lbnQ6IERvY3VtZW50VHlwZSxcbiAgICBwcm9wczogRG9jdW1lbnRQcm9wc1xuICApOiBSZWFjdC5SZWFjdEVsZW1lbnRcbn1cblxuZXhwb3J0IHR5cGUgQXBwVHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGVcbj5cblxuZXhwb3J0IHR5cGUgQXBwVHJlZVR5cGUgPSBDb21wb25lbnRUeXBlPFxuICBBcHBJbml0aWFsUHJvcHMgJiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfVxuPlxuXG4vKipcbiAqIFdlYiB2aXRhbHMgcHJvdmlkZWQgdG8gX2FwcC5yZXBvcnRXZWJWaXRhbHMgYnkgQ29yZSBXZWIgVml0YWxzIHBsdWdpbiBkZXZlbG9wZWQgYnkgR29vZ2xlIENocm9tZSB0ZWFtLlxuICogaHR0cHM6Ly9uZXh0anMub3JnL2Jsb2cvbmV4dC05LTQjaW50ZWdyYXRlZC13ZWItdml0YWxzLXJlcG9ydGluZ1xuICovXG5leHBvcnQgdHlwZSBOZXh0V2ViVml0YWxzTWV0cmljID0ge1xuICBpZDogc3RyaW5nXG4gIGxhYmVsOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIHN0YXJ0VGltZTogbnVtYmVyXG4gIHZhbHVlOiBudW1iZXJcbn1cblxuZXhwb3J0IHR5cGUgRW5oYW5jZXI8Qz4gPSAoQ29tcG9uZW50OiBDKSA9PiBDXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudHNFbmhhbmNlciA9XG4gIHwge1xuICAgICAgZW5oYW5jZUFwcD86IEVuaGFuY2VyPEFwcFR5cGU+XG4gICAgICBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG4gICAgfVxuICB8IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmdcbiAgaGVhZD86IEFycmF5PEpTWC5FbGVtZW50IHwgbnVsbD5cbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChcbiAgb3B0aW9ucz86IENvbXBvbmVudHNFbmhhbmNlclxuKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PlxuXG5leHBvcnQgdHlwZSBCYXNlQ29udGV4dCA9IHtcbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBORVhUX0RBVEEgPSB7XG4gIHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIHBhZ2U6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYnVpbGRJZDogc3RyaW5nXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIHJ1bnRpbWVDb25maWc/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gIG5leHRFeHBvcnQ/OiBib29sZWFuXG4gIGF1dG9FeHBvcnQ/OiBib29sZWFuXG4gIGlzRmFsbGJhY2s/OiBib29sZWFuXG4gIGR5bmFtaWNJZHM/OiAoc3RyaW5nIHwgbnVtYmVyKVtdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbiAgc2NyaXB0TG9hZGVyPzogYW55W11cbiAgaXNQcmV2aWV3PzogYm9vbGVhblxufVxuXG4vKipcbiAqIGBOZXh0YCBjb250ZXh0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dFBhZ2VDb250ZXh0IHtcbiAgLyoqXG4gICAqIEVycm9yIG9iamVjdCBpZiBlbmNvdW50ZXJlZCBkdXJpbmcgcmVuZGVyaW5nXG4gICAqL1xuICBlcnI/OiAoRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfSkgfCBudWxsXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVxdWVzdCBvYmplY3QuXG4gICAqL1xuICByZXE/OiBJbmNvbWluZ01lc3NhZ2VcbiAgLyoqXG4gICAqIGBIVFRQYCByZXNwb25zZSBvYmplY3QuXG4gICAqL1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICAvKipcbiAgICogUGF0aCBzZWN0aW9uIG9mIGBVUkxgLlxuICAgKi9cbiAgcGF0aG5hbWU6IHN0cmluZ1xuICAvKipcbiAgICogUXVlcnkgc3RyaW5nIHNlY3Rpb24gb2YgYFVSTGAgcGFyc2VkIGFzIGFuIG9iamVjdC5cbiAgICovXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICAvKipcbiAgICogYFN0cmluZ2Agb2YgdGhlIGFjdHVhbCBwYXRoIGluY2x1ZGluZyBxdWVyeS5cbiAgICovXG4gIGFzUGF0aD86IHN0cmluZ1xuICAvKipcbiAgICogYENvbXBvbmVudGAgdGhlIHRyZWUgb2YgdGhlIEFwcCB0byB1c2UgaWYgbmVlZGluZyB0byByZW5kZXIgc2VwYXJhdGVseVxuICAgKi9cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbn1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dFR5cGU8UiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyPiA9IHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQ+XG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG4gIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gIHJvdXRlcjogUlxufVxuXG5leHBvcnQgdHlwZSBBcHBJbml0aWFsUHJvcHMgPSB7XG4gIHBhZ2VQcm9wczogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzVHlwZTxcbiAgUiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyLFxuICBQID0ge31cbj4gPSBBcHBJbml0aWFsUHJvcHMgJiB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0LCBhbnksIFA+XG4gIHJvdXRlcjogUlxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudENvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQgJiB7XG4gIHJlbmRlclBhZ2U6IFJlbmRlclBhZ2Vcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRJbml0aWFsUHJvcHMgPSBSZW5kZXJQYWdlUmVzdWx0ICYge1xuICBzdHlsZXM/OiBSZWFjdC5SZWFjdEVsZW1lbnRbXSB8IFJlYWN0LlJlYWN0RnJhZ21lbnRcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRQcm9wcyA9IERvY3VtZW50SW5pdGlhbFByb3BzICYge1xuICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgZGFuZ2Vyb3VzQXNQYXRoOiBzdHJpbmdcbiAgZG9jQ29tcG9uZW50c1JlbmRlcmVkOiB7XG4gICAgSHRtbD86IGJvb2xlYW5cbiAgICBNYWluPzogYm9vbGVhblxuICAgIEhlYWQ/OiBib29sZWFuXG4gICAgTmV4dFNjcmlwdD86IGJvb2xlYW5cbiAgfVxuICBidWlsZE1hbmlmZXN0OiBCdWlsZE1hbmlmZXN0XG4gIGFtcFBhdGg6IHN0cmluZ1xuICBpbkFtcE1vZGU6IGJvb2xlYW5cbiAgaHlicmlkQW1wOiBib29sZWFuXG4gIGlzRGV2ZWxvcG1lbnQ6IGJvb2xlYW5cbiAgZHluYW1pY0ltcG9ydHM6IHN0cmluZ1tdXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIGNhbm9uaWNhbEJhc2U6IHN0cmluZ1xuICBoZWFkVGFnczogYW55W11cbiAgdW5zdGFibGVfcnVudGltZUpTPzogZmFsc2VcbiAgdW5zdGFibGVfSnNQcmVsb2FkPzogZmFsc2VcbiAgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmc6IHN0cmluZ1xuICBzY3JpcHRMb2FkZXI6IHsgZGVmZXI/OiBzdHJpbmdbXTsgZWFnZXI/OiBhbnlbXSB9XG4gIGxvY2FsZT86IHN0cmluZ1xufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgSW5jb21pbmdNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgcXVlcnlgIHZhbHVlcyBmcm9tIHVybFxuICAgKi9cbiAgcXVlcnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXVxuICB9XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYGNvb2tpZXNgIGZyb20gaGVhZGVyXG4gICAqL1xuICBjb29raWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH1cblxuICBib2R5OiBhbnlcblxuICBlbnY6IEVudlxuXG4gIHByZXZpZXc/OiBib29sZWFuXG4gIC8qKlxuICAgKiBQcmV2aWV3IGRhdGEgc2V0IG9uIHRoZSByZXF1ZXN0LCBpZiBhbnlcbiAgICogKi9cbiAgcHJldmlld0RhdGE/OiBQcmV2aWV3RGF0YVxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHN0YXR1czogbnVtYmVyLCB1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuXG4gIC8qKlxuICAgKiBTZXQgcHJldmlldyBkYXRhIGZvciBOZXh0LmpzJyBwcmVyZW5kZXIgbW9kZVxuICAgKi9cbiAgc2V0UHJldmlld0RhdGE6IChcbiAgICBkYXRhOiBvYmplY3QgfCBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgKGluIHNlY29uZHMpIGZvciB0aGUgcHJldmlldyBzZXNzaW9uIHRvIGxhc3QgZm9yLlxuICAgICAgICogVGhlIGdpdmVuIG51bWJlciB3aWxsIGJlIGNvbnZlcnRlZCB0byBhbiBpbnRlZ2VyIGJ5IHJvdW5kaW5nIGRvd24uXG4gICAgICAgKiBCeSBkZWZhdWx0LCBubyBtYXhpbXVtIGFnZSBpcyBzZXQgYW5kIHRoZSBwcmV2aWV3IHNlc3Npb24gZmluaXNoZXNcbiAgICAgICAqIHdoZW4gdGhlIGNsaWVudCBzaHV0cyBkb3duIChicm93c2VyIGlzIGNsb3NlZCkuXG4gICAgICAgKi9cbiAgICAgIG1heEFnZT86IG51bWJlclxuICAgIH1cbiAgKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgY2xlYXJQcmV2aWV3RGF0YTogKCkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlIYW5kbGVyPFQgPSBhbnk+ID0gKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxUPlxuKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuXG4vKipcbiAqIFV0aWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjT25jZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgZm46IFRcbik6IFQge1xuICBsZXQgdXNlZCA9IGZhbHNlXG4gIGxldCByZXN1bHQ6IFJldHVyblR5cGU8VD5cblxuICByZXR1cm4gKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmICghdXNlZCkge1xuICAgICAgdXNlZCA9IHRydWVcbiAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSkgYXMgVFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb25cbiAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMKCkge1xuICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvblxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWU8UD4oQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPFA+KSB7XG4gIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgID8gQ29tcG9uZW50XG4gICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc1NlbnQocmVzOiBTZXJ2ZXJSZXNwb25zZSkge1xuICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wczxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4oQXBwOiBOZXh0Q29tcG9uZW50VHlwZTxDLCBJUCwgUD4sIGN0eDogQyk6IFByb21pc2U8SVA+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoQXBwLnByb3RvdHlwZT8uZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgQXBwXG4gICAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpXG5cbiAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge30gYXMgSVBcbiAgfVxuXG4gIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG5cbiAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgIHJldHVybiBwcm9wc1xuICB9XG5cbiAgaWYgKCFwcm9wcykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgQXBwXG4gICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGAke2dldERpc3BsYXlOYW1lKFxuICAgICAgICAgIEFwcFxuICAgICAgICApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2BcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHNcbn1cblxuZXhwb3J0IGNvbnN0IHVybE9iamVjdEtleXMgPSBbXG4gICdhdXRoJyxcbiAgJ2hhc2gnLFxuICAnaG9zdCcsXG4gICdob3N0bmFtZScsXG4gICdocmVmJyxcbiAgJ3BhdGgnLFxuICAncGF0aG5hbWUnLFxuICAncG9ydCcsXG4gICdwcm90b2NvbCcsXG4gICdxdWVyeScsXG4gICdzZWFyY2gnLFxuICAnc2xhc2hlcycsXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmw6IFVybE9iamVjdCk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXRVcmwodXJsKVxufVxuXG5leHBvcnQgY29uc3QgU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgU1QgPVxuICBTUCAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJ1xuIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVQYXRoU2VwPW5vcm1hbGl6ZVBhdGhTZXA7ZXhwb3J0cy5kZW5vcm1hbGl6ZVBhZ2VQYXRoPWRlbm9ybWFsaXplUGFnZVBhdGg7ZnVuY3Rpb24gbm9ybWFsaXplUGF0aFNlcChwYXRoKXtyZXR1cm4gcGF0aC5yZXBsYWNlKC9cXFxcL2csJy8nKTt9ZnVuY3Rpb24gZGVub3JtYWxpemVQYWdlUGF0aChwYWdlKXtwYWdlPW5vcm1hbGl6ZVBhdGhTZXAocGFnZSk7aWYocGFnZS5zdGFydHNXaXRoKCcvaW5kZXgvJykpe3BhZ2U9cGFnZS5zbGljZSg2KTt9ZWxzZSBpZihwYWdlPT09Jy9pbmRleCcpe3BhZ2U9Jy8nO31yZXR1cm4gcGFnZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMubWFwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2ltYWdlJylcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsImZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZXh0ZW5kczsiLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBkYiB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9maXJlYmFzZS1hZG1pbic7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcclxuaW1wb3J0IHsgZGIgYXMgZGJDbGllbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvZmlyZWJhc2UnO1xyXG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL25ld0F1dGgnO1xyXG5pbXBvcnQgTmF2YmFyVGVtcGxhdGUgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9kYXNoYm9hcmQvTmF2YmFyVGVtcGxhdGUnO1xyXG5pbXBvcnQgVGlwcHlNb25zdGVyIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvZGFzaGJvYXJkL1RpcHB5JztcclxuLy8gaW1wb3J0IFByb2plY3ROYXYgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9kYXNoYm9hcmQvc3RhcnR1cC9wcm9qZWN0L1Byb2plY3ROYXYnO1xyXG5cclxuY29uc3QgUHJvamVjdFBhZ2UgPSAoeyBwcm9qZWN0cyB9KSA9PiB7XHJcbiAgY29uc3QgW3NlbGVjdGVkUHJvamVjdCwgc2V0U2VsZWN0ZWRQcm9qZWN0XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IGNvbnRhaW5lclJlZiA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IHsgY3VycmVudFVzZXIgfSA9IHVzZUF1dGgoKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdWlkID0gQ29va2llcy5nZXQoJ3VpZCcpO1xyXG4gICAgY29uc3QgZmlsdGVyZWRBcnJheSA9IHByb2plY3RzICYmIHByb2plY3RzLmZpbHRlcigocHJvamVjdCkgPT4gcHJvamVjdC51aWQgPT0gdWlkKTtcclxuICAgIGNvbnNvbGUubG9nKGZpbHRlcmVkQXJyYXkpO1xyXG4gICAgZmlsdGVyZWRBcnJheSAmJiBmaWx0ZXJlZEFycmF5Lmxlbmd0aCA9PSAxICYmIHNldFNlbGVjdGVkUHJvamVjdChmaWx0ZXJlZEFycmF5WzBdKTtcclxuICB9LCBbcHJvamVjdHNdKTtcclxuICBjb25zb2xlLmxvZyhwcm9qZWN0cyk7XHJcbiAgY29uc29sZS5sb2coc2VsZWN0ZWRQcm9qZWN0KTtcclxuXHJcbiAgLy8gQlVTSU5FU1MgUExBTiBDUkVBVEVcclxuICBjb25zdCBvbkJ1c2luZXNzUGxhbkNyZWF0ZSA9IGFzeW5jICgpID0+IHtcclxuICAgIGF3YWl0IGRiQ2xpZW50LmNvbGxlY3Rpb24oJ3Byb2plY3RzJykuZG9jKHNlbGVjdGVkUHJvamVjdC5wcm9qZWN0SWQpLmNvbGxlY3Rpb24oJ2J1c2luZXNzUGxhbicpLmRvYyhyb3V0ZXIucXVlcnkucHJvamVjdCkuc2V0KHtcclxuICAgICAgdWlkOiBjdXJyZW50VXNlci51aWQsXHJcbiAgICAgIHByb2plY3RJZDogc2VsZWN0ZWRQcm9qZWN0LnByb2plY3RJZCxcclxuICAgICAgcGF0aE5hbWU6IHNlbGVjdGVkUHJvamVjdC5wcm9qZWN0TmFtZSxcclxuICAgIH0pO1xyXG4gICAgYXdhaXQgZGJDbGllbnQuY29sbGVjdGlvbigncHJvamVjdHMnKS5kb2Moc2VsZWN0ZWRQcm9qZWN0LnByb2plY3RJZCkudXBkYXRlKHsgaXNCdXNpbmVzc1BsYW5DcmVhdGVkOiB0cnVlIH0pO1xyXG4gICAgcm91dGVyLnB1c2goYC9kYXNoYm9hcmQvcHJvamVjdHMvJHtyb3V0ZXIucXVlcnkucHJvamVjdH0vYnVzaW5lc3MtcGxhbmApO1xyXG4gIH07XHJcblxyXG4gIGNvbnNvbGUubG9nKCdDVVJSRU5UIFBST0pFQ1QgLS0+ICcsIHNlbGVjdGVkUHJvamVjdCk7XHJcblxyXG4gIGNvbnN0IG9uQ2FzaEZsb3dBbmFseXNpc0NyZWF0ZSA9IGFzeW5jICgpID0+IHtcclxuICAgIGF3YWl0IGRiQ2xpZW50XHJcbiAgICAgIC5jb2xsZWN0aW9uKCdwcm9qZWN0cycpXHJcbiAgICAgIC5kb2Moc2VsZWN0ZWRQcm9qZWN0LnByb2plY3RJZClcclxuICAgICAgLmNvbGxlY3Rpb24oJ2Nhc2hGbG93JylcclxuICAgICAgLmRvYyhyb3V0ZXIucXVlcnkucHJvamVjdClcclxuICAgICAgLmNvbGxlY3Rpb24oJ2lucHV0cycpXHJcbiAgICAgIC5kb2MoKVxyXG4gICAgICAuc2V0KHtcclxuICAgICAgICB1aWQ6IGN1cnJlbnRVc2VyLnVpZCxcclxuICAgICAgICBwcm9qZWN0SWQ6IHNlbGVjdGVkUHJvamVjdC5wcm9qZWN0SWQsXHJcbiAgICAgICAgcGF0aE5hbWU6IHNlbGVjdGVkUHJvamVjdC5wcm9qZWN0TmFtZSxcclxuICAgICAgICByZXZlbnVlRWxlbWVudHM6IFtdLFxyXG4gICAgICAgIGNvc3RzRWxlbWVudHM6IFtdLFxyXG4gICAgICAgIGJ1ZGdldEVsZW1lbnRzOiBbXSxcclxuICAgICAgICBnbG9iYWxTdGFydERhdGU6ICcnLFxyXG4gICAgICAgIGdsb2JhbEVuZERhdGU6ICcnLFxyXG4gICAgICAgIHBlcmlvZHM6IFtdLFxyXG4gICAgICAgIHRheDogJzAnLFxyXG4gICAgICB9KTtcclxuICAgIGF3YWl0IGRiQ2xpZW50LmNvbGxlY3Rpb24oJ3Byb2plY3RzJykuZG9jKHNlbGVjdGVkUHJvamVjdC5wcm9qZWN0SWQpLnVwZGF0ZSh7IGlzQ2FzaGZsb3dDcmVhdGVkOiB0cnVlIH0pO1xyXG4gICAgcm91dGVyLnB1c2goYC9kYXNoYm9hcmQvcHJvamVjdHMvJHtyb3V0ZXIucXVlcnkucHJvamVjdH0vY2FzaC1mbG93YCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25Db21wZXRpdG9yc0FuYWx5c2lzQ3JlYXRlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgYXdhaXQgZGJDbGllbnRcclxuICAgICAgLmNvbGxlY3Rpb24oJ3Byb2plY3RzJylcclxuICAgICAgLmRvYyhzZWxlY3RlZFByb2plY3QucHJvamVjdElkKVxyXG4gICAgICAuY29sbGVjdGlvbignY29tcGV0aXRvcnMnKVxyXG4gICAgICAuZG9jKHJvdXRlci5xdWVyeS5wcm9qZWN0KVxyXG4gICAgICAuY29sbGVjdGlvbignaW5wdXRzJylcclxuICAgICAgLmRvYygpXHJcbiAgICAgIC5zZXQoe1xyXG4gICAgICAgIHVpZDogY3VycmVudFVzZXIudWlkLFxyXG4gICAgICAgIHByb2plY3RJZDogc2VsZWN0ZWRQcm9qZWN0LnByb2plY3RJZCxcclxuICAgICAgICBwYXRoTmFtZTogc2VsZWN0ZWRQcm9qZWN0LnByb2plY3ROYW1lLFxyXG4gICAgICAgIGNvbXBldGl0b3JzQXJyYXk6IFtdLFxyXG4gICAgICB9KTtcclxuICAgIGF3YWl0IGRiQ2xpZW50LmNvbGxlY3Rpb24oJ3Byb2plY3RzJykuZG9jKHNlbGVjdGVkUHJvamVjdC5wcm9qZWN0SWQpLnVwZGF0ZSh7IGlzQ29tcGV0aXRvcnNBbmFseXNpc0NyZWF0ZWQ6IHRydWUgfSk7XHJcbiAgICByb3V0ZXIucHVzaChgL2Rhc2hib2FyZC9wcm9qZWN0cy8ke3JvdXRlci5xdWVyeS5wcm9qZWN0fS9jb21wZXRpdG9yc2ApO1xyXG4gIH07XHJcblxyXG4gIGlmIChyb3V0ZXIuaXNGYWxsYmFjaykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8cD5Mb2FkaW5nLi4uPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgLy8gPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgLy8gICA8aDIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5XZWxjb21lIHRvIHRoZSBwcm9qZWN0IHBhZ2UhIFByb2plY3QgbmFtZTo8L2gyPlxyXG4gICAgLy8gICB7c2VsZWN0ZWRQcm9qZWN0ICE9PSBudWxsICYmIChcclxuICAgIC8vICAgICA8PlxyXG4gICAgLy8gICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj57c2VsZWN0ZWRQcm9qZWN0LnByb2plY3ROYW1lfTwvcD5cclxuICAgIC8vICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+e3NlbGVjdGVkUHJvamVjdC51aWR9PC9wPlxyXG4gICAgLy8gICAgIDwvPlxyXG4gICAgLy8gICApfVxyXG4gICAgLy8gPC9kaXY+XHJcbiAgICA8PlxyXG4gICAgICA8VGlwcHlNb25zdGVyIC8+XHJcbiAgICAgIDxOYXZiYXJUZW1wbGF0ZT5cclxuICAgICAgICB7c2VsZWN0ZWRQcm9qZWN0ID8gKFxyXG4gICAgICAgICAgPGRpdiByZWY9e2NvbnRhaW5lclJlZn0gY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIHctZnVsbCByZWxhdGl2ZSBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBzbTptYXgtdy1zbUNvbnRhaW5lciBtZDptYXgtdy1tZENvbnRhaW5lciBsZzptYXgtdy1sZ0NvbnRhaW5lciB4bDptYXgtdy14bENvbnRhaW5lciAyeGw6bWF4LXcteHhsQ29udGFpbmVyIG5vcm1hbDptYXgtdy1ub3JtYWxDb250YWluZXIgcmVsYXRpdmUgbXQtMTZcIj5cclxuICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWF4LXctZnVsbCByZWxhdGl2ZSBtdC0xNiBtYi0xNiBweC0zMlwiPiAqL31cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ3JpZC1yb3dzLTEgZ3JpZC1mbG93LWNvbFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMzBcIlxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMzBcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZpbGwtY3VycmVudCB0ZXh0LXByaW1hcnkgZGFyazp0ZXh0LXByaW1hcnlkYXJrXCJcclxuICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDEyOCAxMjhcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRpdGxlPkxhbmRpbmcgU3VjY2VzczwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9XCJMYW5kaW5nX1N1Y2Nlc3NcIiBkYXRhLW5hbWU9XCJMYW5kaW5nIFN1Y2Nlc3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNscy0xXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0xMDkuMyw5MC4xQTQ2LDQ2LDAsMCwwLDY1LDM2VjIwLjA4YzEuNzgtLjYyLDcuMjEtMi4xNCwxMi41Ny4yM2ExOS4zMywxOS4zMywwLDAsMCwxNC44MiwwYy44Ny0uMzguNjEuMzEuNjEtMTcuOTNhMSwxLDAsMCwwLTEuNDMtLjkzYy0uMDcsMC02LjY5LDIuODctMTMuMTgsMEExOS40MSwxOS40MSwwLDAsMCw2NSwuOTMsMSwxLDAsMCwwLDYzLDFWMzZhNDUuODYsNDUuODYsMCwwLDAtMjguNjYsMTAuOEMxNi4xOCw0MC40OCw0LDQwLC43OSw0NS41MS0yLjI5LDUwLjg2LDMuOTQsNTkuMywxMCw2NS42OEExMSwxMSwwLDAsMCwxOCw4M2MuODEsMzguNDEsNDYuMDgsNTkuMiw3NS42NiwzNC4yMSw4LjUzLDMsMjksOS4xNSwzMy41NSwxLjMxQzEzMC4zOSwxMTMsMTIzLjg2LDEwMi42NSwxMDkuMyw5MC4xWk03Ny41OSwzLjMxQTE5LjM5LDE5LjM5LDAsMCwwLDkxLDMuODNWMTguNjhjLTEuNzkuNjItNy4yMiwyLjEzLTEyLjU3LS4yM0ExOS4xOSwxOS4xOSwwLDAsMCw2NSwxNy45M1YzLjA4QzY2LjgxLDIuNDYsNzIuMjQsMSw3Ny41OSwzLjMxWk02NSw0NXYtN2MzOS42OS45MSw1OCw1MC4yNywyOC4yMSw3Ni44MUM3MS4zMiwxMDcsNDYsOTIuNjYsMjcuNzcsNzguNjRhMTEsMTEsMCwwLDAtMy4yLTE2LjEzQTQzLjg4LDQzLjg4LDAsMCwxLDYzLDM4LjA2VjQ1QTEsMSwwLDAsMCw2NSw0NVpNMzIuNTUsNDguMzZhNDYuMjEsNDYuMjEsMCwwLDAtOS44MywxMy4yOCwxMC45MywxMC45MywwLDAsMC0xMS40LDIuNDdDLTguMzksNDMuMjMsNS4yMywzOS4wOCwzMi41NSw0OC4zNlpNMTAsNzJhOSw5LDAsMSwxLDksOUE5LDksMCwwLDEsMTAsNzJabTEwLDExYTExLDExLDAsMCwwLDYuMzQtMi44MmMxOC40NSwxNC4yMSw0My40NSwyOC4zNSw2NS4wNSwzNi4yMkM2MywxMzkuMTYsMjAuODMsMTE5LjEsMjAuMDUsODNabTEwNS40LDM0LjVjLTIuNTEsNC4zNS0xNCwzLjYyLTMwLTEuODVhNDUuNjEsNDUuNjEsMCwwLDAsMTMuNDItMjMuMjFDMTIxLjU5LDEwMy41OCwxMjgsMTEzLjEyLDEyNS40NSwxMTcuNDdaXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5ZGFyayB0ZXh0LTJ4bCBtdC0yIHBsLTIgZGFyazp0ZXh0LWJhY2tncm91bmRcIj5cclxuICAgICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRQcm9qZWN0ICYmIHNlbGVjdGVkUHJvamVjdC5wcm9qZWN0TmFtZX1cclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1lbmRcIj5cclxuICAgICAgICAgICAgICAgICAgey8qIDxQcm9qZWN0TmF2IC8+ICovfVxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goYC9kYXNoYm9hcmQvc3RhcnR1cC8ke3JvdXRlci5xdWVyeS5wcm9qZWN0fS9lZGl0YCl9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaG92ZXI6YmctcHJpbWFyeSBob3Zlcjp0ZXh0LXdoaXRlIGRhcms6aG92ZXI6YmctcHJpbWFyeWRhcmsgZGFyazpob3Zlcjp0ZXh0LWJhY2tncm91bmQgZm9jdXM6b3V0bGluZS1ub25lIGJvcmRlciBib3JkZXItcHJpbWFyeSB0ZXh0LXByaW1hcnkgdGV4dC1zbSBmb250LWxpZ2h0IHB5LTIgcHgtOCByb3VuZGVkLTJ4bCBtdC0yIGRhcms6dGV4dC1wcmltYXJ5ZGFyayBkYXJrOmJvcmRlci1wcmltYXJ5ZGFya1wiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBTZXR0aW5nc1xyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1zZWNvbmRhcnkgdGV4dC1tZCB0ZXh0LWdyYXlcIj5UaGlzIGlzIHRoZSBiZXN0IHN0YXJ0dXAgaW4gdGhlIHRlY2ggZmllbGQ8L2gxPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIHsvKiBTRUNUSU9OICovfVxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMmZyIGdyaWQtcm93cy0zZnIgbXQtMjAgZ2FwLTE2IG1iLTMyXCI+XHJcbiAgICAgICAgICAgICAgICB7LyogU0hPV1VQMSAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC0yeGwgdHJhbnNmb3JtIGhvdmVyOnNjYWxlLTEwNSBob3ZlcjotdHJhbnNsYXRlLXktMiBob3ZlcjotdHJhbnNsYXRlLXgtMiB0cmFuc2l0aW9uIGR1cmF0aW9uLTUwMCBlYXNlLWluLW91dFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5ZGFyayB0ZXh0LWxnIGRhcms6dGV4dC1iYWNrZ3JvdW5kXCI+U3RhcnR1cCBpZGVhPC9oMT5cclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHN0eWxlPXt7IG1heEhlaWdodDogMzMwIH19XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2hhZG93LWxnIG10LTEgdy1mdWxsIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGJvcmRlci1yLTYgcm91bmRlZC0yeGwgYmctd2hpdGUgZGFyazpiZy1iYWNrZ3JvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgaGVpZ2h0PXsyMDB9IHdpZHRoPXsyMDB9IHNyYz1cIi9sYXVuY2gtbWFrZXIuc3ZnXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1iYXNlIHRleHQtZ3JheSB0ZXh0LWNlbnRlciBweC04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBTdGFydHVwIGlkZWEgd2lsbCBndWlkZSB5b3UgdGhyb3VnaCB0aGUgcHJvY2VzcyBvZiBjcmVhdGluZyB5b3VyIGJ1c2luZXNzIHBsYW4uIPCflI5cclxuICAgICAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImhvdmVyOmJnLXByaW1hcnkgaG92ZXI6dGV4dC13aGl0ZSBkYXJrOmhvdmVyOmJnLXByaW1hcnlkYXJrIGRhcms6aG92ZXI6dGV4dC1iYWNrZ3JvdW5kIGZvY3VzOm91dGxpbmUtbm9uZSBib3JkZXIgYm9yZGVyLXByaW1hcnkgdGV4dC1wcmltYXJ5IGRhcms6dGV4dC1wcmltYXJ5ZGFyayBkYXJrOmJvcmRlci1wcmltYXJ5ZGFyayB0ZXh0LXNtIGZvbnQtbGlnaHQgcHktMiBweC02IHJvdW5kZWQtMnhsIG0tMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDcmVhdGUgeW91ciBzdGFydHVwIGlkZWFcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgey8qIFNIT1dVUDIgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtMnhsIHRyYW5zZm9ybSBob3ZlcjpzY2FsZS0xMDUgaG92ZXI6LXRyYW5zbGF0ZS15LTIgaG92ZXI6LXRyYW5zbGF0ZS14LTIgdHJhbnNpdGlvbiBkdXJhdGlvbi01MDAgZWFzZS1pbi1vdXRcIj5cclxuICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeWRhcmsgdGV4dC1sZyBkYXJrOnRleHQtYmFja2dyb3VuZFwiPkJ1c2luZXNzIHBsYW48L2gxPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc3R5bGU9e3sgbWF4SGVpZ2h0OiAzMzAgfX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaGFkb3ctbGcgbXQtMSB3LWZ1bGwgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgYm9yZGVyLXItNiByb3VuZGVkLTJ4bCBiZy13aGl0ZSBkYXJrOmJnLWJhY2tncm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBoZWlnaHQ9ezIwMH0gd2lkdGg9ezIwMH0gc3JjPVwiL21haW4tc2VjdGlvbnMvYnVzaW5lc3MtcGxhbi5zdmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgdGV4dC1ncmF5IHRleHQtY2VudGVyIHB4LThcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIExldCdzIGNyZWF0ZSB5b3VyIGJ1c2luZXNzIHBsYW4sIHdoaWNoIHdpbGwgYmUgdGhlIGNvcmUgb2YgeW91ciBzdGFydHVwIHByZXNlbnRhdGlvbi4g8J+UjlxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25CdXNpbmVzc1BsYW5DcmVhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhvdmVyOmJnLXByaW1hcnkgaG92ZXI6dGV4dC13aGl0ZSBkYXJrOmhvdmVyOmJnLXByaW1hcnlkYXJrIGRhcms6aG92ZXI6dGV4dC1iYWNrZ3JvdW5kIGZvY3VzOm91dGxpbmUtbm9uZSBib3JkZXIgYm9yZGVyLXByaW1hcnkgdGV4dC1wcmltYXJ5IGRhcms6dGV4dC1wcmltYXJ5ZGFyayBkYXJrOmJvcmRlci1wcmltYXJ5ZGFyayB0ZXh0LXNtIGZvbnQtbGlnaHQgcHktMiBweC02IHJvdW5kZWQtMnhsIG0tMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENyZWF0ZSB5b3VyIGJ1c2luZXNzIHBsYW5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgey8qIFNIT1dVUDMgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtMnhsIHRyYW5zZm9ybSBob3ZlcjpzY2FsZS0xMDUgaG92ZXI6LXRyYW5zbGF0ZS15LTIgaG92ZXI6LXRyYW5zbGF0ZS14LTIgdHJhbnNpdGlvbiBkdXJhdGlvbi01MDAgZWFzZS1pbi1vdXRcIj5cclxuICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeWRhcmsgdGV4dC1sZyBkYXJrOnRleHQtYmFja2dyb3VuZFwiPkNhc2ggZmxvdyBhbmFseXNpczwvaDE+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAvLyBzdHlsZT17eyBtYXhIZWlnaHQ6IDMzMCB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNoYWRvdy1sZyBtdC0xIHctZnVsbCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBib3JkZXItci02IHJvdW5kZWQtMnhsIGJnLXdoaXRlIGRhcms6YmctYmFja2dyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIGhlaWdodD17MjAwfSB3aWR0aD17MjAwfSBzcmM9XCIvbWFpbi1zZWN0aW9ucy9jYXNoLWZsb3cyLnN2Z1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIiB0ZXh0LWJhc2UgdGV4dC1ncmF5IHRleHQtY2VudGVyIHB4LThcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIENhc2ggZmxvdyBhbmFseXNpcyB3aWxsIGFsbG93IHlvdSB0byBhbmFseXplIHRoZSBsaXF1aWRpdHkgb2YgeW91ciBzdGFydHVwLiDwn5SOXHJcbiAgICAgICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbkNhc2hGbG93QW5hbHlzaXNDcmVhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhvdmVyOmJnLXByaW1hcnkgaG92ZXI6dGV4dC13aGl0ZSBkYXJrOmhvdmVyOmJnLXByaW1hcnlkYXJrIGRhcms6aG92ZXI6dGV4dC1iYWNrZ3JvdW5kIGZvY3VzOm91dGxpbmUtbm9uZSBib3JkZXIgYm9yZGVyLXByaW1hcnkgdGV4dC1wcmltYXJ5IGRhcms6dGV4dC1wcmltYXJ5ZGFyayBkYXJrOmJvcmRlci1wcmltYXJ5ZGFyayB0ZXh0LXNtIGZvbnQtbGlnaHQgcHktMiBweC02IHJvdW5kZWQtMnhsIG0tMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENyZWF0ZSB5b3VyIHN0YXJ0dXAgY2FzaCBmbG93XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHsvKiBTSE9XVVA0ICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLTJ4bCB0cmFuc2Zvcm0gaG92ZXI6c2NhbGUtMTA1IGhvdmVyOi10cmFuc2xhdGUteS0yIGhvdmVyOi10cmFuc2xhdGUteC0yIHRyYW5zaXRpb24gZHVyYXRpb24tNTAwIGVhc2UtaW4tb3V0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnlkYXJrIHRleHQtbGcgZGFyazp0ZXh0LWJhY2tncm91bmRcIj5Db21wZXRpdG9ycyBhbmFseXNpczwvaDE+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAvLyBzdHlsZT17eyBtYXhIZWlnaHQ6IDMzMCB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNoYWRvdy1sZyBtdC0xIHctZnVsbCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBib3JkZXItci02IHJvdW5kZWQtMnhsIGJnLXdoaXRlIGRhcms6YmctYmFja2dyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIGhlaWdodD17MjAwfSB3aWR0aD17MjAwfSBzcmM9XCIvbWFpbi1zZWN0aW9ucy9jb21wZXRpdG9ycy5zdmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgdGV4dC1ncmF5IHRleHQtY2VudGVyIHB4LThcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIENvbXBldGl0b3IgYW5hbHlzaXMgd2lsbCBoZWxwIHlvdSBiZXR0ZXIgcHJlcGFyZSB0byBlbnRlciBhIGdpdmVuIG1hcmtldC4g8J+UjlxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25Db21wZXRpdG9yc0FuYWx5c2lzQ3JlYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJob3ZlcjpiZy1wcmltYXJ5IGhvdmVyOnRleHQtd2hpdGUgZGFyazpob3ZlcjpiZy1wcmltYXJ5ZGFyayBkYXJrOmhvdmVyOnRleHQtYmFja2dyb3VuZCBmb2N1czpvdXRsaW5lLW5vbmUgYm9yZGVyIGJvcmRlci1wcmltYXJ5IHRleHQtcHJpbWFyeSBkYXJrOnRleHQtcHJpbWFyeWRhcmsgZGFyazpib3JkZXItcHJpbWFyeWRhcmsgdGV4dC1zbSBmb250LWxpZ2h0IHB5LTIgcHgtNiByb3VuZGVkLTJ4bCBtLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBbmFseXplIHlvdXIgc3RhcnR1cCBjb21wZXRpdG9yc1xyXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7LyogU0hPV1VQNSAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC0yeGwgdHJhbnNmb3JtIGhvdmVyOnNjYWxlLTEwNSBob3ZlcjotdHJhbnNsYXRlLXktMiBob3ZlcjotdHJhbnNsYXRlLXgtMiB0cmFuc2l0aW9uIGR1cmF0aW9uLTUwMCBlYXNlLWluLW91dFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5ZGFyayB0ZXh0LWxnIGRhcms6dGV4dC1iYWNrZ3JvdW5kXCI+U3RhcnR1cCBtZW1iZXJzPC9oMT5cclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHN0eWxlPXt7IG1heEhlaWdodDogMzMwIH19XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2hhZG93LWxnIG10LTEgdy1mdWxsIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGJvcmRlci1yLTYgcm91bmRlZC0yeGwgYmctd2hpdGUgZGFyazpiZy1iYWNrZ3JvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgaGVpZ2h0PXsyMDB9IHdpZHRoPXsyMDB9IHNyYz1cIi9tYWluLXNlY3Rpb25zL21lbWJlcnMxLnN2Z1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtYmFzZSB0ZXh0LWdyYXkgdGV4dC1jZW50ZXIgcHgtOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgSWRlbnRpZnkgdGhlIHJvbGVzIG9mIHlvdXIgdGVhbSBhbmQgdGhlIHBlb3BsZSB3aG8gd2lsbCBoYXZlIGFjY2VzcyB0byB0aGlzIHByb2plY3QuIPCflI5cclxuICAgICAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uQ29tcGV0aXRvcnNBbmFseXNpc0NyZWF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaG92ZXI6YmctcHJpbWFyeSBob3Zlcjp0ZXh0LXdoaXRlIGRhcms6aG92ZXI6YmctcHJpbWFyeWRhcmsgZGFyazpob3Zlcjp0ZXh0LWJhY2tncm91bmQgZm9jdXM6b3V0bGluZS1ub25lIGJvcmRlciBib3JkZXItcHJpbWFyeSB0ZXh0LXByaW1hcnkgZGFyazp0ZXh0LXByaW1hcnlkYXJrIGRhcms6Ym9yZGVyLXByaW1hcnlkYXJrIHRleHQtc20gZm9udC1saWdodCBweS0yIHB4LTYgcm91bmRlZC0yeGwgbS0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTWFuYWdlIHlvdXIgc3RhcnR1cCBtZW1iZXJzXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLXNjcmVlbiB3LWZ1bGwgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5ZGFyayB0ZXh0LWxnXCI+Li4uTG9hZGluZzwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvTmF2YmFyVGVtcGxhdGU+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzID0gYXN5bmMgKCkgPT4ge1xyXG4gIC8vIGNvbnN0IHsgcHJvamVjdHMgfSA9IGF3YWl0IGdldEFsbFByb2plY3RzKCk7XHJcbiAgY29uc3Qgc25hcHNob3QgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKCdwcm9qZWN0cycpLmdldCgpO1xyXG5cclxuICBjb25zdCBwcm9qZWN0cyA9IFtdO1xyXG4gIHNuYXBzaG90LmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgcHJvamVjdHMucHVzaChkb2MuZGF0YSgpKTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgcGF0aHMgPSBwcm9qZWN0cy5tYXAoKHByb2plY3QpID0+ICh7XHJcbiAgICBwYXJhbXM6IHtcclxuICAgICAgcHJvamVjdDogcHJvamVjdC5wcm9qZWN0TmFtZS50b1N0cmluZygpLFxyXG4gICAgfSxcclxuICB9KSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwYXRoczogcGF0aHMsXHJcbiAgICBmYWxsYmFjazogdHJ1ZSxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcclxuICAvLyBjb25zdCB7IHByb2plY3RzIH0gPSBhd2FpdCBnZXRQYXJ0aWN1bGFyUHJvamVjdChwYXJhbXMud29yayk7XHJcbiAgLy8gY29uc3QgdWlkID0gQ29va2llcy5nZXQoJ3VpZCcpO1xyXG4gIGxldCByZWYgPSBkYi5jb2xsZWN0aW9uKCdwcm9qZWN0cycpLndoZXJlKCdwcm9qZWN0TmFtZScsICc9PScsIHBhcmFtcy5wcm9qZWN0KTtcclxuXHJcbiAgY29uc3Qgc25hcHNob3QgPSBhd2FpdCByZWYuZ2V0KCk7XHJcbiAgY29uc3QgcHJvamVjdHMgPSBbXTtcclxuXHJcbiAgc25hcHNob3QuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbiAgICBwcm9qZWN0cy5wdXNoKHsgaWQ6IGRvYy5pZCwgLi4uZG9jLmRhdGEoKSB9KTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7IHByb2plY3RzIH0sXHJcbiAgICByZXZhbGlkYXRlOiAxLFxyXG4gIH07XHJcbn07XHJcblxyXG4vLyBleHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcclxuLy8gICBsZXQgcmVmID0gZGIuY29sbGVjdGlvbigncHJvamVjdHMnKS53aGVyZSgncHJvamVjdE5hbWUnLCAnPT0nLCBwYXJhbXMucHJvamVjdCk7XHJcblxyXG4vLyAgIGNvbnN0IHNuYXBzaG90ID0gYXdhaXQgcmVmLmdldCgpO1xyXG4vLyAgIGNvbnN0IHByb2plY3RzID0gW107XHJcblxyXG4vLyAgIHNuYXBzaG90LmZvckVhY2goKGRvYykgPT4ge1xyXG4vLyAgICAgcHJvamVjdHMucHVzaCh7IGlkOiBkb2MuaWQsIC4uLmRvYy5kYXRhKCkgfSk7XHJcbi8vICAgfSk7XHJcblxyXG4vLyAgIHJldHVybiB7XHJcbi8vICAgICBwcm9wczogeyBwcm9qZWN0cyB9LFxyXG4vLyAgIH07XHJcbi8vIH07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0UGFnZTtcclxuIiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuLy8gVXNhZ2VcclxuZnVuY3Rpb24gQXBwKCkge1xyXG4gIGNvbnN0IHNpemUgPSB1c2VXaW5kb3dTaXplKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHtzaXplLndpZHRofXB4IC8ge3NpemUuaGVpZ2h0fXB4XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbi8vIEhvb2tcclxuZXhwb3J0IGZ1bmN0aW9uIHVzZVdpbmRvd1NpemUoKSB7XHJcbiAgLy8gSW5pdGlhbGl6ZSBzdGF0ZSB3aXRoIHVuZGVmaW5lZCB3aWR0aC9oZWlnaHQgc28gc2VydmVyIGFuZCBjbGllbnQgcmVuZGVycyBtYXRjaFxyXG4gIC8vIExlYXJuIG1vcmUgaGVyZTogaHR0cHM6Ly9qb3Nod2NvbWVhdS5jb20vcmVhY3QvdGhlLXBlcmlscy1vZi1yZWh5ZHJhdGlvbi9cclxuICBjb25zdCBbd2luZG93U2l6ZSwgc2V0V2luZG93U2l6ZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICB3aWR0aDogdW5kZWZpbmVkLFxyXG4gICAgaGVpZ2h0OiB1bmRlZmluZWQsXHJcbiAgfSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIEhhbmRsZXIgdG8gY2FsbCBvbiB3aW5kb3cgcmVzaXplXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVSZXNpemUoKSB7XHJcbiAgICAgIC8vIFNldCB3aW5kb3cgd2lkdGgvaGVpZ2h0IHRvIHN0YXRlXHJcbiAgICAgIHNldFdpbmRvd1NpemUoe1xyXG4gICAgICAgIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcclxuICAgICAgICBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvLyBBZGQgZXZlbnQgbGlzdGVuZXJcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUpO1xyXG4gICAgLy8gQ2FsbCBoYW5kbGVyIHJpZ2h0IGF3YXkgc28gc3RhdGUgZ2V0cyB1cGRhdGVkIHdpdGggaW5pdGlhbCB3aW5kb3cgc2l6ZVxyXG4gICAgaGFuZGxlUmVzaXplKCk7XHJcbiAgICAvLyBSZW1vdmUgZXZlbnQgbGlzdGVuZXIgb24gY2xlYW51cFxyXG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUpO1xyXG4gIH0sIFtdKTsgLy8gRW1wdHkgYXJyYXkgZW5zdXJlcyB0aGF0IGVmZmVjdCBpcyBvbmx5IHJ1biBvbiBtb3VudFxyXG4gIHJldHVybiB3aW5kb3dTaXplO1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkB0aXBweWpzL3JlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlLWFkbWluXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2FwcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9hdXRoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2ZpcmVzdG9yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9mdW5jdGlvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2Uvc3RvcmFnZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJnc2FwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXRoZW1lc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==