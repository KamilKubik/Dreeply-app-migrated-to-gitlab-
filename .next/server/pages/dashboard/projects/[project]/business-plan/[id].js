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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/dashboard/projects/[project]/business-plan/[id].js");
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./pages/dashboard/projects/[project]/business-plan/[id].js":
/*!******************************************************************!*\
  !*** ./pages/dashboard/projects/[project]/business-plan/[id].js ***!
  \******************************************************************/
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
/* harmony import */ var _lib_firebase_admin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../lib/firebase-admin */ "./lib/firebase-admin.js");
/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../lib/firebase */ "./lib/firebase.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_dashboard_startup_project_business_app_competitors_UniqueElement__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../components/dashboard/startup/project/business-app/competitors/UniqueElement */ "./components/dashboard/startup/project/business-app/competitors/UniqueElement.js");

var _jsxFileName = "C:\\off-saas\\pages\\dashboard\\projects\\[project]\\business-plan\\[id].js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const UniqueBusinessPlanPage = ({
  project
}) => {
  console.log('Particular project --> ', project); //   useEffect(() => {
  //     project && setSelectedProject(project[0]);
  //     project && setCompetitors(project[0].competitorsArray);
  //   }, [project]);
  //   const [selectedProject, setSelectedProject] = useState(null);
  //   const [competitors, setCompetitors] = useState([]);

  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();

  if (router.isFallback) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "Loading..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, undefined);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "min-h-screen w-full relative flex flex-col items-center",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "w-full max-w-full relative mt-16 px-8 screenSmall:px-32 text-primarydark",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "grid grid-cols-2 grid-rows-1 grid-flow-col",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
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
              lineNumber: 38,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
              id: "Landing_Success",
              "data-name": "Landing Success",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                className: "cls-1",
                d: "M109.3,90.1A46,46,0,0,0,65,36V20.08c1.78-.62,7.21-2.14,12.57.23a19.33,19.33,0,0,0,14.82,0c.87-.38.61.31.61-17.93a1,1,0,0,0-1.43-.93c-.07,0-6.69,2.87-13.18,0A19.41,19.41,0,0,0,65,.93,1,1,0,0,0,63,1V36a45.86,45.86,0,0,0-28.66,10.8C16.18,40.48,4,40,.79,45.51-2.29,50.86,3.94,59.3,10,65.68A11,11,0,0,0,18,83c.81,38.41,46.08,59.2,75.66,34.21,8.53,3,29,9.15,33.55,1.31C130.39,113,123.86,102.65,109.3,90.1ZM77.59,3.31A19.39,19.39,0,0,0,91,3.83V18.68c-1.79.62-7.22,2.13-12.57-.23A19.19,19.19,0,0,0,65,17.93V3.08C66.81,2.46,72.24,1,77.59,3.31ZM65,45v-7c39.69.91,58,50.27,28.21,76.81C71.32,107,46,92.66,27.77,78.64a11,11,0,0,0-3.2-16.13A43.88,43.88,0,0,1,63,38.06V45A1,1,0,0,0,65,45ZM32.55,48.36a46.21,46.21,0,0,0-9.83,13.28,10.93,10.93,0,0,0-11.4,2.47C-8.39,43.23,5.23,39.08,32.55,48.36ZM10,72a9,9,0,1,1,9,9A9,9,0,0,1,10,72Zm10,11a11,11,0,0,0,6.34-2.82c18.45,14.21,43.45,28.35,65.05,36.22C63,139.16,20.83,119.1,20.05,83Zm105.4,34.5c-2.51,4.35-14,3.62-30-1.85a45.61,45.61,0,0,0,13.42-23.21C121.59,103.58,128,113.12,125.45,117.47Z"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 40,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "text-primarydark text-2xl screenLarge:text-3xl mt-2 pl-2 dark:text-background",
            children: "Business plan"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          className: "text-secondary text-md screenLarge:text-base text-gray",
          children: "Create your business plan any way you want"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "grid grid-cols-businessSmall screenSmall:grid-cols-business screenMedium:grid-cols-businessMedium grid-flow-col gap-x-8",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "w-full h-maxcontent mt-12 pb-20",
          children: selectedSection ? (console.log('selected'), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(EditorInputElement // sectionUpdate={sectionUpdate}
          // sectionUpdate={sectionUpdate}
          , {
            sectionTitleUpdate: undefined.sectionTitleUpdate,
            tableUpdate: undefined.tableUpdate,
            headerUpdate: undefined.headerUpdate,
            reorderElements: undefined.reorderElements,
            projectId: undefined.state.projectId,
            addChart: undefined.addChart,
            addNewHeader: undefined.addNewHeader,
            chartTypeUpdate: undefined.chartTypeUpdate,
            onDatasetLabel6Update: undefined.onDatasetLabel6Update,
            onDatasetLabel5Update: undefined.onDatasetLabel5Update,
            onDatasetLabel4Update: undefined.onDatasetLabel4Update,
            onDatasetLabel3Update: undefined.onDatasetLabel3Update,
            onDatasetLabel2Update: undefined.onDatasetLabel2Update,
            onDatasetLabel1Update: undefined.onDatasetLabel1Update,
            onDataset6Update: undefined.onDataset6Update,
            onDataset5Update: undefined.onDataset5Update,
            onDataset4Update: undefined.onDataset4Update,
            onDataset3Update: undefined.onDataset3Update,
            onDataset2Update: undefined.onDataset2Update,
            onDataset1Update: undefined.onDataset1Update,
            chartLabelsUpdate: undefined.chartLabelsUpdate,
            chartValueUpdate: undefined.chartValueUpdate,
            addNewChart: undefined.addNewChart,
            deleteParticularField: undefined.deleteParticularField,
            addNewField: undefined.addNewField,
            fieldUpdate: undefined.fieldUpdate,
            sectionUpdate: undefined.sectionUpdate,
            selectedSection: undefined.state.selectedSection,
            selectedSectionIndex: undefined.state.selectedSectionIndex,
            sections: undefined.state.sections
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 17
          }, undefined)) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "w-full bg-white rounded-2xl p-8 flex justify-center items-center",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "flex flex-col justify-center items-center",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "/empty-business-plan/empty1.svg",
                height: 300,
                width: 300
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 96,
                columnNumber: 19
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "mt-4",
                children: "Start creating your business plan by adding a new section!"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 97,
                columnNumber: 19
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }, undefined);
};

const getStaticPaths = async () => {
  const snapshot = await _lib_firebase_admin__WEBPACK_IMPORTED_MODULE_2__["db"].collection('projects').get();
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
const getStaticProps = async ({
  params
}) => {
  console.log(params);
  let ref = _lib_firebase_admin__WEBPACK_IMPORTED_MODULE_2__["db"].collection('projects').doc(params.id).collection('businessPlan').doc(params.project).collection('inputs'); //   const project = await ref.get();
  //   project.docs.forEach((doc) => {
  //   })

  const snapshot = await ref.get();
  const project = [];
  snapshot.docs.forEach(doc => {
    project.push(_objectSpread({}, doc.data()));
  });
  return {
    props: {
      project
    },
    revalidate: 1
  };
};
/* harmony default export */ __webpack_exports__["default"] = (UniqueBusinessPlanPage);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9kYXNoYm9hcmQvc3RhcnR1cC9wcm9qZWN0L2J1c2luZXNzLWFwcC9jb21wZXRpdG9ycy9VbmlxdWVFbGVtZW50LmpzIiwid2VicGFjazovLy8uL2xpYi9maXJlYmFzZS1hZG1pbi5qcyIsIndlYnBhY2s6Ly8vLi9saWIvZmlyZWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvZGFzaGJvYXJkL3Byb2plY3RzL1twcm9qZWN0XS9idXNpbmVzcy1wbGFuLy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS1hZG1pblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL2FwcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL2F1dGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9maXJlc3RvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9mdW5jdGlvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9zdG9yYWdlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZ3NhcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpzLWNvb2tpZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1kZXZpY2UtZGV0ZWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiVW5pcXVlQ29tcGV0aXRvcnNQYWdlIiwiY29tcGV0aXRvciIsImNvbnNvbGUiLCJsb2ciLCJkcm9wZG93bkhlbHBlciIsInNldERyb3Bkb3duSGVscGVyIiwidXNlU3RhdGUiLCJpbml0aWFsQ29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImluZGV4IiwiZGVzY3JpcHRpb25UaXRsZSIsInNldERlc2NyaXB0aW9uVGl0bGUiLCJwbGFjZWhvbGRlclRpdGxlIiwic2V0UGxhY2Vob2xkZXJUaXRsZSIsImRlc2NyaXB0aW9uTW9kZWwiLCJzZXREZXNjcmlwdGlvbk1vZGVsIiwicGxhY2Vob2xkZXJNb2RlbCIsInNldFBsYWNlaG9sZGVyTW9kZWwiLCJkZXNjcmlwdGlvblByb2R1Y3QiLCJzZXREZXNjcmlwdGlvblByb2R1Y3QiLCJwbGFjZWhvbGRlclByb2R1Y3QiLCJzZXRQbGFjZWhvbGRlclByb2R1Y3QiLCJkZXNjcmlwdGlvblByb21vdGlvbiIsInNldERlc2NyaXB0aW9uUHJvbW90aW9uIiwicGxhY2Vob2xkZXJQcm9tb3Rpb24iLCJzZXRQbGFjZWhvbGRlclByb21vdGlvbiIsImRlc2NyaXB0aW9uU3RyZW5ndGhzIiwic2V0RGVzY3JpcHRpb25TdHJlbmd0aHMiLCJwbGFjZWhvbGRlclN0cmVuZ3RocyIsInNldFBsYWNlaG9sZGVyU3RyZW5ndGhzIiwiZGVzY3JpcHRpb25XZWFrbmVzc2VzIiwic2V0RGVzY3JpcHRpb25XZWFrbmVzc2VzIiwicGxhY2Vob2xkZXJXZWFrbmVzc2VzIiwic2V0UGxhY2Vob2xkZXJXZWFrbmVzc2VzIiwiZGVzY3JpcHRpb25PcHBvcnR1bml0aWVzIiwic2V0RGVzY3JpcHRpb25PcHBvcnR1bml0aWVzIiwicGxhY2Vob2xkZXJPcHBvcnR1bml0aWVzIiwic2V0UGxhY2Vob2xkZXJPcHBvcnR1bml0aWVzIiwidXNlRWZmZWN0IiwiZHJvcERvd25FbGVtZW50IiwiZGF0YUVsZW1lbnQiLCJnc2FwIiwic2V0Iiwicm90YXRpb24iLCJpc01vYmlsZSIsImNvbnRhaW5lckVsZW1lbnQiLCJjb21wZXRpdG9yTWFuYWdlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0byIsImhlaWdodCIsIm1hcmlnbkJvdHRvbSIsImR1cmF0aW9uIiwiZWFzZSIsIkxpbmVhciIsImVhc2VJbiIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsImVhc2VPdXQiLCJvblNlY3Rpb25Ecm9wZG93biIsInNlY3Rpb25IZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJhdXRvQWxwaGEiLCJ0b3AiLCJpbWFnZSIsImRpc3BsYXkiLCJ6SW5kZXgiLCJ0aXRsZSIsImxvY2F0aW9uIiwiZW1wbG95ZWVzIiwicmV2ZW51ZSIsImNvbXBhbnlEZXNjcmlwdGlvbiIsImJ1c2luZXNzTW9kZWwiLCJwcm9kdWN0T3ZlcnZpZXciLCJwcm9tb3Rpb25TdHJhdGVneSIsImNvbXBhbnlTdHJlbmd0aHMiLCJjb21wYW55V2Vha25lc3NlcyIsIm9wcG9ydHVuaXRpZXMiLCJhZG1pbiIsImxlbmd0aCIsImNyZWRlbnRpYWwiLCJjZXJ0IiwiY2xpZW50X2VtYWlsIiwicHJpdmF0ZV9rZXkiLCJwcm9qZWN0X2lkIiwiZGF0YWJhc2VVUkwiLCJhdXRoIiwiZGIiLCJmaXJlYmFzZSIsImFwcHMiLCJpbml0aWFsaXplQXBwIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwibWVhc3VyZW1lbnRJZCIsImZpcmVzdG9yZSIsInN0b3JhZ2UiLCJVbmlxdWVCdXNpbmVzc1BsYW5QYWdlIiwicHJvamVjdCIsInJvdXRlciIsInVzZVJvdXRlciIsImlzRmFsbGJhY2siLCJzZWxlY3RlZFNlY3Rpb24iLCJzZWN0aW9uVGl0bGVVcGRhdGUiLCJ0YWJsZVVwZGF0ZSIsImhlYWRlclVwZGF0ZSIsInJlb3JkZXJFbGVtZW50cyIsInN0YXRlIiwiYWRkQ2hhcnQiLCJhZGROZXdIZWFkZXIiLCJjaGFydFR5cGVVcGRhdGUiLCJvbkRhdGFzZXRMYWJlbDZVcGRhdGUiLCJvbkRhdGFzZXRMYWJlbDVVcGRhdGUiLCJvbkRhdGFzZXRMYWJlbDRVcGRhdGUiLCJvbkRhdGFzZXRMYWJlbDNVcGRhdGUiLCJvbkRhdGFzZXRMYWJlbDJVcGRhdGUiLCJvbkRhdGFzZXRMYWJlbDFVcGRhdGUiLCJvbkRhdGFzZXQ2VXBkYXRlIiwib25EYXRhc2V0NVVwZGF0ZSIsIm9uRGF0YXNldDRVcGRhdGUiLCJvbkRhdGFzZXQzVXBkYXRlIiwib25EYXRhc2V0MlVwZGF0ZSIsIm9uRGF0YXNldDFVcGRhdGUiLCJjaGFydExhYmVsc1VwZGF0ZSIsImNoYXJ0VmFsdWVVcGRhdGUiLCJhZGROZXdDaGFydCIsImRlbGV0ZVBhcnRpY3VsYXJGaWVsZCIsImFkZE5ld0ZpZWxkIiwiZmllbGRVcGRhdGUiLCJzZWN0aW9uVXBkYXRlIiwic2VsZWN0ZWRTZWN0aW9uSW5kZXgiLCJzZWN0aW9ucyIsImdldFN0YXRpY1BhdGhzIiwic25hcHNob3QiLCJjb2xsZWN0aW9uIiwiZ2V0IiwicHJvamVjdHMiLCJmb3JFYWNoIiwiZG9jIiwicHVzaCIsImRhdGEiLCJwYXRocyIsIm1hcCIsInBhcmFtcyIsInByb2plY3ROYW1lIiwidG9TdHJpbmciLCJpZCIsImZhbGxiYWNrIiwiZ2V0U3RhdGljUHJvcHMiLCJyZWYiLCJkb2NzIiwicHJvcHMiLCJyZXZhbGlkYXRlIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7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LENBQWNiLE9BQWQsQ0FBdUJDLEdBQUQsSUFBUztBQUM3QnhDLFdBQU8sQ0FBQ3lDLElBQVIsbUJBQWtCRCxHQUFHLENBQUNFLElBQUosRUFBbEI7QUFDRCxHQUZEO0FBSUEsU0FBTztBQUNMVyxTQUFLLEVBQUU7QUFBRXJEO0FBQUYsS0FERjtBQUVMc0QsY0FBVSxFQUFFO0FBRlAsR0FBUDtBQUlELENBbEJNO0FBb0JRdkQscUZBQWYsRTs7Ozs7Ozs7Ozs7QUM3SkEsMkM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsZ0Q7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvZGFzaGJvYXJkL3Byb2plY3RzL1twcm9qZWN0XS9idXNpbmVzcy1wbGFuL1tpZF0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2Rhc2hib2FyZC9wcm9qZWN0cy9bcHJvamVjdF0vYnVzaW5lc3MtcGxhbi9baWRdLmpzXCIpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgaXNNb2JpbGUgfSBmcm9tICdyZWFjdC1kZXZpY2UtZGV0ZWN0JztcclxuaW1wb3J0IGdzYXAsIHsgTGluZWFyIH0gZnJvbSAnZ3NhcCc7XHJcblxyXG5jb25zdCBVbmlxdWVDb21wZXRpdG9yc1BhZ2UgPSAoeyBjb21wZXRpdG9yIH0pID0+IHtcclxuICBjb25zb2xlLmxvZygnQ29tcGV0aXRvciAtLT4gJywgY29tcGV0aXRvcik7XHJcbiAgLy8gICBEcm9wZG93blxyXG4gIGNvbnN0IFtkcm9wZG93bkhlbHBlciwgc2V0RHJvcGRvd25IZWxwZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBpbml0aWFsQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29tcGV0aXRvci5pbmRleCk7XHJcbiAgLy8gRWxlbWVudHNcclxuICBjb25zdCBbZGVzY3JpcHRpb25UaXRsZSwgc2V0RGVzY3JpcHRpb25UaXRsZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbcGxhY2Vob2xkZXJUaXRsZSwgc2V0UGxhY2Vob2xkZXJUaXRsZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbZGVzY3JpcHRpb25Nb2RlbCwgc2V0RGVzY3JpcHRpb25Nb2RlbF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbcGxhY2Vob2xkZXJNb2RlbCwgc2V0UGxhY2Vob2xkZXJNb2RlbF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbZGVzY3JpcHRpb25Qcm9kdWN0LCBzZXREZXNjcmlwdGlvblByb2R1Y3RdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW3BsYWNlaG9sZGVyUHJvZHVjdCwgc2V0UGxhY2Vob2xkZXJQcm9kdWN0XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtkZXNjcmlwdGlvblByb21vdGlvbiwgc2V0RGVzY3JpcHRpb25Qcm9tb3Rpb25dID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW3BsYWNlaG9sZGVyUHJvbW90aW9uLCBzZXRQbGFjZWhvbGRlclByb21vdGlvbl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbZGVzY3JpcHRpb25TdHJlbmd0aHMsIHNldERlc2NyaXB0aW9uU3RyZW5ndGhzXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtwbGFjZWhvbGRlclN0cmVuZ3Rocywgc2V0UGxhY2Vob2xkZXJTdHJlbmd0aHNdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2Rlc2NyaXB0aW9uV2Vha25lc3Nlcywgc2V0RGVzY3JpcHRpb25XZWFrbmVzc2VzXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtwbGFjZWhvbGRlcldlYWtuZXNzZXMsIHNldFBsYWNlaG9sZGVyV2Vha25lc3Nlc10gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbZGVzY3JpcHRpb25PcHBvcnR1bml0aWVzLCBzZXREZXNjcmlwdGlvbk9wcG9ydHVuaXRpZXNdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW3BsYWNlaG9sZGVyT3Bwb3J0dW5pdGllcywgc2V0UGxhY2Vob2xkZXJPcHBvcnR1bml0aWVzXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZGVzY3JpcHRpb25UaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBkZXNjcmlwdGlvblRpdGxlJHtjb21wZXRpdG9yLmluZGV4fWApO1xyXG4gICAgc2V0RGVzY3JpcHRpb25UaXRsZShkZXNjcmlwdGlvblRpdGxlKTtcclxuICAgIGNvbnN0IHBsYWNlaG9sZGVyVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcGxhY2Vob2xkZXJUaXRsZSR7Y29tcGV0aXRvci5pbmRleH1gKTtcclxuICAgIHNldFBsYWNlaG9sZGVyVGl0bGUocGxhY2Vob2xkZXJUaXRsZSk7XHJcbiAgICBjb25zdCBkZXNjcmlwdGlvbk1vZGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGRlc2NyaXB0aW9uTW9kZWwke2NvbXBldGl0b3IuaW5kZXh9YCk7XHJcbiAgICBzZXREZXNjcmlwdGlvbk1vZGVsKGRlc2NyaXB0aW9uTW9kZWwpO1xyXG4gICAgY29uc3QgcGxhY2Vob2xkZXJNb2RlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwbGFjZWhvbGRlck1vZGVsJHtjb21wZXRpdG9yLmluZGV4fWApO1xyXG4gICAgc2V0UGxhY2Vob2xkZXJNb2RlbChwbGFjZWhvbGRlck1vZGVsKTtcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uUHJvZHVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBkZXNjcmlwdGlvblByb2R1Y3Qke2NvbXBldGl0b3IuaW5kZXh9YCk7XHJcbiAgICBzZXREZXNjcmlwdGlvblByb2R1Y3QoZGVzY3JpcHRpb25Qcm9kdWN0KTtcclxuICAgIGNvbnN0IHBsYWNlaG9sZGVyUHJvZHVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwbGFjZWhvbGRlclByb2R1Y3Qke2NvbXBldGl0b3IuaW5kZXh9YCk7XHJcbiAgICBzZXRQbGFjZWhvbGRlclByb2R1Y3QocGxhY2Vob2xkZXJQcm9kdWN0KTtcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uUHJvbW90aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGRlc2NyaXB0aW9uUHJvbW90aW9uJHtjb21wZXRpdG9yLmluZGV4fWApO1xyXG4gICAgc2V0RGVzY3JpcHRpb25Qcm9tb3Rpb24oZGVzY3JpcHRpb25Qcm9tb3Rpb24pO1xyXG4gICAgY29uc3QgcGxhY2Vob2xkZXJQcm9tb3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcGxhY2Vob2xkZXJQcm9tb3Rpb24ke2NvbXBldGl0b3IuaW5kZXh9YCk7XHJcbiAgICBzZXRQbGFjZWhvbGRlclByb21vdGlvbihwbGFjZWhvbGRlclByb21vdGlvbik7XHJcbiAgICBjb25zdCBkZXNjcmlwdGlvblN0cmVuZ3RocyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBkZXNjcmlwdGlvblN0cmVuZ3RocyR7Y29tcGV0aXRvci5pbmRleH1gKTtcclxuICAgIHNldERlc2NyaXB0aW9uU3RyZW5ndGhzKGRlc2NyaXB0aW9uU3RyZW5ndGhzKTtcclxuICAgIGNvbnN0IHBsYWNlaG9sZGVyU3RyZW5ndGhzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHBsYWNlaG9sZGVyU3RyZW5ndGhzJHtjb21wZXRpdG9yLmluZGV4fWApO1xyXG4gICAgc2V0UGxhY2Vob2xkZXJTdHJlbmd0aHMocGxhY2Vob2xkZXJTdHJlbmd0aHMpO1xyXG4gICAgY29uc3QgZGVzY3JpcHRpb25XZWFrbmVzc2VzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGRlc2NyaXB0aW9uV2Vha25lc3NlcyR7Y29tcGV0aXRvci5pbmRleH1gKTtcclxuICAgIHNldERlc2NyaXB0aW9uV2Vha25lc3NlcyhkZXNjcmlwdGlvbldlYWtuZXNzZXMpO1xyXG4gICAgY29uc3QgcGxhY2Vob2xkZXJXZWFrbmVzc2VzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHBsYWNlaG9sZGVyV2Vha25lc3NlcyR7Y29tcGV0aXRvci5pbmRleH1gKTtcclxuICAgIHNldFBsYWNlaG9sZGVyV2Vha25lc3NlcyhwbGFjZWhvbGRlcldlYWtuZXNzZXMpO1xyXG4gICAgY29uc3QgZGVzY3JpcHRpb25PcHBvcnR1bml0aWVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGRlc2NyaXB0aW9uT3Bwb3J0dW5pdGllcyR7Y29tcGV0aXRvci5pbmRleH1gKTtcclxuICAgIHNldERlc2NyaXB0aW9uT3Bwb3J0dW5pdGllcyhkZXNjcmlwdGlvbk9wcG9ydHVuaXRpZXMpO1xyXG4gICAgY29uc3QgcGxhY2Vob2xkZXJPcHBvcnR1bml0aWVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHBsYWNlaG9sZGVyT3Bwb3J0dW5pdGllcyR7Y29tcGV0aXRvci5pbmRleH1gKTtcclxuICAgIHNldFBsYWNlaG9sZGVyT3Bwb3J0dW5pdGllcyhwbGFjZWhvbGRlck9wcG9ydHVuaXRpZXMpO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBkcm9wRG93bkVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZHJvcGRvd24ke2NvbXBldGl0b3IuaW5kZXh9YCk7XHJcbiAgY29uc3QgZGF0YUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZGF0YSR7Y29tcGV0aXRvci5pbmRleH1gKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdzYXAuc2V0KGRyb3BEb3duRWxlbWVudCwgeyByb3RhdGlvbjogJy05MF9jdycgfSk7XHJcbiAgICBpZiAoIWlzTW9iaWxlKSB7XHJcbiAgICAgIGNvbnN0IGNvbnRhaW5lckVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgY29udGFpbmVyJHtjb21wZXRpdG9yLmluZGV4fWApO1xyXG4gICAgICBjb25zdCBjb21wZXRpdG9yTWFuYWdlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBtYW5hZ2VyJHtjb21wZXRpdG9yLmluZGV4fWApO1xyXG4gICAgICBjb250YWluZXJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoKSA9PiB7XHJcbiAgICAgICAgZ3NhcC50byhjb21wZXRpdG9yTWFuYWdlciwgeyBoZWlnaHQ6IDE4LCBtYXJpZ25Cb3R0b206IDE2LCBkdXJhdGlvbjogMC41LCBlYXNlOiBMaW5lYXIuZWFzZUluIH0pO1xyXG4gICAgICAgIGdzYXAudG8oaW5pdGlhbENvbnRhaW5lciwgeyBtYXJnaW5Ub3A6IDE2LCBkdXJhdGlvbjogMC41LCBlYXNlOiBMaW5lYXIuZWFzZUluIH0pO1xyXG4gICAgICB9KTtcclxuICAgICAgY29udGFpbmVyRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xyXG4gICAgICAgIGdzYXAudG8oY29tcGV0aXRvck1hbmFnZXIsIHsgaGVpZ2h0OiAwLCBtYXJnaW5Cb3R0b206IDAsIGR1cmF0aW9uOiAwLjUsIGVhc2U6IExpbmVhci5lYXNlT3V0IH0pO1xyXG4gICAgICAgIGdzYXAudG8oaW5pdGlhbENvbnRhaW5lciwgeyBtYXJnaW5Ub3A6IDAsIGR1cmF0aW9uOiAwLjUsIGVhc2U6IExpbmVhci5lYXNlSW4gfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sIFtkcm9wRG93bkVsZW1lbnRdKTtcclxuXHJcbiAgY29uc3Qgb25TZWN0aW9uRHJvcGRvd24gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBzZWN0aW9uSGVpZ2h0ID1cclxuICAgICAgZGVzY3JpcHRpb25UaXRsZS5vZmZzZXRIZWlnaHQgK1xyXG4gICAgICBwbGFjZWhvbGRlclRpdGxlLm9mZnNldEhlaWdodCArXHJcbiAgICAgIGRlc2NyaXB0aW9uTW9kZWwub2Zmc2V0SGVpZ2h0ICtcclxuICAgICAgcGxhY2Vob2xkZXJNb2RlbC5vZmZzZXRIZWlnaHQgK1xyXG4gICAgICAyNCArXHJcbiAgICAgIGRlc2NyaXB0aW9uUHJvZHVjdC5vZmZzZXRIZWlnaHQgK1xyXG4gICAgICBwbGFjZWhvbGRlclByb2R1Y3Qub2Zmc2V0SGVpZ2h0ICtcclxuICAgICAgMjQgK1xyXG4gICAgICBkZXNjcmlwdGlvblByb21vdGlvbi5vZmZzZXRIZWlnaHQgK1xyXG4gICAgICBwbGFjZWhvbGRlclByb21vdGlvbi5vZmZzZXRIZWlnaHQgK1xyXG4gICAgICAyNCArXHJcbiAgICAgIGRlc2NyaXB0aW9uU3RyZW5ndGhzLm9mZnNldEhlaWdodCArXHJcbiAgICAgIHBsYWNlaG9sZGVyU3RyZW5ndGhzLm9mZnNldEhlaWdodCArXHJcbiAgICAgIDI0ICtcclxuICAgICAgZGVzY3JpcHRpb25XZWFrbmVzc2VzLm9mZnNldEhlaWdodCArXHJcbiAgICAgIHBsYWNlaG9sZGVyV2Vha25lc3Nlcy5vZmZzZXRIZWlnaHQgK1xyXG4gICAgICAyNCArXHJcbiAgICAgIGRlc2NyaXB0aW9uT3Bwb3J0dW5pdGllcy5vZmZzZXRIZWlnaHQgK1xyXG4gICAgICBwbGFjZWhvbGRlck9wcG9ydHVuaXRpZXMub2Zmc2V0SGVpZ2h0ICtcclxuICAgICAgMjQ7XHJcbiAgICBpZiAoIWRyb3Bkb3duSGVscGVyKSB7XHJcbiAgICAgIGdzYXAudG8oZGF0YUVsZW1lbnQsIHsgaGVpZ2h0OiBzZWN0aW9uSGVpZ2h0LCBtYXJnaW5Ub3A6IDMyLCBtYXJnaW5Cb3R0b206IDExMiwgYXV0b0FscGhhOiAxLCBkdXJhdGlvbjogMSwgZWFzZTogTGluZWFyIH0pO1xyXG4gICAgICBnc2FwLnRvKGRyb3BEb3duRWxlbWVudCwgeyByb3RhdGlvbjogJzBfY3cnLCBkdXJhdGlvbjogMSwgZWFzZTogTGluZWFyIH0pO1xyXG4gICAgICBzZXREcm9wZG93bkhlbHBlcih0cnVlKTtcclxuICAgIH0gZWxzZSBpZiAoZHJvcGRvd25IZWxwZXIpIHtcclxuICAgICAgZ3NhcC50byhkYXRhRWxlbWVudCwgeyBoZWlnaHQ6IDAsIG1hcmdpblRvcDogMCwgbWFyZ2luQm90dG9tOiAwLCBhdXRvQWxwaGE6IDAsIGR1cmF0aW9uOiAxLCBlYXNlOiBMaW5lYXIgfSk7XHJcbiAgICAgIGdzYXAudG8oZHJvcERvd25FbGVtZW50LCB7IHJvdGF0aW9uOiAnLTkwX2NjdycsIGR1cmF0aW9uOiAxLCBlYXNlOiBMaW5lYXIgfSk7XHJcbiAgICAgIHNldERyb3Bkb3duSGVscGVyKGZhbHNlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBzdHlsZT17eyBoZWlnaHQ6ICdmaXQtY29udGVudCcgfX1cclxuICAgICAgaWQ9e2Bjb250YWluZXIke2NvbXBldGl0b3IuaW5kZXh9YH1cclxuICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWJhY2tncm91bmQgcm91bmRlZC0yeGwgcC00IHNzbUNvbnRhaW5lcjpwLTYgc2hhZG93LW1kIG92ZXJmbG93LWhpZGRlbiBtdC04IHNtQ29udGFpbmVyOm10LThcIlxyXG4gICAgPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiBgJHtpc01vYmlsZSA/IDQwIDogMH1gLCB0b3A6IGAke2lzTW9iaWxlID8gJy02cHgnIDogJy02cHgnfWAgfX1cclxuICAgICAgICBpZD17YG1hbmFnZXIke2NvbXBldGl0b3IuaW5kZXh9YH1cclxuICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiByZWxhdGl2ZVwiXHJcbiAgICAgID5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAvLyAgIHN0eWxlPXt7IHRyYW5zZm9ybTogJ3JvdGF0ZSgtOTBkZWcpJyB9fVxyXG4gICAgICAgICAgb25DbGljaz17b25TZWN0aW9uRHJvcGRvd259XHJcbiAgICAgICAgICBpZD17YGRyb3Bkb3duJHtjb21wZXRpdG9yLmluZGV4fWB9XHJcbiAgICAgICAgICBzcmM9XCIvY29tcGV0aXRvcnMvZHJvcGRvd24uc3ZnXCJcclxuICAgICAgICAgIGhlaWdodD17MTh9XHJcbiAgICAgICAgICB3aWR0aD17MTh9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cclxuICAgICAgICAgIHsvKiA8aW1nIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyIG1yLTJcIiBzcmM9XCIvY29tcGV0aXRvcnMvZHJhZy5zdmdcIiBoZWlnaHQ9ezE4fSB3aWR0aD17MTh9IC8+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gb25Db21wZXRpdG9yUmVtb3ZlKGRhdGEuY29tcGV0aXRvci5pbmRleCl9XHJcbiAgICAgICAgICBzcmM9XCIvY29tcGV0aXRvcnMvcmVtb3ZlLnN2Z1wiXHJcbiAgICAgICAgICBoZWlnaHQ9ezE4fVxyXG4gICAgICAgICAgd2lkdGg9ezE4fVxyXG4gICAgICAgIC8+ICovfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGlkPXtjb21wZXRpdG9yLmluZGV4fVxyXG4gICAgICAgIGNsYXNzTmFtZT1cImZsZXggZ2FwLTYgZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHNtQ29udGFpbmVyOmdhcC0wIHNtQ29udGFpbmVyOmdyaWQgc21Db250YWluZXI6Z3JpZC1jb2xzLTEyZnJcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbUNvbnRhaW5lcjpjb2wtc3RhcnQtMSBzbUNvbnRhaW5lcjpjb2wtZW5kLTQganVzdGlmeS1zZWxmLWNlbnRlciBmbGV4IGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICB7Y29tcGV0aXRvci5pbWFnZSAhPT0gJycgPyAoXHJcbiAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgIGh0bWxGb3I9e2B1cGxvYWQtaW1hZ2Uke2NvbXBldGl0b3IuaW5kZXh9YH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LTIwIGgtMjAgY3Vyc29yLXBvaW50ZXIgcm91bmRlZC1mdWxsIGJnLXdoaXRlIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtjb21wZXRpdG9yLmltYWdlfSBoZWlnaHQ9ezU1fSB3aWR0aD17NTV9IC8+XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgaHRtbEZvcj17YHVwbG9hZC1pbWFnZSR7Y29tcGV0aXRvci5pbmRleH1gfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0yMCBoLTIwIGN1cnNvci1wb2ludGVyIHJvdW5kZWQtZnVsbCBiZy1wcmltYXJ5IGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9jb21wZXRpdG9ycy9lbXB0eS1pbWFnZS5zdmdcIiBoZWlnaHQ9ezY1fSB3aWR0aD17NjV9IC8+XHJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgaWQ9e2B1cGxvYWQtaW1hZ2Uke2NvbXBldGl0b3IuaW5kZXh9YH0gc3R5bGU9e3sgZGlzcGxheTogJ25vbmUnLCB6SW5kZXg6IDEwIH19IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbUNvbnRhaW5lcjpjb2wtc3RhcnQtNSBzbUNvbnRhaW5lcjpjb2wtZW5kLTEzIGdyaWQgZ3JpZC1jb2xzLTJmciBncmlkLXJvd3MtMmZyIGp1c3RpZnktaXRlbXMtY2VudGVyIGl0ZW1zLWNlbnRlciBnYXAteC00IHNzbUNvbnRhaW5lcjpnYXAteC04IGdhcC15LTIgc3NtQ29udGFpbmVyOmdhcC15LTRcIj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHZhbHVlPXtjb21wZXRpdG9yLnRpdGxlfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQtMnhsIHctZnVsbCBweC0zIHB5LTIgdGV4dC1zbSB0ZXh0LXByaW1hcnlkYXJrIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJuYW1lXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdmFsdWU9e2NvbXBldGl0b3IubG9jYXRpb259XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZC0yeGwgdy1mdWxsIHB4LTMgcHktMiB0ZXh0LXNtIHRleHQtcHJpbWFyeWRhcmsgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImxvY2F0aW9uXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdmFsdWU9e2NvbXBldGl0b3IuZW1wbG95ZWVzfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQtMnhsIHctZnVsbCBweC0zIHB5LTIgdGV4dC1zbSB0ZXh0LXByaW1hcnlkYXJrIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlbXBsb3llZXNcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB2YWx1ZT17Y29tcGV0aXRvci5yZXZlbnVlfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQtMnhsIHctZnVsbCBweC0zIHB5LTIgdGV4dC1zbSB0ZXh0LXByaW1hcnlkYXJrIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJyZXZlbnVlXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgey8qIENvbXBhbnkgZGVzY3JpcHRpb24gKi99XHJcbiAgICAgIDxkaXYgaWQ9e2BkYXRhJHtjb21wZXRpdG9yLmluZGV4fWB9IGNsYXNzTmFtZT1cInctZnVsbCBoLTAgaW52aXNpYmxlXCI+XHJcbiAgICAgICAgPGRpdiBpZD17YGRlc2NyaXB0aW9uVGl0bGUke2NvbXBldGl0b3IuaW5kZXh9YH0gY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCIvY29tcGV0aXRvcnMvZGVzY3JpcHRpb24uc3ZnXCIgaGVpZ2h0PXsyMn0gd2lkdGg9ezIyfSAvPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5ZGFyayBtbC0yXCI+Q29tcGFueSBkZXNjcmlwdGlvbjwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgIHZhbHVlPXtjb21wZXRpdG9yLmNvbXBhbnlEZXNjcmlwdGlvbn1cclxuICAgICAgICAgIGlkPXtgcGxhY2Vob2xkZXJUaXRsZSR7Y29tcGV0aXRvci5pbmRleH1gfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIHJvdW5kZWQtMnhsIG10LTIgcC0yIHRleHQtcHJpbWFyeWRhcmsgdGV4dC1zbSBweC00IHB5LTMgaC0yOCBtYXgtaC0yOCBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJEZXNjcmliZSB0aGUgbWFpbiBhc3N1bXB0aW9uIG9mIGFuYWx5emVkIGNvbXBhbnkuXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIHsvKiBUaXRsZSBlbmQgKi99XHJcbiAgICAgICAgPGRpdiBpZD17YGRlc2NyaXB0aW9uTW9kZWwke2NvbXBldGl0b3IuaW5kZXh9YH0gY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlciBtdC02XCI+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cIi9jb21wZXRpdG9ycy9tb2RlbC5zdmdcIiBoZWlnaHQ9ezIyfSB3aWR0aD17MjJ9IC8+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnlkYXJrIG1sLTJcIj5CdXNpbmVzcyBtb2RlbDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgIHZhbHVlPXtjb21wZXRpdG9yLmJ1c2luZXNzTW9kZWx9XHJcbiAgICAgICAgICBpZD17YHBsYWNlaG9sZGVyTW9kZWwke2NvbXBldGl0b3IuaW5kZXh9YH1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy13aGl0ZSByb3VuZGVkLTJ4bCBtdC0yIHAtMiB0ZXh0LXByaW1hcnlkYXJrIHRleHQtc20gcHgtNCBweS0zIGgtMjggbWF4LWgtMjggZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSG93IGRvZXMgdGhlIGNvbXBhbnkgYnVzaW5lc3MgbW9kZWwgbG9vayBsaWtlP1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgICB7LyogTW9kZWwgZW5kICovfVxyXG4gICAgICAgIDxkaXYgaWQ9e2BkZXNjcmlwdGlvblByb2R1Y3Qke2NvbXBldGl0b3IuaW5kZXh9YH0gY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlciBtdC02XCI+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cIi9jb21wZXRpdG9ycy9wcm9kdWN0MS5zdmdcIiBoZWlnaHQ9ezIyfSB3aWR0aD17MjJ9IC8+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnlkYXJrIG1sLTJcIj5Qcm9kdWN0IG92ZXJ2aWV3PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgdmFsdWU9e2NvbXBldGl0b3IucHJvZHVjdE92ZXJ2aWV3fVxyXG4gICAgICAgICAgaWQ9e2BwbGFjZWhvbGRlclByb2R1Y3Qke2NvbXBldGl0b3IuaW5kZXh9YH1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy13aGl0ZSByb3VuZGVkLTJ4bCBtdC0yIHAtMiB0ZXh0LXByaW1hcnlkYXJrIHRleHQtc20gcHgtNCBweS0zIGgtMjggbWF4LWgtMjggZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV2hhdCBpcyB0aGUgZnVsbCByYW5nZSBvZiBwcm9kdWN0cyBhbmQgc2VydmljZXMgdGhlIGNvbXBhbnkgb2ZmZXJzP1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgICB7LyogUHJvZHVjdCBlbmQgKi99XHJcbiAgICAgICAgPGRpdiBpZD17YGRlc2NyaXB0aW9uUHJvbW90aW9uJHtjb21wZXRpdG9yLmluZGV4fWB9IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXIgbXQtNlwiPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCIvY29tcGV0aXRvcnMvcHJvbW90aW9uLnN2Z1wiIGhlaWdodD17MjJ9IHdpZHRoPXsyMn0gLz5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeWRhcmsgbWwtMlwiPlByb21vdGlvbiBzdHJhdGVneTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgIHZhbHVlPXtjb21wZXRpdG9yLnByb21vdGlvblN0cmF0ZWd5fVxyXG4gICAgICAgICAgaWQ9e2BwbGFjZWhvbGRlclByb21vdGlvbiR7Y29tcGV0aXRvci5pbmRleH1gfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIHJvdW5kZWQtMnhsIG10LTIgcC0yIHRleHQtcHJpbWFyeWRhcmsgdGV4dC1zbSBweC00IHB5LTMgaC0yOCBtYXgtaC0yOCBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJXaGF0IGFyZSB0aGUgY29tcGFueSBtYXJrZXRpbmcgYW5kIHByb21vdGlvbmFsIHN0cmF0ZWdpZXM/XCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIHsvKiBQcm9tb3Rpb24gZW5kICovfVxyXG4gICAgICAgIDxkaXYgaWQ9e2BkZXNjcmlwdGlvblN0cmVuZ3RocyR7Y29tcGV0aXRvci5pbmRleH1gfSBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyIG10LTZcIj5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiL2NvbXBldGl0b3JzL3N0cmVuZ3Rocy5zdmdcIiBoZWlnaHQ9ezIyfSB3aWR0aD17MjJ9IC8+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnlkYXJrIG1sLTJcIj5Db21wYW55IHN0cmVuZ3RoczwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgIHZhbHVlPXtjb21wZXRpdG9yLmNvbXBhbnlTdHJlbmd0aHN9XHJcbiAgICAgICAgICBpZD17YHBsYWNlaG9sZGVyU3RyZW5ndGhzJHtjb21wZXRpdG9yLmluZGV4fWB9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgcm91bmRlZC0yeGwgbXQtMiBwLTIgdGV4dC1wcmltYXJ5ZGFyayB0ZXh0LXNtIHB4LTQgcHktMyBoLTI4IG1heC1oLTI4IGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIldoYXQgZG8geW91ciBjb21wZXRpdG9ycyBkbyByZWFsbHkgd2VsbCB0aGF0IGRpZmZlcmVudGlhdGVzIHRoZW0/XCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIHsvKiBTdHJlbmd0aHMgZW5kICovfVxyXG4gICAgICAgIDxkaXYgaWQ9e2BkZXNjcmlwdGlvbldlYWtuZXNzZXMke2NvbXBldGl0b3IuaW5kZXh9YH0gY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlciBtdC02XCI+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cIi9jb21wZXRpdG9ycy93ZWFrbmVzc2VzLnN2Z1wiIGhlaWdodD17MjJ9IHdpZHRoPXsyMn0gLz5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeWRhcmsgbWwtMlwiPkNvbXBhbnkgV2Vha25lc3NlczwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgIHZhbHVlPXtjb21wZXRpdG9yLmNvbXBhbnlXZWFrbmVzc2VzfVxyXG4gICAgICAgICAgaWQ9e2BwbGFjZWhvbGRlcldlYWtuZXNzZXMke2NvbXBldGl0b3IuaW5kZXh9YH1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy13aGl0ZSByb3VuZGVkLTJ4bCBtdC0yIHAtMiB0ZXh0LXByaW1hcnlkYXJrIHRleHQtc20gcHgtNCBweS0zIGgtMjggbWF4LWgtMjggZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV2hhdCBkbyB0aGUgY29tcGFueSBjdXN0b21lcnMgY29tcGxhaW4gYWJvdXQgdGhlIG1vc3QsIGFuZCB3aGF0IHByb2R1Y3RzIGRvIHRoZXkgbGFjaz9cIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgey8qIFdlYWtuZXNzZXMgZW5kICovfVxyXG4gICAgICAgIDxkaXYgaWQ9e2BkZXNjcmlwdGlvbk9wcG9ydHVuaXRpZXMke2NvbXBldGl0b3IuaW5kZXh9YH0gY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlciBtdC02XCI+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cIi9jb21wZXRpdG9ycy9vcHBvcnR1bml0aWVzMi5zdmdcIiBoZWlnaHQ9ezIyfSB3aWR0aD17MjJ9IC8+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnlkYXJrIG1sLTJcIj5PcHBvcnR1bml0aWVzPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgdmFsdWU9e2NvbXBldGl0b3Iub3Bwb3J0dW5pdGllc31cclxuICAgICAgICAgIGlkPXtgcGxhY2Vob2xkZXJPcHBvcnR1bml0aWVzJHtjb21wZXRpdG9yLmluZGV4fWB9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgcm91bmRlZC0yeGwgbXQtMiBwLTIgdGV4dC1wcmltYXJ5ZGFyayB0ZXh0LXNtIHB4LTQgcHktMyBoLTI4IG1heC1oLTI4IGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIldoYXQgZGlzdGluZ3Vpc2ggeW91ciBzdGFydHVwIGZyb20gdGhpcyBwYXJ0aWN1bGFyIGNvbXBldGl0aXZlIGNvbXBhbnk/XCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIHsvKiBPcHBvcnR1bml0aWVzIGVuZCAqL31cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVW5pcXVlQ29tcGV0aXRvcnNQYWdlO1xyXG4iLCJpbXBvcnQgKiBhcyBhZG1pbiBmcm9tICdmaXJlYmFzZS1hZG1pbic7XHJcblxyXG5pZiAoIWFkbWluLmFwcHMubGVuZ3RoKSB7XHJcbiAgYWRtaW4uaW5pdGlhbGl6ZUFwcCh7XHJcbiAgICBjcmVkZW50aWFsOiBhZG1pbi5jcmVkZW50aWFsLmNlcnQoe1xyXG4gICAgICBjbGllbnRfZW1haWw6ICdmaXJlYmFzZS1hZG1pbnNkay1lZjhtcEBzYWFzLXN0YXJ0dXAtYTVhMzQuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20nLFxyXG4gICAgICBwcml2YXRlX2tleTpcclxuICAgICAgICAnLS0tLS1CRUdJTiBQUklWQVRFIEtFWS0tLS0tXFxuTUlJRXZBSUJBREFOQmdrcWhraUc5dzBCQVFFRkFBU0NCS1l3Z2dTaUFnRUFBb0lCQVFDbFpXa2ltOVBLS3I1MlxcbkQwWkRFdXY0SVRCSFVySS9yVHBYT1l6cUpuczRZNGJCRVBLZTIwMm81TXdNYnUvZWdXSWZtZUw1SStSUGc2R3FcXG5uakFGcUxtYXhZdmYwd01Xb3dEaU5WeDdQY3VqUjNkVThBL0dZb3lUVVFwWC9xdjY3NTRTdUp4bm0rQUE2TGtZXFxua3Y1SHR5dlExV1lMc0NCMk1GNWlhLzczd0J1SDgrVWtvbVg1R0owQ0ZnZXhrNHFBbnZoSHh0djhXWnhYM2RsRlxcbkRYeDRFeDgvdXljOWkvSTUxRC9OaERrbkFHL3M4VEdiT3V1VHU3b0JucHA4aml2SlJORWYrcHZqYXRid09oOFJcXG43ODJSbm1ud3N1MFB6SU5DYzVib3p0cW1hSkVXNnBLbDhrTmxtOUZ2cEtjd2NZTzJJcmZSR1d3WExGNG9LODh6XFxuY00zWEFabGRBZ01CQUFFQ2dnRUFIQjdTVWJxSnR6RXVRYmRXSEZoT3UxaTFNeU1wd0M3TklRQmRaNEFVYWlGdFxcbnkweDgyNnB3bVRzUlFEbnFXWHZJK1pONTVoOEdsY2hOQjh1dVlYL3UwcFFzdEdqVmVSZE1zcWtjNkswNGZySExcXG5aYXNORzQ4czFHMHVZNGllcCtMdWpzTkpnRW9kdXpuV0lvbjNacTBMYTQya3RHOEZEZU1xWVBSNG5KblNkSG9xXFxubTNwV2ZKaXIrcW5NSHNpUDVRVlJjNGdJU1V1ZUs3NzY5OUVMOHJGeU00ZFdDYlJmaTdZMEJBdS9ya2NGYm9pUFxcbjFISFhFSi9jVmlHS3FWSEx3cnNTamNlQTQyU1ArbkFpRFV4eUxxTGhaTW9lV0FNa28xQ09aMlhOamNFV0RCbTVcXG5DZDdSQ0EwS1REUFdyYzBCaGpSVnd3UHRDN1FWMVkra3Vpa2N0N2F5UVFLQmdRRFhjNWVpNW0wYi9oRDdEb1M1XFxuU1dDdHBLcTlCam10NnNwcmZ2OU9NeWF1QzlseWJQNktqa1kvaFJHbFpKSDJ3eE10MzNyUytYUXg1cEpnNEtSUVxcbkNjdmtGcjlicnZ4ZS95clVDSmgzMnNSazNGNkx2N0NVRkhVQmZpZ1pwZkJ2amlaUHl5bUdnMUtYYXkxTTM4T2FcXG5jOC9kc3puaTVyRUxscWxpdGhGTGl1RE1mUUtCZ1FERWhpa0lVa1haVXdOamZoQlVXeEZ1N2dWQTRHcGNKWkxzXFxubHVBdHMybkw5Mk1yWUcrWnV4MVdaa0J0eC9QUTRaWjJOOWl3MHpEQXRIcHVDcGpWdWxSc1p1TmJFS2tSeUdvTFxcbmd3MUFoNEtRZi9lMzhBRXRKUHZZTjc3TWFGd0RsK21hbmdxVFFZL215TnF0Um1lODNjbXhCSWIvL1pteDJxK0hcXG5YUlhVcE9UMllRS0JnSHNNNDgvLzl0VUQrRUxLK2ZhdzkreDBuYWN6eFFHVmxXSnJ0L2k3c2gyNVdzbkZnbU16XFxuK3Q4UWF4R2hMTlJZZWIyN1kzVFhVQXVuK25ZbUZ2STNoaUdROUYyeXhTU2thNXVLQlRwKzBhZ2hURVpZaHNzc1xcbkc5OXNaQTZ4L1c1WkszeHJOaDVESm9xZ2hkRGdBK0ZVdjZXSlZVaElKVm5QQkpNQ0ZVS2w0Tm9wQW9HQVY5b2xcXG5vNnVydi9BbE5xZlhRdTZIQjVEdDFrZThKRDlEdy9IYWUzT1YydkZYYXIrc2hBdXFuTUlQRVVSdWtUVVhYdmV1XFxuTGJYck9HbzF4TldGNXgxcHVoL3dpUGdVckhkc09JTTRQRjJYbDJNdGFST29ZdmNDZ25EQklYMlJqS1d2YjBneFxcbk1BMEIrRWhYd1ZnVTdkQXo1cWRBZGxWM0RKUFhIZXNWNUQ1bWdHRUNnWUI1eFIwZWFlRDVVakxzZGk5K3NRVlJcXG5Kdndyc1ZtUUpqZGJvYkQ2VWp1NzBNNWg2Z0F5WFpYYWpYOW5iOTdzVXRualdZRkxXY0NPWXVPVmFmNCs1dlpGXFxuVmIvaytrZm1aS1BzUUlkdDhjV3ZLK3RWVGlsanhHVWpmLytjZy82ZndjVjRqR2hQRlpEV0xCakM1ajVPWlpJWlxcbjVvdkYrck9YT043WFQ5OUZEYmVERlE9PVxcbi0tLS0tRU5EIFBSSVZBVEUgS0VZLS0tLS1cXG4nLFxyXG4gICAgICBwcm9qZWN0X2lkOiAnc2Fhcy1zdGFydHVwLWE1YTM0JyxcclxuICAgIH0pLFxyXG4gICAgZGF0YWJhc2VVUkw6ICdodHRwczovL3NhYXMtc3RhcnR1cC5maXJlYmFzZWlvLmNvbScsXHJcbiAgfSk7XHJcbn1cclxuXHJcbmNvbnN0IGF1dGggPSBhZG1pbi5hdXRoKCk7XHJcbmNvbnN0IGRiID0gYWRtaW4uZmlyZXN0b3JlKCk7XHJcblxyXG5leHBvcnQgeyBhdXRoLCBkYiB9O1xyXG4iLCJpbXBvcnQgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UvYXBwJztcclxuaW1wb3J0ICdmaXJlYmFzZS9hdXRoJztcclxuaW1wb3J0ICdmaXJlYmFzZS9maXJlc3RvcmUnO1xyXG5pbXBvcnQgJ2ZpcmViYXNlL3N0b3JhZ2UnO1xyXG5pbXBvcnQgJ2ZpcmViYXNlL2Z1bmN0aW9ucyc7XHJcblxyXG5pZiAoIWZpcmViYXNlLmFwcHMubGVuZ3RoKSB7XHJcbiAgZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcCh7XHJcbiAgICAvLyBhcGlLZXk6ICdBSXphU3lDeF9UMERxaXhMM0FYX1FMbC1qOFhEeWdHcDkxQy0zLVEnLFxyXG4gICAgLy8gYXV0aERvbWFpbjogJ3N0YXJ0dXAtdGVzdC00ZDYyNS5maXJlYmFzZWFwcC5jb20nLFxyXG4gICAgLy8gcHJvamVjdElkOiAnc3RhcnR1cC10ZXN0LTRkNjI1JyxcclxuICAgIC8vIHN0b3JhZ2VCdWNrZXQ6ICdzdGFydHVwLXRlc3QtNGQ2MjUuYXBwc3BvdC5jb20nLFxyXG4gICAgLy8gbWVzc2FnaW5nU2VuZGVySWQ6ICc0NzI0MTYxNTAyNDAnLFxyXG4gICAgLy8gYXBwSWQ6ICcxOjQ3MjQxNjE1MDI0MDp3ZWI6YjJhMTI4YWQyN2FmZmZkZGYzZTY4NScsXHJcbiAgICBhcGlLZXk6ICdBSXphU3lCT1NmdUFmN1ZBSzlZZWMyMGxHckRfNmJxNU1OUm05c0UnLFxyXG4gICAgYXV0aERvbWFpbjogJ3NhYXMtc3RhcnR1cC1hNWEzNC5maXJlYmFzZWFwcC5jb20nLFxyXG4gICAgcHJvamVjdElkOiAnc2Fhcy1zdGFydHVwLWE1YTM0JyxcclxuICAgIHN0b3JhZ2VCdWNrZXQ6ICdzYWFzLXN0YXJ0dXAtYTVhMzQuYXBwc3BvdC5jb20nLFxyXG4gICAgbWVzc2FnaW5nU2VuZGVySWQ6ICc4NjQyMTc1NzQ2MjUnLFxyXG4gICAgYXBwSWQ6ICcxOjg2NDIxNzU3NDYyNTp3ZWI6MTljZjU5MDEwOWVmNTBkZDkzNWJhMCcsXHJcbiAgICBtZWFzdXJlbWVudElkOiAnRy1RS1pKUFRLTVM0JyxcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZmlyZWJhc2U7XHJcbmV4cG9ydCBjb25zdCBhdXRoID0gZmlyZWJhc2UuYXV0aCgpO1xyXG5leHBvcnQgY29uc3QgZGIgPSBmaXJlYmFzZS5maXJlc3RvcmUoKTtcclxuZXhwb3J0IGNvbnN0IHN0b3JhZ2UgPSBmaXJlYmFzZS5zdG9yYWdlKCk7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGRiIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vbGliL2ZpcmViYXNlLWFkbWluJztcclxuaW1wb3J0IHsgZGIgYXMgZGJDbGllbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9saWIvZmlyZWJhc2UnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XHJcbmltcG9ydCBVbmlxdWVFbGVtZW50IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvZGFzaGJvYXJkL3N0YXJ0dXAvcHJvamVjdC9idXNpbmVzcy1hcHAvY29tcGV0aXRvcnMvVW5pcXVlRWxlbWVudCc7XHJcblxyXG5jb25zdCBVbmlxdWVCdXNpbmVzc1BsYW5QYWdlID0gKHsgcHJvamVjdCB9KSA9PiB7XHJcbiAgY29uc29sZS5sb2coJ1BhcnRpY3VsYXIgcHJvamVjdCAtLT4gJywgcHJvamVjdCk7XHJcbiAgLy8gICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gIC8vICAgICBwcm9qZWN0ICYmIHNldFNlbGVjdGVkUHJvamVjdChwcm9qZWN0WzBdKTtcclxuICAvLyAgICAgcHJvamVjdCAmJiBzZXRDb21wZXRpdG9ycyhwcm9qZWN0WzBdLmNvbXBldGl0b3JzQXJyYXkpO1xyXG4gIC8vICAgfSwgW3Byb2plY3RdKTtcclxuICAvLyAgIGNvbnN0IFtzZWxlY3RlZFByb2plY3QsIHNldFNlbGVjdGVkUHJvamVjdF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAvLyAgIGNvbnN0IFtjb21wZXRpdG9ycywgc2V0Q29tcGV0aXRvcnNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBpZiAocm91dGVyLmlzRmFsbGJhY2spIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPHA+TG9hZGluZy4uLjwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIHctZnVsbCByZWxhdGl2ZSBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtYXgtdy1mdWxsIHJlbGF0aXZlIG10LTE2IHB4LTggc2NyZWVuU21hbGw6cHgtMzIgdGV4dC1wcmltYXJ5ZGFya1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBncmlkLXJvd3MtMSBncmlkLWZsb3ctY29sXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICBoZWlnaHQ9XCIzMFwiXHJcbiAgICAgICAgICAgICAgd2lkdGg9XCIzMFwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmlsbC1jdXJyZW50IHRleHQtcHJpbWFyeSBkYXJrOnRleHQtcHJpbWFyeWRhcmtcIlxyXG4gICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTI4IDEyOFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8dGl0bGU+TGFuZGluZyBTdWNjZXNzPC90aXRsZT5cclxuICAgICAgICAgICAgICA8ZyBpZD1cIkxhbmRpbmdfU3VjY2Vzc1wiIGRhdGEtbmFtZT1cIkxhbmRpbmcgU3VjY2Vzc1wiPlxyXG4gICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xzLTFcIlxyXG4gICAgICAgICAgICAgICAgICBkPVwiTTEwOS4zLDkwLjFBNDYsNDYsMCwwLDAsNjUsMzZWMjAuMDhjMS43OC0uNjIsNy4yMS0yLjE0LDEyLjU3LjIzYTE5LjMzLDE5LjMzLDAsMCwwLDE0LjgyLDBjLjg3LS4zOC42MS4zMS42MS0xNy45M2ExLDEsMCwwLDAtMS40My0uOTNjLS4wNywwLTYuNjksMi44Ny0xMy4xOCwwQTE5LjQxLDE5LjQxLDAsMCwwLDY1LC45MywxLDEsMCwwLDAsNjMsMVYzNmE0NS44Niw0NS44NiwwLDAsMC0yOC42NiwxMC44QzE2LjE4LDQwLjQ4LDQsNDAsLjc5LDQ1LjUxLTIuMjksNTAuODYsMy45NCw1OS4zLDEwLDY1LjY4QTExLDExLDAsMCwwLDE4LDgzYy44MSwzOC40MSw0Ni4wOCw1OS4yLDc1LjY2LDM0LjIxLDguNTMsMywyOSw5LjE1LDMzLjU1LDEuMzFDMTMwLjM5LDExMywxMjMuODYsMTAyLjY1LDEwOS4zLDkwLjFaTTc3LjU5LDMuMzFBMTkuMzksMTkuMzksMCwwLDAsOTEsMy44M1YxOC42OGMtMS43OS42Mi03LjIyLDIuMTMtMTIuNTctLjIzQTE5LjE5LDE5LjE5LDAsMCwwLDY1LDE3LjkzVjMuMDhDNjYuODEsMi40Niw3Mi4yNCwxLDc3LjU5LDMuMzFaTTY1LDQ1di03YzM5LjY5LjkxLDU4LDUwLjI3LDI4LjIxLDc2LjgxQzcxLjMyLDEwNyw0Niw5Mi42NiwyNy43Nyw3OC42NGExMSwxMSwwLDAsMC0zLjItMTYuMTNBNDMuODgsNDMuODgsMCwwLDEsNjMsMzguMDZWNDVBMSwxLDAsMCwwLDY1LDQ1Wk0zMi41NSw0OC4zNmE0Ni4yMSw0Ni4yMSwwLDAsMC05LjgzLDEzLjI4LDEwLjkzLDEwLjkzLDAsMCwwLTExLjQsMi40N0MtOC4zOSw0My4yMyw1LjIzLDM5LjA4LDMyLjU1LDQ4LjM2Wk0xMCw3MmE5LDksMCwxLDEsOSw5QTksOSwwLDAsMSwxMCw3MlptMTAsMTFhMTEsMTEsMCwwLDAsNi4zNC0yLjgyYzE4LjQ1LDE0LjIxLDQzLjQ1LDI4LjM1LDY1LjA1LDM2LjIyQzYzLDEzOS4xNiwyMC44MywxMTkuMSwyMC4wNSw4M1ptMTA1LjQsMzQuNWMtMi41MSw0LjM1LTE0LDMuNjItMzAtMS44NWE0NS42MSw0NS42MSwwLDAsMCwxMy40Mi0yMy4yMUMxMjEuNTksMTAzLjU4LDEyOCwxMTMuMTIsMTI1LjQ1LDExNy40N1pcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnlkYXJrIHRleHQtMnhsIHNjcmVlbkxhcmdlOnRleHQtM3hsIG10LTIgcGwtMiBkYXJrOnRleHQtYmFja2dyb3VuZFwiPkJ1c2luZXNzIHBsYW48L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtc2Vjb25kYXJ5IHRleHQtbWQgc2NyZWVuTGFyZ2U6dGV4dC1iYXNlIHRleHQtZ3JheVwiPkNyZWF0ZSB5b3VyIGJ1c2luZXNzIHBsYW4gYW55IHdheSB5b3Ugd2FudDwvaDE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgey8qIFNFQ1RJT05TICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtYnVzaW5lc3NTbWFsbCBzY3JlZW5TbWFsbDpncmlkLWNvbHMtYnVzaW5lc3Mgc2NyZWVuTWVkaXVtOmdyaWQtY29scy1idXNpbmVzc01lZGl1bSBncmlkLWZsb3ctY29sIGdhcC14LThcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtbWF4Y29udGVudCBtdC0xMiBwYi0yMFwiPlxyXG4gICAgICAgICAgICB7c2VsZWN0ZWRTZWN0aW9uID8gKFxyXG4gICAgICAgICAgICAgIChjb25zb2xlLmxvZygnc2VsZWN0ZWQnKSxcclxuICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICA8RWRpdG9ySW5wdXRFbGVtZW50XHJcbiAgICAgICAgICAgICAgICAgIC8vIHNlY3Rpb25VcGRhdGU9e3NlY3Rpb25VcGRhdGV9XHJcbiAgICAgICAgICAgICAgICAgIC8vIHNlY3Rpb25VcGRhdGU9e3NlY3Rpb25VcGRhdGV9XHJcbiAgICAgICAgICAgICAgICAgIHNlY3Rpb25UaXRsZVVwZGF0ZT17dGhpcy5zZWN0aW9uVGl0bGVVcGRhdGV9XHJcbiAgICAgICAgICAgICAgICAgIHRhYmxlVXBkYXRlPXt0aGlzLnRhYmxlVXBkYXRlfVxyXG4gICAgICAgICAgICAgICAgICBoZWFkZXJVcGRhdGU9e3RoaXMuaGVhZGVyVXBkYXRlfVxyXG4gICAgICAgICAgICAgICAgICByZW9yZGVyRWxlbWVudHM9e3RoaXMucmVvcmRlckVsZW1lbnRzfVxyXG4gICAgICAgICAgICAgICAgICBwcm9qZWN0SWQ9e3RoaXMuc3RhdGUucHJvamVjdElkfVxyXG4gICAgICAgICAgICAgICAgICBhZGRDaGFydD17dGhpcy5hZGRDaGFydH1cclxuICAgICAgICAgICAgICAgICAgYWRkTmV3SGVhZGVyPXt0aGlzLmFkZE5ld0hlYWRlcn1cclxuICAgICAgICAgICAgICAgICAgY2hhcnRUeXBlVXBkYXRlPXt0aGlzLmNoYXJ0VHlwZVVwZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgb25EYXRhc2V0TGFiZWw2VXBkYXRlPXt0aGlzLm9uRGF0YXNldExhYmVsNlVwZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgb25EYXRhc2V0TGFiZWw1VXBkYXRlPXt0aGlzLm9uRGF0YXNldExhYmVsNVVwZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgb25EYXRhc2V0TGFiZWw0VXBkYXRlPXt0aGlzLm9uRGF0YXNldExhYmVsNFVwZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgb25EYXRhc2V0TGFiZWwzVXBkYXRlPXt0aGlzLm9uRGF0YXNldExhYmVsM1VwZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgb25EYXRhc2V0TGFiZWwyVXBkYXRlPXt0aGlzLm9uRGF0YXNldExhYmVsMlVwZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgb25EYXRhc2V0TGFiZWwxVXBkYXRlPXt0aGlzLm9uRGF0YXNldExhYmVsMVVwZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgb25EYXRhc2V0NlVwZGF0ZT17dGhpcy5vbkRhdGFzZXQ2VXBkYXRlfVxyXG4gICAgICAgICAgICAgICAgICBvbkRhdGFzZXQ1VXBkYXRlPXt0aGlzLm9uRGF0YXNldDVVcGRhdGV9XHJcbiAgICAgICAgICAgICAgICAgIG9uRGF0YXNldDRVcGRhdGU9e3RoaXMub25EYXRhc2V0NFVwZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgb25EYXRhc2V0M1VwZGF0ZT17dGhpcy5vbkRhdGFzZXQzVXBkYXRlfVxyXG4gICAgICAgICAgICAgICAgICBvbkRhdGFzZXQyVXBkYXRlPXt0aGlzLm9uRGF0YXNldDJVcGRhdGV9XHJcbiAgICAgICAgICAgICAgICAgIG9uRGF0YXNldDFVcGRhdGU9e3RoaXMub25EYXRhc2V0MVVwZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgY2hhcnRMYWJlbHNVcGRhdGU9e3RoaXMuY2hhcnRMYWJlbHNVcGRhdGV9XHJcbiAgICAgICAgICAgICAgICAgIGNoYXJ0VmFsdWVVcGRhdGU9e3RoaXMuY2hhcnRWYWx1ZVVwZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgYWRkTmV3Q2hhcnQ9e3RoaXMuYWRkTmV3Q2hhcnR9XHJcbiAgICAgICAgICAgICAgICAgIGRlbGV0ZVBhcnRpY3VsYXJGaWVsZD17dGhpcy5kZWxldGVQYXJ0aWN1bGFyRmllbGR9XHJcbiAgICAgICAgICAgICAgICAgIGFkZE5ld0ZpZWxkPXt0aGlzLmFkZE5ld0ZpZWxkfVxyXG4gICAgICAgICAgICAgICAgICBmaWVsZFVwZGF0ZT17dGhpcy5maWVsZFVwZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgc2VjdGlvblVwZGF0ZT17dGhpcy5zZWN0aW9uVXBkYXRlfVxyXG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZFNlY3Rpb249e3RoaXMuc3RhdGUuc2VsZWN0ZWRTZWN0aW9ufVxyXG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZFNlY3Rpb25JbmRleD17dGhpcy5zdGF0ZS5zZWxlY3RlZFNlY3Rpb25JbmRleH1cclxuICAgICAgICAgICAgICAgICAgc2VjdGlvbnM9e3RoaXMuc3RhdGUuc2VjdGlvbnN9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgcm91bmRlZC0yeGwgcC04IGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2VtcHR5LWJ1c2luZXNzLXBsYW4vZW1wdHkxLnN2Z1wiIGhlaWdodD17MzAwfSB3aWR0aD17MzAwfSAvPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC00XCI+U3RhcnQgY3JlYXRpbmcgeW91ciBidXNpbmVzcyBwbGFuIGJ5IGFkZGluZyBhIG5ldyBzZWN0aW9uITwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7LyogPFNlY3Rpb25NYW5hZ2VyXHJcbiAgICAgICAgICAgICAgICAgIHNlbGVjdGVkU2VjdGlvbj17dGhpcy5zdGF0ZS5zZWxlY3RlZFNlY3Rpb259XHJcbiAgICAgICAgICAgICAgICAgIHJlb3JkZXJTZWN0aW9ucz17dGhpcy5yZW9yZGVyU2VjdGlvbnN9XHJcbiAgICAgICAgICAgICAgICAgIHNlY3Rpb25zPXt0aGlzLnN0YXRlLnNlY3Rpb25zfVxyXG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZFNlY3Rpb25JbmRleD17dGhpcy5zdGF0ZS5zZWxlY3RlZFNlY3Rpb25JbmRleH1cclxuICAgICAgICAgICAgICAgICAgc2VsZWN0U2VjdGlvblBhZ2U9e3RoaXMuc2VsZWN0U2VjdGlvblBhZ2V9XHJcbiAgICAgICAgICAgICAgICAgIG5ld1NlY3Rpb25QYWdlPXt0aGlzLm5ld1NlY3Rpb25QYWdlfVxyXG4gICAgICAgICAgICAgICAgICBkZWxldGVTZWN0aW9uUGFnZT17dGhpcy5kZWxldGVTZWN0aW9uUGFnZX1cclxuICAgICAgICAgICAgICAgIC8+ICovfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3Qgc25hcHNob3QgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKCdwcm9qZWN0cycpLmdldCgpO1xyXG5cclxuICBjb25zdCBwcm9qZWN0cyA9IFtdO1xyXG4gIHNuYXBzaG90LmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgcHJvamVjdHMucHVzaChkb2MuZGF0YSgpKTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgcGF0aHMgPSBwcm9qZWN0cy5tYXAoKHByb2plY3QpID0+ICh7XHJcbiAgICBwYXJhbXM6IHtcclxuICAgICAgcHJvamVjdDogcHJvamVjdC5wcm9qZWN0TmFtZS50b1N0cmluZygpLFxyXG4gICAgICBpZDogcHJvamVjdC5wcm9qZWN0SWQudG9TdHJpbmcoKSxcclxuICAgIH0sXHJcbiAgfSkpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcGF0aHM6IHBhdGhzLFxyXG4gICAgZmFsbGJhY2s6IHRydWUsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XHJcbiAgY29uc29sZS5sb2cocGFyYW1zKTtcclxuICBsZXQgcmVmID0gZGIuY29sbGVjdGlvbigncHJvamVjdHMnKS5kb2MocGFyYW1zLmlkKS5jb2xsZWN0aW9uKCdidXNpbmVzc1BsYW4nKS5kb2MocGFyYW1zLnByb2plY3QpLmNvbGxlY3Rpb24oJ2lucHV0cycpO1xyXG4gIC8vICAgY29uc3QgcHJvamVjdCA9IGF3YWl0IHJlZi5nZXQoKTtcclxuICAvLyAgIHByb2plY3QuZG9jcy5mb3JFYWNoKChkb2MpID0+IHtcclxuICAvLyAgIH0pXHJcblxyXG4gIGNvbnN0IHNuYXBzaG90ID0gYXdhaXQgcmVmLmdldCgpO1xyXG4gIGNvbnN0IHByb2plY3QgPSBbXTtcclxuXHJcbiAgc25hcHNob3QuZG9jcy5mb3JFYWNoKChkb2MpID0+IHtcclxuICAgIHByb2plY3QucHVzaCh7IC4uLmRvYy5kYXRhKCkgfSk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczogeyBwcm9qZWN0IH0sXHJcbiAgICByZXZhbGlkYXRlOiAxLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVbmlxdWVCdXNpbmVzc1BsYW5QYWdlO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS1hZG1pblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9hcHBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvYXV0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9maXJlc3RvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvZnVuY3Rpb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL3N0b3JhZ2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ3NhcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqcy1jb29raWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZGV2aWNlLWRldGVjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==