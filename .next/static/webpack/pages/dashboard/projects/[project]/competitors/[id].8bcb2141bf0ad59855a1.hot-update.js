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

  var competitor = _ref.competitor,
      index = _ref.index;
  console.log('Competitor --> ', competitor); //   Dropdown

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      dropdownHelper = _useState[0],
      setDropdownHelper = _useState[1];

  var initialContainer = document.getElementById(index); // Elements

  var descriptionTitle = document.getElementById("descriptionTitle".concat(index));
  var placeholderTitle = document.getElementById("placeholderTitle".concat(index));
  var descriptionModel = document.getElementById("descriptionModel".concat(index));
  var placeholderModel = document.getElementById("placeholderModel".concat(index));
  var descriptionProduct = document.getElementById("descriptionProduct".concat(index));
  var placeholderProduct = document.getElementById("placeholderProduct".concat(index));
  var descriptionPromotion = document.getElementById("descriptionPromotion".concat(index));
  var placeholderPromotion = document.getElementById("placeholderPromotion".concat(index));
  var descriptionStrengths = document.getElementById("descriptionStrengths".concat(index));
  var placeholderStrengths = document.getElementById("placeholderStrengths".concat(index));
  var descriptionWeaknesses = document.getElementById("descriptionWeaknesses".concat(index));
  var placeholderWeaknesses = document.getElementById("placeholderWeaknesses".concat(index));
  var descriptionOpportunities = document.getElementById("descriptionOpportunities".concat(index));
  var placeholderOpportunities = document.getElementById("placeholderOpportunities".concat(index));
  var dropDownElement = document.getElementById("dropdown".concat(index));
  var dataElement = document.getElementById("data".concat(index));
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    gsap__WEBPACK_IMPORTED_MODULE_3__["default"].set(dropDownElement, {
      rotation: '-90_cw'
    });

    if (!react_device_detect__WEBPACK_IMPORTED_MODULE_2__["isMobile"]) {
      var containerElement = document.getElementById("container".concat(index));
      var competitorManager = document.getElementById("manager".concat(index));
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
    console.log(descriptionTitle);
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
    id: "container".concat(index),
    className: "w-full bg-background rounded-2xl p-4 ssmContainer:p-6 shadow-md overflow-hidden mt-8 smContainer:mt-8",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        height: "".concat(react_device_detect__WEBPACK_IMPORTED_MODULE_2__["isMobile"] ? 40 : 0),
        top: "".concat(react_device_detect__WEBPACK_IMPORTED_MODULE_2__["isMobile"] ? '-6px' : '-6px')
      },
      id: "manager".concat(index),
      className: "flex justify-between relative",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        className: "cursor-pointer" //   style={{ transform: 'rotate(-90deg)' }}
        ,
        onClick: onSectionDropdown,
        id: "dropdown".concat(index),
        src: "/competitors/dropdown.svg",
        height: 18,
        width: 18
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      id: index,
      className: "flex gap-6 flex-col justify-center items-center smContainer:gap-0 smContainer:grid smContainer:grid-cols-12fr",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "smContainer:col-start-1 smContainer:col-end-4 justify-self-center flex justify-start items-center",
        children: [competitor.image !== '' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "upload-image".concat(index),
          className: "relative w-20 h-20 cursor-pointer rounded-full bg-white flex justify-center items-center",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: competitor.image,
            height: 55,
            width: 55
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 13
        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "upload-image".concat(index),
            className: "w-20 h-20 cursor-pointer rounded-full bg-primary flex justify-center items-center",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "/competitors/empty-image.svg",
              height: 65,
              width: 65
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 129,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "file",
          id: "upload-image".concat(index),
          style: {
            display: 'none',
            zIndex: 10
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 115,
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
            lineNumber: 137,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            value: competitor.location,
            className: "bg-white rounded-2xl w-full px-3 py-2 text-sm text-primarydark focus:outline-none",
            placeholder: "location"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 144,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            value: competitor.employees,
            className: "bg-white rounded-2xl w-full px-3 py-2 text-sm text-primarydark focus:outline-none",
            placeholder: "employees"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            value: competitor.revenue,
            className: "bg-white rounded-2xl w-full px-3 py-2 text-sm text-primarydark focus:outline-none",
            placeholder: "revenue"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 158,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      id: "data".concat(index),
      className: "w-full h-0 invisible",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        id: "descriptionTitle".concat(index),
        className: "flex justify-start items-center",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "/competitors/description.svg",
          height: 22,
          width: 22
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "text-primarydark ml-2",
          children: "Company description"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
        value: competitor.companyDescription,
        id: "placeholderTitle".concat(index),
        className: "w-full bg-white rounded-2xl mt-2 p-2 text-primarydark text-sm px-4 py-3 h-28 max-h-28 focus:outline-none",
        placeholder: "Describe the main assumption of analyzed company."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        id: "descriptionModel".concat(index),
        className: "flex justify-start items-center mt-6",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "/competitors/model.svg",
          height: 22,
          width: 22
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "text-primarydark ml-2",
          children: "Business model"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
        value: competitor.businessModel,
        id: "placeholderModel".concat(index),
        className: "w-full bg-white rounded-2xl mt-2 p-2 text-primarydark text-sm px-4 py-3 h-28 max-h-28 focus:outline-none",
        placeholder: "How does the company business model look like?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        id: "descriptionProduct".concat(index),
        className: "flex justify-start items-center mt-6",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "/competitors/product1.svg",
          height: 22,
          width: 22
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 191,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "text-primarydark ml-2",
          children: "Product overview"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 192,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
        value: competitor.productOverview,
        id: "placeholderProduct".concat(index),
        className: "w-full bg-white rounded-2xl mt-2 p-2 text-primarydark text-sm px-4 py-3 h-28 max-h-28 focus:outline-none",
        placeholder: "What is the full range of products and services the company offers?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        id: "descriptionPromotion".concat(index),
        className: "flex justify-start items-center mt-6",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "/competitors/promotion.svg",
          height: 22,
          width: 22
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 202,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "text-primarydark ml-2",
          children: "Promotion strategy"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 203,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 201,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
        value: competitor.promotionStrategy,
        id: "placeholderPromotion".concat(index),
        className: "w-full bg-white rounded-2xl mt-2 p-2 text-primarydark text-sm px-4 py-3 h-28 max-h-28 focus:outline-none",
        placeholder: "What are the company marketing and promotional strategies?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        id: "descriptionStrengths".concat(index),
        className: "flex justify-start items-center mt-6",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "/competitors/strengths.svg",
          height: 22,
          width: 22
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 213,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "text-primarydark ml-2",
          children: "Company strengths"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 214,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 212,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
        value: competitor.companyStrengths,
        id: "placeholderStrengths".concat(index),
        className: "w-full bg-white rounded-2xl mt-2 p-2 text-primarydark text-sm px-4 py-3 h-28 max-h-28 focus:outline-none",
        placeholder: "What do your competitors do really well that differentiates them?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 216,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        id: "descriptionWeaknesses".concat(index),
        className: "flex justify-start items-center mt-6",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "/competitors/weaknesses.svg",
          height: 22,
          width: 22
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 224,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "text-primarydark ml-2",
          children: "Company Weaknesses"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 225,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 223,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
        value: competitor.companyWeaknesses,
        id: "placeholderWeaknesses".concat(index),
        className: "w-full bg-white rounded-2xl mt-2 p-2 text-primarydark text-sm px-4 py-3 h-28 max-h-28 focus:outline-none",
        placeholder: "What do the company customers complain about the most, and what products do they lack?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 227,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        id: "descriptionOpportunities".concat(index),
        className: "flex justify-start items-center mt-6",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "/competitors/opportunities2.svg",
          height: 22,
          width: 22
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 235,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "text-primarydark ml-2",
          children: "Opportunities"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 236,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 234,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
        value: competitor.opportunities,
        id: "placeholderOpportunities".concat(index),
        className: "w-full bg-white rounded-2xl mt-2 p-2 text-primarydark text-sm px-4 py-3 h-28 max-h-28 focus:outline-none",
        placeholder: "What distinguish your startup from this particular competitive company?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 238,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 81,
    columnNumber: 5
  }, _this);
};

_s(UniqueCompetitorsPage, "xB+wBLNelxd2Kr2xl8fIgfXzPP4=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kYXNoYm9hcmQvc3RhcnR1cC9wcm9qZWN0L2J1c2luZXNzLWFwcC9jb21wZXRpdG9ycy9VbmlxdWVFbGVtZW50LmpzIl0sIm5hbWVzIjpbIlVuaXF1ZUNvbXBldGl0b3JzUGFnZSIsImNvbXBldGl0b3IiLCJpbmRleCIsImNvbnNvbGUiLCJsb2ciLCJ1c2VTdGF0ZSIsImRyb3Bkb3duSGVscGVyIiwic2V0RHJvcGRvd25IZWxwZXIiLCJpbml0aWFsQ29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImRlc2NyaXB0aW9uVGl0bGUiLCJwbGFjZWhvbGRlclRpdGxlIiwiZGVzY3JpcHRpb25Nb2RlbCIsInBsYWNlaG9sZGVyTW9kZWwiLCJkZXNjcmlwdGlvblByb2R1Y3QiLCJwbGFjZWhvbGRlclByb2R1Y3QiLCJkZXNjcmlwdGlvblByb21vdGlvbiIsInBsYWNlaG9sZGVyUHJvbW90aW9uIiwiZGVzY3JpcHRpb25TdHJlbmd0aHMiLCJwbGFjZWhvbGRlclN0cmVuZ3RocyIsImRlc2NyaXB0aW9uV2Vha25lc3NlcyIsInBsYWNlaG9sZGVyV2Vha25lc3NlcyIsImRlc2NyaXB0aW9uT3Bwb3J0dW5pdGllcyIsInBsYWNlaG9sZGVyT3Bwb3J0dW5pdGllcyIsImRyb3BEb3duRWxlbWVudCIsImRhdGFFbGVtZW50IiwidXNlRWZmZWN0IiwiZ3NhcCIsInNldCIsInJvdGF0aW9uIiwiaXNNb2JpbGUiLCJjb250YWluZXJFbGVtZW50IiwiY29tcGV0aXRvck1hbmFnZXIiLCJhZGRFdmVudExpc3RlbmVyIiwidG8iLCJoZWlnaHQiLCJtYXJpZ25Cb3R0b20iLCJkdXJhdGlvbiIsImVhc2UiLCJMaW5lYXIiLCJlYXNlSW4iLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJlYXNlT3V0Iiwib25TZWN0aW9uRHJvcGRvd24iLCJzZWN0aW9uSGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwiYXV0b0FscGhhIiwidG9wIiwiaW1hZ2UiLCJkaXNwbGF5IiwiekluZGV4IiwidGl0bGUiLCJsb2NhdGlvbiIsImVtcGxveWVlcyIsInJldmVudWUiLCJjb21wYW55RGVzY3JpcHRpb24iLCJidXNpbmVzc01vZGVsIiwicHJvZHVjdE92ZXJ2aWV3IiwicHJvbW90aW9uU3RyYXRlZ3kiLCJjb21wYW55U3RyZW5ndGhzIiwiY29tcGFueVdlYWtuZXNzZXMiLCJvcHBvcnR1bml0aWVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixPQUEyQjtBQUFBOztBQUFBLE1BQXhCQyxVQUF3QixRQUF4QkEsVUFBd0I7QUFBQSxNQUFaQyxLQUFZLFFBQVpBLEtBQVk7QUFDdkRDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFaLEVBQStCSCxVQUEvQixFQUR1RCxDQUV2RDs7QUFGdUQsa0JBR1hJLHNEQUFRLENBQUMsS0FBRCxDQUhHO0FBQUEsTUFHaERDLGNBSGdEO0FBQUEsTUFHaENDLGlCQUhnQzs7QUFLdkQsTUFBTUMsZ0JBQWdCLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QlIsS0FBeEIsQ0FBekIsQ0FMdUQsQ0FNdkQ7O0FBQ0EsTUFBTVMsZ0JBQWdCLEdBQUdGLFFBQVEsQ0FBQ0MsY0FBVCwyQkFBMkNSLEtBQTNDLEVBQXpCO0FBQ0EsTUFBTVUsZ0JBQWdCLEdBQUdILFFBQVEsQ0FBQ0MsY0FBVCwyQkFBMkNSLEtBQTNDLEVBQXpCO0FBQ0EsTUFBTVcsZ0JBQWdCLEdBQUdKLFFBQVEsQ0FBQ0MsY0FBVCwyQkFBMkNSLEtBQTNDLEVBQXpCO0FBQ0EsTUFBTVksZ0JBQWdCLEdBQUdMLFFBQVEsQ0FBQ0MsY0FBVCwyQkFBMkNSLEtBQTNDLEVBQXpCO0FBQ0EsTUFBTWEsa0JBQWtCLEdBQUdOLFFBQVEsQ0FBQ0MsY0FBVCw2QkFBNkNSLEtBQTdDLEVBQTNCO0FBQ0EsTUFBTWMsa0JBQWtCLEdBQUdQLFFBQVEsQ0FBQ0MsY0FBVCw2QkFBNkNSLEtBQTdDLEVBQTNCO0FBQ0EsTUFBTWUsb0JBQW9CLEdBQUdSLFFBQVEsQ0FBQ0MsY0FBVCwrQkFBK0NSLEtBQS9DLEVBQTdCO0FBQ0EsTUFBTWdCLG9CQUFvQixHQUFHVCxRQUFRLENBQUNDLGNBQVQsK0JBQStDUixLQUEvQyxFQUE3QjtBQUNBLE1BQU1pQixvQkFBb0IsR0FBR1YsUUFBUSxDQUFDQyxjQUFULCtCQUErQ1IsS0FBL0MsRUFBN0I7QUFDQSxNQUFNa0Isb0JBQW9CLEdBQUdYLFFBQVEsQ0FBQ0MsY0FBVCwrQkFBK0NSLEtBQS9DLEVBQTdCO0FBQ0EsTUFBTW1CLHFCQUFxQixHQUFHWixRQUFRLENBQUNDLGNBQVQsZ0NBQWdEUixLQUFoRCxFQUE5QjtBQUNBLE1BQU1vQixxQkFBcUIsR0FBR2IsUUFBUSxDQUFDQyxjQUFULGdDQUFnRFIsS0FBaEQsRUFBOUI7QUFDQSxNQUFNcUIsd0JBQXdCLEdBQUdkLFFBQVEsQ0FBQ0MsY0FBVCxtQ0FBbURSLEtBQW5ELEVBQWpDO0FBQ0EsTUFBTXNCLHdCQUF3QixHQUFHZixRQUFRLENBQUNDLGNBQVQsbUNBQW1EUixLQUFuRCxFQUFqQztBQUVBLE1BQU11QixlQUFlLEdBQUdoQixRQUFRLENBQUNDLGNBQVQsbUJBQW1DUixLQUFuQyxFQUF4QjtBQUNBLE1BQU13QixXQUFXLEdBQUdqQixRQUFRLENBQUNDLGNBQVQsZUFBK0JSLEtBQS9CLEVBQXBCO0FBRUF5Qix5REFBUyxDQUFDLFlBQU07QUFDZEMsZ0RBQUksQ0FBQ0MsR0FBTCxDQUFTSixlQUFULEVBQTBCO0FBQUVLLGNBQVEsRUFBRTtBQUFaLEtBQTFCOztBQUNBLFFBQUksQ0FBQ0MsNERBQUwsRUFBZTtBQUNiLFVBQU1DLGdCQUFnQixHQUFHdkIsUUFBUSxDQUFDQyxjQUFULG9CQUFvQ1IsS0FBcEMsRUFBekI7QUFDQSxVQUFNK0IsaUJBQWlCLEdBQUd4QixRQUFRLENBQUNDLGNBQVQsa0JBQWtDUixLQUFsQyxFQUExQjtBQUNBOEIsc0JBQWdCLENBQUNFLGdCQUFqQixDQUFrQyxZQUFsQyxFQUFnRCxZQUFNO0FBQ3BETixvREFBSSxDQUFDTyxFQUFMLENBQVFGLGlCQUFSLEVBQTJCO0FBQUVHLGdCQUFNLEVBQUUsRUFBVjtBQUFjQyxzQkFBWSxFQUFFLEVBQTVCO0FBQWdDQyxrQkFBUSxFQUFFLEdBQTFDO0FBQStDQyxjQUFJLEVBQUVDLDJDQUFNLENBQUNDO0FBQTVELFNBQTNCO0FBQ0FiLG9EQUFJLENBQUNPLEVBQUwsQ0FBUTNCLGdCQUFSLEVBQTBCO0FBQUVrQyxtQkFBUyxFQUFFLEVBQWI7QUFBaUJKLGtCQUFRLEVBQUUsR0FBM0I7QUFBZ0NDLGNBQUksRUFBRUMsMkNBQU0sQ0FBQ0M7QUFBN0MsU0FBMUI7QUFDRCxPQUhEO0FBSUFULHNCQUFnQixDQUFDRSxnQkFBakIsQ0FBa0MsWUFBbEMsRUFBZ0QsWUFBTTtBQUNwRE4sb0RBQUksQ0FBQ08sRUFBTCxDQUFRRixpQkFBUixFQUEyQjtBQUFFRyxnQkFBTSxFQUFFLENBQVY7QUFBYU8sc0JBQVksRUFBRSxDQUEzQjtBQUE4Qkwsa0JBQVEsRUFBRSxHQUF4QztBQUE2Q0MsY0FBSSxFQUFFQywyQ0FBTSxDQUFDSTtBQUExRCxTQUEzQjtBQUNBaEIsb0RBQUksQ0FBQ08sRUFBTCxDQUFRM0IsZ0JBQVIsRUFBMEI7QUFBRWtDLG1CQUFTLEVBQUUsQ0FBYjtBQUFnQkosa0JBQVEsRUFBRSxHQUExQjtBQUErQkMsY0FBSSxFQUFFQywyQ0FBTSxDQUFDQztBQUE1QyxTQUExQjtBQUNELE9BSEQ7QUFJRDtBQUNGLEdBZFEsRUFjTixDQUFDaEIsZUFBRCxDQWRNLENBQVQ7O0FBZ0JBLE1BQU1vQixpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLEdBQU07QUFDOUIxQyxXQUFPLENBQUNDLEdBQVIsQ0FBWU8sZ0JBQVo7QUFDQSxRQUFNbUMsYUFBYSxHQUNqQm5DLGdCQUFnQixDQUFDb0MsWUFBakIsR0FDQW5DLGdCQUFnQixDQUFDbUMsWUFEakIsR0FFQWxDLGdCQUFnQixDQUFDa0MsWUFGakIsR0FHQWpDLGdCQUFnQixDQUFDaUMsWUFIakIsR0FJQSxFQUpBLEdBS0FoQyxrQkFBa0IsQ0FBQ2dDLFlBTG5CLEdBTUEvQixrQkFBa0IsQ0FBQytCLFlBTm5CLEdBT0EsRUFQQSxHQVFBOUIsb0JBQW9CLENBQUM4QixZQVJyQixHQVNBN0Isb0JBQW9CLENBQUM2QixZQVRyQixHQVVBLEVBVkEsR0FXQTVCLG9CQUFvQixDQUFDNEIsWUFYckIsR0FZQTNCLG9CQUFvQixDQUFDMkIsWUFackIsR0FhQSxFQWJBLEdBY0ExQixxQkFBcUIsQ0FBQzBCLFlBZHRCLEdBZUF6QixxQkFBcUIsQ0FBQ3lCLFlBZnRCLEdBZ0JBLEVBaEJBLEdBaUJBeEIsd0JBQXdCLENBQUN3QixZQWpCekIsR0FrQkF2Qix3QkFBd0IsQ0FBQ3VCLFlBbEJ6QixHQW1CQSxFQXBCRjs7QUFxQkEsUUFBSSxDQUFDekMsY0FBTCxFQUFxQjtBQUNuQnNCLGtEQUFJLENBQUNPLEVBQUwsQ0FBUVQsV0FBUixFQUFxQjtBQUFFVSxjQUFNLEVBQUVVLGFBQVY7QUFBeUJKLGlCQUFTLEVBQUUsRUFBcEM7QUFBd0NDLG9CQUFZLEVBQUUsR0FBdEQ7QUFBMkRLLGlCQUFTLEVBQUUsQ0FBdEU7QUFBeUVWLGdCQUFRLEVBQUUsQ0FBbkY7QUFBc0ZDLFlBQUksRUFBRUMsMkNBQU1BO0FBQWxHLE9BQXJCO0FBQ0FaLGtEQUFJLENBQUNPLEVBQUwsQ0FBUVYsZUFBUixFQUF5QjtBQUFFSyxnQkFBUSxFQUFFLE1BQVo7QUFBb0JRLGdCQUFRLEVBQUUsQ0FBOUI7QUFBaUNDLFlBQUksRUFBRUMsMkNBQU1BO0FBQTdDLE9BQXpCO0FBQ0FqQyx1QkFBaUIsQ0FBQyxJQUFELENBQWpCO0FBQ0QsS0FKRCxNQUlPLElBQUlELGNBQUosRUFBb0I7QUFDekJzQixrREFBSSxDQUFDTyxFQUFMLENBQVFULFdBQVIsRUFBcUI7QUFBRVUsY0FBTSxFQUFFLENBQVY7QUFBYU0saUJBQVMsRUFBRSxDQUF4QjtBQUEyQkMsb0JBQVksRUFBRSxDQUF6QztBQUE0Q0ssaUJBQVMsRUFBRSxDQUF2RDtBQUEwRFYsZ0JBQVEsRUFBRSxDQUFwRTtBQUF1RUMsWUFBSSxFQUFFQywyQ0FBTUE7QUFBbkYsT0FBckI7QUFDQVosa0RBQUksQ0FBQ08sRUFBTCxDQUFRVixlQUFSLEVBQXlCO0FBQUVLLGdCQUFRLEVBQUUsU0FBWjtBQUF1QlEsZ0JBQVEsRUFBRSxDQUFqQztBQUFvQ0MsWUFBSSxFQUFFQywyQ0FBTUE7QUFBaEQsT0FBekI7QUFDQWpDLHVCQUFpQixDQUFDLEtBQUQsQ0FBakI7QUFDRDtBQUNGLEdBaENEOztBQWtDQSxzQkFDRTtBQUNFLFNBQUssRUFBRTtBQUFFNkIsWUFBTSxFQUFFO0FBQVYsS0FEVDtBQUVFLE1BQUUscUJBQWNsQyxLQUFkLENBRko7QUFHRSxhQUFTLEVBQUMsdUdBSFo7QUFBQSw0QkFLRTtBQUNFLFdBQUssRUFBRTtBQUFFa0MsY0FBTSxZQUFLTCw0REFBUSxHQUFHLEVBQUgsR0FBUSxDQUFyQixDQUFSO0FBQWtDa0IsV0FBRyxZQUFLbEIsNERBQVEsR0FBRyxNQUFILEdBQVksTUFBekI7QUFBckMsT0FEVDtBQUVFLFFBQUUsbUJBQVk3QixLQUFaLENBRko7QUFHRSxlQUFTLEVBQUMsK0JBSFo7QUFBQSw4QkFLRTtBQUNFLGlCQUFTLEVBQUMsZ0JBRFosQ0FFRTtBQUZGO0FBR0UsZUFBTyxFQUFFMkMsaUJBSFg7QUFJRSxVQUFFLG9CQUFhM0MsS0FBYixDQUpKO0FBS0UsV0FBRyxFQUFDLDJCQUxOO0FBTUUsY0FBTSxFQUFFLEVBTlY7QUFPRSxhQUFLLEVBQUU7QUFQVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEYsZUFjRTtBQUFLLGlCQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBZEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEYsZUE4QkU7QUFDRSxRQUFFLEVBQUVBLEtBRE47QUFFRSxlQUFTLEVBQUMsK0dBRlo7QUFBQSw4QkFJRTtBQUFLLGlCQUFTLEVBQUMsbUdBQWY7QUFBQSxtQkFDR0QsVUFBVSxDQUFDaUQsS0FBWCxLQUFxQixFQUFyQixnQkFDQztBQUNFLGlCQUFPLHdCQUFpQmhELEtBQWpCLENBRFQ7QUFFRSxtQkFBUyxFQUFDLDBGQUZaO0FBQUEsaUNBSUU7QUFBSyxlQUFHLEVBQUVELFVBQVUsQ0FBQ2lELEtBQXJCO0FBQTRCLGtCQUFNLEVBQUUsRUFBcEM7QUFBd0MsaUJBQUssRUFBRTtBQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERCxnQkFRQztBQUFBLGlDQUNFO0FBQ0UsbUJBQU8sd0JBQWlCaEQsS0FBakIsQ0FEVDtBQUVFLHFCQUFTLEVBQUMsbUZBRlo7QUFBQSxtQ0FJRTtBQUFLLGlCQUFHLEVBQUMsOEJBQVQ7QUFBd0Msb0JBQU0sRUFBRSxFQUFoRDtBQUFvRCxtQkFBSyxFQUFFO0FBQTNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFUSixlQWtCRTtBQUFPLGNBQUksRUFBQyxNQUFaO0FBQW1CLFlBQUUsd0JBQWlCQSxLQUFqQixDQUFyQjtBQUErQyxlQUFLLEVBQUU7QUFBRWlELG1CQUFPLEVBQUUsTUFBWDtBQUFtQkMsa0JBQU0sRUFBRTtBQUEzQjtBQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWxCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKRixlQXdCRTtBQUFLLGlCQUFTLEVBQUMsNktBQWY7QUFBQSxnQ0FDRTtBQUFBLGlDQUNFO0FBQ0UsaUJBQUssRUFBRW5ELFVBQVUsQ0FBQ29ELEtBRHBCO0FBRUUscUJBQVMsRUFBQyxtRkFGWjtBQUdFLHVCQUFXLEVBQUM7QUFIZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQVFFO0FBQUEsaUNBQ0U7QUFDRSxpQkFBSyxFQUFFcEQsVUFBVSxDQUFDcUQsUUFEcEI7QUFFRSxxQkFBUyxFQUFDLG1GQUZaO0FBR0UsdUJBQVcsRUFBQztBQUhkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVJGLGVBZUU7QUFBQSxpQ0FDRTtBQUNFLGlCQUFLLEVBQUVyRCxVQUFVLENBQUNzRCxTQURwQjtBQUVFLHFCQUFTLEVBQUMsbUZBRlo7QUFHRSx1QkFBVyxFQUFDO0FBSGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBZkYsZUFzQkU7QUFBQSxpQ0FDRTtBQUNFLGlCQUFLLEVBQUV0RCxVQUFVLENBQUN1RCxPQURwQjtBQUVFLHFCQUFTLEVBQUMsbUZBRlo7QUFHRSx1QkFBVyxFQUFDO0FBSGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBdEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUE5QkYsZUFzRkU7QUFBSyxRQUFFLGdCQUFTdEQsS0FBVCxDQUFQO0FBQXlCLGVBQVMsRUFBQyxzQkFBbkM7QUFBQSw4QkFDRTtBQUFLLFVBQUUsNEJBQXFCQSxLQUFyQixDQUFQO0FBQXFDLGlCQUFTLEVBQUMsaUNBQS9DO0FBQUEsZ0NBQ0U7QUFBSyxhQUFHLEVBQUMsOEJBQVQ7QUFBd0MsZ0JBQU0sRUFBRSxFQUFoRDtBQUFvRCxlQUFLLEVBQUU7QUFBM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQUcsbUJBQVMsRUFBQyx1QkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUtFO0FBQ0UsYUFBSyxFQUFFRCxVQUFVLENBQUN3RCxrQkFEcEI7QUFFRSxVQUFFLDRCQUFxQnZELEtBQXJCLENBRko7QUFHRSxpQkFBUyxFQUFDLDBHQUhaO0FBSUUsbUJBQVcsRUFBQztBQUpkO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMRixlQVlFO0FBQUssVUFBRSw0QkFBcUJBLEtBQXJCLENBQVA7QUFBcUMsaUJBQVMsRUFBQyxzQ0FBL0M7QUFBQSxnQ0FDRTtBQUFLLGFBQUcsRUFBQyx3QkFBVDtBQUFrQyxnQkFBTSxFQUFFLEVBQTFDO0FBQThDLGVBQUssRUFBRTtBQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBRyxtQkFBUyxFQUFDLHVCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVpGLGVBZ0JFO0FBQ0UsYUFBSyxFQUFFRCxVQUFVLENBQUN5RCxhQURwQjtBQUVFLFVBQUUsNEJBQXFCeEQsS0FBckIsQ0FGSjtBQUdFLGlCQUFTLEVBQUMsMEdBSFo7QUFJRSxtQkFBVyxFQUFDO0FBSmQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWhCRixlQXVCRTtBQUFLLFVBQUUsOEJBQXVCQSxLQUF2QixDQUFQO0FBQXVDLGlCQUFTLEVBQUMsc0NBQWpEO0FBQUEsZ0NBQ0U7QUFBSyxhQUFHLEVBQUMsMkJBQVQ7QUFBcUMsZ0JBQU0sRUFBRSxFQUE3QztBQUFpRCxlQUFLLEVBQUU7QUFBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQUcsbUJBQVMsRUFBQyx1QkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF2QkYsZUEyQkU7QUFDRSxhQUFLLEVBQUVELFVBQVUsQ0FBQzBELGVBRHBCO0FBRUUsVUFBRSw4QkFBdUJ6RCxLQUF2QixDQUZKO0FBR0UsaUJBQVMsRUFBQywwR0FIWjtBQUlFLG1CQUFXLEVBQUM7QUFKZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBM0JGLGVBa0NFO0FBQUssVUFBRSxnQ0FBeUJBLEtBQXpCLENBQVA7QUFBeUMsaUJBQVMsRUFBQyxzQ0FBbkQ7QUFBQSxnQ0FDRTtBQUFLLGFBQUcsRUFBQyw0QkFBVDtBQUFzQyxnQkFBTSxFQUFFLEVBQTlDO0FBQWtELGVBQUssRUFBRTtBQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBRyxtQkFBUyxFQUFDLHVCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWxDRixlQXNDRTtBQUNFLGFBQUssRUFBRUQsVUFBVSxDQUFDMkQsaUJBRHBCO0FBRUUsVUFBRSxnQ0FBeUIxRCxLQUF6QixDQUZKO0FBR0UsaUJBQVMsRUFBQywwR0FIWjtBQUlFLG1CQUFXLEVBQUM7QUFKZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBdENGLGVBNkNFO0FBQUssVUFBRSxnQ0FBeUJBLEtBQXpCLENBQVA7QUFBeUMsaUJBQVMsRUFBQyxzQ0FBbkQ7QUFBQSxnQ0FDRTtBQUFLLGFBQUcsRUFBQyw0QkFBVDtBQUFzQyxnQkFBTSxFQUFFLEVBQTlDO0FBQWtELGVBQUssRUFBRTtBQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBRyxtQkFBUyxFQUFDLHVCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQTdDRixlQWlERTtBQUNFLGFBQUssRUFBRUQsVUFBVSxDQUFDNEQsZ0JBRHBCO0FBRUUsVUFBRSxnQ0FBeUIzRCxLQUF6QixDQUZKO0FBR0UsaUJBQVMsRUFBQywwR0FIWjtBQUlFLG1CQUFXLEVBQUM7QUFKZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBakRGLGVBd0RFO0FBQUssVUFBRSxpQ0FBMEJBLEtBQTFCLENBQVA7QUFBMEMsaUJBQVMsRUFBQyxzQ0FBcEQ7QUFBQSxnQ0FDRTtBQUFLLGFBQUcsRUFBQyw2QkFBVDtBQUF1QyxnQkFBTSxFQUFFLEVBQS9DO0FBQW1ELGVBQUssRUFBRTtBQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBRyxtQkFBUyxFQUFDLHVCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXhERixlQTRERTtBQUNFLGFBQUssRUFBRUQsVUFBVSxDQUFDNkQsaUJBRHBCO0FBRUUsVUFBRSxpQ0FBMEI1RCxLQUExQixDQUZKO0FBR0UsaUJBQVMsRUFBQywwR0FIWjtBQUlFLG1CQUFXLEVBQUM7QUFKZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBNURGLGVBbUVFO0FBQUssVUFBRSxvQ0FBNkJBLEtBQTdCLENBQVA7QUFBNkMsaUJBQVMsRUFBQyxzQ0FBdkQ7QUFBQSxnQ0FDRTtBQUFLLGFBQUcsRUFBQyxpQ0FBVDtBQUEyQyxnQkFBTSxFQUFFLEVBQW5EO0FBQXVELGVBQUssRUFBRTtBQUE5RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBRyxtQkFBUyxFQUFDLHVCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQW5FRixlQXVFRTtBQUNFLGFBQUssRUFBRUQsVUFBVSxDQUFDOEQsYUFEcEI7QUFFRSxVQUFFLG9DQUE2QjdELEtBQTdCLENBRko7QUFHRSxpQkFBUyxFQUFDLDBHQUhaO0FBSUUsbUJBQVcsRUFBQztBQUpkO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF2RUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBdEZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBd0tELENBblBEOztHQUFNRixxQjs7S0FBQUEscUI7QUFxUFNBLG9GQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Rhc2hib2FyZC9wcm9qZWN0cy9bcHJvamVjdF0vY29tcGV0aXRvcnMvW2lkXS44YmNiMjE0MWJmMGFkNTk4NTVhMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgaXNNb2JpbGUgfSBmcm9tICdyZWFjdC1kZXZpY2UtZGV0ZWN0JztcclxuaW1wb3J0IGdzYXAsIHsgTGluZWFyIH0gZnJvbSAnZ3NhcCc7XHJcblxyXG5jb25zdCBVbmlxdWVDb21wZXRpdG9yc1BhZ2UgPSAoeyBjb21wZXRpdG9yLCBpbmRleCB9KSA9PiB7XHJcbiAgY29uc29sZS5sb2coJ0NvbXBldGl0b3IgLS0+ICcsIGNvbXBldGl0b3IpO1xyXG4gIC8vICAgRHJvcGRvd25cclxuICBjb25zdCBbZHJvcGRvd25IZWxwZXIsIHNldERyb3Bkb3duSGVscGVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaW5pdGlhbENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGluZGV4KTtcclxuICAvLyBFbGVtZW50c1xyXG4gIGNvbnN0IGRlc2NyaXB0aW9uVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZGVzY3JpcHRpb25UaXRsZSR7aW5kZXh9YCk7XHJcbiAgY29uc3QgcGxhY2Vob2xkZXJUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwbGFjZWhvbGRlclRpdGxlJHtpbmRleH1gKTtcclxuICBjb25zdCBkZXNjcmlwdGlvbk1vZGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGRlc2NyaXB0aW9uTW9kZWwke2luZGV4fWApO1xyXG4gIGNvbnN0IHBsYWNlaG9sZGVyTW9kZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcGxhY2Vob2xkZXJNb2RlbCR7aW5kZXh9YCk7XHJcbiAgY29uc3QgZGVzY3JpcHRpb25Qcm9kdWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGRlc2NyaXB0aW9uUHJvZHVjdCR7aW5kZXh9YCk7XHJcbiAgY29uc3QgcGxhY2Vob2xkZXJQcm9kdWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHBsYWNlaG9sZGVyUHJvZHVjdCR7aW5kZXh9YCk7XHJcbiAgY29uc3QgZGVzY3JpcHRpb25Qcm9tb3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZGVzY3JpcHRpb25Qcm9tb3Rpb24ke2luZGV4fWApO1xyXG4gIGNvbnN0IHBsYWNlaG9sZGVyUHJvbW90aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHBsYWNlaG9sZGVyUHJvbW90aW9uJHtpbmRleH1gKTtcclxuICBjb25zdCBkZXNjcmlwdGlvblN0cmVuZ3RocyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBkZXNjcmlwdGlvblN0cmVuZ3RocyR7aW5kZXh9YCk7XHJcbiAgY29uc3QgcGxhY2Vob2xkZXJTdHJlbmd0aHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcGxhY2Vob2xkZXJTdHJlbmd0aHMke2luZGV4fWApO1xyXG4gIGNvbnN0IGRlc2NyaXB0aW9uV2Vha25lc3NlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBkZXNjcmlwdGlvbldlYWtuZXNzZXMke2luZGV4fWApO1xyXG4gIGNvbnN0IHBsYWNlaG9sZGVyV2Vha25lc3NlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwbGFjZWhvbGRlcldlYWtuZXNzZXMke2luZGV4fWApO1xyXG4gIGNvbnN0IGRlc2NyaXB0aW9uT3Bwb3J0dW5pdGllcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBkZXNjcmlwdGlvbk9wcG9ydHVuaXRpZXMke2luZGV4fWApO1xyXG4gIGNvbnN0IHBsYWNlaG9sZGVyT3Bwb3J0dW5pdGllcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwbGFjZWhvbGRlck9wcG9ydHVuaXRpZXMke2luZGV4fWApO1xyXG5cclxuICBjb25zdCBkcm9wRG93bkVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZHJvcGRvd24ke2luZGV4fWApO1xyXG4gIGNvbnN0IGRhdGFFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGRhdGEke2luZGV4fWApO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ3NhcC5zZXQoZHJvcERvd25FbGVtZW50LCB7IHJvdGF0aW9uOiAnLTkwX2N3JyB9KTtcclxuICAgIGlmICghaXNNb2JpbGUpIHtcclxuICAgICAgY29uc3QgY29udGFpbmVyRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjb250YWluZXIke2luZGV4fWApO1xyXG4gICAgICBjb25zdCBjb21wZXRpdG9yTWFuYWdlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBtYW5hZ2VyJHtpbmRleH1gKTtcclxuICAgICAgY29udGFpbmVyRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKCkgPT4ge1xyXG4gICAgICAgIGdzYXAudG8oY29tcGV0aXRvck1hbmFnZXIsIHsgaGVpZ2h0OiAxOCwgbWFyaWduQm90dG9tOiAxNiwgZHVyYXRpb246IDAuNSwgZWFzZTogTGluZWFyLmVhc2VJbiB9KTtcclxuICAgICAgICBnc2FwLnRvKGluaXRpYWxDb250YWluZXIsIHsgbWFyZ2luVG9wOiAxNiwgZHVyYXRpb246IDAuNSwgZWFzZTogTGluZWFyLmVhc2VJbiB9KTtcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnRhaW5lckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHtcclxuICAgICAgICBnc2FwLnRvKGNvbXBldGl0b3JNYW5hZ2VyLCB7IGhlaWdodDogMCwgbWFyZ2luQm90dG9tOiAwLCBkdXJhdGlvbjogMC41LCBlYXNlOiBMaW5lYXIuZWFzZU91dCB9KTtcclxuICAgICAgICBnc2FwLnRvKGluaXRpYWxDb250YWluZXIsIHsgbWFyZ2luVG9wOiAwLCBkdXJhdGlvbjogMC41LCBlYXNlOiBMaW5lYXIuZWFzZUluIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9LCBbZHJvcERvd25FbGVtZW50XSk7XHJcblxyXG4gIGNvbnN0IG9uU2VjdGlvbkRyb3Bkb3duID0gKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZGVzY3JpcHRpb25UaXRsZSk7XHJcbiAgICBjb25zdCBzZWN0aW9uSGVpZ2h0ID1cclxuICAgICAgZGVzY3JpcHRpb25UaXRsZS5vZmZzZXRIZWlnaHQgK1xyXG4gICAgICBwbGFjZWhvbGRlclRpdGxlLm9mZnNldEhlaWdodCArXHJcbiAgICAgIGRlc2NyaXB0aW9uTW9kZWwub2Zmc2V0SGVpZ2h0ICtcclxuICAgICAgcGxhY2Vob2xkZXJNb2RlbC5vZmZzZXRIZWlnaHQgK1xyXG4gICAgICAyNCArXHJcbiAgICAgIGRlc2NyaXB0aW9uUHJvZHVjdC5vZmZzZXRIZWlnaHQgK1xyXG4gICAgICBwbGFjZWhvbGRlclByb2R1Y3Qub2Zmc2V0SGVpZ2h0ICtcclxuICAgICAgMjQgK1xyXG4gICAgICBkZXNjcmlwdGlvblByb21vdGlvbi5vZmZzZXRIZWlnaHQgK1xyXG4gICAgICBwbGFjZWhvbGRlclByb21vdGlvbi5vZmZzZXRIZWlnaHQgK1xyXG4gICAgICAyNCArXHJcbiAgICAgIGRlc2NyaXB0aW9uU3RyZW5ndGhzLm9mZnNldEhlaWdodCArXHJcbiAgICAgIHBsYWNlaG9sZGVyU3RyZW5ndGhzLm9mZnNldEhlaWdodCArXHJcbiAgICAgIDI0ICtcclxuICAgICAgZGVzY3JpcHRpb25XZWFrbmVzc2VzLm9mZnNldEhlaWdodCArXHJcbiAgICAgIHBsYWNlaG9sZGVyV2Vha25lc3Nlcy5vZmZzZXRIZWlnaHQgK1xyXG4gICAgICAyNCArXHJcbiAgICAgIGRlc2NyaXB0aW9uT3Bwb3J0dW5pdGllcy5vZmZzZXRIZWlnaHQgK1xyXG4gICAgICBwbGFjZWhvbGRlck9wcG9ydHVuaXRpZXMub2Zmc2V0SGVpZ2h0ICtcclxuICAgICAgMjQ7XHJcbiAgICBpZiAoIWRyb3Bkb3duSGVscGVyKSB7XHJcbiAgICAgIGdzYXAudG8oZGF0YUVsZW1lbnQsIHsgaGVpZ2h0OiBzZWN0aW9uSGVpZ2h0LCBtYXJnaW5Ub3A6IDMyLCBtYXJnaW5Cb3R0b206IDExMiwgYXV0b0FscGhhOiAxLCBkdXJhdGlvbjogMSwgZWFzZTogTGluZWFyIH0pO1xyXG4gICAgICBnc2FwLnRvKGRyb3BEb3duRWxlbWVudCwgeyByb3RhdGlvbjogJzBfY3cnLCBkdXJhdGlvbjogMSwgZWFzZTogTGluZWFyIH0pO1xyXG4gICAgICBzZXREcm9wZG93bkhlbHBlcih0cnVlKTtcclxuICAgIH0gZWxzZSBpZiAoZHJvcGRvd25IZWxwZXIpIHtcclxuICAgICAgZ3NhcC50byhkYXRhRWxlbWVudCwgeyBoZWlnaHQ6IDAsIG1hcmdpblRvcDogMCwgbWFyZ2luQm90dG9tOiAwLCBhdXRvQWxwaGE6IDAsIGR1cmF0aW9uOiAxLCBlYXNlOiBMaW5lYXIgfSk7XHJcbiAgICAgIGdzYXAudG8oZHJvcERvd25FbGVtZW50LCB7IHJvdGF0aW9uOiAnLTkwX2NjdycsIGR1cmF0aW9uOiAxLCBlYXNlOiBMaW5lYXIgfSk7XHJcbiAgICAgIHNldERyb3Bkb3duSGVscGVyKGZhbHNlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBzdHlsZT17eyBoZWlnaHQ6ICdmaXQtY29udGVudCcgfX1cclxuICAgICAgaWQ9e2Bjb250YWluZXIke2luZGV4fWB9XHJcbiAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy1iYWNrZ3JvdW5kIHJvdW5kZWQtMnhsIHAtNCBzc21Db250YWluZXI6cC02IHNoYWRvdy1tZCBvdmVyZmxvdy1oaWRkZW4gbXQtOCBzbUNvbnRhaW5lcjptdC04XCJcclxuICAgID5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIHN0eWxlPXt7IGhlaWdodDogYCR7aXNNb2JpbGUgPyA0MCA6IDB9YCwgdG9wOiBgJHtpc01vYmlsZSA/ICctNnB4JyA6ICctNnB4J31gIH19XHJcbiAgICAgICAgaWQ9e2BtYW5hZ2VyJHtpbmRleH1gfVxyXG4gICAgICAgIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIHJlbGF0aXZlXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgIC8vICAgc3R5bGU9e3sgdHJhbnNmb3JtOiAncm90YXRlKC05MGRlZyknIH19XHJcbiAgICAgICAgICBvbkNsaWNrPXtvblNlY3Rpb25Ecm9wZG93bn1cclxuICAgICAgICAgIGlkPXtgZHJvcGRvd24ke2luZGV4fWB9XHJcbiAgICAgICAgICBzcmM9XCIvY29tcGV0aXRvcnMvZHJvcGRvd24uc3ZnXCJcclxuICAgICAgICAgIGhlaWdodD17MTh9XHJcbiAgICAgICAgICB3aWR0aD17MTh9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cclxuICAgICAgICAgIHsvKiA8aW1nIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyIG1yLTJcIiBzcmM9XCIvY29tcGV0aXRvcnMvZHJhZy5zdmdcIiBoZWlnaHQ9ezE4fSB3aWR0aD17MTh9IC8+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gb25Db21wZXRpdG9yUmVtb3ZlKGRhdGEuaW5kZXgpfVxyXG4gICAgICAgICAgc3JjPVwiL2NvbXBldGl0b3JzL3JlbW92ZS5zdmdcIlxyXG4gICAgICAgICAgaGVpZ2h0PXsxOH1cclxuICAgICAgICAgIHdpZHRoPXsxOH1cclxuICAgICAgICAvPiAqL31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBpZD17aW5kZXh9XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBnYXAtNiBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgc21Db250YWluZXI6Z2FwLTAgc21Db250YWluZXI6Z3JpZCBzbUNvbnRhaW5lcjpncmlkLWNvbHMtMTJmclwiXHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtQ29udGFpbmVyOmNvbC1zdGFydC0xIHNtQ29udGFpbmVyOmNvbC1lbmQtNCBqdXN0aWZ5LXNlbGYtY2VudGVyIGZsZXgganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgIHtjb21wZXRpdG9yLmltYWdlICE9PSAnJyA/IChcclxuICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgaHRtbEZvcj17YHVwbG9hZC1pbWFnZSR7aW5kZXh9YH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LTIwIGgtMjAgY3Vyc29yLXBvaW50ZXIgcm91bmRlZC1mdWxsIGJnLXdoaXRlIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtjb21wZXRpdG9yLmltYWdlfSBoZWlnaHQ9ezU1fSB3aWR0aD17NTV9IC8+XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgaHRtbEZvcj17YHVwbG9hZC1pbWFnZSR7aW5kZXh9YH1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMjAgaC0yMCBjdXJzb3ItcG9pbnRlciByb3VuZGVkLWZ1bGwgYmctcHJpbWFyeSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvY29tcGV0aXRvcnMvZW1wdHktaW1hZ2Uuc3ZnXCIgaGVpZ2h0PXs2NX0gd2lkdGg9ezY1fSAvPlxyXG4gICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIGlkPXtgdXBsb2FkLWltYWdlJHtpbmRleH1gfSBzdHlsZT17eyBkaXNwbGF5OiAnbm9uZScsIHpJbmRleDogMTAgfX0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtQ29udGFpbmVyOmNvbC1zdGFydC01IHNtQ29udGFpbmVyOmNvbC1lbmQtMTMgZ3JpZCBncmlkLWNvbHMtMmZyIGdyaWQtcm93cy0yZnIganVzdGlmeS1pdGVtcy1jZW50ZXIgaXRlbXMtY2VudGVyIGdhcC14LTQgc3NtQ29udGFpbmVyOmdhcC14LTggZ2FwLXktMiBzc21Db250YWluZXI6Z2FwLXktNFwiPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdmFsdWU9e2NvbXBldGl0b3IudGl0bGV9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZC0yeGwgdy1mdWxsIHB4LTMgcHktMiB0ZXh0LXNtIHRleHQtcHJpbWFyeWRhcmsgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIm5hbWVcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB2YWx1ZT17Y29tcGV0aXRvci5sb2NhdGlvbn1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLTJ4bCB3LWZ1bGwgcHgtMyBweS0yIHRleHQtc20gdGV4dC1wcmltYXJ5ZGFyayBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwibG9jYXRpb25cIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB2YWx1ZT17Y29tcGV0aXRvci5lbXBsb3llZXN9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZC0yeGwgdy1mdWxsIHB4LTMgcHktMiB0ZXh0LXNtIHRleHQtcHJpbWFyeWRhcmsgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImVtcGxveWVlc1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHZhbHVlPXtjb21wZXRpdG9yLnJldmVudWV9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZC0yeGwgdy1mdWxsIHB4LTMgcHktMiB0ZXh0LXNtIHRleHQtcHJpbWFyeWRhcmsgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInJldmVudWVcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7LyogQ29tcGFueSBkZXNjcmlwdGlvbiAqL31cclxuICAgICAgPGRpdiBpZD17YGRhdGEke2luZGV4fWB9IGNsYXNzTmFtZT1cInctZnVsbCBoLTAgaW52aXNpYmxlXCI+XHJcbiAgICAgICAgPGRpdiBpZD17YGRlc2NyaXB0aW9uVGl0bGUke2luZGV4fWB9IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiL2NvbXBldGl0b3JzL2Rlc2NyaXB0aW9uLnN2Z1wiIGhlaWdodD17MjJ9IHdpZHRoPXsyMn0gLz5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeWRhcmsgbWwtMlwiPkNvbXBhbnkgZGVzY3JpcHRpb248L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICB2YWx1ZT17Y29tcGV0aXRvci5jb21wYW55RGVzY3JpcHRpb259XHJcbiAgICAgICAgICBpZD17YHBsYWNlaG9sZGVyVGl0bGUke2luZGV4fWB9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgcm91bmRlZC0yeGwgbXQtMiBwLTIgdGV4dC1wcmltYXJ5ZGFyayB0ZXh0LXNtIHB4LTQgcHktMyBoLTI4IG1heC1oLTI4IGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRlc2NyaWJlIHRoZSBtYWluIGFzc3VtcHRpb24gb2YgYW5hbHl6ZWQgY29tcGFueS5cIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgey8qIFRpdGxlIGVuZCAqL31cclxuICAgICAgICA8ZGl2IGlkPXtgZGVzY3JpcHRpb25Nb2RlbCR7aW5kZXh9YH0gY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlciBtdC02XCI+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cIi9jb21wZXRpdG9ycy9tb2RlbC5zdmdcIiBoZWlnaHQ9ezIyfSB3aWR0aD17MjJ9IC8+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnlkYXJrIG1sLTJcIj5CdXNpbmVzcyBtb2RlbDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgIHZhbHVlPXtjb21wZXRpdG9yLmJ1c2luZXNzTW9kZWx9XHJcbiAgICAgICAgICBpZD17YHBsYWNlaG9sZGVyTW9kZWwke2luZGV4fWB9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgcm91bmRlZC0yeGwgbXQtMiBwLTIgdGV4dC1wcmltYXJ5ZGFyayB0ZXh0LXNtIHB4LTQgcHktMyBoLTI4IG1heC1oLTI4IGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkhvdyBkb2VzIHRoZSBjb21wYW55IGJ1c2luZXNzIG1vZGVsIGxvb2sgbGlrZT9cIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgey8qIE1vZGVsIGVuZCAqL31cclxuICAgICAgICA8ZGl2IGlkPXtgZGVzY3JpcHRpb25Qcm9kdWN0JHtpbmRleH1gfSBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyIG10LTZcIj5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiL2NvbXBldGl0b3JzL3Byb2R1Y3QxLnN2Z1wiIGhlaWdodD17MjJ9IHdpZHRoPXsyMn0gLz5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeWRhcmsgbWwtMlwiPlByb2R1Y3Qgb3ZlcnZpZXc8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICB2YWx1ZT17Y29tcGV0aXRvci5wcm9kdWN0T3ZlcnZpZXd9XHJcbiAgICAgICAgICBpZD17YHBsYWNlaG9sZGVyUHJvZHVjdCR7aW5kZXh9YH1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy13aGl0ZSByb3VuZGVkLTJ4bCBtdC0yIHAtMiB0ZXh0LXByaW1hcnlkYXJrIHRleHQtc20gcHgtNCBweS0zIGgtMjggbWF4LWgtMjggZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV2hhdCBpcyB0aGUgZnVsbCByYW5nZSBvZiBwcm9kdWN0cyBhbmQgc2VydmljZXMgdGhlIGNvbXBhbnkgb2ZmZXJzP1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgICB7LyogUHJvZHVjdCBlbmQgKi99XHJcbiAgICAgICAgPGRpdiBpZD17YGRlc2NyaXB0aW9uUHJvbW90aW9uJHtpbmRleH1gfSBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyIG10LTZcIj5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiL2NvbXBldGl0b3JzL3Byb21vdGlvbi5zdmdcIiBoZWlnaHQ9ezIyfSB3aWR0aD17MjJ9IC8+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnlkYXJrIG1sLTJcIj5Qcm9tb3Rpb24gc3RyYXRlZ3k8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICB2YWx1ZT17Y29tcGV0aXRvci5wcm9tb3Rpb25TdHJhdGVneX1cclxuICAgICAgICAgIGlkPXtgcGxhY2Vob2xkZXJQcm9tb3Rpb24ke2luZGV4fWB9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgcm91bmRlZC0yeGwgbXQtMiBwLTIgdGV4dC1wcmltYXJ5ZGFyayB0ZXh0LXNtIHB4LTQgcHktMyBoLTI4IG1heC1oLTI4IGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIldoYXQgYXJlIHRoZSBjb21wYW55IG1hcmtldGluZyBhbmQgcHJvbW90aW9uYWwgc3RyYXRlZ2llcz9cIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgey8qIFByb21vdGlvbiBlbmQgKi99XHJcbiAgICAgICAgPGRpdiBpZD17YGRlc2NyaXB0aW9uU3RyZW5ndGhzJHtpbmRleH1gfSBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyIG10LTZcIj5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiL2NvbXBldGl0b3JzL3N0cmVuZ3Rocy5zdmdcIiBoZWlnaHQ9ezIyfSB3aWR0aD17MjJ9IC8+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnlkYXJrIG1sLTJcIj5Db21wYW55IHN0cmVuZ3RoczwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgIHZhbHVlPXtjb21wZXRpdG9yLmNvbXBhbnlTdHJlbmd0aHN9XHJcbiAgICAgICAgICBpZD17YHBsYWNlaG9sZGVyU3RyZW5ndGhzJHtpbmRleH1gfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIHJvdW5kZWQtMnhsIG10LTIgcC0yIHRleHQtcHJpbWFyeWRhcmsgdGV4dC1zbSBweC00IHB5LTMgaC0yOCBtYXgtaC0yOCBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJXaGF0IGRvIHlvdXIgY29tcGV0aXRvcnMgZG8gcmVhbGx5IHdlbGwgdGhhdCBkaWZmZXJlbnRpYXRlcyB0aGVtP1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgICB7LyogU3RyZW5ndGhzIGVuZCAqL31cclxuICAgICAgICA8ZGl2IGlkPXtgZGVzY3JpcHRpb25XZWFrbmVzc2VzJHtpbmRleH1gfSBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyIG10LTZcIj5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiL2NvbXBldGl0b3JzL3dlYWtuZXNzZXMuc3ZnXCIgaGVpZ2h0PXsyMn0gd2lkdGg9ezIyfSAvPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5ZGFyayBtbC0yXCI+Q29tcGFueSBXZWFrbmVzc2VzPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgdmFsdWU9e2NvbXBldGl0b3IuY29tcGFueVdlYWtuZXNzZXN9XHJcbiAgICAgICAgICBpZD17YHBsYWNlaG9sZGVyV2Vha25lc3NlcyR7aW5kZXh9YH1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy13aGl0ZSByb3VuZGVkLTJ4bCBtdC0yIHAtMiB0ZXh0LXByaW1hcnlkYXJrIHRleHQtc20gcHgtNCBweS0zIGgtMjggbWF4LWgtMjggZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV2hhdCBkbyB0aGUgY29tcGFueSBjdXN0b21lcnMgY29tcGxhaW4gYWJvdXQgdGhlIG1vc3QsIGFuZCB3aGF0IHByb2R1Y3RzIGRvIHRoZXkgbGFjaz9cIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgey8qIFdlYWtuZXNzZXMgZW5kICovfVxyXG4gICAgICAgIDxkaXYgaWQ9e2BkZXNjcmlwdGlvbk9wcG9ydHVuaXRpZXMke2luZGV4fWB9IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXIgbXQtNlwiPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCIvY29tcGV0aXRvcnMvb3Bwb3J0dW5pdGllczIuc3ZnXCIgaGVpZ2h0PXsyMn0gd2lkdGg9ezIyfSAvPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5ZGFyayBtbC0yXCI+T3Bwb3J0dW5pdGllczwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgIHZhbHVlPXtjb21wZXRpdG9yLm9wcG9ydHVuaXRpZXN9XHJcbiAgICAgICAgICBpZD17YHBsYWNlaG9sZGVyT3Bwb3J0dW5pdGllcyR7aW5kZXh9YH1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy13aGl0ZSByb3VuZGVkLTJ4bCBtdC0yIHAtMiB0ZXh0LXByaW1hcnlkYXJrIHRleHQtc20gcHgtNCBweS0zIGgtMjggbWF4LWgtMjggZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV2hhdCBkaXN0aW5ndWlzaCB5b3VyIHN0YXJ0dXAgZnJvbSB0aGlzIHBhcnRpY3VsYXIgY29tcGV0aXRpdmUgY29tcGFueT9cIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgey8qIE9wcG9ydHVuaXRpZXMgZW5kICovfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVbmlxdWVDb21wZXRpdG9yc1BhZ2U7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=