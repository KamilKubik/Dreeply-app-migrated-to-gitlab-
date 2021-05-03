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

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      placeholderWeaknesses = _useState13[0],
      setPlaceholderWeaknesses = _useState13[1];

  var _useState14 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      descriptionOpportunities = _useState14[0],
      setDescriptionOpportunities = _useState14[1];

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      placeholderOpportunities = _useState15[0],
      setPlaceholderOpportunities = _useState15[1];

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
        lineNumber: 110,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 105,
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
            lineNumber: 140,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 136,
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
              lineNumber: 148,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 144,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 143,
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
          lineNumber: 152,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 134,
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
            lineNumber: 156,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            value: competitor.location,
            className: "bg-white rounded-2xl w-full px-3 py-2 text-sm text-primarydark focus:outline-none",
            placeholder: "location"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 163,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            value: competitor.employees,
            className: "bg-white rounded-2xl w-full px-3 py-2 text-sm text-primarydark focus:outline-none",
            placeholder: "employees"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 170,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            value: competitor.revenue,
            className: "bg-white rounded-2xl w-full px-3 py-2 text-sm text-primarydark focus:outline-none",
            placeholder: "revenue"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 177,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 176,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 130,
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
          lineNumber: 188,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "text-primarydark ml-2",
          children: "Company description"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 189,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
        value: competitor.companyDescription,
        id: "placeholderTitle".concat(competitor.index),
        className: "w-full bg-white rounded-2xl mt-2 p-2 text-primarydark text-sm px-4 py-3 h-28 max-h-28 focus:outline-none",
        placeholder: "Describe the main assumption of analyzed company."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 191,
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
          lineNumber: 199,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "text-primarydark ml-2",
          children: "Business model"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 200,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
        value: competitor.businessModel,
        id: "placeholderModel".concat(competitor.index),
        className: "w-full bg-white rounded-2xl mt-2 p-2 text-primarydark text-sm px-4 py-3 h-28 max-h-28 focus:outline-none",
        placeholder: "How does the company business model look like?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 202,
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
          lineNumber: 210,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "text-primarydark ml-2",
          children: "Product overview"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 211,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 209,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
        value: competitor.productOverview,
        id: "placeholderProduct".concat(competitor.index),
        className: "w-full bg-white rounded-2xl mt-2 p-2 text-primarydark text-sm px-4 py-3 h-28 max-h-28 focus:outline-none",
        placeholder: "What is the full range of products and services the company offers?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 213,
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
          lineNumber: 221,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "text-primarydark ml-2",
          children: "Promotion strategy"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 222,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 220,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
        value: competitor.promotionStrategy,
        id: "placeholderPromotion".concat(competitor.index),
        className: "w-full bg-white rounded-2xl mt-2 p-2 text-primarydark text-sm px-4 py-3 h-28 max-h-28 focus:outline-none",
        placeholder: "What are the company marketing and promotional strategies?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 224,
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
          lineNumber: 232,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "text-primarydark ml-2",
          children: "Company strengths"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 233,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 231,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
        value: competitor.companyStrengths,
        id: "placeholderStrengths".concat(competitor.index),
        className: "w-full bg-white rounded-2xl mt-2 p-2 text-primarydark text-sm px-4 py-3 h-28 max-h-28 focus:outline-none",
        placeholder: "What do your competitors do really well that differentiates them?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 235,
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
          lineNumber: 243,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "text-primarydark ml-2",
          children: "Company Weaknesses"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 244,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 242,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
        value: competitor.companyWeaknesses,
        id: "placeholderWeaknesses".concat(competitor.index),
        className: "w-full bg-white rounded-2xl mt-2 p-2 text-primarydark text-sm px-4 py-3 h-28 max-h-28 focus:outline-none",
        placeholder: "What do the company customers complain about the most, and what products do they lack?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 246,
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
          lineNumber: 254,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "text-primarydark ml-2",
          children: "Opportunities"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 255,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 253,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
        value: competitor.opportunities,
        id: "placeholderOpportunities".concat(competitor.index),
        className: "w-full bg-white rounded-2xl mt-2 p-2 text-primarydark text-sm px-4 py-3 h-28 max-h-28 focus:outline-none",
        placeholder: "What distinguish your startup from this particular competitive company?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 257,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 100,
    columnNumber: 5
  }, _this);
};

_s(UniqueCompetitorsPage, "bxoH5xI/gvCZXPA/Tb2jR5EXPEA=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kYXNoYm9hcmQvc3RhcnR1cC9wcm9qZWN0L2J1c2luZXNzLWFwcC9jb21wZXRpdG9ycy9VbmlxdWVFbGVtZW50LmpzIl0sIm5hbWVzIjpbIlVuaXF1ZUNvbXBldGl0b3JzUGFnZSIsImNvbXBldGl0b3IiLCJjb25zb2xlIiwibG9nIiwidXNlU3RhdGUiLCJkcm9wZG93bkhlbHBlciIsInNldERyb3Bkb3duSGVscGVyIiwiaW5pdGlhbENvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbmRleCIsImRlc2NyaXB0aW9uVGl0bGUiLCJzZXREZXNjcmlwdGlvblRpdGxlIiwicGxhY2Vob2xkZXJUaXRsZSIsInNldFBsYWNlaG9sZGVyVGl0bGUiLCJkZXNjcmlwdGlvbk1vZGVsIiwic2V0RGVzY3JpcHRpb25Nb2RlbCIsInBsYWNlaG9sZGVyTW9kZWwiLCJzZXRQbGFjZWhvbGRlck1vZGVsIiwiZGVzY3JpcHRpb25Qcm9kdWN0Iiwic2V0RGVzY3JpcHRpb25Qcm9kdWN0IiwicGxhY2Vob2xkZXJQcm9kdWN0Iiwic2V0UGxhY2Vob2xkZXJQcm9kdWN0IiwiZGVzY3JpcHRpb25Qcm9tb3Rpb24iLCJzZXREZXNjcmlwdGlvblByb21vdGlvbiIsInBsYWNlaG9sZGVyUHJvbW90aW9uIiwic2V0UGxhY2Vob2xkZXJQcm9tb3Rpb24iLCJkZXNjcmlwdGlvblN0cmVuZ3RocyIsInNldERlc2NyaXB0aW9uU3RyZW5ndGhzIiwicGxhY2Vob2xkZXJTdHJlbmd0aHMiLCJzZXRQbGFjZWhvbGRlclN0cmVuZ3RocyIsImRlc2NyaXB0aW9uV2Vha25lc3NlcyIsInNldERlc2NyaXB0aW9uV2Vha25lc3NlcyIsInBsYWNlaG9sZGVyV2Vha25lc3NlcyIsInNldFBsYWNlaG9sZGVyV2Vha25lc3NlcyIsImRlc2NyaXB0aW9uT3Bwb3J0dW5pdGllcyIsInNldERlc2NyaXB0aW9uT3Bwb3J0dW5pdGllcyIsInBsYWNlaG9sZGVyT3Bwb3J0dW5pdGllcyIsInNldFBsYWNlaG9sZGVyT3Bwb3J0dW5pdGllcyIsInVzZUVmZmVjdCIsImRyb3BEb3duRWxlbWVudCIsImRhdGFFbGVtZW50IiwiZ3NhcCIsInNldCIsInJvdGF0aW9uIiwiaXNNb2JpbGUiLCJjb250YWluZXJFbGVtZW50IiwiY29tcGV0aXRvck1hbmFnZXIiLCJhZGRFdmVudExpc3RlbmVyIiwidG8iLCJoZWlnaHQiLCJtYXJpZ25Cb3R0b20iLCJkdXJhdGlvbiIsImVhc2UiLCJMaW5lYXIiLCJlYXNlSW4iLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJlYXNlT3V0Iiwib25TZWN0aW9uRHJvcGRvd24iLCJzZWN0aW9uSGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwiYXV0b0FscGhhIiwidG9wIiwiaW1hZ2UiLCJkaXNwbGF5IiwiekluZGV4IiwidGl0bGUiLCJsb2NhdGlvbiIsImVtcGxveWVlcyIsInJldmVudWUiLCJjb21wYW55RGVzY3JpcHRpb24iLCJidXNpbmVzc01vZGVsIiwicHJvZHVjdE92ZXJ2aWV3IiwicHJvbW90aW9uU3RyYXRlZ3kiLCJjb21wYW55U3RyZW5ndGhzIiwiY29tcGFueVdlYWtuZXNzZXMiLCJvcHBvcnR1bml0aWVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixPQUFvQjtBQUFBOztBQUFBLE1BQWpCQyxVQUFpQixRQUFqQkEsVUFBaUI7QUFDaERDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFaLEVBQStCRixVQUEvQixFQURnRCxDQUVoRDs7QUFGZ0Qsa0JBR0pHLHNEQUFRLENBQUMsS0FBRCxDQUhKO0FBQUEsTUFHekNDLGNBSHlDO0FBQUEsTUFHekJDLGlCQUh5Qjs7QUFLaEQsTUFBTUMsZ0JBQWdCLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QlIsVUFBVSxDQUFDUyxLQUFuQyxDQUF6QixDQUxn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bUJBQVMsRUFBQyx1QkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF4REYsZUE0REU7QUFDRSxhQUFLLEVBQUVULFVBQVUsQ0FBQzJFLGlCQURwQjtBQUVFLFVBQUUsaUNBQTBCM0UsVUFBVSxDQUFDUyxLQUFyQyxDQUZKO0FBR0UsaUJBQVMsRUFBQywwR0FIWjtBQUlFLG1CQUFXLEVBQUM7QUFKZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBNURGLGVBbUVFO0FBQUssVUFBRSxvQ0FBNkJULFVBQVUsQ0FBQ1MsS0FBeEMsQ0FBUDtBQUF3RCxpQkFBUyxFQUFDLHNDQUFsRTtBQUFBLGdDQUNFO0FBQUssYUFBRyxFQUFDLGlDQUFUO0FBQTJDLGdCQUFNLEVBQUUsRUFBbkQ7QUFBdUQsZUFBSyxFQUFFO0FBQTlEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRTtBQUFHLG1CQUFTLEVBQUMsdUJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBbkVGLGVBdUVFO0FBQ0UsYUFBSyxFQUFFVCxVQUFVLENBQUM0RSxhQURwQjtBQUVFLFVBQUUsb0NBQTZCNUUsVUFBVSxDQUFDUyxLQUF4QyxDQUZKO0FBR0UsaUJBQVMsRUFBQywwR0FIWjtBQUlFLG1CQUFXLEVBQUM7QUFKZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBdkVGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXRGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXdLRCxDQXRRRDs7R0FBTVYscUI7O0tBQUFBLHFCO0FBd1FTQSxvRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kYXNoYm9hcmQvcHJvamVjdHMvW3Byb2plY3RdL2NvbXBldGl0b3JzL1tpZF0uYjRmNmZiNTE4Yzg4OGEyZmY2NjQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGlzTW9iaWxlIH0gZnJvbSAncmVhY3QtZGV2aWNlLWRldGVjdCc7XHJcbmltcG9ydCBnc2FwLCB7IExpbmVhciB9IGZyb20gJ2dzYXAnO1xyXG5cclxuY29uc3QgVW5pcXVlQ29tcGV0aXRvcnNQYWdlID0gKHsgY29tcGV0aXRvciB9KSA9PiB7XHJcbiAgY29uc29sZS5sb2coJ0NvbXBldGl0b3IgLS0+ICcsIGNvbXBldGl0b3IpO1xyXG4gIC8vICAgRHJvcGRvd25cclxuICBjb25zdCBbZHJvcGRvd25IZWxwZXIsIHNldERyb3Bkb3duSGVscGVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaW5pdGlhbENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbXBldGl0b3IuaW5kZXgpO1xyXG4gIC8vIEVsZW1lbnRcclxuICBjb25zdCBbZGVzY3JpcHRpb25UaXRsZSwgc2V0RGVzY3JpcHRpb25UaXRsZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbcGxhY2Vob2xkZXJUaXRsZSwgc2V0UGxhY2Vob2xkZXJUaXRsZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbZGVzY3JpcHRpb25Nb2RlbCwgc2V0RGVzY3JpcHRpb25Nb2RlbF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbcGxhY2Vob2xkZXJNb2RlbCwgc2V0UGxhY2Vob2xkZXJNb2RlbF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbZGVzY3JpcHRpb25Qcm9kdWN0LCBzZXREZXNjcmlwdGlvblByb2R1Y3RdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW3BsYWNlaG9sZGVyUHJvZHVjdCwgc2V0UGxhY2Vob2xkZXJQcm9kdWN0XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtkZXNjcmlwdGlvblByb21vdGlvbiwgc2V0RGVzY3JpcHRpb25Qcm9tb3Rpb25dID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW3BsYWNlaG9sZGVyUHJvbW90aW9uLCBzZXRQbGFjZWhvbGRlclByb21vdGlvbl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbZGVzY3JpcHRpb25TdHJlbmd0aHMsIHNldERlc2NyaXB0aW9uU3RyZW5ndGhzXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtwbGFjZWhvbGRlclN0cmVuZ3Rocywgc2V0UGxhY2Vob2xkZXJTdHJlbmd0aHNdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2Rlc2NyaXB0aW9uV2Vha25lc3Nlcywgc2V0RGVzY3JpcHRpb25XZWFrbmVzc2VzXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtwbGFjZWhvbGRlcldlYWtuZXNzZXMsIHNldFBsYWNlaG9sZGVyV2Vha25lc3Nlc10gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbZGVzY3JpcHRpb25PcHBvcnR1bml0aWVzLCBzZXREZXNjcmlwdGlvbk9wcG9ydHVuaXRpZXNdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW3BsYWNlaG9sZGVyT3Bwb3J0dW5pdGllcywgc2V0UGxhY2Vob2xkZXJPcHBvcnR1bml0aWVzXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZGVzY3JpcHRpb25UaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBkZXNjcmlwdGlvblRpdGxlJHtjb21wZXRpdG9yLmluZGV4fWApO1xyXG4gICAgc2V0RGVzY3JpcHRpb25UaXRsZShkZXNjcmlwdGlvblRpdGxlKTtcclxuICAgIGNvbnN0IHBsYWNlaG9sZGVyVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcGxhY2Vob2xkZXJUaXRsZSR7Y29tcGV0aXRvci5pbmRleH1gKTtcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uTW9kZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZGVzY3JpcHRpb25Nb2RlbCR7Y29tcGV0aXRvci5pbmRleH1gKTtcclxuICAgIGNvbnN0IHBsYWNlaG9sZGVyTW9kZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcGxhY2Vob2xkZXJNb2RlbCR7Y29tcGV0aXRvci5pbmRleH1gKTtcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uUHJvZHVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBkZXNjcmlwdGlvblByb2R1Y3Qke2NvbXBldGl0b3IuaW5kZXh9YCk7XHJcbiAgICBjb25zdCBwbGFjZWhvbGRlclByb2R1Y3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcGxhY2Vob2xkZXJQcm9kdWN0JHtjb21wZXRpdG9yLmluZGV4fWApO1xyXG4gICAgY29uc3QgZGVzY3JpcHRpb25Qcm9tb3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZGVzY3JpcHRpb25Qcm9tb3Rpb24ke2NvbXBldGl0b3IuaW5kZXh9YCk7XHJcbiAgICBjb25zdCBwbGFjZWhvbGRlclByb21vdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwbGFjZWhvbGRlclByb21vdGlvbiR7Y29tcGV0aXRvci5pbmRleH1gKTtcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uU3RyZW5ndGhzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGRlc2NyaXB0aW9uU3RyZW5ndGhzJHtjb21wZXRpdG9yLmluZGV4fWApO1xyXG4gICAgY29uc3QgcGxhY2Vob2xkZXJTdHJlbmd0aHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcGxhY2Vob2xkZXJTdHJlbmd0aHMke2NvbXBldGl0b3IuaW5kZXh9YCk7XHJcbiAgICBjb25zdCBkZXNjcmlwdGlvbldlYWtuZXNzZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZGVzY3JpcHRpb25XZWFrbmVzc2VzJHtjb21wZXRpdG9yLmluZGV4fWApO1xyXG4gICAgY29uc3QgcGxhY2Vob2xkZXJXZWFrbmVzc2VzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHBsYWNlaG9sZGVyV2Vha25lc3NlcyR7Y29tcGV0aXRvci5pbmRleH1gKTtcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uT3Bwb3J0dW5pdGllcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBkZXNjcmlwdGlvbk9wcG9ydHVuaXRpZXMke2NvbXBldGl0b3IuaW5kZXh9YCk7XHJcbiAgICBjb25zdCBwbGFjZWhvbGRlck9wcG9ydHVuaXRpZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcGxhY2Vob2xkZXJPcHBvcnR1bml0aWVzJHtjb21wZXRpdG9yLmluZGV4fWApO1xyXG4gIH0pO1xyXG4gIC8vIEVsZW1lbnRzXHJcbiAgY29uc29sZS5sb2coZGVzY3JpcHRpb25UaXRsZSk7XHJcblxyXG4gIGNvbnN0IGRyb3BEb3duRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBkcm9wZG93biR7Y29tcGV0aXRvci5pbmRleH1gKTtcclxuICBjb25zdCBkYXRhRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBkYXRhJHtjb21wZXRpdG9yLmluZGV4fWApO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ3NhcC5zZXQoZHJvcERvd25FbGVtZW50LCB7IHJvdGF0aW9uOiAnLTkwX2N3JyB9KTtcclxuICAgIGlmICghaXNNb2JpbGUpIHtcclxuICAgICAgY29uc3QgY29udGFpbmVyRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjb250YWluZXIke2NvbXBldGl0b3IuaW5kZXh9YCk7XHJcbiAgICAgIGNvbnN0IGNvbXBldGl0b3JNYW5hZ2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYG1hbmFnZXIke2NvbXBldGl0b3IuaW5kZXh9YCk7XHJcbiAgICAgIGNvbnRhaW5lckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsICgpID0+IHtcclxuICAgICAgICBnc2FwLnRvKGNvbXBldGl0b3JNYW5hZ2VyLCB7IGhlaWdodDogMTgsIG1hcmlnbkJvdHRvbTogMTYsIGR1cmF0aW9uOiAwLjUsIGVhc2U6IExpbmVhci5lYXNlSW4gfSk7XHJcbiAgICAgICAgZ3NhcC50byhpbml0aWFsQ29udGFpbmVyLCB7IG1hcmdpblRvcDogMTYsIGR1cmF0aW9uOiAwLjUsIGVhc2U6IExpbmVhci5lYXNlSW4gfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBjb250YWluZXJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XHJcbiAgICAgICAgZ3NhcC50byhjb21wZXRpdG9yTWFuYWdlciwgeyBoZWlnaHQ6IDAsIG1hcmdpbkJvdHRvbTogMCwgZHVyYXRpb246IDAuNSwgZWFzZTogTGluZWFyLmVhc2VPdXQgfSk7XHJcbiAgICAgICAgZ3NhcC50byhpbml0aWFsQ29udGFpbmVyLCB7IG1hcmdpblRvcDogMCwgZHVyYXRpb246IDAuNSwgZWFzZTogTGluZWFyLmVhc2VJbiB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSwgW2Ryb3BEb3duRWxlbWVudF0pO1xyXG5cclxuICBjb25zdCBvblNlY3Rpb25Ecm9wZG93biA9ICgpID0+IHtcclxuICAgIGNvbnN0IHNlY3Rpb25IZWlnaHQgPVxyXG4gICAgICBkZXNjcmlwdGlvblRpdGxlLm9mZnNldEhlaWdodCArXHJcbiAgICAgIHBsYWNlaG9sZGVyVGl0bGUub2Zmc2V0SGVpZ2h0ICtcclxuICAgICAgZGVzY3JpcHRpb25Nb2RlbC5vZmZzZXRIZWlnaHQgK1xyXG4gICAgICBwbGFjZWhvbGRlck1vZGVsLm9mZnNldEhlaWdodCArXHJcbiAgICAgIDI0ICtcclxuICAgICAgZGVzY3JpcHRpb25Qcm9kdWN0Lm9mZnNldEhlaWdodCArXHJcbiAgICAgIHBsYWNlaG9sZGVyUHJvZHVjdC5vZmZzZXRIZWlnaHQgK1xyXG4gICAgICAyNCArXHJcbiAgICAgIGRlc2NyaXB0aW9uUHJvbW90aW9uLm9mZnNldEhlaWdodCArXHJcbiAgICAgIHBsYWNlaG9sZGVyUHJvbW90aW9uLm9mZnNldEhlaWdodCArXHJcbiAgICAgIDI0ICtcclxuICAgICAgZGVzY3JpcHRpb25TdHJlbmd0aHMub2Zmc2V0SGVpZ2h0ICtcclxuICAgICAgcGxhY2Vob2xkZXJTdHJlbmd0aHMub2Zmc2V0SGVpZ2h0ICtcclxuICAgICAgMjQgK1xyXG4gICAgICBkZXNjcmlwdGlvbldlYWtuZXNzZXMub2Zmc2V0SGVpZ2h0ICtcclxuICAgICAgcGxhY2Vob2xkZXJXZWFrbmVzc2VzLm9mZnNldEhlaWdodCArXHJcbiAgICAgIDI0ICtcclxuICAgICAgZGVzY3JpcHRpb25PcHBvcnR1bml0aWVzLm9mZnNldEhlaWdodCArXHJcbiAgICAgIHBsYWNlaG9sZGVyT3Bwb3J0dW5pdGllcy5vZmZzZXRIZWlnaHQgK1xyXG4gICAgICAyNDtcclxuICAgIGlmICghZHJvcGRvd25IZWxwZXIpIHtcclxuICAgICAgZ3NhcC50byhkYXRhRWxlbWVudCwgeyBoZWlnaHQ6IHNlY3Rpb25IZWlnaHQsIG1hcmdpblRvcDogMzIsIG1hcmdpbkJvdHRvbTogMTEyLCBhdXRvQWxwaGE6IDEsIGR1cmF0aW9uOiAxLCBlYXNlOiBMaW5lYXIgfSk7XHJcbiAgICAgIGdzYXAudG8oZHJvcERvd25FbGVtZW50LCB7IHJvdGF0aW9uOiAnMF9jdycsIGR1cmF0aW9uOiAxLCBlYXNlOiBMaW5lYXIgfSk7XHJcbiAgICAgIHNldERyb3Bkb3duSGVscGVyKHRydWUpO1xyXG4gICAgfSBlbHNlIGlmIChkcm9wZG93bkhlbHBlcikge1xyXG4gICAgICBnc2FwLnRvKGRhdGFFbGVtZW50LCB7IGhlaWdodDogMCwgbWFyZ2luVG9wOiAwLCBtYXJnaW5Cb3R0b206IDAsIGF1dG9BbHBoYTogMCwgZHVyYXRpb246IDEsIGVhc2U6IExpbmVhciB9KTtcclxuICAgICAgZ3NhcC50byhkcm9wRG93bkVsZW1lbnQsIHsgcm90YXRpb246ICctOTBfY2N3JywgZHVyYXRpb246IDEsIGVhc2U6IExpbmVhciB9KTtcclxuICAgICAgc2V0RHJvcGRvd25IZWxwZXIoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIHN0eWxlPXt7IGhlaWdodDogJ2ZpdC1jb250ZW50JyB9fVxyXG4gICAgICBpZD17YGNvbnRhaW5lciR7Y29tcGV0aXRvci5pbmRleH1gfVxyXG4gICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctYmFja2dyb3VuZCByb3VuZGVkLTJ4bCBwLTQgc3NtQ29udGFpbmVyOnAtNiBzaGFkb3ctbWQgb3ZlcmZsb3ctaGlkZGVuIG10LTggc21Db250YWluZXI6bXQtOFwiXHJcbiAgICA+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IGAke2lzTW9iaWxlID8gNDAgOiAwfWAsIHRvcDogYCR7aXNNb2JpbGUgPyAnLTZweCcgOiAnLTZweCd9YCB9fVxyXG4gICAgICAgIGlkPXtgbWFuYWdlciR7Y29tcGV0aXRvci5pbmRleH1gfVxyXG4gICAgICAgIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIHJlbGF0aXZlXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgIC8vICAgc3R5bGU9e3sgdHJhbnNmb3JtOiAncm90YXRlKC05MGRlZyknIH19XHJcbiAgICAgICAgICBvbkNsaWNrPXtvblNlY3Rpb25Ecm9wZG93bn1cclxuICAgICAgICAgIGlkPXtgZHJvcGRvd24ke2NvbXBldGl0b3IuaW5kZXh9YH1cclxuICAgICAgICAgIHNyYz1cIi9jb21wZXRpdG9ycy9kcm9wZG93bi5zdmdcIlxyXG4gICAgICAgICAgaGVpZ2h0PXsxOH1cclxuICAgICAgICAgIHdpZHRoPXsxOH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxyXG4gICAgICAgICAgey8qIDxpbWcgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgbXItMlwiIHNyYz1cIi9jb21wZXRpdG9ycy9kcmFnLnN2Z1wiIGhlaWdodD17MTh9IHdpZHRoPXsxOH0gLz5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkNvbXBldGl0b3JSZW1vdmUoZGF0YS5jb21wZXRpdG9yLmluZGV4KX1cclxuICAgICAgICAgIHNyYz1cIi9jb21wZXRpdG9ycy9yZW1vdmUuc3ZnXCJcclxuICAgICAgICAgIGhlaWdodD17MTh9XHJcbiAgICAgICAgICB3aWR0aD17MTh9XHJcbiAgICAgICAgLz4gKi99XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgaWQ9e2NvbXBldGl0b3IuaW5kZXh9XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBnYXAtNiBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgc21Db250YWluZXI6Z2FwLTAgc21Db250YWluZXI6Z3JpZCBzbUNvbnRhaW5lcjpncmlkLWNvbHMtMTJmclwiXHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtQ29udGFpbmVyOmNvbC1zdGFydC0xIHNtQ29udGFpbmVyOmNvbC1lbmQtNCBqdXN0aWZ5LXNlbGYtY2VudGVyIGZsZXgganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgIHtjb21wZXRpdG9yLmltYWdlICE9PSAnJyA/IChcclxuICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgaHRtbEZvcj17YHVwbG9hZC1pbWFnZSR7Y29tcGV0aXRvci5pbmRleH1gfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIHctMjAgaC0yMCBjdXJzb3ItcG9pbnRlciByb3VuZGVkLWZ1bGwgYmctd2hpdGUgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9e2NvbXBldGl0b3IuaW1hZ2V9IGhlaWdodD17NTV9IHdpZHRoPXs1NX0gLz5cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICBodG1sRm9yPXtgdXBsb2FkLWltYWdlJHtjb21wZXRpdG9yLmluZGV4fWB9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTIwIGgtMjAgY3Vyc29yLXBvaW50ZXIgcm91bmRlZC1mdWxsIGJnLXByaW1hcnkgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2NvbXBldGl0b3JzL2VtcHR5LWltYWdlLnN2Z1wiIGhlaWdodD17NjV9IHdpZHRoPXs2NX0gLz5cclxuICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBpZD17YHVwbG9hZC1pbWFnZSR7Y29tcGV0aXRvci5pbmRleH1gfSBzdHlsZT17eyBkaXNwbGF5OiAnbm9uZScsIHpJbmRleDogMTAgfX0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtQ29udGFpbmVyOmNvbC1zdGFydC01IHNtQ29udGFpbmVyOmNvbC1lbmQtMTMgZ3JpZCBncmlkLWNvbHMtMmZyIGdyaWQtcm93cy0yZnIganVzdGlmeS1pdGVtcy1jZW50ZXIgaXRlbXMtY2VudGVyIGdhcC14LTQgc3NtQ29udGFpbmVyOmdhcC14LTggZ2FwLXktMiBzc21Db250YWluZXI6Z2FwLXktNFwiPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdmFsdWU9e2NvbXBldGl0b3IudGl0bGV9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZC0yeGwgdy1mdWxsIHB4LTMgcHktMiB0ZXh0LXNtIHRleHQtcHJpbWFyeWRhcmsgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIm5hbWVcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB2YWx1ZT17Y29tcGV0aXRvci5sb2NhdGlvbn1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLTJ4bCB3LWZ1bGwgcHgtMyBweS0yIHRleHQtc20gdGV4dC1wcmltYXJ5ZGFyayBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwibG9jYXRpb25cIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB2YWx1ZT17Y29tcGV0aXRvci5lbXBsb3llZXN9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZC0yeGwgdy1mdWxsIHB4LTMgcHktMiB0ZXh0LXNtIHRleHQtcHJpbWFyeWRhcmsgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImVtcGxveWVlc1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHZhbHVlPXtjb21wZXRpdG9yLnJldmVudWV9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZC0yeGwgdy1mdWxsIHB4LTMgcHktMiB0ZXh0LXNtIHRleHQtcHJpbWFyeWRhcmsgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInJldmVudWVcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7LyogQ29tcGFueSBkZXNjcmlwdGlvbiAqL31cclxuICAgICAgPGRpdiBpZD17YGRhdGEke2NvbXBldGl0b3IuaW5kZXh9YH0gY2xhc3NOYW1lPVwidy1mdWxsIGgtMCBpbnZpc2libGVcIj5cclxuICAgICAgICA8ZGl2IGlkPXtgZGVzY3JpcHRpb25UaXRsZSR7Y29tcGV0aXRvci5pbmRleH1gfSBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cIi9jb21wZXRpdG9ycy9kZXNjcmlwdGlvbi5zdmdcIiBoZWlnaHQ9ezIyfSB3aWR0aD17MjJ9IC8+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnlkYXJrIG1sLTJcIj5Db21wYW55IGRlc2NyaXB0aW9uPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgdmFsdWU9e2NvbXBldGl0b3IuY29tcGFueURlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgaWQ9e2BwbGFjZWhvbGRlclRpdGxlJHtjb21wZXRpdG9yLmluZGV4fWB9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgcm91bmRlZC0yeGwgbXQtMiBwLTIgdGV4dC1wcmltYXJ5ZGFyayB0ZXh0LXNtIHB4LTQgcHktMyBoLTI4IG1heC1oLTI4IGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRlc2NyaWJlIHRoZSBtYWluIGFzc3VtcHRpb24gb2YgYW5hbHl6ZWQgY29tcGFueS5cIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgey8qIFRpdGxlIGVuZCAqL31cclxuICAgICAgICA8ZGl2IGlkPXtgZGVzY3JpcHRpb25Nb2RlbCR7Y29tcGV0aXRvci5pbmRleH1gfSBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyIG10LTZcIj5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiL2NvbXBldGl0b3JzL21vZGVsLnN2Z1wiIGhlaWdodD17MjJ9IHdpZHRoPXsyMn0gLz5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeWRhcmsgbWwtMlwiPkJ1c2luZXNzIG1vZGVsPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgdmFsdWU9e2NvbXBldGl0b3IuYnVzaW5lc3NNb2RlbH1cclxuICAgICAgICAgIGlkPXtgcGxhY2Vob2xkZXJNb2RlbCR7Y29tcGV0aXRvci5pbmRleH1gfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIHJvdW5kZWQtMnhsIG10LTIgcC0yIHRleHQtcHJpbWFyeWRhcmsgdGV4dC1zbSBweC00IHB5LTMgaC0yOCBtYXgtaC0yOCBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJIb3cgZG9lcyB0aGUgY29tcGFueSBidXNpbmVzcyBtb2RlbCBsb29rIGxpa2U/XCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIHsvKiBNb2RlbCBlbmQgKi99XHJcbiAgICAgICAgPGRpdiBpZD17YGRlc2NyaXB0aW9uUHJvZHVjdCR7Y29tcGV0aXRvci5pbmRleH1gfSBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyIG10LTZcIj5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiL2NvbXBldGl0b3JzL3Byb2R1Y3QxLnN2Z1wiIGhlaWdodD17MjJ9IHdpZHRoPXsyMn0gLz5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeWRhcmsgbWwtMlwiPlByb2R1Y3Qgb3ZlcnZpZXc8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICB2YWx1ZT17Y29tcGV0aXRvci5wcm9kdWN0T3ZlcnZpZXd9XHJcbiAgICAgICAgICBpZD17YHBsYWNlaG9sZGVyUHJvZHVjdCR7Y29tcGV0aXRvci5pbmRleH1gfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIHJvdW5kZWQtMnhsIG10LTIgcC0yIHRleHQtcHJpbWFyeWRhcmsgdGV4dC1zbSBweC00IHB5LTMgaC0yOCBtYXgtaC0yOCBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJXaGF0IGlzIHRoZSBmdWxsIHJhbmdlIG9mIHByb2R1Y3RzIGFuZCBzZXJ2aWNlcyB0aGUgY29tcGFueSBvZmZlcnM/XCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIHsvKiBQcm9kdWN0IGVuZCAqL31cclxuICAgICAgICA8ZGl2IGlkPXtgZGVzY3JpcHRpb25Qcm9tb3Rpb24ke2NvbXBldGl0b3IuaW5kZXh9YH0gY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlciBtdC02XCI+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cIi9jb21wZXRpdG9ycy9wcm9tb3Rpb24uc3ZnXCIgaGVpZ2h0PXsyMn0gd2lkdGg9ezIyfSAvPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5ZGFyayBtbC0yXCI+UHJvbW90aW9uIHN0cmF0ZWd5PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgdmFsdWU9e2NvbXBldGl0b3IucHJvbW90aW9uU3RyYXRlZ3l9XHJcbiAgICAgICAgICBpZD17YHBsYWNlaG9sZGVyUHJvbW90aW9uJHtjb21wZXRpdG9yLmluZGV4fWB9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgcm91bmRlZC0yeGwgbXQtMiBwLTIgdGV4dC1wcmltYXJ5ZGFyayB0ZXh0LXNtIHB4LTQgcHktMyBoLTI4IG1heC1oLTI4IGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIldoYXQgYXJlIHRoZSBjb21wYW55IG1hcmtldGluZyBhbmQgcHJvbW90aW9uYWwgc3RyYXRlZ2llcz9cIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgey8qIFByb21vdGlvbiBlbmQgKi99XHJcbiAgICAgICAgPGRpdiBpZD17YGRlc2NyaXB0aW9uU3RyZW5ndGhzJHtjb21wZXRpdG9yLmluZGV4fWB9IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXIgbXQtNlwiPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCIvY29tcGV0aXRvcnMvc3RyZW5ndGhzLnN2Z1wiIGhlaWdodD17MjJ9IHdpZHRoPXsyMn0gLz5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeWRhcmsgbWwtMlwiPkNvbXBhbnkgc3RyZW5ndGhzPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgdmFsdWU9e2NvbXBldGl0b3IuY29tcGFueVN0cmVuZ3Roc31cclxuICAgICAgICAgIGlkPXtgcGxhY2Vob2xkZXJTdHJlbmd0aHMke2NvbXBldGl0b3IuaW5kZXh9YH1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy13aGl0ZSByb3VuZGVkLTJ4bCBtdC0yIHAtMiB0ZXh0LXByaW1hcnlkYXJrIHRleHQtc20gcHgtNCBweS0zIGgtMjggbWF4LWgtMjggZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV2hhdCBkbyB5b3VyIGNvbXBldGl0b3JzIGRvIHJlYWxseSB3ZWxsIHRoYXQgZGlmZmVyZW50aWF0ZXMgdGhlbT9cIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgey8qIFN0cmVuZ3RocyBlbmQgKi99XHJcbiAgICAgICAgPGRpdiBpZD17YGRlc2NyaXB0aW9uV2Vha25lc3NlcyR7Y29tcGV0aXRvci5pbmRleH1gfSBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyIG10LTZcIj5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiL2NvbXBldGl0b3JzL3dlYWtuZXNzZXMuc3ZnXCIgaGVpZ2h0PXsyMn0gd2lkdGg9ezIyfSAvPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5ZGFyayBtbC0yXCI+Q29tcGFueSBXZWFrbmVzc2VzPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgdmFsdWU9e2NvbXBldGl0b3IuY29tcGFueVdlYWtuZXNzZXN9XHJcbiAgICAgICAgICBpZD17YHBsYWNlaG9sZGVyV2Vha25lc3NlcyR7Y29tcGV0aXRvci5pbmRleH1gfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIHJvdW5kZWQtMnhsIG10LTIgcC0yIHRleHQtcHJpbWFyeWRhcmsgdGV4dC1zbSBweC00IHB5LTMgaC0yOCBtYXgtaC0yOCBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJXaGF0IGRvIHRoZSBjb21wYW55IGN1c3RvbWVycyBjb21wbGFpbiBhYm91dCB0aGUgbW9zdCwgYW5kIHdoYXQgcHJvZHVjdHMgZG8gdGhleSBsYWNrP1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgICB7LyogV2Vha25lc3NlcyBlbmQgKi99XHJcbiAgICAgICAgPGRpdiBpZD17YGRlc2NyaXB0aW9uT3Bwb3J0dW5pdGllcyR7Y29tcGV0aXRvci5pbmRleH1gfSBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyIG10LTZcIj5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiL2NvbXBldGl0b3JzL29wcG9ydHVuaXRpZXMyLnN2Z1wiIGhlaWdodD17MjJ9IHdpZHRoPXsyMn0gLz5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeWRhcmsgbWwtMlwiPk9wcG9ydHVuaXRpZXM8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICB2YWx1ZT17Y29tcGV0aXRvci5vcHBvcnR1bml0aWVzfVxyXG4gICAgICAgICAgaWQ9e2BwbGFjZWhvbGRlck9wcG9ydHVuaXRpZXMke2NvbXBldGl0b3IuaW5kZXh9YH1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy13aGl0ZSByb3VuZGVkLTJ4bCBtdC0yIHAtMiB0ZXh0LXByaW1hcnlkYXJrIHRleHQtc20gcHgtNCBweS0zIGgtMjggbWF4LWgtMjggZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV2hhdCBkaXN0aW5ndWlzaCB5b3VyIHN0YXJ0dXAgZnJvbSB0aGlzIHBhcnRpY3VsYXIgY29tcGV0aXRpdmUgY29tcGFueT9cIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgey8qIE9wcG9ydHVuaXRpZXMgZW5kICovfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVbmlxdWVDb21wZXRpdG9yc1BhZ2U7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=