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
    setPlaceholderTitle(placeholderTitle);
    var descriptionModel = document.getElementById("descriptionModel".concat(competitor.index));
    setDescriptionModel(descriptionModel);
    var placeholderModel = document.getElementById("placeholderModel".concat(competitor.index));
    setPlaceholderModel(placeholderModel);
    var descriptionProduct = document.getElementById("descriptionProduct".concat(competitor.index));
    setDescriptionProduct(descriptionProduct);
    var placeholderProduct = document.getElementById("placeholderProduct".concat(competitor.index));
    setPlaceholderProduct(placeholderProduct);
    var descriptionPromotion = document.getElementById("descriptionPromotion".concat(competitor.index));
    setDescriptionPromotion(descriptionPromotion);
    var placeholderPromotion = document.getElementById("placeholderPromotion".concat(competitor.index));
    setPlaceholderPromotion(placeholderPromotion);
    var descriptionStrengths = document.getElementById("descriptionStrengths".concat(competitor.index));
    setDescriptionStrengths(descriptionStrengths);
    var placeholderStrengths = document.getElementById("placeholderStrengths".concat(competitor.index));
    setPlaceholderStrengths(placeholderStrengths);
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
        lineNumber: 119,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 114,
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
            lineNumber: 149,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 145,
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
              lineNumber: 157,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 153,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 152,
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
          lineNumber: 161,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 143,
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
            lineNumber: 165,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            value: competitor.location,
            className: "bg-white rounded-2xl w-full px-3 py-2 text-sm text-primarydark focus:outline-none",
            placeholder: "location"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 172,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            value: competitor.employees,
            className: "bg-white rounded-2xl w-full px-3 py-2 text-sm text-primarydark focus:outline-none",
            placeholder: "employees"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 179,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            value: competitor.revenue,
            className: "bg-white rounded-2xl w-full px-3 py-2 text-sm text-primarydark focus:outline-none",
            placeholder: "revenue"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 186,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 139,
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
          lineNumber: 197,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "text-primarydark ml-2",
          children: "Company description"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 198,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
        value: competitor.companyDescription,
        id: "placeholderTitle".concat(competitor.index),
        className: "w-full bg-white rounded-2xl mt-2 p-2 text-primarydark text-sm px-4 py-3 h-28 max-h-28 focus:outline-none",
        placeholder: "Describe the main assumption of analyzed company."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 200,
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
          lineNumber: 208,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "text-primarydark ml-2",
          children: "Business model"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 209,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
        value: competitor.businessModel,
        id: "placeholderModel".concat(competitor.index),
        className: "w-full bg-white rounded-2xl mt-2 p-2 text-primarydark text-sm px-4 py-3 h-28 max-h-28 focus:outline-none",
        placeholder: "How does the company business model look like?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 211,
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
          lineNumber: 219,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "text-primarydark ml-2",
          children: "Product overview"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 220,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 218,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
        value: competitor.productOverview,
        id: "placeholderProduct".concat(competitor.index),
        className: "w-full bg-white rounded-2xl mt-2 p-2 text-primarydark text-sm px-4 py-3 h-28 max-h-28 focus:outline-none",
        placeholder: "What is the full range of products and services the company offers?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 222,
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
          lineNumber: 230,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "text-primarydark ml-2",
          children: "Promotion strategy"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 231,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 229,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
        value: competitor.promotionStrategy,
        id: "placeholderPromotion".concat(competitor.index),
        className: "w-full bg-white rounded-2xl mt-2 p-2 text-primarydark text-sm px-4 py-3 h-28 max-h-28 focus:outline-none",
        placeholder: "What are the company marketing and promotional strategies?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 233,
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
          lineNumber: 241,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "text-primarydark ml-2",
          children: "Company strengths"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 242,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 240,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
        value: competitor.companyStrengths,
        id: "placeholderStrengths".concat(competitor.index),
        className: "w-full bg-white rounded-2xl mt-2 p-2 text-primarydark text-sm px-4 py-3 h-28 max-h-28 focus:outline-none",
        placeholder: "What do your competitors do really well that differentiates them?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 244,
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
          lineNumber: 252,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "text-primarydark ml-2",
          children: "Company Weaknesses"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 253,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 251,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
        value: competitor.companyWeaknesses,
        id: "placeholderWeaknesses".concat(competitor.index),
        className: "w-full bg-white rounded-2xl mt-2 p-2 text-primarydark text-sm px-4 py-3 h-28 max-h-28 focus:outline-none",
        placeholder: "What do the company customers complain about the most, and what products do they lack?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 255,
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
          lineNumber: 263,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "text-primarydark ml-2",
          children: "Opportunities"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 264,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 262,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
        value: competitor.opportunities,
        id: "placeholderOpportunities".concat(competitor.index),
        className: "w-full bg-white rounded-2xl mt-2 p-2 text-primarydark text-sm px-4 py-3 h-28 max-h-28 focus:outline-none",
        placeholder: "What distinguish your startup from this particular competitive company?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 266,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 109,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kYXNoYm9hcmQvc3RhcnR1cC9wcm9qZWN0L2J1c2luZXNzLWFwcC9jb21wZXRpdG9ycy9VbmlxdWVFbGVtZW50LmpzIl0sIm5hbWVzIjpbIlVuaXF1ZUNvbXBldGl0b3JzUGFnZSIsImNvbXBldGl0b3IiLCJjb25zb2xlIiwibG9nIiwidXNlU3RhdGUiLCJkcm9wZG93bkhlbHBlciIsInNldERyb3Bkb3duSGVscGVyIiwiaW5pdGlhbENvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbmRleCIsImRlc2NyaXB0aW9uVGl0bGUiLCJzZXREZXNjcmlwdGlvblRpdGxlIiwicGxhY2Vob2xkZXJUaXRsZSIsInNldFBsYWNlaG9sZGVyVGl0bGUiLCJkZXNjcmlwdGlvbk1vZGVsIiwic2V0RGVzY3JpcHRpb25Nb2RlbCIsInBsYWNlaG9sZGVyTW9kZWwiLCJzZXRQbGFjZWhvbGRlck1vZGVsIiwiZGVzY3JpcHRpb25Qcm9kdWN0Iiwic2V0RGVzY3JpcHRpb25Qcm9kdWN0IiwicGxhY2Vob2xkZXJQcm9kdWN0Iiwic2V0UGxhY2Vob2xkZXJQcm9kdWN0IiwiZGVzY3JpcHRpb25Qcm9tb3Rpb24iLCJzZXREZXNjcmlwdGlvblByb21vdGlvbiIsInBsYWNlaG9sZGVyUHJvbW90aW9uIiwic2V0UGxhY2Vob2xkZXJQcm9tb3Rpb24iLCJkZXNjcmlwdGlvblN0cmVuZ3RocyIsInNldERlc2NyaXB0aW9uU3RyZW5ndGhzIiwicGxhY2Vob2xkZXJTdHJlbmd0aHMiLCJzZXRQbGFjZWhvbGRlclN0cmVuZ3RocyIsImRlc2NyaXB0aW9uV2Vha25lc3NlcyIsInNldERlc2NyaXB0aW9uV2Vha25lc3NlcyIsInBsYWNlaG9sZGVyV2Vha25lc3NlcyIsInNldFBsYWNlaG9sZGVyV2Vha25lc3NlcyIsImRlc2NyaXB0aW9uT3Bwb3J0dW5pdGllcyIsInNldERlc2NyaXB0aW9uT3Bwb3J0dW5pdGllcyIsInBsYWNlaG9sZGVyT3Bwb3J0dW5pdGllcyIsInNldFBsYWNlaG9sZGVyT3Bwb3J0dW5pdGllcyIsInVzZUVmZmVjdCIsImRyb3BEb3duRWxlbWVudCIsImRhdGFFbGVtZW50IiwiZ3NhcCIsInNldCIsInJvdGF0aW9uIiwiaXNNb2JpbGUiLCJjb250YWluZXJFbGVtZW50IiwiY29tcGV0aXRvck1hbmFnZXIiLCJhZGRFdmVudExpc3RlbmVyIiwidG8iLCJoZWlnaHQiLCJtYXJpZ25Cb3R0b20iLCJkdXJhdGlvbiIsImVhc2UiLCJMaW5lYXIiLCJlYXNlSW4iLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJlYXNlT3V0Iiwib25TZWN0aW9uRHJvcGRvd24iLCJzZWN0aW9uSGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwiYXV0b0FscGhhIiwidG9wIiwiaW1hZ2UiLCJkaXNwbGF5IiwiekluZGV4IiwidGl0bGUiLCJsb2NhdGlvbiIsImVtcGxveWVlcyIsInJldmVudWUiLCJjb21wYW55RGVzY3JpcHRpb24iLCJidXNpbmVzc01vZGVsIiwicHJvZHVjdE92ZXJ2aWV3IiwicHJvbW90aW9uU3RyYXRlZ3kiLCJjb21wYW55U3RyZW5ndGhzIiwiY29tcGFueVdlYWtuZXNzZXMiLCJvcHBvcnR1bml0aWVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixPQUFvQjtBQUFBOztBQUFBLE1BQWpCQyxVQUFpQixRQUFqQkEsVUFBaUI7QUFDaERDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFaLEVBQStCRixVQUEvQixFQURnRCxDQUVoRDs7QUFGZ0Qsa0JBR0pHLHNEQUFRLENBQUMsS0FBRCxDQUhKO0FBQUEsTUFHekNDLGNBSHlDO0FBQUEsTUFHekJDLGlCQUh5Qjs7QUFLaEQsTUFBTUMsZ0JBQWdCLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QlIsVUFBVSxDQUFDUyxLQUFuQyxDQUF6QixDQUxn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QUFKZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBdkVGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXRGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXdLRCxDQS9RRDs7R0FBTVYscUI7O0tBQUFBLHFCO0FBaVJTQSxvRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kYXNoYm9hcmQvcHJvamVjdHMvW3Byb2plY3RdL2NvbXBldGl0b3JzL1tpZF0uZjJlOGY2OTgzZTFkMTE5ZTVkZDQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGlzTW9iaWxlIH0gZnJvbSAncmVhY3QtZGV2aWNlLWRldGVjdCc7XHJcbmltcG9ydCBnc2FwLCB7IExpbmVhciB9IGZyb20gJ2dzYXAnO1xyXG5cclxuY29uc3QgVW5pcXVlQ29tcGV0aXRvcnNQYWdlID0gKHsgY29tcGV0aXRvciB9KSA9PiB7XHJcbiAgY29uc29sZS5sb2coJ0NvbXBldGl0b3IgLS0+ICcsIGNvbXBldGl0b3IpO1xyXG4gIC8vICAgRHJvcGRvd25cclxuICBjb25zdCBbZHJvcGRvd25IZWxwZXIsIHNldERyb3Bkb3duSGVscGVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaW5pdGlhbENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbXBldGl0b3IuaW5kZXgpO1xyXG4gIC8vIEVsZW1lbnRcclxuICBjb25zdCBbZGVzY3JpcHRpb25UaXRsZSwgc2V0RGVzY3JpcHRpb25UaXRsZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbcGxhY2Vob2xkZXJUaXRsZSwgc2V0UGxhY2Vob2xkZXJUaXRsZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbZGVzY3JpcHRpb25Nb2RlbCwgc2V0RGVzY3JpcHRpb25Nb2RlbF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbcGxhY2Vob2xkZXJNb2RlbCwgc2V0UGxhY2Vob2xkZXJNb2RlbF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbZGVzY3JpcHRpb25Qcm9kdWN0LCBzZXREZXNjcmlwdGlvblByb2R1Y3RdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW3BsYWNlaG9sZGVyUHJvZHVjdCwgc2V0UGxhY2Vob2xkZXJQcm9kdWN0XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtkZXNjcmlwdGlvblByb21vdGlvbiwgc2V0RGVzY3JpcHRpb25Qcm9tb3Rpb25dID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW3BsYWNlaG9sZGVyUHJvbW90aW9uLCBzZXRQbGFjZWhvbGRlclByb21vdGlvbl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbZGVzY3JpcHRpb25TdHJlbmd0aHMsIHNldERlc2NyaXB0aW9uU3RyZW5ndGhzXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtwbGFjZWhvbGRlclN0cmVuZ3Rocywgc2V0UGxhY2Vob2xkZXJTdHJlbmd0aHNdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2Rlc2NyaXB0aW9uV2Vha25lc3Nlcywgc2V0RGVzY3JpcHRpb25XZWFrbmVzc2VzXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtwbGFjZWhvbGRlcldlYWtuZXNzZXMsIHNldFBsYWNlaG9sZGVyV2Vha25lc3Nlc10gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbZGVzY3JpcHRpb25PcHBvcnR1bml0aWVzLCBzZXREZXNjcmlwdGlvbk9wcG9ydHVuaXRpZXNdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW3BsYWNlaG9sZGVyT3Bwb3J0dW5pdGllcywgc2V0UGxhY2Vob2xkZXJPcHBvcnR1bml0aWVzXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZGVzY3JpcHRpb25UaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBkZXNjcmlwdGlvblRpdGxlJHtjb21wZXRpdG9yLmluZGV4fWApO1xyXG4gICAgc2V0RGVzY3JpcHRpb25UaXRsZShkZXNjcmlwdGlvblRpdGxlKTtcclxuICAgIGNvbnN0IHBsYWNlaG9sZGVyVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcGxhY2Vob2xkZXJUaXRsZSR7Y29tcGV0aXRvci5pbmRleH1gKTtcclxuICAgIHNldFBsYWNlaG9sZGVyVGl0bGUocGxhY2Vob2xkZXJUaXRsZSk7XHJcbiAgICBjb25zdCBkZXNjcmlwdGlvbk1vZGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGRlc2NyaXB0aW9uTW9kZWwke2NvbXBldGl0b3IuaW5kZXh9YCk7XHJcbiAgICBzZXREZXNjcmlwdGlvbk1vZGVsKGRlc2NyaXB0aW9uTW9kZWwpO1xyXG4gICAgY29uc3QgcGxhY2Vob2xkZXJNb2RlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwbGFjZWhvbGRlck1vZGVsJHtjb21wZXRpdG9yLmluZGV4fWApO1xyXG4gICAgc2V0UGxhY2Vob2xkZXJNb2RlbChwbGFjZWhvbGRlck1vZGVsKTtcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uUHJvZHVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBkZXNjcmlwdGlvblByb2R1Y3Qke2NvbXBldGl0b3IuaW5kZXh9YCk7XHJcbiAgICBzZXREZXNjcmlwdGlvblByb2R1Y3QoZGVzY3JpcHRpb25Qcm9kdWN0KTtcclxuICAgIGNvbnN0IHBsYWNlaG9sZGVyUHJvZHVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwbGFjZWhvbGRlclByb2R1Y3Qke2NvbXBldGl0b3IuaW5kZXh9YCk7XHJcbiAgICBzZXRQbGFjZWhvbGRlclByb2R1Y3QocGxhY2Vob2xkZXJQcm9kdWN0KTtcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uUHJvbW90aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGRlc2NyaXB0aW9uUHJvbW90aW9uJHtjb21wZXRpdG9yLmluZGV4fWApO1xyXG4gICAgc2V0RGVzY3JpcHRpb25Qcm9tb3Rpb24oZGVzY3JpcHRpb25Qcm9tb3Rpb24pO1xyXG4gICAgY29uc3QgcGxhY2Vob2xkZXJQcm9tb3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcGxhY2Vob2xkZXJQcm9tb3Rpb24ke2NvbXBldGl0b3IuaW5kZXh9YCk7XHJcbiAgICBzZXRQbGFjZWhvbGRlclByb21vdGlvbihwbGFjZWhvbGRlclByb21vdGlvbik7XHJcbiAgICBjb25zdCBkZXNjcmlwdGlvblN0cmVuZ3RocyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBkZXNjcmlwdGlvblN0cmVuZ3RocyR7Y29tcGV0aXRvci5pbmRleH1gKTtcclxuICAgIHNldERlc2NyaXB0aW9uU3RyZW5ndGhzKGRlc2NyaXB0aW9uU3RyZW5ndGhzKTtcclxuICAgIGNvbnN0IHBsYWNlaG9sZGVyU3RyZW5ndGhzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHBsYWNlaG9sZGVyU3RyZW5ndGhzJHtjb21wZXRpdG9yLmluZGV4fWApO1xyXG4gICAgc2V0UGxhY2Vob2xkZXJTdHJlbmd0aHMocGxhY2Vob2xkZXJTdHJlbmd0aHMpO1xyXG4gICAgY29uc3QgZGVzY3JpcHRpb25XZWFrbmVzc2VzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGRlc2NyaXB0aW9uV2Vha25lc3NlcyR7Y29tcGV0aXRvci5pbmRleH1gKTtcclxuICAgIGNvbnN0IHBsYWNlaG9sZGVyV2Vha25lc3NlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwbGFjZWhvbGRlcldlYWtuZXNzZXMke2NvbXBldGl0b3IuaW5kZXh9YCk7XHJcbiAgICBjb25zdCBkZXNjcmlwdGlvbk9wcG9ydHVuaXRpZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZGVzY3JpcHRpb25PcHBvcnR1bml0aWVzJHtjb21wZXRpdG9yLmluZGV4fWApO1xyXG4gICAgY29uc3QgcGxhY2Vob2xkZXJPcHBvcnR1bml0aWVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHBsYWNlaG9sZGVyT3Bwb3J0dW5pdGllcyR7Y29tcGV0aXRvci5pbmRleH1gKTtcclxuICB9KTtcclxuICAvLyBFbGVtZW50c1xyXG4gIGNvbnNvbGUubG9nKGRlc2NyaXB0aW9uVGl0bGUpO1xyXG5cclxuICBjb25zdCBkcm9wRG93bkVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZHJvcGRvd24ke2NvbXBldGl0b3IuaW5kZXh9YCk7XHJcbiAgY29uc3QgZGF0YUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZGF0YSR7Y29tcGV0aXRvci5pbmRleH1gKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdzYXAuc2V0KGRyb3BEb3duRWxlbWVudCwgeyByb3RhdGlvbjogJy05MF9jdycgfSk7XHJcbiAgICBpZiAoIWlzTW9iaWxlKSB7XHJcbiAgICAgIGNvbnN0IGNvbnRhaW5lckVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgY29udGFpbmVyJHtjb21wZXRpdG9yLmluZGV4fWApO1xyXG4gICAgICBjb25zdCBjb21wZXRpdG9yTWFuYWdlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBtYW5hZ2VyJHtjb21wZXRpdG9yLmluZGV4fWApO1xyXG4gICAgICBjb250YWluZXJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoKSA9PiB7XHJcbiAgICAgICAgZ3NhcC50byhjb21wZXRpdG9yTWFuYWdlciwgeyBoZWlnaHQ6IDE4LCBtYXJpZ25Cb3R0b206IDE2LCBkdXJhdGlvbjogMC41LCBlYXNlOiBMaW5lYXIuZWFzZUluIH0pO1xyXG4gICAgICAgIGdzYXAudG8oaW5pdGlhbENvbnRhaW5lciwgeyBtYXJnaW5Ub3A6IDE2LCBkdXJhdGlvbjogMC41LCBlYXNlOiBMaW5lYXIuZWFzZUluIH0pO1xyXG4gICAgICB9KTtcclxuICAgICAgY29udGFpbmVyRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xyXG4gICAgICAgIGdzYXAudG8oY29tcGV0aXRvck1hbmFnZXIsIHsgaGVpZ2h0OiAwLCBtYXJnaW5Cb3R0b206IDAsIGR1cmF0aW9uOiAwLjUsIGVhc2U6IExpbmVhci5lYXNlT3V0IH0pO1xyXG4gICAgICAgIGdzYXAudG8oaW5pdGlhbENvbnRhaW5lciwgeyBtYXJnaW5Ub3A6IDAsIGR1cmF0aW9uOiAwLjUsIGVhc2U6IExpbmVhci5lYXNlSW4gfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sIFtkcm9wRG93bkVsZW1lbnRdKTtcclxuXHJcbiAgY29uc3Qgb25TZWN0aW9uRHJvcGRvd24gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBzZWN0aW9uSGVpZ2h0ID1cclxuICAgICAgZGVzY3JpcHRpb25UaXRsZS5vZmZzZXRIZWlnaHQgK1xyXG4gICAgICBwbGFjZWhvbGRlclRpdGxlLm9mZnNldEhlaWdodCArXHJcbiAgICAgIGRlc2NyaXB0aW9uTW9kZWwub2Zmc2V0SGVpZ2h0ICtcclxuICAgICAgcGxhY2Vob2xkZXJNb2RlbC5vZmZzZXRIZWlnaHQgK1xyXG4gICAgICAyNCArXHJcbiAgICAgIGRlc2NyaXB0aW9uUHJvZHVjdC5vZmZzZXRIZWlnaHQgK1xyXG4gICAgICBwbGFjZWhvbGRlclByb2R1Y3Qub2Zmc2V0SGVpZ2h0ICtcclxuICAgICAgMjQgK1xyXG4gICAgICBkZXNjcmlwdGlvblByb21vdGlvbi5vZmZzZXRIZWlnaHQgK1xyXG4gICAgICBwbGFjZWhvbGRlclByb21vdGlvbi5vZmZzZXRIZWlnaHQgK1xyXG4gICAgICAyNCArXHJcbiAgICAgIGRlc2NyaXB0aW9uU3RyZW5ndGhzLm9mZnNldEhlaWdodCArXHJcbiAgICAgIHBsYWNlaG9sZGVyU3RyZW5ndGhzLm9mZnNldEhlaWdodCArXHJcbiAgICAgIDI0ICtcclxuICAgICAgZGVzY3JpcHRpb25XZWFrbmVzc2VzLm9mZnNldEhlaWdodCArXHJcbiAgICAgIHBsYWNlaG9sZGVyV2Vha25lc3Nlcy5vZmZzZXRIZWlnaHQgK1xyXG4gICAgICAyNCArXHJcbiAgICAgIGRlc2NyaXB0aW9uT3Bwb3J0dW5pdGllcy5vZmZzZXRIZWlnaHQgK1xyXG4gICAgICBwbGFjZWhvbGRlck9wcG9ydHVuaXRpZXMub2Zmc2V0SGVpZ2h0ICtcclxuICAgICAgMjQ7XHJcbiAgICBpZiAoIWRyb3Bkb3duSGVscGVyKSB7XHJcbiAgICAgIGdzYXAudG8oZGF0YUVsZW1lbnQsIHsgaGVpZ2h0OiBzZWN0aW9uSGVpZ2h0LCBtYXJnaW5Ub3A6IDMyLCBtYXJnaW5Cb3R0b206IDExMiwgYXV0b0FscGhhOiAxLCBkdXJhdGlvbjogMSwgZWFzZTogTGluZWFyIH0pO1xyXG4gICAgICBnc2FwLnRvKGRyb3BEb3duRWxlbWVudCwgeyByb3RhdGlvbjogJzBfY3cnLCBkdXJhdGlvbjogMSwgZWFzZTogTGluZWFyIH0pO1xyXG4gICAgICBzZXREcm9wZG93bkhlbHBlcih0cnVlKTtcclxuICAgIH0gZWxzZSBpZiAoZHJvcGRvd25IZWxwZXIpIHtcclxuICAgICAgZ3NhcC50byhkYXRhRWxlbWVudCwgeyBoZWlnaHQ6IDAsIG1hcmdpblRvcDogMCwgbWFyZ2luQm90dG9tOiAwLCBhdXRvQWxwaGE6IDAsIGR1cmF0aW9uOiAxLCBlYXNlOiBMaW5lYXIgfSk7XHJcbiAgICAgIGdzYXAudG8oZHJvcERvd25FbGVtZW50LCB7IHJvdGF0aW9uOiAnLTkwX2NjdycsIGR1cmF0aW9uOiAxLCBlYXNlOiBMaW5lYXIgfSk7XHJcbiAgICAgIHNldERyb3Bkb3duSGVscGVyKGZhbHNlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBzdHlsZT17eyBoZWlnaHQ6ICdmaXQtY29udGVudCcgfX1cclxuICAgICAgaWQ9e2Bjb250YWluZXIke2NvbXBldGl0b3IuaW5kZXh9YH1cclxuICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWJhY2tncm91bmQgcm91bmRlZC0yeGwgcC00IHNzbUNvbnRhaW5lcjpwLTYgc2hhZG93LW1kIG92ZXJmbG93LWhpZGRlbiBtdC04IHNtQ29udGFpbmVyOm10LThcIlxyXG4gICAgPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiBgJHtpc01vYmlsZSA/IDQwIDogMH1gLCB0b3A6IGAke2lzTW9iaWxlID8gJy02cHgnIDogJy02cHgnfWAgfX1cclxuICAgICAgICBpZD17YG1hbmFnZXIke2NvbXBldGl0b3IuaW5kZXh9YH1cclxuICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiByZWxhdGl2ZVwiXHJcbiAgICAgID5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAvLyAgIHN0eWxlPXt7IHRyYW5zZm9ybTogJ3JvdGF0ZSgtOTBkZWcpJyB9fVxyXG4gICAgICAgICAgb25DbGljaz17b25TZWN0aW9uRHJvcGRvd259XHJcbiAgICAgICAgICBpZD17YGRyb3Bkb3duJHtjb21wZXRpdG9yLmluZGV4fWB9XHJcbiAgICAgICAgICBzcmM9XCIvY29tcGV0aXRvcnMvZHJvcGRvd24uc3ZnXCJcclxuICAgICAgICAgIGhlaWdodD17MTh9XHJcbiAgICAgICAgICB3aWR0aD17MTh9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cclxuICAgICAgICAgIHsvKiA8aW1nIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyIG1yLTJcIiBzcmM9XCIvY29tcGV0aXRvcnMvZHJhZy5zdmdcIiBoZWlnaHQ9ezE4fSB3aWR0aD17MTh9IC8+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gb25Db21wZXRpdG9yUmVtb3ZlKGRhdGEuY29tcGV0aXRvci5pbmRleCl9XHJcbiAgICAgICAgICBzcmM9XCIvY29tcGV0aXRvcnMvcmVtb3ZlLnN2Z1wiXHJcbiAgICAgICAgICBoZWlnaHQ9ezE4fVxyXG4gICAgICAgICAgd2lkdGg9ezE4fVxyXG4gICAgICAgIC8+ICovfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGlkPXtjb21wZXRpdG9yLmluZGV4fVxyXG4gICAgICAgIGNsYXNzTmFtZT1cImZsZXggZ2FwLTYgZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHNtQ29udGFpbmVyOmdhcC0wIHNtQ29udGFpbmVyOmdyaWQgc21Db250YWluZXI6Z3JpZC1jb2xzLTEyZnJcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbUNvbnRhaW5lcjpjb2wtc3RhcnQtMSBzbUNvbnRhaW5lcjpjb2wtZW5kLTQganVzdGlmeS1zZWxmLWNlbnRlciBmbGV4IGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICB7Y29tcGV0aXRvci5pbWFnZSAhPT0gJycgPyAoXHJcbiAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgIGh0bWxGb3I9e2B1cGxvYWQtaW1hZ2Uke2NvbXBldGl0b3IuaW5kZXh9YH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LTIwIGgtMjAgY3Vyc29yLXBvaW50ZXIgcm91bmRlZC1mdWxsIGJnLXdoaXRlIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtjb21wZXRpdG9yLmltYWdlfSBoZWlnaHQ9ezU1fSB3aWR0aD17NTV9IC8+XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgaHRtbEZvcj17YHVwbG9hZC1pbWFnZSR7Y29tcGV0aXRvci5pbmRleH1gfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0yMCBoLTIwIGN1cnNvci1wb2ludGVyIHJvdW5kZWQtZnVsbCBiZy1wcmltYXJ5IGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9jb21wZXRpdG9ycy9lbXB0eS1pbWFnZS5zdmdcIiBoZWlnaHQ9ezY1fSB3aWR0aD17NjV9IC8+XHJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgaWQ9e2B1cGxvYWQtaW1hZ2Uke2NvbXBldGl0b3IuaW5kZXh9YH0gc3R5bGU9e3sgZGlzcGxheTogJ25vbmUnLCB6SW5kZXg6IDEwIH19IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbUNvbnRhaW5lcjpjb2wtc3RhcnQtNSBzbUNvbnRhaW5lcjpjb2wtZW5kLTEzIGdyaWQgZ3JpZC1jb2xzLTJmciBncmlkLXJvd3MtMmZyIGp1c3RpZnktaXRlbXMtY2VudGVyIGl0ZW1zLWNlbnRlciBnYXAteC00IHNzbUNvbnRhaW5lcjpnYXAteC04IGdhcC15LTIgc3NtQ29udGFpbmVyOmdhcC15LTRcIj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHZhbHVlPXtjb21wZXRpdG9yLnRpdGxlfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQtMnhsIHctZnVsbCBweC0zIHB5LTIgdGV4dC1zbSB0ZXh0LXByaW1hcnlkYXJrIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJuYW1lXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdmFsdWU9e2NvbXBldGl0b3IubG9jYXRpb259XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZC0yeGwgdy1mdWxsIHB4LTMgcHktMiB0ZXh0LXNtIHRleHQtcHJpbWFyeWRhcmsgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImxvY2F0aW9uXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdmFsdWU9e2NvbXBldGl0b3IuZW1wbG95ZWVzfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQtMnhsIHctZnVsbCBweC0zIHB5LTIgdGV4dC1zbSB0ZXh0LXByaW1hcnlkYXJrIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlbXBsb3llZXNcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB2YWx1ZT17Y29tcGV0aXRvci5yZXZlbnVlfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQtMnhsIHctZnVsbCBweC0zIHB5LTIgdGV4dC1zbSB0ZXh0LXByaW1hcnlkYXJrIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJyZXZlbnVlXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgey8qIENvbXBhbnkgZGVzY3JpcHRpb24gKi99XHJcbiAgICAgIDxkaXYgaWQ9e2BkYXRhJHtjb21wZXRpdG9yLmluZGV4fWB9IGNsYXNzTmFtZT1cInctZnVsbCBoLTAgaW52aXNpYmxlXCI+XHJcbiAgICAgICAgPGRpdiBpZD17YGRlc2NyaXB0aW9uVGl0bGUke2NvbXBldGl0b3IuaW5kZXh9YH0gY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCIvY29tcGV0aXRvcnMvZGVzY3JpcHRpb24uc3ZnXCIgaGVpZ2h0PXsyMn0gd2lkdGg9ezIyfSAvPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5ZGFyayBtbC0yXCI+Q29tcGFueSBkZXNjcmlwdGlvbjwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgIHZhbHVlPXtjb21wZXRpdG9yLmNvbXBhbnlEZXNjcmlwdGlvbn1cclxuICAgICAgICAgIGlkPXtgcGxhY2Vob2xkZXJUaXRsZSR7Y29tcGV0aXRvci5pbmRleH1gfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIHJvdW5kZWQtMnhsIG10LTIgcC0yIHRleHQtcHJpbWFyeWRhcmsgdGV4dC1zbSBweC00IHB5LTMgaC0yOCBtYXgtaC0yOCBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJEZXNjcmliZSB0aGUgbWFpbiBhc3N1bXB0aW9uIG9mIGFuYWx5emVkIGNvbXBhbnkuXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIHsvKiBUaXRsZSBlbmQgKi99XHJcbiAgICAgICAgPGRpdiBpZD17YGRlc2NyaXB0aW9uTW9kZWwke2NvbXBldGl0b3IuaW5kZXh9YH0gY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlciBtdC02XCI+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cIi9jb21wZXRpdG9ycy9tb2RlbC5zdmdcIiBoZWlnaHQ9ezIyfSB3aWR0aD17MjJ9IC8+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnlkYXJrIG1sLTJcIj5CdXNpbmVzcyBtb2RlbDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgIHZhbHVlPXtjb21wZXRpdG9yLmJ1c2luZXNzTW9kZWx9XHJcbiAgICAgICAgICBpZD17YHBsYWNlaG9sZGVyTW9kZWwke2NvbXBldGl0b3IuaW5kZXh9YH1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy13aGl0ZSByb3VuZGVkLTJ4bCBtdC0yIHAtMiB0ZXh0LXByaW1hcnlkYXJrIHRleHQtc20gcHgtNCBweS0zIGgtMjggbWF4LWgtMjggZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSG93IGRvZXMgdGhlIGNvbXBhbnkgYnVzaW5lc3MgbW9kZWwgbG9vayBsaWtlP1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgICB7LyogTW9kZWwgZW5kICovfVxyXG4gICAgICAgIDxkaXYgaWQ9e2BkZXNjcmlwdGlvblByb2R1Y3Qke2NvbXBldGl0b3IuaW5kZXh9YH0gY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlciBtdC02XCI+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cIi9jb21wZXRpdG9ycy9wcm9kdWN0MS5zdmdcIiBoZWlnaHQ9ezIyfSB3aWR0aD17MjJ9IC8+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnlkYXJrIG1sLTJcIj5Qcm9kdWN0IG92ZXJ2aWV3PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgdmFsdWU9e2NvbXBldGl0b3IucHJvZHVjdE92ZXJ2aWV3fVxyXG4gICAgICAgICAgaWQ9e2BwbGFjZWhvbGRlclByb2R1Y3Qke2NvbXBldGl0b3IuaW5kZXh9YH1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy13aGl0ZSByb3VuZGVkLTJ4bCBtdC0yIHAtMiB0ZXh0LXByaW1hcnlkYXJrIHRleHQtc20gcHgtNCBweS0zIGgtMjggbWF4LWgtMjggZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV2hhdCBpcyB0aGUgZnVsbCByYW5nZSBvZiBwcm9kdWN0cyBhbmQgc2VydmljZXMgdGhlIGNvbXBhbnkgb2ZmZXJzP1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgICB7LyogUHJvZHVjdCBlbmQgKi99XHJcbiAgICAgICAgPGRpdiBpZD17YGRlc2NyaXB0aW9uUHJvbW90aW9uJHtjb21wZXRpdG9yLmluZGV4fWB9IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXIgbXQtNlwiPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCIvY29tcGV0aXRvcnMvcHJvbW90aW9uLnN2Z1wiIGhlaWdodD17MjJ9IHdpZHRoPXsyMn0gLz5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeWRhcmsgbWwtMlwiPlByb21vdGlvbiBzdHJhdGVneTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgIHZhbHVlPXtjb21wZXRpdG9yLnByb21vdGlvblN0cmF0ZWd5fVxyXG4gICAgICAgICAgaWQ9e2BwbGFjZWhvbGRlclByb21vdGlvbiR7Y29tcGV0aXRvci5pbmRleH1gfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIHJvdW5kZWQtMnhsIG10LTIgcC0yIHRleHQtcHJpbWFyeWRhcmsgdGV4dC1zbSBweC00IHB5LTMgaC0yOCBtYXgtaC0yOCBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJXaGF0IGFyZSB0aGUgY29tcGFueSBtYXJrZXRpbmcgYW5kIHByb21vdGlvbmFsIHN0cmF0ZWdpZXM/XCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIHsvKiBQcm9tb3Rpb24gZW5kICovfVxyXG4gICAgICAgIDxkaXYgaWQ9e2BkZXNjcmlwdGlvblN0cmVuZ3RocyR7Y29tcGV0aXRvci5pbmRleH1gfSBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyIG10LTZcIj5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiL2NvbXBldGl0b3JzL3N0cmVuZ3Rocy5zdmdcIiBoZWlnaHQ9ezIyfSB3aWR0aD17MjJ9IC8+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnlkYXJrIG1sLTJcIj5Db21wYW55IHN0cmVuZ3RoczwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgIHZhbHVlPXtjb21wZXRpdG9yLmNvbXBhbnlTdHJlbmd0aHN9XHJcbiAgICAgICAgICBpZD17YHBsYWNlaG9sZGVyU3RyZW5ndGhzJHtjb21wZXRpdG9yLmluZGV4fWB9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgcm91bmRlZC0yeGwgbXQtMiBwLTIgdGV4dC1wcmltYXJ5ZGFyayB0ZXh0LXNtIHB4LTQgcHktMyBoLTI4IG1heC1oLTI4IGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIldoYXQgZG8geW91ciBjb21wZXRpdG9ycyBkbyByZWFsbHkgd2VsbCB0aGF0IGRpZmZlcmVudGlhdGVzIHRoZW0/XCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIHsvKiBTdHJlbmd0aHMgZW5kICovfVxyXG4gICAgICAgIDxkaXYgaWQ9e2BkZXNjcmlwdGlvbldlYWtuZXNzZXMke2NvbXBldGl0b3IuaW5kZXh9YH0gY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlciBtdC02XCI+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cIi9jb21wZXRpdG9ycy93ZWFrbmVzc2VzLnN2Z1wiIGhlaWdodD17MjJ9IHdpZHRoPXsyMn0gLz5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeWRhcmsgbWwtMlwiPkNvbXBhbnkgV2Vha25lc3NlczwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgIHZhbHVlPXtjb21wZXRpdG9yLmNvbXBhbnlXZWFrbmVzc2VzfVxyXG4gICAgICAgICAgaWQ9e2BwbGFjZWhvbGRlcldlYWtuZXNzZXMke2NvbXBldGl0b3IuaW5kZXh9YH1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy13aGl0ZSByb3VuZGVkLTJ4bCBtdC0yIHAtMiB0ZXh0LXByaW1hcnlkYXJrIHRleHQtc20gcHgtNCBweS0zIGgtMjggbWF4LWgtMjggZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV2hhdCBkbyB0aGUgY29tcGFueSBjdXN0b21lcnMgY29tcGxhaW4gYWJvdXQgdGhlIG1vc3QsIGFuZCB3aGF0IHByb2R1Y3RzIGRvIHRoZXkgbGFjaz9cIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgey8qIFdlYWtuZXNzZXMgZW5kICovfVxyXG4gICAgICAgIDxkaXYgaWQ9e2BkZXNjcmlwdGlvbk9wcG9ydHVuaXRpZXMke2NvbXBldGl0b3IuaW5kZXh9YH0gY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlciBtdC02XCI+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cIi9jb21wZXRpdG9ycy9vcHBvcnR1bml0aWVzMi5zdmdcIiBoZWlnaHQ9ezIyfSB3aWR0aD17MjJ9IC8+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnlkYXJrIG1sLTJcIj5PcHBvcnR1bml0aWVzPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgdmFsdWU9e2NvbXBldGl0b3Iub3Bwb3J0dW5pdGllc31cclxuICAgICAgICAgIGlkPXtgcGxhY2Vob2xkZXJPcHBvcnR1bml0aWVzJHtjb21wZXRpdG9yLmluZGV4fWB9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgcm91bmRlZC0yeGwgbXQtMiBwLTIgdGV4dC1wcmltYXJ5ZGFyayB0ZXh0LXNtIHB4LTQgcHktMyBoLTI4IG1heC1oLTI4IGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIldoYXQgZGlzdGluZ3Vpc2ggeW91ciBzdGFydHVwIGZyb20gdGhpcyBwYXJ0aWN1bGFyIGNvbXBldGl0aXZlIGNvbXBhbnk/XCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIHsvKiBPcHBvcnR1bml0aWVzIGVuZCAqL31cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVW5pcXVlQ29tcGV0aXRvcnNQYWdlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9