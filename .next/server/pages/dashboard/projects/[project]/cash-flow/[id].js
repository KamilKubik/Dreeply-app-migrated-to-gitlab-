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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/dashboard/projects/[project]/cash-flow/[id].js");
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./components/dashboard/startup/project/business-app/competitors/UniqueElement.js":
/*!****************************************************************************************!*\
  !*** ./components/dashboard/startup/project/business-app/competitors/UniqueElement.js ***!
  \****************************************************************************************/
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

var _jsxFileName = "C:\\off-saas\\components\\dashboard\\startup\\project\\business-app\\competitors\\UniqueElement.js";




const UniqueCompetitorsPage = ({
  competitor
}) => {
  console.log('Competitor --> ', competitor); //   Dropdown

  const {
    0: dropdownHelper,
    1: setDropdownHelper
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const initialContainer = document.getElementById(competitor.index); // Elements

  const {
    0: descriptionTitle,
    1: setDescriptionTitle
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const {
    0: placeholderTitle,
    1: setPlaceholderTitle
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const {
    0: descriptionModel,
    1: setDescriptionModel
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const {
    0: placeholderModel,
    1: setPlaceholderModel
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const {
    0: descriptionProduct,
    1: setDescriptionProduct
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const {
    0: placeholderProduct,
    1: setPlaceholderProduct
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const {
    0: descriptionPromotion,
    1: setDescriptionPromotion
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const {
    0: placeholderPromotion,
    1: setPlaceholderPromotion
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const {
    0: descriptionStrengths,
    1: setDescriptionStrengths
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const {
    0: placeholderStrengths,
    1: setPlaceholderStrengths
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const {
    0: descriptionWeaknesses,
    1: setDescriptionWeaknesses
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const {
    0: placeholderWeaknesses,
    1: setPlaceholderWeaknesses
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const {
    0: descriptionOpportunities,
    1: setDescriptionOpportunities
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const {
    0: placeholderOpportunities,
    1: setPlaceholderOpportunities
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const descriptionTitle = document.getElementById(`descriptionTitle${competitor.index}`);
    setDescriptionTitle(descriptionTitle);
    const placeholderTitle = document.getElementById(`placeholderTitle${competitor.index}`);
    setPlaceholderTitle(placeholderTitle);
    const descriptionModel = document.getElementById(`descriptionModel${competitor.index}`);
    setDescriptionModel(descriptionModel);
    const placeholderModel = document.getElementById(`placeholderModel${competitor.index}`);
    setPlaceholderModel(placeholderModel);
    const descriptionProduct = document.getElementById(`descriptionProduct${competitor.index}`);
    setDescriptionProduct(descriptionProduct);
    const placeholderProduct = document.getElementById(`placeholderProduct${competitor.index}`);
    setPlaceholderProduct(placeholderProduct);
    const descriptionPromotion = document.getElementById(`descriptionPromotion${competitor.index}`);
    setDescriptionPromotion(descriptionPromotion);
    const placeholderPromotion = document.getElementById(`placeholderPromotion${competitor.index}`);
    setPlaceholderPromotion(placeholderPromotion);
    const descriptionStrengths = document.getElementById(`descriptionStrengths${competitor.index}`);
    setDescriptionStrengths(descriptionStrengths);
    const placeholderStrengths = document.getElementById(`placeholderStrengths${competitor.index}`);
    setPlaceholderStrengths(placeholderStrengths);
    const descriptionWeaknesses = document.getElementById(`descriptionWeaknesses${competitor.index}`);
    setDescriptionWeaknesses(descriptionWeaknesses);
    const placeholderWeaknesses = document.getElementById(`placeholderWeaknesses${competitor.index}`);
    setPlaceholderWeaknesses(placeholderWeaknesses);
    const descriptionOpportunities = document.getElementById(`descriptionOpportunities${competitor.index}`);
    setDescriptionOpportunities(descriptionOpportunities);
    const placeholderOpportunities = document.getElementById(`placeholderOpportunities${competitor.index}`);
    setPlaceholderOpportunities(placeholderOpportunities);
  });
  const dropDownElement = document.getElementById(`dropdown${competitor.index}`);
  const dataElement = document.getElementById(`data${competitor.index}`);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    gsap__WEBPACK_IMPORTED_MODULE_3___default.a.set(dropDownElement, {
      rotation: '-90_cw'
    });

    if (!react_device_detect__WEBPACK_IMPORTED_MODULE_2__["isMobile"]) {
      const containerElement = document.getElementById(`container${competitor.index}`);
      const competitorManager = document.getElementById(`manager${competitor.index}`);
      containerElement.addEventListener('mouseenter', () => {
        gsap__WEBPACK_IMPORTED_MODULE_3___default.a.to(competitorManager, {
          height: 18,
          marignBottom: 16,
          duration: 0.5,
          ease: gsap__WEBPACK_IMPORTED_MODULE_3__["Linear"].easeIn
        });
        gsap__WEBPACK_IMPORTED_MODULE_3___default.a.to(initialContainer, {
          marginTop: 16,
          duration: 0.5,
          ease: gsap__WEBPACK_IMPORTED_MODULE_3__["Linear"].easeIn
        });
      });
      containerElement.addEventListener('mouseleave', () => {
        gsap__WEBPACK_IMPORTED_MODULE_3___default.a.to(competitorManager, {
          height: 0,
          marginBottom: 0,
          duration: 0.5,
          ease: gsap__WEBPACK_IMPORTED_MODULE_3__["Linear"].easeOut
        });
        gsap__WEBPACK_IMPORTED_MODULE_3___default.a.to(initialContainer, {
          marginTop: 0,
          duration: 0.5,
          ease: gsap__WEBPACK_IMPORTED_MODULE_3__["Linear"].easeIn
        });
      });
    }
  }, [dropDownElement]);

  const onSectionDropdown = () => {
    const sectionHeight = descriptionTitle.offsetHeight + placeholderTitle.offsetHeight + descriptionModel.offsetHeight + placeholderModel.offsetHeight + 24 + descriptionProduct.offsetHeight + placeholderProduct.offsetHeight + 24 + descriptionPromotion.offsetHeight + placeholderPromotion.offsetHeight + 24 + descriptionStrengths.offsetHeight + placeholderStrengths.offsetHeight + 24 + descriptionWeaknesses.offsetHeight + placeholderWeaknesses.offsetHeight + 24 + descriptionOpportunities.offsetHeight + placeholderOpportunities.offsetHeight + 24;

    if (!dropdownHelper) {
      gsap__WEBPACK_IMPORTED_MODULE_3___default.a.to(dataElement, {
        height: sectionHeight,
        marginTop: 32,
        marginBottom: 112,
        autoAlpha: 1,
        duration: 1,
        ease: gsap__WEBPACK_IMPORTED_MODULE_3__["Linear"]
      });
      gsap__WEBPACK_IMPORTED_MODULE_3___default.a.to(dropDownElement, {
        rotation: '0_cw',
        duration: 1,
        ease: gsap__WEBPACK_IMPORTED_MODULE_3__["Linear"]
      });
      setDropdownHelper(true);
    } else if (dropdownHelper) {
      gsap__WEBPACK_IMPORTED_MODULE_3___default.a.to(dataElement, {
        height: 0,
        marginTop: 0,
        marginBottom: 0,
        autoAlpha: 0,
        duration: 1,
        ease: gsap__WEBPACK_IMPORTED_MODULE_3__["Linear"]
      });
      gsap__WEBPACK_IMPORTED_MODULE_3___default.a.to(dropDownElement, {
        rotation: '-90_ccw',
        duration: 1,
        ease: gsap__WEBPACK_IMPORTED_MODULE_3__["Linear"]
      });
      setDropdownHelper(false);
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    style: {
      height: 'fit-content'
    },
    id: `container${competitor.index}`,
    className: "w-full bg-background rounded-2xl p-4 ssmContainer:p-6 shadow-md overflow-hidden mt-8 smContainer:mt-8",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        height: `${react_device_detect__WEBPACK_IMPORTED_MODULE_2__["isMobile"] ? 40 : 0}`,
        top: `${react_device_detect__WEBPACK_IMPORTED_MODULE_2__["isMobile"] ? '-6px' : '-6px'}`
      },
      id: `manager${competitor.index}`,
      className: "flex justify-between relative",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        className: "cursor-pointer" //   style={{ transform: 'rotate(-90deg)' }}
        ,
        onClick: onSectionDropdown,
        id: `dropdown${competitor.index}`,
        src: "/competitors/dropdown.svg",
        height: 18,
        width: 18
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      id: competitor.index,
      className: "flex gap-6 flex-col justify-center items-center smContainer:gap-0 smContainer:grid smContainer:grid-cols-12fr",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "smContainer:col-start-1 smContainer:col-end-4 justify-self-center flex justify-start items-center",
        children: [competitor.image !== '' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: `upload-image${competitor.index}`,
          className: "relative w-20 h-20 cursor-pointer rounded-full bg-white flex justify-center items-center",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: competitor.image,
            height: 55,
            width: 55
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 13
        }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: `upload-image${competitor.index}`,
            className: "w-20 h-20 cursor-pointer rounded-full bg-primary flex justify-center items-center",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "/competitors/empty-image.svg",
              height: 65,
              width: 65
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 159,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 155,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "file",
          id: `upload-image${competitor.index}`,
          style: {
            display: 'none',
            zIndex: 10
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "smContainer:col-start-5 smContainer:col-end-13 grid grid-cols-2fr grid-rows-2fr justify-items-center items-center gap-x-4 ssmContainer:gap-x-8 gap-y-2 ssmContainer:gap-y-4",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            value: competitor.title,
            className: "bg-white rounded-2xl w-full px-3 py-2 text-sm text-primarydark focus:outline-none",
            placeholder: "name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 167,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            value: competitor.location,
            className: "bg-white rounded-2xl w-full px-3 py-2 text-sm text-primarydark focus:outline-none",
            placeholder: "location"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 174,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            value: competitor.employees,
            className: "bg-white rounded-2xl w-full px-3 py-2 text-sm text-primarydark focus:outline-none",
            placeholder: "employees"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 181,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            value: competitor.revenue,
            className: "bg-white rounded-2xl w-full px-3 py-2 text-sm text-primarydark focus:outline-none",
            placeholder: "revenue"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 188,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      id: `data${competitor.index}`,
      className: "w-full h-0 invisible",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        id: `descriptionTitle${competitor.index}`,
        className: "flex justify-start items-center",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "/competitors/description.svg",
          height: 22,
          width: 22
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 199,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "text-primarydark ml-2",
          children: "Company description"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 200,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
        value: competitor.companyDescription,
        id: `placeholderTitle${competitor.index}`,
        className: "w-full bg-white rounded-2xl mt-2 p-2 text-primarydark text-sm px-4 py-3 h-28 max-h-28 focus:outline-none",
        placeholder: "Describe the main assumption of analyzed company."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        id: `descriptionModel${competitor.index}`,
        className: "flex justify-start items-center mt-6",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "/competitors/model.svg",
          height: 22,
          width: 22
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 210,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "text-primarydark ml-2",
          children: "Business model"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 211,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 209,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
        value: competitor.businessModel,
        id: `placeholderModel${competitor.index}`,
        className: "w-full bg-white rounded-2xl mt-2 p-2 text-primarydark text-sm px-4 py-3 h-28 max-h-28 focus:outline-none",
        placeholder: "How does the company business model look like?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 213,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        id: `descriptionProduct${competitor.index}`,
        className: "flex justify-start items-center mt-6",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "/competitors/product1.svg",
          height: 22,
          width: 22
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 221,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "text-primarydark ml-2",
          children: "Product overview"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 222,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 220,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
        value: competitor.productOverview,
        id: `placeholderProduct${competitor.index}`,
        className: "w-full bg-white rounded-2xl mt-2 p-2 text-primarydark text-sm px-4 py-3 h-28 max-h-28 focus:outline-none",
        placeholder: "What is the full range of products and services the company offers?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 224,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        id: `descriptionPromotion${competitor.index}`,
        className: "flex justify-start items-center mt-6",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "/competitors/promotion.svg",
          height: 22,
          width: 22
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 232,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "text-primarydark ml-2",
          children: "Promotion strategy"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 233,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 231,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
        value: competitor.promotionStrategy,
        id: `placeholderPromotion${competitor.index}`,
        className: "w-full bg-white rounded-2xl mt-2 p-2 text-primarydark text-sm px-4 py-3 h-28 max-h-28 focus:outline-none",
        placeholder: "What are the company marketing and promotional strategies?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 235,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        id: `descriptionStrengths${competitor.index}`,
        className: "flex justify-start items-center mt-6",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "/competitors/strengths.svg",
          height: 22,
          width: 22
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 243,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "text-primarydark ml-2",
          children: "Company strengths"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 244,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 242,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
        value: competitor.companyStrengths,
        id: `placeholderStrengths${competitor.index}`,
        className: "w-full bg-white rounded-2xl mt-2 p-2 text-primarydark text-sm px-4 py-3 h-28 max-h-28 focus:outline-none",
        placeholder: "What do your competitors do really well that differentiates them?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 246,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        id: `descriptionWeaknesses${competitor.index}`,
        className: "flex justify-start items-center mt-6",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "/competitors/weaknesses.svg",
          height: 22,
          width: 22
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 254,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "text-primarydark ml-2",
          children: "Company Weaknesses"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 255,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 253,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
        value: competitor.companyWeaknesses,
        id: `placeholderWeaknesses${competitor.index}`,
        className: "w-full bg-white rounded-2xl mt-2 p-2 text-primarydark text-sm px-4 py-3 h-28 max-h-28 focus:outline-none",
        placeholder: "What do the company customers complain about the most, and what products do they lack?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 257,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        id: `descriptionOpportunities${competitor.index}`,
        className: "flex justify-start items-center mt-6",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "/competitors/opportunities2.svg",
          height: 22,
          width: 22
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 265,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "text-primarydark ml-2",
          children: "Opportunities"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 266,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 264,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
        value: competitor.opportunities,
        id: `placeholderOpportunities${competitor.index}`,
        className: "w-full bg-white rounded-2xl mt-2 p-2 text-primarydark text-sm px-4 py-3 h-28 max-h-28 focus:outline-none",
        placeholder: "What distinguish your startup from this particular competitive company?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 268,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 111,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (UniqueCompetitorsPage);

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

/***/ "./pages/dashboard/projects/[project]/cash-flow/[id].js":
/*!**************************************************************!*\
  !*** ./pages/dashboard/projects/[project]/cash-flow/[id].js ***!
  \**************************************************************/
/*! exports provided: getStaticPaths, getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticPaths", function() { return getStaticPaths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-plugin-superjson-next/tools */ "babel-plugin-superjson-next/tools");
/* harmony import */ var babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_firebase_admin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../lib/firebase-admin */ "./lib/firebase-admin.js");
/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../lib/firebase */ "./lib/firebase.js");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-device-detect */ "react-device-detect");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_device_detect__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_dashboard_startup_project_business_app_competitors_UniqueElement__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../components/dashboard/startup/project/business-app/competitors/UniqueElement */ "./components/dashboard/startup/project/business-app/competitors/UniqueElement.js");
/* harmony import */ var _components_BounceLoader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../components/BounceLoader */ "./components/BounceLoader.js");
/* harmony import */ var _utils_useWindowSize__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../utils/useWindowSize */ "./utils/useWindowSize.js");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-datepicker */ "react-datepicker");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! date-fns */ "date-fns");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_13__);



var _jsxFileName = "C:\\off-saas\\pages\\dashboard\\projects\\[project]\\cash-flow\\[id].js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const safeJsonStringify = __webpack_require__(/*! safe-json-stringify */ "safe-json-stringify");






const UniqueCashflowPage = ({
  project
}) => {
  console.log('Particular project --> ', project);
  const {
    0: startDate,
    1: setStartDate
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(new Date());
  const {
    0: endDate,
    1: setEndDate
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(new Date());
  const {
    0: selectedProject,
    1: setSelectedProject
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null);
  const {
    0: revenueElements,
    1: setRevenueElements
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])();
  const {
    0: costsElements,
    1: setCostsElements
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])();
  const {
    0: periods,
    1: setPeriods
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])();
  const {
    0: tax,
    1: setTax
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])();
  const size = Object(_utils_useWindowSize__WEBPACK_IMPORTED_MODULE_10__["useWindowSize"])(); // Sum data

  const {
    0: totalRevenue,
    1: setTotalRevenue
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])();
  const {
    0: monthlyRevenue,
    1: setMonthlyRevenue
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])();
  const {
    0: totalCosts,
    1: setTotalCosts
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])();
  const {
    0: monthlyCosts,
    1: setMonthlyCosts
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])();
  const {
    0: grossProfit,
    1: setGrossProfit
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])();
  const {
    0: netProfit,
    1: setNetProfit
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    project && setSelectedProject(project[0]);
    project && setRevenueElements(project[0].revenueElements);
    project && setCostsElements(project[0].costsElements);
    project && setPeriods(project[0].periods);
    project && setTax(project[0].tax); // Sum data
    // Global start date

    const changedStartDate = project[0].globalStartDate._seconds * 1000;
    console.log(changedStartDate);
    project[0].globalStartDate !== '' && setStartDate(new Date(changedStartDate));
    const changedEndDate = project[0].globalEndDate._seconds * 1000; // Global end date

    project[0].globalEndDate !== '' && setEndDate(new Date(changedEndDate)); // Periods

    setPeriods(project[0].periods); // Total revenue

    const totalRevenueArray = project[0].revenueElements.map(element => parseInt(element.value * element.periods.length));
    const totalRevenue = totalRevenueArray.reduce((a, b) => {
      return a + b;
    }, 0);
    setTotalRevenue(Number.isNaN(totalRevenue) ? 0 : Math.round(totalRevenue)); // Monthly revenue

    const periodLength = project[0].periods.length;
    const monthlyRevenue = totalRevenue / periodLength;
    setMonthlyRevenue(Number.isNaN(monthlyRevenue) ? 0 : Math.round(monthlyRevenue)); // Total costs

    const totalCostsArray = project[0].costsElements.map(element => parseInt(element.value * element.periods.length));
    const totalCosts = totalCostsArray.reduce((a, b) => {
      return a + b;
    }, 0);
    setTotalCosts(Number.isFinite(totalCosts) ? Math.round(totalCosts) : 0); // Monthly costs

    const monthlyCosts = totalCosts / periodLength;
    setMonthlyCosts(Number.isFinite(monthlyCosts) ? Math.round(monthlyCosts) : 0); // Gross profit

    const grossProfit = totalRevenue - totalCosts;
    setGrossProfit(Number.isFinite(grossProfit) ? Math.round(grossProfit) : 0); // Net profit

    const tax = parseInt(project[0].tax);
    const netProfit = grossProfit - tax / 100 * grossProfit;
    setNetProfit(Number.isFinite(netProfit) ? Math.round(netProfit) : 0);
  }, [project]); //   const [competitors, setCompetitors] = useState([]);
  // Chart

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    // const myChartRef = chartRef.current.getContext('2d');
    document.getElementById(`chartContainer`).innerHTML = '&nbsp;';
    document.getElementById(`chartContainer`).innerHTML = `<canvas height='${size.width > 680 ? 75 : 'unset'}' id='chart'></canvas>`;
    const myChartRef = document.getElementById('chart').getContext('2d'); // Revenue datasets

    const revenueDataset = [];
    const testArray = []; // const monthData = periods && periods.map(() => null);

    revenueElements && revenueElements.map((revenueElement, index) => {
      const monthData = periods && periods.map(() => null);
      console.log(revenueElement);
      periods && periods.map((period, periodIndex) => {
        revenueElement.periods.map(revenuePeriod => {
          if (period == revenuePeriod) {
            if (monthData[periodIndex] == null) {
              monthData[periodIndex] = revenueElement.value;
            }
          }
        });
      });
      console.log(monthData);
      testArray.push(monthData);
      revenueDataset.push({
        label: `revenue / ${revenueElement.title}`,
        data: monthData,
        backgroundColor: revenueElement.color,
        borderColor: revenueElement.color
      });
    }); // Costs datasets

    const costsDataset = [];
    costsElements && costsElements.map((costsElement, index) => {
      const monthData = periods && periods.map(() => null);
      console.log(costsElement);
      periods && periods.map((period, periodIndex) => {
        costsElement.periods.map(costsPeriod => {
          if (period == costsPeriod) {
            if (monthData[periodIndex] == null) {
              monthData[periodIndex] = -costsElement.value;
            }
          }
        });
      });
      console.log(monthData);
      testArray.push(monthData);
      costsDataset.push({
        label: `costs / ${costsElement.title}`,
        data: monthData,
        backgroundColor: costsElement.color,
        borderColor: costsElement.color
      });
    }); // ----------------------
    // Revenue

    const revenueArray = [];
    revenueDataset.length !== 0 && revenueDataset.length !== 0 && revenueDataset.map(element => revenueArray.push(element.data && element.data.map(data => {
      if (data !== null) {
        return parseInt(data);
      } else {
        return 0;
      }
    })));
    console.log(revenueArray);
    const calculatedRevenueArray = revenueArray.length !== 0 && revenueArray[0] !== undefined && revenueArray.reduce((a, b) => a.map((c, i) => c + b[i]));
    console.log(calculatedRevenueArray); // Costs

    const costsArray = [];
    console.log(costsDataset);
    costsDataset.length !== 0 && costsDataset.length !== 0 && costsDataset.map(element => costsArray.push(element.data && element.data.map(data => {
      if (data !== null) {
        return parseInt(data);
      } else {
        return 0;
      }
    })));
    console.log(costsArray);
    const calculatedCostsArray = costsArray.length !== 0 && costsArray[0] !== undefined && costsArray.reduce((a, b) => a.map((c, i) => c + b[i]));
    console.log(calculatedCostsArray); // Final value

    const finalArray = [calculatedRevenueArray, calculatedCostsArray];
    console.log(finalArray); // Check if any array is falsy

    const calculatedFinalArray = finalArray && finalArray.map(array => {
      if (!array) {
        const zeroArray = [];
        periods && periods.map(period => zeroArray.push(0));
        return zeroArray;
      } else {
        return array;
      }
    });
    console.log(calculatedFinalArray);
    const finalDataBeforeTax = calculatedFinalArray.length !== 0 && calculatedFinalArray.reduce((a, b) => a && b && a.map((c, i) => c + b[i]));
    const finalDataAfterTax = finalDataBeforeTax && finalDataBeforeTax.map(data => data - tax / 100 * data);
    console.log(finalDataAfterTax);
    const netWorthArray = [];
    const netWorth = revenueDataset.length !== 0 && costsDataset.length !== 0 && revenueDataset && revenueDataset.map((revenueElement, index) => {
      const value = revenueElement.data && revenueElement.data.map((dataElement, revenueElementIndex) => {
        console.log(dataElement);

        if (dataElement !== null && costsDataset[index]) {
          if (costsDataset[index].data[revenueElementIndex]) {
            const grossProfit = dataElement - -costsDataset[0].data[revenueElementIndex];
            netWorthArray.push(grossProfit - tax / 100 * grossProfit); // return grossProfit - (tax / 100) * grossProfit;
          }
        }
      });
      return value;
    });
    new Chart(myChartRef, {
      type: 'bar',
      data: {
        labels: periods && periods,
        datasets: [{
          type: 'line',
          label: 'Net profit',
          data: finalDataAfterTax,
          backgroundColor: 'rgba(10, 18, 48, 1)',
          borderColor: 'rgba(10, 18, 48, 1)',
          fill: 0,
          lineTension: 0,
          borderWidth: size.width < 680 ? 1 : 3,
          pointRadius: size.width < 680 ? 2 : 3
        }, ...revenueDataset, ...costsDataset]
      },
      options: {
        skipNull: true,
        responsive: true,
        plugins: {
          legend: {
            position: 'right',
            labels: {
              fontFamily: 'Comfortaa',
              font: {
                size: size.width < 680 ? 8 : 12
              },
              boxWidth: size.width < 680 ? 10 : 40
            }
          }
        },
        scales: {
          x: {
            stacked: true,
            ticks: {
              fontFamily: 'Comfortaa',
              beginAtZero: true,
              font: {
                size: size.width < 680 ? 8 : 12
              }
            } // beginAtZero: true,

          },
          y: {
            stacked: true,
            ticks: {
              fontFamily: 'Comfortaa',
              beginAtZero: true,
              font: {
                size: size.width < 680 ? 8 : 12
              }
            } // beginAtZero: true,

          }
        }
      }
    });
  }, [periods, revenueElements, costsElements, tax]);

  if (router.isFallback) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_BounceLoader__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 12
    }, undefined);
  }

  console.log(startDate);
  console.log(endDate);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "min-h-screen w-full relative flex flex-col items-center",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "w-full max-w-full relative mt-8 lg1Container:mt-8 mb-16 px-32",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "relative grid grid-cols-2 grid-rows-1 grid-flow-col",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "flex items-center",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
            height: size.width > 860 && 30 || size.width < 860 && size.width > 680 && 26 || size.width < 680 && 22,
            width: size.width > 860 && 30 || size.width < 860 && size.width > 680 && 26 || size.width < 680 && 22,
            className: "fill-current text-primary dark:text-primarydark",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 128 128",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
              children: "Landing Success"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 306,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
              id: "Landing_Success",
              "data-name": "Landing Success",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                className: "cls-1",
                d: "M109.3,90.1A46,46,0,0,0,65,36V20.08c1.78-.62,7.21-2.14,12.57.23a19.33,19.33,0,0,0,14.82,0c.87-.38.61.31.61-17.93a1,1,0,0,0-1.43-.93c-.07,0-6.69,2.87-13.18,0A19.41,19.41,0,0,0,65,.93,1,1,0,0,0,63,1V36a45.86,45.86,0,0,0-28.66,10.8C16.18,40.48,4,40,.79,45.51-2.29,50.86,3.94,59.3,10,65.68A11,11,0,0,0,18,83c.81,38.41,46.08,59.2,75.66,34.21,8.53,3,29,9.15,33.55,1.31C130.39,113,123.86,102.65,109.3,90.1ZM77.59,3.31A19.39,19.39,0,0,0,91,3.83V18.68c-1.79.62-7.22,2.13-12.57-.23A19.19,19.19,0,0,0,65,17.93V3.08C66.81,2.46,72.24,1,77.59,3.31ZM65,45v-7c39.69.91,58,50.27,28.21,76.81C71.32,107,46,92.66,27.77,78.64a11,11,0,0,0-3.2-16.13A43.88,43.88,0,0,1,63,38.06V45A1,1,0,0,0,65,45ZM32.55,48.36a46.21,46.21,0,0,0-9.83,13.28,10.93,10.93,0,0,0-11.4,2.47C-8.39,43.23,5.23,39.08,32.55,48.36ZM10,72a9,9,0,1,1,9,9A9,9,0,0,1,10,72Zm10,11a11,11,0,0,0,6.34-2.82c18.45,14.21,43.45,28.35,65.05,36.22C63,139.16,20.83,119.1,20.05,83Zm105.4,34.5c-2.51,4.35-14,3.62-30-1.85a45.61,45.61,0,0,0,13.42-23.21C121.59,103.58,128,113.12,125.45,117.47Z"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 308,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 307,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 299,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "text-primarydark text-lg mdContainer:text-xl lgContainer:text-2xl mt-2 pl-2 dark:text-background",
            children: "Cash flow analysis"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 314,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 298,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 297,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          className: "text-secondary text-xs mdContainer:text-sm lgContainer:text-base text-gray relative -top-1 lgContainer:top-0",
          children: "Manage your startup cash flow"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 320,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 319,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "w-full grid grid-cols-2fr grid-rows-1fr lgContainer:grid-cols-3fr lgContainer:grid-rows-1fr gap-y-8 gap-x-6 smContainer:gap-x-32 mdContainer:gap-x-12 mt-12",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          id: "main-datepicker",
          className: "w-full bg-white rounded-2xl py-3 px-3 mdContainer:py-3 mdContainer:px-4 lgContainer:px-6 lgContainer:py-4 shadow-md grid grid-cols-2fr items-center text-xs mdContainer:text-sm lgContainer:text-base",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex items-center",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "/cash-flow/calendar.svg",
              height: size.width > 860 && 25 || size.width < 860 && size.width > 680 && 22 || size.width < 680 && 18,
              width: size.width > 860 && 25 || size.width < 860 && size.width > 680 && 22 || size.width < 680 && 18
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 330,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "ml-2 text-primarydark",
              children: "Start:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 335,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 329,
            columnNumber: 13
          }, undefined), startDate && !react_device_detect__WEBPACK_IMPORTED_MODULE_5__["isMobile"] ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_datepicker__WEBPACK_IMPORTED_MODULE_11___default.a, {
            selected: startDate // onChange={(date) => onStartDateUpdate(date)}
            ,
            dateFormat: "MMMM yyyy",
            showMonthYearPicker: true,
            maxDate: Object(date_fns__WEBPACK_IMPORTED_MODULE_12__["addYears"])(new Date(), 3),
            minDate: new Date(),
            readOnly: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 338,
            columnNumber: 15
          }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_datepicker__WEBPACK_IMPORTED_MODULE_11___default.a, {
            selected: startDate // onChange={(date) => onStartDateUpdate(date)}
            ,
            dateFormat: "MMMM yyyy",
            showMonthYearPicker: true,
            maxDate: Object(date_fns__WEBPACK_IMPORTED_MODULE_12__["addYears"])(new Date(), 3),
            minDate: new Date(),
            withPortal: true,
            readOnly: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 348,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 325,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          id: "main-datepicker",
          className: "w-full bg-white rounded-2xl py-3 px-3 mdContainer:py-3 mdContainer:px-4 lgContainer:px-6 lgContainer:py-4 shadow-md grid grid-cols-2fr items-center text-xs mdContainer:text-sm lgContainer:text-base",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex items-center",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "/cash-flow/hourglass1.svg",
              height: size.width > 860 && 25 || size.width < 860 && size.width > 680 && 22 || size.width < 680 && 18,
              width: size.width > 860 && 25 || size.width < 860 && size.width > 680 && 22 || size.width < 680 && 18
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 365,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "ml-2 text-primarydark",
              children: "End:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 370,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 364,
            columnNumber: 13
          }, undefined), endDate && !react_device_detect__WEBPACK_IMPORTED_MODULE_5__["isMobile"] ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_datepicker__WEBPACK_IMPORTED_MODULE_11___default.a, {
            selected: endDate // onChange={(date) => onEndDateUpdate(date)}
            ,
            dateFormat: "MMMM yyyy",
            showMonthYearPicker: true,
            maxDate: Object(date_fns__WEBPACK_IMPORTED_MODULE_12__["addYears"])(new Date(), 3),
            minDate: new Date(),
            readOnly: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 373,
            columnNumber: 15
          }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_datepicker__WEBPACK_IMPORTED_MODULE_11___default.a, {
            selected: endDate // onChange={(date) => onEndDateUpdate(date)}
            ,
            dateFormat: "MMMM yyyy",
            showMonthYearPicker: true,
            maxDate: Object(date_fns__WEBPACK_IMPORTED_MODULE_12__["addYears"])(new Date(), 3),
            minDate: new Date(),
            withPortal: true,
            readOnly: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 383,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 360,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            width: size.width > 860 && '100%' || size.width < 860 && size.width > 680 && '47%' || size.width < 680 && size.width > 520 && '40%' || size.width < 520 && '47%',
            gridColumnStart: size.width < 860 ? '1' : 'unset',
            gridColumnEnd: size.width < 860 ? '3' : 'unset'
          },
          className: "place-self-center bg-white rounded-2xl py-3 px-3 mdContainer:py-3 mdContainer:px-4 lgContainer:px-6 lgContainer:py-4 shadow-md grid grid-cols-2fr items-center text-xs mdContainer:text-sm lgContainer:text-base",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex items-center",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "/cash-flow/tax.svg",
              height: size.width > 860 && 25 || size.width < 860 && size.width > 680 && 22 || size.width < 680 && 18,
              width: size.width > 860 && 25 || size.width < 860 && size.width > 680 && 22 || size.width < 680 && 18
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 408,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "ml-2",
              children: "Tax:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 413,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 407,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex",
            style: {
              textAlignLast: 'right'
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              id: "tax-input",
              value: tax,
              className: "w-full bg-white focus:outline-none"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 416,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "%"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 417,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 415,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 395,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 324,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        id: "chartContainer",
        className: "w-full h-1/2 p-4 mdContainer:p-8 bg-white rounded-2xl mt-12 shadow-md"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 421,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "w-full grid grid-cols-2fr grid-rows-3fr lg1Container:grid-cols-3fr lg1Container:grid-rows-2fr gap-x-6 smContainer:gap-x-12 gap-y-8 mt-12",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "w-full bg-white rounded-2xl py-3 px-3 mdContainer:py-3 mdContainer:px-4 lgContainer:px-6 lgContainer:py-4 shadow-md flex justify-between items-center text-xs mdContainer:text-sm lgContainer:text-base",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex items-center",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "/cash-flow/revenue.svg",
              height: size.width > 860 && 25 || size.width < 860 && size.width > 680 && 22 || size.width < 680 && 18,
              width: size.width > 860 && 25 || size.width < 860 && size.width > 680 && 22 || size.width < 680 && 18
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 427,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "ml-2",
              children: "Total revenue:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 432,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 426,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: ["$", totalRevenue]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 434,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 425,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "w-full bg-white rounded-2xl py-3 px-3 mdContainer:py-3 mdContainer:px-4 lgContainer:px-6 lgContainer:py-4 shadow-md flex justify-between items-center text-xs mdContainer:text-sm lgContainer:text-base",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex items-center",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "/cash-flow/monthly.svg",
              height: size.width > 860 && 25 || size.width < 860 && size.width > 680 && 22 || size.width < 680 && 18,
              width: size.width > 860 && 25 || size.width < 860 && size.width > 680 && 22 || size.width < 680 && 18
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 438,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "ml-2",
              children: "Monthly revenue:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 443,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 437,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: ["$", monthlyRevenue]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 445,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 436,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "w-full bg-white rounded-2xl py-3 px-3 mdContainer:py-3 mdContainer:px-4 lgContainer:px-6 lgContainer:py-4 shadow-md flex justify-between items-center text-xs mdContainer:text-sm lgContainer:text-base",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex items-center",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "/cash-flow/costs.svg",
              height: size.width > 860 && 25 || size.width < 860 && size.width > 680 && 22 || size.width < 680 && 18,
              width: size.width > 860 && 25 || size.width < 860 && size.width > 680 && 22 || size.width < 680 && 18
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 449,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "ml-2",
              children: "Total costs:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 454,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 448,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: ["$", totalCosts]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 456,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 447,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "w-full bg-white rounded-2xl py-3 px-3 mdContainer:py-3 mdContainer:px-4 lgContainer:px-6 lgContainer:py-4 shadow-md flex justify-between items-center text-xs mdContainer:text-sm lgContainer:text-base",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex items-center",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "/cash-flow/monthly-costs.svg",
              height: size.width > 860 && 25 || size.width < 860 && size.width > 680 && 22 || size.width < 680 && 18,
              width: size.width > 860 && 25 || size.width < 860 && size.width > 680 && 22 || size.width < 680 && 18
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 460,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "ml-2",
              children: "Monthly costs:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 465,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 459,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: ["$", monthlyCosts]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 467,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 458,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "w-full bg-white rounded-2xl py-3 px-3 mdContainer:py-3 mdContainer:px-4 lgContainer:px-6 lgContainer:py-4 shadow-md flex justify-between items-center text-xs mdContainer:text-sm lgContainer:text-base",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex items-center",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "/cash-flow/megaphone.svg",
              height: size.width > 860 && 25 || size.width < 860 && size.width > 680 && 22 || size.width < 680 && 18,
              width: size.width > 860 && 25 || size.width < 860 && size.width > 680 && 22 || size.width < 680 && 18
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 471,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "ml-2",
              children: "Gross profit:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 476,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 470,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: ["$", grossProfit]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 478,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 469,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "w-full bg-white rounded-2xl py-3 px-3 mdContainer:py-3 mdContainer:px-4 lgContainer:px-6 lgContainer:py-4 shadow-md flex justify-between items-center text-xs mdContainer:text-sm lgContainer:text-base",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex items-center",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "/cash-flow/net-worth.svg",
              height: size.width > 860 && 25 || size.width < 860 && size.width > 680 && 22 || size.width < 680 && 18,
              width: size.width > 860 && 25 || size.width < 860 && size.width > 680 && 22 || size.width < 680 && 18
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 482,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "ml-2",
              children: "Net profit:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 487,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 481,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: ["$", netProfit]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 489,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 480,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 424,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        // style={{ height: 55 }}
        className: "overflow-hidden relative w-full rounded-2xl bg-white dark:bg-background px-4 py-4 flex justify-center items-center mt-12 flex flex-wrap shadow-md",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "w-full flex justify-between items-center",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "lgContainer:ml-2",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "text-sm lgContainer:text-base",
              children: "Revenue"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 499,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 498,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 497,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: `w-full ${size.width < 1120 ? 'text-sm mdContainer:text-base lg1Container:mx-8 lg1Container:mb-6 mt-4  bg-background rounded-2xl px-4 mdContainer:px-6 py-4' : 'w-full mx-8 mb-6 mt-4  bg-background rounded-2xl px-4 mdContainer:px-6 py-4'}`,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              fontSize: size.width < 520 && '0.6rem'
            },
            className: "w-full grid grid-cols-5fr items-center text-xs mdContainer:text-sm lg1Container:text-base",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: "name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 530,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: "type"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 531,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: "amount"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 532,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: "start"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 533,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: "end"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 534,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 535,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 526,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {
            className: "text-primary w-full"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 537,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "h-full w-full rounded-2xl flex flex-wrap flex-col",
            children: revenueElements && revenueElements.map((element, index) => {
              console.log(element);
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "w-full grid grid-cols-5fr py-3 items-start text-sm",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                  placeholder: "name",
                  className: "w-4/5 bg-background focus:outline-none",
                  value: element.title
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 544,
                  columnNumber: 23
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  style: {
                    height: '20px'
                  },
                  className: "overflow-hidden flex flex-col flex-wrap",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "w-full flex flex-row flex-nowrap",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      className: "cursor-default",
                      children: element.type
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 547,
                      columnNumber: 27
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 546,
                    columnNumber: 25
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 545,
                  columnNumber: 23
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    className: "w-4/5 bg-background focus:outline-none",
                    value: element.value,
                    placeholder: "amount"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 551,
                    columnNumber: 25
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 550,
                  columnNumber: 23
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_datepicker__WEBPACK_IMPORTED_MODULE_11___default.a, {
                    popperPlacement: "top-start",
                    popperProps: {
                      positionFixed: true
                    },
                    selected: element.start._seconds * 1000,
                    dateFormat: "MMMM yyyy",
                    showMonthYearPicker: true,
                    maxDate: Object(date_fns__WEBPACK_IMPORTED_MODULE_12__["addYears"])(new Date(), 3),
                    minDate: new Date(),
                    readOnly: true
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 554,
                    columnNumber: 25
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 553,
                  columnNumber: 23
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  children: element.type == 'Recurring' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_datepicker__WEBPACK_IMPORTED_MODULE_11___default.a, {
                    popperPlacement: "top-start",
                    popperProps: {
                      positionFixed: true
                    },
                    selected: element.end._seconds * 1000,
                    dateFormat: "MMMM yyyy",
                    showMonthYearPicker: true,
                    maxDate: Object(date_fns__WEBPACK_IMPORTED_MODULE_12__["addYears"])(new Date(), 3),
                    minDate: new Date(),
                    readOnly: true
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 569,
                    columnNumber: 27
                  }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {
                    className: "text-primarydark mr-8 mt-2"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 582,
                    columnNumber: 27
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 567,
                  columnNumber: 23
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 543,
                columnNumber: 21
              }, undefined);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 538,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 518,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 493,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "overflow-hidden relative w-full rounded-2xl bg-white dark:bg-background px-4 py-4 flex justify-center items-center mt-8 flex flex-wrap shadow-md",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "w-full flex justify-between items-center",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "lgContainer:ml-2",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "text-sm lgContainer:text-base",
              children: "Costs"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 595,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 594,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 593,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: `w-full ${size.width < 1120 ? 'text-sm mdContainer:text-base lg1Container:mx-8 lg1Container:mb-6 mt-4  bg-background rounded-2xl px-4 mdContainer:px-6 py-4' : 'w-full mx-8 mb-6 mt-4  bg-background rounded-2xl px-4 mdContainer:px-6 py-4'}`,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "w-full grid grid-cols-5fr items-center",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: "name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 607,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: "type"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 608,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: "amount"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 609,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: "start"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 610,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: "end"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 611,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 612,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 606,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {
            className: "text-primary w-full"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 614,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "h-full w-full rounded-2xl flex flex-wrap flex-col",
            children: costsElements && costsElements.map((element, index) => {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "w-full grid grid-cols-5fr py-3 items-start text-sm",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                  placeholder: "name",
                  className: "w-4/5 bg-background focus:outline-none",
                  value: element.title
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 620,
                  columnNumber: 23
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  style: {
                    height: '20px'
                  },
                  className: "overflow-hidden flex flex-col flex-wrap",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "w-full flex flex-row flex-nowrap",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      className: "cursor-default",
                      children: element.type
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 623,
                      columnNumber: 27
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 622,
                    columnNumber: 25
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 621,
                  columnNumber: 23
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    className: "w-4/5 bg-background focus:outline-none",
                    value: element.value,
                    placeholder: "amount"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 627,
                    columnNumber: 25
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 626,
                  columnNumber: 23
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_datepicker__WEBPACK_IMPORTED_MODULE_11___default.a, {
                    popperPlacement: "top-start",
                    popperProps: {
                      positionFixed: true
                    },
                    selected: element.start._seconds * 1000,
                    dateFormat: "MMMM yyyy",
                    showMonthYearPicker: true,
                    maxDate: Object(date_fns__WEBPACK_IMPORTED_MODULE_12__["addYears"])(new Date(), 3),
                    minDate: new Date(),
                    readOnly: true
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 630,
                    columnNumber: 25
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 629,
                  columnNumber: 23
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  children: element.type == 'Recurring' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_datepicker__WEBPACK_IMPORTED_MODULE_11___default.a, {
                    popperPlacement: "top-start",
                    popperProps: {
                      positionFixed: true
                    },
                    selected: element.end._seconds * 1000,
                    dateFormat: "MMMM yyyy",
                    showMonthYearPicker: true,
                    maxDate: Object(date_fns__WEBPACK_IMPORTED_MODULE_12__["addYears"])(new Date(), 3),
                    minDate: new Date(),
                    readOnly: true
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 645,
                    columnNumber: 27
                  }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {
                    className: "text-primarydark mr-8 mt-2"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 658,
                    columnNumber: 27
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 643,
                  columnNumber: 23
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 619,
                columnNumber: 21
              }, undefined);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 615,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 598,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 592,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 295,
    columnNumber: 5
  }, undefined);
};

const getStaticPaths = async () => {
  const snapshot = await _lib_firebase_admin__WEBPACK_IMPORTED_MODULE_3__["db"].collection('projects').get();
  const projects = [];
  snapshot.forEach(doc => {
    projects.push(doc.data());
  });
  const paths = projects.map(project => ({
    params: {
      project: project.projectName.toString(),
      id: project.projectId.toString()
    }
  }));
  return {
    paths: paths,
    fallback: true
  };
};
const getStaticProps = Object(babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_1__["withSuperJSONProps"])(async ({
  params
}) => {
  console.log(params); // let ref = db.collection('projects').where('projectName', '==', params.project);

  let ref = _lib_firebase_admin__WEBPACK_IMPORTED_MODULE_3__["db"].collection('projects').doc(params.id).collection('cashFlow').doc(params.project).collection('inputs').where('projectId', '==', params.id);
  const snapshot = await ref.get();
  const project = [];
  snapshot.forEach(doc => {
    const data = JSON.parse(safeJsonStringify(doc.data()));
    project.push(_objectSpread({}, data));
  });
  return {
    props: {
      project
    },
    revalidate: 1
  };
}, []);
/* harmony default export */ __webpack_exports__["default"] = (Object(babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_1__["withSuperJSONPage"])(UniqueCashflowPage));

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

/***/ "babel-plugin-superjson-next/tools":
/*!****************************************************!*\
  !*** external "babel-plugin-superjson-next/tools" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-superjson-next/tools");

/***/ }),

/***/ "date-fns":
/*!***************************!*\
  !*** external "date-fns" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("date-fns");

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

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

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

/***/ "react-datepicker":
/*!***********************************!*\
  !*** external "react-datepicker" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-datepicker");

/***/ }),

/***/ "react-device-detect":
/*!**************************************!*\
  !*** external "react-device-detect" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-device-detect");

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

/***/ }),

/***/ "safe-json-stringify":
/*!**************************************!*\
  !*** external "safe-json-stringify" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("safe-json-stringify");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Cb3VuY2VMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9kYXNoYm9hcmQvc3RhcnR1cC9wcm9qZWN0L2J1c2luZXNzLWFwcC9jb21wZXRpdG9ycy9VbmlxdWVFbGVtZW50LmpzIiwid2VicGFjazovLy8uL2xpYi9maXJlYmFzZS1hZG1pbi5qcyIsIndlYnBhY2s6Ly8vLi9saWIvZmlyZWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvZGFzaGJvYXJkL3Byb2plY3RzL1twcm9qZWN0XS9jYXNoLWZsb3cvLmpzIiwid2VicGFjazovLy8uL3V0aWxzL3VzZVdpbmRvd1NpemUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGVtb3Rpb24vcmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWJlbC1wbHVnaW4tc3VwZXJqc29uLW5leHQvdG9vbHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkYXRlLWZuc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlLWFkbWluXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2UvYXBwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2UvYXV0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL2ZpcmVzdG9yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL2Z1bmN0aW9uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL3N0b3JhZ2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJnc2FwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianMtY29va2llXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9tZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRhdGVwaWNrZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1kZXZpY2UtZGV0ZWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc3Bpbm5lcnMvQm91bmNlTG9hZGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2FmZS1qc29uLXN0cmluZ2lmeVwiIl0sIm5hbWVzIjpbIkJvdW5jZUxvYWRlckNvbXBvbmVudCIsImJvdW5jZVN0eWxlcyIsImNzcyIsIlVuaXF1ZUNvbXBldGl0b3JzUGFnZSIsImNvbXBldGl0b3IiLCJjb25zb2xlIiwibG9nIiwiZHJvcGRvd25IZWxwZXIiLCJzZXREcm9wZG93bkhlbHBlciIsInVzZVN0YXRlIiwiaW5pdGlhbENvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbmRleCIsImRlc2NyaXB0aW9uVGl0bGUiLCJzZXREZXNjcmlwdGlvblRpdGxlIiwicGxhY2Vob2xkZXJUaXRsZSIsInNldFBsYWNlaG9sZGVyVGl0bGUiLCJkZXNjcmlwdGlvbk1vZGVsIiwic2V0RGVzY3JpcHRpb25Nb2RlbCIsInBsYWNlaG9sZGVyTW9kZWwiLCJzZXRQbGFjZWhvbGRlck1vZGVsIiwiZGVzY3JpcHRpb25Qcm9kdWN0Iiwic2V0RGVzY3JpcHRpb25Qcm9kdWN0IiwicGxhY2Vob2xkZXJQcm9kdWN0Iiwic2V0UGxhY2Vob2xkZXJQcm9kdWN0IiwiZGVzY3JpcHRpb25Qcm9tb3Rpb24iLCJzZXREZXNjcmlwdGlvblByb21vdGlvbiIsInBsYWNlaG9sZGVyUHJvbW90aW9uIiwic2V0UGxhY2Vob2xkZXJQcm9tb3Rpb24iLCJkZXNjcmlwdGlvblN0cmVuZ3RocyIsInNldERlc2NyaXB0aW9uU3RyZW5ndGhzIiwicGxhY2Vob2xkZXJTdHJlbmd0aHMiLCJzZXRQbGFjZWhvbGRlclN0cmVuZ3RocyIsImRlc2NyaXB0aW9uV2Vha25lc3NlcyIsInNldERlc2NyaXB0aW9uV2Vha25lc3NlcyIsInBsYWNlaG9sZGVyV2Vha25lc3NlcyIsInNldFBsYWNlaG9sZGVyV2Vha25lc3NlcyIsImRlc2NyaXB0aW9uT3Bwb3J0dW5pdGllcyIsInNldERlc2NyaXB0aW9uT3Bwb3J0dW5pdGllcyIsInBsYWNlaG9sZGVyT3Bwb3J0dW5pdGllcyIsInNldFBsYWNlaG9sZGVyT3Bwb3J0dW5pdGllcyIsInVzZUVmZmVjdCIsImRyb3BEb3duRWxlbWVudCIsImRhdGFFbGVtZW50IiwiZ3NhcCIsInNldCIsInJvdGF0aW9uIiwiaXNNb2JpbGUiLCJjb250YWluZXJFbGVtZW50IiwiY29tcGV0aXRvck1hbmFnZXIiLCJhZGRFdmVudExpc3RlbmVyIiwidG8iLCJoZWlnaHQiLCJtYXJpZ25Cb3R0b20iLCJkdXJhdGlvbiIsImVhc2UiLCJMaW5lYXIiLCJlYXNlSW4iLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJlYXNlT3V0Iiwib25TZWN0aW9uRHJvcGRvd24iLCJzZWN0aW9uSGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwiYXV0b0FscGhhIiwidG9wIiwiaW1hZ2UiLCJkaXNwbGF5IiwiekluZGV4IiwidGl0bGUiLCJsb2NhdGlvbiIsImVtcGxveWVlcyIsInJldmVudWUiLCJjb21wYW55RGVzY3JpcHRpb24iLCJidXNpbmVzc01vZGVsIiwicHJvZHVjdE92ZXJ2aWV3IiwicHJvbW90aW9uU3RyYXRlZ3kiLCJjb21wYW55U3RyZW5ndGhzIiwiY29tcGFueVdlYWtuZXNzZXMiLCJvcHBvcnR1bml0aWVzIiwiYWRtaW4iLCJsZW5ndGgiLCJjcmVkZW50aWFsIiwiY2VydCIsImNsaWVudF9lbWFpbCIsInByaXZhdGVfa2V5IiwicHJvamVjdF9pZCIsImRhdGFiYXNlVVJMIiwiYXV0aCIsImRiIiwiZmlyZWJhc2UiLCJhcHBzIiwiaW5pdGlhbGl6ZUFwcCIsImFwaUtleSIsImF1dGhEb21haW4iLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsIm1lYXN1cmVtZW50SWQiLCJmaXJlc3RvcmUiLCJzdG9yYWdlIiwic2FmZUpzb25TdHJpbmdpZnkiLCJyZXF1aXJlIiwiVW5pcXVlQ2FzaGZsb3dQYWdlIiwicHJvamVjdCIsInN0YXJ0RGF0ZSIsInNldFN0YXJ0RGF0ZSIsIkRhdGUiLCJlbmREYXRlIiwic2V0RW5kRGF0ZSIsInNlbGVjdGVkUHJvamVjdCIsInNldFNlbGVjdGVkUHJvamVjdCIsInJldmVudWVFbGVtZW50cyIsInNldFJldmVudWVFbGVtZW50cyIsImNvc3RzRWxlbWVudHMiLCJzZXRDb3N0c0VsZW1lbnRzIiwicGVyaW9kcyIsInNldFBlcmlvZHMiLCJ0YXgiLCJzZXRUYXgiLCJzaXplIiwidXNlV2luZG93U2l6ZSIsInRvdGFsUmV2ZW51ZSIsInNldFRvdGFsUmV2ZW51ZSIsIm1vbnRobHlSZXZlbnVlIiwic2V0TW9udGhseVJldmVudWUiLCJ0b3RhbENvc3RzIiwic2V0VG90YWxDb3N0cyIsIm1vbnRobHlDb3N0cyIsInNldE1vbnRobHlDb3N0cyIsImdyb3NzUHJvZml0Iiwic2V0R3Jvc3NQcm9maXQiLCJuZXRQcm9maXQiLCJzZXROZXRQcm9maXQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJjaGFuZ2VkU3RhcnREYXRlIiwiZ2xvYmFsU3RhcnREYXRlIiwiX3NlY29uZHMiLCJjaGFuZ2VkRW5kRGF0ZSIsImdsb2JhbEVuZERhdGUiLCJ0b3RhbFJldmVudWVBcnJheSIsIm1hcCIsImVsZW1lbnQiLCJwYXJzZUludCIsInZhbHVlIiwicmVkdWNlIiwiYSIsImIiLCJOdW1iZXIiLCJpc05hTiIsIk1hdGgiLCJyb3VuZCIsInBlcmlvZExlbmd0aCIsInRvdGFsQ29zdHNBcnJheSIsImlzRmluaXRlIiwiaW5uZXJIVE1MIiwid2lkdGgiLCJteUNoYXJ0UmVmIiwiZ2V0Q29udGV4dCIsInJldmVudWVEYXRhc2V0IiwidGVzdEFycmF5IiwicmV2ZW51ZUVsZW1lbnQiLCJtb250aERhdGEiLCJwZXJpb2QiLCJwZXJpb2RJbmRleCIsInJldmVudWVQZXJpb2QiLCJwdXNoIiwibGFiZWwiLCJkYXRhIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJib3JkZXJDb2xvciIsImNvc3RzRGF0YXNldCIsImNvc3RzRWxlbWVudCIsImNvc3RzUGVyaW9kIiwicmV2ZW51ZUFycmF5IiwiY2FsY3VsYXRlZFJldmVudWVBcnJheSIsInVuZGVmaW5lZCIsImMiLCJpIiwiY29zdHNBcnJheSIsImNhbGN1bGF0ZWRDb3N0c0FycmF5IiwiZmluYWxBcnJheSIsImNhbGN1bGF0ZWRGaW5hbEFycmF5IiwiYXJyYXkiLCJ6ZXJvQXJyYXkiLCJmaW5hbERhdGFCZWZvcmVUYXgiLCJmaW5hbERhdGFBZnRlclRheCIsIm5ldFdvcnRoQXJyYXkiLCJuZXRXb3J0aCIsInJldmVudWVFbGVtZW50SW5kZXgiLCJDaGFydCIsInR5cGUiLCJsYWJlbHMiLCJkYXRhc2V0cyIsImZpbGwiLCJsaW5lVGVuc2lvbiIsImJvcmRlcldpZHRoIiwicG9pbnRSYWRpdXMiLCJvcHRpb25zIiwic2tpcE51bGwiLCJyZXNwb25zaXZlIiwicGx1Z2lucyIsImxlZ2VuZCIsInBvc2l0aW9uIiwiZm9udEZhbWlseSIsImZvbnQiLCJib3hXaWR0aCIsInNjYWxlcyIsIngiLCJzdGFja2VkIiwidGlja3MiLCJiZWdpbkF0WmVybyIsInkiLCJpc0ZhbGxiYWNrIiwiYWRkWWVhcnMiLCJncmlkQ29sdW1uU3RhcnQiLCJncmlkQ29sdW1uRW5kIiwidGV4dEFsaWduTGFzdCIsImZvbnRTaXplIiwicG9zaXRpb25GaXhlZCIsInN0YXJ0IiwiZW5kIiwiZ2V0U3RhdGljUGF0aHMiLCJzbmFwc2hvdCIsImNvbGxlY3Rpb24iLCJnZXQiLCJwcm9qZWN0cyIsImZvckVhY2giLCJkb2MiLCJwYXRocyIsInBhcmFtcyIsInByb2plY3ROYW1lIiwidG9TdHJpbmciLCJpZCIsImZhbGxiYWNrIiwiZ2V0U3RhdGljUHJvcHMiLCJyZWYiLCJ3aGVyZSIsIkpTT04iLCJwYXJzZSIsInByb3BzIiwicmV2YWxpZGF0ZSIsIkFwcCIsIndpbmRvd1NpemUiLCJzZXRXaW5kb3dTaXplIiwiaGFuZGxlUmVzaXplIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxxQkFBcUIsR0FBRyxNQUFNO0FBQ2xDLFFBQU1DLFlBQVksR0FBR0Msa0RBQUk7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUxFO0FBTUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsMEJBQWY7QUFBQSwyQkFDRSxxRUFBQyxrRUFBRDtBQUFjLFdBQUssRUFBRSxTQUFyQjtB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Qy9ILFVBQU0sRUFBRStIO0FBRm1DLEdBQUQsQ0FBNUM7QUFJQTFJLHlEQUFTLENBQUMsTUFBTTtBQUNkO0FBQ0EsYUFBUytNLFlBQVQsR0FBd0I7QUFDdEI7QUFDQUQsbUJBQWEsQ0FBQztBQUNaekYsYUFBSyxFQUFFMkYsTUFBTSxDQUFDQyxVQURGO0FBRVp0TSxjQUFNLEVBQUVxTSxNQUFNLENBQUNFO0FBRkgsT0FBRCxDQUFiO0FBSUQsS0FSYSxDQVNkOzs7QUFDQUYsVUFBTSxDQUFDdk0sZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NzTSxZQUFsQyxFQVZjLENBV2Q7O0FBQ0FBLGdCQUFZLEdBWkUsQ0FhZDs7QUFDQSxXQUFPLE1BQU1DLE1BQU0sQ0FBQ0csbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUNKLFlBQXJDLENBQWI7QUFDRCxHQWZRLEVBZU4sRUFmTSxDQUFULENBUDhCLENBc0J0Qjs7QUFDUixTQUFPRixVQUFQO0FBQ0QsQzs7Ozs7Ozs7Ozs7QUNuQ0QsMkM7Ozs7Ozs7Ozs7O0FDQUEsOEQ7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsZ0Q7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsZ0QiLCJmaWxlIjoicGFnZXMvZGFzaGJvYXJkL3Byb2plY3RzL1twcm9qZWN0XS9jYXNoLWZsb3cvW2lkXS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvZGFzaGJvYXJkL3Byb2plY3RzL1twcm9qZWN0XS9jYXNoLWZsb3cvW2lkXS5qc1wiKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcclxuaW1wb3J0IEJvdW5jZUxvYWRlciBmcm9tICdyZWFjdC1zcGlubmVycy9Cb3VuY2VMb2FkZXInO1xyXG5cclxuY29uc3QgQm91bmNlTG9hZGVyQ29tcG9uZW50ID0gKCkgPT4ge1xyXG4gIGNvbnN0IGJvdW5jZVN0eWxlcyA9IGNzc2BcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgYDtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBoLXNjcmVlbiB3LWZ1bGxcIj5cclxuICAgICAgPEJvdW5jZUxvYWRlciBjb2xvcj17JyM2QzYzRkYnfSBjc3M9e2JvdW5jZVN0eWxlc30gLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCb3VuY2VMb2FkZXJDb21wb25lbnQ7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGlzTW9iaWxlIH0gZnJvbSAncmVhY3QtZGV2aWNlLWRldGVjdCc7XHJcbmltcG9ydCBnc2FwLCB7IExpbmVhciB9IGZyb20gJ2dzYXAnO1xyXG5cclxuY29uc3QgVW5pcXVlQ29tcGV0aXRvcnNQYWdlID0gKHsgY29tcGV0aXRvciB9KSA9PiB7XHJcbiAgY29uc29sZS5sb2coJ0NvbXBldGl0b3IgLS0+ICcsIGNvbXBldGl0b3IpO1xyXG4gIC8vICAgRHJvcGRvd25cclxuICBjb25zdCBbZHJvcGRvd25IZWxwZXIsIHNldERyb3Bkb3duSGVscGVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaW5pdGlhbENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbXBldGl0b3IuaW5kZXgpO1xyXG4gIC8vIEVsZW1lbnRzXHJcbiAgY29uc3QgW2Rlc2NyaXB0aW9uVGl0bGUsIHNldERlc2NyaXB0aW9uVGl0bGVdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW3BsYWNlaG9sZGVyVGl0bGUsIHNldFBsYWNlaG9sZGVyVGl0bGVdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2Rlc2NyaXB0aW9uTW9kZWwsIHNldERlc2NyaXB0aW9uTW9kZWxdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW3BsYWNlaG9sZGVyTW9kZWwsIHNldFBsYWNlaG9sZGVyTW9kZWxdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2Rlc2NyaXB0aW9uUHJvZHVjdCwgc2V0RGVzY3JpcHRpb25Qcm9kdWN0XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtwbGFjZWhvbGRlclByb2R1Y3QsIHNldFBsYWNlaG9sZGVyUHJvZHVjdF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbZGVzY3JpcHRpb25Qcm9tb3Rpb24sIHNldERlc2NyaXB0aW9uUHJvbW90aW9uXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtwbGFjZWhvbGRlclByb21vdGlvbiwgc2V0UGxhY2Vob2xkZXJQcm9tb3Rpb25dID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2Rlc2NyaXB0aW9uU3RyZW5ndGhzLCBzZXREZXNjcmlwdGlvblN0cmVuZ3Roc10gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbcGxhY2Vob2xkZXJTdHJlbmd0aHMsIHNldFBsYWNlaG9sZGVyU3RyZW5ndGhzXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtkZXNjcmlwdGlvbldlYWtuZXNzZXMsIHNldERlc2NyaXB0aW9uV2Vha25lc3Nlc10gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbcGxhY2Vob2xkZXJXZWFrbmVzc2VzLCBzZXRQbGFjZWhvbGRlcldlYWtuZXNzZXNdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2Rlc2NyaXB0aW9uT3Bwb3J0dW5pdGllcywgc2V0RGVzY3JpcHRpb25PcHBvcnR1bml0aWVzXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtwbGFjZWhvbGRlck9wcG9ydHVuaXRpZXMsIHNldFBsYWNlaG9sZGVyT3Bwb3J0dW5pdGllc10gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZGVzY3JpcHRpb25UaXRsZSR7Y29tcGV0aXRvci5pbmRleH1gKTtcclxuICAgIHNldERlc2NyaXB0aW9uVGl0bGUoZGVzY3JpcHRpb25UaXRsZSk7XHJcbiAgICBjb25zdCBwbGFjZWhvbGRlclRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHBsYWNlaG9sZGVyVGl0bGUke2NvbXBldGl0b3IuaW5kZXh9YCk7XHJcbiAgICBzZXRQbGFjZWhvbGRlclRpdGxlKHBsYWNlaG9sZGVyVGl0bGUpO1xyXG4gICAgY29uc3QgZGVzY3JpcHRpb25Nb2RlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBkZXNjcmlwdGlvbk1vZGVsJHtjb21wZXRpdG9yLmluZGV4fWApO1xyXG4gICAgc2V0RGVzY3JpcHRpb25Nb2RlbChkZXNjcmlwdGlvbk1vZGVsKTtcclxuICAgIGNvbnN0IHBsYWNlaG9sZGVyTW9kZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcGxhY2Vob2xkZXJNb2RlbCR7Y29tcGV0aXRvci5pbmRleH1gKTtcclxuICAgIHNldFBsYWNlaG9sZGVyTW9kZWwocGxhY2Vob2xkZXJNb2RlbCk7XHJcbiAgICBjb25zdCBkZXNjcmlwdGlvblByb2R1Y3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZGVzY3JpcHRpb25Qcm9kdWN0JHtjb21wZXRpdG9yLmluZGV4fWApO1xyXG4gICAgc2V0RGVzY3JpcHRpb25Qcm9kdWN0KGRlc2NyaXB0aW9uUHJvZHVjdCk7XHJcbiAgICBjb25zdCBwbGFjZWhvbGRlclByb2R1Y3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcGxhY2Vob2xkZXJQcm9kdWN0JHtjb21wZXRpdG9yLmluZGV4fWApO1xyXG4gICAgc2V0UGxhY2Vob2xkZXJQcm9kdWN0KHBsYWNlaG9sZGVyUHJvZHVjdCk7XHJcbiAgICBjb25zdCBkZXNjcmlwdGlvblByb21vdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBkZXNjcmlwdGlvblByb21vdGlvbiR7Y29tcGV0aXRvci5pbmRleH1gKTtcclxuICAgIHNldERlc2NyaXB0aW9uUHJvbW90aW9uKGRlc2NyaXB0aW9uUHJvbW90aW9uKTtcclxuICAgIGNvbnN0IHBsYWNlaG9sZGVyUHJvbW90aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHBsYWNlaG9sZGVyUHJvbW90aW9uJHtjb21wZXRpdG9yLmluZGV4fWApO1xyXG4gICAgc2V0UGxhY2Vob2xkZXJQcm9tb3Rpb24ocGxhY2Vob2xkZXJQcm9tb3Rpb24pO1xyXG4gICAgY29uc3QgZGVzY3JpcHRpb25TdHJlbmd0aHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZGVzY3JpcHRpb25TdHJlbmd0aHMke2NvbXBldGl0b3IuaW5kZXh9YCk7XHJcbiAgICBzZXREZXNjcmlwdGlvblN0cmVuZ3RocyhkZXNjcmlwdGlvblN0cmVuZ3Rocyk7XHJcbiAgICBjb25zdCBwbGFjZWhvbGRlclN0cmVuZ3RocyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwbGFjZWhvbGRlclN0cmVuZ3RocyR7Y29tcGV0aXRvci5pbmRleH1gKTtcclxuICAgIHNldFBsYWNlaG9sZGVyU3RyZW5ndGhzKHBsYWNlaG9sZGVyU3RyZW5ndGhzKTtcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uV2Vha25lc3NlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBkZXNjcmlwdGlvbldlYWtuZXNzZXMke2NvbXBldGl0b3IuaW5kZXh9YCk7XHJcbiAgICBzZXREZXNjcmlwdGlvbldlYWtuZXNzZXMoZGVzY3JpcHRpb25XZWFrbmVzc2VzKTtcclxuICAgIGNvbnN0IHBsYWNlaG9sZGVyV2Vha25lc3NlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwbGFjZWhvbGRlcldlYWtuZXNzZXMke2NvbXBldGl0b3IuaW5kZXh9YCk7XHJcbiAgICBzZXRQbGFjZWhvbGRlcldlYWtuZXNzZXMocGxhY2Vob2xkZXJXZWFrbmVzc2VzKTtcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uT3Bwb3J0dW5pdGllcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBkZXNjcmlwdGlvbk9wcG9ydHVuaXRpZXMke2NvbXBldGl0b3IuaW5kZXh9YCk7XHJcbiAgICBzZXREZXNjcmlwdGlvbk9wcG9ydHVuaXRpZXMoZGVzY3JpcHRpb25PcHBvcnR1bml0aWVzKTtcclxuICAgIGNvbnN0IHBsYWNlaG9sZGVyT3Bwb3J0dW5pdGllcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwbGFjZWhvbGRlck9wcG9ydHVuaXRpZXMke2NvbXBldGl0b3IuaW5kZXh9YCk7XHJcbiAgICBzZXRQbGFjZWhvbGRlck9wcG9ydHVuaXRpZXMocGxhY2Vob2xkZXJPcHBvcnR1bml0aWVzKTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgZHJvcERvd25FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGRyb3Bkb3duJHtjb21wZXRpdG9yLmluZGV4fWApO1xyXG4gIGNvbnN0IGRhdGFFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGRhdGEke2NvbXBldGl0b3IuaW5kZXh9YCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnc2FwLnNldChkcm9wRG93bkVsZW1lbnQsIHsgcm90YXRpb246ICctOTBfY3cnIH0pO1xyXG4gICAgaWYgKCFpc01vYmlsZSkge1xyXG4gICAgICBjb25zdCBjb250YWluZXJFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGNvbnRhaW5lciR7Y29tcGV0aXRvci5pbmRleH1gKTtcclxuICAgICAgY29uc3QgY29tcGV0aXRvck1hbmFnZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgbWFuYWdlciR7Y29tcGV0aXRvci5pbmRleH1gKTtcclxuICAgICAgY29udGFpbmVyRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKCkgPT4ge1xyXG4gICAgICAgIGdzYXAudG8oY29tcGV0aXRvck1hbmFnZXIsIHsgaGVpZ2h0OiAxOCwgbWFyaWduQm90dG9tOiAxNiwgZHVyYXRpb246IDAuNSwgZWFzZTogTGluZWFyLmVhc2VJbiB9KTtcclxuICAgICAgICBnc2FwLnRvKGluaXRpYWxDb250YWluZXIsIHsgbWFyZ2luVG9wOiAxNiwgZHVyYXRpb246IDAuNSwgZWFzZTogTGluZWFyLmVhc2VJbiB9KTtcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnRhaW5lckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHtcclxuICAgICAgICBnc2FwLnRvKGNvbXBldGl0b3JNYW5hZ2VyLCB7IGhlaWdodDogMCwgbWFyZ2luQm90dG9tOiAwLCBkdXJhdGlvbjogMC41LCBlYXNlOiBMaW5lYXIuZWFzZU91dCB9KTtcclxuICAgICAgICBnc2FwLnRvKGluaXRpYWxDb250YWluZXIsIHsgbWFyZ2luVG9wOiAwLCBkdXJhdGlvbjogMC41LCBlYXNlOiBMaW5lYXIuZWFzZUluIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9LCBbZHJvcERvd25FbGVtZW50XSk7XHJcblxyXG4gIGNvbnN0IG9uU2VjdGlvbkRyb3Bkb3duID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgc2VjdGlvbkhlaWdodCA9XHJcbiAgICAgIGRlc2NyaXB0aW9uVGl0bGUub2Zmc2V0SGVpZ2h0ICtcclxuICAgICAgcGxhY2Vob2xkZXJUaXRsZS5vZmZzZXRIZWlnaHQgK1xyXG4gICAgICBkZXNjcmlwdGlvbk1vZGVsLm9mZnNldEhlaWdodCArXHJcbiAgICAgIHBsYWNlaG9sZGVyTW9kZWwub2Zmc2V0SGVpZ2h0ICtcclxuICAgICAgMjQgK1xyXG4gICAgICBkZXNjcmlwdGlvblByb2R1Y3Qub2Zmc2V0SGVpZ2h0ICtcclxuICAgICAgcGxhY2Vob2xkZXJQcm9kdWN0Lm9mZnNldEhlaWdodCArXHJcbiAgICAgIDI0ICtcclxuICAgICAgZGVzY3JpcHRpb25Qcm9tb3Rpb24ub2Zmc2V0SGVpZ2h0ICtcclxuICAgICAgcGxhY2Vob2xkZXJQcm9tb3Rpb24ub2Zmc2V0SGVpZ2h0ICtcclxuICAgICAgMjQgK1xyXG4gICAgICBkZXNjcmlwdGlvblN0cmVuZ3Rocy5vZmZzZXRIZWlnaHQgK1xyXG4gICAgICBwbGFjZWhvbGRlclN0cmVuZ3Rocy5vZmZzZXRIZWlnaHQgK1xyXG4gICAgICAyNCArXHJcbiAgICAgIGRlc2NyaXB0aW9uV2Vha25lc3Nlcy5vZmZzZXRIZWlnaHQgK1xyXG4gICAgICBwbGFjZWhvbGRlcldlYWtuZXNzZXMub2Zmc2V0SGVpZ2h0ICtcclxuICAgICAgMjQgK1xyXG4gICAgICBkZXNjcmlwdGlvbk9wcG9ydHVuaXRpZXMub2Zmc2V0SGVpZ2h0ICtcclxuICAgICAgcGxhY2Vob2xkZXJPcHBvcnR1bml0aWVzLm9mZnNldEhlaWdodCArXHJcbiAgICAgIDI0O1xyXG4gICAgaWYgKCFkcm9wZG93bkhlbHBlcikge1xyXG4gICAgICBnc2FwLnRvKGRhdGFFbGVtZW50LCB7IGhlaWdodDogc2VjdGlvbkhlaWdodCwgbWFyZ2luVG9wOiAzMiwgbWFyZ2luQm90dG9tOiAxMTIsIGF1dG9BbHBoYTogMSwgZHVyYXRpb246IDEsIGVhc2U6IExpbmVhciB9KTtcclxuICAgICAgZ3NhcC50byhkcm9wRG93bkVsZW1lbnQsIHsgcm90YXRpb246ICcwX2N3JywgZHVyYXRpb246IDEsIGVhc2U6IExpbmVhciB9KTtcclxuICAgICAgc2V0RHJvcGRvd25IZWxwZXIodHJ1ZSk7XHJcbiAgICB9IGVsc2UgaWYgKGRyb3Bkb3duSGVscGVyKSB7XHJcbiAgICAgIGdzYXAudG8oZGF0YUVsZW1lbnQsIHsgaGVpZ2h0OiAwLCBtYXJnaW5Ub3A6IDAsIG1hcmdpbkJvdHRvbTogMCwgYXV0b0FscGhhOiAwLCBkdXJhdGlvbjogMSwgZWFzZTogTGluZWFyIH0pO1xyXG4gICAgICBnc2FwLnRvKGRyb3BEb3duRWxlbWVudCwgeyByb3RhdGlvbjogJy05MF9jY3cnLCBkdXJhdGlvbjogMSwgZWFzZTogTGluZWFyIH0pO1xyXG4gICAgICBzZXREcm9wZG93bkhlbHBlcihmYWxzZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgc3R5bGU9e3sgaGVpZ2h0OiAnZml0LWNvbnRlbnQnIH19XHJcbiAgICAgIGlkPXtgY29udGFpbmVyJHtjb21wZXRpdG9yLmluZGV4fWB9XHJcbiAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy1iYWNrZ3JvdW5kIHJvdW5kZWQtMnhsIHAtNCBzc21Db250YWluZXI6cC02IHNoYWRvdy1tZCBvdmVyZmxvdy1oaWRkZW4gbXQtOCBzbUNvbnRhaW5lcjptdC04XCJcclxuICAgID5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIHN0eWxlPXt7IGhlaWdodDogYCR7aXNNb2JpbGUgPyA0MCA6IDB9YCwgdG9wOiBgJHtpc01vYmlsZSA/ICctNnB4JyA6ICctNnB4J31gIH19XHJcbiAgICAgICAgaWQ9e2BtYW5hZ2VyJHtjb21wZXRpdG9yLmluZGV4fWB9XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gcmVsYXRpdmVcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgLy8gICBzdHlsZT17eyB0cmFuc2Zvcm06ICdyb3RhdGUoLTkwZGVnKScgfX1cclxuICAgICAgICAgIG9uQ2xpY2s9e29uU2VjdGlvbkRyb3Bkb3dufVxyXG4gICAgICAgICAgaWQ9e2Bkcm9wZG93biR7Y29tcGV0aXRvci5pbmRleH1gfVxyXG4gICAgICAgICAgc3JjPVwiL2NvbXBldGl0b3JzL2Ryb3Bkb3duLnN2Z1wiXHJcbiAgICAgICAgICBoZWlnaHQ9ezE4fVxyXG4gICAgICAgICAgd2lkdGg9ezE4fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XHJcbiAgICAgICAgICB7LyogPGltZyBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciBtci0yXCIgc3JjPVwiL2NvbXBldGl0b3JzL2RyYWcuc3ZnXCIgaGVpZ2h0PXsxOH0gd2lkdGg9ezE4fSAvPlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQ29tcGV0aXRvclJlbW92ZShkYXRhLmNvbXBldGl0b3IuaW5kZXgpfVxyXG4gICAgICAgICAgc3JjPVwiL2NvbXBldGl0b3JzL3JlbW92ZS5zdmdcIlxyXG4gICAgICAgICAgaGVpZ2h0PXsxOH1cclxuICAgICAgICAgIHdpZHRoPXsxOH1cclxuICAgICAgICAvPiAqL31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBpZD17Y29tcGV0aXRvci5pbmRleH1cclxuICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGdhcC02IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBzbUNvbnRhaW5lcjpnYXAtMCBzbUNvbnRhaW5lcjpncmlkIHNtQ29udGFpbmVyOmdyaWQtY29scy0xMmZyXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic21Db250YWluZXI6Y29sLXN0YXJ0LTEgc21Db250YWluZXI6Y29sLWVuZC00IGp1c3RpZnktc2VsZi1jZW50ZXIgZmxleCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAge2NvbXBldGl0b3IuaW1hZ2UgIT09ICcnID8gKFxyXG4gICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICBodG1sRm9yPXtgdXBsb2FkLWltYWdlJHtjb21wZXRpdG9yLmluZGV4fWB9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy0yMCBoLTIwIGN1cnNvci1wb2ludGVyIHJvdW5kZWQtZnVsbCBiZy13aGl0ZSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz17Y29tcGV0aXRvci5pbWFnZX0gaGVpZ2h0PXs1NX0gd2lkdGg9ezU1fSAvPlxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgIGh0bWxGb3I9e2B1cGxvYWQtaW1hZ2Uke2NvbXBldGl0b3IuaW5kZXh9YH1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMjAgaC0yMCBjdXJzb3ItcG9pbnRlciByb3VuZGVkLWZ1bGwgYmctcHJpbWFyeSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvY29tcGV0aXRvcnMvZW1wdHktaW1hZ2Uuc3ZnXCIgaGVpZ2h0PXs2NX0gd2lkdGg9ezY1fSAvPlxyXG4gICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIGlkPXtgdXBsb2FkLWltYWdlJHtjb21wZXRpdG9yLmluZGV4fWB9IHN0eWxlPXt7IGRpc3BsYXk6ICdub25lJywgekluZGV4OiAxMCB9fSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic21Db250YWluZXI6Y29sLXN0YXJ0LTUgc21Db250YWluZXI6Y29sLWVuZC0xMyBncmlkIGdyaWQtY29scy0yZnIgZ3JpZC1yb3dzLTJmciBqdXN0aWZ5LWl0ZW1zLWNlbnRlciBpdGVtcy1jZW50ZXIgZ2FwLXgtNCBzc21Db250YWluZXI6Z2FwLXgtOCBnYXAteS0yIHNzbUNvbnRhaW5lcjpnYXAteS00XCI+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB2YWx1ZT17Y29tcGV0aXRvci50aXRsZX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLTJ4bCB3LWZ1bGwgcHgtMyBweS0yIHRleHQtc20gdGV4dC1wcmltYXJ5ZGFyayBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwibmFtZVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHZhbHVlPXtjb21wZXRpdG9yLmxvY2F0aW9ufVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQtMnhsIHctZnVsbCBweC0zIHB5LTIgdGV4dC1zbSB0ZXh0LXByaW1hcnlkYXJrIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJsb2NhdGlvblwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHZhbHVlPXtjb21wZXRpdG9yLmVtcGxveWVlc31cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLTJ4bCB3LWZ1bGwgcHgtMyBweS0yIHRleHQtc20gdGV4dC1wcmltYXJ5ZGFyayBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZW1wbG95ZWVzXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdmFsdWU9e2NvbXBldGl0b3IucmV2ZW51ZX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLTJ4bCB3LWZ1bGwgcHgtMyBweS0yIHRleHQtc20gdGV4dC1wcmltYXJ5ZGFyayBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwicmV2ZW51ZVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHsvKiBDb21wYW55IGRlc2NyaXB0aW9uICovfVxyXG4gICAgICA8ZGl2IGlkPXtgZGF0YSR7Y29tcGV0aXRvci5pbmRleH1gfSBjbGFzc05hbWU9XCJ3LWZ1bGwgaC0wIGludmlzaWJsZVwiPlxyXG4gICAgICAgIDxkaXYgaWQ9e2BkZXNjcmlwdGlvblRpdGxlJHtjb21wZXRpdG9yLmluZGV4fWB9IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiL2NvbXBldGl0b3JzL2Rlc2NyaXB0aW9uLnN2Z1wiIGhlaWdodD17MjJ9IHdpZHRoPXsyMn0gLz5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeWRhcmsgbWwtMlwiPkNvbXBhbnkgZGVzY3JpcHRpb248L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICB2YWx1ZT17Y29tcGV0aXRvci5jb21wYW55RGVzY3JpcHRpb259XHJcbiAgICAgICAgICBpZD17YHBsYWNlaG9sZGVyVGl0bGUke2NvbXBldGl0b3IuaW5kZXh9YH1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy13aGl0ZSByb3VuZGVkLTJ4bCBtdC0yIHAtMiB0ZXh0LXByaW1hcnlkYXJrIHRleHQtc20gcHgtNCBweS0zIGgtMjggbWF4LWgtMjggZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRGVzY3JpYmUgdGhlIG1haW4gYXNzdW1wdGlvbiBvZiBhbmFseXplZCBjb21wYW55LlwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICB7LyogVGl0bGUgZW5kICovfVxyXG4gICAgICAgIDxkaXYgaWQ9e2BkZXNjcmlwdGlvbk1vZGVsJHtjb21wZXRpdG9yLmluZGV4fWB9IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXIgbXQtNlwiPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCIvY29tcGV0aXRvcnMvbW9kZWwuc3ZnXCIgaGVpZ2h0PXsyMn0gd2lkdGg9ezIyfSAvPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5ZGFyayBtbC0yXCI+QnVzaW5lc3MgbW9kZWw8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICB2YWx1ZT17Y29tcGV0aXRvci5idXNpbmVzc01vZGVsfVxyXG4gICAgICAgICAgaWQ9e2BwbGFjZWhvbGRlck1vZGVsJHtjb21wZXRpdG9yLmluZGV4fWB9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgcm91bmRlZC0yeGwgbXQtMiBwLTIgdGV4dC1wcmltYXJ5ZGFyayB0ZXh0LXNtIHB4LTQgcHktMyBoLTI4IG1heC1oLTI4IGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkhvdyBkb2VzIHRoZSBjb21wYW55IGJ1c2luZXNzIG1vZGVsIGxvb2sgbGlrZT9cIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgey8qIE1vZGVsIGVuZCAqL31cclxuICAgICAgICA8ZGl2IGlkPXtgZGVzY3JpcHRpb25Qcm9kdWN0JHtjb21wZXRpdG9yLmluZGV4fWB9IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXIgbXQtNlwiPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCIvY29tcGV0aXRvcnMvcHJvZHVjdDEuc3ZnXCIgaGVpZ2h0PXsyMn0gd2lkdGg9ezIyfSAvPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5ZGFyayBtbC0yXCI+UHJvZHVjdCBvdmVydmlldzwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgIHZhbHVlPXtjb21wZXRpdG9yLnByb2R1Y3RPdmVydmlld31cclxuICAgICAgICAgIGlkPXtgcGxhY2Vob2xkZXJQcm9kdWN0JHtjb21wZXRpdG9yLmluZGV4fWB9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgcm91bmRlZC0yeGwgbXQtMiBwLTIgdGV4dC1wcmltYXJ5ZGFyayB0ZXh0LXNtIHB4LTQgcHktMyBoLTI4IG1heC1oLTI4IGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIldoYXQgaXMgdGhlIGZ1bGwgcmFuZ2Ugb2YgcHJvZHVjdHMgYW5kIHNlcnZpY2VzIHRoZSBjb21wYW55IG9mZmVycz9cIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgey8qIFByb2R1Y3QgZW5kICovfVxyXG4gICAgICAgIDxkaXYgaWQ9e2BkZXNjcmlwdGlvblByb21vdGlvbiR7Y29tcGV0aXRvci5pbmRleH1gfSBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyIG10LTZcIj5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiL2NvbXBldGl0b3JzL3Byb21vdGlvbi5zdmdcIiBoZWlnaHQ9ezIyfSB3aWR0aD17MjJ9IC8+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnlkYXJrIG1sLTJcIj5Qcm9tb3Rpb24gc3RyYXRlZ3k8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICB2YWx1ZT17Y29tcGV0aXRvci5wcm9tb3Rpb25TdHJhdGVneX1cclxuICAgICAgICAgIGlkPXtgcGxhY2Vob2xkZXJQcm9tb3Rpb24ke2NvbXBldGl0b3IuaW5kZXh9YH1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy13aGl0ZSByb3VuZGVkLTJ4bCBtdC0yIHAtMiB0ZXh0LXByaW1hcnlkYXJrIHRleHQtc20gcHgtNCBweS0zIGgtMjggbWF4LWgtMjggZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV2hhdCBhcmUgdGhlIGNvbXBhbnkgbWFya2V0aW5nIGFuZCBwcm9tb3Rpb25hbCBzdHJhdGVnaWVzP1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgICB7LyogUHJvbW90aW9uIGVuZCAqL31cclxuICAgICAgICA8ZGl2IGlkPXtgZGVzY3JpcHRpb25TdHJlbmd0aHMke2NvbXBldGl0b3IuaW5kZXh9YH0gY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlciBtdC02XCI+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cIi9jb21wZXRpdG9ycy9zdHJlbmd0aHMuc3ZnXCIgaGVpZ2h0PXsyMn0gd2lkdGg9ezIyfSAvPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5ZGFyayBtbC0yXCI+Q29tcGFueSBzdHJlbmd0aHM8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICB2YWx1ZT17Y29tcGV0aXRvci5jb21wYW55U3RyZW5ndGhzfVxyXG4gICAgICAgICAgaWQ9e2BwbGFjZWhvbGRlclN0cmVuZ3RocyR7Y29tcGV0aXRvci5pbmRleH1gfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIHJvdW5kZWQtMnhsIG10LTIgcC0yIHRleHQtcHJpbWFyeWRhcmsgdGV4dC1zbSBweC00IHB5LTMgaC0yOCBtYXgtaC0yOCBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJXaGF0IGRvIHlvdXIgY29tcGV0aXRvcnMgZG8gcmVhbGx5IHdlbGwgdGhhdCBkaWZmZXJlbnRpYXRlcyB0aGVtP1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgICB7LyogU3RyZW5ndGhzIGVuZCAqL31cclxuICAgICAgICA8ZGl2IGlkPXtgZGVzY3JpcHRpb25XZWFrbmVzc2VzJHtjb21wZXRpdG9yLmluZGV4fWB9IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXIgbXQtNlwiPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCIvY29tcGV0aXRvcnMvd2Vha25lc3Nlcy5zdmdcIiBoZWlnaHQ9ezIyfSB3aWR0aD17MjJ9IC8+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnlkYXJrIG1sLTJcIj5Db21wYW55IFdlYWtuZXNzZXM8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICB2YWx1ZT17Y29tcGV0aXRvci5jb21wYW55V2Vha25lc3Nlc31cclxuICAgICAgICAgIGlkPXtgcGxhY2Vob2xkZXJXZWFrbmVzc2VzJHtjb21wZXRpdG9yLmluZGV4fWB9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgcm91bmRlZC0yeGwgbXQtMiBwLTIgdGV4dC1wcmltYXJ5ZGFyayB0ZXh0LXNtIHB4LTQgcHktMyBoLTI4IG1heC1oLTI4IGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIldoYXQgZG8gdGhlIGNvbXBhbnkgY3VzdG9tZXJzIGNvbXBsYWluIGFib3V0IHRoZSBtb3N0LCBhbmQgd2hhdCBwcm9kdWN0cyBkbyB0aGV5IGxhY2s/XCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIHsvKiBXZWFrbmVzc2VzIGVuZCAqL31cclxuICAgICAgICA8ZGl2IGlkPXtgZGVzY3JpcHRpb25PcHBvcnR1bml0aWVzJHtjb21wZXRpdG9yLmluZGV4fWB9IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXIgbXQtNlwiPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCIvY29tcGV0aXRvcnMvb3Bwb3J0dW5pdGllczIuc3ZnXCIgaGVpZ2h0PXsyMn0gd2lkdGg9ezIyfSAvPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5ZGFyayBtbC0yXCI+T3Bwb3J0dW5pdGllczwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgIHZhbHVlPXtjb21wZXRpdG9yLm9wcG9ydHVuaXRpZXN9XHJcbiAgICAgICAgICBpZD17YHBsYWNlaG9sZGVyT3Bwb3J0dW5pdGllcyR7Y29tcGV0aXRvci5pbmRleH1gfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIHJvdW5kZWQtMnhsIG10LTIgcC0yIHRleHQtcHJpbWFyeWRhcmsgdGV4dC1zbSBweC00IHB5LTMgaC0yOCBtYXgtaC0yOCBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJXaGF0IGRpc3Rpbmd1aXNoIHlvdXIgc3RhcnR1cCBmcm9tIHRoaXMgcGFydGljdWxhciBjb21wZXRpdGl2ZSBjb21wYW55P1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgICB7LyogT3Bwb3J0dW5pdGllcyBlbmQgKi99XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVuaXF1ZUNvbXBldGl0b3JzUGFnZTtcclxuIiwiaW1wb3J0ICogYXMgYWRtaW4gZnJvbSAnZmlyZWJhc2UtYWRtaW4nO1xyXG5cclxuaWYgKCFhZG1pbi5hcHBzLmxlbmd0aCkge1xyXG4gIGFkbWluLmluaXRpYWxpemVBcHAoe1xyXG4gICAgY3JlZGVudGlhbDogYWRtaW4uY3JlZGVudGlhbC5jZXJ0KHtcclxuICAgICAgY2xpZW50X2VtYWlsOiAnZmlyZWJhc2UtYWRtaW5zZGstZWY4bXBAc2Fhcy1zdGFydHVwLWE1YTM0LmlhbS5nc2VydmljZWFjY291bnQuY29tJyxcclxuICAgICAgcHJpdmF0ZV9rZXk6XHJcbiAgICAgICAgJy0tLS0tQkVHSU4gUFJJVkFURSBLRVktLS0tLVxcbk1JSUV2QUlCQURBTkJna3Foa2lHOXcwQkFRRUZBQVNDQktZd2dnU2lBZ0VBQW9JQkFRQ2xaV2tpbTlQS0tyNTJcXG5EMFpERXV2NElUQkhVckkvclRwWE9ZenFKbnM0WTRiQkVQS2UyMDJvNU13TWJ1L2VnV0lmbWVMNUkrUlBnNkdxXFxubmpBRnFMbWF4WXZmMHdNV293RGlOVng3UGN1alIzZFU4QS9HWW95VFVRcFgvcXY2NzU0U3VKeG5tK0FBNkxrWVxcbmt2NUh0eXZRMVdZTHNDQjJNRjVpYS83M3dCdUg4K1Vrb21YNUdKMENGZ2V4azRxQW52aEh4dHY4V1p4WDNkbEZcXG5EWHg0RXg4L3V5YzlpL0k1MUQvTmhEa25BRy9zOFRHYk91dVR1N29CbnBwOGppdkpSTkVmK3B2amF0YndPaDhSXFxuNzgyUm5tbndzdTBQeklOQ2M1Ym96dHFtYUpFVzZwS2w4a05sbTlGdnBLY3djWU8ySXJmUkdXd1hMRjRvSzg4elxcbmNNM1hBWmxkQWdNQkFBRUNnZ0VBSEI3U1VicUp0ekV1UWJkV0hGaE91MWkxTXlNcHdDN05JUUJkWjRBVWFpRnRcXG55MHg4MjZwd21Uc1JRRG5xV1h2SStaTjU1aDhHbGNoTkI4dXVZWC91MHBRc3RHalZlUmRNc3FrYzZLMDRmckhMXFxuWmFzTkc0OHMxRzB1WTRpZXArTHVqc05KZ0VvZHV6bldJb24zWnEwTGE0Mmt0RzhGRGVNcVlQUjRuSm5TZEhvcVxcbm0zcFdmSmlyK3FuTUhzaVA1UVZSYzRnSVNVdWVLNzc2OTlFTDhyRnlNNGRXQ2JSZmk3WTBCQXUvcmtjRmJvaVBcXG4xSEhYRUovY1ZpR0txVkhMd3JzU2pjZUE0MlNQK25BaURVeHlMcUxoWk1vZVdBTWtvMUNPWjJYTmpjRVdEQm01XFxuQ2Q3UkNBMEtURFBXcmMwQmhqUlZ3d1B0QzdRVjFZK2t1aWtjdDdheVFRS0JnUURYYzVlaTVtMGIvaEQ3RG9TNVxcblNXQ3RwS3E5QmptdDZzcHJmdjlPTXlhdUM5bHliUDZLamtZL2hSR2xaSkgyd3hNdDMzclMrWFF4NXBKZzRLUlFcXG5DY3ZrRnI5YnJ2eGUveXJVQ0poMzJzUmszRjZMdjdDVUZIVUJmaWdacGZCdmppWlB5eW1HZzFLWGF5MU0zOE9hXFxuYzgvZHN6bmk1ckVMbHFsaXRoRkxpdURNZlFLQmdRREVoaWtJVWtYWlV3TmpmaEJVV3hGdTdnVkE0R3BjSlpMc1xcbmx1QXRzMm5MOTJNcllHK1p1eDFXWmtCdHgvUFE0WloyTjlpdzB6REF0SHB1Q3BqVnVsUnNadU5iRUtrUnlHb0xcXG5ndzFBaDRLUWYvZTM4QUV0SlB2WU43N01hRndEbCttYW5ncVRRWS9teU5xdFJtZTgzY214QkliLy9abXgycStIXFxuWFJYVXBPVDJZUUtCZ0hzTTQ4Ly85dFVEK0VMSytmYXc5K3gwbmFjenhRR1ZsV0pydC9pN3NoMjVXc25GZ21Nelxcbit0OFFheEdoTE5SWWViMjdZM1RYVUF1bituWW1GdkkzaGlHUTlGMnl4U1NrYTV1S0JUcCswYWdoVEVaWWhzc3NcXG5HOTlzWkE2eC9XNVpLM3hyTmg1REpvcWdoZERnQStGVXY2V0pWVWhJSlZuUEJKTUNGVUtsNE5vcEFvR0FWOW9sXFxubzZ1cnYvQWxOcWZYUXU2SEI1RHQxa2U4SkQ5RHcvSGFlM09WMnZGWGFyK3NoQXVxbk1JUEVVUnVrVFVYWHZldVxcbkxiWHJPR28xeE5XRjV4MXB1aC93aVBnVXJIZHNPSU00UEYyWGwyTXRhUk9vWXZjQ2duREJJWDJSaktXdmIwZ3hcXG5NQTBCK0VoWHdWZ1U3ZEF6NXFkQWRsVjNESlBYSGVzVjVENW1nR0VDZ1lCNXhSMGVhZUQ1VWpMc2RpOStzUVZSXFxuSnZ3cnNWbVFKamRib2JENlVqdTcwTTVoNmdBeVhaWGFqWDluYjk3c1V0bmpXWUZMV2NDT1l1T1ZhZjQrNXZaRlxcblZiL2sra2ZtWktQc1FJZHQ4Y1d2Syt0VlRpbGp4R1VqZi8rY2cvNmZ3Y1Y0akdoUEZaRFdMQmpDNWo1T1paSVpcXG41b3ZGK3JPWE9ON1hUOTlGRGJlREZRPT1cXG4tLS0tLUVORCBQUklWQVRFIEtFWS0tLS0tXFxuJyxcclxuICAgICAgcHJvamVjdF9pZDogJ3NhYXMtc3RhcnR1cC1hNWEzNCcsXHJcbiAgICB9KSxcclxuICAgIGRhdGFiYXNlVVJMOiAnaHR0cHM6Ly9zYWFzLXN0YXJ0dXAuZmlyZWJhc2Vpby5jb20nLFxyXG4gIH0pO1xyXG59XHJcblxyXG5jb25zdCBhdXRoID0gYWRtaW4uYXV0aCgpO1xyXG5jb25zdCBkYiA9IGFkbWluLmZpcmVzdG9yZSgpO1xyXG5cclxuZXhwb3J0IHsgYXV0aCwgZGIgfTtcclxuIiwiaW1wb3J0IGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlL2FwcCc7XHJcbmltcG9ydCAnZmlyZWJhc2UvYXV0aCc7XHJcbmltcG9ydCAnZmlyZWJhc2UvZmlyZXN0b3JlJztcclxuaW1wb3J0ICdmaXJlYmFzZS9zdG9yYWdlJztcclxuaW1wb3J0ICdmaXJlYmFzZS9mdW5jdGlvbnMnO1xyXG5cclxuaWYgKCFmaXJlYmFzZS5hcHBzLmxlbmd0aCkge1xyXG4gIGZpcmViYXNlLmluaXRpYWxpemVBcHAoe1xyXG4gICAgLy8gYXBpS2V5OiAnQUl6YVN5Q3hfVDBEcWl4TDNBWF9RTGwtajhYRHlnR3A5MUMtMy1RJyxcclxuICAgIC8vIGF1dGhEb21haW46ICdzdGFydHVwLXRlc3QtNGQ2MjUuZmlyZWJhc2VhcHAuY29tJyxcclxuICAgIC8vIHByb2plY3RJZDogJ3N0YXJ0dXAtdGVzdC00ZDYyNScsXHJcbiAgICAvLyBzdG9yYWdlQnVja2V0OiAnc3RhcnR1cC10ZXN0LTRkNjI1LmFwcHNwb3QuY29tJyxcclxuICAgIC8vIG1lc3NhZ2luZ1NlbmRlcklkOiAnNDcyNDE2MTUwMjQwJyxcclxuICAgIC8vIGFwcElkOiAnMTo0NzI0MTYxNTAyNDA6d2ViOmIyYTEyOGFkMjdhZmZmZGRmM2U2ODUnLFxyXG4gICAgYXBpS2V5OiAnQUl6YVN5Qk9TZnVBZjdWQUs5WWVjMjBsR3JEXzZicTVNTlJtOXNFJyxcclxuICAgIGF1dGhEb21haW46ICdzYWFzLXN0YXJ0dXAtYTVhMzQuZmlyZWJhc2VhcHAuY29tJyxcclxuICAgIHByb2plY3RJZDogJ3NhYXMtc3RhcnR1cC1hNWEzNCcsXHJcbiAgICBzdG9yYWdlQnVja2V0OiAnc2Fhcy1zdGFydHVwLWE1YTM0LmFwcHNwb3QuY29tJyxcclxuICAgIG1lc3NhZ2luZ1NlbmRlcklkOiAnODY0MjE3NTc0NjI1JyxcclxuICAgIGFwcElkOiAnMTo4NjQyMTc1NzQ2MjU6d2ViOjE5Y2Y1OTAxMDllZjUwZGQ5MzViYTAnLFxyXG4gICAgbWVhc3VyZW1lbnRJZDogJ0ctUUtaSlBUS01TNCcsXHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZpcmViYXNlO1xyXG5leHBvcnQgY29uc3QgYXV0aCA9IGZpcmViYXNlLmF1dGgoKTtcclxuZXhwb3J0IGNvbnN0IGRiID0gZmlyZWJhc2UuZmlyZXN0b3JlKCk7XHJcbmV4cG9ydCBjb25zdCBzdG9yYWdlID0gZmlyZWJhc2Uuc3RvcmFnZSgpO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBkYiB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2xpYi9maXJlYmFzZS1hZG1pbic7XHJcbmltcG9ydCB7IGRiIGFzIGRiQ2xpZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vbGliL2ZpcmViYXNlJztcclxuaW1wb3J0IHsgaXNNb2JpbGUgfSBmcm9tICdyZWFjdC1kZXZpY2UtZGV0ZWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnO1xyXG5pbXBvcnQgVW5pcXVlRWxlbWVudCBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb25lbnRzL2Rhc2hib2FyZC9zdGFydHVwL3Byb2plY3QvYnVzaW5lc3MtYXBwL2NvbXBldGl0b3JzL1VuaXF1ZUVsZW1lbnQnO1xyXG5pbXBvcnQgQm91bmNlTG9hZGVyQ29tcG9uZW50IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvQm91bmNlTG9hZGVyJztcclxuY29uc3Qgc2FmZUpzb25TdHJpbmdpZnkgPSByZXF1aXJlKCdzYWZlLWpzb24tc3RyaW5naWZ5Jyk7XHJcbmltcG9ydCB7IHVzZVdpbmRvd1NpemUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi91dGlscy91c2VXaW5kb3dTaXplJztcclxuXHJcbmltcG9ydCBEYXRlUGlja2VyIGZyb20gJ3JlYWN0LWRhdGVwaWNrZXInO1xyXG5pbXBvcnQgeyBhZGRZZWFycywgZm9ybWF0IH0gZnJvbSAnZGF0ZS1mbnMnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcblxyXG5jb25zdCBVbmlxdWVDYXNoZmxvd1BhZ2UgPSAoeyBwcm9qZWN0IH0pID0+IHtcclxuICBjb25zb2xlLmxvZygnUGFydGljdWxhciBwcm9qZWN0IC0tPiAnLCBwcm9qZWN0KTtcclxuICBjb25zdCBbc3RhcnREYXRlLCBzZXRTdGFydERhdGVdID0gdXNlU3RhdGUobmV3IERhdGUoKSk7XHJcbiAgY29uc3QgW2VuZERhdGUsIHNldEVuZERhdGVdID0gdXNlU3RhdGUobmV3IERhdGUoKSk7XHJcbiAgY29uc3QgW3NlbGVjdGVkUHJvamVjdCwgc2V0U2VsZWN0ZWRQcm9qZWN0XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtyZXZlbnVlRWxlbWVudHMsIHNldFJldmVudWVFbGVtZW50c10gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtjb3N0c0VsZW1lbnRzLCBzZXRDb3N0c0VsZW1lbnRzXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW3BlcmlvZHMsIHNldFBlcmlvZHNdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbdGF4LCBzZXRUYXhdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBzaXplID0gdXNlV2luZG93U2l6ZSgpO1xyXG4gIC8vIFN1bSBkYXRhXHJcbiAgY29uc3QgW3RvdGFsUmV2ZW51ZSwgc2V0VG90YWxSZXZlbnVlXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW21vbnRobHlSZXZlbnVlLCBzZXRNb250aGx5UmV2ZW51ZV0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFt0b3RhbENvc3RzLCBzZXRUb3RhbENvc3RzXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW21vbnRobHlDb3N0cywgc2V0TW9udGhseUNvc3RzXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW2dyb3NzUHJvZml0LCBzZXRHcm9zc1Byb2ZpdF0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtuZXRQcm9maXQsIHNldE5ldFByb2ZpdF0gPSB1c2VTdGF0ZSgpO1xyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHByb2plY3QgJiYgc2V0U2VsZWN0ZWRQcm9qZWN0KHByb2plY3RbMF0pO1xyXG4gICAgcHJvamVjdCAmJiBzZXRSZXZlbnVlRWxlbWVudHMocHJvamVjdFswXS5yZXZlbnVlRWxlbWVudHMpO1xyXG4gICAgcHJvamVjdCAmJiBzZXRDb3N0c0VsZW1lbnRzKHByb2plY3RbMF0uY29zdHNFbGVtZW50cyk7XHJcbiAgICBwcm9qZWN0ICYmIHNldFBlcmlvZHMocHJvamVjdFswXS5wZXJpb2RzKTtcclxuICAgIHByb2plY3QgJiYgc2V0VGF4KHByb2plY3RbMF0udGF4KTtcclxuICAgIC8vIFN1bSBkYXRhXHJcbiAgICAvLyBHbG9iYWwgc3RhcnQgZGF0ZVxyXG4gICAgY29uc3QgY2hhbmdlZFN0YXJ0RGF0ZSA9IHByb2plY3RbMF0uZ2xvYmFsU3RhcnREYXRlLl9zZWNvbmRzICogMTAwMDtcclxuICAgIGNvbnNvbGUubG9nKGNoYW5nZWRTdGFydERhdGUpO1xyXG4gICAgcHJvamVjdFswXS5nbG9iYWxTdGFydERhdGUgIT09ICcnICYmIHNldFN0YXJ0RGF0ZShuZXcgRGF0ZShjaGFuZ2VkU3RhcnREYXRlKSk7XHJcbiAgICBjb25zdCBjaGFuZ2VkRW5kRGF0ZSA9IHByb2plY3RbMF0uZ2xvYmFsRW5kRGF0ZS5fc2Vjb25kcyAqIDEwMDA7XHJcbiAgICAvLyBHbG9iYWwgZW5kIGRhdGVcclxuICAgIHByb2plY3RbMF0uZ2xvYmFsRW5kRGF0ZSAhPT0gJycgJiYgc2V0RW5kRGF0ZShuZXcgRGF0ZShjaGFuZ2VkRW5kRGF0ZSkpO1xyXG4gICAgLy8gUGVyaW9kc1xyXG4gICAgc2V0UGVyaW9kcyhwcm9qZWN0WzBdLnBlcmlvZHMpO1xyXG4gICAgLy8gVG90YWwgcmV2ZW51ZVxyXG4gICAgY29uc3QgdG90YWxSZXZlbnVlQXJyYXkgPSBwcm9qZWN0WzBdLnJldmVudWVFbGVtZW50cy5tYXAoKGVsZW1lbnQpID0+IHBhcnNlSW50KGVsZW1lbnQudmFsdWUgKiBlbGVtZW50LnBlcmlvZHMubGVuZ3RoKSk7XHJcbiAgICBjb25zdCB0b3RhbFJldmVudWUgPSB0b3RhbFJldmVudWVBcnJheS5yZWR1Y2UoKGEsIGIpID0+IHtcclxuICAgICAgcmV0dXJuIGEgKyBiO1xyXG4gICAgfSwgMCk7XHJcbiAgICBzZXRUb3RhbFJldmVudWUoTnVtYmVyLmlzTmFOKHRvdGFsUmV2ZW51ZSkgPyAwIDogTWF0aC5yb3VuZCh0b3RhbFJldmVudWUpKTtcclxuICAgIC8vIE1vbnRobHkgcmV2ZW51ZVxyXG4gICAgY29uc3QgcGVyaW9kTGVuZ3RoID0gcHJvamVjdFswXS5wZXJpb2RzLmxlbmd0aDtcclxuICAgIGNvbnN0IG1vbnRobHlSZXZlbnVlID0gdG90YWxSZXZlbnVlIC8gcGVyaW9kTGVuZ3RoO1xyXG4gICAgc2V0TW9udGhseVJldmVudWUoTnVtYmVyLmlzTmFOKG1vbnRobHlSZXZlbnVlKSA/IDAgOiBNYXRoLnJvdW5kKG1vbnRobHlSZXZlbnVlKSk7XHJcbiAgICAvLyBUb3RhbCBjb3N0c1xyXG4gICAgY29uc3QgdG90YWxDb3N0c0FycmF5ID0gcHJvamVjdFswXS5jb3N0c0VsZW1lbnRzLm1hcCgoZWxlbWVudCkgPT4gcGFyc2VJbnQoZWxlbWVudC52YWx1ZSAqIGVsZW1lbnQucGVyaW9kcy5sZW5ndGgpKTtcclxuICAgIGNvbnN0IHRvdGFsQ29zdHMgPSB0b3RhbENvc3RzQXJyYXkucmVkdWNlKChhLCBiKSA9PiB7XHJcbiAgICAgIHJldHVybiBhICsgYjtcclxuICAgIH0sIDApO1xyXG4gICAgc2V0VG90YWxDb3N0cyhOdW1iZXIuaXNGaW5pdGUodG90YWxDb3N0cykgPyBNYXRoLnJvdW5kKHRvdGFsQ29zdHMpIDogMCk7XHJcbiAgICAvLyBNb250aGx5IGNvc3RzXHJcbiAgICBjb25zdCBtb250aGx5Q29zdHMgPSB0b3RhbENvc3RzIC8gcGVyaW9kTGVuZ3RoO1xyXG4gICAgc2V0TW9udGhseUNvc3RzKE51bWJlci5pc0Zpbml0ZShtb250aGx5Q29zdHMpID8gTWF0aC5yb3VuZChtb250aGx5Q29zdHMpIDogMCk7XHJcbiAgICAvLyBHcm9zcyBwcm9maXRcclxuICAgIGNvbnN0IGdyb3NzUHJvZml0ID0gdG90YWxSZXZlbnVlIC0gdG90YWxDb3N0cztcclxuICAgIHNldEdyb3NzUHJvZml0KE51bWJlci5pc0Zpbml0ZShncm9zc1Byb2ZpdCkgPyBNYXRoLnJvdW5kKGdyb3NzUHJvZml0KSA6IDApO1xyXG4gICAgLy8gTmV0IHByb2ZpdFxyXG4gICAgY29uc3QgdGF4ID0gcGFyc2VJbnQocHJvamVjdFswXS50YXgpO1xyXG4gICAgY29uc3QgbmV0UHJvZml0ID0gZ3Jvc3NQcm9maXQgLSAodGF4IC8gMTAwKSAqIGdyb3NzUHJvZml0O1xyXG4gICAgc2V0TmV0UHJvZml0KE51bWJlci5pc0Zpbml0ZShuZXRQcm9maXQpID8gTWF0aC5yb3VuZChuZXRQcm9maXQpIDogMCk7XHJcbiAgfSwgW3Byb2plY3RdKTtcclxuICAvLyAgIGNvbnN0IFtjb21wZXRpdG9ycywgc2V0Q29tcGV0aXRvcnNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAvLyBDaGFydFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBjb25zdCBteUNoYXJ0UmVmID0gY2hhcnRSZWYuY3VycmVudC5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGNoYXJ0Q29udGFpbmVyYCkuaW5uZXJIVE1MID0gJyZuYnNwOyc7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgY2hhcnRDb250YWluZXJgKS5pbm5lckhUTUwgPSBgPGNhbnZhcyBoZWlnaHQ9JyR7c2l6ZS53aWR0aCA+IDY4MCA/IDc1IDogJ3Vuc2V0J30nIGlkPSdjaGFydCc+PC9jYW52YXM+YDtcclxuICAgIGNvbnN0IG15Q2hhcnRSZWYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hhcnQnKS5nZXRDb250ZXh0KCcyZCcpO1xyXG5cclxuICAgIC8vIFJldmVudWUgZGF0YXNldHNcclxuICAgIGNvbnN0IHJldmVudWVEYXRhc2V0ID0gW107XHJcbiAgICBjb25zdCB0ZXN0QXJyYXkgPSBbXTtcclxuICAgIC8vIGNvbnN0IG1vbnRoRGF0YSA9IHBlcmlvZHMgJiYgcGVyaW9kcy5tYXAoKCkgPT4gbnVsbCk7XHJcbiAgICByZXZlbnVlRWxlbWVudHMgJiZcclxuICAgICAgcmV2ZW51ZUVsZW1lbnRzLm1hcCgocmV2ZW51ZUVsZW1lbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgbW9udGhEYXRhID0gcGVyaW9kcyAmJiBwZXJpb2RzLm1hcCgoKSA9PiBudWxsKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXZlbnVlRWxlbWVudCk7XHJcbiAgICAgICAgcGVyaW9kcyAmJlxyXG4gICAgICAgICAgcGVyaW9kcy5tYXAoKHBlcmlvZCwgcGVyaW9kSW5kZXgpID0+IHtcclxuICAgICAgICAgICAgcmV2ZW51ZUVsZW1lbnQucGVyaW9kcy5tYXAoKHJldmVudWVQZXJpb2QpID0+IHtcclxuICAgICAgICAgICAgICBpZiAocGVyaW9kID09IHJldmVudWVQZXJpb2QpIHtcclxuICAgICAgICAgICAgICAgIGlmIChtb250aERhdGFbcGVyaW9kSW5kZXhdID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgbW9udGhEYXRhW3BlcmlvZEluZGV4XSA9IHJldmVudWVFbGVtZW50LnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhtb250aERhdGEpO1xyXG4gICAgICAgIHRlc3RBcnJheS5wdXNoKG1vbnRoRGF0YSk7XHJcbiAgICAgICAgcmV2ZW51ZURhdGFzZXQucHVzaCh7XHJcbiAgICAgICAgICBsYWJlbDogYHJldmVudWUgLyAke3JldmVudWVFbGVtZW50LnRpdGxlfWAsXHJcbiAgICAgICAgICBkYXRhOiBtb250aERhdGEsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHJldmVudWVFbGVtZW50LmNvbG9yLFxyXG4gICAgICAgICAgYm9yZGVyQ29sb3I6IHJldmVudWVFbGVtZW50LmNvbG9yLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAvLyBDb3N0cyBkYXRhc2V0c1xyXG4gICAgY29uc3QgY29zdHNEYXRhc2V0ID0gW107XHJcbiAgICBjb3N0c0VsZW1lbnRzICYmXHJcbiAgICAgIGNvc3RzRWxlbWVudHMubWFwKChjb3N0c0VsZW1lbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgbW9udGhEYXRhID0gcGVyaW9kcyAmJiBwZXJpb2RzLm1hcCgoKSA9PiBudWxsKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhjb3N0c0VsZW1lbnQpO1xyXG4gICAgICAgIHBlcmlvZHMgJiZcclxuICAgICAgICAgIHBlcmlvZHMubWFwKChwZXJpb2QsIHBlcmlvZEluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGNvc3RzRWxlbWVudC5wZXJpb2RzLm1hcCgoY29zdHNQZXJpb2QpID0+IHtcclxuICAgICAgICAgICAgICBpZiAocGVyaW9kID09IGNvc3RzUGVyaW9kKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobW9udGhEYXRhW3BlcmlvZEluZGV4XSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgIG1vbnRoRGF0YVtwZXJpb2RJbmRleF0gPSAtY29zdHNFbGVtZW50LnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhtb250aERhdGEpO1xyXG4gICAgICAgIHRlc3RBcnJheS5wdXNoKG1vbnRoRGF0YSk7XHJcbiAgICAgICAgY29zdHNEYXRhc2V0LnB1c2goe1xyXG4gICAgICAgICAgbGFiZWw6IGBjb3N0cyAvICR7Y29zdHNFbGVtZW50LnRpdGxlfWAsXHJcbiAgICAgICAgICBkYXRhOiBtb250aERhdGEsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvc3RzRWxlbWVudC5jb2xvcixcclxuICAgICAgICAgIGJvcmRlckNvbG9yOiBjb3N0c0VsZW1lbnQuY29sb3IsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgLy8gUmV2ZW51ZVxyXG4gICAgY29uc3QgcmV2ZW51ZUFycmF5ID0gW107XHJcbiAgICByZXZlbnVlRGF0YXNldC5sZW5ndGggIT09IDAgJiZcclxuICAgICAgcmV2ZW51ZURhdGFzZXQubGVuZ3RoICE9PSAwICYmXHJcbiAgICAgIHJldmVudWVEYXRhc2V0Lm1hcCgoZWxlbWVudCkgPT5cclxuICAgICAgICByZXZlbnVlQXJyYXkucHVzaChcclxuICAgICAgICAgIGVsZW1lbnQuZGF0YSAmJlxyXG4gICAgICAgICAgICBlbGVtZW50LmRhdGEubWFwKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKGRhdGEgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwYXJzZUludChkYXRhKTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIClcclxuICAgICAgKTtcclxuICAgIGNvbnNvbGUubG9nKHJldmVudWVBcnJheSk7XHJcbiAgICBjb25zdCBjYWxjdWxhdGVkUmV2ZW51ZUFycmF5ID1cclxuICAgICAgcmV2ZW51ZUFycmF5Lmxlbmd0aCAhPT0gMCAmJiByZXZlbnVlQXJyYXlbMF0gIT09IHVuZGVmaW5lZCAmJiByZXZlbnVlQXJyYXkucmVkdWNlKChhLCBiKSA9PiBhLm1hcCgoYywgaSkgPT4gYyArIGJbaV0pKTtcclxuICAgIGNvbnNvbGUubG9nKGNhbGN1bGF0ZWRSZXZlbnVlQXJyYXkpO1xyXG4gICAgLy8gQ29zdHNcclxuICAgIGNvbnN0IGNvc3RzQXJyYXkgPSBbXTtcclxuICAgIGNvbnNvbGUubG9nKGNvc3RzRGF0YXNldCk7XHJcbiAgICBjb3N0c0RhdGFzZXQubGVuZ3RoICE9PSAwICYmXHJcbiAgICAgIGNvc3RzRGF0YXNldC5sZW5ndGggIT09IDAgJiZcclxuICAgICAgY29zdHNEYXRhc2V0Lm1hcCgoZWxlbWVudCkgPT5cclxuICAgICAgICBjb3N0c0FycmF5LnB1c2goXHJcbiAgICAgICAgICBlbGVtZW50LmRhdGEgJiZcclxuICAgICAgICAgICAgZWxlbWVudC5kYXRhLm1hcCgoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChkYXRhICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQoZGF0YSk7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICApXHJcbiAgICAgICk7XHJcbiAgICBjb25zb2xlLmxvZyhjb3N0c0FycmF5KTtcclxuICAgIGNvbnN0IGNhbGN1bGF0ZWRDb3N0c0FycmF5ID1cclxuICAgICAgY29zdHNBcnJheS5sZW5ndGggIT09IDAgJiYgY29zdHNBcnJheVswXSAhPT0gdW5kZWZpbmVkICYmIGNvc3RzQXJyYXkucmVkdWNlKChhLCBiKSA9PiBhLm1hcCgoYywgaSkgPT4gYyArIGJbaV0pKTtcclxuICAgIGNvbnNvbGUubG9nKGNhbGN1bGF0ZWRDb3N0c0FycmF5KTtcclxuICAgIC8vIEZpbmFsIHZhbHVlXHJcbiAgICBjb25zdCBmaW5hbEFycmF5ID0gW2NhbGN1bGF0ZWRSZXZlbnVlQXJyYXksIGNhbGN1bGF0ZWRDb3N0c0FycmF5XTtcclxuICAgIGNvbnNvbGUubG9nKGZpbmFsQXJyYXkpO1xyXG4gICAgLy8gQ2hlY2sgaWYgYW55IGFycmF5IGlzIGZhbHN5XHJcbiAgICBjb25zdCBjYWxjdWxhdGVkRmluYWxBcnJheSA9XHJcbiAgICAgIGZpbmFsQXJyYXkgJiZcclxuICAgICAgZmluYWxBcnJheS5tYXAoKGFycmF5KSA9PiB7XHJcbiAgICAgICAgaWYgKCFhcnJheSkge1xyXG4gICAgICAgICAgY29uc3QgemVyb0FycmF5ID0gW107XHJcbiAgICAgICAgICBwZXJpb2RzICYmIHBlcmlvZHMubWFwKChwZXJpb2QpID0+IHplcm9BcnJheS5wdXNoKDApKTtcclxuICAgICAgICAgIHJldHVybiB6ZXJvQXJyYXk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiBhcnJheTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgY29uc29sZS5sb2coY2FsY3VsYXRlZEZpbmFsQXJyYXkpO1xyXG4gICAgY29uc3QgZmluYWxEYXRhQmVmb3JlVGF4ID1cclxuICAgICAgY2FsY3VsYXRlZEZpbmFsQXJyYXkubGVuZ3RoICE9PSAwICYmIGNhbGN1bGF0ZWRGaW5hbEFycmF5LnJlZHVjZSgoYSwgYikgPT4gYSAmJiBiICYmIGEubWFwKChjLCBpKSA9PiBjICsgYltpXSkpO1xyXG4gICAgY29uc3QgZmluYWxEYXRhQWZ0ZXJUYXggPSBmaW5hbERhdGFCZWZvcmVUYXggJiYgZmluYWxEYXRhQmVmb3JlVGF4Lm1hcCgoZGF0YSkgPT4gZGF0YSAtICh0YXggLyAxMDApICogZGF0YSk7XHJcbiAgICBjb25zb2xlLmxvZyhmaW5hbERhdGFBZnRlclRheCk7XHJcblxyXG4gICAgY29uc3QgbmV0V29ydGhBcnJheSA9IFtdO1xyXG4gICAgY29uc3QgbmV0V29ydGggPVxyXG4gICAgICByZXZlbnVlRGF0YXNldC5sZW5ndGggIT09IDAgJiZcclxuICAgICAgY29zdHNEYXRhc2V0Lmxlbmd0aCAhPT0gMCAmJlxyXG4gICAgICByZXZlbnVlRGF0YXNldCAmJlxyXG4gICAgICByZXZlbnVlRGF0YXNldC5tYXAoKHJldmVudWVFbGVtZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID1cclxuICAgICAgICAgIHJldmVudWVFbGVtZW50LmRhdGEgJiZcclxuICAgICAgICAgIHJldmVudWVFbGVtZW50LmRhdGEubWFwKChkYXRhRWxlbWVudCwgcmV2ZW51ZUVsZW1lbnRJbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhRWxlbWVudCk7XHJcbiAgICAgICAgICAgIGlmIChkYXRhRWxlbWVudCAhPT0gbnVsbCAmJiBjb3N0c0RhdGFzZXRbaW5kZXhdKSB7XHJcbiAgICAgICAgICAgICAgaWYgKGNvc3RzRGF0YXNldFtpbmRleF0uZGF0YVtyZXZlbnVlRWxlbWVudEluZGV4XSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZ3Jvc3NQcm9maXQgPSBkYXRhRWxlbWVudCAtIC1jb3N0c0RhdGFzZXRbMF0uZGF0YVtyZXZlbnVlRWxlbWVudEluZGV4XTtcclxuICAgICAgICAgICAgICAgIG5ldFdvcnRoQXJyYXkucHVzaChncm9zc1Byb2ZpdCAtICh0YXggLyAxMDApICogZ3Jvc3NQcm9maXQpO1xyXG4gICAgICAgICAgICAgICAgLy8gcmV0dXJuIGdyb3NzUHJvZml0IC0gKHRheCAvIDEwMCkgKiBncm9zc1Byb2ZpdDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgbmV3IENoYXJ0KG15Q2hhcnRSZWYsIHtcclxuICAgICAgdHlwZTogJ2JhcicsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBsYWJlbHM6IHBlcmlvZHMgJiYgcGVyaW9kcyxcclxuICAgICAgICBkYXRhc2V0czogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnbGluZScsXHJcbiAgICAgICAgICAgIGxhYmVsOiAnTmV0IHByb2ZpdCcsXHJcbiAgICAgICAgICAgIGRhdGE6IGZpbmFsRGF0YUFmdGVyVGF4LFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDEwLCAxOCwgNDgsIDEpJyxcclxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICdyZ2JhKDEwLCAxOCwgNDgsIDEpJyxcclxuICAgICAgICAgICAgZmlsbDogMCxcclxuICAgICAgICAgICAgbGluZVRlbnNpb246IDAsXHJcbiAgICAgICAgICAgIGJvcmRlcldpZHRoOiBzaXplLndpZHRoIDwgNjgwID8gMSA6IDMsXHJcbiAgICAgICAgICAgIHBvaW50UmFkaXVzOiBzaXplLndpZHRoIDwgNjgwID8gMiA6IDMsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgLi4ucmV2ZW51ZURhdGFzZXQsXHJcbiAgICAgICAgICAuLi5jb3N0c0RhdGFzZXQsXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgIHNraXBOdWxsOiB0cnVlLFxyXG4gICAgICAgIHJlc3BvbnNpdmU6IHRydWUsXHJcbiAgICAgICAgcGx1Z2luczoge1xyXG4gICAgICAgICAgbGVnZW5kOiB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiAncmlnaHQnLFxyXG4gICAgICAgICAgICBsYWJlbHM6IHtcclxuICAgICAgICAgICAgICBmb250RmFtaWx5OiAnQ29tZm9ydGFhJyxcclxuICAgICAgICAgICAgICBmb250OiB7XHJcbiAgICAgICAgICAgICAgICBzaXplOiBzaXplLndpZHRoIDwgNjgwID8gOCA6IDEyLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgYm94V2lkdGg6IHNpemUud2lkdGggPCA2ODAgPyAxMCA6IDQwLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNjYWxlczoge1xyXG4gICAgICAgICAgeDoge1xyXG4gICAgICAgICAgICBzdGFja2VkOiB0cnVlLFxyXG4gICAgICAgICAgICB0aWNrczoge1xyXG4gICAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdDb21mb3J0YWEnLFxyXG4gICAgICAgICAgICAgIGJlZ2luQXRaZXJvOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGZvbnQ6IHtcclxuICAgICAgICAgICAgICAgIHNpemU6IHNpemUud2lkdGggPCA2ODAgPyA4IDogMTIsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgLy8gYmVnaW5BdFplcm86IHRydWUsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgeToge1xyXG4gICAgICAgICAgICBzdGFja2VkOiB0cnVlLFxyXG4gICAgICAgICAgICB0aWNrczoge1xyXG4gICAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdDb21mb3J0YWEnLFxyXG4gICAgICAgICAgICAgIGJlZ2luQXRaZXJvOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGZvbnQ6IHtcclxuICAgICAgICAgICAgICAgIHNpemU6IHNpemUud2lkdGggPCA2ODAgPyA4IDogMTIsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgLy8gYmVnaW5BdFplcm86IHRydWUsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9LCBbcGVyaW9kcywgcmV2ZW51ZUVsZW1lbnRzLCBjb3N0c0VsZW1lbnRzLCB0YXhdKTtcclxuXHJcbiAgaWYgKHJvdXRlci5pc0ZhbGxiYWNrKSB7XHJcbiAgICByZXR1cm4gPEJvdW5jZUxvYWRlckNvbXBvbmVudCAvPjtcclxuICB9XHJcblxyXG4gIGNvbnNvbGUubG9nKHN0YXJ0RGF0ZSk7XHJcbiAgY29uc29sZS5sb2coZW5kRGF0ZSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIHctZnVsbCByZWxhdGl2ZSBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtYXgtdy1mdWxsIHJlbGF0aXZlIG10LTggbGcxQ29udGFpbmVyOm10LTggbWItMTYgcHgtMzJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGdyaWQgZ3JpZC1jb2xzLTIgZ3JpZC1yb3dzLTEgZ3JpZC1mbG93LWNvbFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgaGVpZ2h0PXsoc2l6ZS53aWR0aCA+IDg2MCAmJiAzMCkgfHwgKHNpemUud2lkdGggPCA4NjAgJiYgc2l6ZS53aWR0aCA+IDY4MCAmJiAyNikgfHwgKHNpemUud2lkdGggPCA2ODAgJiYgMjIpfVxyXG4gICAgICAgICAgICAgIHdpZHRoPXsoc2l6ZS53aWR0aCA+IDg2MCAmJiAzMCkgfHwgKHNpemUud2lkdGggPCA4NjAgJiYgc2l6ZS53aWR0aCA+IDY4MCAmJiAyNikgfHwgKHNpemUud2lkdGggPCA2ODAgJiYgMjIpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZpbGwtY3VycmVudCB0ZXh0LXByaW1hcnkgZGFyazp0ZXh0LXByaW1hcnlkYXJrXCJcclxuICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDEyOCAxMjhcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPHRpdGxlPkxhbmRpbmcgU3VjY2VzczwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgPGcgaWQ9XCJMYW5kaW5nX1N1Y2Nlc3NcIiBkYXRhLW5hbWU9XCJMYW5kaW5nIFN1Y2Nlc3NcIj5cclxuICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNscy0xXCJcclxuICAgICAgICAgICAgICAgICAgZD1cIk0xMDkuMyw5MC4xQTQ2LDQ2LDAsMCwwLDY1LDM2VjIwLjA4YzEuNzgtLjYyLDcuMjEtMi4xNCwxMi41Ny4yM2ExOS4zMywxOS4zMywwLDAsMCwxNC44MiwwYy44Ny0uMzguNjEuMzEuNjEtMTcuOTNhMSwxLDAsMCwwLTEuNDMtLjkzYy0uMDcsMC02LjY5LDIuODctMTMuMTgsMEExOS40MSwxOS40MSwwLDAsMCw2NSwuOTMsMSwxLDAsMCwwLDYzLDFWMzZhNDUuODYsNDUuODYsMCwwLDAtMjguNjYsMTAuOEMxNi4xOCw0MC40OCw0LDQwLC43OSw0NS41MS0yLjI5LDUwLjg2LDMuOTQsNTkuMywxMCw2NS42OEExMSwxMSwwLDAsMCwxOCw4M2MuODEsMzguNDEsNDYuMDgsNTkuMiw3NS42NiwzNC4yMSw4LjUzLDMsMjksOS4xNSwzMy41NSwxLjMxQzEzMC4zOSwxMTMsMTIzLjg2LDEwMi42NSwxMDkuMyw5MC4xWk03Ny41OSwzLjMxQTE5LjM5LDE5LjM5LDAsMCwwLDkxLDMuODNWMTguNjhjLTEuNzkuNjItNy4yMiwyLjEzLTEyLjU3LS4yM0ExOS4xOSwxOS4xOSwwLDAsMCw2NSwxNy45M1YzLjA4QzY2LjgxLDIuNDYsNzIuMjQsMSw3Ny41OSwzLjMxWk02NSw0NXYtN2MzOS42OS45MSw1OCw1MC4yNywyOC4yMSw3Ni44MUM3MS4zMiwxMDcsNDYsOTIuNjYsMjcuNzcsNzguNjRhMTEsMTEsMCwwLDAtMy4yLTE2LjEzQTQzLjg4LDQzLjg4LDAsMCwxLDYzLDM4LjA2VjQ1QTEsMSwwLDAsMCw2NSw0NVpNMzIuNTUsNDguMzZhNDYuMjEsNDYuMjEsMCwwLDAtOS44MywxMy4yOCwxMC45MywxMC45MywwLDAsMC0xMS40LDIuNDdDLTguMzksNDMuMjMsNS4yMywzOS4wOCwzMi41NSw0OC4zNlpNMTAsNzJhOSw5LDAsMSwxLDksOUE5LDksMCwwLDEsMTAsNzJabTEwLDExYTExLDExLDAsMCwwLDYuMzQtMi44MmMxOC40NSwxNC4yMSw0My40NSwyOC4zNSw2NS4wNSwzNi4yMkM2MywxMzkuMTYsMjAuODMsMTE5LjEsMjAuMDUsODNabTEwNS40LDM0LjVjLTIuNTEsNC4zNS0xNCwzLjYyLTMwLTEuODVhNDUuNjEsNDUuNjEsMCwwLDAsMTMuNDItMjMuMjFDMTIxLjU5LDEwMy41OCwxMjgsMTEzLjEyLDEyNS40NSwxMTcuNDdaXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5ZGFyayB0ZXh0LWxnIG1kQ29udGFpbmVyOnRleHQteGwgbGdDb250YWluZXI6dGV4dC0yeGwgbXQtMiBwbC0yIGRhcms6dGV4dC1iYWNrZ3JvdW5kXCI+XHJcbiAgICAgICAgICAgICAgQ2FzaCBmbG93IGFuYWx5c2lzXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1zZWNvbmRhcnkgdGV4dC14cyBtZENvbnRhaW5lcjp0ZXh0LXNtIGxnQ29udGFpbmVyOnRleHQtYmFzZSB0ZXh0LWdyYXkgcmVsYXRpdmUgLXRvcC0xIGxnQ29udGFpbmVyOnRvcC0wXCI+XHJcbiAgICAgICAgICAgIE1hbmFnZSB5b3VyIHN0YXJ0dXAgY2FzaCBmbG93XHJcbiAgICAgICAgICA8L2gxPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGdyaWQgZ3JpZC1jb2xzLTJmciBncmlkLXJvd3MtMWZyIGxnQ29udGFpbmVyOmdyaWQtY29scy0zZnIgbGdDb250YWluZXI6Z3JpZC1yb3dzLTFmciBnYXAteS04IGdhcC14LTYgc21Db250YWluZXI6Z2FwLXgtMzIgbWRDb250YWluZXI6Z2FwLXgtMTIgbXQtMTJcIj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgaWQ9XCJtYWluLWRhdGVwaWNrZXJcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgcm91bmRlZC0yeGwgcHktMyBweC0zIG1kQ29udGFpbmVyOnB5LTMgbWRDb250YWluZXI6cHgtNCBsZ0NvbnRhaW5lcjpweC02IGxnQ29udGFpbmVyOnB5LTQgc2hhZG93LW1kIGdyaWQgZ3JpZC1jb2xzLTJmciBpdGVtcy1jZW50ZXIgdGV4dC14cyBtZENvbnRhaW5lcjp0ZXh0LXNtIGxnQ29udGFpbmVyOnRleHQtYmFzZVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9XCIvY2FzaC1mbG93L2NhbGVuZGFyLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9eyhzaXplLndpZHRoID4gODYwICYmIDI1KSB8fCAoc2l6ZS53aWR0aCA8IDg2MCAmJiBzaXplLndpZHRoID4gNjgwICYmIDIyKSB8fCAoc2l6ZS53aWR0aCA8IDY4MCAmJiAxOCl9XHJcbiAgICAgICAgICAgICAgICB3aWR0aD17KHNpemUud2lkdGggPiA4NjAgJiYgMjUpIHx8IChzaXplLndpZHRoIDwgODYwICYmIHNpemUud2lkdGggPiA2ODAgJiYgMjIpIHx8IChzaXplLndpZHRoIDwgNjgwICYmIDE4KX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1sLTIgdGV4dC1wcmltYXJ5ZGFya1wiPlN0YXJ0OjwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtzdGFydERhdGUgJiYgIWlzTW9iaWxlID8gKFxyXG4gICAgICAgICAgICAgIDxEYXRlUGlja2VyXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZD17c3RhcnREYXRlfVxyXG4gICAgICAgICAgICAgICAgLy8gb25DaGFuZ2U9eyhkYXRlKSA9PiBvblN0YXJ0RGF0ZVVwZGF0ZShkYXRlKX1cclxuICAgICAgICAgICAgICAgIGRhdGVGb3JtYXQ9XCJNTU1NIHl5eXlcIlxyXG4gICAgICAgICAgICAgICAgc2hvd01vbnRoWWVhclBpY2tlclxyXG4gICAgICAgICAgICAgICAgbWF4RGF0ZT17YWRkWWVhcnMobmV3IERhdGUoKSwgMyl9XHJcbiAgICAgICAgICAgICAgICBtaW5EYXRlPXtuZXcgRGF0ZSgpfVxyXG4gICAgICAgICAgICAgICAgcmVhZE9ubHk9e3RydWV9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8RGF0ZVBpY2tlclxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e3N0YXJ0RGF0ZX1cclxuICAgICAgICAgICAgICAgIC8vIG9uQ2hhbmdlPXsoZGF0ZSkgPT4gb25TdGFydERhdGVVcGRhdGUoZGF0ZSl9XHJcbiAgICAgICAgICAgICAgICBkYXRlRm9ybWF0PVwiTU1NTSB5eXl5XCJcclxuICAgICAgICAgICAgICAgIHNob3dNb250aFllYXJQaWNrZXJcclxuICAgICAgICAgICAgICAgIG1heERhdGU9e2FkZFllYXJzKG5ldyBEYXRlKCksIDMpfVxyXG4gICAgICAgICAgICAgICAgbWluRGF0ZT17bmV3IERhdGUoKX1cclxuICAgICAgICAgICAgICAgIHdpdGhQb3J0YWxcclxuICAgICAgICAgICAgICAgIHJlYWRPbmx5PXt0cnVlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgaWQ9XCJtYWluLWRhdGVwaWNrZXJcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgcm91bmRlZC0yeGwgcHktMyBweC0zIG1kQ29udGFpbmVyOnB5LTMgbWRDb250YWluZXI6cHgtNCBsZ0NvbnRhaW5lcjpweC02IGxnQ29udGFpbmVyOnB5LTQgc2hhZG93LW1kIGdyaWQgZ3JpZC1jb2xzLTJmciBpdGVtcy1jZW50ZXIgdGV4dC14cyBtZENvbnRhaW5lcjp0ZXh0LXNtIGxnQ29udGFpbmVyOnRleHQtYmFzZVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9XCIvY2FzaC1mbG93L2hvdXJnbGFzczEuc3ZnXCJcclxuICAgICAgICAgICAgICAgIGhlaWdodD17KHNpemUud2lkdGggPiA4NjAgJiYgMjUpIHx8IChzaXplLndpZHRoIDwgODYwICYmIHNpemUud2lkdGggPiA2ODAgJiYgMjIpIHx8IChzaXplLndpZHRoIDwgNjgwICYmIDE4KX1cclxuICAgICAgICAgICAgICAgIHdpZHRoPXsoc2l6ZS53aWR0aCA+IDg2MCAmJiAyNSkgfHwgKHNpemUud2lkdGggPCA4NjAgJiYgc2l6ZS53aWR0aCA+IDY4MCAmJiAyMikgfHwgKHNpemUud2lkdGggPCA2ODAgJiYgMTgpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWwtMiB0ZXh0LXByaW1hcnlkYXJrXCI+RW5kOjwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtlbmREYXRlICYmICFpc01vYmlsZSA/IChcclxuICAgICAgICAgICAgICA8RGF0ZVBpY2tlclxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e2VuZERhdGV9XHJcbiAgICAgICAgICAgICAgICAvLyBvbkNoYW5nZT17KGRhdGUpID0+IG9uRW5kRGF0ZVVwZGF0ZShkYXRlKX1cclxuICAgICAgICAgICAgICAgIGRhdGVGb3JtYXQ9XCJNTU1NIHl5eXlcIlxyXG4gICAgICAgICAgICAgICAgc2hvd01vbnRoWWVhclBpY2tlclxyXG4gICAgICAgICAgICAgICAgbWF4RGF0ZT17YWRkWWVhcnMobmV3IERhdGUoKSwgMyl9XHJcbiAgICAgICAgICAgICAgICBtaW5EYXRlPXtuZXcgRGF0ZSgpfVxyXG4gICAgICAgICAgICAgICAgcmVhZE9ubHk9e3RydWV9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8RGF0ZVBpY2tlclxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e2VuZERhdGV9XHJcbiAgICAgICAgICAgICAgICAvLyBvbkNoYW5nZT17KGRhdGUpID0+IG9uRW5kRGF0ZVVwZGF0ZShkYXRlKX1cclxuICAgICAgICAgICAgICAgIGRhdGVGb3JtYXQ9XCJNTU1NIHl5eXlcIlxyXG4gICAgICAgICAgICAgICAgc2hvd01vbnRoWWVhclBpY2tlclxyXG4gICAgICAgICAgICAgICAgbWF4RGF0ZT17YWRkWWVhcnMobmV3IERhdGUoKSwgMyl9XHJcbiAgICAgICAgICAgICAgICBtaW5EYXRlPXtuZXcgRGF0ZSgpfVxyXG4gICAgICAgICAgICAgICAgd2l0aFBvcnRhbFxyXG4gICAgICAgICAgICAgICAgcmVhZE9ubHk9e3RydWV9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIHdpZHRoOlxyXG4gICAgICAgICAgICAgICAgKHNpemUud2lkdGggPiA4NjAgJiYgJzEwMCUnKSB8fFxyXG4gICAgICAgICAgICAgICAgKHNpemUud2lkdGggPCA4NjAgJiYgc2l6ZS53aWR0aCA+IDY4MCAmJiAnNDclJykgfHxcclxuICAgICAgICAgICAgICAgIChzaXplLndpZHRoIDwgNjgwICYmIHNpemUud2lkdGggPiA1MjAgJiYgJzQwJScpIHx8XHJcbiAgICAgICAgICAgICAgICAoc2l6ZS53aWR0aCA8IDUyMCAmJiAnNDclJyksXHJcbiAgICAgICAgICAgICAgZ3JpZENvbHVtblN0YXJ0OiBzaXplLndpZHRoIDwgODYwID8gJzEnIDogJ3Vuc2V0JyxcclxuICAgICAgICAgICAgICBncmlkQ29sdW1uRW5kOiBzaXplLndpZHRoIDwgODYwID8gJzMnIDogJ3Vuc2V0JyxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicGxhY2Utc2VsZi1jZW50ZXIgYmctd2hpdGUgcm91bmRlZC0yeGwgcHktMyBweC0zIG1kQ29udGFpbmVyOnB5LTMgbWRDb250YWluZXI6cHgtNCBsZ0NvbnRhaW5lcjpweC02IGxnQ29udGFpbmVyOnB5LTQgc2hhZG93LW1kIGdyaWQgZ3JpZC1jb2xzLTJmciBpdGVtcy1jZW50ZXIgdGV4dC14cyBtZENvbnRhaW5lcjp0ZXh0LXNtIGxnQ29udGFpbmVyOnRleHQtYmFzZVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9XCIvY2FzaC1mbG93L3RheC5zdmdcIlxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PXsoc2l6ZS53aWR0aCA+IDg2MCAmJiAyNSkgfHwgKHNpemUud2lkdGggPCA4NjAgJiYgc2l6ZS53aWR0aCA+IDY4MCAmJiAyMikgfHwgKHNpemUud2lkdGggPCA2ODAgJiYgMTgpfVxyXG4gICAgICAgICAgICAgICAgd2lkdGg9eyhzaXplLndpZHRoID4gODYwICYmIDI1KSB8fCAoc2l6ZS53aWR0aCA8IDg2MCAmJiBzaXplLndpZHRoID4gNjgwICYmIDIyKSB8fCAoc2l6ZS53aWR0aCA8IDY4MCAmJiAxOCl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtbC0yXCI+VGF4OjwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiIHN0eWxlPXt7IHRleHRBbGlnbkxhc3Q6ICdyaWdodCcgfX0+XHJcbiAgICAgICAgICAgICAgPGlucHV0IGlkPVwidGF4LWlucHV0XCIgdmFsdWU9e3RheH0gY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIGZvY3VzOm91dGxpbmUtbm9uZVwiIC8+XHJcbiAgICAgICAgICAgICAgPHA+JTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGlkPVwiY2hhcnRDb250YWluZXJcIiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC0xLzIgcC00IG1kQ29udGFpbmVyOnAtOCBiZy13aGl0ZSByb3VuZGVkLTJ4bCBtdC0xMiBzaGFkb3ctbWRcIj5cclxuICAgICAgICAgIHsvKiA8Y2FudmFzIHJlZj17Y2hhcnRSZWZ9IGhlaWdodD17NzV9PjwvY2FudmFzPiAqL31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBncmlkIGdyaWQtY29scy0yZnIgZ3JpZC1yb3dzLTNmciBsZzFDb250YWluZXI6Z3JpZC1jb2xzLTNmciBsZzFDb250YWluZXI6Z3JpZC1yb3dzLTJmciBnYXAteC02IHNtQ29udGFpbmVyOmdhcC14LTEyIGdhcC15LTggbXQtMTJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIHJvdW5kZWQtMnhsIHB5LTMgcHgtMyBtZENvbnRhaW5lcjpweS0zIG1kQ29udGFpbmVyOnB4LTQgbGdDb250YWluZXI6cHgtNiBsZ0NvbnRhaW5lcjpweS00IHNoYWRvdy1tZCBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgdGV4dC14cyBtZENvbnRhaW5lcjp0ZXh0LXNtIGxnQ29udGFpbmVyOnRleHQtYmFzZVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPVwiL2Nhc2gtZmxvdy9yZXZlbnVlLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9eyhzaXplLndpZHRoID4gODYwICYmIDI1KSB8fCAoc2l6ZS53aWR0aCA8IDg2MCAmJiBzaXplLndpZHRoID4gNjgwICYmIDIyKSB8fCAoc2l6ZS53aWR0aCA8IDY4MCAmJiAxOCl9XHJcbiAgICAgICAgICAgICAgICB3aWR0aD17KHNpemUud2lkdGggPiA4NjAgJiYgMjUpIHx8IChzaXplLndpZHRoIDwgODYwICYmIHNpemUud2lkdGggPiA2ODAgJiYgMjIpIHx8IChzaXplLndpZHRoIDwgNjgwICYmIDE4KX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1sLTJcIj5Ub3RhbCByZXZlbnVlOjwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxwPiR7dG90YWxSZXZlbnVlfTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgcm91bmRlZC0yeGwgcHktMyBweC0zIG1kQ29udGFpbmVyOnB5LTMgbWRDb250YWluZXI6cHgtNCBsZ0NvbnRhaW5lcjpweC02IGxnQ29udGFpbmVyOnB5LTQgc2hhZG93LW1kIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciB0ZXh0LXhzIG1kQ29udGFpbmVyOnRleHQtc20gbGdDb250YWluZXI6dGV4dC1iYXNlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9XCIvY2FzaC1mbG93L21vbnRobHkuc3ZnXCJcclxuICAgICAgICAgICAgICAgIGhlaWdodD17KHNpemUud2lkdGggPiA4NjAgJiYgMjUpIHx8IChzaXplLndpZHRoIDwgODYwICYmIHNpemUud2lkdGggPiA2ODAgJiYgMjIpIHx8IChzaXplLndpZHRoIDwgNjgwICYmIDE4KX1cclxuICAgICAgICAgICAgICAgIHdpZHRoPXsoc2l6ZS53aWR0aCA+IDg2MCAmJiAyNSkgfHwgKHNpemUud2lkdGggPCA4NjAgJiYgc2l6ZS53aWR0aCA+IDY4MCAmJiAyMikgfHwgKHNpemUud2lkdGggPCA2ODAgJiYgMTgpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWwtMlwiPk1vbnRobHkgcmV2ZW51ZTo8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8cD4ke21vbnRobHlSZXZlbnVlfTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgcm91bmRlZC0yeGwgcHktMyBweC0zIG1kQ29udGFpbmVyOnB5LTMgbWRDb250YWluZXI6cHgtNCBsZ0NvbnRhaW5lcjpweC02IGxnQ29udGFpbmVyOnB5LTQgc2hhZG93LW1kIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciB0ZXh0LXhzIG1kQ29udGFpbmVyOnRleHQtc20gbGdDb250YWluZXI6dGV4dC1iYXNlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9XCIvY2FzaC1mbG93L2Nvc3RzLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9eyhzaXplLndpZHRoID4gODYwICYmIDI1KSB8fCAoc2l6ZS53aWR0aCA8IDg2MCAmJiBzaXplLndpZHRoID4gNjgwICYmIDIyKSB8fCAoc2l6ZS53aWR0aCA8IDY4MCAmJiAxOCl9XHJcbiAgICAgICAgICAgICAgICB3aWR0aD17KHNpemUud2lkdGggPiA4NjAgJiYgMjUpIHx8IChzaXplLndpZHRoIDwgODYwICYmIHNpemUud2lkdGggPiA2ODAgJiYgMjIpIHx8IChzaXplLndpZHRoIDwgNjgwICYmIDE4KX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1sLTJcIj5Ub3RhbCBjb3N0czo8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8cD4ke3RvdGFsQ29zdHN9PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBiZy13aGl0ZSByb3VuZGVkLTJ4bCBweS0zIHB4LTMgbWRDb250YWluZXI6cHktMyBtZENvbnRhaW5lcjpweC00IGxnQ29udGFpbmVyOnB4LTYgbGdDb250YWluZXI6cHktNCBzaGFkb3ctbWQgZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHRleHQteHMgbWRDb250YWluZXI6dGV4dC1zbSBsZ0NvbnRhaW5lcjp0ZXh0LWJhc2VcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz1cIi9jYXNoLWZsb3cvbW9udGhseS1jb3N0cy5zdmdcIlxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PXsoc2l6ZS53aWR0aCA+IDg2MCAmJiAyNSkgfHwgKHNpemUud2lkdGggPCA4NjAgJiYgc2l6ZS53aWR0aCA+IDY4MCAmJiAyMikgfHwgKHNpemUud2lkdGggPCA2ODAgJiYgMTgpfVxyXG4gICAgICAgICAgICAgICAgd2lkdGg9eyhzaXplLndpZHRoID4gODYwICYmIDI1KSB8fCAoc2l6ZS53aWR0aCA8IDg2MCAmJiBzaXplLndpZHRoID4gNjgwICYmIDIyKSB8fCAoc2l6ZS53aWR0aCA8IDY4MCAmJiAxOCl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtbC0yXCI+TW9udGhseSBjb3N0czo8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8cD4ke21vbnRobHlDb3N0c308L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIHJvdW5kZWQtMnhsIHB5LTMgcHgtMyBtZENvbnRhaW5lcjpweS0zIG1kQ29udGFpbmVyOnB4LTQgbGdDb250YWluZXI6cHgtNiBsZ0NvbnRhaW5lcjpweS00IHNoYWRvdy1tZCBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgdGV4dC14cyBtZENvbnRhaW5lcjp0ZXh0LXNtIGxnQ29udGFpbmVyOnRleHQtYmFzZVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPVwiL2Nhc2gtZmxvdy9tZWdhcGhvbmUuc3ZnXCJcclxuICAgICAgICAgICAgICAgIGhlaWdodD17KHNpemUud2lkdGggPiA4NjAgJiYgMjUpIHx8IChzaXplLndpZHRoIDwgODYwICYmIHNpemUud2lkdGggPiA2ODAgJiYgMjIpIHx8IChzaXplLndpZHRoIDwgNjgwICYmIDE4KX1cclxuICAgICAgICAgICAgICAgIHdpZHRoPXsoc2l6ZS53aWR0aCA+IDg2MCAmJiAyNSkgfHwgKHNpemUud2lkdGggPCA4NjAgJiYgc2l6ZS53aWR0aCA+IDY4MCAmJiAyMikgfHwgKHNpemUud2lkdGggPCA2ODAgJiYgMTgpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWwtMlwiPkdyb3NzIHByb2ZpdDo8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8cD4ke2dyb3NzUHJvZml0fTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgcm91bmRlZC0yeGwgcHktMyBweC0zIG1kQ29udGFpbmVyOnB5LTMgbWRDb250YWluZXI6cHgtNCBsZ0NvbnRhaW5lcjpweC02IGxnQ29udGFpbmVyOnB5LTQgc2hhZG93LW1kIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciB0ZXh0LXhzIG1kQ29udGFpbmVyOnRleHQtc20gbGdDb250YWluZXI6dGV4dC1iYXNlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9XCIvY2FzaC1mbG93L25ldC13b3J0aC5zdmdcIlxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PXsoc2l6ZS53aWR0aCA+IDg2MCAmJiAyNSkgfHwgKHNpemUud2lkdGggPCA4NjAgJiYgc2l6ZS53aWR0aCA+IDY4MCAmJiAyMikgfHwgKHNpemUud2lkdGggPCA2ODAgJiYgMTgpfVxyXG4gICAgICAgICAgICAgICAgd2lkdGg9eyhzaXplLndpZHRoID4gODYwICYmIDI1KSB8fCAoc2l6ZS53aWR0aCA8IDg2MCAmJiBzaXplLndpZHRoID4gNjgwICYmIDIyKSB8fCAoc2l6ZS53aWR0aCA8IDY4MCAmJiAxOCl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtbC0yXCI+TmV0IHByb2ZpdDo8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8cD4ke25ldFByb2ZpdH08L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7LyogUmV2ZW51ZSAqL31cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAvLyBzdHlsZT17eyBoZWlnaHQ6IDU1IH19XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJvdmVyZmxvdy1oaWRkZW4gcmVsYXRpdmUgdy1mdWxsIHJvdW5kZWQtMnhsIGJnLXdoaXRlIGRhcms6YmctYmFja2dyb3VuZCBweC00IHB5LTQgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgbXQtMTIgZmxleCBmbGV4LXdyYXAgc2hhZG93LW1kXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZ0NvbnRhaW5lcjptbC0yXCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBsZ0NvbnRhaW5lcjp0ZXh0LWJhc2VcIj5SZXZlbnVlPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwibGdDb250YWluZXI6bXItMiBmbGV4IGZsZXgtbm93cmFwIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgICAgIHNyYz1cIi9jYXNoLWZsb3cvYWRkLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9eyhzaXplLndpZHRoID4gODYwICYmIDIyKSB8fCAoc2l6ZS53aWR0aCA8IDg2MCAmJiBzaXplLndpZHRoID4gNjgwICYmIDE4KSB8fCAoc2l6ZS53aWR0aCA8IDY4MCAmJiAxNil9XHJcbiAgICAgICAgICAgICAgICB3aWR0aD17KHNpemUud2lkdGggPiA4NjAgJiYgMjIpIHx8IChzaXplLndpZHRoIDwgODYwICYmIHNpemUud2lkdGggPiA2ODAgJiYgMTgpIHx8IChzaXplLndpZHRoIDwgNjgwICYmIDE2KX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIC8vIHJlZj17ZHJvcERvd25JY29ufVxyXG4gICAgICAgICAgICAgICAgLy8gb25DbGljaz17b25SZXZlbnVlU2hvd31cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1sLTIgY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgc3JjPVwiL2Nhc2gtZmxvdy9kcm9wZG93bi5zdmdcIlxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PXsoc2l6ZS53aWR0aCA+IDg2MCAmJiAyMikgfHwgKHNpemUud2lkdGggPCA4NjAgJiYgc2l6ZS53aWR0aCA+IDY4MCAmJiAxOCkgfHwgKHNpemUud2lkdGggPCA2ODAgJiYgMTYpfVxyXG4gICAgICAgICAgICAgICAgd2lkdGg9eyhzaXplLndpZHRoID4gODYwICYmIDIyKSB8fCAoc2l6ZS53aWR0aCA8IDg2MCAmJiBzaXplLndpZHRoID4gNjgwICYmIDE4KSB8fCAoc2l6ZS53aWR0aCA8IDY4MCAmJiAxNil9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YHctZnVsbCAke1xyXG4gICAgICAgICAgICAgIHNpemUud2lkdGggPCAxMTIwXHJcbiAgICAgICAgICAgICAgICA/ICd0ZXh0LXNtIG1kQ29udGFpbmVyOnRleHQtYmFzZSBsZzFDb250YWluZXI6bXgtOCBsZzFDb250YWluZXI6bWItNiBtdC00ICBiZy1iYWNrZ3JvdW5kIHJvdW5kZWQtMnhsIHB4LTQgbWRDb250YWluZXI6cHgtNiBweS00J1xyXG4gICAgICAgICAgICAgICAgOiAndy1mdWxsIG14LTggbWItNiBtdC00ICBiZy1iYWNrZ3JvdW5kIHJvdW5kZWQtMnhsIHB4LTQgbWRDb250YWluZXI6cHgtNiBweS00J1xyXG4gICAgICAgICAgICB9YH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgey8qIDxociBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnkgdy1mdWxsXCIgLz4gKi99XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogc2l6ZS53aWR0aCA8IDUyMCAmJiAnMC42cmVtJyB9fVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBncmlkIGdyaWQtY29scy01ZnIgaXRlbXMtY2VudGVyIHRleHQteHMgbWRDb250YWluZXI6dGV4dC1zbSBsZzFDb250YWluZXI6dGV4dC1iYXNlXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXY+bmFtZTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+dHlwZTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+YW1vdW50PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj5zdGFydDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+ZW5kPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnkgdy1mdWxsXCIgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLWZ1bGwgdy1mdWxsIHJvdW5kZWQtMnhsIGZsZXggZmxleC13cmFwIGZsZXgtY29sXCI+XHJcbiAgICAgICAgICAgICAge3JldmVudWVFbGVtZW50cyAmJlxyXG4gICAgICAgICAgICAgICAgcmV2ZW51ZUVsZW1lbnRzLm1hcCgoZWxlbWVudCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgZ3JpZCBncmlkLWNvbHMtNWZyIHB5LTMgaXRlbXMtc3RhcnQgdGV4dC1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwibmFtZVwiIGNsYXNzTmFtZT1cInctNC81IGJnLWJhY2tncm91bmQgZm9jdXM6b3V0bGluZS1ub25lXCIgdmFsdWU9e2VsZW1lbnQudGl0bGV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogJzIwcHgnIH19IGNsYXNzTmFtZT1cIm92ZXJmbG93LWhpZGRlbiBmbGV4IGZsZXgtY29sIGZsZXgtd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGZsZXgtcm93IGZsZXgtbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY3Vyc29yLWRlZmF1bHRcIj57ZWxlbWVudC50eXBlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJ3LTQvNSBiZy1iYWNrZ3JvdW5kIGZvY3VzOm91dGxpbmUtbm9uZVwiIHZhbHVlPXtlbGVtZW50LnZhbHVlfSBwbGFjZWhvbGRlcj1cImFtb3VudFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEYXRlUGlja2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wcGVyUGxhY2VtZW50PVwidG9wLXN0YXJ0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwb3BwZXJQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25GaXhlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXtlbGVtZW50LnN0YXJ0Ll9zZWNvbmRzICogMTAwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlRm9ybWF0PVwiTU1NTSB5eXl5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93TW9udGhZZWFyUGlja2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4RGF0ZT17YWRkWWVhcnMobmV3IERhdGUoKSwgMyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWluRGF0ZT17bmV3IERhdGUoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkT25seT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2VsZW1lbnQudHlwZSA9PSAnUmVjdXJyaW5nJyA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8RGF0ZVBpY2tlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wcGVyUGxhY2VtZW50PVwidG9wLXN0YXJ0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcHBlclByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uRml4ZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e2VsZW1lbnQuZW5kLl9zZWNvbmRzICogMTAwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGVGb3JtYXQ9XCJNTU1NIHl5eXlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd01vbnRoWWVhclBpY2tlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4RGF0ZT17YWRkWWVhcnMobmV3IERhdGUoKSwgMyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5EYXRlPXtuZXcgRGF0ZSgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZE9ubHk9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5ZGFyayBtci04IG10LTJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7LyogQ29zdHMgKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy1oaWRkZW4gcmVsYXRpdmUgdy1mdWxsIHJvdW5kZWQtMnhsIGJnLXdoaXRlIGRhcms6YmctYmFja2dyb3VuZCBweC00IHB5LTQgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgbXQtOCBmbGV4IGZsZXgtd3JhcCBzaGFkb3ctbWRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnQ29udGFpbmVyOm1sLTJcIj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGxnQ29udGFpbmVyOnRleHQtYmFzZVwiPkNvc3RzPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2B3LWZ1bGwgJHtcclxuICAgICAgICAgICAgICBzaXplLndpZHRoIDwgMTEyMFxyXG4gICAgICAgICAgICAgICAgPyAndGV4dC1zbSBtZENvbnRhaW5lcjp0ZXh0LWJhc2UgbGcxQ29udGFpbmVyOm14LTggbGcxQ29udGFpbmVyOm1iLTYgbXQtNCAgYmctYmFja2dyb3VuZCByb3VuZGVkLTJ4bCBweC00IG1kQ29udGFpbmVyOnB4LTYgcHktNCdcclxuICAgICAgICAgICAgICAgIDogJ3ctZnVsbCBteC04IG1iLTYgbXQtNCAgYmctYmFja2dyb3VuZCByb3VuZGVkLTJ4bCBweC00IG1kQ29udGFpbmVyOnB4LTYgcHktNCdcclxuICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHsvKiA8aHIgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5IHctZnVsbFwiIC8+ICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBncmlkIGdyaWQtY29scy01ZnIgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdj5uYW1lPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj50eXBlPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj5hbW91bnQ8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2PnN0YXJ0PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj5lbmQ8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeSB3LWZ1bGxcIiAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtZnVsbCB3LWZ1bGwgcm91bmRlZC0yeGwgZmxleCBmbGV4LXdyYXAgZmxleC1jb2xcIj5cclxuICAgICAgICAgICAgICB7Y29zdHNFbGVtZW50cyAmJlxyXG4gICAgICAgICAgICAgICAgY29zdHNFbGVtZW50cy5tYXAoKGVsZW1lbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgZ3JpZCBncmlkLWNvbHMtNWZyIHB5LTMgaXRlbXMtc3RhcnQgdGV4dC1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwibmFtZVwiIGNsYXNzTmFtZT1cInctNC81IGJnLWJhY2tncm91bmQgZm9jdXM6b3V0bGluZS1ub25lXCIgdmFsdWU9e2VsZW1lbnQudGl0bGV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogJzIwcHgnIH19IGNsYXNzTmFtZT1cIm92ZXJmbG93LWhpZGRlbiBmbGV4IGZsZXgtY29sIGZsZXgtd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGZsZXgtcm93IGZsZXgtbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY3Vyc29yLWRlZmF1bHRcIj57ZWxlbWVudC50eXBlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJ3LTQvNSBiZy1iYWNrZ3JvdW5kIGZvY3VzOm91dGxpbmUtbm9uZVwiIHZhbHVlPXtlbGVtZW50LnZhbHVlfSBwbGFjZWhvbGRlcj1cImFtb3VudFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEYXRlUGlja2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wcGVyUGxhY2VtZW50PVwidG9wLXN0YXJ0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwb3BwZXJQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25GaXhlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXtlbGVtZW50LnN0YXJ0Ll9zZWNvbmRzICogMTAwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlRm9ybWF0PVwiTU1NTSB5eXl5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93TW9udGhZZWFyUGlja2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4RGF0ZT17YWRkWWVhcnMobmV3IERhdGUoKSwgMyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWluRGF0ZT17bmV3IERhdGUoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkT25seT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2VsZW1lbnQudHlwZSA9PSAnUmVjdXJyaW5nJyA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8RGF0ZVBpY2tlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wcGVyUGxhY2VtZW50PVwidG9wLXN0YXJ0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcHBlclByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uRml4ZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e2VsZW1lbnQuZW5kLl9zZWNvbmRzICogMTAwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGVGb3JtYXQ9XCJNTU1NIHl5eXlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd01vbnRoWWVhclBpY2tlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4RGF0ZT17YWRkWWVhcnMobmV3IERhdGUoKSwgMyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5EYXRlPXtuZXcgRGF0ZSgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZE9ubHk9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5ZGFyayBtci04IG10LTJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHNuYXBzaG90ID0gYXdhaXQgZGIuY29sbGVjdGlvbigncHJvamVjdHMnKS5nZXQoKTtcclxuXHJcbiAgY29uc3QgcHJvamVjdHMgPSBbXTtcclxuICBzbmFwc2hvdC5mb3JFYWNoKChkb2MpID0+IHtcclxuICAgIHByb2plY3RzLnB1c2goZG9jLmRhdGEoKSk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHBhdGhzID0gcHJvamVjdHMubWFwKChwcm9qZWN0KSA9PiAoe1xyXG4gICAgcGFyYW1zOiB7XHJcbiAgICAgIHByb2plY3Q6IHByb2plY3QucHJvamVjdE5hbWUudG9TdHJpbmcoKSxcclxuICAgICAgaWQ6IHByb2plY3QucHJvamVjdElkLnRvU3RyaW5nKCksXHJcbiAgICB9LFxyXG4gIH0pKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHBhdGhzOiBwYXRocyxcclxuICAgIGZhbGxiYWNrOiB0cnVlLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoeyBwYXJhbXMgfSkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKHBhcmFtcyk7XHJcbiAgLy8gbGV0IHJlZiA9IGRiLmNvbGxlY3Rpb24oJ3Byb2plY3RzJykud2hlcmUoJ3Byb2plY3ROYW1lJywgJz09JywgcGFyYW1zLnByb2plY3QpO1xyXG4gIGxldCByZWYgPSBkYlxyXG4gICAgLmNvbGxlY3Rpb24oJ3Byb2plY3RzJylcclxuICAgIC5kb2MocGFyYW1zLmlkKVxyXG4gICAgLmNvbGxlY3Rpb24oJ2Nhc2hGbG93JylcclxuICAgIC5kb2MocGFyYW1zLnByb2plY3QpXHJcbiAgICAuY29sbGVjdGlvbignaW5wdXRzJylcclxuICAgIC53aGVyZSgncHJvamVjdElkJywgJz09JywgcGFyYW1zLmlkKTtcclxuXHJcbiAgY29uc3Qgc25hcHNob3QgPSBhd2FpdCByZWYuZ2V0KCk7XHJcbiAgY29uc3QgcHJvamVjdCA9IFtdO1xyXG5cclxuICBzbmFwc2hvdC5mb3JFYWNoKChkb2MpID0+IHtcclxuICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKHNhZmVKc29uU3RyaW5naWZ5KGRvYy5kYXRhKCkpKTtcclxuICAgIHByb2plY3QucHVzaCh7IC4uLmRhdGEgfSk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczogeyBwcm9qZWN0IH0sXHJcbiAgICByZXZhbGlkYXRlOiAxLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVbmlxdWVDYXNoZmxvd1BhZ2U7XHJcbiIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbi8vIFVzYWdlXHJcbmZ1bmN0aW9uIEFwcCgpIHtcclxuICBjb25zdCBzaXplID0gdXNlV2luZG93U2l6ZSgpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICB7c2l6ZS53aWR0aH1weCAvIHtzaXplLmhlaWdodH1weFxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4vLyBIb29rXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VXaW5kb3dTaXplKCkge1xyXG4gIC8vIEluaXRpYWxpemUgc3RhdGUgd2l0aCB1bmRlZmluZWQgd2lkdGgvaGVpZ2h0IHNvIHNlcnZlciBhbmQgY2xpZW50IHJlbmRlcnMgbWF0Y2hcclxuICAvLyBMZWFybiBtb3JlIGhlcmU6IGh0dHBzOi8vam9zaHdjb21lYXUuY29tL3JlYWN0L3RoZS1wZXJpbHMtb2YtcmVoeWRyYXRpb24vXHJcbiAgY29uc3QgW3dpbmRvd1NpemUsIHNldFdpbmRvd1NpemVdID0gdXNlU3RhdGUoe1xyXG4gICAgd2lkdGg6IHVuZGVmaW5lZCxcclxuICAgIGhlaWdodDogdW5kZWZpbmVkLFxyXG4gIH0pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBIYW5kbGVyIHRvIGNhbGwgb24gd2luZG93IHJlc2l6ZVxyXG4gICAgZnVuY3Rpb24gaGFuZGxlUmVzaXplKCkge1xyXG4gICAgICAvLyBTZXQgd2luZG93IHdpZHRoL2hlaWdodCB0byBzdGF0ZVxyXG4gICAgICBzZXRXaW5kb3dTaXplKHtcclxuICAgICAgICB3aWR0aDogd2luZG93LmlubmVyV2lkdGgsXHJcbiAgICAgICAgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLy8gQWRkIGV2ZW50IGxpc3RlbmVyXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKTtcclxuICAgIC8vIENhbGwgaGFuZGxlciByaWdodCBhd2F5IHNvIHN0YXRlIGdldHMgdXBkYXRlZCB3aXRoIGluaXRpYWwgd2luZG93IHNpemVcclxuICAgIGhhbmRsZVJlc2l6ZSgpO1xyXG4gICAgLy8gUmVtb3ZlIGV2ZW50IGxpc3RlbmVyIG9uIGNsZWFudXBcclxuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKTtcclxuICB9LCBbXSk7IC8vIEVtcHR5IGFycmF5IGVuc3VyZXMgdGhhdCBlZmZlY3QgaXMgb25seSBydW4gb24gbW91bnRcclxuICByZXR1cm4gd2luZG93U2l6ZTtcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZW1vdGlvbi9yZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiYWJlbC1wbHVnaW4tc3VwZXJqc29uLW5leHQvdG9vbHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZGF0ZS1mbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UtYWRtaW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvYXBwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2F1dGhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvZmlyZXN0b3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2Z1bmN0aW9uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9zdG9yYWdlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImdzYXBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianMtY29va2llXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kYXRlcGlja2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRldmljZS1kZXRlY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc3Bpbm5lcnMvQm91bmNlTG9hZGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzYWZlLWpzb24tc3RyaW5naWZ5XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=