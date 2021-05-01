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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/dashboard/startup.js");
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

  const image = data.avatarExists != 'blank' ? data.avatarExists : `/png/${data.imageNameExists}.png`;
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
          lineNumber: 301,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
          style: styles.homePageDesc,
          children: data.ideaName
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 302,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Image"], {
          src: image,
          style: styles.image,
          height: "250px",
          width: "250px"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 305,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["View"], {
          style: styles.leftDescBlock,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
            style: styles.leftDescBlockText,
            children: data.ideaDesc
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 312,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 311,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 300,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["View"], {
        style: styles.rightBar
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 315,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["View"], {
        style: styles.rightBarContact,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
          children: data.startupField
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 317,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
          style: styles.countryText,
          children: data.ideaCountry
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 318,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
          style: styles.emailText,
          children: data.startupEmail
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 319,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
          style: styles.phoneNumberText,
          children: data.startupPhone
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 320,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 316,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["View"], {
        style: styles.grayBarOne
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 322,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["View"], {
        style: styles.grayBarTwo
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 323,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Page"], {
      style: styles.contentsPage,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["View"], {
        style: styles.rightBar,
        fixed: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 327,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["View"], {
        style: styles.contentsLeftBar,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
          children: "Startup overview"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 329,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
          children: "Product"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 330,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
          children: "Market analysis"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 331,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
          children: "Finances"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 332,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
          children: "Business model"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 333,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["View"], {
          style: styles.contentsBarOne
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 334,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["View"], {
          style: styles.contentsBarTwo
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 335,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["View"], {
          style: styles.contentsBarThree
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 336,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["View"], {
          style: styles.contentsBarFour
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 337,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["View"], {
          style: styles.contentsBarFive
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 338,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 328,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["View"], {
        style: styles.contentsRightBar,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
          style: styles.contentsRightTextOne,
          children: "01. This section will help you better understand the startup vision"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 341,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
          style: styles.contentsRightTextTwo,
          children: "02. This section will introduce you to the vision of the product"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 344,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
          style: styles.contentsRightTextThree,
          children: "03. This section will reveal all the cards of the market"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 347,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
          style: styles.contentsRightTextFour,
          children: "04. Discover the costs of implementing our idea"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 350,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
          style: styles.contentsRightTextFive,
          children: "05. In the final section, you will discover the startup's business model"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 353,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 340,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 326,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Page"], {
      style: styles.overviewPage,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["View"], {
        style: styles.rightBar,
        fixed: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 361,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Image"], {
        style: styles.overviewImage,
        src: "/pdf/idea.png",
        height: 20,
        width: 20
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 362,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["View"], {
        style: styles.overviewSection,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
          style: styles.overviewHeading,
          children: "Startup overview"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 369,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
          style: styles.overviewSubtitle,
          children: "This section will help you better understand the startup vision"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 370,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["View"], {
          style: styles.sectionContainerOne,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
            style: styles.sectionHeadingOne,
            children: "Market problem that needs to be solved."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 374,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
            style: styles.sectionText,
            children: data.marketProblemSection
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 377,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 373,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["View"], {
          style: styles.sectionContainerTwo,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
            style: styles.sectionHeadingTwo,
            children: "Solution that solves this market problem."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 380,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
            style: styles.sectionText,
            children: data.marketSolutionSection
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 383,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 379,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["View"], {
          style: styles.sectionContainerThree,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
            style: styles.sectionHeadingThree,
            children: "Who is behind the foundation of the future company?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 386,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
            style: styles.sectionText,
            children: data.foundersSection
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 389,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 385,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 368,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 360,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Page"], {
      style: styles.overviewPage,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["View"], {
        style: styles.rightBar,
        fixed: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 395,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Image"], {
        style: styles.overviewImage,
        src: "/pdf/blueprint.png",
        height: 20,
        width: 20
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 396,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["View"], {
        style: styles.overviewSection,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
          style: styles.overviewHeading,
          children: "Product"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 403,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
          style: styles.overviewSubtitle,
          children: "This section will introduce you to the vision of the product"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 404,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["View"], {
          style: styles.sectionContainerOne,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
            style: styles.sectionHeadingOne,
            children: "Detailed description of the product vision."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 408,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
            style: styles.sectionText,
            children: data.productOverviewSection
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 411,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 407,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["View"], {
          style: styles.sectionContainerTwo,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
            style: styles.sectionHeadingTwo,
            children: "How will other people find out about the product?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 416,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
            style: styles.sectionText,
            children: data.productPromotionSection
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 419,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 415,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["View"], {
          style: styles.sectionContainerThree,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
            style: styles.sectionHeadingThree,
            children: "What benefits will this product brings to customers?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 424,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
            style: styles.sectionText,
            children: data.productBenefitsSection
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 427,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 423,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 402,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 394,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Page"], {
      style: styles.overviewPage,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["View"], {
        style: styles.rightBar,
        fixed: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 435,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Image"], {
        style: styles.overviewImage,
        src: "/pdf/unicorn.png",
        height: 20,
        width: 20
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 436,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["View"], {
        style: styles.overviewSection,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
          style: styles.overviewHeading,
          children: "Market analysis"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 443,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
          style: styles.overviewSubtitle,
          children: "This section will reveal all the cards of the market"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 444,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["View"], {
          style: styles.sectionContainerOne,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
            style: styles.sectionHeadingOne,
            children: "General insight into the market."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 448,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
            style: styles.sectionText,
            children: data.marketOverviewSection
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 451,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 447,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["View"], {
          style: styles.sectionContainerTwo,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
            style: styles.sectionHeadingTwo,
            children: "Who are the major competitors in the market?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 454,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
            style: styles.sectionText,
            children: data.competitorsSection
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 457,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 453,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["View"], {
          style: styles.sectionContainerTwo,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
            style: styles.sectionHeadingTwo,
            children: "What makes this startup stand out from the competition?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 460,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
            style: styles.sectionText,
            children: data.competitionDistinguishSection
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 463,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 459,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["View"], {
          style: styles.sectionContainerThree,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
            style: styles.sectionHeadingThree,
            children: "Target group of startup customers."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 468,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
            style: styles.sectionText,
            children: data.targetCustomersSection
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 471,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 467,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 442,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 434,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Page"], {
      style: styles.overviewPage,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["View"], {
        style: styles.rightBar,
        fixed: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 479,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Image"], {
        style: styles.overviewImage,
        src: "/pdf/budget.png",
        height: 20,
        width: 20
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 480,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["View"], {
        style: styles.overviewSection,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
          style: styles.overviewHeading,
          children: "Finances"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 487,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
          style: styles.overviewSubtitle,
          children: "Discover the costs of implementing our idea"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 488,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["View"], {
          style: styles.sectionContainerOne,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
            style: styles.sectionHeadingOne,
            children: "How much money will it take to launch the startup?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 492,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
            style: styles.sectionText,
            children: data.startupCostsSection
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 495,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 491,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["View"], {
          style: styles.sectionContainerTwo,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
            style: styles.sectionHeadingTwo,
            children: "Approximate running costs, based on startup growth."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 498,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
            style: styles.sectionText,
            children: data.runningCostsSection
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 501,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 497,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["View"], {
          style: styles.sectionContainerThree,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
            style: styles.sectionHeadingThree,
            children: "How does the idea will be fund?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 504,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
            style: styles.sectionText,
            children: data.financingSection
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 507,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 503,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 486,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 478,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Page"], {
      style: styles.overviewPage,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["View"], {
        style: styles.rightBar,
        fixed: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 513,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Image"], {
        style: styles.overviewImage,
        src: "/pdf/startup.png",
        height: 20,
        width: 20
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 514,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["View"], {
        style: styles.overviewSection,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
          style: styles.overviewHeading,
          children: "Business model"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 521,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
          style: styles.overviewSubtitle,
          children: "In the final section, you will discover the startup's business model"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 522,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["View"], {
          style: styles.sectionContainerOne,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
            style: styles.sectionHeadingOne,
            children: "Startup business model and legal structure overview."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 526,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
            style: styles.sectionText,
            children: data.businessModelOverviewSection
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 529,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 525,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["View"], {
          style: styles.sectionContainerTwo,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
            style: styles.sectionHeadingTwo,
            children: "Predictions for startup growth."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 534,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
            style: styles.sectionText,
            children: data.businessGrowSection
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 537,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 533,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["View"], {
          style: styles.sectionContainerThree,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
            style: styles.sectionHeadingThree,
            children: "Why will this particular startup succeed?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 540,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
            style: styles.sectionText,
            children: data.whySuccessSection
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 543,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 539,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 520,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 512,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 298,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (MyDocument1);

/***/ }),

/***/ "./components/dashboard/startup/StartupSkeleton.js":
/*!*********************************************************!*\
  !*** ./components/dashboard/startup/StartupSkeleton.js ***!
  \*********************************************************/
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


var _jsxFileName = "C:\\off-saas\\components\\dashboard\\startup\\StartupSkeleton.js";



const StartupSkeleton = () => {
  const helperVariable = window.innerWidth < 1536 ? 'small' : 'large';
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: helperVariable == 'small' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "w-full grid grid-cols-3fr gap-8 border-r-6 rounded-2xl bg-white mt-8 mb-8 dark:bg-background p-8 text-center",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "shadow rounded-2xl flex flex-wrap justify-center items-center flex-col",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            height: '486px'
          },
          className: "relative inline-block text-right w-4/5 py-8",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_1___default.a, {
            src: "/loading/loading.svg",
            width: 150,
            height: 195
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "h-8 bg-background rounded-2xl mt-2"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "h-8 bg-background rounded-2xl mt-4"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "h-8 bg-background rounded-2xl mt-4"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "h-8 bg-background rounded-2xl mt-4"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "h-8 bg-background rounded-2xl mt-4"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "shadow rounded-2xl flex flex-wrap justify-center items-center flex-col",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            height: '486px'
          },
          className: "relative inline-block text-right w-4/5 py-8",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_1___default.a, {
            src: "/loading/loading.svg",
            width: 150,
            height: 195
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "h-8 bg-background rounded-2xl mt-2"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "h-8 bg-background rounded-2xl mt-4"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "h-8 bg-background rounded-2xl mt-4"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "h-8 bg-background rounded-2xl mt-4"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "h-8 bg-background rounded-2xl mt-4"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "shadow rounded-2xl flex flex-wrap justify-center items-center flex-col",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            height: '486px'
          },
          className: "relative inline-block text-right w-4/5 py-8",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_1___default.a, {
            src: "/loading/loading.svg",
            width: 150,
            height: 195
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "h-8 bg-background rounded-2xl mt-2"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "h-8 bg-background rounded-2xl mt-4"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "h-8 bg-background rounded-2xl mt-4"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "h-8 bg-background rounded-2xl mt-4"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "h-8 bg-background rounded-2xl mt-4"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "w-full grid grid-cols-4fr gap-8 border-r-6 rounded-2xl bg-white mt-8 mb-8 dark:bg-background p-8 text-center",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "shadow rounded-2xl flex flex-wrap justify-center items-center flex-col",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            height: '486px'
          },
          className: "relative inline-block text-right w-4/5 py-8",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_1___default.a, {
            src: "/loading/loading.svg",
            width: 150,
            height: 195
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "h-8 bg-background rounded-2xl mt-2"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "h-8 bg-background rounded-2xl mt-4"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "h-8 bg-background rounded-2xl mt-4"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "h-8 bg-background rounded-2xl mt-4"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "h-8 bg-background rounded-2xl mt-4"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "shadow rounded-2xl flex flex-wrap justify-center items-center flex-col",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            height: '486px'
          },
          className: "relative inline-block text-right w-4/5 py-8",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_1___default.a, {
            src: "/loading/loading.svg",
            width: 150,
            height: 195
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "h-8 bg-background rounded-2xl mt-2"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "h-8 bg-background rounded-2xl mt-4"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "h-8 bg-background rounded-2xl mt-4"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "h-8 bg-background rounded-2xl mt-4"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "h-8 bg-background rounded-2xl mt-4"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "shadow rounded-2xl flex flex-wrap justify-center items-center flex-col",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            height: '486px'
          },
          className: "relative inline-block text-right w-4/5 py-8",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_1___default.a, {
            src: "/loading/loading.svg",
            width: 150,
            height: 195
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "h-8 bg-background rounded-2xl mt-2"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "h-8 bg-background rounded-2xl mt-4"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "h-8 bg-background rounded-2xl mt-4"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "h-8 bg-background rounded-2xl mt-4"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "h-8 bg-background rounded-2xl mt-4"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "shadow rounded-2xl flex flex-wrap justify-center items-center flex-col",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            height: '486px'
          },
          className: "relative inline-block text-right w-4/5 py-8",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_1___default.a, {
            src: "/loading/loading.svg",
            width: 150,
            height: 195
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "h-8 bg-background rounded-2xl mt-2"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "h-8 bg-background rounded-2xl mt-4"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "h-8 bg-background rounded-2xl mt-4"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "h-8 bg-background rounded-2xl mt-4"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "h-8 bg-background rounded-2xl mt-4"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }, undefined)
  }, void 0, false); // if (window.screen.width > 1536) {
  //   return (
  //     <div className='w-full grid grid-cols-3fr gap-8 border-r-6 rounded-2xl bg-white mt-8 mb-8 dark:bg-background p-8 text-center'>
  //       {/* <Image src='/loading/loading.svg' width={150} height={195} className='p-6' /> */}
  //       <div className='shadow rounded-2xl flex flex-wrap justify-center items-center flex-col'>
  //         <div
  //           style={{ height: '486px' }}
  //           className='relative inline-block text-right w-4/5 py-8'
  //         >
  //           <Image src='/loading/loading.svg' width={150} height={195} />
  //           <div className='h-8 bg-background rounded-2xl mt-2'></div>
  //           <div className='h-8 bg-background rounded-2xl mt-4'></div>
  //           <div className='h-8 bg-background rounded-2xl mt-4'></div>
  //           <div className='h-8 bg-background rounded-2xl mt-4'></div>
  //           <div className='h-8 bg-background rounded-2xl mt-4'></div>
  //         </div>
  //       </div>
  //       <div className='shadow rounded-2xl flex flex-wrap justify-center items-center flex-col'>
  //         <div
  //           style={{ height: '486px' }}
  //           className='relative inline-block text-right w-4/5 py-8'
  //         >
  //           <Image src='/loading/loading.svg' width={150} height={195} />
  //           <div className='h-8 bg-background rounded-2xl mt-2'></div>
  //           <div className='h-8 bg-background rounded-2xl mt-4'></div>
  //           <div className='h-8 bg-background rounded-2xl mt-4'></div>
  //           <div className='h-8 bg-background rounded-2xl mt-4'></div>
  //           <div className='h-8 bg-background rounded-2xl mt-4'></div>
  //         </div>
  //       </div>
  //       <div className='shadow rounded-2xl flex flex-wrap justify-center items-center flex-col'>
  //         <div
  //           style={{ height: '486px' }}
  //           className='relative inline-block text-right w-4/5 py-8'
  //         >
  //           <Image src='/loading/loading.svg' width={150} height={195} />
  //           <div className='h-8 bg-background rounded-2xl mt-2'></div>
  //           <div className='h-8 bg-background rounded-2xl mt-4'></div>
  //           <div className='h-8 bg-background rounded-2xl mt-4'></div>
  //           <div className='h-8 bg-background rounded-2xl mt-4'></div>
  //           <div className='h-8 bg-background rounded-2xl mt-4'></div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // } else {
  //   return (
  //     <div className='w-full grid grid-cols-4fr gap-8 border-r-6 rounded-2xl bg-white mt-8 mb-8 dark:bg-background p-8 text-center'>
  //       {/* <Image src='/loading/loading.svg' width={150} height={195} className='p-6' /> */}
  //       <div className='shadow rounded-2xl flex flex-wrap justify-center items-center flex-col'>
  //         <div
  //           style={{ height: '486px' }}
  //           className='relative inline-block text-right w-4/5 py-8'
  //         >
  //           <Image src='/loading/loading.svg' width={150} height={195} />
  //           <div className='h-8 bg-background rounded-2xl mt-2'></div>
  //           <div className='h-8 bg-background rounded-2xl mt-4'></div>
  //           <div className='h-8 bg-background rounded-2xl mt-4'></div>
  //           <div className='h-8 bg-background rounded-2xl mt-4'></div>
  //           <div className='h-8 bg-background rounded-2xl mt-4'></div>
  //         </div>
  //       </div>
  //       <div className='shadow rounded-2xl flex flex-wrap justify-center items-center flex-col'>
  //         <div
  //           style={{ height: '486px' }}
  //           className='relative inline-block text-right w-4/5 py-8'
  //         >
  //           <Image src='/loading/loading.svg' width={150} height={195} />
  //           <div className='h-8 bg-background rounded-2xl mt-2'></div>
  //           <div className='h-8 bg-background rounded-2xl mt-4'></div>
  //           <div className='h-8 bg-background rounded-2xl mt-4'></div>
  //           <div className='h-8 bg-background rounded-2xl mt-4'></div>
  //           <div className='h-8 bg-background rounded-2xl mt-4'></div>
  //         </div>
  //       </div>
  //       <div className='shadow rounded-2xl flex flex-wrap justify-center items-center flex-col'>
  //         <div
  //           style={{ height: '486px' }}
  //           className='relative inline-block text-right w-4/5 py-8'
  //         >
  //           <Image src='/loading/loading.svg' width={150} height={195} />
  //           <div className='h-8 bg-background rounded-2xl mt-2'></div>
  //           <div className='h-8 bg-background rounded-2xl mt-4'></div>
  //           <div className='h-8 bg-background rounded-2xl mt-4'></div>
  //           <div className='h-8 bg-background rounded-2xl mt-4'></div>
  //           <div className='h-8 bg-background rounded-2xl mt-4'></div>
  //         </div>
  //       </div>
  //       <div className='shadow rounded-2xl flex flex-wrap justify-center items-center flex-col'>
  //         <div
  //           style={{ height: '486px' }}
  //           className='relative inline-block text-right w-4/5 py-8'
  //         >
  //           <Image src='/loading/loading.svg' width={150} height={195} />
  //           <div className='h-8 bg-background rounded-2xl mt-2'></div>
  //           <div className='h-8 bg-background rounded-2xl mt-4'></div>
  //           <div className='h-8 bg-background rounded-2xl mt-4'></div>
  //           <div className='h-8 bg-background rounded-2xl mt-4'></div>
  //           <div className='h-8 bg-background rounded-2xl mt-4'></div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }
};

/* harmony default export */ __webpack_exports__["default"] = (StartupSkeleton);

/***/ }),

/***/ "./lib/db.js":
/*!*******************!*\
  !*** ./lib/db.js ***!
  \*******************/
/*! exports provided: getAllProjects, createUser, getUser, createStartupData, deleteProject, createCheckoutSession, createCheckoutSession10, goToBillingPortal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllProjects", function() { return getAllProjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUser", function() { return createUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return getUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStartupData", function() { return createStartupData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteProject", function() { return deleteProject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCheckoutSession", function() { return createCheckoutSession; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCheckoutSession10", function() { return createCheckoutSession10; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "goToBillingPortal", function() { return goToBillingPortal; });
/* harmony import */ var _firebase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./firebase.js */ "./lib/firebase.js");
/* harmony import */ var _stripe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stripe.js */ "./lib/stripe.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const firestore = _firebase_js__WEBPACK_IMPORTED_MODULE_0__["default"].firestore();
const getAllProjects = async () => {
  const snapshot = await firestore.collection('projects').get();
  const projects = [];
  snapshot.forEach(doc => {
    projects.push(_objectSpread({
      id: doc.id
    }, doc.data()));
  });
  console.log(projects);
  return {
    projects
  };
}; // CLIENT-DATA

const createUser = (uid, data) => {
  return firestore.collection('users').doc(uid).set(_objectSpread({
    uid
  }, data), {
    merge: true
  }); // merge powoduje, że każde id będzie unikatowe
};
const getUser = async uid => {
  const user = await firestore.collection('users').get();
  const users = [];
  user.forEach(doc => {
    users.push(_objectSpread({
      id: doc.id
    }, doc.data()));
  });
  return {
    users
  };
}; // STARTUP-DATA

const createStartupData = data => {
  // Wszystkie informacje wrzucamy, a potem będziemy je pobierali dla odpowiedniego użytkownika
  return firestore.collection('startup-data').add(data);
}; // PROJECT DELETE

const deleteProject = async projectId => {
  // ONE PARTICULAR PROJECT
  const snapshot = await firestore.collection('projects').where('projectId', '==', projectId).get();
  const batch = firestore.batch();
  console.log(batch);
  snapshot.forEach(doc => {
    batch.delete(doc.ref);
  });
  return batch.commit();
}; // STRIPE

const createCheckoutSession = async uid => {
  const checkoutSessionRef = await _firebase_js__WEBPACK_IMPORTED_MODULE_0__["db"].collection('users').doc(uid) // TO JEST DO ZMIANY Z PODSTAWOWEJ TEMPLATKI
  .collection('checkout_sessions').add({
    price: 'price_1IVJjNBdXPtKajNHvs4FpbR7',
    // TO JEST DO ZMIANY Z PODSTAWOWEJ TEMPLATKI
    success_url: `${window.location.origin}/dashboard/account`,
    cancel_url: `${window.location.origin}/dashboard/account`
  }); // Wait for the CheckoutSession to get attached by the extension

  checkoutSessionRef.onSnapshot(async snap => {
    // TO JEST DO ZMIANY Z PODSTAWOWEJ TEMPLATKI (tutaj dodajemy tylko słówko async)
    const {
      error,
      sessionId
    } = snap.data();

    if (error) {
      // Show an error to your customer and
      // inspect your Cloud Function logs in the Firebase console.
      alert(`An error occured: ${error.message}`);
    }

    if (sessionId) {
      // We have a session, let's redirect to Checkout
      // Init Stripe
      const stripe = await Object(_stripe_js__WEBPACK_IMPORTED_MODULE_1__["default"])(); // TO JEST DO ZMIANY Z PODSTAWOWEJ TEMPLATKI (funkcja getStripe w pliku stripe.js)

      stripe.redirectToCheckout({
        sessionId
      });
    }
  });
}; // $29.99 for 10 units

const createCheckoutSession10 = async uid => {
  const checkoutSessionRef = await _firebase_js__WEBPACK_IMPORTED_MODULE_0__["db"].collection('users').doc(uid) // TO JEST DO ZMIANY Z PODSTAWOWEJ TEMPLATKI
  .collection('checkout_sessions').add({
    price: 'price_1IVgUmBdXPtKajNH4VVwl6dw',
    // TO JEST DO ZMIANY Z PODSTAWOWEJ TEMPLATKI
    success_url: `${window.location.origin}/dashboard/account`,
    cancel_url: `${window.location.origin}/dashboard/account`
  }); // Wait for the CheckoutSession to get attached by the extension

  checkoutSessionRef.onSnapshot(async snap => {
    // TO JEST DO ZMIANY Z PODSTAWOWEJ TEMPLATKI (tutaj dodajemy tylko słówko async)
    const {
      error,
      sessionId
    } = snap.data();

    if (error) {
      // Show an error to your customer and
      // inspect your Cloud Function logs in the Firebase console.
      alert(`An error occured: ${error.message}`);
    }

    if (sessionId) {
      // We have a session, let's redirect to Checkout
      // Init Stripe
      const stripe = await Object(_stripe_js__WEBPACK_IMPORTED_MODULE_1__["default"])(); // TO JEST DO ZMIANY Z PODSTAWOWEJ TEMPLATKI (funkcja getStripe w pliku stripe.js)

      stripe.redirectToCheckout({
        sessionId
      });
    }
  });
};
const goToBillingPortal = async () => {
  // Do tej funkcji musimy zaimportować firebase/functions w pliku firebase.js
  const functionRef = _firebase_js__WEBPACK_IMPORTED_MODULE_0__["default"].app().functions('us-central1').httpsCallable('ext-firestore-stripe-subscriptions-createPortalLink');
  const {
    data
  } = await functionRef({
    returnUrl: `${window.location.origin}/dashboard/account`
  });
  window.location.assign(data.url);
}; // export const getCurrentPlan = async () => {
//   const decodedToken = await firebase.auth().currentUser.getIdTokenResult();
//   // console.log(decodedToken.claims.stripeRole); // TO POKAZUJE AKTUALNY PLAN ZALOGOWANEGO UŻYTKOWNIKA NP. BASIC / PREMIUM
//   return decodedToken.claims.stripeRole;
// };

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

/***/ "./lib/stripe.js":
/*!***********************!*\
  !*** ./lib/stripe.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stripe/stripe-js */ "@stripe/stripe-js");
/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0__);
// MOŻNA TEŻ WRZUCIĆ TO DO FOLDERU UTILS

/**
 * This is a singleton to ensure we only instantiate Stripe once.
 */

let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = Object(_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0__["loadStripe"])('pk_test_51IVIucBdXPtKajNHgoC6xC1s2WRUopkoxIkuxCtuvPrDmhRDEyl3BfsW6E2CgmerMXKSwpXojBhACW9yVxcmVLIQ00bPN1lfDO'); // w folderze .env.local (ten klucz jest na głównej stronie dashboard'u na stripe)
  }

  return stripePromise;
};

/* harmony default export */ __webpack_exports__["default"] = (getStripe);

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

/***/ "./pages/dashboard/startup.js":
/*!************************************!*\
  !*** ./pages/dashboard/startup.js ***!
  \************************************/
/*! exports provided: DataContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataContext", function() { return DataContext; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_dashboard_NavbarTemplate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/dashboard/NavbarTemplate */ "./components/dashboard/NavbarTemplate.js");
/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/firebase */ "./lib/firebase.js");
/* harmony import */ var _lib_newAuth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/newAuth */ "./lib/newAuth.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_dashboard_startup_EmptyStartup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/dashboard/startup/EmptyStartup */ "./components/dashboard/startup/EmptyStartup.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! gsap */ "gsap");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! swr */ "swr");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _tippyjs_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @tippyjs/react */ "@tippyjs/react");
/* harmony import */ var _tippyjs_react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_tippyjs_react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_dashboard_Tippy__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/dashboard/Tippy */ "./components/dashboard/Tippy.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! file-saver */ "file-saver");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _components_dashboard_startup_PDFDocument__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/dashboard/startup/PDFDocument */ "./components/dashboard/startup/PDFDocument.js");
/* harmony import */ var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @react-pdf/renderer */ "@react-pdf/renderer");
/* harmony import */ var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../lib/db */ "./lib/db.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! date-fns */ "date-fns");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _utils_fetcher__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../utils/fetcher */ "./utils/fetcher.js");
/* harmony import */ var _components_dashboard_startup_StartupSkeleton__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../components/dashboard/startup/StartupSkeleton */ "./components/dashboard/startup/StartupSkeleton.js");


var _jsxFileName = "C:\\off-saas\\pages\\dashboard\\startup.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











 // import { getAllProjects } from '../../lib/db';



 // PDF








const DivComponent = styled_components__WEBPACK_IMPORTED_MODULE_12___default.a.div`
  position: relative;
  z-index: 2;
  margin-top: 16px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  ::after {
    content: '';
    background-color: ${props => props.filledSection ? '#0aff00' : '#fc573b'};
    height: 1px;
    width: 150%;
    display: block;
    position: absolute;
    right: 100%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
  }
  @media (min-width: 1800px) {
    ::after {
      width: 225%;
    }
  }
`;
const DivComponent1 = styled_components__WEBPACK_IMPORTED_MODULE_12___default.a.div`
  position: relative;
  z-index: 2;
  margin-top: 16px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  ::after {
    content: '';
    background-color: ${props => props.filledSection1 ? '#0aff00' : '#fc573b'};
    height: 1px;
    width: 150%;
    display: block;
    position: absolute;
    right: 100%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
  }
  @media (min-width: 1800px) {
    ::after {
      width: 225%;
    }
  }
`;
const DivComponent2 = styled_components__WEBPACK_IMPORTED_MODULE_12___default.a.div`
  position: relative;
  z-index: 2;
  margin-top: 16px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  ::after {
    content: '';
    background-color: ${props => props.filledSection2 ? '#0aff00' : '#fc573b'};
    height: 1px;
    width: 150%;
    display: block;
    position: absolute;
    right: 100%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
  }
  @media (min-width: 1800px) {
    ::after {
      width: 225%;
    }
  }
`;
const DivComponent3 = styled_components__WEBPACK_IMPORTED_MODULE_12___default.a.div`
  position: relative;
  z-index: 2;
  margin-top: 16px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  ::after {
    content: '';
    background-color: ${props => props.filledSection3 ? '#0aff00' : '#fc573b'};
    height: 1px;
    width: 150%;
    display: block;
    position: absolute;
    right: 100%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
  }
  @media (min-width: 1800px) {
    ::after {
      width: 225%;
    }
  }
`;
const DivComponent4 = styled_components__WEBPACK_IMPORTED_MODULE_12___default.a.div`
  position: relative;
  z-index: 2;
  margin-top: 16px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  ::after {
    content: '';
    background-color: ${props => props.filledSection4 ? '#0aff00' : '#fc573b'};
    height: 1px;
    width: 150%;
    display: block;
    position: absolute;
    right: 100%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
  }
  @media (min-width: 1800px) {
    ::after {
      width: 225%;
    }
  }
`;
const DataContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])();

const StartupPage = () => {
  // const { projectser } = getAllProjects();
  // if (projectser) {
  //   console.log(projectser);
  // }
  const {
    currentUser
  } = Object(_lib_newAuth__WEBPACK_IMPORTED_MODULE_4__["useAuth"])();
  const {
    0: projects,
    1: setProjects
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  const containerRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  const tippyRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  const {
    0: visible,
    1: setVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const show = () => {
    gsap__WEBPACK_IMPORTED_MODULE_8___default.a.fromTo(tippyRef.current, {
      autoAlpha: 0,
      scale: 0
    }, {
      autoAlpha: 1,
      scale: 1,
      duration: 1,
      ease: gsap__WEBPACK_IMPORTED_MODULE_8__["Power4"].easeOut
    });
    setVisible(true);
  };

  const hide = async () => {
    await gsap__WEBPACK_IMPORTED_MODULE_8___default.a.to(tippyRef.current, {
      autoAlpha: 0,
      scale: 0,
      duration: 1,
      ease: gsap__WEBPACK_IMPORTED_MODULE_8__["Power4"].easeIn
    });
    setVisible(false);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    // gsap.fromTo(projectRef.current, { autoAlpha: 0 }, { autoAlpha: 1, duration: 5, ease: Power4.easeIn })
    // GSAP
    gsap__WEBPACK_IMPORTED_MODULE_8___default.a.fromTo(containerRef.current, {
      autoAlpha: 0
    }, {
      autoAlpha: 1,
      duration: 2,
      ease: gsap__WEBPACK_IMPORTED_MODULE_8__["Power4"].easeOut
    }); // TIPPY

    setVisible(true); // const deleteCurrentProject = async () => {
    //   await db.collection('currentProject').doc.delete();
    // };
    // deleteCurrentProject();

    const fetchProjects = async () => {
      const userProjects = await _lib_firebase__WEBPACK_IMPORTED_MODULE_3__["db"].collection('projects').where('uid', '==', currentUser.uid).get();
      const arrays = [];
      userProjects.docs.map(doc => {
        if (doc.data().uid == currentUser.uid) {
          return arrays.push(doc.data()), setProjectsArray(doc.data());
        }

        return;
      });
      setProjects(arrays);
    };

    fetchProjects();
  }, []); // const onProjectCreate = (e) => {
  //   e.preventDefault();
  //   gsap.to(containerRef.current, {
  //     autoAlpha: 0,
  //     duration: 1,
  //     ease: Power4.easeOut,
  //   });
  //   setTimeout(() => {
  //     router.push('/dashboard/startup/creator');
  //   }, 1200);
  // };

  const onProjectCreate = e => {
    e.preventDefault();
    gsap__WEBPACK_IMPORTED_MODULE_8___default.a.to(containerRef.current, {
      autoAlpha: 0,
      duration: 1,
      ease: gsap__WEBPACK_IMPORTED_MODULE_8__["Power4"].easeOut
    }); // const projectName = uuidv4();
    // const newProject = {
    //   projectName: '',
    //   projectDescription: '',
    //   projectField: '',
    //   projectCountry: '',
    //   projectEmail: '',
    //   projectNumber: '',
    //   projectImage: '',
    //   createdAt: new Date().toISOString(),
    //   projectId: projectName,
    //   uid: currentUser.uid,
    // };
    // await db.collection('projects').doc(projectName).set(newProject);
    // setTimeout(() => {

    router.push('/dashboard/projects/new-startup'); // }, 1200);
  };

  const {
    0: projectsArray,
    1: setProjectsArray
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();

  const onProjectEdit = async (e, currentProject) => {
    e.preventDefault();
    await _lib_firebase__WEBPACK_IMPORTED_MODULE_3__["db"].collection('currentProject').doc(currentUser.uid).set(_objectSpread({
      projectId: currentProject.projectId
    }, currentProject));
    router.push('/dashboard/projects/creator/overview');
  };

  console.log(projects);
  const {
    0: activeClass,
    1: setActiveClass
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const classRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  const projectRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null); // MAGIC

  const classArrayref = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])([]);
  classArrayref.current = [];

  const chooseClasses = el => {
    if (el && !classArrayref.current.includes(el)) {
      classArrayref.current.push(el);
    }

    console.log(classArrayref.current);
  };

  const chooseClassesClick = projectId => {
    // console.log('CURRENT - ', classArrayref.current.find(project => project.id == number.toString()));
    // console.log('CURRENT NUMBER - ', number);
    console.log('CURRENT - ', classArrayref.current.find(project => project.id == projectId));
    console.log('CURRENT PROJECT - ', projectId);

    if (activeClass) {
      gsap__WEBPACK_IMPORTED_MODULE_8___default.a.to(classArrayref.current.find(project => project.id == projectId), {
        autoAlpha: 0
      });
      setActiveClass(false);
    } else {
      gsap__WEBPACK_IMPORTED_MODULE_8___default.a.to(classArrayref.current.find(project => project.id == projectId), {
        autoAlpha: 1
      });
      setActiveClass(true);
    }
  };

  const compare = (date1, date2) => {
    const dateOne = date1.createdAt;
    const dateTwo = date2.createdAt;
    return new Date(date2.createdAt) - new Date(date1.createdAt);
  };

  if (projects) {
    projects.sort(compare);
    console.log(projects);
  } // PROJECTS FETCHER FROM API


  console.log(currentUser);
  const {
    0: datas,
    1: setData
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(); // const fetching = () => {
  //   // const v = useMemo(() => currentUser.token);
  //   // const { data } = useMemo(() => useSWR(currentUser ? ['/api/projects', currentUser.token] : null, fetcher));
  //   // console.log('v - ', data)
  //   // const { data } = useSWR(
  //   //   currentUser ? ['/api/projects', currentUser.token] : null,
  //   //   fetcher, {
  //   //     revalidateOnFocus: false,
  //   //     // revalidateOnMount:false,
  //   //     // loadingTimeout: 3000,
  //   //     // onSuccess: () => {setData(data)},
  //   //     isPaused: () => true,}
  //   // );
  //   const { data } = useSWR(currentUser ? ['/api/projects', currentUser.token] : null,
  //     fetcher,)
  //   console.log('lets try...', data);
  //   // if (data) {
  //   //   const projectss = [];
  //   //   data.snapshot.forEach((doc) => {
  //   //     projectss.push({ id: doc.id, ...doc.data() });
  //   //   });
  //   //   console.log(projectss);
  //   // }
  // }
  // fetching();

  const {
    0: specialData,
    1: setSpecialData
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();

  const doingMyBest = () => {
    const {
      data
    } = swr__WEBPACK_IMPORTED_MODULE_11___default()(currentUser ? ['/api/projects', currentUser.token] : null, _utils_fetcher__WEBPACK_IMPORTED_MODULE_20__["default"]);
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(() => data && setSpecialData(data), [data]); // ZMIENIAMY DATA, TYLKO JEŚLI SĄ PROJEKTY. Problem był taki, że te projekty raz były, a raz ich nie było. Teraz będą zawsze, bo zmieniają się tylko wtedy, kiedy istnieją!
  };

  doingMyBest(); // console.log('OFFICIAL: ', data);

  console.log('OFFICIAL11: ', specialData);

  const fn = () => {
    if (datas) {
      // DATA (PROJECTS) SORT BY DATE
      datas.projects.sort(compare);
    }
  };

  fn();

  const onProjectDelete = (e, projectId) => {
    // e.preventDefault();
    Object(_lib_db__WEBPACK_IMPORTED_MODULE_18__["deleteProject"])(projectId);
    Object(swr__WEBPACK_IMPORTED_MODULE_11__["mutate"])(['/api/projects', currentUser.token], async data => {
      return {
        projects: data.projects.filter(project => project.projectId !== projectId)
      };
    }, false); // mutate(['/api/projects', currentUser.token]);
  };

  console.log('PROJECTS - ', datas);
  console.log('PROJECTS MAIN - ', projects);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_dashboard_Tippy__WEBPACK_IMPORTED_MODULE_14__["default"], {
      startups: true,
      contentClass: "h-36 w-80 shadow-lg rounded-2xl bg-primary flex justify-center items-center",
      contentText: "This is a place where magical things happen ",
      contentText1: " Just start creating your startup and bring your idea into reality. Once you've done that, you can manage it from the main panel. Feel free to edit, save or delete your idea"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 395,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_dashboard_NavbarTemplate__WEBPACK_IMPORTED_MODULE_2__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
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
                  lineNumber: 413,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
                  id: "Landing_Success",
                  "data-name": "Landing Success",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                    className: "cls-1",
                    d: "M109.3,90.1A46,46,0,0,0,65,36V20.08c1.78-.62,7.21-2.14,12.57.23a19.33,19.33,0,0,0,14.82,0c.87-.38.61.31.61-17.93a1,1,0,0,0-1.43-.93c-.07,0-6.69,2.87-13.18,0A19.41,19.41,0,0,0,65,.93,1,1,0,0,0,63,1V36a45.86,45.86,0,0,0-28.66,10.8C16.18,40.48,4,40,.79,45.51-2.29,50.86,3.94,59.3,10,65.68A11,11,0,0,0,18,83c.81,38.41,46.08,59.2,75.66,34.21,8.53,3,29,9.15,33.55,1.31C130.39,113,123.86,102.65,109.3,90.1ZM77.59,3.31A19.39,19.39,0,0,0,91,3.83V18.68c-1.79.62-7.22,2.13-12.57-.23A19.19,19.19,0,0,0,65,17.93V3.08C66.81,2.46,72.24,1,77.59,3.31ZM65,45v-7c39.69.91,58,50.27,28.21,76.81C71.32,107,46,92.66,27.77,78.64a11,11,0,0,0-3.2-16.13A43.88,43.88,0,0,1,63,38.06V45A1,1,0,0,0,65,45ZM32.55,48.36a46.21,46.21,0,0,0-9.83,13.28,10.93,10.93,0,0,0-11.4,2.47C-8.39,43.23,5.23,39.08,32.55,48.36ZM10,72a9,9,0,1,1,9,9A9,9,0,0,1,10,72Zm10,11a11,11,0,0,0,6.34-2.82c18.45,14.21,43.45,28.35,65.05,36.22C63,139.16,20.83,119.1,20.05,83Zm105.4,34.5c-2.51,4.35-14,3.62-30-1.85a45.61,45.61,0,0,0,13.42-23.21C121.59,103.58,128,113.12,125.45,117.47Z"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 415,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 414,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 406,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "text-primarydark text-2xl mt-2 pl-2 dark:text-background",
                children: "Startups"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 421,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 405,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "flex justify-end mt-2",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                onClick: e => onProjectCreate(e),
                className: "hover:bg-primary hover:text-white dark:hover:bg-primarydark dark:hover:text-background focus:outline-none border border-primary text-primary text-sm font-light py-2 px-6 rounded-2xl mt-2 dark:text-primarydark dark:border-primarydark",
                children: "New startup"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 424,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 423,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 404,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
              className: "text-secondary text-md text-gray",
              children: "Bring your idea into reality"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 433,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 432,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
              className: "text-primarydark text-lg mt-10 -mb-6 dark:text-background",
              children: "Ideas you invented"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 436,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 435,
            columnNumber: 13
          }, undefined), !specialData ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_dashboard_startup_StartupSkeleton__WEBPACK_IMPORTED_MODULE_21__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 440,
            columnNumber: 15
          }, undefined) : specialData.projects[0] ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "w-full grid sm:grid-cols-1 md:grid-cols-2fr lg:grid-cols-3fr 2xl:grid-cols-4fr gap-8 border-r-6 rounded-2xl bg-white mt-8 mb-8 dark:bg-background p-8 text-center",
            children: specialData && specialData.projects.map(image => {
              console.log('TEST - ', image.projectId);
              const data = {
                ideaName: image.ideaName,
                ideaDesc: image.ideaDesc,
                ideaCountry: image.ideaCountry,
                startupField: image.startupField,
                startupEmail: image.startupEmail,
                startupPhone: image.startupPhone,
                imageNameExists: image.imageNameExists,
                avatarExists: image.avatarExists,
                marketProblemSection: image.marketProblemSectionData,
                marketSolutionSection: image.marketSolutionSectionData,
                foundersSection: image.foundersSectionData,
                productOverviewSection: image.productOverviewSectionData,
                productPromotionSection: image.productPromotionSectionData,
                productBenefitsSection: image.productBenefitsSectionData,
                marketOverviewSection: image.marketOverviewSectionData,
                competitorsSection: image.competitorsSectionData,
                targetCustomersSection: image.targetCustomersSectionData,
                competitionDistinguishSection: image.competitionDistinguishSectionData,
                startupCostsSection: image.startupCostsSectionData,
                runningCostsSection: image.runningCostsSectionData,
                financingSection: image.financingSectionData,
                businessModelOverviewSection: image.businessModelOverviewSectionData,
                businessGrowSection: image.businessGrowSectionData,
                whySuccessSection: image.whySuccessSectionData
              };
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "shadow rounded-2xl flex flex-wrap justify-center items-center flex-col hover:shadow-lg transform hover:scale-105 hover:-translate-y-2 hover:-translate-x-2 transition duration-500 ease-in-out",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "relative inline-block text-right w-4/5 top-2",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_9___default.a, {
                    onClick: () => chooseClassesClick(image.projectId),
                    src: "/dots-menu2.svg",
                    height: 25,
                    width: 25,
                    className: "cursor-pointer"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 480,
                    columnNumber: 27
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    ref: chooseClasses,
                    id: image.projectId,
                    className: "origin-top-right absolute left-1/2 transform -translate-x-1/2 w-44 lg:w-48 rounded-md shadow-xl bg-white focus:outline-none invisible rounded-2xl" // role='menu'
                    // aria-orientation='vertical'
                    // aria-labelledby='options-menu'
                    ,
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "pt-1 text-left",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "transition duration-500 ease-in-out flex items-center justify-between hover:bg-primary rounded-tl-2xl rounded-tr-2xl",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                          onClick: async e => {
                            e.preventDefault();

                            const doc = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_dashboard_startup_PDFDocument__WEBPACK_IMPORTED_MODULE_16__["default"], {
                              data: data
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 500,
                              columnNumber: 49
                            }, undefined);

                            const asPdf = Object(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_17__["pdf"])([]); // {} is important, throws without an argument

                            asPdf.updateContainer(doc);
                            const blob = await asPdf.toBlob();
                            Object(file_saver__WEBPACK_IMPORTED_MODULE_15__["saveAs"])(blob, `${image.ideaName}.pdf`);
                          },
                          href: "#",
                          className: "block px-4 py-2 2xl:py-3 text-sm text-primarydark transition duration-500 ease-in-out hover:text-background" // role='menuitem'
                          ,
                          children: "Save / Share"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 497,
                          columnNumber: 33
                        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                          className: "mr-3 flex justify-center items-center",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_9___default.a, {
                            src: "/gifs/rocket.gif",
                            height: 30,
                            width: 30
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 513,
                            columnNumber: 35
                          }, undefined)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 512,
                          columnNumber: 33
                        }, undefined)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 496,
                        columnNumber: 31
                      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "transition duration-500 ease-in-out flex items-center justify-between hover:bg-primary",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                          onClick: e => onProjectEdit(e, image),
                          href: "#",
                          className: "block px-4 py-2 2xl:py-3 text-sm text-primarydark transition duration-500 ease-in-out hover:text-background" // role='menuitem'
                          ,
                          children: "Edit"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 517,
                          columnNumber: 33
                        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                          className: "mr-3 flex justify-center items-center relative bottom-1",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_9___default.a, {
                            src: "/gifs/whale.gif",
                            height: 30,
                            width: 30
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 526,
                            columnNumber: 35
                          }, undefined)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 525,
                          columnNumber: 33
                        }, undefined)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 516,
                        columnNumber: 31
                      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "transition duration-500 ease-in-out flex items-center justify-between hover:bg-primary rounded-bl-2xl rounded-br-2xl",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                          onClick: e => onProjectDelete(e, image.projectId),
                          href: "#",
                          className: "block px-4 py-2 2xl:py-3 text-sm text-primarydark transition duration-500 ease-in-out hover:text-background" // role='menuitem'
                          ,
                          children: "Remove"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 530,
                          columnNumber: 33
                        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                          className: "mr-3 flex justify-center items-center relative bottom-1",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_9___default.a, {
                            src: "/gifs/bomb.gif",
                            height: 30,
                            width: 30
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 539,
                            columnNumber: 35
                          }, undefined)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 538,
                          columnNumber: 33
                        }, undefined)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 529,
                        columnNumber: 31
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 495,
                      columnNumber: 29
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 487,
                    columnNumber: 27
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 479,
                  columnNumber: 25
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: image.avatarExists == 'blank' ? `/modal/${image.imageNameExists}.svg` : image.avatarExists,
                  className: " h-40 w-40 p-4 border-b border-primary"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 546,
                  columnNumber: 25
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "mb-4",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    className: "text-primarydark text-sm mt-2 px-4 mt-2",
                    children: image.ideaName
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 551,
                    columnNumber: 27
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    className: "text-primarydark text-xs text-gray px-4",
                    children: image.startupField
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 552,
                    columnNumber: 27
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 550,
                  columnNumber: 25
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "flex w-3/4 justify-between items-center -mt-4",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    className: "text-xs text-primarydark",
                    children: "Vision"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 555,
                    columnNumber: 27
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(DivComponent, {
                    filledSection: image.filledSection,
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_9___default.a, {
                      src: `/progress/${image.filledSection ? 'check' : 'remove'}.svg`,
                      height: 26,
                      width: 26
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 557,
                      columnNumber: 29
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 556,
                    columnNumber: 27
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 554,
                  columnNumber: 25
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "flex w-3/4 justify-between items-center -mt-4",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    className: "text-xs text-primarydark",
                    children: "Product"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 561,
                    columnNumber: 27
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(DivComponent1, {
                    filledSection1: image.filledSection1,
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_9___default.a, {
                      src: `/progress/${image.filledSection1 ? 'check' : 'remove'}.svg`,
                      height: 26,
                      width: 26
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 563,
                      columnNumber: 29
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 562,
                    columnNumber: 27
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 560,
                  columnNumber: 25
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "flex w-3/4 justify-between items-center -mt-4",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    className: "text-xs text-primarydark",
                    children: "Market"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 567,
                    columnNumber: 27
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(DivComponent2, {
                    filledSection2: image.filledSection2,
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_9___default.a, {
                      src: `/progress/${image.filledSection2 ? 'check' : 'remove'}.svg`,
                      height: 26,
                      width: 26
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 569,
                      columnNumber: 29
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 568,
                    columnNumber: 27
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 566,
                  columnNumber: 25
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "flex w-3/4 justify-between items-center -mt-4",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    className: "text-xs text-primarydark",
                    children: "Finances"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 573,
                    columnNumber: 27
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(DivComponent3, {
                    filledSection3: image.filledSection3,
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_9___default.a, {
                      src: `/progress/${image.filledSection3 ? 'check' : 'remove'}.svg`,
                      height: 26,
                      width: 26
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 575,
                      columnNumber: 29
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 574,
                    columnNumber: 27
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 572,
                  columnNumber: 25
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "flex w-3/4 justify-between items-center -mt-4",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    className: "text-xs text-primarydark",
                    children: "Model"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 579,
                    columnNumber: 27
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(DivComponent4, {
                    filledSection4: image.filledSection4,
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_9___default.a, {
                      src: `/progress/${image.filledSection4 ? 'check' : 'remove'}.svg`,
                      height: 26,
                      width: 26
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 581,
                      columnNumber: 29
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 580,
                    columnNumber: 27
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 578,
                  columnNumber: 25
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "text-primarydark text-xs text-gray px-4 pb-2",
                  children: Object(date_fns__WEBPACK_IMPORTED_MODULE_19__["format"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_19__["parseISO"])(image.createdAt), 'PPP')
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 584,
                  columnNumber: 25
                }, undefined)]
              }, image.projectId, true, {
                fileName: _jsxFileName,
                lineNumber: 474,
                columnNumber: 23
              }, undefined);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 442,
            columnNumber: 15
          }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_dashboard_startup_EmptyStartup__WEBPACK_IMPORTED_MODULE_6__["default"], {
            onProjectCreate: onProjectCreate
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 590,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 403,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 402,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 401,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (StartupPage);

/***/ }),

/***/ "./utils/fetcher.js":
/*!**************************!*\
  !*** ./utils/fetcher.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const fetcher = async (url, token) => {
  const res = await fetch(url, {
    method: 'GET',
    headers: new Headers({
      'Content-Type': 'application/json',
      token
    }),
    credentials: 'same-origin'
  });
  return res.json();
};

/* harmony default export */ __webpack_exports__["default"] = (fetcher);

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

/***/ "@react-pdf/renderer":
/*!**************************************!*\
  !*** external "@react-pdf/renderer" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@react-pdf/renderer");

/***/ }),

/***/ "@stripe/stripe-js":
/*!************************************!*\
  !*** external "@stripe/stripe-js" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@stripe/stripe-js");

/***/ }),

/***/ "@tippyjs/react":
/*!*********************************!*\
  !*** external "@tippyjs/react" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@tippyjs/react");

/***/ }),

/***/ "date-fns":
/*!***************************!*\
  !*** external "date-fns" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("date-fns");

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

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("swr");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjQuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2ltYWdlLWNvbmZpZy5qc1wiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZGFzaGJvYXJkL0Rlc2t0b3BOYXZiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9kYXNoYm9hcmQvTmF2YmFyVGVtcGxhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9kYXNoYm9hcmQvVGlwcHkuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9kYXNoYm9hcmQvc3RhcnR1cC9FbXB0eVN0YXJ0dXAuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9kYXNoYm9hcmQvc3RhcnR1cC9QREZEb2N1bWVudC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Rhc2hib2FyZC9zdGFydHVwL1N0YXJ0dXBTa2VsZXRvbi5qcyIsIndlYnBhY2s6Ly8vLi9saWIvZGIuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2ZpcmViYXNlLmpzIiwid2VicGFjazovLy8uL2xpYi9uZXdBdXRoLmpzIiwid2VicGFjazovLy8uL2xpYi9zdHJpcGUuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9pbWFnZS50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9saW5rLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JlcXVlc3QtaWRsZS1jYWxsYmFjay50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3VzZS1pbnRlcnNlY3Rpb24udHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9taXR0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMtbm9vcC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2ltYWdlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9kYXNoYm9hcmQvc3RhcnR1cC5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9mZXRjaGVyLmpzIiwid2VicGFjazovLy8uL3V0aWxzL3VzZVdpbmRvd1NpemUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHJlYWN0LXBkZi9yZW5kZXJlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBzdHJpcGUvc3RyaXBlLWpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHRpcHB5anMvcmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkYXRlLWZuc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpbGUtc2F2ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9hcHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9hdXRoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2UvZnVuY3Rpb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2Uvc3RvcmFnZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImdzYXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqcy1jb29raWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXRoZW1lc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3dyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidXVpZFwiIl0sIm5hbWVzIjpbIklzQWN0aXZlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJEZXNrdG9wTmF2YmFyIiwiY2hpbGRyZW4iLCJsb2dPdXQiLCJ1c2VBdXRoIiwidGhlbWUiLCJzZXRUaGVtZSIsInVzZVRoZW1lIiwiYWN0aXZlIiwic2V0QWN0aXZlIiwidXNlU3RhdGUiLCJuYXZSZWYiLCJ1c2VSZWYiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJtYW5SZWYiLCJ0bCIsImdzYXAiLCJ0aW1lbGluZSIsInJlcGVhdCIsInlveW8iLCJ1c2VFZmZlY3QiLCJ0byIsImN1cnJlbnQiLCJkdXJhdGlvbiIsInkiLCJ4IiwiZWFzZSIsIlBvd2VyMSIsImVhc2VJbk91dCIsImFjdGl2ZUNsYXNzMSIsInNldEFjdGl2ZUNsYXNzMSIsImFjdGl2ZUNsYXNzMiIsInNldEFjdGl2ZUNsYXNzMiIsImFjdGl2ZUNsYXNzMyIsInNldEFjdGl2ZUNsYXNzMyIsImFjdGl2ZUNsYXNzNCIsInNldEFjdGl2ZUNsYXNzNCIsImFjdGl2ZUNsYXNzNSIsInNldEFjdGl2ZUNsYXNzNSIsImFjdGl2ZUhvdmVyMSIsInNldEFjdGl2ZUhvdmVyMSIsImFjdGl2ZUhvdmVyMiIsInNldEFjdGl2ZUhvdmVyMiIsImFjdGl2ZUhvdmVyMyIsInNldEFjdGl2ZUhvdmVyMyIsImFjdGl2ZUhvdmVyNCIsInNldEFjdGl2ZUhvdmVyNCIsImFjdGl2ZUhvdmVyNSIsInNldEFjdGl2ZUhvdmVyNSIsInBhdGhuYW1lIiwiaW5jbHVkZXMiLCJhY3RpdmVDbGFzc0ZuMSIsImFjdGl2ZUNsYXNzRm4yIiwiYWN0aXZlQ2xhc3NGbjMiLCJhY3RpdmVDbGFzc0ZuNCIsImFjdGl2ZUNsYXNzRm41IiwibW91c2VFbnRlck5hdiIsIndpZHRoIiwiUG93ZXI0IiwiZWFzZU91dCIsIm1vdXNlTGVhdmVOYXYiLCJvdmVyZmxvdyIsImhlaWdodCIsImN1cnNvciIsIlJlZGlyZWN0IiwicHVzaCIsIk5hdmJhclRlbXBsYXRlIiwic2l6ZSIsInVzZVdpbmRvd1NpemUiLCJhY3RpdmVIb3ZlciIsInVzZUNvbnRleHQiLCJjdXJyZW50VXNlciIsImNvbnRlbnRSZWYiLCJhY3RpdmVDbGFzcyIsIm1hcmdpbkxlZnQiLCJ0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb24iLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJ0cmFuc2l0aW9uUHJvcGVydHkiLCJUaXBweU1vbnN0ZXIiLCJjb250ZW50Q2xhc3MiLCJjb250ZW50VGV4dCIsImNvbnRlbnRUZXh0MSIsInN0YXJ0dXBzIiwibWFya2V0IiwibW9kZWwiLCJzdWNjZXNzIiwidGlwcHlNb25zdGVyIiwic2V0VGlwcHlNb25zdGVyIiwic2V0Q3VycmVudFRpcHB5IiwiZW1wdHlJbnB1dCIsImluaXRpYWxNb2RhbCIsInZpc2lvbiIsInByb2R1Y3QiLCJmaW5hbmNlcyIsIndlbGNvbWUiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsInRpcHB5UmVmIiwic2hvdyIsImZyb21UbyIsImF1dG9BbHBoYSIsInNjYWxlIiwidHJhbnNmb3JtT3JpZ2luIiwiaGlkZSIsImVhc2VJbiIsIm9uSW1hZ2VDbGljayIsImNvbnNvbGUiLCJsb2ciLCJFbXB0eVN0YXJ0dXAiLCJvblByb2plY3RDcmVhdGUiLCJNeURvY3VtZW50MSIsImRhdGEiLCJGb250IiwicmVnaXN0ZXIiLCJzcmMiLCJmYW1pbHkiLCJzdHlsZXMiLCJTdHlsZVNoZWV0IiwiY3JlYXRlIiwiaG9tZVBhZ2UiLCJmb250RmFtaWx5IiwiYmFja2dyb3VuZENvbG9yIiwiZmxleERpcmVjdGlvbiIsImhvbWVQYWdlVGl0bGVTZWN0aW9uIiwidGV4dEFsaWduIiwibWFyZ2luVG9wIiwiaG9tZVBhZ2VUaXRsZSIsImZvbnRTaXplIiwiY29sb3IiLCJob21lUGFnZURlc2MiLCJpbWFnZSIsImRpc3BsYXkiLCJtYXJnaW5SaWdodCIsImxlZnREZXNjQmxvY2siLCJib3JkZXJUb3BSaWdodFJhZGl1cyIsImxlZnREZXNjQmxvY2tUZXh0IiwicGFkZGluZyIsImxpbmVIZWlnaHQiLCJyaWdodEJhciIsInBvc2l0aW9uIiwicmlnaHQiLCJyaWdodEJhckNvbnRhY3QiLCJib3R0b20iLCJib3JkZXJUb3BMZWZ0UmFkaXVzIiwiY291bnRyeVRleHQiLCJlbWFpbFRleHQiLCJwaG9uZU51bWJlclRleHQiLCJncmF5QmFyT25lIiwibGVmdCIsImdyYXlCYXJUd28iLCJvdmVydmlld1BhZ2UiLCJwYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRvbSIsIm92ZXJ2aWV3SGVhZGluZyIsIm92ZXJ2aWV3U3VidGl0bGUiLCJvdmVydmlld0ltYWdlIiwidG9wIiwib3ZlcnZpZXdTZWN0aW9uIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJzZWN0aW9uQ29udGFpbmVyT25lIiwic2VjdGlvbkhlYWRpbmdPbmUiLCJzZWN0aW9uVGV4dCIsInNlY3Rpb25Db250YWluZXJUd28iLCJzZWN0aW9uSGVhZGluZ1R3byIsInNlY3Rpb25Db250YWluZXJUaHJlZSIsInNlY3Rpb25IZWFkaW5nVGhyZWUiLCJjb250ZW50c1BhZ2UiLCJjb250ZW50c0xlZnRCYXIiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJjb250ZW50c0Jhck9uZSIsInRyYW5zZm9ybSIsImNvbnRlbnRzQmFyVHdvIiwiY29udGVudHNCYXJUaHJlZSIsImNvbnRlbnRzQmFyRm91ciIsImNvbnRlbnRzQmFyRml2ZSIsImNvbnRlbnRzUmlnaHRCYXIiLCJjb250ZW50c1JpZ2h0VGV4dE9uZSIsImNvbnRlbnRzUmlnaHRUZXh0VHdvIiwiY29udGVudHNSaWdodFRleHRUaHJlZSIsImNvbnRlbnRzUmlnaHRUZXh0Rm91ciIsImNvbnRlbnRzUmlnaHRUZXh0Rml2ZSIsImF2YXRhckV4aXN0cyIsImltYWdlTmFtZUV4aXN0cyIsIm1hcmtldFByb2JsZW1TZWN0aW9uIiwiaWRlYU5hbWUiLCJpZGVhRGVzYyIsInN0YXJ0dXBGaWVsZCIsImlkZWFDb3VudHJ5Iiwic3RhcnR1cEVtYWlsIiwic3RhcnR1cFBob25lIiwibWFya2V0U29sdXRpb25TZWN0aW9uIiwiZm91bmRlcnNTZWN0aW9uIiwicHJvZHVjdE92ZXJ2aWV3U2VjdGlvbiIsInByb2R1Y3RQcm9tb3Rpb25TZWN0aW9uIiwicHJvZHVjdEJlbmVmaXRzU2VjdGlvbiIsIm1hcmtldE92ZXJ2aWV3U2VjdGlvbiIsImNvbXBldGl0b3JzU2VjdGlvbiIsImNvbXBldGl0aW9uRGlzdGluZ3Vpc2hTZWN0aW9uIiwidGFyZ2V0Q3VzdG9tZXJzU2VjdGlvbiIsInN0YXJ0dXBDb3N0c1NlY3Rpb24iLCJydW5uaW5nQ29zdHNTZWN0aW9uIiwiZmluYW5jaW5nU2VjdGlvbiIsImJ1c2luZXNzTW9kZWxPdmVydmlld1NlY3Rpb24iLCJidXNpbmVzc0dyb3dTZWN0aW9uIiwid2h5U3VjY2Vzc1NlY3Rpb24iLCJTdGFydHVwU2tlbGV0b24iLCJoZWxwZXJWYXJpYWJsZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJmaXJlc3RvcmUiLCJmaXJlYmFzZSIsImdldEFsbFByb2plY3RzIiwic25hcHNob3QiLCJjb2xsZWN0aW9uIiwiZ2V0IiwicHJvamVjdHMiLCJmb3JFYWNoIiwiZG9jIiwiaWQiLCJjcmVhdGVVc2VyIiwidWlkIiwic2V0IiwibWVyZ2UiLCJnZXRVc2VyIiwidXNlciIsInVzZXJzIiwiY3JlYXRlU3RhcnR1cERhdGEiLCJhZGQiLCJkZWxldGVQcm9qZWN0IiwicHJvamVjdElkIiwid2hlcmUiLCJiYXRjaCIsImRlbGV0ZSIsInJlZiIsImNvbW1pdCIsImNyZWF0ZUNoZWNrb3V0U2Vzc2lvbiIsImNoZWNrb3V0U2Vzc2lvblJlZiIsImRiIiwicHJpY2UiLCJzdWNjZXNzX3VybCIsImxvY2F0aW9uIiwib3JpZ2luIiwiY2FuY2VsX3VybCIsIm9uU25hcHNob3QiLCJzbmFwIiwiZXJyb3IiLCJzZXNzaW9uSWQiLCJhbGVydCIsIm1lc3NhZ2UiLCJzdHJpcGUiLCJnZXRTdHJpcGUiLCJyZWRpcmVjdFRvQ2hlY2tvdXQiLCJjcmVhdGVDaGVja291dFNlc3Npb24xMCIsImdvVG9CaWxsaW5nUG9ydGFsIiwiZnVuY3Rpb25SZWYiLCJhcHAiLCJmdW5jdGlvbnMiLCJodHRwc0NhbGxhYmxlIiwicmV0dXJuVXJsIiwiYXNzaWduIiwidXJsIiwiYXBwcyIsImxlbmd0aCIsImluaXRpYWxpemVBcHAiLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJtZWFzdXJlbWVudElkIiwiYXV0aCIsInN0b3JhZ2UiLCJBdXRoQ29udGV4dCIsIkF1dGhQcm92aWRlciIsInNldEN1cnJlbnRVc2VyIiwibG9hZGluZyIsInNldExvYWRpbmciLCJoYW5kbGVVc2VyIiwiZm9ybWF0ZWRVc2VyIiwiZm9ybWF0VXNlciIsIkNvb2tpZXMiLCJyZW1vdmUiLCJzaWduVXAiLCJlbWFpbCIsInBhc3N3b3JkIiwiY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkIiwidGhlbiIsInJlc3BvbnNlIiwibG9nSW4iLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsInNpZ25PdXQiLCJ1bnN1YnNjcmliZSIsIm9uSWRUb2tlbkNoYW5nZWQiLCJ2YWx1ZSIsImdldFN0cmlwZVJvbGUiLCJnZXRJZFRva2VuIiwiZGVjb2RlZFRva2VuIiwiZ2V0SWRUb2tlblJlc3VsdCIsImNsYWltcyIsInN0cmlwZVJvbGUiLCJ0b2tlbiIsInByb3ZpZGVyIiwicHJvdmlkZXJEYXRhIiwicHJvdmlkZXJJZCIsInN0cmlwZVByb21pc2UiLCJsb2FkU3RyaXBlIiwiZ2xvYmFsIiwiVkFMSURfTE9BRElOR19WQUxVRVMiLCJsb2FkZXJzIiwiVkFMSURfTEFZT1VUX1ZBTFVFUyIsImRldmljZVNpemVzIiwiaW1hZ2VTaXplcyIsImxvYWRlciIsInBhdGgiLCJkb21haW5zIiwicHJvY2VzcyIsImltYWdlQ29uZmlnRGVmYXVsdCIsImFsbFNpemVzIiwiY29uZmlnRGV2aWNlU2l6ZXMiLCJhIiwic2l6ZXMiLCJsYXlvdXQiLCJwZXJjZW50U2l6ZXMiLCJtIiwicGFyc2VJbnQiLCJzbWFsbGVzdFJhdGlvIiwiTWF0aCIsIndpZHRocyIsInMiLCJraW5kIiwidyIsInAiLCJzcmNTZXQiLCJnZXRXaWR0aHMiLCJsYXN0IiwiaSIsImxvYWQiLCJyb290IiwiVkFMSURfTE9BREVSUyIsImNvbmZpZ0xvYWRlciIsInVub3B0aW1pemVkIiwicHJpb3JpdHkiLCJhbGwiLCJyZXN0IiwidW5zaXplZCIsIkJvb2xlYW4iLCJKU09OIiwiaXNMYXp5Iiwicm9vdE1hcmdpbiIsImRpc2FibGVkIiwiaXNWaXNpYmxlIiwid2lkdGhJbnQiLCJnZXRJbnQiLCJoZWlnaHRJbnQiLCJxdWFsaXR5SW50IiwiaW1nU3R5bGUiLCJib3hTaXppbmciLCJib3JkZXIiLCJtYXJnaW4iLCJtaW5XaWR0aCIsIm1heFdpZHRoIiwibWluSGVpZ2h0IiwibWF4SGVpZ2h0IiwicXVvdGllbnQiLCJpc05hTiIsIndyYXBwZXJTdHlsZSIsInNpemVyU3R5bGUiLCJzaXplclN2ZyIsImltZ0F0dHJpYnV0ZXMiLCJnZW5lcmF0ZUltZ0F0dHJzIiwicXVhbGl0eSIsInBhcmFtcyIsInBhcmFtc1N0cmluZyIsIm5vcm1hbGl6ZVNyYyIsIm1pc3NpbmdWYWx1ZXMiLCJwYXJzZWRTcmMiLCJjb25maWdEb21haW5zIiwiaG9zdG5hbWUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJwcmVmZXRjaGVkIiwiZXJyIiwiY3VyTG9jYWxlIiwib3B0aW9ucyIsImhyZWYiLCJldmVudCIsInRhcmdldCIsImUiLCJub2RlTmFtZSIsImlzTW9kaWZpZWRFdmVudCIsInNjcm9sbCIsImFzIiwicmVwbGFjZSIsImFyZ3MiLCJrZXkiLCJleHBlY3RlZCIsImFjdHVhbCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJPYmplY3QiLCJwcm9wcyIsImNyZWF0ZVByb3BFcnJvciIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJzaGFsbG93IiwicGFzc0hyZWYiLCJwcmVmZXRjaCIsImxvY2FsZSIsIm9wdGlvbmFsUHJvcHMiLCJ2YWxUeXBlIiwiaGFzV2FybmVkIiwiUmVhY3QiLCJyZXNvbHZlZEFzIiwiY2hpbGQiLCJDaGlsZHJlbiIsImNoaWxkUmVmIiwic2V0UmVmIiwiZWwiLCJzZXRJbnRlcnNlY3Rpb25SZWYiLCJzaG91bGRQcmVmZXRjaCIsImlzUHJlZmV0Y2hlZCIsImNoaWxkUHJvcHMiLCJvbkNsaWNrIiwibGlua0NsaWNrZWQiLCJsb2NhbGVEb21haW4iLCJMaW5rIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwic2VsZiIsInN0YXJ0IiwiRGF0ZSIsInNldFRpbWVvdXQiLCJjYiIsImRpZFRpbWVvdXQiLCJ0aW1lUmVtYWluaW5nIiwiY2FuY2VsSWRsZUNhbGxiYWNrIiwiY2xlYXJUaW1lb3V0IiwiTVNfTUFYX0lETEVfREVMQVkiLCJlbnRyeSIsIm1hcCIsIlByb21pc2UiLCJwcm9tIiwicmVzb2x2ZSIsInJlc29sdmVyIiwiZnV0dXJlIiwiZ2VuZXJhdG9yIiwibGluayIsImRvY3VtZW50IiwiY2FuUHJlZmV0Y2giLCJoYXNQcmVmZXRjaCIsInJlcyIsIkFTU0VUX0xPQURfRVJST1IiLCJTeW1ib2wiLCJzY3JpcHQiLCJyZWplY3QiLCJtYXJrQXNzZXRFcnJvciIsImNhbmNlbGxlZCIsInIiLCJvbkJ1aWxkTWFuaWZlc3QiLCJyZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0Iiwic2NyaXB0cyIsImFzc2V0UHJlZml4IiwiZW5jb2RlVVJJIiwiY3NzIiwiZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCIsIm1hbmlmZXN0Iiwicm91dGUiLCJhbGxGaWxlcyIsInYiLCJlbnRyeXBvaW50cyIsImxvYWRlZFNjcmlwdHMiLCJzdHlsZVNoZWV0cyIsInJvdXRlcyIsImFwcGVuZFNjcmlwdCIsImZldGNoIiwidGV4dCIsImNvbnRlbnQiLCJ3aGVuRW50cnlwb2ludCIsIndpdGhGdXR1cmUiLCJvbkVudHJ5cG9pbnQiLCJmbiIsImV4cG9ydHMiLCJjb21wb25lbnQiLCJpbnB1dCIsIm9sZCIsImxvYWRSb3V0ZSIsImdldEZpbGVzRm9yUm91dGUiLCJlbnRyeXBvaW50IiwiY24iLCJuYXZpZ2F0b3IiLCJvdXRwdXQiLCJwcmVmZXRjaFZpYURvbSIsImNyZWF0ZVJvdXRlTG9hZGVyIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsIlJvdXRlciIsImZpZWxkIiwiZ2V0Um91dGVyIiwiZXZlbnRGaWVsZCIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJzdGFjayIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJfcm91dGVyIiwiaW5zdGFuY2UiLCJBcnJheSIsImhhc0ludGVyc2VjdGlvbk9ic2VydmVyIiwiaXNEaXNhYmxlZCIsInVub2JzZXJ2ZSIsIm9ic2VydmUiLCJpZGxlQ2FsbGJhY2siLCJjcmVhdGVPYnNlcnZlciIsImVsZW1lbnRzIiwib2JzZXJ2ZXIiLCJvYnNlcnZlcnMiLCJlbnRyaWVzIiwiY2FsbGJhY2siLCJDb21wb3NlZENvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsIldpdGhSb3V0ZXJXcmFwcGVyIiwibmFtZSIsInBhdGhuYW1lUGFydHMiLCJsb2NhbGVzIiwiZGV0ZWN0ZWRMb2NhbGUiLCJvbiIsIm9mZiIsImVtaXQiLCJoYW5kbGVyIiwiYmFzZVBhdGgiLCJwcmVmaXgiLCJwYXRoTm9RdWVyeUhhc2giLCJxdWVyeUluZGV4IiwiaGFzaEluZGV4IiwiYWRkUGF0aFByZWZpeCIsImxvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJoYXNCYXNlUGF0aCIsImludGVycG9sYXRlZFJvdXRlIiwiZHluYW1pY1JlZ2V4IiwiZHluYW1pY0dyb3VwcyIsImR5bmFtaWNNYXRjaGVzIiwiYXNQYXRobmFtZSIsInBhcmFtIiwicmVwbGFjZWQiLCJvcHRpb25hbCIsInNlZ21lbnQiLCJyZXN1bHQiLCJmaWx0ZXJlZFF1ZXJ5IiwicXVlcnkiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJpc0xvY2FsVVJMIiwicmVzb2x2ZUFzIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsImludGVycG9sYXRlQXMiLCJoYXNoIiwib21pdFBhcm1zRnJvbVF1ZXJ5IiwicmVzb2x2ZWRIcmVmIiwicmVzb2x2ZUhyZWYiLCJocmVmSGFkT3JpZ2luIiwiYXNIYWRPcmlnaW4iLCJzdHJpcE9yaWdpbiIsInByZXBhcmVkVXJsIiwiYWRkQmFzZVBhdGgiLCJwcmVwYXJlZEFzIiwiY2xlYW5QYXRobmFtZSIsInBhZ2VzIiwicGFnZSIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiU1NHX0RBVEFfTk9UX0ZPVU5EIiwiY3JlZGVudGlhbHMiLCJhdHRlbXB0cyIsImZldGNoUmV0cnkiLCJub3RGb3VuZCIsImlzU2VydmVyUmVuZGVyIiwiY29uc3RydWN0b3IiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic2RyIiwic3ViIiwiY2xjIiwicGFnZUxvYWRlciIsIl9icHMiLCJldmVudHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiaXNGYWxsYmFjayIsIl9pbkZsaWdodFJvdXRlIiwiX3NoYWxsb3ciLCJkZWZhdWx0TG9jYWxlIiwiZG9tYWluTG9jYWxlcyIsImlzUmVhZHkiLCJpc1ByZXZpZXciLCJpc0xvY2FsZURvbWFpbiIsIl9pZHgiLCJzdGF0ZSIsImluaXRpYWwiLCJfX05fU1NHIiwiaW5pdGlhbFByb3BzIiwiX19OX1NTUCIsIkNvbXBvbmVudCIsImF1dG9FeHBvcnREeW5hbWljIiwicmVsb2FkIiwiYmFjayIsInByZXBhcmVVcmxBcyIsImxvY2FsZUNoYW5nZSIsIlNUIiwicGVyZm9ybWFuY2UiLCJyb3V0ZVByb3BzIiwiYWRkTG9jYWxlIiwiZGVsQmFzZVBhdGgiLCJjbGVhbmVkQXMiLCJkZWxMb2NhbGUiLCJwYXJzZWQiLCJfX3Jld3JpdGVzIiwibWV0aG9kIiwicmVzb2x2ZUR5bmFtaWNSb3V0ZSIsInBhcnNlZEFzIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJzaG91bGRJbnRlcnBvbGF0ZSIsIm1pc3NpbmdQYXJhbXMiLCJyb3V0ZUluZm8iLCJkZXN0aW5hdGlvbiIsInBhcnNlZEhyZWYiLCJub3RGb3VuZFJvdXRlIiwiYXBwQ29tcCIsImlzVmFsaWRTaGFsbG93Um91dGUiLCJmb3JjZWRTY3JvbGwiLCJjaGFuZ2VTdGF0ZSIsIl9fTiIsImlkeCIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJleGlzdGluZ1JvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsInJlcXVpcmUiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJkYXRhSHJlZiIsImJlZm9yZVBvcFN0YXRlIiwib25seUFIYXNoQ2hhbmdlIiwibmV3SGFzaCIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJzY3JvbGxUb0hhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJpc1NzZyIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsIl9nZXREYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJmZXRjaE5leHREYXRhIiwiX2dldFNlcnZlckRhdGEiLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5Iiwic2xhc2hlZFByb3RvY29scyIsInByb3RvY29sIiwidXJsT2JqIiwiaG9zdCIsIlN0cmluZyIsInF1ZXJ5c3RyaW5nIiwic2VhcmNoIiwiVEVTVF9ST1VURSIsImdsb2JhbEJhc2UiLCJyZXNvbHZlZEJhc2UiLCJzZWFyY2hQYXJhbXMiLCJpdGVtIiwic3RyaW5naWZ5VXJsUXVlcnlQYXJhbSIsInNlYXJjaFBhcmFtc0xpc3QiLCJyZSIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsInNsdWdOYW1lIiwiZyIsImdyb3VwcyIsInN0ciIsInNlZ21lbnRzIiwibm9ybWFsaXplZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsInBhcnNlUGFyYW1ldGVyIiwicG9zIiwiZXNjYXBlUmVnZXgiLCJyb3V0ZUtleUNoYXJDb2RlIiwicm91dGVLZXlDaGFyTGVuZ3RoIiwiZ2V0U2FmZVJvdXRlS2V5Iiwicm91dGVLZXkiLCJyb3V0ZUtleXMiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImNsZWFuZWRLZXkiLCJpbnZhbGlkS2V5IiwibmFtZWRSZWdleCIsInVzZWQiLCJwb3J0IiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJBcHAiLCJnZXREaXNwbGF5TmFtZSIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJpc1Jlc1NlbnQiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJEaXZDb21wb25lbnQiLCJzdHlsZWQiLCJkaXYiLCJmaWxsZWRTZWN0aW9uIiwiRGl2Q29tcG9uZW50MSIsImZpbGxlZFNlY3Rpb24xIiwiRGl2Q29tcG9uZW50MiIsImZpbGxlZFNlY3Rpb24yIiwiRGl2Q29tcG9uZW50MyIsImZpbGxlZFNlY3Rpb24zIiwiRGl2Q29tcG9uZW50NCIsImZpbGxlZFNlY3Rpb240IiwiRGF0YUNvbnRleHQiLCJTdGFydHVwUGFnZSIsInNldFByb2plY3RzIiwiY29udGFpbmVyUmVmIiwiZmV0Y2hQcm9qZWN0cyIsInVzZXJQcm9qZWN0cyIsImFycmF5cyIsImRvY3MiLCJzZXRQcm9qZWN0c0FycmF5IiwicHJldmVudERlZmF1bHQiLCJwcm9qZWN0c0FycmF5Iiwib25Qcm9qZWN0RWRpdCIsImN1cnJlbnRQcm9qZWN0Iiwic2V0QWN0aXZlQ2xhc3MiLCJjbGFzc1JlZiIsInByb2plY3RSZWYiLCJjbGFzc0FycmF5cmVmIiwiY2hvb3NlQ2xhc3NlcyIsImNob29zZUNsYXNzZXNDbGljayIsImZpbmQiLCJwcm9qZWN0IiwiY29tcGFyZSIsImRhdGUxIiwiZGF0ZTIiLCJkYXRlT25lIiwiY3JlYXRlZEF0IiwiZGF0ZVR3byIsInNvcnQiLCJkYXRhcyIsInNldERhdGEiLCJzcGVjaWFsRGF0YSIsInNldFNwZWNpYWxEYXRhIiwiZG9pbmdNeUJlc3QiLCJ1c2VTV1IiLCJmZXRjaGVyIiwidXNlTWVtbyIsIm9uUHJvamVjdERlbGV0ZSIsIm11dGF0ZSIsImZpbHRlciIsIm1hcmtldFByb2JsZW1TZWN0aW9uRGF0YSIsIm1hcmtldFNvbHV0aW9uU2VjdGlvbkRhdGEiLCJmb3VuZGVyc1NlY3Rpb25EYXRhIiwicHJvZHVjdE92ZXJ2aWV3U2VjdGlvbkRhdGEiLCJwcm9kdWN0UHJvbW90aW9uU2VjdGlvbkRhdGEiLCJwcm9kdWN0QmVuZWZpdHNTZWN0aW9uRGF0YSIsIm1hcmtldE92ZXJ2aWV3U2VjdGlvbkRhdGEiLCJjb21wZXRpdG9yc1NlY3Rpb25EYXRhIiwidGFyZ2V0Q3VzdG9tZXJzU2VjdGlvbkRhdGEiLCJjb21wZXRpdGlvbkRpc3Rpbmd1aXNoU2VjdGlvbkRhdGEiLCJzdGFydHVwQ29zdHNTZWN0aW9uRGF0YSIsInJ1bm5pbmdDb3N0c1NlY3Rpb25EYXRhIiwiZmluYW5jaW5nU2VjdGlvbkRhdGEiLCJidXNpbmVzc01vZGVsT3ZlcnZpZXdTZWN0aW9uRGF0YSIsImJ1c2luZXNzR3Jvd1NlY3Rpb25EYXRhIiwid2h5U3VjY2Vzc1NlY3Rpb25EYXRhIiwiYXNQZGYiLCJwZGYiLCJ1cGRhdGVDb250YWluZXIiLCJibG9iIiwidG9CbG9iIiwic2F2ZUFzIiwiZm9ybWF0IiwicGFyc2VJU08iLCJoZWFkZXJzIiwiSGVhZGVycyIsImpzb24iLCJ3aW5kb3dTaXplIiwic2V0V2luZG93U2l6ZSIsInVuZGVmaW5lZCIsImhhbmRsZVJlc2l6ZSIsImlubmVySGVpZ2h0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixF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Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxnQzs7Ozs7Ozs7Ozs7QUNBQSxpQyIsImZpbGUiOiJwYWdlcy9kYXNoYm9hcmQvc3RhcnR1cC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvZGFzaGJvYXJkL3N0YXJ0dXAuanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2hlYWQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdG8tYmFzZS02NC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2ltYWdlLWNvbmZpZy5qc1wiKTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VTdGF0ZSwgY3JlYXRlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgZ3NhcCwgeyBQb3dlcjEsIFBvd2VyNCB9IGZyb20gJ2dzYXAnO1xyXG5cclxuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tICduZXh0LXRoZW1lcyc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gJy4uLy4uL2xpYi9uZXdBdXRoJztcclxuXHJcbmV4cG9ydCBjb25zdCBJc0FjdGl2ZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5jb25zdCBEZXNrdG9wTmF2YmFyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IHsgbG9nT3V0IH0gPSB1c2VBdXRoKCk7XHJcblxyXG4gIGNvbnN0IHsgdGhlbWUsIHNldFRoZW1lIH0gPSB1c2VUaGVtZSgpO1xyXG4gIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgbmF2UmVmID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBtYW5SZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgdGwgPSBnc2FwLnRpbWVsaW5lKHsgcmVwZWF0OiAtMSwgeW95bzogdHJ1ZSB9KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHRsLnRvKG1hblJlZi5jdXJyZW50LCB7XHJcbiAgICAgIGR1cmF0aW9uOiAzLFxyXG4gICAgICB5OiAyNTAsXHJcbiAgICAgIHg6IDE3NSxcclxuICAgICAgZWFzZTogUG93ZXIxLmVhc2VJbk91dCxcclxuICAgIH0pXHJcbiAgICAgIC50byhtYW5SZWYuY3VycmVudCwge1xyXG4gICAgICAgIGR1cmF0aW9uOiAzLFxyXG4gICAgICAgIHk6IDUwMCxcclxuICAgICAgICB4OiAzNTAsXHJcbiAgICAgICAgZWFzZTogUG93ZXIxLmVhc2VJbk91dCxcclxuICAgICAgfSlcclxuICAgICAgLnRvKG1hblJlZi5jdXJyZW50LCB7XHJcbiAgICAgICAgZHVyYXRpb246IDMsXHJcbiAgICAgICAgeTogMjUwLFxyXG4gICAgICAgIHg6IDE3NSxcclxuICAgICAgICBlYXNlOiBQb3dlcjEuZWFzZUluT3V0LFxyXG4gICAgICB9KVxyXG4gICAgICAudG8obWFuUmVmLmN1cnJlbnQsIHsgZHVyYXRpb246IDMsIHk6IDAsIHg6IDAsIGVhc2U6IFBvd2VyMS5lYXNlSW5PdXQgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBbYWN0aXZlQ2xhc3MxLCBzZXRBY3RpdmVDbGFzczFdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFthY3RpdmVDbGFzczIsIHNldEFjdGl2ZUNsYXNzMl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2FjdGl2ZUNsYXNzMywgc2V0QWN0aXZlQ2xhc3MzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbYWN0aXZlQ2xhc3M0LCBzZXRBY3RpdmVDbGFzczRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFthY3RpdmVDbGFzczUsIHNldEFjdGl2ZUNsYXNzNV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IFthY3RpdmVIb3ZlcjEsIHNldEFjdGl2ZUhvdmVyMV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2FjdGl2ZUhvdmVyMiwgc2V0QWN0aXZlSG92ZXIyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbYWN0aXZlSG92ZXIzLCBzZXRBY3RpdmVIb3ZlcjNdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFthY3RpdmVIb3ZlcjQsIHNldEFjdGl2ZUhvdmVyNF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2FjdGl2ZUhvdmVyNSwgc2V0QWN0aXZlSG92ZXI1XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChyb3V0ZXIucGF0aG5hbWUuaW5jbHVkZXMoJ3dlbGNvbWUnKSkge1xyXG4gICAgICBzZXRBY3RpdmVDbGFzczEodHJ1ZSk7XHJcbiAgICB9IGVsc2UgaWYgKHJvdXRlci5wYXRobmFtZS5pbmNsdWRlcygnc3RhcnR1cCcpKSB7XHJcbiAgICAgIHNldEFjdGl2ZUNsYXNzMih0cnVlKTtcclxuICAgIH0gZWxzZSBpZiAocm91dGVyLnBhdGhuYW1lLmluY2x1ZGVzKCdidXNpbmVzcycpKSB7XHJcbiAgICAgIC8vIFRlZ28gcm91dGVyJ2EgamVzemN6ZSBuaWUgbWFcclxuICAgICAgc2V0QWN0aXZlQ2xhc3MzKHRydWUpO1xyXG4gICAgfSBlbHNlIGlmIChyb3V0ZXIucGF0aG5hbWUuaW5jbHVkZXMoJ2FjY291bnQnKSkge1xyXG4gICAgICAvLyBUZWdvIHJvdXRlcidhIGplc3pjemUgbmllIG1hXHJcbiAgICAgIHNldEFjdGl2ZUNsYXNzNCh0cnVlKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGFjdGl2ZUNsYXNzRm4xID0gKCkgPT4ge1xyXG4gICAgc2V0QWN0aXZlQ2xhc3MxKHRydWUpO1xyXG4gICAgc2V0QWN0aXZlQ2xhc3MyKGZhbHNlKTtcclxuICAgIHNldEFjdGl2ZUNsYXNzMyhmYWxzZSk7XHJcbiAgICBzZXRBY3RpdmVDbGFzczQoZmFsc2UpO1xyXG4gICAgc2V0QWN0aXZlQ2xhc3M1KGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBhY3RpdmVDbGFzc0ZuMiA9ICgpID0+IHtcclxuICAgIHNldEFjdGl2ZUNsYXNzMShmYWxzZSk7XHJcbiAgICBzZXRBY3RpdmVDbGFzczIodHJ1ZSk7XHJcbiAgICBzZXRBY3RpdmVDbGFzczMoZmFsc2UpO1xyXG4gICAgc2V0QWN0aXZlQ2xhc3M0KGZhbHNlKTtcclxuICAgIHNldEFjdGl2ZUNsYXNzNShmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYWN0aXZlQ2xhc3NGbjMgPSAoKSA9PiB7XHJcbiAgICBzZXRBY3RpdmVDbGFzczEoZmFsc2UpO1xyXG4gICAgc2V0QWN0aXZlQ2xhc3MyKGZhbHNlKTtcclxuICAgIHNldEFjdGl2ZUNsYXNzMyh0cnVlKTtcclxuICAgIHNldEFjdGl2ZUNsYXNzNChmYWxzZSk7XHJcbiAgICBzZXRBY3RpdmVDbGFzczUoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGFjdGl2ZUNsYXNzRm40ID0gKCkgPT4ge1xyXG4gICAgc2V0QWN0aXZlQ2xhc3MxKGZhbHNlKTtcclxuICAgIHNldEFjdGl2ZUNsYXNzMihmYWxzZSk7XHJcbiAgICBzZXRBY3RpdmVDbGFzczMoZmFsc2UpO1xyXG4gICAgc2V0QWN0aXZlQ2xhc3M0KHRydWUpO1xyXG4gICAgc2V0QWN0aXZlQ2xhc3M1KGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBhY3RpdmVDbGFzc0ZuNSA9ICgpID0+IHtcclxuICAgIHNldEFjdGl2ZUNsYXNzMShmYWxzZSk7XHJcbiAgICBzZXRBY3RpdmVDbGFzczIoZmFsc2UpO1xyXG4gICAgc2V0QWN0aXZlQ2xhc3MzKGZhbHNlKTtcclxuICAgIHNldEFjdGl2ZUNsYXNzNChmYWxzZSk7XHJcbiAgICBzZXRBY3RpdmVDbGFzczUodHJ1ZSk7XHJcbiAgICBsb2dPdXQoKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBtb3VzZUVudGVyTmF2ID0gKCkgPT4ge1xyXG4gICAgc2V0QWN0aXZlKHRydWUpO1xyXG5cclxuICAgIGdzYXAudG8obmF2UmVmLmN1cnJlbnQsIHtcclxuICAgICAgd2lkdGg6ICcyMDhweCcsXHJcbiAgICAgIGVhc2U6IFBvd2VyNC5lYXNlT3V0LFxyXG4gICAgICBkdXJhdGlvbjogMSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG1vdXNlTGVhdmVOYXYgPSAoKSA9PiB7XHJcbiAgICBzZXRBY3RpdmUoZmFsc2UpO1xyXG5cclxuICAgIGdzYXAudG8obmF2UmVmLmN1cnJlbnQsIHsgd2lkdGg6ICc4MHB4JywgZWFzZTogUG93ZXI0LmVhc2VPdXQgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxJc0FjdGl2ZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2FjdGl2ZX0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgcmlnaHQtMCB6LTUwXCIgc3R5bGU9e3sgb3ZlcmZsb3c6ICd1bnNldCcsIGhlaWdodDogJ2ZpdC1jb250ZW50JyB9fT5cclxuICAgICAgICA8c3ZnXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRUaGVtZSh0aGVtZSA9PT0gJ2RhcmsnID8gJ2xpZ2h0JyA6ICdkYXJrJyl9XHJcbiAgICAgICAgICB3aWR0aD1cIjEwMFwiXHJcbiAgICAgICAgICBoZWlnaHQ9XCIxMDBcIlxyXG4gICAgICAgICAgc3R5bGU9e3sgb3ZlcmZsb3c6ICd1bnNldCcsIGN1cnNvcjogJ3BvaW50ZXInIH19XHJcbiAgICAgICAgICB2aWV3Qm94PVwiMCAwIDc3MCA3NzJcIlxyXG4gICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGc+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgZD1cIk03NjkuMDAxIDBIMzEwLjI4NkMzMDYuNzYyIDIxLjQ4NzEgMzA0Ljk5NCA0My4yMjU3IDMwNS4wMDEgNjVDMzA1LjAwMSAyODQuODA5IDQ4My4xOTIgNDYzIDcwMy4wMDEgNDYzQzcyNS4xMTQgNDYzLjAwOCA3NDcuMTkgNDYxLjE4NSA3NjkuMDAxIDQ1Ny41NVYwWlwiXHJcbiAgICAgICAgICAgICAgZmlsbD1cIiMwQTEyMzBcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgIGQ9XCJNNTc0Ljg0OSAyNDguODA5QzU2Ny45NjUgMjQ4LjgxNSA1NjEuMTM1IDI0Ny41ODIgNTU0LjY4NyAyNDUuMTdDNTU0LjMxOCAyNDUuMDMyIDU1My45OCAyNDQuODIyIDU1My42OTIgMjQ0LjU1M0M1NTMuNDA0IDI0NC4yODQgNTUzLjE3MiAyNDMuOTYxIDU1My4wMDkgMjQzLjYwM0M1NTIuODQ2IDI0My4yNDQgNTUyLjc1NSAyNDIuODU3IDU1Mi43NDIgMjQyLjQ2M0M1NTIuNzI4IDI0Mi4wNyA1NTIuNzkyIDI0MS42NzcgNTUyLjkzMSAyNDEuMzA4QzU1My4wNjkgMjQwLjkzOSA1NTMuMjc4IDI0MC42MDEgNTUzLjU0NyAyNDAuMzEzQzU1My44MTYgMjQwLjAyNSA1NTQuMTM5IDIzOS43OTMgNTU0LjQ5OCAyMzkuNjNDNTU0Ljg1NiAyMzkuNDY3IDU1NS4yNDQgMjM5LjM3NiA1NTUuNjM3IDIzOS4zNjNDNTU2LjAzMSAyMzkuMzQ5IDU1Ni40MjQgMjM5LjQxNCA1NTYuNzkyIDIzOS41NTJDNTY1LjM0MSAyNDIuNzExIDU3NC41NjYgMjQzLjU4NiA1ODMuNTU3IDI0Mi4wOUM1OTIuNTQ3IDI0MC41OTQgNjAwLjk5MSAyMzYuNzc5IDYwOC4wNTYgMjMxLjAyMUM1ODYuMDE4IDIzMS4yNTUgNTY0LjQ2MSAyMjAuODQgNTUzLjczNyAyMDQuMTI4QzU0Ni44NDIgMTkzLjM4NSA1NDQuNTg4IDE4MC43NDQgNTQ3LjIxNiAxNjcuNTdDNTQ5LjIyOSAxNTguMDE3IDU1My4zNiAxNDkuMDM3IDU1OS4zMDUgMTQxLjI5M0M1NDcuOTU0IDE0NC45MDUgNTM4LjE4NCAxNTIuMzAyIDUzMS42MjggMTYyLjI0OEM1MjUuMDcyIDE3Mi4xOTMgNTIyLjEyNiAxODQuMDg3IDUyMy4yODIgMTk1Ljk0M0M1MjMuMzIyIDE5Ni4zMzYgNTIzLjI4NCAxOTYuNzMzIDUyMy4xNzEgMTk3LjExMUM1MjMuMDU3IDE5Ny40ODkgNTIyLjg3MSAxOTcuODQxIDUyMi42MjEgMTk4LjE0N0M1MjIuMzcxIDE5OC40NTMgNTIyLjA2MyAxOTguNzA2IDUyMS43MTUgMTk4Ljg5M0M1MjEuMzY3IDE5OS4wOCA1MjAuOTg2IDE5OS4xOTYgNTIwLjU5MyAxOTkuMjM1QzUyMC4yIDE5OS4yNzQgNTE5LjgwNCAxOTkuMjM1IDUxOS40MjYgMTk5LjEyQzUxOS4wNDggMTk5LjAwNSA1MTguNjk3IDE5OC44MTcgNTE4LjM5MiAxOTguNTY2QzUxOC4wODcgMTk4LjMxNiA1MTcuODM0IDE5OC4wMDcgNTE3LjY0OSAxOTcuNjU4QzUxNy40NjMgMTk3LjMxIDUxNy4zNDkgMTk2LjkyOCA1MTcuMzExIDE5Ni41MzVDNTE1Ljg1NCAxODEuNjE5IDUyMC4yMjMgMTY2LjcxNiA1MjkuNTA0IDE1NC45NDhDNTM4Ljc4NCAxNDMuMTggNTUyLjI1OCAxMzUuNDU3IDU2Ny4xMDMgMTMzLjM5N0M1NjcuNzI0IDEzMy4zMTEgNTY4LjM1NiAxMzMuNDIxIDU2OC45MTEgMTMzLjcxM0M1NjkuNDY2IDEzNC4wMDQgNTY5LjkxNSAxMzQuNDYyIDU3MC4xOTcgMTM1LjAyMUM1NzAuNDc4IDEzNS41ODEgNTcwLjU3NyAxMzYuMjE1IDU3MC40OCAxMzYuODM1QzU3MC4zODIgMTM3LjQ1NCA1NzAuMDk0IDEzOC4wMjcgNTY5LjY1NCAxMzguNDczQzU1NC4zMSAxNTQuMDU5IDU0NC45OTkgMTc5LjQwMiA1NTguNzg2IDIwMC44ODhDNTY5LjY2NCAyMTcuODM3IDU5My4wNjkgMjI3LjUzMiA2MTUuNzE0IDIyNC40NjhDNjE2LjMyMiAyMjQuMzg2IDYxNi45NCAyMjQuNDkxIDYxNy40ODUgMjI0Ljc3MUM2MTguMDMxIDIyNS4wNTEgNjE4LjQ3OCAyMjUuNDkxIDYxOC43NjUgMjI2LjAzMkM2MTkuMDUzIDIyNi41NzQgNjE5LjE2OCAyMjcuMTkgNjE5LjA5NSAyMjcuNzk5QzYxOS4wMjIgMjI4LjQwNyA2MTguNzY0IDIyOC45NzkgNjE4LjM1NiAyMjkuNDM2QzYxMi44NzMgMjM1LjU0MiA2MDYuMTY0IDI0MC40MjIgNTk4LjY2NyAyNDMuNzZDNTkxLjE3MSAyNDcuMDk4IDU4My4wNTUgMjQ4LjgxOCA1NzQuODQ5IDI0OC44MDlWMjQ4LjgwOVpcIlxyXG4gICAgICAgICAgICAgIGZpbGw9XCIjNkM2M0ZGXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICBkPVwiTTUyNy4wMDEgMjUwQzUyMi42NSAyNTAgNTE4LjM5NyAyNDguNzEgNTE0Ljc3OSAyNDYuMjkyQzUxMS4xNjEgMjQzLjg3NSA1MDguMzQxIDI0MC40MzkgNTA2LjY3NiAyMzYuNDE5QzUwNS4wMTEgMjMyLjM5OSA1MDQuNTc1IDIyNy45NzYgNTA1LjQyNCAyMjMuNzA4QzUwNi4yNzMgMjE5LjQ0IDUwOC4zNjggMjE1LjUyIDUxMS40NDUgMjEyLjQ0NEM1MTQuNTIyIDIwOS4zNjcgNTE4LjQ0MiAyMDcuMjcyIDUyMi43MDkgMjA2LjQyM0M1MjYuOTc3IDIwNS41NzQgNTMxLjQwMSAyMDYuMDEgNTM1LjQyMSAyMDcuNjc1QzUzOS40NDEgMjA5LjM0IDU0Mi44NzYgMjEyLjE2IDU0NS4yOTQgMjE1Ljc3N0M1NDcuNzExIDIxOS4zOTUgNTQ5LjAwMSAyMjMuNjQ5IDU0OS4wMDEgMjI4QzU0OC45OTUgMjMzLjgzMyA1NDYuNjc1IDIzOS40MjUgNTQyLjU1MSAyNDMuNTQ5QzUzOC40MjYgMjQ3LjY3MyA1MzIuODM0IDI0OS45OTMgNTI3LjAwMSAyNTBWMjUwWk01MjcuMDAxIDIxMkM1MjMuODM3IDIxMiA1MjAuNzQ0IDIxMi45MzggNTE4LjExMiAyMTQuNjk3QzUxNS40ODEgMjE2LjQ1NSA1MTMuNDMgMjE4Ljk1MyA1MTIuMjE5IDIyMS44NzdDNTExLjAwOCAyMjQuODAxIDUxMC42OTIgMjI4LjAxOCA1MTEuMzA5IDIzMS4xMjFDNTExLjkyNiAyMzQuMjI1IDUxMy40NSAyMzcuMDc2IDUxNS42ODggMjM5LjMxNEM1MTcuOTI1IDI0MS41NTEgNTIwLjc3NiAyNDMuMDc1IDUyMy44OCAyNDMuNjkzQzUyNi45ODQgMjQ0LjMxIDUzMC4yMDEgMjQzLjk5MyA1MzMuMTI0IDI0Mi43ODJDNTM2LjA0OCAyNDEuNTcxIDUzOC41NDcgMjM5LjUyIDU0MC4zMDUgMjM2Ljg4OUM1NDIuMDYzIDIzNC4yNTggNTQzLjAwMSAyMzEuMTY1IDU0My4wMDEgMjI4QzU0Mi45OTcgMjIzLjc1OCA1NDEuMzA5IDIxOS42OTEgNTM4LjMxIDIxNi42OTJDNTM1LjMxIDIxMy42OTIgNTMxLjI0MyAyMTIuMDA1IDUyNy4wMDEgMjEyVjIxMlpcIlxyXG4gICAgICAgICAgICAgIGZpbGw9XCIjNkM2M0ZGXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGcgcmVmPXttYW5SZWZ9PlxyXG4gICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICBkPVwiTTguNjkwNzQgNTY3LjA3OEM3LjI0NTQ2IDU2Ni44NTMgNS44NjUwNCA1NjYuMzIxIDQuNjQxODIgNTY1LjUxOEMzLjQxODYgNTY0LjcxNiAyLjM4MDc3IDU2My42NjIgMS41OTc3MSA1NjIuNDI3QzAuODE0NjUyIDU2MS4xOTEgMC4zMDQ0MjMgNTU5LjgwMiAwLjEwMTE1NyA1NTguMzU0Qy0wLjEwMjEwOSA1NTYuOTA1IDAuMDA2Mjc1MTIgNTU1LjQzIDAuNDE5MDQ0IDU1NC4wMjZMOC4yMDczNyA1MjcuNTQ2TDIwLjA0MiA1MjkuNzY1TDIwLjU1MDggNTU2LjczMkMyMC41NzkxIDU1OC4yMzIgMjAuMjc4OCA1NTkuNzE5IDE5LjY3MDkgNTYxLjA5MUMxOS4wNjMgNTYyLjQ2MiAxOC4xNjIzIDU2My42ODMgMTcuMDMyIDU2NC42NjlDMTUuOTAxNyA1NjUuNjU1IDE0LjU2OTMgNTY2LjM4MiAxMy4xMjgzIDU2Ni43OThDMTEuNjg3MyA1NjcuMjE0IDEwLjE3MjcgNTY3LjMxIDguNjkwNzQgNTY3LjA3OFY1NjcuMDc4WlwiXHJcbiAgICAgICAgICAgICAgICBmaWxsPVwiIzlGNjE2QVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgZD1cIk03Ni45OTYgNzM2LjEzMkw2Mi4yMDMgNzMzLjkxM0w2NS45MDEgNTg5LjY3OEw0NS4xOTEgNjUxLjgxTDM0LjA5NiA3MzkuMDkxTDIwLjA0MiA3MzUuMzkzTDE3LjA4MyA2NDQuNDE0TDMzLjM1NiA1MzcuMTYyTDExNC43MTkgNTU1LjY1NEw3Ni45OTYgNzM2LjEzMlpcIlxyXG4gICAgICAgICAgICAgICAgZmlsbD1cIiMwQTEyMzBcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIGQ9XCJNNzAuMjA0NiA3NzEuNjM2QzY3LjMyMDkgNzcxLjYzNiA2NC41NTUzIDc3MC40OTEgNjIuNTE2MyA3NjguNDUyQzYwLjQ3NzIgNzY2LjQxMyA1OS4zMzE3IDc2My42NDcgNTkuMzMxNyA3NjAuNzYzQzU5LjMzMTcgNzYwLjQwOCA1OS4zNDkxIDc2MC4wNTMgNTkuMzgzOSA3NTkuNjk5TDYxLjY4MTEgNzM2LjM0NUM2MS43MzY1IDczNS43ODcgNjEuOTI4MSA3MzUuMjUxIDYyLjIzOTEgNzM0Ljc4NEM2Mi41NTAxIDczNC4zMTcgNjIuOTcwOSA3MzMuOTMzIDYzLjQ2NDcgNzMzLjY2N0M2Ny44MjU0IDczMS4zMTUgNzIuMzA5NiA3MzEuODg1IDc2Ljg5OTQgNzM0Ljk1NUM3Ny4zMDY2IDczNS4yMjkgNzcuNjQ5NyA3MzUuNTg4IDc3LjkwNTIgNzM2LjAwN0M3OC4xNjA3IDczNi40MjcgNzguMzIyNiA3MzYuODk2IDc4LjM3OTkgNzM3LjM4NEw4MS4wMDE3IDc1OS40ODJDODEuMTgyNyA3NjEuMDA4IDgxLjAzODUgNzYyLjU1NCA4MC41Nzg1IDc2NC4wMkM4MC4xMTg1IDc2NS40ODUgNzkuMzUzMyA3NjYuODM2IDc4LjMzMzIgNzY3Ljk4NUM3Ny4zMTMxIDc2OS4xMzMgNzYuMDYxMyA3NzAuMDUyIDc0LjY2MDIgNzcwLjY4MkM3My4yNTkxIDc3MS4zMTEgNzEuNzQwNiA3NzEuNjM2IDcwLjIwNDYgNzcxLjYzNkg3MC4yMDQ2WlwiXHJcbiAgICAgICAgICAgICAgICBmaWxsPVwiIzBBMTIzMFwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgZD1cIk05LjgyMDg0IDc2OS44OThDOC40MjY3NSA3NjkuMzg3IDcuMTY3MTQgNzY4LjU2NSA2LjEzNzI2IDc2Ny40OTZDNS4xMDczOCA3NjYuNDI2IDQuMzM0MTkgNzY1LjEzNiAzLjg3NjE2IDc2My43MjRDMy40MTgxNCA3NjIuMzExIDMuMjg3MjcgNzYwLjgxMyAzLjQ5MzQ0IDc1OS4zNDNDMy42OTk2MiA3NTcuODcyIDQuMjM3NDUgNzU2LjQ2OCA1LjA2NjI2IDc1NS4yMzZMMjAuODQ2MyA3MzEuNzc5QzI2LjUzNDggNzI3LjY5NyAyOS45NjU3IDcyOS42ODUgMzEuMjk5NSA3MzcuMzEzTDM0LjQ4OTggNzI5LjMyTDM2Ljg5MzYgNzMxLjk0MkMzOC4xMTMzIDczMy4yNzMgMzguODIzIDczNC45OTIgMzguODk3MSA3MzYuNzk1QzM4Ljk3MTIgNzM4LjU5OSAzOC40MDQ5IDc0MC4zNyAzNy4yOTg0IDc0MS43OTZMMjAuOTMwNCA3NjYuNzA2QzE5LjY1NjcgNzY4LjM0OCAxNy44OTM4IDc2OS41NDIgMTUuODk2NyA3NzAuMTE2QzEzLjg5OTYgNzcwLjY4OSAxMS43NzE3IDc3MC42MTMgOS44MjA4NCA3NjkuODk4Vjc2OS44OThaXCJcclxuICAgICAgICAgICAgICAgIGZpbGw9XCIjMEExMjMwXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICBkPVwiTTEwOS41NDIgMzk4LjEwNUMxMjEuNzk3IDM5OC4xMDUgMTMxLjczMiAzODguMTcgMTMxLjczMiAzNzUuOTE1QzEzMS43MzIgMzYzLjY1OSAxMjEuNzk3IDM1My43MjUgMTA5LjU0MiAzNTMuNzI1Qzk3LjI4NjUgMzUzLjcyNSA4Ny4zNTE3IDM2My42NTkgODcuMzUxNyAzNzUuOTE1Qzg3LjM1MTcgMzg4LjE3IDk3LjI4NjUgMzk4LjEwNSAxMDkuNTQyIDM5OC4xMDVaXCJcclxuICAgICAgICAgICAgICAgIGZpbGw9XCIjOUY2MTZBXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICBkPVwiTTEyMy41OTUgNDE2LjU5Nkw4NS44NzIzIDQwOS4yQzkwLjczMTMgMzk4LjgzNiA5NC42MjI1IDM5NS4zMyA5MC4zMTAzIDM4NC4wNTFIMTIwLjYzN0MxMTcuOTYyIDM5NS43MzMgMTIwLjU0NyA0MDYuNjk4IDEyMy41OTUgNDE2LjU5NlpcIlxyXG4gICAgICAgICAgICAgICAgZmlsbD1cIiM5RjYxNkFcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIGQ9XCJNMTE5LjE1NyA1NjYuMDA5TDMwLjM5NzMgNTQwLjg2QzQ4LjE3NjEgNTAxLjczMSA1MS45IDQ1OC43NjkgNDYuNjI4NyA0MTMuMzU2QzQ2LjUwMzQgNDEyLjI4NSA0Ni41OTA0IDQxMS4xOTkgNDYuODg0NyA0MTAuMTZDNDcuMTc5MSA0MDkuMTIyIDQ3LjY3NTEgNDA4LjE1MiA0OC4zNDQzIDQwNy4zMDZDNDkuMDEzNSA0MDYuNDU5IDQ5Ljg0MyA0MDUuNzUzIDUwLjc4NTIgNDA1LjIyN0M1MS43Mjc1IDQwNC43MDEgNTIuNzY0MSA0MDQuMzY2IDUzLjgzNTkgNDA0LjI0QzUzLjkzNTcgNDA0LjIyOSA1NC4wMzU2IDQwNC4yMTkgNTQuMTM1OCA0MDQuMjExQzY1LjcxMzcgNDAzLjI1NyA3Ny43ODQ0IDQwMi4wMzMgOTAuMzEwNCA0MDAuMzI0TDEwNC4zNjQgNDA5LjkzOUwxMjAuNjM3IDQwNi4yNDFDMTI1Ljg1OCA0MDguNzcyIDEzMS4xMTggNDEwLjg3NyAxMzUuODY0IDQxMi45NzVDMTQwLjE5MSA0MTQuODkzIDE0My42NDkgNDE4LjM1NCAxNDUuNTYzIDQyMi42ODNDMTQ3LjQ3NiA0MjcuMDEyIDE0Ny43MDkgNDMxLjg5OCAxNDYuMjE1IDQzNi4zODlDMTMxLjc1MiA0ODAuMDY2IDEyMi4wNzEgNTIzLjMyOSAxMTkuMTU3IDU2Ni4wMDlaXCJcclxuICAgICAgICAgICAgICAgIGZpbGw9XCIjRTZFNkU2XCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICBkPVwiTTIyLjI2MSA1MzIuNzI0TDUuMjQ4NjYgNTMwLjUwNUw0NS41NTA4IDQxNC4zOEM0Ny42MDA4IDQwOC40NzMgNTIuNjg0OCA0MDUuMjc2IDU4Ljg3NDUgNDA0LjM5Mkw2NC43OTE4IDQwNS4xMzFMNjAuMzUzOCA0NzMuOTJMMjIuMjYxIDUzMi43MjRaXCJcclxuICAgICAgICAgICAgICAgIGZpbGw9XCIjRTZFNkU2XCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICBkPVwiTTE1NS41MjUgNTEwLjUyNEMxNTIuNjkyIDUxMC43NDIgMTQ5Ljg2MyA1MTAuMDYgMTQ3LjQ0MSA1MDguNTc0QzE0NS4wMTkgNTA3LjA4OSAxNDMuMTI4IDUwNC44NzcgMTQyLjAzOCA1MDIuMjUzTDEyNS44MTQgNDYzLjE5NUwxMzkuMTI4IDQxNS4xMTdMMTQyLjY0OCA0MTcuMzU3QzE0Mi45ODcgNDE3LjU3MiAxNDMuMzIyIDQxNy43OTQgMTQzLjY1MiA0MTguMDJDMTQ4LjU5MyA0MjEuNDgxIDE1Mi40NDIgNDI2LjI4MyAxNTQuNzQ2IDQzMS44NThDMTU3LjA0OSA0MzcuNDM0IDE1Ny43MTEgNDQzLjU1MiAxNTYuNjU0IDQ0OS40OTFMMTUzLjE4MiA0NjkuODUyTDE2Ny41MDUgNTAwLjYwNUMxNjYuNzc3IDUwMy4yOTQgMTY1LjIzNSA1MDUuNjkgMTYzLjA4OSA1MDcuNDY2QzE2MC45NDQgNTA5LjI0MyAxNTguMzAyIDUxMC4zMTEgMTU1LjUyNSA1MTAuNTI0VjUxMC41MjRaXCJcclxuICAgICAgICAgICAgICAgIGZpbGw9XCIjRTZFNkU2XCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICBkPVwiTTExMS4yNDggMzQzLjAyN0MxMTUuMDQgMzQzLjIwMSAxMTguNzMzIDM0NC4yODggMTIyLjAxNCAzNDYuMTk2QzEyMi43NjkgMzQ2LjYzNiAxMjIuNDIgMzQ4LjIxOSAxMjMuMTE3IDM0OC43MzZDMTIzLjk5NSAzNDkuMzg2IDEyNS45MDIgMzQ4Ljk5MSAxMjYuNjggMzQ5Ljc1M0MxMjkuMTkgMzUyLjIwMyAxMzEuMTIzIDM1NS4xODIgMTMyLjMzOCAzNTguNDc0QzEzMy41NTIgMzYxLjc2NSAxMzQuMDE4IDM2NS4yODUgMTMzLjcwMiAzNjguNzc5TDEzMi40NjQgMzgxLjA5TDEyOS41NDMgMzc3Ljg5NkMxMjQuMzA2IDM3Mi4wODkgMTE3LjAzNSAzNjguNTE5IDEwOS4yMzggMzY3LjkyN0MxMDguOTA2IDM2Ny45MDQgMTA4LjU3NCAzNjcuODg3IDEwOC4yNDIgMzY3Ljg3NEwxMTAuNDg5IDM2My45NDFMMTA2LjU4NCAzNjcuODQ3QzEwNC44MDIgMzY3Ljg2NiAxMDMuMDI0IDM2OC4wMTEgMTAxLjI2MyAzNjguMjhMMTA0LjI1MSAzNjMuMDVMOTguNTE3MSAzNjguNzg0TDk4LjUxNjYgMzY4Ljc4NUM5Ni4xNzE2IDM2OS4zIDkzLjk4MDUgMzcwLjM2IDkyLjExOTggMzcxLjg3N0M5MC4yNTkxIDM3My4zOTUgODguNzgwOCAzNzUuMzI4IDg3LjgwNDIgMzc3LjUyMkw4Ny4xNjc1IDM3OC45MzNMODYuNDU0MiAzNjcuMTg4Qzg2LjMxNzcgMzYwLjkxMSA4OC42ODA1IDM1NC44MzcgOTMuMDIyNiAzNTAuMzAyQzk3LjM2NDcgMzQ1Ljc2NyAxMDMuMzMxIDM0My4xNDIgMTA5LjYwOCAzNDMuMDA2QzExMC4xNTUgMzQyLjk5NCAxMTAuNzAyIDM0My4wMDEgMTExLjI0OCAzNDMuMDI3WlwiXHJcbiAgICAgICAgICAgICAgICBmaWxsPVwiIzJGMkU0MVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgZD1cIk0xMzEuODc3IDM4NC40MzhDMTMyLjg2MSAzODQuNDM4IDEzMy42NTkgMzgyLjU0MyAxMzMuNjU5IDM4MC4yMDVDMTMzLjY1OSAzNzcuODY3IDEzMi44NjEgMzc1Ljk3MiAxMzEuODc3IDM3NS45NzJDMTMwLjg5MiAzNzUuOTcyIDEzMC4wOTQgMzc3Ljg2NyAxMzAuMDk0IDM4MC4yMDVDMTMwLjA5NCAzODIuNTQzIDEzMC44OTIgMzg0LjQzOCAxMzEuODc3IDM4NC40MzhaXCJcclxuICAgICAgICAgICAgICAgIGZpbGw9XCIjOUY2MTZBXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICBkPVwiTTg3LjMxOTUgMzgzLjEwMUM4OC4zMDM4IDM4My4xMDEgODkuMTAxNyAzODEuMjA2IDg5LjEwMTcgMzc4Ljg2OEM4OS4xMDE3IDM3Ni41MyA4OC4zMDM4IDM3NC42MzUgODcuMzE5NSAzNzQuNjM1Qzg2LjMzNTEgMzc0LjYzNSA4NS41MzcyIDM3Ni41MyA4NS41MzcyIDM3OC44NjhDODUuNTM3MiAzODEuMjA2IDg2LjMzNTEgMzgzLjEwMSA4Ny4zMTk1IDM4My4xMDFaXCJcclxuICAgICAgICAgICAgICAgIGZpbGw9XCIjOUY2MTZBXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICBkPVwiTTE3NC4wMzQgNDM1LjQxOUMxNzUuNDU1IDQzNS43NjcgMTc2Ljc4NSA0MzYuNDE0IDE3Ny45MzYgNDM3LjMxN0MxNzkuMDg2IDQzOC4yMiAxODAuMDMxIDQzOS4zNTkgMTgwLjcwNiA0NDAuNjU2QzE4MS4zODIgNDQxLjk1NCAxODEuNzcyIDQ0My4zODEgMTgxLjg1MiA0NDQuODQxQzE4MS45MzEgNDQ2LjMwMiAxODEuNjk4IDQ0Ny43NjMgMTgxLjE2OCA0NDkuMTI2TDE3MS4xNiA0NzQuODVMMTU5LjU1NiA0NzEuNjM0TDE2MS4zMzggNDQ0LjcyMUMxNjEuNDM3IDQ0My4yMjUgMTYxLjg2MyA0NDEuNzY4IDE2Mi41ODUgNDQwLjQ1M0MxNjMuMzA3IDQzOS4xMzkgMTY0LjMwOCA0MzcuOTk4IDE2NS41MTggNDM3LjExMUMxNjYuNzI4IDQzNi4yMjUgMTY4LjExNyA0MzUuNjE0IDE2OS41ODggNDM1LjMyMkMxNzEuMDU5IDQzNS4wMjkgMTcyLjU3NyA0MzUuMDYzIDE3NC4wMzQgNDM1LjQxOUgxNzQuMDM0WlwiXHJcbiAgICAgICAgICAgICAgICBmaWxsPVwiIzlGNjE2QVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE2MC41NzkgNTA5LjA1NUwxNDIuMDg3IDQ5Ny4yMkwxNTcuNjIgNDY1LjQxNEwxNzYuODUxIDQ3Mi44MTFMMTY3LjIzNiA1MDAuOTE4TDE2MC41NzkgNTA5LjA1NVpcIiBmaWxsPVwiI0U2RTZFNlwiIC8+XHJcbiAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIGQ9XCJNMTczLjAwMSA0MDkuMTAxVjI4NEgxNzEuMDAxVjQwOS4xMDFDMTY5Ljc4NyA0MDkuMzQ5IDE2OC43MDkgNDEwLjAzOSAxNjcuOTc0IDQxMS4wMzdDMTY3LjI0IDQxMi4wMzUgMTY2LjkwMiA0MTMuMjcgMTY3LjAyNyA0MTQuNTAzQzE2Ny4xNTEgNDE1LjczNSAxNjcuNzI5IDQxNi44NzggMTY4LjY0OCA0MTcuNzA5QzE2OS41NjcgNDE4LjU0IDE3MC43NjIgNDE5IDE3Mi4wMDEgNDE5QzE3My4yNDEgNDE5IDE3NC40MzUgNDE4LjU0IDE3NS4zNTUgNDE3LjcwOUMxNzYuMjc0IDQxNi44NzggMTc2Ljg1MiA0MTUuNzM1IDE3Ni45NzYgNDE0LjUwM0MxNzcuMTAxIDQxMy4yNyAxNzYuNzYzIDQxMi4wMzUgMTc2LjAyOSA0MTEuMDM3QzE3NS4yOTQgNDEwLjAzOSAxNzQuMjE2IDQwOS4zNDkgMTczLjAwMSA0MDkuMTAxVjQwOS4xMDFaTTE3Mi4wMDEgNDE3QzE3MS40MDggNDE3IDE3MC44MjggNDE2LjgyNCAxNzAuMzM1IDQxNi40OTRDMTY5Ljg0MSA0MTYuMTY1IDE2OS40NTcgNDE1LjY5NiAxNjkuMjMgNDE1LjE0OEMxNjkuMDAzIDQxNC42IDE2OC45NDMgNDEzLjk5NyAxNjkuMDU5IDQxMy40MTVDMTY5LjE3NSA0MTIuODMzIDE2OS40NjEgNDEyLjI5OCAxNjkuODggNDExLjg3OUMxNzAuMyA0MTEuNDU5IDE3MC44MzQgNDExLjE3MyAxNzEuNDE2IDQxMS4wNThDMTcxLjk5OCA0MTAuOTQyIDE3Mi42MDEgNDExLjAwMSAxNzMuMTUgNDExLjIyOEMxNzMuNjk4IDQxMS40NTUgMTc0LjE2NiA0MTEuODQgMTc0LjQ5NiA0MTIuMzMzQzE3NC44MjYgNDEyLjgyNyAxNzUuMDAxIDQxMy40MDcgMTc1LjAwMSA0MTRDMTc1LjAwMSA0MTQuNzk1IDE3NC42ODQgNDE1LjU1OCAxNzQuMTIyIDQxNi4xMkMxNzMuNTU5IDQxNi42ODMgMTcyLjc5NyA0MTYuOTk5IDE3Mi4wMDEgNDE3VjQxN1pcIlxyXG4gICAgICAgICAgICAgICAgZmlsbD1cIiMwQTEyMzBcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIGQ9XCJNMTcwLjQzNSAxNjQuNTY5QzE2OS4yOSAxNjQuNTY5IDE2OC4xOTMgMTY0LjExNSAxNjcuMzg0IDE2My4zMDZDMTY2LjU3NSAxNjIuNDk3IDE2Ni4xMjEgMTYxLjM5OSAxNjYuMTIxIDE2MC4yNTVWMTQ3LjMxNEMxNjYuMTIyIDE0Ni4xNzEgMTY2LjU3OCAxNDUuMDc1IDE2Ny4zODcgMTQ0LjI2OEMxNjguMTk1IDE0My40NiAxNjkuMjkyIDE0My4wMDcgMTcwLjQzNSAxNDMuMDA3QzE3MS41NzggMTQzLjAwNyAxNzIuNjc0IDE0My40NiAxNzMuNDgzIDE0NC4yNjhDMTc0LjI5MSAxNDUuMDc1IDE3NC43NDcgMTQ2LjE3MSAxNzQuNzQ4IDE0Ny4zMTRWMTYwLjI1NUMxNzQuNzQ4IDE2MC44MjIgMTc0LjYzNyAxNjEuMzgzIDE3NC40MiAxNjEuOTA2QzE3NC4yMDMgMTYyLjQzIDE3My44ODUgMTYyLjkwNSAxNzMuNDg1IDE2My4zMDZDMTczLjA4NCAxNjMuNzA2IDE3Mi42MDkgMTY0LjAyNCAxNzIuMDg1IDE2NC4yNDFDMTcxLjU2MiAxNjQuNDU4IDE3MS4wMDEgMTY0LjU2OSAxNzAuNDM1IDE2NC41NjlWMTY0LjU2OVpcIlxyXG4gICAgICAgICAgICAgICAgZmlsbD1cIiM2QzYzRkZcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIGQ9XCJNMTcwLjQzNSAyNjMuNzg3QzE2OS44NjggMjYzLjc4NyAxNjkuMzA3IDI2My42NzYgMTY4Ljc4NCAyNjMuNDU5QzE2OC4yNiAyNjMuMjQyIDE2Ny43ODUgMjYyLjkyNSAxNjcuMzg0IDI2Mi41MjRDMTY2Ljk4NCAyNjIuMTIzIDE2Ni42NjYgMjYxLjY0OCAxNjYuNDQ5IDI2MS4xMjRDMTY2LjIzMiAyNjAuNjAxIDE2Ni4xMjEgMjYwLjA0IDE2Ni4xMjEgMjU5LjQ3NFYyNDYuNTMyQzE2Ni4xMiAyNDUuOTY1IDE2Ni4yMzEgMjQ1LjQwMyAxNjYuNDQ3IDI0NC44NzlDMTY2LjY2NCAyNDQuMzU1IDE2Ni45ODEgMjQzLjg3OSAxNjcuMzgyIDI0My40NzdDMTY3Ljc4MyAyNDMuMDc2IDE2OC4yNTggMjQyLjc1OCAxNjguNzgyIDI0Mi41NDFDMTY5LjMwNiAyNDIuMzIzIDE2OS44NjcgMjQyLjIxMiAxNzAuNDM1IDI0Mi4yMTJDMTcxLjAwMiAyNDIuMjEyIDE3MS41NjMgMjQyLjMyMyAxNzIuMDg3IDI0Mi41NDFDMTcyLjYxMSAyNDIuNzU4IDE3My4wODcgMjQzLjA3NiAxNzMuNDg3IDI0My40NzdDMTczLjg4OCAyNDMuODc5IDE3NC4yMDYgMjQ0LjM1NSAxNzQuNDIyIDI0NC44NzlDMTc0LjYzOCAyNDUuNDAzIDE3NC43NDkgMjQ1Ljk2NSAxNzQuNzQ4IDI0Ni41MzJWMjU5LjQ3NEMxNzQuNzQ4IDI2MC4wNCAxNzQuNjM3IDI2MC42MDEgMTc0LjQyIDI2MS4xMjRDMTc0LjIwMyAyNjEuNjQ4IDE3My44ODYgMjYyLjEyMyAxNzMuNDg1IDI2Mi41MjRDMTczLjA4NCAyNjIuOTI1IDE3Mi42MDkgMjYzLjI0MiAxNzIuMDg1IDI2My40NTlDMTcxLjU2MiAyNjMuNjc2IDE3MS4wMDEgMjYzLjc4NyAxNzAuNDM1IDI2My43ODdWMjYzLjc4N1pcIlxyXG4gICAgICAgICAgICAgICAgZmlsbD1cIiM2QzYzRkZcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIGQ9XCJNMjAwLjkzOSAxNzcuMjAzQzIwMC4wODUgMTc3LjIwMyAxOTkuMjUxIDE3Ni45NSAxOTguNTQyIDE3Ni40NzZDMTk3LjgzMyAxNzYuMDAyIDE5Ny4yOCAxNzUuMzI4IDE5Ni45NTMgMTc0LjU0QzE5Ni42MjcgMTczLjc1MiAxOTYuNTQxIDE3Mi44ODUgMTk2LjcwOCAxNzIuMDQ4QzE5Ni44NzQgMTcxLjIxMSAxOTcuMjg1IDE3MC40NDIgMTk3Ljg4OCAxNjkuODM5TDIwNy4wMzkgMTYwLjY4OEMyMDcuODQ4IDE1OS44OCAyMDguOTQ1IDE1OS40MjYgMjEwLjA4OSAxNTkuNDI3QzIxMS4yMzMgMTU5LjQyNyAyMTIuMzI5IDE1OS44ODIgMjEzLjEzOCAxNjAuNjlDMjEzLjk0NyAxNjEuNDk5IDIxNC40MDEgMTYyLjU5NiAyMTQuNDAyIDE2My43MzlDMjE0LjQwMiAxNjQuODgzIDIxMy45NDggMTY1Ljk4IDIxMy4xNCAxNjYuNzg5TDIwMy45ODkgMTc1Ljk0QzIwMy41ODkgMTc2LjM0MSAyMDMuMTEzIDE3Ni42NTkgMjAyLjU5IDE3Ni44NzZDMjAyLjA2NiAxNzcuMDkzIDIwMS41MDUgMTc3LjIwNCAyMDAuOTM5IDE3Ny4yMDNWMTc3LjIwM1pcIlxyXG4gICAgICAgICAgICAgICAgZmlsbD1cIiM2QzYzRkZcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIGQ9XCJNMTMwLjc4IDI0Ny4zNjJDMTI5LjkyNiAyNDcuMzYyIDEyOS4wOTIgMjQ3LjEwOSAxMjguMzgzIDI0Ni42MzVDMTI3LjY3NCAyNDYuMTYxIDEyNy4xMjEgMjQ1LjQ4OCAxMjYuNzk0IDI0NC42OTlDMTI2LjQ2OCAyNDMuOTExIDEyNi4zODIgMjQzLjA0NCAxMjYuNTQ5IDI0Mi4yMDdDMTI2LjcxNSAyNDEuMzcgMTI3LjEyNiAyNDAuNjAyIDEyNy43MjkgMjM5Ljk5OEwxMzYuODggMjMwLjg0OEMxMzcuNjg5IDIzMC4wMzkgMTM4Ljc4NiAyMjkuNTg0IDEzOS45MyAyMjkuNTg0QzE0MS4wNzQgMjI5LjU4NCAxNDIuMTcyIDIzMC4wMzggMTQyLjk4MSAyMzAuODQ3QzE0My43OSAyMzEuNjU2IDE0NC4yNDQgMjMyLjc1NCAxNDQuMjQ0IDIzMy44OThDMTQ0LjI0NCAyMzUuMDQyIDE0My43OSAyMzYuMTM5IDE0Mi45ODEgMjM2Ljk0OEwxMzMuODMgMjQ2LjA5OUMxMzMuNDMgMjQ2LjUgMTMyLjk1NCAyNDYuODE4IDEzMi40MzEgMjQ3LjAzNUMxMzEuOTA3IDI0Ny4yNTIgMTMxLjM0NiAyNDcuMzYzIDEzMC43OCAyNDcuMzYyVjI0Ny4zNjJaXCJcclxuICAgICAgICAgICAgICAgIGZpbGw9XCIjNkM2M0ZGXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICBkPVwiTTIyNi41MTQgMjA3LjcwOEgyMTMuNTczQzIxMi40MyAyMDcuNzA2IDIxMS4zMzQgMjA3LjI1MSAyMTAuNTI3IDIwNi40NDJDMjA5LjcxOSAyMDUuNjMzIDIwOS4yNjYgMjA0LjUzNyAyMDkuMjY2IDIwMy4zOTRDMjA5LjI2NiAyMDIuMjUxIDIwOS43MTkgMjAxLjE1NCAyMTAuNTI3IDIwMC4zNDZDMjExLjMzNCAxOTkuNTM3IDIxMi40MyAxOTkuMDgyIDIxMy41NzMgMTk5LjA4SDIyNi41MTRDMjI3LjA4MSAxOTkuMDc5IDIyNy42NDMgMTk5LjE5IDIyOC4xNjcgMTk5LjQwNkMyMjguNjkxIDE5OS42MjMgMjI5LjE2OCAxOTkuOTQgMjI5LjU2OSAyMDAuMzQxQzIyOS45NyAyMDAuNzQyIDIzMC4yODkgMjAxLjIxOCAyMzAuNTA2IDIwMS43NDFDMjMwLjcyMyAyMDIuMjY1IDIzMC44MzUgMjAyLjgyNyAyMzAuODM1IDIwMy4zOTRDMjMwLjgzNSAyMDMuOTYxIDIzMC43MjMgMjA0LjUyMiAyMzAuNTA2IDIwNS4wNDZDMjMwLjI4OSAyMDUuNTcgMjI5Ljk3IDIwNi4wNDYgMjI5LjU2OSAyMDYuNDQ2QzIyOS4xNjggMjA2Ljg0NyAyMjguNjkxIDIwNy4xNjUgMjI4LjE2NyAyMDcuMzgxQzIyNy42NDMgMjA3LjU5NyAyMjcuMDgxIDIwNy43MDggMjI2LjUxNCAyMDcuNzA4VjIwNy43MDhaXCJcclxuICAgICAgICAgICAgICAgIGZpbGw9XCIjNkM2M0ZGXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICBkPVwiTTEyNy4yOTYgMjA3LjcwOEgxMTQuMzU1QzExMy43ODggMjA3LjcwOCAxMTMuMjI2IDIwNy41OTcgMTEyLjcwMiAyMDcuMzgxQzExMi4xNzggMjA3LjE2NSAxMTEuNzAxIDIwNi44NDcgMTExLjMgMjA2LjQ0NkMxMTAuODk5IDIwNi4wNDYgMTEwLjU4MSAyMDUuNTcgMTEwLjM2MyAyMDUuMDQ2QzExMC4xNDYgMjA0LjUyMiAxMTAuMDM0IDIwMy45NjEgMTEwLjAzNCAyMDMuMzk0QzExMC4wMzQgMjAyLjgyNyAxMTAuMTQ2IDIwMi4yNjUgMTEwLjM2MyAyMDEuNzQxQzExMC41ODEgMjAxLjIxOCAxMTAuODk5IDIwMC43NDIgMTExLjMgMjAwLjM0MUMxMTEuNzAxIDE5OS45NCAxMTIuMTc4IDE5OS42MjMgMTEyLjcwMiAxOTkuNDA2QzExMy4yMjYgMTk5LjE5IDExMy43ODggMTk5LjA3OSAxMTQuMzU1IDE5OS4wOEgxMjcuMjk2QzEyOC40MzkgMTk5LjA4MiAxMjkuNTM1IDE5OS41MzcgMTMwLjM0MiAyMDAuMzQ2QzEzMS4xNSAyMDEuMTU0IDEzMS42MDQgMjAyLjI1MSAxMzEuNjA0IDIwMy4zOTRDMTMxLjYwNCAyMDQuNTM3IDEzMS4xNSAyMDUuNjMzIDEzMC4zNDIgMjA2LjQ0MkMxMjkuNTM1IDIwNy4yNTEgMTI4LjQzOSAyMDcuNzA2IDEyNy4yOTYgMjA3LjcwOEgxMjcuMjk2WlwiXHJcbiAgICAgICAgICAgICAgICBmaWxsPVwiIzZDNjNGRlwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgZD1cIk0yMTAuMDkgMjQ3LjM2MkMyMDkuNTIzIDI0Ny4zNjMgMjA4Ljk2MiAyNDcuMjUyIDIwOC40MzggMjQ3LjAzNUMyMDcuOTE1IDI0Ni44MTggMjA3LjQzOSAyNDYuNSAyMDcuMDM5IDI0Ni4wOTlMMTk3Ljg4OCAyMzYuOTQ4QzE5Ny40ODcgMjM2LjU0OCAxOTcuMTY5IDIzNi4wNzIgMTk2Ljk1MSAyMzUuNTQ5QzE5Ni43MzQgMjM1LjAyNSAxOTYuNjIyIDIzNC40NjQgMTk2LjYyMiAyMzMuODk3QzE5Ni42MjEgMjMzLjMzIDE5Ni43MzMgMjMyLjc2OSAxOTYuOTQ5IDIzMi4yNDVDMTk3LjE2NiAyMzEuNzIxIDE5Ny40ODQgMjMxLjI0NSAxOTcuODg1IDIzMC44NDRDMTk4LjI4NiAyMzAuNDQzIDE5OC43NjIgMjMwLjEyNSAxOTkuMjg2IDIyOS45MDlDMTk5LjgwOSAyMjkuNjkyIDIwMC4zNzEgMjI5LjU4IDIwMC45MzggMjI5LjU4MUMyMDEuNTA1IDIyOS41ODEgMjAyLjA2NiAyMjkuNjkzIDIwMi41ODkgMjI5LjkxQzIwMy4xMTMgMjMwLjEyOCAyMDMuNTg5IDIzMC40NDYgMjAzLjk4OSAyMzAuODQ4TDIxMy4xNCAyMzkuOTk4QzIxMy43NDMgMjQwLjYwMiAyMTQuMTU0IDI0MS4zNyAyMTQuMzIgMjQyLjIwN0MyMTQuNDg3IDI0My4wNDQgMjE0LjQwMSAyNDMuOTExIDIxNC4wNzUgMjQ0LjdDMjEzLjc0OCAyNDUuNDg4IDIxMy4xOTUgMjQ2LjE2MSAyMTIuNDg2IDI0Ni42MzVDMjExLjc3NyAyNDcuMTEgMjEwLjk0MyAyNDcuMzYzIDIxMC4wOSAyNDcuMzYzVjI0Ny4zNjJaXCJcclxuICAgICAgICAgICAgICAgIGZpbGw9XCIjNkM2M0ZGXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICBkPVwiTTEzOS45MyAxNzcuMjAzQzEzOS4zNjQgMTc3LjIwNCAxMzguODAzIDE3Ny4wOTMgMTM4LjI3OSAxNzYuODc2QzEzNy43NTYgMTc2LjY1OSAxMzcuMjggMTc2LjM0MSAxMzYuODggMTc1Ljk0TDEyNy43MjkgMTY2Ljc4OUMxMjcuMzI5IDE2Ni4zODkgMTI3LjAxMSAxNjUuOTEzIDEyNi43OTQgMTY1LjM5QzEyNi41NzcgMTY0Ljg2NiAxMjYuNDY2IDE2NC4zMDUgMTI2LjQ2NiAxNjMuNzM5QzEyNi40NjYgMTYzLjE3MiAxMjYuNTc3IDE2Mi42MTEgMTI2Ljc5NCAxNjIuMDg4QzEyNy4wMTEgMTYxLjU2NCAxMjcuMzI5IDE2MS4wODkgMTI3LjcyOSAxNjAuNjg4QzEyOC4xMyAxNjAuMjg4IDEyOC42MDUgMTU5Ljk3IDEyOS4xMjkgMTU5Ljc1M0MxMjkuNjUyIDE1OS41MzYgMTMwLjIxMyAxNTkuNDI1IDEzMC43OCAxNTkuNDI1QzEzMS4zNDYgMTU5LjQyNSAxMzEuOTA3IDE1OS41MzYgMTMyLjQzIDE1OS43NTNDMTMyLjk1NCAxNTkuOTcgMTMzLjQyOSAxNjAuMjg4IDEzMy44MyAxNjAuNjg4TDE0Mi45ODEgMTY5LjgzOUMxNDMuNTg0IDE3MC40NDIgMTQzLjk5NSAxNzEuMjExIDE0NC4xNjEgMTcyLjA0OEMxNDQuMzI4IDE3Mi44ODUgMTQ0LjI0MiAxNzMuNzUyIDE0My45MTYgMTc0LjU0QzE0My41ODkgMTc1LjMyOSAxNDMuMDM2IDE3Ni4wMDIgMTQyLjMyNyAxNzYuNDc2QzE0MS42MTcgMTc2Ljk1IDE0MC43ODMgMTc3LjIwMyAxMzkuOTMgMTc3LjIwM1YxNzcuMjAzWlwiXHJcbiAgICAgICAgICAgICAgICBmaWxsPVwiIzZDNjNGRlwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgZD1cIk0xNzAuNDM1IDIyOS4yNzdDMTY1LjMxNSAyMjkuMjc3IDE2MC4zMTEgMjI3Ljc1OSAxNTYuMDU1IDIyNC45MTVDMTUxLjc5OCAyMjIuMDcxIDE0OC40ODEgMjE4LjAyOCAxNDYuNTIyIDIxMy4yOTlDMTQ0LjU2MyAyMDguNTY5IDE0NC4wNSAyMDMuMzY1IDE0NS4wNDkgMTk4LjM0NEMxNDYuMDQ4IDE5My4zMjMgMTQ4LjUxMyAxODguNzExIDE1Mi4xMzMgMTg1LjA5MkMxNTUuNzUyIDE4MS40NzIgMTYwLjM2NCAxNzkuMDA3IDE2NS4zODUgMTc4LjAwOEMxNzAuNDA2IDE3Ny4wMDkgMTc1LjYxIDE3Ny41MjIgMTgwLjM0IDE3OS40ODFDMTg1LjA2OSAxODEuNDQgMTg5LjExMSAxODQuNzU3IDE5MS45NTUgMTg5LjAxNEMxOTQuOCAxOTMuMjcgMTk2LjMxOCAxOTguMjc1IDE5Ni4zMTggMjAzLjM5NEMxOTYuMzEgMjEwLjI1NiAxOTMuNTggMjE2LjgzNSAxODguNzI4IDIyMS42ODdDMTgzLjg3NiAyMjYuNTQgMTc3LjI5NyAyMjkuMjY5IDE3MC40MzUgMjI5LjI3N1YyMjkuMjc3Wk0xNzAuNDM1IDE4Ni4xMzhDMTY3LjAyMiAxODYuMTM4IDE2My42ODYgMTg3LjE1IDE2MC44NDggMTg5LjA0NkMxNTguMDEgMTkwLjk0MiAxNTUuNzk5IDE5My42MzcgMTU0LjQ5MyAxOTYuNzlDMTUzLjE4NyAxOTkuOTQzIDE1Mi44NDUgMjAzLjQxMyAxNTMuNTExIDIwNi43NkMxNTQuMTc3IDIxMC4xMDcgMTU1LjgyIDIxMy4xODIgMTU4LjIzMyAyMTUuNTk1QzE2MC42NDYgMjE4LjAwOCAxNjMuNzIxIDIxOS42NTIgMTY3LjA2OCAyMjAuMzE3QzE3MC40MTUgMjIwLjk4MyAxNzMuODg1IDIyMC42NDIgMTc3LjAzOCAyMTkuMzM2QzE4MC4xOTEgMjE4LjAzIDE4Mi44ODYgMjE1LjgxOCAxODQuNzgyIDIxMi45OEMxODYuNjc4IDIxMC4xNDMgMTg3LjY5IDIwNi44MDYgMTg3LjY5IDIwMy4zOTRDMTg3LjY4NSAxOTguODE5IDE4NS44NjUgMTk0LjQzMyAxODIuNjMgMTkxLjE5OEMxNzkuMzk1IDE4Ny45NjMgMTc1LjAwOSAxODYuMTQ0IDE3MC40MzUgMTg2LjEzOFYxODYuMTM4WlwiXHJcbiAgICAgICAgICAgICAgICBmaWxsPVwiIzZDNjNGRlwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgPC9nPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLWZ1bGwgdy1mdWxsIG92ZXJmbG93LWhpZGRlbiBiZy1iYWNrZ3JvdW5kIGRhcms6Ymctc2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgcmVmPXtuYXZSZWZ9XHJcbiAgICAgICAgICBvbk1vdXNlRW50ZXI9e21vdXNlRW50ZXJOYXZ9XHJcbiAgICAgICAgICBvbk1vdXNlTGVhdmU9e21vdXNlTGVhdmVOYXZ9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJoLXNjcmVlbiB3LTIwIGJnLWJhY2tncm91bmQgZGFyazpiZy1zZWNvbmRhcnkgZml4ZWQgei0wIG92ZXJmbG93LWhpZGRlblwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC02IHctNTIgZ3JpZCBncmlkLWNvbHMtODBweCBpdGVtcy1jZW50ZXIgaG92ZXI6b3BhY2l0eS0xMDBcIj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9kYXNoYm9hcmQvd2VsY29tZVwiPlxyXG4gICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2FjdGl2ZUNsYXNzRm4xfVxyXG4gICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRBY3RpdmVIb3ZlcjEodHJ1ZSl9XHJcbiAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldEFjdGl2ZUhvdmVyMShmYWxzZSl9XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCI0NVwiXHJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjQ1XCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZpbGwtY3VycmVudCB0ZXh0LXByaW1hcnlkYXJrIGRhcms6dGV4dC1iYWNrZ3JvdW5kIGJsb2NrIG0tYXV0byBvcGFjaXR5LTUwIGhvdmVyOm9wYWNpdHktMTAwIGN1cnNvci1wb2ludGVyICR7XHJcbiAgICAgICAgICAgICAgICAgIGFjdGl2ZUNsYXNzMSA/ICdvcGFjaXR5LTEwMCcgOiAnb3BhY2l0eS01MCdcclxuICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDEyOCAxMjhcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkZWZzPlxyXG4gICAgICAgICAgICAgICAgICA8c3R5bGU+PC9zdHlsZT5cclxuICAgICAgICAgICAgICAgIDwvZGVmcz5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5TZWUgWW91IFNvb248L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPGcgaWQ9XCJTZWVfWW91X1Nvb25cIiBkYXRhLW5hbWU9XCJTZWUgWW91IFNvb25cIj5cclxuICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbHMtMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZD1cIk04NC44Nyw3Ny4yN2wtNy00MS4xOGE2LjYsNi42LDAsMCwwLTEzLjEsMS41OGwxLjgzLDI0LjZMNTYuOTMsMzZhNi43Myw2LjczLDAsMCwwLTEyLjc4LDQuMTdMNTEuODIsNjcsNDAuNTcsNDhhNi40NSw2LjQ1LDAsMCwwLTExLjQxLDZsOC4zMywxOC4yNC00LjU3LTYuNDVhNi40OCw2LjQ4LDAsMCwwLTEwLjksN2wyMS4yNSwzNi43MWMuMzIuNTksOCwxNC41NCwyMy4xNCwxNC41NCwyMC4wNywwLDI5Ljc0LTE1LjE3LDMyLjExLTI5LjM2LDIuMjItMTMuMzQsNC41OS0yMiw3LjY4LTI4LjIyQzExMS43NCw1NS4zNiw5Ni4zNyw0NC42Nyw4NC44Nyw3Ny4yN1ptMTkuNS0xMS43NGMtMy4xOCw2LjM2LTUuNjEsMTUuMjQtNy44NywyOC43OUM5NC4yOCwxMDcuNjksODUuMiwxMjIsNjYuNDEsMTIyYy0xMy44NiwwLTIxLjI3LTEzLjM0LTIxLjM2LTEzLjVMMjMuNzksNzEuNzVBNC40NCw0LjQ0LDAsMCwxLDMxLjI2LDY3TDQyLjEsODIuMjdhMSwxLDAsMCwwLDEuNzYtMUwzMSw1My4xNGE0LjQxLDQuNDEsMCwwLDEsNy44LTQuMDhMNTQuMSw3NC44NEExLDEsMCwwLDAsNTYsNzRMNDYuMTIsMzkuNkE0LjY4LDQuNjgsMCwwLDEsNTUsMzYuNjlMNjcuMjIsNjkuNzhhMSwxLDAsMCwwLDItLjQzTDY2Ljg0LDM3LjUyYTQuNTYsNC41NiwwLDAsMSw5LTEuMDlMODMuNTUsODEuN2ExLDEsMCwwLDAsMiwuMTFjMC0uMTcsNS4xNy0xNy44NCwxMi41NC0yMi43NUMxMDQuOTMsNTQuNDksMTA2LjQ4LDYxLjMyLDEwNC4zNyw2NS41M1pcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8cGF0aCBjbGFzc05hbWU9XCJjbHMtMVwiIGQ9XCJNMTI3LDY3aC04YTEsMSwwLDAsMCwwLDJoOEExLDEsMCwwLDAsMTI3LDY3WlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzTmFtZT1cImNscy0xXCIgZD1cIk05LDY3SDFhMSwxLDAsMCwwLDAsMkg5QTEsMSwwLDAsMCw5LDY3WlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzTmFtZT1cImNscy0xXCIgZD1cIk02NSwxM1Y1YTEsMSwwLDAsMC0yLDB2OEExLDEsMCwwLDAsNjUsMTNaXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3NOYW1lPVwiY2xzLTFcIiBkPVwiTTExMS42Myw0MS41MmMuMzksMC0uMDkuMjEsNy40NC00LjE0YTEsMSwwLDAsMC0xLTEuNzZsLTYuOTMsNEExLDEsMCwwLDAsMTExLjYzLDQxLjUyWlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzTmFtZT1cImNscy0xXCIgZD1cIk0xNS44Niw5NC42MmwtNi45Myw0YTEsMSwwLDAsMCwxLDEuNzZsNi45My00QTEsMSwwLDAsMCwxNS44Niw5NC42MlpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8cGF0aCBjbGFzc05hbWU9XCJjbHMtMVwiIGQ9XCJNMTYuODgsMzkuNjJsLTYuOTMtNGExLDEsMCwwLDAtMSwxLjc2bDYuOTMsNEExLDEsMCwwLDAsMTYuODgsMzkuNjJaXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3NOYW1lPVwiY2xzLTFcIiBkPVwiTTExOS4wNyw5OC42MmwtNi45My00YTEsMSwwLDAsMC0xLDEuNzZsNi45Myw0QTEsMSwwLDAsMCwxMTkuMDcsOTguNjJaXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3NOYW1lPVwiY2xzLTFcIiBkPVwiTTM1LjYyLDIwLjg4YTEsMSwwLDAsMCwxLjc2LTFsLTQtNi45M2ExLDEsMCwwLDAtMS43NiwxWlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzTmFtZT1cImNscy0xXCIgZD1cIk05Mi4zOCwyMC44OGw0LTYuOTNhMSwxLDAsMCwwLTEuNzYtMWwtNCw2LjkzQTEsMSwwLDAsMCw5Mi4zOCwyMC44OFpcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZGFzaGJvYXJkL3dlbGNvbWVcIj5cclxuICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17YWN0aXZlQ2xhc3NGbjF9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B0ZXh0LXByaW1hcnlkYXJrIGRhcms6dGV4dC1iYWNrZ3JvdW5kIG1sLTEgY3Vyc29yLXBvaW50ZXIgb3BhY2l0eS01MCAke1xyXG4gICAgICAgICAgICAgICAgICBhY3RpdmVIb3ZlcjEgPyAnb3BhY2l0eS0xMDAnIDogJ29wYWNpdHktNTAnXHJcbiAgICAgICAgICAgICAgICB9ICR7YWN0aXZlQ2xhc3MxID8gJ29wYWNpdHktMTAwJyA6ICdvcGFjaXR5LTUwJ31gfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFdlbGNvbWVcclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC02IHctNTIgZ3JpZCBncmlkLWNvbHMtODBweCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9kYXNoYm9hcmQvc3RhcnR1cFwiPlxyXG4gICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2FjdGl2ZUNsYXNzRm4yfVxyXG4gICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRBY3RpdmVIb3ZlcjIodHJ1ZSl9XHJcbiAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldEFjdGl2ZUhvdmVyMihmYWxzZSl9XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCI0NVwiXHJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjQ1XCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZpbGwtY3VycmVudCB0ZXh0LXByaW1hcnlkYXJrIGRhcms6dGV4dC1iYWNrZ3JvdW5kIGJsb2NrIG0tYXV0byBvcGFjaXR5LTUwIGhvdmVyOm9wYWNpdHktMTAwIGN1cnNvci1wb2ludGVyICR7XHJcbiAgICAgICAgICAgICAgICAgIGFjdGl2ZUNsYXNzMiA/ICdvcGFjaXR5LTEwMCcgOiAnb3BhY2l0eS01MCdcclxuICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDEyOCAxMjhcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkZWZzPlxyXG4gICAgICAgICAgICAgICAgICA8c3R5bGU+PC9zdHlsZT5cclxuICAgICAgICAgICAgICAgIDwvZGVmcz5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5MYW5kaW5nIFN1Y2Nlc3M8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPGcgaWQ9XCJMYW5kaW5nX1N1Y2Nlc3NcIiBkYXRhLW5hbWU9XCJMYW5kaW5nIFN1Y2Nlc3NcIj5cclxuICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbHMtMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZD1cIk0xMDkuMyw5MC4xQTQ2LDQ2LDAsMCwwLDY1LDM2VjIwLjA4YzEuNzgtLjYyLDcuMjEtMi4xNCwxMi41Ny4yM2ExOS4zMywxOS4zMywwLDAsMCwxNC44MiwwYy44Ny0uMzguNjEuMzEuNjEtMTcuOTNhMSwxLDAsMCwwLTEuNDMtLjkzYy0uMDcsMC02LjY5LDIuODctMTMuMTgsMEExOS40MSwxOS40MSwwLDAsMCw2NSwuOTMsMSwxLDAsMCwwLDYzLDFWMzZhNDUuODYsNDUuODYsMCwwLDAtMjguNjYsMTAuOEMxNi4xOCw0MC40OCw0LDQwLC43OSw0NS41MS0yLjI5LDUwLjg2LDMuOTQsNTkuMywxMCw2NS42OEExMSwxMSwwLDAsMCwxOCw4M2MuODEsMzguNDEsNDYuMDgsNTkuMiw3NS42NiwzNC4yMSw4LjUzLDMsMjksOS4xNSwzMy41NSwxLjMxQzEzMC4zOSwxMTMsMTIzLjg2LDEwMi42NSwxMDkuMyw5MC4xWk03Ny41OSwzLjMxQTE5LjM5LDE5LjM5LDAsMCwwLDkxLDMuODNWMTguNjhjLTEuNzkuNjItNy4yMiwyLjEzLTEyLjU3LS4yM0ExOS4xOSwxOS4xOSwwLDAsMCw2NSwxNy45M1YzLjA4QzY2LjgxLDIuNDYsNzIuMjQsMSw3Ny41OSwzLjMxWk02NSw0NXYtN2MzOS42OS45MSw1OCw1MC4yNywyOC4yMSw3Ni44MUM3MS4zMiwxMDcsNDYsOTIuNjYsMjcuNzcsNzguNjRhMTEsMTEsMCwwLDAtMy4yLTE2LjEzQTQzLjg4LDQzLjg4LDAsMCwxLDYzLDM4LjA2VjQ1QTEsMSwwLDAsMCw2NSw0NVpNMzIuNTUsNDguMzZhNDYuMjEsNDYuMjEsMCwwLDAtOS44MywxMy4yOCwxMC45MywxMC45MywwLDAsMC0xMS40LDIuNDdDLTguMzksNDMuMjMsNS4yMywzOS4wOCwzMi41NSw0OC4zNlpNMTAsNzJhOSw5LDAsMSwxLDksOUE5LDksMCwwLDEsMTAsNzJabTEwLDExYTExLDExLDAsMCwwLDYuMzQtMi44MmMxOC40NSwxNC4yMSw0My40NSwyOC4zNSw2NS4wNSwzNi4yMkM2MywxMzkuMTYsMjAuODMsMTE5LjEsMjAuMDUsODNabTEwNS40LDM0LjVjLTIuNTEsNC4zNS0xNCwzLjYyLTMwLTEuODVhNDUuNjEsNDUuNjEsMCwwLDAsMTMuNDItMjMuMjFDMTIxLjU5LDEwMy41OCwxMjgsMTEzLjEyLDEyNS40NSwxMTcuNDdaXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2Rhc2hib2FyZC9zdGFydHVwXCI+XHJcbiAgICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2FjdGl2ZUNsYXNzRm4yfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdGV4dC1wcmltYXJ5ZGFyayBkYXJrOnRleHQtYmFja2dyb3VuZCBtbC0xIGN1cnNvci1wb2ludGVyIG9wYWNpdHktNTAgJHtcclxuICAgICAgICAgICAgICAgICAgYWN0aXZlSG92ZXIyID8gJ29wYWNpdHktMTAwJyA6ICdvcGFjaXR5LTUwJ1xyXG4gICAgICAgICAgICAgICAgfSAke2FjdGl2ZUNsYXNzMiA/ICdvcGFjaXR5LTEwMCcgOiAnb3BhY2l0eS01MCd9YH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBTdGFydHVwIGlkZWFcclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC02IHctNTIgZ3JpZCBncmlkLWNvbHMtODBweCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2FjdGl2ZUNsYXNzRm4zfVxyXG4gICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0QWN0aXZlSG92ZXIzKHRydWUpfVxyXG4gICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0QWN0aXZlSG92ZXIzKGZhbHNlKX1cclxuICAgICAgICAgICAgICBoZWlnaHQ9XCI0NVwiXHJcbiAgICAgICAgICAgICAgd2lkdGg9XCI0NVwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmlsbC1jdXJyZW50IHRleHQtcHJpbWFyeWRhcmsgZGFyazp0ZXh0LWJhY2tncm91bmQgYmxvY2sgbS1hdXRvIG9wYWNpdHktNTAgaG92ZXI6b3BhY2l0eS0xMDAgY3Vyc29yLXBvaW50ZXIgJHtcclxuICAgICAgICAgICAgICAgIGFjdGl2ZUNsYXNzMyA/ICdvcGFjaXR5LTEwMCcgOiAnb3BhY2l0eS01MCdcclxuICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDEyOCAxMjhcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRlZnM+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGU+PC9zdHlsZT5cclxuICAgICAgICAgICAgICA8L2RlZnM+XHJcbiAgICAgICAgICAgICAgPHRpdGxlPlNlYXJjaGluZzwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgPGcgaWQ9XCJTZWFyY2hpbmdcIj5cclxuICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNscy0xXCJcclxuICAgICAgICAgICAgICAgICAgZD1cIk03OS41NywzNi40M2EyMiwyMiwwLDEsMCwwLDMxLjE0QTIyLDIyLDAsMCwwLDc5LjU3LDM2LjQzWm0tMS40NCwyOS43YTIwLDIwLDAsMSwxLDAtMjguMjZBMjAsMjAsMCwwLDEsNzguMTMsNjYuMTNaXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbHMtMVwiXHJcbiAgICAgICAgICAgICAgICAgIGQ9XCJNMTE3LDBIMzFBMTEsMTEsMCwwLDAsMjAsMTF2OTdIMWExLDEsMCwwLDAtMSwxdjhhMTEsMTEsMCwwLDAsMTEsMTFIOTdhMTEsMTEsMCwwLDAsMTEtMTFWMTA0YTMuNDIsMy40MiwwLDAsMCwyLjQxLTFjNC43MS00LjcxLDUuNTktNS4xMyw1LjU5LTdzLS42Ni0yLjA4LTgtOS40MlYyMGgxOWExLDEsMCwwLDAsMS0xVjExQTExLDExLDAsMCwwLDExNywwWk05MC42MiwxMjZIMTFhOSw5LDAsMCwxLTktOXYtN0g4NkM4NiwxMTYuMjksODUsMTIyLDkwLjYyLDEyNlpNMTE0LDk2YzAsLjc5LDAsLjYxLTUsNS41N2ExLjQzLDEuNDMsMCwwLDEtMiwwTDg2LjQzLDgxYTEuMzgsMS4zOCwwLDAsMSwwLTJjNS4wNy01LjA3LDQuOC01LDUuNTctNXMtLjE3LS43NSwxNC4yOCwxMy43QzExMy44Nyw5NS4zMSwxMTQsOTUuMTEsMTE0LDk2Wk04Mi4zNyw3MC4zN2EyNiwyNiwwLDEsMSwwLTM2Ljc0QTI2LDI2LDAsMCwxLDgyLjM3LDcwLjM3Wm0yLjc5LDAsMy41MiwzLjUyLTIuOCwyLjgtMy41Mi0zLjUyQTI2LjQ0LDI2LjQ0LDAsMCwwLDg1LjE2LDcwLjM2Wk05NC40Myw3M2EzLjUzLDMuNTMsMCwwLDAtNC4yMy0uNDdsLTMuNzUtMy43NUMxMDAuMjcsNTAuMjgsODcsMjQsNjQsMjRBMjgsMjgsMCwwLDAsMzYsNTJjMCwyMy4zNywyNi43MSwzNiw0NC43OSwyMi40NWwzLjczLDMuNzRBMy40MSwzLjQxLDAsMCwwLDg1LDgyLjQzYzIyLjIyLDIyLjIzLDIwLjU3LDIwLjYxLDIxLDIwLjkyVjExN2E5LDksMCwwLDEtMTgsMHYtOGExLDEsMCwwLDAtMS0xSDIyVjExYTksOSwwLDAsMSw5LTljODUuNiwwLDc5Ljc0LS4wOCw3OS40MS4xN2ExMSwxMSwwLDAsMC00LjE0LDYuMzJjLS40MSwxLjc3LS4yOS00LjE5LS4yOSw3NlpNMTI2LDE4SDEwOFYxMWE5LDksMCwwLDEsMTgsMFpcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2FjdGl2ZUNsYXNzRm4zfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YHRleHQtcHJpbWFyeWRhcmsgZGFyazp0ZXh0LWJhY2tncm91bmQgbWwtMSBjdXJzb3ItcG9pbnRlciBvcGFjaXR5LTUwICR7XHJcbiAgICAgICAgICAgICAgICBhY3RpdmVIb3ZlcjMgPyAnb3BhY2l0eS0xMDAnIDogJ29wYWNpdHktNTAnXHJcbiAgICAgICAgICAgICAgfSAke2FjdGl2ZUNsYXNzMyA/ICdvcGFjaXR5LTEwMCcgOiAnb3BhY2l0eS01MCd9YH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEJ1c2luZXNzIHBsYW5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTYgdy01MiBncmlkIGdyaWQtY29scy04MHB4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICB7LyogPExpbmsgaHJlZj0nL2Rhc2hib2FyZC9hY2NvdW50Jz4gKi99XHJcbiAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICBvbkNsaWNrPXthY3RpdmVDbGFzc0ZuNH1cclxuICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHNldEFjdGl2ZUhvdmVyNCh0cnVlKX1cclxuICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldEFjdGl2ZUhvdmVyNChmYWxzZSl9XHJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiNDVcIlxyXG4gICAgICAgICAgICAgIHdpZHRoPVwiNDVcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZpbGwtY3VycmVudCB0ZXh0LXByaW1hcnlkYXJrIGRhcms6dGV4dC1iYWNrZ3JvdW5kIGJsb2NrIG0tYXV0byBvcGFjaXR5LTUwIGhvdmVyOm9wYWNpdHktMTAwIGN1cnNvci1wb2ludGVyICR7XHJcbiAgICAgICAgICAgICAgICBhY3RpdmVDbGFzczQgPyAnb3BhY2l0eS0xMDAnIDogJ29wYWNpdHktNTAnXHJcbiAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgaWQ9XCJEYXRhX1VzZXJcIlxyXG4gICAgICAgICAgICAgIGRhdGEtbmFtZT1cIkRhdGEgVXNlclwiXHJcbiAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxMjggMTI4XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkZWZzPlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlPjwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgPC9kZWZzPlxyXG4gICAgICAgICAgICAgIDx0aXRsZT5EYXRhIFVzZXI8L3RpdGxlPlxyXG4gICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbHMtMVwiXHJcbiAgICAgICAgICAgICAgICBkPVwiTTEwOSwwSDIzYTksOSwwLDAsMC05LDljMCwxMTgsMCwxMTAsMCwxMTAuNjRBOS4yMiw5LjIyLDAsMCwwLDIzLjMxLDEyOEgxMDlhNSw1LDAsMCwwLDUtNVY1QTUsNSwwLDAsMCwxMDksMFptMyw1VjEwN2EzLDMsMCwwLDEtMywzSDI2VjJoODNBMywzLDAsMCwxLDExMiw1Wk0xNiw5YTcsNywwLDAsMSw3LTdoMVYxMTBIMjNhOSw5LDAsMCwwLTYuOTQsMy4yNkMxNiwxMTMuMzQsMTYsMTE4LjI4LDE2LDlabTk2LDExNGEzLDMsMCwwLDEtMywzSDIzLjMxYy02LjEzLDAtOS41Ni02Ljk0LTUuNjgtMTEuNDNBNi45MSw2LjkxLDAsMCwxLDIzLDExMmM5MC45MSwwLDg3LjA2LjQ0LDg5LTFaXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbHMtMVwiXHJcbiAgICAgICAgICAgICAgICBkPVwiTTU2LjE1LDc1LjgxQTMzLDMzLDAsMSwwLDM1LDQ1LDMzLjA1LDMzLjA1LDAsMCwwLDU2LjE1LDc1LjgxWm0tNy41My02LjY4YzUuODktMjIuODIsMzIuODYtMjIuODMsMzguNzYsMEEzMC44OCwzMC44OCwwLDAsMSw0OC42Miw2OS4xM1pNNjgsMTRjMjguMDcsMCw0MS42MSwzNC41MSwyMS4wOSw1My42NUM4Ni41Niw1OSw4MC44Miw1Mi44Myw3My41Nyw1MC43NWExMywxMywwLDEsMC0xMS4xNCwwYy03LjI1LDIuMDgtMTMsOC4yNC0xNS41MiwxNi45MkMyNi40NSw0OC42OSwzOS44LDE0LDY4LDE0Wm0wLDM2QTExLDExLDAsMSwxLDc5LDM5LDExLDExLDAsMCwxLDY4LDUwWlwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8cGF0aCBjbGFzc05hbWU9XCJjbHMtMVwiIGQ9XCJNOTYuNSw4N2gtNTZhMSwxLDAsMCwwLDAsMmg1NkExLDEsMCwwLDAsOTYuNSw4N1pcIiAvPlxyXG4gICAgICAgICAgICAgIDxwYXRoIGNsYXNzTmFtZT1cImNscy0xXCIgZD1cIk05Ni41LDk5aC01NmExLDEsMCwwLDAsMCwyaDU2QTEsMSwwLDAsMCw5Ni41LDk5WlwiIC8+XHJcbiAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICB7LyogPC9MaW5rPiAqL31cclxuICAgICAgICAgICAgey8qIDxMaW5rIGhyZWY9Jy9kYXNoYm9hcmQvYWNjb3VudCc+ICovfVxyXG4gICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2FjdGl2ZUNsYXNzRm40fVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YHRleHQtcHJpbWFyeWRhcmsgZGFyazp0ZXh0LWJhY2tncm91bmQgbWwtMSBjdXJzb3ItcG9pbnRlciBvcGFjaXR5LTUwICR7XHJcbiAgICAgICAgICAgICAgICBhY3RpdmVIb3ZlcjQgPyAnb3BhY2l0eS0xMDAnIDogJ29wYWNpdHktNTAnXHJcbiAgICAgICAgICAgICAgfSAke2FjdGl2ZUNsYXNzNCA/ICdvcGFjaXR5LTEwMCcgOiAnb3BhY2l0eS01MCd9YH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEFjY291bnRcclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICB7LyogPC9MaW5rPiAqL31cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC02IHctNTIgZ3JpZCBncmlkLWNvbHMtODBweCBpdGVtcy1jZW50ZXIgYWJzb2x1dGUgYm90dG9tLTRcIj5cclxuICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2FjdGl2ZUNsYXNzRm41fVxyXG4gICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0QWN0aXZlSG92ZXI1KHRydWUpfVxyXG4gICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0QWN0aXZlSG92ZXI1KGZhbHNlKX1cclxuICAgICAgICAgICAgICBoZWlnaHQ9XCI0NVwiXHJcbiAgICAgICAgICAgICAgd2lkdGg9XCI0NVwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmlsbC1jdXJyZW50IHRleHQtcHJpbWFyeWRhcmsgZGFyazp0ZXh0LWJhY2tncm91bmQgYmxvY2sgbS1hdXRvIG9wYWNpdHktNTAgaG92ZXI6b3BhY2l0eS0xMDAgY3Vyc29yLXBvaW50ZXIgJHtcclxuICAgICAgICAgICAgICAgIGFjdGl2ZUNsYXNzNSA/ICdvcGFjaXR5LTEwMCcgOiAnb3BhY2l0eS01MCdcclxuICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDEyOCAxMjhcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRlZnM+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGU+PC9zdHlsZT5cclxuICAgICAgICAgICAgICA8L2RlZnM+XHJcbiAgICAgICAgICAgICAgPHRpdGxlPkxvZyBPdXQ8L3RpdGxlPlxyXG4gICAgICAgICAgICAgIDxnIGlkPVwiTG9nX091dFwiIGRhdGEtbmFtZT1cIkxvZyBPdXRcIj5cclxuICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzTmFtZT1cImNscy0xXCIgZD1cIk00NCw2MXY2YTEsMSwwLDAsMCwyLDBWNjFBMSwxLDAsMCwwLDQ0LDYxWlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbHMtMVwiXHJcbiAgICAgICAgICAgICAgICAgIGQ9XCJNMTEzLDExM0g4NlY3NWg2djlhMSwxLDAsMCwwLDEsMWMuNjQsMC0uODMsMS4yNiwyMC43Mi0yMC4zYTEsMSwwLDAsMCwwLTEuNDRsLTIwLTIwQTEsMSwwLDAsMCw5Miw0NHY5SDg2VjE0YTEsMSwwLDAsMC0xLTFINTRWMWExLDEsMCwwLDAtMS4zNS0xbC0zOCwxM0ExLDEsMCwwLDAsMTQsMTRjMCwxMDYuNTgtLjM4LDEwMC42LjY5LDEwMUM1NS4zNCwxMjguODgsNTIuNzQsMTI4LDUzLDEyOGExLDEsMCwwLDAsMS0xVjExNWg1OUExLDEsMCwwLDAsMTEzLDExM1pNOTMsNTVhMSwxLDAsMCwwLDEtMVY0Ni40NkwxMTEuNTYsNjQsOTQsODEuNTRWNzRhMSwxLDAsMCwwLTEtMUg1NFY1NVpNNTQsMjFINzdWNTNINTRabTMwLTZWNTNINzlWMjBhMSwxLDAsMCwwLTEtMUg1NFYxNVpNNTIsMTI1LjU3bC0zNi0xMi4zVjE0LjczTDUyLDIuNDNaTTU0LDc1SDc3djM4SDU0Wm0yNSwzOFY3NWg1djM4WlwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgb25DbGljaz17YWN0aXZlQ2xhc3NGbjV9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdGV4dC1wcmltYXJ5ZGFyayBkYXJrOnRleHQtYmFja2dyb3VuZCBtbC0xIGN1cnNvci1wb2ludGVyIG9wYWNpdHktNTAgJHtcclxuICAgICAgICAgICAgICAgIGFjdGl2ZUhvdmVyNSA/ICdvcGFjaXR5LTEwMCcgOiAnb3BhY2l0eS01MCdcclxuICAgICAgICAgICAgICB9ICR7YWN0aXZlQ2xhc3M1ID8gJ29wYWNpdHktMTAwJyA6ICdvcGFjaXR5LTUwJ31gfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgTG9nIG91dFxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvSXNBY3RpdmVDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEZXNrdG9wTmF2YmFyO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tICcuLi8uLi9saWIvbmV3QXV0aCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgSXNBY3RpdmVDb250ZXh0IH0gZnJvbSAnLi9EZXNrdG9wTmF2YmFyJztcclxuaW1wb3J0IGdzYXAsIHsgUG93ZXI0IH0gZnJvbSAnZ3NhcCc7XHJcbmltcG9ydCB7IHVzZVdpbmRvd1NpemUgfSBmcm9tICcuLi8uLi91dGlscy91c2VXaW5kb3dTaXplJztcclxuXHJcbmNvbnN0IFJlZGlyZWN0ID0gKHsgdG8gfSkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgcm91dGVyLnB1c2godG8pO1xyXG4gIH0sIFt0b10pO1xyXG5cclxuICByZXR1cm4gbnVsbDtcclxufTtcclxuXHJcbmNvbnN0IE5hdmJhclRlbXBsYXRlID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIC8vIE1vYmlsZSBmcmllbmRseVxyXG4gIGNvbnN0IHNpemUgPSB1c2VXaW5kb3dTaXplKCk7XHJcblxyXG4gIGNvbnN0IGFjdGl2ZUhvdmVyID0gdXNlQ29udGV4dChJc0FjdGl2ZUNvbnRleHQpO1xyXG4gIGNvbnN0IHsgY3VycmVudFVzZXIgfSA9IHVzZUF1dGgoKTtcclxuICBjb25zdCBjb250ZW50UmVmID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICBjb25zdCBhY3RpdmVDbGFzcyA9IGFjdGl2ZUhvdmVyID8gJ21sLTUyJyA6ICdtbC0yMCc7XHJcblxyXG4gIGlmIChhY3RpdmVIb3Zlcikge1xyXG4gICAgZ3NhcC50byhjb250ZW50UmVmLmN1cnJlbnQsIHtcclxuICAgICAgbWFyZ2luTGVmdDogJzIwOHB4JyxcclxuICAgICAgZWFzZTogUG93ZXI0LmVhc2VPdXQsXHJcbiAgICAgIC8vIGR1cmF0aW9uOiAxXHJcbiAgICB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgZ3NhcC50byhjb250ZW50UmVmLmN1cnJlbnQsIHsgbWFyZ2luTGVmdDogJzgwcHgnLCBlYXNlOiBQb3dlcjQuZWFzZU91dCB9KTtcclxuICB9XHJcblxyXG4gIGlmICghY3VycmVudFVzZXIpIHtcclxuICAgIHJldHVybiA8UmVkaXJlY3QgdG89XCIvXCIgLz47XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge3NpemUud2lkdGggPCA4NjAgPyAoXHJcbiAgICAgICAgPD57Y2hpbGRyZW59PC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgcmVmPXtjb250ZW50UmVmfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgcmVsYXRpdmUgaC1mdWxsICR7YWN0aXZlQ2xhc3N9IGJnLWJhY2tncm91bmQgZGFyazpiZy1zZWNvbmRhcnlgfVxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgdHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uOiAnbGluZWFyJyxcclxuICAgICAgICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uOiAnMjAwbXMnLFxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uUHJvcGVydHk6ICd3aWR0aCwgbWFyZ2luLWxlZnQnLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyVGVtcGxhdGU7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBnc2FwLCB7IFBvd2VyNCB9IGZyb20gJ2dzYXAnO1xyXG5pbXBvcnQgVGlwcHkgZnJvbSAnQHRpcHB5anMvcmVhY3QnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcblxyXG5jb25zdCBUaXBweU1vbnN0ZXIgPSAoe1xyXG4gIGNvbnRlbnRDbGFzcyxcclxuICBjb250ZW50VGV4dCxcclxuICBjb250ZW50VGV4dDEsXHJcbiAgc3RhcnR1cHMsXHJcbiAgbWFya2V0LFxyXG4gIG1vZGVsLFxyXG4gIHN1Y2Nlc3MsXHJcbiAgdGlwcHlNb25zdGVyLFxyXG4gIHNldFRpcHB5TW9uc3RlcixcclxuICBzZXRDdXJyZW50VGlwcHksXHJcbiAgZW1wdHlJbnB1dCxcclxuICBpbml0aWFsTW9kYWwsXHJcbiAgdmlzaW9uLFxyXG4gIHByb2R1Y3QsXHJcbiAgZmluYW5jZXMsXHJcbiAgd2VsY29tZVxyXG59KSA9PiB7XHJcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGNvbnRlbnRSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgdGlwcHlSZWYgPSB1c2VSZWYoKTtcclxuXHJcbiAgLy8gY29uc3QgW2VtcHR5SW5wdXQsIHNldEVtcHR5SW5wdXRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBzaG93ID0gKCkgPT4ge1xyXG4gICAgZ3NhcC5mcm9tVG8oXHJcbiAgICAgIHRpcHB5UmVmLmN1cnJlbnQsXHJcbiAgICAgIHsgYXV0b0FscGhhOiAwLCBzY2FsZTogMCB9LFxyXG4gICAgICB7IGF1dG9BbHBoYTogMSwgc2NhbGU6IDEsIGR1cmF0aW9uOiAxLCB0cmFuc2Zvcm1PcmlnaW46ICdib3R0b20gcmlnaHQnLCBlYXNlOiBQb3dlcjQuZWFzZU91dCB9XHJcbiAgICApO1xyXG4gICAgc2V0VmlzaWJsZSh0cnVlKTtcclxuICAgIGVtcHR5SW5wdXQgJiYgc2V0Q3VycmVudFRpcHB5KHRydWUpOyAvLyBjdXJyZW50IHRpcHB5IGplc3QgY3rEmcWbY2nEhSBvYnPFgnVnaSBwcm9ibGVtdSwga2llZHkgbWFteSBvdHdhcnRlZ28gdG9vbHRpcGEgbm9ybWFsbmVnbyBpIHdjaXNrYW15LCDFvGVieSB3ecWbd2lldGxpxIcgY3plcndvbmVnb1xyXG4gIH07XHJcbiAgY29uc3QgaGlkZSA9IGFzeW5jICgpID0+IHtcclxuICAgIGF3YWl0IGdzYXAudG8odGlwcHlSZWYuY3VycmVudCwge1xyXG4gICAgICBhdXRvQWxwaGE6IDAsXHJcbiAgICAgIHNjYWxlOiAwLFxyXG4gICAgICBkdXJhdGlvbjogMSxcclxuICAgICAgdHJhbnNmb3JtT3JpZ2luOiAnYm90dG9tIHJpZ2h0JyxcclxuICAgICAgZWFzZTogUG93ZXI0LmVhc2VJbixcclxuICAgIH0pO1xyXG4gICAgZW1wdHlJbnB1dCAmJiBzZXRUaXBweU1vbnN0ZXIoZmFsc2UpO1xyXG4gICAgc2V0VmlzaWJsZShmYWxzZSk7XHJcbiAgICBlbXB0eUlucHV0ICYmIHNldEN1cnJlbnRUaXBweShmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25JbWFnZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgaWYgKCF0aXBweU1vbnN0ZXIpIHtcclxuICAgICAgdmlzaWJsZSA/IGhpZGUoKSA6IHNob3coKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gR1NBUFxyXG4gICAgZ3NhcC5mcm9tVG8oXHJcbiAgICAgIGNvbnRlbnRSZWYuY3VycmVudCxcclxuICAgICAgeyBhdXRvQWxwaGE6IDAgfSxcclxuICAgICAgeyBhdXRvQWxwaGE6IDEsIGR1cmF0aW9uOiAyLCB0cmFuc2Zvcm1PcmlnaW46ICdib3R0b20gcmlnaHQnLCBlYXNlOiBQb3dlcjQuZWFzZU91dCB9XHJcbiAgICApO1xyXG4gICAgLy8gVElQUFlcclxuICAgIHNldFZpc2libGUodHJ1ZSk7XHJcbiAgICBlbXB0eUlucHV0ICYmIHNldEN1cnJlbnRUaXBweSh0cnVlKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnNvbGUubG9nKCd0bSAtICcsIHRpcHB5TW9uc3Rlcik7XHJcbiAgY29uc29sZS5sb2coJ3Zpc2libGUgLSAnLCB2aXNpYmxlKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxUaXBweVxyXG4gICAgICAvLyB0cmlnZ2VyPXt0aXBweU1vbnN0ZXJ9XHJcbiAgICAgIHpJbmRleD17dmlzaWJsZSB8fCB0aXBweU1vbnN0ZXIgPyAyMiA6IDB9XHJcbiAgICAgIG9uU2hvdz17c2hvd31cclxuICAgICAgYW5pbWF0aW9uPSdmYWRlJ1xyXG4gICAgICBkdXJhdGlvbj17NTAwfVxyXG4gICAgICB0b3VjaD17dHJ1ZX1cclxuICAgICAgdmlzaWJsZT17dmlzaWJsZSB8fCB0aXBweU1vbnN0ZXJ9XHJcbiAgICAgIG9uQ2xpY2tPdXRzaWRlPXtoaWRlfVxyXG4gICAgICBvZmZzZXQ9e21hcmtldCB8fCBtb2RlbCB8fCBzdWNjZXNzIHx8IHRpcHB5TW9uc3RlciA/IFstMjY1LCAtNjVdIDogWy0yMjAsIC02NV19XHJcbiAgICAgIC8vIHBsYWNlbWVudD0nbGVmdC1lbmQnXHJcbiAgICAgIGludGVyYWN0aXZlPXt0cnVlfVxyXG4gICAgICBjb250ZW50PXtcclxuICAgICAgICB0aXBweU1vbnN0ZXIgPyAoXHJcbiAgICAgICAgICA8ZGl2IHJlZj17dGlwcHlSZWZ9IGNsYXNzTmFtZT0naC0xMiB3LTk2IHNoYWRvdy1sZyByb3VuZGVkLTJ4bCBiZy1yZWQgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgZm9jdXM6b3V0bGluZS1ub25lJz5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LXByaW1hcnlkYXJrIHB5LTQgcHgtMiB0ZXh0LXNtIHRleHQtY2VudGVyIHRleHQtd2hpdGUgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXInPlxyXG4gICAgICAgICAgICBPb3BzLCB5b3UgaGF2ZSB0byBwcm92aWRlIGFsbCB0aGUgaW5mb3JtYXRpb25cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIHNyYz0nL2Vtb2ppcy9jcnlpbmcuc3ZnJ1xyXG4gICAgICAgICAgICAgIGhlaWdodD17MjV9XHJcbiAgICAgICAgICAgICAgd2lkdGg9ezI1fVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0naW5saW5lLWJsb2NrIHJlbGF0aXZlJ1xyXG4gICAgICAgICAgLz4uXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGZsZXgtd3JhcCBnYXAtMiBtdC0yJz48L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8ZGl2IHJlZj17dGlwcHlSZWZ9IGNsYXNzTmFtZT17YGZvY3VzOm91dGxpbmUtbm9uZSAke2NvbnRlbnRDbGFzc31gfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RleHQtcHJpbWFyeWRhcmsgcC00IHRleHQtc20gdGV4dC1jZW50ZXIgdGV4dC13aGl0ZSc+XHJcbiAgICAgICAgICAgIHtjb250ZW50VGV4dH1cclxuICAgICAgICAgICAge3N0YXJ0dXBzICYmICggPD48aW1nIHNyYz0nL2Vtb2ppcy9jb2NvdW50LnN2ZycgaGVpZ2h0PXsyMn0gd2lkdGg9ezIyfSBjbGFzc05hbWU9J2lubGluZS1ibG9jaycgLz48cCBjbGFzc05hbWU9J2lubGluZS1ibG9jayc+LjwvcD48Lz4gKX1cclxuICAgICAgICAgICAge2luaXRpYWxNb2RhbCAmJiAoIDw+PGltZyBzcmM9Jy9lbW9qaXMvaGFtbWVyLnN2ZycgaGVpZ2h0PXsyMn0gd2lkdGg9ezIyfSBjbGFzc05hbWU9J2lubGluZS1ibG9jaycgLz48cCBjbGFzc05hbWU9J2lubGluZS1ibG9jayc+LjwvcD48Lz4gKX1cclxuICAgICAgICAgICAge3Zpc2lvbiAmJiAoIDw+PGltZyBzcmM9Jy9lbW9qaXMvZGVzZXJ0LnN2ZycgaGVpZ2h0PXsyMn0gd2lkdGg9ezIyfSBjbGFzc05hbWU9J2lubGluZS1ibG9jayByZWxhdGl2ZSBib3R0b20tMC41JyAvPjxwIGNsYXNzTmFtZT0naW5saW5lLWJsb2NrJz4uPC9wPjwvPiApfVxyXG4gICAgICAgICAgICB7cHJvZHVjdCAmJiAoIDw+PGltZyBzcmM9Jy9lbW9qaXMvb3guc3ZnJyBoZWlnaHQ9ezIyfSB3aWR0aD17MjJ9IGNsYXNzTmFtZT0naW5saW5lLWJsb2NrIHJlbGF0aXZlIGJvdHRvbS0wLjUnIC8+PHAgY2xhc3NOYW1lPSdpbmxpbmUtYmxvY2snPi48L3A+PC8+ICl9XHJcbiAgICAgICAgICAgIHttYXJrZXQgJiYgKCA8PjxpbWcgc3JjPScvZW1vamlzL3doYWxlLnN2ZycgaGVpZ2h0PXsyMn0gd2lkdGg9ezIyfSBjbGFzc05hbWU9J2lubGluZS1ibG9jaycgLz48cCBjbGFzc05hbWU9J2lubGluZS1ibG9jayc+LjwvcD48Lz4gKX1cclxuICAgICAgICAgICAge2ZpbmFuY2VzICYmICggPD48aW1nIHNyYz0nL2Vtb2ppcy91bmljb3JuLnN2ZycgaGVpZ2h0PXsyMn0gd2lkdGg9ezIyfSBjbGFzc05hbWU9J2lubGluZS1ibG9jayByZWxhdGl2ZSBib3R0b20tMC41JyAvPjxwIGNsYXNzTmFtZT0naW5saW5lLWJsb2NrJz4uPC9wPjwvPiApfVxyXG4gICAgICAgICAgICB7bW9kZWwgJiYgKCA8PjxpbWcgc3JjPScvZW1vamlzL3BpcmF0LnN2ZycgaGVpZ2h0PXsyMn0gd2lkdGg9ezIyfSBjbGFzc05hbWU9J2lubGluZS1ibG9jaycgLz48cCBjbGFzc05hbWU9J2lubGluZS1ibG9jayc+LjwvcD48Lz4gKX1cclxuICAgICAgICAgICAge3N1Y2Nlc3MgJiYgKCA8PjxpbWcgc3JjPScvZW1vamlzL3N0YXIuc3ZnJyBoZWlnaHQ9ezIyfSB3aWR0aD17MjJ9IGNsYXNzTmFtZT0naW5saW5lLWJsb2NrJyAvPjxwIGNsYXNzTmFtZT0naW5saW5lLWJsb2NrJz4hPC9wPjwvPiApfVxyXG4gICAgICAgICAgICB7d2VsY29tZSAmJiAoIDw+PGltZyBzcmM9Jy9naWZzL2hlbGxvLWhhbmQuZ2lmJyBoZWlnaHQ9ezIyfSB3aWR0aD17MjJ9IGNsYXNzTmFtZT0naW5saW5lLWJsb2NrJyAvPjxwIGNsYXNzTmFtZT0naW5saW5lLWJsb2NrJz4uPC9wPjwvPiApfVxyXG4gICAgICAgICAgICB7LyogPGltZyBzcmM9Jy9lbW9qaXMvY29jb3VudC5zdmcnIGhlaWdodD17MjJ9IHdpZHRoPXsyMn0gY2xhc3NOYW1lPSdpbmxpbmUtYmxvY2snIC8+LiAqL31cclxuXHJcbiAgICAgICAgICAgIHsvKiBURVhUIDEgKi99XHJcbiAgICAgICAgICAgIHtjb250ZW50VGV4dDEgJiYgY29udGVudFRleHQxfVxyXG4gICAgICAgICAgICB7c3RhcnR1cHMgJiYgKCA8PjxpbWcgc3JjPScvZW1vamlzL2JhbGxvb24uc3ZnJyBoZWlnaHQ9ezIyfSB3aWR0aD17MjJ9IGNsYXNzTmFtZT0naW5saW5lLWJsb2NrJyAvPjxwIGNsYXNzTmFtZT0naW5saW5lLWJsb2NrJz4uPC9wPjwvPiApfVxyXG4gICAgICAgICAgICB7dmlzaW9uICYmICggPD48aW1nIHNyYz0nL2Vtb2ppcy9jYW1lbC5zdmcnIGhlaWdodD17MjJ9IHdpZHRoPXsyMn0gY2xhc3NOYW1lPSdpbmxpbmUtYmxvY2snIC8+PHAgY2xhc3NOYW1lPSdpbmxpbmUtYmxvY2snPi48L3A+PC8+ICl9XHJcbiAgICAgICAgICAgIHtwcm9kdWN0ICYmICggPD48aW1nIHNyYz0nL2Vtb2ppcy9tYXAuc3ZnJyBoZWlnaHQ9ezIyfSB3aWR0aD17MjJ9IGNsYXNzTmFtZT0naW5saW5lLWJsb2NrJyAvPjxwIGNsYXNzTmFtZT0naW5saW5lLWJsb2NrJz4uPC9wPjwvPiApfVxyXG4gICAgICAgICAgICB7bWFya2V0ICYmICggPD48aW1nIHNyYz0nL2Vtb2ppcy9pc2xhbmQuc3ZnJyBoZWlnaHQ9ezIyfSB3aWR0aD17MjJ9IGNsYXNzTmFtZT0naW5saW5lLWJsb2NrJyAvPjxwIGNsYXNzTmFtZT0naW5saW5lLWJsb2NrJz4uPC9wPjwvPiApfVxyXG4gICAgICAgICAgICB7ZmluYW5jZXMgJiYgKCA8PjxpbWcgc3JjPScvZW1vamlzL2NvbnN0cnVjdGlvbi5zdmcnIGhlaWdodD17MjJ9IHdpZHRoPXsyMn0gY2xhc3NOYW1lPSdpbmxpbmUtYmxvY2snIC8+PHAgY2xhc3NOYW1lPSdpbmxpbmUtYmxvY2snPi48L3A+PC8+ICl9XHJcbiAgICAgICAgICAgIHttb2RlbCAmJiAoIDw+PGltZyBzcmM9Jy9lbW9qaXMvcG9wcGVyLnN2ZycgaGVpZ2h0PXsyMn0gd2lkdGg9ezIyfSBjbGFzc05hbWU9J2lubGluZS1ibG9jayByZWxhdGl2ZSBib3R0b20tMC41JyAvPjxwIGNsYXNzTmFtZT0naW5saW5lLWJsb2NrJz4hPC9wPjwvPiApfVxyXG4gICAgICAgICAgICB7d2VsY29tZSAmJiAoIDw+PGltZyBzcmM9Jy9naWZzL3JvY2tldC5naWYnIGhlaWdodD17MjJ9IHdpZHRoPXsyMn0gY2xhc3NOYW1lPSdpbmxpbmUtYmxvY2snIC8+PHAgY2xhc3NOYW1lPSdpbmxpbmUtYmxvY2snPiE8L3A+PC8+ICl9XHJcbiAgICAgICAgICAgIHsvKiA8aW1nIHNyYz0nL2Vtb2ppcy9iYWxsb29uLnN2ZycgaGVpZ2h0PXsyMn0gd2lkdGg9ezIyfSBjbGFzc05hbWU9J2lubGluZS1ibG9jaycgLz4uICovfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGZsZXgtd3JhcCBnYXAtMiBtdC0yJz48L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgICAgfVxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZml4ZWQgZmxleCBmbGV4LXdyYXAgbS0yIGJvdHRvbS00IHJpZ2h0LTQgei01MCc+XHJcbiAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICBzcmM9Jy9tb25zdGVycy9tb25zdGVyLXR3by5zdmcnXHJcbiAgICAgICAgICBoZWlnaHQ9ezY2fVxyXG4gICAgICAgICAgd2lkdGg9ezYwfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPSdjdXJzb3ItcG9pbnRlciB6LTUwJ1xyXG4gICAgICAgICAgb25DbGljaz17b25JbWFnZUNsaWNrfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9UaXBweT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGlwcHlNb25zdGVyO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcblxyXG5jb25zdCBFbXB0eVN0YXJ0dXAgPSAoeyBvblByb2plY3RDcmVhdGUgfSkgPT4ge1xyXG5cclxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gIC8vICAgZ3NhcC5mcm9tVG8oXHJcbiAgLy8gICAgIGNvbnRhaW5lclJlZi5jdXJyZW50LFxyXG4gIC8vICAgICB7IGF1dG9BbHBoYTogMCB9LFxyXG4gIC8vICAgICB7IGF1dG9BbHBoYTogMSwgZHVyYXRpb246IDIsIGVhc2U6IFBvd2VyNC5lYXNlT3V0IH1cclxuICAvLyAgICk7XHJcbiAgLy8gfSwgW10pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0ndy1mdWxsIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGJvcmRlci1yLTYgcm91bmRlZC0yeGwgYmctd2hpdGUgbXQtOCBkYXJrOmJnLWJhY2tncm91bmQnPlxyXG4gICAgICA8SW1hZ2UgaGVpZ2h0PXsyMDB9IHdpZHRoPXsyMDB9IHNyYz0nL2xhdW5jaC1tYWtlci5zdmcnIC8+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQtc2Vjb25kYXJ5IHRleHQtYmFzZSB0ZXh0LWdyYXknPlxyXG4gICAgICAgIEl0IGxvb2tzIGxpa2UgeW91IGhhdmUgbm8gYW55IHN0YXJ0dXBzIHlldCDwn5SOXHJcbiAgICAgIDwvaDE+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdwLTQnPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9Jy9kYXNoYm9hcmQvc3RhcnR1cC9jcmVhdG9yJz5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17b25Qcm9qZWN0Q3JlYXRlfSBjbGFzc05hbWU9J2hvdmVyOmJnLXByaW1hcnkgaG92ZXI6dGV4dC13aGl0ZSBkYXJrOmhvdmVyOmJnLXByaW1hcnlkYXJrIGRhcms6aG92ZXI6dGV4dC1iYWNrZ3JvdW5kIGZvY3VzOm91dGxpbmUtbm9uZSBib3JkZXIgYm9yZGVyLXByaW1hcnkgdGV4dC1wcmltYXJ5IGRhcms6dGV4dC1wcmltYXJ5ZGFyayBkYXJrOmJvcmRlci1wcmltYXJ5ZGFyayB0ZXh0LXNtIGZvbnQtbGlnaHQgcHktMiBweC02IHJvdW5kZWQtMnhsIG0tMic+XHJcbiAgICAgICAgICAgIENyZWF0ZSB5b3VyIGZpcnN0IHN0YXJ0dXBcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRW1wdHlTdGFydHVwO1xyXG4iLCJpbXBvcnQgeyBzYXZlQXMgfSBmcm9tICdmaWxlLXNhdmVyJztcclxuXHJcbmltcG9ydCB7XHJcbiAgRm9udCxcclxuICBwZGYsXHJcbiAgUGFnZSxcclxuICBUZXh0LFxyXG4gIFZpZXcsXHJcbiAgSW1hZ2UsXHJcbiAgRG9jdW1lbnQsXHJcbiAgU3R5bGVTaGVldCxcclxuICBQREZWaWV3ZXIsXHJcbiAgUERGRG93bmxvYWRMaW5rLFxyXG59IGZyb20gJ0ByZWFjdC1wZGYvcmVuZGVyZXInO1xyXG5cclxuLy8gY29uc3QgaW1hZ2UgPSBhdmF0YXJFeGlzdHMgIT0gJ2JsYW5rJyA/IGF2YXRhckV4aXN0cyA6IGltYWdlTmFtZUV4aXN0cztcclxuLy8gY29uc29sZS5sb2coaW1hZ2UpO1xyXG5cclxuY29uc3QgTXlEb2N1bWVudDEgPSAoeyBkYXRhIH0pID0+IHtcclxuICBGb250LnJlZ2lzdGVyKHsgc3JjOiAnL2ZvbnRzL3BvcHBpbnMudHRmJywgZmFtaWx5OiAnUG9wcGlucycgfSk7XHJcbiAgRm9udC5yZWdpc3Rlcih7IHNyYzogJy9mb250cy9jb21mb3J0YWEudHRmJywgZmFtaWx5OiAnQ29tZm9ydGFhJyB9KTtcclxuXHJcbiAgY29uc3Qgc3R5bGVzID0gU3R5bGVTaGVldC5jcmVhdGUoe1xyXG4gICAgLy8gU1RBUlQgSE9NRVBBR0UgU0VDVElPTlxyXG4gICAgaG9tZVBhZ2U6IHtcclxuICAgICAgZm9udEZhbWlseTogJ0NvbWZvcnRhYScsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmOGY5ZmInLFxyXG4gICAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcclxuICAgIH0sXHJcbiAgICBob21lUGFnZVRpdGxlU2VjdGlvbjoge1xyXG4gICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICBtYXJnaW5Ub3A6IDQwLFxyXG4gICAgfSxcclxuICAgIGhvbWVQYWdlVGl0bGU6IHtcclxuICAgICAgZm9udFNpemU6IDI2LFxyXG4gICAgICBjb2xvcjogJyMwYTEyMzAnLFxyXG4gICAgfSxcclxuICAgIGhvbWVQYWdlRGVzYzoge1xyXG4gICAgICBmb250U2l6ZTogMTYsXHJcbiAgICAgIGNvbG9yOiAnI2EwYWVjMCcsXHJcbiAgICB9LFxyXG4gICAgaW1hZ2U6IHtcclxuICAgICAgaGVpZ2h0OiAnMjAwcHgnLFxyXG4gICAgICB3aWR0aDogJzIwMHB4JyxcclxuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgICAgbWFyZ2luTGVmdDogJ2F1dG8nLFxyXG4gICAgICBtYXJnaW5SaWdodDogJ2F1dG8nLFxyXG4gICAgICBtYXJnaW5Ub3A6IDIyLFxyXG4gICAgfSxcclxuICAgIGxlZnREZXNjQmxvY2s6IHtcclxuICAgICAgd2lkdGg6ICc3NSUnLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjNkM2M0ZGJyxcclxuICAgICAgdGV4dEFsaWduOiAnbGVmdCcsXHJcbiAgICAgIG1hcmdpblRvcDogJzMycHgnLFxyXG4gICAgICBib3JkZXJUb3BSaWdodFJhZGl1czogNTAsXHJcbiAgICB9LFxyXG4gICAgbGVmdERlc2NCbG9ja1RleHQ6IHtcclxuICAgICAgZm9udFNpemU6IDE0LFxyXG4gICAgICBwYWRkaW5nOiAzMixcclxuICAgICAgbGluZUhlaWdodDogMS40LFxyXG4gICAgICBjb2xvcjogJyNmOGY5ZmInLFxyXG4gICAgfSxcclxuICAgIHJpZ2h0QmFyOiB7XHJcbiAgICAgIGhlaWdodDogJzEwMHZoJyxcclxuICAgICAgd2lkdGg6ICcxNXB4JyxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzZDNjNGRicsXHJcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICByaWdodDogJzUlJyxcclxuICAgIH0sXHJcbiAgICByaWdodEJhckNvbnRhY3Q6IHtcclxuICAgICAgY29sb3I6ICcjZjhmOWZiJyxcclxuICAgICAgZm9udFNpemU6IDE0LFxyXG4gICAgICB3aWR0aDogJzUwJScsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyM2QzYzRkYnLFxyXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgYm90dG9tOiAnMTAlJyxcclxuICAgICAgcmlnaHQ6ICc1JScsXHJcbiAgICAgIHBhZGRpbmc6IDMyLFxyXG4gICAgICBib3JkZXJUb3BMZWZ0UmFkaXVzOiA1MCxcclxuICAgIH0sXHJcbiAgICBjb3VudHJ5VGV4dDoge1xyXG4gICAgICBtYXJnaW5Ub3A6IDYsXHJcbiAgICB9LFxyXG4gICAgZW1haWxUZXh0OiB7XHJcbiAgICAgIG1hcmdpblRvcDogNixcclxuICAgIH0sXHJcbiAgICBwaG9uZU51bWJlclRleHQ6IHtcclxuICAgICAgbWFyZ2luVG9wOiA2LFxyXG4gICAgfSxcclxuICAgIGdyYXlCYXJPbmU6IHtcclxuICAgICAgaGVpZ2h0OiAnMjUlJyxcclxuICAgICAgd2lkdGg6ICcycHgnLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjYTBhZWMwJyxcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgIGJvdHRvbTogJzMlJyxcclxuICAgICAgbGVmdDogJzEwJScsXHJcbiAgICB9LFxyXG4gICAgZ3JheUJhclR3bzoge1xyXG4gICAgICBoZWlnaHQ6ICcycHgnLFxyXG4gICAgICB3aWR0aDogJzIwJScsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNhMGFlYzAnLFxyXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgYm90dG9tOiAnNSUnLFxyXG4gICAgICBsZWZ0OiAnNSUnLFxyXG4gICAgfSxcclxuICAgIC8vIEVORCBTVEFSVCBIT01FUEFHRSBTRUNUSU9OXHJcbiAgICAvLyBTVEFSVCBPVkVSVklFVyBTRUNUSU9OXHJcbiAgICBvdmVydmlld1BhZ2U6IHtcclxuICAgICAgZm9udEZhbWlseTogJ0NvbWZvcnRhYScsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmOGY5ZmInLFxyXG4gICAgICBwYWRkaW5nVG9wOiAzNSxcclxuICAgICAgcGFkZGluZ0JvdHRvbTogMzUsXHJcbiAgICB9LFxyXG4gICAgb3ZlcnZpZXdIZWFkaW5nOiB7XHJcbiAgICAgIGZvbnRTaXplOiAyMixcclxuICAgICAgY29sb3I6ICcjMGExMjMwJyxcclxuICAgICAgbWFyZ2luTGVmdDogMjgsXHJcbiAgICB9LFxyXG4gICAgb3ZlcnZpZXdTdWJ0aXRsZToge1xyXG4gICAgICBmb250U2l6ZTogMTQsXHJcbiAgICAgIGNvbG9yOiAnI2EwYWVjMCcsXHJcbiAgICB9LFxyXG4gICAgb3ZlcnZpZXdJbWFnZToge1xyXG4gICAgICBoZWlnaHQ6ICcyMHB4JyxcclxuICAgICAgd2lkdGg6ICcyMHB4JyxcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgIHRvcDogMzcsXHJcbiAgICAgIGxlZnQ6IDMwLFxyXG4gICAgfSxcclxuICAgIG92ZXJ2aWV3U2VjdGlvbjoge1xyXG4gICAgICAvLyBwYWRkaW5nOiAnNSUnLFxyXG4gICAgICAvLyBwYWRkaW5nVG9wOiAnNSUnLFxyXG4gICAgICBwYWRkaW5nQm90dG9tOiAnNSUnLFxyXG4gICAgICBwYWRkaW5nTGVmdDogJzUlJyxcclxuICAgICAgcGFkZGluZ1JpZ2h0OiAnNSUnLFxyXG4gICAgfSxcclxuICAgIHNlY3Rpb25Db250YWluZXJPbmU6IHtcclxuICAgICAgbWFyZ2luVG9wOiAzMCxcclxuICAgIH0sXHJcbiAgICBzZWN0aW9uSGVhZGluZ09uZToge1xyXG4gICAgICBjb2xvcjogJyMwYTEyMzAnLFxyXG4gICAgICBmb250U2l6ZTogMTYsXHJcbiAgICB9LFxyXG4gICAgc2VjdGlvblRleHQ6IHtcclxuICAgICAgY29sb3I6ICcjMGExMjMwJyxcclxuICAgICAgZm9udFNpemU6IDEyLFxyXG4gICAgICBwYWRkaW5nVG9wOiA4LFxyXG4gICAgICBwYWRkaW5nUmlnaHQ6IDUwLFxyXG4gICAgfSxcclxuICAgIHNlY3Rpb25Db250YWluZXJUd286IHtcclxuICAgICAgcGFkZGluZ1RvcDogMzAsXHJcbiAgICB9LFxyXG4gICAgc2VjdGlvbkhlYWRpbmdUd286IHtcclxuICAgICAgY29sb3I6ICcjMGExMjMwJyxcclxuICAgICAgZm9udFNpemU6IDE2LFxyXG4gICAgfSxcclxuICAgIHNlY3Rpb25Db250YWluZXJUaHJlZToge1xyXG4gICAgICBwYWRkaW5nVG9wOiAzNixcclxuICAgICAgcGFkZGluZ0JvdHRvbTogMjYsXHJcbiAgICB9LFxyXG4gICAgc2VjdGlvbkhlYWRpbmdUaHJlZToge1xyXG4gICAgICBjb2xvcjogJyMwYTEyMzAnLFxyXG4gICAgICBmb250U2l6ZTogMTYsXHJcbiAgICB9LFxyXG4gICAgLy8gRU5EIE9WRVJWSUVXIFNFQ1RJT05cclxuICAgIC8vIFNUQVJUIFRBQkxFIE9GIENPTlRFTlRTIFNFQ1RJT05cclxuICAgIGNvbnRlbnRzUGFnZToge1xyXG4gICAgICBmb250RmFtaWx5OiAnQ29tZm9ydGFhJyxcclxuICAgIH0sXHJcbiAgICBjb250ZW50c0xlZnRCYXI6IHtcclxuICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgIHdpZHRoOiAnNDAlJyxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzZDNjNGRicsXHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICBhbGlnbkl0ZW1zOiAnYmFzZWxpbmUnLFxyXG4gICAgICBjb2xvcjogJyNmOGY5ZmInLFxyXG4gICAgICBwYWRkaW5nTGVmdDogMzUsXHJcbiAgICAgIGZvbnRTaXplOiAyMCxcclxuICAgICAgbGluZUhlaWdodDogNCxcclxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICB9LFxyXG4gICAgY29udGVudHNCYXJPbmU6IHtcclxuICAgICAgd2lkdGg6IDIwMCxcclxuICAgICAgaGVpZ2h0OiAyLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjYTBhZWMwJyxcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgIHRvcDogJzM3JScsXHJcbiAgICAgIGxlZnQ6ICcxMDAlJyxcclxuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpJyxcclxuICAgIH0sXHJcbiAgICBjb250ZW50c0JhclR3bzoge1xyXG4gICAgICB3aWR0aDogMjAwLFxyXG4gICAgICBoZWlnaHQ6IDIsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNhMGFlYzAnLFxyXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgdG9wOiAnNDYuNSUnLFxyXG4gICAgICBsZWZ0OiAnMTAwJScsXHJcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScsXHJcbiAgICB9LFxyXG4gICAgY29udGVudHNCYXJUaHJlZToge1xyXG4gICAgICB3aWR0aDogMjAwLFxyXG4gICAgICBoZWlnaHQ6IDIsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNhMGFlYzAnLFxyXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgdG9wOiAnNTYlJyxcclxuICAgICAgbGVmdDogJzEwMCUnLFxyXG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknLFxyXG4gICAgfSxcclxuICAgIGNvbnRlbnRzQmFyRm91cjoge1xyXG4gICAgICB3aWR0aDogMjAwLFxyXG4gICAgICBoZWlnaHQ6IDIsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNhMGFlYzAnLFxyXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgdG9wOiAnNjUuNSUnLFxyXG4gICAgICBsZWZ0OiAnMTAwJScsXHJcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScsXHJcbiAgICB9LFxyXG4gICAgY29udGVudHNCYXJGaXZlOiB7XHJcbiAgICAgIHdpZHRoOiAyMDAsXHJcbiAgICAgIGhlaWdodDogMixcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2EwYWVjMCcsXHJcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICB0b3A6ICc3NC43NSUnLFxyXG4gICAgICBsZWZ0OiAnMTAwJScsXHJcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScsXHJcbiAgICB9LFxyXG4gICAgY29udGVudHNSaWdodEJhcjoge1xyXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgICAgd2lkdGg6ICc2MCUnLFxyXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgcmlnaHQ6ICcwJyxcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgZm9udFNpemU6IDEyLFxyXG4gICAgICBjb2xvcjogJyMwYTEyMzAnLFxyXG4gICAgICAvLyBwYWRkaW5nSG9yaXpvbnRhbDogNjQsXHJcbiAgICAgIHBhZGRpbmdSaWdodDogODAsXHJcbiAgICAgIHBhZGRpbmdMZWZ0OiAzMixcclxuICAgIH0sXHJcbiAgICBjb250ZW50c1JpZ2h0VGV4dE9uZToge1xyXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgdG9wOiAnMjYuNzUlJyxcclxuICAgIH0sXHJcbiAgICBjb250ZW50c1JpZ2h0VGV4dFR3bzoge1xyXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgdG9wOiAnMzYlJyxcclxuICAgIH0sXHJcbiAgICBjb250ZW50c1JpZ2h0VGV4dFRocmVlOiB7XHJcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICB0b3A6ICc0NS41JScsXHJcbiAgICB9LFxyXG4gICAgY29udGVudHNSaWdodFRleHRGb3VyOiB7XHJcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICB0b3A6ICc1NSUnLFxyXG4gICAgfSxcclxuICAgIGNvbnRlbnRzUmlnaHRUZXh0Rml2ZToge1xyXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgdG9wOiAnNjQuMjUlJyxcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG4gIC8vICAgY29uc3QgZGF0YSA9IHtcclxuICAvLyAgICAgaWRlYU5hbWUsXHJcbiAgLy8gICAgIGlkZWFEZXNjLFxyXG4gIC8vICAgICBpZGVhQ291bnRyeSxcclxuICAvLyAgICAgc3RhcnR1cEZpZWxkLFxyXG4gIC8vICAgICBzdGFydHVwRW1haWwsXHJcbiAgLy8gICAgIHN0YXJ0dXBQaG9uZSxcclxuICAvLyAgICAgaW1hZ2VOYW1lRXhpc3RzLFxyXG4gIC8vICAgICBtYXJrZXRQcm9ibGVtU2VjdGlvbixcclxuICAvLyAgICAgbWFya2V0U29sdXRpb25TZWN0aW9uLFxyXG4gIC8vICAgICBmb3VuZGVyc1NlY3Rpb24sXHJcbiAgLy8gICAgIHByb2R1Y3RPdmVydmlld1NlY3Rpb24sXHJcbiAgLy8gICAgIHByb2R1Y3RQcm9tb3Rpb25TZWN0aW9uLFxyXG4gIC8vICAgICBwcm9kdWN0QmVuZWZpdHNTZWN0aW9uLFxyXG4gIC8vICAgICBtYXJrZXRPdmVydmlld1NlY3Rpb24sXHJcbiAgLy8gICAgIGNvbXBldGl0b3JzU2VjdGlvbixcclxuICAvLyAgICAgdGFyZ2V0Q3VzdG9tZXJzU2VjdGlvbixcclxuICAvLyAgICAgY29tcGV0aXRpb25EaXN0aW5ndWlzaFNlY3Rpb24sXHJcbiAgLy8gICAgIHN0YXJ0dXBDb3N0c1NlY3Rpb24sXHJcbiAgLy8gICAgIHJ1bm5pbmdDb3N0c1NlY3Rpb24sXHJcbiAgLy8gICAgIGZpbmFuY2luZ1NlY3Rpb24sXHJcbiAgLy8gICAgIGJ1c2luZXNzTW9kZWxPdmVydmlld1NlY3Rpb24sXHJcbiAgLy8gICAgIGJ1c2luZXNzR3Jvd1NlY3Rpb24sXHJcbiAgLy8gICAgIHdoeVN1Y2Nlc3NTZWN0aW9uLFxyXG4gIC8vICAgfTtcclxuXHJcbiAgY29uc3QgaW1hZ2UgPVxyXG4gICAgZGF0YS5hdmF0YXJFeGlzdHMgIT0gJ2JsYW5rJ1xyXG4gICAgICA/IGRhdGEuYXZhdGFyRXhpc3RzXHJcbiAgICAgIDogYC9wbmcvJHtkYXRhLmltYWdlTmFtZUV4aXN0c30ucG5nYDtcclxuICBjb25zb2xlLmxvZygnZGF0YSAtICcsIGRhdGEpO1xyXG4gIGNvbnNvbGUubG9nKCdkYXRhTWFya2V0UHJvYmxlbSAtICcsIGRhdGEubWFya2V0UHJvYmxlbVNlY3Rpb24pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPERvY3VtZW50PlxyXG4gICAgICA8UGFnZSBzaXplPSdBNCcgc3R5bGU9e3N0eWxlcy5ob21lUGFnZX0+XHJcbiAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5ob21lUGFnZVRpdGxlU2VjdGlvbn0+XHJcbiAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLmhvbWVQYWdlVGl0bGV9PlN0YXJ0dXAgaWRlYSBwbGFuPC9UZXh0PlxyXG4gICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5ob21lUGFnZURlc2N9PlxyXG4gICAgICAgICAgICB7ZGF0YS5pZGVhTmFtZX1cclxuICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICBzcmM9e2ltYWdlfVxyXG4gICAgICAgICAgICBzdHlsZT17c3R5bGVzLmltYWdlfVxyXG4gICAgICAgICAgICBoZWlnaHQ9JzI1MHB4J1xyXG4gICAgICAgICAgICB3aWR0aD0nMjUwcHgnXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5sZWZ0RGVzY0Jsb2NrfT5cclxuICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5sZWZ0RGVzY0Jsb2NrVGV4dH0+e2RhdGEuaWRlYURlc2N9PC9UZXh0PlxyXG4gICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgIDwvVmlldz5cclxuICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLnJpZ2h0QmFyfT48L1ZpZXc+XHJcbiAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5yaWdodEJhckNvbnRhY3R9PlxyXG4gICAgICAgICAgPFRleHQ+e2RhdGEuc3RhcnR1cEZpZWxkfTwvVGV4dD5cclxuICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuY291bnRyeVRleHR9PntkYXRhLmlkZWFDb3VudHJ5fTwvVGV4dD5cclxuICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuZW1haWxUZXh0fT57ZGF0YS5zdGFydHVwRW1haWx9PC9UZXh0PlxyXG4gICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5waG9uZU51bWJlclRleHR9PntkYXRhLnN0YXJ0dXBQaG9uZX08L1RleHQ+XHJcbiAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuZ3JheUJhck9uZX0+PC9WaWV3PlxyXG4gICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuZ3JheUJhclR3b30+PC9WaWV3PlxyXG4gICAgICA8L1BhZ2U+XHJcbiAgICAgIHsvKiBUQUJMRSBPRiBDT05URU5UUyAqL31cclxuICAgICAgPFBhZ2Ugc3R5bGU9e3N0eWxlcy5jb250ZW50c1BhZ2V9PlxyXG4gICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMucmlnaHRCYXJ9IGZpeGVkPjwvVmlldz5cclxuICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLmNvbnRlbnRzTGVmdEJhcn0+XHJcbiAgICAgICAgICA8VGV4dD5TdGFydHVwIG92ZXJ2aWV3PC9UZXh0PlxyXG4gICAgICAgICAgPFRleHQ+UHJvZHVjdDwvVGV4dD5cclxuICAgICAgICAgIDxUZXh0Pk1hcmtldCBhbmFseXNpczwvVGV4dD5cclxuICAgICAgICAgIDxUZXh0PkZpbmFuY2VzPC9UZXh0PlxyXG4gICAgICAgICAgPFRleHQ+QnVzaW5lc3MgbW9kZWw8L1RleHQ+XHJcbiAgICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLmNvbnRlbnRzQmFyT25lfT48L1ZpZXc+XHJcbiAgICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLmNvbnRlbnRzQmFyVHdvfT48L1ZpZXc+XHJcbiAgICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLmNvbnRlbnRzQmFyVGhyZWV9PjwvVmlldz5cclxuICAgICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuY29udGVudHNCYXJGb3VyfT48L1ZpZXc+XHJcbiAgICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLmNvbnRlbnRzQmFyRml2ZX0+PC9WaWV3PlxyXG4gICAgICAgIDwvVmlldz5cclxuICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLmNvbnRlbnRzUmlnaHRCYXJ9PlxyXG4gICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5jb250ZW50c1JpZ2h0VGV4dE9uZX0+XHJcbiAgICAgICAgICAgIDAxLiBUaGlzIHNlY3Rpb24gd2lsbCBoZWxwIHlvdSBiZXR0ZXIgdW5kZXJzdGFuZCB0aGUgc3RhcnR1cCB2aXNpb25cclxuICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuY29udGVudHNSaWdodFRleHRUd299PlxyXG4gICAgICAgICAgICAwMi4gVGhpcyBzZWN0aW9uIHdpbGwgaW50cm9kdWNlIHlvdSB0byB0aGUgdmlzaW9uIG9mIHRoZSBwcm9kdWN0XHJcbiAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLmNvbnRlbnRzUmlnaHRUZXh0VGhyZWV9PlxyXG4gICAgICAgICAgICAwMy4gVGhpcyBzZWN0aW9uIHdpbGwgcmV2ZWFsIGFsbCB0aGUgY2FyZHMgb2YgdGhlIG1hcmtldFxyXG4gICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5jb250ZW50c1JpZ2h0VGV4dEZvdXJ9PlxyXG4gICAgICAgICAgICAwNC4gRGlzY292ZXIgdGhlIGNvc3RzIG9mIGltcGxlbWVudGluZyBvdXIgaWRlYVxyXG4gICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5jb250ZW50c1JpZ2h0VGV4dEZpdmV9PlxyXG4gICAgICAgICAgICAwNS4gSW4gdGhlIGZpbmFsIHNlY3Rpb24sIHlvdSB3aWxsIGRpc2NvdmVyIHRoZSBzdGFydHVwJ3MgYnVzaW5lc3NcclxuICAgICAgICAgICAgbW9kZWxcclxuICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICA8L1ZpZXc+XHJcbiAgICAgIDwvUGFnZT5cclxuICAgICAgey8qIE9WRVJWSUVXIFNFQ1RJT04gKi99XHJcbiAgICAgIDxQYWdlIHN0eWxlPXtzdHlsZXMub3ZlcnZpZXdQYWdlfT5cclxuICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLnJpZ2h0QmFyfSBmaXhlZD48L1ZpZXc+XHJcbiAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICBzdHlsZT17c3R5bGVzLm92ZXJ2aWV3SW1hZ2V9XHJcbiAgICAgICAgICBzcmM9Jy9wZGYvaWRlYS5wbmcnXHJcbiAgICAgICAgICBoZWlnaHQ9ezIwfVxyXG4gICAgICAgICAgd2lkdGg9ezIwfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5vdmVydmlld1NlY3Rpb259PlxyXG4gICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5vdmVydmlld0hlYWRpbmd9PlN0YXJ0dXAgb3ZlcnZpZXc8L1RleHQ+XHJcbiAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLm92ZXJ2aWV3U3VidGl0bGV9PlxyXG4gICAgICAgICAgICBUaGlzIHNlY3Rpb24gd2lsbCBoZWxwIHlvdSBiZXR0ZXIgdW5kZXJzdGFuZCB0aGUgc3RhcnR1cCB2aXNpb25cclxuICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuc2VjdGlvbkNvbnRhaW5lck9uZX0+XHJcbiAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuc2VjdGlvbkhlYWRpbmdPbmV9PlxyXG4gICAgICAgICAgICAgIE1hcmtldCBwcm9ibGVtIHRoYXQgbmVlZHMgdG8gYmUgc29sdmVkLlxyXG4gICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuc2VjdGlvblRleHR9PntkYXRhLm1hcmtldFByb2JsZW1TZWN0aW9ufTwvVGV4dD5cclxuICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuc2VjdGlvbkNvbnRhaW5lclR3b30+XHJcbiAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuc2VjdGlvbkhlYWRpbmdUd299PlxyXG4gICAgICAgICAgICAgIFNvbHV0aW9uIHRoYXQgc29sdmVzIHRoaXMgbWFya2V0IHByb2JsZW0uXHJcbiAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5zZWN0aW9uVGV4dH0+e2RhdGEubWFya2V0U29sdXRpb25TZWN0aW9ufTwvVGV4dD5cclxuICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuc2VjdGlvbkNvbnRhaW5lclRocmVlfT5cclxuICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5zZWN0aW9uSGVhZGluZ1RocmVlfT5cclxuICAgICAgICAgICAgICBXaG8gaXMgYmVoaW5kIHRoZSBmb3VuZGF0aW9uIG9mIHRoZSBmdXR1cmUgY29tcGFueT9cclxuICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnNlY3Rpb25UZXh0fT57ZGF0YS5mb3VuZGVyc1NlY3Rpb259PC9UZXh0PlxyXG4gICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgIDwvVmlldz5cclxuICAgICAgPC9QYWdlPlxyXG4gICAgICB7LyogUFJPRFVDVCBTRUNUSU9OICovfVxyXG4gICAgICA8UGFnZSBzdHlsZT17c3R5bGVzLm92ZXJ2aWV3UGFnZX0+XHJcbiAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5yaWdodEJhcn0gZml4ZWQ+PC9WaWV3PlxyXG4gICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgc3R5bGU9e3N0eWxlcy5vdmVydmlld0ltYWdlfVxyXG4gICAgICAgICAgc3JjPScvcGRmL2JsdWVwcmludC5wbmcnXHJcbiAgICAgICAgICBoZWlnaHQ9ezIwfVxyXG4gICAgICAgICAgd2lkdGg9ezIwfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5vdmVydmlld1NlY3Rpb259PlxyXG4gICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5vdmVydmlld0hlYWRpbmd9PlByb2R1Y3Q8L1RleHQ+XHJcbiAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLm92ZXJ2aWV3U3VidGl0bGV9PlxyXG4gICAgICAgICAgICBUaGlzIHNlY3Rpb24gd2lsbCBpbnRyb2R1Y2UgeW91IHRvIHRoZSB2aXNpb24gb2YgdGhlIHByb2R1Y3RcclxuICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuc2VjdGlvbkNvbnRhaW5lck9uZX0+XHJcbiAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuc2VjdGlvbkhlYWRpbmdPbmV9PlxyXG4gICAgICAgICAgICAgIERldGFpbGVkIGRlc2NyaXB0aW9uIG9mIHRoZSBwcm9kdWN0IHZpc2lvbi5cclxuICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnNlY3Rpb25UZXh0fT5cclxuICAgICAgICAgICAgICB7ZGF0YS5wcm9kdWN0T3ZlcnZpZXdTZWN0aW9ufVxyXG4gICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLnNlY3Rpb25Db250YWluZXJUd299PlxyXG4gICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnNlY3Rpb25IZWFkaW5nVHdvfT5cclxuICAgICAgICAgICAgICBIb3cgd2lsbCBvdGhlciBwZW9wbGUgZmluZCBvdXQgYWJvdXQgdGhlIHByb2R1Y3Q/XHJcbiAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5zZWN0aW9uVGV4dH0+XHJcbiAgICAgICAgICAgICAge2RhdGEucHJvZHVjdFByb21vdGlvblNlY3Rpb259XHJcbiAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuc2VjdGlvbkNvbnRhaW5lclRocmVlfT5cclxuICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5zZWN0aW9uSGVhZGluZ1RocmVlfT5cclxuICAgICAgICAgICAgICBXaGF0IGJlbmVmaXRzIHdpbGwgdGhpcyBwcm9kdWN0IGJyaW5ncyB0byBjdXN0b21lcnM/XHJcbiAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5zZWN0aW9uVGV4dH0+XHJcbiAgICAgICAgICAgICAge2RhdGEucHJvZHVjdEJlbmVmaXRzU2VjdGlvbn1cclxuICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgIDwvVmlldz5cclxuICAgICAgPC9QYWdlPlxyXG4gICAgICB7LyogTUFSS0VUIFNFQ1RJT04gKi99XHJcbiAgICAgIDxQYWdlIHN0eWxlPXtzdHlsZXMub3ZlcnZpZXdQYWdlfT5cclxuICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLnJpZ2h0QmFyfSBmaXhlZD48L1ZpZXc+XHJcbiAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICBzdHlsZT17c3R5bGVzLm92ZXJ2aWV3SW1hZ2V9XHJcbiAgICAgICAgICBzcmM9Jy9wZGYvdW5pY29ybi5wbmcnXHJcbiAgICAgICAgICBoZWlnaHQ9ezIwfVxyXG4gICAgICAgICAgd2lkdGg9ezIwfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5vdmVydmlld1NlY3Rpb259PlxyXG4gICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5vdmVydmlld0hlYWRpbmd9Pk1hcmtldCBhbmFseXNpczwvVGV4dD5cclxuICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMub3ZlcnZpZXdTdWJ0aXRsZX0+XHJcbiAgICAgICAgICAgIFRoaXMgc2VjdGlvbiB3aWxsIHJldmVhbCBhbGwgdGhlIGNhcmRzIG9mIHRoZSBtYXJrZXRcclxuICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuc2VjdGlvbkNvbnRhaW5lck9uZX0+XHJcbiAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuc2VjdGlvbkhlYWRpbmdPbmV9PlxyXG4gICAgICAgICAgICAgIEdlbmVyYWwgaW5zaWdodCBpbnRvIHRoZSBtYXJrZXQuXHJcbiAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5zZWN0aW9uVGV4dH0+e2RhdGEubWFya2V0T3ZlcnZpZXdTZWN0aW9ufTwvVGV4dD5cclxuICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuc2VjdGlvbkNvbnRhaW5lclR3b30+XHJcbiAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuc2VjdGlvbkhlYWRpbmdUd299PlxyXG4gICAgICAgICAgICAgIFdobyBhcmUgdGhlIG1ham9yIGNvbXBldGl0b3JzIGluIHRoZSBtYXJrZXQ/XHJcbiAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5zZWN0aW9uVGV4dH0+e2RhdGEuY29tcGV0aXRvcnNTZWN0aW9ufTwvVGV4dD5cclxuICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuc2VjdGlvbkNvbnRhaW5lclR3b30+XHJcbiAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuc2VjdGlvbkhlYWRpbmdUd299PlxyXG4gICAgICAgICAgICAgIFdoYXQgbWFrZXMgdGhpcyBzdGFydHVwIHN0YW5kIG91dCBmcm9tIHRoZSBjb21wZXRpdGlvbj9cclxuICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnNlY3Rpb25UZXh0fT5cclxuICAgICAgICAgICAgICB7ZGF0YS5jb21wZXRpdGlvbkRpc3Rpbmd1aXNoU2VjdGlvbn1cclxuICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5zZWN0aW9uQ29udGFpbmVyVGhyZWV9PlxyXG4gICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnNlY3Rpb25IZWFkaW5nVGhyZWV9PlxyXG4gICAgICAgICAgICAgIFRhcmdldCBncm91cCBvZiBzdGFydHVwIGN1c3RvbWVycy5cclxuICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnNlY3Rpb25UZXh0fT5cclxuICAgICAgICAgICAgICB7ZGF0YS50YXJnZXRDdXN0b21lcnNTZWN0aW9ufVxyXG4gICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgPC9WaWV3PlxyXG4gICAgICA8L1BhZ2U+XHJcbiAgICAgIHsvKiBGSU5BTkNFUyBTRUNUSU9OICovfVxyXG4gICAgICA8UGFnZSBzdHlsZT17c3R5bGVzLm92ZXJ2aWV3UGFnZX0+XHJcbiAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5yaWdodEJhcn0gZml4ZWQ+PC9WaWV3PlxyXG4gICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgc3R5bGU9e3N0eWxlcy5vdmVydmlld0ltYWdlfVxyXG4gICAgICAgICAgc3JjPScvcGRmL2J1ZGdldC5wbmcnXHJcbiAgICAgICAgICBoZWlnaHQ9ezIwfVxyXG4gICAgICAgICAgd2lkdGg9ezIwfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5vdmVydmlld1NlY3Rpb259PlxyXG4gICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5vdmVydmlld0hlYWRpbmd9PkZpbmFuY2VzPC9UZXh0PlxyXG4gICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5vdmVydmlld1N1YnRpdGxlfT5cclxuICAgICAgICAgICAgRGlzY292ZXIgdGhlIGNvc3RzIG9mIGltcGxlbWVudGluZyBvdXIgaWRlYVxyXG4gICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5zZWN0aW9uQ29udGFpbmVyT25lfT5cclxuICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5zZWN0aW9uSGVhZGluZ09uZX0+XHJcbiAgICAgICAgICAgICAgSG93IG11Y2ggbW9uZXkgd2lsbCBpdCB0YWtlIHRvIGxhdW5jaCB0aGUgc3RhcnR1cD9cclxuICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnNlY3Rpb25UZXh0fT57ZGF0YS5zdGFydHVwQ29zdHNTZWN0aW9ufTwvVGV4dD5cclxuICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuc2VjdGlvbkNvbnRhaW5lclR3b30+XHJcbiAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuc2VjdGlvbkhlYWRpbmdUd299PlxyXG4gICAgICAgICAgICAgIEFwcHJveGltYXRlIHJ1bm5pbmcgY29zdHMsIGJhc2VkIG9uIHN0YXJ0dXAgZ3Jvd3RoLlxyXG4gICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuc2VjdGlvblRleHR9PntkYXRhLnJ1bm5pbmdDb3N0c1NlY3Rpb259PC9UZXh0PlxyXG4gICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5zZWN0aW9uQ29udGFpbmVyVGhyZWV9PlxyXG4gICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnNlY3Rpb25IZWFkaW5nVGhyZWV9PlxyXG4gICAgICAgICAgICAgIEhvdyBkb2VzIHRoZSBpZGVhIHdpbGwgYmUgZnVuZD9cclxuICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnNlY3Rpb25UZXh0fT57ZGF0YS5maW5hbmNpbmdTZWN0aW9ufTwvVGV4dD5cclxuICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICA8L1ZpZXc+XHJcbiAgICAgIDwvUGFnZT5cclxuICAgICAgey8qIEJVU0lORVNTIE1PREVMIFNFQ1RJT04gKi99XHJcbiAgICAgIDxQYWdlIHN0eWxlPXtzdHlsZXMub3ZlcnZpZXdQYWdlfT5cclxuICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLnJpZ2h0QmFyfSBmaXhlZD48L1ZpZXc+XHJcbiAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICBzdHlsZT17c3R5bGVzLm92ZXJ2aWV3SW1hZ2V9XHJcbiAgICAgICAgICBzcmM9Jy9wZGYvc3RhcnR1cC5wbmcnXHJcbiAgICAgICAgICBoZWlnaHQ9ezIwfVxyXG4gICAgICAgICAgd2lkdGg9ezIwfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5vdmVydmlld1NlY3Rpb259PlxyXG4gICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5vdmVydmlld0hlYWRpbmd9PkJ1c2luZXNzIG1vZGVsPC9UZXh0PlxyXG4gICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5vdmVydmlld1N1YnRpdGxlfT5cclxuICAgICAgICAgICAgSW4gdGhlIGZpbmFsIHNlY3Rpb24sIHlvdSB3aWxsIGRpc2NvdmVyIHRoZSBzdGFydHVwJ3MgYnVzaW5lc3MgbW9kZWxcclxuICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuc2VjdGlvbkNvbnRhaW5lck9uZX0+XHJcbiAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuc2VjdGlvbkhlYWRpbmdPbmV9PlxyXG4gICAgICAgICAgICAgIFN0YXJ0dXAgYnVzaW5lc3MgbW9kZWwgYW5kIGxlZ2FsIHN0cnVjdHVyZSBvdmVydmlldy5cclxuICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnNlY3Rpb25UZXh0fT5cclxuICAgICAgICAgICAgICB7ZGF0YS5idXNpbmVzc01vZGVsT3ZlcnZpZXdTZWN0aW9ufVxyXG4gICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLnNlY3Rpb25Db250YWluZXJUd299PlxyXG4gICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnNlY3Rpb25IZWFkaW5nVHdvfT5cclxuICAgICAgICAgICAgICBQcmVkaWN0aW9ucyBmb3Igc3RhcnR1cCBncm93dGguXHJcbiAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5zZWN0aW9uVGV4dH0+e2RhdGEuYnVzaW5lc3NHcm93U2VjdGlvbn08L1RleHQ+XHJcbiAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLnNlY3Rpb25Db250YWluZXJUaHJlZX0+XHJcbiAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuc2VjdGlvbkhlYWRpbmdUaHJlZX0+XHJcbiAgICAgICAgICAgICAgV2h5IHdpbGwgdGhpcyBwYXJ0aWN1bGFyIHN0YXJ0dXAgc3VjY2VlZD9cclxuICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnNlY3Rpb25UZXh0fT57ZGF0YS53aHlTdWNjZXNzU2VjdGlvbn08L1RleHQ+XHJcbiAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgPC9WaWV3PlxyXG4gICAgICA8L1BhZ2U+XHJcbiAgICA8L0RvY3VtZW50PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeURvY3VtZW50MTtcclxuIiwiaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgU3RhcnR1cFNrZWxldG9uID0gKCkgPT4ge1xyXG4gIGNvbnN0IGhlbHBlclZhcmlhYmxlID0gd2luZG93LmlubmVyV2lkdGggPCAxNTM2ID8gJ3NtYWxsJyA6ICdsYXJnZSc7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7aGVscGVyVmFyaWFibGUgPT0gJ3NtYWxsJyA/IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy1mdWxsIGdyaWQgZ3JpZC1jb2xzLTNmciBnYXAtOCBib3JkZXItci02IHJvdW5kZWQtMnhsIGJnLXdoaXRlIG10LTggbWItOCBkYXJrOmJnLWJhY2tncm91bmQgcC04IHRleHQtY2VudGVyJz5cclxuICAgICAgICAgIHsvKiA8SW1hZ2Ugc3JjPScvbG9hZGluZy9sb2FkaW5nLnN2Zycgd2lkdGg9ezE1MH0gaGVpZ2h0PXsxOTV9IGNsYXNzTmFtZT0ncC02JyAvPiAqL31cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzaGFkb3cgcm91bmRlZC0yeGwgZmxleCBmbGV4LXdyYXAganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGZsZXgtY29sJz5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogJzQ4NnB4JyB9fVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0ncmVsYXRpdmUgaW5saW5lLWJsb2NrIHRleHQtcmlnaHQgdy00LzUgcHktOCdcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxJbWFnZSBzcmM9Jy9sb2FkaW5nL2xvYWRpbmcuc3ZnJyB3aWR0aD17MTUwfSBoZWlnaHQ9ezE5NX0gLz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naC04IGJnLWJhY2tncm91bmQgcm91bmRlZC0yeGwgbXQtMic+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2gtOCBiZy1iYWNrZ3JvdW5kIHJvdW5kZWQtMnhsIG10LTQnPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoLTggYmctYmFja2dyb3VuZCByb3VuZGVkLTJ4bCBtdC00Jz48L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naC04IGJnLWJhY2tncm91bmQgcm91bmRlZC0yeGwgbXQtNCc+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2gtOCBiZy1iYWNrZ3JvdW5kIHJvdW5kZWQtMnhsIG10LTQnPjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NoYWRvdyByb3VuZGVkLTJ4bCBmbGV4IGZsZXgtd3JhcCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgZmxleC1jb2wnPlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiAnNDg2cHgnIH19XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdyZWxhdGl2ZSBpbmxpbmUtYmxvY2sgdGV4dC1yaWdodCB3LTQvNSBweS04J1xyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPEltYWdlIHNyYz0nL2xvYWRpbmcvbG9hZGluZy5zdmcnIHdpZHRoPXsxNTB9IGhlaWdodD17MTk1fSAvPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoLTggYmctYmFja2dyb3VuZCByb3VuZGVkLTJ4bCBtdC0yJz48L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naC04IGJnLWJhY2tncm91bmQgcm91bmRlZC0yeGwgbXQtNCc+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2gtOCBiZy1iYWNrZ3JvdW5kIHJvdW5kZWQtMnhsIG10LTQnPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoLTggYmctYmFja2dyb3VuZCByb3VuZGVkLTJ4bCBtdC00Jz48L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naC04IGJnLWJhY2tncm91bmQgcm91bmRlZC0yeGwgbXQtNCc+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2hhZG93IHJvdW5kZWQtMnhsIGZsZXggZmxleC13cmFwIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBmbGV4LWNvbCc+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6ICc0ODZweCcgfX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9J3JlbGF0aXZlIGlubGluZS1ibG9jayB0ZXh0LXJpZ2h0IHctNC81IHB5LTgnXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPScvbG9hZGluZy9sb2FkaW5nLnN2Zycgd2lkdGg9ezE1MH0gaGVpZ2h0PXsxOTV9IC8+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2gtOCBiZy1iYWNrZ3JvdW5kIHJvdW5kZWQtMnhsIG10LTInPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoLTggYmctYmFja2dyb3VuZCByb3VuZGVkLTJ4bCBtdC00Jz48L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naC04IGJnLWJhY2tncm91bmQgcm91bmRlZC0yeGwgbXQtNCc+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2gtOCBiZy1iYWNrZ3JvdW5kIHJvdW5kZWQtMnhsIG10LTQnPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoLTggYmctYmFja2dyb3VuZCByb3VuZGVkLTJ4bCBtdC00Jz48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy1mdWxsIGdyaWQgZ3JpZC1jb2xzLTRmciBnYXAtOCBib3JkZXItci02IHJvdW5kZWQtMnhsIGJnLXdoaXRlIG10LTggbWItOCBkYXJrOmJnLWJhY2tncm91bmQgcC04IHRleHQtY2VudGVyJz5cclxuICAgICAgICAgIHsvKiA8SW1hZ2Ugc3JjPScvbG9hZGluZy9sb2FkaW5nLnN2Zycgd2lkdGg9ezE1MH0gaGVpZ2h0PXsxOTV9IGNsYXNzTmFtZT0ncC02JyAvPiAqL31cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzaGFkb3cgcm91bmRlZC0yeGwgZmxleCBmbGV4LXdyYXAganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGZsZXgtY29sJz5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogJzQ4NnB4JyB9fVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0ncmVsYXRpdmUgaW5saW5lLWJsb2NrIHRleHQtcmlnaHQgdy00LzUgcHktOCdcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxJbWFnZSBzcmM9Jy9sb2FkaW5nL2xvYWRpbmcuc3ZnJyB3aWR0aD17MTUwfSBoZWlnaHQ9ezE5NX0gLz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naC04IGJnLWJhY2tncm91bmQgcm91bmRlZC0yeGwgbXQtMic+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2gtOCBiZy1iYWNrZ3JvdW5kIHJvdW5kZWQtMnhsIG10LTQnPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoLTggYmctYmFja2dyb3VuZCByb3VuZGVkLTJ4bCBtdC00Jz48L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naC04IGJnLWJhY2tncm91bmQgcm91bmRlZC0yeGwgbXQtNCc+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2gtOCBiZy1iYWNrZ3JvdW5kIHJvdW5kZWQtMnhsIG10LTQnPjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NoYWRvdyByb3VuZGVkLTJ4bCBmbGV4IGZsZXgtd3JhcCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgZmxleC1jb2wnPlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiAnNDg2cHgnIH19XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdyZWxhdGl2ZSBpbmxpbmUtYmxvY2sgdGV4dC1yaWdodCB3LTQvNSBweS04J1xyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPEltYWdlIHNyYz0nL2xvYWRpbmcvbG9hZGluZy5zdmcnIHdpZHRoPXsxNTB9IGhlaWdodD17MTk1fSAvPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoLTggYmctYmFja2dyb3VuZCByb3VuZGVkLTJ4bCBtdC0yJz48L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naC04IGJnLWJhY2tncm91bmQgcm91bmRlZC0yeGwgbXQtNCc+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2gtOCBiZy1iYWNrZ3JvdW5kIHJvdW5kZWQtMnhsIG10LTQnPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoLTggYmctYmFja2dyb3VuZCByb3VuZGVkLTJ4bCBtdC00Jz48L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naC04IGJnLWJhY2tncm91bmQgcm91bmRlZC0yeGwgbXQtNCc+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2hhZG93IHJvdW5kZWQtMnhsIGZsZXggZmxleC13cmFwIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBmbGV4LWNvbCc+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6ICc0ODZweCcgfX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9J3JlbGF0aXZlIGlubGluZS1ibG9jayB0ZXh0LXJpZ2h0IHctNC81IHB5LTgnXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPScvbG9hZGluZy9sb2FkaW5nLnN2Zycgd2lkdGg9ezE1MH0gaGVpZ2h0PXsxOTV9IC8+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2gtOCBiZy1iYWNrZ3JvdW5kIHJvdW5kZWQtMnhsIG10LTInPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoLTggYmctYmFja2dyb3VuZCByb3VuZGVkLTJ4bCBtdC00Jz48L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naC04IGJnLWJhY2tncm91bmQgcm91bmRlZC0yeGwgbXQtNCc+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2gtOCBiZy1iYWNrZ3JvdW5kIHJvdW5kZWQtMnhsIG10LTQnPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoLTggYmctYmFja2dyb3VuZCByb3VuZGVkLTJ4bCBtdC00Jz48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzaGFkb3cgcm91bmRlZC0yeGwgZmxleCBmbGV4LXdyYXAganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGZsZXgtY29sJz5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogJzQ4NnB4JyB9fVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0ncmVsYXRpdmUgaW5saW5lLWJsb2NrIHRleHQtcmlnaHQgdy00LzUgcHktOCdcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxJbWFnZSBzcmM9Jy9sb2FkaW5nL2xvYWRpbmcuc3ZnJyB3aWR0aD17MTUwfSBoZWlnaHQ9ezE5NX0gLz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naC04IGJnLWJhY2tncm91bmQgcm91bmRlZC0yeGwgbXQtMic+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2gtOCBiZy1iYWNrZ3JvdW5kIHJvdW5kZWQtMnhsIG10LTQnPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoLTggYmctYmFja2dyb3VuZCByb3VuZGVkLTJ4bCBtdC00Jz48L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naC04IGJnLWJhY2tncm91bmQgcm91bmRlZC0yeGwgbXQtNCc+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2gtOCBiZy1iYWNrZ3JvdW5kIHJvdW5kZWQtMnhsIG10LTQnPjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxuXHJcbiAgLy8gaWYgKHdpbmRvdy5zY3JlZW4ud2lkdGggPiAxNTM2KSB7XHJcbiAgLy8gICByZXR1cm4gKFxyXG4gIC8vICAgICA8ZGl2IGNsYXNzTmFtZT0ndy1mdWxsIGdyaWQgZ3JpZC1jb2xzLTNmciBnYXAtOCBib3JkZXItci02IHJvdW5kZWQtMnhsIGJnLXdoaXRlIG10LTggbWItOCBkYXJrOmJnLWJhY2tncm91bmQgcC04IHRleHQtY2VudGVyJz5cclxuICAvLyAgICAgICB7LyogPEltYWdlIHNyYz0nL2xvYWRpbmcvbG9hZGluZy5zdmcnIHdpZHRoPXsxNTB9IGhlaWdodD17MTk1fSBjbGFzc05hbWU9J3AtNicgLz4gKi99XHJcbiAgLy8gICAgICAgPGRpdiBjbGFzc05hbWU9J3NoYWRvdyByb3VuZGVkLTJ4bCBmbGV4IGZsZXgtd3JhcCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgZmxleC1jb2wnPlxyXG4gIC8vICAgICAgICAgPGRpdlxyXG4gIC8vICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6ICc0ODZweCcgfX1cclxuICAvLyAgICAgICAgICAgY2xhc3NOYW1lPSdyZWxhdGl2ZSBpbmxpbmUtYmxvY2sgdGV4dC1yaWdodCB3LTQvNSBweS04J1xyXG4gIC8vICAgICAgICAgPlxyXG4gIC8vICAgICAgICAgICA8SW1hZ2Ugc3JjPScvbG9hZGluZy9sb2FkaW5nLnN2Zycgd2lkdGg9ezE1MH0gaGVpZ2h0PXsxOTV9IC8+XHJcbiAgLy8gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoLTggYmctYmFja2dyb3VuZCByb3VuZGVkLTJ4bCBtdC0yJz48L2Rpdj5cclxuICAvLyAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2gtOCBiZy1iYWNrZ3JvdW5kIHJvdW5kZWQtMnhsIG10LTQnPjwvZGl2PlxyXG4gIC8vICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naC04IGJnLWJhY2tncm91bmQgcm91bmRlZC0yeGwgbXQtNCc+PC9kaXY+XHJcbiAgLy8gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoLTggYmctYmFja2dyb3VuZCByb3VuZGVkLTJ4bCBtdC00Jz48L2Rpdj5cclxuICAvLyAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2gtOCBiZy1iYWNrZ3JvdW5kIHJvdW5kZWQtMnhsIG10LTQnPjwvZGl2PlxyXG4gIC8vICAgICAgICAgPC9kaXY+XHJcbiAgLy8gICAgICAgPC9kaXY+XHJcbiAgLy8gICAgICAgPGRpdiBjbGFzc05hbWU9J3NoYWRvdyByb3VuZGVkLTJ4bCBmbGV4IGZsZXgtd3JhcCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgZmxleC1jb2wnPlxyXG4gIC8vICAgICAgICAgPGRpdlxyXG4gIC8vICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6ICc0ODZweCcgfX1cclxuICAvLyAgICAgICAgICAgY2xhc3NOYW1lPSdyZWxhdGl2ZSBpbmxpbmUtYmxvY2sgdGV4dC1yaWdodCB3LTQvNSBweS04J1xyXG4gIC8vICAgICAgICAgPlxyXG4gIC8vICAgICAgICAgICA8SW1hZ2Ugc3JjPScvbG9hZGluZy9sb2FkaW5nLnN2Zycgd2lkdGg9ezE1MH0gaGVpZ2h0PXsxOTV9IC8+XHJcbiAgLy8gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoLTggYmctYmFja2dyb3VuZCByb3VuZGVkLTJ4bCBtdC0yJz48L2Rpdj5cclxuICAvLyAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2gtOCBiZy1iYWNrZ3JvdW5kIHJvdW5kZWQtMnhsIG10LTQnPjwvZGl2PlxyXG4gIC8vICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naC04IGJnLWJhY2tncm91bmQgcm91bmRlZC0yeGwgbXQtNCc+PC9kaXY+XHJcbiAgLy8gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoLTggYmctYmFja2dyb3VuZCByb3VuZGVkLTJ4bCBtdC00Jz48L2Rpdj5cclxuICAvLyAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2gtOCBiZy1iYWNrZ3JvdW5kIHJvdW5kZWQtMnhsIG10LTQnPjwvZGl2PlxyXG4gIC8vICAgICAgICAgPC9kaXY+XHJcbiAgLy8gICAgICAgPC9kaXY+XHJcbiAgLy8gICAgICAgPGRpdiBjbGFzc05hbWU9J3NoYWRvdyByb3VuZGVkLTJ4bCBmbGV4IGZsZXgtd3JhcCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgZmxleC1jb2wnPlxyXG4gIC8vICAgICAgICAgPGRpdlxyXG4gIC8vICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6ICc0ODZweCcgfX1cclxuICAvLyAgICAgICAgICAgY2xhc3NOYW1lPSdyZWxhdGl2ZSBpbmxpbmUtYmxvY2sgdGV4dC1yaWdodCB3LTQvNSBweS04J1xyXG4gIC8vICAgICAgICAgPlxyXG4gIC8vICAgICAgICAgICA8SW1hZ2Ugc3JjPScvbG9hZGluZy9sb2FkaW5nLnN2Zycgd2lkdGg9ezE1MH0gaGVpZ2h0PXsxOTV9IC8+XHJcbiAgLy8gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoLTggYmctYmFja2dyb3VuZCByb3VuZGVkLTJ4bCBtdC0yJz48L2Rpdj5cclxuICAvLyAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2gtOCBiZy1iYWNrZ3JvdW5kIHJvdW5kZWQtMnhsIG10LTQnPjwvZGl2PlxyXG4gIC8vICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naC04IGJnLWJhY2tncm91bmQgcm91bmRlZC0yeGwgbXQtNCc+PC9kaXY+XHJcbiAgLy8gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoLTggYmctYmFja2dyb3VuZCByb3VuZGVkLTJ4bCBtdC00Jz48L2Rpdj5cclxuICAvLyAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2gtOCBiZy1iYWNrZ3JvdW5kIHJvdW5kZWQtMnhsIG10LTQnPjwvZGl2PlxyXG4gIC8vICAgICAgICAgPC9kaXY+XHJcbiAgLy8gICAgICAgPC9kaXY+XHJcbiAgLy8gICAgIDwvZGl2PlxyXG4gIC8vICAgKTtcclxuICAvLyB9IGVsc2Uge1xyXG4gIC8vICAgcmV0dXJuIChcclxuICAvLyAgICAgPGRpdiBjbGFzc05hbWU9J3ctZnVsbCBncmlkIGdyaWQtY29scy00ZnIgZ2FwLTggYm9yZGVyLXItNiByb3VuZGVkLTJ4bCBiZy13aGl0ZSBtdC04IG1iLTggZGFyazpiZy1iYWNrZ3JvdW5kIHAtOCB0ZXh0LWNlbnRlcic+XHJcbiAgLy8gICAgICAgey8qIDxJbWFnZSBzcmM9Jy9sb2FkaW5nL2xvYWRpbmcuc3ZnJyB3aWR0aD17MTUwfSBoZWlnaHQ9ezE5NX0gY2xhc3NOYW1lPSdwLTYnIC8+ICovfVxyXG4gIC8vICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzaGFkb3cgcm91bmRlZC0yeGwgZmxleCBmbGV4LXdyYXAganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGZsZXgtY29sJz5cclxuICAvLyAgICAgICAgIDxkaXZcclxuICAvLyAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiAnNDg2cHgnIH19XHJcbiAgLy8gICAgICAgICAgIGNsYXNzTmFtZT0ncmVsYXRpdmUgaW5saW5lLWJsb2NrIHRleHQtcmlnaHQgdy00LzUgcHktOCdcclxuICAvLyAgICAgICAgID5cclxuICAvLyAgICAgICAgICAgPEltYWdlIHNyYz0nL2xvYWRpbmcvbG9hZGluZy5zdmcnIHdpZHRoPXsxNTB9IGhlaWdodD17MTk1fSAvPlxyXG4gIC8vICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naC04IGJnLWJhY2tncm91bmQgcm91bmRlZC0yeGwgbXQtMic+PC9kaXY+XHJcbiAgLy8gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoLTggYmctYmFja2dyb3VuZCByb3VuZGVkLTJ4bCBtdC00Jz48L2Rpdj5cclxuICAvLyAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2gtOCBiZy1iYWNrZ3JvdW5kIHJvdW5kZWQtMnhsIG10LTQnPjwvZGl2PlxyXG4gIC8vICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naC04IGJnLWJhY2tncm91bmQgcm91bmRlZC0yeGwgbXQtNCc+PC9kaXY+XHJcbiAgLy8gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoLTggYmctYmFja2dyb3VuZCByb3VuZGVkLTJ4bCBtdC00Jz48L2Rpdj5cclxuICAvLyAgICAgICAgIDwvZGl2PlxyXG4gIC8vICAgICAgIDwvZGl2PlxyXG4gIC8vICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzaGFkb3cgcm91bmRlZC0yeGwgZmxleCBmbGV4LXdyYXAganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGZsZXgtY29sJz5cclxuICAvLyAgICAgICAgIDxkaXZcclxuICAvLyAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiAnNDg2cHgnIH19XHJcbiAgLy8gICAgICAgICAgIGNsYXNzTmFtZT0ncmVsYXRpdmUgaW5saW5lLWJsb2NrIHRleHQtcmlnaHQgdy00LzUgcHktOCdcclxuICAvLyAgICAgICAgID5cclxuICAvLyAgICAgICAgICAgPEltYWdlIHNyYz0nL2xvYWRpbmcvbG9hZGluZy5zdmcnIHdpZHRoPXsxNTB9IGhlaWdodD17MTk1fSAvPlxyXG4gIC8vICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naC04IGJnLWJhY2tncm91bmQgcm91bmRlZC0yeGwgbXQtMic+PC9kaXY+XHJcbiAgLy8gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoLTggYmctYmFja2dyb3VuZCByb3VuZGVkLTJ4bCBtdC00Jz48L2Rpdj5cclxuICAvLyAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2gtOCBiZy1iYWNrZ3JvdW5kIHJvdW5kZWQtMnhsIG10LTQnPjwvZGl2PlxyXG4gIC8vICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naC04IGJnLWJhY2tncm91bmQgcm91bmRlZC0yeGwgbXQtNCc+PC9kaXY+XHJcbiAgLy8gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoLTggYmctYmFja2dyb3VuZCByb3VuZGVkLTJ4bCBtdC00Jz48L2Rpdj5cclxuICAvLyAgICAgICAgIDwvZGl2PlxyXG4gIC8vICAgICAgIDwvZGl2PlxyXG4gIC8vICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzaGFkb3cgcm91bmRlZC0yeGwgZmxleCBmbGV4LXdyYXAganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGZsZXgtY29sJz5cclxuICAvLyAgICAgICAgIDxkaXZcclxuICAvLyAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiAnNDg2cHgnIH19XHJcbiAgLy8gICAgICAgICAgIGNsYXNzTmFtZT0ncmVsYXRpdmUgaW5saW5lLWJsb2NrIHRleHQtcmlnaHQgdy00LzUgcHktOCdcclxuICAvLyAgICAgICAgID5cclxuICAvLyAgICAgICAgICAgPEltYWdlIHNyYz0nL2xvYWRpbmcvbG9hZGluZy5zdmcnIHdpZHRoPXsxNTB9IGhlaWdodD17MTk1fSAvPlxyXG4gIC8vICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naC04IGJnLWJhY2tncm91bmQgcm91bmRlZC0yeGwgbXQtMic+PC9kaXY+XHJcbiAgLy8gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoLTggYmctYmFja2dyb3VuZCByb3VuZGVkLTJ4bCBtdC00Jz48L2Rpdj5cclxuICAvLyAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2gtOCBiZy1iYWNrZ3JvdW5kIHJvdW5kZWQtMnhsIG10LTQnPjwvZGl2PlxyXG4gIC8vICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naC04IGJnLWJhY2tncm91bmQgcm91bmRlZC0yeGwgbXQtNCc+PC9kaXY+XHJcbiAgLy8gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoLTggYmctYmFja2dyb3VuZCByb3VuZGVkLTJ4bCBtdC00Jz48L2Rpdj5cclxuICAvLyAgICAgICAgIDwvZGl2PlxyXG4gIC8vICAgICAgIDwvZGl2PlxyXG4gIC8vICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzaGFkb3cgcm91bmRlZC0yeGwgZmxleCBmbGV4LXdyYXAganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGZsZXgtY29sJz5cclxuICAvLyAgICAgICAgIDxkaXZcclxuICAvLyAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiAnNDg2cHgnIH19XHJcbiAgLy8gICAgICAgICAgIGNsYXNzTmFtZT0ncmVsYXRpdmUgaW5saW5lLWJsb2NrIHRleHQtcmlnaHQgdy00LzUgcHktOCdcclxuICAvLyAgICAgICAgID5cclxuICAvLyAgICAgICAgICAgPEltYWdlIHNyYz0nL2xvYWRpbmcvbG9hZGluZy5zdmcnIHdpZHRoPXsxNTB9IGhlaWdodD17MTk1fSAvPlxyXG4gIC8vICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naC04IGJnLWJhY2tncm91bmQgcm91bmRlZC0yeGwgbXQtMic+PC9kaXY+XHJcbiAgLy8gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoLTggYmctYmFja2dyb3VuZCByb3VuZGVkLTJ4bCBtdC00Jz48L2Rpdj5cclxuICAvLyAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2gtOCBiZy1iYWNrZ3JvdW5kIHJvdW5kZWQtMnhsIG10LTQnPjwvZGl2PlxyXG4gIC8vICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naC04IGJnLWJhY2tncm91bmQgcm91bmRlZC0yeGwgbXQtNCc+PC9kaXY+XHJcbiAgLy8gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoLTggYmctYmFja2dyb3VuZCByb3VuZGVkLTJ4bCBtdC00Jz48L2Rpdj5cclxuICAvLyAgICAgICAgIDwvZGl2PlxyXG4gIC8vICAgICAgIDwvZGl2PlxyXG4gIC8vICAgICA8L2Rpdj5cclxuICAvLyAgICk7XHJcbiAgLy8gfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RhcnR1cFNrZWxldG9uO1xyXG4iLCJpbXBvcnQgZmlyZWJhc2UgZnJvbSAnLi9maXJlYmFzZS5qcyc7XHJcbmltcG9ydCB7IGRiIH0gZnJvbSAnLi9maXJlYmFzZSc7XHJcbmltcG9ydCBnZXRTdHJpcGUgZnJvbSAnLi9zdHJpcGUuanMnO1xyXG5cclxuY29uc3QgZmlyZXN0b3JlID0gZmlyZWJhc2UuZmlyZXN0b3JlKCk7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0QWxsUHJvamVjdHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3Qgc25hcHNob3QgPSBhd2FpdCBmaXJlc3RvcmUuY29sbGVjdGlvbigncHJvamVjdHMnKS5nZXQoKTtcclxuXHJcbiAgY29uc3QgcHJvamVjdHMgPSBbXTtcclxuICBzbmFwc2hvdC5mb3JFYWNoKChkb2MpID0+IHtcclxuICAgIHByb2plY3RzLnB1c2goeyBpZDogZG9jLmlkLCAuLi5kb2MuZGF0YSgpIH0pO1xyXG4gIH0pO1xyXG5cclxuICBjb25zb2xlLmxvZyhwcm9qZWN0cyk7XHJcbiAgcmV0dXJuIHsgcHJvamVjdHMgfTtcclxufTtcclxuXHJcbi8vIENMSUVOVC1EQVRBXHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlVXNlciA9ICh1aWQsIGRhdGEpID0+IHtcclxuICByZXR1cm4gZmlyZXN0b3JlXHJcbiAgICAuY29sbGVjdGlvbigndXNlcnMnKVxyXG4gICAgLmRvYyh1aWQpXHJcbiAgICAuc2V0KHsgdWlkLCAuLi5kYXRhIH0sIHsgbWVyZ2U6IHRydWUgfSk7IC8vIG1lcmdlIHBvd29kdWplLCDFvGUga2HFvGRlIGlkIGLEmWR6aWUgdW5pa2F0b3dlXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VXNlciA9IGFzeW5jICh1aWQpID0+IHtcclxuICBjb25zdCB1c2VyID0gYXdhaXQgZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ3VzZXJzJykuZ2V0KCk7XHJcblxyXG4gIGNvbnN0IHVzZXJzID0gW107XHJcbiAgdXNlci5mb3JFYWNoKChkb2MpID0+IHtcclxuICAgIHVzZXJzLnB1c2goeyBpZDogZG9jLmlkLCAuLi5kb2MuZGF0YSgpIH0pO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4geyB1c2VycyB9O1xyXG59O1xyXG5cclxuLy8gU1RBUlRVUC1EQVRBXHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlU3RhcnR1cERhdGEgPSAoZGF0YSkgPT4ge1xyXG4gIC8vIFdzenlzdGtpZSBpbmZvcm1hY2plIHdyenVjYW15LCBhIHBvdGVtIGLEmWR6aWVteSBqZSBwb2JpZXJhbGkgZGxhIG9kcG93aWVkbmllZ28gdcW8eXRrb3duaWthXHJcbiAgcmV0dXJuIGZpcmVzdG9yZS5jb2xsZWN0aW9uKCdzdGFydHVwLWRhdGEnKS5hZGQoZGF0YSk7XHJcbn07XHJcblxyXG4vLyBQUk9KRUNUIERFTEVURVxyXG5leHBvcnQgY29uc3QgZGVsZXRlUHJvamVjdCA9IGFzeW5jIChwcm9qZWN0SWQpID0+IHtcclxuICAvLyBPTkUgUEFSVElDVUxBUiBQUk9KRUNUXHJcbiAgY29uc3Qgc25hcHNob3QgPSBhd2FpdCBmaXJlc3RvcmUuY29sbGVjdGlvbigncHJvamVjdHMnKS53aGVyZSgncHJvamVjdElkJywgJz09JywgcHJvamVjdElkKS5nZXQoKTtcclxuXHJcbiAgY29uc3QgYmF0Y2ggPSBmaXJlc3RvcmUuYmF0Y2goKTtcclxuICBjb25zb2xlLmxvZyhiYXRjaCk7XHJcblxyXG4gIHNuYXBzaG90LmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgYmF0Y2guZGVsZXRlKGRvYy5yZWYpO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gYmF0Y2guY29tbWl0KCk7XHJcbn07XHJcblxyXG4vLyBTVFJJUEVcclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVDaGVja291dFNlc3Npb24gPSBhc3luYyAodWlkKSA9PiB7XHJcbiAgY29uc3QgY2hlY2tvdXRTZXNzaW9uUmVmID0gYXdhaXQgZGJcclxuICAgIC5jb2xsZWN0aW9uKCd1c2VycycpXHJcbiAgICAuZG9jKHVpZCkgLy8gVE8gSkVTVCBETyBaTUlBTlkgWiBQT0RTVEFXT1dFSiBURU1QTEFUS0lcclxuICAgIC5jb2xsZWN0aW9uKCdjaGVja291dF9zZXNzaW9ucycpXHJcbiAgICAuYWRkKHtcclxuICAgICAgcHJpY2U6ICdwcmljZV8xSVZKak5CZFhQdEthak5IdnM0RnBiUjcnLCAvLyBUTyBKRVNUIERPIFpNSUFOWSBaIFBPRFNUQVdPV0VKIFRFTVBMQVRLSVxyXG4gICAgICBzdWNjZXNzX3VybDogYCR7d2luZG93LmxvY2F0aW9uLm9yaWdpbn0vZGFzaGJvYXJkL2FjY291bnRgLFxyXG4gICAgICBjYW5jZWxfdXJsOiBgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufS9kYXNoYm9hcmQvYWNjb3VudGAsXHJcbiAgICB9KTtcclxuICAvLyBXYWl0IGZvciB0aGUgQ2hlY2tvdXRTZXNzaW9uIHRvIGdldCBhdHRhY2hlZCBieSB0aGUgZXh0ZW5zaW9uXHJcbiAgY2hlY2tvdXRTZXNzaW9uUmVmLm9uU25hcHNob3QoYXN5bmMgKHNuYXApID0+IHtcclxuICAgIC8vIFRPIEpFU1QgRE8gWk1JQU5ZIFogUE9EU1RBV09XRUogVEVNUExBVEtJICh0dXRhaiBkb2RhamVteSB0eWxrbyBzxYLDs3drbyBhc3luYylcclxuICAgIGNvbnN0IHsgZXJyb3IsIHNlc3Npb25JZCB9ID0gc25hcC5kYXRhKCk7XHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgLy8gU2hvdyBhbiBlcnJvciB0byB5b3VyIGN1c3RvbWVyIGFuZFxyXG4gICAgICAvLyBpbnNwZWN0IHlvdXIgQ2xvdWQgRnVuY3Rpb24gbG9ncyBpbiB0aGUgRmlyZWJhc2UgY29uc29sZS5cclxuICAgICAgYWxlcnQoYEFuIGVycm9yIG9jY3VyZWQ6ICR7ZXJyb3IubWVzc2FnZX1gKTtcclxuICAgIH1cclxuICAgIGlmIChzZXNzaW9uSWQpIHtcclxuICAgICAgLy8gV2UgaGF2ZSBhIHNlc3Npb24sIGxldCdzIHJlZGlyZWN0IHRvIENoZWNrb3V0XHJcbiAgICAgIC8vIEluaXQgU3RyaXBlXHJcbiAgICAgIGNvbnN0IHN0cmlwZSA9IGF3YWl0IGdldFN0cmlwZSgpOyAvLyBUTyBKRVNUIERPIFpNSUFOWSBaIFBPRFNUQVdPV0VKIFRFTVBMQVRLSSAoZnVua2NqYSBnZXRTdHJpcGUgdyBwbGlrdSBzdHJpcGUuanMpXHJcbiAgICAgIHN0cmlwZS5yZWRpcmVjdFRvQ2hlY2tvdXQoeyBzZXNzaW9uSWQgfSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn07XHJcblxyXG4vLyAkMjkuOTkgZm9yIDEwIHVuaXRzXHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlQ2hlY2tvdXRTZXNzaW9uMTAgPSBhc3luYyAodWlkKSA9PiB7XHJcbiAgY29uc3QgY2hlY2tvdXRTZXNzaW9uUmVmID0gYXdhaXQgZGJcclxuICAgIC5jb2xsZWN0aW9uKCd1c2VycycpXHJcbiAgICAuZG9jKHVpZCkgLy8gVE8gSkVTVCBETyBaTUlBTlkgWiBQT0RTVEFXT1dFSiBURU1QTEFUS0lcclxuICAgIC5jb2xsZWN0aW9uKCdjaGVja291dF9zZXNzaW9ucycpXHJcbiAgICAuYWRkKHtcclxuICAgICAgcHJpY2U6ICdwcmljZV8xSVZnVW1CZFhQdEthak5INFZWd2w2ZHcnLCAvLyBUTyBKRVNUIERPIFpNSUFOWSBaIFBPRFNUQVdPV0VKIFRFTVBMQVRLSVxyXG4gICAgICBzdWNjZXNzX3VybDogYCR7d2luZG93LmxvY2F0aW9uLm9yaWdpbn0vZGFzaGJvYXJkL2FjY291bnRgLFxyXG4gICAgICBjYW5jZWxfdXJsOiBgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufS9kYXNoYm9hcmQvYWNjb3VudGAsXHJcbiAgICB9KTtcclxuICAvLyBXYWl0IGZvciB0aGUgQ2hlY2tvdXRTZXNzaW9uIHRvIGdldCBhdHRhY2hlZCBieSB0aGUgZXh0ZW5zaW9uXHJcbiAgY2hlY2tvdXRTZXNzaW9uUmVmLm9uU25hcHNob3QoYXN5bmMgKHNuYXApID0+IHtcclxuICAgIC8vIFRPIEpFU1QgRE8gWk1JQU5ZIFogUE9EU1RBV09XRUogVEVNUExBVEtJICh0dXRhaiBkb2RhamVteSB0eWxrbyBzxYLDs3drbyBhc3luYylcclxuICAgIGNvbnN0IHsgZXJyb3IsIHNlc3Npb25JZCB9ID0gc25hcC5kYXRhKCk7XHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgLy8gU2hvdyBhbiBlcnJvciB0byB5b3VyIGN1c3RvbWVyIGFuZFxyXG4gICAgICAvLyBpbnNwZWN0IHlvdXIgQ2xvdWQgRnVuY3Rpb24gbG9ncyBpbiB0aGUgRmlyZWJhc2UgY29uc29sZS5cclxuICAgICAgYWxlcnQoYEFuIGVycm9yIG9jY3VyZWQ6ICR7ZXJyb3IubWVzc2FnZX1gKTtcclxuICAgIH1cclxuICAgIGlmIChzZXNzaW9uSWQpIHtcclxuICAgICAgLy8gV2UgaGF2ZSBhIHNlc3Npb24sIGxldCdzIHJlZGlyZWN0IHRvIENoZWNrb3V0XHJcbiAgICAgIC8vIEluaXQgU3RyaXBlXHJcbiAgICAgIGNvbnN0IHN0cmlwZSA9IGF3YWl0IGdldFN0cmlwZSgpOyAvLyBUTyBKRVNUIERPIFpNSUFOWSBaIFBPRFNUQVdPV0VKIFRFTVBMQVRLSSAoZnVua2NqYSBnZXRTdHJpcGUgdyBwbGlrdSBzdHJpcGUuanMpXHJcbiAgICAgIHN0cmlwZS5yZWRpcmVjdFRvQ2hlY2tvdXQoeyBzZXNzaW9uSWQgfSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ29Ub0JpbGxpbmdQb3J0YWwgPSBhc3luYyAoKSA9PiB7XHJcbiAgLy8gRG8gdGVqIGZ1bmtjamkgbXVzaW15IHphaW1wb3J0b3dhxIcgZmlyZWJhc2UvZnVuY3Rpb25zIHcgcGxpa3UgZmlyZWJhc2UuanNcclxuICBjb25zdCBmdW5jdGlvblJlZiA9IGZpcmViYXNlLmFwcCgpLmZ1bmN0aW9ucygndXMtY2VudHJhbDEnKS5odHRwc0NhbGxhYmxlKCdleHQtZmlyZXN0b3JlLXN0cmlwZS1zdWJzY3JpcHRpb25zLWNyZWF0ZVBvcnRhbExpbmsnKTtcclxuICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGZ1bmN0aW9uUmVmKHtcclxuICAgIHJldHVyblVybDogYCR7d2luZG93LmxvY2F0aW9uLm9yaWdpbn0vZGFzaGJvYXJkL2FjY291bnRgLFxyXG4gIH0pO1xyXG4gIHdpbmRvdy5sb2NhdGlvbi5hc3NpZ24oZGF0YS51cmwpO1xyXG59O1xyXG5cclxuLy8gZXhwb3J0IGNvbnN0IGdldEN1cnJlbnRQbGFuID0gYXN5bmMgKCkgPT4ge1xyXG4vLyAgIGNvbnN0IGRlY29kZWRUb2tlbiA9IGF3YWl0IGZpcmViYXNlLmF1dGgoKS5jdXJyZW50VXNlci5nZXRJZFRva2VuUmVzdWx0KCk7XHJcbi8vICAgLy8gY29uc29sZS5sb2coZGVjb2RlZFRva2VuLmNsYWltcy5zdHJpcGVSb2xlKTsgLy8gVE8gUE9LQVpVSkUgQUtUVUFMTlkgUExBTiBaQUxPR09XQU5FR08gVcW7WVRLT1dOSUtBIE5QLiBCQVNJQyAvIFBSRU1JVU1cclxuLy8gICByZXR1cm4gZGVjb2RlZFRva2VuLmNsYWltcy5zdHJpcGVSb2xlO1xyXG4vLyB9O1xyXG4iLCJpbXBvcnQgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UvYXBwJztcclxuaW1wb3J0ICdmaXJlYmFzZS9hdXRoJztcclxuaW1wb3J0ICdmaXJlYmFzZS9maXJlc3RvcmUnO1xyXG5pbXBvcnQgJ2ZpcmViYXNlL3N0b3JhZ2UnO1xyXG5pbXBvcnQgJ2ZpcmViYXNlL2Z1bmN0aW9ucyc7XHJcblxyXG5pZiAoIWZpcmViYXNlLmFwcHMubGVuZ3RoKSB7XHJcbiAgZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcCh7XHJcbiAgICAvLyBhcGlLZXk6ICdBSXphU3lDeF9UMERxaXhMM0FYX1FMbC1qOFhEeWdHcDkxQy0zLVEnLFxyXG4gICAgLy8gYXV0aERvbWFpbjogJ3N0YXJ0dXAtdGVzdC00ZDYyNS5maXJlYmFzZWFwcC5jb20nLFxyXG4gICAgLy8gcHJvamVjdElkOiAnc3RhcnR1cC10ZXN0LTRkNjI1JyxcclxuICAgIC8vIHN0b3JhZ2VCdWNrZXQ6ICdzdGFydHVwLXRlc3QtNGQ2MjUuYXBwc3BvdC5jb20nLFxyXG4gICAgLy8gbWVzc2FnaW5nU2VuZGVySWQ6ICc0NzI0MTYxNTAyNDAnLFxyXG4gICAgLy8gYXBwSWQ6ICcxOjQ3MjQxNjE1MDI0MDp3ZWI6YjJhMTI4YWQyN2FmZmZkZGYzZTY4NScsXHJcbiAgICBhcGlLZXk6ICdBSXphU3lCT1NmdUFmN1ZBSzlZZWMyMGxHckRfNmJxNU1OUm05c0UnLFxyXG4gICAgYXV0aERvbWFpbjogJ3NhYXMtc3RhcnR1cC1hNWEzNC5maXJlYmFzZWFwcC5jb20nLFxyXG4gICAgcHJvamVjdElkOiAnc2Fhcy1zdGFydHVwLWE1YTM0JyxcclxuICAgIHN0b3JhZ2VCdWNrZXQ6ICdzYWFzLXN0YXJ0dXAtYTVhMzQuYXBwc3BvdC5jb20nLFxyXG4gICAgbWVzc2FnaW5nU2VuZGVySWQ6ICc4NjQyMTc1NzQ2MjUnLFxyXG4gICAgYXBwSWQ6ICcxOjg2NDIxNzU3NDYyNTp3ZWI6MTljZjU5MDEwOWVmNTBkZDkzNWJhMCcsXHJcbiAgICBtZWFzdXJlbWVudElkOiAnRy1RS1pKUFRLTVM0JyxcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZmlyZWJhc2U7XHJcbmV4cG9ydCBjb25zdCBhdXRoID0gZmlyZWJhc2UuYXV0aCgpO1xyXG5leHBvcnQgY29uc3QgZGIgPSBmaXJlYmFzZS5maXJlc3RvcmUoKTtcclxuZXhwb3J0IGNvbnN0IHN0b3JhZ2UgPSBmaXJlYmFzZS5zdG9yYWdlKCk7XHJcbiIsImltcG9ydCBmaXJlYmFzZSwgeyBhdXRoLCBkYiB9IGZyb20gJy4uL2xpYi9maXJlYmFzZSc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCBjcmVhdGVDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5leHBvcnQgY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7IC8vIFR1dGFqIG1vxbxuYSB1bWllxZtjacSHIGRlZmF1bHQgVmFsdWVcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VBdXRoID0gKCkgPT4ge1xyXG4gIHJldHVybiB1c2VDb250ZXh0KEF1dGhDb250ZXh0KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBBdXRoUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgW2N1cnJlbnRVc2VyLCBzZXRDdXJyZW50VXNlcl0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICBjb25zdCBoYW5kbGVVc2VyID0gYXN5bmMgKHVzZXIpID0+IHtcclxuICAgIGlmICh1c2VyKSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKCd1c2VyIC0gJywgdXNlcik7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKCd1c2VyIG5hbWUgLSAnLCBuYW1lKTtcclxuICAgICAgY29uc3QgZm9ybWF0ZWRVc2VyID0gYXdhaXQgZm9ybWF0VXNlcih1c2VyKTtcclxuXHJcbiAgICAgIC8vIGNvbnN0IGRlY29kZWRUb2tlbiA9IGF3YWl0IGZpcmViYXNlLmF1dGgoKS5jdXJyZW50VXNlci5nZXRJZFRva2VuUmVzdWx0KCk7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGRlY29kZWRUb2tlbi5jbGFpbXMuc3RyaXBlUm9sZSk7XHJcblxyXG4gICAgICBkYi5jb2xsZWN0aW9uKCd1c2VycycpLmRvYyh1c2VyLnVpZCkuc2V0KHsgZm9ybWF0ZWRVc2VyIH0sIHsgbWVyZ2U6IHRydWUgfSk7XHJcblxyXG4gICAgICBzZXRDdXJyZW50VXNlcihmb3JtYXRlZFVzZXIpO1xyXG4gICAgICAvLyBDb29raWVzLnNldCgndG9rZW4nLCB1c2VyLnphLCB0cnVlKTtcclxuICAgICAgQ29va2llcy5zZXQoJ3VpZCcsIHVzZXIudWlkKTtcclxuXHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICByZXR1cm4gZm9ybWF0ZWRVc2VyO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0Q3VycmVudFVzZXIoZmFsc2UpO1xyXG4gICAgICAvLyBDb29raWVzLnJlbW92ZSgndG9rZW4nLCB1c2VyLnphKTtcclxuICAgICAgQ29va2llcy5yZW1vdmUoJ3VpZCcpO1xyXG5cclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBzaWduVXAgPSBhc3luYyAoZW1haWwsIHBhc3N3b3JkKSA9PiB7XHJcbiAgICByZXR1cm4gYXdhaXQgYXV0aC5jcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gaGFuZGxlVXNlcihyZXNwb25zZS51c2VyKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGxvZ0luID0gKGVtYWlsLCBwYXNzd29yZCkgPT4ge1xyXG4gICAgcmV0dXJuIGF1dGguc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBsb2dPdXQgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gYXV0aC5zaWduT3V0KCk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHVuc3Vic2NyaWJlID0gYXV0aC5vbklkVG9rZW5DaGFuZ2VkKGhhbmRsZVVzZXIpO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB1bnN1YnNjcmliZSgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgdmFsdWUgPSB7XHJcbiAgICBjdXJyZW50VXNlcixcclxuICAgIHNpZ25VcCxcclxuICAgIGxvZ0luLFxyXG4gICAgbG9nT3V0LFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldFN0cmlwZVJvbGUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBhd2FpdCBmaXJlYmFzZS5hdXRoKCkuY3VycmVudFVzZXIuZ2V0SWRUb2tlbih0cnVlKTtcclxuICAgIGNvbnN0IGRlY29kZWRUb2tlbiA9IGF3YWl0IGZpcmViYXNlLmF1dGgoKS5jdXJyZW50VXNlci5nZXRJZFRva2VuUmVzdWx0KCk7XHJcbiAgICByZXR1cm4gZGVjb2RlZFRva2VuLmNsYWltcy5zdHJpcGVSb2xlIHx8ICdmcmVlJztcclxuICB9O1xyXG5cclxuICBjb25zdCBmb3JtYXRVc2VyID0gYXN5bmMgKHVzZXIpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdPRkYgLSAnLCB1c2VyKTtcclxuICAgIGNvbnN0IHRva2VuID0gYXdhaXQgdXNlci5nZXRJZFRva2VuKCk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB1aWQ6IHVzZXIudWlkLFxyXG4gICAgICBlbWFpbDogdXNlci5lbWFpbCxcclxuICAgICAgLy8gbmFtZSxcclxuICAgICAgLy8gdG9rZW46IHVzZXIuemEsIC8vIHRva2VuIEpXVCwgZ2VuZXJvd2FueSBhdXRvbWF0eWN6bmllIHByemV6IGZpcmViYXNlIHByenkgemFrxYJhZGFuaXUga29udGFcclxuICAgICAgcHJvdmlkZXI6IHVzZXIucHJvdmlkZXJEYXRhWzBdLnByb3ZpZGVySWQsXHJcbiAgICAgIHN0cmlwZVJvbGU6IGF3YWl0IGdldFN0cmlwZVJvbGUoKSxcclxuICAgICAgdG9rZW4sXHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIHJldHVybiA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3ZhbHVlfT57IWxvYWRpbmcgJiYgY2hpbGRyZW59PC9BdXRoQ29udGV4dC5Qcm92aWRlcj47XHJcbn07XHJcbiIsIi8vIE1PxbtOQSBURcW7IFdSWlVDScSGIFRPIERPIEZPTERFUlUgVVRJTFNcclxuXHJcbi8qKlxyXG4gKiBUaGlzIGlzIGEgc2luZ2xldG9uIHRvIGVuc3VyZSB3ZSBvbmx5IGluc3RhbnRpYXRlIFN0cmlwZSBvbmNlLlxyXG4gKi9cclxuIGltcG9ydCB7IFN0cmlwZSwgbG9hZFN0cmlwZSB9IGZyb20gJ0BzdHJpcGUvc3RyaXBlLWpzJztcclxuXHJcbiBsZXQgc3RyaXBlUHJvbWlzZTtcclxuIGNvbnN0IGdldFN0cmlwZSA9ICgpID0+IHtcclxuICAgaWYgKCFzdHJpcGVQcm9taXNlKSB7XHJcbiAgICAgc3RyaXBlUHJvbWlzZSA9IGxvYWRTdHJpcGUoJ3BrX3Rlc3RfNTFJVkl1Y0JkWFB0S2FqTkhnb0M2eEMxczJXUlVvcGtveElrdXhDdHV2UHJEbWhSREV5bDNCZnNXNkUyQ2dtZXJNWEtTd3BYb2pCaEFDVzl5VnhjbVZMSVEwMGJQTjFsZkRPJyk7IC8vIHcgZm9sZGVyemUgLmVudi5sb2NhbCAodGVuIGtsdWN6IGplc3QgbmEgZ8WCw7N3bmVqIHN0cm9uaWUgZGFzaGJvYXJkJ3UgbmEgc3RyaXBlKVxyXG4gICB9XHJcbiAgIHJldHVybiBzdHJpcGVQcm9taXNlO1xyXG4gfTtcclxuIFxyXG4gZXhwb3J0IGRlZmF1bHQgZ2V0U3RyaXBlOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9oZWFkJ1xuaW1wb3J0IHsgdG9CYXNlNjQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdG8tYmFzZS02NCdcbmltcG9ydCB7XG4gIEltYWdlQ29uZmlnLFxuICBpbWFnZUNvbmZpZ0RlZmF1bHQsXG4gIExvYWRlclZhbHVlLFxuICBWQUxJRF9MT0FERVJTLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9zZXJ2ZXIvaW1hZ2UtY29uZmlnJ1xuaW1wb3J0IHsgdXNlSW50ZXJzZWN0aW9uIH0gZnJvbSAnLi91c2UtaW50ZXJzZWN0aW9uJ1xuXG5pZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgOyhnbG9iYWwgYXMgYW55KS5fX05FWFRfSU1BR0VfSU1QT1JURUQgPSB0cnVlXG59XG5cbmNvbnN0IFZBTElEX0xPQURJTkdfVkFMVUVTID0gWydsYXp5JywgJ2VhZ2VyJywgdW5kZWZpbmVkXSBhcyBjb25zdFxudHlwZSBMb2FkaW5nVmFsdWUgPSB0eXBlb2YgVkFMSURfTE9BRElOR19WQUxVRVNbbnVtYmVyXVxuXG5leHBvcnQgdHlwZSBJbWFnZUxvYWRlciA9IChyZXNvbHZlclByb3BzOiBJbWFnZUxvYWRlclByb3BzKSA9PiBzdHJpbmdcblxuZXhwb3J0IHR5cGUgSW1hZ2VMb2FkZXJQcm9wcyA9IHtcbiAgc3JjOiBzdHJpbmdcbiAgd2lkdGg6IG51bWJlclxuICBxdWFsaXR5PzogbnVtYmVyXG59XG5cbnR5cGUgRGVmYXVsdEltYWdlTG9hZGVyUHJvcHMgPSBJbWFnZUxvYWRlclByb3BzICYgeyByb290OiBzdHJpbmcgfVxuXG5jb25zdCBsb2FkZXJzID0gbmV3IE1hcDxcbiAgTG9hZGVyVmFsdWUsXG4gIChwcm9wczogRGVmYXVsdEltYWdlTG9hZGVyUHJvcHMpID0+IHN0cmluZ1xuPihbXG4gIFsnaW1naXgnLCBpbWdpeExvYWRlcl0sXG4gIFsnY2xvdWRpbmFyeScsIGNsb3VkaW5hcnlMb2FkZXJdLFxuICBbJ2FrYW1haScsIGFrYW1haUxvYWRlcl0sXG4gIFsnZGVmYXVsdCcsIGRlZmF1bHRMb2FkZXJdLFxuXSlcblxuY29uc3QgVkFMSURfTEFZT1VUX1ZBTFVFUyA9IFtcbiAgJ2ZpbGwnLFxuICAnZml4ZWQnLFxuICAnaW50cmluc2ljJyxcbiAgJ3Jlc3BvbnNpdmUnLFxuICB1bmRlZmluZWQsXG5dIGFzIGNvbnN0XG50eXBlIExheW91dFZhbHVlID0gdHlwZW9mIFZBTElEX0xBWU9VVF9WQUxVRVNbbnVtYmVyXVxuXG50eXBlIEltZ0VsZW1lbnRTdHlsZSA9IE5vbk51bGxhYmxlPEpTWC5JbnRyaW5zaWNFbGVtZW50c1snaW1nJ11bJ3N0eWxlJ10+XG5cbmV4cG9ydCB0eXBlIEltYWdlUHJvcHMgPSBPbWl0PFxuICBKU1guSW50cmluc2ljRWxlbWVudHNbJ2ltZyddLFxuICAnc3JjJyB8ICdzcmNTZXQnIHwgJ3JlZicgfCAnd2lkdGgnIHwgJ2hlaWdodCcgfCAnbG9hZGluZycgfCAnc3R5bGUnXG4+ICYge1xuICBzcmM6IHN0cmluZ1xuICBsb2FkZXI/OiBJbWFnZUxvYWRlclxuICBxdWFsaXR5PzogbnVtYmVyIHwgc3RyaW5nXG4gIHByaW9yaXR5PzogYm9vbGVhblxuICBsb2FkaW5nPzogTG9hZGluZ1ZhbHVlXG4gIHVub3B0aW1pemVkPzogYm9vbGVhblxuICBvYmplY3RGaXQ/OiBJbWdFbGVtZW50U3R5bGVbJ29iamVjdEZpdCddXG4gIG9iamVjdFBvc2l0aW9uPzogSW1nRWxlbWVudFN0eWxlWydvYmplY3RQb3NpdGlvbiddXG59ICYgKFxuICAgIHwge1xuICAgICAgICB3aWR0aD86IG5ldmVyXG4gICAgICAgIGhlaWdodD86IG5ldmVyXG4gICAgICAgIC8qKiBAZGVwcmVjYXRlZCBVc2UgYGxheW91dD1cImZpbGxcImAgaW5zdGVhZCAqL1xuICAgICAgICB1bnNpemVkOiB0cnVlXG4gICAgICB9XG4gICAgfCB7IHdpZHRoPzogbmV2ZXI7IGhlaWdodD86IG5ldmVyOyBsYXlvdXQ6ICdmaWxsJyB9XG4gICAgfCB7XG4gICAgICAgIHdpZHRoOiBudW1iZXIgfCBzdHJpbmdcbiAgICAgICAgaGVpZ2h0OiBudW1iZXIgfCBzdHJpbmdcbiAgICAgICAgbGF5b3V0PzogRXhjbHVkZTxMYXlvdXRWYWx1ZSwgJ2ZpbGwnPlxuICAgICAgfVxuICApXG5cbmNvbnN0IHtcbiAgZGV2aWNlU2l6ZXM6IGNvbmZpZ0RldmljZVNpemVzLFxuICBpbWFnZVNpemVzOiBjb25maWdJbWFnZVNpemVzLFxuICBsb2FkZXI6IGNvbmZpZ0xvYWRlcixcbiAgcGF0aDogY29uZmlnUGF0aCxcbiAgZG9tYWluczogY29uZmlnRG9tYWlucyxcbn0gPVxuICAoKHByb2Nlc3MuZW52Ll9fTkVYVF9JTUFHRV9PUFRTIGFzIGFueSkgYXMgSW1hZ2VDb25maWcpIHx8IGltYWdlQ29uZmlnRGVmYXVsdFxuLy8gc29ydCBzbWFsbGVzdCB0byBsYXJnZXN0XG5jb25zdCBhbGxTaXplcyA9IFsuLi5jb25maWdEZXZpY2VTaXplcywgLi4uY29uZmlnSW1hZ2VTaXplc11cbmNvbmZpZ0RldmljZVNpemVzLnNvcnQoKGEsIGIpID0+IGEgLSBiKVxuYWxsU2l6ZXMuc29ydCgoYSwgYikgPT4gYSAtIGIpXG5cbmZ1bmN0aW9uIGdldFdpZHRocyhcbiAgd2lkdGg6IG51bWJlciB8IHVuZGVmaW5lZCxcbiAgbGF5b3V0OiBMYXlvdXRWYWx1ZSxcbiAgc2l6ZXM6IHN0cmluZyB8IHVuZGVmaW5lZFxuKTogeyB3aWR0aHM6IG51bWJlcltdOyBraW5kOiAndycgfCAneCcgfSB7XG4gIGlmIChzaXplcyAmJiAobGF5b3V0ID09PSAnZmlsbCcgfHwgbGF5b3V0ID09PSAncmVzcG9uc2l2ZScpKSB7XG4gICAgLy8gRmluZCBhbGwgdGhlIFwidndcIiBwZXJjZW50IHNpemVzIHVzZWQgaW4gdGhlIHNpemVzIHByb3BcbiAgICBjb25zdCBwZXJjZW50U2l6ZXMgPSBbLi4uc2l6ZXMubWF0Y2hBbGwoLyhefFxccykoMT9cXGQ/XFxkKXZ3L2cpXS5tYXAoKG0pID0+XG4gICAgICBwYXJzZUludChtWzJdKVxuICAgIClcbiAgICBpZiAocGVyY2VudFNpemVzLmxlbmd0aCkge1xuICAgICAgY29uc3Qgc21hbGxlc3RSYXRpbyA9IE1hdGgubWluKC4uLnBlcmNlbnRTaXplcykgKiAwLjAxXG4gICAgICByZXR1cm4ge1xuICAgICAgICB3aWR0aHM6IGFsbFNpemVzLmZpbHRlcihcbiAgICAgICAgICAocykgPT4gcyA+PSBjb25maWdEZXZpY2VTaXplc1swXSAqIHNtYWxsZXN0UmF0aW9cbiAgICAgICAgKSxcbiAgICAgICAga2luZDogJ3cnLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4geyB3aWR0aHM6IGFsbFNpemVzLCBraW5kOiAndycgfVxuICB9XG4gIGlmIChcbiAgICB0eXBlb2Ygd2lkdGggIT09ICdudW1iZXInIHx8XG4gICAgbGF5b3V0ID09PSAnZmlsbCcgfHxcbiAgICBsYXlvdXQgPT09ICdyZXNwb25zaXZlJ1xuICApIHtcbiAgICByZXR1cm4geyB3aWR0aHM6IGNvbmZpZ0RldmljZVNpemVzLCBraW5kOiAndycgfVxuICB9XG5cbiAgY29uc3Qgd2lkdGhzID0gW1xuICAgIC4uLm5ldyBTZXQoXG4gICAgICAvLyA+IFRoaXMgbWVhbnMgdGhhdCBtb3N0IE9MRUQgc2NyZWVucyB0aGF0IHNheSB0aGV5IGFyZSAzeCByZXNvbHV0aW9uLFxuICAgICAgLy8gPiBhcmUgYWN0dWFsbHkgM3ggaW4gdGhlIGdyZWVuIGNvbG9yLCBidXQgb25seSAxLjV4IGluIHRoZSByZWQgYW5kXG4gICAgICAvLyA+IGJsdWUgY29sb3JzLiBTaG93aW5nIGEgM3ggcmVzb2x1dGlvbiBpbWFnZSBpbiB0aGUgYXBwIHZzIGEgMnhcbiAgICAgIC8vID4gcmVzb2x1dGlvbiBpbWFnZSB3aWxsIGJlIHZpc3VhbGx5IHRoZSBzYW1lLCB0aG91Z2ggdGhlIDN4IGltYWdlXG4gICAgICAvLyA+IHRha2VzIHNpZ25pZmljYW50bHkgbW9yZSBkYXRhLiBFdmVuIHRydWUgM3ggcmVzb2x1dGlvbiBzY3JlZW5zIGFyZVxuICAgICAgLy8gPiB3YXN0ZWZ1bCBhcyB0aGUgaHVtYW4gZXllIGNhbm5vdCBzZWUgdGhhdCBsZXZlbCBvZiBkZXRhaWwgd2l0aG91dFxuICAgICAgLy8gPiBzb21ldGhpbmcgbGlrZSBhIG1hZ25pZnlpbmcgZ2xhc3MuXG4gICAgICAvLyBodHRwczovL2Jsb2cudHdpdHRlci5jb20vZW5naW5lZXJpbmcvZW5fdXMvdG9waWNzL2luZnJhc3RydWN0dXJlLzIwMTkvY2FwcGluZy1pbWFnZS1maWRlbGl0eS1vbi11bHRyYS1oaWdoLXJlc29sdXRpb24tZGV2aWNlcy5odG1sXG4gICAgICBbd2lkdGgsIHdpZHRoICogMiAvKiwgd2lkdGggKiAzKi9dLm1hcChcbiAgICAgICAgKHcpID0+IGFsbFNpemVzLmZpbmQoKHApID0+IHAgPj0gdykgfHwgYWxsU2l6ZXNbYWxsU2l6ZXMubGVuZ3RoIC0gMV1cbiAgICAgIClcbiAgICApLFxuICBdXG4gIHJldHVybiB7IHdpZHRocywga2luZDogJ3gnIH1cbn1cblxudHlwZSBHZW5JbWdBdHRyc0RhdGEgPSB7XG4gIHNyYzogc3RyaW5nXG4gIHVub3B0aW1pemVkOiBib29sZWFuXG4gIGxheW91dDogTGF5b3V0VmFsdWVcbiAgbG9hZGVyOiBJbWFnZUxvYWRlclxuICB3aWR0aD86IG51bWJlclxuICBxdWFsaXR5PzogbnVtYmVyXG4gIHNpemVzPzogc3RyaW5nXG59XG5cbnR5cGUgR2VuSW1nQXR0cnNSZXN1bHQgPSB7XG4gIHNyYzogc3RyaW5nXG4gIHNyY1NldDogc3RyaW5nIHwgdW5kZWZpbmVkXG4gIHNpemVzOiBzdHJpbmcgfCB1bmRlZmluZWRcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVJbWdBdHRycyh7XG4gIHNyYyxcbiAgdW5vcHRpbWl6ZWQsXG4gIGxheW91dCxcbiAgd2lkdGgsXG4gIHF1YWxpdHksXG4gIHNpemVzLFxuICBsb2FkZXIsXG59OiBHZW5JbWdBdHRyc0RhdGEpOiBHZW5JbWdBdHRyc1Jlc3VsdCB7XG4gIGlmICh1bm9wdGltaXplZCkge1xuICAgIHJldHVybiB7IHNyYywgc3JjU2V0OiB1bmRlZmluZWQsIHNpemVzOiB1bmRlZmluZWQgfVxuICB9XG5cbiAgY29uc3QgeyB3aWR0aHMsIGtpbmQgfSA9IGdldFdpZHRocyh3aWR0aCwgbGF5b3V0LCBzaXplcylcbiAgY29uc3QgbGFzdCA9IHdpZHRocy5sZW5ndGggLSAxXG5cbiAgcmV0dXJuIHtcbiAgICBzaXplczogIXNpemVzICYmIGtpbmQgPT09ICd3JyA/ICcxMDB2dycgOiBzaXplcyxcbiAgICBzcmNTZXQ6IHdpZHRoc1xuICAgICAgLm1hcChcbiAgICAgICAgKHcsIGkpID0+XG4gICAgICAgICAgYCR7bG9hZGVyKHsgc3JjLCBxdWFsaXR5LCB3aWR0aDogdyB9KX0gJHtcbiAgICAgICAgICAgIGtpbmQgPT09ICd3JyA/IHcgOiBpICsgMVxuICAgICAgICAgIH0ke2tpbmR9YFxuICAgICAgKVxuICAgICAgLmpvaW4oJywgJyksXG5cbiAgICAvLyBJdCdzIGludGVuZGVkIHRvIGtlZXAgYHNyY2AgdGhlIGxhc3QgYXR0cmlidXRlIGJlY2F1c2UgUmVhY3QgdXBkYXRlc1xuICAgIC8vIGF0dHJpYnV0ZXMgaW4gb3JkZXIuIElmIHdlIGtlZXAgYHNyY2AgdGhlIGZpcnN0IG9uZSwgU2FmYXJpIHdpbGxcbiAgICAvLyBpbW1lZGlhdGVseSBzdGFydCB0byBmZXRjaCBgc3JjYCwgYmVmb3JlIGBzaXplc2AgYW5kIGBzcmNTZXRgIGFyZSBldmVuXG4gICAgLy8gdXBkYXRlZCBieSBSZWFjdC4gVGhhdCBjYXVzZXMgbXVsdGlwbGUgdW5uZWNlc3NhcnkgcmVxdWVzdHMgaWYgYHNyY1NldGBcbiAgICAvLyBhbmQgYHNpemVzYCBhcmUgZGVmaW5lZC5cbiAgICAvLyBUaGlzIGJ1ZyBjYW5ub3QgYmUgcmVwcm9kdWNlZCBpbiBDaHJvbWUgb3IgRmlyZWZveC5cbiAgICBzcmM6IGxvYWRlcih7IHNyYywgcXVhbGl0eSwgd2lkdGg6IHdpZHRoc1tsYXN0XSB9KSxcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRJbnQoeDogdW5rbm93bik6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gIGlmICh0eXBlb2YgeCA9PT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4geFxuICB9XG4gIGlmICh0eXBlb2YgeCA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gcGFyc2VJbnQoeCwgMTApXG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZFxufVxuXG5mdW5jdGlvbiBkZWZhdWx0SW1hZ2VMb2FkZXIobG9hZGVyUHJvcHM6IEltYWdlTG9hZGVyUHJvcHMpIHtcbiAgY29uc3QgbG9hZCA9IGxvYWRlcnMuZ2V0KGNvbmZpZ0xvYWRlcilcbiAgaWYgKGxvYWQpIHtcbiAgICByZXR1cm4gbG9hZCh7IHJvb3Q6IGNvbmZpZ1BhdGgsIC4uLmxvYWRlclByb3BzIH0pXG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKFxuICAgIGBVbmtub3duIFwibG9hZGVyXCIgZm91bmQgaW4gXCJuZXh0LmNvbmZpZy5qc1wiLiBFeHBlY3RlZDogJHtWQUxJRF9MT0FERVJTLmpvaW4oXG4gICAgICAnLCAnXG4gICAgKX0uIFJlY2VpdmVkOiAke2NvbmZpZ0xvYWRlcn1gXG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW1hZ2Uoe1xuICBzcmMsXG4gIHNpemVzLFxuICB1bm9wdGltaXplZCA9IGZhbHNlLFxuICBwcmlvcml0eSA9IGZhbHNlLFxuICBsb2FkaW5nLFxuICBjbGFzc05hbWUsXG4gIHF1YWxpdHksXG4gIHdpZHRoLFxuICBoZWlnaHQsXG4gIG9iamVjdEZpdCxcbiAgb2JqZWN0UG9zaXRpb24sXG4gIGxvYWRlciA9IGRlZmF1bHRJbWFnZUxvYWRlcixcbiAgLi4uYWxsXG59OiBJbWFnZVByb3BzKSB7XG4gIGxldCByZXN0OiBQYXJ0aWFsPEltYWdlUHJvcHM+ID0gYWxsXG4gIGxldCBsYXlvdXQ6IE5vbk51bGxhYmxlPExheW91dFZhbHVlPiA9IHNpemVzID8gJ3Jlc3BvbnNpdmUnIDogJ2ludHJpbnNpYydcbiAgbGV0IHVuc2l6ZWQgPSBmYWxzZVxuICBpZiAoJ3Vuc2l6ZWQnIGluIHJlc3QpIHtcbiAgICB1bnNpemVkID0gQm9vbGVhbihyZXN0LnVuc2l6ZWQpXG4gICAgLy8gUmVtb3ZlIHByb3BlcnR5IHNvIGl0J3Mgbm90IHNwcmVhZCBpbnRvIGltYWdlOlxuICAgIGRlbGV0ZSByZXN0Wyd1bnNpemVkJ11cbiAgfSBlbHNlIGlmICgnbGF5b3V0JyBpbiByZXN0KSB7XG4gICAgLy8gT3ZlcnJpZGUgZGVmYXVsdCBsYXlvdXQgaWYgdGhlIHVzZXIgc3BlY2lmaWVkIG9uZTpcbiAgICBpZiAocmVzdC5sYXlvdXQpIGxheW91dCA9IHJlc3QubGF5b3V0XG5cbiAgICAvLyBSZW1vdmUgcHJvcGVydHkgc28gaXQncyBub3Qgc3ByZWFkIGludG8gaW1hZ2U6XG4gICAgZGVsZXRlIHJlc3RbJ2xheW91dCddXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmICghc3JjKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBJbWFnZSBpcyBtaXNzaW5nIHJlcXVpcmVkIFwic3JjXCIgcHJvcGVydHkuIE1ha2Ugc3VyZSB5b3UgcGFzcyBcInNyY1wiIGluIHByb3BzIHRvIHRoZSBcXGBuZXh0L2ltYWdlXFxgIGNvbXBvbmVudC4gUmVjZWl2ZWQ6ICR7SlNPTi5zdHJpbmdpZnkoXG4gICAgICAgICAgeyB3aWR0aCwgaGVpZ2h0LCBxdWFsaXR5IH1cbiAgICAgICAgKX1gXG4gICAgICApXG4gICAgfVxuICAgIGlmICghVkFMSURfTEFZT1VUX1ZBTFVFUy5pbmNsdWRlcyhsYXlvdXQpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBpbnZhbGlkIFwibGF5b3V0XCIgcHJvcGVydHkuIFByb3ZpZGVkIFwiJHtsYXlvdXR9XCIgc2hvdWxkIGJlIG9uZSBvZiAke1ZBTElEX0xBWU9VVF9WQUxVRVMubWFwKFxuICAgICAgICAgIFN0cmluZ1xuICAgICAgICApLmpvaW4oJywnKX0uYFxuICAgICAgKVxuICAgIH1cbiAgICBpZiAoIVZBTElEX0xPQURJTkdfVkFMVUVTLmluY2x1ZGVzKGxvYWRpbmcpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBpbnZhbGlkIFwibG9hZGluZ1wiIHByb3BlcnR5LiBQcm92aWRlZCBcIiR7bG9hZGluZ31cIiBzaG91bGQgYmUgb25lIG9mICR7VkFMSURfTE9BRElOR19WQUxVRVMubWFwKFxuICAgICAgICAgIFN0cmluZ1xuICAgICAgICApLmpvaW4oJywnKX0uYFxuICAgICAgKVxuICAgIH1cbiAgICBpZiAocHJpb3JpdHkgJiYgbG9hZGluZyA9PT0gJ2xhenknKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBib3RoIFwicHJpb3JpdHlcIiBhbmQgXCJsb2FkaW5nPSdsYXp5J1wiIHByb3BlcnRpZXMuIE9ubHkgb25lIHNob3VsZCBiZSB1c2VkLmBcbiAgICAgIClcbiAgICB9XG4gICAgaWYgKHVuc2l6ZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGRlcHJlY2F0ZWQgXCJ1bnNpemVkXCIgcHJvcGVydHksIHdoaWNoIHdhcyByZW1vdmVkIGluIGZhdm9yIG9mIHRoZSBcImxheW91dD0nZmlsbCdcIiBwcm9wZXJ0eWBcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBsZXQgaXNMYXp5ID1cbiAgICAhcHJpb3JpdHkgJiYgKGxvYWRpbmcgPT09ICdsYXp5JyB8fCB0eXBlb2YgbG9hZGluZyA9PT0gJ3VuZGVmaW5lZCcpXG4gIGlmIChzcmMgJiYgc3JjLnN0YXJ0c1dpdGgoJ2RhdGE6JykpIHtcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVFRQL0Jhc2ljc19vZl9IVFRQL0RhdGFfVVJJc1xuICAgIHVub3B0aW1pemVkID0gdHJ1ZVxuICAgIGlzTGF6eSA9IGZhbHNlXG4gIH1cblxuICBjb25zdCBbc2V0UmVmLCBpc0ludGVyc2VjdGVkXSA9IHVzZUludGVyc2VjdGlvbjxIVE1MSW1hZ2VFbGVtZW50Pih7XG4gICAgcm9vdE1hcmdpbjogJzIwMHB4JyxcbiAgICBkaXNhYmxlZDogIWlzTGF6eSxcbiAgfSlcbiAgY29uc3QgaXNWaXNpYmxlID0gIWlzTGF6eSB8fCBpc0ludGVyc2VjdGVkXG5cbiAgY29uc3Qgd2lkdGhJbnQgPSBnZXRJbnQod2lkdGgpXG4gIGNvbnN0IGhlaWdodEludCA9IGdldEludChoZWlnaHQpXG4gIGNvbnN0IHF1YWxpdHlJbnQgPSBnZXRJbnQocXVhbGl0eSlcblxuICBsZXQgd3JhcHBlclN0eWxlOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddWydzdHlsZSddIHwgdW5kZWZpbmVkXG4gIGxldCBzaXplclN0eWxlOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddWydzdHlsZSddIHwgdW5kZWZpbmVkXG4gIGxldCBzaXplclN2Zzogc3RyaW5nIHwgdW5kZWZpbmVkXG4gIGxldCBpbWdTdHlsZTogSW1nRWxlbWVudFN0eWxlIHwgdW5kZWZpbmVkID0ge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogMCxcbiAgICBsZWZ0OiAwLFxuICAgIGJvdHRvbTogMCxcbiAgICByaWdodDogMCxcblxuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgIHBhZGRpbmc6IDAsXG4gICAgYm9yZGVyOiAnbm9uZScsXG4gICAgbWFyZ2luOiAnYXV0bycsXG5cbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIHdpZHRoOiAwLFxuICAgIGhlaWdodDogMCxcbiAgICBtaW5XaWR0aDogJzEwMCUnLFxuICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgbWluSGVpZ2h0OiAnMTAwJScsXG4gICAgbWF4SGVpZ2h0OiAnMTAwJScsXG5cbiAgICBvYmplY3RGaXQsXG4gICAgb2JqZWN0UG9zaXRpb24sXG4gIH1cbiAgaWYgKFxuICAgIHR5cGVvZiB3aWR0aEludCAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICB0eXBlb2YgaGVpZ2h0SW50ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIGxheW91dCAhPT0gJ2ZpbGwnXG4gICkge1xuICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgLz5cbiAgICBjb25zdCBxdW90aWVudCA9IGhlaWdodEludCAvIHdpZHRoSW50XG4gICAgY29uc3QgcGFkZGluZ1RvcCA9IGlzTmFOKHF1b3RpZW50KSA/ICcxMDAlJyA6IGAke3F1b3RpZW50ICogMTAwfSVgXG4gICAgaWYgKGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnKSB7XG4gICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cInJlc3BvbnNpdmVcIiAvPlxuICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuXG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICBtYXJnaW46IDAsXG4gICAgICB9XG4gICAgICBzaXplclN0eWxlID0geyBkaXNwbGF5OiAnYmxvY2snLCBib3hTaXppbmc6ICdib3JkZXItYm94JywgcGFkZGluZ1RvcCB9XG4gICAgfSBlbHNlIGlmIChsYXlvdXQgPT09ICdpbnRyaW5zaWMnKSB7XG4gICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cImludHJpbnNpY1wiIC8+XG4gICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgfVxuICAgICAgc2l6ZXJTdHlsZSA9IHtcbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICB9XG4gICAgICBzaXplclN2ZyA9IGA8c3ZnIHdpZHRoPVwiJHt3aWR0aEludH1cIiBoZWlnaHQ9XCIke2hlaWdodEludH1cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmVyc2lvbj1cIjEuMVwiLz5gXG4gICAgfSBlbHNlIGlmIChsYXlvdXQgPT09ICdmaXhlZCcpIHtcbiAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwiZml4ZWRcIiAvPlxuICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgIHdpZHRoOiB3aWR0aEludCxcbiAgICAgICAgaGVpZ2h0OiBoZWlnaHRJbnQsXG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKFxuICAgIHR5cGVvZiB3aWR0aEludCA9PT0gJ3VuZGVmaW5lZCcgJiZcbiAgICB0eXBlb2YgaGVpZ2h0SW50ID09PSAndW5kZWZpbmVkJyAmJlxuICAgIGxheW91dCA9PT0gJ2ZpbGwnXG4gICkge1xuICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIGxheW91dD1cImZpbGxcIiAvPlxuICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG5cbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgdG9wOiAwLFxuICAgICAgbGVmdDogMCxcbiAgICAgIGJvdHRvbTogMCxcbiAgICAgIHJpZ2h0OiAwLFxuXG4gICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgIG1hcmdpbjogMCxcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgLz5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBtdXN0IHVzZSBcIndpZHRoXCIgYW5kIFwiaGVpZ2h0XCIgcHJvcGVydGllcyBvciBcImxheW91dD0nZmlsbCdcIiBwcm9wZXJ0eS5gXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgbGV0IGltZ0F0dHJpYnV0ZXM6IEdlbkltZ0F0dHJzUmVzdWx0ID0ge1xuICAgIHNyYzpcbiAgICAgICdkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhBUUFCQUlBQUFBQUFBUC8vL3lINUJBRUFBQUFBTEFBQUFBQUJBQUVBQUFJQlJBQTcnLFxuICAgIHNyY1NldDogdW5kZWZpbmVkLFxuICAgIHNpemVzOiB1bmRlZmluZWQsXG4gIH1cblxuICBpZiAoaXNWaXNpYmxlKSB7XG4gICAgaW1nQXR0cmlidXRlcyA9IGdlbmVyYXRlSW1nQXR0cnMoe1xuICAgICAgc3JjLFxuICAgICAgdW5vcHRpbWl6ZWQsXG4gICAgICBsYXlvdXQsXG4gICAgICB3aWR0aDogd2lkdGhJbnQsXG4gICAgICBxdWFsaXR5OiBxdWFsaXR5SW50LFxuICAgICAgc2l6ZXMsXG4gICAgICBsb2FkZXIsXG4gICAgfSlcbiAgfVxuXG4gIGlmICh1bnNpemVkKSB7XG4gICAgd3JhcHBlclN0eWxlID0gdW5kZWZpbmVkXG4gICAgc2l6ZXJTdHlsZSA9IHVuZGVmaW5lZFxuICAgIGltZ1N0eWxlID0gdW5kZWZpbmVkXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt3cmFwcGVyU3R5bGV9PlxuICAgICAge3NpemVyU3R5bGUgPyAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3NpemVyU3R5bGV9PlxuICAgICAgICAgIHtzaXplclN2ZyA/IChcbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgICAgICAgICAgIGJvcmRlcjogJ25vbmUnLFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgIGFyaWEtaGlkZGVuPXt0cnVlfVxuICAgICAgICAgICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcbiAgICAgICAgICAgICAgc3JjPXtgZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCwke3RvQmFzZTY0KHNpemVyU3ZnKX1gfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogbnVsbH1cbiAgICAgIHshaXNWaXNpYmxlICYmIChcbiAgICAgICAgPG5vc2NyaXB0PlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHsuLi5yZXN0fVxuICAgICAgICAgICAgey4uLmdlbmVyYXRlSW1nQXR0cnMoe1xuICAgICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICAgIHVub3B0aW1pemVkLFxuICAgICAgICAgICAgICBsYXlvdXQsXG4gICAgICAgICAgICAgIHdpZHRoOiB3aWR0aEludCxcbiAgICAgICAgICAgICAgcXVhbGl0eTogcXVhbGl0eUludCxcbiAgICAgICAgICAgICAgc2l6ZXMsXG4gICAgICAgICAgICAgIGxvYWRlcixcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgc3JjPXtzcmN9XG4gICAgICAgICAgICBkZWNvZGluZz1cImFzeW5jXCJcbiAgICAgICAgICAgIHNpemVzPXtzaXplc31cbiAgICAgICAgICAgIHN0eWxlPXtpbWdTdHlsZX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvbm9zY3JpcHQ+XG4gICAgICApfVxuICAgICAgPGltZ1xuICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgey4uLmltZ0F0dHJpYnV0ZXN9XG4gICAgICAgIGRlY29kaW5nPVwiYXN5bmNcIlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgICAgcmVmPXtzZXRSZWZ9XG4gICAgICAgIHN0eWxlPXtpbWdTdHlsZX1cbiAgICAgIC8+XG4gICAgICB7cHJpb3JpdHkgPyAoXG4gICAgICAgIC8vIE5vdGUgaG93IHdlIG9taXQgdGhlIGBocmVmYCBhdHRyaWJ1dGUsIGFzIGl0IHdvdWxkIG9ubHkgYmUgcmVsZXZhbnRcbiAgICAgICAgLy8gZm9yIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgYGltYWdlc3Jjc2V0YCwgYW5kIGluIHRob3NlIGNhc2VzXG4gICAgICAgIC8vIGl0IHdvdWxkIGxpa2VseSBjYXVzZSB0aGUgaW5jb3JyZWN0IGltYWdlIHRvIGJlIHByZWxvYWRlZC5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2Uvc2VtYW50aWNzLmh0bWwjYXR0ci1saW5rLWltYWdlc3Jjc2V0XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICBrZXk9e1xuICAgICAgICAgICAgICAnX19uaW1nLScgK1xuICAgICAgICAgICAgICBpbWdBdHRyaWJ1dGVzLnNyYyArXG4gICAgICAgICAgICAgIGltZ0F0dHJpYnV0ZXMuc3JjU2V0ICtcbiAgICAgICAgICAgICAgaW1nQXR0cmlidXRlcy5zaXplc1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVsPVwicHJlbG9hZFwiXG4gICAgICAgICAgICBhcz1cImltYWdlXCJcbiAgICAgICAgICAgIGhyZWY9e2ltZ0F0dHJpYnV0ZXMuc3JjU2V0ID8gdW5kZWZpbmVkIDogaW1nQXR0cmlidXRlcy5zcmN9XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlOiBpbWFnZXNyY3NldCBpcyBub3QgeWV0IGluIHRoZSBsaW5rIGVsZW1lbnQgdHlwZVxuICAgICAgICAgICAgaW1hZ2VzcmNzZXQ9e2ltZ0F0dHJpYnV0ZXMuc3JjU2V0fVxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZTogaW1hZ2VzaXplcyBpcyBub3QgeWV0IGluIHRoZSBsaW5rIGVsZW1lbnQgdHlwZVxuICAgICAgICAgICAgaW1hZ2VzaXplcz17aW1nQXR0cmlidXRlcy5zaXplc31cbiAgICAgICAgICA+PC9saW5rPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICApIDogbnVsbH1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG4vL0JVSUxUIElOIExPQURFUlNcblxuZnVuY3Rpb24gbm9ybWFsaXplU3JjKHNyYzogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHNyY1swXSA9PT0gJy8nID8gc3JjLnNsaWNlKDEpIDogc3JjXG59XG5cbmZ1bmN0aW9uIGltZ2l4TG9hZGVyKHtcbiAgcm9vdCxcbiAgc3JjLFxuICB3aWR0aCxcbiAgcXVhbGl0eSxcbn06IERlZmF1bHRJbWFnZUxvYWRlclByb3BzKTogc3RyaW5nIHtcbiAgLy8gRGVtbzogaHR0cHM6Ly9zdGF0aWMuaW1naXgubmV0L2RhaXN5LnBuZz9mb3JtYXQ9YXV0byZmaXQ9bWF4Jnc9MzAwXG4gIGNvbnN0IHBhcmFtcyA9IFsnYXV0bz1mb3JtYXQnLCAnZml0PW1heCcsICd3PScgKyB3aWR0aF1cbiAgbGV0IHBhcmFtc1N0cmluZyA9ICcnXG4gIGlmIChxdWFsaXR5KSB7XG4gICAgcGFyYW1zLnB1c2goJ3E9JyArIHF1YWxpdHkpXG4gIH1cblxuICBpZiAocGFyYW1zLmxlbmd0aCkge1xuICAgIHBhcmFtc1N0cmluZyA9ICc/JyArIHBhcmFtcy5qb2luKCcmJylcbiAgfVxuICByZXR1cm4gYCR7cm9vdH0ke25vcm1hbGl6ZVNyYyhzcmMpfSR7cGFyYW1zU3RyaW5nfWBcbn1cblxuZnVuY3Rpb24gYWthbWFpTG9hZGVyKHsgcm9vdCwgc3JjLCB3aWR0aCB9OiBEZWZhdWx0SW1hZ2VMb2FkZXJQcm9wcyk6IHN0cmluZyB7XG4gIHJldHVybiBgJHtyb290fSR7bm9ybWFsaXplU3JjKHNyYyl9P2ltd2lkdGg9JHt3aWR0aH1gXG59XG5cbmZ1bmN0aW9uIGNsb3VkaW5hcnlMb2FkZXIoe1xuICByb290LFxuICBzcmMsXG4gIHdpZHRoLFxuICBxdWFsaXR5LFxufTogRGVmYXVsdEltYWdlTG9hZGVyUHJvcHMpOiBzdHJpbmcge1xuICAvLyBEZW1vOiBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9kZW1vL2ltYWdlL3VwbG9hZC93XzMwMCxjX2xpbWl0LHFfYXV0by90dXJ0bGVzLmpwZ1xuICBjb25zdCBwYXJhbXMgPSBbJ2ZfYXV0bycsICdjX2xpbWl0JywgJ3dfJyArIHdpZHRoLCAncV8nICsgKHF1YWxpdHkgfHwgJ2F1dG8nKV1cbiAgbGV0IHBhcmFtc1N0cmluZyA9IHBhcmFtcy5qb2luKCcsJykgKyAnLydcbiAgcmV0dXJuIGAke3Jvb3R9JHtwYXJhbXNTdHJpbmd9JHtub3JtYWxpemVTcmMoc3JjKX1gXG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRMb2FkZXIoe1xuICByb290LFxuICBzcmMsXG4gIHdpZHRoLFxuICBxdWFsaXR5LFxufTogRGVmYXVsdEltYWdlTG9hZGVyUHJvcHMpOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG1pc3NpbmdWYWx1ZXMgPSBbXVxuXG4gICAgLy8gdGhlc2Ugc2hvdWxkIGFsd2F5cyBiZSBwcm92aWRlZCBidXQgbWFrZSBzdXJlIHRoZXkgYXJlXG4gICAgaWYgKCFzcmMpIG1pc3NpbmdWYWx1ZXMucHVzaCgnc3JjJylcbiAgICBpZiAoIXdpZHRoKSBtaXNzaW5nVmFsdWVzLnB1c2goJ3dpZHRoJylcblxuICAgIGlmIChtaXNzaW5nVmFsdWVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYE5leHQgSW1hZ2UgT3B0aW1pemF0aW9uIHJlcXVpcmVzICR7bWlzc2luZ1ZhbHVlcy5qb2luKFxuICAgICAgICAgICcsICdcbiAgICAgICAgKX0gdG8gYmUgcHJvdmlkZWQuIE1ha2Ugc3VyZSB5b3UgcGFzcyB0aGVtIGFzIHByb3BzIHRvIHRoZSBcXGBuZXh0L2ltYWdlXFxgIGNvbXBvbmVudC4gUmVjZWl2ZWQ6ICR7SlNPTi5zdHJpbmdpZnkoXG4gICAgICAgICAgeyBzcmMsIHdpZHRoLCBxdWFsaXR5IH1cbiAgICAgICAgKX1gXG4gICAgICApXG4gICAgfVxuXG4gICAgaWYgKHNyYy5zdGFydHNXaXRoKCcvLycpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBGYWlsZWQgdG8gcGFyc2Ugc3JjIFwiJHtzcmN9XCIgb24gXFxgbmV4dC9pbWFnZVxcYCwgcHJvdG9jb2wtcmVsYXRpdmUgVVJMICgvLykgbXVzdCBiZSBjaGFuZ2VkIHRvIGFuIGFic29sdXRlIFVSTCAoaHR0cDovLyBvciBodHRwczovLylgXG4gICAgICApXG4gICAgfVxuXG4gICAgaWYgKCFzcmMuc3RhcnRzV2l0aCgnLycpICYmIGNvbmZpZ0RvbWFpbnMpIHtcbiAgICAgIGxldCBwYXJzZWRTcmM6IFVSTFxuICAgICAgdHJ5IHtcbiAgICAgICAgcGFyc2VkU3JjID0gbmV3IFVSTChzcmMpXG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgRmFpbGVkIHRvIHBhcnNlIHNyYyBcIiR7c3JjfVwiIG9uIFxcYG5leHQvaW1hZ2VcXGAsIGlmIHVzaW5nIHJlbGF0aXZlIGltYWdlIGl0IG11c3Qgc3RhcnQgd2l0aCBhIGxlYWRpbmcgc2xhc2ggXCIvXCIgb3IgYmUgYW4gYWJzb2x1dGUgVVJMIChodHRwOi8vIG9yIGh0dHBzOi8vKWBcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBpZiAoIWNvbmZpZ0RvbWFpbnMuaW5jbHVkZXMocGFyc2VkU3JjLmhvc3RuYW1lKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYEludmFsaWQgc3JjIHByb3AgKCR7c3JjfSkgb24gXFxgbmV4dC9pbWFnZVxcYCwgaG9zdG5hbWUgXCIke3BhcnNlZFNyYy5ob3N0bmFtZX1cIiBpcyBub3QgY29uZmlndXJlZCB1bmRlciBpbWFnZXMgaW4geW91ciBcXGBuZXh0LmNvbmZpZy5qc1xcYFxcbmAgK1xuICAgICAgICAgICAgYFNlZSBtb3JlIGluZm86IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL25leHQtaW1hZ2UtdW5jb25maWd1cmVkLWhvc3RgXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gYCR7cm9vdH0/dXJsPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHNyYyl9Jnc9JHt3aWR0aH0mcT0ke3F1YWxpdHkgfHwgNzV9YFxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIGFkZEJhc2VQYXRoLFxuICBhZGRMb2NhbGUsXG4gIGdldERvbWFpbkxvY2FsZSxcbiAgaXNMb2NhbFVSTCxcbiAgTmV4dFJvdXRlcixcbiAgUHJlZmV0Y2hPcHRpb25zLFxuICByZXNvbHZlSHJlZixcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcbmltcG9ydCB7IHVzZUludGVyc2VjdGlvbiB9IGZyb20gJy4vdXNlLWludGVyc2VjdGlvbidcblxudHlwZSBVcmwgPSBzdHJpbmcgfCBVcmxPYmplY3RcbnR5cGUgUmVxdWlyZWRLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBuZXZlciA6IEtcbn1ba2V5b2YgVF1cbnR5cGUgT3B0aW9uYWxLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBLIDogbmV2ZXJcbn1ba2V5b2YgVF1cblxuZXhwb3J0IHR5cGUgTGlua1Byb3BzID0ge1xuICBocmVmOiBVcmxcbiAgYXM/OiBVcmxcbiAgcmVwbGFjZT86IGJvb2xlYW5cbiAgc2Nyb2xsPzogYm9vbGVhblxuICBzaGFsbG93PzogYm9vbGVhblxuICBwYXNzSHJlZj86IGJvb2xlYW5cbiAgcHJlZmV0Y2g/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG59XG50eXBlIExpbmtQcm9wc1JlcXVpcmVkID0gUmVxdWlyZWRLZXlzPExpbmtQcm9wcz5cbnR5cGUgTGlua1Byb3BzT3B0aW9uYWwgPSBPcHRpb25hbEtleXM8TGlua1Byb3BzPlxuXG5jb25zdCBwcmVmZXRjaGVkOiB7IFtjYWNoZUtleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge31cblxuZnVuY3Rpb24gcHJlZmV0Y2goXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBvcHRpb25zPzogUHJlZmV0Y2hPcHRpb25zXG4pOiB2b2lkIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8ICFyb3V0ZXIpIHJldHVyblxuICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICByb3V0ZXIucHJlZmV0Y2goaHJlZiwgYXMsIG9wdGlvbnMpLmNhdGNoKChlcnIpID0+IHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9KVxuICBjb25zdCBjdXJMb2NhbGUgPVxuICAgIG9wdGlvbnMgJiYgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgPyBvcHRpb25zLmxvY2FsZVxuICAgICAgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZVxuXG4gIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzICsgKGN1ckxvY2FsZSA/ICclJyArIGN1ckxvY2FsZSA6ICcnKV0gPSB0cnVlXG59XG5cbmZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudDogUmVhY3QuTW91c2VFdmVudCk6IGJvb2xlYW4ge1xuICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudFxuICByZXR1cm4gKFxuICAgICh0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnKSB8fFxuICAgIGV2ZW50Lm1ldGFLZXkgfHxcbiAgICBldmVudC5jdHJsS2V5IHx8XG4gICAgZXZlbnQuc2hpZnRLZXkgfHxcbiAgICBldmVudC5hbHRLZXkgfHwgLy8gdHJpZ2dlcnMgcmVzb3VyY2UgZG93bmxvYWRcbiAgICAoZXZlbnQubmF0aXZlRXZlbnQgJiYgZXZlbnQubmF0aXZlRXZlbnQud2hpY2ggPT09IDIpXG4gIClcbn1cblxuZnVuY3Rpb24gbGlua0NsaWNrZWQoXG4gIGU6IFJlYWN0Lk1vdXNlRXZlbnQsXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICByZXBsYWNlPzogYm9vbGVhbixcbiAgc2hhbGxvdz86IGJvb2xlYW4sXG4gIHNjcm9sbD86IGJvb2xlYW4sXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG4pOiB2b2lkIHtcbiAgY29uc3QgeyBub2RlTmFtZSB9ID0gZS5jdXJyZW50VGFyZ2V0XG5cbiAgaWYgKG5vZGVOYW1lID09PSAnQScgJiYgKGlzTW9kaWZpZWRFdmVudChlKSB8fCAhaXNMb2NhbFVSTChocmVmKSkpIHtcbiAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbiAgICByZXR1cm5cbiAgfVxuXG4gIGUucHJldmVudERlZmF1bHQoKVxuXG4gIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICBpZiAoc2Nyb2xsID09IG51bGwpIHtcbiAgICBzY3JvbGwgPSBhcy5pbmRleE9mKCcjJykgPCAwXG4gIH1cblxuICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgcm91dGVyW3JlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7XG4gICAgc2hhbGxvdyxcbiAgICBsb2NhbGUsXG4gICAgc2Nyb2xsLFxuICB9KVxufVxuXG5mdW5jdGlvbiBMaW5rKHByb3BzOiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjxMaW5rUHJvcHM+KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3M6IHtcbiAgICAgIGtleTogc3RyaW5nXG4gICAgICBleHBlY3RlZDogc3RyaW5nXG4gICAgICBhY3R1YWw6IHN0cmluZ1xuICAgIH0pIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAgICAgIGBGYWlsZWQgcHJvcCB0eXBlOiBUaGUgcHJvcCBcXGAke2FyZ3Mua2V5fVxcYCBleHBlY3RzIGEgJHthcmdzLmV4cGVjdGVkfSBpbiBcXGA8TGluaz5cXGAsIGJ1dCBnb3QgXFxgJHthcmdzLmFjdHVhbH1cXGAgaW5zdGVhZC5gICtcbiAgICAgICAgICAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgID8gXCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiXG4gICAgICAgICAgICA6ICcnKVxuICAgICAgKVxuICAgIH1cblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzUmVxdWlyZWQsIHRydWU+ID0ge1xuICAgICAgaHJlZjogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wczogTGlua1Byb3BzUmVxdWlyZWRbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgcmVxdWlyZWRQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNSZXF1aXJlZFtdXG4gICAgcmVxdWlyZWRQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc1JlcXVpcmVkKSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSAnaHJlZicpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzW2tleV0gPT0gbnVsbCB8fFxuICAgICAgICAgICh0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnKVxuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHByb3BzW2tleV0gPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzT3B0aW9uYWwsIHRydWU+ID0ge1xuICAgICAgYXM6IHRydWUsXG4gICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgc2Nyb2xsOiB0cnVlLFxuICAgICAgc2hhbGxvdzogdHJ1ZSxcbiAgICAgIHBhc3NIcmVmOiB0cnVlLFxuICAgICAgcHJlZmV0Y2g6IHRydWUsXG4gICAgICBsb2NhbGU6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHM6IExpbmtQcm9wc09wdGlvbmFsW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIG9wdGlvbmFsUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzT3B0aW9uYWxbXVxuICAgIG9wdGlvbmFsUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNPcHRpb25hbCkgPT4ge1xuICAgICAgY29uc3QgdmFsVHlwZSA9IHR5cGVvZiBwcm9wc1trZXldXG5cbiAgICAgIGlmIChrZXkgPT09ICdhcycpIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycgJiYgdmFsVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdsb2NhbGUnKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2AnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGtleSA9PT0gJ3JlcGxhY2UnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Njcm9sbCcgfHxcbiAgICAgICAga2V5ID09PSAnc2hhbGxvdycgfHxcbiAgICAgICAga2V5ID09PSAncGFzc0hyZWYnIHx8XG4gICAgICAgIGtleSA9PT0gJ3ByZWZldGNoJ1xuICAgICAgKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICE9IG51bGwgJiYgdmFsVHlwZSAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYGJvb2xlYW5gJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgY29uc3QgaGFzV2FybmVkID0gUmVhY3QudXNlUmVmKGZhbHNlKVxuICAgIGlmIChwcm9wcy5wcmVmZXRjaCAmJiAhaGFzV2FybmVkLmN1cnJlbnQpIHtcbiAgICAgIGhhc1dhcm5lZC5jdXJyZW50ID0gdHJ1ZVxuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnXG4gICAgICApXG4gICAgfVxuICB9XG4gIGNvbnN0IHAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2VcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBwYXRobmFtZSA9IChyb3V0ZXIgJiYgcm91dGVyLnBhdGhuYW1lKSB8fCAnLydcblxuICBjb25zdCB7IGhyZWYsIGFzIH0gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5ocmVmLCB0cnVlKVxuICAgIHJldHVybiB7XG4gICAgICBocmVmOiByZXNvbHZlZEhyZWYsXG4gICAgICBhczogcHJvcHMuYXNcbiAgICAgICAgPyByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuYXMpXG4gICAgICAgIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWYsXG4gICAgfVxuICB9LCBbcGF0aG5hbWUsIHByb3BzLmhyZWYsIHByb3BzLmFzXSlcblxuICBsZXQgeyBjaGlsZHJlbiwgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUgfSA9IHByb3BzXG5cbiAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgY2hpbGRyZW4gPSA8YT57Y2hpbGRyZW59PC9hPlxuICB9XG5cbiAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gIGNvbnN0IGNoaWxkOiBhbnkgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICBjb25zdCBjaGlsZFJlZjogYW55ID0gY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWZcblxuICBjb25zdCBbc2V0SW50ZXJzZWN0aW9uUmVmLCBpc1Zpc2libGVdID0gdXNlSW50ZXJzZWN0aW9uKHtcbiAgICByb290TWFyZ2luOiAnMjAwcHgnLFxuICB9KVxuICBjb25zdCBzZXRSZWYgPSBSZWFjdC51c2VDYWxsYmFjayhcbiAgICAoZWw6IEVsZW1lbnQpID0+IHtcbiAgICAgIHNldEludGVyc2VjdGlvblJlZihlbClcbiAgICAgIGlmIChjaGlsZFJlZikge1xuICAgICAgICBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZFJlZihlbClcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGNoaWxkUmVmLmN1cnJlbnQgPSBlbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBbY2hpbGRSZWYsIHNldEludGVyc2VjdGlvblJlZl1cbiAgKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHNob3VsZFByZWZldGNoID0gaXNWaXNpYmxlICYmIHAgJiYgaXNMb2NhbFVSTChocmVmKVxuICAgIGNvbnN0IGN1ckxvY2FsZSA9XG4gICAgICB0eXBlb2YgbG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlXG4gICAgY29uc3QgaXNQcmVmZXRjaGVkID1cbiAgICAgIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzICsgKGN1ckxvY2FsZSA/ICclJyArIGN1ckxvY2FsZSA6ICcnKV1cbiAgICBpZiAoc2hvdWxkUHJlZmV0Y2ggJiYgIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywge1xuICAgICAgICBsb2NhbGU6IGN1ckxvY2FsZSxcbiAgICAgIH0pXG4gICAgfVxuICB9LCBbYXMsIGhyZWYsIGlzVmlzaWJsZSwgbG9jYWxlLCBwLCByb3V0ZXJdKVxuXG4gIGNvbnN0IGNoaWxkUHJvcHM6IHtcbiAgICBvbk1vdXNlRW50ZXI/OiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIG9uQ2xpY2s6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgaHJlZj86IHN0cmluZ1xuICAgIHJlZj86IGFueVxuICB9ID0ge1xuICAgIHJlZjogc2V0UmVmLFxuICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKVxuICAgICAgfVxuICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUpXG4gICAgICB9XG4gICAgfSxcbiAgfVxuXG4gIGNoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSlcbiAgICB9XG4gICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywgeyBwcmlvcml0eTogdHJ1ZSB9KVxuICB9XG5cbiAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICBpZiAocHJvcHMucGFzc0hyZWYgfHwgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpKSB7XG4gICAgY29uc3QgY3VyTG9jYWxlID1cbiAgICAgIHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGVcblxuICAgIC8vIHdlIG9ubHkgcmVuZGVyIGRvbWFpbiBsb2NhbGVzIGlmIHdlIGFyZSBjdXJyZW50bHkgb24gYSBkb21haW4gbG9jYWxlXG4gICAgLy8gc28gdGhhdCBsb2NhbGUgbGlua3MgYXJlIHN0aWxsIHZpc2l0YWJsZSBpbiBkZXZlbG9wbWVudC9wcmV2aWV3IGVudnNcbiAgICBjb25zdCBsb2NhbGVEb21haW4gPVxuICAgICAgcm91dGVyICYmXG4gICAgICByb3V0ZXIuaXNMb2NhbGVEb21haW4gJiZcbiAgICAgIGdldERvbWFpbkxvY2FsZShcbiAgICAgICAgYXMsXG4gICAgICAgIGN1ckxvY2FsZSxcbiAgICAgICAgcm91dGVyICYmIHJvdXRlci5sb2NhbGVzLFxuICAgICAgICByb3V0ZXIgJiYgcm91dGVyLmRvbWFpbkxvY2FsZXNcbiAgICAgIClcblxuICAgIGNoaWxkUHJvcHMuaHJlZiA9XG4gICAgICBsb2NhbGVEb21haW4gfHxcbiAgICAgIGFkZEJhc2VQYXRoKGFkZExvY2FsZShhcywgY3VyTG9jYWxlLCByb3V0ZXIgJiYgcm91dGVyLmRlZmF1bHRMb2NhbGUpKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcylcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiLyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aFxufVxuXG4vKipcbiAqIE5vcm1hbGl6ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBhY2NvcmRpbmcgdG8gdGhlIGB0cmFpbGluZ1NsYXNoYCBvcHRpb25cbiAqIGluIGBuZXh0LmNvbmZpZy5qc2AuXG4gKi9cbmV4cG9ydCBjb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSFxuICA/IChwYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKVxuICAgICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nXG4gICAgICB9XG4gICAgfVxuICA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoXG4iLCJ0eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGUgPSBhbnlcbnR5cGUgUmVxdWVzdElkbGVDYWxsYmFja09wdGlvbnMgPSB7XG4gIHRpbWVvdXQ6IG51bWJlclxufVxudHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUgPSB7XG4gIHJlYWRvbmx5IGRpZFRpbWVvdXQ6IGJvb2xlYW5cbiAgdGltZVJlbWFpbmluZzogKCkgPT4gbnVtYmVyXG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgcmVxdWVzdElkbGVDYWxsYmFjazogKFxuICAgICAgY2FsbGJhY2s6IChkZWFkbGluZTogUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lKSA9PiB2b2lkLFxuICAgICAgb3B0cz86IFJlcXVlc3RJZGxlQ2FsbGJhY2tPcHRpb25zXG4gICAgKSA9PiBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlXG4gICAgY2FuY2VsSWRsZUNhbGxiYWNrOiAoaWQ6IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGUpID0+IHZvaWRcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgcmVxdWVzdElkbGVDYWxsYmFjayA9XG4gICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrKSB8fFxuICBmdW5jdGlvbiAoXG4gICAgY2I6IChkZWFkbGluZTogUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lKSA9PiB2b2lkXG4gICk6IE5vZGVKUy5UaW1lb3V0IHtcbiAgICBsZXQgc3RhcnQgPSBEYXRlLm5vdygpXG4gICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgY2Ioe1xuICAgICAgICBkaWRUaW1lb3V0OiBmYWxzZSxcbiAgICAgICAgdGltZVJlbWFpbmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBNYXRoLm1heCgwLCA1MCAtIChEYXRlLm5vdygpIC0gc3RhcnQpKVxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICB9LCAxKVxuICB9XG5cbmV4cG9ydCBjb25zdCBjYW5jZWxJZGxlQ2FsbGJhY2sgPVxuICAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrKSB8fFxuICBmdW5jdGlvbiAoaWQ6IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGUpIHtcbiAgICByZXR1cm4gY2xlYXJUaW1lb3V0KGlkKVxuICB9XG4iLCJpbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBDbGllbnRCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vYnVpbGQvd2VicGFjay9wbHVnaW5zL2J1aWxkLW1hbmlmZXN0LXBsdWdpbidcbmltcG9ydCBnZXRBc3NldFBhdGhGcm9tUm91dGUgZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlJ1xuaW1wb3J0IHsgcmVxdWVzdElkbGVDYWxsYmFjayB9IGZyb20gJy4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrJ1xuXG4vLyAzLjhzIHdhcyBhcmJpdHJhcmlseSBjaG9zZW4gYXMgaXQncyB3aGF0IGh0dHBzOi8vd2ViLmRldi9pbnRlcmFjdGl2ZVxuLy8gY29uc2lkZXJzIGFzIFwiR29vZFwiIHRpbWUtdG8taW50ZXJhY3RpdmUuIFdlIG11c3QgYXNzdW1lIHNvbWV0aGluZyB3ZW50XG4vLyB3cm9uZyBiZXlvbmQgdGhpcyBwb2ludCwgYW5kIHRoZW4gZmFsbC1iYWNrIHRvIGEgZnVsbCBwYWdlIHRyYW5zaXRpb24gdG9cbi8vIHNob3cgdGhlIHVzZXIgc29tZXRoaW5nIG9mIHZhbHVlLlxuY29uc3QgTVNfTUFYX0lETEVfREVMQVkgPSAzODAwXG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgX19CVUlMRF9NQU5JRkVTVD86IENsaWVudEJ1aWxkTWFuaWZlc3RcbiAgICBfX0JVSUxEX01BTklGRVNUX0NCPzogRnVuY3Rpb25cbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZEVudHJ5cG9pbnRTdWNjZXNzIHtcbiAgY29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIGV4cG9ydHM6IGFueVxufVxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRFbnRyeXBvaW50RmFpbHVyZSB7XG4gIGVycm9yOiB1bmtub3duXG59XG5leHBvcnQgdHlwZSBSb3V0ZUVudHJ5cG9pbnQgPSBMb2FkZWRFbnRyeXBvaW50U3VjY2VzcyB8IExvYWRlZEVudHJ5cG9pbnRGYWlsdXJlXG5cbmV4cG9ydCBpbnRlcmZhY2UgUm91dGVTdHlsZVNoZWV0IHtcbiAgaHJlZjogc3RyaW5nXG4gIGNvbnRlbnQ6IHN0cmluZ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZFJvdXRlU3VjY2VzcyBleHRlbmRzIExvYWRlZEVudHJ5cG9pbnRTdWNjZXNzIHtcbiAgc3R5bGVzOiBSb3V0ZVN0eWxlU2hlZXRbXVxufVxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRSb3V0ZUZhaWx1cmUge1xuICBlcnJvcjogdW5rbm93blxufVxuZXhwb3J0IHR5cGUgUm91dGVMb2FkZXJFbnRyeSA9IExvYWRlZFJvdXRlU3VjY2VzcyB8IExvYWRlZFJvdXRlRmFpbHVyZVxuXG5leHBvcnQgdHlwZSBGdXR1cmU8Vj4gPSB7XG4gIHJlc29sdmU6IChlbnRyeXBvaW50OiBWKSA9PiB2b2lkXG4gIGZ1dHVyZTogUHJvbWlzZTxWPlxufVxuZnVuY3Rpb24gd2l0aEZ1dHVyZTxUPihcbiAga2V5OiBzdHJpbmcsXG4gIG1hcDogTWFwPHN0cmluZywgRnV0dXJlPFQ+IHwgVD4sXG4gIGdlbmVyYXRvcj86ICgpID0+IFByb21pc2U8VD5cbik6IFByb21pc2U8VD4ge1xuICBsZXQgZW50cnk6IEZ1dHVyZTxUPiB8IFQgfCB1bmRlZmluZWQgPSBtYXAuZ2V0KGtleSlcbiAgaWYgKGVudHJ5KSB7XG4gICAgaWYgKCdmdXR1cmUnIGluIGVudHJ5KSB7XG4gICAgICByZXR1cm4gZW50cnkuZnV0dXJlXG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZW50cnkpXG4gIH1cbiAgbGV0IHJlc29sdmVyOiAoZW50cnlwb2ludDogVCkgPT4gdm9pZFxuICBjb25zdCBwcm9tOiBQcm9taXNlPFQ+ID0gbmV3IFByb21pc2U8VD4oKHJlc29sdmUpID0+IHtcbiAgICByZXNvbHZlciA9IHJlc29sdmVcbiAgfSlcbiAgbWFwLnNldChrZXksIChlbnRyeSA9IHsgcmVzb2x2ZTogcmVzb2x2ZXIhLCBmdXR1cmU6IHByb20gfSkpXG4gIHJldHVybiBnZW5lcmF0b3JcbiAgICA/IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgIGdlbmVyYXRvcigpLnRoZW4oKHZhbHVlKSA9PiAocmVzb2x2ZXIodmFsdWUpLCB2YWx1ZSkpXG4gICAgOiBwcm9tXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUm91dGVMb2FkZXIge1xuICB3aGVuRW50cnlwb2ludChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxSb3V0ZUVudHJ5cG9pbnQ+XG4gIG9uRW50cnlwb2ludChyb3V0ZTogc3RyaW5nLCBleGVjdXRlOiAoKSA9PiB1bmtub3duKTogdm9pZFxuICBsb2FkUm91dGUocm91dGU6IHN0cmluZywgcHJlZmV0Y2g/OiBib29sZWFuKTogUHJvbWlzZTxSb3V0ZUxvYWRlckVudHJ5PlxuICBwcmVmZXRjaChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPlxufVxuXG5mdW5jdGlvbiBoYXNQcmVmZXRjaChsaW5rPzogSFRNTExpbmtFbGVtZW50KTogYm9vbGVhbiB7XG4gIHRyeSB7XG4gICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKVxuICAgIHJldHVybiAoXG4gICAgICAvLyBkZXRlY3QgSUUxMSBzaW5jZSBpdCBzdXBwb3J0cyBwcmVmZXRjaCBidXQgaXNuJ3QgZGV0ZWN0ZWRcbiAgICAgIC8vIHdpdGggcmVsTGlzdC5zdXBwb3J0XG4gICAgICAoISF3aW5kb3cuTVNJbnB1dE1ldGhvZENvbnRleHQgJiYgISEoZG9jdW1lbnQgYXMgYW55KS5kb2N1bWVudE1vZGUpIHx8XG4gICAgICBsaW5rLnJlbExpc3Quc3VwcG9ydHMoJ3ByZWZldGNoJylcbiAgICApXG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbmNvbnN0IGNhblByZWZldGNoOiBib29sZWFuID0gaGFzUHJlZmV0Y2goKVxuXG5mdW5jdGlvbiBwcmVmZXRjaFZpYURvbShcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBsaW5rPzogSFRNTExpbmtFbGVtZW50XG4pOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxpbmtbcmVsPVwicHJlZmV0Y2hcIl1baHJlZl49XCIke2hyZWZ9XCJdYCkpIHtcbiAgICAgIHJldHVybiByZXMoKVxuICAgIH1cblxuICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJylcblxuICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWw6XG4gICAgaWYgKGFzKSBsaW5rIS5hcyA9IGFzXG4gICAgbGluayEucmVsID0gYHByZWZldGNoYFxuICAgIGxpbmshLmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTiFcbiAgICBsaW5rIS5vbmxvYWQgPSByZXNcbiAgICBsaW5rIS5vbmVycm9yID0gcmVqXG5cbiAgICAvLyBgaHJlZmAgc2hvdWxkIGFsd2F5cyBiZSBsYXN0OlxuICAgIGxpbmshLmhyZWYgPSBocmVmXG5cbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspXG4gIH0pXG59XG5cbmNvbnN0IEFTU0VUX0xPQURfRVJST1IgPSBTeW1ib2woJ0FTU0VUX0xPQURfRVJST1InKVxuLy8gVE9ETzogdW5leHBvcnRcbmV4cG9ydCBmdW5jdGlvbiBtYXJrQXNzZXRFcnJvcihlcnI6IEVycm9yKTogRXJyb3Ige1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgQVNTRVRfTE9BRF9FUlJPUiwge30pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0Fzc2V0RXJyb3IoZXJyPzogRXJyb3IpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgcmV0dXJuIGVyciAmJiBBU1NFVF9MT0FEX0VSUk9SIGluIGVyclxufVxuXG5mdW5jdGlvbiBhcHBlbmRTY3JpcHQoXG4gIHNyYzogc3RyaW5nLFxuICBzY3JpcHQ/OiBIVE1MU2NyaXB0RWxlbWVudFxuKTogUHJvbWlzZTx1bmtub3duPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0JylcblxuICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWwuXG4gICAgLy8gMS4gU2V0dXAgc3VjY2Vzcy9mYWlsdXJlIGhvb2tzIGluIGNhc2UgdGhlIGJyb3dzZXIgc3luY2hyb25vdXNseVxuICAgIC8vICAgIGV4ZWN1dGVzIHdoZW4gYHNyY2AgaXMgc2V0LlxuICAgIHNjcmlwdC5vbmxvYWQgPSByZXNvbHZlXG4gICAgc2NyaXB0Lm9uZXJyb3IgPSAoKSA9PlxuICAgICAgcmVqZWN0KG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc2NyaXB0OiAke3NyY31gKSkpXG5cbiAgICAvLyAyLiBDb25maWd1cmUgdGhlIGNyb3NzLW9yaWdpbiBhdHRyaWJ1dGUgYmVmb3JlIHNldHRpbmcgYHNyY2AgaW4gY2FzZSB0aGVcbiAgICAvLyAgICBicm93c2VyIGJlZ2lucyB0byBmZXRjaC5cbiAgICBzY3JpcHQuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOIVxuXG4gICAgLy8gMy4gRmluYWxseSwgc2V0IHRoZSBzb3VyY2UgYW5kIGluamVjdCBpbnRvIHRoZSBET00gaW4gY2FzZSB0aGUgY2hpbGRcbiAgICAvLyAgICBtdXN0IGJlIGFwcGVuZGVkIGZvciBmZXRjaGluZyB0byBzdGFydC5cbiAgICBzY3JpcHQuc3JjID0gc3JjXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpXG4gIH0pXG59XG5cbi8vIFJlc29sdmUgYSBwcm9taXNlIHRoYXQgdGltZXMgb3V0IGFmdGVyIGdpdmVuIGFtb3VudCBvZiBtaWxsaXNlY29uZHMuXG5mdW5jdGlvbiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0PFQ+KFxuICBwOiBQcm9taXNlPFQ+LFxuICBtczogbnVtYmVyLFxuICBlcnI6IEVycm9yXG4pOiBQcm9taXNlPFQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcblxuICAgIHAudGhlbigocikgPT4ge1xuICAgICAgLy8gUmVzb2x2ZWQsIGNhbmNlbCB0aGUgdGltZW91dFxuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgcmVzb2x2ZShyKVxuICAgIH0pLmNhdGNoKHJlamVjdClcblxuICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpZiAoIWNhbmNlbGxlZCkge1xuICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgIH1cbiAgICAgIH0sIG1zKVxuICAgIClcbiAgfSlcbn1cblxuLy8gVE9ETzogc3RvcCBleHBvcnRpbmcgb3IgY2FjaGUgdGhlIGZhaWx1cmVcbi8vIEl0J2QgYmUgYmVzdCB0byBzdG9wIGV4cG9ydGluZyB0aGlzLiBJdCdzIGFuIGltcGxlbWVudGF0aW9uIGRldGFpbC4gV2UncmVcbi8vIG9ubHkgZXhwb3J0aW5nIGl0IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbHR5IHdpdGggdGhlIGBwYWdlLWxvYWRlcmAuXG4vLyBPbmx5IGNhY2hlIHRoaXMgcmVzcG9uc2UgYXMgYSBsYXN0IHJlc29ydCBpZiB3ZSBjYW5ub3QgZWxpbWluYXRlIGFsbCBvdGhlclxuLy8gY29kZSBicmFuY2hlcyB0aGF0IHVzZSB0aGUgQnVpbGQgTWFuaWZlc3QgQ2FsbGJhY2sgYW5kIHB1c2ggdGhlbSB0aHJvdWdoXG4vLyB0aGUgUm91dGUgTG9hZGVyIGludGVyZmFjZS5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCk6IFByb21pc2U8Q2xpZW50QnVpbGRNYW5pZmVzdD4ge1xuICBpZiAoc2VsZi5fX0JVSUxEX01BTklGRVNUKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpXG4gIH1cblxuICBjb25zdCBvbkJ1aWxkTWFuaWZlc3Q6IFByb21pc2U8Q2xpZW50QnVpbGRNYW5pZmVzdD4gPSBuZXcgUHJvbWlzZTxcbiAgICBDbGllbnRCdWlsZE1hbmlmZXN0XG4gID4oKHJlc29sdmUpID0+IHtcbiAgICAvLyBNYW5kYXRvcnkgYmVjYXVzZSB0aGlzIGlzIG5vdCBjb25jdXJyZW50IHNhZmU6XG4gICAgY29uc3QgY2IgPSBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0JcbiAgICBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0IgPSAoKSA9PiB7XG4gICAgICByZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVCEpXG4gICAgICBjYiAmJiBjYigpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0PENsaWVudEJ1aWxkTWFuaWZlc3Q+KFxuICAgIG9uQnVpbGRNYW5pZmVzdCxcbiAgICBNU19NQVhfSURMRV9ERUxBWSxcbiAgICBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoJ0ZhaWxlZCB0byBsb2FkIGNsaWVudCBidWlsZCBtYW5pZmVzdCcpKVxuICApXG59XG5cbmludGVyZmFjZSBSb3V0ZUZpbGVzIHtcbiAgc2NyaXB0czogc3RyaW5nW11cbiAgY3NzOiBzdHJpbmdbXVxufVxuZnVuY3Rpb24gZ2V0RmlsZXNGb3JSb3V0ZShcbiAgYXNzZXRQcmVmaXg6IHN0cmluZyxcbiAgcm91dGU6IHN0cmluZ1xuKTogUHJvbWlzZTxSb3V0ZUZpbGVzPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoe1xuICAgICAgc2NyaXB0czogW1xuICAgICAgICBhc3NldFByZWZpeCArXG4gICAgICAgICAgJy9fbmV4dC9zdGF0aWMvY2h1bmtzL3BhZ2VzJyArXG4gICAgICAgICAgZW5jb2RlVVJJKGdldEFzc2V0UGF0aEZyb21Sb3V0ZShyb3V0ZSwgJy5qcycpKSxcbiAgICAgIF0sXG4gICAgICAvLyBTdHlsZXMgYXJlIGhhbmRsZWQgYnkgYHN0eWxlLWxvYWRlcmAgaW4gZGV2ZWxvcG1lbnQ6XG4gICAgICBjc3M6IFtdLFxuICAgIH0pXG4gIH1cbiAgcmV0dXJuIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKS50aGVuKChtYW5pZmVzdCkgPT4ge1xuICAgIGlmICghKHJvdXRlIGluIG1hbmlmZXN0KSkge1xuICAgICAgdGhyb3cgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9va3VwIHJvdXRlOiAke3JvdXRlfWApKVxuICAgIH1cbiAgICBjb25zdCBhbGxGaWxlcyA9IG1hbmlmZXN0W3JvdXRlXS5tYXAoXG4gICAgICAoZW50cnkpID0+IGFzc2V0UHJlZml4ICsgJy9fbmV4dC8nICsgZW5jb2RlVVJJKGVudHJ5KVxuICAgIClcbiAgICByZXR1cm4ge1xuICAgICAgc2NyaXB0czogYWxsRmlsZXMuZmlsdGVyKCh2KSA9PiB2LmVuZHNXaXRoKCcuanMnKSksXG4gICAgICBjc3M6IGFsbEZpbGVzLmZpbHRlcigodikgPT4gdi5lbmRzV2l0aCgnLmNzcycpKSxcbiAgICB9XG4gIH0pXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlTG9hZGVyKGFzc2V0UHJlZml4OiBzdHJpbmcpOiBSb3V0ZUxvYWRlciB7XG4gIGNvbnN0IGVudHJ5cG9pbnRzOiBNYXA8XG4gICAgc3RyaW5nLFxuICAgIEZ1dHVyZTxSb3V0ZUVudHJ5cG9pbnQ+IHwgUm91dGVFbnRyeXBvaW50XG4gID4gPSBuZXcgTWFwKClcbiAgY29uc3QgbG9hZGVkU2NyaXB0czogTWFwPHN0cmluZywgUHJvbWlzZTx1bmtub3duPj4gPSBuZXcgTWFwKClcbiAgY29uc3Qgc3R5bGVTaGVldHM6IE1hcDxzdHJpbmcsIFByb21pc2U8Um91dGVTdHlsZVNoZWV0Pj4gPSBuZXcgTWFwKClcbiAgY29uc3Qgcm91dGVzOiBNYXA8XG4gICAgc3RyaW5nLFxuICAgIEZ1dHVyZTxSb3V0ZUxvYWRlckVudHJ5PiB8IFJvdXRlTG9hZGVyRW50cnlcbiAgPiA9IG5ldyBNYXAoKVxuXG4gIGZ1bmN0aW9uIG1heWJlRXhlY3V0ZVNjcmlwdChzcmM6IHN0cmluZyk6IFByb21pc2U8dW5rbm93bj4ge1xuICAgIGxldCBwcm9tOiBQcm9taXNlPHVua25vd24+IHwgdW5kZWZpbmVkID0gbG9hZGVkU2NyaXB0cy5nZXQoc3JjKVxuICAgIGlmIChwcm9tKSB7XG4gICAgICByZXR1cm4gcHJvbVxuICAgIH1cblxuICAgIC8vIFNraXAgZXhlY3V0aW5nIHNjcmlwdCBpZiBpdCdzIGFscmVhZHkgaW4gdGhlIERPTTpcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihgc2NyaXB0W3NyY149XCIke3NyY31cIl1gKSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gICAgfVxuXG4gICAgbG9hZGVkU2NyaXB0cy5zZXQoc3JjLCAocHJvbSA9IGFwcGVuZFNjcmlwdChzcmMpKSlcbiAgICByZXR1cm4gcHJvbVxuICB9XG5cbiAgZnVuY3Rpb24gZmV0Y2hTdHlsZVNoZWV0KGhyZWY6IHN0cmluZyk6IFByb21pc2U8Um91dGVTdHlsZVNoZWV0PiB7XG4gICAgbGV0IHByb206IFByb21pc2U8Um91dGVTdHlsZVNoZWV0PiB8IHVuZGVmaW5lZCA9IHN0eWxlU2hlZXRzLmdldChocmVmKVxuICAgIGlmIChwcm9tKSB7XG4gICAgICByZXR1cm4gcHJvbVxuICAgIH1cblxuICAgIHN0eWxlU2hlZXRzLnNldChcbiAgICAgIGhyZWYsXG4gICAgICAocHJvbSA9IGZldGNoKGhyZWYpXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdHlsZXNoZWV0OiAke2hyZWZ9YClcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHJlcy50ZXh0KCkudGhlbigodGV4dCkgPT4gKHsgaHJlZjogaHJlZiwgY29udGVudDogdGV4dCB9KSlcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihlcnIpXG4gICAgICAgIH0pKVxuICAgIClcbiAgICByZXR1cm4gcHJvbVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB3aGVuRW50cnlwb2ludChyb3V0ZTogc3RyaW5nKSB7XG4gICAgICByZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSwgZW50cnlwb2ludHMpXG4gICAgfSxcbiAgICBvbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZywgZXhlY3V0ZTogKCkgPT4gdW5rbm93bikge1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKGV4ZWN1dGUpXG4gICAgICAgIC50aGVuKChmbikgPT4gZm4oKSlcbiAgICAgICAgLnRoZW4oXG4gICAgICAgICAgKGV4cG9ydHM6IGFueSkgPT4gKHtcbiAgICAgICAgICAgIGNvbXBvbmVudDogKGV4cG9ydHMgJiYgZXhwb3J0cy5kZWZhdWx0KSB8fCBleHBvcnRzLFxuICAgICAgICAgICAgZXhwb3J0czogZXhwb3J0cyxcbiAgICAgICAgICB9KSxcbiAgICAgICAgICAoZXJyKSA9PiAoeyBlcnJvcjogZXJyIH0pXG4gICAgICAgIClcbiAgICAgICAgLnRoZW4oKGlucHV0OiBSb3V0ZUVudHJ5cG9pbnQpID0+IHtcbiAgICAgICAgICBjb25zdCBvbGQgPSBlbnRyeXBvaW50cy5nZXQocm91dGUpXG4gICAgICAgICAgZW50cnlwb2ludHMuc2V0KHJvdXRlLCBpbnB1dClcbiAgICAgICAgICBpZiAob2xkICYmICdyZXNvbHZlJyBpbiBvbGQpIG9sZC5yZXNvbHZlKGlucHV0KVxuICAgICAgICB9KVxuICAgIH0sXG4gICAgbG9hZFJvdXRlKHJvdXRlOiBzdHJpbmcsIHByZWZldGNoPzogYm9vbGVhbikge1xuICAgICAgcmV0dXJuIHdpdGhGdXR1cmU8Um91dGVMb2FkZXJFbnRyeT4ocm91dGUsIHJvdXRlcywgKCkgPT4ge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChcbiAgICAgICAgICBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSlcbiAgICAgICAgICAgIC50aGVuKCh7IHNjcmlwdHMsIGNzcyB9KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICAgICAgZW50cnlwb2ludHMuaGFzKHJvdXRlKVxuICAgICAgICAgICAgICAgICAgPyBbXVxuICAgICAgICAgICAgICAgICAgOiBQcm9taXNlLmFsbChzY3JpcHRzLm1hcChtYXliZUV4ZWN1dGVTY3JpcHQpKSxcbiAgICAgICAgICAgICAgICBQcm9taXNlLmFsbChjc3MubWFwKGZldGNoU3R5bGVTaGVldCkpLFxuICAgICAgICAgICAgICBdIGFzIGNvbnN0KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMud2hlbkVudHJ5cG9pbnQocm91dGUpLnRoZW4oKGVudHJ5cG9pbnQpID0+ICh7XG4gICAgICAgICAgICAgICAgZW50cnlwb2ludCxcbiAgICAgICAgICAgICAgICBzdHlsZXM6IHJlc1sxXSxcbiAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICBNU19NQVhfSURMRV9ERUxBWSxcbiAgICAgICAgICBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYFJvdXRlIGRpZCBub3QgY29tcGxldGUgbG9hZGluZzogJHtyb3V0ZX1gKSlcbiAgICAgICAgKVxuICAgICAgICAgIC50aGVuKCh7IGVudHJ5cG9pbnQsIHN0eWxlcyB9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXM6IFJvdXRlTG9hZGVyRW50cnkgPSBPYmplY3QuYXNzaWduPFxuICAgICAgICAgICAgICB7IHN0eWxlczogUm91dGVTdHlsZVNoZWV0W10gfSxcbiAgICAgICAgICAgICAgUm91dGVFbnRyeXBvaW50XG4gICAgICAgICAgICA+KHsgc3R5bGVzOiBzdHlsZXMhIH0sIGVudHJ5cG9pbnQpXG4gICAgICAgICAgICByZXR1cm4gJ2Vycm9yJyBpbiBlbnRyeXBvaW50ID8gZW50cnlwb2ludCA6IHJlc1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIGlmIChwcmVmZXRjaCkge1xuICAgICAgICAgICAgICAvLyB3ZSBkb24ndCB3YW50IHRvIGNhY2hlIGVycm9ycyBkdXJpbmcgcHJlZmV0Y2hcbiAgICAgICAgICAgICAgdGhyb3cgZXJyXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4geyBlcnJvcjogZXJyIH1cbiAgICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9LFxuICAgIHByZWZldGNoKHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWVMYWJzL3F1aWNrbGluay9ibG9iLzQ1M2E2NjFmYTFmYTk0MGUyZDJlMDQ0NDUyMzk4ZTM4YzY3YTk4ZmIvc3JjL2luZGV4Lm1qcyNMMTE1LUwxMThcbiAgICAgIC8vIExpY2Vuc2U6IEFwYWNoZSAyLjBcbiAgICAgIGxldCBjblxuICAgICAgaWYgKChjbiA9IChuYXZpZ2F0b3IgYXMgYW55KS5jb25uZWN0aW9uKSkge1xuICAgICAgICAvLyBEb24ndCBwcmVmZXRjaCBpZiB1c2luZyAyRyBvciBpZiBTYXZlLURhdGEgaXMgZW5hYmxlZC5cbiAgICAgICAgaWYgKGNuLnNhdmVEYXRhIHx8IC8yZy8udGVzdChjbi5lZmZlY3RpdmVUeXBlKSkgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gICAgICB9XG4gICAgICByZXR1cm4gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpXG4gICAgICAgIC50aGVuKChvdXRwdXQpID0+XG4gICAgICAgICAgUHJvbWlzZS5hbGwoXG4gICAgICAgICAgICBjYW5QcmVmZXRjaFxuICAgICAgICAgICAgICA/IG91dHB1dC5zY3JpcHRzLm1hcCgoc2NyaXB0KSA9PiBwcmVmZXRjaFZpYURvbShzY3JpcHQsICdzY3JpcHQnKSlcbiAgICAgICAgICAgICAgOiBbXVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiB0aGlzLmxvYWRSb3V0ZShyb3V0ZSwgdHJ1ZSkuY2F0Y2goKCkgPT4ge30pKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goXG4gICAgICAgICAgLy8gc3dhbGxvdyBwcmVmZXRjaCBlcnJvcnNcbiAgICAgICAgICAoKSA9PiB7fVxuICAgICAgICApXG4gICAgfSxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVSb3V0ZUxvYWRlclxuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciwgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0J1xuXG50eXBlIENsYXNzQXJndW1lbnRzPFQ+ID0gVCBleHRlbmRzIG5ldyAoLi4uYXJnczogaW5mZXIgVSkgPT4gYW55ID8gVSA6IGFueVxuXG50eXBlIFJvdXRlckFyZ3MgPSBDbGFzc0FyZ3VtZW50czx0eXBlb2YgUm91dGVyPlxuXG50eXBlIFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogUm91dGVyIHwgbnVsbFxuICByZWFkeUNhbGxiYWNrczogQXJyYXk8KCkgPT4gYW55PlxuICByZWFkeShjYjogKCkgPT4gYW55KTogdm9pZFxufVxuXG5leHBvcnQgeyBSb3V0ZXIsIE5leHRSb3V0ZXIgfVxuXG5leHBvcnQgdHlwZSBTaW5nbGV0b25Sb3V0ZXIgPSBTaW5nbGV0b25Sb3V0ZXJCYXNlICYgTmV4dFJvdXRlclxuXG5jb25zdCBzaW5nbGV0b25Sb3V0ZXI6IFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogbnVsbCwgLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbiAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICByZWFkeShjYjogKCkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKClcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYilcbiAgICB9XG4gIH0sXG59XG5cbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAncGF0aG5hbWUnLFxuICAncm91dGUnLFxuICAncXVlcnknLFxuICAnYXNQYXRoJyxcbiAgJ2NvbXBvbmVudHMnLFxuICAnaXNGYWxsYmFjaycsXG4gICdiYXNlUGF0aCcsXG4gICdsb2NhbGUnLFxuICAnbG9jYWxlcycsXG4gICdkZWZhdWx0TG9jYWxlJyxcbiAgJ2lzUmVhZHknLFxuICAnaXNQcmV2aWV3JyxcbiAgJ2lzTG9jYWxlRG9tYWluJyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZDogc3RyaW5nKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkOiBzdHJpbmcpID0+IHtcbiAgLy8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbiAgOyhzaW5nbGV0b25Sb3V0ZXIgYXMgYW55KVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICB9XG59KVxuXG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQ6IHN0cmluZykgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YClcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKFxuICAgICAgICBBcnJheS5pc0FycmF5KF9yb3V0ZXJbcHJvcGVydHldKSA/IFtdIDoge30sXG4gICAgICAgIF9yb3V0ZXJbcHJvcGVydHldXG4gICAgICApIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXJbcHJvcGVydHldXG4gIH1cblxuICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gIGluc3RhbmNlLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICByZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICByZXF1ZXN0SWRsZUNhbGxiYWNrLFxuICBjYW5jZWxJZGxlQ2FsbGJhY2ssXG59IGZyb20gJy4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrJ1xuXG50eXBlIFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdCA9IFBpY2s8SW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0LCAncm9vdE1hcmdpbic+XG50eXBlIFVzZUludGVyc2VjdGlvbiA9IHsgZGlzYWJsZWQ/OiBib29sZWFuIH0gJiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXRcbnR5cGUgT2JzZXJ2ZUNhbGxiYWNrID0gKGlzVmlzaWJsZTogYm9vbGVhbikgPT4gdm9pZFxudHlwZSBPYnNlcnZlciA9IHtcbiAgaWQ6IHN0cmluZ1xuICBvYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbiAgZWxlbWVudHM6IE1hcDxFbGVtZW50LCBPYnNlcnZlQ2FsbGJhY2s+XG59XG5cbmNvbnN0IGhhc0ludGVyc2VjdGlvbk9ic2VydmVyID0gdHlwZW9mIEludGVyc2VjdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlSW50ZXJzZWN0aW9uPFQgZXh0ZW5kcyBFbGVtZW50Pih7XG4gIHJvb3RNYXJnaW4sXG4gIGRpc2FibGVkLFxufTogVXNlSW50ZXJzZWN0aW9uKTogWyhlbGVtZW50OiBUIHwgbnVsbCkgPT4gdm9pZCwgYm9vbGVhbl0ge1xuICBjb25zdCBpc0Rpc2FibGVkOiBib29sZWFuID0gZGlzYWJsZWQgfHwgIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyXG5cbiAgY29uc3QgdW5vYnNlcnZlID0gdXNlUmVmPEZ1bmN0aW9uPigpXG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IHNldFJlZiA9IHVzZUNhbGxiYWNrKFxuICAgIChlbDogVCB8IG51bGwpID0+IHtcbiAgICAgIGlmICh1bm9ic2VydmUuY3VycmVudCkge1xuICAgICAgICB1bm9ic2VydmUuY3VycmVudCgpXG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gdW5kZWZpbmVkXG4gICAgICB9XG5cbiAgICAgIGlmIChpc0Rpc2FibGVkIHx8IHZpc2libGUpIHJldHVyblxuXG4gICAgICBpZiAoZWwgJiYgZWwudGFnTmFtZSkge1xuICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IG9ic2VydmUoXG4gICAgICAgICAgZWwsXG4gICAgICAgICAgKGlzVmlzaWJsZSkgPT4gaXNWaXNpYmxlICYmIHNldFZpc2libGUoaXNWaXNpYmxlKSxcbiAgICAgICAgICB7IHJvb3RNYXJnaW4gfVxuICAgICAgICApXG4gICAgICB9XG4gICAgfSxcbiAgICBbaXNEaXNhYmxlZCwgcm9vdE1hcmdpbiwgdmlzaWJsZV1cbiAgKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgICAgaWYgKCF2aXNpYmxlKSB7XG4gICAgICAgIGNvbnN0IGlkbGVDYWxsYmFjayA9IHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4gc2V0VmlzaWJsZSh0cnVlKSlcbiAgICAgICAgcmV0dXJuICgpID0+IGNhbmNlbElkbGVDYWxsYmFjayhpZGxlQ2FsbGJhY2spXG4gICAgICB9XG4gICAgfVxuICB9LCBbdmlzaWJsZV0pXG5cbiAgcmV0dXJuIFtzZXRSZWYsIHZpc2libGVdXG59XG5cbmZ1bmN0aW9uIG9ic2VydmUoXG4gIGVsZW1lbnQ6IEVsZW1lbnQsXG4gIGNhbGxiYWNrOiBPYnNlcnZlQ2FsbGJhY2ssXG4gIG9wdGlvbnM6IFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdFxuKTogKCkgPT4gdm9pZCB7XG4gIGNvbnN0IHsgaWQsIG9ic2VydmVyLCBlbGVtZW50cyB9ID0gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucylcbiAgZWxlbWVudHMuc2V0KGVsZW1lbnQsIGNhbGxiYWNrKVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudClcbiAgcmV0dXJuIGZ1bmN0aW9uIHVub2JzZXJ2ZSgpOiB2b2lkIHtcbiAgICBlbGVtZW50cy5kZWxldGUoZWxlbWVudClcbiAgICBvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudClcblxuICAgIC8vIERlc3Ryb3kgb2JzZXJ2ZXIgd2hlbiB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byB3YXRjaDpcbiAgICBpZiAoZWxlbWVudHMuc2l6ZSA9PT0gMCkge1xuICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpXG4gICAgICBvYnNlcnZlcnMuZGVsZXRlKGlkKVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBvYnNlcnZlcnMgPSBuZXcgTWFwPHN0cmluZywgT2JzZXJ2ZXI+KClcbmZ1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKG9wdGlvbnM6IFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdCk6IE9ic2VydmVyIHtcbiAgY29uc3QgaWQgPSBvcHRpb25zLnJvb3RNYXJnaW4gfHwgJydcbiAgbGV0IGluc3RhbmNlID0gb2JzZXJ2ZXJzLmdldChpZClcbiAgaWYgKGluc3RhbmNlKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlXG4gIH1cblxuICBjb25zdCBlbGVtZW50cyA9IG5ldyBNYXA8RWxlbWVudCwgT2JzZXJ2ZUNhbGxiYWNrPigpXG4gIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG4gICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgY29uc3QgY2FsbGJhY2sgPSBlbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KVxuICAgICAgY29uc3QgaXNWaXNpYmxlID0gZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwXG4gICAgICBpZiAoY2FsbGJhY2sgJiYgaXNWaXNpYmxlKSB7XG4gICAgICAgIGNhbGxiYWNrKGlzVmlzaWJsZSlcbiAgICAgIH1cbiAgICB9KVxuICB9LCBvcHRpb25zKVxuXG4gIG9ic2VydmVycy5zZXQoXG4gICAgaWQsXG4gICAgKGluc3RhbmNlID0ge1xuICAgICAgaWQsXG4gICAgICBvYnNlcnZlcixcbiAgICAgIGVsZW1lbnRzLFxuICAgIH0pXG4gIClcbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFdpdGhSb3V0ZXJQcm9wcyA9IHtcbiAgcm91dGVyOiBOZXh0Um91dGVyXG59XG5cbmV4cG9ydCB0eXBlIEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPiA9IFBpY2s8XG4gIFAsXG4gIEV4Y2x1ZGU8a2V5b2YgUCwga2V5b2YgV2l0aFJvdXRlclByb3BzPlxuPlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUm91dGVyPFxuICBQIGV4dGVuZHMgV2l0aFJvdXRlclByb3BzLFxuICBDID0gTmV4dFBhZ2VDb250ZXh0XG4+KFxuICBDb21wb3NlZENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8QywgYW55LCBQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxFeGNsdWRlUm91dGVyUHJvcHM8UD4+IHtcbiAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHM6IGFueSk6IEpTWC5FbGVtZW50IHtcbiAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHJvdXRlcj17dXNlUm91dGVyKCl9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIDsoV2l0aFJvdXRlcldyYXBwZXIgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzID0gKENvbXBvc2VkQ29tcG9uZW50IGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCJleHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgcGF0aG5hbWU6IHN0cmluZyxcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4pOiB7XG4gIGRldGVjdGVkTG9jYWxlPzogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbn0ge1xuICBsZXQgZGV0ZWN0ZWRMb2NhbGU6IHN0cmluZyB8IHVuZGVmaW5lZFxuICAvLyBmaXJzdCBpdGVtIHdpbGwgYmUgZW1wdHkgc3RyaW5nIGZyb20gc3BsaXR0aW5nIGF0IGZpcnN0IGNoYXJcbiAgY29uc3QgcGF0aG5hbWVQYXJ0cyA9IHBhdGhuYW1lLnNwbGl0KCcvJylcblxuICA7KGxvY2FsZXMgfHwgW10pLnNvbWUoKGxvY2FsZSkgPT4ge1xuICAgIGlmIChwYXRobmFtZVBhcnRzWzFdLnRvTG93ZXJDYXNlKCkgPT09IGxvY2FsZS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICBkZXRlY3RlZExvY2FsZSA9IGxvY2FsZVxuICAgICAgcGF0aG5hbWVQYXJ0cy5zcGxpY2UoMSwgMSlcbiAgICAgIHBhdGhuYW1lID0gcGF0aG5hbWVQYXJ0cy5qb2luKCcvJykgfHwgJy8nXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfSlcblxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lLFxuICAgIGRldGVjdGVkTG9jYWxlLFxuICB9XG59XG4iLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcblxudHlwZSBIYW5kbGVyID0gKC4uLmV2dHM6IGFueVtdKSA9PiB2b2lkXG5cbmV4cG9ydCB0eXBlIE1pdHRFbWl0dGVyID0ge1xuICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSk6IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl0dCgpOiBNaXR0RW1pdHRlciB7XG4gIGNvbnN0IGFsbDogeyBbczogc3RyaW5nXTogSGFuZGxlcltdIH0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgcmV0dXJuIHtcbiAgICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIDsoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcilcbiAgICB9LFxuXG4gICAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIDsoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcjogSGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKC4uLmV2dHMpXG4gICAgICB9KVxuICAgIH0sXG4gIH1cbn1cbiIsIi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCxcbiAgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5pbXBvcnQgeyBHb29kUGFnZUNhY2hlLCBTdHlsZVNoZWV0VHVwbGUgfSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcGFnZS1sb2FkZXInXG5pbXBvcnQge1xuICBnZXRDbGllbnRCdWlsZE1hbmlmZXN0LFxuICBpc0Fzc2V0RXJyb3IsXG4gIG1hcmtBc3NldEVycm9yLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyJ1xuaW1wb3J0IHsgRG9tYWluTG9jYWxlcyB9IGZyb20gJy4uLy4uL3NlcnZlci9jb25maWcnXG5pbXBvcnQgeyBkZW5vcm1hbGl6ZVBhZ2VQYXRoIH0gZnJvbSAnLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aCdcbmltcG9ydCB7IG5vcm1hbGl6ZUxvY2FsZVBhdGggfSBmcm9tICcuLi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aCdcbmltcG9ydCBtaXR0LCB7IE1pdHRFbWl0dGVyIH0gZnJvbSAnLi4vbWl0dCdcbmltcG9ydCB7XG4gIEFwcENvbnRleHRUeXBlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0TG9jYXRpb25PcmlnaW4sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbiAgTkVYVF9EQVRBLFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSAnLi91dGlscy9pcy1keW5hbWljJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vdXRpbHMvcXVlcnlzdHJpbmcnXG5pbXBvcnQgcmVzb2x2ZVJld3JpdGVzIGZyb20gJy4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIC8qIHByb2QgKi9cbiAgICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgfVxufVxuXG5pbnRlcmZhY2UgUm91dGVQcm9wZXJ0aWVzIHtcbiAgc2hhbGxvdzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgVHJhbnNpdGlvbk9wdGlvbnMge1xuICBzaGFsbG93PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxuICBzY3JvbGw/OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBOZXh0SGlzdG9yeVN0YXRlIHtcbiAgdXJsOiBzdHJpbmdcbiAgYXM6IHN0cmluZ1xuICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xufVxuXG50eXBlIEhpc3RvcnlTdGF0ZSA9XG4gIHwgbnVsbFxuICB8IHsgX19OOiBmYWxzZSB9XG4gIHwgKHsgX19OOiB0cnVlOyBpZHg6IG51bWJlciB9ICYgTmV4dEhpc3RvcnlTdGF0ZSlcblxubGV0IGRldGVjdERvbWFpbkxvY2FsZTogdHlwZW9mIGltcG9ydCgnLi4vaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZScpLmRldGVjdERvbWFpbkxvY2FsZVxuXG5pZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICBkZXRlY3REb21haW5Mb2NhbGUgPSByZXF1aXJlKCcuLi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlJylcbiAgICAuZGV0ZWN0RG9tYWluTG9jYWxlXG59XG5cbmNvbnN0IGJhc2VQYXRoID0gKHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggYXMgc3RyaW5nKSB8fCAnJ1xuXG5mdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgY2FuY2VsbGVkOiB0cnVlLFxuICB9KVxufVxuXG5mdW5jdGlvbiBhZGRQYXRoUHJlZml4KHBhdGg6IHN0cmluZywgcHJlZml4Pzogc3RyaW5nKSB7XG4gIHJldHVybiBwcmVmaXggJiYgcGF0aC5zdGFydHNXaXRoKCcvJylcbiAgICA/IHBhdGggPT09ICcvJ1xuICAgICAgPyBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChwcmVmaXgpXG4gICAgICA6IGAke3ByZWZpeH0ke3BhdGhOb1F1ZXJ5SGFzaChwYXRoKSA9PT0gJy8nID8gcGF0aC5zdWJzdHJpbmcoMSkgOiBwYXRofWBcbiAgICA6IHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERvbWFpbkxvY2FsZShcbiAgcGF0aDogc3RyaW5nLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZSxcbiAgbG9jYWxlcz86IHN0cmluZ1tdLFxuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgbG9jYWxlID0gbG9jYWxlIHx8IG5vcm1hbGl6ZUxvY2FsZVBhdGgocGF0aCwgbG9jYWxlcykuZGV0ZWN0ZWRMb2NhbGVcblxuICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsIHVuZGVmaW5lZCwgbG9jYWxlKVxuXG4gICAgaWYgKGRldGVjdGVkRG9tYWluKSB7XG4gICAgICByZXR1cm4gYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHAgPyAnJyA6ICdzJ306Ly8ke2RldGVjdGVkRG9tYWluLmRvbWFpbn0ke1xuICAgICAgICBiYXNlUGF0aCB8fCAnJ1xuICAgICAgfSR7bG9jYWxlID09PSBkZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlID8gJycgOiBgLyR7bG9jYWxlfWB9JHtwYXRofWBcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICByZXR1cm4gZmFsc2Vcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZExvY2FsZShcbiAgcGF0aDogc3RyaW5nLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZSxcbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgY29uc3QgcGF0aG5hbWUgPSBwYXRoTm9RdWVyeUhhc2gocGF0aClcbiAgICBjb25zdCBwYXRoTG93ZXIgPSBwYXRobmFtZS50b0xvd2VyQ2FzZSgpXG4gICAgY29uc3QgbG9jYWxlTG93ZXIgPSBsb2NhbGUgJiYgbG9jYWxlLnRvTG93ZXJDYXNlKClcblxuICAgIHJldHVybiBsb2NhbGUgJiZcbiAgICAgIGxvY2FsZSAhPT0gZGVmYXVsdExvY2FsZSAmJlxuICAgICAgIXBhdGhMb3dlci5zdGFydHNXaXRoKCcvJyArIGxvY2FsZUxvd2VyICsgJy8nKSAmJlxuICAgICAgcGF0aExvd2VyICE9PSAnLycgKyBsb2NhbGVMb3dlclxuICAgICAgPyBhZGRQYXRoUHJlZml4KHBhdGgsICcvJyArIGxvY2FsZSlcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxMb2NhbGUocGF0aDogc3RyaW5nLCBsb2NhbGU/OiBzdHJpbmcpIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICBjb25zdCBwYXRobmFtZSA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKVxuICAgIGNvbnN0IHBhdGhMb3dlciA9IHBhdGhuYW1lLnRvTG93ZXJDYXNlKClcbiAgICBjb25zdCBsb2NhbGVMb3dlciA9IGxvY2FsZSAmJiBsb2NhbGUudG9Mb3dlckNhc2UoKVxuXG4gICAgcmV0dXJuIGxvY2FsZSAmJlxuICAgICAgKHBhdGhMb3dlci5zdGFydHNXaXRoKCcvJyArIGxvY2FsZUxvd2VyICsgJy8nKSB8fFxuICAgICAgICBwYXRoTG93ZXIgPT09ICcvJyArIGxvY2FsZUxvd2VyKVxuICAgICAgPyAocGF0aG5hbWUubGVuZ3RoID09PSBsb2NhbGUubGVuZ3RoICsgMSA/ICcvJyA6ICcnKSArXG4gICAgICAgICAgcGF0aC5zdWJzdHIobG9jYWxlLmxlbmd0aCArIDEpXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5mdW5jdGlvbiBwYXRoTm9RdWVyeUhhc2gocGF0aDogc3RyaW5nKSB7XG4gIGNvbnN0IHF1ZXJ5SW5kZXggPSBwYXRoLmluZGV4T2YoJz8nKVxuICBjb25zdCBoYXNoSW5kZXggPSBwYXRoLmluZGV4T2YoJyMnKVxuXG4gIGlmIChxdWVyeUluZGV4ID4gLTEgfHwgaGFzaEluZGV4ID4gLTEpIHtcbiAgICBwYXRoID0gcGF0aC5zdWJzdHJpbmcoMCwgcXVlcnlJbmRleCA+IC0xID8gcXVlcnlJbmRleCA6IGhhc2hJbmRleClcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHBhdGggPSBwYXRoTm9RdWVyeUhhc2gocGF0aClcbiAgcmV0dXJuIHBhdGggPT09IGJhc2VQYXRoIHx8IHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCArICcvJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gIHJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsIGJhc2VQYXRoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcGF0aCA9IHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKVxuICBpZiAoIXBhdGguc3RhcnRzV2l0aCgnLycpKSBwYXRoID0gYC8ke3BhdGh9YFxuICByZXR1cm4gcGF0aFxufVxuXG4vKipcbiAqIERldGVjdHMgd2hldGhlciBhIGdpdmVuIHVybCBpcyByb3V0YWJsZSBieSB0aGUgTmV4dC5qcyByb3V0ZXIgKGJyb3dzZXIgb25seSkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0xvY2FsVVJMKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIC8vIHByZXZlbnQgYSBoeWRyYXRpb24gbWlzbWF0Y2ggb24gaHJlZiBmb3IgdXJsIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHVybC5zdGFydHNXaXRoKCcvJykgfHwgdXJsLnN0YXJ0c1dpdGgoJyMnKSkgcmV0dXJuIHRydWVcbiAgdHJ5IHtcbiAgICAvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbiAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbilcbiAgICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpbiAmJiBoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSlcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKFxuICByb3V0ZTogc3RyaW5nLFxuICBhc1BhdGhuYW1lOiBzdHJpbmcsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKSB7XG4gIGxldCBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnXG5cbiAgY29uc3QgZHluYW1pY1JlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgY29uc3QgZHluYW1pY0dyb3VwcyA9IGR5bmFtaWNSZWdleC5ncm91cHNcbiAgY29uc3QgZHluYW1pY01hdGNoZXMgPVxuICAgIC8vIFRyeSB0byBtYXRjaCB0aGUgZHluYW1pYyByb3V0ZSBhZ2FpbnN0IHRoZSBhc1BhdGhcbiAgICAoYXNQYXRobmFtZSAhPT0gcm91dGUgPyBnZXRSb3V0ZU1hdGNoZXIoZHluYW1pY1JlZ2V4KShhc1BhdGhuYW1lKSA6ICcnKSB8fFxuICAgIC8vIEZhbGwgYmFjayB0byByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaHJlZlxuICAgIC8vIFRPRE86IHNob3VsZCB0aGlzIHRha2UgcHJpb3JpdHk7IGFsc28gbmVlZCB0byBjaGFuZ2UgaW4gdGhlIHJvdXRlci5cbiAgICBxdWVyeVxuXG4gIGludGVycG9sYXRlZFJvdXRlID0gcm91dGVcbiAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmtleXMoZHluYW1pY0dyb3VwcylcblxuICBpZiAoXG4gICAgIXBhcmFtcy5ldmVyeSgocGFyYW0pID0+IHtcbiAgICAgIGxldCB2YWx1ZSA9IGR5bmFtaWNNYXRjaGVzW3BhcmFtXSB8fCAnJ1xuICAgICAgY29uc3QgeyByZXBlYXQsIG9wdGlvbmFsIH0gPSBkeW5hbWljR3JvdXBzW3BhcmFtXVxuXG4gICAgICAvLyBzdXBwb3J0IHNpbmdsZS1sZXZlbCBjYXRjaC1hbGxcbiAgICAgIC8vIFRPRE86IG1vcmUgcm9idXN0IGhhbmRsaW5nIGZvciB1c2VyLWVycm9yIChwYXNzaW5nIGAvYClcbiAgICAgIGxldCByZXBsYWNlZCA9IGBbJHtyZXBlYXQgPyAnLi4uJyA6ICcnfSR7cGFyYW19XWBcbiAgICAgIGlmIChvcHRpb25hbCkge1xuICAgICAgICByZXBsYWNlZCA9IGAkeyF2YWx1ZSA/ICcvJyA6ICcnfVske3JlcGxhY2VkfV1gXG4gICAgICB9XG4gICAgICBpZiAocmVwZWF0ICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkgdmFsdWUgPSBbdmFsdWVdXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIChvcHRpb25hbCB8fCBwYXJhbSBpbiBkeW5hbWljTWF0Y2hlcykgJiZcbiAgICAgICAgLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG4gICAgICAgIChpbnRlcnBvbGF0ZWRSb3V0ZSA9XG4gICAgICAgICAgaW50ZXJwb2xhdGVkUm91dGUhLnJlcGxhY2UoXG4gICAgICAgICAgICByZXBsYWNlZCxcbiAgICAgICAgICAgIHJlcGVhdFxuICAgICAgICAgICAgICA/ICh2YWx1ZSBhcyBzdHJpbmdbXSlcbiAgICAgICAgICAgICAgICAgIC5tYXAoXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZXNlIHZhbHVlcyBzaG91bGQgYmUgZnVsbHkgZW5jb2RlZCBpbnN0ZWFkIG9mIGp1c3RcbiAgICAgICAgICAgICAgICAgICAgLy8gcGF0aCBkZWxpbWl0ZXIgZXNjYXBlZCBzaW5jZSB0aGV5IGFyZSBiZWluZyBpbnNlcnRlZFxuICAgICAgICAgICAgICAgICAgICAvLyBpbnRvIHRoZSBVUkwgYW5kIHdlIGV4cGVjdCBVUkwgZW5jb2RlZCBzZWdtZW50c1xuICAgICAgICAgICAgICAgICAgICAvLyB3aGVuIHBhcnNpbmcgZHluYW1pYyByb3V0ZSBwYXJhbXNcbiAgICAgICAgICAgICAgICAgICAgKHNlZ21lbnQpID0+IGVuY29kZVVSSUNvbXBvbmVudChzZWdtZW50KVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgLmpvaW4oJy8nKVxuICAgICAgICAgICAgICA6IGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSBhcyBzdHJpbmcpXG4gICAgICAgICAgKSB8fCAnLycpXG4gICAgICApXG4gICAgfSlcbiAgKSB7XG4gICAgaW50ZXJwb2xhdGVkUm91dGUgPSAnJyAvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuXG4gICAgLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbiAgICAvLyBkZXZlbG9wbWVudCBpbiB0aGUgYDxMaW5rPmAgY29tcG9uZW50IGRpcmVjdGx5LlxuICB9XG4gIHJldHVybiB7XG4gICAgcGFyYW1zLFxuICAgIHJlc3VsdDogaW50ZXJwb2xhdGVkUm91dGUsXG4gIH1cbn1cblxuZnVuY3Rpb24gb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSwgcGFyYW1zOiBzdHJpbmdbXSkge1xuICBjb25zdCBmaWx0ZXJlZFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG5cbiAgT2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGlmICghcGFyYW1zLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgIGZpbHRlcmVkUXVlcnlba2V5XSA9IHF1ZXJ5W2tleV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBmaWx0ZXJlZFF1ZXJ5XG59XG5cbi8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlSHJlZihcbiAgY3VycmVudFBhdGg6IHN0cmluZyxcbiAgaHJlZjogVXJsLFxuICByZXNvbHZlQXM/OiBib29sZWFuXG4pOiBzdHJpbmcge1xuICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICBjb25zdCBiYXNlID0gbmV3IFVSTChjdXJyZW50UGF0aCwgJ2h0dHA6Ly9uJylcbiAgY29uc3QgdXJsQXNTdHJpbmcgPVxuICAgIHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiBmb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKVxuICAvLyBSZXR1cm4gYmVjYXVzZSBpdCBjYW5ub3QgYmUgcm91dGVkIGJ5IHRoZSBOZXh0LmpzIHJvdXRlclxuICBpZiAoIWlzTG9jYWxVUkwodXJsQXNTdHJpbmcpKSB7XG4gICAgcmV0dXJuIChyZXNvbHZlQXMgPyBbdXJsQXNTdHJpbmddIDogdXJsQXNTdHJpbmcpIGFzIHN0cmluZ1xuICB9XG4gIHRyeSB7XG4gICAgY29uc3QgZmluYWxVcmwgPSBuZXcgVVJMKHVybEFzU3RyaW5nLCBiYXNlKVxuICAgIGZpbmFsVXJsLnBhdGhuYW1lID0gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goZmluYWxVcmwucGF0aG5hbWUpXG4gICAgbGV0IGludGVycG9sYXRlZEFzID0gJydcblxuICAgIGlmIChcbiAgICAgIGlzRHluYW1pY1JvdXRlKGZpbmFsVXJsLnBhdGhuYW1lKSAmJlxuICAgICAgZmluYWxVcmwuc2VhcmNoUGFyYW1zICYmXG4gICAgICByZXNvbHZlQXNcbiAgICApIHtcbiAgICAgIGNvbnN0IHF1ZXJ5ID0gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShmaW5hbFVybC5zZWFyY2hQYXJhbXMpXG5cbiAgICAgIGNvbnN0IHsgcmVzdWx0LCBwYXJhbXMgfSA9IGludGVycG9sYXRlQXMoXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgcXVlcnlcbiAgICAgIClcblxuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICBpbnRlcnBvbGF0ZWRBcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICBwYXRobmFtZTogcmVzdWx0LFxuICAgICAgICAgIGhhc2g6IGZpbmFsVXJsLmhhc2gsXG4gICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgcGFyYW1zKSxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9XG4gICAgICBmaW5hbFVybC5vcmlnaW4gPT09IGJhc2Uub3JpZ2luXG4gICAgICAgID8gZmluYWxVcmwuaHJlZi5zbGljZShmaW5hbFVybC5vcmlnaW4ubGVuZ3RoKVxuICAgICAgICA6IGZpbmFsVXJsLmhyZWZcblxuICAgIHJldHVybiAocmVzb2x2ZUFzXG4gICAgICA/IFtyZXNvbHZlZEhyZWYsIGludGVycG9sYXRlZEFzIHx8IHJlc29sdmVkSHJlZl1cbiAgICAgIDogcmVzb2x2ZWRIcmVmKSBhcyBzdHJpbmdcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiAocmVzb2x2ZUFzID8gW3VybEFzU3RyaW5nXSA6IHVybEFzU3RyaW5nKSBhcyBzdHJpbmdcbiAgfVxufVxuXG5mdW5jdGlvbiBzdHJpcE9yaWdpbih1cmw6IHN0cmluZykge1xuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG5cbiAgcmV0dXJuIHVybC5zdGFydHNXaXRoKG9yaWdpbikgPyB1cmwuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpIDogdXJsXG59XG5cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXI6IE5leHRSb3V0ZXIsIHVybDogVXJsLCBhcz86IFVybCkge1xuICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgbGV0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCB1cmwsIHRydWUpXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgY29uc3QgaHJlZkhhZE9yaWdpbiA9IHJlc29sdmVkSHJlZi5zdGFydHNXaXRoKG9yaWdpbilcbiAgY29uc3QgYXNIYWRPcmlnaW4gPSByZXNvbHZlZEFzICYmIHJlc29sdmVkQXMuc3RhcnRzV2l0aChvcmlnaW4pXG5cbiAgcmVzb2x2ZWRIcmVmID0gc3RyaXBPcmlnaW4ocmVzb2x2ZWRIcmVmKVxuICByZXNvbHZlZEFzID0gcmVzb2x2ZWRBcyA/IHN0cmlwT3JpZ2luKHJlc29sdmVkQXMpIDogcmVzb2x2ZWRBc1xuXG4gIGNvbnN0IHByZXBhcmVkVXJsID0gaHJlZkhhZE9yaWdpbiA/IHJlc29sdmVkSHJlZiA6IGFkZEJhc2VQYXRoKHJlc29sdmVkSHJlZilcbiAgY29uc3QgcHJlcGFyZWRBcyA9IGFzXG4gICAgPyBzdHJpcE9yaWdpbihyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIGFzKSlcbiAgICA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmXG5cbiAgcmV0dXJuIHtcbiAgICB1cmw6IHByZXBhcmVkVXJsLFxuICAgIGFzOiBhc0hhZE9yaWdpbiA/IHByZXBhcmVkQXMgOiBhZGRCYXNlUGF0aChwcmVwYXJlZEFzKSxcbiAgfVxufVxuXG5mdW5jdGlvbiByZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lOiBzdHJpbmcsIHBhZ2VzOiBzdHJpbmdbXSkge1xuICBjb25zdCBjbGVhblBhdGhuYW1lID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVub3JtYWxpemVQYWdlUGF0aChwYXRobmFtZSEpKVxuXG4gIGlmIChjbGVhblBhdGhuYW1lID09PSAnLzQwNCcgfHwgY2xlYW5QYXRobmFtZSA9PT0gJy9fZXJyb3InKSB7XG4gICAgcmV0dXJuIHBhdGhuYW1lXG4gIH1cblxuICAvLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG4gIGlmICghcGFnZXMuaW5jbHVkZXMoY2xlYW5QYXRobmFtZSEpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgIHBhZ2VzLnNvbWUoKHBhZ2UpID0+IHtcbiAgICAgIGlmIChpc0R5bmFtaWNSb3V0ZShwYWdlKSAmJiBnZXRSb3V0ZVJlZ2V4KHBhZ2UpLnJlLnRlc3QoY2xlYW5QYXRobmFtZSEpKSB7XG4gICAgICAgIHBhdGhuYW1lID0gcGFnZVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxufVxuXG5leHBvcnQgdHlwZSBCYXNlUm91dGVyID0ge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4gIGlzTG9jYWxlRG9tYWluOiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICAgIHwgJ2lzUmVhZHknXG4gICAgfCAnaXNQcmV2aWV3J1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG59XG5cbmV4cG9ydCB0eXBlIFByaXZhdGVSb3V0ZUluZm8gPVxuICB8IChPbWl0PENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbywgJ3N0eWxlU2hlZXRzJz4gJiB7IGluaXRpYWw6IHRydWUgfSlcbiAgfCBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm9cblxuZXhwb3J0IHR5cGUgQ29tcGxldGVQcml2YXRlUm91dGVJbmZvID0ge1xuICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogUmVjb3JkPHN0cmluZywgYW55PlxuICBlcnI/OiBFcnJvclxuICBlcnJvcj86IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wcyA9IFBpY2s8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvLCAnQ29tcG9uZW50JyB8ICdlcnInPiAmIHtcbiAgcm91dGVyOiBSb3V0ZXJcbn0gJiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG5leHBvcnQgdHlwZSBBcHBDb21wb25lbnQgPSBDb21wb25lbnRUeXBlPEFwcFByb3BzPlxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChcbiAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyxcbiAgQXBwOiBBcHBDb21wb25lbnQsXG4gIHJlc2V0U2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCBudWxsXG4pID0+IFByb21pc2U8dm9pZD5cblxudHlwZSBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBOZXh0SGlzdG9yeVN0YXRlKSA9PiBib29sZWFuXG5cbnR5cGUgQ29tcG9uZW50TG9hZENhbmNlbCA9ICgoKSA9PiB2b2lkKSB8IG51bGxcblxudHlwZSBIaXN0b3J5TWV0aG9kID0gJ3JlcGxhY2VTdGF0ZScgfCAncHVzaFN0YXRlJ1xuXG5jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiA9XG4gIHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04gJiZcbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiB3aW5kb3cuaGlzdG9yeSAmJlxuICAhIShmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCB2ID0gJ19fbmV4dCdcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgIHJldHVybiBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHYsIHYpLCBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKHYpLCB0cnVlXG4gICAgfSBjYXRjaCAobikge31cbiAgfSkoKVxuXG5jb25zdCBTU0dfREFUQV9OT1RfRk9VTkQgPSBTeW1ib2woJ1NTR19EQVRBX05PVF9GT1VORCcpXG5cbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsOiBzdHJpbmcsIGF0dGVtcHRzOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgLy9cbiAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgLy8gPiBvcHRpb24uXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgIC8vXG4gICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICB9KS50aGVuKChyZXMpID0+IHtcbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSlcbiAgICAgIH1cbiAgICAgIGlmIChyZXMuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIGlmIChkYXRhLm5vdEZvdW5kKSB7XG4gICAgICAgICAgICByZXR1cm4geyBub3RGb3VuZDogU1NHX0RBVEFfTk9UX0ZPVU5EIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgIH1cbiAgICByZXR1cm4gcmVzLmpzb24oKVxuICB9KVxufVxuXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmOiBzdHJpbmcsIGlzU2VydmVyUmVuZGVyOiBib29sZWFuKSB7XG4gIHJldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlciA/IDMgOiAxKS5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgLy8gbG9vcC5cblxuICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgIG1hcmtBc3NldEVycm9yKGVycilcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciBpbXBsZW1lbnRzIEJhc2VSb3V0ZXIge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcblxuICAvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi9cbiAgY29tcG9uZW50czogeyBbcGF0aG5hbWU6IHN0cmluZ106IFByaXZhdGVSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICAvLyBJbi1mbGlnaHQgU2VydmVyIERhdGEgUmVxdWVzdHMsIGZvciBkZWR1cGluZ1xuICBzZHI6IHsgW2FzUGF0aDogc3RyaW5nXTogUHJvbWlzZTxvYmplY3Q+IH0gPSB7fVxuXG4gIHN1YjogU3Vic2NyaXB0aW9uXG4gIGNsYzogQ29tcG9uZW50TG9hZENhbmNlbFxuICBwYWdlTG9hZGVyOiBhbnlcbiAgX2JwczogQmVmb3JlUG9wU3RhdGVDYWxsYmFjayB8IHVuZGVmaW5lZFxuICBldmVudHM6IE1pdHRFbWl0dGVyXG4gIF93cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICBpc1NzcjogYm9vbGVhblxuICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gIF9pbkZsaWdodFJvdXRlPzogc3RyaW5nXG4gIF9zaGFsbG93PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbiAgaXNSZWFkeTogYm9vbGVhblxuICBpc1ByZXZpZXc6IGJvb2xlYW5cbiAgaXNMb2NhbGVEb21haW46IGJvb2xlYW5cblxuICBwcml2YXRlIF9pZHg6IG51bWJlciA9IDBcblxuICBzdGF0aWMgZXZlbnRzOiBNaXR0RW1pdHRlciA9IG1pdHQoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAge1xuICAgICAgaW5pdGlhbFByb3BzLFxuICAgICAgcGFnZUxvYWRlcixcbiAgICAgIEFwcCxcbiAgICAgIHdyYXBBcHAsXG4gICAgICBDb21wb25lbnQsXG4gICAgICBlcnIsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBpc0ZhbGxiYWNrLFxuICAgICAgbG9jYWxlLFxuICAgICAgbG9jYWxlcyxcbiAgICAgIGRlZmF1bHRMb2NhbGUsXG4gICAgICBkb21haW5Mb2NhbGVzLFxuICAgICAgaXNQcmV2aWV3LFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIEFwcDogQXBwQ29tcG9uZW50XG4gICAgICB3cmFwQXBwOiAoV3JhcEFwcENvbXBvbmVudDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgICBsb2NhbGU/OiBzdHJpbmdcbiAgICAgIGxvY2FsZXM/OiBzdHJpbmdbXVxuICAgICAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICAgICAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbiAgICAgIGlzUHJldmlldz86IGJvb2xlYW5cbiAgICB9XG4gICkge1xuICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgIHRoaXMucm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9XG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgaW5pdGlhbDogdHJ1ZSxcbiAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgZXJyLFxuICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7XG4gICAgICBDb21wb25lbnQ6IEFwcCBhcyBDb21wb25lbnRUeXBlLFxuICAgICAgc3R5bGVTaGVldHM6IFtcbiAgICAgICAgLyogL19hcHAgZG9lcyBub3QgbmVlZCBpdHMgc3R5bGVzaGVldHMgbWFuYWdlZCAqL1xuICAgICAgXSxcbiAgICB9XG5cbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgIGNvbnN0IGF1dG9FeHBvcnREeW5hbWljID1cbiAgICAgIGlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBzZWxmLl9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydFxuXG4gICAgdGhpcy5hc1BhdGggPSBhdXRvRXhwb3J0RHluYW1pYyA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIHRoaXMuaXNSZWFkeSA9ICEhKFxuICAgICAgc2VsZi5fX05FWFRfREFUQV9fLmdzc3AgfHxcbiAgICAgIHNlbGYuX19ORVhUX0RBVEFfXy5naXAgfHxcbiAgICAgICghYXV0b0V4cG9ydER5bmFtaWMgJiZcbiAgICAgICAgIXNlbGYubG9jYXRpb24uc2VhcmNoICYmXG4gICAgICAgICFwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTKVxuICAgIClcbiAgICB0aGlzLmlzUHJldmlldyA9ICEhaXNQcmV2aWV3XG4gICAgdGhpcy5pc0xvY2FsZURvbWFpbiA9IGZhbHNlXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVcbiAgICAgIHRoaXMubG9jYWxlcyA9IGxvY2FsZXNcbiAgICAgIHRoaXMuZGVmYXVsdExvY2FsZSA9IGRlZmF1bHRMb2NhbGVcbiAgICAgIHRoaXMuZG9tYWluTG9jYWxlcyA9IGRvbWFpbkxvY2FsZXNcbiAgICAgIHRoaXMuaXNMb2NhbGVEb21haW4gPSAhIWRldGVjdERvbWFpbkxvY2FsZShcbiAgICAgICAgZG9tYWluTG9jYWxlcyxcbiAgICAgICAgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZVxuICAgICAgKVxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgICAgZ2V0VVJMKCksXG4gICAgICAgICAgeyBsb2NhbGUgfVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcblxuICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZSA9IChlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlIGFzIEhpc3RvcnlTdGF0ZVxuXG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgZ2V0VVJMKClcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghc3RhdGUuX19OKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXQgZm9yY2VkU2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCB1bmRlZmluZWRcbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMsIGlkeCB9ID0gc3RhdGVcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgIGlmICh0aGlzLl9pZHggIT09IGlkeCkge1xuICAgICAgICAgIC8vIFNuYXBzaG90IGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uOlxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICAgICAgICAnX19uZXh0X3Njcm9sbF8nICsgdGhpcy5faWR4LFxuICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7IHg6IHNlbGYucGFnZVhPZmZzZXQsIHk6IHNlbGYucGFnZVlPZmZzZXQgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9IGNhdGNoIHt9XG5cbiAgICAgICAgICAvLyBSZXN0b3JlIG9sZCBzY3JvbGwgcG9zaXRpb246XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHYgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdfX25leHRfc2Nyb2xsXycgKyBpZHgpXG4gICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSBKU09OLnBhcnNlKHYhKVxuICAgICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgZm9yY2VkU2Nyb2xsID0geyB4OiAwLCB5OiAwIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5faWR4ID0gaWR4XG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgIGlmICh0aGlzLmlzU3NyICYmIGFzID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2UoXG4gICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgIHVybCxcbiAgICAgIGFzLFxuICAgICAgT2JqZWN0LmFzc2lnbjx7fSwgVHJhbnNpdGlvbk9wdGlvbnMsIFRyYW5zaXRpb25PcHRpb25zPih7fSwgb3B0aW9ucywge1xuICAgICAgICBzaGFsbG93OiBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5fc2hhbGxvdyxcbiAgICAgICAgbG9jYWxlOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGUsXG4gICAgICB9KSxcbiAgICAgIGZvcmNlZFNjcm9sbFxuICAgIClcbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzPzogVXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgIC8vIFRPRE86IHJlbW92ZSBpbiB0aGUgZnV0dXJlIHdoZW4gd2UgdXBkYXRlIGhpc3RvcnkgYmVmb3JlIHJvdXRlIGNoYW5nZVxuICAgICAgLy8gaXMgY29tcGxldGUsIGFzIHRoZSBwb3BzdGF0ZSBldmVudCBzaG91bGQgaGFuZGxlIHRoaXMgY2FwdHVyZS5cbiAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFNuYXBzaG90IHNjcm9sbCBwb3NpdGlvbiByaWdodCBiZWZvcmUgbmF2aWdhdGluZyB0byBhIG5ldyBwYWdlOlxuICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICAnX19uZXh0X3Njcm9sbF8nICsgdGhpcy5faWR4LFxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoeyB4OiBzZWxmLnBhZ2VYT2Zmc2V0LCB5OiBzZWxmLnBhZ2VZT2Zmc2V0IH0pXG4gICAgICAgICAgKVxuICAgICAgICB9IGNhdGNoIHt9XG4gICAgICB9XG4gICAgfVxuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICByZXBsYWNlKHVybDogVXJsLCBhcz86IFVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBjaGFuZ2UoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMsXG4gICAgZm9yY2VkU2Nyb2xsPzogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9XG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmICghaXNMb2NhbFVSTCh1cmwpKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybFxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gZm9yIHN0YXRpYyBwYWdlcyB3aXRoIHF1ZXJ5IHBhcmFtcyBpbiB0aGUgVVJMIHdlIGRlbGF5XG4gICAgLy8gbWFya2luZyB0aGUgcm91dGVyIHJlYWR5IHVudGlsIGFmdGVyIHRoZSBxdWVyeSBpcyB1cGRhdGVkXG4gICAgaWYgKChvcHRpb25zIGFzIGFueSkuX2gpIHtcbiAgICAgIHRoaXMuaXNSZWFkeSA9IHRydWVcbiAgICB9XG5cbiAgICAvLyBEZWZhdWx0IHRvIHNjcm9sbCByZXNldCBiZWhhdmlvciB1bmxlc3MgZXhwbGljaXRseSBzcGVjaWZpZWQgdG8gYmVcbiAgICAvLyBgZmFsc2VgISBUaGlzIG1ha2VzIHRoZSBiZWhhdmlvciBiZXR3ZWVuIHVzaW5nIGBSb3V0ZXIjcHVzaGAgYW5kIGFcbiAgICAvLyBgPExpbmsgLz5gIGNvbnNpc3RlbnQuXG4gICAgb3B0aW9ucy5zY3JvbGwgPSAhIShvcHRpb25zLnNjcm9sbCA/PyB0cnVlKVxuXG4gICAgbGV0IGxvY2FsZUNoYW5nZSA9IG9wdGlvbnMubG9jYWxlICE9PSB0aGlzLmxvY2FsZVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgIHRoaXMubG9jYWxlID1cbiAgICAgICAgb3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlXG4gICAgICAgICAgPyB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgICA6IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMubG9jYWxlXG5cbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG9wdGlvbnMubG9jYWxlID0gdGhpcy5sb2NhbGVcbiAgICAgIH1cblxuICAgICAgY29uc3QgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzKVxuICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9IG5vcm1hbGl6ZUxvY2FsZVBhdGgoXG4gICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lLFxuICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgIClcblxuICAgICAgaWYgKGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUpIHtcbiAgICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlXG4gICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gYWRkQmFzZVBhdGgocGFyc2VkQXMucGF0aG5hbWUpXG4gICAgICAgIGFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpXG4gICAgICAgIHVybCA9IGFkZEJhc2VQYXRoKFxuICAgICAgICAgIG5vcm1hbGl6ZUxvY2FsZVBhdGgoXG4gICAgICAgICAgICBoYXNCYXNlUGF0aCh1cmwpID8gZGVsQmFzZVBhdGgodXJsKSA6IHVybCxcbiAgICAgICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgICAgICkucGF0aG5hbWVcbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgbGV0IGRpZE5hdmlnYXRlID0gZmFsc2VcblxuICAgICAgLy8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAvLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIC8vIGlmIHRoZSBsb2NhbGUgaXNuJ3QgY29uZmlndXJlZCBoYXJkIG5hdmlnYXRlIHRvIHNob3cgNDA0IHBhZ2VcbiAgICAgICAgaWYgKCF0aGlzLmxvY2FsZXM/LmluY2x1ZGVzKHRoaXMubG9jYWxlISkpIHtcbiAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGFkZExvY2FsZShwYXJzZWRBcy5wYXRobmFtZSwgdGhpcy5sb2NhbGUpXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcylcbiAgICAgICAgICAvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuICAgICAgICAgIC8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgZGlkTmF2aWdhdGUgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgZGV0ZWN0ZWREb21haW4gPSBkZXRlY3REb21haW5Mb2NhbGUoXG4gICAgICAgIHRoaXMuZG9tYWluTG9jYWxlcyxcbiAgICAgICAgdW5kZWZpbmVkLFxuICAgICAgICB0aGlzLmxvY2FsZVxuICAgICAgKVxuXG4gICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgIC8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgLy8gaWYgd2UgYXJlIG5hdmlnYXRpbmcgdG8gYSBkb21haW4gbG9jYWxlIGVuc3VyZSB3ZSByZWRpcmVjdCB0byB0aGVcbiAgICAgICAgLy8gY29ycmVjdCBkb21haW5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICFkaWROYXZpZ2F0ZSAmJlxuICAgICAgICAgIGRldGVjdGVkRG9tYWluICYmXG4gICAgICAgICAgdGhpcy5pc0xvY2FsZURvbWFpbiAmJlxuICAgICAgICAgIHNlbGYubG9jYXRpb24uaG9zdG5hbWUgIT09IGRldGVjdGVkRG9tYWluLmRvbWFpblxuICAgICAgICApIHtcbiAgICAgICAgICBjb25zdCBhc05vQmFzZVBhdGggPSBkZWxCYXNlUGF0aChhcylcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwID8gJycgOiAncyd9Oi8vJHtcbiAgICAgICAgICAgIGRldGVjdGVkRG9tYWluLmRvbWFpblxuICAgICAgICAgIH0ke2FkZEJhc2VQYXRoKFxuICAgICAgICAgICAgYCR7XG4gICAgICAgICAgICAgIHRoaXMubG9jYWxlID09PSBkZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlXG4gICAgICAgICAgICAgICAgPyAnJ1xuICAgICAgICAgICAgICAgIDogYC8ke3RoaXMubG9jYWxlfWBcbiAgICAgICAgICAgIH0ke2FzTm9CYXNlUGF0aCA9PT0gJy8nID8gJycgOiBhc05vQmFzZVBhdGh9YCB8fCAnLydcbiAgICAgICAgICApfWBcbiAgICAgICAgICAvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuICAgICAgICAgIC8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgZGlkTmF2aWdhdGUgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGRpZE5hdmlnYXRlKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKSA9PiB7fSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2gpIHtcbiAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZVxuICAgIH1cbiAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgaWYgKFNUKSB7XG4gICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpXG4gICAgfVxuXG4gICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnNcbiAgICBjb25zdCByb3V0ZVByb3BzID0geyBzaGFsbG93IH1cblxuICAgIGlmICh0aGlzLl9pbkZsaWdodFJvdXRlKSB7XG4gICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlLCByb3V0ZVByb3BzKVxuICAgIH1cblxuICAgIGFzID0gYWRkQmFzZVBhdGgoXG4gICAgICBhZGRMb2NhbGUoXG4gICAgICAgIGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLFxuICAgICAgICBvcHRpb25zLmxvY2FsZSxcbiAgICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICApXG4gICAgKVxuICAgIGNvbnN0IGNsZWFuZWRBcyA9IGRlbExvY2FsZShcbiAgICAgIGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLFxuICAgICAgdGhpcy5sb2NhbGVcbiAgICApXG4gICAgdGhpcy5faW5GbGlnaHRSb3V0ZSA9IGFzXG5cbiAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cblxuICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykpIHtcbiAgICAgIHRoaXMuYXNQYXRoID0gY2xlYW5lZEFzXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKVxuICAgICAgLy8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuICAgICAgdGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKVxuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdLCBudWxsKVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcylcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuICAgIGxldCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gcGFyc2VkXG5cbiAgICAvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4gICAgLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4gICAgLy8gd2hlbiByZXdyaXR0ZW4gdG9cbiAgICBsZXQgcGFnZXM6IGFueSwgcmV3cml0ZXM6IGFueVxuICAgIHRyeSB7XG4gICAgICBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG4gICAgICA7KHsgX19yZXdyaXRlczogcmV3cml0ZXMgfSA9IGF3YWl0IGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKSlcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIC8vIElmIHdlIGZhaWwgdG8gcmVzb2x2ZSB0aGUgcGFnZSBsaXN0IG9yIGNsaWVudC1idWlsZCBtYW5pZmVzdCwgd2UgbXVzdFxuICAgICAgLy8gZG8gYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uOlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgaWYgKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykgJiYgIWxvY2FsZUNoYW5nZSkge1xuICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICB9XG5cbiAgICAvLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuICAgIC8vIHBhZ2VzIHRvIGFsbG93IGJ1aWxkaW5nIHRoZSBkYXRhIFVSTCBjb3JyZWN0bHlcbiAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzXG5cbiAgICAvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4gICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgIC8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgPyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZWxCYXNlUGF0aChwYXRobmFtZSkpXG4gICAgICA6IHBhdGhuYW1lXG5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMgJiYgYXMuc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgIGNvbnN0IHJld3JpdGVzUmVzdWx0ID0gcmVzb2x2ZVJld3JpdGVzKFxuICAgICAgICAgIGFkZEJhc2VQYXRoKGFkZExvY2FsZShjbGVhbmVkQXMsIHRoaXMubG9jYWxlKSksXG4gICAgICAgICAgcGFnZXMsXG4gICAgICAgICAgcmV3cml0ZXMsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgICAgKHA6IHN0cmluZykgPT4gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwLCBwYWdlcyksXG4gICAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICAgIClcbiAgICAgICAgcmVzb2x2ZWRBcyA9IHJld3JpdGVzUmVzdWx0LmFzUGF0aFxuXG4gICAgICAgIGlmIChyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSAmJiByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpIHtcbiAgICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgICBwYXRobmFtZSA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZlxuICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSByZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lLCBwYWdlcylcblxuICAgICAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIGlmICghaXNMb2NhbFVSTChhcykpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgSW52YWxpZCBocmVmOiBcIiR7dXJsfVwiIGFuZCBhczogXCIke2FzfVwiLCByZWNlaXZlZCByZWxhdGl2ZSBocmVmIGFuZCBleHRlcm5hbCBhc2AgK1xuICAgICAgICAgICAgYFxcblNlZSBtb3JlIGluZm86IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2ludmFsaWQtcmVsYXRpdmUtdXJsLWV4dGVybmFsLWFzYFxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmVzb2x2ZWRBcyksIHRoaXMubG9jYWxlKVxuXG4gICAgaWYgKGlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgY29uc3QgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKHJlc29sdmVkQXMpXG4gICAgICBjb25zdCBhc1BhdGhuYW1lID0gcGFyc2VkQXMucGF0aG5hbWVcblxuICAgICAgY29uc3Qgcm91dGVSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gICAgICBjb25zdCByb3V0ZU1hdGNoID0gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpXG4gICAgICBjb25zdCBzaG91bGRJbnRlcnBvbGF0ZSA9IHJvdXRlID09PSBhc1BhdGhuYW1lXG4gICAgICBjb25zdCBpbnRlcnBvbGF0ZWRBcyA9IHNob3VsZEludGVycG9sYXRlXG4gICAgICAgID8gaW50ZXJwb2xhdGVBcyhyb3V0ZSwgYXNQYXRobmFtZSwgcXVlcnkpXG4gICAgICAgIDogKHt9IGFzIHsgcmVzdWx0OiB1bmRlZmluZWQ7IHBhcmFtczogdW5kZWZpbmVkIH0pXG5cbiAgICAgIGlmICghcm91dGVNYXRjaCB8fCAoc2hvdWxkSW50ZXJwb2xhdGUgJiYgIWludGVycG9sYXRlZEFzLnJlc3VsdCkpIHtcbiAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoXG4gICAgICAgICAgKHBhcmFtKSA9PiAhcXVlcnlbcGFyYW1dXG4gICAgICAgIClcblxuICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgYCR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gYEludGVycG9sYXRpbmcgaHJlZmBcbiAgICAgICAgICAgICAgICAgIDogYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgYFxuICAgICAgICAgICAgICB9IGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIChzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICA/IGBUaGUgcHJvdmlkZWQgXFxgaHJlZlxcYCAoJHt1cmx9KSB2YWx1ZSBpcyBtaXNzaW5nIHF1ZXJ5IHZhbHVlcyAoJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0pIHRvIGJlIGludGVycG9sYXRlZCBwcm9wZXJseS4gYFxuICAgICAgICAgICAgICA6IGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGApICtcbiAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyAnaHJlZi1pbnRlcnBvbGF0aW9uLWZhaWxlZCdcbiAgICAgICAgICAgICAgICAgIDogJ2luY29tcGF0aWJsZS1ocmVmLWFzJ1xuICAgICAgICAgICAgICB9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChzaG91bGRJbnRlcnBvbGF0ZSkge1xuICAgICAgICBhcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKFxuICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHBhcnNlZEFzLCB7XG4gICAgICAgICAgICBwYXRobmFtZTogaW50ZXJwb2xhdGVkQXMucmVzdWx0LFxuICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgaW50ZXJwb2xhdGVkQXMucGFyYW1zISksXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcywgcm91dGVQcm9wcylcblxuICAgIHRyeSB7XG4gICAgICBsZXQgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICByZXNvbHZlZEFzLFxuICAgICAgICByb3V0ZVByb3BzXG4gICAgICApXG4gICAgICBsZXQgeyBlcnJvciwgcHJvcHMsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICAvLyBoYW5kbGUgcmVkaXJlY3Qgb24gY2xpZW50LXRyYW5zaXRpb25cbiAgICAgIGlmICgoX19OX1NTRyB8fCBfX05fU1NQKSAmJiBwcm9wcykge1xuICAgICAgICBpZiAoKHByb3BzIGFzIGFueSkucGFnZVByb3BzICYmIChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1QpIHtcbiAgICAgICAgICBjb25zdCBkZXN0aW5hdGlvbiA9IChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1RcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIGRlc3RpbmF0aW9uIGlzIGludGVybmFsIChyZXNvbHZlcyB0byBhIHBhZ2UpIGFuZCBhdHRlbXB0XG4gICAgICAgICAgLy8gY2xpZW50LW5hdmlnYXRpb24gaWYgaXQgaXMgZmFsbGluZyBiYWNrIHRvIGhhcmQgbmF2aWdhdGlvbiBpZlxuICAgICAgICAgIC8vIGl0J3Mgbm90XG4gICAgICAgICAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgICAgY29uc3QgcGFyc2VkSHJlZiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gICAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShcbiAgICAgICAgICAgICAgcGFyc2VkSHJlZi5wYXRobmFtZSxcbiAgICAgICAgICAgICAgcGFnZXNcbiAgICAgICAgICAgIClcblxuICAgICAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHBhcnNlZEhyZWYucGF0aG5hbWUpKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgdXJsOiBuZXdVcmwsIGFzOiBuZXdBcyB9ID0gcHJlcGFyZVVybEFzKFxuICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb24sXG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb25cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UobWV0aG9kLCBuZXdVcmwsIG5ld0FzLCBvcHRpb25zKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZGVzdGluYXRpb25cbiAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge30pXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmlzUHJldmlldyA9ICEhcHJvcHMuX19OX1BSRVZJRVdcblxuICAgICAgICAvLyBoYW5kbGUgU1NHIGRhdGEgNDA0XG4gICAgICAgIGlmIChwcm9wcy5ub3RGb3VuZCA9PT0gU1NHX0RBVEFfTk9UX0ZPVU5EKSB7XG4gICAgICAgICAgbGV0IG5vdEZvdW5kUm91dGVcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvNDA0JylcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUgPSAnLzQwNCdcbiAgICAgICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlID0gJy9fZXJyb3InXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlLFxuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSxcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgYXMsXG4gICAgICAgICAgICByZXNvbHZlZEFzLFxuICAgICAgICAgICAgeyBzaGFsbG93OiBmYWxzZSB9XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzLCByb3V0ZVByb3BzKVxuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IGFwcENvbXA6IGFueSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnRcbiAgICAgICAgOyh3aW5kb3cgYXMgYW55KS5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAhKHJvdXRlSW5mby5Db21wb25lbnQgYXMgYW55KS5nZXRJbml0aWFsUHJvcHNcbiAgICAgIH1cblxuICAgICAgLy8gc2hhbGxvdyByb3V0aW5nIGlzIG9ubHkgYWxsb3dlZCBmb3Igc2FtZSBwYWdlIFVSTCBjaGFuZ2VzLlxuICAgICAgY29uc3QgaXNWYWxpZFNoYWxsb3dSb3V0ZSA9IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZVxuXG4gICAgICBpZiAoXG4gICAgICAgIChvcHRpb25zIGFzIGFueSkuX2ggJiZcbiAgICAgICAgcGF0aG5hbWUgPT09ICcvX2Vycm9yJyAmJlxuICAgICAgICBzZWxmLl9fTkVYVF9EQVRBX18ucHJvcHM/LnBhZ2VQcm9wcz8uc3RhdHVzQ29kZSA9PT0gNTAwICYmXG4gICAgICAgIHByb3BzPy5wYWdlUHJvcHNcbiAgICAgICkge1xuICAgICAgICAvLyBlbnN1cmUgc3RhdHVzQ29kZSBpcyBzdGlsbCBjb3JyZWN0IGZvciBzdGF0aWMgNTAwIHBhZ2VcbiAgICAgICAgLy8gd2hlbiB1cGRhdGluZyBxdWVyeSBpbmZvcm1hdGlvblxuICAgICAgICBwcm9wcy5wYWdlUHJvcHMuc3RhdHVzQ29kZSA9IDUwMFxuICAgICAgfVxuXG4gICAgICBhd2FpdCB0aGlzLnNldChcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lISxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGNsZWFuZWRBcyxcbiAgICAgICAgcm91dGVJbmZvLFxuICAgICAgICBmb3JjZWRTY3JvbGwgfHxcbiAgICAgICAgICAoaXNWYWxpZFNoYWxsb3dSb3V0ZSB8fCAhb3B0aW9ucy5zY3JvbGwgPyBudWxsIDogeyB4OiAwLCB5OiAwIH0pXG4gICAgICApLmNhdGNoKChlKSA9PiB7XG4gICAgICAgIGlmIChlLmNhbmNlbGxlZCkgZXJyb3IgPSBlcnJvciB8fCBlXG4gICAgICAgIGVsc2UgdGhyb3cgZVxuICAgICAgfSlcblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMsIHJvdXRlUHJvcHMpXG4gICAgICAgIHRocm93IGVycm9yXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIGlmICh0aGlzLmxvY2FsZSkge1xuICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5sYW5nID0gdGhpcy5sb2NhbGVcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMsIHJvdXRlUHJvcHMpXG5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfVxuXG4gIGNoYW5nZVN0YXRlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge31cbiAgKTogdm9pZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCBnZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgIHRoaXMuX3NoYWxsb3cgPSBvcHRpb25zLnNoYWxsb3dcbiAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oXG4gICAgICAgIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgICAgaWR4OiB0aGlzLl9pZHggPSBtZXRob2QgIT09ICdwdXNoU3RhdGUnID8gdGhpcy5faWR4IDogdGhpcy5faWR4ICsgMSxcbiAgICAgICAgfSBhcyBIaXN0b3J5U3RhdGUsXG4gICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAnJyxcbiAgICAgICAgYXNcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhc3luYyBoYW5kbGVSb3V0ZUluZm9FcnJvcihcbiAgICBlcnI6IEVycm9yICYgeyBjb2RlOiBhbnk7IGNhbmNlbGxlZDogYm9vbGVhbiB9LFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgcm91dGVQcm9wczogUm91dGVQcm9wZXJ0aWVzLFxuICAgIGxvYWRFcnJvckZhaWw/OiBib29sZWFuXG4gICk6IFByb21pc2U8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgIC8vIGJ1YmJsZSB1cCBjYW5jZWxsYXRpb24gZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG5cbiAgICBpZiAoaXNBc3NldEVycm9yKGVycikgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyLCBhcywgcm91dGVQcm9wcylcblxuICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG5cbiAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgIC8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICB0aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKClcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgbGV0IENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgbGV0IHN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICAgICAgbGV0IHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+IHwgdW5kZWZpbmVkXG5cbiAgICAgIGlmIChcbiAgICAgICAgdHlwZW9mIENvbXBvbmVudCEgPT09ICd1bmRlZmluZWQnIHx8XG4gICAgICAgIHR5cGVvZiBzdHlsZVNoZWV0cyEgPT09ICd1bmRlZmluZWQnXG4gICAgICApIHtcbiAgICAgICAgOyh7IHBhZ2U6IENvbXBvbmVudCwgc3R5bGVTaGVldHMgfSA9IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoXG4gICAgICAgICAgJy9fZXJyb3InXG4gICAgICAgICkpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogQ29tcGxldGVQcml2YXRlUm91dGVJbmZvID0ge1xuICAgICAgICBwcm9wcyxcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0cyxcbiAgICAgICAgZXJyLFxuICAgICAgICBlcnJvcjogZXJyLFxuICAgICAgfVxuXG4gICAgICBpZiAoIXJvdXRlSW5mby5wcm9wcykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IGF3YWl0IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwge1xuICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICB9IGFzIGFueSlcbiAgICAgICAgfSBjYXRjaCAoZ2lwRXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKVxuICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKHJvdXRlSW5mb0Vycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgICAgIHJvdXRlSW5mb0VycixcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhcyxcbiAgICAgICAgcm91dGVQcm9wcyxcbiAgICAgICAgdHJ1ZVxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGdldFJvdXRlSW5mbyhcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIHJlc29sdmVkQXM6IHN0cmluZyxcbiAgICByb3V0ZVByb3BzOiBSb3V0ZVByb3BlcnRpZXNcbiAgKTogUHJvbWlzZTxQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGV4aXN0aW5nUm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvIHwgdW5kZWZpbmVkID0gdGhpcy5jb21wb25lbnRzW1xuICAgICAgICByb3V0ZVxuICAgICAgXVxuICAgICAgaWYgKHJvdXRlUHJvcHMuc2hhbGxvdyAmJiBleGlzdGluZ1JvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICByZXR1cm4gZXhpc3RpbmdSb3V0ZUluZm9cbiAgICAgIH1cblxuICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvOiBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gfCB1bmRlZmluZWQgPVxuICAgICAgICBleGlzdGluZ1JvdXRlSW5mbyAmJiAnaW5pdGlhbCcgaW4gZXhpc3RpbmdSb3V0ZUluZm9cbiAgICAgICAgICA/IHVuZGVmaW5lZFxuICAgICAgICAgIDogZXhpc3RpbmdSb3V0ZUluZm9cbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogQ29tcGxldGVQcml2YXRlUm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgID8gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbigocmVzKSA9PiAoe1xuICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgIHN0eWxlU2hlZXRzOiByZXMuc3R5bGVTaGVldHMsXG4gICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgfSkpXG5cbiAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IGRhdGFIcmVmOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICBkYXRhSHJlZiA9IHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICByZXNvbHZlZEFzLFxuICAgICAgICAgIF9fTl9TU0csXG4gICAgICAgICAgdGhpcy5sb2NhbGVcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldERhdGE8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvPigoKSA9PlxuICAgICAgICBfX05fU1NHXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoXG4gICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICApXG4gICAgICApXG5cbiAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlUHJvcHMpXG4gICAgfVxuICB9XG5cbiAgc2V0KFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBQcml2YXRlUm91dGVJbmZvLFxuICAgIHJlc2V0U2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCBudWxsXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlXG5cbiAgICB0aGlzLnJvdXRlID0gcm91dGVcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEsIHJlc2V0U2Nyb2xsKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWUgb3IgYCN0b3BgXG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgaWYgKGhhc2ggPT09ICcnIHx8IGhhc2ggPT09ICd0b3AnKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpXG4gICAgaWYgKGlkRWwpIHtcbiAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdXG4gICAgaWYgKG5hbWVFbCkge1xuICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KClcbiAgICB9XG4gIH1cblxuICB1cmxJc05ldyhhc1BhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBhc3luYyBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSB9ID0gcGFyc2VkXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgaWYgKG9wdGlvbnMubG9jYWxlID09PSBmYWxzZSkge1xuICAgICAgICBwYXRobmFtZSA9IG5vcm1hbGl6ZUxvY2FsZVBhdGghKHBhdGhuYW1lLCB0aGlzLmxvY2FsZXMpLnBhdGhuYW1lXG4gICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcblxuICAgICAgICBsZXQgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKGFzUGF0aClcbiAgICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9IG5vcm1hbGl6ZUxvY2FsZVBhdGghKFxuICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lLFxuICAgICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgICApXG4gICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gbG9jYWxlUGF0aFJlc3VsdC5wYXRobmFtZVxuICAgICAgICBvcHRpb25zLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUgfHwgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgIGFzUGF0aCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcbiAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzUGF0aFxuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMgJiYgYXNQYXRoLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgbGV0IHJld3JpdGVzOiBhbnlcbiAgICAgIDsoeyBfX3Jld3JpdGVzOiByZXdyaXRlcyB9ID0gYXdhaXQgZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpKVxuXG4gICAgICBjb25zdCByZXdyaXRlc1Jlc3VsdCA9IHJlc29sdmVSZXdyaXRlcyhcbiAgICAgICAgYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGFzUGF0aCwgdGhpcy5sb2NhbGUpKSxcbiAgICAgICAgcGFnZXMsXG4gICAgICAgIHJld3JpdGVzLFxuICAgICAgICBwYXJzZWQucXVlcnksXG4gICAgICAgIChwOiBzdHJpbmcpID0+IHJlc29sdmVEeW5hbWljUm91dGUocCwgcGFnZXMpLFxuICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgIClcbiAgICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmV3cml0ZXNSZXN1bHQuYXNQYXRoKSwgdGhpcy5sb2NhbGUpXG5cbiAgICAgIGlmIChyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSAmJiByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpIHtcbiAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICBwYXRobmFtZSA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZlxuICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkLnBhdGhuYW1lLCBwYWdlcylcblxuICAgICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLnBhZ2VMb2FkZXIuX2lzU3NnKHJvdXRlKS50aGVuKChpc1NzZzogYm9vbGVhbikgPT4ge1xuICAgICAgICByZXR1cm4gaXNTc2dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoXG4gICAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgICAgICAgICB0cnVlLFxuICAgICAgICAgICAgICAgIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgICAgICAgID8gb3B0aW9ucy5sb2NhbGVcbiAgICAgICAgICAgICAgICAgIDogdGhpcy5sb2NhbGVcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIDogZmFsc2VcbiAgICAgIH0pLFxuICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgIF0pXG4gIH1cblxuICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxHb29kUGFnZUNhY2hlPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH0pXG5cbiAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpXG5cbiAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICBjb25zdCBlcnJvcjogYW55ID0gbmV3IEVycm9yKFxuICAgICAgICBgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYFxuICAgICAgKVxuICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG5cbiAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdFxuICB9XG5cbiAgX2dldERhdGE8VD4oZm46ICgpID0+IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfVxuICAgIHRoaXMuY2xjID0gY2FuY2VsXG4gICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgY29uc3QgZXJyOiBhbnkgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKVxuICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFN0YXRpY0RhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiBjYWNoZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKFxuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJlxuICAgICAgIXRoaXMuaXNQcmV2aWV3ICYmXG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV1cbiAgICApIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKVxuICAgIH1cbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5zZGNbY2FjaGVLZXldID0gZGF0YVxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFNlcnZlckRhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiByZXNvdXJjZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKHRoaXMuc2RyW3Jlc291cmNlS2V5XSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XVxuICAgIH1cbiAgICByZXR1cm4gKHRoaXMuc2RyW3Jlc291cmNlS2V5XSA9IGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldXG4gICAgICAgIHJldHVybiBkYXRhXG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH0pKVxuICB9XG5cbiAgZ2V0SW5pdGlhbFByb3BzKFxuICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZSxcbiAgICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXVxuICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcCBhcyBBcHBDb21wb25lbnQpXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZywgcm91dGVQcm9wczogUm91dGVQcm9wZXJ0aWVzKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoXG4gICAgICAgICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgICAgICAgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLFxuICAgICAgICBhcyxcbiAgICAgICAgcm91dGVQcm9wc1xuICAgICAgKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KFxuICAgIGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sXG4gICAgcmVzZXRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGxcbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViKFxuICAgICAgZGF0YSxcbiAgICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQgYXMgQXBwQ29tcG9uZW50LFxuICAgICAgcmVzZXRTY3JvbGxcbiAgICApXG4gIH1cbn1cbiIsIi8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgKiBhcyBxdWVyeXN0cmluZyBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzID0gL2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRVcmwodXJsT2JqOiBVcmxPYmplY3QpIHtcbiAgbGV0IHsgYXV0aCwgaG9zdG5hbWUgfSA9IHVybE9ialxuICBsZXQgcHJvdG9jb2wgPSB1cmxPYmoucHJvdG9jb2wgfHwgJydcbiAgbGV0IHBhdGhuYW1lID0gdXJsT2JqLnBhdGhuYW1lIHx8ICcnXG4gIGxldCBoYXNoID0gdXJsT2JqLmhhc2ggfHwgJydcbiAgbGV0IHF1ZXJ5ID0gdXJsT2JqLnF1ZXJ5IHx8ICcnXG4gIGxldCBob3N0OiBzdHJpbmcgfCBmYWxzZSA9IGZhbHNlXG5cbiAgYXV0aCA9IGF1dGggPyBlbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksICc6JykgKyAnQCcgOiAnJ1xuXG4gIGlmICh1cmxPYmouaG9zdCkge1xuICAgIGhvc3QgPSBhdXRoICsgdXJsT2JqLmhvc3RcbiAgfSBlbHNlIGlmIChob3N0bmFtZSkge1xuICAgIGhvc3QgPSBhdXRoICsgKH5ob3N0bmFtZS5pbmRleE9mKCc6JykgPyBgWyR7aG9zdG5hbWV9XWAgOiBob3N0bmFtZSlcbiAgICBpZiAodXJsT2JqLnBvcnQpIHtcbiAgICAgIGhvc3QgKz0gJzonICsgdXJsT2JqLnBvcnRcbiAgICB9XG4gIH1cblxuICBpZiAocXVlcnkgJiYgdHlwZW9mIHF1ZXJ5ID09PSAnb2JqZWN0Jykge1xuICAgIHF1ZXJ5ID0gU3RyaW5nKHF1ZXJ5c3RyaW5nLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMocXVlcnkgYXMgUGFyc2VkVXJsUXVlcnkpKVxuICB9XG5cbiAgbGV0IHNlYXJjaCA9IHVybE9iai5zZWFyY2ggfHwgKHF1ZXJ5ICYmIGA/JHtxdWVyeX1gKSB8fCAnJ1xuXG4gIGlmIChwcm90b2NvbCAmJiBwcm90b2NvbC5zdWJzdHIoLTEpICE9PSAnOicpIHByb3RvY29sICs9ICc6J1xuXG4gIGlmIChcbiAgICB1cmxPYmouc2xhc2hlcyB8fFxuICAgICgoIXByb3RvY29sIHx8IHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpICYmIGhvc3QgIT09IGZhbHNlKVxuICApIHtcbiAgICBob3N0ID0gJy8vJyArIChob3N0IHx8ICcnKVxuICAgIGlmIChwYXRobmFtZSAmJiBwYXRobmFtZVswXSAhPT0gJy8nKSBwYXRobmFtZSA9ICcvJyArIHBhdGhuYW1lXG4gIH0gZWxzZSBpZiAoIWhvc3QpIHtcbiAgICBob3N0ID0gJydcbiAgfVxuXG4gIGlmIChoYXNoICYmIGhhc2hbMF0gIT09ICcjJykgaGFzaCA9ICcjJyArIGhhc2hcbiAgaWYgKHNlYXJjaCAmJiBzZWFyY2hbMF0gIT09ICc/Jykgc2VhcmNoID0gJz8nICsgc2VhcmNoXG5cbiAgcGF0aG5hbWUgPSBwYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csIGVuY29kZVVSSUNvbXBvbmVudClcbiAgc2VhcmNoID0gc2VhcmNoLnJlcGxhY2UoJyMnLCAnJTIzJylcblxuICByZXR1cm4gYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWBcbn1cbiIsIi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKVxufVxuIiwiaW1wb3J0IHsgZ2V0TG9jYXRpb25PcmlnaW4gfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG4vKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQgd2l0aCBvbmUgZXhjZXB0aW9uLCBpbiB0aGUgYnJvd3NlciwgYWJzb2x1dGUgdXJscyB0aGF0IGFyZSBvblxuICogdGhlIGN1cnJlbnQgb3JpZ2luIHdpbGwgYmUgcGFyc2VkIGFzIHJlbGF0aXZlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybDogc3RyaW5nLCBiYXNlPzogc3RyaW5nKSB7XG4gIGNvbnN0IGdsb2JhbEJhc2UgPSBuZXcgVVJMKFxuICAgIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gJ2h0dHA6Ly9uJyA6IGdldExvY2F0aW9uT3JpZ2luKClcbiAgKVxuICBjb25zdCByZXNvbHZlZEJhc2UgPSBiYXNlID8gbmV3IFVSTChiYXNlLCBnbG9iYWxCYXNlKSA6IGdsb2JhbEJhc2VcbiAgY29uc3QgeyBwYXRobmFtZSwgc2VhcmNoUGFyYW1zLCBzZWFyY2gsIGhhc2gsIGhyZWYsIG9yaWdpbiB9ID0gbmV3IFVSTChcbiAgICB1cmwsXG4gICAgcmVzb2x2ZWRCYXNlXG4gIClcbiAgaWYgKG9yaWdpbiAhPT0gZ2xvYmFsQmFzZS5vcmlnaW4pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYGludmFyaWFudDogaW52YWxpZCByZWxhdGl2ZSBVUkwsIHJvdXRlciByZWNlaXZlZCAke3VybH1gKVxuICB9XG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgcXVlcnk6IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKSxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmOiBocmVmLnNsaWNlKGdsb2JhbEJhc2Uub3JpZ2luLmxlbmd0aCksXG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5cbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KFxuICBzZWFyY2hQYXJhbXM6IFVSTFNlYXJjaFBhcmFtc1xuKTogUGFyc2VkVXJsUXVlcnkge1xuICBjb25zdCBxdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgIGlmICh0eXBlb2YgcXVlcnlba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSB2YWx1ZVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSkge1xuICAgICAgOyhxdWVyeVtrZXldIGFzIHN0cmluZ1tdKS5wdXNoKHZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBxdWVyeVtrZXldID0gW3F1ZXJ5W2tleV0gYXMgc3RyaW5nLCB2YWx1ZV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBxdWVyeVxufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHBhcmFtOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoXG4gICAgdHlwZW9mIHBhcmFtID09PSAnc3RyaW5nJyB8fFxuICAgICh0eXBlb2YgcGFyYW0gPT09ICdudW1iZXInICYmICFpc05hTihwYXJhbSkpIHx8XG4gICAgdHlwZW9mIHBhcmFtID09PSAnYm9vbGVhbidcbiAgKSB7XG4gICAgcmV0dXJuIFN0cmluZyhwYXJhbSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJydcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhcbiAgdXJsUXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBjb25zdCByZXN1bHQgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKClcbiAgT2JqZWN0LmVudHJpZXModXJsUXVlcnkpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSkgPT4gcmVzdWx0LmFwcGVuZChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0oaXRlbSkpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQuc2V0KGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbSh2YWx1ZSkpXG4gICAgfVxuICB9KVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ24oXG4gIHRhcmdldDogVVJMU2VhcmNoUGFyYW1zLFxuICAuLi5zZWFyY2hQYXJhbXNMaXN0OiBVUkxTZWFyY2hQYXJhbXNbXVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgc2VhcmNoUGFyYW1zTGlzdC5mb3JFYWNoKChzZWFyY2hQYXJhbXMpID0+IHtcbiAgICBBcnJheS5mcm9tKHNlYXJjaFBhcmFtcy5rZXlzKCkpLmZvckVhY2goKGtleSkgPT4gdGFyZ2V0LmRlbGV0ZShrZXkpKVxuICAgIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB0YXJnZXQuYXBwZW5kKGtleSwgdmFsdWUpKVxuICB9KVxuICByZXR1cm4gdGFyZ2V0XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXNvbHZlUmV3cml0ZXMoKSB7fVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCJleHBvcnQgaW50ZXJmYWNlIEdyb3VwIHtcbiAgcG9zOiBudW1iZXJcbiAgcmVwZWF0OiBib29sZWFuXG4gIG9wdGlvbmFsOiBib29sZWFuXG59XG5cbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpXG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKHBhcmFtOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3B0aW9uYWwgPSBwYXJhbS5zdGFydHNXaXRoKCdbJykgJiYgcGFyYW0uZW5kc1dpdGgoJ10nKVxuICBpZiAob3B0aW9uYWwpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDEsIC0xKVxuICB9XG4gIGNvbnN0IHJlcGVhdCA9IHBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpXG4gIGlmIChyZXBlYXQpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDMpXG4gIH1cbiAgcmV0dXJuIHsga2V5OiBwYXJhbSwgcmVwZWF0LCBvcHRpb25hbCB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KFxuICBub3JtYWxpemVkUm91dGU6IHN0cmluZ1xuKToge1xuICByZTogUmVnRXhwXG4gIG5hbWVkUmVnZXg/OiBzdHJpbmdcbiAgcm91dGVLZXlzPzogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9XG4gIGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9XG59IHtcbiAgY29uc3Qgc2VnbWVudHMgPSAobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuICAgIC5zbGljZSgxKVxuICAgIC5zcGxpdCgnLycpXG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH0gPSB7fVxuICBsZXQgZ3JvdXBJbmRleCA9IDFcbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgZ3JvdXBzW2tleV0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQsIG9wdGlvbmFsIH1cbiAgICAgICAgcmV0dXJuIHJlcGVhdCA/IChvcHRpb25hbCA/ICcoPzovKC4rPykpPycgOiAnLyguKz8pJykgOiAnLyhbXi9dKz8pJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICB9XG4gICAgfSlcbiAgICAuam9pbignJylcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbGV0IHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgIGxldCByb3V0ZUtleUNoYXJMZW5ndGggPSAxXG5cbiAgICAvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG4gICAgY29uc3QgZ2V0U2FmZVJvdXRlS2V5ID0gKCkgPT4ge1xuICAgICAgbGV0IHJvdXRlS2V5ID0gJydcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3V0ZUtleUNoYXJMZW5ndGg7IGkrKykge1xuICAgICAgICByb3V0ZUtleSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpXG4gICAgICAgIHJvdXRlS2V5Q2hhckNvZGUrK1xuXG4gICAgICAgIGlmIChyb3V0ZUtleUNoYXJDb2RlID4gMTIyKSB7XG4gICAgICAgICAgcm91dGVLZXlDaGFyTGVuZ3RoKytcbiAgICAgICAgICByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJvdXRlS2V5XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGVLZXlzOiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH0gPSB7fVxuXG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgICAvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4gICAgICAgICAgLy8gdGhlIG5hbWVkIHJlZ2V4XG4gICAgICAgICAgbGV0IGNsZWFuZWRLZXkgPSBrZXkucmVwbGFjZSgvXFxXL2csICcnKVxuICAgICAgICAgIGxldCBpbnZhbGlkS2V5ID0gZmFsc2VcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBrZXkgaXMgc3RpbGwgaW52YWxpZCBhbmQgZmFsbGJhY2sgdG8gdXNpbmcgYSBrbm93blxuICAgICAgICAgIC8vIHNhZmUga2V5XG4gICAgICAgICAgaWYgKGNsZWFuZWRLZXkubGVuZ3RoID09PSAwIHx8IGNsZWFuZWRLZXkubGVuZ3RoID4gMzApIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwgMSkpKSkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW52YWxpZEtleSkge1xuICAgICAgICAgICAgY2xlYW5lZEtleSA9IGdldFNhZmVSb3V0ZUtleSgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVLZXlzW2NsZWFuZWRLZXldID0ga2V5XG4gICAgICAgICAgcmV0dXJuIHJlcGVhdFxuICAgICAgICAgICAgPyBvcHRpb25hbFxuICAgICAgICAgICAgICA/IGAoPzovKD88JHtjbGVhbmVkS2V5fT4uKz8pKT9gXG4gICAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgXG4gICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmpvaW4oJycpXG5cbiAgICByZXR1cm4ge1xuICAgICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgICBncm91cHMsXG4gICAgICByb3V0ZUtleXMsXG4gICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICBncm91cHMsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IGZvcm1hdFVybCB9IGZyb20gJy4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwnXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgRW52IH0gZnJvbSAnQG5leHQvZW52J1xuaW1wb3J0IHsgQnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL3NlcnZlci9nZXQtcGFnZS1maWxlcydcbmltcG9ydCB7IERvbWFpbkxvY2FsZXMgfSBmcm9tICcuLi9zZXJ2ZXIvY29uZmlnJ1xuaW1wb3J0IHsgUHJldmlld0RhdGEgfSBmcm9tICduZXh0L3R5cGVzJ1xuXG4vKipcbiAqIFR5cGVzIHVzZWQgYnkgYm90aCBuZXh0IGFuZCBuZXh0LXNlcnZlclxuICovXG5cbmV4cG9ydCB0eXBlIE5leHRDb21wb25lbnRUeXBlPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPiA9IENvbXBvbmVudFR5cGU8UD4gJiB7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBpbml0aWFsIHBhZ2UgbG9hZCBkYXRhIHBvcHVsYXRpb24uIERhdGEgcmV0dXJuZWQgZnJvbSBgZ2V0SW5pdGlhbFByb3BzYCBpcyBzZXJpYWxpemVkIHdoZW4gc2VydmVyIHJlbmRlcmVkLlxuICAgKiBNYWtlIHN1cmUgdG8gcmV0dXJuIHBsYWluIGBPYmplY3RgIHdpdGhvdXQgdXNpbmcgYERhdGVgLCBgTWFwYCwgYFNldGAuXG4gICAqIEBwYXJhbSBjdHggQ29udGV4dCBvZiBgcGFnZWBcbiAgICovXG4gIGdldEluaXRpYWxQcm9wcz8oY29udGV4dDogQyk6IElQIHwgUHJvbWlzZTxJUD5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIERvY3VtZW50Q29udGV4dCxcbiAgRG9jdW1lbnRJbml0aWFsUHJvcHMsXG4gIERvY3VtZW50UHJvcHNcbj4gJiB7XG4gIHJlbmRlckRvY3VtZW50KFxuICAgIERvY3VtZW50OiBEb2N1bWVudFR5cGUsXG4gICAgcHJvcHM6IERvY3VtZW50UHJvcHNcbiAgKTogUmVhY3QuUmVhY3RFbGVtZW50XG59XG5cbmV4cG9ydCB0eXBlIEFwcFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlXG4+XG5cbmV4cG9ydCB0eXBlIEFwcFRyZWVUeXBlID0gQ29tcG9uZW50VHlwZTxcbiAgQXBwSW5pdGlhbFByb3BzICYgeyBbbmFtZTogc3RyaW5nXTogYW55IH1cbj5cblxuLyoqXG4gKiBXZWIgdml0YWxzIHByb3ZpZGVkIHRvIF9hcHAucmVwb3J0V2ViVml0YWxzIGJ5IENvcmUgV2ViIFZpdGFscyBwbHVnaW4gZGV2ZWxvcGVkIGJ5IEdvb2dsZSBDaHJvbWUgdGVhbS5cbiAqIGh0dHBzOi8vbmV4dGpzLm9yZy9ibG9nL25leHQtOS00I2ludGVncmF0ZWQtd2ViLXZpdGFscy1yZXBvcnRpbmdcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dFdlYlZpdGFsc01ldHJpYyA9IHtcbiAgaWQ6IHN0cmluZ1xuICBsYWJlbDogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICBzdGFydFRpbWU6IG51bWJlclxuICB2YWx1ZTogbnVtYmVyXG59XG5cbmV4cG9ydCB0eXBlIEVuaGFuY2VyPEM+ID0gKENvbXBvbmVudDogQykgPT4gQ1xuXG5leHBvcnQgdHlwZSBDb21wb25lbnRzRW5oYW5jZXIgPVxuICB8IHtcbiAgICAgIGVuaGFuY2VBcHA/OiBFbmhhbmNlcjxBcHBUeXBlPlxuICAgICAgZW5oYW5jZUNvbXBvbmVudD86IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuICAgIH1cbiAgfCBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZVJlc3VsdCA9IHtcbiAgaHRtbDogc3RyaW5nXG4gIGhlYWQ/OiBBcnJheTxKU1guRWxlbWVudCB8IG51bGw+XG59XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2UgPSAoXG4gIG9wdGlvbnM/OiBDb21wb25lbnRzRW5oYW5jZXJcbikgPT4gUmVuZGVyUGFnZVJlc3VsdCB8IFByb21pc2U8UmVuZGVyUGFnZVJlc3VsdD5cblxuZXhwb3J0IHR5cGUgQmFzZUNvbnRleHQgPSB7XG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIFtrOiBzdHJpbmddOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgTkVYVF9EQVRBID0ge1xuICBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PlxuICBwYWdlOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGJ1aWxkSWQ6IHN0cmluZ1xuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBydW50aW1lQ29uZmlnPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfVxuICBuZXh0RXhwb3J0PzogYm9vbGVhblxuICBhdXRvRXhwb3J0PzogYm9vbGVhblxuICBpc0ZhbGxiYWNrPzogYm9vbGVhblxuICBkeW5hbWljSWRzPzogKHN0cmluZyB8IG51bWJlcilbXVxuICBlcnI/OiBFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9XG4gIGdzcD86IGJvb2xlYW5cbiAgZ3NzcD86IGJvb2xlYW5cbiAgY3VzdG9tU2VydmVyPzogYm9vbGVhblxuICBnaXA/OiBib29sZWFuXG4gIGFwcEdpcD86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4gIHNjcmlwdExvYWRlcj86IGFueVtdXG4gIGlzUHJldmlldz86IGJvb2xlYW5cbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGRvY0NvbXBvbmVudHNSZW5kZXJlZDoge1xuICAgIEh0bWw/OiBib29sZWFuXG4gICAgTWFpbj86IGJvb2xlYW5cbiAgICBIZWFkPzogYm9vbGVhblxuICAgIE5leHRTY3JpcHQ/OiBib29sZWFuXG4gIH1cbiAgYnVpbGRNYW5pZmVzdDogQnVpbGRNYW5pZmVzdFxuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGR5bmFtaWNJbXBvcnRzOiBzdHJpbmdbXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG4gIHVuc3RhYmxlX0pzUHJlbG9hZD86IGZhbHNlXG4gIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nOiBzdHJpbmdcbiAgc2NyaXB0TG9hZGVyOiB7IGRlZmVyPzogc3RyaW5nW107IGVhZ2VyPzogYW55W10gfVxuICBsb2NhbGU/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlcXVlc3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0QXBpUmVxdWVzdCBleHRlbmRzIEluY29taW5nTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYHF1ZXJ5YCB2YWx1ZXMgZnJvbSB1cmxcbiAgICovXG4gIHF1ZXJ5OiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW11cbiAgfVxuICAvKipcbiAgICogT2JqZWN0IG9mIGBjb29raWVzYCBmcm9tIGhlYWRlclxuICAgKi9cbiAgY29va2llczoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9XG5cbiAgYm9keTogYW55XG5cbiAgZW52OiBFbnZcblxuICBwcmV2aWV3PzogYm9vbGVhblxuICAvKipcbiAgICogUHJldmlldyBkYXRhIHNldCBvbiB0aGUgcmVxdWVzdCwgaWYgYW55XG4gICAqICovXG4gIHByZXZpZXdEYXRhPzogUHJldmlld0RhdGFcbn1cblxuLyoqXG4gKiBTZW5kIGJvZHkgb2YgcmVzcG9uc2VcbiAqL1xudHlwZSBTZW5kPFQ+ID0gKGJvZHk6IFQpID0+IHZvaWRcblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlSZXNwb25zZTxUID0gYW55PiA9IFNlcnZlclJlc3BvbnNlICYge1xuICAvKipcbiAgICogU2VuZCBkYXRhIGBhbnlgIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIHNlbmQ6IFNlbmQ8VD5cbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBganNvbmAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAganNvbjogU2VuZDxUPlxuICBzdGF0dXM6IChzdGF0dXNDb2RlOiBudW1iZXIpID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdCh1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdChzdGF0dXM6IG51bWJlciwgdXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cblxuICAvKipcbiAgICogU2V0IHByZXZpZXcgZGF0YSBmb3IgTmV4dC5qcycgcHJlcmVuZGVyIG1vZGVcbiAgICovXG4gIHNldFByZXZpZXdEYXRhOiAoXG4gICAgZGF0YTogb2JqZWN0IHwgc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIChpbiBzZWNvbmRzKSBmb3IgdGhlIHByZXZpZXcgc2Vzc2lvbiB0byBsYXN0IGZvci5cbiAgICAgICAqIFRoZSBnaXZlbiBudW1iZXIgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYW4gaW50ZWdlciBieSByb3VuZGluZyBkb3duLlxuICAgICAgICogQnkgZGVmYXVsdCwgbm8gbWF4aW11bSBhZ2UgaXMgc2V0IGFuZCB0aGUgcHJldmlldyBzZXNzaW9uIGZpbmlzaGVzXG4gICAgICAgKiB3aGVuIHRoZSBjbGllbnQgc2h1dHMgZG93biAoYnJvd3NlciBpcyBjbG9zZWQpLlxuICAgICAgICovXG4gICAgICBtYXhBZ2U/OiBudW1iZXJcbiAgICB9XG4gICkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIGNsZWFyUHJldmlld0RhdGE6ICgpID0+IE5leHRBcGlSZXNwb25zZTxUPlxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgaGFuZGxlclxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpSGFuZGxlcjxUID0gYW55PiA9IChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8VD5cbikgPT4gdm9pZCB8IFByb21pc2U8dm9pZD5cblxuLyoqXG4gKiBVdGlsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXhlY09uY2U8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gUmV0dXJuVHlwZTxUPj4oXG4gIGZuOiBUXG4pOiBUIHtcbiAgbGV0IHVzZWQgPSBmYWxzZVxuICBsZXQgcmVzdWx0OiBSZXR1cm5UeXBlPFQ+XG5cbiAgcmV0dXJuICgoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBpZiAoIXVzZWQpIHtcbiAgICAgIHVzZWQgPSB0cnVlXG4gICAgICByZXN1bHQgPSBmbiguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pIGFzIFRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uXG4gIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lPFA+KENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxQPikge1xuICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICA/IENvbXBvbmVudFxuICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNTZW50KHJlczogU2VydmVyUmVzcG9uc2UpIHtcbiAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHM8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+KEFwcDogTmV4dENvbXBvbmVudFR5cGU8QywgSVAsIFA+LCBjdHg6IEMpOiBQcm9taXNlPElQPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKEFwcC5wcm90b3R5cGU/LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgIEFwcFxuICAgICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKVxuXG4gIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt9IGFzIElQXG4gIH1cblxuICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuXG4gIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICByZXR1cm4gcHJvcHNcbiAgfVxuXG4gIGlmICghcHJvcHMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgIEFwcFxuICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYFxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgICBBcHBcbiAgICAgICAgKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzXG59XG5cbmV4cG9ydCBjb25zdCB1cmxPYmplY3RLZXlzID0gW1xuICAnYXV0aCcsXG4gICdoYXNoJyxcbiAgJ2hvc3QnLFxuICAnaG9zdG5hbWUnLFxuICAnaHJlZicsXG4gICdwYXRoJyxcbiAgJ3BhdGhuYW1lJyxcbiAgJ3BvcnQnLFxuICAncHJvdG9jb2wnLFxuICAncXVlcnknLFxuICAnc2VhcmNoJyxcbiAgJ3NsYXNoZXMnLFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsOiBVcmxPYmplY3QpOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9ybWF0VXJsKHVybClcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplUGF0aFNlcD1ub3JtYWxpemVQYXRoU2VwO2V4cG9ydHMuZGVub3JtYWxpemVQYWdlUGF0aD1kZW5vcm1hbGl6ZVBhZ2VQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZVBhdGhTZXAocGF0aCl7cmV0dXJuIHBhdGgucmVwbGFjZSgvXFxcXC9nLCcvJyk7fWZ1bmN0aW9uIGRlbm9ybWFsaXplUGFnZVBhdGgocGFnZSl7cGFnZT1ub3JtYWxpemVQYXRoU2VwKHBhZ2UpO2lmKHBhZ2Uuc3RhcnRzV2l0aCgnL2luZGV4LycpKXtwYWdlPXBhZ2Uuc2xpY2UoNik7fWVsc2UgaWYocGFnZT09PScvaW5kZXgnKXtwYWdlPScvJzt9cmV0dXJuIHBhZ2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9pbWFnZScpXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJmdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2V4dGVuZHM7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIGNyZWF0ZUNvbnRleHQsIHVzZVJlZiwgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE5hdmJhclRlbXBsYXRlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZGFzaGJvYXJkL05hdmJhclRlbXBsYXRlJztcclxuXHJcbmltcG9ydCB7IGRiIH0gZnJvbSAnLi4vLi4vbGliL2ZpcmViYXNlJztcclxuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gJy4uLy4uL2xpYi9uZXdBdXRoJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgRW1wdHlTdGFydHVwIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZGFzaGJvYXJkL3N0YXJ0dXAvRW1wdHlTdGFydHVwJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IGdzYXAsIHsgUG93ZXI0IH0gZnJvbSAnZ3NhcCc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSAndXVpZCc7XHJcblxyXG5pbXBvcnQgdXNlU1dSLCB7IG11dGF0ZSB9IGZyb20gJ3N3cic7XHJcbi8vIGltcG9ydCB7IGdldEFsbFByb2plY3RzIH0gZnJvbSAnLi4vLi4vbGliL2RiJztcclxuXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgVGlwcHkgZnJvbSAnQHRpcHB5anMvcmVhY3QnO1xyXG5pbXBvcnQgVGlwcHlNb25zdGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZGFzaGJvYXJkL1RpcHB5JztcclxuXHJcbi8vIFBERlxyXG5pbXBvcnQgeyBzYXZlQXMgfSBmcm9tICdmaWxlLXNhdmVyJztcclxuaW1wb3J0IE15RG9jdW1lbnQxIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZGFzaGJvYXJkL3N0YXJ0dXAvUERGRG9jdW1lbnQnO1xyXG5pbXBvcnQgeyBwZGYgfSBmcm9tICdAcmVhY3QtcGRmL3JlbmRlcmVyJztcclxuXHJcbmltcG9ydCB7IGRlbGV0ZVByb2plY3QgfSBmcm9tICcuLi8uLi9saWIvZGInO1xyXG5pbXBvcnQgeyBmb3JtYXQsIGdldElTT0RheSwgcGFyc2VJU08gfSBmcm9tICdkYXRlLWZucyc7XHJcblxyXG5pbXBvcnQgZmV0Y2hlciBmcm9tICcuLi8uLi91dGlscy9mZXRjaGVyJztcclxuaW1wb3J0IFN0YXJ0dXBTa2VsZXRvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL2Rhc2hib2FyZC9zdGFydHVwL1N0YXJ0dXBTa2VsZXRvbic7XHJcblxyXG5jb25zdCBEaXZDb21wb25lbnQgPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAyO1xyXG4gIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgOjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHByb3BzKSA9PiAocHJvcHMuZmlsbGVkU2VjdGlvbiA/ICcjMGFmZjAwJyA6ICcjZmM1NzNiJyl9O1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICB3aWR0aDogMTUwJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDEwMCU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgfVxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxODAwcHgpIHtcclxuICAgIDo6YWZ0ZXIge1xyXG4gICAgICB3aWR0aDogMjI1JTtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBEaXZDb21wb25lbnQxID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMjtcclxuICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIDo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyhwcm9wcykgPT4gKHByb3BzLmZpbGxlZFNlY3Rpb24xID8gJyMwYWZmMDAnIDogJyNmYzU3M2InKX07XHJcbiAgICBoZWlnaHQ6IDFweDtcclxuICAgIHdpZHRoOiAxNTAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMTAwJTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICB9XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDE4MDBweCkge1xyXG4gICAgOjphZnRlciB7XHJcbiAgICAgIHdpZHRoOiAyMjUlO1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IERpdkNvbXBvbmVudDIgPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAyO1xyXG4gIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgOjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHByb3BzKSA9PiAocHJvcHMuZmlsbGVkU2VjdGlvbjIgPyAnIzBhZmYwMCcgOiAnI2ZjNTczYicpfTtcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgd2lkdGg6IDE1MCU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxMDAlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gIH1cclxuICBAbWVkaWEgKG1pbi13aWR0aDogMTgwMHB4KSB7XHJcbiAgICA6OmFmdGVyIHtcclxuICAgICAgd2lkdGg6IDIyNSU7XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgRGl2Q29tcG9uZW50MyA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgbWFyZ2luLXRvcDogMTZweDtcclxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICA6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHsocHJvcHMpID0+IChwcm9wcy5maWxsZWRTZWN0aW9uMyA/ICcjMGFmZjAwJyA6ICcjZmM1NzNiJyl9O1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICB3aWR0aDogMTUwJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDEwMCU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgfVxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxODAwcHgpIHtcclxuICAgIDo6YWZ0ZXIge1xyXG4gICAgICB3aWR0aDogMjI1JTtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBEaXZDb21wb25lbnQ0ID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMjtcclxuICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIDo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyhwcm9wcykgPT4gKHByb3BzLmZpbGxlZFNlY3Rpb240ID8gJyMwYWZmMDAnIDogJyNmYzU3M2InKX07XHJcbiAgICBoZWlnaHQ6IDFweDtcclxuICAgIHdpZHRoOiAxNTAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMTAwJTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICB9XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDE4MDBweCkge1xyXG4gICAgOjphZnRlciB7XHJcbiAgICAgIHdpZHRoOiAyMjUlO1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBEYXRhQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmNvbnN0IFN0YXJ0dXBQYWdlID0gKCkgPT4ge1xyXG4gIC8vIGNvbnN0IHsgcHJvamVjdHNlciB9ID0gZ2V0QWxsUHJvamVjdHMoKTtcclxuICAvLyBpZiAocHJvamVjdHNlcikge1xyXG4gIC8vICAgY29uc29sZS5sb2cocHJvamVjdHNlcik7XHJcbiAgLy8gfVxyXG5cclxuICBjb25zdCB7IGN1cnJlbnRVc2VyIH0gPSB1c2VBdXRoKCk7XHJcbiAgY29uc3QgW3Byb2plY3RzLCBzZXRQcm9qZWN0c10gPSB1c2VTdGF0ZSgpO1xyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgY29udGFpbmVyUmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgdGlwcHlSZWYgPSB1c2VSZWYoKTtcclxuXHJcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHNob3cgPSAoKSA9PiB7XHJcbiAgICBnc2FwLmZyb21Ubyh0aXBweVJlZi5jdXJyZW50LCB7IGF1dG9BbHBoYTogMCwgc2NhbGU6IDAgfSwgeyBhdXRvQWxwaGE6IDEsIHNjYWxlOiAxLCBkdXJhdGlvbjogMSwgZWFzZTogUG93ZXI0LmVhc2VPdXQgfSk7XHJcbiAgICBzZXRWaXNpYmxlKHRydWUpO1xyXG4gIH07XHJcbiAgY29uc3QgaGlkZSA9IGFzeW5jICgpID0+IHtcclxuICAgIGF3YWl0IGdzYXAudG8odGlwcHlSZWYuY3VycmVudCwge1xyXG4gICAgICBhdXRvQWxwaGE6IDAsXHJcbiAgICAgIHNjYWxlOiAwLFxyXG4gICAgICBkdXJhdGlvbjogMSxcclxuICAgICAgZWFzZTogUG93ZXI0LmVhc2VJbixcclxuICAgIH0pO1xyXG4gICAgc2V0VmlzaWJsZShmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIGdzYXAuZnJvbVRvKHByb2plY3RSZWYuY3VycmVudCwgeyBhdXRvQWxwaGE6IDAgfSwgeyBhdXRvQWxwaGE6IDEsIGR1cmF0aW9uOiA1LCBlYXNlOiBQb3dlcjQuZWFzZUluIH0pXHJcbiAgICAvLyBHU0FQXHJcblxyXG4gICAgZ3NhcC5mcm9tVG8oY29udGFpbmVyUmVmLmN1cnJlbnQsIHsgYXV0b0FscGhhOiAwIH0sIHsgYXV0b0FscGhhOiAxLCBkdXJhdGlvbjogMiwgZWFzZTogUG93ZXI0LmVhc2VPdXQgfSk7XHJcbiAgICAvLyBUSVBQWVxyXG4gICAgc2V0VmlzaWJsZSh0cnVlKTtcclxuXHJcbiAgICAvLyBjb25zdCBkZWxldGVDdXJyZW50UHJvamVjdCA9IGFzeW5jICgpID0+IHtcclxuICAgIC8vICAgYXdhaXQgZGIuY29sbGVjdGlvbignY3VycmVudFByb2plY3QnKS5kb2MuZGVsZXRlKCk7XHJcbiAgICAvLyB9O1xyXG4gICAgLy8gZGVsZXRlQ3VycmVudFByb2plY3QoKTtcclxuXHJcbiAgICBjb25zdCBmZXRjaFByb2plY3RzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zdCB1c2VyUHJvamVjdHMgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKCdwcm9qZWN0cycpLndoZXJlKCd1aWQnLCAnPT0nLCBjdXJyZW50VXNlci51aWQpLmdldCgpO1xyXG4gICAgICBjb25zdCBhcnJheXMgPSBbXTtcclxuICAgICAgdXNlclByb2plY3RzLmRvY3MubWFwKChkb2MpID0+IHtcclxuICAgICAgICBpZiAoZG9jLmRhdGEoKS51aWQgPT0gY3VycmVudFVzZXIudWlkKSB7XHJcbiAgICAgICAgICByZXR1cm4gYXJyYXlzLnB1c2goZG9jLmRhdGEoKSksIHNldFByb2plY3RzQXJyYXkoZG9jLmRhdGEoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfSk7XHJcbiAgICAgIHNldFByb2plY3RzKGFycmF5cyk7XHJcbiAgICB9O1xyXG4gICAgZmV0Y2hQcm9qZWN0cygpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgLy8gY29uc3Qgb25Qcm9qZWN0Q3JlYXRlID0gKGUpID0+IHtcclxuICAvLyAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAvLyAgIGdzYXAudG8oY29udGFpbmVyUmVmLmN1cnJlbnQsIHtcclxuICAvLyAgICAgYXV0b0FscGhhOiAwLFxyXG4gIC8vICAgICBkdXJhdGlvbjogMSxcclxuICAvLyAgICAgZWFzZTogUG93ZXI0LmVhc2VPdXQsXHJcbiAgLy8gICB9KTtcclxuICAvLyAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gIC8vICAgICByb3V0ZXIucHVzaCgnL2Rhc2hib2FyZC9zdGFydHVwL2NyZWF0b3InKTtcclxuICAvLyAgIH0sIDEyMDApO1xyXG4gIC8vIH07XHJcblxyXG4gIGNvbnN0IG9uUHJvamVjdENyZWF0ZSA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBnc2FwLnRvKGNvbnRhaW5lclJlZi5jdXJyZW50LCB7XHJcbiAgICAgIGF1dG9BbHBoYTogMCxcclxuICAgICAgZHVyYXRpb246IDEsXHJcbiAgICAgIGVhc2U6IFBvd2VyNC5lYXNlT3V0LFxyXG4gICAgfSk7XHJcbiAgICAvLyBjb25zdCBwcm9qZWN0TmFtZSA9IHV1aWR2NCgpO1xyXG4gICAgLy8gY29uc3QgbmV3UHJvamVjdCA9IHtcclxuICAgIC8vICAgcHJvamVjdE5hbWU6ICcnLFxyXG4gICAgLy8gICBwcm9qZWN0RGVzY3JpcHRpb246ICcnLFxyXG4gICAgLy8gICBwcm9qZWN0RmllbGQ6ICcnLFxyXG4gICAgLy8gICBwcm9qZWN0Q291bnRyeTogJycsXHJcbiAgICAvLyAgIHByb2plY3RFbWFpbDogJycsXHJcbiAgICAvLyAgIHByb2plY3ROdW1iZXI6ICcnLFxyXG4gICAgLy8gICBwcm9qZWN0SW1hZ2U6ICcnLFxyXG4gICAgLy8gICBjcmVhdGVkQXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcclxuICAgIC8vICAgcHJvamVjdElkOiBwcm9qZWN0TmFtZSxcclxuICAgIC8vICAgdWlkOiBjdXJyZW50VXNlci51aWQsXHJcbiAgICAvLyB9O1xyXG4gICAgLy8gYXdhaXQgZGIuY29sbGVjdGlvbigncHJvamVjdHMnKS5kb2MocHJvamVjdE5hbWUpLnNldChuZXdQcm9qZWN0KTtcclxuXHJcbiAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIHJvdXRlci5wdXNoKCcvZGFzaGJvYXJkL3Byb2plY3RzL25ldy1zdGFydHVwJyk7XHJcbiAgICAvLyB9LCAxMjAwKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBbcHJvamVjdHNBcnJheSwgc2V0UHJvamVjdHNBcnJheV0gPSB1c2VTdGF0ZSgpO1xyXG5cclxuICBjb25zdCBvblByb2plY3RFZGl0ID0gYXN5bmMgKGUsIGN1cnJlbnRQcm9qZWN0KSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBhd2FpdCBkYlxyXG4gICAgICAuY29sbGVjdGlvbignY3VycmVudFByb2plY3QnKVxyXG4gICAgICAuZG9jKGN1cnJlbnRVc2VyLnVpZClcclxuICAgICAgLnNldCh7IHByb2plY3RJZDogY3VycmVudFByb2plY3QucHJvamVjdElkLCAuLi5jdXJyZW50UHJvamVjdCB9KTtcclxuICAgIHJvdXRlci5wdXNoKCcvZGFzaGJvYXJkL3Byb2plY3RzL2NyZWF0b3Ivb3ZlcnZpZXcnKTtcclxuICB9O1xyXG4gIGNvbnNvbGUubG9nKHByb2plY3RzKTtcclxuXHJcbiAgY29uc3QgW2FjdGl2ZUNsYXNzLCBzZXRBY3RpdmVDbGFzc10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGNsYXNzUmVmID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IHByb2plY3RSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgLy8gTUFHSUNcclxuICBjb25zdCBjbGFzc0FycmF5cmVmID0gdXNlUmVmKFtdKTtcclxuICBjbGFzc0FycmF5cmVmLmN1cnJlbnQgPSBbXTtcclxuXHJcbiAgY29uc3QgY2hvb3NlQ2xhc3NlcyA9IChlbCkgPT4ge1xyXG4gICAgaWYgKGVsICYmICFjbGFzc0FycmF5cmVmLmN1cnJlbnQuaW5jbHVkZXMoZWwpKSB7XHJcbiAgICAgIGNsYXNzQXJyYXlyZWYuY3VycmVudC5wdXNoKGVsKTtcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKGNsYXNzQXJyYXlyZWYuY3VycmVudCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2hvb3NlQ2xhc3Nlc0NsaWNrID0gKHByb2plY3RJZCkgPT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2coJ0NVUlJFTlQgLSAnLCBjbGFzc0FycmF5cmVmLmN1cnJlbnQuZmluZChwcm9qZWN0ID0+IHByb2plY3QuaWQgPT0gbnVtYmVyLnRvU3RyaW5nKCkpKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdDVVJSRU5UIE5VTUJFUiAtICcsIG51bWJlcik7XHJcbiAgICBjb25zb2xlLmxvZyhcclxuICAgICAgJ0NVUlJFTlQgLSAnLFxyXG4gICAgICBjbGFzc0FycmF5cmVmLmN1cnJlbnQuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5pZCA9PSBwcm9qZWN0SWQpXHJcbiAgICApO1xyXG4gICAgY29uc29sZS5sb2coJ0NVUlJFTlQgUFJPSkVDVCAtICcsIHByb2plY3RJZCk7XHJcbiAgICBpZiAoYWN0aXZlQ2xhc3MpIHtcclxuICAgICAgZ3NhcC50byhcclxuICAgICAgICBjbGFzc0FycmF5cmVmLmN1cnJlbnQuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5pZCA9PSBwcm9qZWN0SWQpLFxyXG4gICAgICAgIHsgYXV0b0FscGhhOiAwIH1cclxuICAgICAgKTtcclxuICAgICAgc2V0QWN0aXZlQ2xhc3MoZmFsc2UpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZ3NhcC50byhcclxuICAgICAgICBjbGFzc0FycmF5cmVmLmN1cnJlbnQuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5pZCA9PSBwcm9qZWN0SWQpLFxyXG4gICAgICAgIHsgYXV0b0FscGhhOiAxIH1cclxuICAgICAgKTtcclxuICAgICAgc2V0QWN0aXZlQ2xhc3ModHJ1ZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY29tcGFyZSA9IChkYXRlMSwgZGF0ZTIpID0+IHtcclxuICAgIGNvbnN0IGRhdGVPbmUgPSBkYXRlMS5jcmVhdGVkQXQ7XHJcbiAgICBjb25zdCBkYXRlVHdvID0gZGF0ZTIuY3JlYXRlZEF0O1xyXG4gICAgcmV0dXJuIG5ldyBEYXRlKGRhdGUyLmNyZWF0ZWRBdCkgLSBuZXcgRGF0ZShkYXRlMS5jcmVhdGVkQXQpO1xyXG4gIH07XHJcblxyXG4gIGlmIChwcm9qZWN0cykge1xyXG4gICAgcHJvamVjdHMuc29ydChjb21wYXJlKTtcclxuICAgIGNvbnNvbGUubG9nKHByb2plY3RzKTtcclxuICB9XHJcblxyXG4gIC8vIFBST0pFQ1RTIEZFVENIRVIgRlJPTSBBUElcclxuICBjb25zb2xlLmxvZyhjdXJyZW50VXNlcik7XHJcblxyXG4gIGNvbnN0IFtkYXRhcywgc2V0RGF0YV0gPSB1c2VTdGF0ZSgpO1xyXG5cclxuICAvLyBjb25zdCBmZXRjaGluZyA9ICgpID0+IHtcclxuICAvLyAgIC8vIGNvbnN0IHYgPSB1c2VNZW1vKCgpID0+IGN1cnJlbnRVc2VyLnRva2VuKTtcclxuICAvLyAgIC8vIGNvbnN0IHsgZGF0YSB9ID0gdXNlTWVtbygoKSA9PiB1c2VTV1IoY3VycmVudFVzZXIgPyBbJy9hcGkvcHJvamVjdHMnLCBjdXJyZW50VXNlci50b2tlbl0gOiBudWxsLCBmZXRjaGVyKSk7XHJcbiAgLy8gICAvLyBjb25zb2xlLmxvZygndiAtICcsIGRhdGEpXHJcblxyXG4gIC8vICAgLy8gY29uc3QgeyBkYXRhIH0gPSB1c2VTV1IoXHJcbiAgLy8gICAvLyAgIGN1cnJlbnRVc2VyID8gWycvYXBpL3Byb2plY3RzJywgY3VycmVudFVzZXIudG9rZW5dIDogbnVsbCxcclxuICAvLyAgIC8vICAgZmV0Y2hlciwge1xyXG4gIC8vICAgLy8gICAgIHJldmFsaWRhdGVPbkZvY3VzOiBmYWxzZSxcclxuICAvLyAgIC8vICAgICAvLyByZXZhbGlkYXRlT25Nb3VudDpmYWxzZSxcclxuICAvLyAgIC8vICAgICAvLyBsb2FkaW5nVGltZW91dDogMzAwMCxcclxuICAvLyAgIC8vICAgICAvLyBvblN1Y2Nlc3M6ICgpID0+IHtzZXREYXRhKGRhdGEpfSxcclxuICAvLyAgIC8vICAgICBpc1BhdXNlZDogKCkgPT4gdHJ1ZSx9XHJcbiAgLy8gICAvLyApO1xyXG5cclxuICAvLyAgIGNvbnN0IHsgZGF0YSB9ID0gdXNlU1dSKGN1cnJlbnRVc2VyID8gWycvYXBpL3Byb2plY3RzJywgY3VycmVudFVzZXIudG9rZW5dIDogbnVsbCxcclxuICAvLyAgICAgZmV0Y2hlciwpXHJcbiAgLy8gICBjb25zb2xlLmxvZygnbGV0cyB0cnkuLi4nLCBkYXRhKTtcclxuXHJcbiAgLy8gICAvLyBpZiAoZGF0YSkge1xyXG4gIC8vICAgLy8gICBjb25zdCBwcm9qZWN0c3MgPSBbXTtcclxuICAvLyAgIC8vICAgZGF0YS5zbmFwc2hvdC5mb3JFYWNoKChkb2MpID0+IHtcclxuICAvLyAgIC8vICAgICBwcm9qZWN0c3MucHVzaCh7IGlkOiBkb2MuaWQsIC4uLmRvYy5kYXRhKCkgfSk7XHJcbiAgLy8gICAvLyAgIH0pO1xyXG4gIC8vICAgLy8gICBjb25zb2xlLmxvZyhwcm9qZWN0c3MpO1xyXG4gIC8vICAgLy8gfVxyXG4gIC8vIH1cclxuXHJcbiAgLy8gZmV0Y2hpbmcoKTtcclxuXHJcbiAgY29uc3QgW3NwZWNpYWxEYXRhLCBzZXRTcGVjaWFsRGF0YV0gPSB1c2VTdGF0ZSgpO1xyXG5cclxuICBjb25zdCBkb2luZ015QmVzdCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gdXNlU1dSKGN1cnJlbnRVc2VyID8gWycvYXBpL3Byb2plY3RzJywgY3VycmVudFVzZXIudG9rZW5dIDogbnVsbCwgZmV0Y2hlcik7XHJcbiAgICB1c2VNZW1vKCgpID0+IGRhdGEgJiYgc2V0U3BlY2lhbERhdGEoZGF0YSksIFtkYXRhXSk7IC8vIFpNSUVOSUFNWSBEQVRBLCBUWUxLTyBKRcWaTEkgU8SEIFBST0pFS1RZLiBQcm9ibGVtIGJ5xYIgdGFraSwgxbxlIHRlIHByb2pla3R5IHJheiBiecWCeSwgYSByYXogaWNoIG5pZSBiecWCby4gVGVyYXogYsSZZMSFIHphd3N6ZSwgYm8gem1pZW5pYWrEhSBzacSZIHR5bGtvIHd0ZWR5LCBraWVkeSBpc3RuaWVqxIUhXHJcbiAgfTtcclxuXHJcbiAgZG9pbmdNeUJlc3QoKTtcclxuXHJcbiAgLy8gY29uc29sZS5sb2coJ09GRklDSUFMOiAnLCBkYXRhKTtcclxuICBjb25zb2xlLmxvZygnT0ZGSUNJQUwxMTogJywgc3BlY2lhbERhdGEpO1xyXG5cclxuICBjb25zdCBmbiA9ICgpID0+IHtcclxuICAgIGlmIChkYXRhcykge1xyXG4gICAgICAvLyBEQVRBIChQUk9KRUNUUykgU09SVCBCWSBEQVRFXHJcbiAgICAgIGRhdGFzLnByb2plY3RzLnNvcnQoY29tcGFyZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgZm4oKTtcclxuXHJcbiAgY29uc3Qgb25Qcm9qZWN0RGVsZXRlID0gKGUsIHByb2plY3RJZCkgPT4ge1xyXG4gICAgLy8gZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZGVsZXRlUHJvamVjdChwcm9qZWN0SWQpO1xyXG4gICAgbXV0YXRlKFxyXG4gICAgICBbJy9hcGkvcHJvamVjdHMnLCBjdXJyZW50VXNlci50b2tlbl0sXHJcbiAgICAgIGFzeW5jIChkYXRhKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHByb2plY3RzOiBkYXRhLnByb2plY3RzLmZpbHRlcigocHJvamVjdCkgPT4gcHJvamVjdC5wcm9qZWN0SWQgIT09IHByb2plY3RJZCksXHJcbiAgICAgICAgfTtcclxuICAgICAgfSxcclxuICAgICAgZmFsc2VcclxuICAgICk7XHJcbiAgICAvLyBtdXRhdGUoWycvYXBpL3Byb2plY3RzJywgY3VycmVudFVzZXIudG9rZW5dKTtcclxuICB9O1xyXG5cclxuICBjb25zb2xlLmxvZygnUFJPSkVDVFMgLSAnLCBkYXRhcyk7XHJcbiAgY29uc29sZS5sb2coJ1BST0pFQ1RTIE1BSU4gLSAnLCBwcm9qZWN0cyk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8VGlwcHlNb25zdGVyXHJcbiAgICAgICAgc3RhcnR1cHNcclxuICAgICAgICBjb250ZW50Q2xhc3M9XCJoLTM2IHctODAgc2hhZG93LWxnIHJvdW5kZWQtMnhsIGJnLXByaW1hcnkgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIlxyXG4gICAgICAgIGNvbnRlbnRUZXh0PVwiVGhpcyBpcyBhIHBsYWNlIHdoZXJlIG1hZ2ljYWwgdGhpbmdzIGhhcHBlbiBcIlxyXG4gICAgICAgIGNvbnRlbnRUZXh0MT1cIiBKdXN0IHN0YXJ0IGNyZWF0aW5nIHlvdXIgc3RhcnR1cCBhbmQgYnJpbmcgeW91ciBpZGVhIGludG8gcmVhbGl0eS4gT25jZSB5b3UndmUgZG9uZSB0aGF0LCB5b3UgY2FuIG1hbmFnZSBpdCBmcm9tIHRoZSBtYWluIHBhbmVsLiBGZWVsIGZyZWUgdG8gZWRpdCwgc2F2ZSBvciBkZWxldGUgeW91ciBpZGVhXCJcclxuICAgICAgLz5cclxuICAgICAgPE5hdmJhclRlbXBsYXRlPlxyXG4gICAgICAgIDxkaXYgcmVmPXtjb250YWluZXJSZWZ9IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiB3LWZ1bGwgcmVsYXRpdmUgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHNtOm1heC13LXNtQ29udGFpbmVyIG1kOm1heC13LW1kQ29udGFpbmVyIGxnOm1heC13LWxnQ29udGFpbmVyIHhsOm1heC13LXhsQ29udGFpbmVyIDJ4bDptYXgtdy14eGxDb250YWluZXIgbm9ybWFsOm1heC13LW5vcm1hbENvbnRhaW5lciByZWxhdGl2ZSBtdC0xNlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ3JpZC1yb3dzLTEgZ3JpZC1mbG93LWNvbFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMzBcIlxyXG4gICAgICAgICAgICAgICAgICB3aWR0aD1cIjMwXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmlsbC1jdXJyZW50IHRleHQtcHJpbWFyeSBkYXJrOnRleHQtcHJpbWFyeWRhcmtcIlxyXG4gICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxMjggMTI4XCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPHRpdGxlPkxhbmRpbmcgU3VjY2VzczwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgIDxnIGlkPVwiTGFuZGluZ19TdWNjZXNzXCIgZGF0YS1uYW1lPVwiTGFuZGluZyBTdWNjZXNzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNscy0xXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTA5LjMsOTAuMUE0Niw0NiwwLDAsMCw2NSwzNlYyMC4wOGMxLjc4LS42Miw3LjIxLTIuMTQsMTIuNTcuMjNhMTkuMzMsMTkuMzMsMCwwLDAsMTQuODIsMGMuODctLjM4LjYxLjMxLjYxLTE3LjkzYTEsMSwwLDAsMC0xLjQzLS45M2MtLjA3LDAtNi42OSwyLjg3LTEzLjE4LDBBMTkuNDEsMTkuNDEsMCwwLDAsNjUsLjkzLDEsMSwwLDAsMCw2MywxVjM2YTQ1Ljg2LDQ1Ljg2LDAsMCwwLTI4LjY2LDEwLjhDMTYuMTgsNDAuNDgsNCw0MCwuNzksNDUuNTEtMi4yOSw1MC44NiwzLjk0LDU5LjMsMTAsNjUuNjhBMTEsMTEsMCwwLDAsMTgsODNjLjgxLDM4LjQxLDQ2LjA4LDU5LjIsNzUuNjYsMzQuMjEsOC41MywzLDI5LDkuMTUsMzMuNTUsMS4zMUMxMzAuMzksMTEzLDEyMy44NiwxMDIuNjUsMTA5LjMsOTAuMVpNNzcuNTksMy4zMUExOS4zOSwxOS4zOSwwLDAsMCw5MSwzLjgzVjE4LjY4Yy0xLjc5LjYyLTcuMjIsMi4xMy0xMi41Ny0uMjNBMTkuMTksMTkuMTksMCwwLDAsNjUsMTcuOTNWMy4wOEM2Ni44MSwyLjQ2LDcyLjI0LDEsNzcuNTksMy4zMVpNNjUsNDV2LTdjMzkuNjkuOTEsNTgsNTAuMjcsMjguMjEsNzYuODFDNzEuMzIsMTA3LDQ2LDkyLjY2LDI3Ljc3LDc4LjY0YTExLDExLDAsMCwwLTMuMi0xNi4xM0E0My44OCw0My44OCwwLDAsMSw2MywzOC4wNlY0NUExLDEsMCwwLDAsNjUsNDVaTTMyLjU1LDQ4LjM2YTQ2LjIxLDQ2LjIxLDAsMCwwLTkuODMsMTMuMjgsMTAuOTMsMTAuOTMsMCwwLDAtMTEuNCwyLjQ3Qy04LjM5LDQzLjIzLDUuMjMsMzkuMDgsMzIuNTUsNDguMzZaTTEwLDcyYTksOSwwLDEsMSw5LDlBOSw5LDAsMCwxLDEwLDcyWm0xMCwxMWExMSwxMSwwLDAsMCw2LjM0LTIuODJjMTguNDUsMTQuMjEsNDMuNDUsMjguMzUsNjUuMDUsMzYuMjJDNjMsMTM5LjE2LDIwLjgzLDExOS4xLDIwLjA1LDgzWm0xMDUuNCwzNC41Yy0yLjUxLDQuMzUtMTQsMy42Mi0zMC0xLjg1YTQ1LjYxLDQ1LjYxLDAsMCwwLDEzLjQyLTIzLjIxQzEyMS41OSwxMDMuNTgsMTI4LDExMy4xMiwxMjUuNDUsMTE3LjQ3WlwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnlkYXJrIHRleHQtMnhsIG10LTIgcGwtMiBkYXJrOnRleHQtYmFja2dyb3VuZFwiPlN0YXJ0dXBzPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWVuZCBtdC0yXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBvblByb2plY3RDcmVhdGUoZSl9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhvdmVyOmJnLXByaW1hcnkgaG92ZXI6dGV4dC13aGl0ZSBkYXJrOmhvdmVyOmJnLXByaW1hcnlkYXJrIGRhcms6aG92ZXI6dGV4dC1iYWNrZ3JvdW5kIGZvY3VzOm91dGxpbmUtbm9uZSBib3JkZXIgYm9yZGVyLXByaW1hcnkgdGV4dC1wcmltYXJ5IHRleHQtc20gZm9udC1saWdodCBweS0yIHB4LTYgcm91bmRlZC0yeGwgbXQtMiBkYXJrOnRleHQtcHJpbWFyeWRhcmsgZGFyazpib3JkZXItcHJpbWFyeWRhcmtcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBOZXcgc3RhcnR1cFxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXNlY29uZGFyeSB0ZXh0LW1kIHRleHQtZ3JheVwiPkJyaW5nIHlvdXIgaWRlYSBpbnRvIHJlYWxpdHk8L2gxPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5ZGFyayB0ZXh0LWxnIG10LTEwIC1tYi02IGRhcms6dGV4dC1iYWNrZ3JvdW5kXCI+SWRlYXMgeW91IGludmVudGVkPC9oMT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHsvKiA8U3RhcnR1cFNrZWxldG9uIC8+ICovfVxyXG4gICAgICAgICAgICB7IXNwZWNpYWxEYXRhID8gKFxyXG4gICAgICAgICAgICAgIDxTdGFydHVwU2tlbGV0b24gLz5cclxuICAgICAgICAgICAgKSA6IHNwZWNpYWxEYXRhLnByb2plY3RzWzBdID8gKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGdyaWQgc206Z3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTJmciBsZzpncmlkLWNvbHMtM2ZyIDJ4bDpncmlkLWNvbHMtNGZyIGdhcC04IGJvcmRlci1yLTYgcm91bmRlZC0yeGwgYmctd2hpdGUgbXQtOCBtYi04IGRhcms6YmctYmFja2dyb3VuZCBwLTggdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIHtzcGVjaWFsRGF0YSAmJlxyXG4gICAgICAgICAgICAgICAgICBzcGVjaWFsRGF0YS5wcm9qZWN0cy5tYXAoKGltYWdlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1RFU1QgLSAnLCBpbWFnZS5wcm9qZWN0SWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZGVhTmFtZTogaW1hZ2UuaWRlYU5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZGVhRGVzYzogaW1hZ2UuaWRlYURlc2MsXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZGVhQ291bnRyeTogaW1hZ2UuaWRlYUNvdW50cnksXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdGFydHVwRmllbGQ6IGltYWdlLnN0YXJ0dXBGaWVsZCxcclxuICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0dXBFbWFpbDogaW1hZ2Uuc3RhcnR1cEVtYWlsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgc3RhcnR1cFBob25lOiBpbWFnZS5zdGFydHVwUGhvbmUsXHJcbiAgICAgICAgICAgICAgICAgICAgICBpbWFnZU5hbWVFeGlzdHM6IGltYWdlLmltYWdlTmFtZUV4aXN0cyxcclxuICAgICAgICAgICAgICAgICAgICAgIGF2YXRhckV4aXN0czogaW1hZ2UuYXZhdGFyRXhpc3RzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgbWFya2V0UHJvYmxlbVNlY3Rpb246IGltYWdlLm1hcmtldFByb2JsZW1TZWN0aW9uRGF0YSxcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmtldFNvbHV0aW9uU2VjdGlvbjogaW1hZ2UubWFya2V0U29sdXRpb25TZWN0aW9uRGF0YSxcclxuICAgICAgICAgICAgICAgICAgICAgIGZvdW5kZXJzU2VjdGlvbjogaW1hZ2UuZm91bmRlcnNTZWN0aW9uRGF0YSxcclxuICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RPdmVydmlld1NlY3Rpb246IGltYWdlLnByb2R1Y3RPdmVydmlld1NlY3Rpb25EYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdFByb21vdGlvblNlY3Rpb246IGltYWdlLnByb2R1Y3RQcm9tb3Rpb25TZWN0aW9uRGF0YSxcclxuICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RCZW5lZml0c1NlY3Rpb246IGltYWdlLnByb2R1Y3RCZW5lZml0c1NlY3Rpb25EYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgbWFya2V0T3ZlcnZpZXdTZWN0aW9uOiBpbWFnZS5tYXJrZXRPdmVydmlld1NlY3Rpb25EYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgY29tcGV0aXRvcnNTZWN0aW9uOiBpbWFnZS5jb21wZXRpdG9yc1NlY3Rpb25EYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0Q3VzdG9tZXJzU2VjdGlvbjogaW1hZ2UudGFyZ2V0Q3VzdG9tZXJzU2VjdGlvbkRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgICBjb21wZXRpdGlvbkRpc3Rpbmd1aXNoU2VjdGlvbjogaW1hZ2UuY29tcGV0aXRpb25EaXN0aW5ndWlzaFNlY3Rpb25EYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgc3RhcnR1cENvc3RzU2VjdGlvbjogaW1hZ2Uuc3RhcnR1cENvc3RzU2VjdGlvbkRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgICBydW5uaW5nQ29zdHNTZWN0aW9uOiBpbWFnZS5ydW5uaW5nQ29zdHNTZWN0aW9uRGF0YSxcclxuICAgICAgICAgICAgICAgICAgICAgIGZpbmFuY2luZ1NlY3Rpb246IGltYWdlLmZpbmFuY2luZ1NlY3Rpb25EYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgYnVzaW5lc3NNb2RlbE92ZXJ2aWV3U2VjdGlvbjogaW1hZ2UuYnVzaW5lc3NNb2RlbE92ZXJ2aWV3U2VjdGlvbkRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgICBidXNpbmVzc0dyb3dTZWN0aW9uOiBpbWFnZS5idXNpbmVzc0dyb3dTZWN0aW9uRGF0YSxcclxuICAgICAgICAgICAgICAgICAgICAgIHdoeVN1Y2Nlc3NTZWN0aW9uOiBpbWFnZS53aHlTdWNjZXNzU2VjdGlvbkRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbWFnZS5wcm9qZWN0SWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNoYWRvdyByb3VuZGVkLTJ4bCBmbGV4IGZsZXgtd3JhcCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgZmxleC1jb2wgaG92ZXI6c2hhZG93LWxnIHRyYW5zZm9ybSBob3ZlcjpzY2FsZS0xMDUgaG92ZXI6LXRyYW5zbGF0ZS15LTIgaG92ZXI6LXRyYW5zbGF0ZS14LTIgdHJhbnNpdGlvbiBkdXJhdGlvbi01MDAgZWFzZS1pbi1vdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBEUk9QRE9XTiBTVEFSVCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBpbmxpbmUtYmxvY2sgdGV4dC1yaWdodCB3LTQvNSB0b3AtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY2hvb3NlQ2xhc3Nlc0NsaWNrKGltYWdlLnByb2plY3RJZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvZG90cy1tZW51Mi5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsyNX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXsyNX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17Y2hvb3NlQ2xhc3Nlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtpbWFnZS5wcm9qZWN0SWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvcmlnaW4tdG9wLXJpZ2h0IGFic29sdXRlIGxlZnQtMS8yIHRyYW5zZm9ybSAtdHJhbnNsYXRlLXgtMS8yIHctNDQgbGc6dy00OCByb3VuZGVkLW1kIHNoYWRvdy14bCBiZy13aGl0ZSBmb2N1czpvdXRsaW5lLW5vbmUgaW52aXNpYmxlIHJvdW5kZWQtMnhsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJvbGU9J21lbnUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBhcmlhLW9yaWVudGF0aW9uPSd2ZXJ0aWNhbCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFyaWEtbGFiZWxsZWRieT0nb3B0aW9ucy1tZW51J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMSB0ZXh0LWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cmFuc2l0aW9uIGR1cmF0aW9uLTUwMCBlYXNlLWluLW91dCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gaG92ZXI6YmctcHJpbWFyeSByb3VuZGVkLXRsLTJ4bCByb3VuZGVkLXRyLTJ4bFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXthc3luYyAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRvYyA9IDxNeURvY3VtZW50MSBkYXRhPXtkYXRhfSAvPjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYXNQZGYgPSBwZGYoW10pOyAvLyB7fSBpcyBpbXBvcnRhbnQsIHRocm93cyB3aXRob3V0IGFuIGFyZ3VtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzUGRmLnVwZGF0ZUNvbnRhaW5lcihkb2MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBibG9iID0gYXdhaXQgYXNQZGYudG9CbG9iKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhdmVBcyhibG9iLCBgJHtpbWFnZS5pZGVhTmFtZX0ucGRmYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgcHgtNCBweS0yIDJ4bDpweS0zIHRleHQtc20gdGV4dC1wcmltYXJ5ZGFyayB0cmFuc2l0aW9uIGR1cmF0aW9uLTUwMCBlYXNlLWluLW91dCBob3Zlcjp0ZXh0LWJhY2tncm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcm9sZT0nbWVudWl0ZW0nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2F2ZSAvIFNoYXJlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1yLTMgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvZ2lmcy9yb2NrZXQuZ2lmXCIgaGVpZ2h0PXszMH0gd2lkdGg9ezMwfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJhbnNpdGlvbiBkdXJhdGlvbi01MDAgZWFzZS1pbi1vdXQgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGhvdmVyOmJnLXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IG9uUHJvamVjdEVkaXQoZSwgaW1hZ2UpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgcHgtNCBweS0yIDJ4bDpweS0zIHRleHQtc20gdGV4dC1wcmltYXJ5ZGFyayB0cmFuc2l0aW9uIGR1cmF0aW9uLTUwMCBlYXNlLWluLW91dCBob3Zlcjp0ZXh0LWJhY2tncm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcm9sZT0nbWVudWl0ZW0nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRWRpdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtci0zIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHJlbGF0aXZlIGJvdHRvbS0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2dpZnMvd2hhbGUuZ2lmXCIgaGVpZ2h0PXszMH0gd2lkdGg9ezMwfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJhbnNpdGlvbiBkdXJhdGlvbi01MDAgZWFzZS1pbi1vdXQgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGhvdmVyOmJnLXByaW1hcnkgcm91bmRlZC1ibC0yeGwgcm91bmRlZC1ici0yeGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IG9uUHJvamVjdERlbGV0ZShlLCBpbWFnZS5wcm9qZWN0SWQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgcHgtNCBweS0yIDJ4bDpweS0zIHRleHQtc20gdGV4dC1wcmltYXJ5ZGFyayB0cmFuc2l0aW9uIGR1cmF0aW9uLTUwMCBlYXNlLWluLW91dCBob3Zlcjp0ZXh0LWJhY2tncm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcm9sZT0nbWVudWl0ZW0nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVtb3ZlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1yLTMgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgcmVsYXRpdmUgYm90dG9tLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvZ2lmcy9ib21iLmdpZlwiIGhlaWdodD17MzB9IHdpZHRoPXszMH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBEUk9QRE9XTiBFTkQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2ltYWdlLmF2YXRhckV4aXN0cyA9PSAnYmxhbmsnID8gYC9tb2RhbC8ke2ltYWdlLmltYWdlTmFtZUV4aXN0c30uc3ZnYCA6IGltYWdlLmF2YXRhckV4aXN0c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgaC00MCB3LTQwIHAtNCBib3JkZXItYiBib3JkZXItcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeWRhcmsgdGV4dC1zbSBtdC0yIHB4LTQgbXQtMlwiPntpbWFnZS5pZGVhTmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5ZGFyayB0ZXh0LXhzIHRleHQtZ3JheSBweC00XCI+e2ltYWdlLnN0YXJ0dXBGaWVsZH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdy0zLzQganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciAtbXQtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1wcmltYXJ5ZGFya1wiPlZpc2lvbjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8RGl2Q29tcG9uZW50IGZpbGxlZFNlY3Rpb249e2ltYWdlLmZpbGxlZFNlY3Rpb259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17YC9wcm9ncmVzcy8ke2ltYWdlLmZpbGxlZFNlY3Rpb24gPyAnY2hlY2snIDogJ3JlbW92ZSd9LnN2Z2B9IGhlaWdodD17MjZ9IHdpZHRoPXsyNn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0RpdkNvbXBvbmVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB3LTMvNCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIC1tdC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXByaW1hcnlkYXJrXCI+UHJvZHVjdDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8RGl2Q29tcG9uZW50MSBmaWxsZWRTZWN0aW9uMT17aW1hZ2UuZmlsbGVkU2VjdGlvbjF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17YC9wcm9ncmVzcy8ke2ltYWdlLmZpbGxlZFNlY3Rpb24xID8gJ2NoZWNrJyA6ICdyZW1vdmUnfS5zdmdgfSBoZWlnaHQ9ezI2fSB3aWR0aD17MjZ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9EaXZDb21wb25lbnQxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHctMy80IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgLW10LTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtcHJpbWFyeWRhcmtcIj5NYXJrZXQ8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPERpdkNvbXBvbmVudDIgZmlsbGVkU2VjdGlvbjI9e2ltYWdlLmZpbGxlZFNlY3Rpb24yfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2AvcHJvZ3Jlc3MvJHtpbWFnZS5maWxsZWRTZWN0aW9uMiA/ICdjaGVjaycgOiAncmVtb3ZlJ30uc3ZnYH0gaGVpZ2h0PXsyNn0gd2lkdGg9ezI2fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvRGl2Q29tcG9uZW50Mj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB3LTMvNCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIC1tdC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXByaW1hcnlkYXJrXCI+RmluYW5jZXM8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPERpdkNvbXBvbmVudDMgZmlsbGVkU2VjdGlvbjM9e2ltYWdlLmZpbGxlZFNlY3Rpb24zfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2AvcHJvZ3Jlc3MvJHtpbWFnZS5maWxsZWRTZWN0aW9uMyA/ICdjaGVjaycgOiAncmVtb3ZlJ30uc3ZnYH0gaGVpZ2h0PXsyNn0gd2lkdGg9ezI2fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvRGl2Q29tcG9uZW50Mz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB3LTMvNCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIC1tdC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXByaW1hcnlkYXJrXCI+TW9kZWw8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPERpdkNvbXBvbmVudDQgZmlsbGVkU2VjdGlvbjQ9e2ltYWdlLmZpbGxlZFNlY3Rpb240fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2AvcHJvZ3Jlc3MvJHtpbWFnZS5maWxsZWRTZWN0aW9uNCA/ICdjaGVjaycgOiAncmVtb3ZlJ30uc3ZnYH0gaGVpZ2h0PXsyNn0gd2lkdGg9ezI2fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvRGl2Q29tcG9uZW50ND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeWRhcmsgdGV4dC14cyB0ZXh0LWdyYXkgcHgtNCBwYi0yXCI+e2Zvcm1hdChwYXJzZUlTTyhpbWFnZS5jcmVhdGVkQXQpLCAnUFBQJyl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPEVtcHR5U3RhcnR1cCBvblByb2plY3RDcmVhdGU9e29uUHJvamVjdENyZWF0ZX0gLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L05hdmJhclRlbXBsYXRlPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0YXJ0dXBQYWdlO1xyXG4iLCJjb25zdCBmZXRjaGVyID0gYXN5bmMgKHVybCwgdG9rZW4pID0+IHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwsIHtcclxuICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICBoZWFkZXJzOiBuZXcgSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsIHRva2VuIH0pLFxyXG4gICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHJlcy5qc29uKCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmZXRjaGVyO1xyXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG4vLyBVc2FnZVxyXG5mdW5jdGlvbiBBcHAoKSB7XHJcbiAgY29uc3Qgc2l6ZSA9IHVzZVdpbmRvd1NpemUoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAge3NpemUud2lkdGh9cHggLyB7c2l6ZS5oZWlnaHR9cHhcclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuLy8gSG9va1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlV2luZG93U2l6ZSgpIHtcclxuICAvLyBJbml0aWFsaXplIHN0YXRlIHdpdGggdW5kZWZpbmVkIHdpZHRoL2hlaWdodCBzbyBzZXJ2ZXIgYW5kIGNsaWVudCByZW5kZXJzIG1hdGNoXHJcbiAgLy8gTGVhcm4gbW9yZSBoZXJlOiBodHRwczovL2pvc2h3Y29tZWF1LmNvbS9yZWFjdC90aGUtcGVyaWxzLW9mLXJlaHlkcmF0aW9uL1xyXG4gIGNvbnN0IFt3aW5kb3dTaXplLCBzZXRXaW5kb3dTaXplXSA9IHVzZVN0YXRlKHtcclxuICAgIHdpZHRoOiB1bmRlZmluZWQsXHJcbiAgICBoZWlnaHQ6IHVuZGVmaW5lZCxcclxuICB9KTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gSGFuZGxlciB0byBjYWxsIG9uIHdpbmRvdyByZXNpemVcclxuICAgIGZ1bmN0aW9uIGhhbmRsZVJlc2l6ZSgpIHtcclxuICAgICAgLy8gU2V0IHdpbmRvdyB3aWR0aC9oZWlnaHQgdG8gc3RhdGVcclxuICAgICAgc2V0V2luZG93U2l6ZSh7XHJcbiAgICAgICAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxyXG4gICAgICAgIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIC8vIEFkZCBldmVudCBsaXN0ZW5lclxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSk7XHJcbiAgICAvLyBDYWxsIGhhbmRsZXIgcmlnaHQgYXdheSBzbyBzdGF0ZSBnZXRzIHVwZGF0ZWQgd2l0aCBpbml0aWFsIHdpbmRvdyBzaXplXHJcbiAgICBoYW5kbGVSZXNpemUoKTtcclxuICAgIC8vIFJlbW92ZSBldmVudCBsaXN0ZW5lciBvbiBjbGVhbnVwXHJcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSk7XHJcbiAgfSwgW10pOyAvLyBFbXB0eSBhcnJheSBlbnN1cmVzIHRoYXQgZWZmZWN0IGlzIG9ubHkgcnVuIG9uIG1vdW50XHJcbiAgcmV0dXJuIHdpbmRvd1NpemU7XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJlYWN0LXBkZi9yZW5kZXJlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAc3RyaXBlL3N0cmlwZS1qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAdGlwcHlqcy9yZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkYXRlLWZuc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaWxlLXNhdmVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2FwcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9hdXRoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2ZpcmVzdG9yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9mdW5jdGlvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2Uvc3RvcmFnZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJnc2FwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXRoZW1lc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3dyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInV1aWRcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==