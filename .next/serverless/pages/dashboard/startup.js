module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	                // Font manifest declaration
/******/ 	                __webpack_require__.__NEXT_FONT_MANIFEST__ = [{"url":"https://fonts.googleapis.com/css2?family=Comfortaa&display=swap","content":"@font-face{font-family:'Comfortaa';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/comfortaa/v30/1Pt_g8LJRfWJmhDAuUsSQamb1W0lwk4S4WjMPrc.woff) format('woff')}@font-face{font-family:'Comfortaa';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/comfortaa/v30/1Pt_g8LJRfWJmhDAuUsSQamb1W0lwk4S4WjMDr4fJh1Zyc61YBlG.woff) format('woff');unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:'Comfortaa';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/comfortaa/v30/1Pt_g8LJRfWJmhDAuUsSQamb1W0lwk4S4WjMDrcfJh1Zyc61YBlG.woff) format('woff');unicode-range:U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:'Comfortaa';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/comfortaa/v30/1Pt_g8LJRfWJmhDAuUsSQamb1W0lwk4S4WjMDrAfJh1Zyc61YBlG.woff) format('woff');unicode-range:U+0370-03FF}@font-face{font-family:'Comfortaa';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/comfortaa/v30/1Pt_g8LJRfWJmhDAuUsSQamb1W0lwk4S4WjMDrwfJh1Zyc61YBlG.woff) format('woff');unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EF9,U+20AB}@font-face{font-family:'Comfortaa';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/comfortaa/v30/1Pt_g8LJRfWJmhDAuUsSQamb1W0lwk4S4WjMDr0fJh1Zyc61YBlG.woff) format('woff');unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:'Comfortaa';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/comfortaa/v30/1Pt_g8LJRfWJmhDAuUsSQamb1W0lwk4S4WjMDrMfJh1Zyc61YA.woff) format('woff');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}"},{"url":"https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&display=swap","content":"@font-face{font-family:'Poppins';font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLDz8V1g.woff) format('woff')}@font-face{font-family:'Poppins';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v15/pxiEyp8kv8JHgFVrFJM.woff) format('woff')}@font-face{font-family:'Poppins';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLGT9V1g.woff) format('woff')}@font-face{font-family:'Poppins';font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLDz8Z11lFd2JQEl8qw.woff2) format('woff2');unicode-range:U+0900-097F,U+1CD0-1CF6,U+1CF8-1CF9,U+200C-200D,U+20A8,U+20B9,U+25CC,U+A830-A839,U+A8E0-A8FB}@font-face{font-family:'Poppins';font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLDz8Z1JlFd2JQEl8qw.woff2) format('woff2');unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:'Poppins';font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLDz8Z1xlFd2JQEk.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:'Poppins';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v15/pxiEyp8kv8JHgFVrJJbecnFHGPezSQ.woff2) format('woff2');unicode-range:U+0900-097F,U+1CD0-1CF6,U+1CF8-1CF9,U+200C-200D,U+20A8,U+20B9,U+25CC,U+A830-A839,U+A8E0-A8FB}@font-face{font-family:'Poppins';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v15/pxiEyp8kv8JHgFVrJJnecnFHGPezSQ.woff2) format('woff2');unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:'Poppins';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v15/pxiEyp8kv8JHgFVrJJfecnFHGPc.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:'Poppins';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLGT9Z11lFd2JQEl8qw.woff2) format('woff2');unicode-range:U+0900-097F,U+1CD0-1CF6,U+1CF8-1CF9,U+200C-200D,U+20A8,U+20B9,U+25CC,U+A830-A839,U+A8E0-A8FB}@font-face{font-family:'Poppins';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLGT9Z1JlFd2JQEl8qw.woff2) format('woff2');unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:'Poppins';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLGT9Z1xlFd2JQEk.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}"},{"url":"https://fonts.googleapis.com/css2?family=Vollkorn&display=swap","content":"@font-face{font-family:'Vollkorn';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/vollkorn/v13/0ybgGDoxxrvAnPhYGzMlQLzuMasz6Df2MHGuGg.woff) format('woff')}@font-face{font-family:'Vollkorn';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/vollkorn/v13/0ybgGDoxxrvAnPhYGzMlQLzuMasz6Df2MHGeE2maM7Xq3oA9NjE.woff) format('woff');unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:'Vollkorn';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/vollkorn/v13/0ybgGDoxxrvAnPhYGzMlQLzuMasz6Df2MHGeGmmaM7Xq3oA9NjE.woff) format('woff');unicode-range:U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:'Vollkorn';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/vollkorn/v13/0ybgGDoxxrvAnPhYGzMlQLzuMasz6Df2MHGeHWmaM7Xq3oA9NjE.woff) format('woff');unicode-range:U+0370-03FF}@font-face{font-family:'Vollkorn';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/vollkorn/v13/0ybgGDoxxrvAnPhYGzMlQLzuMasz6Df2MHGeEWmaM7Xq3oA9NjE.woff) format('woff');unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EF9,U+20AB}@font-face{font-family:'Vollkorn';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/vollkorn/v13/0ybgGDoxxrvAnPhYGzMlQLzuMasz6Df2MHGeEGmaM7Xq3oA9NjE.woff) format('woff');unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:'Vollkorn';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/vollkorn/v13/0ybgGDoxxrvAnPhYGzMlQLzuMasz6Df2MHGeHmmaM7Xq3oA9.woff) format('woff');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}"}];
/******/ 	            // Enable feature:
/******/ 	            process.env.__NEXT_OPTIMIZE_FONTS = JSON.stringify(true);
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "rwUC");
/******/ })
/************************************************************************/
/******/ ({

/***/ "/a9y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _head = _interopRequireDefault(__webpack_require__("UlpK"));

const statusCodes = {
  400: 'Bad Request',
  404: 'This page could not be found',
  405: 'Method Not Allowed',
  500: 'Internal Server Error'
};

function _getInitialProps({
  res,
  err
}) {
  const statusCode = res && res.statusCode ? res.statusCode : err ? err.statusCode : 404;
  return {
    statusCode
  };
}
/**
* `Error` component used for handling errors.
*/


class Error extends _react.default.Component {
  render() {
    const {
      statusCode
    } = this.props;
    const title = this.props.title || statusCodes[statusCode] || 'An unexpected error has occurred';
    return /*#__PURE__*/_react.default.createElement("div", {
      style: styles.error
    }, /*#__PURE__*/_react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("title", null, statusCode, ": ", title)), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("style", {
      dangerouslySetInnerHTML: {
        __html: 'body { margin: 0 }'
      }
    }), statusCode ? /*#__PURE__*/_react.default.createElement("h1", {
      style: styles.h1
    }, statusCode) : null, /*#__PURE__*/_react.default.createElement("div", {
      style: styles.desc
    }, /*#__PURE__*/_react.default.createElement("h2", {
      style: styles.h2
    }, title, "."))));
  }

}

exports.default = Error;
Error.displayName = 'ErrorPage';
Error.getInitialProps = _getInitialProps;
Error.origGetInitialProps = _getInitialProps;
const styles = {
  error: {
    color: '#000',
    background: '#fff',
    fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',
    height: '100vh',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  desc: {
    display: 'inline-block',
    textAlign: 'left',
    lineHeight: '49px',
    height: '49px',
    verticalAlign: 'middle'
  },
  h1: {
    display: 'inline-block',
    borderRight: '1px solid rgba(0, 0, 0,.3)',
    margin: 0,
    marginRight: '20px',
    padding: '10px 23px 10px 0',
    fontSize: '24px',
    fontWeight: 500,
    verticalAlign: 'top'
  },
  h2: {
    fontSize: '14px',
    fontWeight: 'normal',
    lineHeight: 'inherit',
    margin: 0,
    padding: 0
  }
};

/***/ }),

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "0G5g":
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

/***/ "0y+5":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/path-match.js");

/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: ./node_modules/tailwindcss/tailwind.css
var tailwind = __webpack_require__("uXJ4");

// EXTERNAL MODULE: ./styles/global.css
var global = __webpack_require__("RDVA");

// EXTERNAL MODULE: ./lib/newAuth.js
var newAuth = __webpack_require__("cqNN");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: external "next-themes"
var external_next_themes_ = __webpack_require__("lN3F");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "gsap"
var external_gsap_ = __webpack_require__("489e");
var external_gsap_default = /*#__PURE__*/__webpack_require__.n(external_gsap_);

// EXTERNAL MODULE: ./utils/useWindowSize.js
var useWindowSize = __webpack_require__("QhkM");

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__("Aiso");
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);

// EXTERNAL MODULE: external "react-device-detect"
var external_react_device_detect_ = __webpack_require__("xXj+");

// CONCATENATED MODULE: ./components/dashboard/MobileNavbar.js






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
  } = Object(external_next_themes_["useTheme"])();
  const {
    0: menuHelper,
    1: setMenuHelper
  } = Object(external_react_["useState"])(false);
  const manRef = Object(external_react_["useRef"])(null);
  const tl = external_gsap_default.a.timeline({
    repeat: -1,
    yoyo: true
  });
  Object(external_react_["useEffect"])(() => {
    tl.to(manRef.current, {
      duration: 3,
      y: 250,
      x: 175,
      ease: external_gsap_["Power1"].easeInOut
    }).to(manRef.current, {
      duration: 3,
      y: 500,
      x: 350,
      ease: external_gsap_["Power1"].easeInOut
    }).to(manRef.current, {
      duration: 3,
      y: 250,
      x: 175,
      ease: external_gsap_["Power1"].easeInOut
    }).to(manRef.current, {
      duration: 3,
      y: 0,
      x: 0,
      ease: external_gsap_["Power1"].easeInOut
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
      external_gsap_default.a.to(navbarMainContainer, {
        height: navbarHeight,
        duration: 1,
        ease: external_gsap_["Linear"]
      });
      setMenuHelper(true);
    } else if (menuHelper) {
      external_gsap_default.a.to(navbarMainContainer, {
        height: 48,
        duration: 1,
        ease: external_gsap_["Linear"]
      });
      setMenuHelper(false);
    }
  };

  const size = {
    width: window.innerWidth
  };
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "fixed right-0 z-50",
      style: {
        overflow: 'unset',
        height: 'fit-content'
      },
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
        onClick: () => setTheme(theme === 'dark' ? 'light' : 'dark'),
        width: "100",
        height: "100",
        style: {
          overflow: 'unset',
          cursor: 'pointer'
        },
        viewBox: "0 0 770 772",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("g", {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M769.001 0H310.286C306.762 21.4871 304.994 43.2257 305.001 65C305.001 284.809 483.192 463 703.001 463C725.114 463.008 747.19 461.185 769.001 457.55V0Z",
            fill: "#0A1230"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M574.849 248.809C567.965 248.815 561.135 247.582 554.687 245.17C554.318 245.032 553.98 244.822 553.692 244.553C553.404 244.284 553.172 243.961 553.009 243.603C552.846 243.244 552.755 242.857 552.742 242.463C552.728 242.07 552.792 241.677 552.931 241.308C553.069 240.939 553.278 240.601 553.547 240.313C553.816 240.025 554.139 239.793 554.498 239.63C554.856 239.467 555.244 239.376 555.637 239.363C556.031 239.349 556.424 239.414 556.792 239.552C565.341 242.711 574.566 243.586 583.557 242.09C592.547 240.594 600.991 236.779 608.056 231.021C586.018 231.255 564.461 220.84 553.737 204.128C546.842 193.385 544.588 180.744 547.216 167.57C549.229 158.017 553.36 149.037 559.305 141.293C547.954 144.905 538.184 152.302 531.628 162.248C525.072 172.193 522.126 184.087 523.282 195.943C523.322 196.336 523.284 196.733 523.171 197.111C523.057 197.489 522.871 197.841 522.621 198.147C522.371 198.453 522.063 198.706 521.715 198.893C521.367 199.08 520.986 199.196 520.593 199.235C520.2 199.274 519.804 199.235 519.426 199.12C519.048 199.005 518.697 198.817 518.392 198.566C518.087 198.316 517.834 198.007 517.649 197.658C517.463 197.31 517.349 196.928 517.311 196.535C515.854 181.619 520.223 166.716 529.504 154.948C538.784 143.18 552.258 135.457 567.103 133.397C567.724 133.311 568.356 133.421 568.911 133.713C569.466 134.004 569.915 134.462 570.197 135.021C570.478 135.581 570.577 136.215 570.48 136.835C570.382 137.454 570.094 138.027 569.654 138.473C554.31 154.059 544.999 179.402 558.786 200.888C569.664 217.837 593.069 227.532 615.714 224.468C616.322 224.386 616.94 224.491 617.485 224.771C618.031 225.051 618.478 225.491 618.765 226.032C619.053 226.574 619.168 227.19 619.095 227.799C619.022 228.407 618.764 228.979 618.356 229.436C612.873 235.542 606.164 240.422 598.667 243.76C591.171 247.098 583.055 248.818 574.849 248.809V248.809Z",
            fill: "#6C63FF"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M527.001 250C522.65 250 518.397 248.71 514.779 246.292C511.161 243.875 508.341 240.439 506.676 236.419C505.011 232.399 504.575 227.976 505.424 223.708C506.273 219.44 508.368 215.52 511.445 212.444C514.522 209.367 518.442 207.272 522.709 206.423C526.977 205.574 531.401 206.01 535.421 207.675C539.441 209.34 542.876 212.16 545.294 215.777C547.711 219.395 549.001 223.649 549.001 228C548.995 233.833 546.675 239.425 542.551 243.549C538.426 247.673 532.834 249.993 527.001 250V250ZM527.001 212C523.837 212 520.744 212.938 518.112 214.697C515.481 216.455 513.43 218.953 512.219 221.877C511.008 224.801 510.692 228.018 511.309 231.121C511.926 234.225 513.45 237.076 515.688 239.314C517.925 241.551 520.776 243.075 523.88 243.693C526.984 244.31 530.201 243.993 533.124 242.782C536.048 241.571 538.547 239.52 540.305 236.889C542.063 234.258 543.001 231.165 543.001 228C542.997 223.758 541.309 219.691 538.31 216.692C535.31 213.692 531.243 212.005 527.001 212V212Z",
            fill: "#6C63FF"
          }), !external_react_device_detect_["isMobile"] && /*#__PURE__*/Object(jsx_runtime_["jsxs"])("g", {
            ref: manRef,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M8.69074 567.078C7.24546 566.853 5.86504 566.321 4.64182 565.518C3.4186 564.716 2.38077 563.662 1.59771 562.427C0.814652 561.191 0.304423 559.802 0.101157 558.354C-0.102109 556.905 0.00627512 555.43 0.419044 554.026L8.20737 527.546L20.042 529.765L20.5508 556.732C20.5791 558.232 20.2788 559.719 19.6709 561.091C19.063 562.462 18.1623 563.683 17.032 564.669C15.9017 565.655 14.5693 566.382 13.1283 566.798C11.6873 567.214 10.1727 567.31 8.69074 567.078V567.078Z",
              fill: "#9F616A"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M76.996 736.132L62.203 733.913L65.901 589.678L45.191 651.81L34.096 739.091L20.042 735.393L17.083 644.414L33.356 537.162L114.719 555.654L76.996 736.132Z",
              fill: "#0A1230"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M70.2046 771.636C67.3209 771.636 64.5553 770.491 62.5163 768.452C60.4772 766.413 59.3317 763.647 59.3317 760.763C59.3317 760.408 59.3491 760.053 59.3839 759.699L61.6811 736.345C61.7365 735.787 61.9281 735.251 62.2391 734.784C62.5501 734.317 62.9709 733.933 63.4647 733.667C67.8254 731.315 72.3096 731.885 76.8994 734.955C77.3066 735.229 77.6497 735.588 77.9052 736.007C78.1607 736.427 78.3226 736.896 78.3799 737.384L81.0017 759.482C81.1827 761.008 81.0385 762.554 80.5785 764.02C80.1185 765.485 79.3533 766.836 78.3332 767.985C77.3131 769.133 76.0613 770.052 74.6602 770.682C73.2591 771.311 71.7406 771.636 70.2046 771.636H70.2046Z",
              fill: "#0A1230"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M9.82084 769.898C8.42675 769.387 7.16714 768.565 6.13726 767.496C5.10738 766.426 4.33419 765.136 3.87616 763.724C3.41814 762.311 3.28727 760.813 3.49344 759.343C3.69962 757.872 4.23745 756.468 5.06626 755.236L20.8463 731.779C26.5348 727.697 29.9657 729.685 31.2995 737.313L34.4898 729.32L36.8936 731.942C38.1133 733.273 38.823 734.992 38.8971 736.795C38.9712 738.599 38.4049 740.37 37.2984 741.796L20.9304 766.706C19.6567 768.348 17.8938 769.542 15.8967 770.116C13.8996 770.689 11.7717 770.613 9.82084 769.898V769.898Z",
              fill: "#0A1230"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M109.542 398.105C121.797 398.105 131.732 388.17 131.732 375.915C131.732 363.659 121.797 353.725 109.542 353.725C97.2865 353.725 87.3517 363.659 87.3517 375.915C87.3517 388.17 97.2865 398.105 109.542 398.105Z",
              fill: "#9F616A"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M123.595 416.596L85.8723 409.2C90.7313 398.836 94.6225 395.33 90.3103 384.051H120.637C117.962 395.733 120.547 406.698 123.595 416.596Z",
              fill: "#9F616A"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M119.157 566.009L30.3973 540.86C48.1761 501.731 51.9 458.769 46.6287 413.356C46.5034 412.285 46.5904 411.199 46.8847 410.16C47.1791 409.122 47.6751 408.152 48.3443 407.306C49.0135 406.459 49.843 405.753 50.7852 405.227C51.7275 404.701 52.7641 404.366 53.8359 404.24C53.9357 404.229 54.0356 404.219 54.1358 404.211C65.7137 403.257 77.7844 402.033 90.3104 400.324L104.364 409.939L120.637 406.241C125.858 408.772 131.118 410.877 135.864 412.975C140.191 414.893 143.649 418.354 145.563 422.683C147.476 427.012 147.709 431.898 146.215 436.389C131.752 480.066 122.071 523.329 119.157 566.009Z",
              fill: "#E6E6E6"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M22.261 532.724L5.24866 530.505L45.5508 414.38C47.6008 408.473 52.6848 405.276 58.8745 404.392L64.7918 405.131L60.3538 473.92L22.261 532.724Z",
              fill: "#E6E6E6"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M155.525 510.524C152.692 510.742 149.863 510.06 147.441 508.574C145.019 507.089 143.128 504.877 142.038 502.253L125.814 463.195L139.128 415.117L142.648 417.357C142.987 417.572 143.322 417.794 143.652 418.02C148.593 421.481 152.442 426.283 154.746 431.858C157.049 437.434 157.711 443.552 156.654 449.491L153.182 469.852L167.505 500.605C166.777 503.294 165.235 505.69 163.089 507.466C160.944 509.243 158.302 510.311 155.525 510.524V510.524Z",
              fill: "#E6E6E6"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M111.248 343.027C115.04 343.201 118.733 344.288 122.014 346.196C122.769 346.636 122.42 348.219 123.117 348.736C123.995 349.386 125.902 348.991 126.68 349.753C129.19 352.203 131.123 355.182 132.338 358.474C133.552 361.765 134.018 365.285 133.702 368.779L132.464 381.09L129.543 377.896C124.306 372.089 117.035 368.519 109.238 367.927C108.906 367.904 108.574 367.887 108.242 367.874L110.489 363.941L106.584 367.847C104.802 367.866 103.024 368.011 101.263 368.28L104.251 363.05L98.5171 368.784L98.5166 368.785C96.1716 369.3 93.9805 370.36 92.1198 371.877C90.2591 373.395 88.7808 375.328 87.8042 377.522L87.1675 378.933L86.4542 367.188C86.3177 360.911 88.6805 354.837 93.0226 350.302C97.3647 345.767 103.331 343.142 109.608 343.006C110.155 342.994 110.702 343.001 111.248 343.027Z",
              fill: "#2F2E41"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M131.877 384.438C132.861 384.438 133.659 382.543 133.659 380.205C133.659 377.867 132.861 375.972 131.877 375.972C130.892 375.972 130.094 377.867 130.094 380.205C130.094 382.543 130.892 384.438 131.877 384.438Z",
              fill: "#9F616A"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M87.3195 383.101C88.3038 383.101 89.1017 381.206 89.1017 378.868C89.1017 376.53 88.3038 374.635 87.3195 374.635C86.3351 374.635 85.5372 376.53 85.5372 378.868C85.5372 381.206 86.3351 383.101 87.3195 383.101Z",
              fill: "#9F616A"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M174.034 435.419C175.455 435.767 176.785 436.414 177.936 437.317C179.086 438.22 180.031 439.359 180.706 440.656C181.382 441.954 181.772 443.381 181.852 444.841C181.931 446.302 181.698 447.763 181.168 449.126L171.16 474.85L159.556 471.634L161.338 444.721C161.437 443.225 161.863 441.768 162.585 440.453C163.307 439.139 164.308 437.998 165.518 437.111C166.728 436.225 168.117 435.614 169.588 435.322C171.059 435.029 172.577 435.063 174.034 435.419H174.034Z",
              fill: "#9F616A"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M160.579 509.055L142.087 497.22L157.62 465.414L176.851 472.811L167.236 500.918L160.579 509.055Z",
              fill: "#E6E6E6"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M173.001 409.101V284H171.001V409.101C169.787 409.349 168.709 410.039 167.974 411.037C167.24 412.035 166.902 413.27 167.027 414.503C167.151 415.735 167.729 416.878 168.648 417.709C169.567 418.54 170.762 419 172.001 419C173.241 419 174.435 418.54 175.355 417.709C176.274 416.878 176.852 415.735 176.976 414.503C177.101 413.27 176.763 412.035 176.029 411.037C175.294 410.039 174.216 409.349 173.001 409.101V409.101ZM172.001 417C171.408 417 170.828 416.824 170.335 416.494C169.841 416.165 169.457 415.696 169.23 415.148C169.003 414.6 168.943 413.997 169.059 413.415C169.175 412.833 169.461 412.298 169.88 411.879C170.3 411.459 170.834 411.173 171.416 411.058C171.998 410.942 172.601 411.001 173.15 411.228C173.698 411.455 174.166 411.84 174.496 412.333C174.826 412.827 175.001 413.407 175.001 414C175.001 414.795 174.684 415.558 174.122 416.12C173.559 416.683 172.797 416.999 172.001 417V417Z",
              fill: "#0A1230"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M170.435 164.569C169.29 164.569 168.193 164.115 167.384 163.306C166.575 162.497 166.121 161.399 166.121 160.255V147.314C166.122 146.171 166.578 145.075 167.387 144.268C168.195 143.46 169.292 143.007 170.435 143.007C171.578 143.007 172.674 143.46 173.483 144.268C174.291 145.075 174.747 146.171 174.748 147.314V160.255C174.748 160.822 174.637 161.383 174.42 161.906C174.203 162.43 173.885 162.905 173.485 163.306C173.084 163.706 172.609 164.024 172.085 164.241C171.562 164.458 171.001 164.569 170.435 164.569V164.569Z",
              fill: "#6C63FF"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M170.435 263.787C169.868 263.787 169.307 263.676 168.784 263.459C168.26 263.242 167.785 262.925 167.384 262.524C166.984 262.123 166.666 261.648 166.449 261.124C166.232 260.601 166.121 260.04 166.121 259.474V246.532C166.12 245.965 166.231 245.403 166.447 244.879C166.664 244.355 166.981 243.879 167.382 243.477C167.783 243.076 168.258 242.758 168.782 242.541C169.306 242.323 169.867 242.212 170.435 242.212C171.002 242.212 171.563 242.323 172.087 242.541C172.611 242.758 173.087 243.076 173.487 243.477C173.888 243.879 174.206 244.355 174.422 244.879C174.638 245.403 174.749 245.965 174.748 246.532V259.474C174.748 260.04 174.637 260.601 174.42 261.124C174.203 261.648 173.886 262.123 173.485 262.524C173.084 262.925 172.609 263.242 172.085 263.459C171.562 263.676 171.001 263.787 170.435 263.787V263.787Z",
              fill: "#6C63FF"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M200.939 177.203C200.085 177.203 199.251 176.95 198.542 176.476C197.833 176.002 197.28 175.328 196.953 174.54C196.627 173.752 196.541 172.885 196.708 172.048C196.874 171.211 197.285 170.442 197.888 169.839L207.039 160.688C207.848 159.88 208.945 159.426 210.089 159.427C211.233 159.427 212.329 159.882 213.138 160.69C213.947 161.499 214.401 162.596 214.402 163.739C214.402 164.883 213.948 165.98 213.14 166.789L203.989 175.94C203.589 176.341 203.113 176.659 202.59 176.876C202.066 177.093 201.505 177.204 200.939 177.203V177.203Z",
              fill: "#6C63FF"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M130.78 247.362C129.926 247.362 129.092 247.109 128.383 246.635C127.674 246.161 127.121 245.488 126.794 244.699C126.468 243.911 126.382 243.044 126.549 242.207C126.715 241.37 127.126 240.602 127.729 239.998L136.88 230.848C137.689 230.039 138.786 229.584 139.93 229.584C141.074 229.584 142.172 230.038 142.981 230.847C143.79 231.656 144.244 232.754 144.244 233.898C144.244 235.042 143.79 236.139 142.981 236.948L133.83 246.099C133.43 246.5 132.954 246.818 132.431 247.035C131.907 247.252 131.346 247.363 130.78 247.362V247.362Z",
              fill: "#6C63FF"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M226.514 207.708H213.573C212.43 207.706 211.334 207.251 210.527 206.442C209.719 205.633 209.266 204.537 209.266 203.394C209.266 202.251 209.719 201.154 210.527 200.346C211.334 199.537 212.43 199.082 213.573 199.08H226.514C227.081 199.079 227.643 199.19 228.167 199.406C228.691 199.623 229.168 199.94 229.569 200.341C229.97 200.742 230.289 201.218 230.506 201.741C230.723 202.265 230.835 202.827 230.835 203.394C230.835 203.961 230.723 204.522 230.506 205.046C230.289 205.57 229.97 206.046 229.569 206.446C229.168 206.847 228.691 207.165 228.167 207.381C227.643 207.597 227.081 207.708 226.514 207.708V207.708Z",
              fill: "#6C63FF"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M127.296 207.708H114.355C113.788 207.708 113.226 207.597 112.702 207.381C112.178 207.165 111.701 206.847 111.3 206.446C110.899 206.046 110.581 205.57 110.363 205.046C110.146 204.522 110.034 203.961 110.034 203.394C110.034 202.827 110.146 202.265 110.363 201.741C110.581 201.218 110.899 200.742 111.3 200.341C111.701 199.94 112.178 199.623 112.702 199.406C113.226 199.19 113.788 199.079 114.355 199.08H127.296C128.439 199.082 129.535 199.537 130.342 200.346C131.15 201.154 131.604 202.251 131.604 203.394C131.604 204.537 131.15 205.633 130.342 206.442C129.535 207.251 128.439 207.706 127.296 207.708H127.296Z",
              fill: "#6C63FF"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M210.09 247.362C209.523 247.363 208.962 247.252 208.438 247.035C207.915 246.818 207.439 246.5 207.039 246.099L197.888 236.948C197.487 236.548 197.169 236.072 196.951 235.549C196.734 235.025 196.622 234.464 196.622 233.897C196.621 233.33 196.733 232.769 196.949 232.245C197.166 231.721 197.484 231.245 197.885 230.844C198.286 230.443 198.762 230.125 199.286 229.909C199.809 229.692 200.371 229.58 200.938 229.581C201.505 229.581 202.066 229.693 202.589 229.91C203.113 230.128 203.589 230.446 203.989 230.848L213.14 239.998C213.743 240.602 214.154 241.37 214.32 242.207C214.487 243.044 214.401 243.911 214.075 244.7C213.748 245.488 213.195 246.161 212.486 246.635C211.777 247.11 210.943 247.363 210.09 247.363V247.362Z",
              fill: "#6C63FF"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M139.93 177.203C139.364 177.204 138.803 177.093 138.279 176.876C137.756 176.659 137.28 176.341 136.88 175.94L127.729 166.789C127.329 166.389 127.011 165.913 126.794 165.39C126.577 164.866 126.466 164.305 126.466 163.739C126.466 163.172 126.577 162.611 126.794 162.088C127.011 161.564 127.329 161.089 127.729 160.688C128.13 160.288 128.605 159.97 129.129 159.753C129.652 159.536 130.213 159.425 130.78 159.425C131.346 159.425 131.907 159.536 132.43 159.753C132.954 159.97 133.429 160.288 133.83 160.688L142.981 169.839C143.584 170.442 143.995 171.211 144.161 172.048C144.328 172.885 144.242 173.752 143.916 174.54C143.589 175.329 143.036 176.002 142.327 176.476C141.617 176.95 140.783 177.203 139.93 177.203V177.203Z",
              fill: "#6C63FF"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M170.435 229.277C165.315 229.277 160.311 227.759 156.055 224.915C151.798 222.071 148.481 218.028 146.522 213.299C144.563 208.569 144.05 203.365 145.049 198.344C146.048 193.323 148.513 188.711 152.133 185.092C155.752 181.472 160.364 179.007 165.385 178.008C170.406 177.009 175.61 177.522 180.34 179.481C185.069 181.44 189.111 184.757 191.955 189.014C194.8 193.27 196.318 198.275 196.318 203.394C196.31 210.256 193.58 216.835 188.728 221.687C183.876 226.54 177.297 229.269 170.435 229.277V229.277ZM170.435 186.138C167.022 186.138 163.686 187.15 160.848 189.046C158.01 190.942 155.799 193.637 154.493 196.79C153.187 199.943 152.845 203.413 153.511 206.76C154.177 210.107 155.82 213.182 158.233 215.595C160.646 218.008 163.721 219.652 167.068 220.317C170.415 220.983 173.885 220.642 177.038 219.336C180.191 218.03 182.886 215.818 184.782 212.98C186.678 210.143 187.69 206.806 187.69 203.394C187.685 198.819 185.865 194.433 182.63 191.198C179.395 187.963 175.009 186.144 170.435 186.138V186.138Z",
              fill: "#6C63FF"
            })]
          })]
        })
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      id: "navbarMainContainer",
      className: "w-full bg-background text-primarydark dark:bg-secondary dark:text-background flex flex-wrap px-4 smContainer:px-8 h-12 overflow-hidden",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        id: "navbarIcon",
        className: "w-full flex justify-between items-center mt-6",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(image_default.a, {
          onClick: onMenuClick,
          src: "/mobile-navbar/menu.svg",
          height: 20,
          width: 20
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        id: "navbarContainer",
        className: "w-full flex flex-wrap",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          id: "pdfSection",
          className: "w-full justify-start items-center mt-4",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            children: "Save as PDF:"
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          id: "linkSection",
          className: "w-full justify-start items-center mt-4",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            children: "Share your work with this public link:"
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "w-full flex",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
              value: "www.project.com",
              className: "bg-linkBackground text-sm px-2 py-1 dark:text-primarydark"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              src: "/mobile-navbar/foreign.svg",
              height: 28,
              width: 28
            })]
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "w-full flex items-center mt-4 border-l border-primary pl-2",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: "/dashboard/welcome",
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("svg", {
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
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("defs", {
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("style", {})
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("title", {
                children: "See You Soon"
              }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("g", {
                id: "See_You_Soon",
                "data-name": "See You Soon",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
                  className: "cls-1",
                  d: "M84.87,77.27l-7-41.18a6.6,6.6,0,0,0-13.1,1.58l1.83,24.6L56.93,36a6.73,6.73,0,0,0-12.78,4.17L51.82,67,40.57,48a6.45,6.45,0,0,0-11.41,6l8.33,18.24-4.57-6.45a6.48,6.48,0,0,0-10.9,7l21.25,36.71c.32.59,8,14.54,23.14,14.54,20.07,0,29.74-15.17,32.11-29.36,2.22-13.34,4.59-22,7.68-28.22C111.74,55.36,96.37,44.67,84.87,77.27Zm19.5-11.74c-3.18,6.36-5.61,15.24-7.87,28.79C94.28,107.69,85.2,122,66.41,122c-13.86,0-21.27-13.34-21.36-13.5L23.79,71.75A4.44,4.44,0,0,1,31.26,67L42.1,82.27a1,1,0,0,0,1.76-1L31,53.14a4.41,4.41,0,0,1,7.8-4.08L54.1,74.84A1,1,0,0,0,56,74L46.12,39.6A4.68,4.68,0,0,1,55,36.69L67.22,69.78a1,1,0,0,0,2-.43L66.84,37.52a4.56,4.56,0,0,1,9-1.09L83.55,81.7a1,1,0,0,0,2,.11c0-.17,5.17-17.84,12.54-22.75C104.93,54.49,106.48,61.32,104.37,65.53Z"
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
                  className: "cls-1",
                  d: "M127,67h-8a1,1,0,0,0,0,2h8A1,1,0,0,0,127,67Z"
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
                  className: "cls-1",
                  d: "M9,67H1a1,1,0,0,0,0,2H9A1,1,0,0,0,9,67Z"
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
                  className: "cls-1",
                  d: "M65,13V5a1,1,0,0,0-2,0v8A1,1,0,0,0,65,13Z"
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
                  className: "cls-1",
                  d: "M111.63,41.52c.39,0-.09.21,7.44-4.14a1,1,0,0,0-1-1.76l-6.93,4A1,1,0,0,0,111.63,41.52Z"
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
                  className: "cls-1",
                  d: "M15.86,94.62l-6.93,4a1,1,0,0,0,1,1.76l6.93-4A1,1,0,0,0,15.86,94.62Z"
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
                  className: "cls-1",
                  d: "M16.88,39.62l-6.93-4a1,1,0,0,0-1,1.76l6.93,4A1,1,0,0,0,16.88,39.62Z"
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
                  className: "cls-1",
                  d: "M119.07,98.62l-6.93-4a1,1,0,0,0-1,1.76l6.93,4A1,1,0,0,0,119.07,98.62Z"
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
                  className: "cls-1",
                  d: "M35.62,20.88a1,1,0,0,0,1.76-1l-4-6.93a1,1,0,0,0-1.76,1Z"
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
                  className: "cls-1",
                  d: "M92.38,20.88l4-6.93a1,1,0,0,0-1.76-1l-4,6.93A1,1,0,0,0,92.38,20.88Z"
                })]
              })]
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: "/dashboard/welcome",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
              className: "ml-4",
              children: "Welcome"
            })
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "w-full flex items-center mt-6 border-l border-primary pl-2",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: "/dashboard/startup",
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("svg", {
              // onClick={activeClassFn2}
              // onMouseEnter={() => setActiveHover2(true)}
              // onMouseLeave={() => setActiveHover2(false)}
              className: "fill-current text-primarydark dark:text-background",
              height: "36",
              width: "36",
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 128 128",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("defs", {
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("style", {})
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("title", {
                children: "Landing Success"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("g", {
                id: "Landing_Success",
                "data-name": "Landing Success",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
                  className: "cls-1",
                  d: "M109.3,90.1A46,46,0,0,0,65,36V20.08c1.78-.62,7.21-2.14,12.57.23a19.33,19.33,0,0,0,14.82,0c.87-.38.61.31.61-17.93a1,1,0,0,0-1.43-.93c-.07,0-6.69,2.87-13.18,0A19.41,19.41,0,0,0,65,.93,1,1,0,0,0,63,1V36a45.86,45.86,0,0,0-28.66,10.8C16.18,40.48,4,40,.79,45.51-2.29,50.86,3.94,59.3,10,65.68A11,11,0,0,0,18,83c.81,38.41,46.08,59.2,75.66,34.21,8.53,3,29,9.15,33.55,1.31C130.39,113,123.86,102.65,109.3,90.1ZM77.59,3.31A19.39,19.39,0,0,0,91,3.83V18.68c-1.79.62-7.22,2.13-12.57-.23A19.19,19.19,0,0,0,65,17.93V3.08C66.81,2.46,72.24,1,77.59,3.31ZM65,45v-7c39.69.91,58,50.27,28.21,76.81C71.32,107,46,92.66,27.77,78.64a11,11,0,0,0-3.2-16.13A43.88,43.88,0,0,1,63,38.06V45A1,1,0,0,0,65,45ZM32.55,48.36a46.21,46.21,0,0,0-9.83,13.28,10.93,10.93,0,0,0-11.4,2.47C-8.39,43.23,5.23,39.08,32.55,48.36ZM10,72a9,9,0,1,1,9,9A9,9,0,0,1,10,72Zm10,11a11,11,0,0,0,6.34-2.82c18.45,14.21,43.45,28.35,65.05,36.22C63,139.16,20.83,119.1,20.05,83Zm105.4,34.5c-2.51,4.35-14,3.62-30-1.85a45.61,45.61,0,0,0,13.42-23.21C121.59,103.58,128,113.12,125.45,117.47Z"
                })
              })]
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: "/dashboard/startup",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
              className: "ml-4",
              children: "Startup idea"
            })
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "w-full flex items-center mt-6 border-l border-primary pl-2",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("svg", {
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
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("defs", {
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("style", {})
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("title", {
              children: "Searching"
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("g", {
              id: "Searching",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
                className: "cls-1",
                d: "M79.57,36.43a22,22,0,1,0,0,31.14A22,22,0,0,0,79.57,36.43Zm-1.44,29.7a20,20,0,1,1,0-28.26A20,20,0,0,1,78.13,66.13Z"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
                className: "cls-1",
                d: "M117,0H31A11,11,0,0,0,20,11v97H1a1,1,0,0,0-1,1v8a11,11,0,0,0,11,11H97a11,11,0,0,0,11-11V104a3.42,3.42,0,0,0,2.41-1c4.71-4.71,5.59-5.13,5.59-7s-.66-2.08-8-9.42V20h19a1,1,0,0,0,1-1V11A11,11,0,0,0,117,0ZM90.62,126H11a9,9,0,0,1-9-9v-7H86C86,116.29,85,122,90.62,126ZM114,96c0,.79,0,.61-5,5.57a1.43,1.43,0,0,1-2,0L86.43,81a1.38,1.38,0,0,1,0-2c5.07-5.07,4.8-5,5.57-5s-.17-.75,14.28,13.7C113.87,95.31,114,95.11,114,96ZM82.37,70.37a26,26,0,1,1,0-36.74A26,26,0,0,1,82.37,70.37Zm2.79,0,3.52,3.52-2.8,2.8-3.52-3.52A26.44,26.44,0,0,0,85.16,70.36ZM94.43,73a3.53,3.53,0,0,0-4.23-.47l-3.75-3.75C100.27,50.28,87,24,64,24A28,28,0,0,0,36,52c0,23.37,26.71,36,44.79,22.45l3.73,3.74A3.41,3.41,0,0,0,85,82.43c22.22,22.23,20.57,20.61,21,20.92V117a9,9,0,0,1-18,0v-8a1,1,0,0,0-1-1H22V11a9,9,0,0,1,9-9c85.6,0,79.74-.08,79.41.17a11,11,0,0,0-4.14,6.32c-.41,1.77-.29-4.19-.29,76ZM126,18H108V11a9,9,0,0,1,18,0Z"
              })]
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            className: "ml-4",
            children: "Motivational stories"
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "w-full flex items-center mt-6 border-l border-primary pl-2",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: "/dashboard/account",
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("svg", {
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
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("defs", {
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("style", {})
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("title", {
                children: "Data User"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
                className: "cls-1",
                d: "M109,0H23a9,9,0,0,0-9,9c0,118,0,110,0,110.64A9.22,9.22,0,0,0,23.31,128H109a5,5,0,0,0,5-5V5A5,5,0,0,0,109,0Zm3,5V107a3,3,0,0,1-3,3H26V2h83A3,3,0,0,1,112,5ZM16,9a7,7,0,0,1,7-7h1V110H23a9,9,0,0,0-6.94,3.26C16,113.34,16,118.28,16,9Zm96,114a3,3,0,0,1-3,3H23.31c-6.13,0-9.56-6.94-5.68-11.43A6.91,6.91,0,0,1,23,112c90.91,0,87.06.44,89-1Z"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
                className: "cls-1",
                d: "M56.15,75.81A33,33,0,1,0,35,45,33.05,33.05,0,0,0,56.15,75.81Zm-7.53-6.68c5.89-22.82,32.86-22.83,38.76,0A30.88,30.88,0,0,1,48.62,69.13ZM68,14c28.07,0,41.61,34.51,21.09,53.65C86.56,59,80.82,52.83,73.57,50.75a13,13,0,1,0-11.14,0c-7.25,2.08-13,8.24-15.52,16.92C26.45,48.69,39.8,14,68,14Zm0,36A11,11,0,1,1,79,39,11,11,0,0,1,68,50Z"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
                className: "cls-1",
                d: "M96.5,87h-56a1,1,0,0,0,0,2h56A1,1,0,0,0,96.5,87Z"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
                className: "cls-1",
                d: "M96.5,99h-56a1,1,0,0,0,0,2h56A1,1,0,0,0,96.5,99Z"
              })]
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: "/dashboard/account",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
              className: "ml-4",
              children: "Account"
            })
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "w-full flex items-center mt-6 border-l border-primary pl-2",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("svg", {
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
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("defs", {
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("style", {})
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("title", {
              children: "Log Out"
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("g", {
              id: "Log_Out",
              "data-name": "Log Out",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
                className: "cls-1",
                d: "M44,61v6a1,1,0,0,0,2,0V61A1,1,0,0,0,44,61Z"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
                className: "cls-1",
                d: "M113,113H86V75h6v9a1,1,0,0,0,1,1c.64,0-.83,1.26,20.72-20.3a1,1,0,0,0,0-1.44l-20-20A1,1,0,0,0,92,44v9H86V14a1,1,0,0,0-1-1H54V1a1,1,0,0,0-1.35-1l-38,13A1,1,0,0,0,14,14c0,106.58-.38,100.6.69,101C55.34,128.88,52.74,128,53,128a1,1,0,0,0,1-1V115h59A1,1,0,0,0,113,113ZM93,55a1,1,0,0,0,1-1V46.46L111.56,64,94,81.54V74a1,1,0,0,0-1-1H54V55ZM54,21H77V53H54Zm30-6V53H79V20a1,1,0,0,0-1-1H54V15ZM52,125.57l-36-12.3V14.73L52,2.43ZM54,75H77v38H54Zm25,38V75h5v38Z"
              })]
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            className: "ml-4",
            children: "Log out"
          })]
        })]
      })]
    }), children]
  });
};

/* harmony default export */ var dashboard_MobileNavbar = (MobileNavbar);
// EXTERNAL MODULE: ./components/dashboard/DesktopNavbar.js
var DesktopNavbar = __webpack_require__("4yjf");

// CONCATENATED MODULE: ./components/dashboard/Navbar.js







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
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
    children: size.width < 860 ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(dashboard_MobileNavbar, {
      children: children
    }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(DesktopNavbar["b" /* default */], {
      children: children
    })
  });
};

/* harmony default export */ var dashboard_Navbar = (Navbar);
// EXTERNAL MODULE: external "next-seo"
var external_next_seo_ = __webpack_require__("efsx");

// CONCATENATED MODULE: ./next-seo.config.js
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
/* harmony default export */ var next_seo_config = (SEO);
// CONCATENATED MODULE: ./pages/_app.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










function MyApp({
  Component,
  pageProps
}) {
  const router = Object(router_["useRouter"])();
  const directRoute = router.pathname; // DOBRE WYMYŚLIŁEM --> Jeśli w url jest /dashboard, to NavBar ten z boku, mają wszystkie komponenty (czyli cały dashboard, bez strony początkowej)

  if (directRoute.includes('/dashboard')) {
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])(newAuth["a" /* AuthProvider */], {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_next_themes_["ThemeProvider"], {
        attribute: "class",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "bg-background dark:bg-secondary",
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(dashboard_Navbar, {
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_next_seo_["DefaultSeo"], _objectSpread({}, next_seo_config)), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Component, _objectSpread({}, pageProps))]
          })
        })
      })
    });
  } else {
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])(newAuth["a" /* AuthProvider */], {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Component, _objectSpread({}, pageProps))
    });
  }
}

/* harmony default export */ var _app = __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "1ccW":
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

/***/ "2+G7":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/server");

/***/ }),

/***/ "24z6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.initScriptLoader = initScriptLoader;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("1ccW"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("98FW"));

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _headManagerContext = __webpack_require__("Y8yu");

var _headManager = __webpack_require__("DqTX");

var _requestIdleCallback = __webpack_require__("0G5g");

const ScriptCache = new Map();
const LoadCache = new Set();
const ignoreProps = ['onLoad', 'dangerouslySetInnerHTML', 'children', 'onError', 'strategy', 'preload'];

const loadScript = props => {
  const {
    src,
    id,
    onLoad = () => {},
    dangerouslySetInnerHTML,
    children = '',
    onError
  } = props;
  const cacheKey = id || src;

  if (ScriptCache.has(src)) {
    if (!LoadCache.has(cacheKey)) {
      LoadCache.add(cacheKey); // Execute onLoad since the script loading has begun

      ScriptCache.get(src).then(onLoad, onError);
    }

    return;
  }

  const el = document.createElement('script');
  const loadPromise = new Promise((resolve, reject) => {
    el.addEventListener('load', function () {
      resolve();

      if (onLoad) {
        onLoad.call(this);
      }
    });
    el.addEventListener('error', function () {
      reject();

      if (onError) {
        onError();
      }
    });
  });

  if (src) {
    ScriptCache.set(src, loadPromise);
    LoadCache.add(cacheKey);
  }

  if (dangerouslySetInnerHTML) {
    el.innerHTML = dangerouslySetInnerHTML.__html || '';
  } else if (children) {
    el.textContent = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
  } else if (src) {
    el.src = src;
  }

  for (const [k, value] of Object.entries(props)) {
    if (value === undefined || ignoreProps.includes(k)) {
      continue;
    }

    const attr = _headManager.DOMAttributeNames[k] || k.toLowerCase();
    el.setAttribute(attr, value);
  }

  document.body.appendChild(el);
};

function handleClientScriptLoad(props) {
  const {
    strategy = 'defer'
  } = props;

  if (strategy === 'defer') {
    loadScript(props);
  } else if (strategy === 'lazy') {
    window.addEventListener('load', () => {
      (0, _requestIdleCallback.requestIdleCallback)(() => loadScript(props));
    });
  }
}

function loadLazyScript(props) {
  if (document.readyState === 'complete') {
    (0, _requestIdleCallback.requestIdleCallback)(() => loadScript(props));
  } else {
    window.addEventListener('load', () => {
      (0, _requestIdleCallback.requestIdleCallback)(() => loadScript(props));
    });
  }
}

function initScriptLoader(scriptLoaderItems) {
  scriptLoaderItems.forEach(handleClientScriptLoad);
}

function Script(props) {
  const {
    src = '',
    onLoad = () => {},
    dangerouslySetInnerHTML,
    children = '',
    strategy = 'defer',
    onError,
    preload = false
  } = props,
        restProps = (0, _objectWithoutPropertiesLoose2.default)(props, ["src", "onLoad", "dangerouslySetInnerHTML", "children", "strategy", "onError", "preload"]); // Context is available only during SSR

  const {
    updateScripts,
    scripts
  } = (0, _react.useContext)(_headManagerContext.HeadManagerContext);
  (0, _react.useEffect)(() => {
    if (strategy === 'defer') {
      loadScript(props);
    } else if (strategy === 'lazy') {
      loadLazyScript(props);
    }
  }, [props, strategy]);

  if (true) {
    return null;
  }

  if (strategy === 'dangerouslyBlockRendering') {
    const syncProps = (0, _extends2.default)({}, restProps);

    for (const [k, value] of Object.entries({
      src,
      onLoad,
      onError,
      dangerouslySetInnerHTML,
      children
    })) {
      if (!value) {
        continue;
      }

      if (k === 'children') {
        syncProps.dangerouslySetInnerHTML = {
          __html: typeof value === 'string' ? value : Array.isArray(value) ? value.join('') : ''
        };
      } else {
        ;
        syncProps[k] = value;
      }
    }

    return /*#__PURE__*/_react.default.createElement("script", syncProps);
  } else if (strategy === 'defer') {
    if (updateScripts && preload) {
      scripts.defer = (scripts.defer || []).concat([src]);
      updateScripts(scripts);
    }
  } else if (strategy === 'eager') {
    if (updateScripts) {
      scripts.eager = (scripts.eager || []).concat([(0, _extends2.default)({
        src,
        onLoad,
        onError
      }, restProps)]);
      updateScripts(scripts);
    }
  }

  return null;
}

var _default = Script;
exports.default = _default;

/***/ }),

/***/ "3SKS":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ "3WeD":
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

/***/ "3fKi":
/***/ (function(module, exports) {

module.exports = require("@next/env");

/***/ }),

/***/ "3wub":
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

/***/ "489e":
/***/ (function(module, exports) {

module.exports = require("gsap");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4yjf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IsActiveContext; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("489e");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("lN3F");
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_newAuth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("cqNN");








const IsActiveContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])();

const DesktopNavbar = ({
  children
}) => {
  const {
    logOut
  } = Object(_lib_newAuth__WEBPACK_IMPORTED_MODULE_6__[/* useAuth */ "b"])();
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

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(IsActiveContext.Provider, {
    value: active,
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      className: "fixed right-0 z-50",
      style: {
        overflow: 'unset',
        height: 'fit-content'
      },
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", {
        onClick: () => setTheme(theme === 'dark' ? 'light' : 'dark'),
        width: "100",
        height: "100",
        style: {
          overflow: 'unset',
          cursor: 'pointer'
        },
        viewBox: "0 0 770 772",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("g", {
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
            d: "M769.001 0H310.286C306.762 21.4871 304.994 43.2257 305.001 65C305.001 284.809 483.192 463 703.001 463C725.114 463.008 747.19 461.185 769.001 457.55V0Z",
            fill: "#0A1230"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
            d: "M574.849 248.809C567.965 248.815 561.135 247.582 554.687 245.17C554.318 245.032 553.98 244.822 553.692 244.553C553.404 244.284 553.172 243.961 553.009 243.603C552.846 243.244 552.755 242.857 552.742 242.463C552.728 242.07 552.792 241.677 552.931 241.308C553.069 240.939 553.278 240.601 553.547 240.313C553.816 240.025 554.139 239.793 554.498 239.63C554.856 239.467 555.244 239.376 555.637 239.363C556.031 239.349 556.424 239.414 556.792 239.552C565.341 242.711 574.566 243.586 583.557 242.09C592.547 240.594 600.991 236.779 608.056 231.021C586.018 231.255 564.461 220.84 553.737 204.128C546.842 193.385 544.588 180.744 547.216 167.57C549.229 158.017 553.36 149.037 559.305 141.293C547.954 144.905 538.184 152.302 531.628 162.248C525.072 172.193 522.126 184.087 523.282 195.943C523.322 196.336 523.284 196.733 523.171 197.111C523.057 197.489 522.871 197.841 522.621 198.147C522.371 198.453 522.063 198.706 521.715 198.893C521.367 199.08 520.986 199.196 520.593 199.235C520.2 199.274 519.804 199.235 519.426 199.12C519.048 199.005 518.697 198.817 518.392 198.566C518.087 198.316 517.834 198.007 517.649 197.658C517.463 197.31 517.349 196.928 517.311 196.535C515.854 181.619 520.223 166.716 529.504 154.948C538.784 143.18 552.258 135.457 567.103 133.397C567.724 133.311 568.356 133.421 568.911 133.713C569.466 134.004 569.915 134.462 570.197 135.021C570.478 135.581 570.577 136.215 570.48 136.835C570.382 137.454 570.094 138.027 569.654 138.473C554.31 154.059 544.999 179.402 558.786 200.888C569.664 217.837 593.069 227.532 615.714 224.468C616.322 224.386 616.94 224.491 617.485 224.771C618.031 225.051 618.478 225.491 618.765 226.032C619.053 226.574 619.168 227.19 619.095 227.799C619.022 228.407 618.764 228.979 618.356 229.436C612.873 235.542 606.164 240.422 598.667 243.76C591.171 247.098 583.055 248.818 574.849 248.809V248.809Z",
            fill: "#6C63FF"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
            d: "M527.001 250C522.65 250 518.397 248.71 514.779 246.292C511.161 243.875 508.341 240.439 506.676 236.419C505.011 232.399 504.575 227.976 505.424 223.708C506.273 219.44 508.368 215.52 511.445 212.444C514.522 209.367 518.442 207.272 522.709 206.423C526.977 205.574 531.401 206.01 535.421 207.675C539.441 209.34 542.876 212.16 545.294 215.777C547.711 219.395 549.001 223.649 549.001 228C548.995 233.833 546.675 239.425 542.551 243.549C538.426 247.673 532.834 249.993 527.001 250V250ZM527.001 212C523.837 212 520.744 212.938 518.112 214.697C515.481 216.455 513.43 218.953 512.219 221.877C511.008 224.801 510.692 228.018 511.309 231.121C511.926 234.225 513.45 237.076 515.688 239.314C517.925 241.551 520.776 243.075 523.88 243.693C526.984 244.31 530.201 243.993 533.124 242.782C536.048 241.571 538.547 239.52 540.305 236.889C542.063 234.258 543.001 231.165 543.001 228C542.997 223.758 541.309 219.691 538.31 216.692C535.31 213.692 531.243 212.005 527.001 212V212Z",
            fill: "#6C63FF"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("g", {
            ref: manRef,
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
              d: "M8.69074 567.078C7.24546 566.853 5.86504 566.321 4.64182 565.518C3.4186 564.716 2.38077 563.662 1.59771 562.427C0.814652 561.191 0.304423 559.802 0.101157 558.354C-0.102109 556.905 0.00627512 555.43 0.419044 554.026L8.20737 527.546L20.042 529.765L20.5508 556.732C20.5791 558.232 20.2788 559.719 19.6709 561.091C19.063 562.462 18.1623 563.683 17.032 564.669C15.9017 565.655 14.5693 566.382 13.1283 566.798C11.6873 567.214 10.1727 567.31 8.69074 567.078V567.078Z",
              fill: "#9F616A"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
              d: "M76.996 736.132L62.203 733.913L65.901 589.678L45.191 651.81L34.096 739.091L20.042 735.393L17.083 644.414L33.356 537.162L114.719 555.654L76.996 736.132Z",
              fill: "#0A1230"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
              d: "M70.2046 771.636C67.3209 771.636 64.5553 770.491 62.5163 768.452C60.4772 766.413 59.3317 763.647 59.3317 760.763C59.3317 760.408 59.3491 760.053 59.3839 759.699L61.6811 736.345C61.7365 735.787 61.9281 735.251 62.2391 734.784C62.5501 734.317 62.9709 733.933 63.4647 733.667C67.8254 731.315 72.3096 731.885 76.8994 734.955C77.3066 735.229 77.6497 735.588 77.9052 736.007C78.1607 736.427 78.3226 736.896 78.3799 737.384L81.0017 759.482C81.1827 761.008 81.0385 762.554 80.5785 764.02C80.1185 765.485 79.3533 766.836 78.3332 767.985C77.3131 769.133 76.0613 770.052 74.6602 770.682C73.2591 771.311 71.7406 771.636 70.2046 771.636H70.2046Z",
              fill: "#0A1230"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
              d: "M9.82084 769.898C8.42675 769.387 7.16714 768.565 6.13726 767.496C5.10738 766.426 4.33419 765.136 3.87616 763.724C3.41814 762.311 3.28727 760.813 3.49344 759.343C3.69962 757.872 4.23745 756.468 5.06626 755.236L20.8463 731.779C26.5348 727.697 29.9657 729.685 31.2995 737.313L34.4898 729.32L36.8936 731.942C38.1133 733.273 38.823 734.992 38.8971 736.795C38.9712 738.599 38.4049 740.37 37.2984 741.796L20.9304 766.706C19.6567 768.348 17.8938 769.542 15.8967 770.116C13.8996 770.689 11.7717 770.613 9.82084 769.898V769.898Z",
              fill: "#0A1230"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
              d: "M109.542 398.105C121.797 398.105 131.732 388.17 131.732 375.915C131.732 363.659 121.797 353.725 109.542 353.725C97.2865 353.725 87.3517 363.659 87.3517 375.915C87.3517 388.17 97.2865 398.105 109.542 398.105Z",
              fill: "#9F616A"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
              d: "M123.595 416.596L85.8723 409.2C90.7313 398.836 94.6225 395.33 90.3103 384.051H120.637C117.962 395.733 120.547 406.698 123.595 416.596Z",
              fill: "#9F616A"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
              d: "M119.157 566.009L30.3973 540.86C48.1761 501.731 51.9 458.769 46.6287 413.356C46.5034 412.285 46.5904 411.199 46.8847 410.16C47.1791 409.122 47.6751 408.152 48.3443 407.306C49.0135 406.459 49.843 405.753 50.7852 405.227C51.7275 404.701 52.7641 404.366 53.8359 404.24C53.9357 404.229 54.0356 404.219 54.1358 404.211C65.7137 403.257 77.7844 402.033 90.3104 400.324L104.364 409.939L120.637 406.241C125.858 408.772 131.118 410.877 135.864 412.975C140.191 414.893 143.649 418.354 145.563 422.683C147.476 427.012 147.709 431.898 146.215 436.389C131.752 480.066 122.071 523.329 119.157 566.009Z",
              fill: "#E6E6E6"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
              d: "M22.261 532.724L5.24866 530.505L45.5508 414.38C47.6008 408.473 52.6848 405.276 58.8745 404.392L64.7918 405.131L60.3538 473.92L22.261 532.724Z",
              fill: "#E6E6E6"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
              d: "M155.525 510.524C152.692 510.742 149.863 510.06 147.441 508.574C145.019 507.089 143.128 504.877 142.038 502.253L125.814 463.195L139.128 415.117L142.648 417.357C142.987 417.572 143.322 417.794 143.652 418.02C148.593 421.481 152.442 426.283 154.746 431.858C157.049 437.434 157.711 443.552 156.654 449.491L153.182 469.852L167.505 500.605C166.777 503.294 165.235 505.69 163.089 507.466C160.944 509.243 158.302 510.311 155.525 510.524V510.524Z",
              fill: "#E6E6E6"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
              d: "M111.248 343.027C115.04 343.201 118.733 344.288 122.014 346.196C122.769 346.636 122.42 348.219 123.117 348.736C123.995 349.386 125.902 348.991 126.68 349.753C129.19 352.203 131.123 355.182 132.338 358.474C133.552 361.765 134.018 365.285 133.702 368.779L132.464 381.09L129.543 377.896C124.306 372.089 117.035 368.519 109.238 367.927C108.906 367.904 108.574 367.887 108.242 367.874L110.489 363.941L106.584 367.847C104.802 367.866 103.024 368.011 101.263 368.28L104.251 363.05L98.5171 368.784L98.5166 368.785C96.1716 369.3 93.9805 370.36 92.1198 371.877C90.2591 373.395 88.7808 375.328 87.8042 377.522L87.1675 378.933L86.4542 367.188C86.3177 360.911 88.6805 354.837 93.0226 350.302C97.3647 345.767 103.331 343.142 109.608 343.006C110.155 342.994 110.702 343.001 111.248 343.027Z",
              fill: "#2F2E41"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
              d: "M131.877 384.438C132.861 384.438 133.659 382.543 133.659 380.205C133.659 377.867 132.861 375.972 131.877 375.972C130.892 375.972 130.094 377.867 130.094 380.205C130.094 382.543 130.892 384.438 131.877 384.438Z",
              fill: "#9F616A"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
              d: "M87.3195 383.101C88.3038 383.101 89.1017 381.206 89.1017 378.868C89.1017 376.53 88.3038 374.635 87.3195 374.635C86.3351 374.635 85.5372 376.53 85.5372 378.868C85.5372 381.206 86.3351 383.101 87.3195 383.101Z",
              fill: "#9F616A"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
              d: "M174.034 435.419C175.455 435.767 176.785 436.414 177.936 437.317C179.086 438.22 180.031 439.359 180.706 440.656C181.382 441.954 181.772 443.381 181.852 444.841C181.931 446.302 181.698 447.763 181.168 449.126L171.16 474.85L159.556 471.634L161.338 444.721C161.437 443.225 161.863 441.768 162.585 440.453C163.307 439.139 164.308 437.998 165.518 437.111C166.728 436.225 168.117 435.614 169.588 435.322C171.059 435.029 172.577 435.063 174.034 435.419H174.034Z",
              fill: "#9F616A"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
              d: "M160.579 509.055L142.087 497.22L157.62 465.414L176.851 472.811L167.236 500.918L160.579 509.055Z",
              fill: "#E6E6E6"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
              d: "M173.001 409.101V284H171.001V409.101C169.787 409.349 168.709 410.039 167.974 411.037C167.24 412.035 166.902 413.27 167.027 414.503C167.151 415.735 167.729 416.878 168.648 417.709C169.567 418.54 170.762 419 172.001 419C173.241 419 174.435 418.54 175.355 417.709C176.274 416.878 176.852 415.735 176.976 414.503C177.101 413.27 176.763 412.035 176.029 411.037C175.294 410.039 174.216 409.349 173.001 409.101V409.101ZM172.001 417C171.408 417 170.828 416.824 170.335 416.494C169.841 416.165 169.457 415.696 169.23 415.148C169.003 414.6 168.943 413.997 169.059 413.415C169.175 412.833 169.461 412.298 169.88 411.879C170.3 411.459 170.834 411.173 171.416 411.058C171.998 410.942 172.601 411.001 173.15 411.228C173.698 411.455 174.166 411.84 174.496 412.333C174.826 412.827 175.001 413.407 175.001 414C175.001 414.795 174.684 415.558 174.122 416.12C173.559 416.683 172.797 416.999 172.001 417V417Z",
              fill: "#0A1230"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
              d: "M170.435 164.569C169.29 164.569 168.193 164.115 167.384 163.306C166.575 162.497 166.121 161.399 166.121 160.255V147.314C166.122 146.171 166.578 145.075 167.387 144.268C168.195 143.46 169.292 143.007 170.435 143.007C171.578 143.007 172.674 143.46 173.483 144.268C174.291 145.075 174.747 146.171 174.748 147.314V160.255C174.748 160.822 174.637 161.383 174.42 161.906C174.203 162.43 173.885 162.905 173.485 163.306C173.084 163.706 172.609 164.024 172.085 164.241C171.562 164.458 171.001 164.569 170.435 164.569V164.569Z",
              fill: "#6C63FF"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
              d: "M170.435 263.787C169.868 263.787 169.307 263.676 168.784 263.459C168.26 263.242 167.785 262.925 167.384 262.524C166.984 262.123 166.666 261.648 166.449 261.124C166.232 260.601 166.121 260.04 166.121 259.474V246.532C166.12 245.965 166.231 245.403 166.447 244.879C166.664 244.355 166.981 243.879 167.382 243.477C167.783 243.076 168.258 242.758 168.782 242.541C169.306 242.323 169.867 242.212 170.435 242.212C171.002 242.212 171.563 242.323 172.087 242.541C172.611 242.758 173.087 243.076 173.487 243.477C173.888 243.879 174.206 244.355 174.422 244.879C174.638 245.403 174.749 245.965 174.748 246.532V259.474C174.748 260.04 174.637 260.601 174.42 261.124C174.203 261.648 173.886 262.123 173.485 262.524C173.084 262.925 172.609 263.242 172.085 263.459C171.562 263.676 171.001 263.787 170.435 263.787V263.787Z",
              fill: "#6C63FF"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
              d: "M200.939 177.203C200.085 177.203 199.251 176.95 198.542 176.476C197.833 176.002 197.28 175.328 196.953 174.54C196.627 173.752 196.541 172.885 196.708 172.048C196.874 171.211 197.285 170.442 197.888 169.839L207.039 160.688C207.848 159.88 208.945 159.426 210.089 159.427C211.233 159.427 212.329 159.882 213.138 160.69C213.947 161.499 214.401 162.596 214.402 163.739C214.402 164.883 213.948 165.98 213.14 166.789L203.989 175.94C203.589 176.341 203.113 176.659 202.59 176.876C202.066 177.093 201.505 177.204 200.939 177.203V177.203Z",
              fill: "#6C63FF"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
              d: "M130.78 247.362C129.926 247.362 129.092 247.109 128.383 246.635C127.674 246.161 127.121 245.488 126.794 244.699C126.468 243.911 126.382 243.044 126.549 242.207C126.715 241.37 127.126 240.602 127.729 239.998L136.88 230.848C137.689 230.039 138.786 229.584 139.93 229.584C141.074 229.584 142.172 230.038 142.981 230.847C143.79 231.656 144.244 232.754 144.244 233.898C144.244 235.042 143.79 236.139 142.981 236.948L133.83 246.099C133.43 246.5 132.954 246.818 132.431 247.035C131.907 247.252 131.346 247.363 130.78 247.362V247.362Z",
              fill: "#6C63FF"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
              d: "M226.514 207.708H213.573C212.43 207.706 211.334 207.251 210.527 206.442C209.719 205.633 209.266 204.537 209.266 203.394C209.266 202.251 209.719 201.154 210.527 200.346C211.334 199.537 212.43 199.082 213.573 199.08H226.514C227.081 199.079 227.643 199.19 228.167 199.406C228.691 199.623 229.168 199.94 229.569 200.341C229.97 200.742 230.289 201.218 230.506 201.741C230.723 202.265 230.835 202.827 230.835 203.394C230.835 203.961 230.723 204.522 230.506 205.046C230.289 205.57 229.97 206.046 229.569 206.446C229.168 206.847 228.691 207.165 228.167 207.381C227.643 207.597 227.081 207.708 226.514 207.708V207.708Z",
              fill: "#6C63FF"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
              d: "M127.296 207.708H114.355C113.788 207.708 113.226 207.597 112.702 207.381C112.178 207.165 111.701 206.847 111.3 206.446C110.899 206.046 110.581 205.57 110.363 205.046C110.146 204.522 110.034 203.961 110.034 203.394C110.034 202.827 110.146 202.265 110.363 201.741C110.581 201.218 110.899 200.742 111.3 200.341C111.701 199.94 112.178 199.623 112.702 199.406C113.226 199.19 113.788 199.079 114.355 199.08H127.296C128.439 199.082 129.535 199.537 130.342 200.346C131.15 201.154 131.604 202.251 131.604 203.394C131.604 204.537 131.15 205.633 130.342 206.442C129.535 207.251 128.439 207.706 127.296 207.708H127.296Z",
              fill: "#6C63FF"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
              d: "M210.09 247.362C209.523 247.363 208.962 247.252 208.438 247.035C207.915 246.818 207.439 246.5 207.039 246.099L197.888 236.948C197.487 236.548 197.169 236.072 196.951 235.549C196.734 235.025 196.622 234.464 196.622 233.897C196.621 233.33 196.733 232.769 196.949 232.245C197.166 231.721 197.484 231.245 197.885 230.844C198.286 230.443 198.762 230.125 199.286 229.909C199.809 229.692 200.371 229.58 200.938 229.581C201.505 229.581 202.066 229.693 202.589 229.91C203.113 230.128 203.589 230.446 203.989 230.848L213.14 239.998C213.743 240.602 214.154 241.37 214.32 242.207C214.487 243.044 214.401 243.911 214.075 244.7C213.748 245.488 213.195 246.161 212.486 246.635C211.777 247.11 210.943 247.363 210.09 247.363V247.362Z",
              fill: "#6C63FF"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
              d: "M139.93 177.203C139.364 177.204 138.803 177.093 138.279 176.876C137.756 176.659 137.28 176.341 136.88 175.94L127.729 166.789C127.329 166.389 127.011 165.913 126.794 165.39C126.577 164.866 126.466 164.305 126.466 163.739C126.466 163.172 126.577 162.611 126.794 162.088C127.011 161.564 127.329 161.089 127.729 160.688C128.13 160.288 128.605 159.97 129.129 159.753C129.652 159.536 130.213 159.425 130.78 159.425C131.346 159.425 131.907 159.536 132.43 159.753C132.954 159.97 133.429 160.288 133.83 160.688L142.981 169.839C143.584 170.442 143.995 171.211 144.161 172.048C144.328 172.885 144.242 173.752 143.916 174.54C143.589 175.329 143.036 176.002 142.327 176.476C141.617 176.95 140.783 177.203 139.93 177.203V177.203Z",
              fill: "#6C63FF"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
              d: "M170.435 229.277C165.315 229.277 160.311 227.759 156.055 224.915C151.798 222.071 148.481 218.028 146.522 213.299C144.563 208.569 144.05 203.365 145.049 198.344C146.048 193.323 148.513 188.711 152.133 185.092C155.752 181.472 160.364 179.007 165.385 178.008C170.406 177.009 175.61 177.522 180.34 179.481C185.069 181.44 189.111 184.757 191.955 189.014C194.8 193.27 196.318 198.275 196.318 203.394C196.31 210.256 193.58 216.835 188.728 221.687C183.876 226.54 177.297 229.269 170.435 229.277V229.277ZM170.435 186.138C167.022 186.138 163.686 187.15 160.848 189.046C158.01 190.942 155.799 193.637 154.493 196.79C153.187 199.943 152.845 203.413 153.511 206.76C154.177 210.107 155.82 213.182 158.233 215.595C160.646 218.008 163.721 219.652 167.068 220.317C170.415 220.983 173.885 220.642 177.038 219.336C180.191 218.03 182.886 215.818 184.782 212.98C186.678 210.143 187.69 206.806 187.69 203.394C187.685 198.819 185.865 194.433 182.63 191.198C179.395 187.963 175.009 186.144 170.435 186.138V186.138Z",
              fill: "#6C63FF"
            })]
          })]
        })
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      className: "h-full w-full overflow-hidden bg-background dark:bg-secondary",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
        ref: navRef,
        onMouseEnter: mouseEnterNav,
        onMouseLeave: mouseLeaveNav,
        className: "h-screen w-20 bg-background dark:bg-secondary fixed z-0 overflow-hidden",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
          className: "mt-6 w-52 grid grid-cols-80px items-center hover:opacity-100",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
            href: "/dashboard/welcome",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("svg", {
              onClick: activeClassFn1,
              onMouseEnter: () => setActiveHover1(true),
              onMouseLeave: () => setActiveHover1(false),
              height: "45",
              width: "45",
              className: `fill-current text-primarydark dark:text-background block m-auto opacity-50 hover:opacity-100 cursor-pointer ${activeClass1 ? 'opacity-100' : 'opacity-50'}`,
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 128 128",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("defs", {
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("style", {})
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("title", {
                children: "See You Soon"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("g", {
                id: "See_You_Soon",
                "data-name": "See You Soon",
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
                  className: "cls-1",
                  d: "M84.87,77.27l-7-41.18a6.6,6.6,0,0,0-13.1,1.58l1.83,24.6L56.93,36a6.73,6.73,0,0,0-12.78,4.17L51.82,67,40.57,48a6.45,6.45,0,0,0-11.41,6l8.33,18.24-4.57-6.45a6.48,6.48,0,0,0-10.9,7l21.25,36.71c.32.59,8,14.54,23.14,14.54,20.07,0,29.74-15.17,32.11-29.36,2.22-13.34,4.59-22,7.68-28.22C111.74,55.36,96.37,44.67,84.87,77.27Zm19.5-11.74c-3.18,6.36-5.61,15.24-7.87,28.79C94.28,107.69,85.2,122,66.41,122c-13.86,0-21.27-13.34-21.36-13.5L23.79,71.75A4.44,4.44,0,0,1,31.26,67L42.1,82.27a1,1,0,0,0,1.76-1L31,53.14a4.41,4.41,0,0,1,7.8-4.08L54.1,74.84A1,1,0,0,0,56,74L46.12,39.6A4.68,4.68,0,0,1,55,36.69L67.22,69.78a1,1,0,0,0,2-.43L66.84,37.52a4.56,4.56,0,0,1,9-1.09L83.55,81.7a1,1,0,0,0,2,.11c0-.17,5.17-17.84,12.54-22.75C104.93,54.49,106.48,61.32,104.37,65.53Z"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
                  className: "cls-1",
                  d: "M127,67h-8a1,1,0,0,0,0,2h8A1,1,0,0,0,127,67Z"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
                  className: "cls-1",
                  d: "M9,67H1a1,1,0,0,0,0,2H9A1,1,0,0,0,9,67Z"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
                  className: "cls-1",
                  d: "M65,13V5a1,1,0,0,0-2,0v8A1,1,0,0,0,65,13Z"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
                  className: "cls-1",
                  d: "M111.63,41.52c.39,0-.09.21,7.44-4.14a1,1,0,0,0-1-1.76l-6.93,4A1,1,0,0,0,111.63,41.52Z"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
                  className: "cls-1",
                  d: "M15.86,94.62l-6.93,4a1,1,0,0,0,1,1.76l6.93-4A1,1,0,0,0,15.86,94.62Z"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
                  className: "cls-1",
                  d: "M16.88,39.62l-6.93-4a1,1,0,0,0-1,1.76l6.93,4A1,1,0,0,0,16.88,39.62Z"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
                  className: "cls-1",
                  d: "M119.07,98.62l-6.93-4a1,1,0,0,0-1,1.76l6.93,4A1,1,0,0,0,119.07,98.62Z"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
                  className: "cls-1",
                  d: "M35.62,20.88a1,1,0,0,0,1.76-1l-4-6.93a1,1,0,0,0-1.76,1Z"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
                  className: "cls-1",
                  d: "M92.38,20.88l4-6.93a1,1,0,0,0-1.76-1l-4,6.93A1,1,0,0,0,92.38,20.88Z"
                })]
              })]
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
            href: "/dashboard/welcome",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
              onClick: activeClassFn1,
              className: `text-primarydark dark:text-background ml-1 cursor-pointer opacity-50 ${activeHover1 ? 'opacity-100' : 'opacity-50'} ${activeClass1 ? 'opacity-100' : 'opacity-50'}`,
              children: "Welcome"
            })
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
          className: "mt-6 w-52 grid grid-cols-80px items-center",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
            href: "/dashboard/startup",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("svg", {
              onClick: activeClassFn2,
              onMouseEnter: () => setActiveHover2(true),
              onMouseLeave: () => setActiveHover2(false),
              height: "45",
              width: "45",
              className: `fill-current text-primarydark dark:text-background block m-auto opacity-50 hover:opacity-100 cursor-pointer ${activeClass2 ? 'opacity-100' : 'opacity-50'}`,
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 128 128",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("defs", {
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("style", {})
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("title", {
                children: "Landing Success"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("g", {
                id: "Landing_Success",
                "data-name": "Landing Success",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
                  className: "cls-1",
                  d: "M109.3,90.1A46,46,0,0,0,65,36V20.08c1.78-.62,7.21-2.14,12.57.23a19.33,19.33,0,0,0,14.82,0c.87-.38.61.31.61-17.93a1,1,0,0,0-1.43-.93c-.07,0-6.69,2.87-13.18,0A19.41,19.41,0,0,0,65,.93,1,1,0,0,0,63,1V36a45.86,45.86,0,0,0-28.66,10.8C16.18,40.48,4,40,.79,45.51-2.29,50.86,3.94,59.3,10,65.68A11,11,0,0,0,18,83c.81,38.41,46.08,59.2,75.66,34.21,8.53,3,29,9.15,33.55,1.31C130.39,113,123.86,102.65,109.3,90.1ZM77.59,3.31A19.39,19.39,0,0,0,91,3.83V18.68c-1.79.62-7.22,2.13-12.57-.23A19.19,19.19,0,0,0,65,17.93V3.08C66.81,2.46,72.24,1,77.59,3.31ZM65,45v-7c39.69.91,58,50.27,28.21,76.81C71.32,107,46,92.66,27.77,78.64a11,11,0,0,0-3.2-16.13A43.88,43.88,0,0,1,63,38.06V45A1,1,0,0,0,65,45ZM32.55,48.36a46.21,46.21,0,0,0-9.83,13.28,10.93,10.93,0,0,0-11.4,2.47C-8.39,43.23,5.23,39.08,32.55,48.36ZM10,72a9,9,0,1,1,9,9A9,9,0,0,1,10,72Zm10,11a11,11,0,0,0,6.34-2.82c18.45,14.21,43.45,28.35,65.05,36.22C63,139.16,20.83,119.1,20.05,83Zm105.4,34.5c-2.51,4.35-14,3.62-30-1.85a45.61,45.61,0,0,0,13.42-23.21C121.59,103.58,128,113.12,125.45,117.47Z"
                })
              })]
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
            href: "/dashboard/startup",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
              onClick: activeClassFn2,
              className: `text-primarydark dark:text-background ml-1 cursor-pointer opacity-50 ${activeHover2 ? 'opacity-100' : 'opacity-50'} ${activeClass2 ? 'opacity-100' : 'opacity-50'}`,
              children: "Startup idea"
            })
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
          className: "mt-6 w-52 grid grid-cols-80px items-center",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("svg", {
            onClick: activeClassFn3,
            onMouseEnter: () => setActiveHover3(true),
            onMouseLeave: () => setActiveHover3(false),
            height: "45",
            width: "45",
            className: `fill-current text-primarydark dark:text-background block m-auto opacity-50 hover:opacity-100 cursor-pointer ${activeClass3 ? 'opacity-100' : 'opacity-50'}`,
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 128 128",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("defs", {
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("style", {})
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("title", {
              children: "Searching"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("g", {
              id: "Searching",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
                className: "cls-1",
                d: "M79.57,36.43a22,22,0,1,0,0,31.14A22,22,0,0,0,79.57,36.43Zm-1.44,29.7a20,20,0,1,1,0-28.26A20,20,0,0,1,78.13,66.13Z"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
                className: "cls-1",
                d: "M117,0H31A11,11,0,0,0,20,11v97H1a1,1,0,0,0-1,1v8a11,11,0,0,0,11,11H97a11,11,0,0,0,11-11V104a3.42,3.42,0,0,0,2.41-1c4.71-4.71,5.59-5.13,5.59-7s-.66-2.08-8-9.42V20h19a1,1,0,0,0,1-1V11A11,11,0,0,0,117,0ZM90.62,126H11a9,9,0,0,1-9-9v-7H86C86,116.29,85,122,90.62,126ZM114,96c0,.79,0,.61-5,5.57a1.43,1.43,0,0,1-2,0L86.43,81a1.38,1.38,0,0,1,0-2c5.07-5.07,4.8-5,5.57-5s-.17-.75,14.28,13.7C113.87,95.31,114,95.11,114,96ZM82.37,70.37a26,26,0,1,1,0-36.74A26,26,0,0,1,82.37,70.37Zm2.79,0,3.52,3.52-2.8,2.8-3.52-3.52A26.44,26.44,0,0,0,85.16,70.36ZM94.43,73a3.53,3.53,0,0,0-4.23-.47l-3.75-3.75C100.27,50.28,87,24,64,24A28,28,0,0,0,36,52c0,23.37,26.71,36,44.79,22.45l3.73,3.74A3.41,3.41,0,0,0,85,82.43c22.22,22.23,20.57,20.61,21,20.92V117a9,9,0,0,1-18,0v-8a1,1,0,0,0-1-1H22V11a9,9,0,0,1,9-9c85.6,0,79.74-.08,79.41.17a11,11,0,0,0-4.14,6.32c-.41,1.77-.29-4.19-.29,76ZM126,18H108V11a9,9,0,0,1,18,0Z"
              })]
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
            onClick: activeClassFn3,
            className: `text-primarydark dark:text-background ml-1 cursor-pointer opacity-50 ${activeHover3 ? 'opacity-100' : 'opacity-50'} ${activeClass3 ? 'opacity-100' : 'opacity-50'}`,
            children: "Business plan"
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
          className: "mt-6 w-52 grid grid-cols-80px items-center",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("svg", {
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
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("defs", {
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("style", {})
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("title", {
              children: "Data User"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
              className: "cls-1",
              d: "M109,0H23a9,9,0,0,0-9,9c0,118,0,110,0,110.64A9.22,9.22,0,0,0,23.31,128H109a5,5,0,0,0,5-5V5A5,5,0,0,0,109,0Zm3,5V107a3,3,0,0,1-3,3H26V2h83A3,3,0,0,1,112,5ZM16,9a7,7,0,0,1,7-7h1V110H23a9,9,0,0,0-6.94,3.26C16,113.34,16,118.28,16,9Zm96,114a3,3,0,0,1-3,3H23.31c-6.13,0-9.56-6.94-5.68-11.43A6.91,6.91,0,0,1,23,112c90.91,0,87.06.44,89-1Z"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
              className: "cls-1",
              d: "M56.15,75.81A33,33,0,1,0,35,45,33.05,33.05,0,0,0,56.15,75.81Zm-7.53-6.68c5.89-22.82,32.86-22.83,38.76,0A30.88,30.88,0,0,1,48.62,69.13ZM68,14c28.07,0,41.61,34.51,21.09,53.65C86.56,59,80.82,52.83,73.57,50.75a13,13,0,1,0-11.14,0c-7.25,2.08-13,8.24-15.52,16.92C26.45,48.69,39.8,14,68,14Zm0,36A11,11,0,1,1,79,39,11,11,0,0,1,68,50Z"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
              className: "cls-1",
              d: "M96.5,87h-56a1,1,0,0,0,0,2h56A1,1,0,0,0,96.5,87Z"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
              className: "cls-1",
              d: "M96.5,99h-56a1,1,0,0,0,0,2h56A1,1,0,0,0,96.5,99Z"
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
            onClick: activeClassFn4,
            className: `text-primarydark dark:text-background ml-1 cursor-pointer opacity-50 ${activeHover4 ? 'opacity-100' : 'opacity-50'} ${activeClass4 ? 'opacity-100' : 'opacity-50'}`,
            children: "Account"
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
          className: "mt-6 w-52 grid grid-cols-80px items-center absolute bottom-4",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("svg", {
            onClick: activeClassFn5,
            onMouseEnter: () => setActiveHover5(true),
            onMouseLeave: () => setActiveHover5(false),
            height: "45",
            width: "45",
            className: `fill-current text-primarydark dark:text-background block m-auto opacity-50 hover:opacity-100 cursor-pointer ${activeClass5 ? 'opacity-100' : 'opacity-50'}`,
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 128 128",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("defs", {
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("style", {})
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("title", {
              children: "Log Out"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("g", {
              id: "Log_Out",
              "data-name": "Log Out",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
                className: "cls-1",
                d: "M44,61v6a1,1,0,0,0,2,0V61A1,1,0,0,0,44,61Z"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
                className: "cls-1",
                d: "M113,113H86V75h6v9a1,1,0,0,0,1,1c.64,0-.83,1.26,20.72-20.3a1,1,0,0,0,0-1.44l-20-20A1,1,0,0,0,92,44v9H86V14a1,1,0,0,0-1-1H54V1a1,1,0,0,0-1.35-1l-38,13A1,1,0,0,0,14,14c0,106.58-.38,100.6.69,101C55.34,128.88,52.74,128,53,128a1,1,0,0,0,1-1V115h59A1,1,0,0,0,113,113ZM93,55a1,1,0,0,0,1-1V46.46L111.56,64,94,81.54V74a1,1,0,0,0-1-1H54V55ZM54,21H77V53H54Zm30-6V53H79V20a1,1,0,0,0-1-1H54V15ZM52,125.57l-36-12.3V14.73L52,2.43ZM54,75H77v38H54Zm25,38V75h5v38Z"
              })]
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
            onClick: activeClassFn5,
            className: `text-primarydark dark:text-background ml-1 cursor-pointer opacity-50 ${activeHover5 ? 'opacity-100' : 'opacity-50'} ${activeClass5 ? 'opacity-100' : 'opacity-50'}`,
            children: "Log out"
          })]
        })]
      })
    }), children]
  });
};

/* harmony default export */ __webpack_exports__["b"] = (DesktopNavbar);

/***/ }),

/***/ "5mtM":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-route-from-asset-path.js");

/***/ }),

/***/ "5w0S":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("8cZr");
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class MyDocument extends next_document__WEBPACK_IMPORTED_MODULE_1___default.a {
  static async getInitialProps(ctx) {
    const initialProps = await next_document__WEBPACK_IMPORTED_MODULE_1___default.a.getInitialProps(ctx);
    return _objectSpread({}, initialProps);
  }

  render() {
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(next_document__WEBPACK_IMPORTED_MODULE_1__["Html"], {
      lang: "en",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(next_document__WEBPACK_IMPORTED_MODULE_1__["Head"], {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"]("link", {
          rel: "icon",
          href: "/monsters/monster-two.ico"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"]("link", {
          rel: "preconnect",
          href: "https://fonts.gstatic.com"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("link", {
          href: "https://fonts.googleapis.com/css2?family=Comfortaa&display=swap",
          rel: "stylesheet"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("link", {
          href: "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&display=swap",
          rel: "stylesheet"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("link", {
          href: "https://fonts.googleapis.com/css2?family=Vollkorn&display=swap",
          rel: "stylesheet"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("script", {
          src: "https://cdnjs.cloudflare.com/ajax/libs/react-quill/0.4.1/react-quill.min.js",
          integrity: "sha512-80TTUBnmpWABak9tJEQUf6ArzwJd5tMmiwo5VBcMS2DthMGhlg7bnZ3po/mkSBwQhCmcwtBxlHnf95R5s04Myg==",
          crossorigin: "anonymous"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("script", {
          src: "https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.9.2/html2pdf.bundle.min.js",
          integrity: "sha512-pdCVFUWsxl1A4g0uV6fyJ3nrnTGeWnZN2Tl/56j45UvZ1OMdm9CIbctuIHj+yBIRTUUyv6I9+OivXj4i0LPEYA==",
          crossorigin: "anonymous"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("script", {
          src: "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.1.0/chart.min.js",
          integrity: "sha512-RGbSeD/jDcZBWNsI1VCvdjcDULuSfWTtIva2ek5FtteXeSjLfXac4kqkDRHVGf1TwsXCAqPTF7/EYITD0/CTqw==",
          crossorigin: "anonymous"
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("body", {
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_document__WEBPACK_IMPORTED_MODULE_1__["Main"], {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_document__WEBPACK_IMPORTED_MODULE_1__["NextScript"], {})]
      })]
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (MyDocument);

/***/ }),

/***/ "67Bq":
/***/ (function(module) {

module.exports = JSON.parse("{\"..\\\\components\\\\dashboard\\\\startup\\\\project\\\\business-app\\\\Editor.js -> react-quill\":{\"id\":\"rmP6\",\"files\":[\"static/chunks/framework.b8f98ae0cabfbf8d6dda.js\",\"static/chunks/eabe11fc.a23481b1d6be3988bde1.js\",\"static/chunks/ff16ada5ec2822fa5edf70c12c9a97f1114fd809.38265e7601c626efebdb.js\",\"static/chunks/27.6dd55ccf93e9519f809d.js\"]},\"..\\\\components\\\\dashboard\\\\startup\\\\project\\\\business-app\\\\Text.js -> react-quill\":{\"id\":\"rmP6\",\"files\":[\"static/chunks/framework.b8f98ae0cabfbf8d6dda.js\",\"static/chunks/eabe11fc.a23481b1d6be3988bde1.js\",\"static/chunks/ff16ada5ec2822fa5edf70c12c9a97f1114fd809.38265e7601c626efebdb.js\",\"static/chunks/27.6dd55ccf93e9519f809d.js\"]}}");

/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

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

/***/ "6GDX":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/render.js");

/***/ }),

/***/ "7KCV":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("C+bE");

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

/***/ "7UUK":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/to-base-64.js");

/***/ }),

/***/ "7ZOo":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.getPageHandler=getPageHandler;var _url=__webpack_require__("bzos");var _utils=__webpack_require__("d60x");var _sendPayload=__webpack_require__("Cw6f");var _utils2=__webpack_require__("JxHH");var _render=__webpack_require__("6GDX");var _apiUtils=__webpack_require__("Kdlc");var _denormalizePagePath=__webpack_require__("Pkd4");var _loadCustomRoutes=__webpack_require__("FwDC");var _getRouteFromAssetPath=_interopRequireDefault(__webpack_require__("5mtM"));var _constants=__webpack_require__("xlPk");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function getPageHandler(ctx){const{page,pageComponent,pageConfig,pageGetStaticProps,pageGetStaticPaths,pageGetServerSideProps,appModule,documentModule,errorModule,notFoundModule,encodedPreviewProps,pageIsDynamic,generateEtags,poweredByHeader,runtimeConfig,buildManifest,reactLoadableManifest,i18n,buildId,basePath,assetPrefix,canonicalBase,escapedBuildId}=ctx;const{handleLocale,handleRewrites,handleBasePath,defaultRouteRegex,dynamicRouteMatcher,interpolateDynamicPath,getParamsFromRouteMatches,normalizeDynamicRouteParams,normalizeVercelUrl}=(0,_utils2.getUtils)(ctx);async function renderReqToHTML(req,res,renderMode,_renderOpts,_params){let Component;let App;let config;let Document;let Error;let notFoundMod;let getStaticProps;let getStaticPaths;let getServerSideProps;[getStaticProps,getServerSideProps,getStaticPaths,Component,App,config,{default:Document},{default:Error},notFoundMod]=await Promise.all([pageGetStaticProps,pageGetServerSideProps,pageGetStaticPaths,pageComponent,appModule,pageConfig,documentModule,errorModule,notFoundModule]);const fromExport=renderMode==='export'||renderMode===true;const nextStartMode=renderMode==='passthrough';let hasValidParams=true;(0,_apiUtils.setLazyProp)({req:req},'cookies',(0,_apiUtils.getCookieParser)(req));const options={App,Document,buildManifest,getStaticProps,getServerSideProps,getStaticPaths,reactLoadableManifest,canonicalBase,buildId,assetPrefix,runtimeConfig:(runtimeConfig||{}).publicRuntimeConfig||{},previewProps:encodedPreviewProps,env:process.env,basePath,..._renderOpts};let _nextData=false;let defaultLocale=i18n==null?void 0:i18n.defaultLocale;let detectedLocale=i18n==null?void 0:i18n.defaultLocale;let parsedUrl;try{var _req$headers;// We need to trust the dynamic route params from the proxy
// to ensure we are using the correct values
const trustQuery=!getStaticProps&&req.headers[_utils2.vercelHeader];parsedUrl=(0,_url.parse)(req.url,true);let routeNoAssetPath=parsedUrl.pathname;if(basePath){routeNoAssetPath=routeNoAssetPath.replace(new RegExp(`^${basePath}`),'')||'/';}const origQuery=Object.assign({},parsedUrl.query);parsedUrl=handleRewrites(req,parsedUrl);handleBasePath(req,parsedUrl);// remove ?amp=1 from request URL if rendering for export
if(fromExport&&parsedUrl.query.amp){const queryNoAmp=Object.assign({},origQuery);delete queryNoAmp.amp;req.url=(0,_url.format)({...parsedUrl,search:undefined,query:queryNoAmp});}if(parsedUrl.pathname.match(/_next\/data/)){_nextData=page!=='/_error';parsedUrl.pathname=(0,_getRouteFromAssetPath.default)(parsedUrl.pathname.replace(new RegExp(`/_next/data/${escapedBuildId}/`),'/'),'.json');routeNoAssetPath=parsedUrl.pathname;}const localeResult=handleLocale(req,res,parsedUrl,routeNoAssetPath,fromExport||nextStartMode);defaultLocale=(localeResult==null?void 0:localeResult.defaultLocale)||defaultLocale;detectedLocale=(localeResult==null?void 0:localeResult.detectedLocale)||detectedLocale;routeNoAssetPath=(localeResult==null?void 0:localeResult.routeNoAssetPath)||routeNoAssetPath;if(parsedUrl.query.nextInternalLocale){detectedLocale=parsedUrl.query.nextInternalLocale;delete parsedUrl.query.nextInternalLocale;}const renderOpts=Object.assign({Component,pageConfig:config,nextExport:fromExport,isDataReq:_nextData,locales:i18n==null?void 0:i18n.locales,locale:detectedLocale,defaultLocale,domainLocales:i18n==null?void 0:i18n.domains},options);if(page==='/_error'&&!res.statusCode){res.statusCode=404;}let params={};if(!fromExport&&pageIsDynamic){const result=normalizeDynamicRouteParams(trustQuery?parsedUrl.query:dynamicRouteMatcher(parsedUrl.pathname));hasValidParams=result.hasValidParams;params=result.params;}let nowParams=null;if(pageIsDynamic&&!hasValidParams&&(_req$headers=req.headers)!=null&&_req$headers['x-now-route-matches']){nowParams=getParamsFromRouteMatches(req,renderOpts,detectedLocale);}// make sure to set renderOpts to the correct params e.g. _params
// if provided from worker or params if we're parsing them here
renderOpts.params=_params||params;normalizeVercelUrl(req,!!trustQuery);// normalize request URL/asPath for fallback/revalidate pages since the
// proxy sets the request URL to the output's path for fallback pages
if(pageIsDynamic&&nowParams&&defaultRouteRegex){const _parsedUrl=(0,_url.parse)(req.url);_parsedUrl.pathname=interpolateDynamicPath(_parsedUrl.pathname,nowParams);parsedUrl.pathname=_parsedUrl.pathname;req.url=(0,_url.format)(_parsedUrl);}// make sure to normalize asPath for revalidate and _next/data requests
// since the asPath should match what is shown on the client
if(!fromExport&&(getStaticProps||getServerSideProps)){// don't include dynamic route params in query while normalizing
// asPath
if(pageIsDynamic&&trustQuery&&defaultRouteRegex){delete parsedUrl.search;for(const param of Object.keys(defaultRouteRegex.groups)){delete origQuery[param];}}parsedUrl.pathname=(0,_denormalizePagePath.denormalizePagePath)(parsedUrl.pathname);renderOpts.resolvedUrl=(0,_url.format)({...parsedUrl,query:origQuery});// For getServerSideProps we need to ensure we use the original URL
// and not the resolved URL to prevent a hydration mismatch on asPath
renderOpts.resolvedAsPath=getServerSideProps?(0,_url.format)({...parsedUrl,pathname:routeNoAssetPath,query:origQuery}):renderOpts.resolvedUrl;}const isFallback=parsedUrl.query.__nextFallback;const previewData=(0,_apiUtils.tryGetPreviewData)(req,res,options.previewProps);const isPreviewMode=previewData!==false;if(true){renderOpts.optimizeFonts=true;/**
         * __webpack_require__.__NEXT_FONT_MANIFEST__ is added by
         * font-stylesheet-gathering-plugin
         */ // @ts-ignore
renderOpts.fontManifest=__webpack_require__.__NEXT_FONT_MANIFEST__;}let result=await(0,_render.renderToHTML)(req,res,page,Object.assign({},getStaticProps?{...(parsedUrl.query.amp?{amp:'1'}:{})}:parsedUrl.query,nowParams?nowParams:params,_params,isFallback?{__nextFallback:'true'}:{}),renderOpts);if(!renderMode){if(_nextData||getStaticProps||getServerSideProps){if(renderOpts.isNotFound){res.statusCode=404;if(_nextData){res.end('{"notFound":true}');return null;}const NotFoundComponent=notFoundMod?notFoundMod.default:Error;const errPathname=notFoundMod?'/404':'/_error';const result2=await(0,_render.renderToHTML)(req,res,errPathname,parsedUrl.query,Object.assign({},options,{getStaticProps:notFoundMod?notFoundMod.getStaticProps:undefined,getStaticPaths:undefined,getServerSideProps:undefined,Component:NotFoundComponent,err:undefined,locale:detectedLocale,locales:i18n==null?void 0:i18n.locales,defaultLocale:i18n==null?void 0:i18n.defaultLocale}));(0,_sendPayload.sendPayload)(req,res,result2,'html',{generateEtags,poweredByHeader},{private:isPreviewMode,stateful:!!getServerSideProps,revalidate:renderOpts.revalidate});return null;}else if(renderOpts.isRedirect&&!_nextData){const redirect={destination:renderOpts.pageData.pageProps.__N_REDIRECT,statusCode:renderOpts.pageData.pageProps.__N_REDIRECT_STATUS,basePath:renderOpts.pageData.pageProps.__N_REDIRECT_BASE_PATH};const statusCode=(0,_loadCustomRoutes.getRedirectStatus)(redirect);if(basePath&&redirect.basePath!==false&&redirect.destination.startsWith('/')){redirect.destination=`${basePath}${redirect.destination}`;}if(statusCode===_constants.PERMANENT_REDIRECT_STATUS){res.setHeader('Refresh',`0;url=${redirect.destination}`);}res.statusCode=statusCode;res.setHeader('Location',redirect.destination);res.end();return null;}else{(0,_sendPayload.sendPayload)(req,res,_nextData?JSON.stringify(renderOpts.pageData):result,_nextData?'json':'html',{generateEtags,poweredByHeader},{private:isPreviewMode,stateful:!!getServerSideProps,revalidate:renderOpts.revalidate});return null;}}}else if(isPreviewMode){res.setHeader('Cache-Control','private, no-cache, no-store, max-age=0, must-revalidate');}if(renderMode)return{html:result,renderOpts};return result;}catch(err){if(!parsedUrl){parsedUrl=(0,_url.parse)(req.url,true);}if(err.code==='ENOENT'){res.statusCode=404;}else if(err.code==='DECODE_FAILED'){// TODO: better error?
res.statusCode=400;}else{console.error('Unhandled error during request:',err);// Backwards compat (call getInitialProps in custom error):
try{await(0,_render.renderToHTML)(req,res,'/_error',parsedUrl.query,Object.assign({},options,{getStaticProps:undefined,getStaticPaths:undefined,getServerSideProps:undefined,Component:Error,err:err,// Short-circuit rendering:
isDataReq:true}));}catch(underErrorErr){console.error('Failed call /_error subroutine, continuing to crash function:',underErrorErr);}// Throw the error to crash the serverless function
if((0,_utils.isResSent)(res)){console.error('!!! WARNING !!!');console.error('Your function crashed, but closed the response before allowing the function to exit.\\n'+'This may cause unexpected behavior for the next request.');console.error('!!! WARNING !!!');}throw err;}const result2=await(0,_render.renderToHTML)(req,res,'/_error',parsedUrl.query,Object.assign({},options,{getStaticProps:undefined,getStaticPaths:undefined,getServerSideProps:undefined,Component:Error,err:res.statusCode===404?undefined:err}));return result2;}}return{renderReqToHTML,render:async function render(req,res){try{const html=await renderReqToHTML(req,res);if(html){(0,_sendPayload.sendPayload)(req,res,html,'html',{generateEtags,poweredByHeader});}}catch(err){console.error(err);// Throw the error to crash the serverless function
throw err;}}};}
//# sourceMappingURL=page-handler.js.map

/***/ }),

/***/ "8cZr":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("VDXt")


/***/ }),

/***/ "8xkj":
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),

/***/ "91ap":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/route-regex.js");

/***/ }),

/***/ "98FW":
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

/***/ "9BML":
/***/ (function(module, exports) {

module.exports = require("date-fns");

/***/ }),

/***/ "ANQk":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/image-config.js");

/***/ }),

/***/ "AXZJ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.htmlEscapeJsonString=htmlEscapeJsonString;// This utility is based on https://github.com/zertosh/htmlescape
// License: https://github.com/zertosh/htmlescape/blob/0527ca7156a524d256101bb310a9f970f63078ad/LICENSE
const ESCAPE_LOOKUP={'&':'\\u0026','>':'\\u003e','<':'\\u003c','\u2028':'\\u2028','\u2029':'\\u2029'};const ESCAPE_REGEX=/[&><\u2028\u2029]/g;function htmlEscapeJsonString(str){return str.replace(ESCAPE_REGEX,match=>ESCAPE_LOOKUP[match]);}
//# sourceMappingURL=htmlescape.js.map

/***/ }),

/***/ "Aiso":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dQHF")


/***/ }),

/***/ "AroE":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "C+bE":
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

/***/ "C9/L":
/***/ (function(module, exports) {

module.exports = require("@tippyjs/react");

/***/ }),

/***/ "Cw6f":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/send-payload.js");

/***/ }),

/***/ "DqTX":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = initHeadManager;
exports.DOMAttributeNames = void 0;
const DOMAttributeNames = {
  acceptCharset: 'accept-charset',
  className: 'class',
  htmlFor: 'for',
  httpEquiv: 'http-equiv',
  noModule: 'noModule'
};
exports.DOMAttributeNames = DOMAttributeNames;

function reactElementToDOM({
  type,
  props
}) {
  const el = document.createElement(type);

  for (const p in props) {
    if (!props.hasOwnProperty(p)) continue;
    if (p === 'children' || p === 'dangerouslySetInnerHTML') continue; // we don't render undefined props to the DOM

    if (props[p] === undefined) continue;
    const attr = DOMAttributeNames[p] || p.toLowerCase();

    if (type === 'script' && (attr === 'async' || attr === 'defer' || attr === 'noModule')) {
      ;
      el[attr] = !!props[p];
    } else {
      el.setAttribute(attr, props[p]);
    }
  }

  const {
    children,
    dangerouslySetInnerHTML
  } = props;

  if (dangerouslySetInnerHTML) {
    el.innerHTML = dangerouslySetInnerHTML.__html || '';
  } else if (children) {
    el.textContent = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
  }

  return el;
}

function updateElements(type, components) {
  const headEl = document.getElementsByTagName('head')[0];
  const headCountEl = headEl.querySelector('meta[name=next-head-count]');

  if (false) {}

  const headCount = Number(headCountEl.content);
  const oldTags = [];

  for (let i = 0, j = headCountEl.previousElementSibling; i < headCount; i++, j = j.previousElementSibling) {
    if (j.tagName.toLowerCase() === type) {
      oldTags.push(j);
    }
  }

  const newTags = components.map(reactElementToDOM).filter(newTag => {
    for (let k = 0, len = oldTags.length; k < len; k++) {
      const oldTag = oldTags[k];

      if (oldTag.isEqualNode(newTag)) {
        oldTags.splice(k, 1);
        return false;
      }
    }

    return true;
  });
  oldTags.forEach(t => t.parentNode.removeChild(t));
  newTags.forEach(t => headEl.insertBefore(t, headCountEl));
  headCountEl.content = (headCount - oldTags.length + newTags.length).toString();
}

function initHeadManager() {
  let updatePromise = null;
  return {
    mountedInstances: new Set(),
    updateHead: head => {
      const promise = updatePromise = Promise.resolve().then(() => {
        if (promise !== updatePromise) return;
        updatePromise = null;
        const tags = {};
        head.forEach(h => {
          const components = tags[h.type] || [];
          components.push(h);
          tags[h.type] = components;
        });
        const titleComponent = tags.title ? tags.title[0] : null;
        let title = '';

        if (titleComponent) {
          const {
            children
          } = titleComponent.props;
          title = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
        }

        if (title !== document.title) document.title = title;
        ['meta', 'base', 'link', 'style', 'script'].forEach(type => {
          updateElements(type, tags[type] || []);
        });
      });
    }
  };
}

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "EuFW":
/***/ (function(module, exports) {

module.exports = require("firebase/auth");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "FwDC":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.getRedirectStatus=getRedirectStatus;exports.normalizeRouteRegex=normalizeRouteRegex;exports.default=loadCustomRoutes;exports.allowedStatusCodes=void 0;var _url=__webpack_require__("bzos");var pathToRegexp=_interopRequireWildcard(__webpack_require__("zOyy"));var _escapeStringRegexp=_interopRequireDefault(__webpack_require__("V8Zh"));var _constants=__webpack_require__("xlPk");var _lexer=_interopRequireDefault(__webpack_require__("OXJx"));var _profiles=_interopRequireDefault(__webpack_require__("p7c+"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _getRequireWildcardCache(){if(typeof WeakMap!=="function")return null;var cache=new WeakMap();_getRequireWildcardCache=function(){return cache;};return cache;}function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}if(obj===null||typeof obj!=="object"&&typeof obj!=="function"){return{default:obj};}var cache=_getRequireWildcardCache();if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj.default=obj;if(cache){cache.set(obj,newObj);}return newObj;}// @ts-ignore
// @ts-ignore
const allowedStatusCodes=new Set([301,302,303,307,308]);exports.allowedStatusCodes=allowedStatusCodes;const allowedHasTypes=new Set(['header','cookie','query','host']);function getRedirectStatus(route){return route.statusCode||(route.permanent?_constants.PERMANENT_REDIRECT_STATUS:_constants.TEMPORARY_REDIRECT_STATUS);}function normalizeRouteRegex(regex){// clean up un-necessary escaping from regex.source which turns / into \\/
return regex.replace(/\\\//g,'/');}function checkRedirect(route){const invalidParts=[];let hadInvalidStatus=false;if(route.statusCode&&!allowedStatusCodes.has(route.statusCode)){hadInvalidStatus=true;invalidParts.push(`\`statusCode\` is not undefined or valid statusCode`);}if(typeof route.permanent!=='boolean'&&!route.statusCode){invalidParts.push(`\`permanent\` is not set to \`true\` or \`false\``);}return{invalidParts,hadInvalidStatus};}function checkHeader(route){const invalidParts=[];if(!Array.isArray(route.headers)){invalidParts.push('`headers` field must be an array');}else{for(const header of route.headers){if(!header||typeof header!=='object'){invalidParts.push("`headers` items must be object with { key: '', value: '' }");break;}if(typeof header.key!=='string'){invalidParts.push('`key` in header item must be string');break;}if(typeof header.value!=='string'){invalidParts.push('`value` in header item must be string');break;}}}return invalidParts;}function tryParsePath(route,handleUrl){const result={};let routePath=route;try{if(handleUrl){const parsedDestination=(0,_url.parse)(route,true);routePath=`${parsedDestination.pathname}${parsedDestination.hash||''}`;}// Make sure we can parse the source properly
result.tokens=pathToRegexp.parse(routePath);pathToRegexp.tokensToRegexp(result.tokens);}catch(err){// If there is an error show our error link but still show original error or a formatted one if we can
const errMatches=err.message.match(/at (\d{0,})/);if(errMatches){const position=parseInt(errMatches[1],10);console.error(`\nError parsing \`${route}\` `+`https://nextjs.org/docs/messages/invalid-route-source\n`+`Reason: ${err.message}\n\n`+`  ${routePath}\n`+`  ${new Array(position).fill(' ').join('')}^\n`);}else{console.error(`\nError parsing ${route} https://nextjs.org/docs/messages/invalid-route-source`,err);}result.error=true;}return result;}function checkCustomRoutes(routes,type){if(!Array.isArray(routes)){console.error(`Error: ${type}s must return an array, received ${typeof routes}.\n`+`See here for more info: https://nextjs.org/docs/messages/routes-must-be-array`);process.exit(1);}let numInvalidRoutes=0;let hadInvalidStatus=false;let hadInvalidHas=false;const allowedKeys=new Set(['source','basePath','locale','has']);if(type==='rewrite'){allowedKeys.add('destination');}if(type==='redirect'){allowedKeys.add('statusCode');allowedKeys.add('permanent');allowedKeys.add('destination');}if(type==='header'){allowedKeys.add('headers');}for(const route of routes){if(!route||typeof route!=='object'){console.error(`The route ${JSON.stringify(route)} is not a valid object with \`source\` and \`${type==='header'?'headers':'destination'}\``);numInvalidRoutes++;continue;}if(type==='rewrite'&&route.basePath===false&&!(route.destination.startsWith('http://')||route.destination.startsWith('https://'))){console.error(`The route ${route.source} rewrites urls outside of the basePath. Please use a destination that starts with \`http://\` or \`https://\` https://nextjs.org/docs/messages/invalid-external-rewrite`);numInvalidRoutes++;continue;}const keys=Object.keys(route);const invalidKeys=keys.filter(key=>!allowedKeys.has(key));const invalidParts=[];if(typeof route.basePath!=='undefined'&&route.basePath!==false){invalidParts.push('`basePath` must be undefined or false');}if(typeof route.locale!=='undefined'&&route.locale!==false){invalidParts.push('`locale` must be undefined or false');}if(typeof route.has!=='undefined'&&!Array.isArray(route.has)){invalidParts.push('`has` must be undefined or valid has object');hadInvalidHas=true;}else if(route.has){const invalidHasItems=[];for(const hasItem of route.has){let invalidHasParts=[];if(!allowedHasTypes.has(hasItem.type)){invalidHasParts.push(`invalid type "${hasItem.type}"`);}if(typeof hasItem.key!=='string'&&hasItem.type!=='host'){invalidHasParts.push(`invalid key "${hasItem.key}"`);}if(typeof hasItem.value!=='undefined'&&typeof hasItem.value!=='string'){invalidHasParts.push(`invalid value "${hasItem.value}"`);}if(typeof hasItem.value==='undefined'&&hasItem.type==='host'){invalidHasParts.push(`value is required for "host" type`);}if(invalidHasParts.length>0){invalidHasItems.push(`${invalidHasParts.join(', ')} for ${JSON.stringify(hasItem)}`);}}if(invalidHasItems.length>0){hadInvalidHas=true;const itemStr=`item${invalidHasItems.length===1?'':'s'}`;console.error(`Invalid \`has\` ${itemStr}:\n`+invalidHasItems.join('\n'));console.error();invalidParts.push(`invalid \`has\` ${itemStr} found`);}}if(!route.source){invalidParts.push('`source` is missing');}else if(typeof route.source!=='string'){invalidParts.push('`source` is not a string');}else if(!route.source.startsWith('/')){invalidParts.push('`source` does not start with /');}if(type==='header'){invalidParts.push(...checkHeader(route));}else{let _route=route;if(!_route.destination){invalidParts.push('`destination` is missing');}else if(typeof _route.destination!=='string'){invalidParts.push('`destination` is not a string');}else if(type==='rewrite'&&!_route.destination.match(/^(\/|https:\/\/|http:\/\/)/)){invalidParts.push('`destination` does not start with `/`, `http://`, or `https://`');}}if(type==='redirect'){const result=checkRedirect(route);hadInvalidStatus=hadInvalidStatus||result.hadInvalidStatus;invalidParts.push(...result.invalidParts);}let sourceTokens;if(typeof route.source==='string'&&route.source.startsWith('/')){// only show parse error if we didn't already show error
// for not being a string
const{tokens,error}=tryParsePath(route.source);if(error){invalidParts.push('`source` parse failed');}sourceTokens=tokens;}const hasSegments=new Set();if(route.has){for(const hasItem of route.has){if(!hasItem.value&&hasItem.key){hasSegments.add(hasItem.key);}if(hasItem.value){const matcher=new RegExp(`^${hasItem.value}$`);const lexer=new _lexer.default();lexer.profile=_profiles.default.js;lexer.parse(`/${matcher.source}/`);Object.keys(lexer.namedGroups).forEach(groupKey=>{hasSegments.add(groupKey);});if(hasItem.type==='host'){hasSegments.add('host');}}}}// make sure no unnamed patterns are attempted to be used in the
// destination as this can cause confusion and is not allowed
if(typeof route.destination==='string'){if(route.destination.startsWith('/')&&Array.isArray(sourceTokens)){const unnamedInDest=new Set();for(const token of sourceTokens){if(typeof token==='object'&&typeof token.name==='number'){const unnamedIndex=new RegExp(`:${token.name}(?!\\d)`);if(route.destination.match(unnamedIndex)){unnamedInDest.add(`:${token.name}`);}}}if(unnamedInDest.size>0){invalidParts.push(`\`destination\` has unnamed params ${[...unnamedInDest].join(', ')}`);}else{const{tokens:destTokens,error:destinationParseFailed}=tryParsePath(route.destination,true);if(destinationParseFailed){invalidParts.push('`destination` parse failed');}else{const sourceSegments=new Set(sourceTokens.map(item=>typeof item==='object'&&item.name).filter(Boolean));const invalidDestSegments=new Set();for(const token of destTokens){if(typeof token==='object'&&!sourceSegments.has(token.name)&&!hasSegments.has(token.name)){invalidDestSegments.add(token.name);}}if(invalidDestSegments.size){invalidParts.push(`\`destination\` has segments not in \`source\` or \`has\` (${[...invalidDestSegments].join(', ')})`);}}}}}const hasInvalidKeys=invalidKeys.length>0;const hasInvalidParts=invalidParts.length>0;if(hasInvalidKeys||hasInvalidParts){console.error(`${invalidParts.join(', ')}${invalidKeys.length?(hasInvalidParts?',':'')+` invalid field${invalidKeys.length===1?'':'s'}: `+invalidKeys.join(','):''} for route ${JSON.stringify(route)}`);console.error();numInvalidRoutes++;}}if(numInvalidRoutes>0){if(hadInvalidStatus){console.error(`\nValid redirect statusCode values are ${[...allowedStatusCodes].join(', ')}`);}if(hadInvalidHas){console.error(`\nValid \`has\` object shape is ${JSON.stringify({type:[...allowedHasTypes].join(', '),key:'the key to check for',value:'undefined or a value string to match against'},null,2)}`);}console.error();console.error(`Error: Invalid ${type}${numInvalidRoutes===1?'':'s'} found`);process.exit(1);}}function processRoutes(routes,config,type){const _routes=routes;const newRoutes=[];const defaultLocales=[];if(config.i18n&&type==='redirect'){for(const item of((_config$i18n=config.i18n)==null?void 0:_config$i18n.domains)||[]){var _config$i18n;defaultLocales.push({locale:item.defaultLocale,base:`http${item.http?'':'s'}://${item.domain}`});}defaultLocales.push({locale:config.i18n.defaultLocale,base:''});}for(const r of _routes){var _r$destination;const srcBasePath=config.basePath&&r.basePath!==false?config.basePath:'';const isExternal=!((_r$destination=r.destination)!=null&&_r$destination.startsWith('/'));const destBasePath=srcBasePath&&!isExternal?srcBasePath:'';if(config.i18n&&r.locale!==false){var _r$destination2;defaultLocales.forEach(item=>{let destination;if(r.destination){destination=item.base?`${item.base}${destBasePath}${r.destination}`:`${destBasePath}${r.destination}`;}newRoutes.push({...r,destination,source:`${srcBasePath}/${item.locale}${r.source}`});});r.source=`/:nextInternalLocale(${config.i18n.locales.map(locale=>(0,_escapeStringRegexp.default)(locale)).join('|')})${r.source==='/'&&!config.trailingSlash?'':r.source}`;if(r.destination&&(_r$destination2=r.destination)!=null&&_r$destination2.startsWith('/')){r.destination=`/:nextInternalLocale${r.destination==='/'&&!config.trailingSlash?'':r.destination}`;}}r.source=`${srcBasePath}${r.source}`;if(r.destination){r.destination=`${destBasePath}${r.destination}`;}newRoutes.push(r);}return newRoutes;}async function loadRedirects(config){if(typeof config.redirects!=='function'){return[];}let redirects=await config.redirects();checkCustomRoutes(redirects,'redirect');return processRoutes(redirects,config,'redirect');}async function loadRewrites(config){if(typeof config.rewrites!=='function'){return{beforeFiles:[],afterFiles:[],fallback:[]};}const _rewrites=await config.rewrites();let beforeFiles=[];let afterFiles=[];let fallback=[];if(!Array.isArray(_rewrites)&&typeof _rewrites==='object'&&Object.keys(_rewrites).every(key=>key==='beforeFiles'||key==='afterFiles'||key==='fallback')){beforeFiles=_rewrites.beforeFiles||[];afterFiles=_rewrites.afterFiles||[];fallback=_rewrites.fallback||[];}else{afterFiles=_rewrites;}checkCustomRoutes(beforeFiles,'rewrite');checkCustomRoutes(afterFiles,'rewrite');checkCustomRoutes(fallback,'rewrite');return{beforeFiles:processRoutes(beforeFiles,config,'rewrite'),afterFiles:processRoutes(afterFiles,config,'rewrite'),fallback:processRoutes(fallback,config,'rewrite')};}async function loadHeaders(config){if(typeof config.headers!=='function'){return[];}let headers=await config.headers();checkCustomRoutes(headers,'header');return processRoutes(headers,config,'header');}async function loadCustomRoutes(config){const[headers,rewrites,redirects]=await Promise.all([loadHeaders(config),loadRewrites(config),loadRedirects(config)]);if(config.trailingSlash){redirects.unshift({source:'/:file((?!\\.well-known(?:/.*)?)(?:[^/]+/)*[^/]+\\.\\w+)/',destination:'/:file',permanent:true,locale:config.i18n?false:undefined,internal:true},{source:'/:notfile((?!\\.well-known(?:/.*)?)(?:[^/]+/)*[^/\\.]+)',destination:'/:notfile/',permanent:true,locale:config.i18n?false:undefined,internal:true});if(config.basePath){redirects.unshift({source:config.basePath,destination:config.basePath+'/',permanent:true,basePath:false,locale:config.i18n?false:undefined,internal:true});}}else{redirects.unshift({source:'/:path+/',destination:'/:path+',permanent:true,locale:config.i18n?false:undefined,internal:true});if(config.basePath){redirects.unshift({source:config.basePath+'/',destination:config.basePath,permanent:true,basePath:false,locale:config.i18n?false:undefined,internal:true});}}return{headers,rewrites,redirects};}
//# sourceMappingURL=load-custom-routes.js.map

/***/ }),

/***/ "GXs3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

function resolveRewrites() {}

/***/ }),

/***/ "JxHH":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.getUtils=getUtils;exports.vercelHeader=void 0;var _url=__webpack_require__("bzos");var _querystring=__webpack_require__("8xkj");var _normalizeLocalePath=__webpack_require__("3SKS");var _pathMatch=_interopRequireDefault(__webpack_require__("0y+5"));var _routeRegex=__webpack_require__("91ap");var _routeMatcher=__webpack_require__("x6KH");var _prepareDestination=_interopRequireWildcard(__webpack_require__("fvOV"));var _accept=_interopRequireDefault(__webpack_require__("Qlez"));var _detectLocaleCookie=__webpack_require__("YU92");var _detectDomainLocale=__webpack_require__("PIJf");var _denormalizePagePath=__webpack_require__("Pkd4");var _cookie=_interopRequireDefault(__webpack_require__("SN/4"));var _constants=__webpack_require__("xlPk");function _getRequireWildcardCache(){if(typeof WeakMap!=="function")return null;var cache=new WeakMap();_getRequireWildcardCache=function(){return cache;};return cache;}function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}if(obj===null||typeof obj!=="object"&&typeof obj!=="function"){return{default:obj};}var cache=_getRequireWildcardCache();if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj.default=obj;if(cache){cache.set(obj,newObj);}return newObj;}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}const getCustomRouteMatcher=(0,_pathMatch.default)(true);const vercelHeader='x-vercel-id';exports.vercelHeader=vercelHeader;function getUtils({page,i18n,basePath,rewrites,pageIsDynamic}){let defaultRouteRegex;let dynamicRouteMatcher;let defaultRouteMatches;if(pageIsDynamic){defaultRouteRegex=(0,_routeRegex.getRouteRegex)(page);dynamicRouteMatcher=(0,_routeMatcher.getRouteMatcher)(defaultRouteRegex);defaultRouteMatches=dynamicRouteMatcher(page);}function handleRewrites(req,parsedUrl){for(const rewrite of rewrites){const matcher=getCustomRouteMatcher(rewrite.source);let params=matcher(parsedUrl.pathname);if(rewrite.has&&params){const hasParams=(0,_prepareDestination.matchHas)(req,rewrite.has,parsedUrl.query);if(hasParams){Object.assign(params,hasParams);}else{params=false;}}if(params){const{parsedDestination}=(0,_prepareDestination.default)(rewrite.destination,params,parsedUrl.query,true);Object.assign(parsedUrl.query,parsedDestination.query);delete parsedDestination.query;Object.assign(parsedUrl,parsedDestination);let fsPathname=parsedUrl.pathname;if(basePath){fsPathname=fsPathname.replace(new RegExp(`^${basePath}`),'')||'/';}if(i18n){const destLocalePathResult=(0,_normalizeLocalePath.normalizeLocalePath)(fsPathname,i18n.locales);fsPathname=destLocalePathResult.pathname;parsedUrl.query.nextInternalLocale=destLocalePathResult.detectedLocale||params.nextInternalLocale;}if(fsPathname===page){break;}if(pageIsDynamic&&dynamicRouteMatcher){const dynamicParams=dynamicRouteMatcher(fsPathname);if(dynamicParams){parsedUrl.query={...parsedUrl.query,...dynamicParams};break;}}}}return parsedUrl;}function handleBasePath(req,parsedUrl){// always strip the basePath if configured since it is required
req.url=req.url.replace(new RegExp(`^${basePath}`),'')||'/';parsedUrl.pathname=parsedUrl.pathname.replace(new RegExp(`^${basePath}`),'')||'/';}function getParamsFromRouteMatches(req,renderOpts,detectedLocale){return(0,_routeMatcher.getRouteMatcher)(function(){const{groups,routeKeys}=defaultRouteRegex;return{re:{// Simulate a RegExp match from the \`req.url\` input
exec:str=>{const obj=(0,_querystring.parse)(str);// favor named matches if available
const routeKeyNames=Object.keys(routeKeys||{});const filterLocaleItem=val=>{if(i18n){// locale items can be included in route-matches
// for fallback SSG pages so ensure they are
// filtered
const isCatchAll=Array.isArray(val);const _val=isCatchAll?val[0]:val;if(typeof _val==='string'&&i18n.locales.some(item=>{if(item.toLowerCase()===_val.toLowerCase()){detectedLocale=item;renderOpts.locale=detectedLocale;return true;}return false;})){// remove the locale item from the match
if(isCatchAll){;val.splice(0,1);}// the value is only a locale item and
// shouldn't be added
return isCatchAll?val.length===0:true;}}return false;};if(routeKeyNames.every(name=>obj[name])){return routeKeyNames.reduce((prev,keyName)=>{const paramName=routeKeys==null?void 0:routeKeys[keyName];if(paramName&&!filterLocaleItem(obj[keyName])){prev[groups[paramName].pos]=obj[keyName];}return prev;},{});}return Object.keys(obj).reduce((prev,key)=>{if(!filterLocaleItem(obj[key])){return Object.assign(prev,{[key]:obj[key]});}return prev;},{});}},groups};}())(req.headers['x-now-route-matches']);}function interpolateDynamicPath(pathname,params){if(!defaultRouteRegex)return pathname;for(const param of Object.keys(defaultRouteRegex.groups)){const{optional,repeat}=defaultRouteRegex.groups[param];let builtParam=`[${repeat?'...':''}${param}]`;if(optional){builtParam=`[${builtParam}]`;}const paramIdx=pathname.indexOf(builtParam);if(paramIdx>-1){let paramValue;if(Array.isArray(params[param])){paramValue=params[param].join('/');}else{paramValue=params[param];}pathname=pathname.substr(0,paramIdx)+encodeURI(paramValue||'')+pathname.substr(paramIdx+builtParam.length);}}return pathname;}function normalizeVercelUrl(req,trustQuery){// make sure to normalize req.url on Vercel to strip dynamic params
// from the query which are added during routing
if(pageIsDynamic&&trustQuery&&defaultRouteRegex){const _parsedUrl=(0,_url.parse)(req.url,true);delete _parsedUrl.search;for(const param of Object.keys(defaultRouteRegex.groups)){delete _parsedUrl.query[param];}req.url=(0,_url.format)(_parsedUrl);}}function normalizeDynamicRouteParams(params){let hasValidParams=true;if(!defaultRouteRegex)return{params,hasValidParams};params=Object.keys(defaultRouteRegex.groups).reduce((prev,key)=>{let value=params[key];// if the value matches the default value we can't rely
// on the parsed params, this is used to signal if we need
// to parse x-now-route-matches or not
const isDefaultValue=Array.isArray(value)?value.every((val,idx)=>val===defaultRouteMatches[key][idx]):value===defaultRouteMatches[key];if(isDefaultValue||typeof value==='undefined'){hasValidParams=false;}// non-provided optional values should be undefined so normalize
// them to undefined
if(defaultRouteRegex.groups[key].optional&&(!value||Array.isArray(value)&&value.length===1&&(// fallback optional catch-all SSG pages have
// [[...paramName]] for the root path on Vercel
value[0]==='index'||value[0]===`[[...${key}]]`))){value=undefined;delete params[key];}// query values from the proxy aren't already split into arrays
// so make sure to normalize catch-all values
if(value&&typeof value==='string'&&defaultRouteRegex.groups[key].repeat){value=value.split('/');}if(value){prev[key]=value;}return prev;},{});return{params,hasValidParams};}function handleLocale(req,res,parsedUrl,routeNoAssetPath,shouldNotRedirect){if(!i18n)return;const pathname=parsedUrl.pathname||'/';let defaultLocale=i18n.defaultLocale;let detectedLocale=(0,_detectLocaleCookie.detectLocaleCookie)(req,i18n.locales);let acceptPreferredLocale=i18n.localeDetection!==false?_accept.default.language(req.headers['accept-language'],i18n.locales):detectedLocale;const{host}=req.headers||{};// remove port from host and remove port if present
const hostname=host&&host.split(':')[0].toLowerCase();const detectedDomain=(0,_detectDomainLocale.detectDomainLocale)(i18n.domains,hostname);if(detectedDomain){defaultLocale=detectedDomain.defaultLocale;detectedLocale=defaultLocale;req.__nextIsLocaleDomain=true;}// if not domain specific locale use accept-language preferred
detectedLocale=detectedLocale||acceptPreferredLocale;let localeDomainRedirect;const localePathResult=(0,_normalizeLocalePath.normalizeLocalePath)(pathname,i18n.locales);routeNoAssetPath=(0,_normalizeLocalePath.normalizeLocalePath)(routeNoAssetPath,i18n.locales).pathname;if(localePathResult.detectedLocale){detectedLocale=localePathResult.detectedLocale;req.url=(0,_url.format)({...parsedUrl,pathname:localePathResult.pathname});req.__nextStrippedLocale=true;parsedUrl.pathname=localePathResult.pathname;}// If a detected locale is a domain specific locale and we aren't already
// on that domain and path prefix redirect to it to prevent duplicate
// content from multiple domains
if(detectedDomain){const localeToCheck=localePathResult.detectedLocale?detectedLocale:acceptPreferredLocale;const matchedDomain=(0,_detectDomainLocale.detectDomainLocale)(i18n.domains,undefined,localeToCheck);if(matchedDomain&&matchedDomain.domain!==detectedDomain.domain){localeDomainRedirect=`http${matchedDomain.http?'':'s'}://${matchedDomain.domain}/${localeToCheck===matchedDomain.defaultLocale?'':localeToCheck}`;}}const denormalizedPagePath=(0,_denormalizePagePath.denormalizePagePath)(pathname);const detectedDefaultLocale=!detectedLocale||detectedLocale.toLowerCase()===defaultLocale.toLowerCase();const shouldStripDefaultLocale=false;// detectedDefaultLocale &&
// denormalizedPagePath.toLowerCase() === \`/\${i18n.defaultLocale.toLowerCase()}\`
const shouldAddLocalePrefix=!detectedDefaultLocale&&denormalizedPagePath==='/';detectedLocale=detectedLocale||i18n.defaultLocale;if(!shouldNotRedirect&&!req.headers[vercelHeader]&&i18n.localeDetection!==false&&(localeDomainRedirect||shouldAddLocalePrefix||shouldStripDefaultLocale)){// set the NEXT_LOCALE cookie when a user visits the default locale
// with the locale prefix so that they aren't redirected back to
// their accept-language preferred locale
if(shouldStripDefaultLocale&&acceptPreferredLocale!==defaultLocale){const previous=res.getHeader('set-cookie');res.setHeader('set-cookie',[...(typeof previous==='string'?[previous]:Array.isArray(previous)?previous:[]),_cookie.default.serialize('NEXT_LOCALE',defaultLocale,{httpOnly:true,path:'/'})]);}res.setHeader('Location',(0,_url.format)({// make sure to include any query values when redirecting
...parsedUrl,pathname:localeDomainRedirect?localeDomainRedirect:shouldStripDefaultLocale?basePath||'/':`${basePath}/${detectedLocale}`}));res.statusCode=_constants.TEMPORARY_REDIRECT_STATUS;res.end();return;}detectedLocale=localePathResult.detectedLocale||detectedDomain&&detectedDomain.defaultLocale||defaultLocale;return{defaultLocale,detectedLocale,routeNoAssetPath};}return{handleLocale,handleRewrites,handleBasePath,defaultRouteRegex,normalizeVercelUrl,dynamicRouteMatcher,defaultRouteMatches,interpolateDynamicPath,getParamsFromRouteMatches,normalizeDynamicRouteParams};}
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ "Kdlc":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/api-utils.js");

/***/ }),

/***/ "LZ9C":
/***/ (function(module) {

module.exports = JSON.parse("{\"polyfillFiles\":[\"static/chunks/polyfills-f8cf03d2fb4627885cbb.js\"],\"devFiles\":[],\"ampDevFiles\":[],\"lowPriorityFiles\":[\"static/zul6rXmdyU8Cs8_aIYgcj/_buildManifest.js\",\"static/zul6rXmdyU8Cs8_aIYgcj/_ssgManifest.js\"],\"pages\":{\"/\":[\"static/chunks/webpack-c07360ffa58fef1e3835.js\",\"static/chunks/framework.b8f98ae0cabfbf8d6dda.js\",\"static/chunks/commons.eb01d87f70696275a383.js\",\"static/chunks/main-681050e49eff0789b909.js\",\"static/chunks/be0cb90b.94f9528a277d84295512.js\",\"static/chunks/ff239f9d.530b467d8cd3a80562d8.js\",\"static/chunks/db575a741a1dfe5dbc2c5214edf9f92f4fad271b.324b202bce3927fb4cce.js\",\"static/chunks/9192f538bf3f3a704504a777643ca3e29b8a4be8.cf897ca2e86c5fa7e77a.js\",\"static/chunks/pages/index-d2a682a2a912c6e79b53.js\"],\"/_app\":[\"static/chunks/webpack-c07360ffa58fef1e3835.js\",\"static/chunks/framework.b8f98ae0cabfbf8d6dda.js\",\"static/chunks/commons.eb01d87f70696275a383.js\",\"static/chunks/main-681050e49eff0789b909.js\",\"static/chunks/be0cb90b.94f9528a277d84295512.js\",\"static/chunks/ff239f9d.530b467d8cd3a80562d8.js\",\"static/chunks/db575a741a1dfe5dbc2c5214edf9f92f4fad271b.324b202bce3927fb4cce.js\",\"static/chunks/9192f538bf3f3a704504a777643ca3e29b8a4be8.cf897ca2e86c5fa7e77a.js\",\"static/chunks/26b16f357104a2f0804e244d111a1f01c34142c2.7dd2f0e4e3a8b5bc080b.js\",\"static/chunks/0a3a40cad9c66a362d98a4eeb9d92f9f411292f9.221fc19fd2e49960445b.js\",\"static/chunks/4717478d546f632b45eb05e3d1ab56d1a421559c.ed78c5258ff6fb3c7054.js\",\"static/css/366779cd18ecb975a406.css\",\"static/chunks/pages/_app-06c7756969daffdeead8.js\"],\"/_error\":[\"static/chunks/webpack-c07360ffa58fef1e3835.js\",\"static/chunks/framework.b8f98ae0cabfbf8d6dda.js\",\"static/chunks/commons.eb01d87f70696275a383.js\",\"static/chunks/main-681050e49eff0789b909.js\",\"static/chunks/pages/_error-ba26ed79e3381cd9560c.js\"],\"/dashboard/account\":[\"static/chunks/webpack-c07360ffa58fef1e3835.js\",\"static/chunks/framework.b8f98ae0cabfbf8d6dda.js\",\"static/chunks/commons.eb01d87f70696275a383.js\",\"static/chunks/main-681050e49eff0789b909.js\",\"static/chunks/be0cb90b.94f9528a277d84295512.js\",\"static/chunks/ff239f9d.530b467d8cd3a80562d8.js\",\"static/chunks/db575a741a1dfe5dbc2c5214edf9f92f4fad271b.324b202bce3927fb4cce.js\",\"static/chunks/9192f538bf3f3a704504a777643ca3e29b8a4be8.cf897ca2e86c5fa7e77a.js\",\"static/chunks/26b16f357104a2f0804e244d111a1f01c34142c2.7dd2f0e4e3a8b5bc080b.js\",\"static/chunks/pages/dashboard/account-46d149a590fa555990b4.js\"],\"/dashboard/projects/[project]\":[\"static/chunks/webpack-c07360ffa58fef1e3835.js\",\"static/chunks/framework.b8f98ae0cabfbf8d6dda.js\",\"static/chunks/commons.eb01d87f70696275a383.js\",\"static/chunks/main-681050e49eff0789b909.js\",\"static/chunks/pages/dashboard/projects/[project]-9fe71a80b4915d701d4c.js\"],\"/dashboard/projects/[project]/business-plan\":[\"static/chunks/webpack-c07360ffa58fef1e3835.js\",\"static/chunks/framework.b8f98ae0cabfbf8d6dda.js\",\"static/chunks/commons.eb01d87f70696275a383.js\",\"static/chunks/main-681050e49eff0789b909.js\",\"static/chunks/be0cb90b.94f9528a277d84295512.js\",\"static/chunks/ff239f9d.530b467d8cd3a80562d8.js\",\"static/chunks/74fdba35.cf5cee4ed34a80b3bd5c.js\",\"static/chunks/a908dc70.4d09fe50ee2b7e77df9a.js\",\"static/chunks/c9184924.c5bbdcdc74a43f5e2b00.js\",\"static/chunks/1644ddea.fa85a35c71e4577e766a.js\",\"static/chunks/bb02c0f2.b2706da314264074f040.js\",\"static/chunks/bee240a3.40c206249df2fca05fd0.js\",\"static/chunks/db575a741a1dfe5dbc2c5214edf9f92f4fad271b.324b202bce3927fb4cce.js\",\"static/chunks/9192f538bf3f3a704504a777643ca3e29b8a4be8.cf897ca2e86c5fa7e77a.js\",\"static/chunks/26b16f357104a2f0804e244d111a1f01c34142c2.7dd2f0e4e3a8b5bc080b.js\",\"static/chunks/174d0231445a304439c7526afc1920560004b196.1ddd8d4fbc8b71e86851.js\",\"static/chunks/c6657f6c65599fabaca970f759f03919d5876742.5a97438e51862e92e75e.js\",\"static/chunks/c976e8e7df8c8942f82ddc7e22a28e9cb0d83203.e147cfac7221a40cce32.js\",\"static/chunks/22aa019aeb92f5689a5d3a883de1053652b1dc9f.69483e408ce1f982c4c5.js\",\"static/css/21f815780f534b2abe35.css\",\"static/chunks/pages/dashboard/projects/[project]/business-plan-280b4d3556f0d112bbed.js\"],\"/dashboard/projects/[project]/cash-flow\":[\"static/chunks/webpack-c07360ffa58fef1e3835.js\",\"static/chunks/framework.b8f98ae0cabfbf8d6dda.js\",\"static/chunks/commons.eb01d87f70696275a383.js\",\"static/chunks/main-681050e49eff0789b909.js\",\"static/chunks/be0cb90b.94f9528a277d84295512.js\",\"static/chunks/ff239f9d.530b467d8cd3a80562d8.js\",\"static/chunks/74fdba35.cf5cee4ed34a80b3bd5c.js\",\"static/chunks/a908dc70.4d09fe50ee2b7e77df9a.js\",\"static/chunks/c9184924.c5bbdcdc74a43f5e2b00.js\",\"static/chunks/1644ddea.fa85a35c71e4577e766a.js\",\"static/chunks/bb02c0f2.b2706da314264074f040.js\",\"static/chunks/bee240a3.40c206249df2fca05fd0.js\",\"static/chunks/75fc9c18.e1dd072cb8d566d7aec0.js\",\"static/chunks/db575a741a1dfe5dbc2c5214edf9f92f4fad271b.324b202bce3927fb4cce.js\",\"static/chunks/9192f538bf3f3a704504a777643ca3e29b8a4be8.cf897ca2e86c5fa7e77a.js\",\"static/chunks/26b16f357104a2f0804e244d111a1f01c34142c2.7dd2f0e4e3a8b5bc080b.js\",\"static/chunks/174d0231445a304439c7526afc1920560004b196.1ddd8d4fbc8b71e86851.js\",\"static/chunks/aae405218f3ad1cc445d380a49de2fad76894455.4d8e2f3ea0d2eb091a81.js\",\"static/chunks/c6657f6c65599fabaca970f759f03919d5876742.5a97438e51862e92e75e.js\",\"static/chunks/0a3a40cad9c66a362d98a4eeb9d92f9f411292f9.221fc19fd2e49960445b.js\",\"static/chunks/c976e8e7df8c8942f82ddc7e22a28e9cb0d83203.e147cfac7221a40cce32.js\",\"static/chunks/ff16ada5ec2822fa5edf70c12c9a97f1114fd809.38265e7601c626efebdb.js\",\"static/chunks/2cb8edf4400c34cf91e896f5f6c835bb68cfcd1c.3244630b65c54020bced.js\",\"static/css/732838db8bb71c5eb42e.css\",\"static/chunks/pages/dashboard/projects/[project]/cash-flow-5e2ad2170a35219e1560.js\"],\"/dashboard/projects/[project]/competitors\":[\"static/chunks/webpack-c07360ffa58fef1e3835.js\",\"static/chunks/framework.b8f98ae0cabfbf8d6dda.js\",\"static/chunks/commons.eb01d87f70696275a383.js\",\"static/chunks/main-681050e49eff0789b909.js\",\"static/chunks/be0cb90b.94f9528a277d84295512.js\",\"static/chunks/ff239f9d.530b467d8cd3a80562d8.js\",\"static/chunks/74fdba35.cf5cee4ed34a80b3bd5c.js\",\"static/chunks/a908dc70.4d09fe50ee2b7e77df9a.js\",\"static/chunks/c9184924.c5bbdcdc74a43f5e2b00.js\",\"static/chunks/db575a741a1dfe5dbc2c5214edf9f92f4fad271b.324b202bce3927fb4cce.js\",\"static/chunks/9192f538bf3f3a704504a777643ca3e29b8a4be8.cf897ca2e86c5fa7e77a.js\",\"static/chunks/26b16f357104a2f0804e244d111a1f01c34142c2.7dd2f0e4e3a8b5bc080b.js\",\"static/chunks/174d0231445a304439c7526afc1920560004b196.1ddd8d4fbc8b71e86851.js\",\"static/chunks/aae405218f3ad1cc445d380a49de2fad76894455.4d8e2f3ea0d2eb091a81.js\",\"static/chunks/c6657f6c65599fabaca970f759f03919d5876742.5a97438e51862e92e75e.js\",\"static/chunks/0a3a40cad9c66a362d98a4eeb9d92f9f411292f9.221fc19fd2e49960445b.js\",\"static/chunks/2cb8edf4400c34cf91e896f5f6c835bb68cfcd1c.3244630b65c54020bced.js\",\"static/chunks/pages/dashboard/projects/[project]/competitors-9a0e6893dd8135fe4d03.js\"],\"/dashboard/projects/[project]/edit\":[\"static/chunks/webpack-c07360ffa58fef1e3835.js\",\"static/chunks/framework.b8f98ae0cabfbf8d6dda.js\",\"static/chunks/commons.eb01d87f70696275a383.js\",\"static/chunks/main-681050e49eff0789b909.js\",\"static/chunks/be0cb90b.94f9528a277d84295512.js\",\"static/chunks/ff239f9d.530b467d8cd3a80562d8.js\",\"static/chunks/db575a741a1dfe5dbc2c5214edf9f92f4fad271b.324b202bce3927fb4cce.js\",\"static/chunks/9192f538bf3f3a704504a777643ca3e29b8a4be8.cf897ca2e86c5fa7e77a.js\",\"static/chunks/26b16f357104a2f0804e244d111a1f01c34142c2.7dd2f0e4e3a8b5bc080b.js\",\"static/chunks/4908bcdacb122b8a3fc5d4b230ca8eeb0c84b7a3.95cc337851da42f638a5.js\",\"static/chunks/3cf997cc6413a1689c5eb2f23973f8d5a4fda330.9b978af2225ee26c2869.js\",\"static/chunks/pages/dashboard/projects/[project]/edit-53528411d511b930de95.js\"],\"/dashboard/projects/new-startup\":[\"static/chunks/webpack-c07360ffa58fef1e3835.js\",\"static/chunks/framework.b8f98ae0cabfbf8d6dda.js\",\"static/chunks/commons.eb01d87f70696275a383.js\",\"static/chunks/main-681050e49eff0789b909.js\",\"static/chunks/be0cb90b.94f9528a277d84295512.js\",\"static/chunks/ff239f9d.530b467d8cd3a80562d8.js\",\"static/chunks/db575a741a1dfe5dbc2c5214edf9f92f4fad271b.324b202bce3927fb4cce.js\",\"static/chunks/9192f538bf3f3a704504a777643ca3e29b8a4be8.cf897ca2e86c5fa7e77a.js\",\"static/chunks/26b16f357104a2f0804e244d111a1f01c34142c2.7dd2f0e4e3a8b5bc080b.js\",\"static/chunks/4908bcdacb122b8a3fc5d4b230ca8eeb0c84b7a3.95cc337851da42f638a5.js\",\"static/chunks/3cf997cc6413a1689c5eb2f23973f8d5a4fda330.9b978af2225ee26c2869.js\",\"static/chunks/pages/dashboard/projects/new-startup-9d35145852aa58f41097.js\"],\"/dashboard/startup\":[\"static/chunks/webpack-c07360ffa58fef1e3835.js\",\"static/chunks/framework.b8f98ae0cabfbf8d6dda.js\",\"static/chunks/commons.eb01d87f70696275a383.js\",\"static/chunks/main-681050e49eff0789b909.js\",\"static/chunks/be0cb90b.94f9528a277d84295512.js\",\"static/chunks/ff239f9d.530b467d8cd3a80562d8.js\",\"static/chunks/74fdba35.cf5cee4ed34a80b3bd5c.js\",\"static/chunks/a908dc70.4d09fe50ee2b7e77df9a.js\",\"static/chunks/c9184924.c5bbdcdc74a43f5e2b00.js\",\"static/chunks/db575a741a1dfe5dbc2c5214edf9f92f4fad271b.324b202bce3927fb4cce.js\",\"static/chunks/9192f538bf3f3a704504a777643ca3e29b8a4be8.cf897ca2e86c5fa7e77a.js\",\"static/chunks/26b16f357104a2f0804e244d111a1f01c34142c2.7dd2f0e4e3a8b5bc080b.js\",\"static/chunks/174d0231445a304439c7526afc1920560004b196.1ddd8d4fbc8b71e86851.js\",\"static/chunks/aae405218f3ad1cc445d380a49de2fad76894455.4d8e2f3ea0d2eb091a81.js\",\"static/chunks/f507e53ab949a020d73021aa95d09a86824f0845.9537ecc57fea4d64a0a1.js\",\"static/chunks/22aa019aeb92f5689a5d3a883de1053652b1dc9f.69483e408ce1f982c4c5.js\",\"static/chunks/pages/dashboard/startup-9e6a1c3508def8a8db75.js\"],\"/dashboard/welcome\":[\"static/chunks/webpack-c07360ffa58fef1e3835.js\",\"static/chunks/framework.b8f98ae0cabfbf8d6dda.js\",\"static/chunks/commons.eb01d87f70696275a383.js\",\"static/chunks/main-681050e49eff0789b909.js\",\"static/chunks/be0cb90b.94f9528a277d84295512.js\",\"static/chunks/ff239f9d.530b467d8cd3a80562d8.js\",\"static/chunks/db575a741a1dfe5dbc2c5214edf9f92f4fad271b.324b202bce3927fb4cce.js\",\"static/chunks/9192f538bf3f3a704504a777643ca3e29b8a4be8.cf897ca2e86c5fa7e77a.js\",\"static/chunks/26b16f357104a2f0804e244d111a1f01c34142c2.7dd2f0e4e3a8b5bc080b.js\",\"static/chunks/f507e53ab949a020d73021aa95d09a86824f0845.9537ecc57fea4d64a0a1.js\",\"static/chunks/pages/dashboard/welcome-eb508b37e8f68d5b2935.js\"],\"/login\":[\"static/chunks/webpack-c07360ffa58fef1e3835.js\",\"static/chunks/framework.b8f98ae0cabfbf8d6dda.js\",\"static/chunks/commons.eb01d87f70696275a383.js\",\"static/chunks/main-681050e49eff0789b909.js\",\"static/chunks/be0cb90b.94f9528a277d84295512.js\",\"static/chunks/ff239f9d.530b467d8cd3a80562d8.js\",\"static/chunks/db575a741a1dfe5dbc2c5214edf9f92f4fad271b.324b202bce3927fb4cce.js\",\"static/chunks/pages/login-98f5b616a8152b48d522.js\"],\"/name\":[\"static/chunks/webpack-c07360ffa58fef1e3835.js\",\"static/chunks/framework.b8f98ae0cabfbf8d6dda.js\",\"static/chunks/commons.eb01d87f70696275a383.js\",\"static/chunks/main-681050e49eff0789b909.js\",\"static/chunks/be0cb90b.94f9528a277d84295512.js\",\"static/chunks/ff239f9d.530b467d8cd3a80562d8.js\",\"static/chunks/db575a741a1dfe5dbc2c5214edf9f92f4fad271b.324b202bce3927fb4cce.js\",\"static/chunks/4908bcdacb122b8a3fc5d4b230ca8eeb0c84b7a3.95cc337851da42f638a5.js\",\"static/chunks/pages/name-1326135923a41f52a062.js\"],\"/signup\":[\"static/chunks/webpack-c07360ffa58fef1e3835.js\",\"static/chunks/framework.b8f98ae0cabfbf8d6dda.js\",\"static/chunks/commons.eb01d87f70696275a383.js\",\"static/chunks/main-681050e49eff0789b909.js\",\"static/chunks/be0cb90b.94f9528a277d84295512.js\",\"static/chunks/ff239f9d.530b467d8cd3a80562d8.js\",\"static/chunks/db575a741a1dfe5dbc2c5214edf9f92f4fad271b.324b202bce3927fb4cce.js\",\"static/chunks/9192f538bf3f3a704504a777643ca3e29b8a4be8.cf897ca2e86c5fa7e77a.js\",\"static/chunks/4717478d546f632b45eb05e3d1ab56d1a421559c.ed78c5258ff6fb3c7054.js\",\"static/chunks/pages/signup-1269c47ef989e4c1963d.js\"]},\"ampFirstPages\":[]}");

/***/ }),

/***/ "Nh2W":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__("UhrY"));

var _requestIdleCallback = __webpack_require__("0G5g"); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
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
  if (false) {}

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

/***/ "OXJx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
RegExr: Learn, Build, & Test RegEx
Copyright (C) 2017  gskinner.com, inc.

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/
class ExpressionLexer {
  constructor() {
    this.profile = null;
  }

  set profile(profile) {
    this._profile = profile;
    this.string = this.token = this.errors = this.captureGroups = this.namedGroups = null;
  }

  parse(str) {
    if (!this._profile) {
      return null;
    }

    if (str === this.string) {
      return this.token;
    }

    this.token = null;
    this._modes = {};
    this.string = str;
    this.errors = [];
    let capgroups = this.captureGroups = [];
    let namedgroups = this.namedGroups = {};
    let brgroups = this.branchResetGroups = [];
    let groups = [],
        refs = [],
        i = 0,
        l = str.length;
    let o,
        c,
        token,
        charset = null; // previous is the previous token, prv is the previous "active" token (!ignore)

    let prev = null,
        prv = null;
    let profile = this._profile,
        unquantifiable = profile.unquantifiable;
    let charTypes = profile.charTypes;
    let closeIndex = str.lastIndexOf("/");

    for (let i = closeIndex + 1; i < l; i++) {
      this._modes[str[i]] = true;
    }

    while (i < l) {
      c = str[i];
      token = {
        i: i,
        l: 1,
        prev: prev,
        prv: prv,
        modes: this._modes
      };

      if (prev) {
        prev.next = token;
      } else {
        this.token = token;
      }

      if (i === 0 || i >= closeIndex) {
        this.parseFlag(str, token);
      } else if (c === "(" && !charset) {
        this.parseParen(str, token);

        if (token.close === null) {
          token.depth = groups.length;
          groups.push(token);
        }

        if (token.capture) {
          this.addCaptureGroup(token, groups);
        }
      } else if (c === ")" && !charset) {
        token.type = "groupclose";

        if (groups.length) {
          o = token.open = groups.pop();
          o.close = token;

          if (o.type === "branchreset") {
            brgroups.pop();
          }
        } else {
          token.error = {
            id: "groupclose"
          };
        }
      } else if (c === "[") {
        charset = this.parseSquareBracket(str, token, charset);
      } else if (c === "]" && charset) {
        token.type = "setclose";
        token.open = charset;
        charset.close = token;
        charset = null;
      } else if (c === "+" && prv && prv.clss === "quant" && profile.tokens.possessive) {
        token.type = "possessive";
        token.related = [prv];
      } else if ((c === "+" || c === "*") && !charset) {
        token.type = charTypes[c];
        token.clss = "quant";
        token.min = c === "+" ? 1 : 0;
        token.max = -1;
      } else if (c === "{" && !charset && str.substr(i).search(/^{\d+,?\d*}/) !== -1) {
        this.parseQuant(str, token);
      } else if (c === "\\") {
        this.parseBackSlash(str, token, charset, closeIndex);
      } else if (c === "?" && !charset) {
        if (!prv || prv.clss !== "quant") {
          token.type = charTypes[c];
          token.clss = "quant";
          token.min = 0;
          token.max = 1;
        } else {
          token.type = "lazy";
          token.related = [prv];
        }
      } else if (c === "-" && charset && prv.code !== undefined && prv.prv && prv.prv.type !== "range") {
        // this may be the start of a range, but we'll need to validate after the next token.
        token.type = "range";
      } else {
        this.parseChar(str, token, charset);

        if (!charset && this._modes.x && /\s/.test(c)) {
          token.ignore = true;
          token.type = "ignorews";
        }
      } // post process token:
      // quantifier:


      if (token.clss === "quant") {
        if (!prv || prv.close !== undefined || unquantifiable[prv.type] || prv.open && unquantifiable[prv.open.type]) {
          token.error = {
            id: "quanttarg"
          };
        } else {
          token.related = [prv.open || prv];
        }
      } // reference:


      if (token.group === true) {
        refs.push(token);
      } // conditional:


      let curGroup = groups.length ? groups[groups.length - 1] : null;

      if (curGroup && (curGroup.type === "conditional" || curGroup.type === "conditionalgroup") && token.type === "alt") {
        if (!curGroup.alt) {
          curGroup.alt = token;
        } else {
          token.error = {
            id: "extraelse"
          };
        }

        token.related = [curGroup];
        token.type = "conditionalelse";
        token.clss = "special";
      } else if (curGroup && curGroup.type === "branchreset") {
        // reset group
        curGroup.curGroupNum = curGroup.inGroupNum;
      } // range:


      if (prv && prv.type === "range" && prv.l === 1) {
        this.validateRange(str, token);
      } // js warnings:
      // TODO: this isn't ideal, but I'm hesitant to write a more robust solution for a couple of edge cases.


      if (profile.id === "js") {
        this.addJSWarnings(token);
      } // general:


      if (token.open && !token.clss) {
        token.clss = token.open.clss;
      }

      if (token.error) {
        this.addError(token);
      }

      i += token.l;
      prev = token;

      if (!token.ignore) {
        prv = token;
      }
    } // post processing:


    while (groups.length) {
      this.addError(groups.pop(), {
        id: "groupopen"
      });
    }

    this.matchRefs(refs, capgroups, namedgroups);

    if (charset) {
      this.addError(charset, {
        id: "setopen"
      });
    }

    return this.token;
  }

  addError(token, error = token.error) {
    token.error = error;
    this.errors.push(token);
  }

  addJSWarnings(token) {
    if (token.error) {
      return;
    }

    if (token.type === "neglookbehind" || token.type === "poslookbehind" || token.type === "sticky" || token.type === "unicode" || token.type == "dotall" || token.type === "unicodecat" || token.type === "unicodescript" || token.type === "namedgroup") {
      token.error = {
        id: "jsfuture",
        warning: true
      };
    }
  }

  addCaptureGroup(token, groups) {
    // it would be nice to make branch reset groups actually highlight all of the groups that share the same number
    // that would require switching to arrays of groups for each group num - requires rearchitecture throughout the app.
    let capgroups = this.captureGroups,
        brgroups = this.branchResetGroups,
        namedgroups = this.namedGroups;
    let curGroup = groups.length ? groups[groups.length - 1] : null;

    if (brgroups.length) {
      let brgroup = brgroups[brgroups.length - 1];
      token.num = ++brgroup.curGroupNum;
    } else {
      token.num = capgroups.length + 1;
    }

    if (!capgroups[token.num - 1]) {
      capgroups.push(token);
    }

    if (token.name && !token.error) {
      if (/\d/.test(token.name[0])) {
        token.error = {
          id: "badname"
        };
      } else if (namedgroups[token.name]) {
        token.error = {
          id: "dupname"
        };
        token.related = [namedgroups[token.name]];
      } else {
        namedgroups[token.name] = token;
      }
    }
  }

  getRef(token, str) {
    token.clss = "ref";
    token.group = true;
    token.relIndex = this.captureGroups.length;
    token.name = str;
  }

  matchRefs(refs, indexes, names) {
    while (refs.length) {
      let token = refs.pop(),
          name = token.name,
          group = names[name];

      if (!group && !isNaN(name)) {
        let sign = name[0],
            index = parseInt(name) + (sign === "+" || sign === "-" ? token.relIndex : 0);

        if (sign === "-") {
          index++;
        }

        group = indexes[index - 1];
      }

      if (group) {
        token.group = group;
        token.related = [group];
        token.dir = token.i < group.i ? 1 : !group.close || token.i < group.close.i ? 0 : -1;
      } else {
        delete token.group;
        delete token.relIndex;
        this.refToOctal(token);

        if (token.error) {
          this.errors.push(token.error);
        }
      }
    }
  }

  refToOctal(token) {
    // PCRE: \# unmatched, \0 \00 \## = octal
    // JS: \# \0 \00 \## = octal
    // PCRE matches \8 \9 to "8" "9"
    // JS: without the u flag \8 \9 match "8" "9" in IE, FF & Chrome, and "\8" "\9" in Safari. We support the former.
    // JS: with the u flag, Chrome & FF throw an esc error, Safari does not.
    // TODO: handle \0 for PCRE? Would need more testing.
    // TODO: this doesn't handle two digit refs with 8/9 in them. Ex. \18 - not even sure what this is interpreted as.
    let name = token.name,
        profile = this._profile;

    if (token.type !== "numref") {
      // not a simple \4 style reference, so can't decompose into an octal.
      token.error = {
        id: "unmatchedref"
      };
    } else if (/^[0-7]{2}$/.test(name) || profile.config.reftooctalalways && /^[0-7]$/.test(name)) {
      // octal
      let next = token.next,
          char = String.fromCharCode(next.code);

      if (next.type === "char" && char >= "0" && char <= "7" && parseInt(name + char, 8) <= 255) {
        name += char;
        this.mergeNext(token);
      }

      token.code = parseInt(name, 8);
      token.clss = "esc";
      token.type = "escoctal";
      delete token.name;
    } else if (name === "8" || name === "9") {
      this.parseEscChar(token, name);
      delete token.name;
    } else {
      token.error = {
        id: "unmatchedref"
      };
    }
  }

  mergeNext(token) {
    let next = token.next;
    token.next = next.next;
    token.next.prev = token;
    token.l++;
  }

  parseFlag(str, token) {
    // note that this doesn't deal with misformed patterns or incorrect flags.
    let i = token.i,
        c = str[i];

    if (str[i] === "/") {
      token.type = i === 0 ? "open" : "close";

      if (i !== 0) {
        token.related = [this.token];
        this.token.related = [token];
      }
    } else {
      token.type = this._profile.flags[c];
    } //token.clear = true;

  }

  parseChar(str, token, charset) {
    let c = str[token.i];
    token.type = !charset && this._profile.charTypes[c] || "char";

    if (!charset && c === "/") {
      token.error = {
        id: "fwdslash"
      };
    }

    if (token.type === "char") {
      token.code = c.charCodeAt(0);
    } else if (ExpressionLexer.ANCHOR_TYPES[token.type]) {
      token.clss = "anchor";
    } else if (token.type === "dot") {
      token.clss = "charclass";
    }

    return token;
  }

  parseSquareBracket(str, token, charset) {
    let match;

    if (this._profile.tokens.posixcharclass && (match = str.substr(token.i).match(/^\[(:|\.)([^\]]*?)\1]/))) {
      // posixcharclass: [:alpha:]
      // posixcollseq: [.ch.]
      // currently neither flavor supports posixcollseq, but PCRE does flag as an error:
      // TODO: the expression above currently does not catch [.\].]
      token.l = match[0].length;
      token.value = match[2];
      token.clss = "charclass";

      if (match[1] === ":") {
        token.type = "posixcharclass";

        if (!this._profile.posixCharClasses[match[2]]) {
          token.error = {
            id: "posixcharclassbad"
          };
        } else if (!charset) {
          token.error = {
            id: "posixcharclassnoset"
          };
        }
      } else {
        token.type = "posixcollseq"; // TODO: can this be generalized? Right now, no, because we assign ids that aren't in the profile.

        token.error = {
          id: "notsupported"
        };
      }
    } else if (!charset) {
      // set [a-z] [aeiou]
      // setnot [^a-z]
      token.type = token.clss = "set";

      if (str[token.i + 1] === "^") {
        token.l++;
        token.type += "not";
      }

      charset = token;
    } else {
      // [[] (square bracket inside a set)
      this.parseChar(str, token, charset);
    }

    return charset;
  }

  parseParen(str, token) {
    /*
    core:
    .		group:
    .		lookahead: ?= ?!
    .		noncap: ?:
    PCRE:
    .		lookbehind: ?<= ?<!
    .		named: ?P<name> ?'name' ?<name>
    .		namedref: ?P=name		Also: \g'name' \k'name' etc
    .		comment: ?#
    .		atomic: ?>
    .		recursion: ?0 ?R		Also: \g<0>
    .		define: ?(DEFINE)
    .		subroutine: ?1 ?-1 ?&name ?P>name
    	conditionalgroup: ?(1)a|b ?(-1)a|b ?(name)a|b
    	conditional: ?(?=if)then|else
    	mode: ?c-i
    	branchreset: ?|
    */
    token.clss = token.type = "group";

    if (str[token.i + 1] !== "?") {
      token.close = null; // indicates that it needs a close token.

      token.capture = true;
      return token;
    }

    let sub = str.substr(token.i + 2),
        match,
        s = sub[0];

    if (s === ":") {
      // (?:foo)
      token.type = "noncapgroup";
      token.close = null;
      token.l = 3;
    } else if (s === ">") {
      // (?>foo)
      token.type = "atomic";
      token.close = null;
      token.l = 3;
    } else if (s === "|") {
      // (?|(a)|(b))
      token.type = "branchreset";
      token.close = null;
      token.l = 3;
      token.inGroupNum = token.curGroupNum = this.captureGroups.length;
      this.branchResetGroups.push(token);
    } else if (s === "#" && (match = sub.match(/[^)]*\)/))) {
      // (?#foo)
      token.clss = token.type = "comment";
      token.ignore = true;
      token.l = 2 + match[0].length;
    } else if (/^(R|0)\)/.test(sub)) {
      // (?R) (?0)
      token.clss = "ref";
      token.type = "recursion";
      token.l = 4;
    } else if (match = sub.match(/^P=(\w+)\)/i)) {
      // (?P=name)
      token.type = "namedref";
      this.getRef(token, match[1]);
      token.l = match[0].length + 2;
    } else if (/^\(DEFINE\)/.test(sub)) {
      // (?(DEFINE)foo)
      token.type = "define";
      token.close = null;
      token.l = 10;
    } else if (match = sub.match(/^<?[=!]/)) {
      // (?=foo) (?<!foo)
      let isCond = token.prv.type === "conditional";
      token.clss = isCond ? "special" : "lookaround";
      token.close = null;
      s = match[0];
      token.behind = s[0] === "<";
      token.negative = s[+token.behind] === "!";
      token.type = isCond ? "condition" : (token.negative ? "neg" : "pos") + "look" + (token.behind ? "behind" : "ahead");

      if (isCond) {
        token.prv.related = [token];
        token.prv.condition = token;
        token.related = [token.prv];
      }

      token.l = s.length + 2;
    } else if ((match = sub.match(/^<(\w+)>/)) || this._profile.config.namedgroupalt && ((match = sub.match(/^'(\w+)'/)) || (match = sub.match(/^P<(\w+)>/)))) {
      // (?<name>foo) (?'name'foo) (?P<name>foo)
      token.type = "namedgroup";
      token.close = null;
      token.name = match[1];
      token.capture = true;
      token.l = match[0].length + 2;
    } else if ((match = sub.match(/^([-+]?\d\d?)\)/)) || (match = sub.match(/^(?:&|P>)(\w+)\)/))) {
      // (?1) (?-1) (?&name) (?P>name)
      token.type = (isNaN(match[1]) ? "named" : "num") + "subroutine";
      this.getRef(token, match[1]);
      token.l = match[0].length + 2;
    } else if ((match = sub.match(/^\(([-+]?\d\d?)\)/)) || (match = sub.match(/^\((\w+)\)/))) {
      // (?(1)a|b) (?(-1)a|b) (?(name)a|b)
      this.getRef(token, match[1]);
      token.clss = "special";
      token.type = "conditionalgroup";
      token.close = null;
      token.l = match[0].length + 2;
    } else if (/^\(\?<?[=!]/.test(sub)) {
      // (?(?=if)then|else)
      token.clss = "special";
      token.type = "conditional";
      token.close = null;
      token.l = 2;
    } else if (this.parseMode(token, sub)) ; else {
      // error, found a (? without matching anything. Treat it as a normal group and let it error out.
      token.close = null;
      token.capture = true;
    }

    if (!this._profile.tokens[token.type]) {
      token.error = {
        id: "notsupported"
      };
    }

    return token;
  }

  parseBackSlash(str, token, charset, closeIndex) {
    // Note: Chrome does weird things with \x & \u depending on a number of factors, we ignore this.
    let i = token.i,
        match,
        profile = this._profile;
    let sub = str.substr(i + 1),
        c = sub[0],
        val;

    if (i + 1 === (closeIndex || str.length)) {
      token.error = {
        id: "esccharopen"
      };
      return;
    }

    if (!charset && (match = sub.match(/^\d\d?/))) {
      // \1 to \99
      // write this as a reference for now, and re-write it later if it doesn't match a group
      token.type = "numref";
      this.getRef(token, match[0]);
      token.l += match[0].length;
      return token;
    }

    if (profile.tokens.namedref && !charset && (c === "g" || c === "k")) {
      return this.parseRef(token, sub);
    }

    if (profile.tokens.unicodecat && (!profile.flags.u || this._modes.u) && (c === "p" || c === "P")) {
      // unicode: \p{Ll} \pL
      return this.parseUnicode(token, sub);
    } else if (profile.tokens.escsequence && c === "Q") {
      // escsequence: \Q...\E
      token.type = "escsequence";
      let e = 2;

      if ((i = sub.indexOf("\\E")) !== -1) {
        token.l += i + 2;
        e += 2;
      } else {
        token.l += closeIndex - token.i - 1;
      }

      token.value = str.substr(token.i + 2, token.l - e);
    } else if (profile.tokens.escunicodeub && this._modes.u && (match = sub.match(/^u\{(\d+)}/))) {
      // unicodeu: \u{0061}
      token.type = "escunicodeub";
      token.l += match[0].length;
      token.code = parseInt(match[1], 16);
    } else if (profile.tokens.escunicodeu && (match = sub.match(/^u([\da-fA-F]{4})/))) {
      // unicode: \uFFFF
      // update SubstLexer if this changes:
      token.type = "escunicodeu";
      token.l += match[0].length;
      token.code = parseInt(match[1], 16);
    } else if (profile.tokens.escunicodexb && (match = sub.match(/^x\{(.*?)}/))) {
      // unicode: \x{FFFF}
      token.type = "escunicodexb";
      token.l += match[0].length;
      val = parseInt(match[1], 16); // PCRE errors on more than 2 digits (>255). In theory it should allow 4?

      if (isNaN(val) || val > 255 || /[^\da-f]/i.test(match[1])) {
        token.error = {
          id: "esccharbad"
        };
      } else {
        token.code = val;
      }
    } else if (match = sub.match(/^x([\da-fA-F]{0,2})/)) {
      // hex ascii: \xFF
      token.type = "eschexadecimal";
      token.l += match[0].length;
      token.code = parseInt(match[1] || 0, 16);
    } else if (match = sub.match(/^c([a-zA-Z])?/)) {
      // control char: \cA \cz
      // also handles: \c
      // not supported in JS strings
      token.type = "esccontrolchar";

      if (match[1]) {
        token.code = match[1].toUpperCase().charCodeAt(0) - 64; // A=65

        token.l += 2;
      } else if (profile.config.ctrlcodeerr) {
        token.l++;
        token.error = {
          id: "esccharbad"
        };
      } else {
        return this.parseChar(str, token, charset); // this builds the "/" token
      }
    } else if (match = sub.match(/^[0-7]{1,3}/)) {
      // octal ascii: \011
      token.type = "escoctal";
      sub = match[0];

      if (parseInt(sub, 8) > 255) {
        sub = sub.substr(0, 2);
      }

      token.l += sub.length;
      token.code = parseInt(sub, 8);
    } else if (profile.tokens.escoctalo && (match = sub.match(/^o\{(.*?)}/i))) {
      // \o{377}
      token.type = "escoctal";
      token.l += match[0].length;
      val = parseInt(match[1], 8);

      if (isNaN(val) || val > 255 || /[^0-7]/.test(match[1])) {
        token.error = {
          id: "esccharbad"
        };
      } else {
        token.code = val;
      }
    } else {
      // single char
      if (token.type = profile.escCharTypes[c]) {
        token.l++;
        token.clss = ExpressionLexer.ANCHOR_TYPES[token.type] ? "anchor" : "charclass";
        return token;
      }

      token.code = profile.escCharCodes[c];

      if (token.code === undefined || token.code === false) {
        // unrecognized.
        return this.parseEscChar(token, c);
      } // update SubstLexer if this changes:


      token.l++;
      token.type = "esc_" + token.code;
    }

    token.clss = "esc";
    return token;
  }

  parseEscChar(token, c) {
    // unrecognized escchar: \u \a \8, etc
    // JS: allowed except if u flag set, Safari still allows \8 \9
    // PCRE: allows \8 \9 but not others // TODO: support?
    let profile = this._profile;
    token.l = 2;

    if (!profile.badEscChars[c] && profile.tokens.escchar && !this._modes.u || profile.escChars[c]) {
      token.type = "escchar";
      token.code = c.charCodeAt(0);
      token.clss = "esc";
    } else {
      token.error = {
        id: "esccharbad"
      };
    }
  }

  parseRef(token, sub) {
    // namedref: \k<name> \k'name' \k{name} \g{name}
    // namedsubroutine: \g<name> \g'name'
    // numref: \g1 \g+2 \g{2}
    // numsubroutine: \g<-1> \g'1'
    // recursion: \g<0> \g'0'
    let c = sub[0],
        s = "",
        match;

    if (match = sub.match(/^[gk](?:'\w*'|<\w*>|{\w*})/)) {
      s = match[0].substr(2, match[0].length - 3);

      if (c === "k" && !isNaN(s)) {
        s = "";
      } // TODO: specific error for numeric \k?

    } else if (match = sub.match(/^g(?:({[-+]?\d+}|<[-+]?\d+>|'[-+]?\d+')|([-+]?\d+))/)) {
      s = match[2] !== undefined ? match[2] : match[1].substr(1, match[1].length - 2);
    }

    let isRef = c === "k" || !(sub[1] === "'" || sub[1] === "<");

    if (!isRef && s == 0) {
      token.type = "recursion";
      token.clss = "ref";
    } else {
      // namedref, extnumref, namedsubroutine, numsubroutine
      token.type = (isNaN(s) ? "named" : (isRef ? "ext" : "") + "num") + (isRef ? "ref" : "subroutine");
      this.getRef(token, s);
    }

    token.l += match ? match[0].length : 1;
  }

  parseUnicode(token, sub) {
    // unicodescript: \p{Cherokee}
    // unicodecat: \p{Ll} \pL
    // not: \P{Ll} \p{^Lu}
    let match = sub.match(/p\{\^?([^}]*)}/i),
        val = match && match[1],
        not = sub[0] === "P";

    if (!match && (match = sub.match(/[pP]([LMZSNPC])/))) {
      val = match[1];
    } else {
      not = not !== (sub[2] === "^");
    }

    token.l += match ? match[0].length : 1;
    token.type = "unicodecat";

    if (this._profile.unicodeScripts[val]) {
      token.type = "unicodescript";
    } else if (!this._profile.unicodeCategories[val]) {
      val = null;
    }

    if (not) {
      token.type = "not" + token.type;
    }

    if (!this._profile.config.unicodenegated && sub[2] === "^" || !val) {
      token.error = {
        id: "unicodebad"
      };
    }

    token.value = val;
    token.clss = "charclass";
    return token;
  }

  parseMode(token, sub) {
    // (?i-x)
    // supported modes in PCRE: i-caseinsens, x-freespacing, s-dotall, m-multiline, U-switchlazy, [J-samename]
    let match = sub.match(/^[-a-z]+\)/i);

    if (!match) {
      return;
    }

    let supModes = this._profile.modes;
    let modes = Object.assign({}, this._modes),
        bad = false,
        not = false,
        s = match[0],
        c;
    token.on = token.off = "";

    for (let i = 0, l = s.length - 1; i < l; i++) {
      c = s[i];

      if (c === "-") {
        not = true;
        continue;
      }

      if (!supModes[c]) {
        bad = true;
        break;
      }

      modes[c] = !not;
      token.on = token.on.replace(c, "");

      if (not) {
        token.off = token.off.replace(c, "");
        token.off += c;
      } else {
        token.on += c;
      }
    }

    token.clss = "special";
    token.type = "mode";
    token.l = match[0].length + 2;

    if (bad) {
      token.error = {
        id: "modebad"
      };
      token.errmode = c;
    } else {
      this._modes = modes;
    }

    return token;
  }

  parseQuant(str, token) {
    // quantifier: {0,3} {3} {1,}
    token.type = token.clss = "quant";
    let i = token.i;
    let end = str.indexOf("}", i + 1);
    token.l += end - i;
    let arr = str.substring(i + 1, end).split(",");
    token.min = parseInt(arr[0]);
    token.max = arr[1] === undefined ? token.min : arr[1] === "" ? -1 : parseInt(arr[1]);

    if (token.max !== -1 && token.min > token.max) {
      token.error = {
        id: "quantrev"
      };
    }

    return token;
  }

  validateRange(str, end) {
    // char range: [a-z] [\11-\n]
    let next = end,
        token = end.prv,
        prv = token.prv;

    if (prv.code === undefined || next.code === undefined) {
      // not a range, rewrite as a char:
      this.parseChar(str, token);
    } else {
      token.clss = "set";

      if (prv.code > next.code) {
        // this gets added here because parse has already moved to the next token:
        this.errors.push(token.error = {
          id: "rangerev"
        });
      } // preserve as separate tokens, but treat as one in the UI:


      next.proxy = prv.proxy = token;
      token.set = [prv, token, next];
    }
  }

}
ExpressionLexer.ANCHOR_TYPES = {
  "bof": true,
  "eof": true,
  "bos": true,
  "eos": true,
  "abseos": true,
  "wordboundary": true,
  "notwordboundary": true,
  "prevmatchend": true
};

module.exports = ExpressionLexer;
//# sourceMappingURL=lexer.js.map


/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "PIJf":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ "Pkd4":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/denormalize-page-path.js");

/***/ }),

/***/ "QhkM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useWindowSize; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

 // Usage

function App() {
  const size = useWindowSize();
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
    children: [size.width, "px / ", size.height, "px"]
  });
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

/***/ "Qlez":
/***/ (function(module, exports) {

module.exports = require("@hapi/accept");

/***/ }),

/***/ "RDVA":
/***/ (function(module, exports) {



/***/ }),

/***/ "RkzC":
/***/ (function(module, exports) {

module.exports = require("@stripe/stripe-js");

/***/ }),

/***/ "SN/4":
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__dirname) {module.exports=(()=>{"use strict";var e={583:(e,r)=>{r.parse=parse;r.serialize=serialize;var i=decodeURIComponent;var t=encodeURIComponent;var a=/; */;var n=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function parse(e,r){if(typeof e!=="string"){throw new TypeError("argument str must be a string")}var t={};var n=r||{};var o=e.split(a);var s=n.decode||i;for(var p=0;p<o.length;p++){var f=o[p];var u=f.indexOf("=");if(u<0){continue}var c=f.substr(0,u).trim();var v=f.substr(++u,f.length).trim();if('"'==v[0]){v=v.slice(1,-1)}if(undefined==t[c]){t[c]=tryDecode(v,s)}}return t}function serialize(e,r,i){var a=i||{};var o=a.encode||t;if(typeof o!=="function"){throw new TypeError("option encode is invalid")}if(!n.test(e)){throw new TypeError("argument name is invalid")}var s=o(r);if(s&&!n.test(s)){throw new TypeError("argument val is invalid")}var p=e+"="+s;if(null!=a.maxAge){var f=a.maxAge-0;if(isNaN(f)||!isFinite(f)){throw new TypeError("option maxAge is invalid")}p+="; Max-Age="+Math.floor(f)}if(a.domain){if(!n.test(a.domain)){throw new TypeError("option domain is invalid")}p+="; Domain="+a.domain}if(a.path){if(!n.test(a.path)){throw new TypeError("option path is invalid")}p+="; Path="+a.path}if(a.expires){if(typeof a.expires.toUTCString!=="function"){throw new TypeError("option expires is invalid")}p+="; Expires="+a.expires.toUTCString()}if(a.httpOnly){p+="; HttpOnly"}if(a.secure){p+="; Secure"}if(a.sameSite){var u=typeof a.sameSite==="string"?a.sameSite.toLowerCase():a.sameSite;switch(u){case true:p+="; SameSite=Strict";break;case"lax":p+="; SameSite=Lax";break;case"strict":p+="; SameSite=Strict";break;case"none":p+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return p}function tryDecode(e,r){try{return r(e)}catch(r){return e}}}};var r={};function __nccwpck_require__(i){if(r[i]){return r[i].exports}var t=r[i]={exports:{}};var a=true;try{e[i](t,t.exports,__nccwpck_require__);a=false}finally{if(a)delete r[i]}return t.exports}__nccwpck_require__.ab=__dirname+"/";return __nccwpck_require__(583)})();
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),

/***/ "Skye":
/***/ (function(module) {

module.exports = JSON.parse("{\"version\":3,\"pages404\":true,\"basePath\":\"\",\"redirects\":[{\"source\":\"/:path+/\",\"destination\":\"/:path+\",\"internal\":true,\"statusCode\":308,\"regex\":\"^(?:/((?:[^/]+?)(?:/(?:[^/]+?))*))/$\"}],\"headers\":[],\"dynamicRoutes\":[{\"page\":\"/dashboard/projects/[project]\",\"regex\":\"^/dashboard/projects/([^/]+?)(?:/)?$\",\"routeKeys\":{\"project\":\"project\"},\"namedRegex\":\"^/dashboard/projects/(?<project>[^/]+?)(?:/)?$\"},{\"page\":\"/dashboard/projects/[project]/business-plan\",\"regex\":\"^/dashboard/projects/([^/]+?)/business\\\\-plan(?:/)?$\",\"routeKeys\":{\"project\":\"project\"},\"namedRegex\":\"^/dashboard/projects/(?<project>[^/]+?)/business\\\\-plan(?:/)?$\"},{\"page\":\"/dashboard/projects/[project]/cash-flow\",\"regex\":\"^/dashboard/projects/([^/]+?)/cash\\\\-flow(?:/)?$\",\"routeKeys\":{\"project\":\"project\"},\"namedRegex\":\"^/dashboard/projects/(?<project>[^/]+?)/cash\\\\-flow(?:/)?$\"},{\"page\":\"/dashboard/projects/[project]/competitors\",\"regex\":\"^/dashboard/projects/([^/]+?)/competitors(?:/)?$\",\"routeKeys\":{\"project\":\"project\"},\"namedRegex\":\"^/dashboard/projects/(?<project>[^/]+?)/competitors(?:/)?$\"},{\"page\":\"/dashboard/projects/[project]/edit\",\"regex\":\"^/dashboard/projects/([^/]+?)/edit(?:/)?$\",\"routeKeys\":{\"project\":\"project\"},\"namedRegex\":\"^/dashboard/projects/(?<project>[^/]+?)/edit(?:/)?$\"}],\"dataRoutes\":[],\"rewrites\":[]}");

/***/ }),

/***/ "U6Mw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return auth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return db; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return storage; });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wVQA");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("EuFW");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("bnmT");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("ha8t");
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_storage__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var firebase_functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("dCoW");
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

/* harmony default export */ __webpack_exports__["c"] = (firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a);
const auth = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.auth();
const db = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.firestore();
const storage = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.storage();

/***/ }),

/***/ "U9aH":
/***/ (function(module, exports) {

module.exports = require("@react-pdf/renderer");

/***/ }),

/***/ "UhrY":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "UlpK":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/head.js");

/***/ }),

/***/ "V8Zh":
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__dirname) {module.exports=(()=>{"use strict";var e={813:e=>{const r=/[|\\{}()[\]^$+*?.-]/g;e.exports=(e=>{if(typeof e!=="string"){throw new TypeError("Expected a string")}return e.replace(r,"\\$&")})}};var r={};function __nccwpck_require__(t){if(r[t]){return r[t].exports}var _=r[t]={exports:{}};var a=true;try{e[t](_,_.exports,__nccwpck_require__);a=false}finally{if(a)delete r[t]}return _.exports}__nccwpck_require__.ab=__dirname+"/";return __nccwpck_require__(813)})();
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),

/***/ "VDXt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.Html = Html;
exports.Main = Main;
exports.NextScript = exports.Head = exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _server = _interopRequireDefault(__webpack_require__("2+G7"));

var _constants = __webpack_require__("xlPk");

var _documentContext = __webpack_require__("nMq/");

var _utils = __webpack_require__("d60x");

exports.DocumentContext = _utils.DocumentContext;
exports.DocumentInitialProps = _utils.DocumentInitialProps;
exports.DocumentProps = _utils.DocumentProps;

var _getPageFiles = __webpack_require__("vHio");

var _utils2 = __webpack_require__("ri/Y");

var _htmlescape = __webpack_require__("AXZJ");

var _experimentalScript = _interopRequireDefault(__webpack_require__("24z6"));

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

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function getDocumentFiles(buildManifest, pathname, inAmpMode) {
  const sharedFiles = (0, _getPageFiles.getPageFiles)(buildManifest, '/_app');
  const pageFiles = inAmpMode ? [] : (0, _getPageFiles.getPageFiles)(buildManifest, pathname);
  return {
    sharedFiles,
    pageFiles,
    allFiles: [...new Set([...sharedFiles, ...pageFiles])]
  };
}
/**
* `Document` component handles the initial `document` markup and renders only on the server side.
* Commonly used for implementing server side rendering for `css-in-js` libraries.
*/


class Document extends _react.Component {
  /**
  * `getInitialProps` hook returns the context object with the addition of `renderPage`.
  * `renderPage` callback executes `React` rendering logic synchronously to support server-rendering wrappers
  */
  static async getInitialProps(ctx) {
    const enhanceApp = App => {
      return props => /*#__PURE__*/_react.default.createElement(App, props);
    };

    const {
      html,
      head
    } = await ctx.renderPage({
      enhanceApp
    });
    const styles = [...(0, _server.default)()];
    return {
      html,
      head,
      styles
    };
  }

  static renderDocument(DocumentComponent, props) {
    return /*#__PURE__*/_react.default.createElement(_documentContext.DocumentContext.Provider, {
      value: props
    }, /*#__PURE__*/_react.default.createElement(DocumentComponent, props));
  }

  render() {
    return /*#__PURE__*/_react.default.createElement(Html, null, /*#__PURE__*/_react.default.createElement(Head, null), /*#__PURE__*/_react.default.createElement("body", null, /*#__PURE__*/_react.default.createElement(Main, null), /*#__PURE__*/_react.default.createElement(NextScript, null)));
  }

}

exports.default = Document;

function Html(props) {
  const {
    inAmpMode,
    docComponentsRendered,
    locale
  } = (0, _react.useContext)(_documentContext.DocumentContext);
  docComponentsRendered.Html = true;
  return /*#__PURE__*/_react.default.createElement("html", Object.assign({}, props, {
    lang: props.lang || locale || undefined,
    amp: inAmpMode ? '' : undefined,
    "data-ampdevmode": inAmpMode && false ? '' : undefined
  }));
}

class Head extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  getCssLinks(files) {
    const {
      assetPrefix,
      devOnlyCacheBusterQueryString,
      dynamicImports
    } = this.context;
    const cssFiles = files.allFiles.filter(f => f.endsWith('.css'));
    const sharedFiles = new Set(files.sharedFiles); // Unmanaged files are CSS files that will be handled directly by the
    // webpack runtime (`mini-css-extract-plugin`).

    let unmangedFiles = new Set([]);
    let dynamicCssFiles = Array.from(new Set(dynamicImports.filter(file => file.endsWith('.css'))));

    if (dynamicCssFiles.length) {
      const existing = new Set(cssFiles);
      dynamicCssFiles = dynamicCssFiles.filter(f => !(existing.has(f) || sharedFiles.has(f)));
      unmangedFiles = new Set(dynamicCssFiles);
      cssFiles.push(...dynamicCssFiles);
    }

    let cssLinkElements = [];
    cssFiles.forEach(file => {
      const isSharedFile = sharedFiles.has(file);

      if (true) {
        cssLinkElements.push( /*#__PURE__*/_react.default.createElement("link", {
          key: `${file}-preload`,
          nonce: this.props.nonce,
          rel: "preload",
          href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
          as: "style",
          crossOrigin: this.props.crossOrigin || undefined
        }));
      }

      const isUnmanagedFile = unmangedFiles.has(file);
      cssLinkElements.push( /*#__PURE__*/_react.default.createElement("link", {
        key: file,
        nonce: this.props.nonce,
        rel: "stylesheet",
        href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
        crossOrigin: this.props.crossOrigin || undefined,
        "data-n-g": isUnmanagedFile ? undefined : isSharedFile ? '' : undefined,
        "data-n-p": isUnmanagedFile ? undefined : isSharedFile ? undefined : ''
      }));
    });

    if (true) {
      cssLinkElements = this.makeStylesheetInert(cssLinkElements);
    }

    return cssLinkElements.length === 0 ? null : cssLinkElements;
  }

  getPreloadDynamicChunks() {
    const {
      dynamicImports,
      assetPrefix,
      devOnlyCacheBusterQueryString
    } = this.context;
    return dynamicImports.map(file => {
      if (!file.endsWith('.js')) {
        return null;
      }

      return /*#__PURE__*/_react.default.createElement("link", {
        rel: "preload",
        key: file,
        href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
        as: "script",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined
      });
    }) // Filter out nulled scripts
    .filter(Boolean);
  }

  getPreloadMainLinks(files) {
    const {
      assetPrefix,
      devOnlyCacheBusterQueryString,
      scriptLoader
    } = this.context;
    const preloadFiles = files.allFiles.filter(file => {
      return file.endsWith('.js');
    });
    return [...(scriptLoader.eager || []).map(file => /*#__PURE__*/_react.default.createElement("link", {
      key: file.src,
      nonce: this.props.nonce,
      rel: "preload",
      href: file.src,
      as: "script",
      crossOrigin: this.props.crossOrigin || undefined
    })), ...preloadFiles.map(file => /*#__PURE__*/_react.default.createElement("link", {
      key: file,
      nonce: this.props.nonce,
      rel: "preload",
      href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
      as: "script",
      crossOrigin: this.props.crossOrigin || undefined
    })), ...(scriptLoader.defer || []).map(file => /*#__PURE__*/_react.default.createElement("link", {
      key: file,
      nonce: this.props.nonce,
      rel: "preload",
      href: file,
      as: "script",
      crossOrigin: this.props.crossOrigin || undefined
    }))];
  }

  handleDocumentScriptLoaderItems(children) {
    const {
      scriptLoader
    } = this.context;
    const scriptLoaderItems = [];
    const filteredChildren = [];

    _react.default.Children.forEach(children, child => {
      if (child.type === _experimentalScript.default) {
        if (child.props.strategy === 'eager') {
          scriptLoader.eager = (scriptLoader.eager || []).concat([_objectSpread({}, child.props)]);
          return;
        } else if (['lazy', 'defer'].includes(child.props.strategy)) {
          scriptLoaderItems.push(child.props);
          return;
        }
      }

      filteredChildren.push(child);
    });

    this.context.__NEXT_DATA__.scriptLoader = scriptLoaderItems;
    return filteredChildren;
  }

  makeStylesheetInert(node) {
    return _react.default.Children.map(node, c => {
      if (c.type === 'link' && c.props['href'] && _constants.OPTIMIZED_FONT_PROVIDERS.some(url => c.props['href'].startsWith(url))) {
        const newProps = _objectSpread({}, c.props || {});

        newProps['data-href'] = newProps['href'];
        newProps['href'] = undefined;
        return /*#__PURE__*/_react.default.cloneElement(c, newProps);
      } else if (c.props && c.props['children']) {
        c.props['children'] = this.makeStylesheetInert(c.props['children']);
      }

      return c;
    });
  }

  render() {
    var _this$props$nonce, _this$props$nonce2;

    const {
      styles,
      ampPath,
      inAmpMode,
      hybridAmp,
      canonicalBase,
      __NEXT_DATA__,
      dangerousAsPath,
      headTags,
      unstable_runtimeJS,
      unstable_JsPreload
    } = this.context;
    const disableRuntimeJS = unstable_runtimeJS === false;
    const disableJsPreload = unstable_JsPreload === false;
    this.context.docComponentsRendered.Head = true;
    let {
      head
    } = this.context;
    let cssPreloads = [];
    let otherHeadElements = [];

    if (head) {
      head.forEach(c => {
        if (c && c.type === 'link' && c.props['rel'] === 'preload' && c.props['as'] === 'style') {
          cssPreloads.push(c);
        } else {
          c && otherHeadElements.push(c);
        }
      });
      head = cssPreloads.concat(otherHeadElements);
    }

    let children = _react.default.Children.toArray(this.props.children).filter(Boolean); // show a warning if Head contains <title> (only in development)


    if (false) {}

    if ( true && !inAmpMode) {
      children = this.makeStylesheetInert(children);
    }

    if (false) {}

    let hasAmphtmlRel = false;
    let hasCanonicalRel = false; // show warning and remove conflicting amp head tags

    head = _react.default.Children.map(head || [], child => {
      if (!child) return child;
      const {
        type,
        props
      } = child;

      if (inAmpMode) {
        let badProp = '';

        if (type === 'meta' && props.name === 'viewport') {
          badProp = 'name="viewport"';
        } else if (type === 'link' && props.rel === 'canonical') {
          hasCanonicalRel = true;
        } else if (type === 'script') {
          // only block if
          // 1. it has a src and isn't pointing to ampproject's CDN
          // 2. it is using dangerouslySetInnerHTML without a type or
          // a type of text/javascript
          if (props.src && props.src.indexOf('ampproject') < -1 || props.dangerouslySetInnerHTML && (!props.type || props.type === 'text/javascript')) {
            badProp = '<script';
            Object.keys(props).forEach(prop => {
              badProp += ` ${prop}="${props[prop]}"`;
            });
            badProp += '/>';
          }
        }

        if (badProp) {
          console.warn(`Found conflicting amp tag "${child.type}" with conflicting prop ${badProp} in ${__NEXT_DATA__.page}. https://nextjs.org/docs/messages/conflicting-amp-tag`);
          return null;
        }
      } else {
        // non-amp mode
        if (type === 'link' && props.rel === 'amphtml') {
          hasAmphtmlRel = true;
        }
      }

      return child;
    }); // try to parse styles from fragment for backwards compat

    const curStyles = Array.isArray(styles) ? styles : [];

    if (inAmpMode && styles && // @ts-ignore Property 'props' does not exist on type ReactElement
    styles.props && // @ts-ignore Property 'props' does not exist on type ReactElement
    Array.isArray(styles.props.children)) {
      const hasStyles = el => {
        var _el$props, _el$props$dangerously;

        return el == null ? void 0 : (_el$props = el.props) == null ? void 0 : (_el$props$dangerously = _el$props.dangerouslySetInnerHTML) == null ? void 0 : _el$props$dangerously.__html;
      }; // @ts-ignore Property 'props' does not exist on type ReactElement


      styles.props.children.forEach(child => {
        if (Array.isArray(child)) {
          child.forEach(el => hasStyles(el) && curStyles.push(el));
        } else if (hasStyles(child)) {
          curStyles.push(child);
        }
      });
    }

    const files = getDocumentFiles(this.context.buildManifest, this.context.__NEXT_DATA__.page, inAmpMode);
    return /*#__PURE__*/_react.default.createElement("head", this.props, this.context.isDevelopment && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("style", {
      "data-next-hide-fouc": true,
      "data-ampdevmode": inAmpMode ? 'true' : undefined,
      dangerouslySetInnerHTML: {
        __html: `body{display:none}`
      }
    }), /*#__PURE__*/_react.default.createElement("noscript", {
      "data-next-hide-fouc": true,
      "data-ampdevmode": inAmpMode ? 'true' : undefined
    }, /*#__PURE__*/_react.default.createElement("style", {
      dangerouslySetInnerHTML: {
        __html: `body{display:block}`
      }
    }))), children, head, /*#__PURE__*/_react.default.createElement("meta", {
      name: "next-head-count",
      content: _react.default.Children.count(head || []).toString()
    }), inAmpMode && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("meta", {
      name: "viewport",
      content: "width=device-width,minimum-scale=1,initial-scale=1"
    }), !hasCanonicalRel && /*#__PURE__*/_react.default.createElement("link", {
      rel: "canonical",
      href: canonicalBase + (0, _utils2.cleanAmpPath)(dangerousAsPath)
    }), /*#__PURE__*/_react.default.createElement("link", {
      rel: "preload",
      as: "script",
      href: "https://cdn.ampproject.org/v0.js"
    }), styles && /*#__PURE__*/_react.default.createElement("style", {
      "amp-custom": "",
      dangerouslySetInnerHTML: {
        __html: curStyles.map(style => style.props.dangerouslySetInnerHTML.__html).join('').replace(/\/\*# sourceMappingURL=.*\*\//g, '').replace(/\/\*@ sourceURL=.*?\*\//g, '')
      }
    }), /*#__PURE__*/_react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}`
      }
    }), /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}`
      }
    })), /*#__PURE__*/_react.default.createElement("script", {
      async: true,
      src: "https://cdn.ampproject.org/v0.js"
    })), !inAmpMode && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !hasAmphtmlRel && hybridAmp && /*#__PURE__*/_react.default.createElement("link", {
      rel: "amphtml",
      href: canonicalBase + getAmpPath(ampPath, dangerousAsPath)
    }),  true && this.getCssLinks(files),  true && /*#__PURE__*/_react.default.createElement("noscript", {
      "data-n-css": (_this$props$nonce = this.props.nonce) != null ? _this$props$nonce : ''
    }), !disableRuntimeJS && !disableJsPreload && this.getPreloadDynamicChunks(), !disableRuntimeJS && !disableJsPreload && this.getPreloadMainLinks(files),  false && false,  false && /*#__PURE__*/false, this.context.isDevelopment &&
    /*#__PURE__*/
    // this element is used to mount development styles so the
    // ordering matches production
    // (by default, style-loader injects at the bottom of <head />)
    _react.default.createElement("noscript", {
      id: "__next_css__DO_NOT_USE__"
    }), styles || null), /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {}, ...(headTags || [])));
  }

}

exports.Head = Head;
Head.contextType = _documentContext.DocumentContext;
Head.propTypes = {
  nonce: _propTypes.default.string,
  crossOrigin: _propTypes.default.string
};

function Main() {
  const {
    inAmpMode,
    html,
    docComponentsRendered
  } = (0, _react.useContext)(_documentContext.DocumentContext);
  docComponentsRendered.Main = true;
  if (inAmpMode) return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, _constants.AMP_RENDER_TARGET);
  return /*#__PURE__*/_react.default.createElement("div", {
    id: "__next",
    dangerouslySetInnerHTML: {
      __html: html
    }
  });
}

class NextScript extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  getDynamicChunks(files) {
    const {
      dynamicImports,
      assetPrefix,
      isDevelopment,
      devOnlyCacheBusterQueryString
    } = this.context;
    return dynamicImports.map(file => {
      if (!file.endsWith('.js') || files.allFiles.includes(file)) return null;
      return /*#__PURE__*/_react.default.createElement("script", {
        async: !isDevelopment,
        key: file,
        src: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined
      });
    });
  }

  getPreNextScripts() {
    const {
      scriptLoader
    } = this.context;
    return (scriptLoader.eager || []).map(file => {
      const {
        strategy
      } = file,
            props = _objectWithoutProperties(file, ["strategy"]);

      return /*#__PURE__*/_react.default.createElement("script", Object.assign({}, props, {
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined
      }));
    });
  }

  getScripts(files) {
    var _buildManifest$lowPri;

    const {
      assetPrefix,
      buildManifest,
      isDevelopment,
      devOnlyCacheBusterQueryString
    } = this.context;
    const normalScripts = files.allFiles.filter(file => file.endsWith('.js'));
    const lowPriorityScripts = (_buildManifest$lowPri = buildManifest.lowPriorityFiles) == null ? void 0 : _buildManifest$lowPri.filter(file => file.endsWith('.js'));
    return [...normalScripts, ...lowPriorityScripts].map(file => {
      return /*#__PURE__*/_react.default.createElement("script", {
        key: file,
        src: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
        nonce: this.props.nonce,
        async: !isDevelopment,
        crossOrigin: this.props.crossOrigin || undefined
      });
    });
  }

  getPolyfillScripts() {
    // polyfills.js has to be rendered as nomodule without async
    // It also has to be the first script to load
    const {
      assetPrefix,
      buildManifest,
      devOnlyCacheBusterQueryString
    } = this.context;
    return buildManifest.polyfillFiles.filter(polyfill => polyfill.endsWith('.js') && !polyfill.endsWith('.module.js')).map(polyfill => /*#__PURE__*/_react.default.createElement("script", {
      key: polyfill,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined,
      noModule: true,
      src: `${assetPrefix}/_next/${polyfill}${devOnlyCacheBusterQueryString}`
    }));
  }

  static getInlineScriptSource(documentProps) {
    const {
      __NEXT_DATA__
    } = documentProps;

    try {
      const data = JSON.stringify(__NEXT_DATA__);
      return (0, _htmlescape.htmlEscapeJsonString)(data);
    } catch (err) {
      if (err.message.indexOf('circular structure')) {
        throw new Error(`Circular structure in "getInitialProps" result of page "${__NEXT_DATA__.page}". https://nextjs.org/docs/messages/circular-structure`);
      }

      throw err;
    }
  }

  render() {
    const {
      assetPrefix,
      inAmpMode,
      buildManifest,
      unstable_runtimeJS,
      docComponentsRendered,
      devOnlyCacheBusterQueryString
    } = this.context;
    const disableRuntimeJS = unstable_runtimeJS === false;
    docComponentsRendered.NextScript = true;

    if (inAmpMode) {
      if (true) {
        return null;
      }

      const ampDevFiles = [...buildManifest.devFiles, ...buildManifest.polyfillFiles, ...buildManifest.ampDevFiles];
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, disableRuntimeJS ? null : /*#__PURE__*/_react.default.createElement("script", {
        id: "__NEXT_DATA__",
        type: "application/json",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        dangerouslySetInnerHTML: {
          __html: NextScript.getInlineScriptSource(this.context)
        },
        "data-ampdevmode": true
      }), ampDevFiles.map(file => /*#__PURE__*/_react.default.createElement("script", {
        key: file,
        src: `${assetPrefix}/_next/${file}${devOnlyCacheBusterQueryString}`,
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        "data-ampdevmode": true
      })));
    }

    if (false) {}

    const files = getDocumentFiles(this.context.buildManifest, this.context.__NEXT_DATA__.page, inAmpMode);
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !disableRuntimeJS && buildManifest.devFiles ? buildManifest.devFiles.map(file => /*#__PURE__*/_react.default.createElement("script", {
      key: file,
      src: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    })) : null, disableRuntimeJS ? null : /*#__PURE__*/_react.default.createElement("script", {
      id: "__NEXT_DATA__",
      type: "application/json",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined,
      dangerouslySetInnerHTML: {
        __html: NextScript.getInlineScriptSource(this.context)
      }
    }), !disableRuntimeJS && this.getPolyfillScripts(), !disableRuntimeJS && this.getPreNextScripts(), disableRuntimeJS ? null : this.getDynamicChunks(files), disableRuntimeJS ? null : this.getScripts(files));
  }

}

exports.NextScript = NextScript;
NextScript.contextType = _documentContext.DocumentContext;
NextScript.propTypes = {
  nonce: _propTypes.default.string,
  crossOrigin: _propTypes.default.string
};
NextScript.safariNomoduleFix = '!function(){var e=document,t=e.createElement("script");if(!("noModule"in t)&&"onbeforeload"in t){var n=!1;e.addEventListener("beforeload",function(e){if(e.target===t)n=!0;else if(!e.target.hasAttribute("nomodule")||!n)return;e.preventDefault()},!0),t.type="module",t.src=".",e.head.appendChild(t),t.remove()}}();';

function getAmpPath(ampPath, asPath) {
  return ampPath || `${asPath}${asPath.includes('?') ? '&' : '?'}amp=1`;
}

/***/ }),

/***/ "X24+":
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

/***/ "Y8yu":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/head-manager-context.js");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
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

/***/ "YU92":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/i18n/detect-locale-cookie.js");

/***/ }),

/***/ "Zsrq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "DataContext", function() { return /* binding */ DataContext; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: ./components/dashboard/NavbarTemplate.js
var NavbarTemplate = __webpack_require__("xBw7");

// EXTERNAL MODULE: ./lib/firebase.js
var firebase = __webpack_require__("U6Mw");

// EXTERNAL MODULE: ./lib/newAuth.js
var newAuth = __webpack_require__("cqNN");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__("Aiso");
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);

// CONCATENATED MODULE: ./components/dashboard/startup/EmptyStartup.js






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
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: "w-full flex flex-col justify-center items-center border-r-6 rounded-2xl bg-white mt-8 dark:bg-background",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(image_default.a, {
      height: 200,
      width: 200,
      src: "/launch-maker.svg"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
      className: "text-secondary text-base text-gray",
      children: "It looks like you have no any startups yet \uD83D\uDD0E"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "p-4",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        href: "/dashboard/startup/creator",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
          onClick: onProjectCreate,
          className: "hover:bg-primary hover:text-white dark:hover:bg-primarydark dark:hover:text-background focus:outline-none border border-primary text-primary dark:text-primarydark dark:border-primarydark text-sm font-light py-2 px-6 rounded-2xl m-2",
          children: "Create your first startup"
        })
      })
    })]
  });
};

/* harmony default export */ var startup_EmptyStartup = (EmptyStartup);
// EXTERNAL MODULE: external "gsap"
var external_gsap_ = __webpack_require__("489e");
var external_gsap_default = /*#__PURE__*/__webpack_require__.n(external_gsap_);

// EXTERNAL MODULE: external "uuid"
var external_uuid_ = __webpack_require__("kNaX");

// EXTERNAL MODULE: external "swr"
var external_swr_ = __webpack_require__("aYjl");
var external_swr_default = /*#__PURE__*/__webpack_require__.n(external_swr_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "@tippyjs/react"
var react_ = __webpack_require__("C9/L");

// EXTERNAL MODULE: ./components/dashboard/Tippy.js
var Tippy = __webpack_require__("x6nH");

// EXTERNAL MODULE: external "file-saver"
var external_file_saver_ = __webpack_require__("lYhb");

// EXTERNAL MODULE: external "@react-pdf/renderer"
var renderer_ = __webpack_require__("U9aH");

// CONCATENATED MODULE: ./components/dashboard/startup/PDFDocument.js



 // const image = avatarExists != 'blank' ? avatarExists : imageNameExists;
// console.log(image);

const MyDocument1 = ({
  data
}) => {
  renderer_["Font"].register({
    src: '/fonts/poppins.ttf',
    family: 'Poppins'
  });
  renderer_["Font"].register({
    src: '/fonts/comfortaa.ttf',
    family: 'Comfortaa'
  });
  const styles = renderer_["StyleSheet"].create({
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
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(renderer_["Document"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(renderer_["Page"], {
      size: "A4",
      style: styles.homePage,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(renderer_["View"], {
        style: styles.homePageTitleSection,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(renderer_["Text"], {
          style: styles.homePageTitle,
          children: "Startup idea plan"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(renderer_["Text"], {
          style: styles.homePageDesc,
          children: data.ideaName
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(renderer_["Image"], {
          src: image,
          style: styles.image,
          height: "250px",
          width: "250px"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(renderer_["View"], {
          style: styles.leftDescBlock,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(renderer_["Text"], {
            style: styles.leftDescBlockText,
            children: data.ideaDesc
          })
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(renderer_["View"], {
        style: styles.rightBar
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(renderer_["View"], {
        style: styles.rightBarContact,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(renderer_["Text"], {
          children: data.startupField
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(renderer_["Text"], {
          style: styles.countryText,
          children: data.ideaCountry
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(renderer_["Text"], {
          style: styles.emailText,
          children: data.startupEmail
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(renderer_["Text"], {
          style: styles.phoneNumberText,
          children: data.startupPhone
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(renderer_["View"], {
        style: styles.grayBarOne
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(renderer_["View"], {
        style: styles.grayBarTwo
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(renderer_["Page"], {
      style: styles.contentsPage,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(renderer_["View"], {
        style: styles.rightBar,
        fixed: true
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(renderer_["View"], {
        style: styles.contentsLeftBar,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(renderer_["Text"], {
          children: "Startup overview"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(renderer_["Text"], {
          children: "Product"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(renderer_["Text"], {
          children: "Market analysis"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(renderer_["Text"], {
          children: "Finances"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(renderer_["Text"], {
          children: "Business model"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(renderer_["View"], {
          style: styles.contentsBarOne
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(renderer_["View"], {
          style: styles.contentsBarTwo
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(renderer_["View"], {
          style: styles.contentsBarThree
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(renderer_["View"], {
          style: styles.contentsBarFour
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(renderer_["View"], {
          style: styles.contentsBarFive
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(renderer_["View"], {
        style: styles.contentsRightBar,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(renderer_["Text"], {
          style: styles.contentsRightTextOne,
          children: "01. This section will help you better understand the startup vision"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(renderer_["Text"], {
          style: styles.contentsRightTextTwo,
          children: "02. This section will introduce you to the vision of the product"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(renderer_["Text"], {
          style: styles.contentsRightTextThree,
          children: "03. This section will reveal all the cards of the market"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(renderer_["Text"], {
          style: styles.contentsRightTextFour,
          children: "04. Discover the costs of implementing our idea"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(renderer_["Text"], {
          style: styles.contentsRightTextFive,
          children: "05. In the final section, you will discover the startup's business model"
        })]
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(renderer_["Page"], {
      style: styles.overviewPage,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(renderer_["View"], {
        style: styles.rightBar,
        fixed: true
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(renderer_["Image"], {
        style: styles.overviewImage,
        src: "/pdf/idea.png",
        height: 20,
        width: 20
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(renderer_["View"], {
        style: styles.overviewSection,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(renderer_["Text"], {
          style: styles.overviewHeading,
          children: "Startup overview"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(renderer_["Text"], {
          style: styles.overviewSubtitle,
          children: "This section will help you better understand the startup vision"
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(renderer_["View"], {
          style: styles.sectionContainerOne,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(renderer_["Text"], {
            style: styles.sectionHeadingOne,
            children: "Market problem that needs to be solved."
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(renderer_["Text"], {
            style: styles.sectionText,
            children: data.marketProblemSection
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(renderer_["View"], {
          style: styles.sectionContainerTwo,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(renderer_["Text"], {
            style: styles.sectionHeadingTwo,
            children: "Solution that solves this market problem."
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(renderer_["Text"], {
            style: styles.sectionText,
            children: data.marketSolutionSection
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(renderer_["View"], {
          style: styles.sectionContainerThree,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(renderer_["Text"], {
            style: styles.sectionHeadingThree,
            children: "Who is behind the foundation of the future company?"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(renderer_["Text"], {
            style: styles.sectionText,
            children: data.foundersSection
          })]
        })]
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(renderer_["Page"], {
      style: styles.overviewPage,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(renderer_["View"], {
        style: styles.rightBar,
        fixed: true
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(renderer_["Image"], {
        style: styles.overviewImage,
        src: "/pdf/blueprint.png",
        height: 20,
        width: 20
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(renderer_["View"], {
        style: styles.overviewSection,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(renderer_["Text"], {
          style: styles.overviewHeading,
          children: "Product"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(renderer_["Text"], {
          style: styles.overviewSubtitle,
          children: "This section will introduce you to the vision of the product"
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(renderer_["View"], {
          style: styles.sectionContainerOne,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(renderer_["Text"], {
            style: styles.sectionHeadingOne,
            children: "Detailed description of the product vision."
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(renderer_["Text"], {
            style: styles.sectionText,
            children: data.productOverviewSection
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(renderer_["View"], {
          style: styles.sectionContainerTwo,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(renderer_["Text"], {
            style: styles.sectionHeadingTwo,
            children: "How will other people find out about the product?"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(renderer_["Text"], {
            style: styles.sectionText,
            children: data.productPromotionSection
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(renderer_["View"], {
          style: styles.sectionContainerThree,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(renderer_["Text"], {
            style: styles.sectionHeadingThree,
            children: "What benefits will this product brings to customers?"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(renderer_["Text"], {
            style: styles.sectionText,
            children: data.productBenefitsSection
          })]
        })]
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(renderer_["Page"], {
      style: styles.overviewPage,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(renderer_["View"], {
        style: styles.rightBar,
        fixed: true
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(renderer_["Image"], {
        style: styles.overviewImage,
        src: "/pdf/unicorn.png",
        height: 20,
        width: 20
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(renderer_["View"], {
        style: styles.overviewSection,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(renderer_["Text"], {
          style: styles.overviewHeading,
          children: "Market analysis"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(renderer_["Text"], {
          style: styles.overviewSubtitle,
          children: "This section will reveal all the cards of the market"
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(renderer_["View"], {
          style: styles.sectionContainerOne,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(renderer_["Text"], {
            style: styles.sectionHeadingOne,
            children: "General insight into the market."
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(renderer_["Text"], {
            style: styles.sectionText,
            children: data.marketOverviewSection
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(renderer_["View"], {
          style: styles.sectionContainerTwo,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(renderer_["Text"], {
            style: styles.sectionHeadingTwo,
            children: "Who are the major competitors in the market?"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(renderer_["Text"], {
            style: styles.sectionText,
            children: data.competitorsSection
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(renderer_["View"], {
          style: styles.sectionContainerTwo,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(renderer_["Text"], {
            style: styles.sectionHeadingTwo,
            children: "What makes this startup stand out from the competition?"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(renderer_["Text"], {
            style: styles.sectionText,
            children: data.competitionDistinguishSection
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(renderer_["View"], {
          style: styles.sectionContainerThree,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(renderer_["Text"], {
            style: styles.sectionHeadingThree,
            children: "Target group of startup customers."
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(renderer_["Text"], {
            style: styles.sectionText,
            children: data.targetCustomersSection
          })]
        })]
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(renderer_["Page"], {
      style: styles.overviewPage,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(renderer_["View"], {
        style: styles.rightBar,
        fixed: true
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(renderer_["Image"], {
        style: styles.overviewImage,
        src: "/pdf/budget.png",
        height: 20,
        width: 20
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(renderer_["View"], {
        style: styles.overviewSection,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(renderer_["Text"], {
          style: styles.overviewHeading,
          children: "Finances"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(renderer_["Text"], {
          style: styles.overviewSubtitle,
          children: "Discover the costs of implementing our idea"
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(renderer_["View"], {
          style: styles.sectionContainerOne,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(renderer_["Text"], {
            style: styles.sectionHeadingOne,
            children: "How much money will it take to launch the startup?"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(renderer_["Text"], {
            style: styles.sectionText,
            children: data.startupCostsSection
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(renderer_["View"], {
          style: styles.sectionContainerTwo,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(renderer_["Text"], {
            style: styles.sectionHeadingTwo,
            children: "Approximate running costs, based on startup growth."
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(renderer_["Text"], {
            style: styles.sectionText,
            children: data.runningCostsSection
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(renderer_["View"], {
          style: styles.sectionContainerThree,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(renderer_["Text"], {
            style: styles.sectionHeadingThree,
            children: "How does the idea will be fund?"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(renderer_["Text"], {
            style: styles.sectionText,
            children: data.financingSection
          })]
        })]
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(renderer_["Page"], {
      style: styles.overviewPage,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(renderer_["View"], {
        style: styles.rightBar,
        fixed: true
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(renderer_["Image"], {
        style: styles.overviewImage,
        src: "/pdf/startup.png",
        height: 20,
        width: 20
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(renderer_["View"], {
        style: styles.overviewSection,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(renderer_["Text"], {
          style: styles.overviewHeading,
          children: "Business model"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(renderer_["Text"], {
          style: styles.overviewSubtitle,
          children: "In the final section, you will discover the startup's business model"
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(renderer_["View"], {
          style: styles.sectionContainerOne,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(renderer_["Text"], {
            style: styles.sectionHeadingOne,
            children: "Startup business model and legal structure overview."
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(renderer_["Text"], {
            style: styles.sectionText,
            children: data.businessModelOverviewSection
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(renderer_["View"], {
          style: styles.sectionContainerTwo,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(renderer_["Text"], {
            style: styles.sectionHeadingTwo,
            children: "Predictions for startup growth."
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(renderer_["Text"], {
            style: styles.sectionText,
            children: data.businessGrowSection
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(renderer_["View"], {
          style: styles.sectionContainerThree,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(renderer_["Text"], {
            style: styles.sectionHeadingThree,
            children: "Why will this particular startup succeed?"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(renderer_["Text"], {
            style: styles.sectionText,
            children: data.whySuccessSection
          })]
        })]
      })]
    })]
  });
};

/* harmony default export */ var PDFDocument = (MyDocument1);
// EXTERNAL MODULE: ./lib/db.js + 1 modules
var db = __webpack_require__("u1Fb");

// EXTERNAL MODULE: external "date-fns"
var external_date_fns_ = __webpack_require__("9BML");

// EXTERNAL MODULE: ./utils/fetcher.js
var fetcher = __webpack_require__("dfzq");

// CONCATENATED MODULE: ./components/dashboard/startup/StartupSkeleton.js






const StartupSkeleton = () => {
  const helperVariable = window.innerWidth < 1536 ? 'small' : 'large';
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
    children: helperVariable == 'small' ? /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "w-full grid grid-cols-3fr gap-8 border-r-6 rounded-2xl bg-white mt-8 mb-8 dark:bg-background p-8 text-center",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "shadow rounded-2xl flex flex-wrap justify-center items-center flex-col",
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          style: {
            height: '486px'
          },
          className: "relative inline-block text-right w-4/5 py-8",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(image_default.a, {
            src: "/loading/loading.svg",
            width: 150,
            height: 195
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "h-8 bg-background rounded-2xl mt-2"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "h-8 bg-background rounded-2xl mt-4"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "h-8 bg-background rounded-2xl mt-4"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "h-8 bg-background rounded-2xl mt-4"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "h-8 bg-background rounded-2xl mt-4"
          })]
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "shadow rounded-2xl flex flex-wrap justify-center items-center flex-col",
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          style: {
            height: '486px'
          },
          className: "relative inline-block text-right w-4/5 py-8",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(image_default.a, {
            src: "/loading/loading.svg",
            width: 150,
            height: 195
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "h-8 bg-background rounded-2xl mt-2"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "h-8 bg-background rounded-2xl mt-4"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "h-8 bg-background rounded-2xl mt-4"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "h-8 bg-background rounded-2xl mt-4"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "h-8 bg-background rounded-2xl mt-4"
          })]
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "shadow rounded-2xl flex flex-wrap justify-center items-center flex-col",
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          style: {
            height: '486px'
          },
          className: "relative inline-block text-right w-4/5 py-8",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(image_default.a, {
            src: "/loading/loading.svg",
            width: 150,
            height: 195
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "h-8 bg-background rounded-2xl mt-2"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "h-8 bg-background rounded-2xl mt-4"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "h-8 bg-background rounded-2xl mt-4"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "h-8 bg-background rounded-2xl mt-4"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "h-8 bg-background rounded-2xl mt-4"
          })]
        })
      })]
    }) : /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "w-full grid grid-cols-4fr gap-8 border-r-6 rounded-2xl bg-white mt-8 mb-8 dark:bg-background p-8 text-center",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "shadow rounded-2xl flex flex-wrap justify-center items-center flex-col",
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          style: {
            height: '486px'
          },
          className: "relative inline-block text-right w-4/5 py-8",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(image_default.a, {
            src: "/loading/loading.svg",
            width: 150,
            height: 195
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "h-8 bg-background rounded-2xl mt-2"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "h-8 bg-background rounded-2xl mt-4"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "h-8 bg-background rounded-2xl mt-4"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "h-8 bg-background rounded-2xl mt-4"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "h-8 bg-background rounded-2xl mt-4"
          })]
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "shadow rounded-2xl flex flex-wrap justify-center items-center flex-col",
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          style: {
            height: '486px'
          },
          className: "relative inline-block text-right w-4/5 py-8",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(image_default.a, {
            src: "/loading/loading.svg",
            width: 150,
            height: 195
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "h-8 bg-background rounded-2xl mt-2"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "h-8 bg-background rounded-2xl mt-4"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "h-8 bg-background rounded-2xl mt-4"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "h-8 bg-background rounded-2xl mt-4"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "h-8 bg-background rounded-2xl mt-4"
          })]
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "shadow rounded-2xl flex flex-wrap justify-center items-center flex-col",
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          style: {
            height: '486px'
          },
          className: "relative inline-block text-right w-4/5 py-8",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(image_default.a, {
            src: "/loading/loading.svg",
            width: 150,
            height: 195
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "h-8 bg-background rounded-2xl mt-2"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "h-8 bg-background rounded-2xl mt-4"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "h-8 bg-background rounded-2xl mt-4"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "h-8 bg-background rounded-2xl mt-4"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "h-8 bg-background rounded-2xl mt-4"
          })]
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "shadow rounded-2xl flex flex-wrap justify-center items-center flex-col",
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          style: {
            height: '486px'
          },
          className: "relative inline-block text-right w-4/5 py-8",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(image_default.a, {
            src: "/loading/loading.svg",
            width: 150,
            height: 195
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "h-8 bg-background rounded-2xl mt-2"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "h-8 bg-background rounded-2xl mt-4"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "h-8 bg-background rounded-2xl mt-4"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "h-8 bg-background rounded-2xl mt-4"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "h-8 bg-background rounded-2xl mt-4"
          })]
        })
      })]
    })
  }); // if (window.screen.width > 1536) {
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

/* harmony default export */ var startup_StartupSkeleton = (StartupSkeleton);
// CONCATENATED MODULE: ./pages/dashboard/startup.js




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











 // import { getAllProjects } from '../../lib/db';



 // PDF








const DivComponent = external_styled_components_default.a.div`
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
const DivComponent1 = external_styled_components_default.a.div`
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
const DivComponent2 = external_styled_components_default.a.div`
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
const DivComponent3 = external_styled_components_default.a.div`
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
const DivComponent4 = external_styled_components_default.a.div`
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
const DataContext = /*#__PURE__*/Object(external_react_["createContext"])();

const StartupPage = () => {
  // const { projectser } = getAllProjects();
  // if (projectser) {
  //   console.log(projectser);
  // }
  const {
    currentUser
  } = Object(newAuth["b" /* useAuth */])();
  const {
    0: projects,
    1: setProjects
  } = Object(external_react_["useState"])();
  const router = Object(router_["useRouter"])();
  const containerRef = Object(external_react_["useRef"])();
  const tippyRef = Object(external_react_["useRef"])();
  const {
    0: visible,
    1: setVisible
  } = Object(external_react_["useState"])(false);

  const show = () => {
    external_gsap_default.a.fromTo(tippyRef.current, {
      autoAlpha: 0,
      scale: 0
    }, {
      autoAlpha: 1,
      scale: 1,
      duration: 1,
      ease: external_gsap_["Power4"].easeOut
    });
    setVisible(true);
  };

  const hide = async () => {
    await external_gsap_default.a.to(tippyRef.current, {
      autoAlpha: 0,
      scale: 0,
      duration: 1,
      ease: external_gsap_["Power4"].easeIn
    });
    setVisible(false);
  };

  Object(external_react_["useEffect"])(() => {
    // gsap.fromTo(projectRef.current, { autoAlpha: 0 }, { autoAlpha: 1, duration: 5, ease: Power4.easeIn })
    // GSAP
    external_gsap_default.a.fromTo(containerRef.current, {
      autoAlpha: 0
    }, {
      autoAlpha: 1,
      duration: 2,
      ease: external_gsap_["Power4"].easeOut
    }); // TIPPY

    setVisible(true); // const deleteCurrentProject = async () => {
    //   await db.collection('currentProject').doc.delete();
    // };
    // deleteCurrentProject();

    const fetchProjects = async () => {
      const userProjects = await firebase["b" /* db */].collection('projects').where('uid', '==', currentUser.uid).get();
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
    external_gsap_default.a.to(containerRef.current, {
      autoAlpha: 0,
      duration: 1,
      ease: external_gsap_["Power4"].easeOut
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
  } = Object(external_react_["useState"])();

  const onProjectEdit = async (e, currentProject) => {
    e.preventDefault();
    await firebase["b" /* db */].collection('currentProject').doc(currentUser.uid).set(_objectSpread({
      projectId: currentProject.projectId
    }, currentProject));
    router.push('/dashboard/projects/creator/overview');
  };

  console.log(projects);
  const {
    0: activeClass,
    1: setActiveClass
  } = Object(external_react_["useState"])(false);
  const classRef = Object(external_react_["useRef"])(null);
  const projectRef = Object(external_react_["useRef"])(null); // MAGIC

  const classArrayref = Object(external_react_["useRef"])([]);
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
      external_gsap_default.a.to(classArrayref.current.find(project => project.id == projectId), {
        autoAlpha: 0
      });
      setActiveClass(false);
    } else {
      external_gsap_default.a.to(classArrayref.current.find(project => project.id == projectId), {
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
  } = Object(external_react_["useState"])(); // const fetching = () => {
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
  } = Object(external_react_["useState"])();

  const doingMyBest = () => {
    const {
      data
    } = external_swr_default()(currentUser ? ['/api/projects', currentUser.token] : null, fetcher["a" /* default */]);
    Object(external_react_["useMemo"])(() => data && setSpecialData(data), [data]); // ZMIENIAMY DATA, TYLKO JEŚLI SĄ PROJEKTY. Problem był taki, że te projekty raz były, a raz ich nie było. Teraz będą zawsze, bo zmieniają się tylko wtedy, kiedy istnieją!
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
    Object(db["c" /* deleteProject */])(projectId);
    Object(external_swr_["mutate"])(['/api/projects', currentUser.token], async data => {
      return {
        projects: data.projects.filter(project => project.projectId !== projectId)
      };
    }, false); // mutate(['/api/projects', currentUser.token]);
  };

  console.log('PROJECTS - ', datas);
  console.log('PROJECTS MAIN - ', projects);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Tippy["a" /* default */], {
      startups: true,
      contentClass: "h-36 w-80 shadow-lg rounded-2xl bg-primary flex justify-center items-center",
      contentText: "This is a place where magical things happen ",
      contentText1: " Just start creating your startup and bring your idea into reality. Once you've done that, you can manage it from the main panel. Feel free to edit, save or delete your idea"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(NavbarTemplate["a" /* default */], {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        ref: containerRef,
        className: "min-h-screen w-full relative flex flex-col items-center",
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "w-full sm:max-w-smContainer md:max-w-mdContainer lg:max-w-lgContainer xl:max-w-xlContainer 2xl:max-w-xxlContainer normal:max-w-normalContainer relative mt-16",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "grid grid-cols-2 grid-rows-1 grid-flow-col",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "flex items-center",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("svg", {
                height: "30",
                width: "30",
                className: "fill-current text-primary dark:text-primarydark",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 128 128",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("title", {
                  children: "Landing Success"
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("g", {
                  id: "Landing_Success",
                  "data-name": "Landing Success",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
                    className: "cls-1",
                    d: "M109.3,90.1A46,46,0,0,0,65,36V20.08c1.78-.62,7.21-2.14,12.57.23a19.33,19.33,0,0,0,14.82,0c.87-.38.61.31.61-17.93a1,1,0,0,0-1.43-.93c-.07,0-6.69,2.87-13.18,0A19.41,19.41,0,0,0,65,.93,1,1,0,0,0,63,1V36a45.86,45.86,0,0,0-28.66,10.8C16.18,40.48,4,40,.79,45.51-2.29,50.86,3.94,59.3,10,65.68A11,11,0,0,0,18,83c.81,38.41,46.08,59.2,75.66,34.21,8.53,3,29,9.15,33.55,1.31C130.39,113,123.86,102.65,109.3,90.1ZM77.59,3.31A19.39,19.39,0,0,0,91,3.83V18.68c-1.79.62-7.22,2.13-12.57-.23A19.19,19.19,0,0,0,65,17.93V3.08C66.81,2.46,72.24,1,77.59,3.31ZM65,45v-7c39.69.91,58,50.27,28.21,76.81C71.32,107,46,92.66,27.77,78.64a11,11,0,0,0-3.2-16.13A43.88,43.88,0,0,1,63,38.06V45A1,1,0,0,0,65,45ZM32.55,48.36a46.21,46.21,0,0,0-9.83,13.28,10.93,10.93,0,0,0-11.4,2.47C-8.39,43.23,5.23,39.08,32.55,48.36ZM10,72a9,9,0,1,1,9,9A9,9,0,0,1,10,72Zm10,11a11,11,0,0,0,6.34-2.82c18.45,14.21,43.45,28.35,65.05,36.22C63,139.16,20.83,119.1,20.05,83Zm105.4,34.5c-2.51,4.35-14,3.62-30-1.85a45.61,45.61,0,0,0,13.42-23.21C121.59,103.58,128,113.12,125.45,117.47Z"
                  })
                })]
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                className: "text-primarydark text-2xl mt-2 pl-2 dark:text-background",
                children: "Startups"
              })]
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "flex justify-end mt-2",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
                onClick: e => onProjectCreate(e),
                className: "hover:bg-primary hover:text-white dark:hover:bg-primarydark dark:hover:text-background focus:outline-none border border-primary text-primary text-sm font-light py-2 px-6 rounded-2xl mt-2 dark:text-primarydark dark:border-primarydark",
                children: "New startup"
              })
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
              className: "text-secondary text-md text-gray",
              children: "Bring your idea into reality"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
              className: "text-primarydark text-lg mt-10 -mb-6 dark:text-background",
              children: "Ideas you invented"
            })
          }), !specialData ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(startup_StartupSkeleton, {}) : specialData.projects[0] ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
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
              return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                className: "shadow rounded-2xl flex flex-wrap justify-center items-center flex-col hover:shadow-lg transform hover:scale-105 hover:-translate-y-2 hover:-translate-x-2 transition duration-500 ease-in-out",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                  className: "relative inline-block text-right w-4/5 top-2",
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(image_default.a, {
                    onClick: () => chooseClassesClick(image.projectId),
                    src: "/dots-menu2.svg",
                    height: 25,
                    width: 25,
                    className: "cursor-pointer"
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                    ref: chooseClasses,
                    id: image.projectId,
                    className: "origin-top-right absolute left-1/2 transform -translate-x-1/2 w-44 lg:w-48 rounded-md shadow-xl bg-white focus:outline-none invisible rounded-2xl" // role='menu'
                    // aria-orientation='vertical'
                    // aria-labelledby='options-menu'
                    ,
                    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                      className: "pt-1 text-left",
                      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                        className: "transition duration-500 ease-in-out flex items-center justify-between hover:bg-primary rounded-tl-2xl rounded-tr-2xl",
                        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                          onClick: async e => {
                            e.preventDefault();

                            const doc = /*#__PURE__*/Object(jsx_runtime_["jsx"])(PDFDocument, {
                              data: data
                            });

                            const asPdf = Object(renderer_["pdf"])([]); // {} is important, throws without an argument

                            asPdf.updateContainer(doc);
                            const blob = await asPdf.toBlob();
                            Object(external_file_saver_["saveAs"])(blob, `${image.ideaName}.pdf`);
                          },
                          href: "#",
                          className: "block px-4 py-2 2xl:py-3 text-sm text-primarydark transition duration-500 ease-in-out hover:text-background" // role='menuitem'
                          ,
                          children: "Save / Share"
                        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                          className: "mr-3 flex justify-center items-center",
                          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(image_default.a, {
                            src: "/gifs/rocket.gif",
                            height: 30,
                            width: 30
                          })
                        })]
                      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                        className: "transition duration-500 ease-in-out flex items-center justify-between hover:bg-primary",
                        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                          onClick: e => onProjectEdit(e, image),
                          href: "#",
                          className: "block px-4 py-2 2xl:py-3 text-sm text-primarydark transition duration-500 ease-in-out hover:text-background" // role='menuitem'
                          ,
                          children: "Edit"
                        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                          className: "mr-3 flex justify-center items-center relative bottom-1",
                          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(image_default.a, {
                            src: "/gifs/whale.gif",
                            height: 30,
                            width: 30
                          })
                        })]
                      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                        className: "transition duration-500 ease-in-out flex items-center justify-between hover:bg-primary rounded-bl-2xl rounded-br-2xl",
                        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                          onClick: e => onProjectDelete(e, image.projectId),
                          href: "#",
                          className: "block px-4 py-2 2xl:py-3 text-sm text-primarydark transition duration-500 ease-in-out hover:text-background" // role='menuitem'
                          ,
                          children: "Remove"
                        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                          className: "mr-3 flex justify-center items-center relative bottom-1",
                          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(image_default.a, {
                            src: "/gifs/bomb.gif",
                            height: 30,
                            width: 30
                          })
                        })]
                      })]
                    })
                  })]
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                  src: image.avatarExists == 'blank' ? `/modal/${image.imageNameExists}.svg` : image.avatarExists,
                  className: " h-40 w-40 p-4 border-b border-primary"
                }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                  className: "mb-4",
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                    className: "text-primarydark text-sm mt-2 px-4 mt-2",
                    children: image.ideaName
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                    className: "text-primarydark text-xs text-gray px-4",
                    children: image.startupField
                  })]
                }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                  className: "flex w-3/4 justify-between items-center -mt-4",
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                    className: "text-xs text-primarydark",
                    children: "Vision"
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(DivComponent, {
                    filledSection: image.filledSection,
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(image_default.a, {
                      src: `/progress/${image.filledSection ? 'check' : 'remove'}.svg`,
                      height: 26,
                      width: 26
                    })
                  })]
                }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                  className: "flex w-3/4 justify-between items-center -mt-4",
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                    className: "text-xs text-primarydark",
                    children: "Product"
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(DivComponent1, {
                    filledSection1: image.filledSection1,
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(image_default.a, {
                      src: `/progress/${image.filledSection1 ? 'check' : 'remove'}.svg`,
                      height: 26,
                      width: 26
                    })
                  })]
                }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                  className: "flex w-3/4 justify-between items-center -mt-4",
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                    className: "text-xs text-primarydark",
                    children: "Market"
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(DivComponent2, {
                    filledSection2: image.filledSection2,
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(image_default.a, {
                      src: `/progress/${image.filledSection2 ? 'check' : 'remove'}.svg`,
                      height: 26,
                      width: 26
                    })
                  })]
                }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                  className: "flex w-3/4 justify-between items-center -mt-4",
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                    className: "text-xs text-primarydark",
                    children: "Finances"
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(DivComponent3, {
                    filledSection3: image.filledSection3,
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(image_default.a, {
                      src: `/progress/${image.filledSection3 ? 'check' : 'remove'}.svg`,
                      height: 26,
                      width: 26
                    })
                  })]
                }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                  className: "flex w-3/4 justify-between items-center -mt-4",
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                    className: "text-xs text-primarydark",
                    children: "Model"
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(DivComponent4, {
                    filledSection4: image.filledSection4,
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(image_default.a, {
                      src: `/progress/${image.filledSection4 ? 'check' : 'remove'}.svg`,
                      height: 26,
                      width: 26
                    })
                  })]
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                  className: "text-primarydark text-xs text-gray px-4 pb-2",
                  children: Object(external_date_fns_["format"])(Object(external_date_fns_["parseISO"])(image.createdAt), 'PPP')
                })]
              }, image.projectId);
            })
          }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(startup_EmptyStartup, {
            onProjectCreate: onProjectCreate
          })]
        })
      })
    })]
  });
};

/* harmony default export */ var startup = __webpack_exports__["default"] = (StartupPage);

/***/ }),

/***/ "aYjl":
/***/ (function(module, exports) {

module.exports = require("swr");

/***/ }),

/***/ "bnmT":
/***/ (function(module, exports) {

module.exports = require("firebase/firestore");

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _router2 = __webpack_require__("nOHt");

var _useIntersection = __webpack_require__("vNVm");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
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
  if (false) {}

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

/***/ "cqNN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export AuthContext */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useAuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("U6Mw");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("vmXh");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);





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

      _lib_firebase__WEBPACK_IMPORTED_MODULE_1__[/* db */ "b"].collection('users').doc(user.uid).set({
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
    return await _lib_firebase__WEBPACK_IMPORTED_MODULE_1__[/* auth */ "a"].createUserWithEmailAndPassword(email, password).then(response => {
      return handleUser(response.user);
    });
  };

  const logIn = (email, password) => {
    return _lib_firebase__WEBPACK_IMPORTED_MODULE_1__[/* auth */ "a"].signInWithEmailAndPassword(email, password);
  };

  const logOut = () => {
    return _lib_firebase__WEBPACK_IMPORTED_MODULE_1__[/* auth */ "a"].signOut();
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    const unsubscribe = _lib_firebase__WEBPACK_IMPORTED_MODULE_1__[/* auth */ "a"].onIdTokenChanged(handleUser);
    return () => unsubscribe();
  }, []);
  const value = {
    currentUser,
    signUp,
    logIn,
    logOut
  };

  const getStripeRole = async () => {
    await _lib_firebase__WEBPACK_IMPORTED_MODULE_1__[/* default */ "c"].auth().currentUser.getIdToken(true);
    const decodedToken = await _lib_firebase__WEBPACK_IMPORTED_MODULE_1__[/* default */ "c"].auth().currentUser.getIdTokenResult();
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

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(AuthContext.Provider, {
    value: value,
    children: !loading && children
  });
};

/***/ }),

/***/ "d60x":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "dCoW":
/***/ (function(module, exports) {

module.exports = require("firebase/functions");

/***/ }),

/***/ "dQHF":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.default = Image;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("98FW"));

var _extends2 = _interopRequireDefault(__webpack_require__("1ccW"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _head = _interopRequireDefault(__webpack_require__("UlpK"));

var _toBase = __webpack_require__("7UUK");

var _imageConfig = __webpack_require__("ANQk");

var _useIntersection = __webpack_require__("vNVm");

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
} = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default"} || _imageConfig.imageConfigDefault; // sort smallest to largest

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

  if (false) {}

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
    if (false) {}
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
  if (false) {}

  return `${root}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}

/***/ }),

/***/ "dZ6Y":
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

/***/ "dfzq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/* harmony default export */ __webpack_exports__["a"] = (fetcher);

/***/ }),

/***/ "efsx":
/***/ (function(module, exports) {

module.exports = require("next-seo");

/***/ }),

/***/ "elyg":
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

var _normalizeTrailingSlash = __webpack_require__("X24+");

var _routeLoader = __webpack_require__("Nh2W");

var _denormalizePagePath = __webpack_require__("wkBG");

var _normalizeLocalePath = __webpack_require__("3wub");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _querystring = __webpack_require__("3WeD");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("GXs3"));

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

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
      if (false) {}

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
          if (false) {}

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

      if (false) {} // shallow routing is only allowed for same page URL changes.


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
    if (false) {}

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

      if (false) {}

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

    if (false) {}

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

    if ( true && !this.isPreview && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

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

/***/ "fvOV":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/prepare-destination.js");

/***/ }),

/***/ "g/15":
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

var _formatUrl = __webpack_require__("6D7l");
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
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


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

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gguc":
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

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

var _querystring = __webpack_require__("3WeD");
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

/***/ "ha8t":
/***/ (function(module, exports) {

module.exports = require("firebase/storage");

/***/ }),

/***/ "kNaX":
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ }),

/***/ "lN3F":
/***/ (function(module, exports) {

module.exports = require("next-themes");

/***/ }),

/***/ "lYhb":
/***/ (function(module, exports) {

module.exports = require("file-saver");

/***/ }),

/***/ "mctB":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/node-polyfill-fetch");

/***/ }),

/***/ "nMq/":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/document-context.js");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

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

/***/ "p7c+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
RegExr: Learn, Build, & Test RegEx
Copyright (C) 2017  gskinner.com, inc.

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

/*
The core profile essentially defines every feature we support, and is then pared down by other profiles. All values should be y (true).

It also acts in part as pseudo documentation for all of the "type" values.
 */
let y = true,
    n = false;
let core = {
  id: "core",
  flags: {
    "g": "global",
    // note that this is not a real flag in some flavors, but a different method call
    "i": "caseinsensitive",
    "m": "multiline",
    "s": "dotall",
    "u": "unicode",
    "y": "sticky",
    "x": "extended",
    "U": "ungreedy"
  },
  // reserved characters that need to be escaped:
  escChars: "+*?^$\\.[]{}()|/".split("").reduce((o, c) => {
    o[c] = y;
    return o;
  }, {}),
  // escape chars that are specifically not supported by the flavor:
  badEscChars: n,
  escCharCodes: {
    "0": 0,
    // null
    "a": 7,
    // bell
    "t": 9,
    // tab
    "n": 10,
    // lf
    "v": 11,
    // vertical tab
    "f": 12,
    // form feed
    "r": 13,
    // cr
    "e": 27 // escape

  },
  escCharTypes: {
    "A": "bos",
    "b": "wordboundary",
    "B": "notwordboundary",
    "d": "digit",
    "D": "notdigit",
    "G": "prevmatchend",
    "h": "hwhitespace",
    "H": "nothwhitespace",
    "K": "keepout",
    "N": "notlinebreak",
    "R": "linebreak",
    "s": "whitespace",
    "S": "notwhitespace",
    "v": "vwhitespace",
    "V": "notvwhitespace",
    "w": "word",
    "W": "notword",
    "X": "unicodegrapheme",
    "Z": "eos",
    "z": "abseos"
  },
  charTypes: {
    ".": "dot",
    "|": "alt",
    "$": "eof",
    "^": "bof",
    "?": "opt",
    // also: "lazy"
    "+": "plus",
    // also: "possessive"
    "*": "star"
  },
  unquantifiable: {
    // all group/set open tokens are unquantifiable by default (ie. tokens with a .close value)
    "quant": y,
    "plus": y,
    "star": y,
    "opt": y,
    "lazy": y,
    "possessive": y,
    "eof": y,
    "bof": y,
    "eos": y,
    "abseos": y,
    "alt": y,
    "open": y,
    "mode": y,
    "comment": y,
    // TODO: this should actually be ignored by quantifiers.
    "condition": y
  },
  unicodeScripts: {
    // from: http://www.pcre.org/original/doc/html/pcrepattern.html
    "Arabic": y,
    "Armenian": y,
    "Avestan": y,
    "Balinese": y,
    "Bamum": y,
    "Bassa_Vah": y,
    "Batak": y,
    "Bengali": y,
    "Bopomofo": y,
    "Brahmi": y,
    "Braille": y,
    "Buginese": y,
    "Buhid": y,
    "Canadian_Aboriginal": y,
    "Carian": y,
    "Caucasian_Albanian": y,
    "Chakma": y,
    "Cham": y,
    "Cherokee": y,
    "Common": y,
    "Coptic": y,
    "Cuneiform": y,
    "Cypriot": y,
    "Cyrillic": y,
    "Deseret": y,
    "Devanagari": y,
    "Duployan": y,
    "Egyptian_Hieroglyphs": y,
    "Elbasan": y,
    "Ethiopic": y,
    "Georgian": y,
    "Glagolitic": y,
    "Gothic": y,
    "Grantha": y,
    "Greek": y,
    "Gujarati": y,
    "Gurmukhi": y,
    "Han": y,
    "Hangul": y,
    "Hanunoo": y,
    "Hebrew": y,
    "Hiragana": y,
    "Imperial_Aramaic": y,
    "Inherited": y,
    "Inscriptional_Pahlavi": y,
    "Inscriptional_Parthian": y,
    "Javanese": y,
    "Kaithi": y,
    "Kannada": y,
    "Katakana": y,
    "Kayah_Li": y,
    "Kharoshthi": y,
    "Khmer": y,
    "Khojki": y,
    "Khudawadi": y,
    "Lao": y,
    "Latin": y,
    "Lepcha": y,
    "Limbu": y,
    "Linear_A": y,
    "Linear_B": y,
    "Lisu": y,
    "Lycian": y,
    "Lydian": y,
    "Mahajani": y,
    "Malayalam": y,
    "Mandaic": y,
    "Manichaean": y,
    "Meetei_Mayek": y,
    "Mende_Kikakui": y,
    "Meroitic_Cursive": y,
    "Meroitic_Hieroglyphs": y,
    "Miao": y,
    "Modi": y,
    "Mongolian": y,
    "Mro": y,
    "Myanmar": y,
    "Nabataean": y,
    "New_Tai_Lue": y,
    "Nko": y,
    "Ogham": y,
    "Ol_Chiki": y,
    "Old_Italic": y,
    "Old_North_Arabian": y,
    "Old_Permic": y,
    "Old_Persian": y,
    "Old_South_Arabian": y,
    "Old_Turkic": y,
    "Oriya": y,
    "Osmanya": y,
    "Pahawh_Hmong": y,
    "Palmyrene": y,
    "Pau_Cin_Hau": y,
    "Phags_Pa": y,
    "Phoenician": y,
    "Psalter_Pahlavi": y,
    "Rejang": y,
    "Runic": y,
    "Samaritan": y,
    "Saurashtra": y,
    "Sharada": y,
    "Shavian": y,
    "Siddham": y,
    "Sinhala": y,
    "Sora_Sompeng": y,
    "Sundanese": y,
    "Syloti_Nagri": y,
    "Syriac": y,
    "Tagalog": y,
    "Tagbanwa": y,
    "Tai_Le": y,
    "Tai_Tham": y,
    "Tai_Viet": y,
    "Takri": y,
    "Tamil": y,
    "Telugu": y,
    "Thaana": y,
    "Thai": y,
    "Tibetan": y,
    "Tifinagh": y,
    "Tirhuta": y,
    "Ugaritic": y,
    "Vai": y,
    "Warang_Citi": y,
    "Yi": y
  },
  unicodeCategories: {
    // from: http://www.pcre.org/original/doc/html/pcrepattern.html
    "C": y,
    // Other
    "Cc": y,
    // Control
    "Cf": y,
    // Format
    "Cn": y,
    // Unassigned
    "Co": y,
    // Private use
    "Cs": y,
    // Surrogate
    "L": y,
    // Letter
    "L&": y,
    // Any letter 
    "Ll": y,
    // Lower case letter
    "Lm": y,
    // Modifier letter
    "Lo": y,
    // Other letter
    "Lt": y,
    // Title case letter
    "Lu": y,
    // Upper case letter
    "M": y,
    // Mark
    "Mc": y,
    // Spacing mark
    "Me": y,
    // Enclosing mark
    "Mn": y,
    // Non-spacing mark
    "N": y,
    // Number
    "Nd": y,
    // Decimal number
    "Nl": y,
    // Letter number
    "No": y,
    // Other number
    "P": y,
    // Punctuation
    "Pc": y,
    // Connector punctuation
    "Pd": y,
    // Dash punctuation
    "Pe": y,
    // Close punctuation
    "Pf": y,
    // Final punctuation
    "Pi": y,
    // Initial punctuation
    "Po": y,
    // Other punctuation
    "Ps": y,
    // Open punctuation
    "S": y,
    // Symbol
    "Sc": y,
    // Currency symbol
    "Sk": y,
    // Modifier symbol
    "Sm": y,
    // Mathematical symbol
    "So": y,
    // Other symbol
    "Z": y,
    // Separator
    "Zl": y,
    // Line separator
    "Zp": y,
    // Paragraph separator
    "Zs": y // Space separator

  },
  posixCharClasses: {
    // from: http://www.pcre.org/original/doc/html/pcrepattern.html
    "alnum": y,
    // letters and digits
    "alpha": y,
    // letters
    "ascii": y,
    // character codes 0 - 127
    "blank": y,
    // space or tab only
    "cntrl": y,
    // control characters
    "digit": y,
    // decimal digits (same as \d)
    "graph": y,
    // printing characters, excluding space
    "lower": y,
    // lower case letters
    "print": y,
    // printing characters, including space
    "punct": y,
    // printing characters, excluding letters and digits and space
    "space": y,
    // white space (the same as \s from PCRE 8.34)
    "upper": y,
    // upper case letters
    "word": y,
    // "word" characters (same as \w)
    "xdigit": y // hexadecimal digits

  },
  modes: {
    "i": "caseinsensitive",
    "s": "dotall",
    "m": "multiline",
    "x": "freespacing",
    "J": "samename",
    "U": "switchlazy"
  },
  tokens: {
    // note that not all of these are actively used in the lexer, but are included for completeness.
    "open": y,
    // opening /
    "close": y,
    // closing /
    "char": y,
    // abc
    // classes:
    // also in escCharTypes and charTypes
    "set": y,
    // [a-z]
    "setnot": y,
    // [^a-z]
    "setclose": y,
    // ]
    "range": y,
    // [a-z]
    "unicodecat": y,
    // \p{Ll} \P{^Ll} \pL
    "notunicodecat": y,
    // \P{Ll} \p{^Ll} \PL
    "unicodescript": y,
    // \p{Cherokee} \P{^Cherokee}
    "notunicodescript": y,
    // \P{Cherokee} \p{^Cherokee}
    "posixcharclass": y,
    // [[:alpha:]]
    // not in supported flavors:	"posixcollseq": y, // [[.foo.]] // this is recognized by the lexer, currently returns "notsupported" error
    // not in supported flavors:	"unicodeblock": y, // \p{InThai} \p{IsThai} and NOT \P
    // not in supported flavors:	"subtract": y, // [base-[subtract]]
    // not in supported flavors:	"intersect": y, // [base&&[intersect]]
    // esc:
    // also in escCharCodes and escCharTypes
    "escoctal": y,
    // \11
    "escunicodeu": y,
    // \uFFFF
    "escunicodeub": y,
    // \u{00A9}
    "escunicodexb": y,
    // \x{00A9}
    "escsequence": y,
    // \Q...\E
    "eschexadecimal": y,
    // \xFF
    "esccontrolchar": y,
    // \cA
    "escoctalo": y,
    // \o{377} // resolved to escoctal in lexer, no docs required
    "escchar": y,
    // \m (unrecognized escapes) // no reference documentation required
    // group:
    "group": y,
    // (foo)
    "groupclose": y,
    // )
    "noncapgroup": y,
    // (?:foo)
    "namedgroup": y,
    // (?P<name>foo) (?<name>foo) (?'name'foo)
    "atomic": y,
    // (?>foo|bar)
    "define": y,
    // (?(DEFINE)foo)
    "branchreset": y,
    // (?|(a)|(b))
    // lookaround:
    "poslookbehind": y,
    // (?<=foo)
    "neglookbehind": y,
    // (?<!foo)
    "poslookahead": y,
    // (?=foo)
    "neglookahead": y,
    // (?!foo)
    // ref:
    "namedref": y,
    // \k<name> \k'name' \k{name} (?P=name)  \g{name}
    "numref": y,
    // \1
    "extnumref": y,
    // \g{-1} \g{+1} \g{1} \g1 \g-1
    "recursion": y,
    // (?R) (?0) \g<0> \g'0'
    "numsubroutine": y,
    // \g<1> \g'-1' (?1) (?-1)
    "namedsubroutine": y,
    // \g<name> \g'name' (?&name) (?P>name)
    // quantifiers:
    // also in specialChars
    "quant": y,
    // {1,2}
    "possessive": y,
    // ++
    "lazy": y,
    // ?
    // special:
    "conditional": y,
    // (?(?=if)then|else)
    "condition": y,
    // (?=if) any lookaround
    "conditionalelse": y,
    // |
    "conditionalgroup": y,
    // (?(1)a|b) (?(-1)a|b) (?(name)a|b)
    "mode": y,
    // (?i-x) see modes above
    "comment": y,
    // (?#comment)
    // meta:
    "matchanyset": y // [\s\S]

  },
  substTokens: {
    // named references aren't supported in JS or PCRE / PHP
    "subst_$esc": y,
    // $$
    "subst_$&match": y,
    // $&
    "subst_$before": y,
    // $`
    "subst_$after": y,
    // $'
    "subst_$group": y,
    // $1 $99 // resolved to subst_group in lexer, no docs required
    "subst_$bgroup": y,
    // ${1} ${99} // resolved to subst_group in lexer, no docs required
    "subst_bsgroup": y,
    // \1 \99 // resolved to subst_group in lexer, no docs required
    "subst_group": y,
    // $1 \1 \{1} // combined in docs, not used by lexer
    "subst_0match": y,
    // $0 \0 \{0}
    // this isn't a feature of the engine, but of RegExr:
    "subst_esc": y // \n \r \u1234

  },
  config: {
    "forwardref": y,
    // \1(a)
    "nestedref": y,
    // (\1a|b)+
    "ctrlcodeerr": y,
    // does \c error? (vs decompose)
    "reftooctalalways": y,
    // does a single digit reference \1 become an octal? (vs remain an unmatched ref)
    "substdecomposeref": y,
    // will a subst reference decompose? (ex. \3 becomes "\" & "3" if < 3 groups)
    "looseesc": y,
    // should unrecognized escape sequences match the character (ex. \u could match "u") // disabled when `u` flag is set
    "unicodenegated": y,
    // \p{^etc}"
    "namedgroupalt": y // if false, only support (?<name>foo)

  },
  docs: {// for example:
    //possessive: {desc: "+This will be appended to the existing entry." },
    //namedgroup: {tip: "This will overwrite the existing entry." }
  }
};

/*
RegExr: Learn, Build, & Test RegEx
Copyright (C) 2017  gskinner.com, inc.

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

/*
The PCRE profile is almost a straight copy of the core profile.
*/
let y$1 = true,
    n$1 = false;
let pcre = {
  id: "pcre",
  label: "PCRE",
  browser: false,
  flags: {
    "u": n$1,
    "y": n$1
  },
  badEscChars: "uUlLN".split("").reduce((o, c) => {
    o[c] = y$1;
    return o;
  }, {}),
  escCharCodes: {
    "v": n$1 // vertical tab // PCRE support \v as vertical whitespace

  },
  tokens: {
    "escunicodeu": n$1,
    // \uFFFF
    "escunicodeub": n$1 // \u{00A9}
    // octalo PCRE 8.34+

  },
  substTokens: {
    "subst_$esc": n$1,
    // $$
    "subst_$&match": n$1,
    // $&
    "subst_$before": n$1,
    // $`
    "subst_$after": n$1 // $'

  },
  config: {
    "reftooctalalways": n$1,
    // does a single digit reference \1 become an octal? (vs remain an unmatched ref)
    "substdecomposeref": n$1,
    // will a subst reference decompose? (ex. \3 becomes "\" & "3" if < 3 groups)
    "looseesc": n$1 // should unrecognized escape sequences match the character (ex. \u could match "u") // disabled when `u` flag is set

  },
  docs: {
    "escoctal": {
      ext: "+<p>The syntax <code>\\o{FFF}</code> is also supported.</p>"
    },
    "numref": {
      ext: "<p>There are multiple syntaxes for this feature: <code>\\1</code> <code>\\g1</code> <code>\\g{1}</code>.</p>" + "<p>The latter syntaxes support relative values preceded by <code>+</code> or <code>-</code>. For example <code>\\g-1</code> would match the group preceding the reference.</p>"
    },
    "lazy": {
      ext: "+<p>This behaviour is reversed by the ungreedy (<code>U</code>) flag/modifier.</p>"
    }
  }
};

/*
RegExr: Learn, Build, & Test RegEx
Copyright (C) 2017  gskinner.com, inc.

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

/*
The javascript profile disables a large number of features.

Note that JS warnings are currently added in addJSWarnings in the ExpresssionLexer.
*/
let n$2 = false;

function test(expr, flag) {
  try {
    return new RegExp(expr, flag) && undefined;
  } catch (e) {
    return n$2;
  }
}

function testFlag(flag) {
  return test(".", flag);
}

let unicodeFlag = testFlag("u");
let stickyFlag = testFlag("y");
let dotallFlag = testFlag("s");
let lookbehind = test("(?<=A)");
let namedgroup = test("(?<A>B)");
let unicodecat = test("\\p{Ll}", "u"); // disabled when `u` flag is not set

let javascript = {
  id: "js",
  label: "JavaScript",
  browser: true,
  flags: {
    "s": dotallFlag,
    // warning
    "x": n$2,
    "u": unicodeFlag,
    // warning
    "y": stickyFlag,
    // warning
    "U": n$2
  },
  escCharCodes: {
    "a": n$2,
    // bell
    "e": n$2 // escape

  },
  escCharTypes: {
    "A": n$2,
    // bos
    "G": n$2,
    // prevmatchend
    "h": n$2,
    // hwhitespace
    "H": n$2,
    // nothwhitespace
    "K": n$2,
    // keepout
    "N": n$2,
    // notlinebreak
    "R": n$2,
    // newline
    "v": n$2,
    // vwhitespace
    "V": n$2,
    // notvwhitespace
    "X": n$2,
    // unicodegrapheme
    "Z": n$2,
    // eos
    "z": n$2 // abseos

  },
  unicodeScripts: unicodecat,
  unicodeCategories: unicodecat,
  posixCharClasses: n$2,
  modes: n$2,
  tokens: {
    // classes:
    // also in escCharSpecials and specialChars
    "unicodecat": unicodecat,
    // \p{Ll} \P{^Ll} \pL
    "notunicodecat": unicodecat,
    // \P{Ll} \p{^Ll} \PL
    "unicodescript": unicodecat,
    // \p{Cherokee} \P{^Cherokee}
    "notunicodescript": unicodecat,
    // \P{Cherokee} \p{^Cherokee}
    "posixcharclass": n$2,
    // [[:alpha:]]
    // esc:
    // also in escCharCodes and escCharSpecials
    "escunicodeub": unicodeFlag,
    // \u{00A9}
    "escunicodexb": n$2,
    // \x{00A9}
    "escsequence": n$2,
    // \Q...\E
    "escoctalo": n$2,
    // \o{377}
    // group:
    "namedgroup": namedgroup,
    // (?P<name>foo) (?<name>foo) (?'name'foo)
    "atomic": n$2,
    // (?>foo|bar)
    "define": n$2,
    // (?(DEFINE)foo)
    "branchreset": n$2,
    // (?|(a)|(b))
    // lookaround:
    "poslookbehind": lookbehind,
    // (?<=foo) // warning
    "neglookbehind": lookbehind,
    // (?<!foo) // warning
    // ref:
    "namedref": n$2,
    // \k<name> \k'name' \k{name} (?P=name)  \g{name}
    "extnumref": n$2,
    // \g{-1} \g{+1} \g{1} \g1 \g-1
    "recursion": n$2,
    // (?R) (?0) \g<0> \g'0'
    "numsubroutine": n$2,
    // \g<1> \g'-1' (?1) (?-1)
    "namedsubroutine": n$2,
    // \g<name> \g'name' (?&name) (?P>name)
    // quantifiers:
    // also in specialChars
    "possessive": n$2,
    // special:
    "conditional": n$2,
    // (?(?=if)then|else)
    "conditionalif": n$2,
    // (?=if) any lookaround
    "conditionalelse": n$2,
    // |
    "conditionalgroup": n$2,
    // (?(1)a|b) (?(-1)a|b) (?(name)a|b)
    "mode": n$2,
    // (?i-x) see modes above
    "comment": n$2 // (?#comment)

  },
  config: {
    "forwardref": n$2,
    // \1(a)
    "nestedref": n$2,
    // (\1a|b)+
    "ctrlcodeerr": n$2,
    // does \c error, or decompose?
    "unicodenegated": n$2,
    // \p{^etc}
    "namedgroupalt": n$2 // if false, only support (?<name>foo)

  },
  substTokens: {
    "subst_0match": n$2,
    // $0 \0 \{0}
    "subst_$bgroup": n$2,
    // ${1} ${99}
    "subst_bsgroup": n$2 // \1 \99

  },
  docs: {
    "subst_group": {
      ext: ""
    },
    // remove other syntaxes.
    "namedgroup": {
      ext: ""
    },
    // remove other syntaxes.
    "unicodecat": {
      ext: "<p>Requires the <code>u</code> flag.</p>" + "<p>For a list of values, see this <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Unicode_Property_Escapes'>MDN page</a>.</p>"
    } // notunicodecat, unicodescript, notunicodescript are copied from unicodecat below.

  }
};
javascript.docs.notunicodecat = javascript.docs.unicodescript = javascript.docs.notunicodescript = javascript.docs.unicodecat;

/*
RegExr: Learn, Build, & Test RegEx
Copyright (C) 2017  gskinner.com, inc.

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/
let profiles = {
  core
};
profiles.pcre = merge(core, pcre);
profiles.js = merge(core, javascript);

function merge(p1, p2) {
  // merges p1 into p2, essentially just a simple deep copy without array support.
  for (let n in p1) {
    if (p2[n] === false) {
      continue;
    } else if (typeof p1[n] === "object") {
      p2[n] = merge(p1[n], p2[n] || {});
    } else if (p2[n] === undefined) {
      p2[n] = p1[n];
    }
  }

  return p2;
}

module.exports = profiles;
//# sourceMappingURL=profiles.js.map


/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "ri/Y":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/utils.js");

/***/ }),

/***/ "rwUC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticPaths", function() { return getStaticPaths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unstable_getStaticParams", function() { return unstable_getStaticParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unstable_getStaticProps", function() { return unstable_getStaticProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unstable_getStaticPaths", function() { return unstable_getStaticPaths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unstable_getServerProps", function() { return unstable_getServerProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_app", function() { return _app; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderReqToHTML", function() { return renderReqToHTML; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var next_dist_next_server_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("mctB");
/* harmony import */ var next_dist_next_server_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_next_server_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Skye");
var private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t("Skye", 1);
/* harmony import */ var private_dot_next_build_manifest_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("LZ9C");
var private_dot_next_build_manifest_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t("LZ9C", 1);
/* harmony import */ var private_dot_next_react_loadable_manifest_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("67Bq");
var private_dot_next_react_loadable_manifest_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t("67Bq", 1);
/* harmony import */ var next_dist_build_webpack_loaders_next_serverless_loader_page_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("7ZOo");
/* harmony import */ var next_dist_build_webpack_loaders_next_serverless_loader_page_handler__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dist_build_webpack_loaders_next_serverless_loader_page_handler__WEBPACK_IMPORTED_MODULE_4__);

      
      
      
      

      
      const { processEnv } = __webpack_require__("3fKi")
      processEnv([])
    
      
      const runtimeConfig = {}
      

      const documentModule = __webpack_require__("5w0S")

      const appMod = __webpack_require__("1TCz")
      let App = appMod.default || appMod.then && appMod.then(mod => mod.default);

      const compMod = __webpack_require__("Zsrq")

      const Component = compMod.default || compMod.then && compMod.then(mod => mod.default)
      /* harmony default export */ __webpack_exports__["default"] = (Component);
      const getStaticProps = compMod['getStaticProp' + 's'] || compMod.then && compMod.then(mod => mod['getStaticProp' + 's'])
      const getStaticPaths = compMod['getStaticPath' + 's'] || compMod.then && compMod.then(mod => mod['getStaticPath' + 's'])
      const getServerSideProps = compMod['getServerSideProp' + 's'] || compMod.then && compMod.then(mod => mod['getServerSideProp' + 's'])

      // kept for detecting legacy exports
      const unstable_getStaticParams = compMod['unstable_getStaticParam' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticParam' + 's'])
      const unstable_getStaticProps = compMod['unstable_getStaticProp' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticProp' + 's'])
      const unstable_getStaticPaths = compMod['unstable_getStaticPath' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticPath' + 's'])
      const unstable_getServerProps = compMod['unstable_getServerProp' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getServerProp' + 's'])

      let config = compMod['confi' + 'g'] || (compMod.then && compMod.then(mod => mod['confi' + 'g'])) || {}
      const _app = App

      const combinedRewrites = Array.isArray(private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__.rewrites)
        ? private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__.rewrites
        : []

      if (!Array.isArray(private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__.rewrites)) {
        combinedRewrites.push(...private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__.rewrites.beforeFiles)
        combinedRewrites.push(...private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__.rewrites.afterFiles)
        combinedRewrites.push(...private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__.rewrites.fallback)
      }

      const { renderReqToHTML, render } = Object(next_dist_build_webpack_loaders_next_serverless_loader_page_handler__WEBPACK_IMPORTED_MODULE_4__["getPageHandler"])({
        pageModule: compMod,
        pageComponent: Component,
        pageConfig: config,
        appModule: App,
        documentModule: documentModule,
        errorModule: __webpack_require__("/a9y"),
        notFoundModule: undefined,
        pageGetStaticProps: getStaticProps,
        pageGetStaticPaths: getStaticPaths,
        pageGetServerSideProps: getServerSideProps,

        assetPrefix: "",
        canonicalBase: "",
        generateEtags: true,
        poweredByHeader: true,

        runtimeConfig,
        buildManifest: private_dot_next_build_manifest_json__WEBPACK_IMPORTED_MODULE_2__,
        reactLoadableManifest: private_dot_next_react_loadable_manifest_json__WEBPACK_IMPORTED_MODULE_3__,

        rewrites: combinedRewrites,
        i18n: undefined,
        page: "/dashboard/startup",
        buildId: "zul6rXmdyU8Cs8_aIYgcj",
        escapedBuildId: "zul6rXmdyU8Cs8_aIYgcj",
        basePath: "",
        pageIsDynamic: false,
        encodedPreviewProps: {previewModeId:"02f6a33272e79d1b2a1bd2a96a9dc2ea",previewModeSigningKey:"7db32c3052fdbdb59eed19d1ae6d4792cf09fd82f8ca25b4990146be9c267574",previewModeEncryptionKey:"e654ac1af670da7d81e0374de89171247144d35f9ea8939ab621ee0ffbe5abc5"}
      })
      
    

/***/ }),

/***/ "u1Fb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ deleteProject; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ createCheckoutSession; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ createCheckoutSession10; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* binding */ goToBillingPortal; });

// UNUSED EXPORTS: getAllProjects, createUser, getUser, createStartupData

// EXTERNAL MODULE: ./lib/firebase.js
var firebase = __webpack_require__("U6Mw");

// EXTERNAL MODULE: external "@stripe/stripe-js"
var stripe_js_ = __webpack_require__("RkzC");

// CONCATENATED MODULE: ./lib/stripe.js
// MOŻNA TEŻ WRZUCIĆ TO DO FOLDERU UTILS

/**
 * This is a singleton to ensure we only instantiate Stripe once.
 */

let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = Object(stripe_js_["loadStripe"])('pk_test_51IVIucBdXPtKajNHgoC6xC1s2WRUopkoxIkuxCtuvPrDmhRDEyl3BfsW6E2CgmerMXKSwpXojBhACW9yVxcmVLIQ00bPN1lfDO'); // w folderze .env.local (ten klucz jest na głównej stronie dashboard'u na stripe)
  }

  return stripePromise;
};

/* harmony default export */ var lib_stripe = (getStripe);
// CONCATENATED MODULE: ./lib/db.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const firestore = firebase["c" /* default */].firestore();
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
  const checkoutSessionRef = await firebase["b" /* db */].collection('users').doc(uid) // TO JEST DO ZMIANY Z PODSTAWOWEJ TEMPLATKI
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
      const stripe = await lib_stripe(); // TO JEST DO ZMIANY Z PODSTAWOWEJ TEMPLATKI (funkcja getStripe w pliku stripe.js)

      stripe.redirectToCheckout({
        sessionId
      });
    }
  });
}; // $29.99 for 10 units

const createCheckoutSession10 = async uid => {
  const checkoutSessionRef = await firebase["b" /* db */].collection('users').doc(uid) // TO JEST DO ZMIANY Z PODSTAWOWEJ TEMPLATKI
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
      const stripe = await lib_stripe(); // TO JEST DO ZMIANY Z PODSTAWOWEJ TEMPLATKI (funkcja getStripe w pliku stripe.js)

      stripe.redirectToCheckout({
        sessionId
      });
    }
  });
};
const goToBillingPortal = async () => {
  // Do tej funkcji musimy zaimportować firebase/functions w pliku firebase.js
  const functionRef = firebase["c" /* default */].app().functions('us-central1').httpsCallable('ext-firestore-stripe-subscriptions-createPortalLink');
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

/***/ "uXJ4":
/***/ (function(module, exports) {



/***/ }),

/***/ "vHio":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/get-page-files.js");

/***/ }),

/***/ "vNVm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__("cDcd");

var _requestIdleCallback = __webpack_require__("0G5g");

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

/***/ "vmXh":
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "wVQA":
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ }),

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "x6KH":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/route-matcher.js");

/***/ }),

/***/ "x6nH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("489e");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tippyjs_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("C9/L");
/* harmony import */ var _tippyjs_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tippyjs_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Aiso");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);








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
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_tippyjs_react__WEBPACK_IMPORTED_MODULE_3___default.a // trigger={tippyMonster}
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
    content: tippyMonster ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      ref: tippyRef,
      className: "h-12 w-96 shadow-lg rounded-2xl bg-red flex justify-center items-center focus:outline-none",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("p", {
        className: "text-primarydark py-4 px-2 text-sm text-center text-white flex justify-center items-center",
        children: ["Oops, you have to provide all the information", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
          src: "/emojis/crying.svg",
          height: 25,
          width: 25,
          className: "inline-block relative"
        }), "."]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        className: "flex items-center justify-center flex-wrap gap-2 mt-2"
      })]
    }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      ref: tippyRef,
      className: `focus:outline-none ${contentClass}`,
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
        className: "text-primarydark p-4 text-sm text-center text-white",
        children: [contentText, startups && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
            src: "/emojis/cocount.svg",
            height: 22,
            width: 22,
            className: "inline-block"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
            className: "inline-block",
            children: "."
          })]
        }), initialModal && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
            src: "/emojis/hammer.svg",
            height: 22,
            width: 22,
            className: "inline-block"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
            className: "inline-block",
            children: "."
          })]
        }), vision && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
            src: "/emojis/desert.svg",
            height: 22,
            width: 22,
            className: "inline-block relative bottom-0.5"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
            className: "inline-block",
            children: "."
          })]
        }), product && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
            src: "/emojis/ox.svg",
            height: 22,
            width: 22,
            className: "inline-block relative bottom-0.5"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
            className: "inline-block",
            children: "."
          })]
        }), market && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
            src: "/emojis/whale.svg",
            height: 22,
            width: 22,
            className: "inline-block"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
            className: "inline-block",
            children: "."
          })]
        }), finances && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
            src: "/emojis/unicorn.svg",
            height: 22,
            width: 22,
            className: "inline-block relative bottom-0.5"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
            className: "inline-block",
            children: "."
          })]
        }), model && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
            src: "/emojis/pirat.svg",
            height: 22,
            width: 22,
            className: "inline-block"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
            className: "inline-block",
            children: "."
          })]
        }), success && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
            src: "/emojis/star.svg",
            height: 22,
            width: 22,
            className: "inline-block"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
            className: "inline-block",
            children: "!"
          })]
        }), welcome && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
            src: "/gifs/hello-hand.gif",
            height: 22,
            width: 22,
            className: "inline-block"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
            className: "inline-block",
            children: "."
          })]
        }), contentText1 && contentText1, startups && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
            src: "/emojis/balloon.svg",
            height: 22,
            width: 22,
            className: "inline-block"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
            className: "inline-block",
            children: "."
          })]
        }), vision && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
            src: "/emojis/camel.svg",
            height: 22,
            width: 22,
            className: "inline-block"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
            className: "inline-block",
            children: "."
          })]
        }), product && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
            src: "/emojis/map.svg",
            height: 22,
            width: 22,
            className: "inline-block"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
            className: "inline-block",
            children: "."
          })]
        }), market && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
            src: "/emojis/island.svg",
            height: 22,
            width: 22,
            className: "inline-block"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
            className: "inline-block",
            children: "."
          })]
        }), finances && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
            src: "/emojis/construction.svg",
            height: 22,
            width: 22,
            className: "inline-block"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
            className: "inline-block",
            children: "."
          })]
        }), model && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
            src: "/emojis/popper.svg",
            height: 22,
            width: 22,
            className: "inline-block relative bottom-0.5"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
            className: "inline-block",
            children: "!"
          })]
        }), welcome && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
            src: "/gifs/rocket.gif",
            height: 22,
            width: 22,
            className: "inline-block"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
            className: "inline-block",
            children: "!"
          })]
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        className: "flex items-center justify-center flex-wrap gap-2 mt-2"
      })]
    }),
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      className: "fixed flex flex-wrap m-2 bottom-4 right-4 z-50",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_image__WEBPACK_IMPORTED_MODULE_4___default.a, {
        src: "/monsters/monster-two.svg",
        height: 66,
        width: 60,
        className: "cursor-pointer z-50",
        onClick: onImageClick
      })
    })
  });
};

/* harmony default export */ __webpack_exports__["a"] = (TippyMonster);

/***/ }),

/***/ "xBw7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_newAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cqNN");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _DesktopNavbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("4yjf");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("489e");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_useWindowSize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("QhkM");









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
  const size = Object(_utils_useWindowSize__WEBPACK_IMPORTED_MODULE_6__[/* useWindowSize */ "a"])();
  const activeHover = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_DesktopNavbar__WEBPACK_IMPORTED_MODULE_4__[/* IsActiveContext */ "a"]);
  const {
    currentUser
  } = Object(_lib_newAuth__WEBPACK_IMPORTED_MODULE_2__[/* useAuth */ "b"])();
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
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(Redirect, {
      to: "/"
    });
  }

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: size.width < 860 ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: children
    }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      ref: contentRef,
      className: `relative h-full ${activeClass} bg-background dark:bg-secondary`,
      style: {
        transitionTimingFunction: 'linear',
        transitionDuration: '200ms',
        transitionProperty: 'width, margin-left'
      },
      children: children
    })
  });
};

/* harmony default export */ __webpack_exports__["a"] = (NavbarTemplate);

/***/ }),

/***/ "xXj+":
/***/ (function(module, exports) {

module.exports = require("react-device-detect");

/***/ }),

/***/ "xlPk":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/constants.js");

/***/ }),

/***/ "zOyy":
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

/***/ })

/******/ });