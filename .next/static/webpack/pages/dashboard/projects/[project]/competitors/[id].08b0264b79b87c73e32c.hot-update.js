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
        lineNumber: 101,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 96,
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
            lineNumber: 131,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 127,
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
              lineNumber: 139,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 134,
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
          lineNumber: 143,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 125,
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
            lineNumber: 147,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            value: competitor.location,
            className: "bg-white rounded-2xl w-full px-3 py-2 text-sm text-primarydark focus:outline-none",
            placeholder: "location"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 154,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            value: competitor.employees,
            className: "bg-white rounded-2xl w-full px-3 py-2 text-sm text-primarydark focus:outline-none",
            placeholder: "employees"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 161,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            value: competitor.revenue,
            className: "bg-white rounded-2xl w-full px-3 py-2 text-sm text-primarydark focus:outline-none",
            placeholder: "revenue"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 168,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 121,
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
          lineNumber: 179,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "text-primarydark ml-2",
          children: "Company description"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
        value: competitor.companyDescription,
        id: "placeholderTitle".concat(competitor.index),
        className: "w-full bg-white rounded-2xl mt-2 p-2 text-primarydark text-sm px-4 py-3 h-28 max-h-28 focus:outline-none",
        placeholder: "Describe the main assumption of analyzed company."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 182,
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
          lineNumber: 190,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "text-primarydark ml-2",
          children: "Business model"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 191,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
        value: competitor.businessModel,
        id: "placeholderModel".concat(competitor.index),
        className: "w-full bg-white rounded-2xl mt-2 p-2 text-primarydark text-sm px-4 py-3 h-28 max-h-28 focus:outline-none",
        placeholder: "How does the company business model look like?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 193,
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
          lineNumber: 201,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "text-primarydark ml-2",
          children: "Product overview"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 202,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
        value: competitor.productOverview,
        id: "placeholderProduct".concat(competitor.index),
        className: "w-full bg-white rounded-2xl mt-2 p-2 text-primarydark text-sm px-4 py-3 h-28 max-h-28 focus:outline-none",
        placeholder: "What is the full range of products and services the company offers?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 204,
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
          lineNumber: 212,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "text-primarydark ml-2",
          children: "Promotion strategy"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 213,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 211,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
        value: competitor.promotionStrategy,
        id: "placeholderPromotion".concat(competitor.index),
        className: "w-full bg-white rounded-2xl mt-2 p-2 text-primarydark text-sm px-4 py-3 h-28 max-h-28 focus:outline-none",
        placeholder: "What are the company marketing and promotional strategies?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 215,
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
          lineNumber: 223,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "text-primarydark ml-2",
          children: "Company strengths"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 224,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 222,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
        value: competitor.companyStrengths,
        id: "placeholderStrengths".concat(competitor.index),
        className: "w-full bg-white rounded-2xl mt-2 p-2 text-primarydark text-sm px-4 py-3 h-28 max-h-28 focus:outline-none",
        placeholder: "What do your competitors do really well that differentiates them?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 226,
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
          lineNumber: 234,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "text-primarydark ml-2",
          children: "Company Weaknesses"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 235,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 233,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
        value: competitor.companyWeaknesses,
        id: "placeholderWeaknesses".concat(competitor.index),
        className: "w-full bg-white rounded-2xl mt-2 p-2 text-primarydark text-sm px-4 py-3 h-28 max-h-28 focus:outline-none",
        placeholder: "What do the company customers complain about the most, and what products do they lack?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 237,
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
          lineNumber: 245,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "text-primarydark ml-2",
          children: "Opportunities"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 246,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 244,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
        value: competitor.opportunities,
        id: "placeholderOpportunities".concat(competitor.index),
        className: "w-full bg-white rounded-2xl mt-2 p-2 text-primarydark text-sm px-4 py-3 h-28 max-h-28 focus:outline-none",
        placeholder: "What distinguish your startup from this particular competitive company?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 248,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 91,
    columnNumber: 5
  }, _this);
};

_s(UniqueCompetitorsPage, "gDD0SCFhB6E7B1yTufUcOrnVgf0=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kYXNoYm9hcmQvc3RhcnR1cC9wcm9qZWN0L2J1c2luZXNzLWFwcC9jb21wZXRpdG9ycy9VbmlxdWVFbGVtZW50LmpzIl0sIm5hbWVzIjpbIlVuaXF1ZUNvbXBldGl0b3JzUGFnZSIsImNvbXBldGl0b3IiLCJjb25zb2xlIiwibG9nIiwidXNlU3RhdGUiLCJkcm9wZG93bkhlbHBlciIsInNldERyb3Bkb3duSGVscGVyIiwiaW5pdGlhbENvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbmRleCIsImRlc2NyaXB0aW9uVGl0bGUiLCJzZXREZXNjcmlwdGlvblRpdGxlIiwicGxhY2Vob2xkZXJUaXRsZSIsInNldFBsYWNlaG9sZGVyVGl0bGUiLCJkZXNjcmlwdGlvbk1vZGVsIiwic2V0RGVzY3JpcHRpb25Nb2RlbCIsInBsYWNlaG9sZGVyTW9kZWwiLCJzZXRQbGFjZWhvbGRlck1vZGVsIiwiZGVzY3JpcHRpb25Qcm9kdWN0Iiwic2V0RGVzY3JpcHRpb25Qcm9kdWN0IiwidXNlRWZmZWN0IiwicGxhY2Vob2xkZXJQcm9kdWN0IiwiZGVzY3JpcHRpb25Qcm9tb3Rpb24iLCJwbGFjZWhvbGRlclByb21vdGlvbiIsImRlc2NyaXB0aW9uU3RyZW5ndGhzIiwicGxhY2Vob2xkZXJTdHJlbmd0aHMiLCJkZXNjcmlwdGlvbldlYWtuZXNzZXMiLCJwbGFjZWhvbGRlcldlYWtuZXNzZXMiLCJkZXNjcmlwdGlvbk9wcG9ydHVuaXRpZXMiLCJwbGFjZWhvbGRlck9wcG9ydHVuaXRpZXMiLCJkcm9wRG93bkVsZW1lbnQiLCJkYXRhRWxlbWVudCIsImdzYXAiLCJzZXQiLCJyb3RhdGlvbiIsImlzTW9iaWxlIiwiY29udGFpbmVyRWxlbWVudCIsImNvbXBldGl0b3JNYW5hZ2VyIiwiYWRkRXZlbnRMaXN0ZW5lciIsInRvIiwiaGVpZ2h0IiwibWFyaWduQm90dG9tIiwiZHVyYXRpb24iLCJlYXNlIiwiTGluZWFyIiwiZWFzZUluIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwiZWFzZU91dCIsIm9uU2VjdGlvbkRyb3Bkb3duIiwic2VjdGlvbkhlaWdodCIsIm9mZnNldEhlaWdodCIsImF1dG9BbHBoYSIsInRvcCIsImltYWdlIiwiZGlzcGxheSIsInpJbmRleCIsInRpdGxlIiwibG9jYXRpb24iLCJlbXBsb3llZXMiLCJyZXZlbnVlIiwiY29tcGFueURlc2NyaXB0aW9uIiwiYnVzaW5lc3NNb2RlbCIsInByb2R1Y3RPdmVydmlldyIsInByb21vdGlvblN0cmF0ZWd5IiwiY29tcGFueVN0cmVuZ3RocyIsImNvbXBhbnlXZWFrbmVzc2VzIiwib3Bwb3J0dW5pdGllcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsT0FBb0I7QUFBQTs7QUFBQSxNQUFqQkMsVUFBaUIsUUFBakJBLFVBQWlCO0FBQ2hEQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxpQkFBWixFQUErQkYsVUFBL0IsRUFEZ0QsQ0FFaEQ7O0FBRmdELGtCQUdKRyxzREFBUSxDQUFDLEtBQUQsQ0FISjtBQUFBLE1BR3pDQyxjQUh5QztBQUFBLE1BR3pCQyxpQkFIeUI7O0FBS2hELE1BQU1DLGdCQUFnQixHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0JSLFVBQVUsQ0FBQ1MsS0FBbkMsQ0FBekIsQ0FMZ0QsQ0FNaEQ7O0FBTmdELG1CQU9BTixzREFBUSxDQUFDLElBQUQsQ0FQUjtBQUFBLE1BT3pDTyxnQkFQeUM7QUFBQSxNQU92QkMsbUJBUHVCOztBQUFBLG1CQVFBUixzREFBUSxDQUFDLElBQUQsQ0FSUjtBQUFBLE1BUXpDUyxnQkFSeUM7QUFBQSxNQVF2QkMsbUJBUnVCOztBQUFBLG1CQVNBVixzREFBUSxDQUFDLElBQUQsQ0FUUjtBQUFBLE1BU3pDVyxnQkFUeUM7QUFBQSxNQVN2QkMsbUJBVHVCOztBQUFBLG1CQVVBWixzREFB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QUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXhERixlQTRERTtBQUNFLGFBQUssRUFBRVQsVUFBVSxDQUFDa0UsaUJBRHBCO0FBRUUsVUFBRSxpQ0FBMEJsRSxVQUFVLENBQUNTLEtBQXJDLENBRko7QUFHRSxpQkFBUyxFQUFDLDBHQUhaO0FBSUUsbUJBQVcsRUFBQztBQUpkO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUE1REYsZUFtRUU7QUFBSyxVQUFFLG9DQUE2QlQsVUFBVSxDQUFDUyxLQUF4QyxDQUFQO0FBQXdELGlCQUFTLEVBQUMsc0NBQWxFO0FBQUEsZ0NBQ0U7QUFBSyxhQUFHLEVBQUMsaUNBQVQ7QUFBMkMsZ0JBQU0sRUFBRSxFQUFuRDtBQUF1RCxlQUFLLEVBQUU7QUFBOUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQUcsbUJBQVMsRUFBQyx1QkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFuRUYsZUF1RUU7QUFDRSxhQUFLLEVBQUVULFVBQVUsQ0FBQ21FLGFBRHBCO0FBRUUsVUFBRSxvQ0FBNkJuRSxVQUFVLENBQUNTLEtBQXhDLENBRko7QUFHRSxpQkFBUyxFQUFDLDBHQUhaO0FBSUUsbUJBQVcsRUFBQztBQUpkO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF2RUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBdEZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBd0tELENBN1BEOztHQUFNVixxQjs7S0FBQUEscUI7QUErUFNBLG9GQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Rhc2hib2FyZC9wcm9qZWN0cy9bcHJvamVjdF0vY29tcGV0aXRvcnMvW2lkXS4wOGIwMjY0Yjc5Yjg3YzczZTMyYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgaXNNb2JpbGUgfSBmcm9tICdyZWFjdC1kZXZpY2UtZGV0ZWN0JztcclxuaW1wb3J0IGdzYXAsIHsgTGluZWFyIH0gZnJvbSAnZ3NhcCc7XHJcblxyXG5jb25zdCBVbmlxdWVDb21wZXRpdG9yc1BhZ2UgPSAoeyBjb21wZXRpdG9yIH0pID0+IHtcclxuICBjb25zb2xlLmxvZygnQ29tcGV0aXRvciAtLT4gJywgY29tcGV0aXRvcik7XHJcbiAgLy8gICBEcm9wZG93blxyXG4gIGNvbnN0IFtkcm9wZG93bkhlbHBlciwgc2V0RHJvcGRvd25IZWxwZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBpbml0aWFsQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29tcGV0aXRvci5pbmRleCk7XHJcbiAgLy8gRWxlbWVudFxyXG4gIGNvbnN0IFtkZXNjcmlwdGlvblRpdGxlLCBzZXREZXNjcmlwdGlvblRpdGxlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtwbGFjZWhvbGRlclRpdGxlLCBzZXRQbGFjZWhvbGRlclRpdGxlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtkZXNjcmlwdGlvbk1vZGVsLCBzZXREZXNjcmlwdGlvbk1vZGVsXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtwbGFjZWhvbGRlck1vZGVsLCBzZXRQbGFjZWhvbGRlck1vZGVsXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtkZXNjcmlwdGlvblByb2R1Y3QsIHNldERlc2NyaXB0aW9uUHJvZHVjdF0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZGVzY3JpcHRpb25UaXRsZSR7Y29tcGV0aXRvci5pbmRleH1gKTtcclxuICAgIHNldERlc2NyaXB0aW9uVGl0bGUoZGVzY3JpcHRpb25UaXRsZSk7XHJcbiAgICBjb25zdCBwbGFjZWhvbGRlclRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHBsYWNlaG9sZGVyVGl0bGUke2NvbXBldGl0b3IuaW5kZXh9YCk7XHJcbiAgICBjb25zdCBkZXNjcmlwdGlvbk1vZGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGRlc2NyaXB0aW9uTW9kZWwke2NvbXBldGl0b3IuaW5kZXh9YCk7XHJcbiAgICBjb25zdCBwbGFjZWhvbGRlck1vZGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHBsYWNlaG9sZGVyTW9kZWwke2NvbXBldGl0b3IuaW5kZXh9YCk7XHJcbiAgICBjb25zdCBkZXNjcmlwdGlvblByb2R1Y3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZGVzY3JpcHRpb25Qcm9kdWN0JHtjb21wZXRpdG9yLmluZGV4fWApO1xyXG4gICAgY29uc3QgcGxhY2Vob2xkZXJQcm9kdWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHBsYWNlaG9sZGVyUHJvZHVjdCR7Y29tcGV0aXRvci5pbmRleH1gKTtcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uUHJvbW90aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGRlc2NyaXB0aW9uUHJvbW90aW9uJHtjb21wZXRpdG9yLmluZGV4fWApO1xyXG4gICAgY29uc3QgcGxhY2Vob2xkZXJQcm9tb3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcGxhY2Vob2xkZXJQcm9tb3Rpb24ke2NvbXBldGl0b3IuaW5kZXh9YCk7XHJcbiAgICBjb25zdCBkZXNjcmlwdGlvblN0cmVuZ3RocyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBkZXNjcmlwdGlvblN0cmVuZ3RocyR7Y29tcGV0aXRvci5pbmRleH1gKTtcclxuICAgIGNvbnN0IHBsYWNlaG9sZGVyU3RyZW5ndGhzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHBsYWNlaG9sZGVyU3RyZW5ndGhzJHtjb21wZXRpdG9yLmluZGV4fWApO1xyXG4gICAgY29uc3QgZGVzY3JpcHRpb25XZWFrbmVzc2VzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGRlc2NyaXB0aW9uV2Vha25lc3NlcyR7Y29tcGV0aXRvci5pbmRleH1gKTtcclxuICAgIGNvbnN0IHBsYWNlaG9sZGVyV2Vha25lc3NlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwbGFjZWhvbGRlcldlYWtuZXNzZXMke2NvbXBldGl0b3IuaW5kZXh9YCk7XHJcbiAgICBjb25zdCBkZXNjcmlwdGlvbk9wcG9ydHVuaXRpZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZGVzY3JpcHRpb25PcHBvcnR1bml0aWVzJHtjb21wZXRpdG9yLmluZGV4fWApO1xyXG4gICAgY29uc3QgcGxhY2Vob2xkZXJPcHBvcnR1bml0aWVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHBsYWNlaG9sZGVyT3Bwb3J0dW5pdGllcyR7Y29tcGV0aXRvci5pbmRleH1gKTtcclxuICB9KTtcclxuICAvLyBFbGVtZW50c1xyXG4gIGNvbnNvbGUubG9nKGRlc2NyaXB0aW9uVGl0bGUpO1xyXG5cclxuICBjb25zdCBkcm9wRG93bkVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZHJvcGRvd24ke2NvbXBldGl0b3IuaW5kZXh9YCk7XHJcbiAgY29uc3QgZGF0YUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZGF0YSR7Y29tcGV0aXRvci5pbmRleH1gKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdzYXAuc2V0KGRyb3BEb3duRWxlbWVudCwgeyByb3RhdGlvbjogJy05MF9jdycgfSk7XHJcbiAgICBpZiAoIWlzTW9iaWxlKSB7XHJcbiAgICAgIGNvbnN0IGNvbnRhaW5lckVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgY29udGFpbmVyJHtjb21wZXRpdG9yLmluZGV4fWApO1xyXG4gICAgICBjb25zdCBjb21wZXRpdG9yTWFuYWdlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBtYW5hZ2VyJHtjb21wZXRpdG9yLmluZGV4fWApO1xyXG4gICAgICBjb250YWluZXJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoKSA9PiB7XHJcbiAgICAgICAgZ3NhcC50byhjb21wZXRpdG9yTWFuYWdlciwgeyBoZWlnaHQ6IDE4LCBtYXJpZ25Cb3R0b206IDE2LCBkdXJhdGlvbjogMC41LCBlYXNlOiBMaW5lYXIuZWFzZUluIH0pO1xyXG4gICAgICAgIGdzYXAudG8oaW5pdGlhbENvbnRhaW5lciwgeyBtYXJnaW5Ub3A6IDE2LCBkdXJhdGlvbjogMC41LCBlYXNlOiBMaW5lYXIuZWFzZUluIH0pO1xyXG4gICAgICB9KTtcclxuICAgICAgY29udGFpbmVyRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xyXG4gICAgICAgIGdzYXAudG8oY29tcGV0aXRvck1hbmFnZXIsIHsgaGVpZ2h0OiAwLCBtYXJnaW5Cb3R0b206IDAsIGR1cmF0aW9uOiAwLjUsIGVhc2U6IExpbmVhci5lYXNlT3V0IH0pO1xyXG4gICAgICAgIGdzYXAudG8oaW5pdGlhbENvbnRhaW5lciwgeyBtYXJnaW5Ub3A6IDAsIGR1cmF0aW9uOiAwLjUsIGVhc2U6IExpbmVhci5lYXNlSW4gfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sIFtkcm9wRG93bkVsZW1lbnRdKTtcclxuXHJcbiAgY29uc3Qgb25TZWN0aW9uRHJvcGRvd24gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBzZWN0aW9uSGVpZ2h0ID1cclxuICAgICAgZGVzY3JpcHRpb25UaXRsZS5vZmZzZXRIZWlnaHQgK1xyXG4gICAgICBwbGFjZWhvbGRlclRpdGxlLm9mZnNldEhlaWdodCArXHJcbiAgICAgIGRlc2NyaXB0aW9uTW9kZWwub2Zmc2V0SGVpZ2h0ICtcclxuICAgICAgcGxhY2Vob2xkZXJNb2RlbC5vZmZzZXRIZWlnaHQgK1xyXG4gICAgICAyNCArXHJcbiAgICAgIGRlc2NyaXB0aW9uUHJvZHVjdC5vZmZzZXRIZWlnaHQgK1xyXG4gICAgICBwbGFjZWhvbGRlclByb2R1Y3Qub2Zmc2V0SGVpZ2h0ICtcclxuICAgICAgMjQgK1xyXG4gICAgICBkZXNjcmlwdGlvblByb21vdGlvbi5vZmZzZXRIZWlnaHQgK1xyXG4gICAgICBwbGFjZWhvbGRlclByb21vdGlvbi5vZmZzZXRIZWlnaHQgK1xyXG4gICAgICAyNCArXHJcbiAgICAgIGRlc2NyaXB0aW9uU3RyZW5ndGhzLm9mZnNldEhlaWdodCArXHJcbiAgICAgIHBsYWNlaG9sZGVyU3RyZW5ndGhzLm9mZnNldEhlaWdodCArXHJcbiAgICAgIDI0ICtcclxuICAgICAgZGVzY3JpcHRpb25XZWFrbmVzc2VzLm9mZnNldEhlaWdodCArXHJcbiAgICAgIHBsYWNlaG9sZGVyV2Vha25lc3Nlcy5vZmZzZXRIZWlnaHQgK1xyXG4gICAgICAyNCArXHJcbiAgICAgIGRlc2NyaXB0aW9uT3Bwb3J0dW5pdGllcy5vZmZzZXRIZWlnaHQgK1xyXG4gICAgICBwbGFjZWhvbGRlck9wcG9ydHVuaXRpZXMub2Zmc2V0SGVpZ2h0ICtcclxuICAgICAgMjQ7XHJcbiAgICBpZiAoIWRyb3Bkb3duSGVscGVyKSB7XHJcbiAgICAgIGdzYXAudG8oZGF0YUVsZW1lbnQsIHsgaGVpZ2h0OiBzZWN0aW9uSGVpZ2h0LCBtYXJnaW5Ub3A6IDMyLCBtYXJnaW5Cb3R0b206IDExMiwgYXV0b0FscGhhOiAxLCBkdXJhdGlvbjogMSwgZWFzZTogTGluZWFyIH0pO1xyXG4gICAgICBnc2FwLnRvKGRyb3BEb3duRWxlbWVudCwgeyByb3RhdGlvbjogJzBfY3cnLCBkdXJhdGlvbjogMSwgZWFzZTogTGluZWFyIH0pO1xyXG4gICAgICBzZXREcm9wZG93bkhlbHBlcih0cnVlKTtcclxuICAgIH0gZWxzZSBpZiAoZHJvcGRvd25IZWxwZXIpIHtcclxuICAgICAgZ3NhcC50byhkYXRhRWxlbWVudCwgeyBoZWlnaHQ6IDAsIG1hcmdpblRvcDogMCwgbWFyZ2luQm90dG9tOiAwLCBhdXRvQWxwaGE6IDAsIGR1cmF0aW9uOiAxLCBlYXNlOiBMaW5lYXIgfSk7XHJcbiAgICAgIGdzYXAudG8oZHJvcERvd25FbGVtZW50LCB7IHJvdGF0aW9uOiAnLTkwX2NjdycsIGR1cmF0aW9uOiAxLCBlYXNlOiBMaW5lYXIgfSk7XHJcbiAgICAgIHNldERyb3Bkb3duSGVscGVyKGZhbHNlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBzdHlsZT17eyBoZWlnaHQ6ICdmaXQtY29udGVudCcgfX1cclxuICAgICAgaWQ9e2Bjb250YWluZXIke2NvbXBldGl0b3IuaW5kZXh9YH1cclxuICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWJhY2tncm91bmQgcm91bmRlZC0yeGwgcC00IHNzbUNvbnRhaW5lcjpwLTYgc2hhZG93LW1kIG92ZXJmbG93LWhpZGRlbiBtdC04IHNtQ29udGFpbmVyOm10LThcIlxyXG4gICAgPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiBgJHtpc01vYmlsZSA/IDQwIDogMH1gLCB0b3A6IGAke2lzTW9iaWxlID8gJy02cHgnIDogJy02cHgnfWAgfX1cclxuICAgICAgICBpZD17YG1hbmFnZXIke2NvbXBldGl0b3IuaW5kZXh9YH1cclxuICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiByZWxhdGl2ZVwiXHJcbiAgICAgID5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAvLyAgIHN0eWxlPXt7IHRyYW5zZm9ybTogJ3JvdGF0ZSgtOTBkZWcpJyB9fVxyXG4gICAgICAgICAgb25DbGljaz17b25TZWN0aW9uRHJvcGRvd259XHJcbiAgICAgICAgICBpZD17YGRyb3Bkb3duJHtjb21wZXRpdG9yLmluZGV4fWB9XHJcbiAgICAgICAgICBzcmM9XCIvY29tcGV0aXRvcnMvZHJvcGRvd24uc3ZnXCJcclxuICAgICAgICAgIGhlaWdodD17MTh9XHJcbiAgICAgICAgICB3aWR0aD17MTh9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cclxuICAgICAgICAgIHsvKiA8aW1nIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyIG1yLTJcIiBzcmM9XCIvY29tcGV0aXRvcnMvZHJhZy5zdmdcIiBoZWlnaHQ9ezE4fSB3aWR0aD17MTh9IC8+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gb25Db21wZXRpdG9yUmVtb3ZlKGRhdGEuY29tcGV0aXRvci5pbmRleCl9XHJcbiAgICAgICAgICBzcmM9XCIvY29tcGV0aXRvcnMvcmVtb3ZlLnN2Z1wiXHJcbiAgICAgICAgICBoZWlnaHQ9ezE4fVxyXG4gICAgICAgICAgd2lkdGg9ezE4fVxyXG4gICAgICAgIC8+ICovfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGlkPXtjb21wZXRpdG9yLmluZGV4fVxyXG4gICAgICAgIGNsYXNzTmFtZT1cImZsZXggZ2FwLTYgZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHNtQ29udGFpbmVyOmdhcC0wIHNtQ29udGFpbmVyOmdyaWQgc21Db250YWluZXI6Z3JpZC1jb2xzLTEyZnJcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbUNvbnRhaW5lcjpjb2wtc3RhcnQtMSBzbUNvbnRhaW5lcjpjb2wtZW5kLTQganVzdGlmeS1zZWxmLWNlbnRlciBmbGV4IGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICB7Y29tcGV0aXRvci5pbWFnZSAhPT0gJycgPyAoXHJcbiAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgIGh0bWxGb3I9e2B1cGxvYWQtaW1hZ2Uke2NvbXBldGl0b3IuaW5kZXh9YH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LTIwIGgtMjAgY3Vyc29yLXBvaW50ZXIgcm91bmRlZC1mdWxsIGJnLXdoaXRlIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtjb21wZXRpdG9yLmltYWdlfSBoZWlnaHQ9ezU1fSB3aWR0aD17NTV9IC8+XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgaHRtbEZvcj17YHVwbG9hZC1pbWFnZSR7Y29tcGV0aXRvci5pbmRleH1gfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0yMCBoLTIwIGN1cnNvci1wb2ludGVyIHJvdW5kZWQtZnVsbCBiZy1wcmltYXJ5IGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9jb21wZXRpdG9ycy9lbXB0eS1pbWFnZS5zdmdcIiBoZWlnaHQ9ezY1fSB3aWR0aD17NjV9IC8+XHJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgaWQ9e2B1cGxvYWQtaW1hZ2Uke2NvbXBldGl0b3IuaW5kZXh9YH0gc3R5bGU9e3sgZGlzcGxheTogJ25vbmUnLCB6SW5kZXg6IDEwIH19IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbUNvbnRhaW5lcjpjb2wtc3RhcnQtNSBzbUNvbnRhaW5lcjpjb2wtZW5kLTEzIGdyaWQgZ3JpZC1jb2xzLTJmciBncmlkLXJvd3MtMmZyIGp1c3RpZnktaXRlbXMtY2VudGVyIGl0ZW1zLWNlbnRlciBnYXAteC00IHNzbUNvbnRhaW5lcjpnYXAteC04IGdhcC15LTIgc3NtQ29udGFpbmVyOmdhcC15LTRcIj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHZhbHVlPXtjb21wZXRpdG9yLnRpdGxlfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQtMnhsIHctZnVsbCBweC0zIHB5LTIgdGV4dC1zbSB0ZXh0LXByaW1hcnlkYXJrIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJuYW1lXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdmFsdWU9e2NvbXBldGl0b3IubG9jYXRpb259XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZC0yeGwgdy1mdWxsIHB4LTMgcHktMiB0ZXh0LXNtIHRleHQtcHJpbWFyeWRhcmsgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImxvY2F0aW9uXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdmFsdWU9e2NvbXBldGl0b3IuZW1wbG95ZWVzfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQtMnhsIHctZnVsbCBweC0zIHB5LTIgdGV4dC1zbSB0ZXh0LXByaW1hcnlkYXJrIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlbXBsb3llZXNcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB2YWx1ZT17Y29tcGV0aXRvci5yZXZlbnVlfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQtMnhsIHctZnVsbCBweC0zIHB5LTIgdGV4dC1zbSB0ZXh0LXByaW1hcnlkYXJrIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJyZXZlbnVlXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgey8qIENvbXBhbnkgZGVzY3JpcHRpb24gKi99XHJcbiAgICAgIDxkaXYgaWQ9e2BkYXRhJHtjb21wZXRpdG9yLmluZGV4fWB9IGNsYXNzTmFtZT1cInctZnVsbCBoLTAgaW52aXNpYmxlXCI+XHJcbiAgICAgICAgPGRpdiBpZD17YGRlc2NyaXB0aW9uVGl0bGUke2NvbXBldGl0b3IuaW5kZXh9YH0gY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCIvY29tcGV0aXRvcnMvZGVzY3JpcHRpb24uc3ZnXCIgaGVpZ2h0PXsyMn0gd2lkdGg9ezIyfSAvPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5ZGFyayBtbC0yXCI+Q29tcGFueSBkZXNjcmlwdGlvbjwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgIHZhbHVlPXtjb21wZXRpdG9yLmNvbXBhbnlEZXNjcmlwdGlvbn1cclxuICAgICAgICAgIGlkPXtgcGxhY2Vob2xkZXJUaXRsZSR7Y29tcGV0aXRvci5pbmRleH1gfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIHJvdW5kZWQtMnhsIG10LTIgcC0yIHRleHQtcHJpbWFyeWRhcmsgdGV4dC1zbSBweC00IHB5LTMgaC0yOCBtYXgtaC0yOCBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJEZXNjcmliZSB0aGUgbWFpbiBhc3N1bXB0aW9uIG9mIGFuYWx5emVkIGNvbXBhbnkuXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIHsvKiBUaXRsZSBlbmQgKi99XHJcbiAgICAgICAgPGRpdiBpZD17YGRlc2NyaXB0aW9uTW9kZWwke2NvbXBldGl0b3IuaW5kZXh9YH0gY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlciBtdC02XCI+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cIi9jb21wZXRpdG9ycy9tb2RlbC5zdmdcIiBoZWlnaHQ9ezIyfSB3aWR0aD17MjJ9IC8+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnlkYXJrIG1sLTJcIj5CdXNpbmVzcyBtb2RlbDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgIHZhbHVlPXtjb21wZXRpdG9yLmJ1c2luZXNzTW9kZWx9XHJcbiAgICAgICAgICBpZD17YHBsYWNlaG9sZGVyTW9kZWwke2NvbXBldGl0b3IuaW5kZXh9YH1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy13aGl0ZSByb3VuZGVkLTJ4bCBtdC0yIHAtMiB0ZXh0LXByaW1hcnlkYXJrIHRleHQtc20gcHgtNCBweS0zIGgtMjggbWF4LWgtMjggZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSG93IGRvZXMgdGhlIGNvbXBhbnkgYnVzaW5lc3MgbW9kZWwgbG9vayBsaWtlP1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgICB7LyogTW9kZWwgZW5kICovfVxyXG4gICAgICAgIDxkaXYgaWQ9e2BkZXNjcmlwdGlvblByb2R1Y3Qke2NvbXBldGl0b3IuaW5kZXh9YH0gY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlciBtdC02XCI+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cIi9jb21wZXRpdG9ycy9wcm9kdWN0MS5zdmdcIiBoZWlnaHQ9ezIyfSB3aWR0aD17MjJ9IC8+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnlkYXJrIG1sLTJcIj5Qcm9kdWN0IG92ZXJ2aWV3PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgdmFsdWU9e2NvbXBldGl0b3IucHJvZHVjdE92ZXJ2aWV3fVxyXG4gICAgICAgICAgaWQ9e2BwbGFjZWhvbGRlclByb2R1Y3Qke2NvbXBldGl0b3IuaW5kZXh9YH1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy13aGl0ZSByb3VuZGVkLTJ4bCBtdC0yIHAtMiB0ZXh0LXByaW1hcnlkYXJrIHRleHQtc20gcHgtNCBweS0zIGgtMjggbWF4LWgtMjggZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV2hhdCBpcyB0aGUgZnVsbCByYW5nZSBvZiBwcm9kdWN0cyBhbmQgc2VydmljZXMgdGhlIGNvbXBhbnkgb2ZmZXJzP1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgICB7LyogUHJvZHVjdCBlbmQgKi99XHJcbiAgICAgICAgPGRpdiBpZD17YGRlc2NyaXB0aW9uUHJvbW90aW9uJHtjb21wZXRpdG9yLmluZGV4fWB9IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXIgbXQtNlwiPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCIvY29tcGV0aXRvcnMvcHJvbW90aW9uLnN2Z1wiIGhlaWdodD17MjJ9IHdpZHRoPXsyMn0gLz5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeWRhcmsgbWwtMlwiPlByb21vdGlvbiBzdHJhdGVneTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgIHZhbHVlPXtjb21wZXRpdG9yLnByb21vdGlvblN0cmF0ZWd5fVxyXG4gICAgICAgICAgaWQ9e2BwbGFjZWhvbGRlclByb21vdGlvbiR7Y29tcGV0aXRvci5pbmRleH1gfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIHJvdW5kZWQtMnhsIG10LTIgcC0yIHRleHQtcHJpbWFyeWRhcmsgdGV4dC1zbSBweC00IHB5LTMgaC0yOCBtYXgtaC0yOCBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJXaGF0IGFyZSB0aGUgY29tcGFueSBtYXJrZXRpbmcgYW5kIHByb21vdGlvbmFsIHN0cmF0ZWdpZXM/XCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIHsvKiBQcm9tb3Rpb24gZW5kICovfVxyXG4gICAgICAgIDxkaXYgaWQ9e2BkZXNjcmlwdGlvblN0cmVuZ3RocyR7Y29tcGV0aXRvci5pbmRleH1gfSBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyIG10LTZcIj5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiL2NvbXBldGl0b3JzL3N0cmVuZ3Rocy5zdmdcIiBoZWlnaHQ9ezIyfSB3aWR0aD17MjJ9IC8+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnlkYXJrIG1sLTJcIj5Db21wYW55IHN0cmVuZ3RoczwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgIHZhbHVlPXtjb21wZXRpdG9yLmNvbXBhbnlTdHJlbmd0aHN9XHJcbiAgICAgICAgICBpZD17YHBsYWNlaG9sZGVyU3RyZW5ndGhzJHtjb21wZXRpdG9yLmluZGV4fWB9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgcm91bmRlZC0yeGwgbXQtMiBwLTIgdGV4dC1wcmltYXJ5ZGFyayB0ZXh0LXNtIHB4LTQgcHktMyBoLTI4IG1heC1oLTI4IGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIldoYXQgZG8geW91ciBjb21wZXRpdG9ycyBkbyByZWFsbHkgd2VsbCB0aGF0IGRpZmZlcmVudGlhdGVzIHRoZW0/XCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIHsvKiBTdHJlbmd0aHMgZW5kICovfVxyXG4gICAgICAgIDxkaXYgaWQ9e2BkZXNjcmlwdGlvbldlYWtuZXNzZXMke2NvbXBldGl0b3IuaW5kZXh9YH0gY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlciBtdC02XCI+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cIi9jb21wZXRpdG9ycy93ZWFrbmVzc2VzLnN2Z1wiIGhlaWdodD17MjJ9IHdpZHRoPXsyMn0gLz5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeWRhcmsgbWwtMlwiPkNvbXBhbnkgV2Vha25lc3NlczwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgIHZhbHVlPXtjb21wZXRpdG9yLmNvbXBhbnlXZWFrbmVzc2VzfVxyXG4gICAgICAgICAgaWQ9e2BwbGFjZWhvbGRlcldlYWtuZXNzZXMke2NvbXBldGl0b3IuaW5kZXh9YH1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy13aGl0ZSByb3VuZGVkLTJ4bCBtdC0yIHAtMiB0ZXh0LXByaW1hcnlkYXJrIHRleHQtc20gcHgtNCBweS0zIGgtMjggbWF4LWgtMjggZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV2hhdCBkbyB0aGUgY29tcGFueSBjdXN0b21lcnMgY29tcGxhaW4gYWJvdXQgdGhlIG1vc3QsIGFuZCB3aGF0IHByb2R1Y3RzIGRvIHRoZXkgbGFjaz9cIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgey8qIFdlYWtuZXNzZXMgZW5kICovfVxyXG4gICAgICAgIDxkaXYgaWQ9e2BkZXNjcmlwdGlvbk9wcG9ydHVuaXRpZXMke2NvbXBldGl0b3IuaW5kZXh9YH0gY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlciBtdC02XCI+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cIi9jb21wZXRpdG9ycy9vcHBvcnR1bml0aWVzMi5zdmdcIiBoZWlnaHQ9ezIyfSB3aWR0aD17MjJ9IC8+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnlkYXJrIG1sLTJcIj5PcHBvcnR1bml0aWVzPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgdmFsdWU9e2NvbXBldGl0b3Iub3Bwb3J0dW5pdGllc31cclxuICAgICAgICAgIGlkPXtgcGxhY2Vob2xkZXJPcHBvcnR1bml0aWVzJHtjb21wZXRpdG9yLmluZGV4fWB9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgcm91bmRlZC0yeGwgbXQtMiBwLTIgdGV4dC1wcmltYXJ5ZGFyayB0ZXh0LXNtIHB4LTQgcHktMyBoLTI4IG1heC1oLTI4IGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIldoYXQgZGlzdGluZ3Vpc2ggeW91ciBzdGFydHVwIGZyb20gdGhpcyBwYXJ0aWN1bGFyIGNvbXBldGl0aXZlIGNvbXBhbnk/XCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIHsvKiBPcHBvcnR1bml0aWVzIGVuZCAqL31cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVW5pcXVlQ29tcGV0aXRvcnNQYWdlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9