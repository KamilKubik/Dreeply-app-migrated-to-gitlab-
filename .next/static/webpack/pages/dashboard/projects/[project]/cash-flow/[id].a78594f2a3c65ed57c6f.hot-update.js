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
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-datepicker */ "./node_modules/react-datepicker/dist/react-datepicker.min.js");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_13__);






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
      lineNumber: 83,
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
              lineNumber: 98,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("g", {
              id: "Landing_Success",
              "data-name": "Landing Success",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("path", {
                className: "cls-1",
                d: "M109.3,90.1A46,46,0,0,0,65,36V20.08c1.78-.62,7.21-2.14,12.57.23a19.33,19.33,0,0,0,14.82,0c.87-.38.61.31.61-17.93a1,1,0,0,0-1.43-.93c-.07,0-6.69,2.87-13.18,0A19.41,19.41,0,0,0,65,.93,1,1,0,0,0,63,1V36a45.86,45.86,0,0,0-28.66,10.8C16.18,40.48,4,40,.79,45.51-2.29,50.86,3.94,59.3,10,65.68A11,11,0,0,0,18,83c.81,38.41,46.08,59.2,75.66,34.21,8.53,3,29,9.15,33.55,1.31C130.39,113,123.86,102.65,109.3,90.1ZM77.59,3.31A19.39,19.39,0,0,0,91,3.83V18.68c-1.79.62-7.22,2.13-12.57-.23A19.19,19.19,0,0,0,65,17.93V3.08C66.81,2.46,72.24,1,77.59,3.31ZM65,45v-7c39.69.91,58,50.27,28.21,76.81C71.32,107,46,92.66,27.77,78.64a11,11,0,0,0-3.2-16.13A43.88,43.88,0,0,1,63,38.06V45A1,1,0,0,0,65,45ZM32.55,48.36a46.21,46.21,0,0,0-9.83,13.28,10.93,10.93,0,0,0-11.4,2.47C-8.39,43.23,5.23,39.08,32.55,48.36ZM10,72a9,9,0,1,1,9,9A9,9,0,0,1,10,72Zm10,11a11,11,0,0,0,6.34-2.82c18.45,14.21,43.45,28.35,65.05,36.22C63,139.16,20.83,119.1,20.05,83Zm105.4,34.5c-2.51,4.35-14,3.62-30-1.85a45.61,45.61,0,0,0,13.42-23.21C121.59,103.58,128,113.12,125.45,117.47Z"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 100,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
            className: "text-primarydark text-lg mdContainer:text-xl lgContainer:text-2xl mt-2 pl-2 dark:text-background",
            children: "Cash flow analysis"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h1", {
          className: "text-secondary text-xs mdContainer:text-sm lgContainer:text-base text-gray relative -top-1 lgContainer:top-0",
          children: "Manage your startup cash flow"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 111,
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
              lineNumber: 122,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
              className: "ml-2 text-primarydark",
              children: "Start:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 127,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 13
          }, _this), startDate && !react_device_detect__WEBPACK_IMPORTED_MODULE_5__["isMobile"] ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_datepicker__WEBPACK_IMPORTED_MODULE_11___default.a, {
            selected: startDate,
            onChange: function onChange(date) {
              return onStartDateUpdate(date);
            },
            dateFormat: "MMMM yyyy",
            showMonthYearPicker: true,
            maxDate: Object(date_fns__WEBPACK_IMPORTED_MODULE_12__["addYears"])(new Date(), 3),
            minDate: new Date()
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 15
          }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_datepicker__WEBPACK_IMPORTED_MODULE_11___default.a, {
            selected: startDate,
            onChange: function onChange(date) {
              return onStartDateUpdate(date);
            },
            dateFormat: "MMMM yyyy",
            showMonthYearPicker: true,
            maxDate: Object(date_fns__WEBPACK_IMPORTED_MODULE_12__["addYears"])(new Date(), 3),
            minDate: new Date(),
            withPortal: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          id: "main-datepicker",
          className: "w-full bg-white rounded-2xl py-3 px-3 mdContainer:py-3 mdContainer:px-4 lgContainer:px-6 lgContainer:py-4 shadow-md grid grid-cols-2fr items-center text-xs mdContainer:text-sm lgContainer:text-base",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "flex items-center",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
              src: "/cash-flow/hourglass1.svg",
              height: size.width > 860 && 25 || size.width < 860 && size.width > 680 && 22 || size.width < 680 && 18,
              width: size.width > 860 && 25 || size.width < 860 && size.width > 680 && 22 || size.width < 680 && 18
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 155,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
              className: "ml-2 text-primarydark",
              children: "End:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 160,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 154,
            columnNumber: 13
          }, _this), endDate && !react_device_detect__WEBPACK_IMPORTED_MODULE_5__["isMobile"] ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_datepicker__WEBPACK_IMPORTED_MODULE_11___default.a, {
            selected: endDate,
            onChange: function onChange(date) {
              return onEndDateUpdate(date);
            },
            dateFormat: "MMMM yyyy",
            showMonthYearPicker: true,
            maxDate: Object(date_fns__WEBPACK_IMPORTED_MODULE_12__["addYears"])(new Date(), 3),
            minDate: new Date()
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 163,
            columnNumber: 15
          }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_datepicker__WEBPACK_IMPORTED_MODULE_11___default.a, {
            selected: endDate,
            onChange: function onChange(date) {
              return onEndDateUpdate(date);
            },
            dateFormat: "MMMM yyyy",
            showMonthYearPicker: true,
            maxDate: Object(date_fns__WEBPACK_IMPORTED_MODULE_12__["addYears"])(new Date(), 3),
            minDate: new Date(),
            withPortal: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 172,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 150,
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
              lineNumber: 196,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
              className: "ml-2",
              children: "Tax:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 201,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 195,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "flex",
            style: {
              textAlignLast: 'right'
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
              id: "tax-input",
              value: tax,
              className: "w-full bg-white focus:outline-none"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 204,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
              children: "%"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 205,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 203,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 183,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        id: "chartContainer",
        className: "w-full h-1/2 p-4 mdContainer:p-8 bg-white rounded-2xl mt-12 shadow-md"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 209,
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
              lineNumber: 215,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
              className: "ml-2",
              children: "Total revenue:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 220,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 214,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
            children: ["$", totalRevenue]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 222,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 213,
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
              lineNumber: 226,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
              className: "ml-2",
              children: "Monthly revenue:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 231,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 225,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
            children: ["$", monthlyRevenue]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 233,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 224,
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
              lineNumber: 237,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
              className: "ml-2",
              children: "Total costs:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 242,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 236,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
            children: ["$", totalCosts]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 244,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 235,
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
              lineNumber: 248,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
              className: "ml-2",
              children: "Monthly costs:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 253,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 247,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
            children: ["$", monthlyCosts]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 255,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 246,
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
              lineNumber: 259,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
              className: "ml-2",
              children: "Gross profit:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 264,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 258,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
            children: ["$", grossProfit]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 266,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 257,
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
              lineNumber: 270,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
              className: "ml-2",
              children: "Net profit:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 275,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 269,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
            children: ["$", netProfit]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 277,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 268,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 212,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        // ref={revenueRef}
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
              lineNumber: 288,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 287,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "lgContainer:mr-2 flex flex-nowrap items-center",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
              className: "cursor-pointer",
              src: "/cash-flow/add.svg",
              height: size.width > 860 && 22 || size.width < 860 && size.width > 680 && 18 || size.width < 680 && 16,
              width: size.width > 860 && 22 || size.width < 860 && size.width > 680 && 18 || size.width < 680 && 16
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 291,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
              // ref={dropDownIcon}
              // onClick={onRevenueShow}
              className: "ml-2 cursor-pointer",
              src: "/cash-flow/dropdown.svg",
              height: size.width > 860 && 22 || size.width < 860 && size.width > 680 && 18 || size.width < 680 && 16,
              width: size.width > 860 && 22 || size.width < 860 && size.width > 680 && 18 || size.width < 680 && 16
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 297,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 290,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 286,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          // ref={innerContainerRevenueRef}
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
              lineNumber: 320,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              children: "type"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 321,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              children: "amount"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 322,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              children: "start"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 323,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              children: "end"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 324,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 325,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 316,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("hr", {
            className: "text-primary w-full"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 327,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "h-full w-full rounded-2xl flex flex-wrap flex-col",
            children: revenueElements && revenueElements.map(function (element, index) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {}, void 0, false) //   <RevenueElement
              //   provided={provided}
              //   setRevenueElements={setRevenueElements}
              //   mainDocument={mainDocument}
              //   projectId={projectId}
              //   documentId={documentId}
              //   revenueElements={revenueElements}
              //   element={element}
              //   index={index}
              // />
              ;
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 328,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 307,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 281,
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
              lineNumber: 356,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 355,
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
              lineNumber: 359,
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
              lineNumber: 366,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 358,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 354,
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
              lineNumber: 386,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              children: "type"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 387,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              children: "amount"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 388,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              children: "start"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 389,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              children: "end"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 390,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 391,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 385,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("hr", {
            className: "text-primary w-full"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 393,
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
                            lineNumber: 405,
                            columnNumber: 33
                          }, _this);
                        }
                      }, element.index, false, {
                        fileName: _jsxFileName,
                        lineNumber: 403,
                        columnNumber: 29
                      }, _this);
                    }), provided.placeholder]
                  }), void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 398,
                    columnNumber: 21
                  }, _this);
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 396,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 395,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 394,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 376,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 349,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 87,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGFzaGJvYXJkL3Byb2plY3RzL1twcm9qZWN0XS9jYXNoLWZsb3cvLmpzIl0sIm5hbWVzIjpbIlVuaXF1ZUNhc2hmbG93UGFnZSIsInByb2plY3QiLCJjb25zb2xlIiwibG9nIiwidXNlU3RhdGUiLCJzdGFydERhdGUiLCJzZXRTdGFydERhdGUiLCJlbmREYXRlIiwic2V0RW5kRGF0ZSIsInNlbGVjdGVkUHJvamVjdCIsInNldFNlbGVjdGVkUHJvamVjdCIsInJldmVudWVFbGVtZW50cyIsInNldFJldmVudWVFbGVtZW50cyIsImNvc3RzRWxlbWVudHMiLCJzZXRDb3N0c0VsZW1lbnRzIiwicGVyaW9kcyIsInNldFBlcmlvZHMiLCJ0YXgiLCJzZXRUYXgiLCJzaXplIiwidXNlV2luZG93U2l6ZSIsInRvdGFsUmV2ZW51ZSIsInNldFRvdGFsUmV2ZW51ZSIsIm1vbnRobHlSZXZlbnVlIiwic2V0TW9udGhseVJldmVudWUiLCJ0b3RhbENvc3RzIiwic2V0VG90YWxDb3N0cyIsIm1vbnRobHlDb3N0cyIsInNldE1vbnRobHlDb3N0cyIsImdyb3NzUHJvZml0Iiwic2V0R3Jvc3NQcm9maXQiLCJuZXRQcm9maXQiLCJzZXROZXRQcm9maXQiLCJ1c2VFZmZlY3QiLCJjaGFuZ2VkU3RhcnREYXRlIiwiZ2xvYmFsU3RhcnREYXRlIiwic2Vjb25kcyIsIkRhdGUiLCJjaGFuZ2VkRW5kRGF0ZSIsImdsb2JhbEVuZERhdGUiLCJ0b3RhbFJldmVudWVBcnJheSIsIm1hcCIsImVsZW1lbnQiLCJwYXJzZUludCIsInZhbHVlIiwibGVuZ3RoIiwicmVkdWNlIiwiYSIsImIiLCJOdW1iZXIiLCJpc05hTiIsIk1hdGgiLCJyb3VuZCIsInBlcmlvZExlbmd0aCIsInRvdGFsQ29zdHNBcnJheSIsImlzRmluaXRlIiwicm91dGVyIiwidXNlUm91dGVyIiwiaXNGYWxsYmFjayIsIndpZHRoIiwiaXNNb2JpbGUiLCJkYXRlIiwib25TdGFydERhdGVVcGRhdGUiLCJhZGRZZWFycyIsIm9uRW5kRGF0ZVVwZGF0ZSIsImdyaWRDb2x1bW5TdGFydCIsImdyaWRDb2x1bW5FbmQiLCJ0ZXh0QWxpZ25MYXN0IiwiaGVpZ2h0IiwiZm9udFNpemUiLCJpbmRleCIsImNvc3RzUmVmIiwib25Db3N0c0VsZW1lbnRBZGQiLCJkcm9wRG93bkljb25Db3N0cyIsIm9uQ29zdHNTaG93IiwiaW5uZXJDb250YWluZXJDb3N0c1JlZiIsImNvc3RzSGFuZGxlT25EcmFnRW5kIiwicHJvdmlkZWQiLCJkcm9wcGFibGVQcm9wcyIsImlubmVyUmVmIiwibWFpbkRvY3VtZW50IiwicHJvamVjdElkIiwiZG9jdW1lbnRJZCIsInBsYWNlaG9sZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsT0FBaUI7QUFBQTs7QUFBQSxNQUFkQyxPQUFjLFFBQWRBLE9BQWM7QUFDMUNDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLHlCQUFaLEVBQXVDRixPQUF2Qzs7QUFEMEMsa0JBRVJHLHNEQUFRLENBQUMsSUFBRCxDQUZBO0FBQUEsTUFFbkNDLFNBRm1DO0FBQUEsTUFFeEJDLFlBRndCOztBQUFBLG1CQUdaRixzREFBUSxDQUFDLElBQUQsQ0FISTtBQUFBLE1BR25DRyxPQUhtQztBQUFBLE1BRzFCQyxVQUgwQjs7QUFBQSxtQkFJSUosc0RBQVEsQ0FBQyxJQUFELENBSlo7QUFBQSxNQUluQ0ssZUFKbUM7QUFBQSxNQUlsQkMsa0JBSmtCOztBQUFBLG1CQUtJTixzREFBUSxFQUxaO0FBQUEsTUFLbkNPLGVBTG1DO0FBQUEsTUFLbEJDLGtCQUxrQjs7QUFBQSxtQkFNQVIsc0RBQVEsRUFOUjtBQUFBLE1BTW5DUyxhQU5tQztBQUFBLE1BTXBCQyxnQkFOb0I7O0FB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QTtBQUFBLG1CQWxCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBM0JGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXJRRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF3VkQsQ0E5WkQ7O0dBQU1uRixrQjtVQVNTb0IsbUUsRUFtREVxQyxxRDs7O0tBNURYekQsa0I7O0FBOGNTLGlLQUFBQSxrQkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kYXNoYm9hcmQvcHJvamVjdHMvW3Byb2plY3RdL2Nhc2gtZmxvdy9baWRdLmE3ODU5NGYyYTNjNjVlZDU3YzZmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBkYiB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2xpYi9maXJlYmFzZS1hZG1pbic7XHJcbmltcG9ydCB7IGRiIGFzIGRiQ2xpZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vbGliL2ZpcmViYXNlJztcclxuaW1wb3J0IHsgaXNNb2JpbGUgfSBmcm9tICdyZWFjdC1kZXZpY2UtZGV0ZWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnO1xyXG5pbXBvcnQgVW5pcXVlRWxlbWVudCBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb25lbnRzL2Rhc2hib2FyZC9zdGFydHVwL3Byb2plY3QvYnVzaW5lc3MtYXBwL2NvbXBldGl0b3JzL1VuaXF1ZUVsZW1lbnQnO1xyXG5pbXBvcnQgQm91bmNlTG9hZGVyQ29tcG9uZW50IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvQm91bmNlTG9hZGVyJztcclxuY29uc3Qgc2FmZUpzb25TdHJpbmdpZnkgPSByZXF1aXJlKCdzYWZlLWpzb24tc3RyaW5naWZ5Jyk7XHJcbmltcG9ydCB7IHVzZVdpbmRvd1NpemUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi91dGlscy91c2VXaW5kb3dTaXplJztcclxuXHJcbmltcG9ydCBEYXRlUGlja2VyIGZyb20gJ3JlYWN0LWRhdGVwaWNrZXInO1xyXG5pbXBvcnQgeyBhZGRZZWFycywgZm9ybWF0IH0gZnJvbSAnZGF0ZS1mbnMnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcblxyXG5jb25zdCBVbmlxdWVDYXNoZmxvd1BhZ2UgPSAoeyBwcm9qZWN0IH0pID0+IHtcclxuICBjb25zb2xlLmxvZygnUGFydGljdWxhciBwcm9qZWN0IC0tPiAnLCBwcm9qZWN0KTtcclxuICBjb25zdCBbc3RhcnREYXRlLCBzZXRTdGFydERhdGVdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2VuZERhdGUsIHNldEVuZERhdGVdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW3NlbGVjdGVkUHJvamVjdCwgc2V0U2VsZWN0ZWRQcm9qZWN0XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtyZXZlbnVlRWxlbWVudHMsIHNldFJldmVudWVFbGVtZW50c10gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtjb3N0c0VsZW1lbnRzLCBzZXRDb3N0c0VsZW1lbnRzXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW3BlcmlvZHMsIHNldFBlcmlvZHNdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbdGF4LCBzZXRUYXhdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBzaXplID0gdXNlV2luZG93U2l6ZSgpO1xyXG4gIC8vIFN1bSBkYXRhXHJcbiAgY29uc3QgW3RvdGFsUmV2ZW51ZSwgc2V0VG90YWxSZXZlbnVlXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW21vbnRobHlSZXZlbnVlLCBzZXRNb250aGx5UmV2ZW51ZV0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFt0b3RhbENvc3RzLCBzZXRUb3RhbENvc3RzXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW21vbnRobHlDb3N0cywgc2V0TW9udGhseUNvc3RzXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW2dyb3NzUHJvZml0LCBzZXRHcm9zc1Byb2ZpdF0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtuZXRQcm9maXQsIHNldE5ldFByb2ZpdF0gPSB1c2VTdGF0ZSgpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBwcm9qZWN0ICYmIHNldFNlbGVjdGVkUHJvamVjdChwcm9qZWN0WzBdKTtcclxuICAgIHByb2plY3QgJiYgc2V0UmV2ZW51ZUVsZW1lbnRzKHByb2plY3RbMF0ucmV2ZW51ZUVsZW1lbnRzKTtcclxuICAgIHByb2plY3QgJiYgc2V0Q29zdHNFbGVtZW50cyhwcm9qZWN0WzBdLmNvc3RzRWxlbWVudHMpO1xyXG4gICAgcHJvamVjdCAmJiBzZXRQZXJpb2RzKHByb2plY3RbMF0ucGVyaW9kcyk7XHJcbiAgICBwcm9qZWN0ICYmIHNldFRheChwcm9qZWN0WzBdLnRheCk7XHJcbiAgICAvLyBTdW0gZGF0YVxyXG4gICAgLy8gR2xvYmFsIHN0YXJ0IGRhdGVcclxuICAgIGNvbnN0IGNoYW5nZWRTdGFydERhdGUgPSBwcm9qZWN0WzBdLmdsb2JhbFN0YXJ0RGF0ZS5zZWNvbmRzICogMTAwMDtcclxuICAgIHByb2plY3RbMF0uZ2xvYmFsU3RhcnREYXRlICE9PSAnJyAmJiBzZXRTdGFydERhdGUobmV3IERhdGUoY2hhbmdlZFN0YXJ0RGF0ZSkpO1xyXG4gICAgY29uc3QgY2hhbmdlZEVuZERhdGUgPSBwcm9qZWN0WzBdLmdsb2JhbEVuZERhdGUuc2Vjb25kcyAqIDEwMDA7XHJcbiAgICAvLyBHbG9iYWwgZW5kIGRhdGVcclxuICAgIHByb2plY3RbMF0uZ2xvYmFsRW5kRGF0ZSAhPT0gJycgJiYgc2V0RW5kRGF0ZShuZXcgRGF0ZShjaGFuZ2VkRW5kRGF0ZSkpO1xyXG4gICAgLy8gUGVyaW9kc1xyXG4gICAgc2V0UGVyaW9kcyhwcm9qZWN0WzBdLnBlcmlvZHMpO1xyXG4gICAgLy8gVG90YWwgcmV2ZW51ZVxyXG4gICAgY29uc3QgdG90YWxSZXZlbnVlQXJyYXkgPSBwcm9qZWN0WzBdLnJldmVudWVFbGVtZW50cy5tYXAoKGVsZW1lbnQpID0+IHBhcnNlSW50KGVsZW1lbnQudmFsdWUgKiBlbGVtZW50LnBlcmlvZHMubGVuZ3RoKSk7XHJcbiAgICBjb25zdCB0b3RhbFJldmVudWUgPSB0b3RhbFJldmVudWVBcnJheS5yZWR1Y2UoKGEsIGIpID0+IHtcclxuICAgICAgcmV0dXJuIGEgKyBiO1xyXG4gICAgfSwgMCk7XHJcbiAgICBzZXRUb3RhbFJldmVudWUoTnVtYmVyLmlzTmFOKHRvdGFsUmV2ZW51ZSkgPyAwIDogTWF0aC5yb3VuZCh0b3RhbFJldmVudWUpKTtcclxuICAgIC8vIE1vbnRobHkgcmV2ZW51ZVxyXG4gICAgY29uc3QgcGVyaW9kTGVuZ3RoID0gcHJvamVjdFswXS5wZXJpb2RzLmxlbmd0aDtcclxuICAgIGNvbnN0IG1vbnRobHlSZXZlbnVlID0gdG90YWxSZXZlbnVlIC8gcGVyaW9kTGVuZ3RoO1xyXG4gICAgc2V0TW9udGhseVJldmVudWUoTnVtYmVyLmlzTmFOKG1vbnRobHlSZXZlbnVlKSA/IDAgOiBNYXRoLnJvdW5kKG1vbnRobHlSZXZlbnVlKSk7XHJcbiAgICAvLyBUb3RhbCBjb3N0c1xyXG4gICAgY29uc3QgdG90YWxDb3N0c0FycmF5ID0gcHJvamVjdFswXS5jb3N0c0VsZW1lbnRzLm1hcCgoZWxlbWVudCkgPT4gcGFyc2VJbnQoZWxlbWVudC52YWx1ZSAqIGVsZW1lbnQucGVyaW9kcy5sZW5ndGgpKTtcclxuICAgIGNvbnN0IHRvdGFsQ29zdHMgPSB0b3RhbENvc3RzQXJyYXkucmVkdWNlKChhLCBiKSA9PiB7XHJcbiAgICAgIHJldHVybiBhICsgYjtcclxuICAgIH0sIDApO1xyXG4gICAgc2V0VG90YWxDb3N0cyhOdW1iZXIuaXNGaW5pdGUodG90YWxDb3N0cykgPyBNYXRoLnJvdW5kKHRvdGFsQ29zdHMpIDogMCk7XHJcbiAgICAvLyBNb250aGx5IGNvc3RzXHJcbiAgICBjb25zdCBtb250aGx5Q29zdHMgPSB0b3RhbENvc3RzIC8gcGVyaW9kTGVuZ3RoO1xyXG4gICAgc2V0TW9udGhseUNvc3RzKE51bWJlci5pc0Zpbml0ZShtb250aGx5Q29zdHMpID8gTWF0aC5yb3VuZChtb250aGx5Q29zdHMpIDogMCk7XHJcbiAgICAvLyBHcm9zcyBwcm9maXRcclxuICAgIGNvbnN0IGdyb3NzUHJvZml0ID0gdG90YWxSZXZlbnVlIC0gdG90YWxDb3N0cztcclxuICAgIHNldEdyb3NzUHJvZml0KE51bWJlci5pc0Zpbml0ZShncm9zc1Byb2ZpdCkgPyBNYXRoLnJvdW5kKGdyb3NzUHJvZml0KSA6IDApO1xyXG4gICAgLy8gTmV0IHByb2ZpdFxyXG4gICAgY29uc3QgdGF4ID0gcGFyc2VJbnQocHJvamVjdFswXS50YXgpO1xyXG4gICAgY29uc3QgbmV0UHJvZml0ID0gZ3Jvc3NQcm9maXQgLSAodGF4IC8gMTAwKSAqIGdyb3NzUHJvZml0O1xyXG4gICAgc2V0TmV0UHJvZml0KE51bWJlci5pc0Zpbml0ZShuZXRQcm9maXQpID8gTWF0aC5yb3VuZChuZXRQcm9maXQpIDogMCk7XHJcbiAgfSwgW3Byb2plY3RdKTtcclxuICAvLyAgIGNvbnN0IFtjb21wZXRpdG9ycywgc2V0Q29tcGV0aXRvcnNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnNvbGUubG9nKHNlbGVjdGVkUHJvamVjdCk7XHJcbiAgY29uc29sZS5sb2cocmV2ZW51ZUVsZW1lbnRzKTtcclxuICBjb25zb2xlLmxvZyhncm9zc1Byb2ZpdCk7XHJcbiAgY29uc29sZS5sb2cobmV0UHJvZml0KTtcclxuXHJcbiAgaWYgKHJvdXRlci5pc0ZhbGxiYWNrKSB7XHJcbiAgICByZXR1cm4gPEJvdW5jZUxvYWRlckNvbXBvbmVudCAvPjtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiB3LWZ1bGwgcmVsYXRpdmUgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWF4LXctZnVsbCByZWxhdGl2ZSBtdC0xMiBsZzFDb250YWluZXI6bXQtMTYgbWItMTYgcHgtMzJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGdyaWQgZ3JpZC1jb2xzLTIgZ3JpZC1yb3dzLTEgZ3JpZC1mbG93LWNvbFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgaGVpZ2h0PXsoc2l6ZS53aWR0aCA+IDg2MCAmJiAzMCkgfHwgKHNpemUud2lkdGggPCA4NjAgJiYgc2l6ZS53aWR0aCA+IDY4MCAmJiAyNikgfHwgKHNpemUud2lkdGggPCA2ODAgJiYgMjIpfVxyXG4gICAgICAgICAgICAgIHdpZHRoPXsoc2l6ZS53aWR0aCA+IDg2MCAmJiAzMCkgfHwgKHNpemUud2lkdGggPCA4NjAgJiYgc2l6ZS53aWR0aCA+IDY4MCAmJiAyNikgfHwgKHNpemUud2lkdGggPCA2ODAgJiYgMjIpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZpbGwtY3VycmVudCB0ZXh0LXByaW1hcnkgZGFyazp0ZXh0LXByaW1hcnlkYXJrXCJcclxuICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDEyOCAxMjhcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPHRpdGxlPkxhbmRpbmcgU3VjY2VzczwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgPGcgaWQ9XCJMYW5kaW5nX1N1Y2Nlc3NcIiBkYXRhLW5hbWU9XCJMYW5kaW5nIFN1Y2Nlc3NcIj5cclxuICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNscy0xXCJcclxuICAgICAgICAgICAgICAgICAgZD1cIk0xMDkuMyw5MC4xQTQ2LDQ2LDAsMCwwLDY1LDM2VjIwLjA4YzEuNzgtLjYyLDcuMjEtMi4xNCwxMi41Ny4yM2ExOS4zMywxOS4zMywwLDAsMCwxNC44MiwwYy44Ny0uMzguNjEuMzEuNjEtMTcuOTNhMSwxLDAsMCwwLTEuNDMtLjkzYy0uMDcsMC02LjY5LDIuODctMTMuMTgsMEExOS40MSwxOS40MSwwLDAsMCw2NSwuOTMsMSwxLDAsMCwwLDYzLDFWMzZhNDUuODYsNDUuODYsMCwwLDAtMjguNjYsMTAuOEMxNi4xOCw0MC40OCw0LDQwLC43OSw0NS41MS0yLjI5LDUwLjg2LDMuOTQsNTkuMywxMCw2NS42OEExMSwxMSwwLDAsMCwxOCw4M2MuODEsMzguNDEsNDYuMDgsNTkuMiw3NS42NiwzNC4yMSw4LjUzLDMsMjksOS4xNSwzMy41NSwxLjMxQzEzMC4zOSwxMTMsMTIzLjg2LDEwMi42NSwxMDkuMyw5MC4xWk03Ny41OSwzLjMxQTE5LjM5LDE5LjM5LDAsMCwwLDkxLDMuODNWMTguNjhjLTEuNzkuNjItNy4yMiwyLjEzLTEyLjU3LS4yM0ExOS4xOSwxOS4xOSwwLDAsMCw2NSwxNy45M1YzLjA4QzY2LjgxLDIuNDYsNzIuMjQsMSw3Ny41OSwzLjMxWk02NSw0NXYtN2MzOS42OS45MSw1OCw1MC4yNywyOC4yMSw3Ni44MUM3MS4zMiwxMDcsNDYsOTIuNjYsMjcuNzcsNzguNjRhMTEsMTEsMCwwLDAtMy4yLTE2LjEzQTQzLjg4LDQzLjg4LDAsMCwxLDYzLDM4LjA2VjQ1QTEsMSwwLDAsMCw2NSw0NVpNMzIuNTUsNDguMzZhNDYuMjEsNDYuMjEsMCwwLDAtOS44MywxMy4yOCwxMC45MywxMC45MywwLDAsMC0xMS40LDIuNDdDLTguMzksNDMuMjMsNS4yMywzOS4wOCwzMi41NSw0OC4zNlpNMTAsNzJhOSw5LDAsMSwxLDksOUE5LDksMCwwLDEsMTAsNzJabTEwLDExYTExLDExLDAsMCwwLDYuMzQtMi44MmMxOC40NSwxNC4yMSw0My40NSwyOC4zNSw2NS4wNSwzNi4yMkM2MywxMzkuMTYsMjAuODMsMTE5LjEsMjAuMDUsODNabTEwNS40LDM0LjVjLTIuNTEsNC4zNS0xNCwzLjYyLTMwLTEuODVhNDUuNjEsNDUuNjEsMCwwLDAsMTMuNDItMjMuMjFDMTIxLjU5LDEwMy41OCwxMjgsMTEzLjEyLDEyNS40NSwxMTcuNDdaXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5ZGFyayB0ZXh0LWxnIG1kQ29udGFpbmVyOnRleHQteGwgbGdDb250YWluZXI6dGV4dC0yeGwgbXQtMiBwbC0yIGRhcms6dGV4dC1iYWNrZ3JvdW5kXCI+XHJcbiAgICAgICAgICAgICAgQ2FzaCBmbG93IGFuYWx5c2lzXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1zZWNvbmRhcnkgdGV4dC14cyBtZENvbnRhaW5lcjp0ZXh0LXNtIGxnQ29udGFpbmVyOnRleHQtYmFzZSB0ZXh0LWdyYXkgcmVsYXRpdmUgLXRvcC0xIGxnQ29udGFpbmVyOnRvcC0wXCI+XHJcbiAgICAgICAgICAgIE1hbmFnZSB5b3VyIHN0YXJ0dXAgY2FzaCBmbG93XHJcbiAgICAgICAgICA8L2gxPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGdyaWQgZ3JpZC1jb2xzLTJmciBncmlkLXJvd3MtMWZyIGxnQ29udGFpbmVyOmdyaWQtY29scy0zZnIgbGdDb250YWluZXI6Z3JpZC1yb3dzLTFmciBnYXAteS04IGdhcC14LTYgc21Db250YWluZXI6Z2FwLXgtMzIgbWRDb250YWluZXI6Z2FwLXgtMTIgbXQtMTJcIj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgaWQ9XCJtYWluLWRhdGVwaWNrZXJcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgcm91bmRlZC0yeGwgcHktMyBweC0zIG1kQ29udGFpbmVyOnB5LTMgbWRDb250YWluZXI6cHgtNCBsZ0NvbnRhaW5lcjpweC02IGxnQ29udGFpbmVyOnB5LTQgc2hhZG93LW1kIGdyaWQgZ3JpZC1jb2xzLTJmciBpdGVtcy1jZW50ZXIgdGV4dC14cyBtZENvbnRhaW5lcjp0ZXh0LXNtIGxnQ29udGFpbmVyOnRleHQtYmFzZVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9XCIvY2FzaC1mbG93L2NhbGVuZGFyLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9eyhzaXplLndpZHRoID4gODYwICYmIDI1KSB8fCAoc2l6ZS53aWR0aCA8IDg2MCAmJiBzaXplLndpZHRoID4gNjgwICYmIDIyKSB8fCAoc2l6ZS53aWR0aCA8IDY4MCAmJiAxOCl9XHJcbiAgICAgICAgICAgICAgICB3aWR0aD17KHNpemUud2lkdGggPiA4NjAgJiYgMjUpIHx8IChzaXplLndpZHRoIDwgODYwICYmIHNpemUud2lkdGggPiA2ODAgJiYgMjIpIHx8IChzaXplLndpZHRoIDwgNjgwICYmIDE4KX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1sLTIgdGV4dC1wcmltYXJ5ZGFya1wiPlN0YXJ0OjwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtzdGFydERhdGUgJiYgIWlzTW9iaWxlID8gKFxyXG4gICAgICAgICAgICAgIDxEYXRlUGlja2VyXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZD17c3RhcnREYXRlfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhkYXRlKSA9PiBvblN0YXJ0RGF0ZVVwZGF0ZShkYXRlKX1cclxuICAgICAgICAgICAgICAgIGRhdGVGb3JtYXQ9XCJNTU1NIHl5eXlcIlxyXG4gICAgICAgICAgICAgICAgc2hvd01vbnRoWWVhclBpY2tlclxyXG4gICAgICAgICAgICAgICAgbWF4RGF0ZT17YWRkWWVhcnMobmV3IERhdGUoKSwgMyl9XHJcbiAgICAgICAgICAgICAgICBtaW5EYXRlPXtuZXcgRGF0ZSgpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPERhdGVQaWNrZXJcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkPXtzdGFydERhdGV9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGRhdGUpID0+IG9uU3RhcnREYXRlVXBkYXRlKGRhdGUpfVxyXG4gICAgICAgICAgICAgICAgZGF0ZUZvcm1hdD1cIk1NTU0geXl5eVwiXHJcbiAgICAgICAgICAgICAgICBzaG93TW9udGhZZWFyUGlja2VyXHJcbiAgICAgICAgICAgICAgICBtYXhEYXRlPXthZGRZZWFycyhuZXcgRGF0ZSgpLCAzKX1cclxuICAgICAgICAgICAgICAgIG1pbkRhdGU9e25ldyBEYXRlKCl9XHJcbiAgICAgICAgICAgICAgICB3aXRoUG9ydGFsXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBpZD1cIm1haW4tZGF0ZXBpY2tlclwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy13aGl0ZSByb3VuZGVkLTJ4bCBweS0zIHB4LTMgbWRDb250YWluZXI6cHktMyBtZENvbnRhaW5lcjpweC00IGxnQ29udGFpbmVyOnB4LTYgbGdDb250YWluZXI6cHktNCBzaGFkb3ctbWQgZ3JpZCBncmlkLWNvbHMtMmZyIGl0ZW1zLWNlbnRlciB0ZXh0LXhzIG1kQ29udGFpbmVyOnRleHQtc20gbGdDb250YWluZXI6dGV4dC1iYXNlXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz1cIi9jYXNoLWZsb3cvaG91cmdsYXNzMS5zdmdcIlxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PXsoc2l6ZS53aWR0aCA+IDg2MCAmJiAyNSkgfHwgKHNpemUud2lkdGggPCA4NjAgJiYgc2l6ZS53aWR0aCA+IDY4MCAmJiAyMikgfHwgKHNpemUud2lkdGggPCA2ODAgJiYgMTgpfVxyXG4gICAgICAgICAgICAgICAgd2lkdGg9eyhzaXplLndpZHRoID4gODYwICYmIDI1KSB8fCAoc2l6ZS53aWR0aCA8IDg2MCAmJiBzaXplLndpZHRoID4gNjgwICYmIDIyKSB8fCAoc2l6ZS53aWR0aCA8IDY4MCAmJiAxOCl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtbC0yIHRleHQtcHJpbWFyeWRhcmtcIj5FbmQ6PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge2VuZERhdGUgJiYgIWlzTW9iaWxlID8gKFxyXG4gICAgICAgICAgICAgIDxEYXRlUGlja2VyXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZD17ZW5kRGF0ZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZGF0ZSkgPT4gb25FbmREYXRlVXBkYXRlKGRhdGUpfVxyXG4gICAgICAgICAgICAgICAgZGF0ZUZvcm1hdD1cIk1NTU0geXl5eVwiXHJcbiAgICAgICAgICAgICAgICBzaG93TW9udGhZZWFyUGlja2VyXHJcbiAgICAgICAgICAgICAgICBtYXhEYXRlPXthZGRZZWFycyhuZXcgRGF0ZSgpLCAzKX1cclxuICAgICAgICAgICAgICAgIG1pbkRhdGU9e25ldyBEYXRlKCl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8RGF0ZVBpY2tlclxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e2VuZERhdGV9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGRhdGUpID0+IG9uRW5kRGF0ZVVwZGF0ZShkYXRlKX1cclxuICAgICAgICAgICAgICAgIGRhdGVGb3JtYXQ9XCJNTU1NIHl5eXlcIlxyXG4gICAgICAgICAgICAgICAgc2hvd01vbnRoWWVhclBpY2tlclxyXG4gICAgICAgICAgICAgICAgbWF4RGF0ZT17YWRkWWVhcnMobmV3IERhdGUoKSwgMyl9XHJcbiAgICAgICAgICAgICAgICBtaW5EYXRlPXtuZXcgRGF0ZSgpfVxyXG4gICAgICAgICAgICAgICAgd2l0aFBvcnRhbFxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICB3aWR0aDpcclxuICAgICAgICAgICAgICAgIChzaXplLndpZHRoID4gODYwICYmICcxMDAlJykgfHxcclxuICAgICAgICAgICAgICAgIChzaXplLndpZHRoIDwgODYwICYmIHNpemUud2lkdGggPiA2ODAgJiYgJzQ3JScpIHx8XHJcbiAgICAgICAgICAgICAgICAoc2l6ZS53aWR0aCA8IDY4MCAmJiBzaXplLndpZHRoID4gNTIwICYmICc0MCUnKSB8fFxyXG4gICAgICAgICAgICAgICAgKHNpemUud2lkdGggPCA1MjAgJiYgJzQ3JScpLFxyXG4gICAgICAgICAgICAgIGdyaWRDb2x1bW5TdGFydDogc2l6ZS53aWR0aCA8IDg2MCA/ICcxJyA6ICd1bnNldCcsXHJcbiAgICAgICAgICAgICAgZ3JpZENvbHVtbkVuZDogc2l6ZS53aWR0aCA8IDg2MCA/ICczJyA6ICd1bnNldCcsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInBsYWNlLXNlbGYtY2VudGVyIGJnLXdoaXRlIHJvdW5kZWQtMnhsIHB5LTMgcHgtMyBtZENvbnRhaW5lcjpweS0zIG1kQ29udGFpbmVyOnB4LTQgbGdDb250YWluZXI6cHgtNiBsZ0NvbnRhaW5lcjpweS00IHNoYWRvdy1tZCBncmlkIGdyaWQtY29scy0yZnIgaXRlbXMtY2VudGVyIHRleHQteHMgbWRDb250YWluZXI6dGV4dC1zbSBsZ0NvbnRhaW5lcjp0ZXh0LWJhc2VcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPVwiL2Nhc2gtZmxvdy90YXguc3ZnXCJcclxuICAgICAgICAgICAgICAgIGhlaWdodD17KHNpemUud2lkdGggPiA4NjAgJiYgMjUpIHx8IChzaXplLndpZHRoIDwgODYwICYmIHNpemUud2lkdGggPiA2ODAgJiYgMjIpIHx8IChzaXplLndpZHRoIDwgNjgwICYmIDE4KX1cclxuICAgICAgICAgICAgICAgIHdpZHRoPXsoc2l6ZS53aWR0aCA+IDg2MCAmJiAyNSkgfHwgKHNpemUud2lkdGggPCA4NjAgJiYgc2l6ZS53aWR0aCA+IDY4MCAmJiAyMikgfHwgKHNpemUud2lkdGggPCA2ODAgJiYgMTgpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWwtMlwiPlRheDo8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIiBzdHlsZT17eyB0ZXh0QWxpZ25MYXN0OiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgIDxpbnB1dCBpZD1cInRheC1pbnB1dFwiIHZhbHVlPXt0YXh9IGNsYXNzTmFtZT1cInctZnVsbCBiZy13aGl0ZSBmb2N1czpvdXRsaW5lLW5vbmVcIiAvPlxyXG4gICAgICAgICAgICAgIDxwPiU8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBpZD1cImNoYXJ0Q29udGFpbmVyXCIgY2xhc3NOYW1lPVwidy1mdWxsIGgtMS8yIHAtNCBtZENvbnRhaW5lcjpwLTggYmctd2hpdGUgcm91bmRlZC0yeGwgbXQtMTIgc2hhZG93LW1kXCI+XHJcbiAgICAgICAgICB7LyogPGNhbnZhcyByZWY9e2NoYXJ0UmVmfSBoZWlnaHQ9ezc1fT48L2NhbnZhcz4gKi99XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgZ3JpZCBncmlkLWNvbHMtMmZyIGdyaWQtcm93cy0zZnIgbGcxQ29udGFpbmVyOmdyaWQtY29scy0zZnIgbGcxQ29udGFpbmVyOmdyaWQtcm93cy0yZnIgZ2FwLXgtNiBzbUNvbnRhaW5lcjpnYXAteC0xMiBnYXAteS04IG10LTEyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBiZy13aGl0ZSByb3VuZGVkLTJ4bCBweS0zIHB4LTMgbWRDb250YWluZXI6cHktMyBtZENvbnRhaW5lcjpweC00IGxnQ29udGFpbmVyOnB4LTYgbGdDb250YWluZXI6cHktNCBzaGFkb3ctbWQgZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHRleHQteHMgbWRDb250YWluZXI6dGV4dC1zbSBsZ0NvbnRhaW5lcjp0ZXh0LWJhc2VcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz1cIi9jYXNoLWZsb3cvcmV2ZW51ZS5zdmdcIlxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PXsoc2l6ZS53aWR0aCA+IDg2MCAmJiAyNSkgfHwgKHNpemUud2lkdGggPCA4NjAgJiYgc2l6ZS53aWR0aCA+IDY4MCAmJiAyMikgfHwgKHNpemUud2lkdGggPCA2ODAgJiYgMTgpfVxyXG4gICAgICAgICAgICAgICAgd2lkdGg9eyhzaXplLndpZHRoID4gODYwICYmIDI1KSB8fCAoc2l6ZS53aWR0aCA8IDg2MCAmJiBzaXplLndpZHRoID4gNjgwICYmIDIyKSB8fCAoc2l6ZS53aWR0aCA8IDY4MCAmJiAxOCl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtbC0yXCI+VG90YWwgcmV2ZW51ZTo8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8cD4ke3RvdGFsUmV2ZW51ZX08L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIHJvdW5kZWQtMnhsIHB5LTMgcHgtMyBtZENvbnRhaW5lcjpweS0zIG1kQ29udGFpbmVyOnB4LTQgbGdDb250YWluZXI6cHgtNiBsZ0NvbnRhaW5lcjpweS00IHNoYWRvdy1tZCBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgdGV4dC14cyBtZENvbnRhaW5lcjp0ZXh0LXNtIGxnQ29udGFpbmVyOnRleHQtYmFzZVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPVwiL2Nhc2gtZmxvdy9tb250aGx5LnN2Z1wiXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9eyhzaXplLndpZHRoID4gODYwICYmIDI1KSB8fCAoc2l6ZS53aWR0aCA8IDg2MCAmJiBzaXplLndpZHRoID4gNjgwICYmIDIyKSB8fCAoc2l6ZS53aWR0aCA8IDY4MCAmJiAxOCl9XHJcbiAgICAgICAgICAgICAgICB3aWR0aD17KHNpemUud2lkdGggPiA4NjAgJiYgMjUpIHx8IChzaXplLndpZHRoIDwgODYwICYmIHNpemUud2lkdGggPiA2ODAgJiYgMjIpIHx8IChzaXplLndpZHRoIDwgNjgwICYmIDE4KX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1sLTJcIj5Nb250aGx5IHJldmVudWU6PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHA+JHttb250aGx5UmV2ZW51ZX08L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIHJvdW5kZWQtMnhsIHB5LTMgcHgtMyBtZENvbnRhaW5lcjpweS0zIG1kQ29udGFpbmVyOnB4LTQgbGdDb250YWluZXI6cHgtNiBsZ0NvbnRhaW5lcjpweS00IHNoYWRvdy1tZCBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgdGV4dC14cyBtZENvbnRhaW5lcjp0ZXh0LXNtIGxnQ29udGFpbmVyOnRleHQtYmFzZVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPVwiL2Nhc2gtZmxvdy9jb3N0cy5zdmdcIlxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PXsoc2l6ZS53aWR0aCA+IDg2MCAmJiAyNSkgfHwgKHNpemUud2lkdGggPCA4NjAgJiYgc2l6ZS53aWR0aCA+IDY4MCAmJiAyMikgfHwgKHNpemUud2lkdGggPCA2ODAgJiYgMTgpfVxyXG4gICAgICAgICAgICAgICAgd2lkdGg9eyhzaXplLndpZHRoID4gODYwICYmIDI1KSB8fCAoc2l6ZS53aWR0aCA8IDg2MCAmJiBzaXplLndpZHRoID4gNjgwICYmIDIyKSB8fCAoc2l6ZS53aWR0aCA8IDY4MCAmJiAxOCl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtbC0yXCI+VG90YWwgY29zdHM6PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHA+JHt0b3RhbENvc3RzfTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgcm91bmRlZC0yeGwgcHktMyBweC0zIG1kQ29udGFpbmVyOnB5LTMgbWRDb250YWluZXI6cHgtNCBsZ0NvbnRhaW5lcjpweC02IGxnQ29udGFpbmVyOnB5LTQgc2hhZG93LW1kIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciB0ZXh0LXhzIG1kQ29udGFpbmVyOnRleHQtc20gbGdDb250YWluZXI6dGV4dC1iYXNlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9XCIvY2FzaC1mbG93L21vbnRobHktY29zdHMuc3ZnXCJcclxuICAgICAgICAgICAgICAgIGhlaWdodD17KHNpemUud2lkdGggPiA4NjAgJiYgMjUpIHx8IChzaXplLndpZHRoIDwgODYwICYmIHNpemUud2lkdGggPiA2ODAgJiYgMjIpIHx8IChzaXplLndpZHRoIDwgNjgwICYmIDE4KX1cclxuICAgICAgICAgICAgICAgIHdpZHRoPXsoc2l6ZS53aWR0aCA+IDg2MCAmJiAyNSkgfHwgKHNpemUud2lkdGggPCA4NjAgJiYgc2l6ZS53aWR0aCA+IDY4MCAmJiAyMikgfHwgKHNpemUud2lkdGggPCA2ODAgJiYgMTgpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWwtMlwiPk1vbnRobHkgY29zdHM6PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHA+JHttb250aGx5Q29zdHN9PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBiZy13aGl0ZSByb3VuZGVkLTJ4bCBweS0zIHB4LTMgbWRDb250YWluZXI6cHktMyBtZENvbnRhaW5lcjpweC00IGxnQ29udGFpbmVyOnB4LTYgbGdDb250YWluZXI6cHktNCBzaGFkb3ctbWQgZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHRleHQteHMgbWRDb250YWluZXI6dGV4dC1zbSBsZ0NvbnRhaW5lcjp0ZXh0LWJhc2VcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz1cIi9jYXNoLWZsb3cvbWVnYXBob25lLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9eyhzaXplLndpZHRoID4gODYwICYmIDI1KSB8fCAoc2l6ZS53aWR0aCA8IDg2MCAmJiBzaXplLndpZHRoID4gNjgwICYmIDIyKSB8fCAoc2l6ZS53aWR0aCA8IDY4MCAmJiAxOCl9XHJcbiAgICAgICAgICAgICAgICB3aWR0aD17KHNpemUud2lkdGggPiA4NjAgJiYgMjUpIHx8IChzaXplLndpZHRoIDwgODYwICYmIHNpemUud2lkdGggPiA2ODAgJiYgMjIpIHx8IChzaXplLndpZHRoIDwgNjgwICYmIDE4KX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1sLTJcIj5Hcm9zcyBwcm9maXQ6PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHA+JHtncm9zc1Byb2ZpdH08L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIHJvdW5kZWQtMnhsIHB5LTMgcHgtMyBtZENvbnRhaW5lcjpweS0zIG1kQ29udGFpbmVyOnB4LTQgbGdDb250YWluZXI6cHgtNiBsZ0NvbnRhaW5lcjpweS00IHNoYWRvdy1tZCBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgdGV4dC14cyBtZENvbnRhaW5lcjp0ZXh0LXNtIGxnQ29udGFpbmVyOnRleHQtYmFzZVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPVwiL2Nhc2gtZmxvdy9uZXQtd29ydGguc3ZnXCJcclxuICAgICAgICAgICAgICAgIGhlaWdodD17KHNpemUud2lkdGggPiA4NjAgJiYgMjUpIHx8IChzaXplLndpZHRoIDwgODYwICYmIHNpemUud2lkdGggPiA2ODAgJiYgMjIpIHx8IChzaXplLndpZHRoIDwgNjgwICYmIDE4KX1cclxuICAgICAgICAgICAgICAgIHdpZHRoPXsoc2l6ZS53aWR0aCA+IDg2MCAmJiAyNSkgfHwgKHNpemUud2lkdGggPCA4NjAgJiYgc2l6ZS53aWR0aCA+IDY4MCAmJiAyMikgfHwgKHNpemUud2lkdGggPCA2ODAgJiYgMTgpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWwtMlwiPk5ldCBwcm9maXQ6PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHA+JHtuZXRQcm9maXR9PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgey8qIFJldmVudWUgKi99XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgLy8gcmVmPXtyZXZlbnVlUmVmfVxyXG4gICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiA1NSB9fVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwib3ZlcmZsb3ctaGlkZGVuIHJlbGF0aXZlIHctZnVsbCByb3VuZGVkLTJ4bCBiZy13aGl0ZSBkYXJrOmJnLWJhY2tncm91bmQgcHgtNCBweS00IGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIG10LTEyIGZsZXggZmxleC13cmFwIHNoYWRvdy1tZFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGdDb250YWluZXI6bWwtMlwiPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gbGdDb250YWluZXI6dGV4dC1iYXNlXCI+UmV2ZW51ZTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGdDb250YWluZXI6bXItMiBmbGV4IGZsZXgtbm93cmFwIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgICAgIHNyYz1cIi9jYXNoLWZsb3cvYWRkLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9eyhzaXplLndpZHRoID4gODYwICYmIDIyKSB8fCAoc2l6ZS53aWR0aCA8IDg2MCAmJiBzaXplLndpZHRoID4gNjgwICYmIDE4KSB8fCAoc2l6ZS53aWR0aCA8IDY4MCAmJiAxNil9XHJcbiAgICAgICAgICAgICAgICB3aWR0aD17KHNpemUud2lkdGggPiA4NjAgJiYgMjIpIHx8IChzaXplLndpZHRoIDwgODYwICYmIHNpemUud2lkdGggPiA2ODAgJiYgMTgpIHx8IChzaXplLndpZHRoIDwgNjgwICYmIDE2KX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIC8vIHJlZj17ZHJvcERvd25JY29ufVxyXG4gICAgICAgICAgICAgICAgLy8gb25DbGljaz17b25SZXZlbnVlU2hvd31cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1sLTIgY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgc3JjPVwiL2Nhc2gtZmxvdy9kcm9wZG93bi5zdmdcIlxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PXsoc2l6ZS53aWR0aCA+IDg2MCAmJiAyMikgfHwgKHNpemUud2lkdGggPCA4NjAgJiYgc2l6ZS53aWR0aCA+IDY4MCAmJiAxOCkgfHwgKHNpemUud2lkdGggPCA2ODAgJiYgMTYpfVxyXG4gICAgICAgICAgICAgICAgd2lkdGg9eyhzaXplLndpZHRoID4gODYwICYmIDIyKSB8fCAoc2l6ZS53aWR0aCA8IDg2MCAmJiBzaXplLndpZHRoID4gNjgwICYmIDE4KSB8fCAoc2l6ZS53aWR0aCA8IDY4MCAmJiAxNil9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgLy8gcmVmPXtpbm5lckNvbnRhaW5lclJldmVudWVSZWZ9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YHctZnVsbCAke1xyXG4gICAgICAgICAgICAgIHNpemUud2lkdGggPCAxMTIwXHJcbiAgICAgICAgICAgICAgICA/ICd0ZXh0LXNtIG1kQ29udGFpbmVyOnRleHQtYmFzZSBsZzFDb250YWluZXI6bXgtOCBsZzFDb250YWluZXI6bWItNiBtdC00ICBiZy1iYWNrZ3JvdW5kIHJvdW5kZWQtMnhsIHB4LTQgbWRDb250YWluZXI6cHgtNiBweS00J1xyXG4gICAgICAgICAgICAgICAgOiAndy1mdWxsIG14LTggbWItNiBtdC00ICBiZy1iYWNrZ3JvdW5kIHJvdW5kZWQtMnhsIHB4LTQgbWRDb250YWluZXI6cHgtNiBweS00J1xyXG4gICAgICAgICAgICB9YH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgey8qIDxociBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnkgdy1mdWxsXCIgLz4gKi99XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogc2l6ZS53aWR0aCA8IDUyMCAmJiAnMC42cmVtJyB9fVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBncmlkIGdyaWQtY29scy02ZnIgaXRlbXMtY2VudGVyIHRleHQteHMgbWRDb250YWluZXI6dGV4dC1zbSBsZzFDb250YWluZXI6dGV4dC1iYXNlXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXY+bmFtZTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+dHlwZTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+YW1vdW50PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj5zdGFydDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+ZW5kPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnkgdy1mdWxsXCIgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLWZ1bGwgdy1mdWxsIHJvdW5kZWQtMnhsIGZsZXggZmxleC13cmFwIGZsZXgtY29sXCI+XHJcbiAgICAgICAgICAgICAge3JldmVudWVFbGVtZW50cyAmJlxyXG4gICAgICAgICAgICAgICAgcmV2ZW51ZUVsZW1lbnRzLm1hcCgoZWxlbWVudCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8PjwvPlxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgPFJldmVudWVFbGVtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICBwcm92aWRlZD17cHJvdmlkZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICBzZXRSZXZlbnVlRWxlbWVudHM9e3NldFJldmVudWVFbGVtZW50c31cclxuICAgICAgICAgICAgICAgICAgICAvLyAgIG1haW5Eb2N1bWVudD17bWFpbkRvY3VtZW50fVxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgcHJvamVjdElkPXtwcm9qZWN0SWR9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICBkb2N1bWVudElkPXtkb2N1bWVudElkfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgcmV2ZW51ZUVsZW1lbnRzPXtyZXZlbnVlRWxlbWVudHN9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICBlbGVtZW50PXtlbGVtZW50fVxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgaW5kZXg9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIC8+XHJcbiAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7LyogQ29zdHMgKi99XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgcmVmPXtjb3N0c1JlZn1cclxuICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogNTUgfX1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm92ZXJmbG93LWhpZGRlbiByZWxhdGl2ZSB3LWZ1bGwgcm91bmRlZC0yeGwgYmctd2hpdGUgZGFyazpiZy1iYWNrZ3JvdW5kIHB4LTQgcHktNCBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBtdC04IGZsZXggZmxleC13cmFwIHNoYWRvdy1tZFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGdDb250YWluZXI6bWwtMlwiPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gbGdDb250YWluZXI6dGV4dC1iYXNlXCI+Q29zdHM8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnQ29udGFpbmVyOm1yLTIgZmxleCBmbGV4LW5vd3JhcCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbkNvc3RzRWxlbWVudEFkZH1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgICAgIHNyYz1cIi9jYXNoLWZsb3cvYWRkLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9eyhzaXplLndpZHRoID4gODYwICYmIDIyKSB8fCAoc2l6ZS53aWR0aCA8IDg2MCAmJiBzaXplLndpZHRoID4gNjgwICYmIDE4KSB8fCAoc2l6ZS53aWR0aCA8IDY4MCAmJiAxNil9XHJcbiAgICAgICAgICAgICAgICB3aWR0aD17KHNpemUud2lkdGggPiA4NjAgJiYgMjIpIHx8IChzaXplLndpZHRoIDwgODYwICYmIHNpemUud2lkdGggPiA2ODAgJiYgMTgpIHx8IChzaXplLndpZHRoIDwgNjgwICYmIDE2KX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHJlZj17ZHJvcERvd25JY29uQ29zdHN9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbkNvc3RzU2hvd31cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1sLTIgY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgc3JjPVwiL2Nhc2gtZmxvdy9kcm9wZG93bi5zdmdcIlxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PXsoc2l6ZS53aWR0aCA+IDg2MCAmJiAyMikgfHwgKHNpemUud2lkdGggPCA4NjAgJiYgc2l6ZS53aWR0aCA+IDY4MCAmJiAxOCkgfHwgKHNpemUud2lkdGggPCA2ODAgJiYgMTYpfVxyXG4gICAgICAgICAgICAgICAgd2lkdGg9eyhzaXplLndpZHRoID4gODYwICYmIDIyKSB8fCAoc2l6ZS53aWR0aCA8IDg2MCAmJiBzaXplLndpZHRoID4gNjgwICYmIDE4KSB8fCAoc2l6ZS53aWR0aCA8IDY4MCAmJiAxNil9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgcmVmPXtpbm5lckNvbnRhaW5lckNvc3RzUmVmfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2B3LWZ1bGwgJHtcclxuICAgICAgICAgICAgICBzaXplLndpZHRoIDwgMTEyMFxyXG4gICAgICAgICAgICAgICAgPyAndGV4dC1zbSBtZENvbnRhaW5lcjp0ZXh0LWJhc2UgbGcxQ29udGFpbmVyOm14LTggbGcxQ29udGFpbmVyOm1iLTYgbXQtNCAgYmctYmFja2dyb3VuZCByb3VuZGVkLTJ4bCBweC00IG1kQ29udGFpbmVyOnB4LTYgcHktNCdcclxuICAgICAgICAgICAgICAgIDogJ3ctZnVsbCBteC04IG1iLTYgbXQtNCAgYmctYmFja2dyb3VuZCByb3VuZGVkLTJ4bCBweC00IG1kQ29udGFpbmVyOnB4LTYgcHktNCdcclxuICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHsvKiA8aHIgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5IHctZnVsbFwiIC8+ICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBncmlkIGdyaWQtY29scy02ZnIgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdj5uYW1lPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj50eXBlPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj5hbW91bnQ8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2PnN0YXJ0PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj5lbmQ8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeSB3LWZ1bGxcIiAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtZnVsbCB3LWZ1bGwgcm91bmRlZC0yeGwgZmxleCBmbGV4LXdyYXAgZmxleC1jb2xcIj5cclxuICAgICAgICAgICAgICA8RHJhZ0Ryb3BDb250ZXh0IG9uRHJhZ0VuZD17Y29zdHNIYW5kbGVPbkRyYWdFbmR9PlxyXG4gICAgICAgICAgICAgICAgPERyb3BwYWJsZSBkcm9wcGFibGVJZD1cImVsZW1lbnRzXCI+XHJcbiAgICAgICAgICAgICAgICAgIHsocHJvdmlkZWQpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVsZW1lbnRzXCIgey4uLnByb3ZpZGVkLmRyb3BwYWJsZVByb3BzfSByZWY9e3Byb3ZpZGVkLmlubmVyUmVmfT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtjb3N0c0VsZW1lbnRzICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvc3RzRWxlbWVudHMubWFwKChlbGVtZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJhZ2dhYmxlIGtleT17ZWxlbWVudC5pbmRleH0gZHJhZ2dhYmxlSWQ9e2VsZW1lbnQuaW5kZXh9IGluZGV4PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsocHJvdmlkZWQpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29zdHNFbGVtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlZD17cHJvdmlkZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDb3N0c0VsZW1lbnRzPXtzZXRDb3N0c0VsZW1lbnRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFpbkRvY3VtZW50PXttYWluRG9jdW1lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0SWQ9e3Byb2plY3RJZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50SWQ9e2RvY3VtZW50SWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3N0c0VsZW1lbnRzPXtjb3N0c0VsZW1lbnRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudD17ZWxlbWVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9EcmFnZ2FibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICB7cHJvdmlkZWQucGxhY2Vob2xkZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L0Ryb3BwYWJsZT5cclxuICAgICAgICAgICAgICA8L0RyYWdEcm9wQ29udGV4dD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHNuYXBzaG90ID0gYXdhaXQgZGIuY29sbGVjdGlvbigncHJvamVjdHMnKS5nZXQoKTtcclxuXHJcbiAgY29uc3QgcHJvamVjdHMgPSBbXTtcclxuICBzbmFwc2hvdC5mb3JFYWNoKChkb2MpID0+IHtcclxuICAgIHByb2plY3RzLnB1c2goZG9jLmRhdGEoKSk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHBhdGhzID0gcHJvamVjdHMubWFwKChwcm9qZWN0KSA9PiAoe1xyXG4gICAgcGFyYW1zOiB7XHJcbiAgICAgIHByb2plY3Q6IHByb2plY3QucHJvamVjdE5hbWUudG9TdHJpbmcoKSxcclxuICAgICAgaWQ6IHByb2plY3QucHJvamVjdElkLnRvU3RyaW5nKCksXHJcbiAgICB9LFxyXG4gIH0pKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHBhdGhzOiBwYXRocyxcclxuICAgIGZhbGxiYWNrOiB0cnVlLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoeyBwYXJhbXMgfSkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKHBhcmFtcyk7XHJcbiAgLy8gbGV0IHJlZiA9IGRiLmNvbGxlY3Rpb24oJ3Byb2plY3RzJykud2hlcmUoJ3Byb2plY3ROYW1lJywgJz09JywgcGFyYW1zLnByb2plY3QpO1xyXG4gIGxldCByZWYgPSBkYlxyXG4gICAgLmNvbGxlY3Rpb24oJ3Byb2plY3RzJylcclxuICAgIC5kb2MocGFyYW1zLmlkKVxyXG4gICAgLmNvbGxlY3Rpb24oJ2Nhc2hGbG93JylcclxuICAgIC5kb2MocGFyYW1zLnByb2plY3QpXHJcbiAgICAuY29sbGVjdGlvbignaW5wdXRzJylcclxuICAgIC53aGVyZSgncHJvamVjdElkJywgJz09JywgcGFyYW1zLmlkKTtcclxuXHJcbiAgY29uc3Qgc25hcHNob3QgPSBhd2FpdCByZWYuZ2V0KCk7XHJcbiAgY29uc3QgcHJvamVjdCA9IFtdO1xyXG5cclxuICBzbmFwc2hvdC5mb3JFYWNoKChkb2MpID0+IHtcclxuICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKHNhZmVKc29uU3RyaW5naWZ5KGRvYy5kYXRhKCkpKTtcclxuICAgIHByb2plY3QucHVzaCh7IC4uLmRhdGEgfSk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczogeyBwcm9qZWN0IH0sXHJcbiAgICByZXZhbGlkYXRlOiAxLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVbmlxdWVDYXNoZmxvd1BhZ2U7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=