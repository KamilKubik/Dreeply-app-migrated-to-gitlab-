webpackHotUpdate_N_E("pages/dashboard/projects/[project]/cash-flow/[id]",{

/***/ "./pages/dashboard/projects/[project]/cash-flow/[id].js":
/*!**************************************************************!*\
  !*** ./pages/dashboard/projects/[project]/cash-flow/[id].js ***!
  \**************************************************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-plugin-superjson-next/tools */ "./node_modules/babel-plugin-superjson-next/tools.js");
/* harmony import */ var babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../lib/firebase */ "./lib/firebase.js");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-device-detect */ "./node_modules/react-device-detect/main.js");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_device_detect__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_dashboard_startup_project_business_app_competitors_UniqueElement__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../components/dashboard/startup/project/business-app/competitors/UniqueElement */ "./components/dashboard/startup/project/business-app/competitors/UniqueElement.js");
/* harmony import */ var _components_BounceLoader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../components/BounceLoader */ "./components/BounceLoader.js");
/* harmony import */ var _utils_useWindowSize__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../utils/useWindowSize */ "./utils/useWindowSize.js");





var _jsxFileName = "C:\\off-saas\\pages\\dashboard\\projects\\[project]\\cash-flow\\[id].js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










var UniqueCashflowPage = function UniqueCashflowPage(_ref) {
  _s();

  var project = _ref.project;
  console.log('Particular project --> ', project);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      startDate = _useState[0],
      setStartDate = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      endDate = _useState2[0],
      setEndDate = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      selectedProject = _useState3[0],
      setSelectedProject = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(),
      revenueElements = _useState4[0],
      setRevenueElements = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(),
      costsElements = _useState5[0],
      setCostsElements = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(),
      periods = _useState6[0],
      setPeriods = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(),
      tax = _useState7[0],
      setTax = _useState7[1];

  var size = Object(_utils_useWindowSize__WEBPACK_IMPORTED_MODULE_10__["useWindowSize"])(); // Sum data

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(),
      totalRevenue = _useState8[0],
      setTotalRevenue = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(),
      monthlyRevenue = _useState9[0],
      setMonthlyRevenue = _useState9[1];

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(),
      totalCosts = _useState10[0],
      setTotalCosts = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(),
      monthlyCosts = _useState11[0],
      setMonthlyCosts = _useState11[1];

  var _useState12 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(),
      grossProfit = _useState12[0],
      setGrossProfit = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(),
      netProfit = _useState13[0],
      setNetProfit = _useState13[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    project && setSelectedProject(project[0]);
    project && setRevenueElements(project[0].revenueElements);
    project && setCostsElements(project[0].costsElements);
    project && setPeriods(project[0].periods);
    project && setTax(project[0].tax); // Sum data
    // Global start date

    var changedStartDate = project[0].globalStartDate.seconds * 1000;
    project[0].globalStartDate !== '' && setStartDate(new Date(changedStartDate));
    var changedEndDate = project[0].globalEndDate.seconds * 1000; // Global end date

    project[0].globalEndDate !== '' && setEndDate(new Date(changedEndDate)); // Periods

    setPeriods(project[0].periods); // Total revenue

    var totalRevenueArray = project[0].revenueElements.map(function (element) {
      return parseInt(element.value * element.periods.length);
    });
    var totalRevenue = totalRevenueArray.reduce(function (a, b) {
      return a + b;
    }, 0);
    setTotalRevenue(Number.isNaN(totalRevenue) ? 0 : Math.round(totalRevenue)); // Monthly revenue

    var periodLength = project[0].periods.length;
    var monthlyRevenue = totalRevenue / periodLength;
    setMonthlyRevenue(Number.isNaN(monthlyRevenue) ? 0 : Math.round(monthlyRevenue)); // Total costs

    var totalCostsArray = project[0].costsElements.map(function (element) {
      return parseInt(element.value * element.periods.length);
    });
    var totalCosts = totalCostsArray.reduce(function (a, b) {
      return a + b;
    }, 0);
    setTotalCosts(Number.isFinite(totalCosts) ? Math.round(totalCosts) : 0); // Monthly costs

    var monthlyCosts = totalCosts / periodLength;
    setMonthlyCosts(Number.isFinite(monthlyCosts) ? Math.round(monthlyCosts) : 0); // Gross profit

    var grossProfit = totalRevenue - totalCosts;
    setGrossProfit(Number.isFinite(grossProfit) ? Math.round(grossProfit) : 0); // Net profit

    var tax = parseInt(project[0].tax);
    var netProfit = grossProfit - tax / 100 * grossProfit;
    setNetProfit(Number.isFinite(netProfit) ? Math.round(netProfit) : 0);
  }, [project]); //   const [competitors, setCompetitors] = useState([]);

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();
  console.log(selectedProject);
  console.log(revenueElements);
  console.log(grossProfit);
  console.log(netProfit);

  if (router.isFallback) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_BounceLoader__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 12
    }, _this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    className: "min-h-screen w-full relative flex flex-col items-center",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "w-full max-w-full relative mt-12 lg1Container:mt-16 mb-16 px-32",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "relative grid grid-cols-2 grid-rows-1 grid-flow-col",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "flex items-center",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("svg", {
            height: size.width > 860 && 30 || size.width < 860 && size.width > 680 && 26 || size.width < 680 && 22,
            width: size.width > 860 && 30 || size.width < 860 && size.width > 680 && 26 || size.width < 680 && 22,
            className: "fill-current text-primary dark:text-primarydark",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 128 128",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("title", {
              children: "Landing Success"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("g", {
              id: "Landing_Success",
              "data-name": "Landing Success",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("path", {
                className: "cls-1",
                d: "M109.3,90.1A46,46,0,0,0,65,36V20.08c1.78-.62,7.21-2.14,12.57.23a19.33,19.33,0,0,0,14.82,0c.87-.38.61.31.61-17.93a1,1,0,0,0-1.43-.93c-.07,0-6.69,2.87-13.18,0A19.41,19.41,0,0,0,65,.93,1,1,0,0,0,63,1V36a45.86,45.86,0,0,0-28.66,10.8C16.18,40.48,4,40,.79,45.51-2.29,50.86,3.94,59.3,10,65.68A11,11,0,0,0,18,83c.81,38.41,46.08,59.2,75.66,34.21,8.53,3,29,9.15,33.55,1.31C130.39,113,123.86,102.65,109.3,90.1ZM77.59,3.31A19.39,19.39,0,0,0,91,3.83V18.68c-1.79.62-7.22,2.13-12.57-.23A19.19,19.19,0,0,0,65,17.93V3.08C66.81,2.46,72.24,1,77.59,3.31ZM65,45v-7c39.69.91,58,50.27,28.21,76.81C71.32,107,46,92.66,27.77,78.64a11,11,0,0,0-3.2-16.13A43.88,43.88,0,0,1,63,38.06V45A1,1,0,0,0,65,45ZM32.55,48.36a46.21,46.21,0,0,0-9.83,13.28,10.93,10.93,0,0,0-11.4,2.47C-8.39,43.23,5.23,39.08,32.55,48.36ZM10,72a9,9,0,1,1,9,9A9,9,0,0,1,10,72Zm10,11a11,11,0,0,0,6.34-2.82c18.45,14.21,43.45,28.35,65.05,36.22C63,139.16,20.83,119.1,20.05,83Zm105.4,34.5c-2.51,4.35-14,3.62-30-1.85a45.61,45.61,0,0,0,13.42-23.21C121.59,103.58,128,113.12,125.45,117.47Z"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 96,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
            className: "text-primarydark text-lg mdContainer:text-xl lgContainer:text-2xl mt-2 pl-2 dark:text-background",
            children: "Cash flow analysis"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h1", {
          className: "text-secondary text-xs mdContainer:text-sm lgContainer:text-base text-gray relative -top-1 lgContainer:top-0",
          children: "Manage your startup cash flow"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "w-full grid grid-cols-2fr grid-rows-1fr lgContainer:grid-cols-3fr lgContainer:grid-rows-1fr gap-y-8 gap-x-6 smContainer:gap-x-32 mdContainer:gap-x-12 mt-12",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          id: "main-datepicker",
          className: "w-full bg-white rounded-2xl py-3 px-3 mdContainer:py-3 mdContainer:px-4 lgContainer:px-6 lgContainer:py-4 shadow-md grid grid-cols-2fr items-center text-xs mdContainer:text-sm lgContainer:text-base",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "flex items-center",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
              src: "/cash-flow/calendar.svg",
              height: size.width > 860 && 25 || size.width < 860 && size.width > 680 && 22 || size.width < 680 && 18,
              width: size.width > 860 && 25 || size.width < 860 && size.width > 680 && 22 || size.width < 680 && 18
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 118,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
              className: "ml-2 text-primarydark",
              children: "Start:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 123,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 13
          }, _this), startDate && !react_device_detect__WEBPACK_IMPORTED_MODULE_5__["isMobile"] ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(DatePicker, {
            selected: startDate,
            onChange: function onChange(date) {
              return onStartDateUpdate(date);
            },
            dateFormat: "MMMM yyyy",
            showMonthYearPicker: true,
            maxDate: addYears(new Date(), 3),
            minDate: new Date()
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 15
          }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(DatePicker, {
            selected: startDate,
            onChange: function onChange(date) {
              return onStartDateUpdate(date);
            },
            dateFormat: "MMMM yyyy",
            showMonthYearPicker: true,
            maxDate: addYears(new Date(), 3),
            minDate: new Date(),
            withPortal: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          id: "main-datepicker",
          className: "w-full bg-white rounded-2xl py-3 px-3 mdContainer:py-3 mdContainer:px-4 lgContainer:px-6 lgContainer:py-4 shadow-md grid grid-cols-2fr items-center text-xs mdContainer:text-sm lgContainer:text-base",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "flex items-center",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
              src: "/cash-flow/hourglass1.svg",
              height: size.width > 860 && 25 || size.width < 860 && size.width > 680 && 22 || size.width < 680 && 18,
              width: size.width > 860 && 25 || size.width < 860 && size.width > 680 && 22 || size.width < 680 && 18
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 151,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
              className: "ml-2 text-primarydark",
              children: "End:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 156,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 150,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          style: {
            width: size.width > 860 && '100%' || size.width < 860 && size.width > 680 && '47%' || size.width < 680 && size.width > 520 && '40%' || size.width < 520 && '47%',
            gridColumnStart: size.width < 860 ? '1' : 'unset',
            gridColumnEnd: size.width < 860 ? '3' : 'unset'
          },
          className: "place-self-center bg-white rounded-2xl py-3 px-3 mdContainer:py-3 mdContainer:px-4 lgContainer:px-6 lgContainer:py-4 shadow-md grid grid-cols-2fr items-center text-xs mdContainer:text-sm lgContainer:text-base",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "flex items-center",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
              src: "/cash-flow/tax.svg",
              height: size.width > 860 && 25 || size.width < 860 && size.width > 680 && 22 || size.width < 680 && 18,
              width: size.width > 860 && 25 || size.width < 860 && size.width > 680 && 22 || size.width < 680 && 18
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 192,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
              className: "ml-2",
              children: "Tax:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 197,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 191,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "flex",
            style: {
              textAlignLast: 'right'
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
              id: "tax-input",
              value: selectedProject.tax,
              className: "w-full bg-white focus:outline-none"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 200,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
              children: "%"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 201,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 199,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 179,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        id: "chartContainer",
        className: "w-full h-1/2 p-4 mdContainer:p-8 bg-white rounded-2xl mt-12 shadow-md"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "w-full grid grid-cols-2fr grid-rows-3fr lg1Container:grid-cols-3fr lg1Container:grid-rows-2fr gap-x-6 smContainer:gap-x-12 gap-y-8 mt-12",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "w-full bg-white rounded-2xl py-3 px-3 mdContainer:py-3 mdContainer:px-4 lgContainer:px-6 lgContainer:py-4 shadow-md flex justify-between items-center text-xs mdContainer:text-sm lgContainer:text-base",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "flex items-center",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
              src: "/cash-flow/revenue.svg",
              height: size.width > 860 && 25 || size.width < 860 && size.width > 680 && 22 || size.width < 680 && 18,
              width: size.width > 860 && 25 || size.width < 860 && size.width > 680 && 22 || size.width < 680 && 18
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 211,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
              className: "ml-2",
              children: "Total revenue:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 216,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 210,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
            children: ["$", totalRevenue]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 218,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 209,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "w-full bg-white rounded-2xl py-3 px-3 mdContainer:py-3 mdContainer:px-4 lgContainer:px-6 lgContainer:py-4 shadow-md flex justify-between items-center text-xs mdContainer:text-sm lgContainer:text-base",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "flex items-center",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
              src: "/cash-flow/monthly.svg",
              height: size.width > 860 && 25 || size.width < 860 && size.width > 680 && 22 || size.width < 680 && 18,
              width: size.width > 860 && 25 || size.width < 860 && size.width > 680 && 22 || size.width < 680 && 18
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 222,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
              className: "ml-2",
              children: "Monthly revenue:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 227,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 221,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
            children: ["$", monthlyRevenue]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 229,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 220,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "w-full bg-white rounded-2xl py-3 px-3 mdContainer:py-3 mdContainer:px-4 lgContainer:px-6 lgContainer:py-4 shadow-md flex justify-between items-center text-xs mdContainer:text-sm lgContainer:text-base",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "flex items-center",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
              src: "/cash-flow/costs.svg",
              height: size.width > 860 && 25 || size.width < 860 && size.width > 680 && 22 || size.width < 680 && 18,
              width: size.width > 860 && 25 || size.width < 860 && size.width > 680 && 22 || size.width < 680 && 18
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 233,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
              className: "ml-2",
              children: "Total costs:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 238,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 232,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
            children: ["$", totalCosts]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 240,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 231,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "w-full bg-white rounded-2xl py-3 px-3 mdContainer:py-3 mdContainer:px-4 lgContainer:px-6 lgContainer:py-4 shadow-md flex justify-between items-center text-xs mdContainer:text-sm lgContainer:text-base",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "flex items-center",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
              src: "/cash-flow/monthly-costs.svg",
              height: size.width > 860 && 25 || size.width < 860 && size.width > 680 && 22 || size.width < 680 && 18,
              width: size.width > 860 && 25 || size.width < 860 && size.width > 680 && 22 || size.width < 680 && 18
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 244,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
              className: "ml-2",
              children: "Monthly costs:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 249,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 243,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
            children: ["$", monthlyCosts]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 251,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 242,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "w-full bg-white rounded-2xl py-3 px-3 mdContainer:py-3 mdContainer:px-4 lgContainer:px-6 lgContainer:py-4 shadow-md flex justify-between items-center text-xs mdContainer:text-sm lgContainer:text-base",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "flex items-center",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
              src: "/cash-flow/megaphone.svg",
              height: size.width > 860 && 25 || size.width < 860 && size.width > 680 && 22 || size.width < 680 && 18,
              width: size.width > 860 && 25 || size.width < 860 && size.width > 680 && 22 || size.width < 680 && 18
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 255,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
              className: "ml-2",
              children: "Gross profit:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 260,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 254,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
            children: ["$", grossProfit]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 262,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 253,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "w-full bg-white rounded-2xl py-3 px-3 mdContainer:py-3 mdContainer:px-4 lgContainer:px-6 lgContainer:py-4 shadow-md flex justify-between items-center text-xs mdContainer:text-sm lgContainer:text-base",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "flex items-center",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
              src: "/cash-flow/net-worth.svg",
              height: size.width > 860 && 25 || size.width < 860 && size.width > 680 && 22 || size.width < 680 && 18,
              width: size.width > 860 && 25 || size.width < 860 && size.width > 680 && 22 || size.width < 680 && 18
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 266,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
              className: "ml-2",
              children: "Net profit:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 271,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 265,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
            children: ["$", netProfit]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 273,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 264,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        ref: revenueRef,
        style: {
          height: 55
        },
        className: "overflow-hidden relative w-full rounded-2xl bg-white dark:bg-background px-4 py-4 flex justify-center items-center mt-12 flex flex-wrap shadow-md",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "w-full flex justify-between items-center",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "lgContainer:ml-2",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
              className: "text-sm lgContainer:text-base",
              children: "Revenue"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 284,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 283,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "lgContainer:mr-2 flex flex-nowrap items-center",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
              onClick: onRevenueElementAdd,
              className: "cursor-pointer",
              src: "/cash-flow/add.svg",
              height: size.width > 860 && 22 || size.width < 860 && size.width > 680 && 18 || size.width < 680 && 16,
              width: size.width > 860 && 22 || size.width < 860 && size.width > 680 && 18 || size.width < 680 && 16
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 287,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
              ref: dropDownIcon,
              onClick: onRevenueShow,
              className: "ml-2 cursor-pointer",
              src: "/cash-flow/dropdown.svg",
              height: size.width > 860 && 22 || size.width < 860 && size.width > 680 && 18 || size.width < 680 && 16,
              width: size.width > 860 && 22 || size.width < 860 && size.width > 680 && 18 || size.width < 680 && 16
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 294,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 286,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 282,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          ref: innerContainerRevenueRef,
          className: "w-full ".concat(size.width < 1120 ? 'text-sm mdContainer:text-base lg1Container:mx-8 lg1Container:mb-6 mt-4  bg-background rounded-2xl px-4 mdContainer:px-6 py-4' : 'w-full mx-8 mb-6 mt-4  bg-background rounded-2xl px-4 mdContainer:px-6 py-4'),
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            style: {
              fontSize: size.width < 520 && '0.6rem'
            },
            className: "w-full grid grid-cols-6fr items-center text-xs mdContainer:text-sm lg1Container:text-base",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              children: "name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 317,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              children: "type"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 318,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              children: "amount"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 319,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              children: "start"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 320,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              children: "end"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 321,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 322,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 313,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("hr", {
            className: "text-primary w-full"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 324,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "h-full w-full rounded-2xl flex flex-wrap flex-col",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(DragDropContext, {
              onDragEnd: handleOnDragEnd,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Droppable, {
                droppableId: "elements",
                children: function children(provided) {
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", _objectSpread(_objectSpread({
                    className: "elements"
                  }, provided.droppableProps), {}, {
                    ref: provided.innerRef,
                    children: [revenueElements && revenueElements.map(function (element, index) {
                      console.log(element);
                      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Draggable, {
                        draggableId: element.index,
                        index: index,
                        children: function children(provided) {
                          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(RevenueElement, {
                            provided: provided,
                            setRevenueElements: setRevenueElements,
                            mainDocument: mainDocument,
                            projectId: projectId,
                            documentId: documentId,
                            revenueElements: revenueElements,
                            element: element,
                            index: index
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 336,
                            columnNumber: 33
                          }, _this);
                        }
                      }, element.index, false, {
                        fileName: _jsxFileName,
                        lineNumber: 334,
                        columnNumber: 29
                      }, _this);
                    }), provided.placeholder]
                  }), void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 329,
                    columnNumber: 21
                  }, _this);
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 327,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 326,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 325,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 304,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 277,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        ref: costsRef,
        style: {
          height: 55
        },
        className: "overflow-hidden relative w-full rounded-2xl bg-white dark:bg-background px-4 py-4 flex justify-center items-center mt-8 flex flex-wrap shadow-md",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "w-full flex justify-between items-center",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "lgContainer:ml-2",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
              className: "text-sm lgContainer:text-base",
              children: "Costs"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 366,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 365,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "lgContainer:mr-2 flex flex-nowrap items-center",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
              onClick: onCostsElementAdd,
              className: "cursor-pointer",
              src: "/cash-flow/add.svg",
              height: size.width > 860 && 22 || size.width < 860 && size.width > 680 && 18 || size.width < 680 && 16,
              width: size.width > 860 && 22 || size.width < 860 && size.width > 680 && 18 || size.width < 680 && 16
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 369,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
              ref: dropDownIconCosts,
              onClick: onCostsShow,
              className: "ml-2 cursor-pointer",
              src: "/cash-flow/dropdown.svg",
              height: size.width > 860 && 22 || size.width < 860 && size.width > 680 && 18 || size.width < 680 && 16,
              width: size.width > 860 && 22 || size.width < 860 && size.width > 680 && 18 || size.width < 680 && 16
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 376,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 368,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 364,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          ref: innerContainerCostsRef,
          className: "w-full ".concat(size.width < 1120 ? 'text-sm mdContainer:text-base lg1Container:mx-8 lg1Container:mb-6 mt-4  bg-background rounded-2xl px-4 mdContainer:px-6 py-4' : 'w-full mx-8 mb-6 mt-4  bg-background rounded-2xl px-4 mdContainer:px-6 py-4'),
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "w-full grid grid-cols-6fr items-center",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              children: "name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 396,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              children: "type"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 397,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              children: "amount"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 398,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              children: "start"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 399,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              children: "end"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 400,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 401,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 395,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("hr", {
            className: "text-primary w-full"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 403,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "h-full w-full rounded-2xl flex flex-wrap flex-col",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(DragDropContext, {
              onDragEnd: costsHandleOnDragEnd,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Droppable, {
                droppableId: "elements",
                children: function children(provided) {
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", _objectSpread(_objectSpread({
                    className: "elements"
                  }, provided.droppableProps), {}, {
                    ref: provided.innerRef,
                    children: [costsElements && costsElements.map(function (element, index) {
                      console.log(element);
                      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Draggable, {
                        draggableId: element.index,
                        index: index,
                        children: function children(provided) {
                          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(CostsElement, {
                            provided: provided,
                            setCostsElements: setCostsElements,
                            mainDocument: mainDocument,
                            projectId: projectId,
                            documentId: documentId,
                            costsElements: costsElements,
                            element: element,
                            index: index
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 415,
                            columnNumber: 33
                          }, _this);
                        }
                      }, element.index, false, {
                        fileName: _jsxFileName,
                        lineNumber: 413,
                        columnNumber: 29
                      }, _this);
                    }), provided.placeholder]
                  }), void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 408,
                    columnNumber: 21
                  }, _this);
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 406,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 405,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 404,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 386,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 359,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 83,
    columnNumber: 5
  }, _this);
};

_s(UniqueCashflowPage, "DaH743c7i1Es8J+XIdISHNlpFzs=", false, function () {
  return [_utils_useWindowSize__WEBPACK_IMPORTED_MODULE_10__["useWindowSize"], next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"]];
});

_c = UniqueCashflowPage;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_2__["withSuperJSONPage"])(UniqueCashflowPage));

var _c, _c2;

$RefreshReg$(_c, "UniqueCashflowPage");
$RefreshReg$(_c2, "%default%");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGFzaGJvYXJkL3Byb2plY3RzL1twcm9qZWN0XS9jYXNoLWZsb3cvLmpzIl0sIm5hbWVzIjpbIlVuaXF1ZUNhc2hmbG93UGFnZSIsInByb2plY3QiLCJjb25zb2xlIiwibG9nIiwidXNlU3RhdGUiLCJzdGFydERhdGUiLCJzZXRTdGFydERhdGUiLCJlbmREYXRlIiwic2V0RW5kRGF0ZSIsInNlbGVjdGVkUHJvamVjdCIsInNldFNlbGVjdGVkUHJvamVjdCIsInJldmVudWVFbGVtZW50cyIsInNldFJldmVudWVFbGVtZW50cyIsImNvc3RzRWxlbWVudHMiLCJzZXRDb3N0c0VsZW1lbnRzIiwicGVyaW9kcyIsInNldFBlcmlvZHMiLCJ0YXgiLCJzZXRUYXgiLCJzaXplIiwidXNlV2luZG93U2l6ZSIsInRvdGFsUmV2ZW51ZSIsInNldFRvdGFsUmV2ZW51ZSIsIm1vbnRobHlSZXZlbnVlIiwic2V0TW9udGhseVJldmVudWUiLCJ0b3RhbENvc3RzIiwic2V0VG90YWxDb3N0cyIsIm1vbnRobHlDb3N0cyIsInNldE1vbnRobHlDb3N0cyIsImdyb3NzUHJvZml0Iiwic2V0R3Jvc3NQcm9maXQiLCJuZXRQcm9maXQiLCJzZXROZXRQcm9maXQiLCJ1c2VFZmZlY3QiLCJjaGFuZ2VkU3RhcnREYXRlIiwiZ2xvYmFsU3RhcnREYXRlIiwic2Vjb25kcyIsIkRhdGUiLCJjaGFuZ2VkRW5kRGF0ZSIsImdsb2JhbEVuZERhdGUiLCJ0b3RhbFJldmVudWVBcnJheSIsIm1hcCIsImVsZW1lbnQiLCJwYXJzZUludCIsInZhbHVlIiwibGVuZ3RoIiwicmVkdWNlIiwiYSIsImIiLCJOdW1iZXIiLCJpc05hTiIsIk1hdGgiLCJyb3VuZCIsInBlcmlvZExlbmd0aCIsInRvdGFsQ29zdHNBcnJheSIsImlzRmluaXRlIiwicm91dGVyIiwidXNlUm91dGVyIiwiaXNGYWxsYmFjayIsIndpZHRoIiwiaXNNb2JpbGUiLCJkYXRlIiwib25TdGFydERhdGVVcGRhdGUiLCJhZGRZZWFycyIsImdyaWRDb2x1bW5TdGFydCIsImdyaWRDb2x1bW5FbmQiLCJ0ZXh0QWxpZ25MYXN0IiwicmV2ZW51ZVJlZiIsImhlaWdodCIsIm9uUmV2ZW51ZUVsZW1lbnRBZGQiLCJkcm9wRG93bkljb24iLCJvblJldmVudWVTaG93IiwiaW5uZXJDb250YWluZXJSZXZlbnVlUmVmIiwiZm9udFNpemUiLCJoYW5kbGVPbkRyYWdFbmQiLCJwcm92aWRlZCIsImRyb3BwYWJsZVByb3BzIiwiaW5uZXJSZWYiLCJpbmRleCIsIm1haW5Eb2N1bWVudCIsInByb2plY3RJZCIsImRvY3VtZW50SWQiLCJwbGFjZWhvbGRlciIsImNvc3RzUmVmIiwib25Db3N0c0VsZW1lbnRBZGQiLCJkcm9wRG93bkljb25Db3N0cyIsIm9uQ29zdHNTaG93IiwiaW5uZXJDb250YWluZXJDb3N0c1JlZiIsImNvc3RzSGFuZGxlT25EcmFnRW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLElBQU1BLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsT0FBaUI7QUFBQTs7QUFBQSxNQUFkQyxPQUFjLFFBQWRBLE9BQWM7QUFDMUNDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLHlCQUFaLEVBQXVDRixPQUF2Qzs7QUFEMEMsa0JBRVJHLHNEQUFRLENBQUMsSUFBRCxDQUZBO0FBQUEsTUFFbkNDLFNBRm1DO0FBQUEsTUFFeEJDLFlBRndCOztBQUFBLG1CQUdaRixzREFBUSxDQUFDLElBQUQsQ0FISTtBQUFBLE1BR25DRyxPQUhtQztBQUFBLE1BRzFCQyxVQUgwQjs7QUFBQSxtQkFJSUosc0RBQVEsQ0FBQyxJQUFELENBSlo7QUFBQSxNQUluQ0ssZUFKbUM7QUFBQSxNQUlsQkMsa0JBSmtCOztBQUFBLG1CQUtJTixzREFBUSxFQUxaO0FBQUEsTUFLbkNPLGVBTG1DO0FBQUEsTUFLbEJDLGtCQUxrQjs7QUFBQSxtQkFNQVIsc0RBQVEsRUFOUjtBQUFBLE1BTW5DUyxhQU5tQztBQUFBLE1BTXBCQyxnQkFOb0I7O0FBQUEsbUJBT1pWLHNEQUFRLEVBUEk7QUFBQSxNQU9uQ1csT0FQbUM7QUFBQSxNQU8xQkMsVUFQMEI7O0FBQUEsbUJBUXBCWixzREFBUSxFQVJZO0FBQUEsTUFRbkNhLEdBUm1DO0FBQUEsTUFROUJDLE1BUjhCOztBQVMxQyxNQUFNQyxJQUFJLEdBQUdDLDJFQUFhLEVBQTFCLENBVDBDLENBVTFDOztBQVYwQyxtQkFXRmhCLHNEQUFRLEVBWE47QUFBQSxNQVduQ2lCLFlBWG1DO0FBQUEsTUFXckJDLGVBWHFCOztBQUFBLG1CQVlFbEIsc0RBQVEsRUFaVjtBQUFBLE1BWW5DbUIsY0FabUM7QUFBQSxNQVluQkMsaUJBWm1COztBQUFBLG9CQWFOcEIsc0RBQVEsRUFiRjtBQUFBLE1BYW5DcUIsVUFibUM7QUFBQSxNQWF2QkMsYUFidUI7O0FBQUEsb0JBY0Z0QixzREFBUSxFQWROO0FBQUEsTUFjbkN1QixZQWRtQztBQUFBLE1BY3JCQyxlQWRxQjs7QUFBQSxvQkFlSnhCLHNEQUFRLEVBZko7QUFBQSxNQWVuQ3lCLFdBZm1DO0FBQUEsTUFldEJDLGNBZnNCOztBQUFBLG9CQWdCUjFCLHNEQUFRLEVBaEJBO0FBQUEsTUFnQm5DMkIsU0FoQm1DO0FBQUEsTUFnQnhCQyxZQWhCd0I7O0FBaUIxQ0MseURBQVMsQ0FBQyxZQUFNO0FBQ2RoQyxXQUFPLElBQUlTLGtCQUFrQixDQUFDVCxPQUFPLENBQUMsQ0FBRCxDQUFSLENBQTdCO0FBQ0FBLFdBQU8sSUFBSVcsa0JBQWtCLENBQUNYLE9BQU8sQ0FBQyxDQUFELENBQVAsQ0FBV1UsZUFBWixDQUE3QjtBQUNBVixXQUFPLElBQUlhLGdCQUFnQixDQUFDYixPQUFPLENBQUMsQ0FBRCxDQUFQLENBQVdZLGFBQVosQ0FBM0I7QUFDQVosV0FBTyxJQUFJZSxVQUFVLENBQUNmLE9BQU8sQ0FBQyxDQUFELENBQVAsQ0FBV2MsT0FBWixDQUFyQjtBQUNBZCxXQUFPLElBQUlpQixNQUFNLENBQUNqQixPQUFPLENBQUMsQ0FBRCxDQUFQLENBQVdnQixHQUFaLENBQWpCLENBTGMsQ0FNZDtBQUNBOztBQUNBLFFBQU1pQixnQkFBZ0IsR0FBR2pDLE9BQU8sQ0FBQyxDQUFELENBQVAsQ0FBV2tDLGVBQVgsQ0FBMkJDLE9BQTNCLEdBQXFDLElBQTlEO0FBQ0FuQyxXQUFPLENBQUMsQ0FBRCxDQUFQLENBQVdrQyxlQUFYLEtBQStCLEVBQS9CLElBQXFDN0IsWUFBWSxDQUFDLElBQUkrQixJQUFKLENBQVNILGdCQUFULENBQUQsQ0FBakQ7QUFDQSxRQUFNSSxjQUFjLEdBQUdyQyxPQUFPLENBQUMsQ0FBRCxDQUFQLENBQVdzQyxhQUFYLENBQXlCSCxPQUF6QixHQUFtQyxJQUExRCxDQVZjLENBV2Q7O0FBQ0FuQyxXQUFPLENBQUMsQ0FBRCxDQUFQLENBQVdzQyxhQUFYLEtBQTZCLEVBQTdCLElBQW1DL0IsVUFBVSxDQUFDLElBQUk2QixJQUFKLENBQVNDLGNBQVQsQ0FBRCxDQUE3QyxDQVpjLENBYWQ7O0FBQ0F0QixjQUFVLENBQUNmLE9BQU8sQ0FBQyxDQUFELENBQVAsQ0FBV2MsT0FBWixDQUFWLENBZGMsQ0FlZDs7QUFDQSxRQUFNeUIsaUJBQWlCLEdBQUd2QyxPQUFPLENBQUMsQ0FBRCxDQUFQLENBQVdVLGVBQVgsQ0FBMkI4QixHQUEzQixDQUErQixVQUFDQyxPQUFEO0FBQUEsYUFBYUMsUUFBUSxDQUFDRCxPQUFPLENBQUNFLEtBQVIsR0FBZ0JGLE9BQU8sQ0FBQzNCLE9BQVIsQ0FBZ0I4QixNQUFqQyxDQUFyQjtBQUFBLEtBQS9CLENBQTFCO0FBQ0EsUUFBTXhCLFlBQVksR0FBR21CLGlCQUFpQixDQUFDTSxNQUFsQixDQUF5QixVQUFDQyxDQUFELEVBQUlDLENBQUosRUFBVTtBQUN0RCxhQUFPRCxDQUFDLEdBQUdDLENBQVg7QUFDRCxLQUZvQixFQUVsQixDQUZrQixDQUFyQjtBQUdBMUIsbUJBQWUsQ0FBQzJCLE1BQU0sQ0FBQ0MsS0FBUCxDQUFhN0IsWUFBYixJQUE2QixDQUE3QixHQUFpQzhCLElBQUksQ0FBQ0MsS0FBTCxDQUFXL0IsWUFBWCxDQUFsQyxDQUFmLENBcEJjLENBcUJkOztBQUNBLFFBQU1nQyxZQUFZLEdBQUdwRCxPQUFPLENBQUMsQ0FBRCxDQUFQLENBQVdjLE9BQVgsQ0FBbUI4QixNQUF4QztBQUNBLFFBQU10QixjQUFjLEdBQUdGLFlBQVksR0FBR2dDLFlBQXRDO0FBQ0E3QixxQkFBaUIsQ0FBQ3lCLE1BQU0sQ0FBQ0MsS0FBUCxDQUFhM0IsY0FBYixJQUErQixDQUEvQixHQUFtQzRCLElBQUksQ0FBQ0MsS0FBTCxDQUFXN0IsY0FBWCxDQUFwQyxDQUFqQixDQXhCYyxDQXlCZDs7QUFDQSxRQUFNK0IsZUFBZSxHQUFHckQsT0FBTyxDQUFDLENBQUQsQ0FBUCxDQUFXWSxhQUFYLENBQXlCNEIsR0FBekIsQ0FBNkIsVUFBQ0MsT0FBRDtBQUFBLGFBQWFDLFFBQVEsQ0FBQ0QsT0FBTyxDQUFDRSxLQUFSLEdBQWdCRixPQUFPLENBQUMzQixPQUFSLENBQWdCOEIsTUFBakMsQ0FBckI7QUFBQSxLQUE3QixDQUF4QjtBQUNBLFFBQU1wQixVQUFVLEdBQUc2QixlQUFlLENBQUNSLE1BQWhCLENBQXVCLFVBQUNDLENBQUQsRUFBSUMsQ0FBSixFQUFVO0FBQ2xELGFBQU9ELENBQUMsR0FBR0MsQ0FBWDtBQUNELEtBRmtCLEVBRWhCLENBRmdCLENBQW5CO0FBR0F0QixpQkFBYSxDQUFDdUIsTUFBTSxDQUFDTSxRQUFQLENBQWdCOUIsVUFBaEIsSUFBOEIwQixJQUFJLENBQUNDLEtBQUwsQ0FBVzNCLFVBQVgsQ0FBOUIsR0FBdUQsQ0FBeEQsQ0FBYixDQTlCYyxDQStCZDs7QUFDQSxRQUFNRSxZQUFZLEdBQUdGLFVBQVUsR0FBRzRCLFlBQWxDO0FBQ0F6QixtQkFBZSxDQUFDcUIsTUFBTSxDQUFDTSxRQUFQLENBQWdCNUIsWUFBaEIsSUFBZ0N3QixJQUFJLENBQUNDLEtBQUwsQ0FBV3pCLFlBQVgsQ0FBaEMsR0FBMkQsQ0FBNUQsQ0FBZixDQWpDYyxDQWtDZDs7QUFDQSxRQUFNRSxXQUFXLEdBQUdSLFlBQVksR0FBR0ksVUFBbkM7QUFDQUssa0JBQWMsQ0FBQ21CLE1BQU0sQ0FBQ00sUUFBUCxDQUFnQjFCLFdBQWhCLElBQStCc0IsSUFBSSxDQUFDQyxLQUFMLENBQVd2QixXQUFYLENBQS9CLEdBQXlELENBQTFELENBQWQsQ0FwQ2MsQ0FxQ2Q7O0FBQ0EsUUFBTVosR0FBRyxHQUFHMEIsUUFBUSxDQUFDMUMsT0FBTyxDQUFDLENBQUQsQ0FBUCxDQUFXZ0IsR0FBWixDQUFwQjtBQUNBLFFBQU1jLFNBQVMsR0FBR0YsV0FBVyxHQUFJWixHQUFHLEdBQUcsR0FBUCxHQUFjWSxXQUE5QztBQUNBRyxnQkFBWSxDQUFDaUIsTUFBTSxDQUFDTSxRQUFQLENBQWdCeEIsU0FBaEIsSUFBNkJvQixJQUFJLENBQUNDLEtBQUwsQ0FBV3JCLFNBQVgsQ0FBN0IsR0FBcUQsQ0FBdEQsQ0FBWjtBQUNELEdBekNRLEVBeUNOLENBQUM5QixPQUFELENBekNNLENBQVQsQ0FqQjBDLENBMkQxQzs7QUFDQSxNQUFNdUQsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBdkQsU0FBTyxDQUFDQyxHQUFSLENBQVlNLGVBQVo7QUFDQVAsU0FBTyxDQUFDQyxHQUFSLENBQVlRLGVBQVo7QUFDQVQsU0FBTyxDQUFDQyxHQUFSLENBQVkwQixXQUFaO0FBQ0EzQixTQUFPLENBQUNDLEdBQVIsQ0FBWTRCLFNBQVo7O0FBRUEsTUFBSXlCLE1BQU0sQ0FBQ0UsVUFBWCxFQUF1QjtBQUNyQix3QkFBTyxxRUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVA7QUFDRDs7QUFFRCxzQkFDRTtBQUFLLGFBQVMsRUFBQyx5REFBZjtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFDLGlFQUFmO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFDLHFEQUFmO0FBQUEsK0JBQ0U7QUFBSyxtQkFBUyxFQUFDLG1CQUFmO0FBQUEsa0NBQ0U7QUFDRSxrQkFBTSxFQUFHdkMsSUFBSSxDQUFDd0MsS0FBTCxHQUFhLEdBQWIsSUFBb0IsRUFBckIsSUFBNkJ4QyxJQUFJLENBQUN3QyxLQUFMLEdBQWEsR0FBYixJQUFvQnhDLElBQUksQ0FBQ3dDLEtBQUwsR0FBYSxHQUFqQyxJQUF3QyxFQUFyRSxJQUE2RXhDLElBQUksQ0FBQ3dDLEtBQUwsR0FBYSxHQUFiLElBQW9CLEVBRDNHO0FBRUUsaUJBQUssRUFBR3hDLElBQUksQ0FBQ3dDLEtBQUwsR0FBYSxHQUFiLElBQW9CLEVBQXJCLElBQTZCeEMsSUFBSSxDQUFDd0MsS0FBTCxHQUFhLEdBQWIsSUFBb0J4QyxJQUFJLENBQUN3QyxLQUFMLEdBQWEsR0FBakMsSUFBd0MsRUFBckUsSUFBNkV4QyxJQUFJLENBQUN3QyxLQUFMLEdBQWEsR0FBYixJQUFvQixFQUYxRztBQUdFLHFCQUFTLEVBQUMsaURBSFo7QUFJRSxpQkFBSyxFQUFDLDRCQUpSO0FBS0UsbUJBQU8sRUFBQyxhQUxWO0FBQUEsb0NBT0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUEYsZUFRRTtBQUFHLGdCQUFFLEVBQUMsaUJBQU47QUFBd0IsMkJBQVUsaUJBQWxDO0FBQUEscUNBQ0U7QUFDRSx5QkFBUyxFQUFDLE9BRFo7QUFFRSxpQkFBQyxFQUFDO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBZ0JFO0FBQUcscUJBQVMsRUFBQyxrR0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFoQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBdUJFO0FBQUEsK0JBQ0U7QUFBSSxtQkFBUyxFQUFDLDhHQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXZCRixlQTRCRTtBQUFLLGlCQUFTLEVBQUMsNkpBQWY7QUFBQSxnQ0FDRTtBQUNFLFlBQUUsRUFBQyxpQkFETDtBQUVFLG1CQUFTLEVBQUMsdU1BRlo7QUFBQSxrQ0FJRTtBQUFLLHFCQUFTLEVBQUMsbUJBQWY7QUFBQSxvQ0FDRTtBQUNFLGlCQUFHLEVBQUMseUJBRE47QUFFRSxvQkFBTSxFQUFHeEMsSUFBSSxDQUFDd0MsS0FBTCxHQUFhLEdBQWIsSUFBb0IsRUFBckIsSUFBNkJ4QyxJQUFJLENBQUN3QyxLQUFMLEdBQWEsR0FBYixJQUFvQnhDLElBQUksQ0FBQ3dDLEtBQUwsR0FBYSxHQUFqQyxJQUF3QyxFQUFyRSxJQUE2RXhDLElBQUksQ0FBQ3dDLEtBQUwsR0FBYSxHQUFiLElBQW9CLEVBRjNHO0FBR0UsbUJBQUssRUFBR3hDLElBQUksQ0FBQ3dDLEtBQUwsR0FBYSxHQUFiLElBQW9CLEVBQXJCLElBQTZCeEMsSUFBSSxDQUFDd0MsS0FBTCxHQUFhLEdBQWIsSUFBb0J4QyxJQUFJLENBQUN3QyxLQUFMLEdBQWEsR0FBakMsSUFBd0MsRUFBckUsSUFBNkV4QyxJQUFJLENBQUN3QyxLQUFMLEdBQWEsR0FBYixJQUFvQjtBQUgxRztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBTUU7QUFBRyx1QkFBUyxFQUFDLHVCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKRixFQVlHdEQsU0FBUyxJQUFJLENBQUN1RCw0REFBZCxnQkFDQyxxRUFBQyxVQUFEO0FBQ0Usb0JBQVEsRUFBRXZELFNBRFo7QUFFRSxvQkFBUSxFQUFFLGtCQUFDd0QsSUFBRDtBQUFBLHFCQUFVQyxpQkFBaUIsQ0FBQ0QsSUFBRCxDQUEzQjtBQUFBLGFBRlo7QUFHRSxzQkFBVSxFQUFDLFdBSGI7QUFJRSwrQkFBbUIsTUFKckI7QUFLRSxtQkFBTyxFQUFFRSxRQUFRLENBQUMsSUFBSTFCLElBQUosRUFBRCxFQUFhLENBQWIsQ0FMbkI7QUFNRSxtQkFBTyxFQUFFLElBQUlBLElBQUo7QUFOWDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURELGdCQVVDLHFFQUFDLFVBQUQ7QUFDRSxvQkFBUSxFQUFFaEMsU0FEWjtBQUVFLG9CQUFRLEVBQUUsa0JBQUN3RCxJQUFEO0FBQUEscUJBQVVDLGlCQUFpQixDQUFDRCxJQUFELENBQTNCO0FBQUEsYUFGWjtBQUdFLHNCQUFVLEVBQUMsV0FIYjtBQUlFLCtCQUFtQixNQUpyQjtBQUtFLG1CQUFPLEVBQUVFLFFBQVEsQ0FBQyxJQUFJMUIsSUFBSixFQUFELEVBQWEsQ0FBYixDQUxuQjtBQU1FLG1CQUFPLEVBQUUsSUFBSUEsSUFBSixFQU5YO0FBT0Usc0JBQVU7QUFQWjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQXRCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFrQ0U7QUFDRSxZQUFFLEVBQUMsaUJBREw7QUFFRSxtQkFBUyxFQUFDLHVNQUZaO0FBQUEsaUNBSUU7QUFBSyxxQkFBUyxFQUFDLG1CQUFmO0FBQUEsb0NBQ0U7QUFDRSxpQkFBRyxFQUFDLDJCQUROO0FBRUUsb0JBQU0sRUFBR2xCLElBQUksQ0FBQ3dDLEtBQUwsR0FBYSxHQUFiLElBQW9CLEVBQXJCLElBQTZCeEMsSUFBSSxDQUFDd0MsS0FBTCxHQUFhLEdBQWIsSUFBb0J4QyxJQUFJLENBQUN3QyxLQUFMLEdBQWEsR0FBakMsSUFBd0MsRUFBckUsSUFBNkV4QyxJQUFJLENBQUN3QyxLQUFMLEdBQWEsR0FBYixJQUFvQixFQUYzRztBQUdFLG1CQUFLLEVBQUd4QyxJQUFJLENBQUN3QyxLQUFMLEdBQWEsR0FBYixJQUFvQixFQUFyQixJQUE2QnhDLElBQUksQ0FBQ3dDLEtBQUwsR0FBYSxHQUFiLElBQW9CeEMsSUFBSSxDQUFDd0MsS0FBTCxHQUFhLEdBQWpDLElBQXdDLEVBQXJFLElBQTZFeEMsSUFBSSxDQUFDd0MsS0FBTCxHQUFhLEdBQWIsSUFBb0I7QUFIMUc7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQU1FO0FBQUcsdUJBQVMsRUFBQyx1QkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWxDRixlQW1FRTtBQUNFLGVBQUssRUFBRTtBQUNMQSxpQkFBSyxFQUNGeEMsSUFBSSxDQUFDd0MsS0FBTCxHQUFhLEdBQWIsSUFBb0IsTUFBckIsSUFDQ3hDLElBQUksQ0FBQ3dDLEtBQUwsR0FBYSxHQUFiLElBQW9CeEMsSUFBSSxDQUFDd0MsS0FBTCxHQUFhLEdBQWpDLElBQXdDLEtBRHpDLElBRUN4QyxJQUFJLENBQUN3QyxLQUFMLEdBQWEsR0FBYixJQUFvQnhDLElBQUksQ0FBQ3dDLEtBQUwsR0FBYSxHQUFqQyxJQUF3QyxLQUZ6QyxJQUdDeEMsSUFBSSxDQUFDd0MsS0FBTCxHQUFhLEdBQWIsSUFBb0IsS0FMbEI7QUFNTEssMkJBQWUsRUFBRTdDLElBQUksQ0FBQ3dDLEtBQUwsR0FBYSxHQUFiLEdBQW1CLEdBQW5CLEdBQXlCLE9BTnJDO0FBT0xNLHlCQUFhLEVBQUU5QyxJQUFJLENBQUN3QyxLQUFMLEdBQWEsR0FBYixHQUFtQixHQUFuQixHQUF5QjtBQVBuQyxXQURUO0FBVUUsbUJBQVMsRUFBQyxrTkFWWjtBQUFBLGtDQVlFO0FBQUsscUJBQVMsRUFBQyxtQkFBZjtBQUFBLG9DQUNFO0FBQ0UsaUJBQUcsRUFBQyxvQkFETjtBQUVFLG9CQUFNLEVBQUd4QyxJQUFJLENBQUN3QyxLQUFMLEdBQWEsR0FBYixJQUFvQixFQUFyQixJQUE2QnhDLElBQUksQ0FBQ3dDLEtBQUwsR0FBYSxHQUFiLElBQW9CeEMsSUFBSSxDQUFDd0MsS0FBTCxHQUFhLEdBQWpDLElBQXdDLEVBQXJFLElBQTZFeEMsSUFBSSxDQUFDd0MsS0FBTCxHQUFhLEdBQWIsSUFBb0IsRUFGM0c7QUFHRSxtQkFBSyxFQUFHeEMsSUFBSSxDQUFDd0MsS0FBTCxHQUFhLEdBQWIsSUFBb0IsRUFBckIsSUFBNkJ4QyxJQUFJLENBQUN3QyxLQUFMLEdBQWEsR0FBYixJQUFvQnhDLElBQUksQ0FBQ3dDLEtBQUwsR0FBYSxHQUFqQyxJQUF3QyxFQUFyRSxJQUE2RXhDLElBQUksQ0FBQ3dDLEtBQUwsR0FBYSxHQUFiLElBQW9CO0FBSDFHO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFNRTtBQUFHLHVCQUFTLEVBQUMsTUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBWkYsZUFvQkU7QUFBSyxxQkFBUyxFQUFDLE1BQWY7QUFBc0IsaUJBQUssRUFBRTtBQUFFTywyQkFBYSxFQUFFO0FBQWpCLGFBQTdCO0FBQUEsb0NBQ0U7QUFBTyxnQkFBRSxFQUFDLFdBQVY7QUFBc0IsbUJBQUssRUFBRXpELGVBQWUsQ0FBQ1EsR0FBN0M7QUFBa0QsdUJBQVMsRUFBQztBQUE1RDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQXBCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBbkVGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQTVCRixlQXlIRTtBQUFLLFVBQUUsRUFBQyxnQkFBUjtBQUF5QixpQkFBUyxFQUFDO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF6SEYsZUE0SEU7QUFBSyxpQkFBUyxFQUFDLDBJQUFmO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBUyxFQUFDLHlNQUFmO0FBQUEsa0NBQ0U7QUFBSyxxQkFBUyxFQUFDLG1CQUFmO0FBQUEsb0NBQ0U7QUFDRSxpQkFBRyxFQUFDLHdCQUROO0FBRUUsb0JBQU0sRUFBR0UsSUFBSSxDQUFDd0MsS0FBTCxHQUFhLEdBQWIsSUFBb0IsRUFBckIsSUFBNkJ4QyxJQUFJLENBQUN3QyxLQUFMLEdBQWEsR0FBYixJQUFvQnhDLElBQUksQ0FBQ3dDLEtBQUwsR0FBYSxHQUFqQyxJQUF3QyxFQUFyRSxJQUE2RXhDLElBQUksQ0FBQ3dDLEtBQUwsR0FBYSxHQUFiLElBQW9CLEVBRjNHO0FBR0UsbUJBQUssRUFBR3hDLElBQUksQ0FBQ3dDLEtBQUwsR0FBYSxHQUFiLElBQW9CLEVBQXJCLElBQTZCeEMsSUFBSSxDQUFDd0MsS0FBTCxHQUFhLEdBQWIsSUFBb0J4QyxJQUFJLENBQUN3QyxLQUFMLEdBQWEsR0FBakMsSUFBd0MsRUFBckUsSUFBNkV4QyxJQUFJLENBQUN3QyxLQUFMLEdBQWEsR0FBYixJQUFvQjtBQUgxRztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBTUU7QUFBRyx1QkFBUyxFQUFDLE1BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBU0U7QUFBQSw0QkFBS3RDLFlBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQVlFO0FBQUssbUJBQVMsRUFBQyx5TUFBZjtBQUFBLGtDQUNFO0FBQUsscUJBQVMsRUFBQyxtQkFBZjtBQUFBLG9DQUNFO0FBQ0UsaUJBQUcsRUFBQyx3QkFETjtBQUVFLG9CQUFNLEVBQUdGLElBQUksQ0FBQ3dDLEtBQUwsR0FBYSxHQUFiLElBQW9CLEVBQXJCLElBQTZCeEMsSUFBSSxDQUFDd0MsS0FBTCxHQUFhLEdBQWIsSUFBb0J4QyxJQUFJLENBQUN3QyxLQUFMLEdBQWEsR0FBakMsSUFBd0MsRUFBckUsSUFBNkV4QyxJQUFJLENBQUN3QyxLQUFMLEdBQWEsR0FBYixJQUFvQixFQUYzRztBQUdFLG1CQUFLLEVBQUd4QyxJQUFJLENBQUN3QyxLQUFMLEdBQWEsR0FBYixJQUFvQixFQUFyQixJQUE2QnhDLElBQUksQ0FBQ3dDLEtBQUwsR0FBYSxHQUFiLElBQW9CeEMsSUFBSSxDQUFDd0MsS0FBTCxHQUFhLEdBQWpDLElBQXdDLEVBQXJFLElBQTZFeEMsSUFBSSxDQUFDd0MsS0FBTCxHQUFhLEdBQWIsSUFBb0I7QUFIMUc7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQU1FO0FBQUcsdUJBQVMsRUFBQyxNQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQVNFO0FBQUEsNEJBQUtwQyxjQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWkYsZUF1QkU7QUFBSyxtQkFBUyxFQUFDLHlNQUFmO0FBQUEsa0NBQ0U7QUFBSyxxQkFBUyxFQUFDLG1CQUFmO0FBQUEsb0NBQ0U7QUFDRSxpQkFBRyxFQUFDLHNCQUROO0FBRUUsb0JBQU0sRUFBR0osSUFBSSxDQUFDd0MsS0FBTCxHQUFhLEdBQWIsSUFBb0IsRUFBckIsSUFBNkJ4QyxJQUFJLENBQUN3QyxLQUFMLEdBQWEsR0FBYixJQUFvQnhDLElBQUksQ0FBQ3dDLEtBQUwsR0FBYSxHQUFqQyxJQUF3QyxFQUFyRSxJQUE2RXhDLElBQUksQ0FBQ3dDLEtBQUwsR0FBYSxHQUFiLElBQW9CLEVBRjNHO0FBR0UsbUJBQUssRUFBR3hDLElBQUksQ0FBQ3dDLEtBQUwsR0FBYSxHQUFiLElBQW9CLEVBQXJCLElBQTZCeEMsSUFBSSxDQUFDd0MsS0FBTCxHQUFhLEdBQWIsSUFBb0J4QyxJQUFJLENBQUN3QyxLQUFMLEdBQWEsR0FBakMsSUFBd0MsRUFBckUsSUFBNkV4QyxJQUFJLENBQUN3QyxLQUFMLEdBQWEsR0FBYixJQUFvQjtBQUgxRztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBTUU7QUFBRyx1QkFBUyxFQUFDLE1BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBU0U7QUFBQSw0QkFBS2xDLFVBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF2QkYsZUFrQ0U7QUFBSyxtQkFBUyxFQUFDLHlNQUFmO0FBQUEsa0NBQ0U7QUFBSyxxQkFBUyxFQUFDLG1CQUFmO0FBQUEsb0NBQ0U7QUFDRSxpQkFBRyxFQUFDLDhCQUROO0FBRUUsb0JBQU0sRUFBR04sSUFBSSxDQUFDd0MsS0FBTCxHQUFhLEdBQWIsSUFBb0IsRUFBckIsSUFBNkJ4QyxJQUFJLENBQUN3QyxLQUFMLEdBQWEsR0FBYixJQUFvQnhDLElBQUksQ0FBQ3dDLEtBQUwsR0FBYSxHQUFqQyxJQUF3QyxFQUFyRSxJQUE2RXhDLElBQUksQ0FBQ3dDLEtBQUwsR0FBYSxHQUFiLElBQW9CLEVBRjNHO0FBR0UsbUJBQUssRUFBR3hDLElBQUksQ0FBQ3dDLEtBQUwsR0FBYSxHQUFiLElBQW9CLEVBQXJCLElBQTZCeEMsSUFBSSxDQUFDd0MsS0FBTCxHQUFhLEdBQWIsSUFBb0J4QyxJQUFJLENBQUN3QyxLQUFMLEdBQWEsR0FBakMsSUFBd0MsRUFBckUsSUFBNkV4QyxJQUFJLENBQUN3QyxLQUFMLEdBQWEsR0FBYixJQUFvQjtBQUgxRztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBTUU7QUFBRyx1QkFBUyxFQUFDLE1BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBU0U7QUFBQSw0QkFBS2hDLFlBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFsQ0YsZUE2Q0U7QUFBSyxtQkFBUyxFQUFDLHlNQUFmO0FBQUEsa0NBQ0U7QUFBSyxxQkFBUyxFQUFDLG1CQUFmO0FBQUEsb0NBQ0U7QUFDRSxpQkFBRyxFQUFDLDBCQUROO0FBRUUsb0JBQU0sRUFBR1IsSUFBSSxDQUFDd0MsS0FBTCxHQUFhLEdBQWIsSUFBb0IsRUFBckIsSUFBNkJ4QyxJQUFJLENBQUN3QyxLQUFMLEdBQWEsR0FBYixJQUFvQnhDLElBQUksQ0FBQ3dDLEtBQUwsR0FBYSxHQUFqQyxJQUF3QyxFQUFyRSxJQUE2RXhDLElBQUksQ0FBQ3dDLEtBQUwsR0FBYSxHQUFiLElBQW9CLEVBRjNHO0FBR0UsbUJBQUssRUFBR3hDLElBQUksQ0FBQ3dDLEtBQUwsR0FBYSxHQUFiLElBQW9CLEVBQXJCLElBQTZCeEMsSUFBSSxDQUFDd0MsS0FBTCxHQUFhLEdBQWIsSUFBb0J4QyxJQUFJLENBQUN3QyxLQUFMLEdBQWEsR0FBakMsSUFBd0MsRUFBckUsSUFBNkV4QyxJQUFJLENBQUN3QyxLQUFMLEdBQWEsR0FBYixJQUFvQjtBQUgxRztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBTUU7QUFBRyx1QkFBUyxFQUFDLE1BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBU0U7QUFBQSw0QkFBSzlCLFdBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkE3Q0YsZUF3REU7QUFBSyxtQkFBUyxFQUFDLHlNQUFmO0FBQUEsa0NBQ0U7QUFBSyxxQkFBUyxFQUFDLG1CQUFmO0FBQUEsb0NBQ0U7QUFDRSxpQkFBRyxFQUFDLDBCQUROO0FBRUUsb0JBQU0sRUFBR1YsSUFBSSxDQUFDd0MsS0FBTCxHQUFhLEdBQWIsSUFBb0IsRUFBckIsSUFBNkJ4QyxJQUFJLENBQUN3QyxLQUFMLEdBQWEsR0FBYixJQUFvQnhDLElBQUksQ0FBQ3dDLEtBQUwsR0FBYSxHQUFqQyxJQUF3QyxFQUFyRSxJQUE2RXhDLElBQUksQ0FBQ3dDLEtBQUwsR0FBYSxHQUFiLElBQW9CLEVBRjNHO0FBR0UsbUJBQUssRUFBR3hDLElBQUksQ0FBQ3dDLEtBQUwsR0FBYSxHQUFiLElBQW9CLEVBQXJCLElBQTZCeEMsSUFBSSxDQUFDd0MsS0FBTCxHQUFhLEdBQWIsSUFBb0J4QyxJQUFJLENBQUN3QyxLQUFMLEdBQWEsR0FBakMsSUFBd0MsRUFBckUsSUFBNkV4QyxJQUFJLENBQUN3QyxLQUFMLEdBQWEsR0FBYixJQUFvQjtBQUgxRztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBTUU7QUFBRyx1QkFBUyxFQUFDLE1BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBU0U7QUFBQSw0QkFBSzVCLFNBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF4REY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBNUhGLGVBaU1FO0FBQ0UsV0FBRyxFQUFFb0MsVUFEUDtBQUVFLGFBQUssRUFBRTtBQUFFQyxnQkFBTSxFQUFFO0FBQVYsU0FGVDtBQUdFLGlCQUFTLEVBQUMsbUpBSFo7QUFBQSxnQ0FLRTtBQUFLLG1CQUFTLEVBQUMsMENBQWY7QUFBQSxrQ0FDRTtBQUFLLHFCQUFTLEVBQUMsa0JBQWY7QUFBQSxtQ0FDRTtBQUFHLHVCQUFTLEVBQUMsK0JBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBSUU7QUFBSyxxQkFBUyxFQUFDLGdEQUFmO0FBQUEsb0NBQ0U7QUFDRSxxQkFBTyxFQUFFQyxtQkFEWDtBQUVFLHVCQUFTLEVBQUMsZ0JBRlo7QUFHRSxpQkFBRyxFQUFDLG9CQUhOO0FBSUUsb0JBQU0sRUFBR2xELElBQUksQ0FBQ3dDLEtBQUwsR0FBYSxHQUFiLElBQW9CLEVBQXJCLElBQTZCeEMsSUFBSSxDQUFDd0MsS0FBTCxHQUFhLEdBQWIsSUFBb0J4QyxJQUFJLENBQUN3QyxLQUFMLEdBQWEsR0FBakMsSUFBd0MsRUFBckUsSUFBNkV4QyxJQUFJLENBQUN3QyxLQUFMLEdBQWEsR0FBYixJQUFvQixFQUozRztBQUtFLG1CQUFLLEVBQUd4QyxJQUFJLENBQUN3QyxLQUFMLEdBQWEsR0FBYixJQUFvQixFQUFyQixJQUE2QnhDLElBQUksQ0FBQ3dDLEtBQUwsR0FBYSxHQUFiLElBQW9CeEMsSUFBSSxDQUFDd0MsS0FBTCxHQUFhLEdBQWpDLElBQXdDLEVBQXJFLElBQTZFeEMsSUFBSSxDQUFDd0MsS0FBTCxHQUFhLEdBQWIsSUFBb0I7QUFMMUc7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQVFFO0FBQ0UsaUJBQUcsRUFBRVcsWUFEUDtBQUVFLHFCQUFPLEVBQUVDLGFBRlg7QUFHRSx1QkFBUyxFQUFDLHFCQUhaO0FBSUUsaUJBQUcsRUFBQyx5QkFKTjtBQUtFLG9CQUFNLEVBQUdwRCxJQUFJLENBQUN3QyxLQUFMLEdBQWEsR0FBYixJQUFvQixFQUFyQixJQUE2QnhDLElBQUksQ0FBQ3dDLEtBQUwsR0FBYSxHQUFiLElBQW9CeEMsSUFBSSxDQUFDd0MsS0FBTCxHQUFhLEdBQWpDLElBQXdDLEVBQXJFLElBQTZFeEMsSUFBSSxDQUFDd0MsS0FBTCxHQUFhLEdBQWIsSUFBb0IsRUFMM0c7QUFNRSxtQkFBSyxFQUFHeEMsSUFBSSxDQUFDd0MsS0FBTCxHQUFhLEdBQWIsSUFBb0IsRUFBckIsSUFBNkJ4QyxJQUFJLENBQUN3QyxLQUFMLEdBQWEsR0FBYixJQUFvQnhDLElBQUksQ0FBQ3dDLEtBQUwsR0FBYSxHQUFqQyxJQUF3QyxFQUFyRSxJQUE2RXhDLElBQUksQ0FBQ3dDLEtBQUwsR0FBYSxHQUFiLElBQW9CO0FBTjFHO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMRixlQTJCRTtBQUNFLGFBQUcsRUFBRWEsd0JBRFA7QUFFRSxtQkFBUyxtQkFDUHJELElBQUksQ0FBQ3dDLEtBQUwsR0FBYSxJQUFiLEdBQ0ksOEhBREosR0FFSSw2RUFIRyxDQUZYO0FBQUEsa0NBU0U7QUFDRSxpQkFBSyxFQUFFO0FBQUVjLHNCQUFRLEVBQUV0RCxJQUFJLENBQUN3QyxLQUFMLEdBQWEsR0FBYixJQUFvQjtBQUFoQyxhQURUO0FBRUUscUJBQVMsRUFBQywyRkFGWjtBQUFBLG9DQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpGLGVBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBTEYsZUFNRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFORixlQU9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVBGLGVBUUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUkYsZUFTRTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFURixlQW9CRTtBQUFJLHFCQUFTLEVBQUM7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQXBCRixlQXFCRTtBQUFLLHFCQUFTLEVBQUMsbURBQWY7QUFBQSxtQ0FDRSxxRUFBQyxlQUFEO0FBQWlCLHVCQUFTLEVBQUVlLGVBQTVCO0FBQUEscUNBQ0UscUVBQUMsU0FBRDtBQUFXLDJCQUFXLEVBQUMsVUFBdkI7QUFBQSwwQkFDRyxrQkFBQ0MsUUFBRDtBQUFBLHNDQUNDO0FBQUssNkJBQVMsRUFBQztBQUFmLHFCQUE4QkEsUUFBUSxDQUFDQyxjQUF2QztBQUF1RCx1QkFBRyxFQUFFRCxRQUFRLENBQUNFLFFBQXJFO0FBQUEsK0JBQ0dsRSxlQUFlLElBQ2RBLGVBQWUsQ0FBQzhCLEdBQWhCLENBQW9CLFVBQUNDLE9BQUQsRUFBVW9DLEtBQVYsRUFBb0I7QUFDdEM1RSw2QkFBTyxDQUFDQyxHQUFSLENBQVl1QyxPQUFaO0FBQ0EsMENBQ0UscUVBQUMsU0FBRDtBQUErQixtQ0FBVyxFQUFFQSxPQUFPLENBQUNvQyxLQUFwRDtBQUEyRCw2QkFBSyxFQUFFQSxLQUFsRTtBQUFBLGtDQUNHLGtCQUFDSCxRQUFEO0FBQUEsOENBQ0MscUVBQUMsY0FBRDtBQUNFLG9DQUFRLEVBQUVBLFFBRFo7QUFFRSw4Q0FBa0IsRUFBRS9ELGtCQUZ0QjtBQUdFLHdDQUFZLEVBQUVtRSxZQUhoQjtBQUlFLHFDQUFTLEVBQUVDLFNBSmI7QUFLRSxzQ0FBVSxFQUFFQyxVQUxkO0FBTUUsMkNBQWUsRUFBRXRFLGVBTm5CO0FBT0UsbUNBQU8sRUFBRStCLE9BUFg7QUFRRSxpQ0FBSyxFQUFFb0M7QUFSVDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQUREO0FBQUE7QUFESCx5QkFBZ0JwQyxPQUFPLENBQUNvQyxLQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQURGO0FBZ0JELHFCQWxCRCxDQUZKLEVBcUJHSCxRQUFRLENBQUNPLFdBckJaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFERDtBQUFBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQXJCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBM0JGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWpNRixlQW1SRTtBQUNFLFdBQUcsRUFBRUMsUUFEUDtBQUVFLGFBQUssRUFBRTtBQUFFZixnQkFBTSxFQUFFO0FBQVYsU0FGVDtBQUdFLGlCQUFTLEVBQUMsa0pBSFo7QUFBQSxnQ0FLRTtBQUFLLG1CQUFTLEVBQUMsMENBQWY7QUFBQSxrQ0FDRTtBQUFLLHFCQUFTLEVBQUMsa0JBQWY7QUFBQSxtQ0FDRTtBQUFHLHVCQUFTLEVBQUMsK0JBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBSUU7QUFBSyxxQkFBUyxFQUFDLGdEQUFmO0FBQUEsb0NBQ0U7QUFDRSxxQkFBTyxFQUFFZ0IsaUJBRFg7QUFFRSx1QkFBUyxFQUFDLGdCQUZaO0FBR0UsaUJBQUcsRUFBQyxvQkFITjtBQUlFLG9CQUFNLEVBQUdqRSxJQUFJLENBQUN3QyxLQUFMLEdBQWEsR0FBYixJQUFvQixFQUFyQixJQUE2QnhDLElBQUksQ0FBQ3dDLEtBQUwsR0FBYSxHQUFiLElBQW9CeEMsSUFBSSxDQUFDd0MsS0FBTCxHQUFhLEdBQWpDLElBQXdDLEVBQXJFLElBQTZFeEMsSUFBSSxDQUFDd0MsS0FBTCxHQUFhLEdBQWIsSUFBb0IsRUFKM0c7QUFLRSxtQkFBSyxFQUFHeEMsSUFBSSxDQUFDd0MsS0FBTCxHQUFhLEdBQWIsSUFBb0IsRUFBckIsSUFBNkJ4QyxJQUFJLENBQUN3QyxLQUFMLEdBQWEsR0FBYixJQUFvQnhDLElBQUksQ0FBQ3dDLEtBQUwsR0FBYSxHQUFqQyxJQUF3QyxFQUFyRSxJQUE2RXhDLElBQUksQ0FBQ3dDLEtBQUwsR0FBYSxHQUFiLElBQW9CO0FBTDFHO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFRRTtBQUNFLGlCQUFHLEVBQUUwQixpQkFEUDtBQUVFLHFCQUFPLEVBQUVDLFdBRlg7QUFHRSx1QkFBUyxFQUFDLHFCQUhaO0FBSUUsaUJBQUcsRUFBQyx5QkFKTjtBQUtFLG9CQUFNLEVBQUduRSxJQUFJLENBQUN3QyxLQUFMLEdBQWEsR0FBYixJQUFvQixFQUFyQixJQUE2QnhDLElBQUksQ0FBQ3dDLEtBQUwsR0FBYSxHQUFiLElBQW9CeEMsSUFBSSxDQUFDd0MsS0FBTCxHQUFhLEdBQWpDLElBQXdDLEVBQXJFLElBQTZFeEMsSUFBSSxDQUFDd0MsS0FBTCxHQUFhLEdBQWIsSUFBb0IsRUFMM0c7QUFNRSxtQkFBSyxFQUFHeEMsSUFBSSxDQUFDd0MsS0FBTCxHQUFhLEdBQWIsSUFBb0IsRUFBckIsSUFBNkJ4QyxJQUFJLENBQUN3QyxLQUFMLEdBQWEsR0FBYixJQUFvQnhDLElBQUksQ0FBQ3dDLEtBQUwsR0FBYSxHQUFqQyxJQUF3QyxFQUFyRSxJQUE2RXhDLElBQUksQ0FBQ3dDLEtBQUwsR0FBYSxHQUFiLElBQW9CO0FBTjFHO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMRixlQTJCRTtBQUNFLGFBQUcsRUFBRTRCLHNCQURQO0FBRUUsbUJBQVMsbUJBQ1BwRSxJQUFJLENBQUN3QyxLQUFMLEdBQWEsSUFBYixHQUNJLDhIQURKLEdBRUksNkVBSEcsQ0FGWDtBQUFBLGtDQVNFO0FBQUsscUJBQVMsRUFBQyx3Q0FBZjtBQUFBLG9DQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkYsZUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFIRixlQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpGLGVBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBTEYsZUFNRTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFURixlQWlCRTtBQUFJLHFCQUFTLEVBQUM7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWpCRixlQWtCRTtBQUFLLHFCQUFTLEVBQUMsbURBQWY7QUFBQSxtQ0FDRSxxRUFBQyxlQUFEO0FBQWlCLHVCQUFTLEVBQUU2QixvQkFBNUI7QUFBQSxxQ0FDRSxxRUFBQyxTQUFEO0FBQVcsMkJBQVcsRUFBQyxVQUF2QjtBQUFBLDBCQUNHLGtCQUFDYixRQUFEO0FBQUEsc0NBQ0M7QUFBSyw2QkFBUyxFQUFDO0FBQWYscUJBQThCQSxRQUFRLENBQUNDLGNBQXZDO0FBQXVELHVCQUFHLEVBQUVELFFBQVEsQ0FBQ0UsUUFBckU7QUFBQSwrQkFDR2hFLGFBQWEsSUFDWkEsYUFBYSxDQUFDNEIsR0FBZCxDQUFrQixVQUFDQyxPQUFELEVBQVVvQyxLQUFWLEVBQW9CO0FBQ3BDNUUsNkJBQU8sQ0FBQ0MsR0FBUixDQUFZdUMsT0FBWjtBQUNBLDBDQUNFLHFFQUFDLFNBQUQ7QUFBK0IsbUNBQVcsRUFBRUEsT0FBTyxDQUFDb0MsS0FBcEQ7QUFBMkQsNkJBQUssRUFBRUEsS0FBbEU7QUFBQSxrQ0FDRyxrQkFBQ0gsUUFBRDtBQUFBLDhDQUNDLHFFQUFDLFlBQUQ7QUFDRSxvQ0FBUSxFQUFFQSxRQURaO0FBRUUsNENBQWdCLEVBQUU3RCxnQkFGcEI7QUFHRSx3Q0FBWSxFQUFFaUUsWUFIaEI7QUFJRSxxQ0FBUyxFQUFFQyxTQUpiO0FBS0Usc0NBQVUsRUFBRUMsVUFMZDtBQU1FLHlDQUFhLEVBQUVwRSxhQU5qQjtBQU9FLG1DQUFPLEVBQUU2QixPQVBYO0FBUUUsaUNBQUssRUFBRW9DO0FBUlQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FERDtBQUFBO0FBREgseUJBQWdCcEMsT0FBTyxDQUFDb0MsS0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFERjtBQWdCRCxxQkFsQkQsQ0FGSixFQXFCR0gsUUFBUSxDQUFDTyxXQXJCWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREQ7QUFBQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFsQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTNCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFuUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBc1dELENBNWFEOztHQUFNbEYsa0I7VUFTU29CLG1FLEVBbURFcUMscUQ7OztLQTVEWHpELGtCOztBQTRkUyxpS0FBQUEsa0JBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGFzaGJvYXJkL3Byb2plY3RzL1twcm9qZWN0XS9jYXNoLWZsb3cvW2lkXS43NTA1MWZlNTMwMjJiN2E5MGEzNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgZGIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9saWIvZmlyZWJhc2UtYWRtaW4nO1xyXG5pbXBvcnQgeyBkYiBhcyBkYkNsaWVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2xpYi9maXJlYmFzZSc7XHJcbmltcG9ydCB7IGlzTW9iaWxlIH0gZnJvbSAncmVhY3QtZGV2aWNlLWRldGVjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcclxuaW1wb3J0IFVuaXF1ZUVsZW1lbnQgZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50cy9kYXNoYm9hcmQvc3RhcnR1cC9wcm9qZWN0L2J1c2luZXNzLWFwcC9jb21wZXRpdG9ycy9VbmlxdWVFbGVtZW50JztcclxuaW1wb3J0IEJvdW5jZUxvYWRlckNvbXBvbmVudCBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb25lbnRzL0JvdW5jZUxvYWRlcic7XHJcbmNvbnN0IHNhZmVKc29uU3RyaW5naWZ5ID0gcmVxdWlyZSgnc2FmZS1qc29uLXN0cmluZ2lmeScpO1xyXG5pbXBvcnQgeyB1c2VXaW5kb3dTaXplIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vdXRpbHMvdXNlV2luZG93U2l6ZSc7XHJcblxyXG5jb25zdCBVbmlxdWVDYXNoZmxvd1BhZ2UgPSAoeyBwcm9qZWN0IH0pID0+IHtcclxuICBjb25zb2xlLmxvZygnUGFydGljdWxhciBwcm9qZWN0IC0tPiAnLCBwcm9qZWN0KTtcclxuICBjb25zdCBbc3RhcnREYXRlLCBzZXRTdGFydERhdGVdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2VuZERhdGUsIHNldEVuZERhdGVdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW3NlbGVjdGVkUHJvamVjdCwgc2V0U2VsZWN0ZWRQcm9qZWN0XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtyZXZlbnVlRWxlbWVudHMsIHNldFJldmVudWVFbGVtZW50c10gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtjb3N0c0VsZW1lbnRzLCBzZXRDb3N0c0VsZW1lbnRzXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW3BlcmlvZHMsIHNldFBlcmlvZHNdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbdGF4LCBzZXRUYXhdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBzaXplID0gdXNlV2luZG93U2l6ZSgpO1xyXG4gIC8vIFN1bSBkYXRhXHJcbiAgY29uc3QgW3RvdGFsUmV2ZW51ZSwgc2V0VG90YWxSZXZlbnVlXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW21vbnRobHlSZXZlbnVlLCBzZXRNb250aGx5UmV2ZW51ZV0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFt0b3RhbENvc3RzLCBzZXRUb3RhbENvc3RzXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW21vbnRobHlDb3N0cywgc2V0TW9udGhseUNvc3RzXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW2dyb3NzUHJvZml0LCBzZXRHcm9zc1Byb2ZpdF0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtuZXRQcm9maXQsIHNldE5ldFByb2ZpdF0gPSB1c2VTdGF0ZSgpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBwcm9qZWN0ICYmIHNldFNlbGVjdGVkUHJvamVjdChwcm9qZWN0WzBdKTtcclxuICAgIHByb2plY3QgJiYgc2V0UmV2ZW51ZUVsZW1lbnRzKHByb2plY3RbMF0ucmV2ZW51ZUVsZW1lbnRzKTtcclxuICAgIHByb2plY3QgJiYgc2V0Q29zdHNFbGVtZW50cyhwcm9qZWN0WzBdLmNvc3RzRWxlbWVudHMpO1xyXG4gICAgcHJvamVjdCAmJiBzZXRQZXJpb2RzKHByb2plY3RbMF0ucGVyaW9kcyk7XHJcbiAgICBwcm9qZWN0ICYmIHNldFRheChwcm9qZWN0WzBdLnRheCk7XHJcbiAgICAvLyBTdW0gZGF0YVxyXG4gICAgLy8gR2xvYmFsIHN0YXJ0IGRhdGVcclxuICAgIGNvbnN0IGNoYW5nZWRTdGFydERhdGUgPSBwcm9qZWN0WzBdLmdsb2JhbFN0YXJ0RGF0ZS5zZWNvbmRzICogMTAwMDtcclxuICAgIHByb2plY3RbMF0uZ2xvYmFsU3RhcnREYXRlICE9PSAnJyAmJiBzZXRTdGFydERhdGUobmV3IERhdGUoY2hhbmdlZFN0YXJ0RGF0ZSkpO1xyXG4gICAgY29uc3QgY2hhbmdlZEVuZERhdGUgPSBwcm9qZWN0WzBdLmdsb2JhbEVuZERhdGUuc2Vjb25kcyAqIDEwMDA7XHJcbiAgICAvLyBHbG9iYWwgZW5kIGRhdGVcclxuICAgIHByb2plY3RbMF0uZ2xvYmFsRW5kRGF0ZSAhPT0gJycgJiYgc2V0RW5kRGF0ZShuZXcgRGF0ZShjaGFuZ2VkRW5kRGF0ZSkpO1xyXG4gICAgLy8gUGVyaW9kc1xyXG4gICAgc2V0UGVyaW9kcyhwcm9qZWN0WzBdLnBlcmlvZHMpO1xyXG4gICAgLy8gVG90YWwgcmV2ZW51ZVxyXG4gICAgY29uc3QgdG90YWxSZXZlbnVlQXJyYXkgPSBwcm9qZWN0WzBdLnJldmVudWVFbGVtZW50cy5tYXAoKGVsZW1lbnQpID0+IHBhcnNlSW50KGVsZW1lbnQudmFsdWUgKiBlbGVtZW50LnBlcmlvZHMubGVuZ3RoKSk7XHJcbiAgICBjb25zdCB0b3RhbFJldmVudWUgPSB0b3RhbFJldmVudWVBcnJheS5yZWR1Y2UoKGEsIGIpID0+IHtcclxuICAgICAgcmV0dXJuIGEgKyBiO1xyXG4gICAgfSwgMCk7XHJcbiAgICBzZXRUb3RhbFJldmVudWUoTnVtYmVyLmlzTmFOKHRvdGFsUmV2ZW51ZSkgPyAwIDogTWF0aC5yb3VuZCh0b3RhbFJldmVudWUpKTtcclxuICAgIC8vIE1vbnRobHkgcmV2ZW51ZVxyXG4gICAgY29uc3QgcGVyaW9kTGVuZ3RoID0gcHJvamVjdFswXS5wZXJpb2RzLmxlbmd0aDtcclxuICAgIGNvbnN0IG1vbnRobHlSZXZlbnVlID0gdG90YWxSZXZlbnVlIC8gcGVyaW9kTGVuZ3RoO1xyXG4gICAgc2V0TW9udGhseVJldmVudWUoTnVtYmVyLmlzTmFOKG1vbnRobHlSZXZlbnVlKSA/IDAgOiBNYXRoLnJvdW5kKG1vbnRobHlSZXZlbnVlKSk7XHJcbiAgICAvLyBUb3RhbCBjb3N0c1xyXG4gICAgY29uc3QgdG90YWxDb3N0c0FycmF5ID0gcHJvamVjdFswXS5jb3N0c0VsZW1lbnRzLm1hcCgoZWxlbWVudCkgPT4gcGFyc2VJbnQoZWxlbWVudC52YWx1ZSAqIGVsZW1lbnQucGVyaW9kcy5sZW5ndGgpKTtcclxuICAgIGNvbnN0IHRvdGFsQ29zdHMgPSB0b3RhbENvc3RzQXJyYXkucmVkdWNlKChhLCBiKSA9PiB7XHJcbiAgICAgIHJldHVybiBhICsgYjtcclxuICAgIH0sIDApO1xyXG4gICAgc2V0VG90YWxDb3N0cyhOdW1iZXIuaXNGaW5pdGUodG90YWxDb3N0cykgPyBNYXRoLnJvdW5kKHRvdGFsQ29zdHMpIDogMCk7XHJcbiAgICAvLyBNb250aGx5IGNvc3RzXHJcbiAgICBjb25zdCBtb250aGx5Q29zdHMgPSB0b3RhbENvc3RzIC8gcGVyaW9kTGVuZ3RoO1xyXG4gICAgc2V0TW9udGhseUNvc3RzKE51bWJlci5pc0Zpbml0ZShtb250aGx5Q29zdHMpID8gTWF0aC5yb3VuZChtb250aGx5Q29zdHMpIDogMCk7XHJcbiAgICAvLyBHcm9zcyBwcm9maXRcclxuICAgIGNvbnN0IGdyb3NzUHJvZml0ID0gdG90YWxSZXZlbnVlIC0gdG90YWxDb3N0cztcclxuICAgIHNldEdyb3NzUHJvZml0KE51bWJlci5pc0Zpbml0ZShncm9zc1Byb2ZpdCkgPyBNYXRoLnJvdW5kKGdyb3NzUHJvZml0KSA6IDApO1xyXG4gICAgLy8gTmV0IHByb2ZpdFxyXG4gICAgY29uc3QgdGF4ID0gcGFyc2VJbnQocHJvamVjdFswXS50YXgpO1xyXG4gICAgY29uc3QgbmV0UHJvZml0ID0gZ3Jvc3NQcm9maXQgLSAodGF4IC8gMTAwKSAqIGdyb3NzUHJvZml0O1xyXG4gICAgc2V0TmV0UHJvZml0KE51bWJlci5pc0Zpbml0ZShuZXRQcm9maXQpID8gTWF0aC5yb3VuZChuZXRQcm9maXQpIDogMCk7XHJcbiAgfSwgW3Byb2plY3RdKTtcclxuICAvLyAgIGNvbnN0IFtjb21wZXRpdG9ycywgc2V0Q29tcGV0aXRvcnNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnNvbGUubG9nKHNlbGVjdGVkUHJvamVjdCk7XHJcbiAgY29uc29sZS5sb2cocmV2ZW51ZUVsZW1lbnRzKTtcclxuICBjb25zb2xlLmxvZyhncm9zc1Byb2ZpdCk7XHJcbiAgY29uc29sZS5sb2cobmV0UHJvZml0KTtcclxuXHJcbiAgaWYgKHJvdXRlci5pc0ZhbGxiYWNrKSB7XHJcbiAgICByZXR1cm4gPEJvdW5jZUxvYWRlckNvbXBvbmVudCAvPjtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiB3LWZ1bGwgcmVsYXRpdmUgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWF4LXctZnVsbCByZWxhdGl2ZSBtdC0xMiBsZzFDb250YWluZXI6bXQtMTYgbWItMTYgcHgtMzJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGdyaWQgZ3JpZC1jb2xzLTIgZ3JpZC1yb3dzLTEgZ3JpZC1mbG93LWNvbFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgaGVpZ2h0PXsoc2l6ZS53aWR0aCA+IDg2MCAmJiAzMCkgfHwgKHNpemUud2lkdGggPCA4NjAgJiYgc2l6ZS53aWR0aCA+IDY4MCAmJiAyNikgfHwgKHNpemUud2lkdGggPCA2ODAgJiYgMjIpfVxyXG4gICAgICAgICAgICAgIHdpZHRoPXsoc2l6ZS53aWR0aCA+IDg2MCAmJiAzMCkgfHwgKHNpemUud2lkdGggPCA4NjAgJiYgc2l6ZS53aWR0aCA+IDY4MCAmJiAyNikgfHwgKHNpemUud2lkdGggPCA2ODAgJiYgMjIpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZpbGwtY3VycmVudCB0ZXh0LXByaW1hcnkgZGFyazp0ZXh0LXByaW1hcnlkYXJrXCJcclxuICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDEyOCAxMjhcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPHRpdGxlPkxhbmRpbmcgU3VjY2VzczwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgPGcgaWQ9XCJMYW5kaW5nX1N1Y2Nlc3NcIiBkYXRhLW5hbWU9XCJMYW5kaW5nIFN1Y2Nlc3NcIj5cclxuICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNscy0xXCJcclxuICAgICAgICAgICAgICAgICAgZD1cIk0xMDkuMyw5MC4xQTQ2LDQ2LDAsMCwwLDY1LDM2VjIwLjA4YzEuNzgtLjYyLDcuMjEtMi4xNCwxMi41Ny4yM2ExOS4zMywxOS4zMywwLDAsMCwxNC44MiwwYy44Ny0uMzguNjEuMzEuNjEtMTcuOTNhMSwxLDAsMCwwLTEuNDMtLjkzYy0uMDcsMC02LjY5LDIuODctMTMuMTgsMEExOS40MSwxOS40MSwwLDAsMCw2NSwuOTMsMSwxLDAsMCwwLDYzLDFWMzZhNDUuODYsNDUuODYsMCwwLDAtMjguNjYsMTAuOEMxNi4xOCw0MC40OCw0LDQwLC43OSw0NS41MS0yLjI5LDUwLjg2LDMuOTQsNTkuMywxMCw2NS42OEExMSwxMSwwLDAsMCwxOCw4M2MuODEsMzguNDEsNDYuMDgsNTkuMiw3NS42NiwzNC4yMSw4LjUzLDMsMjksOS4xNSwzMy41NSwxLjMxQzEzMC4zOSwxMTMsMTIzLjg2LDEwMi42NSwxMDkuMyw5MC4xWk03Ny41OSwzLjMxQTE5LjM5LDE5LjM5LDAsMCwwLDkxLDMuODNWMTguNjhjLTEuNzkuNjItNy4yMiwyLjEzLTEyLjU3LS4yM0ExOS4xOSwxOS4xOSwwLDAsMCw2NSwxNy45M1YzLjA4QzY2LjgxLDIuNDYsNzIuMjQsMSw3Ny41OSwzLjMxWk02NSw0NXYtN2MzOS42OS45MSw1OCw1MC4yNywyOC4yMSw3Ni44MUM3MS4zMiwxMDcsNDYsOTIuNjYsMjcuNzcsNzguNjRhMTEsMTEsMCwwLDAtMy4yLTE2LjEzQTQzLjg4LDQzLjg4LDAsMCwxLDYzLDM4LjA2VjQ1QTEsMSwwLDAsMCw2NSw0NVpNMzIuNTUsNDguMzZhNDYuMjEsNDYuMjEsMCwwLDAtOS44MywxMy4yOCwxMC45MywxMC45MywwLDAsMC0xMS40LDIuNDdDLTguMzksNDMuMjMsNS4yMywzOS4wOCwzMi41NSw0OC4zNlpNMTAsNzJhOSw5LDAsMSwxLDksOUE5LDksMCwwLDEsMTAsNzJabTEwLDExYTExLDExLDAsMCwwLDYuMzQtMi44MmMxOC40NSwxNC4yMSw0My40NSwyOC4zNSw2NS4wNSwzNi4yMkM2MywxMzkuMTYsMjAuODMsMTE5LjEsMjAuMDUsODNabTEwNS40LDM0LjVjLTIuNTEsNC4zNS0xNCwzLjYyLTMwLTEuODVhNDUuNjEsNDUuNjEsMCwwLDAsMTMuNDItMjMuMjFDMTIxLjU5LDEwMy41OCwxMjgsMTEzLjEyLDEyNS40NSwxMTcuNDdaXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5ZGFyayB0ZXh0LWxnIG1kQ29udGFpbmVyOnRleHQteGwgbGdDb250YWluZXI6dGV4dC0yeGwgbXQtMiBwbC0yIGRhcms6dGV4dC1iYWNrZ3JvdW5kXCI+XHJcbiAgICAgICAgICAgICAgQ2FzaCBmbG93IGFuYWx5c2lzXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1zZWNvbmRhcnkgdGV4dC14cyBtZENvbnRhaW5lcjp0ZXh0LXNtIGxnQ29udGFpbmVyOnRleHQtYmFzZSB0ZXh0LWdyYXkgcmVsYXRpdmUgLXRvcC0xIGxnQ29udGFpbmVyOnRvcC0wXCI+XHJcbiAgICAgICAgICAgIE1hbmFnZSB5b3VyIHN0YXJ0dXAgY2FzaCBmbG93XHJcbiAgICAgICAgICA8L2gxPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGdyaWQgZ3JpZC1jb2xzLTJmciBncmlkLXJvd3MtMWZyIGxnQ29udGFpbmVyOmdyaWQtY29scy0zZnIgbGdDb250YWluZXI6Z3JpZC1yb3dzLTFmciBnYXAteS04IGdhcC14LTYgc21Db250YWluZXI6Z2FwLXgtMzIgbWRDb250YWluZXI6Z2FwLXgtMTIgbXQtMTJcIj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgaWQ9XCJtYWluLWRhdGVwaWNrZXJcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgcm91bmRlZC0yeGwgcHktMyBweC0zIG1kQ29udGFpbmVyOnB5LTMgbWRDb250YWluZXI6cHgtNCBsZ0NvbnRhaW5lcjpweC02IGxnQ29udGFpbmVyOnB5LTQgc2hhZG93LW1kIGdyaWQgZ3JpZC1jb2xzLTJmciBpdGVtcy1jZW50ZXIgdGV4dC14cyBtZENvbnRhaW5lcjp0ZXh0LXNtIGxnQ29udGFpbmVyOnRleHQtYmFzZVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9XCIvY2FzaC1mbG93L2NhbGVuZGFyLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9eyhzaXplLndpZHRoID4gODYwICYmIDI1KSB8fCAoc2l6ZS53aWR0aCA8IDg2MCAmJiBzaXplLndpZHRoID4gNjgwICYmIDIyKSB8fCAoc2l6ZS53aWR0aCA8IDY4MCAmJiAxOCl9XHJcbiAgICAgICAgICAgICAgICB3aWR0aD17KHNpemUud2lkdGggPiA4NjAgJiYgMjUpIHx8IChzaXplLndpZHRoIDwgODYwICYmIHNpemUud2lkdGggPiA2ODAgJiYgMjIpIHx8IChzaXplLndpZHRoIDwgNjgwICYmIDE4KX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1sLTIgdGV4dC1wcmltYXJ5ZGFya1wiPlN0YXJ0OjwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtzdGFydERhdGUgJiYgIWlzTW9iaWxlID8gKFxyXG4gICAgICAgICAgICAgIDxEYXRlUGlja2VyXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZD17c3RhcnREYXRlfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhkYXRlKSA9PiBvblN0YXJ0RGF0ZVVwZGF0ZShkYXRlKX1cclxuICAgICAgICAgICAgICAgIGRhdGVGb3JtYXQ9XCJNTU1NIHl5eXlcIlxyXG4gICAgICAgICAgICAgICAgc2hvd01vbnRoWWVhclBpY2tlclxyXG4gICAgICAgICAgICAgICAgbWF4RGF0ZT17YWRkWWVhcnMobmV3IERhdGUoKSwgMyl9XHJcbiAgICAgICAgICAgICAgICBtaW5EYXRlPXtuZXcgRGF0ZSgpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPERhdGVQaWNrZXJcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkPXtzdGFydERhdGV9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGRhdGUpID0+IG9uU3RhcnREYXRlVXBkYXRlKGRhdGUpfVxyXG4gICAgICAgICAgICAgICAgZGF0ZUZvcm1hdD1cIk1NTU0geXl5eVwiXHJcbiAgICAgICAgICAgICAgICBzaG93TW9udGhZZWFyUGlja2VyXHJcbiAgICAgICAgICAgICAgICBtYXhEYXRlPXthZGRZZWFycyhuZXcgRGF0ZSgpLCAzKX1cclxuICAgICAgICAgICAgICAgIG1pbkRhdGU9e25ldyBEYXRlKCl9XHJcbiAgICAgICAgICAgICAgICB3aXRoUG9ydGFsXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBpZD1cIm1haW4tZGF0ZXBpY2tlclwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy13aGl0ZSByb3VuZGVkLTJ4bCBweS0zIHB4LTMgbWRDb250YWluZXI6cHktMyBtZENvbnRhaW5lcjpweC00IGxnQ29udGFpbmVyOnB4LTYgbGdDb250YWluZXI6cHktNCBzaGFkb3ctbWQgZ3JpZCBncmlkLWNvbHMtMmZyIGl0ZW1zLWNlbnRlciB0ZXh0LXhzIG1kQ29udGFpbmVyOnRleHQtc20gbGdDb250YWluZXI6dGV4dC1iYXNlXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz1cIi9jYXNoLWZsb3cvaG91cmdsYXNzMS5zdmdcIlxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PXsoc2l6ZS53aWR0aCA+IDg2MCAmJiAyNSkgfHwgKHNpemUud2lkdGggPCA4NjAgJiYgc2l6ZS53aWR0aCA+IDY4MCAmJiAyMikgfHwgKHNpemUud2lkdGggPCA2ODAgJiYgMTgpfVxyXG4gICAgICAgICAgICAgICAgd2lkdGg9eyhzaXplLndpZHRoID4gODYwICYmIDI1KSB8fCAoc2l6ZS53aWR0aCA8IDg2MCAmJiBzaXplLndpZHRoID4gNjgwICYmIDIyKSB8fCAoc2l6ZS53aWR0aCA8IDY4MCAmJiAxOCl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtbC0yIHRleHQtcHJpbWFyeWRhcmtcIj5FbmQ6PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgey8qIHtlbmREYXRlICYmICFpc01vYmlsZSA/IChcclxuICAgICAgICAgICAgICAgIDxEYXRlUGlja2VyXHJcbiAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXtlbmREYXRlfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGRhdGUpID0+IG9uRW5kRGF0ZVVwZGF0ZShkYXRlKX1cclxuICAgICAgICAgICAgICAgICAgZGF0ZUZvcm1hdD1cIk1NTU0geXl5eVwiXHJcbiAgICAgICAgICAgICAgICAgIHNob3dNb250aFllYXJQaWNrZXJcclxuICAgICAgICAgICAgICAgICAgbWF4RGF0ZT17YWRkWWVhcnMobmV3IERhdGUoKSwgMyl9XHJcbiAgICAgICAgICAgICAgICAgIG1pbkRhdGU9e25ldyBEYXRlKCl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8RGF0ZVBpY2tlclxyXG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZD17ZW5kRGF0ZX1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhkYXRlKSA9PiBvbkVuZERhdGVVcGRhdGUoZGF0ZSl9XHJcbiAgICAgICAgICAgICAgICAgIGRhdGVGb3JtYXQ9XCJNTU1NIHl5eXlcIlxyXG4gICAgICAgICAgICAgICAgICBzaG93TW9udGhZZWFyUGlja2VyXHJcbiAgICAgICAgICAgICAgICAgIG1heERhdGU9e2FkZFllYXJzKG5ldyBEYXRlKCksIDMpfVxyXG4gICAgICAgICAgICAgICAgICBtaW5EYXRlPXtuZXcgRGF0ZSgpfVxyXG4gICAgICAgICAgICAgICAgICB3aXRoUG9ydGFsXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICl9ICovfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgd2lkdGg6XHJcbiAgICAgICAgICAgICAgICAoc2l6ZS53aWR0aCA+IDg2MCAmJiAnMTAwJScpIHx8XHJcbiAgICAgICAgICAgICAgICAoc2l6ZS53aWR0aCA8IDg2MCAmJiBzaXplLndpZHRoID4gNjgwICYmICc0NyUnKSB8fFxyXG4gICAgICAgICAgICAgICAgKHNpemUud2lkdGggPCA2ODAgJiYgc2l6ZS53aWR0aCA+IDUyMCAmJiAnNDAlJykgfHxcclxuICAgICAgICAgICAgICAgIChzaXplLndpZHRoIDwgNTIwICYmICc0NyUnKSxcclxuICAgICAgICAgICAgICBncmlkQ29sdW1uU3RhcnQ6IHNpemUud2lkdGggPCA4NjAgPyAnMScgOiAndW5zZXQnLFxyXG4gICAgICAgICAgICAgIGdyaWRDb2x1bW5FbmQ6IHNpemUud2lkdGggPCA4NjAgPyAnMycgOiAndW5zZXQnLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwbGFjZS1zZWxmLWNlbnRlciBiZy13aGl0ZSByb3VuZGVkLTJ4bCBweS0zIHB4LTMgbWRDb250YWluZXI6cHktMyBtZENvbnRhaW5lcjpweC00IGxnQ29udGFpbmVyOnB4LTYgbGdDb250YWluZXI6cHktNCBzaGFkb3ctbWQgZ3JpZCBncmlkLWNvbHMtMmZyIGl0ZW1zLWNlbnRlciB0ZXh0LXhzIG1kQ29udGFpbmVyOnRleHQtc20gbGdDb250YWluZXI6dGV4dC1iYXNlXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz1cIi9jYXNoLWZsb3cvdGF4LnN2Z1wiXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9eyhzaXplLndpZHRoID4gODYwICYmIDI1KSB8fCAoc2l6ZS53aWR0aCA8IDg2MCAmJiBzaXplLndpZHRoID4gNjgwICYmIDIyKSB8fCAoc2l6ZS53aWR0aCA8IDY4MCAmJiAxOCl9XHJcbiAgICAgICAgICAgICAgICB3aWR0aD17KHNpemUud2lkdGggPiA4NjAgJiYgMjUpIHx8IChzaXplLndpZHRoIDwgODYwICYmIHNpemUud2lkdGggPiA2ODAgJiYgMjIpIHx8IChzaXplLndpZHRoIDwgNjgwICYmIDE4KX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1sLTJcIj5UYXg6PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCIgc3R5bGU9e3sgdGV4dEFsaWduTGFzdDogJ3JpZ2h0JyB9fT5cclxuICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJ0YXgtaW5wdXRcIiB2YWx1ZT17c2VsZWN0ZWRQcm9qZWN0LnRheH0gY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIGZvY3VzOm91dGxpbmUtbm9uZVwiIC8+XHJcbiAgICAgICAgICAgICAgPHA+JTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGlkPVwiY2hhcnRDb250YWluZXJcIiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC0xLzIgcC00IG1kQ29udGFpbmVyOnAtOCBiZy13aGl0ZSByb3VuZGVkLTJ4bCBtdC0xMiBzaGFkb3ctbWRcIj5cclxuICAgICAgICAgIHsvKiA8Y2FudmFzIHJlZj17Y2hhcnRSZWZ9IGhlaWdodD17NzV9PjwvY2FudmFzPiAqL31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBncmlkIGdyaWQtY29scy0yZnIgZ3JpZC1yb3dzLTNmciBsZzFDb250YWluZXI6Z3JpZC1jb2xzLTNmciBsZzFDb250YWluZXI6Z3JpZC1yb3dzLTJmciBnYXAteC02IHNtQ29udGFpbmVyOmdhcC14LTEyIGdhcC15LTggbXQtMTJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIHJvdW5kZWQtMnhsIHB5LTMgcHgtMyBtZENvbnRhaW5lcjpweS0zIG1kQ29udGFpbmVyOnB4LTQgbGdDb250YWluZXI6cHgtNiBsZ0NvbnRhaW5lcjpweS00IHNoYWRvdy1tZCBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgdGV4dC14cyBtZENvbnRhaW5lcjp0ZXh0LXNtIGxnQ29udGFpbmVyOnRleHQtYmFzZVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPVwiL2Nhc2gtZmxvdy9yZXZlbnVlLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9eyhzaXplLndpZHRoID4gODYwICYmIDI1KSB8fCAoc2l6ZS53aWR0aCA8IDg2MCAmJiBzaXplLndpZHRoID4gNjgwICYmIDIyKSB8fCAoc2l6ZS53aWR0aCA8IDY4MCAmJiAxOCl9XHJcbiAgICAgICAgICAgICAgICB3aWR0aD17KHNpemUud2lkdGggPiA4NjAgJiYgMjUpIHx8IChzaXplLndpZHRoIDwgODYwICYmIHNpemUud2lkdGggPiA2ODAgJiYgMjIpIHx8IChzaXplLndpZHRoIDwgNjgwICYmIDE4KX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1sLTJcIj5Ub3RhbCByZXZlbnVlOjwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxwPiR7dG90YWxSZXZlbnVlfTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgcm91bmRlZC0yeGwgcHktMyBweC0zIG1kQ29udGFpbmVyOnB5LTMgbWRDb250YWluZXI6cHgtNCBsZ0NvbnRhaW5lcjpweC02IGxnQ29udGFpbmVyOnB5LTQgc2hhZG93LW1kIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciB0ZXh0LXhzIG1kQ29udGFpbmVyOnRleHQtc20gbGdDb250YWluZXI6dGV4dC1iYXNlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9XCIvY2FzaC1mbG93L21vbnRobHkuc3ZnXCJcclxuICAgICAgICAgICAgICAgIGhlaWdodD17KHNpemUud2lkdGggPiA4NjAgJiYgMjUpIHx8IChzaXplLndpZHRoIDwgODYwICYmIHNpemUud2lkdGggPiA2ODAgJiYgMjIpIHx8IChzaXplLndpZHRoIDwgNjgwICYmIDE4KX1cclxuICAgICAgICAgICAgICAgIHdpZHRoPXsoc2l6ZS53aWR0aCA+IDg2MCAmJiAyNSkgfHwgKHNpemUud2lkdGggPCA4NjAgJiYgc2l6ZS53aWR0aCA+IDY4MCAmJiAyMikgfHwgKHNpemUud2lkdGggPCA2ODAgJiYgMTgpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWwtMlwiPk1vbnRobHkgcmV2ZW51ZTo8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8cD4ke21vbnRobHlSZXZlbnVlfTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgcm91bmRlZC0yeGwgcHktMyBweC0zIG1kQ29udGFpbmVyOnB5LTMgbWRDb250YWluZXI6cHgtNCBsZ0NvbnRhaW5lcjpweC02IGxnQ29udGFpbmVyOnB5LTQgc2hhZG93LW1kIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciB0ZXh0LXhzIG1kQ29udGFpbmVyOnRleHQtc20gbGdDb250YWluZXI6dGV4dC1iYXNlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9XCIvY2FzaC1mbG93L2Nvc3RzLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9eyhzaXplLndpZHRoID4gODYwICYmIDI1KSB8fCAoc2l6ZS53aWR0aCA8IDg2MCAmJiBzaXplLndpZHRoID4gNjgwICYmIDIyKSB8fCAoc2l6ZS53aWR0aCA8IDY4MCAmJiAxOCl9XHJcbiAgICAgICAgICAgICAgICB3aWR0aD17KHNpemUud2lkdGggPiA4NjAgJiYgMjUpIHx8IChzaXplLndpZHRoIDwgODYwICYmIHNpemUud2lkdGggPiA2ODAgJiYgMjIpIHx8IChzaXplLndpZHRoIDwgNjgwICYmIDE4KX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1sLTJcIj5Ub3RhbCBjb3N0czo8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8cD4ke3RvdGFsQ29zdHN9PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBiZy13aGl0ZSByb3VuZGVkLTJ4bCBweS0zIHB4LTMgbWRDb250YWluZXI6cHktMyBtZENvbnRhaW5lcjpweC00IGxnQ29udGFpbmVyOnB4LTYgbGdDb250YWluZXI6cHktNCBzaGFkb3ctbWQgZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHRleHQteHMgbWRDb250YWluZXI6dGV4dC1zbSBsZ0NvbnRhaW5lcjp0ZXh0LWJhc2VcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz1cIi9jYXNoLWZsb3cvbW9udGhseS1jb3N0cy5zdmdcIlxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PXsoc2l6ZS53aWR0aCA+IDg2MCAmJiAyNSkgfHwgKHNpemUud2lkdGggPCA4NjAgJiYgc2l6ZS53aWR0aCA+IDY4MCAmJiAyMikgfHwgKHNpemUud2lkdGggPCA2ODAgJiYgMTgpfVxyXG4gICAgICAgICAgICAgICAgd2lkdGg9eyhzaXplLndpZHRoID4gODYwICYmIDI1KSB8fCAoc2l6ZS53aWR0aCA8IDg2MCAmJiBzaXplLndpZHRoID4gNjgwICYmIDIyKSB8fCAoc2l6ZS53aWR0aCA8IDY4MCAmJiAxOCl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtbC0yXCI+TW9udGhseSBjb3N0czo8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8cD4ke21vbnRobHlDb3N0c308L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIHJvdW5kZWQtMnhsIHB5LTMgcHgtMyBtZENvbnRhaW5lcjpweS0zIG1kQ29udGFpbmVyOnB4LTQgbGdDb250YWluZXI6cHgtNiBsZ0NvbnRhaW5lcjpweS00IHNoYWRvdy1tZCBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgdGV4dC14cyBtZENvbnRhaW5lcjp0ZXh0LXNtIGxnQ29udGFpbmVyOnRleHQtYmFzZVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPVwiL2Nhc2gtZmxvdy9tZWdhcGhvbmUuc3ZnXCJcclxuICAgICAgICAgICAgICAgIGhlaWdodD17KHNpemUud2lkdGggPiA4NjAgJiYgMjUpIHx8IChzaXplLndpZHRoIDwgODYwICYmIHNpemUud2lkdGggPiA2ODAgJiYgMjIpIHx8IChzaXplLndpZHRoIDwgNjgwICYmIDE4KX1cclxuICAgICAgICAgICAgICAgIHdpZHRoPXsoc2l6ZS53aWR0aCA+IDg2MCAmJiAyNSkgfHwgKHNpemUud2lkdGggPCA4NjAgJiYgc2l6ZS53aWR0aCA+IDY4MCAmJiAyMikgfHwgKHNpemUud2lkdGggPCA2ODAgJiYgMTgpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWwtMlwiPkdyb3NzIHByb2ZpdDo8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8cD4ke2dyb3NzUHJvZml0fTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgcm91bmRlZC0yeGwgcHktMyBweC0zIG1kQ29udGFpbmVyOnB5LTMgbWRDb250YWluZXI6cHgtNCBsZ0NvbnRhaW5lcjpweC02IGxnQ29udGFpbmVyOnB5LTQgc2hhZG93LW1kIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciB0ZXh0LXhzIG1kQ29udGFpbmVyOnRleHQtc20gbGdDb250YWluZXI6dGV4dC1iYXNlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9XCIvY2FzaC1mbG93L25ldC13b3J0aC5zdmdcIlxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PXsoc2l6ZS53aWR0aCA+IDg2MCAmJiAyNSkgfHwgKHNpemUud2lkdGggPCA4NjAgJiYgc2l6ZS53aWR0aCA+IDY4MCAmJiAyMikgfHwgKHNpemUud2lkdGggPCA2ODAgJiYgMTgpfVxyXG4gICAgICAgICAgICAgICAgd2lkdGg9eyhzaXplLndpZHRoID4gODYwICYmIDI1KSB8fCAoc2l6ZS53aWR0aCA8IDg2MCAmJiBzaXplLndpZHRoID4gNjgwICYmIDIyKSB8fCAoc2l6ZS53aWR0aCA8IDY4MCAmJiAxOCl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtbC0yXCI+TmV0IHByb2ZpdDo8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8cD4ke25ldFByb2ZpdH08L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7LyogUmV2ZW51ZSAqL31cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICByZWY9e3JldmVudWVSZWZ9XHJcbiAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IDU1IH19XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJvdmVyZmxvdy1oaWRkZW4gcmVsYXRpdmUgdy1mdWxsIHJvdW5kZWQtMnhsIGJnLXdoaXRlIGRhcms6YmctYmFja2dyb3VuZCBweC00IHB5LTQgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgbXQtMTIgZmxleCBmbGV4LXdyYXAgc2hhZG93LW1kXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZ0NvbnRhaW5lcjptbC0yXCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBsZ0NvbnRhaW5lcjp0ZXh0LWJhc2VcIj5SZXZlbnVlPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZ0NvbnRhaW5lcjptci0yIGZsZXggZmxleC1ub3dyYXAgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgb25DbGljaz17b25SZXZlbnVlRWxlbWVudEFkZH1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgICAgIHNyYz1cIi9jYXNoLWZsb3cvYWRkLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9eyhzaXplLndpZHRoID4gODYwICYmIDIyKSB8fCAoc2l6ZS53aWR0aCA8IDg2MCAmJiBzaXplLndpZHRoID4gNjgwICYmIDE4KSB8fCAoc2l6ZS53aWR0aCA8IDY4MCAmJiAxNil9XHJcbiAgICAgICAgICAgICAgICB3aWR0aD17KHNpemUud2lkdGggPiA4NjAgJiYgMjIpIHx8IChzaXplLndpZHRoIDwgODYwICYmIHNpemUud2lkdGggPiA2ODAgJiYgMTgpIHx8IChzaXplLndpZHRoIDwgNjgwICYmIDE2KX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHJlZj17ZHJvcERvd25JY29ufVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17b25SZXZlbnVlU2hvd31cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1sLTIgY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgc3JjPVwiL2Nhc2gtZmxvdy9kcm9wZG93bi5zdmdcIlxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PXsoc2l6ZS53aWR0aCA+IDg2MCAmJiAyMikgfHwgKHNpemUud2lkdGggPCA4NjAgJiYgc2l6ZS53aWR0aCA+IDY4MCAmJiAxOCkgfHwgKHNpemUud2lkdGggPCA2ODAgJiYgMTYpfVxyXG4gICAgICAgICAgICAgICAgd2lkdGg9eyhzaXplLndpZHRoID4gODYwICYmIDIyKSB8fCAoc2l6ZS53aWR0aCA8IDg2MCAmJiBzaXplLndpZHRoID4gNjgwICYmIDE4KSB8fCAoc2l6ZS53aWR0aCA8IDY4MCAmJiAxNil9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgcmVmPXtpbm5lckNvbnRhaW5lclJldmVudWVSZWZ9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YHctZnVsbCAke1xyXG4gICAgICAgICAgICAgIHNpemUud2lkdGggPCAxMTIwXHJcbiAgICAgICAgICAgICAgICA/ICd0ZXh0LXNtIG1kQ29udGFpbmVyOnRleHQtYmFzZSBsZzFDb250YWluZXI6bXgtOCBsZzFDb250YWluZXI6bWItNiBtdC00ICBiZy1iYWNrZ3JvdW5kIHJvdW5kZWQtMnhsIHB4LTQgbWRDb250YWluZXI6cHgtNiBweS00J1xyXG4gICAgICAgICAgICAgICAgOiAndy1mdWxsIG14LTggbWItNiBtdC00ICBiZy1iYWNrZ3JvdW5kIHJvdW5kZWQtMnhsIHB4LTQgbWRDb250YWluZXI6cHgtNiBweS00J1xyXG4gICAgICAgICAgICB9YH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgey8qIDxociBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnkgdy1mdWxsXCIgLz4gKi99XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogc2l6ZS53aWR0aCA8IDUyMCAmJiAnMC42cmVtJyB9fVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBncmlkIGdyaWQtY29scy02ZnIgaXRlbXMtY2VudGVyIHRleHQteHMgbWRDb250YWluZXI6dGV4dC1zbSBsZzFDb250YWluZXI6dGV4dC1iYXNlXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXY+bmFtZTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+dHlwZTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+YW1vdW50PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj5zdGFydDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+ZW5kPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnkgdy1mdWxsXCIgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLWZ1bGwgdy1mdWxsIHJvdW5kZWQtMnhsIGZsZXggZmxleC13cmFwIGZsZXgtY29sXCI+XHJcbiAgICAgICAgICAgICAgPERyYWdEcm9wQ29udGV4dCBvbkRyYWdFbmQ9e2hhbmRsZU9uRHJhZ0VuZH0+XHJcbiAgICAgICAgICAgICAgICA8RHJvcHBhYmxlIGRyb3BwYWJsZUlkPVwiZWxlbWVudHNcIj5cclxuICAgICAgICAgICAgICAgICAgeyhwcm92aWRlZCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWxlbWVudHNcIiB7Li4ucHJvdmlkZWQuZHJvcHBhYmxlUHJvcHN9IHJlZj17cHJvdmlkZWQuaW5uZXJSZWZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAge3JldmVudWVFbGVtZW50cyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXZlbnVlRWxlbWVudHMubWFwKChlbGVtZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJhZ2dhYmxlIGtleT17ZWxlbWVudC5pbmRleH0gZHJhZ2dhYmxlSWQ9e2VsZW1lbnQuaW5kZXh9IGluZGV4PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsocHJvdmlkZWQpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmV2ZW51ZUVsZW1lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVkPXtwcm92aWRlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFJldmVudWVFbGVtZW50cz17c2V0UmV2ZW51ZUVsZW1lbnRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFpbkRvY3VtZW50PXttYWluRG9jdW1lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0SWQ9e3Byb2plY3RJZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50SWQ9e2RvY3VtZW50SWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXZlbnVlRWxlbWVudHM9e3JldmVudWVFbGVtZW50c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQ9e2VsZW1lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleD17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJhZ2dhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAge3Byb3ZpZGVkLnBsYWNlaG9sZGVyfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9Ecm9wcGFibGU+XHJcbiAgICAgICAgICAgICAgPC9EcmFnRHJvcENvbnRleHQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgey8qIENvc3RzICovfVxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIHJlZj17Y29zdHNSZWZ9XHJcbiAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IDU1IH19XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJvdmVyZmxvdy1oaWRkZW4gcmVsYXRpdmUgdy1mdWxsIHJvdW5kZWQtMnhsIGJnLXdoaXRlIGRhcms6YmctYmFja2dyb3VuZCBweC00IHB5LTQgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgbXQtOCBmbGV4IGZsZXgtd3JhcCBzaGFkb3ctbWRcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnQ29udGFpbmVyOm1sLTJcIj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGxnQ29udGFpbmVyOnRleHQtYmFzZVwiPkNvc3RzPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZ0NvbnRhaW5lcjptci0yIGZsZXggZmxleC1ub3dyYXAgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgb25DbGljaz17b25Db3N0c0VsZW1lbnRBZGR9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgICBzcmM9XCIvY2FzaC1mbG93L2FkZC5zdmdcIlxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PXsoc2l6ZS53aWR0aCA+IDg2MCAmJiAyMikgfHwgKHNpemUud2lkdGggPCA4NjAgJiYgc2l6ZS53aWR0aCA+IDY4MCAmJiAxOCkgfHwgKHNpemUud2lkdGggPCA2ODAgJiYgMTYpfVxyXG4gICAgICAgICAgICAgICAgd2lkdGg9eyhzaXplLndpZHRoID4gODYwICYmIDIyKSB8fCAoc2l6ZS53aWR0aCA8IDg2MCAmJiBzaXplLndpZHRoID4gNjgwICYmIDE4KSB8fCAoc2l6ZS53aWR0aCA8IDY4MCAmJiAxNil9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICByZWY9e2Ryb3BEb3duSWNvbkNvc3RzfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17b25Db3N0c1Nob3d9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC0yIGN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgICAgIHNyYz1cIi9jYXNoLWZsb3cvZHJvcGRvd24uc3ZnXCJcclxuICAgICAgICAgICAgICAgIGhlaWdodD17KHNpemUud2lkdGggPiA4NjAgJiYgMjIpIHx8IChzaXplLndpZHRoIDwgODYwICYmIHNpemUud2lkdGggPiA2ODAgJiYgMTgpIHx8IChzaXplLndpZHRoIDwgNjgwICYmIDE2KX1cclxuICAgICAgICAgICAgICAgIHdpZHRoPXsoc2l6ZS53aWR0aCA+IDg2MCAmJiAyMikgfHwgKHNpemUud2lkdGggPCA4NjAgJiYgc2l6ZS53aWR0aCA+IDY4MCAmJiAxOCkgfHwgKHNpemUud2lkdGggPCA2ODAgJiYgMTYpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIHJlZj17aW5uZXJDb250YWluZXJDb3N0c1JlZn1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgdy1mdWxsICR7XHJcbiAgICAgICAgICAgICAgc2l6ZS53aWR0aCA8IDExMjBcclxuICAgICAgICAgICAgICAgID8gJ3RleHQtc20gbWRDb250YWluZXI6dGV4dC1iYXNlIGxnMUNvbnRhaW5lcjpteC04IGxnMUNvbnRhaW5lcjptYi02IG10LTQgIGJnLWJhY2tncm91bmQgcm91bmRlZC0yeGwgcHgtNCBtZENvbnRhaW5lcjpweC02IHB5LTQnXHJcbiAgICAgICAgICAgICAgICA6ICd3LWZ1bGwgbXgtOCBtYi02IG10LTQgIGJnLWJhY2tncm91bmQgcm91bmRlZC0yeGwgcHgtNCBtZENvbnRhaW5lcjpweC02IHB5LTQnXHJcbiAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7LyogPGhyIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeSB3LWZ1bGxcIiAvPiAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgZ3JpZCBncmlkLWNvbHMtNmZyIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxkaXY+bmFtZTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+dHlwZTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+YW1vdW50PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj5zdGFydDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+ZW5kPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnkgdy1mdWxsXCIgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLWZ1bGwgdy1mdWxsIHJvdW5kZWQtMnhsIGZsZXggZmxleC13cmFwIGZsZXgtY29sXCI+XHJcbiAgICAgICAgICAgICAgPERyYWdEcm9wQ29udGV4dCBvbkRyYWdFbmQ9e2Nvc3RzSGFuZGxlT25EcmFnRW5kfT5cclxuICAgICAgICAgICAgICAgIDxEcm9wcGFibGUgZHJvcHBhYmxlSWQ9XCJlbGVtZW50c1wiPlxyXG4gICAgICAgICAgICAgICAgICB7KHByb3ZpZGVkKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbGVtZW50c1wiIHsuLi5wcm92aWRlZC5kcm9wcGFibGVQcm9wc30gcmVmPXtwcm92aWRlZC5pbm5lclJlZn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7Y29zdHNFbGVtZW50cyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3N0c0VsZW1lbnRzLm1hcCgoZWxlbWVudCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyYWdnYWJsZSBrZXk9e2VsZW1lbnQuaW5kZXh9IGRyYWdnYWJsZUlkPXtlbGVtZW50LmluZGV4fSBpbmRleD17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHByb3ZpZGVkKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvc3RzRWxlbWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZWQ9e3Byb3ZpZGVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q29zdHNFbGVtZW50cz17c2V0Q29zdHNFbGVtZW50c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1haW5Eb2N1bWVudD17bWFpbkRvY3VtZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdElkPXtwcm9qZWN0SWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudElkPXtkb2N1bWVudElkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29zdHNFbGVtZW50cz17Y29zdHNFbGVtZW50c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQ9e2VsZW1lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleD17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJhZ2dhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAge3Byb3ZpZGVkLnBsYWNlaG9sZGVyfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9Ecm9wcGFibGU+XHJcbiAgICAgICAgICAgICAgPC9EcmFnRHJvcENvbnRleHQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCBzbmFwc2hvdCA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oJ3Byb2plY3RzJykuZ2V0KCk7XHJcblxyXG4gIGNvbnN0IHByb2plY3RzID0gW107XHJcbiAgc25hcHNob3QuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbiAgICBwcm9qZWN0cy5wdXNoKGRvYy5kYXRhKCkpO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBwYXRocyA9IHByb2plY3RzLm1hcCgocHJvamVjdCkgPT4gKHtcclxuICAgIHBhcmFtczoge1xyXG4gICAgICBwcm9qZWN0OiBwcm9qZWN0LnByb2plY3ROYW1lLnRvU3RyaW5nKCksXHJcbiAgICAgIGlkOiBwcm9qZWN0LnByb2plY3RJZC50b1N0cmluZygpLFxyXG4gICAgfSxcclxuICB9KSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwYXRoczogcGF0aHMsXHJcbiAgICBmYWxsYmFjazogdHJ1ZSxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcclxuICBjb25zb2xlLmxvZyhwYXJhbXMpO1xyXG4gIC8vIGxldCByZWYgPSBkYi5jb2xsZWN0aW9uKCdwcm9qZWN0cycpLndoZXJlKCdwcm9qZWN0TmFtZScsICc9PScsIHBhcmFtcy5wcm9qZWN0KTtcclxuICBsZXQgcmVmID0gZGJcclxuICAgIC5jb2xsZWN0aW9uKCdwcm9qZWN0cycpXHJcbiAgICAuZG9jKHBhcmFtcy5pZClcclxuICAgIC5jb2xsZWN0aW9uKCdjYXNoRmxvdycpXHJcbiAgICAuZG9jKHBhcmFtcy5wcm9qZWN0KVxyXG4gICAgLmNvbGxlY3Rpb24oJ2lucHV0cycpXHJcbiAgICAud2hlcmUoJ3Byb2plY3RJZCcsICc9PScsIHBhcmFtcy5pZCk7XHJcblxyXG4gIGNvbnN0IHNuYXBzaG90ID0gYXdhaXQgcmVmLmdldCgpO1xyXG4gIGNvbnN0IHByb2plY3QgPSBbXTtcclxuXHJcbiAgc25hcHNob3QuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShzYWZlSnNvblN0cmluZ2lmeShkb2MuZGF0YSgpKSk7XHJcbiAgICBwcm9qZWN0LnB1c2goeyAuLi5kYXRhIH0pO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHsgcHJvamVjdCB9LFxyXG4gICAgcmV2YWxpZGF0ZTogMSxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVW5pcXVlQ2FzaGZsb3dQYWdlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9