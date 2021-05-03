webpackHotUpdate_N_E("pages/dashboard/projects/[project]/competitors/[id]",{

/***/ "./components/dashboard/startup/project/business-app/competitors/UniqueElement.js":
/*!****************************************************************************************!*\
  !*** ./components/dashboard/startup/project/business-app/competitors/UniqueElement.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-device-detect */ "./node_modules/react-device-detect/main.js");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_device_detect__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");


var _jsxFileName = "C:\\off-saas\\components\\dashboard\\startup\\project\\business-app\\competitors\\UniqueElement.js",
    _this = undefined,
    _s = $RefreshSig$();





var UniqueCompetitorsPage = function UniqueCompetitorsPage(_ref) {
  _s();

  var competitor = _ref.competitor;
  console.log('Competitor --> ', competitor); //   Dropdown

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      dropdownHelper = _useState[0],
      setDropdownHelper = _useState[1];

  var initialContainer = document.getElementById(competitor.index); // Element

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      descriptionTitle = _useState2[0],
      setDescriptionTitle = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      placeholderTitle = _useState3[0],
      setPlaceholderTitle = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      descriptionModel = _useState4[0],
      setDescriptionModel = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      placeholderModel = _useState5[0],
      setPlaceholderModel = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      descriptionProduct = _useState6[0],
      setDescriptionProduct = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      placeholderProduct = _useState7[0],
      setPlaceholderProduct = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      descriptionPromotion = _useState8[0],
      setDescriptionPromotion = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      placeholderPromotion = _useState9[0],
      setPlaceholderPromotion = _useState9[1];

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      descriptionStrengths = _useState10[0],
      setDescriptionStrengths = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      placeholderStrengths = _useState11[0],
      setPlaceholderStrengths = _useState11[1];

  var _useState12 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      descriptionWeaknesses = _useState12[0],
      setDescriptionWeaknesses = _useState12[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var descriptionTitle = document.getElementById("descriptionTitle".concat(competitor.index));
    setDescriptionTitle(descriptionTitle);
    var placeholderTitle = document.getElementById("placeholderTitle".concat(competitor.index));
    var descriptionModel = document.getElementById("descriptionModel".concat(competitor.index));
    var placeholderModel = document.getElementById("placeholderModel".concat(competitor.index));
    var descriptionProduct = document.getElementById("descriptionProduct".concat(competitor.index));
    var placeholderProduct = document.getElementById("placeholderProduct".concat(competitor.index));
    var descriptionPromotion = document.getElementById("descriptionPromotion".concat(competitor.index));
    var placeholderPromotion = document.getElementById("placeholderPromotion".concat(competitor.index));
    var descriptionStrengths = document.getElementById("descriptionStrengths".concat(competitor.index));
    var placeholderStrengths = document.getElementById("placeholderStrengths".concat(competitor.index));
    var descriptionWeaknesses = document.getElementById("descriptionWeaknesses".concat(competitor.index));
    var placeholderWeaknesses = document.getElementById("placeholderWeaknesses".concat(competitor.index));
    var descriptionOpportunities = document.getElementById("descriptionOpportunities".concat(competitor.index));
    var placeholderOpportunities = document.getElementById("placeholderOpportunities".concat(competitor.index));
  }); // Elements

  console.log(descriptionTitle);
  var dropDownElement = document.getElementById("dropdown".concat(competitor.index));
  var dataElement = document.getElementById("data".concat(competitor.index));
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    gsap__WEBPACK_IMPORTED_MODULE_3__["default"].set(dropDownElement, {
      rotation: '-90_cw'
    });

    if (!react_device_detect__WEBPACK_IMPORTED_MODULE_2__["isMobile"]) {
      var containerElement = document.getElementById("container".concat(competitor.index));
      var competitorManager = document.getElementById("manager".concat(competitor.index));
      containerElement.addEventListener('mouseenter', function () {
        gsap__WEBPACK_IMPORTED_MODULE_3__["default"].to(competitorManager, {
          height: 18,
          marignBottom: 16,
          duration: 0.5,
          ease: gsap__WEBPACK_IMPORTED_MODULE_3__["Linear"].easeIn
        });
        gsap__WEBPACK_IMPORTED_MODULE_3__["default"].to(initialContainer, {
          marginTop: 16,
          duration: 0.5,
          ease: gsap__WEBPACK_IMPORTED_MODULE_3__["Linear"].easeIn
        });
      });
      containerElement.addEventListener('mouseleave', function () {
        gsap__WEBPACK_IMPORTED_MODULE_3__["default"].to(competitorManager, {
          height: 0,
          marginBottom: 0,
          duration: 0.5,
          ease: gsap__WEBPACK_IMPORTED_MODULE_3__["Linear"].easeOut
        });
        gsap__WEBPACK_IMPORTED_MODULE_3__["default"].to(initialContainer, {
          marginTop: 0,
          duration: 0.5,
          ease: gsap__WEBPACK_IMPORTED_MODULE_3__["Linear"].easeIn
        });
      });
    }
  }, [dropDownElement]);

  var onSectionDropdown = function onSectionDropdown() {
    var sectionHeight = descriptionTitle.offsetHeight + placeholderTitle.offsetHeight + descriptionModel.offsetHeight + placeholderModel.offsetHeight + 24 + descriptionProduct.offsetHeight + placeholderProduct.offsetHeight + 24 + descriptionPromotion.offsetHeight + placeholderPromotion.offsetHeight + 24 + descriptionStrengths.offsetHeight + placeholderStrengths.offsetHeight + 24 + descriptionWeaknesses.offsetHeight + placeholderWeaknesses.offsetHeight + 24 + descriptionOpportunities.offsetHeight + placeholderOpportunities.offsetHeight + 24;

    if (!dropdownHelper) {
      gsap__WEBPACK_IMPORTED_MODULE_3__["default"].to(dataElement, {
        height: sectionHeight,
        marginTop: 32,
        marginBottom: 112,
        autoAlpha: 1,
        duration: 1,
        ease: gsap__WEBPACK_IMPORTED_MODULE_3__["Linear"]
      });
      gsap__WEBPACK_IMPORTED_MODULE_3__["default"].to(dropDownElement, {
        rotation: '0_cw',
        duration: 1,
        ease: gsap__WEBPACK_IMPORTED_MODULE_3__["Linear"]
      });
      setDropdownHelper(true);
    } else if (dropdownHelper) {
      gsap__WEBPACK_IMPORTED_MODULE_3__["default"].to(dataElement, {
        height: 0,
        marginTop: 0,
        marginBottom: 0,
        autoAlpha: 0,
        duration: 1,
        ease: gsap__WEBPACK_IMPORTED_MODULE_3__["Linear"]
      });
      gsap__WEBPACK_IMPORTED_MODULE_3__["default"].to(dropDownElement, {
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
    id: "container".concat(competitor.index),
    className: "w-full bg-background rounded-2xl p-4 ssmContainer:p-6 shadow-md overflow-hidden mt-8 smContainer:mt-8",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        height: "".concat(react_device_detect__WEBPACK_IMPORTED_MODULE_2__["isMobile"] ? 40 : 0),
        top: "".concat(react_device_detect__WEBPACK_IMPORTED_MODULE_2__["isMobile"] ? '-6px' : '-6px')
      },
      id: "manager".concat(competitor.index),
      className: "flex justify-between relative",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        className: "cursor-pointer" //   style={{ transform: 'rotate(-90deg)' }}
        ,
        onClick: onSectionDropdown,
        id: "dropdown".concat(competitor.index),
        src: "/competitors/dropdown.svg",
        height: 18,
        width: 18
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      id: competitor.index,
      className: "flex gap-6 flex-col justify-center items-center smContainer:gap-0 smContainer:grid smContainer:grid-cols-12fr",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "smContainer:col-start-1 smContainer:col-end-4 justify-self-center flex justify-start items-center",
        children: [competitor.image !== '' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "upload-image".concat(competitor.index),
          className: "relative w-20 h-20 cursor-pointer rounded-full bg-white flex justify-center items-center",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: competitor.image,
            height: 55,
            width: 55
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 137,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 13
        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "upload-image".concat(competitor.index),
            className: "w-20 h-20 cursor-pointer rounded-full bg-primary flex justify-center items-center",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "/competitors/empty-image.svg",
              height: 65,
              width: 65
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 145,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "file",
          id: "upload-image".concat(competitor.index),
          style: {
            display: 'none',
            zIndex: 10
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "smContainer:col-start-5 smContainer:col-end-13 grid grid-cols-2fr grid-rows-2fr justify-items-center items-center gap-x-4 ssmContainer:gap-x-8 gap-y-2 ssmContainer:gap-y-4",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            value: competitor.title,
            className: "bg-white rounded-2xl w-full px-3 py-2 text-sm text-primarydark focus:outline-none",
            placeholder: "name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 153,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            value: competitor.location,
            className: "bg-white rounded-2xl w-full px-3 py-2 text-sm text-primarydark focus:outline-none",
            placeholder: "location"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 160,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            value: competitor.employees,
            className: "bg-white rounded-2xl w-full px-3 py-2 text-sm text-primarydark focus:outline-none",
            placeholder: "employees"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 167,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            value: competitor.revenue,
            className: "bg-white rounded-2xl w-full px-3 py-2 text-sm text-primarydark focus:outline-none",
            placeholder: "revenue"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 174,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      id: "data".concat(competitor.index),
      className: "w-full h-0 invisible",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        id: "descriptionTitle".concat(competitor.index),
        className: "flex justify-start items-center",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "/competitors/description.svg",
          height: 22,
          width: 22
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "text-primarydark ml-2",
          children: "Company description"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
        value: competitor.companyDescription,
        id: "placeholderTitle".concat(competitor.index),
        className: "w-full bg-white rounded-2xl mt-2 p-2 text-primarydark text-sm px-4 py-3 h-28 max-h-28 focus:outline-none",
        placeholder: "Describe the main assumption of analyzed company."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        id: "descriptionModel".concat(competitor.index),
        className: "flex justify-start items-center mt-6",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "/competitors/model.svg",
          height: 22,
          width: 22
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 196,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "text-primarydark ml-2",
          children: "Business model"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 197,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
        value: competitor.businessModel,
        id: "placeholderModel".concat(competitor.index),
        className: "w-full bg-white rounded-2xl mt-2 p-2 text-primarydark text-sm px-4 py-3 h-28 max-h-28 focus:outline-none",
        placeholder: "How does the company business model look like?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        id: "descriptionProduct".concat(competitor.index),
        className: "flex justify-start items-center mt-6",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "/competitors/product1.svg",
          height: 22,
          width: 22
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 207,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "text-primarydark ml-2",
          children: "Product overview"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 208,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
        value: competitor.productOverview,
        id: "placeholderProduct".concat(competitor.index),
        className: "w-full bg-white rounded-2xl mt-2 p-2 text-primarydark text-sm px-4 py-3 h-28 max-h-28 focus:outline-none",
        placeholder: "What is the full range of products and services the company offers?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 210,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        id: "descriptionPromotion".concat(competitor.index),
        className: "flex justify-start items-center mt-6",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "/competitors/promotion.svg",
          height: 22,
          width: 22
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 218,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "text-primarydark ml-2",
          children: "Promotion strategy"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 219,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 217,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
        value: competitor.promotionStrategy,
        id: "placeholderPromotion".concat(competitor.index),
        className: "w-full bg-white rounded-2xl mt-2 p-2 text-primarydark text-sm px-4 py-3 h-28 max-h-28 focus:outline-none",
        placeholder: "What are the company marketing and promotional strategies?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 221,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        id: "descriptionStrengths".concat(competitor.index),
        className: "flex justify-start items-center mt-6",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "/competitors/strengths.svg",
          height: 22,
          width: 22
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 229,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "text-primarydark ml-2",
          children: "Company strengths"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 230,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 228,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
        value: competitor.companyStrengths,
        id: "placeholderStrengths".concat(competitor.index),
        className: "w-full bg-white rounded-2xl mt-2 p-2 text-primarydark text-sm px-4 py-3 h-28 max-h-28 focus:outline-none",
        placeholder: "What do your competitors do really well that differentiates them?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 232,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        id: "descriptionWeaknesses".concat(competitor.index),
        className: "flex justify-start items-center mt-6",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "/competitors/weaknesses.svg",
          height: 22,
          width: 22
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 240,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "text-primarydark ml-2",
          children: "Company Weaknesses"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 241,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 239,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
        value: competitor.companyWeaknesses,
        id: "placeholderWeaknesses".concat(competitor.index),
        className: "w-full bg-white rounded-2xl mt-2 p-2 text-primarydark text-sm px-4 py-3 h-28 max-h-28 focus:outline-none",
        placeholder: "What do the company customers complain about the most, and what products do they lack?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 243,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        id: "descriptionOpportunities".concat(competitor.index),
        className: "flex justify-start items-center mt-6",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "/competitors/opportunities2.svg",
          height: 22,
          width: 22
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 251,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "text-primarydark ml-2",
          children: "Opportunities"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 252,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 250,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
        value: competitor.opportunities,
        id: "placeholderOpportunities".concat(competitor.index),
        className: "w-full bg-white rounded-2xl mt-2 p-2 text-primarydark text-sm px-4 py-3 h-28 max-h-28 focus:outline-none",
        placeholder: "What distinguish your startup from this particular competitive company?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 254,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 97,
    columnNumber: 5
  }, _this);
};

_s(UniqueCompetitorsPage, "7WbBaJ3oohODe86Vc8BSUhGGmkg=");

_c = UniqueCompetitorsPage;
/* harmony default export */ __webpack_exports__["default"] = (UniqueCompetitorsPage);

var _c;

$RefreshReg$(_c, "UniqueCompetitorsPage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kYXNoYm9hcmQvc3RhcnR1cC9wcm9qZWN0L2J1c2luZXNzLWFwcC9jb21wZXRpdG9ycy9VbmlxdWVFbGVtZW50LmpzIl0sIm5hbWVzIjpbIlVuaXF1ZUNvbXBldGl0b3JzUGFnZSIsImNvbXBldGl0b3IiLCJjb25zb2xlIiwibG9nIiwidXNlU3RhdGUiLCJkcm9wZG93bkhlbHBlciIsInNldERyb3Bkb3duSGVscGVyIiwiaW5pdGlhbENvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbmRleCIsImRlc2NyaXB0aW9uVGl0bGUiLCJzZXREZXNjcmlwdGlvblRpdGxlIiwicGxhY2Vob2xkZXJUaXRsZSIsInNldFBsYWNlaG9sZGVyVGl0bGUiLCJkZXNjcmlwdGlvbk1vZGVsIiwic2V0RGVzY3JpcHRpb25Nb2RlbCIsInBsYWNlaG9sZGVyTW9kZWwiLCJzZXRQbGFjZWhvbGRlck1vZGVsIiwiZGVzY3JpcHRpb25Qcm9kdWN0Iiwic2V0RGVzY3JpcHRpb25Qcm9kdWN0IiwicGxhY2Vob2xkZXJQcm9kdWN0Iiwic2V0UGxhY2Vob2xkZXJQcm9kdWN0IiwiZGVzY3JpcHRpb25Qcm9tb3Rpb24iLCJzZXREZXNjcmlwdGlvblByb21vdGlvbiIsInBsYWNlaG9sZGVyUHJvbW90aW9uIiwic2V0UGxhY2Vob2xkZXJQcm9tb3Rpb24iLCJkZXNjcmlwdGlvblN0cmVuZ3RocyIsInNldERlc2NyaXB0aW9uU3RyZW5ndGhzIiwicGxhY2Vob2xkZXJTdHJlbmd0aHMiLCJzZXRQbGFjZWhvbGRlclN0cmVuZ3RocyIsImRlc2NyaXB0aW9uV2Vha25lc3NlcyIsInNldERlc2NyaXB0aW9uV2Vha25lc3NlcyIsInVzZUVmZmVjdCIsInBsYWNlaG9sZGVyV2Vha25lc3NlcyIsImRlc2NyaXB0aW9uT3Bwb3J0dW5pdGllcyIsInBsYWNlaG9sZGVyT3Bwb3J0dW5pdGllcyIsImRyb3BEb3duRWxlbWVudCIsImRhdGFFbGVtZW50IiwiZ3NhcCIsInNldCIsInJvdGF0aW9uIiwiaXNNb2JpbGUiLCJjb250YWluZXJFbGVtZW50IiwiY29tcGV0aXRvck1hbmFnZXIiLCJhZGRFdmVudExpc3RlbmVyIiwidG8iLCJoZWlnaHQiLCJtYXJpZ25Cb3R0b20iLCJkdXJhdGlvbiIsImVhc2UiLCJMaW5lYXIiLCJlYXNlSW4iLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJlYXNlT3V0Iiwib25TZWN0aW9uRHJvcGRvd24iLCJzZWN0aW9uSGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwiYXV0b0FscGhhIiwidG9wIiwiaW1hZ2UiLCJkaXNwbGF5IiwiekluZGV4IiwidGl0bGUiLCJsb2NhdGlvbiIsImVtcGxveWVlcyIsInJldmVudWUiLCJjb21wYW55RGVzY3JpcHRpb24iLCJidXNpbmVzc01vZGVsIiwicHJvZHVjdE92ZXJ2aWV3IiwicHJvbW90aW9uU3RyYXRlZ3kiLCJjb21wYW55U3RyZW5ndGhzIiwiY29tcGFueVdlYWtuZXNzZXMiLCJvcHBvcnR1bml0aWVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixPQUFvQjtBQUFBOztBQUFBLE1BQWpCQyxVQUFpQixRQUFqQkEsVUFBaUI7QUFDaERDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFaLEVBQStCRixVQUEvQixFQURnRCxDQUVoRDs7QUFGZ0Qsa0JBR0pHLHNEQUFRLENBQUMsS0FBRCxDQUhKO0FBQUEsTUFHekNDLGNBSHlDO0FBQUEsTUFHekJDLGlCQUh5Qjs7QUFLaEQsTUFBTUMsZ0JBQWdCLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QlIsVUFBVSxDQUFDUyxLQUFuQyxDQUF6QixDQUxnRCxDQU1oRDs7QUFOZ0QsbUJBT0FOLHNEQUFRLENBQUMsSUFBRCxDQVBSO0FBQUEsTUFPekNPLGdCQVB5QztBQUFBLE1BT3ZCQyxtQkFQdUI7O0FBQUEs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QUMsaUNBQVQ7QUFBMkMsZ0JBQU0sRUFBRSxFQUFuRDtBQUF1RCxlQUFLLEVBQUU7QUFBOUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQUcsbUJBQVMsRUFBQyx1QkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFuRUYsZUF1RUU7QUFDRSxhQUFLLEVBQUVULFVBQVUsQ0FBQ3lFLGFBRHBCO0FBRUUsVUFBRSxvQ0FBNkJ6RSxVQUFVLENBQUNTLEtBQXhDLENBRko7QUFHRSxpQkFBUyxFQUFDLDBHQUhaO0FBSUUsbUJBQVcsRUFBQztBQUpkO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF2RUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBdEZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBd0tELENBblFEOztHQUFNVixxQjs7S0FBQUEscUI7QUFxUVNBLG9GQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Rhc2hib2FyZC9wcm9qZWN0cy9bcHJvamVjdF0vY29tcGV0aXRvcnMvW2lkXS5lZGM4NzYxYWMyODNkYTIwYjViMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgaXNNb2JpbGUgfSBmcm9tICdyZWFjdC1kZXZpY2UtZGV0ZWN0JztcclxuaW1wb3J0IGdzYXAsIHsgTGluZWFyIH0gZnJvbSAnZ3NhcCc7XHJcblxyXG5jb25zdCBVbmlxdWVDb21wZXRpdG9yc1BhZ2UgPSAoeyBjb21wZXRpdG9yIH0pID0+IHtcclxuICBjb25zb2xlLmxvZygnQ29tcGV0aXRvciAtLT4gJywgY29tcGV0aXRvcik7XHJcbiAgLy8gICBEcm9wZG93blxyXG4gIGNvbnN0IFtkcm9wZG93bkhlbHBlciwgc2V0RHJvcGRvd25IZWxwZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBpbml0aWFsQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29tcGV0aXRvci5pbmRleCk7XHJcbiAgLy8gRWxlbWVudFxyXG4gIGNvbnN0IFtkZXNjcmlwdGlvblRpdGxlLCBzZXREZXNjcmlwdGlvblRpdGxlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtwbGFjZWhvbGRlclRpdGxlLCBzZXRQbGFjZWhvbGRlclRpdGxlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtkZXNjcmlwdGlvbk1vZGVsLCBzZXREZXNjcmlwdGlvbk1vZGVsXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtwbGFjZWhvbGRlck1vZGVsLCBzZXRQbGFjZWhvbGRlck1vZGVsXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtkZXNjcmlwdGlvblByb2R1Y3QsIHNldERlc2NyaXB0aW9uUHJvZHVjdF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbcGxhY2Vob2xkZXJQcm9kdWN0LCBzZXRQbGFjZWhvbGRlclByb2R1Y3RdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2Rlc2NyaXB0aW9uUHJvbW90aW9uLCBzZXREZXNjcmlwdGlvblByb21vdGlvbl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbcGxhY2Vob2xkZXJQcm9tb3Rpb24sIHNldFBsYWNlaG9sZGVyUHJvbW90aW9uXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtkZXNjcmlwdGlvblN0cmVuZ3Rocywgc2V0RGVzY3JpcHRpb25TdHJlbmd0aHNdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW3BsYWNlaG9sZGVyU3RyZW5ndGhzLCBzZXRQbGFjZWhvbGRlclN0cmVuZ3Roc10gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbZGVzY3JpcHRpb25XZWFrbmVzc2VzLCBzZXREZXNjcmlwdGlvbldlYWtuZXNzZXNdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBkZXNjcmlwdGlvblRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGRlc2NyaXB0aW9uVGl0bGUke2NvbXBldGl0b3IuaW5kZXh9YCk7XHJcbiAgICBzZXREZXNjcmlwdGlvblRpdGxlKGRlc2NyaXB0aW9uVGl0bGUpO1xyXG4gICAgY29uc3QgcGxhY2Vob2xkZXJUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwbGFjZWhvbGRlclRpdGxlJHtjb21wZXRpdG9yLmluZGV4fWApO1xyXG4gICAgY29uc3QgZGVzY3JpcHRpb25Nb2RlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBkZXNjcmlwdGlvbk1vZGVsJHtjb21wZXRpdG9yLmluZGV4fWApO1xyXG4gICAgY29uc3QgcGxhY2Vob2xkZXJNb2RlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwbGFjZWhvbGRlck1vZGVsJHtjb21wZXRpdG9yLmluZGV4fWApO1xyXG4gICAgY29uc3QgZGVzY3JpcHRpb25Qcm9kdWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGRlc2NyaXB0aW9uUHJvZHVjdCR7Y29tcGV0aXRvci5pbmRleH1gKTtcclxuICAgIGNvbnN0IHBsYWNlaG9sZGVyUHJvZHVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwbGFjZWhvbGRlclByb2R1Y3Qke2NvbXBldGl0b3IuaW5kZXh9YCk7XHJcbiAgICBjb25zdCBkZXNjcmlwdGlvblByb21vdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBkZXNjcmlwdGlvblByb21vdGlvbiR7Y29tcGV0aXRvci5pbmRleH1gKTtcclxuICAgIGNvbnN0IHBsYWNlaG9sZGVyUHJvbW90aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHBsYWNlaG9sZGVyUHJvbW90aW9uJHtjb21wZXRpdG9yLmluZGV4fWApO1xyXG4gICAgY29uc3QgZGVzY3JpcHRpb25TdHJlbmd0aHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZGVzY3JpcHRpb25TdHJlbmd0aHMke2NvbXBldGl0b3IuaW5kZXh9YCk7XHJcbiAgICBjb25zdCBwbGFjZWhvbGRlclN0cmVuZ3RocyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwbGFjZWhvbGRlclN0cmVuZ3RocyR7Y29tcGV0aXRvci5pbmRleH1gKTtcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uV2Vha25lc3NlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBkZXNjcmlwdGlvbldlYWtuZXNzZXMke2NvbXBldGl0b3IuaW5kZXh9YCk7XHJcbiAgICBjb25zdCBwbGFjZWhvbGRlcldlYWtuZXNzZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcGxhY2Vob2xkZXJXZWFrbmVzc2VzJHtjb21wZXRpdG9yLmluZGV4fWApO1xyXG4gICAgY29uc3QgZGVzY3JpcHRpb25PcHBvcnR1bml0aWVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGRlc2NyaXB0aW9uT3Bwb3J0dW5pdGllcyR7Y29tcGV0aXRvci5pbmRleH1gKTtcclxuICAgIGNvbnN0IHBsYWNlaG9sZGVyT3Bwb3J0dW5pdGllcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwbGFjZWhvbGRlck9wcG9ydHVuaXRpZXMke2NvbXBldGl0b3IuaW5kZXh9YCk7XHJcbiAgfSk7XHJcbiAgLy8gRWxlbWVudHNcclxuICBjb25zb2xlLmxvZyhkZXNjcmlwdGlvblRpdGxlKTtcclxuXHJcbiAgY29uc3QgZHJvcERvd25FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGRyb3Bkb3duJHtjb21wZXRpdG9yLmluZGV4fWApO1xyXG4gIGNvbnN0IGRhdGFFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGRhdGEke2NvbXBldGl0b3IuaW5kZXh9YCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnc2FwLnNldChkcm9wRG93bkVsZW1lbnQsIHsgcm90YXRpb246ICctOTBfY3cnIH0pO1xyXG4gICAgaWYgKCFpc01vYmlsZSkge1xyXG4gICAgICBjb25zdCBjb250YWluZXJFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGNvbnRhaW5lciR7Y29tcGV0aXRvci5pbmRleH1gKTtcclxuICAgICAgY29uc3QgY29tcGV0aXRvck1hbmFnZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgbWFuYWdlciR7Y29tcGV0aXRvci5pbmRleH1gKTtcclxuICAgICAgY29udGFpbmVyRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKCkgPT4ge1xyXG4gICAgICAgIGdzYXAudG8oY29tcGV0aXRvck1hbmFnZXIsIHsgaGVpZ2h0OiAxOCwgbWFyaWduQm90dG9tOiAxNiwgZHVyYXRpb246IDAuNSwgZWFzZTogTGluZWFyLmVhc2VJbiB9KTtcclxuICAgICAgICBnc2FwLnRvKGluaXRpYWxDb250YWluZXIsIHsgbWFyZ2luVG9wOiAxNiwgZHVyYXRpb246IDAuNSwgZWFzZTogTGluZWFyLmVhc2VJbiB9KTtcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnRhaW5lckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHtcclxuICAgICAgICBnc2FwLnRvKGNvbXBldGl0b3JNYW5hZ2VyLCB7IGhlaWdodDogMCwgbWFyZ2luQm90dG9tOiAwLCBkdXJhdGlvbjogMC41LCBlYXNlOiBMaW5lYXIuZWFzZU91dCB9KTtcclxuICAgICAgICBnc2FwLnRvKGluaXRpYWxDb250YWluZXIsIHsgbWFyZ2luVG9wOiAwLCBkdXJhdGlvbjogMC41LCBlYXNlOiBMaW5lYXIuZWFzZUluIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9LCBbZHJvcERvd25FbGVtZW50XSk7XHJcblxyXG4gIGNvbnN0IG9uU2VjdGlvbkRyb3Bkb3duID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgc2VjdGlvbkhlaWdodCA9XHJcbiAgICAgIGRlc2NyaXB0aW9uVGl0bGUub2Zmc2V0SGVpZ2h0ICtcclxuICAgICAgcGxhY2Vob2xkZXJUaXRsZS5vZmZzZXRIZWlnaHQgK1xyXG4gICAgICBkZXNjcmlwdGlvbk1vZGVsLm9mZnNldEhlaWdodCArXHJcbiAgICAgIHBsYWNlaG9sZGVyTW9kZWwub2Zmc2V0SGVpZ2h0ICtcclxuICAgICAgMjQgK1xyXG4gICAgICBkZXNjcmlwdGlvblByb2R1Y3Qub2Zmc2V0SGVpZ2h0ICtcclxuICAgICAgcGxhY2Vob2xkZXJQcm9kdWN0Lm9mZnNldEhlaWdodCArXHJcbiAgICAgIDI0ICtcclxuICAgICAgZGVzY3JpcHRpb25Qcm9tb3Rpb24ub2Zmc2V0SGVpZ2h0ICtcclxuICAgICAgcGxhY2Vob2xkZXJQcm9tb3Rpb24ub2Zmc2V0SGVpZ2h0ICtcclxuICAgICAgMjQgK1xyXG4gICAgICBkZXNjcmlwdGlvblN0cmVuZ3Rocy5vZmZzZXRIZWlnaHQgK1xyXG4gICAgICBwbGFjZWhvbGRlclN0cmVuZ3Rocy5vZmZzZXRIZWlnaHQgK1xyXG4gICAgICAyNCArXHJcbiAgICAgIGRlc2NyaXB0aW9uV2Vha25lc3Nlcy5vZmZzZXRIZWlnaHQgK1xyXG4gICAgICBwbGFjZWhvbGRlcldlYWtuZXNzZXMub2Zmc2V0SGVpZ2h0ICtcclxuICAgICAgMjQgK1xyXG4gICAgICBkZXNjcmlwdGlvbk9wcG9ydHVuaXRpZXMub2Zmc2V0SGVpZ2h0ICtcclxuICAgICAgcGxhY2Vob2xkZXJPcHBvcnR1bml0aWVzLm9mZnNldEhlaWdodCArXHJcbiAgICAgIDI0O1xyXG4gICAgaWYgKCFkcm9wZG93bkhlbHBlcikge1xyXG4gICAgICBnc2FwLnRvKGRhdGFFbGVtZW50LCB7IGhlaWdodDogc2VjdGlvbkhlaWdodCwgbWFyZ2luVG9wOiAzMiwgbWFyZ2luQm90dG9tOiAxMTIsIGF1dG9BbHBoYTogMSwgZHVyYXRpb246IDEsIGVhc2U6IExpbmVhciB9KTtcclxuICAgICAgZ3NhcC50byhkcm9wRG93bkVsZW1lbnQsIHsgcm90YXRpb246ICcwX2N3JywgZHVyYXRpb246IDEsIGVhc2U6IExpbmVhciB9KTtcclxuICAgICAgc2V0RHJvcGRvd25IZWxwZXIodHJ1ZSk7XHJcbiAgICB9IGVsc2UgaWYgKGRyb3Bkb3duSGVscGVyKSB7XHJcbiAgICAgIGdzYXAudG8oZGF0YUVsZW1lbnQsIHsgaGVpZ2h0OiAwLCBtYXJnaW5Ub3A6IDAsIG1hcmdpbkJvdHRvbTogMCwgYXV0b0FscGhhOiAwLCBkdXJhdGlvbjogMSwgZWFzZTogTGluZWFyIH0pO1xyXG4gICAgICBnc2FwLnRvKGRyb3BEb3duRWxlbWVudCwgeyByb3RhdGlvbjogJy05MF9jY3cnLCBkdXJhdGlvbjogMSwgZWFzZTogTGluZWFyIH0pO1xyXG4gICAgICBzZXREcm9wZG93bkhlbHBlcihmYWxzZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgc3R5bGU9e3sgaGVpZ2h0OiAnZml0LWNvbnRlbnQnIH19XHJcbiAgICAgIGlkPXtgY29udGFpbmVyJHtjb21wZXRpdG9yLmluZGV4fWB9XHJcbiAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy1iYWNrZ3JvdW5kIHJvdW5kZWQtMnhsIHAtNCBzc21Db250YWluZXI6cC02IHNoYWRvdy1tZCBvdmVyZmxvdy1oaWRkZW4gbXQtOCBzbUNvbnRhaW5lcjptdC04XCJcclxuICAgID5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIHN0eWxlPXt7IGhlaWdodDogYCR7aXNNb2JpbGUgPyA0MCA6IDB9YCwgdG9wOiBgJHtpc01vYmlsZSA/ICctNnB4JyA6ICctNnB4J31gIH19XHJcbiAgICAgICAgaWQ9e2BtYW5hZ2VyJHtjb21wZXRpdG9yLmluZGV4fWB9XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gcmVsYXRpdmVcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgLy8gICBzdHlsZT17eyB0cmFuc2Zvcm06ICdyb3RhdGUoLTkwZGVnKScgfX1cclxuICAgICAgICAgIG9uQ2xpY2s9e29uU2VjdGlvbkRyb3Bkb3dufVxyXG4gICAgICAgICAgaWQ9e2Bkcm9wZG93biR7Y29tcGV0aXRvci5pbmRleH1gfVxyXG4gICAgICAgICAgc3JjPVwiL2NvbXBldGl0b3JzL2Ryb3Bkb3duLnN2Z1wiXHJcbiAgICAgICAgICBoZWlnaHQ9ezE4fVxyXG4gICAgICAgICAgd2lkdGg9ezE4fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XHJcbiAgICAgICAgICB7LyogPGltZyBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciBtci0yXCIgc3JjPVwiL2NvbXBldGl0b3JzL2RyYWcuc3ZnXCIgaGVpZ2h0PXsxOH0gd2lkdGg9ezE4fSAvPlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQ29tcGV0aXRvclJlbW92ZShkYXRhLmNvbXBldGl0b3IuaW5kZXgpfVxyXG4gICAgICAgICAgc3JjPVwiL2NvbXBldGl0b3JzL3JlbW92ZS5zdmdcIlxyXG4gICAgICAgICAgaGVpZ2h0PXsxOH1cclxuICAgICAgICAgIHdpZHRoPXsxOH1cclxuICAgICAgICAvPiAqL31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBpZD17Y29tcGV0aXRvci5pbmRleH1cclxuICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGdhcC02IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBzbUNvbnRhaW5lcjpnYXAtMCBzbUNvbnRhaW5lcjpncmlkIHNtQ29udGFpbmVyOmdyaWQtY29scy0xMmZyXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic21Db250YWluZXI6Y29sLXN0YXJ0LTEgc21Db250YWluZXI6Y29sLWVuZC00IGp1c3RpZnktc2VsZi1jZW50ZXIgZmxleCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAge2NvbXBldGl0b3IuaW1hZ2UgIT09ICcnID8gKFxyXG4gICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICBodG1sRm9yPXtgdXBsb2FkLWltYWdlJHtjb21wZXRpdG9yLmluZGV4fWB9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy0yMCBoLTIwIGN1cnNvci1wb2ludGVyIHJvdW5kZWQtZnVsbCBiZy13aGl0ZSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz17Y29tcGV0aXRvci5pbWFnZX0gaGVpZ2h0PXs1NX0gd2lkdGg9ezU1fSAvPlxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgIGh0bWxGb3I9e2B1cGxvYWQtaW1hZ2Uke2NvbXBldGl0b3IuaW5kZXh9YH1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMjAgaC0yMCBjdXJzb3ItcG9pbnRlciByb3VuZGVkLWZ1bGwgYmctcHJpbWFyeSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvY29tcGV0aXRvcnMvZW1wdHktaW1hZ2Uuc3ZnXCIgaGVpZ2h0PXs2NX0gd2lkdGg9ezY1fSAvPlxyXG4gICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIGlkPXtgdXBsb2FkLWltYWdlJHtjb21wZXRpdG9yLmluZGV4fWB9IHN0eWxlPXt7IGRpc3BsYXk6ICdub25lJywgekluZGV4OiAxMCB9fSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic21Db250YWluZXI6Y29sLXN0YXJ0LTUgc21Db250YWluZXI6Y29sLWVuZC0xMyBncmlkIGdyaWQtY29scy0yZnIgZ3JpZC1yb3dzLTJmciBqdXN0aWZ5LWl0ZW1zLWNlbnRlciBpdGVtcy1jZW50ZXIgZ2FwLXgtNCBzc21Db250YWluZXI6Z2FwLXgtOCBnYXAteS0yIHNzbUNvbnRhaW5lcjpnYXAteS00XCI+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB2YWx1ZT17Y29tcGV0aXRvci50aXRsZX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLTJ4bCB3LWZ1bGwgcHgtMyBweS0yIHRleHQtc20gdGV4dC1wcmltYXJ5ZGFyayBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwibmFtZVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHZhbHVlPXtjb21wZXRpdG9yLmxvY2F0aW9ufVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQtMnhsIHctZnVsbCBweC0zIHB5LTIgdGV4dC1zbSB0ZXh0LXByaW1hcnlkYXJrIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJsb2NhdGlvblwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHZhbHVlPXtjb21wZXRpdG9yLmVtcGxveWVlc31cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLTJ4bCB3LWZ1bGwgcHgtMyBweS0yIHRleHQtc20gdGV4dC1wcmltYXJ5ZGFyayBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZW1wbG95ZWVzXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdmFsdWU9e2NvbXBldGl0b3IucmV2ZW51ZX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLTJ4bCB3LWZ1bGwgcHgtMyBweS0yIHRleHQtc20gdGV4dC1wcmltYXJ5ZGFyayBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwicmV2ZW51ZVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHsvKiBDb21wYW55IGRlc2NyaXB0aW9uICovfVxyXG4gICAgICA8ZGl2IGlkPXtgZGF0YSR7Y29tcGV0aXRvci5pbmRleH1gfSBjbGFzc05hbWU9XCJ3LWZ1bGwgaC0wIGludmlzaWJsZVwiPlxyXG4gICAgICAgIDxkaXYgaWQ9e2BkZXNjcmlwdGlvblRpdGxlJHtjb21wZXRpdG9yLmluZGV4fWB9IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiL2NvbXBldGl0b3JzL2Rlc2NyaXB0aW9uLnN2Z1wiIGhlaWdodD17MjJ9IHdpZHRoPXsyMn0gLz5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeWRhcmsgbWwtMlwiPkNvbXBhbnkgZGVzY3JpcHRpb248L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICB2YWx1ZT17Y29tcGV0aXRvci5jb21wYW55RGVzY3JpcHRpb259XHJcbiAgICAgICAgICBpZD17YHBsYWNlaG9sZGVyVGl0bGUke2NvbXBldGl0b3IuaW5kZXh9YH1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy13aGl0ZSByb3VuZGVkLTJ4bCBtdC0yIHAtMiB0ZXh0LXByaW1hcnlkYXJrIHRleHQtc20gcHgtNCBweS0zIGgtMjggbWF4LWgtMjggZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRGVzY3JpYmUgdGhlIG1haW4gYXNzdW1wdGlvbiBvZiBhbmFseXplZCBjb21wYW55LlwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICB7LyogVGl0bGUgZW5kICovfVxyXG4gICAgICAgIDxkaXYgaWQ9e2BkZXNjcmlwdGlvbk1vZGVsJHtjb21wZXRpdG9yLmluZGV4fWB9IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXIgbXQtNlwiPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCIvY29tcGV0aXRvcnMvbW9kZWwuc3ZnXCIgaGVpZ2h0PXsyMn0gd2lkdGg9ezIyfSAvPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5ZGFyayBtbC0yXCI+QnVzaW5lc3MgbW9kZWw8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICB2YWx1ZT17Y29tcGV0aXRvci5idXNpbmVzc01vZGVsfVxyXG4gICAgICAgICAgaWQ9e2BwbGFjZWhvbGRlck1vZGVsJHtjb21wZXRpdG9yLmluZGV4fWB9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgcm91bmRlZC0yeGwgbXQtMiBwLTIgdGV4dC1wcmltYXJ5ZGFyayB0ZXh0LXNtIHB4LTQgcHktMyBoLTI4IG1heC1oLTI4IGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkhvdyBkb2VzIHRoZSBjb21wYW55IGJ1c2luZXNzIG1vZGVsIGxvb2sgbGlrZT9cIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgey8qIE1vZGVsIGVuZCAqL31cclxuICAgICAgICA8ZGl2IGlkPXtgZGVzY3JpcHRpb25Qcm9kdWN0JHtjb21wZXRpdG9yLmluZGV4fWB9IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXIgbXQtNlwiPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCIvY29tcGV0aXRvcnMvcHJvZHVjdDEuc3ZnXCIgaGVpZ2h0PXsyMn0gd2lkdGg9ezIyfSAvPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5ZGFyayBtbC0yXCI+UHJvZHVjdCBvdmVydmlldzwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgIHZhbHVlPXtjb21wZXRpdG9yLnByb2R1Y3RPdmVydmlld31cclxuICAgICAgICAgIGlkPXtgcGxhY2Vob2xkZXJQcm9kdWN0JHtjb21wZXRpdG9yLmluZGV4fWB9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgcm91bmRlZC0yeGwgbXQtMiBwLTIgdGV4dC1wcmltYXJ5ZGFyayB0ZXh0LXNtIHB4LTQgcHktMyBoLTI4IG1heC1oLTI4IGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIldoYXQgaXMgdGhlIGZ1bGwgcmFuZ2Ugb2YgcHJvZHVjdHMgYW5kIHNlcnZpY2VzIHRoZSBjb21wYW55IG9mZmVycz9cIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgey8qIFByb2R1Y3QgZW5kICovfVxyXG4gICAgICAgIDxkaXYgaWQ9e2BkZXNjcmlwdGlvblByb21vdGlvbiR7Y29tcGV0aXRvci5pbmRleH1gfSBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyIG10LTZcIj5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiL2NvbXBldGl0b3JzL3Byb21vdGlvbi5zdmdcIiBoZWlnaHQ9ezIyfSB3aWR0aD17MjJ9IC8+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnlkYXJrIG1sLTJcIj5Qcm9tb3Rpb24gc3RyYXRlZ3k8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICB2YWx1ZT17Y29tcGV0aXRvci5wcm9tb3Rpb25TdHJhdGVneX1cclxuICAgICAgICAgIGlkPXtgcGxhY2Vob2xkZXJQcm9tb3Rpb24ke2NvbXBldGl0b3IuaW5kZXh9YH1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy13aGl0ZSByb3VuZGVkLTJ4bCBtdC0yIHAtMiB0ZXh0LXByaW1hcnlkYXJrIHRleHQtc20gcHgtNCBweS0zIGgtMjggbWF4LWgtMjggZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV2hhdCBhcmUgdGhlIGNvbXBhbnkgbWFya2V0aW5nIGFuZCBwcm9tb3Rpb25hbCBzdHJhdGVnaWVzP1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgICB7LyogUHJvbW90aW9uIGVuZCAqL31cclxuICAgICAgICA8ZGl2IGlkPXtgZGVzY3JpcHRpb25TdHJlbmd0aHMke2NvbXBldGl0b3IuaW5kZXh9YH0gY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlciBtdC02XCI+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cIi9jb21wZXRpdG9ycy9zdHJlbmd0aHMuc3ZnXCIgaGVpZ2h0PXsyMn0gd2lkdGg9ezIyfSAvPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5ZGFyayBtbC0yXCI+Q29tcGFueSBzdHJlbmd0aHM8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICB2YWx1ZT17Y29tcGV0aXRvci5jb21wYW55U3RyZW5ndGhzfVxyXG4gICAgICAgICAgaWQ9e2BwbGFjZWhvbGRlclN0cmVuZ3RocyR7Y29tcGV0aXRvci5pbmRleH1gfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIHJvdW5kZWQtMnhsIG10LTIgcC0yIHRleHQtcHJpbWFyeWRhcmsgdGV4dC1zbSBweC00IHB5LTMgaC0yOCBtYXgtaC0yOCBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJXaGF0IGRvIHlvdXIgY29tcGV0aXRvcnMgZG8gcmVhbGx5IHdlbGwgdGhhdCBkaWZmZXJlbnRpYXRlcyB0aGVtP1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgICB7LyogU3RyZW5ndGhzIGVuZCAqL31cclxuICAgICAgICA8ZGl2IGlkPXtgZGVzY3JpcHRpb25XZWFrbmVzc2VzJHtjb21wZXRpdG9yLmluZGV4fWB9IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXIgbXQtNlwiPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCIvY29tcGV0aXRvcnMvd2Vha25lc3Nlcy5zdmdcIiBoZWlnaHQ9ezIyfSB3aWR0aD17MjJ9IC8+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnlkYXJrIG1sLTJcIj5Db21wYW55IFdlYWtuZXNzZXM8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICB2YWx1ZT17Y29tcGV0aXRvci5jb21wYW55V2Vha25lc3Nlc31cclxuICAgICAgICAgIGlkPXtgcGxhY2Vob2xkZXJXZWFrbmVzc2VzJHtjb21wZXRpdG9yLmluZGV4fWB9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgcm91bmRlZC0yeGwgbXQtMiBwLTIgdGV4dC1wcmltYXJ5ZGFyayB0ZXh0LXNtIHB4LTQgcHktMyBoLTI4IG1heC1oLTI4IGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIldoYXQgZG8gdGhlIGNvbXBhbnkgY3VzdG9tZXJzIGNvbXBsYWluIGFib3V0IHRoZSBtb3N0LCBhbmQgd2hhdCBwcm9kdWN0cyBkbyB0aGV5IGxhY2s/XCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIHsvKiBXZWFrbmVzc2VzIGVuZCAqL31cclxuICAgICAgICA8ZGl2IGlkPXtgZGVzY3JpcHRpb25PcHBvcnR1bml0aWVzJHtjb21wZXRpdG9yLmluZGV4fWB9IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXIgbXQtNlwiPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCIvY29tcGV0aXRvcnMvb3Bwb3J0dW5pdGllczIuc3ZnXCIgaGVpZ2h0PXsyMn0gd2lkdGg9ezIyfSAvPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5ZGFyayBtbC0yXCI+T3Bwb3J0dW5pdGllczwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgIHZhbHVlPXtjb21wZXRpdG9yLm9wcG9ydHVuaXRpZXN9XHJcbiAgICAgICAgICBpZD17YHBsYWNlaG9sZGVyT3Bwb3J0dW5pdGllcyR7Y29tcGV0aXRvci5pbmRleH1gfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIHJvdW5kZWQtMnhsIG10LTIgcC0yIHRleHQtcHJpbWFyeWRhcmsgdGV4dC1zbSBweC00IHB5LTMgaC0yOCBtYXgtaC0yOCBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJXaGF0IGRpc3Rpbmd1aXNoIHlvdXIgc3RhcnR1cCBmcm9tIHRoaXMgcGFydGljdWxhciBjb21wZXRpdGl2ZSBjb21wYW55P1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgICB7LyogT3Bwb3J0dW5pdGllcyBlbmQgKi99XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVuaXF1ZUNvbXBldGl0b3JzUGFnZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==