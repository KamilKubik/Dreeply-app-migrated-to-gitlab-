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
  console.log(competitor); //   Dropdown

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
        lineNumber: 90,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 85,
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
            lineNumber: 120,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 116,
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
              lineNumber: 128,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 123,
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
          lineNumber: 132,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 114,
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
            lineNumber: 136,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            value: competitor.location,
            className: "bg-white rounded-2xl w-full px-3 py-2 text-sm text-primarydark focus:outline-none",
            placeholder: "location"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            value: competitor.employees,
            className: "bg-white rounded-2xl w-full px-3 py-2 text-sm text-primarydark focus:outline-none",
            placeholder: "employees"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 150,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            value: competitor.revenue,
            className: "bg-white rounded-2xl w-full px-3 py-2 text-sm text-primarydark focus:outline-none",
            placeholder: "revenue"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 157,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 110,
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
          lineNumber: 168,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "text-primarydark ml-2",
          children: "Company description"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
        value: competitor.companyDescription,
        id: "placeholderTitle".concat(index),
        className: "w-full bg-white rounded-2xl mt-2 p-2 text-primarydark text-sm px-4 py-3 h-28 max-h-28 focus:outline-none",
        placeholder: "Describe the main assumption of analyzed company."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 171,
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
          lineNumber: 179,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "text-primarydark ml-2",
          children: "Business model"
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
        value: competitor.businessModel,
        id: "placeholderModel".concat(index),
        className: "w-full bg-white rounded-2xl mt-2 p-2 text-primarydark text-sm px-4 py-3 h-28 max-h-28 focus:outline-none",
        placeholder: "How does the company business model look like?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 182,
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
          lineNumber: 190,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "text-primarydark ml-2",
          children: "Product overview"
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
        value: competitor.productOverview,
        id: "placeholderProduct".concat(index),
        className: "w-full bg-white rounded-2xl mt-2 p-2 text-primarydark text-sm px-4 py-3 h-28 max-h-28 focus:outline-none",
        placeholder: "What is the full range of products and services the company offers?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 193,
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
          lineNumber: 201,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "text-primarydark ml-2",
          children: "Promotion strategy"
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
        value: competitor.promotionStrategy,
        id: "placeholderPromotion".concat(index),
        className: "w-full bg-white rounded-2xl mt-2 p-2 text-primarydark text-sm px-4 py-3 h-28 max-h-28 focus:outline-none",
        placeholder: "What are the company marketing and promotional strategies?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 204,
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
          lineNumber: 212,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "text-primarydark ml-2",
          children: "Company strengths"
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
        value: competitor.companyStrengths,
        id: "placeholderStrengths".concat(index),
        className: "w-full bg-white rounded-2xl mt-2 p-2 text-primarydark text-sm px-4 py-3 h-28 max-h-28 focus:outline-none",
        placeholder: "What do your competitors do really well that differentiates them?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 215,
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
          lineNumber: 223,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "text-primarydark ml-2",
          children: "Company Weaknesses"
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
        value: competitor.companyWeaknesses,
        id: "placeholderWeaknesses".concat(index),
        className: "w-full bg-white rounded-2xl mt-2 p-2 text-primarydark text-sm px-4 py-3 h-28 max-h-28 focus:outline-none",
        placeholder: "What do the company customers complain about the most, and what products do they lack?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 226,
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
          lineNumber: 234,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "text-primarydark ml-2",
          children: "Opportunities"
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
        value: competitor.opportunities,
        id: "placeholderOpportunities".concat(index),
        className: "w-full bg-white rounded-2xl mt-2 p-2 text-primarydark text-sm px-4 py-3 h-28 max-h-28 focus:outline-none",
        placeholder: "What distinguish your startup from this particular competitive company?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 237,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 80,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kYXNoYm9hcmQvc3RhcnR1cC9wcm9qZWN0L2J1c2luZXNzLWFwcC9jb21wZXRpdG9ycy9VbmlxdWVFbGVtZW50LmpzIl0sIm5hbWVzIjpbIlVuaXF1ZUNvbXBldGl0b3JzUGFnZSIsImNvbXBldGl0b3IiLCJpbmRleCIsImNvbnNvbGUiLCJsb2ciLCJ1c2VTdGF0ZSIsImRyb3Bkb3duSGVscGVyIiwic2V0RHJvcGRvd25IZWxwZXIiLCJpbml0aWFsQ29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImRlc2NyaXB0aW9uVGl0bGUiLCJwbGFjZWhvbGRlclRpdGxlIiwiZGVzY3JpcHRpb25Nb2RlbCIsInBsYWNlaG9sZGVyTW9kZWwiLCJkZXNjcmlwdGlvblByb2R1Y3QiLCJwbGFjZWhvbGRlclByb2R1Y3QiLCJkZXNjcmlwdGlvblByb21vdGlvbiIsInBsYWNlaG9sZGVyUHJvbW90aW9uIiwiZGVzY3JpcHRpb25TdHJlbmd0aHMiLCJwbGFjZWhvbGRlclN0cmVuZ3RocyIsImRlc2NyaXB0aW9uV2Vha25lc3NlcyIsInBsYWNlaG9sZGVyV2Vha25lc3NlcyIsImRlc2NyaXB0aW9uT3Bwb3J0dW5pdGllcyIsInBsYWNlaG9sZGVyT3Bwb3J0dW5pdGllcyIsImRyb3BEb3duRWxlbWVudCIsImRhdGFFbGVtZW50IiwidXNlRWZmZWN0IiwiZ3NhcCIsInNldCIsInJvdGF0aW9uIiwiaXNNb2JpbGUiLCJjb250YWluZXJFbGVtZW50IiwiY29tcGV0aXRvck1hbmFnZXIiLCJhZGRFdmVudExpc3RlbmVyIiwidG8iLCJoZWlnaHQiLCJtYXJpZ25Cb3R0b20iLCJkdXJhdGlvbiIsImVhc2UiLCJMaW5lYXIiLCJlYXNlSW4iLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJlYXNlT3V0Iiwib25TZWN0aW9uRHJvcGRvd24iLCJzZWN0aW9uSGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwiYXV0b0FscGhhIiwidG9wIiwiaW1hZ2UiLCJkaXNwbGF5IiwiekluZGV4IiwidGl0bGUiLCJsb2NhdGlvbiIsImVtcGxveWVlcyIsInJldmVudWUiLCJjb21wYW55RGVzY3JpcHRpb24iLCJidXNpbmVzc01vZGVsIiwicHJvZHVjdE92ZXJ2aWV3IiwicHJvbW90aW9uU3RyYXRlZ3kiLCJjb21wYW55U3RyZW5ndGhzIiwiY29tcGFueVdlYWtuZXNzZXMiLCJvcHBvcnR1bml0aWVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixPQUEyQjtBQUFBOztBQUFBLE1BQXhCQyxVQUF3QixRQUF4QkEsVUFBd0I7QUFBQSxNQUFaQyxLQUFZLFFBQVpBLEtBQVk7QUFDdkRDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSCxVQUFaLEVBRHVELENBRXZEOztBQUZ1RCxrQkFHWEksc0RBQVEsQ0FBQyxLQUFELENBSEc7QUFBQSxNQUdoREMsY0FIZ0Q7QUFBQSxNQUdoQ0MsaUJBSGdDOztBQUt2RCxNQUFNQyxnQkFBZ0IsR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCUixLQUF4QixDQUF6QixDQUx1RCxDQU12RDs7QUFDQSxNQUFNUyxnQkFBZ0IsR0FBR0YsUUFBUSxDQUFDQyxjQUFULDJCQUEyQ1IsS0FBM0MsRUFBekI7QUFDQSxNQUFNVSxnQkFBZ0IsR0FBR0gsUUFBUSxDQUFDQyxjQUFULDJCQUEyQ1IsS0FBM0MsRUFBekI7QUFDQSxNQUFNVyxnQkFBZ0IsR0FBR0osUUFBUSxDQUFDQyxjQUFULDJCQUEyQ1IsS0FBM0MsRUFBekI7QUFDQSxNQUFNWSxnQkFBZ0IsR0FBR0wsUUFBUSxDQUFDQyxjQUFULDJCQUEyQ1IsS0FBM0MsRUFBekI7QUFDQSxNQUFNYSxrQkFBa0IsR0FBR04sUUFBUSxDQUFDQyxjQUFULDZCQUE2Q1IsS0FBN0MsRUFBM0I7QUFDQSxNQUFNYyxrQkFBa0IsR0FBR1AsUUFBUSxDQUFDQyxjQUFULDZC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Rko7QUFHRSxpQkFBUyxFQUFDLDBHQUhaO0FBSUUsbUJBQVcsRUFBQztBQUpkO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUE1REYsZUFtRUU7QUFBSyxVQUFFLG9DQUE2QkEsS0FBN0IsQ0FBUDtBQUE2QyxpQkFBUyxFQUFDLHNDQUF2RDtBQUFBLGdDQUNFO0FBQUssYUFBRyxFQUFDLGlDQUFUO0FBQTJDLGdCQUFNLEVBQUUsRUFBbkQ7QUFBdUQsZUFBSyxFQUFFO0FBQTlEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRTtBQUFHLG1CQUFTLEVBQUMsdUJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBbkVGLGVBdUVFO0FBQ0UsYUFBSyxFQUFFRCxVQUFVLENBQUM4RCxhQURwQjtBQUVFLFVBQUUsb0NBQTZCN0QsS0FBN0IsQ0FGSjtBQUdFLGlCQUFTLEVBQUMsMEdBSFo7QUFJRSxtQkFBVyxFQUFDO0FBSmQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXZFRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF0RkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF3S0QsQ0FsUEQ7O0dBQU1GLHFCOztLQUFBQSxxQjtBQW9QU0Esb0ZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGFzaGJvYXJkL3Byb2plY3RzL1twcm9qZWN0XS9jb21wZXRpdG9ycy9baWRdLjM3NmVlMDIwZDA4NDk4NWQyNjg5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBpc01vYmlsZSB9IGZyb20gJ3JlYWN0LWRldmljZS1kZXRlY3QnO1xyXG5pbXBvcnQgZ3NhcCwgeyBMaW5lYXIgfSBmcm9tICdnc2FwJztcclxuXHJcbmNvbnN0IFVuaXF1ZUNvbXBldGl0b3JzUGFnZSA9ICh7IGNvbXBldGl0b3IsIGluZGV4IH0pID0+IHtcclxuICBjb25zb2xlLmxvZyhjb21wZXRpdG9yKTtcclxuICAvLyAgIERyb3Bkb3duXHJcbiAgY29uc3QgW2Ryb3Bkb3duSGVscGVyLCBzZXREcm9wZG93bkhlbHBlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGluaXRpYWxDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpbmRleCk7XHJcbiAgLy8gRWxlbWVudHNcclxuICBjb25zdCBkZXNjcmlwdGlvblRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGRlc2NyaXB0aW9uVGl0bGUke2luZGV4fWApO1xyXG4gIGNvbnN0IHBsYWNlaG9sZGVyVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcGxhY2Vob2xkZXJUaXRsZSR7aW5kZXh9YCk7XHJcbiAgY29uc3QgZGVzY3JpcHRpb25Nb2RlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBkZXNjcmlwdGlvbk1vZGVsJHtpbmRleH1gKTtcclxuICBjb25zdCBwbGFjZWhvbGRlck1vZGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHBsYWNlaG9sZGVyTW9kZWwke2luZGV4fWApO1xyXG4gIGNvbnN0IGRlc2NyaXB0aW9uUHJvZHVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBkZXNjcmlwdGlvblByb2R1Y3Qke2luZGV4fWApO1xyXG4gIGNvbnN0IHBsYWNlaG9sZGVyUHJvZHVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwbGFjZWhvbGRlclByb2R1Y3Qke2luZGV4fWApO1xyXG4gIGNvbnN0IGRlc2NyaXB0aW9uUHJvbW90aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGRlc2NyaXB0aW9uUHJvbW90aW9uJHtpbmRleH1gKTtcclxuICBjb25zdCBwbGFjZWhvbGRlclByb21vdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwbGFjZWhvbGRlclByb21vdGlvbiR7aW5kZXh9YCk7XHJcbiAgY29uc3QgZGVzY3JpcHRpb25TdHJlbmd0aHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZGVzY3JpcHRpb25TdHJlbmd0aHMke2luZGV4fWApO1xyXG4gIGNvbnN0IHBsYWNlaG9sZGVyU3RyZW5ndGhzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHBsYWNlaG9sZGVyU3RyZW5ndGhzJHtpbmRleH1gKTtcclxuICBjb25zdCBkZXNjcmlwdGlvbldlYWtuZXNzZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZGVzY3JpcHRpb25XZWFrbmVzc2VzJHtpbmRleH1gKTtcclxuICBjb25zdCBwbGFjZWhvbGRlcldlYWtuZXNzZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcGxhY2Vob2xkZXJXZWFrbmVzc2VzJHtpbmRleH1gKTtcclxuICBjb25zdCBkZXNjcmlwdGlvbk9wcG9ydHVuaXRpZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZGVzY3JpcHRpb25PcHBvcnR1bml0aWVzJHtpbmRleH1gKTtcclxuICBjb25zdCBwbGFjZWhvbGRlck9wcG9ydHVuaXRpZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcGxhY2Vob2xkZXJPcHBvcnR1bml0aWVzJHtpbmRleH1gKTtcclxuXHJcbiAgY29uc3QgZHJvcERvd25FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGRyb3Bkb3duJHtpbmRleH1gKTtcclxuICBjb25zdCBkYXRhRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBkYXRhJHtpbmRleH1gKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdzYXAuc2V0KGRyb3BEb3duRWxlbWVudCwgeyByb3RhdGlvbjogJy05MF9jdycgfSk7XHJcbiAgICBpZiAoIWlzTW9iaWxlKSB7XHJcbiAgICAgIGNvbnN0IGNvbnRhaW5lckVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgY29udGFpbmVyJHtpbmRleH1gKTtcclxuICAgICAgY29uc3QgY29tcGV0aXRvck1hbmFnZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgbWFuYWdlciR7aW5kZXh9YCk7XHJcbiAgICAgIGNvbnRhaW5lckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsICgpID0+IHtcclxuICAgICAgICBnc2FwLnRvKGNvbXBldGl0b3JNYW5hZ2VyLCB7IGhlaWdodDogMTgsIG1hcmlnbkJvdHRvbTogMTYsIGR1cmF0aW9uOiAwLjUsIGVhc2U6IExpbmVhci5lYXNlSW4gfSk7XHJcbiAgICAgICAgZ3NhcC50byhpbml0aWFsQ29udGFpbmVyLCB7IG1hcmdpblRvcDogMTYsIGR1cmF0aW9uOiAwLjUsIGVhc2U6IExpbmVhci5lYXNlSW4gfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBjb250YWluZXJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XHJcbiAgICAgICAgZ3NhcC50byhjb21wZXRpdG9yTWFuYWdlciwgeyBoZWlnaHQ6IDAsIG1hcmdpbkJvdHRvbTogMCwgZHVyYXRpb246IDAuNSwgZWFzZTogTGluZWFyLmVhc2VPdXQgfSk7XHJcbiAgICAgICAgZ3NhcC50byhpbml0aWFsQ29udGFpbmVyLCB7IG1hcmdpblRvcDogMCwgZHVyYXRpb246IDAuNSwgZWFzZTogTGluZWFyLmVhc2VJbiB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSwgW2Ryb3BEb3duRWxlbWVudF0pO1xyXG5cclxuICBjb25zdCBvblNlY3Rpb25Ecm9wZG93biA9ICgpID0+IHtcclxuICAgIGNvbnN0IHNlY3Rpb25IZWlnaHQgPVxyXG4gICAgICBkZXNjcmlwdGlvblRpdGxlLm9mZnNldEhlaWdodCArXHJcbiAgICAgIHBsYWNlaG9sZGVyVGl0bGUub2Zmc2V0SGVpZ2h0ICtcclxuICAgICAgZGVzY3JpcHRpb25Nb2RlbC5vZmZzZXRIZWlnaHQgK1xyXG4gICAgICBwbGFjZWhvbGRlck1vZGVsLm9mZnNldEhlaWdodCArXHJcbiAgICAgIDI0ICtcclxuICAgICAgZGVzY3JpcHRpb25Qcm9kdWN0Lm9mZnNldEhlaWdodCArXHJcbiAgICAgIHBsYWNlaG9sZGVyUHJvZHVjdC5vZmZzZXRIZWlnaHQgK1xyXG4gICAgICAyNCArXHJcbiAgICAgIGRlc2NyaXB0aW9uUHJvbW90aW9uLm9mZnNldEhlaWdodCArXHJcbiAgICAgIHBsYWNlaG9sZGVyUHJvbW90aW9uLm9mZnNldEhlaWdodCArXHJcbiAgICAgIDI0ICtcclxuICAgICAgZGVzY3JpcHRpb25TdHJlbmd0aHMub2Zmc2V0SGVpZ2h0ICtcclxuICAgICAgcGxhY2Vob2xkZXJTdHJlbmd0aHMub2Zmc2V0SGVpZ2h0ICtcclxuICAgICAgMjQgK1xyXG4gICAgICBkZXNjcmlwdGlvbldlYWtuZXNzZXMub2Zmc2V0SGVpZ2h0ICtcclxuICAgICAgcGxhY2Vob2xkZXJXZWFrbmVzc2VzLm9mZnNldEhlaWdodCArXHJcbiAgICAgIDI0ICtcclxuICAgICAgZGVzY3JpcHRpb25PcHBvcnR1bml0aWVzLm9mZnNldEhlaWdodCArXHJcbiAgICAgIHBsYWNlaG9sZGVyT3Bwb3J0dW5pdGllcy5vZmZzZXRIZWlnaHQgK1xyXG4gICAgICAyNDtcclxuICAgIGlmICghZHJvcGRvd25IZWxwZXIpIHtcclxuICAgICAgZ3NhcC50byhkYXRhRWxlbWVudCwgeyBoZWlnaHQ6IHNlY3Rpb25IZWlnaHQsIG1hcmdpblRvcDogMzIsIG1hcmdpbkJvdHRvbTogMTEyLCBhdXRvQWxwaGE6IDEsIGR1cmF0aW9uOiAxLCBlYXNlOiBMaW5lYXIgfSk7XHJcbiAgICAgIGdzYXAudG8oZHJvcERvd25FbGVtZW50LCB7IHJvdGF0aW9uOiAnMF9jdycsIGR1cmF0aW9uOiAxLCBlYXNlOiBMaW5lYXIgfSk7XHJcbiAgICAgIHNldERyb3Bkb3duSGVscGVyKHRydWUpO1xyXG4gICAgfSBlbHNlIGlmIChkcm9wZG93bkhlbHBlcikge1xyXG4gICAgICBnc2FwLnRvKGRhdGFFbGVtZW50LCB7IGhlaWdodDogMCwgbWFyZ2luVG9wOiAwLCBtYXJnaW5Cb3R0b206IDAsIGF1dG9BbHBoYTogMCwgZHVyYXRpb246IDEsIGVhc2U6IExpbmVhciB9KTtcclxuICAgICAgZ3NhcC50byhkcm9wRG93bkVsZW1lbnQsIHsgcm90YXRpb246ICctOTBfY2N3JywgZHVyYXRpb246IDEsIGVhc2U6IExpbmVhciB9KTtcclxuICAgICAgc2V0RHJvcGRvd25IZWxwZXIoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIHN0eWxlPXt7IGhlaWdodDogJ2ZpdC1jb250ZW50JyB9fVxyXG4gICAgICBpZD17YGNvbnRhaW5lciR7aW5kZXh9YH1cclxuICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWJhY2tncm91bmQgcm91bmRlZC0yeGwgcC00IHNzbUNvbnRhaW5lcjpwLTYgc2hhZG93LW1kIG92ZXJmbG93LWhpZGRlbiBtdC04IHNtQ29udGFpbmVyOm10LThcIlxyXG4gICAgPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiBgJHtpc01vYmlsZSA/IDQwIDogMH1gLCB0b3A6IGAke2lzTW9iaWxlID8gJy02cHgnIDogJy02cHgnfWAgfX1cclxuICAgICAgICBpZD17YG1hbmFnZXIke2luZGV4fWB9XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gcmVsYXRpdmVcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgLy8gICBzdHlsZT17eyB0cmFuc2Zvcm06ICdyb3RhdGUoLTkwZGVnKScgfX1cclxuICAgICAgICAgIG9uQ2xpY2s9e29uU2VjdGlvbkRyb3Bkb3dufVxyXG4gICAgICAgICAgaWQ9e2Bkcm9wZG93biR7aW5kZXh9YH1cclxuICAgICAgICAgIHNyYz1cIi9jb21wZXRpdG9ycy9kcm9wZG93bi5zdmdcIlxyXG4gICAgICAgICAgaGVpZ2h0PXsxOH1cclxuICAgICAgICAgIHdpZHRoPXsxOH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxyXG4gICAgICAgICAgey8qIDxpbWcgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgbXItMlwiIHNyYz1cIi9jb21wZXRpdG9ycy9kcmFnLnN2Z1wiIGhlaWdodD17MTh9IHdpZHRoPXsxOH0gLz5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkNvbXBldGl0b3JSZW1vdmUoZGF0YS5pbmRleCl9XHJcbiAgICAgICAgICBzcmM9XCIvY29tcGV0aXRvcnMvcmVtb3ZlLnN2Z1wiXHJcbiAgICAgICAgICBoZWlnaHQ9ezE4fVxyXG4gICAgICAgICAgd2lkdGg9ezE4fVxyXG4gICAgICAgIC8+ICovfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGlkPXtpbmRleH1cclxuICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGdhcC02IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBzbUNvbnRhaW5lcjpnYXAtMCBzbUNvbnRhaW5lcjpncmlkIHNtQ29udGFpbmVyOmdyaWQtY29scy0xMmZyXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic21Db250YWluZXI6Y29sLXN0YXJ0LTEgc21Db250YWluZXI6Y29sLWVuZC00IGp1c3RpZnktc2VsZi1jZW50ZXIgZmxleCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAge2NvbXBldGl0b3IuaW1hZ2UgIT09ICcnID8gKFxyXG4gICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICBodG1sRm9yPXtgdXBsb2FkLWltYWdlJHtpbmRleH1gfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIHctMjAgaC0yMCBjdXJzb3ItcG9pbnRlciByb3VuZGVkLWZ1bGwgYmctd2hpdGUgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9e2NvbXBldGl0b3IuaW1hZ2V9IGhlaWdodD17NTV9IHdpZHRoPXs1NX0gLz5cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICBodG1sRm9yPXtgdXBsb2FkLWltYWdlJHtpbmRleH1gfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0yMCBoLTIwIGN1cnNvci1wb2ludGVyIHJvdW5kZWQtZnVsbCBiZy1wcmltYXJ5IGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9jb21wZXRpdG9ycy9lbXB0eS1pbWFnZS5zdmdcIiBoZWlnaHQ9ezY1fSB3aWR0aD17NjV9IC8+XHJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgaWQ9e2B1cGxvYWQtaW1hZ2Uke2luZGV4fWB9IHN0eWxlPXt7IGRpc3BsYXk6ICdub25lJywgekluZGV4OiAxMCB9fSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic21Db250YWluZXI6Y29sLXN0YXJ0LTUgc21Db250YWluZXI6Y29sLWVuZC0xMyBncmlkIGdyaWQtY29scy0yZnIgZ3JpZC1yb3dzLTJmciBqdXN0aWZ5LWl0ZW1zLWNlbnRlciBpdGVtcy1jZW50ZXIgZ2FwLXgtNCBzc21Db250YWluZXI6Z2FwLXgtOCBnYXAteS0yIHNzbUNvbnRhaW5lcjpnYXAteS00XCI+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB2YWx1ZT17Y29tcGV0aXRvci50aXRsZX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLTJ4bCB3LWZ1bGwgcHgtMyBweS0yIHRleHQtc20gdGV4dC1wcmltYXJ5ZGFyayBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwibmFtZVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHZhbHVlPXtjb21wZXRpdG9yLmxvY2F0aW9ufVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQtMnhsIHctZnVsbCBweC0zIHB5LTIgdGV4dC1zbSB0ZXh0LXByaW1hcnlkYXJrIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJsb2NhdGlvblwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHZhbHVlPXtjb21wZXRpdG9yLmVtcGxveWVlc31cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLTJ4bCB3LWZ1bGwgcHgtMyBweS0yIHRleHQtc20gdGV4dC1wcmltYXJ5ZGFyayBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZW1wbG95ZWVzXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdmFsdWU9e2NvbXBldGl0b3IucmV2ZW51ZX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLTJ4bCB3LWZ1bGwgcHgtMyBweS0yIHRleHQtc20gdGV4dC1wcmltYXJ5ZGFyayBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwicmV2ZW51ZVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHsvKiBDb21wYW55IGRlc2NyaXB0aW9uICovfVxyXG4gICAgICA8ZGl2IGlkPXtgZGF0YSR7aW5kZXh9YH0gY2xhc3NOYW1lPVwidy1mdWxsIGgtMCBpbnZpc2libGVcIj5cclxuICAgICAgICA8ZGl2IGlkPXtgZGVzY3JpcHRpb25UaXRsZSR7aW5kZXh9YH0gY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCIvY29tcGV0aXRvcnMvZGVzY3JpcHRpb24uc3ZnXCIgaGVpZ2h0PXsyMn0gd2lkdGg9ezIyfSAvPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5ZGFyayBtbC0yXCI+Q29tcGFueSBkZXNjcmlwdGlvbjwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgIHZhbHVlPXtjb21wZXRpdG9yLmNvbXBhbnlEZXNjcmlwdGlvbn1cclxuICAgICAgICAgIGlkPXtgcGxhY2Vob2xkZXJUaXRsZSR7aW5kZXh9YH1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy13aGl0ZSByb3VuZGVkLTJ4bCBtdC0yIHAtMiB0ZXh0LXByaW1hcnlkYXJrIHRleHQtc20gcHgtNCBweS0zIGgtMjggbWF4LWgtMjggZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRGVzY3JpYmUgdGhlIG1haW4gYXNzdW1wdGlvbiBvZiBhbmFseXplZCBjb21wYW55LlwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICB7LyogVGl0bGUgZW5kICovfVxyXG4gICAgICAgIDxkaXYgaWQ9e2BkZXNjcmlwdGlvbk1vZGVsJHtpbmRleH1gfSBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyIG10LTZcIj5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiL2NvbXBldGl0b3JzL21vZGVsLnN2Z1wiIGhlaWdodD17MjJ9IHdpZHRoPXsyMn0gLz5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeWRhcmsgbWwtMlwiPkJ1c2luZXNzIG1vZGVsPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgdmFsdWU9e2NvbXBldGl0b3IuYnVzaW5lc3NNb2RlbH1cclxuICAgICAgICAgIGlkPXtgcGxhY2Vob2xkZXJNb2RlbCR7aW5kZXh9YH1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy13aGl0ZSByb3VuZGVkLTJ4bCBtdC0yIHAtMiB0ZXh0LXByaW1hcnlkYXJrIHRleHQtc20gcHgtNCBweS0zIGgtMjggbWF4LWgtMjggZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSG93IGRvZXMgdGhlIGNvbXBhbnkgYnVzaW5lc3MgbW9kZWwgbG9vayBsaWtlP1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgICB7LyogTW9kZWwgZW5kICovfVxyXG4gICAgICAgIDxkaXYgaWQ9e2BkZXNjcmlwdGlvblByb2R1Y3Qke2luZGV4fWB9IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXIgbXQtNlwiPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCIvY29tcGV0aXRvcnMvcHJvZHVjdDEuc3ZnXCIgaGVpZ2h0PXsyMn0gd2lkdGg9ezIyfSAvPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5ZGFyayBtbC0yXCI+UHJvZHVjdCBvdmVydmlldzwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgIHZhbHVlPXtjb21wZXRpdG9yLnByb2R1Y3RPdmVydmlld31cclxuICAgICAgICAgIGlkPXtgcGxhY2Vob2xkZXJQcm9kdWN0JHtpbmRleH1gfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIHJvdW5kZWQtMnhsIG10LTIgcC0yIHRleHQtcHJpbWFyeWRhcmsgdGV4dC1zbSBweC00IHB5LTMgaC0yOCBtYXgtaC0yOCBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJXaGF0IGlzIHRoZSBmdWxsIHJhbmdlIG9mIHByb2R1Y3RzIGFuZCBzZXJ2aWNlcyB0aGUgY29tcGFueSBvZmZlcnM/XCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIHsvKiBQcm9kdWN0IGVuZCAqL31cclxuICAgICAgICA8ZGl2IGlkPXtgZGVzY3JpcHRpb25Qcm9tb3Rpb24ke2luZGV4fWB9IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXIgbXQtNlwiPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCIvY29tcGV0aXRvcnMvcHJvbW90aW9uLnN2Z1wiIGhlaWdodD17MjJ9IHdpZHRoPXsyMn0gLz5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeWRhcmsgbWwtMlwiPlByb21vdGlvbiBzdHJhdGVneTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgIHZhbHVlPXtjb21wZXRpdG9yLnByb21vdGlvblN0cmF0ZWd5fVxyXG4gICAgICAgICAgaWQ9e2BwbGFjZWhvbGRlclByb21vdGlvbiR7aW5kZXh9YH1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy13aGl0ZSByb3VuZGVkLTJ4bCBtdC0yIHAtMiB0ZXh0LXByaW1hcnlkYXJrIHRleHQtc20gcHgtNCBweS0zIGgtMjggbWF4LWgtMjggZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV2hhdCBhcmUgdGhlIGNvbXBhbnkgbWFya2V0aW5nIGFuZCBwcm9tb3Rpb25hbCBzdHJhdGVnaWVzP1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgICB7LyogUHJvbW90aW9uIGVuZCAqL31cclxuICAgICAgICA8ZGl2IGlkPXtgZGVzY3JpcHRpb25TdHJlbmd0aHMke2luZGV4fWB9IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXIgbXQtNlwiPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCIvY29tcGV0aXRvcnMvc3RyZW5ndGhzLnN2Z1wiIGhlaWdodD17MjJ9IHdpZHRoPXsyMn0gLz5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeWRhcmsgbWwtMlwiPkNvbXBhbnkgc3RyZW5ndGhzPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgdmFsdWU9e2NvbXBldGl0b3IuY29tcGFueVN0cmVuZ3Roc31cclxuICAgICAgICAgIGlkPXtgcGxhY2Vob2xkZXJTdHJlbmd0aHMke2luZGV4fWB9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgcm91bmRlZC0yeGwgbXQtMiBwLTIgdGV4dC1wcmltYXJ5ZGFyayB0ZXh0LXNtIHB4LTQgcHktMyBoLTI4IG1heC1oLTI4IGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIldoYXQgZG8geW91ciBjb21wZXRpdG9ycyBkbyByZWFsbHkgd2VsbCB0aGF0IGRpZmZlcmVudGlhdGVzIHRoZW0/XCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIHsvKiBTdHJlbmd0aHMgZW5kICovfVxyXG4gICAgICAgIDxkaXYgaWQ9e2BkZXNjcmlwdGlvbldlYWtuZXNzZXMke2luZGV4fWB9IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXIgbXQtNlwiPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCIvY29tcGV0aXRvcnMvd2Vha25lc3Nlcy5zdmdcIiBoZWlnaHQ9ezIyfSB3aWR0aD17MjJ9IC8+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnlkYXJrIG1sLTJcIj5Db21wYW55IFdlYWtuZXNzZXM8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICB2YWx1ZT17Y29tcGV0aXRvci5jb21wYW55V2Vha25lc3Nlc31cclxuICAgICAgICAgIGlkPXtgcGxhY2Vob2xkZXJXZWFrbmVzc2VzJHtpbmRleH1gfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIHJvdW5kZWQtMnhsIG10LTIgcC0yIHRleHQtcHJpbWFyeWRhcmsgdGV4dC1zbSBweC00IHB5LTMgaC0yOCBtYXgtaC0yOCBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJXaGF0IGRvIHRoZSBjb21wYW55IGN1c3RvbWVycyBjb21wbGFpbiBhYm91dCB0aGUgbW9zdCwgYW5kIHdoYXQgcHJvZHVjdHMgZG8gdGhleSBsYWNrP1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgICB7LyogV2Vha25lc3NlcyBlbmQgKi99XHJcbiAgICAgICAgPGRpdiBpZD17YGRlc2NyaXB0aW9uT3Bwb3J0dW5pdGllcyR7aW5kZXh9YH0gY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlciBtdC02XCI+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cIi9jb21wZXRpdG9ycy9vcHBvcnR1bml0aWVzMi5zdmdcIiBoZWlnaHQ9ezIyfSB3aWR0aD17MjJ9IC8+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnlkYXJrIG1sLTJcIj5PcHBvcnR1bml0aWVzPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgdmFsdWU9e2NvbXBldGl0b3Iub3Bwb3J0dW5pdGllc31cclxuICAgICAgICAgIGlkPXtgcGxhY2Vob2xkZXJPcHBvcnR1bml0aWVzJHtpbmRleH1gfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIHJvdW5kZWQtMnhsIG10LTIgcC0yIHRleHQtcHJpbWFyeWRhcmsgdGV4dC1zbSBweC00IHB5LTMgaC0yOCBtYXgtaC0yOCBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJXaGF0IGRpc3Rpbmd1aXNoIHlvdXIgc3RhcnR1cCBmcm9tIHRoaXMgcGFydGljdWxhciBjb21wZXRpdGl2ZSBjb21wYW55P1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgICB7LyogT3Bwb3J0dW5pdGllcyBlbmQgKi99XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVuaXF1ZUNvbXBldGl0b3JzUGFnZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==