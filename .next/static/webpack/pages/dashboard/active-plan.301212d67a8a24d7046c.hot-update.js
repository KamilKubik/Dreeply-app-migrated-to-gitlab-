webpackHotUpdate_N_E("pages/dashboard/active-plan",{

/***/ "./components/dashboard/account/PricingPage.js":
/*!*****************************************************!*\
  !*** ./components/dashboard/account/PricingPage.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-spinners */ "./node_modules/react-spinners/index.js");
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_spinners__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tippys_PricingPageTippy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tippys/PricingPageTippy */ "./components/dashboard/account/tippys/PricingPageTippy.js");
/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../lib/db */ "./lib/db.js");


var _jsxFileName = "C:\\off-saas\\components\\dashboard\\account\\PricingPage.js",
    _this = undefined,
    _s = $RefreshSig$();






var PricingPage = function PricingPage(_ref) {
  _s();

  var activePlan = _ref.activePlan,
      goToBillingPortal = _ref.goToBillingPortal,
      currentUser = _ref.currentUser;
  console.log(activePlan);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      onLoading = _useState[0],
      setOnLoading = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      onWeeklyLoading = _useState2[0],
      setOnWeeklyLoading = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      onMonthlyLoading = _useState3[0],
      setOnMonthlyLoading = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      onYearlyLoading = _useState4[0],
      setOnYearlyLoading = _useState4[1];

  var onBillingPortalClick = function onBillingPortalClick() {
    setOnLoading(true);
    setTimeout(function () {
      setOnLoading(false);
    }, 5000); // goToBillingPortal();
  };

  var onBillingPortalClick2 = function onBillingPortalClick2() {
    setOnWeeklyLoading(true);
    setTimeout(function () {
      setOnWeeklyLoading(false);
    }, 5000); // goToBillingPortal();
  };

  var onBillingPortalClick3 = function onBillingPortalClick3() {
    setOnMonthlyLoading(true);
    setTimeout(function () {
      setOnMonthlyLoading(false);
    }, 5000); // goToBillingPortal();
  };

  var onBillingPortalClick4 = function onBillingPortalClick4() {
    setOnYearlyLoading(true);
    setTimeout(function () {
      setOnYearlyLoading(false);
    }, 5000); // goToBillingPortal();
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "z-50 text-primarydark rounded-2xl mt-16 mb-16 flex flex-col transform hover:scale-105 hover:-translate-y-2 hover:-translate-x-2 transition duration-500 ease-in-out",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "flex",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "text-lg dark:text-background",
        children: "Choose the best plan for you"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_tippys_PricingPageTippy__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "py-8 px-8 mt-1 w-full flex flex-col justify-center items-center border-r-6 rounded-2xl bg-white dark:bg-background shadow-lg hover:shadow-xl transition duration-500 linear",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "w-full grid grid-cols-2fr screenMediumSmall:grid-cols-4fr gap-x-4 gap-y-12",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "group w-full rounded-2xl px-6 py-4 ".concat(onLoading ? 'text-white bg-primary' : 'text-primarydark bg-background', " hover:bg-primary hover:text-white transition duration-500 linear"),
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "font-extrabold",
            children: "3 Day plan"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "mt-2",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "text-2xl inline-block group-hover:text-primarydark transition duration-500 linear ".concat(onLoading ? 'text-primarydark' : 'text-gray'),
              children: "$"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "text-2xl inline-block ml-1",
              children: "4"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "inline-block ml-2 text-sm group-hover:text-primarydark transition duration-500 linear ".concat(onLoading ? 'text-primarydark' : 'text-gray'),
              children: "/"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "inline-block ml-2 text-sm group-hover:text-primarydark transition duration-500 linear ".concat(onLoading ? 'text-primarydark' : 'text-gray'),
              children: "three days"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex items-baseline mt-6 text-sm",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "/pricing/rocket1.svg",
              height: 24,
              width: 24
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "ml-2 font-semibold inline-block",
              children: "Unlimited"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "ml-1 inline-block",
              children: "projects"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex items-baseline mt-3 text-sm",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              className: "relative top-0.5",
              src: "/pricing/members.svg",
              height: 24,
              width: 24
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "ml-2 font-semibold inline-block",
              children: "Unlimited"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "ml-1 inline-block",
              children: "members"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex items-baseline mt-3 text-sm",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              className: "relative top-0.5",
              src: "/pricing/startup-idea.svg",
              height: 24,
              width: 24
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "ml-2",
              children: "Startup idea"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex items-baseline mt-3 text-sm",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              className: "relative top-0.5",
              src: "/pricing/business-plan.svg",
              height: 24,
              width: 24
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "ml-2",
              children: "Business plan"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 104,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex items-baseline mt-3 text-sm",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              className: "relative top-0.5",
              src: "/pricing/cash-flow1.svg",
              height: 24,
              width: 24
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "ml-2",
              children: "Cash flow analysis"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 108,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex items-baseline mt-3 text-sm",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              className: "relative top-0.5",
              src: "/pricing/competitors.svg",
              height: 24,
              width: 24
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "ml-2",
              children: "Competitors analysis"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex justify-center items-center mt-4 text-sm",
            children: !onLoading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              //   onClick={
              //     activePlan && activePlan.role === 'three' && activePlan.status === 'active'
              //       ? onBillingPortalClick
              //       : () => createCheckoutSessionThreeDays(currentUser.uid)
              //   }
              onClick: onBillingPortalClick,
              className: "dark:hover:bg-primarydark dark:hover:text-background focus:outline-none border border-primary text-primary py-2 px-4 rounded-2xl dark:text-primarydark dark:border-primarydark group-hover:text-white group-hover:border-primarydark hover:bg-primarydark transition duration-500 linear",
              children: activePlan && activePlan.role === 'three' && activePlan.status === 'active' ? 'Manage your plan' : 'Start 3 day plan'
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 116,
              columnNumber: 17
            }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_spinners__WEBPACK_IMPORTED_MODULE_2__["BounceLoader"], {
              color: '#0a1230',
              size: 36
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 128,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "group w-full rounded-2xl px-6 py-4 ".concat(onWeeklyLoading ? 'text-white bg-primary' : 'text-primarydark bg-background', " hover:bg-primary hover:text-white transition duration-500 linear"),
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "font-extrabold",
            children: "Weekly plan"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "mt-2",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "".concat(onWeeklyLoading ? 'text-primarydark' : 'text-gray', " text-2xl inline-block group-hover:text-primarydark transition duration-500 linear"),
              children: "$"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 140,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "text-2xl inline-block ml-1",
              children: "7"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 147,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "".concat(onWeeklyLoading ? 'text-primarydark' : 'text-gray', " inline-block ml-2 text-sm group-hover:text-primarydark transition duration-500 linear"),
              children: "/"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 148,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "".concat(onWeeklyLoading ? 'text-primarydark' : 'text-gray', " inline-block ml-2 text-sm group-hover:text-primarydark transition duration-500 linear"),
              children: "week"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 155,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex items-baseline mt-6 text-sm",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "/pricing/rocket1.svg",
              height: 24,
              width: 24
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 164,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "ml-2 font-semibold inline-block",
              children: "Unlimited"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 165,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "ml-1 inline-block",
              children: "projects"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 166,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 163,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex items-baseline mt-3 text-sm",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              className: "relative top-0.5",
              src: "/pricing/members.svg",
              height: 24,
              width: 24
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 169,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "ml-2 font-semibold inline-block",
              children: "Unlimited"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 170,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "ml-1 inline-block",
              children: "members"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 171,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 168,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex items-baseline mt-3 text-sm",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              className: "relative top-0.5",
              src: "/pricing/startup-idea.svg",
              height: 24,
              width: 24
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 174,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "ml-2",
              children: "Startup idea"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 175,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 173,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex items-baseline mt-3 text-sm",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              className: "relative top-0.5",
              src: "/pricing/business-plan.svg",
              height: 24,
              width: 24
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 178,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "ml-2",
              children: "Business plan"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 179,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 177,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex items-baseline mt-3 text-sm",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              className: "relative top-0.5",
              src: "/pricing/cash-flow1.svg",
              height: 24,
              width: 24
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 182,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "ml-2",
              children: "Cash flow analysis"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 183,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 181,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex items-baseline mt-3 text-sm",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              className: "relative top-0.5",
              src: "/pricing/competitors.svg",
              height: 24,
              width: 24
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 186,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "ml-2",
              children: "Competitors analysis"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 187,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 185,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex justify-center items-center mt-4 text-sm",
            children: !onWeeklyLoading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              // onClick={
              //   activePlan && activePlan.role === 'weekly' && activePlan.status === 'active'
              //     ? onBillingPortalClick2
              //     : () => createCheckoutSessionWeekly(currentUser.uid)
              // }
              onClick: onBillingPortalClick2,
              className: "dark:hover:bg-primarydark dark:hover:text-background focus:outline-none border border-primary text-primary py-2 px-4 rounded-2xl dark:text-primarydark dark:border-primarydark group-hover:text-white group-hover:border-primarydark hover:bg-primarydark transition duration-500 linear",
              children: activePlan && activePlan.role === 'weekly' && activePlan.status === 'active' ? 'Manage your plan' : 'Start weekly plan'
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 191,
              columnNumber: 17
            }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_spinners__WEBPACK_IMPORTED_MODULE_2__["BounceLoader"], {
              color: '#0a1230',
              size: 36
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 203,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 189,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "z-50 group w-full rounded-2xl px-6 py-4 ".concat(onMonthlyLoading ? 'text-white bg-primary' : 'text-primarydark bg-background', " hover:bg-primary hover:text-white transition duration-500 linear"),
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "font-extrabold",
            children: "Monthly plan"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 213,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "mt-2",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "text-2xl ".concat(onMonthlyLoading ? 'text-primarydark' : 'text-gray', " inline-block group-hover:text-primarydark transition duration-500 linear"),
              children: "$"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 215,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "text-2xl inline-block ml-1",
              children: "19"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 222,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "".concat(onMonthlyLoading ? 'text-primarydark' : 'text-gray', " inline-block ml-2 text-sm group-hover:text-primarydark transition duration-500 linear"),
              children: "/"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 223,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "".concat(onMonthlyLoading ? 'text-primarydark' : 'text-gray', " inline-block ml-2 text-sm group-hover:text-primarydark transition duration-500 linear"),
              children: "month"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 230,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 214,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex items-baseline mt-6 text-sm",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "/pricing/rocket1.svg",
              height: 24,
              width: 24
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 239,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "ml-2 font-semibold inline-block",
              children: "Unlimited"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 240,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "ml-1 inline-block",
              children: "projects"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 241,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 238,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex items-baseline mt-3 text-sm",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              className: "relative top-0.5",
              src: "/pricing/members.svg",
              height: 24,
              width: 24
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 244,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "ml-2 font-semibold inline-block",
              children: "Unlimited"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 245,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "ml-1 inline-block",
              children: "members"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 246,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 243,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex items-baseline mt-3 text-sm",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              className: "relative top-0.5",
              src: "/pricing/startup-idea.svg",
              height: 24,
              width: 24
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 249,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "ml-2",
              children: "Startup idea"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 250,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 248,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex items-baseline mt-3 text-sm",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              className: "relative top-0.5",
              src: "/pricing/business-plan.svg",
              height: 24,
              width: 24
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 253,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "ml-2",
              children: "Business plan"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 254,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 252,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex items-baseline mt-3 text-sm",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              className: "relative top-0.5",
              src: "/pricing/cash-flow1.svg",
              height: 24,
              width: 24
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 257,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "ml-2",
              children: "Cash flow analysis"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 258,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 256,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex items-baseline mt-3 text-sm",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              className: "relative top-0.5",
              src: "/pricing/competitors.svg",
              height: 24,
              width: 24
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 261,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "ml-2",
              children: "Competitors analysis"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 262,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 260,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex justify-center items-center mt-4 text-sm",
            children: !onMonthlyLoading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              // onClick={
              //   activePlan && activePlan.role === 'monthly' && activePlan.status === 'active'
              //     ? onBillingPortalClick3
              //     : () => createCheckoutSessionMonthly(currentUser.uid)
              // }
              onClick: onBillingPortalClick3,
              className: "z-50 dark:hover:bg-primarydark dark:hover:text-background focus:outline-none border border-primary text-primary py-2 px-4 rounded-2xl dark:text-primarydark dark:border-primarydark group-hover:text-white group-hover:border-primarydark hover:bg-primarydark transition duration-500 linear",
              children: activePlan && activePlan.role === 'monthly' && activePlan.status === 'active' ? 'Manage your plan' : 'Start monthly plan'
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 266,
              columnNumber: 17
            }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_spinners__WEBPACK_IMPORTED_MODULE_2__["BounceLoader"], {
              color: '#0a1230',
              size: 36
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 280,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 264,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 208,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "group w-full rounded-2xl px-6 py-4 ".concat(onYearlyLoading ? 'text-white bg-primary' : 'text-primarydark bg-background', " hover:bg-primary hover:text-white transition duration-500 linear"),
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "font-extrabold",
            children: "Yearly plan"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 290,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "mt-2",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "".concat(onYearlyLoading ? 'text-primarydark' : 'text-gray', " text-2xl inline-block group-hover:text-primarydark transition duration-500 linear"),
              children: "$"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 292,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "text-2xl inline-block ml-1",
              children: "119"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 299,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "".concat(onYearlyLoading ? 'text-primarydark' : 'text-gray', " inline-block ml-2 text-sm group-hover:text-primarydark transition duration-500 linear"),
              children: "/"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 300,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "".concat(onYearlyLoading ? 'text-primarydark' : 'text-gray', " inline-block ml-2 text-sm group-hover:text-primarydark transition duration-500 linear"),
              children: "year"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 307,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 291,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex items-baseline mt-6 text-sm",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "/pricing/rocket1.svg",
              height: 24,
              width: 24
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 316,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "ml-2 font-semibold inline-block",
              children: "Unlimited"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 317,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "ml-1 inline-block",
              children: "projects"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 318,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 315,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex items-baseline mt-3 text-sm",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              className: "relative top-0.5",
              src: "/pricing/members.svg",
              height: 24,
              width: 24
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 321,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "ml-2 font-semibold inline-block",
              children: "Unlimited"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 322,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "ml-1 inline-block",
              children: "members"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 323,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 320,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex items-baseline mt-3 text-sm",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              className: "relative top-0.5",
              src: "/pricing/startup-idea.svg",
              height: 24,
              width: 24
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 326,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "ml-2",
              children: "Startup idea"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 327,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 325,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex items-baseline mt-3 text-sm",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              className: "relative top-0.5",
              src: "/pricing/business-plan.svg",
              height: 24,
              width: 24
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 330,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "ml-2",
              children: "Business plan"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 331,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 329,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex items-baseline mt-3 text-sm",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              className: "relative top-0.5",
              src: "/pricing/cash-flow1.svg",
              height: 24,
              width: 24
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 334,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "ml-2",
              children: "Cash flow analysis"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 335,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 333,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex items-baseline mt-3 text-sm",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              className: "relative top-0.5",
              src: "/pricing/competitors.svg",
              height: 24,
              width: 24
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 338,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "ml-2",
              children: "Competitors analysis"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 339,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 337,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex justify-center items-center mt-4 text-sm",
            children: !onYearlyLoading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              // onClick={
              //   activePlan && activePlan.role === 'yearly' && activePlan.status === 'active'
              //     ? onBillingPortalClick4
              //     : () => createCheckoutSessionYearly(currentUser.uid)
              // }
              onClick: onBillingPortalClick4,
              className: "dark:hover:bg-primarydark dark:hover:text-background focus:outline-none border border-primary text-primary py-2 px-4 rounded-2xl dark:text-primarydark dark:border-primarydark group-hover:text-white group-hover:border-primarydark hover:bg-primarydark transition duration-500 linear",
              children: activePlan && activePlan.role === 'yearly' && activePlan.status === 'active' ? 'Manage your plan' : 'Start yearly plan'
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 343,
              columnNumber: 17
            }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_spinners__WEBPACK_IMPORTED_MODULE_2__["BounceLoader"], {
              color: '#0a1230',
              size: 36
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 355,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 341,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 285,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 5
  }, _this);
};

_s(PricingPage, "HMiBrHl7zVbUTgCisKSxrB+n+uk=");

_c = PricingPage;
/* harmony default export */ __webpack_exports__["default"] = (PricingPage);

var _c;

$RefreshReg$(_c, "PricingPage");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kYXNoYm9hcmQvYWNjb3VudC9QcmljaW5nUGFnZS5qcyJdLCJuYW1lcyI6WyJQcmljaW5nUGFnZSIsImFjdGl2ZVBsYW4iLCJnb1RvQmlsbGluZ1BvcnRhbCIsImN1cnJlbnRVc2VyIiwiY29uc29sZSIsImxvZyIsInVzZVN0YXRlIiwib25Mb2FkaW5nIiwic2V0T25Mb2FkaW5nIiwib25XZWVrbHlMb2FkaW5nIiwic2V0T25XZWVrbHlMb2FkaW5nIiwib25Nb250aGx5TG9hZGluZyIsInNldE9uTW9udGhseUxvYWRpbmciLCJvblllYXJseUxvYWRpbmciLCJzZXRPblllYXJseUxvYWRpbmciLCJvbkJpbGxpbmdQb3J0YWxDbGljayIsInNldFRpbWVvdXQiLCJvbkJpbGxpbmdQb3J0YWxDbGljazIiLCJvbkJpbGxpbmdQb3J0YWxDbGljazMiLCJvbkJpbGxpbmdQb3J0YWxDbGljazQiLCJyb2xlIiwic3RhdHVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBT0EsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FBb0Q7QUFBQTs7QUFBQSxNQUFqREMsVUFBaUQsUUFBakRBLFVBQWlEO0FBQUEsTUFBckNDLGlCQUFxQyxRQUFyQ0EsaUJBQXFDO0FBQUEsTUFBbEJDLFdBQWtCLFFBQWxCQSxXQUFrQjtBQUN0RUMsU0FBTyxDQUFDQyxHQUFSLENBQVlKLFVBQVo7O0FBRHNFLGtCQUVwQ0ssc0RBQVEsQ0FBQyxLQUFELENBRjRCO0FBQUEsTUFFL0RDLFNBRitEO0FBQUEsTUFFcERDLFlBRm9EOztBQUFBLG1CQUd4QkYsc0RBQVEsQ0FBQyxLQUFELENBSGdCO0FBQUEsTUFHL0RHLGVBSCtEO0FBQUEsTUFHOUNDLGtCQUg4Qzs7QUFBQSxtQkFJdEJKLHNEQUFRLENBQUMsS0FBRCxDQUpjO0FBQUEsTUFJL0RLLGdCQUorRDtBQUFBLE1BSTdDQyxt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LHFCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFwREYsZUF3REU7QUFBSyxxQkFBUyxFQUFDLCtDQUFmO0FBQUEsc0JBQ0csQ0FBQ0EsZUFBRCxnQkFDQztBQUNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBTyxFQUFFTSxxQkFOWDtBQU9FLHVCQUFTLEVBQUMsMFJBUFo7QUFBQSx3QkFTR2xCLFVBQVUsSUFBSUEsVUFBVSxDQUFDbUIsSUFBWCxLQUFvQixRQUFsQyxJQUE4Q25CLFVBQVUsQ0FBQ29CLE1BQVgsS0FBc0IsUUFBcEUsR0FBK0Usa0JBQS9FLEdBQW9HO0FBVHZHO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREQsZ0JBYUMscUVBQUMsMkRBQUQ7QUFBYyxtQkFBSyxFQUFFLFNBQXJCO0FBQWdDLGtCQUFJLEVBQUU7QUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWRKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBeERGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFyT0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBMFRELENBaFdEOztHQUFNckIsVzs7S0FBQUEsVztBQWtXU0EsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGFzaGJvYXJkL2FjdGl2ZS1wbGFuLjMwMTIxMmQ2N2E4YTI0ZDcwNDZjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJvdW5jZUxvYWRlciB9IGZyb20gJ3JlYWN0LXNwaW5uZXJzJztcclxuaW1wb3J0IFByaWNpbmdQYWdlVGlwcHkgZnJvbSAnLi90aXBweXMvUHJpY2luZ1BhZ2VUaXBweSc7XHJcbmltcG9ydCB7XHJcbiAgY3JlYXRlQ2hlY2tvdXRTZXNzaW9uV2Vla2x5LFxyXG4gIGNyZWF0ZUNoZWNrb3V0U2Vzc2lvblRocmVlRGF5cyxcclxuICBjcmVhdGVDaGVja291dFNlc3Npb25Nb250aGx5LFxyXG4gIGNyZWF0ZUNoZWNrb3V0U2Vzc2lvblllYXJseSxcclxufSBmcm9tICcuLi8uLi8uLi9saWIvZGInO1xyXG5cclxuY29uc3QgUHJpY2luZ1BhZ2UgPSAoeyBhY3RpdmVQbGFuLCBnb1RvQmlsbGluZ1BvcnRhbCwgY3VycmVudFVzZXIgfSkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKGFjdGl2ZVBsYW4pO1xyXG4gIGNvbnN0IFtvbkxvYWRpbmcsIHNldE9uTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW29uV2Vla2x5TG9hZGluZywgc2V0T25XZWVrbHlMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbb25Nb250aGx5TG9hZGluZywgc2V0T25Nb250aGx5TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW29uWWVhcmx5TG9hZGluZywgc2V0T25ZZWFybHlMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBvbkJpbGxpbmdQb3J0YWxDbGljayA9ICgpID0+IHtcclxuICAgIHNldE9uTG9hZGluZyh0cnVlKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRPbkxvYWRpbmcoZmFsc2UpO1xyXG4gICAgfSwgNTAwMCk7XHJcbiAgICAvLyBnb1RvQmlsbGluZ1BvcnRhbCgpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uQmlsbGluZ1BvcnRhbENsaWNrMiA9ICgpID0+IHtcclxuICAgIHNldE9uV2Vla2x5TG9hZGluZyh0cnVlKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRPbldlZWtseUxvYWRpbmcoZmFsc2UpO1xyXG4gICAgfSwgNTAwMCk7XHJcbiAgICAvLyBnb1RvQmlsbGluZ1BvcnRhbCgpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uQmlsbGluZ1BvcnRhbENsaWNrMyA9ICgpID0+IHtcclxuICAgIHNldE9uTW9udGhseUxvYWRpbmcodHJ1ZSk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2V0T25Nb250aGx5TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9LCA1MDAwKTtcclxuICAgIC8vIGdvVG9CaWxsaW5nUG9ydGFsKCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25CaWxsaW5nUG9ydGFsQ2xpY2s0ID0gKCkgPT4ge1xyXG4gICAgc2V0T25ZZWFybHlMb2FkaW5nKHRydWUpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHNldE9uWWVhcmx5TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9LCA1MDAwKTtcclxuICAgIC8vIGdvVG9CaWxsaW5nUG9ydGFsKCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiei01MCB0ZXh0LXByaW1hcnlkYXJrIHJvdW5kZWQtMnhsIG10LTE2IG1iLTE2IGZsZXggZmxleC1jb2wgdHJhbnNmb3JtIGhvdmVyOnNjYWxlLTEwNSBob3ZlcjotdHJhbnNsYXRlLXktMiBob3ZlcjotdHJhbnNsYXRlLXgtMiB0cmFuc2l0aW9uIGR1cmF0aW9uLTUwMCBlYXNlLWluLW91dFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIGRhcms6dGV4dC1iYWNrZ3JvdW5kXCI+Q2hvb3NlIHRoZSBiZXN0IHBsYW4gZm9yIHlvdTwvcD5cclxuICAgICAgICA8UHJpY2luZ1BhZ2VUaXBweSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS04IHB4LTggbXQtMSB3LWZ1bGwgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgYm9yZGVyLXItNiByb3VuZGVkLTJ4bCBiZy13aGl0ZSBkYXJrOmJnLWJhY2tncm91bmQgc2hhZG93LWxnIGhvdmVyOnNoYWRvdy14bCB0cmFuc2l0aW9uIGR1cmF0aW9uLTUwMCBsaW5lYXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBncmlkIGdyaWQtY29scy0yZnIgc2NyZWVuTWVkaXVtU21hbGw6Z3JpZC1jb2xzLTRmciBnYXAteC00IGdhcC15LTEyXCI+XHJcbiAgICAgICAgICB7LyogMyBEYXkgcHJpY2luZyAqL31cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgZ3JvdXAgdy1mdWxsIHJvdW5kZWQtMnhsIHB4LTYgcHktNCAke1xyXG4gICAgICAgICAgICAgIG9uTG9hZGluZyA/ICd0ZXh0LXdoaXRlIGJnLXByaW1hcnknIDogJ3RleHQtcHJpbWFyeWRhcmsgYmctYmFja2dyb3VuZCdcclxuICAgICAgICAgICAgfSBob3ZlcjpiZy1wcmltYXJ5IGhvdmVyOnRleHQtd2hpdGUgdHJhbnNpdGlvbiBkdXJhdGlvbi01MDAgbGluZWFyYH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1leHRyYWJvbGRcIj4zIERheSBwbGFuPC9wPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTJcIj5cclxuICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdGV4dC0yeGwgaW5saW5lLWJsb2NrIGdyb3VwLWhvdmVyOnRleHQtcHJpbWFyeWRhcmsgdHJhbnNpdGlvbiBkdXJhdGlvbi01MDAgbGluZWFyICR7XHJcbiAgICAgICAgICAgICAgICAgIG9uTG9hZGluZyA/ICd0ZXh0LXByaW1hcnlkYXJrJyA6ICd0ZXh0LWdyYXknXHJcbiAgICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAkXHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtMnhsIGlubGluZS1ibG9jayBtbC0xXCI+NDwvcD5cclxuICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaW5saW5lLWJsb2NrIG1sLTIgdGV4dC1zbSBncm91cC1ob3Zlcjp0ZXh0LXByaW1hcnlkYXJrIHRyYW5zaXRpb24gZHVyYXRpb24tNTAwIGxpbmVhciAke1xyXG4gICAgICAgICAgICAgICAgICBvbkxvYWRpbmcgPyAndGV4dC1wcmltYXJ5ZGFyaycgOiAndGV4dC1ncmF5J1xyXG4gICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgL1xyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaW5saW5lLWJsb2NrIG1sLTIgdGV4dC1zbSBncm91cC1ob3Zlcjp0ZXh0LXByaW1hcnlkYXJrIHRyYW5zaXRpb24gZHVyYXRpb24tNTAwIGxpbmVhciAke1xyXG4gICAgICAgICAgICAgICAgICBvbkxvYWRpbmcgPyAndGV4dC1wcmltYXJ5ZGFyaycgOiAndGV4dC1ncmF5J1xyXG4gICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgdGhyZWUgZGF5c1xyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1iYXNlbGluZSBtdC02IHRleHQtc21cIj5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9wcmljaW5nL3JvY2tldDEuc3ZnXCIgaGVpZ2h0PXsyNH0gd2lkdGg9ezI0fSAvPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1sLTIgZm9udC1zZW1pYm9sZCBpbmxpbmUtYmxvY2tcIj5VbmxpbWl0ZWQ8L3A+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWwtMSBpbmxpbmUtYmxvY2tcIj5wcm9qZWN0czwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1iYXNlbGluZSBtdC0zIHRleHQtc21cIj5cclxuICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInJlbGF0aXZlIHRvcC0wLjVcIiBzcmM9XCIvcHJpY2luZy9tZW1iZXJzLnN2Z1wiIGhlaWdodD17MjR9IHdpZHRoPXsyNH0gLz5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtbC0yIGZvbnQtc2VtaWJvbGQgaW5saW5lLWJsb2NrXCI+VW5saW1pdGVkPC9wPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1sLTEgaW5saW5lLWJsb2NrXCI+bWVtYmVyczwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1iYXNlbGluZSBtdC0zIHRleHQtc21cIj5cclxuICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInJlbGF0aXZlIHRvcC0wLjVcIiBzcmM9XCIvcHJpY2luZy9zdGFydHVwLWlkZWEuc3ZnXCIgaGVpZ2h0PXsyNH0gd2lkdGg9ezI0fSAvPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1sLTJcIj5TdGFydHVwIGlkZWE8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtYmFzZWxpbmUgbXQtMyB0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJyZWxhdGl2ZSB0b3AtMC41XCIgc3JjPVwiL3ByaWNpbmcvYnVzaW5lc3MtcGxhbi5zdmdcIiBoZWlnaHQ9ezI0fSB3aWR0aD17MjR9IC8+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWwtMlwiPkJ1c2luZXNzIHBsYW48L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtYmFzZWxpbmUgbXQtMyB0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJyZWxhdGl2ZSB0b3AtMC41XCIgc3JjPVwiL3ByaWNpbmcvY2FzaC1mbG93MS5zdmdcIiBoZWlnaHQ9ezI0fSB3aWR0aD17MjR9IC8+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWwtMlwiPkNhc2ggZmxvdyBhbmFseXNpczwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1iYXNlbGluZSBtdC0zIHRleHQtc21cIj5cclxuICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInJlbGF0aXZlIHRvcC0wLjVcIiBzcmM9XCIvcHJpY2luZy9jb21wZXRpdG9ycy5zdmdcIiBoZWlnaHQ9ezI0fSB3aWR0aD17MjR9IC8+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWwtMlwiPkNvbXBldGl0b3JzIGFuYWx5c2lzPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBtdC00IHRleHQtc21cIj5cclxuICAgICAgICAgICAgICB7IW9uTG9hZGluZyA/IChcclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgLy8gICBvbkNsaWNrPXtcclxuICAgICAgICAgICAgICAgICAgLy8gICAgIGFjdGl2ZVBsYW4gJiYgYWN0aXZlUGxhbi5yb2xlID09PSAndGhyZWUnICYmIGFjdGl2ZVBsYW4uc3RhdHVzID09PSAnYWN0aXZlJ1xyXG4gICAgICAgICAgICAgICAgICAvLyAgICAgICA/IG9uQmlsbGluZ1BvcnRhbENsaWNrXHJcbiAgICAgICAgICAgICAgICAgIC8vICAgICAgIDogKCkgPT4gY3JlYXRlQ2hlY2tvdXRTZXNzaW9uVGhyZWVEYXlzKGN1cnJlbnRVc2VyLnVpZClcclxuICAgICAgICAgICAgICAgICAgLy8gICB9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uQmlsbGluZ1BvcnRhbENsaWNrfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkYXJrOmhvdmVyOmJnLXByaW1hcnlkYXJrIGRhcms6aG92ZXI6dGV4dC1iYWNrZ3JvdW5kIGZvY3VzOm91dGxpbmUtbm9uZSBib3JkZXIgYm9yZGVyLXByaW1hcnkgdGV4dC1wcmltYXJ5IHB5LTIgcHgtNCByb3VuZGVkLTJ4bCBkYXJrOnRleHQtcHJpbWFyeWRhcmsgZGFyazpib3JkZXItcHJpbWFyeWRhcmsgZ3JvdXAtaG92ZXI6dGV4dC13aGl0ZSBncm91cC1ob3Zlcjpib3JkZXItcHJpbWFyeWRhcmsgaG92ZXI6YmctcHJpbWFyeWRhcmsgdHJhbnNpdGlvbiBkdXJhdGlvbi01MDAgbGluZWFyXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge2FjdGl2ZVBsYW4gJiYgYWN0aXZlUGxhbi5yb2xlID09PSAndGhyZWUnICYmIGFjdGl2ZVBsYW4uc3RhdHVzID09PSAnYWN0aXZlJyA/ICdNYW5hZ2UgeW91ciBwbGFuJyA6ICdTdGFydCAzIGRheSBwbGFuJ31cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8Qm91bmNlTG9hZGVyIGNvbG9yPXsnIzBhMTIzMCd9IHNpemU9ezM2fSAvPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7LyogV2Vla2x5IHByaWNpbmcgcGxhbiAqL31cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgZ3JvdXAgdy1mdWxsIHJvdW5kZWQtMnhsIHB4LTYgcHktNCAke1xyXG4gICAgICAgICAgICAgIG9uV2Vla2x5TG9hZGluZyA/ICd0ZXh0LXdoaXRlIGJnLXByaW1hcnknIDogJ3RleHQtcHJpbWFyeWRhcmsgYmctYmFja2dyb3VuZCdcclxuICAgICAgICAgICAgfSBob3ZlcjpiZy1wcmltYXJ5IGhvdmVyOnRleHQtd2hpdGUgdHJhbnNpdGlvbiBkdXJhdGlvbi01MDAgbGluZWFyYH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1leHRyYWJvbGRcIj5XZWVrbHkgcGxhbjwvcD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yXCI+XHJcbiAgICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7XHJcbiAgICAgICAgICAgICAgICAgIG9uV2Vla2x5TG9hZGluZyA/ICd0ZXh0LXByaW1hcnlkYXJrJyA6ICd0ZXh0LWdyYXknXHJcbiAgICAgICAgICAgICAgICB9IHRleHQtMnhsIGlubGluZS1ibG9jayBncm91cC1ob3Zlcjp0ZXh0LXByaW1hcnlkYXJrIHRyYW5zaXRpb24gZHVyYXRpb24tNTAwIGxpbmVhcmB9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgJFxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBpbmxpbmUtYmxvY2sgbWwtMVwiPjc8L3A+XHJcbiAgICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7XHJcbiAgICAgICAgICAgICAgICAgIG9uV2Vla2x5TG9hZGluZyA/ICd0ZXh0LXByaW1hcnlkYXJrJyA6ICd0ZXh0LWdyYXknXHJcbiAgICAgICAgICAgICAgICB9IGlubGluZS1ibG9jayBtbC0yIHRleHQtc20gZ3JvdXAtaG92ZXI6dGV4dC1wcmltYXJ5ZGFyayB0cmFuc2l0aW9uIGR1cmF0aW9uLTUwMCBsaW5lYXJgfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIC9cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7XHJcbiAgICAgICAgICAgICAgICAgIG9uV2Vla2x5TG9hZGluZyA/ICd0ZXh0LXByaW1hcnlkYXJrJyA6ICd0ZXh0LWdyYXknXHJcbiAgICAgICAgICAgICAgICB9IGlubGluZS1ibG9jayBtbC0yIHRleHQtc20gZ3JvdXAtaG92ZXI6dGV4dC1wcmltYXJ5ZGFyayB0cmFuc2l0aW9uIGR1cmF0aW9uLTUwMCBsaW5lYXJgfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHdlZWtcclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtYmFzZWxpbmUgbXQtNiB0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIvcHJpY2luZy9yb2NrZXQxLnN2Z1wiIGhlaWdodD17MjR9IHdpZHRoPXsyNH0gLz5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtbC0yIGZvbnQtc2VtaWJvbGQgaW5saW5lLWJsb2NrXCI+VW5saW1pdGVkPC9wPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1sLTEgaW5saW5lLWJsb2NrXCI+cHJvamVjdHM8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtYmFzZWxpbmUgbXQtMyB0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJyZWxhdGl2ZSB0b3AtMC41XCIgc3JjPVwiL3ByaWNpbmcvbWVtYmVycy5zdmdcIiBoZWlnaHQ9ezI0fSB3aWR0aD17MjR9IC8+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWwtMiBmb250LXNlbWlib2xkIGlubGluZS1ibG9ja1wiPlVubGltaXRlZDwvcD5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtbC0xIGlubGluZS1ibG9ja1wiPm1lbWJlcnM8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtYmFzZWxpbmUgbXQtMyB0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJyZWxhdGl2ZSB0b3AtMC41XCIgc3JjPVwiL3ByaWNpbmcvc3RhcnR1cC1pZGVhLnN2Z1wiIGhlaWdodD17MjR9IHdpZHRoPXsyNH0gLz5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtbC0yXCI+U3RhcnR1cCBpZGVhPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWJhc2VsaW5lIG10LTMgdGV4dC1zbVwiPlxyXG4gICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwicmVsYXRpdmUgdG9wLTAuNVwiIHNyYz1cIi9wcmljaW5nL2J1c2luZXNzLXBsYW4uc3ZnXCIgaGVpZ2h0PXsyNH0gd2lkdGg9ezI0fSAvPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1sLTJcIj5CdXNpbmVzcyBwbGFuPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWJhc2VsaW5lIG10LTMgdGV4dC1zbVwiPlxyXG4gICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwicmVsYXRpdmUgdG9wLTAuNVwiIHNyYz1cIi9wcmljaW5nL2Nhc2gtZmxvdzEuc3ZnXCIgaGVpZ2h0PXsyNH0gd2lkdGg9ezI0fSAvPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1sLTJcIj5DYXNoIGZsb3cgYW5hbHlzaXM8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtYmFzZWxpbmUgbXQtMyB0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJyZWxhdGl2ZSB0b3AtMC41XCIgc3JjPVwiL3ByaWNpbmcvY29tcGV0aXRvcnMuc3ZnXCIgaGVpZ2h0PXsyNH0gd2lkdGg9ezI0fSAvPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1sLTJcIj5Db21wZXRpdG9ycyBhbmFseXNpczwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgbXQtNCB0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgeyFvbldlZWtseUxvYWRpbmcgPyAoXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIC8vIG9uQ2xpY2s9e1xyXG4gICAgICAgICAgICAgICAgICAvLyAgIGFjdGl2ZVBsYW4gJiYgYWN0aXZlUGxhbi5yb2xlID09PSAnd2Vla2x5JyAmJiBhY3RpdmVQbGFuLnN0YXR1cyA9PT0gJ2FjdGl2ZSdcclxuICAgICAgICAgICAgICAgICAgLy8gICAgID8gb25CaWxsaW5nUG9ydGFsQ2xpY2syXHJcbiAgICAgICAgICAgICAgICAgIC8vICAgICA6ICgpID0+IGNyZWF0ZUNoZWNrb3V0U2Vzc2lvbldlZWtseShjdXJyZW50VXNlci51aWQpXHJcbiAgICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17b25CaWxsaW5nUG9ydGFsQ2xpY2syfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkYXJrOmhvdmVyOmJnLXByaW1hcnlkYXJrIGRhcms6aG92ZXI6dGV4dC1iYWNrZ3JvdW5kIGZvY3VzOm91dGxpbmUtbm9uZSBib3JkZXIgYm9yZGVyLXByaW1hcnkgdGV4dC1wcmltYXJ5IHB5LTIgcHgtNCByb3VuZGVkLTJ4bCBkYXJrOnRleHQtcHJpbWFyeWRhcmsgZGFyazpib3JkZXItcHJpbWFyeWRhcmsgZ3JvdXAtaG92ZXI6dGV4dC13aGl0ZSBncm91cC1ob3Zlcjpib3JkZXItcHJpbWFyeWRhcmsgaG92ZXI6YmctcHJpbWFyeWRhcmsgdHJhbnNpdGlvbiBkdXJhdGlvbi01MDAgbGluZWFyXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge2FjdGl2ZVBsYW4gJiYgYWN0aXZlUGxhbi5yb2xlID09PSAnd2Vla2x5JyAmJiBhY3RpdmVQbGFuLnN0YXR1cyA9PT0gJ2FjdGl2ZScgPyAnTWFuYWdlIHlvdXIgcGxhbicgOiAnU3RhcnQgd2Vla2x5IHBsYW4nfVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxCb3VuY2VMb2FkZXIgY29sb3I9eycjMGExMjMwJ30gc2l6ZT17MzZ9IC8+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHsvKiBNb250aGx5IHByaWNpbmcgcGxhbiAqL31cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgei01MCBncm91cCB3LWZ1bGwgcm91bmRlZC0yeGwgcHgtNiBweS00ICR7XHJcbiAgICAgICAgICAgICAgb25Nb250aGx5TG9hZGluZyA/ICd0ZXh0LXdoaXRlIGJnLXByaW1hcnknIDogJ3RleHQtcHJpbWFyeWRhcmsgYmctYmFja2dyb3VuZCdcclxuICAgICAgICAgICAgfSBob3ZlcjpiZy1wcmltYXJ5IGhvdmVyOnRleHQtd2hpdGUgdHJhbnNpdGlvbiBkdXJhdGlvbi01MDAgbGluZWFyYH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1leHRyYWJvbGRcIj5Nb250aGx5IHBsYW48L3A+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMlwiPlxyXG4gICAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B0ZXh0LTJ4bCAke1xyXG4gICAgICAgICAgICAgICAgICBvbk1vbnRobHlMb2FkaW5nID8gJ3RleHQtcHJpbWFyeWRhcmsnIDogJ3RleHQtZ3JheSdcclxuICAgICAgICAgICAgICAgIH0gaW5saW5lLWJsb2NrIGdyb3VwLWhvdmVyOnRleHQtcHJpbWFyeWRhcmsgdHJhbnNpdGlvbiBkdXJhdGlvbi01MDAgbGluZWFyYH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAkXHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtMnhsIGlubGluZS1ibG9jayBtbC0xXCI+MTk8L3A+XHJcbiAgICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7XHJcbiAgICAgICAgICAgICAgICAgIG9uTW9udGhseUxvYWRpbmcgPyAndGV4dC1wcmltYXJ5ZGFyaycgOiAndGV4dC1ncmF5J1xyXG4gICAgICAgICAgICAgICAgfSBpbmxpbmUtYmxvY2sgbWwtMiB0ZXh0LXNtIGdyb3VwLWhvdmVyOnRleHQtcHJpbWFyeWRhcmsgdHJhbnNpdGlvbiBkdXJhdGlvbi01MDAgbGluZWFyYH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAvXHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake1xyXG4gICAgICAgICAgICAgICAgICBvbk1vbnRobHlMb2FkaW5nID8gJ3RleHQtcHJpbWFyeWRhcmsnIDogJ3RleHQtZ3JheSdcclxuICAgICAgICAgICAgICAgIH0gaW5saW5lLWJsb2NrIG1sLTIgdGV4dC1zbSBncm91cC1ob3Zlcjp0ZXh0LXByaW1hcnlkYXJrIHRyYW5zaXRpb24gZHVyYXRpb24tNTAwIGxpbmVhcmB9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgbW9udGhcclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtYmFzZWxpbmUgbXQtNiB0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIvcHJpY2luZy9yb2NrZXQxLnN2Z1wiIGhlaWdodD17MjR9IHdpZHRoPXsyNH0gLz5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtbC0yIGZvbnQtc2VtaWJvbGQgaW5saW5lLWJsb2NrXCI+VW5saW1pdGVkPC9wPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1sLTEgaW5saW5lLWJsb2NrXCI+cHJvamVjdHM8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtYmFzZWxpbmUgbXQtMyB0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJyZWxhdGl2ZSB0b3AtMC41XCIgc3JjPVwiL3ByaWNpbmcvbWVtYmVycy5zdmdcIiBoZWlnaHQ9ezI0fSB3aWR0aD17MjR9IC8+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWwtMiBmb250LXNlbWlib2xkIGlubGluZS1ibG9ja1wiPlVubGltaXRlZDwvcD5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtbC0xIGlubGluZS1ibG9ja1wiPm1lbWJlcnM8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtYmFzZWxpbmUgbXQtMyB0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJyZWxhdGl2ZSB0b3AtMC41XCIgc3JjPVwiL3ByaWNpbmcvc3RhcnR1cC1pZGVhLnN2Z1wiIGhlaWdodD17MjR9IHdpZHRoPXsyNH0gLz5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtbC0yXCI+U3RhcnR1cCBpZGVhPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWJhc2VsaW5lIG10LTMgdGV4dC1zbVwiPlxyXG4gICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwicmVsYXRpdmUgdG9wLTAuNVwiIHNyYz1cIi9wcmljaW5nL2J1c2luZXNzLXBsYW4uc3ZnXCIgaGVpZ2h0PXsyNH0gd2lkdGg9ezI0fSAvPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1sLTJcIj5CdXNpbmVzcyBwbGFuPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWJhc2VsaW5lIG10LTMgdGV4dC1zbVwiPlxyXG4gICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwicmVsYXRpdmUgdG9wLTAuNVwiIHNyYz1cIi9wcmljaW5nL2Nhc2gtZmxvdzEuc3ZnXCIgaGVpZ2h0PXsyNH0gd2lkdGg9ezI0fSAvPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1sLTJcIj5DYXNoIGZsb3cgYW5hbHlzaXM8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtYmFzZWxpbmUgbXQtMyB0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJyZWxhdGl2ZSB0b3AtMC41XCIgc3JjPVwiL3ByaWNpbmcvY29tcGV0aXRvcnMuc3ZnXCIgaGVpZ2h0PXsyNH0gd2lkdGg9ezI0fSAvPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1sLTJcIj5Db21wZXRpdG9ycyBhbmFseXNpczwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgbXQtNCB0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgeyFvbk1vbnRobHlMb2FkaW5nID8gKFxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAvLyBvbkNsaWNrPXtcclxuICAgICAgICAgICAgICAgICAgLy8gICBhY3RpdmVQbGFuICYmIGFjdGl2ZVBsYW4ucm9sZSA9PT0gJ21vbnRobHknICYmIGFjdGl2ZVBsYW4uc3RhdHVzID09PSAnYWN0aXZlJ1xyXG4gICAgICAgICAgICAgICAgICAvLyAgICAgPyBvbkJpbGxpbmdQb3J0YWxDbGljazNcclxuICAgICAgICAgICAgICAgICAgLy8gICAgIDogKCkgPT4gY3JlYXRlQ2hlY2tvdXRTZXNzaW9uTW9udGhseShjdXJyZW50VXNlci51aWQpXHJcbiAgICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17b25CaWxsaW5nUG9ydGFsQ2xpY2szfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ6LTUwIGRhcms6aG92ZXI6YmctcHJpbWFyeWRhcmsgZGFyazpob3Zlcjp0ZXh0LWJhY2tncm91bmQgZm9jdXM6b3V0bGluZS1ub25lIGJvcmRlciBib3JkZXItcHJpbWFyeSB0ZXh0LXByaW1hcnkgcHktMiBweC00IHJvdW5kZWQtMnhsIGRhcms6dGV4dC1wcmltYXJ5ZGFyayBkYXJrOmJvcmRlci1wcmltYXJ5ZGFyayBncm91cC1ob3Zlcjp0ZXh0LXdoaXRlIGdyb3VwLWhvdmVyOmJvcmRlci1wcmltYXJ5ZGFyayBob3ZlcjpiZy1wcmltYXJ5ZGFyayB0cmFuc2l0aW9uIGR1cmF0aW9uLTUwMCBsaW5lYXJcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7YWN0aXZlUGxhbiAmJiBhY3RpdmVQbGFuLnJvbGUgPT09ICdtb250aGx5JyAmJiBhY3RpdmVQbGFuLnN0YXR1cyA9PT0gJ2FjdGl2ZSdcclxuICAgICAgICAgICAgICAgICAgICA/ICdNYW5hZ2UgeW91ciBwbGFuJ1xyXG4gICAgICAgICAgICAgICAgICAgIDogJ1N0YXJ0IG1vbnRobHkgcGxhbid9XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPEJvdW5jZUxvYWRlciBjb2xvcj17JyMwYTEyMzAnfSBzaXplPXszNn0gLz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgey8qIFllYXJseSBwcmljaW5nIHBsYW4gKi99XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGdyb3VwIHctZnVsbCByb3VuZGVkLTJ4bCBweC02IHB5LTQgJHtcclxuICAgICAgICAgICAgICBvblllYXJseUxvYWRpbmcgPyAndGV4dC13aGl0ZSBiZy1wcmltYXJ5JyA6ICd0ZXh0LXByaW1hcnlkYXJrIGJnLWJhY2tncm91bmQnXHJcbiAgICAgICAgICAgIH0gaG92ZXI6YmctcHJpbWFyeSBob3Zlcjp0ZXh0LXdoaXRlIHRyYW5zaXRpb24gZHVyYXRpb24tNTAwIGxpbmVhcmB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtZXh0cmFib2xkXCI+WWVhcmx5IHBsYW48L3A+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMlwiPlxyXG4gICAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake1xyXG4gICAgICAgICAgICAgICAgICBvblllYXJseUxvYWRpbmcgPyAndGV4dC1wcmltYXJ5ZGFyaycgOiAndGV4dC1ncmF5J1xyXG4gICAgICAgICAgICAgICAgfSB0ZXh0LTJ4bCBpbmxpbmUtYmxvY2sgZ3JvdXAtaG92ZXI6dGV4dC1wcmltYXJ5ZGFyayB0cmFuc2l0aW9uIGR1cmF0aW9uLTUwMCBsaW5lYXJgfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICRcclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC0yeGwgaW5saW5lLWJsb2NrIG1sLTFcIj4xMTk8L3A+XHJcbiAgICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7XHJcbiAgICAgICAgICAgICAgICAgIG9uWWVhcmx5TG9hZGluZyA/ICd0ZXh0LXByaW1hcnlkYXJrJyA6ICd0ZXh0LWdyYXknXHJcbiAgICAgICAgICAgICAgICB9IGlubGluZS1ibG9jayBtbC0yIHRleHQtc20gZ3JvdXAtaG92ZXI6dGV4dC1wcmltYXJ5ZGFyayB0cmFuc2l0aW9uIGR1cmF0aW9uLTUwMCBsaW5lYXJgfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIC9cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7XHJcbiAgICAgICAgICAgICAgICAgIG9uWWVhcmx5TG9hZGluZyA/ICd0ZXh0LXByaW1hcnlkYXJrJyA6ICd0ZXh0LWdyYXknXHJcbiAgICAgICAgICAgICAgICB9IGlubGluZS1ibG9jayBtbC0yIHRleHQtc20gZ3JvdXAtaG92ZXI6dGV4dC1wcmltYXJ5ZGFyayB0cmFuc2l0aW9uIGR1cmF0aW9uLTUwMCBsaW5lYXJgfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHllYXJcclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtYmFzZWxpbmUgbXQtNiB0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIvcHJpY2luZy9yb2NrZXQxLnN2Z1wiIGhlaWdodD17MjR9IHdpZHRoPXsyNH0gLz5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtbC0yIGZvbnQtc2VtaWJvbGQgaW5saW5lLWJsb2NrXCI+VW5saW1pdGVkPC9wPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1sLTEgaW5saW5lLWJsb2NrXCI+cHJvamVjdHM8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtYmFzZWxpbmUgbXQtMyB0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJyZWxhdGl2ZSB0b3AtMC41XCIgc3JjPVwiL3ByaWNpbmcvbWVtYmVycy5zdmdcIiBoZWlnaHQ9ezI0fSB3aWR0aD17MjR9IC8+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWwtMiBmb250LXNlbWlib2xkIGlubGluZS1ibG9ja1wiPlVubGltaXRlZDwvcD5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtbC0xIGlubGluZS1ibG9ja1wiPm1lbWJlcnM8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtYmFzZWxpbmUgbXQtMyB0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJyZWxhdGl2ZSB0b3AtMC41XCIgc3JjPVwiL3ByaWNpbmcvc3RhcnR1cC1pZGVhLnN2Z1wiIGhlaWdodD17MjR9IHdpZHRoPXsyNH0gLz5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtbC0yXCI+U3RhcnR1cCBpZGVhPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWJhc2VsaW5lIG10LTMgdGV4dC1zbVwiPlxyXG4gICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwicmVsYXRpdmUgdG9wLTAuNVwiIHNyYz1cIi9wcmljaW5nL2J1c2luZXNzLXBsYW4uc3ZnXCIgaGVpZ2h0PXsyNH0gd2lkdGg9ezI0fSAvPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1sLTJcIj5CdXNpbmVzcyBwbGFuPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWJhc2VsaW5lIG10LTMgdGV4dC1zbVwiPlxyXG4gICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwicmVsYXRpdmUgdG9wLTAuNVwiIHNyYz1cIi9wcmljaW5nL2Nhc2gtZmxvdzEuc3ZnXCIgaGVpZ2h0PXsyNH0gd2lkdGg9ezI0fSAvPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1sLTJcIj5DYXNoIGZsb3cgYW5hbHlzaXM8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtYmFzZWxpbmUgbXQtMyB0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJyZWxhdGl2ZSB0b3AtMC41XCIgc3JjPVwiL3ByaWNpbmcvY29tcGV0aXRvcnMuc3ZnXCIgaGVpZ2h0PXsyNH0gd2lkdGg9ezI0fSAvPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1sLTJcIj5Db21wZXRpdG9ycyBhbmFseXNpczwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgbXQtNCB0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgeyFvblllYXJseUxvYWRpbmcgPyAoXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIC8vIG9uQ2xpY2s9e1xyXG4gICAgICAgICAgICAgICAgICAvLyAgIGFjdGl2ZVBsYW4gJiYgYWN0aXZlUGxhbi5yb2xlID09PSAneWVhcmx5JyAmJiBhY3RpdmVQbGFuLnN0YXR1cyA9PT0gJ2FjdGl2ZSdcclxuICAgICAgICAgICAgICAgICAgLy8gICAgID8gb25CaWxsaW5nUG9ydGFsQ2xpY2s0XHJcbiAgICAgICAgICAgICAgICAgIC8vICAgICA6ICgpID0+IGNyZWF0ZUNoZWNrb3V0U2Vzc2lvblllYXJseShjdXJyZW50VXNlci51aWQpXHJcbiAgICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17b25CaWxsaW5nUG9ydGFsQ2xpY2s0fVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkYXJrOmhvdmVyOmJnLXByaW1hcnlkYXJrIGRhcms6aG92ZXI6dGV4dC1iYWNrZ3JvdW5kIGZvY3VzOm91dGxpbmUtbm9uZSBib3JkZXIgYm9yZGVyLXByaW1hcnkgdGV4dC1wcmltYXJ5IHB5LTIgcHgtNCByb3VuZGVkLTJ4bCBkYXJrOnRleHQtcHJpbWFyeWRhcmsgZGFyazpib3JkZXItcHJpbWFyeWRhcmsgZ3JvdXAtaG92ZXI6dGV4dC13aGl0ZSBncm91cC1ob3Zlcjpib3JkZXItcHJpbWFyeWRhcmsgaG92ZXI6YmctcHJpbWFyeWRhcmsgdHJhbnNpdGlvbiBkdXJhdGlvbi01MDAgbGluZWFyXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge2FjdGl2ZVBsYW4gJiYgYWN0aXZlUGxhbi5yb2xlID09PSAneWVhcmx5JyAmJiBhY3RpdmVQbGFuLnN0YXR1cyA9PT0gJ2FjdGl2ZScgPyAnTWFuYWdlIHlvdXIgcGxhbicgOiAnU3RhcnQgeWVhcmx5IHBsYW4nfVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxCb3VuY2VMb2FkZXIgY29sb3I9eycjMGExMjMwJ30gc2l6ZT17MzZ9IC8+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJpY2luZ1BhZ2U7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=