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
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-plugin-superjson-next/tools */ "./node_modules/babel-plugin-superjson-next/tools.js");
/* harmony import */ var babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../lib/firebase */ "./lib/firebase.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_dashboard_startup_project_business_app_competitors_UniqueElement__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../components/dashboard/startup/project/business-app/competitors/UniqueElement */ "./components/dashboard/startup/project/business-app/competitors/UniqueElement.js");
/* harmony import */ var _components_BounceLoader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../components/BounceLoader */ "./components/BounceLoader.js");
/* harmony import */ var _utils_useWindowSize__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../utils/useWindowSize */ "./utils/useWindowSize.js");




var _jsxFileName = "C:\\off-saas\\pages\\dashboard\\projects\\[project]\\cash-flow\\[id].js",
    _this = undefined,
    _s = $RefreshSig$();









var UniqueCashflowPage = function UniqueCashflowPage(_ref) {
  _s();

  var project = _ref.project;
  console.log('Particular project --> ', project);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      startDate = _useState[0],
      setStartDate = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      endDate = _useState2[0],
      setEndDate = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      selectedProject = _useState3[0],
      setSelectedProject = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      revenueElements = _useState4[0],
      setRevenueElements = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      costsElements = _useState5[0],
      setCostsElements = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      periods = _useState6[0],
      setPeriods = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      tax = _useState7[0],
      setTax = _useState7[1];

  var size = Object(_utils_useWindowSize__WEBPACK_IMPORTED_MODULE_8__["useWindowSize"])(); // Sum data

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      totalRevenue = _useState8[0],
      setTotalRevenue = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      monthlyRevenue = _useState9[0],
      setMonthlyRevenue = _useState9[1];

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      totalCosts = _useState10[0],
      setTotalCosts = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      monthlyCosts = _useState11[0],
      setMonthlyCosts = _useState11[1];

  var _useState12 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      grossProfit = _useState12[0],
      setGrossProfit = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      netProfit = _useState13[0],
      setNetProfit = _useState13[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    project && setSelectedProject(project[0]);
    project && setRevenueElements(project[0].revenueElements);
    project && setCostsElements(project[0].costsElements);
    project && setPeriods(project[0].periods);
    project && setTax(project[0].tax); // Sum data
    // Global start date

    var changedStartDate = doc.data().globalStartDate.seconds * 1000;
    doc.data().globalStartDate !== '' && setStartDate(new Date(changedStartDate));
    var changedEndDate = doc.data().globalEndDate.seconds * 1000; // Global end date

    doc.data().globalEndDate !== '' && setEndDate(new Date(changedEndDate)); // Periods

    setPeriods(doc.data().periods); // Total revenue

    var totalRevenueArray = doc.data().revenueElements.map(function (element) {
      return parseInt(element.value * element.periods.length);
    });
    var totalRevenue = totalRevenueArray.reduce(function (a, b) {
      return a + b;
    }, 0);
    setTotalRevenue(Number.isNaN(totalRevenue) ? 0 : Math.round(totalRevenue)); // Monthly revenue

    var periodLength = doc.data().periods.length;
    var monthlyRevenue = totalRevenue / periodLength;
    setMonthlyRevenue(Number.isNaN(monthlyRevenue) ? 0 : Math.round(monthlyRevenue)); // Total costs

    var totalCostsArray = doc.data().costsElements.map(function (element) {
      return parseInt(element.value * element.periods.length);
    });
    var totalCosts = totalCostsArray.reduce(function (a, b) {
      return a + b;
    }, 0);
    console.log(totalCosts); // const filteredTotalCosts =
    //   typeof totalCosts == 'number' ? Math.round(totalCosts) : 0;
    // console.log(filteredTotalCosts);

    setTotalCosts(Number.isFinite(totalCosts) ? Math.round(totalCosts) : 0); // Monthly costs

    var monthlyCosts = totalCosts / periodLength;
    setMonthlyCosts(Number.isFinite(monthlyCosts) ? Math.round(monthlyCosts) : 0); // Gross profit

    var grossProfit = totalRevenue - totalCosts;
    setGrossProfit(Number.isFinite(grossProfit) ? Math.round(grossProfit) : 0); // Net profit

    var tax = parseInt(doc.data().tax);
    var netProfit = grossProfit - tax / 100 * grossProfit;
    setNetProfit(Number.isFinite(netProfit) ? Math.round(netProfit) : 0);
  }, [project]); //   const [competitors, setCompetitors] = useState([]);

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  console.log(selectedProject);
  console.log(revenueElements);

  if (router.isFallback) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_BounceLoader__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 12
    }, _this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: "Temporary element"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 83,
    columnNumber: 10
  }, _this); //   return (
  //     <div className="min-h-screen w-full relative flex flex-col items-center">
  //       <div className="w-full max-w-full relative mt-12 lg1Container:mt-16 mb-16 px-32">
  //         <div className="relative grid grid-cols-2 grid-rows-1 grid-flow-col">
  //           <div className="flex items-center">
  //             <svg
  //               height={(size.width > 860 && 30) || (size.width < 860 && size.width > 680 && 26) || (size.width < 680 && 22)}
  //               width={(size.width > 860 && 30) || (size.width < 860 && size.width > 680 && 26) || (size.width < 680 && 22)}
  //               className="fill-current text-primary dark:text-primarydark"
  //               xmlns="http://www.w3.org/2000/svg"
  //               viewBox="0 0 128 128"
  //             >
  //               <title>Landing Success</title>
  //               <g id="Landing_Success" data-name="Landing Success">
  //                 <path
  //                   className="cls-1"
  //                   d="M109.3,90.1A46,46,0,0,0,65,36V20.08c1.78-.62,7.21-2.14,12.57.23a19.33,19.33,0,0,0,14.82,0c.87-.38.61.31.61-17.93a1,1,0,0,0-1.43-.93c-.07,0-6.69,2.87-13.18,0A19.41,19.41,0,0,0,65,.93,1,1,0,0,0,63,1V36a45.86,45.86,0,0,0-28.66,10.8C16.18,40.48,4,40,.79,45.51-2.29,50.86,3.94,59.3,10,65.68A11,11,0,0,0,18,83c.81,38.41,46.08,59.2,75.66,34.21,8.53,3,29,9.15,33.55,1.31C130.39,113,123.86,102.65,109.3,90.1ZM77.59,3.31A19.39,19.39,0,0,0,91,3.83V18.68c-1.79.62-7.22,2.13-12.57-.23A19.19,19.19,0,0,0,65,17.93V3.08C66.81,2.46,72.24,1,77.59,3.31ZM65,45v-7c39.69.91,58,50.27,28.21,76.81C71.32,107,46,92.66,27.77,78.64a11,11,0,0,0-3.2-16.13A43.88,43.88,0,0,1,63,38.06V45A1,1,0,0,0,65,45ZM32.55,48.36a46.21,46.21,0,0,0-9.83,13.28,10.93,10.93,0,0,0-11.4,2.47C-8.39,43.23,5.23,39.08,32.55,48.36ZM10,72a9,9,0,1,1,9,9A9,9,0,0,1,10,72Zm10,11a11,11,0,0,0,6.34-2.82c18.45,14.21,43.45,28.35,65.05,36.22C63,139.16,20.83,119.1,20.05,83Zm105.4,34.5c-2.51,4.35-14,3.62-30-1.85a45.61,45.61,0,0,0,13.42-23.21C121.59,103.58,128,113.12,125.45,117.47Z"
  //                 />
  //               </g>
  //             </svg>
  //             <p className="text-primarydark text-lg mdContainer:text-xl lgContainer:text-2xl mt-2 pl-2 dark:text-background">
  //               Cash flow analysis
  //             </p>
  //           </div>
  //         </div>
  //         <div>
  //           <h1 className="text-secondary text-xs mdContainer:text-sm lgContainer:text-base text-gray relative -top-1 lgContainer:top-0">
  //             Manage your startup cash flow
  //           </h1>
  //         </div>
  //         <div className="w-full grid grid-cols-2fr grid-rows-1fr lgContainer:grid-cols-3fr lgContainer:grid-rows-1fr gap-y-8 gap-x-6 smContainer:gap-x-32 mdContainer:gap-x-12 mt-12">
  //           <div
  //             id="main-datepicker"
  //             className="w-full bg-white rounded-2xl py-3 px-3 mdContainer:py-3 mdContainer:px-4 lgContainer:px-6 lgContainer:py-4 shadow-md grid grid-cols-2fr items-center text-xs mdContainer:text-sm lgContainer:text-base"
  //           >
  //             <div className="flex items-center">
  //               <img
  //                 src="/cash-flow/calendar.svg"
  //                 height={(size.width > 860 && 25) || (size.width < 860 && size.width > 680 && 22) || (size.width < 680 && 18)}
  //                 width={(size.width > 860 && 25) || (size.width < 860 && size.width > 680 && 22) || (size.width < 680 && 18)}
  //               />
  //               <p className="ml-2 text-primarydark">Start:</p>
  //             </div>
  //             {/* {startDate && !isMobile ? (
  //               <DatePicker
  //                 selected={startDate}
  //                 onChange={(date) => onStartDateUpdate(date)}
  //                 dateFormat="MMMM yyyy"
  //                 showMonthYearPicker
  //                 maxDate={addYears(new Date(), 3)}
  //                 minDate={new Date()}
  //               />
  //             ) : (
  //               <DatePicker
  //                 selected={startDate}
  //                 onChange={(date) => onStartDateUpdate(date)}
  //                 dateFormat="MMMM yyyy"
  //                 showMonthYearPicker
  //                 maxDate={addYears(new Date(), 3)}
  //                 minDate={new Date()}
  //                 withPortal
  //               />
  //             )} */}
  //           </div>
  //           <div
  //             id="main-datepicker"
  //             className="w-full bg-white rounded-2xl py-3 px-3 mdContainer:py-3 mdContainer:px-4 lgContainer:px-6 lgContainer:py-4 shadow-md grid grid-cols-2fr items-center text-xs mdContainer:text-sm lgContainer:text-base"
  //           >
  //             <div className="flex items-center">
  //               <img
  //                 src="/cash-flow/hourglass1.svg"
  //                 height={(size.width > 860 && 25) || (size.width < 860 && size.width > 680 && 22) || (size.width < 680 && 18)}
  //                 width={(size.width > 860 && 25) || (size.width < 860 && size.width > 680 && 22) || (size.width < 680 && 18)}
  //               />
  //               <p className="ml-2 text-primarydark">End:</p>
  //             </div>
  //             {/* {endDate && !isMobile ? (
  //               <DatePicker
  //                 selected={endDate}
  //                 onChange={(date) => onEndDateUpdate(date)}
  //                 dateFormat="MMMM yyyy"
  //                 showMonthYearPicker
  //                 maxDate={addYears(new Date(), 3)}
  //                 minDate={new Date()}
  //               />
  //             ) : (
  //               <DatePicker
  //                 selected={endDate}
  //                 onChange={(date) => onEndDateUpdate(date)}
  //                 dateFormat="MMMM yyyy"
  //                 showMonthYearPicker
  //                 maxDate={addYears(new Date(), 3)}
  //                 minDate={new Date()}
  //                 withPortal
  //               />
  //             )} */}
  //           </div>
  //           <div
  //             style={{
  //               width:
  //                 (size.width > 860 && '100%') ||
  //                 (size.width < 860 && size.width > 680 && '47%') ||
  //                 (size.width < 680 && size.width > 520 && '40%') ||
  //                 (size.width < 520 && '47%'),
  //               gridColumnStart: size.width < 860 ? '1' : 'unset',
  //               gridColumnEnd: size.width < 860 ? '3' : 'unset',
  //             }}
  //             className="place-self-center bg-white rounded-2xl py-3 px-3 mdContainer:py-3 mdContainer:px-4 lgContainer:px-6 lgContainer:py-4 shadow-md grid grid-cols-2fr items-center text-xs mdContainer:text-sm lgContainer:text-base"
  //           >
  //             <div className="flex items-center">
  //               <img
  //                 src="/cash-flow/tax.svg"
  //                 height={(size.width > 860 && 25) || (size.width < 860 && size.width > 680 && 22) || (size.width < 680 && 18)}
  //                 width={(size.width > 860 && 25) || (size.width < 860 && size.width > 680 && 22) || (size.width < 680 && 18)}
  //               />
  //               <p className="ml-2">Tax:</p>
  //             </div>
  //             <div className="flex" style={{ textAlignLast: 'right' }}>
  //               <input id="tax-input" value={selectedProject.tax} className="w-full bg-white focus:outline-none" />
  //               <p>%</p>
  //             </div>
  //           </div>
  //         </div>
  //         <div id="chartContainer" className="w-full h-1/2 p-4 mdContainer:p-8 bg-white rounded-2xl mt-12 shadow-md">
  //           {/* <canvas ref={chartRef} height={75}></canvas> */}
  //         </div>
  //         <div className="w-full grid grid-cols-2fr grid-rows-3fr lg1Container:grid-cols-3fr lg1Container:grid-rows-2fr gap-x-6 smContainer:gap-x-12 gap-y-8 mt-12">
  //           <div className="w-full bg-white rounded-2xl py-3 px-3 mdContainer:py-3 mdContainer:px-4 lgContainer:px-6 lgContainer:py-4 shadow-md flex justify-between items-center text-xs mdContainer:text-sm lgContainer:text-base">
  //             <div className="flex items-center">
  //               <img
  //                 src="/cash-flow/revenue.svg"
  //                 height={(size.width > 860 && 25) || (size.width < 860 && size.width > 680 && 22) || (size.width < 680 && 18)}
  //                 width={(size.width > 860 && 25) || (size.width < 860 && size.width > 680 && 22) || (size.width < 680 && 18)}
  //               />
  //               <p className="ml-2">Total revenue:</p>
  //             </div>
  //             <p>${totalRevenue}</p>
  //           </div>
  //           <div className="w-full bg-white rounded-2xl py-3 px-3 mdContainer:py-3 mdContainer:px-4 lgContainer:px-6 lgContainer:py-4 shadow-md flex justify-between items-center text-xs mdContainer:text-sm lgContainer:text-base">
  //             <div className="flex items-center">
  //               <img
  //                 src="/cash-flow/monthly.svg"
  //                 height={(size.width > 860 && 25) || (size.width < 860 && size.width > 680 && 22) || (size.width < 680 && 18)}
  //                 width={(size.width > 860 && 25) || (size.width < 860 && size.width > 680 && 22) || (size.width < 680 && 18)}
  //               />
  //               <p className="ml-2">Monthly revenue:</p>
  //             </div>
  //             <p>${monthlyRevenue}</p>
  //           </div>
  //           <div className="w-full bg-white rounded-2xl py-3 px-3 mdContainer:py-3 mdContainer:px-4 lgContainer:px-6 lgContainer:py-4 shadow-md flex justify-between items-center text-xs mdContainer:text-sm lgContainer:text-base">
  //             <div className="flex items-center">
  //               <img
  //                 src="/cash-flow/costs.svg"
  //                 height={(size.width > 860 && 25) || (size.width < 860 && size.width > 680 && 22) || (size.width < 680 && 18)}
  //                 width={(size.width > 860 && 25) || (size.width < 860 && size.width > 680 && 22) || (size.width < 680 && 18)}
  //               />
  //               <p className="ml-2">Total costs:</p>
  //             </div>
  //             <p>${totalCosts}</p>
  //           </div>
  //           <div className="w-full bg-white rounded-2xl py-3 px-3 mdContainer:py-3 mdContainer:px-4 lgContainer:px-6 lgContainer:py-4 shadow-md flex justify-between items-center text-xs mdContainer:text-sm lgContainer:text-base">
  //             <div className="flex items-center">
  //               <img
  //                 src="/cash-flow/monthly-costs.svg"
  //                 height={(size.width > 860 && 25) || (size.width < 860 && size.width > 680 && 22) || (size.width < 680 && 18)}
  //                 width={(size.width > 860 && 25) || (size.width < 860 && size.width > 680 && 22) || (size.width < 680 && 18)}
  //               />
  //               <p className="ml-2">Monthly costs:</p>
  //             </div>
  //             <p>${monthlyCosts}</p>
  //           </div>
  //           <div className="w-full bg-white rounded-2xl py-3 px-3 mdContainer:py-3 mdContainer:px-4 lgContainer:px-6 lgContainer:py-4 shadow-md flex justify-between items-center text-xs mdContainer:text-sm lgContainer:text-base">
  //             <div className="flex items-center">
  //               <img
  //                 src="/cash-flow/megaphone.svg"
  //                 height={(size.width > 860 && 25) || (size.width < 860 && size.width > 680 && 22) || (size.width < 680 && 18)}
  //                 width={(size.width > 860 && 25) || (size.width < 860 && size.width > 680 && 22) || (size.width < 680 && 18)}
  //               />
  //               <p className="ml-2">Gross profit:</p>
  //             </div>
  //             <p>${grossProfit}</p>
  //           </div>
  //           <div className="w-full bg-white rounded-2xl py-3 px-3 mdContainer:py-3 mdContainer:px-4 lgContainer:px-6 lgContainer:py-4 shadow-md flex justify-between items-center text-xs mdContainer:text-sm lgContainer:text-base">
  //             <div className="flex items-center">
  //               <img
  //                 src="/cash-flow/net-worth.svg"
  //                 height={(size.width > 860 && 25) || (size.width < 860 && size.width > 680 && 22) || (size.width < 680 && 18)}
  //                 width={(size.width > 860 && 25) || (size.width < 860 && size.width > 680 && 22) || (size.width < 680 && 18)}
  //               />
  //               <p className="ml-2">Net profit:</p>
  //             </div>
  //             <p>${netProfit}</p>
  //           </div>
  //         </div>
  //         {/* Revenue */}
  //         <div
  //           ref={revenueRef}
  //           style={{ height: 55 }}
  //           className="overflow-hidden relative w-full rounded-2xl bg-white dark:bg-background px-4 py-4 flex justify-center items-center mt-12 flex flex-wrap shadow-md"
  //         >
  //           <div className="w-full flex justify-between items-center">
  //             <div className="lgContainer:ml-2">
  //               <p className="text-sm lgContainer:text-base">Revenue</p>
  //             </div>
  //             <div className="lgContainer:mr-2 flex flex-nowrap items-center">
  //               <img
  //                 onClick={onRevenueElementAdd}
  //                 className="cursor-pointer"
  //                 src="/cash-flow/add.svg"
  //                 height={(size.width > 860 && 22) || (size.width < 860 && size.width > 680 && 18) || (size.width < 680 && 16)}
  //                 width={(size.width > 860 && 22) || (size.width < 860 && size.width > 680 && 18) || (size.width < 680 && 16)}
  //               />
  //               <img
  //                 ref={dropDownIcon}
  //                 onClick={onRevenueShow}
  //                 className="ml-2 cursor-pointer"
  //                 src="/cash-flow/dropdown.svg"
  //                 height={(size.width > 860 && 22) || (size.width < 860 && size.width > 680 && 18) || (size.width < 680 && 16)}
  //                 width={(size.width > 860 && 22) || (size.width < 860 && size.width > 680 && 18) || (size.width < 680 && 16)}
  //               />
  //             </div>
  //           </div>
  //           <div
  //             ref={innerContainerRevenueRef}
  //             className={`w-full ${
  //               size.width < 1120
  //                 ? 'text-sm mdContainer:text-base lg1Container:mx-8 lg1Container:mb-6 mt-4  bg-background rounded-2xl px-4 mdContainer:px-6 py-4'
  //                 : 'w-full mx-8 mb-6 mt-4  bg-background rounded-2xl px-4 mdContainer:px-6 py-4'
  //             }`}
  //           >
  //             {/* <hr className="text-primary w-full" /> */}
  //             <div
  //               style={{ fontSize: size.width < 520 && '0.6rem' }}
  //               className="w-full grid grid-cols-6fr items-center text-xs mdContainer:text-sm lg1Container:text-base"
  //             >
  //               <div>name</div>
  //               <div>type</div>
  //               <div>amount</div>
  //               <div>start</div>
  //               <div>end</div>
  //               <div></div>
  //             </div>
  //             <hr className="text-primary w-full" />
  //             <div className="h-full w-full rounded-2xl flex flex-wrap flex-col">
  //               <DragDropContext onDragEnd={handleOnDragEnd}>
  //                 <Droppable droppableId="elements">
  //                   {(provided) => (
  //                     <div className="elements" {...provided.droppableProps} ref={provided.innerRef}>
  //                       {revenueElements &&
  //                         revenueElements.map((element, index) => {
  //                           console.log(element);
  //                           return (
  //                             <Draggable key={element.index} draggableId={element.index} index={index}>
  //                               {(provided) => (
  //                                 <RevenueElement
  //                                   provided={provided}
  //                                   setRevenueElements={setRevenueElements}
  //                                   mainDocument={mainDocument}
  //                                   projectId={projectId}
  //                                   documentId={documentId}
  //                                   revenueElements={revenueElements}
  //                                   element={element}
  //                                   index={index}
  //                                 />
  //                               )}
  //                             </Draggable>
  //                           );
  //                         })}
  //                       {provided.placeholder}
  //                     </div>
  //                   )}
  //                 </Droppable>
  //               </DragDropContext>
  //             </div>
  //           </div>
  //         </div>
  //         {/* Costs */}
  //         <div
  //           ref={costsRef}
  //           style={{ height: 55 }}
  //           className="overflow-hidden relative w-full rounded-2xl bg-white dark:bg-background px-4 py-4 flex justify-center items-center mt-8 flex flex-wrap shadow-md"
  //         >
  //           <div className="w-full flex justify-between items-center">
  //             <div className="lgContainer:ml-2">
  //               <p className="text-sm lgContainer:text-base">Costs</p>
  //             </div>
  //             <div className="lgContainer:mr-2 flex flex-nowrap items-center">
  //               <img
  //                 onClick={onCostsElementAdd}
  //                 className="cursor-pointer"
  //                 src="/cash-flow/add.svg"
  //                 height={(size.width > 860 && 22) || (size.width < 860 && size.width > 680 && 18) || (size.width < 680 && 16)}
  //                 width={(size.width > 860 && 22) || (size.width < 860 && size.width > 680 && 18) || (size.width < 680 && 16)}
  //               />
  //               <img
  //                 ref={dropDownIconCosts}
  //                 onClick={onCostsShow}
  //                 className="ml-2 cursor-pointer"
  //                 src="/cash-flow/dropdown.svg"
  //                 height={(size.width > 860 && 22) || (size.width < 860 && size.width > 680 && 18) || (size.width < 680 && 16)}
  //                 width={(size.width > 860 && 22) || (size.width < 860 && size.width > 680 && 18) || (size.width < 680 && 16)}
  //               />
  //             </div>
  //           </div>
  //           <div
  //             ref={innerContainerCostsRef}
  //             className={`w-full ${
  //               size.width < 1120
  //                 ? 'text-sm mdContainer:text-base lg1Container:mx-8 lg1Container:mb-6 mt-4  bg-background rounded-2xl px-4 mdContainer:px-6 py-4'
  //                 : 'w-full mx-8 mb-6 mt-4  bg-background rounded-2xl px-4 mdContainer:px-6 py-4'
  //             }`}
  //           >
  //             {/* <hr className="text-primary w-full" /> */}
  //             <div className="w-full grid grid-cols-6fr items-center">
  //               <div>name</div>
  //               <div>type</div>
  //               <div>amount</div>
  //               <div>start</div>
  //               <div>end</div>
  //               <div></div>
  //             </div>
  //             <hr className="text-primary w-full" />
  //             <div className="h-full w-full rounded-2xl flex flex-wrap flex-col">
  //               <DragDropContext onDragEnd={costsHandleOnDragEnd}>
  //                 <Droppable droppableId="elements">
  //                   {(provided) => (
  //                     <div className="elements" {...provided.droppableProps} ref={provided.innerRef}>
  //                       {costsElements &&
  //                         costsElements.map((element, index) => {
  //                           console.log(element);
  //                           return (
  //                             <Draggable key={element.index} draggableId={element.index} index={index}>
  //                               {(provided) => (
  //                                 <CostsElement
  //                                   provided={provided}
  //                                   setCostsElements={setCostsElements}
  //                                   mainDocument={mainDocument}
  //                                   projectId={projectId}
  //                                   documentId={documentId}
  //                                   costsElements={costsElements}
  //                                   element={element}
  //                                   index={index}
  //                                 />
  //                               )}
  //                             </Draggable>
  //                           );
  //                         })}
  //                       {provided.placeholder}
  //                     </div>
  //                   )}
  //                 </Droppable>
  //               </DragDropContext>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
};

_s(UniqueCashflowPage, "DaH743c7i1Es8J+XIdISHNlpFzs=", false, function () {
  return [_utils_useWindowSize__WEBPACK_IMPORTED_MODULE_8__["useWindowSize"], next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];
});

_c = UniqueCashflowPage;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_1__["withSuperJSONPage"])(UniqueCashflowPage));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGFzaGJvYXJkL3Byb2plY3RzL1twcm9qZWN0XS9jYXNoLWZsb3cvLmpzIl0sIm5hbWVzIjpbIlVuaXF1ZUNhc2hmbG93UGFnZSIsInByb2plY3QiLCJjb25zb2xlIiwibG9nIiwidXNlU3RhdGUiLCJzdGFydERhdGUiLCJzZXRTdGFydERhdGUiLCJlbmREYXRlIiwic2V0RW5kRGF0ZSIsInNlbGVjdGVkUHJvamVjdCIsInNldFNlbGVjdGVkUHJvamVjdCIsInJldmVudWVFbGVtZW50cyIsInNldFJldmVudWVFbGVtZW50cyIsImNvc3RzRWxlbWVudHMiLCJzZXRDb3N0c0VsZW1lbnRzIiwicGVyaW9kcyIsInNldFBlcmlvZHMiLCJ0YXgiLCJzZXRUYXgiLCJzaXplIiwidXNlV2luZG93U2l6ZSIsInRvdGFsUmV2ZW51ZSIsInNldFRvdGFsUmV2ZW51ZSIsIm1vbnRobHlSZXZlbnVlIiwic2V0TW9udGhseVJldmVudWUiLCJ0b3RhbENvc3RzIiwic2V0VG90YWxDb3N0cyIsIm1vbnRobHlDb3N0cyIsInNldE1vbnRobHlDb3N0cyIsImdyb3NzUHJvZml0Iiwic2V0R3Jvc3NQcm9maXQiLCJuZXRQcm9maXQiLCJzZXROZXRQcm9maXQiLCJ1c2VFZmZlY3QiLCJjaGFuZ2VkU3RhcnREYXRlIiwiZG9jIiwiZGF0YSIsImdsb2JhbFN0YXJ0RGF0ZSIsInNlY29uZHMiLCJEYXRlIiwiY2hhbmdlZEVuZERhdGUiLCJnbG9iYWxFbmREYXRlIiwidG90YWxSZXZlbnVlQXJyYXkiLCJtYXAiLCJlbGVtZW50IiwicGFyc2VJbnQiLCJ2YWx1ZSIsImxlbmd0aCIsInJlZHVjZSIsImEiLCJiIiwiTnVtYmVyIiwiaXNOYU4iLCJNYXRoIiwicm91bmQiLCJwZXJpb2RMZW5ndGgiLCJ0b3RhbENvc3RzQXJyYXkiLCJpc0Zpbml0ZSIsInJvdXRlciIsInVzZVJvdXRlciIsImlzRmFsbGJhY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNELENBL2FEOztHQUFNNUQsa0I7VUFTU29CLGtFLEVBdURFdUMscUQ7OztLQWhFWDNELGtCOztBQStkUyxpS0FBQUEsa0JBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGFzaGJvYXJkL3Byb2plY3RzL1twcm9qZWN0XS9jYXNoLWZsb3cvW2lkXS45NDg1OWFmZWFiZTBhYWMwNDgyYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgZGIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9saWIvZmlyZWJhc2UtYWRtaW4nO1xyXG5pbXBvcnQgeyBkYiBhcyBkYkNsaWVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2xpYi9maXJlYmFzZSc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcclxuaW1wb3J0IFVuaXF1ZUVsZW1lbnQgZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50cy9kYXNoYm9hcmQvc3RhcnR1cC9wcm9qZWN0L2J1c2luZXNzLWFwcC9jb21wZXRpdG9ycy9VbmlxdWVFbGVtZW50JztcclxuaW1wb3J0IEJvdW5jZUxvYWRlckNvbXBvbmVudCBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb25lbnRzL0JvdW5jZUxvYWRlcic7XHJcbmNvbnN0IHNhZmVKc29uU3RyaW5naWZ5ID0gcmVxdWlyZSgnc2FmZS1qc29uLXN0cmluZ2lmeScpO1xyXG5pbXBvcnQgeyB1c2VXaW5kb3dTaXplIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vdXRpbHMvdXNlV2luZG93U2l6ZSc7XHJcblxyXG5jb25zdCBVbmlxdWVDYXNoZmxvd1BhZ2UgPSAoeyBwcm9qZWN0IH0pID0+IHtcclxuICBjb25zb2xlLmxvZygnUGFydGljdWxhciBwcm9qZWN0IC0tPiAnLCBwcm9qZWN0KTtcclxuICBjb25zdCBbc3RhcnREYXRlLCBzZXRTdGFydERhdGVdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2VuZERhdGUsIHNldEVuZERhdGVdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW3NlbGVjdGVkUHJvamVjdCwgc2V0U2VsZWN0ZWRQcm9qZWN0XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtyZXZlbnVlRWxlbWVudHMsIHNldFJldmVudWVFbGVtZW50c10gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtjb3N0c0VsZW1lbnRzLCBzZXRDb3N0c0VsZW1lbnRzXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW3BlcmlvZHMsIHNldFBlcmlvZHNdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbdGF4LCBzZXRUYXhdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBzaXplID0gdXNlV2luZG93U2l6ZSgpO1xyXG4gIC8vIFN1bSBkYXRhXHJcbiAgY29uc3QgW3RvdGFsUmV2ZW51ZSwgc2V0VG90YWxSZXZlbnVlXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW21vbnRobHlSZXZlbnVlLCBzZXRNb250aGx5UmV2ZW51ZV0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFt0b3RhbENvc3RzLCBzZXRUb3RhbENvc3RzXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW21vbnRobHlDb3N0cywgc2V0TW9udGhseUNvc3RzXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW2dyb3NzUHJvZml0LCBzZXRHcm9zc1Byb2ZpdF0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtuZXRQcm9maXQsIHNldE5ldFByb2ZpdF0gPSB1c2VTdGF0ZSgpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBwcm9qZWN0ICYmIHNldFNlbGVjdGVkUHJvamVjdChwcm9qZWN0WzBdKTtcclxuICAgIHByb2plY3QgJiYgc2V0UmV2ZW51ZUVsZW1lbnRzKHByb2plY3RbMF0ucmV2ZW51ZUVsZW1lbnRzKTtcclxuICAgIHByb2plY3QgJiYgc2V0Q29zdHNFbGVtZW50cyhwcm9qZWN0WzBdLmNvc3RzRWxlbWVudHMpO1xyXG4gICAgcHJvamVjdCAmJiBzZXRQZXJpb2RzKHByb2plY3RbMF0ucGVyaW9kcyk7XHJcbiAgICBwcm9qZWN0ICYmIHNldFRheChwcm9qZWN0WzBdLnRheCk7XHJcbiAgICAvLyBTdW0gZGF0YVxyXG4gICAgLy8gR2xvYmFsIHN0YXJ0IGRhdGVcclxuICAgIGNvbnN0IGNoYW5nZWRTdGFydERhdGUgPSBkb2MuZGF0YSgpLmdsb2JhbFN0YXJ0RGF0ZS5zZWNvbmRzICogMTAwMDtcclxuICAgIGRvYy5kYXRhKCkuZ2xvYmFsU3RhcnREYXRlICE9PSAnJyAmJiBzZXRTdGFydERhdGUobmV3IERhdGUoY2hhbmdlZFN0YXJ0RGF0ZSkpO1xyXG4gICAgY29uc3QgY2hhbmdlZEVuZERhdGUgPSBkb2MuZGF0YSgpLmdsb2JhbEVuZERhdGUuc2Vjb25kcyAqIDEwMDA7XHJcbiAgICAvLyBHbG9iYWwgZW5kIGRhdGVcclxuICAgIGRvYy5kYXRhKCkuZ2xvYmFsRW5kRGF0ZSAhPT0gJycgJiYgc2V0RW5kRGF0ZShuZXcgRGF0ZShjaGFuZ2VkRW5kRGF0ZSkpO1xyXG4gICAgLy8gUGVyaW9kc1xyXG4gICAgc2V0UGVyaW9kcyhkb2MuZGF0YSgpLnBlcmlvZHMpO1xyXG4gICAgLy8gVG90YWwgcmV2ZW51ZVxyXG4gICAgY29uc3QgdG90YWxSZXZlbnVlQXJyYXkgPSBkb2MuZGF0YSgpLnJldmVudWVFbGVtZW50cy5tYXAoKGVsZW1lbnQpID0+IHBhcnNlSW50KGVsZW1lbnQudmFsdWUgKiBlbGVtZW50LnBlcmlvZHMubGVuZ3RoKSk7XHJcbiAgICBjb25zdCB0b3RhbFJldmVudWUgPSB0b3RhbFJldmVudWVBcnJheS5yZWR1Y2UoKGEsIGIpID0+IHtcclxuICAgICAgcmV0dXJuIGEgKyBiO1xyXG4gICAgfSwgMCk7XHJcbiAgICBzZXRUb3RhbFJldmVudWUoTnVtYmVyLmlzTmFOKHRvdGFsUmV2ZW51ZSkgPyAwIDogTWF0aC5yb3VuZCh0b3RhbFJldmVudWUpKTtcclxuICAgIC8vIE1vbnRobHkgcmV2ZW51ZVxyXG4gICAgY29uc3QgcGVyaW9kTGVuZ3RoID0gZG9jLmRhdGEoKS5wZXJpb2RzLmxlbmd0aDtcclxuICAgIGNvbnN0IG1vbnRobHlSZXZlbnVlID0gdG90YWxSZXZlbnVlIC8gcGVyaW9kTGVuZ3RoO1xyXG4gICAgc2V0TW9udGhseVJldmVudWUoTnVtYmVyLmlzTmFOKG1vbnRobHlSZXZlbnVlKSA/IDAgOiBNYXRoLnJvdW5kKG1vbnRobHlSZXZlbnVlKSk7XHJcbiAgICAvLyBUb3RhbCBjb3N0c1xyXG4gICAgY29uc3QgdG90YWxDb3N0c0FycmF5ID0gZG9jLmRhdGEoKS5jb3N0c0VsZW1lbnRzLm1hcCgoZWxlbWVudCkgPT4gcGFyc2VJbnQoZWxlbWVudC52YWx1ZSAqIGVsZW1lbnQucGVyaW9kcy5sZW5ndGgpKTtcclxuICAgIGNvbnN0IHRvdGFsQ29zdHMgPSB0b3RhbENvc3RzQXJyYXkucmVkdWNlKChhLCBiKSA9PiB7XHJcbiAgICAgIHJldHVybiBhICsgYjtcclxuICAgIH0sIDApO1xyXG4gICAgY29uc29sZS5sb2codG90YWxDb3N0cyk7XHJcbiAgICAvLyBjb25zdCBmaWx0ZXJlZFRvdGFsQ29zdHMgPVxyXG4gICAgLy8gICB0eXBlb2YgdG90YWxDb3N0cyA9PSAnbnVtYmVyJyA/IE1hdGgucm91bmQodG90YWxDb3N0cykgOiAwO1xyXG4gICAgLy8gY29uc29sZS5sb2coZmlsdGVyZWRUb3RhbENvc3RzKTtcclxuICAgIHNldFRvdGFsQ29zdHMoTnVtYmVyLmlzRmluaXRlKHRvdGFsQ29zdHMpID8gTWF0aC5yb3VuZCh0b3RhbENvc3RzKSA6IDApO1xyXG4gICAgLy8gTW9udGhseSBjb3N0c1xyXG4gICAgY29uc3QgbW9udGhseUNvc3RzID0gdG90YWxDb3N0cyAvIHBlcmlvZExlbmd0aDtcclxuICAgIHNldE1vbnRobHlDb3N0cyhOdW1iZXIuaXNGaW5pdGUobW9udGhseUNvc3RzKSA/IE1hdGgucm91bmQobW9udGhseUNvc3RzKSA6IDApO1xyXG4gICAgLy8gR3Jvc3MgcHJvZml0XHJcbiAgICBjb25zdCBncm9zc1Byb2ZpdCA9IHRvdGFsUmV2ZW51ZSAtIHRvdGFsQ29zdHM7XHJcbiAgICBzZXRHcm9zc1Byb2ZpdChOdW1iZXIuaXNGaW5pdGUoZ3Jvc3NQcm9maXQpID8gTWF0aC5yb3VuZChncm9zc1Byb2ZpdCkgOiAwKTtcclxuICAgIC8vIE5ldCBwcm9maXRcclxuICAgIGNvbnN0IHRheCA9IHBhcnNlSW50KGRvYy5kYXRhKCkudGF4KTtcclxuICAgIGNvbnN0IG5ldFByb2ZpdCA9IGdyb3NzUHJvZml0IC0gKHRheCAvIDEwMCkgKiBncm9zc1Byb2ZpdDtcclxuICAgIHNldE5ldFByb2ZpdChOdW1iZXIuaXNGaW5pdGUobmV0UHJvZml0KSA/IE1hdGgucm91bmQobmV0UHJvZml0KSA6IDApO1xyXG4gIH0sIFtwcm9qZWN0XSk7XHJcbiAgLy8gICBjb25zdCBbY29tcGV0aXRvcnMsIHNldENvbXBldGl0b3JzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zb2xlLmxvZyhzZWxlY3RlZFByb2plY3QpO1xyXG4gIGNvbnNvbGUubG9nKHJldmVudWVFbGVtZW50cyk7XHJcblxyXG4gIGlmIChyb3V0ZXIuaXNGYWxsYmFjaykge1xyXG4gICAgcmV0dXJuIDxCb3VuY2VMb2FkZXJDb21wb25lbnQgLz47XHJcbiAgfVxyXG5cclxuICByZXR1cm4gPGRpdj5UZW1wb3JhcnkgZWxlbWVudDwvZGl2PjtcclxuICAvLyAgIHJldHVybiAoXHJcbiAgLy8gICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIHctZnVsbCByZWxhdGl2ZSBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlclwiPlxyXG4gIC8vICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1heC13LWZ1bGwgcmVsYXRpdmUgbXQtMTIgbGcxQ29udGFpbmVyOm10LTE2IG1iLTE2IHB4LTMyXCI+XHJcbiAgLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGdyaWQgZ3JpZC1jb2xzLTIgZ3JpZC1yb3dzLTEgZ3JpZC1mbG93LWNvbFwiPlxyXG4gIC8vICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgLy8gICAgICAgICAgICAgPHN2Z1xyXG4gIC8vICAgICAgICAgICAgICAgaGVpZ2h0PXsoc2l6ZS53aWR0aCA+IDg2MCAmJiAzMCkgfHwgKHNpemUud2lkdGggPCA4NjAgJiYgc2l6ZS53aWR0aCA+IDY4MCAmJiAyNikgfHwgKHNpemUud2lkdGggPCA2ODAgJiYgMjIpfVxyXG4gIC8vICAgICAgICAgICAgICAgd2lkdGg9eyhzaXplLndpZHRoID4gODYwICYmIDMwKSB8fCAoc2l6ZS53aWR0aCA8IDg2MCAmJiBzaXplLndpZHRoID4gNjgwICYmIDI2KSB8fCAoc2l6ZS53aWR0aCA8IDY4MCAmJiAyMil9XHJcbiAgLy8gICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmaWxsLWN1cnJlbnQgdGV4dC1wcmltYXJ5IGRhcms6dGV4dC1wcmltYXJ5ZGFya1wiXHJcbiAgLy8gICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAvLyAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTI4IDEyOFwiXHJcbiAgLy8gICAgICAgICAgICAgPlxyXG4gIC8vICAgICAgICAgICAgICAgPHRpdGxlPkxhbmRpbmcgU3VjY2VzczwvdGl0bGU+XHJcbiAgLy8gICAgICAgICAgICAgICA8ZyBpZD1cIkxhbmRpbmdfU3VjY2Vzc1wiIGRhdGEtbmFtZT1cIkxhbmRpbmcgU3VjY2Vzc1wiPlxyXG4gIC8vICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gIC8vICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNscy0xXCJcclxuICAvLyAgICAgICAgICAgICAgICAgICBkPVwiTTEwOS4zLDkwLjFBNDYsNDYsMCwwLDAsNjUsMzZWMjAuMDhjMS43OC0uNjIsNy4yMS0yLjE0LDEyLjU3LjIzYTE5LjMzLDE5LjMzLDAsMCwwLDE0LjgyLDBjLjg3LS4zOC42MS4zMS42MS0xNy45M2ExLDEsMCwwLDAtMS40My0uOTNjLS4wNywwLTYuNjksMi44Ny0xMy4xOCwwQTE5LjQxLDE5LjQxLDAsMCwwLDY1LC45MywxLDEsMCwwLDAsNjMsMVYzNmE0NS44Niw0NS44NiwwLDAsMC0yOC42NiwxMC44QzE2LjE4LDQwLjQ4LDQsNDAsLjc5LDQ1LjUxLTIuMjksNTAuODYsMy45NCw1OS4zLDEwLDY1LjY4QTExLDExLDAsMCwwLDE4LDgzYy44MSwzOC40MSw0Ni4wOCw1OS4yLDc1LjY2LDM0LjIxLDguNTMsMywyOSw5LjE1LDMzLjU1LDEuMzFDMTMwLjM5LDExMywxMjMuODYsMTAyLjY1LDEwOS4zLDkwLjFaTTc3LjU5LDMuMzFBMTkuMzksMTkuMzksMCwwLDAsOTEsMy44M1YxOC42OGMtMS43OS42Mi03LjIyLDIuMTMtMTIuNTctLjIzQTE5LjE5LDE5LjE5LDAsMCwwLDY1LDE3LjkzVjMuMDhDNjYuODEsMi40Niw3Mi4yNCwxLDc3LjU5LDMuMzFaTTY1LDQ1di03YzM5LjY5LjkxLDU4LDUwLjI3LDI4LjIxLDc2LjgxQzcxLjMyLDEwNyw0Niw5Mi42NiwyNy43Nyw3OC42NGExMSwxMSwwLDAsMC0zLjItMTYuMTNBNDMuODgsNDMuODgsMCwwLDEsNjMsMzguMDZWNDVBMSwxLDAsMCwwLDY1LDQ1Wk0zMi41NSw0OC4zNmE0Ni4yMSw0Ni4yMSwwLDAsMC05LjgzLDEzLjI4LDEwLjkzLDEwLjkzLDAsMCwwLTExLjQsMi40N0MtOC4zOSw0My4yMyw1LjIzLDM5LjA4LDMyLjU1LDQ4LjM2Wk0xMCw3MmE5LDksMCwxLDEsOSw5QTksOSwwLDAsMSwxMCw3MlptMTAsMTFhMTEsMTEsMCwwLDAsNi4zNC0yLjgyYzE4LjQ1LDE0LjIxLDQzLjQ1LDI4LjM1LDY1LjA1LDM2LjIyQzYzLDEzOS4xNiwyMC44MywxMTkuMSwyMC4wNSw4M1ptMTA1LjQsMzQuNWMtMi41MSw0LjM1LTE0LDMuNjItMzAtMS44NWE0NS42MSw0NS42MSwwLDAsMCwxMy40Mi0yMy4yMUMxMjEuNTksMTAzLjU4LDEyOCwxMTMuMTIsMTI1LjQ1LDExNy40N1pcIlxyXG4gIC8vICAgICAgICAgICAgICAgICAvPlxyXG4gIC8vICAgICAgICAgICAgICAgPC9nPlxyXG4gIC8vICAgICAgICAgICAgIDwvc3ZnPlxyXG4gIC8vICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeWRhcmsgdGV4dC1sZyBtZENvbnRhaW5lcjp0ZXh0LXhsIGxnQ29udGFpbmVyOnRleHQtMnhsIG10LTIgcGwtMiBkYXJrOnRleHQtYmFja2dyb3VuZFwiPlxyXG4gIC8vICAgICAgICAgICAgICAgQ2FzaCBmbG93IGFuYWx5c2lzXHJcbiAgLy8gICAgICAgICAgICAgPC9wPlxyXG4gIC8vICAgICAgICAgICA8L2Rpdj5cclxuICAvLyAgICAgICAgIDwvZGl2PlxyXG4gIC8vICAgICAgICAgPGRpdj5cclxuICAvLyAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtc2Vjb25kYXJ5IHRleHQteHMgbWRDb250YWluZXI6dGV4dC1zbSBsZ0NvbnRhaW5lcjp0ZXh0LWJhc2UgdGV4dC1ncmF5IHJlbGF0aXZlIC10b3AtMSBsZ0NvbnRhaW5lcjp0b3AtMFwiPlxyXG4gIC8vICAgICAgICAgICAgIE1hbmFnZSB5b3VyIHN0YXJ0dXAgY2FzaCBmbG93XHJcbiAgLy8gICAgICAgICAgIDwvaDE+XHJcbiAgLy8gICAgICAgICA8L2Rpdj5cclxuICAvLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGdyaWQgZ3JpZC1jb2xzLTJmciBncmlkLXJvd3MtMWZyIGxnQ29udGFpbmVyOmdyaWQtY29scy0zZnIgbGdDb250YWluZXI6Z3JpZC1yb3dzLTFmciBnYXAteS04IGdhcC14LTYgc21Db250YWluZXI6Z2FwLXgtMzIgbWRDb250YWluZXI6Z2FwLXgtMTIgbXQtMTJcIj5cclxuICAvLyAgICAgICAgICAgPGRpdlxyXG4gIC8vICAgICAgICAgICAgIGlkPVwibWFpbi1kYXRlcGlja2VyXCJcclxuICAvLyAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgcm91bmRlZC0yeGwgcHktMyBweC0zIG1kQ29udGFpbmVyOnB5LTMgbWRDb250YWluZXI6cHgtNCBsZ0NvbnRhaW5lcjpweC02IGxnQ29udGFpbmVyOnB5LTQgc2hhZG93LW1kIGdyaWQgZ3JpZC1jb2xzLTJmciBpdGVtcy1jZW50ZXIgdGV4dC14cyBtZENvbnRhaW5lcjp0ZXh0LXNtIGxnQ29udGFpbmVyOnRleHQtYmFzZVwiXHJcbiAgLy8gICAgICAgICAgID5cclxuICAvLyAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgLy8gICAgICAgICAgICAgICA8aW1nXHJcbiAgLy8gICAgICAgICAgICAgICAgIHNyYz1cIi9jYXNoLWZsb3cvY2FsZW5kYXIuc3ZnXCJcclxuICAvLyAgICAgICAgICAgICAgICAgaGVpZ2h0PXsoc2l6ZS53aWR0aCA+IDg2MCAmJiAyNSkgfHwgKHNpemUud2lkdGggPCA4NjAgJiYgc2l6ZS53aWR0aCA+IDY4MCAmJiAyMikgfHwgKHNpemUud2lkdGggPCA2ODAgJiYgMTgpfVxyXG4gIC8vICAgICAgICAgICAgICAgICB3aWR0aD17KHNpemUud2lkdGggPiA4NjAgJiYgMjUpIHx8IChzaXplLndpZHRoIDwgODYwICYmIHNpemUud2lkdGggPiA2ODAgJiYgMjIpIHx8IChzaXplLndpZHRoIDwgNjgwICYmIDE4KX1cclxuICAvLyAgICAgICAgICAgICAgIC8+XHJcbiAgLy8gICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtbC0yIHRleHQtcHJpbWFyeWRhcmtcIj5TdGFydDo8L3A+XHJcbiAgLy8gICAgICAgICAgICAgPC9kaXY+XHJcbiAgLy8gICAgICAgICAgICAgey8qIHtzdGFydERhdGUgJiYgIWlzTW9iaWxlID8gKFxyXG4gIC8vICAgICAgICAgICAgICAgPERhdGVQaWNrZXJcclxuICAvLyAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e3N0YXJ0RGF0ZX1cclxuICAvLyAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhkYXRlKSA9PiBvblN0YXJ0RGF0ZVVwZGF0ZShkYXRlKX1cclxuICAvLyAgICAgICAgICAgICAgICAgZGF0ZUZvcm1hdD1cIk1NTU0geXl5eVwiXHJcbiAgLy8gICAgICAgICAgICAgICAgIHNob3dNb250aFllYXJQaWNrZXJcclxuICAvLyAgICAgICAgICAgICAgICAgbWF4RGF0ZT17YWRkWWVhcnMobmV3IERhdGUoKSwgMyl9XHJcbiAgLy8gICAgICAgICAgICAgICAgIG1pbkRhdGU9e25ldyBEYXRlKCl9XHJcbiAgLy8gICAgICAgICAgICAgICAvPlxyXG4gIC8vICAgICAgICAgICAgICkgOiAoXHJcbiAgLy8gICAgICAgICAgICAgICA8RGF0ZVBpY2tlclxyXG4gIC8vICAgICAgICAgICAgICAgICBzZWxlY3RlZD17c3RhcnREYXRlfVxyXG4gIC8vICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGRhdGUpID0+IG9uU3RhcnREYXRlVXBkYXRlKGRhdGUpfVxyXG4gIC8vICAgICAgICAgICAgICAgICBkYXRlRm9ybWF0PVwiTU1NTSB5eXl5XCJcclxuICAvLyAgICAgICAgICAgICAgICAgc2hvd01vbnRoWWVhclBpY2tlclxyXG4gIC8vICAgICAgICAgICAgICAgICBtYXhEYXRlPXthZGRZZWFycyhuZXcgRGF0ZSgpLCAzKX1cclxuICAvLyAgICAgICAgICAgICAgICAgbWluRGF0ZT17bmV3IERhdGUoKX1cclxuICAvLyAgICAgICAgICAgICAgICAgd2l0aFBvcnRhbFxyXG4gIC8vICAgICAgICAgICAgICAgLz5cclxuICAvLyAgICAgICAgICAgICApfSAqL31cclxuICAvLyAgICAgICAgICAgPC9kaXY+XHJcbiAgLy8gICAgICAgICAgIDxkaXZcclxuICAvLyAgICAgICAgICAgICBpZD1cIm1haW4tZGF0ZXBpY2tlclwiXHJcbiAgLy8gICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIHJvdW5kZWQtMnhsIHB5LTMgcHgtMyBtZENvbnRhaW5lcjpweS0zIG1kQ29udGFpbmVyOnB4LTQgbGdDb250YWluZXI6cHgtNiBsZ0NvbnRhaW5lcjpweS00IHNoYWRvdy1tZCBncmlkIGdyaWQtY29scy0yZnIgaXRlbXMtY2VudGVyIHRleHQteHMgbWRDb250YWluZXI6dGV4dC1zbSBsZ0NvbnRhaW5lcjp0ZXh0LWJhc2VcIlxyXG4gIC8vICAgICAgICAgICA+XHJcbiAgLy8gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gIC8vICAgICAgICAgICAgICAgPGltZ1xyXG4gIC8vICAgICAgICAgICAgICAgICBzcmM9XCIvY2FzaC1mbG93L2hvdXJnbGFzczEuc3ZnXCJcclxuICAvLyAgICAgICAgICAgICAgICAgaGVpZ2h0PXsoc2l6ZS53aWR0aCA+IDg2MCAmJiAyNSkgfHwgKHNpemUud2lkdGggPCA4NjAgJiYgc2l6ZS53aWR0aCA+IDY4MCAmJiAyMikgfHwgKHNpemUud2lkdGggPCA2ODAgJiYgMTgpfVxyXG4gIC8vICAgICAgICAgICAgICAgICB3aWR0aD17KHNpemUud2lkdGggPiA4NjAgJiYgMjUpIHx8IChzaXplLndpZHRoIDwgODYwICYmIHNpemUud2lkdGggPiA2ODAgJiYgMjIpIHx8IChzaXplLndpZHRoIDwgNjgwICYmIDE4KX1cclxuICAvLyAgICAgICAgICAgICAgIC8+XHJcbiAgLy8gICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtbC0yIHRleHQtcHJpbWFyeWRhcmtcIj5FbmQ6PC9wPlxyXG4gIC8vICAgICAgICAgICAgIDwvZGl2PlxyXG4gIC8vICAgICAgICAgICAgIHsvKiB7ZW5kRGF0ZSAmJiAhaXNNb2JpbGUgPyAoXHJcbiAgLy8gICAgICAgICAgICAgICA8RGF0ZVBpY2tlclxyXG4gIC8vICAgICAgICAgICAgICAgICBzZWxlY3RlZD17ZW5kRGF0ZX1cclxuICAvLyAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhkYXRlKSA9PiBvbkVuZERhdGVVcGRhdGUoZGF0ZSl9XHJcbiAgLy8gICAgICAgICAgICAgICAgIGRhdGVGb3JtYXQ9XCJNTU1NIHl5eXlcIlxyXG4gIC8vICAgICAgICAgICAgICAgICBzaG93TW9udGhZZWFyUGlja2VyXHJcbiAgLy8gICAgICAgICAgICAgICAgIG1heERhdGU9e2FkZFllYXJzKG5ldyBEYXRlKCksIDMpfVxyXG4gIC8vICAgICAgICAgICAgICAgICBtaW5EYXRlPXtuZXcgRGF0ZSgpfVxyXG4gIC8vICAgICAgICAgICAgICAgLz5cclxuICAvLyAgICAgICAgICAgICApIDogKFxyXG4gIC8vICAgICAgICAgICAgICAgPERhdGVQaWNrZXJcclxuICAvLyAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e2VuZERhdGV9XHJcbiAgLy8gICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZGF0ZSkgPT4gb25FbmREYXRlVXBkYXRlKGRhdGUpfVxyXG4gIC8vICAgICAgICAgICAgICAgICBkYXRlRm9ybWF0PVwiTU1NTSB5eXl5XCJcclxuICAvLyAgICAgICAgICAgICAgICAgc2hvd01vbnRoWWVhclBpY2tlclxyXG4gIC8vICAgICAgICAgICAgICAgICBtYXhEYXRlPXthZGRZZWFycyhuZXcgRGF0ZSgpLCAzKX1cclxuICAvLyAgICAgICAgICAgICAgICAgbWluRGF0ZT17bmV3IERhdGUoKX1cclxuICAvLyAgICAgICAgICAgICAgICAgd2l0aFBvcnRhbFxyXG4gIC8vICAgICAgICAgICAgICAgLz5cclxuICAvLyAgICAgICAgICAgICApfSAqL31cclxuICAvLyAgICAgICAgICAgPC9kaXY+XHJcbiAgLy8gICAgICAgICAgIDxkaXZcclxuICAvLyAgICAgICAgICAgICBzdHlsZT17e1xyXG4gIC8vICAgICAgICAgICAgICAgd2lkdGg6XHJcbiAgLy8gICAgICAgICAgICAgICAgIChzaXplLndpZHRoID4gODYwICYmICcxMDAlJykgfHxcclxuICAvLyAgICAgICAgICAgICAgICAgKHNpemUud2lkdGggPCA4NjAgJiYgc2l6ZS53aWR0aCA+IDY4MCAmJiAnNDclJykgfHxcclxuICAvLyAgICAgICAgICAgICAgICAgKHNpemUud2lkdGggPCA2ODAgJiYgc2l6ZS53aWR0aCA+IDUyMCAmJiAnNDAlJykgfHxcclxuICAvLyAgICAgICAgICAgICAgICAgKHNpemUud2lkdGggPCA1MjAgJiYgJzQ3JScpLFxyXG4gIC8vICAgICAgICAgICAgICAgZ3JpZENvbHVtblN0YXJ0OiBzaXplLndpZHRoIDwgODYwID8gJzEnIDogJ3Vuc2V0JyxcclxuICAvLyAgICAgICAgICAgICAgIGdyaWRDb2x1bW5FbmQ6IHNpemUud2lkdGggPCA4NjAgPyAnMycgOiAndW5zZXQnLFxyXG4gIC8vICAgICAgICAgICAgIH19XHJcbiAgLy8gICAgICAgICAgICAgY2xhc3NOYW1lPVwicGxhY2Utc2VsZi1jZW50ZXIgYmctd2hpdGUgcm91bmRlZC0yeGwgcHktMyBweC0zIG1kQ29udGFpbmVyOnB5LTMgbWRDb250YWluZXI6cHgtNCBsZ0NvbnRhaW5lcjpweC02IGxnQ29udGFpbmVyOnB5LTQgc2hhZG93LW1kIGdyaWQgZ3JpZC1jb2xzLTJmciBpdGVtcy1jZW50ZXIgdGV4dC14cyBtZENvbnRhaW5lcjp0ZXh0LXNtIGxnQ29udGFpbmVyOnRleHQtYmFzZVwiXHJcbiAgLy8gICAgICAgICAgID5cclxuICAvLyAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgLy8gICAgICAgICAgICAgICA8aW1nXHJcbiAgLy8gICAgICAgICAgICAgICAgIHNyYz1cIi9jYXNoLWZsb3cvdGF4LnN2Z1wiXHJcbiAgLy8gICAgICAgICAgICAgICAgIGhlaWdodD17KHNpemUud2lkdGggPiA4NjAgJiYgMjUpIHx8IChzaXplLndpZHRoIDwgODYwICYmIHNpemUud2lkdGggPiA2ODAgJiYgMjIpIHx8IChzaXplLndpZHRoIDwgNjgwICYmIDE4KX1cclxuICAvLyAgICAgICAgICAgICAgICAgd2lkdGg9eyhzaXplLndpZHRoID4gODYwICYmIDI1KSB8fCAoc2l6ZS53aWR0aCA8IDg2MCAmJiBzaXplLndpZHRoID4gNjgwICYmIDIyKSB8fCAoc2l6ZS53aWR0aCA8IDY4MCAmJiAxOCl9XHJcbiAgLy8gICAgICAgICAgICAgICAvPlxyXG4gIC8vICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWwtMlwiPlRheDo8L3A+XHJcbiAgLy8gICAgICAgICAgICAgPC9kaXY+XHJcbiAgLy8gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCIgc3R5bGU9e3sgdGV4dEFsaWduTGFzdDogJ3JpZ2h0JyB9fT5cclxuICAvLyAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cInRheC1pbnB1dFwiIHZhbHVlPXtzZWxlY3RlZFByb2plY3QudGF4fSBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgZm9jdXM6b3V0bGluZS1ub25lXCIgLz5cclxuICAvLyAgICAgICAgICAgICAgIDxwPiU8L3A+XHJcbiAgLy8gICAgICAgICAgICAgPC9kaXY+XHJcbiAgLy8gICAgICAgICAgIDwvZGl2PlxyXG4gIC8vICAgICAgICAgPC9kaXY+XHJcbiAgLy8gICAgICAgICA8ZGl2IGlkPVwiY2hhcnRDb250YWluZXJcIiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC0xLzIgcC00IG1kQ29udGFpbmVyOnAtOCBiZy13aGl0ZSByb3VuZGVkLTJ4bCBtdC0xMiBzaGFkb3ctbWRcIj5cclxuICAvLyAgICAgICAgICAgey8qIDxjYW52YXMgcmVmPXtjaGFydFJlZn0gaGVpZ2h0PXs3NX0+PC9jYW52YXM+ICovfVxyXG4gIC8vICAgICAgICAgPC9kaXY+XHJcbiAgLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBncmlkIGdyaWQtY29scy0yZnIgZ3JpZC1yb3dzLTNmciBsZzFDb250YWluZXI6Z3JpZC1jb2xzLTNmciBsZzFDb250YWluZXI6Z3JpZC1yb3dzLTJmciBnYXAteC02IHNtQ29udGFpbmVyOmdhcC14LTEyIGdhcC15LTggbXQtMTJcIj5cclxuICAvLyAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgcm91bmRlZC0yeGwgcHktMyBweC0zIG1kQ29udGFpbmVyOnB5LTMgbWRDb250YWluZXI6cHgtNCBsZ0NvbnRhaW5lcjpweC02IGxnQ29udGFpbmVyOnB5LTQgc2hhZG93LW1kIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciB0ZXh0LXhzIG1kQ29udGFpbmVyOnRleHQtc20gbGdDb250YWluZXI6dGV4dC1iYXNlXCI+XHJcbiAgLy8gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gIC8vICAgICAgICAgICAgICAgPGltZ1xyXG4gIC8vICAgICAgICAgICAgICAgICBzcmM9XCIvY2FzaC1mbG93L3JldmVudWUuc3ZnXCJcclxuICAvLyAgICAgICAgICAgICAgICAgaGVpZ2h0PXsoc2l6ZS53aWR0aCA+IDg2MCAmJiAyNSkgfHwgKHNpemUud2lkdGggPCA4NjAgJiYgc2l6ZS53aWR0aCA+IDY4MCAmJiAyMikgfHwgKHNpemUud2lkdGggPCA2ODAgJiYgMTgpfVxyXG4gIC8vICAgICAgICAgICAgICAgICB3aWR0aD17KHNpemUud2lkdGggPiA4NjAgJiYgMjUpIHx8IChzaXplLndpZHRoIDwgODYwICYmIHNpemUud2lkdGggPiA2ODAgJiYgMjIpIHx8IChzaXplLndpZHRoIDwgNjgwICYmIDE4KX1cclxuICAvLyAgICAgICAgICAgICAgIC8+XHJcbiAgLy8gICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtbC0yXCI+VG90YWwgcmV2ZW51ZTo8L3A+XHJcbiAgLy8gICAgICAgICAgICAgPC9kaXY+XHJcbiAgLy8gICAgICAgICAgICAgPHA+JHt0b3RhbFJldmVudWV9PC9wPlxyXG4gIC8vICAgICAgICAgICA8L2Rpdj5cclxuICAvLyAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgcm91bmRlZC0yeGwgcHktMyBweC0zIG1kQ29udGFpbmVyOnB5LTMgbWRDb250YWluZXI6cHgtNCBsZ0NvbnRhaW5lcjpweC02IGxnQ29udGFpbmVyOnB5LTQgc2hhZG93LW1kIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciB0ZXh0LXhzIG1kQ29udGFpbmVyOnRleHQtc20gbGdDb250YWluZXI6dGV4dC1iYXNlXCI+XHJcbiAgLy8gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gIC8vICAgICAgICAgICAgICAgPGltZ1xyXG4gIC8vICAgICAgICAgICAgICAgICBzcmM9XCIvY2FzaC1mbG93L21vbnRobHkuc3ZnXCJcclxuICAvLyAgICAgICAgICAgICAgICAgaGVpZ2h0PXsoc2l6ZS53aWR0aCA+IDg2MCAmJiAyNSkgfHwgKHNpemUud2lkdGggPCA4NjAgJiYgc2l6ZS53aWR0aCA+IDY4MCAmJiAyMikgfHwgKHNpemUud2lkdGggPCA2ODAgJiYgMTgpfVxyXG4gIC8vICAgICAgICAgICAgICAgICB3aWR0aD17KHNpemUud2lkdGggPiA4NjAgJiYgMjUpIHx8IChzaXplLndpZHRoIDwgODYwICYmIHNpemUud2lkdGggPiA2ODAgJiYgMjIpIHx8IChzaXplLndpZHRoIDwgNjgwICYmIDE4KX1cclxuICAvLyAgICAgICAgICAgICAgIC8+XHJcbiAgLy8gICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtbC0yXCI+TW9udGhseSByZXZlbnVlOjwvcD5cclxuICAvLyAgICAgICAgICAgICA8L2Rpdj5cclxuICAvLyAgICAgICAgICAgICA8cD4ke21vbnRobHlSZXZlbnVlfTwvcD5cclxuICAvLyAgICAgICAgICAgPC9kaXY+XHJcbiAgLy8gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIHJvdW5kZWQtMnhsIHB5LTMgcHgtMyBtZENvbnRhaW5lcjpweS0zIG1kQ29udGFpbmVyOnB4LTQgbGdDb250YWluZXI6cHgtNiBsZ0NvbnRhaW5lcjpweS00IHNoYWRvdy1tZCBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgdGV4dC14cyBtZENvbnRhaW5lcjp0ZXh0LXNtIGxnQ29udGFpbmVyOnRleHQtYmFzZVwiPlxyXG4gIC8vICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAvLyAgICAgICAgICAgICAgIDxpbWdcclxuICAvLyAgICAgICAgICAgICAgICAgc3JjPVwiL2Nhc2gtZmxvdy9jb3N0cy5zdmdcIlxyXG4gIC8vICAgICAgICAgICAgICAgICBoZWlnaHQ9eyhzaXplLndpZHRoID4gODYwICYmIDI1KSB8fCAoc2l6ZS53aWR0aCA8IDg2MCAmJiBzaXplLndpZHRoID4gNjgwICYmIDIyKSB8fCAoc2l6ZS53aWR0aCA8IDY4MCAmJiAxOCl9XHJcbiAgLy8gICAgICAgICAgICAgICAgIHdpZHRoPXsoc2l6ZS53aWR0aCA+IDg2MCAmJiAyNSkgfHwgKHNpemUud2lkdGggPCA4NjAgJiYgc2l6ZS53aWR0aCA+IDY4MCAmJiAyMikgfHwgKHNpemUud2lkdGggPCA2ODAgJiYgMTgpfVxyXG4gIC8vICAgICAgICAgICAgICAgLz5cclxuICAvLyAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1sLTJcIj5Ub3RhbCBjb3N0czo8L3A+XHJcbiAgLy8gICAgICAgICAgICAgPC9kaXY+XHJcbiAgLy8gICAgICAgICAgICAgPHA+JHt0b3RhbENvc3RzfTwvcD5cclxuICAvLyAgICAgICAgICAgPC9kaXY+XHJcbiAgLy8gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIHJvdW5kZWQtMnhsIHB5LTMgcHgtMyBtZENvbnRhaW5lcjpweS0zIG1kQ29udGFpbmVyOnB4LTQgbGdDb250YWluZXI6cHgtNiBsZ0NvbnRhaW5lcjpweS00IHNoYWRvdy1tZCBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgdGV4dC14cyBtZENvbnRhaW5lcjp0ZXh0LXNtIGxnQ29udGFpbmVyOnRleHQtYmFzZVwiPlxyXG4gIC8vICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAvLyAgICAgICAgICAgICAgIDxpbWdcclxuICAvLyAgICAgICAgICAgICAgICAgc3JjPVwiL2Nhc2gtZmxvdy9tb250aGx5LWNvc3RzLnN2Z1wiXHJcbiAgLy8gICAgICAgICAgICAgICAgIGhlaWdodD17KHNpemUud2lkdGggPiA4NjAgJiYgMjUpIHx8IChzaXplLndpZHRoIDwgODYwICYmIHNpemUud2lkdGggPiA2ODAgJiYgMjIpIHx8IChzaXplLndpZHRoIDwgNjgwICYmIDE4KX1cclxuICAvLyAgICAgICAgICAgICAgICAgd2lkdGg9eyhzaXplLndpZHRoID4gODYwICYmIDI1KSB8fCAoc2l6ZS53aWR0aCA8IDg2MCAmJiBzaXplLndpZHRoID4gNjgwICYmIDIyKSB8fCAoc2l6ZS53aWR0aCA8IDY4MCAmJiAxOCl9XHJcbiAgLy8gICAgICAgICAgICAgICAvPlxyXG4gIC8vICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWwtMlwiPk1vbnRobHkgY29zdHM6PC9wPlxyXG4gIC8vICAgICAgICAgICAgIDwvZGl2PlxyXG4gIC8vICAgICAgICAgICAgIDxwPiR7bW9udGhseUNvc3RzfTwvcD5cclxuICAvLyAgICAgICAgICAgPC9kaXY+XHJcbiAgLy8gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIHJvdW5kZWQtMnhsIHB5LTMgcHgtMyBtZENvbnRhaW5lcjpweS0zIG1kQ29udGFpbmVyOnB4LTQgbGdDb250YWluZXI6cHgtNiBsZ0NvbnRhaW5lcjpweS00IHNoYWRvdy1tZCBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgdGV4dC14cyBtZENvbnRhaW5lcjp0ZXh0LXNtIGxnQ29udGFpbmVyOnRleHQtYmFzZVwiPlxyXG4gIC8vICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAvLyAgICAgICAgICAgICAgIDxpbWdcclxuICAvLyAgICAgICAgICAgICAgICAgc3JjPVwiL2Nhc2gtZmxvdy9tZWdhcGhvbmUuc3ZnXCJcclxuICAvLyAgICAgICAgICAgICAgICAgaGVpZ2h0PXsoc2l6ZS53aWR0aCA+IDg2MCAmJiAyNSkgfHwgKHNpemUud2lkdGggPCA4NjAgJiYgc2l6ZS53aWR0aCA+IDY4MCAmJiAyMikgfHwgKHNpemUud2lkdGggPCA2ODAgJiYgMTgpfVxyXG4gIC8vICAgICAgICAgICAgICAgICB3aWR0aD17KHNpemUud2lkdGggPiA4NjAgJiYgMjUpIHx8IChzaXplLndpZHRoIDwgODYwICYmIHNpemUud2lkdGggPiA2ODAgJiYgMjIpIHx8IChzaXplLndpZHRoIDwgNjgwICYmIDE4KX1cclxuICAvLyAgICAgICAgICAgICAgIC8+XHJcbiAgLy8gICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtbC0yXCI+R3Jvc3MgcHJvZml0OjwvcD5cclxuICAvLyAgICAgICAgICAgICA8L2Rpdj5cclxuICAvLyAgICAgICAgICAgICA8cD4ke2dyb3NzUHJvZml0fTwvcD5cclxuICAvLyAgICAgICAgICAgPC9kaXY+XHJcbiAgLy8gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIHJvdW5kZWQtMnhsIHB5LTMgcHgtMyBtZENvbnRhaW5lcjpweS0zIG1kQ29udGFpbmVyOnB4LTQgbGdDb250YWluZXI6cHgtNiBsZ0NvbnRhaW5lcjpweS00IHNoYWRvdy1tZCBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgdGV4dC14cyBtZENvbnRhaW5lcjp0ZXh0LXNtIGxnQ29udGFpbmVyOnRleHQtYmFzZVwiPlxyXG4gIC8vICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAvLyAgICAgICAgICAgICAgIDxpbWdcclxuICAvLyAgICAgICAgICAgICAgICAgc3JjPVwiL2Nhc2gtZmxvdy9uZXQtd29ydGguc3ZnXCJcclxuICAvLyAgICAgICAgICAgICAgICAgaGVpZ2h0PXsoc2l6ZS53aWR0aCA+IDg2MCAmJiAyNSkgfHwgKHNpemUud2lkdGggPCA4NjAgJiYgc2l6ZS53aWR0aCA+IDY4MCAmJiAyMikgfHwgKHNpemUud2lkdGggPCA2ODAgJiYgMTgpfVxyXG4gIC8vICAgICAgICAgICAgICAgICB3aWR0aD17KHNpemUud2lkdGggPiA4NjAgJiYgMjUpIHx8IChzaXplLndpZHRoIDwgODYwICYmIHNpemUud2lkdGggPiA2ODAgJiYgMjIpIHx8IChzaXplLndpZHRoIDwgNjgwICYmIDE4KX1cclxuICAvLyAgICAgICAgICAgICAgIC8+XHJcbiAgLy8gICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtbC0yXCI+TmV0IHByb2ZpdDo8L3A+XHJcbiAgLy8gICAgICAgICAgICAgPC9kaXY+XHJcbiAgLy8gICAgICAgICAgICAgPHA+JHtuZXRQcm9maXR9PC9wPlxyXG4gIC8vICAgICAgICAgICA8L2Rpdj5cclxuICAvLyAgICAgICAgIDwvZGl2PlxyXG4gIC8vICAgICAgICAgey8qIFJldmVudWUgKi99XHJcbiAgLy8gICAgICAgICA8ZGl2XHJcbiAgLy8gICAgICAgICAgIHJlZj17cmV2ZW51ZVJlZn1cclxuICAvLyAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiA1NSB9fVxyXG4gIC8vICAgICAgICAgICBjbGFzc05hbWU9XCJvdmVyZmxvdy1oaWRkZW4gcmVsYXRpdmUgdy1mdWxsIHJvdW5kZWQtMnhsIGJnLXdoaXRlIGRhcms6YmctYmFja2dyb3VuZCBweC00IHB5LTQgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgbXQtMTIgZmxleCBmbGV4LXdyYXAgc2hhZG93LW1kXCJcclxuICAvLyAgICAgICAgID5cclxuICAvLyAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyXCI+XHJcbiAgLy8gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZ0NvbnRhaW5lcjptbC0yXCI+XHJcbiAgLy8gICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGxnQ29udGFpbmVyOnRleHQtYmFzZVwiPlJldmVudWU8L3A+XHJcbiAgLy8gICAgICAgICAgICAgPC9kaXY+XHJcbiAgLy8gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZ0NvbnRhaW5lcjptci0yIGZsZXggZmxleC1ub3dyYXAgaXRlbXMtY2VudGVyXCI+XHJcbiAgLy8gICAgICAgICAgICAgICA8aW1nXHJcbiAgLy8gICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uUmV2ZW51ZUVsZW1lbnRBZGR9XHJcbiAgLy8gICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCJcclxuICAvLyAgICAgICAgICAgICAgICAgc3JjPVwiL2Nhc2gtZmxvdy9hZGQuc3ZnXCJcclxuICAvLyAgICAgICAgICAgICAgICAgaGVpZ2h0PXsoc2l6ZS53aWR0aCA+IDg2MCAmJiAyMikgfHwgKHNpemUud2lkdGggPCA4NjAgJiYgc2l6ZS53aWR0aCA+IDY4MCAmJiAxOCkgfHwgKHNpemUud2lkdGggPCA2ODAgJiYgMTYpfVxyXG4gIC8vICAgICAgICAgICAgICAgICB3aWR0aD17KHNpemUud2lkdGggPiA4NjAgJiYgMjIpIHx8IChzaXplLndpZHRoIDwgODYwICYmIHNpemUud2lkdGggPiA2ODAgJiYgMTgpIHx8IChzaXplLndpZHRoIDwgNjgwICYmIDE2KX1cclxuICAvLyAgICAgICAgICAgICAgIC8+XHJcbiAgLy8gICAgICAgICAgICAgICA8aW1nXHJcbiAgLy8gICAgICAgICAgICAgICAgIHJlZj17ZHJvcERvd25JY29ufVxyXG4gIC8vICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvblJldmVudWVTaG93fVxyXG4gIC8vICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC0yIGN1cnNvci1wb2ludGVyXCJcclxuICAvLyAgICAgICAgICAgICAgICAgc3JjPVwiL2Nhc2gtZmxvdy9kcm9wZG93bi5zdmdcIlxyXG4gIC8vICAgICAgICAgICAgICAgICBoZWlnaHQ9eyhzaXplLndpZHRoID4gODYwICYmIDIyKSB8fCAoc2l6ZS53aWR0aCA8IDg2MCAmJiBzaXplLndpZHRoID4gNjgwICYmIDE4KSB8fCAoc2l6ZS53aWR0aCA8IDY4MCAmJiAxNil9XHJcbiAgLy8gICAgICAgICAgICAgICAgIHdpZHRoPXsoc2l6ZS53aWR0aCA+IDg2MCAmJiAyMikgfHwgKHNpemUud2lkdGggPCA4NjAgJiYgc2l6ZS53aWR0aCA+IDY4MCAmJiAxOCkgfHwgKHNpemUud2lkdGggPCA2ODAgJiYgMTYpfVxyXG4gIC8vICAgICAgICAgICAgICAgLz5cclxuICAvLyAgICAgICAgICAgICA8L2Rpdj5cclxuICAvLyAgICAgICAgICAgPC9kaXY+XHJcbiAgLy8gICAgICAgICAgIDxkaXZcclxuICAvLyAgICAgICAgICAgICByZWY9e2lubmVyQ29udGFpbmVyUmV2ZW51ZVJlZn1cclxuICAvLyAgICAgICAgICAgICBjbGFzc05hbWU9e2B3LWZ1bGwgJHtcclxuICAvLyAgICAgICAgICAgICAgIHNpemUud2lkdGggPCAxMTIwXHJcbiAgLy8gICAgICAgICAgICAgICAgID8gJ3RleHQtc20gbWRDb250YWluZXI6dGV4dC1iYXNlIGxnMUNvbnRhaW5lcjpteC04IGxnMUNvbnRhaW5lcjptYi02IG10LTQgIGJnLWJhY2tncm91bmQgcm91bmRlZC0yeGwgcHgtNCBtZENvbnRhaW5lcjpweC02IHB5LTQnXHJcbiAgLy8gICAgICAgICAgICAgICAgIDogJ3ctZnVsbCBteC04IG1iLTYgbXQtNCAgYmctYmFja2dyb3VuZCByb3VuZGVkLTJ4bCBweC00IG1kQ29udGFpbmVyOnB4LTYgcHktNCdcclxuICAvLyAgICAgICAgICAgICB9YH1cclxuICAvLyAgICAgICAgICAgPlxyXG4gIC8vICAgICAgICAgICAgIHsvKiA8aHIgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5IHctZnVsbFwiIC8+ICovfVxyXG4gIC8vICAgICAgICAgICAgIDxkaXZcclxuICAvLyAgICAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiBzaXplLndpZHRoIDwgNTIwICYmICcwLjZyZW0nIH19XHJcbiAgLy8gICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgZ3JpZCBncmlkLWNvbHMtNmZyIGl0ZW1zLWNlbnRlciB0ZXh0LXhzIG1kQ29udGFpbmVyOnRleHQtc20gbGcxQ29udGFpbmVyOnRleHQtYmFzZVwiXHJcbiAgLy8gICAgICAgICAgICAgPlxyXG4gIC8vICAgICAgICAgICAgICAgPGRpdj5uYW1lPC9kaXY+XHJcbiAgLy8gICAgICAgICAgICAgICA8ZGl2PnR5cGU8L2Rpdj5cclxuICAvLyAgICAgICAgICAgICAgIDxkaXY+YW1vdW50PC9kaXY+XHJcbiAgLy8gICAgICAgICAgICAgICA8ZGl2PnN0YXJ0PC9kaXY+XHJcbiAgLy8gICAgICAgICAgICAgICA8ZGl2PmVuZDwvZGl2PlxyXG4gIC8vICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAvLyAgICAgICAgICAgICA8L2Rpdj5cclxuICAvLyAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5IHctZnVsbFwiIC8+XHJcbiAgLy8gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLWZ1bGwgdy1mdWxsIHJvdW5kZWQtMnhsIGZsZXggZmxleC13cmFwIGZsZXgtY29sXCI+XHJcbiAgLy8gICAgICAgICAgICAgICA8RHJhZ0Ryb3BDb250ZXh0IG9uRHJhZ0VuZD17aGFuZGxlT25EcmFnRW5kfT5cclxuICAvLyAgICAgICAgICAgICAgICAgPERyb3BwYWJsZSBkcm9wcGFibGVJZD1cImVsZW1lbnRzXCI+XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgeyhwcm92aWRlZCkgPT4gKFxyXG4gIC8vICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbGVtZW50c1wiIHsuLi5wcm92aWRlZC5kcm9wcGFibGVQcm9wc30gcmVmPXtwcm92aWRlZC5pbm5lclJlZn0+XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICAgIHtyZXZlbnVlRWxlbWVudHMgJiZcclxuICAvLyAgICAgICAgICAgICAgICAgICAgICAgICByZXZlbnVlRWxlbWVudHMubWFwKChlbGVtZW50LCBpbmRleCkgPT4ge1xyXG4gIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZWxlbWVudCk7XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJhZ2dhYmxlIGtleT17ZWxlbWVudC5pbmRleH0gZHJhZ2dhYmxlSWQ9e2VsZW1lbnQuaW5kZXh9IGluZGV4PXtpbmRleH0+XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyhwcm92aWRlZCkgPT4gKFxyXG4gIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJldmVudWVFbGVtZW50XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVkPXtwcm92aWRlZH1cclxuICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0UmV2ZW51ZUVsZW1lbnRzPXtzZXRSZXZlbnVlRWxlbWVudHN9XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1haW5Eb2N1bWVudD17bWFpbkRvY3VtZW50fVxyXG4gIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0SWQ9e3Byb2plY3RJZH1cclxuICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnRJZD17ZG9jdW1lbnRJZH1cclxuICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV2ZW51ZUVsZW1lbnRzPXtyZXZlbnVlRWxlbWVudHN9XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQ9e2VsZW1lbnR9XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4PXtpbmRleH1cclxuICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9EcmFnZ2FibGU+XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gIC8vICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gIC8vICAgICAgICAgICAgICAgICAgICAgICB7cHJvdmlkZWQucGxhY2Vob2xkZXJ9XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAvLyAgICAgICAgICAgICAgICAgICApfVxyXG4gIC8vICAgICAgICAgICAgICAgICA8L0Ryb3BwYWJsZT5cclxuICAvLyAgICAgICAgICAgICAgIDwvRHJhZ0Ryb3BDb250ZXh0PlxyXG4gIC8vICAgICAgICAgICAgIDwvZGl2PlxyXG4gIC8vICAgICAgICAgICA8L2Rpdj5cclxuICAvLyAgICAgICAgIDwvZGl2PlxyXG4gIC8vICAgICAgICAgey8qIENvc3RzICovfVxyXG4gIC8vICAgICAgICAgPGRpdlxyXG4gIC8vICAgICAgICAgICByZWY9e2Nvc3RzUmVmfVxyXG4gIC8vICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IDU1IH19XHJcbiAgLy8gICAgICAgICAgIGNsYXNzTmFtZT1cIm92ZXJmbG93LWhpZGRlbiByZWxhdGl2ZSB3LWZ1bGwgcm91bmRlZC0yeGwgYmctd2hpdGUgZGFyazpiZy1iYWNrZ3JvdW5kIHB4LTQgcHktNCBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBtdC04IGZsZXggZmxleC13cmFwIHNoYWRvdy1tZFwiXHJcbiAgLy8gICAgICAgICA+XHJcbiAgLy8gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlclwiPlxyXG4gIC8vICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGdDb250YWluZXI6bWwtMlwiPlxyXG4gIC8vICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBsZ0NvbnRhaW5lcjp0ZXh0LWJhc2VcIj5Db3N0czwvcD5cclxuICAvLyAgICAgICAgICAgICA8L2Rpdj5cclxuICAvLyAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnQ29udGFpbmVyOm1yLTIgZmxleCBmbGV4LW5vd3JhcCBpdGVtcy1jZW50ZXJcIj5cclxuICAvLyAgICAgICAgICAgICAgIDxpbWdcclxuICAvLyAgICAgICAgICAgICAgICAgb25DbGljaz17b25Db3N0c0VsZW1lbnRBZGR9XHJcbiAgLy8gICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCJcclxuICAvLyAgICAgICAgICAgICAgICAgc3JjPVwiL2Nhc2gtZmxvdy9hZGQuc3ZnXCJcclxuICAvLyAgICAgICAgICAgICAgICAgaGVpZ2h0PXsoc2l6ZS53aWR0aCA+IDg2MCAmJiAyMikgfHwgKHNpemUud2lkdGggPCA4NjAgJiYgc2l6ZS53aWR0aCA+IDY4MCAmJiAxOCkgfHwgKHNpemUud2lkdGggPCA2ODAgJiYgMTYpfVxyXG4gIC8vICAgICAgICAgICAgICAgICB3aWR0aD17KHNpemUud2lkdGggPiA4NjAgJiYgMjIpIHx8IChzaXplLndpZHRoIDwgODYwICYmIHNpemUud2lkdGggPiA2ODAgJiYgMTgpIHx8IChzaXplLndpZHRoIDwgNjgwICYmIDE2KX1cclxuICAvLyAgICAgICAgICAgICAgIC8+XHJcbiAgLy8gICAgICAgICAgICAgICA8aW1nXHJcbiAgLy8gICAgICAgICAgICAgICAgIHJlZj17ZHJvcERvd25JY29uQ29zdHN9XHJcbiAgLy8gICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uQ29zdHNTaG93fVxyXG4gIC8vICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC0yIGN1cnNvci1wb2ludGVyXCJcclxuICAvLyAgICAgICAgICAgICAgICAgc3JjPVwiL2Nhc2gtZmxvdy9kcm9wZG93bi5zdmdcIlxyXG4gIC8vICAgICAgICAgICAgICAgICBoZWlnaHQ9eyhzaXplLndpZHRoID4gODYwICYmIDIyKSB8fCAoc2l6ZS53aWR0aCA8IDg2MCAmJiBzaXplLndpZHRoID4gNjgwICYmIDE4KSB8fCAoc2l6ZS53aWR0aCA8IDY4MCAmJiAxNil9XHJcbiAgLy8gICAgICAgICAgICAgICAgIHdpZHRoPXsoc2l6ZS53aWR0aCA+IDg2MCAmJiAyMikgfHwgKHNpemUud2lkdGggPCA4NjAgJiYgc2l6ZS53aWR0aCA+IDY4MCAmJiAxOCkgfHwgKHNpemUud2lkdGggPCA2ODAgJiYgMTYpfVxyXG4gIC8vICAgICAgICAgICAgICAgLz5cclxuICAvLyAgICAgICAgICAgICA8L2Rpdj5cclxuICAvLyAgICAgICAgICAgPC9kaXY+XHJcbiAgLy8gICAgICAgICAgIDxkaXZcclxuICAvLyAgICAgICAgICAgICByZWY9e2lubmVyQ29udGFpbmVyQ29zdHNSZWZ9XHJcbiAgLy8gICAgICAgICAgICAgY2xhc3NOYW1lPXtgdy1mdWxsICR7XHJcbiAgLy8gICAgICAgICAgICAgICBzaXplLndpZHRoIDwgMTEyMFxyXG4gIC8vICAgICAgICAgICAgICAgICA/ICd0ZXh0LXNtIG1kQ29udGFpbmVyOnRleHQtYmFzZSBsZzFDb250YWluZXI6bXgtOCBsZzFDb250YWluZXI6bWItNiBtdC00ICBiZy1iYWNrZ3JvdW5kIHJvdW5kZWQtMnhsIHB4LTQgbWRDb250YWluZXI6cHgtNiBweS00J1xyXG4gIC8vICAgICAgICAgICAgICAgICA6ICd3LWZ1bGwgbXgtOCBtYi02IG10LTQgIGJnLWJhY2tncm91bmQgcm91bmRlZC0yeGwgcHgtNCBtZENvbnRhaW5lcjpweC02IHB5LTQnXHJcbiAgLy8gICAgICAgICAgICAgfWB9XHJcbiAgLy8gICAgICAgICAgID5cclxuICAvLyAgICAgICAgICAgICB7LyogPGhyIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeSB3LWZ1bGxcIiAvPiAqL31cclxuICAvLyAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBncmlkIGdyaWQtY29scy02ZnIgaXRlbXMtY2VudGVyXCI+XHJcbiAgLy8gICAgICAgICAgICAgICA8ZGl2Pm5hbWU8L2Rpdj5cclxuICAvLyAgICAgICAgICAgICAgIDxkaXY+dHlwZTwvZGl2PlxyXG4gIC8vICAgICAgICAgICAgICAgPGRpdj5hbW91bnQ8L2Rpdj5cclxuICAvLyAgICAgICAgICAgICAgIDxkaXY+c3RhcnQ8L2Rpdj5cclxuICAvLyAgICAgICAgICAgICAgIDxkaXY+ZW5kPC9kaXY+XHJcbiAgLy8gICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gIC8vICAgICAgICAgICAgIDwvZGl2PlxyXG4gIC8vICAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnkgdy1mdWxsXCIgLz5cclxuICAvLyAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtZnVsbCB3LWZ1bGwgcm91bmRlZC0yeGwgZmxleCBmbGV4LXdyYXAgZmxleC1jb2xcIj5cclxuICAvLyAgICAgICAgICAgICAgIDxEcmFnRHJvcENvbnRleHQgb25EcmFnRW5kPXtjb3N0c0hhbmRsZU9uRHJhZ0VuZH0+XHJcbiAgLy8gICAgICAgICAgICAgICAgIDxEcm9wcGFibGUgZHJvcHBhYmxlSWQ9XCJlbGVtZW50c1wiPlxyXG4gIC8vICAgICAgICAgICAgICAgICAgIHsocHJvdmlkZWQpID0+IChcclxuICAvLyAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWxlbWVudHNcIiB7Li4ucHJvdmlkZWQuZHJvcHBhYmxlUHJvcHN9IHJlZj17cHJvdmlkZWQuaW5uZXJSZWZ9PlxyXG4gIC8vICAgICAgICAgICAgICAgICAgICAgICB7Y29zdHNFbGVtZW50cyAmJlxyXG4gIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGNvc3RzRWxlbWVudHMubWFwKChlbGVtZW50LCBpbmRleCkgPT4ge1xyXG4gIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZWxlbWVudCk7XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJhZ2dhYmxlIGtleT17ZWxlbWVudC5pbmRleH0gZHJhZ2dhYmxlSWQ9e2VsZW1lbnQuaW5kZXh9IGluZGV4PXtpbmRleH0+XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyhwcm92aWRlZCkgPT4gKFxyXG4gIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvc3RzRWxlbWVudFxyXG4gIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlZD17cHJvdmlkZWR9XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldENvc3RzRWxlbWVudHM9e3NldENvc3RzRWxlbWVudHN9XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1haW5Eb2N1bWVudD17bWFpbkRvY3VtZW50fVxyXG4gIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0SWQ9e3Byb2plY3RJZH1cclxuICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnRJZD17ZG9jdW1lbnRJZH1cclxuICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29zdHNFbGVtZW50cz17Y29zdHNFbGVtZW50c31cclxuICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudD17ZWxlbWVudH1cclxuICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg9e2luZGV4fVxyXG4gIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0RyYWdnYWJsZT5cclxuICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICAgIHtwcm92aWRlZC5wbGFjZWhvbGRlcn1cclxuICAvLyAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gIC8vICAgICAgICAgICAgICAgICAgICl9XHJcbiAgLy8gICAgICAgICAgICAgICAgIDwvRHJvcHBhYmxlPlxyXG4gIC8vICAgICAgICAgICAgICAgPC9EcmFnRHJvcENvbnRleHQ+XHJcbiAgLy8gICAgICAgICAgICAgPC9kaXY+XHJcbiAgLy8gICAgICAgICAgIDwvZGl2PlxyXG4gIC8vICAgICAgICAgPC9kaXY+XHJcbiAgLy8gICAgICAgPC9kaXY+XHJcbiAgLy8gICAgIDwvZGl2PlxyXG4gIC8vICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCBzbmFwc2hvdCA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oJ3Byb2plY3RzJykuZ2V0KCk7XHJcblxyXG4gIGNvbnN0IHByb2plY3RzID0gW107XHJcbiAgc25hcHNob3QuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbiAgICBwcm9qZWN0cy5wdXNoKGRvYy5kYXRhKCkpO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBwYXRocyA9IHByb2plY3RzLm1hcCgocHJvamVjdCkgPT4gKHtcclxuICAgIHBhcmFtczoge1xyXG4gICAgICBwcm9qZWN0OiBwcm9qZWN0LnByb2plY3ROYW1lLnRvU3RyaW5nKCksXHJcbiAgICAgIGlkOiBwcm9qZWN0LnByb2plY3RJZC50b1N0cmluZygpLFxyXG4gICAgfSxcclxuICB9KSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwYXRoczogcGF0aHMsXHJcbiAgICBmYWxsYmFjazogdHJ1ZSxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcclxuICBjb25zb2xlLmxvZyhwYXJhbXMpO1xyXG4gIC8vIGxldCByZWYgPSBkYi5jb2xsZWN0aW9uKCdwcm9qZWN0cycpLndoZXJlKCdwcm9qZWN0TmFtZScsICc9PScsIHBhcmFtcy5wcm9qZWN0KTtcclxuICBsZXQgcmVmID0gZGJcclxuICAgIC5jb2xsZWN0aW9uKCdwcm9qZWN0cycpXHJcbiAgICAuZG9jKHBhcmFtcy5pZClcclxuICAgIC5jb2xsZWN0aW9uKCdjYXNoRmxvdycpXHJcbiAgICAuZG9jKHBhcmFtcy5wcm9qZWN0KVxyXG4gICAgLmNvbGxlY3Rpb24oJ2lucHV0cycpXHJcbiAgICAud2hlcmUoJ3Byb2plY3RJZCcsICc9PScsIHBhcmFtcy5pZCk7XHJcblxyXG4gIGNvbnN0IHNuYXBzaG90ID0gYXdhaXQgcmVmLmdldCgpO1xyXG4gIGNvbnN0IHByb2plY3QgPSBbXTtcclxuXHJcbiAgc25hcHNob3QuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShzYWZlSnNvblN0cmluZ2lmeShkb2MuZGF0YSgpKSk7XHJcbiAgICBwcm9qZWN0LnB1c2goeyAuLi5kYXRhIH0pO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHsgcHJvamVjdCB9LFxyXG4gICAgcmV2YWxpZGF0ZTogMSxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVW5pcXVlQ2FzaGZsb3dQYWdlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9