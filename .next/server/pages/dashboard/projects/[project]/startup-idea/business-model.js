module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/dashboard/projects/[project]/startup-idea/business-model.js");
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
    className: "absolute left-6 top-3 cursor-pointer z-50"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ExitComponent);

/***/ }),

/***/ "./components/dashboard/startup/ProgressBar.js":
/*!*****************************************************!*\
  !*** ./components/dashboard/startup/ProgressBar.js ***!
  \*****************************************************/
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
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! gsap */ "gsap");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_8__);

var _jsxFileName = "C:\\off-saas\\components\\dashboard\\startup\\ProgressBar.js";








const DivComponent = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div`
  position: relative;
  z-index: 2;
  margin-top: 16px;
  margin-bottom: 16px;
  ::after {
    content: '';
    background-color: ${props => props.filledSection ? '#0AFF00' : '#fc573b'};
    height: 1px;
    width: 50%;
    display: block;
    position: absolute;
    left: 100%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
  }
`;
const DivComponent1 = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div`
  position: relative;
  z-index: 2;
  margin-top: 16px;
  margin-bottom: 16px;
  ::after {
    content: '';
    background-color: ${props => props.filledSection1 ? '#0AFF00' : '#fc573b'};
    height: 1px;
    width: 50%;
    display: block;
    position: absolute;
    left: 100%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
  }
`;
const DivComponent2 = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div`
  position: relative;
  z-index: 2;
  margin-top: 16px;
  margin-bottom: 16px;
  ::after {
    content: '';
    background-color: ${props => props.filledSection2 ? '#0AFF00' : '#fc573b'};
    height: 1px;
    width: 50%;
    display: block;
    position: absolute;
    left: 100%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
  }
`;
const DivComponent3 = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div`
  position: relative;
  z-index: 2;
  margin-top: 16px;
  margin-bottom: 16px;
  ::after {
    content: '';
    background-color: ${props => props.filledSection3 ? '#0AFF00' : '#fc573b'};
    height: 1px;
    width: 50%;
    display: block;
    position: absolute;
    left: 100%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
  }
`;
const DivComponent4 = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div`
  position: relative;
  z-index: 2;
  margin-top: 16px;
  margin-bottom: 16px;
`;

const ProgressBar = ({
  onLoadOpacity,
  onLoadOpacity1,
  onLoadOpacity2,
  onLoadOpacity3,
  onLoadOpacity4
}) => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"])();
  const {
    0: filledSection,
    1: setFilledSection
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: filledSection1,
    1: setFilledSection1
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: filledSection2,
    1: setFilledSection2
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: filledSection3,
    1: setFilledSection3
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: filledSection4,
    1: setFilledSection4
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    currentUser
  } = Object(_lib_newAuth__WEBPACK_IMPORTED_MODULE_3__["useAuth"])();
  const containerRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  console.log('-', filledSection);
  console.log('1-', filledSection1);
  console.log('2-', filledSection2);
  console.log('3-', filledSection3);
  console.log('4-', filledSection4);
  const {
    0: loadingHelper,
    1: setLoadingHelper
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    gsap__WEBPACK_IMPORTED_MODULE_6___default.a.set(containerRef.current, {
      opacity: 0
    });
    gsap__WEBPACK_IMPORTED_MODULE_6___default.a.to(containerRef.current, {
      opacity: 1,
      duration: 1,
      ease: gsap__WEBPACK_IMPORTED_MODULE_6__["Power4"].easeIn
    });
    const userUid = js_cookie__WEBPACK_IMPORTED_MODULE_8___default.a.get('uid');

    if (userUid && router.query.project) {
      const data = _lib_firebase__WEBPACK_IMPORTED_MODULE_2__["db"].collection('projects').where('uid', '==', userUid);
      data.where('projectName', '==', router.query.project).get().then(querySnapshot => {
        querySnapshot.forEach(async doc1 => {
          _lib_firebase__WEBPACK_IMPORTED_MODULE_2__["db"].collection('projects').doc(doc1.data().projectId).collection('startupIdea').doc(router.query.project).collection('inputs').onSnapshot(serverUpdate => {
            serverUpdate.docs.map(doc => {
              const data = doc.data();
              setFilledSection(data.filledSection);
              setFilledSection1(data.filledSection1);
              setFilledSection2(data.filledSection2);
              setFilledSection3(data.filledSection3);
              setFilledSection4(data.filledSection4);
              setLoadingHelper(true);
            });
          });
        });
      });
    }
  }, [loadingHelper, router.query.project]);
  console.log('opacity - ', onLoadOpacity);
  return (
    /*#__PURE__*/
    // <>
    //   {filledSections && (
    Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      ref: containerRef,
      className: "text-center mt-12 mb-12",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
        className: "text-center",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          className: "inline-block w-1/5 relative",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_4___default.a, {
            src: "/places/desert.svg",
            height: 75,
            width: 75,
            className: `${onLoadOpacity ? 'opacity-100' : 'opacity-50'}`
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 11
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 152,
            columnNumber: 11
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(DivComponent, {
            filledSection: filledSection,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_4___default.a, {
              src: `/progress/${filledSection ? 'check' : 'remove'}.svg`,
              height: 32,
              width: 32,
              className: `${onLoadOpacity ? 'opacity-100' : 'opacity-50'}`
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 155,
              columnNumber: 13
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 153,
            columnNumber: 11
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: `${onLoadOpacity ? 'opacity-100' : 'opacity-50'} text-primarydark dark:text-background`,
            children: "Vision"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 196,
            columnNumber: 11
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 9
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          className: "inline-block w-1/5 relative",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_4___default.a, {
            src: "/places/wall.svg",
            height: 75,
            width: 75,
            className: `${onLoadOpacity1 ? 'opacity-100' : 'opacity-50'}`
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 199,
            columnNumber: 11
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 200,
            columnNumber: 11
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(DivComponent1, {
            filledSection1: filledSection1,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_4___default.a, {
              src: `/progress/${filledSection1 ? 'check' : 'remove'}.svg`,
              height: 32,
              width: 32,
              className: `${onLoadOpacity1 ? 'opacity-100' : 'opacity-50'}`
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 205,
              columnNumber: 13
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 201,
            columnNumber: 11
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: `${onLoadOpacity1 ? 'opacity-100' : 'opacity-50'} text-primarydark dark:text-background`,
            children: "Product"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 229,
            columnNumber: 11
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 198,
          columnNumber: 9
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          className: "inline-block w-1/5 relative",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_4___default.a, {
            src: "/places/sea.svg",
            height: 75,
            width: 75,
            className: `${onLoadOpacity2 ? 'opacity-100' : 'opacity-50'}`
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 232,
            columnNumber: 11
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 233,
            columnNumber: 11
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(DivComponent2, {
            filledSection2: filledSection2,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_4___default.a, {
              src: `/progress/${filledSection2 ? 'check' : 'remove'}.svg`,
              height: 32,
              width: 32,
              className: `${onLoadOpacity2 ? 'opacity-100' : 'opacity-50'}`
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 238,
              columnNumber: 13
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 234,
            columnNumber: 11
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: `${onLoadOpacity2 ? 'opacity-100' : 'opacity-50'} text-primarydark dark:text-background`,
            children: "Market"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 262,
            columnNumber: 11
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 231,
          columnNumber: 9
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          className: "inline-block w-1/5 relative",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_4___default.a, {
            src: "/places/amsterdam.svg",
            height: 75,
            width: 75,
            className: `${onLoadOpacity3 ? 'opacity-100' : 'opacity-50'}`
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 265,
            columnNumber: 11
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 266,
            columnNumber: 11
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(DivComponent3, {
            filledSection3: filledSection3,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_4___default.a, {
              src: `/progress/${filledSection3 ? 'check' : 'remove'}.svg`,
              height: 32,
              width: 32,
              className: `${onLoadOpacity3 ? 'opacity-100' : 'opacity-50'}`
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 271,
              columnNumber: 13
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 267,
            columnNumber: 11
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: `${onLoadOpacity3 ? 'opacity-100' : 'opacity-50'} text-primarydark dark:text-background`,
            children: "Finances"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 295,
            columnNumber: 11
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 264,
          columnNumber: 9
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          className: "inline-block w-1/5 relative",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_4___default.a, {
            src: "/places/pirate.svg",
            height: 75,
            width: 75,
            className: `${onLoadOpacity4 ? 'opacity-100' : 'opacity-50'}`
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 298,
            columnNumber: 11
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 299,
            columnNumber: 11
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(DivComponent4, {
            filledSection4: filledSection4,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_4___default.a, {
              src: `/progress/${filledSection4 ? 'check' : 'remove'}.svg`,
              height: 32,
              width: 32,
              className: `${onLoadOpacity4 ? 'opacity-100' : 'opacity-50'}`
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 304,
              columnNumber: 13
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 300,
            columnNumber: 11
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: `${onLoadOpacity4 ? 'opacity-100' : 'opacity-50'} text-primarydark dark:text-background`,
            children: "Model"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 328,
            columnNumber: 11
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 297,
          columnNumber: 9
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 7
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 5
    }, undefined) //   )}
    // </>

  );
};

/* harmony default export */ __webpack_exports__["default"] = (ProgressBar);

/***/ }),

/***/ "./components/dashboard/startup/StartupBusinessModelModal.js":
/*!*******************************************************************!*\
  !*** ./components/dashboard/startup/StartupBusinessModelModal.js ***!
  \*******************************************************************/
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
/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../lib/firebase */ "./lib/firebase.js");
/* harmony import */ var _lib_newAuth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../lib/newAuth */ "./lib/newAuth.js");
/* harmony import */ var _ProgressBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ProgressBar */ "./components/dashboard/startup/ProgressBar.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! gsap */ "gsap");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Tippy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Tippy */ "./components/dashboard/Tippy.js");
/* harmony import */ var _NavbarTemplate__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../NavbarTemplate */ "./components/dashboard/NavbarTemplate.js");
/* harmony import */ var _TippyGuide__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./TippyGuide */ "./components/dashboard/startup/TippyGuide.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _ExitComponent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ExitComponent */ "./components/dashboard/startup/ExitComponent.js");


var _jsxFileName = "C:\\off-saas\\components\\dashboard\\startup\\StartupBusinessModelModal.js";













const StartupProductModal = () => {
  const {
    0: projectId,
    1: setProjectId
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();
  const {
    0: onLoadOpacity4,
    1: setOnLoadOpacity4
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true); // OVERVIEW

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
    0: targetCustomersSection,
    1: setTargetCustomersSection
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: competitionDistinguishSection,
    1: setCompetitionDistinguishSection
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
  } = Object(_lib_newAuth__WEBPACK_IMPORTED_MODULE_4__["useAuth"])();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();
  const contentRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(); // TIPPY

  const {
    0: tippyMonster,
    1: setTippyMonster
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: currentTippy,
    1: setCurrentTippy
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  console.log('business model - ', businessModelOverviewSection);
  console.log('business grow - ', businessGrowSection);
  console.log('business success - ', whySuccessSection);

  const onSubmit = async e => {
    e.preventDefault();

    if ( // OVERVIEW
    !marketProblemSection || !marketSolutionSection || !foundersSection || // PRODUCT
    !productOverviewSection || !productPromotionSection || !productBenefitsSection || // MARKET
    !marketOverviewSection || !competitorsSection || !targetCustomersSection || !competitionDistinguishSection || // FINANCES
    !startupCostsSection || !runningCostsSection || !financingSection || // BUSINESS MODEL
    !businessModelOverviewSection || !businessGrowSection || !whySuccessSection || // -----------------------
    // OVERVIEW
    marketProblemSection == 'blank' || marketSolutionSection == 'blank' || foundersSection == 'blank' || // PRODUCT
    productOverviewSection == 'blank' || productPromotionSection == 'blank' || productBenefitsSection == 'blank' || // MARKET
    marketOverviewSection == 'blank' || competitorsSection == 'blank' || targetCustomersSection == 'blank' || competitionDistinguishSection == 'blank' || // FINANCES
    startupCostsSection == 'blank' || runningCostsSection == 'blank' || financingSection == 'blank' || // BUSINESS MODEL
    businessModelOverviewSection == 'blank' || businessGrowSection == 'blank' || whySuccessSection == 'blank') {
      if (currentTippy) {
        setTimeout(() => {
          !tippyMonster && setTippyMonster(true);
        }, 1000);
        return;
      } else {
        !tippyMonster && setTippyMonster(true);
        return;
      }
    }

    gsap__WEBPACK_IMPORTED_MODULE_7___default.a.to(contentRef.current, {
      autoAlpha: 0,
      duration: 1,
      ease: gsap__WEBPACK_IMPORTED_MODULE_7__["Linear"].easeOut
    });
    setTimeout(() => {
      router.push(`/dashboard/projects/${router.query.project}/startup-idea/success`);
    }, 1200);
    await _lib_firebase__WEBPACK_IMPORTED_MODULE_3__["db"].collection('projects').doc(projectId).collection('startupIdea').doc(router.query.project).collection('inputs').doc(documentId).set({
      businessModelOverviewSectionData,
      businessGrowSectionData,
      whySuccessSectionData,
      filledSection4: true
    }, {
      merge: true
    });
    return;
  }; // Data fetch


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
    gsap__WEBPACK_IMPORTED_MODULE_7___default.a.fromTo(contentRef.current, {
      autoAlpha: 0
    }, {
      autoAlpha: 1,
      duration: 1,
      ease: gsap__WEBPACK_IMPORTED_MODULE_7__["Linear"].easeIn
    });

    if (userUid && router.query.project) {
      const data = _lib_firebase__WEBPACK_IMPORTED_MODULE_3__["db"].collection('projects').where('uid', '==', userUid);
      data.where('projectName', '==', router.query.project).get().then(querySnapshot => {
        querySnapshot.forEach(async doc1 => {
          setProjectId(doc1.data().projectId);
          _lib_firebase__WEBPACK_IMPORTED_MODULE_3__["db"].collection('projects').doc(doc1.data().projectId).collection('startupIdea').doc(router.query.project).collection('inputs').onSnapshot(serverUpdate => {
            serverUpdate.docs.map(doc => {
              console.log(doc.data());
              const data = doc.data();
              setDocumentId(doc.id);
              setProjectId(data.projectId); // OVERVIEW;

              setMarketProblemSection(data.marketProblemSectionData), setMarketSolutionSection(data.marketSolutionSectionData), setFoundersSection(data.foundersSectionData), // PRODUCT
              setProductOverviewSection(data.productOverviewSectionData), setProductPromotionSection(data.productPromotionSectionData), setProductBenefitsSection(data.productBenefitsSectionData), // MARKET
              setMarketOverviewSection(data.marketOverviewSectionData), setCompetitorsSection(data.competitorsSectionData), setTargetCustomersSection(data.targetCustomersSectionData), setCompetitionDistinguishSection(data.competitionDistinguishSectionData), // FINANCES
              setStartupCostsSection(data.startupCostsSectionData), setRunningCostsSection(data.runningCostsSectionData), setFinancingSection(data.financingSectionData), // BUSINESS MODEL
              setBusinessModelOverviewSection(data.businessModelOverviewSectionData), setBusinessGrowSection(data.businessGrowSectionData), setWhySuccessSection(data.whySuccessSectionData);
              setLoadingHelper(false);
            });
          });
        });
      });
    } else {
      console.log('Loading failed');
      setLoadingHelper(true);
    }

    return () => setOnLoadOpacity4(false);
  }, [loadingHelper, router.query.project]);
  const businessModelOverviewSectionData = businessModelOverviewSection ? businessModelOverviewSection : 'blank';
  const businessGrowSectionData = businessGrowSection ? businessGrowSection : 'blank';
  const whySuccessSectionData = whySuccessSection ? whySuccessSection : 'blank';

  const onProjectLeave = async e => {
    e.preventDefault();
    gsap__WEBPACK_IMPORTED_MODULE_7___default.a.to(contentRef.current, {
      autoAlpha: 0,
      duration: 1,
      ease: gsap__WEBPACK_IMPORTED_MODULE_7__["Linear"].easeOut
    });
    setTimeout(() => {
      router.push(`/dashboard/projects/${router.query.project}/startup-idea/finances`);
    }, 1200);
    await _lib_firebase__WEBPACK_IMPORTED_MODULE_3__["db"].collection('projects').doc(projectId).collection('startupIdea').doc(router.query.project).collection('inputs').doc(documentId).set({
      businessModelOverviewSectionData,
      businessGrowSectionData,
      whySuccessSectionData,
      filledSection4: businessModelOverviewSection && businessModelOverviewSection != 'blank' && businessGrowSection && businessGrowSection != 'blank' && whySuccessSection && whySuccessSection != 'blank' ? true : (!businessModelOverviewSection || !businessGrowSection || !whySuccessSection || businessModelOverviewSection == 'blank' || businessGrowSection == 'blank' || whySuccessSection == 'blank') && false
    }, {
      merge: true
    });
    await _lib_firebase__WEBPACK_IMPORTED_MODULE_3__["db"].collection('projects').doc(projectId).set({
      businessModelOverviewSectionData,
      businessGrowSectionData,
      whySuccessSectionData,
      filledSection4: businessModelOverviewSection && businessModelOverviewSection != 'blank' && businessGrowSection && businessGrowSection != 'blank' && whySuccessSection && whySuccessSection != 'blank' ? true : (!businessModelOverviewSection || !businessGrowSection || !whySuccessSection || businessModelOverviewSection == 'blank' || businessGrowSection == 'blank' || whySuccessSection == 'blank') && false
    }, {
      merge: true
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ExitComponent__WEBPACK_IMPORTED_MODULE_12__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Tippy__WEBPACK_IMPORTED_MODULE_8__["default"], {
      setCurrentTippy: setCurrentTippy,
      emptyInput: true,
      setTippyMonster: setTippyMonster,
      tippyMonster: tippyMonster,
      model: true,
      contentClass: "h-40 w-96 shadow-lg rounded-2xl bg-primary flex justify-center items-center",
      contentText: "It used to be that pirates had to work out their plunder plans in great details. Their future depended on the success of their mission ",
      contentText1: " In this section, introduce your startup's operating model and tell the world why it is your startup that will be successful "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_NavbarTemplate__WEBPACK_IMPORTED_MODULE_9__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        ref: contentRef,
        className: "h-full w-full relative flex flex-col items-center justify-center",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "w-full max-w-mdStarter lg:max-w-lgContainer 2xl:max-w-xlContainer relative pl-6 pr-6 mt-16 pb-24",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "text-primarydark text-2xl normal:text-3xl mt-2 pl-2 dark:text-background text-center",
            children: "It is a high time to get into the numbers"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 286,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "text-primarydark text-base normal:text-lg mt-2 pl-2 dark:text-background text-center",
            children: ["Startup idea creator will help you create the initial mockup of your future startup", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "/gifs/rocket.gif",
              height: 35,
              width: 35,
              className: "inline-block relative bottom-0.5"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 291,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 289,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ProgressBar__WEBPACK_IMPORTED_MODULE_5__["default"], {
            onLoadOpacity4: onLoadOpacity4
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 299,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
              className: "text-primarydark text-lg mt-10 -mb-6 dark:text-background",
              children: "Business model"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 301,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 300,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "w-full flex flex-col justify-center items-center border-r-6 rounded-2xl bg-white mt-8 dark:bg-background",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "relative flex flex-col h-full w-full flex px-8 pt-8 pb-4",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                  className: "block text-sm font-medium flex justify-between items-end",
                  htmlFor: "businessModelOverview",
                  children: ["Overview of your startup business model.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_TippyGuide__WEBPACK_IMPORTED_MODULE_10__["default"], {
                    contentClass: "w-80 shadow-lg rounded-2xl bg-primary",
                    contentText: ' Questions that can guide you:\n- How does your business model look like?\n- What will be the legal structure of your startup?\n- How will your startup generate income?'
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 308,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 306,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
                  autoComplete: "none",
                  id: "businessModelOverview",
                  onChange: e => setBusinessModelOverviewSection(e.target.value),
                  value: businessModelOverviewSection == 'blank' ? '' : businessModelOverviewSection,
                  className: "pb-24 shadow appearance-none rounded w-full py-3 px-4 text-primarydark leading-tight focus:outline-none focus:shadow-outline text-sm bg-white rounded-2xl mt-2",
                  type: "textarea",
                  placeholder: '“I never dreamed about success, I worked for it.”\n\n~ Estee Lauder'
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 315,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 305,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "mt-12",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                  className: "block text-sm font-medium flex justify-between items-end",
                  htmlFor: "businessGrow",
                  children: ["Predictions and milestones about the growth of your startup.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_TippyGuide__WEBPACK_IMPORTED_MODULE_10__["default"], {
                    contentClass: "w-80 shadow-lg rounded-2xl bg-primary",
                    contentText: " Questions that can guide you:\n- How do you predict your startup grow?\n- How are you going to achieve the projected growth of your startup?\n- What are the milestones for each stage of your startup's development?"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 328,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 326,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
                  autoComplete: "none",
                  id: "businessGrow",
                  onChange: e => setBusinessGrowSection(e.target.value),
                  value: businessGrowSection == 'blank' ? '' : businessGrowSection,
                  className: "pb-24 px-3 shadow appearance-none rounded w-full py-3 px-4 text-primarydark leading-tight focus:outline-none focus:shadow-outline text-sm bg-white rounded-2xl mt-2",
                  type: "textarea",
                  placeholder: '“See things in the present, even if they are in the future.”\n\n~ Larry Ellison'
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 335,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 325,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "mt-12 pb-8",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                  className: "block text-sm font-medium flex justify-between items-end",
                  htmlFor: "success",
                  children: ["Why is it your idea that will be successful?", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_TippyGuide__WEBPACK_IMPORTED_MODULE_10__["default"], {
                    angry: true,
                    contentClass: "w-80 shadow-lg rounded-2xl bg-primary",
                    contentText: ' What else are you waiting for? Get it off your chest and tell the whole world, how strong your motivation is to build a new startup!'
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 348,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 346,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
                  autoComplete: "none",
                  id: "success",
                  onChange: e => setWhySuccessSection(e.target.value),
                  value: whySuccessSection == 'blank' ? '' : whySuccessSection,
                  className: "pb-24 px-3 shadow appearance-none rounded w-full py-3 px-4 text-primarydark leading-tight focus:outline-none focus:shadow-outline text-sm bg-white rounded-2xl mt-2",
                  type: "textarea",
                  placeholder: '“Whether you think you can, or think you can’t – you’re right.”\n\n~ Henry Ford'
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 356,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 345,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 304,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {
              style: {
                width: '90%',
                color: '#a0aec0'
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 367,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "w-full grid grid-cols-3fr grid-flow-column px-8 py-4",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "flex items-center mt-1 text-primarydark text-sm",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  onClick: onProjectLeave,
                  children: "Back"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 370,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 369,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "flex items-center mt-1 justify-self-center",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "text-sm text-gray",
                  children: "Step 5 of 5"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 373,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 372,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "flex justify-end items-center",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  disabled: tippyMonster,
                  onClick: onSubmit,
                  className: "hover:bg-primary hover:text-white dark:hover:bg-primarydark dark:hover:text-background focus:outline-none border border-primary text-primary text-sm font-light py-2 px-8 rounded-2xl dark:text-primarydark dark:border-primarydark",
                  children: "Next"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 376,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 375,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 368,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 303,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 285,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 284,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (StartupProductModal);

/***/ }),

/***/ "./components/dashboard/startup/TippyGuide.js":
/*!****************************************************!*\
  !*** ./components/dashboard/startup/TippyGuide.js ***!
  \****************************************************/
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

var _jsxFileName = "C:\\off-saas\\components\\dashboard\\startup\\TippyGuide.js";





const TippyGuide = ({
  contentClass,
  contentText,
  market,
  model,
  success,
  tippyMonster,
  setTippyMonster,
  setCurrentTippy,
  emptyInput,
  angry
}) => {
  const {
    0: visible,
    1: setVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const contentRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  const tippyRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  const suggestionIcon = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  const tippyder = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(); // const [emptyInput, setEmptyInput] = useState(false);

  const show = () => {
    gsap__WEBPACK_IMPORTED_MODULE_2___default.a.fromTo(tippyRef.current, {
      autoAlpha: 0,
      scale: 0
    }, {
      autoAlpha: 1,
      scale: 1,
      duration: 1,
      ease: gsap__WEBPACK_IMPORTED_MODULE_2__["Power4"].easeOut
    });
    setVisible(true); // emptyInput && setCurrentTippy(true); // current tippy jest częścią obsługi problemu, kiedy mamy otwartego tooltipa normalnego i wciskamy, żeby wyświetlić czerwonego
  };

  const hide = async () => {
    await gsap__WEBPACK_IMPORTED_MODULE_2___default.a.to(tippyRef.current, {
      autoAlpha: 0,
      scale: 0,
      duration: 1,
      ease: gsap__WEBPACK_IMPORTED_MODULE_2__["Power4"].easeIn
    }); // emptyInput && setTippyMonster(false);

    setVisible(false); // emptyInput && setCurrentTippy(false);
  };

  const onImageClick = () => {
    visible ? hide() : show();
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    tippyder.current.classList.remove('data-placement'); // suggestionIcon.current.addEventListener('mouseenter', () => (visible ? hide() : show()));
    // suggestionIcon.current.addEventListener('mouseleave', () => (!visible ? hide() : show()));
    // GSAP
    // gsap.fromTo(
    //   contentRef.current,
    //   { autoAlpha: 0 },
    //   { autoAlpha: 1, duration: 2, ease: Power4.easeOut }
    // );
    // TIPPY
    // setVisible(true);
    // emptyInput && setCurrentTippy(true);
  }, []);
  console.log('tm - ', tippyMonster);
  console.log('visible - ', visible);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_tippyjs_react__WEBPACK_IMPORTED_MODULE_3___default.a, {
    ref: tippyder // trigger={tippyMonster}
    ,
    sticky: false,
    zIndex: 20,
    touch: true,
    visible: visible,
    onClickOutside: hide,
    placement: "left-end" // offset={[-200, -35]}
    ,
    interactive: true,
    content: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      ref: tippyRef,
      className: contentClass,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          whiteSpace: 'pre-line'
        },
        className: "text-primarydark p-4 text-sm text-white",
        children: [angry ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "/emojis/angersymbol.svg",
          height: 22,
          width: 22,
          className: "inline-block relative bottom-0.5"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 15
        }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "/emojis/test.svg",
          height: 22,
          width: 22,
          className: "inline-block"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 15
        }, undefined), contentText]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }, undefined),
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      ref: suggestionIcon,
      id: "suggestionIcon",
      className: "relative cursor-pointer",
      src: "/guide/lamp2.svg",
      height: 40,
      width: 40,
      onClick: onImageClick
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 70,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (TippyGuide);

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

/***/ "./pages/dashboard/projects/[project]/startup-idea/business-model.js":
/*!***************************************************************************!*\
  !*** ./pages/dashboard/projects/[project]/startup-idea/business-model.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_dashboard_startup_StartupBusinessModelModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../components/dashboard/startup/StartupBusinessModelModal */ "./components/dashboard/startup/StartupBusinessModelModal.js");

var _jsxFileName = "C:\\off-saas\\pages\\dashboard\\projects\\[project]\\startup-idea\\business-model.js";



const StartupBusinessModelPage = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_dashboard_startup_StartupBusinessModelModal__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 10
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (StartupBusinessModelPage);

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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjQuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2ltYWdlLWNvbmZpZy5qc1wiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZGFzaGJvYXJkL0Rlc2t0b3BOYXZiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9kYXNoYm9hcmQvTmF2YmFyVGVtcGxhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9kYXNoYm9hcmQvVGlwcHkuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9kYXNoYm9hcmQvc3RhcnR1cC9FeGl0Q29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZGFzaGJvYXJkL3N0YXJ0dXAvUHJvZ3Jlc3NCYXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9kYXNoYm9hcmQvc3RhcnR1cC9TdGFydHVwQnVzaW5lc3NNb2RlbE1vZGFsLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZGFzaGJvYXJkL3N0YXJ0dXAvVGlwcHlHdWlkZS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvZmlyZWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL25ld0F1dGguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9pbWFnZS50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9saW5rLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JlcXVlc3QtaWRsZS1jYWxsYmFjay50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3VzZS1pbnRlcnNlY3Rpb24udHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9taXR0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMtbm9vcC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2ltYWdlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9kYXNoYm9hcmQvcHJvamVjdHMvW3Byb2plY3RdL3N0YXJ0dXAtaWRlYS9idXNpbmVzcy1tb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy91c2VXaW5kb3dTaXplLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkB0aXBweWpzL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2UvYXBwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2UvYXV0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL2ZpcmVzdG9yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL2Z1bmN0aW9uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL3N0b3JhZ2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJnc2FwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianMtY29va2llXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC10aGVtZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZGV2aWNlLWRldGVjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJuYW1lcyI6WyJJc0FjdGl2ZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiRGVza3RvcE5hdmJhciIsImNoaWxkcmVuIiwibG9nT3V0IiwidXNlQXV0aCIsInRoZW1lIiwic2V0VGhlbWUiLCJ1c2VUaGVtZSIsImFjdGl2ZSIsInNldEFjdGl2ZSIsInVzZVN0YXRlIiwibmF2UmVmIiwidXNlUmVmIiwicm91dGVyIiwidXNlUm91dGVyIiwibWFuUmVmIiwidGwiLCJnc2FwIiwidGltZWxpbmUiLCJyZXBlYXQiLCJ5b3lvIiwidXNlRWZmZWN0IiwidG8iLCJjdXJyZW50IiwiZHVyYXRpb24iLCJ5IiwieCIsImVhc2UiLCJQb3dlcjEiLCJlYXNlSW5PdXQiLCJhY3RpdmVDbGFzczEiLCJzZXRBY3RpdmVDbGFzczEiLCJhY3RpdmVDbGFzczIiLCJzZXRBY3RpdmVDbGFzczIiLCJhY3RpdmVDbGFzczMiLCJzZXRBY3RpdmVDbGFzczMiLCJhY3RpdmVDbGFzczQiLCJzZXRBY3RpdmVDbGFzczQiLCJhY3RpdmVDbGFzczUiLCJzZXRBY3RpdmVDbGFzczUiLCJhY3RpdmVIb3ZlcjEiLCJzZXRBY3RpdmVIb3ZlcjEiLCJhY3RpdmVIb3ZlcjIiLCJzZXRBY3RpdmVIb3ZlcjIiLCJhY3RpdmVIb3ZlcjMiLCJzZXRBY3RpdmVIb3ZlcjMiLCJhY3RpdmVIb3ZlcjQiLCJzZXRBY3RpdmVIb3ZlcjQiLCJhY3RpdmVIb3ZlcjUiLCJzZXRBY3RpdmVIb3ZlcjUiLCJwYXRobmFtZSIsImluY2x1ZGVzIiwiYWN0aXZlQ2xhc3NGbjEiLCJhY3RpdmVDbGFzc0ZuMiIsImFjdGl2ZUNsYXNzRm4zIiwiYWN0aXZlQ2xhc3NGbjQiLCJhY3RpdmVDbGFzc0ZuNSIsIm1vdXNlRW50ZXJOYXYiLCJ3aWR0aCIsIlBvd2VyNCIsImVhc2VPdXQiLCJtb3VzZUxlYXZlTmF2Iiwib3ZlcmZsb3ciLCJoZWlnaHQiLCJjdXJzb3IiLCJSZWRpcmVjdCIsInB1c2giLCJOYXZiYXJUZW1wbGF0ZSIsInNpemUiLCJ1c2VXaW5kb3dTaXplIiwiYWN0aXZlSG92ZXIiLCJ1c2VDb250ZXh0IiwiY3VycmVudFVzZXIiLCJjb250ZW50UmVmIiwiYWN0aXZlQ2xhc3MiLCJtYXJnaW5MZWZ0IiwidHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uIiwidHJhbnNpdGlvbkR1cmF0aW9uIiwidHJhbnNpdGlvblByb3BlcnR5IiwiVGlwcHlNb25zdGVyIiwiY29udGVudENsYXNzIiwiY29udGVudFRleHQiLCJjb250ZW50VGV4dDEiLCJzdGFydHVwcyIsIm1hcmtldCIsIm1vZGVsIiwic3VjY2VzcyIsInRpcHB5TW9uc3RlciIsInNldFRpcHB5TW9uc3RlciIsInNldEN1cnJlbnRUaXBweSIsImVtcHR5SW5wdXQiLCJpbml0aWFsTW9kYWwiLCJ2aXNpb24iLCJwcm9kdWN0IiwiZmluYW5jZXMiLCJ3ZWxjb21lIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJ0aXBweVJlZiIsInNob3ciLCJmcm9tVG8iLCJhdXRvQWxwaGEiLCJzY2FsZSIsInRyYW5zZm9ybU9yaWdpbiIsImhpZGUiLCJlYXNlSW4iLCJvbkltYWdlQ2xpY2siLCJjb25zb2xlIiwibG9nIiwiRXhpdENvbXBvbmVudCIsImV4aXRJbWFnZSIsImlzTW9iaWxlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJvdGF0aW9uIiwiTGluZWFyIiwiUm91dGVyIiwicXVlcnkiLCJwcm9qZWN0IiwiRGl2Q29tcG9uZW50Iiwic3R5bGVkIiwiZGl2IiwicHJvcHMiLCJmaWxsZWRTZWN0aW9uIiwiRGl2Q29tcG9uZW50MSIsImZpbGxlZFNlY3Rpb24xIiwiRGl2Q29tcG9uZW50MiIsImZpbGxlZFNlY3Rpb24yIiwiRGl2Q29tcG9uZW50MyIsImZpbGxlZFNlY3Rpb24zIiwiRGl2Q29tcG9uZW50NCIsIlByb2dyZXNzQmFyIiwib25Mb2FkT3BhY2l0eSIsIm9uTG9hZE9wYWNpdHkxIiwib25Mb2FkT3BhY2l0eTIiLCJvbkxvYWRPcGFjaXR5MyIsIm9uTG9hZE9wYWNpdHk0Iiwic2V0RmlsbGVkU2VjdGlvbiIsInNldEZpbGxlZFNlY3Rpb24xIiwic2V0RmlsbGVkU2VjdGlvbjIiLCJzZXRGaWxsZWRTZWN0aW9uMyIsImZpbGxlZFNlY3Rpb240Iiwic2V0RmlsbGVkU2VjdGlvbjQiLCJjb250YWluZXJSZWYiLCJsb2FkaW5nSGVscGVyIiwic2V0TG9hZGluZ0hlbHBlciIsInNldCIsIm9wYWNpdHkiLCJ1c2VyVWlkIiwiQ29va2llcyIsImdldCIsImRhdGEiLCJkYiIsImNvbGxlY3Rpb24iLCJ3aGVyZSIsInRoZW4iLCJxdWVyeVNuYXBzaG90IiwiZm9yRWFjaCIsImRvYzEiLCJkb2MiLCJwcm9qZWN0SWQiLCJvblNuYXBzaG90Iiwic2VydmVyVXBkYXRlIiwiZG9jcyIsIm1hcCIsIlN0YXJ0dXBQcm9kdWN0TW9kYWwiLCJzZXRQcm9qZWN0SWQiLCJzZXRPbkxvYWRPcGFjaXR5NCIsIm1hcmtldFByb2JsZW1TZWN0aW9uIiwic2V0TWFya2V0UHJvYmxlbVNlY3Rpb24iLCJtYXJrZXRTb2x1dGlvblNlY3Rpb24iLCJzZXRNYXJrZXRTb2x1dGlvblNlY3Rpb24iLCJmb3VuZGVyc1NlY3Rpb24iLCJzZXRGb3VuZGVyc1NlY3Rpb24iLCJwcm9kdWN0T3ZlcnZpZXdTZWN0aW9uIiwic2V0UHJvZHVjdE92ZXJ2aWV3U2VjdGlvbiIsInByb2R1Y3RQcm9tb3Rpb25TZWN0aW9uIiwic2V0UHJvZHVjdFByb21vdGlvblNlY3Rpb24iLCJwcm9kdWN0QmVuZWZpdHNTZWN0aW9uIiwic2V0UHJvZHVjdEJlbmVmaXRzU2VjdGlvbiIsIm1hcmtldE92ZXJ2aWV3U2VjdGlvbiIsInNldE1hcmtldE92ZXJ2aWV3U2VjdGlvbiIsImNvbXBldGl0b3JzU2VjdGlvbiIsInNldENvbXBldGl0b3JzU2VjdGlvbiIsInRhcmdldEN1c3RvbWVyc1NlY3Rpb24iLCJzZXRUYXJnZXRDdXN0b21lcnNTZWN0aW9uIiwiY29tcGV0aXRpb25EaXN0aW5ndWlzaFNlY3Rpb24iLCJzZXRDb21wZXRpdGlvbkRpc3Rpbmd1aXNoU2VjdGlvbiIsInN0YXJ0dXBDb3N0c1NlY3Rpb24iLCJzZXRTdGFydHVwQ29zdHNTZWN0aW9uIiwicnVubmluZ0Nvc3RzU2VjdGlvbiIsInNldFJ1bm5pbmdDb3N0c1NlY3Rpb24iLCJmaW5hbmNpbmdTZWN0aW9uIiwic2V0RmluYW5jaW5nU2VjdGlvbiIsImJ1c2luZXNzTW9kZWxPdmVydmlld1NlY3Rpb24iLCJzZXRCdXNpbmVzc01vZGVsT3ZlcnZpZXdTZWN0aW9uIiwiYnVzaW5lc3NHcm93U2VjdGlvbiIsInNldEJ1c2luZXNzR3Jvd1NlY3Rpb24iLCJ3aHlTdWNjZXNzU2VjdGlvbiIsInNldFdoeVN1Y2Nlc3NTZWN0aW9uIiwiY3VycmVudFRpcHB5Iiwib25TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJzZXRUaW1lb3V0IiwiZG9jdW1lbnRJZCIsImJ1c2luZXNzTW9kZWxPdmVydmlld1NlY3Rpb25EYXRhIiwiYnVzaW5lc3NHcm93U2VjdGlvbkRhdGEiLCJ3aHlTdWNjZXNzU2VjdGlvbkRhdGEiLCJtZXJnZSIsInNldERvY3VtZW50SWQiLCJpZCIsIm1hcmtldFByb2JsZW1TZWN0aW9uRGF0YSIsIm1hcmtldFNvbHV0aW9uU2VjdGlvbkRhdGEiLCJmb3VuZGVyc1NlY3Rpb25EYXRhIiwicHJvZHVjdE92ZXJ2aWV3U2VjdGlvbkRhdGEiLCJwcm9kdWN0UHJvbW90aW9uU2VjdGlvbkRhdGEiLCJwcm9kdWN0QmVuZWZpdHNTZWN0aW9uRGF0YSIsIm1hcmtldE92ZXJ2aWV3U2VjdGlvbkRhdGEiLCJjb21wZXRpdG9yc1NlY3Rpb25EYXRhIiwidGFyZ2V0Q3VzdG9tZXJzU2VjdGlvbkRhdGEiLCJjb21wZXRpdGlvbkRpc3Rpbmd1aXNoU2VjdGlvbkRhdGEiLCJzdGFydHVwQ29zdHNTZWN0aW9uRGF0YSIsInJ1bm5pbmdDb3N0c1NlY3Rpb25EYXRhIiwiZmluYW5jaW5nU2VjdGlvbkRhdGEiLCJvblByb2plY3RMZWF2ZSIsInRhcmdldCIsInZhbHVlIiwiY29sb3IiLCJUaXBweUd1aWRlIiwiYW5ncnkiLCJzdWdnZXN0aW9uSWNvbiIsInRpcHB5ZGVyIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwid2hpdGVTcGFjZSIsImZpcmViYXNlIiwiYXBwcyIsImxlbmd0aCIsImluaXRpYWxpemVBcHAiLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJtZWFzdXJlbWVudElkIiwiYXV0aCIsImZpcmVzdG9yZSIsInN0b3JhZ2UiLCJBdXRoQ29udGV4dCIsIkF1dGhQcm92aWRlciIsInNldEN1cnJlbnRVc2VyIiwibG9hZGluZyIsInNldExvYWRpbmciLCJoYW5kbGVVc2VyIiwidXNlciIsImZvcm1hdGVkVXNlciIsImZvcm1hdFVzZXIiLCJ1aWQiLCJzaWduVXAiLCJlbWFpbCIsInBhc3N3b3JkIiwiY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkIiwicmVzcG9uc2UiLCJsb2dJbiIsInNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwic2lnbk91dCIsInVuc3Vic2NyaWJlIiwib25JZFRva2VuQ2hhbmdlZCIsImdldFN0cmlwZVJvbGUiLCJnZXRJZFRva2VuIiwiZGVjb2RlZFRva2VuIiwiZ2V0SWRUb2tlblJlc3VsdCIsImNsYWltcyIsInN0cmlwZVJvbGUiLCJ0b2tlbiIsInByb3ZpZGVyIiwicHJvdmlkZXJEYXRhIiwicHJvdmlkZXJJZCIsImdsb2JhbCIsIlZBTElEX0xPQURJTkdfVkFMVUVTIiwibG9hZGVycyIsIlZBTElEX0xBWU9VVF9WQUxVRVMiLCJkZXZpY2VTaXplcyIsImltYWdlU2l6ZXMiLCJsb2FkZXIiLCJwYXRoIiwiZG9tYWlucyIsInByb2Nlc3MiLCJpbWFnZUNvbmZpZ0RlZmF1bHQiLCJhbGxTaXplcyIsImNvbmZpZ0RldmljZVNpemVzIiwiYSIsInNpemVzIiwibGF5b3V0IiwicGVyY2VudFNpemVzIiwibSIsInBhcnNlSW50Iiwic21hbGxlc3RSYXRpbyIsIk1hdGgiLCJ3aWR0aHMiLCJzIiwia2luZCIsInciLCJwIiwic3JjU2V0IiwiZ2V0V2lkdGhzIiwibGFzdCIsImkiLCJzcmMiLCJsb2FkIiwicm9vdCIsIlZBTElEX0xPQURFUlMiLCJjb25maWdMb2FkZXIiLCJ1bm9wdGltaXplZCIsInByaW9yaXR5IiwiYWxsIiwicmVzdCIsInVuc2l6ZWQiLCJCb29sZWFuIiwiSlNPTiIsImlzTGF6eSIsInJvb3RNYXJnaW4iLCJkaXNhYmxlZCIsImlzVmlzaWJsZSIsIndpZHRoSW50IiwiZ2V0SW50IiwiaGVpZ2h0SW50IiwicXVhbGl0eUludCIsImltZ1N0eWxlIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwiYm90dG9tIiwicmlnaHQiLCJib3hTaXppbmciLCJwYWRkaW5nIiwiYm9yZGVyIiwibWFyZ2luIiwiZGlzcGxheSIsIm1pbldpZHRoIiwibWF4V2lkdGgiLCJtaW5IZWlnaHQiLCJtYXhIZWlnaHQiLCJxdW90aWVudCIsInBhZGRpbmdUb3AiLCJpc05hTiIsIndyYXBwZXJTdHlsZSIsInNpemVyU3R5bGUiLCJzaXplclN2ZyIsImltZ0F0dHJpYnV0ZXMiLCJnZW5lcmF0ZUltZ0F0dHJzIiwicXVhbGl0eSIsInBhcmFtcyIsInBhcmFtc1N0cmluZyIsIm5vcm1hbGl6ZVNyYyIsIm1pc3NpbmdWYWx1ZXMiLCJwYXJzZWRTcmMiLCJjb25maWdEb21haW5zIiwiaG9zdG5hbWUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJwcmVmZXRjaGVkIiwiZXJyIiwiY3VyTG9jYWxlIiwib3B0aW9ucyIsImhyZWYiLCJldmVudCIsIm5vZGVOYW1lIiwiaXNNb2RpZmllZEV2ZW50Iiwic2Nyb2xsIiwiYXMiLCJyZXBsYWNlIiwiYXJncyIsImtleSIsImV4cGVjdGVkIiwiYWN0dWFsIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsIk9iamVjdCIsImNyZWF0ZVByb3BFcnJvciIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJzaGFsbG93IiwicGFzc0hyZWYiLCJwcmVmZXRjaCIsImxvY2FsZSIsIm9wdGlvbmFsUHJvcHMiLCJ2YWxUeXBlIiwiaGFzV2FybmVkIiwiUmVhY3QiLCJyZXNvbHZlZEFzIiwiY2hpbGQiLCJDaGlsZHJlbiIsImNoaWxkUmVmIiwic2V0UmVmIiwiZWwiLCJzZXRJbnRlcnNlY3Rpb25SZWYiLCJzaG91bGRQcmVmZXRjaCIsImlzUHJlZmV0Y2hlZCIsImNoaWxkUHJvcHMiLCJyZWYiLCJvbkNsaWNrIiwibGlua0NsaWNrZWQiLCJsb2NhbGVEb21haW4iLCJMaW5rIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwic2VsZiIsInN0YXJ0IiwiRGF0ZSIsImNiIiwiZGlkVGltZW91dCIsInRpbWVSZW1haW5pbmciLCJjYW5jZWxJZGxlQ2FsbGJhY2siLCJjbGVhclRpbWVvdXQiLCJNU19NQVhfSURMRV9ERUxBWSIsImVudHJ5IiwiUHJvbWlzZSIsInByb20iLCJyZXNvbHZlIiwicmVzb2x2ZXIiLCJmdXR1cmUiLCJnZW5lcmF0b3IiLCJsaW5rIiwiZG9jdW1lbnQiLCJ3aW5kb3ciLCJjYW5QcmVmZXRjaCIsImhhc1ByZWZldGNoIiwicmVzIiwiQVNTRVRfTE9BRF9FUlJPUiIsIlN5bWJvbCIsInNjcmlwdCIsInJlamVjdCIsIm1hcmtBc3NldEVycm9yIiwiY2FuY2VsbGVkIiwiciIsIm9uQnVpbGRNYW5pZmVzdCIsInJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQiLCJzY3JpcHRzIiwiYXNzZXRQcmVmaXgiLCJlbmNvZGVVUkkiLCJjc3MiLCJnZXRDbGllbnRCdWlsZE1hbmlmZXN0IiwibWFuaWZlc3QiLCJyb3V0ZSIsImFsbEZpbGVzIiwidiIsImVudHJ5cG9pbnRzIiwibG9hZGVkU2NyaXB0cyIsInN0eWxlU2hlZXRzIiwicm91dGVzIiwiYXBwZW5kU2NyaXB0IiwiZmV0Y2giLCJ0ZXh0IiwiY29udGVudCIsIndoZW5FbnRyeXBvaW50Iiwid2l0aEZ1dHVyZSIsIm9uRW50cnlwb2ludCIsImZuIiwiZXhwb3J0cyIsImNvbXBvbmVudCIsImVycm9yIiwiaW5wdXQiLCJvbGQiLCJsb2FkUm91dGUiLCJnZXRGaWxlc0ZvclJvdXRlIiwiZW50cnlwb2ludCIsInN0eWxlcyIsImNuIiwibmF2aWdhdG9yIiwib3V0cHV0IiwicHJlZmV0Y2hWaWFEb20iLCJjcmVhdGVSb3V0ZUxvYWRlciIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJmaWVsZCIsImdldFJvdXRlciIsImV2ZW50RmllbGQiLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsIl9yb3V0ZXIiLCJpbnN0YW5jZSIsIkFycmF5IiwiaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJpc0Rpc2FibGVkIiwidW5vYnNlcnZlIiwib2JzZXJ2ZSIsImlkbGVDYWxsYmFjayIsImNyZWF0ZU9ic2VydmVyIiwiZWxlbWVudHMiLCJvYnNlcnZlciIsIm9ic2VydmVycyIsImVudHJpZXMiLCJjYWxsYmFjayIsIkNvbXBvc2VkQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiV2l0aFJvdXRlcldyYXBwZXIiLCJuYW1lIiwicGF0aG5hbWVQYXJ0cyIsImxvY2FsZXMiLCJkZXRlY3RlZExvY2FsZSIsIm9uIiwib2ZmIiwiZW1pdCIsImhhbmRsZXIiLCJiYXNlUGF0aCIsInByZWZpeCIsInBhdGhOb1F1ZXJ5SGFzaCIsInF1ZXJ5SW5kZXgiLCJoYXNoSW5kZXgiLCJhZGRQYXRoUHJlZml4IiwidXJsIiwibG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsImhhc0Jhc2VQYXRoIiwiaW50ZXJwb2xhdGVkUm91dGUiLCJkeW5hbWljUmVnZXgiLCJkeW5hbWljR3JvdXBzIiwiZHluYW1pY01hdGNoZXMiLCJhc1BhdGhuYW1lIiwicGFyYW0iLCJyZXBsYWNlZCIsIm9wdGlvbmFsIiwic2VnbWVudCIsInJlc3VsdCIsImZpbHRlcmVkUXVlcnkiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJpc0xvY2FsVVJMIiwicmVzb2x2ZUFzIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsImludGVycG9sYXRlQXMiLCJoYXNoIiwib21pdFBhcm1zRnJvbVF1ZXJ5IiwicmVzb2x2ZWRIcmVmIiwib3JpZ2luIiwicmVzb2x2ZUhyZWYiLCJocmVmSGFkT3JpZ2luIiwiYXNIYWRPcmlnaW4iLCJzdHJpcE9yaWdpbiIsInByZXBhcmVkVXJsIiwiYWRkQmFzZVBhdGgiLCJwcmVwYXJlZEFzIiwiY2xlYW5QYXRobmFtZSIsInBhZ2VzIiwicGFnZSIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiU1NHX0RBVEFfTk9UX0ZPVU5EIiwiY3JlZGVudGlhbHMiLCJhdHRlbXB0cyIsImZldGNoUmV0cnkiLCJub3RGb3VuZCIsImlzU2VydmVyUmVuZGVyIiwiY29uc3RydWN0b3IiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic2RyIiwic3ViIiwiY2xjIiwicGFnZUxvYWRlciIsIl9icHMiLCJldmVudHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiaXNGYWxsYmFjayIsIl9pbkZsaWdodFJvdXRlIiwiX3NoYWxsb3ciLCJkZWZhdWx0TG9jYWxlIiwiZG9tYWluTG9jYWxlcyIsImlzUmVhZHkiLCJpc1ByZXZpZXciLCJpc0xvY2FsZURvbWFpbiIsIl9pZHgiLCJzdGF0ZSIsImluaXRpYWwiLCJfX05fU1NHIiwiaW5pdGlhbFByb3BzIiwiX19OX1NTUCIsIkNvbXBvbmVudCIsImF1dG9FeHBvcnREeW5hbWljIiwicmVsb2FkIiwiYmFjayIsInByZXBhcmVVcmxBcyIsImxvY2FsZUNoYW5nZSIsIlNUIiwicGVyZm9ybWFuY2UiLCJyb3V0ZVByb3BzIiwiYWRkTG9jYWxlIiwiZGVsQmFzZVBhdGgiLCJjbGVhbmVkQXMiLCJkZWxMb2NhbGUiLCJwYXJzZWQiLCJfX3Jld3JpdGVzIiwibWV0aG9kIiwicmVzb2x2ZUR5bmFtaWNSb3V0ZSIsInBhcnNlZEFzIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJzaG91bGRJbnRlcnBvbGF0ZSIsIm1pc3NpbmdQYXJhbXMiLCJyb3V0ZUluZm8iLCJkZXN0aW5hdGlvbiIsInBhcnNlZEhyZWYiLCJub3RGb3VuZFJvdXRlIiwiYXBwQ29tcCIsImlzVmFsaWRTaGFsbG93Um91dGUiLCJmb3JjZWRTY3JvbGwiLCJjaGFuZ2VTdGF0ZSIsIl9fTiIsImlkeCIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJleGlzdGluZ1JvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsInJlcXVpcmUiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJkYXRhSHJlZiIsImJlZm9yZVBvcFN0YXRlIiwib25seUFIYXNoQ2hhbmdlIiwibmV3SGFzaCIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJzY3JvbGxUb0hhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJpc1NzZyIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsIl9nZXREYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJmZXRjaE5leHREYXRhIiwiX2dldFNlcnZlckRhdGEiLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5Iiwic2xhc2hlZFByb3RvY29scyIsInByb3RvY29sIiwidXJsT2JqIiwiaG9zdCIsIlN0cmluZyIsInF1ZXJ5c3RyaW5nIiwic2VhcmNoIiwiVEVTVF9ST1VURSIsImdsb2JhbEJhc2UiLCJyZXNvbHZlZEJhc2UiLCJzZWFyY2hQYXJhbXMiLCJpdGVtIiwic3RyaW5naWZ5VXJsUXVlcnlQYXJhbSIsInNlYXJjaFBhcmFtc0xpc3QiLCJyZSIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsInNsdWdOYW1lIiwiZyIsImdyb3VwcyIsInN0ciIsInNlZ21lbnRzIiwibm9ybWFsaXplZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsInBhcnNlUGFyYW1ldGVyIiwicG9zIiwiZXNjYXBlUmVnZXgiLCJyb3V0ZUtleUNoYXJDb2RlIiwicm91dGVLZXlDaGFyTGVuZ3RoIiwiZ2V0U2FmZVJvdXRlS2V5Iiwicm91dGVLZXkiLCJyb3V0ZUtleXMiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImNsZWFuZWRLZXkiLCJpbnZhbGlkS2V5IiwibmFtZWRSZWdleCIsInVzZWQiLCJwb3J0IiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJBcHAiLCJnZXREaXNwbGF5TmFtZSIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJpc1Jlc1NlbnQiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJTdGFydHVwQnVzaW5lc3NNb2RlbFBhZ2UiLCJ3aW5kb3dTaXplIiwic2V0V2luZG93U2l6ZSIsInVuZGVmaW5lZCIsImhhbmRsZVJlc2l6ZSIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ3hGQSw4RDs7Ozs7Ozs7Ozs7QUNBQSx3RTs7Ozs7Ozs7Ozs7QUNBQSxnRzs7Ozs7Ozs7Ozs7QUNBQSxvRTs7Ozs7Ozs7Ozs7QUNBQSx5RTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRU8sTUFBTUEsZUFBZSxnQkFBR0MsMkRBQWEsRUFBckM7O0FBRVAsTUFBTUMsYUFBYSxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWtCO0FBQ3RDLFFBQU07QUFBRUM7QUFBRixNQUFhQyw0REFBTyxFQUExQjtBQUVBLFFBQU07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Q0FBVCxDQVA4QixDQXNCdEI7O0FBQ1IsU0FBT0gsVUFBUDtBQUNELEM7Ozs7Ozs7Ozs7O0FDbkNELDJDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGdEOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6InBhZ2VzL2Rhc2hib2FyZC9wcm9qZWN0cy9bcHJvamVjdF0vc3RhcnR1cC1pZGVhL2J1c2luZXNzLW1vZGVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9kYXNoYm9hcmQvcHJvamVjdHMvW3Byb2plY3RdL3N0YXJ0dXAtaWRlYS9idXNpbmVzcy1tb2RlbC5qc1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvaW1hZ2UtY29uZmlnLmpzXCIpOyIsImltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZVN0YXRlLCBjcmVhdGVDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBnc2FwLCB7IFBvd2VyMSwgUG93ZXI0IH0gZnJvbSAnZ3NhcCc7XHJcblxyXG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gJ25leHQtdGhlbWVzJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSAnLi4vLi4vbGliL25ld0F1dGgnO1xyXG5cclxuZXhwb3J0IGNvbnN0IElzQWN0aXZlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmNvbnN0IERlc2t0b3BOYXZiYXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgeyBsb2dPdXQgfSA9IHVzZUF1dGgoKTtcclxuXHJcbiAgY29uc3QgeyB0aGVtZSwgc2V0VGhlbWUgfSA9IHVzZVRoZW1lKCk7XHJcbiAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBuYXZSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IG1hblJlZiA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCB0bCA9IGdzYXAudGltZWxpbmUoeyByZXBlYXQ6IC0xLCB5b3lvOiB0cnVlIH0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgdGwudG8obWFuUmVmLmN1cnJlbnQsIHtcclxuICAgICAgZHVyYXRpb246IDMsXHJcbiAgICAgIHk6IDI1MCxcclxuICAgICAgeDogMTc1LFxyXG4gICAgICBlYXNlOiBQb3dlcjEuZWFzZUluT3V0LFxyXG4gICAgfSlcclxuICAgICAgLnRvKG1hblJlZi5jdXJyZW50LCB7XHJcbiAgICAgICAgZHVyYXRpb246IDMsXHJcbiAgICAgICAgeTogNTAwLFxyXG4gICAgICAgIHg6IDM1MCxcclxuICAgICAgICBlYXNlOiBQb3dlcjEuZWFzZUluT3V0LFxyXG4gICAgICB9KVxyXG4gICAgICAudG8obWFuUmVmLmN1cnJlbnQsIHtcclxuICAgICAgICBkdXJhdGlvbjogMyxcclxuICAgICAgICB5OiAyNTAsXHJcbiAgICAgICAgeDogMTc1LFxyXG4gICAgICAgIGVhc2U6IFBvd2VyMS5lYXNlSW5PdXQsXHJcbiAgICAgIH0pXHJcbiAgICAgIC50byhtYW5SZWYuY3VycmVudCwgeyBkdXJhdGlvbjogMywgeTogMCwgeDogMCwgZWFzZTogUG93ZXIxLmVhc2VJbk91dCB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IFthY3RpdmVDbGFzczEsIHNldEFjdGl2ZUNsYXNzMV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2FjdGl2ZUNsYXNzMiwgc2V0QWN0aXZlQ2xhc3MyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbYWN0aXZlQ2xhc3MzLCBzZXRBY3RpdmVDbGFzczNdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFthY3RpdmVDbGFzczQsIHNldEFjdGl2ZUNsYXNzNF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2FjdGl2ZUNsYXNzNSwgc2V0QWN0aXZlQ2xhc3M1XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgW2FjdGl2ZUhvdmVyMSwgc2V0QWN0aXZlSG92ZXIxXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbYWN0aXZlSG92ZXIyLCBzZXRBY3RpdmVIb3ZlcjJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFthY3RpdmVIb3ZlcjMsIHNldEFjdGl2ZUhvdmVyM10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2FjdGl2ZUhvdmVyNCwgc2V0QWN0aXZlSG92ZXI0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbYWN0aXZlSG92ZXI1LCBzZXRBY3RpdmVIb3ZlcjVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHJvdXRlci5wYXRobmFtZS5pbmNsdWRlcygnd2VsY29tZScpKSB7XHJcbiAgICAgIHNldEFjdGl2ZUNsYXNzMSh0cnVlKTtcclxuICAgIH0gZWxzZSBpZiAocm91dGVyLnBhdGhuYW1lLmluY2x1ZGVzKCdzdGFydHVwJykpIHtcclxuICAgICAgc2V0QWN0aXZlQ2xhc3MyKHRydWUpO1xyXG4gICAgfSBlbHNlIGlmIChyb3V0ZXIucGF0aG5hbWUuaW5jbHVkZXMoJ2J1c2luZXNzJykpIHtcclxuICAgICAgLy8gVGVnbyByb3V0ZXInYSBqZXN6Y3plIG5pZSBtYVxyXG4gICAgICBzZXRBY3RpdmVDbGFzczModHJ1ZSk7XHJcbiAgICB9IGVsc2UgaWYgKHJvdXRlci5wYXRobmFtZS5pbmNsdWRlcygnYWNjb3VudCcpKSB7XHJcbiAgICAgIC8vIFRlZ28gcm91dGVyJ2EgamVzemN6ZSBuaWUgbWFcclxuICAgICAgc2V0QWN0aXZlQ2xhc3M0KHRydWUpO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgYWN0aXZlQ2xhc3NGbjEgPSAoKSA9PiB7XHJcbiAgICBzZXRBY3RpdmVDbGFzczEodHJ1ZSk7XHJcbiAgICBzZXRBY3RpdmVDbGFzczIoZmFsc2UpO1xyXG4gICAgc2V0QWN0aXZlQ2xhc3MzKGZhbHNlKTtcclxuICAgIHNldEFjdGl2ZUNsYXNzNChmYWxzZSk7XHJcbiAgICBzZXRBY3RpdmVDbGFzczUoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGFjdGl2ZUNsYXNzRm4yID0gKCkgPT4ge1xyXG4gICAgc2V0QWN0aXZlQ2xhc3MxKGZhbHNlKTtcclxuICAgIHNldEFjdGl2ZUNsYXNzMih0cnVlKTtcclxuICAgIHNldEFjdGl2ZUNsYXNzMyhmYWxzZSk7XHJcbiAgICBzZXRBY3RpdmVDbGFzczQoZmFsc2UpO1xyXG4gICAgc2V0QWN0aXZlQ2xhc3M1KGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBhY3RpdmVDbGFzc0ZuMyA9ICgpID0+IHtcclxuICAgIHNldEFjdGl2ZUNsYXNzMShmYWxzZSk7XHJcbiAgICBzZXRBY3RpdmVDbGFzczIoZmFsc2UpO1xyXG4gICAgc2V0QWN0aXZlQ2xhc3MzKHRydWUpO1xyXG4gICAgc2V0QWN0aXZlQ2xhc3M0KGZhbHNlKTtcclxuICAgIHNldEFjdGl2ZUNsYXNzNShmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYWN0aXZlQ2xhc3NGbjQgPSAoKSA9PiB7XHJcbiAgICBzZXRBY3RpdmVDbGFzczEoZmFsc2UpO1xyXG4gICAgc2V0QWN0aXZlQ2xhc3MyKGZhbHNlKTtcclxuICAgIHNldEFjdGl2ZUNsYXNzMyhmYWxzZSk7XHJcbiAgICBzZXRBY3RpdmVDbGFzczQodHJ1ZSk7XHJcbiAgICBzZXRBY3RpdmVDbGFzczUoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGFjdGl2ZUNsYXNzRm41ID0gKCkgPT4ge1xyXG4gICAgc2V0QWN0aXZlQ2xhc3MxKGZhbHNlKTtcclxuICAgIHNldEFjdGl2ZUNsYXNzMihmYWxzZSk7XHJcbiAgICBzZXRBY3RpdmVDbGFzczMoZmFsc2UpO1xyXG4gICAgc2V0QWN0aXZlQ2xhc3M0KGZhbHNlKTtcclxuICAgIHNldEFjdGl2ZUNsYXNzNSh0cnVlKTtcclxuICAgIGxvZ091dCgpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG1vdXNlRW50ZXJOYXYgPSAoKSA9PiB7XHJcbiAgICBzZXRBY3RpdmUodHJ1ZSk7XHJcblxyXG4gICAgZ3NhcC50byhuYXZSZWYuY3VycmVudCwge1xyXG4gICAgICB3aWR0aDogJzIwOHB4JyxcclxuICAgICAgZWFzZTogUG93ZXI0LmVhc2VPdXQsXHJcbiAgICAgIGR1cmF0aW9uOiAxLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbW91c2VMZWF2ZU5hdiA9ICgpID0+IHtcclxuICAgIHNldEFjdGl2ZShmYWxzZSk7XHJcblxyXG4gICAgZ3NhcC50byhuYXZSZWYuY3VycmVudCwgeyB3aWR0aDogJzgwcHgnLCBlYXNlOiBQb3dlcjQuZWFzZU91dCB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPElzQWN0aXZlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17YWN0aXZlfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCByaWdodC0wIHotNTBcIiBzdHlsZT17eyBvdmVyZmxvdzogJ3Vuc2V0JywgaGVpZ2h0OiAxNzUgfX0+XHJcbiAgICAgICAgPHN2ZyB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIHN0eWxlPXt7IG92ZXJmbG93OiAndW5zZXQnIH19IHZpZXdCb3g9XCIwIDAgNzcwIDc3MlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgICAgICAgIDxnPlxyXG4gICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0VGhlbWUodGhlbWUgPT09ICdkYXJrJyA/ICdsaWdodCcgOiAnZGFyaycpfVxyXG4gICAgICAgICAgICAgIGQ9XCJNNzY5LjAwMSAwSDMxMC4yODZDMzA2Ljc2MiAyMS40ODcxIDMwNC45OTQgNDMuMjI1NyAzMDUuMDAxIDY1QzMwNS4wMDEgMjg0LjgwOSA0ODMuMTkyIDQ2MyA3MDMuMDAxIDQ2M0M3MjUuMTE0IDQ2My4wMDggNzQ3LjE5IDQ2MS4xODUgNzY5LjAwMSA0NTcuNTVWMFpcIlxyXG4gICAgICAgICAgICAgIGZpbGw9XCIjMEExMjMwXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFRoZW1lKHRoZW1lID09PSAnZGFyaycgPyAnbGlnaHQnIDogJ2RhcmsnKX1cclxuICAgICAgICAgICAgICBkPVwiTTU3NC44NDkgMjQ4LjgwOUM1NjcuOTY1IDI0OC44MTUgNTYxLjEzNSAyNDcuNTgyIDU1NC42ODcgMjQ1LjE3QzU1NC4zMTggMjQ1LjAzMiA1NTMuOTggMjQ0LjgyMiA1NTMuNjkyIDI0NC41NTNDNTUzLjQwNCAyNDQuMjg0IDU1My4xNzIgMjQzLjk2MSA1NTMuMDA5IDI0My42MDNDNTUyLjg0NiAyNDMuMjQ0IDU1Mi43NTUgMjQyLjg1NyA1NTIuNzQyIDI0Mi40NjNDNTUyLjcyOCAyNDIuMDcgNTUyLjc5MiAyNDEuNjc3IDU1Mi45MzEgMjQxLjMwOEM1NTMuMDY5IDI0MC45MzkgNTUzLjI3OCAyNDAuNjAxIDU1My41NDcgMjQwLjMxM0M1NTMuODE2IDI0MC4wMjUgNTU0LjEzOSAyMzkuNzkzIDU1NC40OTggMjM5LjYzQzU1NC44NTYgMjM5LjQ2NyA1NTUuMjQ0IDIzOS4zNzYgNTU1LjYzNyAyMzkuMzYzQzU1Ni4wMzEgMjM5LjM0OSA1NTYuNDI0IDIzOS40MTQgNTU2Ljc5MiAyMzkuNTUyQzU2NS4zNDEgMjQyLjcxMSA1NzQuNTY2IDI0My41ODYgNTgzLjU1NyAyNDIuMDlDNTkyLjU0NyAyNDAuNTk0IDYwMC45OTEgMjM2Ljc3OSA2MDguMDU2IDIzMS4wMjFDNTg2LjAxOCAyMzEuMjU1IDU2NC40NjEgMjIwLjg0IDU1My43MzcgMjA0LjEyOEM1NDYuODQyIDE5My4zODUgNTQ0LjU4OCAxODAuNzQ0IDU0Ny4yMTYgMTY3LjU3QzU0OS4yMjkgMTU4LjAxNyA1NTMuMzYgMTQ5LjAzNyA1NTkuMzA1IDE0MS4yOTNDNTQ3Ljk1NCAxNDQuOTA1IDUzOC4xODQgMTUyLjMwMiA1MzEuNjI4IDE2Mi4yNDhDNTI1LjA3MiAxNzIuMTkzIDUyMi4xMjYgMTg0LjA4NyA1MjMuMjgyIDE5NS45NDNDNTIzLjMyMiAxOTYuMzM2IDUyMy4yODQgMTk2LjczMyA1MjMuMTcxIDE5Ny4xMTFDNTIzLjA1NyAxOTcuNDg5IDUyMi44NzEgMTk3Ljg0MSA1MjIuNjIxIDE5OC4xNDdDNTIyLjM3MSAxOTguNDUzIDUyMi4wNjMgMTk4LjcwNiA1MjEuNzE1IDE5OC44OTNDNTIxLjM2NyAxOTkuMDggNTIwLjk4NiAxOTkuMTk2IDUyMC41OTMgMTk5LjIzNUM1MjAuMiAxOTkuMjc0IDUxOS44MDQgMTk5LjIzNSA1MTkuNDI2IDE5OS4xMkM1MTkuMDQ4IDE5OS4wMDUgNTE4LjY5NyAxOTguODE3IDUxOC4zOTIgMTk4LjU2NkM1MTguMDg3IDE5OC4zMTYgNTE3LjgzNCAxOTguMDA3IDUxNy42NDkgMTk3LjY1OEM1MTcuNDYzIDE5Ny4zMSA1MTcuMzQ5IDE5Ni45MjggNTE3LjMxMSAxOTYuNTM1QzUxNS44NTQgMTgxLjYxOSA1MjAuMjIzIDE2Ni43MTYgNTI5LjUwNCAxNTQuOTQ4QzUzOC43ODQgMTQzLjE4IDU1Mi4yNTggMTM1LjQ1NyA1NjcuMTAzIDEzMy4zOTdDNTY3LjcyNCAxMzMuMzExIDU2OC4zNTYgMTMzLjQyMSA1NjguOTExIDEzMy43MTNDNTY5LjQ2NiAxMzQuMDA0IDU2OS45MTUgMTM0LjQ2MiA1NzAuMTk3IDEzNS4wMjFDNTcwLjQ3OCAxMzUuNTgxIDU3MC41NzcgMTM2LjIxNSA1NzAuNDggMTM2LjgzNUM1NzAuMzgyIDEzNy40NTQgNTcwLjA5NCAxMzguMDI3IDU2OS42NTQgMTM4LjQ3M0M1NTQuMzEgMTU0LjA1OSA1NDQuOTk5IDE3OS40MDIgNTU4Ljc4NiAyMDAuODg4QzU2OS42NjQgMjE3LjgzNyA1OTMuMDY5IDIyNy41MzIgNjE1LjcxNCAyMjQuNDY4QzYxNi4zMjIgMjI0LjM4NiA2MTYuOTQgMjI0LjQ5MSA2MTcuNDg1IDIyNC43NzFDNjE4LjAzMSAyMjUuMDUxIDYxOC40NzggMjI1LjQ5MSA2MTguNzY1IDIyNi4wMzJDNjE5LjA1MyAyMjYuNTc0IDYxOS4xNjggMjI3LjE5IDYxOS4wOTUgMjI3Ljc5OUM2MTkuMDIyIDIyOC40MDcgNjE4Ljc2NCAyMjguOTc5IDYxOC4zNTYgMjI5LjQzNkM2MTIuODczIDIzNS41NDIgNjA2LjE2NCAyNDAuNDIyIDU5OC42NjcgMjQzLjc2QzU5MS4xNzEgMjQ3LjA5OCA1ODMuMDU1IDI0OC44MTggNTc0Ljg0OSAyNDguODA5VjI0OC44MDlaXCJcclxuICAgICAgICAgICAgICBmaWxsPVwiIzZDNjNGRlwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRUaGVtZSh0aGVtZSA9PT0gJ2RhcmsnID8gJ2xpZ2h0JyA6ICdkYXJrJyl9XHJcbiAgICAgICAgICAgICAgZD1cIk01MjcuMDAxIDI1MEM1MjIuNjUgMjUwIDUxOC4zOTcgMjQ4LjcxIDUxNC43NzkgMjQ2LjI5MkM1MTEuMTYxIDI0My44NzUgNTA4LjM0MSAyNDAuNDM5IDUwNi42NzYgMjM2LjQxOUM1MDUuMDExIDIzMi4zOTkgNTA0LjU3NSAyMjcuOTc2IDUwNS40MjQgMjIzLjcwOEM1MDYuMjczIDIxOS40NCA1MDguMzY4IDIxNS41MiA1MTEuNDQ1IDIxMi40NDRDNTE0LjUyMiAyMDkuMzY3IDUxOC40NDIgMjA3LjI3MiA1MjIuNzA5IDIwNi40MjNDNTI2Ljk3NyAyMDUuNTc0IDUzMS40MDEgMjA2LjAxIDUzNS40MjEgMjA3LjY3NUM1MzkuNDQxIDIwOS4zNCA1NDIuODc2IDIxMi4xNiA1NDUuMjk0IDIxNS43NzdDNTQ3LjcxMSAyMTkuMzk1IDU0OS4wMDEgMjIzLjY0OSA1NDkuMDAxIDIyOEM1NDguOTk1IDIzMy44MzMgNTQ2LjY3NSAyMzkuNDI1IDU0Mi41NTEgMjQzLjU0OUM1MzguNDI2IDI0Ny42NzMgNTMyLjgzNCAyNDkuOTkzIDUyNy4wMDEgMjUwVjI1MFpNNTI3LjAwMSAyMTJDNTIzLjgzNyAyMTIgNTIwLjc0NCAyMTIuOTM4IDUxOC4xMTIgMjE0LjY5N0M1MTUuNDgxIDIxNi40NTUgNTEzLjQzIDIxOC45NTMgNTEyLjIxOSAyMjEuODc3QzUxMS4wMDggMjI0LjgwMSA1MTAuNjkyIDIyOC4wMTggNTExLjMwOSAyMzEuMTIxQzUxMS45MjYgMjM0LjIyNSA1MTMuNDUgMjM3LjA3NiA1MTUuNjg4IDIzOS4zMTRDNTE3LjkyNSAyNDEuNTUxIDUyMC43NzYgMjQzLjA3NSA1MjMuODggMjQzLjY5M0M1MjYuOTg0IDI0NC4zMSA1MzAuMjAxIDI0My45OTMgNTMzLjEyNCAyNDIuNzgyQzUzNi4wNDggMjQxLjU3MSA1MzguNTQ3IDIzOS41MiA1NDAuMzA1IDIzNi44ODlDNTQyLjA2MyAyMzQuMjU4IDU0My4wMDEgMjMxLjE2NSA1NDMuMDAxIDIyOEM1NDIuOTk3IDIyMy43NTggNTQxLjMwOSAyMTkuNjkxIDUzOC4zMSAyMTYuNjkyQzUzNS4zMSAyMTMuNjkyIDUzMS4yNDMgMjEyLjAwNSA1MjcuMDAxIDIxMlYyMTJaXCJcclxuICAgICAgICAgICAgICBmaWxsPVwiIzZDNjNGRlwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxnIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19IG9uQ2xpY2s9eygpID0+IHNldFRoZW1lKHRoZW1lID09PSAnZGFyaycgPyAnbGlnaHQnIDogJ2RhcmsnKX0gcmVmPXttYW5SZWZ9PlxyXG4gICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICBkPVwiTTguNjkwNzQgNTY3LjA3OEM3LjI0NTQ2IDU2Ni44NTMgNS44NjUwNCA1NjYuMzIxIDQuNjQxODIgNTY1LjUxOEMzLjQxODYgNTY0LjcxNiAyLjM4MDc3IDU2My42NjIgMS41OTc3MSA1NjIuNDI3QzAuODE0NjUyIDU2MS4xOTEgMC4zMDQ0MjMgNTU5LjgwMiAwLjEwMTE1NyA1NTguMzU0Qy0wLjEwMjEwOSA1NTYuOTA1IDAuMDA2Mjc1MTIgNTU1LjQzIDAuNDE5MDQ0IDU1NC4wMjZMOC4yMDczNyA1MjcuNTQ2TDIwLjA0MiA1MjkuNzY1TDIwLjU1MDggNTU2LjczMkMyMC41NzkxIDU1OC4yMzIgMjAuMjc4OCA1NTkuNzE5IDE5LjY3MDkgNTYxLjA5MUMxOS4wNjMgNTYyLjQ2MiAxOC4xNjIzIDU2My42ODMgMTcuMDMyIDU2NC42NjlDMTUuOTAxNyA1NjUuNjU1IDE0LjU2OTMgNTY2LjM4MiAxMy4xMjgzIDU2Ni43OThDMTEuNjg3MyA1NjcuMjE0IDEwLjE3MjcgNTY3LjMxIDguNjkwNzQgNTY3LjA3OFY1NjcuMDc4WlwiXHJcbiAgICAgICAgICAgICAgICBmaWxsPVwiIzlGNjE2QVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgZD1cIk03Ni45OTYgNzM2LjEzMkw2Mi4yMDMgNzMzLjkxM0w2NS45MDEgNTg5LjY3OEw0NS4xOTEgNjUxLjgxTDM0LjA5NiA3MzkuMDkxTDIwLjA0MiA3MzUuMzkzTDE3LjA4MyA2NDQuNDE0TDMzLjM1NiA1MzcuMTYyTDExNC43MTkgNTU1LjY1NEw3Ni45OTYgNzM2LjEzMlpcIlxyXG4gICAgICAgICAgICAgICAgZmlsbD1cIiMwQTEyMzBcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIGQ9XCJNNzAuMjA0NiA3NzEuNjM2QzY3LjMyMDkgNzcxLjYzNiA2NC41NTUzIDc3MC40OTEgNjIuNTE2MyA3NjguNDUyQzYwLjQ3NzIgNzY2LjQxMyA1OS4zMzE3IDc2My42NDcgNTkuMzMxNyA3NjAuNzYzQzU5LjMzMTcgNzYwLjQwOCA1OS4zNDkxIDc2MC4wNTMgNTkuMzgzOSA3NTkuNjk5TDYxLjY4MTEgNzM2LjM0NUM2MS43MzY1IDczNS43ODcgNjEuOTI4MSA3MzUuMjUxIDYyLjIzOTEgNzM0Ljc4NEM2Mi41NTAxIDczNC4zMTcgNjIuOTcwOSA3MzMuOTMzIDYzLjQ2NDcgNzMzLjY2N0M2Ny44MjU0IDczMS4zMTUgNzIuMzA5NiA3MzEuODg1IDc2Ljg5OTQgNzM0Ljk1NUM3Ny4zMDY2IDczNS4yMjkgNzcuNjQ5NyA3MzUuNTg4IDc3LjkwNTIgNzM2LjAwN0M3OC4xNjA3IDczNi40MjcgNzguMzIyNiA3MzYuODk2IDc4LjM3OTkgNzM3LjM4NEw4MS4wMDE3IDc1OS40ODJDODEuMTgyNyA3NjEuMDA4IDgxLjAzODUgNzYyLjU1NCA4MC41Nzg1IDc2NC4wMkM4MC4xMTg1IDc2NS40ODUgNzkuMzUzMyA3NjYuODM2IDc4LjMzMzIgNzY3Ljk4NUM3Ny4zMTMxIDc2OS4xMzMgNzYuMDYxMyA3NzAuMDUyIDc0LjY2MDIgNzcwLjY4MkM3My4yNTkxIDc3MS4zMTEgNzEuNzQwNiA3NzEuNjM2IDcwLjIwNDYgNzcxLjYzNkg3MC4yMDQ2WlwiXHJcbiAgICAgICAgICAgICAgICBmaWxsPVwiIzBBMTIzMFwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgZD1cIk05LjgyMDg0IDc2OS44OThDOC40MjY3NSA3NjkuMzg3IDcuMTY3MTQgNzY4LjU2NSA2LjEzNzI2IDc2Ny40OTZDNS4xMDczOCA3NjYuNDI2IDQuMzM0MTkgNzY1LjEzNiAzLjg3NjE2IDc2My43MjRDMy40MTgxNCA3NjIuMzExIDMuMjg3MjcgNzYwLjgxMyAzLjQ5MzQ0IDc1OS4zNDNDMy42OTk2MiA3NTcuODcyIDQuMjM3NDUgNzU2LjQ2OCA1LjA2NjI2IDc1NS4yMzZMMjAuODQ2MyA3MzEuNzc5QzI2LjUzNDggNzI3LjY5NyAyOS45NjU3IDcyOS42ODUgMzEuMjk5NSA3MzcuMzEzTDM0LjQ4OTggNzI5LjMyTDM2Ljg5MzYgNzMxLjk0MkMzOC4xMTMzIDczMy4yNzMgMzguODIzIDczNC45OTIgMzguODk3MSA3MzYuNzk1QzM4Ljk3MTIgNzM4LjU5OSAzOC40MDQ5IDc0MC4zNyAzNy4yOTg0IDc0MS43OTZMMjAuOTMwNCA3NjYuNzA2QzE5LjY1NjcgNzY4LjM0OCAxNy44OTM4IDc2OS41NDIgMTUuODk2NyA3NzAuMTE2QzEzLjg5OTYgNzcwLjY4OSAxMS43NzE3IDc3MC42MTMgOS44MjA4NCA3NjkuODk4Vjc2OS44OThaXCJcclxuICAgICAgICAgICAgICAgIGZpbGw9XCIjMEExMjMwXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICBkPVwiTTEwOS41NDIgMzk4LjEwNUMxMjEuNzk3IDM5OC4xMDUgMTMxLjczMiAzODguMTcgMTMxLjczMiAzNzUuOTE1QzEzMS43MzIgMzYzLjY1OSAxMjEuNzk3IDM1My43MjUgMTA5LjU0MiAzNTMuNzI1Qzk3LjI4NjUgMzUzLjcyNSA4Ny4zNTE3IDM2My42NTkgODcuMzUxNyAzNzUuOTE1Qzg3LjM1MTcgMzg4LjE3IDk3LjI4NjUgMzk4LjEwNSAxMDkuNTQyIDM5OC4xMDVaXCJcclxuICAgICAgICAgICAgICAgIGZpbGw9XCIjOUY2MTZBXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICBkPVwiTTEyMy41OTUgNDE2LjU5Nkw4NS44NzIzIDQwOS4yQzkwLjczMTMgMzk4LjgzNiA5NC42MjI1IDM5NS4zMyA5MC4zMTAzIDM4NC4wNTFIMTIwLjYzN0MxMTcuOTYyIDM5NS43MzMgMTIwLjU0NyA0MDYuNjk4IDEyMy41OTUgNDE2LjU5NlpcIlxyXG4gICAgICAgICAgICAgICAgZmlsbD1cIiM5RjYxNkFcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIGQ9XCJNMTE5LjE1NyA1NjYuMDA5TDMwLjM5NzMgNTQwLjg2QzQ4LjE3NjEgNTAxLjczMSA1MS45IDQ1OC43NjkgNDYuNjI4NyA0MTMuMzU2QzQ2LjUwMzQgNDEyLjI4NSA0Ni41OTA0IDQxMS4xOTkgNDYuODg0NyA0MTAuMTZDNDcuMTc5MSA0MDkuMTIyIDQ3LjY3NTEgNDA4LjE1MiA0OC4zNDQzIDQwNy4zMDZDNDkuMDEzNSA0MDYuNDU5IDQ5Ljg0MyA0MDUuNzUzIDUwLjc4NTIgNDA1LjIyN0M1MS43Mjc1IDQwNC43MDEgNTIuNzY0MSA0MDQuMzY2IDUzLjgzNTkgNDA0LjI0QzUzLjkzNTcgNDA0LjIyOSA1NC4wMzU2IDQwNC4yMTkgNTQuMTM1OCA0MDQuMjExQzY1LjcxMzcgNDAzLjI1NyA3Ny43ODQ0IDQwMi4wMzMgOTAuMzEwNCA0MDAuMzI0TDEwNC4zNjQgNDA5LjkzOUwxMjAuNjM3IDQwNi4yNDFDMTI1Ljg1OCA0MDguNzcyIDEzMS4xMTggNDEwLjg3NyAxMzUuODY0IDQxMi45NzVDMTQwLjE5MSA0MTQuODkzIDE0My42NDkgNDE4LjM1NCAxNDUuNTYzIDQyMi42ODNDMTQ3LjQ3NiA0MjcuMDEyIDE0Ny43MDkgNDMxLjg5OCAxNDYuMjE1IDQzNi4zODlDMTMxLjc1MiA0ODAuMDY2IDEyMi4wNzEgNTIzLjMyOSAxMTkuMTU3IDU2Ni4wMDlaXCJcclxuICAgICAgICAgICAgICAgIGZpbGw9XCIjRTZFNkU2XCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICBkPVwiTTIyLjI2MSA1MzIuNzI0TDUuMjQ4NjYgNTMwLjUwNUw0NS41NTA4IDQxNC4zOEM0Ny42MDA4IDQwOC40NzMgNTIuNjg0OCA0MDUuMjc2IDU4Ljg3NDUgNDA0LjM5Mkw2NC43OTE4IDQwNS4xMzFMNjAuMzUzOCA0NzMuOTJMMjIuMjYxIDUzMi43MjRaXCJcclxuICAgICAgICAgICAgICAgIGZpbGw9XCIjRTZFNkU2XCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICBkPVwiTTE1NS41MjUgNTEwLjUyNEMxNTIuNjkyIDUxMC43NDIgMTQ5Ljg2MyA1MTAuMDYgMTQ3LjQ0MSA1MDguNTc0QzE0NS4wMTkgNTA3LjA4OSAxNDMuMTI4IDUwNC44NzcgMTQyLjAzOCA1MDIuMjUzTDEyNS44MTQgNDYzLjE5NUwxMzkuMTI4IDQxNS4xMTdMMTQyLjY0OCA0MTcuMzU3QzE0Mi45ODcgNDE3LjU3MiAxNDMuMzIyIDQxNy43OTQgMTQzLjY1MiA0MTguMDJDMTQ4LjU5MyA0MjEuNDgxIDE1Mi40NDIgNDI2LjI4MyAxNTQuNzQ2IDQzMS44NThDMTU3LjA0OSA0MzcuNDM0IDE1Ny43MTEgNDQzLjU1MiAxNTYuNjU0IDQ0OS40OTFMMTUzLjE4MiA0NjkuODUyTDE2Ny41MDUgNTAwLjYwNUMxNjYuNzc3IDUwMy4yOTQgMTY1LjIzNSA1MDUuNjkgMTYzLjA4OSA1MDcuNDY2QzE2MC45NDQgNTA5LjI0MyAxNTguMzAyIDUxMC4zMTEgMTU1LjUyNSA1MTAuNTI0VjUxMC41MjRaXCJcclxuICAgICAgICAgICAgICAgIGZpbGw9XCIjRTZFNkU2XCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICBkPVwiTTExMS4yNDggMzQzLjAyN0MxMTUuMDQgMzQzLjIwMSAxMTguNzMzIDM0NC4yODggMTIyLjAxNCAzNDYuMTk2QzEyMi43NjkgMzQ2LjYzNiAxMjIuNDIgMzQ4LjIxOSAxMjMuMTE3IDM0OC43MzZDMTIzLjk5NSAzNDkuMzg2IDEyNS45MDIgMzQ4Ljk5MSAxMjYuNjggMzQ5Ljc1M0MxMjkuMTkgMzUyLjIwMyAxMzEuMTIzIDM1NS4xODIgMTMyLjMzOCAzNTguNDc0QzEzMy41NTIgMzYxLjc2NSAxMzQuMDE4IDM2NS4yODUgMTMzLjcwMiAzNjguNzc5TDEzMi40NjQgMzgxLjA5TDEyOS41NDMgMzc3Ljg5NkMxMjQuMzA2IDM3Mi4wODkgMTE3LjAzNSAzNjguNTE5IDEwOS4yMzggMzY3LjkyN0MxMDguOTA2IDM2Ny45MDQgMTA4LjU3NCAzNjcuODg3IDEwOC4yNDIgMzY3Ljg3NEwxMTAuNDg5IDM2My45NDFMMTA2LjU4NCAzNjcuODQ3QzEwNC44MDIgMzY3Ljg2NiAxMDMuMDI0IDM2OC4wMTEgMTAxLjI2MyAzNjguMjhMMTA0LjI1MSAzNjMuMDVMOTguNTE3MSAzNjguNzg0TDk4LjUxNjYgMzY4Ljc4NUM5Ni4xNzE2IDM2OS4zIDkzLjk4MDUgMzcwLjM2IDkyLjExOTggMzcxLjg3N0M5MC4yNTkxIDM3My4zOTUgODguNzgwOCAzNzUuMzI4IDg3LjgwNDIgMzc3LjUyMkw4Ny4xNjc1IDM3OC45MzNMODYuNDU0MiAzNjcuMTg4Qzg2LjMxNzcgMzYwLjkxMSA4OC42ODA1IDM1NC44MzcgOTMuMDIyNiAzNTAuMzAyQzk3LjM2NDcgMzQ1Ljc2NyAxMDMuMzMxIDM0My4xNDIgMTA5LjYwOCAzNDMuMDA2QzExMC4xNTUgMzQyLjk5NCAxMTAuNzAyIDM0My4wMDEgMTExLjI0OCAzNDMuMDI3WlwiXHJcbiAgICAgICAgICAgICAgICBmaWxsPVwiIzJGMkU0MVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgZD1cIk0xMzEuODc3IDM4NC40MzhDMTMyLjg2MSAzODQuNDM4IDEzMy42NTkgMzgyLjU0MyAxMzMuNjU5IDM4MC4yMDVDMTMzLjY1OSAzNzcuODY3IDEzMi44NjEgMzc1Ljk3MiAxMzEuODc3IDM3NS45NzJDMTMwLjg5MiAzNzUuOTcyIDEzMC4wOTQgMzc3Ljg2NyAxMzAuMDk0IDM4MC4yMDVDMTMwLjA5NCAzODIuNTQzIDEzMC44OTIgMzg0LjQzOCAxMzEuODc3IDM4NC40MzhaXCJcclxuICAgICAgICAgICAgICAgIGZpbGw9XCIjOUY2MTZBXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICBkPVwiTTg3LjMxOTUgMzgzLjEwMUM4OC4zMDM4IDM4My4xMDEgODkuMTAxNyAzODEuMjA2IDg5LjEwMTcgMzc4Ljg2OEM4OS4xMDE3IDM3Ni41MyA4OC4zMDM4IDM3NC42MzUgODcuMzE5NSAzNzQuNjM1Qzg2LjMzNTEgMzc0LjYzNSA4NS41MzcyIDM3Ni41MyA4NS41MzcyIDM3OC44NjhDODUuNTM3MiAzODEuMjA2IDg2LjMzNTEgMzgzLjEwMSA4Ny4zMTk1IDM4My4xMDFaXCJcclxuICAgICAgICAgICAgICAgIGZpbGw9XCIjOUY2MTZBXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICBkPVwiTTE3NC4wMzQgNDM1LjQxOUMxNzUuNDU1IDQzNS43NjcgMTc2Ljc4NSA0MzYuNDE0IDE3Ny45MzYgNDM3LjMxN0MxNzkuMDg2IDQzOC4yMiAxODAuMDMxIDQzOS4zNTkgMTgwLjcwNiA0NDAuNjU2QzE4MS4zODIgNDQxLjk1NCAxODEuNzcyIDQ0My4zODEgMTgxLjg1MiA0NDQuODQxQzE4MS45MzEgNDQ2LjMwMiAxODEuNjk4IDQ0Ny43NjMgMTgxLjE2OCA0NDkuMTI2TDE3MS4xNiA0NzQuODVMMTU5LjU1NiA0NzEuNjM0TDE2MS4zMzggNDQ0LjcyMUMxNjEuNDM3IDQ0My4yMjUgMTYxLjg2MyA0NDEuNzY4IDE2Mi41ODUgNDQwLjQ1M0MxNjMuMzA3IDQzOS4xMzkgMTY0LjMwOCA0MzcuOTk4IDE2NS41MTggNDM3LjExMUMxNjYuNzI4IDQzNi4yMjUgMTY4LjExNyA0MzUuNjE0IDE2OS41ODggNDM1LjMyMkMxNzEuMDU5IDQzNS4wMjkgMTcyLjU3NyA0MzUuMDYzIDE3NC4wMzQgNDM1LjQxOUgxNzQuMDM0WlwiXHJcbiAgICAgICAgICAgICAgICBmaWxsPVwiIzlGNjE2QVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE2MC41NzkgNTA5LjA1NUwxNDIuMDg3IDQ5Ny4yMkwxNTcuNjIgNDY1LjQxNEwxNzYuODUxIDQ3Mi44MTFMMTY3LjIzNiA1MDAuOTE4TDE2MC41NzkgNTA5LjA1NVpcIiBmaWxsPVwiI0U2RTZFNlwiIC8+XHJcbiAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIGQ9XCJNMTczLjAwMSA0MDkuMTAxVjI4NEgxNzEuMDAxVjQwOS4xMDFDMTY5Ljc4NyA0MDkuMzQ5IDE2OC43MDkgNDEwLjAzOSAxNjcuOTc0IDQxMS4wMzdDMTY3LjI0IDQxMi4wMzUgMTY2LjkwMiA0MTMuMjcgMTY3LjAyNyA0MTQuNTAzQzE2Ny4xNTEgNDE1LjczNSAxNjcuNzI5IDQxNi44NzggMTY4LjY0OCA0MTcuNzA5QzE2OS41NjcgNDE4LjU0IDE3MC43NjIgNDE5IDE3Mi4wMDEgNDE5QzE3My4yNDEgNDE5IDE3NC40MzUgNDE4LjU0IDE3NS4zNTUgNDE3LjcwOUMxNzYuMjc0IDQxNi44NzggMTc2Ljg1MiA0MTUuNzM1IDE3Ni45NzYgNDE0LjUwM0MxNzcuMTAxIDQxMy4yNyAxNzYuNzYzIDQxMi4wMzUgMTc2LjAyOSA0MTEuMDM3QzE3NS4yOTQgNDEwLjAzOSAxNzQuMjE2IDQwOS4zNDkgMTczLjAwMSA0MDkuMTAxVjQwOS4xMDFaTTE3Mi4wMDEgNDE3QzE3MS40MDggNDE3IDE3MC44MjggNDE2LjgyNCAxNzAuMzM1IDQxNi40OTRDMTY5Ljg0MSA0MTYuMTY1IDE2OS40NTcgNDE1LjY5NiAxNjkuMjMgNDE1LjE0OEMxNjkuMDAzIDQxNC42IDE2OC45NDMgNDEzLjk5NyAxNjkuMDU5IDQxMy40MTVDMTY5LjE3NSA0MTIuODMzIDE2OS40NjEgNDEyLjI5OCAxNjkuODggNDExLjg3OUMxNzAuMyA0MTEuNDU5IDE3MC44MzQgNDExLjE3MyAxNzEuNDE2IDQxMS4wNThDMTcxLjk5OCA0MTAuOTQyIDE3Mi42MDEgNDExLjAwMSAxNzMuMTUgNDExLjIyOEMxNzMuNjk4IDQxMS40NTUgMTc0LjE2NiA0MTEuODQgMTc0LjQ5NiA0MTIuMzMzQzE3NC44MjYgNDEyLjgyNyAxNzUuMDAxIDQxMy40MDcgMTc1LjAwMSA0MTRDMTc1LjAwMSA0MTQuNzk1IDE3NC42ODQgNDE1LjU1OCAxNzQuMTIyIDQxNi4xMkMxNzMuNTU5IDQxNi42ODMgMTcyLjc5NyA0MTYuOTk5IDE3Mi4wMDEgNDE3VjQxN1pcIlxyXG4gICAgICAgICAgICAgICAgZmlsbD1cIiMwQTEyMzBcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIGQ9XCJNMTcwLjQzNSAxNjQuNTY5QzE2OS4yOSAxNjQuNTY5IDE2OC4xOTMgMTY0LjExNSAxNjcuMzg0IDE2My4zMDZDMTY2LjU3NSAxNjIuNDk3IDE2Ni4xMjEgMTYxLjM5OSAxNjYuMTIxIDE2MC4yNTVWMTQ3LjMxNEMxNjYuMTIyIDE0Ni4xNzEgMTY2LjU3OCAxNDUuMDc1IDE2Ny4zODcgMTQ0LjI2OEMxNjguMTk1IDE0My40NiAxNjkuMjkyIDE0My4wMDcgMTcwLjQzNSAxNDMuMDA3QzE3MS41NzggMTQzLjAwNyAxNzIuNjc0IDE0My40NiAxNzMuNDgzIDE0NC4yNjhDMTc0LjI5MSAxNDUuMDc1IDE3NC43NDcgMTQ2LjE3MSAxNzQuNzQ4IDE0Ny4zMTRWMTYwLjI1NUMxNzQuNzQ4IDE2MC44MjIgMTc0LjYzNyAxNjEuMzgzIDE3NC40MiAxNjEuOTA2QzE3NC4yMDMgMTYyLjQzIDE3My44ODUgMTYyLjkwNSAxNzMuNDg1IDE2My4zMDZDMTczLjA4NCAxNjMuNzA2IDE3Mi42MDkgMTY0LjAyNCAxNzIuMDg1IDE2NC4yNDFDMTcxLjU2MiAxNjQuNDU4IDE3MS4wMDEgMTY0LjU2OSAxNzAuNDM1IDE2NC41NjlWMTY0LjU2OVpcIlxyXG4gICAgICAgICAgICAgICAgZmlsbD1cIiM2QzYzRkZcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIGQ9XCJNMTcwLjQzNSAyNjMuNzg3QzE2OS44NjggMjYzLjc4NyAxNjkuMzA3IDI2My42NzYgMTY4Ljc4NCAyNjMuNDU5QzE2OC4yNiAyNjMuMjQyIDE2Ny43ODUgMjYyLjkyNSAxNjcuMzg0IDI2Mi41MjRDMTY2Ljk4NCAyNjIuMTIzIDE2Ni42NjYgMjYxLjY0OCAxNjYuNDQ5IDI2MS4xMjRDMTY2LjIzMiAyNjAuNjAxIDE2Ni4xMjEgMjYwLjA0IDE2Ni4xMjEgMjU5LjQ3NFYyNDYuNTMyQzE2Ni4xMiAyNDUuOTY1IDE2Ni4yMzEgMjQ1LjQwMyAxNjYuNDQ3IDI0NC44NzlDMTY2LjY2NCAyNDQuMzU1IDE2Ni45ODEgMjQzLjg3OSAxNjcuMzgyIDI0My40NzdDMTY3Ljc4MyAyNDMuMDc2IDE2OC4yNTggMjQyLjc1OCAxNjguNzgyIDI0Mi41NDFDMTY5LjMwNiAyNDIuMzIzIDE2OS44NjcgMjQyLjIxMiAxNzAuNDM1IDI0Mi4yMTJDMTcxLjAwMiAyNDIuMjEyIDE3MS41NjMgMjQyLjMyMyAxNzIuMDg3IDI0Mi41NDFDMTcyLjYxMSAyNDIuNzU4IDE3My4wODcgMjQzLjA3NiAxNzMuNDg3IDI0My40NzdDMTczLjg4OCAyNDMuODc5IDE3NC4yMDYgMjQ0LjM1NSAxNzQuNDIyIDI0NC44NzlDMTc0LjYzOCAyNDUuNDAzIDE3NC43NDkgMjQ1Ljk2NSAxNzQuNzQ4IDI0Ni41MzJWMjU5LjQ3NEMxNzQuNzQ4IDI2MC4wNCAxNzQuNjM3IDI2MC42MDEgMTc0LjQyIDI2MS4xMjRDMTc0LjIwMyAyNjEuNjQ4IDE3My44ODYgMjYyLjEyMyAxNzMuNDg1IDI2Mi41MjRDMTczLjA4NCAyNjIuOTI1IDE3Mi42MDkgMjYzLjI0MiAxNzIuMDg1IDI2My40NTlDMTcxLjU2MiAyNjMuNjc2IDE3MS4wMDEgMjYzLjc4NyAxNzAuNDM1IDI2My43ODdWMjYzLjc4N1pcIlxyXG4gICAgICAgICAgICAgICAgZmlsbD1cIiM2QzYzRkZcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIGQ9XCJNMjAwLjkzOSAxNzcuMjAzQzIwMC4wODUgMTc3LjIwMyAxOTkuMjUxIDE3Ni45NSAxOTguNTQyIDE3Ni40NzZDMTk3LjgzMyAxNzYuMDAyIDE5Ny4yOCAxNzUuMzI4IDE5Ni45NTMgMTc0LjU0QzE5Ni42MjcgMTczLjc1MiAxOTYuNTQxIDE3Mi44ODUgMTk2LjcwOCAxNzIuMDQ4QzE5Ni44NzQgMTcxLjIxMSAxOTcuMjg1IDE3MC40NDIgMTk3Ljg4OCAxNjkuODM5TDIwNy4wMzkgMTYwLjY4OEMyMDcuODQ4IDE1OS44OCAyMDguOTQ1IDE1OS40MjYgMjEwLjA4OSAxNTkuNDI3QzIxMS4yMzMgMTU5LjQyNyAyMTIuMzI5IDE1OS44ODIgMjEzLjEzOCAxNjAuNjlDMjEzLjk0NyAxNjEuNDk5IDIxNC40MDEgMTYyLjU5NiAyMTQuNDAyIDE2My43MzlDMjE0LjQwMiAxNjQuODgzIDIxMy45NDggMTY1Ljk4IDIxMy4xNCAxNjYuNzg5TDIwMy45ODkgMTc1Ljk0QzIwMy41ODkgMTc2LjM0MSAyMDMuMTEzIDE3Ni42NTkgMjAyLjU5IDE3Ni44NzZDMjAyLjA2NiAxNzcuMDkzIDIwMS41MDUgMTc3LjIwNCAyMDAuOTM5IDE3Ny4yMDNWMTc3LjIwM1pcIlxyXG4gICAgICAgICAgICAgICAgZmlsbD1cIiM2QzYzRkZcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIGQ9XCJNMTMwLjc4IDI0Ny4zNjJDMTI5LjkyNiAyNDcuMzYyIDEyOS4wOTIgMjQ3LjEwOSAxMjguMzgzIDI0Ni42MzVDMTI3LjY3NCAyNDYuMTYxIDEyNy4xMjEgMjQ1LjQ4OCAxMjYuNzk0IDI0NC42OTlDMTI2LjQ2OCAyNDMuOTExIDEyNi4zODIgMjQzLjA0NCAxMjYuNTQ5IDI0Mi4yMDdDMTI2LjcxNSAyNDEuMzcgMTI3LjEyNiAyNDAuNjAyIDEyNy43MjkgMjM5Ljk5OEwxMzYuODggMjMwLjg0OEMxMzcuNjg5IDIzMC4wMzkgMTM4Ljc4NiAyMjkuNTg0IDEzOS45MyAyMjkuNTg0QzE0MS4wNzQgMjI5LjU4NCAxNDIuMTcyIDIzMC4wMzggMTQyLjk4MSAyMzAuODQ3QzE0My43OSAyMzEuNjU2IDE0NC4yNDQgMjMyLjc1NCAxNDQuMjQ0IDIzMy44OThDMTQ0LjI0NCAyMzUuMDQyIDE0My43OSAyMzYuMTM5IDE0Mi45ODEgMjM2Ljk0OEwxMzMuODMgMjQ2LjA5OUMxMzMuNDMgMjQ2LjUgMTMyLjk1NCAyNDYuODE4IDEzMi40MzEgMjQ3LjAzNUMxMzEuOTA3IDI0Ny4yNTIgMTMxLjM0NiAyNDcuMzYzIDEzMC43OCAyNDcuMzYyVjI0Ny4zNjJaXCJcclxuICAgICAgICAgICAgICAgIGZpbGw9XCIjNkM2M0ZGXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICBkPVwiTTIyNi41MTQgMjA3LjcwOEgyMTMuNTczQzIxMi40MyAyMDcuNzA2IDIxMS4zMzQgMjA3LjI1MSAyMTAuNTI3IDIwNi40NDJDMjA5LjcxOSAyMDUuNjMzIDIwOS4yNjYgMjA0LjUzNyAyMDkuMjY2IDIwMy4zOTRDMjA5LjI2NiAyMDIuMjUxIDIwOS43MTkgMjAxLjE1NCAyMTAuNTI3IDIwMC4zNDZDMjExLjMzNCAxOTkuNTM3IDIxMi40MyAxOTkuMDgyIDIxMy41NzMgMTk5LjA4SDIyNi41MTRDMjI3LjA4MSAxOTkuMDc5IDIyNy42NDMgMTk5LjE5IDIyOC4xNjcgMTk5LjQwNkMyMjguNjkxIDE5OS42MjMgMjI5LjE2OCAxOTkuOTQgMjI5LjU2OSAyMDAuMzQxQzIyOS45NyAyMDAuNzQyIDIzMC4yODkgMjAxLjIxOCAyMzAuNTA2IDIwMS43NDFDMjMwLjcyMyAyMDIuMjY1IDIzMC44MzUgMjAyLjgyNyAyMzAuODM1IDIwMy4zOTRDMjMwLjgzNSAyMDMuOTYxIDIzMC43MjMgMjA0LjUyMiAyMzAuNTA2IDIwNS4wNDZDMjMwLjI4OSAyMDUuNTcgMjI5Ljk3IDIwNi4wNDYgMjI5LjU2OSAyMDYuNDQ2QzIyOS4xNjggMjA2Ljg0NyAyMjguNjkxIDIwNy4xNjUgMjI4LjE2NyAyMDcuMzgxQzIyNy42NDMgMjA3LjU5NyAyMjcuMDgxIDIwNy43MDggMjI2LjUxNCAyMDcuNzA4VjIwNy43MDhaXCJcclxuICAgICAgICAgICAgICAgIGZpbGw9XCIjNkM2M0ZGXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICBkPVwiTTEyNy4yOTYgMjA3LjcwOEgxMTQuMzU1QzExMy43ODggMjA3LjcwOCAxMTMuMjI2IDIwNy41OTcgMTEyLjcwMiAyMDcuMzgxQzExMi4xNzggMjA3LjE2NSAxMTEuNzAxIDIwNi44NDcgMTExLjMgMjA2LjQ0NkMxMTAuODk5IDIwNi4wNDYgMTEwLjU4MSAyMDUuNTcgMTEwLjM2MyAyMDUuMDQ2QzExMC4xNDYgMjA0LjUyMiAxMTAuMDM0IDIwMy45NjEgMTEwLjAzNCAyMDMuMzk0QzExMC4wMzQgMjAyLjgyNyAxMTAuMTQ2IDIwMi4yNjUgMTEwLjM2MyAyMDEuNzQxQzExMC41ODEgMjAxLjIxOCAxMTAuODk5IDIwMC43NDIgMTExLjMgMjAwLjM0MUMxMTEuNzAxIDE5OS45NCAxMTIuMTc4IDE5OS42MjMgMTEyLjcwMiAxOTkuNDA2QzExMy4yMjYgMTk5LjE5IDExMy43ODggMTk5LjA3OSAxMTQuMzU1IDE5OS4wOEgxMjcuMjk2QzEyOC40MzkgMTk5LjA4MiAxMjkuNTM1IDE5OS41MzcgMTMwLjM0MiAyMDAuMzQ2QzEzMS4xNSAyMDEuMTU0IDEzMS42MDQgMjAyLjI1MSAxMzEuNjA0IDIwMy4zOTRDMTMxLjYwNCAyMDQuNTM3IDEzMS4xNSAyMDUuNjMzIDEzMC4zNDIgMjA2LjQ0MkMxMjkuNTM1IDIwNy4yNTEgMTI4LjQzOSAyMDcuNzA2IDEyNy4yOTYgMjA3LjcwOEgxMjcuMjk2WlwiXHJcbiAgICAgICAgICAgICAgICBmaWxsPVwiIzZDNjNGRlwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgZD1cIk0yMTAuMDkgMjQ3LjM2MkMyMDkuNTIzIDI0Ny4zNjMgMjA4Ljk2MiAyNDcuMjUyIDIwOC40MzggMjQ3LjAzNUMyMDcuOTE1IDI0Ni44MTggMjA3LjQzOSAyNDYuNSAyMDcuMDM5IDI0Ni4wOTlMMTk3Ljg4OCAyMzYuOTQ4QzE5Ny40ODcgMjM2LjU0OCAxOTcuMTY5IDIzNi4wNzIgMTk2Ljk1MSAyMzUuNTQ5QzE5Ni43MzQgMjM1LjAyNSAxOTYuNjIyIDIzNC40NjQgMTk2LjYyMiAyMzMuODk3QzE5Ni42MjEgMjMzLjMzIDE5Ni43MzMgMjMyLjc2OSAxOTYuOTQ5IDIzMi4yNDVDMTk3LjE2NiAyMzEuNzIxIDE5Ny40ODQgMjMxLjI0NSAxOTcuODg1IDIzMC44NDRDMTk4LjI4NiAyMzAuNDQzIDE5OC43NjIgMjMwLjEyNSAxOTkuMjg2IDIyOS45MDlDMTk5LjgwOSAyMjkuNjkyIDIwMC4zNzEgMjI5LjU4IDIwMC45MzggMjI5LjU4MUMyMDEuNTA1IDIyOS41ODEgMjAyLjA2NiAyMjkuNjkzIDIwMi41ODkgMjI5LjkxQzIwMy4xMTMgMjMwLjEyOCAyMDMuNTg5IDIzMC40NDYgMjAzLjk4OSAyMzAuODQ4TDIxMy4xNCAyMzkuOTk4QzIxMy43NDMgMjQwLjYwMiAyMTQuMTU0IDI0MS4zNyAyMTQuMzIgMjQyLjIwN0MyMTQuNDg3IDI0My4wNDQgMjE0LjQwMSAyNDMuOTExIDIxNC4wNzUgMjQ0LjdDMjEzLjc0OCAyNDUuNDg4IDIxMy4xOTUgMjQ2LjE2MSAyMTIuNDg2IDI0Ni42MzVDMjExLjc3NyAyNDcuMTEgMjEwLjk0MyAyNDcuMzYzIDIxMC4wOSAyNDcuMzYzVjI0Ny4zNjJaXCJcclxuICAgICAgICAgICAgICAgIGZpbGw9XCIjNkM2M0ZGXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICBkPVwiTTEzOS45MyAxNzcuMjAzQzEzOS4zNjQgMTc3LjIwNCAxMzguODAzIDE3Ny4wOTMgMTM4LjI3OSAxNzYuODc2QzEzNy43NTYgMTc2LjY1OSAxMzcuMjggMTc2LjM0MSAxMzYuODggMTc1Ljk0TDEyNy43MjkgMTY2Ljc4OUMxMjcuMzI5IDE2Ni4zODkgMTI3LjAxMSAxNjUuOTEzIDEyNi43OTQgMTY1LjM5QzEyNi41NzcgMTY0Ljg2NiAxMjYuNDY2IDE2NC4zMDUgMTI2LjQ2NiAxNjMuNzM5QzEyNi40NjYgMTYzLjE3MiAxMjYuNTc3IDE2Mi42MTEgMTI2Ljc5NCAxNjIuMDg4QzEyNy4wMTEgMTYxLjU2NCAxMjcuMzI5IDE2MS4wODkgMTI3LjcyOSAxNjAuNjg4QzEyOC4xMyAxNjAuMjg4IDEyOC42MDUgMTU5Ljk3IDEyOS4xMjkgMTU5Ljc1M0MxMjkuNjUyIDE1OS41MzYgMTMwLjIxMyAxNTkuNDI1IDEzMC43OCAxNTkuNDI1QzEzMS4zNDYgMTU5LjQyNSAxMzEuOTA3IDE1OS41MzYgMTMyLjQzIDE1OS43NTNDMTMyLjk1NCAxNTkuOTcgMTMzLjQyOSAxNjAuMjg4IDEzMy44MyAxNjAuNjg4TDE0Mi45ODEgMTY5LjgzOUMxNDMuNTg0IDE3MC40NDIgMTQzLjk5NSAxNzEuMjExIDE0NC4xNjEgMTcyLjA0OEMxNDQuMzI4IDE3Mi44ODUgMTQ0LjI0MiAxNzMuNzUyIDE0My45MTYgMTc0LjU0QzE0My41ODkgMTc1LjMyOSAxNDMuMDM2IDE3Ni4wMDIgMTQyLjMyNyAxNzYuNDc2QzE0MS42MTcgMTc2Ljk1IDE0MC43ODMgMTc3LjIwMyAxMzkuOTMgMTc3LjIwM1YxNzcuMjAzWlwiXHJcbiAgICAgICAgICAgICAgICBmaWxsPVwiIzZDNjNGRlwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgZD1cIk0xNzAuNDM1IDIyOS4yNzdDMTY1LjMxNSAyMjkuMjc3IDE2MC4zMTEgMjI3Ljc1OSAxNTYuMDU1IDIyNC45MTVDMTUxLjc5OCAyMjIuMDcxIDE0OC40ODEgMjE4LjAyOCAxNDYuNTIyIDIxMy4yOTlDMTQ0LjU2MyAyMDguNTY5IDE0NC4wNSAyMDMuMzY1IDE0NS4wNDkgMTk4LjM0NEMxNDYuMDQ4IDE5My4zMjMgMTQ4LjUxMyAxODguNzExIDE1Mi4xMzMgMTg1LjA5MkMxNTUuNzUyIDE4MS40NzIgMTYwLjM2NCAxNzkuMDA3IDE2NS4zODUgMTc4LjAwOEMxNzAuNDA2IDE3Ny4wMDkgMTc1LjYxIDE3Ny41MjIgMTgwLjM0IDE3OS40ODFDMTg1LjA2OSAxODEuNDQgMTg5LjExMSAxODQuNzU3IDE5MS45NTUgMTg5LjAxNEMxOTQuOCAxOTMuMjcgMTk2LjMxOCAxOTguMjc1IDE5Ni4zMTggMjAzLjM5NEMxOTYuMzEgMjEwLjI1NiAxOTMuNTggMjE2LjgzNSAxODguNzI4IDIyMS42ODdDMTgzLjg3NiAyMjYuNTQgMTc3LjI5NyAyMjkuMjY5IDE3MC40MzUgMjI5LjI3N1YyMjkuMjc3Wk0xNzAuNDM1IDE4Ni4xMzhDMTY3LjAyMiAxODYuMTM4IDE2My42ODYgMTg3LjE1IDE2MC44NDggMTg5LjA0NkMxNTguMDEgMTkwLjk0MiAxNTUuNzk5IDE5My42MzcgMTU0LjQ5MyAxOTYuNzlDMTUzLjE4NyAxOTkuOTQzIDE1Mi44NDUgMjAzLjQxMyAxNTMuNTExIDIwNi43NkMxNTQuMTc3IDIxMC4xMDcgMTU1LjgyIDIxMy4xODIgMTU4LjIzMyAyMTUuNTk1QzE2MC42NDYgMjE4LjAwOCAxNjMuNzIxIDIxOS42NTIgMTY3LjA2OCAyMjAuMzE3QzE3MC40MTUgMjIwLjk4MyAxNzMuODg1IDIyMC42NDIgMTc3LjAzOCAyMTkuMzM2QzE4MC4xOTEgMjE4LjAzIDE4Mi44ODYgMjE1LjgxOCAxODQuNzgyIDIxMi45OEMxODYuNjc4IDIxMC4xNDMgMTg3LjY5IDIwNi44MDYgMTg3LjY5IDIwMy4zOTRDMTg3LjY4NSAxOTguODE5IDE4NS44NjUgMTk0LjQzMyAxODIuNjMgMTkxLjE5OEMxNzkuMzk1IDE4Ny45NjMgMTc1LjAwOSAxODYuMTQ0IDE3MC40MzUgMTg2LjEzOFYxODYuMTM4WlwiXHJcbiAgICAgICAgICAgICAgICBmaWxsPVwiIzZDNjNGRlwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgPC9nPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge3JvdXRlci5wYXRobmFtZS5pbmNsdWRlcygnL3N0YXJ0dXAtaWRlYScpIHx8XHJcbiAgICAgIHJvdXRlci5wYXRobmFtZS5pbmNsdWRlcygnL2J1c2luZXNzLXBsYW4nKSB8fFxyXG4gICAgICByb3V0ZXIucGF0aG5hbWUuaW5jbHVkZXMoJy9jYXNoLWZsb3cnKSB8fFxyXG4gICAgICByb3V0ZXIucGF0aG5hbWUuaW5jbHVkZXMoJy9jb21wZXRpdG9ycycpID8gKFxyXG4gICAgICAgIC8vIDxkaXYgY2xhc3NOYW1lPVwiaC1mdWxsIHctZnVsbCBvdmVyZmxvdy1oaWRkZW4gYmctYmFja2dyb3VuZCBkYXJrOmJnLXNlY29uZGFyeVwiPlxyXG4gICAgICAgIC8vICAgeycgJ31cclxuICAgICAgICAvLyAgIDxkaXYgY2xhc3NOYW1lPVwiaC1zY3JlZW4gdy0yMCBiZy1iYWNrZ3JvdW5kIGRhcms6Ymctc2Vjb25kYXJ5IGZpeGVkIHotMCBvdmVyZmxvdy1oaWRkZW5cIj48L2Rpdj5cclxuICAgICAgICAvLyA8L2Rpdj5cclxuICAgICAgICA8PjwvPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1mdWxsIHctZnVsbCBvdmVyZmxvdy1oaWRkZW4gYmctYmFja2dyb3VuZCBkYXJrOmJnLXNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICByZWY9e25hdlJlZn1cclxuICAgICAgICAgICAgb25Nb3VzZUVudGVyPXttb3VzZUVudGVyTmF2fVxyXG4gICAgICAgICAgICBvbk1vdXNlTGVhdmU9e21vdXNlTGVhdmVOYXZ9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtc2NyZWVuIHctMjAgYmctYmFja2dyb3VuZCBkYXJrOmJnLXNlY29uZGFyeSBmaXhlZCB6LTAgb3ZlcmZsb3ctaGlkZGVuXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC02IHctNTIgZ3JpZCBncmlkLWNvbHMtODBweCBpdGVtcy1jZW50ZXIgaG92ZXI6b3BhY2l0eS0xMDBcIj5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Rhc2hib2FyZC93ZWxjb21lXCI+XHJcbiAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2FjdGl2ZUNsYXNzRm4xfVxyXG4gICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHNldEFjdGl2ZUhvdmVyMSh0cnVlKX1cclxuICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRBY3RpdmVIb3ZlcjEoZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9XCI0NVwiXHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPVwiNDVcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmaWxsLWN1cnJlbnQgdGV4dC1wcmltYXJ5ZGFyayBkYXJrOnRleHQtYmFja2dyb3VuZCBibG9jayBtLWF1dG8gb3BhY2l0eS01MCBob3ZlcjpvcGFjaXR5LTEwMCBjdXJzb3ItcG9pbnRlciAke1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZUNsYXNzMSA/ICdvcGFjaXR5LTEwMCcgOiAnb3BhY2l0eS01MCdcclxuICAgICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDEyOCAxMjhcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8ZGVmcz5cclxuICAgICAgICAgICAgICAgICAgICA8c3R5bGU+PC9zdHlsZT5cclxuICAgICAgICAgICAgICAgICAgPC9kZWZzPlxyXG4gICAgICAgICAgICAgICAgICA8dGl0bGU+U2VlIFlvdSBTb29uPC90aXRsZT5cclxuICAgICAgICAgICAgICAgICAgPGcgaWQ9XCJTZWVfWW91X1Nvb25cIiBkYXRhLW5hbWU9XCJTZWUgWW91IFNvb25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xzLTFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZD1cIk04NC44Nyw3Ny4yN2wtNy00MS4xOGE2LjYsNi42LDAsMCwwLTEzLjEsMS41OGwxLjgzLDI0LjZMNTYuOTMsMzZhNi43Myw2LjczLDAsMCwwLTEyLjc4LDQuMTdMNTEuODIsNjcsNDAuNTcsNDhhNi40NSw2LjQ1LDAsMCwwLTExLjQxLDZsOC4zMywxOC4yNC00LjU3LTYuNDVhNi40OCw2LjQ4LDAsMCwwLTEwLjksN2wyMS4yNSwzNi43MWMuMzIuNTksOCwxNC41NCwyMy4xNCwxNC41NCwyMC4wNywwLDI5Ljc0LTE1LjE3LDMyLjExLTI5LjM2LDIuMjItMTMuMzQsNC41OS0yMiw3LjY4LTI4LjIyQzExMS43NCw1NS4zNiw5Ni4zNyw0NC42Nyw4NC44Nyw3Ny4yN1ptMTkuNS0xMS43NGMtMy4xOCw2LjM2LTUuNjEsMTUuMjQtNy44NywyOC43OUM5NC4yOCwxMDcuNjksODUuMiwxMjIsNjYuNDEsMTIyYy0xMy44NiwwLTIxLjI3LTEzLjM0LTIxLjM2LTEzLjVMMjMuNzksNzEuNzVBNC40NCw0LjQ0LDAsMCwxLDMxLjI2LDY3TDQyLjEsODIuMjdhMSwxLDAsMCwwLDEuNzYtMUwzMSw1My4xNGE0LjQxLDQuNDEsMCwwLDEsNy44LTQuMDhMNTQuMSw3NC44NEExLDEsMCwwLDAsNTYsNzRMNDYuMTIsMzkuNkE0LjY4LDQuNjgsMCwwLDEsNTUsMzYuNjlMNjcuMjIsNjkuNzhhMSwxLDAsMCwwLDItLjQzTDY2Ljg0LDM3LjUyYTQuNTYsNC41NiwwLDAsMSw5LTEuMDlMODMuNTUsODEuN2ExLDEsMCwwLDAsMiwuMTFjMC0uMTcsNS4xNy0xNy44NCwxMi41NC0yMi43NUMxMDQuOTMsNTQuNDksMTA2LjQ4LDYxLjMyLDEwNC4zNyw2NS41M1pcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3NOYW1lPVwiY2xzLTFcIiBkPVwiTTEyNyw2N2gtOGExLDEsMCwwLDAsMCwyaDhBMSwxLDAsMCwwLDEyNyw2N1pcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzTmFtZT1cImNscy0xXCIgZD1cIk05LDY3SDFhMSwxLDAsMCwwLDAsMkg5QTEsMSwwLDAsMCw5LDY3WlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3NOYW1lPVwiY2xzLTFcIiBkPVwiTTY1LDEzVjVhMSwxLDAsMCwwLTIsMHY4QTEsMSwwLDAsMCw2NSwxM1pcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzTmFtZT1cImNscy0xXCIgZD1cIk0xMTEuNjMsNDEuNTJjLjM5LDAtLjA5LjIxLDcuNDQtNC4xNGExLDEsMCwwLDAtMS0xLjc2bC02LjkzLDRBMSwxLDAsMCwwLDExMS42Myw0MS41MlpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzTmFtZT1cImNscy0xXCIgZD1cIk0xNS44Niw5NC42MmwtNi45Myw0YTEsMSwwLDAsMCwxLDEuNzZsNi45My00QTEsMSwwLDAsMCwxNS44Niw5NC42MlpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzTmFtZT1cImNscy0xXCIgZD1cIk0xNi44OCwzOS42MmwtNi45My00YTEsMSwwLDAsMC0xLDEuNzZsNi45Myw0QTEsMSwwLDAsMCwxNi44OCwzOS42MlpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzTmFtZT1cImNscy0xXCIgZD1cIk0xMTkuMDcsOTguNjJsLTYuOTMtNGExLDEsMCwwLDAtMSwxLjc2bDYuOTMsNEExLDEsMCwwLDAsMTE5LjA3LDk4LjYyWlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3NOYW1lPVwiY2xzLTFcIiBkPVwiTTM1LjYyLDIwLjg4YTEsMSwwLDAsMCwxLjc2LTFsLTQtNi45M2ExLDEsMCwwLDAtMS43NiwxWlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3NOYW1lPVwiY2xzLTFcIiBkPVwiTTkyLjM4LDIwLjg4bDQtNi45M2ExLDEsMCwwLDAtMS43Ni0xbC00LDYuOTNBMSwxLDAsMCwwLDkyLjM4LDIwLjg4WlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Rhc2hib2FyZC93ZWxjb21lXCI+XHJcbiAgICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXthY3RpdmVDbGFzc0ZuMX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdGV4dC1wcmltYXJ5ZGFyayBkYXJrOnRleHQtYmFja2dyb3VuZCBtbC0xIGN1cnNvci1wb2ludGVyIG9wYWNpdHktNTAgJHtcclxuICAgICAgICAgICAgICAgICAgICBhY3RpdmVIb3ZlcjEgPyAnb3BhY2l0eS0xMDAnIDogJ29wYWNpdHktNTAnXHJcbiAgICAgICAgICAgICAgICAgIH0gJHthY3RpdmVDbGFzczEgPyAnb3BhY2l0eS0xMDAnIDogJ29wYWNpdHktNTAnfWB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIFdlbGNvbWVcclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTYgdy01MiBncmlkIGdyaWQtY29scy04MHB4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZGFzaGJvYXJkL3N0YXJ0dXBcIj5cclxuICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17YWN0aXZlQ2xhc3NGbjJ9XHJcbiAgICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0QWN0aXZlSG92ZXIyKHRydWUpfVxyXG4gICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldEFjdGl2ZUhvdmVyMihmYWxzZSl9XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjQ1XCJcclxuICAgICAgICAgICAgICAgICAgd2lkdGg9XCI0NVwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZpbGwtY3VycmVudCB0ZXh0LXByaW1hcnlkYXJrIGRhcms6dGV4dC1iYWNrZ3JvdW5kIGJsb2NrIG0tYXV0byBvcGFjaXR5LTUwIGhvdmVyOm9wYWNpdHktMTAwIGN1cnNvci1wb2ludGVyICR7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlQ2xhc3MyID8gJ29wYWNpdHktMTAwJyA6ICdvcGFjaXR5LTUwJ1xyXG4gICAgICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTI4IDEyOFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxkZWZzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdHlsZT48L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgICA8L2RlZnM+XHJcbiAgICAgICAgICAgICAgICAgIDx0aXRsZT5MYW5kaW5nIFN1Y2Nlc3M8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgICA8ZyBpZD1cIkxhbmRpbmdfU3VjY2Vzc1wiIGRhdGEtbmFtZT1cIkxhbmRpbmcgU3VjY2Vzc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbHMtMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkPVwiTTEwOS4zLDkwLjFBNDYsNDYsMCwwLDAsNjUsMzZWMjAuMDhjMS43OC0uNjIsNy4yMS0yLjE0LDEyLjU3LjIzYTE5LjMzLDE5LjMzLDAsMCwwLDE0LjgyLDBjLjg3LS4zOC42MS4zMS42MS0xNy45M2ExLDEsMCwwLDAtMS40My0uOTNjLS4wNywwLTYuNjksMi44Ny0xMy4xOCwwQTE5LjQxLDE5LjQxLDAsMCwwLDY1LC45MywxLDEsMCwwLDAsNjMsMVYzNmE0NS44Niw0NS44NiwwLDAsMC0yOC42NiwxMC44QzE2LjE4LDQwLjQ4LDQsNDAsLjc5LDQ1LjUxLTIuMjksNTAuODYsMy45NCw1OS4zLDEwLDY1LjY4QTExLDExLDAsMCwwLDE4LDgzYy44MSwzOC40MSw0Ni4wOCw1OS4yLDc1LjY2LDM0LjIxLDguNTMsMywyOSw5LjE1LDMzLjU1LDEuMzFDMTMwLjM5LDExMywxMjMuODYsMTAyLjY1LDEwOS4zLDkwLjFaTTc3LjU5LDMuMzFBMTkuMzksMTkuMzksMCwwLDAsOTEsMy44M1YxOC42OGMtMS43OS42Mi03LjIyLDIuMTMtMTIuNTctLjIzQTE5LjE5LDE5LjE5LDAsMCwwLDY1LDE3LjkzVjMuMDhDNjYuODEsMi40Niw3Mi4yNCwxLDc3LjU5LDMuMzFaTTY1LDQ1di03YzM5LjY5LjkxLDU4LDUwLjI3LDI4LjIxLDc2LjgxQzcxLjMyLDEwNyw0Niw5Mi42NiwyNy43Nyw3OC42NGExMSwxMSwwLDAsMC0zLjItMTYuMTNBNDMuODgsNDMuODgsMCwwLDEsNjMsMzguMDZWNDVBMSwxLDAsMCwwLDY1LDQ1Wk0zMi41NSw0OC4zNmE0Ni4yMSw0Ni4yMSwwLDAsMC05LjgzLDEzLjI4LDEwLjkzLDEwLjkzLDAsMCwwLTExLjQsMi40N0MtOC4zOSw0My4yMyw1LjIzLDM5LjA4LDMyLjU1LDQ4LjM2Wk0xMCw3MmE5LDksMCwxLDEsOSw5QTksOSwwLDAsMSwxMCw3MlptMTAsMTFhMTEsMTEsMCwwLDAsNi4zNC0yLjgyYzE4LjQ1LDE0LjIxLDQzLjQ1LDI4LjM1LDY1LjA1LDM2LjIyQzYzLDEzOS4xNiwyMC44MywxMTkuMSwyMC4wNSw4M1ptMTA1LjQsMzQuNWMtMi41MSw0LjM1LTE0LDMuNjItMzAtMS44NWE0NS42MSw0NS42MSwwLDAsMCwxMy40Mi0yMy4yMUMxMjEuNTksMTAzLjU4LDEyOCwxMTMuMTIsMTI1LjQ1LDExNy40N1pcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Rhc2hib2FyZC9zdGFydHVwXCI+XHJcbiAgICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXthY3RpdmVDbGFzc0ZuMn1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdGV4dC1wcmltYXJ5ZGFyayBkYXJrOnRleHQtYmFja2dyb3VuZCBtbC0xIGN1cnNvci1wb2ludGVyIG9wYWNpdHktNTAgJHtcclxuICAgICAgICAgICAgICAgICAgICBhY3RpdmVIb3ZlcjIgPyAnb3BhY2l0eS0xMDAnIDogJ29wYWNpdHktNTAnXHJcbiAgICAgICAgICAgICAgICAgIH0gJHthY3RpdmVDbGFzczIgPyAnb3BhY2l0eS0xMDAnIDogJ29wYWNpdHktNTAnfWB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIFN0YXJ0dXAgaWRlYVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNiB3LTUyIGdyaWQgZ3JpZC1jb2xzLTgwcHggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgb25DbGljaz17YWN0aXZlQ2xhc3NGbjN9XHJcbiAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHNldEFjdGl2ZUhvdmVyMyh0cnVlKX1cclxuICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0QWN0aXZlSG92ZXIzKGZhbHNlKX1cclxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjQ1XCJcclxuICAgICAgICAgICAgICAgIHdpZHRoPVwiNDVcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmlsbC1jdXJyZW50IHRleHQtcHJpbWFyeWRhcmsgZGFyazp0ZXh0LWJhY2tncm91bmQgYmxvY2sgbS1hdXRvIG9wYWNpdHktNTAgaG92ZXI6b3BhY2l0eS0xMDAgY3Vyc29yLXBvaW50ZXIgJHtcclxuICAgICAgICAgICAgICAgICAgYWN0aXZlQ2xhc3MzID8gJ29wYWNpdHktMTAwJyA6ICdvcGFjaXR5LTUwJ1xyXG4gICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTI4IDEyOFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRlZnM+XHJcbiAgICAgICAgICAgICAgICAgIDxzdHlsZT48L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgPC9kZWZzPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPlNlYXJjaGluZzwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8ZyBpZD1cIlNlYXJjaGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNscy0xXCJcclxuICAgICAgICAgICAgICAgICAgICBkPVwiTTc5LjU3LDM2LjQzYTIyLDIyLDAsMSwwLDAsMzEuMTRBMjIsMjIsMCwwLDAsNzkuNTcsMzYuNDNabS0xLjQ0LDI5LjdhMjAsMjAsMCwxLDEsMC0yOC4yNkEyMCwyMCwwLDAsMSw3OC4xMyw2Ni4xM1pcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNscy0xXCJcclxuICAgICAgICAgICAgICAgICAgICBkPVwiTTExNywwSDMxQTExLDExLDAsMCwwLDIwLDExdjk3SDFhMSwxLDAsMCwwLTEsMXY4YTExLDExLDAsMCwwLDExLDExSDk3YTExLDExLDAsMCwwLDExLTExVjEwNGEzLjQyLDMuNDIsMCwwLDAsMi40MS0xYzQuNzEtNC43MSw1LjU5LTUuMTMsNS41OS03cy0uNjYtMi4wOC04LTkuNDJWMjBoMTlhMSwxLDAsMCwwLDEtMVYxMUExMSwxMSwwLDAsMCwxMTcsMFpNOTAuNjIsMTI2SDExYTksOSwwLDAsMS05LTl2LTdIODZDODYsMTE2LjI5LDg1LDEyMiw5MC42MiwxMjZaTTExNCw5NmMwLC43OSwwLC42MS01LDUuNTdhMS40MywxLjQzLDAsMCwxLTIsMEw4Ni40Myw4MWExLjM4LDEuMzgsMCwwLDEsMC0yYzUuMDctNS4wNyw0LjgtNSw1LjU3LTVzLS4xNy0uNzUsMTQuMjgsMTMuN0MxMTMuODcsOTUuMzEsMTE0LDk1LjExLDExNCw5NlpNODIuMzcsNzAuMzdhMjYsMjYsMCwxLDEsMC0zNi43NEEyNiwyNiwwLDAsMSw4Mi4zNyw3MC4zN1ptMi43OSwwLDMuNTIsMy41Mi0yLjgsMi44LTMuNTItMy41MkEyNi40NCwyNi40NCwwLDAsMCw4NS4xNiw3MC4zNlpNOTQuNDMsNzNhMy41MywzLjUzLDAsMCwwLTQuMjMtLjQ3bC0zLjc1LTMuNzVDMTAwLjI3LDUwLjI4LDg3LDI0LDY0LDI0QTI4LDI4LDAsMCwwLDM2LDUyYzAsMjMuMzcsMjYuNzEsMzYsNDQuNzksMjIuNDVsMy43MywzLjc0QTMuNDEsMy40MSwwLDAsMCw4NSw4Mi40M2MyMi4yMiwyMi4yMywyMC41NywyMC42MSwyMSwyMC45MlYxMTdhOSw5LDAsMCwxLTE4LDB2LThhMSwxLDAsMCwwLTEtMUgyMlYxMWE5LDksMCwwLDEsOS05Yzg1LjYsMCw3OS43NC0uMDgsNzkuNDEuMTdhMTEsMTEsMCwwLDAtNC4xNCw2LjMyYy0uNDEsMS43Ny0uMjktNC4xOS0uMjksNzZaTTEyNiwxOEgxMDhWMTFhOSw5LDAsMCwxLDE4LDBaXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17YWN0aXZlQ2xhc3NGbjN9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B0ZXh0LXByaW1hcnlkYXJrIGRhcms6dGV4dC1iYWNrZ3JvdW5kIG1sLTEgY3Vyc29yLXBvaW50ZXIgb3BhY2l0eS01MCAke1xyXG4gICAgICAgICAgICAgICAgICBhY3RpdmVIb3ZlcjMgPyAnb3BhY2l0eS0xMDAnIDogJ29wYWNpdHktNTAnXHJcbiAgICAgICAgICAgICAgICB9ICR7YWN0aXZlQ2xhc3MzID8gJ29wYWNpdHktMTAwJyA6ICdvcGFjaXR5LTUwJ31gfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIEJ1c2luZXNzIHBsYW5cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTYgdy01MiBncmlkIGdyaWQtY29scy04MHB4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIHsvKiA8TGluayBocmVmPScvZGFzaGJvYXJkL2FjY291bnQnPiAqL31cclxuICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXthY3RpdmVDbGFzc0ZuNH1cclxuICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0QWN0aXZlSG92ZXI0KHRydWUpfVxyXG4gICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRBY3RpdmVIb3ZlcjQoZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiNDVcIlxyXG4gICAgICAgICAgICAgICAgd2lkdGg9XCI0NVwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmaWxsLWN1cnJlbnQgdGV4dC1wcmltYXJ5ZGFyayBkYXJrOnRleHQtYmFja2dyb3VuZCBibG9jayBtLWF1dG8gb3BhY2l0eS01MCBob3ZlcjpvcGFjaXR5LTEwMCBjdXJzb3ItcG9pbnRlciAke1xyXG4gICAgICAgICAgICAgICAgICBhY3RpdmVDbGFzczQgPyAnb3BhY2l0eS0xMDAnIDogJ29wYWNpdHktNTAnXHJcbiAgICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICAgIGlkPVwiRGF0YV9Vc2VyXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtbmFtZT1cIkRhdGEgVXNlclwiXHJcbiAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTI4IDEyOFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRlZnM+XHJcbiAgICAgICAgICAgICAgICAgIDxzdHlsZT48L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgPC9kZWZzPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPkRhdGEgVXNlcjwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbHMtMVwiXHJcbiAgICAgICAgICAgICAgICAgIGQ9XCJNMTA5LDBIMjNhOSw5LDAsMCwwLTksOWMwLDExOCwwLDExMCwwLDExMC42NEE5LjIyLDkuMjIsMCwwLDAsMjMuMzEsMTI4SDEwOWE1LDUsMCwwLDAsNS01VjVBNSw1LDAsMCwwLDEwOSwwWm0zLDVWMTA3YTMsMywwLDAsMS0zLDNIMjZWMmg4M0EzLDMsMCwwLDEsMTEyLDVaTTE2LDlhNyw3LDAsMCwxLDctN2gxVjExMEgyM2E5LDksMCwwLDAtNi45NCwzLjI2QzE2LDExMy4zNCwxNiwxMTguMjgsMTYsOVptOTYsMTE0YTMsMywwLDAsMS0zLDNIMjMuMzFjLTYuMTMsMC05LjU2LTYuOTQtNS42OC0xMS40M0E2LjkxLDYuOTEsMCwwLDEsMjMsMTEyYzkwLjkxLDAsODcuMDYuNDQsODktMVpcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNscy0xXCJcclxuICAgICAgICAgICAgICAgICAgZD1cIk01Ni4xNSw3NS44MUEzMywzMywwLDEsMCwzNSw0NSwzMy4wNSwzMy4wNSwwLDAsMCw1Ni4xNSw3NS44MVptLTcuNTMtNi42OGM1Ljg5LTIyLjgyLDMyLjg2LTIyLjgzLDM4Ljc2LDBBMzAuODgsMzAuODgsMCwwLDEsNDguNjIsNjkuMTNaTTY4LDE0YzI4LjA3LDAsNDEuNjEsMzQuNTEsMjEuMDksNTMuNjVDODYuNTYsNTksODAuODIsNTIuODMsNzMuNTcsNTAuNzVhMTMsMTMsMCwxLDAtMTEuMTQsMGMtNy4yNSwyLjA4LTEzLDguMjQtMTUuNTIsMTYuOTJDMjYuNDUsNDguNjksMzkuOCwxNCw2OCwxNFptMCwzNkExMSwxMSwwLDEsMSw3OSwzOSwxMSwxMSwwLDAsMSw2OCw1MFpcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzTmFtZT1cImNscy0xXCIgZD1cIk05Ni41LDg3aC01NmExLDEsMCwwLDAsMCwyaDU2QTEsMSwwLDAsMCw5Ni41LDg3WlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8cGF0aCBjbGFzc05hbWU9XCJjbHMtMVwiIGQ9XCJNOTYuNSw5OWgtNTZhMSwxLDAsMCwwLDAsMmg1NkExLDEsMCwwLDAsOTYuNSw5OVpcIiAvPlxyXG4gICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgIHsvKiA8L0xpbms+ICovfVxyXG4gICAgICAgICAgICAgIHsvKiA8TGluayBocmVmPScvZGFzaGJvYXJkL2FjY291bnQnPiAqL31cclxuICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17YWN0aXZlQ2xhc3NGbjR9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B0ZXh0LXByaW1hcnlkYXJrIGRhcms6dGV4dC1iYWNrZ3JvdW5kIG1sLTEgY3Vyc29yLXBvaW50ZXIgb3BhY2l0eS01MCAke1xyXG4gICAgICAgICAgICAgICAgICBhY3RpdmVIb3ZlcjQgPyAnb3BhY2l0eS0xMDAnIDogJ29wYWNpdHktNTAnXHJcbiAgICAgICAgICAgICAgICB9ICR7YWN0aXZlQ2xhc3M0ID8gJ29wYWNpdHktMTAwJyA6ICdvcGFjaXR5LTUwJ31gfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIEFjY291bnRcclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgey8qIDwvTGluaz4gKi99XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTYgdy01MiBncmlkIGdyaWQtY29scy04MHB4IGl0ZW1zLWNlbnRlciBhYnNvbHV0ZSBib3R0b20tNFwiPlxyXG4gICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2FjdGl2ZUNsYXNzRm41fVxyXG4gICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRBY3RpdmVIb3ZlcjUodHJ1ZSl9XHJcbiAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldEFjdGl2ZUhvdmVyNShmYWxzZSl9XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCI0NVwiXHJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjQ1XCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZpbGwtY3VycmVudCB0ZXh0LXByaW1hcnlkYXJrIGRhcms6dGV4dC1iYWNrZ3JvdW5kIGJsb2NrIG0tYXV0byBvcGFjaXR5LTUwIGhvdmVyOm9wYWNpdHktMTAwIGN1cnNvci1wb2ludGVyICR7XHJcbiAgICAgICAgICAgICAgICAgIGFjdGl2ZUNsYXNzNSA/ICdvcGFjaXR5LTEwMCcgOiAnb3BhY2l0eS01MCdcclxuICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDEyOCAxMjhcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkZWZzPlxyXG4gICAgICAgICAgICAgICAgICA8c3R5bGU+PC9zdHlsZT5cclxuICAgICAgICAgICAgICAgIDwvZGVmcz5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5Mb2cgT3V0PC90aXRsZT5cclxuICAgICAgICAgICAgICAgIDxnIGlkPVwiTG9nX091dFwiIGRhdGEtbmFtZT1cIkxvZyBPdXRcIj5cclxuICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3NOYW1lPVwiY2xzLTFcIiBkPVwiTTQ0LDYxdjZhMSwxLDAsMCwwLDIsMFY2MUExLDEsMCwwLDAsNDQsNjFaXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbHMtMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZD1cIk0xMTMsMTEzSDg2Vjc1aDZ2OWExLDEsMCwwLDAsMSwxYy42NCwwLS44MywxLjI2LDIwLjcyLTIwLjNhMSwxLDAsMCwwLDAtMS40NGwtMjAtMjBBMSwxLDAsMCwwLDkyLDQ0djlIODZWMTRhMSwxLDAsMCwwLTEtMUg1NFYxYTEsMSwwLDAsMC0xLjM1LTFsLTM4LDEzQTEsMSwwLDAsMCwxNCwxNGMwLDEwNi41OC0uMzgsMTAwLjYuNjksMTAxQzU1LjM0LDEyOC44OCw1Mi43NCwxMjgsNTMsMTI4YTEsMSwwLDAsMCwxLTFWMTE1aDU5QTEsMSwwLDAsMCwxMTMsMTEzWk05Myw1NWExLDEsMCwwLDAsMS0xVjQ2LjQ2TDExMS41Niw2NCw5NCw4MS41NFY3NGExLDEsMCwwLDAtMS0xSDU0VjU1Wk01NCwyMUg3N1Y1M0g1NFptMzAtNlY1M0g3OVYyMGExLDEsMCwwLDAtMS0xSDU0VjE1Wk01MiwxMjUuNTdsLTM2LTEyLjNWMTQuNzNMNTIsMi40M1pNNTQsNzVINzd2MzhINTRabTI1LDM4Vjc1aDV2MzhaXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17YWN0aXZlQ2xhc3NGbjV9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B0ZXh0LXByaW1hcnlkYXJrIGRhcms6dGV4dC1iYWNrZ3JvdW5kIG1sLTEgY3Vyc29yLXBvaW50ZXIgb3BhY2l0eS01MCAke1xyXG4gICAgICAgICAgICAgICAgICBhY3RpdmVIb3ZlcjUgPyAnb3BhY2l0eS0xMDAnIDogJ29wYWNpdHktNTAnXHJcbiAgICAgICAgICAgICAgICB9ICR7YWN0aXZlQ2xhc3M1ID8gJ29wYWNpdHktMTAwJyA6ICdvcGFjaXR5LTUwJ31gfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIExvZyBvdXRcclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvSXNBY3RpdmVDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEZXNrdG9wTmF2YmFyO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tICcuLi8uLi9saWIvbmV3QXV0aCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgSXNBY3RpdmVDb250ZXh0IH0gZnJvbSAnLi9EZXNrdG9wTmF2YmFyJztcclxuaW1wb3J0IGdzYXAsIHsgUG93ZXI0IH0gZnJvbSAnZ3NhcCc7XHJcbmltcG9ydCB7IHVzZVdpbmRvd1NpemUgfSBmcm9tICcuLi8uLi91dGlscy91c2VXaW5kb3dTaXplJztcclxuXHJcbmNvbnN0IFJlZGlyZWN0ID0gKHsgdG8gfSkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgcm91dGVyLnB1c2godG8pO1xyXG4gIH0sIFt0b10pO1xyXG5cclxuICByZXR1cm4gbnVsbDtcclxufTtcclxuXHJcbmNvbnN0IE5hdmJhclRlbXBsYXRlID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIC8vIE1vYmlsZSBmcmllbmRseVxyXG4gIGNvbnN0IHNpemUgPSB1c2VXaW5kb3dTaXplKCk7XHJcblxyXG4gIGNvbnN0IGFjdGl2ZUhvdmVyID0gdXNlQ29udGV4dChJc0FjdGl2ZUNvbnRleHQpO1xyXG4gIGNvbnN0IHsgY3VycmVudFVzZXIgfSA9IHVzZUF1dGgoKTtcclxuICBjb25zdCBjb250ZW50UmVmID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICBjb25zdCBhY3RpdmVDbGFzcyA9IGFjdGl2ZUhvdmVyID8gJ21sLTUyJyA6ICdtbC0yMCc7XHJcblxyXG4gIGlmIChhY3RpdmVIb3Zlcikge1xyXG4gICAgZ3NhcC50byhjb250ZW50UmVmLmN1cnJlbnQsIHtcclxuICAgICAgbWFyZ2luTGVmdDogJzIwOHB4JyxcclxuICAgICAgZWFzZTogUG93ZXI0LmVhc2VPdXQsXHJcbiAgICAgIC8vIGR1cmF0aW9uOiAxXHJcbiAgICB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgZ3NhcC50byhjb250ZW50UmVmLmN1cnJlbnQsIHsgbWFyZ2luTGVmdDogJzgwcHgnLCBlYXNlOiBQb3dlcjQuZWFzZU91dCB9KTtcclxuICB9XHJcblxyXG4gIGlmICghY3VycmVudFVzZXIpIHtcclxuICAgIHJldHVybiA8UmVkaXJlY3QgdG89XCIvXCIgLz47XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge3NpemUud2lkdGggPCA4NjAgPyAoXHJcbiAgICAgICAgPD57Y2hpbGRyZW59PC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgcmVmPXtjb250ZW50UmVmfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgcmVsYXRpdmUgaC1mdWxsICR7YWN0aXZlQ2xhc3N9IGJnLWJhY2tncm91bmQgZGFyazpiZy1zZWNvbmRhcnlgfVxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgdHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uOiAnbGluZWFyJyxcclxuICAgICAgICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uOiAnMjAwbXMnLFxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uUHJvcGVydHk6ICd3aWR0aCwgbWFyZ2luLWxlZnQnLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyVGVtcGxhdGU7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBnc2FwLCB7IFBvd2VyNCB9IGZyb20gJ2dzYXAnO1xyXG5pbXBvcnQgVGlwcHkgZnJvbSAnQHRpcHB5anMvcmVhY3QnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcblxyXG5jb25zdCBUaXBweU1vbnN0ZXIgPSAoe1xyXG4gIGNvbnRlbnRDbGFzcyxcclxuICBjb250ZW50VGV4dCxcclxuICBjb250ZW50VGV4dDEsXHJcbiAgc3RhcnR1cHMsXHJcbiAgbWFya2V0LFxyXG4gIG1vZGVsLFxyXG4gIHN1Y2Nlc3MsXHJcbiAgdGlwcHlNb25zdGVyLFxyXG4gIHNldFRpcHB5TW9uc3RlcixcclxuICBzZXRDdXJyZW50VGlwcHksXHJcbiAgZW1wdHlJbnB1dCxcclxuICBpbml0aWFsTW9kYWwsXHJcbiAgdmlzaW9uLFxyXG4gIHByb2R1Y3QsXHJcbiAgZmluYW5jZXMsXHJcbiAgd2VsY29tZVxyXG59KSA9PiB7XHJcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGNvbnRlbnRSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgdGlwcHlSZWYgPSB1c2VSZWYoKTtcclxuXHJcbiAgLy8gY29uc3QgW2VtcHR5SW5wdXQsIHNldEVtcHR5SW5wdXRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBzaG93ID0gKCkgPT4ge1xyXG4gICAgZ3NhcC5mcm9tVG8oXHJcbiAgICAgIHRpcHB5UmVmLmN1cnJlbnQsXHJcbiAgICAgIHsgYXV0b0FscGhhOiAwLCBzY2FsZTogMCB9LFxyXG4gICAgICB7IGF1dG9BbHBoYTogMSwgc2NhbGU6IDEsIGR1cmF0aW9uOiAxLCB0cmFuc2Zvcm1PcmlnaW46ICdib3R0b20gcmlnaHQnLCBlYXNlOiBQb3dlcjQuZWFzZU91dCB9XHJcbiAgICApO1xyXG4gICAgc2V0VmlzaWJsZSh0cnVlKTtcclxuICAgIGVtcHR5SW5wdXQgJiYgc2V0Q3VycmVudFRpcHB5KHRydWUpOyAvLyBjdXJyZW50IHRpcHB5IGplc3QgY3rEmcWbY2nEhSBvYnPFgnVnaSBwcm9ibGVtdSwga2llZHkgbWFteSBvdHdhcnRlZ28gdG9vbHRpcGEgbm9ybWFsbmVnbyBpIHdjaXNrYW15LCDFvGVieSB3ecWbd2lldGxpxIcgY3plcndvbmVnb1xyXG4gIH07XHJcbiAgY29uc3QgaGlkZSA9IGFzeW5jICgpID0+IHtcclxuICAgIGF3YWl0IGdzYXAudG8odGlwcHlSZWYuY3VycmVudCwge1xyXG4gICAgICBhdXRvQWxwaGE6IDAsXHJcbiAgICAgIHNjYWxlOiAwLFxyXG4gICAgICBkdXJhdGlvbjogMSxcclxuICAgICAgdHJhbnNmb3JtT3JpZ2luOiAnYm90dG9tIHJpZ2h0JyxcclxuICAgICAgZWFzZTogUG93ZXI0LmVhc2VJbixcclxuICAgIH0pO1xyXG4gICAgZW1wdHlJbnB1dCAmJiBzZXRUaXBweU1vbnN0ZXIoZmFsc2UpO1xyXG4gICAgc2V0VmlzaWJsZShmYWxzZSk7XHJcbiAgICBlbXB0eUlucHV0ICYmIHNldEN1cnJlbnRUaXBweShmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25JbWFnZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgaWYgKCF0aXBweU1vbnN0ZXIpIHtcclxuICAgICAgdmlzaWJsZSA/IGhpZGUoKSA6IHNob3coKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gR1NBUFxyXG4gICAgZ3NhcC5mcm9tVG8oXHJcbiAgICAgIGNvbnRlbnRSZWYuY3VycmVudCxcclxuICAgICAgeyBhdXRvQWxwaGE6IDAgfSxcclxuICAgICAgeyBhdXRvQWxwaGE6IDEsIGR1cmF0aW9uOiAyLCB0cmFuc2Zvcm1PcmlnaW46ICdib3R0b20gcmlnaHQnLCBlYXNlOiBQb3dlcjQuZWFzZU91dCB9XHJcbiAgICApO1xyXG4gICAgLy8gVElQUFlcclxuICAgIHNldFZpc2libGUodHJ1ZSk7XHJcbiAgICBlbXB0eUlucHV0ICYmIHNldEN1cnJlbnRUaXBweSh0cnVlKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnNvbGUubG9nKCd0bSAtICcsIHRpcHB5TW9uc3Rlcik7XHJcbiAgY29uc29sZS5sb2coJ3Zpc2libGUgLSAnLCB2aXNpYmxlKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxUaXBweVxyXG4gICAgICAvLyB0cmlnZ2VyPXt0aXBweU1vbnN0ZXJ9XHJcbiAgICAgIHpJbmRleD17dmlzaWJsZSB8fCB0aXBweU1vbnN0ZXIgPyAyMiA6IDB9XHJcbiAgICAgIG9uU2hvdz17c2hvd31cclxuICAgICAgYW5pbWF0aW9uPSdmYWRlJ1xyXG4gICAgICBkdXJhdGlvbj17NTAwfVxyXG4gICAgICB0b3VjaD17dHJ1ZX1cclxuICAgICAgdmlzaWJsZT17dmlzaWJsZSB8fCB0aXBweU1vbnN0ZXJ9XHJcbiAgICAgIG9uQ2xpY2tPdXRzaWRlPXtoaWRlfVxyXG4gICAgICBvZmZzZXQ9e21hcmtldCB8fCBtb2RlbCB8fCBzdWNjZXNzIHx8IHRpcHB5TW9uc3RlciA/IFstMjY1LCAtNjVdIDogWy0yMjAsIC02NV19XHJcbiAgICAgIC8vIHBsYWNlbWVudD0nbGVmdC1lbmQnXHJcbiAgICAgIGludGVyYWN0aXZlPXt0cnVlfVxyXG4gICAgICBjb250ZW50PXtcclxuICAgICAgICB0aXBweU1vbnN0ZXIgPyAoXHJcbiAgICAgICAgICA8ZGl2IHJlZj17dGlwcHlSZWZ9IGNsYXNzTmFtZT0naC0xMiB3LTk2IHNoYWRvdy1sZyByb3VuZGVkLTJ4bCBiZy1yZWQgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgZm9jdXM6b3V0bGluZS1ub25lJz5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LXByaW1hcnlkYXJrIHB5LTQgcHgtMiB0ZXh0LXNtIHRleHQtY2VudGVyIHRleHQtd2hpdGUgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXInPlxyXG4gICAgICAgICAgICBPb3BzLCB5b3UgaGF2ZSB0byBwcm92aWRlIGFsbCB0aGUgaW5mb3JtYXRpb25cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIHNyYz0nL2Vtb2ppcy9jcnlpbmcuc3ZnJ1xyXG4gICAgICAgICAgICAgIGhlaWdodD17MjV9XHJcbiAgICAgICAgICAgICAgd2lkdGg9ezI1fVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0naW5saW5lLWJsb2NrIHJlbGF0aXZlJ1xyXG4gICAgICAgICAgLz4uXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGZsZXgtd3JhcCBnYXAtMiBtdC0yJz48L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8ZGl2IHJlZj17dGlwcHlSZWZ9IGNsYXNzTmFtZT17YGZvY3VzOm91dGxpbmUtbm9uZSAke2NvbnRlbnRDbGFzc31gfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RleHQtcHJpbWFyeWRhcmsgcC00IHRleHQtc20gdGV4dC1jZW50ZXIgdGV4dC13aGl0ZSc+XHJcbiAgICAgICAgICAgIHtjb250ZW50VGV4dH1cclxuICAgICAgICAgICAge3N0YXJ0dXBzICYmICggPD48aW1nIHNyYz0nL2Vtb2ppcy9jb2NvdW50LnN2ZycgaGVpZ2h0PXsyMn0gd2lkdGg9ezIyfSBjbGFzc05hbWU9J2lubGluZS1ibG9jaycgLz48cCBjbGFzc05hbWU9J2lubGluZS1ibG9jayc+LjwvcD48Lz4gKX1cclxuICAgICAgICAgICAge2luaXRpYWxNb2RhbCAmJiAoIDw+PGltZyBzcmM9Jy9lbW9qaXMvaGFtbWVyLnN2ZycgaGVpZ2h0PXsyMn0gd2lkdGg9ezIyfSBjbGFzc05hbWU9J2lubGluZS1ibG9jaycgLz48cCBjbGFzc05hbWU9J2lubGluZS1ibG9jayc+LjwvcD48Lz4gKX1cclxuICAgICAgICAgICAge3Zpc2lvbiAmJiAoIDw+PGltZyBzcmM9Jy9lbW9qaXMvZGVzZXJ0LnN2ZycgaGVpZ2h0PXsyMn0gd2lkdGg9ezIyfSBjbGFzc05hbWU9J2lubGluZS1ibG9jayByZWxhdGl2ZSBib3R0b20tMC41JyAvPjxwIGNsYXNzTmFtZT0naW5saW5lLWJsb2NrJz4uPC9wPjwvPiApfVxyXG4gICAgICAgICAgICB7cHJvZHVjdCAmJiAoIDw+PGltZyBzcmM9Jy9lbW9qaXMvb3guc3ZnJyBoZWlnaHQ9ezIyfSB3aWR0aD17MjJ9IGNsYXNzTmFtZT0naW5saW5lLWJsb2NrIHJlbGF0aXZlIGJvdHRvbS0wLjUnIC8+PHAgY2xhc3NOYW1lPSdpbmxpbmUtYmxvY2snPi48L3A+PC8+ICl9XHJcbiAgICAgICAgICAgIHttYXJrZXQgJiYgKCA8PjxpbWcgc3JjPScvZW1vamlzL3doYWxlLnN2ZycgaGVpZ2h0PXsyMn0gd2lkdGg9ezIyfSBjbGFzc05hbWU9J2lubGluZS1ibG9jaycgLz48cCBjbGFzc05hbWU9J2lubGluZS1ibG9jayc+LjwvcD48Lz4gKX1cclxuICAgICAgICAgICAge2ZpbmFuY2VzICYmICggPD48aW1nIHNyYz0nL2Vtb2ppcy91bmljb3JuLnN2ZycgaGVpZ2h0PXsyMn0gd2lkdGg9ezIyfSBjbGFzc05hbWU9J2lubGluZS1ibG9jayByZWxhdGl2ZSBib3R0b20tMC41JyAvPjxwIGNsYXNzTmFtZT0naW5saW5lLWJsb2NrJz4uPC9wPjwvPiApfVxyXG4gICAgICAgICAgICB7bW9kZWwgJiYgKCA8PjxpbWcgc3JjPScvZW1vamlzL3BpcmF0LnN2ZycgaGVpZ2h0PXsyMn0gd2lkdGg9ezIyfSBjbGFzc05hbWU9J2lubGluZS1ibG9jaycgLz48cCBjbGFzc05hbWU9J2lubGluZS1ibG9jayc+LjwvcD48Lz4gKX1cclxuICAgICAgICAgICAge3N1Y2Nlc3MgJiYgKCA8PjxpbWcgc3JjPScvZW1vamlzL3N0YXIuc3ZnJyBoZWlnaHQ9ezIyfSB3aWR0aD17MjJ9IGNsYXNzTmFtZT0naW5saW5lLWJsb2NrJyAvPjxwIGNsYXNzTmFtZT0naW5saW5lLWJsb2NrJz4hPC9wPjwvPiApfVxyXG4gICAgICAgICAgICB7d2VsY29tZSAmJiAoIDw+PGltZyBzcmM9Jy9naWZzL2hlbGxvLWhhbmQuZ2lmJyBoZWlnaHQ9ezIyfSB3aWR0aD17MjJ9IGNsYXNzTmFtZT0naW5saW5lLWJsb2NrJyAvPjxwIGNsYXNzTmFtZT0naW5saW5lLWJsb2NrJz4uPC9wPjwvPiApfVxyXG4gICAgICAgICAgICB7LyogPGltZyBzcmM9Jy9lbW9qaXMvY29jb3VudC5zdmcnIGhlaWdodD17MjJ9IHdpZHRoPXsyMn0gY2xhc3NOYW1lPSdpbmxpbmUtYmxvY2snIC8+LiAqL31cclxuXHJcbiAgICAgICAgICAgIHsvKiBURVhUIDEgKi99XHJcbiAgICAgICAgICAgIHtjb250ZW50VGV4dDEgJiYgY29udGVudFRleHQxfVxyXG4gICAgICAgICAgICB7c3RhcnR1cHMgJiYgKCA8PjxpbWcgc3JjPScvZW1vamlzL2JhbGxvb24uc3ZnJyBoZWlnaHQ9ezIyfSB3aWR0aD17MjJ9IGNsYXNzTmFtZT0naW5saW5lLWJsb2NrJyAvPjxwIGNsYXNzTmFtZT0naW5saW5lLWJsb2NrJz4uPC9wPjwvPiApfVxyXG4gICAgICAgICAgICB7dmlzaW9uICYmICggPD48aW1nIHNyYz0nL2Vtb2ppcy9jYW1lbC5zdmcnIGhlaWdodD17MjJ9IHdpZHRoPXsyMn0gY2xhc3NOYW1lPSdpbmxpbmUtYmxvY2snIC8+PHAgY2xhc3NOYW1lPSdpbmxpbmUtYmxvY2snPi48L3A+PC8+ICl9XHJcbiAgICAgICAgICAgIHtwcm9kdWN0ICYmICggPD48aW1nIHNyYz0nL2Vtb2ppcy9tYXAuc3ZnJyBoZWlnaHQ9ezIyfSB3aWR0aD17MjJ9IGNsYXNzTmFtZT0naW5saW5lLWJsb2NrJyAvPjxwIGNsYXNzTmFtZT0naW5saW5lLWJsb2NrJz4uPC9wPjwvPiApfVxyXG4gICAgICAgICAgICB7bWFya2V0ICYmICggPD48aW1nIHNyYz0nL2Vtb2ppcy9pc2xhbmQuc3ZnJyBoZWlnaHQ9ezIyfSB3aWR0aD17MjJ9IGNsYXNzTmFtZT0naW5saW5lLWJsb2NrJyAvPjxwIGNsYXNzTmFtZT0naW5saW5lLWJsb2NrJz4uPC9wPjwvPiApfVxyXG4gICAgICAgICAgICB7ZmluYW5jZXMgJiYgKCA8PjxpbWcgc3JjPScvZW1vamlzL2NvbnN0cnVjdGlvbi5zdmcnIGhlaWdodD17MjJ9IHdpZHRoPXsyMn0gY2xhc3NOYW1lPSdpbmxpbmUtYmxvY2snIC8+PHAgY2xhc3NOYW1lPSdpbmxpbmUtYmxvY2snPi48L3A+PC8+ICl9XHJcbiAgICAgICAgICAgIHttb2RlbCAmJiAoIDw+PGltZyBzcmM9Jy9lbW9qaXMvcG9wcGVyLnN2ZycgaGVpZ2h0PXsyMn0gd2lkdGg9ezIyfSBjbGFzc05hbWU9J2lubGluZS1ibG9jayByZWxhdGl2ZSBib3R0b20tMC41JyAvPjxwIGNsYXNzTmFtZT0naW5saW5lLWJsb2NrJz4hPC9wPjwvPiApfVxyXG4gICAgICAgICAgICB7d2VsY29tZSAmJiAoIDw+PGltZyBzcmM9Jy9naWZzL3JvY2tldC5naWYnIGhlaWdodD17MjJ9IHdpZHRoPXsyMn0gY2xhc3NOYW1lPSdpbmxpbmUtYmxvY2snIC8+PHAgY2xhc3NOYW1lPSdpbmxpbmUtYmxvY2snPiE8L3A+PC8+ICl9XHJcbiAgICAgICAgICAgIHsvKiA8aW1nIHNyYz0nL2Vtb2ppcy9iYWxsb29uLnN2ZycgaGVpZ2h0PXsyMn0gd2lkdGg9ezIyfSBjbGFzc05hbWU9J2lubGluZS1ibG9jaycgLz4uICovfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGZsZXgtd3JhcCBnYXAtMiBtdC0yJz48L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgICAgfVxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZml4ZWQgZmxleCBmbGV4LXdyYXAgbS0yIGJvdHRvbS00IHJpZ2h0LTQgei01MCc+XHJcbiAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICBzcmM9Jy9tb25zdGVycy9tb25zdGVyLXR3by5zdmcnXHJcbiAgICAgICAgICBoZWlnaHQ9ezY2fVxyXG4gICAgICAgICAgd2lkdGg9ezYwfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPSdjdXJzb3ItcG9pbnRlciB6LTUwJ1xyXG4gICAgICAgICAgb25DbGljaz17b25JbWFnZUNsaWNrfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9UaXBweT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGlwcHlNb25zdGVyO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGlzTW9iaWxlIH0gZnJvbSAncmVhY3QtZGV2aWNlLWRldGVjdCc7XHJcbmltcG9ydCBnc2FwLCB7IExpbmVhciB9IGZyb20gJ2dzYXAnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmNvbnN0IEV4aXRDb21wb25lbnQgPSAoKSA9PiB7XHJcbiAgY29uc3QgZXhpdEltYWdlID0gdXNlUmVmKCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghaXNNb2JpbGUpIHtcclxuICAgICAgZXhpdEltYWdlLmN1cnJlbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsICgpID0+IHtcclxuICAgICAgICBnc2FwLnRvKGV4aXRJbWFnZS5jdXJyZW50LCB7IHJvdGF0aW9uOiAnMTgwX2N3JywgZHVyYXRpb246IDAuNSwgZWFzZTogTGluZWFyLmVhc2VJbiB9KTtcclxuICAgICAgfSk7XHJcbiAgICAgIGV4aXRJbWFnZS5jdXJyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XHJcbiAgICAgICAgZ3NhcC50byhleGl0SW1hZ2UuY3VycmVudCwgeyByb3RhdGlvbjogJzBfY3cnLCBkdXJhdGlvbjogMC41LCBlYXNlOiBMaW5lYXIuZWFzZUluIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxpbWdcclxuICAgICAgcmVmPXtleGl0SW1hZ2V9XHJcbiAgICAgIG9uQ2xpY2s9eygpID0+IFJvdXRlci5wdXNoKGAvZGFzaGJvYXJkL3Byb2plY3RzLyR7Um91dGVyLnF1ZXJ5LnByb2plY3R9YCl9XHJcbiAgICAgIHNyYz1cIi9idXNpbmVzcy1tb2RlbC9iYWNrNC5zdmdcIlxyXG4gICAgICBoZWlnaHQ9ezI4fVxyXG4gICAgICB3aWR0aD17Mjh9XHJcbiAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGxlZnQtNiB0b3AtMyBjdXJzb3ItcG9pbnRlciB6LTUwXCJcclxuICAgIC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV4aXRDb21wb25lbnQ7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGRiIH0gZnJvbSAnLi4vLi4vLi4vbGliL2ZpcmViYXNlJztcclxuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gJy4uLy4uLy4uL2xpYi9uZXdBdXRoJztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IGdzYXAsIHsgUG93ZXI0IH0gZnJvbSAnZ3NhcCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcclxuXHJcbmNvbnN0IERpdkNvbXBvbmVudCA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgbWFyZ2luLXRvcDogMTZweDtcclxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gIDo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyhwcm9wcykgPT4gKHByb3BzLmZpbGxlZFNlY3Rpb24gPyAnIzBBRkYwMCcgOiAnI2ZjNTczYicpfTtcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMTAwJTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBEaXZDb21wb25lbnQxID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMjtcclxuICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgOjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHByb3BzKSA9PiAocHJvcHMuZmlsbGVkU2VjdGlvbjEgPyAnIzBBRkYwMCcgOiAnI2ZjNTczYicpfTtcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMTAwJTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBEaXZDb21wb25lbnQyID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMjtcclxuICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgOjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHByb3BzKSA9PiAocHJvcHMuZmlsbGVkU2VjdGlvbjIgPyAnIzBBRkYwMCcgOiAnI2ZjNTczYicpfTtcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMTAwJTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBEaXZDb21wb25lbnQzID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMjtcclxuICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgOjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHByb3BzKSA9PiAocHJvcHMuZmlsbGVkU2VjdGlvbjMgPyAnIzBBRkYwMCcgOiAnI2ZjNTczYicpfTtcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMTAwJTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBEaXZDb21wb25lbnQ0ID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMjtcclxuICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbmA7XHJcblxyXG5jb25zdCBQcm9ncmVzc0JhciA9ICh7IG9uTG9hZE9wYWNpdHksIG9uTG9hZE9wYWNpdHkxLCBvbkxvYWRPcGFjaXR5Miwgb25Mb2FkT3BhY2l0eTMsIG9uTG9hZE9wYWNpdHk0IH0pID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbZmlsbGVkU2VjdGlvbiwgc2V0RmlsbGVkU2VjdGlvbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2ZpbGxlZFNlY3Rpb24xLCBzZXRGaWxsZWRTZWN0aW9uMV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2ZpbGxlZFNlY3Rpb24yLCBzZXRGaWxsZWRTZWN0aW9uMl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2ZpbGxlZFNlY3Rpb24zLCBzZXRGaWxsZWRTZWN0aW9uM10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2ZpbGxlZFNlY3Rpb240LCBzZXRGaWxsZWRTZWN0aW9uNF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgeyBjdXJyZW50VXNlciB9ID0gdXNlQXV0aCgpO1xyXG4gIGNvbnN0IGNvbnRhaW5lclJlZiA9IHVzZVJlZigpO1xyXG5cclxuICBjb25zb2xlLmxvZygnLScsIGZpbGxlZFNlY3Rpb24pO1xyXG4gIGNvbnNvbGUubG9nKCcxLScsIGZpbGxlZFNlY3Rpb24xKTtcclxuICBjb25zb2xlLmxvZygnMi0nLCBmaWxsZWRTZWN0aW9uMik7XHJcbiAgY29uc29sZS5sb2coJzMtJywgZmlsbGVkU2VjdGlvbjMpO1xyXG4gIGNvbnNvbGUubG9nKCc0LScsIGZpbGxlZFNlY3Rpb240KTtcclxuICBjb25zdCBbbG9hZGluZ0hlbHBlciwgc2V0TG9hZGluZ0hlbHBlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnc2FwLnNldChjb250YWluZXJSZWYuY3VycmVudCwgeyBvcGFjaXR5OiAwIH0pO1xyXG4gICAgZ3NhcC50byhjb250YWluZXJSZWYuY3VycmVudCwgeyBvcGFjaXR5OiAxLCBkdXJhdGlvbjogMSwgZWFzZTogUG93ZXI0LmVhc2VJbiB9KTtcclxuICAgIGNvbnN0IHVzZXJVaWQgPSBDb29raWVzLmdldCgndWlkJyk7XHJcblxyXG4gICAgaWYgKHVzZXJVaWQgJiYgcm91dGVyLnF1ZXJ5LnByb2plY3QpIHtcclxuICAgICAgY29uc3QgZGF0YSA9IGRiLmNvbGxlY3Rpb24oJ3Byb2plY3RzJykud2hlcmUoJ3VpZCcsICc9PScsIHVzZXJVaWQpO1xyXG4gICAgICBkYXRhXHJcbiAgICAgICAgLndoZXJlKCdwcm9qZWN0TmFtZScsICc9PScsIHJvdXRlci5xdWVyeS5wcm9qZWN0KVxyXG4gICAgICAgIC5nZXQoKVxyXG4gICAgICAgIC50aGVuKChxdWVyeVNuYXBzaG90KSA9PiB7XHJcbiAgICAgICAgICBxdWVyeVNuYXBzaG90LmZvckVhY2goYXN5bmMgKGRvYzEpID0+IHtcclxuICAgICAgICAgICAgZGIuY29sbGVjdGlvbigncHJvamVjdHMnKVxyXG4gICAgICAgICAgICAgIC5kb2MoZG9jMS5kYXRhKCkucHJvamVjdElkKVxyXG4gICAgICAgICAgICAgIC5jb2xsZWN0aW9uKCdzdGFydHVwSWRlYScpXHJcbiAgICAgICAgICAgICAgLmRvYyhyb3V0ZXIucXVlcnkucHJvamVjdClcclxuICAgICAgICAgICAgICAuY29sbGVjdGlvbignaW5wdXRzJylcclxuICAgICAgICAgICAgICAub25TbmFwc2hvdCgoc2VydmVyVXBkYXRlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXJ2ZXJVcGRhdGUuZG9jcy5tYXAoKGRvYykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gZG9jLmRhdGEoKTtcclxuICAgICAgICAgICAgICAgICAgc2V0RmlsbGVkU2VjdGlvbihkYXRhLmZpbGxlZFNlY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgICBzZXRGaWxsZWRTZWN0aW9uMShkYXRhLmZpbGxlZFNlY3Rpb24xKTtcclxuICAgICAgICAgICAgICAgICAgc2V0RmlsbGVkU2VjdGlvbjIoZGF0YS5maWxsZWRTZWN0aW9uMik7XHJcbiAgICAgICAgICAgICAgICAgIHNldEZpbGxlZFNlY3Rpb24zKGRhdGEuZmlsbGVkU2VjdGlvbjMpO1xyXG4gICAgICAgICAgICAgICAgICBzZXRGaWxsZWRTZWN0aW9uNChkYXRhLmZpbGxlZFNlY3Rpb240KTtcclxuICAgICAgICAgICAgICAgICAgc2V0TG9hZGluZ0hlbHBlcih0cnVlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSwgW2xvYWRpbmdIZWxwZXIsIHJvdXRlci5xdWVyeS5wcm9qZWN0XSk7XHJcblxyXG4gIGNvbnNvbGUubG9nKCdvcGFjaXR5IC0gJywgb25Mb2FkT3BhY2l0eSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICAvLyA8PlxyXG4gICAgLy8gICB7ZmlsbGVkU2VjdGlvbnMgJiYgKFxyXG4gICAgPGRpdiByZWY9e2NvbnRhaW5lclJlZn0gY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXQtMTIgbWItMTJcIj5cclxuICAgICAgPHVsIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayB3LTEvNSByZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgPEltYWdlIHNyYz1cIi9wbGFjZXMvZGVzZXJ0LnN2Z1wiIGhlaWdodD17NzV9IHdpZHRoPXs3NX0gY2xhc3NOYW1lPXtgJHtvbkxvYWRPcGFjaXR5ID8gJ29wYWNpdHktMTAwJyA6ICdvcGFjaXR5LTUwJ31gfSAvPlxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICA8RGl2Q29tcG9uZW50IGZpbGxlZFNlY3Rpb249e2ZpbGxlZFNlY3Rpb259PlxyXG4gICAgICAgICAgICB7LyogPHAgY2xhc3NOYW1lPSdtLWF1dG8gbWF4LXctbWluIHRleHQtMnhsIGJnLXRyYW5zcGFyZW50Jz7im4g8L3A+ICovfVxyXG4gICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICBzcmM9e2AvcHJvZ3Jlc3MvJHtmaWxsZWRTZWN0aW9uID8gJ2NoZWNrJyA6ICdyZW1vdmUnfS5zdmdgfVxyXG4gICAgICAgICAgICAgIGhlaWdodD17MzJ9XHJcbiAgICAgICAgICAgICAgd2lkdGg9ezMyfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7b25Mb2FkT3BhY2l0eSA/ICdvcGFjaXR5LTEwMCcgOiAnb3BhY2l0eS01MCd9YH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgey8qIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD0nMjRweCdcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPScyNHB4J1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdtLWF1dG8gYmctYmFja2dyb3VuZCBib3JkZXIgYm9yZGVyLXJlZCByb3VuZGVkLWZ1bGwgcC0xLjUnXHJcbiAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj0ndHJ1ZSdcclxuICAgICAgICAgICAgICAgICAgICAgIGZvY3VzYWJsZT0nZmFsc2UnXHJcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhLXByZWZpeD0nZmFzJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YS1pY29uPSd0aW1lcydcclxuICAgICAgICAgICAgICAgICAgICAgIHJvbGU9J2ltZydcclxuICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcclxuICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9JzAgMCAzNTIgNTEyJ1xyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9J2N1cnJlbnRDb2xvcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgZD0nTTI0Mi43MiAyNTZsMTAwLjA3LTEwMC4wN2MxMi4yOC0xMi4yOCAxMi4yOC0zMi4xOSAwLTQ0LjQ4bC0yMi4yNC0yMi4yNGMtMTIuMjgtMTIuMjgtMzIuMTktMTIuMjgtNDQuNDggMEwxNzYgMTg5LjI4IDc1LjkzIDg5LjIxYy0xMi4yOC0xMi4yOC0zMi4xOS0xMi4yOC00NC40OCAwTDkuMjEgMTExLjQ1Yy0xMi4yOCAxMi4yOC0xMi4yOCAzMi4xOSAwIDQ0LjQ4TDEwOS4yOCAyNTYgOS4yMSAzNTYuMDdjLTEyLjI4IDEyLjI4LTEyLjI4IDMyLjE5IDAgNDQuNDhsMjIuMjQgMjIuMjRjMTIuMjggMTIuMjggMzIuMiAxMi4yOCA0NC40OCAwTDE3NiAzMjIuNzJsMTAwLjA3IDEwMC4wN2MxMi4yOCAxMi4yOCAzMi4yIDEyLjI4IDQ0LjQ4IDBsMjIuMjQtMjIuMjRjMTIuMjgtMTIuMjggMTIuMjgtMzIuMTkgMC00NC40OEwyNDIuNzIgMjU2eidcclxuICAgICAgICAgICAgICAgICAgICAgID48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+ICovfVxyXG4gICAgICAgICAgICB7LyogPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PScyNHB4J1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg9JzI0cHgnXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J20tYXV0byBiZy1iYWNrZ3JvdW5kIGJvcmRlciBib3JkZXItZ3JheSByb3VuZGVkLWZ1bGwgcC0xLjUnXHJcbiAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj0ndHJ1ZSdcclxuICAgICAgICAgICAgICAgICAgICAgIGZvY3VzYWJsZT0nZmFsc2UnXHJcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhLXByZWZpeD0nZmFzJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YS1pY29uPSdjaGVjaydcclxuICAgICAgICAgICAgICAgICAgICAgIHJvbGU9J2ltZydcclxuICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcclxuICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9JzAgMCA1MTIgNTEyJ1xyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9J2N1cnJlbnRDb2xvcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgZD0nTTE3My44OTggNDM5LjQwNGwtMTY2LjQtMTY2LjRjLTkuOTk3LTkuOTk3LTkuOTk3LTI2LjIwNiAwLTM2LjIwNGwzNi4yMDMtMzYuMjA0YzkuOTk3LTkuOTk4IDI2LjIwNy05Ljk5OCAzNi4yMDQgMEwxOTIgMzEyLjY5IDQzMi4wOTUgNzIuNTk2YzkuOTk3LTkuOTk3IDI2LjIwNy05Ljk5NyAzNi4yMDQgMGwzNi4yMDMgMzYuMjA0YzkuOTk3IDkuOTk3IDkuOTk3IDI2LjIwNiAwIDM2LjIwNGwtMjk0LjQgMjk0LjQwMWMtOS45OTggOS45OTctMjYuMjA3IDkuOTk3LTM2LjIwNC0uMDAxeidcclxuICAgICAgICAgICAgICAgICAgICAgID48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+ICovfVxyXG4gICAgICAgICAgPC9EaXZDb21wb25lbnQ+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9e2Ake29uTG9hZE9wYWNpdHkgPyAnb3BhY2l0eS0xMDAnIDogJ29wYWNpdHktNTAnfSB0ZXh0LXByaW1hcnlkYXJrIGRhcms6dGV4dC1iYWNrZ3JvdW5kYH0+VmlzaW9uPC9wPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayB3LTEvNSByZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgPEltYWdlIHNyYz1cIi9wbGFjZXMvd2FsbC5zdmdcIiBoZWlnaHQ9ezc1fSB3aWR0aD17NzV9IGNsYXNzTmFtZT17YCR7b25Mb2FkT3BhY2l0eTEgPyAnb3BhY2l0eS0xMDAnIDogJ29wYWNpdHktNTAnfWB9IC8+XHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIDxEaXZDb21wb25lbnQxIGZpbGxlZFNlY3Rpb24xPXtmaWxsZWRTZWN0aW9uMX0+XHJcbiAgICAgICAgICAgIHsvKiA8cCBjbGFzc05hbWU9J20tYXV0byBtYXgtdy1taW4gdGV4dC0yeGwgYmctdHJhbnNwYXJlbnQgb3BhY2l0eS01MCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICDwn4ynXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPiAqL31cclxuICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgc3JjPXtgL3Byb2dyZXNzLyR7ZmlsbGVkU2VjdGlvbjEgPyAnY2hlY2snIDogJ3JlbW92ZSd9LnN2Z2B9XHJcbiAgICAgICAgICAgICAgaGVpZ2h0PXszMn1cclxuICAgICAgICAgICAgICB3aWR0aD17MzJ9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtvbkxvYWRPcGFjaXR5MSA/ICdvcGFjaXR5LTEwMCcgOiAnb3BhY2l0eS01MCd9YH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgey8qIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD0nMjRweCdcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPScyNHB4J1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdtLWF1dG8gYmctYmFja2dyb3VuZCBib3JkZXIgYm9yZGVyLXByaW1hcnkgcm91bmRlZC1mdWxsIHAtMS41J1xyXG4gICAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49J3RydWUnXHJcbiAgICAgICAgICAgICAgICAgICAgICBmb2N1c2FibGU9J2ZhbHNlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YS1wcmVmaXg9J2ZhcydcclxuICAgICAgICAgICAgICAgICAgICAgIGRhdGEtaWNvbj0nY2hlY2snXHJcbiAgICAgICAgICAgICAgICAgICAgICByb2xlPSdpbWcnXHJcbiAgICAgICAgICAgICAgICAgICAgICB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXHJcbiAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PScwIDAgNTEyIDUxMidcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsPSdjdXJyZW50Q29sb3InXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGQ9J00xNzMuODk4IDQzOS40MDRsLTE2Ni40LTE2Ni40Yy05Ljk5Ny05Ljk5Ny05Ljk5Ny0yNi4yMDYgMC0zNi4yMDRsMzYuMjAzLTM2LjIwNGM5Ljk5Ny05Ljk5OCAyNi4yMDctOS45OTggMzYuMjA0IDBMMTkyIDMxMi42OSA0MzIuMDk1IDcyLjU5NmM5Ljk5Ny05Ljk5NyAyNi4yMDctOS45OTcgMzYuMjA0IDBsMzYuMjAzIDM2LjIwNGM5Ljk5NyA5Ljk5NyA5Ljk5NyAyNi4yMDYgMCAzNi4yMDRsLTI5NC40IDI5NC40MDFjLTkuOTk4IDkuOTk3LTI2LjIwNyA5Ljk5Ny0zNi4yMDQtLjAwMXonXHJcbiAgICAgICAgICAgICAgICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPiAqL31cclxuICAgICAgICAgIDwvRGl2Q29tcG9uZW50MT5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17YCR7b25Mb2FkT3BhY2l0eTEgPyAnb3BhY2l0eS0xMDAnIDogJ29wYWNpdHktNTAnfSB0ZXh0LXByaW1hcnlkYXJrIGRhcms6dGV4dC1iYWNrZ3JvdW5kYH0+UHJvZHVjdDwvcD5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgdy0xLzUgcmVsYXRpdmVcIj5cclxuICAgICAgICAgIDxJbWFnZSBzcmM9XCIvcGxhY2VzL3NlYS5zdmdcIiBoZWlnaHQ9ezc1fSB3aWR0aD17NzV9IGNsYXNzTmFtZT17YCR7b25Mb2FkT3BhY2l0eTIgPyAnb3BhY2l0eS0xMDAnIDogJ29wYWNpdHktNTAnfWB9IC8+XHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIDxEaXZDb21wb25lbnQyIGZpbGxlZFNlY3Rpb24yPXtmaWxsZWRTZWN0aW9uMn0+XHJcbiAgICAgICAgICAgIHsvKiA8cCBjbGFzc05hbWU9J20tYXV0byBtYXgtdy1taW4gdGV4dC0yeGwgYmctdHJhbnNwYXJlbnQgb3BhY2l0eS01MCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICDimIHvuI9cclxuICAgICAgICAgICAgICAgICAgICA8L3A+ICovfVxyXG4gICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICBzcmM9e2AvcHJvZ3Jlc3MvJHtmaWxsZWRTZWN0aW9uMiA/ICdjaGVjaycgOiAncmVtb3ZlJ30uc3ZnYH1cclxuICAgICAgICAgICAgICBoZWlnaHQ9ezMyfVxyXG4gICAgICAgICAgICAgIHdpZHRoPXszMn1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake29uTG9hZE9wYWNpdHkyID8gJ29wYWNpdHktMTAwJyA6ICdvcGFjaXR5LTUwJ31gfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB7LyogPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PScyNHB4J1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg9JzI0cHgnXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J20tYXV0byBiZy1iYWNrZ3JvdW5kIGJvcmRlciBib3JkZXItcHJpbWFyeSByb3VuZGVkLWZ1bGwgcC0xLjUnXHJcbiAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj0ndHJ1ZSdcclxuICAgICAgICAgICAgICAgICAgICAgIGZvY3VzYWJsZT0nZmFsc2UnXHJcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhLXByZWZpeD0nZmFzJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YS1pY29uPSdjaGVjaydcclxuICAgICAgICAgICAgICAgICAgICAgIHJvbGU9J2ltZydcclxuICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcclxuICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9JzAgMCA1MTIgNTEyJ1xyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9J2N1cnJlbnRDb2xvcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgZD0nTTE3My44OTggNDM5LjQwNGwtMTY2LjQtMTY2LjRjLTkuOTk3LTkuOTk3LTkuOTk3LTI2LjIwNiAwLTM2LjIwNGwzNi4yMDMtMzYuMjA0YzkuOTk3LTkuOTk4IDI2LjIwNy05Ljk5OCAzNi4yMDQgMEwxOTIgMzEyLjY5IDQzMi4wOTUgNzIuNTk2YzkuOTk3LTkuOTk3IDI2LjIwNy05Ljk5NyAzNi4yMDQgMGwzNi4yMDMgMzYuMjA0YzkuOTk3IDkuOTk3IDkuOTk3IDI2LjIwNiAwIDM2LjIwNGwtMjk0LjQgMjk0LjQwMWMtOS45OTggOS45OTctMjYuMjA3IDkuOTk3LTM2LjIwNC0uMDAxeidcclxuICAgICAgICAgICAgICAgICAgICAgID48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+ICovfVxyXG4gICAgICAgICAgPC9EaXZDb21wb25lbnQyPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtgJHtvbkxvYWRPcGFjaXR5MiA/ICdvcGFjaXR5LTEwMCcgOiAnb3BhY2l0eS01MCd9IHRleHQtcHJpbWFyeWRhcmsgZGFyazp0ZXh0LWJhY2tncm91bmRgfT5NYXJrZXQ8L3A+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHctMS81IHJlbGF0aXZlXCI+XHJcbiAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL3BsYWNlcy9hbXN0ZXJkYW0uc3ZnXCIgaGVpZ2h0PXs3NX0gd2lkdGg9ezc1fSBjbGFzc05hbWU9e2Ake29uTG9hZE9wYWNpdHkzID8gJ29wYWNpdHktMTAwJyA6ICdvcGFjaXR5LTUwJ31gfSAvPlxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICA8RGl2Q29tcG9uZW50MyBmaWxsZWRTZWN0aW9uMz17ZmlsbGVkU2VjdGlvbjN9PlxyXG4gICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9J20tYXV0byBtYXgtdy1taW4gdGV4dC0yeGwgYmctdHJhbnNwYXJlbnQgb3BhY2l0eS01MCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICDim4XvuI9cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgIHNyYz17YC9wcm9ncmVzcy8ke2ZpbGxlZFNlY3Rpb24zID8gJ2NoZWNrJyA6ICdyZW1vdmUnfS5zdmdgfVxyXG4gICAgICAgICAgICAgIGhlaWdodD17MzJ9XHJcbiAgICAgICAgICAgICAgd2lkdGg9ezMyfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7b25Mb2FkT3BhY2l0eTMgPyAnb3BhY2l0eS0xMDAnIDogJ29wYWNpdHktNTAnfWB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIHsvKiA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9JzI0cHgnXHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aD0nMjRweCdcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nbS1hdXRvIGJnLWJhY2tncm91bmQgYm9yZGVyIGJvcmRlci1wcmltYXJ5IHJvdW5kZWQtZnVsbCBwLTEuNSdcclxuICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPSd0cnVlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgZm9jdXNhYmxlPSdmYWxzZSdcclxuICAgICAgICAgICAgICAgICAgICAgIGRhdGEtcHJlZml4PSdmYXMnXHJcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhLWljb249J2NoZWNrJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgcm9sZT0naW1nJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgdmlld0JveD0nMCAwIDUxMiA1MTInXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD0nY3VycmVudENvbG9yJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkPSdNMTczLjg5OCA0MzkuNDA0bC0xNjYuNC0xNjYuNGMtOS45OTctOS45OTctOS45OTctMjYuMjA2IDAtMzYuMjA0bDM2LjIwMy0zNi4yMDRjOS45OTctOS45OTggMjYuMjA3LTkuOTk4IDM2LjIwNCAwTDE5MiAzMTIuNjkgNDMyLjA5NSA3Mi41OTZjOS45OTctOS45OTcgMjYuMjA3LTkuOTk3IDM2LjIwNCAwbDM2LjIwMyAzNi4yMDRjOS45OTcgOS45OTcgOS45OTcgMjYuMjA2IDAgMzYuMjA0bC0yOTQuNCAyOTQuNDAxYy05Ljk5OCA5Ljk5Ny0yNi4yMDcgOS45OTctMzYuMjA0LS4wMDF6J1xyXG4gICAgICAgICAgICAgICAgICAgICAgPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz4gKi99XHJcbiAgICAgICAgICA8L0RpdkNvbXBvbmVudDM+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9e2Ake29uTG9hZE9wYWNpdHkzID8gJ29wYWNpdHktMTAwJyA6ICdvcGFjaXR5LTUwJ30gdGV4dC1wcmltYXJ5ZGFyayBkYXJrOnRleHQtYmFja2dyb3VuZGB9PkZpbmFuY2VzPC9wPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayB3LTEvNSByZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgPEltYWdlIHNyYz1cIi9wbGFjZXMvcGlyYXRlLnN2Z1wiIGhlaWdodD17NzV9IHdpZHRoPXs3NX0gY2xhc3NOYW1lPXtgJHtvbkxvYWRPcGFjaXR5NCA/ICdvcGFjaXR5LTEwMCcgOiAnb3BhY2l0eS01MCd9YH0gLz5cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgPERpdkNvbXBvbmVudDQgZmlsbGVkU2VjdGlvbjQ9e2ZpbGxlZFNlY3Rpb240fT5cclxuICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPSdtLWF1dG8gbWF4LXctbWluIHRleHQtMnhsIGJnLXRyYW5zcGFyZW50IG9wYWNpdHktNTAnPlxyXG4gICAgICAgICAgICAgICAgICAgICAg4puF77iPXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICBzcmM9e2AvcHJvZ3Jlc3MvJHtmaWxsZWRTZWN0aW9uNCA/ICdjaGVjaycgOiAncmVtb3ZlJ30uc3ZnYH1cclxuICAgICAgICAgICAgICBoZWlnaHQ9ezMyfVxyXG4gICAgICAgICAgICAgIHdpZHRoPXszMn1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake29uTG9hZE9wYWNpdHk0ID8gJ29wYWNpdHktMTAwJyA6ICdvcGFjaXR5LTUwJ31gfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB7LyogPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PScyNHB4J1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg9JzI0cHgnXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J20tYXV0byBiZy1iYWNrZ3JvdW5kIGJvcmRlciBib3JkZXItcHJpbWFyeSByb3VuZGVkLWZ1bGwgcC0xLjUnXHJcbiAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj0ndHJ1ZSdcclxuICAgICAgICAgICAgICAgICAgICAgIGZvY3VzYWJsZT0nZmFsc2UnXHJcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhLXByZWZpeD0nZmFzJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YS1pY29uPSdjaGVjaydcclxuICAgICAgICAgICAgICAgICAgICAgIHJvbGU9J2ltZydcclxuICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcclxuICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9JzAgMCA1MTIgNTEyJ1xyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9J2N1cnJlbnRDb2xvcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgZD0nTTE3My44OTggNDM5LjQwNGwtMTY2LjQtMTY2LjRjLTkuOTk3LTkuOTk3LTkuOTk3LTI2LjIwNiAwLTM2LjIwNGwzNi4yMDMtMzYuMjA0YzkuOTk3LTkuOTk4IDI2LjIwNy05Ljk5OCAzNi4yMDQgMEwxOTIgMzEyLjY5IDQzMi4wOTUgNzIuNTk2YzkuOTk3LTkuOTk3IDI2LjIwNy05Ljk5NyAzNi4yMDQgMGwzNi4yMDMgMzYuMjA0YzkuOTk3IDkuOTk3IDkuOTk3IDI2LjIwNiAwIDM2LjIwNGwtMjk0LjQgMjk0LjQwMWMtOS45OTggOS45OTctMjYuMjA3IDkuOTk3LTM2LjIwNC0uMDAxeidcclxuICAgICAgICAgICAgICAgICAgICAgID48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+ICovfVxyXG4gICAgICAgICAgPC9EaXZDb21wb25lbnQ0PlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtgJHtvbkxvYWRPcGFjaXR5NCA/ICdvcGFjaXR5LTEwMCcgOiAnb3BhY2l0eS01MCd9IHRleHQtcHJpbWFyeWRhcmsgZGFyazp0ZXh0LWJhY2tncm91bmRgfT5Nb2RlbDwvcD5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9kaXY+XHJcbiAgICAvLyAgICl9XHJcbiAgICAvLyA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZ3Jlc3NCYXI7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IGRiIH0gZnJvbSAnLi4vLi4vLi4vbGliL2ZpcmViYXNlJztcclxuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gJy4uLy4uLy4uL2xpYi9uZXdBdXRoJztcclxuaW1wb3J0IFByb2dyZXNzQmFyIGZyb20gJy4vUHJvZ3Jlc3NCYXInO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBnc2FwLCB7IFBvd2VyNCwgTGluZWFyIH0gZnJvbSAnZ3NhcCc7XHJcbmltcG9ydCBUaXBweU1vbnN0ZXIgZnJvbSAnLi4vVGlwcHknO1xyXG5pbXBvcnQgTmF2YmFyVGVtcGxhdGUgZnJvbSAnLi4vTmF2YmFyVGVtcGxhdGUnO1xyXG5pbXBvcnQgVGlwcHlHdWlkZSBmcm9tICcuL1RpcHB5R3VpZGUnO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnO1xyXG5pbXBvcnQgRXhpdENvbXBvbmVudCBmcm9tICcuL0V4aXRDb21wb25lbnQnO1xyXG5cclxuY29uc3QgU3RhcnR1cFByb2R1Y3RNb2RhbCA9ICgpID0+IHtcclxuICBjb25zdCBbcHJvamVjdElkLCBzZXRQcm9qZWN0SWRdID0gdXNlU3RhdGUoKTtcclxuXHJcbiAgY29uc3QgW29uTG9hZE9wYWNpdHk0LCBzZXRPbkxvYWRPcGFjaXR5NF0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgLy8gT1ZFUlZJRVdcclxuICBjb25zdCBbbWFya2V0UHJvYmxlbVNlY3Rpb24sIHNldE1hcmtldFByb2JsZW1TZWN0aW9uXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbbWFya2V0U29sdXRpb25TZWN0aW9uLCBzZXRNYXJrZXRTb2x1dGlvblNlY3Rpb25dID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtmb3VuZGVyc1NlY3Rpb24sIHNldEZvdW5kZXJzU2VjdGlvbl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgLy8gUFJPRFVDVFxyXG4gIGNvbnN0IFtwcm9kdWN0T3ZlcnZpZXdTZWN0aW9uLCBzZXRQcm9kdWN0T3ZlcnZpZXdTZWN0aW9uXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbcHJvZHVjdFByb21vdGlvblNlY3Rpb24sIHNldFByb2R1Y3RQcm9tb3Rpb25TZWN0aW9uXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbcHJvZHVjdEJlbmVmaXRzU2VjdGlvbiwgc2V0UHJvZHVjdEJlbmVmaXRzU2VjdGlvbl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgLy8gTUFSS0VUXHJcbiAgY29uc3QgW21hcmtldE92ZXJ2aWV3U2VjdGlvbiwgc2V0TWFya2V0T3ZlcnZpZXdTZWN0aW9uXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbY29tcGV0aXRvcnNTZWN0aW9uLCBzZXRDb21wZXRpdG9yc1NlY3Rpb25dID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFt0YXJnZXRDdXN0b21lcnNTZWN0aW9uLCBzZXRUYXJnZXRDdXN0b21lcnNTZWN0aW9uXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbY29tcGV0aXRpb25EaXN0aW5ndWlzaFNlY3Rpb24sIHNldENvbXBldGl0aW9uRGlzdGluZ3Vpc2hTZWN0aW9uXSA9IHVzZVN0YXRlKCcnKTtcclxuICAvLyBGSU5BTkNFU1xyXG4gIGNvbnN0IFtzdGFydHVwQ29zdHNTZWN0aW9uLCBzZXRTdGFydHVwQ29zdHNTZWN0aW9uXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbcnVubmluZ0Nvc3RzU2VjdGlvbiwgc2V0UnVubmluZ0Nvc3RzU2VjdGlvbl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2ZpbmFuY2luZ1NlY3Rpb24sIHNldEZpbmFuY2luZ1NlY3Rpb25dID0gdXNlU3RhdGUoJycpO1xyXG4gIC8vIEJVU0lORVNTIE1PREVMXHJcbiAgY29uc3QgW2J1c2luZXNzTW9kZWxPdmVydmlld1NlY3Rpb24sIHNldEJ1c2luZXNzTW9kZWxPdmVydmlld1NlY3Rpb25dID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtidXNpbmVzc0dyb3dTZWN0aW9uLCBzZXRCdXNpbmVzc0dyb3dTZWN0aW9uXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbd2h5U3VjY2Vzc1NlY3Rpb24sIHNldFdoeVN1Y2Nlc3NTZWN0aW9uXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgY29uc3QgeyBjdXJyZW50VXNlciB9ID0gdXNlQXV0aCgpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IGNvbnRlbnRSZWYgPSB1c2VSZWYoKTtcclxuXHJcbiAgLy8gVElQUFlcclxuICBjb25zdCBbdGlwcHlNb25zdGVyLCBzZXRUaXBweU1vbnN0ZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtjdXJyZW50VGlwcHksIHNldEN1cnJlbnRUaXBweV0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgY29uc29sZS5sb2coJ2J1c2luZXNzIG1vZGVsIC0gJywgYnVzaW5lc3NNb2RlbE92ZXJ2aWV3U2VjdGlvbik7XHJcbiAgY29uc29sZS5sb2coJ2J1c2luZXNzIGdyb3cgLSAnLCBidXNpbmVzc0dyb3dTZWN0aW9uKTtcclxuICBjb25zb2xlLmxvZygnYnVzaW5lc3Mgc3VjY2VzcyAtICcsIHdoeVN1Y2Nlc3NTZWN0aW9uKTtcclxuXHJcbiAgY29uc3Qgb25TdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKFxyXG4gICAgICAvLyBPVkVSVklFV1xyXG4gICAgICAhbWFya2V0UHJvYmxlbVNlY3Rpb24gfHxcclxuICAgICAgIW1hcmtldFNvbHV0aW9uU2VjdGlvbiB8fFxyXG4gICAgICAhZm91bmRlcnNTZWN0aW9uIHx8XHJcbiAgICAgIC8vIFBST0RVQ1RcclxuICAgICAgIXByb2R1Y3RPdmVydmlld1NlY3Rpb24gfHxcclxuICAgICAgIXByb2R1Y3RQcm9tb3Rpb25TZWN0aW9uIHx8XHJcbiAgICAgICFwcm9kdWN0QmVuZWZpdHNTZWN0aW9uIHx8XHJcbiAgICAgIC8vIE1BUktFVFxyXG4gICAgICAhbWFya2V0T3ZlcnZpZXdTZWN0aW9uIHx8XHJcbiAgICAgICFjb21wZXRpdG9yc1NlY3Rpb24gfHxcclxuICAgICAgIXRhcmdldEN1c3RvbWVyc1NlY3Rpb24gfHxcclxuICAgICAgIWNvbXBldGl0aW9uRGlzdGluZ3Vpc2hTZWN0aW9uIHx8XHJcbiAgICAgIC8vIEZJTkFOQ0VTXHJcbiAgICAgICFzdGFydHVwQ29zdHNTZWN0aW9uIHx8XHJcbiAgICAgICFydW5uaW5nQ29zdHNTZWN0aW9uIHx8XHJcbiAgICAgICFmaW5hbmNpbmdTZWN0aW9uIHx8XHJcbiAgICAgIC8vIEJVU0lORVNTIE1PREVMXHJcbiAgICAgICFidXNpbmVzc01vZGVsT3ZlcnZpZXdTZWN0aW9uIHx8XHJcbiAgICAgICFidXNpbmVzc0dyb3dTZWN0aW9uIHx8XHJcbiAgICAgICF3aHlTdWNjZXNzU2VjdGlvbiB8fFxyXG4gICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAvLyBPVkVSVklFV1xyXG4gICAgICBtYXJrZXRQcm9ibGVtU2VjdGlvbiA9PSAnYmxhbmsnIHx8XHJcbiAgICAgIG1hcmtldFNvbHV0aW9uU2VjdGlvbiA9PSAnYmxhbmsnIHx8XHJcbiAgICAgIGZvdW5kZXJzU2VjdGlvbiA9PSAnYmxhbmsnIHx8XHJcbiAgICAgIC8vIFBST0RVQ1RcclxuICAgICAgcHJvZHVjdE92ZXJ2aWV3U2VjdGlvbiA9PSAnYmxhbmsnIHx8XHJcbiAgICAgIHByb2R1Y3RQcm9tb3Rpb25TZWN0aW9uID09ICdibGFuaycgfHxcclxuICAgICAgcHJvZHVjdEJlbmVmaXRzU2VjdGlvbiA9PSAnYmxhbmsnIHx8XHJcbiAgICAgIC8vIE1BUktFVFxyXG4gICAgICBtYXJrZXRPdmVydmlld1NlY3Rpb24gPT0gJ2JsYW5rJyB8fFxyXG4gICAgICBjb21wZXRpdG9yc1NlY3Rpb24gPT0gJ2JsYW5rJyB8fFxyXG4gICAgICB0YXJnZXRDdXN0b21lcnNTZWN0aW9uID09ICdibGFuaycgfHxcclxuICAgICAgY29tcGV0aXRpb25EaXN0aW5ndWlzaFNlY3Rpb24gPT0gJ2JsYW5rJyB8fFxyXG4gICAgICAvLyBGSU5BTkNFU1xyXG4gICAgICBzdGFydHVwQ29zdHNTZWN0aW9uID09ICdibGFuaycgfHxcclxuICAgICAgcnVubmluZ0Nvc3RzU2VjdGlvbiA9PSAnYmxhbmsnIHx8XHJcbiAgICAgIGZpbmFuY2luZ1NlY3Rpb24gPT0gJ2JsYW5rJyB8fFxyXG4gICAgICAvLyBCVVNJTkVTUyBNT0RFTFxyXG4gICAgICBidXNpbmVzc01vZGVsT3ZlcnZpZXdTZWN0aW9uID09ICdibGFuaycgfHxcclxuICAgICAgYnVzaW5lc3NHcm93U2VjdGlvbiA9PSAnYmxhbmsnIHx8XHJcbiAgICAgIHdoeVN1Y2Nlc3NTZWN0aW9uID09ICdibGFuaydcclxuICAgICkge1xyXG4gICAgICBpZiAoY3VycmVudFRpcHB5KSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAhdGlwcHlNb25zdGVyICYmIHNldFRpcHB5TW9uc3Rlcih0cnVlKTtcclxuICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgIXRpcHB5TW9uc3RlciAmJiBzZXRUaXBweU1vbnN0ZXIodHJ1ZSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBnc2FwLnRvKGNvbnRlbnRSZWYuY3VycmVudCwge1xyXG4gICAgICBhdXRvQWxwaGE6IDAsXHJcbiAgICAgIGR1cmF0aW9uOiAxLFxyXG4gICAgICBlYXNlOiBMaW5lYXIuZWFzZU91dCxcclxuICAgIH0pO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHJvdXRlci5wdXNoKGAvZGFzaGJvYXJkL3Byb2plY3RzLyR7cm91dGVyLnF1ZXJ5LnByb2plY3R9L3N0YXJ0dXAtaWRlYS9zdWNjZXNzYCk7XHJcbiAgICB9LCAxMjAwKTtcclxuXHJcbiAgICBhd2FpdCBkYlxyXG4gICAgICAuY29sbGVjdGlvbigncHJvamVjdHMnKVxyXG4gICAgICAuZG9jKHByb2plY3RJZClcclxuICAgICAgLmNvbGxlY3Rpb24oJ3N0YXJ0dXBJZGVhJylcclxuICAgICAgLmRvYyhyb3V0ZXIucXVlcnkucHJvamVjdClcclxuICAgICAgLmNvbGxlY3Rpb24oJ2lucHV0cycpXHJcbiAgICAgIC5kb2MoZG9jdW1lbnRJZClcclxuICAgICAgLnNldChcclxuICAgICAgICB7XHJcbiAgICAgICAgICBidXNpbmVzc01vZGVsT3ZlcnZpZXdTZWN0aW9uRGF0YSxcclxuICAgICAgICAgIGJ1c2luZXNzR3Jvd1NlY3Rpb25EYXRhLFxyXG4gICAgICAgICAgd2h5U3VjY2Vzc1NlY3Rpb25EYXRhLFxyXG4gICAgICAgICAgZmlsbGVkU2VjdGlvbjQ6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7IG1lcmdlOiB0cnVlIH1cclxuICAgICAgKTtcclxuICAgIHJldHVybjtcclxuICB9O1xyXG5cclxuICAvLyBEYXRhIGZldGNoXHJcbiAgY29uc3QgW2xvYWRpbmdIZWxwZXIsIHNldExvYWRpbmdIZWxwZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtkb2N1bWVudElkLCBzZXREb2N1bWVudElkXSA9IHVzZVN0YXRlKCcnKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdXNlclVpZCA9IENvb2tpZXMuZ2V0KCd1aWQnKTtcclxuICAgIGdzYXAuZnJvbVRvKGNvbnRlbnRSZWYuY3VycmVudCwgeyBhdXRvQWxwaGE6IDAgfSwgeyBhdXRvQWxwaGE6IDEsIGR1cmF0aW9uOiAxLCBlYXNlOiBMaW5lYXIuZWFzZUluIH0pO1xyXG4gICAgaWYgKHVzZXJVaWQgJiYgcm91dGVyLnF1ZXJ5LnByb2plY3QpIHtcclxuICAgICAgY29uc3QgZGF0YSA9IGRiLmNvbGxlY3Rpb24oJ3Byb2plY3RzJykud2hlcmUoJ3VpZCcsICc9PScsIHVzZXJVaWQpO1xyXG4gICAgICBkYXRhXHJcbiAgICAgICAgLndoZXJlKCdwcm9qZWN0TmFtZScsICc9PScsIHJvdXRlci5xdWVyeS5wcm9qZWN0KVxyXG4gICAgICAgIC5nZXQoKVxyXG4gICAgICAgIC50aGVuKChxdWVyeVNuYXBzaG90KSA9PiB7XHJcbiAgICAgICAgICBxdWVyeVNuYXBzaG90LmZvckVhY2goYXN5bmMgKGRvYzEpID0+IHtcclxuICAgICAgICAgICAgc2V0UHJvamVjdElkKGRvYzEuZGF0YSgpLnByb2plY3RJZCk7XHJcblxyXG4gICAgICAgICAgICBkYi5jb2xsZWN0aW9uKCdwcm9qZWN0cycpXHJcbiAgICAgICAgICAgICAgLmRvYyhkb2MxLmRhdGEoKS5wcm9qZWN0SWQpXHJcbiAgICAgICAgICAgICAgLmNvbGxlY3Rpb24oJ3N0YXJ0dXBJZGVhJylcclxuICAgICAgICAgICAgICAuZG9jKHJvdXRlci5xdWVyeS5wcm9qZWN0KVxyXG4gICAgICAgICAgICAgIC5jb2xsZWN0aW9uKCdpbnB1dHMnKVxyXG4gICAgICAgICAgICAgIC5vblNuYXBzaG90KChzZXJ2ZXJVcGRhdGUpID0+IHtcclxuICAgICAgICAgICAgICAgIHNlcnZlclVwZGF0ZS5kb2NzLm1hcCgoZG9jKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRvYy5kYXRhKCkpO1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gZG9jLmRhdGEoKTtcclxuICAgICAgICAgICAgICAgICAgc2V0RG9jdW1lbnRJZChkb2MuaWQpO1xyXG4gICAgICAgICAgICAgICAgICBzZXRQcm9qZWN0SWQoZGF0YS5wcm9qZWN0SWQpO1xyXG4gICAgICAgICAgICAgICAgICAvLyBPVkVSVklFVztcclxuICAgICAgICAgICAgICAgICAgc2V0TWFya2V0UHJvYmxlbVNlY3Rpb24oZGF0YS5tYXJrZXRQcm9ibGVtU2VjdGlvbkRhdGEpLFxyXG4gICAgICAgICAgICAgICAgICAgIHNldE1hcmtldFNvbHV0aW9uU2VjdGlvbihkYXRhLm1hcmtldFNvbHV0aW9uU2VjdGlvbkRhdGEpLFxyXG4gICAgICAgICAgICAgICAgICAgIHNldEZvdW5kZXJzU2VjdGlvbihkYXRhLmZvdW5kZXJzU2VjdGlvbkRhdGEpLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFBST0RVQ1RcclxuICAgICAgICAgICAgICAgICAgICBzZXRQcm9kdWN0T3ZlcnZpZXdTZWN0aW9uKGRhdGEucHJvZHVjdE92ZXJ2aWV3U2VjdGlvbkRhdGEpLFxyXG4gICAgICAgICAgICAgICAgICAgIHNldFByb2R1Y3RQcm9tb3Rpb25TZWN0aW9uKGRhdGEucHJvZHVjdFByb21vdGlvblNlY3Rpb25EYXRhKSxcclxuICAgICAgICAgICAgICAgICAgICBzZXRQcm9kdWN0QmVuZWZpdHNTZWN0aW9uKGRhdGEucHJvZHVjdEJlbmVmaXRzU2VjdGlvbkRhdGEpLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIE1BUktFVFxyXG4gICAgICAgICAgICAgICAgICAgIHNldE1hcmtldE92ZXJ2aWV3U2VjdGlvbihkYXRhLm1hcmtldE92ZXJ2aWV3U2VjdGlvbkRhdGEpLFxyXG4gICAgICAgICAgICAgICAgICAgIHNldENvbXBldGl0b3JzU2VjdGlvbihkYXRhLmNvbXBldGl0b3JzU2VjdGlvbkRhdGEpLFxyXG4gICAgICAgICAgICAgICAgICAgIHNldFRhcmdldEN1c3RvbWVyc1NlY3Rpb24oZGF0YS50YXJnZXRDdXN0b21lcnNTZWN0aW9uRGF0YSksXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Q29tcGV0aXRpb25EaXN0aW5ndWlzaFNlY3Rpb24oZGF0YS5jb21wZXRpdGlvbkRpc3Rpbmd1aXNoU2VjdGlvbkRhdGEpLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEZJTkFOQ0VTXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U3RhcnR1cENvc3RzU2VjdGlvbihkYXRhLnN0YXJ0dXBDb3N0c1NlY3Rpb25EYXRhKSxcclxuICAgICAgICAgICAgICAgICAgICBzZXRSdW5uaW5nQ29zdHNTZWN0aW9uKGRhdGEucnVubmluZ0Nvc3RzU2VjdGlvbkRhdGEpLFxyXG4gICAgICAgICAgICAgICAgICAgIHNldEZpbmFuY2luZ1NlY3Rpb24oZGF0YS5maW5hbmNpbmdTZWN0aW9uRGF0YSksXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQlVTSU5FU1MgTU9ERUxcclxuICAgICAgICAgICAgICAgICAgICBzZXRCdXNpbmVzc01vZGVsT3ZlcnZpZXdTZWN0aW9uKGRhdGEuYnVzaW5lc3NNb2RlbE92ZXJ2aWV3U2VjdGlvbkRhdGEpLFxyXG4gICAgICAgICAgICAgICAgICAgIHNldEJ1c2luZXNzR3Jvd1NlY3Rpb24oZGF0YS5idXNpbmVzc0dyb3dTZWN0aW9uRGF0YSksXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0V2h5U3VjY2Vzc1NlY3Rpb24oZGF0YS53aHlTdWNjZXNzU2VjdGlvbkRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICBzZXRMb2FkaW5nSGVscGVyKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZygnTG9hZGluZyBmYWlsZWQnKTtcclxuICAgICAgc2V0TG9hZGluZ0hlbHBlcih0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKCkgPT4gc2V0T25Mb2FkT3BhY2l0eTQoZmFsc2UpO1xyXG4gIH0sIFtsb2FkaW5nSGVscGVyLCByb3V0ZXIucXVlcnkucHJvamVjdF0pO1xyXG5cclxuICBjb25zdCBidXNpbmVzc01vZGVsT3ZlcnZpZXdTZWN0aW9uRGF0YSA9IGJ1c2luZXNzTW9kZWxPdmVydmlld1NlY3Rpb24gPyBidXNpbmVzc01vZGVsT3ZlcnZpZXdTZWN0aW9uIDogJ2JsYW5rJztcclxuICBjb25zdCBidXNpbmVzc0dyb3dTZWN0aW9uRGF0YSA9IGJ1c2luZXNzR3Jvd1NlY3Rpb24gPyBidXNpbmVzc0dyb3dTZWN0aW9uIDogJ2JsYW5rJztcclxuICBjb25zdCB3aHlTdWNjZXNzU2VjdGlvbkRhdGEgPSB3aHlTdWNjZXNzU2VjdGlvbiA/IHdoeVN1Y2Nlc3NTZWN0aW9uIDogJ2JsYW5rJztcclxuXHJcbiAgY29uc3Qgb25Qcm9qZWN0TGVhdmUgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZ3NhcC50byhjb250ZW50UmVmLmN1cnJlbnQsIHtcclxuICAgICAgYXV0b0FscGhhOiAwLFxyXG4gICAgICBkdXJhdGlvbjogMSxcclxuICAgICAgZWFzZTogTGluZWFyLmVhc2VPdXQsXHJcbiAgICB9KTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICByb3V0ZXIucHVzaChgL2Rhc2hib2FyZC9wcm9qZWN0cy8ke3JvdXRlci5xdWVyeS5wcm9qZWN0fS9zdGFydHVwLWlkZWEvZmluYW5jZXNgKTtcclxuICAgIH0sIDEyMDApO1xyXG4gICAgYXdhaXQgZGJcclxuICAgICAgLmNvbGxlY3Rpb24oJ3Byb2plY3RzJylcclxuICAgICAgLmRvYyhwcm9qZWN0SWQpXHJcbiAgICAgIC5jb2xsZWN0aW9uKCdzdGFydHVwSWRlYScpXHJcbiAgICAgIC5kb2Mocm91dGVyLnF1ZXJ5LnByb2plY3QpXHJcbiAgICAgIC5jb2xsZWN0aW9uKCdpbnB1dHMnKVxyXG4gICAgICAuZG9jKGRvY3VtZW50SWQpXHJcbiAgICAgIC5zZXQoXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgYnVzaW5lc3NNb2RlbE92ZXJ2aWV3U2VjdGlvbkRhdGEsXHJcbiAgICAgICAgICBidXNpbmVzc0dyb3dTZWN0aW9uRGF0YSxcclxuICAgICAgICAgIHdoeVN1Y2Nlc3NTZWN0aW9uRGF0YSxcclxuICAgICAgICAgIGZpbGxlZFNlY3Rpb240OlxyXG4gICAgICAgICAgICBidXNpbmVzc01vZGVsT3ZlcnZpZXdTZWN0aW9uICYmXHJcbiAgICAgICAgICAgIGJ1c2luZXNzTW9kZWxPdmVydmlld1NlY3Rpb24gIT0gJ2JsYW5rJyAmJlxyXG4gICAgICAgICAgICBidXNpbmVzc0dyb3dTZWN0aW9uICYmXHJcbiAgICAgICAgICAgIGJ1c2luZXNzR3Jvd1NlY3Rpb24gIT0gJ2JsYW5rJyAmJlxyXG4gICAgICAgICAgICB3aHlTdWNjZXNzU2VjdGlvbiAmJlxyXG4gICAgICAgICAgICB3aHlTdWNjZXNzU2VjdGlvbiAhPSAnYmxhbmsnXHJcbiAgICAgICAgICAgICAgPyB0cnVlXHJcbiAgICAgICAgICAgICAgOiAoIWJ1c2luZXNzTW9kZWxPdmVydmlld1NlY3Rpb24gfHxcclxuICAgICAgICAgICAgICAgICAgIWJ1c2luZXNzR3Jvd1NlY3Rpb24gfHxcclxuICAgICAgICAgICAgICAgICAgIXdoeVN1Y2Nlc3NTZWN0aW9uIHx8XHJcbiAgICAgICAgICAgICAgICAgIGJ1c2luZXNzTW9kZWxPdmVydmlld1NlY3Rpb24gPT0gJ2JsYW5rJyB8fFxyXG4gICAgICAgICAgICAgICAgICBidXNpbmVzc0dyb3dTZWN0aW9uID09ICdibGFuaycgfHxcclxuICAgICAgICAgICAgICAgICAgd2h5U3VjY2Vzc1NlY3Rpb24gPT0gJ2JsYW5rJykgJiZcclxuICAgICAgICAgICAgICAgIGZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgeyBtZXJnZTogdHJ1ZSB9XHJcbiAgICAgICk7XHJcbiAgICBhd2FpdCBkYlxyXG4gICAgICAuY29sbGVjdGlvbigncHJvamVjdHMnKVxyXG4gICAgICAuZG9jKHByb2plY3RJZClcclxuICAgICAgLnNldChcclxuICAgICAgICB7XHJcbiAgICAgICAgICBidXNpbmVzc01vZGVsT3ZlcnZpZXdTZWN0aW9uRGF0YSxcclxuICAgICAgICAgIGJ1c2luZXNzR3Jvd1NlY3Rpb25EYXRhLFxyXG4gICAgICAgICAgd2h5U3VjY2Vzc1NlY3Rpb25EYXRhLFxyXG4gICAgICAgICAgZmlsbGVkU2VjdGlvbjQ6XHJcbiAgICAgICAgICAgIGJ1c2luZXNzTW9kZWxPdmVydmlld1NlY3Rpb24gJiZcclxuICAgICAgICAgICAgYnVzaW5lc3NNb2RlbE92ZXJ2aWV3U2VjdGlvbiAhPSAnYmxhbmsnICYmXHJcbiAgICAgICAgICAgIGJ1c2luZXNzR3Jvd1NlY3Rpb24gJiZcclxuICAgICAgICAgICAgYnVzaW5lc3NHcm93U2VjdGlvbiAhPSAnYmxhbmsnICYmXHJcbiAgICAgICAgICAgIHdoeVN1Y2Nlc3NTZWN0aW9uICYmXHJcbiAgICAgICAgICAgIHdoeVN1Y2Nlc3NTZWN0aW9uICE9ICdibGFuaydcclxuICAgICAgICAgICAgICA/IHRydWVcclxuICAgICAgICAgICAgICA6ICghYnVzaW5lc3NNb2RlbE92ZXJ2aWV3U2VjdGlvbiB8fFxyXG4gICAgICAgICAgICAgICAgICAhYnVzaW5lc3NHcm93U2VjdGlvbiB8fFxyXG4gICAgICAgICAgICAgICAgICAhd2h5U3VjY2Vzc1NlY3Rpb24gfHxcclxuICAgICAgICAgICAgICAgICAgYnVzaW5lc3NNb2RlbE92ZXJ2aWV3U2VjdGlvbiA9PSAnYmxhbmsnIHx8XHJcbiAgICAgICAgICAgICAgICAgIGJ1c2luZXNzR3Jvd1NlY3Rpb24gPT0gJ2JsYW5rJyB8fFxyXG4gICAgICAgICAgICAgICAgICB3aHlTdWNjZXNzU2VjdGlvbiA9PSAnYmxhbmsnKSAmJlxyXG4gICAgICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7IG1lcmdlOiB0cnVlIH1cclxuICAgICAgKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEV4aXRDb21wb25lbnQgLz5cclxuICAgICAgPFRpcHB5TW9uc3RlclxyXG4gICAgICAgIHNldEN1cnJlbnRUaXBweT17c2V0Q3VycmVudFRpcHB5fVxyXG4gICAgICAgIGVtcHR5SW5wdXRcclxuICAgICAgICBzZXRUaXBweU1vbnN0ZXI9e3NldFRpcHB5TW9uc3Rlcn1cclxuICAgICAgICB0aXBweU1vbnN0ZXI9e3RpcHB5TW9uc3Rlcn1cclxuICAgICAgICBtb2RlbFxyXG4gICAgICAgIGNvbnRlbnRDbGFzcz1cImgtNDAgdy05NiBzaGFkb3ctbGcgcm91bmRlZC0yeGwgYmctcHJpbWFyeSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiXHJcbiAgICAgICAgY29udGVudFRleHQ9XCJJdCB1c2VkIHRvIGJlIHRoYXQgcGlyYXRlcyBoYWQgdG8gd29yayBvdXQgdGhlaXIgcGx1bmRlciBwbGFucyBpbiBncmVhdCBkZXRhaWxzLiBUaGVpciBmdXR1cmUgZGVwZW5kZWQgb24gdGhlIHN1Y2Nlc3Mgb2YgdGhlaXIgbWlzc2lvbiBcIlxyXG4gICAgICAgIGNvbnRlbnRUZXh0MT1cIiBJbiB0aGlzIHNlY3Rpb24sIGludHJvZHVjZSB5b3VyIHN0YXJ0dXAncyBvcGVyYXRpbmcgbW9kZWwgYW5kIHRlbGwgdGhlIHdvcmxkIHdoeSBpdCBpcyB5b3VyIHN0YXJ0dXAgdGhhdCB3aWxsIGJlIHN1Y2Nlc3NmdWwgXCJcclxuICAgICAgLz5cclxuICAgICAgPE5hdmJhclRlbXBsYXRlPlxyXG4gICAgICAgIDxkaXYgcmVmPXtjb250ZW50UmVmfSBjbGFzc05hbWU9XCJoLWZ1bGwgdy1mdWxsIHJlbGF0aXZlIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtYXgtdy1tZFN0YXJ0ZXIgbGc6bWF4LXctbGdDb250YWluZXIgMnhsOm1heC13LXhsQ29udGFpbmVyIHJlbGF0aXZlIHBsLTYgcHItNiBtdC0xNiBwYi0yNFwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnlkYXJrIHRleHQtMnhsIG5vcm1hbDp0ZXh0LTN4bCBtdC0yIHBsLTIgZGFyazp0ZXh0LWJhY2tncm91bmQgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICBJdCBpcyBhIGhpZ2ggdGltZSB0byBnZXQgaW50byB0aGUgbnVtYmVyc1xyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeWRhcmsgdGV4dC1iYXNlIG5vcm1hbDp0ZXh0LWxnIG10LTIgcGwtMiBkYXJrOnRleHQtYmFja2dyb3VuZCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIFN0YXJ0dXAgaWRlYSBjcmVhdG9yIHdpbGwgaGVscCB5b3UgY3JlYXRlIHRoZSBpbml0aWFsIG1vY2t1cCBvZiB5b3VyIGZ1dHVyZSBzdGFydHVwXHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIvZ2lmcy9yb2NrZXQuZ2lmXCIgaGVpZ2h0PXszNX0gd2lkdGg9ezM1fSBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgcmVsYXRpdmUgYm90dG9tLTAuNVwiIC8+XHJcbiAgICAgICAgICAgICAgey8qIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz0nL2Vtb2ppcy9wYWxtLnN2ZydcclxuICAgICAgICAgICAgICAgIGhlaWdodD17MzV9XHJcbiAgICAgICAgICAgICAgICB3aWR0aD17MzV9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2lubGluZS1ibG9jayByZWxhdGl2ZSBib3R0b20tMidcclxuICAgICAgICAgICAgICAvPiAqL31cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8UHJvZ3Jlc3NCYXIgb25Mb2FkT3BhY2l0eTQ9e29uTG9hZE9wYWNpdHk0fSAvPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnlkYXJrIHRleHQtbGcgbXQtMTAgLW1iLTYgZGFyazp0ZXh0LWJhY2tncm91bmRcIj5CdXNpbmVzcyBtb2RlbDwvaDE+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBib3JkZXItci02IHJvdW5kZWQtMnhsIGJnLXdoaXRlIG10LTggZGFyazpiZy1iYWNrZ3JvdW5kXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IGZsZXgtY29sIGgtZnVsbCB3LWZ1bGwgZmxleCBweC04IHB0LTggcGItNFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gZm9udC1tZWRpdW0gZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtZW5kXCIgaHRtbEZvcj1cImJ1c2luZXNzTW9kZWxPdmVydmlld1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIE92ZXJ2aWV3IG9mIHlvdXIgc3RhcnR1cCBidXNpbmVzcyBtb2RlbC5cclxuICAgICAgICAgICAgICAgICAgICA8VGlwcHlHdWlkZVxyXG4gICAgICAgICAgICAgICAgICAgICAgY29udGVudENsYXNzPVwidy04MCBzaGFkb3ctbGcgcm91bmRlZC0yeGwgYmctcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjb250ZW50VGV4dD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICcgUXVlc3Rpb25zIHRoYXQgY2FuIGd1aWRlIHlvdTpcXG4tIEhvdyBkb2VzIHlvdXIgYnVzaW5lc3MgbW9kZWwgbG9vayBsaWtlP1xcbi0gV2hhdCB3aWxsIGJlIHRoZSBsZWdhbCBzdHJ1Y3R1cmUgb2YgeW91ciBzdGFydHVwP1xcbi0gSG93IHdpbGwgeW91ciBzdGFydHVwIGdlbmVyYXRlIGluY29tZT8nXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJidXNpbmVzc01vZGVsT3ZlcnZpZXdcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0QnVzaW5lc3NNb2RlbE92ZXJ2aWV3U2VjdGlvbihlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2J1c2luZXNzTW9kZWxPdmVydmlld1NlY3Rpb24gPT0gJ2JsYW5rJyA/ICcnIDogYnVzaW5lc3NNb2RlbE92ZXJ2aWV3U2VjdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwYi0yNCBzaGFkb3cgYXBwZWFyYW5jZS1ub25lIHJvdW5kZWQgdy1mdWxsIHB5LTMgcHgtNCB0ZXh0LXByaW1hcnlkYXJrIGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lIHRleHQtc20gYmctd2hpdGUgcm91bmRlZC0yeGwgbXQtMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRhcmVhXCJcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17J+KAnEkgbmV2ZXIgZHJlYW1lZCBhYm91dCBzdWNjZXNzLCBJIHdvcmtlZCBmb3IgaXQu4oCdXFxuXFxufiBFc3RlZSBMYXVkZXInfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWVuZFwiIGh0bWxGb3I9XCJidXNpbmVzc0dyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICBQcmVkaWN0aW9ucyBhbmQgbWlsZXN0b25lcyBhYm91dCB0aGUgZ3Jvd3RoIG9mIHlvdXIgc3RhcnR1cC5cclxuICAgICAgICAgICAgICAgICAgICA8VGlwcHlHdWlkZVxyXG4gICAgICAgICAgICAgICAgICAgICAgY29udGVudENsYXNzPVwidy04MCBzaGFkb3ctbGcgcm91bmRlZC0yeGwgYmctcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjb250ZW50VGV4dD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiIFF1ZXN0aW9ucyB0aGF0IGNhbiBndWlkZSB5b3U6XFxuLSBIb3cgZG8geW91IHByZWRpY3QgeW91ciBzdGFydHVwIGdyb3c/XFxuLSBIb3cgYXJlIHlvdSBnb2luZyB0byBhY2hpZXZlIHRoZSBwcm9qZWN0ZWQgZ3Jvd3RoIG9mIHlvdXIgc3RhcnR1cD9cXG4tIFdoYXQgYXJlIHRoZSBtaWxlc3RvbmVzIGZvciBlYWNoIHN0YWdlIG9mIHlvdXIgc3RhcnR1cCdzIGRldmVsb3BtZW50P1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJidXNpbmVzc0dyb3dcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0QnVzaW5lc3NHcm93U2VjdGlvbihlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2J1c2luZXNzR3Jvd1NlY3Rpb24gPT0gJ2JsYW5rJyA/ICcnIDogYnVzaW5lc3NHcm93U2VjdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwYi0yNCBweC0zIHNoYWRvdyBhcHBlYXJhbmNlLW5vbmUgcm91bmRlZCB3LWZ1bGwgcHktMyBweC00IHRleHQtcHJpbWFyeWRhcmsgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmUgdGV4dC1zbSBiZy13aGl0ZSByb3VuZGVkLTJ4bCBtdC0yXCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dGFyZWFcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXsn4oCcU2VlIHRoaW5ncyBpbiB0aGUgcHJlc2VudCwgZXZlbiBpZiB0aGV5IGFyZSBpbiB0aGUgZnV0dXJlLuKAnVxcblxcbn4gTGFycnkgRWxsaXNvbid9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMTIgcGItOFwiPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zbSBmb250LW1lZGl1bSBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1lbmRcIiBodG1sRm9yPVwic3VjY2Vzc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIFdoeSBpcyBpdCB5b3VyIGlkZWEgdGhhdCB3aWxsIGJlIHN1Y2Nlc3NmdWw/XHJcbiAgICAgICAgICAgICAgICAgICAgPFRpcHB5R3VpZGVcclxuICAgICAgICAgICAgICAgICAgICAgIGFuZ3J5XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb250ZW50Q2xhc3M9XCJ3LTgwIHNoYWRvdy1sZyByb3VuZGVkLTJ4bCBiZy1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRUZXh0PXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJyBXaGF0IGVsc2UgYXJlIHlvdSB3YWl0aW5nIGZvcj8gR2V0IGl0IG9mZiB5b3VyIGNoZXN0IGFuZCB0ZWxsIHRoZSB3aG9sZSB3b3JsZCwgaG93IHN0cm9uZyB5b3VyIG1vdGl2YXRpb24gaXMgdG8gYnVpbGQgYSBuZXcgc3RhcnR1cCEnXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJzdWNjZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFdoeVN1Y2Nlc3NTZWN0aW9uKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17d2h5U3VjY2Vzc1NlY3Rpb24gPT0gJ2JsYW5rJyA/ICcnIDogd2h5U3VjY2Vzc1NlY3Rpb259XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicGItMjQgcHgtMyBzaGFkb3cgYXBwZWFyYW5jZS1ub25lIHJvdW5kZWQgdy1mdWxsIHB5LTMgcHgtNCB0ZXh0LXByaW1hcnlkYXJrIGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lIHRleHQtc20gYmctd2hpdGUgcm91bmRlZC0yeGwgbXQtMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRhcmVhXCJcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17J+KAnFdoZXRoZXIgeW91IHRoaW5rIHlvdSBjYW4sIG9yIHRoaW5rIHlvdSBjYW7igJl0IOKAkyB5b3XigJlyZSByaWdodC7igJ1cXG5cXG5+IEhlbnJ5IEZvcmQnfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGhyIHN0eWxlPXt7IHdpZHRoOiAnOTAlJywgY29sb3I6ICcjYTBhZWMwJyB9fSAvPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGdyaWQgZ3JpZC1jb2xzLTNmciBncmlkLWZsb3ctY29sdW1uIHB4LTggcHktNFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBtdC0xIHRleHQtcHJpbWFyeWRhcmsgdGV4dC1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uUHJvamVjdExlYXZlfT5CYWNrPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgbXQtMSBqdXN0aWZ5LXNlbGYtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5XCI+U3RlcCA1IG9mIDU8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWVuZCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aXBweU1vbnN0ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25TdWJtaXR9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaG92ZXI6YmctcHJpbWFyeSBob3Zlcjp0ZXh0LXdoaXRlIGRhcms6aG92ZXI6YmctcHJpbWFyeWRhcmsgZGFyazpob3Zlcjp0ZXh0LWJhY2tncm91bmQgZm9jdXM6b3V0bGluZS1ub25lIGJvcmRlciBib3JkZXItcHJpbWFyeSB0ZXh0LXByaW1hcnkgdGV4dC1zbSBmb250LWxpZ2h0IHB5LTIgcHgtOCByb3VuZGVkLTJ4bCBkYXJrOnRleHQtcHJpbWFyeWRhcmsgZGFyazpib3JkZXItcHJpbWFyeWRhcmtcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgTmV4dFxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L05hdmJhclRlbXBsYXRlPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0YXJ0dXBQcm9kdWN0TW9kYWw7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBnc2FwLCB7IFBvd2VyNCB9IGZyb20gJ2dzYXAnO1xyXG5pbXBvcnQgVGlwcHkgZnJvbSAnQHRpcHB5anMvcmVhY3QnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcblxyXG5jb25zdCBUaXBweUd1aWRlID0gKHtcclxuICBjb250ZW50Q2xhc3MsXHJcbiAgY29udGVudFRleHQsXHJcbiAgbWFya2V0LFxyXG4gIG1vZGVsLFxyXG4gIHN1Y2Nlc3MsXHJcbiAgdGlwcHlNb25zdGVyLFxyXG4gIHNldFRpcHB5TW9uc3RlcixcclxuICBzZXRDdXJyZW50VGlwcHksXHJcbiAgZW1wdHlJbnB1dCxcclxuICBhbmdyeSxcclxufSkgPT4ge1xyXG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBjb250ZW50UmVmID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IHRpcHB5UmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3Qgc3VnZ2VzdGlvbkljb24gPSB1c2VSZWYoKTtcclxuICBjb25zdCB0aXBweWRlciA9IHVzZVJlZigpO1xyXG5cclxuICAvLyBjb25zdCBbZW1wdHlJbnB1dCwgc2V0RW1wdHlJbnB1dF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IHNob3cgPSAoKSA9PiB7XHJcbiAgICBnc2FwLmZyb21UbyhcclxuICAgICAgdGlwcHlSZWYuY3VycmVudCxcclxuICAgICAgeyBhdXRvQWxwaGE6IDAsIHNjYWxlOiAwIH0sXHJcbiAgICAgIHsgYXV0b0FscGhhOiAxLCBzY2FsZTogMSwgZHVyYXRpb246IDEsIGVhc2U6IFBvd2VyNC5lYXNlT3V0IH1cclxuICAgICk7XHJcbiAgICBzZXRWaXNpYmxlKHRydWUpO1xyXG4gICAgLy8gZW1wdHlJbnB1dCAmJiBzZXRDdXJyZW50VGlwcHkodHJ1ZSk7IC8vIGN1cnJlbnQgdGlwcHkgamVzdCBjesSZxZtjacSFIG9ic8WCdWdpIHByb2JsZW11LCBraWVkeSBtYW15IG90d2FydGVnbyB0b29sdGlwYSBub3JtYWxuZWdvIGkgd2Npc2thbXksIMW8ZWJ5IHd5xZt3aWV0bGnEhyBjemVyd29uZWdvXHJcbiAgfTtcclxuICBjb25zdCBoaWRlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgYXdhaXQgZ3NhcC50byh0aXBweVJlZi5jdXJyZW50LCB7XHJcbiAgICAgIGF1dG9BbHBoYTogMCxcclxuICAgICAgc2NhbGU6IDAsXHJcbiAgICAgIGR1cmF0aW9uOiAxLFxyXG4gICAgICBlYXNlOiBQb3dlcjQuZWFzZUluLFxyXG4gICAgfSk7XHJcbiAgICAvLyBlbXB0eUlucHV0ICYmIHNldFRpcHB5TW9uc3RlcihmYWxzZSk7XHJcbiAgICBzZXRWaXNpYmxlKGZhbHNlKTtcclxuICAgIC8vIGVtcHR5SW5wdXQgJiYgc2V0Q3VycmVudFRpcHB5KGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkltYWdlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICB2aXNpYmxlID8gaGlkZSgpIDogc2hvdygpO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB0aXBweWRlci5jdXJyZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2RhdGEtcGxhY2VtZW50Jyk7XHJcbiAgICAvLyBzdWdnZXN0aW9uSWNvbi5jdXJyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoKSA9PiAodmlzaWJsZSA/IGhpZGUoKSA6IHNob3coKSkpO1xyXG4gICAgLy8gc3VnZ2VzdGlvbkljb24uY3VycmVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4gKCF2aXNpYmxlID8gaGlkZSgpIDogc2hvdygpKSk7XHJcbiAgICAvLyBHU0FQXHJcbiAgICAvLyBnc2FwLmZyb21UbyhcclxuICAgIC8vICAgY29udGVudFJlZi5jdXJyZW50LFxyXG4gICAgLy8gICB7IGF1dG9BbHBoYTogMCB9LFxyXG4gICAgLy8gICB7IGF1dG9BbHBoYTogMSwgZHVyYXRpb246IDIsIGVhc2U6IFBvd2VyNC5lYXNlT3V0IH1cclxuICAgIC8vICk7XHJcbiAgICAvLyBUSVBQWVxyXG4gICAgLy8gc2V0VmlzaWJsZSh0cnVlKTtcclxuICAgIC8vIGVtcHR5SW5wdXQgJiYgc2V0Q3VycmVudFRpcHB5KHRydWUpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc29sZS5sb2coJ3RtIC0gJywgdGlwcHlNb25zdGVyKTtcclxuICBjb25zb2xlLmxvZygndmlzaWJsZSAtICcsIHZpc2libGUpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFRpcHB5XHJcbiAgICAgIHJlZj17dGlwcHlkZXJ9XHJcbiAgICAgIC8vIHRyaWdnZXI9e3RpcHB5TW9uc3Rlcn1cclxuICAgICAgc3RpY2t5PXtmYWxzZX1cclxuICAgICAgekluZGV4PXsyMH1cclxuICAgICAgdG91Y2g9e3RydWV9XHJcbiAgICAgIHZpc2libGU9e3Zpc2libGV9XHJcbiAgICAgIG9uQ2xpY2tPdXRzaWRlPXtoaWRlfVxyXG4gICAgICBwbGFjZW1lbnQ9J2xlZnQtZW5kJ1xyXG4gICAgICAvLyBvZmZzZXQ9e1stMjAwLCAtMzVdfVxyXG4gICAgICBpbnRlcmFjdGl2ZT17dHJ1ZX1cclxuICAgICAgY29udGVudD17XHJcbiAgICAgICAgPGRpdiByZWY9e3RpcHB5UmVmfSBjbGFzc05hbWU9e2NvbnRlbnRDbGFzc30+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IHdoaXRlU3BhY2U6ICdwcmUtbGluZScgfX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPSd0ZXh0LXByaW1hcnlkYXJrIHAtNCB0ZXh0LXNtIHRleHQtd2hpdGUnXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHthbmdyeSA/IChcclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9Jy9lbW9qaXMvYW5nZXJzeW1ib2wuc3ZnJ1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PXsyMn1cclxuICAgICAgICAgICAgICAgIHdpZHRoPXsyMn1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0naW5saW5lLWJsb2NrIHJlbGF0aXZlIGJvdHRvbS0wLjUnXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9Jy9lbW9qaXMvdGVzdC5zdmcnXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezIyfVxyXG4gICAgICAgICAgICAgICAgd2lkdGg9ezIyfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdpbmxpbmUtYmxvY2snXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAge2NvbnRlbnRUZXh0fVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIH1cclxuICAgID5cclxuICAgICAgPGltZ1xyXG4gICAgICAgIHJlZj17c3VnZ2VzdGlvbkljb259XHJcbiAgICAgICAgaWQ9J3N1Z2dlc3Rpb25JY29uJ1xyXG4gICAgICAgIGNsYXNzTmFtZT0ncmVsYXRpdmUgY3Vyc29yLXBvaW50ZXInXHJcbiAgICAgICAgc3JjPScvZ3VpZGUvbGFtcDIuc3ZnJ1xyXG4gICAgICAgIGhlaWdodD17NDB9XHJcbiAgICAgICAgd2lkdGg9ezQwfVxyXG4gICAgICAgIG9uQ2xpY2s9e29uSW1hZ2VDbGlja31cclxuICAgICAgLz5cclxuICAgIDwvVGlwcHk+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRpcHB5R3VpZGU7XHJcbiIsImltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZS9hcHAnO1xyXG5pbXBvcnQgJ2ZpcmViYXNlL2F1dGgnO1xyXG5pbXBvcnQgJ2ZpcmViYXNlL2ZpcmVzdG9yZSc7XHJcbmltcG9ydCAnZmlyZWJhc2Uvc3RvcmFnZSc7XHJcbmltcG9ydCAnZmlyZWJhc2UvZnVuY3Rpb25zJztcclxuXHJcbmlmICghZmlyZWJhc2UuYXBwcy5sZW5ndGgpIHtcclxuICBmaXJlYmFzZS5pbml0aWFsaXplQXBwKHtcclxuICAgIC8vIGFwaUtleTogJ0FJemFTeUN4X1QwRHFpeEwzQVhfUUxsLWo4WER5Z0dwOTFDLTMtUScsXHJcbiAgICAvLyBhdXRoRG9tYWluOiAnc3RhcnR1cC10ZXN0LTRkNjI1LmZpcmViYXNlYXBwLmNvbScsXHJcbiAgICAvLyBwcm9qZWN0SWQ6ICdzdGFydHVwLXRlc3QtNGQ2MjUnLFxyXG4gICAgLy8gc3RvcmFnZUJ1Y2tldDogJ3N0YXJ0dXAtdGVzdC00ZDYyNS5hcHBzcG90LmNvbScsXHJcbiAgICAvLyBtZXNzYWdpbmdTZW5kZXJJZDogJzQ3MjQxNjE1MDI0MCcsXHJcbiAgICAvLyBhcHBJZDogJzE6NDcyNDE2MTUwMjQwOndlYjpiMmExMjhhZDI3YWZmZmRkZjNlNjg1JyxcclxuICAgIGFwaUtleTogJ0FJemFTeUJPU2Z1QWY3VkFLOVllYzIwbEdyRF82YnE1TU5SbTlzRScsXHJcbiAgICBhdXRoRG9tYWluOiAnc2Fhcy1zdGFydHVwLWE1YTM0LmZpcmViYXNlYXBwLmNvbScsXHJcbiAgICBwcm9qZWN0SWQ6ICdzYWFzLXN0YXJ0dXAtYTVhMzQnLFxyXG4gICAgc3RvcmFnZUJ1Y2tldDogJ3NhYXMtc3RhcnR1cC1hNWEzNC5hcHBzcG90LmNvbScsXHJcbiAgICBtZXNzYWdpbmdTZW5kZXJJZDogJzg2NDIxNzU3NDYyNScsXHJcbiAgICBhcHBJZDogJzE6ODY0MjE3NTc0NjI1OndlYjoxOWNmNTkwMTA5ZWY1MGRkOTM1YmEwJyxcclxuICAgIG1lYXN1cmVtZW50SWQ6ICdHLVFLWkpQVEtNUzQnLFxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmaXJlYmFzZTtcclxuZXhwb3J0IGNvbnN0IGF1dGggPSBmaXJlYmFzZS5hdXRoKCk7XHJcbmV4cG9ydCBjb25zdCBkYiA9IGZpcmViYXNlLmZpcmVzdG9yZSgpO1xyXG5leHBvcnQgY29uc3Qgc3RvcmFnZSA9IGZpcmViYXNlLnN0b3JhZ2UoKTtcclxuIiwiaW1wb3J0IGZpcmViYXNlLCB7IGF1dGgsIGRiIH0gZnJvbSAnLi4vbGliL2ZpcmViYXNlJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIGNyZWF0ZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmV4cG9ydCBjb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTsgLy8gVHV0YWogbW/FvG5hIHVtaWXFm2NpxIcgZGVmYXVsdCBWYWx1ZVxyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUF1dGggPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IEF1dGhQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBbY3VycmVudFVzZXIsIHNldEN1cnJlbnRVc2VyXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVVzZXIgPSBhc3luYyAodXNlcikgPT4ge1xyXG4gICAgaWYgKHVzZXIpIHtcclxuICAgICAgLy8gY29uc29sZS5sb2coJ3VzZXIgLSAnLCB1c2VyKTtcclxuICAgICAgLy8gY29uc29sZS5sb2coJ3VzZXIgbmFtZSAtICcsIG5hbWUpO1xyXG4gICAgICBjb25zdCBmb3JtYXRlZFVzZXIgPSBhd2FpdCBmb3JtYXRVc2VyKHVzZXIpO1xyXG5cclxuICAgICAgLy8gY29uc3QgZGVjb2RlZFRva2VuID0gYXdhaXQgZmlyZWJhc2UuYXV0aCgpLmN1cnJlbnRVc2VyLmdldElkVG9rZW5SZXN1bHQoKTtcclxuICAgICAgLy8gY29uc29sZS5sb2coZGVjb2RlZFRva2VuLmNsYWltcy5zdHJpcGVSb2xlKTtcclxuXHJcbiAgICAgIGRiLmNvbGxlY3Rpb24oJ3VzZXJzJykuZG9jKHVzZXIudWlkKS5zZXQoeyBmb3JtYXRlZFVzZXIgfSwgeyBtZXJnZTogdHJ1ZSB9KTtcclxuXHJcbiAgICAgIHNldEN1cnJlbnRVc2VyKGZvcm1hdGVkVXNlcik7XHJcbiAgICAgIC8vIENvb2tpZXMuc2V0KCd0b2tlbicsIHVzZXIuemEsIHRydWUpO1xyXG4gICAgICBDb29raWVzLnNldCgndWlkJywgdXNlci51aWQpO1xyXG5cclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIHJldHVybiBmb3JtYXRlZFVzZXI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRDdXJyZW50VXNlcihmYWxzZSk7XHJcbiAgICAgIC8vIENvb2tpZXMucmVtb3ZlKCd0b2tlbicsIHVzZXIuemEpO1xyXG4gICAgICBDb29raWVzLnJlbW92ZSgndWlkJyk7XHJcblxyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNpZ25VcCA9IGFzeW5jIChlbWFpbCwgcGFzc3dvcmQpID0+IHtcclxuICAgIHJldHVybiBhd2FpdCBhdXRoLmNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiBoYW5kbGVVc2VyKHJlc3BvbnNlLnVzZXIpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbG9nSW4gPSAoZW1haWwsIHBhc3N3b3JkKSA9PiB7XHJcbiAgICByZXR1cm4gYXV0aC5zaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGxvZ091dCA9ICgpID0+IHtcclxuICAgIHJldHVybiBhdXRoLnNpZ25PdXQoKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdW5zdWJzY3JpYmUgPSBhdXRoLm9uSWRUb2tlbkNoYW5nZWQoaGFuZGxlVXNlcik7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHVuc3Vic2NyaWJlKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCB2YWx1ZSA9IHtcclxuICAgIGN1cnJlbnRVc2VyLFxyXG4gICAgc2lnblVwLFxyXG4gICAgbG9nSW4sXHJcbiAgICBsb2dPdXQsXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0U3RyaXBlUm9sZSA9IGFzeW5jICgpID0+IHtcclxuICAgIGF3YWl0IGZpcmViYXNlLmF1dGgoKS5jdXJyZW50VXNlci5nZXRJZFRva2VuKHRydWUpO1xyXG4gICAgY29uc3QgZGVjb2RlZFRva2VuID0gYXdhaXQgZmlyZWJhc2UuYXV0aCgpLmN1cnJlbnRVc2VyLmdldElkVG9rZW5SZXN1bHQoKTtcclxuICAgIHJldHVybiBkZWNvZGVkVG9rZW4uY2xhaW1zLnN0cmlwZVJvbGUgfHwgJ2ZyZWUnO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZvcm1hdFVzZXIgPSBhc3luYyAodXNlcikgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ09GRiAtICcsIHVzZXIpO1xyXG4gICAgY29uc3QgdG9rZW4gPSBhd2FpdCB1c2VyLmdldElkVG9rZW4oKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHVpZDogdXNlci51aWQsXHJcbiAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxyXG4gICAgICAvLyBuYW1lLFxyXG4gICAgICAvLyB0b2tlbjogdXNlci56YSwgLy8gdG9rZW4gSldULCBnZW5lcm93YW55IGF1dG9tYXR5Y3puaWUgcHJ6ZXogZmlyZWJhc2UgcHJ6eSB6YWvFgmFkYW5pdSBrb250YVxyXG4gICAgICBwcm92aWRlcjogdXNlci5wcm92aWRlckRhdGFbMF0ucHJvdmlkZXJJZCxcclxuICAgICAgc3RyaXBlUm9sZTogYXdhaXQgZ2V0U3RyaXBlUm9sZSgpLFxyXG4gICAgICB0b2tlbixcclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17dmFsdWV9PnshbG9hZGluZyAmJiBjaGlsZHJlbn08L0F1dGhDb250ZXh0LlByb3ZpZGVyPjtcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL2hlYWQnXG5pbXBvcnQgeyB0b0Jhc2U2NCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0J1xuaW1wb3J0IHtcbiAgSW1hZ2VDb25maWcsXG4gIGltYWdlQ29uZmlnRGVmYXVsdCxcbiAgTG9hZGVyVmFsdWUsXG4gIFZBTElEX0xPQURFUlMsXG59IGZyb20gJy4uL25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcnXG5pbXBvcnQgeyB1c2VJbnRlcnNlY3Rpb24gfSBmcm9tICcuL3VzZS1pbnRlcnNlY3Rpb24nXG5cbmlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICA7KGdsb2JhbCBhcyBhbnkpLl9fTkVYVF9JTUFHRV9JTVBPUlRFRCA9IHRydWVcbn1cblxuY29uc3QgVkFMSURfTE9BRElOR19WQUxVRVMgPSBbJ2xhenknLCAnZWFnZXInLCB1bmRlZmluZWRdIGFzIGNvbnN0XG50eXBlIExvYWRpbmdWYWx1ZSA9IHR5cGVvZiBWQUxJRF9MT0FESU5HX1ZBTFVFU1tudW1iZXJdXG5cbmV4cG9ydCB0eXBlIEltYWdlTG9hZGVyID0gKHJlc29sdmVyUHJvcHM6IEltYWdlTG9hZGVyUHJvcHMpID0+IHN0cmluZ1xuXG5leHBvcnQgdHlwZSBJbWFnZUxvYWRlclByb3BzID0ge1xuICBzcmM6IHN0cmluZ1xuICB3aWR0aDogbnVtYmVyXG4gIHF1YWxpdHk/OiBudW1iZXJcbn1cblxudHlwZSBEZWZhdWx0SW1hZ2VMb2FkZXJQcm9wcyA9IEltYWdlTG9hZGVyUHJvcHMgJiB7IHJvb3Q6IHN0cmluZyB9XG5cbmNvbnN0IGxvYWRlcnMgPSBuZXcgTWFwPFxuICBMb2FkZXJWYWx1ZSxcbiAgKHByb3BzOiBEZWZhdWx0SW1hZ2VMb2FkZXJQcm9wcykgPT4gc3RyaW5nXG4+KFtcbiAgWydpbWdpeCcsIGltZ2l4TG9hZGVyXSxcbiAgWydjbG91ZGluYXJ5JywgY2xvdWRpbmFyeUxvYWRlcl0sXG4gIFsnYWthbWFpJywgYWthbWFpTG9hZGVyXSxcbiAgWydkZWZhdWx0JywgZGVmYXVsdExvYWRlcl0sXG5dKVxuXG5jb25zdCBWQUxJRF9MQVlPVVRfVkFMVUVTID0gW1xuICAnZmlsbCcsXG4gICdmaXhlZCcsXG4gICdpbnRyaW5zaWMnLFxuICAncmVzcG9uc2l2ZScsXG4gIHVuZGVmaW5lZCxcbl0gYXMgY29uc3RcbnR5cGUgTGF5b3V0VmFsdWUgPSB0eXBlb2YgVkFMSURfTEFZT1VUX1ZBTFVFU1tudW1iZXJdXG5cbnR5cGUgSW1nRWxlbWVudFN0eWxlID0gTm9uTnVsbGFibGU8SlNYLkludHJpbnNpY0VsZW1lbnRzWydpbWcnXVsnc3R5bGUnXT5cblxuZXhwb3J0IHR5cGUgSW1hZ2VQcm9wcyA9IE9taXQ8XG4gIEpTWC5JbnRyaW5zaWNFbGVtZW50c1snaW1nJ10sXG4gICdzcmMnIHwgJ3NyY1NldCcgfCAncmVmJyB8ICd3aWR0aCcgfCAnaGVpZ2h0JyB8ICdsb2FkaW5nJyB8ICdzdHlsZSdcbj4gJiB7XG4gIHNyYzogc3RyaW5nXG4gIGxvYWRlcj86IEltYWdlTG9hZGVyXG4gIHF1YWxpdHk/OiBudW1iZXIgfCBzdHJpbmdcbiAgcHJpb3JpdHk/OiBib29sZWFuXG4gIGxvYWRpbmc/OiBMb2FkaW5nVmFsdWVcbiAgdW5vcHRpbWl6ZWQ/OiBib29sZWFuXG4gIG9iamVjdEZpdD86IEltZ0VsZW1lbnRTdHlsZVsnb2JqZWN0Rml0J11cbiAgb2JqZWN0UG9zaXRpb24/OiBJbWdFbGVtZW50U3R5bGVbJ29iamVjdFBvc2l0aW9uJ11cbn0gJiAoXG4gICAgfCB7XG4gICAgICAgIHdpZHRoPzogbmV2ZXJcbiAgICAgICAgaGVpZ2h0PzogbmV2ZXJcbiAgICAgICAgLyoqIEBkZXByZWNhdGVkIFVzZSBgbGF5b3V0PVwiZmlsbFwiYCBpbnN0ZWFkICovXG4gICAgICAgIHVuc2l6ZWQ6IHRydWVcbiAgICAgIH1cbiAgICB8IHsgd2lkdGg/OiBuZXZlcjsgaGVpZ2h0PzogbmV2ZXI7IGxheW91dDogJ2ZpbGwnIH1cbiAgICB8IHtcbiAgICAgICAgd2lkdGg6IG51bWJlciB8IHN0cmluZ1xuICAgICAgICBoZWlnaHQ6IG51bWJlciB8IHN0cmluZ1xuICAgICAgICBsYXlvdXQ/OiBFeGNsdWRlPExheW91dFZhbHVlLCAnZmlsbCc+XG4gICAgICB9XG4gIClcblxuY29uc3Qge1xuICBkZXZpY2VTaXplczogY29uZmlnRGV2aWNlU2l6ZXMsXG4gIGltYWdlU2l6ZXM6IGNvbmZpZ0ltYWdlU2l6ZXMsXG4gIGxvYWRlcjogY29uZmlnTG9hZGVyLFxuICBwYXRoOiBjb25maWdQYXRoLFxuICBkb21haW5zOiBjb25maWdEb21haW5zLFxufSA9XG4gICgocHJvY2Vzcy5lbnYuX19ORVhUX0lNQUdFX09QVFMgYXMgYW55KSBhcyBJbWFnZUNvbmZpZykgfHwgaW1hZ2VDb25maWdEZWZhdWx0XG4vLyBzb3J0IHNtYWxsZXN0IHRvIGxhcmdlc3RcbmNvbnN0IGFsbFNpemVzID0gWy4uLmNvbmZpZ0RldmljZVNpemVzLCAuLi5jb25maWdJbWFnZVNpemVzXVxuY29uZmlnRGV2aWNlU2l6ZXMuc29ydCgoYSwgYikgPT4gYSAtIGIpXG5hbGxTaXplcy5zb3J0KChhLCBiKSA9PiBhIC0gYilcblxuZnVuY3Rpb24gZ2V0V2lkdGhzKFxuICB3aWR0aDogbnVtYmVyIHwgdW5kZWZpbmVkLFxuICBsYXlvdXQ6IExheW91dFZhbHVlLFxuICBzaXplczogc3RyaW5nIHwgdW5kZWZpbmVkXG4pOiB7IHdpZHRoczogbnVtYmVyW107IGtpbmQ6ICd3JyB8ICd4JyB9IHtcbiAgaWYgKHNpemVzICYmIChsYXlvdXQgPT09ICdmaWxsJyB8fCBsYXlvdXQgPT09ICdyZXNwb25zaXZlJykpIHtcbiAgICAvLyBGaW5kIGFsbCB0aGUgXCJ2d1wiIHBlcmNlbnQgc2l6ZXMgdXNlZCBpbiB0aGUgc2l6ZXMgcHJvcFxuICAgIGNvbnN0IHBlcmNlbnRTaXplcyA9IFsuLi5zaXplcy5tYXRjaEFsbCgvKF58XFxzKSgxP1xcZD9cXGQpdncvZyldLm1hcCgobSkgPT5cbiAgICAgIHBhcnNlSW50KG1bMl0pXG4gICAgKVxuICAgIGlmIChwZXJjZW50U2l6ZXMubGVuZ3RoKSB7XG4gICAgICBjb25zdCBzbWFsbGVzdFJhdGlvID0gTWF0aC5taW4oLi4ucGVyY2VudFNpemVzKSAqIDAuMDFcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdpZHRoczogYWxsU2l6ZXMuZmlsdGVyKFxuICAgICAgICAgIChzKSA9PiBzID49IGNvbmZpZ0RldmljZVNpemVzWzBdICogc21hbGxlc3RSYXRpb1xuICAgICAgICApLFxuICAgICAgICBraW5kOiAndycsXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7IHdpZHRoczogYWxsU2l6ZXMsIGtpbmQ6ICd3JyB9XG4gIH1cbiAgaWYgKFxuICAgIHR5cGVvZiB3aWR0aCAhPT0gJ251bWJlcicgfHxcbiAgICBsYXlvdXQgPT09ICdmaWxsJyB8fFxuICAgIGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnXG4gICkge1xuICAgIHJldHVybiB7IHdpZHRoczogY29uZmlnRGV2aWNlU2l6ZXMsIGtpbmQ6ICd3JyB9XG4gIH1cblxuICBjb25zdCB3aWR0aHMgPSBbXG4gICAgLi4ubmV3IFNldChcbiAgICAgIC8vID4gVGhpcyBtZWFucyB0aGF0IG1vc3QgT0xFRCBzY3JlZW5zIHRoYXQgc2F5IHRoZXkgYXJlIDN4IHJlc29sdXRpb24sXG4gICAgICAvLyA+IGFyZSBhY3R1YWxseSAzeCBpbiB0aGUgZ3JlZW4gY29sb3IsIGJ1dCBvbmx5IDEuNXggaW4gdGhlIHJlZCBhbmRcbiAgICAgIC8vID4gYmx1ZSBjb2xvcnMuIFNob3dpbmcgYSAzeCByZXNvbHV0aW9uIGltYWdlIGluIHRoZSBhcHAgdnMgYSAyeFxuICAgICAgLy8gPiByZXNvbHV0aW9uIGltYWdlIHdpbGwgYmUgdmlzdWFsbHkgdGhlIHNhbWUsIHRob3VnaCB0aGUgM3ggaW1hZ2VcbiAgICAgIC8vID4gdGFrZXMgc2lnbmlmaWNhbnRseSBtb3JlIGRhdGEuIEV2ZW4gdHJ1ZSAzeCByZXNvbHV0aW9uIHNjcmVlbnMgYXJlXG4gICAgICAvLyA+IHdhc3RlZnVsIGFzIHRoZSBodW1hbiBleWUgY2Fubm90IHNlZSB0aGF0IGxldmVsIG9mIGRldGFpbCB3aXRob3V0XG4gICAgICAvLyA+IHNvbWV0aGluZyBsaWtlIGEgbWFnbmlmeWluZyBnbGFzcy5cbiAgICAgIC8vIGh0dHBzOi8vYmxvZy50d2l0dGVyLmNvbS9lbmdpbmVlcmluZy9lbl91cy90b3BpY3MvaW5mcmFzdHJ1Y3R1cmUvMjAxOS9jYXBwaW5nLWltYWdlLWZpZGVsaXR5LW9uLXVsdHJhLWhpZ2gtcmVzb2x1dGlvbi1kZXZpY2VzLmh0bWxcbiAgICAgIFt3aWR0aCwgd2lkdGggKiAyIC8qLCB3aWR0aCAqIDMqL10ubWFwKFxuICAgICAgICAodykgPT4gYWxsU2l6ZXMuZmluZCgocCkgPT4gcCA+PSB3KSB8fCBhbGxTaXplc1thbGxTaXplcy5sZW5ndGggLSAxXVxuICAgICAgKVxuICAgICksXG4gIF1cbiAgcmV0dXJuIHsgd2lkdGhzLCBraW5kOiAneCcgfVxufVxuXG50eXBlIEdlbkltZ0F0dHJzRGF0YSA9IHtcbiAgc3JjOiBzdHJpbmdcbiAgdW5vcHRpbWl6ZWQ6IGJvb2xlYW5cbiAgbGF5b3V0OiBMYXlvdXRWYWx1ZVxuICBsb2FkZXI6IEltYWdlTG9hZGVyXG4gIHdpZHRoPzogbnVtYmVyXG4gIHF1YWxpdHk/OiBudW1iZXJcbiAgc2l6ZXM/OiBzdHJpbmdcbn1cblxudHlwZSBHZW5JbWdBdHRyc1Jlc3VsdCA9IHtcbiAgc3JjOiBzdHJpbmdcbiAgc3JjU2V0OiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgc2l6ZXM6IHN0cmluZyB8IHVuZGVmaW5lZFxufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUltZ0F0dHJzKHtcbiAgc3JjLFxuICB1bm9wdGltaXplZCxcbiAgbGF5b3V0LFxuICB3aWR0aCxcbiAgcXVhbGl0eSxcbiAgc2l6ZXMsXG4gIGxvYWRlcixcbn06IEdlbkltZ0F0dHJzRGF0YSk6IEdlbkltZ0F0dHJzUmVzdWx0IHtcbiAgaWYgKHVub3B0aW1pemVkKSB7XG4gICAgcmV0dXJuIHsgc3JjLCBzcmNTZXQ6IHVuZGVmaW5lZCwgc2l6ZXM6IHVuZGVmaW5lZCB9XG4gIH1cblxuICBjb25zdCB7IHdpZHRocywga2luZCB9ID0gZ2V0V2lkdGhzKHdpZHRoLCBsYXlvdXQsIHNpemVzKVxuICBjb25zdCBsYXN0ID0gd2lkdGhzLmxlbmd0aCAtIDFcblxuICByZXR1cm4ge1xuICAgIHNpemVzOiAhc2l6ZXMgJiYga2luZCA9PT0gJ3cnID8gJzEwMHZ3JyA6IHNpemVzLFxuICAgIHNyY1NldDogd2lkdGhzXG4gICAgICAubWFwKFxuICAgICAgICAodywgaSkgPT5cbiAgICAgICAgICBgJHtsb2FkZXIoeyBzcmMsIHF1YWxpdHksIHdpZHRoOiB3IH0pfSAke1xuICAgICAgICAgICAga2luZCA9PT0gJ3cnID8gdyA6IGkgKyAxXG4gICAgICAgICAgfSR7a2luZH1gXG4gICAgICApXG4gICAgICAuam9pbignLCAnKSxcblxuICAgIC8vIEl0J3MgaW50ZW5kZWQgdG8ga2VlcCBgc3JjYCB0aGUgbGFzdCBhdHRyaWJ1dGUgYmVjYXVzZSBSZWFjdCB1cGRhdGVzXG4gICAgLy8gYXR0cmlidXRlcyBpbiBvcmRlci4gSWYgd2Uga2VlcCBgc3JjYCB0aGUgZmlyc3Qgb25lLCBTYWZhcmkgd2lsbFxuICAgIC8vIGltbWVkaWF0ZWx5IHN0YXJ0IHRvIGZldGNoIGBzcmNgLCBiZWZvcmUgYHNpemVzYCBhbmQgYHNyY1NldGAgYXJlIGV2ZW5cbiAgICAvLyB1cGRhdGVkIGJ5IFJlYWN0LiBUaGF0IGNhdXNlcyBtdWx0aXBsZSB1bm5lY2Vzc2FyeSByZXF1ZXN0cyBpZiBgc3JjU2V0YFxuICAgIC8vIGFuZCBgc2l6ZXNgIGFyZSBkZWZpbmVkLlxuICAgIC8vIFRoaXMgYnVnIGNhbm5vdCBiZSByZXByb2R1Y2VkIGluIENocm9tZSBvciBGaXJlZm94LlxuICAgIHNyYzogbG9hZGVyKHsgc3JjLCBxdWFsaXR5LCB3aWR0aDogd2lkdGhzW2xhc3RdIH0pLFxuICB9XG59XG5cbmZ1bmN0aW9uIGdldEludCh4OiB1bmtub3duKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgaWYgKHR5cGVvZiB4ID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiB4XG4gIH1cbiAgaWYgKHR5cGVvZiB4ID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBwYXJzZUludCh4LCAxMClcbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkXG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRJbWFnZUxvYWRlcihsb2FkZXJQcm9wczogSW1hZ2VMb2FkZXJQcm9wcykge1xuICBjb25zdCBsb2FkID0gbG9hZGVycy5nZXQoY29uZmlnTG9hZGVyKVxuICBpZiAobG9hZCkge1xuICAgIHJldHVybiBsb2FkKHsgcm9vdDogY29uZmlnUGF0aCwgLi4ubG9hZGVyUHJvcHMgfSlcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgYFVua25vd24gXCJsb2FkZXJcIiBmb3VuZCBpbiBcIm5leHQuY29uZmlnLmpzXCIuIEV4cGVjdGVkOiAke1ZBTElEX0xPQURFUlMuam9pbihcbiAgICAgICcsICdcbiAgICApfS4gUmVjZWl2ZWQ6ICR7Y29uZmlnTG9hZGVyfWBcbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbWFnZSh7XG4gIHNyYyxcbiAgc2l6ZXMsXG4gIHVub3B0aW1pemVkID0gZmFsc2UsXG4gIHByaW9yaXR5ID0gZmFsc2UsXG4gIGxvYWRpbmcsXG4gIGNsYXNzTmFtZSxcbiAgcXVhbGl0eSxcbiAgd2lkdGgsXG4gIGhlaWdodCxcbiAgb2JqZWN0Rml0LFxuICBvYmplY3RQb3NpdGlvbixcbiAgbG9hZGVyID0gZGVmYXVsdEltYWdlTG9hZGVyLFxuICAuLi5hbGxcbn06IEltYWdlUHJvcHMpIHtcbiAgbGV0IHJlc3Q6IFBhcnRpYWw8SW1hZ2VQcm9wcz4gPSBhbGxcbiAgbGV0IGxheW91dDogTm9uTnVsbGFibGU8TGF5b3V0VmFsdWU+ID0gc2l6ZXMgPyAncmVzcG9uc2l2ZScgOiAnaW50cmluc2ljJ1xuICBsZXQgdW5zaXplZCA9IGZhbHNlXG4gIGlmICgndW5zaXplZCcgaW4gcmVzdCkge1xuICAgIHVuc2l6ZWQgPSBCb29sZWFuKHJlc3QudW5zaXplZClcbiAgICAvLyBSZW1vdmUgcHJvcGVydHkgc28gaXQncyBub3Qgc3ByZWFkIGludG8gaW1hZ2U6XG4gICAgZGVsZXRlIHJlc3RbJ3Vuc2l6ZWQnXVxuICB9IGVsc2UgaWYgKCdsYXlvdXQnIGluIHJlc3QpIHtcbiAgICAvLyBPdmVycmlkZSBkZWZhdWx0IGxheW91dCBpZiB0aGUgdXNlciBzcGVjaWZpZWQgb25lOlxuICAgIGlmIChyZXN0LmxheW91dCkgbGF5b3V0ID0gcmVzdC5sYXlvdXRcblxuICAgIC8vIFJlbW92ZSBwcm9wZXJ0eSBzbyBpdCdzIG5vdCBzcHJlYWQgaW50byBpbWFnZTpcbiAgICBkZWxldGUgcmVzdFsnbGF5b3V0J11cbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKCFzcmMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIGlzIG1pc3NpbmcgcmVxdWlyZWQgXCJzcmNcIiBwcm9wZXJ0eS4gTWFrZSBzdXJlIHlvdSBwYXNzIFwic3JjXCIgaW4gcHJvcHMgdG8gdGhlIFxcYG5leHQvaW1hZ2VcXGAgY29tcG9uZW50LiBSZWNlaXZlZDogJHtKU09OLnN0cmluZ2lmeShcbiAgICAgICAgICB7IHdpZHRoLCBoZWlnaHQsIHF1YWxpdHkgfVxuICAgICAgICApfWBcbiAgICAgIClcbiAgICB9XG4gICAgaWYgKCFWQUxJRF9MQVlPVVRfVkFMVUVTLmluY2x1ZGVzKGxheW91dCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJsYXlvdXRcIiBwcm9wZXJ0eS4gUHJvdmlkZWQgXCIke2xheW91dH1cIiBzaG91bGQgYmUgb25lIG9mICR7VkFMSURfTEFZT1VUX1ZBTFVFUy5tYXAoXG4gICAgICAgICAgU3RyaW5nXG4gICAgICAgICkuam9pbignLCcpfS5gXG4gICAgICApXG4gICAgfVxuICAgIGlmICghVkFMSURfTE9BRElOR19WQUxVRVMuaW5jbHVkZXMobG9hZGluZykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJsb2FkaW5nXCIgcHJvcGVydHkuIFByb3ZpZGVkIFwiJHtsb2FkaW5nfVwiIHNob3VsZCBiZSBvbmUgb2YgJHtWQUxJRF9MT0FESU5HX1ZBTFVFUy5tYXAoXG4gICAgICAgICAgU3RyaW5nXG4gICAgICAgICkuam9pbignLCcpfS5gXG4gICAgICApXG4gICAgfVxuICAgIGlmIChwcmlvcml0eSAmJiBsb2FkaW5nID09PSAnbGF6eScpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGJvdGggXCJwcmlvcml0eVwiIGFuZCBcImxvYWRpbmc9J2xhenknXCIgcHJvcGVydGllcy4gT25seSBvbmUgc2hvdWxkIGJlIHVzZWQuYFxuICAgICAgKVxuICAgIH1cbiAgICBpZiAodW5zaXplZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgZGVwcmVjYXRlZCBcInVuc2l6ZWRcIiBwcm9wZXJ0eSwgd2hpY2ggd2FzIHJlbW92ZWQgaW4gZmF2b3Igb2YgdGhlIFwibGF5b3V0PSdmaWxsJ1wiIHByb3BlcnR5YFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGxldCBpc0xhenkgPVxuICAgICFwcmlvcml0eSAmJiAobG9hZGluZyA9PT0gJ2xhenknIHx8IHR5cGVvZiBsb2FkaW5nID09PSAndW5kZWZpbmVkJylcbiAgaWYgKHNyYyAmJiBzcmMuc3RhcnRzV2l0aCgnZGF0YTonKSkge1xuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUVFAvQmFzaWNzX29mX0hUVFAvRGF0YV9VUklzXG4gICAgdW5vcHRpbWl6ZWQgPSB0cnVlXG4gICAgaXNMYXp5ID0gZmFsc2VcbiAgfVxuXG4gIGNvbnN0IFtzZXRSZWYsIGlzSW50ZXJzZWN0ZWRdID0gdXNlSW50ZXJzZWN0aW9uPEhUTUxJbWFnZUVsZW1lbnQ+KHtcbiAgICByb290TWFyZ2luOiAnMjAwcHgnLFxuICAgIGRpc2FibGVkOiAhaXNMYXp5LFxuICB9KVxuICBjb25zdCBpc1Zpc2libGUgPSAhaXNMYXp5IHx8IGlzSW50ZXJzZWN0ZWRcblxuICBjb25zdCB3aWR0aEludCA9IGdldEludCh3aWR0aClcbiAgY29uc3QgaGVpZ2h0SW50ID0gZ2V0SW50KGhlaWdodClcbiAgY29uc3QgcXVhbGl0eUludCA9IGdldEludChxdWFsaXR5KVxuXG4gIGxldCB3cmFwcGVyU3R5bGU6IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snZGl2J11bJ3N0eWxlJ10gfCB1bmRlZmluZWRcbiAgbGV0IHNpemVyU3R5bGU6IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snZGl2J11bJ3N0eWxlJ10gfCB1bmRlZmluZWRcbiAgbGV0IHNpemVyU3ZnOiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgbGV0IGltZ1N0eWxlOiBJbWdFbGVtZW50U3R5bGUgfCB1bmRlZmluZWQgPSB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiAwLFxuICAgIGxlZnQ6IDAsXG4gICAgYm90dG9tOiAwLFxuICAgIHJpZ2h0OiAwLFxuXG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgcGFkZGluZzogMCxcbiAgICBib3JkZXI6ICdub25lJyxcbiAgICBtYXJnaW46ICdhdXRvJyxcblxuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgd2lkdGg6IDAsXG4gICAgaGVpZ2h0OiAwLFxuICAgIG1pbldpZHRoOiAnMTAwJScsXG4gICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICBtaW5IZWlnaHQ6ICcxMDAlJyxcbiAgICBtYXhIZWlnaHQ6ICcxMDAlJyxcblxuICAgIG9iamVjdEZpdCxcbiAgICBvYmplY3RQb3NpdGlvbixcbiAgfVxuICBpZiAoXG4gICAgdHlwZW9mIHdpZHRoSW50ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIHR5cGVvZiBoZWlnaHRJbnQgIT09ICd1bmRlZmluZWQnICYmXG4gICAgbGF5b3V0ICE9PSAnZmlsbCdcbiAgKSB7XG4gICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiAvPlxuICAgIGNvbnN0IHF1b3RpZW50ID0gaGVpZ2h0SW50IC8gd2lkdGhJbnRcbiAgICBjb25zdCBwYWRkaW5nVG9wID0gaXNOYU4ocXVvdGllbnQpID8gJzEwMCUnIDogYCR7cXVvdGllbnQgKiAxMDB9JWBcbiAgICBpZiAobGF5b3V0ID09PSAncmVzcG9uc2l2ZScpIHtcbiAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwicmVzcG9uc2l2ZVwiIC8+XG4gICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG5cbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgIG1hcmdpbjogMCxcbiAgICAgIH1cbiAgICAgIHNpemVyU3R5bGUgPSB7IGRpc3BsYXk6ICdibG9jaycsIGJveFNpemluZzogJ2JvcmRlci1ib3gnLCBwYWRkaW5nVG9wIH1cbiAgICB9IGVsc2UgaWYgKGxheW91dCA9PT0gJ2ludHJpbnNpYycpIHtcbiAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwiaW50cmluc2ljXCIgLz5cbiAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICBtYXJnaW46IDAsXG4gICAgICB9XG4gICAgICBzaXplclN0eWxlID0ge1xuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgIH1cbiAgICAgIHNpemVyU3ZnID0gYDxzdmcgd2lkdGg9XCIke3dpZHRoSW50fVwiIGhlaWdodD1cIiR7aGVpZ2h0SW50fVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2ZXJzaW9uPVwiMS4xXCIvPmBcbiAgICB9IGVsc2UgaWYgKGxheW91dCA9PT0gJ2ZpeGVkJykge1xuICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJmaXhlZFwiIC8+XG4gICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgd2lkdGg6IHdpZHRoSW50LFxuICAgICAgICBoZWlnaHQ6IGhlaWdodEludCxcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAoXG4gICAgdHlwZW9mIHdpZHRoSW50ID09PSAndW5kZWZpbmVkJyAmJlxuICAgIHR5cGVvZiBoZWlnaHRJbnQgPT09ICd1bmRlZmluZWQnICYmXG4gICAgbGF5b3V0ID09PSAnZmlsbCdcbiAgKSB7XG4gICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgbGF5b3V0PVwiZmlsbFwiIC8+XG4gICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcblxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICB0b3A6IDAsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgYm90dG9tOiAwLFxuICAgICAgcmlnaHQ6IDAsXG5cbiAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgbWFyZ2luOiAwLFxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiAvPlxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIG11c3QgdXNlIFwid2lkdGhcIiBhbmQgXCJoZWlnaHRcIiBwcm9wZXJ0aWVzIG9yIFwibGF5b3V0PSdmaWxsJ1wiIHByb3BlcnR5LmBcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBsZXQgaW1nQXR0cmlidXRlczogR2VuSW1nQXR0cnNSZXN1bHQgPSB7XG4gICAgc3JjOlxuICAgICAgJ2RhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEFRQUJBSUFBQUFBQUFQLy8veUg1QkFFQUFBQUFMQUFBQUFBQkFBRUFBQUlCUkFBNycsXG4gICAgc3JjU2V0OiB1bmRlZmluZWQsXG4gICAgc2l6ZXM6IHVuZGVmaW5lZCxcbiAgfVxuXG4gIGlmIChpc1Zpc2libGUpIHtcbiAgICBpbWdBdHRyaWJ1dGVzID0gZ2VuZXJhdGVJbWdBdHRycyh7XG4gICAgICBzcmMsXG4gICAgICB1bm9wdGltaXplZCxcbiAgICAgIGxheW91dCxcbiAgICAgIHdpZHRoOiB3aWR0aEludCxcbiAgICAgIHF1YWxpdHk6IHF1YWxpdHlJbnQsXG4gICAgICBzaXplcyxcbiAgICAgIGxvYWRlcixcbiAgICB9KVxuICB9XG5cbiAgaWYgKHVuc2l6ZWQpIHtcbiAgICB3cmFwcGVyU3R5bGUgPSB1bmRlZmluZWRcbiAgICBzaXplclN0eWxlID0gdW5kZWZpbmVkXG4gICAgaW1nU3R5bGUgPSB1bmRlZmluZWRcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3dyYXBwZXJTdHlsZX0+XG4gICAgICB7c2l6ZXJTdHlsZSA/IChcbiAgICAgICAgPGRpdiBzdHlsZT17c2l6ZXJTdHlsZX0+XG4gICAgICAgICAge3NpemVyU3ZnID8gKFxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAsXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgYXJpYS1oaWRkZW49e3RydWV9XG4gICAgICAgICAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxuICAgICAgICAgICAgICBzcmM9e2BkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LCR7dG9CYXNlNjQoc2l6ZXJTdmcpfWB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiBudWxsfVxuICAgICAgeyFpc1Zpc2libGUgJiYgKFxuICAgICAgICA8bm9zY3JpcHQ+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgICAgICB7Li4uZ2VuZXJhdGVJbWdBdHRycyh7XG4gICAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgICAgdW5vcHRpbWl6ZWQsXG4gICAgICAgICAgICAgIGxheW91dCxcbiAgICAgICAgICAgICAgd2lkdGg6IHdpZHRoSW50LFxuICAgICAgICAgICAgICBxdWFsaXR5OiBxdWFsaXR5SW50LFxuICAgICAgICAgICAgICBzaXplcyxcbiAgICAgICAgICAgICAgbG9hZGVyLFxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICBzcmM9e3NyY31cbiAgICAgICAgICAgIGRlY29kaW5nPVwiYXN5bmNcIlxuICAgICAgICAgICAgc2l6ZXM9e3NpemVzfVxuICAgICAgICAgICAgc3R5bGU9e2ltZ1N0eWxlfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9ub3NjcmlwdD5cbiAgICAgICl9XG4gICAgICA8aW1nXG4gICAgICAgIHsuLi5yZXN0fVxuICAgICAgICB7Li4uaW1nQXR0cmlidXRlc31cbiAgICAgICAgZGVjb2Rpbmc9XCJhc3luY1wiXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICByZWY9e3NldFJlZn1cbiAgICAgICAgc3R5bGU9e2ltZ1N0eWxlfVxuICAgICAgLz5cbiAgICAgIHtwcmlvcml0eSA/IChcbiAgICAgICAgLy8gTm90ZSBob3cgd2Ugb21pdCB0aGUgYGhyZWZgIGF0dHJpYnV0ZSwgYXMgaXQgd291bGQgb25seSBiZSByZWxldmFudFxuICAgICAgICAvLyBmb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBgaW1hZ2VzcmNzZXRgLCBhbmQgaW4gdGhvc2UgY2FzZXNcbiAgICAgICAgLy8gaXQgd291bGQgbGlrZWx5IGNhdXNlIHRoZSBpbmNvcnJlY3QgaW1hZ2UgdG8gYmUgcHJlbG9hZGVkLlxuICAgICAgICAvL1xuICAgICAgICAvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9zZW1hbnRpY3MuaHRtbCNhdHRyLWxpbmstaW1hZ2VzcmNzZXRcbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgIGtleT17XG4gICAgICAgICAgICAgICdfX25pbWctJyArXG4gICAgICAgICAgICAgIGltZ0F0dHJpYnV0ZXMuc3JjICtcbiAgICAgICAgICAgICAgaW1nQXR0cmlidXRlcy5zcmNTZXQgK1xuICAgICAgICAgICAgICBpbWdBdHRyaWJ1dGVzLnNpemVzXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZWw9XCJwcmVsb2FkXCJcbiAgICAgICAgICAgIGFzPVwiaW1hZ2VcIlxuICAgICAgICAgICAgaHJlZj17aW1nQXR0cmlidXRlcy5zcmNTZXQgPyB1bmRlZmluZWQgOiBpbWdBdHRyaWJ1dGVzLnNyY31cbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmU6IGltYWdlc3Jjc2V0IGlzIG5vdCB5ZXQgaW4gdGhlIGxpbmsgZWxlbWVudCB0eXBlXG4gICAgICAgICAgICBpbWFnZXNyY3NldD17aW1nQXR0cmlidXRlcy5zcmNTZXR9XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlOiBpbWFnZXNpemVzIGlzIG5vdCB5ZXQgaW4gdGhlIGxpbmsgZWxlbWVudCB0eXBlXG4gICAgICAgICAgICBpbWFnZXNpemVzPXtpbWdBdHRyaWJ1dGVzLnNpemVzfVxuICAgICAgICAgID48L2xpbms+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICkgOiBudWxsfVxuICAgIDwvZGl2PlxuICApXG59XG5cbi8vQlVJTFQgSU4gTE9BREVSU1xuXG5mdW5jdGlvbiBub3JtYWxpemVTcmMoc3JjOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gc3JjWzBdID09PSAnLycgPyBzcmMuc2xpY2UoMSkgOiBzcmNcbn1cblxuZnVuY3Rpb24gaW1naXhMb2FkZXIoe1xuICByb290LFxuICBzcmMsXG4gIHdpZHRoLFxuICBxdWFsaXR5LFxufTogRGVmYXVsdEltYWdlTG9hZGVyUHJvcHMpOiBzdHJpbmcge1xuICAvLyBEZW1vOiBodHRwczovL3N0YXRpYy5pbWdpeC5uZXQvZGFpc3kucG5nP2Zvcm1hdD1hdXRvJmZpdD1tYXgmdz0zMDBcbiAgY29uc3QgcGFyYW1zID0gWydhdXRvPWZvcm1hdCcsICdmaXQ9bWF4JywgJ3c9JyArIHdpZHRoXVxuICBsZXQgcGFyYW1zU3RyaW5nID0gJydcbiAgaWYgKHF1YWxpdHkpIHtcbiAgICBwYXJhbXMucHVzaCgncT0nICsgcXVhbGl0eSlcbiAgfVxuXG4gIGlmIChwYXJhbXMubGVuZ3RoKSB7XG4gICAgcGFyYW1zU3RyaW5nID0gJz8nICsgcGFyYW1zLmpvaW4oJyYnKVxuICB9XG4gIHJldHVybiBgJHtyb290fSR7bm9ybWFsaXplU3JjKHNyYyl9JHtwYXJhbXNTdHJpbmd9YFxufVxuXG5mdW5jdGlvbiBha2FtYWlMb2FkZXIoeyByb290LCBzcmMsIHdpZHRoIH06IERlZmF1bHRJbWFnZUxvYWRlclByb3BzKTogc3RyaW5nIHtcbiAgcmV0dXJuIGAke3Jvb3R9JHtub3JtYWxpemVTcmMoc3JjKX0/aW13aWR0aD0ke3dpZHRofWBcbn1cblxuZnVuY3Rpb24gY2xvdWRpbmFyeUxvYWRlcih7XG4gIHJvb3QsXG4gIHNyYyxcbiAgd2lkdGgsXG4gIHF1YWxpdHksXG59OiBEZWZhdWx0SW1hZ2VMb2FkZXJQcm9wcyk6IHN0cmluZyB7XG4gIC8vIERlbW86IGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2RlbW8vaW1hZ2UvdXBsb2FkL3dfMzAwLGNfbGltaXQscV9hdXRvL3R1cnRsZXMuanBnXG4gIGNvbnN0IHBhcmFtcyA9IFsnZl9hdXRvJywgJ2NfbGltaXQnLCAnd18nICsgd2lkdGgsICdxXycgKyAocXVhbGl0eSB8fCAnYXV0bycpXVxuICBsZXQgcGFyYW1zU3RyaW5nID0gcGFyYW1zLmpvaW4oJywnKSArICcvJ1xuICByZXR1cm4gYCR7cm9vdH0ke3BhcmFtc1N0cmluZ30ke25vcm1hbGl6ZVNyYyhzcmMpfWBcbn1cblxuZnVuY3Rpb24gZGVmYXVsdExvYWRlcih7XG4gIHJvb3QsXG4gIHNyYyxcbiAgd2lkdGgsXG4gIHF1YWxpdHksXG59OiBEZWZhdWx0SW1hZ2VMb2FkZXJQcm9wcyk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbWlzc2luZ1ZhbHVlcyA9IFtdXG5cbiAgICAvLyB0aGVzZSBzaG91bGQgYWx3YXlzIGJlIHByb3ZpZGVkIGJ1dCBtYWtlIHN1cmUgdGhleSBhcmVcbiAgICBpZiAoIXNyYykgbWlzc2luZ1ZhbHVlcy5wdXNoKCdzcmMnKVxuICAgIGlmICghd2lkdGgpIG1pc3NpbmdWYWx1ZXMucHVzaCgnd2lkdGgnKVxuXG4gICAgaWYgKG1pc3NpbmdWYWx1ZXMubGVuZ3RoID4gMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgTmV4dCBJbWFnZSBPcHRpbWl6YXRpb24gcmVxdWlyZXMgJHttaXNzaW5nVmFsdWVzLmpvaW4oXG4gICAgICAgICAgJywgJ1xuICAgICAgICApfSB0byBiZSBwcm92aWRlZC4gTWFrZSBzdXJlIHlvdSBwYXNzIHRoZW0gYXMgcHJvcHMgdG8gdGhlIFxcYG5leHQvaW1hZ2VcXGAgY29tcG9uZW50LiBSZWNlaXZlZDogJHtKU09OLnN0cmluZ2lmeShcbiAgICAgICAgICB7IHNyYywgd2lkdGgsIHF1YWxpdHkgfVxuICAgICAgICApfWBcbiAgICAgIClcbiAgICB9XG5cbiAgICBpZiAoc3JjLnN0YXJ0c1dpdGgoJy8vJykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCB0byBwYXJzZSBzcmMgXCIke3NyY31cIiBvbiBcXGBuZXh0L2ltYWdlXFxgLCBwcm90b2NvbC1yZWxhdGl2ZSBVUkwgKC8vKSBtdXN0IGJlIGNoYW5nZWQgdG8gYW4gYWJzb2x1dGUgVVJMIChodHRwOi8vIG9yIGh0dHBzOi8vKWBcbiAgICAgIClcbiAgICB9XG5cbiAgICBpZiAoIXNyYy5zdGFydHNXaXRoKCcvJykgJiYgY29uZmlnRG9tYWlucykge1xuICAgICAgbGV0IHBhcnNlZFNyYzogVVJMXG4gICAgICB0cnkge1xuICAgICAgICBwYXJzZWRTcmMgPSBuZXcgVVJMKHNyYylcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBGYWlsZWQgdG8gcGFyc2Ugc3JjIFwiJHtzcmN9XCIgb24gXFxgbmV4dC9pbWFnZVxcYCwgaWYgdXNpbmcgcmVsYXRpdmUgaW1hZ2UgaXQgbXVzdCBzdGFydCB3aXRoIGEgbGVhZGluZyBzbGFzaCBcIi9cIiBvciBiZSBhbiBhYnNvbHV0ZSBVUkwgKGh0dHA6Ly8gb3IgaHR0cHM6Ly8pYFxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGlmICghY29uZmlnRG9tYWlucy5pbmNsdWRlcyhwYXJzZWRTcmMuaG9zdG5hbWUpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgSW52YWxpZCBzcmMgcHJvcCAoJHtzcmN9KSBvbiBcXGBuZXh0L2ltYWdlXFxgLCBob3N0bmFtZSBcIiR7cGFyc2VkU3JjLmhvc3RuYW1lfVwiIGlzIG5vdCBjb25maWd1cmVkIHVuZGVyIGltYWdlcyBpbiB5b3VyIFxcYG5leHQuY29uZmlnLmpzXFxgXFxuYCArXG4gICAgICAgICAgICBgU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbmV4dC1pbWFnZS11bmNvbmZpZ3VyZWQtaG9zdGBcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBgJHtyb290fT91cmw9JHtlbmNvZGVVUklDb21wb25lbnQoc3JjKX0mdz0ke3dpZHRofSZxPSR7cXVhbGl0eSB8fCA3NX1gXG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4sIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgYWRkQmFzZVBhdGgsXG4gIGFkZExvY2FsZSxcbiAgZ2V0RG9tYWluTG9jYWxlLFxuICBpc0xvY2FsVVJMLFxuICBOZXh0Um91dGVyLFxuICBQcmVmZXRjaE9wdGlvbnMsXG4gIHJlc29sdmVIcmVmLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuaW1wb3J0IHsgdXNlSW50ZXJzZWN0aW9uIH0gZnJvbSAnLi91c2UtaW50ZXJzZWN0aW9uJ1xuXG50eXBlIFVybCA9IHN0cmluZyB8IFVybE9iamVjdFxudHlwZSBSZXF1aXJlZEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IG5ldmVyIDogS1xufVtrZXlvZiBUXVxudHlwZSBPcHRpb25hbEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IEsgOiBuZXZlclxufVtrZXlvZiBUXVxuXG5leHBvcnQgdHlwZSBMaW5rUHJvcHMgPSB7XG4gIGhyZWY6IFVybFxuICBhcz86IFVybFxuICByZXBsYWNlPzogYm9vbGVhblxuICBzY3JvbGw/OiBib29sZWFuXG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIHBhc3NIcmVmPzogYm9vbGVhblxuICBwcmVmZXRjaD86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbn1cbnR5cGUgTGlua1Byb3BzUmVxdWlyZWQgPSBSZXF1aXJlZEtleXM8TGlua1Byb3BzPlxudHlwZSBMaW5rUHJvcHNPcHRpb25hbCA9IE9wdGlvbmFsS2V5czxMaW5rUHJvcHM+XG5cbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBwcmVmZXRjaChcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIG9wdGlvbnM/OiBQcmVmZXRjaE9wdGlvbnNcbik6IHZvaWQge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgIXJvdXRlcikgcmV0dXJuXG4gIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycikgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH0pXG4gIGNvbnN0IGN1ckxvY2FsZSA9XG4gICAgb3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgIT09ICd1bmRlZmluZWQnXG4gICAgICA/IG9wdGlvbnMubG9jYWxlXG4gICAgICA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlXG5cbiAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXSA9IHRydWVcbn1cblxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50KTogYm9vbGVhbiB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50XG4gIHJldHVybiAoXG4gICAgKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgZXZlbnQubWV0YUtleSB8fFxuICAgIGV2ZW50LmN0cmxLZXkgfHxcbiAgICBldmVudC5zaGlmdEtleSB8fFxuICAgIGV2ZW50LmFsdEtleSB8fCAvLyB0cmlnZ2VycyByZXNvdXJjZSBkb3dubG9hZFxuICAgIChldmVudC5uYXRpdmVFdmVudCAmJiBldmVudC5uYXRpdmVFdmVudC53aGljaCA9PT0gMilcbiAgKVxufVxuXG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChcbiAgZTogUmVhY3QuTW91c2VFdmVudCxcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIHJlcGxhY2U/OiBib29sZWFuLFxuICBzaGFsbG93PzogYm9vbGVhbixcbiAgc2Nyb2xsPzogYm9vbGVhbixcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbik6IHZvaWQge1xuICBjb25zdCB7IG5vZGVOYW1lIH0gPSBlLmN1cnJlbnRUYXJnZXRcblxuICBpZiAobm9kZU5hbWUgPT09ICdBJyAmJiAoaXNNb2RpZmllZEV2ZW50KGUpIHx8ICFpc0xvY2FsVVJMKGhyZWYpKSkge1xuICAgIC8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxuICAgIHJldHVyblxuICB9XG5cbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gIGlmIChzY3JvbGwgPT0gbnVsbCkge1xuICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgfVxuXG4gIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHtcbiAgICBzaGFsbG93LFxuICAgIGxvY2FsZSxcbiAgICBzY3JvbGwsXG4gIH0pXG59XG5cbmZ1bmN0aW9uIExpbmsocHJvcHM6IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPExpbmtQcm9wcz4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJnczoge1xuICAgICAga2V5OiBzdHJpbmdcbiAgICAgIGV4cGVjdGVkOiBzdHJpbmdcbiAgICAgIGFjdHVhbDogc3RyaW5nXG4gICAgfSkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmAgK1xuICAgICAgICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgPyBcIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCJcbiAgICAgICAgICAgIDogJycpXG4gICAgICApXG4gICAgfVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCByZXF1aXJlZFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNSZXF1aXJlZCwgdHJ1ZT4gPSB7XG4gICAgICBocmVmOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCByZXF1aXJlZFByb3BzOiBMaW5rUHJvcHNSZXF1aXJlZFtdID0gT2JqZWN0LmtleXMoXG4gICAgICByZXF1aXJlZFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc1JlcXVpcmVkW11cbiAgICByZXF1aXJlZFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzUmVxdWlyZWQpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdocmVmJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSA9PSBudWxsIHx8XG4gICAgICAgICAgKHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCcpXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogcHJvcHNba2V5XSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCBvcHRpb25hbFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNPcHRpb25hbCwgdHJ1ZT4gPSB7XG4gICAgICBhczogdHJ1ZSxcbiAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICBzY3JvbGw6IHRydWUsXG4gICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgcGFzc0hyZWY6IHRydWUsXG4gICAgICBwcmVmZXRjaDogdHJ1ZSxcbiAgICAgIGxvY2FsZTogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wczogTGlua1Byb3BzT3B0aW9uYWxbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgb3B0aW9uYWxQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNPcHRpb25hbFtdXG4gICAgb3B0aW9uYWxQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc09wdGlvbmFsKSA9PiB7XG4gICAgICBjb25zdCB2YWxUeXBlID0gdHlwZW9mIHByb3BzW2tleV1cblxuICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJyAmJiB2YWxUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2xvY2FsZScpIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAga2V5ID09PSAncmVwbGFjZScgfHxcbiAgICAgICAga2V5ID09PSAnc2Nyb2xsJyB8fFxuICAgICAgICBrZXkgPT09ICdzaGFsbG93JyB8fFxuICAgICAgICBrZXkgPT09ICdwYXNzSHJlZicgfHxcbiAgICAgICAga2V5ID09PSAncHJlZmV0Y2gnXG4gICAgICApIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gIT0gbnVsbCAmJiB2YWxUeXBlICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBjb25zdCBoYXNXYXJuZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpXG4gICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgIClcbiAgICB9XG4gIH1cbiAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHBhdGhuYW1lID0gKHJvdXRlciAmJiByb3V0ZXIucGF0aG5hbWUpIHx8ICcvJ1xuXG4gIGNvbnN0IHsgaHJlZiwgYXMgfSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmhyZWYsIHRydWUpXG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgIGFzOiBwcm9wcy5hc1xuICAgICAgICA/IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5hcylcbiAgICAgICAgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZixcbiAgICB9XG4gIH0sIFtwYXRobmFtZSwgcHJvcHMuaHJlZiwgcHJvcHMuYXNdKVxuXG4gIGxldCB7IGNoaWxkcmVuLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSB9ID0gcHJvcHNcblxuICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICBjaGlsZHJlbiA9IDxhPntjaGlsZHJlbn08L2E+XG4gIH1cblxuICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgY29uc3QgY2hpbGQ6IGFueSA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gIGNvbnN0IGNoaWxkUmVmOiBhbnkgPSBjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZlxuXG4gIGNvbnN0IFtzZXRJbnRlcnNlY3Rpb25SZWYsIGlzVmlzaWJsZV0gPSB1c2VJbnRlcnNlY3Rpb24oe1xuICAgIHJvb3RNYXJnaW46ICcyMDBweCcsXG4gIH0pXG4gIGNvbnN0IHNldFJlZiA9IFJlYWN0LnVzZUNhbGxiYWNrKFxuICAgIChlbDogRWxlbWVudCkgPT4ge1xuICAgICAgc2V0SW50ZXJzZWN0aW9uUmVmKGVsKVxuICAgICAgaWYgKGNoaWxkUmVmKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkUmVmKGVsKVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY2hpbGRSZWYuY3VycmVudCA9IGVsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFtjaGlsZFJlZiwgc2V0SW50ZXJzZWN0aW9uUmVmXVxuICApXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc2hvdWxkUHJlZmV0Y2ggPSBpc1Zpc2libGUgJiYgcCAmJiBpc0xvY2FsVVJMKGhyZWYpXG4gICAgY29uc3QgY3VyTG9jYWxlID1cbiAgICAgIHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGVcbiAgICBjb25zdCBpc1ByZWZldGNoZWQgPVxuICAgICAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXVxuICAgIGlmIChzaG91bGRQcmVmZXRjaCAmJiAhaXNQcmVmZXRjaGVkKSB7XG4gICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7XG4gICAgICAgIGxvY2FsZTogY3VyTG9jYWxlLFxuICAgICAgfSlcbiAgICB9XG4gIH0sIFthcywgaHJlZiwgaXNWaXNpYmxlLCBsb2NhbGUsIHAsIHJvdXRlcl0pXG5cbiAgY29uc3QgY2hpbGRQcm9wczoge1xuICAgIG9uTW91c2VFbnRlcj86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBocmVmPzogc3RyaW5nXG4gICAgcmVmPzogYW55XG4gIH0gPSB7XG4gICAgcmVmOiBzZXRSZWYsXG4gICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICB9XG4gICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSlcbiAgICAgIH1cbiAgICB9LFxuICB9XG5cbiAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKVxuICAgIH1cbiAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7IHByaW9yaXR5OiB0cnVlIH0pXG4gIH1cblxuICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gIGlmIChwcm9wcy5wYXNzSHJlZiB8fCAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkpIHtcbiAgICBjb25zdCBjdXJMb2NhbGUgPVxuICAgICAgdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZVxuXG4gICAgLy8gd2Ugb25seSByZW5kZXIgZG9tYWluIGxvY2FsZXMgaWYgd2UgYXJlIGN1cnJlbnRseSBvbiBhIGRvbWFpbiBsb2NhbGVcbiAgICAvLyBzbyB0aGF0IGxvY2FsZSBsaW5rcyBhcmUgc3RpbGwgdmlzaXRhYmxlIGluIGRldmVsb3BtZW50L3ByZXZpZXcgZW52c1xuICAgIGNvbnN0IGxvY2FsZURvbWFpbiA9XG4gICAgICByb3V0ZXIgJiZcbiAgICAgIHJvdXRlci5pc0xvY2FsZURvbWFpbiAmJlxuICAgICAgZ2V0RG9tYWluTG9jYWxlKFxuICAgICAgICBhcyxcbiAgICAgICAgY3VyTG9jYWxlLFxuICAgICAgICByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZXMsXG4gICAgICAgIHJvdXRlciAmJiByb3V0ZXIuZG9tYWluTG9jYWxlc1xuICAgICAgKVxuXG4gICAgY2hpbGRQcm9wcy5ocmVmID1cbiAgICAgIGxvY2FsZURvbWFpbiB8fFxuICAgICAgYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGFzLCBjdXJMb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIuZGVmYXVsdExvY2FsZSkpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCIvKipcbiAqIFJlbW92ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBpZiB0aGVyZSBpcyBvbmUuIFByZXNlcnZlcyB0aGUgcm9vdCBwYXRoIGAvYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoXG59XG5cbi8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIXG4gID8gKHBhdGg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpXG4gICAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gcGF0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLydcbiAgICAgIH1cbiAgICB9XG4gIDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2hcbiIsInR5cGUgUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSA9IGFueVxudHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrT3B0aW9ucyA9IHtcbiAgdGltZW91dDogbnVtYmVyXG59XG50eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSA9IHtcbiAgcmVhZG9ubHkgZGlkVGltZW91dDogYm9vbGVhblxuICB0aW1lUmVtYWluaW5nOiAoKSA9PiBudW1iZXJcbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICByZXF1ZXN0SWRsZUNhbGxiYWNrOiAoXG4gICAgICBjYWxsYmFjazogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWQsXG4gICAgICBvcHRzPzogUmVxdWVzdElkbGVDYWxsYmFja09wdGlvbnNcbiAgICApID0+IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGVcbiAgICBjYW5jZWxJZGxlQ2FsbGJhY2s6IChpZDogUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSkgPT4gdm9pZFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrID1cbiAgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2spIHx8XG4gIGZ1bmN0aW9uIChcbiAgICBjYjogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWRcbiAgKTogTm9kZUpTLlRpbWVvdXQge1xuICAgIGxldCBzdGFydCA9IERhdGUubm93KClcbiAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBjYih7XG4gICAgICAgIGRpZFRpbWVvdXQ6IGZhbHNlLFxuICAgICAgICB0aW1lUmVtYWluaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIE1hdGgubWF4KDAsIDUwIC0gKERhdGUubm93KCkgLSBzdGFydCkpXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgIH0sIDEpXG4gIH1cblxuZXhwb3J0IGNvbnN0IGNhbmNlbElkbGVDYWxsYmFjayA9XG4gICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2spIHx8XG4gIGZ1bmN0aW9uIChpZDogUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSkge1xuICAgIHJldHVybiBjbGVhclRpbWVvdXQoaWQpXG4gIH1cbiIsImltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IENsaWVudEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9idWlsZC93ZWJwYWNrL3BsdWdpbnMvYnVpbGQtbWFuaWZlc3QtcGx1Z2luJ1xuaW1wb3J0IGdldEFzc2V0UGF0aEZyb21Sb3V0ZSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUnXG5pbXBvcnQgeyByZXF1ZXN0SWRsZUNhbGxiYWNrIH0gZnJvbSAnLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2snXG5cbi8vIDMuOHMgd2FzIGFyYml0cmFyaWx5IGNob3NlbiBhcyBpdCdzIHdoYXQgaHR0cHM6Ly93ZWIuZGV2L2ludGVyYWN0aXZlXG4vLyBjb25zaWRlcnMgYXMgXCJHb29kXCIgdGltZS10by1pbnRlcmFjdGl2ZS4gV2UgbXVzdCBhc3N1bWUgc29tZXRoaW5nIHdlbnRcbi8vIHdyb25nIGJleW9uZCB0aGlzIHBvaW50LCBhbmQgdGhlbiBmYWxsLWJhY2sgdG8gYSBmdWxsIHBhZ2UgdHJhbnNpdGlvbiB0b1xuLy8gc2hvdyB0aGUgdXNlciBzb21ldGhpbmcgb2YgdmFsdWUuXG5jb25zdCBNU19NQVhfSURMRV9ERUxBWSA9IDM4MDBcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBfX0JVSUxEX01BTklGRVNUPzogQ2xpZW50QnVpbGRNYW5pZmVzdFxuICAgIF9fQlVJTERfTUFOSUZFU1RfQ0I/OiBGdW5jdGlvblxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkRW50cnlwb2ludFN1Y2Nlc3Mge1xuICBjb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgZXhwb3J0czogYW55XG59XG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZEVudHJ5cG9pbnRGYWlsdXJlIHtcbiAgZXJyb3I6IHVua25vd25cbn1cbmV4cG9ydCB0eXBlIFJvdXRlRW50cnlwb2ludCA9IExvYWRlZEVudHJ5cG9pbnRTdWNjZXNzIHwgTG9hZGVkRW50cnlwb2ludEZhaWx1cmVcblxuZXhwb3J0IGludGVyZmFjZSBSb3V0ZVN0eWxlU2hlZXQge1xuICBocmVmOiBzdHJpbmdcbiAgY29udGVudDogc3RyaW5nXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkUm91dGVTdWNjZXNzIGV4dGVuZHMgTG9hZGVkRW50cnlwb2ludFN1Y2Nlc3Mge1xuICBzdHlsZXM6IFJvdXRlU3R5bGVTaGVldFtdXG59XG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZFJvdXRlRmFpbHVyZSB7XG4gIGVycm9yOiB1bmtub3duXG59XG5leHBvcnQgdHlwZSBSb3V0ZUxvYWRlckVudHJ5ID0gTG9hZGVkUm91dGVTdWNjZXNzIHwgTG9hZGVkUm91dGVGYWlsdXJlXG5cbmV4cG9ydCB0eXBlIEZ1dHVyZTxWPiA9IHtcbiAgcmVzb2x2ZTogKGVudHJ5cG9pbnQ6IFYpID0+IHZvaWRcbiAgZnV0dXJlOiBQcm9taXNlPFY+XG59XG5mdW5jdGlvbiB3aXRoRnV0dXJlPFQ+KFxuICBrZXk6IHN0cmluZyxcbiAgbWFwOiBNYXA8c3RyaW5nLCBGdXR1cmU8VD4gfCBUPixcbiAgZ2VuZXJhdG9yPzogKCkgPT4gUHJvbWlzZTxUPlxuKTogUHJvbWlzZTxUPiB7XG4gIGxldCBlbnRyeTogRnV0dXJlPFQ+IHwgVCB8IHVuZGVmaW5lZCA9IG1hcC5nZXQoa2V5KVxuICBpZiAoZW50cnkpIHtcbiAgICBpZiAoJ2Z1dHVyZScgaW4gZW50cnkpIHtcbiAgICAgIHJldHVybiBlbnRyeS5mdXR1cmVcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShlbnRyeSlcbiAgfVxuICBsZXQgcmVzb2x2ZXI6IChlbnRyeXBvaW50OiBUKSA9PiB2b2lkXG4gIGNvbnN0IHByb206IFByb21pc2U8VD4gPSBuZXcgUHJvbWlzZTxUPigocmVzb2x2ZSkgPT4ge1xuICAgIHJlc29sdmVyID0gcmVzb2x2ZVxuICB9KVxuICBtYXAuc2V0KGtleSwgKGVudHJ5ID0geyByZXNvbHZlOiByZXNvbHZlciEsIGZ1dHVyZTogcHJvbSB9KSlcbiAgcmV0dXJuIGdlbmVyYXRvclxuICAgID8gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgZ2VuZXJhdG9yKCkudGhlbigodmFsdWUpID0+IChyZXNvbHZlcih2YWx1ZSksIHZhbHVlKSlcbiAgICA6IHByb21cbn1cblxuZXhwb3J0IGludGVyZmFjZSBSb3V0ZUxvYWRlciB7XG4gIHdoZW5FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPFJvdXRlRW50cnlwb2ludD5cbiAgb25FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcsIGV4ZWN1dGU6ICgpID0+IHVua25vd24pOiB2b2lkXG4gIGxvYWRSb3V0ZShyb3V0ZTogc3RyaW5nLCBwcmVmZXRjaD86IGJvb2xlYW4pOiBQcm9taXNlPFJvdXRlTG9hZGVyRW50cnk+XG4gIHByZWZldGNoKHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+XG59XG5cbmZ1bmN0aW9uIGhhc1ByZWZldGNoKGxpbms/OiBIVE1MTGlua0VsZW1lbnQpOiBib29sZWFuIHtcbiAgdHJ5IHtcbiAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpXG4gICAgcmV0dXJuIChcbiAgICAgIC8vIGRldGVjdCBJRTExIHNpbmNlIGl0IHN1cHBvcnRzIHByZWZldGNoIGJ1dCBpc24ndCBkZXRlY3RlZFxuICAgICAgLy8gd2l0aCByZWxMaXN0LnN1cHBvcnRcbiAgICAgICghIXdpbmRvdy5NU0lucHV0TWV0aG9kQ29udGV4dCAmJiAhIShkb2N1bWVudCBhcyBhbnkpLmRvY3VtZW50TW9kZSkgfHxcbiAgICAgIGxpbmsucmVsTGlzdC5zdXBwb3J0cygncHJlZmV0Y2gnKVxuICAgIClcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuY29uc3QgY2FuUHJlZmV0Y2g6IGJvb2xlYW4gPSBoYXNQcmVmZXRjaCgpXG5cbmZ1bmN0aW9uIHByZWZldGNoVmlhRG9tKFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIGxpbms/OiBIVE1MTGlua0VsZW1lbnRcbik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGlua1tyZWw9XCJwcmVmZXRjaFwiXVtocmVmXj1cIiR7aHJlZn1cIl1gKSkge1xuICAgICAgcmV0dXJuIHJlcygpXG4gICAgfVxuXG4gICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKVxuXG4gICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbDpcbiAgICBpZiAoYXMpIGxpbmshLmFzID0gYXNcbiAgICBsaW5rIS5yZWwgPSBgcHJlZmV0Y2hgXG4gICAgbGluayEuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOIVxuICAgIGxpbmshLm9ubG9hZCA9IHJlc1xuICAgIGxpbmshLm9uZXJyb3IgPSByZWpcblxuICAgIC8vIGBocmVmYCBzaG91bGQgYWx3YXlzIGJlIGxhc3Q6XG4gICAgbGluayEuaHJlZiA9IGhyZWZcblxuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluaylcbiAgfSlcbn1cblxuY29uc3QgQVNTRVRfTE9BRF9FUlJPUiA9IFN5bWJvbCgnQVNTRVRfTE9BRF9FUlJPUicpXG4vLyBUT0RPOiB1bmV4cG9ydFxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtBc3NldEVycm9yKGVycjogRXJyb3IpOiBFcnJvciB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCBBU1NFVF9MT0FEX0VSUk9SLCB7fSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQXNzZXRFcnJvcihlcnI/OiBFcnJvcik6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICByZXR1cm4gZXJyICYmIEFTU0VUX0xPQURfRVJST1IgaW4gZXJyXG59XG5cbmZ1bmN0aW9uIGFwcGVuZFNjcmlwdChcbiAgc3JjOiBzdHJpbmcsXG4gIHNjcmlwdD86IEhUTUxTY3JpcHRFbGVtZW50XG4pOiBQcm9taXNlPHVua25vd24+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKVxuXG4gICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbC5cbiAgICAvLyAxLiBTZXR1cCBzdWNjZXNzL2ZhaWx1cmUgaG9va3MgaW4gY2FzZSB0aGUgYnJvd3NlciBzeW5jaHJvbm91c2x5XG4gICAgLy8gICAgZXhlY3V0ZXMgd2hlbiBgc3JjYCBpcyBzZXQuXG4gICAgc2NyaXB0Lm9ubG9hZCA9IHJlc29sdmVcbiAgICBzY3JpcHQub25lcnJvciA9ICgpID0+XG4gICAgICByZWplY3QobWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzY3JpcHQ6ICR7c3JjfWApKSlcblxuICAgIC8vIDIuIENvbmZpZ3VyZSB0aGUgY3Jvc3Mtb3JpZ2luIGF0dHJpYnV0ZSBiZWZvcmUgc2V0dGluZyBgc3JjYCBpbiBjYXNlIHRoZVxuICAgIC8vICAgIGJyb3dzZXIgYmVnaW5zIHRvIGZldGNoLlxuICAgIHNjcmlwdC5jcm9zc09yaWdpbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU4hXG5cbiAgICAvLyAzLiBGaW5hbGx5LCBzZXQgdGhlIHNvdXJjZSBhbmQgaW5qZWN0IGludG8gdGhlIERPTSBpbiBjYXNlIHRoZSBjaGlsZFxuICAgIC8vICAgIG11c3QgYmUgYXBwZW5kZWQgZm9yIGZldGNoaW5nIHRvIHN0YXJ0LlxuICAgIHNjcmlwdC5zcmMgPSBzcmNcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdClcbiAgfSlcbn1cblxuLy8gUmVzb2x2ZSBhIHByb21pc2UgdGhhdCB0aW1lcyBvdXQgYWZ0ZXIgZ2l2ZW4gYW1vdW50IG9mIG1pbGxpc2Vjb25kcy5cbmZ1bmN0aW9uIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQ8VD4oXG4gIHA6IFByb21pc2U8VD4sXG4gIG1zOiBudW1iZXIsXG4gIGVycjogRXJyb3Jcbik6IFByb21pc2U8VD4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuXG4gICAgcC50aGVuKChyKSA9PiB7XG4gICAgICAvLyBSZXNvbHZlZCwgY2FuY2VsIHRoZSB0aW1lb3V0XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgICByZXNvbHZlKHIpXG4gICAgfSkuY2F0Y2gocmVqZWN0KVxuXG4gICAgcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PlxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlmICghY2FuY2VsbGVkKSB7XG4gICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgfVxuICAgICAgfSwgbXMpXG4gICAgKVxuICB9KVxufVxuXG4vLyBUT0RPOiBzdG9wIGV4cG9ydGluZyBvciBjYWNoZSB0aGUgZmFpbHVyZVxuLy8gSXQnZCBiZSBiZXN0IHRvIHN0b3AgZXhwb3J0aW5nIHRoaXMuIEl0J3MgYW4gaW1wbGVtZW50YXRpb24gZGV0YWlsLiBXZSdyZVxuLy8gb25seSBleHBvcnRpbmcgaXQgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsdHkgd2l0aCB0aGUgYHBhZ2UtbG9hZGVyYC5cbi8vIE9ubHkgY2FjaGUgdGhpcyByZXNwb25zZSBhcyBhIGxhc3QgcmVzb3J0IGlmIHdlIGNhbm5vdCBlbGltaW5hdGUgYWxsIG90aGVyXG4vLyBjb2RlIGJyYW5jaGVzIHRoYXQgdXNlIHRoZSBCdWlsZCBNYW5pZmVzdCBDYWxsYmFjayBhbmQgcHVzaCB0aGVtIHRocm91Z2hcbi8vIHRoZSBSb3V0ZSBMb2FkZXIgaW50ZXJmYWNlLlxuZXhwb3J0IGZ1bmN0aW9uIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKTogUHJvbWlzZTxDbGllbnRCdWlsZE1hbmlmZXN0PiB7XG4gIGlmIChzZWxmLl9fQlVJTERfTUFOSUZFU1QpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVClcbiAgfVxuXG4gIGNvbnN0IG9uQnVpbGRNYW5pZmVzdDogUHJvbWlzZTxDbGllbnRCdWlsZE1hbmlmZXN0PiA9IG5ldyBQcm9taXNlPFxuICAgIENsaWVudEJ1aWxkTWFuaWZlc3RcbiAgPigocmVzb2x2ZSkgPT4ge1xuICAgIC8vIE1hbmRhdG9yeSBiZWNhdXNlIHRoaXMgaXMgbm90IGNvbmN1cnJlbnQgc2FmZTpcbiAgICBjb25zdCBjYiA9IHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQlxuICAgIHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQiA9ICgpID0+IHtcbiAgICAgIHJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUISlcbiAgICAgIGNiICYmIGNiKClcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQ8Q2xpZW50QnVpbGRNYW5pZmVzdD4oXG4gICAgb25CdWlsZE1hbmlmZXN0LFxuICAgIE1TX01BWF9JRExFX0RFTEFZLFxuICAgIG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcignRmFpbGVkIHRvIGxvYWQgY2xpZW50IGJ1aWxkIG1hbmlmZXN0JykpXG4gIClcbn1cblxuaW50ZXJmYWNlIFJvdXRlRmlsZXMge1xuICBzY3JpcHRzOiBzdHJpbmdbXVxuICBjc3M6IHN0cmluZ1tdXG59XG5mdW5jdGlvbiBnZXRGaWxlc0ZvclJvdXRlKFxuICBhc3NldFByZWZpeDogc3RyaW5nLFxuICByb3V0ZTogc3RyaW5nXG4pOiBQcm9taXNlPFJvdXRlRmlsZXM+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7XG4gICAgICBzY3JpcHRzOiBbXG4gICAgICAgIGFzc2V0UHJlZml4ICtcbiAgICAgICAgICAnL19uZXh0L3N0YXRpYy9jaHVua3MvcGFnZXMnICtcbiAgICAgICAgICBlbmNvZGVVUkkoZ2V0QXNzZXRQYXRoRnJvbVJvdXRlKHJvdXRlLCAnLmpzJykpLFxuICAgICAgXSxcbiAgICAgIC8vIFN0eWxlcyBhcmUgaGFuZGxlZCBieSBgc3R5bGUtbG9hZGVyYCBpbiBkZXZlbG9wbWVudDpcbiAgICAgIGNzczogW10sXG4gICAgfSlcbiAgfVxuICByZXR1cm4gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpLnRoZW4oKG1hbmlmZXN0KSA9PiB7XG4gICAgaWYgKCEocm91dGUgaW4gbWFuaWZlc3QpKSB7XG4gICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb29rdXAgcm91dGU6ICR7cm91dGV9YCkpXG4gICAgfVxuICAgIGNvbnN0IGFsbEZpbGVzID0gbWFuaWZlc3Rbcm91dGVdLm1hcChcbiAgICAgIChlbnRyeSkgPT4gYXNzZXRQcmVmaXggKyAnL19uZXh0LycgKyBlbmNvZGVVUkkoZW50cnkpXG4gICAgKVxuICAgIHJldHVybiB7XG4gICAgICBzY3JpcHRzOiBhbGxGaWxlcy5maWx0ZXIoKHYpID0+IHYuZW5kc1dpdGgoJy5qcycpKSxcbiAgICAgIGNzczogYWxsRmlsZXMuZmlsdGVyKCh2KSA9PiB2LmVuZHNXaXRoKCcuY3NzJykpLFxuICAgIH1cbiAgfSlcbn1cblxuZnVuY3Rpb24gY3JlYXRlUm91dGVMb2FkZXIoYXNzZXRQcmVmaXg6IHN0cmluZyk6IFJvdXRlTG9hZGVyIHtcbiAgY29uc3QgZW50cnlwb2ludHM6IE1hcDxcbiAgICBzdHJpbmcsXG4gICAgRnV0dXJlPFJvdXRlRW50cnlwb2ludD4gfCBSb3V0ZUVudHJ5cG9pbnRcbiAgPiA9IG5ldyBNYXAoKVxuICBjb25zdCBsb2FkZWRTY3JpcHRzOiBNYXA8c3RyaW5nLCBQcm9taXNlPHVua25vd24+PiA9IG5ldyBNYXAoKVxuICBjb25zdCBzdHlsZVNoZWV0czogTWFwPHN0cmluZywgUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+PiA9IG5ldyBNYXAoKVxuICBjb25zdCByb3V0ZXM6IE1hcDxcbiAgICBzdHJpbmcsXG4gICAgRnV0dXJlPFJvdXRlTG9hZGVyRW50cnk+IHwgUm91dGVMb2FkZXJFbnRyeVxuICA+ID0gbmV3IE1hcCgpXG5cbiAgZnVuY3Rpb24gbWF5YmVFeGVjdXRlU2NyaXB0KHNyYzogc3RyaW5nKTogUHJvbWlzZTx1bmtub3duPiB7XG4gICAgbGV0IHByb206IFByb21pc2U8dW5rbm93bj4gfCB1bmRlZmluZWQgPSBsb2FkZWRTY3JpcHRzLmdldChzcmMpXG4gICAgaWYgKHByb20pIHtcbiAgICAgIHJldHVybiBwcm9tXG4gICAgfVxuXG4gICAgLy8gU2tpcCBleGVjdXRpbmcgc2NyaXB0IGlmIGl0J3MgYWxyZWFkeSBpbiB0aGUgRE9NOlxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBzY3JpcHRbc3JjXj1cIiR7c3JjfVwiXWApKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgICB9XG5cbiAgICBsb2FkZWRTY3JpcHRzLnNldChzcmMsIChwcm9tID0gYXBwZW5kU2NyaXB0KHNyYykpKVxuICAgIHJldHVybiBwcm9tXG4gIH1cblxuICBmdW5jdGlvbiBmZXRjaFN0eWxlU2hlZXQoaHJlZjogc3RyaW5nKTogUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+IHtcbiAgICBsZXQgcHJvbTogUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+IHwgdW5kZWZpbmVkID0gc3R5bGVTaGVldHMuZ2V0KGhyZWYpXG4gICAgaWYgKHByb20pIHtcbiAgICAgIHJldHVybiBwcm9tXG4gICAgfVxuXG4gICAgc3R5bGVTaGVldHMuc2V0KFxuICAgICAgaHJlZixcbiAgICAgIChwcm9tID0gZmV0Y2goaHJlZilcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0eWxlc2hlZXQ6ICR7aHJlZn1gKVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcmVzLnRleHQoKS50aGVuKCh0ZXh0KSA9PiAoeyBocmVmOiBocmVmLCBjb250ZW50OiB0ZXh0IH0pKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIHRocm93IG1hcmtBc3NldEVycm9yKGVycilcbiAgICAgICAgfSkpXG4gICAgKVxuICAgIHJldHVybiBwcm9tXG4gIH1cblxuICByZXR1cm4ge1xuICAgIHdoZW5FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcpIHtcbiAgICAgIHJldHVybiB3aXRoRnV0dXJlKHJvdXRlLCBlbnRyeXBvaW50cylcbiAgICB9LFxuICAgIG9uRW50cnlwb2ludChyb3V0ZTogc3RyaW5nLCBleGVjdXRlOiAoKSA9PiB1bmtub3duKSB7XG4gICAgICBQcm9taXNlLnJlc29sdmUoZXhlY3V0ZSlcbiAgICAgICAgLnRoZW4oKGZuKSA9PiBmbigpKVxuICAgICAgICAudGhlbihcbiAgICAgICAgICAoZXhwb3J0czogYW55KSA9PiAoe1xuICAgICAgICAgICAgY29tcG9uZW50OiAoZXhwb3J0cyAmJiBleHBvcnRzLmRlZmF1bHQpIHx8IGV4cG9ydHMsXG4gICAgICAgICAgICBleHBvcnRzOiBleHBvcnRzLFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIChlcnIpID0+ICh7IGVycm9yOiBlcnIgfSlcbiAgICAgICAgKVxuICAgICAgICAudGhlbigoaW5wdXQ6IFJvdXRlRW50cnlwb2ludCkgPT4ge1xuICAgICAgICAgIGNvbnN0IG9sZCA9IGVudHJ5cG9pbnRzLmdldChyb3V0ZSlcbiAgICAgICAgICBlbnRyeXBvaW50cy5zZXQocm91dGUsIGlucHV0KVxuICAgICAgICAgIGlmIChvbGQgJiYgJ3Jlc29sdmUnIGluIG9sZCkgb2xkLnJlc29sdmUoaW5wdXQpXG4gICAgICAgIH0pXG4gICAgfSxcbiAgICBsb2FkUm91dGUocm91dGU6IHN0cmluZywgcHJlZmV0Y2g/OiBib29sZWFuKSB7XG4gICAgICByZXR1cm4gd2l0aEZ1dHVyZTxSb3V0ZUxvYWRlckVudHJ5Pihyb3V0ZSwgcm91dGVzLCAoKSA9PiB7XG4gICAgICAgIHJldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KFxuICAgICAgICAgIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKVxuICAgICAgICAgICAgLnRoZW4oKHsgc2NyaXB0cywgY3NzIH0pID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgICAgICBlbnRyeXBvaW50cy5oYXMocm91dGUpXG4gICAgICAgICAgICAgICAgICA/IFtdXG4gICAgICAgICAgICAgICAgICA6IFByb21pc2UuYWxsKHNjcmlwdHMubWFwKG1heWJlRXhlY3V0ZVNjcmlwdCkpLFxuICAgICAgICAgICAgICAgIFByb21pc2UuYWxsKGNzcy5tYXAoZmV0Y2hTdHlsZVNoZWV0KSksXG4gICAgICAgICAgICAgIF0gYXMgY29uc3QpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy53aGVuRW50cnlwb2ludChyb3V0ZSkudGhlbigoZW50cnlwb2ludCkgPT4gKHtcbiAgICAgICAgICAgICAgICBlbnRyeXBvaW50LFxuICAgICAgICAgICAgICAgIHN0eWxlczogcmVzWzFdLFxuICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgIE1TX01BWF9JRExFX0RFTEFZLFxuICAgICAgICAgIG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgUm91dGUgZGlkIG5vdCBjb21wbGV0ZSBsb2FkaW5nOiAke3JvdXRlfWApKVxuICAgICAgICApXG4gICAgICAgICAgLnRoZW4oKHsgZW50cnlwb2ludCwgc3R5bGVzIH0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlczogUm91dGVMb2FkZXJFbnRyeSA9IE9iamVjdC5hc3NpZ248XG4gICAgICAgICAgICAgIHsgc3R5bGVzOiBSb3V0ZVN0eWxlU2hlZXRbXSB9LFxuICAgICAgICAgICAgICBSb3V0ZUVudHJ5cG9pbnRcbiAgICAgICAgICAgID4oeyBzdHlsZXM6IHN0eWxlcyEgfSwgZW50cnlwb2ludClcbiAgICAgICAgICAgIHJldHVybiAnZXJyb3InIGluIGVudHJ5cG9pbnQgPyBlbnRyeXBvaW50IDogcmVzXG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgaWYgKHByZWZldGNoKSB7XG4gICAgICAgICAgICAgIC8vIHdlIGRvbid0IHdhbnQgdG8gY2FjaGUgZXJyb3JzIGR1cmluZyBwcmVmZXRjaFxuICAgICAgICAgICAgICB0aHJvdyBlcnJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7IGVycm9yOiBlcnIgfVxuICAgICAgICAgIH0pXG4gICAgICB9KVxuICAgIH0sXG4gICAgcHJlZmV0Y2gocm91dGU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZUxhYnMvcXVpY2tsaW5rL2Jsb2IvNDUzYTY2MWZhMWZhOTQwZTJkMmUwNDQ0NTIzOThlMzhjNjdhOThmYi9zcmMvaW5kZXgubWpzI0wxMTUtTDExOFxuICAgICAgLy8gTGljZW5zZTogQXBhY2hlIDIuMFxuICAgICAgbGV0IGNuXG4gICAgICBpZiAoKGNuID0gKG5hdmlnYXRvciBhcyBhbnkpLmNvbm5lY3Rpb24pKSB7XG4gICAgICAgIC8vIERvbid0IHByZWZldGNoIGlmIHVzaW5nIDJHIG9yIGlmIFNhdmUtRGF0YSBpcyBlbmFibGVkLlxuICAgICAgICBpZiAoY24uc2F2ZURhdGEgfHwgLzJnLy50ZXN0KGNuLmVmZmVjdGl2ZVR5cGUpKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgICAgIH1cbiAgICAgIHJldHVybiBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSlcbiAgICAgICAgLnRoZW4oKG91dHB1dCkgPT5cbiAgICAgICAgICBQcm9taXNlLmFsbChcbiAgICAgICAgICAgIGNhblByZWZldGNoXG4gICAgICAgICAgICAgID8gb3V0cHV0LnNjcmlwdHMubWFwKChzY3JpcHQpID0+IHByZWZldGNoVmlhRG9tKHNjcmlwdCwgJ3NjcmlwdCcpKVxuICAgICAgICAgICAgICA6IFtdXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+IHRoaXMubG9hZFJvdXRlKHJvdXRlLCB0cnVlKS5jYXRjaCgoKSA9PiB7fSkpXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChcbiAgICAgICAgICAvLyBzd2FsbG93IHByZWZldGNoIGVycm9yc1xuICAgICAgICAgICgpID0+IHt9XG4gICAgICAgIClcbiAgICB9LFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVJvdXRlTG9hZGVyXG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IFJvdXRlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQnXG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55XG5cbnR5cGUgUm91dGVyQXJncyA9IENsYXNzQXJndW1lbnRzPHR5cGVvZiBSb3V0ZXI+XG5cbnR5cGUgU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBSb3V0ZXIgfCBudWxsXG4gIHJlYWR5Q2FsbGJhY2tzOiBBcnJheTwoKSA9PiBhbnk+XG4gIHJlYWR5KGNiOiAoKSA9PiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCB7IFJvdXRlciwgTmV4dFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBOZXh0Um91dGVyXG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICdwYXRobmFtZScsXG4gICdyb3V0ZScsXG4gICdxdWVyeScsXG4gICdhc1BhdGgnLFxuICAnY29tcG9uZW50cycsXG4gICdpc0ZhbGxiYWNrJyxcbiAgJ2Jhc2VQYXRoJyxcbiAgJ2xvY2FsZScsXG4gICdsb2NhbGVzJyxcbiAgJ2RlZmF1bHRMb2NhbGUnLFxuICAnaXNSZWFkeScsXG4gICdpc1ByZXZpZXcnLFxuICAnaXNMb2NhbGVEb21haW4nLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkOiBzdHJpbmcpID0+IHtcbiAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbiAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0gYXMgc3RyaW5nXG4gICAgfSxcbiAgfSlcbn0pXG5cbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQ6IHN0cmluZykgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICA7KHNpbmdsZXRvblJvdXRlciBhcyBhbnkpW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gIH1cbn0pXG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudDogc3RyaW5nKSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogUm91dGVyIHtcbiAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICguLi5hcmdzOiBSb3V0ZXJBcmdzKTogUm91dGVyID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBSb3V0ZXIoLi4uYXJncylcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXVxuXG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyOiBSb3V0ZXIpOiBOZXh0Um91dGVyIHtcbiAgY29uc3QgX3JvdXRlciA9IHJvdXRlciBhcyBhbnlcbiAgY29uc3QgaW5zdGFuY2UgPSB7fSBhcyBhbnlcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgIEFycmF5LmlzQXJyYXkoX3JvdXRlcltwcm9wZXJ0eV0pID8gW10gOiB7fSxcbiAgICAgICAgX3JvdXRlcltwcm9wZXJ0eV1cbiAgICAgICkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gIHJlcXVlc3RJZGxlQ2FsbGJhY2ssXG4gIGNhbmNlbElkbGVDYWxsYmFjayxcbn0gZnJvbSAnLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2snXG5cbnR5cGUgVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0ID0gUGljazxJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQsICdyb290TWFyZ2luJz5cbnR5cGUgVXNlSW50ZXJzZWN0aW9uID0geyBkaXNhYmxlZD86IGJvb2xlYW4gfSAmIFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdFxudHlwZSBPYnNlcnZlQ2FsbGJhY2sgPSAoaXNWaXNpYmxlOiBib29sZWFuKSA9PiB2b2lkXG50eXBlIE9ic2VydmVyID0ge1xuICBpZDogc3RyaW5nXG4gIG9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuICBlbGVtZW50czogTWFwPEVsZW1lbnQsIE9ic2VydmVDYWxsYmFjaz5cbn1cblxuY29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSB0eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb248VCBleHRlbmRzIEVsZW1lbnQ+KHtcbiAgcm9vdE1hcmdpbixcbiAgZGlzYWJsZWQsXG59OiBVc2VJbnRlcnNlY3Rpb24pOiBbKGVsZW1lbnQ6IFQgfCBudWxsKSA9PiB2b2lkLCBib29sZWFuXSB7XG4gIGNvbnN0IGlzRGlzYWJsZWQ6IGJvb2xlYW4gPSBkaXNhYmxlZCB8fCAhaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcblxuICBjb25zdCB1bm9ic2VydmUgPSB1c2VSZWY8RnVuY3Rpb24+KClcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3Qgc2V0UmVmID0gdXNlQ2FsbGJhY2soXG4gICAgKGVsOiBUIHwgbnVsbCkgPT4ge1xuICAgICAgaWYgKHVub2JzZXJ2ZS5jdXJyZW50KSB7XG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50KClcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSB1bmRlZmluZWRcbiAgICAgIH1cblxuICAgICAgaWYgKGlzRGlzYWJsZWQgfHwgdmlzaWJsZSkgcmV0dXJuXG5cbiAgICAgIGlmIChlbCAmJiBlbC50YWdOYW1lKSB7XG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gb2JzZXJ2ZShcbiAgICAgICAgICBlbCxcbiAgICAgICAgICAoaXNWaXNpYmxlKSA9PiBpc1Zpc2libGUgJiYgc2V0VmlzaWJsZShpc1Zpc2libGUpLFxuICAgICAgICAgIHsgcm9vdE1hcmdpbiB9XG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9LFxuICAgIFtpc0Rpc2FibGVkLCByb290TWFyZ2luLCB2aXNpYmxlXVxuICApXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgICBpZiAoIXZpc2libGUpIHtcbiAgICAgICAgY29uc3QgaWRsZUNhbGxiYWNrID0gcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiBzZXRWaXNpYmxlKHRydWUpKVxuICAgICAgICByZXR1cm4gKCkgPT4gY2FuY2VsSWRsZUNhbGxiYWNrKGlkbGVDYWxsYmFjaylcbiAgICAgIH1cbiAgICB9XG4gIH0sIFt2aXNpYmxlXSlcblxuICByZXR1cm4gW3NldFJlZiwgdmlzaWJsZV1cbn1cblxuZnVuY3Rpb24gb2JzZXJ2ZShcbiAgZWxlbWVudDogRWxlbWVudCxcbiAgY2FsbGJhY2s6IE9ic2VydmVDYWxsYmFjayxcbiAgb3B0aW9uczogVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0XG4pOiAoKSA9PiB2b2lkIHtcbiAgY29uc3QgeyBpZCwgb2JzZXJ2ZXIsIGVsZW1lbnRzIH0gPSBjcmVhdGVPYnNlcnZlcihvcHRpb25zKVxuICBlbGVtZW50cy5zZXQoZWxlbWVudCwgY2FsbGJhY2spXG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KVxuICByZXR1cm4gZnVuY3Rpb24gdW5vYnNlcnZlKCk6IHZvaWQge1xuICAgIGVsZW1lbnRzLmRlbGV0ZShlbGVtZW50KVxuICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KVxuXG4gICAgLy8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuICAgIGlmIChlbGVtZW50cy5zaXplID09PSAwKSB7XG4gICAgICBvYnNlcnZlci5kaXNjb25uZWN0KClcbiAgICAgIG9ic2VydmVycy5kZWxldGUoaWQpXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IG9ic2VydmVycyA9IG5ldyBNYXA8c3RyaW5nLCBPYnNlcnZlcj4oKVxuZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIob3B0aW9uczogVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0KTogT2JzZXJ2ZXIge1xuICBjb25zdCBpZCA9IG9wdGlvbnMucm9vdE1hcmdpbiB8fCAnJ1xuICBsZXQgaW5zdGFuY2UgPSBvYnNlcnZlcnMuZ2V0KGlkKVxuICBpZiAoaW5zdGFuY2UpIHtcbiAgICByZXR1cm4gaW5zdGFuY2VcbiAgfVxuXG4gIGNvbnN0IGVsZW1lbnRzID0gbmV3IE1hcDxFbGVtZW50LCBPYnNlcnZlQ2FsbGJhY2s+KClcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICBjb25zdCBjYWxsYmFjayA9IGVsZW1lbnRzLmdldChlbnRyeS50YXJnZXQpXG4gICAgICBjb25zdCBpc1Zpc2libGUgPSBlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDBcbiAgICAgIGlmIChjYWxsYmFjayAmJiBpc1Zpc2libGUpIHtcbiAgICAgICAgY2FsbGJhY2soaXNWaXNpYmxlKVxuICAgICAgfVxuICAgIH0pXG4gIH0sIG9wdGlvbnMpXG5cbiAgb2JzZXJ2ZXJzLnNldChcbiAgICBpZCxcbiAgICAoaW5zdGFuY2UgPSB7XG4gICAgICBpZCxcbiAgICAgIG9ic2VydmVyLFxuICAgICAgZWxlbWVudHMsXG4gICAgfSlcbiAgKVxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KTogSlNYLkVsZW1lbnQge1xuICAgIHJldHVybiA8Q29tcG9zZWRDb21wb25lbnQgcm91dGVyPXt1c2VSb3V0ZXIoKX0gey4uLnByb3BzfSAvPlxuICB9XG5cbiAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbiAgOyhXaXRoUm91dGVyV3JhcHBlciBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHMgPSAoQ29tcG9zZWRDb21wb25lbnQgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbmFtZSA9XG4gICAgICBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgXG4gIH1cblxuICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXJcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVMb2NhbGVQYXRoKFxuICBwYXRobmFtZTogc3RyaW5nLFxuICBsb2NhbGVzPzogc3RyaW5nW11cbik6IHtcbiAgZGV0ZWN0ZWRMb2NhbGU/OiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xufSB7XG4gIGxldCBkZXRlY3RlZExvY2FsZTogc3RyaW5nIHwgdW5kZWZpbmVkXG4gIC8vIGZpcnN0IGl0ZW0gd2lsbCBiZSBlbXB0eSBzdHJpbmcgZnJvbSBzcGxpdHRpbmcgYXQgZmlyc3QgY2hhclxuICBjb25zdCBwYXRobmFtZVBhcnRzID0gcGF0aG5hbWUuc3BsaXQoJy8nKVxuXG4gIDsobG9jYWxlcyB8fCBbXSkuc29tZSgobG9jYWxlKSA9PiB7XG4gICAgaWYgKHBhdGhuYW1lUGFydHNbMV0udG9Mb3dlckNhc2UoKSA9PT0gbG9jYWxlLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgIGRldGVjdGVkTG9jYWxlID0gbG9jYWxlXG4gICAgICBwYXRobmFtZVBhcnRzLnNwbGljZSgxLCAxKVxuICAgICAgcGF0aG5hbWUgPSBwYXRobmFtZVBhcnRzLmpvaW4oJy8nKSB8fCAnLydcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9KVxuXG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgZGV0ZWN0ZWRMb2NhbGUsXG4gIH1cbn1cbiIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoLFxuICByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCxcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaCdcbmltcG9ydCB7IEdvb2RQYWdlQ2FjaGUsIFN0eWxlU2hlZXRUdXBsZSB9IGZyb20gJy4uLy4uLy4uL2NsaWVudC9wYWdlLWxvYWRlcidcbmltcG9ydCB7XG4gIGdldENsaWVudEJ1aWxkTWFuaWZlc3QsXG4gIGlzQXNzZXRFcnJvcixcbiAgbWFya0Fzc2V0RXJyb3IsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9yb3V0ZS1sb2FkZXInXG5pbXBvcnQgeyBEb21haW5Mb2NhbGVzIH0gZnJvbSAnLi4vLi4vc2VydmVyL2NvbmZpZydcbmltcG9ydCB7IGRlbm9ybWFsaXplUGFnZVBhdGggfSBmcm9tICcuLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoJ1xuaW1wb3J0IHsgbm9ybWFsaXplTG9jYWxlUGF0aCB9IGZyb20gJy4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoJ1xuaW1wb3J0IG1pdHQsIHsgTWl0dEVtaXR0ZXIgfSBmcm9tICcuLi9taXR0J1xuaW1wb3J0IHtcbiAgQXBwQ29udGV4dFR5cGUsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRMb2NhdGlvbk9yaWdpbixcbiAgZ2V0VVJMLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBOZXh0UGFnZUNvbnRleHQsXG4gIFNULFxuICBORVhUX0RBVEEsXG59IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgaXNEeW5hbWljUm91dGUgfSBmcm9tICcuL3V0aWxzL2lzLWR5bmFtaWMnXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi91dGlscy9xdWVyeXN0cmluZydcbmltcG9ydCByZXNvbHZlUmV3cml0ZXMgZnJvbSAnLi91dGlscy9yZXNvbHZlLXJld3JpdGVzJ1xuaW1wb3J0IHsgZ2V0Um91dGVNYXRjaGVyIH0gZnJvbSAnLi91dGlscy9yb3V0ZS1tYXRjaGVyJ1xuaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vdXRpbHMvcm91dGUtcmVnZXgnXG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgLyogcHJvZCAqL1xuICAgIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICB9XG59XG5cbmludGVyZmFjZSBSb3V0ZVByb3BlcnRpZXMge1xuICBzaGFsbG93OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBUcmFuc2l0aW9uT3B0aW9ucyB7XG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG4gIHNjcm9sbD86IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIE5leHRIaXN0b3J5U3RhdGUge1xuICB1cmw6IHN0cmluZ1xuICBhczogc3RyaW5nXG4gIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG59XG5cbnR5cGUgSGlzdG9yeVN0YXRlID1cbiAgfCBudWxsXG4gIHwgeyBfX046IGZhbHNlIH1cbiAgfCAoeyBfX046IHRydWU7IGlkeDogbnVtYmVyIH0gJiBOZXh0SGlzdG9yeVN0YXRlKVxuXG5sZXQgZGV0ZWN0RG9tYWluTG9jYWxlOiB0eXBlb2YgaW1wb3J0KCcuLi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlJykuZGV0ZWN0RG9tYWluTG9jYWxlXG5cbmlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gIGRldGVjdERvbWFpbkxvY2FsZSA9IHJlcXVpcmUoJy4uL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUnKVxuICAgIC5kZXRlY3REb21haW5Mb2NhbGVcbn1cblxuY29uc3QgYmFzZVBhdGggPSAocHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCBhcyBzdHJpbmcpIHx8ICcnXG5cbmZ1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyksIHtcbiAgICBjYW5jZWxsZWQ6IHRydWUsXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aDogc3RyaW5nLCBwcmVmaXg/OiBzdHJpbmcpIHtcbiAgcmV0dXJuIHByZWZpeCAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nKVxuICAgID8gcGF0aCA9PT0gJy8nXG4gICAgICA/IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKHByZWZpeClcbiAgICAgIDogYCR7cHJlZml4fSR7cGF0aE5vUXVlcnlIYXNoKHBhdGgpID09PSAnLycgPyBwYXRoLnN1YnN0cmluZygxKSA6IHBhdGh9YFxuICAgIDogcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RG9tYWluTG9jYWxlKFxuICBwYXRoOiBzdHJpbmcsXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlLFxuICBsb2NhbGVzPzogc3RyaW5nW10sXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICBsb2NhbGUgPSBsb2NhbGUgfHwgbm9ybWFsaXplTG9jYWxlUGF0aChwYXRoLCBsb2NhbGVzKS5kZXRlY3RlZExvY2FsZVxuXG4gICAgY29uc3QgZGV0ZWN0ZWREb21haW4gPSBkZXRlY3REb21haW5Mb2NhbGUoZG9tYWluTG9jYWxlcywgdW5kZWZpbmVkLCBsb2NhbGUpXG5cbiAgICBpZiAoZGV0ZWN0ZWREb21haW4pIHtcbiAgICAgIHJldHVybiBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7XG4gICAgICAgIGJhc2VQYXRoIHx8ICcnXG4gICAgICB9JHtsb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGUgPyAnJyA6IGAvJHtsb2NhbGV9YH0ke3BhdGh9YFxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHJldHVybiBmYWxzZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkTG9jYWxlKFxuICBwYXRoOiBzdHJpbmcsXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlLFxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICBjb25zdCBwYXRobmFtZSA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKVxuICAgIGNvbnN0IHBhdGhMb3dlciA9IHBhdGhuYW1lLnRvTG93ZXJDYXNlKClcbiAgICBjb25zdCBsb2NhbGVMb3dlciA9IGxvY2FsZSAmJiBsb2NhbGUudG9Mb3dlckNhc2UoKVxuXG4gICAgcmV0dXJuIGxvY2FsZSAmJlxuICAgICAgbG9jYWxlICE9PSBkZWZhdWx0TG9jYWxlICYmXG4gICAgICAhcGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlTG93ZXIgKyAnLycpICYmXG4gICAgICBwYXRoTG93ZXIgIT09ICcvJyArIGxvY2FsZUxvd2VyXG4gICAgICA/IGFkZFBhdGhQcmVmaXgocGF0aCwgJy8nICsgbG9jYWxlKVxuICAgICAgOiBwYXRoXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbExvY2FsZShwYXRoOiBzdHJpbmcsIGxvY2FsZT86IHN0cmluZykge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIGNvbnN0IHBhdGhuYW1lID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpXG4gICAgY29uc3QgcGF0aExvd2VyID0gcGF0aG5hbWUudG9Mb3dlckNhc2UoKVxuICAgIGNvbnN0IGxvY2FsZUxvd2VyID0gbG9jYWxlICYmIGxvY2FsZS50b0xvd2VyQ2FzZSgpXG5cbiAgICByZXR1cm4gbG9jYWxlICYmXG4gICAgICAocGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlTG93ZXIgKyAnLycpIHx8XG4gICAgICAgIHBhdGhMb3dlciA9PT0gJy8nICsgbG9jYWxlTG93ZXIpXG4gICAgICA/IChwYXRobmFtZS5sZW5ndGggPT09IGxvY2FsZS5sZW5ndGggKyAxID8gJy8nIDogJycpICtcbiAgICAgICAgICBwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoICsgMSlcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmZ1bmN0aW9uIHBhdGhOb1F1ZXJ5SGFzaChwYXRoOiBzdHJpbmcpIHtcbiAgY29uc3QgcXVlcnlJbmRleCA9IHBhdGguaW5kZXhPZignPycpXG4gIGNvbnN0IGhhc2hJbmRleCA9IHBhdGguaW5kZXhPZignIycpXG5cbiAgaWYgKHF1ZXJ5SW5kZXggPiAtMSB8fCBoYXNoSW5kZXggPiAtMSkge1xuICAgIHBhdGggPSBwYXRoLnN1YnN0cmluZygwLCBxdWVyeUluZGV4ID4gLTEgPyBxdWVyeUluZGV4IDogaGFzaEluZGV4KVxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcGF0aCA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKVxuICByZXR1cm4gcGF0aCA9PT0gYmFzZVBhdGggfHwgcGF0aC5zdGFydHNXaXRoKGJhc2VQYXRoICsgJy8nKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgLy8gd2Ugb25seSBhZGQgdGhlIGJhc2VwYXRoIG9uIHJlbGF0aXZlIHVybHNcbiAgcmV0dXJuIGFkZFBhdGhQcmVmaXgocGF0aCwgYmFzZVBhdGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICBwYXRoID0gcGF0aC5zbGljZShiYXNlUGF0aC5sZW5ndGgpXG4gIGlmICghcGF0aC5zdGFydHNXaXRoKCcvJykpIHBhdGggPSBgLyR7cGF0aH1gXG4gIHJldHVybiBwYXRoXG59XG5cbi8qKlxuICogRGV0ZWN0cyB3aGV0aGVyIGEgZ2l2ZW4gdXJsIGlzIHJvdXRhYmxlIGJ5IHRoZSBOZXh0LmpzIHJvdXRlciAoYnJvd3NlciBvbmx5KS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTG9jYWxVUkwodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgLy8gcHJldmVudCBhIGh5ZHJhdGlvbiBtaXNtYXRjaCBvbiBocmVmIGZvciB1cmwgd2l0aCBhbmNob3IgcmVmc1xuICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSB8fCB1cmwuc3RhcnRzV2l0aCgnIycpKSByZXR1cm4gdHJ1ZVxuICB0cnkge1xuICAgIC8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuICAgIGNvbnN0IGxvY2F0aW9uT3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICAgIGNvbnN0IHJlc29sdmVkID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uT3JpZ2luKVxuICAgIHJldHVybiByZXNvbHZlZC5vcmlnaW4gPT09IGxvY2F0aW9uT3JpZ2luICYmIGhhc0Jhc2VQYXRoKHJlc29sdmVkLnBhdGhuYW1lKVxuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxudHlwZSBVcmwgPSBVcmxPYmplY3QgfCBzdHJpbmdcblxuZXhwb3J0IGZ1bmN0aW9uIGludGVycG9sYXRlQXMoXG4gIHJvdXRlOiBzdHJpbmcsXG4gIGFzUGF0aG5hbWU6IHN0cmluZyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pIHtcbiAgbGV0IGludGVycG9sYXRlZFJvdXRlID0gJydcblxuICBjb25zdCBkeW5hbWljUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICBjb25zdCBkeW5hbWljR3JvdXBzID0gZHluYW1pY1JlZ2V4Lmdyb3Vwc1xuICBjb25zdCBkeW5hbWljTWF0Y2hlcyA9XG4gICAgLy8gVHJ5IHRvIG1hdGNoIHRoZSBkeW5hbWljIHJvdXRlIGFnYWluc3QgdGhlIGFzUGF0aFxuICAgIChhc1BhdGhuYW1lICE9PSByb3V0ZSA/IGdldFJvdXRlTWF0Y2hlcihkeW5hbWljUmVnZXgpKGFzUGF0aG5hbWUpIDogJycpIHx8XG4gICAgLy8gRmFsbCBiYWNrIHRvIHJlYWRpbmcgdGhlIHZhbHVlcyBmcm9tIHRoZSBocmVmXG4gICAgLy8gVE9ETzogc2hvdWxkIHRoaXMgdGFrZSBwcmlvcml0eTsgYWxzbyBuZWVkIHRvIGNoYW5nZSBpbiB0aGUgcm91dGVyLlxuICAgIHF1ZXJ5XG5cbiAgaW50ZXJwb2xhdGVkUm91dGUgPSByb3V0ZVxuICBjb25zdCBwYXJhbXMgPSBPYmplY3Qua2V5cyhkeW5hbWljR3JvdXBzKVxuXG4gIGlmIChcbiAgICAhcGFyYW1zLmV2ZXJ5KChwYXJhbSkgPT4ge1xuICAgICAgbGV0IHZhbHVlID0gZHluYW1pY01hdGNoZXNbcGFyYW1dIHx8ICcnXG4gICAgICBjb25zdCB7IHJlcGVhdCwgb3B0aW9uYWwgfSA9IGR5bmFtaWNHcm91cHNbcGFyYW1dXG5cbiAgICAgIC8vIHN1cHBvcnQgc2luZ2xlLWxldmVsIGNhdGNoLWFsbFxuICAgICAgLy8gVE9ETzogbW9yZSByb2J1c3QgaGFuZGxpbmcgZm9yIHVzZXItZXJyb3IgKHBhc3NpbmcgYC9gKVxuICAgICAgbGV0IHJlcGxhY2VkID0gYFske3JlcGVhdCA/ICcuLi4nIDogJyd9JHtwYXJhbX1dYFxuICAgICAgaWYgKG9wdGlvbmFsKSB7XG4gICAgICAgIHJlcGxhY2VkID0gYCR7IXZhbHVlID8gJy8nIDogJyd9WyR7cmVwbGFjZWR9XWBcbiAgICAgIH1cbiAgICAgIGlmIChyZXBlYXQgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB2YWx1ZSA9IFt2YWx1ZV1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgKG9wdGlvbmFsIHx8IHBhcmFtIGluIGR5bmFtaWNNYXRjaGVzKSAmJlxuICAgICAgICAvLyBJbnRlcnBvbGF0ZSBncm91cCBpbnRvIGRhdGEgVVJMIGlmIHByZXNlbnRcbiAgICAgICAgKGludGVycG9sYXRlZFJvdXRlID1cbiAgICAgICAgICBpbnRlcnBvbGF0ZWRSb3V0ZSEucmVwbGFjZShcbiAgICAgICAgICAgIHJlcGxhY2VkLFxuICAgICAgICAgICAgcmVwZWF0XG4gICAgICAgICAgICAgID8gKHZhbHVlIGFzIHN0cmluZ1tdKVxuICAgICAgICAgICAgICAgICAgLm1hcChcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlc2UgdmFsdWVzIHNob3VsZCBiZSBmdWxseSBlbmNvZGVkIGluc3RlYWQgb2YganVzdFxuICAgICAgICAgICAgICAgICAgICAvLyBwYXRoIGRlbGltaXRlciBlc2NhcGVkIHNpbmNlIHRoZXkgYXJlIGJlaW5nIGluc2VydGVkXG4gICAgICAgICAgICAgICAgICAgIC8vIGludG8gdGhlIFVSTCBhbmQgd2UgZXhwZWN0IFVSTCBlbmNvZGVkIHNlZ21lbnRzXG4gICAgICAgICAgICAgICAgICAgIC8vIHdoZW4gcGFyc2luZyBkeW5hbWljIHJvdXRlIHBhcmFtc1xuICAgICAgICAgICAgICAgICAgICAoc2VnbWVudCkgPT4gZW5jb2RlVVJJQ29tcG9uZW50KHNlZ21lbnQpXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAuam9pbignLycpXG4gICAgICAgICAgICAgIDogZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlIGFzIHN0cmluZylcbiAgICAgICAgICApIHx8ICcvJylcbiAgICAgIClcbiAgICB9KVxuICApIHtcbiAgICBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnIC8vIGRpZCBub3Qgc2F0aXNmeSBhbGwgcmVxdWlyZW1lbnRzXG5cbiAgICAvLyBuLmIuIFdlIGlnbm9yZSB0aGlzIGVycm9yIGJlY2F1c2Ugd2UgaGFuZGxlIHdhcm5pbmcgZm9yIHRoaXMgY2FzZSBpblxuICAgIC8vIGRldmVsb3BtZW50IGluIHRoZSBgPExpbms+YCBjb21wb25lbnQgZGlyZWN0bHkuXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXJhbXMsXG4gICAgcmVzdWx0OiBpbnRlcnBvbGF0ZWRSb3V0ZSxcbiAgfVxufVxuXG5mdW5jdGlvbiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnk6IFBhcnNlZFVybFF1ZXJ5LCBwYXJhbXM6IHN0cmluZ1tdKSB7XG4gIGNvbnN0IGZpbHRlcmVkUXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cblxuICBPYmplY3Qua2V5cyhxdWVyeSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgaWYgKCFwYXJhbXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgZmlsdGVyZWRRdWVyeVtrZXldID0gcXVlcnlba2V5XVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIGZpbHRlcmVkUXVlcnlcbn1cblxuLyoqXG4gKiBSZXNvbHZlcyBhIGdpdmVuIGh5cGVybGluayB3aXRoIGEgY2VydGFpbiByb3V0ZXIgc3RhdGUgKGJhc2VQYXRoIG5vdCBpbmNsdWRlZCkuXG4gKiBQcmVzZXJ2ZXMgYWJzb2x1dGUgdXJscy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVIcmVmKFxuICBjdXJyZW50UGF0aDogc3RyaW5nLFxuICBocmVmOiBVcmwsXG4gIHJlc29sdmVBcz86IGJvb2xlYW5cbik6IHN0cmluZyB7XG4gIC8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG4gIGNvbnN0IGJhc2UgPSBuZXcgVVJMKGN1cnJlbnRQYXRoLCAnaHR0cDovL24nKVxuICBjb25zdCB1cmxBc1N0cmluZyA9XG4gICAgdHlwZW9mIGhyZWYgPT09ICdzdHJpbmcnID8gaHJlZiA6IGZvcm1hdFdpdGhWYWxpZGF0aW9uKGhyZWYpXG4gIC8vIFJldHVybiBiZWNhdXNlIGl0IGNhbm5vdCBiZSByb3V0ZWQgYnkgdGhlIE5leHQuanMgcm91dGVyXG4gIGlmICghaXNMb2NhbFVSTCh1cmxBc1N0cmluZykpIHtcbiAgICByZXR1cm4gKHJlc29sdmVBcyA/IFt1cmxBc1N0cmluZ10gOiB1cmxBc1N0cmluZykgYXMgc3RyaW5nXG4gIH1cbiAgdHJ5IHtcbiAgICBjb25zdCBmaW5hbFVybCA9IG5ldyBVUkwodXJsQXNTdHJpbmcsIGJhc2UpXG4gICAgZmluYWxVcmwucGF0aG5hbWUgPSBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChmaW5hbFVybC5wYXRobmFtZSlcbiAgICBsZXQgaW50ZXJwb2xhdGVkQXMgPSAnJ1xuXG4gICAgaWYgKFxuICAgICAgaXNEeW5hbWljUm91dGUoZmluYWxVcmwucGF0aG5hbWUpICYmXG4gICAgICBmaW5hbFVybC5zZWFyY2hQYXJhbXMgJiZcbiAgICAgIHJlc29sdmVBc1xuICAgICkge1xuICAgICAgY29uc3QgcXVlcnkgPSBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KGZpbmFsVXJsLnNlYXJjaFBhcmFtcylcblxuICAgICAgY29uc3QgeyByZXN1bHQsIHBhcmFtcyB9ID0gaW50ZXJwb2xhdGVBcyhcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBxdWVyeVxuICAgICAgKVxuXG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIGludGVycG9sYXRlZEFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgIHBhdGhuYW1lOiByZXN1bHQsXG4gICAgICAgICAgaGFzaDogZmluYWxVcmwuaGFzaCxcbiAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBwYXJhbXMpLFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG4gICAgY29uc3QgcmVzb2x2ZWRIcmVmID1cbiAgICAgIGZpbmFsVXJsLm9yaWdpbiA9PT0gYmFzZS5vcmlnaW5cbiAgICAgICAgPyBmaW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpXG4gICAgICAgIDogZmluYWxVcmwuaHJlZlxuXG4gICAgcmV0dXJuIChyZXNvbHZlQXNcbiAgICAgID8gW3Jlc29sdmVkSHJlZiwgaW50ZXJwb2xhdGVkQXMgfHwgcmVzb2x2ZWRIcmVmXVxuICAgICAgOiByZXNvbHZlZEhyZWYpIGFzIHN0cmluZ1xuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIChyZXNvbHZlQXMgPyBbdXJsQXNTdHJpbmddIDogdXJsQXNTdHJpbmcpIGFzIHN0cmluZ1xuICB9XG59XG5cbmZ1bmN0aW9uIHN0cmlwT3JpZ2luKHVybDogc3RyaW5nKSB7XG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcblxuICByZXR1cm4gdXJsLnN0YXJ0c1dpdGgob3JpZ2luKSA/IHVybC5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aCkgOiB1cmxcbn1cblxuZnVuY3Rpb24gcHJlcGFyZVVybEFzKHJvdXRlcjogTmV4dFJvdXRlciwgdXJsOiBVcmwsIGFzPzogVXJsKSB7XG4gIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICBsZXQgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSByZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIHVybCwgdHJ1ZSlcbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICBjb25zdCBocmVmSGFkT3JpZ2luID0gcmVzb2x2ZWRIcmVmLnN0YXJ0c1dpdGgob3JpZ2luKVxuICBjb25zdCBhc0hhZE9yaWdpbiA9IHJlc29sdmVkQXMgJiYgcmVzb2x2ZWRBcy5zdGFydHNXaXRoKG9yaWdpbilcblxuICByZXNvbHZlZEhyZWYgPSBzdHJpcE9yaWdpbihyZXNvbHZlZEhyZWYpXG4gIHJlc29sdmVkQXMgPSByZXNvbHZlZEFzID8gc3RyaXBPcmlnaW4ocmVzb2x2ZWRBcykgOiByZXNvbHZlZEFzXG5cbiAgY29uc3QgcHJlcGFyZWRVcmwgPSBocmVmSGFkT3JpZ2luID8gcmVzb2x2ZWRIcmVmIDogYWRkQmFzZVBhdGgocmVzb2x2ZWRIcmVmKVxuICBjb25zdCBwcmVwYXJlZEFzID0gYXNcbiAgICA/IHN0cmlwT3JpZ2luKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgYXMpKVxuICAgIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWZcblxuICByZXR1cm4ge1xuICAgIHVybDogcHJlcGFyZWRVcmwsXG4gICAgYXM6IGFzSGFkT3JpZ2luID8gcHJlcGFyZWRBcyA6IGFkZEJhc2VQYXRoKHByZXBhcmVkQXMpLFxuICB9XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWU6IHN0cmluZywgcGFnZXM6IHN0cmluZ1tdKSB7XG4gIGNvbnN0IGNsZWFuUGF0aG5hbWUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhdGhuYW1lISkpXG5cbiAgaWYgKGNsZWFuUGF0aG5hbWUgPT09ICcvNDA0JyB8fCBjbGVhblBhdGhuYW1lID09PSAnL19lcnJvcicpIHtcbiAgICByZXR1cm4gcGF0aG5hbWVcbiAgfVxuXG4gIC8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbiAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lISkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgcGFnZXMuc29tZSgocGFnZSkgPT4ge1xuICAgICAgaWYgKGlzRHluYW1pY1JvdXRlKHBhZ2UpICYmIGdldFJvdXRlUmVnZXgocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lISkpIHtcbiAgICAgICAgcGF0aG5hbWUgPSBwYWdlXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfSlcbiAgfVxuICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG59XG5cbmV4cG9ydCB0eXBlIEJhc2VSb3V0ZXIgPSB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbiAgaXNMb2NhbGVEb21haW46IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgTmV4dFJvdXRlciA9IEJhc2VSb3V0ZXIgJlxuICBQaWNrPFxuICAgIFJvdXRlcixcbiAgICB8ICdwdXNoJ1xuICAgIHwgJ3JlcGxhY2UnXG4gICAgfCAncmVsb2FkJ1xuICAgIHwgJ2JhY2snXG4gICAgfCAncHJlZmV0Y2gnXG4gICAgfCAnYmVmb3JlUG9wU3RhdGUnXG4gICAgfCAnZXZlbnRzJ1xuICAgIHwgJ2lzRmFsbGJhY2snXG4gICAgfCAnaXNSZWFkeSdcbiAgICB8ICdpc1ByZXZpZXcnXG4gID5cblxuZXhwb3J0IHR5cGUgUHJlZmV0Y2hPcHRpb25zID0ge1xuICBwcmlvcml0eT86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbn1cblxuZXhwb3J0IHR5cGUgUHJpdmF0ZVJvdXRlSW5mbyA9XG4gIHwgKE9taXQ8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvLCAnc3R5bGVTaGVldHMnPiAmIHsgaW5pdGlhbDogdHJ1ZSB9KVxuICB8IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mb1xuXG5leHBvcnQgdHlwZSBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzID0gUGljazxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8sICdDb21wb25lbnQnIHwgJ2Vycic+ICYge1xuICByb3V0ZXI6IFJvdXRlclxufSAmIFJlY29yZDxzdHJpbmcsIGFueT5cbmV4cG9ydCB0eXBlIEFwcENvbXBvbmVudCA9IENvbXBvbmVudFR5cGU8QXBwUHJvcHM+XG5cbnR5cGUgU3Vic2NyaXB0aW9uID0gKFxuICBkYXRhOiBQcml2YXRlUm91dGVJbmZvLFxuICBBcHA6IEFwcENvbXBvbmVudCxcbiAgcmVzZXRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGxcbikgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IE5leHRIaXN0b3J5U3RhdGUpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID1cbiAgcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJlxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5ICYmXG4gICEhKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgbGV0IHYgPSAnX19uZXh0J1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgcmV0dXJuIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0odiwgdiksIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0odiksIHRydWVcbiAgICB9IGNhdGNoIChuKSB7fVxuICB9KSgpXG5cbmNvbnN0IFNTR19EQVRBX05PVF9GT1VORCA9IFN5bWJvbCgnU1NHX0RBVEFfTk9UX0ZPVU5EJylcblxuZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmw6IHN0cmluZywgYXR0ZW1wdHM6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAvL1xuICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAvLyA+IG9wdGlvbi5cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgLy9cbiAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgIGlmICghcmVzLm9rKSB7XG4gICAgICBpZiAoYXR0ZW1wdHMgPiAxICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgIHJldHVybiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMgLSAxKVxuICAgICAgfVxuICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDQwNCkge1xuICAgICAgICByZXR1cm4gcmVzLmpzb24oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgaWYgKGRhdGEubm90Rm91bmQpIHtcbiAgICAgICAgICAgIHJldHVybiB7IG5vdEZvdW5kOiBTU0dfREFUQV9OT1RfRk9VTkQgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgfVxuICAgIHJldHVybiByZXMuanNvbigpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWY6IHN0cmluZywgaXNTZXJ2ZXJSZW5kZXI6IGJvb2xlYW4pIHtcbiAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG4gICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAvLyBsb29wLlxuXG4gICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgbWFya0Fzc2V0RXJyb3IoZXJyKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyIGltcGxlbWVudHMgQmFzZVJvdXRlciB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuXG4gIC8qKlxuICAgKiBNYXAgb2YgYWxsIGNvbXBvbmVudHMgbG9hZGVkIGluIGBSb3V0ZXJgXG4gICAqL1xuICBjb21wb25lbnRzOiB7IFtwYXRobmFtZTogc3RyaW5nXTogUHJpdmF0ZVJvdXRlSW5mbyB9XG4gIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gIHNkYzogeyBbYXNQYXRoOiBzdHJpbmddOiBvYmplY3QgfSA9IHt9XG4gIC8vIEluLWZsaWdodCBTZXJ2ZXIgRGF0YSBSZXF1ZXN0cywgZm9yIGRlZHVwaW5nXG4gIHNkcjogeyBbYXNQYXRoOiBzdHJpbmddOiBQcm9taXNlPG9iamVjdD4gfSA9IHt9XG5cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgX2luRmxpZ2h0Um91dGU/OiBzdHJpbmdcbiAgX3NoYWxsb3c/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuICBpc1JlYWR5OiBib29sZWFuXG4gIGlzUHJldmlldzogYm9vbGVhblxuICBpc0xvY2FsZURvbWFpbjogYm9vbGVhblxuXG4gIHByaXZhdGUgX2lkeDogbnVtYmVyID0gMFxuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgICBsb2NhbGUsXG4gICAgICBsb2NhbGVzLFxuICAgICAgZGVmYXVsdExvY2FsZSxcbiAgICAgIGRvbWFpbkxvY2FsZXMsXG4gICAgICBpc1ByZXZpZXcsXG4gICAgfToge1xuICAgICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb25cbiAgICAgIGluaXRpYWxQcm9wczogYW55XG4gICAgICBwYWdlTG9hZGVyOiBhbnlcbiAgICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgQXBwOiBBcHBDb21wb25lbnRcbiAgICAgIHdyYXBBcHA6IChXcmFwQXBwQ29tcG9uZW50OiBBcHBDb21wb25lbnQpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICAgIGxvY2FsZT86IHN0cmluZ1xuICAgICAgbG9jYWxlcz86IHN0cmluZ1tdXG4gICAgICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gICAgICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuICAgICAgaXNQcmV2aWV3PzogYm9vbGVhblxuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBpbml0aWFsOiB0cnVlLFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHtcbiAgICAgIENvbXBvbmVudDogQXBwIGFzIENvbXBvbmVudFR5cGUsXG4gICAgICBzdHlsZVNoZWV0czogW1xuICAgICAgICAvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXG4gICAgICBdLFxuICAgIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgY29uc3QgYXV0b0V4cG9ydER5bmFtaWMgPVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIHNlbGYuX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0XG5cbiAgICB0aGlzLmFzUGF0aCA9IGF1dG9FeHBvcnREeW5hbWljID8gcGF0aG5hbWUgOiBhc1xuICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aFxuICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uXG4gICAgdGhpcy5jbGMgPSBudWxsXG4gICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHBcbiAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICB0aGlzLmlzU3NyID0gdHJ1ZVxuXG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFja1xuXG4gICAgdGhpcy5pc1JlYWR5ID0gISEoXG4gICAgICBzZWxmLl9fTkVYVF9EQVRBX18uZ3NzcCB8fFxuICAgICAgc2VsZi5fX05FWFRfREFUQV9fLmdpcCB8fFxuICAgICAgKCFhdXRvRXhwb3J0RHluYW1pYyAmJlxuICAgICAgICAhc2VsZi5sb2NhdGlvbi5zZWFyY2ggJiZcbiAgICAgICAgIXByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMpXG4gICAgKVxuICAgIHRoaXMuaXNQcmV2aWV3ID0gISFpc1ByZXZpZXdcbiAgICB0aGlzLmlzTG9jYWxlRG9tYWluID0gZmFsc2VcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVxuICAgICAgdGhpcy5sb2NhbGVzID0gbG9jYWxlc1xuICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlID0gZGVmYXVsdExvY2FsZVxuICAgICAgdGhpcy5kb21haW5Mb2NhbGVzID0gZG9tYWluTG9jYWxlc1xuICAgICAgdGhpcy5pc0xvY2FsZURvbWFpbiA9ICEhZGV0ZWN0RG9tYWluTG9jYWxlKFxuICAgICAgICBkb21haW5Mb2NhbGVzLFxuICAgICAgICBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lXG4gICAgICApXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgICBnZXRVUkwoKSxcbiAgICAgICAgICB7IGxvY2FsZSB9XG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKVxuXG4gICAgICAvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuICAgICAgLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvblBvcFN0YXRlID0gKGU6IFBvcFN0YXRlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBjb25zdCBzdGF0ZSA9IGUuc3RhdGUgYXMgSGlzdG9yeVN0YXRlXG5cbiAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgLy9cbiAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXNcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICBnZXRVUkwoKVxuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFzdGF0ZS5fX04pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCBmb3JjZWRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IHVuZGVmaW5lZFxuICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucywgaWR4IH0gPSBzdGF0ZVxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgaWYgKHRoaXMuX2lkeCAhPT0gaWR4KSB7XG4gICAgICAgICAgLy8gU25hcHNob3QgY3VycmVudCBzY3JvbGwgcG9zaXRpb246XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICAgICdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsXG4gICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHsgeDogc2VsZi5wYWdlWE9mZnNldCwgeTogc2VsZi5wYWdlWU9mZnNldCB9KVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0gY2F0Y2gge31cblxuICAgICAgICAgIC8vIFJlc3RvcmUgb2xkIHNjcm9sbCBwb3NpdGlvbjpcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgdiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyArIGlkeClcbiAgICAgICAgICAgIGZvcmNlZFNjcm9sbCA9IEpTT04ucGFyc2UodiEpXG4gICAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSB7IHg6IDAsIHk6IDAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9pZHggPSBpZHhcblxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgaWYgKHRoaXMuaXNTc3IgJiYgYXMgPT09IHRoaXMuYXNQYXRoICYmIHBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoc3RhdGUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmNoYW5nZShcbiAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgdXJsLFxuICAgICAgYXMsXG4gICAgICBPYmplY3QuYXNzaWduPHt9LCBUcmFuc2l0aW9uT3B0aW9ucywgVHJhbnNpdGlvbk9wdGlvbnM+KHt9LCBvcHRpb25zLCB7XG4gICAgICAgIHNoYWxsb3c6IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLl9zaGFsbG93LFxuICAgICAgICBsb2NhbGU6IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZSxcbiAgICAgIH0pLFxuICAgICAgZm9yY2VkU2Nyb2xsXG4gICAgKVxuICB9XG5cbiAgcmVsb2FkKCk6IHZvaWQge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9cbiAgYmFjaygpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcHVzaCh1cmw6IFVybCwgYXM/OiBVcmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgLy8gVE9ETzogcmVtb3ZlIGluIHRoZSBmdXR1cmUgd2hlbiB3ZSB1cGRhdGUgaGlzdG9yeSBiZWZvcmUgcm91dGUgY2hhbmdlXG4gICAgICAvLyBpcyBjb21wbGV0ZSwgYXMgdGhlIHBvcHN0YXRlIGV2ZW50IHNob3VsZCBoYW5kbGUgdGhpcyBjYXB0dXJlLlxuICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gU25hcHNob3Qgc2Nyb2xsIHBvc2l0aW9uIHJpZ2h0IGJlZm9yZSBuYXZpZ2F0aW5nIHRvIGEgbmV3IHBhZ2U6XG4gICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgICAgICdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7IHg6IHNlbGYucGFnZVhPZmZzZXQsIHk6IHNlbGYucGFnZVlPZmZzZXQgfSlcbiAgICAgICAgICApXG4gICAgICAgIH0gY2F0Y2gge31cbiAgICAgIH1cbiAgICB9XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHJlcGxhY2UodXJsOiBVcmwsIGFzPzogVXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGNoYW5nZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyxcbiAgICBmb3JjZWRTY3JvbGw/OiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH1cbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKHVybCkpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBmb3Igc3RhdGljIHBhZ2VzIHdpdGggcXVlcnkgcGFyYW1zIGluIHRoZSBVUkwgd2UgZGVsYXlcbiAgICAvLyBtYXJraW5nIHRoZSByb3V0ZXIgcmVhZHkgdW50aWwgYWZ0ZXIgdGhlIHF1ZXJ5IGlzIHVwZGF0ZWRcbiAgICBpZiAoKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1JlYWR5ID0gdHJ1ZVxuICAgIH1cblxuICAgIC8vIERlZmF1bHQgdG8gc2Nyb2xsIHJlc2V0IGJlaGF2aW9yIHVubGVzcyBleHBsaWNpdGx5IHNwZWNpZmllZCB0byBiZVxuICAgIC8vIGBmYWxzZWAhIFRoaXMgbWFrZXMgdGhlIGJlaGF2aW9yIGJldHdlZW4gdXNpbmcgYFJvdXRlciNwdXNoYCBhbmQgYVxuICAgIC8vIGA8TGluayAvPmAgY29uc2lzdGVudC5cbiAgICBvcHRpb25zLnNjcm9sbCA9ICEhKG9wdGlvbnMuc2Nyb2xsID8/IHRydWUpXG5cbiAgICBsZXQgbG9jYWxlQ2hhbmdlID0gb3B0aW9ucy5sb2NhbGUgIT09IHRoaXMubG9jYWxlXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgdGhpcy5sb2NhbGUgPVxuICAgICAgICBvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2VcbiAgICAgICAgICA/IHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICAgIDogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5sb2NhbGVcblxuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmxvY2FsZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSB0aGlzLmxvY2FsZVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwoaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMpXG4gICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUsXG4gICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgKVxuXG4gICAgICBpZiAobG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSkge1xuICAgICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGVcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYXJzZWRBcy5wYXRobmFtZSlcbiAgICAgICAgYXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcylcbiAgICAgICAgdXJsID0gYWRkQmFzZVBhdGgoXG4gICAgICAgICAgbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgICAgICAgICAgIGhhc0Jhc2VQYXRoKHVybCkgPyBkZWxCYXNlUGF0aCh1cmwpIDogdXJsLFxuICAgICAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICAgICAgKS5wYXRobmFtZVxuICAgICAgICApXG4gICAgICB9XG4gICAgICBsZXQgZGlkTmF2aWdhdGUgPSBmYWxzZVxuXG4gICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgIC8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgLy8gaWYgdGhlIGxvY2FsZSBpc24ndCBjb25maWd1cmVkIGhhcmQgbmF2aWdhdGUgdG8gc2hvdyA0MDQgcGFnZVxuICAgICAgICBpZiAoIXRoaXMubG9jYWxlcz8uaW5jbHVkZXModGhpcy5sb2NhbGUhKSkge1xuICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gYWRkTG9jYWxlKHBhcnNlZEFzLnBhdGhuYW1lLCB0aGlzLmxvY2FsZSlcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKVxuICAgICAgICAgIC8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4gICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBkZXRlY3RlZERvbWFpbiA9IGRldGVjdERvbWFpbkxvY2FsZShcbiAgICAgICAgdGhpcy5kb21haW5Mb2NhbGVzLFxuICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgIHRoaXMubG9jYWxlXG4gICAgICApXG5cbiAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAvLyBpZiB3ZSBhcmUgbmF2aWdhdGluZyB0byBhIGRvbWFpbiBsb2NhbGUgZW5zdXJlIHdlIHJlZGlyZWN0IHRvIHRoZVxuICAgICAgICAvLyBjb3JyZWN0IGRvbWFpblxuICAgICAgICBpZiAoXG4gICAgICAgICAgIWRpZE5hdmlnYXRlICYmXG4gICAgICAgICAgZGV0ZWN0ZWREb21haW4gJiZcbiAgICAgICAgICB0aGlzLmlzTG9jYWxlRG9tYWluICYmXG4gICAgICAgICAgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSAhPT0gZGV0ZWN0ZWREb21haW4uZG9tYWluXG4gICAgICAgICkge1xuICAgICAgICAgIGNvbnN0IGFzTm9CYXNlUGF0aCA9IGRlbEJhc2VQYXRoKGFzKVxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHAgPyAnJyA6ICdzJ306Ly8ke1xuICAgICAgICAgICAgZGV0ZWN0ZWREb21haW4uZG9tYWluXG4gICAgICAgICAgfSR7YWRkQmFzZVBhdGgoXG4gICAgICAgICAgICBgJHtcbiAgICAgICAgICAgICAgdGhpcy5sb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgICAgICAgICA/ICcnXG4gICAgICAgICAgICAgICAgOiBgLyR7dGhpcy5sb2NhbGV9YFxuICAgICAgICAgICAgfSR7YXNOb0Jhc2VQYXRoID09PSAnLycgPyAnJyA6IGFzTm9CYXNlUGF0aH1gIHx8ICcvJ1xuICAgICAgICAgICl9YFxuICAgICAgICAgIC8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4gICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZGlkTmF2aWdhdGUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpID0+IHt9KVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgfVxuICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICBpZiAoU1QpIHtcbiAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJylcbiAgICB9XG5cbiAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9uc1xuICAgIGNvbnN0IHJvdXRlUHJvcHMgPSB7IHNoYWxsb3cgfVxuXG4gICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUsIHJvdXRlUHJvcHMpXG4gICAgfVxuXG4gICAgYXMgPSBhZGRCYXNlUGF0aChcbiAgICAgIGFkZExvY2FsZShcbiAgICAgICAgaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsXG4gICAgICAgIG9wdGlvbnMubG9jYWxlLFxuICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgIClcbiAgICApXG4gICAgY29uc3QgY2xlYW5lZEFzID0gZGVsTG9jYWxlKFxuICAgICAgaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsXG4gICAgICB0aGlzLmxvY2FsZVxuICAgIClcbiAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXNcblxuICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuXG4gICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSkge1xuICAgICAgdGhpcy5hc1BhdGggPSBjbGVhbmVkQXNcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMsIHJvdXRlUHJvcHMpXG4gICAgICAvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG4gICAgICB0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpXG4gICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0sIG51bGwpXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG4gICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSBwYXJzZWRcblxuICAgIC8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbiAgICAvLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbiAgICAvLyB3aGVuIHJld3JpdHRlbiB0b1xuICAgIGxldCBwYWdlczogYW55LCByZXdyaXRlczogYW55XG4gICAgdHJ5IHtcbiAgICAgIHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcbiAgICAgIDsoeyBfX3Jld3JpdGVzOiByZXdyaXRlcyB9ID0gYXdhaXQgZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgLy8gSWYgd2UgZmFpbCB0byByZXNvbHZlIHRoZSBwYWdlIGxpc3Qgb3IgY2xpZW50LWJ1aWxkIG1hbmlmZXN0LCB3ZSBtdXN0XG4gICAgICAvLyBkbyBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb246XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSAmJiAhbG9jYWxlQ2hhbmdlKSB7XG4gICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJ1xuICAgIH1cblxuICAgIC8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4gICAgLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxuICAgIGxldCByZXNvbHZlZEFzID0gYXNcblxuICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAvLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4gICAgLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICA/IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSlcbiAgICAgIDogcGF0aG5hbWVcblxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyAmJiBhcy5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgY29uc3QgcmV3cml0ZXNSZXN1bHQgPSByZXNvbHZlUmV3cml0ZXMoXG4gICAgICAgICAgYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGNsZWFuZWRBcywgdGhpcy5sb2NhbGUpKSxcbiAgICAgICAgICBwYWdlcyxcbiAgICAgICAgICByZXdyaXRlcyxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAocDogc3RyaW5nKSA9PiByZXNvbHZlRHluYW1pY1JvdXRlKHAsIHBhZ2VzKSxcbiAgICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgICAgKVxuICAgICAgICByZXNvbHZlZEFzID0gcmV3cml0ZXNSZXN1bHQuYXNQYXRoXG5cbiAgICAgICAgaWYgKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlICYmIHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZikge1xuICAgICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICAgIHBhdGhuYW1lID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmXG4gICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWUsIHBhZ2VzKVxuXG4gICAgICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgaWYgKCFpc0xvY2FsVVJMKGFzKSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBJbnZhbGlkIGhyZWY6IFwiJHt1cmx9XCIgYW5kIGFzOiBcIiR7YXN9XCIsIHJlY2VpdmVkIHJlbGF0aXZlIGhyZWYgYW5kIGV4dGVybmFsIGFzYCArXG4gICAgICAgICAgICBgXFxuU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvaW52YWxpZC1yZWxhdGl2ZS11cmwtZXh0ZXJuYWwtYXNgXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSwgdGhpcy5sb2NhbGUpXG5cbiAgICBpZiAoaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICBjb25zdCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwocmVzb2x2ZWRBcylcbiAgICAgIGNvbnN0IGFzUGF0aG5hbWUgPSBwYXJzZWRBcy5wYXRobmFtZVxuXG4gICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgIGNvbnN0IHNob3VsZEludGVycG9sYXRlID0gcm91dGUgPT09IGFzUGF0aG5hbWVcbiAgICAgIGNvbnN0IGludGVycG9sYXRlZEFzID0gc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgPyBpbnRlcnBvbGF0ZUFzKHJvdXRlLCBhc1BhdGhuYW1lLCBxdWVyeSlcbiAgICAgICAgOiAoe30gYXMgeyByZXN1bHQ6IHVuZGVmaW5lZDsgcGFyYW1zOiB1bmRlZmluZWQgfSlcblxuICAgICAgaWYgKCFyb3V0ZU1hdGNoIHx8IChzaG91bGRJbnRlcnBvbGF0ZSAmJiAhaW50ZXJwb2xhdGVkQXMucmVzdWx0KSkge1xuICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihcbiAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICBgJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyBgSW50ZXJwb2xhdGluZyBocmVmYFxuICAgICAgICAgICAgICAgICAgOiBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGBgXG4gICAgICAgICAgICAgIH0gZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgKHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgID8gYFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSkgdG8gYmUgaW50ZXJwb2xhdGVkIHByb3Blcmx5LiBgXG4gICAgICAgICAgICAgIDogYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCkgK1xuICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy8ke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/ICdocmVmLWludGVycG9sYXRpb24tZmFpbGVkJ1xuICAgICAgICAgICAgICAgICAgOiAnaW5jb21wYXRpYmxlLWhyZWYtYXMnXG4gICAgICAgICAgICAgIH1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHNob3VsZEludGVycG9sYXRlKSB7XG4gICAgICAgIGFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcGFyc2VkQXMsIHtcbiAgICAgICAgICAgIHBhdGhuYW1lOiBpbnRlcnBvbGF0ZWRBcy5yZXN1bHQsXG4gICAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBpbnRlcnBvbGF0ZWRBcy5wYXJhbXMhKSxcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKVxuICAgICAgfVxuICAgIH1cblxuICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKVxuXG4gICAgdHJ5IHtcbiAgICAgIGxldCByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgIHJvdXRlUHJvcHNcbiAgICAgIClcbiAgICAgIGxldCB7IGVycm9yLCBwcm9wcywgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIC8vIGhhbmRsZSByZWRpcmVjdCBvbiBjbGllbnQtdHJhbnNpdGlvblxuICAgICAgaWYgKChfX05fU1NHIHx8IF9fTl9TU1ApICYmIHByb3BzKSB7XG4gICAgICAgIGlmICgocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMgJiYgKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVCkge1xuICAgICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVFxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcbiAgICAgICAgICAvLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXG4gICAgICAgICAgLy8gaXQncyBub3RcbiAgICAgICAgICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJzZWRIcmVmID0gcGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbilcbiAgICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUgPSByZXNvbHZlRHluYW1pY1JvdXRlKFxuICAgICAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lLFxuICAgICAgICAgICAgICBwYWdlc1xuICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocGFyc2VkSHJlZi5wYXRobmFtZSkpIHtcbiAgICAgICAgICAgICAgY29uc3QgeyB1cmw6IG5ld1VybCwgYXM6IG5ld0FzIH0gPSBwcmVwYXJlVXJsQXMoXG4gICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbixcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvblxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5nZShtZXRob2QsIG5ld1VybCwgbmV3QXMsIG9wdGlvbnMpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkZXN0aW5hdGlvblxuICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKSA9PiB7fSlcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaXNQcmV2aWV3ID0gISFwcm9wcy5fX05fUFJFVklFV1xuXG4gICAgICAgIC8vIGhhbmRsZSBTU0cgZGF0YSA0MDRcbiAgICAgICAgaWYgKHByb3BzLm5vdEZvdW5kID09PSBTU0dfREFUQV9OT1RfRk9VTkQpIHtcbiAgICAgICAgICBsZXQgbm90Rm91bmRSb3V0ZVxuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy80MDQnKVxuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSA9ICcvNDA0J1xuICAgICAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUgPSAnL19lcnJvcidcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUsXG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlLFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICBhcyxcbiAgICAgICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgICAgICB7IHNoYWxsb3c6IGZhbHNlIH1cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMsIHJvdXRlUHJvcHMpXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgfVxuXG4gICAgICAvLyBzaGFsbG93IHJvdXRpbmcgaXMgb25seSBhbGxvd2VkIGZvciBzYW1lIHBhZ2UgVVJMIGNoYW5nZXMuXG4gICAgICBjb25zdCBpc1ZhbGlkU2hhbGxvd1JvdXRlID0gb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMucm91dGUgPT09IHJvdXRlXG5cbiAgICAgIGlmIChcbiAgICAgICAgKG9wdGlvbnMgYXMgYW55KS5faCAmJlxuICAgICAgICBwYXRobmFtZSA9PT0gJy9fZXJyb3InICYmXG4gICAgICAgIHNlbGYuX19ORVhUX0RBVEFfXy5wcm9wcz8ucGFnZVByb3BzPy5zdGF0dXNDb2RlID09PSA1MDAgJiZcbiAgICAgICAgcHJvcHM/LnBhZ2VQcm9wc1xuICAgICAgKSB7XG4gICAgICAgIC8vIGVuc3VyZSBzdGF0dXNDb2RlIGlzIHN0aWxsIGNvcnJlY3QgZm9yIHN0YXRpYyA1MDAgcGFnZVxuICAgICAgICAvLyB3aGVuIHVwZGF0aW5nIHF1ZXJ5IGluZm9ybWF0aW9uXG4gICAgICAgIHByb3BzLnBhZ2VQcm9wcy5zdGF0dXNDb2RlID0gNTAwXG4gICAgICB9XG5cbiAgICAgIGF3YWl0IHRoaXMuc2V0KFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUhLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgY2xlYW5lZEFzLFxuICAgICAgICByb3V0ZUluZm8sXG4gICAgICAgIGZvcmNlZFNjcm9sbCB8fFxuICAgICAgICAgIChpc1ZhbGlkU2hhbGxvd1JvdXRlIHx8ICFvcHRpb25zLnNjcm9sbCA/IG51bGwgOiB7IHg6IDAsIHk6IDAgfSlcbiAgICAgICkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgaWYgKGUuY2FuY2VsbGVkKSBlcnJvciA9IGVycm9yIHx8IGVcbiAgICAgICAgZWxzZSB0aHJvdyBlXG4gICAgICB9KVxuXG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGNsZWFuZWRBcywgcm91dGVQcm9wcylcbiAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgIH1cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgaWYgKHRoaXMubG9jYWxlKSB7XG4gICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmxhbmcgPSB0aGlzLmxvY2FsZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcylcblxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9XG5cbiAgY2hhbmdlU3RhdGUoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fVxuICApOiB2b2lkIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8IGdldFVSTCgpICE9PSBhcykge1xuICAgICAgdGhpcy5fc2hhbGxvdyA9IG9wdGlvbnMuc2hhbGxvd1xuICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXShcbiAgICAgICAge1xuICAgICAgICAgIHVybCxcbiAgICAgICAgICBhcyxcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgIF9fTjogdHJ1ZSxcbiAgICAgICAgICBpZHg6IHRoaXMuX2lkeCA9IG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgPyB0aGlzLl9pZHggOiB0aGlzLl9pZHggKyAxLFxuICAgICAgICB9IGFzIEhpc3RvcnlTdGF0ZSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICByb3V0ZVByb3BzOiBSb3V0ZVByb3BlcnRpZXMsXG4gICAgbG9hZEVycm9yRmFpbD86IGJvb2xlYW5cbiAgKTogUHJvbWlzZTxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cblxuICAgIGlmIChpc0Fzc2V0RXJyb3IoZXJyKSB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnIsIGFzLCByb3V0ZVByb3BzKVxuXG4gICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcblxuICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG5cbiAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgIHRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBsZXQgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBsZXQgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gICAgICBsZXQgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT4gfCB1bmRlZmluZWRcblxuICAgICAgaWYgKFxuICAgICAgICB0eXBlb2YgQ29tcG9uZW50ISA9PT0gJ3VuZGVmaW5lZCcgfHxcbiAgICAgICAgdHlwZW9mIHN0eWxlU2hlZXRzISA9PT0gJ3VuZGVmaW5lZCdcbiAgICAgICkge1xuICAgICAgICA7KHsgcGFnZTogQ29tcG9uZW50LCBzdHlsZVNoZWV0cyB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChcbiAgICAgICAgICAnL19lcnJvcidcbiAgICAgICAgKSlcbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gPSB7XG4gICAgICAgIHByb3BzLFxuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzLFxuICAgICAgICBlcnIsXG4gICAgICAgIGVycm9yOiBlcnIsXG4gICAgICB9XG5cbiAgICAgIGlmICghcm91dGVJbmZvLnByb3BzKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIH0gYXMgYW55KVxuICAgICAgICB9IGNhdGNoIChnaXBFcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpXG4gICAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge31cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihcbiAgICAgICAgcm91dGVJbmZvRXJyLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICByb3V0ZVByb3BzLFxuICAgICAgICB0cnVlXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0Um91dGVJbmZvKFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgcmVzb2x2ZWRBczogc3RyaW5nLFxuICAgIHJvdXRlUHJvcHM6IFJvdXRlUHJvcGVydGllc1xuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZXhpc3RpbmdSb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gfCB1bmRlZmluZWQgPSB0aGlzLmNvbXBvbmVudHNbXG4gICAgICAgIHJvdXRlXG4gICAgICBdXG4gICAgICBpZiAocm91dGVQcm9wcy5zaGFsbG93ICYmIGV4aXN0aW5nUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgIHJldHVybiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgfVxuXG4gICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm86IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyB8IHVuZGVmaW5lZCA9XG4gICAgICAgIGV4aXN0aW5nUm91dGVJbmZvICYmICdpbml0aWFsJyBpbiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgICAgID8gdW5kZWZpbmVkXG4gICAgICAgICAgOiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgY29uc3Qgcm91dGVJbmZvOiBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gPSBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgPyBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgOiBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKChyZXMpID0+ICh7XG4gICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgc3R5bGVTaGVldHM6IHJlcy5zdHlsZVNoZWV0cyxcbiAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICB9KSlcblxuICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKVxuICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgZGF0YUhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoX19OX1NTRyB8fCBfX05fU1NQKSB7XG4gICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgICAgX19OX1NTRyxcbiAgICAgICAgICB0aGlzLmxvY2FsZVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YTxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8+KCgpID0+XG4gICAgICAgIF9fTl9TU0dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhcbiAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgfSBhcyBhbnlcbiAgICAgICAgICAgIClcbiAgICAgIClcblxuICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm9cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVQcm9wcylcbiAgICB9XG4gIH1cblxuICBzZXQoXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sXG4gICAgcmVzZXRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGxcbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2VcblxuICAgIHRoaXMucm91dGUgPSByb3V0ZVxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSwgcmVzZXRTY3JvbGwpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGJlZm9yZVBvcFN0YXRlKGNiOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5fYnBzID0gY2JcbiAgfVxuXG4gIG9ubHlBSGFzaENoYW5nZShhczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpXG4gICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpXG5cbiAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoXG4gIH1cblxuICBzY3JvbGxUb0hhc2goYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKVxuICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZSBvciBgI3RvcGBcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBpZiAoaGFzaCA9PT0gJycgfHwgaGFzaCA9PT0gJ3RvcCcpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIGFzeW5jIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICBpZiAob3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlKSB7XG4gICAgICAgIHBhdGhuYW1lID0gbm9ybWFsaXplTG9jYWxlUGF0aCEocGF0aG5hbWUsIHRoaXMubG9jYWxlcykucGF0aG5hbWVcbiAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuXG4gICAgICAgIGxldCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwoYXNQYXRoKVxuICAgICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gbm9ybWFsaXplTG9jYWxlUGF0aCEoXG4gICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUsXG4gICAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICAgIClcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBsb2NhbGVQYXRoUmVzdWx0LnBhdGhuYW1lXG4gICAgICAgIG9wdGlvbnMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgYXNQYXRoID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuICAgIGxldCByZXNvbHZlZEFzID0gYXNQYXRoXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyAmJiBhc1BhdGguc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICBsZXQgcmV3cml0ZXM6IGFueVxuICAgICAgOyh7IF9fcmV3cml0ZXM6IHJld3JpdGVzIH0gPSBhd2FpdCBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkpXG5cbiAgICAgIGNvbnN0IHJld3JpdGVzUmVzdWx0ID0gcmVzb2x2ZVJld3JpdGVzKFxuICAgICAgICBhZGRCYXNlUGF0aChhZGRMb2NhbGUoYXNQYXRoLCB0aGlzLmxvY2FsZSkpLFxuICAgICAgICBwYWdlcyxcbiAgICAgICAgcmV3cml0ZXMsXG4gICAgICAgIHBhcnNlZC5xdWVyeSxcbiAgICAgICAgKHA6IHN0cmluZykgPT4gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwLCBwYWdlcyksXG4gICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgKVxuICAgICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXdyaXRlc1Jlc3VsdC5hc1BhdGgpLCB0aGlzLmxvY2FsZSlcblxuICAgICAgaWYgKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlICYmIHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZikge1xuICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgIHBhdGhuYW1lID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmXG4gICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWQucGF0aG5hbWUsIHBhZ2VzKVxuXG4gICAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIHRoaXMucGFnZUxvYWRlci5faXNTc2cocm91dGUpLnRoZW4oKGlzU3NnOiBib29sZWFuKSA9PiB7XG4gICAgICAgIHJldHVybiBpc1NzZ1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShcbiAgICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICByZXNvbHZlZEFzLFxuICAgICAgICAgICAgICAgIHRydWUsXG4gICAgICAgICAgICAgICAgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgICAgICAgPyBvcHRpb25zLmxvY2FsZVxuICAgICAgICAgICAgICAgICAgOiB0aGlzLmxvY2FsZVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgOiBmYWxzZVxuICAgICAgfSksXG4gICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgXSlcbiAgfVxuXG4gIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPEdvb2RQYWdlQ2FjaGU+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IGNhY2hlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAoXG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmXG4gICAgICAhdGhpcy5pc1ByZXZpZXcgJiZcbiAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XVxuICAgICkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pXG4gICAgfVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IHJlc291cmNlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAodGhpcy5zZHJbcmVzb3VyY2VLZXldKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZHJbcmVzb3VyY2VLZXldXG4gICAgfVxuICAgIHJldHVybiAodGhpcy5zZHJbcmVzb3VyY2VLZXldID0gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcilcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV1cbiAgICAgICAgcmV0dXJuIGRhdGFcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfSkpXG4gIH1cblxuICBnZXRJbml0aWFsUHJvcHMoXG4gICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlLFxuICAgIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddXG4gICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwIGFzIEFwcENvbXBvbmVudClcbiAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWVcbiAgICByZXR1cm4gbG9hZEdldEluaXRpYWxQcm9wczxBcHBDb250ZXh0VHlwZTxSb3V0ZXI+PihBcHAsIHtcbiAgICAgIEFwcFRyZWUsXG4gICAgICBDb21wb25lbnQsXG4gICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICBjdHgsXG4gICAgfSlcbiAgfVxuXG4gIGFib3J0Q29tcG9uZW50TG9hZChhczogc3RyaW5nLCByb3V0ZVByb3BzOiBSb3V0ZVByb3BlcnRpZXMpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdChcbiAgICAgICAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAgICAgICBidWlsZENhbmNlbGxhdGlvbkVycm9yKCksXG4gICAgICAgIGFzLFxuICAgICAgICByb3V0ZVByb3BzXG4gICAgICApXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoXG4gICAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyxcbiAgICByZXNldFNjcm9sbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgbnVsbFxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdWIoXG4gICAgICBkYXRhLFxuICAgICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCBhcyBBcHBDb21wb25lbnQsXG4gICAgICByZXNldFNjcm9sbFxuICAgIClcbiAgfVxufVxuIiwiLy8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCAqIGFzIHF1ZXJ5c3RyaW5nIGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHMgPSAvaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS9cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmo6IFVybE9iamVjdCkge1xuICBsZXQgeyBhdXRoLCBob3N0bmFtZSB9ID0gdXJsT2JqXG4gIGxldCBwcm90b2NvbCA9IHVybE9iai5wcm90b2NvbCB8fCAnJ1xuICBsZXQgcGF0aG5hbWUgPSB1cmxPYmoucGF0aG5hbWUgfHwgJydcbiAgbGV0IGhhc2ggPSB1cmxPYmouaGFzaCB8fCAnJ1xuICBsZXQgcXVlcnkgPSB1cmxPYmoucXVlcnkgfHwgJydcbiAgbGV0IGhvc3Q6IHN0cmluZyB8IGZhbHNlID0gZmFsc2VcblxuICBhdXRoID0gYXV0aCA/IGVuY29kZVVSSUNvbXBvbmVudChhdXRoKS5yZXBsYWNlKC8lM0EvaSwgJzonKSArICdAJyA6ICcnXG5cbiAgaWYgKHVybE9iai5ob3N0KSB7XG4gICAgaG9zdCA9IGF1dGggKyB1cmxPYmouaG9zdFxuICB9IGVsc2UgaWYgKGhvc3RuYW1lKSB7XG4gICAgaG9zdCA9IGF1dGggKyAofmhvc3RuYW1lLmluZGV4T2YoJzonKSA/IGBbJHtob3N0bmFtZX1dYCA6IGhvc3RuYW1lKVxuICAgIGlmICh1cmxPYmoucG9ydCkge1xuICAgICAgaG9zdCArPSAnOicgKyB1cmxPYmoucG9ydFxuICAgIH1cbiAgfVxuXG4gIGlmIChxdWVyeSAmJiB0eXBlb2YgcXVlcnkgPT09ICdvYmplY3QnKSB7XG4gICAgcXVlcnkgPSBTdHJpbmcocXVlcnlzdHJpbmcudXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhxdWVyeSBhcyBQYXJzZWRVcmxRdWVyeSkpXG4gIH1cblxuICBsZXQgc2VhcmNoID0gdXJsT2JqLnNlYXJjaCB8fCAocXVlcnkgJiYgYD8ke3F1ZXJ5fWApIHx8ICcnXG5cbiAgaWYgKHByb3RvY29sICYmIHByb3RvY29sLnN1YnN0cigtMSkgIT09ICc6JykgcHJvdG9jb2wgKz0gJzonXG5cbiAgaWYgKFxuICAgIHVybE9iai5zbGFzaGVzIHx8XG4gICAgKCghcHJvdG9jb2wgfHwgc2xhc2hlZFByb3RvY29scy50ZXN0KHByb3RvY29sKSkgJiYgaG9zdCAhPT0gZmFsc2UpXG4gICkge1xuICAgIGhvc3QgPSAnLy8nICsgKGhvc3QgfHwgJycpXG4gICAgaWYgKHBhdGhuYW1lICYmIHBhdGhuYW1lWzBdICE9PSAnLycpIHBhdGhuYW1lID0gJy8nICsgcGF0aG5hbWVcbiAgfSBlbHNlIGlmICghaG9zdCkge1xuICAgIGhvc3QgPSAnJ1xuICB9XG5cbiAgaWYgKGhhc2ggJiYgaGFzaFswXSAhPT0gJyMnKSBoYXNoID0gJyMnICsgaGFzaFxuICBpZiAoc2VhcmNoICYmIHNlYXJjaFswXSAhPT0gJz8nKSBzZWFyY2ggPSAnPycgKyBzZWFyY2hcblxuICBwYXRobmFtZSA9IHBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZywgZW5jb2RlVVJJQ29tcG9uZW50KVxuICBzZWFyY2ggPSBzZWFyY2gucmVwbGFjZSgnIycsICclMjMnKVxuXG4gIHJldHVybiBgJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YFxufVxuIiwiLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpXG59XG4iLCJpbXBvcnQgeyBnZXRMb2NhdGlvbk9yaWdpbiB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbi8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZCB3aXRoIG9uZSBleGNlcHRpb24sIGluIHRoZSBicm93c2VyLCBhYnNvbHV0ZSB1cmxzIHRoYXQgYXJlIG9uXG4gKiB0aGUgY3VycmVudCBvcmlnaW4gd2lsbCBiZSBwYXJzZWQgYXMgcmVsYXRpdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsOiBzdHJpbmcsIGJhc2U/OiBzdHJpbmcpIHtcbiAgY29uc3QgZ2xvYmFsQmFzZSA9IG5ldyBVUkwoXG4gICAgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyAnaHR0cDovL24nIDogZ2V0TG9jYXRpb25PcmlnaW4oKVxuICApXG4gIGNvbnN0IHJlc29sdmVkQmFzZSA9IGJhc2UgPyBuZXcgVVJMKGJhc2UsIGdsb2JhbEJhc2UpIDogZ2xvYmFsQmFzZVxuICBjb25zdCB7IHBhdGhuYW1lLCBzZWFyY2hQYXJhbXMsIHNlYXJjaCwgaGFzaCwgaHJlZiwgb3JpZ2luIH0gPSBuZXcgVVJMKFxuICAgIHVybCxcbiAgICByZXNvbHZlZEJhc2VcbiAgKVxuICBpZiAob3JpZ2luICE9PSBnbG9iYWxCYXNlLm9yaWdpbikge1xuICAgIHRocm93IG5ldyBFcnJvcihgaW52YXJpYW50OiBpbnZhbGlkIHJlbGF0aXZlIFVSTCwgcm91dGVyIHJlY2VpdmVkICR7dXJsfWApXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBxdWVyeTogc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWY6IGhyZWYuc2xpY2UoZ2xvYmFsQmFzZS5vcmlnaW4ubGVuZ3RoKSxcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoXG4gIHNlYXJjaFBhcmFtczogVVJMU2VhcmNoUGFyYW1zXG4pOiBQYXJzZWRVcmxRdWVyeSB7XG4gIGNvbnN0IHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG4gIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeVtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcXVlcnlba2V5XSA9IHZhbHVlXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKSB7XG4gICAgICA7KHF1ZXJ5W2tleV0gYXMgc3RyaW5nW10pLnB1c2godmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSBhcyBzdHJpbmcsIHZhbHVlXVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHF1ZXJ5XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0ocGFyYW06IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmIChcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdzdHJpbmcnIHx8XG4gICAgKHR5cGVvZiBwYXJhbSA9PT0gJ251bWJlcicgJiYgIWlzTmFOKHBhcmFtKSkgfHxcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdib29sZWFuJ1xuICApIHtcbiAgICByZXR1cm4gU3RyaW5nKHBhcmFtKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAnJ1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cmxRdWVyeVRvU2VhcmNoUGFyYW1zKFxuICB1cmxRdWVyeTogUGFyc2VkVXJsUXVlcnlcbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxuICBPYmplY3QuZW50cmllcyh1cmxRdWVyeSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChpdGVtKSA9PiByZXN1bHQuYXBwZW5kKGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShpdGVtKSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5zZXQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHZhbHVlKSlcbiAgICB9XG4gIH0pXG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbihcbiAgdGFyZ2V0OiBVUkxTZWFyY2hQYXJhbXMsXG4gIC4uLnNlYXJjaFBhcmFtc0xpc3Q6IFVSTFNlYXJjaFBhcmFtc1tdXG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBzZWFyY2hQYXJhbXNMaXN0LmZvckVhY2goKHNlYXJjaFBhcmFtcykgPT4ge1xuICAgIEFycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaCgoa2V5KSA9PiB0YXJnZXQuZGVsZXRlKGtleSkpXG4gICAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHRhcmdldC5hcHBlbmQoa2V5LCB2YWx1ZSkpXG4gIH0pXG4gIHJldHVybiB0YXJnZXRcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlc29sdmVSZXdyaXRlcygpIHt9XG4iLCJpbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi9yb3V0ZS1yZWdleCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4OiBSZXR1cm5UeXBlPHR5cGVvZiBnZXRSb3V0ZVJlZ2V4Pikge1xuICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXhcbiAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByZS5leGVjKHBhdGhuYW1lISlcbiAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbTogc3RyaW5nKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKVxuICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICBjb25zdCBlcnI6IEVycm9yICYgeyBjb2RlPzogc3RyaW5nIH0gPSBuZXcgRXJyb3IoXG4gICAgICAgICAgJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nXG4gICAgICAgIClcbiAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCdcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHBhcmFtczogeyBbcGFyYW1OYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9ID0ge31cblxuICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV1cbiAgICAgIGNvbnN0IG0gPSByb3V0ZU1hdGNoW2cucG9zXVxuICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXJhbXNbc2x1Z05hbWVdID0gfm0uaW5kZXhPZignLycpXG4gICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKChlbnRyeSkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICA6IGcucmVwZWF0XG4gICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgIDogZGVjb2RlKG0pXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcGFyYW1zXG4gIH1cbn1cbiIsImV4cG9ydCBpbnRlcmZhY2UgR3JvdXAge1xuICBwb3M6IG51bWJlclxuICByZXBlYXQ6IGJvb2xlYW5cbiAgb3B0aW9uYWw6IGJvb2xlYW5cbn1cblxuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW06IHN0cmluZykge1xuICBjb25zdCBvcHRpb25hbCA9IHBhcmFtLnN0YXJ0c1dpdGgoJ1snKSAmJiBwYXJhbS5lbmRzV2l0aCgnXScpXG4gIGlmIChvcHRpb25hbCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMSwgLTEpXG4gIH1cbiAgY29uc3QgcmVwZWF0ID0gcGFyYW0uc3RhcnRzV2l0aCgnLi4uJylcbiAgaWYgKHJlcGVhdCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMylcbiAgfVxuICByZXR1cm4geyBrZXk6IHBhcmFtLCByZXBlYXQsIG9wdGlvbmFsIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICByb3V0ZUtleXM/OiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH1cbiAgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH1cbn0ge1xuICBjb25zdCBzZWdtZW50cyA9IChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG4gICAgLnNsaWNlKDEpXG4gICAgLnNwbGl0KCcvJylcblxuICBjb25zdCBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfSA9IHt9XG4gIGxldCBncm91cEluZGV4ID0gMVxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICBncm91cHNba2V5XSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdCwgb3B0aW9uYWwgfVxuICAgICAgICByZXR1cm4gcmVwZWF0ID8gKG9wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgIH1cbiAgICB9KVxuICAgIC5qb2luKCcnKVxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsZXQgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgbGV0IHJvdXRlS2V5Q2hhckxlbmd0aCA9IDFcblxuICAgIC8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbiAgICBjb25zdCBnZXRTYWZlUm91dGVLZXkgPSAoKSA9PiB7XG4gICAgICBsZXQgcm91dGVLZXkgPSAnJ1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlS2V5Q2hhckxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJvdXRlS2V5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocm91dGVLZXlDaGFyQ29kZSlcbiAgICAgICAgcm91dGVLZXlDaGFyQ29kZSsrXG5cbiAgICAgICAgaWYgKHJvdXRlS2V5Q2hhckNvZGUgPiAxMjIpIHtcbiAgICAgICAgICByb3V0ZUtleUNoYXJMZW5ndGgrK1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcm91dGVLZXlcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZUtleXM6IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9XG5cbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICAgIC8vIHJlcGxhY2UgYW55IG5vbi13b3JkIGNoYXJhY3RlcnMgc2luY2UgdGhleSBjYW4gYnJlYWtcbiAgICAgICAgICAvLyB0aGUgbmFtZWQgcmVnZXhcbiAgICAgICAgICBsZXQgY2xlYW5lZEtleSA9IGtleS5yZXBsYWNlKC9cXFcvZywgJycpXG4gICAgICAgICAgbGV0IGludmFsaWRLZXkgPSBmYWxzZVxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4gICAgICAgICAgLy8gc2FmZSBrZXlcbiAgICAgICAgICBpZiAoY2xlYW5lZEtleS5sZW5ndGggPT09IDAgfHwgY2xlYW5lZEtleS5sZW5ndGggPiAzMCkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc05hTihwYXJzZUludChjbGVhbmVkS2V5LnN1YnN0cigwLCAxKSkpKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbnZhbGlkS2V5KSB7XG4gICAgICAgICAgICBjbGVhbmVkS2V5ID0gZ2V0U2FmZVJvdXRlS2V5KClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUtleXNbY2xlYW5lZEtleV0gPSBrZXlcbiAgICAgICAgICByZXR1cm4gcmVwZWF0XG4gICAgICAgICAgICA/IG9wdGlvbmFsXG4gICAgICAgICAgICAgID8gYCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2BcbiAgICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWBcbiAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuam9pbignJylcblxuICAgIHJldHVybiB7XG4gICAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICAgIGdyb3VwcyxcbiAgICAgIHJvdXRlS2V5cyxcbiAgICAgIG5hbWVkUmVnZXg6IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCxcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgIGdyb3VwcyxcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgZm9ybWF0VXJsIH0gZnJvbSAnLi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybCdcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBFbnYgfSBmcm9tICdAbmV4dC9lbnYnXG5pbXBvcnQgeyBCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vc2VydmVyL2dldC1wYWdlLWZpbGVzJ1xuaW1wb3J0IHsgRG9tYWluTG9jYWxlcyB9IGZyb20gJy4uL3NlcnZlci9jb25maWcnXG5pbXBvcnQgeyBQcmV2aWV3RGF0YSB9IGZyb20gJ25leHQvdHlwZXMnXG5cbi8qKlxuICogVHlwZXMgdXNlZCBieSBib3RoIG5leHQgYW5kIG5leHQtc2VydmVyXG4gKi9cblxuZXhwb3J0IHR5cGUgTmV4dENvbXBvbmVudFR5cGU8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCA9IE5leHRQYWdlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+ID0gQ29tcG9uZW50VHlwZTxQPiAmIHtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIGluaXRpYWwgcGFnZSBsb2FkIGRhdGEgcG9wdWxhdGlvbi4gRGF0YSByZXR1cm5lZCBmcm9tIGBnZXRJbml0aWFsUHJvcHNgIGlzIHNlcmlhbGl6ZWQgd2hlbiBzZXJ2ZXIgcmVuZGVyZWQuXG4gICAqIE1ha2Ugc3VyZSB0byByZXR1cm4gcGxhaW4gYE9iamVjdGAgd2l0aG91dCB1c2luZyBgRGF0ZWAsIGBNYXBgLCBgU2V0YC5cbiAgICogQHBhcmFtIGN0eCBDb250ZXh0IG9mIGBwYWdlYFxuICAgKi9cbiAgZ2V0SW5pdGlhbFByb3BzPyhjb250ZXh0OiBDKTogSVAgfCBQcm9taXNlPElQPlxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wc1xuPiAmIHtcbiAgcmVuZGVyRG9jdW1lbnQoXG4gICAgRG9jdW1lbnQ6IERvY3VtZW50VHlwZSxcbiAgICBwcm9wczogRG9jdW1lbnRQcm9wc1xuICApOiBSZWFjdC5SZWFjdEVsZW1lbnRcbn1cblxuZXhwb3J0IHR5cGUgQXBwVHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGVcbj5cblxuZXhwb3J0IHR5cGUgQXBwVHJlZVR5cGUgPSBDb21wb25lbnRUeXBlPFxuICBBcHBJbml0aWFsUHJvcHMgJiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfVxuPlxuXG4vKipcbiAqIFdlYiB2aXRhbHMgcHJvdmlkZWQgdG8gX2FwcC5yZXBvcnRXZWJWaXRhbHMgYnkgQ29yZSBXZWIgVml0YWxzIHBsdWdpbiBkZXZlbG9wZWQgYnkgR29vZ2xlIENocm9tZSB0ZWFtLlxuICogaHR0cHM6Ly9uZXh0anMub3JnL2Jsb2cvbmV4dC05LTQjaW50ZWdyYXRlZC13ZWItdml0YWxzLXJlcG9ydGluZ1xuICovXG5leHBvcnQgdHlwZSBOZXh0V2ViVml0YWxzTWV0cmljID0ge1xuICBpZDogc3RyaW5nXG4gIGxhYmVsOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIHN0YXJ0VGltZTogbnVtYmVyXG4gIHZhbHVlOiBudW1iZXJcbn1cblxuZXhwb3J0IHR5cGUgRW5oYW5jZXI8Qz4gPSAoQ29tcG9uZW50OiBDKSA9PiBDXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudHNFbmhhbmNlciA9XG4gIHwge1xuICAgICAgZW5oYW5jZUFwcD86IEVuaGFuY2VyPEFwcFR5cGU+XG4gICAgICBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG4gICAgfVxuICB8IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmdcbiAgaGVhZD86IEFycmF5PEpTWC5FbGVtZW50IHwgbnVsbD5cbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChcbiAgb3B0aW9ucz86IENvbXBvbmVudHNFbmhhbmNlclxuKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PlxuXG5leHBvcnQgdHlwZSBCYXNlQ29udGV4dCA9IHtcbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBORVhUX0RBVEEgPSB7XG4gIHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIHBhZ2U6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYnVpbGRJZDogc3RyaW5nXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIHJ1bnRpbWVDb25maWc/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gIG5leHRFeHBvcnQ/OiBib29sZWFuXG4gIGF1dG9FeHBvcnQ/OiBib29sZWFuXG4gIGlzRmFsbGJhY2s/OiBib29sZWFuXG4gIGR5bmFtaWNJZHM/OiAoc3RyaW5nIHwgbnVtYmVyKVtdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbiAgc2NyaXB0TG9hZGVyPzogYW55W11cbiAgaXNQcmV2aWV3PzogYm9vbGVhblxufVxuXG4vKipcbiAqIGBOZXh0YCBjb250ZXh0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dFBhZ2VDb250ZXh0IHtcbiAgLyoqXG4gICAqIEVycm9yIG9iamVjdCBpZiBlbmNvdW50ZXJlZCBkdXJpbmcgcmVuZGVyaW5nXG4gICAqL1xuICBlcnI/OiAoRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfSkgfCBudWxsXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVxdWVzdCBvYmplY3QuXG4gICAqL1xuICByZXE/OiBJbmNvbWluZ01lc3NhZ2VcbiAgLyoqXG4gICAqIGBIVFRQYCByZXNwb25zZSBvYmplY3QuXG4gICAqL1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICAvKipcbiAgICogUGF0aCBzZWN0aW9uIG9mIGBVUkxgLlxuICAgKi9cbiAgcGF0aG5hbWU6IHN0cmluZ1xuICAvKipcbiAgICogUXVlcnkgc3RyaW5nIHNlY3Rpb24gb2YgYFVSTGAgcGFyc2VkIGFzIGFuIG9iamVjdC5cbiAgICovXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICAvKipcbiAgICogYFN0cmluZ2Agb2YgdGhlIGFjdHVhbCBwYXRoIGluY2x1ZGluZyBxdWVyeS5cbiAgICovXG4gIGFzUGF0aD86IHN0cmluZ1xuICAvKipcbiAgICogYENvbXBvbmVudGAgdGhlIHRyZWUgb2YgdGhlIEFwcCB0byB1c2UgaWYgbmVlZGluZyB0byByZW5kZXIgc2VwYXJhdGVseVxuICAgKi9cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbn1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dFR5cGU8UiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyPiA9IHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQ+XG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG4gIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gIHJvdXRlcjogUlxufVxuXG5leHBvcnQgdHlwZSBBcHBJbml0aWFsUHJvcHMgPSB7XG4gIHBhZ2VQcm9wczogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzVHlwZTxcbiAgUiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyLFxuICBQID0ge31cbj4gPSBBcHBJbml0aWFsUHJvcHMgJiB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0LCBhbnksIFA+XG4gIHJvdXRlcjogUlxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudENvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQgJiB7XG4gIHJlbmRlclBhZ2U6IFJlbmRlclBhZ2Vcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRJbml0aWFsUHJvcHMgPSBSZW5kZXJQYWdlUmVzdWx0ICYge1xuICBzdHlsZXM/OiBSZWFjdC5SZWFjdEVsZW1lbnRbXSB8IFJlYWN0LlJlYWN0RnJhZ21lbnRcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRQcm9wcyA9IERvY3VtZW50SW5pdGlhbFByb3BzICYge1xuICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgZGFuZ2Vyb3VzQXNQYXRoOiBzdHJpbmdcbiAgZG9jQ29tcG9uZW50c1JlbmRlcmVkOiB7XG4gICAgSHRtbD86IGJvb2xlYW5cbiAgICBNYWluPzogYm9vbGVhblxuICAgIEhlYWQ/OiBib29sZWFuXG4gICAgTmV4dFNjcmlwdD86IGJvb2xlYW5cbiAgfVxuICBidWlsZE1hbmlmZXN0OiBCdWlsZE1hbmlmZXN0XG4gIGFtcFBhdGg6IHN0cmluZ1xuICBpbkFtcE1vZGU6IGJvb2xlYW5cbiAgaHlicmlkQW1wOiBib29sZWFuXG4gIGlzRGV2ZWxvcG1lbnQ6IGJvb2xlYW5cbiAgZHluYW1pY0ltcG9ydHM6IHN0cmluZ1tdXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIGNhbm9uaWNhbEJhc2U6IHN0cmluZ1xuICBoZWFkVGFnczogYW55W11cbiAgdW5zdGFibGVfcnVudGltZUpTPzogZmFsc2VcbiAgdW5zdGFibGVfSnNQcmVsb2FkPzogZmFsc2VcbiAgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmc6IHN0cmluZ1xuICBzY3JpcHRMb2FkZXI6IHsgZGVmZXI/OiBzdHJpbmdbXTsgZWFnZXI/OiBhbnlbXSB9XG4gIGxvY2FsZT86IHN0cmluZ1xufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgSW5jb21pbmdNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgcXVlcnlgIHZhbHVlcyBmcm9tIHVybFxuICAgKi9cbiAgcXVlcnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXVxuICB9XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYGNvb2tpZXNgIGZyb20gaGVhZGVyXG4gICAqL1xuICBjb29raWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH1cblxuICBib2R5OiBhbnlcblxuICBlbnY6IEVudlxuXG4gIHByZXZpZXc/OiBib29sZWFuXG4gIC8qKlxuICAgKiBQcmV2aWV3IGRhdGEgc2V0IG9uIHRoZSByZXF1ZXN0LCBpZiBhbnlcbiAgICogKi9cbiAgcHJldmlld0RhdGE/OiBQcmV2aWV3RGF0YVxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHN0YXR1czogbnVtYmVyLCB1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuXG4gIC8qKlxuICAgKiBTZXQgcHJldmlldyBkYXRhIGZvciBOZXh0LmpzJyBwcmVyZW5kZXIgbW9kZVxuICAgKi9cbiAgc2V0UHJldmlld0RhdGE6IChcbiAgICBkYXRhOiBvYmplY3QgfCBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgKGluIHNlY29uZHMpIGZvciB0aGUgcHJldmlldyBzZXNzaW9uIHRvIGxhc3QgZm9yLlxuICAgICAgICogVGhlIGdpdmVuIG51bWJlciB3aWxsIGJlIGNvbnZlcnRlZCB0byBhbiBpbnRlZ2VyIGJ5IHJvdW5kaW5nIGRvd24uXG4gICAgICAgKiBCeSBkZWZhdWx0LCBubyBtYXhpbXVtIGFnZSBpcyBzZXQgYW5kIHRoZSBwcmV2aWV3IHNlc3Npb24gZmluaXNoZXNcbiAgICAgICAqIHdoZW4gdGhlIGNsaWVudCBzaHV0cyBkb3duIChicm93c2VyIGlzIGNsb3NlZCkuXG4gICAgICAgKi9cbiAgICAgIG1heEFnZT86IG51bWJlclxuICAgIH1cbiAgKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgY2xlYXJQcmV2aWV3RGF0YTogKCkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlIYW5kbGVyPFQgPSBhbnk+ID0gKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxUPlxuKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuXG4vKipcbiAqIFV0aWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjT25jZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgZm46IFRcbik6IFQge1xuICBsZXQgdXNlZCA9IGZhbHNlXG4gIGxldCByZXN1bHQ6IFJldHVyblR5cGU8VD5cblxuICByZXR1cm4gKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmICghdXNlZCkge1xuICAgICAgdXNlZCA9IHRydWVcbiAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSkgYXMgVFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb25cbiAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMKCkge1xuICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvblxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWU8UD4oQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPFA+KSB7XG4gIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgID8gQ29tcG9uZW50XG4gICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc1NlbnQocmVzOiBTZXJ2ZXJSZXNwb25zZSkge1xuICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wczxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4oQXBwOiBOZXh0Q29tcG9uZW50VHlwZTxDLCBJUCwgUD4sIGN0eDogQyk6IFByb21pc2U8SVA+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoQXBwLnByb3RvdHlwZT8uZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgQXBwXG4gICAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpXG5cbiAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge30gYXMgSVBcbiAgfVxuXG4gIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG5cbiAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgIHJldHVybiBwcm9wc1xuICB9XG5cbiAgaWYgKCFwcm9wcykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgQXBwXG4gICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGAke2dldERpc3BsYXlOYW1lKFxuICAgICAgICAgIEFwcFxuICAgICAgICApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2BcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHNcbn1cblxuZXhwb3J0IGNvbnN0IHVybE9iamVjdEtleXMgPSBbXG4gICdhdXRoJyxcbiAgJ2hhc2gnLFxuICAnaG9zdCcsXG4gICdob3N0bmFtZScsXG4gICdocmVmJyxcbiAgJ3BhdGgnLFxuICAncGF0aG5hbWUnLFxuICAncG9ydCcsXG4gICdwcm90b2NvbCcsXG4gICdxdWVyeScsXG4gICdzZWFyY2gnLFxuICAnc2xhc2hlcycsXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmw6IFVybE9iamVjdCk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXRVcmwodXJsKVxufVxuXG5leHBvcnQgY29uc3QgU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgU1QgPVxuICBTUCAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJ1xuIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVQYXRoU2VwPW5vcm1hbGl6ZVBhdGhTZXA7ZXhwb3J0cy5kZW5vcm1hbGl6ZVBhZ2VQYXRoPWRlbm9ybWFsaXplUGFnZVBhdGg7ZnVuY3Rpb24gbm9ybWFsaXplUGF0aFNlcChwYXRoKXtyZXR1cm4gcGF0aC5yZXBsYWNlKC9cXFxcL2csJy8nKTt9ZnVuY3Rpb24gZGVub3JtYWxpemVQYWdlUGF0aChwYWdlKXtwYWdlPW5vcm1hbGl6ZVBhdGhTZXAocGFnZSk7aWYocGFnZS5zdGFydHNXaXRoKCcvaW5kZXgvJykpe3BhZ2U9cGFnZS5zbGljZSg2KTt9ZWxzZSBpZihwYWdlPT09Jy9pbmRleCcpe3BhZ2U9Jy8nO31yZXR1cm4gcGFnZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMubWFwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2ltYWdlJylcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsImZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZXh0ZW5kczsiLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgU3RhcnR1cEJ1c2luZXNzTW9kZWxNb2RhbCBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb25lbnRzL2Rhc2hib2FyZC9zdGFydHVwL1N0YXJ0dXBCdXNpbmVzc01vZGVsTW9kYWwnO1xyXG5cclxuY29uc3QgU3RhcnR1cEJ1c2luZXNzTW9kZWxQYWdlID0gKCkgPT4ge1xyXG4gIHJldHVybiA8U3RhcnR1cEJ1c2luZXNzTW9kZWxNb2RhbCAvPjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0YXJ0dXBCdXNpbmVzc01vZGVsUGFnZTtcclxuIiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuLy8gVXNhZ2VcclxuZnVuY3Rpb24gQXBwKCkge1xyXG4gIGNvbnN0IHNpemUgPSB1c2VXaW5kb3dTaXplKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHtzaXplLndpZHRofXB4IC8ge3NpemUuaGVpZ2h0fXB4XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbi8vIEhvb2tcclxuZXhwb3J0IGZ1bmN0aW9uIHVzZVdpbmRvd1NpemUoKSB7XHJcbiAgLy8gSW5pdGlhbGl6ZSBzdGF0ZSB3aXRoIHVuZGVmaW5lZCB3aWR0aC9oZWlnaHQgc28gc2VydmVyIGFuZCBjbGllbnQgcmVuZGVycyBtYXRjaFxyXG4gIC8vIExlYXJuIG1vcmUgaGVyZTogaHR0cHM6Ly9qb3Nod2NvbWVhdS5jb20vcmVhY3QvdGhlLXBlcmlscy1vZi1yZWh5ZHJhdGlvbi9cclxuICBjb25zdCBbd2luZG93U2l6ZSwgc2V0V2luZG93U2l6ZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICB3aWR0aDogdW5kZWZpbmVkLFxyXG4gICAgaGVpZ2h0OiB1bmRlZmluZWQsXHJcbiAgfSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIEhhbmRsZXIgdG8gY2FsbCBvbiB3aW5kb3cgcmVzaXplXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVSZXNpemUoKSB7XHJcbiAgICAgIC8vIFNldCB3aW5kb3cgd2lkdGgvaGVpZ2h0IHRvIHN0YXRlXHJcbiAgICAgIHNldFdpbmRvd1NpemUoe1xyXG4gICAgICAgIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcclxuICAgICAgICBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvLyBBZGQgZXZlbnQgbGlzdGVuZXJcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUpO1xyXG4gICAgLy8gQ2FsbCBoYW5kbGVyIHJpZ2h0IGF3YXkgc28gc3RhdGUgZ2V0cyB1cGRhdGVkIHdpdGggaW5pdGlhbCB3aW5kb3cgc2l6ZVxyXG4gICAgaGFuZGxlUmVzaXplKCk7XHJcbiAgICAvLyBSZW1vdmUgZXZlbnQgbGlzdGVuZXIgb24gY2xlYW51cFxyXG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUpO1xyXG4gIH0sIFtdKTsgLy8gRW1wdHkgYXJyYXkgZW5zdXJlcyB0aGF0IGVmZmVjdCBpcyBvbmx5IHJ1biBvbiBtb3VudFxyXG4gIHJldHVybiB3aW5kb3dTaXplO1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkB0aXBweWpzL3JlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2FwcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9hdXRoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2ZpcmVzdG9yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9mdW5jdGlvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2Uvc3RvcmFnZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJnc2FwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXRoZW1lc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kZXZpY2UtZGV0ZWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9