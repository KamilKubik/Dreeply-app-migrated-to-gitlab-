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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/dashboard/projects/[project]/startup-idea/success.js");
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













const StartupSuccess = () => {
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
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ExitComponent__WEBPACK_IMPORTED_MODULE_12__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 596,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      ref: contentRef,
      className: "h-screen w-full relative flex flex-col items-center justify-center",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
        className: "circles",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 599,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 600,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 601,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 602,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 603,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 604,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 605,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 606,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 607,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 608,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 610,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 611,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 612,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 613,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 614,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 615,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 616,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 617,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 618,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 619,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 620,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 621,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 622,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 623,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 624,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 625,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 626,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 627,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 628,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 629,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 598,
        columnNumber: 11
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
            lineNumber: 633,
            columnNumber: 15
          }, undefined), "Congratulations!"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 632,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "text-primarydark text-base normal:text-lg pl-2 dark:text-background text-center",
          children: "Now you can save your idea and set off to conquer the world"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 636,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "/success.svg",
          height: 200,
          width: 200,
          className: "mt-4"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 639,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            className: "z-10 mr-4 mt-6 hover:bg-primary hover:text-white dark:hover:bg-primarydark dark:hover:text-background focus:outline-none border border-primary text-primary text-sm font-light py-2 px-8 rounded-2xl dark:text-primarydark dark:border-primarydark",
            onClick: onProjectLeave,
            children: "Back"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 641,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            className: "z-10 ml-4 mt-6 hover:bg-primary hover:text-white dark:hover:bg-primarydark dark:hover:text-background focus:outline-none border border-primary text-primary text-sm font-light py-2 px-8 rounded-2xl dark:text-primarydark dark:border-primarydark",
            onClick: async e => {
              e.preventDefault();

              const doc = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_PDFDocument__WEBPACK_IMPORTED_MODULE_9__["default"], {
                data: data
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 651,
                columnNumber: 31
              }, undefined);

              const asPdf = Object(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__["pdf"])([]); // {} is important, throws without an argument

              asPdf.updateContainer(doc);
              const blob = await asPdf.toBlob();
              Object(file_saver__WEBPACK_IMPORTED_MODULE_6__["saveAs"])(blob, `${ideaName}/idea-plan.pdf`);
            },
            children: "Save"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 647,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 640,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 631,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 597,
      columnNumber: 9
    }, undefined)]
  }, void 0, true), [data]);
};

/* harmony default export */ __webpack_exports__["default"] = (StartupSuccess);

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

/***/ "./node_modules/next/image.js":
/*!************************************!*\
  !*** ./node_modules/next/image.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/image */ "./node_modules/next/dist/client/image.js")


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

/***/ "./pages/dashboard/projects/[project]/startup-idea/success.js":
/*!********************************************************************!*\
  !*** ./pages/dashboard/projects/[project]/startup-idea/success.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_dashboard_startup_StartupSuccess__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../components/dashboard/startup/StartupSuccess */ "./components/dashboard/startup/StartupSuccess.js");

var _jsxFileName = "C:\\off-saas\\pages\\dashboard\\projects\\[project]\\startup-idea\\success.js";



const StartupSuccessPage = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_dashboard_startup_StartupSuccess__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 10
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (StartupSuccessPage);

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

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0LmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Rhc2hib2FyZC9UaXBweS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Rhc2hib2FyZC9zdGFydHVwL0FuaW1hdGVkQmFja2dyb3VuZC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Rhc2hib2FyZC9zdGFydHVwL0V4aXRDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9kYXNoYm9hcmQvc3RhcnR1cC9QREZEb2N1bWVudC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Rhc2hib2FyZC9zdGFydHVwL1N0YXJ0dXBTdWNjZXNzLmpzIiwid2VicGFjazovLy8uL2xpYi9maXJlYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvbmV3QXV0aC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2ltYWdlLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JlcXVlc3QtaWRsZS1jYWxsYmFjay50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3VzZS1pbnRlcnNlY3Rpb24udHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2ltYWdlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvZGFzaGJvYXJkL3Byb2plY3RzL1twcm9qZWN0XS9zdGFydHVwLWlkZWEvc3VjY2Vzcy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcmVhY3QtcGRmL3JlbmRlcmVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHRpcHB5anMvcmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaWxlLXNhdmVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2UvYXBwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2UvYXV0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL2ZpcmVzdG9yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL2Z1bmN0aW9uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL3N0b3JhZ2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJnc2FwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianMtY29va2llXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRldmljZS1kZXRlY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJUaXBweU1vbnN0ZXIiLCJjb250ZW50Q2xhc3MiLCJjb250ZW50VGV4dCIsImNvbnRlbnRUZXh0MSIsInN0YXJ0dXBzIiwibWFya2V0IiwibW9kZWwiLCJzdWNjZXNzIiwidGlwcHlNb25zdGVyIiwic2V0VGlwcHlNb25zdGVyIiwic2V0Q3VycmVudFRpcHB5IiwiZW1wdHlJbnB1dCIsImluaXRpYWxNb2RhbCIsInZpc2lvbiIsInByb2R1Y3QiLCJmaW5hbmNlcyIsIndlbGNvbWUiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsInVzZVN0YXRlIiwiY29udGVudFJlZiIsInVzZVJlZiIsInRpcHB5UmVmIiwic2hvdyIsImdzYXAiLCJmcm9tVG8iLCJjdXJyZW50IiwiYXV0b0FscGhhIiwic2NhbGUiLCJkdXJhdGlvbiIsInRyYW5zZm9ybU9yaWdpbiIsImVhc2UiLCJQb3dlcjQiLCJlYXNlT3V0IiwiaGlkZSIsInRvIiwiZWFzZUluIiwib25JbWFnZUNsaWNrIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsIkFuaW1hdGVkQmFja2dyb3VuZCIsImNoaWxkcmVuIiwiRXhpdENvbXBvbmVudCIsImV4aXRJbWFnZSIsImlzTW9iaWxlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJvdGF0aW9uIiwiTGluZWFyIiwiUm91dGVyIiwicHVzaCIsInF1ZXJ5IiwicHJvamVjdCIsIk15RG9jdW1lbnQxIiwiZGF0YSIsIkZvbnQiLCJyZWdpc3RlciIsInNyYyIsImZhbWlseSIsInN0eWxlcyIsIlN0eWxlU2hlZXQiLCJjcmVhdGUiLCJob21lUGFnZSIsImZvbnRGYW1pbHkiLCJiYWNrZ3JvdW5kQ29sb3IiLCJmbGV4RGlyZWN0aW9uIiwiaG9tZVBhZ2VUaXRsZVNlY3Rpb24iLCJ3aWR0aCIsInRleHRBbGlnbiIsIm1hcmdpblRvcCIsImhvbWVQYWdlVGl0bGUiLCJmb250U2l6ZSIsImNvbG9yIiwiaG9tZVBhZ2VEZXNjIiwiaW1hZ2UiLCJoZWlnaHQiLCJkaXNwbGF5IiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwibGVmdERlc2NCbG9jayIsImJvcmRlclRvcFJpZ2h0UmFkaXVzIiwibGVmdERlc2NCbG9ja1RleHQiLCJwYWRkaW5nIiwibGluZUhlaWdodCIsInJpZ2h0QmFyIiwicG9zaXRpb24iLCJyaWdodCIsInJpZ2h0QmFyQ29udGFjdCIsImJvdHRvbSIsImJvcmRlclRvcExlZnRSYWRpdXMiLCJjb3VudHJ5VGV4dCIsImVtYWlsVGV4dCIsInBob25lTnVtYmVyVGV4dCIsImdyYXlCYXJPbmUiLCJsZWZ0IiwiZ3JheUJhclR3byIsIm92ZXJ2aWV3UGFnZSIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwib3ZlcnZpZXdIZWFkaW5nIiwib3ZlcnZpZXdTdWJ0aXRsZSIsIm92ZXJ2aWV3SW1hZ2UiLCJ0b3AiLCJvdmVydmlld1NlY3Rpb24iLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdSaWdodCIsInNlY3Rpb25Db250YWluZXJPbmUiLCJzZWN0aW9uSGVhZGluZ09uZSIsInNlY3Rpb25UZXh0Iiwic2VjdGlvbkNvbnRhaW5lclR3byIsInNlY3Rpb25IZWFkaW5nVHdvIiwic2VjdGlvbkNvbnRhaW5lclRocmVlIiwic2VjdGlvbkhlYWRpbmdUaHJlZSIsImNvbnRlbnRzUGFnZSIsImNvbnRlbnRzTGVmdEJhciIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImNvbnRlbnRzQmFyT25lIiwidHJhbnNmb3JtIiwiY29udGVudHNCYXJUd28iLCJjb250ZW50c0JhclRocmVlIiwiY29udGVudHNCYXJGb3VyIiwiY29udGVudHNCYXJGaXZlIiwiY29udGVudHNSaWdodEJhciIsImNvbnRlbnRzUmlnaHRUZXh0T25lIiwiY29udGVudHNSaWdodFRleHRUd28iLCJjb250ZW50c1JpZ2h0VGV4dFRocmVlIiwiY29udGVudHNSaWdodFRleHRGb3VyIiwiY29udGVudHNSaWdodFRleHRGaXZlIiwiYXZhdGFyRXhpc3RzIiwiaW1hZ2VOYW1lRXhpc3RzIiwibWFya2V0UHJvYmxlbVNlY3Rpb24iLCJpZGVhTmFtZSIsImlkZWFEZXNjIiwic3RhcnR1cEZpZWxkIiwiaWRlYUNvdW50cnkiLCJzdGFydHVwRW1haWwiLCJzdGFydHVwUGhvbmUiLCJtYXJrZXRTb2x1dGlvblNlY3Rpb24iLCJmb3VuZGVyc1NlY3Rpb24iLCJwcm9kdWN0T3ZlcnZpZXdTZWN0aW9uIiwicHJvZHVjdFByb21vdGlvblNlY3Rpb24iLCJwcm9kdWN0QmVuZWZpdHNTZWN0aW9uIiwibWFya2V0T3ZlcnZpZXdTZWN0aW9uIiwiY29tcGV0aXRvcnNTZWN0aW9uIiwiY29tcGV0aXRpb25EaXN0aW5ndWlzaFNlY3Rpb24iLCJ0YXJnZXRDdXN0b21lcnNTZWN0aW9uIiwic3RhcnR1cENvc3RzU2VjdGlvbiIsInJ1bm5pbmdDb3N0c1NlY3Rpb24iLCJmaW5hbmNpbmdTZWN0aW9uIiwiYnVzaW5lc3NNb2RlbE92ZXJ2aWV3U2VjdGlvbiIsImJ1c2luZXNzR3Jvd1NlY3Rpb24iLCJ3aHlTdWNjZXNzU2VjdGlvbiIsIlN0YXJ0dXBTdWNjZXNzIiwicHJvamVjdElkIiwic2V0UHJvamVjdElkIiwic2V0SWRlYU5hbWUiLCJzZXRJZGVhRGVzYyIsInNldElkZWFDb3VudHJ5Iiwic2V0U3RhcnR1cEZpZWxkIiwic2V0U3RhcnR1cEVtYWlsIiwic2V0U3RhcnR1cFBob25lIiwic2V0SW1hZ2VOYW1lRXhpc3RzIiwic2V0QXZhdGFyRXhpc3RzIiwic2V0TWFya2V0UHJvYmxlbVNlY3Rpb24iLCJzZXRNYXJrZXRTb2x1dGlvblNlY3Rpb24iLCJzZXRGb3VuZGVyc1NlY3Rpb24iLCJzZXRQcm9kdWN0T3ZlcnZpZXdTZWN0aW9uIiwic2V0UHJvZHVjdFByb21vdGlvblNlY3Rpb24iLCJzZXRQcm9kdWN0QmVuZWZpdHNTZWN0aW9uIiwic2V0TWFya2V0T3ZlcnZpZXdTZWN0aW9uIiwic2V0Q29tcGV0aXRvcnNTZWN0aW9uIiwic2V0Q29tcGV0aXRpb25EaXN0aW5ndWlzaFNlY3Rpb24iLCJzZXRUYXJnZXRDdXN0b21lcnNTZWN0aW9uIiwic2V0U3RhcnR1cENvc3RzU2VjdGlvbiIsInNldFJ1bm5pbmdDb3N0c1NlY3Rpb24iLCJzZXRGaW5hbmNpbmdTZWN0aW9uIiwic2V0QnVzaW5lc3NNb2RlbE92ZXJ2aWV3U2VjdGlvbiIsInNldEJ1c2luZXNzR3Jvd1NlY3Rpb24iLCJzZXRXaHlTdWNjZXNzU2VjdGlvbiIsImN1cnJlbnRVc2VyIiwidXNlQXV0aCIsInJvdXRlciIsInVzZVJvdXRlciIsImxvYWRpbmdIZWxwZXIiLCJzZXRMb2FkaW5nSGVscGVyIiwiZG9jdW1lbnRJZCIsInNldERvY3VtZW50SWQiLCJ1c2VyVWlkIiwiQ29va2llcyIsImdldCIsImRiIiwiY29sbGVjdGlvbiIsIndoZXJlIiwidGhlbiIsInF1ZXJ5U25hcHNob3QiLCJmb3JFYWNoIiwiZG9jMSIsImluaXRpYWxEYXRhIiwicHJvamVjdE5hbWUiLCJwcm9qZWN0RGVzY3JpcHRpb24iLCJwcm9qZWN0Q291bnRyeSIsInByb2plY3RGaWVsZCIsInByb2plY3RFbWFpbCIsInByb2plY3ROdW1iZXIiLCJpbWFnZU5hbWUiLCJpbWFnZUZpbGVVcmwiLCJkb2MiLCJvblNuYXBzaG90Iiwic2VydmVyVXBkYXRlIiwiZG9jcyIsIm1hcCIsImlkIiwibWFya2V0UHJvYmxlbVNlY3Rpb25EYXRhIiwibWFya2V0U29sdXRpb25TZWN0aW9uRGF0YSIsImZvdW5kZXJzU2VjdGlvbkRhdGEiLCJwcm9kdWN0T3ZlcnZpZXdTZWN0aW9uRGF0YSIsInByb2R1Y3RQcm9tb3Rpb25TZWN0aW9uRGF0YSIsInByb2R1Y3RCZW5lZml0c1NlY3Rpb25EYXRhIiwibWFya2V0T3ZlcnZpZXdTZWN0aW9uRGF0YSIsImNvbXBldGl0b3JzU2VjdGlvbkRhdGEiLCJjb21wZXRpdGlvbkRpc3Rpbmd1aXNoU2VjdGlvbkRhdGEiLCJ0YXJnZXRDdXN0b21lcnNTZWN0aW9uRGF0YSIsInN0YXJ0dXBDb3N0c1NlY3Rpb25EYXRhIiwicnVubmluZ0Nvc3RzU2VjdGlvbkRhdGEiLCJmaW5hbmNpbmdTZWN0aW9uRGF0YSIsImJ1c2luZXNzTW9kZWxPdmVydmlld1NlY3Rpb25EYXRhIiwiYnVzaW5lc3NHcm93U2VjdGlvbkRhdGEiLCJ3aHlTdWNjZXNzU2VjdGlvbkRhdGEiLCJvblByb2plY3RMZWF2ZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNldFRpbWVvdXQiLCJNeURvY3VtZW50IiwicHJvcHMiLCJ1c2VNZW1vIiwiYXNQZGYiLCJwZGYiLCJ1cGRhdGVDb250YWluZXIiLCJibG9iIiwidG9CbG9iIiwic2F2ZUFzIiwiZmlyZWJhc2UiLCJhcHBzIiwibGVuZ3RoIiwiaW5pdGlhbGl6ZUFwcCIsImFwaUtleSIsImF1dGhEb21haW4iLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsIm1lYXN1cmVtZW50SWQiLCJhdXRoIiwiZmlyZXN0b3JlIiwic3RvcmFnZSIsIkF1dGhDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJBdXRoUHJvdmlkZXIiLCJzZXRDdXJyZW50VXNlciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiaGFuZGxlVXNlciIsInVzZXIiLCJmb3JtYXRlZFVzZXIiLCJmb3JtYXRVc2VyIiwidWlkIiwic2V0IiwibWVyZ2UiLCJyZW1vdmUiLCJzaWduVXAiLCJlbWFpbCIsInBhc3N3b3JkIiwiY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkIiwicmVzcG9uc2UiLCJsb2dJbiIsInNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwibG9nT3V0Iiwic2lnbk91dCIsInVuc3Vic2NyaWJlIiwib25JZFRva2VuQ2hhbmdlZCIsInZhbHVlIiwiZ2V0U3RyaXBlUm9sZSIsImdldElkVG9rZW4iLCJkZWNvZGVkVG9rZW4iLCJnZXRJZFRva2VuUmVzdWx0IiwiY2xhaW1zIiwic3RyaXBlUm9sZSIsInRva2VuIiwicHJvdmlkZXIiLCJwcm92aWRlckRhdGEiLCJwcm92aWRlcklkIiwiZ2xvYmFsIiwiVkFMSURfTE9BRElOR19WQUxVRVMiLCJsb2FkZXJzIiwiVkFMSURfTEFZT1VUX1ZBTFVFUyIsImRldmljZVNpemVzIiwiaW1hZ2VTaXplcyIsImxvYWRlciIsInBhdGgiLCJkb21haW5zIiwicHJvY2VzcyIsImltYWdlQ29uZmlnRGVmYXVsdCIsImFsbFNpemVzIiwiY29uZmlnRGV2aWNlU2l6ZXMiLCJhIiwic2l6ZXMiLCJsYXlvdXQiLCJwZXJjZW50U2l6ZXMiLCJtIiwicGFyc2VJbnQiLCJzbWFsbGVzdFJhdGlvIiwiTWF0aCIsIndpZHRocyIsInMiLCJraW5kIiwidyIsInAiLCJzcmNTZXQiLCJnZXRXaWR0aHMiLCJsYXN0IiwiaSIsImxvYWQiLCJyb290IiwiVkFMSURfTE9BREVSUyIsImNvbmZpZ0xvYWRlciIsInVub3B0aW1pemVkIiwicHJpb3JpdHkiLCJhbGwiLCJyZXN0IiwidW5zaXplZCIsIkJvb2xlYW4iLCJKU09OIiwiaXNMYXp5Iiwicm9vdE1hcmdpbiIsImRpc2FibGVkIiwiaXNWaXNpYmxlIiwid2lkdGhJbnQiLCJnZXRJbnQiLCJoZWlnaHRJbnQiLCJxdWFsaXR5SW50IiwiaW1nU3R5bGUiLCJib3hTaXppbmciLCJib3JkZXIiLCJtYXJnaW4iLCJtaW5XaWR0aCIsIm1heFdpZHRoIiwibWluSGVpZ2h0IiwibWF4SGVpZ2h0IiwicXVvdGllbnQiLCJpc05hTiIsIndyYXBwZXJTdHlsZSIsIm92ZXJmbG93Iiwic2l6ZXJTdHlsZSIsInNpemVyU3ZnIiwiaW1nQXR0cmlidXRlcyIsImdlbmVyYXRlSW1nQXR0cnMiLCJxdWFsaXR5IiwicGFyYW1zIiwicGFyYW1zU3RyaW5nIiwibm9ybWFsaXplU3JjIiwibWlzc2luZ1ZhbHVlcyIsInBhcnNlZFNyYyIsImNvbmZpZ0RvbWFpbnMiLCJob3N0bmFtZSIsImVuY29kZVVSSUNvbXBvbmVudCIsInJlcXVlc3RJZGxlQ2FsbGJhY2siLCJzZWxmIiwic3RhcnQiLCJEYXRlIiwiY2IiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsImNhbmNlbElkbGVDYWxsYmFjayIsImNsZWFyVGltZW91dCIsImhhc0ludGVyc2VjdGlvbk9ic2VydmVyIiwiaXNEaXNhYmxlZCIsInVub2JzZXJ2ZSIsInNldFJlZiIsImVsIiwib2JzZXJ2ZSIsImlkbGVDYWxsYmFjayIsImNyZWF0ZU9ic2VydmVyIiwiZWxlbWVudHMiLCJvYnNlcnZlciIsIm9ic2VydmVycyIsIm9wdGlvbnMiLCJpbnN0YW5jZSIsImVudHJpZXMiLCJlbnRyeSIsImNhbGxiYWNrIiwiU3RhcnR1cFN1Y2Nlc3NQYWdlIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUN4RkEsOEQ7Ozs7Ozs7Ozs7O0FDQUEsb0U7Ozs7Ozs7Ozs7O0FDQUEseUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsWUFBWSxHQUFHLENBQUM7QUFDcEJDLGNBRG9CO0FBRXBCQyxhQUZvQjtBQUdwQkMsY0FIb0I7QUFJcEJDLFVBSm9CO0FBS3BCQyxRQUxvQjtBQU1wQkMsT0FOb0I7QUFPcEJDLFNBUG9CO0FBUXBCQyxjQVJvQjtBQVNwQkMsaUJBVG9CO0FBVXBCQyxpQkFWb0I7QUFXcEJDLFlB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QTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsMEI7Ozs7Ozs7Ozs7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0M7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhLHVCQUF1QjtBQUNwQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLCtDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7O0FBRUEsTUFBTU0sa0JBQWtCLEdBQUcsTUFBTTtBQUMvQixzQkFBTyxxRUFBQyxvRkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFDRCxDQUZEOztBQUllQSxpRkFBZixFOzs7Ozs7Ozs7OztBQ1BBLGdEOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGdEOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL2Rhc2hib2FyZC9wcm9qZWN0cy9bcHJvamVjdF0vc3RhcnR1cC1pZGVhL3N1Y2Nlc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2Rhc2hib2FyZC9wcm9qZWN0cy9bcHJvamVjdF0vc3RhcnR1cC1pZGVhL3N1Y2Nlc3MuanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2hlYWQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvaW1hZ2UtY29uZmlnLmpzXCIpOyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBnc2FwLCB7IFBvd2VyNCB9IGZyb20gJ2dzYXAnO1xyXG5pbXBvcnQgVGlwcHkgZnJvbSAnQHRpcHB5anMvcmVhY3QnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcblxyXG5jb25zdCBUaXBweU1vbnN0ZXIgPSAoe1xyXG4gIGNvbnRlbnRDbGFzcyxcclxuICBjb250ZW50VGV4dCxcclxuICBjb250ZW50VGV4dDEsXHJcbiAgc3RhcnR1cHMsXHJcbiAgbWFya2V0LFxyXG4gIG1vZGVsLFxyXG4gIHN1Y2Nlc3MsXHJcbiAgdGlwcHlNb25zdGVyLFxyXG4gIHNldFRpcHB5TW9uc3RlcixcclxuICBzZXRDdXJyZW50VGlwcHksXHJcbiAgZW1wdHlJbnB1dCxcclxuICBpbml0aWFsTW9kYWwsXHJcbiAgdmlzaW9uLFxyXG4gIHByb2R1Y3QsXHJcbiAgZmluYW5jZXMsXHJcbiAgd2VsY29tZVxyXG59KSA9PiB7XHJcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGNvbnRlbnRSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgdGlwcHlSZWYgPSB1c2VSZWYoKTtcclxuXHJcbiAgLy8gY29uc3QgW2VtcHR5SW5wdXQsIHNldEVtcHR5SW5wdXRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBzaG93ID0gKCkgPT4ge1xyXG4gICAgZ3NhcC5mcm9tVG8oXHJcbiAgICAgIHRpcHB5UmVmLmN1cnJlbnQsXHJcbiAgICAgIHsgYXV0b0FscGhhOiAwLCBzY2FsZTogMCB9LFxyXG4gICAgICB7IGF1dG9BbHBoYTogMSwgc2NhbGU6IDEsIGR1cmF0aW9uOiAxLCB0cmFuc2Zvcm1PcmlnaW46ICdib3R0b20gcmlnaHQnLCBlYXNlOiBQb3dlcjQuZWFzZU91dCB9XHJcbiAgICApO1xyXG4gICAgc2V0VmlzaWJsZSh0cnVlKTtcclxuICAgIGVtcHR5SW5wdXQgJiYgc2V0Q3VycmVudFRpcHB5KHRydWUpOyAvLyBjdXJyZW50IHRpcHB5IGplc3QgY3rEmcWbY2nEhSBvYnPFgnVnaSBwcm9ibGVtdSwga2llZHkgbWFteSBvdHdhcnRlZ28gdG9vbHRpcGEgbm9ybWFsbmVnbyBpIHdjaXNrYW15LCDFvGVieSB3ecWbd2lldGxpxIcgY3plcndvbmVnb1xyXG4gIH07XHJcbiAgY29uc3QgaGlkZSA9IGFzeW5jICgpID0+IHtcclxuICAgIGF3YWl0IGdzYXAudG8odGlwcHlSZWYuY3VycmVudCwge1xyXG4gICAgICBhdXRvQWxwaGE6IDAsXHJcbiAgICAgIHNjYWxlOiAwLFxyXG4gICAgICBkdXJhdGlvbjogMSxcclxuICAgICAgdHJhbnNmb3JtT3JpZ2luOiAnYm90dG9tIHJpZ2h0JyxcclxuICAgICAgZWFzZTogUG93ZXI0LmVhc2VJbixcclxuICAgIH0pO1xyXG4gICAgZW1wdHlJbnB1dCAmJiBzZXRUaXBweU1vbnN0ZXIoZmFsc2UpO1xyXG4gICAgc2V0VmlzaWJsZShmYWxzZSk7XHJcbiAgICBlbXB0eUlucHV0ICYmIHNldEN1cnJlbnRUaXBweShmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25JbWFnZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgaWYgKCF0aXBweU1vbnN0ZXIpIHtcclxuICAgICAgdmlzaWJsZSA/IGhpZGUoKSA6IHNob3coKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gR1NBUFxyXG4gICAgZ3NhcC5mcm9tVG8oXHJcbiAgICAgIGNvbnRlbnRSZWYuY3VycmVudCxcclxuICAgICAgeyBhdXRvQWxwaGE6IDAgfSxcclxuICAgICAgeyBhdXRvQWxwaGE6IDEsIGR1cmF0aW9uOiAyLCB0cmFuc2Zvcm1PcmlnaW46ICdib3R0b20gcmlnaHQnLCBlYXNlOiBQb3dlcjQuZWFzZU91dCB9XHJcbiAgICApO1xyXG4gICAgLy8gVElQUFlcclxuICAgIHNldFZpc2libGUodHJ1ZSk7XHJcbiAgICBlbXB0eUlucHV0ICYmIHNldEN1cnJlbnRUaXBweSh0cnVlKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnNvbGUubG9nKCd0bSAtICcsIHRpcHB5TW9uc3Rlcik7XHJcbiAgY29uc29sZS5sb2coJ3Zpc2libGUgLSAnLCB2aXNpYmxlKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxUaXBweVxyXG4gICAgICAvLyB0cmlnZ2VyPXt0aXBweU1vbnN0ZXJ9XHJcbiAgICAgIHpJbmRleD17dmlzaWJsZSB8fCB0aXBweU1vbnN0ZXIgPyAyMiA6IDB9XHJcbiAgICAgIG9uU2hvdz17c2hvd31cclxuICAgICAgYW5pbWF0aW9uPSdmYWRlJ1xyXG4gICAgICBkdXJhdGlvbj17NTAwfVxyXG4gICAgICB0b3VjaD17dHJ1ZX1cclxuICAgICAgdmlzaWJsZT17dmlzaWJsZSB8fCB0aXBweU1vbnN0ZXJ9XHJcbiAgICAgIG9uQ2xpY2tPdXRzaWRlPXtoaWRlfVxyXG4gICAgICBvZmZzZXQ9e21hcmtldCB8fCBtb2RlbCB8fCBzdWNjZXNzIHx8IHRpcHB5TW9uc3RlciA/IFstMjY1LCAtNjVdIDogWy0yMjAsIC02NV19XHJcbiAgICAgIC8vIHBsYWNlbWVudD0nbGVmdC1lbmQnXHJcbiAgICAgIGludGVyYWN0aXZlPXt0cnVlfVxyXG4gICAgICBjb250ZW50PXtcclxuICAgICAgICB0aXBweU1vbnN0ZXIgPyAoXHJcbiAgICAgICAgICA8ZGl2IHJlZj17dGlwcHlSZWZ9IGNsYXNzTmFtZT0naC0xMiB3LTk2IHNoYWRvdy1sZyByb3VuZGVkLTJ4bCBiZy1yZWQgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgZm9jdXM6b3V0bGluZS1ub25lJz5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LXByaW1hcnlkYXJrIHB5LTQgcHgtMiB0ZXh0LXNtIHRleHQtY2VudGVyIHRleHQtd2hpdGUgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXInPlxyXG4gICAgICAgICAgICBPb3BzLCB5b3UgaGF2ZSB0byBwcm92aWRlIGFsbCB0aGUgaW5mb3JtYXRpb25cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIHNyYz0nL2Vtb2ppcy9jcnlpbmcuc3ZnJ1xyXG4gICAgICAgICAgICAgIGhlaWdodD17MjV9XHJcbiAgICAgICAgICAgICAgd2lkdGg9ezI1fVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0naW5saW5lLWJsb2NrIHJlbGF0aXZlJ1xyXG4gICAgICAgICAgLz4uXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGZsZXgtd3JhcCBnYXAtMiBtdC0yJz48L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8ZGl2IHJlZj17dGlwcHlSZWZ9IGNsYXNzTmFtZT17YGZvY3VzOm91dGxpbmUtbm9uZSAke2NvbnRlbnRDbGFzc31gfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RleHQtcHJpbWFyeWRhcmsgcC00IHRleHQtc20gdGV4dC1jZW50ZXIgdGV4dC13aGl0ZSc+XHJcbiAgICAgICAgICAgIHtjb250ZW50VGV4dH1cclxuICAgICAgICAgICAge3N0YXJ0dXBzICYmICggPD48aW1nIHNyYz0nL2Vtb2ppcy9jb2NvdW50LnN2ZycgaGVpZ2h0PXsyMn0gd2lkdGg9ezIyfSBjbGFzc05hbWU9J2lubGluZS1ibG9jaycgLz48cCBjbGFzc05hbWU9J2lubGluZS1ibG9jayc+LjwvcD48Lz4gKX1cclxuICAgICAgICAgICAge2luaXRpYWxNb2RhbCAmJiAoIDw+PGltZyBzcmM9Jy9lbW9qaXMvaGFtbWVyLnN2ZycgaGVpZ2h0PXsyMn0gd2lkdGg9ezIyfSBjbGFzc05hbWU9J2lubGluZS1ibG9jaycgLz48cCBjbGFzc05hbWU9J2lubGluZS1ibG9jayc+LjwvcD48Lz4gKX1cclxuICAgICAgICAgICAge3Zpc2lvbiAmJiAoIDw+PGltZyBzcmM9Jy9lbW9qaXMvZGVzZXJ0LnN2ZycgaGVpZ2h0PXsyMn0gd2lkdGg9ezIyfSBjbGFzc05hbWU9J2lubGluZS1ibG9jayByZWxhdGl2ZSBib3R0b20tMC41JyAvPjxwIGNsYXNzTmFtZT0naW5saW5lLWJsb2NrJz4uPC9wPjwvPiApfVxyXG4gICAgICAgICAgICB7cHJvZHVjdCAmJiAoIDw+PGltZyBzcmM9Jy9lbW9qaXMvb3guc3ZnJyBoZWlnaHQ9ezIyfSB3aWR0aD17MjJ9IGNsYXNzTmFtZT0naW5saW5lLWJsb2NrIHJlbGF0aXZlIGJvdHRvbS0wLjUnIC8+PHAgY2xhc3NOYW1lPSdpbmxpbmUtYmxvY2snPi48L3A+PC8+ICl9XHJcbiAgICAgICAgICAgIHttYXJrZXQgJiYgKCA8PjxpbWcgc3JjPScvZW1vamlzL3doYWxlLnN2ZycgaGVpZ2h0PXsyMn0gd2lkdGg9ezIyfSBjbGFzc05hbWU9J2lubGluZS1ibG9jaycgLz48cCBjbGFzc05hbWU9J2lubGluZS1ibG9jayc+LjwvcD48Lz4gKX1cclxuICAgICAgICAgICAge2ZpbmFuY2VzICYmICggPD48aW1nIHNyYz0nL2Vtb2ppcy91bmljb3JuLnN2ZycgaGVpZ2h0PXsyMn0gd2lkdGg9ezIyfSBjbGFzc05hbWU9J2lubGluZS1ibG9jayByZWxhdGl2ZSBib3R0b20tMC41JyAvPjxwIGNsYXNzTmFtZT0naW5saW5lLWJsb2NrJz4uPC9wPjwvPiApfVxyXG4gICAgICAgICAgICB7bW9kZWwgJiYgKCA8PjxpbWcgc3JjPScvZW1vamlzL3BpcmF0LnN2ZycgaGVpZ2h0PXsyMn0gd2lkdGg9ezIyfSBjbGFzc05hbWU9J2lubGluZS1ibG9jaycgLz48cCBjbGFzc05hbWU9J2lubGluZS1ibG9jayc+LjwvcD48Lz4gKX1cclxuICAgICAgICAgICAge3N1Y2Nlc3MgJiYgKCA8PjxpbWcgc3JjPScvZW1vamlzL3N0YXIuc3ZnJyBoZWlnaHQ9ezIyfSB3aWR0aD17MjJ9IGNsYXNzTmFtZT0naW5saW5lLWJsb2NrJyAvPjxwIGNsYXNzTmFtZT0naW5saW5lLWJsb2NrJz4hPC9wPjwvPiApfVxyXG4gICAgICAgICAgICB7d2VsY29tZSAmJiAoIDw+PGltZyBzcmM9Jy9naWZzL2hlbGxvLWhhbmQuZ2lmJyBoZWlnaHQ9ezIyfSB3aWR0aD17MjJ9IGNsYXNzTmFtZT0naW5saW5lLWJsb2NrJyAvPjxwIGNsYXNzTmFtZT0naW5saW5lLWJsb2NrJz4uPC9wPjwvPiApfVxyXG4gICAgICAgICAgICB7LyogPGltZyBzcmM9Jy9lbW9qaXMvY29jb3VudC5zdmcnIGhlaWdodD17MjJ9IHdpZHRoPXsyMn0gY2xhc3NOYW1lPSdpbmxpbmUtYmxvY2snIC8+LiAqL31cclxuXHJcbiAgICAgICAgICAgIHsvKiBURVhUIDEgKi99XHJcbiAgICAgICAgICAgIHtjb250ZW50VGV4dDEgJiYgY29udGVudFRleHQxfVxyXG4gICAgICAgICAgICB7c3RhcnR1cHMgJiYgKCA8PjxpbWcgc3JjPScvZW1vamlzL2JhbGxvb24uc3ZnJyBoZWlnaHQ9ezIyfSB3aWR0aD17MjJ9IGNsYXNzTmFtZT0naW5saW5lLWJsb2NrJyAvPjxwIGNsYXNzTmFtZT0naW5saW5lLWJsb2NrJz4uPC9wPjwvPiApfVxyXG4gICAgICAgICAgICB7dmlzaW9uICYmICggPD48aW1nIHNyYz0nL2Vtb2ppcy9jYW1lbC5zdmcnIGhlaWdodD17MjJ9IHdpZHRoPXsyMn0gY2xhc3NOYW1lPSdpbmxpbmUtYmxvY2snIC8+PHAgY2xhc3NOYW1lPSdpbmxpbmUtYmxvY2snPi48L3A+PC8+ICl9XHJcbiAgICAgICAgICAgIHtwcm9kdWN0ICYmICggPD48aW1nIHNyYz0nL2Vtb2ppcy9tYXAuc3ZnJyBoZWlnaHQ9ezIyfSB3aWR0aD17MjJ9IGNsYXNzTmFtZT0naW5saW5lLWJsb2NrJyAvPjxwIGNsYXNzTmFtZT0naW5saW5lLWJsb2NrJz4uPC9wPjwvPiApfVxyXG4gICAgICAgICAgICB7bWFya2V0ICYmICggPD48aW1nIHNyYz0nL2Vtb2ppcy9pc2xhbmQuc3ZnJyBoZWlnaHQ9ezIyfSB3aWR0aD17MjJ9IGNsYXNzTmFtZT0naW5saW5lLWJsb2NrJyAvPjxwIGNsYXNzTmFtZT0naW5saW5lLWJsb2NrJz4uPC9wPjwvPiApfVxyXG4gICAgICAgICAgICB7ZmluYW5jZXMgJiYgKCA8PjxpbWcgc3JjPScvZW1vamlzL2NvbnN0cnVjdGlvbi5zdmcnIGhlaWdodD17MjJ9IHdpZHRoPXsyMn0gY2xhc3NOYW1lPSdpbmxpbmUtYmxvY2snIC8+PHAgY2xhc3NOYW1lPSdpbmxpbmUtYmxvY2snPi48L3A+PC8+ICl9XHJcbiAgICAgICAgICAgIHttb2RlbCAmJiAoIDw+PGltZyBzcmM9Jy9lbW9qaXMvcG9wcGVyLnN2ZycgaGVpZ2h0PXsyMn0gd2lkdGg9ezIyfSBjbGFzc05hbWU9J2lubGluZS1ibG9jayByZWxhdGl2ZSBib3R0b20tMC41JyAvPjxwIGNsYXNzTmFtZT0naW5saW5lLWJsb2NrJz4hPC9wPjwvPiApfVxyXG4gICAgICAgICAgICB7d2VsY29tZSAmJiAoIDw+PGltZyBzcmM9Jy9naWZzL3JvY2tldC5naWYnIGhlaWdodD17MjJ9IHdpZHRoPXsyMn0gY2xhc3NOYW1lPSdpbmxpbmUtYmxvY2snIC8+PHAgY2xhc3NOYW1lPSdpbmxpbmUtYmxvY2snPiE8L3A+PC8+ICl9XHJcbiAgICAgICAgICAgIHsvKiA8aW1nIHNyYz0nL2Vtb2ppcy9iYWxsb29uLnN2ZycgaGVpZ2h0PXsyMn0gd2lkdGg9ezIyfSBjbGFzc05hbWU9J2lubGluZS1ibG9jaycgLz4uICovfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGZsZXgtd3JhcCBnYXAtMiBtdC0yJz48L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgICAgfVxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZml4ZWQgZmxleCBmbGV4LXdyYXAgbS0yIGJvdHRvbS00IHJpZ2h0LTQgei01MCc+XHJcbiAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICBzcmM9Jy9tb25zdGVycy9tb25zdGVyLXR3by5zdmcnXHJcbiAgICAgICAgICBoZWlnaHQ9ezY2fVxyXG4gICAgICAgICAgd2lkdGg9ezYwfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPSdjdXJzb3ItcG9pbnRlciB6LTUwJ1xyXG4gICAgICAgICAgb25DbGljaz17b25JbWFnZUNsaWNrfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9UaXBweT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGlwcHlNb25zdGVyO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgQW5pbWF0ZWRCYWNrZ3JvdW5kID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPSdhcmVhJz5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPHVsIGNsYXNzTmFtZT0nY2lyY2xlcyc+XHJcbiAgICAgIDxsaT48L2xpPlxyXG4gICAgICA8bGk+PC9saT5cclxuICAgICAgPGxpPjwvbGk+XHJcbiAgICAgIDxsaT48L2xpPlxyXG4gICAgICA8bGk+PC9saT5cclxuICAgICAgPGxpPjwvbGk+XHJcbiAgICAgIDxsaT48L2xpPlxyXG4gICAgICA8bGk+PC9saT5cclxuICAgICAgPGxpPjwvbGk+XHJcbiAgICAgIDxsaT48L2xpPlxyXG4gICAgPC91bD5cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFuaW1hdGVkQmFja2dyb3VuZDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBpc01vYmlsZSB9IGZyb20gJ3JlYWN0LWRldmljZS1kZXRlY3QnO1xyXG5pbXBvcnQgZ3NhcCwgeyBMaW5lYXIgfSBmcm9tICdnc2FwJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5jb25zdCBFeGl0Q29tcG9uZW50ID0gKCkgPT4ge1xyXG4gIGNvbnN0IGV4aXRJbWFnZSA9IHVzZVJlZigpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIWlzTW9iaWxlKSB7XHJcbiAgICAgIGV4aXRJbWFnZS5jdXJyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoKSA9PiB7XHJcbiAgICAgICAgZ3NhcC50byhleGl0SW1hZ2UuY3VycmVudCwgeyByb3RhdGlvbjogJzE4MF9jdycsIGR1cmF0aW9uOiAwLjUsIGVhc2U6IExpbmVhci5lYXNlSW4gfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBleGl0SW1hZ2UuY3VycmVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xyXG4gICAgICAgIGdzYXAudG8oZXhpdEltYWdlLmN1cnJlbnQsIHsgcm90YXRpb246ICcwX2N3JywgZHVyYXRpb246IDAuNSwgZWFzZTogTGluZWFyLmVhc2VJbiB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8aW1nXHJcbiAgICAgIHJlZj17ZXhpdEltYWdlfVxyXG4gICAgICBvbkNsaWNrPXsoKSA9PiBSb3V0ZXIucHVzaChgL2Rhc2hib2FyZC9wcm9qZWN0cy8ke1JvdXRlci5xdWVyeS5wcm9qZWN0fWApfVxyXG4gICAgICBzcmM9XCIvYnVzaW5lc3MtbW9kZWwvYmFjazQuc3ZnXCJcclxuICAgICAgaGVpZ2h0PXsyOH1cclxuICAgICAgd2lkdGg9ezI4fVxyXG4gICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LTYgdG9wLTMgY3Vyc29yLXBvaW50ZXIgei01MFwiXHJcbiAgICAvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFeGl0Q29tcG9uZW50O1xyXG4iLCJpbXBvcnQgeyBzYXZlQXMgfSBmcm9tICdmaWxlLXNhdmVyJztcclxuXHJcbmltcG9ydCB7IEZvbnQsIHBkZiwgUGFnZSwgVGV4dCwgVmlldywgSW1hZ2UsIERvY3VtZW50LCBTdHlsZVNoZWV0LCBQREZWaWV3ZXIsIFBERkRvd25sb2FkTGluayB9IGZyb20gJ0ByZWFjdC1wZGYvcmVuZGVyZXInO1xyXG5cclxuLy8gY29uc3QgaW1hZ2UgPSBhdmF0YXJFeGlzdHMgIT0gJ2JsYW5rJyA/IGF2YXRhckV4aXN0cyA6IGltYWdlTmFtZUV4aXN0cztcclxuLy8gY29uc29sZS5sb2coaW1hZ2UpO1xyXG5cclxuY29uc3QgTXlEb2N1bWVudDEgPSAoeyBkYXRhIH0pID0+IHtcclxuICBjb25zb2xlLmxvZygnZGF0YSAtLT4gJywgZGF0YSk7XHJcbiAgRm9udC5yZWdpc3Rlcih7IHNyYzogJy9mb250cy9wb3BwaW5zLnR0ZicsIGZhbWlseTogJ1BvcHBpbnMnIH0pO1xyXG4gIEZvbnQucmVnaXN0ZXIoeyBzcmM6ICcvZm9udHMvY29tZm9ydGFhLnR0ZicsIGZhbWlseTogJ0NvbWZvcnRhYScgfSk7XHJcblxyXG4gIGNvbnN0IHN0eWxlcyA9IFN0eWxlU2hlZXQuY3JlYXRlKHtcclxuICAgIC8vIFNUQVJUIEhPTUVQQUdFIFNFQ1RJT05cclxuICAgIGhvbWVQYWdlOiB7XHJcbiAgICAgIGZvbnRGYW1pbHk6ICdDb21mb3J0YWEnLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZjhmOWZiJyxcclxuICAgICAgZmxleERpcmVjdGlvbjogJ3JvdycsXHJcbiAgICB9LFxyXG4gICAgaG9tZVBhZ2VUaXRsZVNlY3Rpb246IHtcclxuICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgbWFyZ2luVG9wOiA0MCxcclxuICAgIH0sXHJcbiAgICBob21lUGFnZVRpdGxlOiB7XHJcbiAgICAgIGZvbnRTaXplOiAyNixcclxuICAgICAgY29sb3I6ICcjMGExMjMwJyxcclxuICAgIH0sXHJcbiAgICBob21lUGFnZURlc2M6IHtcclxuICAgICAgZm9udFNpemU6IDE2LFxyXG4gICAgICBjb2xvcjogJyNhMGFlYzAnLFxyXG4gICAgfSxcclxuICAgIGltYWdlOiB7XHJcbiAgICAgIGhlaWdodDogJzIwMHB4JyxcclxuICAgICAgd2lkdGg6ICcyMDBweCcsXHJcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICAgIG1hcmdpbkxlZnQ6ICdhdXRvJyxcclxuICAgICAgbWFyZ2luUmlnaHQ6ICdhdXRvJyxcclxuICAgICAgbWFyZ2luVG9wOiAyMixcclxuICAgIH0sXHJcbiAgICBsZWZ0RGVzY0Jsb2NrOiB7XHJcbiAgICAgIHdpZHRoOiAnNzUlJyxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzZDNjNGRicsXHJcbiAgICAgIHRleHRBbGlnbjogJ2xlZnQnLFxyXG4gICAgICBtYXJnaW5Ub3A6ICczMnB4JyxcclxuICAgICAgYm9yZGVyVG9wUmlnaHRSYWRpdXM6IDUwLFxyXG4gICAgfSxcclxuICAgIGxlZnREZXNjQmxvY2tUZXh0OiB7XHJcbiAgICAgIGZvbnRTaXplOiAxNCxcclxuICAgICAgcGFkZGluZzogMzIsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IDEuNCxcclxuICAgICAgY29sb3I6ICcjZjhmOWZiJyxcclxuICAgIH0sXHJcbiAgICByaWdodEJhcjoge1xyXG4gICAgICBoZWlnaHQ6ICcxMDB2aCcsXHJcbiAgICAgIHdpZHRoOiAnMTVweCcsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyM2QzYzRkYnLFxyXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgcmlnaHQ6ICc1JScsXHJcbiAgICB9LFxyXG4gICAgcmlnaHRCYXJDb250YWN0OiB7XHJcbiAgICAgIGNvbG9yOiAnI2Y4ZjlmYicsXHJcbiAgICAgIGZvbnRTaXplOiAxNCxcclxuICAgICAgd2lkdGg6ICc1MCUnLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjNkM2M0ZGJyxcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgIGJvdHRvbTogJzEwJScsXHJcbiAgICAgIHJpZ2h0OiAnNSUnLFxyXG4gICAgICBwYWRkaW5nOiAzMixcclxuICAgICAgYm9yZGVyVG9wTGVmdFJhZGl1czogNTAsXHJcbiAgICB9LFxyXG4gICAgY291bnRyeVRleHQ6IHtcclxuICAgICAgbWFyZ2luVG9wOiA2LFxyXG4gICAgfSxcclxuICAgIGVtYWlsVGV4dDoge1xyXG4gICAgICBtYXJnaW5Ub3A6IDYsXHJcbiAgICB9LFxyXG4gICAgcGhvbmVOdW1iZXJUZXh0OiB7XHJcbiAgICAgIG1hcmdpblRvcDogNixcclxuICAgIH0sXHJcbiAgICBncmF5QmFyT25lOiB7XHJcbiAgICAgIGhlaWdodDogJzI1JScsXHJcbiAgICAgIHdpZHRoOiAnMnB4JyxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2EwYWVjMCcsXHJcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICBib3R0b206ICczJScsXHJcbiAgICAgIGxlZnQ6ICcxMCUnLFxyXG4gICAgfSxcclxuICAgIGdyYXlCYXJUd286IHtcclxuICAgICAgaGVpZ2h0OiAnMnB4JyxcclxuICAgICAgd2lkdGg6ICcyMCUnLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjYTBhZWMwJyxcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgIGJvdHRvbTogJzUlJyxcclxuICAgICAgbGVmdDogJzUlJyxcclxuICAgIH0sXHJcbiAgICAvLyBFTkQgU1RBUlQgSE9NRVBBR0UgU0VDVElPTlxyXG4gICAgLy8gU1RBUlQgT1ZFUlZJRVcgU0VDVElPTlxyXG4gICAgb3ZlcnZpZXdQYWdlOiB7XHJcbiAgICAgIGZvbnRGYW1pbHk6ICdDb21mb3J0YWEnLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZjhmOWZiJyxcclxuICAgICAgcGFkZGluZ1RvcDogMzUsXHJcbiAgICAgIHBhZGRpbmdCb3R0b206IDM1LFxyXG4gICAgfSxcclxuICAgIG92ZXJ2aWV3SGVhZGluZzoge1xyXG4gICAgICBmb250U2l6ZTogMjIsXHJcbiAgICAgIGNvbG9yOiAnIzBhMTIzMCcsXHJcbiAgICAgIG1hcmdpbkxlZnQ6IDI4LFxyXG4gICAgfSxcclxuICAgIG92ZXJ2aWV3U3VidGl0bGU6IHtcclxuICAgICAgZm9udFNpemU6IDE0LFxyXG4gICAgICBjb2xvcjogJyNhMGFlYzAnLFxyXG4gICAgfSxcclxuICAgIG92ZXJ2aWV3SW1hZ2U6IHtcclxuICAgICAgaGVpZ2h0OiAnMjBweCcsXHJcbiAgICAgIHdpZHRoOiAnMjBweCcsXHJcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICB0b3A6IDM3LFxyXG4gICAgICBsZWZ0OiAzMCxcclxuICAgIH0sXHJcbiAgICBvdmVydmlld1NlY3Rpb246IHtcclxuICAgICAgLy8gcGFkZGluZzogJzUlJyxcclxuICAgICAgLy8gcGFkZGluZ1RvcDogJzUlJyxcclxuICAgICAgcGFkZGluZ0JvdHRvbTogJzUlJyxcclxuICAgICAgcGFkZGluZ0xlZnQ6ICc1JScsXHJcbiAgICAgIHBhZGRpbmdSaWdodDogJzUlJyxcclxuICAgIH0sXHJcbiAgICBzZWN0aW9uQ29udGFpbmVyT25lOiB7XHJcbiAgICAgIG1hcmdpblRvcDogMzAsXHJcbiAgICB9LFxyXG4gICAgc2VjdGlvbkhlYWRpbmdPbmU6IHtcclxuICAgICAgY29sb3I6ICcjMGExMjMwJyxcclxuICAgICAgZm9udFNpemU6IDE2LFxyXG4gICAgfSxcclxuICAgIHNlY3Rpb25UZXh0OiB7XHJcbiAgICAgIGNvbG9yOiAnIzBhMTIzMCcsXHJcbiAgICAgIGZvbnRTaXplOiAxMixcclxuICAgICAgcGFkZGluZ1RvcDogOCxcclxuICAgICAgcGFkZGluZ1JpZ2h0OiA1MCxcclxuICAgIH0sXHJcbiAgICBzZWN0aW9uQ29udGFpbmVyVHdvOiB7XHJcbiAgICAgIHBhZGRpbmdUb3A6IDMwLFxyXG4gICAgfSxcclxuICAgIHNlY3Rpb25IZWFkaW5nVHdvOiB7XHJcbiAgICAgIGNvbG9yOiAnIzBhMTIzMCcsXHJcbiAgICAgIGZvbnRTaXplOiAxNixcclxuICAgIH0sXHJcbiAgICBzZWN0aW9uQ29udGFpbmVyVGhyZWU6IHtcclxuICAgICAgcGFkZGluZ1RvcDogMzYsXHJcbiAgICAgIHBhZGRpbmdCb3R0b206IDI2LFxyXG4gICAgfSxcclxuICAgIHNlY3Rpb25IZWFkaW5nVGhyZWU6IHtcclxuICAgICAgY29sb3I6ICcjMGExMjMwJyxcclxuICAgICAgZm9udFNpemU6IDE2LFxyXG4gICAgfSxcclxuICAgIC8vIEVORCBPVkVSVklFVyBTRUNUSU9OXHJcbiAgICAvLyBTVEFSVCBUQUJMRSBPRiBDT05URU5UUyBTRUNUSU9OXHJcbiAgICBjb250ZW50c1BhZ2U6IHtcclxuICAgICAgZm9udEZhbWlseTogJ0NvbWZvcnRhYScsXHJcbiAgICB9LFxyXG4gICAgY29udGVudHNMZWZ0QmFyOiB7XHJcbiAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgICB3aWR0aDogJzQwJScsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyM2QzYzRkYnLFxyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgYWxpZ25JdGVtczogJ2Jhc2VsaW5lJyxcclxuICAgICAgY29sb3I6ICcjZjhmOWZiJyxcclxuICAgICAgcGFkZGluZ0xlZnQ6IDM1LFxyXG4gICAgICBmb250U2l6ZTogMjAsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IDQsXHJcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgfSxcclxuICAgIGNvbnRlbnRzQmFyT25lOiB7XHJcbiAgICAgIHdpZHRoOiAyMDAsXHJcbiAgICAgIGhlaWdodDogMixcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2EwYWVjMCcsXHJcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICB0b3A6ICczNyUnLFxyXG4gICAgICBsZWZ0OiAnMTAwJScsXHJcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScsXHJcbiAgICB9LFxyXG4gICAgY29udGVudHNCYXJUd286IHtcclxuICAgICAgd2lkdGg6IDIwMCxcclxuICAgICAgaGVpZ2h0OiAyLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjYTBhZWMwJyxcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgIHRvcDogJzQ2LjUlJyxcclxuICAgICAgbGVmdDogJzEwMCUnLFxyXG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknLFxyXG4gICAgfSxcclxuICAgIGNvbnRlbnRzQmFyVGhyZWU6IHtcclxuICAgICAgd2lkdGg6IDIwMCxcclxuICAgICAgaGVpZ2h0OiAyLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjYTBhZWMwJyxcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgIHRvcDogJzU2JScsXHJcbiAgICAgIGxlZnQ6ICcxMDAlJyxcclxuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpJyxcclxuICAgIH0sXHJcbiAgICBjb250ZW50c0JhckZvdXI6IHtcclxuICAgICAgd2lkdGg6IDIwMCxcclxuICAgICAgaGVpZ2h0OiAyLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjYTBhZWMwJyxcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgIHRvcDogJzY1LjUlJyxcclxuICAgICAgbGVmdDogJzEwMCUnLFxyXG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknLFxyXG4gICAgfSxcclxuICAgIGNvbnRlbnRzQmFyRml2ZToge1xyXG4gICAgICB3aWR0aDogMjAwLFxyXG4gICAgICBoZWlnaHQ6IDIsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNhMGFlYzAnLFxyXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgdG9wOiAnNzQuNzUlJyxcclxuICAgICAgbGVmdDogJzEwMCUnLFxyXG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknLFxyXG4gICAgfSxcclxuICAgIGNvbnRlbnRzUmlnaHRCYXI6IHtcclxuICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgIHdpZHRoOiAnNjAlJyxcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgIHJpZ2h0OiAnMCcsXHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgIGZvbnRTaXplOiAxMixcclxuICAgICAgY29sb3I6ICcjMGExMjMwJyxcclxuICAgICAgLy8gcGFkZGluZ0hvcml6b250YWw6IDY0LFxyXG4gICAgICBwYWRkaW5nUmlnaHQ6IDgwLFxyXG4gICAgICBwYWRkaW5nTGVmdDogMzIsXHJcbiAgICB9LFxyXG4gICAgY29udGVudHNSaWdodFRleHRPbmU6IHtcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgIHRvcDogJzI2Ljc1JScsXHJcbiAgICB9LFxyXG4gICAgY29udGVudHNSaWdodFRleHRUd286IHtcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgIHRvcDogJzM2JScsXHJcbiAgICB9LFxyXG4gICAgY29udGVudHNSaWdodFRleHRUaHJlZToge1xyXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgdG9wOiAnNDUuNSUnLFxyXG4gICAgfSxcclxuICAgIGNvbnRlbnRzUmlnaHRUZXh0Rm91cjoge1xyXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgdG9wOiAnNTUlJyxcclxuICAgIH0sXHJcbiAgICBjb250ZW50c1JpZ2h0VGV4dEZpdmU6IHtcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgIHRvcDogJzY0LjI1JScsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuICAvLyAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgLy8gICAgIGlkZWFOYW1lLFxyXG4gIC8vICAgICBpZGVhRGVzYyxcclxuICAvLyAgICAgaWRlYUNvdW50cnksXHJcbiAgLy8gICAgIHN0YXJ0dXBGaWVsZCxcclxuICAvLyAgICAgc3RhcnR1cEVtYWlsLFxyXG4gIC8vICAgICBzdGFydHVwUGhvbmUsXHJcbiAgLy8gICAgIGltYWdlTmFtZUV4aXN0cyxcclxuICAvLyAgICAgbWFya2V0UHJvYmxlbVNlY3Rpb24sXHJcbiAgLy8gICAgIG1hcmtldFNvbHV0aW9uU2VjdGlvbixcclxuICAvLyAgICAgZm91bmRlcnNTZWN0aW9uLFxyXG4gIC8vICAgICBwcm9kdWN0T3ZlcnZpZXdTZWN0aW9uLFxyXG4gIC8vICAgICBwcm9kdWN0UHJvbW90aW9uU2VjdGlvbixcclxuICAvLyAgICAgcHJvZHVjdEJlbmVmaXRzU2VjdGlvbixcclxuICAvLyAgICAgbWFya2V0T3ZlcnZpZXdTZWN0aW9uLFxyXG4gIC8vICAgICBjb21wZXRpdG9yc1NlY3Rpb24sXHJcbiAgLy8gICAgIHRhcmdldEN1c3RvbWVyc1NlY3Rpb24sXHJcbiAgLy8gICAgIGNvbXBldGl0aW9uRGlzdGluZ3Vpc2hTZWN0aW9uLFxyXG4gIC8vICAgICBzdGFydHVwQ29zdHNTZWN0aW9uLFxyXG4gIC8vICAgICBydW5uaW5nQ29zdHNTZWN0aW9uLFxyXG4gIC8vICAgICBmaW5hbmNpbmdTZWN0aW9uLFxyXG4gIC8vICAgICBidXNpbmVzc01vZGVsT3ZlcnZpZXdTZWN0aW9uLFxyXG4gIC8vICAgICBidXNpbmVzc0dyb3dTZWN0aW9uLFxyXG4gIC8vICAgICB3aHlTdWNjZXNzU2VjdGlvbixcclxuICAvLyAgIH07XHJcblxyXG4gIGNvbnN0IGltYWdlID0gZGF0YS5hdmF0YXJFeGlzdHMgIT0gbnVsbCA/IGRhdGEuYXZhdGFyRXhpc3RzIDogYC9wbmcvJHtkYXRhLmltYWdlTmFtZUV4aXN0c30ucG5nYDtcclxuICBjb25zb2xlLmxvZygnZGF0YSAtICcsIGRhdGEpO1xyXG4gIGNvbnNvbGUubG9nKCdkYXRhTWFya2V0UHJvYmxlbSAtICcsIGRhdGEubWFya2V0UHJvYmxlbVNlY3Rpb24pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPERvY3VtZW50PlxyXG4gICAgICA8UGFnZSBzaXplPVwiQTRcIiBzdHlsZT17c3R5bGVzLmhvbWVQYWdlfT5cclxuICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLmhvbWVQYWdlVGl0bGVTZWN0aW9ufT5cclxuICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuaG9tZVBhZ2VUaXRsZX0+U3RhcnR1cCBpZGVhIHBsYW48L1RleHQ+XHJcbiAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLmhvbWVQYWdlRGVzY30+e2RhdGEuaWRlYU5hbWV9PC9UZXh0PlxyXG4gICAgICAgICAgPEltYWdlIHNyYz17aW1hZ2V9IHN0eWxlPXtzdHlsZXMuaW1hZ2V9IGhlaWdodD1cIjI1MHB4XCIgd2lkdGg9XCIyNTBweFwiIC8+XHJcbiAgICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLmxlZnREZXNjQmxvY2t9PlxyXG4gICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLmxlZnREZXNjQmxvY2tUZXh0fT57ZGF0YS5pZGVhRGVzY308L1RleHQ+XHJcbiAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMucmlnaHRCYXJ9PjwvVmlldz5cclxuICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLnJpZ2h0QmFyQ29udGFjdH0+XHJcbiAgICAgICAgICA8VGV4dD57ZGF0YS5zdGFydHVwRmllbGR9PC9UZXh0PlxyXG4gICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5jb3VudHJ5VGV4dH0+e2RhdGEuaWRlYUNvdW50cnl9PC9UZXh0PlxyXG4gICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5lbWFpbFRleHR9PntkYXRhLnN0YXJ0dXBFbWFpbH08L1RleHQ+XHJcbiAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnBob25lTnVtYmVyVGV4dH0+e2RhdGEuc3RhcnR1cFBob25lfTwvVGV4dD5cclxuICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5ncmF5QmFyT25lfT48L1ZpZXc+XHJcbiAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5ncmF5QmFyVHdvfT48L1ZpZXc+XHJcbiAgICAgIDwvUGFnZT5cclxuICAgICAgey8qIFRBQkxFIE9GIENPTlRFTlRTICovfVxyXG4gICAgICA8UGFnZSBzdHlsZT17c3R5bGVzLmNvbnRlbnRzUGFnZX0+XHJcbiAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5yaWdodEJhcn0gZml4ZWQ+PC9WaWV3PlxyXG4gICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuY29udGVudHNMZWZ0QmFyfT5cclxuICAgICAgICAgIDxUZXh0PlN0YXJ0dXAgb3ZlcnZpZXc8L1RleHQ+XHJcbiAgICAgICAgICA8VGV4dD5Qcm9kdWN0PC9UZXh0PlxyXG4gICAgICAgICAgPFRleHQ+TWFya2V0IGFuYWx5c2lzPC9UZXh0PlxyXG4gICAgICAgICAgPFRleHQ+RmluYW5jZXM8L1RleHQ+XHJcbiAgICAgICAgICA8VGV4dD5CdXNpbmVzcyBtb2RlbDwvVGV4dD5cclxuICAgICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuY29udGVudHNCYXJPbmV9PjwvVmlldz5cclxuICAgICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuY29udGVudHNCYXJUd299PjwvVmlldz5cclxuICAgICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuY29udGVudHNCYXJUaHJlZX0+PC9WaWV3PlxyXG4gICAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5jb250ZW50c0JhckZvdXJ9PjwvVmlldz5cclxuICAgICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuY29udGVudHNCYXJGaXZlfT48L1ZpZXc+XHJcbiAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuY29udGVudHNSaWdodEJhcn0+XHJcbiAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLmNvbnRlbnRzUmlnaHRUZXh0T25lfT4wMS4gVGhpcyBzZWN0aW9uIHdpbGwgaGVscCB5b3UgYmV0dGVyIHVuZGVyc3RhbmQgdGhlIHN0YXJ0dXAgdmlzaW9uPC9UZXh0PlxyXG4gICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5jb250ZW50c1JpZ2h0VGV4dFR3b30+MDIuIFRoaXMgc2VjdGlvbiB3aWxsIGludHJvZHVjZSB5b3UgdG8gdGhlIHZpc2lvbiBvZiB0aGUgcHJvZHVjdDwvVGV4dD5cclxuICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuY29udGVudHNSaWdodFRleHRUaHJlZX0+MDMuIFRoaXMgc2VjdGlvbiB3aWxsIHJldmVhbCBhbGwgdGhlIGNhcmRzIG9mIHRoZSBtYXJrZXQ8L1RleHQ+XHJcbiAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLmNvbnRlbnRzUmlnaHRUZXh0Rm91cn0+MDQuIERpc2NvdmVyIHRoZSBjb3N0cyBvZiBpbXBsZW1lbnRpbmcgb3VyIGlkZWE8L1RleHQ+XHJcbiAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLmNvbnRlbnRzUmlnaHRUZXh0Rml2ZX0+MDUuIEluIHRoZSBmaW5hbCBzZWN0aW9uLCB5b3Ugd2lsbCBkaXNjb3ZlciB0aGUgc3RhcnR1cCdzIGJ1c2luZXNzIG1vZGVsPC9UZXh0PlxyXG4gICAgICAgIDwvVmlldz5cclxuICAgICAgPC9QYWdlPlxyXG4gICAgICB7LyogT1ZFUlZJRVcgU0VDVElPTiAqL31cclxuICAgICAgPFBhZ2Ugc3R5bGU9e3N0eWxlcy5vdmVydmlld1BhZ2V9PlxyXG4gICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMucmlnaHRCYXJ9IGZpeGVkPjwvVmlldz5cclxuICAgICAgICA8SW1hZ2Ugc3R5bGU9e3N0eWxlcy5vdmVydmlld0ltYWdlfSBzcmM9XCIvcGRmL2lkZWEucG5nXCIgaGVpZ2h0PXsyMH0gd2lkdGg9ezIwfSAvPlxyXG4gICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMub3ZlcnZpZXdTZWN0aW9ufT5cclxuICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMub3ZlcnZpZXdIZWFkaW5nfT5TdGFydHVwIG92ZXJ2aWV3PC9UZXh0PlxyXG4gICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5vdmVydmlld1N1YnRpdGxlfT5UaGlzIHNlY3Rpb24gd2lsbCBoZWxwIHlvdSBiZXR0ZXIgdW5kZXJzdGFuZCB0aGUgc3RhcnR1cCB2aXNpb248L1RleHQ+XHJcbiAgICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLnNlY3Rpb25Db250YWluZXJPbmV9PlxyXG4gICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnNlY3Rpb25IZWFkaW5nT25lfT5NYXJrZXQgcHJvYmxlbSB0aGF0IG5lZWRzIHRvIGJlIHNvbHZlZC48L1RleHQ+XHJcbiAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuc2VjdGlvblRleHR9PntkYXRhLm1hcmtldFByb2JsZW1TZWN0aW9ufTwvVGV4dD5cclxuICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuc2VjdGlvbkNvbnRhaW5lclR3b30+XHJcbiAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuc2VjdGlvbkhlYWRpbmdUd299PlNvbHV0aW9uIHRoYXQgc29sdmVzIHRoaXMgbWFya2V0IHByb2JsZW0uPC9UZXh0PlxyXG4gICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnNlY3Rpb25UZXh0fT57ZGF0YS5tYXJrZXRTb2x1dGlvblNlY3Rpb259PC9UZXh0PlxyXG4gICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5zZWN0aW9uQ29udGFpbmVyVGhyZWV9PlxyXG4gICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnNlY3Rpb25IZWFkaW5nVGhyZWV9PldobyBpcyBiZWhpbmQgdGhlIGZvdW5kYXRpb24gb2YgdGhlIGZ1dHVyZSBjb21wYW55PzwvVGV4dD5cclxuICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5zZWN0aW9uVGV4dH0+e2RhdGEuZm91bmRlcnNTZWN0aW9ufTwvVGV4dD5cclxuICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICA8L1ZpZXc+XHJcbiAgICAgIDwvUGFnZT5cclxuICAgICAgey8qIFBST0RVQ1QgU0VDVElPTiAqL31cclxuICAgICAgPFBhZ2Ugc3R5bGU9e3N0eWxlcy5vdmVydmlld1BhZ2V9PlxyXG4gICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMucmlnaHRCYXJ9IGZpeGVkPjwvVmlldz5cclxuICAgICAgICA8SW1hZ2Ugc3R5bGU9e3N0eWxlcy5vdmVydmlld0ltYWdlfSBzcmM9XCIvcGRmL2JsdWVwcmludC5wbmdcIiBoZWlnaHQ9ezIwfSB3aWR0aD17MjB9IC8+XHJcbiAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5vdmVydmlld1NlY3Rpb259PlxyXG4gICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5vdmVydmlld0hlYWRpbmd9PlByb2R1Y3Q8L1RleHQ+XHJcbiAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLm92ZXJ2aWV3U3VidGl0bGV9PlRoaXMgc2VjdGlvbiB3aWxsIGludHJvZHVjZSB5b3UgdG8gdGhlIHZpc2lvbiBvZiB0aGUgcHJvZHVjdDwvVGV4dD5cclxuICAgICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuc2VjdGlvbkNvbnRhaW5lck9uZX0+XHJcbiAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuc2VjdGlvbkhlYWRpbmdPbmV9PkRldGFpbGVkIGRlc2NyaXB0aW9uIG9mIHRoZSBwcm9kdWN0IHZpc2lvbi48L1RleHQ+XHJcbiAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuc2VjdGlvblRleHR9PntkYXRhLnByb2R1Y3RPdmVydmlld1NlY3Rpb259PC9UZXh0PlxyXG4gICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5zZWN0aW9uQ29udGFpbmVyVHdvfT5cclxuICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5zZWN0aW9uSGVhZGluZ1R3b30+SG93IHdpbGwgb3RoZXIgcGVvcGxlIGZpbmQgb3V0IGFib3V0IHRoZSBwcm9kdWN0PzwvVGV4dD5cclxuICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5zZWN0aW9uVGV4dH0+e2RhdGEucHJvZHVjdFByb21vdGlvblNlY3Rpb259PC9UZXh0PlxyXG4gICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5zZWN0aW9uQ29udGFpbmVyVGhyZWV9PlxyXG4gICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnNlY3Rpb25IZWFkaW5nVGhyZWV9PldoYXQgYmVuZWZpdHMgd2lsbCB0aGlzIHByb2R1Y3QgYnJpbmdzIHRvIGN1c3RvbWVycz88L1RleHQ+XHJcbiAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuc2VjdGlvblRleHR9PntkYXRhLnByb2R1Y3RCZW5lZml0c1NlY3Rpb259PC9UZXh0PlxyXG4gICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgIDwvVmlldz5cclxuICAgICAgPC9QYWdlPlxyXG4gICAgICB7LyogTUFSS0VUIFNFQ1RJT04gKi99XHJcbiAgICAgIDxQYWdlIHN0eWxlPXtzdHlsZXMub3ZlcnZpZXdQYWdlfT5cclxuICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLnJpZ2h0QmFyfSBmaXhlZD48L1ZpZXc+XHJcbiAgICAgICAgPEltYWdlIHN0eWxlPXtzdHlsZXMub3ZlcnZpZXdJbWFnZX0gc3JjPVwiL3BkZi91bmljb3JuLnBuZ1wiIGhlaWdodD17MjB9IHdpZHRoPXsyMH0gLz5cclxuICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLm92ZXJ2aWV3U2VjdGlvbn0+XHJcbiAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLm92ZXJ2aWV3SGVhZGluZ30+TWFya2V0IGFuYWx5c2lzPC9UZXh0PlxyXG4gICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5vdmVydmlld1N1YnRpdGxlfT5UaGlzIHNlY3Rpb24gd2lsbCByZXZlYWwgYWxsIHRoZSBjYXJkcyBvZiB0aGUgbWFya2V0PC9UZXh0PlxyXG4gICAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5zZWN0aW9uQ29udGFpbmVyT25lfT5cclxuICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5zZWN0aW9uSGVhZGluZ09uZX0+R2VuZXJhbCBpbnNpZ2h0IGludG8gdGhlIG1hcmtldC48L1RleHQ+XHJcbiAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuc2VjdGlvblRleHR9PntkYXRhLm1hcmtldE92ZXJ2aWV3U2VjdGlvbn08L1RleHQ+XHJcbiAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLnNlY3Rpb25Db250YWluZXJUd299PlxyXG4gICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnNlY3Rpb25IZWFkaW5nVHdvfT5XaG8gYXJlIHRoZSBtYWpvciBjb21wZXRpdG9ycyBpbiB0aGUgbWFya2V0PzwvVGV4dD5cclxuICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5zZWN0aW9uVGV4dH0+e2RhdGEuY29tcGV0aXRvcnNTZWN0aW9ufTwvVGV4dD5cclxuICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuc2VjdGlvbkNvbnRhaW5lclR3b30+XHJcbiAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuc2VjdGlvbkhlYWRpbmdUd299PldoYXQgbWFrZXMgdGhpcyBzdGFydHVwIHN0YW5kIG91dCBmcm9tIHRoZSBjb21wZXRpdGlvbj88L1RleHQ+XHJcbiAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuc2VjdGlvblRleHR9PntkYXRhLmNvbXBldGl0aW9uRGlzdGluZ3Vpc2hTZWN0aW9ufTwvVGV4dD5cclxuICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuc2VjdGlvbkNvbnRhaW5lclRocmVlfT5cclxuICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5zZWN0aW9uSGVhZGluZ1RocmVlfT5UYXJnZXQgZ3JvdXAgb2Ygc3RhcnR1cCBjdXN0b21lcnMuPC9UZXh0PlxyXG4gICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnNlY3Rpb25UZXh0fT57ZGF0YS50YXJnZXRDdXN0b21lcnNTZWN0aW9ufTwvVGV4dD5cclxuICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICA8L1ZpZXc+XHJcbiAgICAgIDwvUGFnZT5cclxuICAgICAgey8qIEZJTkFOQ0VTIFNFQ1RJT04gKi99XHJcbiAgICAgIDxQYWdlIHN0eWxlPXtzdHlsZXMub3ZlcnZpZXdQYWdlfT5cclxuICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLnJpZ2h0QmFyfSBmaXhlZD48L1ZpZXc+XHJcbiAgICAgICAgPEltYWdlIHN0eWxlPXtzdHlsZXMub3ZlcnZpZXdJbWFnZX0gc3JjPVwiL3BkZi9idWRnZXQucG5nXCIgaGVpZ2h0PXsyMH0gd2lkdGg9ezIwfSAvPlxyXG4gICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMub3ZlcnZpZXdTZWN0aW9ufT5cclxuICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMub3ZlcnZpZXdIZWFkaW5nfT5GaW5hbmNlczwvVGV4dD5cclxuICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMub3ZlcnZpZXdTdWJ0aXRsZX0+RGlzY292ZXIgdGhlIGNvc3RzIG9mIGltcGxlbWVudGluZyBvdXIgaWRlYTwvVGV4dD5cclxuICAgICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuc2VjdGlvbkNvbnRhaW5lck9uZX0+XHJcbiAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuc2VjdGlvbkhlYWRpbmdPbmV9PkhvdyBtdWNoIG1vbmV5IHdpbGwgaXQgdGFrZSB0byBsYXVuY2ggdGhlIHN0YXJ0dXA/PC9UZXh0PlxyXG4gICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnNlY3Rpb25UZXh0fT57ZGF0YS5zdGFydHVwQ29zdHNTZWN0aW9ufTwvVGV4dD5cclxuICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuc2VjdGlvbkNvbnRhaW5lclR3b30+XHJcbiAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuc2VjdGlvbkhlYWRpbmdUd299PkFwcHJveGltYXRlIHJ1bm5pbmcgY29zdHMsIGJhc2VkIG9uIHN0YXJ0dXAgZ3Jvd3RoLjwvVGV4dD5cclxuICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5zZWN0aW9uVGV4dH0+e2RhdGEucnVubmluZ0Nvc3RzU2VjdGlvbn08L1RleHQ+XHJcbiAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLnNlY3Rpb25Db250YWluZXJUaHJlZX0+XHJcbiAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuc2VjdGlvbkhlYWRpbmdUaHJlZX0+SG93IGRvZXMgdGhlIGlkZWEgd2lsbCBiZSBmdW5kPzwvVGV4dD5cclxuICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5zZWN0aW9uVGV4dH0+e2RhdGEuZmluYW5jaW5nU2VjdGlvbn08L1RleHQ+XHJcbiAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgPC9WaWV3PlxyXG4gICAgICA8L1BhZ2U+XHJcbiAgICAgIHsvKiBCVVNJTkVTUyBNT0RFTCBTRUNUSU9OICovfVxyXG4gICAgICA8UGFnZSBzdHlsZT17c3R5bGVzLm92ZXJ2aWV3UGFnZX0+XHJcbiAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5yaWdodEJhcn0gZml4ZWQ+PC9WaWV3PlxyXG4gICAgICAgIDxJbWFnZSBzdHlsZT17c3R5bGVzLm92ZXJ2aWV3SW1hZ2V9IHNyYz1cIi9wZGYvc3RhcnR1cC5wbmdcIiBoZWlnaHQ9ezIwfSB3aWR0aD17MjB9IC8+XHJcbiAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5vdmVydmlld1NlY3Rpb259PlxyXG4gICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5vdmVydmlld0hlYWRpbmd9PkJ1c2luZXNzIG1vZGVsPC9UZXh0PlxyXG4gICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5vdmVydmlld1N1YnRpdGxlfT5JbiB0aGUgZmluYWwgc2VjdGlvbiwgeW91IHdpbGwgZGlzY292ZXIgdGhlIHN0YXJ0dXAncyBidXNpbmVzcyBtb2RlbDwvVGV4dD5cclxuICAgICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuc2VjdGlvbkNvbnRhaW5lck9uZX0+XHJcbiAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuc2VjdGlvbkhlYWRpbmdPbmV9PlN0YXJ0dXAgYnVzaW5lc3MgbW9kZWwgYW5kIGxlZ2FsIHN0cnVjdHVyZSBvdmVydmlldy48L1RleHQ+XHJcbiAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuc2VjdGlvblRleHR9PntkYXRhLmJ1c2luZXNzTW9kZWxPdmVydmlld1NlY3Rpb259PC9UZXh0PlxyXG4gICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5zZWN0aW9uQ29udGFpbmVyVHdvfT5cclxuICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5zZWN0aW9uSGVhZGluZ1R3b30+UHJlZGljdGlvbnMgZm9yIHN0YXJ0dXAgZ3Jvd3RoLjwvVGV4dD5cclxuICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5zZWN0aW9uVGV4dH0+e2RhdGEuYnVzaW5lc3NHcm93U2VjdGlvbn08L1RleHQ+XHJcbiAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLnNlY3Rpb25Db250YWluZXJUaHJlZX0+XHJcbiAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuc2VjdGlvbkhlYWRpbmdUaHJlZX0+V2h5IHdpbGwgdGhpcyBwYXJ0aWN1bGFyIHN0YXJ0dXAgc3VjY2VlZD88L1RleHQ+XHJcbiAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuc2VjdGlvblRleHR9PntkYXRhLndoeVN1Y2Nlc3NTZWN0aW9ufTwvVGV4dD5cclxuICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICA8L1ZpZXc+XHJcbiAgICAgIDwvUGFnZT5cclxuICAgIDwvRG9jdW1lbnQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15RG9jdW1lbnQxO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBkYiB9IGZyb20gJy4uLy4uLy4uL2xpYi9maXJlYmFzZSc7XHJcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tICcuLi8uLi8uLi9saWIvbmV3QXV0aCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IGdzYXAsIHsgUG93ZXI0LCBMaW5lYXIgfSBmcm9tICdnc2FwJztcclxuaW1wb3J0IHsgc2F2ZUFzIH0gZnJvbSAnZmlsZS1zYXZlcic7XHJcblxyXG5pbXBvcnQgeyBGb250LCBwZGYsIFBhZ2UsIFRleHQsIFZpZXcsIEltYWdlLCBEb2N1bWVudCwgU3R5bGVTaGVldCwgUERGVmlld2VyLCBQREZEb3dubG9hZExpbmsgfSBmcm9tICdAcmVhY3QtcGRmL3JlbmRlcmVyJztcclxuaW1wb3J0IFRpcHB5TW9uc3RlciBmcm9tICcuLi9UaXBweSc7XHJcbmltcG9ydCBNeURvY3VtZW50MSBmcm9tICcuL1BERkRvY3VtZW50JztcclxuaW1wb3J0IEFuaW1hdGVkQmFja2dyb3VuZCBmcm9tICcuL0FuaW1hdGVkQmFja2dyb3VuZCc7XHJcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XHJcbmltcG9ydCBFeGl0Q29tcG9uZW50IGZyb20gJy4vRXhpdENvbXBvbmVudCc7XHJcblxyXG5jb25zdCBTdGFydHVwU3VjY2VzcyA9ICgpID0+IHtcclxuICBjb25zdCBbcHJvamVjdElkLCBzZXRQcm9qZWN0SWRdID0gdXNlU3RhdGUoKTtcclxuICAvLyBTVEFSVEVSXHJcbiAgY29uc3QgW2lkZWFOYW1lLCBzZXRJZGVhTmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2lkZWFEZXNjLCBzZXRJZGVhRGVzY10gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2lkZWFDb3VudHJ5LCBzZXRJZGVhQ291bnRyeV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3N0YXJ0dXBGaWVsZCwgc2V0U3RhcnR1cEZpZWxkXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbc3RhcnR1cEVtYWlsLCBzZXRTdGFydHVwRW1haWxdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtzdGFydHVwUGhvbmUsIHNldFN0YXJ0dXBQaG9uZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgLy8gSU1BR0VcclxuICBjb25zdCBbaW1hZ2VOYW1lRXhpc3RzLCBzZXRJbWFnZU5hbWVFeGlzdHNdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFthdmF0YXJFeGlzdHMsIHNldEF2YXRhckV4aXN0c10gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIC8vIE9WRVJWSUVXXHJcbiAgY29uc3QgW21hcmtldFByb2JsZW1TZWN0aW9uLCBzZXRNYXJrZXRQcm9ibGVtU2VjdGlvbl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW21hcmtldFNvbHV0aW9uU2VjdGlvbiwgc2V0TWFya2V0U29sdXRpb25TZWN0aW9uXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZm91bmRlcnNTZWN0aW9uLCBzZXRGb3VuZGVyc1NlY3Rpb25dID0gdXNlU3RhdGUoJycpO1xyXG4gIC8vIFBST0RVQ1RcclxuICBjb25zdCBbcHJvZHVjdE92ZXJ2aWV3U2VjdGlvbiwgc2V0UHJvZHVjdE92ZXJ2aWV3U2VjdGlvbl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3Byb2R1Y3RQcm9tb3Rpb25TZWN0aW9uLCBzZXRQcm9kdWN0UHJvbW90aW9uU2VjdGlvbl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3Byb2R1Y3RCZW5lZml0c1NlY3Rpb24sIHNldFByb2R1Y3RCZW5lZml0c1NlY3Rpb25dID0gdXNlU3RhdGUoJycpO1xyXG4gIC8vIE1BUktFVFxyXG4gIGNvbnN0IFttYXJrZXRPdmVydmlld1NlY3Rpb24sIHNldE1hcmtldE92ZXJ2aWV3U2VjdGlvbl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2NvbXBldGl0b3JzU2VjdGlvbiwgc2V0Q29tcGV0aXRvcnNTZWN0aW9uXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbY29tcGV0aXRpb25EaXN0aW5ndWlzaFNlY3Rpb24sIHNldENvbXBldGl0aW9uRGlzdGluZ3Vpc2hTZWN0aW9uXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbdGFyZ2V0Q3VzdG9tZXJzU2VjdGlvbiwgc2V0VGFyZ2V0Q3VzdG9tZXJzU2VjdGlvbl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgLy8gRklOQU5DRVNcclxuICBjb25zdCBbc3RhcnR1cENvc3RzU2VjdGlvbiwgc2V0U3RhcnR1cENvc3RzU2VjdGlvbl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3J1bm5pbmdDb3N0c1NlY3Rpb24sIHNldFJ1bm5pbmdDb3N0c1NlY3Rpb25dID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtmaW5hbmNpbmdTZWN0aW9uLCBzZXRGaW5hbmNpbmdTZWN0aW9uXSA9IHVzZVN0YXRlKCcnKTtcclxuICAvLyBCVVNJTkVTUyBNT0RFTFxyXG4gIGNvbnN0IFtidXNpbmVzc01vZGVsT3ZlcnZpZXdTZWN0aW9uLCBzZXRCdXNpbmVzc01vZGVsT3ZlcnZpZXdTZWN0aW9uXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbYnVzaW5lc3NHcm93U2VjdGlvbiwgc2V0QnVzaW5lc3NHcm93U2VjdGlvbl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3doeVN1Y2Nlc3NTZWN0aW9uLCBzZXRXaHlTdWNjZXNzU2VjdGlvbl0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIGNvbnN0IHsgY3VycmVudFVzZXIgfSA9IHVzZUF1dGgoKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBjb250ZW50UmVmID0gdXNlUmVmKCk7XHJcblxyXG4gIC8vIERhdGEgZmV0Y2hcclxuICBjb25zdCBbbG9hZGluZ0hlbHBlciwgc2V0TG9hZGluZ0hlbHBlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2RvY3VtZW50SWQsIHNldERvY3VtZW50SWRdID0gdXNlU3RhdGUoJycpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB1c2VyVWlkID0gQ29va2llcy5nZXQoJ3VpZCcpO1xyXG4gICAgZ3NhcC5mcm9tVG8oY29udGVudFJlZi5jdXJyZW50LCB7IGF1dG9BbHBoYTogMCB9LCB7IGF1dG9BbHBoYTogMSwgZHVyYXRpb246IDEsIGVhc2U6IExpbmVhci5lYXNlSW4gfSk7XHJcbiAgICBpZiAodXNlclVpZCAmJiByb3V0ZXIucXVlcnkucHJvamVjdCkge1xyXG4gICAgICBjb25zdCBkYXRhID0gZGIuY29sbGVjdGlvbigncHJvamVjdHMnKS53aGVyZSgndWlkJywgJz09JywgdXNlclVpZCk7XHJcbiAgICAgIGRhdGFcclxuICAgICAgICAud2hlcmUoJ3Byb2plY3ROYW1lJywgJz09Jywgcm91dGVyLnF1ZXJ5LnByb2plY3QpXHJcbiAgICAgICAgLmdldCgpXHJcbiAgICAgICAgLnRoZW4oKHF1ZXJ5U25hcHNob3QpID0+IHtcclxuICAgICAgICAgIHF1ZXJ5U25hcHNob3QuZm9yRWFjaChhc3luYyAoZG9jMSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpbml0aWFsRGF0YSA9IGRvYzEuZGF0YSgpO1xyXG4gICAgICAgICAgICBzZXRQcm9qZWN0SWQoaW5pdGlhbERhdGEucHJvamVjdElkKTtcclxuICAgICAgICAgICAgLy8gU1RBUlRFUjtcclxuICAgICAgICAgICAgc2V0SWRlYU5hbWUoaW5pdGlhbERhdGEucHJvamVjdE5hbWUpO1xyXG4gICAgICAgICAgICBzZXRJZGVhRGVzYyhpbml0aWFsRGF0YS5wcm9qZWN0RGVzY3JpcHRpb24pO1xyXG4gICAgICAgICAgICBzZXRJZGVhQ291bnRyeShpbml0aWFsRGF0YS5wcm9qZWN0Q291bnRyeSk7XHJcbiAgICAgICAgICAgIHNldFN0YXJ0dXBGaWVsZChpbml0aWFsRGF0YS5wcm9qZWN0RmllbGQpO1xyXG4gICAgICAgICAgICBzZXRTdGFydHVwRW1haWwoaW5pdGlhbERhdGEucHJvamVjdEVtYWlsKTtcclxuICAgICAgICAgICAgc2V0U3RhcnR1cFBob25lKGluaXRpYWxEYXRhLnByb2plY3ROdW1iZXIpO1xyXG4gICAgICAgICAgICAvLyBJTUFHRVxyXG4gICAgICAgICAgICBzZXRJbWFnZU5hbWVFeGlzdHMoaW5pdGlhbERhdGEuaW1hZ2VOYW1lKTtcclxuICAgICAgICAgICAgc2V0QXZhdGFyRXhpc3RzKGluaXRpYWxEYXRhLmltYWdlRmlsZVVybCk7XHJcblxyXG4gICAgICAgICAgICBkYi5jb2xsZWN0aW9uKCdwcm9qZWN0cycpXHJcbiAgICAgICAgICAgICAgLmRvYyhpbml0aWFsRGF0YS5wcm9qZWN0SWQpXHJcbiAgICAgICAgICAgICAgLmNvbGxlY3Rpb24oJ3N0YXJ0dXBJZGVhJylcclxuICAgICAgICAgICAgICAuZG9jKHJvdXRlci5xdWVyeS5wcm9qZWN0KVxyXG4gICAgICAgICAgICAgIC5jb2xsZWN0aW9uKCdpbnB1dHMnKVxyXG4gICAgICAgICAgICAgIC5vblNuYXBzaG90KChzZXJ2ZXJVcGRhdGUpID0+IHtcclxuICAgICAgICAgICAgICAgIHNlcnZlclVwZGF0ZS5kb2NzLm1hcCgoZG9jKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRvYy5kYXRhKCkpO1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gZG9jLmRhdGEoKTtcclxuICAgICAgICAgICAgICAgICAgc2V0RG9jdW1lbnRJZChkb2MuaWQpO1xyXG4gICAgICAgICAgICAgICAgICAvLyBPVkVSVklFV1xyXG4gICAgICAgICAgICAgICAgICBzZXRNYXJrZXRQcm9ibGVtU2VjdGlvbihkYXRhLm1hcmtldFByb2JsZW1TZWN0aW9uRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgIHNldE1hcmtldFNvbHV0aW9uU2VjdGlvbihkYXRhLm1hcmtldFNvbHV0aW9uU2VjdGlvbkRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICBzZXRGb3VuZGVyc1NlY3Rpb24oZGF0YS5mb3VuZGVyc1NlY3Rpb25EYXRhKTtcclxuICAgICAgICAgICAgICAgICAgLy8gUFJPRFVDVFxyXG4gICAgICAgICAgICAgICAgICBzZXRQcm9kdWN0T3ZlcnZpZXdTZWN0aW9uKGRhdGEucHJvZHVjdE92ZXJ2aWV3U2VjdGlvbkRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICBzZXRQcm9kdWN0UHJvbW90aW9uU2VjdGlvbihkYXRhLnByb2R1Y3RQcm9tb3Rpb25TZWN0aW9uRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgIHNldFByb2R1Y3RCZW5lZml0c1NlY3Rpb24oZGF0YS5wcm9kdWN0QmVuZWZpdHNTZWN0aW9uRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgIC8vIE1BUktFVFxyXG4gICAgICAgICAgICAgICAgICBzZXRNYXJrZXRPdmVydmlld1NlY3Rpb24oZGF0YS5tYXJrZXRPdmVydmlld1NlY3Rpb25EYXRhKTtcclxuICAgICAgICAgICAgICAgICAgc2V0Q29tcGV0aXRvcnNTZWN0aW9uKGRhdGEuY29tcGV0aXRvcnNTZWN0aW9uRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgIHNldENvbXBldGl0aW9uRGlzdGluZ3Vpc2hTZWN0aW9uKGRhdGEuY29tcGV0aXRpb25EaXN0aW5ndWlzaFNlY3Rpb25EYXRhKTtcclxuICAgICAgICAgICAgICAgICAgc2V0VGFyZ2V0Q3VzdG9tZXJzU2VjdGlvbihkYXRhLnRhcmdldEN1c3RvbWVyc1NlY3Rpb25EYXRhKTtcclxuICAgICAgICAgICAgICAgICAgLy8gRklOQU5DRVNcclxuICAgICAgICAgICAgICAgICAgc2V0U3RhcnR1cENvc3RzU2VjdGlvbihkYXRhLnN0YXJ0dXBDb3N0c1NlY3Rpb25EYXRhKTtcclxuICAgICAgICAgICAgICAgICAgc2V0UnVubmluZ0Nvc3RzU2VjdGlvbihkYXRhLnJ1bm5pbmdDb3N0c1NlY3Rpb25EYXRhKTtcclxuICAgICAgICAgICAgICAgICAgc2V0RmluYW5jaW5nU2VjdGlvbihkYXRhLmZpbmFuY2luZ1NlY3Rpb25EYXRhKTtcclxuICAgICAgICAgICAgICAgICAgLy8gQlVTSU5FU1MgTU9ERUxcclxuICAgICAgICAgICAgICAgICAgc2V0QnVzaW5lc3NNb2RlbE92ZXJ2aWV3U2VjdGlvbihkYXRhLmJ1c2luZXNzTW9kZWxPdmVydmlld1NlY3Rpb25EYXRhKTtcclxuICAgICAgICAgICAgICAgICAgc2V0QnVzaW5lc3NHcm93U2VjdGlvbihkYXRhLmJ1c2luZXNzR3Jvd1NlY3Rpb25EYXRhKTtcclxuICAgICAgICAgICAgICAgICAgc2V0V2h5U3VjY2Vzc1NlY3Rpb24oZGF0YS53aHlTdWNjZXNzU2VjdGlvbkRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICBzZXRMb2FkaW5nSGVscGVyKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZygnTG9hZGluZyBmYWlsZWQnKTtcclxuICAgICAgc2V0TG9hZGluZ0hlbHBlcih0cnVlKTtcclxuICAgIH1cclxuICB9LCBbbG9hZGluZ0hlbHBlciwgcm91dGVyLnF1ZXJ5LnByb2plY3RdKTtcclxuXHJcbiAgY29uc3QgaW1hZ2UgPSBhdmF0YXJFeGlzdHMgIT0gJ2JsYW5rJyA/IGF2YXRhckV4aXN0cyA6IGltYWdlTmFtZUV4aXN0cztcclxuICBjb25zb2xlLmxvZyhpbWFnZSk7XHJcblxyXG4gIGNvbnN0IGRhdGEgPSB7XHJcbiAgICBpZGVhTmFtZSxcclxuICAgIGlkZWFEZXNjLFxyXG4gICAgaWRlYUNvdW50cnksXHJcbiAgICBzdGFydHVwRmllbGQsXHJcbiAgICBzdGFydHVwRW1haWwsXHJcbiAgICBzdGFydHVwUGhvbmUsXHJcbiAgICBpbWFnZU5hbWVFeGlzdHMsXHJcbiAgICBhdmF0YXJFeGlzdHMsXHJcbiAgICBtYXJrZXRQcm9ibGVtU2VjdGlvbixcclxuICAgIG1hcmtldFNvbHV0aW9uU2VjdGlvbixcclxuICAgIGZvdW5kZXJzU2VjdGlvbixcclxuICAgIHByb2R1Y3RPdmVydmlld1NlY3Rpb24sXHJcbiAgICBwcm9kdWN0UHJvbW90aW9uU2VjdGlvbixcclxuICAgIHByb2R1Y3RCZW5lZml0c1NlY3Rpb24sXHJcbiAgICBtYXJrZXRPdmVydmlld1NlY3Rpb24sXHJcbiAgICBjb21wZXRpdG9yc1NlY3Rpb24sXHJcbiAgICB0YXJnZXRDdXN0b21lcnNTZWN0aW9uLFxyXG4gICAgY29tcGV0aXRpb25EaXN0aW5ndWlzaFNlY3Rpb24sXHJcbiAgICBzdGFydHVwQ29zdHNTZWN0aW9uLFxyXG4gICAgcnVubmluZ0Nvc3RzU2VjdGlvbixcclxuICAgIGZpbmFuY2luZ1NlY3Rpb24sXHJcbiAgICBidXNpbmVzc01vZGVsT3ZlcnZpZXdTZWN0aW9uLFxyXG4gICAgYnVzaW5lc3NHcm93U2VjdGlvbixcclxuICAgIHdoeVN1Y2Nlc3NTZWN0aW9uLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uUHJvamVjdExlYXZlID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGdzYXAudG8oY29udGVudFJlZi5jdXJyZW50LCB7XHJcbiAgICAgIGF1dG9BbHBoYTogMCxcclxuICAgICAgZHVyYXRpb246IDEsXHJcbiAgICAgIGVhc2U6IExpbmVhci5lYXNlT3V0LFxyXG4gICAgfSk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgcm91dGVyLnB1c2goYC9kYXNoYm9hcmQvcHJvamVjdHMvJHtyb3V0ZXIucXVlcnkucHJvamVjdH0vc3RhcnR1cC1pZGVhL2J1c2luZXNzLW1vZGVsYCk7XHJcbiAgICB9LCAxMjAwKTtcclxuICB9O1xyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFBERiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICAvLyBjb25zdCBkZWxheSA9ICh0KSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCB0KSk7XHJcblxyXG4gIC8vIGFzeW5jIGZ1bmN0aW9uIGdldFByb3BzKCkge1xyXG4gIC8vICAgYXdhaXQgZGVsYXkoMV8wMDApO1xyXG4gIC8vICAgcmV0dXJuIHtcclxuICAvLyAgICAgc29tZVN0cmluZzogJ1lvdSB3YWl0ZWQgMSBzZWNvbmQgZm9yIHRoaXMnLFxyXG4gIC8vICAgfTtcclxuICAvLyB9XHJcblxyXG4gIEZvbnQucmVnaXN0ZXIoeyBzcmM6ICcvZm9udHMvcG9wcGlucy50dGYnLCBmYW1pbHk6ICdQb3BwaW5zJyB9KTtcclxuICBGb250LnJlZ2lzdGVyKHsgc3JjOiAnL2ZvbnRzL2NvbWZvcnRhYS50dGYnLCBmYW1pbHk6ICdDb21mb3J0YWEnIH0pO1xyXG5cclxuICBjb25zdCBzdHlsZXMgPSBTdHlsZVNoZWV0LmNyZWF0ZSh7XHJcbiAgICAvLyBTVEFSVCBIT01FUEFHRSBTRUNUSU9OXHJcbiAgICBob21lUGFnZToge1xyXG4gICAgICBmb250RmFtaWx5OiAnQ29tZm9ydGFhJyxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2Y4ZjlmYicsXHJcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxyXG4gICAgfSxcclxuICAgIGhvbWVQYWdlVGl0bGVTZWN0aW9uOiB7XHJcbiAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgIG1hcmdpblRvcDogNDAsXHJcbiAgICB9LFxyXG4gICAgaG9tZVBhZ2VUaXRsZToge1xyXG4gICAgICBmb250U2l6ZTogMjYsXHJcbiAgICAgIGNvbG9yOiAnIzBhMTIzMCcsXHJcbiAgICB9LFxyXG4gICAgaG9tZVBhZ2VEZXNjOiB7XHJcbiAgICAgIGZvbnRTaXplOiAxNixcclxuICAgICAgY29sb3I6ICcjYTBhZWMwJyxcclxuICAgIH0sXHJcbiAgICBpbWFnZToge1xyXG4gICAgICBoZWlnaHQ6ICcyMDBweCcsXHJcbiAgICAgIHdpZHRoOiAnMjAwcHgnLFxyXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgICBtYXJnaW5MZWZ0OiAnYXV0bycsXHJcbiAgICAgIG1hcmdpblJpZ2h0OiAnYXV0bycsXHJcbiAgICAgIG1hcmdpblRvcDogMjIsXHJcbiAgICB9LFxyXG4gICAgbGVmdERlc2NCbG9jazoge1xyXG4gICAgICB3aWR0aDogJzc1JScsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyM2QzYzRkYnLFxyXG4gICAgICB0ZXh0QWxpZ246ICdsZWZ0JyxcclxuICAgICAgbWFyZ2luVG9wOiAnMzJweCcsXHJcbiAgICAgIGJvcmRlclRvcFJpZ2h0UmFkaXVzOiA1MCxcclxuICAgIH0sXHJcbiAgICBsZWZ0RGVzY0Jsb2NrVGV4dDoge1xyXG4gICAgICBmb250U2l6ZTogMTQsXHJcbiAgICAgIHBhZGRpbmc6IDMyLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAxLjQsXHJcbiAgICAgIGNvbG9yOiAnI2Y4ZjlmYicsXHJcbiAgICB9LFxyXG4gICAgcmlnaHRCYXI6IHtcclxuICAgICAgaGVpZ2h0OiAnMTAwdmgnLFxyXG4gICAgICB3aWR0aDogJzE1cHgnLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjNkM2M0ZGJyxcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgIHJpZ2h0OiAnNSUnLFxyXG4gICAgfSxcclxuICAgIHJpZ2h0QmFyQ29udGFjdDoge1xyXG4gICAgICBjb2xvcjogJyNmOGY5ZmInLFxyXG4gICAgICBmb250U2l6ZTogMTQsXHJcbiAgICAgIHdpZHRoOiAnNTAlJyxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzZDNjNGRicsXHJcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICBib3R0b206ICcxMCUnLFxyXG4gICAgICByaWdodDogJzUlJyxcclxuICAgICAgcGFkZGluZzogMzIsXHJcbiAgICAgIGJvcmRlclRvcExlZnRSYWRpdXM6IDUwLFxyXG4gICAgfSxcclxuICAgIGNvdW50cnlUZXh0OiB7XHJcbiAgICAgIG1hcmdpblRvcDogNixcclxuICAgIH0sXHJcbiAgICBlbWFpbFRleHQ6IHtcclxuICAgICAgbWFyZ2luVG9wOiA2LFxyXG4gICAgfSxcclxuICAgIHBob25lTnVtYmVyVGV4dDoge1xyXG4gICAgICBtYXJnaW5Ub3A6IDYsXHJcbiAgICB9LFxyXG4gICAgZ3JheUJhck9uZToge1xyXG4gICAgICBoZWlnaHQ6ICcyNSUnLFxyXG4gICAgICB3aWR0aDogJzJweCcsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNhMGFlYzAnLFxyXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgYm90dG9tOiAnMyUnLFxyXG4gICAgICBsZWZ0OiAnMTAlJyxcclxuICAgIH0sXHJcbiAgICBncmF5QmFyVHdvOiB7XHJcbiAgICAgIGhlaWdodDogJzJweCcsXHJcbiAgICAgIHdpZHRoOiAnMjAlJyxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2EwYWVjMCcsXHJcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICBib3R0b206ICc1JScsXHJcbiAgICAgIGxlZnQ6ICc1JScsXHJcbiAgICB9LFxyXG4gICAgLy8gRU5EIFNUQVJUIEhPTUVQQUdFIFNFQ1RJT05cclxuICAgIC8vIFNUQVJUIE9WRVJWSUVXIFNFQ1RJT05cclxuICAgIG92ZXJ2aWV3UGFnZToge1xyXG4gICAgICBmb250RmFtaWx5OiAnQ29tZm9ydGFhJyxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2Y4ZjlmYicsXHJcbiAgICAgIHBhZGRpbmdUb3A6IDM1LFxyXG4gICAgICBwYWRkaW5nQm90dG9tOiAzNSxcclxuICAgIH0sXHJcbiAgICBvdmVydmlld0hlYWRpbmc6IHtcclxuICAgICAgZm9udFNpemU6IDIyLFxyXG4gICAgICBjb2xvcjogJyMwYTEyMzAnLFxyXG4gICAgICBtYXJnaW5MZWZ0OiAyOCxcclxuICAgIH0sXHJcbiAgICBvdmVydmlld1N1YnRpdGxlOiB7XHJcbiAgICAgIGZvbnRTaXplOiAxNCxcclxuICAgICAgY29sb3I6ICcjYTBhZWMwJyxcclxuICAgIH0sXHJcbiAgICBvdmVydmlld0ltYWdlOiB7XHJcbiAgICAgIGhlaWdodDogJzIwcHgnLFxyXG4gICAgICB3aWR0aDogJzIwcHgnLFxyXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgdG9wOiAzNyxcclxuICAgICAgbGVmdDogMzAsXHJcbiAgICB9LFxyXG4gICAgb3ZlcnZpZXdTZWN0aW9uOiB7XHJcbiAgICAgIC8vIHBhZGRpbmc6ICc1JScsXHJcbiAgICAgIC8vIHBhZGRpbmdUb3A6ICc1JScsXHJcbiAgICAgIHBhZGRpbmdCb3R0b206ICc1JScsXHJcbiAgICAgIHBhZGRpbmdMZWZ0OiAnNSUnLFxyXG4gICAgICBwYWRkaW5nUmlnaHQ6ICc1JScsXHJcbiAgICB9LFxyXG4gICAgc2VjdGlvbkNvbnRhaW5lck9uZToge1xyXG4gICAgICBtYXJnaW5Ub3A6IDMwLFxyXG4gICAgfSxcclxuICAgIHNlY3Rpb25IZWFkaW5nT25lOiB7XHJcbiAgICAgIGNvbG9yOiAnIzBhMTIzMCcsXHJcbiAgICAgIGZvbnRTaXplOiAxNixcclxuICAgIH0sXHJcbiAgICBzZWN0aW9uVGV4dDoge1xyXG4gICAgICBjb2xvcjogJyMwYTEyMzAnLFxyXG4gICAgICBmb250U2l6ZTogMTIsXHJcbiAgICAgIHBhZGRpbmdUb3A6IDgsXHJcbiAgICAgIHBhZGRpbmdSaWdodDogNTAsXHJcbiAgICB9LFxyXG4gICAgc2VjdGlvbkNvbnRhaW5lclR3bzoge1xyXG4gICAgICBwYWRkaW5nVG9wOiAzMCxcclxuICAgIH0sXHJcbiAgICBzZWN0aW9uSGVhZGluZ1R3bzoge1xyXG4gICAgICBjb2xvcjogJyMwYTEyMzAnLFxyXG4gICAgICBmb250U2l6ZTogMTYsXHJcbiAgICB9LFxyXG4gICAgc2VjdGlvbkNvbnRhaW5lclRocmVlOiB7XHJcbiAgICAgIHBhZGRpbmdUb3A6IDM2LFxyXG4gICAgICBwYWRkaW5nQm90dG9tOiAyNixcclxuICAgIH0sXHJcbiAgICBzZWN0aW9uSGVhZGluZ1RocmVlOiB7XHJcbiAgICAgIGNvbG9yOiAnIzBhMTIzMCcsXHJcbiAgICAgIGZvbnRTaXplOiAxNixcclxuICAgIH0sXHJcbiAgICAvLyBFTkQgT1ZFUlZJRVcgU0VDVElPTlxyXG4gICAgLy8gU1RBUlQgVEFCTEUgT0YgQ09OVEVOVFMgU0VDVElPTlxyXG4gICAgY29udGVudHNQYWdlOiB7XHJcbiAgICAgIGZvbnRGYW1pbHk6ICdDb21mb3J0YWEnLFxyXG4gICAgfSxcclxuICAgIGNvbnRlbnRzTGVmdEJhcjoge1xyXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgICAgd2lkdGg6ICc0MCUnLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjNkM2M0ZGJyxcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgIGFsaWduSXRlbXM6ICdiYXNlbGluZScsXHJcbiAgICAgIGNvbG9yOiAnI2Y4ZjlmYicsXHJcbiAgICAgIHBhZGRpbmdMZWZ0OiAzNSxcclxuICAgICAgZm9udFNpemU6IDIwLFxyXG4gICAgICBsaW5lSGVpZ2h0OiA0LFxyXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIH0sXHJcbiAgICBjb250ZW50c0Jhck9uZToge1xyXG4gICAgICB3aWR0aDogMjAwLFxyXG4gICAgICBoZWlnaHQ6IDIsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNhMGFlYzAnLFxyXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgdG9wOiAnMzclJyxcclxuICAgICAgbGVmdDogJzEwMCUnLFxyXG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknLFxyXG4gICAgfSxcclxuICAgIGNvbnRlbnRzQmFyVHdvOiB7XHJcbiAgICAgIHdpZHRoOiAyMDAsXHJcbiAgICAgIGhlaWdodDogMixcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2EwYWVjMCcsXHJcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICB0b3A6ICc0Ni41JScsXHJcbiAgICAgIGxlZnQ6ICcxMDAlJyxcclxuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpJyxcclxuICAgIH0sXHJcbiAgICBjb250ZW50c0JhclRocmVlOiB7XHJcbiAgICAgIHdpZHRoOiAyMDAsXHJcbiAgICAgIGhlaWdodDogMixcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2EwYWVjMCcsXHJcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICB0b3A6ICc1NiUnLFxyXG4gICAgICBsZWZ0OiAnMTAwJScsXHJcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScsXHJcbiAgICB9LFxyXG4gICAgY29udGVudHNCYXJGb3VyOiB7XHJcbiAgICAgIHdpZHRoOiAyMDAsXHJcbiAgICAgIGhlaWdodDogMixcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2EwYWVjMCcsXHJcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICB0b3A6ICc2NS41JScsXHJcbiAgICAgIGxlZnQ6ICcxMDAlJyxcclxuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpJyxcclxuICAgIH0sXHJcbiAgICBjb250ZW50c0JhckZpdmU6IHtcclxuICAgICAgd2lkdGg6IDIwMCxcclxuICAgICAgaGVpZ2h0OiAyLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjYTBhZWMwJyxcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgIHRvcDogJzc0Ljc1JScsXHJcbiAgICAgIGxlZnQ6ICcxMDAlJyxcclxuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpJyxcclxuICAgIH0sXHJcbiAgICBjb250ZW50c1JpZ2h0QmFyOiB7XHJcbiAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgICB3aWR0aDogJzYwJScsXHJcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICByaWdodDogJzAnLFxyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICBmb250U2l6ZTogMTIsXHJcbiAgICAgIGNvbG9yOiAnIzBhMTIzMCcsXHJcbiAgICAgIC8vIHBhZGRpbmdIb3Jpem9udGFsOiA2NCxcclxuICAgICAgcGFkZGluZ1JpZ2h0OiA4MCxcclxuICAgICAgcGFkZGluZ0xlZnQ6IDMyLFxyXG4gICAgfSxcclxuICAgIGNvbnRlbnRzUmlnaHRUZXh0T25lOiB7XHJcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICB0b3A6ICcyNi43NSUnLFxyXG4gICAgfSxcclxuICAgIGNvbnRlbnRzUmlnaHRUZXh0VHdvOiB7XHJcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICB0b3A6ICczNiUnLFxyXG4gICAgfSxcclxuICAgIGNvbnRlbnRzUmlnaHRUZXh0VGhyZWU6IHtcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgIHRvcDogJzQ1LjUlJyxcclxuICAgIH0sXHJcbiAgICBjb250ZW50c1JpZ2h0VGV4dEZvdXI6IHtcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgIHRvcDogJzU1JScsXHJcbiAgICB9LFxyXG4gICAgY29udGVudHNSaWdodFRleHRGaXZlOiB7XHJcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICB0b3A6ICc2NC4yNSUnLFxyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgTXlEb2N1bWVudCA9IChwcm9wcykgPT4gKFxyXG4gICAgPERvY3VtZW50PlxyXG4gICAgICA8UGFnZSBzaXplPVwiQTRcIiBzdHlsZT17c3R5bGVzLmhvbWVQYWdlfT5cclxuICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLmhvbWVQYWdlVGl0bGVTZWN0aW9ufT5cclxuICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuaG9tZVBhZ2VUaXRsZX0+U3RhcnR1cCBpZGVhIHBsYW48L1RleHQ+XHJcbiAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLmhvbWVQYWdlRGVzY30+SnVzdCBhIHNpbXBsZSBzdGFydHVwIGFib3V0IHRlY2ggZmllbGQ8L1RleHQ+XHJcbiAgICAgICAgICA8SW1hZ2Ugc3JjPXtpbWFnZX0gc3R5bGU9e3N0eWxlcy5pbWFnZX0gaGVpZ2h0PVwiMjUwcHhcIiB3aWR0aD1cIjI1MHB4XCIgLz5cclxuICAgICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMubGVmdERlc2NCbG9ja30+XHJcbiAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMubGVmdERlc2NCbG9ja1RleHR9PntpZGVhRGVzY308L1RleHQ+XHJcbiAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMucmlnaHRCYXJ9PjwvVmlldz5cclxuICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLnJpZ2h0QmFyQ29udGFjdH0+XHJcbiAgICAgICAgICA8VGV4dD57c3RhcnR1cEZpZWxkfTwvVGV4dD5cclxuICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuY291bnRyeVRleHR9PntpZGVhQ291bnRyeX08L1RleHQ+XHJcbiAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLmVtYWlsVGV4dH0+e3N0YXJ0dXBFbWFpbH08L1RleHQ+XHJcbiAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnBob25lTnVtYmVyVGV4dH0+e3N0YXJ0dXBQaG9uZX08L1RleHQ+XHJcbiAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuZ3JheUJhck9uZX0+PC9WaWV3PlxyXG4gICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuZ3JheUJhclR3b30+PC9WaWV3PlxyXG4gICAgICA8L1BhZ2U+XHJcbiAgICAgIHsvKiBUQUJMRSBPRiBDT05URU5UUyAqL31cclxuICAgICAgPFBhZ2Ugc3R5bGU9e3N0eWxlcy5jb250ZW50c1BhZ2V9PlxyXG4gICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMucmlnaHRCYXJ9IGZpeGVkPjwvVmlldz5cclxuICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLmNvbnRlbnRzTGVmdEJhcn0+XHJcbiAgICAgICAgICA8VGV4dD5TdGFydHVwIG92ZXJ2aWV3PC9UZXh0PlxyXG4gICAgICAgICAgPFRleHQ+UHJvZHVjdDwvVGV4dD5cclxuICAgICAgICAgIDxUZXh0Pk1hcmtldCBhbmFseXNpczwvVGV4dD5cclxuICAgICAgICAgIDxUZXh0PkZpbmFuY2VzPC9UZXh0PlxyXG4gICAgICAgICAgPFRleHQ+QnVzaW5lc3MgbW9kZWw8L1RleHQ+XHJcbiAgICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLmNvbnRlbnRzQmFyT25lfT48L1ZpZXc+XHJcbiAgICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLmNvbnRlbnRzQmFyVHdvfT48L1ZpZXc+XHJcbiAgICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLmNvbnRlbnRzQmFyVGhyZWV9PjwvVmlldz5cclxuICAgICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuY29udGVudHNCYXJGb3VyfT48L1ZpZXc+XHJcbiAgICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLmNvbnRlbnRzQmFyRml2ZX0+PC9WaWV3PlxyXG4gICAgICAgIDwvVmlldz5cclxuICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLmNvbnRlbnRzUmlnaHRCYXJ9PlxyXG4gICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5jb250ZW50c1JpZ2h0VGV4dE9uZX0+MDEuIFRoaXMgc2VjdGlvbiB3aWxsIGhlbHAgeW91IGJldHRlciB1bmRlcnN0YW5kIHRoZSBzdGFydHVwIHZpc2lvbjwvVGV4dD5cclxuICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuY29udGVudHNSaWdodFRleHRUd299PjAyLiBUaGlzIHNlY3Rpb24gd2lsbCBpbnRyb2R1Y2UgeW91IHRvIHRoZSB2aXNpb24gb2YgdGhlIHByb2R1Y3Q8L1RleHQ+XHJcbiAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLmNvbnRlbnRzUmlnaHRUZXh0VGhyZWV9PjAzLiBUaGlzIHNlY3Rpb24gd2lsbCByZXZlYWwgYWxsIHRoZSBjYXJkcyBvZiB0aGUgbWFya2V0PC9UZXh0PlxyXG4gICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5jb250ZW50c1JpZ2h0VGV4dEZvdXJ9PjA0LiBEaXNjb3ZlciB0aGUgY29zdHMgb2YgaW1wbGVtZW50aW5nIG91ciBpZGVhPC9UZXh0PlxyXG4gICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5jb250ZW50c1JpZ2h0VGV4dEZpdmV9PjA1LiBJbiB0aGUgZmluYWwgc2VjdGlvbiwgeW91IHdpbGwgZGlzY292ZXIgdGhlIHN0YXJ0dXAncyBidXNpbmVzcyBtb2RlbDwvVGV4dD5cclxuICAgICAgICA8L1ZpZXc+XHJcbiAgICAgIDwvUGFnZT5cclxuICAgICAgey8qIE9WRVJWSUVXIFNFQ1RJT04gKi99XHJcbiAgICAgIDxQYWdlIHN0eWxlPXtzdHlsZXMub3ZlcnZpZXdQYWdlfT5cclxuICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLnJpZ2h0QmFyfSBmaXhlZD48L1ZpZXc+XHJcbiAgICAgICAgPEltYWdlIHN0eWxlPXtzdHlsZXMub3ZlcnZpZXdJbWFnZX0gc3JjPVwiL3BkZi9pZGVhLnBuZ1wiIGhlaWdodD17MjB9IHdpZHRoPXsyMH0gLz5cclxuICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLm92ZXJ2aWV3U2VjdGlvbn0+XHJcbiAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLm92ZXJ2aWV3SGVhZGluZ30+U3RhcnR1cCBvdmVydmlldzwvVGV4dD5cclxuICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMub3ZlcnZpZXdTdWJ0aXRsZX0+VGhpcyBzZWN0aW9uIHdpbGwgaGVscCB5b3UgYmV0dGVyIHVuZGVyc3RhbmQgdGhlIHN0YXJ0dXAgdmlzaW9uPC9UZXh0PlxyXG4gICAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5zZWN0aW9uQ29udGFpbmVyT25lfT5cclxuICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5zZWN0aW9uSGVhZGluZ09uZX0+TWFya2V0IHByb2JsZW0gdGhhdCBuZWVkcyB0byBiZSBzb2x2ZWQ8L1RleHQ+XHJcbiAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuc2VjdGlvblRleHR9PnttYXJrZXRQcm9ibGVtU2VjdGlvbn08L1RleHQ+XHJcbiAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLnNlY3Rpb25Db250YWluZXJUd299PlxyXG4gICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnNlY3Rpb25IZWFkaW5nVHdvfT5PdXIgc3RhcnR1cCBzb2x1dGlvbiBmb3IgdGhpcyBwcm9ibGVtPC9UZXh0PlxyXG4gICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnNlY3Rpb25UZXh0fT57bWFya2V0U29sdXRpb25TZWN0aW9ufTwvVGV4dD5cclxuICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuc2VjdGlvbkNvbnRhaW5lclRocmVlfT5cclxuICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5zZWN0aW9uSGVhZGluZ1RocmVlfT5XaG8gaXMgYmVoaW5kIHRoZSBmb3VuZGF0aW9uIG9mIHRoZSBmdXR1cmUgY29tcGFueT88L1RleHQ+XHJcbiAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuc2VjdGlvblRleHR9Pntmb3VuZGVyc1NlY3Rpb259PC9UZXh0PlxyXG4gICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgIDwvVmlldz5cclxuICAgICAgPC9QYWdlPlxyXG4gICAgICB7LyogUFJPRFVDVCBTRUNUSU9OICovfVxyXG4gICAgICA8UGFnZSBzdHlsZT17c3R5bGVzLm92ZXJ2aWV3UGFnZX0+XHJcbiAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5yaWdodEJhcn0gZml4ZWQ+PC9WaWV3PlxyXG4gICAgICAgIDxJbWFnZSBzdHlsZT17c3R5bGVzLm92ZXJ2aWV3SW1hZ2V9IHNyYz1cIi9wZGYvYmx1ZXByaW50LnBuZ1wiIGhlaWdodD17MjB9IHdpZHRoPXsyMH0gLz5cclxuICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLm92ZXJ2aWV3U2VjdGlvbn0+XHJcbiAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLm92ZXJ2aWV3SGVhZGluZ30+UHJvZHVjdDwvVGV4dD5cclxuICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMub3ZlcnZpZXdTdWJ0aXRsZX0+VGhpcyBzZWN0aW9uIHdpbGwgaW50cm9kdWNlIHlvdSB0byB0aGUgdmlzaW9uIG9mIHRoZSBwcm9kdWN0PC9UZXh0PlxyXG4gICAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5zZWN0aW9uQ29udGFpbmVyT25lfT5cclxuICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5zZWN0aW9uSGVhZGluZ09uZX0+V2hhdCBkb2VzIHRoZSBwZXJmZWN0IHZlcnNpb24gb2YgdGhlIHByb2R1Y3QgbG9vayBsaWtlPzwvVGV4dD5cclxuICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5zZWN0aW9uVGV4dH0+e3Byb2R1Y3RPdmVydmlld1NlY3Rpb259PC9UZXh0PlxyXG4gICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5zZWN0aW9uQ29udGFpbmVyVHdvfT5cclxuICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5zZWN0aW9uSGVhZGluZ1R3b30+SG93IHdpbGwgb3RoZXIgcGVvcGxlIGZpbmQgb3V0IGFib3V0IHRoZSBwcm9kdWN0PzwvVGV4dD5cclxuICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5zZWN0aW9uVGV4dH0+e3Byb2R1Y3RQcm9tb3Rpb25TZWN0aW9ufTwvVGV4dD5cclxuICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuc2VjdGlvbkNvbnRhaW5lclRocmVlfT5cclxuICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5zZWN0aW9uSGVhZGluZ1RocmVlfT5XaGF0IGJlbmVmaXRzIHdpbGwgdGhpcyBwcm9kdWN0IGJyaW5ncyB0byBjdXN0b21lcnM/PC9UZXh0PlxyXG4gICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnNlY3Rpb25UZXh0fT57cHJvZHVjdEJlbmVmaXRzU2VjdGlvbn08L1RleHQ+XHJcbiAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgPC9WaWV3PlxyXG4gICAgICA8L1BhZ2U+XHJcbiAgICAgIHsvKiBNQVJLRVQgU0VDVElPTiAqL31cclxuICAgICAgPFBhZ2Ugc3R5bGU9e3N0eWxlcy5vdmVydmlld1BhZ2V9PlxyXG4gICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMucmlnaHRCYXJ9IGZpeGVkPjwvVmlldz5cclxuICAgICAgICA8SW1hZ2Ugc3R5bGU9e3N0eWxlcy5vdmVydmlld0ltYWdlfSBzcmM9XCIvcGRmL3VuaWNvcm4ucG5nXCIgaGVpZ2h0PXsyMH0gd2lkdGg9ezIwfSAvPlxyXG4gICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMub3ZlcnZpZXdTZWN0aW9ufT5cclxuICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMub3ZlcnZpZXdIZWFkaW5nfT5NYXJrZXQgYW5hbHlzaXM8L1RleHQ+XHJcbiAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLm92ZXJ2aWV3U3VidGl0bGV9PlRoaXMgc2VjdGlvbiB3aWxsIHJldmVhbCBhbGwgdGhlIGNhcmRzIG9mIHRoZSBtYXJrZXQ8L1RleHQ+XHJcbiAgICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLnNlY3Rpb25Db250YWluZXJPbmV9PlxyXG4gICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnNlY3Rpb25IZWFkaW5nT25lfT5BIGdlbmVyYWwgdmlldyBvZiB0aGUgbWFya2V0IHRoYXQgY2FuIGJlIG9idGFpbmVkPC9UZXh0PlxyXG4gICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnNlY3Rpb25UZXh0fT57bWFya2V0T3ZlcnZpZXdTZWN0aW9ufTwvVGV4dD5cclxuICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuc2VjdGlvbkNvbnRhaW5lclR3b30+XHJcbiAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuc2VjdGlvbkhlYWRpbmdUd299PldoYXQgaXMgdGhlIG1haW4gY29tcGV0aXRpb24gb24gdGhlIG1hcmtldD88L1RleHQ+XHJcbiAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuc2VjdGlvblRleHR9Pntjb21wZXRpdG9yc1NlY3Rpb259PC9UZXh0PlxyXG4gICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5zZWN0aW9uQ29udGFpbmVyVHdvfT5cclxuICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5zZWN0aW9uSGVhZGluZ1R3b30+V2hhdCBtYWtlcyBhIHN0YXJ0dXAgc3RhbmQgb3V0IGZyb20gdGhlIGNvbXBldGl0aW9uPzwvVGV4dD5cclxuICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5zZWN0aW9uVGV4dH0+e2NvbXBldGl0aW9uRGlzdGluZ3Vpc2hTZWN0aW9ufTwvVGV4dD5cclxuICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuc2VjdGlvbkNvbnRhaW5lclRocmVlfT5cclxuICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5zZWN0aW9uSGVhZGluZ1RocmVlfT5XaG8gYXJlIHRoZSB0YXJnZXQgY3VzdG9tZXJzIG9mIHRoZSBzdGFydHVwPzwvVGV4dD5cclxuICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5zZWN0aW9uVGV4dH0+e3RhcmdldEN1c3RvbWVyc1NlY3Rpb259PC9UZXh0PlxyXG4gICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgIDwvVmlldz5cclxuICAgICAgPC9QYWdlPlxyXG4gICAgICB7LyogRklOQU5DRVMgU0VDVElPTiAqL31cclxuICAgICAgPFBhZ2Ugc3R5bGU9e3N0eWxlcy5vdmVydmlld1BhZ2V9PlxyXG4gICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMucmlnaHRCYXJ9IGZpeGVkPjwvVmlldz5cclxuICAgICAgICA8SW1hZ2Ugc3R5bGU9e3N0eWxlcy5vdmVydmlld0ltYWdlfSBzcmM9XCIvcGRmL2J1ZGdldC5wbmdcIiBoZWlnaHQ9ezIwfSB3aWR0aD17MjB9IC8+XHJcbiAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5vdmVydmlld1NlY3Rpb259PlxyXG4gICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5vdmVydmlld0hlYWRpbmd9PkZpbmFuY2VzPC9UZXh0PlxyXG4gICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5vdmVydmlld1N1YnRpdGxlfT5EaXNjb3ZlciB0aGUgY29zdHMgb2YgaW1wbGVtZW50aW5nIG91ciBpZGVhPC9UZXh0PlxyXG4gICAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5zZWN0aW9uQ29udGFpbmVyT25lfT5cclxuICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5zZWN0aW9uSGVhZGluZ09uZX0+SG93IG11Y2ggbW9uZXkgd2lsbCBpdCB0YWtlIHRvIGxhdW5jaCB0aGUgc3RhcnR1cD88L1RleHQ+XHJcbiAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuc2VjdGlvblRleHR9PntzdGFydHVwQ29zdHNTZWN0aW9ufTwvVGV4dD5cclxuICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuc2VjdGlvbkNvbnRhaW5lclR3b30+XHJcbiAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuc2VjdGlvbkhlYWRpbmdUd299PkFwcHJveGltYXRlIGNvc3RzIG9mIG1haW50YWluaW5nIGEgc3RhcnR1cDwvVGV4dD5cclxuICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5zZWN0aW9uVGV4dH0+e3J1bm5pbmdDb3N0c1NlY3Rpb259PC9UZXh0PlxyXG4gICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5zZWN0aW9uQ29udGFpbmVyVGhyZWV9PlxyXG4gICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnNlY3Rpb25IZWFkaW5nVGhyZWV9PkhvdyBkb2VzIHRoZSBpZGVhIHdpbGwgYmUgZnVuZD88L1RleHQ+XHJcbiAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuc2VjdGlvblRleHR9PntmaW5hbmNpbmdTZWN0aW9ufTwvVGV4dD5cclxuICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICA8L1ZpZXc+XHJcbiAgICAgIDwvUGFnZT5cclxuICAgICAgey8qIEJVU0lORVNTIE1PREVMIFNFQ1RJT04gKi99XHJcbiAgICAgIDxQYWdlIHN0eWxlPXtzdHlsZXMub3ZlcnZpZXdQYWdlfT5cclxuICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLnJpZ2h0QmFyfSBmaXhlZD48L1ZpZXc+XHJcbiAgICAgICAgPEltYWdlIHN0eWxlPXtzdHlsZXMub3ZlcnZpZXdJbWFnZX0gc3JjPVwiL3BkZi9zdGFydHVwLnBuZ1wiIGhlaWdodD17MjB9IHdpZHRoPXsyMH0gLz5cclxuICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLm92ZXJ2aWV3U2VjdGlvbn0+XHJcbiAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLm92ZXJ2aWV3SGVhZGluZ30+QnVzaW5lc3MgbW9kZWw8L1RleHQ+XHJcbiAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLm92ZXJ2aWV3U3VidGl0bGV9PkluIHRoZSBmaW5hbCBzZWN0aW9uLCB5b3Ugd2lsbCBkaXNjb3ZlciB0aGUgc3RhcnR1cCdzIGJ1c2luZXNzIG1vZGVsPC9UZXh0PlxyXG4gICAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5zZWN0aW9uQ29udGFpbmVyT25lfT5cclxuICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5zZWN0aW9uSGVhZGluZ09uZX0+V2hhdCB3aWxsIHRoZSBzdGFydHVwJ3MgYnVzaW5lc3MgbW9kZWwgbG9vayBsaWtlPzwvVGV4dD5cclxuICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5zZWN0aW9uVGV4dH0+e2J1c2luZXNzTW9kZWxPdmVydmlld1NlY3Rpb259PC9UZXh0PlxyXG4gICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5zZWN0aW9uQ29udGFpbmVyVHdvfT5cclxuICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5zZWN0aW9uSGVhZGluZ1R3b30+UHJlZGljdGlvbnMgZm9yIHN0YXJ0dXAgZ3Jvd3RoPC9UZXh0PlxyXG4gICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnNlY3Rpb25UZXh0fT57YnVzaW5lc3NHcm93U2VjdGlvbn08L1RleHQ+XHJcbiAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLnNlY3Rpb25Db250YWluZXJUaHJlZX0+XHJcbiAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuc2VjdGlvbkhlYWRpbmdUaHJlZX0+V2h5IGlzIGl0IHRoYXQgc3RhcnR1cCB0aGF0IHdpbGwgY29ucXVlciB0aGUgd29ybGQ/PC9UZXh0PlxyXG4gICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnNlY3Rpb25UZXh0fT57d2h5U3VjY2Vzc1NlY3Rpb259PC9UZXh0PlxyXG4gICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgIDwvVmlldz5cclxuICAgICAgPC9QYWdlPlxyXG4gICAgPC9Eb2N1bWVudD5cclxuICApO1xyXG5cclxuICAvLyBjb25zdCBbbnVtUGFnZXMsIHNldE51bVBhZ2VzXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAvLyBjb25zdCBNeURvY3VtZW50ID0gKHByb3BzKSA9PiAoXHJcbiAgLy8gICA8RG9jdW1lbnRcclxuICAvLyAgICAgZmlsZT17cHJvcHMuZGF0YX1cclxuICAvLyAgICAgb25Mb2FkU3VjY2Vzcz17KHsgbnVtUGFnZXMgfSkgPT4gc2V0TnVtUGFnZXMobnVtUGFnZXMpfVxyXG4gIC8vICAgPlxyXG4gIC8vICAgICB7QXJyYXkuYXBwbHkobnVsbCwgQXJyYXkobnVtUGFnZXMpKVxyXG4gIC8vICAgICAgIC5tYXAoKHgsIGkpID0+IGkgKyAxKVxyXG4gIC8vICAgICAgIC5tYXAoKHBhZ2UpID0+IChcclxuICAvLyAgICAgICAgIDxQYWdlIHBhZ2VOdW1iZXI9e3BhZ2V9IHN0eWxlPXtzdHlsZXMucGFnZX0+XHJcbiAgLy8gICAgICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuc2VjdGlvbn0+XHJcbiAgLy8gICAgICAgICAgIDwvVmlldz5cclxuICAvLyAgICAgICAgIDwvUGFnZT5cclxuICAvLyAgICAgICApKX1cclxuICAvLyAgIDwvRG9jdW1lbnQ+XHJcbiAgLy8gKTtcclxuXHJcbiAgcmV0dXJuIHVzZU1lbW8oXHJcbiAgICAoKSA9PiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPEV4aXRDb21wb25lbnQgLz5cclxuICAgICAgICA8ZGl2IHJlZj17Y29udGVudFJlZn0gY2xhc3NOYW1lPVwiaC1zY3JlZW4gdy1mdWxsIHJlbGF0aXZlIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY2lyY2xlc1wiPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgey8qIDEwICovfVxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB3LWZ1bGwgbWF4LXctc2NyZWVuLW1kIHJlbGF0aXZlIHBsLTYgcHItNiBtdC0xNiBwYi0yNFwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnlkYXJrIHRleHQtMnhsIG5vcm1hbDp0ZXh0LTN4bCBtdC0yIHBsLTIgZGFyazp0ZXh0LWJhY2tncm91bmQgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9naWZzL3BvcHBlci5naWZcIiBoZWlnaHQ9ezYwfSB3aWR0aD17NjB9IGNsYXNzTmFtZT1cImlubGluZS1ibG9jayByZWxhdGl2ZSBib3R0b20tNCBsZWZ0LTNcIiAvPlxyXG4gICAgICAgICAgICAgIENvbmdyYXR1bGF0aW9ucyFcclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnlkYXJrIHRleHQtYmFzZSBub3JtYWw6dGV4dC1sZyBwbC0yIGRhcms6dGV4dC1iYWNrZ3JvdW5kIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgTm93IHlvdSBjYW4gc2F2ZSB5b3VyIGlkZWEgYW5kIHNldCBvZmYgdG8gY29ucXVlciB0aGUgd29ybGRcclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9zdWNjZXNzLnN2Z1wiIGhlaWdodD17MjAwfSB3aWR0aD17MjAwfSBjbGFzc05hbWU9XCJtdC00XCIgLz5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ6LTEwIG1yLTQgbXQtNiBob3ZlcjpiZy1wcmltYXJ5IGhvdmVyOnRleHQtd2hpdGUgZGFyazpob3ZlcjpiZy1wcmltYXJ5ZGFyayBkYXJrOmhvdmVyOnRleHQtYmFja2dyb3VuZCBmb2N1czpvdXRsaW5lLW5vbmUgYm9yZGVyIGJvcmRlci1wcmltYXJ5IHRleHQtcHJpbWFyeSB0ZXh0LXNtIGZvbnQtbGlnaHQgcHktMiBweC04IHJvdW5kZWQtMnhsIGRhcms6dGV4dC1wcmltYXJ5ZGFyayBkYXJrOmJvcmRlci1wcmltYXJ5ZGFya1wiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtvblByb2plY3RMZWF2ZX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBCYWNrXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiei0xMCBtbC00IG10LTYgaG92ZXI6YmctcHJpbWFyeSBob3Zlcjp0ZXh0LXdoaXRlIGRhcms6aG92ZXI6YmctcHJpbWFyeWRhcmsgZGFyazpob3Zlcjp0ZXh0LWJhY2tncm91bmQgZm9jdXM6b3V0bGluZS1ub25lIGJvcmRlciBib3JkZXItcHJpbWFyeSB0ZXh0LXByaW1hcnkgdGV4dC1zbSBmb250LWxpZ2h0IHB5LTIgcHgtOCByb3VuZGVkLTJ4bCBkYXJrOnRleHQtcHJpbWFyeWRhcmsgZGFyazpib3JkZXItcHJpbWFyeWRhcmtcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17YXN5bmMgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCBkb2MgPSA8TXlEb2N1bWVudDEgZGF0YT17ZGF0YX0gLz47XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGFzUGRmID0gcGRmKFtdKTsgLy8ge30gaXMgaW1wb3J0YW50LCB0aHJvd3Mgd2l0aG91dCBhbiBhcmd1bWVudFxyXG4gICAgICAgICAgICAgICAgICBhc1BkZi51cGRhdGVDb250YWluZXIoZG9jKTtcclxuICAgICAgICAgICAgICAgICAgY29uc3QgYmxvYiA9IGF3YWl0IGFzUGRmLnRvQmxvYigpO1xyXG4gICAgICAgICAgICAgICAgICBzYXZlQXMoYmxvYiwgYCR7aWRlYU5hbWV9L2lkZWEtcGxhbi5wZGZgKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgU2F2ZVxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgey8qIDxidXR0b25cclxuICAgICAgICAgICAgb25DbGljaz17YXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IGRvYyA9IDxNeURvY3VtZW50IC8+O1xyXG4gICAgICAgICAgICAgIGNvbnN0IGFzUGRmID0gcGRmKFtdKTsgLy8ge30gaXMgaW1wb3J0YW50LCB0aHJvd3Mgd2l0aG91dCBhbiBhcmd1bWVudFxyXG4gICAgICAgICAgICAgIGFzUGRmLnVwZGF0ZUNvbnRhaW5lcihkb2MpO1xyXG4gICAgICAgICAgICAgIGNvbnN0IGJsb2IgPSBhd2FpdCBhc1BkZi50b0Jsb2IoKTtcclxuICAgICAgICAgICAgICBzYXZlQXMoYmxvYiwgYCR7aWRlYU5hbWV9LnBkZmApO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBEb3dubG9hZCBQREZcclxuICAgICAgICAgIDwvYnV0dG9uPiAqL31cclxuICAgICAgICAgICAgey8qIDxpbWcgc3JjPXtpbWFnZX0gaGVpZ2h0PXsyMDB9IHdpZHRoPXsyMDB9PjwvaW1nPiAqL31cclxuICAgICAgICAgICAgey8qIHtkYXRhICYmIChcclxuICAgICAgICAgICAgPFBERkRvd25sb2FkTGlua1xyXG4gICAgICAgICAgICAgIGRvY3VtZW50PXs8TXlEb2N1bWVudCAvPn1cclxuICAgICAgICAgICAgICBmaWxlTmFtZT0nc29tZW5hbWUucGRmJ1xyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgeyh7IGJsb2IsIHVybCwgbG9hZGluZywgZXJyb3IgfSkgPT5cclxuICAgICAgICAgICAgICAgIGxvYWRpbmcgPyAnTG9hZGluZyBkb2N1bWVudC4uLicgOiAnRG93bmxvYWQgbm93ISdcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvUERGRG93bmxvYWRMaW5rPlxyXG4gICAgICAgICAgKX0gKi99XHJcbiAgICAgICAgICAgIHsvKiB7bWFya2V0UHJvYmxlbVNlY3Rpb24gJiYgKFxyXG4gICAgICAgICAgPFBERlZpZXdlciBkYXRhPXttYXJrZXRQcm9ibGVtU2VjdGlvbn0+XHJcbiAgICAgICAgICAgIDxNeURvY3VtZW50IC8+XHJcbiAgICAgICAgICA8L1BERlZpZXdlcj5cclxuICAgICAgICApfSAqL31cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8Lz5cclxuICAgICksXHJcbiAgICBbZGF0YV1cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RhcnR1cFN1Y2Nlc3M7XHJcbiIsImltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZS9hcHAnO1xyXG5pbXBvcnQgJ2ZpcmViYXNlL2F1dGgnO1xyXG5pbXBvcnQgJ2ZpcmViYXNlL2ZpcmVzdG9yZSc7XHJcbmltcG9ydCAnZmlyZWJhc2Uvc3RvcmFnZSc7XHJcbmltcG9ydCAnZmlyZWJhc2UvZnVuY3Rpb25zJztcclxuXHJcbmlmICghZmlyZWJhc2UuYXBwcy5sZW5ndGgpIHtcclxuICBmaXJlYmFzZS5pbml0aWFsaXplQXBwKHtcclxuICAgIC8vIGFwaUtleTogJ0FJemFTeUN4X1QwRHFpeEwzQVhfUUxsLWo4WER5Z0dwOTFDLTMtUScsXHJcbiAgICAvLyBhdXRoRG9tYWluOiAnc3RhcnR1cC10ZXN0LTRkNjI1LmZpcmViYXNlYXBwLmNvbScsXHJcbiAgICAvLyBwcm9qZWN0SWQ6ICdzdGFydHVwLXRlc3QtNGQ2MjUnLFxyXG4gICAgLy8gc3RvcmFnZUJ1Y2tldDogJ3N0YXJ0dXAtdGVzdC00ZDYyNS5hcHBzcG90LmNvbScsXHJcbiAgICAvLyBtZXNzYWdpbmdTZW5kZXJJZDogJzQ3MjQxNjE1MDI0MCcsXHJcbiAgICAvLyBhcHBJZDogJzE6NDcyNDE2MTUwMjQwOndlYjpiMmExMjhhZDI3YWZmZmRkZjNlNjg1JyxcclxuICAgIGFwaUtleTogJ0FJemFTeUJPU2Z1QWY3VkFLOVllYzIwbEdyRF82YnE1TU5SbTlzRScsXHJcbiAgICBhdXRoRG9tYWluOiAnc2Fhcy1zdGFydHVwLWE1YTM0LmZpcmViYXNlYXBwLmNvbScsXHJcbiAgICBwcm9qZWN0SWQ6ICdzYWFzLXN0YXJ0dXAtYTVhMzQnLFxyXG4gICAgc3RvcmFnZUJ1Y2tldDogJ3NhYXMtc3RhcnR1cC1hNWEzNC5hcHBzcG90LmNvbScsXHJcbiAgICBtZXNzYWdpbmdTZW5kZXJJZDogJzg2NDIxNzU3NDYyNScsXHJcbiAgICBhcHBJZDogJzE6ODY0MjE3NTc0NjI1OndlYjoxOWNmNTkwMTA5ZWY1MGRkOTM1YmEwJyxcclxuICAgIG1lYXN1cmVtZW50SWQ6ICdHLVFLWkpQVEtNUzQnLFxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmaXJlYmFzZTtcclxuZXhwb3J0IGNvbnN0IGF1dGggPSBmaXJlYmFzZS5hdXRoKCk7XHJcbmV4cG9ydCBjb25zdCBkYiA9IGZpcmViYXNlLmZpcmVzdG9yZSgpO1xyXG5leHBvcnQgY29uc3Qgc3RvcmFnZSA9IGZpcmViYXNlLnN0b3JhZ2UoKTtcclxuIiwiaW1wb3J0IGZpcmViYXNlLCB7IGF1dGgsIGRiIH0gZnJvbSAnLi4vbGliL2ZpcmViYXNlJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIGNyZWF0ZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmV4cG9ydCBjb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTsgLy8gVHV0YWogbW/FvG5hIHVtaWXFm2NpxIcgZGVmYXVsdCBWYWx1ZVxyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUF1dGggPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IEF1dGhQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBbY3VycmVudFVzZXIsIHNldEN1cnJlbnRVc2VyXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVVzZXIgPSBhc3luYyAodXNlcikgPT4ge1xyXG4gICAgaWYgKHVzZXIpIHtcclxuICAgICAgLy8gY29uc29sZS5sb2coJ3VzZXIgLSAnLCB1c2VyKTtcclxuICAgICAgLy8gY29uc29sZS5sb2coJ3VzZXIgbmFtZSAtICcsIG5hbWUpO1xyXG4gICAgICBjb25zdCBmb3JtYXRlZFVzZXIgPSBhd2FpdCBmb3JtYXRVc2VyKHVzZXIpO1xyXG5cclxuICAgICAgLy8gY29uc3QgZGVjb2RlZFRva2VuID0gYXdhaXQgZmlyZWJhc2UuYXV0aCgpLmN1cnJlbnRVc2VyLmdldElkVG9rZW5SZXN1bHQoKTtcclxuICAgICAgLy8gY29uc29sZS5sb2coZGVjb2RlZFRva2VuLmNsYWltcy5zdHJpcGVSb2xlKTtcclxuXHJcbiAgICAgIGRiLmNvbGxlY3Rpb24oJ3VzZXJzJykuZG9jKHVzZXIudWlkKS5zZXQoeyBmb3JtYXRlZFVzZXIgfSwgeyBtZXJnZTogdHJ1ZSB9KTtcclxuXHJcbiAgICAgIHNldEN1cnJlbnRVc2VyKGZvcm1hdGVkVXNlcik7XHJcbiAgICAgIC8vIENvb2tpZXMuc2V0KCd0b2tlbicsIHVzZXIuemEsIHRydWUpO1xyXG4gICAgICBDb29raWVzLnNldCgndWlkJywgdXNlci51aWQpO1xyXG5cclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIHJldHVybiBmb3JtYXRlZFVzZXI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRDdXJyZW50VXNlcihmYWxzZSk7XHJcbiAgICAgIC8vIENvb2tpZXMucmVtb3ZlKCd0b2tlbicsIHVzZXIuemEpO1xyXG4gICAgICBDb29raWVzLnJlbW92ZSgndWlkJyk7XHJcblxyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNpZ25VcCA9IGFzeW5jIChlbWFpbCwgcGFzc3dvcmQpID0+IHtcclxuICAgIHJldHVybiBhd2FpdCBhdXRoLmNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiBoYW5kbGVVc2VyKHJlc3BvbnNlLnVzZXIpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbG9nSW4gPSAoZW1haWwsIHBhc3N3b3JkKSA9PiB7XHJcbiAgICByZXR1cm4gYXV0aC5zaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGxvZ091dCA9ICgpID0+IHtcclxuICAgIHJldHVybiBhdXRoLnNpZ25PdXQoKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdW5zdWJzY3JpYmUgPSBhdXRoLm9uSWRUb2tlbkNoYW5nZWQoaGFuZGxlVXNlcik7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHVuc3Vic2NyaWJlKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCB2YWx1ZSA9IHtcclxuICAgIGN1cnJlbnRVc2VyLFxyXG4gICAgc2lnblVwLFxyXG4gICAgbG9nSW4sXHJcbiAgICBsb2dPdXQsXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0U3RyaXBlUm9sZSA9IGFzeW5jICgpID0+IHtcclxuICAgIGF3YWl0IGZpcmViYXNlLmF1dGgoKS5jdXJyZW50VXNlci5nZXRJZFRva2VuKHRydWUpO1xyXG4gICAgY29uc3QgZGVjb2RlZFRva2VuID0gYXdhaXQgZmlyZWJhc2UuYXV0aCgpLmN1cnJlbnRVc2VyLmdldElkVG9rZW5SZXN1bHQoKTtcclxuICAgIHJldHVybiBkZWNvZGVkVG9rZW4uY2xhaW1zLnN0cmlwZVJvbGUgfHwgJ2ZyZWUnO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZvcm1hdFVzZXIgPSBhc3luYyAodXNlcikgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ09GRiAtICcsIHVzZXIpO1xyXG4gICAgY29uc3QgdG9rZW4gPSBhd2FpdCB1c2VyLmdldElkVG9rZW4oKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHVpZDogdXNlci51aWQsXHJcbiAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxyXG4gICAgICAvLyBuYW1lLFxyXG4gICAgICAvLyB0b2tlbjogdXNlci56YSwgLy8gdG9rZW4gSldULCBnZW5lcm93YW55IGF1dG9tYXR5Y3puaWUgcHJ6ZXogZmlyZWJhc2UgcHJ6eSB6YWvFgmFkYW5pdSBrb250YVxyXG4gICAgICBwcm92aWRlcjogdXNlci5wcm92aWRlckRhdGFbMF0ucHJvdmlkZXJJZCxcclxuICAgICAgc3RyaXBlUm9sZTogYXdhaXQgZ2V0U3RyaXBlUm9sZSgpLFxyXG4gICAgICB0b2tlbixcclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17dmFsdWV9PnshbG9hZGluZyAmJiBjaGlsZHJlbn08L0F1dGhDb250ZXh0LlByb3ZpZGVyPjtcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL2hlYWQnXG5pbXBvcnQgeyB0b0Jhc2U2NCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0J1xuaW1wb3J0IHtcbiAgSW1hZ2VDb25maWcsXG4gIGltYWdlQ29uZmlnRGVmYXVsdCxcbiAgTG9hZGVyVmFsdWUsXG4gIFZBTElEX0xPQURFUlMsXG59IGZyb20gJy4uL25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcnXG5pbXBvcnQgeyB1c2VJbnRlcnNlY3Rpb24gfSBmcm9tICcuL3VzZS1pbnRlcnNlY3Rpb24nXG5cbmlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICA7KGdsb2JhbCBhcyBhbnkpLl9fTkVYVF9JTUFHRV9JTVBPUlRFRCA9IHRydWVcbn1cblxuY29uc3QgVkFMSURfTE9BRElOR19WQUxVRVMgPSBbJ2xhenknLCAnZWFnZXInLCB1bmRlZmluZWRdIGFzIGNvbnN0XG50eXBlIExvYWRpbmdWYWx1ZSA9IHR5cGVvZiBWQUxJRF9MT0FESU5HX1ZBTFVFU1tudW1iZXJdXG5cbmV4cG9ydCB0eXBlIEltYWdlTG9hZGVyID0gKHJlc29sdmVyUHJvcHM6IEltYWdlTG9hZGVyUHJvcHMpID0+IHN0cmluZ1xuXG5leHBvcnQgdHlwZSBJbWFnZUxvYWRlclByb3BzID0ge1xuICBzcmM6IHN0cmluZ1xuICB3aWR0aDogbnVtYmVyXG4gIHF1YWxpdHk/OiBudW1iZXJcbn1cblxudHlwZSBEZWZhdWx0SW1hZ2VMb2FkZXJQcm9wcyA9IEltYWdlTG9hZGVyUHJvcHMgJiB7IHJvb3Q6IHN0cmluZyB9XG5cbmNvbnN0IGxvYWRlcnMgPSBuZXcgTWFwPFxuICBMb2FkZXJWYWx1ZSxcbiAgKHByb3BzOiBEZWZhdWx0SW1hZ2VMb2FkZXJQcm9wcykgPT4gc3RyaW5nXG4+KFtcbiAgWydpbWdpeCcsIGltZ2l4TG9hZGVyXSxcbiAgWydjbG91ZGluYXJ5JywgY2xvdWRpbmFyeUxvYWRlcl0sXG4gIFsnYWthbWFpJywgYWthbWFpTG9hZGVyXSxcbiAgWydkZWZhdWx0JywgZGVmYXVsdExvYWRlcl0sXG5dKVxuXG5jb25zdCBWQUxJRF9MQVlPVVRfVkFMVUVTID0gW1xuICAnZmlsbCcsXG4gICdmaXhlZCcsXG4gICdpbnRyaW5zaWMnLFxuICAncmVzcG9uc2l2ZScsXG4gIHVuZGVmaW5lZCxcbl0gYXMgY29uc3RcbnR5cGUgTGF5b3V0VmFsdWUgPSB0eXBlb2YgVkFMSURfTEFZT1VUX1ZBTFVFU1tudW1iZXJdXG5cbnR5cGUgSW1nRWxlbWVudFN0eWxlID0gTm9uTnVsbGFibGU8SlNYLkludHJpbnNpY0VsZW1lbnRzWydpbWcnXVsnc3R5bGUnXT5cblxuZXhwb3J0IHR5cGUgSW1hZ2VQcm9wcyA9IE9taXQ8XG4gIEpTWC5JbnRyaW5zaWNFbGVtZW50c1snaW1nJ10sXG4gICdzcmMnIHwgJ3NyY1NldCcgfCAncmVmJyB8ICd3aWR0aCcgfCAnaGVpZ2h0JyB8ICdsb2FkaW5nJyB8ICdzdHlsZSdcbj4gJiB7XG4gIHNyYzogc3RyaW5nXG4gIGxvYWRlcj86IEltYWdlTG9hZGVyXG4gIHF1YWxpdHk/OiBudW1iZXIgfCBzdHJpbmdcbiAgcHJpb3JpdHk/OiBib29sZWFuXG4gIGxvYWRpbmc/OiBMb2FkaW5nVmFsdWVcbiAgdW5vcHRpbWl6ZWQ/OiBib29sZWFuXG4gIG9iamVjdEZpdD86IEltZ0VsZW1lbnRTdHlsZVsnb2JqZWN0Rml0J11cbiAgb2JqZWN0UG9zaXRpb24/OiBJbWdFbGVtZW50U3R5bGVbJ29iamVjdFBvc2l0aW9uJ11cbn0gJiAoXG4gICAgfCB7XG4gICAgICAgIHdpZHRoPzogbmV2ZXJcbiAgICAgICAgaGVpZ2h0PzogbmV2ZXJcbiAgICAgICAgLyoqIEBkZXByZWNhdGVkIFVzZSBgbGF5b3V0PVwiZmlsbFwiYCBpbnN0ZWFkICovXG4gICAgICAgIHVuc2l6ZWQ6IHRydWVcbiAgICAgIH1cbiAgICB8IHsgd2lkdGg/OiBuZXZlcjsgaGVpZ2h0PzogbmV2ZXI7IGxheW91dDogJ2ZpbGwnIH1cbiAgICB8IHtcbiAgICAgICAgd2lkdGg6IG51bWJlciB8IHN0cmluZ1xuICAgICAgICBoZWlnaHQ6IG51bWJlciB8IHN0cmluZ1xuICAgICAgICBsYXlvdXQ/OiBFeGNsdWRlPExheW91dFZhbHVlLCAnZmlsbCc+XG4gICAgICB9XG4gIClcblxuY29uc3Qge1xuICBkZXZpY2VTaXplczogY29uZmlnRGV2aWNlU2l6ZXMsXG4gIGltYWdlU2l6ZXM6IGNvbmZpZ0ltYWdlU2l6ZXMsXG4gIGxvYWRlcjogY29uZmlnTG9hZGVyLFxuICBwYXRoOiBjb25maWdQYXRoLFxuICBkb21haW5zOiBjb25maWdEb21haW5zLFxufSA9XG4gICgocHJvY2Vzcy5lbnYuX19ORVhUX0lNQUdFX09QVFMgYXMgYW55KSBhcyBJbWFnZUNvbmZpZykgfHwgaW1hZ2VDb25maWdEZWZhdWx0XG4vLyBzb3J0IHNtYWxsZXN0IHRvIGxhcmdlc3RcbmNvbnN0IGFsbFNpemVzID0gWy4uLmNvbmZpZ0RldmljZVNpemVzLCAuLi5jb25maWdJbWFnZVNpemVzXVxuY29uZmlnRGV2aWNlU2l6ZXMuc29ydCgoYSwgYikgPT4gYSAtIGIpXG5hbGxTaXplcy5zb3J0KChhLCBiKSA9PiBhIC0gYilcblxuZnVuY3Rpb24gZ2V0V2lkdGhzKFxuICB3aWR0aDogbnVtYmVyIHwgdW5kZWZpbmVkLFxuICBsYXlvdXQ6IExheW91dFZhbHVlLFxuICBzaXplczogc3RyaW5nIHwgdW5kZWZpbmVkXG4pOiB7IHdpZHRoczogbnVtYmVyW107IGtpbmQ6ICd3JyB8ICd4JyB9IHtcbiAgaWYgKHNpemVzICYmIChsYXlvdXQgPT09ICdmaWxsJyB8fCBsYXlvdXQgPT09ICdyZXNwb25zaXZlJykpIHtcbiAgICAvLyBGaW5kIGFsbCB0aGUgXCJ2d1wiIHBlcmNlbnQgc2l6ZXMgdXNlZCBpbiB0aGUgc2l6ZXMgcHJvcFxuICAgIGNvbnN0IHBlcmNlbnRTaXplcyA9IFsuLi5zaXplcy5tYXRjaEFsbCgvKF58XFxzKSgxP1xcZD9cXGQpdncvZyldLm1hcCgobSkgPT5cbiAgICAgIHBhcnNlSW50KG1bMl0pXG4gICAgKVxuICAgIGlmIChwZXJjZW50U2l6ZXMubGVuZ3RoKSB7XG4gICAgICBjb25zdCBzbWFsbGVzdFJhdGlvID0gTWF0aC5taW4oLi4ucGVyY2VudFNpemVzKSAqIDAuMDFcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdpZHRoczogYWxsU2l6ZXMuZmlsdGVyKFxuICAgICAgICAgIChzKSA9PiBzID49IGNvbmZpZ0RldmljZVNpemVzWzBdICogc21hbGxlc3RSYXRpb1xuICAgICAgICApLFxuICAgICAgICBraW5kOiAndycsXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7IHdpZHRoczogYWxsU2l6ZXMsIGtpbmQ6ICd3JyB9XG4gIH1cbiAgaWYgKFxuICAgIHR5cGVvZiB3aWR0aCAhPT0gJ251bWJlcicgfHxcbiAgICBsYXlvdXQgPT09ICdmaWxsJyB8fFxuICAgIGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnXG4gICkge1xuICAgIHJldHVybiB7IHdpZHRoczogY29uZmlnRGV2aWNlU2l6ZXMsIGtpbmQ6ICd3JyB9XG4gIH1cblxuICBjb25zdCB3aWR0aHMgPSBbXG4gICAgLi4ubmV3IFNldChcbiAgICAgIC8vID4gVGhpcyBtZWFucyB0aGF0IG1vc3QgT0xFRCBzY3JlZW5zIHRoYXQgc2F5IHRoZXkgYXJlIDN4IHJlc29sdXRpb24sXG4gICAgICAvLyA+IGFyZSBhY3R1YWxseSAzeCBpbiB0aGUgZ3JlZW4gY29sb3IsIGJ1dCBvbmx5IDEuNXggaW4gdGhlIHJlZCBhbmRcbiAgICAgIC8vID4gYmx1ZSBjb2xvcnMuIFNob3dpbmcgYSAzeCByZXNvbHV0aW9uIGltYWdlIGluIHRoZSBhcHAgdnMgYSAyeFxuICAgICAgLy8gPiByZXNvbHV0aW9uIGltYWdlIHdpbGwgYmUgdmlzdWFsbHkgdGhlIHNhbWUsIHRob3VnaCB0aGUgM3ggaW1hZ2VcbiAgICAgIC8vID4gdGFrZXMgc2lnbmlmaWNhbnRseSBtb3JlIGRhdGEuIEV2ZW4gdHJ1ZSAzeCByZXNvbHV0aW9uIHNjcmVlbnMgYXJlXG4gICAgICAvLyA+IHdhc3RlZnVsIGFzIHRoZSBodW1hbiBleWUgY2Fubm90IHNlZSB0aGF0IGxldmVsIG9mIGRldGFpbCB3aXRob3V0XG4gICAgICAvLyA+IHNvbWV0aGluZyBsaWtlIGEgbWFnbmlmeWluZyBnbGFzcy5cbiAgICAgIC8vIGh0dHBzOi8vYmxvZy50d2l0dGVyLmNvbS9lbmdpbmVlcmluZy9lbl91cy90b3BpY3MvaW5mcmFzdHJ1Y3R1cmUvMjAxOS9jYXBwaW5nLWltYWdlLWZpZGVsaXR5LW9uLXVsdHJhLWhpZ2gtcmVzb2x1dGlvbi1kZXZpY2VzLmh0bWxcbiAgICAgIFt3aWR0aCwgd2lkdGggKiAyIC8qLCB3aWR0aCAqIDMqL10ubWFwKFxuICAgICAgICAodykgPT4gYWxsU2l6ZXMuZmluZCgocCkgPT4gcCA+PSB3KSB8fCBhbGxTaXplc1thbGxTaXplcy5sZW5ndGggLSAxXVxuICAgICAgKVxuICAgICksXG4gIF1cbiAgcmV0dXJuIHsgd2lkdGhzLCBraW5kOiAneCcgfVxufVxuXG50eXBlIEdlbkltZ0F0dHJzRGF0YSA9IHtcbiAgc3JjOiBzdHJpbmdcbiAgdW5vcHRpbWl6ZWQ6IGJvb2xlYW5cbiAgbGF5b3V0OiBMYXlvdXRWYWx1ZVxuICBsb2FkZXI6IEltYWdlTG9hZGVyXG4gIHdpZHRoPzogbnVtYmVyXG4gIHF1YWxpdHk/OiBudW1iZXJcbiAgc2l6ZXM/OiBzdHJpbmdcbn1cblxudHlwZSBHZW5JbWdBdHRyc1Jlc3VsdCA9IHtcbiAgc3JjOiBzdHJpbmdcbiAgc3JjU2V0OiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgc2l6ZXM6IHN0cmluZyB8IHVuZGVmaW5lZFxufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUltZ0F0dHJzKHtcbiAgc3JjLFxuICB1bm9wdGltaXplZCxcbiAgbGF5b3V0LFxuICB3aWR0aCxcbiAgcXVhbGl0eSxcbiAgc2l6ZXMsXG4gIGxvYWRlcixcbn06IEdlbkltZ0F0dHJzRGF0YSk6IEdlbkltZ0F0dHJzUmVzdWx0IHtcbiAgaWYgKHVub3B0aW1pemVkKSB7XG4gICAgcmV0dXJuIHsgc3JjLCBzcmNTZXQ6IHVuZGVmaW5lZCwgc2l6ZXM6IHVuZGVmaW5lZCB9XG4gIH1cblxuICBjb25zdCB7IHdpZHRocywga2luZCB9ID0gZ2V0V2lkdGhzKHdpZHRoLCBsYXlvdXQsIHNpemVzKVxuICBjb25zdCBsYXN0ID0gd2lkdGhzLmxlbmd0aCAtIDFcblxuICByZXR1cm4ge1xuICAgIHNpemVzOiAhc2l6ZXMgJiYga2luZCA9PT0gJ3cnID8gJzEwMHZ3JyA6IHNpemVzLFxuICAgIHNyY1NldDogd2lkdGhzXG4gICAgICAubWFwKFxuICAgICAgICAodywgaSkgPT5cbiAgICAgICAgICBgJHtsb2FkZXIoeyBzcmMsIHF1YWxpdHksIHdpZHRoOiB3IH0pfSAke1xuICAgICAgICAgICAga2luZCA9PT0gJ3cnID8gdyA6IGkgKyAxXG4gICAgICAgICAgfSR7a2luZH1gXG4gICAgICApXG4gICAgICAuam9pbignLCAnKSxcblxuICAgIC8vIEl0J3MgaW50ZW5kZWQgdG8ga2VlcCBgc3JjYCB0aGUgbGFzdCBhdHRyaWJ1dGUgYmVjYXVzZSBSZWFjdCB1cGRhdGVzXG4gICAgLy8gYXR0cmlidXRlcyBpbiBvcmRlci4gSWYgd2Uga2VlcCBgc3JjYCB0aGUgZmlyc3Qgb25lLCBTYWZhcmkgd2lsbFxuICAgIC8vIGltbWVkaWF0ZWx5IHN0YXJ0IHRvIGZldGNoIGBzcmNgLCBiZWZvcmUgYHNpemVzYCBhbmQgYHNyY1NldGAgYXJlIGV2ZW5cbiAgICAvLyB1cGRhdGVkIGJ5IFJlYWN0LiBUaGF0IGNhdXNlcyBtdWx0aXBsZSB1bm5lY2Vzc2FyeSByZXF1ZXN0cyBpZiBgc3JjU2V0YFxuICAgIC8vIGFuZCBgc2l6ZXNgIGFyZSBkZWZpbmVkLlxuICAgIC8vIFRoaXMgYnVnIGNhbm5vdCBiZSByZXByb2R1Y2VkIGluIENocm9tZSBvciBGaXJlZm94LlxuICAgIHNyYzogbG9hZGVyKHsgc3JjLCBxdWFsaXR5LCB3aWR0aDogd2lkdGhzW2xhc3RdIH0pLFxuICB9XG59XG5cbmZ1bmN0aW9uIGdldEludCh4OiB1bmtub3duKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgaWYgKHR5cGVvZiB4ID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiB4XG4gIH1cbiAgaWYgKHR5cGVvZiB4ID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBwYXJzZUludCh4LCAxMClcbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkXG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRJbWFnZUxvYWRlcihsb2FkZXJQcm9wczogSW1hZ2VMb2FkZXJQcm9wcykge1xuICBjb25zdCBsb2FkID0gbG9hZGVycy5nZXQoY29uZmlnTG9hZGVyKVxuICBpZiAobG9hZCkge1xuICAgIHJldHVybiBsb2FkKHsgcm9vdDogY29uZmlnUGF0aCwgLi4ubG9hZGVyUHJvcHMgfSlcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgYFVua25vd24gXCJsb2FkZXJcIiBmb3VuZCBpbiBcIm5leHQuY29uZmlnLmpzXCIuIEV4cGVjdGVkOiAke1ZBTElEX0xPQURFUlMuam9pbihcbiAgICAgICcsICdcbiAgICApfS4gUmVjZWl2ZWQ6ICR7Y29uZmlnTG9hZGVyfWBcbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbWFnZSh7XG4gIHNyYyxcbiAgc2l6ZXMsXG4gIHVub3B0aW1pemVkID0gZmFsc2UsXG4gIHByaW9yaXR5ID0gZmFsc2UsXG4gIGxvYWRpbmcsXG4gIGNsYXNzTmFtZSxcbiAgcXVhbGl0eSxcbiAgd2lkdGgsXG4gIGhlaWdodCxcbiAgb2JqZWN0Rml0LFxuICBvYmplY3RQb3NpdGlvbixcbiAgbG9hZGVyID0gZGVmYXVsdEltYWdlTG9hZGVyLFxuICAuLi5hbGxcbn06IEltYWdlUHJvcHMpIHtcbiAgbGV0IHJlc3Q6IFBhcnRpYWw8SW1hZ2VQcm9wcz4gPSBhbGxcbiAgbGV0IGxheW91dDogTm9uTnVsbGFibGU8TGF5b3V0VmFsdWU+ID0gc2l6ZXMgPyAncmVzcG9uc2l2ZScgOiAnaW50cmluc2ljJ1xuICBsZXQgdW5zaXplZCA9IGZhbHNlXG4gIGlmICgndW5zaXplZCcgaW4gcmVzdCkge1xuICAgIHVuc2l6ZWQgPSBCb29sZWFuKHJlc3QudW5zaXplZClcbiAgICAvLyBSZW1vdmUgcHJvcGVydHkgc28gaXQncyBub3Qgc3ByZWFkIGludG8gaW1hZ2U6XG4gICAgZGVsZXRlIHJlc3RbJ3Vuc2l6ZWQnXVxuICB9IGVsc2UgaWYgKCdsYXlvdXQnIGluIHJlc3QpIHtcbiAgICAvLyBPdmVycmlkZSBkZWZhdWx0IGxheW91dCBpZiB0aGUgdXNlciBzcGVjaWZpZWQgb25lOlxuICAgIGlmIChyZXN0LmxheW91dCkgbGF5b3V0ID0gcmVzdC5sYXlvdXRcblxuICAgIC8vIFJlbW92ZSBwcm9wZXJ0eSBzbyBpdCdzIG5vdCBzcHJlYWQgaW50byBpbWFnZTpcbiAgICBkZWxldGUgcmVzdFsnbGF5b3V0J11cbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKCFzcmMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIGlzIG1pc3NpbmcgcmVxdWlyZWQgXCJzcmNcIiBwcm9wZXJ0eS4gTWFrZSBzdXJlIHlvdSBwYXNzIFwic3JjXCIgaW4gcHJvcHMgdG8gdGhlIFxcYG5leHQvaW1hZ2VcXGAgY29tcG9uZW50LiBSZWNlaXZlZDogJHtKU09OLnN0cmluZ2lmeShcbiAgICAgICAgICB7IHdpZHRoLCBoZWlnaHQsIHF1YWxpdHkgfVxuICAgICAgICApfWBcbiAgICAgIClcbiAgICB9XG4gICAgaWYgKCFWQUxJRF9MQVlPVVRfVkFMVUVTLmluY2x1ZGVzKGxheW91dCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJsYXlvdXRcIiBwcm9wZXJ0eS4gUHJvdmlkZWQgXCIke2xheW91dH1cIiBzaG91bGQgYmUgb25lIG9mICR7VkFMSURfTEFZT1VUX1ZBTFVFUy5tYXAoXG4gICAgICAgICAgU3RyaW5nXG4gICAgICAgICkuam9pbignLCcpfS5gXG4gICAgICApXG4gICAgfVxuICAgIGlmICghVkFMSURfTE9BRElOR19WQUxVRVMuaW5jbHVkZXMobG9hZGluZykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJsb2FkaW5nXCIgcHJvcGVydHkuIFByb3ZpZGVkIFwiJHtsb2FkaW5nfVwiIHNob3VsZCBiZSBvbmUgb2YgJHtWQUxJRF9MT0FESU5HX1ZBTFVFUy5tYXAoXG4gICAgICAgICAgU3RyaW5nXG4gICAgICAgICkuam9pbignLCcpfS5gXG4gICAgICApXG4gICAgfVxuICAgIGlmIChwcmlvcml0eSAmJiBsb2FkaW5nID09PSAnbGF6eScpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGJvdGggXCJwcmlvcml0eVwiIGFuZCBcImxvYWRpbmc9J2xhenknXCIgcHJvcGVydGllcy4gT25seSBvbmUgc2hvdWxkIGJlIHVzZWQuYFxuICAgICAgKVxuICAgIH1cbiAgICBpZiAodW5zaXplZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgZGVwcmVjYXRlZCBcInVuc2l6ZWRcIiBwcm9wZXJ0eSwgd2hpY2ggd2FzIHJlbW92ZWQgaW4gZmF2b3Igb2YgdGhlIFwibGF5b3V0PSdmaWxsJ1wiIHByb3BlcnR5YFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGxldCBpc0xhenkgPVxuICAgICFwcmlvcml0eSAmJiAobG9hZGluZyA9PT0gJ2xhenknIHx8IHR5cGVvZiBsb2FkaW5nID09PSAndW5kZWZpbmVkJylcbiAgaWYgKHNyYyAmJiBzcmMuc3RhcnRzV2l0aCgnZGF0YTonKSkge1xuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUVFAvQmFzaWNzX29mX0hUVFAvRGF0YV9VUklzXG4gICAgdW5vcHRpbWl6ZWQgPSB0cnVlXG4gICAgaXNMYXp5ID0gZmFsc2VcbiAgfVxuXG4gIGNvbnN0IFtzZXRSZWYsIGlzSW50ZXJzZWN0ZWRdID0gdXNlSW50ZXJzZWN0aW9uPEhUTUxJbWFnZUVsZW1lbnQ+KHtcbiAgICByb290TWFyZ2luOiAnMjAwcHgnLFxuICAgIGRpc2FibGVkOiAhaXNMYXp5LFxuICB9KVxuICBjb25zdCBpc1Zpc2libGUgPSAhaXNMYXp5IHx8IGlzSW50ZXJzZWN0ZWRcblxuICBjb25zdCB3aWR0aEludCA9IGdldEludCh3aWR0aClcbiAgY29uc3QgaGVpZ2h0SW50ID0gZ2V0SW50KGhlaWdodClcbiAgY29uc3QgcXVhbGl0eUludCA9IGdldEludChxdWFsaXR5KVxuXG4gIGxldCB3cmFwcGVyU3R5bGU6IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snZGl2J11bJ3N0eWxlJ10gfCB1bmRlZmluZWRcbiAgbGV0IHNpemVyU3R5bGU6IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snZGl2J11bJ3N0eWxlJ10gfCB1bmRlZmluZWRcbiAgbGV0IHNpemVyU3ZnOiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgbGV0IGltZ1N0eWxlOiBJbWdFbGVtZW50U3R5bGUgfCB1bmRlZmluZWQgPSB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiAwLFxuICAgIGxlZnQ6IDAsXG4gICAgYm90dG9tOiAwLFxuICAgIHJpZ2h0OiAwLFxuXG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgcGFkZGluZzogMCxcbiAgICBib3JkZXI6ICdub25lJyxcbiAgICBtYXJnaW46ICdhdXRvJyxcblxuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgd2lkdGg6IDAsXG4gICAgaGVpZ2h0OiAwLFxuICAgIG1pbldpZHRoOiAnMTAwJScsXG4gICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICBtaW5IZWlnaHQ6ICcxMDAlJyxcbiAgICBtYXhIZWlnaHQ6ICcxMDAlJyxcblxuICAgIG9iamVjdEZpdCxcbiAgICBvYmplY3RQb3NpdGlvbixcbiAgfVxuICBpZiAoXG4gICAgdHlwZW9mIHdpZHRoSW50ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIHR5cGVvZiBoZWlnaHRJbnQgIT09ICd1bmRlZmluZWQnICYmXG4gICAgbGF5b3V0ICE9PSAnZmlsbCdcbiAgKSB7XG4gICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiAvPlxuICAgIGNvbnN0IHF1b3RpZW50ID0gaGVpZ2h0SW50IC8gd2lkdGhJbnRcbiAgICBjb25zdCBwYWRkaW5nVG9wID0gaXNOYU4ocXVvdGllbnQpID8gJzEwMCUnIDogYCR7cXVvdGllbnQgKiAxMDB9JWBcbiAgICBpZiAobGF5b3V0ID09PSAncmVzcG9uc2l2ZScpIHtcbiAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwicmVzcG9uc2l2ZVwiIC8+XG4gICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG5cbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgIG1hcmdpbjogMCxcbiAgICAgIH1cbiAgICAgIHNpemVyU3R5bGUgPSB7IGRpc3BsYXk6ICdibG9jaycsIGJveFNpemluZzogJ2JvcmRlci1ib3gnLCBwYWRkaW5nVG9wIH1cbiAgICB9IGVsc2UgaWYgKGxheW91dCA9PT0gJ2ludHJpbnNpYycpIHtcbiAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwiaW50cmluc2ljXCIgLz5cbiAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICBtYXJnaW46IDAsXG4gICAgICB9XG4gICAgICBzaXplclN0eWxlID0ge1xuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgIH1cbiAgICAgIHNpemVyU3ZnID0gYDxzdmcgd2lkdGg9XCIke3dpZHRoSW50fVwiIGhlaWdodD1cIiR7aGVpZ2h0SW50fVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2ZXJzaW9uPVwiMS4xXCIvPmBcbiAgICB9IGVsc2UgaWYgKGxheW91dCA9PT0gJ2ZpeGVkJykge1xuICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJmaXhlZFwiIC8+XG4gICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgd2lkdGg6IHdpZHRoSW50LFxuICAgICAgICBoZWlnaHQ6IGhlaWdodEludCxcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAoXG4gICAgdHlwZW9mIHdpZHRoSW50ID09PSAndW5kZWZpbmVkJyAmJlxuICAgIHR5cGVvZiBoZWlnaHRJbnQgPT09ICd1bmRlZmluZWQnICYmXG4gICAgbGF5b3V0ID09PSAnZmlsbCdcbiAgKSB7XG4gICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgbGF5b3V0PVwiZmlsbFwiIC8+XG4gICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcblxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICB0b3A6IDAsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgYm90dG9tOiAwLFxuICAgICAgcmlnaHQ6IDAsXG5cbiAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgbWFyZ2luOiAwLFxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiAvPlxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIG11c3QgdXNlIFwid2lkdGhcIiBhbmQgXCJoZWlnaHRcIiBwcm9wZXJ0aWVzIG9yIFwibGF5b3V0PSdmaWxsJ1wiIHByb3BlcnR5LmBcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBsZXQgaW1nQXR0cmlidXRlczogR2VuSW1nQXR0cnNSZXN1bHQgPSB7XG4gICAgc3JjOlxuICAgICAgJ2RhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEFRQUJBSUFBQUFBQUFQLy8veUg1QkFFQUFBQUFMQUFBQUFBQkFBRUFBQUlCUkFBNycsXG4gICAgc3JjU2V0OiB1bmRlZmluZWQsXG4gICAgc2l6ZXM6IHVuZGVmaW5lZCxcbiAgfVxuXG4gIGlmIChpc1Zpc2libGUpIHtcbiAgICBpbWdBdHRyaWJ1dGVzID0gZ2VuZXJhdGVJbWdBdHRycyh7XG4gICAgICBzcmMsXG4gICAgICB1bm9wdGltaXplZCxcbiAgICAgIGxheW91dCxcbiAgICAgIHdpZHRoOiB3aWR0aEludCxcbiAgICAgIHF1YWxpdHk6IHF1YWxpdHlJbnQsXG4gICAgICBzaXplcyxcbiAgICAgIGxvYWRlcixcbiAgICB9KVxuICB9XG5cbiAgaWYgKHVuc2l6ZWQpIHtcbiAgICB3cmFwcGVyU3R5bGUgPSB1bmRlZmluZWRcbiAgICBzaXplclN0eWxlID0gdW5kZWZpbmVkXG4gICAgaW1nU3R5bGUgPSB1bmRlZmluZWRcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3dyYXBwZXJTdHlsZX0+XG4gICAgICB7c2l6ZXJTdHlsZSA/IChcbiAgICAgICAgPGRpdiBzdHlsZT17c2l6ZXJTdHlsZX0+XG4gICAgICAgICAge3NpemVyU3ZnID8gKFxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAsXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgYXJpYS1oaWRkZW49e3RydWV9XG4gICAgICAgICAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxuICAgICAgICAgICAgICBzcmM9e2BkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LCR7dG9CYXNlNjQoc2l6ZXJTdmcpfWB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiBudWxsfVxuICAgICAgeyFpc1Zpc2libGUgJiYgKFxuICAgICAgICA8bm9zY3JpcHQ+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgICAgICB7Li4uZ2VuZXJhdGVJbWdBdHRycyh7XG4gICAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgICAgdW5vcHRpbWl6ZWQsXG4gICAgICAgICAgICAgIGxheW91dCxcbiAgICAgICAgICAgICAgd2lkdGg6IHdpZHRoSW50LFxuICAgICAgICAgICAgICBxdWFsaXR5OiBxdWFsaXR5SW50LFxuICAgICAgICAgICAgICBzaXplcyxcbiAgICAgICAgICAgICAgbG9hZGVyLFxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICBzcmM9e3NyY31cbiAgICAgICAgICAgIGRlY29kaW5nPVwiYXN5bmNcIlxuICAgICAgICAgICAgc2l6ZXM9e3NpemVzfVxuICAgICAgICAgICAgc3R5bGU9e2ltZ1N0eWxlfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9ub3NjcmlwdD5cbiAgICAgICl9XG4gICAgICA8aW1nXG4gICAgICAgIHsuLi5yZXN0fVxuICAgICAgICB7Li4uaW1nQXR0cmlidXRlc31cbiAgICAgICAgZGVjb2Rpbmc9XCJhc3luY1wiXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICByZWY9e3NldFJlZn1cbiAgICAgICAgc3R5bGU9e2ltZ1N0eWxlfVxuICAgICAgLz5cbiAgICAgIHtwcmlvcml0eSA/IChcbiAgICAgICAgLy8gTm90ZSBob3cgd2Ugb21pdCB0aGUgYGhyZWZgIGF0dHJpYnV0ZSwgYXMgaXQgd291bGQgb25seSBiZSByZWxldmFudFxuICAgICAgICAvLyBmb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBgaW1hZ2VzcmNzZXRgLCBhbmQgaW4gdGhvc2UgY2FzZXNcbiAgICAgICAgLy8gaXQgd291bGQgbGlrZWx5IGNhdXNlIHRoZSBpbmNvcnJlY3QgaW1hZ2UgdG8gYmUgcHJlbG9hZGVkLlxuICAgICAgICAvL1xuICAgICAgICAvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9zZW1hbnRpY3MuaHRtbCNhdHRyLWxpbmstaW1hZ2VzcmNzZXRcbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgIGtleT17XG4gICAgICAgICAgICAgICdfX25pbWctJyArXG4gICAgICAgICAgICAgIGltZ0F0dHJpYnV0ZXMuc3JjICtcbiAgICAgICAgICAgICAgaW1nQXR0cmlidXRlcy5zcmNTZXQgK1xuICAgICAgICAgICAgICBpbWdBdHRyaWJ1dGVzLnNpemVzXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZWw9XCJwcmVsb2FkXCJcbiAgICAgICAgICAgIGFzPVwiaW1hZ2VcIlxuICAgICAgICAgICAgaHJlZj17aW1nQXR0cmlidXRlcy5zcmNTZXQgPyB1bmRlZmluZWQgOiBpbWdBdHRyaWJ1dGVzLnNyY31cbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmU6IGltYWdlc3Jjc2V0IGlzIG5vdCB5ZXQgaW4gdGhlIGxpbmsgZWxlbWVudCB0eXBlXG4gICAgICAgICAgICBpbWFnZXNyY3NldD17aW1nQXR0cmlidXRlcy5zcmNTZXR9XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlOiBpbWFnZXNpemVzIGlzIG5vdCB5ZXQgaW4gdGhlIGxpbmsgZWxlbWVudCB0eXBlXG4gICAgICAgICAgICBpbWFnZXNpemVzPXtpbWdBdHRyaWJ1dGVzLnNpemVzfVxuICAgICAgICAgID48L2xpbms+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICkgOiBudWxsfVxuICAgIDwvZGl2PlxuICApXG59XG5cbi8vQlVJTFQgSU4gTE9BREVSU1xuXG5mdW5jdGlvbiBub3JtYWxpemVTcmMoc3JjOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gc3JjWzBdID09PSAnLycgPyBzcmMuc2xpY2UoMSkgOiBzcmNcbn1cblxuZnVuY3Rpb24gaW1naXhMb2FkZXIoe1xuICByb290LFxuICBzcmMsXG4gIHdpZHRoLFxuICBxdWFsaXR5LFxufTogRGVmYXVsdEltYWdlTG9hZGVyUHJvcHMpOiBzdHJpbmcge1xuICAvLyBEZW1vOiBodHRwczovL3N0YXRpYy5pbWdpeC5uZXQvZGFpc3kucG5nP2Zvcm1hdD1hdXRvJmZpdD1tYXgmdz0zMDBcbiAgY29uc3QgcGFyYW1zID0gWydhdXRvPWZvcm1hdCcsICdmaXQ9bWF4JywgJ3c9JyArIHdpZHRoXVxuICBsZXQgcGFyYW1zU3RyaW5nID0gJydcbiAgaWYgKHF1YWxpdHkpIHtcbiAgICBwYXJhbXMucHVzaCgncT0nICsgcXVhbGl0eSlcbiAgfVxuXG4gIGlmIChwYXJhbXMubGVuZ3RoKSB7XG4gICAgcGFyYW1zU3RyaW5nID0gJz8nICsgcGFyYW1zLmpvaW4oJyYnKVxuICB9XG4gIHJldHVybiBgJHtyb290fSR7bm9ybWFsaXplU3JjKHNyYyl9JHtwYXJhbXNTdHJpbmd9YFxufVxuXG5mdW5jdGlvbiBha2FtYWlMb2FkZXIoeyByb290LCBzcmMsIHdpZHRoIH06IERlZmF1bHRJbWFnZUxvYWRlclByb3BzKTogc3RyaW5nIHtcbiAgcmV0dXJuIGAke3Jvb3R9JHtub3JtYWxpemVTcmMoc3JjKX0/aW13aWR0aD0ke3dpZHRofWBcbn1cblxuZnVuY3Rpb24gY2xvdWRpbmFyeUxvYWRlcih7XG4gIHJvb3QsXG4gIHNyYyxcbiAgd2lkdGgsXG4gIHF1YWxpdHksXG59OiBEZWZhdWx0SW1hZ2VMb2FkZXJQcm9wcyk6IHN0cmluZyB7XG4gIC8vIERlbW86IGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2RlbW8vaW1hZ2UvdXBsb2FkL3dfMzAwLGNfbGltaXQscV9hdXRvL3R1cnRsZXMuanBnXG4gIGNvbnN0IHBhcmFtcyA9IFsnZl9hdXRvJywgJ2NfbGltaXQnLCAnd18nICsgd2lkdGgsICdxXycgKyAocXVhbGl0eSB8fCAnYXV0bycpXVxuICBsZXQgcGFyYW1zU3RyaW5nID0gcGFyYW1zLmpvaW4oJywnKSArICcvJ1xuICByZXR1cm4gYCR7cm9vdH0ke3BhcmFtc1N0cmluZ30ke25vcm1hbGl6ZVNyYyhzcmMpfWBcbn1cblxuZnVuY3Rpb24gZGVmYXVsdExvYWRlcih7XG4gIHJvb3QsXG4gIHNyYyxcbiAgd2lkdGgsXG4gIHF1YWxpdHksXG59OiBEZWZhdWx0SW1hZ2VMb2FkZXJQcm9wcyk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbWlzc2luZ1ZhbHVlcyA9IFtdXG5cbiAgICAvLyB0aGVzZSBzaG91bGQgYWx3YXlzIGJlIHByb3ZpZGVkIGJ1dCBtYWtlIHN1cmUgdGhleSBhcmVcbiAgICBpZiAoIXNyYykgbWlzc2luZ1ZhbHVlcy5wdXNoKCdzcmMnKVxuICAgIGlmICghd2lkdGgpIG1pc3NpbmdWYWx1ZXMucHVzaCgnd2lkdGgnKVxuXG4gICAgaWYgKG1pc3NpbmdWYWx1ZXMubGVuZ3RoID4gMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgTmV4dCBJbWFnZSBPcHRpbWl6YXRpb24gcmVxdWlyZXMgJHttaXNzaW5nVmFsdWVzLmpvaW4oXG4gICAgICAgICAgJywgJ1xuICAgICAgICApfSB0byBiZSBwcm92aWRlZC4gTWFrZSBzdXJlIHlvdSBwYXNzIHRoZW0gYXMgcHJvcHMgdG8gdGhlIFxcYG5leHQvaW1hZ2VcXGAgY29tcG9uZW50LiBSZWNlaXZlZDogJHtKU09OLnN0cmluZ2lmeShcbiAgICAgICAgICB7IHNyYywgd2lkdGgsIHF1YWxpdHkgfVxuICAgICAgICApfWBcbiAgICAgIClcbiAgICB9XG5cbiAgICBpZiAoc3JjLnN0YXJ0c1dpdGgoJy8vJykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCB0byBwYXJzZSBzcmMgXCIke3NyY31cIiBvbiBcXGBuZXh0L2ltYWdlXFxgLCBwcm90b2NvbC1yZWxhdGl2ZSBVUkwgKC8vKSBtdXN0IGJlIGNoYW5nZWQgdG8gYW4gYWJzb2x1dGUgVVJMIChodHRwOi8vIG9yIGh0dHBzOi8vKWBcbiAgICAgIClcbiAgICB9XG5cbiAgICBpZiAoIXNyYy5zdGFydHNXaXRoKCcvJykgJiYgY29uZmlnRG9tYWlucykge1xuICAgICAgbGV0IHBhcnNlZFNyYzogVVJMXG4gICAgICB0cnkge1xuICAgICAgICBwYXJzZWRTcmMgPSBuZXcgVVJMKHNyYylcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBGYWlsZWQgdG8gcGFyc2Ugc3JjIFwiJHtzcmN9XCIgb24gXFxgbmV4dC9pbWFnZVxcYCwgaWYgdXNpbmcgcmVsYXRpdmUgaW1hZ2UgaXQgbXVzdCBzdGFydCB3aXRoIGEgbGVhZGluZyBzbGFzaCBcIi9cIiBvciBiZSBhbiBhYnNvbHV0ZSBVUkwgKGh0dHA6Ly8gb3IgaHR0cHM6Ly8pYFxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGlmICghY29uZmlnRG9tYWlucy5pbmNsdWRlcyhwYXJzZWRTcmMuaG9zdG5hbWUpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgSW52YWxpZCBzcmMgcHJvcCAoJHtzcmN9KSBvbiBcXGBuZXh0L2ltYWdlXFxgLCBob3N0bmFtZSBcIiR7cGFyc2VkU3JjLmhvc3RuYW1lfVwiIGlzIG5vdCBjb25maWd1cmVkIHVuZGVyIGltYWdlcyBpbiB5b3VyIFxcYG5leHQuY29uZmlnLmpzXFxgXFxuYCArXG4gICAgICAgICAgICBgU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbmV4dC1pbWFnZS11bmNvbmZpZ3VyZWQtaG9zdGBcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBgJHtyb290fT91cmw9JHtlbmNvZGVVUklDb21wb25lbnQoc3JjKX0mdz0ke3dpZHRofSZxPSR7cXVhbGl0eSB8fCA3NX1gXG59XG4iLCJ0eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGUgPSBhbnlcbnR5cGUgUmVxdWVzdElkbGVDYWxsYmFja09wdGlvbnMgPSB7XG4gIHRpbWVvdXQ6IG51bWJlclxufVxudHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUgPSB7XG4gIHJlYWRvbmx5IGRpZFRpbWVvdXQ6IGJvb2xlYW5cbiAgdGltZVJlbWFpbmluZzogKCkgPT4gbnVtYmVyXG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgcmVxdWVzdElkbGVDYWxsYmFjazogKFxuICAgICAgY2FsbGJhY2s6IChkZWFkbGluZTogUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lKSA9PiB2b2lkLFxuICAgICAgb3B0cz86IFJlcXVlc3RJZGxlQ2FsbGJhY2tPcHRpb25zXG4gICAgKSA9PiBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlXG4gICAgY2FuY2VsSWRsZUNhbGxiYWNrOiAoaWQ6IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGUpID0+IHZvaWRcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgcmVxdWVzdElkbGVDYWxsYmFjayA9XG4gICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrKSB8fFxuICBmdW5jdGlvbiAoXG4gICAgY2I6IChkZWFkbGluZTogUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lKSA9PiB2b2lkXG4gICk6IE5vZGVKUy5UaW1lb3V0IHtcbiAgICBsZXQgc3RhcnQgPSBEYXRlLm5vdygpXG4gICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgY2Ioe1xuICAgICAgICBkaWRUaW1lb3V0OiBmYWxzZSxcbiAgICAgICAgdGltZVJlbWFpbmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBNYXRoLm1heCgwLCA1MCAtIChEYXRlLm5vdygpIC0gc3RhcnQpKVxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICB9LCAxKVxuICB9XG5cbmV4cG9ydCBjb25zdCBjYW5jZWxJZGxlQ2FsbGJhY2sgPVxuICAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrKSB8fFxuICBmdW5jdGlvbiAoaWQ6IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGUpIHtcbiAgICByZXR1cm4gY2xlYXJUaW1lb3V0KGlkKVxuICB9XG4iLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICByZXF1ZXN0SWRsZUNhbGxiYWNrLFxuICBjYW5jZWxJZGxlQ2FsbGJhY2ssXG59IGZyb20gJy4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrJ1xuXG50eXBlIFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdCA9IFBpY2s8SW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0LCAncm9vdE1hcmdpbic+XG50eXBlIFVzZUludGVyc2VjdGlvbiA9IHsgZGlzYWJsZWQ/OiBib29sZWFuIH0gJiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXRcbnR5cGUgT2JzZXJ2ZUNhbGxiYWNrID0gKGlzVmlzaWJsZTogYm9vbGVhbikgPT4gdm9pZFxudHlwZSBPYnNlcnZlciA9IHtcbiAgaWQ6IHN0cmluZ1xuICBvYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbiAgZWxlbWVudHM6IE1hcDxFbGVtZW50LCBPYnNlcnZlQ2FsbGJhY2s+XG59XG5cbmNvbnN0IGhhc0ludGVyc2VjdGlvbk9ic2VydmVyID0gdHlwZW9mIEludGVyc2VjdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlSW50ZXJzZWN0aW9uPFQgZXh0ZW5kcyBFbGVtZW50Pih7XG4gIHJvb3RNYXJnaW4sXG4gIGRpc2FibGVkLFxufTogVXNlSW50ZXJzZWN0aW9uKTogWyhlbGVtZW50OiBUIHwgbnVsbCkgPT4gdm9pZCwgYm9vbGVhbl0ge1xuICBjb25zdCBpc0Rpc2FibGVkOiBib29sZWFuID0gZGlzYWJsZWQgfHwgIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyXG5cbiAgY29uc3QgdW5vYnNlcnZlID0gdXNlUmVmPEZ1bmN0aW9uPigpXG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IHNldFJlZiA9IHVzZUNhbGxiYWNrKFxuICAgIChlbDogVCB8IG51bGwpID0+IHtcbiAgICAgIGlmICh1bm9ic2VydmUuY3VycmVudCkge1xuICAgICAgICB1bm9ic2VydmUuY3VycmVudCgpXG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gdW5kZWZpbmVkXG4gICAgICB9XG5cbiAgICAgIGlmIChpc0Rpc2FibGVkIHx8IHZpc2libGUpIHJldHVyblxuXG4gICAgICBpZiAoZWwgJiYgZWwudGFnTmFtZSkge1xuICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IG9ic2VydmUoXG4gICAgICAgICAgZWwsXG4gICAgICAgICAgKGlzVmlzaWJsZSkgPT4gaXNWaXNpYmxlICYmIHNldFZpc2libGUoaXNWaXNpYmxlKSxcbiAgICAgICAgICB7IHJvb3RNYXJnaW4gfVxuICAgICAgICApXG4gICAgICB9XG4gICAgfSxcbiAgICBbaXNEaXNhYmxlZCwgcm9vdE1hcmdpbiwgdmlzaWJsZV1cbiAgKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgICAgaWYgKCF2aXNpYmxlKSB7XG4gICAgICAgIGNvbnN0IGlkbGVDYWxsYmFjayA9IHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4gc2V0VmlzaWJsZSh0cnVlKSlcbiAgICAgICAgcmV0dXJuICgpID0+IGNhbmNlbElkbGVDYWxsYmFjayhpZGxlQ2FsbGJhY2spXG4gICAgICB9XG4gICAgfVxuICB9LCBbdmlzaWJsZV0pXG5cbiAgcmV0dXJuIFtzZXRSZWYsIHZpc2libGVdXG59XG5cbmZ1bmN0aW9uIG9ic2VydmUoXG4gIGVsZW1lbnQ6IEVsZW1lbnQsXG4gIGNhbGxiYWNrOiBPYnNlcnZlQ2FsbGJhY2ssXG4gIG9wdGlvbnM6IFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdFxuKTogKCkgPT4gdm9pZCB7XG4gIGNvbnN0IHsgaWQsIG9ic2VydmVyLCBlbGVtZW50cyB9ID0gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucylcbiAgZWxlbWVudHMuc2V0KGVsZW1lbnQsIGNhbGxiYWNrKVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudClcbiAgcmV0dXJuIGZ1bmN0aW9uIHVub2JzZXJ2ZSgpOiB2b2lkIHtcbiAgICBlbGVtZW50cy5kZWxldGUoZWxlbWVudClcbiAgICBvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudClcblxuICAgIC8vIERlc3Ryb3kgb2JzZXJ2ZXIgd2hlbiB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byB3YXRjaDpcbiAgICBpZiAoZWxlbWVudHMuc2l6ZSA9PT0gMCkge1xuICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpXG4gICAgICBvYnNlcnZlcnMuZGVsZXRlKGlkKVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBvYnNlcnZlcnMgPSBuZXcgTWFwPHN0cmluZywgT2JzZXJ2ZXI+KClcbmZ1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKG9wdGlvbnM6IFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdCk6IE9ic2VydmVyIHtcbiAgY29uc3QgaWQgPSBvcHRpb25zLnJvb3RNYXJnaW4gfHwgJydcbiAgbGV0IGluc3RhbmNlID0gb2JzZXJ2ZXJzLmdldChpZClcbiAgaWYgKGluc3RhbmNlKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlXG4gIH1cblxuICBjb25zdCBlbGVtZW50cyA9IG5ldyBNYXA8RWxlbWVudCwgT2JzZXJ2ZUNhbGxiYWNrPigpXG4gIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG4gICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgY29uc3QgY2FsbGJhY2sgPSBlbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KVxuICAgICAgY29uc3QgaXNWaXNpYmxlID0gZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwXG4gICAgICBpZiAoY2FsbGJhY2sgJiYgaXNWaXNpYmxlKSB7XG4gICAgICAgIGNhbGxiYWNrKGlzVmlzaWJsZSlcbiAgICAgIH1cbiAgICB9KVxuICB9LCBvcHRpb25zKVxuXG4gIG9ic2VydmVycy5zZXQoXG4gICAgaWQsXG4gICAgKGluc3RhbmNlID0ge1xuICAgICAgaWQsXG4gICAgICBvYnNlcnZlcixcbiAgICAgIGVsZW1lbnRzLFxuICAgIH0pXG4gIClcbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvaW1hZ2UnKVxuIiwiZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9leHRlbmRzOyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwiZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gIHZhciBrZXksIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2U7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFN0YXJ0dXBTdWNjZXNzIGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvZGFzaGJvYXJkL3N0YXJ0dXAvU3RhcnR1cFN1Y2Nlc3MnO1xyXG5cclxuY29uc3QgU3RhcnR1cFN1Y2Nlc3NQYWdlID0gKCkgPT4ge1xyXG4gIHJldHVybiA8U3RhcnR1cFN1Y2Nlc3MgLz47XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdGFydHVwU3VjY2Vzc1BhZ2U7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByZWFjdC1wZGYvcmVuZGVyZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHRpcHB5anMvcmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlsZS1zYXZlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9hcHBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvYXV0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9maXJlc3RvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvZnVuY3Rpb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL3N0b3JhZ2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ3NhcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqcy1jb29raWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZGV2aWNlLWRldGVjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==